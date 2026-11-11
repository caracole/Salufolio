/* ══════════════════════════════════════════════════════════════════════
   LOS ALIAS DE CAMPOS — /Salufolio/comun/alias-campos.js
   Versión 2026.11.04-11:00:08

   « Il ne faut pas toucher, sauf erreur, à la structure du sf, mais
     plutôt au niveau des modules. »                  — P-H, 04/11/2026

   Los módulos de la V1 leen « nom », « date », « dose »… La adquisición
   escribe « nombre », « desde », « dosis »… Esta tabla dice cuál es cuál.
   MF.aliasMeds() pone en cada dato un ALIAS INVISIBLE: el módulo lee
   m.nom y obtiene m.nombre; escribe m.date_fin y cambia m.hasta.
   Al guardar, los alias no aparecen: el .sf queda en su forma V2.

   Solo se aplica a los datos en forma V2 (los que llevan « nombre »).
   Un expediente antiguo, en forma V1, no se toca.

   alias     : V1 (lo que lee el módulo) → V2 (lo que guarda el .sf),
               en los dos sentidos.
   lectura   : el módulo lee un texto claro calculado; si escribe, su
               valor se queda como un campo propio.
   ══════════════════════════════════════════════════════════════════════ */
var SF_ALIAS = window.SF_ALIAS = {
  "version": "2026.11.04-11:00:08",
  "medicaments": {
    "alias": {
      "nom":       "nombre",
      "date":      "desde",
      "dose":      "dosis",
      "frequence": "frecuencia",
      "date_fin":  "hasta",
      "date_debut": "desde",
      "statut":    "estado"
    },
    "lectura": {
      "prescriptor": { "campo": "prescriptor_id", "como": "codigo" },
      "source":      { "campo": "prc_id",         "como": "procedencia" }
    },
    "marca_v2": "nombre"
  }
};
