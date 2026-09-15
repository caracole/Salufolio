/* AUDITORÍA — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "auditoria",
  "version": "2026.09.07-17:57:25",
  "programa": "auditoria.html",
  "lanzador": "../casa/casa.js",
  "icono": "🔍",
  "familia": "trabajar",
  "paleta": "contraste",
  "nombre": {
    "es": "Auditoría",
    "fr": "Audit",
    "ca": "Auditoria",
    "en": "Audit"
  },
  "descripcion": {
    "es": "El expediente se revisa a sí mismo",
    "fr": "Le dossier se relit lui-même",
    "ca": "L'expedient es revisa a si mateix",
    "en": "The record reviews itself"
  },
  "acceso": [
    "profesional",
    "investigador"
  ],
  "ayuda": "auditoria.help.html",
  "escribe": true,
  "glosario": "../glosario/glosario.html",
  "carpeta_pdf": "../pacientes/{matricula}/sources/",
  "_escribe": "Las correcciones van al expediente y encienden el 💾.",
  "_origen": "Extraido de la V1: auditoria-js.js + auditoria-html.html."
};
