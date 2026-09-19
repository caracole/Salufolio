#!/usr/bin/env python3
# ══════════════════════════════════════════════════════════════════════
#  LAS VERSIONES DE SALUFOLIO — /Salufolio/herramientas/versiones.py
#
#  « Ce problème de version doit être automatisé, sinon on ne saura
#    jamais où on en est ! »                        — P-H, 18/09/2026
#
#  « La date ne peut pas marcher : il faudrait y ajouter le checksum. »
#                                                    — P-H, 19/09/2026
#
#  Y tenía razón. La fecha miente: un cp, un git clone, un touch, y el
#  fichero parece nuevo sin haber cambiado — o al revés. La SUMA DE
#  CONTROL no miente nunca: mismo contenido, misma suma.
#
#  ── CÓMO FUNCIONA ──
#
#  1. Se calcula la suma sha256 de cada fichero.
#  2. Se compara con la que se guardó la última vez.
#  3. Si ha cambiado, y SOLO entonces, se le pone la fecha de hoy
#     como versión — dentro del fichero, donde se lee.
#  4. La nueva suma se guarda.
#
#  Imposible olvidar un número. Imposible ponerlo sin motivo.
#
#  ── DÓNDE VA EL NÚMERO ──
#
#  .js con tabla   el campo "version" de su objeto
#  .html           la línea « Versión aaaa.mm.dd-hh:mm:ss » del encabezado
#  .css .py .txt   la misma línea, en su comentario de cabecera
#
#  Si un fichero no lleva dónde ponerlo, se dice y no se toca.
#
#  ── USO ──
#
#      python3 herramientas/versiones.py            ver qué ha cambiado
#      python3 herramientas/versiones.py --poner    poner las versiones
#      python3 herramientas/versiones.py --iniciar  la primera vez
# ══════════════════════════════════════════════════════════════════════

import hashlib, json, os, re, sys
from datetime import datetime

RAIZ   = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REGISTRO = os.path.join(RAIZ, 'doc', 'versiones.json')

# lo que se versiona
# Lo que lleva su version DENTRO — se le escribe el numero
EXT = {'.js', '.html', '.css', '.py', '.md', '.txt'}

# ══ LO QUE NO SE PUEDE ESCRIBIR, PERO SI VIGILAR (P-H, 19/09/2026) ══
#    « Dans les classes, tu as oublié les sons. »
#
#    Y era verdad: los mp3 son ficheros del programa —treinta y seis
#    cuando esten todos— y no aparecian en ningun sitio. No se les puede
#    poner un numero dentro: son binarios. Pero SI se les puede seguir.
#
#    Su version vive en el registro, y la pagina los ensena como a los
#    demas. Si se vuelve a grabar uno, la suma cambia y se sabe.
EXT_MUDA = {'.mp3', '.ogg', '.wav', '.m4a',
            '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico',
            '.pdf', '.woff', '.woff2', '.ttf'}

# lo que no se toca nunca
# archivo/ se queda fuera: « les fichiers archives sont verrouilles, on
# n'y touche pas » (P-H, 19/09/2026). Un fichero guardado debe conservar
# la version que tenia el dia que se guardo — es justo para eso que se
# guarda. Ponerle la fecha de hoy seria borrar su testimonio.
FUERA = {'pacientes', 'sources', '.git', 'node_modules', '__pycache__',
         'Descargas', 'respaldo', 'backup',
         'archivo', 'archivos', 'viejo', 'antiguo', 'old'}
FUERA_FICH = {'versiones.json', 'pacientes.js', 'package-lock.json'}


def sello(d=None):
    return (d or datetime.now()).strftime('%Y.%m.%d-%H:%M:%S')


def es_muda(ruta):
    return os.path.splitext(ruta)[1].lower() in EXT_MUDA


def suma(ruta):
    """la suma de control del contenido — sin la línea de versión,
       para que poner el número no cambie la suma él mismo.
       Un binario se toma tal cual: no lleva línea que quitar."""
    try:
        b = open(ruta, 'rb').read()
    except Exception:
        return None
    if es_muda(ruta):
        return hashlib.sha256(b).hexdigest()[:12]
    try:
        t = b.decode('utf-8')
        t = re.sub(r'Versi[oó]n\s+\d{4}\.\d{2}\.\d{2}-\d{2}:\d{2}:\d{2}', 'Versión X', t)
        t = re.sub(r'("version"\s*:\s*)"[\d.:\-]+"', r'\1"X"', t)
        t = re.sub(r"(version\s*:\s*)'[\d.:\-]+'", r"\1'X'", t)
        b = t.encode('utf-8')
    except UnicodeDecodeError:
        pass
    return hashlib.sha256(b).hexdigest()[:12]


def recorre():
    """todos los ficheros versionables, por su camino relativo"""
    out = []
    for dirp, dirs, fichs in os.walk(RAIZ):
        dirs[:] = [d for d in dirs if d not in FUERA and not d.startswith('.')]
        for f in sorted(fichs):
            if f in FUERA_FICH or f.startswith('.'):
                continue
            e = os.path.splitext(f)[1].lower()
            if e not in EXT and e not in EXT_MUDA:
                continue
            p = os.path.join(dirp, f)
            out.append(os.path.relpath(p, RAIZ))
    return sorted(out)


def pon_version(ruta, v):
    """escribe el número donde el fichero lo lleve.
       Devuelve: 'puesto' · 'muda' · 'sin_sitio' · 'error' """
    if es_muda(ruta):
        return 'muda'          # su version vive en el registro, no dentro
    try:
        t = open(ruta, encoding='utf-8').read()
    except Exception:
        return 'error'
    o = t

    # ① la línea « Versión aaaa.mm.dd-hh:mm:ss » del encabezado
    t2, n = re.subn(r'(Versi[oó]n\s+)\d{4}\.\d{2}\.\d{2}-\d{2}:\d{2}:\d{2}',
                    r'\g<1>' + v, t, count=1)
    if n:
        t = t2

    # ② el campo "version" de una tabla js
    t2, n2 = re.subn(r'("version"\s*:\s*)"[\d.:\-]*"', r'\g<1>"' + v + '"', t, count=1)
    if n2:
        t = t2
    else:
        t2, n3 = re.subn(r"(\bversion\s*:\s*)'[\d.:\-]*'", r"\g<1>'" + v + "'", t, count=1)
        if n3:
            t = t2
            n2 = n3

    if not (n or n2):
        return 'sin_sitio'
    if t == o:
        return 'puesto'
    try:
        open(ruta, 'w', encoding='utf-8').write(t)
    except Exception:
        return 'error'
    return 'puesto'


def lee_registro():
    try:
        return json.load(open(REGISTRO, encoding='utf-8'))
    except Exception:
        return {'_que': ('Las sumas de control de cada fichero. Si la suma cambia, '
                         'el fichero ha cambiado de verdad — y solo entonces se le '
                         'pone una version nueva (P-H, 19/09/2026).'),
                'ficheros': {}}


def guarda_registro(R):
    """══ EL REGISTRO SE ESCRIBE DOS VECES (P-H, 19/09/2026) ══

       doc/versiones.json   para este programa
       doc/versiones.js     para la pagina

       « Ca m'ennuie de devoir utiliser le serveur. » Y tiene razon: un
       navegador no lee un fichero local con fetch, pero SI carga un
       script. Es la doctrina del 05/09 — sin JSON, todo funciona sin
       servidor — y se me habia olvidado."""
    os.makedirs(os.path.dirname(REGISTRO), exist_ok=True)
    R['_ultima_pasada'] = sello()
    json.dump(R, open(REGISTRO, 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1, sort_keys=True)

    js = os.path.join(os.path.dirname(REGISTRO), 'versiones.js')
    open(js, 'w', encoding='utf-8').write(
        '/* LAS VERSIONES DE SALUFOLIO\n'
        '   escrito por herramientas/versiones.py el ' + R['_ultima_pasada'] + '\n'
        '\n'
        '   Un .js y no un .json: asi la pagina funciona sin servidor.\n'
        '   No se toca a mano — se rehace en cada pasada. */\n'
        'var SF_VERSIONES = window.SF_VERSIONES = '
        + json.dumps(R, ensure_ascii=False, indent=1, sort_keys=True) + ';\n')


def main():
    poner   = '--poner'   in sys.argv
    iniciar = '--iniciar' in sys.argv

    R = lee_registro()
    F = R['ficheros']
    v = sello()

    nuevos, cambiados, iguales, sin_sitio = [], [], [], []

    for rel in recorre():
        p = os.path.join(RAIZ, rel)
        s = suma(p)
        if s is None:
            continue
        antes = F.get(rel, {})
        if not antes:
            nuevos.append(rel)
        elif antes.get('suma') != s:
            cambiados.append(rel)
        else:
            iguales.append(rel)

    tocar = nuevos + cambiados

    print()
    print('═' * 68)
    print('  LAS VERSIONES DE SALUFOLIO')
    print('  ' + RAIZ)
    print('═' * 68)
    print()
    tot = len(nuevos)+len(cambiados)+len(iguales)
    nm = len([x for x in (nuevos+cambiados+iguales) if es_muda(x)])
    print('  %4d ficheros en total%s' % (tot,
          ('   (%d sonidos e imagenes)' % nm) if nm else ''))
    print('  %4d sin cambios' % len(iguales))
    print('  %4d nuevos' % len(nuevos))
    print('  %4d cambiados' % len(cambiados))
    print()

    if not tocar:
        print('  Nada que hacer: ningun fichero ha cambiado.')
        print()
        return

    if nuevos:
        print('  ── NUEVOS ' + '─'*54)
        for x in nuevos[:40]: print('     ' + x)
        if len(nuevos) > 40: print('     … y %d mas' % (len(nuevos)-40))
        print()
    if cambiados:
        print('  ── CAMBIADOS ' + '─'*51)
        for x in cambiados[:40]:
            print('     %-46s %s → %s' % (x, F[x].get('version','?')[:10], v[:10]))
        if len(cambiados) > 40: print('     … y %d mas' % (len(cambiados)-40))
        print()

    if not (poner or iniciar):
        print('  ── Esto es lo que HARIA. Para hacerlo:')
        print('       python3 herramientas/versiones.py --poner')
        print()
        return

    puestos, mudas = 0, 0
    for rel in tocar:
        p = os.path.join(RAIZ, rel)
        r = pon_version(p, v)
        if r == 'sin_sitio':
            sin_sitio.append(rel)
        elif r == 'puesto':
            puestos += 1
        elif r == 'muda':
            mudas += 1
        F[rel] = {'version': v, 'suma': suma(p)}
        if r == 'muda':
            F[rel]['muda'] = True

    # los que no han cambiado guardan su suma, por si faltaba
    for rel in iguales:
        if rel not in F:
            F[rel] = {'version': v, 'suma': suma(os.path.join(RAIZ, rel))}

    guarda_registro(R)

    print('  ── HECHO ' + '─'*55)
    print('     %d ficheros con su version %s' % (puestos, v))
    if mudas:
        print('     %d sonidos e imagenes — su version va en el registro,'
              % mudas)
        print('       no dentro: son binarios y no se les puede escribir')
    if sin_sitio:
        print()
        print('     %d no llevan donde ponerla — no se han tocado:' % len(sin_sitio))
        for x in sin_sitio[:20]: print('        ' + x)
        if len(sin_sitio) > 20: print('        … y %d mas' % (len(sin_sitio)-20))
        print()
        print('     Para que la lleven, basta una linea en su cabecera:')
        print('        /* Version 2026.09.19-19:44:13 */')
    print()
    print('  El registro esta en  doc/versiones.json')
    print('  y en                 doc/versiones.js  — para la pagina')
    print()
    print('  Para verlo:  herramientas/versiones.html')
    print()


if __name__ == '__main__':
    main()
