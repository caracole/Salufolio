/* ═══════════════════════════════════════════════════════════════════════
   MF.JS — la pièce commune des modules de Salufolio
   (P-H + Claude, 01/09/2026)

   DOCTRINE (P-H) : chaque fonction devient un PROGRAMME à part entière —
   Curvas, Cronología, Medicamentos, Radar… Ils ont le .mf en commun et
   ne communiquent pas entre eux. Le panal (ou Salufolio réduit à un
   lanceur) appelle celui dont on a besoin, avec le dossier en paramètre.

   CE QUI SE PASSE, C'EST LE MATRICULE, PAS LE FICHIER :
        curvas.html?mf=JMA8986
   Le module va chercher JMA8986.mf lui-même. Rien de lourd ne transite,
   et il n'y a qu'une vérité : le fichier sur le disque.

   Cette pièce est le SEUL savoir partagé : lire un .mf, y trouver les
   mesures, les médicaments, les événements. Le jour où le format évolue,
   un seul fichier à corriger.

   Un paramètre inconnu est ignoré poliment : le jour où un module voudra
   en dire davantage à un autre (« ouvre-toi sur cette date »), il
   ajoutera un paramètre, et les modules qui ne le comprennent pas
   s'ouvriront normalement. Le canal naîtra tout seul, sans réforme.
   ═══════════════════════════════════════════════════════════════════════ */

var MF = (function(){

  var datos=null, matricula=null, ruta=null;

  /* ── les paramètres de l'adresse ── */
  function params(){
    var p={}, q=location.search.substring(1);
    if(!q) return p;
    q.split('&').forEach(function(t){
      var i=t.indexOf('='); 
      if(i<0) p[decodeURIComponent(t)]=true;
      else p[decodeURIComponent(t.substring(0,i))]=decodeURIComponent(t.substring(i+1));
    });
    return p;
  }


  /* ══ OÙ SONT LES PATIENTS, selon où l'on est (P-H, 15/09) ══
     resumen/ est à un niveau de la racine ; adquisicion/manual/ à deux.
     « ../pacientes/ » ne peut donc pas valoir pour les deux.

     Avec un serveur, le chemin absolu tranche. Sans lui, on compte les
     tronçons de l'adresse pour savoir de combien il faut remonter. */
  function _raizPacientes(){
    if(location.protocol !== 'file:') return '/pacientes/';
    var partes = location.pathname.split('/').filter(Boolean);
    partes.pop();                                   /* le fichier */
    var i = partes.lastIndexOf('Salufolio');
    var hondo = (i >= 0) ? (partes.length - i - 1) : 1;
    var sube = '';
    for(var k = 0; k < hondo; k++) sube += '../';
    return sube + 'pacientes/';
  }

  /* ── charger le dossier ──
     v2 (P-H, 11/09) : « rien n'empêche la sélection manuelle comme elle
     est programmée » — mais le nom du fichier porte déjà la matricule,
     donc on accepte les deux :
         carga('AGL5678', '../pacientes/AGL5678/')          la matricule
         carga('AGL5678_2026-09-02_….mf')                   le fichier
     Dans le second cas le dossier se déduit, et les deux ne peuvent
     plus se contredire. */
  /* ══════════════════════════════════════════════════════════════════
     EL ECO VIVE EN MEMORIA, NUNCA EN EL DISCO (P-H, 17/09/2026)

     « Moi ça ne me plaît pas du tout » — y tenía razón: cada campo
     figuraba DOS veces en el fichero.

         "paciente": { "nombre":"Ana", "matricula":"AGR0000", … }
         "patient_name": "Ana Gómez Ruiz"      ← lo mismo
         "patient_label": "AGR0000"            ← lo mismo
         "sip": "12340000"                     ← lo mismo

     El eco existía porque DIECISIETE programas leen « patient_label »,
     y no se rompen diecisiete de golpe. Pero no tenía por qué estar en
     el disco: el fichero es la VERDAD, el eco sólo una comodidad.

     Así que se pone al cargar y se quita al guardar. El disco queda
     limpio; los diecisiete leen lo que MF les da, sin saberlo. Y el día
     que ninguno lo lea, estas dos funciones se van sin dejar rastro.
     ══════════════════════════════════════════════════════════════════ */
  var ECO = [['matricula','patient_label'], ['sip','sip'], ['nhc','nhc'],
             ['cip_sns','cip_sns'], ['nacimiento','nacimiento'], ['sexo','sexo']];

  function ponEco(d){
    if(!d) return d;
    var P = d.paciente;
    /* un fichero de antes, sin bloque: se le hace uno */
    if(!P || typeof P !== 'object'){
      P = d.paciente = {};
      ECO.forEach(function(par){ if(d[par[1]]) P[par[0]] = d[par[1]]; });
      if(d.patient_name){
        var t = String(d.patient_name).trim().split(/\s+/);
        P.nombre = t[0] || '';
        P.apellidos = t.slice(1).join(' ');
      }
    }
    /* los apellidos de antes, en dos campos */
    if(!P.apellidos && (P.apellido1 || P.apellido2))
      P.apellidos = [P.apellido1, P.apellido2].filter(Boolean).join(' ');
    delete P.apellido1; delete P.apellido2;

    /* y el eco, para los diecisiete */
    ECO.forEach(function(par){ if(P[par[0]]) d[par[1]] = P[par[0]]; });
    var n = ((P.nombre||'') + ' ' + (P.apellidos||'')).trim();
    d.patient_name = n || P.matricula || '';
    return d;
  }

  function quitaEco(d){
    if(!d || !d.paciente) return d;
    /* lo que el bloque ya dice, no hace falta dos veces */
    ECO.forEach(function(par){
      if(d.paciente[par[0]] && par[1] !== 'sip') delete d[par[1]];
      else if(par[1] === 'sip' && d.paciente.sip) delete d[par[1]];
    });
    delete d.patient_name;
    delete d.patient_label;
    return d;
  }

  function carga(mat, carpeta){
    var m = /^([A-Za-z]{2,4}\d{3,6})_.*\.(mf|sf|json)$/i.exec(mat);
    if(m){
      matricula = m[1];
      ruta = (carpeta || (_raizPacientes() + m[1] + '/')) + mat;
      return fetch(ruta)
        .then(function(r){ if(!r.ok) throw new Error('no se encuentra '+ruta); return r.json(); })
        .then(function(d){ datos=ponEco(d); try{ letreroDemo(); }catch(e){} return datos; });
    }
    matricula = mat;
    ruta = (carpeta||'') + mat + '.mf';
    return fetch(ruta)
      .then(function(r){ if(!r.ok) throw new Error('no se encuentra '+ruta); return r.json(); })
      .then(function(d){ datos=ponEco(d); try{ letreroDemo(); }catch(e){} return datos; });
  }

  /* le travail en cours reprend la main sur le fichier, s'il est du même
     dossier et plus récent — on prévient, on ne décide pas à sa place. */
  function reanuda(){
    var g=hayTrabajo();
    if(!g) return false;
    if(matricula && g.matricula && g.matricula!==matricula) return false;
    datos = g.datos;
    sucio = true;
    var b=document.getElementById('mf-guardar');
    if(b){ b.style.color='var(--warn,#e8a44a)'; b.textContent='💾*'; b.title='Hay cambios sin guardar en el fichero'; }
    var f = g.fecha? new Date(g.fecha) : null;
    aviso('↩ Trabajo en curso recuperado' + (f? ' ('+f.toLocaleString()+')' : '') + ' — el 💾 lo escribe en el fichero');
    return true;
  }

  /* ── ce que les modules demandent le plus souvent ── */
  /* ══════════════════════════════════════════════════════════════════
     EL PERFIL DEL PACIENTE (P-H, 04/09) — está EN EL .mf, no fuera.
     El expediente se basta a sí mismo: se abre donde sea, y se sabe de
     quién es. Nombre, apellidos, SIP, matrícula, nacimiento, sexo.
     Todo módulo lo lee con MF.paciente() — para mostrarlo, imprimirlo,
     ponerlo en una receta.
     ══════════════════════════════════════════════════════════════════ */
  /* ══ v3 (P-H, 17/09/2026) : DOS CAMPOS, NO TRES ══
     « [nombre | prénom(s)] [apellidos | nom] »

     « apellido1 » y « apellido2 » suponían la costumbre española. Un
     francés lleva un nombre, y los vascos recitaban OCHO apellidos.
     Dos campos aguantan todo — « Michèle | Rogues de Fursac ».

     Y « etiqueta » es el nombre entero: nombre + apellidos. Si no hay
     ninguno, la matrícula — « sinon on ne sait plus où on est » (P-H). */
  function paciente(){
    if(!datos) return { matricula: matricula||'', etiqueta: matricula||'' };
    var p = datos.paciente || datos.perfil || {};

    var nom = p.nombre || datos.nombre || '';
    var ape = p.apellidos
           || [p.apellido1, p.apellido2].filter(Boolean).join(' ')
           || '';
    /* un fichero de antes: patient_name lo llevaba todo junto */
    if(!nom && !ape && datos.patient_name){
      var t = String(datos.patient_name).trim().split(/\s+/);
      nom = t[0] || '';
      ape = t.slice(1).join(' ');
    }
    var mat = p.matricula || datos.patient_label || datos.matricula
            || matricula || '';
    var entero = (nom + ' ' + ape).trim();

    return {
      matricula:  mat,
      nombre:     nom,
      apellidos:  ape,
      /* los dos de antes, para quien aún los lea */
      apellido1:  p.apellido1 || ape.split(/\s+/)[0] || '',
      apellido2:  p.apellido2 || ape.split(/\s+/).slice(1).join(' ') || '',
      etiqueta:   entero || p.etiqueta || mat,
      sip:        p.sip        || datos.sip || '',
      nhc:        p.nhc        || datos.nhc || '',
      cip_sns:    p.cip_sns    || datos.cip_sns || '',
      nacimiento: p.nacimiento || datos.nacimiento || datos.birth || '',
      sexo:       p.sexo       || datos.sexo || datos.sex || '',
      version:    datos.version || '',
      creado:     datos.creado || '',
      modificado: (datos.historial && datos.historial.modificacion || []).length
                  ? datos.historial.modificacion.slice(-1)[0].fecha : ''
    };
  }

  /* écrire le profil dans le dossier — c'est là qu'il vit */
  function ponPaciente(p){
    if(!datos) return;
    datos.paciente = Object.assign(datos.paciente||{}, p||{});
    tocado();
  }

  /* ── LES MESURES, à plat et triées par date ──
     Le vrai format de Salufolio (vu dans un .sf le 01/09) :
         "mesures": [ { "date":"2012-09-12",
                        "vals": { "hemoglobina":13.7, "vcm":92.9, … },
                        "source":"…", "pdf_id":"PDF004" }, … ]
     Une entrée par prise de sang, tous ses paramètres dedans. On les
     étale : une ligne par valeur. Les autres formes restent acceptées —
     un .sf plus ancien ou d'ailleurs se lit quand même. */
  function mesures(filtro){
    if(!datos) return [];
    var out=[];
    var M = datos.mesures || datos.medidas || datos.measures || [];
    if(Array.isArray(M)){
      M.forEach(function(m){
        var f = m.date || m.fecha || '';
        var V = m.vals || m.valores || m.values;
        if(V && typeof V==='object'){
          /* la forme de Salufolio : une prise, plusieurs paramètres */
          Object.keys(V).forEach(function(c){
            var val=V[c];
            out.push({ fecha:f, clave:c,
                       valor: (val && typeof val==='object')? (val.valor!==undefined?val.valor:val.value) : val,
                       unidad:(val && typeof val==='object')? (val.unidad||val.unit||'') : '',
                       fuente: m.source || m.fuente || '', pdf: m.pdf_id || '' });
          });
        } else {
          out.push(norm(m));   /* une ligne = une valeur */
        }
      });
    } else {
      Object.keys(M).forEach(function(k){
        var v=M[k];
        if(Array.isArray(v)) v.forEach(function(m){ var n=norm(m); if(!n.clave) n.clave=k; out.push(n); });
        else if(v && typeof v==='object'){
          Object.keys(v).forEach(function(c){
            var val=v[c];
            out.push({ fecha:k, clave:c,
                       valor:(val&&typeof val==='object')?(val.valor!==undefined?val.valor:val.value):val,
                       unidad:(val&&typeof val==='object')?(val.unidad||val.unit||''):'' , fuente:'' });
          });
        }
      });
    }
    out = out.filter(function(m){ return m.fecha && m.clave && m.valor!==undefined && m.valor!==null && m.valor!==''; });
    if(filtro) out = out.filter(function(m){ return m.clave===filtro; });
    out.sort(function(a,b){ return a.fecha < b.fecha ? -1 : a.fecha > b.fecha ? 1 : 0; });
    return out;
  }
  function norm(m){
    return { fecha: m.date||m.fecha||m.f||'', clave: m.clave||m.key||m.nombre||m.parametro||'',
             valor: (m.valor!==undefined)?m.valor:(m.value!==undefined?m.value:m.v),
             unidad: m.unidad||m.unit||m.u||'', fuente: m.source||m.fuente||m.origen||'' };
  }

  /* la liste des paramètres présents, avec leur nombre de mesures */
  function claves(){
    var c={};
    mesures().forEach(function(m){ c[m.clave]=(c[m.clave]||0)+1; });
    return Object.keys(c).sort(function(a,b){ return c[b]-c[a]; })
      .map(function(k){ return {clave:k, n:c[k]}; });
  }

  /* les événements : { fecha, texto, tipo, fuente } */
  function eventos(){
    if(!datos) return [];
    var E = datos.events || datos.eventos || datos.historial || [];
    if(!Array.isArray(E)) E = Object.keys(E).map(function(k){
      var v=E[k]; return (typeof v==='object')? Object.assign({fecha:k}, v) : {fecha:k, texto:v};
    });
    return E.map(function(e){
      return { fecha: e.date||e.fecha||'', titulo: e.title||e.titulo||'',
               texto: e.text||e.texto||e.descripcion||'',
               tipo: e.type||e.tipo||'', fuente: e.source||e.fuente||'', pdf: e.pdf_id||'' };
    }).filter(function(e){ return e.fecha; })
      .sort(function(a,b){ return a.fecha < b.fecha ? -1 : 1; });
  }

  /* les médicaments */
  function medicamentos(){
    if(!datos) return [];
    var M = datos.medicaments || datos.medicamentos || datos.meds || [];
    if(!Array.isArray(M)) M = Object.keys(M).map(function(k){
      var v=M[k]; return (typeof v==='object')? Object.assign({nombre:k}, v) : {nombre:k, dosis:v};
    });
    return M.map(function(m){
      return { nombre: m.nom||m.nombre||m.name||'', dosis: m.dose||m.dosis||'',
               frecuencia: m.frequence||m.frecuencia||'',
               estado: m.statut||m.estado||'',
               desde: m.date||m.desde||m.inicio||'', hasta: m.date_fin||m.hasta||m.fin||'',
               fuente: m.source||m.fuente||'', pdf: m.pdf_id||'' };
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     L'ENREGISTREMENT (P-H, 01/09 : « NO OLVIDAR IMPORTANTE »)

     Un module comme Medicamentos ne fait pas que regarder : il CRÉE et
     il MODIFIE. Il faut donc écrire le .mf — et l'écriture est
     centralisée ici, comme la lecture : un seul endroit qui sait le
     faire, tous les modules l'appellent.

         MF.tocado()   — le module signale qu'il a modifié quelque chose
         MF.guarda()   — écrit le .mf

     Le navigateur ne peut pas écrire dans un fichier sans permission.
     On désigne donc le fichier une fois (showSaveFilePicker), et les
     enregistrements suivants écrivent dedans sans plus rien demander —
     exactement comme le 💾 du panneau du panal. Repli sur le
     téléchargement pour les navigateurs qui ne savent pas.
     ══════════════════════════════════════════════════════════════════ */
  var manija=null, sucio=false, enMarco=false;

  /* ══ LA MÉMOIRE DE TRAVAIL (idée de P-H, 02/09) ══
     Chaque modification s'écrit AUSSITÔT dans le localStorage. Ainsi on
     passe d'un module à l'autre, on ferme l'onglet, on revient demain :
     le travail est là. Rien ne se perd entre deux 💾.
     Le 💾, lui, verse cette mémoire dans le fichier du disque — et ce
     geste-là reste le vôtre, car un navigateur n'écrit jamais sur le
     disque sans qu'on le lui demande. */
  var CLAVE_TRABAJO = 'mf_trabajo';

  function tocado(){
    /* dans le cadre : on rend la main au lanceur, qui tient le fichier */
    if(enMarco){
      try{ parent.postMessage({de:'modulo', tipo:'tocado', datos:datos}, '*'); }catch(e){}
      return;
    }
    sucio=true;
    guardaTrabajo();
    var b=document.getElementById('mf-guardar');
    if(b){ b.style.color='var(--warn,#e8a44a)'; b.title='Hay cambios sin guardar en el fichero'; b.textContent='💾*'; }
    /* ══ v6 (P-H) — L'ÉCRITURE AUTOMATIQUE ══
       La PREMIÈRE fois, il faut désigner le fichier : c'est le 💾, et le
       navigateur ne permet rien d'autre. Mais une fois qu'on le connaît,
       on écrit tout seul à chaque modification — plus d'astérisque, plus
       d'insulte en sortant, plus rien à quoi penser.
       On laisse passer un instant pour ne pas écrire dix fois pendant
       qu'une fiche se remplit. */
    if(manija){
      clearTimeout(_autoT);
      _autoT = setTimeout(function(){ guarda(null, true); }, 900);
    }
  }
  var _autoT=null;

  function guardaTrabajo(){
    if(!datos) return;
    try{
      localStorage.setItem(CLAVE_TRABAJO, JSON.stringify({
        matricula: matricula,
        fecha: new Date().toISOString(),
        datos: datos
      }));
    }catch(e){ /* mémoire pleine : on continue, le 💾 reste possible */ }
  }

  function hayTrabajo(){
    try{
      var g=JSON.parse(localStorage.getItem(CLAVE_TRABAJO)||'null');
      return (g && g.datos)? g : null;
    }catch(e){ return null; }
  }

  function olvidaTrabajo(){
    try{ localStorage.removeItem(CLAVE_TRABAJO); }catch(e){}
  }
  function limpio(){
    sucio=false;
    var b=document.getElementById('mf-guardar');
    if(b){ b.style.color=''; b.title='Guardar el expediente'; b.textContent='💾'; }
  }
  function hayCambios(){ return sucio; }

  function guarda(alTerminar, callado){
    if(!datos){ if(alTerminar) alTerminar(false,'no hay expediente'); return; }
    /* la date de modification, comme le fait Salufolio */
    /* v2 (P-H, 15/09) : « modificado » écrasait une seule date à chaque
       fois. L'historial fait mieux — il empile : quand, par quelle voie,
       et pourquoi. On n'écrase pas le passé.
       try{ datos.modificado = new Date().toISOString(); }catch(e){} */
    /* ══ EL ECO NO SE ESCRIBE (P-H, 17/09/2026) ══
       Se quita de una COPIA: los diecisiete programas siguen leyéndolo
       en memoria mientras la sesión dura. Sólo el disco queda limpio. */
    var paraDisco = quitaEco(JSON.parse(JSON.stringify(datos)));
    if(typeof SF_PLANTILLA !== 'undefined' && SF_PLANTILLA.ordena)
      paraDisco = SF_PLANTILLA.ordena(paraDisco);
    var txt = JSON.stringify(paraDisco, null, 1);
    var nombre = (matricula||'expediente') + '.mf';

    if(window.showSaveFilePicker){
      (async function(){
        try{
          if(!manija){
            manija = await window.showSaveFilePicker({
              suggestedName: nombre,
              types:[{ description:'Expediente Salufolio', accept:{'application/json':['.mf','.sf','.json']} }]
            });
          }
          var w = await manija.createWritable();
          await w.write(txt); await w.close();
          limpio();
          olvidaTrabajo();                       /* le fichier fait foi désormais */
          try{ sessionStorage.setItem('mf_datos', txt); }catch(e){}
          if(!callado) aviso('💾 Guardado en ' + (manija.name||nombre) + ' — a partir de ahora se guarda solo');
          else destello();
          if(alTerminar) alTerminar(true);
        }catch(e){
          if(e.name==='AbortError'){ if(alTerminar) alTerminar(false,'cancelado'); return; }
          descarga(txt, nombre); if(alTerminar) alTerminar(true);
        }
      })();
    } else { descarga(txt, nombre); if(alTerminar) alTerminar(true); }
  }

  function descarga(txt, nombre){
    var a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([txt],{type:'application/json'}));
    a.download=nombre; document.body.appendChild(a); a.click(); a.remove();
    limpio(); olvidaTrabajo();
    aviso('⬇ Descargado: ' + nombre + ' — reemplácelo en su carpeta');
  }

  /* un mot bref, sans fenêtre */
  function aviso(msg){
    var d=document.getElementById('mf-aviso');
    if(!d){
      d=document.createElement('div'); d.id='mf-aviso';
      d.style.cssText='position:fixed;left:50%;top:12px;transform:translateX(-50%);z-index:9500;'
        +'background:var(--surface,#161b27);border:1px solid var(--accent,#4a8fe8);border-radius:10px;'
        +'padding:8px 16px;font-size:13px;color:var(--text,#e8eaf0);box-shadow:0 6px 24px rgba(0,0,0,.5)';
      document.body.appendChild(d);
    }
    d.textContent=msg; d.style.display='block';
    clearTimeout(window._mfAvisoT);
    window._mfAvisoT=setTimeout(function(){ d.style.display='none'; }, 3200);
  }


  /* la question avant de partir — trois issues franches */
  function preguntaSalir(salir){
    var v=document.getElementById('mf-salir'); if(v) v.remove();
    v=document.createElement('div'); v.id='mf-salir';
    v.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9800;'
      +'display:flex;align-items:center;justify-content:center;padding:16px';
    v.innerHTML='<div style="background:var(--surface,#161b27);border:2px solid var(--warn,#e8a44a);'
      +'border-radius:14px;padding:20px 22px;max-width:min(90vw,420px);'
      +'font-family:system-ui,sans-serif;color:var(--text,#e8eaf0);box-shadow:0 10px 40px rgba(0,0,0,.6)">'
      +'<div style="font-family:Georgia,serif;font-size:1.2em;font-weight:700;color:var(--warn,#e8a44a);margin-bottom:8px">'
      +'💾 Hay cambios sin guardar</div>'
      +'<div style="font-size:.95em;line-height:1.6;margin-bottom:16px">'
      +'Ha modificado el expediente y todavía no lo ha guardado. Si sale ahora, esos cambios se pierden.</div>'
      +'<div style="display:flex;gap:8px;flex-wrap:wrap">'
      +'<button id="mf-s1" style="flex:1;min-width:130px;padding:9px;border-radius:9px;border:1px solid var(--ok,#3dbf7f);background:transparent;color:var(--ok,#3dbf7f);font-size:.92em;cursor:pointer">Guardar y salir</button>'
      +'<button id="mf-s2" style="flex:1;min-width:120px;padding:9px;border-radius:9px;border:1px solid #e85a5a;background:transparent;color:#e85a5a;font-size:.92em;cursor:pointer">Salir sin guardar</button>'
      +'<button id="mf-s3" style="flex:1;min-width:100px;padding:9px;border-radius:9px;border:1px solid var(--muted,#7a8499);background:transparent;color:var(--muted,#7a8499);font-size:.92em;cursor:pointer">Cancelar</button>'
      +'</div></div>';
    document.body.appendChild(v);
    document.getElementById('mf-s1').onclick=function(){
      guarda(function(ok){ if(ok){ v.remove(); setTimeout(salir, 400); } else v.remove(); });
    };
    document.getElementById('mf-s2').onclick=function(){ sucio=false; v.remove(); salir(); };
    document.getElementById('mf-s3').onclick=function(){ v.remove(); };
  }


  /* l'écriture automatique se signale d'un bref éclat, sans un mot */
  function destello(){
    var b=document.getElementById('mf-guardar');
    if(!b) return;
    b.style.color='var(--ok,#3dbf7f)'; b.textContent='💾';
    b.title='Guardado automáticamente';
    setTimeout(function(){ if(!sucio) b.style.color=''; }, 700);
  }

  /* le bouton, à côté de l'abeille */
  function botonGuardar(){
    if(enMarco) return;   /* le cadre du lanceur porte déjà ce bouton */
    if(document.getElementById('mf-guardar')) return;
    var b=document.createElement('div');
    b.id='mf-guardar'; b.innerHTML='💾'; b.title='Guardar el expediente';
    b.style.cssText='position:fixed;top:10px;right:92px;z-index:9000;font-size:22px;'
      +'cursor:pointer;opacity:.75;transition:all .25s;user-select:none';
    b.onmouseover=function(){ b.style.opacity='1'; b.style.transform='scale(1.2)'; };
    b.onmouseout =function(){ b.style.opacity='.75'; b.style.transform='scale(1)'; };
    b.onclick=function(){ guarda(); };
    document.body.appendChild(b);
  }

  /* on ne quitte pas sans prévenir */
  window.addEventListener('beforeunload', function(e){
    if(!sucio) return;
    e.preventDefault(); e.returnValue='';
    return '';
  });


  /* ══════════════════════════════════════════════════════════════════
     LA BARRE DU MODULE (P-H, 03/09)
     Le module déclare ses commandes ; le lanceur les affiche dans le
     bandeau, sous les siennes. Ainsi la barre ne défile jamais.

         MF.barra('Rúbricas', [
           { id:'hema', texto:'HEMATOLOGÍA', activo:true },
           { tipo:'separador' },
           { id:'todo', icono:'✔', texto:'Todo' }
         ], function(id){ … });      ← ce qu'on fait quand on la touche

     Hors du cadre (module ouvert seul), la barre se dessine en haut de
     la page : le module marche pareil, avec ou sans lanceur.
     ══════════════════════════════════════════════════════════════════ */
  var _alBarra=null;

  /* v8 (P-H, 03/09) : LA BARRE RESTE CHEZ LE MODULE.
     Deux étages distincts, jamais superposés :
       · la barre du module — fixe en haut de SON écran, toujours visible,
         car on doit pouvoir changer de rubrique sans rien appeler ;
       · le bandeau du lanceur — dort au-dessus, et ne paraît que si on
         monte jusqu'au fil.
     Même comportement dans le cadre ou hors du cadre. */
  function barra(titulo, mandos, alTocar){
    _alBarra = alTocar;
    dibujaBarraSuelta(titulo, mandos);
  }
  function barraActivos(ids){
    document.querySelectorAll('#mf-barra [data-bm]').forEach(function(e){
      var on = ids.indexOf(e.dataset.bm)>=0;
      e.style.borderColor = on? 'var(--accent,#4a8fe8)' : 'var(--border,#232a3a)';
      e.style.background  = on? 'rgba(74,143,232,.16)' : 'transparent';
      e.style.opacity     = on? '1' : '.8';
    });
  }
  /* la barre quand le module vit seul, sans lanceur */
  function dibujaBarraSuelta(titulo, mandos){
    var z=document.getElementById('mf-barra');
    if(!z){
      z=document.createElement('div'); z.id='mf-barra';
      /* 6 px en haut : la place du fil du lanceur, qu'on doit pouvoir
         frôler pour faire paraître son bandeau par-dessus. */
      z.style.cssText='position:sticky;top:0;z-index:500;background:var(--surface,#161b27);'
        +'border-bottom:1px solid var(--border,#232a3a);padding:14px 16px 8px;display:flex;gap:7px;'
        +'flex-wrap:wrap;align-items:center;font-family:system-ui,sans-serif';
      document.body.insertBefore(z, document.body.firstChild);
    }
    if(!mandos || !mandos.length){ z.remove(); return; }
    z.innerHTML=(titulo? '<span style="font-size:11px;color:var(--muted,#7a8499);text-transform:uppercase;letter-spacing:.6px">'+titulo+'</span>':'')
      + mandos.map(function(m){
          if(m.tipo==='separador') return '<span style="color:var(--border,#232a3a)">│</span>';
          return '<span data-bm="'+m.id+'" title="'+(m.titulo||'')+'" style="cursor:pointer;font-size:12.5px;'
            +'border:1px solid '+(m.activo?'var(--accent,#4a8fe8)':'var(--border,#232a3a)')+';border-radius:16px;'
            +'padding:3px 11px;opacity:'+(m.activo?'1':'.8')+';'
            +(m.activo?'background:rgba(74,143,232,.16);':'')+(m.color?'color:'+m.color+';':'')+'">'
            +(m.icono||'')+(m.icono&&m.texto?' ':'')+(m.texto||'')+'</span>';
        }).join('');
    z.querySelectorAll('[data-bm]').forEach(function(e){
      e.onclick=function(){ if(_alBarra) _alBarra(e.dataset.bm); };
    });
  }


  /* le module annonce son état — le bandeau du lanceur l'affiche */
  function estado(txt){
    if(enMarco){
      try{ parent.postMessage({de:'modulo', tipo:'estado', texto:txt}, '*'); }catch(e){}
      return;
    }
    var e=document.getElementById('est');
    if(e) e.textContent=txt;
  }

  /* ══════════════════════════════════════════════════════════════════
     LES COULEURS (P-H, 04/09) — les palettes vivent dans lanzador.json ;
     chaque module garde SA préférence dans son propre <módulo>.json.
     Le module va les lire lui-même : il s'habille tout seul, même ouvert
     sans lanceur. Et le bouton de palette agit sur le module qu'on
     regarde, pas sur le lanceur qui le porte.
     ══════════════════════════════════════════════════════════════════ */
  var PALETAS=[], MI_PALETA=null, MI_NOMBRE=null;

  function cargaPaletas(nombreModulo, alListo){
    MI_NOMBRE = nombreModulo;
    var base = enMarco? '' : '';
    /* v4 : plus de lanzador.json — les couleurs viennent du lanceur par
       message, ou du .js si le programme tourne seul. */
    Promise.reject(0)
      .then(function(r){ return r.json(); })
      .then(function(d){
        PALETAS = d.paletas || [];
        /* la préférence du module, puis celle du lanceur */
        return fetch(base + nombreModulo + '.json')
          .then(function(r){ return r.ok? r.json() : {}; })
          .catch(function(){ return {}; })
          .then(function(m){
            var elegida = m.paleta;
            if(!elegida){ try{ elegida = localStorage.getItem('sf_paleta'); }catch(e){} }
            aplicaPaleta(elegida || d.paleta_defecto || 'oscuro');
            if(alListo) alListo(PALETAS, MI_PALETA);
          });
      })
      .catch(function(){
        /* v2 (P-H, 09/09) : sans serveur, fetch échoue — mais le lanceur
           déclare ses palettes dans lanzador.js, et un <script src> passe
           partout. Le CSS ne porte plus que la structure ; les couleurs
           viennent toutes du .js, comme le veut la doctrine. */
        cargaPaletasPorScript(alListo);
      });
  }


  /* les palettes par <script src> : ça marche sans serveur */
  function cargaPaletasPorScript(alListo){
    if(typeof SF_LANZADOR !== 'undefined'){ _tomaPaletas(SF_LANZADOR, alListo); return; }
    var sc = document.createElement('script');
    sc.src = (config().lanzador || '../casa/casa.js');
    sc.onload = function(){
      if(typeof SF_LANZADOR !== 'undefined') _tomaPaletas(SF_LANZADOR, alListo);
      else if(alListo) alListo([], null);
    };
    sc.onerror = function(){ if(alListo) alListo([], null); };
    document.head.appendChild(sc);
  }
  function _tomaPaletas(d, alListo){
    PALETAS = d.paletas || [];
    var elegida = null;
    try{ elegida = localStorage.getItem('sf_paleta_'+(MI_NOMBRE||'mod')); }catch(e){}
    aplicaPaleta(elegida || config().paleta || d.paleta_defecto || 'oscuro');
    if(alListo) alListo(PALETAS, MI_PALETA);
  }

  function aplicaPaleta(id){
    var p=PALETAS.filter(function(x){return x.id===id})[0];
    if(!p) return;
    MI_PALETA=id;
    Object.keys(p.v).forEach(function(k){
      document.documentElement.style.setProperty(k, p.v[k]);
    });
    /* le module garde son choix : la prochaine fois il s'en souvient */
    try{ localStorage.setItem('sf_paleta_'+(MI_NOMBRE||'mod'), id); }catch(e){}
    /* et il le dit au lanceur, qui l'écrira dans son <módulo>.json */
    if(enMarco){
      try{ parent.postMessage({de:'modulo', tipo:'paleta-elegida', modulo:MI_NOMBRE, paleta:id}, '*'); }catch(e){}
    }
  }
  function paletas(){ return PALETAS; }
  function paletaActual(){ return MI_PALETA; }


  /* ══════════════════════════════════════════════════════════════════
     LE PROFIL (P-H, 04/09) — celui de QUI REGARDE, pas du patient.
     Il vit dans lanzador.json, commun à tous ; le lanceur le passe dans
     l'adresse (?perfil=medico), ce qui permet aussi d'éprouver un module
     seul, sans monter tout l'échafaudage.

         MF.perfil()            → 'medico', 'paciente', 'cuidador'…
         MF.esPerfil('medico')  → vrai si c'est celui-là
         MF.siPerfil(['medico','investigador'], fn)  → n'exécute que pour eux
     ══════════════════════════════════════════════════════════════════ */
  var LANG_SF='es';     /* la langue courante — elle manquait */
  var PERFIL=null;

  function perfil(){ return PERFIL; }
  function esPerfil(p){ return PERFIL===p; }
  function siPerfil(lista, fn){
    if(!PERFIL) return fn && fn();            /* sans profil : tout est ouvert */
    if((lista||[]).indexOf(PERFIL)>=0 && fn) fn();
  }
  /* cacher ce qui ne concerne pas ce profil : data-perfil="medico investigador" */
  function aplicaPerfil(){
    document.querySelectorAll('[data-perfil]').forEach(function(e){
      var lista=(e.getAttribute('data-perfil')||'').split(/\s+/);
      e.style.display = (!PERFIL || lista.indexOf(PERFIL)>=0)? '' : 'none';
    });
  }


  /* ══════════════════════════════════════════════════════════════════
     LE GLOSSAIRE (P-H, 05/09) — « mieux vaut en faire un module ».
     Les définitions vivent dans glosario.html ; les autres modules les
     demandent ici, sans embarquer les trois cents entrées. Une seule
     source, deux usages : le panneau complet là-bas, la bulle ici.

         MF.glosario('hemoglobina', function(t){ … })   → la définition
         MF.explica(elemento, 'hemoglobina')            → la bulle au clic
         MF.abreGlosario('hemoglobina')                 → ouvre le module
     ══════════════════════════════════════════════════════════════════ */
  var _glos={}, _glosCargado=false, _glosEspera=[];

  function cargaGlosario(alListo){
    /* v3 (P-H, 06/09) : les définitions vivent dans comun/glosario-datos.js,
       chargé comme un script — donc sans serveur aussi. */
    if(_glosCargado){ if(alListo) alListo(_glos); return; }
    if(typeof SF_GLOSARIO!=='undefined'){ _glos=SF_GLOSARIO; _glosCargado=true;
      if(alListo) alListo(_glos); return; }
    _glosEspera.push(alListo);
    if(_glosEspera.length>1) return;
    var s=document.createElement('script');
    s.src='../comun/glosario-datos.js';
    s.onload=function(){
      _glos = (typeof SF_GLOSARIO!=='undefined')? SF_GLOSARIO : {};
      _glosCargado=true; s.remove();
      _glosEspera.forEach(function(f){ if(f) f(_glos); }); _glosEspera=[];
    };
    s.onerror=function(){ _glos={}; _glosCargado=true; s.remove();
      _glosEspera.forEach(function(f){ if(f) f(_glos); }); _glosEspera=[]; };
    document.head.appendChild(s);
  }

  function claveCanon(k){
    return String(k||'').toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
  }
  /* le glossaire est rangé par LANGUE puis par CATÉGORIE :
       { es: { categorias: [ { nombre, params: [ {nombre, sigla, que, bajo, alto} ] } ] } }
     On cherche par le nom ou par le sigle, sans accent ni casse. */
  function glosario(clave, alListo, idioma){
    cargaGlosario(function(g){
      var lg = idioma || (typeof LANG_SF!=='undefined'? LANG_SF : 'es');
      var raiz = g[lg] || g.es || {};
      var c = claveCanon(clave), t = null;
      (raiz.categorias||[]).some(function(cat){
        return (cat.params||[]).some(function(p){
          if(claveCanon(p.nombre)===c || claveCanon(p.sigla)===c){
            t = { titulo: p.nombre, sigla: p.sigla, def: p.que,
                  bajo: p.bajo, alto: p.alto, categoria: cat.nombre };
            return true;
          }
        });
      });
      if(alListo) alListo(t);
    });
  }
  /* toutes les catégories, pour qui veut la liste entière */
  function glosarioTodo(alListo, idioma){
    cargaGlosario(function(g){
      var lg = idioma || (typeof LANG_SF!=='undefined'? LANG_SF : 'es');
      if(alListo) alListo((g[lg]||g.es||{}).categorias||[]);
    });
  }

  /* la bulle : on touche un terme, sa définition paraît */
  function explica(el, clave){
    if(!el) return;
    el.style.cursor='pointer';
    el.style.borderBottom='1px dotted var(--muted,#7a8499)';
    el.onclick=function(ev){
      ev.stopPropagation();
      glosario(clave, function(t){
        var d=document.getElementById('mf-glos');
        if(!d){ d=document.createElement('div'); d.id='mf-glos'; document.body.appendChild(d);
          d.onclick=function(){ d.style.display='none'; }; }
        d.style.cssText='position:fixed;z-index:20010;max-width:250px;background:var(--surface,#161b27);'
          +'border:1px solid var(--accent,#4a8fe8);border-radius:10px;padding:11px 15px;'
          +'font-size:13px;line-height:1.6;color:var(--text,#e8eaf0);cursor:pointer;'
          +'box-shadow:0 8px 30px rgba(0,0,0,.6)';
        d.innerHTML = t
          ? '<b style="color:var(--accent,#4a8fe8)">'+(t.titulo||clave)+'</b>'
            + (t.sigla? ' <span style="color:var(--muted,#7a8499)">('+t.sigla+')</span>':'') + '<br>'
            + (t.def||'')
            + (t.bajo? '<div style="margin-top:6px;font-size:12px"><b style="color:#5b9bd5">↓ bajo :</b> '+t.bajo+'</div>':'')
            + (t.alto? '<div style="font-size:12px"><b style="color:#e8a44a">↑ alto :</b> '+t.alto+'</div>':'')
            + '<div style="margin-top:7px;font-size:11px;color:var(--muted,#7a8499)">Toque para cerrar · '
            + '<span onclick="MF.abreGlosario(\''+clave+'\')" style="text-decoration:underline">ver en el glosario</span></div>'
          : '<i style="color:var(--muted,#7a8499)">« '+clave+' » aún no está en el glosario.</i>';
        var r=el.getBoundingClientRect();
        d.style.left=Math.max(8, Math.min(r.left, window.innerWidth-268))+'px';
        d.style.top =(r.bottom+8)+'px';
        d.style.display='block';
      });
    };
  }

  /* ══ Ouvrir le glossaire — SANS APPEL EN DUR (P-H, 05/09) ══
     Le module ne connaît pas 'glosario.html'. Il demande au lanceur, qui
     a la table. Ouvert seul, il lit son propre json : la clé "glosario"
     y dit vers quoi pointer. Un module qui n'en a pas besoin ne la
     déclare pas, et le bouton ne paraît pas. */
  var _rutaGlosario=null;

  function abreGlosario(clave){
    if(enMarco){
      try{ parent.postMessage({de:'modulo', tipo:'abre-modulo', id:'glosario', clave:clave}, '*'); }catch(e){}
      return;
    }
    if(_rutaGlosario){ window.open(_rutaGlosario + (clave? '?termino='+encodeURIComponent(clave):''), '_blank'); return; }
    fetch(nombreDelModulo()+'.json')
      .then(function(r){ return r.ok? r.json() : {}; })
      .then(function(m){
        if(m.glosario) return m.glosario;
        /* sinon on remonte au lanceur, qui connaît tout le monde */
        return fetch(m.lanzador||'lanzador.json').then(function(r){ return r.json(); })
          .then(function(lz){
            var g=(lz.modulos||[]).filter(function(x){ return (x.id||x)==='glosario'; })[0];
            return g? (g.id||g)+'.html' : null;
          });
      })
      .then(function(ruta){
        if(!ruta){ aviso('El glosario no está declarado en las tablas.'); return; }
        _rutaGlosario=ruta;
        window.open(ruta + (clave? '?termino='+encodeURIComponent(clave):''), '_blank');
      })
      .catch(function(){ aviso('No se pudo abrir el glosario.'); });
  }


  /* ══════════════════════════════════════════════════════════════════
     LES TABLES HORS DU CODE (P-H, 05/09) — les rubriques et les langues
     ne sont pas du programme, ce sont des données. Ajouter une rubrique,
     déplacer un paramètre, corriger une traduction : on touche un JSON,
     jamais une ligne de code.

         MF.rubricas(fn)    → { grupos, grupos_defecto }
         MF.idiomas(fn)     → la table des langues
         MF.dice('clave')   → le texte dans la langue courante
     ══════════════════════════════════════════════════════════════════ */
  var _rub=null, _idi=null;

  function _leeTabla(clave, porDefecto, guardaEn, alListo){
    if(guardaEn()){ if(alListo) alListo(guardaEn()); return; }
    fetch(nombreDelModulo()+'.json')
      .then(function(r){ return r.ok? r.json():{}; })
      .then(function(m){
        var ruta = m[clave];
        if(ruta) return fetch(ruta);
        return fetch(m.lanzador||'lanzador.json').then(function(r){ return r.json(); })
          .then(function(lz){
            if(!lz[clave]) throw new Error('la tabla « '+clave+' » no está declarada');
            return fetch(lz[clave]);
          });
      })
      .then(function(r){ return r.ok? r.json():{}; })
      .then(function(d){ porDefecto(d); if(alListo) alListo(d); })
      .catch(function(e){ console.warn(e.message); if(alListo) alListo(null); });
  }

  function rubricas(alListo){
    _leeTabla('rubricas', function(d){ _rub=d; }, function(){ return _rub; }, alListo);
  }
  function idiomas(alListo){
    _leeTabla('idiomas', function(d){ _idi=d; }, function(){ return _idi; }, alListo);
  }
  /* le texte d'une clé dans la langue courante */
  function dice(clave, alListo){
    idiomas(function(d){
      var t = d && d.idiomas || {};
      var lg = (typeof LANG_SF!=='undefined')? LANG_SF : 'es';
      var v = (t[lg]&&t[lg][clave]) || (t.es&&t.es[clave]) || clave;
      if(alListo) alListo(v); 
      return v;
    });
  }


  /* fermer ce module et revenir au précédent (le lanceur dépile) */
  function cierra(){
    if(enMarco){ try{ parent.postMessage({de:'modulo', tipo:'cierra-modulo'}, '*'); }catch(e){} }
    else if(window.opener && !window.opener.closed) window.close();
  }

  /* ══════════════════════════════════════════════════════════════════
     LE NUMÉRO DE VERSION (P-H, doctrine depuis MediTrace)
     Il vit ici, dans la pièce commune : mf.js connaît le nom du
     programme et lit son json, qui porte "version". Aucun programme
     n'a rien à faire — il suffit que son titre porte id="titulo" ou
     la classe .mod-tit.

     Format : aaaa.mm.dd-hh:mn:ss — précis à la seconde, jamais deux
     versions confondues. Sans numéro, on ne peut pas dire « c'est
     cette version-là qui cloche ».
     ══════════════════════════════════════════════════════════════════ */
  function ponVersion(){
    var t = document.getElementById('titulo') || document.querySelector('.mod-tit');
    if(!t) return;
    var c = config();
    var txt = (c.nombre && (c.nombre.es||c.nombre)) || nombreDelModulo();
    var v   = c.version || 'sin versión';
    tip(t, txt + String.fromCharCode(10) + 'versión ' + v);
    var e = document.getElementById('version') || document.getElementById('r-ver');
    if(e) e.textContent = 'v' + v;
  }

  /* l'infobulle maison — si le programme n'a pas celle de Salufolio */

  /* ══════════════════════════════════════════════════════════════════════
     LAS BURBUJAS SE PUEDEN APAGAR (P-H, 16/09/2026)

     « Dans la V1 il y a une option : afficher les tooltips (case à
       cocher). Où va-t-on mettre cette option ? »

     Aquí, con los demás ajustes del usuario — idioma, tema, paleta.
     No es de un programa: es de quien mira. Vale para la casa, para las
     curvas, para el panal, y sobrevive de una sesión a otra.

     Quien descubre las quiere; quien conoce la casa, no. Y hay días en
     que estorban.
     ══════════════════════════════════════════════════════════════════════ */
  var TIPS_CLAVE = 'sf_tips';


  /* ══════════════════════════════════════════════════════════════════════
     EL MODO DEMOSTRACIÓN (P-H, 16/09/2026)

     « Il faut que Salufolio sache qu'il est en mode démo. »

     Lo sabe: el expediente lo dice — data_type: "demo". Falta que los
     programas lo lean, y aquí tienen con qué.

     ── LO QUE CAMBIA ──
       · un letrero, para que nadie se confunda
       · los documentos llevan a comun/demo.pdf, que explica por qué no
         se muestran — en vez de un 404 seco

     ── POR QUÉ NO SE MUESTRAN ──
     Los datos clínicos de la demostración son REALES: las medidas, las
     fechas, los tratamientos. Sólo la persona es inventada. Los PDF, en
     cambio, llevan el membrete, el nombre, los números — y tacharlos no
     basta: un rectángulo negro encima no borra el texto de debajo, se
     recupera con un copiar y pegar. Es el error clásico de las
     administraciones.

     Así que no viajan. Se quedan en el ordenador de quien los tiene.
     ══════════════════════════════════════════════════════════════════════ */

  function esDemo(){
    try{ return !!(datos && datos.data_type === 'demo'); }catch(e){ return false; }
  }

  /* la ruta de un documento — la de verdad, o la de la demostración */
  function rutaPdf(nombre, carpeta){
    if(esDemo()) return _raizComun() + 'demo.pdf';
    var dir = carpeta || (datos && datos.pdfs && datos.pdfs.directorio) || '';
    return dir + (nombre || '');
  }

  function _raizComun(){
    if(location.protocol !== 'file:') return '/comun/';
    var p = location.pathname.split('/').filter(Boolean);
    p.pop();
    var i = p.lastIndexOf('Salufolio');
    var sube = '';
    for(var k = 0; k < ((i>=0) ? (p.length-i-1) : 1); k++) sube += '../';
    return sube + 'comun/';
  }

  /* ── el letrero, puesto una vez al abrir el expediente ── */
  function letreroDemo(){
    var v = document.getElementById('sf-demo');
    if(!esDemo()){ if(v) v.remove(); return; }
    if(v) return;

    var T = {
      es:['Expediente de demostración',
          'Los datos clínicos son reales. La persona, no.'],
      fr:['Dossier de démonstration',
          'Les données cliniques sont réelles. La personne, non.'],
      ca:['Expedient de demostració',
          'Les dades clíniques són reals. La persona, no.'],
      en:['Demonstration record',
          'The clinical data are real. The person is not.']
    };
    var lg = (typeof LANG_SF !== 'undefined' && T[LANG_SF]) ? LANG_SF : 'es';

    var d = document.createElement('div');
    d.id = 'sf-demo';
    d.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:8000;'
      + 'background:var(--warn,#e8a44a);color:#1a1a14;'
      + 'padding:5px 16px;font-size:12px;font-family:var(--sans,system-ui,sans-serif);'
      + 'display:flex;align-items:baseline;gap:10px;justify-content:center;'
      + 'box-shadow:0 -3px 14px rgba(0,0,0,.35)';
    d.innerHTML = '<b>\ud83c\udfac ' + T[lg][0] + '</b>'
      + '<span style="opacity:.78">' + T[lg][1] + '</span>';
    document.body.appendChild(d);
    /* que el letrero no tape la última línea de la página */
    document.body.style.paddingBottom = '34px';
  }

  function tips(v){
    if(v !== undefined){
      try{ localStorage.setItem(TIPS_CLAVE, v ? 'si' : 'no'); }catch(e){}
      /* la que estuviera abierta se va */
      if(!v){ var b = document.getElementById('mf-tip'); if(b) b.style.display='none'; }
      return !!v;
    }
    try{ return localStorage.getItem(TIPS_CLAVE) !== 'no'; }catch(e){ return true; }
  }

  function tip(el, texto){
    if(!el || !texto) return;
    /* ══ v2 (P-H, 16/09) : LE CURSEUR NE CHANGE PLUS ══
       « Enlève ce curseur flèche avec ! — laisse le curseur normal. »
       « cursor:help » posé en style direct s'imposait à tout, même à un
       bouton qu'on touche. La bulle paraît au survol de toute façon. */
    if(!el.style.cursor) el.style.cursor = '';
    el.onmouseenter=function(){
      if(!tips()) return;              /* apagadas por el usuario */
      var b=document.getElementById('mf-tip');
      if(!b){ b=document.createElement('div'); b.id='mf-tip'; document.body.appendChild(b); }
      b.style.cssText='position:fixed;z-index:9999;background:var(--surface,#161b27);'
        +'border:1px solid var(--warn,#e8a44a);border-radius:8px;padding:5px 11px;'
        +'font-size:12px;color:var(--text,#e8eaf0);box-shadow:0 5px 20px rgba(0,0,0,.5);'
        +'pointer-events:none;white-space:pre-line;max-width:250px';
      b.textContent=texto;
      var r=el.getBoundingClientRect();
      b.style.left=Math.max(6,r.left)+'px'; b.style.top=(r.bottom+7)+'px';
      b.style.display='block';
    };
    el.onmouseleave=function(){ var b=document.getElementById('mf-tip'); if(b) b.style.display='none'; };
  }


  /* ══════════════════════════════════════════════════════════════════
     CHARGER UNE CONFIGURATION (P-H, 05/09) — « plus de JSON ! »

     Un navigateur ne peut pas lire un fichier local avec fetch : la
     règle CORS l'interdit. Ouvrir resumen.html depuis le disque et le
     programme reste muet. Un <script src="..."> , lui, est permis.

     Alors chaque programme a son <nombre>.js, qui déclare SF_CONFIG.
     La configuration reste hors du code, et tout marche sans serveur.
     ══════════════════════════════════════════════════════════════════ */
  function cargaConfig(ruta, nombreConst, alListo){
    var s=document.createElement('script');
    s.src = ruta;
    s.onload = function(){
      var c = window[nombreConst||'SF_CONFIG'];
      if(alListo) alListo(c||null);
      s.remove();
    };
    s.onerror = function(){ if(alListo) alListo(null); s.remove(); };
    document.head.appendChild(s);
  }

  /* la mienne, celle du programme qui tourne */
  function config(){
    return (typeof SF_CONFIG!=='undefined')? SF_CONFIG : {};
  }


  /* ══════════════════════════════════════════════════════════════════
     LES TEXTES DU PROGRAMME (P-H, 06/09) — chaque programme a les siens
     dans SA carpeta : resumen.idiomas.js déclare SF_TEXTOS. Ce qui est
     commun reste dans ../comun/.

     Tout élément portant  data-idioma="clave"  est traduit.
     ══════════════════════════════════════════════════════════════════ */
  function aplicaIdioma(lg){
    LANG_SF = lg || LANG_SF || 'es';
    var T = (typeof SF_TEXTOS!=='undefined' && SF_TEXTOS.textos) || {};
    var t = T[LANG_SF] || T.es || {};
    document.querySelectorAll('[data-idioma]').forEach(function(e){
      var k=e.getAttribute('data-idioma');
      if(t[k]) e.textContent = t[k];
    });
  }
  function idioma(){ return LANG_SF; }


  /* ══════════════════════════════════════════════════════════════════
     LE CLIC SUR UN PARAMÈTRE (P-H, 06/09)
     paramSpan de la V1 appelle glosarioMostrarToast — on la fournit ici,
     branchée sur le glossaire commun. Tous les programmes en profitent.
     ══════════════════════════════════════════════════════════════════ */
  function muestraGlosario(clave, ev){
    if(ev && ev.stopPropagation) ev.stopPropagation();
    /* v2 (P-H) : le tooltip du survol reste devant tant qu on ne quitte
       pas le champ — on le fait disparaitre au lieu de lutter en z-index. */
    ['param-tipbox','mf-tip','mi-tip'].forEach(function(id){
      var b=document.getElementById(id);
      if(b){ b.style.opacity='0'; setTimeout(function(){ b.style.opacity=''; }, 400); }
    });
    glosario(clave, function(t){
      var d=document.getElementById('mf-glos');
      if(!d){ d=document.createElement('div'); d.id='mf-glos'; document.body.appendChild(d);
              d.onclick=function(){ d.style.display='none'; }; }
      d.style.cssText='position:fixed;z-index:20010;max-width:250px;background:var(--surface,#161b27);'
        +'border:1px solid var(--accent,#4a8fe8);border-radius:10px;padding:11px 14px;'
        +'font-size:13px;line-height:1.6;color:var(--text,#e8eaf0);cursor:pointer;'
        +'box-shadow:0 8px 30px rgba(0,0,0,.6)';
      d.innerHTML = t
        ? '<b style="color:var(--accent,#4a8fe8)">'+(t.titulo||clave)+'</b>'
          + (t.sigla? ' <span style="opacity:.6">('+t.sigla+')</span>':'') + '<br>'
          + (t.def||'')
          + (t.bajo? '<div style="margin-top:6px;font-size:12px"><b style="color:#5b9bd5">↓ bajo :</b> '+t.bajo+'</div>':'')
          + (t.alto? '<div style="font-size:12px"><b style="color:#e8a44a">↑ alto :</b> '+t.alto+'</div>':'')
          + '<div style="margin-top:7px;font-size:11px;color:var(--muted,#7a8499)">Toque para cerrar</div>'
        : '<i style="color:var(--muted,#7a8499)">« '+clave+' » aún no está en el glosario.</i>';
      var x=(ev&&ev.clientX)||120, y=(ev&&ev.clientY)||120;
      d.style.left=Math.max(8, Math.min(x-40, window.innerWidth-268))+'px';
      d.style.top =Math.min(y+14, window.innerHeight-160)+'px';
      d.style.display='block';
    });
  }
  /* le nom que paramSpan de la V1 appelle */
  window.glosarioMostrarToast = muestraGlosario;


  /* ══════════════════════════════════════════════════════════════════
     LA COURBE EN GRAND (P-H, 06/09) — clic droit sur le nom d'un
     paramètre : sa courbe s'ouvre dans une fenêtre, la moitié de
     l'écran en hauteur. On voit l'évolution d'un regard, sans quitter
     ce qu'on regardait.

     Elle vit ici : Resumen, Tabla, Curvas et les autres l'ont sans
     rien faire — il suffit que paramSpan pose data-param sur le nom.
     ══════════════════════════════════════════════════════════════════ */
  var _graf=null;

  function curvaEnGrande(clave, ev){
    if(ev){ if(ev.preventDefault) ev.preventDefault(); if(ev.stopPropagation) ev.stopPropagation(); }
    if(typeof Chart==='undefined'){ aviso('Chart.js no está cargado'); return; }

    var serie = (typeof getSeriesForParam==='function')
      ? getSeriesForParam(loadDatosPropios(), clave) : [];
    if(!serie.length){ aviso('Sin valores para ' + clave); return; }

    var P = (typeof PARAMS!=='undefined' && PARAMS[clave]) || {};
    var titulo = P.label || clave;
    var unidad = P.unit || '';

    var v=document.getElementById('mf-curva');
    if(v) v.remove();
    v=document.createElement('div');
    v.id='mf-curva';
    v.style.cssText='position:fixed;inset:0;z-index:20020;background:rgba(0,0,0,.55);'
      +'display:flex;align-items:center;justify-content:center;padding:16px';
    v.innerHTML='<div id="mf-curva-caja" style="background:var(--surface,#161b27);'
      +'border:1px solid var(--accent,#4a8fe8);border-radius:12px;padding:14px 18px 10px;'
      +'width:min(94vw,900px);height:50vh;display:flex;flex-direction:column;'
      +'box-shadow:0 12px 44px rgba(0,0,0,.6)">'
      +'<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px">'
      +'<b style="font-family:var(--serif,Georgia,serif);font-size:16px;color:var(--accent,#4a8fe8)">'+titulo+'</b>'
      +(unidad? '<span style="font-size:12px;color:var(--muted,#7a8499)">'+unidad+'</span>':'')
      +'<span style="font-size:11.5px;color:var(--muted,#7a8499)">'+serie.length+' valores · '
      + serie[0].x + ' → ' + serie[serie.length-1].x + '</span>'
      +'<span style="flex:1"></span>'
      +'<span id="mf-curva-x" style="cursor:pointer;font-size:17px;opacity:.7">✕</span>'
      +'</div>'
      +'<div style="flex:1;min-height:0"><canvas id="mf-curva-c"></canvas></div>'
      +'</div>';
    document.body.appendChild(v);

    v.onclick=function(e){ if(e.target===v) cierraCurva(); };
    document.getElementById('mf-curva-x').onclick=cierraCurva;
    document.addEventListener('keydown', _escCurva);

    var css=getComputedStyle(document.documentElement);
    var col = P.color || css.getPropertyValue('--accent').trim() || '#4a8fe8';
    var gris= css.getPropertyValue('--muted').trim() || '#7a8499';
    var bord= css.getPropertyValue('--border').trim() || '#2a3348';

    _graf = new Chart(document.getElementById('mf-curva-c'), {
      type:'line',
      data:{ labels: serie.map(function(p){return p.x;}),
             datasets:[{ data: serie.map(function(p){return p.y;}),
               borderColor: col, backgroundColor: col+'22',
               borderWidth:2, pointRadius:3, pointHoverRadius:6, tension:.25, fill:true }] },
      options:{ responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{display:false},
          tooltip:{ callbacks:{ label:function(c){ return c.parsed.y + ' ' + unidad; } } } },
        scales:{ x:{ ticks:{color:gris, maxRotation:0, autoSkipPadding:20}, grid:{color:bord} },
                 y:{ ticks:{color:gris}, grid:{color:bord} } } }
    });
  }
  function _escCurva(e){ if(e.key==='Escape') cierraCurva(); }
  function cierraCurva(){
    if(_graf){ try{ _graf.destroy(); }catch(e){} _graf=null; }
    var v=document.getElementById('mf-curva'); if(v) v.remove();
    document.removeEventListener('keydown', _escCurva);
  }
  /* les données du programme, quel que soit le nom qu'il leur donne */
  function loadDatosPropios(){
    if(typeof loadData==='function') return loadData();
    return (datos && datos.mesures) || [];
  }
  window.curvaEnGrande = curvaEnGrande;


  /* ══════════════════════════════════════════════════════════════════
     DÉDOUBLONNAGE DES MÉDICAMENTS (P-H, 06/09)

     Le même traitement paraissait jusqu'à sept fois : chaque extraction
     de PDF écrit le nom à sa façon — majuscules, accent, conditionnement.
         RIVAROXABAN 20 MG / 28 COMPRIMIDOS RECUBIERTOS CON PELICULA
         Rivaroxabán 20mg
         RIVAROXABAN 20mg
     …sont un seul médicament.

     On normalise : sans accent, sans casse, sans conditionnement. À nom
     égal, on garde LA PLUS RÉCENTE, et à date égale la plus complète.
     Le nom affiché est le plus court des équivalents — plus lisible.

     LE DOSSIER N'EST PAS TOUCHÉ : le nettoyage se fait à la lecture.
     Les lignes restent toutes dans le .mf.

     Plus tard : une table principio-activo pour rapprocher les
     génériques de leur marque (Aricept → donepezilo).
     ══════════════════════════════════════════════════════════════════ */
  function normMed(nombre){
    return String(nombre||'')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      /* le conditionnement ne fait pas le médicament */
      .replace(/\s*\/.*$/,'')
      .replace(/\b\d+\s*(comprimidos?|capsulas?|sobres?|envases?)\b.*$/,'')
      .replace(/\b(recubiertos?|con pelicula|liberacion|prolongada|efg|anat)\b/g,'')
      /* « - » et « N/A » en fin de nom ne veulent rien dire */
      .replace(/\bn\s*\/\s*a\b/g,'')
      .replace(/[\s\-]+$/,'')
      /* le dosage compte : 20mg et 10mg sont deux traitements */
      .replace(/(\d+)\s*(mg|mcg|ml|ui|g)\b/g,'$1$2')
      .replace(/[^a-z0-9]+/g,' ')
      /* ce qui reste du « N/A » et du « - » après nettoyage */
      .replace(/\s+(n|na|a)$/,'')
      .trim();
  }

  function _dosisDe(m){
    var t=(m.nombre||'')+' '+(m.dosis||'');
    var d=t.match(/(\d+[.,]?\d*)\s*(mg|mcg|ml|ui|g)\b/i);
    return d? d[0].replace(/\s+/g,'').toLowerCase() : '';
  }
  function _riqueza(m){
    return ((m.dosis||m.dose)?2:0) + ((m.frecuencia||m.frequence)?2:0) + ((m.desde||m.date)?1:0) + ((m.estado||m.statut)?1:0);
  }

  /* ══════════════════════════════════════════════════════════════════
     LE DÉDOUBLONNAGE — l'algorithme de P-H (07/09/2026)

        trier par date DÉCROISSANTE
        pile = vide
        pour chaque médicament :
            clé = son principe actif (ou son nom normalisé)
            si la clé n'est pas dans la pile :
                le garder, empiler la clé

     Comme on va du plus récent au plus ancien, le premier vu est le plus
     récent — c'est celui qu'on garde. Simple, et juste.

     La table des principes actifs vit dans /Salufolio/Medicamentos/ :
     elle sert à tous les patients et survit aux versions du programme.
     ══════════════════════════════════════════════════════════════════ */
  var _principios=null, _idxPrin=null;

  function cargaPrincipios(alListo){
    if(_idxPrin){ if(alListo) alListo(_idxPrin); return; }
    if(typeof SF_PRINCIPIOS!=='undefined'){ _armaIndice(SF_PRINCIPIOS); if(alListo) alListo(_idxPrin); return; }
    var s=document.createElement('script');
    s.src = (config().principios || '../medicamentos/principios.js');
    s.onload=function(){
      _armaIndice(typeof SF_PRINCIPIOS!=='undefined'? SF_PRINCIPIOS : {});
      s.remove(); if(alListo) alListo(_idxPrin);
    };
    s.onerror=function(){ _idxPrin={}; s.remove(); if(alListo) alListo(_idxPrin); };
    document.head.appendChild(s);
  }
  function _armaIndice(P){
    _principios=P; _idxPrin={};
    Object.keys(P.principios||{}).forEach(function(k){
      _idxPrin[k]=k;
      (P.principios[k].comerciales||[]).forEach(function(c){ _idxPrin[normMed(c)]=k; });
    });
    Object.keys(P.productos||{}).forEach(function(k){ _idxPrin[k]='@'+k; });
  }

  /* le principe actif d'un nom, s'il est connu */
  function principioDe(nombre){
    if(!_idxPrin) return null;
    var n = normMed(nombre);
    if(_idxPrin[n]) return _idxPrin[n];
    /* le nom long commence souvent par le nom connu */
    var hallado=null;
    Object.keys(_idxPrin).forEach(function(k){
      if(k && (n===k || n.indexOf(k+' ')===0)){
        if(!hallado || k.length>hallado.length) hallado=k;
      }
    });
    return hallado? _idxPrin[hallado] : null;
  }
  /* la catégorie d'un traitement : medicamento · parafarmacia · material */
  function categoriaDe(clave){
    if(!_principios || !clave) return 'medicamento';
    if(clave.charAt(0)==='@'){
      var p=(_principios.productos||{})[clave.substring(1)];
      return (p && p.categoria) || 'parafarmacia';
    }
    var q=(_principios.principios||{})[clave];
    return (q && q.categoria) || 'medicamento';
  }
  function nombreCategoria(cat, lg){
    var C=(_principios && _principios._categorias) || {};
    var t=C[cat]; if(!t) return cat;
    return t[lg||LANG_SF] || t.es || cat;
  }

  function nombrePrincipio(clave){
    if(!_principios) return clave;
    if(clave && clave.charAt(0)==='@'){
      var p=(_principios.productos||{})[clave.substring(1)];
      return p? p.nombre : clave.substring(1);
    }
    var q=(_principios.principios||{})[clave];
    return q? q.nombre : clave;
  }

  function medicamentosUnicos(lista){
    var L = (lista || medicamentos()).slice();

    /* par date DÉCROISSANTE : le plus récent d'abord */
    L.sort(function(a,b){
      var fa=(a.desde||a.fecha||a.date||''), fb=(b.desde||b.fecha||b.date||'');
      if(fa!==fb) return fb<fa? -1 : 1;
      return _riqueza(b) - _riqueza(a);
    });

    var pila = {}, salida = [];
    L.forEach(function(m){
      var _n = m.nombre || m.nom || "";
      var prin = principioDe(_n);
      var clave = prin || (normMed(_n)+'|'+_viaDe(_n));
      if(!clave || clave==='|') return;
      if(pila[clave]){                       /* déjà vu : on note la variante */
        var g=pila[clave];
        if(g._variantes.indexOf(_n)<0) g._variantes.push(_n);
        g._veces++;
        return;
      }
      var g = Object.assign({}, m);
      g._clave = clave;
      g._principio = prin? nombrePrincipio(prin) : null;
      g._categoria = categoriaDe(clave);
      g._variantes = [_n];
      g._veces = 1;
      pila[clave] = g;
      salida.push(g);
    });

    /* le nom affiché : le principe actif s'il est connu, sinon le plus court */
    salida.forEach(function(g){
      if(g._principio){ g.nombre = g._principio; }
      else { g.nombre = g._variantes.slice().sort(function(a,b){ return a.length-b.length; })[0]; }
      g.nom = g.nombre;
      /* le dossier parle espagnol, les ponts de la V1 français :
         on rend les deux, pour que chacun s'y retrouve. */
      g.estado = g.estado || g.statut;
      g.statut = g.statut || g.estado;
      /* les noms commerciaux vus, pour les montrer à côté */
      /* les noms commerciaux, raccourcis : XARELTO plutôt que
         « XARELTO 20MG 28 COMPRIMIDOS RECUBIERTOS... (BAYER) » */
      g._comerciales = g._variantes.filter(function(v){
        return normMed(v) !== normMed(g.nombre);
      }).map(function(v){
        return v.replace(/\s*\/.*$/,'')
                .replace(/\s+\d+\s*(mg|mcg|ml|g|ui)\b.*$/i,'')
                .replace(/\s*\([^)]*\)\s*$/,'')
                .trim();
      }).filter(function(v){
        if(v.length<=2) return false;
        /* inutile de répéter ce que le nom court dit déjà */
        return normMed(v).indexOf(normMed(g.nombre)) !== 0;
      });
      g._comerciales = g._comerciales.filter(function(v,i,a){ return a.indexOf(v)===i; });
    });
    return salida;
  }

  /* les noms que la table ne connaît pas — à compléter à l'usage */
  function principiosDesconocidos(lista){
    var vistos={};
    (lista||medicamentos()).forEach(function(m){
      if(!principioDe(m.nombre)) vistos[normMed(m.nombre)] = m.nombre;
    });
    return Object.keys(vistos).map(function(k){ return vistos[k]; }).sort();
  }

  function _viaDe(nombre){
    return /nebuliza/i.test(String(nombre||''))? 'neb' : '';
  }



  /* ══════════════════════════════════════════════════════════════════
     QUEL DOSSIER REGARDE-T-ON ? (P-H, 08/09)

     Avec des .mf, des .sf, des _REAL et des (copia) dans le même
     répertoire, on ne sait plus lequel on a ouvert — et deux dossiers
     ne portent pas forcément la même chose.

     L'infobulle du chip dit le nom du fichier, son dossier, et ce
     qu'il contient. Tous les programmes en profitent.
     ══════════════════════════════════════════════════════════════════ */
  function ponFuente(){
    if(!datos) return;

    /* ══ v2 (P-H, 17/09/2026) ══
       « nombre » n'existe pas ici : ce n'est qu'une variable locale
       ailleurs dans le fichier. L'erreur cassait MF.arranca chez tout
       programme, et rien ne se faisait après — ni les popups, ni le
       reste. Elle ne se voyait que dans la console.

       Le nom du fichier vit dans « ruta » ; à défaut, la matricule. */
    var n = (typeof ruta !== 'undefined' && ruta)
          ? String(ruta).replace(/^.*\//, '')
          : (matricula || '(sin nombre)');
    var c = (p_carpeta || '') ;
    var txt = n
      + (c? String.fromCharCode(10) + c : '')
      + String.fromCharCode(10)
      + (datos.events||[]).length + ' eventos · '
      + (datos.mesures||[]).length + ' extracciones · '
      + (datos.medicaments||[]).length + ' medicamentos'
      + (datos.exported? String.fromCharCode(10) + 'exportado ' + String(datos.exported).substring(0,10) : '');
    /* le lanceur l'affiche aussi dans sa bande */
    if(enMarco){
      try{ parent.postMessage({de:'modulo', tipo:'fuente', texto:txt, fichero:n}, '*'); }catch(e){}
    }
  }
  var p_carpeta = '';

  /* ══════════════════════════════════════════════════════════════════
     LE REGISTRE DES PROGRAMMES (P-H, 08/09/2026)

     Doctrine de P-H, éprouvée jadis dans son application domotique :
     un programme s'installe EN S'OUVRANT UNE FOIS. Il regarde s'il est
     déclaré ; sinon il se déclare — « Ohé, je suis là et je m'appelle
     Toto ». Si le lanceur tourne, sa carte paraît aussitôt ; sinon elle
     l'attendra au prochain démarrage.

         programa.html                → s'installe s'il est absent
         programa.html?instal=1       → force · actualise
         programa.html?instal=0       → retire (si la version correspond)
         programa.html?instal=pausa   → « en actualización »
         programa.html?instal=proximamente → « próximamente »

     QUATRE ÉTATS, et chacun dit une chose différente à qui regarde :
       vivo          la carte s'ouvre
       proximamente  il n'existe pas encore — on l'annonce
       pausa         il a existé, il reviendra
       retirado      il a existé, il ne reviendra pas ; la carte s'efface
                     après le délai de deuil (30 jours)

     « Un usager s'en servait et du jour au lendemain il disparaît :
      pas sympathique. » — P-H
     ══════════════════════════════════════════════════════════════════ */
  var REG_CLAVE = 'sf_registro';
  var DUELO_DIAS = 30;

  function registro(){
    try{ return JSON.parse(localStorage.getItem(REG_CLAVE) || '{}'); }
    catch(e){ return {}; }
  }
  function _guardaRegistro(r){
    try{ localStorage.setItem(REG_CLAVE, JSON.stringify(r)); }catch(e){}
  }

  /* le deuil : on efface ce qui est retiré depuis assez longtemps */
  function _pasaElDuelo(r){
    var hoy = Date.now();
    Object.keys(r).forEach(function(k){
      var e = r[k];
      if(e.estado==='retirado' && e.desde){
        var dias = (hoy - new Date(e.desde).getTime()) / 86400000;
        if(dias > DUELO_DIAS) delete r[k];
      }
    });
    return r;
  }

  /* « Ohé, je suis là » — le module se déclare */
  function declara(estado){
    var c = config();
    if(!c.id) return null;
    var r = _pasaElDuelo(registro());
    var ya = r[c.id];
    var nuevo = {
      id: c.id,
      version: c.version || '',
      programa: c.programa || (c.id + '.html'),
      carpeta: '../' + c.id + '/',
      icono: c.icono || '📄',
      nombre: c.nombre || c.id,
      descripcion: c.descripcion || '',
      familia: c.familia || 'ver',
      acceso: c.acceso || ['todos'],
      paleta: c.paleta || '',
      ayuda: c.ayuda || '',
      escribe: !!c.escribe,
      estado: estado || (ya && ya.estado!=='retirado' ? ya.estado : 'vivo'),
      desde: (ya && ya.estado===(estado||'vivo')) ? ya.desde : new Date().toISOString()
    };
    /* une version plus récente met à jour ; la même ne change rien */
    var cambia = !ya || ya.version !== nuevo.version || ya.estado !== nuevo.estado;
    if(cambia){
      r[c.id] = nuevo;
      _guardaRegistro(r);
      /* si le lanceur tourne, sa carte paraît tout de suite */
      if(enMarco){
        try{ parent.postMessage({de:'modulo', tipo:'declaro', ficha:nuevo}, '*'); }catch(e){}
      }
    }
    return { ficha:nuevo, cambio:cambia, antes:ya||null };
  }

  /* le retrait : seulement si les versions correspondent */
  function retira(forzar){
    var c = config();
    var r = _pasaElDuelo(registro());
    var ya = r[c.id];
    if(!ya) return { hecho:false, porque:'no estaba declarado' };
    if(!forzar && ya.version !== (c.version||'')){
      return { hecho:false, porque:'las versiones no coinciden ('+ya.version+' ≠ '+(c.version||'?')+')' };
    }
    ya.estado = 'retirado';
    ya.desde  = new Date().toISOString();
    r[c.id] = ya;
    _guardaRegistro(r);
    if(enMarco){
      try{ parent.postMessage({de:'modulo', tipo:'retiro', id:c.id, ficha:ya}, '*'); }catch(e){}
    }
    return { hecho:true, ficha:ya };
  }

  /* ce que dit chaque état, dans la langue courante */
  var AVISOS = {
    proximamente:{ es:'Próximamente', fr:'Prochainement', ca:'Properament', en:'Coming soon' },
    pausa:       { es:'En actualización — vuelva más tarde', fr:'En mise à jour — revenez plus tard',
                   ca:'En actualització — torni més tard', en:'Being updated — come back later' },
    retirado:    { es:'Este programa ya no está disponible', fr:"Ce programme n'est plus disponible",
                   ca:'Aquest programa ja no està disponible', en:'This program is no longer available' }
  };
  function avisoDe(estado, lg){
    var a = AVISOS[estado]; if(!a) return '';
    return a[lg||LANG_SF] || a.es;
  }

  /* l'installation se fait toute seule au démarrage */
  function _atiendeInstal(p){
    var q = p.instal;
    if(q === undefined || q === null || q === '') { declara(); return null; }
    if(q === '0' || q === 'no')  return { accion:'retiro',  r:retira() };
    if(q === '1' || q === 'si')  return { accion:'forzado', r:declara('vivo') };
    if(q === 'pausa' || q === 'proximamente') return { accion:q, r:declara(q) };
    declara(); return null;
  }


  /* ══════════════════════════════════════════════════════════════════
     LE POPUP MAISON pour éditer un texte long (P-H, 09/09)
     « c'est un outil disponible pour tous » — sorti d'editCell, où il
     était enfermé dans un seul programme.
       MF.popupTexto('el título', valor, function(nuevo){ ... })
     ══════════════════════════════════════════════════════════════════ */
  function popupTexto(titulo, valor, alGuardar){
    var fondo = document.createElement('div');
    fondo.style.cssText='position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.6);'
      +'display:flex;justify-content:center;align-items:center;padding:20px';
    var caja = document.createElement('div');
    caja.style.cssText='background:var(--surface);border:2px solid var(--accent);border-radius:12px;'
      +'padding:20px;width:100%;max-width:520px;box-shadow:0 14px 44px rgba(0,0,0,.5)';
    caja.innerHTML='<div style="font-family:var(--mono);font-size:12px;color:var(--accent);'
      +'text-transform:uppercase;letter-spacing:2px;margin-bottom:10px">Editar: '+titulo+'</div>';
    var ta = document.createElement('textarea');
    ta.value = valor || '';
    ta.style.cssText='width:100%;height:120px;font-family:var(--mono);font-size:13px;'
      +'background:var(--bg);color:var(--text);border:1px solid var(--border);border-radius:6px;'
      +'padding:10px;resize:vertical;line-height:1.6;box-sizing:border-box';
    caja.appendChild(ta);
    var fila = document.createElement('div');
    fila.style.cssText='display:flex;gap:8px;margin-top:12px;justify-content:flex-end';
    var bCan = document.createElement('button');
    bCan.textContent='Cancelar';
    bCan.style.cssText='padding:6px 14px;border-radius:7px;border:1px solid var(--border);'
      +'background:transparent;color:var(--muted);cursor:pointer;font-size:12.5px';
    bCan.onclick=function(){ cierra(); };
    var bOk = document.createElement('button');
    bOk.textContent='Guardar';
    bOk.style.cssText='padding:6px 16px;border-radius:7px;border:1px solid var(--accent);'
      +'background:rgba(74,143,232,.15);color:var(--text);cursor:pointer;font-size:12.5px';
    bOk.onclick=function(){ var v=ta.value.trim(); cierra(); if(alGuardar) alGuardar(v); };
    fila.appendChild(bCan); fila.appendChild(bOk); caja.appendChild(fila);
    fondo.appendChild(caja); document.body.appendChild(fondo);
    function cierra(){ if(fondo.parentNode) document.body.removeChild(fondo); }
    fondo.onclick=function(e){ if(e.target===fondo) cierra(); };
    ta.onkeydown=function(e){ if(e.key==='Escape') cierra(); };
    ta.focus(); ta.select();
    return { cierra: cierra };
  }


  /* ══════════════════════════════════════════════════════════════════
     GUARDAR — con el servidor de taller, o sin él (P-H, 10/09/2026)

     « cette affaire de navigateur qui ne peut pas écrire sur le disque
       me fastidia ! »

     Y con razón. Un navegador no puede tocar su disco: es una regla de
     seguridad, no un defecto. Sin ella cualquier página podría escribir
     en sus ficheros.

     La salida es un servidor de taller —el programa « salufolio »— que
     corre en su máquina y sí acepta escribir. Cuando está en marcha,
     todo se guarda solo. Cuando no, se descarga y usted lo coloca, como
     hasta ahora.

     MF.guarda(ruta, contenido) devuelve una promesa:
        { ok:true, como:'servidor', ruta:'pacientes/…' }
        { ok:true, como:'descarga', nombre:'…' }
     ══════════════════════════════════════════════════════════════════ */
  var _HAY_SERVIDOR = null;      /* null = todavía no lo sabemos */

  function hayServidor(){
    if(_HAY_SERVIDOR !== null) return Promise.resolve(_HAY_SERVIDOR);
    if(location.protocol === 'file:'){ _HAY_SERVIDOR = false; return Promise.resolve(false); }
    return fetch('/_soy_salufolio')
      .then(function(r){ return r.ok ? r.json() : null; })
      .then(function(d){ _HAY_SERVIDOR = !!(d && d.escribe); return _HAY_SERVIDOR; })
      .catch(function(){ _HAY_SERVIDOR = false; return false; });
  }

  function _descarga(nombre, contenido){
    var b = new Blob([contenido], {type:'application/json'});
    var a = document.createElement('a');
    a.href = URL.createObjectURL(b);
    a.download = nombre;
    a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    return { ok:true, como:'descarga', nombre:nombre };
  }

  function guarda(ruta, contenido){
    if(typeof contenido !== 'string') contenido = JSON.stringify(contenido, null, 1);
    var nombre = String(ruta).replace(/^.*\//, '');
    return hayServidor().then(function(hay){
      if(!hay) return _descarga(nombre, contenido);
      return fetch('/_guardar/' + ruta, { method:'POST', body: contenido })
        .then(function(r){ return r.json(); })
        .then(function(d){
          if(d && d.ok) return { ok:true, como:'servidor', ruta:d.ruta, octetos:d.octetos };
          return _descarga(nombre, contenido);
        })
        .catch(function(){ return _descarga(nombre, contenido); });
    });
  }

  /* lister un dossier — le serveur seul sait le faire */
  function lista(carpeta){
    return hayServidor().then(function(hay){
      if(!hay) return null;
      return fetch('/_listar/' + carpeta)
        .then(function(r){ return r.ok ? r.json() : null; })
        .then(function(d){ return (d && d.ok) ? d.contenido : null; })
        .catch(function(){ return null; });
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     LO QUE SE APRENDE Y LUEGO SE CALLA (doctrina de P-H)

     « au bout de 10 fois il saura et on ne lui rappellera plus » — y
     un botón « ya lo sé » para quien no quiera esperar diez veces.
     ══════════════════════════════════════════════════════════════════ */
  function aviso(clave, texto, veces){
    veces = veces || 5;
    var k = 'sf_aviso_' + clave, n = 0;
    try{ n = parseInt(localStorage.getItem(k) || '0', 10); }catch(e){}
    if(n < 0 || n >= veces) return null;      /* ya lo sabe */
    try{ localStorage.setItem(k, String(n+1)); }catch(e){}

    var d = document.createElement('div');
    d.style.cssText = 'background:var(--surface);border:1px solid var(--warn);'
      + 'border-left:3px solid var(--warn);border-radius:0 9px 9px 0;'
      + 'padding:12px 15px;margin:10px 0;font-size:12.5px;line-height:1.65;color:var(--muted)';
    d.innerHTML = texto
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:9px">'
      + '<span style="font-size:10.5px;opacity:.7">' + (veces-n-1) + ' vez'
      + ((veces-n-1)===1?'':'es') + ' más y dejaré de decirlo</span>'
      + '<button style="padding:3px 11px;border-radius:6px;border:1px solid var(--border);'
      + 'background:transparent;color:var(--text);cursor:pointer;font-size:11.5px">Ya lo sé</button>'
      + '</div>';
    d.querySelector('button').onclick = function(){
      try{ localStorage.setItem(k, '-1'); }catch(e){}
      if(d.parentNode) d.parentNode.removeChild(d);
    };
    return d;
  }


  /* ══════════════════════════════════════════════════════════════════
     UNE FENÊTRE MAISON, QU'ON DÉPLACE (P-H, 11/09/2026)

     On la tire par son en-tête. Elle ne se souvient pas d'où on l'a
     mise — « c'est du luxe », dit P-H — et elle ne se redimensionne
     pas : ici ça n'a aucun intérêt.

     L'en-tête et le pied restent en place, seul le contenu défile :
     le bouton de fermeture est toujours à portée, sans descendre.

        MF.ventana('📄 el título', '<p>contenido</p>')
        MF.ventana(titulo, html, { ancho:'520px', alPie:'<button…>' })

     Rend { cierra:fn, caja:elemento } pour agir dessus ensuite.
     ══════════════════════════════════════════════════════════════════ */
  function ventana(titulo, contenido, op){
    op = op || {};
    var fondo = document.createElement('div');
    fondo.className = 'sf-ventana-fondo';
    var caja  = document.createElement('div');
    caja.className = 'sf-ventana';
    if(op.ancho) caja.style.maxWidth = op.ancho;

    caja.innerHTML =
        '<div class="sf-ventana-cab"><span class="sf-ventana-tit">' + (titulo||'') + '</span>'
      + '<span class="sf-ventana-x" title="cerrar">✕</span></div>'
      + '<div class="sf-ventana-cuerpo">' + (contenido||'') + '</div>'
      /* v2 (P-H, 11/09) : le ✕ ferme déjà — un bouton « Cerrar » en plus
         serait deux fois le même geste. Le pied ne paraît que s'il porte
         autre chose. */
      + (op.alPie ? '<div class="sf-ventana-pie">' + op.alPie + '</div>' : '');

    fondo.appendChild(caja);
    document.body.appendChild(fondo);

    function cierra(){
      document.removeEventListener('keydown', porTecla);
      if(fondo.parentNode) document.body.removeChild(fondo);
      if(op.alCerrar) op.alCerrar();
    }
    function porTecla(e){ if(e.key === 'Escape') cierra(); }
    document.addEventListener('keydown', porTecla);

    fondo.onclick = function(e){ if(e.target === fondo) cierra(); };
    caja.querySelector('.sf-ventana-x').onclick = cierra;
    var b = caja.querySelector('.sf-ventana-btn');
    if(b) b.onclick = cierra;

    /* ── on la tire par son en-tête ── */
    var cab = caja.querySelector('.sf-ventana-cab');
    var arrastrando = false, x0 = 0, y0 = 0, dx = 0, dy = 0;
    cab.addEventListener('mousedown', function(e){
      if(e.target.classList.contains('sf-ventana-x')) return;
      arrastrando = true;
      x0 = e.clientX - dx; y0 = e.clientY - dy;
      cab.style.cursor = 'grabbing';
      e.preventDefault();
    });
    document.addEventListener('mousemove', function(e){
      if(!arrastrando) return;
      dx = e.clientX - x0; dy = e.clientY - y0;
      caja.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
    });
    document.addEventListener('mouseup', function(){
      arrastrando = false; cab.style.cursor = 'grab';
    });

    return { cierra: cierra, caja: caja };
  }

  /* ── le retour au panal : l'abeille, et la fermeture d'onglet ── */
  function abeja(destino){
    if(enMarco) return;   /* le cadre du lanceur porte déjà ce bouton */
    var d = destino || params().panal || '../panal/index.html';
    var b=document.createElement('div');
    b.id='mf-abeja';
    b.innerHTML='🐝';
    b.title='Volver al panal';
    b.style.cssText='position:fixed;top:10px;right:14px;z-index:9000;font-size:26px;'
      +'cursor:pointer;opacity:.75;transition:all .25s;user-select:none';
    b.onmouseover=function(){ b.style.opacity='1'; b.style.transform='scale(1.25)'; };
    b.onmouseout =function(){ b.style.opacity='.75'; b.style.transform='scale(1)'; };
    b.onclick=function(){
      /* v3 (P-H) : beforeunload couvre la fermeture d'onglet et le
         changement de page — mais PAS l'abeille, qui part par le code.
         Ici le bouton est à nous : on pose donc une vraie question,
         avec le texte qu'on veut, ce que le navigateur interdit. */
      function salir(){
        if(window.opener && !window.opener.closed){ window.close(); }
        else { window.location.href = d; }
      }
      if(!sucio){ salir(); return; }
      preguntaSalir(salir);
    };
    document.body.appendChild(b);
  }

  /* ── ouvrir un fichier du disque (P-H : « j'ai des .sf sous la main ») ──
     Le module ne peut pas fouiller votre disque : c'est le navigateur qui
     l'interdit, et c'est heureux. Alors on lui tend le fichier. */
  var btopen;          /* le bouton 📂, gardé au moment où on le crée (P-H) */
  function abrirFichero(alCargar, alFallar){
    var i=document.createElement('input');
    i.type='file'; i.accept='.mf,.sf,.json';
    i.onchange=function(){
      var f=i.files[0]; if(!f) return;
      var r=new FileReader();
      r.onload=function(){
        try{
          /* l'infobulle du 📂 dit désormais QUEL dossier est chargé (P-H, 08/09) */
          if(btopen) btopen.title = f.name;
          datos=JSON.parse(r.result);
          matricula=f.name.replace(/\.(mf|sf|json)$/i,'');
          ruta=f.name; manija=null; limpio();
          reanuda();
          if(alCargar) alCargar(datos);
        }catch(e){ if(alFallar) alFallar('No es un JSON válido: '+e.message); }
      };
      r.readAsText(f);
    };
    i.click();
  }

  /* le bouton, posé à côté de l'abeille */
  function botonAbrir(alCargar, alFallar){
    if(enMarco) return;   /* le cadre du lanceur porte déjà ce bouton */
    var b=document.createElement('div');
    btopen=b;
    b.id='mf-abrir';
    b.innerHTML='📂';
    b.title='Abrir un expediente del disco (.sf / .mf)';
    b.style.cssText='position:fixed;top:10px;right:52px;z-index:9000;font-size:22px;'
      +'cursor:pointer;opacity:.7;transition:all .25s;user-select:none';
    b.onmouseover=function(){ b.style.opacity='1'; b.style.transform='scale(1.2)'; };
    b.onmouseout =function(){ b.style.opacity='.7'; b.style.transform='scale(1)'; };
    b.onclick=function(){ abrirFichero(alCargar, alFallar); };
    document.body.appendChild(b);
  }

  /* ── le démarrage type d'un module ── */
  /* ══ la forme courte : ?paciente=AGL5678_….mf  (P-H, 11/09) ══
     Le nom du fichier porte la matricule, donc le dossier s'en déduit.
     Un seul paramètre au lieu de deux, et ils ne peuvent plus se
     contredire. L'ancienne forme ?mf=…&carpeta=… marche toujours, et
     le 📂 reste là pour un fichier posé ailleurs. */
  function _delParametroCorto(p){
    if(p.mf || !p.paciente) return p;
    var n = p.paciente;
    var m = /^([A-Za-z]{2,4}\d{3,6})_/.exec(n);
    if(!m) return p;
    p.mf = n;
    p.carpeta = '../pacientes/' + m[1] + '/';
    return p;
  }

  function arranca(opciones){
    var p=params();
    /* la forme courte : ?paciente=AGL5678_….mf — le dossier se déduit */
    if(!p.mf && p.paciente){
      p.mf = p.paciente;
      var _m = /^([A-Za-z]{2,4}\d{3,6})_/.exec(p.paciente);
      if(_m && !p.carpeta) p.carpeta = _raizPacientes() + _m[1] + '/';
    }
    /* ══ v7 (P-H) — DANS LE CADRE DU LANCEUR ══
       Quand le module vit dans l'iframe du lanceur (?enMarco=1), il ne
       s'occupe plus de rien : ni du fichier, ni du cadre, ni de l'abeille.
       Le lanceur lui envoie le dossier par postMessage ; le module lui
       renvoie ses modifications, et c'est le lanceur qui enregistre.
       Un seul .mf, un seul 💾, un seul cadre. */
    PERFIL = p.perfil || null;
    p_carpeta = p.carpeta || '';
    if(p.idioma) LANG_SF = p.idioma;
    cargaPrincipios();
    var _inst = _atiendeInstal(p);
    if(_inst && opciones && opciones.alInstalar) opciones.alInstalar(_inst);
    setTimeout(function(){ ponVersion(); aplicaIdioma(LANG_SF); ponFuente(); }, 120);
    if(p.enMarco){
      enMarco = true;
      cargaPaletas(nombreDelModulo());
      /* v9 (P-H) : dans le cadre, l'en-tête du module fait doublon avec le
         bandeau du lanceur — on le cache. Il reste quand le module est
         ouvert seul, où il est le seul repère. */
      var h=document.querySelector('[data-cabecera], header.mod, header');
      if(h) h.style.display='none';
      /* v7c (P-H) : la matricule vient dans l'adresse — le module va
         chercher le fichier lui-même, comme quand il vit seul. Le canal
         par message ne sert plus que pour un fichier ouvert au 📂. */
      /* v11 (P-H : « la palette n'est pas prise en compte par les
         modules ») — l'écouteur n'était posé qu'en SECOURS, quand le
         chargement par matricule échouait. Dans le cas normal, le module
         n'entendait donc jamais le lanceur : ni la palette, ni la barre.
         On l'écoute toujours. */
      escuchaAlLanzador(opciones, p);
      if(p.mf){
        return carga(p.mf, p.carpeta||'')
          .then(function(d){ if(opciones&&opciones.alCargar) opciones.alCargar(d, p); return d; })
          .catch(function(){ return null; });
      }
      return Promise.resolve(null);
    }
    return arrancaSuelto(opciones, p);
  }

  function escuchaAlLanzador(opciones, p){
      window.addEventListener('message', function(ev){
        var d=ev.data||{};
        if(d.de!=='lanzador') return;
        if(d.tipo==='barra-clic'){ if(_alBarra) _alBarra(d.id); return; }
        /* v10 (P-H : « le clair/obscur n'est pas pris en compte par les
           modules ») — chacun vit dans son iframe, il ne saurait pas seul
           quel thème on a choisi. Le lanceur le lui envoie. */
        if(d.tipo==='paleta'){
          if(d.v){ Object.keys(d.v).forEach(function(k){
            document.documentElement.style.setProperty(k, d.v[k]); });
            if(d.id) MI_PALETA=d.id; return; }
          if(d.id){ aplicaPaleta(d.id); return; }
          Object.keys(d.v||{}).forEach(function(k){
            document.documentElement.style.setProperty(k, d.v[k]);
          });
          return;
        }
        /* le lanceur demande quelles palettes on connaît, et laquelle on porte */
        if(d.tipo==='idioma'){
          aplicaIdioma(d.idioma||'es');
          if(opciones&&opciones.alIdioma) opciones.alIdioma(LANG_SF); return; }
        if(d.tipo==='perfil'){ PERFIL=d.perfil||null; aplicaPerfil();
          if(opciones&&opciones.alPerfil) opciones.alPerfil(PERFIL); return; }
        if(d.tipo==='dime-paleta'){
          try{ parent.postMessage({de:'modulo', tipo:'mis-paletas',
                paletas:PALETAS, actual:MI_PALETA, modulo:MI_NOMBRE}, '*'); }catch(e){}
          return;
        }
        if(d.tipo==='sin-expediente'){
          if(opciones&&opciones.alFallar) opciones.alFallar('Abra un expediente con 📂 en la banda de arriba');
          return;
        }
        if(d.tipo==='expediente'){ setTimeout(ponFuente, 60);
          datos = d.datos; matricula = d.nombre || 'expediente';
          if(opciones&&opciones.alCargar) opciones.alCargar(datos, p);
        }
      });
      /* v7b (P-H : « le module n'affiche rien ») — le lanceur envoyait le
         dossier avant que l'écouteur soit posé : le message tombait dans
         le vide. Le module le RÉCLAME donc, et le redemande une fois si
         rien n'est venu — le lanceur peut n'être pas prêt lui non plus. */
      var pedido = function(){
        try{ parent.postMessage({de:'modulo', tipo:'listo'}, '*'); }catch(e){}
      };
      if(!p.mf){
        pedido();
        setTimeout(function(){ if(!datos) pedido(); }, 150);
        setTimeout(function(){ if(!datos) pedido(); }, 600);
      } else {
        /* on a la matricule : on ne réclame que la palette */
        try{ parent.postMessage({de:'modulo', tipo:'listo'}, '*'); }catch(e){}
      }
  }

  /* le nom du module se déduit de l'adresse : curvas.html → curvas */
  function nombreDelModulo(){
    var n=location.pathname.split('/').pop().replace(/\.html$/i,'');
    return n || 'modulo';
  }

  function arrancaSuelto(opciones, p){
    PERFIL = p.perfil || null;
    cargaPaletas(nombreDelModulo());

    /* v5 (P-H) : le dossier peut avoir été ouvert sur la page d'accueil.
       Le module le reprend sans rien redemander — une seule ouverture
       pour toute la session. */
    if(p.sesion){
      try{
        var g=sessionStorage.getItem('mf_datos');
        if(g){
          datos=JSON.parse(g);
          matricula=sessionStorage.getItem('mf_nombre')||'expediente';
          abeja(p.panal); botonGuardar();
          botonAbrir(function(d){ if(opciones&&opciones.alCargar) opciones.alCargar(d,p); },
                     function(m){ if(opciones&&opciones.alFallar) opciones.alFallar(m); });
          reanuda();
          if(opciones&&opciones.alCargar) opciones.alCargar(datos, p);
          return Promise.resolve(datos);
        }
      }catch(e){}
    }
    var mat=p.mf || p.paciente || (opciones&&opciones.porDefecto);
    abeja(p.panal);
    botonGuardar();
    botonAbrir(
      function(d){ if(opciones&&opciones.alCargar) opciones.alCargar(d, p); },
      function(m){ if(opciones&&opciones.alFallar) opciones.alFallar(m); }
    );
    if(!mat){
      /* sans matricule, le module attend qu'on lui tende un fichier */
      if(opciones&&opciones.alFallar) opciones.alFallar('Toque 📂 arriba a la derecha para abrir un expediente (.sf o .mf), o llame al módulo con …?mf=MATRICULA');
      return Promise.resolve(null);
    }
    return carga(mat, (opciones&&opciones.carpeta)||'')
      .then(function(d){ reanuda(); if(opciones&&opciones.alCargar) opciones.alCargar(datos, p); return datos; })
      .catch(function(e){ if(opciones&&opciones.alFallar) opciones.alFallar(e.message); throw e; });
  }

  return { arranca:arranca, carga:carga, params:params, abeja:abeja, abrirFichero:abrirFichero,
           guarda:guarda, tocado:tocado, limpio:limpio, hayCambios:hayCambios, aviso:aviso,
           guardaTrabajo:guardaTrabajo, hayTrabajo:hayTrabajo, olvidaTrabajo:olvidaTrabajo,
           enMarco:function(){return enMarco;}, barra:barra, barraActivos:barraActivos, estado:estado,
           paletas:paletas, paletaActual:paletaActual, aplicaPaleta:aplicaPaleta,
           perfil:perfil, esPerfil:esPerfil, siPerfil:siPerfil, aplicaPerfil:aplicaPerfil,
           glosario:glosario, glosarioTodo:glosarioTodo, explica:explica, abreGlosario:abreGlosario,
           muestraGlosario:muestraGlosario, curvaEnGrande:curvaEnGrande,
           rubricas:rubricas, idiomas:idiomas, dice:dice, cierra:cierra,
           ponVersion:ponVersion, tip:tip, tips:tips,
           esDemo:esDemo, rutaPdf:rutaPdf, letreroDemo:letreroDemo, popupTexto:popupTexto, config:config, cargaConfig:cargaConfig,
           guarda:guarda, lista:lista, hayServidor:hayServidor, aviso:aviso,
           ventana:ventana,
           registro:registro, declara:declara, retira:retira, avisoDe:avisoDe,
           ponFuente:ponFuente,
           aplicaIdioma:aplicaIdioma, idioma:idioma,
           datos:function(){return datos;}, matricula:function(){return matricula;},
           paciente:paciente, ponPaciente:ponPaciente, mesures:mesures, claves:claves,
           eventos:eventos, medicamentos:medicamentos,
           medicamentosUnicos:medicamentosUnicos, normMed:normMed,
           principioDe:principioDe, principiosDesconocidos:principiosDesconocidos,
           categoriaDe:categoriaDe, nombreCategoria:nombreCategoria,
           cargaPrincipios:cargaPrincipios };
})();
