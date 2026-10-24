[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Freight Forwarder Job Costing Excel Template & Shipment Profitability Calculator (Booking-Level P&L)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/f89c1a0f-f576-43af-b26a-02bae4a47348" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Financial%20Spreadsheet%20Model-2251FF.svg)](#)

**An audit-ready Freight Forwarder Job Costing Excel Template and Interactive Shipment P&L Calculator built to track booking-level gross margin, multi-currency FX conversions, FCL/LCL container cost allocation, and freight charge profitability. Reconcile customer AR invoices, carrier AP bills, drayage, customs brokerage, and bank wire fees in one standardized logistics financial model—available free in your browser or as an unlocked Excel spreadsheet.**

**No signup. No installation. Free to test in your browser.**

Use the interactive web application to inspect the job-costing workflow immediately, or download the full Excel spreadsheet template to import your own accounting exports—backed by a 30-day, no-questions-asked money-back guarantee.

> 🌐 **Launch Free Web App** → [Interactive Freight Forwarding Job Costing & Shipment P&L Web Calculator](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)  
> 📥 **Get the Full Excel Model** → [Download the Editable Freight Forwarder Job Costing & Booking Profitability Excel Template](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)  
>
> *Both the browser edition and the downloadable Excel workbook share the exact same relational accounting architecture.*

---

## What It Helps You Track: Freight Forwarding Pain-Point to Solution Mapping

Instead of waiting for month-end aggregate accounting reports, this **logistics job-costing spreadsheet** tracks and resolves the exact operational blind spots that cause **margin leakage** in ocean, air, and multimodal freight forwarding:

| Target Tracking Metric / Pain Point | The Common Freight Accounting Blind Spot | How This Job Costing Model Solves & Tracks It |
| :--- | :--- | :--- |
| **Booking-Level P&L & Gross Margin %** | Profit is only visible at the monthly company-wide level, hiding loss-making shipments and underpriced lanes. | Tracks **AR Revenue vs. AP COGS vs. Bank Wire Fees** per individual Booking ID (B/L or AWB level) to expose real-time **Net Profit and Margin %**. |
| **Charge-Code & Accessorial Profitability** | Knowing total shipment revenue without knowing if Ocean Freight, Drayage, Customs, or Demurrage actually made money. | Tracks margin contribution across granular **Freight Service Codes** (Ocean Freight, THC, Origin Inspection, Cargo Insurance, Documentation, Coordination). |
| **Multi-Container (FCL) Shared Cost Allocation** | When one Master B/L has multiple containers, booking-level flat fees get duplicated or ignored during container-level analysis. | Separates **direct container costs** from **shared booking-level costs**, automatically allocating shared fees across containers using a controlled policy. |
| **Multi-Currency (FX) Gain/Loss & Normalization** |Paying ocean carriers in USD, origin agents in EUR/CNY, and billing clients in local currency using inconsistent manual exchange rates. | Converts all mixed-currency AR/AP lines to a **standardized USD basis** via a centralized FX lookup table with automated missing-rate exception flags. |
| **Unlinked Vendor Costs & Data-Health Auditing** | Typos in Booking IDs, invalid charge codes, or missing FX rates silently drop vendor costs to $0, creating artificially inflated profit margins. | Runs an automated **Data-Health Diagnostic Engine** (`ERR: UNKNOWN_CURRENCY`, `ERR: INVALID_BOOKING`) that quarantines broken records before they corrupt your P&L. |

---

## How to Run a Shipment Profitability & Job Costing Audit (Quick Start Workflow)

Turn messy ERP/accounting exports, carrier invoices, and operational spreadsheets into a clean **Booking-level P&L statement** in four structured steps:

### Step 1: Configure Base Currency, FX Rates & Allocation Rules
Open the `Setup_Params` control sheet to establish your freight accounting baseline:
- Define your **Base Reporting Currency** (e.g., USD) and populate reference **Foreign Exchange (FX) Rates**.
- Map your **Transaction Types** (Customer Revenue, Direct COGS, Bank/Wire Fees, Customer Deposits).
- Select your **Shared-Cost Allocation Policy** for multi-container FCL shipments.

*Action:* Inspect the pre-configured parameter structure instantly in the [Free Browser Job Costing Demo](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/).

---

### Step 2: Import Booking Master Records & Raw AR/AP Transactions
Populate your master lists (Bookings, Containers, and Freight Service Catalog), then paste or load your financial line items into `Raw_Transactions`:
- **Compatible Data Sources:** QuickBooks/Xero exports, TMS billing logs, ocean carrier/NVOCC freight invoices, customs broker statements, and manual operational trackers.
- **No manual VLOOKUP rebuilding required**—simply drop raw rows into the standardized transaction table.

---

### Step 3: Audit Data-Health Exceptions & Review Automated Shipment P&L
As soon as transactions are loaded, the job costing engine automatically:
- Normalizes foreign currencies to your base reporting currency.
- Flags broken master-data links (`Data Health Status`) so unlinked vendor bills never hide as zero-cost items.
- Aggregates verified lines into **Booking-Level P&L**, **Service-Line Margin Breakdown**, and **Container-Level Unit Economics**.

---

### Step 4: Refresh Periodically & Export to Excel for Ongoing Operations
As new vessel sailings, supplier invoices, or detention/demurrage charges arrive, append them to the transaction log to keep your shipment margins updated across billing cycles.

> 💡 **Ready to run this on your own live shipment data and accounting exports?**  
> The browser version is built for instant workflow verification and single-session testing. To import your own CSV/Excel accounting dumps, customize freight charge catalogs, save monthly closing snapshots, and audit every formula offline:  
> 👉 **[Download the Unlocked Freight Forwarder Job Costing Excel Template](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)** and turn this into your repeatable monthly shipment profitability engine.

---

## The Business Logic & Methodology

Standard accounting software (like QuickBooks or Xero) is built around **Chart of Accounts and Calendar Months**, whereas freight forwarders operate around **Bookings, Bills of Lading (B/L), and Containers** whose revenue and vendor bills often span multiple months and currencies. 

To solve the mismatch between general ledger accounting and operational logistics, this toolkit implements a **4-pillar relational costing methodology**:

1. **Relational Entity-Hierarchy Modeling (`Booking → Container → Service Line`):**  
   In freight operations, costs occur at different structural levels. A customs clearance fee or Bill of Lading documentation charge applies once per **Booking**, whereas terminal handling charges (THC), drayage, or chassis split fees apply per **Container (TEU/FEU)**. Flattening these into a single table causes severe double-counting. This engine enforces a strict relational hierarchy: direct container costs bind to `Container_ID`, while shipment-wide overheads bind to `Booking_ID` and distribute dynamically via a deterministic allocation formula:
   $$\text{Container Allocated Cost} = \text{Direct Container Cost} + \frac{\text{Booking-Level Shared Costs}}{\text{Total Active Containers in Booking}}$$
2. **Decoupled Diagnostic State vs. Numeric Aggregation (Zero-Silent-Failure Architecture):**  
   In standard Excel spreadsheets, a misspelled Booking ID in a `SUMIFS` formula silently ignores a $2,000 ocean carrier invoice—making a loss-making shipment look wildly profitable. Conversely, a `#N/A` error in a `VLOOKUP` breaks the entire P&L dashboard. This model uses a **Dual-Track Evaluation Method**: every transaction row passes through a referential integrity gate (`Data_Health_Status`) that validates Booking IDs, Service Codes, and Currency keys before math execution. Invalid rows output explicit diagnostic strings (`ERR: UNKNOWN_CURRENCY`, `ERR: ORPHAN_BOOKING`) while passing a safe `0` to the aggregation engine, ensuring the dashboard never crashes while visually alerting analysts to incomplete margin data.
3. **Centralized Multi-Currency Triangulation:**  
   Cross-border forwarding involves paying origin agents in CNY/EUR, settling ocean freight in USD, and absorbing intermediary bank wire fees. The model normalizes every raw transaction row at the line-item level ($T_i \times \text{FX}_{\text{rate}}$) prior to P&L roll-up, eliminating the rounding distortions and exchange-rate drift common in manual summary conversions.
4. **Cash-Flow vs. Accrual P&L Separation (Deposits vs. Earned Revenue):**  
   Freight forwarders frequently collect upfront customer deposits or advance customs duties before a vessel sails. Mixing customer deposits with earned freight revenue distorts true gross margin. The transaction classification engine explicitly isolates **Balance-Sheet Deposits** from **P&L Revenue, COGS, and Bank Fees**, delivering an accurate unit-margin view alongside cash-position visibility.

---

## Why I Built This: Fixing the Broken Analytical Chain in Freight Forwarding

Freight-forwarding profitability is much harder to see than it looks on a sales quote.

A single Ocean or Air Booking can involve customer freight charges, origin inspection, cargo insurance, documentation fees, local drayage, carrier ocean freight, bank wire fees, customer deposits, 3+ currencies, and multiple containers—scattered across disparate operational trackers and accounting exports.

When forwarders lose money on a shipment, the root cause is rarely bad pricing intent. **It is a broken analytical chain:**
- A shipment looks like a **38.8% gross margin winner** because a $1,500 drayage vendor invoice had a typo in the Booking reference and was excluded from the `SUMIFS` formula.
- A foreign-currency origin agent charge was omitted because its FX rate wasn't updated in the lookup table.
- Shared booking-level customs and documentation costs were accidentally multiplied across 5 containers—or ignored entirely—when quoting per-container rates to the client.

For example, instead of blindly trusting a flawed summary like this:

```text
Booking Revenue        $8,500
Reported COGS          $5,200
Apparent Net Profit    $3,300
Reported Margin         38.8%  <-- (Artificially inflated by missing vendor bill)
```

This costing engine immediately flags that the underlying transaction dataset contains an **unlinked vendor cost** or an **unconfigured currency (`ERR: UNKNOWN_CURRENCY`)**. The Booking is visibly quarantined for data cleanup rather than presented to management as a clean 38.8% margin.

The objective is not another pretty vanity dashboard. It is a **defensible financial reasoning framework** that guarantees your Booking-level P&L is mathematically sound before you pay sales commissions or renew customer rate cards.

---

## Ad-Hoc Accounting Spreadsheets vs. This Freight Job Costing Engine

| Evaluation Dimension | Manual Spreadsheets & Generic Accounting (Without This Tool) | Standardized Freight Job Costing Engine (With This Tool) |
| --- | --- | --- |
| **Shipment-Level Visibility (B/L & AWB)** | General Ledger software blends all monthly invoices together, obscuring which specific shipments, trade lanes, or clients lose money. | Generates an instant **Booking-by-Booking P&L** breaking down Gross Revenue, Direct COGS, Bank Wire Fees, Net Profit, and Margin %. |
| **Multi-Currency (FX) Reconciliation** | Operators convert EUR, CNY, GBP, and USD manually using ad-hoc rates, causing unexplainable margin discrepancies at month-end close. | Enforces a **centralized FX rate table** that converts every invoice line to a single base currency, throwing an explicit warning if a currency rate is missing. |
| **Multi-Container FCL Cost Allocation** | Document fees, customs clearance, and booking-level surcharges are either double-counted per container or left out of container unit economics. | Dynamically separates **Direct Container COGS** from **Shared Booking Costs**, distributing shared fees evenly across the exact container count. |
| **Accessorial & Service-Code Margin** | Forwarders know total invoice value but cannot tell if they are losing money on Drayage, Cargo Insurance, Origin Inspection, or THD/THC. | Aggregates revenue vs. vendor cost by **granular Freight Service Code**, revealing which value-added services generate profit vs. margin leakage. |
| **Master-Data Integrity & Error Handling** | Misspelled Booking IDs or broken `VLOOKUP` links silently drop vendor costs to zero (inflating profit) or break the entire sheet with `#N/A` errors. | Built-in **Data-Health Diagnostic Layer** isolates invalid Booking IDs, Service Codes, and FX rates while keeping numeric roll-ups stable and audit-ready. |

---

## Who This Is For: Target Logistics Roles & Operational Scenarios

This toolkit is engineered for **small-to-midsize freight forwarders (OTIs / NVOCCs), customs brokers, 3PL operators, and logistics finance teams** who need enterprise-grade shipment job costing without paying $20,000+ for a heavyweight TMS/ERP implementation:

* **Freight Forwarding Owners & Managing Directors:** Use this as an **executive shipment profitability and sales commission audit tool** to verify true net margins (after bank fees and shared costs) before signing annual shipper rate contracts or paying out sales rep commissions.
* **Logistics Finance Managers & Freight Accountants:** Use this as a **monthly job-costing reconciliation template** to bridge the gap between general accounting software (QuickBooks, Xero, NetSuite) and operational shipment files—catching unbilled revenue or orphan vendor bills before closing the books.
* **Freight Pricing Analysts & Trade-Lane Managers:** Use this as a **container unit-economics and accessorial margin analyzer** to see whether Ocean Freight, Air Freight, Customs Brokerage, Cargo Insurance, or Inland Drayage is driving or eroding profitability across specific trade lanes.
* **Forwarding Operations Managers & Dispatchers:** Use this as a **multi-container FCL/LCL cost allocation calculator** when managing complex project cargo or multi-container bookings with mixed currencies and split vendor invoices.
* **Fractional CFOs & Supply Chain Consultants:** Use this as a **plug-and-play margin leakage diagnostic framework** when auditing client freight portfolios or cleaning up messy operational spreadsheets.

*Note: This workbook is **not** intended to replace an operational TMS (like CargoWise), an automated EDI booking platform, or a statutory tax accounting system. It is the lightweight **analytical job-costing execution layer** that connects your operational shipment records to their true financial outcome.*

---

## Frequently Asked Freight Job Costing & Margin Scenarios

If your forwarding operation struggles with any of the following financial reconciliation questions, this model is structured to solve them out of the box:

* **Preventing Margin Leakage on Shipments:** *How do I reconcile customer AR invoices against delayed ocean carrier, drayage, and customs broker AP bills at the individual Booking or Bill of Lading (B/L) level?*
* **FCL Multi-Container Cost Splitting:** *How do I accurately calculate per-container cost and profit when a single Booking includes 4x 40'HC containers with both container-specific drayage fees and shared B/L documentation charges?*
* **Multi-Currency Freight Accounting in Excel:** *How do I build a shipment P&L tracker in Excel that handles USD ocean freight, EUR/CNY origin charges, and bank wire fees without manual FX conversion errors?*
* **Auditing Sales Rep Gross Profit:** *How do I verify the true net margin of a freight booking before paying sales commissions on gross profit?*

---

## About Theseus Workshop

I build lightweight, audit-ready Excel and browser-based decision-support frameworks for operational environments where there are too many moving parts to hold in one person's head—but where a bloated enterprise software rollout is overkill.

The central design question behind every tool is simple:

> **"What exact operational and financial data needs to sit in one place so the next business decision becomes mathematically obvious?"**

This **Booking-Level Profitability & Job Costing Engine** applies that principle to international freight forwarding—connecting the core operational unit (**the Booking & Container**) directly to its multi-currency transactions, accessorial service lines, data-health status, and true bottom-line profit.

---

*Keywords: Freight Forwarder Job Costing Excel Template, Shipment Profitability Calculator, Booking-Level P&L Spreadsheet, NVOCC Margin Tracker, FCL Container Cost Allocation Model, Freight Accounting AR/AP Reconciliation Template, Logistics Gross Margin Analysis.*


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
