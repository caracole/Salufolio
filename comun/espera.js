/* ═══════════════════════════════════════════════════════════════════════
   LA ESPERA — comun/espera.js
   Versión 2026.11.13-16:53:42
   (13/11/2026, P-H : « mets-le dans comun pour en profiter partout » — EL RELOJ de la
    espera, tomado del Informe express : el ⏳ que gira y los segundos que suben.
      var r = SF_ESPERA.reloj(contenedor, 'texto', { segundos:'lado'|'debajo'|'encima' });  …  r.para();
    « les secondes peuvent être à côté, dessous ou dessus le sablier » : un ajuste, no el código.)
   (P-H, 11/11/2026 : « Il s'écoule un certain temps au chargement des modules, des pdf,
    au moins la première fois. Est-il possible de faire patienter ? » — « la coquille du
    blason qui tourne lentement ».)
   Una sola mecánica para toda la casa :
     var e = SF_ESPERA.muestra(contenedor, 'modulo' | 'documento');   …   e.cierra();
     SF_ESPERA.marco(iframe, contenedor)   la Casa : se cierra sola cuando el módulo ha cargado
     SF_ESPERA.cierraTodo()
   No se enseña nada antes de retraso_ms : si el fichero ya estaba en el navegador, no parpadea.
   La imagen, los tiempos y los textos vienen de espera.idiomas.js ; los colores, de la paleta.
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
  if (window.SF_ESPERA) return;
  var SCRIPT = document.currentScript, BASE = SCRIPT ? SCRIPT.src.replace(/espera\.js(\?.*)?$/, '') : '../comun/';
  /* la tabla, si la página no la ha cargado ya */
  if (!window.SF_ESPERA_TABLA) { var s = document.createElement('script'); s.charset = 'utf-8'; s.src = BASE + 'espera.idiomas.js'; document.head.appendChild(s); }
  function T(){ return window.SF_ESPERA_TABLA || { imagen: 'concha.svg', retraso_ms: 300, vuelta_s: 4, tamano_px: 72, textos: {} }; }
  function lengua(){ var l = ''; try { l = (window.MF && MF.idioma && MF.idioma()) || ''; } catch (e) {} return l || window.LANG || 'es'; }
  function tx(k){ var X = T().textos || {}, l = lengua(); return (X[l] && X[l][k]) || (X.es && X.es[k]) || ''; }
  var estiloPuesto = false;
  function ponEstilo(){
    if (estiloPuesto) return; estiloPuesto = true;
    var t = T(), st = document.createElement('style');
    st.textContent =
      '.sf-espera{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;'
      + 'background:color-mix(in srgb, var(--bg) 70%, transparent);z-index:99990;opacity:0;transition:opacity .25s;pointer-events:none}'
      + '.sf-espera.fija{position:fixed}'
      + '.sf-espera.ve{opacity:1}'
      + '.sf-espera img{width:' + (t.tamano_px || 72) + 'px;height:' + (t.tamano_px || 72) + 'px;animation:sf-espera-gira ' + (t.vuelta_s || 4) + 's linear infinite}'
      + '.sf-espera span{font-size:15px;color:var(--text);background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:4px 12px}'
      + '@keyframes sf-espera-gira{to{transform:rotate(360deg)}}'
      /* EL RELOJ (13/11/2026) : el sablier del Informe, para todos */
      + '.sf-reloj{display:inline-flex;align-items:center;gap:8px;color:var(--text)}'
      + '.sf-reloj-debajo,.sf-reloj-encima{flex-direction:column;gap:4px;text-align:center}'
      + '.sf-reloj-encima .sf-reloj-seg{order:-1}'
      + '.sf-reloj-ico{display:inline-block;line-height:1;animation:sf-espera-gira ' + (((t.reloj || {}).vuelta_s) || 2) + 's linear infinite}'
      + '.sf-reloj-seg{font-family:var(--mono,monospace);color:var(--muted);font-size:.85em;min-width:3ch}'
      + '@media (prefers-reduced-motion: reduce){.sf-espera img{animation-duration:' + ((t.vuelta_s || 4) * 3) + 's}}';
    document.head.appendChild(st);
  }
  var vivas = [];
  function muestra(cont, clase){
    ponEstilo();
    cont = cont || document.body;
    var fija = (cont === document.body);
    if (!fija && getComputedStyle(cont).position === 'static') cont.style.position = 'relative';
    var d = document.createElement('div'); d.className = 'sf-espera' + (fija ? ' fija' : '');
    d.innerHTML = '<img alt="" src="' + BASE + (T().imagen || 'concha.svg') + '"><span></span>';
    d.querySelector('span').textContent = tx(clase || 'modulo');
    var h = { cerrada: false, cierra: function(){ if (h.cerrada) return; h.cerrada = true; clearTimeout(h.t); d.remove(); vivas = vivas.filter(function(x){ return x !== h; }); } };
    h.t = setTimeout(function(){ if (h.cerrada) return; cont.appendChild(d); requestAnimationFrame(function(){ d.classList.add('ve'); }); }, T().retraso_ms || 300);
    vivas.push(h);
    setTimeout(h.cierra, 120000);                     /* nunca más de dos minutos, pase lo que pase */
    return h;
  }
  function marco(iframe, cont){
    cierraTodo();
    var h = muestra(cont || iframe.parentNode, 'modulo');
    var fin = function(){ iframe.removeEventListener('load', fin); h.cierra(); };
    iframe.addEventListener('load', fin);
    return h;
  }
  /* ══ EL RELOJ (P-H, 13/11/2026) ══ un ⏳ que gira, un texto, los segundos que suben.
     cont   : donde se pone (se vacía, salvo opc.anadir)
     opc.segundos : 'lado' | 'debajo' | 'encima' — si no, el de la tabla (reloj.segundos)
     opc.tamano_px : el tamaño del ⏳ — si no, el de la tabla
     Devuelve { el, para(), segundos() }. */
  function reloj(cont, texto, opc){
    ponEstilo(); opc = opc || {};
    var R = T().reloj || {}, pos = opc.segundos || R.segundos || 'lado';
    var d = document.createElement('span'); d.className = 'sf-reloj sf-reloj-' + pos;
    d.innerHTML = '<span class="sf-reloj-ico"></span><span class="sf-reloj-txt"></span><span class="sf-reloj-seg"></span>';
    var ico = d.querySelector('.sf-reloj-ico'), seg = d.querySelector('.sf-reloj-seg');
    ico.textContent = R.icono || '\u23f3';
    ico.style.fontSize = (opc.tamano_px || R.tamano_px || 18) + 'px';
    d.querySelector('.sf-reloj-txt').textContent = texto || '';
    if (!opc.anadir) cont.innerHTML = '';
    cont.appendChild(d);
    var t0 = Date.now(), formato = R.formato || '{s} s';
    function pinta(){ seg.textContent = formato.replace('{s}', Math.floor((Date.now() - t0) / 1000)); }
    pinta();
    var iv = setInterval(function(){ if (!d.isConnected){ clearInterval(iv); return; } pinta(); }, 1000);
    return { el: d, para: function(){ clearInterval(iv); }, segundos: function(){ return Math.floor((Date.now() - t0) / 1000); } };
  }
  function cierraTodo(){ vivas.slice().forEach(function(h){ h.cierra(); }); }
  window.SF_ESPERA = { muestra: muestra, marco: marco, cierraTodo: cierraTodo, reloj: reloj };
})();
