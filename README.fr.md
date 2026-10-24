[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel de calcul des coûts par expédition pour transitaires & calculateur de rentabilité des envois (compte de résultat au niveau de l'expédition)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/f89c1a0f-f576-43af-b26a-02bae4a47348" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Financial%20Spreadsheet%20Model-2251FF.svg)](#)

**Modèle Excel de calcul des coûts par expédition pour transitaires, prêt pour l'audit, et calculateur interactif de compte de résultat des envois, conçu pour suivre la marge brute au niveau de l'expédition, les conversions de change multidevises, l'allocation des coûts de conteneurs FCL/LCL et la rentabilité des frais de fret. Réconciliez les factures clients AR, les factures transporteurs AP, le camionnage, le dédouanement et les frais de virement bancaire dans un seul modèle financier logistique standardisé—disponible gratuitement dans votre navigateur ou sous forme de classeur Excel déverrouillé.**

**Aucune inscription. Aucune installation. Gratuit à tester dans votre navigateur.**

Utilisez l'application web interactive pour examiner immédiatement le flux de travail de calcul des coûts par expédition, ou téléchargez le modèle de classeur Excel complet pour importer vos propres exports comptables—avec une garantie de remboursement de 30 jours, sans question.

> 🌐 **Lancer l'application web gratuite** → [Calculateur web interactif de calcul des coûts par expédition et de compte de résultat des envois pour transitaires](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)  
> 📥 **Obtenir le modèle Excel complet** → [Télécharger le modèle Excel de calcul des coûts par expédition et de rentabilité des envois éditable pour transitaires](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)  
>
> *L'édition navigateur et le classeur Excel téléchargeable partagent exactement la même architecture comptable relationnelle.*

---

## Ce que cet outil vous aide à suivre : correspondance entre points de douleur et solutions pour le transit

Au lieu d'attendre les rapports comptables agrégés de fin de mois, ce **tableur logistique de calcul des coûts par expédition** suit et résout les angles morts opérationnels exacts qui provoquent des **fuites de marge** dans le fret maritime, aérien et multimodal :

| Indicateur de suivi ciblé / Point de douleur | L'angle mort comptable fréquent du fret | Comment ce modèle de calcul des coûts par expédition le résout et le suit |
| :--- | :--- | :--- |
| **Compte de résultat au niveau de l'expédition et marge brute %** | Le profit n'est visible qu'au niveau mensuel de toute l'entreprise, ce qui masque les envois déficitaires et les lignes de trafic sous-évaluées. | Suit les **revenus AR vs. coût des ventes AP vs. frais de virement bancaire** par identifiant d'expédition individuel (niveau B/L ou AWB) pour révéler en temps réel le **bénéfice net et la marge %**. |
| **Rentabilité par code de frais et services accessoires** | Connaître le revenu total d'un envoi sans savoir si le fret maritime, le camionnage, le dédouanement ou la surestarie ont réellement dégagé de l'argent. | Suit la contribution à la marge à travers des **codes de services de fret** granulaires (fret maritime, THC, inspection à l'origine, assurance fret, documentation, coordination). |
| **Allocation des coûts partagés multi-conteneurs (FCL)** | Lorsqu'un B/L principal couvre plusieurs conteneurs, les frais forfaitaires au niveau de l'expédition sont dupliqués ou ignorés lors de l'analyse au niveau du conteneur. | Sépare les **coûts directs des conteneurs** des **coûts partagés au niveau de l'expédition**, en répartissant automatiquement les frais partagés entre les conteneurs selon une politique contrôlée. |
| **Gains/pertes de change (FX) multidevises et normalisation** |Payer les transporteurs maritimes en USD, les agents d'origine en EUR/CNY et facturer les clients en devise locale avec des taux de change manuels incohérents. | Convertit toutes les lignes AR/AP en devises mixtes sur une **base USD standardisée** via une table de recherche de change centralisée avec des indicateurs d'exception automatisés pour les taux manquants. |
| **Coûts fournisseurs non liés et audit de l'intégrité des données** | Les fautes de frappe dans les identifiants d'expédition, les codes de frais invalides ou les taux de change manquants font silencieusement tomber les coûts fournisseurs à $0, créant des marges artificiellement gonflées. | Exécute un **moteur de diagnostic d'intégrité des données** automatisé (`ERR: UNKNOWN_CURRENCY`, `ERR: INVALID_BOOKING`) qui met en quarantaine les enregistrements défectueux avant qu'ils ne corrompent votre compte de résultat. |

---

## Comment réaliser un audit de rentabilité des envois et de calcul des coûts par expédition (flux de démarrage rapide)

Transformez des exports ERP/comptables désordonnés, des factures transporteurs et des tableurs opérationnels en un **état de compte de résultat au niveau de l'expédition** propre en quatre étapes structurées :

### Étape 1 : configurer la devise de base, les taux de change et les règles d'allocation
Ouvrez la feuille de contrôle `Setup_Params` pour établir votre référence comptable de fret :
- Définissez votre **devise de reporting de base** (par ex. USD) et renseignez les **taux de change (FX) de référence**.
- Cartographiez vos **types de transaction** (revenus client, coût des ventes direct, frais bancaires/virements, dépôts client).
- Sélectionnez votre **politique d'allocation des coûts partagés** pour les envois FCL multi-conteneurs.

*Action :* Inspectez instantanément la structure de paramètres préconfigurée dans la [démo navigateur gratuite de calcul des coûts par expédition](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/).

---

### Étape 2 : importer les enregistrements maîtres d'expédition et les transactions AR/AP brutes
Renseignez vos listes maîtresses (expéditions, conteneurs et catalogue de services de fret), puis collez ou chargez vos lignes financières dans `Raw_Transactions` :
- **Sources de données compatibles :** exports QuickBooks/Xero, journaux de facturation TMS, factures de fret des transporteurs maritimes/NVOCC, relevés de courtiers en douane et suivis opérationnels manuels.
- **Aucune reconstruction manuelle de VLOOKUP requise**—il suffit de déposer les lignes brutes dans le tableau de transactions standardisé.

---

### Étape 3 : auditer les exceptions d'intégrité des données et examiner le compte de résultat des envois automatisé
Dès que les transactions sont chargées, le moteur de calcul des coûts par expédition effectue automatiquement les opérations suivantes :
- Normaliser les devises étrangères vers votre devise de reporting de base.
- Signaler les liens de données de base défectueux (`Data Health Status`) afin que les factures fournisseurs non liées ne se cachent jamais comme des éléments à coût nul.
- Agréger les lignes vérifiées en **compte de résultat au niveau de l'expédition**, **ventilation de la marge par ligne de service** et **économie unitaire au niveau du conteneur**.

---

### Étape 4 : rafraîchir périodiquement et exporter vers Excel pour les opérations continues
À mesure que de nouvelles navigations, factures fournisseurs ou frais de détention/surestarie arrivent, ajoutez-les au journal des transactions pour maintenir vos marges d'envoi à jour tout au long des cycles de facturation.

> 💡 **Prêt à l'exécuter sur vos propres données d'envoi en direct et exports comptables ?**  
> La version navigateur est conçue pour la vérification instantanée du flux de travail et les tests sur une seule session. Pour importer vos propres exports comptables CSV/Excel, personnaliser les catalogues de frais de fret, enregistrer les instantanés de clôture mensuelle et auditer chaque formule hors ligne :  
> 👉 **[Télécharger le modèle Excel de calcul des coûts par expédition pour transitaires déverrouillé](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)** et transformez-le en votre moteur de rentabilité d'envoi mensuel reproductible.

---

## La logique métier et la méthodologie

Les logiciels comptables standard (comme QuickBooks ou Xero) sont construits autour du **plan comptable et des mois civils**, tandis que les transitaires opèrent autour des **expéditions, connaissements (B/L) et conteneurs** dont les revenus et factures fournisseurs s'étendent souvent sur plusieurs mois et plusieurs devises.

Pour résoudre le décalage entre la comptabilité du grand livre et la logistique opérationnelle, cette boîte à outils met en œuvre une **méthodologie de calcul des coûts relationnelle à 4 piliers** :

1. **Modélisation hiérarchique des entités relationnelles (`Booking → Container → Service Line`) :**  
   Dans les opérations de fret, les coûts surviennent à différents niveaux structurels. Des frais de dédouanement ou des frais de documentation de connaissement s'appliquent une fois par **expédition**, tandis que les frais de manutention terminalaire (THC), le camionnage ou les frais de fractionnement de châssis s'appliquent par **conteneur (TEU/FEU)**. Aplatir ceux-ci dans un seul tableau provoque un double comptage sévère. Ce moteur impose une hiérarchie relationnelle stricte : les coûts directs des conteneurs se lient à `Container_ID`, tandis que les frais généraux à l'échelle de l'envoi se lient à `Booking_ID` et se répartissent dynamiquement via une formule d'allocation déterministe :
   $$\text{Container Allocated Cost} = \text{Direct Container Cost} + \frac{\text{Booking-Level Shared Costs}}{\text{Total Active Containers in Booking}}$$
2. **État de diagnostic découplé vs. agrégation numérique (architecture zéro échec silencieux) :**  
   Dans les tableurs Excel standard, un identifiant d'expédition mal orthographié dans une formule `SUMIFS` ignore silencieusement une facture de transporteur maritime de $2,000—faisant apparaître un envoi déficitaire comme largement rentable. Inversement, une erreur `#N/A` dans un `VLOOKUP` casse tout le tableau de bord du compte de résultat. Ce modèle utilise une **méthode d'évaluation à double voie** : chaque ligne de transaction passe par un contrôle d'intégrité référentielle (`Data_Health_Status`) qui valide les identifiants d'expédition, les codes de service et les clés de devise avant l'exécution des calculs. Les lignes invalides produisent des chaînes de diagnostic explicites (`ERR: UNKNOWN_CURRENCY`, `ERR: ORPHAN_BOOKING`) tout en transmettant un `0` sûr au moteur d'agrégation, garantissant que le tableau de bord ne plante jamais tout en alertant visuellement les analystes sur des données de marge incomplètes.
3. **Triangulation multidevises centralisée :**  
   Le transit transfrontalier implique de payer les agents d'origine en CNY/EUR, de régler le fret maritime en USD et d'absorber les frais de virement bancaire intermédiaires. Le modèle normalise chaque ligne de transaction brute au niveau de la ligne d'article ($T_i \times \text{FX}_{\text{rate}}$) avant le cumul du compte de résultat, éliminant les distorsions d'arrondi et la dérive des taux de change courantes dans les conversions manuelles de synthèse.
4. **Séparation compte de résultat de trésorerie vs. comptabilité d'exercice (dépôts vs. revenus acquis) :**  
   Les transitaires collectent fréquemment des dépôts client initiaux ou des droits de douane anticipés avant le départ d'un navire. Mélanger les dépôts client avec les revenus de fret acquis déforme la marge brute réelle. Le moteur de classification des transactions isole explicitement les **dépôts de bilan** des **revenus, coût des ventes et frais bancaires du compte de résultat**, fournissant une vue précise de la marge unitaire accompagnée d'une visibilité sur la position de trésorerie.

---

## Pourquoi j'ai conçu cet outil : réparer la chaîne analytique rompue du transit

La rentabilité du transit est bien plus difficile à voir qu'elle ne paraît sur un devis commercial.

Une seule expédition maritime ou aérienne peut impliquer des frais de fret client, une inspection à l'origine, une assurance fret, des frais de documentation, du camionnage local, du fret maritime transporteur, des frais de virement bancaire, des dépôts client, plus de 3 devises et plusieurs conteneurs—dispersés à travers des suivis opérationnels et des exports comptables disparates.

Lorsque les transitaires perdent de l'argent sur un envoi, la cause profonde est rarement une mauvaise intention de tarification. **C'est une chaîne analytique rompue :**
- Un envoi apparaît comme un **gagnant à 38.8% de marge brute** parce qu'une facture fournisseur de camionnage de $1,500 comportait une faute de frappe dans la référence d'expédition et a été exclue de la formule `SUMIFS`.
- Un frais d'agent d'origine en devise étrangère a été omis parce que son taux de change n'avait pas été mis à jour dans la table de recherche.
- Des coûts de dédouanement et de documentation partagés au niveau de l'expédition ont été accidentellement multipliés sur 5 conteneurs—ou entièrement ignorés—lors de la cotation des tarifs par conteneur au client.

Par exemple, au lieu de faire aveuglément confiance à une synthèse défectueuse comme celle-ci :

```text
Booking Revenue        $8,500
Reported COGS          $5,200
Apparent Net Profit    $3,300
Reported Margin         38.8%  <-- (Artificially inflated by missing vendor bill)
```

Ce moteur de calcul des coûts signale immédiatement que le jeu de données de transactions sous-jacent contient un **coût fournisseur non lié** ou une **devise non configurée (`ERR: UNKNOWN_CURRENCY`)**. L'expédition est visiblement mise en quarantaine pour le nettoyage des données plutôt que présentée à la direction comme une marge propre de 38.8%.

L'objectif n'est pas un autre joli tableau de bord de vanité. C'est un **cadre de raisonnement financier défendable** qui garantit que votre compte de résultat au niveau de l'expédition est mathématiquement solide avant de payer des commissions de vente ou de renouveler les cartes tarifaires client.

---

## Tableurs comptables ad hoc vs. ce moteur de calcul des coûts par expédition de fret

| Dimension d'évaluation | Tableurs manuels et comptabilité générique (sans cet outil) | Moteur de calcul des coûts par expédition de fret standardisé (avec cet outil) |
| --- | --- | --- |
| **Visibilité au niveau de l'envoi (B/L et AWB)** | Les logiciels de grand livre mélangent toutes les factures mensuelles, occultant quels envois, lignes de trafic ou clients précis perdent de l'argent. | Génère instantanément un **compte de résultat expédition par expédition** ventilant le revenu brut, le coût des ventes direct, les frais de virement bancaire, le bénéfice net et la marge %. |
| **Réconciliation multidevises (FX)** | Les opérateurs convertissent EUR, CNY, GBP et USD manuellement avec des taux ad hoc, provoquant des écarts de marge inexplicables à la clôture de fin de mois. | Impose une **table de taux de change centralisée** qui convertit chaque ligne de facture en une seule devise de base, en émettant un avertissement explicite si un taux de devise est manquant. |
| **Allocation des coûts FCL multi-conteneurs** | Les frais de documentation, de dédouanement et les surtaxes au niveau de l'expédition sont soit doublement comptés par conteneur, soit laissés hors de l'économie unitaire des conteneurs. | Sépare dynamiquement le **coût des ventes direct des conteneurs** des **coûts partagés au niveau de l'expédition**, en répartissant les frais partagés uniformément sur le nombre exact de conteneurs. |
| **Marge sur services accessoires et codes de service** | Les transitaires connaissent la valeur totale de la facture mais ne peuvent pas dire s'ils perdent de l'argent sur le camionnage, l'assurance fret, l'inspection à l'origine ou THD/THC. | Agrège le revenu vs. le coût fournisseur par **code de service de fret granulaire**, révélant quels services à valeur ajoutée génèrent du profit vs. des fuites de marge. |
| **Intégrité des données de base et gestion des erreurs** | Les identifiants d'expédition mal orthographiés ou les liens `VLOOKUP` cassés font silencieusement tomber les coûts fournisseurs à zéro (gonflant le profit) ou cassent toute la feuille avec des erreurs `#N/A`. | Une **couche de diagnostic d'intégrité des données** intégrée isole les identifiants d'expédition, codes de service et taux de change invalides tout en gardant les cumuls numériques stables et prêts pour l'audit. |

---

## À qui s'adresse cet outil : rôles logistiques cibles et scénarios opérationnels

Cette boîte à outils est conçue pour les **transitaires de petite à moyenne taille (OTI/NVOCC), les courtiers en douane, les opérateurs 3PL et les équipes financières logistiques** qui ont besoin d'un calcul des coûts par envoi de qualité entreprise sans payer $20,000+ pour une implémentation TMS/ERP lourde :

* **Propriétaires d'entreprises de transit et directeurs généraux :** utilisez-le comme **outil exécutif d'audit de la rentabilité des envois et des commissions commerciales** pour vérifier les marges nettes réelles (après frais bancaires et coûts partagés) avant de signer des contrats tarifaires annuels avec les chargeurs ou de verser les commissions des représentants commerciaux.
* **Directeurs financiers logistiques et comptables de fret :** utilisez-le comme **modèle mensuel de réconciliation du calcul des coûts par expédition** pour combler l'écart entre les logiciels comptables généraux (QuickBooks, Xero, NetSuite) et les fichiers opérationnels d'envoi—en détectant les revenus non facturés ou les factures fournisseurs orphelines avant la clôture des comptes.
* **Analystes de tarification fret et gestionnaires de lignes de trafic :** utilisez-le comme **analyseur d'économie unitaire des conteneurs et de marge sur services accessoires** pour voir si le fret maritime, le fret aérien, le courtage en douane, l'assurance fret ou le camionnage intérieur stimule ou érode la rentabilité sur des lignes de trafic spécifiques.
* **Responsables des opérations de transit et répartiteurs :** utilisez-le comme **calculateur d'allocation des coûts FCL/LCL multi-conteneurs** lors de la gestion de cargaisons de projet complexes ou d'expéditions multi-conteneurs avec devises mixtes et factures fournisseurs fractionnées.
* **CFO à temps partiel et consultants en chaîne d'approvisionnement :** utilisez-le comme **cadre de diagnostic des fuites de marge prêt à l'emploi** lors de l'audit de portefeuilles de fret client ou du nettoyage de tableurs opérationnels désordonnés.

*Remarque : ce classeur n'est **pas** destiné à remplacer un TMS opérationnel (comme CargoWise), une plateforme de réservation EDI automatisée ou un système comptable fiscal statutaire. C'est la **couche d'exécution analytique de calcul des coûts par expédition** légère qui relie vos enregistrements d'envoi opérationnels à leur véritable résultat financier.*

---

## Scénarios fréquemment demandés sur le calcul des coûts par expédition de fret et les marges

Si votre opération de transit est confrontée à l'une des questions de réconciliation financière suivantes, ce modèle est structuré pour les résoudre dès la sortie de la boîte :

* **Prévenir les fuites de marge sur les envois :** *Comment réconcilier les factures client AR avec les factures AP retardées des transporteurs maritimes, du camionnage et des courtiers en douane au niveau de l'expédition individuelle ou du connaissement (B/L) ?*
* **Fractionnement des coûts FCL multi-conteneurs :** *Comment calculer précisément le coût et le profit par conteneur lorsqu'une seule expédition comprend des conteneurs 4x 40'HC avec à la fois des frais de camionnage spécifiques au conteneur et des frais de documentation B/L partagés ?*
* **Comptabilité fret multidevises dans Excel :** *Comment construire un suivi de compte de résultat des envois dans Excel qui gère le fret maritime USD, les frais d'origine EUR/CNY et les frais de virement bancaire sans erreurs de conversion manuelle de change ?*
* **Auditer le bénéfice brut des représentants commerciaux :** *Comment vérifier la marge nette réelle d'une expédition de fret avant de payer des commissions de vente sur le bénéfice brut ?*

---

## À propos de Theseus Workshop

Je conçois des cadres légers, prêts pour l'audit, basés sur Excel et le navigateur, d'aide à la décision, pour des environnements opérationnels où il y a trop de pièces en mouvement pour tenir dans une seule tête—mais où un déploiement logiciel d'entreprise gonflé serait excessif.

La question de conception centrale derrière chaque outil est simple :

> **« Quelles données opérationnelles et financières exactes doivent être réunies en un seul endroit pour que la prochaine décision métier devienne mathématiquement évidente ? »**

Ce **moteur de rentabilité et de calcul des coûts au niveau de l'expédition** applique ce principe au transit international—en reliant l'unité opérationnelle centrale (**l'expédition et le conteneur**) directement à ses transactions multidevises, ses lignes de service accessoires, son état d'intégrité des données et son véritable profit net.

---

*Mots-clés : modèle Excel de calcul des coûts par expédition pour transitaires, calculateur de rentabilité des envois, tableur de compte de résultat au niveau de l'expédition, suivi de marge NVOCC, modèle d'allocation des coûts de conteneurs FCL, modèle de réconciliation AR/AP de comptabilité fret, analyse de la marge brute logistique.*


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
| Moteur de calcul | `Job_Costing_Engine`    | Agrégation des revenus, du coût des ventes, des frais bancaires, du profit, de la marge et des dépôts au niveau de l'expédition  |
| Analyse           | `Booking_PL`            | Compte de résultat d'une seule expédition et exploration par niveau de service                                  |
| Analyse           | `Container_Analysis`    | Coûts directs au niveau du conteneur et coûts partagés alloués                                |
| Analyse           | `Service_Profitability` | Rentabilité par service transverse aux expéditions                                           |
| Sortie exécutive   | `Executive_Dashboard`   | KPI globaux, classements de rentabilité et avertissements d'intégrité des données                    |

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

L'architecture source identifie trois chaînes de recherche importantes à sauts multiples : une chaîne devise/traitement financier à quatre sauts, une chaîne d'analyse descendante coûts partagés/conteneur à quatre sauts et une chaîne de classification des services à trois sauts.

La règle de conception critique est que **les valeurs de calcul et les états de diagnostic restent séparés**. `USD Equivalent` reste numérique, tandis que `Data Health Status` porte les erreurs telles que `ERR: UNKNOWN_CURRENCY`. Cela préserve la compatibilité `SUMIFS` tout en empêchant les transactions défectueuses d'être incluses dans le moteur de compte de résultat.

### Trois pièges qui surprennent même les opérateurs de transit expérimentés

#### Piège 1 — Traiter un taux de change manquant comme un montant valide

**1. Décision :** Une expédition semble avoir un certain coût et une certaine marge.

**2. Défaut caché :** Une transaction fournisseur est libellée dans une devise qui n'est pas configurée dans la table de change de référence.

**3. Impact de la décision :** Si le taux manquant est incorrectement traité comme `1.0`, un montant étranger tel que `50,000` peut devenir `$50,000 USD`, déformant radicalement le résultat de l'expédition.

**4. Pourquoi c'est faux :** Un taux de change manquant est un échec d'intégrité des données, pas un taux de change économique.

**5. Approche correcte :** Retourner une valeur neutre numérique de `0` pour le champ de calcul tout en signalant séparément `ERR: UNKNOWN_CURRENCY`.

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

La règle importante est de **ne jamais prendre par défaut une devise inconnue à 1.0**.

</details>

#### Piège 2 — Lire le compte de résultat d'une expédition avant de vérifier l'intégrité des données

**1. Décision :** Une expédition avec `$8,500` de revenus et `$5,200` de coût des ventes est considérée comme un profit de `$3,300`.

**2. Défaut caché :** Une ou plusieurs transactions sources ont des liens d'expédition ou de service invalides, ou une devise non résolue.

**3. Impact de la décision :** La marge apparente peut être surestimée parce qu'une ligne de coût a silencieusement échoué à intégrer l'agrégation.

**4. Pourquoi c'est faux :** Un résultat `SUMIFS` mathématiquement correct peut encore être économiquement faux si les lignes sources sont incomplètes.

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

**4. Pourquoi c'est faux :** La propriété économique du coût est au niveau de l'expédition, tandis que l'analyse requiert une règle d'allocation contrôlée.

**5. Approche correcte :** Utiliser la politique configurée `EQUAL_SHARE` et diviser le coût des ventes partagé par le nombre de conteneurs de l'expédition.

**6. Décision corrigée :** Chaque conteneur reçoit ses coûts directs plus sa part allouée du coût commun, préservant le total au niveau de l'expédition.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

Le classeur sépare explicitement les coûts directs des conteneurs des coûts partagés au niveau de l'expédition et utilise un dénominateur de nombre de conteneurs sûr.

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

### Exemple de scénario

Considérez une expédition de transit avec les transactions valides suivantes :

| Article                      | Type     | Montant original | Devise | Équivalent USD |
| ------------------------- | -------- | --------------: | -------- | -------------: |
| Facture client          | Revenu  |           8,500 | USD      |         $8,500 |
| Coût fournisseur de fret maritime | COGS     |           3,000 | USD      |         $3,000 |
| Inspection à l'origine         | COGS     |             900 | USD      |           $900 |
| Assurance fret           | Revenu  |             400 | USD      |           $400 |
| Frais bancaire               | Frais bancaire |              75 | USD      |            $75 |
| Dépôt récupérable       | Dépôt  |             500 | USD      |           $500 |

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

Le dépôt récupérable de `$500` est suivi séparément plutôt que traité comme un revenu d'exploitation ou un coût des ventes.

Supposez maintenant qu'une transaction fournisseur supplémentaire soit saisie dans une devise non configurée. Le système n'ajoute **pas** silencieusement la transaction au coût des ventes. Son taux de change appliqué devient `0`, son calcul USD reste numérique et le champ de diagnostic signale `ERR: UNKNOWN_CURRENCY`. L'expédition reçoit un avertissement d'intégrité au lieu d'être présentée comme propre.

La recommandation opérationnelle change en conséquence :

> **N'utilisez pas la marge de 55.34% comme chiffre de rentabilité final tant que la transaction non résolue n'est pas corrigée.**

C'est la distinction clé entre une calculatrice de rentabilité et un flux de travail de calcul des coûts contrôlé : le résultat est accompagné de preuves sur le fait que les données sous-jacentes sont suffisamment complètes pour être dignes de confiance.

### Référence des formules

<details>
<summary>Booking Master — Nombre de conteneurs</summary>

**Objectif :** Déterminer le nombre de conteneurs attachés à chaque expédition et prévenir les échecs de division par zéro.

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

Si aucun conteneur n'a encore été saisi, le dénominateur se rabat sur `1`. C'est une sauvegarde de calcul, tandis que la condition de conteneur manquant doit encore être traitée comme un problème de qualité des données opérationnellement.

</details>

<details>
<summary>Raw Transactions — Taux de change appliqué</summary>

**Objectif :** Prioriser un taux de change manuel et sinon récupérer le taux de devise configuré.

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

Une devise inconnue retourne `0`, pas `1.0`.

</details>

<details>
<summary>Raw Transactions — Traitement financier</summary>

**Objectif :** Cartographier les types de transaction opérationnels vers des catégories financières.

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

La conception source utilise `COGS` comme repli conservateur pour un type de transaction non reconnu, réduisant le risque de surestimer le profit.

</details>

<details>
<summary>Raw Transactions — Équivalent USD</summary>

**Objectif :** Convertir chaque montant de transaction original en devise de base USD du classeur tout en conservant un résultat numérique.

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

Garder cette colonne numérique est important parce que les calculs `SUMIFS` en aval ne devraient jamais recevoir de texte de diagnostic tel que `"INVALID"` à la place d'un nombre.

</details>

<details>
<summary>Raw Transactions — Data Health Status</summary>

**Objectif :** Valider les liens d'expédition, de service et de change indépendamment des colonnes de calcul financier.

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

**Objectif :** Générer une liste d'expéditions dynamique et n'agréger que les transactions saines.

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

| Champ / condition      | Règle                                                            | Comportement en cas d'erreur                                                                     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Booking ID`           | Doit exister dans `Booking_Master`                                  | `ERR: INVALID_BOOKING` ; transaction exclue du compte de résultat                              |
| `Service Code`         | Doit exister dans `Service_Master`                                  | `ERR: INVALID_SERVICE` ; transaction exclue du compte de résultat                              |
| `Currency`             | Doit avoir un taux de change configuré valide ou un taux de change manuel positif | Le change appliqué devient `0` ; le diagnostic signale `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Une valeur positive remplace le taux de change de référence                  | Une valeur invalide/non positive se rabat sur le change configuré                             |
| `Transaction Type`     | Devrait correspondre à la correspondance `Setup_Params`                             | Un type inconnu se rabat conservativement sur `COGS`                                   |
| `USD Equivalent`       | Doit rester numérique                                             | Le texte de diagnostic ne doit jamais être écrit dans le champ d'agrégation numérique           |
| `Data Health Status`   | Doit être `OK` pour l'agrégation financière                          | Les lignes non OK sont exclues du compte de résultat de l'expédition                                          |
| `Container Count`      | Ne doit pas devenir zéro lorsqu'il est utilisé comme dénominateur d'allocation        | Se rabat sur `1` pour prévenir `#DIV/0!`                                             |
| Allocation des coûts partagés | Contrôlée par `Setup_Params!B6`                                 | `EQUAL_SHARE` alloue par nombre de conteneurs ; `NO_ALLOCATE` ne laisse que les coûts directs |
| Rentabilité de l'expédition  | Un revenu de zéro ne doit pas produire d'erreur de division               | La marge retourne `0`                                                                 |
| Intégrité des données exécutive  | Tout état non vide autre que `OK` est compté                 | Le tableau de bord affiche un avertissement au lieu de présenter un état propre non qualifié      |

La validation croisée source confirme la couverture des entrées principales d'expédition, de conteneur, de service et de transaction, ainsi que des sorties d'équivalent USD, de bénéfice net, de marge et de coût alloué. Elle valide aussi spécifiquement la séparation entre le texte de diagnostic et les champs numériques `SUMIFS`.

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Validation croisée et disponibilité au déploiement

L'architecture du classeur est conçue pour valider la chaîne analytique **avant** que la direction ne s'appuie sur le compte de résultat qui en résulte.

L'implémentation source vérifie explicitement la chaîne de correspondance des types de transaction, la chaîne de recherche de change, la liaison Service Master, la chaîne d'allocation des coûts partagés et la compatibilité entre le texte de diagnostic et les champs d'agrégation numériques.

| Dimension de validation         | Ce qui est vérifié                                                                  | Résultat attendu                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Liaison d'expédition**          | Chaque `Booking ID` de transaction existe dans `Booking_Master`                        | Les lignes invalides reçoivent un état d'erreur                      |
| **Liaison de service**          | Chaque `Service Code` de transaction existe dans `Service_Master`                      | Les lignes invalides sont exclues du compte de résultat                       |
| **Couverture de change**              | Chaque transaction a soit un taux de change manuel valide, soit un taux de référence configuré | Les devises inconnues déclenchent un avertissement d'intégrité              |
| **Classification financière** | Le type de transaction se cartographie en Revenu / COGS / Frais bancaire / Dépôt                     | Les types inconnus utilisent le repli conservateur COGS         |
| **Agrégation numérique**      | `USD Equivalent` reste numérique en toutes conditions                            | `SUMIFS` ne rencontre pas de texte de diagnostic              |
| **Agrégation conditionnée par l'intégrité** | Le compte de résultat n'inclut que `Data Health Status = "OK"`                                    | Les lignes sources défectueuses ne peuvent pas entrer silencieusement dans le profit déclaré |
| **Allocation des conteneurs**     | Les coûts partagés au niveau de l'expédition utilisent la politique d'allocation configurée                  | Aucune attribution répétée du coût total entre les conteneurs       |
| **Protection revenu zéro**  | Le calcul de la marge bénéficiaire gère Revenu = 0                                    | Pas de `#DIV/0!`                                             |
| **Surveillance exécutive**     | Les erreurs de transaction globales sont comptées séparément                                 | Le tableau de bord signale les problèmes de données source non résolus          |

La matrice de validation croisée de l'implémentation indique que les champs d'entrée principaux — expédition, conteneur, service et données de transaction — et les sorties majeures — équivalent USD, bénéfice net, marge et coût alloué — sont couverts par l'architecture.

### SOP opérationnelle

Le modèle opérationnel envisagé est délibérément simple :

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

Créer l'expédition dans `Booking_Master`.

Si les conteneurs sont pertinents, créer leurs relations expédition-conteneur dans `Container_Master`.

Maintenir le catalogue de services standardisé dans `Service_Master`.

Ne pas commencer l'analyse financière en tapant des noms de service libres ou des identifiants d'expédition directement dans les feuilles de reporting. Les tables maîtresses sont la couche de référence pour les chaînes de recherche en aval.

#### 2. Enregistrer les transactions financières

Saisir les revenus, coûts fournisseurs, frais bancaires, dépôts et autres activités financières pertinentes dans `Raw_Transactions`.

Chaque transaction doit contenir les éléments appropriés :

* `Booking ID`
* `Container ID`, le cas échéant
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, lorsqu'un taux spécifique à la transaction est requis

Le tableau des transactions est la seule source qui devrait recevoir les enregistrements détaillés des événements financiers. Le moteur de calcul ne devrait pas être édité manuellement.

#### 3. Vérifier l'intégrité des données

Examiner `Raw_Transactions[Data Health Status]`.

Une ligne propre retourne :

```text
OK
```

Les exceptions identifient la relation défectueuse, telles que :

```text
ERR: INVALID_BOOKING
ERR: INVALID_SERVICE
ERR: UNKNOWN_CURRENCY
```

L'implémentation traite délibérément ceci comme une couche de contrôle séparée. Une transaction peut donc rester numériquement sûre tout en étant visiblement exclue du résultat financier.

#### 4. Examiner la rentabilité

Utiliser :

* `Job_Costing_Engine` pour la rentabilité au niveau de l'expédition.
* `Booking_PL` pour la ventilation service par service d'une expédition.
* `Container_Analysis` lorsque l'expédition contient plusieurs conteneurs.
* `Service_Profitability` pour l'économie des services transverse aux expéditions.
* `Executive_Dashboard` pour la surveillance au niveau de la direction.

Cela crée un chemin d'exploration descendante de la **rentabilité globale → expédition → service → conteneur → transaction** plutôt que de forcer chaque question à être répondue depuis un seul tableau de bord de synthèse.

### Règles de maintenance des données

L'architecture s'appuie sur des données de base contrôlées parce qu'Excel ne fournit pas la même contrainte stricte de clé étrangère qu'une base de données ou une plateforme ERP.

Les règles de maintenance les plus importantes sont :

1. **Ne pas écraser les champs générés par formule.**
2. **Ne pas taper manuellement des noms de service là où un code de service devrait être utilisé.**
3. **Ne pas introduire une nouvelle devise sans d'abord ajouter son taux de change à `Setup_Params`.**
4. **Ne pas utiliser `1.0` comme repli de change manquant.**
5. **Ne pas écrire de texte d'erreur dans les colonnes d'agrégation numériques.**
6. **Ne pas éditer manuellement la sortie `Job_Costing_Engine`.**
7. **Résoudre les lignes de transaction non OK avant de traiter une marge d'expédition comme finale.**
8. **Garder la politique d'allocation des coûts partagés centralisée dans `Setup_Params`.**

La conception source interdit spécifiquement de coder en dur les paramètres globaux dans les formules et centralise la devise de base, les taux de change, les correspondances de transactions et la politique d'allocation dans `Setup_Params`.

### Dépannage

#### `⚠️ X TXN DATA ERRORS` apparaît sur le tableau de bord

**Causes probables :**

* La devise est manquante dans la table de change.
* L'identifiant d'expédition n'existe pas dans `Booking_Master`.
* Le code de service n'existe pas dans `Service_Master`.
* Une transaction source contient une liaison invalide.

**Résolution :**

Filtrer la colonne `Data Health Status` dans `Raw_Transactions` pour afficher les valeurs autres que `OK`.

Puis résoudre chaque problème de données source sous-jacent plutôt que de modifier manuellement la sortie du compte de résultat.

Le tableau de bord exécutif est conçu pour exposer cette condition via une carte de santé globale :

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



#### Les formules de tableau dynamique retournent `#SPILL!`

Une formule de déversement nécessite que sa zone de destination reste dégagée.

Vérifier :

* les cellules directement sous la formule ;
* les cellules à droite de la formule ;
* les valeurs saisies manuellement occupant la plage de déversement prévue ;
* le formatage résiduel ou le contenu copié qui a créé une obstruction.

Effacer les cellules obstruantes et permettre au tableau dynamique de s'étendre à nouveau.

#### La rentabilité apparaît anormalement élevée

Ne pas modifier immédiatement la formule de profit.

Vérifier d'abord :

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

Une marge anormalement élevée peut être causée par une transaction de coût qui a échoué à la chaîne de liaison et a donc été exclue du calcul.

C'est exactement pourquoi le classeur distingue **« zéro comme état de calcul numérique »** de **« zéro comme conclusion économique »**. Un taux de change manquant peut produire `$0.00` dans un champ numérique tout en produisant simultanément `ERR: UNKNOWN_CURRENCY` dans le champ de diagnostic.

#### La rentabilité des conteneurs apparaît surestimée ou sous-estimée

Vérifier trois choses dans l'ordre :

1. Le bon `Booking ID` est-il sélectionné ?
2. Le bon `Container ID` est-il sélectionné ?
3. `Setup_Params!B6` utilise-t-il la politique d'allocation prévue ?

Sous `EQUAL_SHARE`, le coût des ventes partagé au niveau de l'expédition est divisé par le nombre de conteneurs de l'expédition avant d'être ajouté aux coûts directs des conteneurs.

Sous `NO_ALLOCATE`, les coûts partagés au niveau de l'expédition ne sont pas attribués aux conteneurs individuels.

La distinction importe parce qu'attribuer la totalité du coût partagé au niveau de l'expédition à chaque conteneur dupliquerait le même coût économique.

### Limites de l'implémentation

Ce classeur est délibérément conçu comme une **couche de contrôle analytique légère**, et non comme un remplacement pour une plateforme comptable ou un système de gestion du transport.

Il est le plus fort lorsque :

* les données opérationnelles et financières existent déjà dans des tableurs ou des exports ;
* l'unité d'analyse clé est une expédition ou un envoi ;
* la direction a besoin de la rentabilité au niveau de l'expédition ;
* les services et frais doivent être comparés entre les expéditions ;
* plusieurs devises nécessitent une base de reporting cohérente ;
* les coûts partagés requièrent une règle d'allocation explicite ;
* les utilisateurs ont besoin de formules transparentes plutôt que d'une automatisation opaque.

Il n'est pas conçu pour fournir :

* la concurrence transactionnelle multi-utilisateurs ;
* des permissions de qualité ERP ;
* la réconciliation bancaire automatisée ;
* l'ingestion automatisée des factures transporteurs ;
* la contrainte de clé étrangère au niveau de la base de données ;
* l'orchestration de flux de travail d'entreprise.

La valeur du classeur n'est donc pas le nombre de feuilles qu'il contient. C'est la chaîne analytique contrôlée reliant **expédition → transaction → classification → conversion de devise → agrégation validée → rentabilité → exploration descendante**.

### Principe de contrôle analytique

La règle d'implémentation la plus importante peut être résumée ainsi :

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

Ce classeur rend plutôt l'état explicite :

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

Cette distinction est le fondement du modèle de fiabilité du moteur de calcul des coûts. L'architecture reconnaît explicitement que `SUMIFS` peut agréger en sécurité les valeurs numériques tout en ignorant silencieusement le texte, de sorte que les états de diagnostic ne doivent jamais être intégrés directement dans les colonnes de calcul numériques.

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

Le résultat est un flux de travail reproductible plutôt qu'un calcul de tableur ponctuel : établir les données de référence une fois, ajouter de nouvelles transactions opérationnelles, résoudre les exceptions et laisser les couches de calcul et d'analyse se mettre à jour à partir du même modèle de données sous-jacent.

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Notes finales d'architecture

Le classeur est délibérément construit autour d'un **moteur de rentabilité unique au niveau de l'expédition**, plutôt que d'une collection de calculatrices déconnectées.

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

Cette structure garde l'expédition comme unité économique centrale tout en permettant aux utilisateurs de descendre dans les services et les conteneurs ou de remonter vers la rentabilité transverse aux expéditions.

L'implémentation reconnaît aussi explicitement trois chaînes de recherche à sauts multiples :

1. **Transaction → Traitement financier → FX → Équivalent USD → compte de résultat de l'expédition**
2. **Expédition → Nombre de conteneurs → Politique de coûts partagés → Allocation des coûts partagés → Analyse des conteneurs**
3. **Code de service → Service Master → Catégorie de service → Rentabilité du service**

Ces chaînes sont validées avant que les sorties analytiques ne soient considérées comme prêtes pour la production.

### Ce contre quoi le moteur protège

Le principe de conception central n'est pas seulement l'automatisation. C'est **empêcher une relation d'entrée défectueuse de se déguiser en conclusion financière valide**.

| Échec                                              | Mécanisme de protection                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Devise inconnue                                     | Le change prend par défaut `0`, tandis qu'un état de diagnostic séparé signale le taux manquant |
| Type de transaction inconnu                             | Le repli conservateur `COGS` prévient l'inflation accidentelle du profit              |
| Expédition invalide                                      | `ERR: INVALID_BOOKING`                                                         |
| Code de service invalide                                 | `ERR: INVALID_SERVICE`                                                         |
| Chaîne de transactions rompue                             | Les lignes non `OK` sont exclues de l'agrégation du compte de résultat                                |
| Coût partagé dupliqué entre les conteneurs             | Politique d'allocation explicite et dénominateur de nombre de conteneurs                     |
| Revenu zéro                                         | Le calcul de marge retourne `0` au lieu de `#DIV/0!`                            |
| Texte de diagnostic contaminant les calculs financiers | Les colonnes de calcul numériques et les colonnes de diagnostic restent séparées             |

La matrice de repli de l'implémentation rejette spécifiquement un repli de change à `1.0` parce que cela pourrait transformer un montant en devise étrangère non reconnue en un montant USD implausiblement grand.

### Modèle d'utilisation recommandé

Pour les opérations continues, le classeur est destiné à se comporter comme un **modèle opérationnel rafraîchissable**, et non comme un rapport ponctuel.

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
* Les marges déclarées sont-elles dignes de confiance, ou des problèmes de données source non résolus cachent-ils des coûts ?
* Sur quoi la tarification, la négociation fournisseur ou la revue opérationnelle devrait-elle se concentrer ensuite ?

La SOP source suit la même séquence : établir les données de base, enregistrer les transactions financières, examiner `Data Health Status`, puis utiliser les tableaux de bord de rentabilité pour la revue.

### Principe de conception final

Le classeur ne tente pas de faire paraître l'analyse financière plus simple en cachant son incertitude.

Il rend plutôt l'incertitude visible.

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

Une collection d'outils légers d'aide à la décision sous Excel couvrant le contrôle opérationnel, l'analyse de rentabilité, la réconciliation des stocks, la planification de la main-d'œuvre et d'autres flux de travail métier.

* **Outils d'inventaire et de réconciliation** — analyse des stocks et des variances pilotée par les transactions.
* **Outils de coûts et de rentabilité** — modèles de calcul des coûts opérationnels et d'économie unitaire.
* **Outils de planification de la main-d'œuvre** — paie, capacité et planification annuelle de la main-d'œuvre.

## Licence

Ce projet est publié sous la **licence Apache 2.0**.

Vous pouvez utiliser, modifier, distribuer et bâtir sur l'œuvre conformément aux termes de la licence Apache 2.0.
