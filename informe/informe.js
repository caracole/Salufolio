/* INFORMES PARA EL MÉDICO — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "informe",
  "version": "2026.09.17-23:06:25",
  "programa": "informe.html",
  "lanzador": "../casa/casa.js",
  "carpeta": "informe/",
  "icono": "📋",
  "familia": "ver",
  "paleta": "papel",
  "nombre": {
    "es": "Informes para el médico",
    "fr": "Rapports pour le médecin",
    "ca": "Informes per al metge",
    "en": "Reports for the doctor"
  },
  "descripcion": {
    "es": "Tres formas, según a quién se le dé",
    "fr": "Trois formes, selon à qui on le donne",
    "ca": "Tres formes, segons a qui es done",
    "en": "Three forms, by who gets it"
  },
  "detalle": {
    "es": "El express que se enseña en la pantalla, y dos informes que se imprimen — el detallado con sus curvas, el sintético sin ellas. Con la opción de anonimizar antes de darlo.",
    "fr": "L'express qu'on montre à l'écran, et deux rapports qui s'impriment — le détaillé avec ses courbes, le synthétique sans. Avec l'option d'anonymiser avant de le donner.",
    "ca": "L'express que s'ensenya en pantalla, i dos informes que s'imprimixen.",
    "en": "The express shown on screen, and two printable reports — detailed with curves, synthetic without."
  },
  "acceso": [
    "todos"
  ],
  "escribe": false,
  "ayuda": "informe.help.html",
  "prompt": "prompt-informe.js",
  "_doctrina": "« Un bouton — PAS l'informe — un resume a l'ecran a montrer au toubib\n  sans detours ni menagements. »        — P-H, 19/07/2026, desde la UCE\n\n« Un seul pave: INFORMES MEDICO » (P-H, 17/09) — tres formas detras de\nuna sola puerta.",
  "identidad": {
    "_que": "Lo que va en la cabecera de los informes impresos. Se corrige aqui, no en el codigo.",
    "autor": "Pierre-Henri Giraud × Claude (Anthropic)",
    "doi": "10.5281/zenodo.20346760",
    "aviso": {
      "es": "Documento informativo — No diagnóstico",
      "fr": "Document d'information — Pas un diagnostic",
      "ca": "Document informatiu — No diagnòstic",
      "en": "Informative document — Not a diagnosis"
    },
    "pie": {
      "es": "Documento informativo — No sustituye el criterio médico profesional.",
      "fr": "Document d'information — Il ne remplace pas le jugement médical.",
      "ca": "Document informatiu — No substituïx el criteri mèdic professional.",
      "en": "Informative document — It does not replace professional judgement."
    }
  },
  "formas": {
    "express": {
      "orden": 1,
      "icono": "⚡",
      "salida": "pantalla",
      "anonimizable": false,
      "nombre": {
        "es": "Express",
        "fr": "Express",
        "ca": "Express",
        "en": "Express"
      },
      "para": {
        "es": "Para enseñarlo ahí mismo, en la pantalla. Noventa segundos de lectura.",
        "fr": "Pour le montrer sur place, à l'écran. Quatre-vingt-dix secondes de lecture.",
        "ca": "Per ensenyar-lo ahí mateix, en la pantalla.",
        "en": "To show right there, on screen. Ninety seconds of reading."
      },
      "dias": 90,
      "dias_vigilar": 180,
      "curvas": 2,
      "secciones": [
        "situacion",
        "tratamiento",
        "eventos",
        "fuera_tabla",
        "vigilar"
      ],
      "_anon": "No se anonimiza: se ensena al medico que atiende, que ya sabe de quien se trata."
    },
    "detallado": {
      "orden": 2,
      "icono": "📑",
      "salida": "papel",
      "anonimizable": true,
      "nombre": {
        "es": "Detallado",
        "fr": "Détaillé",
        "ca": "Detallat",
        "en": "Detailed"
      },
      "titulo": {
        "es": "Informe detallado de seguimiento médico",
        "fr": "Rapport détaillé de suivi médical",
        "ca": "Informe detallat de seguiment mèdic",
        "en": "Detailed medical follow-up report"
      },
      "para": {
        "es": "Para un ingreso o un especialista nuevo: todo el contexto, con las curvas.",
        "fr": "Pour une hospitalisation ou un spécialiste nouveau : tout le contexte, avec les courbes.",
        "ca": "Per a un ingrés o un especialista nou.",
        "en": "For an admission or a new specialist: the whole context, with curves."
      },
      "meses": 12,
      "fichas": 16,
      "curvas": 8,
      "secciones": [
        "cabecera",
        "anamnesis",
        "antecedentes",
        "fuera_lista",
        "medicacion",
        "fichas",
        "tabla",
        "curvas",
        "modulos"
      ]
    },
    "sintetico": {
      "orden": 3,
      "icono": "📄",
      "salida": "papel",
      "anonimizable": true,
      "nombre": {
        "es": "Sintético",
        "fr": "Synthétique",
        "ca": "Sintètic",
        "en": "Synthetic"
      },
      "titulo": {
        "es": "Informe sintético de seguimiento médico",
        "fr": "Rapport synthétique de suivi médical",
        "ca": "Informe sintètic de seguiment mèdic",
        "en": "Synthetic medical follow-up report"
      },
      "para": {
        "es": "Lo mismo, sin las curvas y con menos fichas.",
        "fr": "La même chose, sans les courbes et avec moins de fiches.",
        "ca": "El mateix, sense les corbes.",
        "en": "The same, without curves and with fewer cards."
      },
      "meses": 12,
      "fichas": 8,
      "curvas": 0,
      "secciones": [
        "cabecera",
        "anamnesis",
        "antecedentes",
        "fuera_lista",
        "medicacion",
        "fichas",
        "tabla",
        "modulos"
      ]
    }
  },
  "forma_defecto": "express",
  "anonimizacion": {
    "_que": "Para dar un informe a quien no tiene por que saber de quien es.\nNO TOCA LOS DATOS CLINICOS: son ellos lo que se quiere mostrar.",
    "niveles": {
      "basica": {
        "nombre": {
          "es": "Básica",
          "fr": "Simple",
          "ca": "Bàsica",
          "en": "Basic"
        },
        "que": {
          "es": "El nombre se queda en sus iniciales.",
          "fr": "Le nom se réduit à ses initiales.",
          "ca": "El nom es queda en les seues inicials.",
          "en": "The name becomes its initials."
        }
      },
      "completa": {
        "nombre": {
          "es": "Completa",
          "fr": "Complète",
          "ca": "Completa",
          "en": "Full"
        },
        "que": {
          "es": "Además: los centros, los prescriptores y los documentos.",
          "fr": "En plus : les centres, les prescripteurs et les documents.",
          "ca": "A més: els centres, els prescriptors i els documents.",
          "en": "Also: centres, prescribers and documents."
        }
      }
    },
    "nivel_defecto": "basica"
  },
  "umbrales": {
    "dias_opciones": [
      30,
      90,
      180,
      365
    ],
    "movimiento_minimo": 0.08,
    "puntos_minimos": 2,
    "eventos_max": 6,
    "medicamentos_max": 10,
    "material_max": 6,
    "fuentes_max": 5,
    "_fuentes": "Bajo cada curva: los cinco primeros documentos y « (+n) ».",
    "tratamiento_meses": 3,
    "_tratamiento": "Lo recetado hace mas de tres meses y no vuelto a ver no es el tratamiento de hoy. Se cambia aqui (P-H, 17/09).",
    "antecedentes_max": 14,
    "_antecedentes": "Por categoria, los mas recientes primero. El resto se cuenta sin nombrarse — 88 en una pagina no se leen (P-H, 17/09)."
  },
  "columnas_tabla": {
    "_que": "Las columnas de la tabla cronologica. Se cambian aqui.",
    "claves": [
      "hemoglobina",
      "leucocitos",
      "glucosa",
      "creatinina",
      "filtrado_glomerular",
      "colesterol",
      "pcr",
      "tsh",
      "vitamina_d"
    ],
    "cortos": {
      "hemoglobina": "Hb",
      "leucocitos": "Leuc.",
      "glucosa": "Gluc.",
      "creatinina": "Creat.",
      "filtrado_glomerular": "FG",
      "colesterol": "Colest.",
      "pcr": "PCR",
      "tsh": "TSH",
      "vitamina_d": "VitD"
    }
  },
  "colores": {
    "_que": "Se imprime y se lee a la luz de un hospital.",
    "papel": "#ffffff",
    "papel_suave": "#fafafa",
    "tinta": "#222222",
    "tinta_suave": "#666666",
    "linea": "#dddddd",
    "grave": "#c0392b",
    "aviso": "#b8860b",
    "bien": "#1a7a4a",
    "curva": "#c0392b",
    "curva_fondo": "#e8f5ec",
    "curva_punto": "#a93226",
    "seccion": "#1a5276",
    "express": "#2a7a4a",
    "banda": "#f4f9f4"
  },
  "tamanos": {
    "base": 13,
    "titulo": 17,
    "seccion": 13,
    "menudo": 10,
    "ficha": 19,
    "zoom_min": 0.8,
    "zoom_max": 1.6,
    "zoom_paso": 0.1
  },
  "secciones": {
    "cabecera": {
      "icono": "",
      "color": "seccion"
    },
    "anamnesis": {
      "icono": "",
      "color": "seccion"
    },
    "fuera_lista": {
      "icono": "⚠️",
      "color": "grave"
    },
    "fuera_tabla": {
      "icono": "🔴",
      "color": "grave"
    },
    "medicacion": {
      "icono": "💊",
      "color": "seccion"
    },
    "fichas": {
      "icono": "📊",
      "color": "seccion"
    },
    "tabla": {
      "icono": "📋",
      "color": "seccion"
    },
    "curvas": {
      "icono": "📈",
      "color": "seccion"
    },
    "modulos": {
      "icono": "📦",
      "color": "tinta_suave"
    },
    "antecedentes": {
      "icono": "📜",
      "color": "seccion",
      "_que": "Lo que el paciente ARRASTRA, no lo que le paso ayer."
    },
    "situacion": {
      "icono": "📝",
      "color": "express",
      "editable": true
    },
    "tratamiento": {
      "icono": "💊",
      "color": "express"
    },
    "eventos": {
      "icono": "📅",
      "color": "express"
    },
    "vigilar": {
      "icono": "📉",
      "color": "grave"
    },
    "_que": "Cada seccion, su icono. TODA seccion declarada en formas.secciones debe figurar aqui — si falta, el programa tropieza (P-H, 17/09)."
  }
};
