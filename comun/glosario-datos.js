/* ══════════════════════════════════════════════════════════════════════
   EL GLOSARIO — las definiciones, comunes a todos los programas.

   Extraido de la V1 (modules/glosario-js.js). Vive en comun/ porque
   sirve a varios: Resumen, Curvas, Tabla… Cada programa lo pide con
   MF.glosario('hemoglobina', fn) sin cargar las trescientas entradas.

   Un .js, no un .json: asi funciona tambien sin servidor.
   ══════════════════════════════════════════════════════════════════════ */
var SF_GLOSARIO = window.SF_GLOSARIO = {
 "es": {
  "categorias": [
   {
    "nombre": "🩸 Hematología — Sangre",
    "params": [
     {
      "nombre": "Hemoglobina",
      "sigla": "Hb",
      "que": "Proteína de los glóbulos rojos que transporta el oxígeno por el cuerpo.",
      "bajo": "Anemia: cansancio, palidez, falta de aliento.",
      "alto": "Puede indicar deshidratación o enfermedad pulmonar.",
      "unidad": "g/dL",
      "ref": "12–18"
     },
     {
      "nombre": "Hematocrito",
      "sigla": "Hct",
      "que": "Porcentaje del volumen de sangre ocupado por los glóbulos rojos.",
      "bajo": "Anemia.",
      "alto": "Deshidratación o enfermedad pulmonar.",
      "unidad": "%",
      "ref": "37–52"
     },
     {
      "nombre": "Leucocitos",
      "sigla": "WBC",
      "que": "Glóbulos blancos: células de defensa del sistema inmunitario.",
      "bajo": "Mayor riesgo de infecciones.",
      "alto": "Infección activa o inflamación.",
      "unidad": "x10³/µL",
      "ref": "4.8–10.8"
     },
     {
      "nombre": "Plaquetas",
      "sigla": "PLT",
      "que": "Células pequeñas que detienen el sangrado formando coágulos.",
      "bajo": "Riesgo de hemorragia.",
      "alto": "Riesgo de trombosis.",
      "unidad": "x10³/µL",
      "ref": "130–400"
     },
     {
      "nombre": "VSG",
      "sigla": "VSG",
      "que": "Velocidad de sedimentación globular: mide la inflamación general del cuerpo.",
      "bajo": "Normal.",
      "alto": "Infección, inflamación o enfermedad autoinmune.",
      "unidad": "mm/h",
      "ref": "0–20"
     },
     {
      "nombre": "VCM",
      "sigla": "MCV",
      "que": "Volumen corpuscular medio: tamaño de los glóbulos rojos.",
      "bajo": "Anemia ferropénica.",
      "alto": "Déficit de vitamina B12 o ácido fólico (macrocitosis).",
      "unidad": "fL",
      "ref": "80–96"
     },
     {
      "nombre": "HCM",
      "sigla": "MCH",
      "que": "Hemoglobina corpuscular media: cantidad de hemoglobina por glóbulo rojo, en promedio.",
      "bajo": "Glóbulos rojos con poca hemoglobina — hipocromía, típica de la falta de hierro.",
      "alto": "Suele acompañar a los glóbulos rojos grandes (macrocitosis) — más volumen, más hemoglobina.",
      "unidad": "pg",
      "ref": "27–33"
     },
     {
      "nombre": "CHCM",
      "sigla": "MCHC",
      "que": "Concentración de hemoglobina corpuscular media: qué tan “llenos” de hemoglobina están los glóbulos rojos, independientemente de su tamaño.",
      "bajo": "Hipocromía — el signo más fiable de falta de hierro real.",
      "alto": "Muy poco frecuente — casi siempre indica esferocitosis hereditaria o un artefacto de laboratorio.",
      "unidad": "g/dL",
      "ref": "32–36"
     },
     {
      "nombre": "RDW",
      "sigla": "RDW",
      "que": "Mide cuánto varía el tamaño entre los distintos glóbulos rojos — no su tamaño medio, sino su uniformidad.",
      "bajo": "Normal — glóbulos rojos de tamaño uniforme.",
      "alto": "Sugiere una mezcla de glóbulos rojos de tamaños distintos — frecuente al inicio de una anemia por falta de hierro, antes incluso de que baje el VCM.",
      "unidad": "%",
      "ref": "11.5–14.5"
     },
     {
      "nombre": "Linfocitos absolutos",
      "sigla": "LINF",
      "que": "Tipo de glóbulo blanco especializado en la defensa contra virus y en la memoria inmunitaria a largo plazo.",
      "bajo": "Mayor riesgo de infecciones virales — puede deberse a ciertos tratamientos o infecciones como la gripe.",
      "alto": "Frecuente en infecciones virales activas, y también en algunas leucemias crónicas.",
      "unidad": "x10³/µL",
      "ref": "1.0–4.0"
     },
     {
      "nombre": "Neutrófilos absolutos",
      "sigla": "NEUT",
      "que": "El tipo de glóbulo blanco más numeroso, primera línea de defensa contra las bacterias.",
      "bajo": "Mayor riesgo de infecciones bacterianas graves — vigilado de cerca durante la quimioterapia.",
      "alto": "Sugiere infección bacteriana activa o inflamación aguda.",
      "unidad": "x10³/µL",
      "ref": "1.8–7.7"
     },
     {
      "nombre": "Monocitos",
      "sigla": "MONO",
      "que": "Tipo de glóbulo blanco que se transforma en macrófago al llegar a los tejidos, encargado de limpiar restos celulares e infecciones.",
      "bajo": "Poco relevante por sí solo.",
      "alto": "Puede aparecer en infecciones crónicas, recuperación de una infección aguda, o ciertas enfermedades inflamatorias.",
      "unidad": "x10³/µL",
      "ref": "0.2–0.8"
     }
    ]
   },
   {
    "nombre": "🍬 Glucosa y Diabetes",
    "params": [
     {
      "nombre": "Glucosa",
      "sigla": "GLU",
      "que": "Nivel de azúcar en sangre en ayunas.",
      "bajo": "Hipoglucemia: mareos, temblores.",
      "alto": "Diabetes o prediabetes.",
      "unidad": "mg/dL",
      "ref": "70–110"
     },
     {
      "nombre": "Hemoglobina A1c",
      "sigla": "HbA1c",
      "que": "Refleja el nivel medio de azúcar en sangre durante los últimos 2–3 meses.",
      "bajo": "Normal.",
      "alto": "≥6.5%: diabetes · 5.7–6.4%: prediabetes.",
      "unidad": "%",
      "ref": "<6.5"
     }
    ]
   },
   {
    "nombre": "🫀 Corazón y Riñones",
    "params": [
     {
      "nombre": "Creatinina",
      "sigla": "Crea",
      "que": "Residuo muscular eliminado por los riñones. Indica cómo funcionan los riñones.",
      "bajo": "Normal.",
      "alto": "Los riñones no filtran bien.",
      "unidad": "mg/dL",
      "ref": "0.51–0.95"
     },
     {
      "nombre": "Filtrado Glomerular",
      "sigla": "FG",
      "que": "Cantidad de sangre que filtran los riñones por minuto. Es la medida más importante de la función renal.",
      "bajo": "<60: enfermedad renal crónica · <30: grave.",
      "alto": "Normal.",
      "unidad": "ml/min",
      "ref": ">60"
     },
     {
      "nombre": "Urea",
      "sigla": "BUN",
      "que": "Residuo proteico eliminado por los riñones.",
      "bajo": "Normal.",
      "alto": "Problema renal o deshidratación.",
      "unidad": "mg/dL",
      "ref": "10–50"
     },
     {
      "nombre": "Troponina",
      "sigla": "TnI",
      "que": "Proteína liberada cuando el músculo cardíaco sufre daño. Marcador de infarto.",
      "bajo": "Normal.",
      "alto": "Posible infarto o daño cardíaco — urgencia médica.",
      "unidad": "ng/L",
      "ref": "<14"
     },
     {
      "nombre": "NT-ProBNP / BNP",
      "sigla": "BNP",
      "que": "Hormona producida cuando el corazón trabaja en exceso. Indica insuficiencia cardíaca.",
      "bajo": "Normal.",
      "alto": "El corazón está sobrecargado.",
      "unidad": "pg/mL",
      "ref": "<125"
     },
     {
      "nombre": "Sodio",
      "sigla": "Na",
      "que": "Mineral que regula el agua en el cuerpo y la presión arterial.",
      "bajo": "Confusión, convulsiones.",
      "alto": "Deshidratación.",
      "unidad": "mmol/L",
      "ref": "134–145"
     },
     {
      "nombre": "Potasio",
      "sigla": "K",
      "que": "Mineral esencial para el corazón y los músculos.",
      "bajo": "Debilidad muscular, arritmias.",
      "alto": "Arritmias cardíacas.",
      "unidad": "mmol/L",
      "ref": "3.5–5"
     },
     {
      "nombre": "Ácido úrico",
      "sigla": "UA",
      "que": "Producto de desecho de la degradación de las purinas (presentes en carnes, mariscos y alcohol). Se elimina por el riñón.",
      "bajo": "Poco relevante por sí solo.",
      "alto": "Riesgo de gota (cristales dolorosos en las articulaciones) y de cálculos renales.",
      "unidad": "mg/dL",
      "ref": "3.5–7.2"
     },
     {
      "nombre": "CPK",
      "sigla": "CPK",
      "que": "Enzima presente en los músculos, incluido el corazón. Se libera a la sangre cuando el tejido muscular se daña.",
      "bajo": "Poco relevante.",
      "alto": "Sugiere daño muscular — ejercicio intenso, infarto, o efecto secundario de ciertos medicamentos como las estatinas.",
      "unidad": "U/L",
      "ref": "30–200"
     }
    ]
   },
   {
    "nombre": "🧈 Colesterol y Grasas",
    "params": [
     {
      "nombre": "Colesterol total",
      "sigla": "CHOL",
      "que": "Grasa total en sangre. Incluye el 'bueno' (HDL) y el 'malo' (LDL).",
      "bajo": "Normal.",
      "alto": "Mayor riesgo cardiovascular.",
      "unidad": "mg/dL",
      "ref": "<200 ideal"
     },
     {
      "nombre": "LDL (colesterol malo)",
      "sigla": "LDL",
      "que": "Colesterol que se deposita en las arterias y las obstruye.",
      "bajo": "Normal.",
      "alto": "Riesgo de infarto e ictus. Objetivo: <116 mg/dL.",
      "unidad": "mg/dL",
      "ref": "<116"
     },
     {
      "nombre": "HDL (colesterol bueno)",
      "sigla": "HDL",
      "que": "Colesterol protector que limpia las arterias.",
      "bajo": "Mayor riesgo cardiovascular.",
      "alto": "Protector.",
      "unidad": "mg/dL",
      "ref": "40–65"
     },
     {
      "nombre": "Triglicéridos",
      "sigla": "TG",
      "que": "Grasas de reserva en sangre. Suben con la alimentación, el alcohol y la diabetes.",
      "bajo": "Normal.",
      "alto": "Riesgo cardiovascular y pancreático.",
      "unidad": "mg/dL",
      "ref": "50–165"
     },
     {
      "nombre": "Colesterol no-HDL",
      "sigla": "noHDL",
      "que": "Todo el colesterol malo reunido — el total menos el HDL. Incluye el LDL y otras partículas también capaces de dañar las arterias.",
      "bajo": "Normal.",
      "alto": "Riesgo cardiovascular — considerado por algunos médicos más completo que el LDL solo, especialmente si los triglicéridos están altos.",
      "unidad": "mg/dL",
      "ref": "<130"
     }
    ]
   },
   {
    "nombre": "🔥 Inflamación",
    "params": [
     {
      "nombre": "PCR (Proteína C Reactiva)",
      "sigla": "CRP",
      "que": "Marcador de inflamación o infección activa en el cuerpo.",
      "bajo": "Normal.",
      "alto": "Infección, inflamación o enfermedad autoinmune.",
      "unidad": "mg/L",
      "ref": "<10"
     },
     {
      "nombre": "Fibrinógeno",
      "sigla": "Fib",
      "que": "Proteína de la coagulación que también sube con la inflamación.",
      "bajo": "Riesgo de sangrado.",
      "alto": "Inflamación o trombosis.",
      "unidad": "mg/dL",
      "ref": "200–400"
     },
     {
      "nombre": "LDH",
      "sigla": "LDH",
      "que": "Enzima presente en casi todos los tejidos del cuerpo. Se libera a la sangre siempre que hay daño o destrucción celular, sea cual sea la causa.",
      "bajo": "Poco relevante.",
      "alto": "Muy inespecífico — puede deberse a daño muscular, hepático, hemólisis (destrucción de glóbulos rojos), o algunos tumores. Necesita interpretarse junto a otras pruebas.",
      "unidad": "U/L",
      "ref": "140–280"
     }
    ]
   },
   {
    "nombre": "🌡️ Vitaminas y Hormonas",
    "params": [
     {
      "nombre": "Vitamina D (Calcidiol)",
      "sigla": "VitD",
      "que": "Vitamina esencial para los huesos, el sistema inmunitario y el cerebro. Se obtiene del sol.",
      "bajo": "<30: déficit · <20: déficit severo. Riesgo de caídas, deterioro cognitivo, depresión.",
      "alto": "Raro. Muy altas dosis suplementarias.",
      "unidad": "ng/mL",
      "ref": "30–100"
     },
     {
      "nombre": "Vitamina B12",
      "sigla": "B12",
      "que": "Vitamina esencial para el sistema nervioso y la formación de glóbulos rojos.",
      "bajo": "Anemia, hormigueos, problemas neurológicos.",
      "alto": "Generalmente sin consecuencias.",
      "unidad": "pg/mL",
      "ref": "180–914"
     },
     {
      "nombre": "Ácido Fólico",
      "sigla": "Fol",
      "que": "Vitamina B9: esencial para la formación de células y el sistema nervioso.",
      "bajo": "Anemia, problemas neurológicos.",
      "alto": "Sin consecuencias.",
      "unidad": "ng/mL",
      "ref": "4–16"
     },
     {
      "nombre": "TSH (Tirotropina)",
      "sigla": "TSH",
      "que": "Hormona que controla la tiroides. Indica si la tiroides funciona bien.",
      "bajo": "Hipertiroidismo: palpitaciones, pérdida de peso.",
      "alto": "Hipotiroidismo: cansancio, frío, aumento de peso.",
      "unidad": "mUI/L",
      "ref": "0.38–5.33"
     },
     {
      "nombre": "Ferritina",
      "sigla": "Fer",
      "que": "Reserva de hierro en el cuerpo.",
      "bajo": "Déficit de hierro — anemia.",
      "alto": "Inflamación o sobrecarga de hierro.",
      "unidad": "ng/mL",
      "ref": "20–300"
     },
     {
      "nombre": "Hierro sérico",
      "sigla": "Fe",
      "que": "El hierro circulando en la sangre en este momento — a diferencia de la ferritina, que refleja las reservas, este valor cambia mucho durante el día y con la última comida.",
      "bajo": "Sugiere falta de hierro, aunque conviene confirmarlo con la ferritina.",
      "alto": "Puede deberse a suplementos de hierro recientes o, más raramente, a sobrecarga de hierro.",
      "unidad": "µg/dL",
      "ref": "60–170"
     },
     {
      "nombre": "T4 libre",
      "sigla": "T4L",
      "que": "La hormona tiroidea activa, circulando libre en la sangre (no unida a proteínas transportadoras). Se interpreta siempre junto a la TSH.",
      "bajo": "Hipotiroidismo — sobre todo si la TSH está alta.",
      "alto": "Hipertiroidismo — sobre todo si la TSH está baja.",
      "unidad": "ng/dL",
      "ref": "0.8–1.8"
     }
    ]
   },
   {
    "nombre": "🫀 Hígado",
    "params": [
     {
      "nombre": "GPT / ALT",
      "sigla": "GPT",
      "que": "Enzima hepática. Indica daño en las células del hígado.",
      "bajo": "Normal.",
      "alto": "Inflamación del hígado (hepatitis, medicamentos, alcohol).",
      "unidad": "UI/L",
      "ref": "10–37"
     },
     {
      "nombre": "GGT",
      "sigla": "GGT",
      "que": "Enzima que sube con el alcohol, algunos medicamentos o enfermedad hepática.",
      "bajo": "Normal.",
      "alto": "Consumo de alcohol, medicamentos hepatotóxicos.",
      "unidad": "UI/L",
      "ref": "7–50"
     },
     {
      "nombre": "Fosfatasa alcalina",
      "sigla": "ALP",
      "que": "Enzima del hígado y los huesos.",
      "bajo": "Normal.",
      "alto": "Enfermedad hepática o ósea.",
      "unidad": "UI/L",
      "ref": "40–145"
     },
     {
      "nombre": "Albúmina",
      "sigla": "Alb",
      "que": "Proteína principal de la sangre, fabricada por el hígado. Indica el estado nutricional.",
      "bajo": "Desnutrición o enfermedad hepática grave.",
      "alto": "Normal.",
      "unidad": "g/dL",
      "ref": "3.5–5.2"
     },
     {
      "nombre": "INR",
      "sigla": "INR",
      "que": "Mide la coagulación de la sangre. Importante en pacientes con anticoagulantes.",
      "bajo": "La sangre coagula demasiado rápido.",
      "alto": "Riesgo de hemorragia — sangre demasiado líquida.",
      "unidad": "",
      "ref": "0.85–1.25"
     },
     {
      "nombre": "Bilirrubina",
      "sigla": "Bili",
      "que": "Producto de desecho de la degradación de los glóbulos rojos viejos, procesado por el hígado y eliminado por la bilis. Es lo que da el color amarillo a la ictericia.",
      "bajo": "Poco relevante.",
      "alto": "Puede indicar obstrucción de las vías biliares, enfermedad hepática, o destrucción acelerada de glóbulos rojos (hemólisis).",
      "unidad": "mg/dL",
      "ref": "0.2–1.2"
     },
     {
      "nombre": "GOT / AST",
      "sigla": "AST",
      "que": "Enzima presente en el hígado, pero también en el corazón y los músculos — menos específica del hígado que la GPT.",
      "bajo": "Poco relevante.",
      "alto": "Sugiere daño hepático, aunque también puede deberse a daño muscular o cardíaco — se interpreta junto a la GPT para orientar el origen.",
      "unidad": "U/L",
      "ref": "5–40"
     },
     {
      "nombre": "Proteínas totales",
      "sigla": "PT",
      "que": "La suma de todas las proteínas en sangre, principalmente albúmina y globulinas (estas últimas incluyen los anticuerpos).",
      "bajo": "Puede reflejar desnutrición, enfermedad hepática o pérdida de proteínas.",
      "alto": "Puede deberse a deshidratación o a un exceso de globulinas, como en algunas enfermedades inflamatorias crónicas.",
      "unidad": "g/dL",
      "ref": "6.4–8.3"
     }
    ]
   },
   {
    "nombre": "🧪 Electrolitos",
    "params": [
     {
      "nombre": "Bicarbonato",
      "sigla": "HCO3",
      "que": "El principal regulador del equilibrio ácido-base de la sangre, fabricado y ajustado por los riñones y los pulmones en conjunto.",
      "bajo": "Sugiere acidosis — el cuerpo está demasiado ácido, por ejemplo en la diabetes mal controlada o la enfermedad renal.",
      "alto": "Sugiere alcalosis — con frecuencia por vómitos prolongados o ciertos diuréticos.",
      "unidad": "mmol/L",
      "ref": "22–29"
     },
     {
      "nombre": "Calcio",
      "sigla": "Ca",
      "que": "Mineral esencial para los huesos, pero también para la contracción muscular (incluido el corazón) y la coagulación de la sangre.",
      "bajo": "Puede causar hormigueos, calambres y, en casos graves, alteraciones del ritmo cardíaco.",
      "alto": "Puede causar cansancio, estreñimiento y cálculos renales — a menudo relacionado con las glándulas paratiroides o algunos tumores.",
      "unidad": "mg/dL",
      "ref": "8.5–10.5"
     },
     {
      "nombre": "Cloro",
      "sigla": "Cl",
      "que": "Electrolito que acompaña de cerca al sodio, ayudando a mantener el equilibrio de líquidos y el equilibrio ácido-base.",
      "bajo": "Suele acompañar a la pérdida de sodio — vómitos, diarrea, ciertos diuréticos.",
      "alto": "Suele acompañar a la deshidratación.",
      "unidad": "mmol/L",
      "ref": "98–107"
     },
     {
      "nombre": "Fósforo",
      "sigla": "P",
      "que": "Mineral que trabaja en estrecha relación con el calcio, esencial para los huesos y para la energía de las células.",
      "bajo": "Poco frecuente — puede deberse a desnutrición o exceso de antiácidos.",
      "alto": "Frecuente en la enfermedad renal crónica, ya que el riñón dañado no lo elimina bien.",
      "unidad": "mg/dL",
      "ref": "2.5–4.5"
     },
     {
      "nombre": "Magnesio",
      "sigla": "Mg",
      "que": "Mineral implicado en cientos de reacciones del cuerpo, incluida la función muscular y nerviosa y el ritmo cardíaco.",
      "bajo": "Puede causar calambres, temblores y arritmias — frecuente por diarrea crónica, alcoholismo o ciertos diuréticos.",
      "alto": "Poco frecuente — casi siempre relacionado con enfermedad renal avanzada.",
      "unidad": "mg/dL",
      "ref": "1.7–2.2"
     }
    ]
   },
   {
    "nombre": "🩹 Coagulación",
    "params": [
     {
      "nombre": "Actividad de Protrombina",
      "sigla": "AP",
      "que": "Mide qué porcentaje de la capacidad normal de coagulación tiene la sangre, comparado con un valor de referencia. Es otra forma de expresar lo mismo que mide el INR, en sentido inverso.",
      "bajo": "Sangre que coagula mal — riesgo de hemorragia.",
      "alto": "Sangre que coagula más rápido de lo normal.",
      "unidad": "%",
      "ref": "70–120"
     },
     {
      "nombre": "Tiempo de Protrombina",
      "sigla": "TP",
      "que": "Mide cuántos segundos tarda la sangre en coagular por la vía externa de la coagulación — la base de la que se calculan tanto el INR como la actividad de protrombina.",
      "bajo": "Poco relevante por sí solo.",
      "alto": "Sangre que tarda más en coagular — riesgo de hemorragia, o efecto esperado de un anticoagulante como la warfarina.",
      "unidad": "seg",
      "ref": "11–13.5"
     },
     {
      "nombre": "TTPA",
      "sigla": "TTPA",
      "que": "Mide el tiempo de coagulación por la vía interna, complementaria a la que mide el tiempo de protrombina — juntas, exploran las dos rutas principales de la coagulación.",
      "bajo": "Poco relevante por sí solo.",
      "alto": "Sangre que tarda más en coagular por esta vía — puede deberse a ciertos anticoagulantes (heparina) o a déficits específicos de factores de coagulación.",
      "unidad": "seg",
      "ref": "25–35"
     },
     {
      "nombre": "Dímero D",
      "sigla": "DD",
      "que": "Fragmento que aparece cuando el cuerpo deshace un coágulo. Sirve sobre todo para DESCARTAR una trombosis: si es normal, casi seguro que no la hay.",
      "bajo": "Normal — hace poco probable una trombosis o una embolia.",
      "alto": "Puede haber un coágulo, pero también sube con la edad, una infección, una cirugía reciente o un embarazo. Un valor alto no basta para diagnosticar: pide otras pruebas."
     }
    ]
   },
   {
    "nombre": "🧪 Análisis de orina",
    "params": [
     {
      "nombre": "Nitritos",
      "sigla": "NIT",
      "que": "Producidos por ciertas bacterias que descomponen los nitratos de la orina. Su presencia sugiere una infección urinaria bacteriana.",
      "bajo": "Normal — sin bacterias productoras de nitritos.",
      "alto": "Sugiere infección urinaria bacteriana — a menudo junto a leucocitos elevados.",
      "unidad": "",
      "ref": "Negativo"
     },
     {
      "nombre": "Leucocitos en orina",
      "sigla": "LEU-O",
      "que": "Glóbulos blancos presentes en la orina, señal de inflamación o infección del tracto urinario.",
      "bajo": "Normal.",
      "alto": "Sugiere infección o inflamación urinaria — a menudo junto a nitritos positivos.",
      "unidad": "",
      "ref": "Negativo o trazas"
     },
     {
      "nombre": "Densidad urinaria",
      "sigla": "DENS",
      "que": "Mide qué tan concentrada está la orina — cuántas sustancias disueltas contiene en relación al agua.",
      "bajo": "Orina muy diluida — exceso de líquidos o incapacidad del riñón para concentrar.",
      "alto": "Orina muy concentrada — deshidratación.",
      "unidad": "",
      "ref": "1.005–1.030"
     },
     {
      "nombre": "pH urinario",
      "sigla": "pH-O",
      "que": "Mide la acidez o alcalinidad de la orina, influida por la dieta, ciertos medicamentos y algunas infecciones.",
      "bajo": "Orina ácida — dieta rica en proteínas, ayuno, ciertos fármacos.",
      "alto": "Orina alcalina — dieta vegetariana, algunas infecciones urinarias.",
      "unidad": "",
      "ref": "4.5–8.0"
     },
     {
      "nombre": "Proteínas en orina",
      "sigla": "PROT-O",
      "que": "Normalmente los riñones retienen las proteínas en la sangre. Su presencia en orina sugiere que el filtro renal está dañado.",
      "bajo": "Normal — sin proteínas o trazas.",
      "alto": "Sugiere daño renal — requiere seguimiento si es persistente.",
      "unidad": "",
      "ref": "Negativo o trazas"
     },
     {
      "nombre": "Glucosa en orina",
      "sigla": "GLU-O",
      "que": "Normalmente toda la glucosa filtrada por el riñón se reabsorbe. Aparece en orina cuando la glucosa en sangre supera cierto umbral.",
      "bajo": "Normal.",
      "alto": "Sugiere diabetes mal controlada — la glucosa en sangre supera la capacidad de reabsorción renal.",
      "unidad": "",
      "ref": "Negativo"
     }
    ]
   }
  ]
 },
 "fr": {
  "categorias": [
   {
    "nombre": "🩸 Hématologie — Sang",
    "params": [
     {
      "nombre": "Hémoglobine",
      "sigla": "Hb",
      "que": "Protéine des globules rouges qui transporte l'oxygène dans le corps.",
      "bajo": "Anémie : fatigue, pâleur, essoufflement.",
      "alto": "Déshydratation ou maladie pulmonaire.",
      "unidad": "g/dL",
      "ref": "12–18"
     },
     {
      "nombre": "Hématocrite",
      "sigla": "Hct",
      "que": "Pourcentage du volume sanguin occupé par les globules rouges.",
      "bajo": "Anémie.",
      "alto": "Déshydratation ou maladie pulmonaire.",
      "unidad": "%",
      "ref": "37–52"
     },
     {
      "nombre": "Leucocytes",
      "sigla": "GB",
      "que": "Globules blancs : cellules de défense du système immunitaire.",
      "bajo": "Risque accru d'infections.",
      "alto": "Infection active ou inflammation.",
      "unidad": "x10³/µL",
      "ref": "4.8–10.8"
     },
     {
      "nombre": "Plaquettes",
      "sigla": "PLT",
      "que": "Petites cellules qui arrêtent les saignements en formant des caillots.",
      "bajo": "Risque hémorragique.",
      "alto": "Risque de thrombose.",
      "unidad": "x10³/µL",
      "ref": "130–400"
     },
     {
      "nombre": "VS (Vitesse de sédimentation)",
      "sigla": "VS",
      "que": "Mesure l'inflammation générale du corps.",
      "bajo": "Normal.",
      "alto": "Infection, inflammation ou maladie auto-immune.",
      "unidad": "mm/h",
      "ref": "0–20"
     },
     {
      "nombre": "VGM (Volume Globulaire Moyen)",
      "sigla": "VGM",
      "que": "Taille des globules rouges.",
      "bajo": "Anémie ferriprive.",
      "alto": "Déficit en B12 ou acide folique (macrocytose).",
      "unidad": "fL",
      "ref": "80–96"
     },
     {
      "nombre": "TCMH (Teneur Corpusculaire Moyenne en Hémoglobine)",
      "sigla": "TCMH",
      "que": "Quantité moyenne d'hémoglobine par globule rouge.",
      "bajo": "Globules rouges pauvres en hémoglobine — hypochromie, typique du manque de fer.",
      "alto": "Accompagne souvent les globules rouges volumineux (macrocytose) — plus de volume, plus d'hémoglobine.",
      "unidad": "pg",
      "ref": "27–33"
     },
     {
      "nombre": "CCMH (Concentration Corpusculaire Moyenne en Hémoglobine)",
      "sigla": "CCMH",
      "que": "Concentration d'hémoglobine à l'intérieur des globules rouges, indépendamment de leur taille.",
      "bajo": "Hypochromie — le signe le plus fiable d'un vrai manque de fer.",
      "alto": "Très rare — indique presque toujours une sphérocytose héréditaire ou un artefact de laboratoire.",
      "unidad": "g/dL",
      "ref": "32–36"
     },
     {
      "nombre": "IDR (Indice de Distribution des globules Rouges)",
      "sigla": "IDR",
      "que": "Mesure à quel point la taille varie entre les différents globules rouges — pas leur taille moyenne, mais leur uniformité.",
      "bajo": "Normal — globules rouges de taille uniforme.",
      "alto": "Suggère un mélange de globules rouges de tailles différentes — fréquent au début d'une anémie par manque de fer, avant même que le VGM ne baisse.",
      "unidad": "%",
      "ref": "11.5–14.5"
     },
     {
      "nombre": "Lymphocytes absolus",
      "sigla": "LYMPH",
      "que": "Type de globule blanc spécialisé dans la défense contre les virus et la mémoire immunitaire à long terme.",
      "bajo": "Risque accru d'infections virales — peut être dû à certains traitements ou infections comme la grippe.",
      "alto": "Fréquent lors d'infections virales actives, et aussi dans certaines leucémies chroniques.",
      "unidad": "x10³/µL",
      "ref": "1.0–4.0"
     },
     {
      "nombre": "Neutrophiles absolus",
      "sigla": "NEUT",
      "que": "Le type de globule blanc le plus nombreux, première ligne de défense contre les bactéries.",
      "bajo": "Risque accru d'infections bactériennes graves — surveillé de près pendant la chimiothérapie.",
      "alto": "Suggère une infection bactérienne active ou une inflammation aiguë.",
      "unidad": "x10³/µL",
      "ref": "1.8–7.7"
     },
     {
      "nombre": "Monocytes",
      "sigla": "MONO",
      "que": "Type de globule blanc qui se transforme en macrophage en arrivant dans les tissus, chargé de nettoyer les débris cellulaires et les infections.",
      "bajo": "Peu significatif à lui seul.",
      "alto": "Peut apparaître lors d'infections chroniques, de récupération après une infection aiguë, ou de certaines maladies inflammatoires.",
      "unidad": "x10³/µL",
      "ref": "0.2–0.8"
     }
    ]
   },
   {
    "nombre": "🍬 Glycémie et Diabète",
    "params": [
     {
      "nombre": "Glycémie",
      "sigla": "GLU",
      "que": "Taux de sucre dans le sang à jeun.",
      "bajo": "Hypoglycémie : vertiges, tremblements.",
      "alto": "Diabète ou prédiabète.",
      "unidad": "mg/dL",
      "ref": "70–110"
     },
     {
      "nombre": "Hémoglobine A1c",
      "sigla": "HbA1c",
      "que": "Reflète le taux moyen de sucre sur les 2–3 derniers mois.",
      "bajo": "Normal.",
      "alto": "≥6.5% : diabète · 5.7–6.4% : prédiabète.",
      "unidad": "%",
      "ref": "<6.5"
     }
    ]
   },
   {
    "nombre": "🫀 Cœur et Reins",
    "params": [
     {
      "nombre": "Créatinine",
      "sigla": "Crea",
      "que": "Déchet musculaire éliminé par les reins. Indique leur fonctionnement.",
      "bajo": "Normal.",
      "alto": "Les reins ne filtrent pas bien.",
      "unidad": "mg/dL",
      "ref": "0.51–0.95"
     },
     {
      "nombre": "Filtration Glomérulaire",
      "sigla": "DFG",
      "que": "Quantité de sang filtrée par les reins par minute. Mesure principale de la fonction rénale.",
      "bajo": "<60 : maladie rénale chronique · <30 : grave.",
      "alto": "Normal.",
      "unidad": "ml/min",
      "ref": ">60"
     },
     {
      "nombre": "Urée",
      "sigla": "BUN",
      "que": "Déchet protéique éliminé par les reins.",
      "bajo": "Normal.",
      "alto": "Problème rénal ou déshydratation.",
      "unidad": "mg/dL",
      "ref": "10–50"
     },
     {
      "nombre": "Troponine",
      "sigla": "TnI",
      "que": "Protéine libérée lors d'une lésion du muscle cardiaque. Marqueur d'infarctus.",
      "bajo": "Normal.",
      "alto": "Possible infarctus ou lésion cardiaque — urgence médicale.",
      "unidad": "ng/L",
      "ref": "<14"
     },
     {
      "nombre": "NT-ProBNP / BNP",
      "sigla": "BNP",
      "que": "Hormone produite quand le cœur travaille trop fort. Indique une insuffisance cardiaque.",
      "bajo": "Normal.",
      "alto": "Le cœur est en surcharge.",
      "unidad": "pg/mL",
      "ref": "<125"
     },
     {
      "nombre": "Sodium",
      "sigla": "Na",
      "que": "Minéral qui régule l'eau dans le corps et la tension artérielle.",
      "bajo": "Confusion, convulsions.",
      "alto": "Déshydratation.",
      "unidad": "mmol/L",
      "ref": "134–145"
     },
     {
      "nombre": "Potassium",
      "sigla": "K",
      "que": "Minéral essentiel pour le cœur et les muscles.",
      "bajo": "Faiblesse musculaire, arythmies.",
      "alto": "Arythmies cardiaques.",
      "unidad": "mmol/L",
      "ref": "3.5–5"
     },
     {
      "nombre": "Acide urique",
      "sigla": "UA",
      "que": "Déchet issu de la dégradation des purines (présentes dans les viandes, fruits de mer et l'alcool). Éliminé par le rein.",
      "bajo": "Peu significatif à lui seul.",
      "alto": "Risque de goutte (cristaux douloureux dans les articulations) et de calculs rénaux.",
      "unidad": "mg/dL",
      "ref": "3.5–7.2"
     },
     {
      "nombre": "CPK",
      "sigla": "CPK",
      "que": "Enzyme présente dans les muscles, y compris le cœur. Libérée dans le sang lorsque le tissu musculaire est endommagé.",
      "bajo": "Peu significatif.",
      "alto": "Suggère une atteinte musculaire — exercice intense, infarctus, ou effet secondaire de certains médicaments comme les statines.",
      "unidad": "U/L",
      "ref": "30–200"
     }
    ]
   },
   {
    "nombre": "🧈 Cholestérol et Graisses",
    "params": [
     {
      "nombre": "Cholestérol total",
      "sigla": "CHOL",
      "que": "Graisse totale dans le sang. Inclut le 'bon' (HDL) et le 'mauvais' (LDL).",
      "bajo": "Normal.",
      "alto": "Risque cardiovasculaire accru.",
      "unidad": "mg/dL",
      "ref": "<200 idéal"
     },
     {
      "nombre": "LDL (mauvais cholestérol)",
      "sigla": "LDL",
      "que": "Cholestérol qui se dépose dans les artères et les obstrue.",
      "bajo": "Normal.",
      "alto": "Risque d'infarctus et d'AVC. Objectif : <116 mg/dL.",
      "unidad": "mg/dL",
      "ref": "<116"
     },
     {
      "nombre": "HDL (bon cholestérol)",
      "sigla": "HDL",
      "que": "Cholestérol protecteur qui nettoie les artères.",
      "bajo": "Risque cardiovasculaire accru.",
      "alto": "Protecteur.",
      "unidad": "mg/dL",
      "ref": "40–65"
     },
     {
      "nombre": "Triglycérides",
      "sigla": "TG",
      "que": "Graisses de réserve dans le sang. Augmentent avec l'alimentation, l'alcool et le diabète.",
      "bajo": "Normal.",
      "alto": "Risque cardiovasculaire et pancréatique.",
      "unidad": "mg/dL",
      "ref": "50–165"
     },
     {
      "nombre": "Cholestérol non-HDL",
      "sigla": "noHDL",
      "que": "Tout le mauvais cholestérol réuni — le total moins le HDL. Inclut le LDL et d'autres particules également capables d'endommager les artères.",
      "bajo": "Normal.",
      "alto": "Risque cardiovasculaire — considéré par certains médecins comme plus complet que le LDL seul, surtout si les triglycérides sont élevés.",
      "unidad": "mg/dL",
      "ref": "<130"
     }
    ]
   },
   {
    "nombre": "🔥 Inflammation",
    "params": [
     {
      "nombre": "CRP (Protéine C Réactive)",
      "sigla": "CRP",
      "que": "Marqueur d'inflammation ou d'infection active dans le corps.",
      "bajo": "Normal.",
      "alto": "Infection, inflammation ou maladie auto-immune.",
      "unidad": "mg/L",
      "ref": "<10"
     },
     {
      "nombre": "Fibrinogène",
      "sigla": "Fib",
      "que": "Protéine de la coagulation qui augmente aussi avec l'inflammation.",
      "bajo": "Risque hémorragique.",
      "alto": "Inflammation ou thrombose.",
      "unidad": "mg/dL",
      "ref": "200–400"
     },
     {
      "nombre": "LDH",
      "sigla": "LDH",
      "que": "Enzyme présente dans presque tous les tissus du corps. Libérée dans le sang dès qu'il y a atteinte ou destruction cellulaire, quelle qu'en soit la cause.",
      "bajo": "Peu significatif.",
      "alto": "Très peu spécifique — peut être dû à une atteinte musculaire, hépatique, une hémolyse (destruction de globules rouges), ou certaines tumeurs. Nécessite d'être interprété avec d'autres tests.",
      "unidad": "U/L",
      "ref": "140–280"
     }
    ]
   },
   {
    "nombre": "🌡️ Vitamines et Hormones",
    "params": [
     {
      "nombre": "Vitamine D (Calcidiol)",
      "sigla": "VitD",
      "que": "Vitamine essentielle pour les os, le système immunitaire et le cerveau. Obtenue par le soleil.",
      "bajo": "<30 : déficit · <20 : déficit sévère. Risque de chutes, déclin cognitif, dépression.",
      "alto": "Rare. Seulement avec suppléments à très hautes doses.",
      "unidad": "ng/mL",
      "ref": "30–100"
     },
     {
      "nombre": "Vitamine B12",
      "sigla": "B12",
      "que": "Vitamine essentielle pour le système nerveux et la formation des globules rouges.",
      "bajo": "Anémie, fourmillements, problèmes neurologiques.",
      "alto": "Généralement sans conséquences.",
      "unidad": "pg/mL",
      "ref": "180–914"
     },
     {
      "nombre": "Acide Folique",
      "sigla": "Fol",
      "que": "Vitamine B9 : essentielle pour la formation des cellules et le système nerveux.",
      "bajo": "Anémie, problèmes neurologiques.",
      "alto": "Sans conséquences.",
      "unidad": "ng/mL",
      "ref": "4–16"
     },
     {
      "nombre": "TSH (Thyréostimuline)",
      "sigla": "TSH",
      "que": "Hormone qui contrôle la thyroïde. Indique si la thyroïde fonctionne bien.",
      "bajo": "Hyperthyroïdie : palpitations, perte de poids.",
      "alto": "Hypothyroïdie : fatigue, froid, prise de poids.",
      "unidad": "mUI/L",
      "ref": "0.38–5.33"
     },
     {
      "nombre": "Ferritine",
      "sigla": "Fer",
      "que": "Réserve de fer dans le corps.",
      "bajo": "Déficit en fer — anémie.",
      "alto": "Inflammation ou surcharge en fer.",
      "unidad": "ng/mL",
      "ref": "20–300"
     },
     {
      "nombre": "Fer sérique",
      "sigla": "Fe",
      "que": "Le fer circulant dans le sang à cet instant — contrairement à la ferritine, qui reflète les réserves, cette valeur varie beaucoup dans la journée et selon le dernier repas.",
      "bajo": "Suggère un manque de fer, à confirmer avec la ferritine.",
      "alto": "Peut être dû à une supplémentation en fer récente ou, plus rarement, à une surcharge en fer.",
      "unidad": "µg/dL",
      "ref": "60–170"
     },
     {
      "nombre": "T4 libre",
      "sigla": "T4L",
      "que": "L'hormone thyroïdienne active, circulant librement dans le sang (non liée aux protéines de transport). S'interprète toujours avec la TSH.",
      "bajo": "Hypothyroïdie — surtout si la TSH est élevée.",
      "alto": "Hyperthyroïdie — surtout si la TSH est basse.",
      "unidad": "ng/dL",
      "ref": "0.8–1.8"
     }
    ]
   },
   {
    "nombre": "🫀 Foie",
    "params": [
     {
      "nombre": "ALAT / GPT",
      "sigla": "GPT",
      "que": "Enzyme hépatique. Indique une lésion des cellules du foie.",
      "bajo": "Normal.",
      "alto": "Inflammation du foie (hépatite, médicaments, alcool).",
      "unidad": "UI/L",
      "ref": "10–37"
     },
     {
      "nombre": "GGT",
      "sigla": "GGT",
      "que": "Enzyme qui augmente avec l'alcool, certains médicaments ou une maladie hépatique.",
      "bajo": "Normal.",
      "alto": "Alcool, médicaments hépatotoxiques.",
      "unidad": "UI/L",
      "ref": "7–50"
     },
     {
      "nombre": "Phosphatases alcalines",
      "sigla": "PAL",
      "que": "Enzyme du foie et des os.",
      "bajo": "Normal.",
      "alto": "Maladie hépatique ou osseuse.",
      "unidad": "UI/L",
      "ref": "40–145"
     },
     {
      "nombre": "Albumine",
      "sigla": "Alb",
      "que": "Principale protéine du sang, fabriquée par le foie. Indique l'état nutritionnel.",
      "bajo": "Dénutrition ou maladie hépatique grave.",
      "alto": "Normal.",
      "unidad": "g/dL",
      "ref": "3.5–5.2"
     },
     {
      "nombre": "INR",
      "sigla": "INR",
      "que": "Mesure la coagulation du sang. Important chez les patients sous anticoagulants.",
      "bajo": "Le sang coagule trop vite.",
      "alto": "Risque hémorragique — sang trop fluide.",
      "unidad": "",
      "ref": "0.85–1.25"
     },
     {
      "nombre": "Bilirubine",
      "sigla": "Bili",
      "que": "Déchet issu de la dégradation des vieux globules rouges, traité par le foie et éliminé dans la bile. C'est ce qui donne la couleur jaune de la jaunisse.",
      "bajo": "Peu significatif.",
      "alto": "Peut indiquer une obstruction des voies biliaires, une maladie du foie, ou une destruction accélérée des globules rouges (hémolyse).",
      "unidad": "mg/dL",
      "ref": "0.2–1.2"
     },
     {
      "nombre": "ASAT / GOT",
      "sigla": "AST",
      "que": "Enzyme présente dans le foie, mais aussi dans le cœur et les muscles — moins spécifique du foie que l'ALAT.",
      "bajo": "Peu significatif.",
      "alto": "Suggère une atteinte hépatique, bien qu'elle puisse aussi être due à une atteinte musculaire ou cardiaque — s'interprète avec l'ALAT pour orienter l'origine.",
      "unidad": "U/L",
      "ref": "5–40"
     },
     {
      "nombre": "Protéines totales",
      "sigla": "PT",
      "que": "La somme de toutes les protéines du sang, principalement l'albumine et les globulines (ces dernières incluent les anticorps).",
      "bajo": "Peut refléter une malnutrition, une maladie hépatique ou une perte de protéines.",
      "alto": "Peut être dû à une déshydratation ou à un excès de globulines, comme dans certaines maladies inflammatoires chroniques.",
      "unidad": "g/dL",
      "ref": "6.4–8.3"
     }
    ]
   },
   {
    "nombre": "🧪 Électrolytes",
    "params": [
     {
      "nombre": "Bicarbonate",
      "sigla": "HCO3",
      "que": "Le principal régulateur de l'équilibre acido-basique du sang, fabriqué et ajusté conjointement par les reins et les poumons.",
      "bajo": "Suggère une acidose — le corps est trop acide, par exemple lors d'un diabète mal contrôlé ou d'une maladie rénale.",
      "alto": "Suggère une alcalose — souvent due à des vomissements prolongés ou certains diurétiques.",
      "unidad": "mmol/L",
      "ref": "22–29"
     },
     {
      "nombre": "Calcium",
      "sigla": "Ca",
      "que": "Minéral essentiel pour les os, mais aussi pour la contraction musculaire (y compris le cœur) et la coagulation du sang.",
      "bajo": "Peut provoquer des fourmillements, des crampes et, dans les cas graves, des troubles du rythme cardiaque.",
      "alto": "Peut provoquer fatigue, constipation et calculs rénaux — souvent lié aux glandes parathyroïdes ou à certaines tumeurs.",
      "unidad": "mg/dL",
      "ref": "8.5–10.5"
     },
     {
      "nombre": "Chlore",
      "sigla": "Cl",
      "que": "Électrolyte qui accompagne de près le sodium, aidant à maintenir l'équilibre des liquides et l'équilibre acido-basique.",
      "bajo": "Accompagne généralement une perte de sodium — vomissements, diarrhée, certains diurétiques.",
      "alto": "Accompagne généralement une déshydratation.",
      "unidad": "mmol/L",
      "ref": "98–107"
     },
     {
      "nombre": "Phosphore",
      "sigla": "P",
      "que": "Minéral travaillant en étroite relation avec le calcium, essentiel pour les os et l'énergie des cellules.",
      "bajo": "Peu fréquent — peut être dû à une malnutrition ou un excès d'antiacides.",
      "alto": "Fréquent dans la maladie rénale chronique, le rein endommagé ne l'éliminant plus bien.",
      "unidad": "mg/dL",
      "ref": "2.5–4.5"
     },
     {
      "nombre": "Magnésium",
      "sigla": "Mg",
      "que": "Minéral impliqué dans des centaines de réactions du corps, y compris la fonction musculaire et nerveuse et le rythme cardiaque.",
      "bajo": "Peut provoquer crampes, tremblements et arythmies — fréquent en cas de diarrhée chronique, d'alcoolisme ou de certains diurétiques.",
      "alto": "Peu fréquent — presque toujours lié à une maladie rénale avancée.",
      "unidad": "mg/dL",
      "ref": "1.7–2.2"
     }
    ]
   },
   {
    "nombre": "🩹 Coagulation",
    "params": [
     {
      "nombre": "Taux de Prothrombine (activité)",
      "sigla": "TP",
      "que": "Mesure quel pourcentage de la capacité normale de coagulation possède le sang, comparé à une valeur de référence. C'est une autre façon d'exprimer ce que mesure l'INR, en sens inverse.",
      "bajo": "Sang qui coagule mal — risque hémorragique.",
      "alto": "Sang qui coagule plus vite que la normale.",
      "unidad": "%",
      "ref": "70–120"
     },
     {
      "nombre": "Temps de Prothrombine",
      "sigla": "TP-sec",
      "que": "Mesure combien de secondes met le sang à coaguler par la voie externe de la coagulation — la base à partir de laquelle sont calculés l'INR et l'activité de prothrombine.",
      "bajo": "Peu significatif à lui seul.",
      "alto": "Sang qui met plus de temps à coaguler — risque hémorragique, ou effet attendu d'un anticoagulant comme la warfarine.",
      "unidad": "sec",
      "ref": "11–13.5"
     },
     {
      "nombre": "TCA (Temps de Céphaline Activée)",
      "sigla": "TCA",
      "que": "Mesure le temps de coagulation par la voie interne, complémentaire de celle mesurée par le temps de prothrombine — ensemble, elles explorent les deux voies principales de la coagulation.",
      "bajo": "Peu significatif à lui seul.",
      "alto": "Sang qui met plus de temps à coaguler par cette voie — peut être dû à certains anticoagulants (héparine) ou à des déficits spécifiques en facteurs de coagulation.",
      "unidad": "sec",
      "ref": "25–35"
     },
     {
      "nombre": "D-dimères",
      "sigla": "DD",
      "que": "Fragment qui apparaît quand le corps défait un caillot. Sert surtout à ÉCARTER une thrombose : s'il est normal, il n'y en a presque sûrement pas.",
      "bajo": "Normal — rend une thrombose ou une embolie peu probable.",
      "alto": "Il peut y avoir un caillot, mais ce taux monte aussi avec l'âge, une infection, une chirurgie récente ou une grossesse. Une valeur haute ne suffit pas à diagnostiquer."
     }
    ]
   },
   {
    "nombre": "🧪 Analyse d'urine",
    "params": [
     {
      "nombre": "Nitrites",
      "sigla": "NIT",
      "que": "Produits par certaines bactéries qui décomposent les nitrates de l'urine. Leur présence suggère une infection urinaire bactérienne.",
      "bajo": "Normal — pas de bactéries productrices de nitrites.",
      "alto": "Suggère une infection urinaire bactérienne — souvent avec des leucocytes élevés.",
      "unidad": "",
      "ref": "Négatif"
     },
     {
      "nombre": "Leucocytes urinaires",
      "sigla": "LEU-O",
      "que": "Globules blancs présents dans l'urine, signe d'inflammation ou d'infection des voies urinaires.",
      "bajo": "Normal.",
      "alto": "Suggère une infection ou inflammation urinaire — souvent avec des nitrites positifs.",
      "unidad": "",
      "ref": "Négatif ou traces"
     },
     {
      "nombre": "Densité urinaire",
      "sigla": "DENS",
      "que": "Mesure à quel point l'urine est concentrée — combien de substances dissoutes elle contient par rapport à l'eau.",
      "bajo": "Urine très diluée — excès de liquides ou incapacité du rein à concentrer.",
      "alto": "Urine très concentrée — déshydratation.",
      "unidad": "",
      "ref": "1.005–1.030"
     },
     {
      "nombre": "pH urinaire",
      "sigla": "pH-O",
      "que": "Mesure l'acidité ou l'alcalinité de l'urine, influencée par l'alimentation, certains médicaments et certaines infections.",
      "bajo": "Urine acide — alimentation riche en protéines, jeûne, certains médicaments.",
      "alto": "Urine alcaline — régime végétarien, certaines infections urinaires.",
      "unidad": "",
      "ref": "4.5–8.0"
     },
     {
      "nombre": "Protéines urinaires",
      "sigla": "PROT-O",
      "que": "Normalement les reins retiennent les protéines dans le sang. Leur présence dans l'urine suggère que le filtre rénal est endommagé.",
      "bajo": "Normal — sans protéines ou traces.",
      "alto": "Suggère une atteinte rénale — nécessite un suivi si persistant.",
      "unidad": "",
      "ref": "Négatif ou traces"
     },
     {
      "nombre": "Glucose urinaire",
      "sigla": "GLU-O",
      "que": "Normalement tout le glucose filtré par le rein est réabsorbé. Il apparaît dans l'urine quand la glycémie dépasse un certain seuil.",
      "bajo": "Normal.",
      "alto": "Suggère un diabète mal contrôlé — la glycémie dépasse la capacité de réabsorption rénale.",
      "unidad": "",
      "ref": "Négatif"
     }
    ]
   }
  ]
 },
 "en": {
  "categorias": [
   {
    "nombre": "🩸 Haematology — Blood",
    "params": [
     {
      "nombre": "Haemoglobin",
      "sigla": "Hb",
      "que": "Red blood cell protein that carries oxygen around the body.",
      "bajo": "Anaemia: fatigue, pallor, breathlessness.",
      "alto": "Dehydration or lung disease.",
      "unidad": "g/dL",
      "ref": "12–18"
     },
     {
      "nombre": "Haematocrit",
      "sigla": "Hct",
      "que": "Percentage of blood volume occupied by red blood cells.",
      "bajo": "Anaemia.",
      "alto": "Dehydration or lung disease.",
      "unidad": "%",
      "ref": "37–52"
     },
     {
      "nombre": "Leucocytes (WBC)",
      "sigla": "WBC",
      "que": "White blood cells: immune system defence cells.",
      "bajo": "Increased risk of infections.",
      "alto": "Active infection or inflammation.",
      "unidad": "x10³/µL",
      "ref": "4.8–10.8"
     },
     {
      "nombre": "Platelets",
      "sigla": "PLT",
      "que": "Small cells that stop bleeding by forming clots.",
      "bajo": "Haemorrhage risk.",
      "alto": "Thrombosis risk.",
      "unidad": "x10³/µL",
      "ref": "130–400"
     },
     {
      "nombre": "ESR (Sed Rate)",
      "sigla": "ESR",
      "que": "Erythrocyte sedimentation rate: measures general body inflammation.",
      "bajo": "Normal.",
      "alto": "Infection, inflammation or autoimmune disease.",
      "unidad": "mm/h",
      "ref": "0–20"
     },
     {
      "nombre": "MCV (Mean Cell Volume)",
      "sigla": "MCV",
      "que": "Size of red blood cells.",
      "bajo": "Iron deficiency anaemia.",
      "alto": "B12 or folate deficiency (macrocytosis).",
      "unidad": "fL",
      "ref": "80–96"
     },
     {
      "nombre": "MCH (Mean Cell Haemoglobin)",
      "sigla": "MCH",
      "que": "Average amount of haemoglobin per red blood cell.",
      "bajo": "Red cells low in haemoglobin — hypochromia, typical of iron deficiency.",
      "alto": "Often accompanies large red cells (macrocytosis) — more volume, more haemoglobin.",
      "unidad": "pg",
      "ref": "27–33"
     },
     {
      "nombre": "MCHC (Mean Cell Haemoglobin Concentration)",
      "sigla": "MCHC",
      "que": "Concentration of haemoglobin inside red blood cells, regardless of their size.",
      "bajo": "Hypochromia — the most reliable sign of true iron deficiency.",
      "alto": "Very rare — almost always indicates hereditary spherocytosis or a lab artefact.",
      "unidad": "g/dL",
      "ref": "32–36"
     },
     {
      "nombre": "RDW (Red Cell Distribution Width)",
      "sigla": "RDW",
      "que": "Measures how much size varies between different red blood cells — not their average size, but their uniformity.",
      "bajo": "Normal — uniformly sized red blood cells.",
      "alto": "Suggests a mix of different-sized red blood cells — common at the start of iron-deficiency anaemia, even before MCV drops.",
      "unidad": "%",
      "ref": "11.5–14.5"
     },
     {
      "nombre": "Absolute Lymphocytes",
      "sigla": "LYMPH",
      "que": "Type of white blood cell specialised in defence against viruses and long-term immune memory.",
      "bajo": "Increased risk of viral infections — can result from certain treatments or infections such as flu.",
      "alto": "Common in active viral infections, and also in some chronic leukaemias.",
      "unidad": "x10³/µL",
      "ref": "1.0–4.0"
     },
     {
      "nombre": "Absolute Neutrophils",
      "sigla": "NEUT",
      "que": "The most numerous type of white blood cell, first line of defence against bacteria.",
      "bajo": "Increased risk of serious bacterial infections — closely monitored during chemotherapy.",
      "alto": "Suggests active bacterial infection or acute inflammation.",
      "unidad": "x10³/µL",
      "ref": "1.8–7.7"
     },
     {
      "nombre": "Monocytes",
      "sigla": "MONO",
      "que": "Type of white blood cell that transforms into a macrophage upon reaching tissues, responsible for clearing cellular debris and infections.",
      "bajo": "Not significant on its own.",
      "alto": "Can appear in chronic infections, recovery from an acute infection, or certain inflammatory diseases.",
      "unidad": "x10³/µL",
      "ref": "0.2–0.8"
     }
    ]
   },
   {
    "nombre": "🍬 Blood Sugar and Diabetes",
    "params": [
     {
      "nombre": "Glucose (fasting)",
      "sigla": "GLU",
      "que": "Fasting blood sugar level.",
      "bajo": "Hypoglycaemia: dizziness, trembling.",
      "alto": "Diabetes or prediabetes.",
      "unidad": "mg/dL",
      "ref": "70–110"
     },
     {
      "nombre": "Haemoglobin A1c",
      "sigla": "HbA1c",
      "que": "Reflects average blood sugar over the past 2–3 months.",
      "bajo": "Normal.",
      "alto": "≥6.5%: diabetes · 5.7–6.4%: prediabetes.",
      "unidad": "%",
      "ref": "<6.5"
     }
    ]
   },
   {
    "nombre": "🫀 Heart and Kidneys",
    "params": [
     {
      "nombre": "Creatinine",
      "sigla": "Crea",
      "que": "Muscle waste product filtered by the kidneys. Indicates kidney function.",
      "bajo": "Normal.",
      "alto": "Kidneys not filtering well.",
      "unidad": "mg/dL",
      "ref": "0.51–0.95"
     },
     {
      "nombre": "GFR (Glomerular Filtration Rate)",
      "sigla": "GFR",
      "que": "Amount of blood filtered by the kidneys per minute. Main measure of kidney function.",
      "bajo": "<60: chronic kidney disease · <30: severe.",
      "alto": "Normal.",
      "unidad": "ml/min",
      "ref": ">60"
     },
     {
      "nombre": "Urea (BUN)",
      "sigla": "BUN",
      "que": "Protein waste eliminated by the kidneys.",
      "bajo": "Normal.",
      "alto": "Kidney problem or dehydration.",
      "unidad": "mg/dL",
      "ref": "10–50"
     },
     {
      "nombre": "Troponin",
      "sigla": "TnI",
      "que": "Protein released when heart muscle is damaged. Marker of heart attack.",
      "bajo": "Normal.",
      "alto": "Possible heart attack or cardiac damage — medical emergency.",
      "unidad": "ng/L",
      "ref": "<14"
     },
     {
      "nombre": "NT-ProBNP / BNP",
      "sigla": "BNP",
      "que": "Hormone produced when the heart is overworked. Indicates heart failure.",
      "bajo": "Normal.",
      "alto": "Heart is under stress.",
      "unidad": "pg/mL",
      "ref": "<125"
     },
     {
      "nombre": "Sodium",
      "sigla": "Na",
      "que": "Mineral regulating water in the body and blood pressure.",
      "bajo": "Confusion, seizures.",
      "alto": "Dehydration.",
      "unidad": "mmol/L",
      "ref": "134–145"
     },
     {
      "nombre": "Potassium",
      "sigla": "K",
      "que": "Essential mineral for the heart and muscles.",
      "bajo": "Muscle weakness, arrhythmias.",
      "alto": "Cardiac arrhythmias.",
      "unidad": "mmol/L",
      "ref": "3.5–5"
     },
     {
      "nombre": "Uric Acid",
      "sigla": "UA",
      "que": "Waste product from the breakdown of purines (present in meats, seafood and alcohol). Eliminated by the kidney.",
      "bajo": "Not significant on its own.",
      "alto": "Risk of gout (painful crystals in joints) and kidney stones.",
      "unidad": "mg/dL",
      "ref": "3.5–7.2"
     },
     {
      "nombre": "CPK (Creatine Phosphokinase)",
      "sigla": "CPK",
      "que": "Enzyme present in muscles, including the heart. Released into the blood when muscle tissue is damaged.",
      "bajo": "Not significant.",
      "alto": "Suggests muscle damage — intense exercise, heart attack, or a side effect of certain medications such as statins.",
      "unidad": "U/L",
      "ref": "30–200"
     }
    ]
   },
   {
    "nombre": "🧈 Cholesterol and Fats",
    "params": [
     {
      "nombre": "Total Cholesterol",
      "sigla": "CHOL",
      "que": "Total blood fat. Includes 'good' (HDL) and 'bad' (LDL).",
      "bajo": "Normal.",
      "alto": "Increased cardiovascular risk.",
      "unidad": "mg/dL",
      "ref": "<200 ideal"
     },
     {
      "nombre": "LDL (bad cholesterol)",
      "sigla": "LDL",
      "que": "Cholesterol that deposits in arteries and blocks them.",
      "bajo": "Normal.",
      "alto": "Risk of heart attack and stroke. Target: <116 mg/dL.",
      "unidad": "mg/dL",
      "ref": "<116"
     },
     {
      "nombre": "HDL (good cholesterol)",
      "sigla": "HDL",
      "que": "Protective cholesterol that cleans arteries.",
      "bajo": "Increased cardiovascular risk.",
      "alto": "Protective.",
      "unidad": "mg/dL",
      "ref": "40–65"
     },
     {
      "nombre": "Triglycerides",
      "sigla": "TG",
      "que": "Reserve fats in the blood. Rise with diet, alcohol and diabetes.",
      "bajo": "Normal.",
      "alto": "Cardiovascular and pancreatic risk.",
      "unidad": "mg/dL",
      "ref": "50–165"
     },
     {
      "nombre": "Non-HDL Cholesterol",
      "sigla": "noHDL",
      "que": "All the bad cholesterol together — total minus HDL. Includes LDL and other particles also capable of damaging the arteries.",
      "bajo": "Normal.",
      "alto": "Cardiovascular risk — considered by some doctors more complete than LDL alone, especially if triglycerides are high.",
      "unidad": "mg/dL",
      "ref": "<130"
     }
    ]
   },
   {
    "nombre": "🔥 Inflammation",
    "params": [
     {
      "nombre": "CRP (C-Reactive Protein)",
      "sigla": "CRP",
      "que": "Marker of active inflammation or infection in the body.",
      "bajo": "Normal.",
      "alto": "Infection, inflammation or autoimmune disease.",
      "unidad": "mg/L",
      "ref": "<10"
     },
     {
      "nombre": "Fibrinogen",
      "sigla": "Fib",
      "que": "Clotting protein that also rises with inflammation.",
      "bajo": "Haemorrhage risk.",
      "alto": "Inflammation or thrombosis.",
      "unidad": "mg/dL",
      "ref": "200–400"
     },
     {
      "nombre": "LDH (Lactate Dehydrogenase)",
      "sigla": "LDH",
      "que": "Enzyme present in almost every tissue of the body. Released into the blood whenever there is cell damage or destruction, whatever the cause.",
      "bajo": "Not significant.",
      "alto": "Very non-specific — can result from muscle damage, liver damage, haemolysis (red cell destruction), or some tumours. Needs interpreting alongside other tests.",
      "unidad": "U/L",
      "ref": "140–280"
     }
    ]
   },
   {
    "nombre": "🌡️ Vitamins and Hormones",
    "params": [
     {
      "nombre": "Vitamin D (Calcidiol)",
      "sigla": "VitD",
      "que": "Essential vitamin for bones, immune system and brain. Obtained from sunlight.",
      "bajo": "<30: deficient · <20: severely deficient. Risk of falls, cognitive decline, depression.",
      "alto": "Rare. Only with very high-dose supplements.",
      "unidad": "ng/mL",
      "ref": "30–100"
     },
     {
      "nombre": "Vitamin B12",
      "sigla": "B12",
      "que": "Essential vitamin for the nervous system and red blood cell formation.",
      "bajo": "Anaemia, tingling, neurological problems.",
      "alto": "Generally no consequences.",
      "unidad": "pg/mL",
      "ref": "180–914"
     },
     {
      "nombre": "Folic Acid",
      "sigla": "Fol",
      "que": "Vitamin B9: essential for cell formation and the nervous system.",
      "bajo": "Anaemia, neurological problems.",
      "alto": "No consequences.",
      "unidad": "ng/mL",
      "ref": "4–16"
     },
     {
      "nombre": "TSH (Thyroid Stimulating Hormone)",
      "sigla": "TSH",
      "que": "Hormone controlling the thyroid. Indicates whether the thyroid is working well.",
      "bajo": "Hyperthyroidism: palpitations, weight loss.",
      "alto": "Hypothyroidism: fatigue, feeling cold, weight gain.",
      "unidad": "mUI/L",
      "ref": "0.38–5.33"
     },
     {
      "nombre": "Ferritin",
      "sigla": "Fer",
      "que": "Iron store in the body.",
      "bajo": "Iron deficiency — anaemia.",
      "alto": "Inflammation or iron overload.",
      "unidad": "ng/mL",
      "ref": "20–300"
     },
     {
      "nombre": "Serum Iron",
      "sigla": "Fe",
      "que": "Iron circulating in the blood right now — unlike ferritin, which reflects reserves, this value changes a lot during the day and with the last meal.",
      "bajo": "Suggests iron deficiency, best confirmed with ferritin.",
      "alto": "Can be due to recent iron supplements or, more rarely, iron overload.",
      "unidad": "µg/dL",
      "ref": "60–170"
     },
     {
      "nombre": "Free T4",
      "sigla": "T4L",
      "que": "The active thyroid hormone, circulating free in the blood (not bound to carrier proteins). Always interpreted alongside TSH.",
      "bajo": "Hypothyroidism — especially if TSH is high.",
      "alto": "Hyperthyroidism — especially if TSH is low.",
      "unidad": "ng/dL",
      "ref": "0.8–1.8"
     }
    ]
   },
   {
    "nombre": "🫀 Liver",
    "params": [
     {
      "nombre": "ALT / GPT",
      "sigla": "GPT",
      "que": "Liver enzyme. Indicates damage to liver cells.",
      "bajo": "Normal.",
      "alto": "Liver inflammation (hepatitis, drugs, alcohol).",
      "unidad": "UI/L",
      "ref": "10–37"
     },
     {
      "nombre": "GGT",
      "sigla": "GGT",
      "que": "Enzyme that rises with alcohol, certain drugs or liver disease.",
      "bajo": "Normal.",
      "alto": "Alcohol, hepatotoxic medications.",
      "unidad": "UI/L",
      "ref": "7–50"
     },
     {
      "nombre": "Alkaline Phosphatase",
      "sigla": "ALP",
      "que": "Liver and bone enzyme.",
      "bajo": "Normal.",
      "alto": "Liver or bone disease.",
      "unidad": "UI/L",
      "ref": "40–145"
     },
     {
      "nombre": "Albumin",
      "sigla": "Alb",
      "que": "Main blood protein made by the liver. Indicates nutritional status.",
      "bajo": "Malnutrition or severe liver disease.",
      "alto": "Normal.",
      "unidad": "g/dL",
      "ref": "3.5–5.2"
     },
     {
      "nombre": "INR",
      "sigla": "INR",
      "que": "Measures blood clotting. Important in patients on anticoagulants.",
      "bajo": "Blood clots too quickly.",
      "alto": "Haemorrhage risk — blood too thin.",
      "unidad": "",
      "ref": "0.85–1.25"
     },
     {
      "nombre": "Bilirubin",
      "sigla": "Bili",
      "que": "Waste product from the breakdown of old red blood cells, processed by the liver and eliminated in bile. It is what gives jaundice its yellow colour.",
      "bajo": "Not significant.",
      "alto": "Can indicate bile duct obstruction, liver disease, or accelerated red blood cell destruction (haemolysis).",
      "unidad": "mg/dL",
      "ref": "0.2–1.2"
     },
     {
      "nombre": "AST / GOT",
      "sigla": "AST",
      "que": "Enzyme present in the liver, but also in the heart and muscles — less liver-specific than ALT.",
      "bajo": "Not significant.",
      "alto": "Suggests liver damage, though it can also result from muscle or heart damage — interpreted alongside ALT to help pinpoint the origin.",
      "unidad": "U/L",
      "ref": "5–40"
     },
     {
      "nombre": "Total Protein",
      "sigla": "PT",
      "que": "The sum of all proteins in the blood, mainly albumin and globulins (the latter include antibodies).",
      "bajo": "Can reflect malnutrition, liver disease, or protein loss.",
      "alto": "Can be due to dehydration or excess globulins, as in some chronic inflammatory diseases.",
      "unidad": "g/dL",
      "ref": "6.4–8.3"
     }
    ]
   },
   {
    "nombre": "🧪 Electrolytes",
    "params": [
     {
      "nombre": "Bicarbonate",
      "sigla": "HCO3",
      "que": "The main regulator of blood acid-base balance, made and adjusted jointly by the kidneys and lungs.",
      "bajo": "Suggests acidosis — the body is too acidic, for example in poorly controlled diabetes or kidney disease.",
      "alto": "Suggests alkalosis — often due to prolonged vomiting or certain diuretics.",
      "unidad": "mmol/L",
      "ref": "22–29"
     },
     {
      "nombre": "Calcium",
      "sigla": "Ca",
      "que": "Mineral essential for bones, but also for muscle contraction (including the heart) and blood clotting.",
      "bajo": "Can cause tingling, cramps and, in severe cases, heart rhythm disturbances.",
      "alto": "Can cause tiredness, constipation and kidney stones — often related to the parathyroid glands or certain tumours.",
      "unidad": "mg/dL",
      "ref": "8.5–10.5"
     },
     {
      "nombre": "Chloride",
      "sigla": "Cl",
      "que": "Electrolyte that closely tracks sodium, helping to maintain fluid balance and acid-base balance.",
      "bajo": "Usually accompanies sodium loss — vomiting, diarrhoea, certain diuretics.",
      "alto": "Usually accompanies dehydration.",
      "unidad": "mmol/L",
      "ref": "98–107"
     },
     {
      "nombre": "Phosphorus",
      "sigla": "P",
      "que": "Mineral working closely with calcium, essential for bones and cell energy.",
      "bajo": "Uncommon — can result from malnutrition or excess antacids.",
      "alto": "Common in chronic kidney disease, since the damaged kidney no longer eliminates it well.",
      "unidad": "mg/dL",
      "ref": "2.5–4.5"
     },
     {
      "nombre": "Magnesium",
      "sigla": "Mg",
      "que": "Mineral involved in hundreds of reactions in the body, including muscle and nerve function and heart rhythm.",
      "bajo": "Can cause cramps, tremors and arrhythmias — common with chronic diarrhoea, alcoholism, or certain diuretics.",
      "alto": "Uncommon — almost always related to advanced kidney disease.",
      "unidad": "mg/dL",
      "ref": "1.7–2.2"
     }
    ]
   },
   {
    "nombre": "🩹 Coagulation",
    "params": [
     {
      "nombre": "Prothrombin Activity",
      "sigla": "PT-act",
      "que": "Measures what percentage of normal clotting capacity the blood has, compared to a reference value. It is another way of expressing what INR measures, in reverse.",
      "bajo": "Poorly clotting blood — bleeding risk.",
      "alto": "Blood clotting faster than normal.",
      "unidad": "%",
      "ref": "70–120"
     },
     {
      "nombre": "Prothrombin Time",
      "sigla": "PT",
      "que": "Measures how many seconds blood takes to clot via the extrinsic clotting pathway — the basis from which both INR and prothrombin activity are calculated.",
      "bajo": "Not significant on its own.",
      "alto": "Blood taking longer to clot — bleeding risk, or the expected effect of an anticoagulant such as warfarin.",
      "unidad": "sec",
      "ref": "11–13.5"
     },
     {
      "nombre": "APTT (Activated Partial Thromboplastin Time)",
      "sigla": "APTT",
      "que": "Measures clotting time via the intrinsic pathway, complementary to what prothrombin time measures — together they explore the two main clotting routes.",
      "bajo": "Not significant on its own.",
      "alto": "Blood taking longer to clot via this pathway — can be due to certain anticoagulants (heparin) or specific clotting factor deficiencies.",
      "unidad": "sec",
      "ref": "25–35"
     },
     {
      "nombre": "D-dimer",
      "sigla": "DD",
      "que": "Fragment released when the body breaks down a clot. Mainly used to RULE OUT thrombosis: if normal, there almost certainly isn't one.",
      "bajo": "Normal — makes thrombosis or embolism unlikely.",
      "alto": "There may be a clot, but it also rises with age, infection, recent surgery or pregnancy. A high value alone is not a diagnosis."
     }
    ]
   },
   {
    "nombre": "🧪 Urine Analysis",
    "params": [
     {
      "nombre": "Nitrites",
      "sigla": "NIT",
      "que": "Produced by certain bacteria that break down urinary nitrates. Their presence suggests a bacterial urinary infection.",
      "bajo": "Normal — no nitrite-producing bacteria.",
      "alto": "Suggests bacterial urinary infection — often together with raised leucocytes.",
      "unidad": "",
      "ref": "Negative"
     },
     {
      "nombre": "Urine leucocytes",
      "sigla": "LEU-O",
      "que": "White blood cells present in urine, a sign of inflammation or infection of the urinary tract.",
      "bajo": "Normal.",
      "alto": "Suggests urinary infection or inflammation — often together with positive nitrites.",
      "unidad": "",
      "ref": "Negative or trace"
     },
     {
      "nombre": "Urine specific gravity",
      "sigla": "DENS",
      "que": "Measures how concentrated urine is — how many dissolved substances it contains relative to water.",
      "bajo": "Very dilute urine — excess fluids or kidney unable to concentrate.",
      "alto": "Very concentrated urine — dehydration.",
      "unidad": "",
      "ref": "1.005–1.030"
     },
     {
      "nombre": "Urine pH",
      "sigla": "pH-O",
      "que": "Measures how acidic or alkaline urine is, influenced by diet, certain medications, and some infections.",
      "bajo": "Acidic urine — high-protein diet, fasting, certain drugs.",
      "alto": "Alkaline urine — vegetarian diet, some urinary infections.",
      "unidad": "",
      "ref": "4.5–8.0"
     },
     {
      "nombre": "Urine protein",
      "sigla": "PROT-O",
      "que": "Normally the kidneys keep protein in the blood. Its presence in urine suggests the kidney's filter is damaged.",
      "bajo": "Normal — no protein or trace amounts.",
      "alto": "Suggests kidney damage — needs follow-up if persistent.",
      "unidad": "",
      "ref": "Negative or trace"
     },
     {
      "nombre": "Urine glucose",
      "sigla": "GLU-O",
      "que": "Normally all glucose filtered by the kidney is reabsorbed. It appears in urine when blood glucose exceeds a certain threshold.",
      "bajo": "Normal.",
      "alto": "Suggests poorly controlled diabetes — blood glucose exceeds kidney reabsorption capacity.",
      "unidad": "",
      "ref": "Negative"
     }
    ]
   }
  ]
 }
};
