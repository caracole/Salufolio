/* ══════════════════════════════════════════════════════════════════════
   LAS INTERACCIONES MEDICAMENTOSAS
   /Salufolio/medicamentos/interacciones.js

   Fuente: ANSM — Thesaurus des interactions medicamenteuses (sept. 2023)
   con sus indices de clases y de sustancias.

   Cuatro niveles, y para cada interaccion: la NATURALEZA DEL RIESGO y la
   CONDUCTA A SEGUIR — separadas, como en el documento original.

   ESTE ANALISIS ES INFORMATIVO Y NO SUSTITUYE EL CRITERIO MEDICO.
   ══════════════════════════════════════════════════════════════════════ */
var SF_INTERACCIONES = window.SF_INTERACCIONES = {
 "_fuente": "ANSM — Thesaurus des interactions medicamenteuses, septiembre 2023.\nAgence nationale de securite du medicament (Francia). Documento oficial.\nPara Espana, la referencia es CIMA/AEMPS: las fichas tecnicas de cada medicamento.\n\nESTE ANALISIS ES INFORMATIVO Y NO SUSTITUYE EL CRITERIO MEDICO.",
 "_criterio": "Una interaccion solo se recoge si tiene traduccion clinica significativa: provocar o aumentar efectos indeseables, o reducir la eficacia del tratamiento. Un programa que avisa de todo es un programa que no se escucha.",
 "version": "ANSM-2023.09-d",
 "niveles": {
  "contraindicacion": {
   "orden": 1,
   "es": "Contraindicación",
   "fr": "Contre-indication",
   "que": {
    "es": "Carácter absoluto. No debe transgredirse.",
    "fr": "Caractère absolu. Ne doit pas être transgressée."
   }
  },
  "desaconsejada": {
   "orden": 2,
   "es": "Asociación desaconsejada",
   "fr": "Association déconseillée",
   "que": {
    "es": "Debe evitarse, salvo tras examen del balance beneficio/riesgo. Impone vigilancia estrecha.",
    "fr": "Doit être évitée, sauf après examen du rapport bénéfice/risque. Impose une surveillance étroite."
   }
  },
  "precaucion": {
   "orden": 3,
   "es": "Precaución de empleo",
   "fr": "Précaution d'emploi",
   "que": {
    "es": "El caso más frecuente. La asociación es posible respetando las recomendaciones, sobre todo al principio del tratamiento.",
    "fr": "Le cas le plus fréquent. L'association est possible en respectant les recommandations, notamment en début de traitement."
   }
  },
  "tener_en_cuenta": {
   "orden": 4,
   "es": "A tener en cuenta",
   "fr": "À prendre en compte",
   "que": {
    "es": "El riesgo existe, casi siempre por adición de efectos indeseables. Corresponde al médico valorar la oportunidad.",
    "fr": "Le risque existe, le plus souvent par addition d'effets indésirables. Il revient au médecin d'évaluer l'opportunité."
   }
  }
 },
 "interacciones": {
  "rivaroxaban": [
   {
    "con": "FLUCONAZOLE",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation des concentrations plasmatiques du rivaroxaban par le fluconazole, avec majoration du risque de saignement.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "INDUCTEURS ENZYMATIQUES PUISSANTS",
    "nivel": "desaconsejada",
    "riesgo": "Diminution des concentrations plasmatiques de rivaroxaban, avec risque de diminution de l'effet thérapeutique.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "INHIBITEURS PUISSANTS DU CYP3A4",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation des concentrations plasmatiques de rivaroxaban, avec majoration du risque de saignement.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "RIFAMPICINE",
    "nivel": "desaconsejada",
    "riesgo": "Diminution des concentrations plasmatiques de rivaroxaban, avec risque de diminution de l'effet thérapeutique.",
    "conducta": "",
    "varios": false
   }
  ],
  "furosemida": [
   {
    "con": "PHÉNYTOÏNE (ET, PAR EXTRAPOLATION, FOSPHÉNYTOÏNE)",
    "nivel": "precaucion",
    "riesgo": "Diminution de l'effet diurétique pouvant atteindre 50 %. Utiliser éventuellement des doses plus élevées de furosémide.",
    "conducta": "",
    "varios": false
   }
  ],
  "paracetamol": [
   {
    "con": "ANTIVITAMINES K",
    "nivel": "precaucion",
    "riesgo": "Risque d’augmentation de l’effet de l’antivitamine K et du risque hémorragique en cas de prise de paracétamol aux doses maximales (4 g/j) pendant au moins 4 jours. son arrêt.",
    "conducta": "Contrôle plus fréquent de l’INR. Adaptation éventuelle de la posologie de l’antivitamine K pendant le traitement par le paracétamol et après",
    "varios": false
   },
   {
    "con": "FLUCLOXACILLINE",
    "nivel": "desaconsejada",
    "riesgo": "Risque accru d'acidose métabolique à trou anionique élevé, notamment en cas d'insuffisance rénale sévère, de sepsis, de facteurs prédisposant à la déplétion en glutathion (malnutrition, alcoolisme chronique…), ainsi qu’en cas d’utilisation de paracétamol aux doses quotidiennes maximales.",
    "conducta": "Si l’association ne peut être évitée, surveillance étroite avec mesure de la 5-oxoproline urinaire.",
    "varios": false
   }
  ],
  "haloperidol": [
   {
    "con": "INDUCTEURS ENZYMATIQUES PUISSANTS",
    "nivel": "precaucion",
    "riesgo": "Risque de moindre efficacité de l'halopéridol par augmentation de son métabolisme hépatique par l'inducteur. traitement par l'halopéridol et après son arrêt.",
    "conducta": "Surveillance clinique et, si besoin, adaptation posologique pendant le",
    "varios": false
   },
   {
    "con": "RIFAMPICINE",
    "nivel": "precaucion",
    "riesgo": "Risque de diminution des concentrations plasmatiques de l'halopéridol et de son efficacité thérapeutique, par augmentation de son métabolisme hépatique par la rifampicine.",
    "conducta": "Surveillance clinique et, si besoin, adaptation posologique pendant le traitement par la rifampicine et après son arrêt.",
    "varios": false
   }
  ],
  "omeprazol": [
   {
    "con": "ANAGRELIDE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Risque de moindre efficacité de l'anagrélide par augmentation de son métabolisme par l'oméprazole.",
    "conducta": "Préférer un autre inhibiteur de la pompe à protons.",
    "varios": false
   },
   {
    "con": "APALUTAMIDE",
    "nivel": "desaconsejada",
    "riesgo": "Risque de diminution très importante des concentrations de l'oméprazole, et perte d‘efficacité, par augmentation de son métabolisme hépatique par l’apalutamide.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "DIGOXINE",
    "nivel": "precaucion",
    "riesgo": "Augmentation modérée de la digoxinémie par majoration de son absorption par l'oméprazole. le sujet âgé.",
    "conducta": "Surveillance clinique, ECG et de la digoxinémie, particulièrement chez",
    "varios": false
   },
   {
    "con": "ESCITALOPRAM",
    "nivel": "precaucion",
    "riesgo": "Risque majoré de troubles du rythme ventriculaire, notamment de torsades de pointes.",
    "conducta": "Surveillance clinique et électrocardiographique pendant l'association.",
    "varios": false
   },
   {
    "con": "TACROLIMUS",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations sanguines du tacrolimus. Dosage des concentrations sanguines du tacrolimus, contrôle de la fonction rénale et adaptation de la posologie pendant l'association et après son arrêt.",
    "conducta": "",
    "varios": false
   }
  ],
  "alprazolam": [
   {
    "con": "INHIBITEURS PUISSANTS DU CYP3A4",
    "nivel": "tener_en_cuenta",
    "riesgo": "Possible augmentation de l'effet sédatif de l'alprazolam.",
    "conducta": "",
    "varios": false
   }
  ],
  "diazepam": [
   {
    "con": "BUSPIRONE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Risque de majoration des effets indésirables de la buspirone.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "CIMETIDINE",
    "nivel": "precaucion",
    "riesgo": "Avec la cimétidine utilisée à des doses supérieures ou égales à 800 mg/j : risque accru de somnolence. automobile ou d'utilisation de machines.",
    "conducta": "Avertir les patients de l'augmentation du risque en cas de conduite",
    "varios": false
   },
   {
    "con": "PHÉNYTOÏNE (ET, PAR EXTRAPOLATION, FOSPHÉNYTOÏNE)",
    "nivel": "precaucion",
    "riesgo": "Variations imprévisibles : les concentrations plasmatiques de phénytoïne peuvent augmenter, avec signes de surdosage, mais aussi diminuer ou rester stables.",
    "conducta": "Surveillance clinique et contrôle des concentrations plasmatiques de phénytoïne.",
    "varios": false
   },
   {
    "con": "STIRIPENTOL",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques du diazépam, avec risque de surdosage, par inhibition de son métabolisme hépatique. de l'anticonvulsivant associé au stiripentol et éventuelle adaptation posologique de l'anticonvulsivant associé.",
    "conducta": "Surveillance clinique et dosage plasmatique, lorsque cela est possible,",
    "varios": false
   }
  ],
  "losartan": [
   {
    "con": "FLUCONAZOLE",
    "nivel": "tener_en_cuenta",
    "riesgo": "formation de son métabolite actif par le fluconazole.",
    "conducta": "",
    "varios": false
   }
  ],
  "simvastatina": [
   {
    "con": "AMIODARONE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse (diminution du métabolisme hépatique de la simvastatine).",
    "conducta": "Ne pas dépasser la posologie de 20 mg/j de simvastatine ou utiliser une autre statine non concernée par ce type d’interaction.",
    "varios": false
   },
   {
    "con": "AMLODIPINE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d’effets indésirables (dose-dépendants) à type de rhabdomyolyse (diminution du métabolisme hépatique de l’hypocholestérolémiant).",
    "conducta": "Ne pas dépasser la posologie de 20 mg/j de simvastatine ou utiliser une autre statine non concernée par ce type d’interaction.",
    "varios": false
   },
   {
    "con": "APALUTAMIDE",
    "nivel": "desaconsejada",
    "riesgo": "Risque de diminution très importante des concentrations de la simvastatine, et perte d‘efficacité, par augmentation de son métabolisme hépatique par l’apalutamide.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "AZITHROMYCINE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse, par diminution du métabolisme hépatique de l'hypocholestérolémiant.",
    "conducta": "Utiliser des doses plus faibles d’hypocholestérolémiant ou une autre statine non concernée par ce type d’interaction.",
    "varios": false
   },
   {
    "con": "CARBAMAZEPINE",
    "nivel": "desaconsejada",
    "riesgo": "Diminution importante des concentrations plasmatiques de simvastatine, par augmentation de son métabolisme hépatique.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "CICLOSPORINE",
    "nivel": "contraindicacion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse par diminution du métabolisme de la simvastatine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "DANAZOL",
    "nivel": "contraindicacion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse par diminution du métabolisme de la simvastatine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "DILTIAZEM",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse, par diminution du métabolisme hépatique de l'hypocholestérolémiant. autre statine non concernée par ce type d'interaction.",
    "conducta": "Ne pas dépasser la posologie de 20 mg/jour de simvastatine. Si l'objectif thérapeutique n'est pas atteint à cette posologie, utiliser une",
    "varios": false
   },
   {
    "con": "DRONEDARONE",
    "nivel": "desaconsejada",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse (diminution du métabolisme hépatique de la simvastatine).",
    "conducta": "",
    "varios": false
   },
   {
    "con": "FLUCONAZOLE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables concentration-dépendants à type de rhabdomyolyse (diminution du métabolisme hépatique de la simvastatine). par ce type d’interaction.",
    "conducta": "Ne pas dépasser la posologie de 20 mg/j de simvastatine. Si l'objectif thérapeutique n'est pas atteint, utiliser une autre statine non concernée",
    "varios": false
   },
   {
    "con": "GLÉCAPRÉVIR + PIBRENTASVIR",
    "nivel": "contraindicacion",
    "riesgo": "Augmentation importante des concentrations plasmatiques de simvastatine par la bithérapie, avec risque majoré d’effets indésirables (concentration-dépendants) à type de rhabdomyolyses .",
    "conducta": "",
    "varios": false
   },
   {
    "con": "INHIBITEURS PUISSANTS DU CYP3A4",
    "nivel": "contraindicacion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse par diminution du métabolisme de la simvastatine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "MILLEPERTUIS",
    "nivel": "desaconsejada",
    "riesgo": "Diminution de l’efficacité de l’hypocholestérolémiant par augmentation de son métabolisme hépatique par le millepertuis.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "OMBITASVIR + PARITAPRÉVIR",
    "nivel": "contraindicacion",
    "riesgo": "Augmentation des concentrations plasmatiques de la simvastatine par diminution de son métabolisme hépatique par la bithérapie.",
    "conducta": "",
    "varios": false
   }
  ],
  "azitromicina": [
   {
    "con": "ATORVASTATINE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse, par diminution du métabolisme hépatique de l'hypocholestérolémiant.",
    "conducta": "Utiliser des doses plus faibles d’hypocholestérolémiant ou une autre statine non concernée par ce type d’interaction.",
    "varios": false
   },
   {
    "con": "CICLOSPORINE",
    "nivel": "precaucion",
    "riesgo": "Risque d'augmentation des concentrations sanguines de ciclosporine et de la créatininémie. fonction rénale et adaptation de la posologie pendant l'association et après l'arrêt du macrolide.",
    "conducta": "Dosage des concentrations sanguines de la ciclosporine, contrôle de la",
    "varios": false
   },
   {
    "con": "IVABRADINE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré de troubles du rythme ventriculaires, notamment de torsades de pointes. De plus, risque d'augmentation des concentrations plasmatiques de l’ivabradine par augmentation de son absorption par l’azithromycine.",
    "conducta": "Surveillance clinique et ECG pendant l’association.",
    "varios": false
   },
   {
    "con": "SIMVASTATINE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse, par diminution du métabolisme hépatique de l'hypocholestérolémiant.",
    "conducta": "Utiliser des doses plus faibles d’hypocholestérolémiant ou une autre statine non concernée par ce type d’interaction.",
    "varios": false
   },
   {
    "con": "SUBSTANCES SUSCEPTIBLES DE DONNER DES TORSADES DE POINTES",
    "nivel": "precaucion",
    "riesgo": "Risque majoré de troubles du rythme ventriculaire, notamment de torsades de pointes.",
    "conducta": "Surveillance clinique et électrocardiographique pendant l'association.",
    "varios": false
   }
  ],
  "claritromicina": [
   {
    "con": "ATAZANAVIR",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de clarithromycine et inhibition de la formation de son métabolite actif. d'association.",
    "conducta": "Surveillance clinique et biologique régulière, notamment en début",
    "varios": false
   },
   {
    "con": "ATORVASTATINE",
    "nivel": "precaucion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse, par diminution du métabolisme hépatique de l'hypocholesterolémiant. par ce type d'interaction.",
    "conducta": "Utiliser des doses plus faibles d'hypocholestérolémiant. Si l'objectif thérapeutique n'est pas atteint, utiliser une autre statine non concernée",
    "varios": false
   },
   {
    "con": "CARBAMAZEPINE",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de carbamazépine avec signes de surdosage, par inhibition de son métabolisme hépatique.",
    "conducta": "Surveillance clinique et réduction éventuelle de la posologie de la carbamazépine.",
    "varios": false
   },
   {
    "con": "ETRAVIRINE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Dans le traitement des infections à Mycobacterium avium complex, risque de diminution de l’efficacité de la clarithromycine par augmentation de son métabolisme hépatique par l’étravirine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "FIDAXOMICINE",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation des concentrations plasmatiques de la fidaxomicine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "IMMUNOSUPPRESSEURS",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation très importante des concentrations sanguines de l'immunosuppresseur par inhibition de son métabolisme hépatique. concentrations sanguines de l'immunosuppresseur et adaptation éventuelle de la posologie.",
    "conducta": "En cas d’association, contrôle strict de la fonction rénale, dosage des",
    "varios": false
   },
   {
    "con": "INHIBITEURS DE PROTÉASES BOOSTÉS PAR RITONAVIR",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations de la clarithromycine et de son métabolite actif par diminution de son métabolisme hépatique par l'inhibiteur de protéases.",
    "conducta": "Surveillance clinique et biologique régulière, notamment en début d'association.",
    "varios": false
   },
   {
    "con": "LINEZOLIDE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Risque de majoration des effets indésirables du linézolide par la clarithromycine, par augmentation de son absorption.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "PRAVASTATINE",
    "nivel": "precaucion",
    "riesgo": "Augmentation de la concentration plasmatique de la pravastatine par la clarithromycine. l'antibiotique.",
    "conducta": "Surveillance clinique et biologique pendant le traitement par",
    "varios": false
   }
  ],
  "ciprofloxacino": [
   {
    "con": "AGOMELATINE",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation des concentrations d'agomélatine, avec risque de majoration des effets indésirables.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "CAFEINE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Augmentation des concentrations plasmatiques de caféine, par diminution de son métabolisme hépatique.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "CALCIUM",
    "nivel": "precaucion",
    "riesgo": "Diminution de l'absorption digestive de la ciprofloxacine. Prendre les sels de calcium à distance de la ciprofloxacine (plus de 2 heures, si possible).",
    "conducta": "",
    "varios": false
   },
   {
    "con": "CLOZAPINE",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations de clozapine avec risque de surdosage, par diminution de son métabolisme hépatique par la ciprofloxacine.",
    "conducta": "Surveillance clinique et réduction éventuelle de la posologie de la clozapine pendant le traitement par la ciprofloxacine et après son arrêt.",
    "varios": false
   },
   {
    "con": "METHOTREXATE",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation de la toxicité du méthotrexate par inhibition de sa sécrétion tubulaire rénale par la ciprofloxacine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "PHÉNYTOÏNE (ET, PAR EXTRAPOLATION, FOSPHÉNYTOÏNE)",
    "nivel": "precaucion",
    "riesgo": "Variation, éventuellement importante, des concentrations de phénytoïne en cas de traitement par la ciprofloxacine. l’anticonvulsivant pendant le traitement par ciprofloxacine et après son arrêt.",
    "conducta": "Surveillance clinique et contrôle des concentrations plasmatiques de",
    "varios": false
   },
   {
    "con": "ROPINIROLE",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations de ropinirole avec risque de surdosage, par diminution de son métabolisme hépatique par la ciprofloxacine.",
    "conducta": "Surveillance clinique et réduction éventuelle de la posologie du ropinirole pendant le traitement par la ciprofloxacine et après son arrêt.",
    "varios": false
   }
  ],
  "levofloxacino": [
   {
    "con": "SUBSTANCES SUSCEPTIBLES DE DONNER DES TORSADES DE POINTES",
    "nivel": "precaucion",
    "riesgo": "Risque majoré de troubles du rythme ventriculaire, notamment de torsades de pointes. l'association.",
    "conducta": "Surveillance clinique et électrocardiographique pendant",
    "varios": false
   }
  ],
  "doxiciclina": [
   {
    "con": "INDUCTEURS ENZYMATIQUES PUISSANTS",
    "nivel": "tener_en_cuenta",
    "riesgo": "Risque de diminution importante des concentrations de doxycycline.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "RIFAMPICINE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Risque de diminution importante des concentrations de doxycycline.",
    "conducta": "",
    "varios": false
   }
  ],
  "metronidazol": [
   {
    "con": "BUSULFAN",
    "nivel": "desaconsejada",
    "riesgo": "Avec le busulfan à fortes doses : doublement des concentrations de busulfan par le métronidazole.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "DISULFIRAME",
    "nivel": "desaconsejada",
    "riesgo": "Risque d’épisodes de psychose aiguë ou d’état confusionnel, réversibles à l’arrêt de l’association.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "FLUOROURACILE (ET, PAR EXTRAPOLATION, AUTRES FLUOROPYRIMIDINES)",
    "nivel": "tener_en_cuenta",
    "riesgo": "Augmentation de la toxicité du fluoro-uracile par diminution de sa clairance.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "INDUCTEURS ENZYMATIQUES PUISSANTS",
    "nivel": "precaucion",
    "riesgo": "Diminution des concentrations plasmatiques du métronidazole par augmentation de son métabolisme hépatique par l’inducteur. métronidazole pendant le traitement par l’inducteur et après son arrêt.",
    "conducta": "Surveillance clinique et adaptation éventuelle de la posologie de",
    "varios": false
   },
   {
    "con": "LITHIUM",
    "nivel": "precaucion",
    "riesgo": "Augmentation de la lithémie pouvant atteindre des valeurs toxiques, avec signes de surdosage en lithium. posologie du lithium.",
    "conducta": "Surveillance stricte de la lithémie et adaptation éventuelle de la",
    "varios": false
   },
   {
    "con": "RIFAMPICINE",
    "nivel": "precaucion",
    "riesgo": "Diminution des concentrations plasmatiques du métronidazole par augmentation de son métabolisme hépatique par la rifampicine. métronidazole pendant le traitement par la rifampicine et après son arrêt.",
    "conducta": "Surveillance clinique et adaptation éventuelle de la posologie de",
    "varios": false
   }
  ],
  "fluoxetina": [
   {
    "con": "CARBAMAZEPINE",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de carbamazépine avec signes de surdosage. carbamazépine et réduction éventuelle de la posologie de la carbamazépine pendant le traitement par l'antidépresseur sérotoninergique et après son arrêt.",
    "conducta": "Surveillance clinique, contrôle des concentrations plasmatiques de",
    "varios": false
   },
   {
    "con": "CODEINE",
    "nivel": "desaconsejada",
    "riesgo": "Diminution de l’efficacité de l’opiacé par inhibition de son métabolisme par l’inhibiteur.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "MEQUITAZINE",
    "nivel": "desaconsejada",
    "riesgo": "Risque de majoration des effets indésirables de la méquitazine, par inhibition de son métabolisme par l’inhibiteur enzymatique.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "METOPROLOL",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables du métoprolol, avec notamment bradycardie excessive, par inhibition de son métabolisme par la fluoxétine. arrêt.",
    "conducta": "Surveillance clinique accrue ; si besoin, adaptation de la posologie du métoprolol pendant la durée du traitement par la fluoxétine et après son",
    "varios": false
   },
   {
    "con": "NEBIVOLOL",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables du nébivolol avec notamment bradycardie excessive, par inhibition de son métabolisme par l’antidépresseur. son arrêt.",
    "conducta": "Surveillance clinique accrue ; si besoin, adaptation de la posologie du nébivolol pendant la durée du traitement par l’antidépresseur et après",
    "varios": false
   },
   {
    "con": "PHÉNYTOÏNE (ET, PAR EXTRAPOLATION, FOSPHÉNYTOÏNE)",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de phénytoïne avec signes de surdosage, par inhibition du métabolisme de la phénytoïne. le traitement par la fluoxétine et après son arrêt.",
    "conducta": "Surveillance clinique et éventuellement contrôle des concentrations plasmatiques de phénytoïne. Si besoin, adaptation posologique pendant",
    "varios": false
   },
   {
    "con": "PIMOZIDE",
    "nivel": "contraindicacion",
    "riesgo": "Risque majoré de troubles du rythme ventriculaire, notamment de torsades de pointes.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "RISPERIDONE",
    "nivel": "precaucion",
    "riesgo": "Augmentation de la fraction active de la rispéridone par diminution de son métabolisme hépatique par la fluoxétine, avec risque de majoration des effets indésirables.",
    "conducta": "Surveillance clinique et, si besoin, adaptation posologique de la rispéridone.",
    "varios": false
   },
   {
    "con": "TAMOXIFENE",
    "nivel": "desaconsejada",
    "riesgo": "Baisse de l’efficacité du tamoxifène, par inhibition de la formation de son métabolite actif par la fluoxétine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "TETRABENAZINE",
    "nivel": "contraindicacion",
    "riesgo": "Augmentation possiblement très importante de l’exposition des métabolites actifs de la tétrabénazine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "TRAMADOL",
    "nivel": "desaconsejada",
    "riesgo": "Diminution de l’efficacité de l’opiacé par inhibition de son métabolisme par l’inhibiteur.",
    "conducta": "",
    "varios": false
   }
  ],
  "paroxetina": [
   {
    "con": "CARBAMAZEPINE",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de carbamazépine avec signes de surdosage. carbamazépine et réduction éventuelle de la posologie de la carbamazépine pendant le traitement par l'antidépresseur sérotoninergique et après son arrêt.",
    "conducta": "Surveillance clinique, contrôle des concentrations plasmatiques de",
    "varios": false
   },
   {
    "con": "CODEINE",
    "nivel": "desaconsejada",
    "riesgo": "Diminution de l’efficacité de l’opiacé par inhibition de son métabolisme par l’inhibiteur.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "MEQUITAZINE",
    "nivel": "desaconsejada",
    "riesgo": "Risque de majoration des effets indésirables de la méquitazine, par inhibition de son métabolisme par l’inhibiteur enzymatique.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "METOPROLOL",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables du métoprolol, avec notamment bradycardie excessive, par inhibition de son métabolisme par la paroxétine. son arrêt.",
    "conducta": "Surveillance clinique accrue ; si besoin, adaptation de la posologie du métoprolol pendant la durée du traitement par la paroxétine et après",
    "varios": false
   },
   {
    "con": "NEBIVOLOL",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables du nébivolol avec notamment bradycardie excessive, par inhibition de son métabolisme par l’antidépresseur. son arrêt.",
    "conducta": "Surveillance clinique accrue ; si besoin, adaptation de la posologie du nébivolol pendant la durée du traitement par l’antidépresseur et après",
    "varios": false
   },
   {
    "con": "PIMOZIDE",
    "nivel": "contraindicacion",
    "riesgo": "Risque majoré de troubles du rythme ventriculaire, notamment de torsades de pointes.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "RISPERIDONE",
    "nivel": "precaucion",
    "riesgo": "Augmentation de la fraction active de la rispéridone par diminution de son métabolisme hépatique par la paroxétine, avec risque de majoration des effets indésirables.",
    "conducta": "Surveillance clinique et, si besoin, adaptation posologique de la rispéridone.",
    "varios": false
   },
   {
    "con": "TAMOXIFENE",
    "nivel": "desaconsejada",
    "riesgo": "Baisse de l’efficacité du tamoxifène, par inhibition de la formation de son métabolite actif par la paroxétine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "TETRABENAZINE",
    "nivel": "contraindicacion",
    "riesgo": "Augmentation possiblement très importante de l’exposition des métabolites actifs de la tétrabénazine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "TRAMADOL",
    "nivel": "desaconsejada",
    "riesgo": "Diminution de l’efficacité de l’opiacé par inhibition de son métabolisme par l’inhibiteur.",
    "conducta": "",
    "varios": false
   }
  ],
  "dutasteride tamsulosina": [
   {
    "con": "AMIODARONE",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables de la tamsulosine, par inhibition de son métabolisme hépatique. pendant le traitement par l’inhibiteur enzymatique et après son arrêt, le cas échéant.",
    "conducta": "Surveillance clinique et adaptation de la posologie de la tamsulosine",
    "varios": false
   },
   {
    "con": "DILTIAZEM",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables de la tamsulosine, par inhibition de son métabolisme hépatique. pensant le traitement par l’inhibiteur enzymatique et après son arrêt, le cas échéant.",
    "conducta": "Surveillance clinique et adaptation de la posologie de la tamsulosine",
    "varios": false
   },
   {
    "con": "INHIBITEURS PUISSANTS DU CYP3A4",
    "nivel": "desaconsejada",
    "riesgo": "Risque de majoration des effets indésirables de la tamsulosine, par inhibition de son métabolisme hépatique.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "VERAPAMIL",
    "nivel": "precaucion",
    "riesgo": "Risque de majoration des effets indésirables de la tamsulosine, par inhibition de son métabolisme hépatique. pensant le traitement par l’inhibiteur enzymatique et après son arrêt, le cas échéant.",
    "conducta": "Surveillance clinique et adaptation de la posologie de la tamsulosine",
    "varios": false
   }
  ],
  "acido acetilsalicilico": [
   {
    "con": "ACETAZOLAMIDE",
    "nivel": "desaconsejada",
    "riesgo": "Majoration des effets indésirables, et notamment de l'acidose métabolique, de l'acide acétylsalicylique à doses élevées et de l'acétazolamide, par diminution de l'élimination de l'acide acétylsalicylique par l'acétazolamide.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "ANTAGONISTES DES RÉCEPTEURS DE L'ANGIOTENSINE II",
    "nivel": "precaucion",
    "riesgo": "Pour des doses anti-inflammatoires d'acide acétylsalicylique (>= 1g par prise et/ou >= 3g par jour) ou pour des doses antalgiques ou antipyrétiques (>= 500 mg par prise et/ou < 3g par jour) : Insuffisance rénale aiguë chez le patient à risque (âgé, déshydraté, sous diurétiques, avec une fonction rénale altérée), par diminution de la filtration glomérulaire secondaire à une diminution de la synthèse des prostaglandines rénales. Par ailleurs, réduction de l'effet antihypertenseur.",
    "conducta": "Hydrater le malade et surveiller la fonction rénale en début de traitement et régulièrement pendant l’association.",
    "varios": false
   },
   {
    "con": "ANTICOAGULANTS ORAUX",
    "nivel": "contraindicacion",
    "riesgo": "Majoration du risque hémorragique, notamment en cas d’antécédent d’ulcère gastro-duodénal. - des doses anti-inflammatoires d'acide acétylsalicylique (>=1g par prise et/ou >=3g par jour) - des doses antalgiques ou antipyrétiques (>=500 mg par prise et/ou <3g par jour) et en cas d’antécédent d’ulcère gastro-duodénal - des doses antalgiques ou antipyrétiques (>=500 mg par prise et/ou <3g par jour) en l'absence d’antécédent d’ulcère gastro-duodénal - des doses antiagrégantes (de 50 mg à 375 mg par jour) et en cas d’antécédent d’ulcère gastro-duodénal. Nécessité d'un contrôle le cas échéant, en particulier du temps de saignement. - des doses antiagrégantes (de 50 mg à 375 mg par jour)",
    "conducta": "",
    "varios": true
   },
   {
    "con": "ANTI-INFLAMMATOIRES NON STÉROÏDIENS",
    "nivel": "desaconsejada",
    "riesgo": "Majoration du risque ulcérogène et hémorragique digestif. - des doses anti-inflammatoires d'acide acétylsalicylique (>=1g par prise et/ou >=3g par jour) - des doses antalgiques ou antipyrétiques (>=500 mg par prise et/ou <3g par jour) - des doses antiagrégantes (de 50 mg à 375 mg par jour en 1 ou plusieurs prises)",
    "conducta": "",
    "varios": true
   },
   {
    "con": "CLOPIDOGREL",
    "nivel": "desaconsejada",
    "riesgo": "Majoration du risque hémorragique par addition des activités antiagrégantes plaquettaires. - en dehors des indications validées pour cette association dans les syndromes coronariens aigus. - dans les indications validées pour cette association dans les syndromes coronariens aigus. Surveillance clinique.",
    "conducta": "",
    "varios": true
   },
   {
    "con": "DEFERASIROX",
    "nivel": "tener_en_cuenta",
    "riesgo": "Majoration du risque ulcérogène et hémorragique digestif. - Pour des doses anti-inflammatoires d'acide acétylsalicylique ( 1g par prise et/ou 3g par jour) - Pour des doses antalgiques ou antipyrétiques d'acide acétylsalicylique ( 500 mg par prise et/ou <3g par jour) et ( 500 mg par prise et/ou <3g par jour)",
    "conducta": "",
    "varios": false
   },
   {
    "con": "DIURÉTIQUES",
    "nivel": "precaucion",
    "riesgo": "Pour des doses anti-inflammatoires d'acide acétylsalicylique (>= 1g par prise et/ou >= 3g par jour) ou pour des doses antalgiques ou antipyrétiques (>= 500 mg par prise et/ou < 3g par jour) : Insuffisance rénale aiguë chez le patient à risque (âgé, déshydraté, avec une fonction rénale altérée), par diminution de la filtration glomérulaire secondaire à une diminution de la synthèse des prostaglandines rénales. Par ailleurs, réduction de l'effet antihypertenseur.",
    "conducta": "Hydrater le malade et surveiller la fonction rénale en début de traitement et régulièrement pendant l’association.",
    "varios": false
   }
  ],
  "metilprednisolona": [
   {
    "con": "ANTIVITAMINES K",
    "nivel": "precaucion",
    "riesgo": "Pour des doses de 0,5 à 1g de méthylprednisolone administrées en bolus : augmentation de l'effet de l'antivitamine K et du risque hémorragique.",
    "conducta": "Contrôle de l'INR 2 à 4 jours après le bolus de méthylprednisolone ou en présence de tous signes hémorragiques.",
    "varios": false
   },
   {
    "con": "CICLOSPORINE",
    "nivel": "tener_en_cuenta",
    "riesgo": "Avec la méthylprednisolone administrée par voie IV : augmentation possible des concentrations sanguines de ciclosporine et de la créatininémie. Mécanisme invoqué : diminution de l'élimination hépatique de la ciclosporine.",
    "conducta": "",
    "varios": false
   }
  ],
  "sulpirida": [
   {
    "con": "SUCRALFATE",
    "nivel": "precaucion",
    "riesgo": "Diminution de l'absorption digestive du sulpiride. Prendre le sucralfate à distance du sulpiride (plus de 2 heures, si possible).",
    "conducta": "",
    "varios": false
   }
  ],
  "rosuvastatina ezetimiba": [
   {
    "con": "CICLOSPORINE",
    "nivel": "contraindicacion",
    "riesgo": "Risque majoré d'effets indésirables (concentration-dépendants) à type de rhabdomyolyse, ou de néphrotoxicité, par diminution du métabolisme de la rosuvastatine.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "DAROLUTAMIDE",
    "nivel": "desaconsejada",
    "riesgo": "Augmentation considérable (d’un facteur 5) des concentrations de rosuvastatine avec risque de rhabdomyolyse et/ou de néphrotoxicité, par augmentation de sa biodisponibilité.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "FOSTAMATINIB",
    "nivel": "precaucion",
    "riesgo": "Doublement moyen des concentrations plasmatiques de la rosuvastatine. rosuvastatine si nécessaire.",
    "conducta": "Surveillance clinique et biologique, avec adaptation de la posologie de",
    "varios": false
   },
   {
    "con": "FOSTEMSAVIR",
    "nivel": "precaucion",
    "riesgo": "Augmentation modérée des concentrations de rosuvastatine. Débuter par la dose minimale de rosuvastatine. Surveillance clinique régulière.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "INHIBITEURS DE PROTÉASES BOOSTÉS PAR RITONAVIR",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de la rosuvastatine par augmentation de son absorption.",
    "conducta": "Surveillance clinique et biologique.",
    "varios": false
   }
  ],
  "miconazol": [
   {
    "con": "ANTIVITAMINES K",
    "nivel": "contraindicacion",
    "riesgo": "Hémorragies imprévisibles, éventuellement graves.",
    "conducta": "",
    "varios": false
   },
   {
    "con": "PHÉNYTOÏNE (ET, PAR EXTRAPOLATION, FOSPHÉNYTOÏNE)",
    "nivel": "precaucion",
    "riesgo": "Augmentation des concentrations plasmatiques de phénytoïne pouvant atteindre des valeurs toxiques, par inhibition du métabolisme hépatique de la phénytoïne. traitement par le miconazole et après son arrêt.",
    "conducta": "Surveillance clinique étroite, dosage des concentrations plasmatiques de phénytoïne et adaptation éventuelle de sa posologie pendant le",
    "varios": false
   },
   {
    "con": "SULFAMIDES HYPOGLYCÉMIANTS",
    "nivel": "contraindicacion",
    "riesgo": "Augmentation de l'effet hypoglycémiant avec survenue possible de manifestations hypoglycémiques, voire de coma.",
    "conducta": "",
    "varios": false
   }
  ],
  "dexametasona": [
   {
    "con": "PRAZIQUANTEL",
    "nivel": "precaucion",
    "riesgo": "Diminution des concentrations plasmatiques du praziquantel, avec risque d'échec du traitement, par augmentation du métabolisme hépatique du praziquantel par la dexaméthasone.",
    "conducta": "Décaler l'administration des deux médicaments d'au moins une semaine.",
    "varios": false
   },
   {
    "con": "RILPIVIRINE",
    "nivel": "contraindicacion",
    "riesgo": "Avec la dexaméthasone par voie systémique (sauf en cas de prise unique), risque de diminution des concentrations plasmatiques de rilpivirine par augmentation de son métabolisme hépatique par la dexamethasone.",
    "conducta": "",
    "varios": false
   }
  ],
  "ceftriaxona": [
   {
    "con": "ANTIVITAMINES K",
    "nivel": "precaucion",
    "riesgo": "Augmentation de l'effet de l'antivitamine K et du risque hémorragique. de l'antivitamine K pendant le traitement par la céphalosporine et après son arrêt.",
    "conducta": "Contrôle plus fréquent de l'INR. Adaptation éventuelle de la posologie",
    "varios": false
   }
  ]
 },
 "clases": {
  "Glécaprévir + pibrentasvir": [
   "Glécaprévir",
   "pibrentasvir"
  ],
  "IMAO irréversibles": [
   "iproniazide",
   "phénelzine"
  ],
  "IMAO-A réversibles, y compris oxazolidinones et bleu de méthylène": [
   "bleu de methylene",
   "linezolide",
   "moclobemide",
   "tédizolide"
  ],
  "IMAO-B": [
   "rasagiline",
   "safinamide",
   "selegiline"
  ],
  "adrénaline (voie bucco-dentaire ou sous-cutanée)": [
   "adrenaline"
  ],
  "alcalinisants urinaires": [
   "acetazolamide",
   "sodium (bicarbonate de)",
   "trometamol"
  ],
  "alcaloïdes de l'ergot de seigle dopaminergiques": [
   "bromocriptine",
   "cabergoline",
   "lisuride"
  ],
  "alcaloïdes de l'ergot de seigle vasoconstricteurs": [
   "dihydroergotamine",
   "ergotamine",
   "méthylergométrine"
  ],
  "alcool (boisson ou excipient)": [
   "anpu"
  ],
  "alphabloquants à visée urologique": [
   "alfuzosine",
   "doxazosine",
   "prazosine",
   "silodosine",
   "tamsulosine",
   "terazosine"
  ],
  "aluminium (sels)": [
   "gel d'hydroxyde d'aluminium et de carbonate de magnesium codesseches",
   "hydrotalcite",
   "magaldrate",
   "oxyde d'aluminium",
   "phosphate d'aluminium"
  ],
  "aminosides": [
   "amikacine",
   "gentamicine",
   "isepamicine",
   "netilmicine",
   "streptomycine",
   "tobramycine"
  ],
  "analgésiques morphiniques agonistes": [
   "alfentanil",
   "codeine",
   "dihydrocodeine",
   "fentanyl",
   "hydromorphone",
   "morphine",
   "oxycodone",
   "pethidine",
   "remifentanil",
   "sufentanil",
   "tapentadol",
   "tramadol"
  ],
  "analgésiques morphiniques de palier II": [
   "codeine",
   "dihydrocodeine",
   "tapentadol",
   "tramadol"
  ],
  "analgésiques morphiniques de palier III": [
   "alfentanil",
   "fentanyl",
   "hydromorphone",
   "morphine",
   "oxycodone",
   "pethidine",
   "remifentanil",
   "sufentanil"
  ],
  "analogues de la somatostatine": [
   "lanreotide",
   "octreotide",
   "pasiréotide"
  ],
  "androgènes": [
   "androstanolone",
   "norethandrolone",
   "testosterone"
  ],
  "anesthésiques volatils halogénés": [
   "desflurane",
   "halothane",
   "isoflurane",
   "methoxyflurane",
   "sevoflurane"
  ],
  "antabuse (réaction)": [
   "cefamandole",
   "disulfirame",
   "glibenclamide",
   "glipizide",
   "griseofulvine",
   "ketoconazole",
   "metronidazole",
   "ornidazole",
   "procarbazine",
   "secnidazole",
   "tenonitrozole",
   "tinidazole"
  ],
  "antagonistes des canaux calciques": [
   "amlodipine",
   "clévidipine",
   "diltiazem",
   "felodipine",
   "isradipine",
   "lacidipine",
   "lercanidipine",
   "manidipine",
   "nicardipine",
   "nifedipine",
   "nimodipine",
   "nitrendipine",
   "verapamil"
  ],
  "antagonistes des récepteurs de l'angiotensine II": [
   "azilsartan",
   "candesartan cilexetil",
   "eprosartan",
   "irbesartan",
   "losartan",
   "olmesartan",
   "telmisartan",
   "valsartan"
  ],
  "anti-TNF alpha": [
   "adalimumab",
   "certolizumab",
   "etanercept",
   "golimumab",
   "infliximab"
  ],
  "anti-inflammatoires non stéroïdiens": [
   "aceclofenac",
   "acide mefenamique",
   "acide niflumique",
   "acide tiaprofenique",
   "alminoprofene",
   "celecoxib",
   "dexketoprofene trometamol",
   "diclofenac",
   "etodolac",
   "étoricoxib",
   "fenoprofene",
   "flurbiprofene",
   "ibuprofene",
   "indometacine",
   "ketoprofene",
   "meloxicam",
   "morniflumate",
   "nabumetone",
   "naproxene",
   "nimesulide",
   "parecoxib",
   "piroxicam",
   "rofecoxib",
   "sulindac",
   "tenoxicam"
  ],
  "antiagrégants plaquettaires": [
   "abciximab (c 7e3b fab)",
   "acide acetylsalicylique",
   "cangrélor",
   "caplacizumab",
   "clopidogrel",
   "epoprostenol",
   "eptifibatide",
   "iloprost",
   "iloprost trometamol",
   "prasugrel",
   "proteine c activee recombinante",
   "proteine c humaine",
   "ticagrelor",
   "ticlopidine",
   "tirofiban",
   "treprostinil"
  ],
  "antiarythmiques": [
   "amiodarone",
   "cibenzoline",
   "diltiazem",
   "disopyramide",
   "dronedarone",
   "flecainide",
   "hydroquinidine",
   "lidocaine",
   "mexiletine",
   "propafenone",
   "quinidine",
   "sotalol",
   "verapamil"
  ],
  "antiarythmiques classe Ia": [
   "disopyramide",
   "hydroquinidine",
   "quinidine"
  ],
  "anticholinestérasiques": [
   "ambenonium",
   "donepezil",
   "galantamine",
   "neostigmine",
   "pyridostigmine",
   "rivastigmine"
  ],
  "anticoagulants oraux": [
   "acenocoumarol",
   "apixaban",
   "dabigatran",
   "édoxaban",
   "fluindione",
   "phenindione",
   "rivaroxaban",
   "warfarine"
  ],
  "anticonvulsivants métabolisés": [
   "acide valproique",
   "ethosuximide",
   "felbamate",
   "fosphenytoine",
   "lamotrigine",
   "oxcarbazepine",
   "pérampanel",
   "phenobarbital",
   "phenytoine",
   "primidone",
   "retigabine",
   "tiagabine",
   "topiramate",
   "valpromide",
   "zonisamide"
  ],
  "anticorps monoclonaux (hors anti-TNF alpha)": [
   "alemtuzumab",
   "amivantamab",
   "anifrolumab",
   "atezolizumab",
   "bélimumab",
   "bimékizumab",
   "blinatumomab",
   "brentuximab",
   "canakinumab",
   "cétuximab",
   "daratumumab",
   "dénosumab",
   "durvalumab",
   "guselkumab",
   "ibritumomab",
   "inébilizumab",
   "inotuzumab",
   "ipilimumab",
   "ixékizumab",
   "natalizumab",
   "nivolumab",
   "obinutuzumab",
   "ocrélizumab",
   "ofatumumab",
   "panitumumab",
   "pembrolizumab",
   "ramucirumab",
   "rituximab",
   "satralizumab",
   "sécukinumab",
   "siltuximab",
   "spésolimab",
   "tafasitamab",
   "tézépelumab",
   "tocilizumab",
   "tralokinumab",
   "ustékinumab",
   "védolizumab"
  ],
  "antidépresseurs imipraminiques": [
   "amitriptyline",
   "amoxapine",
   "clomipramine",
   "dosulepine",
   "doxepine",
   "imipramine",
   "maprotiline",
   "trimipramine"
  ],
  "antihypertenseurs alpha-bloquants": [
   "doxazosine",
   "prazosine",
   "urapidil"
  ],
  "antihypertenseurs centraux": [
   "clonidine",
   "guanfacine",
   "methyldopa",
   "moxonidine",
   "rilmenidine"
  ],
  "antihypertenseurs sauf alpha-bloquants": [
   "acebutolol",
   "altizide",
   "amiloride",
   "amlodipine",
   "atenolol",
   "azilsartan",
   "benazepril",
   "bendroflumethiazide",
   "betaxolol",
   "bisoprolol",
   "bumetanide",
   "candesartan cilexetil",
   "canrenoate de potassium",
   "captopril",
   "carteolol",
   "celiprolol",
   "chlortalidone",
   "cicletanine",
   "cilazapril",
   "clévidipine",
   "clonidine",
   "clopamide",
   "dihydralazine",
   "diltiazem",
   "enalapril",
   "eplerenone",
   "eprosartan",
   "felodipine",
   "fosinopril",
   "furosemide",
   "hydrochlorothiazide",
   "indapamide",
   "irbesartan",
   "isradipine",
   "labetalol",
   "lacidipine",
   "lercanidipine",
   "levobunolol",
   "lisinopril",
   "losartan",
   "manidipine",
   "methyclothiazide",
   "methyldopa",
   "metoprolol",
   "moexipril",
   "moxonidine",
   "nadolol",
   "nebivolol",
   "nicardipine",
   "nifedipine",
   "nimodipine",
   "nitrendipine",
   "olmesartan",
   "périndopril",
   "pindolol",
   "piretanide",
   "propranolol",
   "quinapril",
   "ramipril",
   "rilmenidine",
   "sotalol",
   "spironolactone",
   "telmisartan",
   "tertatolol",
   "timolol",
   "trandolapril",
   "triamterene",
   "valsartan",
   "verapamil",
   "zofenopril"
  ],
  "antiparasitaires susceptibles de donner des torsades de pointes": [
   "chloroquine",
   "halofantrine",
   "lumefantrine",
   "pentamidine",
   "pipéraquine"
  ],
  "antiparkinsoniens anticholinergiques": [
   "biperidene",
   "trihexyphenidyle",
   "tropatepine"
  ],
  "antiparkinsoniens dopaminergiques": [
   "amantadine",
   "apomorphine",
   "bromocriptine",
   "entacapone",
   "lisuride",
   "piribedil",
   "pramipexole",
   "rasagiline",
   "ropinirole",
   "rotigotine",
   "selegiline",
   "tolcapone"
  ],
  "antipurines": [
   "azathioprine",
   "mercaptopurine"
  ],
  "antiseptiques mercuriels": [
   "merbromine",
   "thiomersal"
  ],
  "antispasmodiques urinaires": [
   "darifenacine",
   "fesoterodine",
   "oxybutynine",
   "solifenacine",
   "tolterodine"
  ],
  "antisécrétoires antihistaminiques H2": [
   "cimetidine",
   "famotidine",
   "nizatidine",
   "ranitidine"
  ],
  "antisécrétoires inhibiteurs de la pompe à protons": [
   "esomeprazole",
   "lansoprazole",
   "omeprazole",
   "pantoprazole",
   "rabeprazole"
  ],
  "antitussifs morphine-like": [
   "dextromethorphane",
   "noscapine",
   "pholcodine"
  ],
  "antitussifs morphiniques vrais": [
   "codeine",
   "ethylmorphine"
  ],
  "antivitamines K": [
   "acenocoumarol",
   "fluindione",
   "warfarine"
  ],
  "barbituriques": [
   "phenobarbital",
   "primidone",
   "thiopental"
  ],
  "benzodiazépines et apparentés": [
   "alprazolam",
   "avizafone",
   "bromazepam",
   "chlordiazepoxide",
   "clobazam",
   "clonazepam",
   "clorazepate",
   "clotiazepam",
   "diazepam",
   "estazolam",
   "eszopiclone",
   "flunitrazepam",
   "flurazepam",
   "loflazépate",
   "loprazolam",
   "lorazepam",
   "lormetazepam",
   "midazolam",
   "nitrazepam",
   "nordazepam",
   "oxazepam",
   "prazepam",
   "tetrazepam",
   "zolpidem",
   "zopiclone"
  ],
  "bisphosphonates": [
   "acide alendronique",
   "acide clodronique",
   "acide etidronique",
   "acide ibandronique",
   "acide oxidronique",
   "acide pamidronique",
   "acide risedronique",
   "acide tiludronique",
   "acide zoledronique"
  ],
  "bradycardisants": [
   "acebutolol",
   "ambenonium",
   "amiodarone",
   "atenolol",
   "betaxolol",
   "bisoprolol",
   "carteolol",
   "carvedilol",
   "celiprolol",
   "clonidine",
   "crizotinib",
   "digoxine",
   "diltiazem",
   "disopyramide",
   "donepezil",
   "dronedarone",
   "esmolol",
   "fampridine",
   "fingolimod",
   "galantamine",
   "hydroquinidine",
   "ivabradine",
   "labetalol",
   "levobunolol",
   "mefloquine",
   "metoprolol",
   "midodrine",
   "nadolol",
   "nebivolol",
   "neostigmine",
   "pasiréotide",
   "pilocarpine",
   "pindolol",
   "propranolol",
   "pyridostigmine",
   "quinidine",
   "rivastigmine",
   "sotalol",
   "tertatolol",
   "thalidomide",
   "timolol",
   "verapamil"
  ],
  "bêta-2 mimétiques": [
   "bambuterol",
   "indacatérol",
   "olodatérol",
   "salbutamol",
   "terbutaline",
   "vilantérol"
  ],
  "bêta-bloquants (sauf esmolol et sotalol) (y compris collyres)": [
   "acebutolol",
   "atenolol",
   "betaxolol",
   "bisoprolol",
   "carteolol",
   "celiprolol",
   "labetalol",
   "levobunolol",
   "metoprolol",
   "nadolol",
   "nebivolol",
   "pindolol",
   "propranolol",
   "tertatolol",
   "timolol"
  ],
  "bêta-bloquants (sauf esmolol) (y compris collyres)": [
   "acebutolol",
   "atenolol",
   "betaxolol",
   "bisoprolol",
   "carteolol",
   "celiprolol",
   "labetalol",
   "levobunolol",
   "metoprolol",
   "nadolol",
   "nebivolol",
   "pindolol",
   "propranolol",
   "sotalol",
   "tertatolol",
   "timolol"
  ],
  "bêta-bloquants dans l'insuffisance cardiaque": [
   "bisoprolol",
   "carvedilol",
   "metoprolol",
   "nebivolol"
  ],
  "bêta-bloquants non cardio-sélectifs (y compris collyres)": [
   "carteolol",
   "carvedilol",
   "labetalol",
   "nadolol",
   "pindolol",
   "propranolol",
   "sotalol",
   "tertatolol",
   "timolol"
  ],
  "citrates": [
   "citrate de gallium [67ga]",
   "dicitrate trimagnesien",
   "potassium (citrate de)",
   "sodium (citrate de)",
   "sodium (citrate diacide de)"
  ],
  "corticoïdes": [
   "betamethasone",
   "cortisone",
   "cortivazol",
   "desoxycortone",
   "dexamethasone",
   "fludrocortisone",
   "hydrocortisone",
   "methylprednisolone",
   "prednisolone",
   "prednisone",
   "tetracosactide",
   "triamcinolone"
  ],
  "corticoïdes (voie intra-articulaire)": [
   "betamethasone",
   "dexamethasone",
   "méthylprednisolone",
   "prednisolone",
   "triamcinolone"
  ],
  "corticoïdes métabolisés, notamment inhalés": [
   "budesonide",
   "ciclesonide",
   "dexamethasone",
   "fluticasone",
   "methylprednisolone",
   "mometasone",
   "prednisolone",
   "prednisone",
   "triamcinolone"
  ],
  "curares": [
   "atracurium",
   "cisatracurium",
   "mivacurium",
   "rocuronium",
   "suxamethonium",
   "vecuronium"
  ],
  "curares non dépolarisants": [
   "atracurium",
   "cisatracurium",
   "rocuronium",
   "vecuronium"
  ],
  "cyclines": [
   "chlortetracycline",
   "déméclocycline",
   "doxycycline",
   "lymecycline",
   "methylenecycline",
   "minocycline",
   "oxytetracycline",
   "tetracycline",
   "tigecycline"
  ],
  "cytotoxiques": [
   "altretamine",
   "amsacrine",
   "asparaginase",
   "azacitidine",
   "azathioprine",
   "bendamustine",
   "bleomycine",
   "bortezomib",
   "busulfan",
   "cabazitaxel",
   "capecitabine",
   "carboplatine",
   "carmustine",
   "chlorambucil",
   "cisplatine",
   "cladribine",
   "clofarabine",
   "cyclophosphamide",
   "cytarabine",
   "dacarbazine",
   "dactinomycine",
   "daunorubicine",
   "décitabine",
   "dexrazoxane",
   "docetaxel",
   "doxorubicine",
   "epirubicine",
   "éribuline",
   "estramustine",
   "etoposide",
   "fludarabine",
   "fluorouracile",
   "fotemustine",
   "gemcitabine",
   "giméracil",
   "hydroxycarbamide",
   "idarubicine",
   "ifosfamide",
   "irinotecan",
   "lomustine",
   "melphalan",
   "mercaptopurine",
   "methotrexate",
   "mitomycine c",
   "mitoxantrone",
   "nélarabine",
   "otéracil",
   "oxaliplatine",
   "paclitaxel",
   "pemetrexed",
   "pentostatine",
   "pipobroman",
   "pixantrone",
   "procarbazine",
   "raltitrexed",
   "streptozocine",
   "tegafur",
   "temozolomide",
   "thiotepa",
   "tioguanine",
   "topotecane",
   "vinblastine",
   "vincristine",
   "vindesine",
   "vinflunine",
   "vinorelbine"
  ],
  "dihydropyridines": [
   "amlodipine",
   "clévidipine",
   "felodipine",
   "isradipine",
   "lacidipine",
   "lercanidipine",
   "manidipine",
   "nicardipine",
   "nifedipine",
   "nimodipine",
   "nitrendipine"
  ],
  "diurétiques": [
   "altizide",
   "amiloride",
   "bendroflumethiazide",
   "bumetanide",
   "canrenoate de potassium",
   "chlortalidone",
   "cicletanine",
   "clopamide",
   "eplerenone",
   "furosemide",
   "hydrochlorothiazide",
   "indapamide",
   "methyclothiazide",
   "piretanide",
   "spironolactone",
   "triamterene"
  ],
  "diurétiques de l'anse": [
   "bumetanide",
   "furosemide",
   "piretanide"
  ],
  "diurétiques hypokaliémiants": [
   "altizide",
   "bendroflumethiazide",
   "bumetanide",
   "chlortalidone",
   "cicletanine",
   "clopamide",
   "furosemide",
   "hydrochlorothiazide",
   "indapamide",
   "methyclothiazide",
   "piretanide"
  ],
  "diurétiques thiazidiques et apparentés": [
   "altizide",
   "bendroflumethiazide",
   "chlortalidone",
   "cicletanine",
   "clopamide",
   "hydrochlorothiazide",
   "indapamide",
   "methyclothiazide"
  ],
  "diurétiques épargneurs de potassium (seuls ou associés)": [
   "amiloride",
   "canrenoate de potassium",
   "eplerenone",
   "spironolactone",
   "triamterene"
  ],
  "dopaminergiques": [
   "amantadine",
   "apomorphine",
   "bromocriptine",
   "cabergoline",
   "entacapone",
   "lisuride",
   "piribedil",
   "pramipexole",
   "quinagolide",
   "rasagiline",
   "ropinirole",
   "rotigotine",
   "selegiline",
   "tolcapone"
  ],
  "dopaminergiques, hors Parkinson": [
   "cabergoline",
   "quinagolide"
  ],
  "dérivés de l'acide aminosalicylique (ASA)": [
   "mesalazine",
   "olsalazine",
   "p a s sodique",
   "sulfasalazine"
  ],
  "dérivés nitrés et apparentés": [
   "dinitrate d'isosorbide",
   "isosorbide",
   "molsidomine",
   "nicorandil",
   "trinitrine"
  ],
  "estrogènes non contraceptifs": [
   "diethylstilbestrol",
   "estétrol",
   "estradiol",
   "estriol",
   "estrogènes conjugués",
   "estrone",
   "promestriene"
  ],
  "estroprogestatifs contraceptifs": [
   "estradiol",
   "ethinylestradiol"
  ],
  "fibrates": [
   "bezafibrate",
   "ciprofibrate",
   "fenofibrate",
   "gemfibrozil"
  ],
  "fluoroquinolones": [
   "ciprofloxacine",
   "délafloxacine",
   "enoxacine",
   "levofloxacine",
   "lomefloxacine",
   "moxifloxacine",
   "norfloxacine",
   "ofloxacine",
   "pefloxacine"
  ],
  "fluorouracile (et, par extrapolation, autres fluoropyrimidines)": [
   "capecitabine",
   "fluorouracile",
   "giméracil",
   "otéracil",
   "tegafur"
  ],
  "folates": [
   "acide folinique",
   "acide folique"
  ],
  "glinides": [
   "nateglinide",
   "repaglinide"
  ],
  "gliptines": [
   "linagliptine",
   "saxagliptine",
   "sitagliptine",
   "vildagliptine"
  ],
  "globulines antilymphocytaires": [
   "immunoglobuline de lapin anti-lymphocyte t humain",
   "immunoglobulines equines antilymphocyte humain"
  ],
  "glucocorticoïdes (sauf hydrocortisone)": [
   "betamethasone",
   "budesonide",
   "cortisone",
   "cortivazol",
   "dexamethasone",
   "methylprednisolone",
   "prednisolone",
   "prednisone",
   "tetracosactide",
   "triamcinolone"
  ],
  "glucocorticoïdes par voie intra-articulaire et métabolisés": [
   "betamethasone",
   "dexamethasone",
   "méthylprednisolone",
   "triamcinolone"
  ],
  "grazoprevir + elbasvir": [
   "elbasvir",
   "grazoprevir"
  ],
  "hormones thyroïdiennes": [
   "levothyroxine",
   "liothyronine sodique",
   "thyroxines",
   "tiratricol"
  ],
  "huiles minérales": [
   "paraffine",
   "silicone"
  ],
  "hyperkaliémiants": [
   "aceclofenac",
   "acide mefenamique",
   "acide niflumique",
   "acide tiaprofenique",
   "alminoprofene",
   "amiloride",
   "azilsartan",
   "benazepril",
   "candesartan cilexetil",
   "canrenoate de potassium",
   "captopril",
   "celecoxib",
   "ciclosporine",
   "cilazapril",
   "dalteparine sodique",
   "danaparoide sodique",
   "dexketoprofene trometamol",
   "diclofenac",
   "drospirenone",
   "enalapril",
   "enoxaparine",
   "eplerenone",
   "eprosartan",
   "etodolac",
   "fenoprofene",
   "flurbiprofene",
   "fondaparinux",
   "fosinopril",
   "heparine calcique",
   "heparine sodique",
   "ibuprofene",
   "indometacine",
   "irbesartan",
   "ketoprofene",
   "lisinopril",
   "losartan",
   "meloxicam",
   "moexipril",
   "morniflumate",
   "nabumetone",
   "nadroparine calcique",
   "naproxene",
   "nimesulide",
   "olmesartan",
   "parecoxib",
   "périndopril",
   "piroxicam",
   "piroxicam-betadex",
   "potassium",
   "quinapril",
   "ramipril",
   "reviparine",
   "rofecoxib",
   "spironolactone",
   "sulindac",
   "tacrolimus",
   "telmisartan",
   "tenoxicam",
   "tinzaparine",
   "trandolapril",
   "triamterene",
   "trimethoprime",
   "valsartan",
   "zofenopril"
  ],
  "hypnotiques": [
   "alimemazine",
   "doxylamine",
   "estazolam",
   "eszopiclone",
   "loprazolam",
   "lormetazepam",
   "nitrazepam",
   "promethazine",
   "zolpidem",
   "zopiclone"
  ],
  "hypokaliémiants": [
   "altizide",
   "amphotericine b",
   "bendroflumethiazide",
   "betamethasone",
   "bisacodyl",
   "boldo",
   "bourdaine",
   "bumetanide",
   "cascara",
   "cascara sagrada",
   "chlortalidone",
   "cicletanine",
   "clopamide",
   "cortisone",
   "cortivazol",
   "dexamethasone",
   "fludrocortisone",
   "furosemide",
   "hydrochlorothiazide",
   "hydrocortisone",
   "indapamide",
   "methyclothiazide",
   "methylprednisolone",
   "piretanide",
   "prednisolone",
   "prednisone",
   "reglisse",
   "rhubarbe",
   "ricin",
   "ricinus communis",
   "sene",
   "sene de l'inde",
   "sodium (docusate de)",
   "sodium (picosulfate de)",
   "sodium (ricinoleate de)",
   "tetracosactide",
   "triamcinolone"
  ],
  "hyponatrémiants": [
   "altizide",
   "amiloride",
   "argipressine",
   "bendroflumethiazide",
   "bumetanide",
   "canrenoate de potassium",
   "carbamazepine",
   "chlortalidone",
   "cicletanine",
   "citalopram",
   "clopamide",
   "desmopressine",
   "eplerenone",
   "escitalopram",
   "fluoxetine",
   "fluvoxamine",
   "furosemide",
   "hydrochlorothiazide",
   "indapamide",
   "methyclothiazide",
   "oxcarbazepine",
   "paroxetine",
   "piretanide",
   "sertraline",
   "spironolactone",
   "triamterene"
  ],
  "héparines": [
   "dalteparine sodique",
   "danaparoide sodique",
   "enoxaparine",
   "fondaparinux",
   "heparine calcique",
   "heparine sodique",
   "nadroparine calcique",
   "reviparine",
   "tinzaparine"
  ],
  "héparines (doses curatives et/ou sujet âgé)": [
   "dalteparine sodique",
   "danaparoide sodique",
   "enoxaparine",
   "fondaparinux",
   "heparine calcique",
   "heparine sodique",
   "nadroparine calcique",
   "reviparine",
   "tinzaparine"
  ],
  "héparines (doses préventives)": [
   "dalteparine sodique",
   "danaparoide sodique",
   "enoxaparine",
   "fondaparinux",
   "heparine calcique",
   "heparine sodique",
   "nadroparine calcique",
   "reviparine",
   "tinzaparine"
  ],
  "immunosuppresseurs": [
   "ciclosporine",
   "everolimus",
   "sirolimus",
   "tacrolimus",
   "temsirolimus"
  ],
  "inducteurs enzymatiques": [
   "apalutamide",
   "carbamazepine",
   "cénobamate",
   "dabrafénib",
   "efavirenz",
   "enzalutamide",
   "eslicarbazépine",
   "fosphenytoine",
   "létermovir",
   "lorlatinib",
   "lumacaftor",
   "nevirapine",
   "oxcarbazepine",
   "phenobarbital",
   "phenytoine",
   "pitolisant",
   "primidone",
   "rifabutine",
   "rifampicine",
   "sotorasib"
  ],
  "inducteurs enzymatiques puissants": [
   "apalutamide",
   "carbamazepine",
   "enzalutamide",
   "fosphenytoine",
   "phenobarbital",
   "phenytoine",
   "primidone"
  ],
  "inhibiteurs d'intégrase": [
   "bictégravir",
   "cabotegravir",
   "dolutégravir",
   "raltégravir"
  ],
  "inhibiteurs de l'HMG-CoA réductase (statines)": [
   "atorvastatine",
   "fluvastatine",
   "pitavastatine",
   "pravastatine",
   "rosuvastatine",
   "simvastatine"
  ],
  "inhibiteurs de l'enzyme de conversion": [
   "benazepril",
   "captopril",
   "cilazapril",
   "enalapril",
   "fosinopril",
   "lisinopril",
   "moexipril",
   "périndopril",
   "quinapril",
   "ramipril",
   "trandolapril",
   "zofenopril"
  ],
  "inhibiteurs de la 5-alpha reductase": [
   "dutasteride",
   "finasteride"
  ],
  "inhibiteurs de la catéchol-O-méthyltransférase (COMT)": [
   "entacapone",
   "tolcapone"
  ],
  "inhibiteurs de la phosphodiesterase de type 5": [
   "avanafil",
   "sildenafil",
   "tadalafil",
   "vardenafil"
  ],
  "inhibiteurs de la xanthine oxydase": [
   "allopurinol",
   "febuxostat"
  ],
  "inhibiteurs de protéases boostés par ritonavir": [
   "atazanavir",
   "darunavir",
   "fosamprenavir",
   "lopinavir",
   "nirmatrelvir",
   "ritonavir",
   "saquinavir",
   "tipranavir"
  ],
  "inhibiteurs de tyrosine kinases métabolisés": [
   "abémaciclib",
   "acalabrutinib",
   "axitinib",
   "bosutinib",
   "brigatinib",
   "cabozantinib",
   "céritinib",
   "cobimétinib",
   "crizotinib",
   "dabrafénib",
   "dasatinib",
   "entrectinib",
   "erlotinib",
   "fédratinib",
   "fostamatinib",
   "gefitinib",
   "giltéritinib",
   "ibrutinib",
   "imatinib",
   "lapatinib",
   "larotrectinib",
   "lorlatinib",
   "nilotinib",
   "osimertinib",
   "palbociclib",
   "pazopanib",
   "pémigatinib",
   "ponatinib",
   "pralsétinib",
   "ribociclib",
   "riprétinib",
   "ruxolitinib",
   "selpercatinib",
   "sélumétinib",
   "sorafenib",
   "sunitinib",
   "tucatinib",
   "upadacitinib",
   "vandétanib",
   "zanubrutinib"
  ],
  "inhibiteurs directs de la thrombine à indication spécifique": [
   "argatroban",
   "bivalirudine"
  ],
  "inhibiteurs puissants du CYP3A4": [
   "clarithromycine",
   "cobicistat",
   "erythromycine",
   "itraconazole",
   "ketoconazole",
   "posaconazole",
   "ritonavir",
   "telithromycine",
   "tucatinib",
   "voriconazole"
  ],
  "inhibiteurs sélectifs de la recapture de la sérotonine": [
   "citalopram",
   "dapoxétine",
   "escitalopram",
   "fluoxetine",
   "fluvoxamine",
   "paroxetine",
   "sertraline",
   "vortioxétine"
  ],
  "insuline": [
   "insuline asparte",
   "insuline asparte isophane biphasique",
   "insuline dégludec",
   "insuline glargine",
   "insuline humaine biosynthetique",
   "insuline humaine biosynthetique zinc",
   "insuline humaine hemisynthetique d'origine porcine",
   "insuline humaine hemisynthetique isophane",
   "insuline humaine hemisynthetique isophane biphasique",
   "insuline humaine recombinante",
   "insuline humaine recombinante isophane",
   "insuline humaine recombinante isophane biphasique",
   "insuline humaine recombinante zinc",
   "insuline humaine recombinante zinc cristalline",
   "insuline lispro",
   "insuline porcine"
  ],
  "ivacaftor (seul ou associé)": [
   "élexacaftor",
   "ivacaftor",
   "lumacaftor",
   "tézacaftor"
  ],
  "laxatifs (type macrogol)": [
   "macrogol"
  ],
  "lincosanides": [
   "clindamycine",
   "lincomycine"
  ],
  "macrolides (sauf spiramycine)": [
   "azithromycine",
   "clarithromycine",
   "erythromycine",
   "josamycine",
   "midecamycine",
   "roxithromycine",
   "telithromycine"
  ],
  "minéralocorticoïdes": [
   "desoxycortone",
   "fludrocortisone"
  ],
  "morphiniques": [
   "alfentanil",
   "buprenorphine",
   "codeine",
   "dextromethorphane",
   "dihydrocodeine",
   "ethylmorphine",
   "fentanyl",
   "hydromorphone",
   "methadone",
   "morphine",
   "nalbuphine",
   "nalméfène",
   "naloxone",
   "naltrexone",
   "noscapine",
   "oxycodone",
   "pethidine",
   "pholcodine",
   "remifentanil",
   "sufentanil",
   "tapentadol",
   "tramadol"
  ],
  "morphiniques agonistes-antagonistes": [
   "buprenorphine",
   "nalbuphine"
  ],
  "morphiniques antagonistes partiels": [
   "nalméfène",
   "naltrexone"
  ],
  "morphiniques en traitement de substitution": [
   "buprenorphine",
   "methadone"
  ],
  "médicaments abaissant la pression artérielle": [
   "acebutolol",
   "altizide",
   "amiloride",
   "amlodipine",
   "atenolol",
   "azilsartan",
   "benazepril",
   "bendroflumethiazide",
   "betaxolol",
   "bisoprolol",
   "bumetanide",
   "candesartan cilexetil",
   "canrenoate de potassium",
   "captopril",
   "carteolol",
   "carvedilol",
   "celiprolol",
   "chlortalidone",
   "cicletanine",
   "cilazapril",
   "clévidipine",
   "clonidine",
   "clopamide",
   "cyclothiazide",
   "dihydralazine",
   "diltiazem",
   "doxazosine",
   "enalapril",
   "eplerenone",
   "eprosartan",
   "felodipine",
   "fosinopril",
   "furosemide",
   "guanfacine",
   "hydrochlorothiazide",
   "indapamide",
   "irbesartan",
   "isradipine",
   "labetalol",
   "lacidipine",
   "lercanidipine",
   "levobunolol",
   "lisinopril",
   "losartan",
   "manidipine",
   "methyclothiazide",
   "methyldopa",
   "metoprolol",
   "moexipril",
   "moxonidine",
   "nadolol",
   "nebivolol",
   "nicardipine",
   "nifedipine",
   "nimodipine",
   "nitrendipine",
   "olmesartan",
   "perindopril tert-butylamine",
   "pindolol",
   "piretanide",
   "prazosine",
   "propranolol",
   "quinapril",
   "ramipril",
   "rilmenidine",
   "sotalol",
   "spironolactone",
   "tamsulosine",
   "telmisartan",
   "terazosine",
   "tertatolol",
   "timolol",
   "trandolapril",
   "triamterene",
   "urapidil",
   "valsartan",
   "verapamil",
   "zofenopril"
  ],
  "médicaments abaissant le seuil épileptogène": [
   "alimemazine",
   "amitriptyline",
   "amoxapine",
   "bupropion",
   "camphre",
   "chloroquine",
   "chlorpromazine",
   "cineole",
   "ciprofloxacine",
   "citalopram",
   "clomipramine",
   "cyamemazine",
   "dosulepine",
   "doxepine",
   "droperidol",
   "enoxacine",
   "escitalopram",
   "eucalyptus",
   "eugenol",
   "fampridine",
   "fluoxetine",
   "fluphenazine",
   "fluvoxamine",
   "haloperidol",
   "imipramine",
   "levofloxacine",
   "levomenthol",
   "levomepromazine",
   "lomefloxacine",
   "maprotiline",
   "mefloquine",
   "menthe",
   "menthol racemique",
   "moxifloxacine",
   "niaouli",
   "norfloxacine",
   "ofloxacine",
   "oxomemazine",
   "paroxetine",
   "pefloxacine",
   "penfluridol",
   "pimozide",
   "pipamperone",
   "pipotiazine",
   "promethazine",
   "propericiazine",
   "quetiapine",
   "sertraline",
   "tapentadol",
   "terpine",
   "terpineol",
   "terpinol",
   "thymol",
   "tramadol",
   "trimipramine",
   "vortioxétine"
  ],
  "médicaments atropiniques": [
   "alimemazine",
   "amitriptyline",
   "amoxapine",
   "atropine",
   "azelastine",
   "biperidene",
   "brompheniramine",
   "chlorphenamine",
   "chlorpromazine",
   "clidinium",
   "clomipramine",
   "clozapine",
   "cyamemazine",
   "cyclopentolate",
   "cyproheptadine",
   "darifenacine",
   "dexchlorpheniramine",
   "di(acefylline) diphenhydramine",
   "dimenhydrinate",
   "diphenhydramine",
   "disopyramide",
   "dosulepine",
   "doxepine",
   "doxylamine",
   "fesoterodine",
   "flavoxate",
   "flunarizine",
   "flupentixol",
   "fluphenazine",
   "glycopyrronium",
   "homatropine",
   "hydroxyzine",
   "imipramine",
   "ipratropium",
   "isothipendyl",
   "levomepromazine",
   "loxapine",
   "maprotiline",
   "méclozine",
   "mepyramine",
   "mequitazine",
   "metopimazine",
   "nefopam",
   "oxomemazine",
   "oxybutynine",
   "pheniramine",
   "phenyltoloxamine",
   "pimethixene",
   "pipotiazine",
   "pizotifene",
   "promethazine",
   "propericiazine",
   "quetiapine",
   "quinidine",
   "scopolamine",
   "solifenacine",
   "tolterodine",
   "trihexyphenidyle",
   "trimipramine",
   "triprolidine",
   "tropatepine",
   "tropicamide",
   "trospium",
   "uméclidinium",
   "zuclopenthixol"
  ],
  "médicaments mixtes adrénergiques-sérotoninergiques": [
   "amitriptyline",
   "clomipramine",
   "duloxetine",
   "imipramine",
   "milnacipran",
   "oxitriptan",
   "venlafaxine"
  ],
  "médicaments méthémoglobinisants": [
   "acetylsulfafurazol",
   "benzocaïne",
   "dapsone",
   "flutamide",
   "metoclopramide",
   "prilocaine",
   "sodium (nitroprussiate de)",
   "sulfadiazine",
   "sulfadoxine",
   "sulfafurazol",
   "sulfaguanidine",
   "sulfamethizol",
   "sulfamethoxazole"
  ],
  "médicaments néphrotoxiques": [
   "aciclovir",
   "acide amidotrizoïque",
   "acide clodronique",
   "acide ioxaglique",
   "acide ioxitalamique",
   "adefovir",
   "amikacine",
   "amphotericine b",
   "carboplatine",
   "ciclosporine",
   "cisplatine",
   "colistine",
   "foscarnet",
   "ganciclovir",
   "gentamicine",
   "ifosfamide",
   "iobitridol",
   "iodixanol",
   "iohexol",
   "iomeprol",
   "iopamidol",
   "iopromide",
   "ioversol",
   "isepamicine",
   "methotrexate",
   "netilmicine",
   "oxaliplatine",
   "pentamidine",
   "spectinomycine",
   "streptomycine",
   "streptozocine",
   "tacrolimus",
   "teicoplanine",
   "tenofovir disoproxil",
   "tobramycine",
   "valaciclovir",
   "valganciclovir",
   "vancomycine"
  ],
  "médicaments ototoxiques": [
   "amikacine",
   "bumetanide",
   "carboplatine",
   "cisplatine",
   "furosemide",
   "gentamicine",
   "isepamicine",
   "netilmicine",
   "oxaliplatine",
   "piretanide",
   "streptomycine",
   "teicoplanine",
   "tobramycine",
   "vancomycine",
   "vinblastine",
   "vincristine",
   "vindesine",
   "vinflunine",
   "vinorelbine"
  ],
  "médicaments sédatifs": [
   "agomelatine",
   "alfentanil",
   "alimemazine",
   "alizapride",
   "alprazolam",
   "amisulpride",
   "amitriptyline",
   "aripiprazole",
   "avizafone",
   "azelastine",
   "baclofene",
   "bromazepam",
   "brompheniramine",
   "buprenorphine",
   "captodiame",
   "cénobamate",
   "chlordiazepoxide",
   "chlorphenamine",
   "chlorpromazine",
   "clobazam",
   "clonazepam",
   "clonidine",
   "clorazepate",
   "clotiazepam",
   "clozapine",
   "codeine",
   "cyamemazine",
   "cyproheptadine",
   "dapoxétine",
   "dexchlorpheniramine",
   "dexmédétomidine",
   "dextromethorphane",
   "di(acefylline) diphenhydramine",
   "diazepam",
   "dihydrocodeine",
   "dimenhydrinate",
   "diphenhydramine",
   "doxepine",
   "doxylamine",
   "droperidol",
   "eskétamine",
   "estazolam",
   "eszopiclone",
   "ethylmorphine",
   "etifoxine",
   "fenspiride",
   "fentanyl",
   "flunarizine",
   "flupentixol",
   "fluphenazine",
   "flurazepam",
   "gabapentine",
   "haloperidol",
   "hydromorphone",
   "hydroxyzine",
   "isothipendyl",
   "ketotifene",
   "levomepromazine",
   "loflazépate",
   "loprazolam",
   "lorazepam",
   "lormetazepam",
   "loxapine",
   "maprotiline",
   "méclozine",
   "mepyramine",
   "mequitazine",
   "methadone",
   "methyldopa",
   "metoclopramide",
   "metopimazine",
   "mianserine",
   "midazolam",
   "mirtazapine",
   "morphine",
   "moxonidine",
   "nalbuphine",
   "naloxone",
   "nefopam",
   "nitrazepam",
   "nordazepam",
   "noscapine",
   "olanzapine",
   "oxazepam",
   "oxetorone",
   "oxomemazine",
   "oxybate de sodium",
   "oxycodone",
   "paliperidone",
   "penfluridol",
   "pérampanel",
   "pethidine",
   "pheniramine",
   "phenobarbital",
   "phenyltoloxamine",
   "pholcodine",
   "pimethixene",
   "pimozide",
   "pipamperone",
   "pipotiazine",
   "pizotifene",
   "prazepam",
   "pregabaline",
   "primidone",
   "promethazine",
   "propericiazine",
   "quetiapine",
   "remifentanil",
   "rilmenidine",
   "risperidone",
   "ropinirole",
   "rupatadine",
   "sodium (oxybate de)",
   "sufentanil",
   "sulpiride",
   "tapentadol",
   "tetrabenazine",
   "thalidomide",
   "tiapride",
   "tramadol",
   "trimipramine",
   "triprolidine",
   "ziconotide",
   "zolpidem",
   "zopiclone",
   "zuclopenthixol"
  ],
  "médicaments à l'origine d'atteintes musculaires": [
   "atorvastatine",
   "bezafibrate",
   "ciclosporine",
   "ciprofibrate",
   "colchicine",
   "daptomycine",
   "dasatinib",
   "ezetimibe",
   "fenofibrate",
   "fluvastatine",
   "gemfibrozil",
   "imatinib",
   "lenalidomide",
   "pitavastatine",
   "pravastatine",
   "rosuvastatine",
   "simvastatine"
  ],
  "médicaments à l'origine d'un hypogonadisme masculin": [
   "abiraterone",
   "apalutamide",
   "bicalutamide",
   "cyproterone",
   "dégarélix",
   "dutasteride",
   "enzalutamide",
   "finasteride",
   "flutamide",
   "gosereline",
   "leuproreline",
   "nilutamide",
   "triptoreline"
  ],
  "médicaments à l'origine d'un syndrome sérotoninergique": [
   "amitriptyline",
   "bleu de methylene",
   "bupropion",
   "citalopram",
   "clomipramine",
   "duloxetine",
   "escitalopram",
   "fluoxetine",
   "fluvoxamine",
   "imipramine",
   "iproniazide",
   "linezolide",
   "lithium",
   "millepertuis",
   "milnacipran",
   "moclobemide",
   "oxitriptan",
   "paroxetine",
   "pethidine",
   "sertraline",
   "tramadol",
   "trimipramine",
   "tryptophane",
   "venlafaxine"
  ],
  "médicaments à l'origine d'une hypotension orthostatique": [
   "alfuzosine",
   "alimemazine",
   "alizapride",
   "amantadine",
   "amifostine",
   "amisulpride",
   "amitriptyline",
   "amoxapine",
   "apomorphine",
   "aripiprazole",
   "avanafil",
   "baclofene",
   "bromocriptine",
   "chlorpromazine",
   "clomipramine",
   "clozapine",
   "cyamemazine",
   "dinitrate d'isosorbide",
   "dosulepine",
   "doxazosine",
   "doxepine",
   "droperidol",
   "entacapone",
   "flupentixol",
   "fluphenazine",
   "haloperidol",
   "imipramine",
   "isosorbide",
   "levodopa",
   "levomepromazine",
   "lévosimendan",
   "lisuride",
   "loxapine",
   "maprotiline",
   "metopimazine",
   "molsidomine",
   "nicorandil",
   "olanzapine",
   "oxomemazine",
   "paliperidone",
   "penfluridol",
   "périndopril",
   "pimozide",
   "pipamperone",
   "pipotiazine",
   "piribedil",
   "pramipexole",
   "prazosine",
   "promethazine",
   "propericiazine",
   "quetiapine",
   "rasagiline",
   "riociguat",
   "risperidone",
   "ropinirole",
   "rotigotine",
   "selegiline",
   "sildenafil",
   "silodosine",
   "sulpiride",
   "tadalafil",
   "tamsulosine",
   "terazosine",
   "tiapride",
   "tolcapone",
   "trimipramine",
   "trinitrine",
   "vardenafil",
   "vortioxétine",
   "zuclopenthixol"
  ],
  "médicaments à risque lors du sevrage tabagique": [
   "clozapine",
   "methadone",
   "ropinirole",
   "theophylline"
  ],
  "médicaments, bradykinine et angio-œdème": [
   "alteplase recombinante",
   "azilsartan",
   "benazepril",
   "candesartan cilexetil",
   "captopril",
   "cilazapril",
   "enalapril",
   "eprosartan",
   "estramustine",
   "évérolimus",
   "fosinopril",
   "irbesartan",
   "linagliptine",
   "lisinopril",
   "losartan",
   "moexipril",
   "olmesartan",
   "périndopril",
   "quinapril",
   "racecadotril",
   "ramipril",
   "sacubitril",
   "saxagliptine",
   "sirolimus",
   "sitagliptine",
   "telmisartan",
   "temsirolimus",
   "trandolapril",
   "valsartan",
   "vildagliptine",
   "zofenopril"
  ],
  "neuroleptiques": [
   "alimemazine",
   "alizapride",
   "amisulpride",
   "aripiprazole",
   "carpipramine",
   "chlorpromazine",
   "clozapine",
   "cyamemazine",
   "droperidol",
   "flupentixol",
   "fluphenazine",
   "haloperidol",
   "levomepromazine",
   "loxapine",
   "metoclopramide",
   "olanzapine",
   "paliperidone",
   "penfluridol",
   "pimozide",
   "pipamperone",
   "pipotiazine",
   "promethazine",
   "propericiazine",
   "quetiapine",
   "risperidone",
   "sulpiride",
   "tiapride",
   "zuclopenthixol"
  ],
  "neuroleptiques antipsychotiques (sauf clozapine)": [
   "amisulpride",
   "aripiprazole",
   "asenapine",
   "chlorpromazine",
   "cyamemazine",
   "droperidol",
   "flupentixol",
   "fluphenazine",
   "haloperidol",
   "levomepromazine",
   "loxapine",
   "olanzapine",
   "paliperidone",
   "penfluridol",
   "pimozide",
   "pipamperone",
   "pipotiazine",
   "propericiazine",
   "quetiapine",
   "risperidone",
   "sulpiride",
   "tiapride",
   "zuclopenthixol"
  ],
  "neuroleptiques antiémétiques": [
   "alizapride",
   "metoclopramide"
  ],
  "neuroleptiques susceptibles de donner des torsades de pointes": [
   "amisulpride",
   "chlorpromazine",
   "cyamemazine",
   "droperidol",
   "flupentixol",
   "fluphenazine",
   "haloperidol",
   "levomepromazine",
   "pimozide",
   "pipamperone",
   "pipotiazine",
   "sulpiride",
   "tiapride",
   "zuclopenthixol"
  ],
  "ombitasvir + paritaprévir": [
   "ombitasvir",
   "paritaprévir"
  ],
  "organoplatines": [
   "carboplatine",
   "cisplatine",
   "oxaliplatine"
  ],
  "pamplemousse (jus et fruit)": [
   "anpu"
  ],
  "phénobarbital (et, par extrapolation, primidone)": [
   "phenobarbital",
   "primidone"
  ],
  "phénytoïne (et, par extrapolation, fosphénytoïne)": [
   "fosphenytoine",
   "phenytoine"
  ],
  "pipéracilline/tazobactam": [
   "pipéracilline",
   "tazobactam"
  ],
  "produits de contraste iodés": [
   "acide amidotrizoïque",
   "acide ioxaglique",
   "acide ioxitalamique",
   "iobitridol",
   "iodixanol",
   "iohexol",
   "iomeprol",
   "iopamidol",
   "iopromide",
   "ioversol"
  ],
  "progestatifs contraceptifs": [
   "desogestrel",
   "dienogest",
   "drospirenone",
   "etonogestrel",
   "levonorgestrel",
   "medroxyprogesterone",
   "nomegestrol",
   "norelgestromine",
   "norethisterone",
   "norgestimate"
  ],
  "progestatifs non contraceptifs, associés ou non à un estrogène": [
   "chlormadinone",
   "dydrogesterone",
   "hydroxyprogesterone",
   "medrogestone",
   "medroxyprogesterone",
   "megestrol",
   "nomegestrol",
   "norethisterone",
   "progesterone",
   "promegestone"
  ],
  "pénems": [
   "ertapenem",
   "imipenem",
   "meropenem"
  ],
  "pénicillines": [
   "amoxicilline",
   "ampicilline",
   "benethamine-penicilline",
   "benzylpenicilline",
   "cloxacilline",
   "flucloxacilline",
   "oxacilline",
   "phenoxymethylpenicilline",
   "piperacilline",
   "pivmécillinam",
   "témocilline",
   "ticarcilline"
  ],
  "pénicillines A": [
   "amoxicilline",
   "ampicilline",
   "ticarcilline"
  ],
  "résines chélatrices": [
   "colesevelam",
   "colestyramine",
   "polystyrène sulfonate de calcium",
   "polystyrène sulfonate de sodium",
   "sevelamer"
  ],
  "rétinoïdes": [
   "acitretine",
   "alitretinoine",
   "isotretinoine",
   "trétinoïne"
  ],
  "spermicides": [
   "benzalkonium",
   "cetalkonium",
   "nonoxynol 9"
  ],
  "substances susceptibles de donner des torsades de pointes": [
   "amiodarone",
   "amisulpride",
   "arsenieux",
   "chloroquine",
   "chlorpromazine",
   "citalopram",
   "cocaine",
   "crizotinib",
   "cyamemazine",
   "disopyramide",
   "domperidone",
   "dronedarone",
   "droperidol",
   "erythromycine",
   "escitalopram",
   "flupentixol",
   "fluphenazine",
   "halofantrine",
   "haloperidol",
   "hydroquinidine",
   "hydroxychloroquine",
   "hydroxyzine",
   "levomepromazine",
   "lumefantrine",
   "mequitazine",
   "methadone",
   "moxifloxacine",
   "pentamidine",
   "pimozide",
   "pipamperone",
   "pipéraquine",
   "pipotiazine",
   "quinidine",
   "sotalol",
   "spiramycine",
   "sulpiride",
   "tiapride",
   "toremifene",
   "vandétanib",
   "vincamine",
   "zuclopenthixol"
  ],
  "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads": [
   "acide acetylsalicylique",
   "acide alendronique",
   "acide clodronique",
   "acide etidronique",
   "acide ibandronique",
   "acide oxidronique",
   "acide pamidronique",
   "acide risedronique",
   "acide tiludronique",
   "acide zoledronique",
   "alimemazine",
   "atenolol",
   "betamethasone",
   "bictégravir",
   "budesonide",
   "chlorpromazine",
   "chlortetracycline",
   "cimetidine",
   "ciprofloxacine",
   "clindamycine",
   "cortisone",
   "cyamemazine",
   "demeclocycline",
   "dexamethasone",
   "digoxine",
   "dolutégravir",
   "doxycycline",
   "elvitégravir",
   "enoxacine",
   "ethambutol",
   "famotidine",
   "fer",
   "fexofenadine",
   "fluor",
   "fluphenazine",
   "isoniazide",
   "lansoprazole",
   "lédipasvir",
   "levofloxacine",
   "levomepromazine",
   "levothyroxine",
   "lincomycine",
   "liothyronine sodique",
   "lomefloxacine",
   "lymecycline",
   "methylenecycline",
   "methylprednisolone",
   "metopimazine",
   "metoprolol",
   "minocycline",
   "moxifloxacine",
   "nizatidine",
   "norfloxacine",
   "ofloxacine",
   "oxomemazine",
   "oxytetracycline",
   "pefloxacine",
   "penicillamine",
   "phosphore",
   "piperazine",
   "pipotiazine",
   "prednisolone",
   "prednisone",
   "proguanil",
   "promethazine",
   "propericiazine",
   "propranolol",
   "raltégravir",
   "ranitidine",
   "rosuvastatine",
   "roxadustat",
   "sulpiride",
   "tériflunomide",
   "tetracycline",
   "thyroxines",
   "tigecycline",
   "tiratricol",
   "triamcinolone",
   "ulipristal"
  ],
  "substrats à risque du CYP3A4": [
   "abémaciclib",
   "alfentanil",
   "apixaban",
   "atorvastatine",
   "axitinib",
   "bortezomib",
   "bosutinib",
   "brigatinib",
   "cabazitaxel",
   "cabozantinib",
   "céritinib",
   "ciclosporine",
   "cobimétinib",
   "crizotinib",
   "dabrafénib",
   "dasatinib",
   "dihydroergotamine",
   "docetaxel",
   "ergotamine",
   "erlotinib",
   "everolimus",
   "gefitinib",
   "halofantrine",
   "ibrutinib",
   "imatinib",
   "irinotecan",
   "lapatinib",
   "lorlatinib",
   "lumefantrine",
   "midazolam",
   "nilotinib",
   "osimertinib",
   "oxycodone",
   "paclitaxel",
   "palbociclib",
   "pazopanib",
   "pimozide",
   "ponatinib",
   "quetiapine",
   "quinine",
   "rivaroxaban",
   "ruxolitinib",
   "simvastatine",
   "sirolimus",
   "sorafenib",
   "sufentanil",
   "sunitinib",
   "tacrolimus",
   "temsirolimus",
   "ticagrelor",
   "vandétanib",
   "vinblastine",
   "vincristine",
   "vindesine",
   "vinflunine",
   "vinorelbine"
  ],
  "sulfamides antibactériens": [
   "sulfadiazine",
   "sulfadoxine",
   "sulfamethizol",
   "sulfamethoxazole"
  ],
  "sulfamides hypoglycémiants": [
   "glibenclamide",
   "gliclazide",
   "glimepiride",
   "glipizide"
  ],
  "sulfaméthoxazole + triméthoprime": [
   "sulfamethoxazole",
   "trimethoprime"
  ],
  "sympathomimétiques alpha (voies orale et/ou nasale)": [
   "etilefrine",
   "midodrine",
   "naphazoline",
   "oxymetazoline",
   "phenylephrine",
   "synephrine",
   "tetryzoline",
   "tuaminoheptane"
  ],
  "sympathomimétiques alpha et bêta (voie IM et IV)": [
   "adrenaline",
   "dopamine",
   "noradrenaline",
   "norepinephrine"
  ],
  "sympathomimétiques indirects": [
   "bupropion",
   "cafedrine",
   "ephedrine",
   "methylphenidate",
   "pseudoephedrine",
   "theodrenaline"
  ],
  "sétrons": [
   "granisetron",
   "ondansetron",
   "palonosetron"
  ],
  "thrombolytiques": [
   "alteplase recombinante",
   "reteplase",
   "streptokinase",
   "tenecteplase",
   "urokinase"
  ],
  "théophylline (et, par extrapolation, aminophylline)": [
   "aminophylline",
   "theophylline"
  ],
  "topiques gastro-intestinaux, antiacides et adsorbants": [
   "charbon active",
   "charbon vegetal officinal",
   "crospovidone",
   "diosmectite",
   "gel d'hydroxyde d'aluminium et de carbonate de magnesium codesseches",
   "hydrotalcite",
   "kaolin lourd",
   "lanthane",
   "magaldrate",
   "magnesium (hydroxyde de)",
   "magnesium (trisilicate de)",
   "monmectite"
  ],
  "torsadogènes (sauf arsénieux, antiparasitaires, neuroleptiques, méthadone...)": [
   "amiodarone",
   "citalopram",
   "cocaine",
   "disopyramide",
   "domperidone",
   "dronedarone",
   "erythromycine",
   "escitalopram",
   "hydroquinidine",
   "hydroxyzine",
   "mequitazine",
   "moxifloxacine",
   "pipéraquine",
   "quinidine",
   "sotalol",
   "spiramycine",
   "toremifene",
   "vandétanib",
   "vincamine"
  ],
  "traitements de substitution nicotinique": [
   "nicotine"
  ],
  "triptans": [
   "almotriptan",
   "eletriptan",
   "frovatriptan",
   "naratriptan",
   "rizatriptan",
   "sumatriptan",
   "zolmitriptan"
  ],
  "triptans métabolisés par la MAO": [
   "almotriptan",
   "rizatriptan",
   "sumatriptan",
   "zolmitriptan"
  ],
  "triptans non métabolisés par la MAO": [
   "eletriptan",
   "frovatriptan",
   "naratriptan"
  ],
  "vaccins vivants atténués": [
   "bcg",
   "rotavirus",
   "virus de la fievre jaune",
   "virus de la rougeole",
   "virus des oreillons",
   "virus rubeoleux",
   "virus varicelle-zona",
   "virus vivant atténué de la grippe"
  ],
  "valproïque (acide) et, par extrapolation, valpromide": [
   "acide valproique",
   "valpromide"
  ],
  "vinca-alcaloïdes cytotoxiques": [
   "vinblastine",
   "vincristine",
   "vindesine",
   "vinflunine",
   "vinorelbine"
  ],
  "vitamine D": [
   "alfacalcidol",
   "calcitriol",
   "cholecalciferol",
   "ergocalciferol"
  ]
 },
 "pertenece": {
  "dutasteride tamsulosina": [
   "alphabloquants à visée urologique",
   "inhibiteurs de la 5-alpha reductase",
   "médicaments abaissant la pression artérielle",
   "médicaments à l'origine d'un hypogonadisme masculin",
   "médicaments à l'origine d'une hypotension orthostatique"
  ],
  "metronidazol": [
   "antabuse (réaction)"
  ],
  "losartan": [
   "antagonistes des récepteurs de l'angiotensine II",
   "antihypertenseurs sauf alpha-bloquants",
   "hyperkaliémiants",
   "médicaments abaissant la pression artérielle",
   "médicaments, bradykinine et angio-œdème"
  ],
  "celecoxib": [
   "anti-inflammatoires non stéroïdiens",
   "hyperkaliémiants"
  ],
  "dexketoprofeno": [
   "anti-inflammatoires non stéroïdiens",
   "hyperkaliémiants"
  ],
  "diclofenaco": [
   "anti-inflammatoires non stéroïdiens",
   "hyperkaliémiants"
  ],
  "etoricoxib": [
   "anti-inflammatoires non stéroïdiens"
  ],
  "ibuprofeno": [
   "anti-inflammatoires non stéroïdiens",
   "hyperkaliémiants"
  ],
  "naproxeno": [
   "anti-inflammatoires non stéroïdiens",
   "hyperkaliémiants"
  ],
  "acido acetilsalicilico": [
   "antiagrégants plaquettaires",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "donepezilo": [
   "anticholinestérasiques",
   "bradycardisants"
  ],
  "rivaroxaban": [
   "anticoagulants oraux",
   "substrats à risque du CYP3A4"
  ],
  "captopril": [
   "antihypertenseurs sauf alpha-bloquants",
   "hyperkaliémiants",
   "inhibiteurs de l'enzyme de conversion",
   "médicaments abaissant la pression artérielle",
   "médicaments, bradykinine et angio-œdème"
  ],
  "enalapril": [
   "antihypertenseurs sauf alpha-bloquants",
   "hyperkaliémiants",
   "inhibiteurs de l'enzyme de conversion",
   "médicaments abaissant la pression artérielle",
   "médicaments, bradykinine et angio-œdème"
  ],
  "furosemida": [
   "antihypertenseurs sauf alpha-bloquants",
   "diurétiques",
   "diurétiques de l'anse",
   "diurétiques hypokaliémiants",
   "hypokaliémiants",
   "hyponatrémiants",
   "médicaments abaissant la pression artérielle",
   "médicaments ototoxiques"
  ],
  "omeprazol": [
   "antisécrétoires inhibiteurs de la pompe à protons"
  ],
  "pantoprazol": [
   "antisécrétoires inhibiteurs de la pompe à protons"
  ],
  "alprazolam": [
   "benzodiazépines et apparentés",
   "médicaments sédatifs"
  ],
  "diazepam": [
   "benzodiazépines et apparentés",
   "médicaments sédatifs"
  ],
  "lorazepam": [
   "benzodiazépines et apparentés",
   "médicaments sédatifs"
  ],
  "digoxina": [
   "bradycardisants",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "salbutamol": [
   "bêta-2 mimétiques"
  ],
  "dexametasona": [
   "corticoïdes",
   "corticoïdes (voie intra-articulaire)",
   "corticoïdes métabolisés, notamment inhalés",
   "glucocorticoïdes (sauf hydrocortisone)",
   "glucocorticoïdes par voie intra-articulaire et métabolisés",
   "hypokaliémiants",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "metilprednisolona": [
   "corticoïdes",
   "corticoïdes (voie intra-articulaire)",
   "corticoïdes métabolisés, notamment inhalés",
   "glucocorticoïdes (sauf hydrocortisone)",
   "glucocorticoïdes par voie intra-articulaire et métabolisés",
   "hypokaliémiants",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "prednisona": [
   "corticoïdes",
   "corticoïdes métabolisés, notamment inhalés",
   "glucocorticoïdes (sauf hydrocortisone)",
   "hypokaliémiants",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "budesonida": [
   "corticoïdes métabolisés, notamment inhalés",
   "glucocorticoïdes (sauf hydrocortisone)",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "doxiciclina": [
   "cyclines",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "ciprofloxacino": [
   "fluoroquinolones",
   "médicaments abaissant le seuil épileptogène",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro- intestinaux, antiacides et adsorbants"
  ],
  "levofloxacino": [
   "fluoroquinolones",
   "médicaments abaissant le seuil épileptogène",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro- intestinaux, antiacides et adsorbants"
  ],
  "moxifloxacino": [
   "fluoroquinolones",
   "médicaments abaissant le seuil épileptogène",
   "substances susceptibles de donner des torsades de pointes",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "torsadogènes (sauf arsénieux, antiparasitaires, neuroleptiques, méthadone...)",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "enoxaparina": [
   "hyperkaliémiants",
   "héparines",
   "héparines (doses curatives et/ou sujet âgé)",
   "héparines (doses préventives)"
  ],
  "heparina": [
   "hyperkaliémiants",
   "hyperkaliémiants",
   "héparines",
   "héparines",
   "héparines (doses curatives et/ou sujet âgé)",
   "héparines (doses curatives et/ou sujet âgé)",
   "héparines (doses préventives)",
   "héparines (doses préventives)"
  ],
  "fluoxetina": [
   "hyponatrémiants",
   "inhibiteurs sélectifs de la recapture de la sérotonine",
   "médicaments abaissant le seuil épileptogène",
   "médicaments à l'origine d'un syndrome sérotoninergique"
  ],
  "paroxetina": [
   "hyponatrémiants",
   "inhibiteurs sélectifs de la recapture de la sérotonine",
   "médicaments abaissant le seuil épileptogène",
   "médicaments à l'origine d'un syndrome sérotoninergique"
  ],
  "rosuvastatina ezetimiba": [
   "inhibiteurs de l'HMG-CoA réductase (statines)",
   "médicaments à l'origine d'atteintes musculaires",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "simvastatina": [
   "inhibiteurs de l'HMG-CoA réductase (statines)",
   "médicaments à l'origine d'atteintes musculaires",
   "substrats à risque du CYP3A4"
  ],
  "claritromicina": [
   "inhibiteurs puissants du CYP3A4",
   "macrolides (sauf spiramycine)"
  ],
  "azitromicina": [
   "macrolides (sauf spiramycine)"
  ],
  "haloperidol": [
   "médicaments abaissant le seuil épileptogène",
   "médicaments sédatifs",
   "médicaments à l'origine d'une hypotension orthostatique",
   "neuroleptiques",
   "neuroleptiques antipsychotiques (sauf clozapine)",
   "neuroleptiques susceptibles de donner des torsades de pointes",
   "substances susceptibles de donner des torsades de pointes"
  ],
  "melitraceno flupentixol": [
   "médicaments atropiniques",
   "médicaments sédatifs",
   "médicaments à l'origine d'une hypotension orthostatique",
   "neuroleptiques",
   "neuroleptiques antipsychotiques (sauf clozapine)",
   "neuroleptiques susceptibles de donner des torsades de pointes",
   "substances susceptibles de donner des torsades de pointes"
  ],
  "hidroxizina": [
   "médicaments atropiniques",
   "médicaments sédatifs",
   "substances susceptibles de donner des torsades de pointes",
   "torsadogènes (sauf arsénieux, antiparasitaires, neuroleptiques, méthadone...)"
  ],
  "bromuro de ipratropio": [
   "médicaments atropiniques"
  ],
  "mepiramina": [
   "médicaments atropiniques",
   "médicaments sédatifs"
  ],
  "sulpirida": [
   "médicaments sédatifs",
   "médicaments à l'origine d'une hypotension orthostatique",
   "neuroleptiques",
   "neuroleptiques antipsychotiques (sauf clozapine)",
   "neuroleptiques susceptibles de donner des torsades de pointes",
   "substances susceptibles de donner des torsades de pointes",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et ads",
   "substances à absorption réduite par les topiques gastro-intestinaux, antiacides et adsorbants"
  ],
  "colchicina": [
   "médicaments à l'origine d'atteintes musculaires"
  ],
  "amoxicilina clavulanico": [
   "pénicillines",
   "pénicillines A"
  ],
  "cloxacilina": [
   "pénicillines"
  ],
  "calcifediol": [
   "vitamine D",
   "vitamine D",
   "vitamine D"
  ],
  "paracetamol": [],
  "miconazol": [],
  "ceftriaxona": [],
  "fluconazol": [],
  "tramadol": [
   "analgésiques morphiniques agonistes",
   "analgésiques morphiniques de palier II",
   "morphiniques",
   "médicaments abaissant le seuil épileptogène",
   "médicaments sédatifs",
   "médicaments à l'origine d'un syndrome sérotoninergique"
  ],
  "codeina": [
   "analgésiques morphiniques agonistes",
   "analgésiques morphiniques de palier II",
   "antitussifs morphiniques vrais",
   "morphiniques",
   "médicaments sédatifs"
  ]
 },
 "_clases": "Index des classes pharmaco-therapeutiques de l'ANSM (sept. 2023). El thesaurus habla POR CLASES: « AAS + anticoagulants oraux ». Sin esta tabla, la mitad de las interacciones pasan desapercibidas — y suelen ser las que importan. « pertenece » dice a que clases pertenece cada uno de NUESTROS principios activos.",
 "_pertenece": "De que clases forma parte cada principio activo. Cruzado con los DOS indices de la ANSM: el de clases y el de sustancias. Sin esto, « AAS + anticoagulants oraux » no se dispararia sobre el rivaroxaban — y es de las que importan.",
 "_extraccion": "Extraido cortando cada linea en el GRAN BLANCO, no en una columna fija: el riesgo a la izquierda, el nivel y la conducta a la derecha. Antes se mezclaban."
};
