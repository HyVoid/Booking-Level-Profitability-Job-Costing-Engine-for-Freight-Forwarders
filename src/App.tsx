import React, { useEffect, useState } from 'react';
import { BulkCsvImportModal } from './components/BulkCsvImportModal';
import { ImportBackupModal, ResetDataModal } from './components/DataManagementModals';
import { HeaderNav, TabKey } from './components/HeaderNav';
import { AuditSopView } from './components/views/AuditSopView';
import { BookingMasterView } from './components/views/BookingMasterView';
import { BookingPLView } from './components/views/BookingPLView';
import { ContainerAnalysisView } from './components/views/ContainerAnalysisView';
import { ContainerMasterView } from './components/views/ContainerMasterView';
import { ExecutiveDashboard } from './components/views/ExecutiveDashboard';
import { JobCostingEngineView } from './components/views/JobCostingEngineView';
import { RawTransactionsView } from './components/views/RawTransactionsView';
import { ServiceMasterView } from './components/views/ServiceMasterView';
import { ServiceProfitabilityView } from './components/views/ServiceProfitabilityView';
import { SetupParamsView } from './components/views/SetupParamsView';
import { initialAppState } from './defaultData';
import { AppState, RawTransactionItem } from './types';

const STORAGE_KEY = 'freight_job_costing_state_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');
  const [selectedBookingForPL, setSelectedBookingForPL] = useState<string>('');

  // Modals state
  const [isBulkCsvOpen, setIsBulkCsvOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);

  // Load state from localStorage or initial default data
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.bookings && parsed.transactions && parsed.setupParams) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Failed to load local storage state:', err);
    }
    return initialAppState;
  });

  // Save to localStorage whenever state changes
  const updateStateAndPersist = (updater: (prev: AppState) => AppState) => {
    setState((prev) => {
      const next = updater(prev);
      const timeStr = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const nextWithSaved = { ...next, lastSaved: timeStr };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextWithSaved));
      } catch (e) {
        console.error('LocalStorage write error:', e);
      }
      return nextWithSaved;
    });
  };

  // Set default selected booking if none
  useEffect(() => {
    if (!selectedBookingForPL && state.bookings.length > 0) {
      setSelectedBookingForPL(state.bookings[0].bookingId);
    }
  }, [state.bookings, selectedBookingForPL]);

  // Export JSON Backup
  const handleExportBackup = () => {
    const dateStr = new Date().toISOString().slice(0, 10);
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `freight-engine-backup-${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON Backup
  const handleImportBackupState = (newState: AppState) => {
    updateStateAndPersist(() => newState);
  };

  // Bulk CSV Import
  const handleBulkCsvImport = (newTxns: RawTransactionItem[]) => {
    updateStateAndPersist((prev) => ({
      ...prev,
      transactions: [...newTxns, ...prev.transactions],
    }));
  };

  // Reset to Factory Default Data
  const handleResetConfirm = () => {
    const timeStr = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const fresh = { ...initialAppState, lastSaved: timeStr };
    setState(fresh);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F2] text-[#051C2C]">
      {/* Top Navigation Header Bar */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lastSaved={state.lastSaved || 'Just now'}
        onExportBackup={handleExportBackup}
        onImportBackup={() => setIsImportOpen(true)}
        onBulkCsvImport={() => setIsBulkCsvOpen(true)}
        onResetData={() => setIsResetOpen(true)}
      />

      {/* Main Content Area: Max-Width 1400px Centered, 40px Horizontal Padding */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-10 py-8">
        {activeTab === 'dashboard' && (
          <ExecutiveDashboard
            state={state}
            onNavigateTab={setActiveTab}
            onSelectBookingForPL={setSelectedBookingForPL}
          />
        )}

        {activeTab === 'engine' && (
          <JobCostingEngineView
            state={state}
            onSelectBookingForPL={setSelectedBookingForPL}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'booking_pl' && (
          <BookingPLView
            state={state}
            selectedBookingId={selectedBookingForPL}
            onSelectBookingId={setSelectedBookingForPL}
          />
        )}

        {activeTab === 'container_analysis' && (
          <ContainerAnalysisView
            state={state}
            selectedBookingId={selectedBookingForPL}
            onSelectBookingId={setSelectedBookingForPL}
          />
        )}

        {activeTab === 'service_profit' && (
          <ServiceProfitabilityView state={state} />
        )}

        {activeTab === 'transactions' && (
          <RawTransactionsView
            state={state}
            onUpdateTransactions={(newTxns) =>
              updateStateAndPersist((prev) => ({ ...prev, transactions: newTxns }))
            }
            onOpenBulkCsv={() => setIsBulkCsvOpen(true)}
          />
        )}

        {activeTab === 'bookings' && (
          <BookingMasterView
            state={state}
            onUpdateBookings={(newBookings) =>
              updateStateAndPersist((prev) => ({ ...prev, bookings: newBookings }))
            }
          />
        )}

        {activeTab === 'containers' && (
          <ContainerMasterView
            state={state}
            onUpdateContainers={(newContainers) =>
              updateStateAndPersist((prev) => ({ ...prev, containers: newContainers }))
            }
          />
        )}

        {activeTab === 'services' && (
          <ServiceMasterView
            state={state}
            onUpdateServices={(newServices) =>
              updateStateAndPersist((prev) => ({ ...prev, services: newServices }))
            }
          />
        )}

        {activeTab === 'setup' && (
          <SetupParamsView
            state={state}
            onUpdateSetupParams={(newParams) =>
              updateStateAndPersist((prev) => ({ ...prev, setupParams: newParams }))
            }
          />
        )}

        {activeTab === 'audit' && <AuditSopView />}
      </main>

      {/* Footer Notice */}
      <footer className="border-t border-[#E8E8E6] bg-white py-4 px-6 text-center text-xs text-[#888888]">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px]">
            All data storage for this tool is retained locally in your browser (localStorage). The page itself does not store any user data on external servers.
          </p>
          <p className="text-[11px] font-mono text-[#051C2C]">
            Freight Forwarding Job Costing Engine &copy; 2026
          </p>
        </div>
      </footer>

      {/* Modals */}
      <BulkCsvImportModal
        isOpen={isBulkCsvOpen}
        onClose={() => setIsBulkCsvOpen(false)}
        onImport={handleBulkCsvImport}
      />

      <ImportBackupModal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        onImportState={handleImportBackupState}
      />

      <ResetDataModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onConfirm={handleResetConfirm}
      />
    </div>
  );
}
