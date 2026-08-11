import React, { useState } from 'react';
import { AlertCircle, Download, FileSpreadsheet, Upload, X } from 'lucide-react';
import { RawTransactionItem } from '../types';

interface BulkCsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (newTxns: RawTransactionItem[]) => void;
}

export const BulkCsvImportModal: React.FC<BulkCsvImportModalProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const [csvText, setCsvText] = useState<string>('');
  const [parsedItems, setParsedItems] = useState<RawTransactionItem[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const sampleCsv = `Transaction ID,Booking ID,Container ID,Transaction Date,Customer/Vendor,Service Code,Description,Transaction Type,Allocation Level,Original Amount,Currency,Manual FX Rate
TXN-90001,BFLCOMEINSMAC001,,2026-08-10,Evergreen Logistics,OCEAN_FRT,Bulk imported ocean freight,CARRIER_FREIGHT,BOOKING,4500,USD,0
TXN-90002,BFLCOMEINSMAC002,CMAU9876543,2026-08-10,Port Authority,DEST_THC,Terminal handling fee,TERMINAL_HANDLING,CONTAINER,350,EUR,0`;

  const downloadSampleTemplate = () => {
    const blob = new Blob([sampleCsv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'raw_transactions_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleParse = (content: string) => {
    setErrorMsg('');
    const lines = content.trim().split(/\r?\n/);
    if (lines.length < 2) {
      setErrorMsg('CSV must contain a header row and at least one data row.');
      setParsedItems([]);
      return;
    }

    const items: RawTransactionItem[] = [];
    // Start from line 1 skipping header
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Handle simple CSV splitting (supporting quoted values if needed)
      const cols = line.split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
      if (cols.length < 11) continue;

      const item: RawTransactionItem = {
        transactionId: cols[0] || `TXN-IMP-${Date.now()}-${i}`,
        bookingId: cols[1] || '',
        containerId: cols[2] || '',
        transactionDate: cols[3] || new Date().toISOString().slice(0, 10),
        customerVendor: cols[4] || 'Imported Party',
        serviceCode: cols[5] || 'OCEAN_FRT',
        description: cols[6] || 'Imported Transaction',
        transactionType: cols[7] || 'VENDOR_COST',
        allocationLevel: (cols[8]?.toUpperCase() === 'CONTAINER' ? 'CONTAINER' : 'BOOKING') as any,
        originalAmount: parseFloat(cols[9]) || 0,
        currency: (cols[10] || 'USD').toUpperCase(),
        manualFxRate: parseFloat(cols[11]) || 0,
      };

      items.push(item);
    }

    if (items.length === 0) {
      setErrorMsg('No valid rows parsed from the CSV data.');
    } else {
      setParsedItems(items);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvText(text);
      handleParse(text);
    };
    reader.readAsText(file);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCsvText(val);
    if (val.trim()) {
      handleParse(val);
    } else {
      setParsedItems([]);
    }
  };

  const handleSubmit = () => {
    if (parsedItems.length > 0) {
      onImport(parsedItems);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#051C2C]/50 backdrop-blur-xs p-4 animate-fade-up">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#E8E8E6]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E6] flex items-center justify-between bg-[#F5F5F2]">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-[#2251FF]" />
            <h3 className="font-garamond text-xl font-bold text-[#051C2C]">
              Bulk CSV Import Transactions
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#888888] hover:text-[#051C2C] rounded-md hover:bg-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#2251FF]/5 border border-[#2251FF]/20 text-[#051C2C]">
            <p>
              Import financial ledger transactions directly from CSV. Matching lookup rules will execute instantly.
            </p>
            <button
              onClick={downloadSampleTemplate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-[#E8E8E6] text-[#2251FF] font-medium hover:bg-[#F5F5F2] cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV Template</span>
            </button>
          </div>

          <div>
            <label className="block text-[#051C2C] font-medium mb-1">
              Option 1: Upload CSV File
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-xs text-[#051C2C] file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#2251FF] file:text-white hover:file:bg-[#1a40cc] cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-[#051C2C] font-medium mb-1">
              Option 2: Paste Raw CSV Text
            </label>
            <textarea
              value={csvText}
              onChange={handleTextChange}
              placeholder={sampleCsv}
              rows={5}
              className="w-full p-3 font-mono text-[11px] bg-[#FFFDE7] border border-[#E8E8E6] rounded-md focus:outline-none focus:border-[#2251FF]"
            />
          </div>

          {errorMsg && (
            <div className="flex items-center gap-2 p-3 rounded-md bg-[#D32F2F]/10 border border-[#D32F2F]/30 text-[#D32F2F]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {parsedItems.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#051C2C]">
                  Parsed Preview ({parsedItems.length} valid items):
                </span>
              </div>
              <div className="max-h-48 overflow-y-auto border border-[#E8E8E6] rounded-md">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-[#051C2C]/5 text-[#051C2C] uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="p-2">TXN ID</th>
                      <th className="p-2">Booking ID</th>
                      <th className="p-2">Service</th>
                      <th className="p-2">Type</th>
                      <th className="p-2 text-right">Amount</th>
                      <th className="p-2">Curr</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E8E6]">
                    {parsedItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#F5F5F2]">
                        <td className="p-2 font-mono">{item.transactionId}</td>
                        <td className="p-2 font-semibold">{item.bookingId}</td>
                        <td className="p-2">{item.serviceCode}</td>
                        <td className="p-2">{item.transactionType}</td>
                        <td className="p-2 text-right font-mono">{item.originalAmount}</td>
                        <td className="p-2 font-semibold">{item.currency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E8E8E6] bg-[#F5F5F2] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md border border-[#E8E8E6] bg-white text-[#051C2C] hover:bg-[#F5F5F2] cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={parsedItems.length === 0}
            className={`px-4 py-1.5 rounded-md text-white font-medium cursor-pointer ${
              parsedItems.length > 0
                ? 'bg-[#2251FF] hover:bg-[#1a40cc]'
                : 'bg-[#888888] cursor-not-allowed'
            }`}
          >
            Import {parsedItems.length} Transactions
          </button>
        </div>
      </div>
    </div>
  );
};
