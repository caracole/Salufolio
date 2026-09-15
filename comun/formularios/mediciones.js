/* ══════════════════════════════════════════════════════════════════════
   LAS MEDICIONES — /Salufolio/comun/formularios/mediciones.js

   « Chaque rubrique a ses propres caractéristiques. »  — P-H, 14/09/2026

   Esta tabla dice QUÉ se puede medir y CÓMO. El módulo formulario.js no
   sabe nada de tensión ni de gasometría: lee esto y dibuja.

   Para añadir una medición nueva, se añade aquí. El código no cambia.

   ── LO QUE PUEDE LLEVAR UN CAMPO ──
     id           cómo se llama en el objeto devuelto
     etiqueta     lo que se lee en pantalla
     tipo         num · texto · texto_largo · fecha · hora · lista · si_no
     unidad       mmHg, kg, ºC… se muestra junto a la etiqueta
     min / max    los límites
     limite       "bloquea" (no deja pasar) o "avisa" (deja, pero lo dice)
     normal       [a,b] el rango habitual — fuera de él sólo avisa
     obligatorio  true si hace falta
     defecto      lo que viene puesto
     ejemplo      lo que se lee en gris dentro del campo
     ayuda        una línea debajo, para quien duda
     aproximada   (fechas) permite escribir sólo el año
   ══════════════════════════════════════════════════════════════════════ */

var SF_FORM_MEDICIONES = window.SF_FORM_MEDICIONES = {

  nombre: "Mediciones",
  version: "2026.09.14",

  rubricas: {

    tension: {
      titulo: "🩺 Tensión arterial",
      icono: "🩺",
      ayuda: "Tomada en reposo, sentado, el brazo a la altura del corazón.",
      campos: [
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true,
          defecto:"HOY" },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"sistolica",  etiqueta:"Sistólica (la alta)", tipo:"num",
          unidad:"mmHg", min:50, max:300, limite:"avisa", normal:[100,140],
          obligatorio:true, ejemplo:"142" },
        { id:"diastolica", etiqueta:"Diastólica (la baja)", tipo:"num",
          unidad:"mmHg", min:20, max:200, limite:"avisa", normal:[60,90],
          obligatorio:true, ejemplo:"57" },
        { id:"pulso", etiqueta:"Pulso", tipo:"num", unidad:"lpm",
          min:20, max:250, limite:"avisa", normal:[50,100] },
        { id:"brazo", etiqueta:"Brazo", tipo:"lista",
          valores:[{valor:"izquierdo",etiqueta:"Izquierdo"},
                   {valor:"derecho",  etiqueta:"Derecho"}] },
        { id:"nota", etiqueta:"Nota", tipo:"texto" }
      ]
    },

    peso: {
      titulo: "⚖️ Peso",
      icono: "⚖️",
      campos: [
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true, defecto:"HOY" },
        { id:"peso",  etiqueta:"Peso",  tipo:"num", unidad:"kg",
          min:20, max:250, limite:"avisa", obligatorio:true, ejemplo:"62" },
        { id:"talla", etiqueta:"Talla", tipo:"num", unidad:"cm",
          min:100, max:220, limite:"avisa",
          ayuda:"Sólo si ha cambiado — con ella se calcula el IMC." }
      ]
    },

    saturacion: {
      titulo: "🫁 Saturación de oxígeno",
      icono: "🫁",
      ayuda: "Sin la condición, el valor no se compara con nada.",
      campos: [
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true, defecto:"HOY" },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"sat",   etiqueta:"Saturación", tipo:"num", unidad:"%",
          min:50, max:100, limite:"bloquea", normal:[92,100],
          obligatorio:true, ejemplo:"96" },
        { id:"condicion", etiqueta:"En qué condición", tipo:"lista",
          obligatorio:true,
          valores:["aire ambiente","GN 1 lpm","GN 2 lpm","GN 3 lpm",
                   "con BIPAP","sin BIPAP","mascarilla"],
          ayuda:"Una saturación al aire y otra bajo oxígeno no se comparan." },
        { id:"fc", etiqueta:"Frecuencia cardíaca", tipo:"num", unidad:"lpm",
          min:20, max:250, limite:"avisa", normal:[50,100] }
      ]
    },

    temperatura: {
      titulo: "🌡 Temperatura",
      icono: "🌡",
      campos: [
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true, defecto:"HOY" },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"temp",  etiqueta:"Temperatura", tipo:"num", unidad:"ºC",
          min:30, max:45, limite:"bloquea", normal:[36,37.5],
          obligatorio:true, ejemplo:"36.9" },
        { id:"donde", etiqueta:"Dónde", tipo:"lista",
          valores:["timpánica","axilar","frontal","rectal"],
          defecto:"timpánica" }
      ]
    },

    glucemia: {
      titulo: "🩸 Glucemia",
      icono: "🩸",
      campos: [
        { id:"fecha", etiqueta:"Fecha", tipo:"fecha", obligatorio:true, defecto:"HOY" },
        { id:"hora",  etiqueta:"Hora",  tipo:"hora" },
        { id:"valor", etiqueta:"Glucemia", tipo:"num", unidad:"mg/dL",
          min:20, max:600, limite:"avisa", normal:[70,140],
          obligatorio:true, ejemplo:"108" },
        { id:"momento", etiqueta:"Cuándo", tipo:"lista",
          valores:[{valor:"ayunas",     etiqueta:"En ayunas"},
                   {valor:"antes",      etiqueta:"Antes de comer"},
                   {valor:"despues",    etiqueta:"Dos horas después"},
                   {valor:"acostarse",  etiqueta:"Al acostarse"}],
          ayuda:"Una glucemia en ayunas y otra después de comer no dicen lo mismo." }
      ]
    }
  }
};
