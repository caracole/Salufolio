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
  'Visita guiada':{label:'Visita guiada',sub:'el panal, porta a porta'},
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
  'Visita guiada':{label:'Visite guidée',sub:'le panal, porte à porte'},
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
  'Visita guiada':{label:'Guided tour',sub:'the hive, door to door'},
  'Saber más':{label:'Learn more',sub:'In numbers'},
  'Contacto':{label:'Contact',sub:'MediFolio@proton.me'}
 }
};


/* ═══ LA VISITA EN LES ALTRES LLENGÜES — ca (valencià), fr, en ═══
   Même ordre que VISITA (index.html). Le titre et le texte seulement ;
   l'icône et la mécanique restent dans VISITA. */
var VTR = {
 ca: [
  {tit:'Benvingut al panal',txt:'Esta és la casa de Salufolio: <strong>dos pisos i set portes per pis</strong>. En un minut sabrà què oferix cada una i quina és la seua. El film avança sol, a poc a poc — <em>«Seguir» per a avançar, llisque el dit arrere per a repassar, ✕ per a eixir quan vullga.</em>'},
  {tit:'Pacient',txt:'La porta de qui viu la seua història clínica. Obri Salufolio amb <strong>el seu historial en primer pla</strong>: anàlisis, informes i dates, ordenats i explicats. Les seues dades viuen en el seu aparell — mai en un núvol.'},
  {tit:'Professional',txt:'La porta del metge o de l\'infermer. Obri Salufolio en <strong>vista completa</strong>: tota la història longitudinal, els valors comparats al llarg dels anys, les fonts a un toc. Pensada per a la consulta.'},
  {tit:'Cuidador',txt:'La porta de qui cuida cada dia. Obri el <strong>Protocolo</strong>: preses, constants i observacions, al costat del llit, <strong>en este mateix telèfon</strong>. Funciona sense connexió; quan l\'ordinador s\'encén, les dades pugen soles.'},
  {tit:'Saber-ne més',txt:'Els números del projecte: <strong>deu anys d\'història clínica</strong> convertits en dades, els mòduls, els PDF llegits. I la carta d\'identitat: llicència lliure GNU GPL i DOI científic. Ací es respon «què és Salufolio?».'},
  {tit:'Contacte',txt:'La seua veu. Un formulari senzill per a <strong>escriure a l\'autor</strong>: un dubte, una fallada, una idea. Els comentaris es guarden i s\'envien quan vosté ho decidix.'},
  {tit:'Salufolio — el centre',txt:'El cor de la casa: <strong>l\'expedient mèdic complet</strong>, un únic arxiu que s\'explica sol. Totes les portes hi porten o n\'ixen. <em>Preferix una pantalla gran: en el telèfon li quedarà estret.</em>'},
  {tit:'L\'abella',txt:'Veu l\'abella davall? <strong>Canvia de pis</strong>. Acabem de baixar al taller: les <strong>ferramentes</strong> que fabriquen i vigilen l\'expedient. Seguïsca\'m.'},
  {tit:'Protocolo',txt:'L\'aplicació del mòbil, de cos sencer: el <strong>QR per a instal·lar-la</strong> quan el seu ordinador la servix, i l\'accés directe quan no. És la mateixa porta que «Cuidador» — vista des del taller.'},
  {tit:'Informe exprés',txt:'<strong>La pantalla del metge en un gest.</strong> Per a la consulta que comença en dos minuts: l\'essencial de l\'expedient, llest per a ensenyar, sense buscar res.'},
  {tit:'Auditoria',txt:'El jutge de pau de l\'expedient. Assenyala <strong>el que no quadra</strong>: diagnòstics sense anàlisis que els recolzen, valors impossibles, duplicats. L\'auditoria assenyala; <strong>el juí és humà</strong>.'},
  {tit:'Farmacovigilància',txt:'<em>En construcció.</em> Connectarà cada medicament amb la <strong>base pública CIMA/AEMPS</strong>: marca i genèric, duplicitats de principi actiu, interaccions. El taller ja té els plànols.'},
  {tit:'Assaig clínic',txt:'<em>Mòdul futur.</em> Visites, esdeveniments adversos i segell de temps segons <strong>GCP · ICH E6</strong>: l\'expedient obert a la investigació — l\'ús que més demanen els professionals.'},
  {tit:'ModularBuilder',txt:'On es fabrica tot: <strong>79 mòduls acoblats en un arxiu únic</strong>. I l\'Extractor: del paper a la dada — llig els PDF i els convertix en valors datats amb la seua font. <em>Salufolio no inventa res.</em>'},
  {tit:'Fi de la visita',txt:'Ja coneix la casa. En els buits: la <strong>bandera</strong> canvia l\'idioma, les <strong>fletxes</strong> omplin la pantalla. I un consell honest: el Protocolo està fet per a este telèfon; <strong>Salufolio preferix un ordinador</strong>.'}
 ],
 fr: [
  {tit:'Bienvenue au panal',txt:'Voici la maison de Salufolio : <strong>deux étages et sept portes par étage</strong>. En une minute vous saurez ce qu\'offre chacune et laquelle est la vôtre. Le film avance seul, lentement — <em>« Suivant » pour avancer, glissez le doigt en arrière pour revoir, ✕ pour sortir quand vous voulez.</em>'},
  {tit:'Patient',txt:'La porte de qui vit son histoire clinique. Elle ouvre Salufolio avec <strong>votre dossier au premier plan</strong> : analyses, comptes rendus et dates, ordonnés et expliqués. Vos données vivent sur votre appareil — jamais dans un nuage.'},
  {tit:'Professionnel',txt:'La porte du médecin ou de l\'infirmier. Elle ouvre Salufolio en <strong>vue complète</strong> : toute l\'histoire longitudinale, les valeurs comparées au fil des années, les sources à portée de doigt. Pensée pour la consultation.'},
  {tit:'Aidant',txt:'La porte de qui soigne au quotidien. Elle ouvre le <strong>Protocolo</strong> : prises, constantes et observations, au chevet, <strong>sur ce téléphone même</strong>. Il fonctionne sans connexion ; quand l\'ordinateur s\'allume, les données montent seules.'},
  {tit:'En savoir plus',txt:'Les chiffres du projet : <strong>dix ans d\'histoire clinique</strong> convertis en données, les modules, les PDF lus. Et la carte d\'identité : licence libre GNU GPL et DOI scientifique. C\'est ici qu\'on répond à « qu\'est-ce que Salufolio ? ».'},
  {tit:'Contact',txt:'Votre voix. Un formulaire simple pour <strong>écrire à l\'auteur</strong> : un doute, une panne, une idée. Les commentaires se gardent et s\'envoient quand vous le décidez.'},
  {tit:'Salufolio — le centre',txt:'Le cœur de la maison : <strong>le dossier médical complet</strong>, un fichier unique qui s\'explique seul. Toutes les portes y mènent ou en partent. <em>Il préfère un grand écran : sur le téléphone il sera à l\'étroit.</em>'},
  {tit:'L\'abeille',txt:'Vous voyez l\'abeille en bas ? <strong>Elle change d\'étage</strong>. Nous venons de descendre à l\'atelier : les <strong>outils</strong> qui fabriquent et surveillent le dossier. Suivez-moi.'},
  {tit:'Protocolo',txt:'L\'application du téléphone, en personne : le <strong>QR pour l\'installer</strong> quand votre ordinateur la sert, et l\'accès direct sinon. C\'est la même porte que « Aidant » — vue depuis l\'atelier.'},
  {tit:'Rapport express',txt:'<strong>L\'écran du médecin en un geste.</strong> Pour la consultation qui commence dans deux minutes : l\'essentiel du dossier, prêt à montrer, sans rien chercher.'},
  {tit:'Audit',txt:'Le juge de paix du dossier. Il signale <strong>ce qui ne cadre pas</strong> : diagnostics sans analyses pour les étayer, valeurs impossibles, doublons. L\'audit signale ; <strong>le jugement est humain</strong>.'},
  {tit:'Pharmacovigilance',txt:'<em>En construction.</em> Elle reliera chaque médicament à la <strong>base publique CIMA/AEMPS</strong> : marque et générique, doublons de principe actif, interactions. L\'atelier a déjà les plans.'},
  {tit:'Essai clinique',txt:'<em>Module futur.</em> Visites, événements indésirables et horodatage selon <strong>GCP · ICH E6</strong> : le dossier ouvert à la recherche — l\'usage que les professionnels demandent le plus.'},
  {tit:'ModularBuilder',txt:'Là où tout se fabrique : <strong>79 modules assemblés en un fichier unique</strong>. Et l\'Extracteur : du papier à la donnée — il lit les PDF et les convertit en valeurs datées avec leur source. <em>Salufolio n\'invente rien.</em>'},
  {tit:'Fin de la visite',txt:'Vous connaissez la maison. Dans les creux : le <strong>drapeau</strong> change la langue, les <strong>flèches</strong> remplissent l\'écran. Et un conseil honnête : le Protocolo est fait pour ce téléphone ; <strong>Salufolio préfère un ordinateur</strong>.'}
 ],
 en: [
  {tit:'Welcome to the hive',txt:'This is Salufolio\'s house: <strong>two floors and seven doors per floor</strong>. In one minute you will know what each one offers and which one is yours. The film moves on its own, slowly — <em>"Next" to go forward, swipe back to review, ✕ to leave whenever you wish.</em>'},
  {tit:'Patient',txt:'The door for the person living their own medical history. It opens Salufolio with <strong>your records up front</strong>: lab results, reports and dates, ordered and explained. Your data lives on your device — never in a cloud.'},
  {tit:'Professional',txt:'The door for the doctor or nurse. It opens Salufolio in <strong>full view</strong>: the whole longitudinal history, values compared across the years, sources one tap away. Made for the consultation.'},
  {tit:'Caregiver',txt:'The door for the person who cares day by day. It opens the <strong>Protocolo</strong>: doses, vital signs and notes, at the bedside, <strong>on this very phone</strong>. It works offline; when the computer turns on, the data goes up by itself.'},
  {tit:'Learn more',txt:'The project\'s numbers: <strong>ten years of medical history</strong> turned into data, the modules, the PDFs read. And the identity card: free GNU GPL license and a scientific DOI. This is where "what is Salufolio?" gets answered.'},
  {tit:'Contact',txt:'Your voice. A simple form to <strong>write to the author</strong>: a doubt, a bug, an idea. Comments are kept and sent when you decide.'},
  {tit:'Salufolio — the center',txt:'The heart of the house: <strong>the complete medical record</strong>, a single file that explains itself. Every door leads to it or comes from it. <em>It prefers a large screen: on a phone it will feel cramped.</em>'},
  {tit:'The bee',txt:'See the bee below? <strong>It changes floors</strong>. We have just gone down to the workshop: the <strong>tools</strong> that build and watch over the record. Follow me.'},
  {tit:'Protocolo',txt:'The phone application in person: the <strong>QR to install it</strong> when your computer serves it, and direct access otherwise. It is the same door as "Caregiver" — seen from the workshop.'},
  {tit:'Express report',txt:'<strong>The doctor\'s screen in one gesture.</strong> For the consultation starting in two minutes: the essentials of the record, ready to show, nothing to search.'},
  {tit:'Audit',txt:'The record\'s justice of the peace. It flags <strong>what does not add up</strong>: diagnoses without supporting tests, impossible values, duplicates. The audit flags; <strong>the judgment is human</strong>.'},
  {tit:'Pharmacovigilance',txt:'<em>Under construction.</em> It will link every medicine to the <strong>public CIMA/AEMPS database</strong>: brand and generic, duplicated active substances, interactions. The workshop already has the plans.'},
  {tit:'Clinical trial',txt:'<em>Future module.</em> Visits, adverse events and timestamps following <strong>GCP · ICH E6</strong>: the record open to research — the use professionals ask for most.'},
  {tit:'ModularBuilder',txt:'Where everything is built: <strong>79 modules assembled into a single file</strong>. And the Extractor: from paper to data — it reads the PDFs and turns them into dated values with their source. <em>Salufolio invents nothing.</em>'},
  {tit:'End of the tour',txt:'You know the house now. In the notches: the <strong>flag</strong> changes the language, the <strong>arrows</strong> fill the screen. And one honest piece of advice: the Protocolo is made for this phone; <strong>Salufolio prefers a computer</strong>.'}
 ]
};
