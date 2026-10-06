/* ══════════════════════════════════════════════════════════════════════
   Versión 2026.10.06-17:05:00
   EL FORMULARIO — /Salufolio/comun/formulario.js

   « Ce système est universel, on peut saisir n'importe quoi. Il suffit
     d'une table bien renseignée : type de champ, num, texte, date,
     heure, commentaire. »                          — P-H, 14/09/2026

   ESTE MÓDULO NO SABE NADA. No conoce la tensión, ni las escalas, ni
   los medicamentos. Lee una tabla, dibuja los campos que dice, comprueba
   lo que dice, y devuelve lo escrito.

   Es la doctrina de 1966: el programa no sabe, la tabla sabe.

   Y hay UNA TABLA POR OFICIO, no una para todo:
       comun/formularios/mediciones.js
       comun/formularios/escalas.js
       …

   ── CÓMO SE USA ──

       SF_FORM.pide('mediciones', 'tension', function(valores){
         // valores = { sistolica: 142, diastolica: 57, hora: "10:57" }
       });

   Devuelve un objeto conforme a lo que la tabla pedía, con sus valores.
   Nada más. Quien lo llama decide dónde ponerlo.

   ── LOS DOS MODOS ──

       todo         los campos a la vez, como un papel
       uno_a_uno    conversacional, un campo por pantalla

   Se pasa de uno a otro con un botón. Para quien tiene diez datos que
   meter, el primero; para quien duda, el segundo.
   ══════════════════════════════════════════════════════════════════════ */

var SF_FORM = window.SF_FORM = (function(){

  /* ══════════════════════════════════════════════════════════════════
     LOS TEXTOS DEL MÓDULO (P-H + Mattieu, 16/09/2026)

     « "Uno a uno" ça ne veut rien dire. Plutôt "Mode de saisie :
       [Conversationnel]". Et comme ce sont des questions, écrire
       "Question 1 / 6". »

     Mattieu découvrait ; il a vu ce qu'on ne voyait plus. Un bouton qui
     dit « uno a uno » décrit la mécanique ; « conversacional » dit ce
     qu'on va vivre.
     ══════════════════════════════════════════════════════════════════ */
  var TX = {
    es:{ modo:'Modo:', conversa:'Conversacional', formulario:'Formulario',
         tip_conversa:'Una pregunta por pantalla, como si alguien se las hiciera.',
         tip_formulario:'Todos los campos a la vez, como un papel que se rellena.',
         pregunta:'Pregunta', de:'de',
         guardar:'Guardar', siguiente:'Siguiente',
         tip_guardar:'Comprueba lo escrito y lo añade al expediente.',
         tip_siguiente:'Pasa a la pregunta siguiente. Se comprueba antes de pasar.',
         tip_atras:'Volver a la pregunta anterior.',
         voz_on:'Leer las preguntas en voz alta (activado)', voz_off:'Leer las preguntas en voz alta', repite:'Repetir la pregunta',
         obligatorio:'Hace falta', opcional:'Puede quedar vacío',
         entre:'entre', y:'y', habitual:'lo habitual está entre',
         falta:'Falta', escribe_algo:'Escriba algún dato para poder guardar.' },
    fr:{ modo:'Mode :', conversa:'Conversationnel', formulario:'Formulaire',
         tip_conversa:'Une question par écran, comme si quelqu\'un vous les posait.',
         tip_formulario:'Tous les champs à la fois, comme un papier qu\'on remplit.',
         pregunta:'Question', de:'sur',
         guardar:'Garder', siguiente:'Suivante',
         tip_guardar:'Vérifie ce qui est écrit et l\'ajoute au dossier.',
         tip_siguiente:'Passe à la question suivante. On vérifie avant de passer.',
         tip_atras:'Revenir à la question précédente.',
         voz_on:'Lire les questions à voix haute (activé)', voz_off:'Lire les questions à voix haute', repite:'Répéter la question',
         obligatorio:'Il le faut', opcional:'Peut rester vide',
         entre:'entre', y:'et', habitual:'l\'habituel va de',
         falta:'Il manque', escribe_algo:'Saisissez une donnée pour pouvoir garder.' },
    ca:{ modo:'Mode:', conversa:'Conversacional', formulario:'Formulari',
         tip_conversa:'Una pregunta per pantalla.',
         tip_formulario:'Tots els camps alhora.',
         pregunta:'Pregunta', de:'de',
         guardar:'Guardar', siguiente:'Següent',
         tip_guardar:'Comprova el que s\'ha escrit i ho afegeix a l\'expedient.',
         tip_siguiente:'Passa a la pregunta següent.',
         tip_atras:'Tornar a la pregunta anterior.',
         voz_on:'Llegir les preguntes en veu alta (activat)', voz_off:'Llegir les preguntes en veu alta', repite:'Repetir la pregunta',
         obligatorio:'Cal', opcional:'Pot quedar buit',
         entre:'entre', y:'i', habitual:'l\'habitual va de',
         falta:'Falta', escribe_algo:'Escriviu alguna dada per poder guardar.' },
    en:{ modo:'Mode:', conversa:'Conversational', formulario:'Form',
         tip_conversa:'One question per screen, as if someone were asking.',
         tip_formulario:'All the fields at once, like a paper form.',
         pregunta:'Question', de:'of',
         guardar:'Save', siguiente:'Next',
         tip_guardar:'Checks what you wrote and adds it to the record.',
         tip_siguiente:'Move to the next question. It checks before moving on.',
         tip_atras:'Back to the previous question.',
         voz_on:'Read the questions aloud (on)', voz_off:'Read the questions aloud', repite:'Repeat the question',
         obligatorio:'Required', opcional:'May be left empty',
         entre:'between', y:'and', habitual:'usually between',
         falta:'Missing', escribe_algo:'Enter some data to be able to save.' }
  };
  function tx(k){
    var lg = 'es';
    try{ if(typeof MF!=='undefined' && MF.idioma) lg = MF.idioma(); }catch(e){}
    return (TX[lg] && TX[lg][k]) || TX.es[k] || k;
  }

  /* ══ LA PREGUNTA (P-H, 06/10/2026) ══
     Un campo puede decir cómo se pregunta : « pregunta », un texto o
     { es:, fr:, ca:, en: }. Falta la lengua → la española ; falta
     « pregunta » → la etiqueta. En el modo formulario se queda la etiqueta. */
  function lg(){ var l = 'es'; try{ if(typeof MF!=='undefined' && MF.idioma) l = MF.idioma(); }catch(e){} return l; }
  function txtDe(x){
    if(x === undefined || x === null) return '';
    if(typeof x === 'object') return x[lg()] || x.es || '';
    return String(x);
  }
  function etiquetaDe(c, conversacional){
    if(conversacional){ var q = txtDe(c.pregunta); if(q) return q; }
    return c.etiqueta || c.id;
  }
  function preguntaDe(c){ return etiquetaDe(c, true); }

  /* ══ LA VOZ, EN OPCIÓN (P-H, 06/10/2026) ══
     Leer la pregunta en alto con la voz del navegador : sin red, sin
     servicio, sin cuenta — todo se queda en la máquina. Se recuerda. */
  var SF_FORM_VOZ = false;
  try{ SF_FORM_VOZ = localStorage.getItem('sf_form_voz') === '1'; }catch(e){}
  var BCP = { es:'es-ES', fr:'fr-FR', ca:'ca-ES', en:'en-GB' };
  function habla(texto){
    try{
      if(!window.speechSynthesis) return false;
      window.speechSynthesis.cancel();
      if(!texto) return true;
      var u = new SpeechSynthesisUtterance(String(texto));
      u.lang = BCP[lg()] || 'es-ES';
      var vs = window.speechSynthesis.getVoices() || [];
      var v = vs.filter(function(x){ return (x.lang || '').toLowerCase().indexOf(u.lang.slice(0,2)) === 0; })[0];
      if(v) u.voice = v;
      window.speechSynthesis.speak(u);
      return true;
    }catch(e){ return false; }
  }
  function textoVoz(c){ return txtDe(c.pregunta_voz) || preguntaDe(c); }

  var TABLAS = {};        /* las tablas ya cargadas */
  var MODO   = 'todo';    /* todo | uno_a_uno — se recuerda */
  try{ MODO = localStorage.getItem('sf_form_modo') || 'todo'; }catch(e){}

  /* ── cargar una tabla, por <script src> : va sin servidor ── */
  function carga(nombre, alListo){
    if(TABLAS[nombre]) { alListo(TABLAS[nombre]); return; }
    var v = 'SF_FORM_' + nombre.toUpperCase();

    /* ── la tabla ya está, cargada por el HTML ──
       Es lo más seguro: un <script src> en la página misma pasa sin
       servidor y sin esperar. Lo de abajo es el plan B. */
    if(typeof window[v] !== 'undefined' && window[v]){
      TABLAS[nombre] = window[v]; alListo(TABLAS[nombre]); return;
    }

    /* ── plan B : se busca. Cada programa está a una profundidad
       distinta, así que se prueban los caminos posibles. ── */
    var caminos = ['../comun/formularios/', '../../comun/formularios/',
                   'comun/formularios/', '/comun/formularios/'];
    var k = 0;
    (function prueba(){
      if(k >= caminos.length){ alListo(null); return; }
      var sc = document.createElement('script');
      sc.src = caminos[k++] + nombre + '.js';
      sc.onload = function(){
        sc.remove();
        if(typeof window[v] !== 'undefined' && window[v]){
          TABLAS[nombre] = window[v]; alListo(TABLAS[nombre]);
        } else prueba();
      };
      sc.onerror = function(){ sc.remove(); prueba(); };
      document.head.appendChild(sc);
    })();
  }

  /* ══ COMPROBAR UN VALOR contra lo que dice la tabla ══
     Devuelve null si está bien, o { grave, texto } si no.
     « las bornes elles bloquent ou elles avertissent, ça aussi c'est un
       paramètre » — P-H */
  function comprueba(campo, valor){
    var v = String(valor === undefined || valor === null ? '' : valor).trim();

    if(!v){
      return campo.obligatorio
        ? { grave:true, texto: (campo.etiqueta || campo.id) + ' hace falta.' }
        : null;
    }

    if(campo.tipo === 'num'){
      var n = parseFloat(v.replace(',', '.'));
      if(isNaN(n)) return { grave:true, texto:'« ' + v + ' » no es un número.' };
      var fuera = null;
      if(campo.min !== undefined && n < campo.min)
        fuera = 'por debajo de ' + campo.min;
      if(campo.max !== undefined && n > campo.max)
        fuera = 'por encima de ' + campo.max;
      if(fuera){
        /* bloquea o avisa, según lo que diga la tabla */
        return { grave: (campo.limite === 'bloquea'),
                 texto: n + (campo.unidad ? ' ' + campo.unidad : '') + ' está ' + fuera
                      + (campo.limite === 'bloquea' ? '.' : ' — ¿es correcto?') };
      }
      /* un rango normal, más estrecho que el límite: sólo avisa */
      if(campo.normal){
        if(n < campo.normal[0] || n > campo.normal[1])
          return { grave:false, texto:'fuera de lo habitual ('
                 + campo.normal[0] + '–' + campo.normal[1]
                 + (campo.unidad ? ' ' + campo.unidad : '') + ')' };
      }
    }

    if(campo.tipo === 'fecha' && !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(v))
      return { grave:false, texto:'una fecha se escribe 2026, 2026-09 o 2026-09-14.' };

    if(campo.tipo === 'hora' && !/^\d{1,2}:\d{2}$/.test(v))
      return { grave:false, texto:'una hora se escribe 07:15.' };

    if(campo.patron && !(new RegExp(campo.patron)).test(v))
      return { grave: !!campo.patron_bloquea,
               texto: campo.patron_dice || 'no tiene la forma esperada.' };

    return null;
  }

  /* ── dibujar UN campo, según su tipo ── */
  function dibuja(campo, valor){
    var id = '_f_' + campo.id;
    var v  = (valor !== undefined) ? valor : (campo.defecto || '');
    var com = '';

    if(campo.tipo === 'lista'){
      /* les valeurs viennent de la table, ou du dossier si « fuente » le dit */
      var vals = (campo._fuente && campo._fuente.length)
               ? campo._fuente : (campo.valores || []);
      if(campo.libre){
        /* ══ une liste qui aide sans contraindre (P-H, 14/09) ══
           On propose ce qu'on connaît, mais on peut écrire autre chose. */
        com = '<input type="text" id="' + id + '" class="sf-campo" list="' + id + '_l"'
            + ' value="' + String(v).replace(/"/g,'&quot;') + '" autocomplete="off"'
            + (campo.ejemplo ? ' placeholder="' + campo.ejemplo + '"' : '') + '>'
            + '<datalist id="' + id + '_l">'
            + vals.map(function(x){
                var val = (typeof x === 'object') ? x.valor : x;
                var et  = (typeof x === 'object') ? (x.etiqueta || x.valor) : '';
                return '<option value="' + String(val).replace(/"/g,'&quot;') + '"'
                     + (et && et !== val ? '>' + et : '>') + '</option>';
              }).join('')
            + '</datalist>';
      } else {
        com = '<select id="' + id + '" class="sf-campo">'
            + (campo.obligatorio ? '' : '<option value="">—</option>')
            + vals.map(function(x){
                var val = (typeof x === 'object') ? x.valor : x;
                var et  = (typeof x === 'object') ? (x.etiqueta || x.valor) : x;
                return '<option value="' + val + '"'
                     + (String(v) === String(val) ? ' selected' : '') + '>' + et + '</option>';
              }).join('')
            + '</select>';
      }
    }
    else if(campo.tipo === 'texto_largo'){
      com = '<textarea id="' + id + '" class="sf-campo" rows="3">'
          + String(v).replace(/</g,'&lt;') + '</textarea>';
    }
    else if(campo.tipo === 'si_no'){
      com = '<label class="sf-sino"><input type="checkbox" id="' + id + '"'
          + (v ? ' checked' : '') + '><span>' + (campo.dice || 'sí') + '</span></label>';
    }
    else if(campo.tipo === 'momentos'){
      /* ══ los cinco momentos de la GVA (P-H, 14/09) ══
         Al levantarse, desayuno, comida, cena, noche. « Pauta » dice
         cuánto; esto dice CUÁNDO — y para quien cuida, es lo que manda. */
      var MOM = [['levantar','\ud83c\udf05','Al levantarse'],
                 ['desayuno','\u2615','Desayuno'],
                 ['comida','\ud83c\udf7d','Comida'],
                 ['cena','\ud83c\udf06','Cena'],
                 ['noche','\ud83c\udf19','Noche']];
      var puesto = String(v||'').split('-');
      com = '<div class="sf-momentos" id="' + id + '">'
        + MOM.map(function(m,k){
            return '<label class="sf-mom" data-tiptext="' + m[2] + '">'
                 + '<input type="checkbox" data-mom="' + m[0] + '"'
                 + (puesto[k] === '1' ? ' checked' : '') + '><span>' + m[1] + '</span></label>';
          }).join('')
        + '</div>';
    }
    else {
      var t = { num:'text', fecha:'date', hora:'time' }[campo.tipo] || 'text';
      /* une date approximative reste possible si la table le dit */
      if(campo.tipo === 'fecha' && campo.aproximada) t = 'text';
      com = '<input type="' + t + '" id="' + id + '" class="sf-campo"'
          + ' value="' + String(v).replace(/"/g,'&quot;') + '"'
          + (campo.ejemplo ? ' placeholder="' + campo.ejemplo + '"' : '')
          + (campo.tipo === 'num' ? ' inputmode="decimal"' : '') + '>';
    }

    /* ══ CE QU'ON ATTEND DU CHAMP, ET CE QUI SERA VÉRIFIÉ ══
       « Pour les champs à saisir, il me demande les tooltips explicatifs
         et les contrôles effectués. »          — Mattieu, 16/09/2026

       Ce qui se vérifie ne doit pas être une surprise. La table le sait ;
       il suffit de le dire. */
    var dice = [];
    dice.push(campo.obligatorio ? tx('obligatorio') : tx('opcional'));
    if(campo.min !== undefined && campo.max !== undefined)
      dice.push(tx('entre') + ' ' + campo.min + ' ' + tx('y') + ' ' + campo.max
              + (campo.unidad ? ' ' + campo.unidad : '')
              + (campo.limite === 'bloquea' ? ' ·' : ''));
    if(campo.normal)
      dice.push(tx('habitual') + ' ' + campo.normal[0] + ' ' + tx('y') + ' ' + campo.normal[1]);
    if(campo.libre) dice.push('lista abierta');
    var tip = (campo.ayuda ? campo.ayuda + ' — ' : '') + dice.join(' · ');

    return '<div class="sf-campo-caja" data-campo="' + campo.id + '" data-tiptext="'
      + String(tip).replace(/"/g,'&quot;') + '">'
      + '<label class="sf-etiqueta" for="' + id + '">' + etiquetaDe(campo, MODO === 'uno_a_uno')
      /* ══ v2 (P-H, 16/09) : PLUS DE « title » ══
         C'était l'infobulle du navigateur — elle paraissait en haut de
         l'écran et doublait la nôtre, encadrée, en bas. Deux bulles pour
         la même chose. */
      + (campo.obligatorio ? ' <span style="color:var(--warn)">*</span>' : '')
      + (campo.unidad ? ' <span style="opacity:.6">(' + campo.unidad + ')</span>' : '')
      + '</label>'
      + com
      + (campo.ayuda ? '<div class="sf-ayuda">' + campo.ayuda + '</div>' : '')
      + '<div class="sf-regla">' + dice.join(' · ') + '</div>'
      + '<div class="sf-aviso" id="' + id + '_av"></div>'
      + '</div>';
  }

  /* ── leer lo que hay en un campo ── */
  function lee(campo){
    var e = document.getElementById('_f_' + campo.id);
    if(!e) return '';
    if(campo.tipo === 'momentos'){
      var v = Array.prototype.map.call(e.querySelectorAll('input[data-mom]'),
        function(x){ return x.checked ? '1' : '0'; }).join('-');
      return (v === '0-0-0-0-0') ? '' : v;
    }
    if(campo.tipo === 'si_no') return e.checked;
    var v = e.value;
    if(campo.tipo === 'num' && v.trim()){
      var n = parseFloat(v.replace(',', '.'));
      return isNaN(n) ? v : n;
    }
    return v;
  }

  /* ══════════════════════════════════════════════════════════════════
     PEDIR — el único punto de entrada

       SF_FORM.pide(tabla, rubrica, alTerminar, [valoresIniciales])

     alTerminar recibe el objeto con lo escrito, o null si se cancela.
     ══════════════════════════════════════════════════════════════════ */
  function pide(tabla, rubrica, alTerminar, iniciales, opciones){
    opciones = opciones || {};
    carga(tabla, function(T){
      if(!T || !T.rubricas || !T.rubricas[rubrica]){
        alert('No encuentro la rúbrica « ' + rubrica + ' » en la tabla « ' + tabla + ' ».');
        if(alTerminar) alTerminar(null);
        return;
      }
      var R = T.rubricas[rubrica];
      /* les listes qui se nourrissent du dossier : on les greffe sans
         toucher à la table, qui reste ce qu'elle est */
      var campos = (R.campos || []).map(function(c){
        if(c.fuente && opciones.fuentes && opciones.fuentes[c.id])
          return Object.assign({}, c, { _fuente: opciones.fuentes[c.id] });
        return c;
      });
      var valores = Object.assign({}, iniciales || {});
      abre(R, campos, valores, alTerminar);
    });
  }

  function abre(R, campos, valores, alTerminar){
    var paso = 0;   /* para el modo uno_a_uno */
    /* ══ UNA SOLA RESPUESTA ══
       Al guardar, v.cierra() dispara alCerrar, que decía « cancelado »
       (null) JUSTO ANTES de entregar lo escrito : quien llamaba recibía
       dos respuestas. Ahora, si se ha entregado, no se dice « cancelado ». */
    var hecho = false;

    function cuerpoTodo(){
      return (R.ayuda ? '<div class="sf-sordo">' + R.ayuda + '</div>' : '')
           + campos.map(function(c){ return dibuja(c, valores[c.id]); }).join('');
    }
    function cuerpoUno(){
      var c = campos[paso];
      return '<div class="sf-paso">' + tx('pregunta') + ' ' + (paso+1)
           + ' ' + tx('de') + ' ' + campos.length + '</div>'
           + (c.ayuda ? '' : (R.ayuda && paso===0 ? '<div class="sf-sordo">'+R.ayuda+'</div>' : ''))
           + dibuja(c, valores[c.id]);
    }

    var pie = '<button class="sf-ventana-btn sf-suave" id="_f-modo"></button>'
            + '<button class="sf-ventana-btn sf-suave" id="_f-voz">🔊</button>'
            + '<button class="sf-ventana-btn sf-suave" id="_f-repite" style="display:none">↻</button>'
            + '<span style="flex:1"></span>'
            + '<button class="sf-ventana-btn sf-suave" id="_f-atras" style="display:none">◀</button>'
            + '<button class="sf-ventana-btn" id="_f-ok"></button>';

    var v = MF.ventana(R.titulo || '', (MODO === 'todo') ? cuerpoTodo() : cuerpoUno(),
                       { ancho: R.ancho || '520px', alPie: pie,
                         alCerrar: function(){ habla(null); if(!hecho && alTerminar) alTerminar(null); } });

    var bModo  = v.caja.querySelector('#_f-modo');
    var bVoz   = v.caja.querySelector('#_f-voz');
    var bRep   = v.caja.querySelector('#_f-repite');
    var bAtras = v.caja.querySelector('#_f-atras');
    var bOk    = v.caja.querySelector('#_f-ok');
    var cuerpo = v.caja.querySelector('.sf-ventana-cuerpo');

    /* ══ « GUARDAR » SÓLO CUANDO HAY QUE GUARDAR (P-H, 05/10/2026) ══
       « Ne valider que s'il y a des données entrées. » Sin contador ni
       memoria : cada vez se mira el estado de TODOS los campos.
         activo  =  todos los obligatorios bien  Y  algún campo útil escrito
       (ni la fecha, ni la hora, ni un valor propuesto por defecto cuentan
       como dato). Se borra el dato, vuelve a apagarse. */
    function esUltimo(){ return (MODO === 'todo' || paso === campos.length - 1); }
    function valorDe(c){
      return document.getElementById('_f_' + c.id) ? lee(c) : valores[c.id];
    }
    function esUtil(c, x){
      if(c.tipo === 'fecha' || c.tipo === 'hora') return false;
      if(x === '' || x === undefined || x === null || x === false) return false;
      if(c.defecto !== undefined && String(x) === String(c.defecto)) return false;
      return true;
    }
    function revisa(){
      var lista = esUltimo() ? campos : [campos[paso]];
      var faltan = [], hayUtil = false;
      lista.forEach(function(c){
        var x = valorDe(c), mal = comprueba(c, x);
        if(mal && mal.grave){
          var vacio = String(x === undefined || x === null ? '' : x).trim() === '';
          faltan.push(vacio ? (c.etiqueta || c.id) : mal.texto);
        }
        if(esUtil(c, x)) hayUtil = true;
      });
      return { ok: faltan.length === 0 && (!esUltimo() || hayUtil), faltan: faltan };
    }
    function refrescaBoton(){
      var r = revisa();
      bOk.disabled = !r.ok;
      bOk.style.opacity = r.ok ? '' : '.4';
      bOk.style.cursor  = r.ok ? '' : 'default';
      var z = document.getElementById('_f-falta');
      if(z) z.textContent = r.ok ? ''
        : (r.faltan.length ? (tx('falta') + ' : ' + r.faltan.join(' · ')) : tx('escribe_algo'));
    }

    function pinta(){
      cuerpo.innerHTML = (MODO === 'todo') ? cuerpoTodo() : cuerpoUno();
      /* « Mode : [Conversationnel] » dit ce qu'on va vivre ; « uno a
         uno » décrivait la mécanique. (Mattieu, 16/09) */
      bModo.innerHTML = '<span style="opacity:.65;font-size:.9em">' + tx('modo')
        + '</span> ' + ((MODO === 'todo') ? tx('conversa') : tx('formulario'));
      if(typeof MF!=='undefined' && MF.tip)
        MF.tip(bModo, (MODO === 'todo') ? tx('tip_conversa') : tx('tip_formulario'));
      bAtras.style.display = (MODO === 'uno_a_uno' && paso > 0) ? 'inline-block' : 'none';
      var ultimo = esUltimo();
      bOk.textContent = ultimo ? ('✓ ' + tx('guardar')) : (tx('siguiente') + ' ▶');
      if(typeof MF!=='undefined' && MF.tip){
        MF.tip(bOk, ultimo ? tx('tip_guardar') : tx('tip_siguiente'));
        MF.tip(bAtras, tx('tip_atras'));
      }
      cuerpo.insertAdjacentHTML('beforeend',
        '<div id="_f-falta" style="font-size:11.5px;color:var(--muted);margin-top:6px;min-height:16px"></div>');
      /* el primer campo, listo */
      var pr = cuerpo.querySelector('.sf-campo');
      if(pr && pr.focus) pr.focus();
      /* chaque champ porte son infobulle */
      if(typeof MF!=='undefined' && MF.tip)
        cuerpo.querySelectorAll('[data-tiptext]').forEach(function(e){
          var t2 = e.getAttribute("data-tiptext");
          if(t2) MF.tip(e, t2);
        });
      /* se comprueba al salir del campo */
      campos.forEach(function(c){
        var e = document.getElementById('_f_' + c.id);
        if(!e) return;
        e.addEventListener('input',  refrescaBoton);
        e.addEventListener('change', refrescaBoton);
        e.addEventListener('blur', function(){
          valores[c.id] = lee(c);
          avisa(c, comprueba(c, valores[c.id]));
        });
        e.addEventListener('keydown', function(ev){
          if(ev.key === 'Enter' && c.tipo !== 'texto_largo'){ ev.preventDefault(); bOk.click(); }
        });
      });
      /* la voz : solo tiene sentido con UNA pregunta en pantalla */
      var hayVoz = !!window.speechSynthesis;
      bVoz.style.display = (hayVoz && MODO === 'uno_a_uno') ? 'inline-block' : 'none';
      bVoz.textContent = SF_FORM_VOZ ? '🔊' : '🔇';
      bVoz.style.opacity = SF_FORM_VOZ ? '' : '.55';
      bRep.style.display = (hayVoz && MODO === 'uno_a_uno' && SF_FORM_VOZ) ? 'inline-block' : 'none';
      if(typeof MF!=='undefined' && MF.tip){
        MF.tip(bVoz, SF_FORM_VOZ ? tx('voz_on') : tx('voz_off'));
        MF.tip(bRep, tx('repite'));
      }
      if(SF_FORM_VOZ && MODO === 'uno_a_uno') habla(textoVoz(campos[paso]));
      else if(window.speechSynthesis) window.speechSynthesis.cancel();
      refrescaBoton();
    }

    function avisa(c, mal){
      var z = document.getElementById('_f_' + c.id + '_av');
      if(!z) return;
      z.innerHTML = mal
        ? '<span style="color:' + (mal.grave ? 'var(--danger)' : 'var(--warn)') + '">'
          + (mal.grave ? '✕ ' : '⚠ ') + mal.texto + '</span>'
        : '';
      var caja = z.closest('.sf-campo-caja');
      if(caja) caja.classList.toggle('sf-malo', !!(mal && mal.grave));
    }

    bModo.onclick = function(){
      MODO = (MODO === 'todo') ? 'uno_a_uno' : 'todo';
      try{ localStorage.setItem('sf_form_modo', MODO); }catch(e){}
      paso = 0; pinta();
    };
    bAtras.onclick = function(){ if(paso > 0){ paso--; pinta(); } };
    bVoz.onclick = function(){
      SF_FORM_VOZ = !SF_FORM_VOZ;
      try{ localStorage.setItem('sf_form_voz', SF_FORM_VOZ ? '1' : '0'); }catch(e){}
      pinta();
    };
    bRep.onclick = function(){ habla(textoVoz(campos[paso])); };
    /* ══ UN CLIC QUE NO SE PIERDE ══
       Al pulsar un botón del pie, el campo pierde el foco, su aviso
       aparece (« hace falta »), la ventana crece o se encoge, el botón
       se mueve bajo el dedo y el clic cae en el vacío. Se impide que el
       botón robe el foco : el campo se queda donde está. */
    [bModo, bVoz, bRep, bAtras, bOk].forEach(function(b){
      b.addEventListener('mousedown', function(e){ e.preventDefault(); });
    });

    bOk.onclick = function(){
      if(bOk.disabled) return;
      /* on lit et on vérifie ce qui est à l'écran */
      var aComprobar = (MODO === 'todo') ? campos : [campos[paso]];
      var grave = false;
      aComprobar.forEach(function(c){
        valores[c.id] = lee(c);
        var mal = comprueba(c, valores[c.id]);
        avisa(c, mal);
        if(mal && mal.grave) grave = true;
      });
      if(grave) return;

      if(MODO === 'uno_a_uno' && paso < campos.length - 1){ paso++; pinta(); return; }

      /* c'est fini : on rend l'objet, rien de plus */
      var salida = {};
      campos.forEach(function(c){
        var x = valores[c.id];
        if(x !== '' && x !== undefined && x !== null) salida[c.id] = x;
      });
      habla(null);
      hecho = true;
      v.cierra();
      if(alTerminar) alTerminar(salida);
    };

    pinta();
  }

  /* ── las rúbricas que una tabla ofrece, para hacer un menú ── */
  function rubricas(tabla, alListo){
    carga(tabla, function(T){
      if(!T || !T.rubricas){ alListo([]); return; }
      alListo(Object.keys(T.rubricas).map(function(k){
        return { id:k, titulo: T.rubricas[k].titulo || k,
                 icono: T.rubricas[k].icono || '',
                 campos: (T.rubricas[k].campos || []).length };
      }));
    });
  }

  return { pide: pide, rubricas: rubricas, comprueba: comprueba, carga: carga,
           habla: habla, texto: txtDe, pregunta: preguntaDe, tx: tx,
           voz: function(b){ if(b !== undefined){ SF_FORM_VOZ = !!b;
             try{ localStorage.setItem('sf_form_voz', SF_FORM_VOZ ? '1' : '0'); }catch(e){} } return SF_FORM_VOZ; },
           modo: function(m){ if(m){ MODO = m;
             try{ localStorage.setItem('sf_form_modo', m); }catch(e){} } return MODO; } };
})();
