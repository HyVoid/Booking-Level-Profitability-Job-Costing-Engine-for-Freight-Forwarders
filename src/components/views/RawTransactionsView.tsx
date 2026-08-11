import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Plus, Receipt, Search, Trash2 } from 'lucide-react';
import {
  calculateTransaction,
  formatUSD,
  getCalculatedTransactions,
} from '../../engine';
import { AppState, RawTransactionItem } from '../../types';

interface RawTransactionsViewProps {
  state: AppState;
  onUpdateTransactions: (newTxns: RawTransactionItem[]) => void;
  onOpenBulkCsv: () => void;
}

export const RawTransactionsView: React.FC<RawTransactionsViewProps> = ({
  state,
  onUpdateTransactions,
  onOpenBulkCsv,
}) => {
  const [filterBooking, setFilterBooking] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');

  // Form state for adding new transaction
  const [newBookingId, setNewBookingId] = useState(
    state.bookings[0]?.bookingId || ''
  );
  const [newContainerId, setNewContainerId] = useState('');
  const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 10));
  const [newParty, setNewParty] = useState('');
  const [newServiceCode, setNewServiceCode] = useState(
    state.services[0]?.serviceCode || 'OCEAN_FRT'
  );
  const [newDescription, setNewDescription] = useState('');
  const [newType, setNewType] = useState('CARRIER_FREIGHT');
  const [newAllocLevel, setNewAllocLevel] = useState<'BOOKING' | 'CONTAINER'>(
    'BOOKING'
  );
  const [newAmount, setNewAmount] = useState<number>(1000);
  const [newCurrency, setNewCurrency] = useState('USD');
  const [newManualFx, setNewManualFx] = useState<number>(0);

  const calculatedTxns = getCalculatedTransactions(state);

  // Max USD amount for data bar scaling
  const maxUsd = Math.max(...calculatedTxns.map((t) => t.usdEquivalent), 1);

  const handleCellEdit = (
    idx: number,
    field: keyof RawTransactionItem,
    val: any
  ) => {
    const updated = [...state.transactions];
    updated[idx] = { ...updated[idx], [field]: val };
    onUpdateTransactions(updated);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newTxn: RawTransactionItem = {
      transactionId: `TXN-${Date.now().toString().slice(-5)}`,
      bookingId: newBookingId,
      containerId: newContainerId,
      transactionDate: newDate,
      customerVendor: newParty || 'Vendor Party',
      serviceCode: newServiceCode,
      description: newDescription || 'Operational Charge',
      transactionType: newType,
      allocationLevel: newAllocLevel,
      originalAmount: Number(newAmount) || 0,
      currency: newCurrency.toUpperCase(),
      manualFxRate: Number(newManualFx) || 0,
    };

    onUpdateTransactions([newTxn, ...state.transactions]);
    setNewDescription('');
    setNewAmount(1000);
  };

  const handleDelete = (id: string) => {
    onUpdateTransactions(state.transactions.filter((t) => t.transactionId !== id));
  };

  // Filtered dataset
  const filtered = calculatedTxns.filter((t) => {
    const matchesBk = filterBooking
      ? t.bookingId.toLowerCase().includes(filterBooking.toLowerCase())
      : true;
    const matchesStatus =
      filterStatus === 'ALL'
        ? true
        : filterStatus === 'OK'
        ? t.dataHealthStatus === 'OK'
        : t.dataHealthStatus !== 'OK';
    return matchesBk && matchesStatus;
  });

  const errorCount = calculatedTxns.filter((t) => t.dataHealthStatus !== 'OK').length;

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
            Raw Transactions Ledger &amp; Diagnostic Chain
          </h1>
          <p className="text-xs text-[#888888] mt-0.5">
            Full financial transaction entries with real-time multi-hop currency conversion and Data Health Diagnosis.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {errorCount > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] text-xs font-bold border border-[#D32F2F]/20">
              <AlertCircle className="w-4 h-4" />
              <span>{errorCount} Diagnostic Errors</span>
            </div>
          )}
          <button
            onClick={onOpenBulkCsv}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#2251FF] text-white text-xs font-semibold hover:bg-[#1a40cc] transition-colors cursor-pointer shadow-xs"
          >
            <Receipt className="w-4 h-4" />
            <span>Bulk CSV Import</span>
          </button>
        </div>
      </div>

      {/* Add Transaction Form */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-4 rounded-xl border border-[#E8E8E6] shadow-xs flex flex-wrap items-end gap-3 text-xs"
      >
        <div className="space-y-1">
          <label className="font-semibold text-[#051C2C] uppercase tracking-wider text-[10px]">
            Booking ID *
          </label>
          <select
            value={newBookingId}
            onChange={(e) => setNewBookingId(e.target.value)}
            className="editable-input px-2 py-1.5 rounded text-xs font-mono font-semibold"
          >
            {state.bookings.map((b) => (
              <option key={b.bookingId} value={b.bookingId}>
                {b.bookingId}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-[#051C2C] uppercase tracking-wider text-[10px]">
            Container ID
          </label>
          <select
            value={newContainerId}
            onChange={(e) => setNewContainerId(e.target.value)}
            className="editable-input px-2 py-1.5 rounded text-xs font-mono"
          >
            <option value="">[Shared Booking Level]</option>
            {state.containers
              .filter((c) => c.bookingId === newBookingId)
              .map((c) => (
                <option key={c.containerId} value={c.containerId}>
                  {c.containerId}
                </option>
              ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-[#051C2C] uppercase tracking-wider text-[10px]">
            Service Code *
          </label>
          <select
            value={newServiceCode}
            onChange={(e) => setNewServiceCode(e.target.value)}
            className="editable-input px-2 py-1.5 rounded text-xs font-mono"
          >
            {state.services.map((s) => (
              <option key={s.serviceCode} value={s.serviceCode}>
                {s.serviceCode} - {s.serviceName}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-[#051C2C] uppercase tracking-wider text-[10px]">
            Txn Type *
          </label>
          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="editable-input px-2 py-1.5 rounded text-xs"
          >
            {state.setupParams.transactionTypeMappings.map((m) => (
              <option key={m.transactionType} value={m.transactionType}>
                {m.transactionType} ({m.financialTreatment})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-[#051C2C] uppercase tracking-wider text-[10px]">
            Amount *
          </label>
          <input
            type="number"
            step="any"
            required
            value={newAmount}
            onChange={(e) => setNewAmount(parseFloat(e.target.value) || 0)}
            className="editable-input px-2 py-1.5 rounded text-xs w-24 font-mono text-right"
          />
        </div>

        <div className="space-y-1">
          <label className="font-semibold text-[#051C2C] uppercase tracking-wider text-[10px]">
            Currency
          </label>
          <input
            type="text"
            value={newCurrency}
            onChange={(e) => setNewCurrency(e.target.value.toUpperCase())}
            placeholder="USD"
            className="editable-input px-2 py-1.5 rounded text-xs w-16 font-mono font-bold text-center"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#2251FF] text-white text-xs font-semibold hover:bg-[#1a40cc] transition-colors cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Row</span>
        </button>
      </form>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#E8E8E6] text-xs">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-[#888888]" />
          <input
            type="text"
            value={filterBooking}
            onChange={(e) => setFilterBooking(e.target.value)}
            placeholder="Filter by Booking ID..."
            className="editable-input px-2.5 py-1 rounded text-xs w-48 font-mono"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#888888]">Filter Diagnostics:</span>
          <button
            onClick={() => setFilterStatus('ALL')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
              filterStatus === 'ALL'
                ? 'bg-[#051C2C] text-white'
                : 'bg-[#F5F5F2] text-[#051C2C] hover:bg-[#E8E8E6]'
            }`}
          >
            All ({calculatedTxns.length})
          </button>
          <button
            onClick={() => setFilterStatus('OK')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
              filterStatus === 'OK'
                ? 'bg-[#00C853] text-white'
                : 'bg-[#F5F5F2] text-[#00C853] hover:bg-[#E8E8E6]'
            }`}
          >
            Clean OK ({calculatedTxns.length - errorCount})
          </button>
          <button
            onClick={() => setFilterStatus('ERR')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
              filterStatus === 'ERR'
                ? 'bg-[#D32F2F] text-white'
                : 'bg-[#F5F5F2] text-[#D32F2F] hover:bg-[#E8E8E6]'
            }`}
          >
            Errors ({errorCount})
          </button>
        </div>
      </div>

      {/* Main Ledger Table */}
      <div className="bg-white rounded-xl border border-[#E8E8E6] overflow-hidden card-hover">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="table-header">
              <tr>
                <th className="p-2.5">TXN ID</th>
                <th className="p-2.5">Booking ID</th>
                <th className="p-2.5">Container</th>
                <th className="p-2.5">Service Code</th>
                <th className="p-2.5">Type</th>
                <th className="p-2.5 text-right">Orig Amt</th>
                <th className="p-2.5 text-center">Curr</th>
                <th className="p-2.5 text-right">Applied FX</th>
                <th className="p-2.5">Treatment</th>
                <th className="p-2.5 text-right">USD Equivalent</th>
                <th className="p-2.5 text-center">Data Health Status</th>
                <th className="p-2.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {filtered.map((txn) => {
                const origIdx = state.transactions.findIndex(
                  (t) => t.transactionId === txn.transactionId
                );

                // Calculate data bar percentage
                const barPct = Math.min(
                  100,
                  Math.max(4, (txn.usdEquivalent / maxUsd) * 100)
                );

                return (
                  <tr
                    key={txn.transactionId}
                    className={`hover:bg-[#F5F5F2]/80 transition-colors ${
                      txn.dataHealthStatus !== 'OK' ? 'bg-[#D32F2F]/5' : ''
                    }`}
                  >
                    <td className="p-2.5 font-mono font-medium text-[#888888]">
                      {txn.transactionId}
                    </td>
                    <td className="p-2.5 font-mono font-bold text-[#051C2C]">
                      <select
                        value={txn.bookingId}
                        onChange={(e) =>
                          handleCellEdit(origIdx, 'bookingId', e.target.value)
                        }
                        className="editable-input px-1.5 py-0.5 rounded text-xs font-mono font-bold"
                      >
                        {state.bookings.map((b) => (
                          <option key={b.bookingId} value={b.bookingId}>
                            {b.bookingId}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2.5 font-mono">
                      <input
                        type="text"
                        value={txn.containerId}
                        onChange={(e) =>
                          handleCellEdit(origIdx, 'containerId', e.target.value)
                        }
                        placeholder="[SHARED]"
                        className="editable-input px-1.5 py-0.5 rounded text-xs font-mono w-24"
                      />
                    </td>
                    <td className="p-2.5 font-mono font-semibold">
                      <select
                        value={txn.serviceCode}
                        onChange={(e) =>
                          handleCellEdit(origIdx, 'serviceCode', e.target.value)
                        }
                        className="editable-input px-1.5 py-0.5 rounded text-xs font-mono"
                      >
                        {state.services.map((s) => (
                          <option key={s.serviceCode} value={s.serviceCode}>
                            {s.serviceCode}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2.5">
                      <select
                        value={txn.transactionType}
                        onChange={(e) =>
                          handleCellEdit(origIdx, 'transactionType', e.target.value)
                        }
                        className="editable-input px-1.5 py-0.5 rounded text-xs"
                      >
                        {state.setupParams.transactionTypeMappings.map((m) => (
                          <option key={m.transactionType} value={m.transactionType}>
                            {m.transactionType}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2.5 text-right font-mono font-bold">
                      <input
                        type="number"
                        step="any"
                        value={txn.originalAmount}
                        onChange={(e) =>
                          handleCellEdit(
                            origIdx,
                            'originalAmount',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="editable-input px-1.5 py-0.5 rounded text-xs w-24 text-right font-mono"
                      />
                    </td>
                    <td className="p-2.5 text-center font-mono font-bold text-[#051C2C]">
                      <input
                        type="text"
                        value={txn.currency}
                        onChange={(e) =>
                          handleCellEdit(
                            origIdx,
                            'currency',
                            e.target.value.toUpperCase()
                          )
                        }
                        className="editable-input px-1 py-0.5 rounded text-xs w-12 text-center font-mono uppercase"
                      />
                    </td>
                    <td className="p-2.5 text-right font-mono text-[#051C2C]">
                      {txn.appliedFxRate.toFixed(4)}
                    </td>
                    <td className="p-2.5">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          txn.financialTreatment === 'Revenue'
                            ? 'bg-[#2251FF]/10 text-[#2251FF]'
                            : txn.financialTreatment === 'Bank Fee'
                            ? 'bg-[#888888]/10 text-[#888888]'
                            : txn.financialTreatment === 'Deposit'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-[#051C2C]/10 text-[#051C2C]'
                        }`}
                      >
                        {txn.financialTreatment}
                      </span>
                    </td>
                    {/* USD Equivalent with Inline Data Bar */}
                    <td className="p-2.5 text-right font-mono font-bold relative">
                      <div className="relative z-10">{formatUSD(txn.usdEquivalent)}</div>
                      <div
                        className="absolute right-2 top-2 bottom-2 bg-[#2251FF]/15 rounded-xs transition-all duration-300 pointer-events-none"
                        style={{ width: `${barPct}%` }}
                      />
                    </td>
                    {/* Data Health Status Column */}
                    <td className="p-2.5 text-center">
                      {txn.dataHealthStatus === 'OK' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00C853]/10 text-[#00C853] font-semibold text-[10px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>OK</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D32F2F]/10 text-[#D32F2F] font-bold text-[10px] border border-[#D32F2F]/20">
                          <AlertCircle className="w-3 h-3" />
                          <span>{txn.dataHealthStatus}</span>
                        </span>
                      )}
                    </td>
                    <td className="p-2.5 text-right">
                      <button
                        onClick={() => handleDelete(txn.transactionId)}
                        className="p-1 text-[#888888] hover:text-[#D32F2F] rounded cursor-pointer"
                        title="Delete transaction"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
