/* ══════════════════════════════════════════════════════════════════════
   RESUMEN — su configuración (P-H, 05/09/2026)

   Un .js en vez de un .json: el navegador no puede leer un fichero
   local con fetch (regla CORS), pero SÍ puede cargar un script. Así
   la configuración sigue fuera del código, y el programa funciona
   sin servidor — abriéndolo directamente desde el disco.

   El lanzador lo carga de la misma manera.
   ══════════════════════════════════════════════════════════════════════ */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "resumen",
  "version": "2026.11.05-13:21:32",
  "programa": "resumen.html",
  "lanzador": "../casa/casa.js",
  "icono": "📄",
  "familia": "ver",
  "paleta": "oscuro",
  "nombre": {
    "es": "Resumen",
    "fr": "Résumé",
    "ca": "Resum",
    "en": "Summary"
  },
  "descripcion": {
    "es": "Lo esencial de un vistazo",
    "fr": "L'essentiel d'un regard",
    "ca": "L'essencial d'una ullada",
    "en": "The essentials at a glance"
  },
  "acceso": [
    "todos"
  ],
  "ayuda": "resumen.help.html",
  "glosario": "../glosario/glosario.html",
  "escribe": true,
  "_origen": "Extraido de la V1: core-resumen-js.js + core-panels-html.html (lineas 4-22).",
  "_cloisonnement": "Todo lo propio de este programa vive en esta carpeta: html, json, ayuda, prompts, traducciones.",
  "_sin_json": "P-H, 05/09: NO MAS JSON. Un navegador no puede leer un fichero local (regla CORS): abriendo resumen.html con file:/// el fetch del json falla y el programa se queda mudo. Un .js se carga con <script src>, y eso SI se permite. Asi la configuracion sigue fuera del codigo, y todo funciona sin servidor.",
  "detalle": {
    "es": "Todo el expediente en una página: lo que se ha medido, lo que se toma, lo que ha pasado. Es por donde se empieza cuando no se sabe qué buscar.",
    "fr": "Tout le dossier sur une page : ce qui a été mesuré, ce qui est pris, ce qui est arrivé. C'est par là qu'on commence quand on ne sait pas quoi chercher.",
    "ca": "Tot l'expedient en una pàgina: el que s'ha mesurat, el que es pren, el que ha passat.",
    "en": "The whole record on one page: what was measured, what is taken, what happened. Start here when you don't know what to look for."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026).",
  "_escribe": "true desde el 04/11/2026 : el Resumen escribe UNA sola rubrica del .sf, preferencias.resumen (los parametros que elige el profesional, con su fecha). Nada mas.",
  "panorama": {
    "meses_tratamiento": 12,
    "estados_fin": [
      "abandonne",
      "abandonado",
      "abandoned",
      "suspendu",
      "suspendido",
      "suspended",
      "termine",
      "terminado",
      "stopped"
    ],
    "parametros": [
      "hemoglobina",
      "leucocitos",
      "plaquetas",
      "creatinina",
      "filtrado",
      "sodio",
      "potasio",
      "glucosa",
      "pcr",
      "nt_probnp",
      "albumina",
      "hba1c"
    ],
    "dinamicos": {
      "meses": 12,
      "cambio": 0.2,
      "max": 4
    },
    "max_pasos": 8,
    "umbral_flecha": 0.05,
    "colores": {
      "urg": "rojo",
      "hos": "azul",
      "otr": "ambar"
    }
  },
  "_panorama": "La vista panoramica (P-H, 04/11/2026). meses_tratamiento : un tratamiento esta en curso si su prescripcion (desde) no tiene mas de estos meses, y su fin es posterior a hoy — o no tiene fin y es cronico (\"cronico\": true en el medicamento) ; un cronico cuya fin paso sigue a la vista, en naranja, « caducado ». estados_fin : los estados que lo sacan siempre. parametros : la lista de base — el profesional la cambia con ⚙, y su eleccion va al .sf (preferencias.resumen). dinamicos : se anaden los que se han movido mas de « cambio » (0.2 = 20 %) en los ultimos « meses », « max » como mucho, marcados ✦. max_pasos : lineas de « ultimos pasos ». umbral_flecha : por debajo de esta variacion (0.05 = 5 %) la flecha es →.",
  "_colores": "panorama.colores : los colores de ORIGEN de las barras de la actividad (urgencias, ingresos, el resto), por nombre de pavé de ../comun/paleta-colores.js (P-H, 04/11/2026 : rojo, azul, amarillo). El usuario los cambia con un clic en el cuadradito de la leyenda ; su eleccion queda en este navegador (sf_resumen_colores)."
};
