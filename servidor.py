#!/usr/bin/env python3
"""
╔══════════════════════════════════════════════════════════╗
║  ModularBuilder — Serveur local                        ║
║  « Éviter de faire tout ce que l'ordinateur peut faire » ║
║  Pierre-Henri Giraud × Claude · 2026                   ║
╚══════════════════════════════════════════════════════════╝

Usage :  python3 modular_server.py
         → ouvre automatiquement l'interface dans le navigateur
         → Ctrl+C pour arrêter
"""

import http.server, json, os, subprocess, shutil, re, sys, webbrowser, urllib.parse
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
# Fuseau des livraisons : l'heure qui figure dans les NOMS et les tampons doit
# être celle de Pierre-Henri (Europe/Madrid), pas celle de la machine de build.
TZ_LIVRAISON = ZoneInfo('Europe/Madrid')
def _now(): return datetime.now(TZ_LIVRAISON)

PORT = 7777
SERVER_VERSION = '1.8.5'   # version officielle — lue par maj.sh, affichée au démarrage
START_TIME = None          # posée au démarrage — l'uptime du panel la lit
APAGADO = False            # v1.8.5 — pause LOGIQUE : Detener/Marcha à chaud, jamais os._exit
HOST = '0.0.0.0'   # v1.5.1 : écoute sur TOUTES les interfaces (accès téléphone via Wi-Fi)

# ── Configuration par défaut (Salufolio) ──
CONFIG_FILE = os.path.expanduser('~/.modular_builder.json')
DEFAULT_CONFIG = {
    'project_name': 'Salufolio',
    'work_dir': os.path.expanduser('~/Escritorio/MediFolio/MediFolio_modular'),
    'skeleton': 'skeleton.html',
    'output': 'MediFolio.html',
    'modules_dir': 'modules',
    'github_dir': os.path.expanduser('~/Escritorio/MediFolio_github'),
    'online_url': 'https://caracole.github.io/Salufolio/',
    'browser': 'brave-browser',
    'include_pattern': r'<INCLUDE:(.+?)\s*/>',
}

def load_config():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, 'r') as f:
            return {**DEFAULT_CONFIG, **json.load(f)}
    return dict(DEFAULT_CONFIG)

def save_config(cfg):
    with open(CONFIG_FILE, 'w') as f:
        json.dump(cfg, f, indent=2)

CFG = load_config()

def ok_json(handler, data):
    handler.send_response(200)
    handler.send_header('Content-Type', 'application/json; charset=utf-8')
    handler.send_header('Access-Control-Allow-Origin', '*')
    handler.end_headers()
    handler.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

def err_json(handler, msg, code=400):
    handler.send_response(code)
    handler.send_header('Content-Type', 'application/json; charset=utf-8')
    handler.send_header('Access-Control-Allow-Origin', '*')
    handler.end_headers()
    handler.wfile.write(json.dumps({'error': msg}, ensure_ascii=False).encode('utf-8'))

# ── BUILD ENGINE ──
def do_build():
    """Assemble skeleton + modules → output HTML"""
    cfg = load_config()
    work = cfg['work_dir']
    skel_path = os.path.join(work, cfg['skeleton'])
    out_path = os.path.join(work, cfg['output'])
    pattern = re.compile(cfg['include_pattern'])

    if not os.path.exists(skel_path):
        return {'ok': False, 'error': f'skeleton introuvable: {skel_path}'}

    with open(skel_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    result = []
    inc = 0
    warnings = []
    for line in lines:
        m = pattern.search(line)
        if m:
            nom = m.group(1).strip()
            fp = os.path.join(work, nom)
            if os.path.exists(fp):
                # Marqueurs de frontière : le monolithe devient auto-descriptif,
                # ce qui rend le split (étape 6 du cycle) mécanique et sûr.
                result.append(f'<!-- MB:BEGIN {nom} -->\n')
                with open(fp, 'r', encoding='utf-8') as f2:
                    contenu = f2.read()
                result.append(contenu if contenu.endswith('\n') else contenu + '\n')
                result.append(f'<!-- MB:END {nom} -->\n')
                inc += 1
            else:
                warnings.append(f'Module introuvable: {nom}')
                result.append(line)
        else:
            result.append(line)

    contenu_final = ''.join(result)
    # Tampon de build : '__MB_BUILD__' devient l'heure locale du build, en
    # laissant un commentaire-jeton à côté. Ainsi, même après un Split (qui
    # réécrit les modules avec la valeur tamponnée), le build suivant
    # reconnaît l'emplacement et RE-tamponne : la date ne peut plus mentir,
    # quel que soit le nombre de cycles build→split→build.
    _stamp = _now().strftime('%Y-%m-%d %Hh%M')
    _remp = "'" + _stamp + "' /* __MB_BUILD__ */"
    contenu_final = re.sub(r"'[^']*'\s*/\*\s*__MB_BUILD__\s*\*/", _remp, contenu_final)
    contenu_final = contenu_final.replace("'__MB_BUILD__'", _remp)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(contenu_final)

    return {
        'ok': True,
        'lines': contenu_final.count('\n'),
        'modules': inc,
        'warnings': warnings,
        'output': out_path
    }


# ── SPLIT ENGINE (expansion : monolithe marqué → skeleton + modules) ──
def do_split():
    """Régénère skeleton + modules depuis le monolithe output (marqueurs MB:BEGIN/END).
    C'est l'étape 6 du cycle : après des retouches directes dans l'exécutable,
    on réabsorbe le travail dans le projet. Garantie de point fixe :
    build(split(x)) reproduit x à l'identique."""
    cfg = load_config()
    work = cfg['work_dir']
    out_path = os.path.join(work, cfg['output'])
    if not os.path.exists(out_path):
        return {'ok': False, 'error': f'{cfg["output"]} introuvable. Rien à splitter.'}

    with open(out_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    deb = re.compile(r'<!-- MB:BEGIN (.+?) -->')
    fin = re.compile(r'<!-- MB:END (.+?) -->')
    skeleton, modules = [], {}
    courant, tampon = None, []
    for line in lines:
        m_deb, m_fin = deb.search(line), fin.search(line)
        if m_deb and courant is None:
            courant, tampon = m_deb.group(1).strip(), []
        elif m_fin and courant is not None:
            if m_fin.group(1).strip() != courant:
                return {'ok': False, 'error': f'Marqueurs croisés: BEGIN {courant} / END {m_fin.group(1)}'}
            modules[courant] = ''.join(tampon)
            skeleton.append(f'<INCLUDE:{courant} />\n')
            courant = None
        elif courant is not None:
            tampon.append(line)
        else:
            skeleton.append(line)
    if courant is not None:
        return {'ok': False, 'error': f'MB:BEGIN {courant} sans MB:END — monolithe corrompu, split annulé.'}
    if not modules:
        return {'ok': False, 'error': 'Aucun marqueur MB:BEGIN trouvé. Ce monolithe a été bâti sans marqueurs (version antérieure) : split mécanique impossible.'}

    # Écriture : modules d'abord, skeleton ensuite (rien n'est écrit si erreur plus haut)
    for nom, contenu in modules.items():
        fp = os.path.join(work, nom)
        os.makedirs(os.path.dirname(fp), exist_ok=True)
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(contenu)
    with open(os.path.join(work, cfg['skeleton']), 'w', encoding='utf-8') as f:
        f.writelines(skeleton)
    return {'ok': True, 'modules': len(modules), 'skeleton': cfg['skeleton'],
            'message': f'{len(modules)} modules régénérés + skeleton.'}

# ── PACKAGE ENGINE (zip versionné : fin du bazar des noms) ──
def detect_version(texte):
    """Cherche la version déclarée dans le source assemblé.
    Essaie dans l'ordre : regex configurée, APP_VERSION = '...',
    puis <projet>-<version> littéral (anciennes versions)."""
    cfg = load_config()
    motifs = []
    if cfg.get('version_regex'): motifs.append(cfg['version_regex'])
    motifs += [r"APP_VERSION\s*=\s*['\"]([0-9][0-9.]*)['\"]",
               re.escape(cfg['project_name']) + r'-([0-9][0-9.]*)']
    for motif in motifs:
        m = re.search(motif, texte)
        if m: return m.group(1)
    return None

def do_package():
    """Empaquette skeleton + modules + output dans un zip dont le nom porte
    la version (lue dans le source) et l'horodatage Madrid."""
    cfg = load_config()
    work = cfg['work_dir']
    out_path = os.path.join(work, cfg['output'])
    if not os.path.exists(out_path):
        return {'ok': False, 'error': f'{cfg["output"]} introuvable. Buildez d\'abord.'}
    with open(out_path, 'r', encoding='utf-8') as f:
        version = detect_version(f.read()) or 'SANS-VERSION'
    dt = _now().strftime('%Y-%m-%d_%Hh%M')
    nom_zip = f"{cfg['project_name']}_v{version}_{dt}.zip"
    zip_path = os.path.join(work, nom_zip)
    import zipfile
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
        z.write(out_path, cfg['output'])
        z.write(os.path.join(work, cfg['skeleton']), cfg['skeleton'])
        mdir = os.path.join(work, cfg['modules_dir'])
        for racine, _, fichiers in os.walk(mdir):
            for fich in fichiers:
                fp = os.path.join(racine, fich)
                z.write(fp, os.path.relpath(fp, work))
        # Fichiers compagnons hors modules (ex: prompt-claude.js) déclarés en config
        for comp in cfg.get('companions', []):
            cp = os.path.join(work, comp)
            if os.path.exists(cp):
                z.write(cp, comp)
    return {'ok': True, 'zip': nom_zip, 'version': version,
            'message': f'Empaqueté: {nom_zip}'}

# ── PUBLISH ENGINE ──
def do_publish():
    """Copy output to github dir + git add/commit/push"""
    cfg = load_config()
    work = cfg['work_dir']
    gh = cfg['github_dir']
    out_file = cfg['output']
    out_path = os.path.join(work, out_file)

    if not os.path.exists(out_path):
        return {'ok': False, 'error': f'{out_file} introuvable. Buildez d\'abord.'}
    if not os.path.exists(os.path.join(gh, '.git')):
        return {'ok': False, 'error': f'Repo Git introuvable: {gh}'}

    # Copy output
    shutil.copy2(out_path, os.path.join(gh, out_file))
    copied = [out_file]

    # Copy index.html if exists
    idx = os.path.join(work, 'index.html')
    if os.path.exists(idx):
        shutil.copy2(idx, os.path.join(gh, 'index.html'))
        copied.append('index.html')

    # Git
    os.chdir(gh)
    subprocess.run(['git', 'add'] + copied, capture_output=True)
    diff = subprocess.run(['git', 'diff', '--cached', '--stat'], capture_output=True, text=True)
    if not diff.stdout.strip():
        return {'ok': True, 'message': 'Aucun changement à publier', 'copied': copied}

    dt = _now().strftime('%Y-%m-%d %H:%M')
    subprocess.run(['git', 'commit', '-m', f'{cfg["project_name"]} update {dt}'], capture_output=True)
    push = subprocess.run(['git', 'push'], capture_output=True, text=True)
    if push.returncode != 0:
        return {'ok': False, 'error': f'git push failed: {push.stderr}'}

    return {'ok': True, 'message': 'Publié sur GitHub !', 'copied': copied}

# ── MODULES LIST ──
def list_modules():
    cfg = load_config()
    mdir = os.path.join(cfg['work_dir'], cfg['modules_dir'])
    if not os.path.exists(mdir):
        return {'ok': False, 'error': f'Dossier modules introuvable: {mdir}'}

    modules = []
    for f in sorted(os.listdir(mdir)):
        fp = os.path.join(mdir, f)
        if os.path.isfile(fp):
            stat = os.stat(fp)
            with open(fp, 'r', encoding='utf-8', errors='replace') as fh:
                first_lines = fh.read(500)
            # Detect type
            ext = f.rsplit('.', 1)[-1] if '.' in f else ''
            # Detect version
            ver_m = re.search(r'v[\d.]+', first_lines)
            modules.append({
                'name': f,
                'size': stat.st_size,
                'modified': datetime.fromtimestamp(stat.st_mtime).strftime('%Y-%m-%d %H:%M'),
                'type': ext,
                'version': ver_m.group(0) if ver_m else '',
                'lines': first_lines.count('\n') + (stat.st_size // 40),  # approx
            })

    return {'ok': True, 'modules': modules, 'count': len(modules)}

# ── READ / WRITE MODULE ──
def read_module(name):
    cfg = load_config()
    fp = os.path.join(cfg['work_dir'], cfg['modules_dir'], name)
    if not os.path.exists(fp):
        return {'ok': False, 'error': f'Module introuvable: {name}'}
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    return {'ok': True, 'name': name, 'content': content}

def write_module(name, content):
    cfg = load_config()
    fp = os.path.join(cfg['work_dir'], cfg['modules_dir'], name)
    # Backup
    if os.path.exists(fp):
        bak = fp + '.bak'
        shutil.copy2(fp, bak)
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    return {'ok': True, 'name': name, 'size': len(content)}

def delete_module(name):
    cfg = load_config()
    fp = os.path.join(cfg['work_dir'], cfg['modules_dir'], name)
    if not os.path.exists(fp):
        return {'ok': False, 'error': f'Module introuvable: {name}'}
    os.remove(fp)
    return {'ok': True, 'name': name}

# ── SKELETON ──
def read_skeleton():
    cfg = load_config()
    fp = os.path.join(cfg['work_dir'], cfg['skeleton'])
    if not os.path.exists(fp):
        return {'ok': False, 'error': 'skeleton introuvable'}
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    return {'ok': True, 'content': content}

def write_skeleton(content):
    cfg = load_config()
    fp = os.path.join(cfg['work_dir'], cfg['skeleton'])
    if os.path.exists(fp):
        shutil.copy2(fp, fp + '.bak')
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    return {'ok': True}

# ── OPEN IN BROWSER ──
def do_open_browser():
    cfg = load_config()
    out_path = os.path.join(cfg['work_dir'], cfg['output'])
    if not os.path.exists(out_path):
        return {'ok': False, 'error': 'Fichier output introuvable. Buildez d\'abord.'}
    url = 'file://' + os.path.abspath(out_path)
    try:
        subprocess.Popen([cfg['browser'], url], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception:
        webbrowser.open(url)
    return {'ok': True, 'url': url}

# ── APPLY PATCH ZIP ──
def do_apply_patch(zip_path):
    cfg = load_config()
    mdir = os.path.join(cfg['work_dir'], cfg['modules_dir'])
    if not os.path.exists(zip_path):
        return {'ok': False, 'error': f'Zip introuvable: {zip_path}'}
    result = subprocess.run(['unzip', '-o', zip_path, '-d', mdir], capture_output=True, text=True)
    if result.returncode != 0:
        return {'ok': False, 'error': result.stderr}
    return {'ok': True, 'message': f'Patch appliqué dans {mdir}'}

# ── RUN SHELL ──
def do_shell(cmd):
    cfg = load_config()
    try:
        r = subprocess.run(cmd, shell=True, cwd=cfg['work_dir'],
                          capture_output=True, text=True, timeout=30)
        return {'ok': True, 'stdout': r.stdout, 'stderr': r.stderr, 'code': r.returncode}
    except Exception as e:
        return {'ok': False, 'error': str(e)}


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path

        if APAGADO and path not in ('/panel', '/api/estado'):
            err_json(self, 'Servidor en pausa — pulse Marcha en el panel', 503); return

        if path == '/panel':
            # ═══ EL PANEL (v1.8.0) — panel.sh sale del terminal y entra al navegador ═══
            # Doctrine P-H 27/07 : « l'UI d'arrêt/démarrage » vit ici, plus dans zenity.
            html = """<!DOCTYPE html><html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Salufolio &mdash; Panel</title><style>
:root{--azul:#4a8fe8;--verde:#1e7a46;--rojo:#c0392b;--tinta:#0d3b5e;--fondo:#eef2f6}
body{font-family:system-ui,sans-serif;background:var(--fondo);margin:0;padding:18px;display:flex;justify-content:center}
.carta{background:#fff;border-radius:16px;box-shadow:0 4px 18px rgba(13,59,94,.12);max-width:520px;width:100%;padding:24px 28px;position:relative}
h1{font-family:Georgia,serif;color:var(--tinta);font-size:24px;margin:0 0 2px}
.sub{color:#6b7c8c;font-size:14px;margin:0}
.idiomas{position:absolute;top:16px;right:22px}
.idiomas button{background:none;border:1px solid #dfe6ec;border-radius:8px;font-size:18px;padding:3px 7px;margin-left:5px;cursor:pointer}
.idiomas button.on{border-color:var(--azul);background:#eaf2fd}
.cab{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:0 0 12px}
.escudo{width:80px;height:80px;flex:none;margin-top:26px}
.fila{display:flex;justify-content:space-between;gap:14px;padding:9px 0;border-bottom:1px solid #eef2f6;font-size:15px}
.fila b{color:var(--tinta);white-space:nowrap} .fila span{color:#3a4a58;text-align:right;word-break:break-word}
.punto{display:inline-block;width:11px;height:11px;border-radius:50%;background:var(--verde);margin-right:7px}
.punto.off{background:var(--rojo)}
.botones{display:flex;gap:12px;margin-top:20px}
button.g{flex:1;padding:12px 0;border:0;border-radius:12px;font-size:16px;cursor:pointer;font-weight:600;color:#fff}
.b-rei{background:#e8a13a}.b-stop{background:var(--rojo)}.b-go{background:var(--verde)}
.diario{margin-top:16px;font-size:14px}.diario summary{cursor:pointer;color:var(--tinta);font-weight:600}
.diario pre{background:#0d1b26;color:#9fd3a8;border-radius:10px;padding:12px;font-size:11.5px;max-height:220px;overflow:auto;white-space:pre-wrap;word-break:break-all}
.enlaces{margin-top:14px;font-size:14px;text-align:center}.enlaces a{color:var(--azul);margin:0 8px}
#velo{position:fixed;inset:0;background:rgba(13,27,38,.45);display:none;align-items:center;justify-content:center;z-index:9}
.dlg{background:#fff;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.25);max-width:340px;width:88%;padding:22px 24px;text-align:center}
.dlg p{color:var(--tinta);font-size:16px;margin:0 0 18px}
.dlg .db{display:flex;gap:10px}.dlg button{flex:1;padding:11px 0;border:0;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer}
.d-si{background:var(--rojo);color:#fff}.d-no{background:#e7ecf1;color:var(--tinta)}
</style></head><body><div class="carta">
<div class="idiomas"><button id="b-es" onclick="idioma('es')">&#127466;&#127480;</button><button id="b-fr" onclick="idioma('fr')">&#127467;&#127479;</button></div>
<div class="cab"><div><h1>&#128225; <span data-t="titulo"></span></h1><p class="sub" data-t="sub"></p></div>
<svg class="escudo" viewBox="0 0 240 240"><polygon points="224,120 172,210 68,210 16,120 68,30 172,30" fill="none" stroke="#3dbf7f" stroke-width="10" stroke-linejoin="round"/><g transform="translate(30,50) scale(0.75)"><line x1="120" y1="178" x2="4" y2="124" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="24" y2="94" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="51" y2="70" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="84" y2="55" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="120" y2="50" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="156" y2="55" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="189" y2="70" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="216" y2="94" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><line x1="120" y1="178" x2="236" y2="124" stroke="#e8a13c" stroke-width="9" stroke-linecap="round"/><path d="M4,124 Q2,101 24,94 Q28,71 51,70 Q62,50 84,55 Q100,39 120,50 Q140,39 156,55 Q178,50 189,70 Q212,71 216,94 Q238,101 236,124" fill="none" stroke="#e8a13c" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/><path d="M100,178 h40 l-7,16 h-26 z" fill="#e8a13c"/></g></svg></div>
<div id="filas"></div>
<div class="botones"><button class="g b-rei" id="brei" onclick="reiniciar()">&#10227; <span data-t="reiniciar"></span></button>
<button class="g b-stop" id="broja" onclick="accionRoja()"></button></div>
<details class="diario" ontoggle="if(this.open)diario()"><summary>&#128220; <span data-t="diario"></span><span id="dhora"></span></summary><pre id="diario"></pre></details>
<p class="enlaces"><a href="/protocolo" data-t="protocolo"></a><a href="/protocolo/instalar" data-t="instalar"></a></p>
</div>
<div id="velo"><div class="dlg"><p id="dtxt"></p><div class="db" id="dbtns"></div></div></div>
<script>
/* la table des langues du panel */
const IDIOMAS={
 es:{titulo:'Panel del servidor',sub:'Salufolio &mdash; el puente de la casa',estado:'Estado',marcha_desde:'en marcha desde ',
     detenido:'en pausa',sin_respuesta:'sin respuesta \u2014 v\u00e9alo con panel.sh',servidor:'Servidor',direccion:'Direcci&oacute;n',app:'App servida',recibidos:'Paquetes recibidos',
     ultimo:'&uacute;ltimo: ',copias:'Copias de seguridad',reiniciar:'Reiniciar',detener:'\u23FB Detener',marcha:'\u25B6 Marcha',
     conf_stop:'\u00bfDetener el servidor? El tel\u00e9fono perder\u00e1 la antena hasta relanzarlo.',
     conf_rei:'\u00bfReiniciar el servidor?',
     apagado_msg:'El servidor est\u00e1 apagado. Una p\u00e1gina no puede arrancarlo: rel\u00e1ncelo con panel.sh.',
     diario:'Diario del servidor',protocolo:'Protocolo m&oacute;vil',instalar:'Instalar (copia configurada)',si:'S\u00ed',no:'No',cerrar:'Cerrar'},
 fr:{titulo:'Panneau du serveur',sub:'Salufolio &mdash; le pont de la maison',estado:'&Eacute;tat',marcha_desde:'en marche depuis ',
     detenido:'en pause',sin_respuesta:'injoignable \u2014 v\u00e9rifiez avec panel.sh',servidor:'Serveur',direccion:'Adresse',app:'App servie',recibidos:'Paquets re&ccedil;us',
     ultimo:'dernier : ',copias:'Copies de sauvegarde',reiniciar:'Red&eacute;marrer',detener:'\u23FB Arr\u00eater',marcha:'\u25B6 Marche',
     conf_stop:'Arr\u00eater le serveur ? Le t\u00e9l\u00e9phone perdra l\u2019antenne jusqu\u2019\u00e0 la relance.',
     conf_rei:'Red\u00e9marrer le serveur ?',
     apagado_msg:'Le serveur est arr\u00eat\u00e9. Une page ne peut pas le d\u00e9marrer : relancez-le avec panel.sh.',
     diario:'Journal du serveur',protocolo:'Protocole mobile',instalar:'Installer (copie configur&eacute;e)',si:'Oui',no:'Non',cerrar:'Fermer'}};
let lang=localStorage.getItem('panel_lang')||'es', vivo=false, comunicando=false;
function idioma(l){lang=l;localStorage.setItem('panel_lang',l);aplica();pinta();}
function t(k){return IDIOMAS[lang][k];}
function aplica(){document.querySelectorAll('[data-t]').forEach(e=>e.innerHTML=t(e.dataset.t));
 document.getElementById('b-es').className=(lang=='es')?'on':'';document.getElementById('b-fr').className=(lang=='fr')?'on':'';
 pintaBoton();}
function pintaBoton(){const b=document.getElementById('broja');
 b.innerHTML=vivo?t('detener'):t('marcha'); b.className='g '+(vivo?'b-stop':'b-go');
 document.getElementById('brei').style.display=comunicando?'':'none';}
/* popups maison */
function dlg(txt,botones){document.getElementById('dtxt').innerHTML=txt;
 const db=document.getElementById('dbtns');db.innerHTML='';
 botones.forEach(function(b){const e=document.createElement('button');e.className=b[2];e.innerHTML=b[0];
  e.onclick=function(){document.getElementById('velo').style.display='none';if(b[1])b[1]();};db.appendChild(e);});
 document.getElementById('velo').style.display='flex';}
function confirmar(txt,cb){dlg(txt,[[t('no'),null,'d-no'],[t('si'),cb,'d-si']]);}
function aviso(txt){dlg(txt,[[t('cerrar'),null,'d-no']]);}
function fila(k,v){return '<div class="fila"><b>'+k+'</b><span>'+v+'</span></div>'}
async function pinta(){try{
  const r=await fetch('/api/estado',{cache:'no-store'}); const e=await r.json();
  comunicando=true; vivo=!e.detenido;
  if(vivo){document.getElementById('filas').innerHTML=
    fila(t('estado'),'<span class="punto"></span>'+t('marcha_desde')+e.inicio)+
    fila(t('servidor'),'v'+e.version)+fila(t('direccion'),e.direccion)+
    fila(t('app'),e.app||'&mdash;')+
    fila(t('recibidos'),e.recibidos+(e.ultimo?' &middot; '+t('ultimo')+e.ultimo:''))+
    fila(t('copias'),e.respaldos);
  }else{document.getElementById('filas').innerHTML=
    fila(t('estado'),'<span class="punto off"></span>'+t('detenido'))+
    fila(t('servidor'),'v'+e.version);}
}catch(x){comunicando=false; vivo=false;
  document.getElementById('filas').innerHTML=
    fila(t('estado'),'<span class="punto off"></span>'+t('sin_respuesta'));}
 pintaBoton();}
async function reiniciar(){confirmar(t('conf_rei'),async function(){
  try{await fetch('/api/reiniciar',{method:'POST'});}catch(x){}
  setTimeout(pinta,1600); setTimeout(function(){if(document.querySelector('.diario').open)diario();},1800);});}
function accionRoja(){
 if(vivo){confirmar(t('conf_stop'),async function(){
   try{await fetch('/api/stop',{method:'POST'});}catch(x){}
   setTimeout(pinta,300);});}
 else if(comunicando){
   fetch('/api/start',{method:'POST'}).then(function(){setTimeout(pinta,300);}).catch(function(){});
 }else{pinta().then(function(){if(!comunicando)aviso(t('apagado_msg'));});}}
async function diario(){try{
  const r=await fetch('/api/diario',{cache:'no-store'}); const d=await r.json();
  document.getElementById('diario').textContent=d.lineas.join('\\n')||'\u2014';
  const h=new Date(); document.getElementById('dhora').textContent=' \u00b7 '+
    ('0'+h.getHours()).slice(-2)+':'+('0'+h.getMinutes()).slice(-2)+':'+('0'+h.getSeconds()).slice(-2);
  const p=document.getElementById('diario'); p.scrollTop=p.scrollHeight;
}catch(x){}}
aplica(); pinta(); setInterval(function(){pinta(); if(document.querySelector('.diario').open) diario();},5000);
</script></body></html>"""
            data = html.encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return

        if path == '/api/diario':
            # ═══ v1.8.3 — le journal que zenity offrait, rendu à la carte ═══
            lg = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'servidor.log')
            lineas = []
            if os.path.exists(lg):
                try:
                    with open(lg, encoding='utf-8', errors='replace') as f:
                        lineas = f.readlines()[-40:]
                except Exception:
                    lineas = ['(diario ilegible)']
            ok_json(self, {'lineas': [l.rstrip() for l in lineas]})
            return

        if path == '/api/estado':
            base = os.path.dirname(os.path.abspath(__file__))
            import socket as _s
            try:
                _sk = _s.socket(_s.AF_INET, _s.SOCK_DGRAM); _sk.connect(('8.8.8.8', 80))
                _ip = _sk.getsockname()[0]; _sk.close()
            except Exception:
                _ip = '127.0.0.1'
            ent = os.path.join(base, 'protocolo-entrada')
            recibidos, ultimo = 0, ''
            if os.path.isdir(ent):
                fs = sorted((f for f in os.listdir(ent) if f.endswith('.json')), reverse=True)
                recibidos = len(fs); ultimo = fs[0] if fs else ''
            resp = os.path.join(base, 'respaldos')
            n_resp = len([f for f in os.listdir(resp) if f.endswith('.mf')]) if os.path.isdir(resp) else 0
            app_v = ''
            ap = os.path.join(base, 'protocolo', 'app.html')
            if os.path.exists(ap):
                try:
                    with open(ap, encoding='utf-8') as f:
                        m = re.search(r"MFP_VERSION\s*=\s*'([^']+)'", f.read())
                        app_v = ('v' + m.group(1)) if m else ''
                except Exception:
                    pass
            ok_json(self, {'version': SERVER_VERSION, 'direccion': f'http://{_ip}:{PORT}',
                           'inicio': START_TIME or '?', 'app': app_v, 'detenido': APAGADO,
                           'recibidos': recibidos, 'ultimo': ultimo, 'respaldos': n_resp})
            return

        path = self.path.split('?')[0]
        params = dict(urllib.parse.parse_qsl(urllib.parse.urlparse(self.path).query))

        if path == '/':
            # Serve the UI
            ui_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'modular_ui.html')
            if not os.path.exists(ui_path):
                # ne pas tenter le diable : sans UI ModularBuilder, la racine mène au panel
                self.send_response(302); self.send_header('Location', '/panel'); self.end_headers(); return
            if os.path.exists(ui_path):
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(ui_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                err_json(self, 'modular_ui.html introuvable', 404)
            return

        if path == '/protocolo':
            # v1.5 : sert l'application Protocolo au téléphone (même Wi-Fi).
            # Le fichier app.html vit dans le dossier 'protocolo' à côté du serveur.
            pr = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'protocolo', 'app.html')
            if os.path.exists(pr):
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(pr, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                err_json(self, "protocolo/app.html introuvable — déposez l'app dans le dossier 'protocolo'", 404)
            return

        if path == '/protocolo/instalar':
            # Télécharge l'app avec l'adresse du serveur INJECTÉE (P-H 16/07) :
            # l'app locale naît configurée — hors-ligne toujours, 📡 quand PC allumé.
            ap = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'protocolo', 'app.html')
            if not os.path.exists(ap):
                err_json(self, 'app.html introuvable', 404); return
            import socket as _s
            try:
                _sk = _s.socket(_s.AF_INET, _s.SOCK_DGRAM); _sk.connect(('8.8.8.8', 80))
                _ip = _sk.getsockname()[0]; _sk.close()
            except Exception:
                _ip = '127.0.0.1'
            with open(ap, encoding='utf-8') as f:
                contenu = f.read().replace("const MFP_PC_DEF = '';",
                    f"const MFP_PC_DEF = 'http://{_ip}:{PORT}';", 1)
            data = contenu.encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Disposition', 'attachment; filename="MediFolio_Protocolo_local.html"')
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(data)
            return

        if path == '/api/respaldos':
            # Les copies automatiques du .mf : la mémoire de sécurité
            d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'respaldos')
            os.makedirs(d, exist_ok=True)
            lst = []
            for f in sorted(os.listdir(d), reverse=True):
                if f.endswith('.mf'):
                    p = os.path.join(d, f)
                    lst.append({'nombre': f, 'bytes': os.path.getsize(p),
                                'fecha': datetime.fromtimestamp(os.path.getmtime(p)).strftime('%Y-%m-%d %H:%M:%S')})
            ok_json(self, {'carpeta': d, 'copias': lst})
            return

        if path == '/api/pdf/carpetas':
            cf = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pdf_carpetas.json')
            if os.path.exists(cf):
                with open(cf, encoding='utf-8') as f: ok_json(self, json.load(f))
            else:
                ok_json(self, {'carpetas': []})
            return

        if path.startswith('/api/pdf'):
            # Sert un PDF par son NOM, cherché récursivement dans les carpetas
            # déclarées (idée P-H 16/07 : chaque pdf a son répertoire — le
            # serveur les trouve tous). Sécurité : nom exact, roots déclarés.
            qs = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            nom = os.path.basename((qs.get('n') or [''])[0])
            if not nom:
                err_json(self, 'Falta n=nombre.pdf', 400); return
            base = os.path.dirname(os.path.abspath(__file__))
            cf = os.path.join(base, 'pdf_carpetas.json')
            carpetas = [base]
            if os.path.exists(cf):
                try:
                    with open(cf, encoding='utf-8') as f:
                        carpetas += [os.path.expanduser(c) for c in json.load(f).get('carpetas', [])]
                except Exception:
                    pass
            trouve = None
            for racine in carpetas:
                if not os.path.isdir(racine):
                    continue
                for dossier, dirs, fichiers in os.walk(racine):
                    dirs[:] = [x for x in dirs if not x.startswith('.')][:60]
                    if nom in fichiers:
                        trouve = os.path.join(dossier, nom); break
                if trouve:
                    break
            if not trouve:
                err_json(self, f'{nom} no encontrado en las carpetas declaradas', 404); return
            with open(trouve, 'rb') as f:
                data = f.read()
            self.send_response(200)
            self.send_header('Content-Type', 'application/pdf')
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(data)
            return

        if path == '/api/paciente':
            pf = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'paciente.json')
            if os.path.exists(pf):
                with open(pf, encoding='utf-8') as f: ok_json(self, json.load(f))
            else:
                ok_json(self, {})
            return



        # ═══ IMPORT D'UN PATIENT VERS LE PROTOCOLO (P-H, 01/08) ═══
        # Ne rend QUE CE QUI EST PRESCRIT : identité et pauta active.
        # Rien d'observé — le téléphone repart vierge de journal.
        # Source : la dernière sauvegarde .mf de respaldos/. Sa date est
        # renvoyée, pour que le téléphone puisse la dire.
        if path == '/api/protocolo/pacientes':
            import glob as _glob
            _d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'respaldos')
            _vistos = {}
            for _ruta in sorted(_glob.glob(os.path.join(_d, '*.mf'))):
                _clave = os.path.basename(_ruta).split('_')[0]
                _vistos[_clave] = _ruta          # le tri laisse la plus récente
            _salida = []
            for _clave, _ruta in sorted(_vistos.items()):
                try:
                    with open(_ruta, encoding='utf-8') as _f:
                        _dd = json.load(_f)
                    _b = os.path.basename(_ruta)
                    _partes = _b[:-3].split('_')
                    _salida.append({
                        'clave': _clave,
                        'nombre': _dd.get('patient_label') or _clave,
                        'sip': _dd.get('sip') or '',
                        'archivo': _b,
                        'fecha': _partes[1] if len(_partes) > 1 else '',
                        'hora': _partes[2].replace('-', ':') if len(_partes) > 2 else '',
                        'medicamentos': len([x for x in (_dd.get('medicaments') or [])
                                             if x.get('statut') in ('en_cours', 'a_demanda', 'nouveau')])
                    })
                except Exception:
                    pass
            ok_json(self, {'pacientes': _salida})
            return
        if path.startswith('/api/protocolo/paciente'):
            import glob as _glob
            _qs = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            _clave = os.path.basename((_qs.get('k') or [''])[0])   # anti-traversee
            if not _clave:
                err_json(self, 'Falta la clave del paciente', 400); return
            _d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'respaldos')
            _archivos = sorted(_glob.glob(os.path.join(_d, _clave + '_*.mf')))
            if not _archivos:
                err_json(self, 'No hay copia de ese paciente', 404); return
            _ruta = _archivos[-1]
            try:
                with open(_ruta, encoding='utf-8') as _f:
                    _dd = json.load(_f)
            except Exception as _e:
                err_json(self, 'Copia ilegible: %s' % _e, 500); return
            # statut fait foi : terminado et abandonne n'entrent jamais ;
            # a_demanda porte son moment, les autres non.
            # DÉDOUBLONNAGE : chaque renouvellement crée une ligne, seule la
            # plus récente compte. On garde donc un seul exemplaire par nom,
            # le plus récent — et l'on trie du plus récent au plus ancien.
            _porNombre = {}
            for _m in (_dd.get('medicaments') or []):
                if _m.get('statut') not in ('en_cours', 'a_demanda', 'nouveau'):
                    continue
                _n = (_m.get('nom') or '').strip()
                if not _n:
                    continue
                _c = _n.lower()
                _f = _m.get('date') or ''
                if _c not in _porNombre or _f > (_porNombre[_c].get('date') or ''):
                    _porNombre[_c] = _m
            _meds = []
            for _m in sorted(_porNombre.values(),
                             key=lambda x: (x.get('date') or ''), reverse=True):
                _meds.append({
                    'nombre': _m.get('nom') or '',
                    'dosis': _m.get('dose') or '',
                    'frecuencia': _m.get('frequence') or '',
                    'statut': _m.get('statut') or '',
                    'desde': _m.get('date') or ''
                })
            _b = os.path.basename(_ruta)
            _partes = _b[:-3].split('_')
            ok_json(self, {
                'paciente': {'nombre': _dd.get('patient_label') or _clave,
                             'sip': _dd.get('sip') or '', 'clave': _clave},
                'medicamentos': _meds,
                'copia': {'archivo': _b,
                          'fecha': _partes[1] if len(_partes) > 1 else '',
                          'hora': _partes[2].replace('-', ':') if len(_partes) > 2 else ''}
            })
            return
        if path == '/api/protocolo/lista':
            d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'protocolo-entrada')
            fichiers = sorted(os.listdir(d), reverse=True) if os.path.isdir(d) else []
            ok_json(self, {'archivos': [x for x in fichiers if x.endswith('.json')][:30]})
            return

        if path.startswith('/api/protocolo/archivo'):
            qs = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            nom = os.path.basename((qs.get('n') or [''])[0])   # anti-traversée
            d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'protocolo-entrada')
            chemin = os.path.join(d, nom)
            if not nom or not os.path.exists(chemin):
                err_json(self, 'Archivo no encontrado', 404); return
            with open(chemin, encoding='utf-8') as f:
                ok_json(self, {'archivo': nom, 'contenido': json.load(f)})
            return

        if path == '/api/protocolo/ultimo':
            # le dernier fichier reçu du téléphone, servi à Salufolio pour import direct
            d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'protocolo-entrada')
            try:
                fichiers = sorted(os.listdir(d)) if os.path.isdir(d) else []
                fichiers = [x for x in fichiers if x.endswith('.json')]
                if not fichiers:
                    err_json(self, 'Nada recibido todavía en protocolo-entrada/', 404); return
                nom = fichiers[-1]
                with open(os.path.join(d, nom), encoding='utf-8') as f:
                    ok_json(self, {'archivo': nom, 'contenido': json.load(f)})
            except Exception as e:
                err_json(self, f'Error: {e}', 500)
            return

        if path == '/api/ip':
            # v1.5.1 : la machine dit son adresse (idée P-H 15/07) — pour que
            # Salufolio affiche l'URL à taper sur le téléphone.
            import socket as _s
            try:
                _sk = _s.socket(_s.AF_INET, _s.SOCK_DGRAM); _sk.connect(('8.8.8.8', 80))
                _ip = _sk.getsockname()[0]; _sk.close()
            except Exception:
                _ip = '127.0.0.1'
            ok_json(self, {'ip': _ip, 'port': PORT, 'movil': f'http://{_ip}:{PORT}/protocolo'})
            return

        if path == '/api/config':
            ok_json(self, load_config())
        elif path == '/api/modules':
            ok_json(self, list_modules())
        elif path == '/api/module':
            ok_json(self, read_module(params.get('name', '')))
        elif path == '/api/skeleton':
            ok_json(self, read_skeleton())
        elif path == '/api/split':
            ok_json(self, do_split())
        elif path == '/api/package':
            ok_json(self, do_package())
        elif path == '/api/build':
            ok_json(self, do_build())
        elif path == '/api/publish':
            ok_json(self, do_publish())
        elif path == '/api/test':
            ok_json(self, do_open_browser())
        else:
            err_json(self, 'Route inconnue', 404)

    def do_POST(self):
        _p = urllib.parse.urlparse(self.path).path
        if APAGADO and _p not in ('/api/start', '/api/reiniciar'):
            err_json(self, 'Servidor en pausa — pulse Marcha en el panel', 503); return

        if _p == '/api/start':
            # ═══ v1.8.5 — Marcha : lève la pause, à chaud, aucun process ne meurt ═══
            globals()['APAGADO'] = False
            ok_json(self, {'ok': True}); return

        if _p == '/api/reiniciar':
            # ═══ v1.8.3 — se relancer sans mourir : le process se remplace lui-même ═══
            ok_json(self, {'ok': True, 'mensaje': 'Reiniciando…'})
            import threading as _t, sys as _sys
            _t.Timer(0.6, lambda: os.execv(_sys.executable, [_sys.executable] + _sys.argv)).start()
            return
        if _p == '/api/stop':
            # ═══ v1.8.5 — Detener = PAUSE logique, jamais de mort du process ═══
            # Ainsi Marcha peut toujours relever le service depuis le panel, à chaud.
            globals()['APAGADO'] = True
            ok_json(self, {'ok': True, 'mensaje': 'Servidor en pausa'})
            return
        length = int(self.headers.get('Content-Length', 0))
        body = json.loads(self.rfile.read(length)) if length > 0 else {}
        path = self.path

        if path == '/api/respaldo':
            # Copie automatique du .mf sur le disque. Le travail de l'API
            # (extraction des PDF) ne doit JAMAIS dépendre d'un seul fichier
            # ni d'un seul geste humain. Rotation : on garde les 30 dernières.
            try:
                d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'respaldos')
                os.makedirs(d, exist_ok=True)
                nombre = os.path.basename(str(body.get('nombre') or 'copia.mf'))
                if not nombre.endswith('.mf'):
                    nombre += '.mf'
                contenido = body.get('contenido')
                if not contenido:
                    err_json(self, 'Falta contenido', 400); return
                texto = contenido if isinstance(contenido, str) else json.dumps(contenido, ensure_ascii=False)
                ruta = os.path.join(d, nombre)
                with open(ruta, 'w', encoding='utf-8') as f:
                    f.write(texto)
                copias = sorted([x for x in os.listdir(d) if x.endswith('.mf')], reverse=True)
                for viejo in copias[30:]:
                    try: os.remove(os.path.join(d, viejo))
                    except Exception: pass
                ok_json(self, {'ok': True, 'ruta': ruta, 'bytes': len(texto.encode('utf-8')),
                               'total_copias': min(len(copias), 30)})
            except Exception as e:
                err_json(self, f'Error: {e}', 500)
            return

        if path == '/api/pdf/carpetas':
            try:
                cf = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pdf_carpetas.json')
                carpetas = [str(c)[:300] for c in (body.get('carpetas') or [])][:20]
                with open(cf, 'w', encoding='utf-8') as f:
                    json.dump({'carpetas': carpetas}, f, ensure_ascii=False)
                ok_json(self, {'ok': True, 'carpetas': carpetas})
            except Exception as e:
                err_json(self, f'Error: {e}', 500)
            return

        if path == '/api/paciente':
            try:
                pf = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'paciente.json')
                with open(pf, 'w', encoding='utf-8') as f:
                    json.dump({'label': str(body.get('label', ''))[:120], 'sip': str(body.get('sip', ''))[:20]}, f, ensure_ascii=False)
                ok_json(self, {'ok': True})
            except Exception as e:
                err_json(self, f'Error: {e}', 500)
            return

        if path == '/api/protocolo':
            # v1.5 : réception des données Protocolo (téléphone → PC, Wi-Fi local).
            # Dépôt versionné dans 'protocolo-entrada/', jamais d'écrasement.
            try:
                if not isinstance(body, dict) or not str(body.get('version', '')).startswith(('Salufolio-Protocolo','Salufolio-Protocolo')):
                    err_json(self, 'Datos no reconocidos (falta version Salufolio-Protocolo)', 400)
                    return
                d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'protocolo-entrada')
                os.makedirs(d, exist_ok=True)
                pac = re.sub(r'[^A-Za-z0-9]+', '', str(body.get('patient_label', 'paciente')).split(' ')[0]) or 'paciente'
                stamp = datetime.now(TZ_LIVRAISON).strftime('%Y-%m-%d_%Hh%M%S')
                nom = f'MFProtocolo_{pac}_v{stamp}.json'
                with open(os.path.join(d, nom), 'w', encoding='utf-8') as f:
                    json.dump(body, f, ensure_ascii=False, indent=2)
                ok_json(self, {'ok': True, 'archivo': nom, 'carpeta': 'protocolo-entrada'})
            except Exception as e:
                err_json(self, f'Error al guardar: {e}', 500)
            return

        if path == '/api/config':
            cfg = load_config()
            cfg.update(body)
            save_config(cfg)
            ok_json(self, cfg)
        elif path == '/api/module':
            ok_json(self, write_module(body.get('name', ''), body.get('content', '')))
        elif path == '/api/module/delete':
            ok_json(self, delete_module(body.get('name', '')))
        elif path == '/api/skeleton':
            ok_json(self, write_skeleton(body.get('content', '')))
        elif path == '/api/shell':
            ok_json(self, do_shell(body.get('cmd', '')))
        elif path == '/api/patch':
            ok_json(self, do_apply_patch(body.get('zip_path', '')))
        elif path == '/api/build-publish':
            r1 = do_build()
            if not r1['ok']:
                ok_json(self, r1)
                return
            r2 = do_publish()
            ok_json(self, {
                'ok': r2['ok'],
                'build': r1,
                'publish': r2
            })
        elif path == '/api/build-test':
            r1 = do_build()
            if not r1['ok']:
                ok_json(self, r1)
                return
            r2 = do_open_browser()
            ok_json(self, {'ok': True, 'build': r1, 'test': r2})
        elif path == '/api/build-publish-test':
            r1 = do_build()
            if not r1['ok']:
                ok_json(self, r1)
                return
            r2 = do_publish()
            r3 = do_open_browser()
            ok_json(self, {'ok': True, 'build': r1, 'publish': r2, 'test': r3})
        else:
            err_json(self, 'Route inconnue', 404)

    def log_message(self, format, *args):
        # ═══ v1.8.4 — le diario parle avec date et heure (P-H 04/08) ═══
        # On tait le bruit du panel (ses propres sondes) et on garde les événements.
        try:
            linea = format % args
            if '/api/estado' in linea or '/api/diario' in linea or 'GET /panel' in linea:
                return
            sys.stderr.write('[%s] %s\n' % (datetime.now().strftime('%d/%m %H:%M:%S'), linea))
        except Exception:
            pass


if __name__ == '__main__':
    save_config(CFG)  # S'assurer que le fichier config existe
    print()
    print('╔══════════════════════════════════════════════════════════╗')
    print('║  ModularBuilder — Serveur local                        ║')
    import socket as _s
    try:
        _sk = _s.socket(_s.AF_INET, _s.SOCK_DGRAM); _sk.connect(('8.8.8.8', 80)); _ip = _sk.getsockname()[0]; _sk.close()
    except Exception:
        _ip = '127.0.0.1'
    globals()['START_TIME'] = datetime.now().strftime('%d/%m %H:%M')
    print(f'║  ModularBuilder / Pont Salufolio — serveur v{SERVER_VERSION}                      ║')
    print(f'║  PC      : http://localhost:{PORT}                                              ║')
    print(f'║  Móvil   : http://{_ip}:{PORT}/protocolo                                        ║')
    print('║  Ctrl+C pour arrêter                                   ║')
    print('╚══════════════════════════════════════════════════════════╝')
    print()
    print(f'  Projet : {CFG["project_name"]}')
    print(f'  Dossier : {CFG["work_dir"]}')
    print()

    # Ouvrir le navigateur
    webbrowser.open(f'http://{HOST}:{PORT}  ·  /protocolo → móvil')

    server = http.server.HTTPServer((HOST, PORT), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n  Arrêt du serveur.')
        server.server_close()
