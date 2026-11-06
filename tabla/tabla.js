/* TABLA — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "tabla",
  "version": "2026.11.06-09:20:17",
  "programa": "tabla.html",
  "lanzador": "../casa/casa.js",
  "icono": "📋",
  "familia": "ver",
  "paleta": "oscuro",
  "nombre": {
    "es": "Tabla detallada",
    "fr": "Tableau détaillé",
    "ca": "Taula detallada",
    "en": "Detailed table"
  },
  "descripcion": {
    "es": "Todos los valores, con su filtro",
    "fr": "Toutes les valeurs, avec leur filtre",
    "ca": "Tots els valors, amb el seu filtre",
    "en": "Every value, with its filter"
  },
  "acceso": [
    "profesional",
    "investigador"
  ],
  "ayuda": "tabla.help.html",
  "escribe": false,
  "glosario": "../glosario/glosario.html",
  "principios": "../medicamentos/principios.js",
  "_origen": "Extraido de la V1: core-table-js.js + core-panels-html.html (110-127).",
  "detalle": {
    "es": "Todos los valores, en columnas, con sus fechas y su procedencia. Para buscar un número exacto, o para comprobar de dónde sale.",
    "fr": "Toutes les valeurs, en colonnes, avec leurs dates et leur provenance. Pour chercher un chiffre exact, ou vérifier d'où il vient.",
    "ca": "Tots els valors, en columnes, amb les seues dates i la seua procedència.",
    "en": "Every value, in columns, with its date and where it came from. To find an exact figure, or check its source."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026).",
  "constat": {
    "cambio": 0.2,
    "banda": 0.5,
    "max_cambios": 10,
    "min_anios_dura": 2
  },
  "_constat": "El constat de un año (P-H, 05/11/2026) : clic en un año del Tableau. cambio : variación mínima frente al año anterior con análisis (0.2 = 20 %) ; banda : si los dos valores están en las normas, el cambio debe recorrer al menos esta parte de su anchura (0.5 = la mitad) — un cambio que cruza el límite se enseña siempre ; max_cambios : cuántos se enseñan ; min_anios_dura : años seguidos fuera de las normas para « lo que dura ».",
  "comentario": {
    "alto_curva": 200,
    "impresion": {
      "papel": "#ffffff",
      "tinta": "#222222",
      "suave": "#666666",
      "linea": "#cccccc",
      "acento": "#1a5276"
    }
  },
  "_comentario": "La ventana de la curva y del comentario de la IA (clic derecho en un parámetro) : alto de la curva ; colores de la HOJA IMPRESA. Los mismos que Courbes (P-H, 05/11/2026)."
};
