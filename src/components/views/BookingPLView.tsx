import React, { useState } from 'react';
import { DollarSign, PieChart, Ship } from 'lucide-react';
import {
  formatPct,
  formatUSD,
  getCalculatedTransactions,
} from '../../engine';
import { AppState } from '../../types';

interface BookingPLViewProps {
  state: AppState;
  selectedBookingId: string;
  onSelectBookingId: (bookingId: string) => void;
}

export const BookingPLView: React.FC<BookingPLViewProps> = ({
  state,
  selectedBookingId,
  onSelectBookingId,
}) => {
  const currentBookingId =
    selectedBookingId || state.bookings[0]?.bookingId || '';

  const bookingObj = state.bookings.find((b) => b.bookingId === currentBookingId);
  const calculatedTxns = getCalculatedTransactions(state);

  // Filter transactions for this booking that are health Status OK
  const bookingTxns = calculatedTxns.filter(
    (t) => t.bookingId === currentBookingId && t.dataHealthStatus === 'OK'
  );

  const totalRev = bookingTxns
    .filter((t) => t.financialTreatment === 'Revenue')
    .reduce((s, t) => s + t.usdEquivalent, 0);

  const totalCogs = bookingTxns
    .filter((t) => t.financialTreatment === 'COGS')
    .reduce((s, t) => s + t.usdEquivalent, 0);

  const totalFees = bookingTxns
    .filter((t) => t.financialTreatment === 'Bank Fee')
    .reduce((s, t) => s + t.usdEquivalent, 0);

  const totalDeposit = bookingTxns
    .filter((t) => t.financialTreatment === 'Deposit')
    .reduce((s, t) => s + t.usdEquivalent, 0);

  const netProfit = totalRev - totalCogs - totalFees;
  const marginPct = totalRev === 0 ? 0 : netProfit / totalRev;

  // Breakdown by unique service codes in this booking
  const uniqueServices = Array.from(new Set(bookingTxns.map((t) => t.serviceCode)));

  const serviceBreakdown = uniqueServices.map((srvCode) => {
    const srvObj = state.services.find((s) => s.serviceCode === srvCode);
    const srvName = srvObj ? srvObj.serviceName : srvCode;

    const rev = bookingTxns
      .filter((t) => t.serviceCode === srvCode && t.financialTreatment === 'Revenue')
      .reduce((s, t) => s + t.usdEquivalent, 0);

    const cogs = bookingTxns
      .filter((t) => t.serviceCode === srvCode && t.financialTreatment === 'COGS')
      .reduce((s, t) => s + t.usdEquivalent, 0);

    const fee = bookingTxns
      .filter((t) => t.serviceCode === srvCode && t.financialTreatment === 'Bank Fee')
      .reduce((s, t) => s + t.usdEquivalent, 0);

    const profit = rev - cogs - fee;
    const margin = rev === 0 ? 0 : profit / rev;

    return {
      serviceCode: srvCode,
      serviceName: srvName,
      revenue: rev,
      cogs,
      bankFee: fee,
      netProfit: profit,
      profitMarginPct: margin,
    };
  });

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
            Single Booking P&amp;L Drilldown
          </h1>
          <p className="text-xs text-[#888888] mt-0.5">
            Granular line-item service fee breakdown and margin analysis for target booking order.
          </p>
        </div>

        {/* Booking Dropdown Picker */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-[#E8E8E6] shadow-xs">
          <Ship className="w-4 h-4 text-[#2251FF]" />
          <span className="text-xs font-semibold text-[#051C2C]">Select Booking:</span>
          <select
            value={currentBookingId}
            onChange={(e) => onSelectBookingId(e.target.value)}
            className="editable-input px-3 py-1 rounded text-xs font-mono font-bold text-[#051C2C]"
          >
            {state.bookings.map((b) => (
              <option key={b.bookingId} value={b.bookingId}>
                {b.bookingId} — {b.customerName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Overview Card for Selected Booking */}
      {bookingObj && (
        <div className="bg-white rounded-xl p-6 border border-[#E8E8E6] card-hover grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 border-r border-[#E8E8E6] pr-4 space-y-1">
            <span className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider">
              Booking Master Info
            </span>
            <div className="font-garamond text-2xl font-bold text-[#051C2C]">
              {bookingObj.bookingId}
            </div>
            <p className="text-xs font-medium text-[#051C2C]">{bookingObj.customerName}</p>
            <div className="flex items-center gap-2 text-[11px] text-[#888888] pt-1">
              <span>Date: {bookingObj.orderDate}</span>
              <span>•</span>
              <span className="font-semibold text-[#2251FF]">{bookingObj.bookingStatus}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider">
              Total Revenue
            </span>
            <div className="font-garamond text-2xl font-bold text-[#2251FF]">
              {formatUSD(totalRev)}
            </div>
            <p className="text-[11px] text-[#888888]">Gross Invoiced Amount</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider">
              Total COGS
            </span>
            <div className="font-garamond text-2xl font-bold text-[#051C2C]">
              {formatUSD(totalCogs)}
            </div>
            <p className="text-[11px] text-[#888888]">Direct Freight &amp; Port Expenses</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider">
              Net Profit / Margin
            </span>
            <div
              className={`font-garamond text-2xl font-bold ${
                netProfit >= 0 ? 'text-[#051C2C]' : 'text-[#D32F2F]'
              }`}
            >
              {formatUSD(netProfit)}
            </div>
            <p className="text-xs font-semibold text-[#2251FF]">
              {formatPct(marginPct)} Net Margin
            </p>
          </div>
        </div>
      )}

      {/* Service Itemized P&L Table */}
      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="p-4 border-b border-[#E8E8E6] bg-[#F5F5F2]/50 flex items-center justify-between">
          <h3 className="font-garamond text-lg font-bold text-[#051C2C]">
            Service-Level Profitability Breakdown
          </h3>
          <span className="text-xs text-[#888888]">
            {serviceBreakdown.length} active service charges for {currentBookingId}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Service Code</th>
                <th className="p-3">Service Name</th>
                <th className="p-3 text-right">Revenue</th>
                <th className="p-3 text-right">COGS</th>
                <th className="p-3 text-right">Bank Fees</th>
                <th className="p-3 text-right">Net Profit</th>
                <th className="p-3 text-right">Margin %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {serviceBreakdown.map((row) => (
                <tr key={row.serviceCode} className="hover:bg-[#F5F5F2] transition-colors">
                  <td className="p-3 font-mono font-bold text-[#051C2C]">
                    {row.serviceCode}
                  </td>
                  <td className="p-3 font-medium text-[#051C2C]">{row.serviceName}</td>
                  <td className="p-3 text-right font-mono font-bold text-[#2251FF]">
                    {formatUSD(row.revenue)}
                  </td>
                  <td className="p-3 text-right font-mono">{formatUSD(row.cogs)}</td>
                  <td className="p-3 text-right font-mono text-[#888888]">
                    {formatUSD(row.bankFee)}
                  </td>
                  <td
                    className={`p-3 text-right font-garamond font-bold text-sm ${
                      row.netProfit < 0 ? 'text-[#D32F2F]' : 'text-[#051C2C]'
                    }`}
                  >
                    {formatUSD(row.netProfit)}
                  </td>
                  <td className="p-3 text-right font-mono font-semibold text-[#2251FF]">
                    {formatPct(row.profitMarginPct)}
                  </td>
                </tr>
              ))}

              {/* Booking Summary Footer Row */}
              <tr className="bg-[#051C2C]/5 font-bold border-t-2 border-[#051C2C]/20 text-[#051C2C]">
                <td className="p-3 font-garamond text-sm">TOTAL</td>
                <td className="p-3 text-[#888888] font-normal text-[11px]">
                  Booking Consolidated
                </td>
                <td className="p-3 text-right font-mono text-[#2251FF]">
                  {formatUSD(totalRev)}
                </td>
                <td className="p-3 text-right font-mono">{formatUSD(totalCogs)}</td>
                <td className="p-3 text-right font-mono text-[#888888]">
                  {formatUSD(totalFees)}
                </td>
                <td className="p-3 text-right font-garamond text-base">
                  {formatUSD(netProfit)}
                </td>
                <td className="p-3 text-right font-mono text-[#2251FF]">
                  {formatPct(marginPct)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
