/* MEDICAMENTOS — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "tratamientos",
  "version": "2026.09.07-14:51:20",
  "programa": "tratamientos.html",
  "lanzador": "../casa/casa.js",
  "icono": "💊",
  "familia": "trabajar",
  "paleta": "sepia",
  "nombre": {
    "es": "Medicamentos",
    "fr": "Médicaments",
    "ca": "Medicaments",
    "en": "Medication"
  },
  "descripcion": {
    "es": "Crear, modificar, recetar",
    "fr": "Créer, modifier, prescrire",
    "ca": "Crear, modificar, receptar",
    "en": "Create, edit, prescribe"
  },
  "acceso": [
    "profesional",
    "cuidador"
  ],
  "ayuda": "tratamientos.help.html",
  "escribe": true,
  "glosario": "../glosario/glosario.html",
  "principios": "../medicamentos/principios.js",
  "_escribe": "Este programa modifica el expediente: el 💾 de la banda se enciende cuando algo cambia.",
  "_origen": "Extraido de la V1: medications-js.js + medications-html.html.",
  "detalle": {
    "es": "Lo que toma y lo que ha tomado, con sus fechas y sus momentos del día. Señala los principios activos repetidos y las interacciones conocidas.",
    "fr": "Ce qu'il prend et ce qu'il a pris, avec les dates et les moments de la journée. Il signale les principes actifs répétés et les interactions connues.",
    "ca": "El que pren i el que ha pres, amb les seues dates i els seus moments del dia.",
    "en": "What is taken and what was taken, with dates and times of day. It flags repeated active ingredients and known interactions."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026)."
};
