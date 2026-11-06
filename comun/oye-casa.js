/* ══════════════════════════════════════════════════════════════════════
   OYE A LA CASA — /Salufolio/comun/oye-casa.js
   Versión 2026.11.05-16:09:14

   « La palette ne s'applique pas à Help ? »            — P-H, 04/11/2026
   « ça me paraît incohérent quand on a des modules où la palette est
     appliquée et d'autres non. »

   La casa manda la lengua y la paleta a lo que muestra en su cuadro.
   Los programas las oyen gracias a MF.arranca ; las páginas que no
   arrancan así — las ayudas (<módulo>.help.html), el diario de cambios —
   no oían nada : la casa cambiaba alrededor, el cuadro se quedaba igual.

   Una línea basta en esas páginas :  <script src="…/comun/oye-casa.js">
     · paleta : se ponen las variables que manda la casa — ningún color
       vive aquí, todos vienen de la tabla de la casa (casa/casa.js) ;
     · lengua : se llama a la función de la página, si tiene una
       (window.alIdiomaCasa, o pon() en la ayuda de la casa) ;
     · abierta sola, sin casa : la paleta que el usuario dejó elegida ;
     · burbujas : todo elemento con data-tip recibe la burbuja de la casa
       (MF.tip), nunca la del navegador.
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  var aqui = (document.currentScript && document.currentScript.src) || '';
  var base = aqui.replace(/[^\/]*$/, '');                 /* …/comun/ */
  var raiz = document.documentElement;

  function ponColores(v){
    Object.keys(v || {}).forEach(function(k){ raiz.style.setProperty(k, v[k]); });
  }
  function carga(src, ok){
    var s = document.createElement('script'); s.src = src;
    s.onload = ok; s.onerror = function(){};
    document.head.appendChild(s);
  }

  /* lo que dice la casa */
  window.addEventListener('message', function(ev){
    var d = ev.data || {};
    if(d.de !== 'lanzador') return;
    if(d.tipo === 'paleta' && d.v){ ponColores(d.v); return; }
    if(d.tipo === 'idioma' && d.idioma){
      var f = window.alIdiomaCasa || window.pon;
      if(typeof f === 'function') try{ f(d.idioma); }catch(e){}
    }
  });

  /* abierta sola : la paleta elegida, sacada de la tabla de la casa */
  if(window.parent === window){
    var elegida = null;
    try{ elegida = localStorage.getItem('sf_paleta'); }catch(e){}
    var viste = function(){
      var L = window.SF_LANZADOR; if(!L) return;
      var id = elegida || L.paleta_defecto;
      var p = (L.paletas || []).filter(function(x){ return x.id === id; })[0];
      if(p) ponColores(p.v);
    };
    if(window.SF_LANZADOR) viste(); else carga(base + '../casa/casa.js', viste);
  }

  /* las burbujas de la casa */
  function burbujas(){
    var L = document.querySelectorAll('[data-tip]');
    if(!L.length) return;
    var pon = function(){ L.forEach(function(e){ MF.tip(e, e.getAttribute('data-tip')); }); };
    if(window.MF && MF.tip) pon();
    else carga(base + 'mf.js', function(){ if(window.MF && MF.tip) pon(); });
  }
  /* Échap dentro de la ayuda : se dice a la casa, que cierra la ventana (P-H, 05/11/2026) */
  if(window.parent !== window) document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') try{ window.parent.postMessage({de:'ayuda', tipo:'escape'}, '*'); }catch(x){}
  });

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', burbujas);
  else burbujas();
})();
