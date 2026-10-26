/* ══════════════════════════════════════════════════════════════════════
   VISITAS — EL CONTADOR DE LA CASA  (P-H, 25/10/2026)   versión 2026.10.25-18:35:54

   Cuenta, de forma anónima y sin cookies, las visitas a la Casa y los
   programas que se abren dentro. Usa GoatCounter. Todo lo que debe saber
   (código, rutas, textos) viene de visitas-datos.js ; aquí no hay nada en
   duro.

   QUIÉN LO USA
     · La Casa lo carga una vez y llama  SF_VISITAS_CUENTA('modulo', id)
       cuando se abre un programa. Los programas NO lo cargan : viven en un
       marco de la Casa, y contarían dos veces.

   CUÁNDO NO CUENTA (y no carga nada de fuera)
     · « activo » : false en la tabla.
     · Página abierta como fichero, o desde un host de la lista
       « excluir_hosts » (localhost…).
     · Navegador apagado por su dueño (marca « skipgc » en su
       localStorage) : se apaga con  …/casa/#visitas-no , se enciende con
       #visitas-si.
     · Nunca lanza : si algo falla, la Casa sigue como si nada.
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  var C = window.SF_VISITAS;
  /* Sin tabla, nada : la Casa no depende de este módulo. */
  if(!C){ window.SF_VISITAS_CUENTA = function(){}; return; }

  function lang(){
    var l = (typeof LANG !== 'undefined' && LANG) || document.documentElement.lang || 'es';
    return (C.textos && C.textos[l]) ? l : 'es';
  }

  /* ── el interruptor de este navegador (se atiende ANTES de decidir) ── */
  try{
    var I = C.interruptores || {};
    var h = location.hash;
    if(h && (h === I.apagar || h === I.encender)){
      if(h === I.apagar) localStorage.setItem(C.marca_exclusion, 't');
      else               localStorage.removeItem(C.marca_exclusion);
      var T = (C.textos && C.textos[lang()]) || {};
      history.replaceState(null, '', location.pathname + location.search);
      setTimeout(function(){ try{ alert(h === I.apagar ? T.apagado : T.encendido); }catch(e){} }, 50);
    }
  }catch(e){}

  /* ── ¿se cuenta en esta página ? ── */
  var cuenta = false;
  try{
    cuenta = C.activo === true
      && /^https?:$/.test(location.protocol)
      && (C.excluir_hosts || []).indexOf(location.hostname) < 0
      && localStorage.getItem(C.marca_exclusion) !== 't';
  }catch(e){ cuenta = false; }

  if(!cuenta){ window.SF_VISITAS_CUENTA = function(){}; return; }

  /* ── los eventos que llegan antes de que el contador esté cargado esperan ── */
  var cola = [], listo = false;
  function envia(e){
    try{ window.goatcounter.count({ path: e.path, title: e.title, event: true }); }catch(x){}
  }

  window.SF_VISITAS_CUENTA = function(tipo, id){
    try{
      var plantilla = C.eventos && C.eventos[tipo];
      if(!plantilla) return;                        /* vacío en la tabla = no se cuenta */
      var e = { path: String(plantilla).replace('{id}', id == null ? '' : id), title: String(id || tipo) };
      if(listo) envia(e); else cola.push(e);
    }catch(x){}
  };

  /* ── el contador de GoatCounter (cuenta por sí mismo la apertura de la Casa) ── */
  try{
    var s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-goatcounter', C.endpoint);
    s.onload = function(){ listo = true; cola.splice(0).forEach(envia); };
    s.onerror = function(){ cola.length = 0; };      /* bloqueado (antivirus, extensión) : en silencio */
    s.src = C.script;
    document.head.appendChild(s);
  }catch(e){}
})();
