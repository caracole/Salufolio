/* ══════════════════════════════════════════════════════════════════════
   ESPECIALIDAD — su configuración (P-H, 05/11/2026)

   UN SOLO PROGRAMA, UNA TARJETA POR ESPECIALIDAD en la casa. Cada tarjeta
   tiene su pequeño fichero en esta carpeta (neumologia.js, cardiologia.js…)
   que dice qué especialidad abre ; lo que la página MUESTRA de cada una
   (sus parámetros, sus normales, sus medicamentos) vive en la tabla común
   comun/especialidades.js, bajo « ficha ». Añadir una especialidad = unas
   líneas de tabla y un fichero de tarjeta ; ningún programa nuevo.
   ══════════════════════════════════════════════════════════════════════ */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "especialidad",
  "version": "2026.11.06-09:20:17",
  "programa": "especialidad.html",
  "lanzador": "../casa/casa.js",
  "icono": "🩺",
  "familia": "ver",
  "nombre": { "es": "Especialidad", "fr": "Spécialité", "ca": "Especialitat", "en": "Specialty" },
  "ayuda": "especialidad.help.html",
  "escribe": true,
  "_escribe": "La página LEE el expediente ; escribe UNA sola clave, nueva : preguntas_consulta (las preguntas para el médico, una nota por especialidad — P-H, 05/11/2026).",
  "ficha": {
    "meses_sin_visita": 12,
    "_meses_sin_visita": "Si el servicio no tiene ninguna consulta en el expediente, « desde la última consulta » mira los últimos N meses.",
    "meses_tratamiento": 12,
    "_meses_tratamiento": "La misma regla que el Resumen (P-H, 04/11/2026) : un tratamiento está en curso si su prescripción tiene menos de N meses y su fin es posterior a hoy — o es crónico.",
    "estados_fin": ["abandonne", "abandonado", "abandoned", "suspendu", "suspendido", "suspended", "termine", "terminado", "stopped"],
    "estados_abandono": ["abandonne", "abandonado", "abandoned", "suspendu", "suspendido", "suspended"],
    "_estados_abandono": "Los que la HOJA imprime en « abandonados o suspendidos del año », con su razón (motif_suspension). Los terminados no se imprimen nunca (P-H, 05/11/2026).",
    "max_anteriores": 8,
    "_max_anteriores": "Cuántos tratamientos anteriores (ya terminados) se enseñan bajo los que están en curso.",
    "umbral_flecha": 0.05,
    "impresion": { "papel": "#ffffff", "tinta": "#222222", "suave": "#666666", "linea": "#cccccc", "acento": "#1a5276", "fuera": "#a82015" },
    "_impresion": "Los colores de la HOJA IMPRESA (los mismos que Courbes y la Tabla) ; « fuera » : un valor fuera de la normal."
  }
};
