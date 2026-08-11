import React from 'react';
import { AlertCircle, ArrowUpRight, Calculator, CheckCircle2, PieChart } from 'lucide-react';
import {
  computeJobCostingEngine,
  formatPct,
  formatUSD,
} from '../../engine';
import { AppState } from '../../types';

interface JobCostingEngineViewProps {
  state: AppState;
  onSelectBookingForPL: (bookingId: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const JobCostingEngineView: React.FC<JobCostingEngineViewProps> = ({
  state,
  onSelectBookingForPL,
  onNavigateTab,
}) => {
  const engineItems = computeJobCostingEngine(state);

  // Totals for summary row
  const totalRev = engineItems.reduce((s, i) => s + i.totalRevenue, 0);
  const totalCogs = engineItems.reduce((s, i) => s + i.totalCOGS, 0);
  const totalFees = engineItems.reduce((s, i) => s + i.bankFees, 0);
  const totalProfit = engineItems.reduce((s, i) => s + i.netProfit, 0);
  const totalMargin = totalRev === 0 ? 0 : totalProfit / totalRev;
  const totalDeposits = engineItems.reduce((s, i) => s + i.trackedDeposit, 0);

  const maxRev = Math.max(...engineItems.map((i) => i.totalRevenue), 1);

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
            Job Costing &amp; Profitability Engine
          </h1>
          <p className="text-xs text-[#888888] mt-0.5">
            Automated P&amp;L consolidation per booking. Excludes corrupted transactions and highlights health warnings.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Booking ID</th>
                <th className="p-3">Customer Name</th>
                <th className="p-3 text-right">Total Revenue</th>
                <th className="p-3 text-right">Total COGS</th>
                <th className="p-3 text-right">Bank Fees</th>
                <th className="p-3 text-right">Net Profit</th>
                <th className="p-3 text-right">Margin %</th>
                <th className="p-3 text-right">Tracked Deposit</th>
                <th className="p-3 text-center">Health Status</th>
                <th className="p-3 text-center">Drilldown</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {engineItems.map((item) => {
                const barPct = Math.min(
                  100,
                  Math.max(4, (item.totalRevenue / maxRev) * 100)
                );

                return (
                  <tr
                    key={item.bookingId}
                    className="hover:bg-[#F5F5F2] transition-colors"
                  >
                    <td className="p-3 font-mono font-bold text-[#051C2C]">
                      {item.bookingId}
                    </td>
                    <td className="p-3 text-[#051C2C] font-medium">
                      {item.customerName}
                    </td>

                    {/* Revenue with inline data bar */}
                    <td className="p-3 text-right font-mono font-bold relative">
                      <div className="relative z-10">{formatUSD(item.totalRevenue)}</div>
                      <div
                        className="absolute right-2 top-2 bottom-2 bg-[#2251FF]/10 rounded-xs pointer-events-none"
                        style={{ width: `${barPct}%` }}
                      />
                    </td>

                    <td className="p-3 text-right font-mono">{formatUSD(item.totalCOGS)}</td>
                    <td className="p-3 text-right font-mono text-[#888888]">
                      {formatUSD(item.bankFees)}
                    </td>

                    {/* Net Profit highlighted */}
                    <td
                      className={`p-3 text-right font-garamond font-bold text-sm ${
                        item.netProfit < 0 ? 'text-[#D32F2F]' : 'text-[#051C2C]'
                      }`}
                    >
                      {formatUSD(item.netProfit)}
                    </td>

                    <td className="p-3 text-right font-mono font-semibold text-[#2251FF]">
                      {formatPct(item.profitMarginPct)}
                    </td>

                    <td className="p-3 text-right font-mono text-purple-700">
                      {formatUSD(item.trackedDeposit)}
                    </td>

                    <td className="p-3 text-center">
                      {item.badRowsCount === 0 ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-[10px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>CLEAN</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] font-bold text-[10px] border border-[#D32F2F]/20">
                          <AlertCircle className="w-3 h-3" />
                          <span>{item.healthWarning}</span>
                        </span>
                      )}
                    </td>

                    <td className="p-3 text-center">
                      <button
                        onClick={() => {
                          onSelectBookingForPL(item.bookingId);
                          onNavigateTab('booking_pl');
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#2251FF]/10 text-[#2251FF] hover:bg-[#2251FF] hover:text-white transition-colors cursor-pointer font-medium text-[11px]"
                      >
                        <PieChart className="w-3.5 h-3.5" />
                        <span>P&amp;L</span>
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* Total Summary Row */}
              <tr className="bg-[#051C2C]/5 font-bold border-t-2 border-[#051C2C]/20 text-[#051C2C]">
                <td className="p-3 uppercase tracking-wider font-garamond text-sm">
                  TOTALS
                </td>
                <td className="p-3 text-[#888888] font-normal text-[11px]">
                  Consolidated ({engineItems.length} Bookings)
                </td>
                <td className="p-3 text-right font-mono font-bold text-[#2251FF]">
                  {formatUSD(totalRev)}
                </td>
                <td className="p-3 text-right font-mono">{formatUSD(totalCogs)}</td>
                <td className="p-3 text-right font-mono text-[#888888]">
                  {formatUSD(totalFees)}
                </td>
                <td className="p-3 text-right font-garamond text-base font-bold">
                  {formatUSD(totalProfit)}
                </td>
                <td className="p-3 text-right font-mono font-bold text-[#2251FF]">
                  {formatPct(totalMargin)}
                </td>
                <td className="p-3 text-right font-mono text-purple-800">
                  {formatUSD(totalDeposits)}
                </td>
                <td className="p-3 text-center text-[#888888] font-normal text-[10px]">
                  Auto-Checked
                </td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
