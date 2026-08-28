var PTR = {
 ca: {
  'Protocolo':{sub:'el dia a dia'},
  'Informe express':{label:'Informe exprés',sub:'Per al metge'},
  'Auditoría':{label:'Auditoria',sub:'coherència clínica',content:'<h3>El jutge de pau de l\'expedient</h3><p>Assenyala el que no quadra: <strong>diagnòstics sense suport analític</strong>, valors impossibles, identificadors en col·lisió, antecedents fòssils, material llistat com a fàrmac.</p><p>✔ Conforme · ✏️ Corregir · 📄 Veure el document</p><p><strong>L\'auditoria assenyala; el judici és humà.</strong></p>'},
  'Salufolio':{sub:'Accedir'},
  'Farmacovigilancia':{label:'Farmacovigilància',sub:'en construcció',content:'<h3>Al taller 🚧</h3><p>Principi actiu i codi ATC via l\'<strong>API pública CIMA/AEMPS</strong>: marca ↔ genèric, duplicitats de principi actiu, interaccions.</p><p>El material (oxigen, absorbents) queda fora: no són medicaments.</p>'},
  'Ensayo clínico':{label:'Assaig clínic',sub:'GCP · ICH E6',content:'<h3>Salufolio per a la recerca</h3><p>Visites, esdeveniments adversos, reportador i segell de temps: el mòdul que obri l\'expedient als <strong>assajos clínics</strong> — l\'ús que més demanen els professionals.</p>'},
  'ModularBuilder':{sub:'el taller',content:'<h3>On es fabrica tot</h3><p><strong>79 mòduls</strong> assemblats en un arxiu únic: build, split, punt fix, empaquetat.</p><p>Eina universal — no depén de Salufolio; Salufolio depén d\'ella.</p><p>📥 <strong>Extractor</strong> — del paper a la dada: llig els PDF i els converteix en valors datats amb la seua font; les extraccions es guarden (♻️ el mateix document mai es paga dues vegades). <em>Salufolio no inventa res.</em></p>'},
  'Paciente':{label:'Pacient',sub:'El seu historial'},
  'Profesional':{label:'Professional',sub:'Vista completa'},
  'Cuidador':{sub:'Protocolo'},
  'Visita guiada':{label:'Visita guiada',sub:'22 etapes'},
  'Saber más':{label:'Saber-ne més',sub:'En xifres'},
  'Contacto':{label:'Contacte',sub:'MediFolio@proton.me'}
 },
 fr: {
  'Protocolo':{sub:'le quotidien'},
  'Informe express':{label:'Rapport express',sub:'Pour le médecin'},
  'Auditoría':{label:'Audit',sub:'cohérence clinique',content:'<h3>Le juge de paix du dossier</h3><p>Signale ce qui ne colle pas : <strong>diagnostics sans support analytique</strong>, valeurs impossibles, identifiants en collision, antécédents fossiles, matériel listé comme médicament.</p><p>✔ Conforme · ✏️ Corriger · 📄 Voir le document</p><p><strong>L\'audit signale ; le jugement est humain.</strong></p>'},
  'Salufolio':{sub:'Accéder'},
  'Farmacovigilancia':{label:'Pharmacovigilance',sub:'en construction',content:'<h3>À l\'atelier 🚧</h3><p>Principe actif et code ATC via l\'<strong>API publique CIMA/AEMPS</strong> : marque ↔ générique, doublons de principe actif, interactions.</p><p>Le matériel (oxygène, absorbants) reste dehors : ce ne sont pas des médicaments.</p>'},
  'Ensayo clínico':{label:'Essai clinique',sub:'GCP · ICH E6',content:'<h3>Salufolio pour la recherche</h3><p>Visites, événements indésirables, rapporteur et horodatage : le module qui ouvre le dossier aux <strong>essais cliniques</strong> — l\'usage que les professionnels demandent le plus.</p>'},
  'ModularBuilder':{sub:'l\'atelier',content:'<h3>Où tout se fabrique</h3><p><strong>79 modules</strong> assemblés en un fichier unique : build, split, point fixe, empaquetage.</p><p>Outil universel — il ne dépend pas de Salufolio ; Salufolio dépend de lui.</p><p>📥 <strong>Extractor</strong> — du papier à la donnée : lit les PDF et les convertit en valeurs datées avec leur source ; les extractions sont mémorisées (♻️ le même document ne se paie jamais deux fois). <em>Salufolio n\'invente rien.</em></p>'},
  'Paciente':{label:'Patient',sub:'Son historique'},
  'Profesional':{label:'Professionnel',sub:'Vue complète'},
  'Cuidador':{label:'Aidant',sub:'Protocolo'},
  'Visita guiada':{label:'Visite guidée',sub:'22 étapes'},
  'Saber más':{label:'En savoir plus',sub:'En chiffres'},
  'Contacto':{label:'Contact',sub:'MediFolio@proton.me'}
 },
 en: {
  'Protocolo':{sub:'day to day'},
  'Informe express':{label:'Express report',sub:'For the doctor'},
  'Auditoría':{label:'Audit',sub:'clinical coherence',content:'<h3>The record\'s justice of the peace</h3><p>Flags what does not add up: <strong>diagnoses without analytical support</strong>, impossible values, colliding identifiers, fossil antecedents, supplies listed as drugs.</p><p>✔ Compliant · ✏️ Fix · 📄 View the document</p><p><strong>The audit flags; the judgment is human.</strong></p>'},
  'Salufolio':{sub:'Enter'},
  'Farmacovigilancia':{label:'Pharmacovigilance',sub:'under construction',content:'<h3>In the workshop 🚧</h3><p>Active ingredient and ATC code via the <strong>public CIMA/AEMPS API</strong>: brand ↔ generic, duplicate active ingredients, interactions.</p><p>Supplies (oxygen, absorbents) stay out: they are not drugs.</p>'},
  'Ensayo clínico':{label:'Clinical trial',sub:'GCP · ICH E6',content:'<h3>Salufolio for research</h3><p>Visits, adverse events, reporter and timestamping: the module that opens the record to <strong>clinical trials</strong> — the use professionals request most.</p>'},
  'ModularBuilder':{sub:'the workshop',content:'<h3>Where everything is built</h3><p><strong>79 modules</strong> assembled into a single file: build, split, fixed point, packaging.</p><p>Universal tool — it does not depend on Salufolio; Salufolio depends on it.</p><p>📥 <strong>Extractor</strong> — from paper to data: reads PDFs and turns them into dated values with their source; extractions are cached (♻️ the same document is never paid twice). <em>Salufolio invents nothing.</em></p>'},
  'Paciente':{label:'Patient',sub:'Their history'},
  'Profesional':{label:'Professional',sub:'Full view'},
  'Cuidador':{label:'Caregiver',sub:'Protocolo'},
  'Visita guiada':{label:'Guided tour',sub:'22 steps'},
  'Saber más':{label:'Learn more',sub:'In numbers'},
  'Contacto':{label:'Contact',sub:'MediFolio@proton.me'}
 }
};

