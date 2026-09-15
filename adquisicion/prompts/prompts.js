/* ══════════════════════════════════════════════════════════════════════
   LOS PROMPTS — /Salufolio/adquisicion/prompts/prompts.js

   « NE JAMAIS MÉLANGER LE CODE JAVASCRIPT AVEC LE PROMPT. » (P-H, 11/08)
   El prompt vive en su .txt; esta tabla dice cuáles hay. Un solo código,
   varios prompts — cambiar de prompt es cambiar una línea aquí.
   ══════════════════════════════════════════════════════════════════════ */
var SF_PROMPTS = window.SF_PROMPTS = {
 "_doctrina": "LOS PROMPTS VIVEN AQUÍ, FUERA DEL CÓDIGO (P-H, 11/08/2026).\n\nEl 11/08 el prompt estaba metido en el template literal de un .js: se\ncargó una versión equivocada y nadie lo vio. Si hubiera sido un .txt\naparte, habría bastado con cambiar el fichero.\n\nLos tres programas de adquisición —manual, asistida, automática— leen\nesta tabla. Cada uno toma el prompt que le conviene.",
 "version": "2026.09.14",
 "carpeta": "./prompts/",
 "prompts": [
  {
   "id": "extraccion",
   "fichero": "prompt-extraccion.js",
   "version": "2026.09.09",
   "por_defecto": true,
   "para_modo": [
    "A"
   ],
   "nombre": {
    "es": "Extracción general",
    "fr": "Extraction générale",
    "ca": "Extracció general",
    "en": "General extraction"
   },
   "para": {
    "es": "PDF nativo, con su capa de texto. La vía de la API.",
    "fr": "PDF natif, avec sa couche de texte. La voie de l'API.",
    "ca": "PDF natiu, amb la seva capa de text.",
    "en": "Native PDF with its text layer."
   },
   "devuelve": [
    "identificacion",
    "documento",
    "mediciones",
    "medicamentos",
    "eventos",
    "dudas"
   ],
   "variable": "SF_PROMPT_EXTRACCION"
  },
  {
   "id": "extraccion-ocr",
   "fichero": "prompt-extraccion-ocr.js",
   "version": "2026.09.14",
   "para_modo": [
    "S"
   ],
   "nombre": {
    "es": "Extracción de un escaneo (OCR)",
    "fr": "Extraction d'un scan (OCR)",
    "ca": "Extracció d'un escaneig (OCR)",
    "en": "Scan extraction (OCR)"
   },
   "para": {
    "es": "Documento escaneado, leído por OCR. El texto viene estropeado y el lector lo sabe.",
    "fr": "Document scanné, lu par OCR. Le texte arrive abîmé et le lecteur le sait.",
    "ca": "Document escanejat, llegit per OCR.",
    "en": "Scanned document read by OCR."
   },
   "devuelve": [
    "identificacion",
    "documento",
    "mediciones",
    "medicamentos",
    "eventos",
    "incertidumbres_ocr",
    "dudas"
   ],
   "_porque": "El OCR confunde letras: « 4 cigdia » por « 4 cig/día », « 71 laUmin »\npor « 71 lat/min ». Este prompt le pide que corrija lo evidente PERO QUE\nDIGA QUÉ HA CORREGIDO, con lo que leyó y lo que propone. Un número a\nmedias no se completa: un SIP con una cifra ilegible no es un SIP.\n\nNació de una prueba de P-H el 12/09: pasó un ICU escaneado a claude.ai\ny la respuesta traía « incertidumbres_ocr » sin que nadie la pidiera.\nEra mejor que nuestras « dudas »: dice lo leído, lo propuesto, y cuánto\nse fía. Eso se comprueba; una lista de frases, no.",
   "variable": "SF_PROMPT_EXTRACCION_OCR"
  }
 ],
 "_por_anadir": "Un prompt no se inventa: se prueba con documentos de verdad y se\ncorrige. Cuando uno nuevo funcione, se añade aquí con su .txt al lado\n— el código no cambia.",
 "_como": "Cada prompt vive en su .js, que declara una variable con su texto.\nEl programa lo carga con <script src> — asi pasa SIN SERVIDOR, que es\nlo que necesita la adquisicion asistida.\n\nPara cambiar un prompt: se reemplaza su fichero. El codigo no cambia."
};
