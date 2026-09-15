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
  "_origen": "Extraido de la V1: medications-js.js + medications-html.html."
};
