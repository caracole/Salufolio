/* ═══════════════════════════════════════════════════════════════════════
   EL VISOR DE DOCUMENTOS — comun/visor-pdf.js
   Versión 2026.11.06-09:20:17
   (06/11/2026 : P-H — « tu dois appliquer la même technique dans Tableau détaillé et autres ».
    Un solo visor para todos los módulos : el PDF dibujado aquí, con el ROTULADOR sobre el nombre
    del parámetro y su valor ; si el documento falta (« PDF ABSENT »), la FICHA de lo que el
    expediente sabe de él. Sacado de Curvas, donde se probó primero.)
   Se carga AL FINAL de la página, después de los scripts del módulo :
     <script src="../comun/pdfjs/pdf.min.js"></script>
     <script src="../comun/visor-pdf.idiomas.js"></script>
     <script src="../comun/visor-pdf.js"></script>
   y reemplaza las copias antiguas de _chartVerInforme de cada módulo.
   Llamada directa : SF_VISOR.abre({ pdf_id, clave, valor, fecha, etiqueta, unidad, color }).
   Todo pasa en este navegador : el PDF se pide a la Casa, solo en la carpeta del paciente.
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
  var SCRIPT = document.currentScript;
  var AUSENTE = 'PDF ABSENT.pdf';                          /* el nombre que marca un documento ausente (Comparador, 05/11/2026) */
  try { if (window.pdfjsLib && SCRIPT) pdfjsLib.GlobalWorkerOptions.workerSrc = SCRIPT.src.replace(/visor-pdf\.js(\?.*)?$/, 'pdfjs/pdf.worker.min.js'); } catch (e) {}

  function tx(k){
    var lg = 'es'; try { lg = MF.idioma() || 'es'; } catch (e) {}
    var T = (window.SF_TEXTOS_VISOR || {}).textos || {};
    return (T[lg] && T[lg][k]) || (T.es && T.es[k]) || k;
  }
  function esc(s){ return String(s === undefined || s === null ? '' : s).replace(/[&<>"]/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); }
  function fecha(iso){ var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || '')); return m ? m[3] + '/' + m[2] + '/' + m[1] : (iso || ''); }
  function datos(){ try { return (MF.datos && MF.datos()) || window._DATOS || {}; } catch (e) { return window._DATOS || {}; } }
  function estilo(rol, prop, respaldo){
    var v = ''; try { v = (MF.estilo(rol, prop) || '').trim(); } catch (e) {}
    return v || getComputedStyle(document.documentElement).getPropertyValue(respaldo).trim();
  }
  function sinonimo(k){ return ((window.SF_SINONIMOS_PARAMETROS || {}).parametros || {})[k] || null; }
  function etiqueta(k){
    if (typeof PARAMS === 'object' && PARAMS && PARAMS[k] && PARAMS[k].label) return PARAMS[k].label;
    var lg = 'es'; try { lg = MF.idioma() || 'es'; } catch (e) {}
    var P = sinonimo(k); return (P && P.etiqueta && (P.etiqueta[lg] || P.etiqueta.es)) || k;
  }
  function unidad(k, m){ return (m && m.unidades && m.unidades[k]) || (typeof PARAMS === 'object' && PARAMS && PARAMS[k] && PARAMS[k].unit) || ((sinonimo(k) || {}).unidad) || ''; }

  /* ── la ventana : se arrastra por su cabecera, se agranda por la esquina ── */
  function ventana(titulo, info){
    document.querySelectorAll('.pdf-popup-maison').forEach(function(o){ o.remove(); });
    var pop = document.createElement('div');
    pop.className = 'pdf-popup-maison sf-visor';
    pop.style.left = 'calc(50% - min(450px,47vw))'; pop.style.top = '40px';
    var banda = info ? '<div class="sf-visor-banda">🔍 ' + esc(tx('verificar')) + ' <b style="color:' + esc(info.color || 'var(--accent)') + '">' + esc(info.etiqueta) + '</b> = <b>' + esc(info.valor) + '</b> ' + esc(info.unidad || '') + (info.fecha ? ' (' + esc(fecha(info.fecha)) + ')' : '') + '</div>' : '';
    pop.innerHTML = '<div class="sf-visor-cab"><b>📄 ' + esc(titulo) + '</b><span class="sf-visor-x" data-ptip="' + esc(tx('cerrar')) + '">✕</span></div>' + banda + '<div class="sf-visor-cuerpo"></div>';
    document.body.appendChild(pop);
    pop.querySelector('.sf-visor-x').onclick = function(){ pop.remove(); };
    try { if (MF.ptips) MF.ptips(pop); } catch (e) {}
    var cab = pop.querySelector('.sf-visor-cab'), arr = false, sx = 0, sy = 0, ol = 0, ot = 0;
    function pt(e){ return e.touches && e.touches[0] ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY }; }
    cab.addEventListener('mousedown', down); cab.addEventListener('touchstart', down, { passive: false });
    function down(e){ if (e.target.classList.contains('sf-visor-x')) return; arr = true; var p = pt(e), r = pop.getBoundingClientRect(); sx = p.x; sy = p.y; ol = r.left; ot = r.top; e.preventDefault(); }
    function move(e){ if (!arr) return; var p = pt(e); pop.style.left = Math.max(0, Math.min(window.innerWidth - 80, ol + p.x - sx)) + 'px'; pop.style.top = Math.max(0, Math.min(window.innerHeight - 40, ot + p.y - sy)) + 'px'; }
    function up(){ arr = false; }
    window.addEventListener('mousemove', move); window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('mouseup', up); window.addEventListener('touchend', up);
    return { pop: pop, cuerpo: pop.querySelector('.sf-visor-cuerpo') };
  }
  function aviso(sh, texto){ sh.cuerpo.innerHTML = '<div class="sf-visor-aviso">' + esc(texto) + '</div>'; }

  /* ── EL ROTULADOR : lo que se busca (P-H, 05/11/2026) ── */
  function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim(); }
  function rxEsc(s){ return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function plan(info){
    info = info || {};
    var P = sinonimo(info.clave) || {};
    var nombres = [].concat(P.impresos || [], P.buscar || [], Object.values(P.etiqueta || {}), [info.etiqueta || '', info.clave || '']);
    nombres.slice().forEach(function(n){ var m = /^(.+?)\s*\((.+)\)\s*$/.exec(n || ''); if (m) nombres.push(m[1], m[2]); });
    nombres = nombres.map(norm).filter(function(n, i, a){ return n.length >= 2 && a.indexOf(n) === i; }).sort(function(a, b){ return b.length - a.length; });
    var valores = [];
    if (info.valor !== undefined && info.valor !== null && info.valor !== '') {
      var n = Number(info.valor), brut = String(info.valor);
      valores.push(brut, brut.replace('.', ','));
      if (isFinite(n) && Math.abs(n) >= 1000) {
        var ent = Math.trunc(Math.abs(n)), dec = brut.indexOf('.') >= 0 ? brut.split('.')[1] : '';
        var mil = String(ent).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        valores.push(mil, mil + ',' + (dec || '00'), mil + ',' + (dec || '0'));
      }
      if (isFinite(n) && Number.isInteger(n)) valores.push(brut + ',00', brut + ',0', brut + '.0', brut + '.00');
      if (isFinite(n) && !Number.isInteger(n)) { var c2 = n.toFixed(2); valores.push(c2, c2.replace('.', ',')); }
    }
    valores = valores.filter(function(v, i, a){ return v && a.indexOf(v) === i; });
    var fechas = [], m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(info.fecha || ''));
    if (m) { var d = m[3], mo = m[2], y = m[1], y2 = y.slice(2); fechas = [d + '/' + mo + '/' + y, d + '/' + mo + '/' + y2, (+d) + '/' + (+mo) + '/' + y, d + '-' + mo + '-' + y, d + '.' + mo + '.' + y, d + '-' + mo + '-' + y2]; }
    return {
      nombres: nombres.map(function(n){ return new RegExp('(^|[^a-z0-9])' + rxEsc(n) + '($|[^a-z0-9])'); }),
      valores: valores.map(function(v){ return new RegExp('(^|[^0-9.,])' + rxEsc(v) + '(?![0-9]|[.,][0-9])'); }),
      fechas: fechas, activo: !!(nombres.length || valores.length) && info.valor !== undefined
    };
  }
  /* nivel 3 = nombre + valor en la misma línea ; 2 = el valor solo ; 1 = el nombre solo ; 0 = nada */
  function busca(items, pl){
    if (!pl.activo) return { nivel: 0, marcas: [] };
    var its = (items || []).filter(function(it){ return it && it.transform && (it.str || '').trim(); });
    var alto = function(it){ return Math.hypot(it.transform[2], it.transform[3]) || it.height || 10; };
    var y = function(it){ return it.transform[5]; }, x = function(it){ return it.transform[4]; };
    var misma = function(a, b){ return Math.abs(y(a) - y(b)) < Math.max(alto(a), alto(b)) * 0.6; };
    var N = its.filter(function(it){ var t = ' ' + norm(it.str) + ' '; return pl.nombres.some(function(r){ return r.test(t); }); });
    var V = its.filter(function(it){ var t = ' ' + it.str + ' '; return pl.valores.some(function(r){ return r.test(t); }); });
    var F = its.filter(function(it){ return pl.fechas.some(function(f){ return String(it.str).indexOf(f) >= 0; }); });
    var pares = [];
    V.forEach(function(v){ N.forEach(function(nm){ if (misma(nm, v) && x(v) >= x(nm)) pares.push([nm, v]); }); });
    if (pares.length) {
      if (pares.length > 1 && F.length) {
        var dist = function(p){ return Math.min.apply(null, F.map(function(f){ return misma(f, p[1]) ? 0 : Math.abs(x(f) - x(p[1])) + 1; })); };
        pares.sort(function(a, b){ return dist(a) - dist(b); });
      } else if (pares.length > 1) pares.sort(function(a, b){ return (x(a[1]) - x(a[0])) - (x(b[1]) - x(b[0])); });
      return { nivel: 3, marcas: pares[0] };
    }
    if (V.length && V.length <= 3) return { nivel: 2, marcas: V };
    if (N.length) return { nivel: 1, marcas: N.slice(0, 3) };
    return { nivel: 0, marcas: [] };
  }

  /* ── EL DOCUMENTO AUSENTE : lo que el expediente sabe de él (P-H, 06/11/2026) ── */
  function esAusente(id){ var A = (datos().pdfs || {}).archivos || {}; return Object.prototype.hasOwnProperty.call(A, id) && A[id] === AUSENTE; }
  function ficha(id, info){
    var D = datos(), sh = ventana(id + ' — ' + tx('aus_tit'), info && info.valor !== undefined ? info : null);
    var M = []; try { M = (MF.mesuresCanon ? MF.mesuresCanon(D) : D.mesures) || []; } catch (e) { M = D.mesures || []; }
    var med = M.filter(function(m){ return m && m.pdf_id === id; });
    var cita = function(L){ return (Array.isArray(L) ? L : []).filter(function(x){ return x && x.pdf_id === id; }); };
    var ev = cita(D.events), md = cita(D.medicaments), an = cita(D.antecedentes);
    var Fu = D.fuentes || {}, prov = [];
    var ponP = function(t){ t = (t && typeof t === 'object') ? (t.nombre || t.etiqueta || '') : t; if (t && prov.indexOf(t) < 0) prov.push(t); };
    med.forEach(function(m){ if (m.src_id) ponP(Fu[m.src_id]); });
    ev.concat(md, an, med).forEach(function(x){ ponP(x.source || x.src); });
    var fM = med.map(function(m){ return m.date || m.fecha || ''; }).filter(function(f, i, a){ return f && a.indexOf(f) === i; }).sort();
    var fT = med.concat(ev).map(function(x){ return x.date || x.fecha || ''; }).filter(function(f, i, a){ return f && a.indexOf(f) === i; }).sort();
    var h = '<div class="sf-aus"><div class="sf-aus-cab">'
      + '<div class="sf-aus-nota">⚠ ' + esc(tx('aus_nota')) + '</div>'
      + '<div class="sf-aus-dato"><b>' + esc(tx('aus_fecha')) + '</b> ' + esc(fT.map(fecha).join(' · ') || '—') + '</div>'
      + '<div class="sf-aus-dato"><b>' + esc(tx('aus_procedencia')) + '</b> ' + esc(prov.join(' · ') || '—') + '</div></div>';
    if (med.length) {
      var varias = fM.length > 1;
      h += '<div class="sf-aus-sub">' + esc(tx('aus_valores')) + '</div><table class="sf-aus-tabla">';
      med.forEach(function(m){
        var f = m.date || m.fecha || '';
        Object.keys(m.vals || {}).forEach(function(k){
          var es = info && k === info.clave && (!info.fecha || f === info.fecha) && String(m.vals[k]) === String(info.valor);
          h += '<tr' + (es ? ' class="sf-aus-feutre"' : '') + '>' + (varias ? '<td class="sf-aus-f">' + esc(fecha(f)) + '</td>' : '')
            + '<td>' + esc(etiqueta(k)) + '</td><td class="sf-aus-v">' + esc(m.vals[k]) + '</td><td class="sf-aus-u">' + esc(unidad(k, m)) + '</td></tr>';
        });
      });
      h += '</table>';
    }
    if (ev.length) {
      h += '<div class="sf-aus-sub">' + esc(tx('aus_eventos')) + '</div>';
      ev.forEach(function(e){
        var f = e.date || e.fecha || '';
        h += '<div class="sf-aus-ev"><b>' + esc(fecha(f)) + ' · ' + esc(e.title || e.titre || e.titulo || '') + '</b>'
          + ((e.text || e.texto) ? '<div>' + esc(e.text || e.texto) + '</div>' : '') + '</div>';
      });
    }
    if (md.length) h += '<div class="sf-aus-sub">' + esc(tx('aus_meds')) + '</div><div>' + md.map(function(m){ return esc(m.nombre || m.nom || ''); }).filter(Boolean).join(' · ') + '</div>';
    if (an.length) h += '<div class="sf-aus-sub">' + esc(tx('aus_antec')) + '</div><div>' + an.map(function(a){ return esc(a.descripcion || a.nombre || ''); }).filter(Boolean).join(' · ') + '</div>';
    if (!med.length && !ev.length && !md.length && !an.length) h += '<div class="sf-aus-dato">' + esc(tx('aus_nada')) + '</div>';
    sh.cuerpo.innerHTML = h + '</div>';
    var fila = sh.cuerpo.querySelector('.sf-aus-feutre'), cab = sh.cuerpo.querySelector('.sf-aus-cab');
    if (fila) sh.cuerpo.scrollTop = Math.max(0, fila.offsetTop - (cab ? cab.offsetHeight : 0) - 60);
  }

  /* ── ABRIR : la ficha si falta, si no el PDF dibujado con su rotulador ── */
  async function abre(o){
    o = o || {};
    var id = o.pdf_id || o.pdf; if (!id) return;
    var info = (o.valor !== undefined && o.valor !== null) ? o : null;
    if (esAusente(id)) { ficha(id, info); return; }
    var nom = /\.pdf$/i.test(String(id)) ? String(id) : String(id) + '.pdf';
    var titulo = (window.MF && MF.tituloPdf) ? MF.tituloPdf(nom) : nom;
    var r = null, buf = null;
    try { r = await MF.pdfRespuesta(nom.replace(/\.pdf$/i, '')); if (r && r.ok) buf = await r.arrayBuffer(); } catch (e) {}
    if (!buf) {
      var mo = (r && r.headers && r.headers.get('X-Sf-Motivo')) || '';
      var sh0 = ventana(titulo, info); aviso(sh0, '📄 ' + titulo + ' — ' + ((window.MF && MF.motivoPdf) ? MF.motivoPdf(mo) : tx('sin_archivo')));
      return;
    }
    if (typeof pdfjsLib === 'undefined') {               /* sin pdf.js : el visor del navegador, sin rotulador */
      var sh1 = ventana(titulo, info);
      sh1.cuerpo.innerHTML = '<embed class="sf-visor-embed" type="application/pdf" src="' + URL.createObjectURL(new Blob([buf], { type: 'application/pdf' })) + '">';
      return;
    }
    var doc;
    try { doc = await pdfjsLib.getDocument({ data: buf }).promise; } catch (e) { aviso(ventana(titulo, info), tx('no_abrir')); return; }
    var pl = plan(info ? { clave: o.clave, etiqueta: o.etiqueta, valor: o.valor, fecha: o.fecha } : {});
    var paginas = [], vacio = true, mejor = null;
    for (var p = 1; p <= doc.numPages; p++) {
      var tc = await (await doc.getPage(p)).getTextContent();
      if (tc.items.some(function(it){ return (it.str || '').trim(); })) vacio = false;
      var r0 = busca(tc.items, pl); paginas[p] = r0;
      if (r0.nivel && (!mejor || r0.nivel > mejor.nivel)) { mejor = r0; mejor.p = p; }
      if ((mejor && mejor.nivel === 3) || !pl.activo) break;
    }
    var sh = ventana(titulo, info);
    var barra = document.createElement('div'); barra.className = 'sf-visor-barra';
    barra.innerHTML = '<button class="sf-visor-pg" data-d="-1">◀</button><span class="sf-visor-info"></span><button class="sf-visor-pg" data-d="1">▶</button><span class="sf-visor-nb"></span>';
    sh.pop.insertBefore(barra, sh.cuerpo);
    sh.cuerpo.style.background = estilo('visor_fondo', 'background-color', '--surface2');
    var actual = mejor ? mejor.p : 1;
    async function dibuja(n){
      actual = n; sh.cuerpo.innerHTML = '';
      var page = await doc.getPage(n), vp1 = page.getViewport({ scale: 1 });
      var scale = Math.max(300, sh.cuerpo.clientWidth - 20) / vp1.width, vp = page.getViewport({ scale: scale });
      var w = document.createElement('div'); w.className = 'sf-visor-hoja';
      var cv = document.createElement('canvas'); cv.width = vp.width; cv.height = vp.height; w.appendChild(cv); sh.cuerpo.appendChild(w);
      await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
      var rr = paginas[n]; if (!rr) rr = paginas[n] = busca((await page.getTextContent()).items, pl);
      var arriba = null;
      rr.marcas.forEach(function(it){
        var t = pdfjsLib.Util.transform(vp.transform, it.transform), hh = Math.hypot(t[2], t[3]) || 12;
        var d = document.createElement('div'); d.className = 'sf-feutre';
        d.style.left = (t[4] - 3) + 'px'; d.style.top = (t[5] - hh * 1.05) + 'px'; d.style.width = (it.width * scale + 6) + 'px'; d.style.height = (hh * 1.35) + 'px';
        w.appendChild(d); if (arriba === null || t[5] - hh < arriba) arriba = t[5] - hh;
      });
      barra.querySelector('.sf-visor-info').textContent = tx('pagina') + ' ' + n + ' / ' + doc.numPages;
      barra.querySelector('.sf-visor-nb').textContent = !pl.activo ? '' : vacio ? tx('feutre_escaneado')
        : rr.nivel === 3 ? '🟡 ' + tx('feutre_linea') : rr.nivel === 2 ? '🟡 ' + tx('feutre_solo_valor') : rr.nivel === 1 ? '🟡 ' + tx('feutre_solo_nombre')
        : (mejor ? tx('feutre_otra_pagina').replace('{p}', mejor.p) : tx('feutre_nada'));
      if (arriba !== null) sh.cuerpo.scrollTop = Math.max(0, arriba - 80);
    }
    barra.querySelectorAll('.sf-visor-pg').forEach(function(b){ b.onclick = function(){ var n = actual + (+b.getAttribute('data-d')); if (n >= 1 && n <= doc.numPages) dibuja(n); }; });
    var roT = null; new ResizeObserver(function(){ clearTimeout(roT); roT = setTimeout(function(){ dibuja(actual); }, 200); }).observe(sh.cuerpo);
    await dibuja(actual);
  }

  window.SF_VISOR = { abre: abre, ficha: ficha, esAusente: esAusente, plan: plan, busca: busca };
  /* el clic de un punto de curva, en todos los módulos que lo tienen : las copias antiguas quedan sustituidas */
  window._chartVerInforme = function(s, key){
    if (!s) return;
    var P = (typeof PARAMS === 'object' && PARAMS && key) ? (PARAMS[key] || {}) : {};
    var col = ''; try { col = (typeof colorCurva === 'function' && key) ? colorCurva(key) : ''; } catch (e) {}
    abre({ pdf_id: s.pdf_id || s.pdf, clave: key || null, valor: key ? s.y : undefined, fecha: s.x, etiqueta: key ? (P.label || etiqueta(key)) : '', unidad: key ? (P.unit || unidad(key)) : '', color: col });
  };
})();
