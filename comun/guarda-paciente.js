/* ══════════════════════════════════════════════════════════════════════
   Versión 2026.09.19-18:15:47
   LA GARDE DU PACIENTE — /Salufolio/comun/guarda-paciente.js

   « Si le PDF porte un nom ou un SIP qui ne correspond pas au dossier
     ouvert, il prévient avant l'extraction. »       — P-H, 15/09/2026

   Le 15 septembre, P-H a créé un patient d'essai et lui a donné un de
   ses propres documents. Le lecteur l'a vu :

       « O el documento mezcla dos pacientes, o la anonimización se ha
         aplicado sólo a una parte. Hay que comprobarlo antes de guardar
         nada. »

   Il avait raison — mais il l'a dit APRÈS quatre minutes de travail.
   En assistée, ces quatre minutes sont celles de l'usager : copier,
   coller, attendre, revenir.

   ── CE QU'ELLE FAIT ──

   Avant de lire un document, on y cherche le SIP du dossier ouvert, ou
   le nom du patient. S'ils n'y sont pas, ON ARRÊTE et on montre le
   document : c'est l'opérateur qui décide.

   Un PDF rangé dans le mauvais dossier est l'erreur la plus facile à
   commettre, et la plus grave : des données qui s'attachent à quelqu'un
   d'autre pour toujours.
   ══════════════════════════════════════════════════════════════════════ */

var SF_GUARDA = window.SF_GUARDA = (function(){

  /* ── enlever accents, ponctuation, doubles espaces ── */
  function pela(s){
    return String(s||'').toUpperCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^A-Z0-9 ]/g,' ')
      .replace(/\s+/g,' ').trim();
  }

  /* ── le SIP, avec ou sans séparateurs ── */
  function buscaSip(texto, sip){
    var s = String(sip||'').replace(/\D/g,'');
    if(s.length < 6) return false;              /* trop court pour être sûr */
    var t = String(texto||'').replace(/\D/g,'');
    return t.indexOf(s) >= 0;
  }

  /* ── le nom : on accepte que l'ordre change ──
     « GÓMEZ RUIZ, MARÍA DEL CARMEN » et « MARÍA DEL CARMEN GÓMEZ RUIZ » sont la
     même personne. On demande que les mots longs y soient tous. */
  function buscaNombre(texto, nombre){
    var t = pela(texto);
    var palabras = pela(nombre).split(' ').filter(function(p){ return p.length >= 3; });
    if(palabras.length < 2) return false;       /* un seul mot ne prouve rien */
    var hay = palabras.filter(function(p){ return t.indexOf(p) >= 0; });
    return hay.length >= Math.max(2, palabras.length - 1);
  }

  /* ══ LA VÉRIFICATION ══
     Rend : { ok, porque, sip, nombre, aviso }
       ok true  → le document parle bien de ce patient, ou on ne peut pas
                  le dire (et alors « porque » vaut 'no_consta')
       ok false → il parle de quelqu'un d'autre */
  function comprueba(texto, paciente){
    paciente = paciente || {};
    var sip = paciente.sip || '';
    var nom = paciente.patient_name || paciente.etiqueta || paciente.nombre || '';

    if(!sip && !nom)
      return { ok:true, porque:'sin_paciente',
               aviso:'No hay expediente abierto: no puedo comprobar nada.' };

    var hSip = sip ? buscaSip(texto, sip) : null;
    var hNom = nom ? buscaNombre(texto, nom) : null;

    if(hSip === true || hNom === true)
      return { ok:true, porque: (hSip ? 'sip' : 'nombre'), sip:hSip, nombre:hNom };

    /* ni l'un ni l'autre : le document ne porte peut-être rien */
    var pareceVacio = !/\d{6,}/.test(String(texto||''));
    if(pareceVacio && hNom === false)
      return { ok:true, porque:'no_consta', sip:hSip, nombre:hNom,
               aviso:'El documento no lleva ni SIP ni nombre legibles: '
                   + 'no he podido comprobar de quién es.' };

    return { ok:false, porque:'otro', sip:hSip, nombre:hNom,
             esperado:{ sip:sip, nombre:nom } };
  }

  /* ── ce qu'on a trouvé à la place, pour le montrer ── */
  function queHay(texto){
    var t = String(texto||'');
    var out = {};
    var m = t.match(/\b\d{8,10}\b/g);
    if(m) out.numeros = m.slice(0, 6);
    /* les majuscules groupées ressemblent à des noms */
    var n = t.match(/\b[A-ZÁÉÍÓÚÑ]{3,}(?:[ ,]+[A-ZÁÉÍÓÚÑ]{3,}){1,3}\b/g);
    if(n){
      var vus = {}, buenos = [];
      n.forEach(function(x){
        var p = x.trim();
        if(/HOSPITAL|SERVICIO|INFORME|CONSELLERIA|GENERAL|URGENCIAS|RADIOLOG/.test(p)) return;
        if(!vus[p]){ vus[p] = 1; buenos.push(p); }
      });
      out.nombres = buenos.slice(0, 5);
    }
    return out;
  }

  /* ══ LA FENÊTRE : on montre, et l'opérateur décide ══ */
  function pregunta(texto, paciente, alDecidir){
    var r = comprueba(texto, paciente);
    if(r.ok && !r.aviso){ alDecidir(true, r); return; }

    var hay = queHay(texto);
    var esp = r.esperado || {};
    var cuerpo =
        '<div class="sf-sordo" style="color:var(--warn)">'
      + (r.ok
         ? r.aviso
         : 'Este documento <b>no parece ser de ' + (esp.nombre || esp.sip) + '</b>.')
      + '</div>'
      + '<div style="font-size:12.5px;line-height:1.9;margin:14px 0">'
      + '<b>Se esperaba</b><br>'
      + (esp.nombre ? '&nbsp;&nbsp;nombre : ' + esp.nombre + '<br>' : '')
      + (esp.sip    ? '&nbsp;&nbsp;SIP&nbsp;&nbsp;&nbsp;&nbsp;: ' + esp.sip + '<br>' : '')
      + '</div>'
      + (hay.nombres || hay.numeros
         ? '<div style="font-size:12.5px;line-height:1.9;margin:14px 0">'
           + '<b>En el documento hay</b><br>'
           + (hay.nombres ? '&nbsp;&nbsp;' + hay.nombres.join('<br>&nbsp;&nbsp;') + '<br>' : '')
           + (hay.numeros ? '&nbsp;&nbsp;<span style="font-family:var(--mono)">'
                          + hay.numeros.join(' · ') + '</span>' : '')
           + '</div>'
         : '')
      + '<details style="margin-top:14px"><summary style="cursor:pointer;'
      + 'font-size:12.5px;color:var(--accent)">Ver el principio del documento</summary>'
      + '<pre style="max-height:220px;overflow:auto;font-size:11px;line-height:1.5;'
      + 'background:var(--bg);border:1px solid var(--border);border-radius:7px;'
      + 'padding:10px;margin-top:8px;white-space:pre-wrap">'
      + String(texto||'').substring(0, 1200).replace(/</g,'&lt;')
      + '</pre></details>'
      + '<div style="font-size:12px;color:var(--muted);margin-top:14px;line-height:1.7">'
      + 'Un documento guardado en el expediente equivocado ata datos a otra '
      + 'persona — y eso no se deshace solo.</div>';

    var pie = '<button class="sf-ventana-btn sf-suave" id="_g-no">No leerlo</button>'
            + '<button class="sf-ventana-btn" id="_g-si" '
            + 'style="border-color:var(--warn);color:var(--warn)">Leerlo igualmente</button>';

    var v = MF.ventana('⚠ ¿Es de este paciente?', cuerpo,
                       { ancho:'560px', alPie:pie,
                         alCerrar:function(){ alDecidir(false, r); } });
    v.caja.querySelector('#_g-no').onclick = function(){ v.cierra(); alDecidir(false, r); };
    v.caja.querySelector('#_g-si').onclick = function(){ v.cierra(); alDecidir(true, r); };
  }

  return { comprueba: comprueba, pregunta: pregunta, queHay: queHay };
})();
