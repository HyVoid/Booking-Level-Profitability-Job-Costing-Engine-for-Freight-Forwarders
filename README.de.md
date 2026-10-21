[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Instrument für Profitabilität und Kostenzuordnung auf Buchungsebene für Speditionen

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Decision%20Support-2251FF.svg)](#)

**Sehen Sie den tatsächlichen Gewinn jeder Speditionsbuchung — Umsatzerlöse, Umsatzkosten, Bankgebühren, Einlagen, Profitabilität auf Dienstebene und Containerkosten — ohne die Analyse manuell neu aufzubauen.**

**Keine Registrierung. Keine Installation. Kostenlos in Ihrem Browser.**

Testen Sie die Browserversion kostenlos. Wenn Sie die Excel-Version benötigen, können Sie sie mit einer 30-tägigen Geld-zurück-Garantie ohne Rückfragen erwerben.
>
> 🌐 **Im Browser öffnen** → [hier](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)
> 📥 **Excel herunterladen** → [Kauflink](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)
>
> Derselbe analytische Ablauf ist in den Formaten Browser und Excel verfügbar.


## Was Sie damit im Blick behalten

* **Umsatzerlöse vs. Umsatzkosten vs. Bankgebühren pro Buchung** — damit die Profitabilität auf Sendungsebene sichtbar wird und nicht nur auf Unternehmensebene.
* **Nettogewinn und Gewinnmarge für jede Buchung** — damit Aufträge mit geringer Marge oder Verlustaufträge erkannt werden, bevor sie in aggregierten Finanzberichten verschwinden.
* **Profitabilität nach Dienstleistung oder Gebühr** — zeigt, ob Seefracht, Inspektion, Versicherung, Dokumentation, Koordination oder andere Dienstleistungslinien tatsächlich zum Gewinn beitragen.
* **Kostenexponierung auf Containerebene** — Trennung direkter Containerkosten von gemeinsamen Kosten auf Buchungsebene, wenn eine Sendung mehrere Container enthält.
* **Fremdwährungstransaktionen, auf eine gemeinsame USD-Basis umgerechnet** — damit Erlös- und Kostenzeilen mit gemischten Währungen konsistent verglichen werden können.
* **Datenintegritäts-Ausnahmen, bevor sie die GuV verunreinigen** — Erkennung ungültiger Buchungen, ungültiger Dienstleistungscodes und fehlender Wechselkurse, anstatt kaputte Daten stillschweigend als gültige Zahlen zu behandeln.

## Schnellstart-Ablauf

1. **Legen Sie die wichtigsten Parameter fest.**
   Konfigurieren Sie die Basiswährung, die Referenzwechselkurse, die Zuordnung der Transaktionstypen und die Zuteilungsrichtlinie für Gemeinkosten in `Setup_Params`. Dies ist die Steuerungsebene der Arbeitsmappe.

2. **Importieren Sie vorhandene Daten.**
   Legen Sie Buchungs- und Containerdatensätze an, definieren Sie den Dienstleistungskatalog und fügen Sie Finanztransaktionen in `Raw_Transactions` ein oder laden Sie sie dort. Bestehende Buchhaltungsexporte, Lieferantenkostenaufzeichnungen, Kundenrechnungen oder Tabellendaten können zur Transaktionsquelle werden.

3. **Erhalten Sie sofort Ergebnisse.**
   Sobald die Quelldaten gefüllt sind, rechnet das Kalkulationsmodul Währungen automatisch um, klassifiziert Transaktionen, prüft die Verknüpfungsintegrität und aggregiert gültige Finanzzeilen zu einer GuV auf Buchungsebene.

4. **Pflegen Sie durch periodische Aktualisierung.**
   Fügen Sie neue Buchungen, Container, Dienstleistungen und Transaktionen hinzu, während der Betrieb fortschreitet. Die Analyseblätter aktualisieren sich aus den zugrunde liegenden Stamm- und Transaktionsdaten, anstatt für jede Sendung einen neuen Rechner zu erfordern.

**Legen Sie die Steuerungsparameter fest. Fügen Sie die Betriebsdaten ein. Erhalten Sie die buchungsbezogene Analyse. Aktualisieren Sie, wenn sich das Geschäft ändert.**

## Warum ich dies entwickelt habe

Die Profitabilität im Speditionsgewerbe ist oft schwerer zu erkennen, als es aussieht.

Eine Buchung kann Kundenerlöse, Seefracht, Ursprungsinspektion, Frachtversicherung, Dokumentation, Koordinationsgebühren, Lieferantenkosten, Bankgebühren, Einlagen, mehrere Währungen und mehrere Container enthalten. Diese Datensätze liegen häufig in verschiedenen Betriebs- oder Buchhaltungsexporten.

Das resultierende Versagen ist nicht notwendigerweise schwaches finanzielles Urteilsvermögen. Es ist oft eine **gebrochene analytische Kette**.

Eine Buchung kann profitabel aussehen, weil eine Lieferantenkost nie mit der Buchung verknüpft wurde. Eine Fremdwährungstransaktion kann entfallen, weil ihr Wechselkurs nicht konfiguriert wurde. Eine gemeinsame Kost auf Buchungsebene kann falsch gezählt werden, wenn in einzelne Container hineingebohrt wird.

Diese Arbeitsmappe behandelt diese Fehler als Teil des analytischen Problems.

Sehen Sie beispielsweise nicht:

```text
Booking Revenue       $8,500
Reported COGS         $5,200
Apparent Profit       $3,300
Margin                   38.8%
```

… sondern der Ablauf kann aufdecken, dass der Transaktionsdatensatz eine nicht verknüpfte Lieferantenkost und eine unbekannte Währung enthält. Die Buchung wird dann markiert, anstatt mit einer sauberen Marge von 38,8 % präsentiert zu werden.

Das Ziel ist nicht ein weiteres Dashboard. Es ist ein **produktisiertes Rahmenwerk** zur Umwandlung transaktionsbasierter Speditionsdaten in eine verteidigbare Profitabilitätsansicht auf Buchungsebene.

Die Implementierung trennt numerische Berechnungsfelder explizit von Diagnosetext. Ein fehlender Wechselkurs kann daher für die Aggregation numerisch sicher bleiben und gleichzeitig eine `ERR: UNKNOWN_CURRENCY`-Warnung erzeugen. Dies verhindert, dass ein Fehlerzustand zu einem scheinbar gültigen Finanzergebnis wird. 

## Häufige Speditionsprobleme, die dies löst

| Problem                                        | Ohne dieses Werkzeug                                                                                                  | Mit diesem Werkzeug                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Gewinn nur aggregiert sichtbar**        | Unternehmensweite Erlöse und Aufwendungen verdecken, welche einzelnen Sendungen Geld verdienen oder verlieren.                          | Jede Buchung erhält eine eigene Ansicht für Erlöse, Umsatzkosten, Bankgebühren, Nettogewinn und Marge.                              |
| **Kosten kommen in mehreren Währungen an**        | Die Währungsumrechnung erfolgt manuell oder inkonsistent, was den Buchungsvergleich unzuverlässig macht.                 | Die Transaktionen nutzen eine kontrollierte Währungsabfrage mit expliziter Ausnahme bei fehlendem Kurs.                                  |
| **Eine Buchung enthält mehrere Container**     | Gemeinsame Kosten können verdoppelt, ignoriert oder inkonsistent zugeordnet werden, wenn die Containerökonomie analysiert wird.            | Gemeinsame Kosten auf Buchungsebene können nach einer definierten Richtlinie auf die Containeranzahl verteilt werden.                    |
| **Dienstleistungsprofitabilität unklar**           | Die Erlöse sind ggf. nach Gebühr bekannt, die zugehörige Kost und Marge sind jedoch sendungsübergreifend schwer abzugleichen. | Die Aggregation auf Dienstebene legt die Profitabilität über Buchungen hinweg offen.                                                  |
| **Fehlerhafte Stammdatenverknüpfungen verzerren die GuV unbemerkt** | Ungültige Buchungs-IDs, Dienstleistungscodes oder Währungen können zu fehlenden Kosten oder irreführenden Nullwerten werden.              | `Data Health Status` erkennt gebrochene Abfrageketten, und das Kalkulationsmodul aggregiert nur gesunde Transaktionen. |

## Für wen sich dies eignet

Dieses Werkzeug wurde für **kleine und mittlere Speditionen, Speditionsbetreiber, Finanzteams, Kalkulationsanalysten und Inhaber** entwickelt, die die Profitabilität auf Buchungs- oder Sendungsebene verstehen müssen, anstatt sich auf eine allgemeine Unternehmens-GuV zu verlassen.

Es passt zu Betrieben, in denen Umsatz- und Kostendaten bereits in Tabellen oder Buchhaltungsexporten existieren, das Geschäft aber eine strukturierte Möglichkeit braucht, sie zu verbinden.

Es ist besonders nützlich, wenn eine Buchung mehrere Dienstleistungen, Lieferanten, Währungen, Bankbelastungen und Container enthalten kann.

Es ist **nicht** dafür gedacht, ein TMS, ERP, eine Buchhaltungsplattform oder ein hochparalleles Transaktionssystem zu ersetzen. Es ist eine leichte analytische Ausführungsschicht.

**Für die Browserversion ist keine Tabellenkalkulations-Expertise erforderlich. Öffnen Sie sie und beginnen Sie sofort, den Ablauf zu prüfen.**

## Über mich

Ich baue leichte Tracker und Entscheidungsunterstützungs-Werkzeuge für Situationen, in denen es zu viele bewegliche Teile gibt, um sie im Kopf zu behalten, aber nicht genug Komplexität, um eine vollständige Unternehmensimplementierung zu rechtfertigen.

Die zentrale Frage ist einfach:

> **Welche Informationen müssen an einem Ort sein, um die nächste Entscheidung sicher zu treffen?**

Diese Kostenzuordnung auf Buchungsebene wendet diesen Ansatz auf das Speditionsgewerbe an. Anstatt Profitabilität als abschließenden Buchhaltungsbericht zu behandeln, verbindet sie die Betriebseinheit — die **Buchung** — mit ihren Transaktionen, Dienstleistungen, Containern, Kosten und dem Finanzergebnis.

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitarbeiter</summary>

### Arbeitsmappen-Architektur

Die Arbeitsmappe ist um vier funktionale Ebenen herum organisiert: **Regeln und Parameter → Stammdaten → Transaktionseingabe → Berechnung und Analyseausgabe**.

Das Design umfasst 11 Blätter:

| Ebene              | Blatt                   | Rolle                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Regeln & Parameter | `Instructions`          | Betriebsanweisungen, Dateneingaberegeln und Geschäftsdefinitionen               |
| Regeln & Parameter | `Setup_Params`          | Basiswährung, Wechselkurse, Transaktionszuordnungen und Zuteilungsrichtlinie für Gemeinkosten |
| Stammdaten        | `Booking_Master`        | Buchungsindex, Kunde, Status und Containeranzahl                             |
| Stammdaten        | `Container_Master`      | 1:N-Beziehung zwischen Buchung und Container                                            |
| Stammdaten        | `Service_Master`        | Standard-Dienstleistungscode, Dienstleistungsname und Kategorie                                |
| Transaktionseingabe  | `Raw_Transactions`      | Einheitliches Finanztransaktionsregister plus Diagnosen zur Datenintegrität                |
| Kalkulationsmodul | `Job_Costing_Engine`    | Aggregation von Erlösen, Umsatzkosten, Bankgebühren, Gewinn, Marge und Einlagen auf Buchungsebene  |
| Analyse            | `Booking_PL`            | GuV einer einzelnen Buchung und Aufschlüsselung auf Dienstebene                                  |
| Analyse            | `Container_Analysis`    | Direkte Containerkosten und zugeteilte gemeinsame Kosten auf Containerebene                                |
| Analyse            | `Service_Profitability` | Profitabilität über Buchungen hinweg nach Dienstleistung                                           |
| Managementausgabe   | `Executive_Dashboard`   | Globale KPIs, Profitabilitätsrankings und Warnungen zur Datenintegrität                    |

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

Die Quellarchitektur nennt drei wichtige mehrstufige Abfrageketten: eine vierstufige Währungs-/Finanzbehandlungskette, eine vierstufige Gemeinkosten-/Container-Bohrungskette und eine dreistufige Dienstleistungsklassifizierungskette. 

Die kritische Designregel ist, dass **Berechnungswerte und Diagnosezustände getrennt bleiben**. `USD Equivalent` bleibt numerisch, während `Data Health Status` Fehler wie `ERR: UNKNOWN_CURRENCY` trägt. Dies wahrt die `SUMIFS`-Kompatibilität und verhindert zugleich, dass kaputte Transaktionen in die GuV-Engine gelangen. 

### Drei Fallen, in die selbst erfahrene Speditionsbetreiber tappen

#### Falle 1 — Einen fehlenden Wechselkurs als gültigen Betrag behandeln

**1. Entscheidung:** Eine Buchung scheint eine bestimmte Kost und Marge zu haben.

**2. Verborgener Fehler:** Eine Lieferantentransaktion ist in einer Währung denominieriert, die in der Referenz-Wechselkurstabelle nicht konfiguriert ist.

**3. Auswirkung der Entscheidung:** Wird der fehlende Kurs irrtümlich als `1.0` behandelt, kann ein Fremdbetrag wie `50,000` zu `$50,000 USD` werden und das Buchungsergebnis radikal verzerren.

**4. Warum es falsch ist:** Ein fehlender Wechselkurs ist ein Versagen der Datenintegrität, kein wirtschaftlicher Wechselkurs.

**5. Richtiger Ansatz:** Geben Sie für das Berechnungsfeld einen neutralen Zahlenwert von `0` zurück und melden Sie `ERR: UNKNOWN_CURRENCY` separat.

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

Die wichtige Regel lautet: **eine unbekannte Währung niemals standardmäßig auf 1.0 setzen**. 

</details>

#### Falle 2 — Die GuV einer Buchung lesen, bevor die Datenintegrität geprüft ist

**1. Entscheidung:** Eine Buchung mit Erlösen von `$8,500` und Umsatzkosten von `$5,200` wird als Gewinn von `$3,300` betrachtet.

**2. Verborgener Fehler:** Eine oder mehrere Quelltransaktionen haben ungültige Buchungs- oder Dienstverknüpfungen oder eine unaufgelöste Währung.

**3. Auswirkung der Entscheidung:** Die scheinbare Marge kann überzeichnet sein, weil eine Kostenzeile klammheimlich nicht in die Aggregation gelangt ist.

**4. Warum es falsch ist:** Ein rechnerisch korrektes `SUMIFS`-Ergebnis kann wirtschaftlich falsch sein, wenn die Quellzeilen unvollständig sind.

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

Derselbe Integritätsfilter wird auf Umsatzkosten, Bankgebühren und Einlagen angewendet. 

</details>

#### Falle 3 — Gemeinkosten der Buchungsebene direkt jedem Container zuordnen

**1. Entscheidung:** Eine Buchung mit zwei Containern benötigt eine Profitabilitätsansicht auf Containerebene.

**2. Verborgener Fehler:** Eine Umsatzkostenzeile auf Buchungsebene gehört zur Sendung als Ganzes und nicht zu einem bestimmten Container.

**3. Auswirkung der Entscheidung:** Die vollen Gemeinkosten beiden Containern zuzuordnen verdoppelt die scheinbare Kost.

**4. Warum es falsch ist:** Die wirtschaftliche Zugehörigkeit der Kost liegt auf Buchungsebene, während die Analyse eine kontrollierte Zuteilungsregel erfordert.

**5. Richtiger Ansatz:** Verwenden Sie die konfigurierte Richtlinie `EQUAL_SHARE` und teilen Sie die gemeinsamen Umsatzkosten durch die Containeranzahl der Buchung.

**6. Korrigierte Entscheidung:** Jeder Container erhält seine direkten Kosten plus seinen zugeteilten Anteil an der Gemeinkost, wobei die Summe auf Buchungsebene erhalten bleibt.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

Die Arbeitsmappe trennt direkte Containerkosten ausdrücklich von gemeinsamen Kosten auf Buchungsebene und verwendet einen sicheren Nenner aus der Containeranzahl. 

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

`Setup_Params!B6` steuert, ob die Gemeinkost per `EQUAL_SHARE` verteilt oder per `NO_ALLOCATE` unverteilt belassen wird. 

</details>

### Beispielszenario

Betrachten Sie eine Speditionsbuchung mit den folgenden gültigen Transaktionen:

| Position                      | Typ     | Ursprungsbetrag | Währung | USD-Äquivalent |
| ------------------------- | -------- | -------------: | -------- | -------------: |
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

Nehmen Sie nun an, dass eine zusätzliche Lieferantentransaktion in einer nicht konfigurierten Währung eingegeben wird. Das System fügt die Transaktion **nicht** stillschweigend den Umsatzkosten hinzu. Ihr angewandter Wechselkurs wird `0`, ihre USD-Berechnung bleibt numerisch, und das Diagnosefeld meldet `ERR: UNKNOWN_CURRENCY`. Die Buchung erhält eine Integritätswarnung, anstatt als sauber präsentiert zu werden.

Die betriebliche Empfehlung ändert sich entsprechend:

> **Verwenden Sie die Marge von 55,34 % nicht als endgültige Profitabilitätszahl, bis die unaufgelöste Transaktion korrigiert ist.**

Dies ist der zentrale Unterschied zwischen einem Profitabilitätsrechner und einem kontrollierten Kostenzuordnungs-Ablauf: Das Ergebnis geht mit Belegen darüber einher, ob die zugrunde liegenden Daten vollständig genug sind, um ihnen zu vertrauen.

### Formelreferenz

<details>
<summary>Booking Master — Containeranzahl</summary>

**Zweck:** Ermitteln Sie die Anzahl der einer Buchung zugeordneten Container und verhindern Sie Teilungs-durch-Null-Fehler.

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

Ist noch kein Container eingegeben worden, fällt der Nenner auf `1` zurück. Dies ist eine rechnerische Sicherung, während die Bedingung des fehlenden Containers betrieblich weiterhin als Datenqualitätsproblem behandelt werden sollte. 

</details>

<details>
<summary>Raw Transactions — Angewandter Wechselkurs</summary>

**Zweck:** Priorisieren Sie einen manuellen Wechselkurs und rufen Sie andernfalls den konfigurierten Währungskurs ab.

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

**Zweck:** Rechnen Sie jeden ursprünglichen Transaktionsbetrag in die USD-Basiswährung der Arbeitsmappe um und behalten Sie dabei ein numerisches Ergebnis.

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

Es ist wichtig, diese Spalte numerisch zu halten, weil nachgelagerte `SUMIFS`-Berechnungen niemals Diagnosetext wie `"INVALID"` anstelle einer Zahl erhalten sollten. 

</details>

<details>
<summary>Raw Transactions — Datenintegritätsstatus</summary>

**Zweck:** Prüfen Sie Buchungs-, Dienstleistungs- und Wechselkursverknüpfung unabhängig von den finanziellen Berechnungsspalten.

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

Die Diagnoseebene ist absichtlich von den numerischen Berechnungsfeldern getrennt. 

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
| `Currency`             | Muss einen gültigen konfigurierten Wechselkurs oder positiven manuellen Wechselkurs haben | Angewandter Kurs wird `0`; Diagnose meldet `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Positiver Wert übersteuert den Referenzwechselkurs                  | Ungültiger/nicht positiver Wert fällt auf konfigurierten Kurs zurück                             |
| `Transaction Type`     | Sollte der `Setup_Params`-Zuordnung entsprechen                             | Unbekannter Typ fällt konservativ auf `COGS` zurück                                   |
| `USD Equivalent`       | Muss numerisch bleiben                                             | Diagnosetext darf niemals in das numerische Aggregationsfeld geschrieben werden           |
| `Data Health Status`   | Muss für finanzielle Aggregation `OK` sein                          | Nicht-OK-Zeilen sind von der Buchungs-GuV ausgeschlossen                                      |
| `Container Count`      | Darf als Zuteilungsnenner nicht Null werden        | Fällt auf `1` zurück, um `#DIV/0!` zu verhindern                                             |
| Gemeinkostenzuteilung | Gesteuert durch `Setup_Params!B6`                                 | `EQUAL_SHARE` verteilt nach Containeranzahl; `NO_ALLOCATE` belässt nur direkte Kosten |
| Buchungsprofitabilität  | Erlöse von Null dürfen keinen Teilungsfehler erzeugen               | Marge liefert `0`                                                                 |
| Management-Datenintegrität  | Jeder nicht leere Status ungleich `OK` wird gezählt                 | Dashboard zeigt eine Warnung an, statt einen uneingeschränkt sauberen Zustand darzustellen                      |

Die Quell-Kreuzvalidierung bestätigt die Abdeckung der Kern Buchungs-, Container-, Dienstleistungs- und Transaktionseingaben sowie der Ausgaben USD-Äquivalent, Nettogewinn, Marge und zugeteilte Kost. Sie prüft zudem speziell die Trennung zwischen Diagnosetext und numerischen `SUMIFS`-Feldern. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Kreuzvalidierung und Einsatzbereitschaft

Die Arbeitsmappenarchitektur ist darauf ausgelegt, die analytische Kette **vor** dem Management-Vertrauen auf die resultierende GuV zu prüfen.

Die Quellimplementierung prüft ausdrücklich die Transaktionstyp-Zuordnungskette, die Wechselkurs-Abfragekette, die Service-Master-Verknüpfung, die Gemeinkosten-Zuteilungskette und die Kompatibilität zwischen Diagnosetext und numerischen Aggregationsfeldern. 

| Validierungsdimension         | Was geprüft wird                                                                  | Erwartetes Ergebnis                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Buchungsverknüpfung**          | Jede `Booking ID` einer Transaktion existiert in `Booking_Master`                        | Ungültige Zeilen erhalten einen Fehlerzustand                      |
| **Dienstverknüpfung**          | Jeder `Service Code` einer Transaktion existiert in `Service_Master`                      | Ungültige Zeilen sind von der GuV ausgeschlossen                       |
| **Wechselkursabdeckung**              | Jede Transaktion hat entweder einen gültigen manuellen Wechselkurs oder einen konfigurierten Referenzkurs | Unbekannte Währungen lösen eine Integritätswarnung aus              |
| **Finanzielle Klassifizierung** | Transaktionstyp wird auf Revenue / COGS / Bank Fee / Deposit abgebildet                     | Unbekannte Typen nutzen den konservativen COGS-Rückfall         |
| **Numerische Aggregation**      | `USD Equivalent` bleibt unter allen Bedingungen numerisch                                    | `SUMIFS` stößt nicht auf Diagnosetext              |
| **Integritätsgesteuerte Aggregation** | Die GuV enthält nur `Data Health Status = "OK"`                                    | Kaputte Quellzeilen können nicht klammheimlich in den ausgewiesenen Gewinn gelangen |
| **Containerzuteilung**     | Gemeinkosten auf Buchungsebene nutzen die konfigurierte Zuteilungsrichtlinie                  | Keine wiederholte Vollkostenzuordnung über Container hinweg       |
| **Nullerlös-Schutz**  | Die Margenberechnung handhabt Revenue = 0                                    | Kein `#DIV/0!`                                             |
| **Management-Überwachung**     | Globale Transaktionsfehler werden separat gezählt                                 | Dashboard signalisiert ungeklärte Quelldatenprobleme          |

Die Kreuzvalidierungsmatrix der Implementierung besagt, dass die Kern-Eingabefelder — Buchung, Container, Dienstleistung und Transaktionsdaten — und die wesentlichen Ausgaben — USD-Äquivalent, Nettogewinn, Marge und zugeteilte Kost — von der Architektur abgedeckt sind. 

### Standardbetriebsablauf

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

Beginnen Sie die Finanzanalyse nicht damit, frei formulierte Dienstleistungsnamen oder Buchungskennungen direkt in Berichtsblätter zu tippen. Die Stammtabellen sind die Referenzebene für nachgelagerte Abfrageketten. 

#### 2. Finanztransaktionen erfassen

Erfassen Sie Erlöse, Lieferantenkosten, Bankgebühren, Einlagen und andere relevante Finanzaktivitäten in `Raw_Transactions`.

Jede Transaktion sollte jeweils die passenden Angaben enthalten:

* `Booking ID`
* `Container ID`, falls zutreffend
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, wenn ein transaktionsspezifischer Kurs erforderlich ist

Die Transaktionstabelle ist die einzige Quelle, die die detaillierten Finanzereignisdaten erhalten sollte. Das Kalkulationsmodul sollte nicht manuell bearbeitet werden. 

#### 3. Datenintegrität prüfen

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

Dies schafft einen Bohrungspfad von **globaler Profitabilität → Buchung → Dienstleistung → Container → Transaktion**, anstatt jede Frage aus einem einzigen Übersichts-Dashboard beantworten zu müssen.

### Regeln zur Datenpflege

Die Architektur stützt sich auf kontrollierte Stammdaten, weil Excel nicht die gleiche harte Fremdschlüssel-Erzwingung bietet wie eine Datenbank- oder ERP-Plattform.

Die wichtigsten Pflegeregeln sind:

1. **Überschreiben Sie keine formelgenerierten Felder.**
2. **Tippen Sie dort, wo ein Dienstleistungscode stehen sollte, keine Dienstleistungsnamen von Hand ein.**
3. **Führen Sie keine neue Währung ein, ohne ihren Wechselkurs vorher zu `Setup_Params` hinzuzufügen.**
4. **Verwenden Sie `1.0` nicht als Rückfall für fehlende Wechselkurse.**
5. **Schreiben Sie keinen Fehlertext in numerische Aggregationsspalten.**
6. **Bearbeiten Sie die Ausgabe von `Job_Costing_Engine` nicht manuell.**
7. **Klären Sie Nicht-OK-Transaktionszeilen, bevor Sie die Marge einer Buchung als endgültig behandeln.**
8. **Halten Sie die Zuteilungsrichtlinie für Gemeinkosten zentral in `Setup_Params`.**

Das Quelldesign untersagt speziell das hartcodierte Einbetten globaler Parameter in Formeln und zentralisiert Basiswährung, Wechselkurse, Transaktionszuordnungen und Zuteilungsrichtlinie in `Setup_Params`. 

### Fehlerbehebung

#### `⚠️ X TXN DATA ERRORS` erscheint im Dashboard

**Mögliche Ursachen:**

* Die Währung fehlt in der Wechselkurstabelle.
* `Booking ID` existiert nicht in `Booking_Master`.
* `Service Code` existiert nicht in `Service_Master`.
* Eine Quelltransaktion enthält eine ungültige Verknüpfung.

**Lösung:**

Filtern Sie die Spalte `Data Health Status` in `Raw_Transactions`, um Werte ungleich `OK` anzuzeigen.

Klären Sie dann jedes zugrunde liegende Quelldatenproblem, anstatt die GuV-Ausgabe manuell zu ändern.

Das Executive Dashboard ist darauf ausgelegt, diesen Zustand über eine globale Integritätskarte zu melden:

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

Eine Überlaufformel erfordert, dass ihr Zielbereich frei bleibt.

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

Genau darum unterscheidet die Arbeitsmappe zwischen **„Null als numerischer Berechnungszustand“** und **„Null als wirtschaftliche Schlussfolgerung“.** Ein fehlender Wechselkurs kann `$0.00` in einem numerischen Feld erzeugen und gleichzeitig `ERR: UNKNOWN_CURRENCY` im Diagnosefeld erzeugen. 

#### Container-Profitabilität erscheint über- oder unterzeichnet

Prüfen Sie drei Dinge der Reihe nach:

1. Ist die richtige `Booking ID` ausgewählt?
2. Ist die richtige `Container ID` ausgewählt?
3. Nutzt `Setup_Params!B6` die beabsichtigte Zuteilungsrichtlinie?

Unter `EQUAL_SHARE` werden gemeinsame Umsatzkosten auf Buchungsebene durch die Containeranzahl der Buchung geteilt, bevor sie zu den direkten Containerkosten addiert werden.

Unter `NO_ALLOCATE` werden gemeinsame Kosten auf Buchungsebene keinen einzelnen Containern zugeordnet.

Der Unterschied ist wesentlich, weil die Zuweisung der vollen Gemeinkost auf Buchungsebene zu jedem Container dieselbe wirtschaftliche Kost duplizieren würde. 

### Grenzen der Umsetzung

Diese Arbeitsmappe ist absichtlich als **leichte analytische Kontrollebene** konzipiert, nicht als Ersatz für eine Buchhaltungsplattform oder ein Transportmanagementsystem.

Sie ist am stärksten, wenn:

* betriebliche und finanzielle Daten bereits in Tabellen oder Exporten existieren;
* die zentrale Analyseeinheit eine Buchung oder Sendung ist;
* das Management auftragsbezogene Profitabilität benötigt;
* Dienstleistungen und Gebühren buchungsübergreifend verglichen werden müssen;
* mehrere Währungen eine konsistente Berichtsbasis benötigen;
* Gemeinkosten eine explizite Zuteilungsregel erfordern;
* Nutzer transparente Formeln statt opaker Automatisierung benötigen.

Sie ist nicht dafür ausgelegt, zu bieten:

* transaktionale Nebenläufigkeit für mehrere Nutzer;
* ERP-grade Berechtigungen;
* automatisierte Bankabstimmung;
* automatische Frachtführer-Rechnungserfassung;
* Fremdschlüssel-Erzwingung auf Datenbankebene;
* unternehmensweite Workflow-Orchestrierung.

Der Wert der Arbeitsmappe liegt daher nicht in der Anzahl ihrer Blätter. Es ist die kontrollierte analytische Kette, die **Buchung → Transaktion → Klassifizierung → Währungsumrechnung → validierte Aggregation → Profitabilität → Bohrung** verbindet.

### Analytisches Kontrollprinzip

Die wichtigste Implementierungsregel lässt sich so zusammenfassen:

```text
Never let a broken data relationship
look like a valid financial result.
```

Ein konventionelles Tabellenblatt könnte zulassen:

```text
Missing FX
    ↓
0 USD
    ↓
SUMIFS
    ↓
Higher Profit
```

Diese Arbeitsmappe macht den Zustand stattdessen explizit:

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

Die Arbeitsmappe ist absichtlich um ein **einziges Profitabilitätsmodul auf Buchungsebene** herum gebaut, nicht um eine Sammlung zusammenhangloser Rechner.

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

Die Implementierung erkennt zudem ausdrücklich drei mehrstufige Abfrageketten:

1. **Transaktion → Finanzielle Behandlung → Wechselkurs → USD-Äquivalent → Buchungs-GuV**
2. **Buchung → Containeranzahl → Gemeinkostenrichtlinie → Gemeinkostenzuteilung → Containeranalyse**
3. **Dienstleistungscode → Service Master → Dienstleistungskategorie → Dienstleistungsprofitabilität**

Diese Ketten werden validiert, bevor die Analyseausgaben als produktionsreif gelten. 

### Wovor das Instrument schützt

Das zentrale Designprinzip ist nicht bloß Automatisierung. Es ist, **zu verhindern, dass eine gebrochene Eingabebeziehung sich als gültige finanzielle Schlussfolgerung ausgibt**.

| Fehlerfall                                              | Schutzmechanismus                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Unbekannte Währung                                     | Kurs fällt auf `0`, während ein separater Diagnosezustand den fehlenden Kurs meldet |
| Unbekannter Transaktionstyp                                     | Konservativer `COGS`-Rückfall verhindert versehentliche Gewinninflation              |
| Ungültige Buchung                                      | `ERR: INVALID_BOOKING`                                                         |
| Ungültiger Dienstleistungscode                                      | `ERR: INVALID_SERVICE`                                                         |
| Gebrochene Transaktionskette                             | Nicht-`OK`-Zeilen sind von der GuV-Aggregation ausgeschlossen                                |
| Gemeinkost über Container dupliziert             | Explizite Zuteilungsrichtlinie und Nenner aus Containeranzahl                     |
| Nullerlöse                                         | Margenberechnung liefert `0` statt `#DIV/0!`                            |
| Diagnosetext, der Finanzberechnungen verunreinigt | Numerische Berechnungsspalten und Diagnosespalten bleiben getrennt             |

Die Rückfallmatrix der Implementierung weist speziell einen `1.0`-Wechselkurs-Rückfall zurück, weil dieser einen unbekannten Fremdwährungsbetrag in einen unplausibel großen USD-Betrag verwandeln könnte. 

### Empfohlenes Nutzungsmuster

Für den laufenden Betrieb soll sich die Arbeitsmappe wie ein **aktualisierbares Betriebsmodell** verhalten, nicht wie ein einmaliger Bericht.

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

Das macht die Arbeitsmappe nützlich für wiederkehrende Fragen wie:

* Welche Buchungen sind tatsächlich profitabel?
* Welche Dienstleistungen erzeugen die stärksten Margen?
* Welche Sendungskosten treiben einen unerwarteten Verlust?
* Welche Kosten auf Buchungsebene müssen auf Container verteilt werden?
* Sind die ausgewiesenen Margen vertrauenswürdig, oder verbergen ungeklärte Quelldatenprobleme Kosten?
* Wo sollten sich Preisgestaltung, Lieferantenverhandlung oder betriebliche Überprüfung als Nächstes konzentrieren?

Der Quell-SOP folgt derselben Reihenfolge: Stammdaten anlegen, Finanztransaktionen erfassen, `Data Health Status` prüfen und dann die Profitabilitäts-Dashboards zur Überprüfung nutzen. 

### Abschließendes Designprinzip

Die Arbeitsmappe versucht nicht, die Finanzanalyse einfacher aussehen zu lassen, indem sie ihre Unsicherheit verbirgt.

Stattdessen macht sie die Unsicherheit sichtbar.

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
* **Kosten- & Profitabilitätswerkzeuge** — Betriebskostenkalkulation und Unit-Economics-Modelle.
* **Personalplanungswerkzeuge** — Gehaltsabrechnung, Kapazität und jährliche Personalplanung.

## Lizenz

Dieses Projekt wird unter der **Apache License 2.0** veröffentlicht.

Sie dürfen das Werk gemäß den Bedingungen der Apache License 2.0 nutzen, verändern, verbreiten und darauf aufbauen.
