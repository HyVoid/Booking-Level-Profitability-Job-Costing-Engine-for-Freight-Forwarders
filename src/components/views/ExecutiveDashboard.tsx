import React from 'react';
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  DollarSign,
  Info,
  PieChart,
  Ship,
  TrendingUp,
} from 'lucide-react';
import {
  computeJobCostingEngine,
  formatNumber,
  formatPct,
  formatUSD,
  getCalculatedTransactions,
} from '../../engine';
import { AppState } from '../../types';

interface ExecutiveDashboardProps {
  state: AppState;
  onNavigateTab: (tab: any) => void;
  onSelectBookingForPL: (bookingId: string) => void;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({
  state,
  onNavigateTab,
  onSelectBookingForPL,
}) => {
  const engineItems = computeJobCostingEngine(state);
  const calculatedTxns = getCalculatedTransactions(state);

  const totalRevenue = engineItems.reduce((s, i) => s + i.totalRevenue, 0);
  const totalCOGS = engineItems.reduce((s, i) => s + i.totalCOGS, 0);
  const totalBankFees = engineItems.reduce((s, i) => s + i.bankFees, 0);
  const totalNetProfit = engineItems.reduce((s, i) => s + i.netProfit, 0);
  const overallMargin = totalRevenue === 0 ? 0 : totalNetProfit / totalRevenue;

  const errorTxnsCount = calculatedTxns.filter((t) => t.dataHealthStatus !== 'OK').length;
  const activeBookingsCount = state.bookings.length;
  const totalContainersCount = state.containers.length;

  // Rank bookings by net profit
  const sortedByProfit = [...engineItems].sort((a, b) => b.netProfit - a.netProfit);
  const topProfitable = sortedByProfit.slice(0, 4);
  const leastProfitable = sortedByProfit.slice(-4).reverse();

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Top Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-garamond text-2xl md:text-3xl font-bold text-[#051C2C] tracking-tight">
            Executive Financial Overview
          </h1>
          <p className="text-xs text-[#888888] mt-1">
            Real-time freight job costing, multi-currency conversion, and margin health analytics.
          </p>
        </div>

        {/* Global Data Health Alert Banner */}
        <div>
          {errorTxnsCount === 0 ? (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C853]/10 border border-[#00C853]/30 text-[#00C853] text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>✅ ALL DATA HEALTHY</span>
            </div>
          ) : (
            <button
              onClick={() => onNavigateTab('transactions')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/30 text-[#D32F2F] text-xs font-semibold hover:bg-[#D32F2F]/20 transition-colors cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>⚠️ ATTENTION: {errorTxnsCount} TXN ERRORS DETECTED</span>
            </button>
          )}
        </div>
      </div>

      {/* Insight Recommendation Block */}
      <div className="insight-box p-4 rounded-xl text-xs space-y-1">
        <div className="flex items-center gap-2 font-bold text-[#051C2C]">
          <Info className="w-4 h-4 text-[#2251FF]" />
          <span>Operational Insight &amp; Cost Allocation Policy</span>
        </div>
        <p className="text-[#051C2C]/80 leading-relaxed pl-6">
          System allocation policy is currently set to{' '}
          <strong className="text-[#2251FF] font-semibold">
            {state.setupParams.sharedCostAllocationPolicy}
          </strong>
          . Booking-level shared freight fees are auto-distributed across active containers in the Container Analysis tab. All currency conversions reflect active rates against base currency ({state.setupParams.baseCurrency}).
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <div className="bg-white rounded-xl p-5 card-hover border border-[#E8E8E6] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#888888] mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Total Revenue
            </span>
            <DollarSign className="w-4 h-4 text-[#2251FF]" />
          </div>
          <div>
            <div className="font-garamond text-3xl font-bold text-[#051C2C]">
              {formatUSD(totalRevenue)}
            </div>
            <p className="text-[11px] text-[#888888] mt-1">
              From {activeBookingsCount} active booking orders
            </p>
          </div>
        </div>

        {/* Total COGS */}
        <div className="bg-white rounded-xl p-5 card-hover border border-[#E8E8E6] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#888888] mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Total COGS
            </span>
            <TrendingUp className="w-4 h-4 text-[#051C2C]" />
          </div>
          <div>
            <div className="font-garamond text-3xl font-bold text-[#051C2C]">
              {formatUSD(totalCOGS)}
            </div>
            <p className="text-[11px] text-[#888888] mt-1">
              Carrier freight, THCs, drayage &amp; customs
            </p>
          </div>
        </div>

        {/* Net Profit */}
        <div className="bg-white rounded-xl p-5 card-hover border border-[#E8E8E6] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#888888] mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Net Profit
            </span>
            <span className="font-semibold text-xs text-[#2251FF]">
              {formatPct(overallMargin)} Margin
            </span>
          </div>
          <div>
            <div
              className={`font-garamond text-3xl font-bold ${
                totalNetProfit >= 0 ? 'text-[#051C2C]' : 'text-[#D32F2F]'
              }`}
            >
              {formatUSD(totalNetProfit)}
            </div>
            <p className="text-[11px] text-[#888888] mt-1">
              Net after COGS &amp; {formatUSD(totalBankFees)} bank fees
            </p>
          </div>
        </div>

        {/* Operational Volume */}
        <div className="bg-white rounded-xl p-5 card-hover border border-[#E8E8E6] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#888888] mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Fleet Volume
            </span>
            <Ship className="w-4 h-4 text-[#2251FF]" />
          </div>
          <div>
            <div className="font-garamond text-3xl font-bold text-[#051C2C]">
              {formatNumber(totalContainersCount)} <span className="text-sm font-sans font-normal text-[#888888]">TEU / Units</span>
            </div>
            <p className="text-[11px] text-[#888888] mt-1">
              {activeBookingsCount} active bookings logged
            </p>
          </div>
        </div>
      </div>

      {/* Top Rankings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Most Profitable Bookings */}
        <div className="bg-white rounded-xl p-6 border border-[#E8E8E6] card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-[#2251FF]" />
              <h3 className="font-garamond text-lg font-bold text-[#051C2C]">
                Top Profitable Bookings
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab('engine')}
              className="text-[11px] text-[#2251FF] font-semibold hover:underline cursor-pointer"
            >
              View All Engine Details &rarr;
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="table-header">
                <tr>
                  <th className="p-2.5">Booking ID</th>
                  <th className="p-2.5">Customer</th>
                  <th className="p-2.5 text-right">Revenue</th>
                  <th className="p-2.5 text-right">Net Profit</th>
                  <th className="p-2.5 text-right">Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E6]">
                {topProfitable.map((item) => (
                  <tr
                    key={item.bookingId}
                    onClick={() => {
                      onSelectBookingForPL(item.bookingId);
                      onNavigateTab('booking_pl');
                    }}
                    className="hover:bg-[#F5F5F2] cursor-pointer transition-colors"
                  >
                    <td className="p-2.5 font-semibold text-[#2251FF]">
                      {item.bookingId}
                    </td>
                    <td className="p-2.5 text-[#051C2C]">{item.customerName}</td>
                    <td className="p-2.5 text-right font-mono">
                      {formatUSD(item.totalRevenue)}
                    </td>
                    <td className="p-2.5 text-right font-mono font-bold text-[#051C2C]">
                      {formatUSD(item.netProfit)}
                    </td>
                    <td className="p-2.5 text-right font-mono font-semibold text-[#2251FF]">
                      {formatPct(item.profitMarginPct)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Least Profitable / Anomaly Bookings */}
        <div className="bg-white rounded-xl p-6 border border-[#E8E8E6] card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ArrowDownRight className="w-5 h-5 text-[#D32F2F]" />
              <h3 className="font-garamond text-lg font-bold text-[#051C2C]">
                Margin Risk Watchlist
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab('booking_pl')}
              className="text-[11px] text-[#2251FF] font-semibold hover:underline cursor-pointer"
            >
              Drilldown P&amp;L &rarr;
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="table-header">
                <tr>
                  <th className="p-2.5">Booking ID</th>
                  <th className="p-2.5">Customer</th>
                  <th className="p-2.5 text-right">Revenue</th>
                  <th className="p-2.5 text-right">Net Profit</th>
                  <th className="p-2.5 text-right">Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E6]">
                {leastProfitable.map((item) => (
                  <tr
                    key={item.bookingId}
                    onClick={() => {
                      onSelectBookingForPL(item.bookingId);
                      onNavigateTab('booking_pl');
                    }}
                    className="hover:bg-[#F5F5F2] cursor-pointer transition-colors"
                  >
                    <td className="p-2.5 font-semibold text-[#051C2C]">
                      {item.bookingId}
                    </td>
                    <td className="p-2.5 text-[#051C2C]">{item.customerName}</td>
                    <td className="p-2.5 text-right font-mono">
                      {formatUSD(item.totalRevenue)}
                    </td>
                    <td
                      className={`p-2.5 text-right font-mono font-bold ${
                        item.netProfit < 0 ? 'text-[#D32F2F]' : 'text-[#051C2C]'
                      }`}
                    >
                      {formatUSD(item.netProfit)}
                    </td>
                    <td className="p-2.5 text-right font-mono text-[#888888]">
                      {formatPct(item.profitMarginPct)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
