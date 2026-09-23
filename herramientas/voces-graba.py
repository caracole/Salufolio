#!/usr/bin/env python3
# Versión 2026.09.23-10:51:28
# ══════════════════════════════════════════════════════════════════════
#  GRABAR LAS VOCES — /Salufolio/herramientas/voces-graba.py
#
#  « J'ai une clé API. Est-ce que tu peux me terminer tout ça ? »
#                                                  — P-H, 21/09/2026
#
#  « Trop de travail à coller. »                   — P-H, 21/09/2026
#
#  UNA SOLA ORDEN, SIEMPRE LA MISMA. El programa mira el mismo la tabla
#  (casa/tour.js) y la carpeta de voz, y encuentra lo que falta:
#     · un objeto sin su mp3                          → se graba
#     · un mp3 cuyo texto de al lado ya no es el de la tabla → se regraba
#  Pide la clave la primera vez, dice cuantas letras, espera un « s »,
#  graba, y deja cada texto AL LADO de su sonido.
#
#  Las lenguas: las que ya tienen alguna voz grabada — se sigue lo
#  empezado. Para empezar otra:  --lang ca
#
#  ── LA CLAVE NO VIVE AQUI ──
#  Si estuviera en ~/Salufolio, se publicaria en GitHub con el resto.
#  Se busca, por orden:
#     1. la variable de entorno ELEVENLABS_API_KEY
#     2. el fichero ~/.config/salufolio/elevenlabs.key
#  La primera vez se pregunta, y se guarda en ese fichero, solo legible
#  por usted.
#
#  ── QUIEN HABLA ──
#  Lo dice la tabla: cada sala de casa/tour.js lleva su « voz » (oscar).
#  El nombre se busca entre SUS voces de ElevenLabs — « Mis voces »:
#  una voz de la biblioteca hay que anadirla alli primero.
#
#  ── NO SE GASTA NADA SIN PREGUNTAR ──
#  ElevenLabs cobra por letra. Antes de grabar, se dice cuantos textos y
#  cuantas letras, y se espera un « s ».
#
#  ── LAS PUERTAS TAMBIEN HABLAN (P-H, 23/09/2026) ──
#  « Tous les messages de fin de visite d'une salle sont muets. »
#  Lo estaban. Ahora cada puerta dice LO QUE ACABA DE PASAR — « Ya ha
#  visitado el vestibulo » — compuesto aqui de « puerta_hecha » y del
#  titulo de la sala. La PREGUNTA (« ¿Seguimos con...? ») se queda muda
#  a proposito: nombra la sala SIGUIENTE, y grabarla ataria el sonido al
#  ORDEN de la tabla; el dia que se permutan dos lineas los nueve
#  ficheros mentirian sin avisar. Diez textos por lengua:
#     ES-puerta-vestibulo.mp3 ... ES-puerta_ultima.mp3
#
#  ── Y NO ES OSCAR QUIEN LAS DICE ──
#  « Ca pourrait etre une voix de femme (celle qui surveille la porte ?) »
#  En un museo el guia le acompana dentro; en la puerta es la guardiana
#  quien le dice lo que acaba de ver. Cuando la voz cambia, se sabe que
#  la sala ha terminado sin leer nada. Quien es cada uno lo dice la
#  tabla, en « voces »:   { "guia": "...", "puerta": "..." }
#
#      python3 herramientas/voces-graba.py              grabar lo que falta
#      python3 herramientas/voces-graba.py --lang ca    anadir una lengua
#      python3 herramientas/voces-graba.py --voces      ver sus voces
#      python3 herramientas/voces-graba.py --prueba Sarah,Cristina,Sofia
#                                          escuchar candidatas antes de gastar
# ══════════════════════════════════════════════════════════════════════

import os, sys, re, json, glob, getpass, runpy, hashlib
import urllib.request, urllib.error

RAIZ  = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CASA  = os.path.join(RAIZ, 'casa')
API   = os.environ.get('SF_ELEVEN_URL', 'https://api.elevenlabs.io')
LLAVE = os.path.expanduser('~/.config/salufolio/elevenlabs.key')

MODELO  = 'eleven_multilingual_v2'     # habla castellano, frances, ingles…
FORMATO = 'mp3_44100_128'


def clave():
    k = os.environ.get('ELEVENLABS_API_KEY', '').strip()
    if k: return k
    if os.path.exists(LLAVE):
        return open(LLAVE, encoding='utf-8').read().strip()
    print()
    print('  No encuentro la clave de ElevenLabs.')
    k = getpass.getpass('  Péguela aquí (no se ve al escribir): ').strip()
    if not k: sys.exit('  Sin clave no se puede grabar.')
    os.makedirs(os.path.dirname(LLAVE), exist_ok=True)
    open(LLAVE, 'w', encoding='utf-8').write(k + '\n')
    os.chmod(LLAVE, 0o600)
    print('  Guardada en ' + LLAVE + ' — solo usted puede leerla,')
    print('  y esta FUERA de ~/Salufolio: no se publicara nunca.')
    return k


def pide(ruta, k, datos=None):
    req = urllib.request.Request(API + ruta,
        data=json.dumps(datos).encode('utf-8') if datos is not None else None,
        headers={'xi-api-key': k, 'Content-Type': 'application/json',
                 'Accept': 'audio/mpeg' if datos is not None else 'application/json'},
        method='POST' if datos is not None else 'GET')
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.read()
    except urllib.error.HTTPError as e:
        cuerpo = e.read().decode('utf-8', 'replace')[:300]
        motivo = {401: 'la clave no vale', 404: 'esa voz no existe en su cuenta',
                  422: 'el texto no le gusta', 429: 'demasiado deprisa, o se acabo el saldo'}
        # « missing the permission voices_read » (P-H, 21/09): la clave es buena,
        # le falta un permiso — no es lo mismo, y el remedio tampoco
        m = re.search(r'missing the permission (\w+)', cuerpo)
        if m:
            raise RuntimeError('ElevenLabs dice que a la clave le falta el permiso « %s ».\n'
                '      La clave es buena. En su pagina de claves de ElevenLabs, abra la\n'
                '      clave y concedale ese permiso — o cree una sin restriccion.' % m.group(1))
        raise RuntimeError('ElevenLabs dice %d — %s\n      %s'
                           % (e.code, motivo.get(e.code, ''), cuerpo))
    except urllib.error.URLError as e:
        raise RuntimeError('No se llega a ElevenLabs: %s' % e.reason)


def sus_voces(k):
    d = json.loads(pide('/v1/voices', k).decode('utf-8'))
    return [(v.get('name', ''), v.get('voice_id', '')) for v in d.get('voices', [])]


def busca_voz(nombre, voces):
    """« oscar » → la primera de sus voces cuyo nombre lo contenga.

    DOS VOCES CON EL MISMO NOMBRE (P-H, 23/09/2026): en su cuenta hay
    « Oscar - Fluid pitch » Y « Oscar » a secas. Cual gana depende del
    ORDEN en que ElevenLabs las devuelva — que no es cosa nuestra. Un
    dia podria cambiar y la visita entera cambiaria de voz sin que nadie
    lo pidiera. Asi que se avisa, y se recomienda poner el identificador
    en la tabla: es lo unico que no se mueve."""
    n = nombre.lower().strip()
    for nom, vid in voces:
        if vid == nombre: return vid, nom          # ya es un identificador
    cand = [(nom, vid) for nom, vid in voces if nom.lower().startswith(n)] \
        or [(nom, vid) for nom, vid in voces if n in nom.lower()]
    if len(cand) > 1:
        print('\n  ⚠ « %s » corresponde a %d de sus voces:' % (nombre, len(cand)))
        for nom, vid in cand: print('        %-44s %s' % (nom[:44], vid))
        print('    Se toma la primera. Ponga el identificador en la tabla')
        print('    (voces) para que no dependa del orden de ElevenLabs.\n')
    return (cand[0][1], cand[0][0]) if cand else (None, None)


def lee_tabla():
    s = open(os.path.join(CASA, 'tour.js'), encoding='utf-8').read()
    return json.loads(s[s.index('{'):s.rindex(';')])


def es_puerta(nombre):
    return (nombre == 'puerta_ultima' or nombre.startswith('puerta-')
            or nombre.startswith('invita-'))


def textos_puerta(T, lang):
    """Las frases de las puertas, compuestas de la tabla.

    DOS POR SALA, y las dos llevan el nombre de LA SALA QUE SE NOMBRAN a
    si mismas — nunca el de la sala vecina:

        puerta-<sala>    « Ya ha visitado el vestibulo. »
        invita-<sala>    « ¿Seguimos con el vestibulo? »

    La segunda se oye al SALIR DE LA ANTERIOR, pero no le pertenece: es
    la invitacion a ESTA sala. Por eso permutar dos lineas en la tabla de
    salas no rompe nada — el motor toca otra invitacion, y sigue siendo
    verdad. (El 22/09 lo habia colgado del otro extremo, y entonces si
    ataba el sonido al orden. « Ce serait bien d'entendre l'invitation a
    poursuivre la visite », P-H, 23/09 — y tenia razon.)

    Y la ultima, que es texto fijo y cierra la casa."""
    out = []
    V = T.get('salas') or T.get('visitas') or {}
    hecha = (T.get('puerta_hecha') or {}).get(lang) or ''
    sigue = (T.get('puerta_sigue') or {}).get(lang) or ''
    for k, sala in V.items():
        tit = sala.get('titulo') or sala.get('nombre') or {}
        tit = tit.get(lang) if isinstance(tit, dict) else tit
        if not tit: continue
        if hecha: out.append(('puerta-' + k, hecha.replace('{sala}', str(tit)).strip()))
        if sigue: out.append(('invita-' + k, sigue.replace('{sala}', str(tit)).strip()))
    u = (T.get('puerta_ultima_dicho') or T.get('puerta_ultima') or {}).get(lang)
    if u: out.append(('puerta_ultima', u.strip()))
    return out


def voz_de(obj, T):
    """quien dice este objeto: el propio objeto, o la sala donde sale"""
    V = T.get('voces') or {}
    if es_puerta(obj):                       # la guardiana, no el guia
        return V.get('puerta') or V.get('guia') or T.get('voz_defecto', 'oscar')
    o = (T.get('objetos') or {}).get(obj, {})
    if o.get('voz'): return o['voz']
    for s in (T.get('salas') or T.get('visitas') or {}).values():
        if obj in (s.get('pasos') or []) and s.get('voz'):
            return s['voz']
    return V.get('guia') or T.get('voz_defecto', 'oscar')


def main():
    k = clave()

    # ══ ESCUCHAR ANTES DE GASTAR (P-H, 23/09/2026) ══
    # « Le meme essai dans les deux langues »: una voz que va bien en
    # castellano puede decepcionar en frances. Se graba UNA frase — la de
    # la ultima puerta, la mas importante de la visita — con cada
    # candidata, en cada lengua empezada, en una carpeta aparte.
    if '--prueba' in sys.argv:
        j = sys.argv.index('--prueba')
        quienes = [x.strip() for x in (sys.argv[j+1] if j+1 < len(sys.argv) else '').replace(',', ' ').split() if x.strip()]
        if not quienes:
            sys.exit('\n  Diga a quien probar:  --prueba Sarah,Cristina,Sofia\n')
        T = lee_tabla()
        VOZ = os.path.join(CASA, T.get('voz_carpeta', 'voz/'))
        PR  = os.path.join(VOZ, 'pruebas')
        os.makedirs(PR, exist_ok=True)
        emp = sorted(set(os.path.basename(x)[:2].lower()
                         for x in glob.glob(os.path.join(VOZ, '*.mp3'))
                         if re.match(r'^[A-Z]{2}-', os.path.basename(x))))
        lenguas = [l for l in (T.get('idiomas') or ['es']) if l in emp] or ['es']
        frases = []
        for l in lenguas:
            t = (T.get('puerta_ultima') or {}).get(l)
            if t: frases.append((l, ' '.join(t.split())))
        if not frases: sys.exit('\n  No encuentro el texto de la ultima puerta.\n')
        voces = sus_voces(k)
        elegidas = []
        for q in quienes:
            vid, nom = busca_voz(q, voces)
            if not vid:
                print('  ⚠ « %s » no esta en sus voces — se salta.' % q); continue
            elegidas.append((q, vid, nom))
        if not elegidas: sys.exit('\n  Ninguna candidata encontrada.\n')
        letras = sum(len(f) for _, f in frases) * len(elegidas)
        print()
        print('  %d voces × %d lenguas = %d pruebas, %d letras en total.'
              % (len(elegidas), len(frases), len(elegidas)*len(frases), letras))
        for q, vid, nom in elegidas: print('     %-30s %s' % (nom[:30], vid))
        if input('  ¿Grabar las pruebas? (s/n) ').strip().lower() not in ('s','si','s\u00ed','o','oui','y'):
            print('  No se ha grabado nada.\n'); return
        filas = []
        for q, vid, nom in elegidas:
            for l, txt in frases:
                base = '%s-%s' % (l.upper(), re.sub(r'[^A-Za-z0-9]+', '_', q).strip('_'))
                try:
                    a = pide('/v1/text-to-speech/%s?output_format=%s' % (vid, FORMATO), k,
                             {'text': txt, 'model_id': MODELO})
                except RuntimeError as e:
                    print('  ✗ %-22s %s' % (base, e)); continue
                open(os.path.join(PR, base + '.mp3'), 'wb').write(a)
                filas.append((nom, vid, l, txt, base + '.mp3'))
                print('  ✓ %-22s %6d bytes' % (base + '.mp3', len(a)), flush=True)
        if filas:
            h = ['<!doctype html><html lang="es"><head><meta charset="utf-8">',
                 '<title>Las candidatas</title><style>',
                 'body{background:#14141a;color:#e8e8ef;font:15px system-ui;padding:26px;max-width:760px;margin:auto}',
                 'h1{font:600 20px Georgia,serif;color:#4a9eff}',
                 'p.f{color:#9a9aa8;font-size:13px;border-left:3px solid #2a2a33;padding-left:11px}',
                 '.v{margin:18px 0;padding:13px 15px;background:#1c1c22;border:1px solid #2a2a33;border-radius:11px}',
                 '.n{font-weight:600;margin-bottom:7px}.i{font-family:monospace;font-size:11px;color:#9a9aa8}',
                 'audio{width:100%;margin-top:6px}',
                 '</style></head><body><h1>🎧 Las candidatas a la puerta</h1>']
            for l, txt in frases:
                h.append('<p class="f"><b>%s</b> — %s</p>' % (l.upper(), txt))
            for nom, vid, l, txt, f in filas:
                h.append('<div class="v"><div class="n">%s <span class="i">%s · %s</span></div>'
                         '<audio controls preload="none" src="%s"></audio></div>'
                         % (nom, l.upper(), vid, f))
            h.append('</body></html>')
            open(os.path.join(PR, 'escuchar.html'), 'w', encoding='utf-8').write('\n'.join(h))
            print('\n  Escuchelas aqui — abra este fichero:')
            print('     ' + os.path.join(PR, 'escuchar.html'))
            print('\n  Luego ponga a la elegida en casa/tour.js:')
            print('     "voces": { "guia": "<id de Oscar>", "puerta": "<su id>" }')
            print('  El identificador, no el nombre: es lo unico que no se mueve.\n')
        return

    if '--voces' in sys.argv:
        print()
        for nom, vid in sus_voces(k): print('  %-44s %s' % (nom[:44], vid))
        print()
        return

    T = lee_tabla()
    VOZ = os.path.join(CASA, T.get('voz_carpeta', 'voz/'))
    os.makedirs(VOZ, exist_ok=True)
    patron = T.get('voz_nombre', '{lang}-{objeto}.mp3')
    O = T.get('objetos') or {}

    def huella(t):
        return hashlib.sha256(' '.join(str(t or '').split()).encode('utf-8')).hexdigest()[:8]
    def igual(a, b):
        return ' '.join(str(a or '').split()) == ' '.join(str(b or '').split())

    # los objetos que salen en alguna sala, en su orden, una vez cada uno
    usados = []
    for sala in (T.get('salas') or T.get('visitas') or {}).values():
        for p in sala.get('pasos') or []:
            if p in O and p not in usados: usados.append(p)
    # y los que no salen en ninguna sala pero hay que grabar igual:
    # el saludo de bienvenida, por ejemplo (P-H, 23/09/2026). La tabla los
    # nombra en « extras »; aqui no hay ni un nombre escrito a mano.
    for p in (T.get('extras') or []):
        if p in O and p not in usados: usados.append(p)

    # las lenguas: las ya empezadas, mas las pedidas con --lang
    empezadas = sorted(set(os.path.basename(x)[:2].lower()
                           for x in glob.glob(os.path.join(VOZ, '*.mp3'))
                           if re.match(r'^[A-Z]{2}-', os.path.basename(x))))
    pedidas = [a.split('=')[-1] for a in sys.argv[1:] if a.startswith('--lang')]
    if '--lang' in sys.argv:
        j = sys.argv.index('--lang')
        if j + 1 < len(sys.argv): pedidas.append(sys.argv[j+1])
    lenguas = [l for l in (T.get('idiomas') or ['es'])
               if l in empezadas or l in pedidas] or ['es']

    tareas, recuperados = [], 0
    for lang in lenguas:
        # los objetos de las salas, y despues las puertas
        piezas = []
        for obj in usados:
            # « dicho » si lo hay: el texto escrito para el oido (P-H, 21/09)
            fuente = O[obj].get('dicho') or O[obj].get('texto') or {}
            t = (fuente.get(lang) or '').strip()
            if t: piezas.append((obj, t))
        piezas += textos_puerta(T, lang)
        for obj, texto in piezas:
            base = patron.replace('{lang}', lang.upper()).replace('{objeto}', obj)
            base = os.path.splitext(base)[0]
            mp3 = os.path.join(VOZ, base + '.mp3')
            txt = os.path.join(VOZ, base + '.txt')
            if not os.path.exists(mp3):
                tareas.append((base, lang, obj, texto, 'nuevo'))
                continue
            if os.path.exists(txt):
                if not igual(open(txt, encoding='utf-8').read(), texto):
                    tareas.append((base, lang, obj, texto, 'cambiado'))
                continue
            # mp3 de antes, sin su texto: la huella dice si es el mismo
            # (una puerta no esta en « objetos »: no tiene huella guardada,
            #  su .txt de al lado basta — y si falta, se regraba)
            g = ((O.get(obj, {}).get('grabado') or {}).get(lang))
            if g and g == huella(texto):
                open(txt, 'w', encoding='utf-8').write(texto + '\n')
                recuperados += 1
            else:
                tareas.append((base, lang, obj, texto, 'cambiado'))

    if recuperados:
        print('\n  %d mp3 de antes recuperan su texto al lado.' % recuperados)

    if not tareas:
        print('\n  Todo esta grabado: ' + ', '.join(l.upper() for l in lenguas)
              + '. Nada que hacer.\n')
        if recuperados:
            runpy.run_path(os.path.join(RAIZ, 'herramientas', 'voces-registra.py'),
                           run_name='__main__')
        return

    voces = sus_voces(k)
    ids = {}
    for _, _, obj, _, _ in tareas:
        quien = voz_de(obj, T)
        if quien not in ids:
            vid, nom = busca_voz(quien, voces)
            if not vid:
                print('\n  La voz « %s » no esta en sus voces de ElevenLabs.' % quien)
                print('  Anadala en « Mis voces » y vuelva a empezar. Las suyas:')
                for n2, _ in voces: print('     ' + n2)
                print()
                return
            ids[quien] = (vid, nom)

    letras = sum(len(t[3]) for t in tareas)
    print()
    print('  ' + '═' * 62)
    print('  GRABAR CON ELEVENLABS')
    print('  ' + '═' * 62)
    for lang in lenguas:
        L = [t for t in tareas if t[1] == lang]
        if not L: continue
        nv = len([t for t in L if t[4] == 'nuevo'])
        cb = len(L) - nv
        print('  🎙 %s — %d por grabar (%d nuevos, %d cambiados), %d letras'
              % (lang.upper(), len(L), nv, cb, sum(len(t[3]) for t in L)))
    print()
    if '--detalle' in sys.argv:
        for base, lang, obj, texto, por in tareas:
            print('     %-28s %4d letras  %s' % (base, len(texto), por))
        print()
    print('  En total %d textos, %d letras. ElevenLabs cobra por letra.' % (len(tareas), letras))
    if input('  ¿Grabar? (s/n) ').strip().lower() not in ('s', 'si', 'sí', 'o', 'oui', 'y'):
        print('  No se ha grabado nada.\n')
        return

    hechos, total = 0, len(tareas)
    ancho = len(str(total))
    for num, (base, lang, obj, texto, por) in enumerate(tareas, 1):
        vid = ids[voz_de(obj, T)][0]
        try:
            audio = pide('/v1/text-to-speech/%s?output_format=%s' % (vid, FORMATO), k,
                         { 'text': texto, 'model_id': MODELO })
        except RuntimeError as e:
            print('  %*d/%d  ✗ %s\n      %s' % (ancho, num, total, base, e))
            print('  Se para aqui: lo grabado hasta ahora se queda.')
            break
        open(os.path.join(VOZ, base + '.mp3'), 'wb').write(audio)
        open(os.path.join(VOZ, base + '.txt'), 'w', encoding='utf-8').write(texto + '\n')
        hechos += 1
        # « Tu aurais dû mettre le nº devant le nom ! » (P-H, 21/09):
        # sobre 78 textos, sin contador no se sabe si falta poco o mucho
        print('  %*d/%d  ✓ %-26s %6d bytes' % (ancho, num, total, base + '.mp3', len(audio)),
              flush=True)

    print('\n  %d de %d grabados.' % (hechos, len(tareas)))
    if hechos:
        # el texto al lado de su sonido, y el registro al dia
        runpy.run_path(os.path.join(RAIZ, 'herramientas', 'voces-registra.py'),
                       run_name='__main__')


if __name__ == '__main__':
    try:
        main()
    except RuntimeError as e:
        print('\n  ' + str(e) + '\n')
    except KeyboardInterrupt:
        print('\n  Interrumpido.\n')
