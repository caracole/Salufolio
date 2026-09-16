/* FARMACOVIGILANCIA — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "farmacovigilancia",
  "version": "2026.09.07-17:56:29",
  "programa": "farmacovigilancia.html",
  "lanzador": "../casa/casa.js",
  "icono": "⚠️",
  "familia": "ver",
  "paleta": "oscuro",
  "nombre": {
    "es": "Farmacovigilancia",
    "fr": "Pharmacovigilance",
    "ca": "Farmacovigilància",
    "en": "Pharmacovigilance"
  },
  "descripcion": {
    "es": "Efectos e interacciones",
    "fr": "Effets et interactions",
    "ca": "Efectes i interaccions",
    "en": "Effects and interactions"
  },
  "acceso": [
    "profesional",
    "investigador"
  ],
  "ayuda": "farmacovigilancia.help.html",
  "escribe": false,
  "glosario": "../glosario/glosario.html",
  "principios": "../medicamentos/principios.js",
  "_origen": "Extraido de la V1: pharmacovig-js.js + pharmacovig-html.html.",
  "detalle": {
    "es": "Los efectos que aparecen después de un cambio de tratamiento, y las interacciones entre lo que se toma. No acusa: señala lo que coincide en el tiempo.",
    "fr": "Les effets qui paraissent après un changement de traitement, et les interactions entre ce qui est pris. Il n'accuse pas : il signale ce qui coïncide dans le temps.",
    "ca": "Els efectes que apareixen després d'un canvi de tractament.",
    "en": "Effects appearing after a treatment change, and interactions between what is taken. It doesn't accuse: it flags what coincides in time."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026)."
};
