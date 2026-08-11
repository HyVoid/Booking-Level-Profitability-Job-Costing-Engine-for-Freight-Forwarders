import {
  AppState,
  CalculatedTransaction,
  ContainerAnalysisItem,
  FinancialTreatment,
  JobCostingEngineItem,
  RawTransactionItem,
  ServiceProfitabilityItem,
} from './types';

/**
 * Calculates a single transaction with full multi-hop lookup chain execution
 * and Data Health Diagnosis.
 */
export function calculateTransaction(
  txn: RawTransactionItem,
  state: AppState
): CalculatedTransaction {
  // 1. Applied FX Rate Calculation
  let appliedFxRate = 0;
  if (txn.manualFxRate > 0) {
    appliedFxRate = txn.manualFxRate;
  } else {
    const fxMatch = state.setupParams.fxRates.find(
      (f) => f.currency.toUpperCase() === (txn.currency || '').toUpperCase()
    );
    appliedFxRate = fxMatch ? fxMatch.rateToUSD : 0;
  }

  // 2. Financial Treatment Lookup
  let financialTreatment: FinancialTreatment = 'COGS'; // Safe conservative fallback
  const typeMatch = state.setupParams.transactionTypeMappings.find(
    (t) => t.transactionType.toUpperCase() === (txn.transactionType || '').toUpperCase()
  );
  if (typeMatch) {
    financialTreatment = typeMatch.financialTreatment;
  }

  // 3. USD Equivalent Amount (Always numeric float)
  const usdEquivalent = (txn.originalAmount || 0) * appliedFxRate;

  // 4. Data Health Diagnostic Column
  let dataHealthStatus: CalculatedTransaction['dataHealthStatus'] = 'OK';
  const bookingExists = state.bookings.some((b) => b.bookingId === txn.bookingId);
  const serviceExists = state.services.some((s) => s.serviceCode === txn.serviceCode);

  if (!bookingExists && txn.bookingId) {
    dataHealthStatus = 'ERR: INVALID_BOOKING';
  } else if (!serviceExists && txn.serviceCode) {
    dataHealthStatus = 'ERR: INVALID_SERVICE';
  } else if (appliedFxRate === 0 && txn.originalAmount !== 0) {
    dataHealthStatus = 'ERR: UNKNOWN_CURRENCY';
  }

  return {
    ...txn,
    appliedFxRate,
    financialTreatment,
    usdEquivalent,
    dataHealthStatus,
  };
}

/**
 * Returns all calculated transactions with diagnostics.
 */
export function getCalculatedTransactions(state: AppState): CalculatedTransaction[] {
  return state.transactions.map((txn) => calculateTransaction(txn, state));
}

/**
 * Computes the Job Costing Engine summary table grouped by Booking ID.
 */
export function computeJobCostingEngine(state: AppState): JobCostingEngineItem[] {
  const calculatedTxns = getCalculatedTransactions(state);

  return state.bookings.map((booking) => {
    const bookingTxns = calculatedTxns.filter((t) => t.bookingId === booking.bookingId);

    const validTxns = bookingTxns.filter((t) => t.dataHealthStatus === 'OK');
    const badRowsCount = bookingTxns.length - validTxns.length;

    const totalRevenue = validTxns
      .filter((t) => t.financialTreatment === 'Revenue')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const totalCOGS = validTxns
      .filter((t) => t.financialTreatment === 'COGS')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const bankFees = validTxns
      .filter((t) => t.financialTreatment === 'Bank Fee')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const trackedDeposit = validTxns
      .filter((t) => t.financialTreatment === 'Deposit')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const netProfit = totalRevenue - totalCOGS - bankFees;
    const profitMarginPct = totalRevenue === 0 ? 0 : netProfit / totalRevenue;

    const healthWarning =
      badRowsCount > 0 ? `⚠️ ${badRowsCount} TXN DATA ERRORS` : 'CLEAN';

    return {
      bookingId: booking.bookingId,
      customerName: booking.customerName,
      totalRevenue,
      totalCOGS,
      bankFees,
      netProfit,
      profitMarginPct,
      trackedDeposit,
      badRowsCount,
      healthWarning,
    };
  });
}

/**
 * Computes Container Analysis drilldown for a specific Booking & Container.
 */
export function computeContainerAnalysis(
  state: AppState,
  targetBookingId: string,
  targetContainerId: string
): ContainerAnalysisItem[] {
  const calculatedTxns = getCalculatedTransactions(state);
  const bookingContainers = state.containers.filter(
    (c) => c.bookingId === targetBookingId
  );
  const containerCount = bookingContainers.length === 0 ? 1 : bookingContainers.length;

  // Find all service codes associated with this booking
  const bookingTxns = calculatedTxns.filter(
    (t) => t.bookingId === targetBookingId && t.dataHealthStatus === 'OK'
  );
  const serviceCodes = Array.from(new Set(bookingTxns.map((t) => t.serviceCode)));

  return serviceCodes.map((srvCode) => {
    const serviceObj = state.services.find((s) => s.serviceCode === srvCode);
    const serviceName = serviceObj ? serviceObj.serviceName : srvCode;

    // Direct container revenue & COGS
    const directRevenue = bookingTxns
      .filter(
        (t) =>
          t.containerId === targetContainerId &&
          t.serviceCode === srvCode &&
          t.financialTreatment === 'Revenue'
      )
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const directCOGS = bookingTxns
      .filter(
        (t) =>
          t.containerId === targetContainerId &&
          t.serviceCode === srvCode &&
          t.financialTreatment === 'COGS'
      )
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    // Booking-level shared COGS
    const sharedCOGS = bookingTxns
      .filter(
        (t) =>
          (t.allocationLevel === 'BOOKING' || !t.containerId) &&
          t.serviceCode === srvCode &&
          t.financialTreatment === 'COGS'
      )
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    let allocatedCOGS = directCOGS;
    if (state.setupParams.sharedCostAllocationPolicy === 'EQUAL_SHARE') {
      allocatedCOGS = directCOGS + sharedCOGS / containerCount;
    }

    const netProfit = directRevenue - allocatedCOGS;

    return {
      serviceCode: srvCode,
      serviceName,
      directRevenue,
      directCOGS,
      sharedCOGS,
      allocatedCOGS,
      netProfit,
    };
  });
}

/**
 * Computes Service Profitability grouped across all bookings.
 */
export function computeServiceProfitability(state: AppState): ServiceProfitabilityItem[] {
  const calculatedTxns = getCalculatedTransactions(state);

  return state.services.map((srv) => {
    const srvTxns = calculatedTxns.filter(
      (t) => t.serviceCode === srv.serviceCode && t.dataHealthStatus === 'OK'
    );

    const totalRevenue = srvTxns
      .filter((t) => t.financialTreatment === 'Revenue')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const totalCOGS = srvTxns
      .filter((t) => t.financialTreatment === 'COGS')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const totalBankFees = srvTxns
      .filter((t) => t.financialTreatment === 'Bank Fee')
      .reduce((sum, t) => sum + t.usdEquivalent, 0);

    const netProfit = totalRevenue - totalCOGS - totalBankFees;
    const profitMarginPct = totalRevenue === 0 ? 0 : netProfit / totalRevenue;

    return {
      serviceCode: srv.serviceCode,
      serviceName: srv.serviceName,
      category: srv.category,
      totalRevenue,
      totalCOGS,
      totalBankFees,
      netProfit,
      profitMarginPct,
      transactionCount: srvTxns.length,
    };
  });
}

/**
 * Formatting Utility Helpers
 */
export function formatUSD(amount: number): string {
  if (isNaN(amount)) return '$0.00';
  const isNegative = amount < 0;
  const absVal = Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return isNegative ? `-$${absVal}` : `$${absVal}`;
}

export function formatPct(val: number): string {
  if (isNaN(val)) return '0.00%';
  return `${(val * 100).toFixed(2)}%`;
}

export function formatNumber(val: number): string {
  if (isNaN(val)) return '0';
  return val.toLocaleString('en-US');
}
