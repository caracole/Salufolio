/* PACIENTE — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "paciente",
  "version": "2026.09.11-16:04:54",
  "programa": "index.html",
  "lanzador": "../casa/casa.js",
  "icono": "🧑",
  "familia": "trabajar",
  "paleta": "oscuro",
  "nombre": {
    "es": "Paciente",
    "fr": "Patient",
    "ca": "Pacient",
    "en": "Patient"
  },
  "descripcion": {
    "es": "Elegir o crear un expediente",
    "fr": "Choisir ou créer un dossier",
    "ca": "Triar o crear un expedient",
    "en": "Pick or create a record"
  },
  "acceso": [
    "todos"
  ],
  "escribe": false,
  "sin_expediente": true,
  "_doctrina": "« le choix du patient est une garde, pas une etape » (P-H, 11/09).\nCualquier programa lo llama con ?vuelve=<su id>, y el vuelve ahi con\nel expediente en la direccion. NO carga el fichero: dice cual es.",
  "detalle": {
    "es": "Elegir el expediente con el que se va a trabajar, o crear uno nuevo. No carga el fichero: dice cuál es, y devuelve la mano a quien lo pidió.",
    "fr": "Choisir le dossier avec lequel on va travailler, ou en créer un neuf. Il ne charge pas le fichier : il dit lequel, et rend la main à qui l'a demandé.",
    "ca": "Triar l'expedient amb què es treballarà, o crear-ne un de nou.",
    "en": "Pick the record to work with, or create a new one. It doesn't load the file: it says which, and hands back."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026)."
};
