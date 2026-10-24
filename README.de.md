[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-Vorlage zur Kostenzuordnung für Speditionen & Rechner für Sendungsprofitabilität (GuV auf Buchungsebene)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/f89c1a0f-f576-43af-b26a-02bae4a47348" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Financial%20Spreadsheet%20Model-2251FF.svg)](#)

**Eine prüfungssichere Excel-Vorlage zur Kostenzuordnung für Speditionen und ein interaktiver GuV-Rechner für Sendungen — entwickelt, um die Bruttomarge auf Buchungsebene, FX-Umrechnungen zwischen mehreren Währungen, die Kostenzuordnung für FCL/LCL-Container und die Profitabilität von Frachtgebühren zu verfolgen. Rechnen Sie Kunden-AR-Rechnungen, Frachtführer-AP-Rechnungen, Drayage, Zollabfertigung und Banküberweisungsgebühren in einem standardisierten Logistik-Finanzmodell ab — kostenlos in Ihrem Browser oder als entsperrte Excel-Tabelle.**

**Keine Registrierung. Keine Installation. Kostenlos in Ihrem Browser testen.**

Nutzen Sie die interaktive Webanwendung, um den Kostenzuordnungs-Ablauf sofort zu prüfen, oder laden Sie die vollständige Excel-Tabellenvorlage herunter, um Ihre eigenen Buchhaltungsexporte zu importieren — abgesichert durch eine 30-tägige Geld-zurück-Garantie ohne Rückfragen.

> 🌐 **Kostenlose Web-App starten** → [Interaktiver Kostenzuordnungs- und Sendungs-GuV-Rechner für Speditionen](https://hyvoid.github.io/freight-forwarder-job-costing-excel/)  
> 📥 **Vollständiges Excel-Modell holen** → [Bearbeitbare Excel-Vorlage zur Kostenzuordnung und Buchungsprofitabilität für Speditionen herunterladen](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)  
>
> *Sowohl die Browserversion als auch das herunterladbare Excel-Arbeitsbuch teilen exakt dieselbe relationale Buchhaltungsarchitektur.*

---

## Was damit verfolgt wird: Zuordnung von Schmerzpunkten der Spedition zu Lösungen

Anstatt auf aggregierte Monatsabschluss-Berichte der Buchhaltung zu warten, verfolgt und behebt diese **Logistik-Tabellenkalkulation zur Kostenzuordnung** genau die betrieblichen Blindstellen, die in der See-, Luft- und multimodalen Spedition zu **Margenverlusten** führen:

| Verfolgte Zielmetrik / Schmerzpunkt | Die häufige Blindstelle der Frachtbuchhaltung | Wie dieses Kostenzuordnungsmodell sie löst und verfolgt |
| :--- | :--- | :--- |
| **GuV und Bruttomarge auf Buchungsebene** | Der Gewinn ist nur auf monatlicher Unternehmensebene sichtbar, wodurch verlustbringende Sendungen und zu niedrig kalkulierte Handelsrouten verborgen bleiben. | Verfolgt **AR-Umsatzerlöse vs. AP-Umsatzkosten vs. Banküberweisungsgebühren** pro einzelner Buchungs-ID (B/L- oder AWB-Ebene), um **Nettogewinn und Marge %** in Echtzeit offenzulegen. |
| **Profitabilität von Gebührencodes und Nebenkosten** | Den Gesamtumsatz einer Sendung zu kennen, ohne zu wissen, ob Seefracht, Drayage, Zollabfertigung oder Demurrage tatsächlich Geld eingebracht haben. | Verfolgt den Margenbeitrag über granulare **Fracht-Dienstleistungscodes** (Seefracht, THC, Ursprungsinspektion, Frachtversicherung, Dokumentation, Koordination). |
| **Kostenzuteilung gemeinsamer Kosten bei mehreren Containern (FCL)** | Wenn ein Master-B/L mehrere Container umfasst, werden pauschale Gebühren auf Buchungsebene bei der Analyse auf Containerebene dupliziert oder ignoriert. | Trennt **direkte Containerkosten** von **gemeinsamen Kosten auf Buchungsebene** und teilt gemeinsame Gebühren automatisch über eine kontrollierte Richtlinie auf die Container auf. |
| **Gewinn/Verlust und Normalisierung bei mehreren Währungen (FX)** | Ozeanfrachtführer in USD bezahlen, Ursprungsagenten in EUR/CNY und Kunden in lokaler Währung berechnen — mit inkonsistenten manuellen Wechselkursen. | Rechnet alle gemischt-währigen AR/AP-Zeilen über eine zentrale FX-Nachschlagetabelle mit automatischen Ausnahmemarkierungen für fehlende Kurse auf eine **standardisierte USD-Basis** um. |
| **Nicht verknüpfte Lieferantenkosten und Datenqualitäts-Prüfung** | Tippfehler in Buchungs-IDs, ungültige Gebührencodes oder fehlende FX-Kurse lassen Lieferantenkosten stillschweigend auf $0 fallen, was künstlich aufgeblähte Gewinnmargen erzeugt. | Führt eine automatisierte **Datenzustands-Diagnose-Engine** (`ERR: UNKNOWN_CURRENCY`, `ERR: INVALID_BOOKING`) aus, die defekte Datensätze unter Quarantäne stellt, bevor sie Ihre GuV verunreinigen. |

---

## So führen Sie eine Prüfung der Sendungsprofitabilität und Kostenzuordnung durch (Schnellstart-Ablauf)

Verwandeln Sie unaufgeräumte ERP-/Buchhaltungsexporte, Frachtführerrechnungen und betriebliche Tabellen in vier strukturierten Schritten in eine saubere **GuV auf Buchungsebene**:

### Schritt 1: Basiswährung, FX-Kurse und Zuteilungsregeln konfigurieren
Öffnen Sie das Steuerblatt `Setup_Params`, um Ihre Frachtbuchhaltungs-Basislinie festzulegen:
- Legen Sie Ihre **Basis-Berichtswährung** (z. B. USD) fest und füllen Sie die Referenz-**Wechselkurse (FX)**.
- Ordnen Sie Ihre **Transaktionstypen** zu (Kundenumsatz, direkte Umsatzkosten, Bank-/Überweisungsgebühren, Kundeneinlagen).
- Wählen Sie Ihre **Richtlinie zur Zuteilung gemeinsamer Kosten** für FCL-Sendungen mit mehreren Containern.

*Aktion:* Prüfen Sie die vorkonfigurierte Parameterstruktur sofort in der [kostenlosen Browser-Demo zur Kostenzuordnung](https://hyvoid.github.io/freight-forwarder-job-costing-excel/).

---

### Schritt 2: Buchungsstammdaten und rohe AR/AP-Transaktionen importieren
Füllen Sie Ihre Stammlisten (Buchungen, Container und Fracht-Dienstleistungskatalog) und fügen oder laden Sie dann Ihre Finanzpositionen in `Raw_Transactions`:
- **Kompatible Datenquellen:** Exporte aus QuickBooks/Xero, TMS-Abrechnungsprotokolle, Rechnungen von Ozeanfrachtführern/NVOCCs, Auszüge von Zollagenturen und manuelle betriebliche Tracker.
- **Kein manueller Neuaufbau von VLOOKUP erforderlich** — werfen Sie einfach Rohzeilen in die standardisierte Transaktionstabelle.

---

### Schritt 3: Ausnahmen des Datenzustands prüfen und die automatisierte Sendungs-GuV überblicken
Sobald Transaktionen geladen sind, führt die Kostenzuordnungs-Engine automatisch aus:
- Normalisiert Fremdwährungen auf Ihre Basis-Berichtswährung.
- Markiert defekte Stammdatenverknüpfungen (`Data Health Status`), damit nicht verknüpfte Lieferantenrechnungen niemals als Nullkosten-Posten verborgen bleiben.
- Aggregiert verifizierte Zeilen zu **GuV auf Buchungsebene**, **Margenaufschlüsselung nach Dienstleistungslinie** und **Stückkostenökonomie auf Containerebene**.

---

### Schritt 4: Regelmäßig aktualisieren und für den laufenden Betrieb nach Excel exportieren
Wenn neue Schiffsabfahrten, Lieferantenrechnungen oder Standgeld-/Demurrage-Gebühren eintreffen, hängen Sie sie an das Transaktionsprotokoll an, um Ihre Sendungsmargen über Abrechnungszyklen hinweg aktuell zu halten.

> 💡 **Bereit, dies mit Ihren eigenen Live-Sendungsdaten und Buchhaltungsexporten auszuführen?**  
> Die Browserversion ist für sofortige Ablaufverifikation und Tests in einer Sitzung gebaut. Um Ihre eigenen CSV/Excel-Buchhaltungsauszüge zu importieren, Frachtgebührenkataloge anzupassen, monatliche Abschluss-Snapshots zu speichern und jede Formel offline zu prüfen:  
> 👉 **[Entsperrte Excel-Vorlage zur Kostenzuordnung für Speditionen herunterladen](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)** und machen Sie daraus Ihre wiederholbare monatliche Engine für Sendungsprofitabilität.

---

## Die Geschäftslogik und Methodik

Standard-Buchhaltungssoftware (wie QuickBooks oder Xero) ist um **Kontenplan und Kalendermonate** herum aufgebaut, während Speditionen um **Buchungen, Konnossemente (B/L) und Container** arbeiten, deren Umsatzerlöse und Lieferantenrechnungen oft mehrere Monate und Währungen überspannen. 

Um die Diskrepanz zwischen Finanzbuchhaltung und betrieblicher Logistik zu lösen, implementiert dieses Werkzeug eine **relationale Kostenzuordnungsmethodik mit 4 Säulen**:

1. **Relationale Modellierung der Entitätshierarchie (`Booking → Container → Service Line`):**  
   In Frachtoperationen fallen Kosten auf verschiedenen strukturellen Ebenen an. Eine Zollabfertigungsgebühr oder eine Konnossement-Dokumentationsgebühr fällt einmal pro **Buchung** an, während Terminal-Handling-Gebühren (THC), Drayage oder Chassis-Split-Gebühren pro **Container (TEU/FEU)** anfallen. Das Flachdrücken dieser in eine einzige Tabelle verursacht schwere Doppelzählung. Diese Engine erzwingt eine strenge relationale Hierarchie: Direkte Containerkosten binden an `Container_ID`, während sendungsweite Gemeinkosten an `Booking_ID` binden und sich dynamisch über eine deterministische Zuteilungsformel verteilen:
   $$\text{Container Allocated Cost} = \text{Direct Container Cost} + \frac{\text{Booking-Level Shared Costs}}{\text{Total Active Containers in Booking}}$$
2. **Entkoppelter Diagnosezustand vs. numerische Aggregation (Architektur ohne schweigende Nullfehler):**  
   In Standard-Excel-Tabellen ignoriert eine falsch geschriebene Buchungs-ID in einer `SUMIFS`-Formel stillschweigend eine Ozeanfracht-Rechnung über $2.000 — wodurch eine verlustbringende Sendung wild profitabel aussieht. Umgekehrt zerbricht ein `#N/A`-Fehler in einem `VLOOKUP` das gesamte GuV-Dashboard. Dieses Modell verwendet eine **dual-spurige Bewertungsmethode**: Jede Transaktionszeile passiert eine referenzielle Integritätsschranke (`Data_Health_Status`), die Buchungs-IDs, Dienstleistungscodes und Währungsschlüssel vor der mathematischen Ausführung validiert. Ungültige Zeilen geben explizite Diagnosezeichenfolgen aus (`ERR: UNKNOWN_CURRENCY`, `ERR: ORPHAN_BOOKING`), während sie eine sichere `0` an die Aggregations-Engine weitergeben, wodurch sichergestellt wird, dass das Dashboard niemals abstürzt, während Analysten visuell auf unvollständige Margendaten hingewiesen werden.
3. **Zentralisierte Multi-Währungs-Triangulation:**  
   Grenzüberschreitende Spedition bedeutet, Ursprungsagenten in CNY/EUR zu bezahlen, Seefracht in USD abzuwickeln und zwischengeschaltete Banküberweisungsgebühren zu absorbieren. Das Modell normalisiert jede rohe Transaktionszeile auf Positionsebene ($T_i \times \text{FX}_{\text{rate}}$) vor dem GuV-Roll-up, wodurch die Rundungsverzerrungen und die Wechselkursdrift eliminiert werden, die in manuellen Zusammenfassungsumrechnungen üblich sind.
4. **Trennung von Cashflow-GuV und Abgrenzungs-GuV (Einlagen vs. verdiente Umsatzerlöse):**  
   Speditionen ziehen häufig Kundeneinlagen oder Zollvorschüsse ein, bevor ein Schiff ablegt. Das Mischen von Kundeneinlagen mit verdienten Frachtumsatzerlösen verzerrt die wahre Bruttomarge. Die Transaktionsklassifizierungs-Engine isoliert explizit **Bilanz-Einlagen** von **GuV-Umsatzerlösen, Umsatzkosten und Bankgebühren** und liefert eine genaue Einheitsmargensicht zusammen mit Transparenz über die Cash-Position.

---

## Warum ich dies entwickelt habe: Die gebrochene analytische Kette in der Spedition beheben

Die Profitabilität im Speditionsgewerbe ist viel schwerer zu erkennen, als es auf einem Verkaufsangebot aussieht.

Eine einzelne Ozean- oder Luftbuchung kann Kundenfrachtgebühren, Ursprungsinspektion, Frachtversicherung, Dokumentationsgebühren, lokale Drayage, Ozeanfracht des Frachtführers, Banküberweisungsgebühren, Kundeneinlagen, 3+ Währungen und mehrere Container umfassen — verstreut über disparate betriebliche Tracker und Buchhaltungsexporte.

Wenn Speditionen an einer Sendung Geld verlieren, ist die Ursache selten schlechte Preisabsicht. **Es ist eine gebrochene analytische Kette:**
- Eine Sendung sieht wie ein **Gewinner mit 38.8% Bruttomarge** aus, weil eine Drayage-Lieferantenrechnung über $1,500 einen Tippfehler in der Buchungsreferenz hatte und aus der `SUMIFS`-Formel ausgeschlossen wurde.
- Eine Ursprungsagentengebühr in Fremdwährung wurde ausgelassen, weil ihr FX-Kurs in der Nachschlagetabelle nicht aktualisiert wurde.
- Gemeinsame Zoll- und Dokumentationskosten auf Buchungsebene wurden versehentlich über 5 Container multipliziert — oder vollständig ignoriert — als pro Containersätze beim Kunden angefragt wurden.

Vertrauen Sie beispielsweise nicht blindlings einer fehlerhaften Zusammenfassung wie dieser:

```text
Booking Revenue        $8,500
Reported COGS          $5,200
Apparent Net Profit    $3,300
Reported Margin         38.8%  <-- (Artificially inflated by missing vendor bill)
```

Diese Kostenzuordnungs-Engine markiert sofort, dass der zugrunde liegende Transaktionsdatensatz eine **nicht verknüpfte Lieferantenkost** oder eine **nicht konfigurierte Währung (`ERR: UNKNOWN_CURRENCY`)** enthält. Die Buchung wird sichtbar zur Datenbereinigung unter Quarantäne gestellt, anstatt dem Management als saubere Marge von 38.8% präsentiert zu werden.

Das Ziel ist nicht ein weiteres hübsches Eitelkeits-Dashboard. Es ist ein **verteidigungsfähiges finanzielles Begründungsrahmenwerk**, das garantiert, dass Ihre GuV auf Buchungsebene mathematisch einwandfrei ist, bevor Sie Verkaufsprovisionen zahlen oder Kundenpreiskarten erneuern.

---

## Ad-hoc-Buchhaltungs-Tabellen vs. diese Fracht-Kostenzuordnungs-Engine

| Bewertungsdimension | Manuelle Tabellen und generische Buchhaltung (ohne dieses Werkzeug) | Standardisierte Fracht-Kostenzuordnungs-Engine (mit diesem Werkzeug) |
| --- | --- | --- |
| **Sichtbarkeit auf Sendungsebene (B/L & AWB)** | Hauptbuch-Software vermischt alle monatlichen Rechnungen miteinander, wodurch verborgen bleibt, welche spezifischen Sendungen, Handelsrouten oder Kunden Geld verlieren. | Erzeugt eine sofortige **GuV Buchung für Buchung**, die Bruttoumsatzerlöse, direkte Umsatzkosten, Banküberweisungsgebühren, Nettogewinn und Marge % aufschlüsselt. |
| **Abstimmung bei mehreren Währungen (FX)** | Operatoren rechnen EUR, CNY, GBP und USD manuell mit Ad-hoc-Kursen um, was unerklärliche Margendiskrepanzen beim Monatsabschluss verursacht. | Erzwingt eine **zentrale FX-Kurstabelle**, die jede Rechnungszeile in eine einzige Basiswährung umrechnet und eine explizite Warnung ausgibt, wenn ein Währungskurs fehlt. |
| **FCL-Kostenzuteilung bei mehreren Containern** | Dokumentationsgebühren, Zollabfertigung und Buchungszuschläge werden entweder pro Container doppelt gezählt oder aus der Container-Stückkostenökonomie weggelassen. | Trennt dynamisch **direkte Container-Umsatzkosten** von **gemeinsamen Buchungskosten** und verteilt gemeinsame Gebühren gleichmäßig über die exakte Containeranzahl. |
| **Marge bei Nebenkosten und Dienstleistungscodes** | Speditionen kennen den Gesamtrechnungswert, können aber nicht sagen, ob sie an Drayage, Frachtversicherung, Ursprungsinspektion oder THD/THC Geld verlieren. | Aggregiert Umsatzerlöse vs. Lieferantenkost nach **granularem Fracht-Dienstleistungscode** und offenbart, welche Mehrwertdienste Gewinn vs. Margenverluste erzeugen. |
| **Integrität der Stammdaten und Fehlerbehandlung** | Falsch geschriebene Buchungs-IDs oder defekte `VLOOKUP`-Verknüpfungen lassen Lieferantenkosten stillschweigend auf Null fallen (was den Gewinn aufbläht) oder zerstören das gesamte Blatt mit `#N/A`-Fehlern. | Integrierte **Datenzustands-Diagnose-Schicht** isoliert ungültige Buchungs-IDs, Dienstleistungscodes und FX-Kurse und hält numerische Roll-ups stabil und prüfungsbereit. |

---

## Für wen dies bestimmt ist: Ziel-Logistikrollen und betriebliche Szenarien

Dieses Werkzeug wurde für **kleine bis mittlere Speditionen (OTIs / NVOCCs), Zollagenten, 3PL-Betreiber und Logistik-Finanzteams** entwickelt, die eine unternehmensgerechte Kostenzuordnung auf Sendungsebene benötigen, ohne $20,000+ für eine schwergewichtige TMS/ERP-Implementierung zu zahlen:

* **Inhaber und Geschäftsführer von Speditionen:** Nutzen Sie dies als **Werkzeug zur Prüfung von Sendungsprofitabilität und Verkaufsprovisionen auf Führungsebene**, um wahre Nettomargen (nach Bankgebühren und gemeinsamen Kosten) zu verifizieren, bevor Sie jährliche Verladerpreisverträge unterzeichnen oder Verkaufsprovisionen auszahlen.
* **Logistik-Finanzmanager und Frachtbuchhalter:** Nutzen Sie dies als **monatliche Vorlage zur Abstimmung der Kostenzuordnung**, um die Lücke zwischen allgemeiner Buchhaltungssoftware (QuickBooks, Xero, NetSuite) und betrieblichen Sendungsdateien zu überbrücken — und nicht abgerechnete Umsatzerlöse oder verwaiste Lieferantenrechnungen zu erkennen, bevor die Bücher geschlossen werden.
* **Fracht-Preisanalysten und Handelsrouten-Manager:** Nutzen Sie dies als **Analysewerkzeug für Container-Stückkostenökonomie und Nebenmargen**, um zu sehen, ob Seefracht, Luftfracht, Zollabfertigung, Frachtversicherung oder Inland-Drayage die Profitabilität über spezifische Handelsrouten antreibt oder erodiert.
* **Speditions-Betriebsleiter und Disponenten:** Nutzen Sie dies als **Rechner für die Kostenzuteilung bei mehreren FCL/LCL-Containern**, wenn Sie komplexes Projekt-Cargo oder Buchungen mit mehreren Containern mit gemischten Währungen und geteilten Lieferantenrechnungen verwalten.
* **Teilzeit-CFOs und Supply-Chain-Berater:** Nutzen Sie dies als **Diagnoserahmenwerk für Margenverluste zum sofortigen Einsatz**, wenn Sie Kundenfrachtportfolios prüfen oder unaufgeräumte betriebliche Tabellen bereinigen.

*Hinweis: Dieses Arbeitsbuch ist **nicht** dafür bestimmt, ein betriebliches TMS (wie CargoWise), eine automatisierte EDI-Buchungsplattform oder ein gesetzliches Steuerbuchhaltungssystem zu ersetzen. Es ist die leichte **analytische Ausführungsschicht der Kostenzuordnung**, die Ihre betrieblichen Sendungsdatensätze mit ihrem wahren finanziellen Ergebnis verbindet.*

---

## Häufig gestellte Fragen zu Fracht-Kostenzuordnung und Margenszenarien

Wenn Ihr Speditionsbetrieb mit einer der folgenden Fragen zur finanziellen Abstimmung kämpft, ist dieses Modell strukturiert, um sie von Haus aus zu lösen:

* **Verhinderung von Margenverlusten bei Sendungen:** *Wie rechne ich Kunden-AR-Rechnungen gegen verzögerte Ozeanfracht-, Drayage- und Zollagenten-AP-Rechnungen auf individueller Buchungs- oder Konnossementebene (B/L) ab?*
* **Kostenaufteilung bei FCL mit mehreren Containern:** *Wie berechne ich Kosten und Gewinn pro Container genau, wenn eine einzelne Buchung 4x 40'HC-Container mit sowohl containerspezifischen Drayage-Gebühren als auch gemeinsamen B/L-Dokumentationsgebühren umfasst?*
* **Mehrwährungs-Frachtbuchhaltung in Excel:** *Wie baue ich einen Sendungs-GuV-Tracker in Excel, der USD-Seefracht, EUR/CNY-Ursprungsgebühren und Banküberweisungsgebühren ohne manuelle FX-Umrechnungsfehler handhabt?*
* **Prüfung des Bruttogewinns von Verkaufsvertretern:** *Wie verifiziere ich die wahre Nettomarge einer Frachtbuchung, bevor ich Verkaufsprovisionen auf den Bruttogewinn zahle?*

---

## Über Theseus Workshop

Ich baue leichte, prüfungssichere Excel- und browserbasierte Entscheidungsunterstützungs-Rahmenwerke für betriebliche Umgebungen, in denen es zu viele bewegliche Teile gibt, um sie in einem Kopf zu behalten — aber in denen ein aufgeblähter Unternehmenssoftware-Rollout übertrieben wäre.

Die zentrale Designfrage hinter jedem Werkzeug ist einfach:

> **"Welche exakten betrieblichen und finanziellen Daten müssen an einem Ort sitzen, damit die nächste Geschäftsentscheidung mathematisch offensichtlich wird?"**

Diese **Engine für Profitabilität und Kostenzuordnung auf Buchungsebene** wendet dieses Prinzip auf die internationale Spedition an — indem sie die zentrale betriebliche Einheit (**die Buchung und den Container**) direkt mit ihren Mehrwährungs-Transaktionen, Nebendienstleistungslinien, Datenzustand und echtem Bottom-Line-Gewinn verbindet.

---

*Keywords: Excel-Vorlage zur Kostenzuordnung für Speditionen, Rechner für Sendungsprofitabilität, GuV-Tabelle auf Buchungsebene, NVOCC-Margen-Tracker, FCL-Modell zur Kostenzuteilung von Containern, Vorlage zur Abstimmung der Frachtbuchhaltung AR/AP, Analyse der logistischen Bruttomarge.*


## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</summary>

### Arbeitsmappen-Architektur

Das Arbeitsbuch ist um vier funktionale Schichten herum organisiert: **Regeln und Parameter → Stammdaten → Transaktionseingabe → Berechnung und Analyseausgabe**.

Das Design enthält 11 Blätter:

| Schicht              | Blatt                   | Rolle                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Regeln & Parameter | `Instructions`          | Betriebsanweisungen, Dateneingaberegeln und Geschäftsdefinitionen               |
| Regeln & Parameter | `Setup_Params`          | Basiswährung, FX-Kurse, Transaktionszuordnungen und Richtlinie zur Zuteilung gemeinsamer Kosten |
| Stammdaten        | `Booking_Master`        | Buchungsindex, Kunde, Status und Containeranzahl                             |
| Stammdaten        | `Container_Master`      | 1:N-Beziehung zwischen Buchung und Container                                            |
| Stammdaten        | `Service_Master`        | Standard-Dienstleistungscode, Dienstleistungsname und Kategorie                                |
| Transaktionseingabe  | `Raw_Transactions`      | Einheitliches Finanztransaktionsregister plus Datenzustands-Diagnostik                |
| Berechnungs-Engine | `Job_Costing_Engine`    | Aggregation von Umsatzerlösen, Umsatzkosten, Bankgebühren, Gewinn, Marge und Einlagen auf Buchungsebene  |
| Analyse            | `Booking_PL`            | GuV einer einzelnen Buchung und Aufschlüsselung auf Dienstebene                                  |
| Analyse            | `Container_Analysis`    | Direkte Kosten und zugeteilte gemeinsame Kosten auf Containerebene                                |
| Analyse            | `Service_Profitability` | Profitabilität nach Dienstleistung über Buchungen hinweg                                           |
| Managementausgabe   | `Executive_Dashboard`   | Globale KPIs, Profitabilitäts-Rankings und Datenzustands-Warnungen                    |

Der Kernablauf ist:

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

Die Quellarchitektur identifiziert drei wichtige mehrstufige Nachschlagketten: eine vierstufige Währungs-/Finanzbehandlungskette, eine vierstufige Gemeinkosten-/Container-Drill-down-Kette und eine dreistufige Dienstleistungsklassifizierungskette. 

Die kritische Designregel ist, dass **Berechnungswerte und Diagnosezustände getrennt bleiben**. `USD Equivalent` bleibt numerisch, während `Data Health Status` Fehler wie `ERR: UNKNOWN_CURRENCY` trägt. Dies bewahrt die `SUMIFS`-Kompatibilität und verhindert, dass defekte Transaktionen in die GuV-Engine gelangen. 

### Drei Fallen, die selbst erfahrene Speditionsbetreiber fangen

#### Falle 1 — Einen fehlenden FX-Kurs als gültigen Betrag behandeln

**1. Entscheidung:** Eine Buchung scheint eine bestimmte Kost und Marge zu haben.

**2. Verborgener Fehler:** Eine Lieferantentransaktion ist in einer Währung denominiert, die in der Referenz-FX-Tabelle nicht konfiguriert ist.

**3. Auswirkung der Entscheidung:** Wenn der fehlende Kurs falsch als `1.0` behandelt wird, kann ein Fremdbetrag wie `50,000` zu `$50,000 USD` werden, was das Buchungsergebnis radikal verzerrt.

**4. Warum es falsch ist:** Ein fehlender Wechselkurs ist ein Versagen der Datenqualität, kein wirtschaftlicher Wechselkurs.

**5. Richtiger Ansatz:** Geben Sie einen neutralen Zahlenwert von `0` für das Berechnungsfeld zurück, während Sie separat `ERR: UNKNOWN_CURRENCY` melden.

**6. Korrigierte Entscheidung:** Die Buchung wird zur Datenvervollständigung markiert, anstatt einen falschen Gewinn oder Verlust zugewiesen zu bekommen.

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
<summary>Formellogik</summary>

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

Die wichtige Regel ist: **eine unbekannte Währung niemals standardmäßig auf 1.0 setzen**. 

</details>

#### Falle 2 — Die GuV einer Buchung lesen, bevor der Datenzustand geprüft ist

**1. Entscheidung:** Eine Buchung mit Umsatzerlösen von `$8,500` und Umsatzkosten von `$5,200` wird als Gewinn von `$3,300` betrachtet.

**2. Verborgener Fehler:** Eine oder mehrere Quelltransaktionen haben ungültige Buchungs- oder Dienstverknüpfungen oder eine unaufgelöste Währung.

**3. Auswirkung der Entscheidung:** Die scheinbare Marge kann überzeichnet sein, weil eine Kostenzeile klammheimlich nicht in die Aggregation gelangt ist.

**4. Warum es falsch ist:** Ein mathematisch korrektes `SUMIFS`-Ergebnis kann wirtschaftlich falsch sein, wenn die Quellzeilen unvollständig sind.

**5. Richtiger Ansatz:** Die Engine aggregiert nur Transaktionen mit `Data Health Status = "OK"` und meldet die Anzahl ungültiger Zeilen separat.

**6. Korrigierte Entscheidung:** Die Buchung wird als **vorläufig** behandelt, bis die Datenausnahmen geklärt sind.

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
<summary>Formellogik</summary>

```excel
rev =
SUMIFS(
  Raw_Transactions!O2:O10000,
  Raw_Transactions!B2:B10000,bk,
  Raw_Transactions!N2:N10000,"Revenue",
  Raw_Transactions!P2:P10000,"OK"
)
```

Derselbe Zustandsfilter wird auf Umsatzkosten, Bankgebühren und Einlagen angewendet. 

</details>

#### Falle 3 — Gemeinsame Kosten auf Buchungsebene direkt jedem Container zuteilen

**1. Entscheidung:** Eine Buchung mit zwei Containern benötigt eine Profitabilitätsansicht auf Containerebene.

**2. Verborgener Fehler:** Eine Umsatzkostenzeile auf Buchungsebene gehört zur Sendung als Ganzes und nicht zu einem bestimmten Container.

**3. Auswirkung der Entscheidung:** Die vollen gemeinsamen Kosten beiden Containern zuzuteilen verdoppelt die scheinbare Kost.

**4. Warum es falsch ist:** Die wirtschaftliche Zugehörigkeit der Kost liegt auf Buchungsebene, während die Analyse eine kontrollierte Zuteilungsregel erfordert.

**5. Richtiger Ansatz:** Verwenden Sie die konfigurierte Richtlinie `EQUAL_SHARE` und teilen Sie die gemeinsamen Umsatzkosten durch die Containeranzahl der Buchung.

**6. Korrigierte Entscheidung:** Jeder Container erhält seine direkten Kosten plus seinen zugeteilten Anteil an der gemeinsamen Kost, wodurch die Summe auf Buchungsebene erhalten bleibt.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

Das Arbeitsbuch trennt direkte Containerkosten ausdrücklich von gemeinsamen Kosten auf Buchungsebene und verwendet einen sicheren Nenner aus der Containeranzahl. 

<details>
<summary>Formellogik</summary>

```excel
alloc_cogs =
IF(
  alloc_policy="EQUAL_SHARE",
  direct_cogs + (shared_cogs / cntr_count),
  direct_cogs
)
```

`Setup_Params!B6` steuert, ob die gemeinsame Kost per `EQUAL_SHARE` verteilt oder per `NO_ALLOCATE` unverteilt belassen wird. 

</details>

### Beispielszenario

Betrachten Sie eine Speditionsbuchung mit den folgenden gültigen Transaktionen:

| Position                      | Typ     | Ursprungsbetrag | Währung | USD-Äquivalent |
| ------------------------- | -------- | --------------: | -------- | -------------: |
| Kundenrechnung          | Revenue  |           8,500 | USD      |         $8,500 |
| Seefracht-Lieferantenkost | COGS     |           3,000 | USD      |         $3,000 |
| Ursprungsinspektion         | COGS     |             900 | USD      |           $900 |
| Frachtversicherung           | Revenue  |             400 | USD      |           $400 |
| Bankbelastung               | Bank Fee |              75 | USD      |            $75 |
| Rückholbare Einlage       | Deposit  |             500 | USD      |           $500 |

Die gültige GuV lautet:

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

Die rückholbare Einlage von `$500` wird separat nachverfolgt, anstatt als Betriebserlös oder Umsatzkosten behandelt zu werden.

Nehmen Sie nun an, dass eine zusätzliche Lieferantentransaktion in einer nicht konfigurierten Währung eingegeben wird. Das System fügt die Transaktion **nicht** stillschweigend den Umsatzkosten hinzu. Ihr angewandter FX-Kurs wird `0`, ihre USD-Berechnung bleibt numerisch, und das Diagnosefeld meldet `ERR: UNKNOWN_CURRENCY`. Die Buchung erhält eine Zustandswarnung, anstatt als sauber präsentiert zu werden.

Die betriebliche Empfehlung ändert sich entsprechend:

> **Verwenden Sie die Marge von 55.34% nicht als endgültige Profitabilitätszahl, bis die unaufgelöste Transaktion korrigiert ist.**

Dies ist der zentrale Unterschied zwischen einem Profitabilitätsrechner und einem kontrollierten Kostenzuordnungs-Ablauf: Das Ergebnis geht mit Belegen darüber einher, ob die zugrunde liegenden Daten vollständig genug sind, um ihnen zu vertrauen.

### Formelreferenz

<details>
<summary>Booking Master — Containeranzahl</summary>

**Zweck:** Ermitteln Sie die Anzahl der einer Buchung zugeordneten Container und verhindern Sie Teilung-durch-Null-Fehler.

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

Ist noch kein Container eingegeben worden, fällt der Nenner auf `1` zurück. Dies ist eine Berechnungssicherung, während die Bedingung des fehlenden Containers betrieblich weiterhin als Datenqualitätsproblem behandelt werden sollte. 

</details>

<details>
<summary>Raw Transactions — Angewandter FX-Kurs</summary>

**Zweck:** Priorisieren Sie einen manuellen FX-Kurs und rufen Sie andernfalls den konfigurierten Währungskurs ab.

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

Eine unbekannte Währung liefert `0`, nicht `1.0`. 

</details>

<details>
<summary>Raw Transactions — Finanzielle Behandlung</summary>

**Zweck:** Ordnen Sie betriebliche Transaktionstypen finanziellen Kategorien zu.

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

Das Quelldesign verwendet `COGS` als konservativen Rückfall für einen unbekannten Transaktionstyp, was das Risiko einer Gewinnüberzeichnung verringert. 

</details>

<details>
<summary>Raw Transactions — USD-Äquivalent</summary>

**Zweck:** Rechnen Sie jeden ursprünglichen Transaktionsbetrag in die USD-Basiswährung des Arbeitsbuchs um, während Sie ein numerisches Ergebnis behalten.

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

Diese Spalte numerisch zu halten ist wichtig, weil nachgelagerte `SUMIFS`-Berechnungen niemals Diagnosetext wie `"INVALID"` anstelle einer Zahl erhalten sollten. 

</details>

<details>
<summary>Raw Transactions — Datenzustandsstatus</summary>

**Zweck:** Validieren Sie Buchungs-, Dienst- und FX-Verknüpfung unabhängig von den finanziellen Berechnungsspalten.

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

Die Diagnoseschicht ist absichtlich von den numerischen Berechnungsfeldern getrennt. 

</details>

<details>
<summary>Job Costing Engine — GuV auf Buchungsebene</summary>

**Zweck:** Erzeugen Sie eine dynamische Buchungsliste und aggregieren Sie nur gesunde Transaktionen.

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

Die wesentliche Kontrolle ist das wiederholte Kriterium `Data Health Status = "OK"`. 

</details>

### Validierungsregeln

| Feld / Bedingung      | Regel                                                            | Fehlerverhalten                                                                     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Booking ID`           | Muss in `Booking_Master` existieren                                  | `ERR: INVALID_BOOKING`; Transaktion von der GuV ausgeschlossen                              |
| `Service Code`         | Muss in `Service_Master` existieren                                  | `ERR: INVALID_SERVICE`; Transaktion von der GuV ausgeschlossen                              |
| `Currency`             | Muss einen gültigen konfigurierten FX-Kurs oder positiven manuellen FX-Kurs haben | Angewandter FX wird `0`; Diagnose meldet `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Positiver Wert übersteuert den Referenz-FX-Kurs                  | Ungültiger/nicht positiver Wert fällt auf konfigurierten FX zurück                             |
| `Transaction Type`     | Sollte der `Setup_Params`-Zuordnung entsprechen                             | Unbekannter Typ fällt konservativ auf `COGS` zurück                                   |
| `USD Equivalent`       | Muss numerisch bleiben                                             | Diagnosetext darf niemals in das numerische Aggregationsfeld geschrieben werden           |
| `Data Health Status`   | Muss für finanzielle Aggregation `OK` sein                          | Nicht-OK-Zeilen sind von der Buchungs-GuV ausgeschlossen                                      |
| `Container Count`      | Darf als Zuordnungsnenner nicht Null werden        | Fällt auf `1` zurück, um `#DIV/0!` zu verhindern                                             |
| Zuordnung gemeinsamer Kosten | Gesteuert durch `Setup_Params!B6`                                 | `EQUAL_SHARE` verteilt nach Containeranzahl; `NO_ALLOCATE` belässt nur direkte Kosten |
| Buchungsprofitabilität  | Erlöse von Null dürfen keinen Teilungsfehler erzeugen               | Marge liefert `0`                                                                 |
| Management-Datenzustand  | Jeder nicht leere Status ungleich `OK` wird gezählt                 | Dashboard zeigt eine Warnung an, statt einen uneingeschränkt sauberen Zustand darzustellen                      |

Die Quell-Kreuzvalidierung bestätigt die Abdeckung der Kern-Buchungs-, Container-, Dienstleistungs- und Transaktionseingaben sowie der Ausgaben USD-Äquivalent, Nettogewinn, Marge und zugeordnete Kost. Sie prüft zudem speziell die Trennung zwischen Diagnosetext und numerischen `SUMIFS`-Feldern. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Kreuzvalidierung und Einsatzbereitschaft

Die Arbeitsmappenarchitektur ist darauf ausgelegt, die analytische Kette zu validieren, **bevor** das Management der resultierenden GuV vertraut.

Die Quellimplementierung prüft ausdrücklich die Transaktionstyp-Zuordnungskette, die FX-Nachschlagkette, die Service-Master-Verknüpfung, die Gemeinkosten-Zuordnungskette und die Kompatibilität zwischen Diagnosetext und numerischen Aggregationsfeldern. 

| Validierungsdimension         | Was wird geprüft                                                                  | Erwartetes Ergebnis                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Buchungsverknüpfung**          | Jede `Booking ID` einer Transaktion existiert in `Booking_Master`                        | Ungültige Zeilen erhalten einen Fehlerzustand                      |
| **Dienstverknüpfung**          | Jeder `Service Code` einer Transaktion existiert in `Service_Master`                      | Ungültige Zeilen sind von der GuV ausgeschlossen                       |
| **FX-Abdeckung**              | Jede Transaktion hat entweder einen gültigen manuellen FX-Kurs oder einen konfigurierten Referenzkurs | Unbekannte Währungen lösen eine Zustandswarnung aus              |
| **Finanzielle Klassifizierung** | Transaktionstyp wird auf Revenue / COGS / Bank Fee / Deposit abgebildet                     | Unbekannte Typen nutzen den konservativen COGS-Rückfall         |
| **Numerische Aggregation**      | `USD Equivalent` bleibt unter allen Bedingungen numerisch                                    | `SUMIFS` stößt nicht auf Diagnosetext              |
| **Zustandsgesteuerte Aggregation** | Die GuV enthält nur `Data Health Status = "OK"`                                    | Defekte Quellzeilen können nicht klammheimlich in den ausgewiesenen Gewinn gelangen |
| **Containerzuordnung**     | Gemeinsame Kosten auf Buchungsebene nutzen die konfigurierte Zuordnungsrichtlinie                  | Keine wiederholte Vollkostenzuordnung über Container hinweg       |
| **Nullerlös-Schutz**  | Die Margenberechnung handhabt Revenue = 0                                    | Kein `#DIV/0!`                                             |
| **Management-Überwachung**     | Globale Transaktionsfehler werden separat gezählt                                 | Dashboard signalisiert ungeklärte Quelldatenprobleme          |

Die Kreuzvalidierungsmatrix der Implementierung besagt, dass die Kern-Eingabefelder — Buchung, Container, Dienstleistung und Transaktionsdaten — und die wesentlichen Ausgaben — USD-Äquivalent, Nettogewinn, Marge und zugeordnete Kost — von der Architektur abgedeckt sind. 

### Betrieblicher SOP

Das beabsichtigte Betriebsmodell ist absichtlich einfach:

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

#### 1. Stammdaten anlegen

Legen Sie die Buchung in `Booking_Master` an.

Wenn Container relevant sind, legen Sie ihre Buchung-zu-Container-Beziehungen in `Container_Master` an.

Pflegen Sie den standardisierten Dienstleistungskatalog in `Service_Master`. 

Beginnen Sie die Finanzanalyse nicht damit, frei formulierte Dienstleistungsnamen oder Buchungskennungen direkt in Berichtsblätter zu tippen. Die Stammtabellen sind die Referenzschicht für nachgelagerte Nachschlagketten. 

#### 2. Finanztransaktionen erfassen

Erfassen Sie Umsatzerlöse, Lieferantenkosten, Bankgebühren, Einlagen und andere relevante Finanzaktivitäten in `Raw_Transactions`.

Jede Transaktion sollte die jeweiligen passenden Angaben enthalten:

* `Booking ID`
* `Container ID`, falls zutreffend
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, wenn ein transaktionsspezifischer Kurs erforderlich ist

Die Transaktionstabelle ist die einzige Quelle, die die detaillierten Finanzereignisdatensätze erhalten sollte. Die Berechnungs-Engine sollte nicht manuell bearbeitet werden. 

#### 3. Datenzustand prüfen

Prüfen Sie `Raw_Transactions[Data Health Status]`.

Eine saubere Zeile liefert:

```text
OK
```

Ausnahmen benennen die gebrochene Beziehung, etwa:

```text
ERR: INVALID_BOOKING
ERR: INVALID_SERVICE
ERR: UNKNOWN_CURRENCY
```

Die Implementierung behandelt dies absichtlich als separate Kontrollebene. Eine Transaktion kann daher numerisch sicher bleiben und dennoch sichtbar vom Finanzergebnis ausgeschlossen sein. 

#### 4. Profitabilität überprüfen

Verwenden Sie:

* `Job_Costing_Engine` für die Profitabilität auf Buchungsebene.
* `Booking_PL` für die Aufschlüsselung einer Buchung nach Diensten.
* `Container_Analysis`, wenn die Buchung mehrere Container enthält.
* `Service_Profitability` für die Dienstökonomie über Buchungen hinweg.
* `Executive_Dashboard` für die Überwachung auf Managementebene.

Dies schafft einen Drill-down-Pfad von **globaler Profitabilität → Buchung → Dienstleistung → Container → Transaktion**, anstatt jede Frage aus einem einzigen Übersichts-Dashboard beantworten zu müssen.

### Regeln zur Datenpflege

Die Architektur stützt sich auf kontrollierte Stammdaten, weil Excel nicht die gleiche harte Fremdschlüssel-Erzwingung bietet wie eine Datenbank- oder ERP-Plattform.

Die wichtigsten Pflegeregeln sind:

1. **Überschreiben Sie keine formelgenerierten Felder.**
2. **Tippen Sie dort, wo ein Dienstleistungscode stehen sollte, keine Dienstleistungsnamen von Hand ein.**
3. **Führen Sie keine neue Währung ein, ohne ihren FX-Kurs vorher zu `Setup_Params` hinzuzufügen.**
4. **Verwenden Sie `1.0` nicht als Rückfall für fehlende FX-Kurse.**
5. **Schreiben Sie keinen Fehlertext in numerische Aggregationsspalten.**
6. **Bearbeiten Sie die Ausgabe von `Job_Costing_Engine` nicht manuell.**
7. **Klären Sie Nicht-OK-Transaktionszeilen, bevor Sie die Marge einer Buchung als endgültig behandeln.**
8. **Halten Sie die Richtlinie zur Zuteilung gemeinsamer Kosten zentral in `Setup_Params`.**

Das Quelldesign untersagt speziell das Hartkodieren globaler Parameter in Formeln und zentralisiert Basiswährung, FX-Kurse, Transaktionszuordnungen und Zuordnungsrichtlinie in `Setup_Params`. 

### Fehlerbehebung

#### `⚠️ X TXN DATA ERRORS` erscheint auf dem Dashboard

**Wahrscheinliche Ursachen:**

* Die Währung fehlt in der FX-Tabelle.
* `Booking ID` existiert nicht in `Booking_Master`.
* `Service Code` existiert nicht in `Service_Master`.
* Eine Quelltransaktion enthält eine ungültige Verknüpfung.

**Lösung:**

Filtern Sie die Spalte `Data Health Status` in `Raw_Transactions`, um Werte ungleich `OK` anzuzeigen.

Lösen Sie dann jedes zugrunde liegende Quelldatenproblem, anstatt die GuV-Ausgabe manuell zu ändern.

Das Executive Dashboard ist darauf ausgelegt, diesen Zustand über eine globale Zustandskarte zu melden:

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



#### Dynamische Array-Formeln geben `#SPILL!` zurück

Eine Überlauf-Formel erfordert, dass ihr Zielbereich frei bleibt.

Prüfen Sie:

* Zellen direkt unterhalb der Formel;
* Zellen rechts neben der Formel;
* manuell eingegebene Werte, die den beabsichtigten Überlaufbereich belegen;
* Restformatierungen oder kopierte Inhalte, die ein Hindernis gebildet haben.

Leeren Sie die hindernden Zellen und lassen Sie das dynamische Array erneut expandieren.

#### Profitabilität erscheint unerwartet hoch

Ändern Sie die Gewinnformel nicht sofort.

Prüfen Sie zuerst:

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

Eine verdächtig hohe Marge kann durch eine Kostentransaktion verursacht werden, die in der Verknüpfungskette gescheitert und daher aus der Berechnung ausgeschlossen wurde.

Genau darum unterscheidet das Arbeitsbuch zwischen **"Null als numerischem Berechnungszustand"** und **"Null als wirtschaftlicher Schlussfolgerung."** Ein fehlender FX-Kurs kann `$0.00` in einem numerischen Feld erzeugen und gleichzeitig `ERR: UNKNOWN_CURRENCY` im Diagnosefeld erzeugen. 

#### Container-Profitabilität erscheint über- oder unterzeichnet

Prüfen Sie drei Dinge der Reihe nach:

1. Ist die richtige `Booking ID` ausgewählt?
2. Ist die richtige `Container ID` ausgewählt?
3. Nutzt `Setup_Params!B6` die beabsichtigte Zuordnungsrichtlinie?

Unter `EQUAL_SHARE` werden gemeinsame Umsatzkosten auf Buchungsebene durch die Containeranzahl der Buchung geteilt, bevor sie zu direkten Containerkosten addiert werden.

Unter `NO_ALLOCATE` werden gemeinsame Kosten auf Buchungsebene keinen einzelnen Containern zugeordnet. 

Der Unterschied ist wesentlich, weil die Zuweisung der vollen gemeinsamen Kosten auf Buchungsebene zu jedem Container dieselbe wirtschaftliche Kost duplizieren würde. 

### Grenzen der Umsetzung

Dieses Arbeitsbuch ist absichtlich als **leichte analytische Kontrollebene** konzipiert, nicht als Ersatz für eine Buchhaltungsplattform oder ein Transportmanagementsystem.

Es ist am stärksten, wenn:

* betriebliche und finanzielle Daten bereits in Tabellen oder Exporten existieren;
* die zentrale Analyseeinheit eine Buchung oder Sendung ist;
* das Management auftragsbezogene Profitabilität benötigt;
* Dienstleistungen und Gebühren buchungsübergreifend verglichen werden müssen;
* mehrere Währungen eine konsistente Berichtsbasis benötigen;
* gemeinsame Kosten eine explizite Zuordnungsregel erfordern;
* Nutzer transparente Formeln statt opaker Automatisierung benötigen.

Es ist nicht dafür ausgelegt, zu bieten:

* transaktionale Nebenläufigkeit für mehrere Nutzer;
* ERP-grade Berechtigungen;
* automatisierte Bankabstimmung;
* automatische Frachtführer-Rechnungserfassung;
* Fremdschlüssel-Erzwingung auf Datenbankebene;
* unternehmensweite Workflow-Orchestrierung.

Der Wert des Arbeitsbuchs liegt daher nicht in der Anzahl seiner Blätter. Es ist die kontrollierte analytische Kette, die **Buchung → Transaktion → Klassifizierung → Währungsumrechnung → validierte Aggregation → Profitabilität → Drill-down** verbindet.

### Analytisches Kontrollprinzip

Die wichtigste Implementierungsregel lässt sich so zusammenfassen:

```text
Never let a broken data relationship
look like a valid financial result.
```

Eine konventionelle Tabelle könnte zulassen:

```text
Missing FX
    ↓
0 USD
    ↓
SUMIFS
    ↓
Higher Profit
```

Dieses Arbeitsbuch macht den Zustand stattdessen explizit:

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

Diese Unterscheidung ist die Grundlage des Zuverlässigkeitsmodells der Job Costing Engine. Die Architektur erkennt ausdrücklich, dass `SUMIFS` numerische Werte sicher aggregieren kann, während Text klammheimlich ignoriert wird — daher dürfen Diagnosezustände niemals direkt in numerische Berechnungsspalten eingebettet werden. 

### Empfohlene Einführungsreihenfolge

Für eine neue Arbeitsmappenimplementierung ist die sicherste Reihenfolge:

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

Das Ergebnis ist ein wiederholbarer Ablauf und keine einmalige Tabellenkalkulation: Legen Sie die Referenzdaten einmal an, hängen Sie neue betriebliche Transaktionen an, klären Sie Ausnahmen und lassen Sie Berechnungs- und Analyseebene aus demselben zugrunde liegenden Datenmodell aktualisieren. 

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Abschließende Architekturanmerkungen

Das Arbeitsbuch ist absichtlich um ein **einziges Profitabilitätsmodul auf Buchungsebene** herum gebaut, nicht um eine Sammlung zusammenhangloser Rechner.

Die Analysehierarchie ist:

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

Diese Struktur hält die Buchung als zentrale wirtschaftliche Einheit und erlaubt Nutzern zugleich, nach unten in Dienstleistungen und Container oder nach oben in die buchungsübergreifende Profitabilität zu bohren. 

Die Implementierung erkennt zudem ausdrücklich drei mehrstufige Nachschlagketten:

1. **Transaktion → Finanzielle Behandlung → FX → USD-Äquivalent → Buchungs-GuV**
2. **Buchung → Containeranzahl → Richtlinie für gemeinsame Kosten → Zuordnung gemeinsamer Kosten → Containeranalyse**
3. **Dienstleistungscode → Service Master → Dienstleistungskategorie → Dienstleistungsprofitabilität**

Diese Ketten werden validiert, bevor die Analyseausgaben als produktionsreif gelten. 

### Wovor das Instrument schützt

Das zentrale Designprinzip ist nicht bloß Automatisierung. Es ist, **zu verhindern, dass eine gebrochene Eingabebeziehung sich als gültige finanzielle Schlussfolgerung ausgibt**.

| Fehlerfall                                              | Schutzmechanismus                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Unbekannte Währung                                     | FX fällt auf `0`, während ein separater Diagnosezustand den fehlenden Kurs meldet |
| Unbekannter Transaktionstyp                                     | Konservativer `COGS`-Rückfall verhindert versehentliche Gewinninflation              |
| Ungültige Buchung                                      | `ERR: INVALID_BOOKING`                                                         |
| Ungültiger Dienstleistungscode                                      | `ERR: INVALID_SERVICE`                                                         |
| Gebrochene Transaktionskette                             | Nicht-`OK`-Zeilen sind von der GuV-Aggregation ausgeschlossen                                |
| Gemeinkost über Container dupliziert             | Explizite Zuordnungsrichtlinie und Nenner aus Containeranzahl                     |
| Nullerlöse                                         | Margenberechnung liefert `0` statt `#DIV/0!`                            |
| Diagnosetext, der Finanzberechnungen verunreinigt | Numerische Berechnungsspalten und Diagnosespalten bleiben getrennt             |

Die Rückfallmatrix der Implementierung weist speziell einen `1.0`-FX-Rückfall zurück, weil dieser einen unbekannten Fremdwährungsbetrag in einen unplausibel großen USD-Betrag verwandeln könnte. 

### Empfohlenes Nutzungsmuster

Für den laufenden Betrieb soll sich das Arbeitsbuch wie ein **aktualisierbares Betriebsmodell** verhalten, nicht wie ein einmaliger Bericht.

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

Das macht das Arbeitsbuch nützlich für wiederkehrende Fragen wie:

* Welche Buchungen sind tatsächlich profitabel?
* Welche Dienstleistungen erzeugen die stärksten Margen?
* Welche Sendungskosten treiben einen unerwarteten Verlust?
* Welche Kosten auf Buchungsebene müssen auf Container verteilt werden?
* Sind die ausgewiesenen Margen vertrauenswürdig, oder verbergen ungeklärte Quelldatenprobleme Kosten?
* Wo sollten sich Preisgestaltung, Lieferantenverhandlung oder betriebliche Überprüfung als Nächstes konzentrieren?

Der Quell-SOP folgt derselben Reihenfolge: Stammdaten anlegen, Finanztransaktionen erfassen, `Data Health Status` prüfen und dann die Profitabilitäts-Dashboards zur Überprüfung nutzen. 

### Abschließendes Designprinzip

Das Arbeitsbuch versucht nicht, die Finanzanalyse einfacher aussehen zu lassen, indem es ihre Unsicherheit verbirgt.

Stattdessen macht es die Unsicherheit sichtbar.

Eine Buchung mit berechneter Marge wird nicht automatisch als vertrauenswürdige Buchung behandelt.

Eine **saubere Buchung** bedeutet:

```text
Valid Booking
+ Valid Service
+ Valid Currency / FX
+ Valid Transaction Classification
+ Healthy Transaction Chain
= Profitability Result That Can Be Reviewed
```

Diese Unterscheidung ist der Kern der Implementierung.

</details>

## Weitere Werkzeuge dieser Reihe

Eine Sammlung leichter Excel-Entscheidungsunterstützungs-Werkzeuge für Betriebssteuerung, Profitabilitätsanalyse, Bestandsabstimmung, Personalplanung und andere Geschäftsabläufe.

* **Bestands- & Abstimmungswerkzeuge** — transaktionsgetriebene Bestands- und Varianzanalyse.
* **Kosten- & Profitabilitätswerkzeuge** — Betriebskostenkalkulation und Stückkostenökonomie-Modelle.
* **Personalplanungswerkzeuge** — Lohnabrechnung, Kapazität und jährliche Personalplanung.

## Lizenz

Dieses Projekt wird unter der **Apache License 2.0** veröffentlicht.

Sie dürfen das Werk gemäß den Bedingungen der Apache License 2.0 nutzen, verändern, verbreiten und darauf aufbauen.
