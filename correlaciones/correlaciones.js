/* CORRELACIONES — su configuración */
var SF_CONFIG = window.SF_CONFIG = {
  "id": "correlaciones",
  "version": "2026.11.05-15:36:20",
  "programa": "correlaciones.html",
  "lanzador": "../casa/casa.js",
  "icono": "🔗",
  "familia": "ver",
  "paleta": "oscuro",
  "nombre": {
    "es": "Correlaciones",
    "fr": "Corrélations",
    "ca": "Correlacions",
    "en": "Correlations"
  },
  "descripcion": {
    "es": "Un parámetro frente a otro",
    "fr": "Un paramètre face à un autre",
    "ca": "Un paràmetre davant d'un altre",
    "en": "One parameter against another"
  },
  "acceso": [
    "profesional",
    "investigador"
  ],
  "ayuda": "correlaciones.help.html",
  "escribe": false,
  "glosario": "../glosario/glosario.html",
  "_origen": "Extraido de la V1: correlaciones-js.js + correlaciones-html.html.",
  "detalle": {
    "es": "Dos parámetros enfrentados, para ver si se mueven juntos. No dice la causa: dice que vale la pena mirar.",
    "fr": "Deux paramètres face à face, pour voir s'ils bougent ensemble. Il ne dit pas la cause : il dit que ça vaut la peine de regarder.",
    "ca": "Dos paràmetres enfrontats, per veure si es mouen junts.",
    "en": "Two parameters against each other, to see if they move together. It doesn't say why: it says it's worth a look."
  },
  "_detalle": "Lo que dice la burbuja cuando se pasa por encima de la tarjeta en la casa. Vive aqui, con el programa que describe (P-H, 16/09/2026).",
  "correlaciones": [
   {
    "n": 1,
    "params": [
     {
      "key": "colesterol",
      "color": "#7d3c98"
     },
     {
      "key": "colesterol_ldl",
      "color": "#e84a4a",
      "dash": true
     }
    ],
    "ref": 200,
    "textos": {
     "es": {
      "titulo": "Colesterol total + LDL",
      "desc": "Colesterol total y LDL (el « malo »).\nObjetivo : total <200 · LDL <100 mg/dL",
      "unidades": "mg/dL",
      "umbral": "Colesterol objetivo <200",
      "curvas": [
       "Colesterol total",
       "LDL"
      ]
     },
     "fr": {
      "titulo": "Cholestérol total + LDL",
      "desc": "Cholestérol total et LDL (le « mauvais »).\nObjectif : total <200 · LDL <100 mg/dL",
      "unidades": "mg/dL",
      "umbral": "Cholestérol objectif <200",
      "curvas": [
       "Cholestérol total",
       "LDL"
      ]
     },
     "ca": {
      "titulo": "Colesterol total + LDL",
      "desc": "Colesterol total i LDL (el « dolent »).\nObjectiu : total <200 · LDL <100 mg/dL",
      "unidades": "mg/dL",
      "umbral": "Colesterol objectiu <200",
      "curvas": [
       "Colesterol total",
       "LDL"
      ]
     },
     "en": {
      "titulo": "Total cholesterol + LDL",
      "desc": "Total cholesterol and LDL (the “bad” one).\nTarget: total <200 · LDL <100 mg/dL",
      "unidades": "mg/dL",
      "umbral": "Cholesterol target <200",
      "curvas": [
       "Total cholesterol",
       "LDL"
      ]
     }
    }
   },
   {
    "n": 2,
    "params": [
     {
      "key": "filtrado",
      "color": "#117a65"
     },
     {
      "key": "creatinina",
      "color": "#4a8fe8",
      "dash": true,
      "scale": 50
     }
    ],
    "ref": 60,
    "textos": {
     "es": {
      "titulo": "Función renal — Filtrado + Creatinina",
      "desc": "Seguimiento de la función renal.\nFiltrado glomerular y creatinina.\nFG <60 = insuficiencia renal crónica",
      "unidades": "ml/min",
      "umbral": "Límite inferior FG",
      "curvas": [
       "FG CKD-EPI",
       "Creatinina (×50)"
      ]
     },
     "fr": {
      "titulo": "Fonction rénale — Filtration + Créatinine",
      "desc": "Suivi de la fonction rénale.\nDébit de filtration glomérulaire et créatinine.\nDFG <60 = insuffisance rénale chronique",
      "unidades": "ml/min",
      "umbral": "Limite basse du DFG",
      "curvas": [
       "DFG CKD-EPI",
       "Créatinine (×50)"
      ]
     },
     "ca": {
      "titulo": "Funció renal — Filtrat + Creatinina",
      "desc": "Seguiment de la funció renal.\nFiltrat glomerular i creatinina.\nFG <60 = insuficiència renal crònica",
      "unidades": "ml/min",
      "umbral": "Límit inferior FG",
      "curvas": [
       "FG CKD-EPI",
       "Creatinina (×50)"
      ]
     },
     "en": {
      "titulo": "Kidney function — Filtration + Creatinine",
      "desc": "Kidney function follow-up.\nGlomerular filtration rate and creatinine.\neGFR <60 = chronic kidney disease",
      "unidades": "ml/min",
      "umbral": "eGFR lower limit",
      "curvas": [
       "eGFR CKD-EPI",
       "Creatinine (×50)"
      ]
     }
    }
   },
   {
    "n": 3,
    "params": [
     {
      "key": "vitamina_d",
      "color": "#c8a000"
     }
    ],
    "ref": 30,
    "textos": {
     "es": {
      "titulo": "Vitamina D",
      "desc": "",
      "unidades": "ng/mL",
      "umbral": "Mínimo de referencia (30)",
      "curvas": [
       "Vitamina D"
      ]
     },
     "fr": {
      "titulo": "Vitamine D",
      "desc": "",
      "unidades": "ng/mL",
      "umbral": "Minimum de référence (30)",
      "curvas": [
       "Vitamine D"
      ]
     },
     "ca": {
      "titulo": "Vitamina D",
      "desc": "",
      "unidades": "ng/mL",
      "umbral": "Mínim de referència (30)",
      "curvas": [
       "Vitamina D"
      ]
     },
     "en": {
      "titulo": "Vitamin D",
      "desc": "",
      "unidades": "ng/mL",
      "umbral": "Reference minimum (30)",
      "curvas": [
       "Vitamin D"
      ]
     }
    }
   },
   {
    "n": 4,
    "params": [
     {
      "key": "vitamina_b12",
      "color": "#a06000"
     },
     {
      "key": "vcm",
      "color": "#e84a4a",
      "dash": true,
      "scale": 2
     }
    ],
    "ref": 180,
    "textos": {
     "es": {
      "titulo": "Vitamina B12 + VCM",
      "desc": "B12 y volumen corpuscular medio.\nCarencia de B12 : anemia macrocítica + síntomas neurológicos",
      "unidades": "B12 pg/mL · VCM fL",
      "umbral": "B12 mínimo (180)",
      "curvas": [
       "B12 (pg/mL)",
       "VCM (fL × 2)"
      ]
     },
     "fr": {
      "titulo": "Vitamine B12 + VGM",
      "desc": "B12 et volume globulaire moyen.\nCarence en B12 : anémie macrocytaire + signes neurologiques",
      "unidades": "B12 pg/mL · VGM fL",
      "umbral": "B12 minimum (180)",
      "curvas": [
       "B12 (pg/mL)",
       "VGM (fL × 2)"
      ]
     },
     "ca": {
      "titulo": "Vitamina B12 + VCM",
      "desc": "B12 i volum corpuscular mitjà.\nCarència de B12 : anèmia macrocítica + símptomes neurològics",
      "unidades": "B12 pg/mL · VCM fL",
      "umbral": "B12 mínim (180)",
      "curvas": [
       "B12 (pg/mL)",
       "VCM (fL × 2)"
      ]
     },
     "en": {
      "titulo": "Vitamin B12 + MCV",
      "desc": "B12 and mean corpuscular volume.\nB12 deficiency: macrocytic anaemia + neurological signs",
      "unidades": "B12 pg/mL · MCV fL",
      "umbral": "B12 minimum (180)",
      "curvas": [
       "B12 (pg/mL)",
       "MCV (fL × 2)"
      ]
     }
    }
   },
   {
    "n": 5,
    "params": [
     {
      "key": "hemoglobina",
      "color": "#922b21"
     },
     {
      "key": "ferritina",
      "color": "#4a8fe8",
      "dash": true,
      "scale": 0.1
     }
    ],
    "ref": 12,
    "textos": {
     "es": {
      "titulo": "Hemoglobina + Ferritina",
      "desc": "Anemia : hemoglobina y ferritina.\nHb normal : >12 g/dL (mujeres), >13 (hombres)",
      "unidades": "g/dL · ng/mL",
      "umbral": "Hb mínima (12)",
      "curvas": [
       "Hemoglobina",
       "Ferritina (÷10)"
      ]
     },
     "fr": {
      "titulo": "Hémoglobine + Ferritine",
      "desc": "Anémie : hémoglobine et ferritine.\nHb normale : >12 g/dL (femmes), >13 (hommes)",
      "unidades": "g/dL · ng/mL",
      "umbral": "Hb minimum (12)",
      "curvas": [
       "Hémoglobine",
       "Ferritine (÷10)"
      ]
     },
     "ca": {
      "titulo": "Hemoglobina + Ferritina",
      "desc": "Anèmia : hemoglobina i ferritina.\nHb normal : >12 g/dL (dones), >13 (homes)",
      "unidades": "g/dL · ng/mL",
      "umbral": "Hb mínima (12)",
      "curvas": [
       "Hemoglobina",
       "Ferritina (÷10)"
      ]
     },
     "en": {
      "titulo": "Haemoglobin + Ferritin",
      "desc": "Anaemia: haemoglobin and ferritin.\nNormal Hb: >12 g/dL (women), >13 (men)",
      "unidades": "g/dL · ng/mL",
      "umbral": "Hb minimum (12)",
      "curvas": [
       "Haemoglobin",
       "Ferritin (÷10)"
      ]
     }
    }
   },
   {
    "n": 6,
    "params": [
     {
      "key": "TA_sys",
      "color": "#e74c3c"
     },
     {
      "key": "TA_dia",
      "color": "#e8874a",
      "dash": true
     }
    ],
    "ref": 140,
    "textos": {
     "es": {
      "titulo": "Tensión arterial — Sistólica + Diastólica",
      "desc": "Presión arterial sistólica y diastólica.\nObjetivo : <140/90 mmHg\n<130/80 en alto riesgo cardiovascular",
      "unidades": "mmHg",
      "umbral": "Objetivo TAS <140",
      "curvas": [
       "TAS (sistólica)",
       "TAD (diastólica)"
      ]
     },
     "fr": {
      "titulo": "Tension artérielle — Systolique + Diastolique",
      "desc": "Tension artérielle systolique et diastolique.\nObjectif : <140/90 mmHg\n<130/80 si risque cardiovasculaire élevé",
      "unidades": "mmHg",
      "umbral": "Objectif TAS <140",
      "curvas": [
       "TAS (systolique)",
       "TAD (diastolique)"
      ]
     },
     "ca": {
      "titulo": "Tensió arterial — Sistòlica + Diastòlica",
      "desc": "Pressió arterial sistòlica i diastòlica.\nObjectiu : <140/90 mmHg\n<130/80 en risc cardiovascular alt",
      "unidades": "mmHg",
      "umbral": "Objectiu TAS <140",
      "curvas": [
       "TAS (sistòlica)",
       "TAD (diastòlica)"
      ]
     },
     "en": {
      "titulo": "Blood pressure — Systolic + Diastolic",
      "desc": "Systolic and diastolic blood pressure.\nTarget: <140/90 mmHg\n<130/80 at high cardiovascular risk",
      "unidades": "mmHg",
      "umbral": "SBP target <140",
      "curvas": [
       "SBP (systolic)",
       "DBP (diastolic)"
      ]
     }
    }
   },
   {
    "n": 7,
    "params": [
     {
      "key": "FC",
      "color": "#e67e22"
     },
     {
      "key": "SpO2",
      "color": "#2980b9",
      "dash": true,
      "scale": 1.5
     }
    ],
    "ref": 100,
    "textos": {
     "es": {
      "titulo": "Frecuencia cardíaca + SpO₂",
      "desc": "Frecuencia cardíaca y saturación de O₂.\nFC normal : 60-100 lpm\nSpO₂ normal : >95 %",
      "unidades": "lpm · %",
      "umbral": "FC límite (100 lpm)",
      "curvas": [
       "FC (lpm)",
       "SpO₂ (% ×1.5)"
      ]
     },
     "fr": {
      "titulo": "Fréquence cardiaque + SpO₂",
      "desc": "Fréquence cardiaque et saturation en O₂.\nFC normale : 60-100 bpm\nSpO₂ normale : >95 %",
      "unidades": "bpm · %",
      "umbral": "FC limite (100 bpm)",
      "curvas": [
       "FC (bpm)",
       "SpO₂ (% ×1.5)"
      ]
     },
     "ca": {
      "titulo": "Freqüència cardíaca + SpO₂",
      "desc": "Freqüència cardíaca i saturació d’O₂.\nFC normal : 60-100 bpm\nSpO₂ normal : >95 %",
      "unidades": "bpm · %",
      "umbral": "FC límit (100 bpm)",
      "curvas": [
       "FC (bpm)",
       "SpO₂ (% ×1.5)"
      ]
     },
     "en": {
      "titulo": "Heart rate + SpO₂",
      "desc": "Heart rate and O₂ saturation.\nNormal HR: 60-100 bpm\nNormal SpO₂: >95 %",
      "unidades": "bpm · %",
      "umbral": "HR limit (100 bpm)",
      "curvas": [
       "HR (bpm)",
       "SpO₂ (% ×1.5)"
      ]
     }
    }
   },
   {
    "n": 8,
    "params": [
     {
      "key": "TA_sys",
      "color": "#e74c3c"
     },
     {
      "key": "FC",
      "color": "#e67e22",
      "dash": true,
      "scale": 1.2
     }
    ],
    "ref": 140,
    "textos": {
     "es": {
      "titulo": "TAS frente a frecuencia cardíaca",
      "desc": "Tensión sistólica frente a frecuencia cardíaca.\nDetecta hipertensión + taquicardia",
      "unidades": "mmHg · lpm",
      "umbral": "TAS objetivo <140",
      "curvas": [
       "TAS (mmHg)",
       "FC (lpm × 1.2)"
      ]
     },
     "fr": {
      "titulo": "TAS face à la fréquence cardiaque",
      "desc": "Tension systolique face à la fréquence cardiaque.\nRepère hypertension + tachycardie",
      "unidades": "mmHg · bpm",
      "umbral": "TAS objectif <140",
      "curvas": [
       "TAS (mmHg)",
       "FC (bpm × 1.2)"
      ]
     },
     "ca": {
      "titulo": "TAS davant la freqüència cardíaca",
      "desc": "Tensió sistòlica davant la freqüència cardíaca.\nDetecta hipertensió + taquicàrdia",
      "unidades": "mmHg · bpm",
      "umbral": "TAS objectiu <140",
      "curvas": [
       "TAS (mmHg)",
       "FC (bpm × 1.2)"
      ]
     },
     "en": {
      "titulo": "SBP vs heart rate",
      "desc": "Systolic pressure against heart rate.\nSpots hypertension + tachycardia",
      "unidades": "mmHg · bpm",
      "umbral": "SBP target <140",
      "curvas": [
       "SBP (mmHg)",
       "HR (bpm × 1.2)"
      ]
     }
    }
   },
   {
    "n": 9,
    "params": [
     {
      "key": "TA_sys",
      "color": "#e74c3c"
     },
     {
      "key": "FC",
      "color": "#e67e22",
      "dash": true
     },
     {
      "key": "SpO2",
      "color": "#2980b9",
      "dash": true,
      "yAxis": "y2"
     }
    ],
    "ref": 140,
    "textos": {
     "es": {
      "titulo": "⚠ Alerta cardiovascular — TAS + FC + SpO₂",
      "desc": "TAS alta + FC alta + SpO₂ baja\n= posible alerta cardiovascular o respiratoria.\nLa SpO₂ va en el eje de la derecha.",
      "unidades": "mmHg · lpm · %",
      "umbral": "TAS objetivo <140",
      "curvas": [
       "TAS (mmHg)",
       "FC (lpm)",
       "SpO₂ (%)"
      ]
     },
     "fr": {
      "titulo": "⚠ Alerte cardiovasculaire — TAS + FC + SpO₂",
      "desc": "TAS haute + FC haute + SpO₂ basse\n= alerte cardiovasculaire ou respiratoire possible.\nLa SpO₂ est sur l’axe de droite.",
      "unidades": "mmHg · bpm · %",
      "umbral": "TAS objectif <140",
      "curvas": [
       "TAS (mmHg)",
       "FC (bpm)",
       "SpO₂ (%)"
      ]
     },
     "ca": {
      "titulo": "⚠ Alerta cardiovascular — TAS + FC + SpO₂",
      "desc": "TAS alta + FC alta + SpO₂ baixa\n= possible alerta cardiovascular o respiratòria.\nLa SpO₂ va a l’eix de la dreta.",
      "unidades": "mmHg · bpm · %",
      "umbral": "TAS objectiu <140",
      "curvas": [
       "TAS (mmHg)",
       "FC (bpm)",
       "SpO₂ (%)"
      ]
     },
     "en": {
      "titulo": "⚠ Cardiovascular alert — SBP + HR + SpO₂",
      "desc": "High SBP + high HR + low SpO₂\n= possible cardiovascular or respiratory alert.\nSpO₂ is on the right axis.",
      "unidades": "mmHg · bpm · %",
      "umbral": "SBP target <140",
      "curvas": [
       "SBP (mmHg)",
       "HR (bpm)",
       "SpO₂ (%)"
      ]
     }
    }
   },
   {
    "n": 10,
    "params": [
     {
      "key": "gpt",
      "color": "#e67e22"
     },
     {
      "key": "ggt",
      "color": "#7f8c8d",
      "dash": true
     }
    ],
    "ref": 37,
    "textos": {
     "es": {
      "titulo": "Perfil hepático — GPT + GGT",
      "desc": "Enzimas hepáticas.\nGPT (ALT) : propia del hígado.\nGGT : sensible al alcohol y a los fármacos.",
      "unidades": "UI/L",
      "umbral": "GPT normal <37",
      "curvas": [
       "GPT (ALT)",
       "GGT"
      ]
     },
     "fr": {
      "titulo": "Bilan hépatique — ALAT + Gamma-GT",
      "desc": "Enzymes du foie.\nALAT (GPT) : propre au foie.\nGamma-GT : sensible à l’alcool et aux médicaments.",
      "unidades": "UI/L",
      "umbral": "ALAT normale <37",
      "curvas": [
       "ALAT (GPT)",
       "Gamma-GT"
      ]
     },
     "ca": {
      "titulo": "Perfil hepàtic — GPT + GGT",
      "desc": "Enzims hepàtics.\nGPT (ALT) : propi del fetge.\nGGT : sensible a l’alcohol i als fàrmacs.",
      "unidades": "UI/L",
      "umbral": "GPT normal <37",
      "curvas": [
       "GPT (ALT)",
       "GGT"
      ]
     },
     "en": {
      "titulo": "Liver panel — ALT + GGT",
      "desc": "Liver enzymes.\nALT (GPT): specific to the liver.\nGGT: sensitive to alcohol and drugs.",
      "unidades": "IU/L",
      "umbral": "ALT normal <37",
      "curvas": [
       "ALT (GPT)",
       "GGT"
      ]
     }
    }
   },
   {
    "n": 11,
    "params": [
     {
      "key": "creatinina",
      "color": "#e74c3c"
     },
     {
      "key": "filtrado",
      "color": "#117a65",
      "dash": true,
      "scale": 0.1
     }
    ],
    "ref": 1.2,
    "textos": {
     "es": {
      "titulo": "Función renal — Creatinina + FG",
      "desc": "Creatinina y filtrado glomerular.\nFG <60 = ERC. FG <30 = grave.",
      "unidades": "mg/dL · ml/min ÷10",
      "umbral": "Creatinina <1.2",
      "curvas": [
       "Creatinina (mg/dL)",
       "FG (÷10)"
      ]
     },
     "fr": {
      "titulo": "Fonction rénale — Créatinine + DFG",
      "desc": "Créatinine et débit de filtration glomérulaire.\nDFG <60 = MRC. DFG <30 = sévère.",
      "unidades": "mg/dL · ml/min ÷10",
      "umbral": "Créatinine <1.2",
      "curvas": [
       "Créatinine (mg/dL)",
       "DFG (÷10)"
      ]
     },
     "ca": {
      "titulo": "Funció renal — Creatinina + FG",
      "desc": "Creatinina i filtrat glomerular.\nFG <60 = MRC. FG <30 = greu.",
      "unidades": "mg/dL · ml/min ÷10",
      "umbral": "Creatinina <1.2",
      "curvas": [
       "Creatinina (mg/dL)",
       "FG (÷10)"
      ]
     },
     "en": {
      "titulo": "Kidney function — Creatinine + eGFR",
      "desc": "Creatinine and glomerular filtration rate.\neGFR <60 = CKD. eGFR <30 = severe.",
      "unidades": "mg/dL · ml/min ÷10",
      "umbral": "Creatinine <1.2",
      "curvas": [
       "Creatinine (mg/dL)",
       "eGFR (÷10)"
      ]
     }
    }
   },
   {
    "n": 12,
    "params": [
     {
      "key": "sodio",
      "color": "#148f77"
     },
     {
      "key": "potasio",
      "color": "#1a5276",
      "dash": true,
      "scale": 20
     }
    ],
    "ref": 134,
    "textos": {
     "es": {
      "titulo": "Ionograma — Sodio + Potasio",
      "desc": "Electrolitos vitales.\nSodio : hidratación y tensión.\nPotasio : función cardíaca.",
      "unidades": "mmol/L",
      "umbral": "Sodio mínimo 134",
      "curvas": [
       "Sodio (mmol/L)",
       "Potasio (×20)"
      ]
     },
     "fr": {
      "titulo": "Ionogramme — Sodium + Potassium",
      "desc": "Électrolytes vitaux.\nSodium : hydratation et tension.\nPotassium : fonction cardiaque.",
      "unidades": "mmol/L",
      "umbral": "Sodium minimum 134",
      "curvas": [
       "Sodium (mmol/L)",
       "Potassium (×20)"
      ]
     },
     "ca": {
      "titulo": "Ionograma — Sodi + Potassi",
      "desc": "Electròlits vitals.\nSodi : hidratació i tensió.\nPotassi : funció cardíaca.",
      "unidades": "mmol/L",
      "umbral": "Sodi mínim 134",
      "curvas": [
       "Sodi (mmol/L)",
       "Potassi (×20)"
      ]
     },
     "en": {
      "titulo": "Electrolytes — Sodium + Potassium",
      "desc": "Vital electrolytes.\nSodium: hydration and blood pressure.\nPotassium: heart function.",
      "unidades": "mmol/L",
      "umbral": "Sodium minimum 134",
      "curvas": [
       "Sodium (mmol/L)",
       "Potassium (×20)"
      ]
     }
    }
   }
  ],
  "_correlaciones": "Las 12 correlaciones (P-H, 04/11/2026 : « rien en dur »). n = número fijo, no se reutiliza ; params : clave, color, trazo, escala (scale), eje (yAxis : y2 = derecha) ; ref = umbral ; textos en 4 lenguas : titulo, desc, unidades, umbral, curvas (una por param, en el mismo orden). Una correlación nueva : una entrada más."
};
