[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Instrument voor winstgevendheid en kostentoerekening per boeking voor expéditeurs

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Decision%20Support-2251FF.svg)](#)

**Zie de werkelijke winst van elke boeking in het goederenvervoer — omzet, kosten van omzet, bankkosten, deposito's, winstgevendheid per service en kosten per container — zonder de analyse handmatig opnieuw op te bouwen.**

**Geen registratie. Geen installatie. Gratis in uw browser.**

Probeer de browserversie gratis. Als u de Excel-versie nodig heeft, kunt u die kopen met een geld-terug-garantie van 30 dagen, zonder vragen.
>
> 🌐 **Openen in de browser** → [hier](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)
> 📥 **Excel downloaden** → [aankooplink](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)
>
> Dezelfde analytische workflow is beschikbaar in de indelingen browser en Excel.


## Wat u hiermee kunt volgen

* **Omzet vs. kosten van omzet vs. bankkosten per boeking** — zodat winstgevendheid zichtbaar is op niveau van de zending en niet alleen op bedrijfsniveau.
* **Nettowinst en winstmarge voor elke boeking** — zodat opdrachten met lage marge of verliesdragende opdrachten kunnen worden geïdentificeerd voordat ze verdwijnen in geaggregeerde financiële rapporten.
* **Winstgevendheid per service of per heffing** — tonend of oceaanvervoer, inspectie, verzekering, documentatie, coördinatie of andere servicelijnen daadwerkelijk bijdragen aan de winst.
* **Kostenblootstelling op containerniveau** — scheiding van directe containerkosten en gedeelde kosten op boekingniveau wanneer een zending meerdere containers bevat.
* **Transacties in vreemde valuta omgerekend naar een gemeenschappelijke USD-basis** — zodat omzet- en kostenregels met gemengde valuta consistent kunnen worden vergeleken.
* **Uitzonderingen op datagezondheid voordat ze de winst-en-verliesrekening vervuilen** — identificatie van ongeldige boekingen, ongeldige servicecodes en ontbrekende wisselkoersen, in plaats van kapotte data stilzwijgend als geldige getallen te behandelen.

## Snelstartworkflow

1. **Stel de belangrijkste parameters in.**
   Configureer de basisvaluta, de referentiewisselkoersen, de toewijzing van transactietypen en het beleid voor toerekening van gedeelde kosten in `Setup_Params`. Dit is de controlelaag van het werkboek.

2. **Importeer bestaande data.**
   Leg boekings- en containerrecords aan, definieer de servicecatalogus en plak of laad financiële transacties in `Raw_Transactions`. Bestaande boekhoudkundige exports, leverancierskostenrecords, klantfacturen of spreadsheetdata kunnen de transactiebron worden.

3. **Krijg direct resultaten.**
   Zodra de brondata zijn gevuld, rekent de berekeningsengine valuta automatisch om, classificeert ze transacties, controleert ze de koppelingsgezondheid en aggregeert ze geldige financiële regels tot een winst-en-verliesrekening op boekingniveau.

4. **Onderhoud via periodieke verversing.**
   Voeg nieuwe boekingen, containers, services en transacties toe naarmate de operaties vorderen. De analysebladen actualiseren vanuit de onderliggende stam- en transactiedata, in plaats van voor elke zending een nieuwe rekenmachine te vereisen.

**Stel de controleparameters in. Voer de operationele data in. Krijg de analyse per boeking. Ververs wanneer het bedrijf verandert.**

## Waarom ik dit heb gebouwd

Winstgevendheid in het goederenvervoer is vaak moeilijker te zien dan het lijkt.

Een boeking kan klantomzet, oceaantransport, inspectie bij herkomst, ladingverzekering, documentatie, coördinatiekosten, leverancierskosten, bankkosten, deposito's, meerdere valuta en meerdere containers bevatten. Die records leven vaak in verschillende operationele of boekhoudkundige exports.

Het resulterende falen is niet noodzakelijkerwijs zwak financieel oordeel. Het is vaak een **gebroken analytische keten**.

Een boeking kan winstgevend lijken omdat één leverancierskost nooit aan de boeking is gekoppeld. Een transactie in vreemde valuta kan ontbreken omdat haar wisselkoers niet is geconfigureerd. Een gedeelde kost op boekingniveau kan verkeerd worden geteld bij het inzoomen op individuele containers.

Dit werkboek behandelt die falen als onderdeel van het analytische probleem.

Zie bijvoorbeeld niet:

```text
Booking Revenue       $8,500
Reported COGS         $5,200
Apparent Profit       $3,300
Margin                   38.8%
```

… maar de workflow kan blootleggen dat de transactiedataset een niet-gekoppelde leverancierskost en een onbekende valuta bevat. De boeking wordt dan gemarkeerd, in plaats van gepresenteerd als een schone marge van 38,8%.

Het doel is niet weer een dashboard. Het is een **geproduceerd redeneerkader** voor het omzetten van transactiedata uit het goederenvervoer naar een verdedigbaar winstgevendheidsoverzicht per boeking.

De implementatie scheidt numerieke berekeningsvelden expliciet van diagnosetekst. Een ontbrekende wisselkoers kan daarom numeriek veilig blijven voor aggregatie en tegelijkertijd een waarschuwing `ERR: UNKNOWN_CURRENCY` produceren. Dit voorkomt dat een fouttoestand een schijnbaar geldig financieel resultaat wordt. 

## Veelvoorkomende problemen in het goederenvervoer die dit oplost

| Probleem                                        | Zonder dit instrument                                                                                                  | Met dit instrument                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Winst alleen zichtbaar in aggregatie**        | Omzet en kosten op bedrijfsniveau verhullen welke individuele zendingen geld verdienen of verliezen.                          | Elke boeking krijgt een eigen weergave van omzet, kosten van omzet, bankkosten, nettowinst en marge.                              |
| **Kosten komen aan in meerdere valuta**        | Valutakoersing gebeurt handmatig of inconsistent, waardoor vergelijking tussen boekingen onbetrouwbaar is.                 | Transacties gebruiken een gecontroleerde valuta-opzoeking met een expliciete uitzondering voor ontbrekende koers.                                  |
| **Een boeking bevat meerdere containers**     | Gedeelde kosten kunnen worden verdubbeld, genegeerd of inconsistent toegekend bij de analyse van containereconomie.            | Gedeelde kosten op boekingniveau kunnen over het aantal containers worden verdeeld volgens een gedefinieerd beleid.                    |
| **Winstgevendheid per service is onduidelijk**           | Omzet is wellicht per heffing bekend, maar de bijbehorende kost en marge zijn moeilijk te verzoeken over zendingen heen. | Aggregatie op serviceniveau legt winstgevendheid over boekingen heen bloot.                                                  |
| **Kapotte koppelingen in stamdata vervormen de winst-en-verliesrekening onopgemerkt** | Ongeldige boeking-IDs, servicecodes of valuta kunnen ontbrekende kosten of misleidende nulwaarden worden.              | `Data Health Status` identificeert gebroken opzoeksketens en de berekeningsengine aggregeert alleen gezonde transacties. |

## Voor wie dit bedoeld is

Dit instrument is ontworpen voor **kleine en middelgrote expéditeurs, transportexploitanten, financiële teams, kostentoekeningsanalisten en eigenaren** die winstgevendheid op boeking- of zendingsniveau moeten begrijpen, in plaats van te vertrouwen op een algemene winst-en-verliesrekening op bedrijfsniveau.

Het past bij operaties waarin omzet- en kostenrecords al in spreadsheets of boekhoudkundige exports bestaan, maar waarin het bedrijf een gestructureerde manier nodig heeft om ze te verbinden.

Het is vooral nuttig wanneer één boeking meerdere services, leveranciers, valuta, bankkosten en containers kan bevatten.

Het is **niet** bedoeld om een TMS, ERP, boekhoudplatform of transactiesysteem met hoge concurrency te vervangen. Het is een lichte analytische uitvoeringslaag.

**Geen spreadsheet-expertise nodig om de browserversie te gebruiken. Open hem en begin direct met het inspecteren van de workflow.**

## Over mij

Ik bouw lichtgewicht trackers en beslissingsondersteunende instrumenten voor situaties waarin er te veel bewegende delen zijn om in één hoofd te houden, maar niet genoeg complexiteit om een volledige enterprise-implementatie te rechtvaardigen.

De centrale vraag is simpel:

> **Welke informatie moet op één plaats staan om de volgende beslissing vol vertrouwen te nemen?**

Deze kostentoerekening per boeking past die aanpak toe op het goederenvervoer. In plaats van winstgevendheid te behandelen als een eindboekhoudkundig rapport, verbindt het de operationele eenheid — de **boeking** — aan zijn transacties, services, containers, kosten en financiële uitkomst.

## Technische details

<details>
<summary>Voor technische reviewers, Excel-practitioners en medewerkers</summary>

### Werkboekarchitectuur

Het werkboek is georganiseerd rond vier functionele lagen: **regels en parameters → stamdata → transactie-invoer → berekening en analytische uitvoer**.

Het ontwerp bevat 11 bladen:

| Laag              | Blad                   | Rol                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Regels & parameters | `Instructions`          | Bedieningsinstructies, regels voor datainvoer en bedrijfsdefinities               |
| Regels & parameters | `Setup_Params`          | Basisvaluta, wisselkoersen, transactietoewijzingen en beleid voor toerekening van gedeelde kosten |
| Stamdata        | `Booking_Master`        | Boekingsindex, klant, status en aantal containers                             |
| Stamdata        | `Container_Master`      | 1:N-relatie tussen boeking en container                                            |
| Stamdata        | `Service_Master`        | Standaard servicecode, servicenaam en categorie                                |
| Transactie-invoer  | `Raw_Transactions`      | Uniform grootboek van financiële transacties plus diagnostiek van datagezondheid                |
| Berekeningsengine | `Job_Costing_Engine`    | Aggregatie op boekingniveau van omzet, kosten van omzet, bankkosten, winst, marge en deposito's  |
| Analyse            | `Booking_PL`            | Winst-en-verliesrekening van één boeking en uitsplitsing per service                                  |
| Analyse            | `Container_Analysis`    | Directe kosten op containerniveau en toegekende gedeelde kosten                                |
| Analyse            | `Service_Profitability` | Winstgevendheid per service over boekingen heen                                           |
| Directie-uitvoer   | `Executive_Dashboard`   | Mondiale KPI's, winstgevendheidsrangschikking en waarschuwingen over datagezondheid                    |

De kernstroom is:

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

De bronarchitectuur benoemt drie belangrijke multi-hop opzoeksketens: een keten van valuta/financiële behandeling met vier hops, een keten van gedeelde kosten/containerboring met vier hops, en een keten van serviceclassificatie met drie hops. 

De kritische ontwerpregel is dat **berekeningswaarden en diagnostische toestanden gescheiden blijven**. `USD Equivalent` blijft numeriek, terwijl `Data Health Status` fouten draagt zoals `ERR: UNKNOWN_CURRENCY`. Dit behoudt `SUMIFS`-compatibiliteit en voorkomt tegelijkertijd dat kapotte transacties de winst-en-verliesengine binnenkomen. 

### Drie valstrikken die zelfs ervaren transportexploitanten te pakken nemen

#### Valstrik 1 — Een ontbrekende wisselkoers als geldig bedrag behandelen

**1. Beslissing:** Een boeking lijkt een bepaalde kost en marge te hebben.

**2. Verborgen gebrek:** Een leverancierstransactie is uitgedrukt in een valuta die niet is geconfigureerd in de referentietabel van wisselkoersen.

**3. Impact van de beslissing:** Als de ontbrekende koers onjuist als `1.0` wordt behandeld, kan een vreemd bedrag als `50,000` veranderen in `$50,000 USD`, waardoor het boekingsresultaat radicaal wordt vervormd.

**4. Waarom het fout is:** Een ontbrekende wisselkoers is een falen van datagezondheid, geen economische wisselkoers.

**5. Juiste aanpak:** Geef een neutrale numerieke waarde van `0` terug voor het berekeningsveld en rapporteer `ERR: UNKNOWN_CURRENCY` afzonderlijk.

**6. Gecorrigeerde beslissing:** De boeking wordt gemarkeerd voor aanvulling van data, in plaats van een valse winst of verlies toegewezen te krijgen.

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
<summary>Formulelogica</summary>

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

De belangrijke regel is: **wijs een onbekende valuta nooit standaard 1.0 toe**. 

</details>

#### Valstrik 2 — De winst-en-verliesrekening van een boeking lezen voordat datagezondheid is gecontroleerd

**1. Beslissing:** Een boeking met omzet van `$8,500` en kosten van omzet van `$5,200` wordt beschouwd als een winst van `$3,300`.

**2. Verborgen gebrek:** Een of meer brontransacties hebben ongeldige boekings- of servicekoppelingen, of een onopgeloste valuta.

**3. Impact van de beslissing:** De schijnbare marge kan worden overschat omdat een kostenregel stilzwijgend niet in de aggregatie is gekomen.

**4. Waarom het fout is:** Een wiskundig correct `SUMIFS`-resultaat kan economisch fout zijn als de bronregels onvolledig zijn.

**5. Juiste aanpak:** De engine aggregeert alleen transacties met `Data Health Status = "OK"` en rapporteert het aantal ongeldige regels afzonderlijk.

**6. Gecorrigeerde beslissing:** De boeking wordt behandeld als **voorlopig** tot de data-uitzonderingen zijn opgelost.

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
<summary>Formulelogica</summary>

```excel
rev =
SUMIFS(
  Raw_Transactions!O2:O10000,
  Raw_Transactions!B2:B10000,bk,
  Raw_Transactions!N2:N10000,"Revenue",
  Raw_Transactions!P2:P10000,"OK"
)
```

Hetzelfde gezondheidsfilter wordt toegepast op kosten van omzet, bankkosten en deposito's. 

</details>

#### Valstrik 3 — Gedeelde kost op boekingniveau direct aan elke container toekennen

**1. Beslissing:** Een boeking met twee containers heeft een winstgevendheidsoverzicht op containerniveau nodig.

**2. Verborgen gebrek:** Een kostenregel op boekingniveau behoort tot de zending als geheel en niet tot een specifieke container.

**3. Impact van de beslissing:** De volledige gedeelde kost aan beide containers toekennen verdubbelt de schijnbare kost.

**4. Waarom het fout is:** Het economische eigendom van de kost ligt op boekingniveau, terwijl de analyse een gecontroleerde toekenningsregel vereist.

**5. Juiste aanpak:** Gebruik het geconfigureerde beleid `EQUAL_SHARE` en deel de gedeelde kosten van omzet door het aantal containers van de boeking.

**6. Gecorrigeerde beslissing:** Elke container ontvangt zijn directe kosten plus zijn toegekende aandeel in de gemeenschappelijke kost, waarbij het totaal op boekingniveau behouden blijft.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

Het werkboek scheidt directe containerkosten expliciet van gedeelde kosten op boekingniveau en gebruikt een veilige noemer op basis van het aantal containers. 

<details>
<summary>Formulelogica</summary>

```excel
alloc_cogs =
IF(
  alloc_policy="EQUAL_SHARE",
  direct_cogs + (shared_cogs / cntr_count),
  direct_cogs
)
```

`Setup_Params!B6` bepaalt of de gedeelde kost wordt toegekend met `EQUAL_SHARE` of ontoedeeld blijft met `NO_ALLOCATE`. 

</details>

### Voorbeeldscenario

Beschouw een boeking in het goederenvervoer met de volgende geldige transacties:

| Post                      | Type     | Oorspronkelijk bedrag | Valuta | USD-equivalent |
| ------------------------- | -------- | -------------: | -------- | -------------: |
| Klantfactuur          | Revenue  |           8,500 | USD      |         $8,500 |
| Leverancierskost oceaanvervoer | COGS     |           3,000 | USD      |         $3,000 |
| Inspectie bij herkomst         | COGS     |             900 | USD      |           $900 |
| Ladingverzekering           | Revenue  |             400 | USD      |           $400 |
| Bankkosten               | Bank Fee |              75 | USD      |            $75 |
| Terugvorderbaar deposito       | Deposit  |             500 | USD      |           $500 |

De geldige winst-en-verliesrekening is:

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

Het terugvorderbare deposito van `$500` wordt apart gevolgd, in plaats van te worden behandeld als bedrijfsomzet of kosten van omzet.

Stel nu dat één aanvullende leverancierstransactie wordt ingevoerd in een niet-geconfigureerde valuta. Het systeem voegt de transactie **niet** stilzwijgend toe aan de kosten van omzet. De toegepaste wisselkoers wordt `0`, de USD-berekening blijft numeriek, en het diagnostiekveld rapporteert `ERR: UNKNOWN_CURRENCY`. De boeking ontvangt een gezondheidswaarschuwing, in plaats van als schoon te worden gepresenteerd.

De operationele aanbeveling verandert dienovereenkomstig:

> **Gebruik de marge van 55,34% niet als eindcijfer voor winstgevendheid tot de onopgeloste transactie is gecorrigeerd.**

Dit is het centrale onderscheid tussen een winstgevendheidsrekenmachine en een gecontroleerde kostentoekeningsworkflow: het resultaat gaat vergezeld van bewijs over de vraag of de onderliggende data volledig genoeg zijn om te vertrouwen.

### Formulereferentie

<details>
<summary>Booking Master — Aantal containers</summary>

**Doel:** Bepaal het aantal containers dat aan elke boeking is gekoppeld en voorkom fouten door deling door nul.

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

Als er nog geen container is ingevoerd, valt de noemer terug op `1`. Dit is een rekensafeguard, terwijl de ontbrekende-containervoorwaarde operationeel toch als een datakwaliteitsprobleem moet worden behandeld. 

</details>

<details>
<summary>Raw Transactions — Toegepaste wisselkoers</summary>

**Doel:** Geef voorrang aan een handmatige wisselkoers en haal anders de geconfigureerde valutakoers op.

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

Een onbekende valuta levert `0`, niet `1.0`. 

</details>

<details>
<summary>Raw Transactions — Financiële behandeling</summary>

**Doel:** Koppel operationele transactietypen aan financiële categorieën.

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

Het bronontwerp gebruikt `COGS` als conservatieve terugval voor een niet-herkend transactietype, wat het risico verkleint de winst te overschatten. 

</details>

<details>
<summary>Raw Transactions — USD-equivalent</summary>

**Doel:** Zet elk oorspronkelijk transactiebedrag om in de USD-basisvaluta van het werkboek met behoud van een numeriek resultaat.

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

Deze kolom numeriek houden is belangrijk omdat stroomafwaartse `SUMIFS`-berekeningen nooit diagnosetekst zoals `"INVALID"` in plaats van een getal zouden mogen ontvangen. 

</details>

<details>
<summary>Raw Transactions — Status datagezondheid</summary>

**Doel:** Valideer boekings-, service- en wisselkoerskoppeling onafhankelijk van de financiële berekeningskolommen.

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

De diagnostieklaag is opzettelijk gescheiden van de numerieke berekeningsvelden. 

</details>

<details>
<summary>Job Costing Engine — Winst-en-verliesrekening op boekingniveau</summary>

**Doel:** Genereer een dynamische lijst van boekingen en aggregeer alleen gezonde transacties.

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

De essentiële controle is het herhaalde criterium `Data Health Status = "OK"`. 

</details>

### Validatieregels

| Veld / Voorwaarde      | Regel                                                            | Foutgedrag                                                                     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Booking ID`           | Moet bestaan in `Booking_Master`                                  | `ERR: INVALID_BOOKING`; transactie uitgesloten van winst-en-verliesrekening                              |
| `Service Code`         | Moet bestaan in `Service_Master`                                  | `ERR: INVALID_SERVICE`; transactie uitgesloten van winst-en-verliesrekening                              |
| `Currency`             | Moet een geldige geconfigureerde wisselkoers of positieve handmatige wisselkoers hebben | Toegepaste koers wordt `0`; diagnostiek rapporteert `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Positieve waarde overschrijft de referentiewisselkoers                  | Ongeldige/niet-positieve waarde valt terug op geconfigureerde koers                             |
| `Transaction Type`     | Moet overeenkomen met de `Setup_Params`-toewijzing                             | Onbekend type valt conservatief terug op `COGS`                                   |
| `USD Equivalent`       | Moet numeriek blijven                                             | Diagnosetekst mag nooit in het numerieke aggregatieveld worden geschreven           |
| `Data Health Status`   | Moet `OK` zijn voor financiële aggregatie                          | Niet-OK-regels zijn uitgesloten van de winst-en-verliesrekening van de boeking                                      |
| `Container Count`      | Mag niet nul worden bij gebruik als toekenningsnoemer        | Valt terug op `1` om `#DIV/0!` te voorkomen                                             |
| Toerekening gedeelde kosten | Gecontroleerd door `Setup_Params!B6`                                 | `EQUAL_SHARE` kent toe op basis van aantal containers; `NO_ALLOCATE` laat alleen directe kosten |
| Winstgevendheid boeking  | Omzet van nul mag geen delingsfout produceren               | Marge levert `0`                                                                 |
| Gezondheid directiedata  | Elke niet-lege status anders dan `OK` wordt geteld                 | Dashboard toont een waarschuwing in plaats van een onvoorwaardelijk schone toestand                      |

De bron-validatie bevestigt de dekking van de kern invoer van boeking, container, service en transactie, plus de uitvoer van USD-equivalent, nettowinst, marge en toegekende kost. Ze verifieert ook specifiek de scheiding tussen diagnosetekst en numerieke `SUMIFS`-velden. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Kruisvalidatie en paraatheid voor implementatie

De werkboekarchitectuur is ontworpen om de analytische keten te valideren **voordat** het management op de resulterende winst-en-verliesrekening vertrouwt.

De bronimplementatie controleert expliciet de toewijzingsketen van transactietypen, de opzoeksketen van wisselkoersen, de koppeling met Service Master, de toekeningsketen van gedeelde kosten en de compatibiliteit tussen diagnosetekst en numerische aggregatievelden. 

| Validatiedimensie         | Wat wordt gecontroleerd                                                                  | Verwachte uitkomst                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Boekingskoppeling**          | Elke `Booking ID` van een transactie bestaat in `Booking_Master`                        | Ongeldige regels krijgen een fouttoestand                      |
| **Servicekoppeling**          | Elke `Service Code` van een transactie bestaat in `Service_Master`                      | Ongeldige regels zijn uitgesloten van de winst-en-verliesrekening                       |
| **Wisselkoersdekking**              | Elke transactie heeft een geldige handmatige wisselkoers of een geconfigureerde referentiekoers | Onbekende valuta triggeren een gezondheidswaarschuwing              |
| **Financiële classificatie** | Transactietype wordt toegewezen aan Revenue / COGS / Bank Fee / Deposit                     | Onbekende typen gebruiken de conservatieve COGS-terugval         |
| **Numerieke aggregatie**      | `USD Equivalent` blijft onder alle omstandigheden numeriek                                    | `SUMIFS` stuit niet op diagnosetekst              |
| **Door gezondheid gefilterde aggregatie** | De winst-en-verliesrekening omvat alleen `Data Health Status = "OK"`                                    | Kapotte bronregels kunnen niet stilzwijgend de gerapporteerde winst binnenkomen |
| **Containertoekenning**     | Gedeelde kosten op boekingniveau gebruiken het geconfigureerde toekenningsbeleid                  | Geen herhaalde toekenning van de volledige kost over containers heen       |
| **Nul-omzetbescherming**  | De margesberekening gaat om met Revenue = 0                                    | Geen `#DIV/0!`                                             |
| **Directiemonitoring**     | Mondiale transactiefouten worden apart geteld                                 | Dashboard signaleert onopgeloste problemen in brondata          |

De kruisvalidatiematrix van de implementatie stelt dat de kern invoervelden — boeking, container, service en transactiedata — en de belangrijkste uitvoer — USD-equivalent, nettowinst, marge en toegekende kost — door de architectuur zijn gedekt. 

### Standaard operationele procedure

Het beoogde bedrijfsmodel is opzettelijk simpel:

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

#### 1. Stamdata vastleggen

Leg de boeking aan in `Booking_Master`.

Als containers relevant zijn, leg dan hun boeking-naar-container-relaties aan in `Container_Master`.

Onderhoud de gestandaardiseerde servicecatalogus in `Service_Master`.

Begin de financiële analyse niet door vrije servicenamen of boeking-identifiers direct in rapportagebladen te typen. De stamtabellen zijn de referentielaag voor stroomafwaartse opzoeksketens. 

#### 2. Financiële transacties vastleggen

Voer omzet, leverancierskosten, bankkosten, deposito's en andere relevante financiële activiteit in `Raw_Transactions` in.

Elke transactie moet het passende van het volgende bevatten:

* `Booking ID`
* `Container ID`, indien van toepassing
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, wanneer een transactiespecifieke koers vereist is

De transactietabel is de enige bron die de gedetailleerde records van financiële gebeurtenissen zou moeten ontvangen. De berekeningsengine mag niet handmatig worden bewerkt. 

#### 3. Datagezondheid controleren

Controleer `Raw_Transactions[Data Health Status]`.

Een schone regel levert:

```text
OK
```

Uitzonderingen benoemen de gebroken relatie, zoals:

```text
ERR: INVALID_BOOKING
ERR: INVALID_SERVICE
ERR: UNKNOWN_CURRENCY
```

De implementatie behandelt dit opzettelijk als een aparte controlelaag. Een transactie kan daarom numeriek veilig blijven en tegelijkertijd zichtbaar uit het financiële resultaat worden uitgesloten. 

#### 4. Winstgevendheid beoordelen

Gebruik:

* `Job_Costing_Engine` voor winstgevendheid op boekingniveau.
* `Booking_PL` voor de uitsplitsing per service van één boeking.
* `Container_Analysis` wanneer de boeking meerdere containers bevat.
* `Service_Profitability` voor service-economie over boekingen heen.
* `Executive_Dashboard` voor monitoring op directieniveau.

Dit creëert een inzoompad van **mondiale winstgevendheid → boeking → service → container → transactie**, in plaats van elke vraag uit één samenvattend dashboard te laten beantwoorden.

### Regels voor data-onderhoud

De architectuur steunt op gecontroleerde stamdata omdat Excel niet dezelfde harde handhaving van vreemde sleutels biedt als een database- of ERP-platform.

De belangrijkste onderhoudsregels zijn:

1. **Overschrijf geen door formules gegenereerde velden niet.**
2. **Typ servicenamen niet handmatig in waar een servicecode moet worden gebruikt.**
3. **Voer geen nieuwe valuta in zonder eerst haar wisselkoers aan `Setup_Params` toe te voegen.**
4. **Gebruik `1.0` niet als terugval voor een ontbrekende wisselkoers.**
5. **Schrijf geen fouttekst in numerieke aggregatiekolommen.**
6. **Bewerk de uitvoer van `Job_Costing_Engine` niet handmatig.**
7. **Los niet-OK-transactieregels op voordat u de marge van een boeking als eindgulig behandelt.**
8. **Houd het beleid voor toerekening van gedeelde kosten gecentraliseerd in `Setup_Params`.**

Het bronontwerp verbiedt specifiek het hard coderen van globale parameters in formules en centraliseert basisvaluta, wisselkoersen, transactietoewijzingen en toekenningsbeleid in `Setup_Params`. 

### Problemen oplossen

#### `⚠️ X TXN DATA ERRORS` verschijnt op het dashboard

**Mogelijke oorzaken:**

* De valuta ontbreekt in de wisselkoerstabel.
* `Booking ID` bestaat niet in `Booking_Master`.
* `Service Code` bestaat niet in `Service_Master`.
* Een brontransactie bevat een ongeldige koppeling.

**Oplossing:**

Filter de kolom `Data Health Status` in `Raw_Transactions` om waarden anders dan `OK` te tonen.

Los daarna elk onderliggend probleem in de brondata op, in plaats van de uitvoer van de winst-en-verliesrekening handmatig te wijzigen.

Het Executive Dashboard is ontworpen om deze toestand via een mondiale gezondheidskaart bloot te leggen:

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



#### Dynamische matrixformules geven `#SPILL!` terug

Een overloopformule vereist dat het doelgebied vrij blijft.

Controleer:

* cellen direct onder de formule;
* cellen rechts van de formule;
* handmatig ingevoerde waarden die het beoogde overloopbereik bezetten;
* resterende opmaak of gekopieerde inhoud die een obstructie heeft veroorzaakt.

Maak de hinderende cellen leeg en laat de dynamische matrix opnieuw expanderen.

#### Winstgevendheid verschijnt onverwacht hoog

Wijzig de winstformule niet onmiddellijk.

Controleer eerst:

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

Een verdacht hoge marge kan worden veroorzaakt door een kostentransactie die in de koppelingsketen is mislukt en daarom uit de berekening is uitgesloten.

Dit is precies waarom het werkboek onderscheid maakt tussen **"nul als numerieke berekeningstoestand"** en **"nul als economische conclusie."** Een ontbrekende wisselkoers kan `$0.00` in een numeriek veld produceren en tegelijkertijd `ERR: UNKNOWN_CURRENCY` in het diagnostiekveld produceren. 

#### Winstgevendheid van de container verschijnt over- of onderschat

Controleer drie dingen in volgorde:

1. Is de juiste `Booking ID` geselecteerd?
2. Is de juiste `Container ID` geselecteerd?
3. Gebruikt `Setup_Params!B6` het beoogde toekenningsbeleid?

Onder `EQUAL_SHARE` worden gedeelde kosten van omzet op boekingniveau gedeeld door het aantal containers van de boeking voordat ze aan directe containerkosten worden toegevoegd.

Onder `NO_ALLOCATE` worden gedeelde kosten op boekingniveau niet aan individuele containers toegekend.

Het onderscheid is van belang omdat het toekennen van de volledige gedeelde kost op boekingniveau aan elke container dezelfde economische kost zou dupliceren. 

### Grenzen van de implementatie

Dit werkboek is opzettelijk ontworpen als een **lichte analytische controlelaag**, niet als vervanging van een boekhoudplatform of transportmanagementsysteem.

Het is het sterkst wanneer:

* operationele en financiële data al in spreadsheets of exports bestaan;
* de belangrijkte analyse-eenheid een boeking of zending is;
* het management winstgevendheid op opdrachtniveau nodig heeft;
* services en heffingen over boekingen heen moeten worden vergeleken;
* meerdere valuta een consistente rapportagebasis nodig hebben;
* gedeelde kosten een expliciete toekenningsregel vereisen;
* gebruikers transparante formules nodig hebben in plaats van ondoorzichtige automatisering.

Het is niet ontworpen om te bieden:

* transactionele concurrency voor meerdere gebruikers;
* machtigingen op ERP-niveau;
* geautomatiseerde bankverzoening;
* geautomatiseerde verwerking van vervoerdersfacturen;
* handhaving van vreemde sleutels op databaseniveau;
* orchestration van bedrijfsworkflows.

De waarde van het werkboek ligt daarom niet in het aantal bladen dat het bevat. Het is de gecontroleerde analytische keten die **boeking → transactie → classificatie → valutakoersing → gevalideerde aggregatie → winstgevendheid → inzoomen** verbindt.

### Analytisch controleprincipe

De belangrijkste implementatieregel kan als volgt worden samengevat:

```text
Never let a broken data relationship
look like a valid financial result.
```

Een conventioneel spreadsheet zou kunnen toestaan:

```text
Missing FX
    ↓
0 USD
    ↓
SUMIFS
    ↓
Higher Profit
```

Dit werkboek maakt de toestand daarentegen expliciet:

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

Dat onderscheid is de fundering van het betrouwbaarheidsmodel van de Job Costing Engine. De architectuur erkent expliciet dat `SUMIFS` numerieke waarden veilig kan aggregeren terwijl tekst stilzwijgend wordt genegeerd — diagnostische toestanden mogen daarom nooit direct in numerieke berekeningskolommen worden ingebed. 

### Aanbevolen implementatievolgorde

Voor een nieuwe werkboekimplementatie is de veiligste volgorde:

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

Het resultaat is een herhaalbare workflow en geen eenmalige spreadsheetberekening: leg de referentiedata eenmaal vast, voeg nieuwe operationele transacties toe, los uitzonderingen op, en laat de berekenings- en analyselagen actualiseren vanuit hetzelfde onderliggende datamodel. 

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Slotopmerkingen over de architectuur

Het werkboek is opzettelijk gebouwd rond een **enkele winstgevendheidsengine op boekingniveau**, in plaats van om een verzameling losse rekenmachines.

De analytische hiërarchie is:

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

Deze structuur houdt de boeking als centrale economische eenheid en staat gebruikers tegelijkertijd toe om naar beneden in services en containers of naar boven in winstgevendheid over boekingen heen in te zoomen. 

De implementatie erkent ook expliciet drie multi-hop opzoeksketens:

1. **Transactie → Financiële behandeling → Wisselkoers → USD-equivalent → Winst-en-verliesrekening van de boeking**
2. **Boeking → Aantal containers → Beleid gedeelde kosten → Toerekening gedeelde kosten → Containeranalyse**
3. **Servicecode → Service Master → Servicecategorie → Winstgevendheid per service**

Deze ketens worden gevalideerd voordat de analytische uitvoer als productierijp wordt beschouwd. 

### Waarvan de engine beschermt

Het centrale ontwerpprincipe is niet louter automatisering. Het is **voorkomen dat een gebroken invoerrelatie zich voordoet als een geldige financiële conclusie**.

| Falende                                              | Beschermingsmechanisme                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Onbekende valuta                                     | Koers valt terug op `0`, terwijl een aparte diagnostische toestand de ontbrekende koers meldt |
| Onbekend transactietype                                     | Conservatieve `COGS`-terugval voorkomt accidentele winstinflatie              |
| Ongeldige boeking                                      | `ERR: INVALID_BOOKING`                                                         |
| Ongeldige servicecode                                      | `ERR: INVALID_SERVICE`                                                         |
| Gebroken transactieketen                             | Niet-`OK`-regels zijn uitgesloten van aggregatie van de winst-en-verliesrekening                                |
| Gedeelde kost gedupliceerd over containers             | Expliciet toekenningsbeleid en noemer op basis van aantal containers                     |
| Nul-omzet                                         | Margesberekening levert `0` in plaats van `#DIV/0!`                            |
| Diagnosetekst die financiële berekeningen vervuilt | Numerieke berekeningskolommen en diagnostiekkolommen blijven gescheiden             |

De terugvalmatrix van de implementatie wijst specifiek een `1.0`-wisselkoersterugval af omdat die een niet-herkend bedrag in vreemde valuta in een ongeloofwaardig groot USD-bedrag zou kunnen veranderen. 

### Aanbevolen gebruikspatroon

Voor doorlopende operaties is het werkboek bedoeld om zich te gedragen als een **verversbaar bedrijfsmodel**, niet als een eenmalig rapport.

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

Dit maakt het werkboek nuttig voor terugkerende vragen zoals:

* Welke boekingen zijn werkelijk winstgevend?
* Welke services produceren de sterkste marges?
* Welke zendingskosten veroorzaken een onverwacht verlies?
* Welke kosten op boekingniveau moeten aan containers worden toegekend?
* Zijn de gerapporteerde marges betrouwbaar, of verbergen onopgeloste problemen in brondata kosten?
* Waar moeten prijsstelling, leveranciersonderhandeling of operationele review zich als volgende op richten?

De bron-SOP volgt dezelfde volgorde: leg stamdata vast, registreer financiële transacties, inspecteer `Data Health Status`, en gebruik daarna de winstgevendheidsdashboards voor beoordeling. 

### Slotontwerpprincipe

Het werkboek probeert de financiële analyse niet eenvoudiger te laten lijken door zijn onzekerheid te verbergen.

Het maakt de onzekerheid daarentegen zichtbaar.

Een boeking met een berekende marge wordt niet automatisch als een betrouwbare boeking behandeld.

Een **schone boeking** betekent:

```text
Valid Booking
+ Valid Service
+ Valid Currency / FX
+ Valid Transaction Classification
+ Healthy Transaction Chain
= Profitability Result That Can Be Reviewed
```

Dat onderscheid is de kern van de implementatie.

</details>

## Andere instrumenten in deze serie

Een verzameling lichtgewicht Excel-instrumenten voor beslissingsondersteuning die operationele controle, winstgevendheidsanalyse, voorraadverzoening, personeelsplanning en andere bedrijfsworkflows dekken.

* **Voorraad- en verzoeningsinstrumenten** — transactiegestuurde voorraad- en variantieanalyse.
* **Kosten- en winstgevendheidsinstrumenten** — operationele kostenberekening en unit-economiemodellen.
* **Personeelsplaningsinstrumenten** — loonadministratie, capaciteit en jaarlijkse personeelsplanning.

## Licentie

Dit project wordt uitgebracht onder de **Apache License 2.0**.

U mag het werk gebruiken, wijzigen, distribueren en erop bouwen in overeenstemming met de voorwaarden van de Apache License 2.0.
