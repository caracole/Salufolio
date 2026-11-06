/* LOS MODELOS DE IA — /Salufolio/comun/modelos-ia.js
   Versión 2026.11.05-12:57:31
   (05/11/2026, P-H : « le libellé Commentaire de l'IA (claude-sonnet-4-6) à supprimer et mettre dans une table ».)
   id : el nombre técnico que se manda al proveedor — nunca a la vista del usuario ; etiqueta : lo que el usuario lee, si hace falta.
   defecto : el modelo cuando el usuario no ha elegido otro. Un modelo nuevo : una entrada más.
   Más adelante (proyecto de P-H) : otros proveedores — esta tabla es su sitio. */
var SF_MODELOS_IA = window.SF_MODELOS_IA = {
 "version": "2026.11.05-12:57:31",
 "defecto": "claude-sonnet-5",
 "modelos": [
  {
   "id": "claude-sonnet-5",
   "proveedor": "anthropic",
   "etiqueta": {
    "es": "IA — modelo estándar",
    "fr": "IA — modèle standard",
    "ca": "IA — model estàndard",
    "en": "AI — standard model"
   }
  },
  {
   "id": "claude-sonnet-4-6",
   "proveedor": "anthropic",
   "etiqueta": {
    "es": "IA — modelo anterior",
    "fr": "IA — modèle précédent",
    "ca": "IA — model anterior",
    "en": "AI — previous model"
   }
  }
 ]
};
