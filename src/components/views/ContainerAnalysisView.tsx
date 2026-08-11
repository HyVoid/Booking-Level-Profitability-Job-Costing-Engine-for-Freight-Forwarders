import React, { useState } from 'react';
import { Boxes, Info, Layers, Ship } from 'lucide-react';
import {
  computeContainerAnalysis,
  formatUSD,
} from '../../engine';
import { AppState } from '../../types';

interface ContainerAnalysisViewProps {
  state: AppState;
  selectedBookingId: string;
  onSelectBookingId: (bookingId: string) => void;
}

export const ContainerAnalysisView: React.FC<ContainerAnalysisViewProps> = ({
  state,
  selectedBookingId,
  onSelectBookingId,
}) => {
  const currentBookingId =
    selectedBookingId || state.bookings[0]?.bookingId || '';

  const bookingContainers = state.containers.filter(
    (c) => c.bookingId === currentBookingId
  );

  const [selectedContainerId, setSelectedContainerId] = useState<string>(
    bookingContainers[0]?.containerId || ''
  );

  // Fallback selected container if booking changes
  const activeContainerId =
    bookingContainers.some((c) => c.containerId === selectedContainerId)
      ? selectedContainerId
      : bookingContainers[0]?.containerId || '';

  const containerCount =
    bookingContainers.length === 0 ? 1 : bookingContainers.length;

  const analysisRows = computeContainerAnalysis(
    state,
    currentBookingId,
    activeContainerId
  );

  const totalDirectRev = analysisRows.reduce((s, r) => s + r.directRevenue, 0);
  const totalDirectCogs = analysisRows.reduce((s, r) => s + r.directCOGS, 0);
  const totalSharedCogs = analysisRows.reduce((s, r) => s + r.sharedCOGS, 0);
  const totalAllocatedCogs = analysisRows.reduce((s, r) => s + r.allocatedCOGS, 0);
  const totalNetProfit = analysisRows.reduce((s, r) => s + r.netProfit, 0);

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
            Container-Level Shared Cost Allocation Engine
          </h1>
          <p className="text-xs text-[#888888] mt-0.5">
            Fair distribution of booking-level shared expenses (e.g. ocean freight) down to individual containers.
          </p>
        </div>

        {/* Dropdown pickers */}
        <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-xl border border-[#E8E8E6] shadow-xs text-xs">
          <div className="flex items-center gap-1.5">
            <Ship className="w-4 h-4 text-[#2251FF]" />
            <span className="font-semibold text-[#051C2C]">Booking:</span>
            <select
              value={currentBookingId}
              onChange={(e) => {
                onSelectBookingId(e.target.value);
                const firstCnt = state.containers.find(
                  (c) => c.bookingId === e.target.value
                );
                if (firstCnt) setSelectedContainerId(firstCnt.containerId);
              }}
              className="editable-input px-2.5 py-1 rounded font-mono font-bold text-[#051C2C]"
            >
              {state.bookings.map((b) => (
                <option key={b.bookingId} value={b.bookingId}>
                  {b.bookingId}
                </option>
              ))}
            </select>
          </div>

          <span className="text-[#888888]">|</span>

          <div className="flex items-center gap-1.5">
            <Boxes className="w-4 h-4 text-[#2251FF]" />
            <span className="font-semibold text-[#051C2C]">Container:</span>
            <select
              value={activeContainerId}
              onChange={(e) => setSelectedContainerId(e.target.value)}
              className="editable-input px-2.5 py-1 rounded font-mono font-bold text-[#051C2C]"
            >
              {bookingContainers.map((c) => (
                <option key={c.containerId} value={c.containerId}>
                  {c.containerId} ({c.sizeType})
                </option>
              ))}
              {bookingContainers.length === 0 && (
                <option value="">[No Container Assigned]</option>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* Allocation Rule Explanation Box */}
      <div className="insight-box p-4 rounded-xl text-xs space-y-1">
        <div className="flex items-center justify-between font-bold text-[#051C2C]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#2251FF]" />
            <span>Active Allocation Policy: {state.setupParams.sharedCostAllocationPolicy}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#2251FF]/10 text-[#2251FF] font-mono text-[11px]">
            Booking Container Volume: {containerCount} Units
          </span>
        </div>
        <p className="text-[#051C2C]/80 leading-relaxed pl-6">
          Formula:{' '}
          <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E8E8E6] text-[#2251FF]">
            Allocated COGS = Direct Container COGS + (Shared Booking COGS / {containerCount})
          </code>
          . Prevents double-counting shared bills while giving true per-unit margin visibility.
        </p>
      </div>

      {/* Main Analysis Table */}
      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="p-4 border-b border-[#E8E8E6] bg-[#F5F5F2]/50 flex items-center justify-between">
          <h3 className="font-garamond text-lg font-bold text-[#051C2C]">
            Container Cost Allocation Matrix — {activeContainerId || 'Unassigned'}
          </h3>
          <span className="text-xs text-[#888888] font-mono">
            Booking: {currentBookingId}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Service Code</th>
                <th className="p-3">Service Name</th>
                <th className="p-3 text-right">Direct Container Rev</th>
                <th className="p-3 text-right">Direct Container COGS</th>
                <th className="p-3 text-right">Shared Booking COGS</th>
                <th className="p-3 text-right">Final Allocated COGS</th>
                <th className="p-3 text-right">Container Net Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {analysisRows.map((row) => (
                <tr key={row.serviceCode} className="hover:bg-[#F5F5F2] transition-colors">
                  <td className="p-3 font-mono font-bold text-[#051C2C]">
                    {row.serviceCode}
                  </td>
                  <td className="p-3 font-medium text-[#051C2C]">{row.serviceName}</td>
                  <td className="p-3 text-right font-mono font-bold text-[#2251FF]">
                    {formatUSD(row.directRevenue)}
                  </td>
                  <td className="p-3 text-right font-mono">{formatUSD(row.directCOGS)}</td>
                  <td className="p-3 text-right font-mono text-[#888888]">
                    {formatUSD(row.sharedCOGS)}
                  </td>
                  <td className="p-3 text-right font-mono font-bold text-[#051C2C]">
                    {formatUSD(row.allocatedCOGS)}
                  </td>
                  <td
                    className={`p-3 text-right font-garamond font-bold text-sm ${
                      row.netProfit < 0 ? 'text-[#D32F2F]' : 'text-[#051C2C]'
                    }`}
                  >
                    {formatUSD(row.netProfit)}
                  </td>
                </tr>
              ))}

              {/* Total Footer */}
              <tr className="bg-[#051C2C]/5 font-bold border-t-2 border-[#051C2C]/20 text-[#051C2C]">
                <td className="p-3 font-garamond text-sm">TOTAL</td>
                <td className="p-3 text-[#888888] font-normal text-[11px]">
                  Unit Allocation Summary
                </td>
                <td className="p-3 text-right font-mono text-[#2251FF]">
                  {formatUSD(totalDirectRev)}
                </td>
                <td className="p-3 text-right font-mono">{formatUSD(totalDirectCogs)}</td>
                <td className="p-3 text-right font-mono text-[#888888]">
                  {formatUSD(totalSharedCogs)}
                </td>
                <td className="p-3 text-right font-mono font-bold">
                  {formatUSD(totalAllocatedCogs)}
                </td>
                <td className="p-3 text-right font-garamond text-base">
                  {formatUSD(totalNetProfit)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
