/* ══════════════════════════════════════════════════════════════════════
   VISITAS — LA TABLA  (P-H, 25/10/2026)        versión 2026.10.25-18:35:54

   Todo lo que el contador necesita saber vive AQUÍ ; el código
   (visitas.js) no escribe ni un nombre, ni una dirección, ni un texto.

   Un navegador no puede leer un fichero local con fetch, pero sí cargar
   un script : por eso es un .js y no un .json (regla del 05/09/2026).

   QUÉ SE CUENTA — y qué no
     · Se cuenta : que la Casa se abre, y qué programa se abre dentro
       (cuántas veces, desde qué país, qué día). Nada más.
     · No se cuenta : ni el nombre, ni la dirección IP, ni nada de un
       expediente. El contador no usa cookies.
     · Solo en la demostración pública. En local (fichero, localhost) y en
       tu propio navegador, una vez apagado, no se cuenta nada.

   PARA CAMBIAR ALGO
     · Apagarlo todo       : « activo » : false.
     · Contar la visita guiada o la ventana de opinión : escribe su ruta en
       « eventos » (ej. "tour": "visita/inicio"). Vacío = no se cuenta.
     · Tu propio navegador : abre  …/casa/#visitas-no  una vez (y
       #visitas-si para volver a contarte).
   ══════════════════════════════════════════════════════════════════════ */
window.SF_VISITAS = {
  "version": "2026.10.25-18:35:54",
  "activo": true,
  "endpoint": "https://salufolio.goatcounter.com/count",
  "script": "https://gc.zgo.at/count.js",
  "excluir_hosts": ["localhost", "127.0.0.1", "[::1]"],
  "marca_exclusion": "skipgc",
  "interruptores": { "apagar": "#visitas-no", "encender": "#visitas-si" },
  "eventos": {
    "modulo": "modulo/{id}",
    "tour": "",
    "opinion": ""
  },
  "textos": {
    "es": { "apagado": "Visitas : este navegador ya no se cuenta.", "encendido": "Visitas : este navegador vuelve a contarse." },
    "fr": { "apagado": "Visites : ce navigateur n'est plus compté.", "encendido": "Visites : ce navigateur est de nouveau compté." },
    "va": { "apagado": "Visites : aquest navegador ja no es compta.", "encendido": "Visites : aquest navegador torna a comptar-se." },
    "en": { "apagado": "Visits: this browser is no longer counted.", "encendido": "Visits: this browser is counted again." }
  }
};
