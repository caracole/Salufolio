/* ══════════════════════════════════════════════════════════════════════
   LANZADOR — su configuración (P-H, 06/09/2026)

   Un .js en vez de un .json: el navegador no puede leer un fichero
   local con fetch, pero sí cargar un script. Todo funciona sin servidor.
   ══════════════════════════════════════════════════════════════════════ */
var SF_LANZADOR = {
  "id": "casa",
  "version": "2026.10.16-09:10:07",
  "nombre": "Salufolio",
  "_arquitectura": "ARQUITECTURA V2 (dibujo de P-H, 04/09/2026):\n  · 1 lanzador, 1 configuracion — apunta hacia los programas por su ID\n  · N programas, N carpetas — V2/resumen/, V2/curvas/…\n  · cada programa tiene su <id>.js que declara SF_CONFIG\n  · lo comun esta en V2/comun/ (mf.js, salufolio.css, las tablas)\nSIN JSON (P-H, 05/09): un navegador no puede leer un fichero local con fetch, pero si cargar un script. Asi todo funciona sin servidor.",
  "idioma_defecto": "es",
  "idiomas": [
    "es",
    "ca",
    "fr",
    "en"
  ],
  "estilos": {
    "_porque": "TABLA DE ESTILOS (P-H, 06/10/2026). Cada ROL es una declaracion CSS. Los roles usan las variables de la paleta (var(--text)...), de modo que un cambio de paleta los sigue solo. Un modulo puede redecir un rol en su propio « estilos » ; lo que no redice, lo hereda de aqui. Un programa nunca escribe un color : dice « soy text_1 ».",
    "text_1": "color:var(--text);font-size:14px;line-height:1.7",
    "text_2": "color:var(--muted);font-size:12.5px;line-height:1.7",
    "titre_1": "color:var(--text);font-family:var(--serif);font-size:21px",
    "titre_2": "color:var(--accent);font-family:var(--serif);font-size:15px",
    "curva_texto": "color:var(--muted);font-size:10px",
    "curva_rejilla": "color:var(--border)",
    "curva_mal": "color:#c0392b",
    "curva_ref": "color:var(--ok)",
    "visor_fondo": "background-color:#8a8a8a"
  },
  "carpeta_expedientes": "../pacientes/",
  "carpeta_doc": "../../doc/Salufolio/",
  "ayuda": "casa.help.html",
  "ayuda_modulo": "{id}.help.html",
  "_ayuda": "Las ayudas viven junto a su programa (rangement du 04/10/2026) : <carpeta>/<id>.help.html. « ayuda » es la de la casa, relativa a casa/ ; « ayuda_modulo » dice como se llama la de cada programa cuando el no declara la suya.",
  "paleta_defecto": "papel",
  "acceso_defecto": "todos",
  "tablas": {
    "glosario": "../comun/glosario-datos.js",
    "rubricas": "../comun/grupos-datos.js",
    "idiomas": "../comun/idiomas-datos.js"
  },
  "modulos": [
    {
      "id": "paciente",
      "acceso": [
        "todos"
      ]
    },
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
      "estilos": {
        "curva_texto": "color:var(--muted);font-size:10px"
      },
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
      "_porque": "La pidió una usuaria: « ¿no hay un fondo azul como el cielo? » El cielo del DÍA, sin nubes. P-H dio el tono exacto: #74BBE4 — « no es bastante azul, no se pasa el invierno encima » dijo del primero, que era demasiado pálido.",
      "v": {
        "--bg": "#74BBE4",
        "--surface": "#9BD0EC",
        "--surface2": "#5EAEDC",
        "--border": "#3C93C9",
        "--text": "#0C2233",
        "--fg": "#0C2233",
        "--muted": "#1A3C54",
        "--accent-m": "#083D5F"
      },
      "_contraste": "WCAG AA (02/10/2026): --muted #2A5470 sobre #74BBE4 daba 3,83 (minimo 4,5) → #1A3C54 da 5,48; --accent-m #0B4C7A daba 4,28 → #083D5F da 5,41. Los fondos no se tocan.",
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
  "_bienvenida": "El recibimiento de la primera vez (P-H, 23/09/2026). Bertica y Mattieu, los dos por separado, buscaron el boton de la visita sin encontrarlo: la brujula sola dice « navegacion », no dice « le ensegno la casa ». Asi que la casa saluda ella misma, una sola vez, en la lengua del navegador, y le ensega DONDE vive la brujula para que la leccion sobreviva al cuadro. Los textos, aqui; la frase que dice Sofia, en casa/tour.js (objeto « bienvenida »).",
  "bienvenida": {
    "objeto": "bienvenida",
    "_objeto": "el nombre del texto en tour.js — el que Sofia lee y la pluma subraya",
    "recuerdo": "sf_bienvenida_vista",
    "_recuerdo": "donde se anota que ya se ha visto. Borrarlo la hace volver.",
    "_voz": "habla sola al abrirse. El boton solo sirve para cortarla — y para volver a oirla.",
    "parar": {
      "es": "Basta, gracias",
      "fr": "Ça suffit, merci",
      "ca": "Ja n'hi ha prou, gràcies",
      "en": "That's enough, thanks"
    },
    "escuchar": {
      "es": "Oírlo otra vez",
      "fr": "Réécouter",
      "ca": "Escoltar-ho una altra volta",
      "en": "Hear it again"
    },
    "si": {
      "es": "Sí, enséñemela",
      "fr": "Oui, montrez-moi",
      "ca": "Sí, mostre-me-la",
      "en": "Yes, show me around"
    },
    "no": {
      "es": "Ahora no, gracias",
      "fr": "Pas maintenant, merci",
      "ca": "Ara no, gràcies",
      "en": "Not now, thanks"
    },
    "despues": {
      "es": "Después, la brújula 🧭 de arriba a la derecha se la vuelve a abrir cuando quiera.",
      "fr": "Ensuite, la boussole 🧭 en haut à droite vous la rouvrira quand vous voudrez.",
      "ca": "Després, la brúixola 🧭 de dalt a la dreta li la torna a obrir quan vullga.",
      "en": "Afterwards, the compass 🧭 at the top right will open it again whenever you like."
    },
    "lengua": {
      "es": "¿Prefiere otra lengua?",
      "fr": "Vous préférez une autre langue ?",
      "ca": "Preferix una altra llengua?",
      "en": "Would you rather another language?"
    }
  },
  "banda_arriba": {
    "_fijos": "Los cuatro elementos que el lanzador dibuja en su sitio (la abeja a la izquierda, el titulo, el paciente, el disquete) no pueden entrar en « botones »: su lugar es fijo. Pero su burbuja no tiene por que vivir en el codigo — vive aqui, como las demas. « Note-le pour tous les tooltips present et a venir » (P-H, 22/09/2026).",
    "fijos": {
      "panal": {
        "es": "Volver al panal",
        "fr": "Revenir à la ruche",
        "ca": "Tornar al rusc",
        "en": "Back to the honeycomb"
      },
      "guardar": {
        "es": "Guardar el expediente",
        "fr": "Enregistrer le dossier",
        "ca": "Guardar l'expedient",
        "en": "Save the record"
      },
      "paciente": {
        "es": "Toque aquí para cambiar de paciente",
        "fr": "Touchez ici pour changer de patient",
        "ca": "Toque ací per a canviar de pacient",
        "en": "Tap here to change patient"
      },
      "titulo": {
        "es": "Salufolio · lanzador v{v}",
        "fr": "Salufolio · lanceur v{v}",
        "ca": "Salufolio · llançador v{v}",
        "en": "Salufolio · launcher v{v}"
      }
    },
    "botones": [
      {
        "id": "pantalla",
        "icono": "🖥️",
        "titulo": {
          "es": "Pantalla completa (F11)",
          "fr": "Plein écran (F11)",
          "ca": "Pantalla completa (F11)",
          "en": "Full screen (F11)"
        },
        "_que": "El ⛶ del panal, aqui 🖥️ (P-H, 16/10 : « le ⛶ ne me plaît pas ») —, ahora tambien en la casa (P-H, 15/10/2026) : « Salufolio est meilleur en plein écran ! ». No se dibuja si el navegador no sabe. Ver « pantalla » mas abajo."
      },
      {
        "id": "idioma",
        "icono": "🌐",
        "titulo": {
          "es": "Idioma",
          "fr": "Langue",
          "ca": "Idioma",
          "en": "Language"
        }
      },
      {
        "id": "tema",
        "icono": "🌓",
        "titulo": {
          "es": "Paleta de colores",
          "fr": "Palette de couleurs",
          "ca": "Paleta de colors",
          "en": "Colour palette"
        }
      },
      {
        "id": "tips",
        "icono": "💬",
        "titulo": {
          "es": "Burbujas de ayuda",
          "fr": "Bulles d'aide",
          "ca": "Bambolles d'ajuda",
          "en": "Help bubbles"
        },
        "_que": "Las burbujas se pueden apagar (P-H, 16/09/2026).\nEl ajuste vive en mf.js, con el idioma y el tema: no es de un\nprograma, es de quien mira. Vale para toda la casa y sobrevive\nde una sesion a otra."
      },
      {
        "id": "ayuda",
        "icono": "❔",
        "titulo": {
          "es": "Ayuda",
          "fr": "Aide",
          "ca": "Ajuda",
          "en": "Help"
        }
      },
      {
        "id": "inicio",
        "icono": "🏠",
        "titulo": {
          "es": "Volver al lanzador",
          "fr": "Revenir au lanceur",
          "ca": "Tornar al llançador",
          "en": "Back to the launcher"
        }
      },
      {
        "id": "tour",
        "icono": "🧭",
        "titulo": {
          "es": "Visita guiada",
          "fr": "Visite guidée",
          "ca": "Visita guiada",
          "en": "Guided tour"
        },
        "_que": "Las ocho etapas de la banda de arriba (P-H + Mattieu, 18/09/2026).\nLa tabla vive en casa/tour.js; el motor en comun/tour-motor.js.\nSe empieza pequeno: si gusta, se extiende programa por programa."
      },
      {
        "id": "opinion",
        "icono": "✍️",
        "titulo": {
          "es": "Su opinión sobre esta pantalla",
          "fr": "Votre avis sur cet écran",
          "ca": "La seua opinió sobre esta pantalla",
          "en": "Your opinion of this screen"
        },
        "_que": "El boton de la opinion (P-H, 15/10/2026). « Je n'aimerais pas qu'on me signale qu'on ne sait pas où mettre un commentaire ! » Tout a fait a droite, despues de la brujula ; ✍️ y no 💬, que ya es el de las burbujas. Sus textos, en « opinion » mas abajo."
      }
    ]
  },
  "_pantalla": "PANTALLA COMPLETA (P-H, 15/10/2026). El navegador no deja abrirse en pantalla completa sin un gesto : solo puede pedirse DURANTE un clic. Por eso : (a) el « Sí, enséñemela » del recibimiento la pide de paso — la visita empieza en grande ; (b) la casa se acuerda : quien la puso una vez la recupera con el primer clic de la sesion siguiente, donde sea. Escape la quita, y entonces la casa lo olvida.",
  "pantalla": {
    "recuerdo": "sf_pantalla_completa",
    "_recuerdo": "donde se anota la eleccion. Borrarlo = la casa vuelve a abrirse en ventana.",
    "con_bienvenida": true,
    "_con_bienvenida": "false = el « Sí, enséñemela » ya no pasa a pantalla completa."
  },
  "_opinion": "La ventana del ✍️ (P-H, 15/10/2026). Vale para la casa y para cada modulo abierto : el correo dice solo DESDE DONDE se escribe y la VERSION — « sans numéro, impossible de dire quelle version cloche ». Nunca el paciente ni sus datos. Sin servidor : se prepara un correo ; y como en un ordenador de facultad a menudo no hay programa de correo, « Copiar el texto » permite pegarlo en el correo web. La ventana lo explica antes de nada.",
  "opinion": {
    "correo": "salufolio@proton.me",
    "asunto": "[Salufolio Opinión] {donde}{nota} — v{version}",
    "_caras": "Las cinco caras de la visita (P-H, 15/10/2026) : las mismas, tomadas de la tabla CARAS de la casa ; su burbuja, la de la visita (op_c_1…5). Un toque pone delante del texto una frase preparada, a completar ; cambiar de cara solo cambia esa frase, nunca lo que se ha escrito despues. Sin casillas — « on verra aux premiers usages ».",
    "nota": " — {n}/5 {cara}",
    "caras_pregunta": {
      "es": "¿Qué le parece esta pantalla?",
      "fr": "Que pensez-vous de cet écran ?",
      "ca": "Què li sembla esta pantalla?",
      "en": "What do you think of this screen?"
    },
    "caras": {
      "1": {
        "es": "Esta pantalla no sirve tal como está. Lo que lo impide: ",
        "fr": "Cet écran ne sert pas tel qu'il est. Ce qui l'en empêche : ",
        "ca": "Esta pantalla no servix tal com està. El que ho impedix: ",
        "en": "This screen is not usable as it stands. What prevents it: "
      },
      "2": {
        "es": "Le falta bastante. Lo que echo en falta: ",
        "fr": "Il lui manque beaucoup. Ce qui me manque : ",
        "ca": "Li falta prou. El que trobe a faltar: ",
        "en": "A lot is missing. What I miss: "
      },
      "3": {
        "es": "Correcta, pero mejorable. Yo cambiaría: ",
        "fr": "Correct, mais perfectible. Je changerais : ",
        "ca": "Correcta, però millorable. Jo canviaria: ",
        "en": "Adequate, but could be better. I would change: "
      },
      "4": {
        "es": "Útil. La mejoraría así: ",
        "fr": "Utile. Je l'améliorerais ainsi : ",
        "ca": "Útil. La milloraria així: ",
        "en": "Useful. I would improve it like this: "
      },
      "5": {
        "es": "Muy útil en la consulta. Lo que más sirve: ",
        "fr": "Très utile en consultation. Ce qui sert le plus : ",
        "ca": "Molt útil en la consulta. El que més servix: ",
        "en": "Very useful in the consultation room. What helps most: "
      }
    },
    "titulo": {
      "es": "✍️ Su opinión",
      "fr": "✍️ Votre avis",
      "ca": "✍️ La seua opinió",
      "en": "✍️ Your opinion"
    },
    "_explica": "La primera frase dice desde donde se escribe (P-H, 15/10) : {donde} = la pantalla, en negrita ; {version} = su version, en pequeño. Asi no hace falta una linea aparte.",
    "explica": {
      "es": "Desde {donde} · {version}, escriba lo que piensa de esta pantalla: lo que falta, lo que sobra, lo que está mal dicho o lo que puede inducir a error. El programa añade solo desde dónde escribe y la versión; nunca los datos del paciente.",
      "fr": "Depuis {donde} · {version}, écrivez ce que vous pensez de cet écran : ce qui manque, ce qui est en trop, ce qui est mal dit ou ce qui peut induire en erreur. Le programme ajoute seulement d'où vous écrivez et la version ; jamais les données du patient.",
      "ca": "Des de {donde} · {version}, escriga el que pensa d'esta pantalla: el que hi falta, el que hi sobra, el que està mal dit o el que pot induir a error. El programa hi afig només des d'on escriu i la versió; mai les dades del pacient.",
      "en": "From {donde} · {version}, write what you think of this screen: what is missing, what is superfluous, what is badly worded or what could mislead. The program only adds where you are writing from and the version; never the patient's data."
    },
    "como": {
      "es": "« Enviar por correo » abre su programa de correo con el texto preparado. Si no se abre nada —en muchos ordenadores no hay programa de correo—, pulse « Copiar el texto » y péguelo en su correo web, dirigido a {correo}.",
      "fr": "« Envoyer par courriel » ouvre votre messagerie avec le texte préparé. Si rien ne s'ouvre — beaucoup d'ordinateurs n'ont pas de messagerie installée —, touchez « Copier le texte » et collez-le dans votre webmail, à l'adresse {correo}.",
      "ca": "« Enviar per correu » obri el seu programa de correu amb el text preparat. Si no s'obri res —molts ordinadors no en tenen—, toque « Copiar el text » i apegue'l en el seu correu web, adreçat a {correo}.",
      "en": "“Send by email” opens your mail program with the text ready. If nothing opens — many computers have no mail program — tap “Copy the text” and paste it into your webmail, addressed to {correo}."
    },
    "lanzador": {
      "es": "la Casa",
      "fr": "la Casa",
      "ca": "la Casa",
      "en": "the Casa"
    },
    "texto": {
      "es": "Su opinión…",
      "fr": "Votre avis…",
      "ca": "La seua opinió…",
      "en": "Your opinion…"
    },
    "nombre": {
      "es": "Su nombre (opcional — para figurar en el proyecto)",
      "fr": "Votre nom (facultatif — pour figurer dans le projet)",
      "ca": "El seu nom (opcional — per a figurar en el projecte)",
      "en": "Your name (optional — to be credited in the project)"
    },
    "enviar": {
      "es": "Enviar por correo",
      "fr": "Envoyer par courriel",
      "ca": "Enviar per correu",
      "en": "Send by email"
    },
    "copiar": {
      "es": "Copiar el texto",
      "fr": "Copier le texte",
      "ca": "Copiar el text",
      "en": "Copy the text"
    },
    "copiado": {
      "es": "✓ Copiado. Péguelo en su correo, dirigido a {correo}.",
      "fr": "✓ Copié. Collez-le dans votre courriel, à l'adresse {correo}.",
      "ca": "✓ Copiat. Apegue'l en el seu correu, adreçat a {correo}.",
      "en": "✓ Copied. Paste it into your email, addressed to {correo}."
    },
    "no_copiado": {
      "es": "No se ha podido copiar: seleccione el texto de abajo y cópielo a mano.",
      "fr": "Copie impossible : sélectionnez le texte ci-dessous et copiez-le à la main.",
      "ca": "No s'ha pogut copiar: seleccione el text de baix i copie'l a mà.",
      "en": "Could not copy: select the text below and copy it by hand."
    },
    "cerrar": {
      "es": "Cerrar",
      "fr": "Fermer",
      "ca": "Tancar",
      "en": "Close"
    },
    "_ventana": "La ventana del ✍️ es MODAL (P-H, 15/10) : un clic al lado no la cierra — se perdería lo escrito ; solo la ✕ de arriba (su burbuja : « cerrar »). Se mueve tirando del titulo. El campo empieza con 2 lineas y crece solo ; la ventana nunca tiene ascensor, solo el campo cuando ya no cabe.",
    "_correo": "Las etiquetas del CORREO : lo lee P-H, en español.",
    "etiquetas": {
      "cabecera": "Salufolio — Opinión",
      "donde": "Pantalla",
      "version": "Versión del programa",
      "casa": "Versión de la Casa",
      "idioma": "Idioma",
      "nota": "Nota",
      "nombre": "Nombre",
      "fecha": "Fecha",
      "ventana": "Ventana del navegador",
      "texto": "OPINIÓN"
    }
  },
  "banda_abajo": {
    "_doi": "DOI de Zenodo retirado (P-H, 15/10/2026) : las versiones publicadas en Zenodo están obsoletas y no se pueden borrar — un médico que pulsa y cae en una versión vieja se decepciona. Volverá cuando haya una versión nueva presentable.",
    "izquierda": "© 2026 Pierre-Henri Giraud · Salufolio",
    "centro": [
      {
        "texto": "Software libre · GNU GPL v3",
        "marca": "licencia"
      },
      {
        "texto": "salufolio@proton.me",
        "enlace": "mailto:salufolio@proton.me",
        "marca": "correo"
      }
    ]
  }
};
