/* LOS SINÓNIMOS DE LOS PARÁMETROS — /Salufolio/comun/sinonimos-parametros.js
   Versión 2026.11.11-11:39:07 — una tabla, ningún código. Se lee en _leeme. Cada clave lleva su número fijo « n ». */
var SF_SINONIMOS_PARAMETROS = window.SF_SINONIMOS_PARAMETROS = {
 "version": "2026.11.11-11:39:07",
 "_leeme": [
  "LOS SINÓNIMOS DE LOS PARÁMETROS — /Salufolio/comun/sinonimos-parametros.js",
  "« Le .sf garde une seule clé par paramètre ; les synonymes vivent dans une table extérieure » (P-H, 28/10/2026). « Il ne faut pas toucher, sauf erreur, à la structure du sf, mais plutôt au niveau des modules » (P-H, 04/11/2026).",
  "El .sf guarda el nombre TAL COMO LO IMPRIME el laboratorio. Esta tabla dice qué clave única corresponde a cada nombre impreso ; MF.mesuresCanon() la aplica al leer. Nada se reescribe en el .sf.",
  "Validada por P-H el 04/11/2026 (GO) a partir de los 234 nombres de DSF2026. Un nombre nuevo : se añade a « impresos » de su clave.",
  "si_porcentaje / si_absoluto : el mismo nombre impreso puede ser un % o un valor absoluto según el laboratorio ; la unidad decide.",
  "segun_grupo : un nombre que cambia de sentido según la toma (gasometría o constantes).",
  "partir : un valor « 151/75 » se reparte en dos claves.",
  "ignorar : líneas que la IA leyó como medidas y no lo son.",
  "curva : false = resultado sin curva (orina, pruebas de virus) ; se ve en la tabla, no en las curvas."
 ],
 "equivalencia": {
  "canonico": "_clave",
  "alias": "impresos",
  "normaliza": "entera"
 },
 "_equivalencia": "Para el motor de equivalencias (comun/equivalencias.js) : la clave es el nombre canónico ; « entera » compara el nombre entero, paréntesis y % incluidos — « HEMOGLOBINA (EN ORINA) » no es « HEMOGLOBINA ».",
 "parametros": {
  "hemoglobina": {
   "n": 1,
   "grupo": "HEMATOLOGÍA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Hemoglobina",
    "fr": "Hémoglobine",
    "ca": "Hemoglobina",
    "en": "Haemoglobin"
   },
   "impresos": [
    "HEMOGLOBINA",
    "HEMOGLOBINA (EN SANGRE)",
    "Hb"
   ],
   "_nota": "« Hb » viene de la gasometría : mismo analito, otro aparato.",
   "buscar": [
    "Hb",
    "Hgb"
   ]
  },
  "hematocrito": {
   "n": 2,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Hematocrito",
    "fr": "Hématocrite",
    "ca": "Hematòcrit",
    "en": "Haematocrit"
   },
   "impresos": [
    "HEMATOCRITO",
    "HEMATOCRITO (EN SANGRE)",
    "POC HEMATOCRITO"
   ]
  },
  "hematies": {
   "n": 3,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10⁶/µL",
   "curva": true,
   "etiqueta": {
    "es": "Hematíes",
    "fr": "Globules rouges",
    "ca": "Hematies",
    "en": "Red blood cells"
   },
   "impresos": [
    "HEMATIES",
    "HEMATÍES (EN SANGRE)"
   ],
   "buscar": [
    "eritrocitos",
    "globules rouges",
    "glòbuls rojos",
    "glóbulos rojos",
    "GR",
    "RBC",
    "red cells",
    "érythrocytes"
   ]
  },
  "vcm": {
   "n": 4,
   "grupo": "HEMATOLOGÍA",
   "unidad": "fL",
   "curva": true,
   "etiqueta": {
    "es": "VCM",
    "fr": "VGM",
    "ca": "VCM",
    "en": "MCV"
   },
   "impresos": [
    "VOLUMEN CORPUSCULAR MEDIO",
    "VOLUMEN CORPUSCULAR MEDIO (EN SANGRE)"
   ]
  },
  "hcm": {
   "n": 5,
   "grupo": "HEMATOLOGÍA",
   "unidad": "pg",
   "curva": true,
   "etiqueta": {
    "es": "HCM",
    "fr": "TCMH",
    "ca": "HCM",
    "en": "MCH"
   },
   "impresos": [
    "HBG CORPUSCULAR MEDIA",
    "HEMOGLOBINA CORPUSCULAR MEDIA (EN SANGRE)"
   ]
  },
  "chcm": {
   "n": 6,
   "grupo": "HEMATOLOGÍA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "CHCM",
    "fr": "CCMH",
    "ca": "CHCM",
    "en": "MCHC"
   },
   "impresos": [
    "CONC. HBG CORPUSCULAR MEDIA",
    "CONCENTRACIÓN HEMOGLOBINA CORPUSCULAR MEDIA (EN SANGRE)"
   ]
  },
  "rdw": {
   "n": 7,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "RDW",
    "fr": "IDR",
    "ca": "ADE",
    "en": "RDW"
   },
   "impresos": [
    "RDW-CV",
    "ÍNDICE DISTRIBUCIÓN HEMATÍES (CV) (EN SANGRE)"
   ]
  },
  "leucocitos": {
   "n": 8,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Leucocitos",
    "fr": "Leucocytes",
    "ca": "Leucòcits",
    "en": "White blood cells"
   },
   "impresos": [
    "LEUCOCITOS",
    "LEUCOCITOS (EN SANGRE)"
   ],
   "buscar": [
    "GB",
    "globules blancs",
    "glòbuls blancs",
    "glóbulos blancos",
    "WBC",
    "white cells"
   ]
  },
  "neutrofilos": {
   "n": 9,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Neutrófilos",
    "fr": "Neutrophiles",
    "ca": "Neutròfils",
    "en": "Neutrophils"
   },
   "impresos": [
    "NEUTROFILOS",
    "NEUTRÓFILOS ABSOLUTOS (EN SANGRE)"
   ],
   "si_porcentaje": "neutrofilos_pct",
   "_nota": "VALOR ABSOLUTO. x10³/µL y x10⁹/L son el mismo número.",
   "prioridad": 2
  },
  "neutrofilos_pct": {
   "n": 10,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Neutrófilos %",
    "fr": "Neutrophiles %",
    "ca": "Neutròfils %",
    "en": "Neutrophils %"
   },
   "impresos": [
    "NEUTROFILOS %",
    "NEUTRÓFILOS (EN SANGRE)"
   ],
   "si_absoluto": "neutrofilos",
   "_nota": "PORCENTAJE. Ojo : « NEUTRÓFILOS (EN SANGRE) » es un % en este laboratorio.",
   "prioridad": -2
  },
  "linfocitos": {
   "n": 11,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Linfocitos",
    "fr": "Lymphocytes",
    "ca": "Limfòcits",
    "en": "Lymphocytes"
   },
   "impresos": [
    "LINFOCITOS",
    "LINFOCITOS ABSOLUTOS (EN SANGRE)"
   ],
   "si_porcentaje": "linfocitos_pct",
   "_nota": "VALOR ABSOLUTO.",
   "prioridad": 2
  },
  "linfocitos_pct": {
   "n": 12,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Linfocitos %",
    "fr": "Lymphocytes %",
    "ca": "Limfòcits %",
    "en": "Lymphocytes %"
   },
   "impresos": [
    "LINFOCITOS %",
    "LINFOCITOS (EN SANGRE)"
   ],
   "si_absoluto": "linfocitos",
   "_nota": "PORCENTAJE.",
   "prioridad": -2
  },
  "monocitos": {
   "n": 13,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Monocitos",
    "fr": "Monocytes",
    "ca": "Monòcits",
    "en": "Monocytes"
   },
   "impresos": [
    "MONOCITOS",
    "MONOCITOS ABSOLUTOS (EN SANGRE)"
   ],
   "si_porcentaje": "monocitos_pct",
   "_nota": "VALOR ABSOLUTO.",
   "prioridad": 2
  },
  "monocitos_pct": {
   "n": 14,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Monocitos %",
    "fr": "Monocytes %",
    "ca": "Monòcits %",
    "en": "Monocytes %"
   },
   "impresos": [
    "MONOCITOS %",
    "MONOCITOS (EN SANGRE)"
   ],
   "si_absoluto": "monocitos",
   "_nota": "PORCENTAJE.",
   "prioridad": -2
  },
  "eosinofilos": {
   "n": 15,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Eosinófilos",
    "fr": "Éosinophiles",
    "ca": "Eosinòfils",
    "en": "Eosinophils"
   },
   "impresos": [
    "EOSINOFILOS",
    "EOSINÓFILOS ABSOLUTOS (EN SANGRE)"
   ],
   "si_porcentaje": "eosinofilos_pct",
   "_nota": "VALOR ABSOLUTO.",
   "prioridad": 2
  },
  "eosinofilos_pct": {
   "n": 16,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Eosinófilos %",
    "fr": "Éosinophiles %",
    "ca": "Eosinòfils %",
    "en": "Eosinophils %"
   },
   "impresos": [
    "EOSINOFILOS %",
    "EOSINÓFILOS (EN SANGRE)"
   ],
   "si_absoluto": "eosinofilos",
   "_nota": "PORCENTAJE.",
   "prioridad": -2
  },
  "basofilos": {
   "n": 17,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Basófilos",
    "fr": "Basophiles",
    "ca": "Basòfils",
    "en": "Basophils"
   },
   "impresos": [
    "BASOFILOS",
    "BASOFILOS ABSOLUTOS (EN SANGRE)"
   ],
   "si_porcentaje": "basofilos_pct",
   "_nota": "VALOR ABSOLUTO.",
   "prioridad": 2
  },
  "basofilos_pct": {
   "n": 18,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Basófilos %",
    "fr": "Basophiles %",
    "ca": "Basòfils %",
    "en": "Basophils %"
   },
   "impresos": [
    "BASOFILOS %",
    "BASÓFILOS (EN SANGRE)"
   ],
   "si_absoluto": "basofilos",
   "_nota": "PORCENTAJE.",
   "prioridad": -2
  },
  "plaquetas": {
   "n": 19,
   "grupo": "HEMATOLOGÍA",
   "unidad": "x10³/µL",
   "curva": true,
   "etiqueta": {
    "es": "Plaquetas",
    "fr": "Plaquettes",
    "ca": "Plaquetes",
    "en": "Platelets"
   },
   "impresos": [
    "PLAQUETAS",
    "PLAQUETAS (EN SANGRE)"
   ],
   "buscar": [
    "PLT",
    "thrombocytes",
    "trombocitos"
   ]
  },
  "vpm": {
   "n": 20,
   "grupo": "HEMATOLOGÍA",
   "unidad": "fL",
   "curva": true,
   "etiqueta": {
    "es": "VPM",
    "fr": "VPM",
    "ca": "VPM",
    "en": "MPV"
   },
   "impresos": [
    "MPV",
    "VOLUMEN PLAQUETAR MEDIO (EN SANGRE)"
   ]
  },
  "pdw": {
   "n": 21,
   "grupo": "HEMATOLOGÍA",
   "unidad": "fL",
   "curva": true,
   "etiqueta": {
    "es": "PDW",
    "fr": "IDP",
    "ca": "PDW",
    "en": "PDW"
   },
   "impresos": [
    "PDW"
   ]
  },
  "plaquetocrito": {
   "n": 22,
   "grupo": "HEMATOLOGÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Plaquetocrito",
    "fr": "Thrombocrite",
    "ca": "Plaquetòcrit",
    "en": "Plateletcrit"
   },
   "impresos": [
    "PCT"
   ],
   "_nota": "« PCT » en % es el PLAQUETOCRITO, no la procalcitonina (ng/mL)."
  },
  "vsg": {
   "n": 23,
   "grupo": "HEMATOLOGÍA",
   "unidad": "mm/h",
   "curva": true,
   "etiqueta": {
    "es": "VSG",
    "fr": "VS",
    "ca": "VSG",
    "en": "ESR"
   },
   "impresos": [
    "VELOCIDAD DE SEDIMENTACIÓN GLOBULAR"
   ]
  },
  "inr": {
   "n": 24,
   "grupo": "COAGULACIÓN",
   "unidad": "",
   "curva": true,
   "etiqueta": {
    "es": "INR",
    "fr": "INR",
    "ca": "INR",
    "en": "INR"
   },
   "impresos": [
    "INR",
    "INR (hemostasia básica)",
    "TIEMPO DE PROTROMBINA EN RATIO (INR) (EN SANGRE)"
   ],
   "buscar": [
    "coagulación",
    "coagulation"
   ]
  },
  "tp": {
   "n": 25,
   "grupo": "COAGULACIÓN",
   "unidad": "seg",
   "curva": true,
   "etiqueta": {
    "es": "Tiempo de protrombina",
    "fr": "Temps de prothrombine",
    "ca": "Temps de protrombina",
    "en": "Prothrombin time"
   },
   "impresos": [
    "T. PROTROMBINA",
    "T. PROTROMBINA (hemostasia básica)",
    "TIEMPO DE PROTROMBINA"
   ]
  },
  "tp_ratio": {
   "n": 26,
   "grupo": "COAGULACIÓN",
   "unidad": "",
   "curva": true,
   "etiqueta": {
    "es": "TP ratio",
    "fr": "TP ratio",
    "ca": "TP ràtio",
    "en": "PT ratio"
   },
   "impresos": [
    "TP RATIO",
    "TP RATIO (hemostasia básica)"
   ],
   "_nota": "¿Es lo mismo que el INR, o se guarda aparte ? (el laboratorio da los dos)"
  },
  "actividad_protrombina": {
   "n": 27,
   "grupo": "COAGULACIÓN",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Índice de Quick",
    "fr": "Taux de prothrombine (Quick)",
    "ca": "Índex de Quick",
    "en": "Quick index"
   },
   "impresos": [
    "INDICE DE QUICK",
    "INDICE DE QUICK (hemostasia básica)",
    "ÍNDICE DE QUICK (EN SANGRE)"
   ]
  },
  "ttpa": {
   "n": 28,
   "grupo": "COAGULACIÓN",
   "unidad": "seg",
   "curva": true,
   "etiqueta": {
    "es": "TTPA",
    "fr": "TCA",
    "ca": "TTPA",
    "en": "aPTT"
   },
   "impresos": [
    "T.TROMBOPLASTINA PARCIAL ACTIV",
    "T.TROMBOPLASTINA PARCIAL ACTIV (hemostasia básica)",
    "TIEMPO DE TROMBOPLASTINA PARCIAL ACTIVADO (TTPA)"
   ]
  },
  "ttpa_ratio": {
   "n": 29,
   "grupo": "COAGULACIÓN",
   "unidad": "",
   "curva": true,
   "etiqueta": {
    "es": "TTPA ratio",
    "fr": "TCA ratio",
    "ca": "TTPA ràtio",
    "en": "aPTT ratio"
   },
   "impresos": [
    "TTPA RATIO",
    "TTPA RATIO (hemostasia básica)",
    "TIEMPO DE TROMBOPLASTINA PARCIAL ACTIVADO (TTPA) EN RATIO (EN SANGRE)"
   ]
  },
  "tt": {
   "n": 30,
   "grupo": "COAGULACIÓN",
   "unidad": "seg",
   "curva": true,
   "etiqueta": {
    "es": "Tiempo de trombina",
    "fr": "Temps de thrombine",
    "ca": "Temps de trombina",
    "en": "Thrombin time"
   },
   "impresos": [
    "T.TROMBINA"
   ]
  },
  "tt_ratio": {
   "n": 31,
   "grupo": "COAGULACIÓN",
   "unidad": "",
   "curva": true,
   "etiqueta": {
    "es": "Tiempo de trombina ratio",
    "fr": "Temps de thrombine ratio",
    "ca": "Temps de trombina ràtio",
    "en": "Thrombin time ratio"
   },
   "impresos": [
    "Tiempo de trombina Ratio"
   ]
  },
  "fibrinogeno": {
   "n": 32,
   "grupo": "COAGULACIÓN",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Fibrinógeno",
    "fr": "Fibrinogène",
    "ca": "Fibrinogen",
    "en": "Fibrinogen"
   },
   "impresos": [
    "FIBRINOGENO",
    "FIBRINOGENO (hemostasia básica)",
    "FIBRINÓGENO, ACTIVIDAD"
   ]
  },
  "dimero_d": {
   "n": 33,
   "grupo": "COAGULACIÓN",
   "unidad": "ng/mL",
   "curva": true,
   "etiqueta": {
    "es": "Dímero D",
    "fr": "D-dimères",
    "ca": "Dímer D",
    "en": "D-dimer"
   },
   "impresos": [
    "DIMEROS D",
    "DIMERO D DE LA FIBRINA",
    "dimero-D"
   ],
   "buscar": [
    "D dímeros",
    "D-dimer",
    "D-dimères"
   ]
  },
  "glucosa": {
   "n": 34,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Glucosa",
    "fr": "Glycémie",
    "ca": "Glucosa",
    "en": "Glucose"
   },
   "impresos": [
    "GLUCOSA",
    "GLUCOSA (SANGRE)",
    "glucemia",
    "Glu"
   ],
   "_nota": "« Glu » de la gasometría y « glucemia » (capilar ?) juntos con la del laboratorio.",
   "buscar": [
    "azúcar",
    "blood sugar",
    "glicèmia",
    "glucemia",
    "glycémie",
    "sucre",
    "sugar"
   ]
  },
  "hba1c": {
   "n": 35,
   "grupo": "BIOQUÍMICA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "HbA1c",
    "fr": "HbA1c",
    "ca": "HbA1c",
    "en": "HbA1c"
   },
   "impresos": [
    "HEMOGLOBINA GLICADA A1c (HbA1c)",
    "GLICOHEMOGLOBINA A1C (%)"
   ],
   "buscar": [
    "glycated",
    "hemoglobina glicada",
    "hemoglobina glicosilada",
    "hémoglobine glyquée"
   ]
  },
  "creatinina": {
   "n": 36,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Creatinina",
    "fr": "Créatinine",
    "ca": "Creatinina",
    "en": "Creatinine"
   },
   "impresos": [
    "CREATININA",
    "CREATININA (SANGRE)"
   ],
   "buscar": [
    "creatininemia",
    "créatininémie"
   ]
  },
  "filtrado": {
   "n": 37,
   "grupo": "BIOQUÍMICA",
   "unidad": "mL/min",
   "curva": true,
   "etiqueta": {
    "es": "Filtrado glomerular",
    "fr": "Débit de filtration glomérulaire",
    "ca": "Filtrat glomerular",
    "en": "Glomerular filtration rate"
   },
   "impresos": [
    "FILTRADO GLOM.ESTIMADO CKD-EPI",
    "FILTRADO GLOMERULAR ESTIMADO CKD - EPI",
    "FG",
    "FILTRADO GLOMERULAR ESTIMADO MDRD-4"
   ],
   "_nota": "MDRD-4 y CKD-EPI son DOS fórmulas : dan cifras algo distintas. ¿Juntos en una curva, o MDRD-4 aparte (filtrado_mdrd) ?",
   "buscar": [
    "aclaramiento",
    "clairance",
    "DFG",
    "débit de filtration glomérulaire",
    "eGFR",
    "FG",
    "filtrado glomerular",
    "GFR",
    "TFG"
   ],
   "prioridad": 2
  },
  "urea": {
   "n": 38,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Urea",
    "fr": "Urée",
    "ca": "Urea",
    "en": "Urea"
   },
   "impresos": [
    "UREA"
   ],
   "buscar": [
    "BUN",
    "uremia",
    "urée",
    "urémie"
   ]
  },
  "acido_urico": {
   "n": 39,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Ácido úrico",
    "fr": "Acide urique",
    "ca": "Àcid úric",
    "en": "Uric acid"
   },
   "impresos": [
    "URATO"
   ],
   "buscar": [
    "acide urique",
    "uric acid",
    "uricemia",
    "uricémie"
   ]
  },
  "sodio": {
   "n": 40,
   "grupo": "BIOQUÍMICA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Sodio",
    "fr": "Sodium",
    "ca": "Sodi",
    "en": "Sodium"
   },
   "impresos": [
    "SODIO",
    "Na"
   ],
   "_nota": "« Na » de la gasometría con el del laboratorio.",
   "buscar": [
    "natremia",
    "natrémie",
    "sodemia"
   ]
  },
  "potasio": {
   "n": 41,
   "grupo": "BIOQUÍMICA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Potasio",
    "fr": "Potassium",
    "ca": "Potassi",
    "en": "Potassium"
   },
   "impresos": [
    "POTASIO",
    "K"
   ],
   "_nota": "« K » de la gasometría con el del laboratorio.",
   "buscar": [
    "kalemia",
    "kaliémie",
    "potasemia",
    "potasse"
   ]
  },
  "cloro": {
   "n": 42,
   "grupo": "BIOQUÍMICA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Cloro",
    "fr": "Chlore",
    "ca": "Clor",
    "en": "Chloride"
   },
   "impresos": [
    "CLORO",
    "CLORURO"
   ]
  },
  "calcio": {
   "n": 43,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Calcio",
    "fr": "Calcium",
    "ca": "Calci",
    "en": "Calcium"
   },
   "impresos": [
    "CALCIO"
   ]
  },
  "calcio_corregido": {
   "n": 44,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Calcio corregido",
    "fr": "Calcium corrigé",
    "ca": "Calci corregit",
    "en": "Corrected calcium"
   },
   "impresos": [
    "CALCIO CORREGIDO"
   ]
  },
  "calcio_ionico": {
   "n": 45,
   "grupo": "GASOMETRÍA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Calcio iónico",
    "fr": "Calcium ionisé",
    "ca": "Calci iònic",
    "en": "Ionised calcium"
   },
   "impresos": [
    "Ca"
   ],
   "_nota": "« Ca » de la gasometría suele ser el calcio IÓNICO (≈ la mitad del total) : no mezclar con « CALCIO »."
  },
  "fosforo": {
   "n": 46,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Fósforo",
    "fr": "Phosphore",
    "ca": "Fòsfor",
    "en": "Phosphate"
   },
   "impresos": [
    "FOSFORO",
    "FOSFATO"
   ]
  },
  "magnesio": {
   "n": 47,
   "grupo": "BIOQUÍMICA",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Magnesio",
    "fr": "Magnésium",
    "ca": "Magnesi",
    "en": "Magnesium"
   },
   "impresos": [
    "MAGNESIO"
   ]
  },
  "proteinas": {
   "n": 48,
   "grupo": "BIOQUÍMICA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Proteínas totales",
    "fr": "Protéines totales",
    "ca": "Proteïnes totals",
    "en": "Total protein"
   },
   "impresos": [
    "PROTEÍNAS TOTALES",
    "PROTEINAS TOTALES"
   ]
  },
  "albumina": {
   "n": 49,
   "grupo": "BIOQUÍMICA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Albúmina",
    "fr": "Albumine",
    "ca": "Albúmina",
    "en": "Albumin"
   },
   "impresos": [
    "ALBÚMINA",
    "ALBUMINA",
    "ALBÚMINA (EN SANGRE)"
   ]
  },
  "co2_total": {
   "n": 50,
   "grupo": "BIOQUÍMICA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "CO₂ total",
    "fr": "CO₂ total",
    "ca": "CO₂ total",
    "en": "Total CO₂"
   },
   "impresos": [
    "DIÓXIDO DE CARBONO (CO2 TOTAL)",
    "CO2 total"
   ]
  },
  "gpt": {
   "n": 51,
   "grupo": "HEPÁTICO",
   "unidad": "UI/L",
   "curva": true,
   "etiqueta": {
    "es": "GPT (ALT)",
    "fr": "ALAT (GPT)",
    "ca": "GPT (ALT)",
    "en": "ALT (GPT)"
   },
   "impresos": [
    "GPT",
    "ALANINA-AMINOTRANSFERASA (GPT)"
   ]
  },
  "got": {
   "n": 52,
   "grupo": "HEPÁTICO",
   "unidad": "UI/L",
   "curva": true,
   "etiqueta": {
    "es": "GOT (AST)",
    "fr": "ASAT (GOT)",
    "ca": "GOT (AST)",
    "en": "AST (GOT)"
   },
   "impresos": [
    "GOT",
    "ASPARTATO-AMINOTRANSFERASA (GOT)"
   ]
  },
  "ggt": {
   "n": 53,
   "grupo": "HEPÁTICO",
   "unidad": "UI/L",
   "curva": true,
   "etiqueta": {
    "es": "GGT",
    "fr": "Gamma-GT",
    "ca": "GGT",
    "en": "GGT"
   },
   "impresos": [
    "GGT",
    "GAMMA-GLUTAMIL-TRANSPEPTIDASA (gGT)"
   ]
  },
  "fosfatasa": {
   "n": 54,
   "grupo": "HEPÁTICO",
   "unidad": "UI/L",
   "curva": true,
   "etiqueta": {
    "es": "Fosfatasa alcalina",
    "fr": "Phosphatases alcalines",
    "ca": "Fosfatasa alcalina",
    "en": "Alkaline phosphatase"
   },
   "impresos": [
    "FOSFATASA ALCALINA"
   ]
  },
  "bilirrubina": {
   "n": 55,
   "grupo": "HEPÁTICO",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Bilirrubina total",
    "fr": "Bilirubine totale",
    "ca": "Bilirubina total",
    "en": "Total bilirubin"
   },
   "impresos": [
    "BILIRRUBINA TOTAL"
   ]
  },
  "ldh": {
   "n": 56,
   "grupo": "HEPÁTICO",
   "unidad": "UI/L",
   "curva": true,
   "etiqueta": {
    "es": "LDH",
    "fr": "LDH",
    "ca": "LDH",
    "en": "LDH"
   },
   "impresos": [
    "LDH",
    "LACTATO-DESHIDROGENASA (LDH)"
   ]
  },
  "cpk": {
   "n": 57,
   "grupo": "HEPÁTICO",
   "unidad": "UI/L",
   "curva": true,
   "etiqueta": {
    "es": "CPK",
    "fr": "CPK",
    "ca": "CPK",
    "en": "CK"
   },
   "impresos": [
    "CPK",
    "CREATINCINASA (CK)"
   ]
  },
  "colesterol": {
   "n": 58,
   "grupo": "LÍPIDOS",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Colesterol total",
    "fr": "Cholestérol total",
    "ca": "Colesterol total",
    "en": "Total cholesterol"
   },
   "impresos": [
    "COLESTEROL TOTAL",
    "COLESTEROL"
   ],
   "buscar": [
    "cholesterol",
    "cholestérol"
   ]
  },
  "colesterol_hdl": {
   "n": 59,
   "grupo": "LÍPIDOS",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "HDL",
    "fr": "HDL",
    "ca": "HDL",
    "en": "HDL"
   },
   "impresos": [
    "COLESTEROL HDL",
    "HDL COLESTEROL"
   ]
  },
  "colesterol_ldl": {
   "n": 60,
   "grupo": "LÍPIDOS",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "LDL",
    "fr": "LDL",
    "ca": "LDL",
    "en": "LDL"
   },
   "impresos": [
    "COLESTEROL LDL CALCULADO",
    "LDL COLESTEROL CALCULADO"
   ]
  },
  "trigliceridos": {
   "n": 61,
   "grupo": "LÍPIDOS",
   "unidad": "mg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Triglicéridos",
    "fr": "Triglycérides",
    "ca": "Triglicèrids",
    "en": "Triglycerides"
   },
   "impresos": [
    "TRIGLICERIDOS (SANGRE)",
    "TRIGLICERIDOS"
   ],
   "buscar": [
    "TG",
    "triglycérides"
   ]
  },
  "troponina": {
   "n": 62,
   "grupo": "CARDÍACO",
   "unidad": "ng/L",
   "curva": true,
   "etiqueta": {
    "es": "Troponina",
    "fr": "Troponine",
    "ca": "Troponina",
    "en": "Troponin"
   },
   "impresos": [
    "TROPONINA ULTRASENSIBLE",
    "TROPONINA ULTRASENSIBLE (2ª)"
   ],
   "_nota": "« (2ª) » = segunda toma del mismo día : un punto más en la curva.",
   "buscar": [
    "hs-TnT",
    "TnI",
    "TnT",
    "tropo"
   ]
  },
  "bnp": {
   "n": 63,
   "grupo": "CARDÍACO",
   "unidad": "pg/mL",
   "curva": true,
   "etiqueta": {
    "es": "BNP",
    "fr": "BNP",
    "ca": "BNP",
    "en": "BNP"
   },
   "impresos": [
    "PÉPTIDO NATRIURÉTICO CEREBRAL (BNP)"
   ]
  },
  "nt_probnp": {
   "n": 64,
   "grupo": "CARDÍACO",
   "unidad": "pg/mL",
   "curva": true,
   "etiqueta": {
    "es": "NT-proBNP",
    "fr": "NT-proBNP",
    "ca": "NT-proBNP",
    "en": "NT-proBNP"
   },
   "impresos": [
    "NT- PROBNP"
   ],
   "_nota": "NT-proBNP y BNP son DOS pruebas con valores muy distintos : ¿aparte (propuesto) ?"
  },
  "mioglobina": {
   "n": 65,
   "grupo": "CARDÍACO",
   "unidad": "ng/mL",
   "curva": true,
   "etiqueta": {
    "es": "Mioglobina",
    "fr": "Myoglobine",
    "ca": "Mioglobina",
    "en": "Myoglobin"
   },
   "impresos": [
    "MIOGLOBINA"
   ]
  },
  "tsh": {
   "n": 66,
   "grupo": "HORMONAS",
   "unidad": "mUI/L",
   "curva": true,
   "etiqueta": {
    "es": "TSH",
    "fr": "TSH",
    "ca": "TSH",
    "en": "TSH"
   },
   "impresos": [
    "TSH (TIROTROPINA)",
    "TSH 3ª GENERACIÓN"
   ],
   "buscar": [
    "thyroid",
    "thyroïde",
    "tiroide",
    "tiroides"
   ]
  },
  "t4": {
   "n": 67,
   "grupo": "HORMONAS",
   "unidad": "ng/dL",
   "curva": true,
   "etiqueta": {
    "es": "T4 libre",
    "fr": "T4 libre",
    "ca": "T4 lliure",
    "en": "Free T4"
   },
   "impresos": [
    "TIROXINA LIBRE (T4 LIBRE)",
    "T4 LIBRE"
   ],
   "_nota": "Clave « t4 » (decisión del 28/10 para el Radar)."
  },
  "vitamina_d": {
   "n": 68,
   "grupo": "VITAMINAS/FE",
   "unidad": "ng/mL",
   "curva": true,
   "etiqueta": {
    "es": "Vitamina D",
    "fr": "Vitamine D",
    "ca": "Vitamina D",
    "en": "Vitamin D"
   },
   "impresos": [
    "CALCIDIOL (25 HIDROXICOLECALCIFEROL)"
   ]
  },
  "vitamina_b12": {
   "n": 69,
   "grupo": "VITAMINAS/FE",
   "unidad": "pg/mL",
   "curva": true,
   "etiqueta": {
    "es": "Vitamina B12",
    "fr": "Vitamine B12",
    "ca": "Vitamina B12",
    "en": "Vitamin B12"
   },
   "impresos": [
    "VITAMINA B12 (CIANOCOBALAMINA)",
    "VITAMINA B12 (COBALAMINA)"
   ]
  },
  "folico": {
   "n": 70,
   "grupo": "VITAMINAS/FE",
   "unidad": "ng/mL",
   "curva": true,
   "etiqueta": {
    "es": "Ácido fólico",
    "fr": "Acide folique",
    "ca": "Àcid fòlic",
    "en": "Folic acid"
   },
   "impresos": [
    "ACIDO FOLICO (FOLATO)",
    "FOLICO"
   ]
  },
  "ferritina": {
   "n": 71,
   "grupo": "VITAMINAS/FE",
   "unidad": "ng/mL",
   "curva": true,
   "etiqueta": {
    "es": "Ferritina",
    "fr": "Ferritine",
    "ca": "Ferritina",
    "en": "Ferritin"
   },
   "impresos": [
    "FERRITINA"
   ]
  },
  "hierro": {
   "n": 72,
   "grupo": "VITAMINAS/FE",
   "unidad": "µg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Hierro",
    "fr": "Fer",
    "ca": "Ferro",
    "en": "Iron"
   },
   "impresos": [
    "HIERRO"
   ]
  },
  "ctfh": {
   "n": 73,
   "grupo": "VITAMINAS/FE",
   "unidad": "µg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Capacidad total de fijación del hierro",
    "fr": "Capacité totale de fixation du fer",
    "ca": "Capacitat total de fixació del ferro",
    "en": "Total iron-binding capacity"
   },
   "impresos": [
    "CAPACIDAD TOTAL DE FIJACION DEL HIERRO"
   ]
  },
  "cfh_libre": {
   "n": 74,
   "grupo": "VITAMINAS/FE",
   "unidad": "µg/dL",
   "curva": true,
   "etiqueta": {
    "es": "Capacidad de fijación libre",
    "fr": "Capacité de fixation libre",
    "ca": "Capacitat de fixació lliure",
    "en": "Unsaturated iron-binding capacity"
   },
   "impresos": [
    "CAPACIDAD FIJACIÓN HIERRO LIBRE"
   ]
  },
  "ist": {
   "n": 75,
   "grupo": "VITAMINAS/FE",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Saturación de transferrina",
    "fr": "Saturation de la transferrine",
    "ca": "Saturació de transferrina",
    "en": "Transferrin saturation"
   },
   "impresos": [
    "TRANSFERRINA: ÍNDICE DE SATURACIÓN (EN SANGRE)"
   ],
   "_nota": "No es la « transferrina » (proteína, mg/dL) : es su % de saturación.",
   "prioridad": -2
  },
  "pcr": {
   "n": 76,
   "grupo": "INFLAMACIÓN",
   "unidad": "mg/L",
   "curva": true,
   "etiqueta": {
    "es": "Proteína C reactiva",
    "fr": "Protéine C réactive",
    "ca": "Proteïna C reactiva",
    "en": "C-reactive protein"
   },
   "impresos": [
    "PROTEINA C REACTIVA",
    "PROTEÍNA C REACTIVA (PCR)"
   ],
   "_nota": "¡ « PCR Virus Influenza… » NO es esto ! (PCR = prueba de virus) — van a « pruebas ».",
   "buscar": [
    "CRP",
    "protéine C réactive"
   ]
  },
  "procalcitonina": {
   "n": 77,
   "grupo": "INFLAMACIÓN",
   "unidad": "ng/mL",
   "curva": true,
   "etiqueta": {
    "es": "Procalcitonina",
    "fr": "Procalcitonine",
    "ca": "Procalcitonina",
    "en": "Procalcitonin"
   },
   "impresos": [
    "PROCALCITONINA"
   ]
  },
  "prot_albumina_pct": {
   "n": 78,
   "grupo": "PROTEINOGRAMA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Albúmina %",
    "fr": "Albumine %",
    "ca": "Albúmina %",
    "en": "Albumin %"
   },
   "impresos": [
    "ALBÚMINA (%) (EN SANGRE)"
   ]
  },
  "prot_alfa1": {
   "n": 79,
   "grupo": "PROTEINOGRAMA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Alfa 1 globulina",
    "fr": "Alpha 1 globuline",
    "ca": "Alfa 1 globulina",
    "en": "Alpha-1 globulin"
   },
   "impresos": [
    "ALFA 1 GLOBULINA (EN SANGRE)"
   ]
  },
  "prot_alfa1_pct": {
   "n": 80,
   "grupo": "PROTEINOGRAMA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Alfa 1 globulina %",
    "fr": "Alpha 1 globuline %",
    "ca": "Alfa 1 globulina %",
    "en": "Alpha-1 globulin %"
   },
   "impresos": [
    "ALFA 1 GLOBULINA (%) (EN SANGRE)"
   ]
  },
  "prot_alfa2": {
   "n": 81,
   "grupo": "PROTEINOGRAMA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Alfa 2 globulina",
    "fr": "Alpha 2 globuline",
    "ca": "Alfa 2 globulina",
    "en": "Alpha-2 globulin"
   },
   "impresos": [
    "ALFA 2 GLOBULINA (EN SANGRE)"
   ]
  },
  "prot_alfa2_pct": {
   "n": 82,
   "grupo": "PROTEINOGRAMA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Alfa 2 globulina %",
    "fr": "Alpha 2 globuline %",
    "ca": "Alfa 2 globulina %",
    "en": "Alpha-2 globulin %"
   },
   "impresos": [
    "ALFA 2 GLOBULINA (%) (EN SANGRE)"
   ]
  },
  "prot_beta1": {
   "n": 83,
   "grupo": "PROTEINOGRAMA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Beta 1 globulina",
    "fr": "Bêta 1 globuline",
    "ca": "Beta 1 globulina",
    "en": "Beta-1 globulin"
   },
   "impresos": [
    "BETA 1 GLOBULINA (EN SANGRE)"
   ]
  },
  "prot_beta1_pct": {
   "n": 84,
   "grupo": "PROTEINOGRAMA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Beta 1 globulina %",
    "fr": "Bêta 1 globuline %",
    "ca": "Beta 1 globulina %",
    "en": "Beta-1 globulin %"
   },
   "impresos": [
    "BETA 1 GLOBULINA (%) (EN SANGRE)"
   ]
  },
  "prot_gamma": {
   "n": 85,
   "grupo": "PROTEINOGRAMA",
   "unidad": "g/dL",
   "curva": true,
   "etiqueta": {
    "es": "Gammaglobulinas",
    "fr": "Gammaglobulines",
    "ca": "Gammaglobulines",
    "en": "Gamma globulins"
   },
   "impresos": [
    "GAMMA GLOBULINAS (EN SANGRE)"
   ]
  },
  "prot_gamma_pct": {
   "n": 86,
   "grupo": "PROTEINOGRAMA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Gammaglobulinas %",
    "fr": "Gammaglobulines %",
    "ca": "Gammaglobulines %",
    "en": "Gamma globulins %"
   },
   "impresos": [
    "GAMMA GLOBULINA (%) (EN SANGRE)"
   ]
  },
  "ph": {
   "n": 87,
   "grupo": "GASOMETRÍA",
   "unidad": "",
   "curva": true,
   "etiqueta": {
    "es": "pH",
    "fr": "pH",
    "ca": "pH",
    "en": "pH"
   },
   "impresos": [
    "pH",
    "PH",
    "PH SANGUINEO",
    "Ph sanguíneo",
    "POC PH SANGUINEO"
   ],
   "_nota": "¿Venosa o arterial ? Los informes no siempre lo dicen."
  },
  "ph_corregido": {
   "n": 88,
   "grupo": "GASOMETRÍA",
   "unidad": "",
   "curva": true,
   "etiqueta": {
    "es": "pH corregido",
    "fr": "pH corrigé",
    "ca": "pH corregit",
    "en": "Corrected pH"
   },
   "impresos": [
    "Ph corregido"
   ],
   "_nota": "Corregido a la temperatura del paciente : ¿aparte (propuesto) o con el pH ?"
  },
  "pco2": {
   "n": 89,
   "grupo": "GASOMETRÍA",
   "unidad": "mmHg",
   "curva": true,
   "etiqueta": {
    "es": "pCO₂",
    "fr": "pCO₂",
    "ca": "pCO₂",
    "en": "pCO₂"
   },
   "impresos": [
    "pCO2",
    "PCO2 SANGUINEO",
    "PCO2 sanguíneo",
    "POC PCO2 SANGUINEO",
    "CO2"
   ],
   "_nota": "« CO2 » en mmHg es la pCO₂ (el CO₂ total va en mmol/L)."
  },
  "pco2_corregido": {
   "n": 90,
   "grupo": "GASOMETRÍA",
   "unidad": "mmHg",
   "curva": true,
   "etiqueta": {
    "es": "pCO₂ corregida",
    "fr": "pCO₂ corrigée",
    "ca": "pCO₂ corregida",
    "en": "Corrected pCO₂"
   },
   "impresos": [
    "PCO2 sanguíneo corregido"
   ]
  },
  "po2": {
   "n": 91,
   "grupo": "GASOMETRÍA",
   "unidad": "mmHg",
   "curva": true,
   "etiqueta": {
    "es": "pO₂",
    "fr": "pO₂",
    "ca": "pO₂",
    "en": "pO₂"
   },
   "impresos": [
    "pO2",
    "PO2 SANGUINEO",
    "PO2 sanguíneo",
    "POC PO2 SANGUINEO"
   ]
  },
  "po2_corregido": {
   "n": 92,
   "grupo": "GASOMETRÍA",
   "unidad": "mmHg",
   "curva": true,
   "etiqueta": {
    "es": "pO₂ corregida",
    "fr": "pO₂ corrigée",
    "ca": "pO₂ corregida",
    "en": "Corrected pO₂"
   },
   "impresos": [
    "PO2 sanguíneo corregido"
   ]
  },
  "bicarbonato": {
   "n": 93,
   "grupo": "GASOMETRÍA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Bicarbonato",
    "fr": "Bicarbonates",
    "ca": "Bicarbonat",
    "en": "Bicarbonate"
   },
   "impresos": [
    "HCO3",
    "BICARBONATO ACTUAL",
    "Bicarbonato calculado"
   ],
   "_nota": "Curvas lo tenía en BIOQUÍMICA ; pasa a GASOMETRÍA."
  },
  "bicarbonato_std": {
   "n": 94,
   "grupo": "GASOMETRÍA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Bicarbonato estándar",
    "fr": "Bicarbonates standard",
    "ca": "Bicarbonat estàndard",
    "en": "Standard bicarbonate"
   },
   "impresos": [
    "BICARBONATO STD",
    "Bicarbonato standard",
    "POC BICARBONATO STD"
   ]
  },
  "exceso_base": {
   "n": 95,
   "grupo": "GASOMETRÍA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Exceso de base",
    "fr": "Excès de base",
    "ca": "Excés de base",
    "en": "Base excess"
   },
   "impresos": [
    "EBA",
    "EXCESO BASE ACTUAL",
    "POC EXCESO BASE ACTUAL",
    "Exceso de base en sangre"
   ]
  },
  "exceso_base_std": {
   "n": 96,
   "grupo": "GASOMETRÍA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Exceso de base estándar",
    "fr": "Excès de base standard",
    "ca": "Excés de base estàndard",
    "en": "Standard base excess"
   },
   "impresos": [
    "EXCESO BASE STANDARD"
   ]
  },
  "anion_gap": {
   "n": 97,
   "grupo": "GASOMETRÍA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Anión gap",
    "fr": "Trou anionique",
    "ca": "Anió gap",
    "en": "Anion gap"
   },
   "impresos": [
    "AG"
   ]
  },
  "lactato": {
   "n": 98,
   "grupo": "GASOMETRÍA",
   "unidad": "mmol/L",
   "curva": true,
   "etiqueta": {
    "es": "Lactato",
    "fr": "Lactates",
    "ca": "Lactat",
    "en": "Lactate"
   },
   "impresos": [
    "Lactato",
    "Láctico"
   ]
  },
  "sat_sangre": {
   "n": 99,
   "grupo": "GASOMETRÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Saturación de O₂ (gasometría)",
    "fr": "Saturation en O₂ (gazométrie)",
    "ca": "Saturació d'O₂ (gasometria)",
    "en": "O₂ saturation (blood gas)"
   },
   "impresos": [
    "Saturación oxígeno",
    "SATURACION OXIGENO",
    "POC SATURACION OXIGENO"
   ],
   "_nota": "Medida en la SANGRE : no es la SpO₂ del dedo. ¿Aparte (propuesto) o con la SpO₂ ?",
   "prioridad": 1
  },
  "oxihemoglobina": {
   "n": 100,
   "grupo": "GASOMETRÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Oxihemoglobina",
    "fr": "Oxyhémoglobine",
    "ca": "Oxihemoglobina",
    "en": "Oxyhaemoglobin"
   },
   "impresos": [
    "OXIHEMOGLOBINA",
    "Oxihemoglobina"
   ]
  },
  "carboxihemoglobina": {
   "n": 101,
   "grupo": "GASOMETRÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Carboxihemoglobina",
    "fr": "Carboxyhémoglobine",
    "ca": "Carboxihemoglobina",
    "en": "Carboxyhaemoglobin"
   },
   "impresos": [
    "CARBOXIHEMOGLOBINA",
    "Carboxihemoglobina"
   ]
  },
  "metahemoglobina": {
   "n": 102,
   "grupo": "GASOMETRÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Metahemoglobina",
    "fr": "Méthémoglobine",
    "ca": "Metahemoglobina",
    "en": "Methaemoglobin"
   },
   "impresos": [
    "METAHEMOGLOBINA",
    "Metahemoglobina"
   ]
  },
  "hb_reducida": {
   "n": 103,
   "grupo": "GASOMETRÍA",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "Hemoglobina reducida",
    "fr": "Hémoglobine réduite",
    "ca": "Hemoglobina reduïda",
    "en": "Reduced haemoglobin"
   },
   "impresos": [
    "HEMOGLOBINA REDUCIDA",
    "Hemoglobina reducida"
   ]
  },
  "TA_sys": {
   "n": 104,
   "grupo": "CONSTANTES",
   "unidad": "mmHg",
   "curva": true,
   "etiqueta": {
    "es": "TA sistólica",
    "fr": "TA systolique",
    "ca": "TA sistòlica",
    "en": "Systolic BP"
   },
   "impresos": [
    "TA sistólica"
   ],
   "prioridad": 2
  },
  "TA_dia": {
   "n": 105,
   "grupo": "CONSTANTES",
   "unidad": "mmHg",
   "curva": true,
   "etiqueta": {
    "es": "TA diastólica",
    "fr": "TA diastolique",
    "ca": "TA diastòlica",
    "en": "Diastolic BP"
   },
   "impresos": [
    "TA diastólica"
   ]
  },
  "TA": {
   "n": 106,
   "grupo": "CONSTANTES",
   "unidad": "mmHg",
   "curva": false,
   "etiqueta": {
    "es": "TA",
    "fr": "TA",
    "ca": "TA",
    "en": "BP"
   },
   "impresos": [
    "TA"
   ],
   "_nota": "« TA » sola : ¿qué cifra lleva ? hay que mirar el valor guardado (¿la sistólica ?)."
  },
  "FC": {
   "n": 107,
   "grupo": "CONSTANTES",
   "unidad": "lpm",
   "curva": true,
   "etiqueta": {
    "es": "Frecuencia cardiaca",
    "fr": "Fréquence cardiaque",
    "ca": "Freqüència cardíaca",
    "en": "Heart rate"
   },
   "impresos": [
    "FC"
   ],
   "buscar": [
    "frecuencia cardiaca",
    "fréquence cardiaque",
    "heart rate",
    "pols",
    "pouls",
    "pulse",
    "pulso"
   ]
  },
  "Temp": {
   "n": 108,
   "grupo": "CONSTANTES",
   "unidad": "ºC",
   "curva": true,
   "etiqueta": {
    "es": "Temperatura",
    "fr": "Température",
    "ca": "Temperatura",
    "en": "Temperature"
   },
   "impresos": [
    "Tª",
    "Temperatura",
    "Tª (Timpánica)"
   ],
   "buscar": [
    "febre",
    "fever",
    "fiebre",
    "fièvre",
    "température corporelle"
   ]
  },
  "SpO2": {
   "n": 109,
   "grupo": "CONSTANTES",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "SpO₂",
    "fr": "SpO₂",
    "ca": "SpO₂",
    "en": "SpO₂"
   },
   "impresos": [
    "SpO2",
    "Sat. O2",
    "Sat O2",
    "SatO2",
    "SaO2",
    "Sat. O2 (Sin Oxígeno)"
   ],
   "_nota": "« SaO2 » de las constantes es en realidad la del dedo.",
   "buscar": [
    "oxymétrie",
    "pulsioximetría",
    "sat",
    "sat O2",
    "saturació",
    "saturación",
    "saturation"
   ],
   "prioridad": 5
  },
  "SpO2_con_o2": {
   "n": 110,
   "grupo": "CONSTANTES",
   "unidad": "%",
   "curva": true,
   "etiqueta": {
    "es": "SpO₂ con oxígeno",
    "fr": "SpO₂ sous oxygène",
    "ca": "SpO₂ amb oxigen",
    "en": "SpO₂ on oxygen"
   },
   "impresos": [
    "SpO2 con GN 2.5lpm (IC Neumología)"
   ],
   "_nota": "Con gafas nasales : ¿aparte (propuesto) para no mezclar con la SpO₂ en aire ?"
  },
  "oxigeno_flujo": {
   "n": 111,
   "grupo": "CONSTANTES",
   "unidad": "L/min",
   "curva": true,
   "etiqueta": {
    "es": "Oxígeno (caudal)",
    "fr": "Oxygène (débit)",
    "ca": "Oxigen (cabal)",
    "en": "Oxygen (flow)"
   },
   "impresos": [
    "Vol. O2"
   ]
  },
  "barthel": {
   "n": 112,
   "grupo": "ESCALAS",
   "unidad": "/100",
   "curva": true,
   "etiqueta": {
    "es": "Barthel",
    "fr": "Barthel",
    "ca": "Barthel",
    "en": "Barthel"
   },
   "impresos": [
    "BARTHEL",
    "Índice de Barthel",
    "ÍNDICE DE BARTHEL"
   ],
   "buscar": [
    "Resultado",
    "Puntuación",
    "Puntuacion"
   ],
   "_buscar_escalas": "Los cuestionarios escriben el total aparte : « Resultado 9 Deterioro… ». El rotulador busca esas palabras SOLO al abrir un punto de esta escala (P-H, 10/11/2026).",
   "_nota_10_11": "« Índice de Barthel » : el nombre de los documentos de valoración escaneados (P-H, 10/11/2026)."
  },
  "braden": {
   "n": 113,
   "grupo": "ESCALAS",
   "unidad": "/23",
   "curva": true,
   "etiqueta": {
    "es": "Braden",
    "fr": "Braden",
    "ca": "Braden",
    "en": "Braden"
   },
   "impresos": [
    "BRADEN - BERGSTROM"
   ]
  },
  "downton": {
   "n": 114,
   "grupo": "ESCALAS",
   "unidad": "/12",
   "curva": true,
   "etiqueta": {
    "es": "Downton",
    "fr": "Downton",
    "ca": "Downton",
    "en": "Downton"
   },
   "impresos": [
    "J.H. DOWNTON HGC"
   ]
  },
  "canadiense": {
   "n": 115,
   "grupo": "ESCALAS",
   "unidad": "/10",
   "curva": true,
   "etiqueta": {
    "es": "Escala neurológica canadiense",
    "fr": "Échelle neurologique canadienne",
    "ca": "Escala neurològica canadenca",
    "en": "Canadian Neurological Scale"
   },
   "impresos": [
    "ESCALA NEUROLÓGICA CANADIENSE"
   ]
  },
  "mmse": {
   "n": 116,
   "grupo": "ESCALAS",
   "unidad": "/30",
   "curva": true,
   "etiqueta": {
    "es": "MMSE",
    "fr": "MMSE",
    "ca": "MMSE",
    "en": "MMSE"
   },
   "impresos": [
    "MMSE"
   ]
  },
  "pfeiffer": {
   "n": 132,
   "grupo": "ESCALAS",
   "unidad": "/10",
   "curva": true,
   "etiqueta": {
    "es": "Pfeiffer (errores)",
    "fr": "Pfeiffer (erreurs)",
    "ca": "Pfeiffer (errors)",
    "en": "Pfeiffer (errors)"
   },
   "impresos": [
    "Test de Pfeiffer",
    "TEST DE PFEIFFER",
    "SPMSQ"
   ],
   "buscar": [
    "Resultado",
    "Puntuación",
    "Puntuacion"
   ],
   "_nota": "Cuenta ERRORES (0 a 10) : cuanto más alto, peor — al revés que el Barthel (P-H, 10/11/2026)."
  },
  "lawton": {
   "n": 133,
   "grupo": "ESCALAS",
   "unidad": "/8",
   "curva": true,
   "etiqueta": {
    "es": "Lawton y Brody",
    "fr": "Lawton et Brody",
    "ca": "Lawton i Brody",
    "en": "Lawton and Brody"
   },
   "impresos": [
    "Índice de Lawton",
    "ÍNDICE DE LAWTON",
    "Escala de Lawton y Brody",
    "LAWTON"
   ],
   "buscar": [
    "Resultado",
    "Puntuación",
    "Puntuacion"
   ],
   "_nota": "Actividades instrumentales de la vida diaria (0 a 8). Si el documento imprime otro nombre, se añade aquí (P-H, 10/11/2026)."
  },
  "orina_bilirrubina": {
   "n": 117,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Bilirrubina en orina",
    "fr": "Bilirubine urinaire",
    "ca": "Bilirubina en orina",
    "en": "Urine bilirubin"
   },
   "impresos": [
    "BILIRRUBINA (EN ORINA)"
   ]
  },
  "orina_cetonas": {
   "n": 118,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Cuerpos cetónicos en orina",
    "fr": "Corps cétoniques urinaires",
    "ca": "Cossos cetònics en orina",
    "en": "Urine ketones"
   },
   "impresos": [
    "CUERPOS CETÓNICOS (EN ORINA)"
   ]
  },
  "orina_densidad": {
   "n": 119,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Densidad de la orina",
    "fr": "Densité urinaire",
    "ca": "Densitat de l'orina",
    "en": "Urine specific gravity"
   },
   "impresos": [
    "DENSIDAD (EN ORINA)"
   ]
  },
  "orina_glucosa": {
   "n": 120,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Glucosa en orina",
    "fr": "Glucose urinaire",
    "ca": "Glucosa en orina",
    "en": "Urine glucose"
   },
   "impresos": [
    "GLUCOSA (EN ORINA)"
   ]
  },
  "orina_hemoglobina": {
   "n": 121,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Hemoglobina en orina",
    "fr": "Hémoglobine urinaire",
    "ca": "Hemoglobina en orina",
    "en": "Urine haemoglobin"
   },
   "impresos": [
    "HEMOGLOBINA (EN ORINA)"
   ]
  },
  "orina_leucocitos": {
   "n": 122,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Leucocitos en orina",
    "fr": "Leucocytes urinaires",
    "ca": "Leucòcits en orina",
    "en": "Urine leucocytes"
   },
   "impresos": [
    "LEUCOCITOS (EN ORINA)"
   ]
  },
  "orina_nitritos": {
   "n": 123,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Nitritos en orina",
    "fr": "Nitrites urinaires",
    "ca": "Nitrits en orina",
    "en": "Urine nitrites"
   },
   "impresos": [
    "NITRITOS (EN ORINA)"
   ]
  },
  "orina_ph": {
   "n": 124,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "pH de la orina",
    "fr": "pH urinaire",
    "ca": "pH de l'orina",
    "en": "Urine pH"
   },
   "impresos": [
    "PH (EN ORINA)"
   ]
  },
  "orina_proteinas": {
   "n": 125,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Proteínas en orina",
    "fr": "Protéines urinaires",
    "ca": "Proteïnes en orina",
    "en": "Urine protein"
   },
   "impresos": [
    "PROTEÍNAS (EN ORINA)"
   ]
  },
  "orina_urobilinogeno": {
   "n": 126,
   "grupo": "ORINA",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Urobilinógeno en orina",
    "fr": "Urobilinogène urinaire",
    "ca": "Urobilinogen en orina",
    "en": "Urine urobilinogen"
   },
   "impresos": [
    "UROBILINÓGENO (EN ORINA)"
   ]
  },
  "prueba_sars_cov2_antigeno": {
   "n": 127,
   "grupo": "PRUEBAS",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "Antígeno SARS-CoV-2",
    "fr": "Antigène SARS-CoV-2",
    "ca": "Antigen SARS-CoV-2",
    "en": "SARS-CoV-2 antigen"
   },
   "impresos": [
    "Detección antígeno SARS-CoV-2"
   ]
  },
  "prueba_sars_cov2_pcr": {
   "n": 128,
   "grupo": "PRUEBAS",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "PCR SARS-CoV-2",
    "fr": "PCR SARS-CoV-2",
    "ca": "PCR SARS-CoV-2",
    "en": "SARS-CoV-2 PCR"
   },
   "impresos": [
    "PCR Nuevo Coronavirus 2019-nCoV"
   ]
  },
  "prueba_gripe_a": {
   "n": 129,
   "grupo": "PRUEBAS",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "PCR gripe A",
    "fr": "PCR grippe A",
    "ca": "PCR grip A",
    "en": "Influenza A PCR"
   },
   "impresos": [
    "PCR Virus Influenza A"
   ]
  },
  "prueba_gripe_b": {
   "n": 130,
   "grupo": "PRUEBAS",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "PCR gripe B",
    "fr": "PCR grippe B",
    "ca": "PCR grip B",
    "en": "Influenza B PCR"
   },
   "impresos": [
    "PCR Virus Influenza B"
   ]
  },
  "prueba_gripe_ab": {
   "n": 131,
   "grupo": "PRUEBAS",
   "unidad": "",
   "curva": false,
   "etiqueta": {
    "es": "PCR gripe A/B",
    "fr": "PCR grippe A/B",
    "ca": "PCR grip A/B",
    "en": "Influenza A/B PCR"
   },
   "impresos": [
    "PCR Virus Influenza A/B"
   ]
  }
 },
 "segun_grupo": {
  "gasometria": {
   "satO2": "sat_sangre",
   "Sat. O2": "sat_sangre"
  }
 },
 "partir": {
  "TA": {
   "separador": "/",
   "en": [
    "TA_sys",
    "TA_dia"
   ]
  }
 },
 "ignorar": [
  "hipoecogenicidad (lesión fibrótica residual en región glútea izquierda)",
  "insuficiencia respiratoria parcial crónica (no agudizada)"
 ],
 "grupos": {
  "GASOMETRÍA": {
   "es": "Gasometría",
   "fr": "Gazométrie",
   "ca": "Gasometria",
   "en": "Blood gases"
  },
  "PROTEINOGRAMA": {
   "es": "Proteinograma",
   "fr": "Électrophorèse des protéines",
   "ca": "Proteïnograma",
   "en": "Protein electrophoresis"
  },
  "ESCALAS": {
   "es": "Escalas",
   "fr": "Échelles",
   "ca": "Escales",
   "en": "Scales"
  },
  "ORINA": {
   "es": "Orina",
   "fr": "Urine",
   "ca": "Orina",
   "en": "Urine"
  },
  "PRUEBAS": {
   "es": "Pruebas",
   "fr": "Tests",
   "ca": "Proves",
   "en": "Tests"
  }
 },
 "_n": "P-H, 04/11/2026 : « dans un coin du pavé d'une courbe, discrètement, un nº toujours le même — courbe 69, plus facile à commenter ». Cada clave tiene SU número, para siempre : no se reutiliza ni se recalcula. Una clave nueva toma el siguiente libre.",
 "busqueda": {
  "varios": {
   "tension": [
    "TA_sys",
    "TA_dia"
   ],
   "tension arterielle": [
    "TA_sys",
    "TA_dia"
   ],
   "pression": [
    "TA_sys",
    "TA_dia"
   ],
   "pression arterielle": [
    "TA_sys",
    "TA_dia"
   ],
   "tensión": [
    "TA_sys",
    "TA_dia"
   ],
   "tensión arterial": [
    "TA_sys",
    "TA_dia"
   ],
   "presión": [
    "TA_sys",
    "TA_dia"
   ],
   "presión arterial": [
    "TA_sys",
    "TA_dia"
   ],
   "tensió": [
    "TA_sys",
    "TA_dia"
   ],
   "pressió": [
    "TA_sys",
    "TA_dia"
   ],
   "TA": [
    "TA_sys",
    "TA_dia"
   ],
   "blood pressure": [
    "TA_sys",
    "TA_dia"
   ],
   "BP": [
    "TA_sys",
    "TA_dia"
   ]
  }
 },
 "_busqueda": "P-H, 04/11/2026 : la búsqueda rápida de Curvas. « buscar » : las palabras del médico (todas las lenguas mezcladas) ; « prioridad » : cuando varias claves responden, la mayor gana (SpO₂ antes que la saturación de la transferrina, el valor absoluto antes que el %) ; « busqueda.varios » : una palabra que vale por varias curvas superpuestas. Se enriquece aquí, sin tocar el código."
};
