# Booking-Level Profitability & Job Costing Engine for Freight Forwarders

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Decision%20Support-2251FF.svg)](#)

**See the real profit of every freight-forwarding booking — revenue, COGS, bank fees, deposits, service-level profitability, and container-level cost — without rebuilding the analysis manually.**

> **No signup. No installation. Free.**
>
> 🌐 **Open in Browser** → [HTML live demo](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)
> 📥 **Download Excel** → Excel workbook
>
> The same analytical workflow is available in browser and Excel formats.


## What It Helps You Track

* **Revenue vs. COGS vs. bank fees by Booking** — so profitability is visible at the shipment level rather than only at company level.
* **Net profit and profit margin for each Booking** — so low-margin or loss-making jobs can be identified before they disappear inside aggregate financial reports.
* **Profitability by service or charge** — showing whether Ocean Freight, inspection, insurance, documentation, coordination, or other service lines actually contribute profit.
* **Container-level cost exposure** — separating direct container costs from Booking-level shared costs when a shipment contains multiple containers.
* **Foreign-currency transactions converted to a common USD basis** — so mixed-currency revenue and cost lines can be compared consistently.
* **Data-health exceptions before they contaminate P&L** — identifying invalid Bookings, invalid Service Codes, and missing FX rates instead of silently treating broken data as valid numbers.

## Quick Start Workflow

1. **Set key parameters.**
   Configure the base currency, reference FX rates, transaction-type mappings, and shared-cost allocation policy in `Setup_Params`. This is the control layer for the workbook.

2. **Import existing data.**
   Establish Booking and container records, define the service catalog, then paste or load financial transactions into `Raw_Transactions`. Existing accounting exports, vendor cost records, customer invoices, or spreadsheet data can become the transaction source.

3. **Get results instantly.**
   Once the source data is populated, the costing engine automatically converts currencies, classifies transactions, checks linkage health, and aggregates valid financial lines into Booking-level P&L.

4. **Maintain with periodic refresh.**
   Add new Bookings, containers, services, and transactions as operations progress. The analytical sheets update from the underlying master and transaction data rather than requiring a new calculator for each shipment.

**Set the control parameters. Drop in the operational data. Get the booking-level analysis. Refresh when the business changes.**

## Why I Built This

Freight-forwarding profitability is often harder to see than it looks.

A Booking may contain customer revenue, Ocean Freight, origin inspection, cargo insurance, documentation, coordination charges, vendor costs, bank fees, deposits, multiple currencies, and several containers. Those records frequently live in different operational or accounting exports.

The resulting failure is not necessarily poor financial judgment. It is often a **broken analytical chain**.

A booking can look profitable because one vendor cost was never linked to the Booking. A foreign-currency transaction can be omitted because its FX rate was not configured. A shared Booking-level cost can be counted incorrectly when drilling into individual containers.

This workbook treats those failures as part of the analytical problem.

For example, instead of seeing:

```text
Booking Revenue       $8,500
Reported COGS         $5,200
Apparent Profit       $3,300
Margin                   38.8%
```

the workflow can surface that the transaction dataset contains an unlinked vendor cost and an unknown currency. The Booking is then flagged rather than presented as a clean 38.8% margin.

The objective is not another dashboard. It is a **productized reasoning framework** for turning transaction-level freight data into a defensible Booking-level profitability view.

The implementation explicitly separates numeric calculation fields from diagnostic text. A missing FX rate can therefore remain numerically safe for aggregation while simultaneously producing an `ERR: UNKNOWN_CURRENCY` warning. This prevents an error state from becoming an apparently valid financial result. 

## Common Freight-Forwarding Problems This Solves

| Problem                                        | Without This Tool                                                                                                  | With This Tool                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Profit is only visible in aggregate**        | Company-level revenue and expenses obscure which individual shipments make or lose money.                          | Each Booking receives its own Revenue, COGS, Bank Fees, Net Profit, and Margin view.                              |
| **Costs arrive in multiple currencies**        | FX conversion is performed manually or inconsistently, making cross-Booking comparison unreliable.                 | Transactions use a controlled FX lookup with an explicit missing-rate exception.                                  |
| **A Booking contains multiple containers**     | Shared costs can be duplicated, ignored, or assigned inconsistently when analyzing container economics.            | Booking-level shared costs can be allocated across the container count under a defined policy.                    |
| **Service profitability is unclear**           | Revenue may be known by charge, but the corresponding cost and margin are difficult to reconcile across shipments. | Service-level aggregation exposes profitability across Bookings.                                                  |
| **Bad master-data links silently distort P&L** | Invalid Booking IDs, Service Codes, or currencies can become missing costs or misleading zero values.              | `Data Health Status` identifies broken lookup chains and the costing engine only aggregates healthy transactions. |

## Who This Is For

This tool is designed for **small and mid-sized freight forwarders, forwarding operators, finance teams, job-costing analysts, and owners** who need to understand profitability at the Booking or shipment level rather than relying on a generic company-wide P&L.

It fits operations where revenue and cost records already exist in spreadsheets or accounting exports, but the business needs a structured way to connect them.

It is particularly useful when one Booking can contain multiple services, vendors, currencies, bank charges, and containers.

It is **not** intended to replace a TMS, ERP, accounting platform, or high-concurrency transaction system. It is a lightweight analytical execution layer.

**No spreadsheet expertise needed to use the browser version. Open it and start inspecting the workflow immediately.**

## About

I build lightweight trackers and decision-support tools for situations where there are too many moving parts to hold in one person's head, but not enough complexity to justify a full enterprise implementation.

The central question is simple:

> **What information needs to be in one place to make the next decision confidently?**

This Booking-level Job Costing Engine applies that approach to freight forwarding. Instead of treating profitability as a final accounting report, it connects the operational unit — the **Booking** — to its transactions, services, containers, costs, and financial outcome.

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

The workbook is organized around four functional layers: **rules and parameters → master data → transaction input → calculation and analytical output**.

The design contains 11 Sheets:

| Layer              | Sheet                   | Role                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Rules & Parameters | `Instructions`          | Operating instructions, data-entry rules, and business definitions               |
| Rules & Parameters | `Setup_Params`          | Base currency, FX rates, transaction mappings, and shared-cost allocation policy |
| Master Data        | `Booking_Master`        | Booking index, customer, status, and container count                             |
| Master Data        | `Container_Master`      | Booking-to-container 1:N relationship                                            |
| Master Data        | `Service_Master`        | Standard Service Code, service name, and category                                |
| Transaction Input  | `Raw_Transactions`      | Unified financial transaction ledger plus data-health diagnostics                |
| Calculation Engine | `Job_Costing_Engine`    | Booking-level Revenue, COGS, Bank Fees, Profit, Margin, and Deposit aggregation  |
| Analysis           | `Booking_PL`            | Single-Booking P&L and service-level drill-down                                  |
| Analysis           | `Container_Analysis`    | Container-level direct and allocated shared costs                                |
| Analysis           | `Service_Profitability` | Cross-Booking profitability by service                                           |
| Executive Output   | `Executive_Dashboard`   | Global KPIs, profitability rankings, and data-health warnings                    |

The core flow is:

```text
Setup_Params
      │
      ├──────────────┐
      ▼              ▼
Booking_Master   Service_Master
      │              │
      └──────┬───────┘
             ▼
     Raw_Transactions
             │
     Linkage + FX + Financial
        Treatment Diagnosis
             │
             ▼
    Job_Costing_Engine
             │
    ┌────────┼───────────┐
    ▼        ▼           ▼
Booking_PL  Container_  Service_
            Analysis    Profitability
             │
             └──────┬──────┘
                    ▼
          Executive_Dashboard
```

The source architecture identifies three important multi-hop lookup chains: a four-hop currency/financial-treatment chain, a four-hop shared-cost/container drill-down chain, and a three-hop service-classification chain. 

The critical design rule is that **calculation values and diagnostic states remain separate**. `USD Equivalent` stays numeric, while `Data Health Status` carries errors such as `ERR: UNKNOWN_CURRENCY`. This preserves `SUMIFS` compatibility while preventing broken transactions from being included in the P&L engine. 

### Three Traps That Catch Even Experienced Freight-Forwarding Operators

#### Trap 1 — Treating a Missing FX Rate as a Valid Amount

**1. Decision:** A Booking appears to have a certain cost and margin.

**2. Hidden flaw:** A vendor transaction is denominated in a currency that is not configured in the reference FX table.

**3. Decision impact:** If the missing rate is incorrectly treated as `1.0`, a foreign amount such as `50,000` can become `$50,000 USD`, radically distorting the Booking result.

**4. Why it is wrong:** A missing exchange rate is a data-integrity failure, not an economic exchange rate.

**5. Correct approach:** Return a numeric neutral value of `0` for the calculation field while separately reporting `ERR: UNKNOWN_CURRENCY`.

**6. Corrected decision:** The Booking is flagged for data completion instead of being assigned a false profit or loss.

```text
Wrong:
Unknown Currency → FX = 1.0 → USD Equivalent → P&L

Correct:
Unknown Currency → FX = 0
                 → USD Equivalent = 0
                 → Data Health = ERR: UNKNOWN_CURRENCY
                 → P&L excludes invalid transaction
                 → Management fixes source data
```

<details>
<summary>Formula logic</summary>

```excel
=MAP(K2:K10000,L2:L10000,
 LAMBDA(curr,m_rate,
   IF(curr="",
      0,
      IF(m_rate>0,
         m_rate,
         XLOOKUP(
           curr,
           Setup_Params!$A$10:$A$20,
           Setup_Params!$B$10:$B$20,
           0
         )
      )
   )
 ))
```

The important rule is **never default an unknown currency to 1.0**. 

</details>

#### Trap 2 — Reading a Booking P&L Before Checking Data Health

**1. Decision:** A Booking with `$8,500` revenue and `$5,200` COGS is considered a `$3,300` profit.

**2. Hidden flaw:** One or more source transactions have invalid Booking or Service links, or an unresolved currency.

**3. Decision impact:** The apparent margin may be overstated because a cost line has silently failed to enter the aggregation.

**4. Why it is wrong:** A mathematically correct `SUMIFS` result can still be economically wrong if the source rows are incomplete.

**5. Correct approach:** The engine aggregates only transactions whose `Data Health Status = "OK"` and reports the number of invalid rows separately.

**6. Corrected decision:** The Booking is treated as **provisional** until the data exceptions are resolved.

```text
Wrong:
Transactions → SUMIFS → Profit → Decision

Correct:
Transactions → Linkage / FX validation
             → Healthy rows only
             → Profit + Health Warning
             → Decision
```

<details>
<summary>Formula logic</summary>

```excel
rev =
SUMIFS(
  Raw_Transactions!O2:O10000,
  Raw_Transactions!B2:B10000,bk,
  Raw_Transactions!N2:N10000,"Revenue",
  Raw_Transactions!P2:P10000,"OK"
)
```

The same health filter is applied to COGS, Bank Fees, and Deposits. 

</details>

#### Trap 3 — Assigning Booking-Level Shared Cost Directly to Every Container

**1. Decision:** A two-container Booking needs a container-level profitability view.

**2. Hidden flaw:** A Booking-level COGS line belongs to the shipment as a whole rather than to a specific container.

**3. Decision impact:** Assigning the full shared cost to both containers doubles the apparent cost.

**4. Why it is wrong:** The cost's economic ownership is Booking-level, while the analysis requires a controlled allocation rule.

**5. Correct approach:** Use the configured `EQUAL_SHARE` policy and divide shared COGS by the Booking's container count.

**6. Corrected decision:** Each container receives its direct costs plus its allocated share of the common cost, preserving the Booking-level total.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

The workbook explicitly separates direct container costs from Booking-level shared costs and uses a safe container-count denominator. 

<details>
<summary>Formula logic</summary>

```excel
alloc_cogs =
IF(
  alloc_policy="EQUAL_SHARE",
  direct_cogs + (shared_cogs / cntr_count),
  direct_cogs
)
```

`Setup_Params!B6` controls whether the shared cost is allocated using `EQUAL_SHARE` or left unallocated with `NO_ALLOCATE`. 

</details>

### Example Scenario

Consider a freight-forwarding Booking with the following valid transactions:

| Item                      | Type     | Original Amount | Currency | USD Equivalent |
| ------------------------- | -------- | --------------: | -------- | -------------: |
| Customer invoice          | Revenue  |           8,500 | USD      |         $8,500 |
| Ocean freight vendor cost | COGS     |           3,000 | USD      |         $3,000 |
| Origin inspection         | COGS     |             900 | USD      |           $900 |
| Cargo insurance           | Revenue  |             400 | USD      |           $400 |
| Bank charge               | Bank Fee |              75 | USD      |            $75 |
| Recoverable deposit       | Deposit  |             500 | USD      |           $500 |

The valid P&L is:

```text
Revenue
= 8,500 + 400
= $8,900

COGS
= 3,000 + 900
= $3,900

Bank Fees
= $75

Net Profit
= $8,900 - $3,900 - $75
= $4,925

Profit Margin
= $4,925 / $8,900
= 55.34%
```

The `$500` recoverable deposit is tracked separately rather than treated as operating revenue or COGS.

Now assume one additional vendor transaction is entered in an unconfigured currency. The system does **not** silently add the transaction to COGS. Its applied FX rate becomes `0`, its USD calculation remains numeric, and the diagnostic field reports `ERR: UNKNOWN_CURRENCY`. The Booking receives a health warning instead of being presented as clean.

The operational recommendation changes accordingly:

> **Do not use the 55.34% margin as a final profitability figure until the unresolved transaction is corrected.**

This is the key distinction between a profitability calculator and a controlled job-costing workflow: the result is accompanied by evidence about whether the underlying data is sufficiently complete to trust.

### Formula Reference

<details>
<summary>Booking Master — Container Count</summary>

**Purpose:** Determine the number of containers attached to each Booking and prevent division-by-zero failures.

```excel
=MAP(
  A2:A10000,
  LAMBDA(
    bk,
    IF(
      bk="",
      "",
      LET(
        cnt,
        COUNTIF(Container_Master!A2:A10000,bk),
        IF(cnt=0,1,cnt)
      )
    )
  )
)
```

If no container has yet been entered, the denominator falls back to `1`. This is a calculation safeguard, while the missing-container condition should still be treated as a data-quality issue operationally. 

</details>

<details>
<summary>Raw Transactions — Applied FX Rate</summary>

**Purpose:** Prioritize a manual FX rate and otherwise retrieve the configured currency rate.

```excel
=MAP(
  K2:K10000,
  L2:L10000,
  LAMBDA(
    curr,m_rate,
    IF(
      curr="",
      0,
      IF(
        m_rate>0,
        m_rate,
        XLOOKUP(
          curr,
          Setup_Params!$A$10:$A$20,
          Setup_Params!$B$10:$B$20,
          0
        )
      )
    )
  )
)
```

An unknown currency returns `0`, not `1.0`. 

</details>

<details>
<summary>Raw Transactions — Financial Treatment</summary>

**Purpose:** Map operational transaction types to financial categories.

```excel
=MAP(
  H2:H10000,
  LAMBDA(
    type,
    IF(
      type="",
      "",
      XLOOKUP(
        type,
        Setup_Params!$E$10:$E$20,
        Setup_Params!$F$10:$F$20,
        "COGS"
      )
    )
  )
)
```

The source design uses `COGS` as the conservative fallback for an unrecognized transaction type, reducing the risk of overstating profit. 

</details>

<details>
<summary>Raw Transactions — USD Equivalent</summary>

**Purpose:** Convert each original transaction amount into the workbook's USD base currency while retaining a numeric result.

```excel
=MAP(
  J2:J10000,
  M2:M10000,
  LAMBDA(
    amt,rate,
    IF(
      amt="",
      0,
      amt*rate
    )
  )
)
```

Keeping this column numeric is important because downstream `SUMIFS` calculations should never receive diagnostic text such as `"INVALID"` in place of a number. 

</details>

<details>
<summary>Raw Transactions — Data Health Status</summary>

**Purpose:** Validate Booking, Service, and FX linkage independently from financial calculation columns.

```excel
=MAP(
  B2:B10000,
  F2:F10000,
  K2:K10000,
  M2:M10000,
  LAMBDA(
    bk,srv,curr,rate,
    IF(
      bk="",
      "",
      IF(
        ISNA(XLOOKUP(
          bk,
          Booking_Master!A2:A10000,
          Booking_Master!A2:A10000
        )),
        "ERR: INVALID_BOOKING",
        IF(
          ISNA(XLOOKUP(
            srv,
            Service_Master!A2:A500,
            Service_Master!A2:A500
          )),
          "ERR: INVALID_SERVICE",
          IF(rate=0,
             "ERR: UNKNOWN_CURRENCY",
             "OK"
          )
        )
      )
    )
  )
)
```

The diagnostic layer is intentionally separate from numeric calculation fields. 

</details>

<details>
<summary>Job Costing Engine — Booking-Level P&L</summary>

**Purpose:** Generate a dynamic Booking list and aggregate only healthy transactions.

```excel
=LET(
  bk_list,
  UNIQUE(
    FILTER(
      Booking_Master!A2:A10000,
      Booking_Master!A2:A10000<>""
    )
  ),
  BYROW(
    bk_list,
    LAMBDA(
      bk,
      LET(
        cust,
        XLOOKUP(
          bk,
          Booking_Master!A2:A10000,
          Booking_Master!C2:C10000,
          "Unknown"
        ),
        rev,
        SUMIFS(
          Raw_Transactions!O2:O10000,
          Raw_Transactions!B2:B10000,bk,
          Raw_Transactions!N2:N10000,"Revenue",
          Raw_Transactions!P2:P10000,"OK"
        ),
        cogs,
        SUMIFS(
          Raw_Transactions!O2:O10000,
          Raw_Transactions!B2:B10000,bk,
          Raw_Transactions!N2:N10000,"COGS",
          Raw_Transactions!P2:P10000,"OK"
        ),
        fees,
        SUMIFS(
          Raw_Transactions!O2:O10000,
          Raw_Transactions!B2:B10000,bk,
          Raw_Transactions!N2:N10000,"Bank Fee",
          Raw_Transactions!P2:P10000,"OK"
        ),
        profit,
        rev-cogs-fees,
        margin,
        IF(rev=0,0,profit/rev),
        bad_rows,
        COUNTIFS(
          Raw_Transactions!B2:B10000,bk,
          Raw_Transactions!P2:P10000,"<>OK"
        ),
        warn_msg,
        IF(
          bad_rows>0,
          "⚠️ "&bad_rows&" TXN DATA ERRORS",
          "CLEAN"
        ),
        HSTACK(
          bk,cust,rev,cogs,fees,
          profit,margin,
          dep,warn_msg
        )
      )
    )
  )
)
```

The essential control is the repeated `Data Health Status = "OK"` criterion. 

</details>

### Validation Rules

| Field / Condition      | Rule                                                            | Error Behavior                                                                     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Booking ID`           | Must exist in `Booking_Master`                                  | `ERR: INVALID_BOOKING`; transaction excluded from P&L                              |
| `Service Code`         | Must exist in `Service_Master`                                  | `ERR: INVALID_SERVICE`; transaction excluded from P&L                              |
| `Currency`             | Must have a valid configured FX rate or positive manual FX rate | Applied FX becomes `0`; diagnostic reports `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Positive value overrides the reference FX rate                  | Invalid/non-positive value falls back to configured FX                             |
| `Transaction Type`     | Should match `Setup_Params` mapping                             | Unknown type conservatively falls back to `COGS`                                   |
| `USD Equivalent`       | Must remain numeric                                             | Diagnostic text must never be written into the numeric aggregation field           |
| `Data Health Status`   | Must be `OK` for financial aggregation                          | Non-OK rows are excluded from Booking P&L                                          |
| `Container Count`      | Must not become zero when used as allocation denominator        | Falls back to `1` to prevent `#DIV/0!`                                             |
| Shared-cost allocation | Controlled by `Setup_Params!B6`                                 | `EQUAL_SHARE` allocates by container count; `NO_ALLOCATE` leaves direct costs only |
| Booking profitability  | Revenue of zero must not produce a division error               | Margin returns `0`                                                                 |
| Executive data health  | Any non-empty status other than `OK` is counted                 | Dashboard displays a warning instead of presenting an unqualified clean state      |

The source cross-validation confirms coverage of the core Booking, Container, Service, and transaction inputs, plus USD Equivalent, Net Profit, Margin, and allocated cost outputs. It also specifically validates the separation between diagnostic text and numeric `SUMIFS` fields. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Cross-Validation and Deployment Readiness

The workbook architecture is designed to validate the analytical chain **before** management relies on the resulting P&L.

The source implementation explicitly checks the transaction-type mapping chain, FX lookup chain, Service Master linkage, shared-cost allocation chain, and the compatibility between diagnostic text and numeric aggregation fields. 

| Validation Dimension         | What Is Checked                                                                  | Expected Result                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Booking linkage**          | Every transaction `Booking ID` exists in `Booking_Master`                        | Invalid rows receive an error state                      |
| **Service linkage**          | Every transaction `Service Code` exists in `Service_Master`                      | Invalid rows are excluded from P&L                       |
| **FX coverage**              | Every transaction has either a valid manual FX rate or configured reference rate | Unknown currencies trigger a health warning              |
| **Financial classification** | Transaction Type maps to Revenue / COGS / Bank Fee / Deposit                     | Unknown types use the conservative COGS fallback         |
| **Numeric aggregation**      | `USD Equivalent` remains numeric under all conditions                            | `SUMIFS` does not encounter diagnostic text              |
| **Health-gated aggregation** | P&L only includes `Data Health Status = "OK"`                                    | Broken source rows cannot silently enter reported profit |
| **Container allocation**     | Booking-level shared costs use the configured allocation policy                  | No repeated full-cost assignment across containers       |
| **Zero-revenue protection**  | Profit margin calculation handles Revenue = 0                                    | No `#DIV/0!`                                             |
| **Executive monitoring**     | Global transaction errors are counted separately                                 | Dashboard signals unresolved source-data issues          |

The implementation's cross-validation matrix states that the core input fields — Booking, Container, Service, and transaction data — and the major outputs — USD Equivalent, Net Profit, Margin, and Allocated Cost — are covered by the architecture. 

### Operational SOP

The intended operating model is deliberately simple:

```text
1. Establish Master Data
        ↓
2. Record Financial Transactions
        ↓
3. Check Data Health Status
        ↓
4. Review Booking / Service / Container Profitability
        ↓
5. Resolve Exceptions
        ↓
6. Use Clean Results for Management Decisions
```

#### 1. Establish Master Data

Create the Booking in `Booking_Master`.

If containers are relevant, create their Booking-to-Container relationships in `Container_Master`.

Maintain the standardized service catalog in `Service_Master`.

Do not begin financial analysis by typing free-form service names or Booking identifiers directly into reporting sheets. The master tables are the reference layer for downstream lookup chains. 

#### 2. Record Financial Transactions

Enter revenue, vendor costs, bank fees, deposits, and other relevant financial activity into `Raw_Transactions`.

Each transaction should contain the appropriate:

* `Booking ID`
* `Container ID`, when applicable
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, when a transaction-specific rate is required

The transaction table is the only source that should receive the detailed financial event records. The calculation engine should not be manually edited. 

#### 3. Check Data Health

Review `Raw_Transactions[Data Health Status]`.

A clean row returns:

```text
OK
```

Exceptions identify the broken relationship, such as:

```text
ERR: INVALID_BOOKING
ERR: INVALID_SERVICE
ERR: UNKNOWN_CURRENCY
```

The implementation deliberately treats this as a separate control layer. A transaction can therefore remain numerically safe while still being visibly excluded from the financial result. 

#### 4. Review Profitability

Use:

* `Job_Costing_Engine` for Booking-level profitability.
* `Booking_PL` for one Booking's service-by-service breakdown.
* `Container_Analysis` when the Booking contains multiple containers.
* `Service_Profitability` for cross-Booking service economics.
* `Executive_Dashboard` for management-level monitoring.

This creates a drill-down path from **global profitability → Booking → service → container → transaction** rather than forcing every question to be answered from one summary dashboard.

### Data Maintenance Rules

The architecture relies on controlled master data because Excel does not provide the same hard foreign-key enforcement as a database or ERP platform.

The most important maintenance rules are:

1. **Do not overwrite formula-generated fields.**
2. **Do not manually type Service Names where a Service Code should be used.**
3. **Do not introduce a new currency without first adding its FX rate to `Setup_Params`.**
4. **Do not use `1.0` as a missing-FX fallback.**
5. **Do not write error text into numeric aggregation columns.**
6. **Do not manually edit the `Job_Costing_Engine` output.**
7. **Resolve non-OK transaction rows before treating a Booking margin as final.**
8. **Keep the shared-cost allocation policy centralized in `Setup_Params`.**

The source design specifically prohibits hard-coding global parameters into formulas and centralizes base currency, FX rates, transaction mappings, and allocation policy in `Setup_Params`. 

### Troubleshooting

#### `⚠️ X TXN DATA ERRORS` appears on the dashboard

**Likely causes:**

* Currency is missing from the FX table.
* Booking ID does not exist in `Booking_Master`.
* Service Code does not exist in `Service_Master`.
* A source transaction contains an invalid linkage.

**Resolution:**

Filter the `Data Health Status` column in `Raw_Transactions` to show values other than `OK`.

Then resolve each underlying source-data issue rather than manually changing the P&L output.

The Executive Dashboard is designed to expose this condition through a global health card:

```excel
=LET(
    total_errs,
    COUNTIFS(
        Raw_Transactions!P2:P10000,
        "<>OK",
        Raw_Transactions!P2:P10000,
        "<>"
    ),
    IF(
        total_errs=0,
        "✅ ALL DATA HEALTHY",
        "⚠️ ATTENTION: " &
        total_errs &
        " ERRORS IN RAW TRANSACTIONS"
    )
)
```



#### Dynamic-array formulas return `#SPILL!`

A spill formula requires its destination area to remain clear.

Check:

* cells directly below the formula;
* cells to the right of the formula;
* manually entered values occupying the intended spill range;
* residual formatting or copied content that has created an obstruction.

Clear the obstructing cells and allow the dynamic array to expand again.

#### Profitability appears unexpectedly high

Do not immediately change the profit formula.

First check:

```text
Raw Transactions
       ↓
Data Health Status
       ↓
Unknown Currency?
Invalid Booking?
Invalid Service?
       ↓
Only OK rows enter P&L
```

A suspiciously high margin can be caused by a cost transaction that failed the linkage chain and was therefore excluded from the calculation.

This is exactly why the workbook distinguishes **"zero as a numeric calculation state"** from **"zero as an economic conclusion."** A missing FX rate can produce `$0.00` in a numeric field while simultaneously producing `ERR: UNKNOWN_CURRENCY` in the diagnostic field. 

#### Container profitability appears overstated or understated

Check three things in order:

1. Is the correct `Booking ID` selected?
2. Is the correct `Container ID` selected?
3. Is `Setup_Params!B6` using the intended allocation policy?

Under `EQUAL_SHARE`, Booking-level shared COGS is divided by the Booking's container count before being added to direct container costs.

Under `NO_ALLOCATE`, shared Booking-level costs are not assigned to individual containers.

The distinction matters because assigning the full Booking-level shared cost to every container would duplicate the same economic cost. 

### Implementation Boundaries

This workbook is intentionally designed as a **lightweight analytical control layer**, not as a replacement for an accounting platform or transportation management system.

It is strongest when:

* operational and financial data already exists in spreadsheets or exports;
* the key unit of analysis is a Booking or shipment;
* management needs job-level profitability;
* services and charges need to be compared across Bookings;
* multiple currencies need a consistent reporting basis;
* shared costs require an explicit allocation rule;
* users need transparent formulas rather than opaque automation.

It is not designed to provide:

* multi-user transactional concurrency;
* ERP-grade permissions;
* automated bank reconciliation;
* automated carrier invoice ingestion;
* database-level foreign-key enforcement;
* enterprise workflow orchestration.

The value of the workbook is therefore not the number of sheets it contains. It is the controlled analytical chain connecting **Booking → transaction → classification → currency conversion → validated aggregation → profitability → drill-down**.

### Analytical Control Principle

The most important implementation rule can be summarized as:

```text
Never let a broken data relationship
look like a valid financial result.
```

A conventional spreadsheet might allow:

```text
Missing FX
    ↓
0 USD
    ↓
SUMIFS
    ↓
Higher Profit
```

This workbook instead makes the state explicit:

```text
Missing FX
    ↓
0 USD Equivalent
    +
ERR: UNKNOWN_CURRENCY
    ↓
Excluded from P&L
    +
Booking Health Warning
    ↓
Correct the source data
    ↓
Recalculate
```

That distinction is the foundation of the Job Costing Engine's reliability model. The architecture explicitly recognizes that `SUMIFS` can safely aggregate numeric values while silently ignoring text, so diagnostic states must never be embedded directly inside numeric calculation columns. 

### Recommended Deployment Sequence

For a new workbook implementation, the safest sequence is:

```text
Phase 1
Setup_Params
    ↓
Define Base Currency
Define FX Rates
Define Transaction Types
Define Financial Treatments
Define Allocation Policy

Phase 2
Booking_Master
Container_Master
Service_Master
    ↓
Establish Reference Data

Phase 3
Raw_Transactions
    ↓
Load Historical / Current Financial Data

Phase 4
Data Health Review
    ↓
Resolve Invalid Bookings
Resolve Invalid Services
Resolve Unknown Currencies

Phase 5
Job_Costing_Engine
    ↓
Validate Revenue / COGS / Fees / Profit

Phase 6
Booking_PL
Container_Analysis
Service_Profitability
Executive_Dashboard
    ↓
Operational Review
```

The result is a repeatable workflow rather than a one-time spreadsheet calculation: establish the reference data once, append new operational transactions, resolve exceptions, and let the calculation and analysis layers update from the same underlying data model. 

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Final Architecture Notes

The workbook is deliberately built around a **single Booking-level profitability engine**, rather than a collection of disconnected calculators.

The analytical hierarchy is:

```text
Booking
 ├── Customer
 ├── Containers
 │    └── Container-level direct + allocated costs
 └── Transactions
      ├── Revenue
      ├── COGS
      ├── Bank Fees
      └── Deposits
           ↓
      Service-level profitability
           ↓
      Booking-level P&L
           ↓
      Executive-level profitability & data health
```

This structure keeps the Booking as the central economic unit while allowing users to drill downward into services and containers or upward into cross-Booking profitability. 

The implementation also explicitly recognizes three multi-hop lookup chains:

1. **Transaction → Financial Treatment → FX → USD Equivalent → Booking P&L**
2. **Booking → Container Count → Shared Cost Policy → Shared Cost Allocation → Container Analysis**
3. **Service Code → Service Master → Service Category → Service Profitability**

These chains are validated before the analytical outputs are considered production-ready. 

### What the Engine Protects Against

The central design principle is not merely automation. It is **preventing a broken input relationship from masquerading as a valid financial conclusion**.

| Failure                                              | Protective Mechanism                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Unknown currency                                     | FX defaults to `0`, while a separate diagnostic state reports the missing rate |
| Unknown transaction type                             | Conservative `COGS` fallback prevents accidental profit inflation              |
| Invalid Booking                                      | `ERR: INVALID_BOOKING`                                                         |
| Invalid Service Code                                 | `ERR: INVALID_SERVICE`                                                         |
| Broken transaction chain                             | Non-`OK` rows are excluded from P&L aggregation                                |
| Shared cost duplicated across containers             | Explicit allocation policy and container-count denominator                     |
| Zero revenue                                         | Margin calculation returns `0` instead of `#DIV/0!`                            |
| Diagnostic text contaminating financial calculations | Numeric calculation columns and diagnostic columns remain separate             |

The implementation's fallback matrix specifically rejects a `1.0` FX fallback because that could turn an unrecognized foreign-currency amount into an implausibly large USD amount. 

### Recommended Use Pattern

For ongoing operations, the workbook is intended to behave as a **refreshable operating model**, not a one-time report.

```text
Maintain Setup_Params
        ↓
Maintain Master Data
        ↓
Append New Transactions
        ↓
Resolve Data Health Exceptions
        ↓
Review Booking Profitability
        ↓
Drill Into Service / Container
        ↓
Use Clean Results for Decisions
```

This makes the workbook useful for recurring questions such as:

* Which Bookings are actually profitable?
* Which services produce the strongest margins?
* Which shipment costs are driving an unexpected loss?
* Which Booking-level costs need to be allocated to containers?
* Are reported margins trustworthy, or are unresolved source-data issues hiding costs?
* Where should pricing, vendor negotiation, or operational review focus next?

The source SOP follows the same sequence: establish master data, register financial transactions, inspect `Data Health Status`, and then use the profitability dashboards for review. 

### Final Design Principle

The workbook does not attempt to make financial analysis look simpler by hiding its uncertainty.

Instead, it makes the uncertainty visible.

A Booking with a calculated margin is not automatically treated as a trustworthy Booking.

A **clean Booking** means:

```text
Valid Booking
+ Valid Service
+ Valid Currency / FX
+ Valid Transaction Classification
+ Healthy Transaction Chain
= Profitability Result That Can Be Reviewed
```

That distinction is the core of the implementation.

</details>

## Other Tools in This Series

A collection of lightweight Excel decision-support tools covering operational control, profitability analysis, inventory reconciliation, workforce planning, and other business workflows.

* **Inventory & Reconciliation Tools** — transaction-driven inventory and variance analysis.
* **Cost & Profitability Tools** — operational costing and unit-economics models.
* **Workforce Planning Tools** — payroll, capacity, and annual workforce planning.

## License

This project is released under the **Apache License 2.0**.

You may use, modify, distribute, and build upon the work in accordance with the terms of the Apache License 2.0.
