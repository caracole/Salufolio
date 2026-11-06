/* EL PROMPT DEL COMENTARIO « DESDE LA ÚLTIMA CONSULTA » — /Salufolio/comun/prompt-comentario-especialidad.js
   Versión 2026.11.05-18:02:52
   « Ne jamais mélanger le code JavaScript avec le prompt » (P-H, 11/08/2026) : el código
   (especialidad/especialidad.html, por comun/comentario-ia.js) solo lo carga. Se cambia aquí, sin tocar el código.
   Los huecos {…} los rellena el código : {especialidad} {desde} {acontecimientos} {medicacion}
   {lengua} {marcador} {lineas} {contexto} {series}.
   Lo que sale : sexo, edad, diagnósticos si se marca la casilla, títulos y fechas de los acontecimientos,
   nombres de medicamentos, series de valores. NUNCA un nombre, un SIP, una historia ni un texto de informe. */
var SF_PROMPT_COMENTARIO_ESPECIALIDAD = window.SF_PROMPT_COMENTARIO_ESPECIALIDAD = {
  "modelo_defecto": "claude-sonnet-5",
  "max_tokens": 2000,
  "lineas_una": 14,
  "lineas_varias": 14,
  "puntos_max": 10,
  "plantilla": "Eres un asistente que ayuda a una familia a preparar una consulta de {especialidad}. NO das diagnósticos ni consejos de tratamiento. Resumes lo que ha pasado {desde} : urgencias e ingresos, otras consultas, cambios de medicación, y la evolución de los valores que vigila esta especialidad (los que salen de la referencia, los que más cambian). Señalas lo que conviene comentar con el médico. Responde en {lengua}. Termina SIEMPRE con una sección separada que empiece EXACTAMENTE por el texto \"{marcador}\" seguido de 3 a 5 preguntas, una por línea — nunca otra formulación. Máximo {lineas} líneas antes de las preguntas, lenguaje claro.\n\nPaciente: {contexto}\n\nAcontecimientos:\n{acontecimientos}\n\nMedicación:\n{medicacion}\n\nValores:\n{series}",
  "combo": "",
  "bloque": "Parámetro: {etiqueta} ({unidad}){referencia}\nSerie (fecha, valor): {serie}",
  "referencia": " — referencia {ref}",
  "descripcion": "",
  "etiquetas": {
    "desde": "desde la última consulta de la especialidad, el {f}",
    "sin_consulta": "en los últimos {m} meses (no hay consulta previa de la especialidad en el expediente)",
    "otras": "otras consultas", "en_curso": "en curso", "cronico": "crónico", "nuevo": "nuevo el", "parado": "terminado el", "nada": "—"
  }
};
