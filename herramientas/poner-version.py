#!/usr/bin/env python3
# ══════════════════════════════════════════════════════════════════════
#  PONER LA LÍNEA DE VERSIÓN — /Salufolio/herramientas/poner-version.py
#
#  Un fichero que no lleva dónde escribir su número no puede versionarse.
#  Este programa se lo pone — UNA SOLA VEZ, en su cabecera, según su
#  clase. Después, versiones.py se encarga.
#
#  No toca los que ya la llevan. No toca lo que versiones.py deja fuera:
#  pacientes, archivo, protocolo-entrada, voz.
#
#      python3 herramientas/poner-version.py            ver qué haría
#      python3 herramientas/poner-version.py --poner    hacerlo
# ══════════════════════════════════════════════════════════════════════

import os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
V0   = '2026.01.01-00:00:00'          # el numero de partida

EXT = {'.js', '.html', '.css', '.py', '.md', '.txt'}
FUERA = {'pacientes', 'sources', '.git', 'node_modules', '__pycache__',
         'Descargas', 'respaldo', 'backup', 'voz',
         'archivo', 'archivos', 'viejo', 'antiguo', 'old',
         'protocolo-entrada', 'protocolo-salida', 'entrada', 'salida'}
FUERA_FICH = {'versiones.json', 'pacientes.js', 'package-lock.json'}

TIENE = re.compile(r'Versi[oó]n\s+\d{4}\.\d{2}\.\d{2}-\d{2}:\d{2}:\d{2}'
                   r'|"version"\s*:\s*"[\d.:\-]+"'
                   r"|\bversion\s*:\s*'[\d.:\-]+'")


def recorre():
    for dirp, dirs, fichs in os.walk(RAIZ):
        dirs[:] = [d for d in dirs if d not in FUERA and not d.startswith('.')]
        for f in sorted(fichs):
            if f in FUERA_FICH or f.startswith('.'):
                continue
            if os.path.splitext(f)[1].lower() in EXT:
                yield os.path.join(dirp, f)


def pon(ruta):
    """devuelve: 'ya' · 'puesto' · 'no_se' · 'error' """
    try:
        t = open(ruta, encoding='utf-8').read()
    except Exception:
        return 'error', None
    if TIENE.search(t):
        return 'ya', None

    ext = os.path.splitext(ruta)[1].lower()
    linea = 'Versión ' + V0

    # ── .html : dentro del <head>, como un comentario ──
    if ext == '.html':
        m = re.search(r'(<head[^>]*>)', t, re.I)
        if m:
            n = t[:m.end()] + '\n<!-- ' + linea + ' -->' + t[m.end():]
            return 'puesto', n
        m = re.search(r'(<!DOCTYPE[^>]*>)', t, re.I)
        if m:
            n = t[:m.end()] + '\n<!-- ' + linea + ' -->' + t[m.end():]
            return 'puesto', n
        return 'puesto', '<!-- ' + linea + ' -->\n' + t

    # ── .js .css : en la primera linea, o dentro del comentario que ya hay ──
    if ext in ('.js', '.css'):
        if t.lstrip().startswith('/*'):
            i = t.index('/*')
            j = t.find('\n', i)
            if j > 0:
                return 'puesto', t[:j+1] + '   ' + linea + '\n' + t[j+1:]
        return 'puesto', '/* ' + linea + ' */\n' + t

    # ── .py : tras la linea del interprete, si la hay ──
    if ext == '.py':
        L = t.split('\n')
        i = 0
        if L and L[0].startswith('#!'):
            i = 1
        if i < len(L) and 'coding' in L[i]:
            i += 1
        L.insert(i, '# ' + linea)
        return 'puesto', '\n'.join(L)

    # ── .txt .md : en la primera linea ──
    return 'puesto', linea + '\n' + t


def main():
    hacer = '--poner' in sys.argv
    ya, puestos, err = 0, [], 0

    for p in recorre():
        r, nuevo = pon(p)
        if r == 'ya':
            ya += 1
        elif r == 'error':
            err += 1
        elif r == 'puesto':
            puestos.append((p, nuevo))

    print()
    print('═' * 68)
    print('  PONER LA LÍNEA DE VERSIÓN')
    print('═' * 68)
    print()
    print('  %4d ya la llevan' % ya)
    print('  %4d se la pondría' % len(puestos))
    if err:
        print('  %4d no se han podido leer' % err)
    print()

    if not puestos:
        print('  Nada que hacer.')
        print()
        return

    por_ext = {}
    for p, _ in puestos:
        e = os.path.splitext(p)[1].lower()
        por_ext[e] = por_ext.get(e, 0) + 1
    print('  ── POR CLASE ' + '─'*51)
    for e in sorted(por_ext, key=lambda x: -por_ext[x]):
        print('     %-8s %d' % (e, por_ext[e]))
    print()
    print('  ── LOS PRIMEROS ' + '─'*48)
    for p, _ in puestos[:14]:
        print('     ' + os.path.relpath(p, RAIZ))
    if len(puestos) > 14:
        print('     … y %d mas' % (len(puestos)-14))
    print()

    if not hacer:
        print('  ── Esto es lo que HARIA. Para hacerlo:')
        print('       python3 herramientas/poner-version.py --poner')
        print()
        return

    n = 0
    for p, nuevo in puestos:
        try:
            open(p, 'w', encoding='utf-8').write(nuevo)
            n += 1
        except Exception:
            pass

    print('  ── HECHO ' + '─'*55)
    print('     %d ficheros con su línea « Versión %s »' % (n, V0))
    print()
    print('  Ahora ya se pueden versionar:')
    print('       python3 herramientas/versiones.py --poner')
    print()


if __name__ == '__main__':
    main()
