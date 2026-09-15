/* REVISAR — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "revisar",
  "version": "2026.09.09-11:17:03",
  "programa": "revisar.html",
  "lanzador": "../casa/casa.js",
  "icono": "🔍",
  "familia": "trabajar",
  "paleta": "oscuro",
  "nombre": {
    "es": "Revisar",
    "fr": "Revoir",
    "ca": "Revisar",
    "en": "Review"
  },
  "descripcion": {
    "es": "Ver y corregir lo importado",
    "fr": "Voir et corriger ce qui est entré",
    "ca": "Veure i corregir el que ha entrat",
    "en": "See and fix what came in"
  },
  "acceso": [
    "profesional",
    "cuidador"
  ],
  "ayuda": "revisar.help.html",
  "escribe": true,
  "glosario": "../glosario/glosario.html",
  "principios": "../medicamentos/principios.js",
  "_escribe": "Lo que se corrige va al expediente y enciende el 💾.",
  "_origen": "El antiguo Datos partido en tres (P-H, 09/09): revisar · entrada · extraer.",
  "_categorias": "Las categorias del filtro son estandar: viven aqui, no en duro en el programa. Las FUENTES, en cambio, viven en el expediente — son propias del recorrido de cada paciente (P-H, 09/09).",
  "categorias": [
    {
      "id": "todos",
      "nombre": {
        "es": "Todos",
        "fr": "Tous",
        "ca": "Tots",
        "en": "All"
      }
    },
    {
      "id": "laboratorio",
      "nombre": {
        "es": "Laboratorio",
        "fr": "Laboratoire",
        "ca": "Laboratori",
        "en": "Lab"
      },
      "color": "var(--ok)"
    },
    {
      "id": "urgencias",
      "nombre": {
        "es": "Urgencias",
        "fr": "Urgences",
        "ca": "Urgències",
        "en": "Emergency"
      },
      "color": "#e84a4a"
    },
    {
      "id": "neurologia",
      "nombre": {
        "es": "Neurología",
        "fr": "Neurologie",
        "ca": "Neurologia",
        "en": "Neurology"
      },
      "color": "#7d3c98"
    },
    {
      "id": "cardiologia",
      "nombre": {
        "es": "Cardiología",
        "fr": "Cardiologie",
        "ca": "Cardiologia",
        "en": "Cardiology"
      },
      "color": "#4a8fe8"
    },
    {
      "id": "neumologia",
      "nombre": {
        "es": "Neumología",
        "fr": "Pneumologie",
        "ca": "Pneumologia",
        "en": "Pulmonology"
      },
      "color": "#4ac9e8"
    },
    {
      "id": "hematologia",
      "nombre": {
        "es": "Hematología",
        "fr": "Hématologie",
        "ca": "Hematologia",
        "en": "Hematology"
      },
      "color": "#e84a8f"
    },
    {
      "id": "imagen",
      "nombre": {
        "es": "Imagen",
        "fr": "Imagerie",
        "ca": "Imatge",
        "en": "Imaging"
      },
      "color": "#4a8fe8"
    },
    {
      "id": "consulta",
      "nombre": {
        "es": "Consulta",
        "fr": "Consultation",
        "ca": "Consulta",
        "en": "Consultation"
      },
      "color": "#4a8fe8"
    },
    {
      "id": "bacteriologia",
      "nombre": {
        "es": "Bacteriología",
        "fr": "Bactériologie",
        "ca": "Bacteriologia",
        "en": "Bacteriology"
      },
      "color": "#e8a44a"
    },
    {
      "id": "medicamentos",
      "nombre": {
        "es": "Medicamentos",
        "fr": "Médicaments",
        "ca": "Medicaments",
        "en": "Medication"
      },
      "color": "var(--ok)"
    }
  ]
};
