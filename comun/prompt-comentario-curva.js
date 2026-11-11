/* EL PROMPT DEL COMENTARIO DE UNA CURVA — /Salufolio/comun/prompt-comentario-curva.js
   Versión 2026.11.04-15:28:03
   « Ne jamais mélanger le code JavaScript avec le prompt » (P-H, 11/08/2026) : el código
   (comun/comentario-ia.js) solo lo carga. Se cambia aquí, sin tocar el código.
   Los huecos {…} los rellena el código : {combo} {lengua} {marcador} {lineas} {contexto} {series}.
   Viene de la V1 (Tabla, P-H 08/08) ; lo que era fijo — « mujer de 87 años… » — sale ahora
   del expediente del paciente abierto. */
var SF_PROMPT_COMENTARIO_CURVA = window.SF_PROMPT_COMENTARIO_CURVA = {
  "modelo_defecto": "claude-sonnet-5",
  "max_tokens": 2000,
  "lineas_una": 6,
  "lineas_varias": 10,
  "plantilla": "Eres un asistente que comenta series analíticas para una familia que prepara consultas médicas. NO das diagnósticos ni consejos de tratamiento; describes la evolución{combo} y señalas lo destacable. Responde en {lengua}. Si procede, termina SIEMPRE con una sección separada que empiece EXACTAMENTE por el texto \"{marcador}\" seguido de 1-2 preguntas — nunca otra formulación. Máximo {lineas} líneas, lenguaje claro.\n\nPaciente: {contexto}\n\n{series}",
  "combo": " y comentas especialmente si hay relación temporal entre los distintos parámetros",
  "bloque": "Parámetro: {etiqueta} ({unidad}){referencia}{descripcion}\nSerie (fecha, valor): {serie}",
  "referencia": " — referencia {ref}",
  "descripcion": "\nDescripción: {desc}",
  "etiquetas": {
    "mujer": "mujer", "hombre": "hombre", "sin_sexo": "sexo no indicado",
    "anos": "{n} años", "anos_aprox": "unos {n} años", "sin_edad": "edad no indicada",
    "diagnosticos": "Diagnósticos y antecedentes del expediente:"
  }
};
