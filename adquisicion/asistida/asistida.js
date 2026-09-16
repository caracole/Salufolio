/* ADQUISICIÓN ASISTIDA — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "asistida",
  "version": "2026.09.14-12:26:39",
  "programa": "asistida.html",
  "lanzador": "../../casa/casa.js",
  "carpeta": "adquisicion/asistida/",
  "icono": "📋",
  "familia": "trabajar",
  "paleta": "obsidiana",
  "nombre": {
    "es": "Adquisición asistida",
    "fr": "Acquisition assistée",
    "ca": "Adquisició assistida",
    "en": "Assisted acquisition"
  },
  "descripcion": {
    "es": "Copiar y pegar con claude.ai — sin clave",
    "fr": "Copier-coller avec claude.ai — sans clé",
    "ca": "Copiar i enganxar amb claude.ai",
    "en": "Copy-paste with claude.ai"
  },
  "acceso": [
    "todos"
  ],
  "escribe": true,
  "ayuda": "asistida.help.html",
  "prompts": "../prompts/prompts.js",
  "lib": "../../herramientas/cotejo/lib/",
  "_doctrina": "El modo que no cuesta nada y no pide clave. Se saca el texto del\ndocumento —con OCR si esta escaneado—, se lleva a claude.ai, y se trae\nla respuesta a mano. Deja su linea en el diario, modo S.",
  "_ocr": "Tesseract vive en herramientas/cotejo/lib/, con el espanol.\nTodo en local: nada sale a Internet. Pero los workers estan prohibidos\nen file:// — hace falta el servidor.",
  "detalle": {
    "es": "Se saca el texto de un PDF —con OCR si está escaneado—, se lleva a claude.ai de un toque y se trae la respuesta. Sin clave y sin coste: sólo su tiempo.",
    "fr": "On tire le texte d'un PDF —avec l'OCR s'il est scanné—, on le porte à claude.ai d'un geste et on rapporte la réponse. Sans clé et sans frais : seulement votre temps.",
    "ca": "Es trau el text d'un PDF —amb OCR si està escanejat— i es porta a claude.ai.",
    "en": "Pull the text from a PDF —with OCR if scanned—, take it to claude.ai in one tap and bring the answer back. No key, no cost: only your time."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026)."
};
