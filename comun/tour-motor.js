/* ══════════════════════════════════════════════════════════════════════
   EL MOTOR DE LA VISITA — /Salufolio/comun/tour-motor.js

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

  var T = null, i = 0, viva = false, pausa = false;
  var tmr = null, audio = null, opc = {}, conVoz = true;
  /* ══ EL RELOJ DE LA ETAPA, APARTE (P-H, 18/09/2026) ══
     « L'automatisme se bloque si le son est en marche. »

     Y seguía bloqueándose: « tmr » lo usaban tres cosas a la vez —el
     paso de etapa, el remate de la voz, el suspiro— y se pisaban. Uno
     ponía el reloj, otro lo quitaba, y la etapa se quedaba ahí.

     Ahora la etapa tiene el suyo, y NADIE MÁS lo toca. */
  var relojEtapa = null, plumaTmr = null;

  /* ── el idioma del momento ── */
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
    if(m) return m;
    m = document.createElement('div');
    m.id = 'sf-tour';
    m.innerHTML =
        '<div class="sf-t-caja">'
      + '  <div class="sf-t-cab">'
      + '    <span class="sf-t-ico" id="sf-t-ico"></span>'
      + '    <span class="sf-t-tit" id="sf-t-tit"></span>'
      + '    <span class="sf-t-n"   id="sf-t-n"></span>'
      + '  </div>'
      + '  <div class="sf-t-texto" id="sf-t-texto"></div>'
      + '  <div class="sf-t-barra"><div class="sf-t-llena" id="sf-t-llena"></div></div>'
      + '  <div class="sf-t-mandos">'
      + '    <button id="sf-t-x"     title="">❌</button>'
      + '    <button id="sf-t-otra"  title="">🔄</button>'
      + '    <button id="sf-t-lista" title="">📋</button>'
      + '    <button id="sf-t-salta" title="">⏭️</button>'
      + '    <span class="sf-t-sep"></span>'
      + '    <button id="sf-t-atras" title="">⬅️</button>'
      + '    <button id="sf-t-pausa" title="">⏸</button>'
      + '    <button id="sf-t-voz"   title="">🔊</button>'
      + '    <button id="sf-t-sig"   title="">➡️</button>'
      + '  </div>'
      + '  <div class="sf-t-lista-caja" id="sf-t-lista-caja"></div>'
      + '</div>';
    document.body.appendChild(m);

    m.querySelector('#sf-t-x').onclick     = function(){ pideAdios(); };
    m.querySelector('#sf-t-otra').onclick  = function(){ i = 0; muestra(); };
    m.querySelector('#sf-t-lista').onclick = function(){ pliegaLista(); };
    m.querySelector('#sf-t-salta').onclick = function(){ paso(1); };
    m.querySelector('#sf-t-atras').onclick = function(){ paso(-1); };
    m.querySelector('#sf-t-sig').onclick   = function(){ paso(1); };
    m.querySelector('#sf-t-pausa').onclick = function(){ alterna(); };
    m.querySelector('#sf-t-voz').onclick   = function(){ calladito(); };
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
      var r = e.getBoundingClientRect();
      h.style.left   = (r.left - 6) + 'px';
      h.style.top    = (r.top  - 6) + 'px';
      h.style.width  = (r.width  + 12) + 'px';
      h.style.height = (r.height + 12) + 'px';
      h.style.opacity = '1';
      acerca(r);
    };

    /* si hace falta desplazar la página, se espera; si no, enseguida */
    var r0 = e.getBoundingClientRect();
    var visible = r0.top > 60 && r0.bottom < window.innerHeight - 60;
    if(visible){ pone(); }
    else {
      try{ e.scrollIntoView({behavior:'smooth', block:'center'}); }catch(x){}
      setTimeout(pone, 200);
    }
    return e;
  }

  /* ── la caja se acerca, y apunta ── */
  function acerca(r){
    var m = document.getElementById('sf-tour');
    if(!m) return;
    var c = m.querySelector('.sf-t-caja');
    var ancho = m.offsetWidth  || 560;
    var alto  = m.offsetHeight || 170;
    var H = window.innerHeight, W = window.innerWidth, D = 15;

    /* ¿cabe debajo del objeto? si no, va encima */
    var debajo = (r.bottom + D + alto) < (H - 10);
    var arriba = (r.top - D - alto) > 10;
    var y, lado;
    if(debajo){ y = r.bottom + D; lado = 'arriba'; }       /* punta hacia arriba */
    else if(arriba){ y = r.top - D - alto; lado = 'abajo'; }
    else { y = Math.max(10, H - alto - 20); lado = ''; }    /* no cabe: abajo, sin punta */

    /* centrada sobre el objeto, sin salirse de la pantalla */
    var cx = r.left + r.width/2;
    var x = Math.max(12, Math.min(W - ancho - 12, cx - ancho/2));

    m.style.left = x + 'px';
    m.style.top  = y + 'px';
    m.style.bottom = 'auto';
    m.style.transform = 'none';
    /* ya está puesto: se puede ver */
    if(m.classList.contains('naciendo')){
      m.classList.remove('naciendo');
      m.classList.add('on');
    }

    /* la punta, donde está el objeto */
    c.classList.remove('punta-arriba','punta-abajo');
    if(lado){
      c.classList.add('punta-' + lado);
      var px = Math.max(18, Math.min(ancho - 18, cx - x));
      c.style.setProperty('--punta', px + 'px');
    }
  }
  /* apaga() no se llama entre etapas — solo al acabar o al salir */
  function apaga(){
    var h = document.getElementById('sf-t-halo');
    if(h){ h.style.opacity = '0'; setTimeout(function(){ h.remove(); }, 320); }
    document.querySelectorAll('.sf-t-visto').forEach(function(e){
      e.classList.remove('sf-t-visto'); });
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
  function calla(){
    if(audio){ try{ audio.pause(); }catch(e){} audio = null; }
    try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
  }

  function habla(e, alTerminar, alSaberDuracion){
    calla();
    if(opc.sin_voz || !conVoz){ if(alTerminar) alTerminar(false); return; }

    var s = e.sonido && e.sonido[lg()];
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
    audio.onloadedmetadata = function(){
      var d = audio.duration;
      if(d && isFinite(d) && d > 0.5 && alSaberDuracion) alSaberDuracion(d);
    };

    audio.onended = function(){ audio = null; if(alTerminar) alTerminar(true); };
    audio.onerror = function(){ audio = null; sintetiza(e, alTerminar); };
    audio.play().catch(function(){ audio = null; sintetiza(e, alTerminar); });
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
    var txt = tt(e.texto);
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
    clearTimeout(tmr);
    var E = T.etapas || [];
    if(i >= E.length){ final(); return; }
    if(i < 0) i = 0;

    var e = E[i], m = marco();
    /* ══ NO SE VE HASTA ESTAR PUESTO (P-H, 18/09/2026) ══
       « Quand on clique la première fois, le cadre s'affiche en bas puis
         en haut. » Era su sitio de reposo, visto una fracción de segundo
         antes de que acerca() lo colocara. Ahora nace invisible: se
         enciende cuando ya está donde debe. */
    if(!m.classList.contains('on')) m.classList.add('naciendo');
    m.querySelector('#sf-t-ico').textContent  = e.icono || '';
    m.querySelector('#sf-t-tit').textContent  = tt(e.titulo);
    m.querySelector('#sf-t-n').textContent    = (i+1) + ' / ' + E.length;
    m.querySelector('#sf-t-atras').disabled   = (i === 0);

    var visto = ilumina(e.objeto);
    /* sin objeto que señalar, la caja se queda en su sitio de reposo */
    if(!visto){
      m.classList.remove('naciendo');
      m.classList.add('on');
      var c0 = m.querySelector('.sf-t-caja');
      if(c0) c0.classList.remove('punta-arriba','punta-abajo');
    }

    var seg = e.segundos || T.segundos_defecto || 9;
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
    relojEtapa = setTimeout(pasaUnaVez, seg*1000);

    habla(e,
      /* la voz acabó: se pasa enseguida */
      function(hablo){
        if(!hablo || pausa || !viva) return;
        clearTimeout(relojEtapa);
        relojEtapa = setTimeout(pasaUnaVez, 350);
      },
      /* el mp3 dice cuánto dura: el reloj y la pluma se ajustan a él */
      function(dur){
        if(pausa || !viva) return;
        seg = dur;
        llena(dur);
        pluma(m.querySelector('#sf-t-texto'), tt(e.texto), dur);
        clearTimeout(relojEtapa);
        relojEtapa = setTimeout(pasaUnaVez, dur*1000 + 250);
      });
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
      plumaTmr = setTimeout(siguiente, paso);
    })();
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

  /* ── el suspiro: el halo se apaga, se respira, y se pasa ── */
  function respira(ms){
    if(pausa || !viva) return;
    /* el velo se queda: solo el cuadro se retira un poco (P-H, 18/09) */
    var m = document.getElementById('sf-tour');
    if(m) m.classList.add('respirando');
    tmr = setTimeout(function(){
      if(m) m.classList.remove('respirando');
      if(!pausa && viva) paso(1);
    }, ms);
  }

  function paso(d){
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
    z.innerHTML = (T.etapas||[]).map(function(e, k){
      return '<div class="sf-t-item' + (k===i?' on':'') + '" data-k="' + k + '">'
        + '<span class="sf-t-item-n">' + (k+1) + '</span>'
        + '<span class="sf-t-item-i">' + (e.icono||'·') + '</span>'
        + '<span class="sf-t-item-t">' + esc(tt(e.titulo)) + '</span></div>';
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
    if(z) z.classList.toggle('on');
  }

  /* ══ EL FINAL, Y LA DESPEDIDA ══ */
  function final(){
    calla(); clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr); apaga();
    var m = marco();
    var f = T.final || {};
    m.querySelector('#sf-t-ico').textContent = '✓';
    m.querySelector('#sf-t-tit').textContent = tt(f.titulo);
    m.querySelector('#sf-t-n').textContent   = '';
    m.querySelector('#sf-t-texto').innerHTML = '<span class="sf-t-p dicha">'
      + tt(f.texto) + '</span>';
    /* al final, la caja vuelve al centro: ya no señala nada */
    m.style.cssText = '';
    m.classList.add('on');
    var c = m.querySelector('.sf-t-caja');
    c.classList.remove('punta-arriba','punta-abajo');
    var b = document.getElementById('sf-t-llena'); if(b) b.style.width='100%';
    viva = false;
    if(opc.al_final) opc.al_final(true, (T.etapas||[]).length);
  }

  function pideAdios(){
    clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr); calla();
    pausa = true;
    var p = document.getElementById('sf-t-pausa');
    if(p) p.textContent = '▶';
    if(opc.al_interrumpir) opc.al_interrumpir(i + 1, (T.etapas||[]).length, T.etapas[i]);
    else sal();
  }

  function sal(){
    calla(); clearTimeout(tmr); clearTimeout(relojEtapa); clearTimeout(plumaTmr); apaga();
    viva = false;
    var m = document.getElementById('sf-tour');
    if(m) m.remove();
    if(opc.al_salir) opc.al_salir();
  }

  function sigue(){          /* si el aviso se cancela, se continúa */
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
      T = tabla; i = 0; pausa = false; viva = true;
      /* las voces tardan un instante en conocerse */
      try{ if(window.speechSynthesis) speechSynthesis.getVoices(); }catch(e){}
      if(!opc.carpeta && T.voz_carpeta) opc.carpeta = '';
      muestra();
    },
    paso: paso, pausa: alterna, sal: sal, sigue: sigue, voz: calladito,
    lista: pliegaLista,
    donde: function(){ return { etapa: i+1, total: (T&&T.etapas||[]).length,
                                titulo: T ? tt(T.etapas[i] && T.etapas[i].titulo) : '' }; },
    viva: function(){ return viva; }
  };
})();
