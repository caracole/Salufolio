/* ══════════════════════════════════════════════════════════════════════
   Versión 2026.10.06-10:29:13
   LAS AYUDAS — /Salufolio/comun/ayuda.js

   « Le ? va sur err 404 », « les textes gris sur fond blanc ne se voient
     pas », « je clique sur Idioma FR, toujours affiché en espagnol »
                                                  — P-H, 06/10/2026

   Una ayuda es una página dentro del cuadro de la casa. Antes cada una
   se las arreglaba sola, y ninguna oía a la casa : ni la lengua que se
   cambiaba, ni la paleta que se escogía. Este módulo es lo que todas
   tienen en común, escrito UNA vez.

   ── CÓMO SE USA, en la página de ayuda ──

       <div id="lg"></div><div class="env" id="c"></div>
       <script src="../comun/ayuda.js"></script>
       <script>
         var A = { es:'<h1>…</h1>…', fr:'…', ca:'…', en:'…' };
         SF_AYUDA.arranca(A);
       </script>

   La página dice QUÉ se dice (una tabla por lengua). Este módulo sabe
   CUÁNDO y CÓMO : elige la lengua, oye a la casa, y se viste de su paleta.

   ── LO QUE OYE ──
     · ?idioma=fr en la dirección : la lengua con que la casa la abre
     · {tipo:'idioma'}  : la lengua cambia con la ayuda ya abierta
     · {tipo:'paleta'}  : los colores de la casa (el cuadro no tiene la
                          tabla de las paletas — vive en el lanzador)
   Una lengua que la página no tiene cae en español, sin error.
   ══════════════════════════════════════════════════════════════════════ */
var SF_AYUDA = window.SF_AYUDA = (function(){

  var LENGUAS = [['es','🇪🇸'], ['ca','🏳️'],
                 ['fr','🇫🇷'], ['en','🇬🇧']];
  var TEXTOS = null;

  function deLaDireccion(){
    try{ return new URLSearchParams(location.search).get('idioma') || ''; }catch(e){ return ''; }
  }
  function deLaMemoria(){
    try{ return localStorage.getItem('sf_idioma') || ''; }catch(e){ return ''; }
  }

  function pon(l){
    if(!TEXTOS) return;
    if(!TEXTOS[l]) l = 'es';
    var c = document.getElementById('c');
    if(c) c.innerHTML = TEXTOS[l];
    document.documentElement.lang = l;
    document.querySelectorAll('#lg button').forEach(function(b){
      b.classList.toggle('on', b.dataset.l === l); });
    try{ localStorage.setItem('sf_idioma', l); }catch(e){}
  }

  /* la paleta de la casa : sólo se ponen las variables, nunca un color */
  function paleta(v){
    if(!v) return;
    var r = document.documentElement.style;
    Object.keys(v).forEach(function(k){ r.setProperty(k, v[k]); });
    /* la paleta dice --accent-m ; las páginas leen --accent */
    if(v['--accent-m']) r.setProperty('--accent', v['--accent-m']);
  }

  /* la casa habla : sólo se le hace caso a ella, y a nadie más */
  window.addEventListener('message', function(ev){
    var d = ev.data;
    if(!d || d.de !== 'lanzador' || ev.source !== window.parent) return;
    if(d.tipo === 'idioma') pon(d.idioma);
    if(d.tipo === 'paleta') paleta(d.v);
  });

  function arranca(textos){
    TEXTOS = textos;
    /* las banderas de la página, vestidas con las variables de la casa */
    var st = document.createElement('style');
    st.textContent = '#lg{position:fixed;top:12px;right:16px;display:flex;gap:5px;z-index:10}'
      + '#lg button{border:1px solid var(--border);background:var(--surface);border-radius:7px;'
      + 'padding:3px 8px;cursor:pointer;font-size:14px;opacity:.5;transition:all .18s}'
      + '#lg button.on{opacity:1;border-color:var(--accent)}';
    document.head.appendChild(st);
    var lg = document.getElementById('lg');
    if(lg){
      lg.innerHTML = LENGUAS.map(function(x){
        return '<button data-l="' + x[0] + '">' + x[1] + '</button>'; }).join('');
      lg.querySelectorAll('button').forEach(function(b){
        b.onclick = function(){ pon(b.dataset.l); }; });
    }
    /* la casa manda sobre la memoria : si abre la ayuda en francés, es francés */
    pon(deLaDireccion() || deLaMemoria() || 'es');
  }

  return { arranca: arranca, pon: pon, paleta: paleta };
})();
