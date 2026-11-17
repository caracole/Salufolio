/* ═══════════════════════════════════════════════════════════════════════
   LA ESPERA — su tabla — comun/espera.idiomas.js
   Versión 2026.11.13-16:53:42
   (P-H, 11/11/2026 : « la coquille du blason qui tourne lentement » mientras se carga
    un módulo o un documento. Nada en duro : la imagen, los tiempos y los textos están aquí.)
   ═══════════════════════════════════════════════════════════════════════ */
var SF_ESPERA_TABLA = {
  "_imagen": "la imagen que gira, junto a espera.js ; se puede sustituir por el blasón con el mismo nombre",
  "imagen": "concha.svg",
  "_retraso_ms": "no se enseña nada si la carga dura menos (el navegador ya tenía el fichero) : nada de parpadeo",
  "retraso_ms": 300,
  "_vuelta_s": "una vuelta entera, en segundos : despacio",
  "vuelta_s": 4,
  "tamano_px": 72,
  "_reloj": "EL RELOJ (P-H, 13/11/2026 : el sablier que gira del Informe, para todos) : icono, una vuelta en segundos, tamaño por defecto, dónde van los segundos (lado | debajo | encima — cada programa puede pedir otro) y cómo se escriben.",
  "reloj": { "icono": "⏳", "vuelta_s": 2, "tamano_px": 18, "segundos": "lado", "formato": "{s} s" },
  "textos": {
    "es": { "modulo": "Cargando…", "documento": "Abriendo el documento…" },
    "fr": { "modulo": "Chargement…", "documento": "Ouverture du document…" },
    "ca": { "modulo": "Carregant…", "documento": "Obrint el document…" },
    "en": { "modulo": "Loading…", "documento": "Opening the document…" }
  }
};
