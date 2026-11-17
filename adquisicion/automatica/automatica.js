/* ADQUISICIÓN AUTOMÁTICA — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "automatica",
  "version": "2026.11.16-21:57:10",
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
  "pdfjs": {
    "lib": "../../comun/pdfjs/pdf.min.js",
    "worker": "../../comun/pdfjs/pdf.worker.min.js",
    "_que": "pdf.js lee el TEXTO de un PDF para saber si ya se ha leído (P-H, 03/11/2026). Copia de la de Cotejo, subida a comun/ porque la usan varios programas (regla del 21/08) ; Cotejo conserva la suya."
  },
  "extension_expediente": ".sf",
  "_extension_expediente": "La copia que descarga « Guardar lo leído » (P-H, 03/11/2026 : el .mf está muerto).",
  "extracciones": {
    "carpeta": "extracciones",
    "historial": "extracciones",
    "_que": "1 PDF = 1 JSON (P-H, 11/11 y 13/11/2026) : cada respuesta de la IA, tal cual, en pacientes/<matricula>/extracciones/<nombre del PDF>.json — el mismo nombre que el PDF, uno por PDF. Volver a leerlo lo sustituye ; el antiguo pasa antes a historial/<historial>/<nombre>_<fecha>.json. Se escribe con el permiso de la carpeta del paciente (el del .sf) : sin servidor. Vacío = no se guarda."
  },
  "_escribe": "Es por aqui que entran los datos. El 💾 se enciende con cada documento leido.",
  "_cuesta": "Llama a la API de Claude: unos centimos por documento. El modo « asistida » no cuesta nada.",
  "_corregido": "09/09/2026: el evento se construia SIN FUENTE — las nueve urgencias de una paciente lo probaban.",
  "detalle": {
    "es": "Lee los documentos uno tras otro, pero necesita una clave de la API. Rápido, pero se paga. Cada lectura deja su línea en el diario: qué fichero, qué se sacó, qué faltaba.",
    "fr": "Il lit les documents l'un après l'autre, mais il lui faut une clé de l'API. Rapide, mais ça se paie. Chaque lecture laisse sa ligne au journal : quel fichier, ce qui en est sorti, ce qui manquait.",
    "ca": "Llig els documents un rere l'altre, però necessita una clau de l'API.",
    "en": "Reads documents one after another, but needs an API key. Fast, but it costs. Each reading leaves its line in the log."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026)."
};
