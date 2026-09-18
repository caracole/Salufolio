/* LA VISITA DE LA CASA — sus etapas */
var SF_TOUR = window.SF_TOUR = {
  "id": "tour-casa",
  "version": "2026.09.18-19:29:26",
  "_doctrina": "LA VISITA DE LA BANDA DE ARRIBA (P-H + Mattieu, 18/09/2026)\n\nSIETE ETAPAS, Y NADA MAS QUE LA BANDA. Lo que esta siempre ahi, pase\nlo que pase — ni un expediente abierto ni un cuadro desplegado.\n\nSe habian puesto trece, con el cuadro de expedientes y las tarjetas, y\nno podia funcionar: « caja-expedientes » esta oculto mientras no se\nelija a nadie. El halo apuntaba a objetos invisibles (P-H:\n« catastrophe »). Luego se dejo la eleccion de paciente, y tampoco:\nno es de esta visita, venia de la otra y rompia el orden.\n\nLO QUE FALTA, y es la buena solucion — la imagen es de P-H:\n  « C'est comme dans un musee : on ouvre une porte pour entrer dans\n    une salle, on visite les objets, on sort par une autre porte ou\n    la meme qu'on referme. A la fin de la visite du chateau, tout est\n    automatiquement remis en ordre et on peut travailler. »\n\nCada etapa dira lo que abre, y el motor guardara el orden para cerrar\nal reves. Quien tenia otro expediente abierto debe encontrarlo al\nacabar: la visita ensena, no cambia nada.\n\nLas trece etapas estan en tour-13.js, esperando ese motor.",
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
      "icono": "🧑",
      "objeto": "#b-pac",
      "segundos": 13,
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
      "n": 3,
      "sonido": {
        "es": "voz/t03_es.mp3",
        "fr": "voz/t03_fr.mp3",
        "ca": "voz/t03_ca.mp3",
        "en": "voz/t03_en.mp3"
      }
    },
    {
      "n": 4,
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
        "es": "voz/t04_es.mp3",
        "fr": "voz/t04_fr.mp3",
        "ca": "voz/t04_ca.mp3",
        "en": "voz/t04_en.mp3"
      }
    },
    {
      "n": 5,
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
        "es": "voz/t05_es.mp3",
        "fr": "voz/t05_fr.mp3",
        "ca": "voz/t05_ca.mp3",
        "en": "voz/t05_en.mp3"
      }
    },
    {
      "n": 6,
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
        "es": "voz/t06_es.mp3",
        "fr": "voz/t06_fr.mp3",
        "ca": "voz/t06_ca.mp3",
        "en": "voz/t06_en.mp3"
      }
    },
    {
      "n": 7,
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
        "es": "voz/t07_es.mp3",
        "fr": "voz/t07_fr.mp3",
        "ca": "voz/t07_ca.mp3",
        "en": "voz/t07_en.mp3"
      }
    },
    {
      "icono": "🏠",
      "objeto": "[data-b=\"inicio\"]",
      "segundos": 10,
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
      "n": 8,
      "sonido": {
        "es": "voz/t08_es.mp3",
        "fr": "voz/t08_fr.mp3",
        "ca": "voz/t08_ca.mp3",
        "en": "voz/t08_en.mp3"
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
