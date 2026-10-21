[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Motor de rentabilidad y cálculo de costos por reserva para transitarios

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346.svg)](#) [![Tool Type](https://img.shields.io/badge/Tool%20Type-Decision%20Support-2251FF.svg)](#)

**Vea la ganancia real de cada reserva de transporte de mercancías — ingresos, costo de ventas, comisiones bancarias, depósitos, rentabilidad por servicio y costo por contenedor — sin reconstruir el análisis manualmente.**

**Sin registro. Sin instalación. Gratuito en su navegador.**

Pruebe la versión de navegador gratis. Si necesita la versión de Excel, puede comprarla con una garantía de devolución de 30 días, sin preguntas.
>
> 🌐 **Abrir en el navegador** → [aquí](https://hyvoid.github.io/Booking-Level-Profitability-Job-Costing-Engine-for-Freight-Forwarders/)
> 📥 **Descargar Excel** → [enlace de compra](https://www.theseusworkshop.com/l/uyukd?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=freight-booking-job-costing)
>
> El mismo flujo analítico está disponible en los formatos navegador y Excel.


## Lo que esta herramienta le ayuda a seguir

* **Ingresos vs. costo de ventas vs. comisiones bancarias por reserva** — para que la rentabilidad sea visible a nivel de envío y no solo a nivel de empresa.
* **Beneficio neto y margen de beneficio para cada reserva** — para que los trabajos de margen bajo o con pérdidas puedan identificarse antes de desaparecer dentro de los informes financieros agregados.
* **Rentabilidad por servicio o por cargo** — mostrando si el transporte marítimo, la inspección, el seguro, la documentación, la coordinación u otras líneas de servicio contribuyen realmente al beneficio.
* **Exposición al costo a nivel de contenedor** — separando los costos directos de contenedor de los costos compartidos a nivel de reserva cuando un envío contiene varios contenedores.
* **Transacciones en moneda extranjera convertidas a una base común en USD** — para que las líneas de ingresos y costos en monedas mixtas puedan compararse de manera coherente.
* **Excepciones de integridad de datos antes de que contaminen la cuenta de resultados** — identificación de reservas inválidas, códigos de servicio inválidos y tipos de cambio ausentes, en lugar de tratar silenciosamente datos defectuosos como números válidos.

## Flujo de inicio rápido

1. **Establezca los parámetros clave.**
   Configure la moneda base, los tipos de cambio de referencia, las correspondencias de tipos de transacción y la política de asignación de costos compartidos en `Setup_Params`. Esta es la capa de control del libro de trabajo.

2. **Importe los datos existentes.**
   Establezca los registros de reserva y contenedor, defina el catálogo de servicios y luego pegue o cargue las transacciones financieras en `Raw_Transactions`. Las exportaciones contables existentes, los registros de costos de proveedores, las facturas de clientes o los datos de hoja de cálculo pueden convertirse en la fuente de transacciones.

3. **Obtenga resultados al instante.**
   Una vez poblados los datos de origen, el motor de cálculo convierte automáticamente las monedas, clasifica las transacciones, comprueba la integridad de los vínculos y agrega las líneas financieras válidas en una cuenta de resultados a nivel de reserva.

4. **Mantenga mediante actualización periódica.**
   Añada nuevas reservas, contenedores, servicios y transacciones a medida que avanzan las operaciones. Las hojas de análisis se actualizan a partir de los datos maestros y de transacción subyacentes, en lugar de exigir una nueva calculadora para cada envío.

**Establezca los parámetros de control. Inserte los datos operativos. Obtenga el análisis por reserva. Actualice cuando el negocio cambie.**

## Por qué construí esto

La rentabilidad del transporte de mercancías suele ser más difícil de ver de lo que parece.

Una reserva puede contener ingresos de clientes, transporte marítimo, inspección en origen, seguro de carga, documentación, cargos de coordinación, costos de proveedores, comisiones bancarias, depósitos, varias monedas y varios contenedores. Esos registros suelen vivir en diferentes exportaciones operativas o contables.

El fallo resultante no es necesariamente un mal juicio financiero. A menudo es una **cadena analítica rota**.

Una reserva puede parecer rentable porque un costo de proveedor nunca se vinculó a la reserva. Una transacción en moneda extranjera puede omitirse porque su tipo de cambio no estaba configurado. Un costo compartido a nivel de reserva puede contarse incorrectamente al desglosar los contenedores individuales.

Este libro de trabajo trata esos fallos como parte del problema analítico.

Por ejemplo, en lugar de ver:

```text
Booking Revenue       $8,500
Reported COGS         $5,200
Apparent Profit       $3,300
Margin                   38.8%
```

… el flujo de trabajo puede revelar que el conjunto de datos de transacciones contiene un costo de proveedor no vinculado y una moneda desconocida. La reserva se marca entonces en lugar de presentarse como un margen limpio del 38,8%.

El objetivo no es un panel más. Es un **marco de razonamiento productizado** para convertir los datos de transporte a nivel de transacción en una visión de rentabilidad por reserva defendible.

La implementación separa explícitamente los campos de cálculo numérico del texto de diagnóstico. Un tipo de cambio ausente puede por tanto permanecer numéricamente seguro para la agregación y producir simultáneamente una advertencia `ERR: UNKNOWN_CURRENCY`. Esto impide que un estado de error se convierta en un resultado financiero aparentemente válido. 

## Problemas comunes del transporte de mercancías que esto resuelve

| Problema                                        | Sin esta herramienta                                                                                                  | Con esta herramienta                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **El beneficio solo es visible en agregado**        | Los ingresos y gastos a nivel de empresa ocultan qué envíos individuales ganan o pierden dinero.                          | Cada reserva recibe su propia vista de ingresos, costo de ventas, comisiones bancarias, beneficio neto y margen.                              |
| **Los costos llegan en varias monedas**        | La conversión de monedas se realiza manualmente o de forma inconsistente, lo que hace poco fiable la comparación entre reservas.                 | Las transacciones usan una búsqueda de monedas controlada con una excepción explícita por tipo ausente.                                  |
| **Una reserva contiene varios contenedores**     | Los costos compartidos pueden duplicarse, ignorarse o asignarse de forma inconsistente al analizar la economía de los contenedores.            | Los costos compartidos a nivel de reserva pueden asignarse sobre el número de contenedores según una política definida.                    |
| **La rentabilidad por servicio no está clara**           | Los ingresos pueden conocerse por cargo, pero el costo y el margen correspondientes son difíciles de conciliar entre envíos. | La agregación a nivel de servicio expone la rentabilidad a través de las reservas.                                                  |
| **Vínculos de datos maestros defectuosos distorsionan la cuenta de resultados en silencio** | Los identificadores de reserva, códigos de servicio o monedas inválidos pueden convertirse en costos ausentes o valores cero engañosos.              | `Data Health Status` identifica las cadenas de búsqueda rotas y el motor de cálculo solo agrega las transacciones sanas. |

## Para quién es esta herramienta

Esta herramienta está diseñada para **transitarios pequeños y medianos, operadores de transporte, equipos financieros, analistas de cálculo de costos y propietarios** que necesitan entender la rentabilidad a nivel de reserva o de envío, en lugar de basarse en una cuenta de resultados general de toda la empresa.

Encaja en operaciones donde los registros de ingresos y costos ya existen en hojas de cálculo o exportaciones contables, pero el negocio necesita una manera estructurada de conectarlos.

Es especialmente útil cuando una misma reserva puede contener varios servicios, proveedores, monedas, cargos bancarios y contenedores.

**No** está destinada a reemplazar un TMS, un ERP, una plataforma contable o un sistema transaccional de alta concurrencia. Es una capa de ejecución analítica ligera.

**No se necesita experiencia en hojas de cálculo para usar la versión de navegador. Ábrala y comience a inspeccionar el flujo de trabajo de inmediato.**

## Acerca de

Construyo rastreadores ligeros y herramientas de apoyo a la decisión para situaciones en las que hay demasiadas piezas en movimiento para tenerlas en una sola cabeza, pero no la suficiente complejidad para justificar una implementación empresarial completa.

La pregunta central es simple:

> **¿Qué información necesita estar en un solo lugar para tomar la próxima decisión con confianza?**

Este cálculo de costos por reserva aplica ese enfoque al transporte de mercancías. En lugar de tratar la rentabilidad como un informe contable final, conecta la unidad operativa — la **reserva** — con sus transacciones, servicios, contenedores, costos y resultado financiero.

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

#### Trampa 1 — Tratar un tipo de cambio ausente como un importe válido

**1. Decisión:** Una reserva parece tener un determinado costo y margen.

**2. Defecto oculto:** Una transacción de proveedor está denominada en una moneda que no está configurada en la tabla de tipos de cambio de referencia.

**3. Impacto de la decisión:** Si el tipo ausente se trata incorrectamente como `1.0`, un importe extranjero como `50,000` puede convertirse en `$50,000 USD`, distorsionando radicalmente el resultado de la reserva.

**4. Por qué está mal:** Un tipo de cambio ausente es un fallo de integridad de datos, no un tipo de cambio económico.

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
| ------------------------- | -------- | -------------: | -------- | -------------: |
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

Suponga ahora que se introduce una transacción de proveedor adicional en una moneda no configurada. El sistema **no** añade silenciosamente la transacción al costo de ventas. Su tipo de cambio aplicado pasa a ser `0`, su cálculo en USD permanece numérico y el campo de diagnóstico informa `ERR: UNKNOWN_CURRENCY`. La reserva recibe una advertencia de integridad en lugar de presentarse como limpia.

La recomendación operativa cambia en consecuencia:

> **No use el margen del 55,34% como cifra de rentabilidad final hasta que se corrija la transacción sin resolver.**

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
<summary>Raw Transactions — Tipo de cambio aplicado</summary>

**Propósito:** Dar prioridad a un tipo de cambio manual y, en caso contrario, recuperar el tipo de moneda configurado.

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

**Propósito:** Validar el vínculo de reserva, servicio y tipo de cambio de forma independiente de las columnas de cálculo financiero.

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

La implementación de origen comprueba explícitamente la cadena de correspondencia de tipos de transacción, la cadena de búsqueda de tipos de cambio, el vínculo con Service Master, la cadena de asignación de costos compartidos y la compatibilidad entre el texto de diagnóstico y los campos de agregación numéricos. 

| Dimensión de validación         | Qué se comprueba                                                                  | Resultado esperado                                          |
| ---------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Vínculo de reserva**          | Cada `Booking ID` de transacción existe en `Booking_Master`                        | Las filas inválidas reciben un estado de error                      |
| **Vínculo de servicio**          | Cada `Service Code` de transacción existe en `Service_Master`                      | Las filas inválidas se excluyen de la cuenta de resultados                       |
| **Cobertura de tipos de cambio**              | Cada transacción tiene un tipo de cambio manual válido o un tipo de referencia configurado | Las monedas desconocidas disparan una advertencia de integridad              |
| **Clasificación financiera** | El tipo de transacción se vincula a Revenue / COGS / Bank Fee / Deposit                     | Los tipos desconocados usan la alternativa conservadora COGS         |
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

La matriz de alternativas de la implementación rechaza específicamente una alternativa de tipo `1.0` porque eso podría convertir un importe no reconocido en moneda extranjera en un importe en USD implausiblemente grande. 

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
