Versión 2026.09.19-18:15:47
# Sobre la calidad de los documentos entregados

**Historia clínica de una paciente · portal GVA Salut**

Solicitud de acceso — art. 15 RGPD · Solicitud de portabilidad — art. 20 RGPD

---

## De qué se trata

Descargué del portal la historia clínica completa de mi esposa: **59 documentos**, todos en PDF.

No es una queja sobre el contenido médico, que no discuto. Es una constatación
sobre **la forma en que se entregan los datos** — y sobre lo que, entregados así,
resulta imposible hacer con ellos.

Cada documento fue leído uno por uno. Lo que sigue no es una impresión: son
recuentos, con los nombres de los ficheros.

### Los documentos

| Tipo | Cantidad |
|---|---|
| Informes de Urgencias (`ICU`) | 17 |
| Informes de Prueba diagnóstica (`PRI`) | 14 |
| Informes de resultados de Pruebas (`PRL`) | 8 |
| Informes de Alta (`ICA`) | 5 |
| Informes de Continuidad de Cuidado (`ICC`) | 4 |
| Historia Clínica Resumida (`HCR`) | 4 |
| Otros (`RPE`) | 2 |
| **Total leído** | **54** |

---

## Lo que falta, documento por documento

### 1 · La fecha de la extracción no está impresa

**23 documentos afectados**

En estos documentos figuran resultados de analítica, pero **no el día en que se
tomó la muestra**. Sólo consta la fecha del episodio, o la de la firma.

Un resultado sin fecha de toma no se puede situar en el tiempo. Para un
seguimiento de diez años — que es exactamente lo que necesita quien cuida a
una persona mayor — una serie de valores sin fechas fiables no dice nada.

Ficheros: `HCR_17072026045212.pdf` · `HCR_17072026065532.pdf` · `ICA_11072026074246.pdf` · `ICA_17072026052307.pdf` · `ICA_17072026070616.pdf` · `ICA_17072026070705.pdf` …

### 2 · Fechas incompletas: sólo el año, o el mes

**12 documentos afectados**

Antecedentes fechados «2016», «septiembre 2021», «2023». Sin día.

Entiendo que un antecedente antiguo pueda no tener día exacto. Pero cuando se
trata de un ictus o de una trombosis, el día importa: es lo que permite saber
qué tratamiento se dio antes y cuál después.

Ficheros: `ICA_11072026074246.pdf` · `ICA_17072026070705.pdf` · `ICU_17072026052105.pdf` · `ICU_17072026052127.pdf` · `ICU_17072026052202.pdf` · `ICU_17072026052229.pdf` …

### 3 · Fecha de firma posterior a los hechos

**10 documentos afectados**

Once documentos llevan **fecha de firma de julio de 2026** para episodios
ocurridos en 2025 o antes — un año después.

Un informe no puede firmarse un año después del alta. O bien el campo «firma»
recoge en realidad la fecha de impresión, o bien hay un error sistemático.

En cualquiera de los dos casos: **el documento entregado no permite saber
cuándo fue redactado**. Y ese dato no es accesorio — es lo que da valor legal
a un informe clínico.

Ficheros: `ICA_17072026070742.pdf` · `ICU_11072026074210.pdf` · `ICU_17072026051946.pdf` · `ICU_17072026052018.pdf` · `ICU_17072026052105.pdf` · `ICU_17072026052127.pdf` …

### 4 · Sin número de informe ni de solicitud

**11 documentos afectados**

Ningún identificador que permita referirse a un documento concreto: ni número
de informe, ni número de solicitud de laboratorio.

Sin ellos, **no se puede citar un documento**. Ni pedir una corrección sobre él,
ni señalar un error, ni comprobar si dos documentos son el mismo.

Ficheros: `HCR_17072026065532.pdf` · `ICA_17072026070742.pdf` · `ICC_17072026070516.pdf` · `ICU_17072026052018.pdf` · `ICU_17072026052105.pdf` · `ICU_17072026052229.pdf` …

### 5 · Gasometrías sin su condición de medida

**4 documentos afectados**

Valores de gasometría sin indicar la FiO2 ni si la paciente respiraba aire
ambiente u oxígeno.

Una pO2 bajo oxígeno y una pO2 al aire **no se comparan**. Sin la condición,
el valor no significa nada, y ponerlos en la misma serie es peor que no
tenerlos: da una curva que miente.

Ficheros: `ICA_17072026052307.pdf` · `ICA_17072026070616.pdf` · `ICA_17072026070742.pdf` · `ICU_17072026070137.pdf`

### 6 · Valores citados en texto, sin cifras

**2 documentos afectados**

Resultados mencionados de forma narrativa — «insuficiencia respiratoria parcial
crónica» — sin los valores numéricos que los sustentan. O parámetros marcados
con asteriscos en lugar de la cifra.

Ficheros: `ICU_17072026052018.pdf` · `ICU_17072026052105.pdf`

---

## Documentos repetidos, imposibles de distinguir

El portal entrega el mismo informe tantas veces como se descarga. El nombre del
fichero cambia — pero **sólo por el segundo de impresión**:

```
ICU_17072026052018.pdf
ICU_17072026052045.pdf     ¿el mismo documento? nada lo dice
ICU_17072026052105.pdf
```

Como los documentos tampoco llevan número de informe (punto 4), **no hay manera
de saber si dos ficheros son el mismo documento** sin abrirlos y compararlos
línea por línea.

---

## Lo que pido

El artículo 20 del RGPD habla de un formato **«estructurado, de uso común y
lectura mecánica»**. Lo que se me ha entregado son impresiones en PDF: hechas
para el ojo, no para ser leídas por una máquina.

Solicito, por tanto:

1. **Los mismos datos en formato estructurado** — JSON, XML, CSV o HL7 FHIR,
   cualquiera de uso común. No una impresión de ellos.

2. **Que cada documento lleve su identificador**: número de informe o de
   episodio, de modo que se pueda citar, corregir y comprobar.

3. **Que las fechas sean las de los hechos**: fecha de toma para una analítica,
   fecha real de redacción para un informe. No la del día en que se imprimió.

4. **Que las mediciones lleven sus condiciones** cuando sin ellas no significan
   nada — la FiO2 de una gasometría, por ejemplo.

---

## Por qué esto importa

No pido esto por curiosidad técnica.

Mi esposa tiene 88 años y una demencia avanzada. La cuido en casa. En diez años
ha pasado por varios hospitales y varios servicios, y **ninguno tiene la lista
completa de lo que toma**. Yo sí — o podría tenerla, si los datos que me
entregan fueran utilizables.

Reunir esa historia dispersa es exactamente lo que el artículo 20 pretende
permitir. Un PDF de impresión lo impide.

---

*Este documento se apoya en un registro de lectura generado automáticamente
el 9 de septiembre de 2026, disponible si se solicita. Recoge, documento por
documento, lo que faltaba en cada uno.*