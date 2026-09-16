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
  "_origen": "Extraido de la V1: auditoria-js.js + auditoria-html.html.",
  "detalle": {
    "es": "El expediente se revisa a sí mismo: fechas imposibles, valores fuera de rango, huecos, datos sin procedencia. Lo señala, no lo corrige.",
    "fr": "Le dossier se relit lui-même : dates impossibles, valeurs hors bornes, trous, données sans provenance. Il le signale, il ne corrige pas.",
    "ca": "L'expedient es revisa a si mateix: dates impossibles, valors fora de rang.",
    "en": "The record reviews itself: impossible dates, out-of-range values, gaps, data with no source. It flags, it doesn't fix."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026)."
};
