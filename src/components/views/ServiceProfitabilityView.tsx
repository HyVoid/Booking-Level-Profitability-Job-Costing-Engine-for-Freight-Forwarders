import React from 'react';
import { Grid3X3, TrendingUp } from 'lucide-react';
import {
  computeServiceProfitability,
  formatPct,
  formatUSD,
} from '../../engine';
import { AppState } from '../../types';

interface ServiceProfitabilityViewProps {
  state: AppState;
}

export const ServiceProfitabilityView: React.FC<ServiceProfitabilityViewProps> = ({
  state,
}) => {
  const serviceItems = computeServiceProfitability(state);

  const totalRev = serviceItems.reduce((s, i) => s + i.totalRevenue, 0);
  const totalCogs = serviceItems.reduce((s, i) => s + i.totalCOGS, 0);
  const totalFees = serviceItems.reduce((s, i) => s + i.totalBankFees, 0);
  const totalProfit = serviceItems.reduce((s, i) => s + i.netProfit, 0);
  const overallMargin = totalRev === 0 ? 0 : totalProfit / totalRev;

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
          Cross-Booking Service &amp; Fee Profitability
        </h1>
        <p className="text-xs text-[#888888] mt-0.5">
          Evaluate net yield across operational charge categories (Ocean Freight, THCs, Drayage, Customs, Docs).
        </p>
      </div>

      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-3">Service Code</th>
                <th className="p-3">Service Name</th>
                <th className="p-3">Category</th>
                <th className="p-3 text-center">Txn Count</th>
                <th className="p-3 text-right">Total Revenue</th>
                <th className="p-3 text-right">Total COGS</th>
                <th className="p-3 text-right">Bank Fees</th>
                <th className="p-3 text-right">Net Profit</th>
                <th className="p-3 text-right">Margin %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {serviceItems.map((item) => (
                <tr key={item.serviceCode} className="hover:bg-[#F5F5F2] transition-colors">
                  <td className="p-3 font-mono font-bold text-[#051C2C]">
                    {item.serviceCode}
                  </td>
                  <td className="p-3 font-medium text-[#051C2C]">{item.serviceName}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#051C2C]/5 text-[#051C2C] font-semibold text-[10px]">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-3 text-center font-mono font-medium text-[#888888]">
                    {item.transactionCount}
                  </td>
                  <td className="p-3 text-right font-mono font-bold text-[#2251FF]">
                    {formatUSD(item.totalRevenue)}
                  </td>
                  <td className="p-3 text-right font-mono">{formatUSD(item.totalCOGS)}</td>
                  <td className="p-3 text-right font-mono text-[#888888]">
                    {formatUSD(item.totalBankFees)}
                  </td>
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
                </tr>
              ))}

              {/* Summary Row */}
              <tr className="bg-[#051C2C]/5 font-bold border-t-2 border-[#051C2C]/20 text-[#051C2C]">
                <td className="p-3 font-garamond text-sm">TOTAL</td>
                <td className="p-3 text-[#888888] font-normal text-[11px]">
                  All Services Consolidated
                </td>
                <td className="p-3"></td>
                <td className="p-3 text-center font-mono">
                  {serviceItems.reduce((s, i) => s + i.transactionCount, 0)}
                </td>
                <td className="p-3 text-right font-mono text-[#2251FF]">
                  {formatUSD(totalRev)}
                </td>
                <td className="p-3 text-right font-mono">{formatUSD(totalCogs)}</td>
                <td className="p-3 text-right font-mono text-[#888888]">
                  {formatUSD(totalFees)}
                </td>
                <td className="p-3 text-right font-garamond text-base">
                  {formatUSD(totalProfit)}
                </td>
                <td className="p-3 text-right font-mono text-[#2251FF]">
                  {formatPct(overallMargin)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
