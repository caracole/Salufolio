/* EL MUSEO — las salas y los objetos */
var SF_TOUR = window.SF_TOUR = {
  "id": "tour",
  "version": "2026.09.21-22:43:16",
  "_doctrina": "EL MUSEO (P-H, 18-21/09/2026)\n\n  « On ouvre la porte d'une salle, on parcourt les étapes, et quand on a\n    terminé on sort en fermant la porte, et on va visiter une autre\n    salle. Ce n'est pas plus compliqué. »\n\nSALAS    una sala es UN CUADRO de la pantalla. Tiene su puerta: como se\n         encuentra al entrar (abierta o cerrada) y que se hace al salir\n         (cerrar, dejar, o como_estaba). La sala sin puerta es el\n         VESTIBULO: la banda de arriba, donde se esta nada mas entrar.\n\nOBJETOS  lo que se ensena, sin orden. Un objeto se describe UNA VEZ —su\n         texto, su voz, su fichero— y puede salir en varias salas.\n\nAntes la sala « El paciente » cubria DOS cuadros, y hacian falta puertas\nque abrir y cerrar a mitad de camino. Una sala, un cuadro: el problema\ndesaparece.\n\nAl acabar una sala —n/n, o salida anticipada— se cierra su puerta, y se\npasa a la siguiente, se elige otra en la carta, o se sale del museo.",
  "idiomas": [
    "es",
    "fr",
    "ca",
    "en"
  ],
  "idioma_defecto": "es",
  "marco": "propio",
  "suspiro": 500,
  "_suspiro": "El respiro entre etapas, en milesimas.",
  "voz_carpeta": "voz/",
  "voz_nombre": "{lang}-{objeto}.mp3",
  "_voz": "El nombre del sonido se deduce del OBJETO, no de su rango:\n  ES-abeja.mp3  FR-abeja.mp3  CA-abeja.mp3  EN-abeja.mp3\n\nLa lengua delante, para que un listado los agrupe por lengua: se ve de\nun vistazo lo que falta en frances (P-H).\n\n« grabado » lleva la huella del texto el dia que se grabo. Si se\ncorrige una frase, la huella ya no cuadra y el taller de las voces lo\ndice en rojo: ese fichero hay que rehacerlo.",
  "_objetos": "Lo que se puede ensenar. La clave es el nombre del objeto — da nombre a su fichero de voz. « objeto » dice donde esta en la pagina. Campos opcionales: « corto » (texto breve), « voz » (quien lo dice, si no la de la sala).",
  "objetos": {
    "abeja": {
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
      "grabado": {
        "es": "703acaba",
        "fr": "c724d289",
        "ca": "20c0d66b",
        "en": "85d780e8"
      }
    },
    "logo": {
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
      "grabado": {
        "es": "c21ea9a6",
        "fr": "6610fff0",
        "ca": "2dd1ea70",
        "en": "e344dcaa"
      }
    },
    "paciente": {
      "icono": "🧑",
      "objeto": "#b-pac",
      "titulo": {
        "es": "De quién se habla",
        "fr": "De qui l'on parle",
        "ca": "De qui es parla",
        "en": "Whose record"
      },
      "texto": {
        "es": "Aquí se ve de quién es el expediente abierto — ahora mismo, el de demostración. Tóquelo y podrá cambiar de persona. Salufolio sirve a varios: su madre, su padre, usted mismo. Cada uno tiene su carpeta, y nunca se mezclan.",
        "fr": "Ici on voit de qui est le dossier ouvert — pour l'instant, celui de démonstration. Touchez-le et vous pourrez changer de personne. Salufolio sert à plusieurs : votre mère, votre père, vous-même. Chacun a son dossier, et ils ne se mélangent jamais.",
        "ca": "Ací es veu de qui és l'expedient obert. Toque'l i podrà canviar de persona. Cada u té la seua carpeta.",
        "en": "Here you see whose record is open — right now, the demonstration one. Tap it to change person. Salufolio serves several: your mother, your father, yourself. Each has their own folder."
      },
      "grabado": {
        "es": "889fbe96",
        "fr": "39d683c7",
        "ca": "d3aba1b2",
        "en": "7498b630"
      }
    },
    "guardar": {
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
      "grabado": {
        "es": "5c493a4d",
        "fr": "5c77ed4b",
        "ca": "c67d825c",
        "en": "d6df21dd"
      }
    },
    "idioma": {
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
      "grabado": {
        "es": "03e9f12d",
        "fr": "9052fad2",
        "ca": "cb6e38ac",
        "en": "5da7e342"
      }
    },
    "paleta": {
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
      "grabado": {
        "es": "8eb8b890",
        "fr": "06c67a89",
        "ca": "471c1cd6",
        "en": "d44cbd77"
      }
    },
    "ayuda": {
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
      "grabado": {
        "es": "83b6b437",
        "fr": "df39c503",
        "ca": "efe214d4",
        "en": "145cfb0b"
      }
    },
    "casa": {
      "icono": "🏠",
      "objeto": "[data-b=\"inicio\"]",
      "titulo": {
        "es": "Volver a la casa",
        "fr": "Revenir à la maison",
        "ca": "Tornar a la casa",
        "en": "Back to the house"
      },
      "texto": {
        "es": "Cuando se está dentro de un programa, la casa lo trae de vuelta. Las tarjetas siguen ahí, y el expediente también: no se pierde nada al ir y venir.",
        "fr": "Quand on est dans un programme, la maison vous ramène. Les cartes sont toujours là, et le dossier aussi : on ne perd rien à aller et venir.",
        "ca": "Quan s'està dins d'un programa, la casa el torna.",
        "en": "When you are inside a program, the house brings you back."
      },
      "grabado": {
        "es": "019f426c",
        "fr": "f8567fdd",
        "ca": "4d70b07a",
        "en": "1adcf300"
      }
    },
    "elegir": {
      "icono": "🧑",
      "objeto": "#sel-pac",
      "titulo": {
        "es": "Elegir a quién se mira",
        "fr": "Choisir qui l'on regarde",
        "ca": "Triar a qui es mira",
        "en": "Choosing whose record"
      },
      "texto": {
        "es": "Esta lista lleva a las personas cuyo expediente está en su ordenador. Ana Gómez Ruiz es la de demostración: sus datos clínicos son de verdad —catorce años— pero la persona no existe.",
        "fr": "Cette liste porte les personnes dont le dossier est sur votre ordinateur. Ana Gómez Ruiz est celle de démonstration : ses données cliniques sont vraies — quatorze ans — mais la personne n'existe pas.",
        "ca": "Esta llista porta les persones que tenen expedient al seu ordinador.",
        "en": "This list holds the people whose record is on your computer. Ana Gómez Ruiz is the demonstration one."
      },
      "grabado": {
        "es": "d0b55d60",
        "fr": "57b9b5a7",
        "ca": "85bbf044",
        "en": "e578f2d2"
      }
    },
    "nuevo": {
      "icono": "➕",
      "objeto": "#cuadro-nuevo",
      "titulo": {
        "es": "Crear un paciente",
        "fr": "Créer un patient",
        "ca": "Crear un pacient",
        "en": "Create a patient"
      },
      "texto": {
        "es": "Aquí se abre el cuadro. Cuatro datos bastan, y ninguno se inventa: son los que lleva la tarjeta sanitaria. Vamos a verlos uno por uno.",
        "fr": "Ici s'ouvre le cadre. Quatre renseignements suffisent, et aucun ne s'invente : ce sont ceux que porte la carte de santé. Voyons-les un par un.",
        "ca": "Ací s'obri el quadre. Quatre dades basten, i cap s'inventa.",
        "en": "Here the panel opens. Four details are enough, and none is invented: they are what the health card carries."
      },
      "grabado": {
        "es": "8d4d8cb8",
        "fr": "b718e81a",
        "ca": "2b2f73bc",
        "en": "2564ffc7"
      }
    },
    "abrir": {
      "icono": "📂",
      "objeto": "#b-suelto",
      "titulo": {
        "es": "Abrir uno de otro sitio",
        "fr": "Ouvrir un dossier d'ailleurs",
        "ca": "Obrir-ne un d'un altre lloc",
        "en": "Open one from elsewhere"
      },
      "texto": {
        "es": "La carpeta abre un expediente que esté en cualquier parte de su disco — una copia de seguridad, uno que le hayan pasado, uno de otro ordenador. Salufolio no necesita que estén todos en el mismo sitio.",
        "fr": "Le dossier ouvre un fichier qui serait n'importe où sur votre disque — une sauvegarde, un qu'on vous a passé, un venu d'un autre ordinateur. Salufolio n'exige pas qu'ils soient tous au même endroit.",
        "ca": "La carpeta obri un expedient que estiga en qualsevol part del seu disc.",
        "en": "The folder opens a record from anywhere on your disk."
      },
      "grabado": {
        "es": "d7b5b9df",
        "fr": "956b8a8f",
        "ca": "5609e6cb",
        "en": "1d093c5d"
      }
    },
    "expedientes": {
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
        "en": "A person has several records: one per save, with its date. Saving never erases."
      },
      "grabado": {
        "es": "8bdf0ea7",
        "fr": "34b6cb03",
        "ca": "4465fbb7",
        "en": "5e997616"
      }
    },
    "perfiles": {
      "icono": "👤",
      "objeto": "#perfiles",
      "titulo": {
        "es": "Quién accede",
        "fr": "Qui accède",
        "ca": "Qui accedix",
        "en": "Who is looking"
      },
      "texto": {
        "es": "Paciente, profesional, cuidador, investigador. No es un permiso: es una manera de mirar. Un cuidador quiere las tomas y las citas; un médico, los valores fuera de rango; un investigador, las series completas.",
        "fr": "Patient, professionnel, aidant, chercheur. Ce n'est pas une permission : c'est une façon de regarder. Un aidant veut les prises et les rendez-vous ; un médecin, les valeurs hors des bornes ; un chercheur, les séries entières.",
        "ca": "Pacient, professional, cuidador, investigador. No és un permís: és una manera de mirar.",
        "en": "Patient, professional, carer, researcher. Not a permission: a way of looking."
      },
      "grabado": {
        "es": "594f048d",
        "fr": "e5486650",
        "ca": "79b4a7b9",
        "en": "0480d057"
      }
    },
    "perfil_cambia": {
      "icono": "🔄",
      "objeto": "#familias",
      "titulo": {
        "es": "Y las tarjetas cambian",
        "fr": "Et les cartes changent",
        "ca": "I les targetes canvien",
        "en": "And the cards change"
      },
      "texto": {
        "es": "Cambie el perfil y verá: unas tarjetas se encienden, otras se apagan. Nada se oculta por secreto — es que un cuidador no necesita el módulo de correlaciones, y un investigador no necesita el de tomas.",
        "fr": "Changez le profil et vous verrez : des cartes s'allument, d'autres s'éteignent. Rien n'est caché par secret — c'est qu'un aidant n'a que faire des corrélations, et un chercheur n'a que faire des prises.",
        "ca": "Canvie el perfil i vorà: unes targetes s'encenen, altres s'apaguen.",
        "en": "Change the profile and watch: some cards light up, others dim."
      },
      "grabado": {
        "es": "62ce1d7e",
        "fr": "4ac0c878",
        "ca": "62f60596",
        "en": "949568f3"
      }
    },
    "tarjetas": {
      "icono": "🗂",
      "objeto": "#familias",
      "titulo": {
        "es": "Las tarjetas",
        "fr": "Les cartes",
        "ca": "Les targetes",
        "en": "The cards"
      },
      "texto": {
        "es": "Diecinueve programas, cada uno con su manera de mirar el mismo expediente. No hacen falta todos: se toca el que responde a la pregunta del momento.",
        "fr": "Dix-neuf programmes, chacun avec sa façon de regarder le même dossier. Il n'en faut pas dix-neuf : on touche celui qui répond à la question du moment.",
        "ca": "Dèsset programes, cada u amb la seua manera de mirar el mateix expedient.",
        "en": "Nineteen programs, each with its way of reading the same record."
      },
      "grabado": {
        "es": "5098ae6f",
        "fr": "b9bf12a0",
        "ca": "82a56e3a",
        "en": "9b7e942a"
      }
    },
    "familias": {
      "icono": "📑",
      "objeto": "#familias",
      "titulo": {
        "es": "Dos familias",
        "fr": "Deux familles",
        "ca": "Dos famílies",
        "en": "Two families"
      },
      "texto": {
        "es": "Las tarjetas que MIRAN el expediente sin tocarlo. Ésta es la familia que usa todo el mundo — el paciente, quien le cuida, el médico.",
        "fr": "Les cartes qui REGARDENT le dossier sans y toucher. C'est la famille dont tout le monde se sert — le patient, celui qui l'aide, le médecin.",
        "ca": "Les targetes que MIREN l'expedient sense tocar-lo. És la família que usa tothom.",
        "en": "The cards that LOOK at the record without touching it. This is the family everyone uses — patient, carer, doctor."
      },
      "grabado": {
        "es": "6151f05a",
        "fr": "4de9c76b",
        "ca": "6032fe09",
        "en": "35fb8db4"
      }
    },
    "glosario": {
      "icono": "📖",
      "objeto": "[data-mod=\"glosario\"]",
      "titulo": {
        "es": "El glosario, siempre",
        "fr": "Le glossaire, toujours",
        "ca": "El glossari, sempre",
        "en": "The glossary, always"
      },
      "texto": {
        "es": "Casi todas necesitan un expediente abierto. El glosario no: funciona siempre, para cualquiera. Dice qué significa cada palabra de un análisis, en palabras de todos los días.",
        "fr": "Presque toutes ont besoin d'un dossier ouvert. Le glossaire non : il marche toujours, pour tout le monde. Il dit ce que veut dire chaque mot d'une analyse, en mots de tous les jours.",
        "ca": "Quasi totes necessiten un expedient obert. El glossari no.",
        "en": "Almost all need an open record. The glossary does not."
      },
      "grabado": {
        "es": "97423fa5",
        "fr": "72bc423c",
        "ca": "23e9a873",
        "en": "6abf5a59"
      }
    },
    "licencia": {
      "icono": "⚖️",
      "objeto": "[data-pie=\"licencia\"]",
      "titulo": {
        "es": "Software libre",
        "fr": "Logiciel libre",
        "ca": "Programari lliure",
        "en": "Free software"
      },
      "texto": {
        "es": "GNU GPL v3. Cualquiera puede leer el código, copiarlo, cambiarlo. No es generosidad: es la única garantía de que un programa que guarda su salud no le esconda nada.",
        "fr": "GNU GPL v3. N'importe qui peut lire le code, le copier, le changer. Ce n'est pas de la générosité : c'est la seule garantie qu'un programme qui garde votre santé ne vous cache rien.",
        "ca": "GNU GPL v3. Qualsevol pot llegir el codi, copiar-lo, canviar-lo.",
        "en": "GNU GPL v3. Anyone can read the code, copy it, change it."
      },
      "grabado": {
        "es": "c6fc26b6",
        "fr": "d7bb38c9",
        "ca": "9ca38bac",
        "en": "24963191"
      }
    },
    "doi": {
      "icono": "📄",
      "objeto": "[data-pie=\"doi\"]",
      "titulo": {
        "es": "Quién lo hizo",
        "fr": "Qui l'a fait",
        "ca": "Qui l'ha fet",
        "en": "Who made it"
      },
      "texto": {
        "es": "Salufolio es obra de Pierre-Henri Giraud, asistido por Claude (Anthropic). Está publicado en Zenodo con un identificador de objeto digital (DOI): un número que no cambia nunca y que permite citarlo. Lo que hay detrás del programa —por qué, para quién, cómo— está escrito allí.",
        "fr": "Salufolio est l'œuvre de Pierre-Henri Giraud, assisté de Claude (Anthropic). Il est publié sur Zenodo avec un identifiant d'objet numérique (DOI) : un numéro qui ne change jamais et qui permet de le citer. Ce qu'il y a derrière le programme — pourquoi, pour qui, comment — est écrit là.",
        "ca": "Salufolio és obra de Pierre-Henri Giraud, assistit per Claude (Anthropic). Està publicat en Zenodo amb un identificador d'objecte digital (DOI): un número que no canvia mai i que permet citar-lo.",
        "en": "Salufolio is the work of Pierre-Henri Giraud, assisted by Claude (Anthropic). It is published on Zenodo with a Digital Object Identifier (DOI): a number that never changes and lets it be cited."
      },
      "dicho": {
        "es": "Salufolio es obra de Pierre-Henri Giraud, asistido por Claude, de Anthropic. Está publicado en Zénodo con un identificador de objeto digital: un número que no cambia nunca y que permite citarlo. Lo que hay detrás del programa, por qué, para quién, cómo, está escrito allí.",
        "fr": "Salufolio est l'œuvre de Pierre-Henri Giraud, assisté de Claude, d'Anthropic. Il est publié sur Zénodo avec un identifiant d'objet numérique : un numéro qui ne change jamais et qui permet de le citer. Ce qu'il y a derrière le programme, pourquoi, pour qui, comment, est écrit là.",
        "ca": "Salufolio és obra de Pierre-Henri Giraud, assistit per Claude, d'Anthropic. Està publicat en Zénodo amb un identificador d'objecte digital: un número que no canvia mai i que permet citar-lo.",
        "en": "Salufolio is the work of Pierre-Henri Giraud, assisted by Claude, from Anthropic. It is published on Zenodo with a digital object identifier: a number that never changes and lets it be cited."
      },
      "_dicho": "Lo que dice la voz, cuando no es lo que se lee. « DOI » escrito se lee bien; dicho de un tiron suena « doi ». En pantalla sale « texto »; se graba « dicho ».",
      "grabado": {
        "es": "fb701dcf",
        "fr": "42693f71",
        "ca": "480e6e3b",
        "en": "a951fbad"
      }
    },
    "correo": {
      "icono": "✉️",
      "objeto": "[data-pie=\"correo\"]",
      "titulo": {
        "es": "Y si algo falla",
        "fr": "Et si quelque chose cloche",
        "ca": "I si alguna cosa falla",
        "en": "And if something is wrong"
      },
      "texto": {
        "es": "Escriba. Un fallo encontrado por quien lo usa vale más que diez horas de pruebas: quien hace el programa nunca lo mira con los mismos ojos que quien lo necesita.",
        "fr": "Écrivez. Un défaut trouvé par celui qui s'en sert vaut mieux que dix heures d'essais : celui qui fait le programme ne le regarde jamais avec les yeux de celui qui en a besoin.",
        "ca": "Escriga. Un fallo trobat per qui l'usa val més que deu hores de proves.",
        "en": "Write. A fault found by the user is worth more than ten hours of testing."
      },
      "grabado": {
        "es": "c617d4e4",
        "fr": "27a6daea",
        "ca": "5c8e09bf",
        "en": "8915195d"
      }
    },
    "n_nombre": {
      "icono": "✍️",
      "objeto": "#n-nombre",
      "titulo": {
        "es": "El nombre",
        "fr": "Le prénom",
        "ca": "El nom",
        "en": "The first name"
      },
      "texto": {
        "es": "El nombre de pila, tal como viene en la tarjeta. Puede llevar varios — María del Carmen es un solo nombre, no tres. Escríbalo entero: el programa no lo corta.",
        "fr": "Le prénom, tel qu'il figure sur la carte. Il peut en porter plusieurs — María del Carmen est un seul prénom, pas trois. Écrivez-le en entier : le programme ne le coupe pas.",
        "ca": "El nom de pila, tal com ve en la targeta. Pot portar-ne diversos.",
        "en": "The first name, as it appears on the card. It may hold several — María del Carmen is one name, not three."
      },
      "grabado": {
        "es": "371fb814",
        "fr": "e7d71b69",
        "ca": "18e27e10",
        "en": "2d46b900"
      }
    },
    "n_apellidos": {
      "icono": "👥",
      "objeto": "#n-apellidos",
      "titulo": {
        "es": "Los apellidos",
        "fr": "Le nom",
        "ca": "Els cognoms",
        "en": "The surname"
      },
      "texto": {
        "es": "Aquí caben todos: uno, dos, o los ocho que recitaban los vascos para probar su linaje. Y las partículas se quedan — Rogues de Fursac se escribe entero, con su « de ».",
        "fr": "Ici tiennent tous : un, deux, ou les huit que récitaient les Basques pour prouver leur lignée. Et les particules restent — Rogues de Fursac s'écrit en entier, avec son « de ».",
        "ca": "Ací caben tots: un, dos, o els huit que recitaven els bascos.",
        "en": "All fit here: one, two, or the eight the Basques used to recite to prove their lineage."
      },
      "grabado": {
        "es": "bb684b15",
        "fr": "ae53f82d",
        "ca": "785f84cd",
        "en": "96c4711b"
      }
    },
    "n_sip": {
      "icono": "💳",
      "objeto": "#n-sip",
      "titulo": {
        "es": "El número de la tarjeta",
        "fr": "Le numéro de la carte",
        "ca": "El número de la targeta",
        "en": "The card number"
      },
      "texto": {
        "es": "El SIP, en la Comunidad Valenciana. Es el número que abre el expediente en Abucasis, y el único que un médico reconoce de un vistazo. Cópielo tal cual de la tarjeta.",
        "fr": "Le SIP, en Communauté valencienne. C'est le numéro qui ouvre le dossier dans Abucasis, et le seul qu'un médecin reconnaisse d'un coup d'œil. Recopiez-le tel quel de la carte.",
        "ca": "El SIP. És el número que obri l'expedient en Abucasis.",
        "en": "The health card number — the one a doctor recognises at a glance."
      },
      "grabado": {
        "es": "c44b1442",
        "fr": "afdb5dc9",
        "ca": "ac0f5190",
        "en": "67734f56"
      }
    },
    "n_mat": {
      "icono": "🔖",
      "objeto": "#n-mat",
      "titulo": {
        "es": "La matrícula se forma sola",
        "fr": "La matricule se forme toute seule",
        "ca": "La matrícula es forma sola",
        "en": "The reference builds itself"
      },
      "texto": {
        "es": "Mire: se escribe sola mientras usted teclea. Una inicial del nombre, dos de los apellidos, y los cuatro últimos dígitos del SIP. Así dos personas del mismo nombre nunca se confunden — y ese es el nombre de su carpeta en el disco.",
        "fr": "Regardez : elle s'écrit toute seule pendant que vous tapez. Une initiale du prénom, deux du nom, et les quatre derniers chiffres du SIP. Ainsi deux personnes du même nom ne se confondent jamais — et c'est le nom de son dossier sur le disque.",
        "ca": "Mire: s'escriu sola mentres vosté teclea. Així dos persones del mateix nom mai es confonen.",
        "en": "Watch: it writes itself as you type. One initial from the name, two from the surname, and the last four digits."
      },
      "grabado": {
        "es": "ee4916aa",
        "fr": "f5341b5b",
        "ca": "14a816c4",
        "en": "3503cfa6"
      }
    },
    "n_crear": {
      "icono": "✅",
      "objeto": "#b-crear",
      "titulo": {
        "es": "Y ya está",
        "fr": "Et voilà",
        "ca": "I ja està",
        "en": "And that is it"
      },
      "texto": {
        "es": "Se crea la carpeta y el expediente vacío, listo para llenarse. Nada se envía a ninguna parte: queda en su ordenador, en un fichero que usted puede abrir, copiar y leer dentro de diez años sin este programa.",
        "fr": "Le dossier se crée, vide, prêt à se remplir. Rien n'est envoyé nulle part : tout reste sur votre ordinateur, dans un fichier que vous pouvez ouvrir, copier et lire dans dix ans sans ce programme.",
        "ca": "Es crea la carpeta i l'expedient buit. Res s'envia a cap lloc.",
        "en": "The folder and the empty record are created. Nothing is sent anywhere: it stays on your computer."
      },
      "grabado": {
        "es": "57d780e2",
        "fr": "ed33f502",
        "ca": "4594dd73",
        "en": "91f2e8fc"
      }
    },
    "n_cancelar": {
      "icono": "↩️",
      "objeto": "#b-cancelar",
      "titulo": {
        "es": "Cancelar",
        "fr": "Annuler",
        "ca": "Cancel·lar",
        "en": "Cancel"
      },
      "texto": {
        "es": "Y si se arrepiente, Cancelar cierra el cuadro sin crear nada. No queda ni rastro: ni carpeta, ni fichero.",
        "fr": "Et si l'on se ravise, Annuler ferme le cadre sans rien créer. Il n'en reste aucune trace : ni dossier, ni fichier.",
        "ca": "I si es penedix, Cancel·lar tanca el quadre sense crear res.",
        "en": "And if you change your mind, Cancel closes the panel without creating anything. No trace is left."
      },
      "grabado": {
        "es": "ceea04e4",
        "fr": "a88e26c2",
        "ca": "868d9dda",
        "en": "d0282cf5"
      }
    },
    "boton_nuevo": {
      "icono": "➕",
      "objeto": "#b-nuevo",
      "titulo": {
        "es": "Uno nuevo",
        "fr": "Un nouveau",
        "ca": "Un nou",
        "en": "A new one"
      },
      "texto": {
        "es": "Si la persona no está en la lista, este botón abre el cuadro para crearla. Lo veremos en la sala siguiente.",
        "fr": "Si la personne n'est pas dans la liste, ce bouton ouvre le cadre pour la créer. Nous le verrons dans la salle suivante.",
        "ca": "Si la persona no està en la llista, este botó obri el quadre per crear-la.",
        "en": "If the person is not on the list, this button opens the panel to create them. We will see it in the next room."
      },
      "grabado": {
        "es": "3c0b5d11",
        "fr": "98317f48",
        "ca": "a939f430",
        "en": "08490bef"
      }
    },
    "cronologia": {
      "icono": "📅",
      "objeto": "[data-mod=\"cronologia\"]",
      "titulo": {
        "es": "La cronología",
        "fr": "La chronologie",
        "ca": "La cronologia",
        "en": "The timeline"
      },
      "texto": {
        "es": "Todo lo que ha pasado, en el orden en que pasó: urgencias, ingresos, consultas, análisis. Cuando un médico pregunta « ¿y desde cuándo? », la respuesta está aquí.",
        "fr": "Tout ce qui s'est passé, dans l'ordre où c'est arrivé : urgences, hospitalisations, consultations, analyses. Quand un médecin demande « et depuis quand ? », la réponse est ici.",
        "ca": "Tot el que ha passat, en l'orde en què va passar: urgències, ingressos, consultes, anàlisis. Quan un metge pregunta « i des de quan? », la resposta és ací.",
        "en": "Everything that has happened, in the order it happened: emergencies, admissions, visits, tests. When a doctor asks \"since when?\", the answer is here."
      },
      "grabado": {
        "es": "3a3fdb60",
        "fr": "e7401ac1",
        "ca": "03506c82",
        "en": "59e7e9ee"
      }
    },
    "resumen": {
      "icono": "🧾",
      "objeto": "[data-mod=\"resumen\"]",
      "titulo": {
        "es": "El resumen",
        "fr": "Le résumé",
        "ca": "El resum",
        "en": "The summary"
      },
      "texto": {
        "es": "Una sola página para saber cómo va la persona hoy: lo último de cada cosa, sin tener que buscar. Es la que se mira primero, cada mañana.",
        "fr": "Une seule page pour savoir où en est la personne aujourd'hui : le dernier état de chaque chose, sans avoir à chercher. C'est celle qu'on regarde en premier, chaque matin.",
        "ca": "Una sola pàgina per saber com va la persona hui: l'últim de cada cosa, sense haver de buscar.",
        "en": "A single page to see how the person is doing today: the latest of everything, without searching. It is the one you look at first each morning."
      },
      "grabado": {
        "es": "3d84d2fa",
        "fr": "0d85c94e",
        "ca": "18fa1e3a",
        "en": "2ffb51f3"
      }
    },
    "informe": {
      "icono": "📋",
      "objeto": "[data-mod=\"informe\"]",
      "titulo": {
        "es": "Los informes para el médico",
        "fr": "Les rapports pour le médecin",
        "ca": "Els informes per al metge",
        "en": "Reports for the doctor"
      },
      "texto": {
        "es": "Tres formas: express, detallado y sintético. Todos se pueden enseñar en la pantalla, imprimir o enviar por correo. Todo sale del expediente: nada se inventa.",
        "fr": "Trois formes : express, détaillé et synthétique. Tous peuvent se montrer à l'écran, s'imprimer ou s'envoyer par courriel. Tout vient du dossier : rien n'est inventé.",
        "ca": "Tres formes: express, detallat i sintètic. Tots es poden ensenyar en pantalla, imprimir o enviar per correu. Tot ix de l'expedient.",
        "en": "Three forms: express, detailed and summary. All of them can be shown on screen, printed or sent by email. Everything comes from the record: nothing is invented."
      },
      "grabado": {
        "es": "d232b466",
        "fr": "76e767ac",
        "ca": "c4b13b94",
        "en": "a5c5b25f"
      }
    },
    "curvas": {
      "icono": "📈",
      "objeto": "[data-mod=\"curvas\"]",
      "titulo": {
        "es": "Las curvas",
        "fr": "Les courbes",
        "ca": "Les corbes",
        "en": "The curves"
      },
      "texto": {
        "es": "Cada valor de los análisis, dibujado a lo largo de los años. La banda verde es lo normal; lo que sale de ella se ve de un vistazo. Dos curvas se pueden poner juntas, para ver si una arrastra a la otra.",
        "fr": "Chaque valeur des analyses, dessinée au fil des années. La bande verte, c'est la norme ; ce qui en sort se voit d'un coup d'œil. On peut superposer deux courbes, pour voir si l'une entraîne l'autre.",
        "ca": "Cada valor de les anàlisis, dibuixat al llarg dels anys. La banda verda és el normal; el que n'ix es veu d'un colp d'ull.",
        "en": "Each test value, drawn over the years. The green band is normal; whatever leaves it shows at a glance. Two curves can be laid together, to see whether one pulls the other."
      },
      "grabado": {
        "es": "bac9a401",
        "fr": "e6bdc9d9",
        "ca": "90303a56",
        "en": "814d713c"
      }
    },
    "tratamientos": {
      "icono": "💊",
      "objeto": "[data-mod=\"tratamientos\"]",
      "titulo": {
        "es": "Los tratamientos",
        "fr": "Les traitements",
        "ca": "Els tractaments",
        "en": "Treatments"
      },
      "texto": {
        "es": "Lo que se toma, desde cuándo y hasta cuándo, y quién lo mandó. Las marcas comerciales se agrupan por su principio activo: Xarelto y rivaroxabán son el mismo medicamento, y aquí se ve.",
        "fr": "Ce qu'on prend, depuis quand et jusqu'à quand, et qui l'a prescrit. Les noms commerciaux se regroupent sous leur principe actif : Xarelto et rivaroxaban sont le même médicament, et ici ça se voit.",
        "ca": "El que es pren, des de quan i fins a quan, i qui ho va manar. Les marques s'agrupen pel seu principi actiu.",
        "en": "What is being taken, since when and until when, and who prescribed it. Brand names are grouped under their active ingredient: Xarelto and rivaroxaban are the same drug."
      },
      "grabado": {
        "es": "a2f85c36",
        "fr": "e8d1411a",
        "ca": "7a7628a6",
        "en": "0e87fb1a"
      }
    },
    "observancia": {
      "icono": "✅",
      "objeto": "[data-mod=\"observancia\"]",
      "titulo": {
        "es": "La observancia",
        "fr": "L'observance",
        "ca": "L'observança",
        "en": "Adherence"
      },
      "texto": {
        "es": "Si las tomas se hacen como se mandaron. No es para vigilar a nadie: un tratamiento que no funciona a veces es un tratamiento que no se toma, y el médico necesita saberlo.",
        "fr": "Si les prises se font comme prescrit. Ce n'est pas pour surveiller qui que ce soit : un traitement qui ne marche pas, c'est parfois un traitement qu'on ne prend pas, et le médecin a besoin de le savoir.",
        "ca": "Si les preses es fan com es van manar. Un tractament que no funciona de vegades és un tractament que no es pren.",
        "en": "Whether doses are taken as prescribed. Not to police anyone: a treatment that fails is sometimes a treatment not taken, and the doctor needs to know."
      },
      "grabado": {
        "es": "2addd428",
        "fr": "d653ec05",
        "ca": "1cb67543",
        "en": "29b365fe"
      }
    },
    "antecedentes": {
      "icono": "📜",
      "objeto": "[data-mod=\"antecedentes\"]",
      "titulo": {
        "es": "Los antecedentes",
        "fr": "Les antécédents",
        "ca": "Els antecedents",
        "en": "Medical history"
      },
      "texto": {
        "es": "Lo que la persona arrastra: las enfermedades, las operaciones, las caídas. Agrupados por su código, con los años en que aparecen — así se ve que la rodilla duele desde hace tres años, y no seis veces por separado.",
        "fr": "Ce que la personne porte avec elle : maladies, opérations, chutes. Regroupés par leur code, avec les années où ils apparaissent — on voit ainsi que le genou fait mal depuis trois ans, et non six fois séparément.",
        "ca": "El que la persona arrossega: malalties, operacions, caigudes. Agrupats pel seu codi, amb els anys en què apareixen.",
        "en": "What the person carries: illnesses, operations, falls. Grouped by their code, with the years they appear in."
      },
      "grabado": {
        "es": "df58964b",
        "fr": "a31c9860",
        "ca": "bc7a970e",
        "en": "128af5ec"
      }
    },
    "tabla": {
      "icono": "🔢",
      "objeto": "[data-mod=\"tabla\"]",
      "titulo": {
        "es": "Tabla detallada",
        "fr": "Tableau détaillé",
        "ca": "Taula detallada",
        "en": "Detailed table"
      },
      "texto": {
        "es": "Todos los valores, fecha por fecha, en columnas. Es la vista de quien quiere los números crudos, sin dibujo: para comparar, copiar o comprobar.",
        "fr": "Toutes les valeurs, date par date, en colonnes. C'est la vue de qui veut les chiffres bruts, sans dessin : pour comparer, copier ou vérifier.",
        "ca": "Tots els valors, data per data, en columnes. Per a qui vol els números sense dibuix.",
        "en": "Every value, date by date, in columns. For whoever wants the raw numbers, without drawings: to compare, copy or check."
      },
      "grabado": {
        "es": "82cece3d",
        "fr": "c0245b66",
        "ca": "a8a25080",
        "en": "02b611fe"
      }
    },
    "radar": {
      "icono": "🕸",
      "objeto": "[data-mod=\"radar\"]",
      "titulo": {
        "es": "El radar",
        "fr": "Le radar",
        "ca": "El radar",
        "en": "The radar"
      },
      "texto": {
        "es": "Varios valores a la vez, en una sola figura: lo que está en su sitio forma un círculo tranquilo, lo que se desvía tira de él. Sirve para ver de un golpe qué parte del cuerpo se queja.",
        "fr": "Plusieurs valeurs à la fois, en une seule figure : ce qui est à sa place forme un cercle tranquille, ce qui dévie le déforme. On voit d'un coup quelle partie du corps se plaint.",
        "ca": "Diversos valors alhora, en una sola figura: el que està al seu lloc forma un cercle tranquil.",
        "en": "Several values at once in one figure: what is in range forms a calm circle, what strays pulls it out of shape."
      },
      "grabado": {
        "es": "23eb2668",
        "fr": "e0463d09",
        "ca": "e6bb0a28",
        "en": "44e143f6"
      }
    },
    "correlaciones": {
      "icono": "🔗",
      "objeto": "[data-mod=\"correlaciones\"]",
      "titulo": {
        "es": "Las correlaciones",
        "fr": "Les corrélations",
        "ca": "Les correlacions",
        "en": "Correlations"
      },
      "texto": {
        "es": "Qué valores se mueven juntos. No dice por qué — eso es cosa del médico — pero señala las parejas que conviene mirar: cuando uno sube, ¿el otro también?",
        "fr": "Quelles valeurs bougent ensemble. Il ne dit pas pourquoi — c'est l'affaire du médecin — mais il signale les couples qu'il vaut la peine de regarder : quand l'un monte, l'autre aussi ?",
        "ca": "Quins valors es mouen junts. No diu per què, però assenyala les parelles que convé mirar.",
        "en": "Which values move together. It does not say why — that is the doctor's job — but it points to pairs worth looking at."
      },
      "grabado": {
        "es": "72f0dca7",
        "fr": "17131e85",
        "ca": "b701a99d",
        "en": "5ebfc9d9"
      }
    },
    "vascular": {
      "icono": "🫀",
      "objeto": "[data-mod=\"vascular\"]",
      "titulo": {
        "es": "Lo vascular",
        "fr": "Le vasculaire",
        "ca": "El vascular",
        "en": "Vascular"
      },
      "texto": {
        "es": "El corazón y las arterias: la tensión, el colesterol, el riñón, lo que pesa en el riesgo vascular. Reunido en un sitio, porque se leen juntos.",
        "fr": "Le cœur et les artères : la tension, le cholestérol, le rein, ce qui pèse dans le risque vasculaire. Réunis en un seul endroit, parce qu'ils se lisent ensemble.",
        "ca": "El cor i les artèries: la tensió, el colesterol, el ronyó. Reunits en un lloc, perquè es lligen junts.",
        "en": "Heart and arteries: blood pressure, cholesterol, kidney — what weighs in vascular risk. Gathered in one place, because they are read together."
      },
      "grabado": {
        "es": "713bc2a2",
        "fr": "e7f9ecab",
        "ca": "fcc90b6d",
        "en": "519b209c"
      }
    },
    "bacteriologia": {
      "icono": "🦠",
      "objeto": "[data-mod=\"bacteriologia\"]",
      "titulo": {
        "es": "La bacteriología",
        "fr": "La bactériologie",
        "ca": "La bacteriologia",
        "en": "Bacteriology"
      },
      "texto": {
        "es": "Los cultivos y los antibiogramas: qué microbio se encontró, y a qué antibióticos resistía. Con el tiempo se ve si una misma bacteria vuelve.",
        "fr": "Les cultures et les antibiogrammes : quel microbe a été trouvé, et à quels antibiotiques il résistait. Avec le temps, on voit si une même bactérie revient.",
        "ca": "Els cultius i els antibiogrames: quin microbi es va trobar, i a quins antibiòtics resistia.",
        "en": "Cultures and antibiograms: which germ was found, and which antibiotics it resisted. Over time you see whether the same bacterium returns."
      },
      "grabado": {
        "es": "bfe925ff",
        "fr": "e80423fa",
        "ca": "2e180ff4",
        "en": "83f010e9"
      }
    },
    "farmacovigilancia": {
      "icono": "⚠️",
      "objeto": "[data-mod=\"farmacovigilancia\"]",
      "titulo": {
        "es": "La farmacovigilancia",
        "fr": "La pharmacovigilance",
        "ca": "La farmacovigilància",
        "en": "Pharmacovigilance"
      },
      "texto": {
        "es": "Pone lado a lado los medicamentos y los análisis, en el tiempo. Cuando un valor se tuerce poco después de empezar un tratamiento, se ve — y se puede preguntar si hay relación.",
        "fr": "Il met côte à côte les médicaments et les analyses, dans le temps. Quand une valeur se dérègle peu après le début d'un traitement, on le voit — et on peut se demander s'il y a un lien.",
        "ca": "Posa costat a costat els medicaments i les anàlisis, en el temps. Quan un valor es torç poc després d'un tractament, es veu.",
        "en": "Sets medications and test results side by side over time. When a value turns shortly after a treatment starts, it shows — and one can ask whether they are linked."
      },
      "grabado": {
        "es": "cbd82fa4",
        "fr": "fb034409",
        "ca": "f99ae2a7",
        "en": "0f54775d"
      }
    },
    "auditoria": {
      "icono": "🔍",
      "objeto": "[data-mod=\"auditoria\"]",
      "titulo": {
        "es": "La auditoría",
        "fr": "L'audit",
        "ca": "L'auditoria",
        "en": "The audit"
      },
      "texto": {
        "es": "De dónde sale cada dato: de qué documento, en qué fecha, leído cómo. Un expediente en el que no se puede comprobar nada no vale nada; aquí todo se puede seguir hasta su papel.",
        "fr": "D'où vient chaque donnée : de quel document, à quelle date, lue comment. Un dossier où l'on ne peut rien vérifier ne vaut rien ; ici tout se suit jusqu'à son papier.",
        "ca": "D'on ix cada dada: de quin document, en quina data. Ací tot es pot seguir fins al seu paper.",
        "en": "Where every figure comes from: which document, what date, read how. A record where nothing can be checked is worthless; here everything leads back to its paper."
      },
      "grabado": {
        "es": "20fd3487",
        "fr": "1ff0fa44",
        "ca": "96cea28f",
        "en": "2c926f93"
      }
    },
    "manual": {
      "icono": "✍️",
      "objeto": "[data-mod=\"manual\"]",
      "titulo": {
        "es": "Escribir a mano",
        "fr": "Écrire à la main",
        "ca": "Escriure a mà",
        "en": "Writing by hand"
      },
      "texto": {
        "es": "Lo que se sabe de memoria o se tiene en un papel suelto: una tensión tomada en casa, un antecedente, una caída. Se elige la rubrica, se rellena, y queda con la fecha y la marca de que lo escribió una persona.",
        "fr": "Ce qu'on sait de mémoire ou qu'on a sur un papier volant : une tension prise à la maison, un antécédent, une chute. On choisit la rubrique, on remplit, et c'est gardé avec la date et la marque qu'une personne l'a écrit.",
        "ca": "El que se sap de memòria o es té en un paper solt. Es tria la rúbrica, s'ompli, i queda amb la data.",
        "en": "What you know by heart or have on a loose sheet: a blood pressure taken at home, a past illness, a fall. Choose the section, fill it in, and it is kept with its date."
      },
      "grabado": {
        "es": "754035d6",
        "fr": "14318c2e",
        "ca": "366c0dcf",
        "en": "8f3bdf8f"
      }
    },
    "asistida": {
      "icono": "🤝",
      "objeto": "[data-mod=\"asistida\"]",
      "titulo": {
        "es": "Con ayuda, sin clave",
        "fr": "Avec aide, sans clé",
        "ca": "Amb ajuda, sense clau",
        "en": "Assisted, no key"
      },
      "texto": {
        "es": "Para leer un informe en PDF sin pagar nada: el texto se lleva a Claude a mano, y se trae su respuesta. Cuesta un poco más de tiempo, y nada de dinero.",
        "fr": "Pour lire un rapport PDF sans rien payer : on porte le texte à Claude à la main, et on rapporte sa réponse. Cela coûte un peu plus de temps, et pas d'argent.",
        "ca": "Per llegir un informe en PDF sense pagar res: el text es porta a Claude a mà. Costa una mica més de temps.",
        "en": "To read a PDF report without paying: the text is taken to Claude by hand, and the answer brought back. A little more time, no money."
      },
      "grabado": {
        "es": "4e97857a",
        "fr": "222ce55c",
        "ca": "58a37027",
        "en": "c1a48dfe"
      }
    },
    "automatica": {
      "icono": "⚙️",
      "objeto": "[data-mod=\"automatica\"]",
      "titulo": {
        "es": "La lectura automática",
        "fr": "La lecture automatique",
        "ca": "La lectura automàtica",
        "en": "Automatic reading"
      },
      "texto": {
        "es": "Con una clave de la API, los PDF se leen solos: se eligen, y los valores, los tratamientos y los eventos se colocan en su sitio. Lo leído se puede revisar siempre antes de darlo por bueno.",
        "fr": "Avec une clé d'API, les PDF se lisent tout seuls : on les choisit, et les valeurs, les traitements et les événements se rangent à leur place. Ce qui a été lu peut toujours être revu avant d'être tenu pour bon.",
        "ca": "Amb una clau de l'API, els PDF es lligen sols. El que s'ha llegit es pot revisar sempre.",
        "en": "With an API key, PDFs read themselves: values, treatments and events fall into place. What was read can always be reviewed before it is accepted."
      },
      "grabado": {
        "es": "357fe10d",
        "fr": "f9cd73bd",
        "ca": "9ebe03f4",
        "en": "aab5f3b3"
      }
    },
    "revisar": {
      "icono": "🧐",
      "objeto": "[data-mod=\"revisar\"]",
      "titulo": {
        "es": "Revisar",
        "fr": "Revoir",
        "ca": "Revisar",
        "en": "Review"
      },
      "texto": {
        "es": "Una máquina que lee se equivoca a veces. Aquí se repasa lo leído, se corrige lo que está mal, y queda escrito que se corrigió — equivocarse no se esconde, se anota.",
        "fr": "Une machine qui lit se trompe parfois. Ici on repasse ce qui a été lu, on corrige ce qui est faux, et il reste écrit qu'on a corrigé — une erreur ne se cache pas, elle se note.",
        "ca": "Una màquina que llig s'equivoca de vegades. Ací es repassa el que s'ha llegit i es corregix.",
        "en": "A reading machine sometimes errs. Here what was read is checked, errors corrected, and the correction recorded — a mistake is not hidden, it is noted."
      },
      "grabado": {
        "es": "35296d21",
        "fr": "c62cb679",
        "ca": "80334a13",
        "en": "30d91d73"
      }
    },
    "medico_intro": {
      "icono": "🩺",
      "objeto": "#familias",
      "titulo": {
        "es": "Para ir más lejos",
        "fr": "Pour aller plus loin",
        "ca": "Per anar més lluny",
        "en": "Going further"
      },
      "texto": {
        "es": "Éstas son para quien necesita ir más lejos: el médico que quiere los números, el investigador que busca relaciones. Si su perfil no es ése, algunas no aparecen — y la visita se las salta.",
        "fr": "Celles-ci sont pour qui doit aller plus loin : le médecin qui veut les chiffres, le chercheur qui cherche des liens. Si votre profil n'est pas celui-là, certaines ne paraissent pas — et la visite les saute.",
        "ca": "Estes són per a qui necessita anar més lluny: el metge, l'investigador. Si el seu perfil no és eixe, algunes no apareixen.",
        "en": "These are for those who go further: the doctor who wants numbers, the researcher looking for links. If your profile is different, some do not appear — and the tour skips them."
      },
      "grabado": {
        "es": "2c96707e",
        "fr": "39cb853e",
        "ca": "5e4de314",
        "en": "9d7de291"
      }
    },
    "escribir_intro": {
      "icono": "✍️",
      "objeto": "#familias",
      "titulo": {
        "es": "Las que escriben",
        "fr": "Celles qui écrivent",
        "ca": "Les que escriuen",
        "en": "Those that write"
      },
      "texto": {
        "es": "Las tarjetas que ESCRIBEN en el expediente. Son las únicas que lo cambian, y por eso están aparte: todo lo que entra se puede revisar, y todo lo que se corrige queda anotado.",
        "fr": "Les cartes qui ÉCRIVENT dans le dossier. Ce sont les seules qui le changent, c'est pourquoi elles sont à part : tout ce qui entre peut être revu, et tout ce qu'on corrige est noté.",
        "ca": "Les targetes que ESCRIUEN en l'expedient. Són les úniques que el canvien, i per això estan a part.",
        "en": "The cards that WRITE into the record. They are the only ones that change it, which is why they stand apart."
      },
      "grabado": {
        "es": "aa681f02",
        "fr": "f69ab61b",
        "ca": "e5e1224a",
        "en": "371a5c77"
      }
    }
  },
  "_salas": "Cada sala: su icono, su titulo, su PUERTA y sus pasos.\n  puerta.objeto   el cuadro de la pantalla que es la sala\n  puerta.entrada  « abierta » o « cerrada » — como se encuentra\n  puerta.abrir    la funcion que la abre, o una accion { hacer, que, valor }\n  puerta.cerrar   la funcion que la cierra\n  puerta.salida   « cerrar », « dejar », o « como_estaba » (por defecto:\n                  el museo deja las cosas como las encontro)\nEl numero de pasos NO se escribe: se cuenta. Un numero recopiado acaba\nsiempre mintiendo.",
  "salas": {
    "vestibulo": {
      "icono": "🏛️",
      "titulo": {
        "es": "El vestíbulo — la banda de arriba",
        "fr": "Le hall — la bande du haut",
        "ca": "El vestíbul — la banda de dalt",
        "en": "The hall — the top bar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "abeja",
        "logo",
        "paciente",
        "guardar",
        "idioma",
        "paleta",
        "ayuda",
        "casa"
      ]
    },
    "conocidos": {
      "icono": "🧑",
      "titulo": {
        "es": "Los pacientes conocidos",
        "fr": "Les patients connus",
        "ca": "Els pacients coneguts",
        "en": "Known patients"
      },
      "puerta": {
        "objeto": "#cuadro-conocidos",
        "entrada": "abierta",
        "salida": "como_estaba"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "elegir",
        "boton_nuevo",
        "abrir"
      ]
    },
    "nuevo": {
      "icono": "➕",
      "titulo": {
        "es": "Un paciente nuevo",
        "fr": "Un patient nouveau",
        "ca": "Un pacient nou",
        "en": "A new patient"
      },
      "puerta": {
        "objeto": "#cuadro-nuevo",
        "entrada": "cerrada",
        "abrir": "abreNuevo",
        "cerrar": "cierraNuevo",
        "salida": "cerrar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "nuevo",
        "n_nombre",
        "n_apellidos",
        "n_sip",
        "n_mat",
        "n_crear",
        "n_cancelar"
      ]
    },
    "expedientes": {
      "icono": "📁",
      "titulo": {
        "es": "Sus expedientes",
        "fr": "Ses dossiers",
        "ca": "Els seus expedients",
        "en": "Their records"
      },
      "puerta": {
        "objeto": "#caja-expedientes",
        "entrada": "cerrada",
        "abrir": {
          "hacer": "elegir",
          "que": "#sel-pac",
          "valor": "0",
          "espera": 500
        },
        "salida": "como_estaba"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "expedientes"
      ]
    },
    "perfiles": {
      "icono": "👤",
      "titulo": {
        "es": "Quién accede",
        "fr": "Qui accède",
        "ca": "Qui accedix",
        "en": "Who is looking"
      },
      "puerta": {
        "objeto": "#perfiles",
        "entrada": "abierta",
        "salida": "dejar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "perfiles",
        "perfil_cambia"
      ]
    },
    "mirar": {
      "icono": "👁",
      "titulo": {
        "es": "Las tarjetas para mirar",
        "fr": "Les cartes pour regarder",
        "ca": "Les targetes per mirar",
        "en": "Cards for looking"
      },
      "puerta": {
        "objeto": "#familias",
        "entrada": "abierta",
        "salida": "dejar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "tarjetas",
        "familias",
        "glosario",
        "cronologia",
        "resumen",
        "informe",
        "curvas",
        "tratamientos",
        "observancia",
        "antecedentes"
      ]
    },
    "medico": {
      "icono": "🩺",
      "titulo": {
        "es": "Para el médico y el investigador",
        "fr": "Pour le médecin et le chercheur",
        "ca": "Per al metge i l'investigador",
        "en": "For doctor and researcher"
      },
      "puerta": {
        "objeto": "#familias",
        "entrada": "abierta",
        "salida": "dejar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "medico_intro",
        "tabla",
        "radar",
        "correlaciones",
        "vascular",
        "bacteriologia",
        "farmacovigilancia",
        "auditoria"
      ]
    },
    "escribir": {
      "icono": "✍️",
      "titulo": {
        "es": "Las tarjetas para escribir",
        "fr": "Les cartes pour écrire",
        "ca": "Les targetes per escriure",
        "en": "Cards for writing"
      },
      "puerta": {
        "objeto": "#familias",
        "entrada": "abierta",
        "salida": "dejar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "escribir_intro",
        "manual",
        "asistida",
        "automatica",
        "revisar"
      ]
    },
    "pie": {
      "icono": "🔻",
      "titulo": {
        "es": "La banda de abajo",
        "fr": "La bande du bas",
        "ca": "La banda de baix",
        "en": "The bottom bar"
      },
      "puerta": {
        "objeto": "#banda-abj",
        "entrada": "abierta",
        "salida": "dejar"
      },
      "texto": "texto",
      "voz": "oscar",
      "pasos": [
        "licencia",
        "doi",
        "correo"
      ]
    }
  },
  "sala_defecto": "vestibulo",
  "carta_titulo": {
    "es": "Visitar Salufolio",
    "fr": "Visiter Salufolio",
    "ca": "Visitar Salufolio",
    "en": "Visit Salufolio"
  },
  "carta_todo": {
    "es": "Todo seguido",
    "fr": "Tout à la suite",
    "ca": "Tot seguit",
    "en": "All in a row"
  },
  "carta_salir": {
    "es": "Salir",
    "fr": "Sortir",
    "ca": "Eixir",
    "en": "Leave"
  },
  "puerta_hecha": {
    "es": "Ya ha visitado {sala}.",
    "fr": "Vous avez visité {sala}.",
    "ca": "Ja ha visitat {sala}.",
    "en": "You have visited {sala}."
  },
  "puerta_sigue": {
    "es": "¿Seguimos con {sala}?",
    "fr": "On continue avec {sala} ?",
    "ca": "Continuem amb {sala}?",
    "en": "Shall we go on with {sala}?"
  },
  "puerta_ultima": {
    "es": "Ha visto toda la casa. Ahora toque una tarjeta y mire: es su expediente, en su ordenador, y nada sale de ahí.",
    "fr": "Vous avez vu toute la maison. Touchez maintenant une carte et regardez : c'est votre dossier, sur votre ordinateur, et rien n'en sort.",
    "ca": "Ha vist tota la casa. Ara toque una targeta i mire.",
    "en": "You have seen the whole house. Now tap a card and look."
  },
  "_puerta": "La puerta compone su frase sola (P-H, 19/09/2026): sabe que sala se acaba de ver y cual viene despues, asi que no hace falta un « fin » por sala. Menos textos que grabar, y funciona con toda sala que se anada.",
  "carta_texto": {
    "es": "El vestíbulo y ocho salas. Elija una, o véalas todas seguidas. Puede salir cuando quiera.",
    "fr": "Le hall et huit salles. Choisissez-en une, ou voyez-les toutes à la suite. Vous pouvez sortir quand vous voulez.",
    "ca": "El vestíbul i huit sales. Trie'n una, o vegen-les totes seguides.",
    "en": "The hall and eight rooms. Pick one, or see them all in a row. You may leave whenever you like."
  },
  "puerta_opina": {
    "es": "¿Qué le ha parecido esta sala?",
    "fr": "Qu'avez-vous pensé de cette salle ?",
    "ca": "Què li ha paregut esta sala?",
    "en": "What did you think of this room?"
  },
  "_dicho": "Un objeto puede llevar « dicho »: el texto escrito para el OIDO. La pantalla ensena « texto »; la voz —grabada o sintetizada— dice « dicho » si lo hay. Para las siglas, los nombres de medicamentos, todo lo que se lee bien y se pronuncia mal (P-H, 21/09/2026)."
};
