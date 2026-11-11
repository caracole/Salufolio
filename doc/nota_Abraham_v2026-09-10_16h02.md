Versión 2026.09.19-18:15:47
# Una anomalía en las fechas de los PDF del portal

*Nota para D. Abraham · Servicio de Documentación · septiembre de 2026*

---

Estimado Abraham:

Antes de nada, gracias por su llamada del lunes a las 12:45. Se tomó la
molestia de telefonearme por un expediente que no era el suyo, y lo hizo con
una cortesía que se agradece. Me dijo que no dudara en acudir a usted.

Acudo — pero no por lo mismo.

Al examinar los documentos que descargué del portal me encontré con algo que
no creo que sea intencionado, y que seguramente pocos han advertido. No es una
queja: es un aviso, por si les sirve.

## De qué se trata

Descargué la historia clínica de mi esposa: 59 documentos en PDF, diez años de
atención en varios centros.

---

## La anomalía

Cada PDF lleva **dos fechas**, y la que encabeza el documento no es la suya.

Un ejemplo real, el fichero `ICA_17072026070742.pdf`:

| Dónde | Qué dice |
|---|---|
| Nombre del fichero | `17072026` `070742` → 17/07/2026 a las 07:07:42 |
| Campo **Fecha** | 17/07/2026 · 1:07:41 |
| Campo **Fecha creación** | **14/09/2021** |

El campo llamado simplemente **«Fecha»** —el primero que uno lee— recoge el
momento en que se pulsó el botón de descargar. Un segundo antes de la hora que
figura en el nombre del fichero.

La fecha real del informe está en **«Fecha creación»**: septiembre de 2021.
Casi cinco años antes.

---

## Por qué importa

**Los 59 documentos parecen del mismo día.** Todos llevan «Fecha: 17/07/2026»,
porque los descargué la misma tarde. Diez años de historia reducidos a una sola
fecha.

**Cualquier lectura automática se equivoca.** Escribí un pequeño programa para
ordenar cronológicamente esos informes. Leyó el campo «Fecha» —que es lo que
cualquiera leería— y situó en julio de 2026 documentos de 2021, 2016, 2022.
Tuve que corregirlo cuando vi que once informes aparecían firmados un año
después de los hechos que relataban.

**Y quien no sea informático no lo verá.** Leerá «Fecha: 17/07/2026» y creerá
que el informe es de ese día. Nada en el documento advierte de lo contrario.

---

## Lo que propongo

Que **el campo «Fecha» lleve la fecha del documento**, y que la de impresión,
si conviene conservarla, se llame como lo que es: *«Impreso el…»*.

Es un cambio de etiqueta. Nada más.

---

## Dos cosas más, ya que escribo

**Los documentos no llevan número de informe.** Sin él no se puede citar uno
concreto —ni para pedir una corrección, ni para señalar un error, ni para
comprobar si dos ficheros son el mismo documento. Y el portal entrega el mismo
informe tantas veces como se descargue, con nombres que sólo difieren en el
segundo de impresión.

**En más de la mitad de los informes de laboratorio no consta el día de la
extracción.** Sólo la fecha del episodio. Un resultado sin fecha de toma no se
puede situar en una serie: para un seguimiento de años, es como no tenerlo.

---

## Por qué me tomo esta molestia

Mi esposa tiene 88 años y la cuido en casa. En diez años ha pasado por varios
hospitales y varios servicios, y ninguno tiene la lista completa de lo que
toma. Yo intento tenerla.

Reunir esa historia dispersa es la razón por la que uno descarga su expediente.
Con los documentos tal como están, cuesta más de lo que debería —y la mayoría
de la gente no lo conseguiría.

Quedo a su disposición si quieren ver los ficheros o el registro de lectura que
generé al examinarlos. Está documento por documento.

---

Y ya que hablamos: si alguna vez tuviera curiosidad, con mucho gusto le
enseñaría lo que he ido construyendo para reunir el expediente de mi mujer.

No vendo nada ni pido nada. De medicina soy un aficionado —de informática no:
llevo en el oficio desde 1966, cuando a los ordenadores todavía se les llamaba
calculadoras electrónicas. Quizá le diga algo sobre lo que un paciente necesita
de sus documentos, visto desde el otro lado.

Gracias por su tiempo.

Pierre-Henri Giraud
