#!/usr/bin/env python3
"""
   pacientes.py — refait pacientes.js d'après ce qui est dans le dossier.

   Un navigateur ne peut pas lister un répertoire sans serveur : on le lui
   dit. Ce script parcourt le dossier où il se trouve (~/Salufolio/pacientes/),
   trouve les dossiers de patients et leurs fichiers, et réécrit pacientes.js.

   Règle de rangement (la même que le lanceur) :
       pacientes/<matricule>/<matricule>.sf
   Un répertoire par matricule. Les copies datées vivent dans historial/
   et ne sont pas la liste : seul le dossier du patient est parcouru.

   À lancer quand un patient ou un expediente a été ajouté sur le disque :
       python3 ~/Salufolio/pacientes/pacientes.py
"""
import os, json, re
from datetime import datetime, timezone, timedelta

AQUI = os.path.dirname(os.path.abspath(__file__))
VER  = datetime.now(timezone(timedelta(hours=2))).strftime('%Y.%m.%d-%H:%M:%S')
# dossiers du rangement, pas des patients
SALTAR = {'archivos', 'archivo', 'historial'}
RE_MAT = re.compile(r'^[A-Za-z]{2,4}\d{3,6}$')

def nombreDe(mat, antes):
    """on garde le nom qu'on connaissait déjà — le script ne l'invente pas"""
    for p in antes:
        if p.get('matricula') == mat:
            return p.get('nombre', ''), p.get('sip', '')
    return '', ''


def nombreDelBloque(d):
    """etiqueta, sinon nom + apellidos. Une matricule n'est pas un nom."""
    p = d.get('paciente') or {}
    nom = (p.get('etiqueta') or d.get('patient_name') or '').strip()
    if not nom:
        partes = [p.get('nombre') or '', p.get('apellidos') or '']
        nom = ' '.join(x.strip() for x in partes if x and x.strip())
    if not nom:
        nom = (d.get('patient_label') or '').strip()
    if nom and RE_MAT.fullmatch(nom):
        nom = ''
    sip = str(p.get('sip') or d.get('sip') or '').strip()
    demo = (d.get('data_type') == 'demo')
    return nom, sip, demo


def leeDelExpediente(ruta, fich):
    """Nom et SIP dans le .sf.

    On préfère le fichier en vigueur <matricule>.sf, puis les autres,
    du plus récent au plus ancien. Quatre essais suffisent."""
    for x in fich[:4]:
        try:
            with open(os.path.join(ruta, x), encoding='utf-8') as h:
                d = json.load(h)
        except Exception:
            continue
        nom, sip, demo = nombreDelBloque(d)
        if nom or sip or demo:
            return nom, sip, demo
    return '', '', False


def ordena(mat, fich):
    """le fichier en vigueur d'abord, puis les noms datés, plus récent en tête"""
    vigente = []
    otros = []
    for x in fich:
        base = os.path.splitext(x)[0]
        (vigente if base.lower() == mat.lower() else otros).append(x)
    otros.sort(reverse=True)
    return vigente + otros


# ce que le fichier disait déjà, pour ne pas perdre les noms
antes = []
f = os.path.join(AQUI, 'pacientes.js')
if os.path.exists(f):
    s = open(f, encoding='utf-8').read()
    try:
        antes = json.loads(s[s.index('{'):s.rindex(';')]).get('pacientes', [])
    except Exception:
        pass

pacientes = []
for d in sorted(os.listdir(AQUI)):
    ruta = os.path.join(AQUI, d)
    if not os.path.isdir(ruta) or d.startswith('.'):
        continue
    if d.lower() in SALTAR:
        continue
    fich = [x for x in os.listdir(ruta)
            if re.search(r'\.(mf|sf)$', x, re.I)
            and not x.endswith('~') and '(copia)' not in x]
    fich = ordena(d, fich)
    nom, sip = nombreDe(d, antes)
    n2, s2, demo = leeDelExpediente(ruta, fich)
    if not nom:
        nom = n2
    if not sip:
        sip = s2
    # un nom écrit à la main l'emporte ; la marque démo vient du dossier
    antes_p = next((p for p in antes if p.get('matricula') == d), {})
    if 'demo' in antes_p and antes_p.get('demo'):
        demo = True
    pacientes.append({
        'matricula': d,
        'nombre': nom,
        'sip': sip,
        'demo': demo or d.upper().startswith('DEMO'),
        'ficheros': fich,
    })

# depuis casa/index.html le dossier est ../pacientes/ (le script vit dedans)
T = {
    '_doctrina': ('Los pacientes y sus expedientes. Refecho por pacientes.py.\n'
                  'Un navegador no puede listar una carpeta sin servidor: se lo decimos.\n'
                  'Un directorio por matrícula: pacientes/<matricula>/<matricula>.sf'),
    'version': VER,
    'carpeta': '../pacientes/',
    'pacientes': pacientes,
}
js = ("/* ══════════════════════════════════════════════════════════════════════\n"
      "   LOS PACIENTES — refecho por pacientes.py el " + VER + "\n"
      "   No editar a mano el listado de ficheros: se rehace solo.\n"
      "   Los nombres si se pueden escribir aqui — el script los conserva.\n"
      "   ══════════════════════════════════════════════════════════════════════ */\n"
      "var SF_PACIENTES = window.SF_PACIENTES = "
      + json.dumps(T, ensure_ascii=False, indent=1) + ";\n")
open(f, 'w', encoding='utf-8').write(js)

print(f"{len(pacientes)} pacientes:")
for p in pacientes:
    print(f"   {p['matricula']:<12} {len(p['ficheros']):>3} expediente(s)"
          + (f"  · {p['nombre']}" if p['nombre'] else "  · (sin nombre)")
          + (f"  · SIP {p['sip']}" if p['sip'] else "")
          + ("  · demo" if p['demo'] else ""))
