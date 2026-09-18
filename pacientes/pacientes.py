#!/usr/bin/env python3
"""
   pacientes.py — refait pacientes.js d'après ce qui est dans le dossier.

   Un navigateur ne peut pas lister un répertoire sans serveur : on le lui
   dit. Ce script parcourt ~/Salufolio/pacientes/, trouve les dossiers de
   patients et leurs fichiers, et réécrit pacientes.js.

   À lancer quand vous ajoutez un patient ou un expediente :
       python3 ~/Salufolio/pacientes/pacientes.py
"""
import os, json, re
from datetime import datetime, timezone, timedelta

AQUI = os.path.dirname(os.path.abspath(__file__))
VER  = datetime.now(timezone(timedelta(hours=2))).strftime('%Y.%m.%d-%H:%M:%S')

def nombreDe(mat, antes):
    """on garde le nom qu'on connaissait déjà — le script ne l'invente pas"""
    for p in antes:
        if p.get('matricula')==mat: return p.get('nombre',''), p.get('sip','')
    return '', ''


def leeDelExpediente(ruta, fich):
    """Va chercher le nom et le SIP dans le .mf le plus récent.

    « Comprend pas pourquoi le SIP n'est pas associé au paciente
      conocido. »                                    — P-H, 15/09/2026

    Il avait raison : la donnée est là, dans le dossier. Chaque .mf porte
    son paciente.sip et son paciente.etiqueta. Le script se contentait de
    garder ce qu'on avait écrit à la main — il n'allait pas le chercher.

    On prend le plus récent qui réponde, et on s'arrête là."""
    for x in fich[:4]:                       # les quatre plus récents suffisent
        try:
            d = json.load(open(os.path.join(ruta, x), encoding='utf-8'))
        except Exception:
            continue
        p = d.get('paciente') or {}
        nom = (p.get('etiqueta') or p.get('nombre') or
               d.get('patient_label') or '').strip()
        sip = str(p.get('sip') or d.get('sip') or '').strip()
        # une matricule n'est pas un nom : on ne la prend pas pour tel
        if nom and re.fullmatch(r'[A-Z]{2,4}\d{3,6}', nom):
            nom = ''
        if nom or sip:
            return nom, sip
    return '', ''


# ce que le fichier disait déjà, pour ne pas perdre les noms
antes=[]
f=os.path.join(AQUI,'pacientes.js')
if os.path.exists(f):
    s=open(f,encoding='utf-8').read()
    try: antes=json.loads(s[s.index('{'):s.rindex(';')]).get('pacientes',[])
    except: pass

pacientes=[]
for d in sorted(os.listdir(AQUI)):
    ruta=os.path.join(AQUI,d)
    if not os.path.isdir(ruta) or d.startswith('.'): continue
    fich=[x for x in os.listdir(ruta)
          if re.search(r'\.(mf|sf)$', x, re.I)   # ya no .json: un diccionario no es un expediente (P-H, 18/09)
          and not x.endswith('~') and '(copia)' not in x]
    fich.sort(reverse=True)          # le plus récent d'abord
    nom, sip = nombreDe(d, antes)
    # ce qui est écrit à la main l'emporte ; le reste, on va le chercher
    if not nom or not sip:
        n2, s2 = leeDelExpediente(ruta, fich)
        if not nom: nom = n2
        if not sip: sip = s2
    pacientes.append({ 'matricula':d, 'nombre':nom, 'sip':sip,
                       'demo': d.upper().startswith('DEMO'),
                       'ficheros':fich })

T={ '_doctrina':('Los pacientes y sus expedientes. Refecho por pacientes.py.\n'
      'Un navegador no puede listar una carpeta sin servidor: se lo decimos.'),
    'version':VER, 'carpeta':'../../pacientes/', 'pacientes':pacientes }
js=("/* ══════════════════════════════════════════════════════════════════════\n"
 "   LOS PACIENTES — refecho por pacientes.py el "+VER+"\n"
 "   No editar a mano el listado de ficheros: se rehace solo.\n"
 "   Los nombres si se pueden escribir aqui — el script los conserva.\n"
 "   ══════════════════════════════════════════════════════════════════════ */\n"
 "var SF_PACIENTES = window.SF_PACIENTES = " + json.dumps(T, ensure_ascii=False, indent=1) + ";\n")
open(f,'w',encoding='utf-8').write(js)

print(f"{len(pacientes)} pacientes:")
for p in pacientes:
    print(f"   {p['matricula']:<12} {len(p['ficheros']):>3} expediente(s)"
          + (f"  · {p['nombre']}" if p['nombre'] else "  · (sin nombre)")
          + (f"  · SIP {p['sip']}" if p['sip'] else ""))
