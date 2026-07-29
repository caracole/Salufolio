# Salufolio — Catálogo de módulos

*Generado automáticamente desde los encabezados de los 78 módulos — v2026.7.18.4 · 2026-07-18*

La aplicación es un único HTML ensamblado por **ModularBuilder** a partir de estos módulos.
Cada módulo comienza con un comentario que lo describe — este catálogo se regenera desde ahí: la documentación no puede mentir sobre el código.

## `auditoria-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `auditoria-html.html` | 1 | — |
| `auditoria-js.js` | 23 | R1 — diagnostics codés qui appellent une biologie de soutien |

## `bacteriology-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `bacteriology-html.html` | 0 | PANEL BACTERIOLOGÍA |
| `bacteriology-js.js` | 17 | PANEL BACTERIOLOGÍA — Resultados de cultivos y antibiogramas |

## `core-*` (31 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `core-about-js.js` | 9 | Fenêtre "Acerca de Salufolio" — Affiche la version globale et la liste des modules avec leurs versions individuelles. |
| `core-antecedentes-js.js` | 3 | activos d'abord |
| `core-badges-css.css` | 1 | — |
| `core-badges-js.js` | 9 | Affichage compact dans le badge : icône suivie du numéro de version sans le nom du module, pour rester très discret dans l'interface. |
| `core-charts-js.js` | 19 | combos : [{keys:[k1,k2,...], taille:'aqui'|'grande'}] — migre l'ancien format [k1,k2,taille] |
| `core-css.css` | 14 | Tooltip corrélations |
| `core-data-js.js` | 20 | DONNÉES — localStorage |
| `core-data_types.js` | 2 | Exemples futurs (décommenter pour activer) : ,{ id: 'research', icon: '🟣', color: '#9b59b6', label: {...}, ... } ,{ id: 'educational',icon: '🟡', color: '#f1c40f |
| `core-dedup-js.js` | 2 | DÉDUPLICATION — Supprime les doublons dans events et bacterio |
| `core-draggable-js.js` | 2 | Fonction GÉNÉRIQUE pour rendre une modale déplaçable. À utiliser pour toutes les fenêtres modales (Help, About, etc.) Usage : makeModalDraggable('card-id', 'hea |
| `core-export-js.js` | 24 | Inspecteur : le JSON vivant (toutes tables) dans un onglet, sans exporter. Demande P-H 13/07 : « tester dans le vif ». Depuis l'onglet : copier, ou Ctrl+S pour |
| `core-filtre-specialite-js.js` | 2 | Icônes par mot-clé |
| `core-import-list-js.js` | 10 | IMPORT LIST — Tableau éditable des événements |
| `core-init-js.js` | 0 | INIT |
| `core-init-profil-js.js` | 0 | INIT PROFIL — à appeler dans window.addEventListener('load') |
| `core-mesures-js.js` | 9 | MESURES LIST — Correction de dates des mesures |
| `core-modules-data.js` | 3 | Version globale de l'application |
| `core-navigation-js.js` | 27 | NAVIGATION |
| `core-newpatient-js.js` | 4 | NUEVO PACIENTE — crée une structure .mf vide et compatible |
| `core-panels-html.html` | 8 | PANEL RESUMEN |
| `core-pdfviewer-js.js` | 1 | PDF VIEWER |
| `core-protocolo-import-js.js` | 15 | Dialogues doux (P-H 15/07 : « tout ça dans des popups » → plus jamais) |
| `core-reset-js.js` | 3 | RESET |
| `core-responsive-css.css` | 13 | Adaptation du bouton de retour en haut pour les petits écrans : on réduit légèrement sa taille pour qu'il prenne moins de place dans la topbar mobile sans pour |
| `core-resumen-js.js` | 4 | Bascule entre les 3 sous-onglets |
| `core-scroll-js.js` | 4 | Animation de remontée fluide. La propriété behavior smooth indique au navigateur d'animer le défilement plutôt que de sauter d'un coup. |
| `core-table-js.js` | 18 | pas de sélection de texte en route |
| `core-timeline-js.js` | 15 | TIMELINE CLINIQUE — 100% data-driven |
| `core-trazabilidad-js.js` | 7 | Registre des PDF sources : fichier → id court stable (PDF001…). Lavoisier : chaque mesure garde un lien traçable vers sa roche-mère. |
| `core-utils-js.js` | 3 | UTILITAIRES |
| `core-welcome-html.html` | 7 | PANEL BIENVENIDA (sin datos) |

## `correlaciones-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `correlaciones-html.html` | 1 | PANEL CORRELACIONES |
| `correlaciones-js.js` | 10 | Périodes d'observance — vide, sera alimenté depuis .mf |

## `demo-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `demo-data.js` | 0 | Mode test: Salufolio.html?reset → vide localStorage |

## `ensayo-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `ensayo-html.html` | 0 | PANEL ENSAYO |
| `ensayo-js.js` | 37 | RENDER PRINCIPAL |

## `glosario-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `glosario-js.js` | 24 | GLOSARIO DE PARÁMETROS BIOLÓGICOS |

## `languages-*` (3 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `languages-data.js` | 1 | TABLE DES LANGUES — table-driven, extensible Pour ajouter une langue : ajouter une ligne + créer son dictionnaire dans l'objet T (ex: T.it = {...}). Le menu se |
| `languages-js.js` | 50 | TRADUCTIONS |
| `languages-js2.js` | 0 | TRADUCTIONS |

## `medications-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `medications-html.html` | 4 | PANEL MEDICAMENTOS |
| `medications-js.js` | 65 | PANEL MEDICAMENTOS — Vue chronologique des médicaments extraits |

## `observancia-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `observancia-html.html` | 1 | PANEL OBSERVANCIA |
| `observancia-js.js` | 1 | — |

## `ocr-*` (8 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `ocr-apikey-js.js` | 10 | API KEY |
| `ocr-extraction-js.js` | 23 | Garde-fou : vérifier que la table de pilotage externe est chargée. Si prompt-claude.js manque (oubli de copie, mauvais dossier), on échoue BRUYAMMENT au premier |
| `ocr-html.html` | 24 | Activer le drag sur les modales OCR dès leur première ouverture |
| `ocr-manual-js.js` | 3 | SAISIE MANUELLE |
| `ocr-pdf-extract-js.js` | 1 | EXTRACTION PDF via Claude API |
| `ocr-tabs-js.js` | 1 | IMPORT TABS — switch between 3 volets |
| `ocr-tesseract-js.js` | 4 | OCR — Tesseract.js côté client |
| `ocr-test-js.js` | 23 | OCR SEUL — Mode test sans clé API |

## `parametros-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `parametros-data.js` | 22 | PARAMÈTRES BIOLOGIQUES |

## `patient_switch-*` (4 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `patient_switch-css.css` | 5 | État initial avant l'animation : fond transparent, comme si la zone n'avait pas encore reçu son éclairage. |
| `patient_switch-html.html` | 22 | Drag pour patient-switch-modal |
| `patient_switch-js.js` | 7 | Textes selon langue |
| `patient_switch-profiles-js.js` | 13 | GESTION PROFILS & PATIENTS |

## `pdf_report-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `pdf_report-dialog-js.js` | 0 | INFORME — Dialog de choix |
| `pdf_report-export-js.js` | 38 | EXPORT PDF — Rapport médical |

## `pharmacovig-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `pharmacovig-html.html` | 2 | PANEL VACUNAS · ENFERMERÍA (NANDA/NIC) |
| `pharmacovig-js.js` | 1 | FARMACOVIGILANCIA — 100% data-driven |

## `protocolo-*` (3 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `protocolo-css.css` | 7 | PROTOCOLO ASISTIDO — Styles · v1.1.0 · Mai 2026 |
| `protocolo-html.html` | 4 | PANEL PROTOCOLO ASISTIDO |
| `protocolo-js.js` | 31 | STOCKAGE |

## `radar-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `radar-js.js` | 15 | PANEL RADAR — Vue d'ensemble en toile d'araignée |

## `respaldo-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `respaldo-js.js` | 6 | 1. RESPALDO |

## `sidebar-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `sidebar-js.js` | 1 | SIDEBAR — volet latéral |

## `tooltips-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `tooltips-js.js` | 5 | Important : ajouter au <html>, pas au <body>, car body a un zoom qui décale position:fixed |

## `tour-*` (3 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `tour-css.css` | 7 | Surbrillance d'élément pendant la visite guidée (alternative au spotlight) |
| `tour-html.html` | 7 | VISITE GUIDÉE — overlay + spotlight + bulle |
| `tour-js.js` | 31 | 🎓 VISITE GUIDÉE (TOUR) |

## `tour_feedback-*` (1 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `tour_feedback-js.js` | 13 | Textes selon contexte + langue |

## `vascular-*` (2 módulos)

| Módulo | Ko | Descripción |
|---|---:|---|
| `vascular-html.html` | 0 | Deux sous-onglets : on gagne une ligne dans la barra (P-H 16/07) |
| `vascular-js.js` | 4 | ANÁLISIS VASCULAR — 100% data-driven desde .mf |
