#!/usr/bin/env python3
# Versión 2026.09.21-22:36:53
# ══════════════════════════════════════════════════════════════════════
#  REGISTRAR LO GRABADO — /Salufolio/herramientas/voces-registra.py
#
#  « Il faudrait associer aux mp3 les textes source. »  — P-H, 18/09
#  « Les deux — tu peux intégrer ça dans la page ? »    — P-H, 21/09
#
#  La pagina voces.html prepara los textos que hay que grabar, en
#  casa/voz/a-grabar/. Una vez grabado un mp3, su texto tiene que quedar
#  A SU LADO, con el mismo nombre:
#
#      casa/voz/ES-abeja.mp3
#      casa/voz/ES-abeja.txt      ← lo que Oscar leyo, ese dia
#
#  Este programa hace ese traslado, y reescribe casa/voz/grabados.js —
#  el registro que la pagina lee (un .js y no un .txt: un navegador no
#  lee ficheros de texto sin servidor, pero si carga un script).
#
#  Y la primera vez, se ocupa de los mp3 ya grabados que no tienen su
#  texto al lado: si la huella del texto de la tabla coincide con la que
#  se guardo al grabar, ese es el texto que se leyo — se escribe.
#
#      python3 herramientas/voces-registra.py
# ══════════════════════════════════════════════════════════════════════

import os, re, json, glob, hashlib, shutil
from datetime import datetime

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CASA = os.path.join(RAIZ, 'casa')

def huella(t):
    return hashlib.sha256(' '.join(str(t or '').split()).encode('utf-8')).hexdigest()[:8]

def lee_tabla():
    s = open(os.path.join(CASA, 'tour.js'), encoding='utf-8').read()
    return json.loads(s[s.index('{'):s.rindex(';')])

def main():
    T = lee_tabla()
    VOZ = os.path.join(CASA, T.get('voz_carpeta', 'voz/'))
    AG  = os.path.join(VOZ, 'a-grabar')
    patron = T.get('voz_nombre', '{lang}-{objeto}.mp3')
    O = T.get('objetos', {})

    movidos, nacidos = [], []

    # ① lo grabado desde a-grabar: el texto pasa al lado de su mp3
    for txt in sorted(glob.glob(os.path.join(AG, '*.txt'))):
        base = os.path.splitext(os.path.basename(txt))[0]
        mp3 = os.path.join(VOZ, base + '.mp3')
        if os.path.exists(mp3):
            shutil.move(txt, os.path.join(VOZ, base + '.txt'))
            movidos.append(base)

    # ② los mp3 de antes, sin su texto: si la huella cuadra, se escribe
    for mp3 in sorted(glob.glob(os.path.join(VOZ, '*.mp3'))):
        base = os.path.splitext(os.path.basename(mp3))[0]
        if os.path.exists(os.path.join(VOZ, base + '.txt')): continue
        m = re.match(r'^([A-Z]{2})-(.+)$', base)
        if not m: continue
        lang, obj = m.group(1).lower(), m.group(2)
        o = O.get(obj)
        if not o: continue
        t = ((o.get('dicho') or o.get('texto')) or {}).get(lang)
        g = (o.get('grabado') or {}).get(lang)
        if t and g and huella(t) == g:
            open(os.path.join(VOZ, base + '.txt'), 'w', encoding='utf-8').write(t + '\n')
            nacidos.append(base)

    # ③ el registro que la pagina lee
    R = {}
    for txt in sorted(glob.glob(os.path.join(VOZ, '*.txt'))):
        base = os.path.splitext(os.path.basename(txt))[0]
        mp3 = os.path.join(VOZ, base + '.mp3')
        if not os.path.exists(mp3): continue
        f = datetime.fromtimestamp(os.path.getmtime(mp3)).strftime('%Y-%m-%d %H:%M')
        R[base] = { 'texto': open(txt, encoding='utf-8').read().strip(), 'fecha': f }
    open(os.path.join(VOZ, 'grabados.js'), 'w', encoding='utf-8').write(
        '/* LO GRABADO — escrito por herramientas/voces-registra.py\n'
        '   el ' + datetime.now().strftime('%Y-%m-%d %H:%M') + '. No se toca a mano. */\n'
        'var SF_GRABADOS = window.SF_GRABADOS = '
        + json.dumps(R, ensure_ascii=False, indent=1, sort_keys=True) + ';\n')

    quedan = sorted(os.path.basename(x) for x in glob.glob(os.path.join(AG, '*.txt')))
    print()
    print('  ' + '═' * 60)
    print('  LO GRABADO')
    print('  ' + '═' * 60)
    print('  %3d textos puestos al lado de su mp3' % len(movidos))
    for b in movidos: print('        ' + b)
    print('  %3d mp3 de antes recuperan su texto' % len(nacidos))
    print('  %3d voces en el registro  (voz/grabados.js)' % len(R))
    if quedan:
        print('  %3d textos esperan su grabacion en voz/a-grabar/' % len(quedan))
    print()

if __name__ == '__main__':
    main()
