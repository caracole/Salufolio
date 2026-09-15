/* ADQUISICIÓN AUTOMÁTICA — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "automatica",
  "version": "2026.09.10-18:45:00",
  "programa": "automatica.html",
  "lanzador": "../../casa/casa.js",
  "icono": "⚙️",
  "familia": "trabajar",
  "paleta": "oscuro",
  "nombre": {
    "es": "Adquisición automática",
    "fr": "Acquisition automatique",
    "ca": "Adquisició automàtica",
    "en": "Automatic acquisition"
  },
  "descripcion": {
    "es": "Leer los PDF con clave API",
    "fr": "Lire les PDF avec la clé API",
    "ca": "Llegir els PDF amb clau API",
    "en": "Read PDFs with API key"
  },
  "acceso": [
    "profesional"
  ],
  "ayuda": "automatica.help.html",
  "escribe": true,
  "prompts": "../prompts/prompts.js",
  "principios": "../medicamentos/principios.js",
  "_escribe": "Es por aqui que entran los datos. El 💾 se enciende con cada documento leido.",
  "_cuesta": "Llama a la API de Claude: unos centimos por documento. El modo « asistida » no cuesta nada.",
  "_corregido": "09/09/2026: el evento se construia SIN FUENTE — las nueve urgencias de Ana lo probaban."
};
