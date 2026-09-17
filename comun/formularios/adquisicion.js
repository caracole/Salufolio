/* ══════════════════════════════════════════════════════════════════════
   LA TABLA DE LA ADQUISICIÓN MANUAL
   /Salufolio/comun/formularios/adquisicion.js

   « C'est une table importante avec tout le détail des rubriques. »
                                                    — P-H, 14/09/2026

   TODO LO QUE SE PUEDE ESCRIBIR A MANO ESTÁ AQUÍ. El programa no sabe
   qué es una gasometría ni un Barthel: lee esta tabla y dibuja.

   Para añadir una rúbrica, se añade aquí. El código no cambia — es la
   doctrina de 1966.

   ── CADA RÚBRICA DICE ──
     titulo   lo que se lee
     icono    para el menú
     tabla    dónde va en el .mf  (mesures, medicaments, events…)
     ayuda    una línea para quien duda
     campos   lo que se pide

   ── CADA CAMPO PUEDE LLEVAR ──
     tipo         num · texto · texto_largo · fecha · hora · lista · si_no
     unidad       mmHg, kg, ºC…
     min/max      los límites duros
     limite       "bloquea" (no deja pasar) · "avisa" (deja, pero lo dice)
     normal       [a,b] el rango habitual — fuera, sólo avisa
     obligatorio  true si hace falta
     libre        (listas) permite escribir lo que no está
     aproximada   (fechas) permite sólo el año
     ayuda        una línea debajo
   ══════════════════════════════════════════════════════════════════════ */

var SF_FORM_ADQUISICION = window.SF_FORM_ADQUISICION = {

  nombre: "Adquisición manual",
  version: "2026.09.17-23:49:24",

  /* el menú, por familias — para que no sea una lista de veinte */
  familias: [
    { id:"medir",    titulo:"Medir",       rubricas:["tension","peso","saturacion",
                                                     "temperatura","glucemia","gasometria",
                                                     "laboratorio","espirometria"] },
    { id:"tratar",   titulo:"Tratamiento", rubricas:["medicamento","prescripcion_no_farm"] },
    { id:"contar",   titulo:"Contar",      rubricas:["evento","antecedente","diagnostico"] },
    { id:"seguir",   titulo:"Seguir",      rubricas:["escala","cita","vacuna","bacteriologia"] }
  ],

  rubricas: {

    /* ══════════ MEDIR ══════════ */

    tension: {
      titulo:"🩺 Tensión arterial", icono:"🩺", tabla:"mesures",
      ayuda:"Tomada en reposo, sentado, el brazo a la altura del corazón.",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"TA sistólica",  etiqueta:"Sistólica (la alta)", tipo:"num",
          unidad:"mmHg", min:50, max:300, limite:"avisa", normal:[100,140],
          obligatorio:true, ejemplo:"142" },
        { id:"TA diastólica", etiqueta:"Diastólica (la baja)", tipo:"num",
          unidad:"mmHg", min:20, max:200, limite:"avisa", normal:[60,90],
          obligatorio:true, ejemplo:"57" },
        { id:"FC", etiqueta:"Pulso", tipo:"num", unidad:"lpm",
          min:20, max:250, limite:"avisa", normal:[50,100] },
        { id:"condicion", etiqueta:"Brazo", tipo:"lista", libre:true,
          valores:["brazo izquierdo","brazo derecho","tumbada","de pie"] }
      ]
    },

    peso: {
      titulo:"⚖️ Peso y talla", icono:"⚖️", tabla:"mesures",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true },
        { id:"Peso",  etiqueta:"Peso",  tipo:"num", unidad:"kg",
          min:20, max:250, limite:"avisa", obligatorio:true, ejemplo:"62" },
        { id:"Talla", etiqueta:"Talla", tipo:"num", unidad:"cm",
          min:100, max:220, limite:"avisa",
          ayuda:"Sólo si ha cambiado — con ella se calcula el IMC." }
      ]
    },

    saturacion: {
      titulo:"🫁 Saturación de oxígeno", icono:"🫁", tabla:"mesures",
      ayuda:"Sin la condición, el valor no se compara con nada.",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"Sat. O2", etiqueta:"Saturación", tipo:"num", unidad:"%",
          min:50, max:100, limite:"bloquea", normal:[92,100],
          obligatorio:true, ejemplo:"96" },
        { id:"condicion", etiqueta:"En qué condición", tipo:"lista",
          obligatorio:true, libre:true,
          valores:["aire ambiente","GN 1 lpm","GN 2 lpm","GN 3 lpm",
                   "con BIPAP","sin BIPAP","mascarilla","gafas nasales"],
          ayuda:"Una saturación al aire y otra bajo oxígeno no se comparan." },
        { id:"FC", etiqueta:"Frecuencia cardíaca", tipo:"num", unidad:"lpm",
          min:20, max:250, limite:"avisa", normal:[50,100] }
      ]
    },

    temperatura: {
      titulo:"🌡 Temperatura", icono:"🌡", tabla:"mesures",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"Tª", etiqueta:"Temperatura", tipo:"num", unidad:"ºC",
          min:30, max:45, limite:"bloquea", normal:[36,37.5],
          obligatorio:true, ejemplo:"36.9" },
        { id:"condicion", etiqueta:"Dónde", tipo:"lista",
          valores:["timpánica","axilar","frontal","rectal"], defecto:"timpánica" }
      ]
    },

    glucemia: {
      titulo:"🩸 Glucemia", icono:"🩸", tabla:"mesures",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"Glucemia", etiqueta:"Glucemia", tipo:"num", unidad:"mg/dL",
          min:20, max:600, limite:"avisa", normal:[70,140],
          obligatorio:true, ejemplo:"108" },
        { id:"condicion", etiqueta:"Cuándo", tipo:"lista",
          valores:["en ayunas","antes de comer","dos horas después","al acostarse"],
          ayuda:"Una glucemia en ayunas y otra después de comer no dicen lo mismo." }
      ]
    },

    gasometria: {
      titulo:"🧪 Gasometría", icono:"🧪", tabla:"mesures", grupo:"gasometria",
      ayuda:"Un pO2 bajo oxígeno y un pO2 al aire no se comparan. Sin la "
          + "condición, la serie miente.",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"tipo", etiqueta:"Tipo", tipo:"lista", obligatorio:true,
          valores:["arterial","venosa","capilar"],
          ayuda:"Un pO2 venoso no tiene nada que ver con uno arterial." },
        { id:"metodo", etiqueta:"Aparato", tipo:"lista",
          valores:[{valor:"POC", etiqueta:"POC — el de la cabecera"},
                   {valor:"laboratorio", etiqueta:"Laboratorio"}],
          ayuda:"Dos máquinas, dos precisiones." },
        { id:"condicion", etiqueta:"En qué condición", tipo:"lista",
          obligatorio:true, libre:true,
          valores:["aire ambiente","FiO2 21%","FiO2 28%","FiO2 31%","FiO2 40%",
                   "FiO2 50%","GN 2 lpm","GN 3 lpm","con VMNI","con BIPAP"] },
        { id:"pH", etiqueta:"pH", tipo:"num",
          min:6.5, max:8, limite:"avisa", normal:[7.35,7.45], ejemplo:"7.37" },
        { id:"pCO2", etiqueta:"pCO2", tipo:"num", unidad:"mmHg",
          min:10, max:150, limite:"avisa", normal:[35,45] },
        { id:"pO2", etiqueta:"pO2", tipo:"num", unidad:"mmHg",
          min:20, max:600, limite:"avisa", normal:[80,100] },
        { id:"HCO3", etiqueta:"Bicarbonato", tipo:"num", unidad:"mmol/L",
          min:5, max:60, limite:"avisa", normal:[22,26] },
        { id:"Exceso base", etiqueta:"Exceso de base", tipo:"num", unidad:"mmol/L",
          min:-30, max:30, limite:"avisa", normal:[-2,2] },
        { id:"Saturación O2", etiqueta:"Saturación (co-oximetría)", tipo:"num",
          unidad:"%", min:20, max:100, limite:"avisa",
          ayuda:"No es la misma que la del saturómetro de dedo." }
      ]
    },

    laboratorio: {
      titulo:"🔬 Análisis", icono:"🔬", tabla:"mesures", grupo:"laboratorio",
      ayuda:"Un parámetro por vez. El nombre se copia tal como está impreso.",
      campos:[
        { id:"fecha", etiqueta:"Fecha de la extracción", tipo:"fecha", obligatorio:true,
          ayuda:"La del pinchazo, no la del informe." },
        { id:"parametro", etiqueta:"Qué se ha medido", tipo:"lista",
          obligatorio:true, libre:true,
          valores:["Hemoglobina","Hematocrito","Leucocitos","Plaquetas","Neutrófilos",
                   "Linfocitos","Creatinina","Urea","Filtrado glomerular","Sodio",
                   "Potasio","Cloro","Glucosa","Colesterol","HDL colesterol",
                   "LDL colesterol","Triglicéridos","GOT","GPT","GGT",
                   "Fosfatasa alcalina","Bilirrubina total","Proteína C reactiva",
                   "INR","Tiempo de protrombina","Fibrinógeno","TSH","T4 libre",
                   "Vitamina B12","Ácido fólico","Ferritina","NT-proBNP","Dímeros D"] },
        { id:"valor",  etiqueta:"Valor",  tipo:"texto", obligatorio:true,
          ayuda:"Un « <0.01 » se copia tal cual: es un límite de detección." },
        { id:"unidad", etiqueta:"Unidad", tipo:"lista", libre:true,
          valores:["mg/dL","g/dL","mmol/L","UI/L","mg/L","%","seg","ng/mL","pg/mL",
                   "µg/L","mUI/L","x10³/µL","x10⁶/µL","fL","pg","ml/min"] },
        { id:"referencia", etiqueta:"Valores de referencia", tipo:"texto",
          ejemplo:"70 - 110", ayuda:"Si el informe los imprime." }
      ]
    },

    espirometria: {
      titulo:"💨 Espirometría", icono:"💨", tabla:"mesures", grupo:"espirometria",
      campos:[
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true, aproximada:true },
        { id:"FVC",   etiqueta:"FVC",   tipo:"num", unidad:"mL", min:100, max:8000, limite:"avisa" },
        { id:"FVC %", etiqueta:"FVC (% del teórico)", tipo:"num", unidad:"%", min:5, max:200 },
        { id:"FEV1",  etiqueta:"FEV1",  tipo:"num", unidad:"mL", min:100, max:8000, limite:"avisa" },
        { id:"FEV1 %",etiqueta:"FEV1 (% del teórico)", tipo:"num", unidad:"%", min:5, max:200 },
        { id:"FEV1/FVC", etiqueta:"FEV1/FVC", tipo:"num", unidad:"%", min:5, max:150 }
      ]
    },

    /* ══════════ TRATAMIENTO ══════════ */

    medicamento: {
      titulo:"💊 Medicamento", icono:"💊", tabla:"medicaments",
      ayuda:"La caja que tiene sobre la mesa, o la receta del médico. "
          + "Escriba lo que lee.",
      campos:[
        { id:"origen", etiqueta:"De dónde viene", tipo:"lista", obligatorio:true,
          defecto:"al_alta",
          valores:[{valor:"al_alta",      etiqueta:"Recetado ahora"},
                   {valor:"habitual",     etiqueta:"Lo que ya tomaba"},
                   {valor:"administrado", etiqueta:"Puesto una vez"}],
          ayuda:"Constatar no es prescribir." },
        { id:"nombre", etiqueta:"Nombre", tipo:"lista", obligatorio:true, libre:true,
          fuente:"principios",
          ayuda:"La lista ayuda; escriba libremente si no está." },
        { id:"dosis",  etiqueta:"Dosis",  tipo:"texto", ejemplo:"20 mg" },
        { id:"pauta",  etiqueta:"Posología", tipo:"texto", ejemplo:"1 comp/24h",
          ayuda:"Cuánto y cada cuánto: « 2 envases cada 180 días », « crónico »." },
        { id:"momentos_dia", etiqueta:"Cuándo", tipo:"momentos",
          ayuda:"Al levantarse · desayuno · comida · cena · noche." },
        { id:"via", etiqueta:"Vía", tipo:"lista", libre:true,
          valores:["oral","inhalada","subcutánea","intravenosa","intramuscular",
                   "tópica","rectal","ocular","nasal"] },
        { id:"desde", etiqueta:"Desde", tipo:"fecha" },
        { id:"hasta", etiqueta:"Hasta", tipo:"fecha",
          ayuda:"Vacío quiere decir « sigue »." },
        { id:"condicion", etiqueta:"Sólo si…", tipo:"texto",
          ejemplo:"si más dolor",
          ayuda:"Un rescate contado como toma diaria falsea la observancia." }
      ]
    },

    prescripcion_no_farm: {
      titulo:"🍽 Dieta y material", icono:"🍽", tabla:"prescripciones",
      ayuda:"Lo que no es un fármaco pero obliga igual: un espesante en "
          + "alguien con disfagia manda tanto como una pastilla.",
      campos:[
        { id:"tipo", etiqueta:"De qué se trata", tipo:"lista", obligatorio:true,
          valores:[{valor:"dieta",         etiqueta:"Dieta"},
                   {valor:"material",      etiqueta:"Material"},
                   {valor:"rehabilitacion",etiqueta:"Rehabilitación"},
                   {valor:"reposo",        etiqueta:"Reposo"},
                   {valor:"otro",          etiqueta:"Otro"}] },
        { id:"texto", etiqueta:"Qué se ha indicado", tipo:"texto_largo",
          obligatorio:true, ejemplo:"Líquidos con espesante, viscosidad néctar" },
        { id:"desde", etiqueta:"Desde", tipo:"fecha" }
      ]
    },

    /* ══════════ CONTAR ══════════ */

    evento: {
      titulo:"📅 Algo que ha pasado", icono:"📅", tabla:"events",
      ayuda:"Una consulta, una caída, una llamada del médico.",
      campos:[
        { id:"fecha", etiqueta:"Cuándo", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"A qué hora", tipo:"hora" },
        { id:"tipo", etiqueta:"De qué tipo", tipo:"lista", libre:true,
          valores:["consulta","urgencias","ingreso","laboratorio","imagen",
                   "neurologia","cardiologia","neumologia","traumatologia",
                   "enfermeria","domicilio","llamada"] },
        { id:"titulo",  etiqueta:"Qué ha pasado", tipo:"texto", obligatorio:true },
        { id:"detalle", etiqueta:"Detalle", tipo:"texto_largo" },
        { id:"src", etiqueta:"Dónde", tipo:"texto",
          ejemplo:"Hospital General de Castellón — Urgencias" }
      ]
    },

    antecedente: {
      titulo:"📜 Antecedente", icono:"📜", tabla:"antecedentes",
      ayuda:"Lo que sabe de memoria, con los papeles que andan por ahí. "
          + "Una fecha aproximada vale más que ninguna.",
      campos:[
        /* « descripcion » y no « texto »: es el campo que las
           adquisiciones automática y asistida escriben, y lo que el
           informe lee. Un mismo dato, un mismo nombre (P-H, 17/09) */
        { id:"descripcion", etiqueta:"Qué pasó", tipo:"texto", obligatorio:true,
          fuente:"ya_dichos",
          ayuda:"Si ya lo ha escrito antes, la lista se lo propone." },
        { id:"categoria", etiqueta:"Categoría", tipo:"lista", libre:true,
          valores:[{valor:"personal",    etiqueta:"Personal"},
                   {valor:"respiratorio",etiqueta:"Respiratorio"},
                   {valor:"cardiaco",    etiqueta:"Cardíaco"},
                   {valor:"neurologico", etiqueta:"Neurológico"},
                   {valor:"quirurgico",  etiqueta:"Quirúrgico"},
                   {valor:"caida",       etiqueta:"Caída o golpe"},
                   {valor:"familiar",    etiqueta:"Familiar"},
                   {valor:"alergia",     etiqueta:"Alergia"}] },
        { id:"fecha", etiqueta:"Cuándo", tipo:"fecha", aproximada:true,
          ejemplo:"2016 · 2016-09 · 2016-09-14",
          ayuda:"El año solo vale, si no recuerda el día." },

        /* ══════════════════════════════════════════════════════════════
           EL CÓDIGO CIE-10, A MANO Y FACULTATIVO (P-H, 17/09/2026)

           « Le CIE-10, on n'a pas la possibilité de saisir en manuel.
             Donc s'il n'y a pas d'historial clínico ? »

           Tenía razón: el código venía sólo de los documentos, y quien
           empieza de cero no tenía dónde ponerlo.

           Se miró la tabla oficial del Ministerio: 72 623 códigos, siete
           megas. Y se dejó — « le + SIMPLE et le + RAPIDE et le +
           ECONOMIQUE ». Un cuidador no conoce el CIE-10; elegir entre
           W19.XXXA, W19.XXXD y W19.XXXS es trabajo de codificador.

           Así que un campo libre: quien lo tiene en su papel lo copia,
           quien no, lo deja vacío. Y la letra inicial basta para que el
           informe agrupe — W son las caídas, I el corazón.
           ══════════════════════════════════════════════════════════════ */
        { id:"codigo", etiqueta:"Código CIE-10", tipo:"texto",
          ejemplo:"I63.9 · M25.561 · W19.XXXD",
          ayuda:"Si su informe lo lleva, cópielo tal cual. Si no, déjelo "
              + "vacío: no hace falta. La primera letra sirve para agrupar." },

        { id:"estado", etiqueta:"Estado", tipo:"lista",
          valores:[{valor:"activo",   etiqueta:"Activo — sigue"},
                   {valor:"inactivo", etiqueta:"Resuelto"}],
          ayuda:"Lo activo es lo que el paciente arrastra hoy." },
        { id:"comentario", etiqueta:"Comentario", tipo:"texto" }
      ]
    },

    diagnostico: {
      titulo:"🏷 Diagnóstico", icono:"🏷", tabla:"diagnosticos",
      ayuda:"La conclusión de un informe, no un suceso.",
      campos:[
        { id:"texto", etiqueta:"Diagnóstico", tipo:"texto", obligatorio:true },
        { id:"tipo",  etiqueta:"Cuál", tipo:"lista",
          valores:[{valor:"principal", etiqueta:"Principal"},
                   {valor:"secundario",etiqueta:"Secundario"}], defecto:"principal" },
        { id:"fecha", etiqueta:"Cuándo", tipo:"fecha", aproximada:true },
        { id:"codigo", etiqueta:"Código CIE-10", tipo:"texto", ejemplo:"I63.9",
          ayuda:"Si el informe lo imprime." }
      ]
    },

    /* ══════════ SEGUIR ══════════ */

    escala: {
      titulo:"📈 Escala", icono:"📈", tabla:"escalas",
      ayuda:"Barthel, Rankin, NIHSS, MMSE… Son las cifras que dicen si va "
          + "mejor que hace un mes.",
      campos:[
        { id:"nombre", etiqueta:"Escala", tipo:"lista", obligatorio:true, libre:true,
          valores:[{valor:"Barthel", etiqueta:"Barthel (autonomía) /100"},
                   {valor:"Rankin",  etiqueta:"Rankin (discapacidad) /6"},
                   {valor:"NIHSS",   etiqueta:"NIHSS (ictus) /42"},
                   {valor:"MMSE",    etiqueta:"MMSE (cognitivo) /30"},
                   {valor:"Glasgow", etiqueta:"Glasgow (conciencia) /15"},
                   {valor:"Norton",  etiqueta:"Norton (úlceras) /20"},
                   {valor:"Braden",  etiqueta:"Braden (úlceras) /23"},
                   {valor:"Lawton-Brody", etiqueta:"Lawton-Brody (instrumental) /8"},
                   {valor:"Downton", etiqueta:"Downton (caídas) /11"}] },
        { id:"valor",  etiqueta:"Puntuación", tipo:"num", obligatorio:true,
          min:0, max:100, limite:"avisa" },
        { id:"maximo", etiqueta:"Sobre", tipo:"num", min:1, max:100,
          ayuda:"El máximo de la escala — 100 para Barthel, 30 para MMSE." },
        { id:"fecha",  etiqueta:"Cuándo", tipo:"fecha", obligatorio:true },
        { id:"momento", etiqueta:"En qué momento", tipo:"lista",
          valores:[{valor:"ingreso", etiqueta:"Al ingreso"},
                   {valor:"alta",    etiqueta:"Al alta"},
                   {valor:"control", etiqueta:"En un control"},
                   {valor:"previo",  etiqueta:"Antes de todo esto"}],
          ayuda:"La misma escala al ingreso y al alta son dos entradas." }
      ]
    },

    cita: {
      titulo:"🗓 Cita", icono:"🗓", tabla:"citas",
      ayuda:"Lo que viene. Una cita futura no ha ocurrido.",
      campos:[
        { id:"fecha", etiqueta:"Cuándo", tipo:"fecha", obligatorio:true },
        { id:"hora",  etiqueta:"A qué hora", tipo:"hora" },
        { id:"servicio", etiqueta:"Con quién", tipo:"texto", obligatorio:true,
          ejemplo:"Neurología — Dra. Campillo" },
        { id:"lugar", etiqueta:"Dónde", tipo:"texto",
          ejemplo:"Planta 1, Bloque A, Puerta 06" },
        { id:"nota", etiqueta:"Qué hay que llevar", tipo:"texto" }
      ]
    },

    vacuna: {
      titulo:"💉 Vacuna", icono:"💉", tabla:"vacunaciones",
      campos:[
        { id:"vacuna", etiqueta:"Vacuna", tipo:"lista", obligatorio:true, libre:true,
          valores:["Gripe","COVID-19","Neumococo","Tétanos","Herpes zóster",
                   "Hepatitis B","Td (tétanos-difteria)"] },
        { id:"fecha", etiqueta:"Cuándo", tipo:"fecha", obligatorio:true, aproximada:true },
        { id:"dosis", etiqueta:"Qué dosis", tipo:"lista",
          valores:["1ª","2ª","3ª","refuerzo","anual"] },
        { id:"lote",  etiqueta:"Lote", tipo:"texto" },
        { id:"donde", etiqueta:"Dónde", tipo:"texto", ejemplo:"Centro de salud" }
      ]
    },

    bacteriologia: {
      titulo:"🦠 Bacteriología", icono:"🦠", tabla:"bacteriologia",
      ayuda:"Un cultivo y lo que ha crecido.",
      campos:[
        { id:"fecha", etiqueta:"Fecha de la muestra", tipo:"fecha", obligatorio:true },
        { id:"muestra", etiqueta:"De dónde", tipo:"lista", obligatorio:true, libre:true,
          valores:["orina","esputo","sangre","herida","exudado faríngeo",
                   "exudado nasal","heces","catéter","líquido pleural"] },
        { id:"germen", etiqueta:"Qué ha crecido", tipo:"texto",
          ejemplo:"Escherichia coli",
          ayuda:"Vacío si el cultivo fue negativo." },
        { id:"recuento", etiqueta:"Recuento", tipo:"texto", ejemplo:"10⁵ UFC/mL" },
        { id:"sensible", etiqueta:"Sensible a", tipo:"texto_largo",
          ayuda:"Los antibióticos que funcionan." },
        { id:"resistente", etiqueta:"Resistente a", tipo:"texto_largo",
          ayuda:"Los que no. Es lo que más importa guardar." }
      ]
    }
  }
};
