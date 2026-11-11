/* LAS ESPECIALIDADES — /Salufolio/comun/especialidades.js
   Versión 2026.11.10-15:56:30
   (10/11/2026 : Cardiología — los parados por interacción se enseñan — P-H.)
   (10/11/2026 : Pfeiffer y Lawton en la ficha de Neurología — P-H.)
   (05/11/2026 : « ficha » de Neurología.)
   (05/11/2026 : « ficha » de Neumología y Cardiología — las tarjetas de especialidad, P-H.)
   (05/11/2026 : Enfermería y Vacunas, y los registros del .sf — P-H.)
   (04/11/2026 : Hospitalizaciones en azul, el mismo en el gantt y en el resumen — P-H.)
   (04/11/2026, P-H : una sola tabla para el gantt de la Cronología y el Resumen panorámico — antes vivía en cronologia.js.)
   servicios : expresión buscada en el TIPO del acontecimiento y en el SERVICIO de su procedencia, por « orden » (urgencias 1, ingresos 2) ;
   palabras : en el título y el texto, solo si nada respondió ; por_defecto : la línea de lo demás. Una especialidad nueva : una entrada más. */
var SF_ESPECIALIDADES = window.SF_ESPECIALIDADES = {
 "version": "2026.11.10-15:56:30",
 "especialidades": [
  {
   "id": "vacunas",
   "etiqueta": {
    "es": "Vacunas",
    "fr": "Vaccins",
    "ca": "Vacunes",
    "en": "Vaccines"
   },
   "color": "#b5c935",
   "servicios": "vacun",
   "palabras": "vacun",
   "solo_titulo": true,
   "uno_por_dia": true,
   "siempre": true
  },
  {
   "id": "enfermeria",
   "etiqueta": {
    "es": "Enfermería",
    "fr": "Infirmerie",
    "ca": "Infermeria",
    "en": "Nursing"
   },
   "color": "#d86ab0",
   "servicios": "enfermer[aií]",
   "palabras": "enfermer[aií]|\\bcuras?\\b|cura de|inyecci[oó]n|inyectable|administraci[oó]n de medicaci[oó]n|toma de (TA|tensi[oó]n)|control de (TA|tensi[oó]n|INR|sintrom)",
   "solo_titulo": true,
   "siempre": true
  },
  {
   "id": "oftalmologia",
   "etiqueta": {
    "es": "Oftalmología",
    "fr": "Ophtalmologie",
    "ca": "Oftalmologia",
    "en": "Ophthalmology"
   },
   "color": "#3498db",
   "servicios": "oftalm",
   "palabras": "CATARATA|DICLOFENACO.*colirio|VIGAMOX|oft[aá]lm"
  },
  {
   "id": "urologia",
   "etiqueta": {
    "es": "Urología",
    "fr": "Urologie",
    "ca": "Urologia",
    "en": "Urology"
   },
   "color": "#e67e22",
   "servicios": "urolog",
   "palabras": "HBP|PROSTAT|urolog|PSA|ESTRANGURIA|URINARI"
  },
  {
   "id": "cardiologia",
   "etiqueta": {
    "es": "Cardiología",
    "fr": "Cardiologie",
    "ca": "Cardiologia",
    "en": "Cardiology"
   },
   "color": "#e74c3c",
   "servicios": "cardiolog",
   "palabras": "HIPERTENS|cardio|\\.FA\\b|fibrilaci[oó]n|RIVAROXABAN|DOLOR TOR[AÁ]C|tensi[oó]n|ECG|arritmia",
   "ficha": {
    "icono": "❤️",
    "parametros": [
     {
      "k": "TA_sys",
      "normal": [
       90,
       140
      ]
     },
     {
      "k": "TA_dia",
      "normal": [
       60,
       90
      ]
     },
     {
      "k": "FC",
      "normal": [
       60,
       100
      ]
     },
     {
      "k": "nt_probnp",
      "normal": [
       null,
       450
      ]
     },
     {
      "k": "bnp",
      "normal": [
       null,
       100
      ]
     },
     {
      "k": "troponina",
      "normal": [
       null,
       14
      ]
     },
     {
      "k": "potasio",
      "normal": [
       3.5,
       5
      ]
     },
     {
      "k": "sodio",
      "normal": [
       134,
       145
      ]
     },
     {
      "k": "creatinina",
      "normal": [
       0.51,
       0.95
      ]
     },
     {
      "k": "filtrado",
      "normal": [
       60,
       null
      ]
     },
     {
      "k": "hemoglobina",
      "normal": [
       12,
       18
      ]
     },
     {
      "k": "colesterol_ldl",
      "normal": [
       null,
       116
      ]
     },
     {
      "k": "dimero_d",
      "normal": [
       null,
       500
      ]
     },
     {
      "k": "inr",
      "normal": [
       0.85,
       1.25
      ]
     }
    ],
    "medicamentos": "rivaroxab|apixab|edoxab|dabigatr|acenocumarol|sintrom|warfarin|heparina|enoxaparina|bemiparina|clopidogrel|prasugrel|ticagrelor|ac[ií]do acetilsalic|adiro|aspirina|bisoprolol|atenolol|carvedilol|metoprolol|nebivolol|propranolol|amlodipino|nifedipino|lercanidipino|diltiazem|verapamilo|enalapril|ramipril|lisinopril|perindopril|captopril|losart|valsart|candesart|olmesart|irbesart|telmisart|sacubitril|furosemida|torasemida|hidroclorotiazida|clortalidona|indapamida|espironolactona|eplerenona|digoxina|amiodarona|dronedarona|flecainida|nitroglicerina|mononitrato|ivabradina|ranolazina|atorvastatina|rosuvastatina|simvastatina|pravastatina|pitavastatina|ezetimiba|dapagliflozina|empagliflozina",
    "parados_mostrar_si": "interacc|interact",
    "_parados_mostrar_si": "P-H, 10/11/2026 : un medicamento suspendido o abandonado no cuenta, « sauf pour un cardiologue si la raison est une interaction avec une médication cardiologique ». Expresión buscada en la RAZÓN del paro ; la tarjeta los enseña en « Parados por una razón a tener en cuenta ». Otra especialidad : la misma línea en su ficha.",
    "_normal": "Normales de partida (05/11/2026), a revisar por P-H : las de los PARAMS de los módulos para TA, FC, troponina, potasio, sodio, creatinina, filtrado, hemoglobina, LDL, INR, dímero D ; NT-proBNP ≤ 450 (umbral habitual a partir de 75 años) ; BNP ≤ 100."
   }
  },
  {
   "id": "dermatologia",
   "etiqueta": {
    "es": "Dermatología",
    "fr": "Dermatologie",
    "ca": "Dermatologia",
    "en": "Dermatology"
   },
   "color": "#9b59b6",
   "servicios": "dermatolog",
   "palabras": "DERMATIT|ECZEMA|ECCEMA|lesi[oó]n.*piel|cut[aá]ne|GRANULOMA|PICADURA"
  },
  {
   "id": "salud_mental",
   "etiqueta": {
    "es": "Salud mental",
    "fr": "Santé mentale",
    "ca": "Salut mental",
    "en": "Mental health"
   },
   "color": "#f1c40f",
   "servicios": "psiquiat|salud mental",
   "palabras": "ANSIEDAD|DIAZEPAM|psiq|INSOMNIO|depresi[oó]n|ansiedad"
  },
  {
   "id": "traumatologia",
   "etiqueta": {
    "es": "Traumatología",
    "fr": "Traumatologie",
    "ca": "Traumatologia",
    "en": "Orthopaedics"
   },
   "color": "#2ecc71",
   "servicios": "traumatolog",
   "palabras": "PROTESIS HOMBRO|CONTUSION|TUNEL CARP|traumat|artro|fractura"
  },
  {
   "id": "angiologia",
   "etiqueta": {
    "es": "Angiología",
    "fr": "Angiologie",
    "ca": "Angiologia",
    "en": "Angiology"
   },
   "color": "#1abc9c",
   "servicios": "angiolog|vascular",
   "palabras": "INSUFICIENCIA VENOSA|vascular|VARICES"
  },
  {
   "id": "urgencias",
   "etiqueta": {
    "es": "Urgencias",
    "fr": "Urgences",
    "ca": "Urgències",
    "en": "Emergency"
   },
   "color": "#c0392b",
   "servicios": "urgenc",
   "palabras": "Urgencias|URGENCI|urgencia",
   "orden": 1
  },
  {
   "id": "hospitalizaciones",
   "etiqueta": {
    "es": "Hospitalizaciones",
    "fr": "Hospitalisations",
    "ca": "Hospitalitzacions",
    "en": "Admissions"
   },
   "color": "#4a8fe0",
   "servicios": "\\bingreso\\b|hospitaliz",
   "orden": 2
  },
  {
   "id": "neumologia",
   "etiqueta": {
    "es": "Neumología",
    "fr": "Pneumologie",
    "ca": "Pneumologia",
    "en": "Pulmonology"
   },
   "color": "#16a085",
   "servicios": "neumolog|\\bNEM\\b",
   "palabras": "NEUMOL|APNEA|bronq|EPOC|ASMA|pulmon",
   "ficha": {
    "icono": "🫁",
    "parametros": [
     {
      "k": "SpO2",
      "normal": [
       95,
       100
      ]
     },
     {
      "k": "sat_sangre",
      "normal": [
       95,
       100
      ]
     },
     {
      "k": "po2",
      "normal": [
       80,
       100
      ]
     },
     {
      "k": "pco2",
      "normal": [
       35,
       45
      ]
     },
     {
      "k": "ph",
      "normal": [
       7.35,
       7.45
      ]
     },
     {
      "k": "bicarbonato",
      "normal": [
       24,
       29
      ]
     },
     {
      "k": "exceso_base",
      "normal": [
       -2,
       2
      ]
     },
     {
      "k": "lactato",
      "normal": [
       null,
       2
      ]
     },
     {
      "k": "FC",
      "normal": [
       60,
       100
      ]
     },
     {
      "k": "Temp",
      "normal": [
       36,
       37.5
      ]
     },
     {
      "k": "hemoglobina",
      "normal": [
       12,
       18
      ]
     },
     {
      "k": "leucocitos",
      "normal": [
       4.8,
       10.8
      ]
     },
     {
      "k": "pcr",
      "normal": [
       null,
       10
      ]
     },
     {
      "k": "dimero_d",
      "normal": [
       null,
       500
      ]
     }
    ],
    "medicamentos": "salbutamol|terbutalina|formoterol|salmeterol|vilanterol|indacaterol|olodaterol|tiotropio|umeclidinio|glicopirronio|aclidinio|ipratropio|budesonida|fluticasona|beclometasona|mometasona|ciclesonida|montelukast|teofilina|roflumilast|ox[ií]geno|oxigenoterapia|bipap|cpap|ventilaci[oó]n|acetilciste[ií]na|carbociste[ií]na|ambroxol|nebuliz|inhala|prednisona|metilprednisolona|deflazacort|azitromicina",
    "_normal": "Normales de partida (05/11/2026), a revisar por P-H : las de los PARAMS de los módulos para SpO2, bicarbonato, FC, Temp, hemoglobina, leucocitos ; las habituales del adulto para la gasometría (pO2, pCO2, pH, exceso de base, lactato). PCR y dímero D : solo el límite alto."
   }
  },
  {
   "id": "neurologia",
   "etiqueta": {
    "es": "Neurología",
    "fr": "Neurologie",
    "ca": "Neurologia",
    "en": "Neurology"
   },
   "color": "#8e44ad",
   "servicios": "neurolog",
   "palabras": "NEUROLOG|NEUROF|cefalea|migrañ|VÉRTIGO|MAREO",
   "ficha": {
    "icono": "🧠",
    "parametros": [
     {
      "k": "canadiense",
      "normal": null
     },
     {
      "k": "mmse",
      "normal": [
       24,
       null
      ]
     },
     {
      "k": "barthel",
      "normal": null
     },
     {
      "k": "pfeiffer",
      "normal": null
     },
     {
      "k": "lawton",
      "normal": null
     },
     {
      "k": "downton",
      "normal": null
     },
     {
      "k": "TA_sys",
      "normal": [
       90,
       140
      ]
     },
     {
      "k": "TA_dia",
      "normal": [
       60,
       90
      ]
     },
     {
      "k": "FC",
      "normal": [
       60,
       100
      ]
     },
     {
      "k": "glucosa",
      "normal": [
       70,
       110
      ]
     },
     {
      "k": "sodio",
      "normal": [
       134,
       145
      ]
     },
     {
      "k": "vitamina_b12",
      "normal": [
       180,
       914
      ]
     },
     {
      "k": "folico",
      "normal": [
       4,
       16
      ]
     },
     {
      "k": "tsh",
      "normal": [
       0.38,
       5.33
      ]
     },
     {
      "k": "hemoglobina",
      "normal": [
       12,
       18
      ]
     },
     {
      "k": "colesterol_ldl",
      "normal": [
       null,
       116
      ]
     }
    ],
    "medicamentos": "donepezil|rivastigmin|galantamin|memantin|levetiracetam|valpro|lamotrigin|carbamazep|oxcarbazep|lacosamid|brivaracetam|gabapentin|pregabalin|fenito[ií]na|topiramat|clonazepam|diazepam|lorazepam|levodopa|carbidopa|rasagilin|safinamid|pramipexol|ropinirol|rotigotin|haloperidol|quetiapin|risperidon|olanzapin|tiaprida|clopidogrel|ac[ií]do acetilsalic|adiro|citicolin|betahistin|sulpirid|sumatript|zolmitript|rizatript|amitriptilin|toxina botul",
    "_normal": "Normales de partida (05/11/2026), a revisar por P-H : las de los PARAMS de los módulos para TA, FC, glucosa, sodio, B12, fólico, TSH, hemoglobina, LDL ; MMSE ≥ 24 ; las escalas (canadiense, Barthel, Downton) sin normal : se ve su evolución."
   }
  },
  {
   "id": "orl",
   "etiqueta": {
    "es": "ORL",
    "fr": "ORL",
    "ca": "ORL",
    "en": "ENT"
   },
   "color": "#2980b9",
   "servicios": "otorrino|\\bORL\\b",
   "palabras": "OTOR|ORL|otitis|sinusit|amigdal"
  },
  {
   "id": "radiologia",
   "etiqueta": {
    "es": "Radiología",
    "fr": "Radiologie",
    "ca": "Radiologia",
    "en": "Radiology"
   },
   "color": "#5d6d7e",
   "servicios": "radiolog",
   "palabras": "radiograf|ecograf|\\bTAC\\b|resonancia|\\bRX\\b"
  },
  {
   "id": "med_general",
   "etiqueta": {
    "es": "Med. general",
    "fr": "Méd. générale",
    "ca": "Med. general",
    "en": "General medicine"
   },
   "color": "#7f8c8d",
   "palabras": "INFECCION|infección|orina"
  },
  {
   "id": "atencion_primaria",
   "etiqueta": {
    "es": "Consulta AP",
    "fr": "Soins primaires",
    "ca": "Consulta AP",
    "en": "Primary care"
   },
   "color": "#95a5a6",
   "por_defecto": true
  }
 ],
 "registros": [
  {
   "tabla": "vacunaciones",
   "catalogo": "vacunas",
   "especialidad": "vacunas",
   "tipo": "vacuna",
   "texto": {
    "es": "Vacunación",
    "fr": "Vaccination",
    "ca": "Vacunació",
    "en": "Vaccination"
   }
  },
  {
   "tabla": "enfermeria_dx_registro",
   "catalogo": "enfermeria_dx",
   "especialidad": "enfermeria",
   "tipo": "enfermeria",
   "texto": {
    "es": "Diagnóstico de enfermería (NANDA)",
    "fr": "Diagnostic infirmier (NANDA)",
    "ca": "Diagnòstic d'infermeria (NANDA)",
    "en": "Nursing diagnosis (NANDA)"
   }
  },
  {
   "tabla": "enfermeria_int_registro",
   "catalogo": "enfermeria_int",
   "especialidad": "enfermeria",
   "tipo": "enfermeria",
   "texto": {
    "es": "Intervención de enfermería (NIC)",
    "fr": "Intervention infirmière (NIC)",
    "ca": "Intervenció d'infermeria (NIC)",
    "en": "Nursing intervention (NIC)"
   }
  }
 ],
 "_registros": "Las tablas datadas del .sf que dan pavés al gantt y al resumen (P-H, 05/11/2026) : cada fila {fecha, codigo, pdf_id} se vuelve un acontecimiento de la línea « especialidad », con el nombre de su « catalogo » del expediente. Las dos líneas nuevas van delante : sus palabras se miran antes que las de las demás. solo_titulo : sus palabras se buscan solo en el título (el texto de una historia clínica habla de vacunas sin serlo). uno_por_dia : dos documentos que citan la misma vacuna el mismo día cuentan una vez.",
 "_siempre": "siempre : la línea se enseña aunque el expediente no tenga nada, abajo, con su título en gris (P-H, 05/11/2026 : « ça évitera des questions »).",
 "_ficha": "« ficha » (P-H, 05/11/2026 ; « parados_mostrar_si » 10/11/2026) : lo que muestra la tarjeta de la especialidad (programa especialidad/) — icono ; parametros : clave única (comun/sinonimos-parametros.js) y su normal [bajo, alto] (null = sin límite) ; medicamentos : expresión buscada en el nombre y el principio activo."
};
