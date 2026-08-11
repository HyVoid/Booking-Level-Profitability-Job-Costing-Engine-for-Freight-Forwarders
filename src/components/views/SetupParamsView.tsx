import React, { useState } from 'react';
import { DollarSign, Plus, Settings, Trash2 } from 'lucide-react';
import { AllocationPolicy, AppState, FXRateItem, TransactionTypeMapping } from '../../types';

interface SetupParamsViewProps {
  state: AppState;
  onUpdateSetupParams: (newParams: AppState['setupParams']) => void;
}

export const SetupParamsView: React.FC<SetupParamsViewProps> = ({
  state,
  onUpdateSetupParams,
}) => {
  const [newCurrency, setNewCurrency] = useState('');
  const [newRate, setNewRate] = useState<number>(1.0);

  const [newTxnType, setNewTxnType] = useState('');
  const [newTreatment, setNewTreatment] = useState<'Revenue' | 'COGS' | 'Bank Fee' | 'Deposit'>('COGS');

  const handlePolicyChange = (policy: AllocationPolicy) => {
    onUpdateSetupParams({
      ...state.setupParams,
      sharedCostAllocationPolicy: policy,
    });
  };

  const handleAddFxRate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCurrency.trim()) return;

    const curr = newCurrency.trim().toUpperCase();
    if (state.setupParams.fxRates.some((f) => f.currency === curr)) {
      alert(`FX Rate for ${curr} already exists! Edit directly in the table.`);
      return;
    }

    const updatedRates: FXRateItem[] = [
      ...state.setupParams.fxRates,
      { currency: curr, rateToUSD: Number(newRate) || 1.0 },
    ];

    onUpdateSetupParams({
      ...state.setupParams,
      fxRates: updatedRates,
    });

    setNewCurrency('');
    setNewRate(1.0);
  };

  const handleFxRateEdit = (idx: number, rate: number) => {
    const updated = [...state.setupParams.fxRates];
    updated[idx] = { ...updated[idx], rateToUSD: rate };
    onUpdateSetupParams({ ...state.setupParams, fxRates: updated });
  };

  const handleDeleteFx = (curr: string) => {
    if (curr === 'USD') {
      alert('Cannot delete base currency USD!');
      return;
    }
    onUpdateSetupParams({
      ...state.setupParams,
      fxRates: state.setupParams.fxRates.filter((f) => f.currency !== curr),
    });
  };

  const handleAddTypeMapping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTxnType.trim()) return;

    const typeName = newTxnType.trim().toUpperCase();
    if (
      state.setupParams.transactionTypeMappings.some(
        (m) => m.transactionType === typeName
      )
    ) {
      alert(`Transaction Type ${typeName} already exists!`);
      return;
    }

    const updated: TransactionTypeMapping[] = [
      ...state.setupParams.transactionTypeMappings,
      { transactionType: typeName, financialTreatment: newTreatment },
    ];

    onUpdateSetupParams({
      ...state.setupParams,
      transactionTypeMappings: updated,
    });

    setNewTxnType('');
  };

  const handleDeleteType = (type: string) => {
    onUpdateSetupParams({
      ...state.setupParams,
      transactionTypeMappings: state.setupParams.transactionTypeMappings.filter(
        (m) => m.transactionType !== type
      ),
    });
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="font-garamond text-2xl font-bold text-[#051C2C]">
          System Setup &amp; Global Parameters
        </h1>
        <p className="text-xs text-[#888888] mt-0.5">
          Centralized FX rate matrix, transaction treatment classification rules, and cost allocation policies.
        </p>
      </div>

      {/* Global Configuration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Base Currency Card */}
        <div className="bg-white rounded-xl p-5 border border-[#E8E8E6] card-hover space-y-3">
          <div className="flex items-center gap-2 font-bold text-[#051C2C] text-sm">
            <DollarSign className="w-4 h-4 text-[#2251FF]" />
            <span>Base Functional Currency</span>
          </div>
          <p className="text-xs text-[#888888]">
            All raw foreign currency entries are converted into this base currency for consolidated P&amp;L reporting.
          </p>
          <div className="pt-2">
            <input
              type="text"
              readOnly
              value={state.setupParams.baseCurrency}
              className="px-3 py-1.5 rounded bg-[#051C2C]/5 font-mono font-bold text-[#051C2C] text-sm w-32 text-center"
            />
            <span className="text-[11px] text-[#888888] ml-2">(Default: USD)</span>
          </div>
        </div>

        {/* Cost Allocation Policy Card */}
        <div className="bg-white rounded-xl p-5 border border-[#E8E8E6] card-hover space-y-3">
          <div className="flex items-center gap-2 font-bold text-[#051C2C] text-sm">
            <Settings className="w-4 h-4 text-[#2251FF]" />
            <span>Shared Cost Allocation Policy</span>
          </div>
          <p className="text-xs text-[#888888]">
            Defines how booking-level expenses are distributed across container units in Container Analysis.
          </p>
          <div className="flex items-center gap-3 pt-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-[#051C2C]">
              <input
                type="radio"
                name="policy"
                checked={
                  state.setupParams.sharedCostAllocationPolicy === 'EQUAL_SHARE'
                }
                onChange={() => handlePolicyChange('EQUAL_SHARE')}
                className="text-[#2251FF] focus:ring-[#2251FF]"
              />
              <span>EQUAL_SHARE (Split evenly per container)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer font-medium text-[#051C2C]">
              <input
                type="radio"
                name="policy"
                checked={
                  state.setupParams.sharedCostAllocationPolicy === 'NO_ALLOCATE'
                }
                onChange={() => handlePolicyChange('NO_ALLOCATE')}
                className="text-[#2251FF] focus:ring-[#2251FF]"
              />
              <span>NO_ALLOCATE (Direct costs only)</span>
            </label>
          </div>
        </div>
      </div>

      {/* FX Rates Matrix & Transaction Types Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FX Rates Table */}
        <div className="bg-white rounded-xl p-5 border border-[#E8E8E6] card-hover space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-garamond text-lg font-bold text-[#051C2C]">
              Foreign Exchange (FX) Rate Table
            </h3>
            <span className="text-xs text-[#888888]">Rate to USD</span>
          </div>

          <form onSubmit={handleAddFxRate} className="flex gap-2 text-xs">
            <input
              type="text"
              required
              placeholder="JPY"
              value={newCurrency}
              onChange={(e) => setNewCurrency(e.target.value)}
              className="editable-input px-2.5 py-1 rounded font-mono font-bold w-20 uppercase"
            />
            <input
              type="number"
              step="any"
              required
              placeholder="0.0067"
              value={newRate}
              onChange={(e) => setNewRate(parseFloat(e.target.value) || 0)}
              className="editable-input px-2.5 py-1 rounded font-mono w-28 text-right"
            />
            <button
              type="submit"
              className="flex items-center gap-1 px-3 py-1 rounded bg-[#2251FF] text-white font-semibold cursor-pointer hover:bg-[#1a40cc]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Rate</span>
            </button>
          </form>

          <div className="overflow-x-auto border border-[#E8E8E6] rounded-md">
            <table className="w-full text-left text-xs">
              <thead className="table-header">
                <tr>
                  <th className="p-2.5">Currency Code</th>
                  <th className="p-2.5 text-right">FX Rate (Multiplier to USD)</th>
                  <th className="p-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E6]">
                {state.setupParams.fxRates.map((fx, idx) => (
                  <tr key={fx.currency} className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-mono font-bold text-[#051C2C]">
                      {fx.currency}
                    </td>
                    <td className="p-2.5 text-right">
                      <input
                        type="number"
                        step="any"
                        value={fx.rateToUSD}
                        disabled={fx.currency === 'USD'}
                        onChange={(e) =>
                          handleFxRateEdit(idx, parseFloat(e.target.value) || 0)
                        }
                        className="editable-input px-2 py-0.5 rounded text-xs w-28 text-right font-mono font-bold"
                      />
                    </td>
                    <td className="p-2.5 text-right">
                      {fx.currency !== 'USD' && (
                        <button
                          onClick={() => handleDeleteFx(fx.currency)}
                          className="p-1 text-[#888888] hover:text-[#D32F2F] cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transaction Type Financial Treatment Mappings */}
        <div className="bg-white rounded-xl p-5 border border-[#E8E8E6] card-hover space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-garamond text-lg font-bold text-[#051C2C]">
              Transaction Type Financial Treatment Mappings
            </h3>
            <span className="text-xs text-[#888888]">Classification Rules</span>
          </div>

          <form onSubmit={handleAddTypeMapping} className="flex gap-2 text-xs">
            <input
              type="text"
              required
              placeholder="STORAGE_FEE"
              value={newTxnType}
              onChange={(e) => setNewTxnType(e.target.value)}
              className="editable-input px-2.5 py-1 rounded font-mono font-semibold flex-1 uppercase"
            />
            <select
              value={newTreatment}
              onChange={(e) => setNewTreatment(e.target.value as any)}
              className="editable-input px-2.5 py-1 rounded text-xs font-semibold"
            >
              <option value="Revenue">Revenue</option>
              <option value="COGS">COGS</option>
              <option value="Bank Fee">Bank Fee</option>
              <option value="Deposit">Deposit</option>
            </select>
            <button
              type="submit"
              className="flex items-center gap-1 px-3 py-1 rounded bg-[#2251FF] text-white font-semibold cursor-pointer hover:bg-[#1a40cc]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Type</span>
            </button>
          </form>

          <div className="overflow-x-auto border border-[#E8E8E6] rounded-md">
            <table className="w-full text-left text-xs">
              <thead className="table-header">
                <tr>
                  <th className="p-2.5">Transaction Type</th>
                  <th className="p-2.5">Mapped Financial Treatment</th>
                  <th className="p-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8E6]">
                {state.setupParams.transactionTypeMappings.map((map) => (
                  <tr key={map.transactionType} className="hover:bg-[#F5F5F2]">
                    <td className="p-2.5 font-mono font-bold text-[#051C2C]">
                      {map.transactionType}
                    </td>
                    <td className="p-2.5">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          map.financialTreatment === 'Revenue'
                            ? 'bg-[#2251FF]/10 text-[#2251FF]'
                            : map.financialTreatment === 'Bank Fee'
                            ? 'bg-[#888888]/10 text-[#888888]'
                            : map.financialTreatment === 'Deposit'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-[#051C2C]/10 text-[#051C2C]'
                        }`}
                      >
                        {map.financialTreatment}
                      </span>
                    </td>
                    <td className="p-2.5 text-right">
                      <button
                        onClick={() => handleDeleteType(map.transactionType)}
                        className="p-1 text-[#888888] hover:text-[#D32F2F] cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
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
