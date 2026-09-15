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
  "_doctrina": "« le choix du patient est une garde, pas une etape » (P-H, 11/09).\nCualquier programa lo llama con ?vuelve=<su id>, y el vuelve ahi con\nel expediente en la direccion. NO carga el fichero: dice cual es."
};
