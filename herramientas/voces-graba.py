#!/usr/bin/env python3
# Versión 2026.09.21-22:36:53
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
#      python3 herramientas/voces-graba.py              grabar lo que falta
#      python3 herramientas/voces-graba.py --lang ca    anadir una lengua
#      python3 herramientas/voces-graba.py --voces      ver sus voces
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
    """« oscar » → la primera de sus voces cuyo nombre lo contenga"""
    n = nombre.lower().strip()
    for nom, vid in voces:
        if vid == nombre: return vid, nom          # ya es un identificador
    for nom, vid in voces:
        if nom.lower().startswith(n): return vid, nom
    for nom, vid in voces:
        if n in nom.lower(): return vid, nom
    return None, None


def lee_tabla():
    s = open(os.path.join(CASA, 'tour.js'), encoding='utf-8').read()
    return json.loads(s[s.index('{'):s.rindex(';')])


def voz_de(obj, T):
    """quien dice este objeto: el propio objeto, o la sala donde sale"""
    o = (T.get('objetos') or {}).get(obj, {})
    if o.get('voz'): return o['voz']
    for s in (T.get('salas') or T.get('visitas') or {}).values():
        if obj in (s.get('pasos') or []) and s.get('voz'):
            return s['voz']
    return T.get('voz_defecto', 'oscar')


def main():
    k = clave()

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
        for obj in usados:
            # « dicho » si lo hay: el texto escrito para el oido (P-H, 21/09)
            fuente = O[obj].get('dicho') or O[obj].get('texto') or {}
            texto = (fuente.get(lang) or '').strip()
            if not texto: continue
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
            g = ((O[obj].get('grabado') or {}).get(lang))
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
