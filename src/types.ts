export type FinancialTreatment = 'Revenue' | 'COGS' | 'Bank Fee' | 'Deposit';

export type AllocationLevel = 'BOOKING' | 'CONTAINER';

export type AllocationPolicy = 'EQUAL_SHARE' | 'NO_ALLOCATE';

export interface FXRateItem {
  currency: string;
  rateToUSD: number;
}

export interface TransactionTypeMapping {
  transactionType: string;
  financialTreatment: FinancialTreatment;
}

export interface SetupParams {
  baseCurrency: string;
  sharedCostAllocationPolicy: AllocationPolicy;
  fxRates: FXRateItem[];
  transactionTypeMappings: TransactionTypeMapping[];
}

export interface BookingMasterItem {
  bookingId: string;
  orderDate: string;
  customerName: string;
  bookingStatus: string;
}

export interface ContainerMasterItem {
  containerId: string;
  bookingId: string;
  sizeType: string;
  containerStatus: string;
}

export interface ServiceMasterItem {
  serviceCode: string;
  serviceName: string;
  category: string;
}

export interface RawTransactionItem {
  transactionId: string;
  bookingId: string;
  containerId: string; // Empty string if BOOKING level
  transactionDate: string;
  customerVendor: string;
  serviceCode: string;
  description: string;
  transactionType: string;
  allocationLevel: AllocationLevel;
  originalAmount: number;
  currency: string;
  manualFxRate: number; // 0 if default
}

export interface CalculatedTransaction extends RawTransactionItem {
  appliedFxRate: number;
  financialTreatment: FinancialTreatment;
  usdEquivalent: number;
  dataHealthStatus: 'OK' | 'ERR: INVALID_BOOKING' | 'ERR: INVALID_SERVICE' | 'ERR: UNKNOWN_CURRENCY';
}

export interface JobCostingEngineItem {
  bookingId: string;
  customerName: string;
  totalRevenue: number;
  totalCOGS: number;
  bankFees: number;
  netProfit: number;
  profitMarginPct: number;
  trackedDeposit: number;
  badRowsCount: number;
  healthWarning: string;
}

export interface ContainerAnalysisItem {
  serviceCode: string;
  serviceName: string;
  directRevenue: number;
  directCOGS: number;
  sharedCOGS: number;
  allocatedCOGS: number;
  netProfit: number;
}

export interface ServiceProfitabilityItem {
  serviceCode: string;
  serviceName: string;
  category: string;
  totalRevenue: number;
  totalCOGS: number;
  totalBankFees: number;
  netProfit: number;
  profitMarginPct: number;
  transactionCount: number;
}

export interface AppState {
  setupParams: SetupParams;
  bookings: BookingMasterItem[];
  containers: ContainerMasterItem[];
  services: ServiceMasterItem[];
  transactions: RawTransactionItem[];
  lastSaved: string;
}
