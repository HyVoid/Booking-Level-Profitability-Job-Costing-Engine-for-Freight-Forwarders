import React, { useRef } from 'react';
import { AlertTriangle, RotateCcw, Upload, X } from 'lucide-react';
import { AppState } from '../types';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetDataModal: React.FC<ResetModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#051C2C]/50 backdrop-blur-xs p-4 animate-fade-up">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 border border-[#E8E8E6]">
        <div className="flex items-center gap-3 text-[#D32F2F] mb-3">
          <div className="p-2 bg-[#D32F2F]/10 rounded-full">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="font-garamond text-xl font-bold text-[#051C2C]">
            Reset Engine Data?
          </h3>
        </div>
        <p className="text-xs text-[#888888] mb-6 leading-relaxed">
          This action will erase all current local changes and restore the system to factory sample freight bookings, FX rates, and transactions.
        </p>
        <div className="flex justify-end gap-3 text-xs">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-[#E8E8E6] bg-white text-[#051C2C] hover:bg-[#F5F5F2] cursor-pointer font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded-md bg-[#D32F2F] text-white hover:bg-[#b71c1c] cursor-pointer font-medium flex items-center gap-1.5 shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Confirm Factory Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ImportBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportState: (newState: AppState) => void;
}

export const ImportBackupModal: React.FC<ImportBackupModalProps> = ({
  isOpen,
  onClose,
  onImportState,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.bookings && json.transactions && json.setupParams) {
          onImportState(json);
          onClose();
        } else {
          alert('Invalid backup JSON format: missing core engine properties.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#051C2C]/50 backdrop-blur-xs p-4 animate-fade-up">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 border border-[#E8E8E6]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-[#2251FF]" />
            <h3 className="font-garamond text-xl font-bold text-[#051C2C]">
              Restore Backup File
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#888888] hover:text-[#051C2C] rounded-md hover:bg-[#F5F5F2] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-[#888888] mb-4">
          Select a previously exported JSON backup file (`freight-engine-backup-*.json`) to restore your entire workspace.
        </p>

        <div className="border-2 border-dashed border-[#2251FF]/30 rounded-xl p-8 text-center bg-[#2251FF]/5 mb-6">
          <Upload className="w-8 h-8 text-[#2251FF] mx-auto mb-2" />
          <p className="text-xs text-[#051C2C] font-medium mb-3">
            Click to upload your backup JSON
          </p>
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-[#2251FF] text-white rounded-md text-xs font-medium hover:bg-[#1a40cc] cursor-pointer shadow-xs"
          >
            Choose JSON File
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-[#E8E8E6] bg-white text-[#051C2C] hover:bg-[#F5F5F2] cursor-pointer text-xs font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
