/* ══════════════════════════════════════════════════════════════════════
   LANZADOR — su configuración (P-H, 06/09/2026)

   Un .js en vez de un .json: el navegador no puede leer un fichero
   local con fetch, pero sí cargar un script. Todo funciona sin servidor.
   ══════════════════════════════════════════════════════════════════════ */
var SF_LANZADOR = window.SF_LANZADOR = {
  "id": "casa",
  "version": "2026.09.17-15:09:03",
  "nombre": "Salufolio",
  "_arquitectura": "ARQUITECTURA V2 (dibujo de P-H, 04/09/2026):\n  · 1 lanzador, 1 configuracion — apunta hacia los programas por su ID\n  · N programas, N carpetas — V2/resumen/, V2/curvas/…\n  · cada programa tiene su <id>.js que declara SF_CONFIG\n  · lo comun esta en V2/comun/ (mf.js, salufolio.css, las tablas)\nSIN JSON (P-H, 05/09): un navegador no puede leer un fichero local con fetch, pero si cargar un script. Asi todo funciona sin servidor.",
  "idioma_defecto": "es",
  "idiomas": [
    "es",
    "ca",
    "fr",
    "en"
  ],
  "carpeta_expedientes": "../pacientes/",
  "carpeta_doc": "../../doc/Salufolio/",
  "ayuda": "lanzador.help.html",
  "paleta_defecto": "cielo",
  "acceso_defecto": "todos",
  "tablas": {
    "glosario": "../comun/glosario-datos.js",
    "rubricas": "../comun/grupos-datos.js",
    "idiomas": "../comun/idiomas-datos.js"
  },
  "modulos": [
    {
      "id": "glosario",
      "acceso": [
        "todos"
      ]
    },
    {
      "id": "cronologia",
      "acceso": [
        "todos"
      ]
    },
    {
      "id": "resumen",
      "acceso": [
        "todos"
      ]
    },
    {
      "id": "informe",
      "acceso": [
        "todos"
      ],
      "_que": "Las tres formas detras de una sola puerta (P-H, 17/09/2026):\nexpress en la pantalla, detallado y sintetico en papel.\nUn solo pave: « INFORMES MEDICO »."
    },
    {
      "id": "tabla",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "curvas",
      "acceso": [
        "todos"
      ]
    },
    {
      "id": "tratamientos",
      "acceso": [
        "profesional",
        "cuidador"
      ]
    },
    {
      "id": "radar",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "correlaciones",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "observancia",
      "acceso": [
        "paciente",
        "profesional",
        "cuidador"
      ]
    },
    {
      "id": "antecedentes",
      "acceso": [
        "paciente",
        "profesional",
        "cuidador"
      ]
    },
    {
      "id": "vascular",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "bacteriologia",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "farmacovigilancia",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "auditoria",
      "acceso": [
        "profesional",
        "investigador"
      ]
    },
    {
      "id": "revisar",
      "acceso": [
        "profesional",
        "cuidador"
      ]
    },
    {
      "id": "automatica",
      "acceso": [
        "todos"
      ],
      "carpeta": "adquisicion/automatica/",
      "familia": "trabajar",
      "icono": "⚙️",
      "nombre": {
        "es": "Adquisición automática",
        "fr": "Acquisition automatique",
        "ca": "Adquisició automàtica",
        "en": "Automatic acquisition"
      },
      "descripcion": {
        "es": "Leer los PDF con clave API",
        "fr": "Lire les PDF avec la clé API",
        "ca": "Llegir els PDF amb clau API",
        "en": "Read PDFs with API key"
      }
    },
    {
      "id": "asistida",
      "acceso": [
        "todos"
      ],
      "carpeta": "adquisicion/asistida/"
    },
    {
      "id": "manual",
      "acceso": [
        "todos"
      ],
      "carpeta": "adquisicion/manual/"
    }
  ],
  "_modulos": "Se añaden a medida que se extraen de la V1, uno a uno, probado antes de pasar al siguiente.",
  "familias": [
    {
      "id": "ver",
      "nombre": {
        "es": "Ver",
        "fr": "Consulter",
        "ca": "Veure",
        "en": "View"
      }
    },
    {
      "id": "trabajar",
      "nombre": {
        "es": "Ver y modificar",
        "fr": "Voir et modifier",
        "ca": "Veure i modificar",
        "en": "View and edit"
      }
    }
  ],
  "perfiles": [
    {
      "id": "paciente",
      "icono": "🧑",
      "nombre": {
        "es": "Paciente",
        "fr": "Patient",
        "ca": "Pacient",
        "en": "Patient"
      }
    },
    {
      "id": "profesional",
      "icono": "👨‍⚕️",
      "nombre": {
        "es": "Profesional",
        "fr": "Professionnel",
        "ca": "Professional",
        "en": "Professional"
      }
    },
    {
      "id": "cuidador",
      "icono": "👨‍👩‍👧",
      "nombre": {
        "es": "Cuidador",
        "fr": "Aidant",
        "ca": "Cuidador",
        "en": "Caregiver"
      }
    },
    {
      "id": "investigador",
      "icono": "🔬",
      "nombre": {
        "es": "Investigador",
        "fr": "Chercheur",
        "ca": "Investigador",
        "en": "Researcher"
      }
    }
  ],
  "paletas": [
    {
      "id": "obsidiana",
      "nombre": "Obsidiana",
      "_de": "Viene del QWERTY Cipher, donde es el tema por defecto. Negro de vidrio volcanico, con un azul vivo por acento.",
      "v": {
        "--bg": "#0f0f12",
        "--surface": "#16161b",
        "--surface2": "#1c1c22",
        "--border": "#2a2a33",
        "--text": "#e8e8ef",
        "--fg": "#e8e8ef",
        "--muted": "#9a9aa8",
        "--accent-m": "#4a9eff"
      }
    },
    {
      "id": "oceano",
      "nombre": "Océano",
      "_de": "Del QWERTY Cipher, el primer programa que P-H y Claude hicieron juntos.",
      "v": {
        "--bg": "#050d1a",
        "--surface": "#0a1628",
        "--surface2": "#0f2040",
        "--border": "#1a3a6a",
        "--text": "#d0eaff",
        "--fg": "#d0eaff",
        "--muted": "#4a7aaa",
        "--accent-m": "#5bc8ff"
      }
    },
    {
      "id": "bosque",
      "nombre": "Bosque",
      "_de": "Del QWERTY Cipher, el primer programa que P-H y Claude hicieron juntos.",
      "v": {
        "--bg": "#070f08",
        "--surface": "#0e1f10",
        "--surface2": "#162a18",
        "--border": "#2a4a2c",
        "--text": "#d0f0d4",
        "--fg": "#d0f0d4",
        "--muted": "#4a7a50",
        "--accent-m": "#5bc8a0"
      }
    },
    {
      "id": "carmesi",
      "nombre": "Carmesí",
      "_de": "Del QWERTY Cipher, el primer programa que P-H y Claude hicieron juntos.",
      "v": {
        "--bg": "#120508",
        "--surface": "#1f0a10",
        "--surface2": "#2a1018",
        "--border": "#4a1a28",
        "--text": "#f0d0d8",
        "--fg": "#f0d0d8",
        "--muted": "#7a4050",
        "--accent-m": "#ff6b8a"
      }
    },
    {
      "id": "papel",
      "nombre": "Papel",
      "_de": "Del QWERTY Cipher, el primer programa que P-H y Claude hicieron juntos.",
      "v": {
        "--bg": "#f5f2ec",
        "--surface": "#ffffff",
        "--surface2": "#eeeae2",
        "--border": "#d0c8b8",
        "--text": "#1a1a14",
        "--fg": "#1a1a14",
        "--muted": "#7a7060",
        "--accent-m": "#1a6abf"
      }
    },
    {
      "id": "oscuro",
      "nombre": "Oscuro",
      "v": {
        "--bg": "#0e1117",
        "--surface": "#161b27",
        "--surface2": "#1e2535",
        "--border": "#2a3348",
        "--text": "#e8eaf0",
        "--fg": "#e8eaf0",
        "--muted": "#9aa3b8",
        "--accent-m": "#4a8fe8"
      }
    },
    {
      "id": "noche",
      "nombre": "Noche",
      "v": {
        "--bg": "#12141c",
        "--surface": "#1a1d28",
        "--surface2": "#222634",
        "--border": "#333849",
        "--text": "#d8dbe4",
        "--fg": "#d8dbe4",
        "--muted": "#8b93a6",
        "--accent-m": "#5b9bd5"
      }
    },
    {
      "id": "cielo",
      "nombre": "Cielo",
      "_porque": "Ana la pidió: « ¿no hay un fondo azul como el cielo? » El cielo del DÍA, sin nubes. P-H dio el tono exacto: #74BBE4 — « no es bastante azul, no se pasa el invierno encima » dijo del primero, que era demasiado pálido.",
      "v": {
        "--bg": "#74BBE4",
        "--surface": "#9BD0EC",
        "--surface2": "#5EAEDC",
        "--border": "#3C93C9",
        "--text": "#0C2233",
        "--fg": "#0C2233",
        "--muted": "#2A5470",
        "--accent-m": "#0B4C7A"
      },
      "_luego": "Un cursor en la paleta para que cada uno ajuste su azul — es muy subjetivo (P-H)."
    },
    {
      "id": "sepia",
      "nombre": "Sepia",
      "v": {
        "--bg": "#f5f0e8",
        "--surface": "#fffdf7",
        "--surface2": "#ede8dc",
        "--border": "#c4b89e",
        "--text": "#2a2620",
        "--fg": "#2a2620",
        "--muted": "#6b6355",
        "--accent-m": "#a0762a"
      }
    },
    {
      "id": "claro",
      "nombre": "Claro",
      "v": {
        "--bg": "#f7f8fa",
        "--surface": "#ffffff",
        "--surface2": "#eef1f5",
        "--border": "#d3d9e2",
        "--text": "#1a1d24",
        "--fg": "#1a1d24",
        "--muted": "#5f6b7d",
        "--accent-m": "#2d6fc4"
      }
    },
    {
      "id": "contraste",
      "nombre": "Contraste",
      "v": {
        "--bg": "#000000",
        "--surface": "#0d0d0d",
        "--surface2": "#1a1a1a",
        "--border": "#404040",
        "--text": "#ffffff",
        "--fg": "#ffffff",
        "--muted": "#b0b0b0",
        "--accent-m": "#ffd700"
      }
    }
  ],
  "banda_arriba": {
    "botones": [
      {
        "id": "idioma",
        "icono": "🌐",
        "titulo": "Idioma"
      },
      {
        "id": "tema",
        "icono": "🌓",
        "titulo": "Paleta de colores"
      },
      {
        "id": "tips",
        "icono": "💬",
        "titulo": "Burbujas de ayuda",
        "_que": "Las burbujas se pueden apagar (P-H, 16/09/2026).\nEl ajuste vive en mf.js, con el idioma y el tema: no es de un\nprograma, es de quien mira. Vale para toda la casa y sobrevive\nde una sesion a otra."
      },
      {
        "id": "ayuda",
        "icono": "❔",
        "titulo": "Ayuda"
      },
      {
        "id": "inicio",
        "icono": "🏠",
        "titulo": "Volver al lanzador"
      }
    ]
  },
  "banda_abajo": {
    "izquierda": "© 2026 Pierre-Henri Giraud · Salufolio",
    "centro": [
      {
        "texto": "Software libre · GNU GPL v3"
      },
      {
        "texto": "DOI 10.5281/zenodo.21997587",
        "fichero": "salufolio-zenodo.pdf",
        "titulo": "Ver el artículo",
        "fuera": "https://doi.org/10.5281/zenodo.21997587"
      },
      {
        "texto": "salufolio@proton.me",
        "enlace": "mailto:salufolio@proton.me"
      }
    ]
  }
};
