/* ══════════════════════════════════════════════════════════════════════
   EL COMENTARIO DE LA IA — /Salufolio/comun/comentario-ia.js
   Versión 2026.11.05-16:24:58
   (05/11/2026 : imprime() acepta o.cuerpo y o.css — una hoja ya compuesta.)
   (05/11/2026 : el pie de cada página impresa ; el modelo viene de comun/modelos-ia.js.)
   (05/11/2026 : pide(d, series, op) — otro prompt y sus huecos, para el constat de un año.)
   (04/11/2026, tarde : la ventana en tres pisos — SF_COMENTARIO_IA.ventana().)
   (04/11/2026, tarde : la hoja impresa — SF_COMENTARIO_IA.imprime() ; resumen() de lo enviado.)
   (04/11/2026, tarde : la curva en su propio piso de altura fija — se acabó el vaivén.)

   « Curvas — le commentaire clinique ne fonctionne pas — muet. »
                                                        — P-H, 04/11/2026
   « Le sexe et l'âge, et aussi les diagnostics du dossier, bien que cela
     pourrait faire l'objet d'une option au moment de la sollicitation. »

   Courbes había heredado de la V1 la ventana del comentario, pero no la
   maquinaria. Aquí está, UNA vez, para Courbes y — más adelante — para la
   Tabla. Lo que cambia respecto de la V1 :
     · el prompt vive fuera del código (comun/prompt-comentario-curva.js) ;
     · el contexto del paciente sale de SU expediente — sexo, edad y, si se
       marca la casilla, sus diagnósticos y antecedentes activos — y no de
       una frase escrita para una sola paciente ;
     · nada que identifique a la persona sale nunca : ni nombre, ni SIP,
       ni historia ; solo el contexto y las series de valores ;
     · la respuesta viene en la lengua de la casa ;
     · la clave es la única de Salufolio (MF.claveIA) ;
     · los textos, en las cuatro lenguas, sin la palabra « Claude ».
   Los comentarios se guardan en ESTE navegador, por paciente y por curva
   (Courbes no escribe en el expediente).
   ══════════════════════════════════════════════════════════════════════ */
var SF_COMENTARIO_IA = window.SF_COMENTARIO_IA = (function(){

  var TX = {
    envia:      { es:'Se envía a la IA :', fr:'Envoyé à l’IA :', ca:'S’envia a la IA :', en:'Sent to the AI:' },
    mujer:      { es:'mujer', fr:'femme', ca:'dona', en:'woman' },
    hombre:     { es:'hombre', fr:'homme', ca:'home', en:'man' },
    sin_sexo:   { es:'sexo no indicado', fr:'sexe non indiqué', ca:'sexe no indicat', en:'sex not stated' },
    anos:       { es:'{n} años', fr:'{n} ans', ca:'{n} anys', en:'{n} years old' },
    anos_aprox: { es:'unos {n} años', fr:'environ {n} ans', ca:'uns {n} anys', en:'about {n} years old' },
    sin_edad:   { es:'edad no indicada', fr:'âge non indiqué', ca:'edat no indicada', en:'age not stated' },
    con_dx:     { es:'con los diagnósticos y antecedentes del expediente ({n})', fr:'avec les diagnostics et antécédents du dossier ({n})',
                  ca:'amb els diagnòstics i antecedents de l’expedient ({n})', en:'with the record’s diagnoses and history ({n})' },
    sin_dx:     { es:'ningún diagnóstico en el expediente', fr:'aucun diagnostic dans le dossier', ca:'cap diagnòstic a l’expedient', en:'no diagnosis in the record' },
    nada_mas:   { es:'Nada más : ni el nombre, ni el SIP, ni la historia.', fr:'Rien d’autre : ni le nom, ni le SIP, ni le numéro d’historia.',
                  ca:'Res més : ni el nom, ni el SIP, ni la història.', en:'Nothing else: no name, no SIP, no record number.' },
    consultando:{ es:'Consultando…', fr:'Consultation…', ca:'Consultant…', en:'Asking…' },
    error:      { es:'No se pudo obtener el comentario ({msg}). Reintente o revise su clave.', fr:'Le commentaire n’a pas pu être obtenu ({msg}). Réessayez ou vérifiez votre clé.',
                  ca:'No s’ha pogut obtenir el comentari ({msg}). Torneu-ho a provar o reviseu la clau.', en:'The comment could not be obtained ({msg}). Try again or check your key.' },
    se_guarda:  { es:'se guarda en este navegador', fr:'il est conservé dans ce navigateur', ca:'es guarda en aquest navegador', en:'kept in this browser' },
    marcador:   { es:'Preguntas sugeridas para el médico:', fr:'Questions suggérées pour le médecin :', ca:'Preguntes suggerides per al metge:', en:'Suggested questions for the doctor:' },
    lengua:     { es:'español', fr:'francés', ca:'valenciano', en:'inglés' },
    imp_paciente:{ es:'Paciente', fr:'Patient', ca:'Pacient', en:'Patient' },
    imp_impreso: { es:'Impreso el {f}', fr:'Imprimé le {f}', ca:'Imprés el {f}', en:'Printed on {f}' },
    imp_tit:     { es:'Imprimir', fr:'Imprimer', ca:'Imprimir', en:'Print' },
    imp_nombre:  { es:'Añadir el nombre del paciente', fr:'Ajouter le nom du patient', ca:'Afegir el nom del pacient', en:'Add the patient’s name' },
    imp_sip:     { es:'Añadir el SIP', fr:'Ajouter le SIP', ca:'Afegir el SIP', en:'Add the SIP number' },
    imp_sin:     { es:'Sin estas casillas la hoja no dice de quién es : se puede enseñar.', fr:'Sans ces cases, la feuille ne dit pas de qui il s’agit : on peut la montrer.',
                   ca:'Sense aquestes caselles la fulla no diu de qui és : es pot ensenyar.', en:'Without these boxes the sheet does not say who it is about: it can be shown.' },
    imp_no:      { es:'Cancelar', fr:'Annuler', ca:'Cancel·lar', en:'Cancel' },
    imp_pagina:  { es:'Página {n} / {t}', fr:'Page {n} / {t}', ca:'Pàgina {n} / {t}', en:'Page {n} / {t}' }
  };
  var CLAVE_MEMO = 'sf_comentarios_ia', CLAVE_DX = 'sf_ia_con_dx';

  function lg(){ try{ return (window.MF && MF.idioma && MF.idioma()) || 'es'; }catch(e){ return 'es'; } }
  function tx(k, v){
    var t = TX[k] || {}, s = t[lg()] || t.es || k;
    Object.keys(v || {}).forEach(function(x){ s = s.replace('{' + x + '}', v[x]); });
    return s;
  }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* ── EL CONTEXTO : lo que el expediente dice de la persona, sin identificarla ── */
  function edad(nac){
    var m = /^(\d{4})(?:-(\d{2})-(\d{2}))?/.exec(String(nac || '').trim());
    if(!m) return null;
    var hoy = new Date(), a = hoy.getFullYear() - (+m[1]);
    if(m[2]){ var mm = hoy.getMonth() + 1, dd = hoy.getDate();
              if(mm < +m[2] || (mm === +m[2] && dd < +m[3])) a--; return { n:a, aprox:false }; }
    return { n:a, aprox:true };
  }
  function diagnosticos(d){
    var L = [].concat(d && Array.isArray(d.diagnosticos) ? d.diagnosticos : [],
                      d && Array.isArray(d.antecedentes) ? d.antecedentes : []);
    var visto = {}, out = [];
    L.forEach(function(x){
      if(!x) return;
      var est = String(x.estado || '').toLowerCase();
      if(/resuel|inactiv|descart|erroneo|erróneo/.test(est)) return;
      var t = (typeof x === 'string') ? x : (x.descripcion || x.texto || x.nombre || x.diagnostico || '');
      t = String(t).trim(); if(!t) return;
      var k = t.toUpperCase(); if(visto[k]) return; visto[k] = 1;
      out.push(t + (x.codigo ? ' (' + x.codigo + ')' : ''));
    });
    return out;
  }
  function contexto(d){
    var p = (d && d.paciente) || {};
    var sx = String((d && d.sexo) || p.sexo || '').toLowerCase();
    var sexo = /^(m(ujer)?|f(emenino)?|femme|woman|dona)$/.test(sx) ? 'mujer'
             : /^(h(ombre)?|v(ar[oó]n)?|masculino|homme|man|home)$/.test(sx) ? 'hombre' : '';
    var e = edad((d && d.nacimiento) || p.nacimiento || (d && d.fecha_nacimiento));
    return { sexo:sexo, edad:e, dx:diagnosticos(d) };
  }
  function conDx(){ try{ return localStorage.getItem(CLAVE_DX) !== 'no'; }catch(e){ return true; } }
  function ponConDx(si){ try{ localStorage.setItem(CLAVE_DX, si ? 'si' : 'no'); }catch(e){} }

  /* la línea que el usuario ve ANTES de pedir : qué sale de su ordenador */
  function lineaContexto(d){
    var c = contexto(d);
    var quien = (c.sexo ? tx(c.sexo) : tx('sin_sexo')) + ', ' +
                (c.edad ? tx(c.edad.aprox ? 'anos_aprox' : 'anos', { n:c.edad.n }) : tx('sin_edad'));
    var casilla = c.dx.length
      ? '<label style="white-space:nowrap;cursor:pointer"><input type="checkbox" id="sf-ia-dx"' + (conDx() ? ' checked' : '') +
        ' onchange="SF_COMENTARIO_IA.ponConDx(this.checked)"> ' + esc(tx('con_dx', { n:c.dx.length })) + '</label>'
      : '<span>' + esc(tx('sin_dx')) + '</span>';
    return '<div class="sf-ia-ctx" style="display:flex;flex-wrap:wrap;gap:4px 10px;align-items:center">' +
      '<span>' + esc(tx('envia')) + ' <b style="color:var(--text)">' + esc(quien) + '</b></span> · ' + casilla +
      '<span style="opacity:.8">' + esc(tx('nada_mas')) + '</span></div>';
  }

  /* el contexto tal como va en el prompt (en la lengua del prompt) */
  function contextoPrompt(d){
    var c = contexto(d), P = window.SF_PROMPT_COMENTARIO_CURVA || {}, E = P.etiquetas || {};
    var s = (c.sexo ? (E[c.sexo] || c.sexo) : (E.sin_sexo || '')) + ', ' +
            (c.edad ? (E[c.edad.aprox ? 'anos_aprox' : 'anos'] || '{n}').replace('{n}', c.edad.n) : (E.sin_edad || ''));
    if(c.dx.length && conDx()) s += '. ' + (E.diagnosticos || '') + ' ' + c.dx.join(' ; ');
    return s;
  }

  /* ── LA PETICIÓN ──
     series : [{ etiqueta, unidad, ref:[lo,hi]|null, desc, puntos:[{x,y}] }] */
  function pide(d, series, op){
    /* op (P-H, 05/11/2026) : { prompt: otro fichero de demanda, huecos: { anio: …, prev: … } } — sin op, el de las curvas, como antes */
    op = op || {};
    var P = op.prompt || window.SF_PROMPT_COMENTARIO_CURVA;
    if(!P || !P.plantilla) return Promise.reject(new Error('prompt'));
    var clave = (window.MF && MF.claveIA) ? MF.claveIA() : '';
    if(!clave) return Promise.reject(new Error('sin-clave'));
    var modelo = '', tokens = 0;
    try{ modelo = localStorage.getItem('sf_api_modelo') || localStorage.getItem('mt_api_model') || ''; }catch(e){}
    modelo = modelo || ((window.SF_MODELOS_IA || {}).defecto) || P.modelo_defecto;   /* la tabla de los modelos (P-H, 05/11/2026) */
    tokens = P.max_tokens || 2000;
    var combo = series.length > 1;
    var bloques = series.map(function(s){
      return (P.bloque || '').replace('{etiqueta}', s.etiqueta).replace('{unidad}', s.unidad || '')
        .replace('{referencia}', s.ref ? (P.referencia || '').replace('{ref}', s.ref.filter(function(v){ return v !== null; }).join('–')) : '')
        .replace('{descripcion}', s.desc ? (P.descripcion || '').replace('{desc}', s.desc) : '')
        .replace('{serie}', s.puntos.map(function(p){ return p.x + '=' + p.y; }).join(' ; '));
    }).join('\n\n');
    var prompt = P.plantilla
      .replace('{combo}', combo ? (P.combo || '') : '')
      .replace('{lengua}', tx('lengua'))
      .replace('{marcador}', tx('marcador'))
      .replace('{lineas}', combo ? (P.lineas_varias || 10) : (P.lineas_una || 6))
      .replace('{contexto}', contextoPrompt(d))
      .replace('{series}', bloques);
    Object.keys(op.huecos || {}).forEach(function(k){ prompt = prompt.split('{' + k + '}').join(op.huecos[k]); });
    return fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'x-api-key':clave, 'anthropic-version':'2023-06-01',
                'anthropic-dangerous-direct-browser-access':'true' },
      body: JSON.stringify({ model:modelo, max_tokens:tokens, messages:[{ role:'user', content:prompt }] })
    }).then(function(r){
      if(!r.ok) return r.text().then(function(t){ var m = ''; try{ m = JSON.parse(t).error.message; }catch(e){} throw new Error('HTTP ' + r.status + (m ? ' · ' + m : '')); });
      return r.json();
    }).then(function(j){
      return { texto:(j.content || []).map(function(c){ return c.text || ''; }).join(''), modelo:modelo,
               fecha:new Date().toLocaleString(lg() === 'en' ? 'en-GB' : lg() + '-ES', { timeZone:'Europe/Madrid' }) };
    });
  }

  /* ── LA MEMORIA : por paciente y por curva, en este navegador ── */
  function memos(){ try{ return JSON.parse(localStorage.getItem(CLAVE_MEMO) || '{}'); }catch(e){ return {}; } }
  function lee(mat, clave){ var M = memos(); return (M[mat] || {})[clave] || null; }
  function guarda(mat, clave, memo){
    var M = memos(); (M[mat] = M[mat] || {})[clave] = memo;
    try{ localStorage.setItem(CLAVE_MEMO, JSON.stringify(M)); }catch(e){}
  }

  /* ── LA FORMA : el texto, y las preguntas para el médico al lado (o debajo si falta sitio) ── */
  function formatea(texto){
    var e = esc(texto);
    var negritas = function(t){ return t.split('\n').map(function(l){
        var lt = l.trim(), m = /^\*\*(.+?):?\*\*\s*:?\s*$/.exec(lt), h = /^#{1,3}\s+(.+)$/.exec(lt);
        if(m || h) return '<div class="sf-ia-tit">' + (m ? m[1] : h[1]) + '</div>';
        return l.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
      }).join('<br>').replace(/<\/div><br>/g, '</div>'); };
    var REP = esc(tx('marcador')), i = e.indexOf(REP);
    if(i < 0) return '<div>' + negritas(e) + '</div>';
    var izq = e.slice(0, i).replace(/\*\*\s*$/, '').trim(), der = e.slice(i + REP.length).replace(/^\s*\*\*/, '').trim();
    return '<div class="sf-ia-dos"><div>' + negritas(izq) + '</div>' +
           '<div><div class="sf-ia-tit">' + REP.replace(/\s*:$/, '') + '</div>' + negritas(der) + '</div></div>';
  }

  /* ══ LA VENTANA (P-H, 04/11/2026 : « il y a un problème de conception de la fenêtre ») ══
     La de la V1 eran cajones encajados que debían « ocupar todo el sitio que queda » dentro de una
     ventana sin altura : nadie decidía la altura, el comentario recibía casi nada y se desbordaba
     sobre la nota. Ahora, TRES PISOS que se siguen y nunca se montan :
       cabecera (título, última medida, ✕ — se arrastra por ella)
       curva    (si la hay : su piso, ALTURA FIJA — dentro del cuerpo bailaba con la barra de desplazamiento :
                 la barra aparecía, la curva se estrechaba y bajaba, la barra desaparecía… P-H, 04/11/2026)
       cuerpo   (el comentario ; el ÚNICO piso que se desplaza si el texto es largo)
       pie      (la nota, el aviso, lo que sale hacia la IA, el botón — siempre visible)
     La ventana toma la altura de su contenido, hasta el 80 % de la pantalla. Se puede agrandar a mano.
     Si ya había una abierta con la misma clase, la nueva se pone en el mismo sitio.
     Va DEBAJO de las ventanas de la casa (9600) : la de imprimir o la de la clave salen encima, no detrás. */
  function css(){
    if(document.getElementById('sf-ia-css')) return;
    var s = document.createElement('style'); s.id = 'sf-ia-css';
    s.textContent =
      '.sf-ia-ven{position:fixed;z-index:var(--sf-ia-z,9500);left:50%;top:60px;transform:translateX(-50%);width:min(860px,96vw);max-height:var(--sf-ia-alto,80vh);' +
        'display:flex;flex-direction:column;background:var(--surface);color:var(--text);border:1px solid var(--border);border-radius:10px;' +
        'box-shadow:0 12px 40px rgba(0,0,0,.5);resize:both;overflow:hidden;min-width:280px;min-height:120px}' +
      '.sf-ia-cab{flex:0 0 auto;display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);cursor:move;user-select:none}' +
      '.sf-ia-cab b{font-size:14px}.sf-ia-x{cursor:pointer;color:var(--muted);font-size:16px}' +
      '.sf-ia-stats{flex:0 0 auto;font-size:11px;color:var(--muted);padding:5px 12px}' +
      '.sf-ia-cuerpo{flex:1 1 auto;min-height:0;overflow-y:auto;scrollbar-gutter:stable;padding:8px 12px;font-size:12.5px;line-height:1.55}' +
      '.sf-ia-curva{flex:0 0 auto;position:relative;height:var(--sf-ia-curva-alto,200px);padding:4px 12px 6px}' +
      '.sf-ia-curva canvas{width:100%!important;height:100%!important}' +
      '.sf-ia-cuerpo:empty{display:none}' +
      '.sf-ia-pie{flex:0 0 auto;border-top:1px solid var(--border);padding:8px 12px;display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--muted)}' +
      '.sf-ia-pie:empty{display:none}' +
      '.sf-ia-nota{font-style:italic}.sf-ia-aviso{color:var(--warn)}' +
      '.sf-ia-dos{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}' +
      '.sf-ia-dos>div{border:1px solid var(--border);border-radius:6px;padding:8px 10px}' +
      '.sf-ia-tit{margin:4px 0 2px;font-weight:700;color:var(--accent);font-size:12.5px}';
    document.head.appendChild(s);
  }
  function ventana(o){
    css();
    var clase = o.clase || 'sf-ia-ven-x', antes = document.querySelector('.' + clase), pos = null;
    if(antes){ var r = antes.getBoundingClientRect(); pos = { l:r.left, t:r.top, w:antes.style.width, h:antes.style.height }; antes.remove(); }
    var v = document.createElement('div'); v.className = 'sf-ia-ven ' + clase;
    v.innerHTML = '<div class="sf-ia-cab"><b>' + (o.titulo || '') + '</b><span style="display:inline-flex;align-items:center;gap:8px">' +
      (o.extra || '') + '<span class="sf-ia-x">✕</span></span></div>' +
      (o.stats ? '<div class="sf-ia-stats">' + o.stats + '</div>' : '') +
      (o.curva ? '<div class="sf-ia-curva">' + o.curva + '</div>' : '') +   /* su propio piso, de altura fija : no baila con la barra de desplazamiento */
      '<div class="sf-ia-cuerpo">' + (o.cuerpo || '') + '</div>' +
      '<div class="sf-ia-pie">' + (o.pie || '') + '</div>';
    if(o.altoCurva) v.style.setProperty('--sf-ia-curva-alto', o.altoCurva + 'px');
    document.body.appendChild(v);
    if(pos){ v.style.transform = 'none'; v.style.left = pos.l + 'px'; v.style.top = pos.t + 'px'; if(pos.w) v.style.width = pos.w; if(pos.h) v.style.height = pos.h; }
    v.querySelector('.sf-ia-x').onclick = function(){ v.remove(); };
    var cab = v.querySelector('.sf-ia-cab'), x0 = 0, y0 = 0, l0 = 0, t0 = 0, va = false;
    cab.addEventListener('mousedown', function(e){
      if(e.target.closest('button') || e.target.classList.contains('sf-ia-x')) return;
      var r = v.getBoundingClientRect(); v.style.transform = 'none'; v.style.left = r.left + 'px'; v.style.top = r.top + 'px';
      va = true; x0 = e.clientX; y0 = e.clientY; l0 = r.left; t0 = r.top; e.preventDefault();
    });
    document.addEventListener('mousemove', function(e){ if(!va) return;
      v.style.left = Math.max(0, Math.min(window.innerWidth - 60, l0 + e.clientX - x0)) + 'px';
      v.style.top  = Math.max(0, Math.min(window.innerHeight - 40, t0 + e.clientY - y0)) + 'px'; });
    document.addEventListener('mouseup', function(){ va = false; });
    return v;
  }


  /* lo que se envió, en una línea de texto — se guarda con el comentario y sale en la hoja impresa */
  function resumen(d){
    var c = contexto(d);
    return (c.sexo ? tx(c.sexo) : tx('sin_sexo')) + ', ' +
           (c.edad ? tx(c.edad.aprox ? 'anos_aprox' : 'anos', { n:c.edad.n }) : tx('sin_edad')) +
           (c.dx.length ? (conDx() ? ' · ' + tx('con_dx', { n:c.dx.length }) : '') : ' · ' + tx('sin_dx'));
  }

  /* ══ LA HOJA IMPRESA (P-H, 04/11/2026 : « un bouton imprimer ») ══
     Una hoja limpia, nunca la página entera, SIEMPRE en blanco : cabecera (paciente — « quand le
     médecin est devant l'écran il sait qui est le patient » : el nombre solo va en el papel —,
     fecha de impresión, curva), la imagen de la curva, el comentario, lo que se envió a la IA, la nota.
     o : { titulo, paciente, imagen (dataURL), comentario (texto de la IA), enviado, nota, colores:{papel,tinta,linea,acento} } */
  /* la pequeña ventana antes de imprimir : ¿con los datos del paciente ? Se acuerda de la elección. */
  function preguntaImpresion(alAceptar, op){
    op = op || {};
    var lee = function(k, d){ try{ var v = localStorage.getItem(k); return v === null ? d : v === 'si'; }catch(e){ return d; } };
    var pon = function(k, v){ try{ localStorage.setItem(k, v ? 'si' : 'no'); }catch(e){} };
    var html = '<label style="display:block;margin:4px 0;cursor:pointer"><input type="checkbox" class="sf-imp-nom"' + (lee('sf_ia_imp_nombre', true) ? ' checked' : '') + '> ' + esc(tx('imp_nombre')) + '</label>' +
      (op.haySip ? '<label style="display:block;margin:4px 0;cursor:pointer"><input type="checkbox" class="sf-imp-sip"' + (lee('sf_ia_imp_sip', false) ? ' checked' : '') + '> ' + esc(tx('imp_sip')) + '</label>' : '') +
      '<p style="margin:8px 0;color:var(--muted);font-size:12px">' + esc(tx('imp_sin')) + '</p>' +
      '<div style="display:flex;gap:8px;margin-top:6px"><button class="btn sf-imp-ok" style="border-color:var(--accent);font-weight:700">🖨 ' + esc(tx('imp_tit')) + '</button>' +
      '<button class="btn sf-imp-no">' + esc(tx('imp_no')) + '</button></div>';
    var v = MF.ventana('🖨 ' + esc(tx('imp_tit')), html, { ancho:'380px' }), c = v.caja;
    c.querySelector('.sf-imp-no').onclick = function(){ v.cierra(); };
    c.querySelector('.sf-imp-ok').onclick = function(){
      var n = c.querySelector('.sf-imp-nom').checked, sp = !!(c.querySelector('.sf-imp-sip') && c.querySelector('.sf-imp-sip').checked);
      pon('sf_ia_imp_nombre', n); if(op.haySip) pon('sf_ia_imp_sip', sp);
      v.cierra(); alAceptar({ nombre:n, sip:sp });
    };
    return v;
  }

  function imprime(o){
    var C = o.colores || {};
    var f = new Date().toLocaleString(lg() === 'en' ? 'en-GB' : lg() + '-ES', { timeZone:'Europe/Madrid' });
    /* EL PIE DE CADA PÁGINA (P-H, 05/11/2026) : el documento · la fecha y la hora · « Página n / t », bajo un filete ;
       los márgenes de la hoja los lleva @page, para que el pie tenga su sitio en TODAS las páginas */
    var cssS = function(s){ return '"' + String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\r\n]+/g, ' ') + '"'; };
    var pg = tx('imp_pagina').split('{n}'), pg2 = (pg[1] || '').split('{t}');
    var pagina = cssS(pg[0]) + ' counter(page) ' + cssS(pg2[0]) + ' counter(pages) ' + cssS(pg2[1] || '');
    var caja = 'font-family:system-ui,sans-serif;font-size:8pt;color:' + C.suave + ';border-top:.5pt solid ' + C.linea + ';padding-top:3pt;vertical-align:top;';
    var doc = o.titulo + (o.paciente ? ' · ' + o.paciente : '');
    var pie = '@page{size:A4;margin:16mm 16mm 18mm 16mm;@bottom-left{content:' + cssS(doc) + ';text-align:left;' + caja + '}'
      + '@bottom-center{content:' + cssS(f) + ';text-align:center;' + caja + '}@bottom-right{content:' + pagina + ';text-align:right;' + caja + '}}'
      + 'img,p,li,.pie,h1{break-inside:avoid}h1{break-after:avoid}';
    var html = '<!DOCTYPE html><html lang="' + lg() + '"><head><meta charset="utf-8"><title>' + esc(o.titulo) + '</title><style>' +
      'body{margin:0;background:' + C.papel + ';color:' + C.tinta + ';font-family:var(--sans,system-ui,sans-serif);font-size:11pt;line-height:1.5}' +
      'h1{font-size:15pt;margin:0 0 2pt}.sub{color:' + C.suave + ';font-size:9.5pt;margin-bottom:10pt;display:flex;justify-content:space-between;gap:12pt;flex-wrap:wrap}' +
      'img{width:100%;border:1px solid ' + C.linea + ';border-radius:4pt;margin:4pt 0 10pt}' +
      '.sf-ia-dos{display:grid;grid-template-columns:1fr 1fr;gap:10pt}.sf-ia-dos>div{border:1px solid ' + C.linea + ';border-radius:4pt;padding:6pt 8pt}' +
      '.sf-ia-tit{font-weight:700;color:' + C.acento + ';margin:2pt 0}' +
      '.pie{margin-top:10pt;font-size:9pt;color:' + C.suave + ';border-top:1px solid ' + C.linea + ';padding-top:6pt}' +
      pie + (o.css || '') + '</style></head><body>' +   /* o.css, o.cuerpo : una hoja ya compuesta (las especialidades, P-H 05/11/2026) */
      '<h1>' + esc(o.titulo) + '</h1>' +
      '<div class="sub"><span>' + ((o.paciente || o.sip) ? esc(tx('imp_paciente')) + ' : <b>' + [o.paciente, o.sip ? 'SIP ' + o.sip : ''].filter(Boolean).map(esc).join(' · ') + '</b>' : '') + '</span><span>' + esc(tx('imp_impreso', { f:f })) + '</span></div>' +
      (o.imagen ? '<img src="' + o.imagen + '">' : '') +
      (o.cuerpo || formatea(o.comentario || '')) +
      '<div class="pie">' + (o.enviado ? esc(tx('envia')) + ' ' + esc(o.enviado) + '<br>' : '') + esc(o.nota || '') + '</div>' +
      '</body></html>';
    var fr = document.createElement('iframe');
    fr.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';
    document.body.appendChild(fr);
    var w = fr.contentWindow;
    w.document.open(); w.document.write(html); w.document.close();
    var quita = function(){ setTimeout(function(){ if(fr.parentNode) fr.parentNode.removeChild(fr); }, 500); };
    w.addEventListener('afterprint', quita);
    setTimeout(function(){ try{ w.focus(); w.print(); }catch(e){} setTimeout(quita, 60000); }, 300);
  }

  return { tx:tx, contexto:contexto, lineaContexto:lineaContexto, conDx:conDx, ponConDx:ponConDx,
           pide:pide, lee:lee, guarda:guarda, formatea:formatea, ventana:ventana, resumen:resumen, imprime:imprime, preguntaImpresion:preguntaImpresion };
})();
