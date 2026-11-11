Versión 2026.09.19-18:15:47
# CAHIER DE RATTRAPAGE DOCUMENTAIRE — SALUFOLIO PROTOCOLO
**v2026-08-03 (préparé pendant la sieste 😴) — par l'abeille 🐝**

**État des documents** : Manuel v1.0 (es+fr, 30 p., 38 fig.) · Doc technique v1.0 (es+fr, 14 p.) · Académique v0.5 (trilingue, 21 p.) — **tous arrêtés au 29/07 matin**.
**État du programme** : app **v2026.8.1.24-SAT** · serveur **v1.7.0** · panal **v2026.8.3.3** · qr.sh v2026.8.3.1.
**Bertha est prévenue d'ignorer l'ancien envoi — le meilleur est pour venir.**

**⚠ CE QU'IL ME FAUT AU RÉVEIL** : le zip des générateurs — `comun.js`, `manual_uso.js`, `doc_tecnica.js`, `doc_academico.js`, `shots5.py` (+ le dossier de travail). Avec eux, j'applique TOUT ce cahier en une passe et on régénère les six PDF.

---

## B. INVENTAIRE DES NOUVEAUTÉS À DOCUMENTER (29/07 → 03/08)

| # | Nouveauté | Manuel | Technique | Académique | Figure |
|---|-----------|:------:|:---------:|:----------:|:------:|
| 1 | **Installation sur un appareil neuf** (le circuit complet : pont ⬇ pré-configuré · QR qr.sh/panal · Lens/Binary Eye · icône d'accueil · 📷 dans l'app · saisie manuelle) | ★★ ch. neuf | ★★ | ★ (geste d'appropriation) | ✔×4 |
| 2 | **« Días por transmitir »** remplace « Últimos 7 días » (révision par jour, tampon) | ★★ | ★ | ★★ (relu vs brut) | ✔×2 |
| 3 | **Le tableau de Notas** (4 registres en 2 colonnes, valeurs à gauche) | ★ | — | — | ✔ |
| 4 | **Frecuencias** des médicaments (diaria/alterna/semanal/mensual + tocaHoy) | ★★ | ★ | — | ✔ |
| 5 | **⚡ Ritmo irregular** (les répétitions parlent : fibrillation paroxystique) | ★ | — | ★ | ✔ |
| 6 | **Puce Enfermería** (cura/control ; l'événement nu se note, la précision le remplace) | ★ | ★ (baseSola) | — | ✔ |
| 7 | **Agitación por momentos** · **Buen día ✨ détaillé** · **Desorientación** (faits, pas diagnostic) · **Alimentación complétée** | ★ | — | ★ (desorientación) | ✔ |
| 8 | **Les timbres** (7 sons WebAudio, un par moment, ▶ écouter, SIN SONIDO) | ★ | ★ | — | ✔ |
| 9 | **Multipatient** (casiers mfp_<id>_, bascule par onglet, maison vide + invitation) | ★★ | ★★ | ★★ | ✔×2 |
| 10 | **La hora corregible** partout (toucher la ligne · jour passé → on DEMANDE l'heure · 12:00 neutre) | ★★ | ★ | ★★ (véracité) | ✔ |
| 11 | **L'oxygène et la nuit franchie** (séance ouverte 3 jours, finDia, salida 112 motivée) | ★ | ★ | ★ (Lavoisier) | ✔ |
| 12 | **La revisión + sello « control de calidad »** (cuando instante/jornada ; sauvegarde silencieuse ; envoi optionnel) | ★★ | ★★ | ★★★ | ✔ |
| 13 | **Le toast qui attend le retour** (jamais de minuterie entre fenêtres) | — | ★★ | — | — |
| 14 | **Serveur v1.7.0** : `/protocolo/instalar` en octet-stream + injection `MFP_PC_DEF` | — | ★★ | — | — |
| 15 | **Le 📷 de l'app** (BarcodeDetector natif, contexte sûr, extraction de la base) | ★★ | ★★ | — | ✔ |
| 16 | **Le panal vivant** : pecten SVG, concha verte/jaune, QR dans l'hexagone, lien intelligent, module qr-js | ★ | ★★ | ★ | ✔×2 |
| 17 | **qr.sh** (boîte à outils de l'administrateur, Linux) | annexe | ★ | — | ✔ |
| 18 | **L'origine du nom** (Salus+folium) et **le sens du pecten** (les stries convergent : le point, c'est le patient) | préface | — | ★★★ | blason |
| 19 | Info express ❓ · feedback caritas · revoir la présentation (toucher la version) | ★ | — | — | ✔ |
| 20 | Restaurar → l'assistant du premier pas (plus dans Datos) | ★ | ★ | — | — |

---

## C. MANUEL DE USO — CHAPITRES RÉDIGÉS

### C1. NOUVEAU CHAPITRE : « Instalar el Protocolo en un aparato » ⭐ le chapitre-roi

**[ES]**
> **Instalar el Protocolo en un teléfono o tablet**
>
> La instalación se hace **una sola vez por aparato**, y es un gesto del administrador — la persona que cuida abre después la aplicación tocando su icono, y nada más.
>
> **Camino 1 — desde el puente (el más sencillo).** Con el teléfono en el mismo WiFi que el ordenador, abra la dirección que muestra Salufolio (por ejemplo `http://192.168.10.200:7777/protocolo`). En la pantalla de presentación, toque **« ⬇ Sí, instalar »** : el archivo se descarga **ya configurado** — conoce la dirección de su ordenador y enviará los datos solo.
>
> **Camino 2 — el código QR (sin escribir nada).** En el ordenador, el **panal de Salufolio** muestra en la alvéola *Protocolo* un código QR con la dirección del día (también puede generarlo el pequeño programa `qr.sh`). Apunte la cámara del teléfono : si su aplicación de fotos no reconoce códigos, use **Google Lens** o, si prefiere que nada salga de casa, **Binary Eye** (gratuito, funciona sin internet). El Protocolo se abre — ya puede instalarlo (Camino 1) o dejarlo como página.
>
> **El último gesto — el icono.** Con el Protocolo abierto en el navegador : menú **⋮ → « Añadir a pantalla de inicio »**. Desde ese momento, quien cuida **toca el icono y punto** — sin direcciones, sin configuración, con o sin ordenador encendido.
>
> **Si el ordenador cambia de WiFi.** La copia local tiene un botón **📷** junto al campo de dirección (en *Datos → Guardar y compartir*) : fotografíe el nuevo código QR y la dirección queda guardada. También puede escribirla a mano — el papel siempre está sobre la mesa.

**[FR]**
> **Installer le Protocolo sur un téléphone ou une tablette**
>
> L'installation se fait **une seule fois par appareil**, et c'est un geste d'administrateur — la personne qui soigne ouvre ensuite l'application en touchant son icône, et rien d'autre.
>
> **Chemin 1 — depuis le pont (le plus simple).** Le téléphone sur le même WiFi que l'ordinateur, ouvrez l'adresse que montre Salufolio (par exemple `http://192.168.10.200:7777/protocolo`). Sur l'écran de présentation, touchez **« ⬇ Oui, installer »** : le fichier se télécharge **déjà configuré** — il connaît l'adresse de votre ordinateur et enverra les données tout seul.
>
> **Chemin 2 — le code QR (sans rien taper).** Sur l'ordinateur, le **panal de Salufolio** montre dans l'alvéole *Protocolo* un code QR avec l'adresse du jour (le petit programme `qr.sh` peut aussi le produire). Visez avec la caméra du téléphone : si l'appli photo ne lit pas les codes, utilisez **Google Lens** ou, si vous préférez que rien ne sorte de la maison, **Binary Eye** (gratuit, fonctionne sans internet). Le Protocolo s'ouvre — installez-le (Chemin 1) ou gardez-le comme page.
>
> **Le dernier geste — l'icône.** Le Protocolo ouvert dans le navigateur : menu **⋮ → « Ajouter à l'écran d'accueil »**. Dès lors, la personne qui soigne **touche l'icône et c'est tout** — sans adresse, sans réglage, ordinateur allumé ou non.
>
> **Si l'ordinateur change de WiFi.** La copie locale a un bouton **📷** à côté du champ d'adresse (dans *Datos → Guardar y compartir*) : photographiez le nouveau code QR et l'adresse est mémorisée. On peut aussi l'écrire à la main — le menu papier reste sur la table.

### C2. « Días por transmitir » (remplace la section Últimos 7 días)

**[ES]**
> **Datos → Días por transmitir.** Este apartado ya no enseña « los últimos 7 días » — siete era arbitrario. Muestra **los días cuyos apuntes aún no han viajado a Salufolio** : toque un día, repáselo (puede corregir una hora tocando la línea, o borrar un apunte erróneo), y al validar **todo se guarda y se envía**. El día desaparece de la lista : lo que queda a la vista es, exactamente, lo que queda por hacer. Cuando no queda nada : *« ✓ Todo revisado y transmitido »*. Para **leer** la historia, use el **Resumen** de la barra inferior — cada cosa tiene su puerta.

**[FR]**
> **Datos → Jours à transmettre.** Ce volet ne montre plus « les 7 derniers jours » — sept était arbitraire. Il montre **les jours dont les notes n'ont pas encore voyagé vers Salufolio** : touchez un jour, relisez-le (corrigez une heure en touchant la ligne, supprimez une note erronée), et à la validation **tout se sauvegarde et s'envoie**. Le jour disparaît de la liste : ce qui reste affiché est, exactement, ce qui reste à faire. Quand il ne reste rien : *« ✓ Tout est relu et transmis »*. Pour **lire** l'histoire, le **Resumen** de la barre du bas — chaque chose a sa porte.

### C3. Le tableau de Notas (lecture des 4 registres)

**[ES]** > Las cuatro líneas del cuerpo — 💧 Hidratación · 🩹 Pañal · 🚽 Deposición · 💦 Micción — se leen **como una tabla** : la acción a la izquierda, y justo al lado, **el total del día** (« 3× · 450 ml »). Tocar la línea abre el registro : anotar, corregir una hora, quitar un error.
**[FR]** > Les quatre lignes du corps — 💧 Hydratation · 🩹 Change · 🚽 Selles · 💦 Urine — se lisent **comme un tableau** : l'action à gauche et, juste à côté, **le total du jour**. Toucher la ligne ouvre le registre : noter, corriger une heure, retirer une erreur.

### C4-C9. Sections à développer dans les générateurs (consignes denses)

- **C4 Frecuencias** : au médicament, la fréquence se déclare (chaque jour / un jour sur deux / hebdomadaire, avec le jour / mensuelle, avec la date) ; « Hoy » ne montre que ce qui TOQUE aujourd'hui. Figure : le formulaire déplié.
- **C5 Les nouvelles puces** : ⚡ Ritmo irregular (« el corazón tropieza » — chaque signalement compte, les répétitions parlent au médecin) · Enfermería 🩹 (la visite se note d'un toucher ; cura/control la précise et la remplace) · Agitación por momentos · Buen día ✨ (l'état par défaut se dit aussi — « sin más detalle » en tête) · Desorientación (des FAITS observés : « no reconoce la casa », jamais un diagnostic) · Alimentación (ha pedido comer / ha comido bien).
- **C6 Los timbres** : chaque moment de prise a SON timbre (7 au choix dont le silence), ▶ pour écouter avant de choisir — on reconnaît le moment à l'oreille, depuis la cuisine.
- **C7 Multipatient** : la maison peut loger plusieurs personnes ; on bascule d'un toucher (chaque onglet garde la sienne) ; maison vide → l'invitation guide le premier pas (créer, restaurer une copie, ou importer du dossier quand la coquille est verte).
- **C8 La revisión** : le geste principal est la RELECTURE ; la sauvegarde est silencieuse et systématique, l'envoi part si l'ordinateur répond ; le sello marque « un humain a relu » ; la confirmation paraît au retour — jamais sous une fenêtre du système.
- **C9 Le temps honnête** : sur un jour passé, l'app DEMANDE l'heure (12:00 comme repère neutre) au lieu de l'inventer ; une nuit d'oxygène ne se coupe pas à minuit (« en curso desde 21:30 (31/07) ») ; à la salida 112, l'oxygène s'arrête d'office avec son motif inscrit — le concentrateur ne monte pas dans l'ambulance.

### Annexe outillage : `qr.sh` (une demi-page)
> L'outil de l'administrateur sous Linux : `bash ~/Salufolio/qr.sh` lit l'adresse du moment et affiche la carte QR à l'écran. À relancer après un changement de WiFi. (Le panal fait la même chose, en vivant.)

---

## D. DOC TECNICA — SECTIONS RÉDIGÉES

### D1. ⭐ LA FIGURE DU QR (demandée par P-H) + le circuit d'installation

**Figure à composer** : la carte QR (capture de l'alvéole du panal ouverte, concha verte, QR dans l'hexagone) + le schéma du circuit :

```
   ORDENADOR (Salufolio + servidor :7777)          TELÉFONO / TABLET
   ┌──────────────────────────────┐
   │ /api/ip ──► panal: alvéola   │   cámara/Lens   ┌─────────────────┐
   │            Protocolo 🐚verde │ ═══ QR ═══════► │ abre /protocolo │
   │            (QR del día)      │                 │ « ⬇ Sí, instalar»│
   │ /protocolo/instalar ─────────┼────────────────►│ app local YA     │
   │   (octet-stream, MFP_PC_DEF  │    descarga     │ configurada      │
   │    inyectado = preconfigurada)│                │ → icono inicio   │
   └──────────────────────────────┘                 └─────────────────┘
```

**[ES]** La instalación es una cadena de tres eslabones — el QR evita teclear la dirección ; la ruta `/protocolo/instalar` sirve el archivo como **octet-stream** (un archivo, no una página : el navegador no lo bloquea) con la dirección del servidor **inyectada** en `MFP_PC_DEF` ; el icono de pantalla de inicio hace el resto. Ningún eslabón requiere internet, cuenta ni nube.

### D2. Serveur v1.7.0 — les routes du pont (mise à jour du tableau)

| Ruta | Método | Papel |
|------|--------|-------|
| `/protocolo` | GET | Sert l'app au téléphone (même WiFi) |
| `/protocolo/instalar` | GET | **v1.7.0** : app en `application/octet-stream`, `Content-Disposition: attachment; filename="Salufolio_Protocolo_movil.html"`, remplacement `const MFP_PC_DEF = ''` → adresse réelle (socket UDP → IP, multiplateforme) |
| `/api/ip` | GET | `{ip, port, movil}` — nourrit l'antenne de la bandeja ET la concha du panal (CORS `*` : lisible depuis `file://`) |
| `/api/protocolo` | POST | La réception satellite (no-cors, text/plain, → protocolo-entrada) |
| `/api/protocolo/pacientes` | GET | La liste des patients **d'après la dernière sauvegarde** de respaldos/ |

### D3. Le scanner ㉚ (monture A) — une page

**[ES]** El botón 📷 sólo existe donde puede funcionar : `BarcodeDetector` presente **y** contexto seguro (`file://`, `https`, `localhost`) — la app servida en `http://IP` no puede abrir la cámara, y por eso no lo muestra (*lo que no puede funcionar no se muestra*). Bucle : `getUserMedia({video:{facingMode:'environment'}})` → `detect()` por frame → primera URL http(s) → se conserva **la base** (`protocol + '//' + host`) → `setPc(base)` + sonda. Cero bytes embarcados : el detector es del navegador.

### D4. Le principe « le dernier mot attend son tour » (alVolverAlPrimerPlano)

**[ES]** Cuando `a.click()` abre el selector del sistema, la página pierde el primer plano — un toast hablaría **debajo** de la ventana. Regla de la casa : **nunca encadenar dos ventanas con un temporizador** ; el aviso parte al **volver al primer plano** (`focus` + `visibilitychange`, las DOS salidas del selector — guardado o cancelado). Si no se abrió selector, la palabra es inmediata.

### D5. Le panal vivant — une page

sondaPuente (fetch `localhost:7777/api/ip`, garde 1,6 s) → `_PUENTE` → concha **pecten SVG** verte/jaune sur l'alvéole (survit au changement de langue) → popup : QR (cellSize 4, ~116 px) dans l'hexagone, toucher = carte pleine (cellSize 6) ; lien « Abrir Protocolo » réécrit vers `_PUENTE.movil` quand le pont vit ; module **qr-js** (qrcode-generator, MIT, embarqué) ; vitrine GitHub : https ne joint pas un serveur local → jaune de nature. **Le pecten** : dessiné en SVG (l'emoji 🐚 est un gastéropode — détail qui a son chapitre héraldique dans l'académique).

### D6. Le format d'échange — champs nouveaux à documenter

`obs[].rev` (sello ISO minute : « contrôle qualité passé ») · `cuando` : `instante`/`jornada` (table CUANDO_JORNADA) · médicaments : `frec`/`dsem`/`dmes` · matériel `_uso` : sesiones `{inicio, fin, finDia?, litros[{h,lpm}], motivo?:'salida'}` · casiers multipatient `mfp_<id>_*` + `mfp_pacientes`.

---

## E. ACADÉMIQUE — AJOUTS (es, à décliner fr/en)

### E1. ⭐ El nombre y la concha (le chapitre demandé — préface + encart héraldique)
**[ES]** *Salufolio* une **salus** (la salud, y el saludo que se debe a quien cuida) y **folium** (la hoja : la del expediente y la del árbol que crece). Su emblema es la **concha del peregrino** — el pecten del Camino : todas sus estrías convergen hacia un único punto, y en el blasón ese punto se ha quitado adrede, **porque el punto es el paciente**. Es también la insignia del hospitalero — quien acoge al caminante, lo cuida y lo deja seguir : lo que hace, cada día, quien lleva este cuaderno. El blasón no decora el programa ; enuncia su doctrina.

### E2. El sello de relectura : datos releídos vs datos brutos
La marca `rev` no es un adorno técnico : distingue **lo anotado** de **lo anotado y releído por un humano** — una frontera epistémica que los formatos clínicos habituales no trazan. El resumen declara cuántas observaciones han pasado ese control.

### E3. La instalación sin infraestructura (le QR local comme geste d'appropriation)
Ni tienda de aplicaciones, ni cuenta, ni nube : un código QR **generado en la propia casa**, con la dirección de la propia máquina. La cadena entera — generación, descarga preconfigurada, icono — vive en la red local. (Une phrase sur le choix offert : Lens *ou* un scanner hors-ligne — la vie privée comme option par défaut possible.)

### E4. Multipaciente : los casilleros y la verdad separada
Un teléfono, varias personas cuidadas : cada una su casillero (`mfp_<id>_`), la bascule explicite, jamais deux vérités dans le même champ — l'anti-MAM appliqué au chevet.

---

## F. FIGURES NOUVELLES À CAPTURER (shots5.py — liste pour la séance photo)

1. Datos → **Días por transmitir** (avec 2 jours en attente) · 2. le même, vide (« ✓ Todo… ») · 3. la **révision d'un jour** (groupée, tampon) · 4. **Notas en tableau** (les 4 registres alignés) · 5. le formulaire médicament avec **frecuencia** dépliée · 6. les **timbres** (liste + ▶) · 7. la **bascule multipatient** + l'invitation maison vide · 8. le dialogue **« ⬇ Sí, instalar »** · 9. le **📷** ouvert (écran caméra, peut se simuler) · 10. **l'alvéole du panal** : concha verte + QR dans l'hexagone · 11. la **carte QR pleine** · 12. la carte crème de **qr.sh** · 13. ⚡ ritmo irregular dans Constantes · 14. la puce **Enfermería** avec cura/control.

---

## G. APRÈS LA DOC : GITHUB (préparé pour ton rituel)

À pousser dans le clone (git status montré AVANT le commit, comme toujours) :
1. `index.html` ← le panal **v2026.8.3.3** (pecten, concha vivante, QR)
2. `Salufolio_Protocolo_movil.html` ← **la .24-SAT** (le dépôt sert encore la 29.12 !)
3. Les six PDF régénérés (manuels es/fr, techniques es/fr, académiques)
4. **README.md — deux poussières** : `Contacto : MediFolio@proton.me` → **salufolio@proton.me** · le lien `Salufolio_Protocolo_Manual.md` → les PDF v1.x
5. Zenodo ensuite si tu veux le DOI de version (Release GitHub)

## H. ET « ON TRAVAILLE SUR MEDIFOLIO » 😄
Noté pour l'après-GitHub — la **grosse bête** (qui s'appelle Salufolio, mais dont le fichier porte encore fièrement `app/MediFolio.html`, on sait 😄). Les chantiers qui l'attendent au carnet : l'adaptation **multipatient** du bureau, les **quatre dates du .mf** (conception arrêtée le 01/08), l'enveloppe **FORMAT 3**, le **Buscador**. Tu choisiras l'angle d'attaque au réveil.
