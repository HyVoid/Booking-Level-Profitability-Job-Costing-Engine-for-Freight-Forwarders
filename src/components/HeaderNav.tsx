import React from 'react';
import {
  BarChart3,
  BookOpen,
  Boxes,
  Calculator,
  Database,
  Download,
  FileSpreadsheet,
  Grid3X3,
  Layers,
  PieChart,
  Receipt,
  RotateCcw,
  Settings,
  Ship,
  Upload,
} from 'lucide-react';

export type TabKey =
  | 'dashboard'
  | 'bookings'
  | 'containers'
  | 'services'
  | 'transactions'
  | 'engine'
  | 'booking_pl'
  | 'container_analysis'
  | 'service_profit'
  | 'setup'
  | 'audit';

interface HeaderNavProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
  lastSaved: string;
  onExportBackup: () => void;
  onImportBackup: () => void;
  onBulkCsvImport: () => void;
  onResetData: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  lastSaved,
  onExportBackup,
  onImportBackup,
  onBulkCsvImport,
  onResetData,
}) => {
  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'engine', label: 'Job Costing', icon: <Calculator className="w-4 h-4" /> },
    { key: 'booking_pl', label: 'Booking P&L', icon: <PieChart className="w-4 h-4" /> },
    { key: 'container_analysis', label: 'Container Costs', icon: <Boxes className="w-4 h-4" /> },
    { key: 'service_profit', label: 'Service Profit', icon: <Grid3X3 className="w-4 h-4" /> },
    { key: 'transactions', label: 'Raw Transactions', icon: <Receipt className="w-4 h-4" /> },
    { key: 'bookings', label: 'Bookings', icon: <Ship className="w-4 h-4" /> },
    { key: 'containers', label: 'Containers', icon: <Layers className="w-4 h-4" /> },
    { key: 'services', label: 'Service Master', icon: <Database className="w-4 h-4" /> },
    { key: 'setup', label: 'Setup Params', icon: <Settings className="w-4 h-4" /> },
    { key: 'audit', label: 'Audit & SOP', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8E8E6] shadow-xs">
      {/* Top Header Bar */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#051C2C] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
            <Ship className="w-5.5 h-5.5 text-[#2251FF]" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-garamond text-lg sm:text-xl font-bold text-[#051C2C] tracking-tight leading-snug">
                Booking-Level Profitability &amp; Job Costing Engine
              </h1>
              <span className="bg-[#2251FF]/10 text-[#2251FF] text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full shrink-0">
                SaaS Engine
              </span>
            </div>
            <p className="text-[11px] font-medium text-[#888888] tracking-wide mt-0.5">
              for Freight Forwarders &amp; Logistics Service Providers
            </p>
          </div>
        </div>

        {/* Right Data Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs shrink-0">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F5F2] border border-[#E8E8E6] text-[#051C2C]">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></span>
            <span className="text-[11px] text-[#888888]">Last saved:</span>
            <span className="font-mono text-[11px] font-medium text-[#051C2C]">{lastSaved}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExportBackup}
              className="btn text-xs py-1.5 px-3"
              title="Download JSON state backup"
            >
              <Download className="w-3.5 h-3.5 text-[#2251FF]" />
              <span className="hidden sm:inline">Export Backup</span>
            </button>

            <button
              onClick={onImportBackup}
              className="btn text-xs py-1.5 px-3"
              title="Restore from JSON state backup"
            >
              <Upload className="w-3.5 h-3.5 text-[#051C2C]" />
              <span className="hidden sm:inline">Import Backup</span>
            </button>

            <button
              onClick={onBulkCsvImport}
              className="btn btn-accent text-xs py-1.5 px-3 shadow-xs"
              title="Import transaction ledgers from CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Bulk CSV Import</span>
            </button>

            <button
              onClick={onResetData}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[#D32F2F] hover:bg-[#D32F2F]/10 transition-colors font-medium text-[12px] cursor-pointer"
              title="Reset data to factory sample state"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Tab Switcher Sub-Bar */}
      <div className="bg-[#FFFFFF] border-t border-[#E8E8E6] overflow-x-auto scrollbar-none">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center gap-1.5 py-1 min-w-max">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.key;
            // Add visual separator dividers between logical groups
            const showDivider = tab.key === 'transactions' || tab.key === 'setup';

            return (
              <React.Fragment key={tab.key}>
                {showDivider && (
                  <div className="h-4 w-[1px] bg-[#E8E8E6] mx-1.5 shrink-0" />
                )}
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-3.5 py-2.5 text-[12px] font-medium transition-all cursor-pointer select-none rounded-md ${
                    isActive
                      ? 'text-[#051C2C] font-semibold bg-[#F5F5F2]'
                      : 'text-[#051C2C]/65 hover:text-[#051C2C] hover:bg-[#F5F5F2]/50'
                  }`}
                >
                  <span className={isActive ? 'text-[#2251FF]' : 'text-[#888888]'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#2251FF] rounded-full" />
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </header>
  );
};
