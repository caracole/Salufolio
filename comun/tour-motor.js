/* ══════════════════════════════════════════════════════════════════════
   EL MOTOR DE LA VISITA — /Salufolio/comun/tour-motor.js
   Versión 2026.09.21-23:21:34

   « On commence par casa seul, c'est-à-dire le bandeau supérieur. »
                                          — P-H + Mattieu, 18/09/2026

   EL MOTOR NO SABE NADA. La tabla —tour.js— dice qué se enseña, en qué
   orden, dónde está cada cosa y qué voz la dice. Añadir una etapa es
   añadir una línea.

   ── LOS SEIS MANDOS, COMO P-H LOS DIBUJÓ ──

     ❌  interrumpe, y pregunta por qué
     🔄  vuelve a empezar
     📋  la lista de etapas, para saltar a una
     ⏭️  salta lo que no interesa
     ⬅️ ➡️  atrás y adelante

   La visita se desarrolla sola; los mandos la pasan a mano.

   ── LA VOZ ──

   Cada etapa declara sus mp3 por idioma. Si el fichero no está, la etapa
   se calla. NO SE EMPLEA LA SÍNTESIS DEL NAVEGADOR: « Firefox parle,
   mais c'est moche » (P-H, 18/09). Más vale callarse que hablar mal.
   ══════════════════════════════════════════════════════════════════════ */

var SF_TOUR_MOTOR = window.SF_TOUR_MOTOR = (function(){

  /* ══ SU NÚMERO DE VERSIÓN (P-H, 18/09/2026) ══
     « Tu es sûr que tu mets à jour le numéro de version ? »

     No lo hacía: tour-motor.js y tour.css no llevaban ninguno. Y es la
     doctrina del 05/09 — sin número, imposible decir qué versión falla.
     Ahora lo llevan, y se ve en la burbuja del contador de etapas. */
  var VERSION = '2026.09.21-23:20:23';

  var T = null, i = 0, viva = false, pausa = false;
  /* ══ DECLARADAS, POR FIN (P-H, 21/09/2026) ══
     PASOS y VIS se usaban sin declarar — funcionaban por accidente, como
     globales implicitas del navegador. Un dia, leidas antes de tiempo,
     habrian roto la visita sin decir por que. */
  var PASOS = [], VIS = null;
  var VISTOS = 0;              /* pasos vistos desde que se abrio la carta */
  var DIO = false;             /* ya ha opinado en esta visita al museo */
  var DIR = 1;                 /* hacia donde se va: +1 adelante, -1 atras */

  /* ══════════════════════════════════════════════════════════════════
     UN SOLO REGISTRO DE CITAS (P-H, 21/09/2026)

     « Il annonce la fin avec la demande d'avis alors qu'il y a une autre
       salle cachée dessous. » — y, tras salir antes de tiempo, « on me
       demande encore gracias por la visita ».

     La causa: el motor tomaba citas para mas tarde —el aviso a los 650
     ms, la puerta a los 400, la voz cuando acabase— y nadie las anulaba
     al cambiar de sala o al salir. Caian en la sala de al lado.

     Ahora TODA cita pasa por luego(), y lleva el numero de la GENERACION
     en que se tomo. corta() cambia de generacion y anula todas: una cita
     de la sala de antes, si llega, encuentra otro numero y no hace nada.
     Lo mismo para las voces, que avisan cuando quieren.
     ══════════════════════════════════════════════════════════════════ */
  var GEN = 0, CITAS = [];

  function luego(fn, ms){
    var g = GEN;
    var id = setTimeout(function(){
      CITAS = CITAS.filter(function(x){ return x !== id; });
      if(g !== GEN) return;          /* cita de otra generacion: se ignora */
      fn();
    }, ms);
    CITAS.push(id);
    return id;
  }

  /* se cambia de generacion: toda cita pendiente queda anulada */
  function corta(){
    GEN++;
    CITAS.forEach(function(x){ clearTimeout(x); });
    CITAS = [];
    clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr);
  }

  /* envuelve un aviso asincrono: solo actua si sigue siendo su generacion */
  function deEsta(fn){
    var g = GEN;
    return function(){ if(g !== GEN) return; return fn.apply(null, arguments); };
  }
  var tmr = null, audio = null, opc = {}, conVoz = true;
  /* ══ EL RELOJ DE LA ETAPA, APARTE (P-H, 18/09/2026) ══
     « L'automatisme se bloque si le son est en marche. »

     Y seguía bloqueándose: « tmr » lo usaban tres cosas a la vez —el
     paso de etapa, el remate de la voz, el suspiro— y se pisaban. Uno
     ponía el reloj, otro lo quitaba, y la etapa se quedaba ahí.

     Ahora la etapa tiene el suyo, y NADIE MÁS lo toca. */
  var relojEtapa = null, plumaTmr = null;

  /* ── el idioma del momento ── */
  /* ══════════════════════════════════════════════════════════════════
     DEL NOMBRE AL OBJETO (P-H, 19/09/2026)

     La visita es una lista de NOMBRES; cada uno designa un objeto de la
     tabla. Aqui se hace el viaje del uno al otro.

     Se le pega su nombre al objeto que se devuelve: es el que da nombre
     a su fichero de voz —ES-abeja.mp3— y el que no cambia nunca aunque
     el orden cambie.
     ══════════════════════════════════════════════════════════════════ */
  function paso_n(k){ return PASOS[k] || ''; }

  function objetoDe(k){
    var n = paso_n(k);
    var o = (T && T.objetos && T.objetos[n]) || null;
    if(!o) return null;
    return { nombre:n, icono:o.icono, objeto:o.objeto,
             titulo:o.titulo,
             texto: (VIS && VIS.texto === 'corto' && o.corto) ? o.corto : o.texto,
             dicho: o.dicho || null,          /* lo que dice la voz, si no es lo escrito */
             voz: o.voz || (VIS && VIS.voz) || '',
             accion: o.accion || null,
             _intento: o._intento, _contado: o._contado,
             grabado: o.grabado || {},
             segundos: o.segundos };
  }

  function lg(){
    try{
      if(opc.idioma) return opc.idioma;
      if(typeof MF !== 'undefined' && MF.idioma) return MF.idioma();
    }catch(e){}
    return (T && T.idioma_defecto) || 'es';
  }
  function tt(o){
    if(!o) return '';
    if(typeof o === 'string') return o;
    return o[lg()] || o[(T && T.idioma_defecto) || 'es'] || '';
  }
  function esc(s){
    return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ══ EL MARCO, dibujado una vez ══ */
  function marco(){
    var m = document.getElementById('sf-tour');
    /* ══ LA CAJA SE COMPRUEBA ANTES DE SERVIR (P-H, 21/09/2026) ══
       « Cannot set properties of null (setting 'disabled') »

       La pantalla de salida de una sala SUSTITUYE los mandos por ▶ 🧭 ❌.
       La sala siguiente reutilizaba esa misma caja — sin ⬅️ ni ➡️ — y el
       motor tropezaba al buscar ⬅️. La visita se paraba en seco, y
       quedaban en pantalla los botones de la puerta anterior.

       Ahora, si a la caja le falta un mando, se tira y se hace de nuevo. */
    if(m && !m.querySelector('#sf-t-atras')){ m.remove(); m = null; }
    if(m) return m;
    m = document.createElement('div');
    m.id = 'sf-tour';
    m.innerHTML =
        '<div class="sf-t-caja">'
      + '  <div class="sf-t-cab">'
      + '    <span class="sf-t-ico" id="sf-t-ico"></span>'
      + '    <span class="sf-t-tit" id="sf-t-tit"></span>'
      + '    <span class="sf-t-n"   id="sf-t-n" title="visita v' + VERSION
      + '"></span>'
      + '  </div>'
      + '  <div class="sf-t-texto" id="sf-t-texto"></div>'
      + '  <label class="sf-t-sabe" id="sf-t-sabe-l"><input type="checkbox" id="sf-t-sabe">'
      + '<span id="sf-t-sabe-t"></span></label>'
      + '  <div class="sf-t-barra"><div class="sf-t-llena" id="sf-t-llena"></div></div>'
      + '  <div class="sf-t-mandos">'
      + '    <button id="sf-t-x"     title="">❌</button>'
      + '    <button id="sf-t-otra"  title="">🔄</button>'
      + '    <button id="sf-t-lista" title="">📋</button>'
      + '    <button id="sf-t-salta" title="">⏭️</button>'
      + '    <span class="sf-t-sep"></span>'
      + '    <button id="sf-t-atras" title="">⬅️</button>'
      + '    <button id="sf-t-pausa" class="grande" title="">⏸</button>'
      + '    <button id="sf-t-otra-vez" title="">🔁</button>'
      + '    <button id="sf-t-voz"   title="">🔊</button>'
      + '    <button id="sf-t-sig"   title="">➡️</button>'
      + '  </div>'
      + '  <div class="sf-t-lista-caja" id="sf-t-lista-caja"></div>'
      + '</div>';
    document.body.appendChild(m);

    /* ══ LO QUE DICE CADA BOTON (P-H, 21/09/2026) ══
       « Manque tooltips — je pense que la boussole c'est pour recommencer
         la visite. » No lo era. Los textos viven en la tabla (mandos). */
    ponTitulo(m, '#sf-t-x', 'x');         ponTitulo(m, '#sf-t-otra', 'otra');
    ponTitulo(m, '#sf-t-lista', 'lista'); ponTitulo(m, '#sf-t-salta', 'salta');
    ponTitulo(m, '#sf-t-atras', 'atras'); ponTitulo(m, '#sf-t-pausa', 'pausa');
    ponTitulo(m, '#sf-t-otra-vez', 'otra_vez'); ponTitulo(m, '#sf-t-voz', 'voz');
    ponTitulo(m, '#sf-t-sig', 'sig');

    m.querySelector('#sf-t-x').onclick     = function(){ pideAdios(); };
    m.querySelector('#sf-t-otra').onclick  = function(){ i = 0; muestra(); };
    m.querySelector('#sf-t-lista').onclick = function(){ pliegaLista(); };
    /* ⏭️ ya no repite ➡️: salta el resto de la sala y lleva a su puerta */
    m.querySelector('#sf-t-salta').onclick = function(){ saltaSala(); };
    m.querySelector('#sf-t-atras').onclick = function(){ paso(-1); };
    m.querySelector('#sf-t-sig').onclick   = function(){ paso(1); };
    m.querySelector('#sf-t-pausa').onclick = function(){ alterna(); };
    m.querySelector('#sf-t-voz').onclick   = function(){ calladito(); };
    ponArrastre(m);
    m.querySelector('#sf-t-otra-vez').onclick = function(){ otraVez(); };
    return m;
  }

  /* ══════════════════════════════════════════════════════════════════
     EL RELIEVE, Y LA CAJA QUE LO SIGUE (Mattieu + P-H, 18/09/2026)

     « La boîte est toujours en bas, elle devrait suivre les éléments
       commentés avec une flèche ! »

     Tenía razón: una caja clavada abajo obliga a buscar de qué habla.
     Ahora se pone AL LADO del objeto —debajo si está arriba, encima si
     está abajo— con una punta que lo señala.

     A QUINCE PÍXELES, no pegada: « la boîte suit, mais pas trop près »
     (P-H). Lo bastante cerca para que el ojo haga el camino solo, lo
     bastante lejos para no tapar lo que se enseña.
     ══════════════════════════════════════════════════════════════════ */
  /* ══════════════════════════════════════════════════════════════════
     APAGAR EL RELIEVE (P-H, 21/09/2026)

     « On ne peut pas sortir du tour. » — apaga() habia desaparecido: la
     arrastro un recorte mio del 20/09, al rehacer acerca(). sal() la
     llamaba, tropezaba, y se quedaba a medio camino — la caja seguia
     alli y el aviso volvia a abrirse. Es la tercera vez que un recorte
     se lleva una funcion vecina: por eso ahora se comprueba, antes de
     entregar, que toda funcion llamada existe.
     ══════════════════════════════════════════════════════════════════ */
  /* ¿el objeto esta en pantalla? — un padre oculto lo esconde tambien */
  function seVe(sel){
    if(!sel) return true;
    var e = document.querySelector(sel);
    if(!e) return false;
    if(e.offsetParent === null && getComputedStyle(e).position !== 'fixed') return false;
    var r = e.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }

  /* ══════════════════════════════════════════════════════════════════
     EL TECHO: LO QUE FLOTA ARRIBA (P-H, 21/09/2026)

     « J'ai l'impression que le container des cartes englobe celui de
       quien accede. »

     No lo engloba: la banda « Quien accede » es PEGAJOSA —position:
     sticky—. Al bajar hacia las tarjetas se queda clavada arriba de la
     pantalla, POR ENCIMA de ellas, como la fila de titulos de una hoja
     de calculo. El halo empezaba debajo de ella, y parecia que la
     contenia.

     El motor no sabe que es « Quien accede »: ve lo que se queda pegado
     arriba —sticky o fixed, en cualquier programa— y lo trata como un
     techo. Los objetos se colocan debajo, y el halo se corta en su borde.
     ══════════════════════════════════════════════════════════════════ */
  var FLOTANTES = null;

  function buscaFlotantes(){
    FLOTANTES = [];
    var todos = document.body.querySelectorAll('*');
    for(var k = 0; k < todos.length; k++){
      var x = todos[k];
      if(x.id && /^sf-(tour|t-|carta|c-)/.test(x.id)) continue;
      var p = getComputedStyle(x).position;
      if(p === 'sticky' || p === 'fixed') FLOTANTES.push(x);
    }
  }

  /* la altura del techo: el borde de abajo de lo que flota arriba */
  function techo(){
    if(!FLOTANTES) buscaFlotantes();
    var H = window.innerHeight, W = window.innerWidth, t = 0;
    FLOTANTES.forEach(function(x){
      if(ELEM && (x === ELEM || x.contains(ELEM) || ELEM.contains(x))) return;
      var r = x.getBoundingClientRect();
      if(r.height === 0 || r.width < W * 0.3) return;      /* una barra, no un boton */
      if(r.top > 4 || r.bottom <= 0) return;               /* pegada arriba */
      if(r.bottom > H * 0.4) return;                       /* un velo, no una barra */
      if(r.bottom > t) t = r.bottom;
    });
    return t;
  }

  /* el halo, sobre el objeto — recortado a la pantalla si es mas alto */
  var ELEM = null;
  function colocaHalo(h, e){
    if(!h || !e) return;
    var r = e.getBoundingClientRect();
    var top = Math.max(techo() + 3, r.top - 6);
    var bot = Math.min(window.innerHeight - 4, r.bottom + 6);
    h.style.left   = (r.left - 6) + 'px';
    h.style.top    = top + 'px';
    h.style.width  = (r.width + 12) + 'px';
    h.style.height = Math.max(0, bot - top) + 'px';
  }

  /* si la pagina se desplaza o cambia de tamano, el halo va con ella */
  var _sigue = null;
  function sigueHalo(on){
    if(on && !_sigue){
      _sigue = function(){
        var h = document.getElementById('sf-t-halo');
        if(h && ELEM) colocaHalo(h, ELEM);
      };
      window.addEventListener('scroll', _sigue, true);
      window.addEventListener('resize', _sigue);
    } else if(!on && _sigue){
      window.removeEventListener('scroll', _sigue, true);
      window.removeEventListener('resize', _sigue);
      _sigue = null;
    }
  }

  function apaga(){
    ELEM = null;
    var h = document.getElementById('sf-t-halo');
    /* el halo que se va pierde su nombre enseguida: si la sala siguiente
       busca « sf-t-halo » en esos 250 ms, crea uno nuevo en vez de
       quedarse con el que esta a punto de desaparecer */
    if(h){ h.id = ''; h.style.opacity = '0';
           setTimeout(function(){ if(h.parentNode) h.remove(); }, 250); }
    document.querySelectorAll('.sf-t-visto').forEach(function(e){
      e.classList.remove('sf-t-visto'); });
  }

  function ilumina(sel){
    /* ══ EL VELO NO PARPADEA: SE DESLIZA (Joaquina + P-H, 18/09/2026) ══
       « C'est le fond qui disparaît et revient. »

       Y era culpa mía: apaga() borraba el halo, y ilumina lo volvía a
       crear un instante después. Entre los dos, el velo oscuro se iba
       y volvía — un parpadeo a cada etapa.

       Ahora el halo NACE UNA VEZ y se MUEVE. El velo se queda puesto
       toda la visita, y solo el recuadro claro va de un objeto a otro.
       Se desliza, y el ojo lo sigue sin perderlo. */
    document.querySelectorAll('.sf-t-visto').forEach(function(x){
      x.classList.remove('sf-t-visto'); });
    if(!sel) return null;
    var e = document.querySelector(sel);
    if(!e) return null;
    e.classList.add('sf-t-visto');

    var h = document.getElementById('sf-t-halo');
    var nace = !h;
    if(nace){
      h = document.createElement('div');
      h.id = 'sf-t-halo';
      h.style.cssText = 'position:fixed;z-index:9990;pointer-events:none;'
        + 'border:2px solid var(--warn,#e8a44a);border-radius:9px;'
        + 'box-shadow:0 0 0 3000px rgba(0,0,0,.45),0 0 14px var(--warn,#e8a44a);'
        + 'opacity:0;transition:opacity .22s';
      document.body.appendChild(h);
    }

    var pone = function(){
      colocaHalo(h, e);
      h.style.opacity = '1';
      acerca(e.getBoundingClientRect());
    };

    /* ══ SE MIDE CUANDO LA PAGINA YA NO SE MUEVE (P-H, 21/09/2026) ══
       « Quand tu arrives sur les cartes, il y a un cadre jaune qui entoure
         tout, patients connus et cartes. »

       El cuadro de las tarjetas es mas alto que la pantalla. Se hacia
       desplazar la pagina SUAVEMENTE y se media 200 ms despues — en pleno
       desplazamiento. El halo quedaba a medio camino, y la pagina seguia
       resbalando debajo.

       Ahora el desplazamiento es INSTANTANEO, se mide en el cuadro
       siguiente, y el halo SIGUE a la pagina si esta se mueve despues.
       Un objeto mas alto que la pantalla se coloca por arriba, no por el
       centro — si no, su cabeza queda fuera. */
    ELEM = e;
    buscaFlotantes();                  /* cada etapa mira lo que flota */
    var cielo = techo();
    var r0 = e.getBoundingClientRect();
    var visible = r0.top > cielo + 20 && r0.bottom < window.innerHeight - 60;
    if(visible){ pone(); }
    else {
      var alto = r0.height > window.innerHeight - 140;
      try{ e.scrollIntoView({ behavior:'instant', block: alto ? 'start' : 'center' }); }
      catch(x){ try{ e.scrollIntoView(alto); }catch(y){} }
      /* que no quede debajo de lo que flota arriba */
      if(alto) window.scrollBy(0, -(techo() + 16));
      requestAnimationFrame(function(){ luego(pone, 0); });
    }
    return e;
  }

  /* ══════════════════════════════════════════════════════════════════
     LA CAJA BUSCA SITIO (P-H, 20/09/2026)

     « Dans le cadre nuevo paciente, le Nom est masqué. »

     Solo sabia ponerse encima o debajo. Sobre un campo de formulario
     eso tapa al vecino — se ensena el apellido y se esconde el nombre.

     Ahora prueba cuatro sitios y se queda en el primero que no estorba:
     debajo, encima, a la derecha, a la izquierda. Y si ninguno cabe, se
     va a la esquina mas lejana del objeto.

     Y SE PUEDE MOVER A MANO: se agarra por su cabecera. Quien la mueve
     manda — el motor no vuelve a colocarla hasta la sala siguiente.
     ══════════════════════════════════════════════════════════════════ */
  var MOVIDA = false;

  function acerca(r){
    if(MOVIDA) return;
    var m = document.getElementById('sf-tour');
    if(!m) return;
    var c = m.querySelector('.sf-t-caja');
    var A = m.offsetWidth  || 520;
    var L = m.offsetHeight || 170;
    var H = window.innerHeight, W = window.innerWidth, D = 15;

    var cx = r.left + r.width/2, cy = r.top + r.height/2;
    var x, y, lado = '';

    if(r.bottom + D + L < H - 10){ y = r.bottom + D; lado = 'arriba'; x = cx - A/2; }
    else if(r.top - D - L > 10){   y = r.top - D - L; lado = 'abajo';  x = cx - A/2; }
    else if(r.right + D + A < W - 10){
      x = r.right + D; y = Math.max(10, Math.min(H - L - 10, cy - L/2)); }
    else if(r.left - D - A > 10){
      x = r.left - D - A; y = Math.max(10, Math.min(H - L - 10, cy - L/2)); }
    else {
      x = (cx > W/2) ? 12 : W - A - 12;
      y = (cy > H/2) ? 12 : H - L - 12;
    }

    x = Math.max(12, Math.min(W - A - 12, x));
    y = Math.max(techo() + 8, Math.min(H - L - 10, y));

    m.style.left = x + 'px';
    m.style.top  = y + 'px';
    m.style.bottom = 'auto';
    m.style.transform = 'none';

    c.classList.remove('punta-arriba','punta-abajo');
    if(lado){
      c.classList.add('punta-' + lado);
      c.style.setProperty('--punta', Math.max(18, Math.min(A - 18, cx - x)) + 'px');
    }

    if(m.classList.contains('naciendo')){
      m.classList.remove('naciendo');
      m.classList.add('on');
    }
  }

  /* ── se agarra por su cabecera ── */
  function ponArrastre(m){
    var cab = m.querySelector('.sf-t-cab');
    if(!cab || cab._arrastre) return;
    cab._arrastre = true;

    var x0, y0, ix, iy, va = false;

    var mueve = function(ev){
      if(!va) return;
      var t = ev.touches ? ev.touches[0] : ev;
      var A = m.offsetWidth, L = m.offsetHeight;
      m.style.left = Math.max(6, Math.min(window.innerWidth  - A - 6, ix + t.clientX - x0)) + 'px';
      m.style.top  = Math.max(6, Math.min(window.innerHeight - L - 6, iy + t.clientY - y0)) + 'px';
      m.style.bottom = 'auto';
      m.style.transform = 'none';
      var c = m.querySelector('.sf-t-caja');
      if(c) c.classList.remove('punta-arriba','punta-abajo');
      MOVIDA = true;
      if(ev.cancelable) ev.preventDefault();
    };

    var sube = function(){
      va = false;
      cab.style.cursor = 'grab';
      m.style.transition = '';
      document.removeEventListener('mousemove', mueve);
      document.removeEventListener('mouseup', sube);
      document.removeEventListener('touchmove', mueve);
      document.removeEventListener('touchend', sube);
    };

    var baja = function(ev){
      var t = ev.touches ? ev.touches[0] : ev;
      var r = m.getBoundingClientRect();
      x0 = t.clientX; y0 = t.clientY; ix = r.left; iy = r.top;
      va = true;
      cab.style.cursor = 'grabbing';
      m.style.transition = 'none';
      document.addEventListener('mousemove', mueve);
      document.addEventListener('mouseup', sube);
      document.addEventListener('touchmove', mueve, {passive:false});
      document.addEventListener('touchend', sube);
      ev.preventDefault();
    };

    cab.addEventListener('mousedown', baja);
    cab.addEventListener('touchstart', baja, {passive:false});
  }

  /* ══════════════════════════════════════════════════════════════════
     LA VOZ — el mp3 primero, la síntesis si no está (P-H, 18/09/2026)

     « On peut mettre un audio de synthèse automatiquement si le mp3
       n'existe pas. »

     Yo había dicho mp3 o nada, por lo de Firefox. Pero tiene razón: más
     vale una voz imperfecta que el silencio, mientras se pueda callarla.

     Así que tres escalones:
       ① el mp3 de la etapa, grabado con cuidado
       ② si no está, la síntesis del navegador — la mejor voz instalada
       ③ si tampoco, se calla y el tiempo pasa igual

     El 🔇 corta las dos. Y quien tenga una voz decente en su máquina
     —piper, mbrola— la oirá bien: la calidad viene del sistema, no de
     Salufolio.
     ══════════════════════════════════════════════════════════════════ */
  /* ══ EL NOMBRE DEL SONIDO SE DEDUCE (P-H, 19/09/2026) ══
     « Ça fait une grosse table. » Y era verdad: ocho líneas por etapa
     para escribir « voz/t01_es.mp3 », que el número ya decía.

     El patrón vive en la tabla —voz_nombre— por si un día cambia. */
  /* ══ EL SONIDO SE LLAMA POR EL OBJETO (P-H, 19/09 — repuesto el 21/09) ══
     ES-abeja.mp3, y no t01_es.mp3: el nombre no cambia cuando cambia el
     orden. La lengua delante, en mayusculas, para que un listado los
     agrupe.

     Esta funcion se perdio el 19/09: cayo en un recorte mio que fallo a
     medio camino, y nada de el se escribio. El motor siguio buscando el
     nombre viejo — « es-{objeto}.mp3 » — y las 94 voces no sonaban, ni
     aqui ni en linea. (P-H: « tu as dû oublier de publier les sons ! ») */
  function sonidoDe(nombre, l){
    if(!T || !nombre) return '';
    var pat = T.voz_nombre || '{lang}-{objeto}.mp3';
    return (T.voz_carpeta || 'voz/')
      + pat.replace('{lang}', String(l).toUpperCase())
           .replace('{objeto}', nombre);
  }

  /* ══════════════════════════════════════════════════════════════════
     LAS TECLAS — GUARDADAS, NO PUESTAS (P-H, 19/09/2026)

     « Retire-les ou mets-les en commentaire : on ne sait jamais, un fou
       réclamera ça, mais pas moi. »

     Las habia puesto por un malentendido: cuando hablo de la barra de
     espacio, hablaba de un editor de sonido de hace treinta anos, no de
     la visita. Aqui no hacen falta — los mandos estan a la vista.

     Se quedan escritas por si alguien las pide:

        espacio  para/sigue   ← →  atras/adelante   ↑ volver a oir
        Escape   salir        L    la lista         M  callar

     Para despertarlas: quitar los dos /* de esta seccion y llamar a
     ponTeclas() en arranca(), quitaTeclas() en sal() y acabada().

  var _teclas = null;

  function ponTeclas(){
    if(_teclas) return;
    _teclas = function(e){
      if(!viva) return;
      var a = document.activeElement;
      if(a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return;
      if(e.ctrlKey || e.altKey || e.metaKey) return;
      var k = e.key;
      if(k === ' '){ e.preventDefault(); alterna(); return; }
      if(k === 'ArrowRight'){ e.preventDefault(); paso(1);  return; }
      if(k === 'ArrowLeft'){  e.preventDefault(); paso(-1); return; }
      if(k === 'ArrowUp'){    e.preventDefault(); otraVez(); return; }
      if(k === 'Escape'){     e.preventDefault(); pideAdios(); return; }
      if(k === 'l' || k === 'L'){ e.preventDefault(); pliegaLista(); return; }
      if(k === 'm' || k === 'M'){ e.preventDefault(); calladito(); return; }
    };
    document.addEventListener('keydown', _teclas, true);
  }

  function quitaTeclas(){
    if(!_teclas) return;
    document.removeEventListener('keydown', _teclas, true);
    _teclas = null;
  }
     ══════════════════════════════════════════════════════════════════ */

  /* ══════════════════════════════════════════════════════════════════
     LA CARTA DEL MUSEO (P-H, 19/09/2026)

     « Quand j'entre visiter un musée, j'ai eu un dépliant avec les
       salles à visiter, mon écouteur, mon bouton choisir une langue, et
       passer à une autre salle ou terminer. »

     Eso es lo que falta: la vista de conjunto ANTES de empezar. La
     brujula abre la carta; se elige una sala, o todas seguidas. Al
     acabar una, se puede seguir con la siguiente o volver a la carta.

     Lo visitado se marca — como las salas que uno ya ha hecho.
     ══════════════════════════════════════════════════════════════════ */
  var HECHAS = {};
  try{ HECHAS = JSON.parse(localStorage.getItem('sf_tour_hechas')||'{}'); }catch(e){}

  function guardaHecha(cual){
    HECHAS[cual] = new Date().toISOString().slice(0,10);
    try{ localStorage.setItem('sf_tour_hechas', JSON.stringify(HECHAS)); }catch(e){}
  }

  /* ══════════════════════════════════════════════════════════════════
     EL MUSEO: SE ABRE UNA PUERTA, Y SE CIERRA DETRAS (P-H, 18/09/2026)

     « C'est comme dans un musée : on ouvre une porte pour entrer dans
       une salle, on visite les objets, on sort par une autre porte ou
       la même qu'on referme. A la fin de la visite du chateau, tout est
       automatiquement remis en ordre et on peut travailler. »

     Un objeto puede estar escondido —el cuadro de expedientes, las
     tarjetas apagadas— y entonces no se puede ensenar. Su ficha dice lo
     que hay que hacer antes:

         "accion": { "hacer":"tocar",  "que":"#b-nuevo" }
         "accion": { "hacer":"elegir", "que":"#sel-pac", "valor":"0" }
         "accion": { "hacer":"clase",  "que":"#familias", "poner":"abierto" }

     Y EL MOTOR GUARDA COMO ESTABA. Al acabar la visita, deshace todo al
     reves — el ultimo que abrio es el primero que cierra. Quien tenia
     otro expediente abierto lo encuentra al salir: la visita ensena, no
     cambia nada.
     ══════════════════════════════════════════════════════════════════ */
  var PUERTAS = [];          /* lo que se ha abierto, en orden */

  function abre(a, alAcabar){
    if(!a || !a.hacer){ if(alAcabar) alAcabar(); return; }
    var e = a.que ? document.querySelector(a.que) : null;

    try{
      if(a.hacer === 'tocar' && e){
        PUERTAS.push({ deshacer:function(){
          if(a.cerrar){ var c = document.querySelector(a.cerrar);
                        if(c) c.click(); }
          else e.click();
        }});
        e.click();
      }
      else if(a.hacer === 'elegir' && e){
        var antes = e.value;
        PUERTAS.push({ deshacer:function(){
          e.value = antes;
          e.dispatchEvent(new Event('change', {bubbles:true}));
        }});
        e.value = a.valor;
        e.dispatchEvent(new Event('change', {bubbles:true}));
      }
      else if(a.hacer === 'clase' && e){
        var tenia = e.classList.contains(a.poner);
        PUERTAS.push({ deshacer:function(){
          e.classList.toggle(a.poner, tenia); }});
        e.classList.add(a.poner);
      }
      else if(a.hacer === 'ensenar' && e){
        var antes2 = e.style.display;
        PUERTAS.push({ deshacer:function(){ e.style.display = antes2; }});
        e.style.display = a.valor || 'block';
      }
      else if(a.hacer === 'llamar' && a.funcion){
        /* ══ LA PUERTA SE ABRE Y SE CIERRA POR SU NOMBRE ══
           « Il serait bien de pouvoir simuler Patient nouveau : ouvrir
             le cadre, se positionner sur nombre, puis apellidos, SIP,
             etc., fermer le cadre. » (P-H, 20/09/2026)

           El programa visitado ya tiene sus dos funciones — abreNuevo()
           y cierraNuevo(). La tabla las nombra, el motor las llama. No
           hace falta que el motor sepa nada del cuadro. */
        var f = window[a.funcion];
        if(typeof f === 'function'){
          if(a.deshacer) PUERTAS.push({ deshacer:function(){
            var g = window[a.deshacer];
            if(typeof g === 'function') g();
          }});
          f.apply(null, a.con || []);
        } else {
          console.warn('Tour: « ' + a.funcion + ' » no existe aqui');
        }
      }
    }catch(x){ console.warn('Tour: la accion ha tropezado', a, x); }

    /* lo que se abre tarda un instante en verse */
    luego(alAcabar || function(){}, a.espera || 350);
  }

  /* al salir, todo vuelve a su sitio — al reves de como se abrio */
  function cierraTodo(){
    while(PUERTAS.length){
      var p = PUERTAS.pop();
      try{ p.deshacer(); }catch(x){}
    }
  }

  /* ══ UNA SOLA VEZ CADA FUNCION (P-H, 21/09/2026) ══
     arrancaVisita, carta y puerta estaban DOS veces en este fichero —
     recortes mios del 19/09 que dejaron la version vieja detras. En
     JavaScript gana la ultima: las correcciones del sabado no hacian
     nada. Ahora cada una esta una sola vez, y se comprueba al entregar. */
  var CUAL = '', SEGUIDO = false;

  /* ══════════════════════════════════════════════════════════════════
     LO QUE YA SE CONOCE (P-H, 21/09/2026)

     « À chaque objet visité, une case à cocher : je sais déjà. Comme ça,
       si on repasse tout, on ne revient plus sur le connu. »

     Es la biblioteca de la que hablaba: los cuadernos que se guardan a
     medida que se aprende. Cada objeto tiene un nombre fijo; su casilla
     se recuerda en el navegador — nada sale del ordenador.

     La casilla no cambia la visita EN CURSO: lo marcado ahora vale para
     la proxima. Al entrar en una sala se hace una foto de lo conocido,
     y solo eso se salta. Y la carta ofrece « ver tambien lo conocido »,
     sin borrar nada: se desmarca a mano lo que se ha olvidado.
     ══════════════════════════════════════════════════════════════════ */
  var CLAVE_SABIDOS = 'sf_tour_sabidos';
  var SABIDOS = {}, CONOCIDOS = {}, VER_TODO = false;
  try{ SABIDOS = JSON.parse(localStorage.getItem(CLAVE_SABIDOS) || '{}'); }catch(e){}

  function marcaSabido(nombre, si){
    if(!nombre) return;
    if(si) SABIDOS[nombre] = new Date().toISOString().slice(0,10);
    else   delete SABIDOS[nombre];
    try{ localStorage.setItem(CLAVE_SABIDOS, JSON.stringify(SABIDOS)); }catch(e){}
  }

  /* las salas — « salas », o el nombre de antes */
  function salas(){ return (T && (T.salas || T.visitas)) || {}; }
  function tituloSala(k){ var v = salas()[k] || {}; return tt(v.titulo || v.nombre) || k; }

  /* ══════════════════════════════════════════════════════════════════
     LA PUERTA DE LA SALA (P-H, 21/09/2026)

     « Une salle doit avoir son statut : porte fermée ou ouverte à
       l'entrée, fermer ou laisser la porte ouverte à la sortie. »

     Al entrar: si el cuadro no se ve y la puerta sabe abrirse, se abre.
     Al salir —n/n o salida anticipada— se hace lo que la puerta diga:
        cerrar       se llama a su funcion de cerrar
        dejar        se deja como esta
        como_estaba  se deshace todo lo abierto en esta sala, al reves
     La sala sin puerta es el vestibulo: nada que abrir, nada que cerrar.
     ══════════════════════════════════════════════════════════════════ */
  var SALA = null, MARCA = 0;

  function entraSala(v, alAcabar){
    SALA = v; MARCA = PUERTAS.length;
    var p = v && v.puerta;
    if(!p || seVe(p.objeto) || !p.abrir){ alAcabar(); return; }
    var a = (typeof p.abrir === 'string')
          ? { hacer:'llamar', funcion:p.abrir, deshacer:p.cerrar, espera:p.espera || 420 }
          : p.abrir;
    abre(a, alAcabar);
  }

  function saleSala(){
    if(!SALA) return;
    var p = SALA.puerta, modo = (p && p.salida) || 'como_estaba';
    if(modo === 'dejar'){
      PUERTAS.length = Math.min(PUERTAS.length, MARCA);
    }
    else if(modo === 'cerrar' && p && typeof window[p.cerrar] === 'function'){
      PUERTAS.length = Math.min(PUERTAS.length, MARCA);
      try{ window[p.cerrar](); }catch(x){}
    }
    else {
      while(PUERTAS.length > MARCA){
        var q = PUERTAS.pop();
        try{ q.deshacer(); }catch(x){}
      }
    }
    SALA = null;
  }

  function arrancaVisita(cual, seguido){
    corta();                   /* nada de la sala anterior sobrevive */
    var vieja = document.getElementById('sf-tour');
    if(vieja) vieja.remove();  /* cada sala, su caja: sin restos de la puerta */
    sigueHalo(true);
    MOVIDA = false;            /* cada sala empieza donde le toca */
    saleSala();                /* por si se venia de otra sin cerrar */
    Object.keys((T && T.objetos) || {}).forEach(function(k){
      delete T.objetos[k]._abierta; delete T.objetos[k]._intento; });
    VIS = salas()[cual] || null;
    PASOS = (VIS && VIS.pasos) || [];
    if(!PASOS.length){
      console.error('Tour: la sala « ' + cual + ' » no tiene pasos');
      return;
    }
    CUAL = cual; SEGUIDO = !!seguido;
    CONOCIDOS = JSON.parse(JSON.stringify(SABIDOS));   /* la foto de lo conocido */
    i = 0; DIR = 1; pausa = false; viva = true;
    entraSala(VIS, function(){ if(viva) muestra(); });
  }

  /* « 5 conocidos » · « ✓ todo conocido » — lo que dice la carta de cada sala */
  function cuentaSabidos(v){
    var P = (v && v.pasos) || [];
    var k = P.filter(function(p){ return SABIDOS[p]; }).length;
    if(!k) return '';
    if(k === P.length) return esc(tt(T.carta_todo_conocido) || '✓');
    return esc((tt(T.carta_conocidos) || '{n}').replace('{n}', k));
  }

  function carta(alElegir){
    var V = salas();
    var K = Object.keys(V);
    if(!K.length) return;

    var f = document.createElement('div');
    f.id = 'sf-carta';
    f.innerHTML = '<div class="sf-c-caja">'
      + '<div class="sf-c-tit">🧭 ' + esc(tt(T.carta_titulo) || 'Visitar') + '</div>'
      + (T.carta_texto ? '<div class="sf-c-sub">' + esc(tt(T.carta_texto)) + '</div>' : '')
      + '<div class="sf-c-salas">'
      + K.map(function(k){
          var v = V[k] || {};
          var n = (v.pasos||[]).length;
          var hecha = HECHAS[k];
          return '<div class="sf-c-sala' + (hecha ? ' hecha' : '') + '" data-v="' + k + '">'
            + '<span class="sf-c-ico">' + (v.icono || '▸') + '</span>'
            + '<span class="sf-c-nom">' + esc(tituloSala(k)) + '</span>'
            + '<span class="sf-c-sab">' + cuentaSabidos(v) + '</span>'
            + '<span class="sf-c-n">' + n + '</span>'
            + '<span class="sf-c-ok">✓</span></div>';
        }).join('')
      + '</div>'
      + '<label class="sf-c-ver"><input type="checkbox" id="sf-c-ver"> '
      + esc(tt(T.carta_ver_todo) || '') + '</label>'
      + '<div class="sf-c-pie">'
      + '<button class="sf-c-btn" data-todo="1">' + esc(tt(T.carta_todo) || 'Todo seguido') + '</button>'
      + '<button class="sf-c-btn sf-suave" data-salir="1">' + esc(tt(T.carta_salir) || 'Salir') + '</button>'
      + '</div></div>';
    document.body.appendChild(f);

    function cierra(){
      var cv = f.querySelector('#sf-c-ver');
      VER_TODO = !!(cv && cv.checked);          /* esta visita, tambien lo conocido */
      if(f.parentNode) document.body.removeChild(f);
    }
    f.onclick = function(e){ if(e.target === f){ cierra(); if(opc.al_salir) opc.al_salir(); } };

    f.querySelectorAll('.sf-c-sala').forEach(function(d){
      d.onclick = function(){ cierra(); alElegir(d.dataset.v, false); };
    });
    f.querySelector('[data-todo]').onclick = function(){
      cierra(); alElegir(K[0], true);          /* todas, una tras otra */
    };
    f.querySelector('[data-salir]').onclick = function(){
      cierra(); if(opc.al_salir) opc.al_salir();
    };
  }

  /* ══════════════════════════════════════════════════════════════════
     LA PUERTA COMPONE SU FRASE (P-H, 19/09/2026)

     « À la fin d'une salle il dit "ya conoce la casa" — non, c'est faux.
       On devrait dire : ha visitado la banda de arriba, quieres seguir
       con el paciente ? »

     Y tenia razon: « fin » era el mismo objeto en las cinco salas, asi
     que decia siempre lo mismo. Ahora la puerta lo dice ella: sabe que
     sala se acaba de ver y cual viene despues.

     Menos textos que grabar, y funciona con toda sala que se anada.
     ══════════════════════════════════════════════════════════════════ */
  function puerta(){
    var V = salas();
    var K = Object.keys(V);
    var k = K.indexOf(CUAL);
    var sig = (k >= 0 && k < K.length-1) ? K[k+1] : null;

    if(SEGUIDO && sig){ arrancaVisita(sig, true); return; }

    /* ══ LA OPINION, A MANO EN LA PUERTA (P-H, 21/09/2026) ══
       « À la sortie ça m'affiche Gracias por la visita, et en arrière-plan
         Ya ha visitado Quién accede. »  — y eligio la B:

       Ninguna ventana se abre sola. La puerta lleva las cinco caras, en
       pequeno, bajo « ¿Seguimos? ». Quien quiera opinar sobre la sala,
       toca una; quien no, sigue sin que nadie le pregunte. Y el « Gracias »
       llega una sola vez: al salir del museo, si no se ha opinado ya. */
    var sv = (salas()[CUAL]) || {};

    var m = marco();
    var v = V[CUAL] || {};
    var nom = function(x){ return tituloSala(x); };

    m.querySelector('#sf-t-ico').textContent = v.icono || '✓';
    var clp = m.querySelector('#sf-t-sabe-l'); if(clp) clp.style.display = 'none';
    m.querySelector('#sf-t-tit').textContent =
      (tt(T.puerta_hecha) || '{sala}').replace('{sala}', nom(CUAL));
    m.querySelector('#sf-t-n').textContent = '';
    var CARAS = T.caras || ['😡','😞','😐','😊','🤩'];
    m.querySelector('#sf-t-texto').innerHTML = '<span class="sf-t-p dicha">'
      + esc(sig ? (tt(T.puerta_sigue) || '').replace('{sala}', nom(sig))
                : (tt(T.puerta_ultima) || '')) + '</span>'
      + (opc.al_opinar
         ? '<div class="sf-p-opina"><span>' + esc(tt(T.puerta_opina) || '') + '</span>'
           + CARAS.map(function(c, k){
               return '<button class="sf-p-cara" data-n="' + (k+1) + '">' + c + '</button>';
             }).join('') + '</div>'
         : '');
    m.querySelectorAll('.sf-p-cara').forEach(function(bc){
      bc.onclick = function(){
        DIO = true;
        m.querySelectorAll('.sf-p-cara').forEach(function(x){ x.classList.remove('on'); });
        bc.classList.add('on');
        opc.al_opinar(parseInt(bc.dataset.n, 10),
                      { icono:sv.icono, titulo:sv.titulo || sv.nombre },
                      PASOS.length, CUAL);
      };
    });

    m.style.cssText = '';
    m.classList.remove('naciendo');
    m.classList.add('on');
    var c = m.querySelector('.sf-t-caja');
    c.classList.remove('punta-arriba','punta-abajo');

    var b = m.querySelector('.sf-t-mandos');
    b.innerHTML =
        (sig ? '<button id="sf-p-sig" class="grande">▶ ' + esc(nom(sig)) + '</button>' : '')
      + '<button id="sf-p-carta">🧭</button>'
      + '<span class="sf-t-sep"></span>'
      + '<button id="sf-p-salir">❌</button>';

    if(sig) ponTitulo(m, '#sf-p-sig', 'p_sig', nom(sig));
    ponTitulo(m, '#sf-p-carta', 'p_carta');
    ponTitulo(m, '#sf-p-salir', 'p_salir');
    if(sig) b.querySelector('#sf-p-sig').onclick = function(){ arrancaVisita(sig, false); };
    b.querySelector('#sf-p-carta').onclick = function(){
      var mm = document.getElementById('sf-tour'); if(mm) mm.remove();
      carta(arrancaVisita);
    };
    b.querySelector('#sf-p-salir').onclick = function(){ sal(!DIO); };
  }

  function calla(){
    if(audio){ try{ audio.pause(); }catch(e){} audio = null; }
    try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
  }

  function habla(e, alTerminar, alSaberDuracion){
    calla();
    if(opc.sin_voz || !conVoz){ if(alTerminar) alTerminar(false); return; }

    var s = (e.sonido && e.sonido[lg()]) || sonidoDe(e.nombre, lg());
    if(!s){ sintetiza(e, alTerminar); return; }

    audio = new Audio((opc.carpeta || '') + s);

    /* ══════════════════════════════════════════════════════════════
       EL MP3 SABE CUÁNTO DURA (P-H, 18/09/2026)

       « Problème de synchronisation. »

       Claro: los « segundos » de la tabla eran una estimación, hecha
       antes de que las voces existieran. Oscar habla a su ritmo, no al
       que yo había supuesto.

       Pero el fichero lleva su duración escrita. En cuanto el navegador
       la conoce —loadedmetadata, antes incluso de empezar a sonar— se
       la damos al reloj y a la pluma. Ya no se adivina nada: la etapa
       dura lo que dura la voz.

       Sin mp3, los segundos de la tabla siguen mandando.
       ══════════════════════════════════════════════════════════════ */
    /* ══ EL SONIDO PUEDE HABERSE IDO YA (P-H, 19/09/2026) ══
       « Cannot read properties of null (reading 'duration') »

       El aviso llega despues de que calla() haya puesto audio a null —
       basta con pasar de etapa deprisa. Se guarda el objeto en una
       variable propia, y se comprueba que sigue siendo el suyo. */
    var mio = audio;
    mio.onloadedmetadata = function(){
      if(audio !== mio) return;          /* ya no es el que suena */
      var d = mio.duration;
      if(d && isFinite(d) && d > 0.5 && alSaberDuracion) alSaberDuracion(d);
    };

    mio.onended = function(){
      if(audio !== mio) return;
      audio = null; if(alTerminar) alTerminar(true); };
    mio.onerror = function(){
      if(audio !== mio) return;
      audio = null; sintetiza(e, alTerminar); };
    mio.play().catch(function(){
      if(audio !== mio) return;
      audio = null; sintetiza(e, alTerminar); });
  }

  /* ── la mejor voz instalada para este idioma ── */
  function mejorVoz(l){
    if(!window.speechSynthesis) return null;
    var V = speechSynthesis.getVoices() || [];
    var suyas = V.filter(function(v){
      return v.lang && v.lang.toLowerCase().indexOf(l) === 0; });
    if(!suyas.length) return null;
    /* las de red suenan mejor que las del sistema; espeak, lo peor */
    var buena = suyas.filter(function(v){ return !v.localService; })[0];
    if(buena) return buena;
    var noEspeak = suyas.filter(function(v){
      return !/espeak|flite/i.test(v.name || ''); })[0];
    return noEspeak || suyas[0];
  }

  function sintetiza(e, alTerminar){
    if(!window.speechSynthesis){ if(alTerminar) alTerminar(false); return; }
    var l = lg();
    /* la sintesis dice « dicho » si lo hay: escrito para el oido (P-H, 21/09) */
    var txt = tt(e.dicho || e.texto);
    if(!txt){ if(alTerminar) alTerminar(false); return; }

    /* Chrome corta los textos largos: se trocea por frases */
    var fr = txt.match(/[^.!?…]+[.!?…]*\s*/g) || [txt];
    var tr = [], cur = '';
    fr.forEach(function(f){
      if((cur + f).length > 180){ if(cur) tr.push(cur); cur = f; }
      else cur += f;
    });
    if(cur) tr.push(cur);

    var voz = mejorVoz(l);
    var LL = { es:'es-ES', ca:'ca-ES', fr:'fr-FR', en:'en-US' };
    tr.forEach(function(t2, k){
      var u = new SpeechSynthesisUtterance(t2);
      u.lang = LL[l] || 'es-ES';
      u.rate = 0.94;                    /* sin prisa: se mira la pantalla */
      if(voz) u.voice = voz;
      if(k === tr.length - 1)
        u.onend = function(){ if(alTerminar) alTerminar(true); };
      try{ speechSynthesis.speak(u); }catch(x){}
    });
    if(!tr.length && alTerminar) alTerminar(false);
  }

  /* ══ UNA ETAPA ══ */
  function muestra(){
    if(!viva) return;
    corta();                           /* cada etapa, su generacion */
    if(i >= PASOS.length){ acabada(); return; }
    if(i < 0) i = 0;

    var e = objetoDe(i);
    if(!e){ i += DIR; if(i < 0){ i = 0; DIR = 1; } muestra(); return; }

    /* ══ LA TARJETA QUE EL PERFIL ESCONDE SE SALTA (P-H, 21/09/2026) ══
       Un paciente no ve « correlaciones »: la tarjeta no esta en la
       pagina. Se salta, en el sentido de la marcha — hacia delante si se
       avanzaba, hacia atras si se retrocedia. Si la sala entera esta
       escondida, se llega al final y se sale por la puerta. */
    /* lo que ya se conocia al entrar en la sala se salta */
    if(!VER_TODO && CONOCIDOS[e.nombre]){
      i += DIR;
      if(i < 0){ i = 0; DIR = 1; }
      muestra(); return;
    }

    if(e.objeto && !document.querySelector(e.objeto) && !e.accion){
      i += DIR;
      if(i < 0){ i = 0; DIR = 1; }
      muestra(); return;
    }
    if(e._contado !== CUAL + i){ VISTOS++; var oc = (T.objetos||{})[paso_n(i)];
                                  if(oc) oc._contado = CUAL + i; }

    /* ══ LA PUERTA SE ABRE SOLO SI HACE FALTA (P-H, 21/09/2026) ══
       « À l'étape Abrir, tu ne fermes pas le cadre de l'étape 7, donc on
         ne voit pas le dossier. »

       Antes la accion se hacia una vez y se marcaba « abierta » para
       siempre. Asi no se podia cerrar una sala para entrar en la de al
       lado, y al volver atras con ⬅️ el cuadro ya no se reabria.

       Ahora la regla es la del visitante: SI EL OBJETO NO SE VE, se hace
       lo que la tabla dice para verlo. Si ya se ve, no se toca nada. Asi
       « abrir » puede cerrar el cuadro nuevo —el boton 📂 vive en el otro
       cuadro— y al retroceder, el cuadro se vuelve a abrir solo. */
    if(e.accion && !seVe(e.objeto) && e._intento !== i){
      var o0 = (T.objetos||{})[paso_n(i)];
      if(o0) o0._intento = i;          /* una vez por paso, no en bucle */
      abre(e.accion, function(){ muestra(); });
      return;
    }
    var o1 = (T.objetos||{})[paso_n(i)];
    if(o1) delete o1._intento;

    var m = marco();
    /* ══ NO SE VE HASTA ESTAR PUESTO (P-H, 18/09/2026) ══
       « Quand on clique la première fois, le cadre s'affiche en bas puis
         en haut. » Era su sitio de reposo, visto una fracción de segundo
         antes de que acerca() lo colocara. Ahora nace invisible: se
         enciende cuando ya está donde debe. */
    if(!m.classList.contains('on')) m.classList.add('naciendo');
    m.querySelector('#sf-t-ico').textContent  = e.icono || '';
    m.querySelector('#sf-t-tit').textContent  = tt(e.titulo);
    /* la casilla « ya lo conozco », de este objeto */
    var cs = m.querySelector('#sf-t-sabe'), cl = m.querySelector('#sf-t-sabe-l');
    if(cs && cl){
      cl.style.display = '';
      m.querySelector('#sf-t-sabe-t').textContent = tt(T.sabido) || '';
      cs.checked = !!SABIDOS[e.nombre];
      cs.onchange = function(){ marcaSabido(e.nombre, cs.checked); };
    }
    m.querySelector('#sf-t-n').textContent    = (i+1) + ' / ' + PASOS.length;
    var bA = m.querySelector('#sf-t-atras');
    if(bA) bA.disabled = (i === 0);

    var visto = ilumina(e.objeto);
    /* un campo que se ensena recibe el cursor: se ve donde se escribe */
    if(visto && /^(INPUT|TEXTAREA|SELECT)$/.test(visto.tagName)){
      try{ visto.focus({ preventScroll:true }); }catch(x){}
    }
    /* sin objeto que señalar, la caja se queda en su sitio de reposo */
    if(!visto){
      m.classList.remove('naciendo');
      m.classList.add('on');
      var c0 = m.querySelector('.sf-t-caja');
      if(c0) c0.classList.remove('punta-arriba','punta-abajo');
    }

    /* ══ SIN MP3, EL LARGO DEL TEXTO MANDA (P-H, 19/09/2026) ══
       « La durée par défaut varie selon la langue ! » Claro: un campo
       fijo mentía en tres lenguas de cuatro. Ahora se estima del texto
       mismo — y en cuanto el mp3 dice su duración, ella manda. */
    var seg = e.segundos || estima(tt(e.texto));
    /* ══ EL SUSPIRO (P-H, 18/09) ══
       « Avant de passer à l'item suivant, un petit soupir (ajustable). »
       El halo se apaga, se respira, y llega la siguiente. Sin eso, las
       etapas se atropellan y el ojo no sigue. */
    var suspiro = (e.suspiro != null) ? e.suspiro
                : (T.suspiro != null ? T.suspiro : 1200);

    /* ── la pluma recorre el texto: se ve cuánto queda ── */
    pluma(m.querySelector('#sf-t-texto'), tt(e.texto), seg);

    /* ══ EL RELOJ MANDA, NO LA VOZ ══
       Al cabo del tiempo previsto se pasa, hable o no hable la voz. Su
       « onend » no llega nunca cuando el texto es largo —ni en Firefox
       ni en Chrome— y la etapa esperaba una señal que no venía. */
    var pasado = false;
    var pasaUnaVez = function(){
      if(pasado || pausa || !viva) return;
      pasado = true;
      respira(suspiro);
    };

    clearTimeout(relojEtapa);
    relojEtapa = luego(pasaUnaVez, seg*1000);

    habla(e,
      /* la voz acabó: se pasa enseguida */
      deEsta(function(hablo){
        if(!hablo || pausa || !viva) return;
        clearTimeout(relojEtapa);
        relojEtapa = luego(pasaUnaVez, 350);
      }),
      /* el mp3 dice cuánto dura: el reloj y la pluma se ajustan a él */
      deEsta(function(dur){
        if(pausa || !viva) return;
        seg = dur;
        llena(dur);
        pluma(m.querySelector('#sf-t-texto'), tt(e.texto), dur);
        clearTimeout(relojEtapa);
        relojEtapa = luego(pasaUnaVez, dur*1000 + 250);
      }));
    pintaLista();
  }

  /* ── la jauge du fond : elle dit combien il reste ── */
  /* ══════════════════════════════════════════════════════════════════
     LA PLUMA SOBRE LAS PALABRAS (Joaquina + P-H, 18/09/2026)

     « Je croyais que c'était comme un feutre qui se déplace sur les
       mots du texte. »

     Eso es mucho mejor que una barra: el texto entero está ahí desde el
     principio —se ve su largo de un vistazo— y las palabras se encienden
     una tras otra. Como un karaoke, o como el dedo de quien lee en voz
     alta a un niño.

     LA PLUMA SIGUE EL RELOJ, no la voz: la voz nunca dice dónde va, y es
     justo lo que nos bloqueaba. Aquí el tiempo se reparte entre las
     palabras, y lo que se ve es siempre verdad.
     ══════════════════════════════════════════════════════════════════ */
  function pluma(z, texto, seg){
    clearTimeout(plumaTmr);
    if(!z) return;
    var P = String(texto || '').split(/(\s+)/);
    z.innerHTML = P.map(function(p){
      return /^\s+$/.test(p) ? p
           : '<span class="sf-t-p">' + p.replace(/&/g,'&amp;')
             .replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span>';
    }).join('');

    var W = z.querySelectorAll('.sf-t-p');
    if(!W.length) return;
    /* el tiempo se reparte entre las palabras, con un respiro al final */
    var paso = (seg * 1000 * 0.92) / W.length;
    var k = 0;
    (function siguiente(){
      if(pausa || !viva) return;
      if(k >= W.length) return;
      W[k].classList.add('dicha');
      k++;
      plumaTmr = luego(siguiente, paso);
    })();
  }

  /* unas trece letras por segundo, y un respiro al final */
  function estima(txt){
    var n = String(txt || '').trim().length;
    return Math.max(4, Math.round(n / 13) + 1);
  }

  function llena(seg){
    var b = document.getElementById('sf-t-llena');
    if(!b) return;
    b.style.transition = 'none';
    b.style.width = '0%';
    /* un souffle pour que le navigateur voie le retour à zéro */
    void b.offsetWidth;
    b.style.transition = 'width ' + seg + 's linear';
    b.style.width = '100%';
  }

  /* ── el titulo de un boton, sacado de la tabla ── */
  function ponTitulo(m, sel, clave, sala){
    var b = m.querySelector(sel);
    var t = T && T.mandos && T.mandos[clave];
    if(b && t) b.title = tt(t).replace('{sala}', sala || '');
  }

  /* ── ⏭️ : lo que queda de la sala no se ve; se va a su puerta ── */
  function saltaSala(){
    if(!viva) return;
    corta(); calla(); apaga();
    saleSala();
    viva = false;
    luego(puerta, 250);
  }

  /* ── el suspiro: el halo se apaga, se respira, y se pasa ── */
  function respira(ms){
    if(pausa || !viva) return;
    /* el velo se queda: solo el cuadro se retira un poco (P-H, 18/09) */
    var m = document.getElementById('sf-tour');
    if(m) m.classList.add('respirando');
    tmr = luego(function(){
      if(m) m.classList.remove('respirando');
      if(!pausa && viva) paso(1);
    }, ms);
  }

  function paso(d){
    DIR = (d < 0) ? -1 : 1;
    calla(); clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr);
    pausa = false;
    var p = document.getElementById('sf-t-pausa');
    if(p) p.textContent = '⏸';
    i += d;
    muestra();
  }
  /* ── callar la voz, sin parar la visita ── */
  function calladito(){
    conVoz = !conVoz;
    var b = document.getElementById('sf-t-voz');
    if(b){ b.textContent = conVoz ? '🔊' : '🔇'; b.style.opacity = conVoz ? '' : '.3'; }
    if(!conVoz) calla();
  }

  /* ══ VOLVER A OÍRLA (P-H, 19/09/2026) ══
     « On n'a pas de bouton ré-écouter. » Faltaba, y hace falta: una
     frase se pierde por un ruido, por una distracción, y había que
     retroceder y volver a avanzar. El 🔁 la repite sin moverse de
     sitio — la voz desde el principio, la pluma también. */
  function otraVez(){
    if(!viva) return;
    pausa = false;
    var p = document.getElementById('sf-t-pausa');
    if(p) p.textContent = '⏸';
    muestra();
  }

  function alterna(){
    pausa = !pausa;
    var p = document.getElementById('sf-t-pausa');
    if(p) p.textContent = pausa ? '▶' : '⏸';
    if(pausa){ clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr); calla();
      var b = document.getElementById('sf-t-llena');
      if(b){ var w = b.getBoundingClientRect().width;
             b.style.transition='none';
             b.style.width = w + 'px'; }
    } else muestra();
  }

  /* ══ LA LISTA — saltar a una etapa ══ */
  function pintaLista(){
    var z = document.getElementById('sf-t-lista-caja');
    if(!z) return;
    z.innerHTML = PASOS.map(function(nom, k){
      var o = (T.objetos||{})[nom] || {};
      return '<div class="sf-t-item' + (k===i?' on':'') + '" data-k="' + k + '">'
        + '<span class="sf-t-item-n">' + (k+1) + '</span>'
        + '<span class="sf-t-item-i">' + (o.icono||'·') + '</span>'
        + '<span class="sf-t-item-t">' + esc(tt(o.titulo)) + '</span></div>';
    }).join('');
    z.querySelectorAll('.sf-t-item').forEach(function(d){
      d.onclick = function(){
        i = parseInt(d.dataset.k, 10);
        z.classList.remove('on');
        muestra();
      };
    });
  }
  function pliegaLista(){
    var z = document.getElementById('sf-t-lista-caja');
    if(!z) return;
    z.classList.toggle('on');
    /* la lista agranda la caja: si ya no cabe, se sube lo necesario */
    var m = document.getElementById('sf-tour');
    if(!m) return;
    var r = m.getBoundingClientRect();
    if(r.bottom > window.innerHeight - 8){
      m.style.top = Math.max(8, window.innerHeight - r.height - 8) + 'px';
      m.style.bottom = 'auto';
      var c = m.querySelector('.sf-t-caja');
      if(c) c.classList.remove('punta-arriba','punta-abajo');
    }
  }

  /* ══ EL FINAL, Y LA DESPEDIDA ══ */
  /* ══════════════════════════════════════════════════════════════════
     EL FINAL TAMBIÉN HABLA (P-H, 18/09/2026)

     « Eso es todo… il n'y est pas ! »

     Y no podía estar: final() escribía su texto pero no llamaba nunca a
     la voz. El noveno mp3 —t09— se grabó para nada, y encima el aviso
     lo tapaba dos segundos después.

     Ahora el final es una etapa como las demás: tiene su voz, su pluma,
     y su tiempo. El aviso espera a que acabe de hablar.
     ══════════════════════════════════════════════════════════════════ */
  /* ══ « fin » ES UN OBJETO COMO LOS DEMAS (P-H, 19/09/2026) ══
     Antes el final tenia su propia funcion — y por eso se me olvido
     hacerle hablar. Ahora es el ultimo nombre de la lista: lleva su
     texto, su voz y su fichero como cualquier otro. */
  function acabada(){
    corta();
    saleSala();
    calla(); clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr);
    apaga();
    guardaHecha(CUAL);
    viva = false;
    /* ══ EL AVISO, AL SALIR DEL MUSEO — NO AL CAMBIAR DE SALA ══
       « Quand je clique sur todo seguido, on enchaîne tout. Alors pourquoi
         à la fin d'une bande tu demandes l'opinion, mais la visite continue
         cachée derrière ? » (P-H, 21/09/2026)

       Se avisaba a casa de que « la visita ha terminado » al acabar CADA
       sala; casa abria el aviso mientras la sala siguiente arrancaba
       detras. Ahora solo se avisa al salir del museo por la puerta. */
    /* la puerta: seguir con la sala siguiente, o volver a la carta */
    luego(puerta, 400);
  }

  function pideAdios(){
    corta();
    clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr); calla();
    pausa = true;
    var p = document.getElementById('sf-t-pausa');
    if(p) p.textContent = '▶';
    if(opc.al_interrumpir){
      /* « J'aime le commentaire : abandon à l'étape 9 de 8 ! » (P-H) —
         i está en 0..n-1, así que la etapa es i+1, no i+2 */
      var o = objetoDe(i) || {};
      opc.al_interrumpir(Math.min(i + 1, PASOS.length), PASOS.length, o);
    }
    else sal();
  }

  function sal(visitada){
    corta();
    sigueHalo(false);
    /* ══ SALIR ES SALIR (P-H, 20/09/2026) ══
       viva = false ANTES de nada: si algo llama a muestra() despues —un
       reloj rezagado, un aviso que se cierra— se encuentra la visita
       muerta y no la resucita. */
    viva = false;
    clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr);
    calla();
    saleSala();
    cierraTodo();
    apaga();
    var m = document.getElementById('sf-tour');
    if(m) m.remove();
    var cc = document.getElementById('sf-carta');
    if(cc) cc.remove();
    /* se sale por la puerta despues de ver salas: se pide la opinion;
       se sale por la carta o sin ver nada: se sale sin mas */
    if(visitada && opc.al_final) opc.al_final(true, VISTOS, CUAL);
    else if(opc.al_salir) opc.al_salir();
  }

  function sigue(){          /* si el aviso se cancela, se continúa */
    if(!viva) return;        /* pero no se resucita lo que ya salió */
    pausa = false;
    var p = document.getElementById('sf-t-pausa');
    if(p) p.textContent = '⏸';
    muestra();
  }

  /* ══ LA INTERFAZ ══ */
  return {
    arranca: function(tabla, opciones){
      opc = opciones || {};
      if(typeof tabla === 'string'){
        fetch(tabla).then(function(r){ return r.json(); })
          .then(function(d){ T = d; i = 0; viva = true; muestra(); })
          .catch(function(e){ console.error('Tour: no se pudo leer', e); });
        return;
      }
      T = tabla;
      try{ if(window.speechSynthesis) speechSynthesis.getVoices(); }catch(e){}
      if(!opc.carpeta && T.voz_carpeta) opc.carpeta = '';

      VISTOS = 0; DIO = false;
      Object.keys(T.objetos || {}).forEach(function(k){ delete T.objetos[k]._contado; });
      /* ── la brujula abre la CARTA; se elige una sala ── */
      if(opc.visita){ arrancaVisita(opc.visita, false); return; }
      if(T.sin_carta){ arrancaVisita(T.sala_defecto || T.visita_defecto
        || Object.keys(salas())[0], false); return; }
      carta(arrancaVisita);
    },
    paso: paso, pausa: alterna, sal: sal, sigue: sigue, voz: calladito,
    otraVez: otraVez,
    lista: pliegaLista,
    donde: function(){
      var o = objetoDe(i) || {};
      return { etapa:i+1, total:PASOS.length, nombre:paso_n(i),
               icono:o.icono || '', titulo:tt(o.titulo) }; },
    visitas: function(){ return Object.keys(salas()); },
    salas:   function(){ return Object.keys(salas()); },
    carta: function(){ carta(arrancaVisita); },
    olvida: function(){ HECHAS = {};
      try{ localStorage.removeItem('sf_tour_hechas'); }catch(e){} },
    viva: function(){ return viva; }
  };
})();
