/* ══════════════════════════════════════════════════════════════════════
   LAS EQUIVALENCIAS — /Salufolio/comun/equivalencias.js
   Versión 2026.09.29-12:50:00

   « Tu devrais avoir une fonction générique qui, si tu lui donnes A ou B
     et que dans la table il y a A = B = C, te dise OK. »  (P-H, 29/09/2026)

   ── LO QUE ESTO ES ──────────────────────────────────────────────────

   Una CLASE DE EQUIVALENCIA: en la tabla, « rivaroxabán = Xarelto =
   Rivaroxaban Sandoz » son UNA cosa con tres nombres. Dar cualquiera de
   los tres devuelve la misma clase; preguntar si dos son lo mismo
   devuelve sí.

   Este fichero NO CONOCE NINGÚN MEDICAMENTO. No conoce tampoco ninguna
   sigla, ninguna unidad, ninguna sala. Las clases vienen de una tabla, y
   la tabla dice ella misma cómo se lee:

       SF_EQUIV.registra('medicamentos', SF_PRINCIPIOS.principios,
         { canonico:'nombre', alias:'comerciales',
           normaliza:'primera_palabra' });

   « canonico » y « alias » son NOMBRES DE CAMPO, no campos. El día que
   otra tabla llame « marcas » a lo que ésta llama « comerciales », se
   cambia esa palabra y nada más. Doctrina de 1966: direccionamiento
   indirecto — el motor no sabe nada, la tabla decide.

   ── TRES ESTADOS, NO DOS ────────────────────────────────────────────

   « mismo » devuelve true, false, o NULL. Null es « no lo sé »: uno de
   los dos nombres no está en la tabla.

   No es una sutileza. Si la tabla ignora « Machin® », decir que es
   DISTINTO del rivaroxabán es una mentira peligrosa —así se toma dos
   veces el mismo anticoagulante bajo dos nombres—. El null obliga a
   quien pregunta a decidir, y a decirlo.

   Por la misma razón « clase » devuelve null cuando no sabe, y nunca
   adivina. Quien adivina fabrica clases falsas que parecen abandonadas.

   ── LO QUE LA TABLA NO SABE, Y LO QUE SE CONTRADICE ─────────────────

   « huecos » dice qué nombres de una lista real la tabla no conoce: es
   la auditoría de la tabla, hecha por el programa y no a mano.

   « choques » dice si dos clases reclaman el mismo alias — el caso de
   « xumadol », « yurelax » y « duodart » (P-H, 28/09/2026). Una tabla de
   equivalencias con un alias ambiguo miente sin avisar; aquí lo dice.
   ══════════════════════════════════════════════════════════════════════ */
var SF_EQUIV = window.SF_EQUIV = (function(){

  /* ── LOS DOMINIOS REGISTRADOS ───────────────────────────────────────
     { <dominio>: { clases:{clave:{canonico,alias:[]}},
                    indice:{pelado:clave}, choques:{pelado:[clave,…]},
                    normaliza:'…' } }                                 */
  var D = {};

  /* ── LA NORMALIZACIÓN ES UNA TABLA, NO UN if ────────────────────────
     Cada dominio elige la suya. « XARELTO 20 MG » y « Xarelto » son el
     mismo medicamento —primera palabra—, pero « pH urinario » y « pH »
     NO son la misma sigla: ahí hace falta la cadena entera.
     Para anadir un modo se anade una linea aqui.                       */
  function base(s){
    return String(s == null ? '' : s).toUpperCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/\(.*?\)/g, ' ')
      .replace(/[^A-Z0-9 ]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  var NORMALIZA = {
    todo:            function(s){ return base(s); },
    primera_palabra: function(s){ return base(s).split(' ')[0] || ''; }
  };

  function pela(dom, s){
    var d = D[dom];
    var f = (d && NORMALIZA[d.normaliza]) || NORMALIZA.todo;
    return f(s);
  }

  /* ══ REGISTRAR UNA TABLA ══════════════════════════════════════════
     tabla : { <clave>: { <canonico>:…, <alias>:[…] } }
     opc   : { canonico, alias, normaliza }  —o los que la tabla lleve
             en su propio campo « equivalencia », si lo lleva.
     Devuelve lo que ha entendido: clases, alias, choques. Se registra
     dos veces el mismo dominio y la segunda MANDA —asi se recarga una
     tabla sin recargar la pagina.                                    */
  function registra(dom, tabla, opc){
    if(!dom || !tabla || typeof tabla !== 'object') return null;
    var o = opc || tabla.equivalencia || {};
    var cCan = o.canonico || 'nombre';
    var cAli = o.alias    || 'alias';
    var norm = NORMALIZA[o.normaliza] ? o.normaliza : 'todo';

    var d = D[dom] = { clases:{}, indice:{}, choques:{}, normaliza:norm,
                       campos:{ canonico:cCan, alias:cAli } };

    Object.keys(tabla).forEach(function(k){
      if(k.charAt(0) === '_' || k === 'equivalencia') return;  /* comentarios de la tabla */
      var e = tabla[k];
      if(!e || typeof e !== 'object') return;

      var can = e[cCan] || k;
      /* La clave y el canonico son alias de pleno derecho. El CANONICO va
         primero: cuando los dos se escriben igual salvo acento y caja
         —« rivaroxaban » y « RIVAROXABÁN »— se guarda uno solo, y mejor
         que sea el bonito, el que la tabla ha elegido para ensenar. */
      var lista = [can, k].concat(
        Array.isArray(e[cAli]) ? e[cAli] : (e[cAli] ? [e[cAli]] : []));

      var clave = pela(dom, k);
      if(!clave) return;
      var C = d.clases[clave] = { clave:clave, bruta:String(k),
                                  canonico:String(can), alias:[] };

      /* ══ DOS DEDUPLICACIONES, NO UNA (banco del 29/09/2026) ══
         El INDICE se dedupe en la forma normalizada: es su trabajo fundir
         « XARELTO 20 MG » y « Xarelto » en una sola entrada.

         La LISTA DE NOMBRES no. Con el modo « primera_palabra »,
         « RIVAROXABÁN » y « Rivaroxaban Sandoz 20 mg » se reducen los dos
         a RIVAROXABAN, y yo los tiraba: la lista perdia el nombre escrito
         en la caja. Se guarda toda forma ESCRITA distinta, y se indexa
         toda forma NORMALIZADA distinta. Nada se pierde de la tabla a la
         salida. */
      var enIndice = {}, escritos = {};
      lista.forEach(function(n){
        var p = pela(dom, n);
        if(!p) return;
        var esc = base(n);
        if(!escritos[esc]){ escritos[esc] = 1; C.alias.push(String(n)); }
        if(enIndice[p]) return;
        enIndice[p] = 1;
        /* ══ UN ALIAS QUE PERTENECE A DOS CLASES ══
           No se elige el uno ni el otro: se guarda el primero Y se
           apunta el choque. Elegir en silencio es lo que hace que una
           tabla mienta. */
        if(d.indice[p] && d.indice[p] !== clave){
          (d.choques[p] = d.choques[p] || [d.indice[p]]).push(clave);
        } else {
          d.indice[p] = clave;
        }
      });
    });
    return cuenta(dom);
  }

  /* ══ LA CLASE DE UN NOMBRE — o null si la tabla no lo sabe ══ */
  function clase(dom, nombre){
    var d = D[dom]; if(!d) return null;
    var p = pela(dom, nombre); if(!p) return null;
    return d.indice[p] || null;
  }

  /* ══ EL NOMBRE PARA ENSENAR — el canonico de su clase ══ */
  function canonico(dom, nombre){
    var c = clase(dom, nombre); if(!c) return null;
    return D[dom].clases[c].canonico;
  }

  /* ══ ¿SON LO MISMO? — true · false · null ══
     null = uno de los dos (o los dos) no esta en la tabla. */
  function mismo(dom, a, b){
    var ca = clase(dom, a), cb = clase(dom, b);
    if(ca === null || cb === null) return null;
    return ca === cb;
  }

  /* ══ TODOS LOS NOMBRES DE UNA CLASE ══
     Se le da cualquier alias —o la clave— y devuelve la familia entera,
     tal como esta escrita en la tabla. « otros » deja fuera el canonico:
     es lo que hace falta para escribir « RIVAROXABAN (Xarelto) ». */
  function alias(dom, nombre){
    var c = clase(dom, nombre); if(!c) return [];
    return D[dom].clases[c].alias.slice();
  }
  /* ══ « otros » COMPARA LO ESCRITO, NO LO INDEXADO ══
     Deja fuera los nombres escritos IGUAL que el canonico o que la clave
     —« rivaroxaban » y « RIVAROXABÁN » son el mismo escrito, salvo acento
     y caja—, pero guarda « Rivaroxaban Sandoz 20 mg », que es otro nombre
     aunque empiece por la misma palabra. Por eso aqui se usa « base »
     siempre, y no la normalizacion del dominio: la pregunta no es « son
     lo mismo? » —eso ya se sabe— sino « se escriben igual? ». */
  function otros(dom, nombre){
    var c = clase(dom, nombre); if(!c) return [];
    var C = D[dom].clases[c];
    var fuera = { }; fuera[base(C.canonico)] = 1; fuera[base(C.bruta)] = 1;
    return C.alias.filter(function(n){ return !fuera[base(n)]; });
  }

  /* ══ LA AUDITORIA: lo que la tabla NO conoce de una lista real ══
     Devuelve { <pelado>: [los nombres crudos tal como venian] }. */
  function huecos(dom, lista){
    var out = {};
    (lista || []).forEach(function(n){
      if(clase(dom, n)) return;
      var p = pela(dom, n) || '(vacio)';
      (out[p] = out[p] || []).push(String(n));
    });
    return out;
  }

  /* ══ LOS ALIAS AMBIGUOS de la tabla ══ */
  function choques(dom){
    var d = D[dom]; if(!d) return {};
    var out = {};
    Object.keys(d.choques).forEach(function(p){
      out[p] = d.choques[p].slice();
    });
    return out;
  }

  function cuenta(dom){
    var d = D[dom]; if(!d) return null;
    var na = 0;
    Object.keys(d.clases).forEach(function(k){ na += d.clases[k].alias.length; });
    return { dominio:dom, clases:Object.keys(d.clases).length, alias:na,
             indice:Object.keys(d.indice).length,
             choques:Object.keys(d.choques).length, normaliza:d.normaliza };
  }
  function dominios(){ return Object.keys(D); }
  function modos(){ return Object.keys(NORMALIZA); }

  return { registra:registra, clase:clase, canonico:canonico, mismo:mismo,
           alias:alias, otros:otros, huecos:huecos, choques:choques,
           cuenta:cuenta, dominios:dominios, modos:modos,
           VERSION:'2026.09.29-12:50:00' };
})();
