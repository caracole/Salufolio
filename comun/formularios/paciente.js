/* ═════════════════════════════════════════════════
   Versión 2026.11.16-22:29:18
   LA TABLA DEL PACIENTE
   /Salufolio/comun/formularios/paciente.js

   « Il faut que la création d'un patient soit une carte, une vignette,
     et pas se limiter à demander le nom, le prénom et le SIP. La fenêtre
     de saisie s'inspire de l'acquisition manuelle : mode conversationnel,
     des questions appropriées, des réponses textuelles, QCM ou oui/non. »
                                                    — P-H, 06/10/2026

   ESTE FICHERO NO TIENE CÓDIGO. Dice dos cosas:

     rubricas   las que son SUYAS (identidad, centro, prescriptor).
                Las demás (antecedente, diagnóstico, cita, vacuna,
                prescripción) YA existen en adquisicion.js : aquí no se
                copian, se nombran en el flujo — un campo se escribe una
                sola vez.
     flujo      el orden de la conversación : qué se pregunta, en qué
                orden, y si hay que preguntar « ¿tiene alguno? » antes
                de abrir la rúbrica y « ¿otro? » después.

   Es la doctrina de 1966 : el programa no sabe, la tabla sabe.

   ── CADA CAMPO PUEDE LLEVAR, ADEMÁS DE LO DE adquisicion.js ──
     pregunta   la frase tal como la diría quien pregunta. Un texto, o
                { es:, fr:, ca:, en: } — si falta la lengua, sale la
                española, y si falta « pregunta », sale la etiqueta.
     voz        (en la rúbrica o en el paso) pregunta_voz : lo que se
                lee en alto si difiere del texto escrito.
     destino    dónde se escribe : « paciente.sip » = campo sip del
                bloque paciente. Sin « destino », el id.

   ── CADA PASO DEL FLUJO ──
     id, tabla, rubrica
     si      la pregunta de sí/no antes de abrir la rúbrica
     otra    la pregunta de sí/no para repetirla (« ¿otro? »)
     escribe  « raiz:paciente » · « lista:centros » · « dicc:prescriptores »

   ── CAMPOS BLOQUEADOS (P-H, 06/10/2026) ──
     bloqueado:true   el campo se muestra pero NO se corrige en la tarjeta.
                      Nombre, apellidos y SIP forman la matrícula, que es
                      el nombre de la carpeta : « un sage école ».

   ── LA TARJETA (« vista ») ──
     Una entrada por lista que la tarjeta despliega, con ✏️ y 🗑 :
     id, icono, titulo, escribe, tabla/rubrica (la ventana de corrección),
     resumen (los campos que se leen en la línea, el primero que exista
     para cada grupo ; ya_en_uso : texto si algo apunta a la entrada).
   ═════════════════════════════════════════════════ */

var SF_FORM_PACIENTE = window.SF_FORM_PACIENTE = {

  nombre: "Paciente",
  version: "2026.10.06-18:37:37",

  rubricas: {

    identidad: {
      titulo: "🧑 Quién es", icono: "🧑",
      escribe: "raiz:paciente",
      ayuda: "Lo que va en la cabecera del expediente. Con el nombre y el SIP "
           + "basta para empezar ; lo demás se puede completar cuando se sepa.",
      campos: [
        { id:"nombre", bloqueado:true, etiqueta:"Nombre", tipo:"texto", obligatorio:true,
          pregunta:{ es:"¿Cómo se llama? (nombre de pila)",
                     fr:"Comment s'appelle-t-il ou elle ? (prénom)",
                     ca:"Com es diu? (nom de pila)", en:"What is the first name?" } },
        { id:"apellidos", bloqueado:true, etiqueta:"Apellidos", tipo:"texto",
          pregunta:{ es:"¿Y los apellidos?", fr:"Et le nom de famille ?",
                     ca:"I els cognoms?", en:"And the surname?" } },
        { id:"sip", bloqueado:true, etiqueta:"SIP", tipo:"texto", obligatorio:true,
          patron:"^[0-9]{6,10}$", patron_dice:"El SIP son entre 6 y 10 cifras.",
          ayuda:"Está en la tarjeta sanitaria. Con el nombre forma la matrícula.",
          pregunta:{ es:"¿Cuál es su número SIP?", fr:"Quel est son numéro SIP ?",
                     ca:"Quin és el seu número SIP?", en:"What is the SIP number?" },
          pregunta_voz:{ es:"¿Cuál es su número S I P?", fr:"Quel est son numéro S I P ?" } },
        { id:"nacimiento", etiqueta:"Nacimiento", tipo:"fecha", aproximada:true,
          ejemplo:"1938-05-12",
          ayuda:"El año basta : 1938, o 1938-05, o la fecha completa.",
          pregunta:{ es:"¿Cuándo nació?", fr:"Quelle est sa date de naissance ?",
                     ca:"Quan va néixer?", en:"When was the person born?" } },
        { id:"sexo", etiqueta:"Sexo", tipo:"lista",
          valores:[{valor:"mujer", etiqueta:"Mujer"}, {valor:"varon", etiqueta:"Varón"}],
          ayuda:"Algunas escalas (Lawton, por ejemplo) dependen de él.",
          pregunta:{ es:"¿Es una mujer o un varón?", fr:"Est-ce une femme ou un homme ?",
                     ca:"És una dona o un home?", en:"Is the person a woman or a man?" } },
        { id:"nhc", etiqueta:"Nº de historia clínica", tipo:"texto",
          pregunta:{ es:"¿Conoce su número de historia clínica? (puede dejarlo vacío)",
                     fr:"Connaissez-vous son numéro de dossier clinique ? (peut rester vide)" } },
        { id:"cip_sns", etiqueta:"CIP-SNS", tipo:"texto",
          pregunta:{ es:"¿Y el CIP del Sistema Nacional de Salud? (puede dejarlo vacío)",
                     fr:"Et le CIP du Système National de Santé ? (peut rester vide)" } },
        /* P-H, 16/11/2026 : el médico de cabecera, que el Informe pone en su cabecera */
        { id:"medico_cabecera", etiqueta:"Médico de cabecera", tipo:"texto",
          ejemplo:"Dr. …",
          ayuda:"El informe impreso lo nombra en la cabecera.",
          pregunta:{ es:"¿Cómo se llama su médico de cabecera? (puede dejarlo vacío)",
                     fr:"Comment s'appelle son médecin traitant ? (peut rester vide)",
                     ca:"Com es diu el seu metge de capçalera? (pot deixar-ho buit)",
                     en:"What is the GP's name? (can be left empty)" } }
      ]
    },

    centro: {
      titulo: "🏥 Centro", icono: "🏥",
      escribe: "lista:centros",
      ayuda: "Un centro de salud, un hospital, una consulta.",
      campos: [
        { id:"nombre", etiqueta:"Nombre del centro", tipo:"texto", obligatorio:true,
          pregunta:{ es:"¿Cómo se llama el centro?", fr:"Comment s'appelle le centre ?",
                     ca:"Com es diu el centre?", en:"What is the centre called?" },
          ejemplo:"CS Vall d'Alba" }
      ]
    },

    prescriptor: {
      titulo: "👨‍⚕️ Quién receta", icono: "👨‍⚕️",
      escribe: "dicc:prescriptores",
      ayuda: "Un médico que receta o que ha visto a la persona.",
      campos: [
        { id:"nombre", etiqueta:"Nombre del médico", tipo:"texto", obligatorio:true,
          pregunta:{ es:"¿Cómo se llama el médico?", fr:"Comment s'appelle le médecin ?",
                     ca:"Com es diu el metge?", en:"What is the doctor's name?" } }
      ]
    }
  },

  /* ══ LA TARJETA : lo que se despliega y se puede corregir ══
     « columnas » (P-H, 16/11/2026) : la tabla de cada lista — fecha, texto, lo que va en la burbuja (tip),
     el título de la 2.ª columna ; « documentos:true » = sin fecha propia : la del último documento donde
     aparece, y cuántos documentos (centros, médicos).
     fecha : una lista (« fechas » de los antecedentes) da su PRIMERA fecha ; las otras van a la burbuja.
     inactivo : el campo que dice desde cuándo la línea ya no vale — la fila sale en gris.
     dicc : el nombre se lee en un diccionario del expediente (« vacunas » : código → nombre).
     escrito : sin fecha clínica, la fecha en que se anotó — en gris y cursiva, para no confundirlas. */
  vista: [
    { id:"antecedentes", icono:"📜", escribe:"lista:antecedentes", tabla:"adquisicion", rubrica:"antecedente",
      titulo:{ es:"Antecedentes", fr:"Antécédents", ca:"Antecedents", en:"History" },
      columnas:{ fecha:["fechas","fecha"], texto:["descripcion","texto"], tip:["categoria","estado","codificacion"], inactivo:"fecha_inactivacion", titulo:{ es:"Antecedente", fr:"Antécédent", ca:"Antecedent", en:"History item" } },
      resumen:[["fecha"],["descripcion","texto"],["categoria"]] },
    { id:"diagnosticos", icono:"🏷", escribe:"lista:diagnosticos", tabla:"adquisicion", rubrica:"diagnostico",
      titulo:{ es:"Diagnósticos", fr:"Diagnostics", ca:"Diagnòstics", en:"Diagnoses" },
      columnas:{ fecha:["fecha"], texto:["texto","diagnostico","descripcion"], tip:["codigo","tipo"], titulo:{ es:"Diagnóstico", fr:"Diagnostic", ca:"Diagnòstic", en:"Diagnosis" } },
      resumen:[["fecha"],["texto","diagnostico","descripcion"],["codigo"]] },
    { id:"vacunaciones", icono:"💉", escribe:"lista:vacunaciones", tabla:"adquisicion", rubrica:"vacuna",
      titulo:{ es:"Vacunas", fr:"Vaccins", ca:"Vacunes", en:"Vaccines" },
      columnas:{ fecha:["fecha"], texto:["vacuna","nombre"], dicc:{ campo:"codigo", tabla:"vacunas" }, tip:["motivo","dosis","codigo"], titulo:{ es:"Vacuna", fr:"Vaccin", ca:"Vacuna", en:"Vaccine" } },
      resumen:[["fecha"],["vacuna","nombre"],["dosis"]] },
    { id:"citas", icono:"🗓", escribe:"lista:citas", tabla:"adquisicion", rubrica:"cita",
      titulo:{ es:"Citas", fr:"Rendez-vous", ca:"Cites", en:"Appointments" },
      columnas:{ fecha:["fecha"], texto:["servicio","nombre","lugar"], tip:["hora","lugar"], titulo:{ es:"Cita", fr:"Rendez-vous", ca:"Cita", en:"Appointment" } },
      resumen:[["fecha"],["hora"],["servicio","nombre"]] },
    { id:"prescripciones", icono:"🍽", escribe:"lista:prescripciones", tabla:"adquisicion", rubrica:"prescripcion_no_farm",
      titulo:{ es:"Dieta y material", fr:"Régime et matériel", ca:"Dieta i material", en:"Diet and supplies" },
      columnas:{ fecha:["desde","fecha"], escrito:"escrito", texto:["texto"], tip:["tipo"], titulo:{ es:"Dieta o material", fr:"Régime ou matériel", ca:"Dieta o material", en:"Diet or supplies" } },
      resumen:[["tipo"],["texto"],["desde"]] },
    { id:"centros", icono:"🏥", escribe:"lista:centros", tabla:"paciente", rubrica:"centro",
      titulo:{ es:"Centros", fr:"Centres", ca:"Centres", en:"Centres" },
      columnas:{ documentos:true, texto:["nombre"], titulo:{ es:"Centro", fr:"Centre", ca:"Centre", en:"Centre" } },
      resumen:[["nombre"]] },
    { id:"prescriptores", icono:"👨‍⚕️", escribe:"dicc:prescriptores", tabla:"paciente", rubrica:"prescriptor",
      titulo:{ es:"Médicos", fr:"Médecins", ca:"Metges", en:"Doctors" },
      columnas:{ documentos:true, texto:["nombre"], titulo:{ es:"Médico", fr:"Médecin", ca:"Metge", en:"Doctor" } },
      resumen:[["nombre"]] }
  ],

  /* ══ LA CONVERSACIÓN ══ */
  flujo: [
    { id:"identidad", tabla:"paciente", rubrica:"identidad",
      intro:{ es:"Vamos a abrir el expediente. Le haré unas preguntas ; puede dejar vacías las que no sepa.",
              fr:"Nous allons ouvrir le dossier. Je vais vous poser quelques questions ; laissez vide ce que vous ne savez pas." } },

    { id:"antecedentes", tabla:"adquisicion", rubrica:"antecedente",
      si:  { es:"¿Tiene antecedentes que anotar ? (operaciones, enfermedades, alergias…)",
             fr:"Y a-t-il des antécédents à noter ? (opérations, maladies, allergies…)" },
      otra:{ es:"¿Hay otro antecedente ?", fr:"Y a-t-il un autre antécédent ?" },
      escribe:"lista:antecedentes" },

    { id:"diagnosticos", tabla:"adquisicion", rubrica:"diagnostico",
      si:  { es:"¿Le han dado algún diagnóstico ?", fr:"Lui a-t-on donné un diagnostic ?" },
      otra:{ es:"¿Hay otro diagnóstico ?", fr:"Y a-t-il un autre diagnostic ?" },
      escribe:"lista:diagnosticos" },

    { id:"vacunaciones", tabla:"adquisicion", rubrica:"vacuna",
      si:  { es:"¿Quiere anotar alguna vacuna ?", fr:"Voulez-vous noter un vaccin ?" },
      otra:{ es:"¿Otra vacuna ?", fr:"Un autre vaccin ?" },
      escribe:"lista:vacunaciones" },

    { id:"citas", tabla:"adquisicion", rubrica:"cita",
      si:  { es:"¿Hay alguna cita próxima ?", fr:"Y a-t-il un rendez-vous à venir ?" },
      otra:{ es:"¿Otra cita ?", fr:"Un autre rendez-vous ?" },
      escribe:"lista:citas" },

    { id:"prescripciones", tabla:"adquisicion", rubrica:"prescripcion_no_farm",
      si:  { es:"¿Sigue alguna dieta o usa algún material (pañales, oxígeno…) ?",
             fr:"Suit-il un régime ou utilise-t-il du matériel (protections, oxygène…) ?" },
      otra:{ es:"¿Algo más ?", fr:"Autre chose ?" },
      escribe:"lista:prescripciones" },

    { id:"centros", tabla:"paciente", rubrica:"centro",
      si:  { es:"¿Quiere anotar los centros donde se le atiende ?",
             fr:"Voulez-vous noter les centres où la personne est suivie ?" },
      otra:{ es:"¿Otro centro ?", fr:"Un autre centre ?" },
      escribe:"lista:centros" },

    { id:"prescriptores", tabla:"paciente", rubrica:"prescriptor",
      si:  { es:"¿Quiere anotar los médicos que la atienden ?",
             fr:"Voulez-vous noter les médecins qui la suivent ?" },
      otra:{ es:"¿Otro médico ?", fr:"Un autre médecin ?" },
      escribe:"dicc:prescriptores" }
  ]
};
