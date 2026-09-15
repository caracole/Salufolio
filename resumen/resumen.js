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
  "version": "2026.09.05-19:07:50",
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
  "escribe": false,
  "_origen": "Extraido de la V1: core-resumen-js.js + core-panels-html.html (lineas 4-22).",
  "_cloisonnement": "Todo lo propio de este programa vive en esta carpeta: html, json, ayuda, prompts, traducciones.",
  "_sin_json": "P-H, 05/09: NO MAS JSON. Un navegador no puede leer un fichero local (regla CORS): abriendo resumen.html con file:/// el fetch del json falla y el programa se queda mudo. Un .js se carga con <script src>, y eso SI se permite. Asi la configuracion sigue fuera del codigo, y todo funciona sin servidor."
};
