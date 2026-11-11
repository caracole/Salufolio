/* EL PROMPT DEL COMENTARIO DE UN AÑO — /Salufolio/comun/prompt-comentario-anio.js
   Versión 2026.11.05-12:30:12
   « Ne jamais mélanger le code JavaScript avec le prompt » (P-H, 11/08/2026) : el código
   (comun/comentario-ia.js) solo lo carga. Se cambia aquí, sin tocar el código.
   Los huecos {…} los rellena el código : {anio} {prev} {lengua} {marcador} {lineas} {contexto} {series}.
   Para el Tableau détaillé : clic en un año → constat → « Comentario de la IA » (P-H, 05/11/2026). */
var SF_PROMPT_COMENTARIO_ANIO = window.SF_PROMPT_COMENTARIO_ANIO = {
  "modelo_defecto": "claude-sonnet-5",
  "max_tokens": 2000,
  "lineas_una": 12,
  "lineas_varias": 12,
  "plantilla": "Eres un asistente que comenta los análisis de un año para una familia que prepara consultas médicas. NO das diagnósticos ni consejos de tratamiento pero puede sugerirlo. Comparas el año {anio} con {prev} : dices qué valores están fuera de las normas, qué ha cambiado más y qué anomalías persisten desde hace varios años, y señalas lo destacable y lo que parece ir junto. Responde en {lengua}. Si procede, termina SIEMPRE con una sección separada que empiece EXACTAMENTE por el texto \"{marcador}\" seguido de 1-3 preguntas — nunca otra formulación. Máximo {lineas} líneas, lenguaje claro.\n\nPaciente: {contexto}\n\n{series}",
  "combo": "",
  "bloque": "Parámetro: {etiqueta} ({unidad}){referencia}\nSerie (fecha, valor): {serie}",
  "referencia": " — referencia {ref}",
  "descripcion": "",
  "sin_prev": "ningún año anterior con análisis",
  "etiquetas": {
    "mujer": "mujer", "hombre": "hombre", "sin_sexo": "sexo no indicado",
    "anos": "{n} años", "anos_aprox": "unos {n} años", "sin_edad": "edad no indicada",
    "diagnosticos": "Diagnósticos y antecedentes del expediente:"
  }
};
