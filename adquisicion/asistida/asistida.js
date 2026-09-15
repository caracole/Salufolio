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
  "_ocr": "Tesseract vive en herramientas/cotejo/lib/, con el espanol.\nTodo en local: nada sale a Internet. Pero los workers estan prohibidos\nen file:// — hace falta el servidor."
};
