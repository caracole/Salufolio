/* ══════════════════════════════════════════════════════════════════════
   Versión 2026.11.17-16:21:23
   LA HOJA IMPRESA — un solo código para toda la casa (P-H, 17/11/2026)
   Versión la pone versiones.py

   « Ajoute un bouton Imprimer » (versiones, Resumen, Cronología, Paciente).
   Por qué no window.print() : dentro de la Casa, el navegador imprimía la
   página de la Casa entera y ponía abajo su dirección (« file:///…casa/
   index.html 1/4 »). Aquí se copia SOLO lo que se quiere imprimir en un marco
   escondido, con :
     · al pie de cada página : Salufolio y su autor, el paciente y la fecha,
       la página ;
     · los colores de la paleta de papel (los de la pantalla pueden ser
       oscuros) ;
     · nada de botones, nada de lo marcado « no-imprimir » ;
     · lo escrito en una casilla, como texto ; una casilla vacía no sale.
   Los textos y la paleta los da quien llama (su tabla de lenguas) : aquí
   no hay ni una palabra ni un color.

       SF_IMPRIME(nodo, { titulo, centro, marca, pagina, vars, lang })
   ══════════════════════════════════════════════════════════════════════ */
(function(){
  function esc(s){ return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function cs(s){ return '"' + String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\r\n]+/g, ' ') + '"'; }

  window.SF_IMPRIME = function(nodo, op){
    op = op || {};
    var D = nodo.ownerDocument, W = D.defaultView;
    var c = nodo.cloneNode(true);
    if(op.raiz_simple) c.removeAttribute('style');   /* una ventana : sin su marco ni su altura */
    /* lo escrito en las casillas : el clon no lo lleva */
    var O = nodo.querySelectorAll('textarea,input,select'), K = c.querySelectorAll('textarea,input,select');
    for(var i = 0; i < K.length; i++){
      var o = O[i], x = K[i], tg = x.tagName, ty = (x.type || '').toLowerCase();
      if(tg === 'INPUT' && (ty === 'checkbox' || ty === 'radio')){ if(o.checked) x.setAttribute('checked', ''); else x.removeAttribute('checked'); continue; }
      if(tg === 'INPUT' && /^(button|submit|reset|file|hidden|search)$/.test(ty)){ x.parentNode.removeChild(x); continue; }
      var v = tg === 'SELECT' ? ((o.options[o.selectedIndex] || {}).text || '') : o.value;
      if(!String(v || '').trim()){ x.parentNode.removeChild(x); continue; }
      var s = D.createElement(tg === 'TEXTAREA' ? 'div' : 'span');
      s.className = 'sf-imp-valor'; s.textContent = v; x.parentNode.replaceChild(s, x);
    }
    /* lo que no va al papel */
    Array.prototype.forEach.call(c.querySelectorAll('button,.no-imprimir,[data-no-imprimir],script'), function(x){ if(x.parentNode) x.parentNode.removeChild(x); });
    /* los plegables, abiertos : en papel no se toca nada */
    Array.prototype.forEach.call(c.querySelectorAll('details'), function(x){ x.setAttribute('open', ''); });
    /* los estilos de la página */
    var css = '';
    Array.prototype.forEach.call(D.querySelectorAll('style'), function(s){ css += s.textContent + '\n'; });
    var links = '';
    Array.prototype.forEach.call(D.querySelectorAll('link[rel="stylesheet"]'), function(l){ links += '<link rel="stylesheet" href="' + esc(l.href) + '">'; });
    /* la paleta de papel, por encima de la de la pantalla */
    var V = op.vars || {}, raiz = Object.keys(V).map(function(k){ return k + ':' + V[k] + ' !important'; }).join(';');
    var R = W.getComputedStyle(D.documentElement);
    var suave = (V['--muted'] || R.getPropertyValue('--muted') || '').trim(), linea = (V['--border'] || R.getPropertyValue('--border') || '').trim();
    var pg = String(op.pagina || '{n} / {t}').split('{n}'), pg2 = (pg[1] || '').split('{t}');
    var pagina = cs(pg[0]) + ' counter(page) ' + cs(pg2[0]) + ' counter(pages) ' + cs(pg2[1] || '');
    var fecha = '';
    try{ fecha = new Date().toLocaleString(op.lang || undefined, { timeZone:'Europe/Madrid', dateStyle:'short', timeStyle:'short' }); }catch(e){ fecha = new Date().toLocaleString(); }
    var caja = 'font-family:system-ui,sans-serif;font-size:8pt;' + (suave ? 'color:' + suave + ';' : '') + (linea ? 'border-top:.5pt solid ' + linea + ';' : '') + 'padding-top:3pt;vertical-align:top;';
    var pie = '@page{size:A4;margin:14mm 14mm 18mm 14mm;'
      + '@bottom-left{content:' + cs(op.marca || '') + ';text-align:left;' + caja + '}'
      + '@bottom-center{content:' + cs(op.centro || '') + ';text-align:center;' + caja + '}'
      + '@bottom-right{content:' + cs(fecha + ' · ') + ' ' + pagina + ';text-align:right;' + caja + '}}'
      + (raiz ? ':root{' + raiz + '}' : '')
      + 'html,body{height:auto !important;overflow:visible !important;background:var(--surface,transparent) !important;color:var(--text,inherit) !important}'
      + 'body *{overflow:visible !important;max-height:none !important}'
      + '.sf-imp-tit{font-size:15pt;margin:0 0 8pt}.sf-imp-valor{white-space:pre-wrap}';
    var st = function(el){ var s = el.getAttribute('style'); return s ? ' style="' + esc(s) + '"' : ''; };
    var html = '<!DOCTYPE html><html lang="' + esc(op.lang || D.documentElement.lang || '') + '"' + st(D.documentElement) + '><head><meta charset="utf-8">'
      + '<base href="' + esc(W.location.href) + '"><title>' + esc(op.titulo || D.title) + '</title>' + links
      + '<style>' + css + pie + '</style></head><body class="' + esc(D.body.className) + '">'
      + (op.titulo ? '<h1 class="sf-imp-tit">' + esc(op.titulo) + '</h1>' : '')
      + c.outerHTML + '</body></html>';
    var fr = D.createElement('iframe');
    fr.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';
    D.body.appendChild(fr);
    var w = fr.contentWindow;
    w.document.open(); w.document.write(html); w.document.close();
    var quita = function(){ setTimeout(function(){ if(fr.parentNode) fr.parentNode.removeChild(fr); }, 500); };
    w.addEventListener('afterprint', quita);
    setTimeout(function(){ try{ w.focus(); w.print(); }catch(e){ W.print(); } setTimeout(quita, 60000); }, 350);
    return fr;
  };
})();
