[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-sjabloon voor kostentoerekening bij expéditeurs & Rekenmachine voor winstgevendheid van zendingen (winst-en-verliesrekening op boekingniveau)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/f89c1a0f-f576-43af-b26a-02bae4a47348" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Financial%20Spreadsheet%20Model-2251FF.svg)](#)

**Een auditklare Excel-sjabloon voor kostentoerekening bij expéditeurs en een interactieve winst-en-verliesrekenmachine voor zendingen — gebouwd om brutomarge op boekingniveau, FX-omrekeningen tussen meerdere valuta, kostentoerekening van FCL/LCL-containers en winstgevendheid van vrachtkosten te volgen. Reken facturen van klanten (AR), rekeningen van vervoerders (AP), drayage, douaneafhandeling en bankkosten voor overmakingen af in één gestandaardiseerd logistiek financieel model — gratis in uw browser of als ontgrendeld Excel-spreadsheet.**

**Geen registratie. Geen installatie. Gratis te testen in uw browser.**

Gebruik de interactieve webapplicatie om de workflow van kostentoerekening direct te inspecteren, of download het volledige Excel-spreadsheetsjabloon om uw eigen boekhoudkundige exports te importeren — gedekt door een geld-terug-garantie van 30 dagen zonder vragen.

> 🌐 **Gratis web-app starten** → [Interactieve rekenmachine voor kostentoerekening en winst-en-verliesrekening van zendingen voor expéditeurs](https://hyvoid.github.io/freight-forwarder-job-costing-excel/)  
> 📥 **Het volledige Excel-model ophalen** → [Download het bewerkbare Excel-sjabloon voor kostentoerekening en winstgevendheid van boekingen voor expéditeurs](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)  
>
> *Zowel de browserversie als het downloadbare Excel-werkboek delen exact dezelfde relationele boekhoudkundige architectuur.*

---

## Wat het u helpt volgen: afbeelding van pijnpunten in het goederenvervoer op oplossingen

In plaats van te wachten op geaggregeerde maandafsluitingsrapporten van de boekhouding, volgt en lost dit **logistieke spreadsheet voor kostentoerekening** precies de operationele blinde vlekken op die **margeverlies** veroorzaken in oceaan-, lucht- en multimodaal goederenvervoer:

| Te volgen doelmetriek / pijnpunt | De veelvoorkomende blinde vlek in de vrachtboekhouding | Hoe dit model voor kostentoerekening het oplost en volgt |
| :--- | :--- | :--- |
| **Winst-en-verliesrekening en brutomarge op boekingniveau** | Winst is alleen zichtbaar op maandelijks bedrijfsniveau, waardoor verlieslatende zendingen en te laag geprijsde handelsroutes verborgen blijven. | Volgt **AR-omzet vs. AP-kosten van omzet vs. bankkosten voor overmakingen** per individuele boeking-ID (B/L- of AWB-niveau) om **nettowinst en marge %** in realtime bloot te leggen. |
| **Winstgevendheid van heffingscodes en nevenkosten** | De totale omzet van een zending kennen zonder te weten of oceaanvervoer, drayage, douaneafhandeling of demurrage daadwerkelijk geld hebben opgebracht. | Volgt de margebijdrage over granulaire **vrachtdienstcodes** (oceaanvervoer, THC, inspectie bij herkomst, ladingverzekering, documentatie, coördinatie). |
| **Toerekening van gedeelde kosten bij meerdere containers (FCL)** | Wanneer één master-B/L meerdere containers omvat, worden vaste vergoedingen op boekingniveau gedupliceerd of genegeerd tijdens de analyse op containerniveau. | Scheidt **directe containerkosten** van **gedeelde kosten op boekingniveau** en kent gedeelde vergoedingen automatisch toe over containers via een gecontroleerd beleid. |
| **Winst/verlies en normalisatie bij meerdere valuta (FX)** | Oceaanvervoerders betalen in USD, agenten bij herkomst in EUR/CNY en klanten factureren in lokale valuta — met inconsistente handmatige wisselkoersen. | Zet alle regels met gemengde valuta (AR/AP) om naar een **gestandaardiseerde USD-basis** via een gecentraliseerde FX-opzoektabel met geautomatiseerde uitzonderingsmarkeringen voor ontbrekende koersen. |
| **Niet-gekoppelde leverancierskosten en controle op datagezondheid** | Typfouten in boeking-IDs, ongeldige heffingscodes of ontbrekende FX-koersen laten leverancierskosten stilzwijgend naar $0 vallen, waardoor kunstmatig opgeblazen winstmarges ontstaan. | Voert een geautomatiseerde **diagnose-engine voor datagezondheid** (`ERR: UNKNOWN_CURRENCY`, `ERR: INVALID_BOOKING`) uit die defecte records in quarantaine plaatst voordat ze uw winst-en-verliesrekening vervuilen. |

---

## Zo voert u een controle van winstgevendheid en kostentoerekening van zendingen uit (workflow voor snelstart)

Verander rommelige ERP-/boekhoudkundige exports, facturen van vervoerders en operationele spreadsheets in vier gestructureerde stappen in een schone **winst-en-verliesrekening op boekingniveau**:

### Stap 1: Basisvaluta, FX-koersen en toekenningsregels configureren
Open het controleblad `Setup_Params` om uw basislijn voor vrachtboekhouding vast te leggen:
- Leg uw **basisrapportagevaluta** (bijv. USD) vast en vul de referentie-**wisselkoersen (FX)** in.
- Koppel uw **transactietypes** (klantomzet, directe kosten van omzet, bank-/overschrijvingskosten, klantdeposito's).
- Selecteer uw **beleid voor toerekening van gedeelde kosten** voor FCL-zendingen met meerdere containers.

*Actie:* Inspecteer de vooraf geconfigureerde parameterstructuur direct in de [gratis browserdemo voor kostentoerekening](https://hyvoid.github.io/freight-forwarder-job-costing-excel/).

---

### Stap 2: Stamrecords van boekingen en ruwe AR/AP-transacties importeren
Vul uw stamlijsten (boekingen, containers en catalogus van vrachtdiensten) en plak of laad dan uw financiële regels in `Raw_Transactions`:
- **Compatibele gegevensbronnen:** exports van QuickBooks/Xero, TMS-factureringslogboeken, facturen van oceaanvervoerders/NVOCC's, afschriften van douanemakelaars en handmatige operationele trackers.
- **Geen handmatige herbouw van VLOOKUP vereist** — sleep ruwe regels eenvoudig in de gestandaardiseerde transactietabel.

---

### Stap 3: Uitzonderingen op datagezondheid controleren en de geautomatiseerde winst-en-verliesrekening van de zending beoordelen
Zodra transacties zijn geladen, voert de engine voor kostentoerekening automatisch uit:
- Normaliseert vreemde valuta naar uw basisrapportagevaluta.
- Markeert defecte koppelingen in stamdata (`Data Health Status`), zodat niet-gekoppelde leveranciersrekeningen nooit als nul-kostenposten verborgen blijven.
- Aggregeert geverifieerde regels tot **winst-en-verliesrekening op boekingniveau**, **margeuitsplitsing per dienstlijn** en **eenheidseconomie op containerniveau**.

---

### Stap 4: Periodiek verversen en naar Excel exporteren voor doorlopende operaties
Wanneer nieuwe schijfvertrekken, leveranciersfacturen of kosten voor opslag/demurrage binnenkomen, hang ze dan aan het transactielogboek om uw zendingsmarges over factureringscycli heen actueel te houden.

> 💡 **Klaar om dit op uw eigen live-zendingsgegevens en boekhoudkundige exports uit te voeren?**  
> De browserversie is gebouwd voor directe verificatie van de workflow en testen in één sessie. Om uw eigen CSV/Excel-boekhoudkundige dumps te importeren, catalogi van vrachtkosten aan te passen, maandelijkse afsluitingsmomentopnames op te slaan en elke formule offline te controleren:  
> 👉 **[Download het ontgrendelde Excel-sjabloon voor kostentoerekening bij expéditeurs](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)** en maak er uw herhaalbare maandelijkse engine voor winstgevendheid van zendingen van.

---

## De bedrijfslogica en methodiek

Standaard boekhoudkundige software (zoals QuickBooks of Xero) is gebouwd rond **grootboekschema en kalendermaanden**, terwijl expéditeurs werken rond **boekingen, cognossementen (B/L) en containers** waarvan omzet en leveranciersrekeningen vaak meerdere maanden en valuta overspannen. 

Om de mismatch tussen financiële boekhouding en operationele logistiek op te lossen, implementeert deze toolkit een **relationele methodiek voor kostentoerekening met 4 pijlers**:

1. **Relationele modellering van de entiteitenhiërarchie (`Booking → Container → Service Line`):**  
   In vrachtoperaties vallen kosten aan op verschillende structurele niveaus. Een vergoeding voor douaneafhandeling of een documentatievergoeding voor het cognossement geldt één keer per **boeking**, terminal handling charges (THC), drayage of chassis-split-vergoedingen gelden per **container (TEU/FEU)**. Het platdrukken hiervan in één enkele tabel veroorzaakt ernstige dubbele telling. Deze engine handhaaft een strenge relationele hiërarchie: directe containerkosten binden aan `Container_ID`, terwijl zendingsbrede gemeenschappelijke kosten binden aan `Booking_ID` en zich dynamisch verdelen via een deterministische toekenningsformule:
   $$\text{Container Allocated Cost} = \text{Direct Container Cost} + \frac{\text{Booking-Level Shared Costs}}{\text{Total Active Containers in Booking}}$$
2. **Ontkoppelde diagnostische toestand vs. numerieke aggregatie (architectuur zonder stille nul-fouten):**  
   In standaard Excel-spreadsheets negeert een verkeerd gespelde boeking-ID in een `SUMIFS`-formule stilzwijgend een factuur van een oceaanvervoerder van $2.000 — waardoor een verlieslatende zending wild winstgevend lijkt. Omgekeerd breekt een `#N/A`-fout in een `VLOOKUP` het hele winst-en-verliesdashboard. Dit model gebruikt een **dual-track evaluatiemethode**: elke transactieregel passeert een poort voor referentiële integriteit (`Data_Health_Status`) die boeking-IDs, dienstcodes en valutasleutels valideert vóór de wiskundige uitvoering. Ongeldige regels geven expliciete diagnostieke tekenreeksen uit (`ERR: UNKNOWN_CURRENCY`, `ERR: ORPHAN_BOOKING`), terwijl ze een veilige `0` aan de aggregatie-engine doorgeven, waardoor gegarandeerd is dat het dashboard nooit crasht terwijl analisten visueel worden gewaarschuwd voor onvolledige margegegevens.
3. **Gecentraliseerde triangulatie voor meerdere valuta:**  
   Grensoverschrijdend goederenvervoer betekent agenten bij herkomst betalen in CNY/EUR, oceaanvracht afrekenen in USD en tussenliggende bankkosten voor overmakingen absorberen. Het model normaliseert elke ruwe transactieregel op niveau van regelpost ($T_i \times \text{FX}_{\text{rate}}$) vóór de opwaartse aggregatie van de winst-en-verliesrekening, waardoor de rondingsvervormingen en koersdrift worden geëlimineerd die gebruikelijk zijn in handmatige samenvattingsomrekeningen.
4. **Scheiding van cashflow- en afboekingswinst-en-verliesrekening (deposito's vs. verdiende omzet):**  
   Expéditeurs incasseren regelmatig voorafbetaalde deposito's van klanten of voorschotten op douanerechten voordat een schip vertrekt. Het mengen van klantdeposito's met verdiende vrachtomzet vervormt de ware brutomarge. De engine voor transactieclassificatie isoleert expliciet **balansdeposito's** van **omzet, kosten van omzet en bankkosten in de winst-en-verliesrekening** en levert een nauwkeurige eenheidsmargeweergave samen met transparantie over de cashpositie.

---

## Waarom ik dit heb gebouwd: de gebroken analytische keten in het goederenvervoer repareren

Winstgevendheid in het goederenvervoer is veel moeilijker te zien dan het lijkt op een verkoopofferte.

Eén enkele oceaan- of luchtboeking kan vrachtkosten van klanten, inspectie bij herkomst, ladingverzekering, documentatievergoedingen, lokale drayage, oceaanvracht van de vervoerder, bankkosten voor overmakingen, klantdeposito's, 3+ valuta en meerdere containers omvatten — verspreid over uiteenlopende operationele trackers en boekhoudkundige exports.

Wanneer expéditeurs geld verliezen aan een zending, is de oorzaak zelden een slechte prijsintentie. **Het is een gebroken analytische keten:**
- Een zending lijkt een **winnaar met 38.8% brutomarge** omdat een drayage-factuur van een leverancier van $1,500 een typfout in de boekingsreferentie had en uit de `SUMIFS`-formule werd uitgesloten.
- Een vergoeding van een agent bij herkomst in vreemde valuta werd weggelaten omdat haar FX-koers niet was bijgewerkt in de opzoektabel.
- Gedeelde douane- en documentatiekosten op boekingniveau werden per ongeluk vermenigvuldigd over 5 containers — of volledig genegeerd — toen per-containertarieven aan de klant werden geprijsd.

Vertrouw bijvoorbeeld niet blindelings op een gebrekkige samenvatting zoals deze:

```text
Booking Revenue        $8,500
Reported COGS          $5,200
Apparent Net Profit    $3,300
Reported Margin         38.8%  <-- (Artificially inflated by missing vendor bill)
```

Deze engine voor kostentoerekening markeert direct dat de onderliggende transactiedataset een **niet-gekoppelde leverancierskost** of een **niet-geconfigureerde valuta (`ERR: UNKNOWN_CURRENCY`)** bevat. De boeking wordt zichtbaar in quarantaine geplaatst voor gegevensopruiming, in plaats van aan het management te worden gepresenteerd als een schone marge van 38.8%.

Het doel is niet nog een mooi ijdelheidsdashboard. Het is een **verdedigbaar financieel redeneerkader** dat garandeert dat uw winst-en-verliesrekening op boekingniveau wiskundig gezond is voordat u verkoopscommissies betaalt of prijskaarten van klanten vernieuwt.

---

## Ad-hoc boekhoudkundige spreadsheets vs. deze engine voor kostentoerekening in het goederenvervoer

| Evaluatiedimensie | Handmatige spreadsheets en generieke boekhouding (zonder deze tool) | Gestandaardiseerde engine voor kostentoerekening in het goederenvervoer (met deze tool) |
| --- | --- | --- |
| **Zichtbaarheid op zendingsniveau (B/L & AWB)** | Grootboek-software mengt alle maandelijkse facturen met elkaar, waardoor verborgen blijft welke specifieke zendingen, handelsroutes of klanten geld verliezen. | Genereert een directe **winst-en-verliesrekening boeking voor boeking** die bruto-omzet, directe kosten van omzet, bankkosten voor overmakingen, nettowinst en marge % uitsplitst. |
| **Afstemming bij meerdere valuta (FX)** | Operators rekenen EUR, CNY, GBP en USD handmatig om met ad-hoc-koersen, wat onverklaarbare margeverschillen bij de maandafsluiting veroorzaakt. | Handhaaft een **gecentraliseerde FX-koerstabel** die elke factuurregel omrekent naar één basisvaluta en een expliciete waarschuwing geeft als een valutakoers ontbreekt. |
| **Kostentoerekening bij meerdere FCL-containers** | Documentatievergoedingen, douaneafhandeling en boekingstoeslagen worden ofwel per container dubbel geteld of weggelaten uit de eenheidseconomie van containers. | Scheidt dynamisch **directe kosten van omzet per container** van **gedeelde boekingskosten** en verdeelt gedeelde vergoedingen gelijkmatig over het exacte aantal containers. |
| **Marge bij nevenkosten en dienstcodes** | Expéditeurs kennen de totale factuurwaarde maar kunnen niet zeggen of zij geld verliezen aan drayage, ladingverzekering, inspectie bij herkomst of THD/THC. | Aggregeert omzet vs. leverancierskost per **granulaire vrachtdienstcode** en onthult welke toegevoegde diensten winst vs. margeverlies genereren. |
| **Integriteit van stamdata en foutafhandeling** | Verkeerd gespelde boeking-IDs of defecte `VLOOKUP`-koppelingen laten leverancierskosten stilzwijgend naar nul vallen (wat winst opblazen) of breken het hele blad met `#N/A`-fouten. | Ingebouwde **diagnoselaag voor datagezondheid** isoleert ongeldige boeking-IDs, dienstcodes en FX-koersen en houdt numerieke aggregaties stabiel en auditklaar. |

---

## Voor wie dit bedoeld is: doel-logistiekrollen en operationele scenario's

Deze toolkit is ontworpen voor **kleine en middelgrote expéditeurs (OTI's / NVOCC's), douanemakelaars, 3PL-operators en logistieke financiële teams** die kostentoerekening van zendingen op ondernemingsniveau nodig hebben zonder $20,000+ te betalen voor een uitvoering van een zwaar TMS/ERP-systeem:

* **Eigenaars en directeuren van expéditeurs:** Gebruik dit als **tool voor controle van winstgevendheid van zendingen en verkoopscommissies op directieniveau** om ware nettomarges te verifiëren (na bankkosten en gedeelde kosten) voordat u jaarlijkse prijscontracten met verzenders ondertekent of verkoopscommissies uitbetaalt.
* **Logistieke financiële managers en vrachtboekhouders:** Gebruik dit als **maandelijks sjabloon voor afstemming van kostentoerekening** om de kloof te overbruggen tussen generieke boekhoudkundige software (QuickBooks, Xero, NetSuite) en operationele zendingsbestanden — en om niet-gefactureerde omzet of verweesde leveranciersrekeningen op te sporen voordat de boeken worden gesloten.
* **Analisten van vrachtprijzen en managers van handelsroutes:** Gebruik dit als **analyseprogramma voor eenheidseconomie van containers en marges op nevenkosten** om te zien of oceaanvervoer, luchtvracht, douaneafhandeling, ladingverzekering of drayage over land winstgevendheid over specifieke handelsroutes aandrijft of erodeert.
* **Operationele managers en dispatchers van goederenvervoer:** Gebruik dit als **rekenmachine voor kostentoerekening bij meerdere FCL/LCL-containers** bij het beheren van complexe projectcargo of boekingen met meerdere containers met gemengde valuta en gesplitste leveranciersfacturen.
* **Deeltijd-CFO's en supply chain-consultants:** Gebruik dit als **diagnosekader voor margeverlies dat direct klaar is voor gebruik** bij het auditen van vrachtportfolios van klanten of het opschonen van rommelige operationele spreadsheets.

*Let op: dit werkboek is **niet** bedoeld om een operationeel TMS (zoals CargoWise), een geautomatiseerd EDI-boekingsplatform of een wettelijk belastingboekhoudkundig systeem te vervangen. Het is de lichte **analytische uitvoeringslaag voor kostentoerekening** die uw operationele zendingsrecords verbindt met hun ware financiële uitkomst.*

---

## Veelgestelde vragen over kostentoerekening en margescenario's in het goederenvervoer

Als uw operatie in het goederenvervoer kampt met een van de volgende vragen over financiële afstemming, is dit model gestructureerd om ze standaard op te lossen:

* **Voorkomen van margeverlies bij zendingen:** *Hoe stem ik facturen van klanten (AR) af tegen vertraagde rekeningen van oceaanvervoerders, drayage en douanemakelaars (AP) op niveau van individuele boeking of cognossement (B/L)?*
* **Kostensplitsing bij meerdere FCL-containers:** *Hoe bereken ik kosten en winst per container nauwkeurig wanneer één enkele boeking 4x 40'HC-containers omvat met zowel containerspecifieke drayage-vergoedingen als gedeelde B/L-documentatievergoedingen?*
* **Boekhouden van vracht in meerdere valuta in Excel:** *Hoe bouw ik een tracker voor de winst-en-verliesrekening van zendingen in Excel die oceaanvracht in USD, kosten bij herkomst in EUR/CNY en bankkosten voor overmakingen afhandelt zonder handmatige fouten bij valutakoersomrekening?*
* **Controleren van brutowinst van verkoopsvertegenwoordigers:** *Hoe verifieer ik de ware nettomarge van een vrachtboeking voordat ik verkoopscommissies op brutowinst betaal?*

---

## Over Theseus Workshop

Ik bouw lichte, auditklare kaders voor beslissingsondersteuning in Excel en de browser voor operationele omgevingen waarin er te veel bewegende delen zijn om in één hoofd te houden — maar waarin een opgeblazen uitroling van ondernemingssoftware overbodig is.

De centrale ontwerpvraag achter elke tool is eenvoudig:

> **"Welke exacte operationele en financiële gegevens moeten op één plaats staan zodat de volgende bedrijfsbeslissing wiskundig voor de hand ligt?"**

Deze **engine voor winstgevendheid en kostentoerekening op boekingniveau** past dat principe toe op internationale goederenvervoer — door de centrale operationele eenheid (**de boeking en container**) direct te verbinden met zijn transacties in meerdere valuta, dienstlijnen voor nevenkosten, gegevensstatus en ware eindwinst.

---

*Keywords: Excel-sjabloon voor kostentoerekening bij expéditeurs, rekenmachine voor winstgevendheid van zendingen, spreadsheet voor winst-en-verliesrekening op boekingniveau, NVOCC-margetracker, model voor kostentoerekening van FCL-containers, sjabloon voor afstemming van vrachtboekhouding AR/AP, analyse van logistieke brutomarge.*


## Technische details

<details>
<summary>Voor technische reviewers, Excel-practitioners en medewerkers</summary>

### Architectuur van het werkboek

Het werkboek is georganiseerd rond vier functionele lagen: **regels en parameters → stamdata → transactie-invoer → berekening en analytische uitvoer**.

Het ontwerp bevat 11 bladen:

| Laag              | Blad                   | Rol                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Regels & parameters | `Instructions`          | Bedieningsinstructies, regels voor gegevensinvoer en bedrijfsdefinities               |
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

De bronarchitectuur benoemt drie belangrijke opzoeksketens met meerdere hops: een keten van valuta/financiële behandeling met vier hops, een keten van gedeelde kosten/containerboring met vier hops, en een keten van serviceclassificatie met drie hops. 

De kritieke ontwerpregel is dat **berekeningswaarden en diagnostische toestanden gescheiden blijven**. `USD Equivalent` blijft numeriek, terwijl `Data Health Status` fouten draagt zoals `ERR: UNKNOWN_CURRENCY`. Dit behoudt `SUMIFS`-compatibiliteit en voorkomt tegelijkertijd dat defecte transacties de engine van de winst-en-verliesrekening binnenkomen. 

### Drie valstrikken die zelfs ervaren transportexploitanten te pakken nemen

#### Valstrik 1 — Een ontbrekende wisselkoers als geldig bedrag behandelen

**1. Beslissing:** Een boeking lijkt een bepaalde kost en marge te hebben.

**2. Verborgen gebrek:** Een transactie van een leverancier is uitgedrukt in een valuta die niet is geconfigureerd in de referentietabel van wisselkoersen.

**3. Impact van de beslissing:** Als de ontbrekende koers onjuist als `1.0` wordt behandeld, kan een vreemd bedrag als `50,000` veranderen in `$50,000 USD`, waardoor het boekingsresultaat radicaal wordt vervormd.

**4. Waarom het fout is:** Een ontbrekende wisselkoers is een falen van datagezondheid, geen economische wisselkoers.

**5. Juiste aanpak:** Geef een neutrale numerieke waarde van `0` terug voor het berekeningsveld en rapporteer `ERR: UNKNOWN_CURRENCY` afzonderlijk.

**6. Gecorrigeerde beslissing:** De boeking wordt gemarkeerd voor aanvulling van gegevens, in plaats van een valse winst of verlies toegewezen te krijgen.

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

**6. Gecorrigeerde beslissing:** De boeking wordt behandeld als **voorlopig** tot de gegevensuitzonderingen zijn opgelost.

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
| ------------------------- | -------- | --------------: | -------- | -------------: |
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

Stel nu dat één aanvullende transactie van een leverancier wordt ingevoerd in een niet-geconfigureerde valuta. Het systeem voegt de transactie **niet** stilzwijgend toe aan de kosten van omzet. De toegepaste wisselkoers wordt `0`, de USD-berekening blijft numeriek, en het diagnostiekveld rapporteert `ERR: UNKNOWN_CURRENCY`. De boeking ontvangt een gezondheidswaarschuwing, in plaats van als schoon te worden gepresenteerd.

De operationele aanbeveling verandert dienovereenkomstig:

> **Gebruik de marge van 55.34% niet als eindcijfer voor winstgevendheid tot de onopgeloste transactie is gecorrigeerd.**

Dit is het centrale onderscheid tussen een winstgevendheidsrekenmachine en een gecontroleerde workflow voor kostentoerekening: het resultaat gaat vergezeld van bewijs over de vraag of de onderliggende gegevens volledig genoeg zijn om te vertrouwen.

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

Als er nog geen container is ingevoerd, valt de noemer terug op `1`. Dit is een rekenbeveiliging, terwijl de ontbrekende-containervoorwaarde operationeel toch als een gegevenskwaliteitsprobleem moet worden behandeld. 

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

**Doel:** Koppel operationele transactietypes aan financiële categorieën.

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

**Doel:** Valideer koppelingen van boeking, service en wisselkoers onafhankelijk van de financiële berekeningskolommen.

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

De bron-validatie bevestigt de dekking van de kerninvoer van boeking, container, service en transactie, plus de uitvoer van USD-equivalent, nettowinst, marge en toegekende kost. Ze verifieert ook specifiek de scheiding tussen diagnosetekst en numerieke `SUMIFS`-velden. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Kruisvalidatie en paraatheid voor implementatie

De werkboekarchitectuur is ontworpen om de analytische keten te valideren **voordat** het management op de resulterende winst-en-verliesrekening vertrouwt.

De bronimplementatie controleert expliciet de toewijzingsketen van transactietypes, de opzoeksketen van wisselkoersen, de koppeling met Service Master, de toekenningsketen van gedeelde kosten en de compatibiliteit tussen diagnosetekst en numerieke aggregatievelden. 

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

De kruisvalidatiematrix van de implementatie stelt dat de kerninvoervelden — boeking, container, service en transactiegegevens — en de belangrijkste uitvoer — USD-equivalent, nettowinst, marge en toegekende kost — door de architectuur zijn gedekt. 

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

#### 3. Gezondheid van gegevens controleren

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

### Regels voor gegevensonderhoud

De architectuur steunt op gecontroleerde stamdata omdat Excel niet dezelfde harde handhaving van vreemde sleutels biedt als een database- of ERP-platform.

De belangrijkste onderhoudsregels zijn:

1. **Overschrijf geen door formules gegenereerde velden.**
2. **Typ servicenamen niet handmatig in waar een servicecode moet worden gebruikt.**
3. **Voer geen nieuwe valuta in zonder eerst haar wisselkoers aan `Setup_Params` toe te voegen.**
4. **Gebruik `1.0` niet als terugval voor een ontbrekende wisselkoers.**
5. **Schrijf geen fouttekst in numerieke aggregatiekolommen.**
6. **Bewerk de uitvoer van `Job_Costing_Engine` niet handmatig.**
7. **Los niet-OK-transactieregels op voordat u de marge van een boeking als eindguldig behandelt.**
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

Los daarna elk onderliggend probleem in de brongegevens op, in plaats van de uitvoer van de winst-en-verliesrekening handmatig te wijzigen.

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

* operationele en financiële gegevens al in spreadsheets of exports bestaan;
* de belangrijkste analyse-eenheid een boeking of zending is;
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

Het resultaat is een herhaalbare workflow en geen eenmalige spreadsheetberekening: leg de referentiegegevens eenmaal vast, voeg nieuwe operationele transacties toe, los uitzonderingen op, en laat de berekenings- en analyselagen actualiseren vanuit hetzelfde onderliggende gegevensmodel. 

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Slotopmerkingen over de architectuur

Het werkboek is opzettelijk gebouwd rond een **enkele engine voor winstgevendheid op boekingniveau**, in plaats van om een verzameling losse rekenmachines.

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

De implementatie erkent ook expliciet drie opzoeksketens met meerdere hops:

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
* Zijn de gerapporteerde marges betrouwbaar, of verbergen onopgeloste problemen in brongegevens kosten?
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
