/* LA VISITA DE LA CASA — sus etapas */
var SF_TOUR = window.SF_TOUR = {
  "id": "tour-casa",
  "version": "2026.09.18-19:03:19",
  "_doctrina": "LA VISITA DE LA CASA (P-H + Mattieu, 18/09/2026)\n\nEL ORDEN ES EL DEL APRENDIZAJE, no el de las zonas del programa:\n\n  « Je viens d'arriver — je decouvre — je veux voir ce qu'il y a\n    dans Salufolio — ah oui, il y a un patient Demo, allons voir… »\n                                                    (P-H, 18/09)\n\nAsi que: llego, miro, tropiezo —las tarjetas estan apagadas—, elijo\nun paciente, se abren, y SOLO ENTONCES los ajustes. No se arregla una\ncasa en la que aun no se ha entrado.\n\nEL MOTOR NO SABE NADA. Esta tabla dice que se ensena, en que orden, y\ndonde esta cada cosa. Anadir una etapa es anadir una linea.\n\nLA VOZ: cada etapa declara sus mp3 por idioma. Si falta, la sintesis\ndel navegador toma el relevo; si tampoco, la etapa se calla.",
  "marco": "propio",
  "idiomas": [
    "es",
    "fr",
    "ca",
    "en"
  ],
  "idioma_defecto": "es",
  "voz_carpeta": "voz/",
  "_mandos": "Los seis mandos bajo cada etapa, como P-H los dibujo:\n  ❌ interrumpe — y pregunta por que (el aviso)\n  🔄 vuelve a empezar\n  📋 la lista de etapas, para saltar a una\n  ⏭️ salta lo que no interesa\n  ⬅️ ➡️ atras y adelante\nLa visita se desarrolla sola; los mandos la pasan a mano.",
  "segundos_defecto": 9,
  "etapas": [
    {
      "n": 1,
      "icono": "🐝",
      "objeto": "[data-b=\"panal\"]",
      "titulo": {
        "es": "Acaba de llegar",
        "fr": "Vous venez d'arriver",
        "ca": "Acaba d'arribar",
        "en": "You have just arrived"
      },
      "texto": {
        "es": "Bienvenido a la casa de Salufolio. La abeja, arriba a la izquierda, lleva al panal — la entrada, donde se explica qué es todo esto y para quién. Puede volver allí cuando quiera.",
        "fr": "Bienvenue dans la maison de Salufolio. L'abeille, en haut à gauche, mène au panal — l'entrée, où l'on explique ce qu'est tout ceci et pour qui. Vous pouvez y revenir quand vous voulez.",
        "ca": "Benvingut a la casa de Salufolio. L'abella porta al panal, l'entrada.",
        "en": "Welcome to the house of Salufolio. The bee, top left, leads to the hive — the entrance, where it is explained what all this is and for whom."
      },
      "segundos": 11,
      "sonido": {
        "es": "voz/t01_es.mp3",
        "fr": "voz/t01_fr.mp3",
        "ca": "voz/t01_ca.mp3",
        "en": "voz/t01_en.mp3"
      }
    },
    {
      "n": 2,
      "icono": "📖",
      "objeto": "#b-tit",
      "titulo": {
        "es": "Dónde está",
        "fr": "Où vous êtes",
        "ca": "On està",
        "en": "Where you are"
      },
      "texto": {
        "es": "Salufolio, y debajo su número de versión: pase el dedo por encima y lo verá. Parece un detalle, no lo es. Sin número, nunca se sabe qué se está mirando — ni qué falla cuando algo falla.",
        "fr": "Salufolio, et dessous son numéro de version : passez le doigt dessus et vous le verrez. Cela semble un détail, ce n'en est pas un. Sans numéro, on ne sait jamais ce qu'on regarde — ni ce qui cloche quand quelque chose cloche.",
        "ca": "Salufolio, i davall el seu número de versió. Sense número, mai se sap què s'està mirant.",
        "en": "Salufolio, and beneath it the version number. Hover over it and you will see. Without a number you never know what you are looking at."
      },
      "segundos": 11,
      "sonido": {
        "es": "voz/t02_es.mp3",
        "fr": "voz/t02_fr.mp3",
        "ca": "voz/t02_ca.mp3",
        "en": "voz/t02_en.mp3"
      }
    },
    {
      "n": 3,
      "icono": "🗂",
      "objeto": "#familias",
      "titulo": {
        "es": "Qué hay aquí",
        "fr": "Ce qu'il y a ici",
        "ca": "Què hi ha ací",
        "en": "What is here"
      },
      "texto": {
        "es": "Abajo están las tarjetas: diecinueve programas que miran el expediente de una persona. Ver las curvas, la cronología, los tratamientos, los antecedentes. Y otros que escriben: la adquisición, las correcciones.",
        "fr": "En dessous, les cartes : dix-neuf programmes qui regardent le dossier d'une personne. Voir les courbes, la chronologie, les traitements, les antécédents. Et d'autres qui écrivent : l'acquisition, les corrections.",
        "ca": "Davall estan les targetes: dèsset programes que miren l'expedient d'una persona.",
        "en": "Below are the cards: nineteen programs that look at a person's record. Curves, chronology, treatments, history. And others that write."
      },
      "segundos": 12,
      "sonido": {
        "es": "voz/t03_es.mp3",
        "fr": "voz/t03_fr.mp3",
        "ca": "voz/t03_ca.mp3",
        "en": "voz/t03_en.mp3"
      }
    },
    {
      "n": 4,
      "icono": "🔒",
      "objeto": "#familias",
      "titulo": {
        "es": "Pero están apagadas",
        "fr": "Mais elles sont éteintes",
        "ca": "Però estan apagades",
        "en": "But they are dim"
      },
      "texto": {
        "es": "Y es a propósito. Un programa que mira un expediente no sirve de nada sin expediente. Así que primero hay que decir de quién se habla. Sólo el glosario funciona siempre: no le hace falta nadie.",
        "fr": "Et c'est voulu. Un programme qui regarde un dossier ne sert à rien sans dossier. Il faut donc d'abord dire de qui l'on parle. Seul le glossaire marche toujours : il n'a besoin de personne.",
        "ca": "I és a propòsit. Primer cal dir de qui es parla. Només el glossari funciona sempre.",
        "en": "And that is deliberate. A program that reads a record is useless without one. So first you must say whose. Only the glossary always works: it needs nobody."
      },
      "segundos": 12,
      "sonido": {
        "es": "voz/t04_es.mp3",
        "fr": "voz/t04_fr.mp3",
        "ca": "voz/t04_ca.mp3",
        "en": "voz/t04_en.mp3"
      }
    },
    {
      "n": 5,
      "icono": "🧑",
      "objeto": "#sel-pac",
      "titulo": {
        "es": "Hay un paciente de demostración",
        "fr": "Il y a un patient de démonstration",
        "ca": "Hi ha un pacient de demostració",
        "en": "There is a demonstration patient"
      },
      "texto": {
        "es": "Ana Gómez Ruiz. Sus datos clínicos son de verdad — catorce años de análisis, de ingresos, de tratamientos — pero la persona no existe: el nombre, el SIP y los documentos están cambiados. Elíjala y verá Salufolio funcionando de veras.",
        "fr": "Ana Gómez Ruiz. Ses données cliniques sont vraies — quatorze ans d'analyses, d'hospitalisations, de traitements — mais la personne n'existe pas : le nom, le SIP et les documents ont été changés. Choisissez-la et vous verrez Salufolio fonctionner pour de bon.",
        "ca": "Ana Gómez Ruiz. Les seues dades clíniques són de veres, però la persona no existix.",
        "en": "Ana Gómez Ruiz. Her clinical data are real — fourteen years of tests, admissions, treatments — but the person does not exist: name, SIP and documents have been changed."
      },
      "segundos": 14,
      "sonido": {
        "es": "voz/t05_es.mp3",
        "fr": "voz/t05_fr.mp3",
        "ca": "voz/t05_ca.mp3",
        "en": "voz/t05_en.mp3"
      }
    },
    {
      "n": 6,
      "icono": "➕",
      "objeto": "#b-nuevo",
      "titulo": {
        "es": "O cree el suyo",
        "fr": "Ou créez le vôtre",
        "ca": "O cree el seu",
        "en": "Or create your own"
      },
      "texto": {
        "es": "Un nombre, unos apellidos, el número de la tarjeta sanitaria, y ya está. La matrícula se forma sola con las iniciales y los últimos cuatro dígitos. A su lado, la carpeta abre un expediente que esté en otro sitio de su disco.",
        "fr": "Un prénom, un nom, le numéro de la carte de santé, et c'est tout. La matricule se forme toute seule avec les initiales et les quatre derniers chiffres. À côté, le dossier ouvre un fichier qui serait ailleurs sur votre disque.",
        "ca": "Un nom, uns cognoms, el número de la targeta sanitària, i ja està.",
        "en": "A first name, a surname, the health card number, and that is all. The reference builds itself from the initials and the last four digits."
      },
      "segundos": 13,
      "sonido": {
        "es": "voz/t06_es.mp3",
        "fr": "voz/t06_fr.mp3",
        "ca": "voz/t06_ca.mp3",
        "en": "voz/t06_en.mp3"
      }
    },
    {
      "n": 7,
      "icono": "📁",
      "objeto": "#caja-expedientes",
      "titulo": {
        "es": "Sus expedientes",
        "fr": "Ses dossiers",
        "ca": "Els seus expedients",
        "en": "Their records"
      },
      "texto": {
        "es": "Una persona tiene varios expedientes: uno por cada vez que se ha guardado, con su fecha. Guardar no borra nunca. Si algo sale mal, se vuelve al de antes — y el de antes sigue donde estaba.",
        "fr": "Une personne a plusieurs dossiers : un par fois qu'on a gardé, avec sa date. Garder n'efface jamais. Si quelque chose tourne mal, on revient au précédent — et le précédent est resté où il était.",
        "ca": "Una persona té diversos expedients: un per cada vegada que s'ha guardat.",
        "en": "A person has several records: one for each time it was saved, with its date. Saving never erases."
      },
      "segundos": 12,
      "sonido": {
        "es": "voz/t07_es.mp3",
        "fr": "voz/t07_fr.mp3",
        "ca": "voz/t07_ca.mp3",
        "en": "voz/t07_en.mp3"
      }
    },
    {
      "n": 8,
      "icono": "✅",
      "objeto": "#familias",
      "titulo": {
        "es": "Y ahora se encienden",
        "fr": "Et maintenant elles s'allument",
        "ca": "I ara s'encenen",
        "en": "And now they light up"
      },
      "texto": {
        "es": "Con un expediente abierto, las tarjetas cobran vida. Toque cualquiera y verá los datos de esa persona — las mismas curvas, la misma cronología, vistas de otra manera. Todo se queda en su ordenador: nada sale de aquí.",
        "fr": "Avec un dossier ouvert, les cartes prennent vie. Touchez-en une et vous verrez les données de cette personne — les mêmes courbes, la même chronologie, vues autrement. Tout reste sur votre ordinateur : rien ne sort d'ici.",
        "ca": "Amb un expedient obert, les targetes cobren vida. Tot es queda en el seu ordinador.",
        "en": "With a record open, the cards come alive. Tap any of them and you will see that person's data. Everything stays on your computer: nothing leaves."
      },
      "segundos": 13,
      "sonido": {
        "es": "voz/t08_es.mp3",
        "fr": "voz/t08_fr.mp3",
        "ca": "voz/t08_ca.mp3",
        "en": "voz/t08_en.mp3"
      }
    },
    {
      "n": 9,
      "icono": "👤",
      "objeto": "#perfiles",
      "titulo": {
        "es": "Quién accede",
        "fr": "Qui accède",
        "ca": "Qui accedix",
        "en": "Who is looking"
      },
      "texto": {
        "es": "Paciente, profesional, cuidador, investigador. No es un permiso: es una manera de mirar. Un cuidador quiere las tomas y las citas; un médico, los valores fuera de rango. Cambie el perfil y las tarjetas cambian con él.",
        "fr": "Patient, professionnel, aidant, chercheur. Ce n'est pas une permission : c'est une façon de regarder. Un aidant veut les prises et les rendez-vous ; un médecin, les valeurs hors des bornes. Changez le profil et les cartes changent avec lui.",
        "ca": "Pacient, professional, cuidador, investigador. No és un permís: és una manera de mirar.",
        "en": "Patient, professional, carer, researcher. Not a permission: a way of looking. A carer wants doses and appointments; a doctor, the values out of range."
      },
      "segundos": 14,
      "sonido": {
        "es": "voz/t09_es.mp3",
        "fr": "voz/t09_fr.mp3",
        "ca": "voz/t09_ca.mp3",
        "en": "voz/t09_en.mp3"
      }
    },
    {
      "n": 10,
      "icono": "💾",
      "objeto": "[data-b=\"guardar\"]",
      "titulo": {
        "es": "Guardar lo que se escribe",
        "fr": "Garder ce qu'on écrit",
        "ca": "Guardar el que s'escriu",
        "en": "Saving what you write"
      },
      "texto": {
        "es": "El disquete escribe el expediente en su disco. Si lleva un asterisco, hay algo escrito que todavía no se ha guardado. Cada vez se escribe un fichero nuevo, con su fecha: el anterior sigue donde estaba.",
        "fr": "La disquette écrit le dossier sur votre disque. Si elle porte une étoile, il y a du travail qui n'est pas encore gardé. Chaque fois un fichier neuf s'écrit, avec sa date : le précédent reste où il était.",
        "ca": "El disquet escriu l'expedient al seu disc. Si porta un asterisc, hi ha alguna cosa sense guardar.",
        "en": "The disk writes the record to your drive. If it carries a star, something is not yet saved."
      },
      "segundos": 12,
      "sonido": {
        "es": "voz/t10_es.mp3",
        "fr": "voz/t10_fr.mp3",
        "ca": "voz/t10_ca.mp3",
        "en": "voz/t10_en.mp3"
      }
    },
    {
      "n": 11,
      "icono": "🌐",
      "objeto": "[data-b=\"idioma\"]",
      "titulo": {
        "es": "Su idioma",
        "fr": "Votre langue",
        "ca": "El seu idioma",
        "en": "Your language"
      },
      "texto": {
        "es": "Castellano, valenciano, francés, inglés. Toda la casa lo sigue: los menús, las ayudas, los informes. Se elige una vez y se recuerda.",
        "fr": "Espagnol, valencien, français, anglais. Toute la maison suit : les menus, les aides, les rapports. On choisit une fois et c'est retenu.",
        "ca": "Castellà, valencià, francés, anglés. Tota la casa ho seguix.",
        "en": "Spanish, Valencian, French, English. The whole house follows. Choose once and it is remembered."
      },
      "segundos": 9,
      "sonido": {
        "es": "voz/t11_es.mp3",
        "fr": "voz/t11_fr.mp3",
        "ca": "voz/t11_ca.mp3",
        "en": "voz/t11_en.mp3"
      }
    },
    {
      "n": 12,
      "icono": "🎨",
      "objeto": "[data-b=\"tema\"]",
      "titulo": {
        "es": "Sus colores",
        "fr": "Vos couleurs",
        "ca": "Els seus colors",
        "en": "Your colours"
      },
      "texto": {
        "es": "Once paletas, claras y oscuras. No es un capricho: quien lee de noche, quien tiene la vista cansada, quien trabaja a la luz de un hospital no necesitan lo mismo.",
        "fr": "Onze palettes, claires et sombres. Ce n'est pas un caprice : celui qui lit la nuit, celui qui a la vue fatiguée, celui qui travaille à la lumière d'un hôpital n'ont pas les mêmes besoins.",
        "ca": "Onze paletes, clares i fosques. Qui llig de nit i qui té la vista cansada no necessiten el mateix.",
        "en": "Eleven palettes, light and dark. Not a whim: reading at night, tired eyes, hospital lighting — none need the same."
      },
      "segundos": 12,
      "sonido": {
        "es": "voz/t12_es.mp3",
        "fr": "voz/t12_fr.mp3",
        "ca": "voz/t12_ca.mp3",
        "en": "voz/t12_en.mp3"
      }
    },
    {
      "n": 13,
      "icono": "❔",
      "objeto": "[data-b=\"ayuda\"]",
      "titulo": {
        "es": "Y si se pierde",
        "fr": "Et si vous vous perdez",
        "ca": "I si es perd",
        "en": "And if you get lost"
      },
      "texto": {
        "es": "Cada programa trae su ayuda, y dice lo que se hace donde uno está. No es un manual que hay que leer entero: es una página corta, en su idioma, sobre la pantalla que tiene delante. A su lado, la casa lo trae de vuelta.",
        "fr": "Chaque programme a son aide, et dit ce qu'on fait là où l'on est. Ce n'est pas un manuel à lire en entier : c'est une page courte, dans votre langue, sur l'écran que vous avez devant vous. À côté, la maison vous ramène.",
        "ca": "Cada programa porta la seua ajuda. Al seu costat, la casa el torna.",
        "en": "Each program has its help, telling you what happens where you are. Beside it, the house brings you back."
      },
      "segundos": 12,
      "sonido": {
        "es": "voz/t13_es.mp3",
        "fr": "voz/t13_fr.mp3",
        "ca": "voz/t13_ca.mp3",
        "en": "voz/t13_en.mp3"
      }
    }
  ],
  "final": {
    "titulo": {
      "es": "Ya conoce la casa",
      "fr": "Vous connaissez la maison",
      "ca": "Ja coneix la casa",
      "en": "You know the house now"
    },
    "texto": {
      "es": "Eso es todo. Ahora toque una tarjeta y mire: es su expediente, en su ordenador, y nada sale de ahí. Si algo le ha parecido mal, dígalo — el ❌ de esta visita abre una hoja para contarlo.",
      "fr": "Voilà tout. Touchez maintenant une carte et regardez : c'est votre dossier, sur votre ordinateur, et rien n'en sort. Si quelque chose vous a déplu, dites-le — le ❌ de cette visite ouvre une feuille pour le raconter.",
      "ca": "Això és tot. Ara toque una targeta i mire: és el seu expedient, en el seu ordinador.",
      "en": "That is all. Now tap a card and look: it is your record, on your computer, and nothing leaves it."
    }
  },
  "suspiro": 500,
  "_suspiro": "El respiro entre etapas, en milesimas (P-H, 18/09): el halo se apaga, se respira, y llega la siguiente. Cada etapa puede tener el suyo."
};
