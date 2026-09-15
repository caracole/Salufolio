/* ═══════════════════════════════════════════════════════════════════════
   VISITA.JS — el motor de visitas guiadas (P-H + Claude, 01/09/2026)

   DOCTRINA (P-H) : un solo programa para todas las visitas — el panal,
   Salufolio, el Protocolo. El motor NO CONOCE NINGÚN CONTENIDO.

   Cómo funciona:
   1. El programa visitado marca sus objetos con  data-visita="nombre"
      Ejemplo:  <div id="curvas" data-visita="curvas">…</div>
      El motor los encuentra donde estén; si uno se muda dentro de la
      página, su marca lo sigue.
   2. Una TABLA de visita, fichero aparte, dice qué se enseña y en qué
      orden. Puede haber varias del mismo objeto: una corta, una larga,
      una para el médico.
   3. El motor recorre la tabla, pone en relieve el objeto marcado,
      muestra su texto y lo lee. Adelante, atrás, pausa, salir.

   Si un objeto marcado no existe (una función aún no escrita, una
   pestaña oculta según el perfil), la lección se salta en vez de romper.

   USO:
     Visita.arranca('visita_panal1.json', { al_entrar:fn, al_salir:fn });
   ═══════════════════════════════════════════════════════════════════════ */

var Visita = (function(){

  var T=null, i=0, pausa=false, tmr=null, lang='es', opc={}, viva=false;

  /* ── el texto en el idioma del momento ── */
  function txt(campo){
    if(campo===null||campo===undefined) return '';
    if(typeof campo==='string') return campo;
    return campo[lang] || campo[(T&&T.idioma_defecto)||'es'] || '';
  }

  /* ── encontrar el objeto marcado ── */
  function objetoDe(nombre){
    if(!nombre) return null;
    return document.querySelector('[data-visita="'+nombre+'"]');
  }

  /* ── el marco de la visita ── */
  function marco(){
    var m=document.getElementById('visita-marco');
    if(m) return m;
    m=document.createElement('div');
    m.id='visita-marco';
    m.innerHTML='<div class="v-cab"><span id="v-tit"></span><span id="v-cnt"></span></div>'
      +'<div id="v-txt"></div>'
      +'<div class="v-btns">'
      +'<button onclick="Visita.paso(-1)" title="anterior">⏮</button>'
      +'<button id="v-pausa" onclick="Visita.pausa()" title="pausa">⏸</button>'
      +'<button id="v-voz" onclick="Visita.voz()" title="voz">🔊</button>'
      +'<button onclick="Visita.paso(1)" title="siguiente">⏭</button>'
      +'<button class="v-x" onclick="Visita.sal()" title="salir">✕</button>'
      +'</div>';
    document.body.appendChild(m);
    if(!document.getElementById('visita-css')){
      var s=document.createElement('style'); s.id='visita-css';
      s.textContent=
      '#visita-marco{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);width:min(92vw,540px);'
      +'background:var(--surface,#161b27);border:2px solid var(--accent,#4a8fe8);border-radius:14px;'
      +'padding:12px 15px 10px;z-index:9000;box-shadow:0 10px 40px rgba(0,0,0,.55);'
      +'font-family:system-ui,sans-serif;max-height:46vh;display:flex;flex-direction:column;transition:bottom .3s,top .3s}'
      +'#visita-marco.arriba{bottom:auto;top:16px}'
      +'#visita-marco .v-cab{display:flex;align-items:baseline;gap:10px;margin-bottom:6px}'
      +'#v-tit{font-family:Georgia,serif;font-size:1.15em;font-weight:700;color:var(--accent,#4a8fe8);flex:1}'
      +'#v-cnt{font-size:.75em;color:var(--muted,#7a8499)}'
      +'#v-txt{font-size:.98em;line-height:1.65;color:var(--text,#e8eaf0);overflow-y:auto;flex:1}'
      +'#visita-marco .v-btns{display:flex;gap:7px;margin-top:9px}'
      +'#visita-marco button{flex:1;padding:7px 4px;border-radius:8px;border:1px solid var(--accent,#4a8fe8);'
      +'background:transparent;color:var(--text,#e8eaf0);font-size:1em;cursor:pointer}'
      +'#visita-marco button.v-x{border-color:var(--muted,#7a8499);color:var(--muted,#7a8499)}'
      +'#v-voz.off{opacity:.4}'
      +'.visita-foco{outline:3px solid var(--accent,#4a8fe8);outline-offset:3px;border-radius:6px;'
      +'animation:v-latir 1.5s ease-in-out infinite}'
      +'@keyframes v-latir{0%,100%{filter:drop-shadow(0 0 6px rgba(74,143,232,.5))}50%{filter:drop-shadow(0 0 16px rgba(74,143,232,.95))}}';
      document.head.appendChild(s);
    }
    return m;
  }

  /* ── poner en relieve, y apartar el marco si estorba ── */
  function relieve(el){
    document.querySelectorAll('.visita-foco').forEach(function(x){ x.classList.remove('visita-foco'); });
    if(!el) return;
    el.classList.add('visita-foco');
    /* el marco vive abajo; si el objeto está abajo, el marco sube */
    var r=el.getBoundingClientRect();
    var m=document.getElementById('visita-marco');
    if(m) m.classList.toggle('arriba', r.top > window.innerHeight*0.55);
    if(el.scrollIntoView) el.scrollIntoView({behavior:'smooth', block:'center'});
  }

  /* ── la voz : fichero si la tabla lo declara, si no la síntesis ── */
  var audio=null, conVoz=true;
  function calla(){
    if(audio){ audio.pause(); audio=null; }
    if(window.speechSynthesis) speechSynthesis.cancel();
  }
  function habla(lec, alTerminar){
    calla();
    if(!conVoz){ if(alTerminar) alTerminar(false); return; }
    var ruta = lec.sonido && lec.sonido[lang];
    if(ruta){
      audio=new Audio(ruta);
      audio.onended=function(){ if(alTerminar) alTerminar(true); };
      audio.play().catch(function(){ sintetiza(lec, alTerminar); });
      return;
    }
    sintetiza(lec, alTerminar);
  }
  function sintetiza(lec, alTerminar){
    if(!window.speechSynthesis){ if(alTerminar) alTerminar(false); return; }
    var tmp=document.createElement('div'); tmp.innerHTML=txt(lec.texto);
    var t=txt(lec.titulo)+'. '+(tmp.textContent||'');
    /* Chrome Android corta los textos largos: se trocea por frases */
    var fr=t.match(/[^.!?…]+[.!?…]*\s*/g)||[t], tr=[], cur='';
    fr.forEach(function(f){ if((cur+f).length>180){ if(cur)tr.push(cur); cur=f; } else cur+=f; });
    if(cur)tr.push(cur);
    var voces=speechSynthesis.getVoices().filter(function(v){return v.lang&&v.lang.toLowerCase().indexOf(lang)===0});
    var voz=voces.length? voces[0] : null;
    var hablo=false;
    tr.forEach(function(t2,j){
      var u=new SpeechSynthesisUtterance(t2);
      u.lang=({es:'es-ES',ca:'ca-ES',fr:'fr-FR',en:'en-US'})[lang]||'es-ES';
      if(voz) u.voice=voz;
      if(j===tr.length-1) u.onend=function(){ if(alTerminar) alTerminar(true); };
      speechSynthesis.speak(u); hablo=true;
    });
    if(!hablo && alTerminar) alTerminar(false);
  }

  /* ── mostrar una lección ── */
  function muestra(){
    if(!viva) return;
    clearTimeout(tmr);
    if(i>=T.lecciones.length){ fin(); return; }
    var lec=T.lecciones[i];
    var el=objetoDe(lec.objeto);
    /* objeto ausente : se salta la lección en vez de romper */
    if(lec.objeto && !el && lec.saltar_si_falta!==false){ i++; muestra(); return; }

    /* ══ v2 (P-H) — CADA ANFITRIÓN ACOGE LA VISITA A SU MANERA ══
       Con "marco":"propio" en la tabla, el motor NO dibuja su cuadro:
       entrega el texto al anfitrión (al_pintar) y este lo escribe donde
       le convenga — el panal, en la ventana de la alveola abierta.
       El motor sigue mandando el ritmo, la voz y el encadenamiento;
       solo delega la pintura. Un cuadro, una nube, lo que sea. */
    var propio = (T.marco==='propio' && opc.al_pintar);
    if(propio){
      var m0=document.getElementById('visita-marco'); if(m0) m0.remove();
      opc.al_pintar({
        titulo: txt(lec.titulo),
        texto:  txt(lec.texto),
        indice: i+1,
        total:  T.lecciones.length,
        leccion: lec,
        objeto: el,
        pausa: pausa,
        conVoz: conVoz
      });
    } else {
      marco();
      document.getElementById('v-tit').textContent=txt(lec.titulo);
      document.getElementById('v-cnt').textContent=(i+1)+' / '+T.lecciones.length;
      document.getElementById('v-txt').innerHTML=txt(lec.texto);
      relieve(el);
    }

    /* el programa visitado puede querer hacer algo (abrir una pestaña,
       agrandar una alveola) : se le avisa */
    if(opc.al_entrar) opc.al_entrar(lec, el);

    if(pausa) return;
    var seg=lec.segundos;
    habla(lec, function(hablo){
      if(pausa || !viva) return;
      if(hablo){ i++; muestra(); }
    });
    /* si no hay voz, o por si acaso : minutero proporcional al texto */
    var tmp=document.createElement('div'); tmp.innerHTML=txt(lec.texto);
    var ms = seg? seg*1000 : (2600 + (tmp.textContent||'').length*62);
    tmr=setTimeout(function(){ if(!pausa && viva){ i++; muestra(); } }, ms);
  }

  function fin(){
    calla(); clearTimeout(tmr);
    document.querySelectorAll('.visita-foco').forEach(function(x){ x.classList.remove('visita-foco'); });
    var F=T.final||{};
    if(T.marco==='propio' && opc.al_pintar){
      opc.al_pintar({ titulo: txt(F.titulo), texto: txt(F.texto), indice:0, total:0,
                      final:true, siguiente:F.siguiente, etiqueta_siguiente:txt(F.etiqueta_siguiente) });
      viva=false; if(opc.al_final) opc.al_final(); return;
    }
    var m=document.getElementById('visita-marco');
    if(m){
      document.getElementById('v-tit').textContent=txt(F.titulo)||'✔';
      document.getElementById('v-cnt').textContent='';
      document.getElementById('v-txt').innerHTML=txt(F.texto)||'';
      m.querySelector('.v-btns').innerHTML=
        (F.siguiente? '<button onclick="Visita.arranca(\''+F.siguiente+'\',Visita.opciones())">'+(txt(F.etiqueta_siguiente)||'▶')+'</button>' : '')
        +'<button onclick="Visita.reinicia()">↺</button>'
        +'<button class="v-x" onclick="Visita.sal()">✕</button>';
    }
    viva=false;
    if(opc.al_final) opc.al_final();
  }

  /* ── la interfaz pública ── */
  return {
    arranca: function(fichero, opciones){
      opc = opciones||{};
      lang = opc.idioma || lang;
      fetch(fichero).then(function(r){return r.json()}).then(function(d){
        T=d; i=0; pausa=false; viva=true;
        var m=marco(); m.querySelector('.v-btns').innerHTML=
          '<button onclick="Visita.paso(-1)">⏮</button>'
          +'<button id="v-pausa" onclick="Visita.pausa()">⏸</button>'
          +'<button id="v-voz" onclick="Visita.voz()">'+(conVoz?'🔊':'🔇')+'</button>'
          +'<button onclick="Visita.paso(1)">⏭</button>'
          +'<button class="v-x" onclick="Visita.sal()">✕</button>';
        muestra();
      }).catch(function(e){ console.error('Visita: no se pudo leer '+fichero, e); });
    },
    paso: function(d){
      if(!viva) return;
      calla(); clearTimeout(tmr);
      i=Math.max(0, Math.min(T.lecciones.length, i+d));
      pausa=false;
      var b=document.getElementById('v-pausa'); if(b)b.textContent='⏸';
      muestra();
    },
    pausa: function(){
      pausa=!pausa;
      var b=document.getElementById('v-pausa'); if(b)b.textContent=pausa?'▶':'⏸';
      if(pausa){ clearTimeout(tmr); calla(); } else muestra();
    },
    voz: function(){
      conVoz=!conVoz;
      var b=document.getElementById('v-voz');
      if(b){ b.textContent=conVoz?'🔊':'🔇'; b.classList.toggle('off',!conVoz); }
      if(!conVoz) calla();
    },
    sal: function(){
      calla(); clearTimeout(tmr); viva=false;
      document.querySelectorAll('.visita-foco').forEach(function(x){ x.classList.remove('visita-foco'); });
      var m=document.getElementById('visita-marco'); if(m) m.remove();
      if(opc.al_salir) opc.al_salir();
    },
    reinicia: function(){ i=0; viva=true; pausa=false; this.arranca_de_nuevo(); },
    arranca_de_nuevo: function(){ var m=document.getElementById('visita-marco');
      if(m) m.querySelector('.v-btns').innerHTML=
        '<button onclick="Visita.paso(-1)">⏮</button><button id="v-pausa" onclick="Visita.pausa()">⏸</button>'
        +'<button id="v-voz" onclick="Visita.voz()">'+(conVoz?'🔊':'🔇')+'</button>'
        +'<button onclick="Visita.paso(1)">⏭</button><button class="v-x" onclick="Visita.sal()">✕</button>';
      muestra(); },
    idioma: function(l){ lang=l; if(viva) muestra(); },
    enPausa: function(){ return pausa; },
    conVoz:  function(){ return conVoz; },
    indice:  function(){ return i+1; },
    total:   function(){ return T? T.lecciones.length : 0; },
    opciones: function(){ return opc; },
    activa: function(){ return viva; }
  };
})();
