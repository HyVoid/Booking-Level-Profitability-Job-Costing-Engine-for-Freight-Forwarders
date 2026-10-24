[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla de Excel de cálculo de costos para transitarios & Calculadora de rentabilidad de envíos (cuenta de resultados a nivel de reserva)
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/f89c1a0f-f576-43af-b26a-02bae4a47348" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Financial%20Spreadsheet%20Model-2251FF.svg)](#)

**Una plantilla de Excel de cálculo de costos para transitarios lista para auditoría y una calculadora interactiva de cuenta de resultados por envío — diseñada para seguir el margen bruto a nivel de reserva, las conversiones de divisas (FX) entre varias monedas, la asignación de costos de contenedores FCL/LCL y la rentabilidad de los cargos de flete. Concilie las facturas de clientes (AR), las cuentas de transportistas (AP), el drayage, el despacho de aduanas y las comisiones bancarias por transferencias en un modelo financiero logístico estandarizado — disponible gratis en su navegador o como hoja de cálculo Excel desbloqueada.**

**Sin registro. Sin instalación. Gratis para probar en su navegador.**

Use la aplicación web interactiva para inspeccionar inmediatamente el flujo de trabajo de cálculo de costos, o descargue la plantilla completa de hoja de cálculo Excel para importar sus propias exportaciones contables — respaldada por una garantía de devolución de 30 días sin preguntas.

> 🌐 **Iniciar la aplicación web gratuita** → [Calculadora web interactiva de cálculo de costos y cuenta de resultados de envíos para transitarios](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)  
> 📥 **Obtener el modelo completo de Excel** → [Descargar la plantilla de Excel editable de cálculo de costos y rentabilidad de reservas para transitarios](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)  
>
> *Tanto la versión de navegador como el libro de Excel descargable comparten exactamente la misma arquitectura contable relacional.*

---

## Lo que le ayuda a seguir: correspondencia de puntos débiles a soluciones en el transporte de mercancías

En lugar de esperar a los informes contables agregados de fin de mes, esta **hoja de cálculo logística de cálculo de costos** sigue y resuelve exactamente los puntos ciegos operativos que causan **fuga de margen** en el transporte de mercancías marítimo, aéreo y multimodal:

| Métrica objetivo a seguir / punto de dolor | El punto ciego común de la contabilidad de fletes | Cómo este modelo de cálculo de costos lo resuelve y lo sigue |
| :--- | :--- | :--- |
| **Cuenta de resultados y margen bruto a nivel de reserva** | El beneficio solo es visible a nivel de toda la empresa mes a mes, ocultando los envíos con pérdidas y las rutas con precios demasiado bajos. | Sigue **ingresos AR vs. costo de ventas AP vs. comisiones bancarias por transferencias** por cada ID de reserva individual (nivel B/L o AWB) para exponer el **beneficio neto y el margen %** en tiempo real. |
| **Rentabilidad de códigos de cargo y cargos accesorios** | Conocer los ingresos totales de un envío sin saber si el transporte marítimo, el drayage, el despacho de aduanas o la demora realmente ganaron dinero. | Sigue la contribución al margen a través de **códigos de servicio de flete** granulares (transporte marítimo, THC, inspección en origen, seguro de carga, documentación, coordinación). |
| **Asignación de costos compartidos con varios contenedores (FCL)** | Cuando un master-B/L tiene varios contenedores, los cargos fijos a nivel de reserva se duplican o se ignoran durante el análisis a nivel de contenedor. | Separa los **costos directos de contenedor** de los **costos compartidos a nivel de reserva**, asignando automáticamente los cargos compartidos entre los contenedores mediante una política controlada. |
| **Ganancia/pérdida y normalización con varias monedas (FX)** | Pagar a los transportistas marítimos en USD, a los agentes de origen en EUR/CNY y facturar a los clientes en moneda local usando tipos de cambio manuales inconsistentes. | Convierte todas las líneas AR/AP de monedas mixtas a una **base estandarizada en USD** mediante una tabla de búsqueda de divisas centralizada con marcas automáticas de excepción por tasas ausentes. |
| **Costos de proveedor no vinculados y auditoría de integridad de datos** | Errores de escritura en los ID de reserva, códigos de cargo inválidos o tasas de divisas ausentes hacen que los costos de proveedor caigan silenciosamente a $0, creando márgenes de beneficio artificialmente inflados. | Ejecuta un **motor de diagnóstico de integridad de datos** automatizado (`ERR: UNKNOWN_CURRENCY`, `ERR: INVALID_BOOKING`) que pone en cuarentena los registros defectuosos antes de que contaminen su cuenta de resultados. |

---

## Cómo realizar una auditoría de rentabilidad de envíos y cálculo de costos (flujo de trabajo de inicio rápido)

Convierta exportaciones desordenadas de ERP/contabilidad, facturas de transportistas y hojas de cálculo operativas en una limpia **cuenta de resultados a nivel de reserva** en cuatro pasos estructurados:

### Paso 1: Configurar la moneda base, las tasas de divisas y las reglas de asignación
Abra la hoja de control `Setup_Params` para establecer su línea base de contabilidad de fletes:
- Defina su **moneda base de información** (p. ej., USD) y complete las **tasas de cambio (FX)** de referencia.
- Asigne sus **tipos de transacción** (ingresos de clientes, costo de ventas directo, comisiones bancarias/de transferencia, depósitos de clientes).
- Seleccione su **política de asignación de costos compartidos** para envíos FCL con varios contenedores.

*Acción:* Inspeccione la estructura de parámetros preconfigurada al instante en la [demo de navegador gratuita de cálculo de costos](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/).

---

### Paso 2: Importar registros maestros de reservas y transacciones AR/AP sin procesar
Complete sus listas maestras (reservas, contenedores y catálogo de servicios de flete) y luego pegue o cargue sus partidas financieras en `Raw_Transactions`:
- **Fuentes de datos compatibles:** exportaciones de QuickBooks/Xero, registros de facturación de TMS, facturas de flete de transportistas marítimos/NVOCC, extractos de agentes de aduanas y rastreadores operativos manuales.
- **No se requiere reconstruir manualmente VLOOKUP** — simplemente suelte las filas sin procesar en la tabla de transacciones estandarizada.

---

### Paso 3: Auditar las excepciones de integridad de datos y revisar la cuenta de resultados automatizada del envío
En cuanto se cargan las transacciones, el motor de cálculo de costos realiza automáticamente:
- Normaliza las monedas extranjeras a su moneda base de información.
- Marca las vinculaciones de datos maestros defectuosas (`Data Health Status`) para que las facturas de proveedor no vinculadas nunca se oculten como partidas de costo cero.
- Agrega las líneas verificadas en la **cuenta de resultados a nivel de reserva**, el **desglose de margen por línea de servicio** y la **economía unitaria a nivel de contenedor**.

---

### Paso 4: Actualizar periódicamente y exportar a Excel para operaciones continuas
A medida que llegan nuevas salidas de buques, facturas de proveedores o cargos por detención/demora, añádalos al registro de transacciones para mantener sus márgenes de envío actualizados a lo largo de los ciclos de facturación.

> 💡 **¿Listo para ejecutar esto con sus propios datos de envíos en vivo y exportaciones contables?**  
> La versión de navegador está construida para la verificación instantánea del flujo de trabajo y pruebas en una sola sesión. Para importar sus propios volcados contables CSV/Excel, personalizar catálogos de cargos de flete, guardar instantáneas de cierre mensual y auditar cada fórmula sin conexión:  
> 👉 **[Descargue la plantilla de Excel desbloqueada de cálculo de costos para transitarios](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)** y conviértala en su motor mensual repetible de rentabilidad de envíos.

---

## La lógica de negocio y la metodología

El software contable estándar (como QuickBooks o Xero) está construido en torno al **plan de cuentas y los meses naturales**, mientras que los transitarios operan en torno a **reservas, conocimientos de embarque (B/L) y contenedores**, cuyos ingresos y facturas de proveedor a menudo abarcan varios meses y monedas. 

Para resolver la discrepancia entre la contabilidad del libro mayor y la logística operativa, este kit de herramientas implementa una **metodología relacional de cálculo de costos de 4 pilares**:

1. **Modelado relacional de la jerarquía de entidades (`Booking → Container → Service Line`):**  
   En las operaciones de flete, los costos se producen a diferentes niveles estructurales. Un cargo por despacho de aduanas o un cargo de documentación del conocimiento de embarque se aplica una vez por **reserva**, mientras que los cargos de manipulación en terminal (THC), el drayage o los cargos de división de chasis se aplican por **contenedor (TEU/FEU)**. Aplanar estos en una sola tabla causa un grave doble recuento. Este motor impone una jerarquía relacional estricta: los costos directos de contenedor se vinculan a `Container_ID`, mientras que los gastos generales de todo el envío se vinculan a `Booking_ID` y se distribuyen dinámicamente mediante una fórmula determinista de asignación:
   $$\text{Container Allocated Cost} = \text{Direct Container Cost} + \frac{\text{Booking-Level Shared Costs}}{\text{Total Active Containers in Booking}}$$
2. **Estado de diagnóstico desacoplado vs. agregación numérica (arquitectura de fallo silencioso cero):**  
   En las hojas de cálculo Excel estándar, un ID de reserva mal escrito en una fórmula `SUMIFS` ignora silenciosamente una factura de transportista marítimo de $2.000 — haciendo que un envío con pérdidas parezca salvajemente rentable. Por el contrario, un error `#N/A` en un `VLOOKUP` rompe todo el panel de cuenta de resultados. Este modelo utiliza un **método de evaluación de doble vía**: cada fila de transacción pasa por una puerta de integridad referencial (`Data_Health_Status`) que valida los ID de reserva, los códigos de servicio y las claves de moneda antes de la ejecución matemática. Las filas inválidas emiten cadenas de diagnóstico explícitas (`ERR: UNKNOWN_CURRENCY`, `ERR: ORPHAN_BOOKING`) mientras pasan un `0` seguro al motor de agregación, garantizando que el panel nunca se bloquee al tiempo que alerta visualmente a los analistas sobre datos de margen incompletos.
3. **Triangulación multimoneda centralizada:**  
   El transporte transfronterizo implica pagar a los agentes de origen en CNY/EUR, liquidar el flete marítimo en USD y absorber las comisiones bancarias de transferencia intermedias. El modelo normaliza cada fila de transacción sin procesar a nivel de partida ($T_i \times \text{FX}_{\text{rate}}$) antes del resumen ascendente de la cuenta de resultados, eliminando las distorsiones de redondeo y la deriva del tipo de cambio comunes en las conversiones manuales de resumen.
4. **Separación de la cuenta de resultados de flujo de caja vs. devengado (depósitos vs. ingresos ganados):**  
   Los transitarios suelen cobrar depósitos anticipados de clientes o anticipos de derechos de aduana antes de que un buque zarpe. Mezclar los depósitos de clientes con los ingresos de flete ganados distorsiona el margen bruto real. El motor de clasificación de transacciones aísla explícitamente los **depósitos de balance** de los **ingresos, el costo de ventas y las comisiones bancarias de la cuenta de resultados**, entregando una visión precisa del margen unitario junto con transparencia sobre la posición de caja.

---

## Por qué construí esto: arreglar la cadena analítica rota en el transporte de mercancías

La rentabilidad del transporte de mercancías es mucho más difícil de ver de lo que parece en una cotización de venta.

Una sola reserva oceánica o aérea puede implicar cargos de flete de clientes, inspección en origen, seguro de carga, cargos de documentación, drayage local, flete marítimo del transportista, comisiones bancarias por transferencias, depósitos de clientes, 3+ monedas y varios contenedores — dispersos por rastreadores operativos y exportaciones contables dispares.

Cuando los transitarios pierden dinero en un envío, la causa rara vez es una mala intención de precios. **Es una cadena analítica rota:**
- Un envío parece un **ganador con 38.8% de margen bruto** porque una factura de proveedor de drayage de $1,500 tenía un error de escritura en la referencia de la reserva y fue excluida de la fórmula `SUMIFS`.
- Un cargo de agente de origen en moneda extranjera se omitió porque su tasa de divisas no se actualizó en la tabla de búsqueda.
- Los costos compartidos de aduanas y documentación a nivel de reserva se multiplicaron accidentalmente entre 5 contenedores — o se ignoraron por completo — al cotizar al cliente las tarifas por contenedor.

Por ejemplo, en lugar de confiar ciegamente en un resumen defectuoso como este:

```text
Booking Revenue        $8,500
Reported COGS          $5,200
Apparent Net Profit    $3,300
Reported Margin         38.8%  <-- (Artificially inflated by missing vendor bill)
```

Este motor de cálculo de costos marca inmediatamente que el conjunto de datos de transacciones subyacente contiene un **costo de proveedor no vinculado** o una **moneda no configurada (`ERR: UNKNOWN_CURRENCY`)**. La reserva se pone visiblemente en cuarentena para la limpieza de datos, en lugar de presentarse a la dirección como un margen limpio del 38.8%.

El objetivo no es otro panel bonito de vanidad. Es un **marco de razonamiento financiero defendible** que garantiza que su cuenta de resultados a nivel de reserva sea matemáticamente sólida antes de que pague comisiones de ventas o renueve las tarjetas de precios de los clientes.

---

## Hojas de cálculo contables ad-hoc vs. este motor de cálculo de costos de fletes

| Dimensión de evaluación | Hojas de cálculo manuales y contabilidad genérica (sin esta herramienta) | Motor estandarizado de cálculo de costos de fletes (con esta herramienta) |
| --- | --- | --- |
| **Visibilidad a nivel de envío (B/L y AWB)** | El software de libro mayor mezcla todas las facturas mensuales, ocultando qué envíos, rutas comerciales o clientes específicos pierden dinero. | Genera una **cuenta de resultados reserva por reserva** instantánea que desglosa los ingresos brutos, el costo de ventas directo, las comisiones bancarias por transferencias, el beneficio neto y el margen %. |
| **Conciliación multimoneda (FX)** | Los operarios convierten EUR, CNY, GBP y USD manualmente usando tasas ad-hoc, causando discrepancias de margen inexplicables en el cierre de mes. | Impone una **tabla de tasas de divisas centralizada** que convierte cada línea de factura a una sola moneda base, emitiendo una advertencia explícita si falta una tasa de moneda. |
| **Asignación de costos FCL con varios contenedores** | Los cargos de documentación, el despacho de aduanas y los recargos a nivel de reserva se cuentan dos veces por contenedor o se omiten de la economía unitaria de los contenedores. | Separa dinámicamente el **costo de ventas directo de contenedor** de los **costos compartidos de la reserva**, distribuyendo los cargos compartidos uniformemente entre el número exacto de contenedores. |
| **Margen de cargos accesorios y códigos de servicio** | Los transitarios conocen el valor total de la factura pero no pueden decir si están perdiendo dinero en drayage, seguro de carga, inspección en origen o THD/THC. | Agrega ingresos vs. costo de proveedor por **código de servicio de flete granular**, revelando qué servicios de valor añadido generan beneficio vs. fuga de margen. |
| **Integridad de datos maestros y manejo de errores** | Los ID de reserva mal escritos o las vinculaciones `VLOOKUP` defectuosas hacen que los costos de proveedor caigan silenciosamente a cero (inflando el beneficio) o rompan toda la hoja con errores `#N/A`. | La **capa de diagnóstico de integridad de datos** integrada aísla los ID de reserva, códigos de servicio y tasas de divisas inválidos y mantiene las agregaciones numéricas estables y listas para auditoría. |

---

## Para quién es esto: roles logísticos objetivo y escenarios operativos

Este kit de herramientas está diseñado para **transitarios pequeños y medianos (OTI / NVOCC), agentes de aduanas, operadores 3PL y equipos financieros de logística** que necesitan un cálculo de costos de envíos de calidad empresarial sin pagar $20,000+ por una implementación pesada de TMS/ERP:

* **Propietarios y directores generales de transitarios:** Use esto como una **herramienta de auditoría de rentabilidad de envíos y comisiones de ventas a nivel directivo** para verificar los márgenes netos reales (después de comisiones bancarias y costos compartidos) antes de firmar contratos anuales de precios con cargadores o pagar comisiones a representantes de ventas.
* **Gerentes financieros de logística y contadores de fletes:** Use esto como una **plantilla mensual de conciliación de cálculo de costos** para cerrar la brecha entre el software contable general (QuickBooks, Xero, NetSuite) y los archivos operativos de envíos — detectando ingresos no facturados o facturas de proveedor huérfanas antes de cerrar los libros.
* **Analistas de precios de flete y gerentes de rutas comerciales:** Use esto como un **analizador de economía unitaria de contenedores y margen de cargos accesorios** para ver si el transporte marítimo, el transporte aéreo, el despacho de aduanas, el seguro de carga o el drayage terrestre impulsan o erosionan la rentabilidad en rutas comerciales específicas.
* **Gerentes de operaciones de transporte y despachadores:** Use esto como una **calculadora de asignación de costos con varios contenedores FCL/LCL** al gestionar carga de proyecto compleja o reservas con varios contenedores con monedas mixtas y facturas de proveedor divididas.
* **CFO a tiempo parcial y consultores de cadena de suministro:** Use esto como un **marco de diagnóstico de fuga de margen listo para usar** al auditar carteras de fletes de clientes o limpiar hojas de cálculo operativas desordenadas.

*Nota: este libro de trabajo **no** está destinado a reemplazar un TMS operativo (como CargoWise), una plataforma de reservas EDI automatizada o un sistema contable fiscal obligatorio. Es la ligera **capa de ejecución analítica de cálculo de costos** que conecta sus registros operativos de envíos con su verdadero resultado financiero.*

---

## Preguntas frecuentes sobre cálculo de costos de fletes y escenarios de margen

Si su operación de transporte lucha con alguna de las siguientes preguntas de conciliación financiera, este modelo está estructurado para resolverlas de fábrica:

* **Prevención de la fuga de margen en envíos:** *¿Cómo concilio las facturas de clientes (AR) contra las cuentas retrasadas de transportistas marítimos, drayage y agentes de aduanas (AP) a nivel de reserva individual o conocimiento de embarque (B/L)?*
* **División de costos con varios contenedores FCL:** *¿Cómo calculo con precisión el costo y el beneficio por contenedor cuando una sola reserva incluye contenedores 4x 40'HC con tanto cargos de drayage específicos del contenedor como cargos compartidos de documentación B/L?*
* **Contabilidad de fletes en varias monedas en Excel:** *¿Cómo construyo un rastreador de cuenta de resultados de envíos en Excel que maneje flete marítimo en USD, cargos de origen en EUR/CNY y comisiones bancarias por transferencias sin errores manuales de conversión de divisas?*
* **Auditoría del beneficio bruto de representantes de ventas:** *¿Cómo verifico el margen neto real de una reserva de flete antes de pagar comisiones de ventas sobre el beneficio bruto?*

---

## Acerca de Theseus Workshop

Construyo marcos ligeros de apoyo a la decisión en Excel y basados en navegador, listos para auditoría, para entornos operativos donde hay demasiadas piezas en movimiento para tenerlas en una sola cabeza — pero donde un despliegue inflado de software empresarial sería excesivo.

La pregunta de diseño central detrás de cada herramienta es simple:

> **"¿Qué datos operativos y financieros exactos necesitan estar en un solo lugar para que la próxima decisión de negocio sea matemáticamente obvia?"**

Este **motor de rentabilidad y cálculo de costos a nivel de reserva** aplica ese principio al transporte internacional de mercancías — conectando la unidad operativa central (**la reserva y el contenedor**) directamente con sus transacciones en varias monedas, líneas de servicio accesorias, estado de integridad de datos y beneficio final real.

---

*Keywords: Plantilla de Excel de cálculo de costos para transitarios, calculadora de rentabilidad de envíos, hoja de cálculo de cuenta de resultados a nivel de reserva, rastreador de margen NVOCC, modelo de asignación de costos de contenedores FCL, plantilla de conciliación de contabilidad de fletes AR/AP, análisis de margen bruto logístico.*


## Detalles técnicos

<details>
<summary>Para revisores técnicos, practicantes de Excel y colaboradores</summary>

### Arquitectura del libro de trabajo

El libro de trabajo está organizado en torno a cuatro capas funcionales: **reglas y parámetros → datos maestros → entrada de transacciones → cálculo y salida analítica**.

El diseño contiene 11 hojas:

| Capa              | Hoja                   | Rol                                                                             |
| ------------------ | ----------------------- | -------------------------------------------------------------------------------- |
| Reglas y parámetros | `Instructions`          | Instrucciones de uso, reglas de entrada de datos y definiciones de negocio               |
| Reglas y parámetros | `Setup_Params`          | Moneda base, tipos de cambio, correspondencias de transacciones y política de asignación de costos compartidos |
| Datos maestros        | `Booking_Master`        | Índice de reservas, cliente, estado y número de contenedores                             |
| Datos maestros        | `Container_Master`      | Relación reserva-contenedor 1:N                                            |
| Datos maestros        | `Service_Master`        | Código de servicio estándar, nombre del servicio y categoría                                |
| Entrada de transacciones  | `Raw_Transactions`      | Libro mayor unificado de transacciones financieras más diagnósticos de integridad de datos                |
| Motor de cálculo | `Job_Costing_Engine`    | Agregación a nivel de reserva de ingresos, costo de ventas, comisiones bancarias, beneficio, margen y depósitos  |
| Análisis            | `Booking_PL`            | Cuenta de resultados de una sola reserva y desglose por servicio                                  |
| Análisis            | `Container_Analysis`    | Costos directos a nivel de contenedor y costos compartidos asignados                                |
| Análisis            | `Service_Profitability` | Rentabilidad por servicio a través de las reservas                                           |
| Salida ejecutiva   | `Executive_Dashboard`   | KPI globales, clasificaciones de rentabilidad y advertencias de integridad de datos                    |

El flujo central es:

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

La arquitectura de origen identifica tres importantes cadenas de búsqueda de múltiples saltos: una cadena de moneda/tratamiento financiero de cuatro saltos, una cadena de costo compartido/desglose de contenedor de cuatro saltos, y una cadena de clasificación de servicios de tres saltos. 

La regla de diseño crítica es que **los valores de cálculo y los estados de diagnóstico permanecen separados**. `USD Equivalent` permanece numérico, mientras que `Data Health Status` porta errores como `ERR: UNKNOWN_CURRENCY`. Esto preserva la compatibilidad de `SUMIFS` e impide al mismo tiempo que las transacciones defectuosas entren en el motor de la cuenta de resultados. 

### Tres trampas que atrapan incluso a operadores de transporte experimentados

#### Trampa 1 — Tratar una tasa de cambio ausente como un importe válido

**1. Decisión:** Una reserva parece tener un determinado costo y margen.

**2. Defecto oculto:** Una transacción de proveedor está denominada en una moneda que no está configurada en la tabla de tasas de cambio de referencia.

**3. Impacto de la decisión:** Si la tasa ausente se trata incorrectamente como `1.0`, un importe extranjero como `50,000` puede convertirse en `$50,000 USD`, distorsionando radicalmente el resultado de la reserva.

**4. Por qué está mal:** Una tasa de cambio ausente es un fallo de integridad de datos, no una tasa de cambio económica.

**5. Enfoque correcto:** Devolver un valor numérico neutro de `0` para el campo de cálculo e informar por separado `ERR: UNKNOWN_CURRENCY`.

**6. Decisión corregida:** La reserva se marca para completar los datos, en lugar de recibir un beneficio o una pérdida falsos.

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
<summary>Lógica de la fórmula</summary>

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

La regla importante es **no asignar nunca por defecto el valor 1.0 a una moneda desconocida**. 

</details>

#### Trampa 2 — Leer la cuenta de resultados de una reserva antes de comprobar la integridad de los datos

**1. Decisión:** Una reserva con ingresos de `$8,500` y costo de ventas de `$5,200` se considera un beneficio de `$3,300`.

**2. Defecto oculto:** Una o más transacciones de origen tienen vínculos de reserva o de servicio inválidos, o una moneda sin resolver.

**3. Impacto de la decisión:** El margen aparente puede estar sobreestimado porque una línea de costo no entró silenciosamente en la agregación.

**4. Por qué está mal:** Un resultado `SUMIFS` matemáticamente correcto puede seguir siendo económicamente erróneo si las filas de origen están incompletas.

**5. Enfoque correcto:** El motor solo agrega las transacciones cuyo `Data Health Status = "OK"` e informa por separado el número de filas inválidas.

**6. Decisión corregida:** La reserva se trata como **provisional** hasta que se resuelvan las excepciones de datos.

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
<summary>Lógica de la fórmula</summary>

```excel
rev =
SUMIFS(
  Raw_Transactions!O2:O10000,
  Raw_Transactions!B2:B10000,bk,
  Raw_Transactions!N2:N10000,"Revenue",
  Raw_Transactions!P2:P10000,"OK"
)
```

El mismo filtro de integridad se aplica al costo de ventas, las comisiones bancarias y los depósitos. 

</details>

#### Trampa 3 — Asignar el costo compartido a nivel de reserva directamente a cada contenedor

**1. Decisión:** Una reserva con dos contenedores necesita una vista de rentabilidad a nivel de contenedor.

**2. Defecto oculto:** Una línea de costo de ventas a nivel de reserva pertenece al envío en su conjunto y no a un contenedor específico.

**3. Impacto de la decisión:** Asignar el costo compartido completo a ambos contenedores duplica el costo aparente.

**4. Por qué está mal:** La propiedad económica del costo está a nivel de reserva, mientras que el análisis requiere una regla de asignación controlada.

**5. Enfoque correcto:** Usar la política configurada `EQUAL_SHARE` y dividir el costo de ventas compartido entre el número de contenedores de la reserva.

**6. Decisión corregida:** Cada contenedor recibe sus costos directos más su parte asignada del costo común, preservando el total a nivel de reserva.

```text
Booking shared COGS = $1,000
Container count     = 2

Allocated shared cost per container
= $1,000 / 2
= $500
```

El libro de trabajo separa explícitamente los costos directos de contenedor de los costos compartidos a nivel de reserva y usa un denominador seguro basado en el número de contenedores. 

<details>
<summary>Lógica de la fórmula</summary>

```excel
alloc_cogs =
IF(
  alloc_policy="EQUAL_SHARE",
  direct_cogs + (shared_cogs / cntr_count),
  direct_cogs
)
```

`Setup_Params!B6` controla si el costo compartido se asigna mediante `EQUAL_SHARE` o se deja sin asignar con `NO_ALLOCATE`. 

</details>

### Escenario de ejemplo

Considere una reserva de transporte de mercancías con las siguientes transacciones válidas:

| Partida                      | Tipo     | Importe original | Moneda | Equivalente en USD |
| ------------------------- | -------- | --------------: | -------- | -------------: |
| Factura de cliente          | Revenue  |           8,500 | USD      |         $8,500 |
| Costo de proveedor de transporte marítimo | COGS     |           3,000 | USD      |         $3,000 |
| Inspección en origen         | COGS     |             900 | USD      |           $900 |
| Seguro de carga           | Revenue  |             400 | USD      |           $400 |
| Comisión bancaria               | Bank Fee |              75 | USD      |            $75 |
| Depósito reembolsable       | Deposit  |             500 | USD      |           $500 |

La cuenta de resultados válida es:

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

El depósito reembolsable de `$500` se sigue por separado en lugar de tratarse como ingresos de explotación o costo de ventas.

Suponga ahora que se introduce una transacción de proveedor adicional en una moneda no configurada. El sistema **no** añade silenciosamente la transacción al costo de ventas. Su tasa de cambio aplicada pasa a ser `0`, su cálculo en USD permanece numérico y el campo de diagnóstico informa `ERR: UNKNOWN_CURRENCY`. La reserva recibe una advertencia de integridad en lugar de presentarse como limpia.

La recomendación operativa cambia en consecuencia:

> **No use el margen del 55.34% como cifra de rentabilidad final hasta que se corrija la transacción sin resolver.**

Esta es la distinción clave entre una calculadora de rentabilidad y un flujo de trabajo de cálculo de costos controlado: el resultado va acompañado de evidencia sobre si los datos subyacentes están lo suficientemente completos para confiar en ellos.

### Referencia de fórmulas

<details>
<summary>Booking Master — Número de contenedores</summary>

**Propósito:** Determinar el número de contenedores vinculados a cada reserva y prevenir errores de división por cero.

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

Si aún no se ha introducido ningún contenedor, el denominador cae en `1`. Esta es una salvaguarda de cálculo, mientras que la condición de contenedor ausente debe seguir tratándose operativamente como un problema de calidad de datos. 

</details>

<details>
<summary>Raw Transactions — Tasa de cambio aplicada</summary>

**Propósito:** Dar prioridad a una tasa de cambio manual y, en caso contrario, recuperar la tasa de moneda configurada.

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

Una moneda desconocida devuelve `0`, no `1.0`. 

</details>

<details>
<summary>Raw Transactions — Tratamiento financiero</summary>

**Propósito:** Vincular los tipos de transacción operativos a las categorías financieras.

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

El diseño de origen usa `COGS` como alternativa conservadora para un tipo de transacción no reconocido, lo que reduce el riesgo de sobreestimar el beneficio. 

</details>

<details>
<summary>Raw Transactions — Equivalente en USD</summary>

**Propósito:** Convertir cada importe de transacción original a la moneda base USD del libro de trabajo conservando un resultado numérico.

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

Mantener esta columna numérica es importante porque los cálculos `SUMIFS` posteriores nunca deberían recibir texto de diagnóstico como `"INVALID"` en lugar de un número. 

</details>

<details>
<summary>Raw Transactions — Estado de integridad de datos</summary>

**Propósito:** Validar el vínculo de reserva, servicio y tasa de cambio de forma independiente de las columnas de cálculo financiero.

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

La capa de diagnóstico está intencionadamente separada de los campos de cálculo numéricos. 

</details>

<details>
<summary>Job Costing Engine — Cuenta de resultados a nivel de reserva</summary>

**Propósito:** Generar una lista dinámica de reservas y agregar solo las transacciones sanas.

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

El control esencial es el criterio repetido `Data Health Status = "OK"`. 

</details>

### Reglas de validación

| Campo / Condición      | Regla                                                            | Comportamiento ante errores                                                                     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Booking ID`           | Debe existir en `Booking_Master`                                  | `ERR: INVALID_BOOKING`; transacción excluida de la cuenta de resultados                              |
| `Service Code`         | Debe existir en `Service_Master`                                  | `ERR: INVALID_SERVICE`; transacción excluida de la cuenta de resultados                              |
| `Currency`             | Debe tener un tipo de cambio configurado válido o un tipo de cambio manual positivo | El tipo aplicado pasa a ser `0`; el diagnóstico informa `ERR: UNKNOWN_CURRENCY`                 |
| `Manual FX Rate`       | Un valor positivo anula el tipo de cambio de referencia                  | Un valor inválido/no positivo cae en el tipo configurado                             |
| `Transaction Type`     | Debería coincidir con la correspondencia de `Setup_Params`                             | Un tipo desconocido cae conservadoramente en `COGS`                                   |
| `USD Equivalent`       | Debe permanecer numérico                                             | El texto de diagnóstico nunca debe escribirse en el campo de agregación numérico           |
| `Data Health Status`   | Debe ser `OK` para la agregación financiera                          | Las filas no OK se excluyen de la cuenta de resultados de la reserva                                      |
| `Container Count`      | No debe convertirse en cero cuando se usa como denominador de asignación        | Cae en `1` para prevenir `#DIV/0!`                                             |
| Asignación de costos compartidos | Controlada por `Setup_Params!B6`                                 | `EQUAL_SHARE` asigna según el número de contenedores; `NO_ALLOCATE` deja solo los costos directos |
| Rentabilidad de la reserva  | Unos ingresos de cero no deben producir un error de división               | El margen devuelve `0`                                                                 |
| Integridad de datos ejecutiva  | Cualquier estado no vacío distinto de `OK` se cuenta                 | El panel muestra una advertencia en lugar de presentar un estado limpio sin salvedades                      |

La validación cruzada de origen confirma la cobertura de las entradas básicas de reserva, contenedor, servicio y transacción, además de las salidas equivalente en USD, beneficio neto, margen y costo asignado. También valida específicamente la separación entre el texto de diagnóstico y los campos `SUMIFS` numéricos. 

<!-- Technical Details parent <details> intentionally remains open for Part 2. -->
### Validación cruzada y preparación para el despliegue

La arquitectura del libro de trabajo está diseñada para validar la cadena analítica **antes** de que la dirección confíe en la cuenta de resultados resultante.

La implementación de origen comprueba explícitamente la cadena de correspondencia de tipos de transacción, la cadena de búsqueda de tasas de cambio, el vínculo con Service Master, la cadena de asignación de costos compartidos y la compatibilidad entre el texto de diagnóstico y los campos de agregación numéricos. 

| Dimensión de validación         | Qué se comprueba                                                                  | Resultado esperado                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Vínculo de reserva**          | Cada `Booking ID` de transacción existe en `Booking_Master`                        | Las filas inválidas reciben un estado de error                      |
| **Vínculo de servicio**          | Cada `Service Code` de transacción existe en `Service_Master`                      | Las filas inválidas se excluyen de la cuenta de resultados                       |
| **Cobertura de tipos de cambio**              | Cada transacción tiene un tipo de cambio manual válido o un tipo de referencia configurado | Las monedas desconocidas disparan una advertencia de integridad              |
| **Clasificación financiera** | El tipo de transacción se vincula a Revenue / COGS / Bank Fee / Deposit                     | Los tipos desconocidos usan la alternativa conservadora COGS         |
| **Agregación numérica**      | `USD Equivalent` permanece numérico en todas las condiciones                                    | `SUMIFS` no encuentra texto de diagnóstico              |
| **Agregación condicionada por integridad** | La cuenta de resultados solo incluye `Data Health Status = "OK"`                                    | Las filas de origen defectuosas no pueden entrar silenciosamente en el beneficio declarado |
| **Asignación de contenedores**     | Los costos compartidos a nivel de reserva usan la política de asignación configurada                  | Ninguna asignación repetida del costo completo entre contenedores       |
| **Protección ante ingresos cero**  | El cálculo del margen de beneficio maneja Revenue = 0                                    | Sin `#DIV/0!`                                             |
| **Seguimiento ejecutivo**     | Los errores de transacción globales se cuentan por separado                                 | El panel señala problemas de datos de origen sin resolver          |

La matriz de validación cruzada de la implementación establece que los campos de entrada básicos — reserva, contenedor, servicio y datos de transacción — y las salidas principales — equivalente en USD, beneficio neto, margen y costo asignado — están cubiertos por la arquitectura. 

### Procedimiento operativo estándar

El modelo de explotación previsto es deliberadamente simple:

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

#### 1. Establecer los datos maestros

Cree la reserva en `Booking_Master`.

Si los contenedores son relevantes, cree sus relaciones reserva-contenedor en `Container_Master`.

Mantenga el catálogo de servicios estandarizado en `Service_Master`. 

No comience el análisis financiero tecleando nombres de servicio libres ni identificadores de reserva directamente en las hojas de informes. Las tablas maestras son la capa de referencia para las cadenas de búsqueda posteriores. 

#### 2. Registrar las transacciones financieras

Introduzca ingresos, costos de proveedores, comisiones bancarias, depósitos y otra actividad financiera relevante en `Raw_Transactions`.

Cada transacción debe contener lo que corresponda de:

* `Booking ID`
* `Container ID`, cuando proceda
* `Service Code`
* `Transaction Type`
* `Allocation Level`
* `Original Amount`
* `Currency`
* `Manual FX Rate`, cuando se requiera un tipo propio de una transacción

La tabla de transacciones es la única fuente que debería recibir los registros detallados de eventos financieros. El motor de cálculo no debe editarse manualmente. 

#### 3. Comprobar la integridad de los datos

Revise `Raw_Transactions[Data Health Status]`.

Una fila limpia devuelve:

```text
OK
```

Las excepciones identifican la relación rota, como:

```text
ERR: INVALID_BOOKING
ERR: INVALID_SERVICE
ERR: UNKNOWN_CURRENCY
```

La implementación trata esto deliberadamente como una capa de control separada. Una transacción puede por tanto permanecer numéricamente segura y a la vez quedar visiblemente excluida del resultado financiero. 

#### 4. Revisar la rentabilidad

Use:

* `Job_Costing_Engine` para la rentabilidad a nivel de reserva.
* `Booking_PL` para el desglose servicio por servicio de una reserva.
* `Container_Analysis` cuando la reserva contiene varios contenedores.
* `Service_Profitability` para la economía de servicios a través de las reservas.
* `Executive_Dashboard` para el seguimiento a nivel de dirección.

Esto crea una ruta de desglose desde la **rentabilidad global → reserva → servicio → contenedor → transacción**, en lugar de obligar a que cada pregunta se responda desde un único panel resumen.

### Reglas de mantenimiento de datos

La arquitectura se apoya en datos maestros controlados porque Excel no ofrece el mismo cumplimiento estricto de claves ajenas que una base de datos o una plataforma ERP.

Las reglas de mantenimiento más importantes son:

1. **No sobrescriba los campos generados por fórmulas.**
2. **No teclee nombres de servicio a mano donde debería usarse un código de servicio.**
3. **No introduzca una moneda nueva sin añadir primero su tipo de cambio a `Setup_Params`.**
4. **No use `1.0` como alternativa para un tipo de cambio ausente.**
5. **No escriba texto de error en las columnas de agregación numéricas.**
6. **No edite manualmente la salida de `Job_Costing_Engine`.**
7. **Resuelva las filas de transacción no OK antes de tratar el margen de una reserva como definitivo.**
8. **Mantenga la política de asignación de costos compartidos centralizada en `Setup_Params`.**

El diseño de origen prohíbe específicamente codificar de forma rígida los parámetros globales dentro de las fórmulas y centraliza la moneda base, los tipos de cambio, las correspondencias de transacciones y la política de asignación en `Setup_Params`. 

### Solución de problemas

#### `⚠️ X TXN DATA ERRORS` aparece en el panel

**Causas probables:**

* Falta la moneda en la tabla de tipos de cambio.
* `Booking ID` no existe en `Booking_Master`.
* `Service Code` no existe en `Service_Master`.
* Una transacción de origen contiene un vínculo inválido.

**Resolución:**

Filtre la columna `Data Health Status` en `Raw_Transactions` para mostrar los valores distintos de `OK`.

Luego resuelva cada problema de datos de origen subyacente en lugar de cambiar manualmente la salida de la cuenta de resultados.

El Executive Dashboard está diseñado para exponer esta condición mediante una tarjeta de integridad global:

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



#### Las fórmulas de matriz dinámica devuelven `#SPILL!`

Una fórmula de desbordamiento requiere que su zona de destino permanezca despejada.

Compruebe:

* las celdas directamente debajo de la fórmula;
* las celdas a la derecha de la fórmula;
* los valores introducidos manualmente que ocupan el rango de desbordamiento previsto;
* el formato residual o el contenido copiado que ha creado una obstrucción.

Despeje las celdas obstructivas y deje que la matriz dinámica se expanda de nuevo.

#### La rentabilidad aparece inesperadamente alta

No cambie inmediatamente la fórmula de beneficio.

Compruebe primero:

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

Un margen sospechosamente alto puede deberse a una transacción de costo que falló en la cadena de vínculos y por tanto quedó excluida del cálculo.

Esta es exactamente la razón por la que el libro de trabajo distingue entre **«el cero como estado de cálculo numérico»** y **«el cero como conclusión económica».** Un tipo de cambio ausente puede producir `$0.00` en un campo numérico y al mismo tiempo producir `ERR: UNKNOWN_CURRENCY` en el campo de diagnóstico. 

#### La rentabilidad del contenedor aparece sobrestimada o subestimada

Compruebe tres cosas por orden:

1. ¿Está seleccionado el `Booking ID` correcto?
2. ¿Está seleccionado el `Container ID` correcto?
3. ¿Usa `Setup_Params!B6` la política de asignación prevista?

Bajo `EQUAL_SHARE`, el costo de ventas compartido a nivel de reserva se divide entre el número de contenedores de la reserva antes de sumarse a los costos directos de los contenedores.

Bajo `NO_ALLOCATE`, los costos compartidos a nivel de reserva no se asignan a contenedores individuales. 

La distinción importa porque asignar el costo compartido completo a nivel de reserva a cada contenedor duplicaría el mismo costo económico. 

### Límites de la implementación

Este libro de trabajo está diseñado intencionadamente como una **capa de control analítica ligera**, no como un sustituto de una plataforma contable o un sistema de gestión del transporte.

Es más fuerte cuando:

* los datos operativos y financieros ya existen en hojas de cálculo o exportaciones;
* la unidad de análisis clave es una reserva o un envío;
* la dirección necesita rentabilidad a nivel de trabajo;
* los servicios y cargos deben compararse entre reservas;
* varias monedas necesitan una base de información coherente;
* los costos compartidos requieren una regla de asignación explícita;
* los usuarios necesitan fórmulas transparentes en lugar de automatización opaca.

No está diseñado para ofrecer:

* concurrencia transaccional multiusuario;
* permisos de nivel ERP;
* conciliación bancaria automatizada;
* ingesta automatizada de facturas de transportistas;
* cumplimiento de claves ajenas a nivel de base de datos;
* orquestación de flujos de trabajo empresariales.

El valor del libro de trabajo no reside por tanto en el número de hojas que contiene. Es la cadena analítica controlada que conecta **reserva → transacción → clasificación → conversión de moneda → agregación validada → rentabilidad → desglose**.

### Principio de control analítico

La regla de implementación más importante puede resumirse así:

```text
Never let a broken data relationship
look like a valid financial result.
```

Una hoja de cálculo convencional podría permitir:

```text
Missing FX
    ↓
0 USD
    ↓
SUMIFS
    ↓
Higher Profit
```

Este libro de trabajo en cambio hace explícito el estado:

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

Esa distinción es el fundamento del modelo de fiabilidad del Job Costing Engine. La arquitectura reconoce explícitamente que `SUMIFS` puede agregar con seguridad valores numéricos mientras ignora en silencio el texto; por tanto, los estados de diagnóstico nunca deben incrustarse directamente dentro de las columnas de cálculo numéricas. 

### Secuencia de despliegue recomendada

Para una nueva implementación del libro de trabajo, la secuencia más segura es:

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

El resultado es un flujo de trabajo repetible y no un cálculo de hoja de cálculo puntual: establezca los datos de referencia una vez, añada las nuevas transacciones operativas, resuelva las excepciones y deje que las capas de cálculo y análisis se actualicen desde el mismo modelo de datos subyacente. 

<!-- Part 2 ends with the Technical Details parent <details> intentionally OPEN. Do not add </details> here. -->
### Notas finales de arquitectura

El libro de trabajo está construido deliberadamente en torno a un **único motor de rentabilidad a nivel de reserva**, en lugar de una colección de calculadoras desconectadas.

La jerarquía analítica es:

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

Esta estructura mantiene la reserva como unidad económica central y permite al mismo tiempo a los usuarios desglosar hacia abajo en servicios y contenedores o hacia arriba en la rentabilidad entre reservas. 

La implementación también reconoce explícitamente tres cadenas de búsqueda de múltiples saltos:

1. **Transacción → Tratamiento financiero → Tipo de cambio → Equivalente en USD → Cuenta de resultados de la reserva**
2. **Reserva → Número de contenedores → Política de costos compartidos → Asignación de costos compartidos → Análisis de contenedores**
3. **Código de servicio → Service Master → Categoría de servicio → Rentabilidad del servicio**

Estas cadenas se validan antes de que las salidas analíticas se consideren listas para producción. 

### Contra lo que protege el motor

El principio de diseño central no es la mera automatización. Es **impedir que una relación de entrada rota se haga pasar por una conclusión financiera válida**.

| Fallo                                              | Mecanismo de protección                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Moneda desconocida                                     | El tipo cae en `0`, mientras un estado de diagnóstico separado informa del tipo ausente |
| Tipo de transacción desconocido                                     | La alternativa conservadora `COGS` impide la inflación accidental del beneficio              |
| Reserva inválida                                      | `ERR: INVALID_BOOKING`                                                         |
| Código de servicio inválido                                      | `ERR: INVALID_SERVICE`                                                         |
| Cadena de transacciones rota                             | Las filas no `OK` se excluyen de la agregación de la cuenta de resultados                                |
| Costo compartido duplicado entre contenedores             | Política de asignación explícita y denominador basado en el número de contenedores                     |
| Ingresos cero                                         | El cálculo del margen devuelve `0` en lugar de `#DIV/0!`                            |
| Texto de diagnóstico que contamina los cálculos financieros | Las columnas de cálculo numérico y las columnas de diagnóstico permanecen separadas             |

La matriz de alternativas de la implementación rechaza específicamente una alternativa de tasa `1.0` porque eso podría convertir un importe no reconocido en moneda extranjera en un importe en USD implausiblemente grande. 

### Patrón de uso recomendado

Para operaciones continuas, el libro de trabajo está pensado para comportarse como un **modelo de explotación actualizable**, no como un informe puntual.

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

Esto hace que el libro de trabajo sea útil para preguntas recurrentes como:

* ¿Qué reservas son realmente rentables?
* ¿Qué servicios producen los márgenes más fuertes?
* ¿Qué costos de envío están provocando una pérdida inesperada?
* ¿Qué costos a nivel de reserva deben asignarse a los contenedores?
* ¿Son fiables los márgenes declarados, o hay problemas de datos de origen sin resolver que ocultan costos?
* ¿Dónde deberían centrarse a continuación la fijación de precios, la negociación con proveedores o la revisión operativa?

El POE de origen sigue la misma secuencia: establecer los datos maestros, registrar las transacciones financieras, inspeccionar `Data Health Status` y luego usar los paneles de rentabilidad para la revisión. 

### Principio de diseño final

El libro de trabajo no intenta hacer que el análisis financiero parezca más simple ocultando su incertidumbre.

En cambio, hace visible la incertidumbre.

Una reserva con un margen calculado no se trata automáticamente como una reserva digna de confianza.

Una **reserva limpia** significa:

```text
Valid Booking
+ Valid Service
+ Valid Currency / FX
+ Valid Transaction Classification
+ Healthy Transaction Chain
= Profitability Result That Can Be Reviewed
```

Esa distinción es el núcleo de la implementación.

</details>

## Otras herramientas de esta serie

Una colección de herramientas Excel ligeras de apoyo a la decisión que cubren el control operativo, el análisis de rentabilidad, la conciliación de inventarios, la planificación de la plantilla y otros flujos de trabajo de negocio.

* **Herramientas de inventario y conciliación** — análisis de inventario y desviaciones impulsado por transacciones.
* **Herramientas de costos y rentabilidad** — modelos de costo operativo y economía unitaria.
* **Herramientas de planificación de la plantilla** — nómina, capacidad y planificación anual de la plantilla.

## Licencia

Este proyecto se publica bajo la **Apache License 2.0**.

Puede usar, modificar, distribuir y construir sobre la obra de acuerdo con los términos de la Apache License 2.0.
