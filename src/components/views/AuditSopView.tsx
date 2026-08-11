import React from 'react';
import { AlertCircle, BookOpen, CheckCircle2, FileText, ShieldAlert } from 'lucide-react';

export const AuditSopView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-up text-xs">
      {/* Title */}
      <div>
        <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
          Lookup Chain Audit Report &amp; System SOP Manual
        </h1>
        <p className="text-xs text-[#888888] mt-0.5">
          Comprehensive data integrity documentation, failure fallback matrices, and daily operating procedures.
        </p>
      </div>

      {/* Audit Report Section */}
      <div className="bg-white rounded-xl p-6 border border-[#E8E8E6] card-hover space-y-4">
        <div className="flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <ShieldAlert className="w-5 h-5 text-[#2251FF]" />
          <h2 className="font-garamond text-xl font-bold text-[#051C2C]">
            0. Multi-Hop Lookup Chain Integrity Audit Report
          </h2>
        </div>

        <p className="text-[#051C2C]/80 leading-relaxed">
          Before performing job costing calculations, the engine executes multi-hop data linkage audits. Below are the 3 critical multi-hop chains monitored in real time:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[11px]">
          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6]">
            <span className="font-bold text-[#051C2C] block mb-1">
              1. FX &amp; Treatment Chain (4 Hops)
            </span>
            <p className="text-[#888888]">
              Raw Txn &rarr; Setup_Params (Treatment) &rarr; Setup_Params (FX Rate) &rarr; USD Equivalent &rarr; Job Costing Engine
            </p>
          </div>

          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6]">
            <span className="font-bold text-[#051C2C] block mb-1">
              2. Container Cost Allocation Chain (4 Hops)
            </span>
            <p className="text-[#888888]">
              Container Master &rarr; Booking Master (Container Count) &rarr; Setup_Params (Policy) &rarr; Shared Cost Allocation
            </p>
          </div>

          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6]">
            <span className="font-bold text-[#051C2C] block mb-1">
              3. Service Profitability Matrix (3 Hops)
            </span>
            <p className="text-[#888888]">
              Raw Txn (Service Code) &rarr; Service Master (Name &amp; Category) &rarr; Service Profitability Aggregation
            </p>
          </div>
        </div>

        {/* Fallback Matrix Table */}
        <h3 className="font-garamond text-base font-bold text-[#051C2C] pt-2">
          Failure Fallback &amp; Risk Mitigation Matrix
        </h3>

        <div className="overflow-x-auto border border-[#E8E8E6] rounded-md">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-2.5">Lookup Node</th>
                <th className="p-2.5">Failure Cause</th>
                <th className="p-2.5">Fallback Value</th>
                <th className="p-2.5">Risk Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              <tr className="hover:bg-[#F5F5F2]">
                <td className="p-2.5 font-semibold text-[#051C2C]">
                  Transaction Type
                </td>
                <td className="p-2.5 text-[#888888]">Typo in type name</td>
                <td className="p-2.5 font-mono font-bold text-[#2251FF]">
                  "COGS" (Conservative)
                </td>
                <td className="p-2.5">
                  Prevents artificial revenue/profit inflation when type is unknown.
                </td>
              </tr>
              <tr className="hover:bg-[#F5F5F2]">
                <td className="p-2.5 font-semibold text-[#051C2C]">
                  Currency &rarr; FX Rate
                </td>
                <td className="p-2.5 text-[#888888]">Unregistered currency code</td>
                <td className="p-2.5 font-mono font-bold text-[#D32F2F]">
                  0.00 (NOT 1.0)
                </td>
                <td className="p-2.5">
                  Prevents foreign amounts (e.g. 50,000 THB) from blowing up into $50,000 USD. Triggers diagnostic alert.
                </td>
              </tr>
              <tr className="hover:bg-[#F5F5F2]">
                <td className="p-2.5 font-semibold text-[#051C2C]">
                  Booking ID &rarr; Container Count
                </td>
                <td className="p-2.5 text-[#888888]">Container master missing entry</td>
                <td className="p-2.5 font-mono font-bold text-[#051C2C]">
                  1 (Division Protection)
                </td>
                <td className="p-2.5">
                  Prevents <code className="font-mono">#DIV/0!</code> crashes in container allocation formulas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SOP Operations Manual */}
      <div className="bg-white rounded-xl p-6 border border-[#E8E8E6] card-hover space-y-4">
        <div className="flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <BookOpen className="w-5 h-5 text-[#2251FF]" />
          <h2 className="font-garamond text-xl font-bold text-[#051C2C]">
            Standard Operating Procedures (SOP) &amp; Daily Maintenance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#2251FF]/5 border border-[#2251FF]/20 space-y-1">
            <div className="font-garamond font-bold text-sm text-[#2251FF]">
              Step 1: Create Master Data
            </div>
            <p className="text-[#051C2C]/80">
              Register Booking ID in <strong>Bookings</strong> and map container serial numbers in <strong>Containers</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#2251FF]/5 border border-[#2251FF]/20 space-y-1">
            <div className="font-garamond font-bold text-sm text-[#2251FF]">
              Step 2: Log Ledger Transactions
            </div>
            <p className="text-[#051C2C]/80">
              Enter customer invoices &amp; vendor carrier costs in <strong>Raw Transactions</strong> or use Bulk CSV Import.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#2251FF]/5 border border-[#2251FF]/20 space-y-1">
            <div className="font-garamond font-bold text-sm text-[#2251FF]">
              Step 3: Monitor Diagnostic Status
            </div>
            <p className="text-[#051C2C]/80">
              Verify that <strong>Data Health Status</strong> shows <span className="text-[#00C853] font-bold">OK</span>. Add missing currency FX rates in Setup Params if needed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#2251FF]/5 border border-[#2251FF]/20 space-y-1">
            <div className="font-garamond font-bold text-sm text-[#2251FF]">
              Step 4: P&amp;L Analysis &amp; Backup
            </div>
            <p className="text-[#051C2C]/80">
              Review margins in <strong>Job Costing</strong> &amp; <strong>Booking P&amp;L</strong>. Use <strong>Export Backup</strong> to save state files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
