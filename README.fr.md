[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Moteur de rentabilité et d'analyse des coûts par expédition pour transitaires

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Decision%20Support-2251FF.svg)](#)

**Voyez le profit réel de chaque expédition de transit — chiffre d'affaires, coût des ventes, frais bancaires, dépôts, rentabilité par service et coût par conteneur — sans reconstruire l'analyse manuellement.**

**Aucune inscription. Aucune installation. Gratuit dans votre navigateur.**

Testez la version navigateur gratuitement. Si vous avez besoin de la version Excel, vous pouvez l'acheter avec une garantie de remboursement de 30 jours, sans question.
>
> 🌐 **Ouvrir dans le navigateur** → [ici](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)
> 📥 **Télécharger Excel** → [lien d'achat](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)
>
> Le même flux analytique est disponible aux formats navigateur et Excel.


## Ce que cet outil vous aide à suivre

* **Chiffre d'affaires vs. coût des ventes vs. frais bancaires par expédition** — afin que la rentabilité soit visible au niveau de l'envoi et pas seulement au niveau de l'entreprise.
* **Bénéfice net et marge bénéficiaire pour chaque expédition** — afin que les dossiers à faible marge ou déficitaires puissent être identifiés avant de disparaître dans les rapports financiers agrégés.
* **Rentabilité par service ou par frais** — montrant si le fret maritime, l'inspection, l'assurance, la documentation, la coordination ou d'autres lignes de service contribuent réellement au profit.
* **Exposition au coût au niveau du conteneur** — séparant les coûts directs des conteneurs des coûts partagés au niveau de l'expédition lorsqu'un envoi contient plusieurs conteneurs.
* **Transactions en devises étrangères converties sur une base commune en USD** — afin que les lignes de chiffre d'affaires et de coûts en devises mixtes puissent être comparées de manière cohérente.
* **Exceptions d'intégrité des données avant qu'elles ne contaminent le compte de résultat** — identification des expéditions invalides, des codes de service invalides et des taux de change manquants, au lieu de traiter silencieusement des données défectueuses comme des nombres valides.

## Flux de démarrage rapide

1. **Définissez les paramètres clés.**
   Configurez la devise de base, les taux de change de référence, les correspondances de types de transaction et la politique d'allocation des coûts partagés dans `Setup_Params`. C'est la couche de contrôle du classeur.

2. **Importez les données existantes.**
   Établissez les enregistrements d'expédition et de conteneur, définissez le catalogue de services, puis collez ou chargez les transactions financières dans `Raw_Transactions`. Les exports comptables existants, les enregistrements de coûts fournisseurs, les factures clients ou les données de tableur peuvent devenir la source des transactions.

3. **Obtenez des résultats instantanément.**
   Une fois les données sources renseignées, le moteur de calcul convertit automatiquement les devises, classe les transactions, vérifie l'intégrité des liens et agrège les lignes financières valides en un compte de résultat au niveau de l'expédition.

4. **Maintenez par rafraîchissement périodique.**
   Ajoutez de nouvelles expéditions, conteneurs, services et transactions au fil des opérations. Les feuilles d'analyse se mettent à jour à partir des données de base et de transaction sous-jacentes, au lieu d'exiger une nouvelle calculatrice pour chaque envoi.

**Définissez les paramètres de contrôle. Insérez les données opérationnelles. Obtenez l'analyse par expédition. Rafraîchissez lorsque l'activité change.**

## Pourquoi j'ai conçu cet outil

La rentabilité du transit est souvent plus difficile à voir qu'elle n'y paraît.

Une expédition peut contenir du chiffre d'affaires client, du fret maritime, une inspection à l'origine, une assurance fret, de la documentation, des frais de coordination, des coûts fournisseurs, des frais bancaires, des dépôts, plusieurs devises et plusieurs conteneurs. Ces enregistrements vivent fréquemment dans différents exports opérationnels ou comptables.

L'échec qui en résulte n'est pas nécessairement un mauvais jugement financier. C'est souvent une **chaîne analytique rompue**.

Une expédition peut sembler rentable parce qu'un coût fournisseur n'a jamais été lié à l'expédition. Une transaction en devise étrangère peut être omise parce que son taux de change n'a pas été configuré. Un coût partagé au niveau de l'expédition peut être mal compté lors de l'examen des conteneurs individuels.

Ce classeur traite ces échecs comme partie intégrante du problème analytique.

Par exemple, au lieu de voir :

```text
Booking Revenue       $8,500
Reported COGS         $5,200
Apparent Profit       $3,300
Margin                   38.8%
```

… le flux de travail peut révéler que le jeu de données de transactions contient un coût fournisseur non lié et une devise inconnue. L'expédition est alors signalée au lieu d'être présentée comme une marge propre de 38,8 %.

L'objectif n'est pas un tableau de bord de plus. C'est un **cadre de raisonnement industrialisé** pour transformer les données de fret au niveau transactionnel en une vision de rentabilité par expédition défendable.

L'implémentation sépare explicitement les champs de calcul numériques du texte de diagnostic. Un taux de change manquant peut donc rester numériquement sûr pour l'agrégation tout en produisant simultanément un avertissement `ERR: UNKNOWN_CURRENCY`. Cela empêche un état d'erreur de devenir un résultat financier apparemment valide. 

## Problèmes de transit courants résolus par cet outil

| Problème                                        | Sans cet outil                                                                                                  | Avec cet outil                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Le profit n'est visible qu'en agrégat**        | Le chiffre d'affaires et les charges au niveau de l'entreprise masquent les envois individuels qui gagnent ou perdent de l'argent.                          | Chaque expédition reçoit sa propre vue du chiffre d'affaires, du coût des ventes, des frais bancaires, du bénéfice net et de la marge.                              |
| **Les coûts arrivent en plusieurs devises**        | La conversion des devises est effectuée manuellement ou de manière incohérente, ce qui rend la comparaison entre expéditions peu fiable.                 | Les transactions utilisent une recherche de devises contrôlée avec une exception explicite en cas de taux manquant.                                  |
| **Une expédition contient plusieurs conteneurs**     | Les coûts partagés peuvent être dupliqués, ignorés ou attribués de manière incohérente lors de l'analyse de l'économie des conteneurs.            | Les coûts partagés au niveau de l'expédition peuvent être répartis sur le nombre de conteneurs selon une politique définie.                    |
| **La rentabilité par service est peu claire**           | Le chiffre d'affaires peut être connu par frais, mais le coût et la marge correspondants sont difficiles à rapprocher d'un envoi à l'autre. | L'agrégation au niveau du service expose la rentabilité à travers les expéditions.                                                  |
| **Des liens de données de base défectueux faussent silencieusement le compte de résultat** | Des identifiants d'expédition, des codes de service ou des devises invalides peuvent devenir des coûts manquants ou des valeurs nulles trompeuses.              | `Data Health Status` identifie les chaînes de recherche rompues et le moteur de calcul n'agrège que les transactions saines. |

## À qui s'adresse cet outil

Cet outil est conçu pour les **petits et moyens transitaires, les opérateurs de transit, les équipes financières, les analystes de calcul des coûts et les propriétaires** qui ont besoin de comprendre la rentabilité au niveau de l'expédition ou de l'envoi, plutôt que de s'appuyer sur un compte de résultat général à l'échelle de l'entreprise.

Il convient aux opérations où les enregistrements de chiffre d'affaires et de coûts existent déjà dans des tableurs ou des exports comptables, mais où l'entreprise a besoin d'une manière structurée de les relier.

Il est particulièrement utile lorsqu'une même expédition peut contenir plusieurs services, fournisseurs, devises, frais bancaires et conteneurs.

Il n'est **pas** destiné à remplacer un TMS, un ERP, une plateforme comptable ou un système transactionnel hautement concurrent. C'est une couche d'exécution analytique légère.

**Aucune expertise en tableur n'est nécessaire pour utiliser la version navigateur. Ouvrez-la et commencez immédiatement à inspecter le flux de travail.**

## À propos

Je conçois des trackers légers et des outils d'aide à la décision pour des situations où il y a trop de pièces en mouvement pour tenir dans une seule tête, mais pas assez de complexité pour justifier une implémentation d'entreprise complète.

La question centrale est simple :

> **Quelles informations doivent être réunies en un seul endroit pour prendre la prochaine décision en confiance ?**

Cette analyse des coûts par expédition applique cette approche au transit. Au lieu de traiter la rentabilité comme un rapport comptable final, elle relie l'unité opérationnelle — l'**expédition** — à ses transactions, services, conteneurs, coûts et résultat financier.

## Détails techniques

<details>
<summary>Pour les réviseurs techniques, les praticiens d'Excel et les collaborateurs</summary>

### Architecture du classeur

Le classeur est organisé autour de quatre couches fonctionnelles : **règles et paramètres → données de base → saisie des transactions → calcul et sortie analytique**.

La conception comporte 11 feuilles :

| Couche              | Feuille                   | Rôle                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Règles et paramètres | `Instructions`          | Instructions d'utilisation, règles de saisie et définitions métier               |
| Règles et paramètres | `Setup_Params`          | Devise de base, taux de change, correspondances de transactions et politique d'allocation des coûts partagés |
| Données de base        | `Booking_Master`        | Index des expéditions, client, statut et nombre de conteneurs                             |
| Données de base        | `Container_Master`      | Relation expédition-conteneur 1:N                                            |
| Données de base        | `Service_Master`        | Code de service standard, nom du service et catégorie                                |
| Saisie des transactions  | `Raw_Transactions`      | Registre unifié des transactions financières plus les diagnostics d'intégrité des données                |
| Moteur de calcul | `Job_Costing_Engine`    | Agrégation au niveau de l'expédition du chiffre d'affaires, du coût des ventes, des frais bancaires, du bénéfice, de la marge et des dépôts  |
| Analyse            | `Booking_PL`            | Compte de résultat d'une seule expédition et ventilation par service                                  |
| Analyse            | `Container_Analysis`    | Coûts directs au niveau du conteneur et coûts partagés alloués                                |
| Analyse            | `Service_Profitability` | Rentabilité par service à travers les expéditions                                           |
| Sortie dirigeant   | `Executive_Dashboard`   | KPI globaux, classements de rentabilité et avertissements d'intégrité des données                    |

Le flux central est :

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

L'architecture source identifie trois importantes chaînes de recherche multi-sauts : une chaîne devise/traitement financier à quatre sauts, une chaîne coûts partagés/descente au conteneur à quatre sauts, et une chaîne de classification des services à trois sauts. 

La règle de conception critique est que **les valeurs de calcul et les états de diagnostic restent séparés**. `USD Equivalent` reste numérique, tandis que `Data Health Status` porte les erreurs telles que `ERR: UNKNOWN_CURRENCY`. Cela préserve la compatibilité `SUMIFS` tout en empêchant les transactions défectueuses d'entrer dans le moteur de compte de résultat. 

### Trois pièges qui prennent même les opérateurs de transit expérimentés

#### Piège 1 — Traiter un taux de change manquant comme un montant valide

**1. Décision :** Une expédition semble avoir un certain coût et une certaine marge.

**2. Défaut caché :** Une transaction fournisseur est libellée dans une devise qui n'est pas configurée dans la table des taux de change de référence.

**3. Impact de la décision :** Si le taux manquant est incorrectement traité comme `1.0`, un montant étranger tel que `50,000` peut devenir `$50,000 USD`, déformant radicalement le résultat de l'expédition.

**4. Pourquoi c'est faux :** Un taux de change manquant est un échec d'intégrité des données, pas un taux de change économique.

**5. Approche correcte :** Renvoyer une valeur numérique neutre de `0` pour le champ de calcul tout en signalant séparément `ERR: UNKNOWN_CURRENCY`.

**6. Décision corrigée :** L'expédition est signalée pour complétion des données au lieu de se voir attribuer un profit ou une perte faux.

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
<summary>Logique de la formule</summary>

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

La règle importante est de **ne jamais attribuer par défaut le taux 1.0 à une devise inconnue**. 

</details>

#### Piège 2 — Lire le compte de résultat d'une expédition avant de vérifier l'intégrité des données

**1. Décision :** Une expédition avec `$8,500` de chiffre d'affaires et `$5,200` de coût des ventes est considérée comme un profit de `$3,300`.

**2. Défaut caché :** Une ou plusieurs transactions sources ont des liens d'expédition ou de service invalides, ou une devise non résolue.

**3. Impact de la décision :** La marge apparente peut être surestimée parce qu'une ligne de coût a silencieusement échoué à entrer dans l'agrégation.

**4. Pourquoi c'est faux :** Un résultat `SUMIFS` mathématiquement correct peut rester économiquement faux si les lignes sources sont incomplètes.

**5. Approche correcte :** Le moteur n'agrège que les transactions dont le `Data Health Status = "OK"` et signale séparément le nombre de lignes invalides.

**6. Décision corrigée :** L'expédition est traitée comme **provisoire** jusqu'à ce que les exceptions de données soient résolues.

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
<summary>Logique de la formule</summary>

```excel
rev =
SUMIFS(
  Raw_Transactions!O2:O10000,
  Raw_Transactions!B2:B10000,bk,
  Raw_Transactions!N2:N10000,"Revenue",
  Raw_Transactions!P2:P10000,"OK"
)
```

Le même filtre d'intégrité est appliqué au coût des ventes, aux frais bancaires et aux dépôts. 

</details>

#### Piège 3 — Attribuer directement le coût partagé au niveau de l'expédition à chaque conteneur

**1. Décision :** Une expédition à deux conteneurs nécessite une vue de rentabilité au niveau du conteneur.

**2. Défaut caché :** Une ligne de coût des ventes au niveau de l'expédition appartient à l'envoi dans son ensemble plutôt qu'à un conteneur spécifique.

**3. Impact de la décision :** Attribuer la totalité du coût partagé aux deux conteneurs double le coût apparent.

**4. Pourquoi c'est faux :** La propriété économique du coût est au niveau de l'expédition, tandis que l'analyse exige une règle d'allocation contrôlée.

**5. Approche correcte :** Utiliser la politique configurée `EQUAL_SHARE` et diviser le coût des ventes partagé par le nombre de conteneurs de l'expédition.

**6. Décision corrigée :** Chaque conteneur reçoit ses coûts directs plus sa part allouée du coût commun, ce qui préserve le total au niveau de l'expédition.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

Le classeur sépare explicitement les coûts directs des conteneurs des coûts partagés au niveau de l'expédition et utilise un dénominateur sûr fondé sur le nombre de conteneurs. 

<details>
<summary>Logique de la formule</summary>

```excel
alloc_cogs =
IF(
  alloc_policy="EQUAL_SHARE",
  direct_cogs + (shared_cogs / cntr_count),
  direct_cogs
)
```

`Setup_Params!B6` contrôle si le coût partagé est alloué avec `EQUAL_SHARE` ou laissé non alloué avec `NO_ALLOCATE`. 

</details>

### Scénario d'exemple

Considérez une expédition de transit avec les transactions valides suivantes :

| Poste                      | Type     | Montant d'origine | Devise | Équivalent USD |
| ------------------------- | -------- | -------------: | -------- | -------------: |
| Facture client          | Revenue  |           8,500 | USD      |         $8,500 |
| Coût fournisseur de fret maritime | COGS     |           3,000 | USD      |         $3,000 |
| Inspection à l'origine         | COGS     |             900 | USD      |           $900 |
| Assurance fret           | Revenue  |             400 | USD      |           $400 |
| Frais bancaire               | Bank Fee |              75 | USD      |            $75 |
| Dépôt récupérable       | Deposit  |             500 | USD      |           $500 |

Le compte de résultat valide est :

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

Le dépôt récupérable de `$500` est suivi séparément plutôt que traité comme un chiffre d'affaires d'exploitation ou un coût des ventes.

Supposez maintenant qu'une transaction fournisseur supplémentaire soit saisie dans une devise non configurée. Le système n'ajoute **pas** silencieusement la transaction au coût des ventes. Son taux de change appliqué devient `0`, son calcul en USD reste numérique, et le champ de diagnostic signale `ERR: UNKNOWN_CURRENCY`. L'expédition reçoit un avertissement d'intégrité au lieu d'être présentée comme propre.

La recommandation opérationnelle change en conséquence :

> **N'utilisez pas la marge de 55,34 % comme chiffre de rentabilité final tant que la transaction non résolue n'est pas corrigée.**

C'est la distinction clé entre une calculatrice de rentabilité et un flux de travail d'analyse des coûts contrôlé : le résultat s'accompagne de preuves sur le caractère suffisamment complet des données sous-jacentes pour leur faire confiance.

### Référence des formules

<details>
<summary>Booking Master — Nombre de conteneurs</summary>

**Objet :** Déterminer le nombre de conteneurs attachés à chaque expédition et prévenir les erreurs de division par zéro.

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

Si aucun conteneur n'a encore été saisi, le dénominateur se rabat sur `1`. C'est une sauvegarde de calcul, tandis que la condition de conteneur manquant doit toujours être traitée opérationnellement comme un problème de qualité des données. 

</details>

<details>
<summary>Raw Transactions — Taux de change appliqué</summary>

**Objet :** Donner la priorité à un taux de change manuel et sinon récupérer le taux de devise configuré.

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

Une devise inconnue renvoie `0`, pas `1.0`. 

</details>

<details>
<summary>Raw Transactions — Traitement financier</summary>

**Objet :** Relier les types de transaction opérationnels aux catégories financières.

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

La conception source utilise `COGS` comme repli conservateur pour un type de transaction non reconnu, ce qui réduit le risque de surestimation du profit. 

</details>

<details>
<summary>Raw Transactions — Équivalent USD</summary>

**Objet :** Convertir chaque montant de transaction d'origine dans la devise de base USD du classeur tout en conservant un résultat numérique.

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

Garder cette colonne numérique est important car les calculs `SUMIFS` en aval ne devraient jamais recevoir de texte de diagnostic tel que `"INVALID"` à la place d'un nombre. 

</details>

<details>
<summary>Raw Transactions — État d'intégrité des données</summary>

**Objet :** Valider les liens d'expédition, de service et de change indépendamment des colonnes de calcul financier.

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

La couche de diagnostic est intentionnellement séparée des champs de calcul numériques. 

</details>

<details>
<summary>Job Costing Engine — Compte de résultat au niveau de l'expédition</summary>

**Objet :** Générer une liste dynamique d'expéditions et n'agréger que les transactions saines.

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

Le contrôle essentiel est le critère répété `Data Health Status = "OK"`. 

</details>

### Règles de validation

| Champ / Condition      | Règle                                                            | Comportement en cas d'erreur                                                                     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Booking ID`           | Doit exister dans `Booking_Master`                                  | `ERR: INVALID_BOOKING` ; transaction exclue du compte de résultat                              |
| `Service Code`         | Doit exister dans `Service_Master`                                  | `ERR: INVALID_SERVICE` ; transaction exclue du compte de résultat                              |
| `Currency`             | Doit avoir un taux de change configuré valide ou un taux manuel positif | Le taux appliqué devient `0` ; le diagnostic signale `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Une valeur positive surcharge le taux de change de référence                  | Une valeur invalide/non positive se rabat sur le taux configuré                             |
| `Transaction Type`     | Devrait correspondre à la correspondance `Setup_Params`                             | Un type inconnu se rabat conservativement sur `COGS`                                   |
| `USD Equivalent`       | Doit rester numérique                                             | Le texte de diagnostic ne doit jamais être écrit dans le champ d'agrégation numérique           |
| `Data Health Status`   | Doit être `OK` pour l'agrégation financière                          | Les lignes non OK sont exclues du compte de résultat de l'expédition                                      |
| `Container Count`      | Ne doit pas devenir zéro lorsqu'il sert de dénominateur d'allocation        | Se rabat sur `1` pour prévenir `#DIV/0!`                                             |
| Allocation des coûts partagés | Contrôlée par `Setup_Params!B6`                                 | `EQUAL_SHARE` alloue selon le nombre de conteneurs ; `NO_ALLOCATE` ne laisse que les coûts directs |
| Rentabilité de l'expédition  | Un chiffre d'affaires nul ne doit pas produire d'erreur de division               | La marge renvoie `0`                                                                 |
| Intégrité des données dirigeant  | Tout statut non vide autre que `OK` est compté                 | Le tableau de bord affiche un avertissement au lieu de présenter un état propre non qualifié                      |

La validation croisée source confirme la couverture des entrées de base expédition, conteneur, service et transaction, ainsi que des sorties équivalent USD, bénéfice net, marge et coût alloué. Elle vérifie aussi spécifiquement la séparation entre le texte de diagnostic et les champs `SUMIFS` numériques. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Validation croisée et préparation au déploiement

L'architecture du classeur est conçue pour valider la chaîne analytique **avant** que la direction ne s'appuie sur le compte de résultat qui en résulte.

L'implémentation source vérifie explicitement la chaîne de correspondance des types de transaction, la chaîne de recherche des taux de change, la liaison au Service Master, la chaîne d'allocation des coûts partagés et la compatibilité entre le texte de diagnostic et les champs d'agrégation numériques. 

| Dimension de validation         | Ce qui est vérifié                                                                  | Résultat attendu                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Liaison d'expédition**          | Chaque `Booking ID` de transaction existe dans `Booking_Master`                        | Les lignes invalides reçoivent un état d'erreur                      |
| **Liaison de service**          | Chaque `Service Code` de transaction existe dans `Service_Master`                      | Les lignes invalides sont exclues du compte de résultat                       |
| **Couverture des changes**              | Chaque transaction a soit un taux manuel valide, soit un taux de référence configuré | Les devises inconnues déclenchent un avertissement d'intégrité              |
| **Classification financière** | Le type de transaction est relié à Revenue / COGS / Bank Fee / Deposit                     | Les types inconnus utilisent le repli conservateur COGS         |
| **Agrégation numérique**      | `USD Equivalent` reste numérique en toutes conditions                                    | `SUMIFS` ne rencontre pas de texte de diagnostic              |
| **Agrégation conditionnée par l'intégrité** | Le compte de résultat n'inclut que `Data Health Status = "OK"`                                    | Les lignes sources défectueuses ne peuvent pas entrer silencieusement dans le profit déclaré |
| **Allocation des conteneurs**     | Les coûts partagés au niveau de l'expédition utilisent la politique d'allocation configurée                  | Aucune attribution répétée du coût total entre les conteneurs       |
| **Protection zéro chiffre d'affaires**  | Le calcul de la marge gère Revenue = 0                                    | Pas de `#DIV/0!`                                             |
| **Suivi dirigeant**     | Les erreurs de transaction globales sont comptées séparément                                 | Le tableau de bord signale les problèmes de données sources non résolus          |

La matrice de validation croisée de l'implémentation indique que les champs d'entrée de base — expédition, conteneur, service et données de transaction — et les sorties principales — équivalent USD, bénéfice net, marge et coût alloué — sont couverts par l'architecture. 

### Procédure opérationnelle standard

Le modèle d'exploitation envisagé est délibérément simple :

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

#### 1. Établir les données de base

Créez l'expédition dans `Booking_Master`.

Si les conteneurs sont pertinents, créez leurs relations expédition-conteneur dans `Container_Master`.

Maintenez le catalogue de services standardisé dans `Service_Master`.

Ne commencez pas l'analyse financière en tapant des noms de service libres ou des identifiants d'expédition directement dans les feuilles de rapport. Les tables de base sont la couche de référence pour les chaînes de recherche en aval. 

#### 2. Enregistrer les transactions financières

Saisissez le chiffre d'affaires, les coûts fournisseurs, les frais bancaires, les dépôts et toute autre activité financière pertinente dans `Raw_Transactions`.

Chaque transaction doit contenir ce qui convient parmi :

* `Booking ID`
* `Container ID`, le cas échéant
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, lorsqu'un taux propre à une transaction est requis

La table des transactions est la seule source qui devrait recevoir les enregistrements détaillés des événements financiers. Le moteur de calcul ne doit pas être édité manuellement. 

#### 3. Vérifier l'intégrité des données

Examinez `Raw_Transactions[Data Health Status]`.

Une ligne propre renvoie :

```text
OK
```

Les exceptions identifient la relation rompue, telle que :

```text
ERR: INVALID_BOOKING
ERR: INVALID_SERVICE
ERR: UNKNOWN_CURRENCY
```

L'implémentation traite délibérément cela comme une couche de contrôle séparée. Une transaction peut donc rester numériquement sûre tout en étant visiblement exclue du résultat financier. 

#### 4. Examiner la rentabilité

Utilisez :

* `Job_Costing_Engine` pour la rentabilité au niveau de l'expédition.
* `Booking_PL` pour la ventilation service par service d'une expédition.
* `Container_Analysis` lorsque l'expédition contient plusieurs conteneurs.
* `Service_Profitability` pour l'économie des services à travers les expéditions.
* `Executive_Dashboard` pour le suivi au niveau de la direction.

Cela crée un chemin de descente de la **rentabilité globale → expédition → service → conteneur → transaction**, au lieu d'obliger chaque question à être répondue depuis un unique tableau de bord récapitulatif.

### Règles de maintenance des données

L'architecture repose sur des données de base contrôlées parce qu'Excel n'offre pas la même contrainte stricte de clé étrangère qu'une base de données ou une plateforme ERP.

Les règles de maintenance les plus importantes sont :

1. **N'écrasez pas les champs générés par formule.**
2. **Ne tapez pas manuellement des noms de service là où un code de service devrait être utilisé.**
3. **N'introduisez pas une nouvelle devise sans avoir d'abord ajouté son taux de change à `Setup_Params`.**
4. **N'utilisez pas `1.0` comme repli pour un taux de change manquant.**
5. **N'écrivez pas de texte d'erreur dans les colonnes d'agrégation numériques.**
6. **N'éditez pas manuellement la sortie de `Job_Costing_Engine`.**
7. **Résolvez les lignes de transaction non OK avant de traiter la marge d'une expédition comme définitive.**
8. **Gardez la politique d'allocation des coûts partagés centralisée dans `Setup_Params`.**

La conception source interdit spécifiquement de coder en dur les paramètres globaux dans les formules et centralise la devise de base, les taux de change, les correspondances de transactions et la politique d'allocation dans `Setup_Params`. 

### Dépannage

#### `⚠️ X TXN DATA ERRORS` apparaît sur le tableau de bord

**Causes probables :**

* La devise est absente de la table des taux de change.
* `Booking ID` n'existe pas dans `Booking_Master`.
* `Service Code` n'existe pas dans `Service_Master`.
* Une transaction source contient une liaison invalide.

**Résolution :**

Filtrez la colonne `Data Health Status` dans `Raw_Transactions` pour afficher les valeurs autres que `OK`.

Puis résolvez chaque problème de données source sous-jacent au lieu de modifier manuellement la sortie du compte de résultat.

L'Executive Dashboard est conçu pour exposer cette condition via une carte d'intégrité globale :

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



#### Les formules matricielles dynamiques renvoient `#SPILL!`

Une formule de propagation exige que sa zone de destination reste dégagée.

Vérifiez :

* les cellules directement sous la formule ;
* les cellules à droite de la formule ;
* les valeurs saisies manuellement qui occupent la plage de propagation prévue ;
* le formatage résiduel ou le contenu copié qui a créé une obstruction.

Libérez les cellules obstructives et laissez la matrice dynamique se déployer à nouveau.

#### La rentabilité apparaît anormalement élevée

Ne modifiez pas immédiatement la formule de profit.

Vérifiez d'abord :

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

Une marge suspectement élevée peut être causée par une transaction de coût qui a échoué dans la chaîne de liaison et a donc été exclue du calcul.

C'est exactement pourquoi le classeur distingue **« le zéro comme état de calcul numérique »** de **« le zéro comme conclusion économique ».** Un taux de change manquant peut produire `$0.00` dans un champ numérique tout en produisant simultanément `ERR: UNKNOWN_CURRENCY` dans le champ de diagnostic. 

#### La rentabilité du conteneur apparaît surestimée ou sous-estimée

Vérifiez trois choses dans l'ordre :

1. Le bon `Booking ID` est-il sélectionné ?
2. Le bon `Container ID` est-il sélectionné ?
3. `Setup_Params!B6` utilise-t-il la politique d'allocation prévue ?

Sous `EQUAL_SHARE`, le coût des ventes partagé au niveau de l'expédition est divisé par le nombre de conteneurs de l'expédition avant d'être ajouté aux coûts directs des conteneurs.

Sous `NO_ALLOCATE`, les coûts partagés au niveau de l'expédition ne sont pas attribués aux conteneurs individuels.

La distinction compte car attribuer la totalité du coût partagé au niveau de l'expédition à chaque conteneur dupliquerait le même coût économique. 

### Limites de l'implémentation

Ce classeur est délibérément conçu comme une **couche de contrôle analytique légère**, et non comme un remplacement d'une plateforme comptable ou d'un système de gestion du transport.

Il est le plus performant lorsque :

* les données opérationnelles et financières existent déjà dans des tableurs ou des exports ;
* l'unité d'analyse clé est une expédition ou un envoi ;
* la direction a besoin d'une rentabilité au niveau de la tâche ;
* les services et les frais doivent être comparés d'une expédition à l'autre ;
* plusieurs devises nécessitent une base de reporting cohérente ;
* les coûts partagés exigent une règle d'allocation explicite ;
* les utilisateurs ont besoin de formules transparentes plutôt que d'une automatisation opaque.

Il n'est pas conçu pour fournir :

* la concurrence transactionnelle multi-utilisateurs ;
* des permissions de niveau ERP ;
* le rapprochement bancaire automatisé ;
* l'ingestion automatisée des factures transporteurs ;
* la contrainte de clé étrangère au niveau base de données ;
* l'orchestration de flux de travail d'entreprise.

La valeur du classeur ne réside donc pas dans le nombre de feuilles qu'il contient. C'est la chaîne analytique contrôlée qui relie **expédition → transaction → classification → conversion de devise → agrégation validée → rentabilité → descente**.

### Principe de contrôle analytique

La règle d'implémentation la plus importante peut se résumer ainsi :

```text
Never let a broken data relationship
look like a valid financial result.
```

Un tableur conventionnel pourrait permettre :

```text
Missing FX
    ↓
0 USD
    ↓
SUMIFS
    ↓
Higher Profit
```

Ce classeur rend en revanche l'état explicite :

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

Cette distinction est le fondement du modèle de fiabilité du Job Costing Engine. L'architecture reconnaît explicitement que `SUMIFS` peut agréger en toute sécurité des valeurs numériques tout en ignorant silencieusement le texte ; les états de diagnostic ne doivent donc jamais être intégrés directement dans les colonnes de calcul numériques. 

### Séquence de déploiement recommandée

Pour une nouvelle implémentation de classeur, la séquence la plus sûre est :

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

Le résultat est un flux de travail reproductible plutôt qu'un calcul tableur ponctuel : établissez les données de référence une fois, ajoutez les nouvelles transactions opérationnelles, résolvez les exceptions, et laissez les couches de calcul et d'analyse se mettre à jour à partir du même modèle de données sous-jacent. 

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Notes d'architecture finales

Le classeur est délibérément construit autour d'un **moteur unique de rentabilité au niveau de l'expédition**, plutôt que d'une collection de calculatrices déconnectées.

La hiérarchie analytique est :

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

Cette structure garde l'expédition comme unité économique centrale tout en permettant aux utilisateurs de descendre dans les services et les conteneurs ou de remonter vers la rentabilité inter-expéditions. 

L'implémentation reconnaît aussi explicitement trois chaînes de recherche multi-sauts :

1. **Transaction → Traitement financier → Taux de change → Équivalent USD → Compte de résultat de l'expédition**
2. **Expédition → Nombre de conteneurs → Politique de coûts partagés → Allocation des coûts partagés → Analyse des conteneurs**
3. **Code de service → Service Master → Catégorie de service → Rentabilité du service**

Ces chaînes sont validées avant que les sorties analytiques ne soient considérées comme prêtes pour la production. 

### Ce contre quoi le moteur protège

Le principe de conception central n'est pas la simple automatisation. C'est **empêcher une relation d'entrée défectueuse de se déguiser en conclusion financière valide**.

| Défaillance                                              | Mécanisme de protection                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Devise inconnue                                     | Le taux se rabat sur `0`, tandis qu'un état de diagnostic séparé signale le taux manquant |
| Type de transaction inconnu                                     | Le repli conservateur `COGS` empêche l'inflation accidentelle du profit              |
| Expédition invalide                                      | `ERR: INVALID_BOOKING`                                                         |
| Code de service invalide                                      | `ERR: INVALID_SERVICE`                                                         |
| Chaîne de transactions rompue                             | Les lignes non `OK` sont exclues de l'agrégation du compte de résultat                                |
| Coût partagé dupliqué entre les conteneurs             | Politique d'allocation explicite et dénominateur fondé sur le nombre de conteneurs                     |
| Chiffre d'affaires nul                                         | Le calcul de la marge renvoie `0` au lieu de `#DIV/0!`                            |
| Texte de diagnostic contaminant les calculs financiers | Les colonnes de calcul numériques et les colonnes de diagnostic restent séparées             |

La matrice de repli de l'implémentation rejette spécifiquement un repli de taux `1.0` parce que cela pourrait transformer un montant en devise étrangère non reconnue en un montant USD implausiblement grand. 

### Modèle d'utilisation recommandé

Pour les opérations continues, le classeur est destiné à se comporter comme un **modèle d'exploitation rafraîchissable**, et non comme un rapport ponctuel.

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

Cela rend le classeur utile pour des questions récurrentes telles que :

* Quelles expéditions sont réellement rentables ?
* Quels services produisent les marges les plus fortes ?
* Quels coûts d'envoi provoquent une perte inattendue ?
* Quels coûts au niveau de l'expédition doivent être alloués aux conteneurs ?
* Les marges déclarées sont-elles fiables, ou des problèmes de données sources non résolus cachent-ils des coûts ?
* Sur quoi la tarification, la négociation fournisseur ou la revue opérationnelle devrait-elle se concentrer ensuite ?

La procédure source suit la même séquence : établir les données de base, enregistrer les transactions financières, inspecter `Data Health Status`, puis utiliser les tableaux de rentabilité pour la revue. 

### Principe de conception final

Le classeur ne tente pas de faire paraître l'analyse financière plus simple en cachant son incertitude.

Il rend en revanche l'incertitude visible.

Une expédition avec une marge calculée n'est pas automatiquement traitée comme une expédition digne de confiance.

Une **expédition propre** signifie :

```text
Valid Booking
+ Valid Service
+ Valid Currency / FX
+ Valid Transaction Classification
+ Healthy Transaction Chain
= Profitability Result That Can Be Reviewed
```

Cette distinction est le cœur de l'implémentation.

</details>

## Autres outils de cette série

Une collection d'outils Excel légers d'aide à la décision couvrant le contrôle opérationnel, l'analyse de rentabilité, le rapprochement des stocks, la planification de la main-d'œuvre et d'autres flux de travail métier.

* **Outils de stock et de rapprochement** — analyse des stocks et des écarts fondée sur les transactions.
* **Outils de coûts et de rentabilité** — modèles de coûts opérationnels et d'économie unitaire.
* **Outils de planification de la main-d'œuvre** — paie, capacité et planification annuelle de la main-d'œuvre.

## Licence

Ce projet est publié sous la **Apache License 2.0**.

Vous pouvez utiliser, modifier, distribuer et bâtir sur l'œuvre conformément aux termes de la Apache License 2.0.
