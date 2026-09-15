/* ══════════════════════════════════════════════════════════════════════
   EL CIMA — nomenclator oficial espanol (AEMPS)
   /Salufolio/medicamentos/cima.js

   El codigo ATC es la clave universal: B01AF01 es el rivaroxaban en todo
   el mundo. Con el, un nombre comercial espanol se cruza con el thesaurus
   frances sin necesidad de correspondencias artesanales.

   Solo los medicamentos de los expedientes: el nomenclator entero son
   26707 lineas, y un programa debe abrirse en un segundo.
   ══════════════════════════════════════════════════════════════════════ */
var SF_CIMA = window.SF_CIMA = {
 "_fuente": "CIMA — Centro de Informacion de Medicamentos, AEMPS (Espana).\nNomenclator oficial: 26707 medicamentos autorizados, con su codigo ATC y sus\nprincipios activos. Aqui solo los que aparecen en los expedientes: una tabla\nde 26000 lineas no cabe en un programa que debe abrirse en un segundo.\n\nEl codigo ATC es la clave universal: B01AF01 es el rivaroxaban en todo el mundo.\nSustituye a las correspondencias artesanales entre nombres franceses y espanoles.",
 "version": "CIMA-2026.09",
 "marcas": {
  "aerius": {
   "nombre": "Aerius",
   "atc": "R06AX27",
   "principios": "DESLORATADINA",
   "estado": "Autorizado"
  },
  "celebrex": {
   "nombre": "Celebrex",
   "atc": "M01AH01",
   "principios": "CELECOXIB",
   "estado": "Autorizado"
  },
  "xarelto": {
   "nombre": "Xarelto",
   "atc": "B01AF01",
   "principios": "RIVAROXABAN",
   "estado": "Autorizado"
  },
  "aricept": {
   "nombre": "Aricept",
   "atc": "N06DA02",
   "principios": "DONEPEZILO HIDROCLORURO",
   "estado": "Autorizado"
  },
  "celecrem": {
   "nombre": "Celecrem",
   "atc": "D07AC01",
   "principios": "BETAMETASONA",
   "estado": "Autorizado"
  },
  "haloperidol": {
   "nombre": "Haloperidol",
   "atc": "N05AD01",
   "principios": "HALOPERIDOL",
   "estado": "Autorizado"
  },
  "seretide": {
   "nombre": "Seretide",
   "atc": "R03AK06",
   "principios": "FLUTICASONA PROPIONATO, SALMETEROL XINAFOATO",
   "estado": "Autorizado"
  },
  "anaclosil": {
   "nombre": "Anaclosil",
   "atc": "J01CF02",
   "principios": "CLOXACILINA SODICA",
   "estado": "Autorizado"
  },
  "amoxicilina": {
   "nombre": "Amoxicilina",
   "atc": "J01CA04",
   "principios": "AMOXICILINA TRIHIDRATO",
   "estado": "Autorizado"
  },
  "gelocatil": {
   "nombre": "Gelocatil",
   "atc": "N02BE51",
   "principios": "PARACETAMOL, PSEUDOEFEDRINA HIDROCLORURO, CLORFENAMINA MALEATO",
   "estado": "Autorizado"
  },
  "almax": {
   "nombre": "Almax",
   "atc": "A02AD03",
   "principios": "ALMAGATO",
   "estado": "Autorizado"
  },
  "diazepam": {
   "nombre": "Diazepam",
   "atc": "N05BA01",
   "principios": "DIAZEPAM",
   "estado": "Autorizado"
  },
  "nolotil": {
   "nombre": "Nolotil",
   "atc": "N02BB02",
   "principios": "METAMIZOL MAGNESICO",
   "estado": "Autorizado"
  },
  "ibuprofeno": {
   "nombre": "Ibuprofeno",
   "atc": "C01EB16",
   "principios": "IBUPROFENO",
   "estado": "Autorizado"
  },
  "serc": {
   "nombre": "Serc",
   "atc": "N07CA01",
   "principios": "BETAHISTINA DIHIDROCLORURO",
   "estado": "Anulado"
  },
  "dolocatil": {
   "nombre": "Dolocatil",
   "atc": "N02BE01",
   "principios": "PARACETAMOL",
   "estado": "Anulado"
  },
  "clexane": {
   "nombre": "Clexane",
   "atc": "B01AB05",
   "principios": "ENOXAPARINA SODICA",
   "estado": "Autorizado"
  },
  "ciprofloxacino": {
   "nombre": "Ciprofloxacino",
   "atc": "J01MA02",
   "principios": "CIPROFLOXACINO",
   "estado": "Anulado"
  },
  "urbason": {
   "nombre": "Urbason",
   "atc": "H02AB04",
   "principios": "METILPREDNISOLONA",
   "estado": "Autorizado"
  },
  "furosemida": {
   "nombre": "Furosemida",
   "atc": "C03CA01",
   "principios": "FUROSEMIDA",
   "estado": "Anulado"
  },
  "simvastatina": {
   "nombre": "Simvastatina",
   "atc": "C10AA01",
   "principios": "SIMVASTATINA",
   "estado": "Autorizado"
  },
  "alprazolam": {
   "nombre": "Alprazolam",
   "atc": "N05BA12",
   "principios": "ALPRAZOLAM",
   "estado": "Autorizado"
  },
  "adiro": {
   "nombre": "Adiro",
   "atc": "B01AC06",
   "principios": "ACETILSALICILICO ACIDO",
   "estado": "Autorizado"
  },
  "paracetamol": {
   "nombre": "Paracetamol",
   "atc": "N02BE01",
   "principios": "PARACETAMOL",
   "estado": "Autorizado"
  },
  "acetilcisteina": {
   "nombre": "Acetilcisteina",
   "atc": "R05CB01",
   "principios": "ACETILCISTEINA",
   "estado": "Autorizado"
  },
  "omeprazol": {
   "nombre": "Omeprazol",
   "atc": "A02BC01",
   "principios": "OMEPRAZOL",
   "estado": "Anulado"
  },
  "enalapril": {
   "nombre": "Enalapril",
   "atc": "C09AA02",
   "principios": "ENALAPRIL MALEATO",
   "estado": "Autorizado"
  },
  "losartan": {
   "nombre": "Losartan",
   "atc": "C09CA01",
   "principios": "LOSARTAN POTASICO",
   "estado": "Autorizado"
  },
  "paroxetina": {
   "nombre": "Paroxetina",
   "atc": "N06AB05",
   "principios": "PAROXETINA  HIDROCLORURO",
   "estado": "Autorizado"
  },
  "claritromicina": {
   "nombre": "Claritromicina",
   "atc": "J01FA09",
   "principios": "CLARITROMICINA",
   "estado": "Anulado"
  },
  "donepezilo": {
   "nombre": "Donepezilo",
   "atc": "N06DA02",
   "principios": "DONEPEZILO HIDROCLORURO",
   "estado": "Autorizado"
  },
  "espidifen": {
   "nombre": "Espidifen",
   "atc": "M01AE01",
   "principios": "IBUPROFENO ARGININA",
   "estado": "Autorizado"
  },
  "zinnat": {
   "nombre": "Zinnat",
   "atc": "J01DC02",
   "principios": "CEFUROXIMA AXETILO",
   "estado": "Autorizado"
  },
  "diclofenaco": {
   "nombre": "Diclofenaco",
   "atc": "M01AB05",
   "principios": "DICLOFENACO SODICO",
   "estado": "Autorizado"
  },
  "emuliquen": {
   "nombre": "Emuliquen",
   "atc": "A06AA01",
   "principios": "PARAFINA LIQUIDA",
   "estado": "Autorizado"
  },
  "ceftriaxona": {
   "nombre": "Ceftriaxona",
   "atc": "J01DD04",
   "principios": "CEFTRIAXONA SODICA",
   "estado": "Autorizado"
  },
  "lexxema": {
   "nombre": "Lexxema",
   "atc": "D07AC14",
   "principios": "METILPREDNISOLONA ACEPONATO",
   "estado": "Autorizado"
  },
  "ebastel": {
   "nombre": "Ebastel",
   "atc": "R06AX22",
   "principios": "EBASTINA",
   "estado": "Autorizado"
  },
  "budesonida": {
   "nombre": "Budesonida",
   "atc": "R03BA02",
   "principios": "BUDESONIDA",
   "estado": "Autorizado"
  },
  "pantoprazol": {
   "nombre": "Pantoprazol",
   "atc": "A02BC02",
   "principios": "PANTOPRAZOL SODICO SESQUIHIDRATO",
   "estado": "Autorizado"
  },
  "cefuroxima": {
   "nombre": "Cefuroxima",
   "atc": "S01AA27",
   "principios": "CEFUROXIMA SODICA",
   "estado": "Anulado"
  },
  "levofloxacino": {
   "nombre": "Levofloxacino",
   "atc": "J01MA12",
   "principios": "LEVOFLOXACINO HEMIHIDRATO",
   "estado": "Autorizado"
  },
  "rivaroxaban": {
   "nombre": "Rivaroxaban",
   "atc": "B01AF01",
   "principios": "RIVAROXABAN",
   "estado": "Autorizado"
  },
  "voltadol": {
   "nombre": "Voltadol",
   "atc": "M02AA15",
   "principios": "DICLOFENACO DIETILAMINA",
   "estado": "Autorizado"
  },
  "azitromicina": {
   "nombre": "Azitromicina",
   "atc": "J01FA10",
   "principios": "AZITROMICINA DIHIDRATO",
   "estado": "Autorizado"
  },
  "monurol": {
   "nombre": "Monurol",
   "atc": "J01XX01",
   "principios": "FOSFOMICINA TROMETAMOL",
   "estado": "Autorizado"
  },
  "prednisona": {
   "nombre": "Prednisona",
   "atc": "H02AB07",
   "principios": "PREDNISONA",
   "estado": "Autorizado"
  },
  "metamizol": {
   "nombre": "Metamizol",
   "atc": "N02BB02",
   "principios": "METAMIZOL MAGNESICO",
   "estado": "Autorizado"
  },
  "lorazepam": {
   "nombre": "Lorazepam",
   "atc": "N05BA06",
   "principios": "LORAZEPAM",
   "estado": "Autorizado"
  },
  "enoxaparina": {
   "nombre": "Enoxaparina",
   "atc": "B01AB05",
   "principios": "ENOXAPARINA SODICA",
   "estado": "Autorizado"
  },
  "augmentine": {
   "nombre": "Augmentine",
   "atc": "J01CR02",
   "principios": "AMOXICILINA TRIHIDRATO, CLAVULANATO POTASIO",
   "estado": "Autorizado"
  },
  "dexketoprofeno": {
   "nombre": "Dexketoprofeno",
   "atc": "M01AE17",
   "principios": "DEXKETOPROFENO TROMETAMOL",
   "estado": "Autorizado"
  },
  "lixben": {
   "nombre": "Lixben",
   "atc": "N06DA02",
   "principios": "DONEPEZILO HIDROCLORURO",
   "estado": "Autorizado"
  },
  "salbutamol": {
   "nombre": "Salbutamol",
   "atc": "R03AC02",
   "principios": "SALBUTAMOL SULFATO",
   "estado": "Autorizado"
  },
  "voltaren": {
   "nombre": "Voltaren",
   "atc": "S01BC03",
   "principios": "DICLOFENACO SODICO",
   "estado": "Autorizado"
  },
  "fluoxetina": {
   "nombre": "Fluoxetina",
   "atc": "N06AB03",
   "principios": "FLUOXETINA HIDROCLORURO",
   "estado": "Anulado"
  },
  "calcifediol": {
   "nombre": "Calcifediol",
   "atc": "A11CC06",
   "principios": "CALCIFEDIOL MONOHIDRATO",
   "estado": "Autorizado"
  },
  "colircusi": {
   "nombre": "Colircusi",
   "atc": "S01EB01",
   "principios": "PILOCARPINA HIDROCLORURO",
   "estado": "Autorizado"
  },
  "daflon": {
   "nombre": "Daflon",
   "atc": "C05CA53",
   "principios": "DIOSMINA, HESPERIDINA",
   "estado": "Autorizado"
  },
  "atarax": {
   "nombre": "Atarax",
   "atc": "N05BB01",
   "principios": "HIDROXIZINA DIHIDROCLORURO",
   "estado": "Autorizado"
  },
  "dogmatil": {
   "nombre": "Dogmatil",
   "atc": "N05AL01",
   "principios": "SULPIRIDA",
   "estado": "Autorizado"
  },
  "atrovent": {
   "nombre": "Atrovent",
   "atc": "R03BB01",
   "principios": "IPRATROPIO BROMURO",
   "estado": "Autorizado"
  },
  "ventolin": {
   "nombre": "Ventolin",
   "atc": "R03AC02",
   "principios": "SALBUTAMOL SULFATO",
   "estado": "Autorizado"
  },
  "trankimazin": {
   "nombre": "Trankimazin",
   "atc": "N05BA12",
   "principios": "ALPRAZOLAM",
   "estado": "Autorizado"
  },
  "mucosan": {
   "nombre": "Mucosan",
   "atc": "R05CB06",
   "principios": "AMBROXOL HIDROCLORURO",
   "estado": "Anulado"
  },
  "colirofta": {
   "nombre": "Colirofta",
   "atc": "S01FA04",
   "principios": "CICLOPENTOLATO HIDROCLORURO",
   "estado": "Autorizado"
  },
  "dacortin": {
   "nombre": "Dacortin",
   "atc": "H02AB07",
   "principios": "PREDNISONA",
   "estado": "Autorizado"
  },
  "actocortina": {
   "nombre": "Actocortina",
   "atc": "H02AB09",
   "principios": "HIDROCORTISONA FOSFATO SODIO",
   "estado": "Autorizado"
  },
  "plantaben": {
   "nombre": "Plantaben",
   "atc": "A06AC01",
   "principios": "PLANTAGO OVATA FORSKK. CASCARA",
   "estado": "Autorizado"
  },
  "idaptan": {
   "nombre": "Idaptan",
   "atc": "C01EB15",
   "principios": "TRIMETAZIDINA DIHIDROCLORURO",
   "estado": "Autorizado"
  },
  "pulmicort": {
   "nombre": "Pulmicort",
   "atc": "R03BA02",
   "principios": "BUDESONIDA",
   "estado": "Autorizado"
  },
  "metronidazol": {
   "nombre": "Metronidazol",
   "atc": "J01XD01",
   "principios": "METRONIDAZOL",
   "estado": "Autorizado"
  },
  "clovate": {
   "nombre": "Clovate",
   "atc": "D07AD01",
   "principios": "CLOBETASOL PROPIONATO",
   "estado": "Autorizado"
  },
  "metilprednisolona": {
   "nombre": "Metilprednisolona",
   "atc": "D07AC14",
   "principios": "METILPREDNISOLONA ACEPONATO",
   "estado": "Autorizado"
  },
  "symbicort": {
   "nombre": "Symbicort",
   "atc": "R03AK07",
   "principios": "BUDESONIDA, FORMOTEROL FUMARATO DIHIDRATO",
   "estado": "Autorizado"
  },
  "arcoxia": {
   "nombre": "Arcoxia",
   "atc": "M01AH05",
   "principios": "ETORICOXIB",
   "estado": "Autorizado"
  },
  "xumadol": {
   "nombre": "Xumadol",
   "atc": "N02BE01",
   "principios": "PARACETAMOL",
   "estado": "Autorizado"
  },
  "fastum": {
   "nombre": "Fastum",
   "atc": "M01AE03",
   "principios": "KETOPROFENO",
   "estado": "Autorizado"
  },
  "fluidasa": {
   "nombre": "Fluidasa",
   "atc": "R03DA12",
   "principios": "MEPIFILINA",
   "estado": "Autorizado"
  },
  "hidroferol": {
   "nombre": "Hidroferol",
   "atc": "A11CC06",
   "principios": "CALCIFEDIOL",
   "estado": "Autorizado"
  },
  "flutox": {
   "nombre": "Flutox",
   "atc": "R05DB21",
   "principios": "CLOPERASTINA FENDIZOATO",
   "estado": "Autorizado"
  },
  "fucidine": {
   "nombre": "Fucidine",
   "atc": "D07CA01",
   "principios": "FUSIDICO ACIDO, HIDROCORTISONA ACETATO",
   "estado": "Autorizado"
  },
  "vigamox": {
   "nombre": "Vigamox",
   "atc": "S01AE07",
   "principios": "MOXIFLOXACINO HIDROCLORURO",
   "estado": "Autorizado"
  },
  "unibenestan": {
   "nombre": "Unibenestan",
   "atc": "G04CA01",
   "principios": "ALFUZOSINA HIDROCLORURO",
   "estado": "Autorizado"
  },
  "actira": {
   "nombre": "Actira",
   "atc": "J01MA14",
   "principios": "MOXIFLOXACINO HIDROCLORURO",
   "estado": "Suspenso"
  },
  "spiriva": {
   "nombre": "Spiriva",
   "atc": "R03BB04",
   "principios": "TIOTROPIO BROMURO",
   "estado": "Autorizado"
  },
  "enantyum": {
   "nombre": "Enantyum",
   "atc": "M01AE17",
   "principios": "DEXKETOPROFENO TROMETAMOL",
   "estado": "Autorizado"
  },
  "polaramine": {
   "nombre": "Polaramine",
   "atc": "R06AB02",
   "principios": "DEXCLORFENIRAMINA MALEATO",
   "estado": "Autorizado"
  },
  "bimotil": {
   "nombre": "Bimotil",
   "atc": "A06AD65",
   "principios": "CLORURO DE POTASIO, SODIO BICARBONATO, SODIO CLORURO, MACROGOL 3350",
   "estado": "Autorizado"
  },
  "heparina": {
   "nombre": "Heparina",
   "atc": "B01AB01",
   "principios": "HEPARINA SODICA",
   "estado": "Autorizado"
  },
  "antalgin": {
   "nombre": "Antalgin",
   "atc": "M01AE02",
   "principios": "NAPROXENO SODICO",
   "estado": "Autorizado"
  },
  "permixon": {
   "nombre": "Permixon",
   "atc": "G04CX02",
   "principios": "SERENOA REPENS EXTRACTO LIPIDO ESTEROLICO",
   "estado": "Autorizado"
  },
  "sensedol": {
   "nombre": "Sensedol",
   "atc": "N01BX04",
   "principios": "CAPSAICINA",
   "estado": "Autorizado"
  },
  "hidroxil": {
   "nombre": "Hidroxil",
   "atc": "A11DB91",
   "principios": "PIRIDOXINA HIDROCLORURO, CIANOCOBALAMINA, TIAMINA HIDROCLORURO",
   "estado": "Autorizado"
  },
  "elocom": {
   "nombre": "Elocom",
   "atc": "D07AC13",
   "principios": "MOMETASONA FUROATO",
   "estado": "Autorizado"
  },
  "yurelax": {
   "nombre": "Yurelax",
   "atc": "M03BX08",
   "principios": "CICLOBENZAPRINA HIDROCLORURO",
   "estado": "Autorizado"
  },
  "efferalgan": {
   "nombre": "Efferalgan",
   "atc": "N02BE01",
   "principios": "PARACETAMOL",
   "estado": "Suspenso"
  },
  "deanxit": {
   "nombre": "Deanxit",
   "atc": "N06CA02",
   "principios": "FLUPENTIXOL DIHIDROCLORURO, MELITRACENO HIDROCLORURO",
   "estado": "Autorizado"
  },
  "adventan": {
   "nombre": "Adventan",
   "atc": "D07AC14",
   "principios": "METILPREDNISOLONA ACEPONATO",
   "estado": "Autorizado"
  },
  "seguril": {
   "nombre": "Seguril",
   "atc": "C03CA01",
   "principios": "FUROSEMIDA",
   "estado": "Autorizado"
  },
  "maxidex": {
   "nombre": "Maxidex",
   "atc": "S01BA01",
   "principios": "DEXAMETASONA",
   "estado": "Autorizado"
  },
  "orfidal": {
   "nombre": "Orfidal",
   "atc": "N05BA06",
   "principios": "LORAZEPAM",
   "estado": "Autorizado"
  },
  "plasimine": {
   "nombre": "Plasimine",
   "atc": "D06AX09",
   "principios": "MUPIROCINA",
   "estado": "Autorizado"
  },
  "protalon": {
   "nombre": "Protalon",
   "atc": "N06DX01",
   "principios": "MEMANTINA HIDROCLORURO",
   "estado": "Autorizado"
  },
  "elidel": {
   "nombre": "Elidel",
   "atc": "D11AH02",
   "principios": "PIMECROLIMUS",
   "estado": "Autorizado"
  },
  "doxiciclina": {
   "nombre": "Doxiciclina",
   "atc": "J01AA02",
   "principios": "DOXICICLINA HICLATO",
   "estado": "Autorizado"
  },
  "pectox": {
   "nombre": "Pectox",
   "atc": "R05CB03",
   "principios": "CARBOCISTEINA",
   "estado": "Autorizado"
  },
  "duodart": {
   "nombre": "Duodart",
   "atc": "G04CA52",
   "principios": "TAMSULOSINA HIDROCLORURO, DUTASTERIDA",
   "estado": "Anulado"
  },
  "brainal": {
   "nombre": "Brainal",
   "atc": "C08CA06",
   "principios": "NIMODIPINO",
   "estado": "Autorizado"
  },
  "agiolax": {
   "nombre": "Agiolax",
   "atc": "A06AC01",
   "principios": "PLANTAGO OVATA FORSKK. SEMILLA, CASSIA ANGUSTIFOLIA FRUTOS, PLANTAGO OVATA FORSKK. SEMILLA CUTICULA",
   "estado": "Autorizado"
  },
  "citorsal": {
   "nombre": "Citorsal",
   "atc": "A07CA91",
   "principios": "GLUCOSA MONOHIDRATO, SODIO CLORURO, SODIO FOSFATO, LACTATO CALCIO, MAGNESIO SULFATO, CITRATO SODIO, CITRICO ACIDO ANHIDRO, POTASIO CLORURO ANHIDRO",
   "estado": "Autorizado"
  },
  "naprosyn": {
   "nombre": "Naprosyn",
   "atc": "M01AE02",
   "principios": "NAPROXENO",
   "estado": "Autorizado"
  }
 },
 "atc": {
  "R06AX27": {
   "principios": "DESLORATADINA"
  },
  "M01AH01": {
   "principios": "CELECOXIB"
  },
  "B01AF01": {
   "principios": "RIVAROXABAN"
  },
  "N06DA02": {
   "principios": "DONEPEZILO HIDROCLORURO"
  },
  "D07AC01": {
   "principios": "BETAMETASONA"
  },
  "N05AD01": {
   "principios": "HALOPERIDOL"
  },
  "R03AK06": {
   "principios": "FLUTICASONA PROPIONATO, SALMETEROL XINAFOATO"
  },
  "J01CF02": {
   "principios": "CLOXACILINA SODICA"
  },
  "J01CA04": {
   "principios": "AMOXICILINA TRIHIDRATO"
  },
  "N02BE51": {
   "principios": "PARACETAMOL, PSEUDOEFEDRINA HIDROCLORURO, CLORFENAMINA MALEATO"
  },
  "A02AD03": {
   "principios": "ALMAGATO"
  },
  "N05BA01": {
   "principios": "DIAZEPAM"
  },
  "N02BB02": {
   "principios": "METAMIZOL MAGNESICO"
  },
  "C01EB16": {
   "principios": "IBUPROFENO"
  },
  "N07CA01": {
   "principios": "BETAHISTINA DIHIDROCLORURO"
  },
  "N02BE01": {
   "principios": "PARACETAMOL"
  },
  "B01AB05": {
   "principios": "ENOXAPARINA SODICA"
  },
  "J01MA02": {
   "principios": "CIPROFLOXACINO"
  },
  "H02AB04": {
   "principios": "METILPREDNISOLONA"
  },
  "C03CA01": {
   "principios": "FUROSEMIDA"
  },
  "C10AA01": {
   "principios": "SIMVASTATINA"
  },
  "S02AA15": {
   "principios": "CIPROFLOXACINO HIDROCLORURO"
  },
  "N05BA12": {
   "principios": "ALPRAZOLAM"
  },
  "B01AC06": {
   "principios": "ACETILSALICILICO ACIDO"
  },
  "J01CR02": {
   "principios": "AMOXICILINA SODICA, CLAVULANATO POTASIO"
  },
  "R05CB01": {
   "principios": "ACETILCISTEINA"
  },
  "A02BC01": {
   "principios": "OMEPRAZOL"
  },
  "C09AA02": {
   "principios": "ENALAPRIL MALEATO"
  },
  "C09CA01": {
   "principios": "LOSARTAN POTASICO"
  },
  "C09DA01": {
   "principios": "LOSARTAN POTASICO, HIDROCLOROTIAZIDA"
  },
  "N06AB05": {
   "principios": "PAROXETINA  HIDROCLORURO"
  },
  "J01FA09": {
   "principios": "CLARITROMICINA"
  },
  "M01AE01": {
   "principios": "IBUPROFENO ARGININA"
  },
  "J01DC02": {
   "principios": "CEFUROXIMA AXETILO"
  },
  "M01AB05": {
   "principios": "DICLOFENACO SODICO"
  },
  "A06AA01": {
   "principios": "PARAFINA LIQUIDA"
  },
  "J01DD04": {
   "principios": "CEFTRIAXONA SODICA"
  },
  "D07AC14": {
   "principios": "METILPREDNISOLONA ACEPONATO"
  },
  "R06AX22": {
   "principios": "EBASTINA"
  },
  "R03BA02": {
   "principios": "BUDESONIDA"
  },
  "A02BC02": {
   "principios": "PANTOPRAZOL SODICO SESQUIHIDRATO"
  },
  "S01AA27": {
   "principios": "CEFUROXIMA SODICA"
  },
  "C09BB02": {
   "principios": "LERCANIDIPINO HIDROCLORURO, ENALAPRIL MALEATO"
  },
  "J01MA12": {
   "principios": "LEVOFLOXACINO HEMIHIDRATO"
  },
  "M02AA15": {
   "principios": "DICLOFENACO DIETILAMINA"
  },
  "J01FA10": {
   "principios": "AZITROMICINA DIHIDRATO"
  },
  "C09BA02": {
   "principios": "HIDROCLOROTIAZIDA, ENALAPRIL MALEATO"
  },
  "J01XX01": {
   "principios": "FOSFOMICINA TROMETAMOL"
  },
  "H02AB07": {
   "principios": "PREDNISONA"
  },
  "N05BA06": {
   "principios": "LORAZEPAM"
  },
  "M01AE17": {
   "principios": "DEXKETOPROFENO TROMETAMOL"
  },
  "R05X_": {
   "principios": "IBUPROFENO, FENILEFRINA HIDROCLORURO"
  },
  "R03AC02": {
   "principios": "SALBUTAMOL SULFATO"
  },
  "S01BC03": {
   "principios": "DICLOFENACO SODICO"
  },
  "N06AB03": {
   "principios": "FLUOXETINA HIDROCLORURO"
  },
  "A11CC06": {
   "principios": "CALCIFEDIOL MONOHIDRATO"
  },
  "S01EB01": {
   "principios": "PILOCARPINA HIDROCLORURO"
  },
  "C05CA53": {
   "principios": "DIOSMINA, HESPERIDINA"
  },
  "N05BB01": {
   "principios": "HIDROXIZINA DIHIDROCLORURO"
  },
  "N05AL01": {
   "principios": "SULPIRIDA"
  },
  "R03BB01": {
   "principios": "IPRATROPIO BROMURO"
  },
  "R05CB06": {
   "principios": "AMBROXOL HIDROCLORURO"
  },
  "S01FA04": {
   "principios": "CICLOPENTOLATO HIDROCLORURO"
  },
  "H02AB09": {
   "principios": "HIDROCORTISONA FOSFATO SODIO"
  },
  "R01AD05": {
   "principios": "BUDESONIDA"
  },
  "A06AC01": {
   "principios": "PLANTAGO OVATA FORSKK. CASCARA"
  },
  "C01EB15": {
   "principios": "TRIMETAZIDINA DIHIDROCLORURO"
  },
  "J01XD01": {
   "principios": "METRONIDAZOL"
  },
  "D07AD01": {
   "principios": "CLOBETASOL PROPIONATO"
  },
  "P01AB01": {
   "principios": "METRONIDAZOL"
  },
  "D11AX18": {
   "principios": "DICLOFENACO SODICO"
  },
  "R03AK07": {
   "principios": "BUDESONIDA, FORMOTEROL FUMARATO DIHIDRATO"
  },
  "M01AH05": {
   "principios": "ETORICOXIB"
  },
  "A02BC": {
   "principios": "PANTOPRAZOL SODICO"
  },
  "S01HA30": {
   "principios": "NAFAZOLINA HIDROCLORURO, TETRACAINA HIDROCLORURO"
  },
  "S01FB01": {
   "principios": "FENILEFRINA HIDROCLORURO"
  },
  "M01AE03": {
   "principios": "KETOPROFENO"
  },
  "R03DA12": {
   "principios": "MEPIFILINA"
  },
  "R05DB21": {
   "principios": "CLOPERASTINA FENDIZOATO"
  },
  "A06AA51": {
   "principios": "PARAFINA LIQUIDA, PICOSULFATO SODIO"
  },
  "D07CA01": {
   "principios": "FUSIDICO ACIDO, HIDROCORTISONA ACETATO"
  },
  "S01AE07": {
   "principios": "MOXIFLOXACINO HIDROCLORURO"
  },
  "G04CA01": {
   "principios": "ALFUZOSINA HIDROCLORURO"
  },
  "J01MA14": {
   "principios": "MOXIFLOXACINO HIDROCLORURO"
  },
  "M02AA13": {
   "principios": "IBUPROFENO"
  },
  "R03BB04": {
   "principios": "TIOTROPIO BROMURO"
  },
  "R06AB02": {
   "principios": "DEXCLORFENIRAMINA MALEATO"
  },
  "A06AD65": {
   "principios": "CLORURO DE POTASIO, SODIO BICARBONATO, SODIO CLORURO, MACROGOL 3350"
  },
  "B01AB01": {
   "principios": "HEPARINA SODICA"
  },
  "S01XA03": {
   "principios": "SODIO CLORURO"
  },
  "S03CA01": {
   "principios": "GENTAMICINA SULFATO, TETRIZOLINA HIDROCLORURO, DEXAMETASONA FOSFATO SODIO"
  },
  "M01AE02": {
   "principios": "NAPROXENO SODICO"
  },
  "G04CX02": {
   "principios": "SERENOA REPENS EXTRACTO LIPIDO ESTEROLICO"
  },
  "N06DA52": {
   "principios": "DONEPEZILO HIDROCLORURO, MEMANTINA HIDROCLORURO"
  },
  "N01BX04": {
   "principios": "CAPSAICINA"
  },
  "A11DB91": {
   "principios": "PIRIDOXINA HIDROCLORURO, CIANOCOBALAMINA, TIAMINA HIDROCLORURO"
  },
  "D07AC13": {
   "principios": "MOMETASONA FUROATO"
  },
  "M03BX08": {
   "principios": "CICLOBENZAPRINA HIDROCLORURO"
  },
  "S01AA11": {
   "principios": "GENTAMICINA SULFATO"
  },
  "R05CZ93": {
   "principios": "AMOXICILINA TRIHIDRATO, BROMHEXINA HIDROCLORURO"
  },
  "S01BA01": {
   "principios": "DEXAMETASONA FOSFATO SODIO"
  },
  "N06CA02": {
   "principios": "FLUPENTIXOL DIHIDROCLORURO, MELITRACENO HIDROCLORURO"
  },
  "S01FA01": {
   "principios": "ATROPINA SULFATO"
  },
  "N02AJ06": {
   "principios": "PARACETAMOL, CODEINA FOSFATO"
  },
  "R01AX03": {
   "principios": "IPRATROPIO BROMURO"
  },
  "D06AX01": {
   "principios": "FUSIDICO ACIDO"
  },
  "D06BX01": {
   "principios": "METRONIDAZOL"
  },
  "R05X": {
   "principios": "IBUPROFENO, FENILEFRINA HIDROCLORURO"
  },
  "R03CC02": {
   "principios": "SALBUTAMOL"
  },
  "D06AX09": {
   "principios": "MUPIROCINA"
  },
  "S01FA06": {
   "principios": "TROPICAMIDA"
  },
  "J01RA04": {
   "principios": "ESPIRAMICINA, METRONIDAZOL"
  },
  "N06DX01": {
   "principios": "MEMANTINA HIDROCLORURO"
  },
  "D11AH02": {
   "principios": "PIMECROLIMUS"
  },
  "J01AA02": {
   "principios": "DOXICICLINA HICLATO"
  },
  "R05CB03": {
   "principios": "CARBOCISTEINA"
  },
  "G04CA52": {
   "principios": "TAMSULOSINA HIDROCLORURO, DUTASTERIDA"
  },
  "S01JA51": {
   "principios": "OXIBUPROCAINA HIDROCLORURO, FLUORESCEINA SODICA"
  },
  "C08CA06": {
   "principios": "NIMODIPINO"
  },
  "N02BB": {
   "principios": "METAMIZOL MAGNESICO"
  },
  "A07CA91": {
   "principios": "GLUCOSA MONOHIDRATO, SODIO CLORURO, SODIO FOSFATO, LACTATO CALCIO, MAGNESIO SULFATO, CITRATO SODIO, CITRICO ACIDO ANHIDRO, POTASIO CLORURO ANHIDRO"
  },
  "J01XC01": {
   "principios": "FUSIDATO SODIO"
  },
  "N02AJ08": {
   "principios": "CODEINA FOSFATO HEMIHIDRATO, IBUPROFENO"
  },
  "M02AA10": {
   "principios": "KETOPROFENO"
  },
  "C09CA": {
   "principios": "LOSARTAN POTASICO"
  }
 }
};
