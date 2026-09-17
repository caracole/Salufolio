/* ══════════════════════════════════════════════════════════════════════
   LA MATRICE DU .mf — /Salufolio/comun/plantilla-mf.js

   « Tu devrais avoir quelque part una plantilla de .mf VIDE »
                                                    — P-H, 11/09/2026

   « Quand on crée un nouveau patient, le .mf est vide mais au moins
     toutes ses caractéristiques doivent être au début dans le patron. »
                                                    — P-H, 15/09/2026

   Et il a raison : on ouvre un dossier, on veut savoir DE QUI il est.
   Pas chercher patient_label trente lignes plus bas, entre la date
   d'export et l'historique.

   L'ORDRE DES CHAMPS EST UNE PARTIE DE LA FORME. Un fichier qu'on lit
   à l'œil commence par dire de qui il parle.

   ── CE QUI VIENT EN PREMIER ──
       formato · version        de quoi il s'agit
       paciente                 DE QUI il s'agit
       historial                son histoire
       …puis les tablas

   ── LES QUATRE FECHAS (conception arrêtée avec P-H le 01/08/2026) ──

   creacion       una sola vez, jamás reescrita — no se nace dos veces
   modificacion   [] se reconoce que se había escrito falso
   actualizacion  [] se enriquece con algo nuevo

   « MODIFIER, c'est reconnaître qu'on avait écrit faux ; ACTUALISER,
     c'est enrichir. »

   ── LES QUATRE SOURCES, par ordre d'autorité ──

   A · API          la vía principal — lectura automática de documentos
   X · Extractor    el PDF despojado, contraprueba, lleva su pdf_id
   P · Protocolo    observado a la cabecera, releído por un humano
   S · Salufolio    escrito a mano en el expediente
   ══════════════════════════════════════════════════════════════════════ */

var SF_PLANTILLA = window.SF_PLANTILLA = {

  version: '2026.09.17',

  fuentes: {
    A: { nombre:'API',        que:'lectura automática de un documento' },
    X: { nombre:'Extractor',  que:'el PDF despojado, con su pdf_id' },
    P: { nombre:'Protocolo',  que:'observado a la cabecera, releído' },
    S: { nombre:'Salufolio',  que:'escrito a mano en el expediente' }
  },

  /* l'ordre des champs — c'est lui qui rend le fichier lisible */
  orden: [
    '_leeme',
    'formato', 'version',
    'data_type', 'original_data_type', 'date_anonymized', 'exported',
    'paciente',
    'patient_name', 'patient_label', 'sip', 'nhc', 'cip_sns',
    'nacimiento', 'sexo',
    'historial',
    'mesures', 'events', 'medicaments', 'antecedentes', 'diagnosticos',
    'escalas', 'citas', 'prescripciones',
    'bacteriologia', 'vacunas', 'vacunaciones',
    'enfermeria_dx', 'enfermeria_int',
    'enfermeria_dx_registro', 'enfermeria_int_registro',
    'servicios', 'centros', 'prescriptores',
    'custom_params', 'correcciones', 'auditoria_conformes',
    'comentarios_curvas', 'listas', 'dudas', 'identificadores_dudosos',
    'pdfs'
  ],

  /* ── un expediente vide, mais COMPLET et dans le bon ordre ── */
  nuevo: function(paciente){
    paciente = paciente || {};
    var ahora = SF_PLANTILLA.sello();
    var mat = paciente.matricula || paciente.etiqueta || '';

    return {
      /* ══ CE QU'IL FAUT SAVOIR POUR LIRE CE FICHIER ══
         « Il serait bien de mettre ça en commentaire dans le .mf »
                                                    — P-H, 15/09/2026
         Le JSON n'accepte pas de commentaires : on en fait un champ.
         Le _ en tête dit que c'est une note, pas une donnée. */
      _leeme: {
        que_es: 'Expediente de Salufolio. Todo en claro, a propósito: '
              + 'dentro de diez años se seguirá leyendo sin programa.',
        fuentes: {
          A: 'API — un documento leído por máquina',
          X: 'Extractor — el PDF despojado, lleva su pdf_id',
          P: 'Protocolo — observado a la cabecera y releído por un humano',
          S: 'Salufolio — escrito a mano por quien cuida'
        },
        historial: 'modificacion = se había escrito falso · '
                 + 'actualizacion = se enriquece con algo nuevo',
        fechas: 'AAAA-MM-DD-HH:MM:SS, hora de donde se trabaja',
        el_patron: 'comun/patron-comentado.txt — cada campo explicado'
      },

      /* ══ DE QUOI IL S'AGIT ══ */
      formato: 'SF1',
      version: 'Salufolio-' + (window.SF_CONFIG ? SF_CONFIG.version : '2026'),
      data_type: 'real',
      original_data_type: null,
      date_anonymized: null,
      exported: new Date().toISOString(),

      /* ══════════════════════════════════════════════════════════════
         DE QUIÉN ES — UN SOLO BLOQUE (P-H, 17/09/2026)

         « Ma première idée était la bonne. »

         Lo era: todo lo de la persona en un sitio, bajo un solo nombre.
         El 15/09 lo pusimos plano —patient_name, patient_label, sip…—
         y a plano se queda la copia, porque DIECISIETE programas leen
         « patient_label » y no se rompen diecisiete de golpe.

         Así que las dos formas conviven:
           · « paciente » es LA VERDAD — lo que se escribe
           · los campos planos son EL ECO — para los diecisiete

         completa() los mantiene de acuerdo en los dos sentidos. Se irán
         mudando programa a programa, sin prisa, y el día que ninguno
         lea el eco, el eco se va.

         Sexo y nacimiento son del paciente, no de los datos: se ponen
         al crear; si una extracción devuelve otros, se señalan — pero
         no se sobreescriben.
         ══════════════════════════════════════════════════════════════ */
      paciente: {
        /* ══ DOS CAMPOS, NO TRES (P-H, 17/09/2026) ══
           « [nombre | prénom(s)] [apellidos | nom] — ça me va. »

           « apellido1 » y « apellido2 » suponen la costumbre española.
           Un francés lleva un nombre, un islandés un patronímico, y los
           vascos recitaban OCHO apellidos para probar su linaje.

           Dos campos aguantan todo: « María del Carmen » | « Gómez Ruiz »,
           « Michèle » | « Rogues de Fursac ». Y nadie tiene que decidir
           si « de » es un apellido o una partícula. */
        nombre:     paciente.nombre     || '',
        apellidos:  paciente.apellidos  || '',
        matricula:  mat,
        nacimiento: paciente.nacimiento || '',
        sexo:       paciente.sexo       || '',
        sip:        paciente.sip        || '',
        nhc:        paciente.nhc        || '',
        cip_sns:    paciente.cip_sns    || ''
      },

      /* el eco: « patient_name » lleva la suma, como P-H lo quiso */
      patient_name:  SF_PLANTILLA.nombreEntero(paciente),
      patient_label: mat,
      sip:           paciente.sip        || '',
      nhc:           paciente.nhc        || '',
      cip_sns:       paciente.cip_sns    || '',
      nacimiento:    paciente.nacimiento || '',
      sexo:          paciente.sexo       || '',

      /* ══ SU HISTORIA ══ */
      historial: {
        creacion: ahora,
        creacion_nota: 'historial iniciado aquí — no cubre lo anterior',
        modificacion: [],
        actualizacion: []
      },

      /* ══ LO QUE LLEVA ══ */
      mesures: [],
      events: [],
      medicaments: [],
      antecedentes: [],
      diagnosticos: [],
      escalas: [],
      citas: [],
      prescripciones: [],
      bacteriologia: [],
      vacunas: [],
      vacunaciones: [],
      enfermeria_dx: [],
      enfermeria_int: [],
      enfermeria_dx_registro: [],
      enfermeria_int_registro: [],
      servicios: [],
      centros: [],
      prescriptores: [],
      custom_params: [],
      correcciones: [],
      auditoria_conformes: [],
      comentarios_curvas: {},
      listas: {},
      dudas: [],
      identificadores_dudosos: [],
      pdfs: { directorio: '', archivos: {} }
    };
  },

  /* ── el nombre entero: nombre + apellidos (P-H, 17/09) ── */
  nombreEntero: function(p){
    p = p || {};
    var n = (String(p.nombre || '') + ' ' + String(p.apellidos || '')).trim();
    if(n) return n;
    /* sin nombre ni apellidos, la matrícula — « sinon on ne sait plus
       où on est » (P-H, 17/09) */
    return p.etiqueta || p.matricula || '';
  },

  /* la date au format du dossier : 2026-09-15-16:24:07 */
  sello: function(d){
    d = d || new Date();
    var z = function(x){ return String(x).padStart(2,'0'); };
    return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' + z(d.getDate())
         + '-' + z(d.getHours()) + ':' + z(d.getMinutes()) + ':' + z(d.getSeconds());
  },

  /* ── REMETTRE D'APLOMB un dossier incomplet ou mal rangé ──
     On ajoute ce qui manque, on ne réécrit rien — et on remet les
     champs dans l'ordre, pour qu'un fichier de dix ans se lise comme
     un neuf. Lavoisier. */
  completa: function(d, paciente){
    d = d || {};
    var m = SF_PLANTILLA.nuevo(paciente || {});

    /* ce qui manque, on l'ajoute — on ne réécrit rien */
    Object.keys(m).forEach(function(k){
      if(d[k] === undefined || d[k] === null) d[k] = m[k];
    });

    /* ══════════════════════════════════════════════════════════════
       LAS DOS FORMAS, DE ACUERDO (P-H, 17/09/2026)

       En los DOS sentidos, a cada apertura:
         · un fichero plano SUBE al bloque
         · un fichero con bloque BAJA al eco

       Ni uno ni otro se pierde, y los diecisiete programas siguen
       leyendo lo que saben leer.
       ══════════════════════════════════════════════════════════════ */
    if(!d.paciente || typeof d.paciente !== 'object') d.paciente = {};
    var P = d.paciente;

    /* ① lo plano SUBE — un fichero de antes */
    var SUBE = [['matricula','patient_label'],
                ['sip','sip'], ['nhc','nhc'], ['cip_sns','cip_sns'],
                ['nacimiento','nacimiento'], ['sexo','sexo']];
    SUBE.forEach(function(par){
      if(!P[par[0]] && d[par[1]]) P[par[0]] = d[par[1]];
    });

    /* ── el nombre: si el bloque no lo tiene, se parte el plano ──
       Primera palabra el nombre, el resto los apellidos. Es una
       propuesta, no una verdad: quien lo lea puede corregirlo. */
    if(!P.nombre && !P.apellidos && d.patient_name){
      var t = String(d.patient_name).trim().split(/\s+/);
      if(t.length === 1){ P.nombre = t[0]; }
      else { P.nombre = t[0]; P.apellidos = t.slice(1).join(' '); }
    }
    /* los bloques de antes llevaban apellido1 / apellido2 */
    if(!P.apellidos && (P.apellido1 || P.apellido2))
      P.apellidos = [P.apellido1, P.apellido2].filter(Boolean).join(' ');
    if(!P.nombre && P.etiqueta) P.nombre = P.etiqueta;

    /* ② lo que el llamador sabe, y el fichero no */
    if(paciente){
      if(!P.nombre)     P.nombre     = paciente.nombre || '';
      if(!P.apellidos)  P.apellidos  = paciente.apellidos || '';
      if(!P.matricula)  P.matricula  = paciente.matricula || '';
      if(!P.sip)        P.sip        = paciente.sip || '';
      if(!P.nacimiento) P.nacimiento = paciente.nacimiento || '';
      if(!P.sexo)       P.sexo       = paciente.sexo || '';
    }

    /* ③ el bloque BAJA al eco — para los diecisiete */
    SUBE.forEach(function(par){
      if(P[par[0]]) d[par[1]] = P[par[0]];
    });
    var entero = SF_PLANTILLA.nombreEntero(P);
    if(entero) d.patient_name = entero;

    /* lo que falte, vacío pero presente: un campo ausente es una
       pregunta más cada vez que se lee */
    ['nombre','apellidos','matricula','nacimiento','sexo','sip','nhc',
     'cip_sns'].forEach(function(k){
      if(P[k] === undefined) P[k] = '';
    });
    /* los de antes se van, su contenido ya está en « apellidos » */
    delete P.apellido1; delete P.apellido2;

    /* le _leeme se remet à jour, même sur un vieux fichier */
    d._leeme = m._leeme;

    /* l'historial, en détail — il peut exister à moitié */
    if(!d.historial || typeof d.historial !== 'object') d.historial = m.historial;
    if(!d.historial.creacion){
      d.historial.creacion = SF_PLANTILLA.sello();
      d.historial.creacion_nota = m.historial.creacion_nota;
    }
    if(!Array.isArray(d.historial.modificacion))  d.historial.modificacion  = [];
    if(!Array.isArray(d.historial.actualizacion)) d.historial.actualizacion = [];
    if(!d.pdfs || typeof d.pdfs !== 'object') d.pdfs = { directorio:'', archivos:{} };
    if(!d.pdfs.archivos) d.pdfs.archivos = {};

    return SF_PLANTILLA.ordena(d);
  },

  /* ── remettre les champs dans l'ordre ──
     « pourquoi ce n'est pas au début du .mf ? » — P-H, 15/09
     Parce que personne ne s'en occupait. Maintenant si. */
  ordena: function(d){
    if(!d) return d;
    var out = {};
    SF_PLANTILLA.orden.forEach(function(k){
      if(d[k] !== undefined) out[k] = d[k];
    });
    /* tout ce qu'on n'avait pas prévu vient après, rien ne se perd */
    Object.keys(d).forEach(function(k){
      if(out[k] === undefined) out[k] = d[k];
    });
    return out;
  },

  /* ── les deux gestes qui écrivent l'histoire ── */
  actualiza: function(d, src, razon){   /* algo NUEVO aparece */
    if(!d || !d.historial) return;
    var l = { src: src || 'S', fecha: SF_PLANTILLA.sello() };
    if(razon) l.razon = razon;          /* por qué — si se sabe (P-H, 15/09) */
    d.historial.actualizacion.push(l);
  },
  modifica: function(d, src, razon){    /* algo que estaba cambia */
    if(!d || !d.historial) return;
    var l = { src: src || 'S', fecha: SF_PLANTILLA.sello() };
    if(razon) l.razon = razon;
    d.historial.modificacion.push(l);
  },

  /* au moment d'exporter : l'enveloppe porte sa date, et tout est rangé */
  paraExportar: function(d){
    if(!d) return d;
    d.exported = new Date().toISOString();
    return SF_PLANTILLA.ordena(d);
  }
};
