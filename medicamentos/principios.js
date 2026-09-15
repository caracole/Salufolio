/* ══════════════════════════════════════════════════════════════════════
   LOS PRINCIPIOS ACTIVOS — comunes a TODOS los pacientes
   /Salufolio/Medicamentos/principios.js

   Xarelto y Rivaroxaban son el mismo tratamiento. El programa no puede
   adivinarlo: hace falta esta tabla. Crece con el uso — cuando un nombre
   no esta aqui, MF.principiosDesconocidos() lo senala.

   Construida (07/09/2026) con los medicamentos de Ana y de
   Pierre-Henri: mas de 240 nombres distintos, que son un centenar de
   tratamientos.
   ══════════════════════════════════════════════════════════════════════ */
var SF_PRINCIPIOS = window.SF_PRINCIPIOS = {
  "_doctrina": "LOS PRINCIPIOS ACTIVOS (P-H, 07/09/2026)\n\nXarelto y Rivaroxaban son el mismo tratamiento: uno es el nombre comercial, el otro el principio activo. El programa no puede adivinarlo — hace falta esta tabla.\n\nVive en /Salufolio/Medicamentos/ y NO en V2/comun/: sirve a TODOS los pacientes y sobrevivira a las versiones del programa. Los datos de un lado, el codigo del otro.\n\nCrece con el uso: cuando un nombre no esta aqui, el programa lo senala y usted lo anade.",
  "version": "2026.09.07-5",
  "_como": "clave = principio activo (normalizado) · valor = { nombre, comerciales[], grupo }",
  "principios": {
    "rivaroxaban": {
      "nombre": "Rivaroxabán",
      "comerciales": [
        "xarelto"
      ],
      "grupo": "anticoagulante",
      "categoria": "medicamento"
    },
    "donepezilo": {
      "nombre": "Donepezilo",
      "comerciales": [
        "aricept",
        "neuralex",
        "lixben",
        "protalon"
      ],
      "grupo": "alzheimer",
      "categoria": "medicamento"
    },
    "acido acetilsalicilico": {
      "nombre": "Ácido acetilsalicílico",
      "comerciales": [
        "adiro"
      ],
      "grupo": "antiagregante",
      "categoria": "medicamento"
    },
    "furosemida": {
      "nombre": "Furosemida",
      "comerciales": [
        "seguril"
      ],
      "grupo": "diurético",
      "categoria": "medicamento"
    },
    "metamizol": {
      "nombre": "Metamizol",
      "comerciales": [
        "nolotil",
        "xumadol",
        "metamizol normon"
      ],
      "grupo": "analgésico",
      "categoria": "medicamento"
    },
    "cefuroxima": {
      "nombre": "Cefuroxima",
      "comerciales": [
        "zinnat"
      ],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "amoxicilina clavulanico": {
      "nombre": "Amoxicilina + Clavulánico",
      "comerciales": [
        "augmentine"
      ],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "bromuro de tiotropio": {
      "nombre": "Bromuro de tiotropio",
      "comerciales": [
        "spiriva"
      ],
      "grupo": "broncodilatador",
      "categoria": "medicamento"
    },
    "bromuro de ipratropio": {
      "nombre": "Bromuro de ipratropio",
      "comerciales": [
        "atrovent"
      ],
      "grupo": "broncodilatador",
      "categoria": "medicamento"
    },
    "salbutamol": {
      "nombre": "Salbutamol",
      "comerciales": [
        "ventolin",
        "ventolin 100mcg inhal"
      ],
      "grupo": "broncodilatador",
      "categoria": "medicamento"
    },
    "budesonida formoterol": {
      "nombre": "Budesonida + Formoterol",
      "comerciales": [
        "symbicort"
      ],
      "grupo": "broncodilatador",
      "categoria": "medicamento"
    },
    "fluticasona salmeterol": {
      "nombre": "Fluticasona + Salmeterol",
      "comerciales": [
        "seretide",
        "seretide accuhaler"
      ],
      "grupo": "broncodilatador",
      "categoria": "medicamento"
    },
    "budesonida": {
      "nombre": "Budesonida",
      "comerciales": [],
      "grupo": "corticoide inhalado",
      "categoria": "medicamento"
    },
    "calcifediol": {
      "nombre": "Calcifediol (vit. D)",
      "comerciales": [
        "hidroferol"
      ],
      "grupo": "vitamina",
      "categoria": "medicamento"
    },
    "metilprednisolona": {
      "nombre": "Metilprednisolona",
      "comerciales": [
        "urbason",
        "solu-moderin",
        "actocortina",
        "solumoderin"
      ],
      "grupo": "corticoide",
      "categoria": "medicamento"
    },
    "prednisona": {
      "nombre": "Prednisona",
      "comerciales": [
        "dacortin"
      ],
      "grupo": "corticoide",
      "categoria": "medicamento"
    },
    "pantoprazol": {
      "nombre": "Pantoprazol",
      "comerciales": [],
      "grupo": "protector gástrico",
      "categoria": "medicamento"
    },
    "paracetamol": {
      "nombre": "Paracetamol",
      "comerciales": [
        "efferalgan",
        "gelocatil",
        "xumadol",
        "dolocatil"
      ],
      "grupo": "analgésico",
      "categoria": "medicamento"
    },
    "diclofenaco": {
      "nombre": "Diclofenaco",
      "comerciales": [
        "voltadol",
        "voltaren",
        "voltaren emulgel",
        "diclofenaco normon"
      ],
      "grupo": "antiinflamatorio",
      "categoria": "medicamento"
    },
    "haloperidol": {
      "nombre": "Haloperidol",
      "comerciales": [],
      "grupo": "neuroléptico",
      "categoria": "medicamento"
    },
    "melitraceno flupentixol": {
      "nombre": "Melitraceno + Flupentixol",
      "comerciales": [
        "deanxit",
        "melitraceno clorhidrato"
      ],
      "grupo": "psicotrópico",
      "categoria": "medicamento"
    },
    "enoxaparina": {
      "nombre": "Enoxaparina",
      "comerciales": [
        "clexane"
      ],
      "grupo": "anticoagulante",
      "categoria": "medicamento"
    },
    "heparina": {
      "nombre": "Heparina",
      "comerciales": [],
      "grupo": "anticoagulante",
      "categoria": "medicamento"
    },
    "acetilcisteina": {
      "nombre": "Acetilcisteína",
      "comerciales": [
        "flumil",
        "fluimucil",
        "acetilcisteina ratiopharm"
      ],
      "grupo": "mucolítico",
      "categoria": "medicamento"
    },
    "ceftriaxona": {
      "nombre": "Ceftriaxona",
      "comerciales": [],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "mepiramina": {
      "nombre": "Mepiramina",
      "comerciales": [],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "uridina trifosfato": {
      "nombre": "Uridina trifosfato",
      "comerciales": [
        "keltican"
      ],
      "grupo": "neurotrófico",
      "categoria": "medicamento"
    },
    "omeprazol": {
      "nombre": "Omeprazol",
      "comerciales": [],
      "grupo": "protector gástrico",
      "categoria": "medicamento"
    },
    "alprazolam": {
      "nombre": "Alprazolam",
      "comerciales": [
        "trankimazin",
        "trankimazin retard"
      ],
      "grupo": "ansiolítico",
      "categoria": "medicamento"
    },
    "lorazepam": {
      "nombre": "Lorazepam",
      "comerciales": [
        "orfidal"
      ],
      "grupo": "ansiolítico",
      "categoria": "medicamento"
    },
    "diazepam": {
      "nombre": "Diazepam",
      "comerciales": [
        "diazepan prodes"
      ],
      "grupo": "ansiolítico",
      "categoria": "medicamento"
    },
    "tetrazepam": {
      "nombre": "Tetrazepam",
      "comerciales": [
        "myolastan",
        "yurelax"
      ],
      "grupo": "relajante muscular",
      "categoria": "medicamento"
    },
    "ciclobenzaprina": {
      "nombre": "Ciclobenzaprina",
      "comerciales": [
        "yurelax"
      ],
      "grupo": "relajante muscular",
      "categoria": "medicamento"
    },
    "ibuprofeno": {
      "nombre": "Ibuprofeno",
      "comerciales": [
        "espidifen"
      ],
      "grupo": "antiinflamatorio",
      "categoria": "medicamento"
    },
    "dexketoprofeno": {
      "nombre": "Dexketoprofeno",
      "comerciales": [
        "enantyum"
      ],
      "grupo": "analgésico",
      "categoria": "medicamento"
    },
    "naproxeno": {
      "nombre": "Naproxeno",
      "comerciales": [
        "naprosyn",
        "antalgin"
      ],
      "grupo": "antiinflamatorio",
      "categoria": "medicamento"
    },
    "etoricoxib": {
      "nombre": "Etoricoxib",
      "comerciales": [
        "arcoxia"
      ],
      "grupo": "antiinflamatorio",
      "categoria": "medicamento"
    },
    "celecoxib": {
      "nombre": "Celecoxib",
      "comerciales": [
        "celebrex",
        "celecrem"
      ],
      "grupo": "antiinflamatorio",
      "categoria": "medicamento"
    },
    "paracetamol codeina": {
      "nombre": "Paracetamol + Codeína",
      "comerciales": [
        "dolocatil codeina"
      ],
      "grupo": "analgésico",
      "categoria": "medicamento"
    },
    "losartan": {
      "nombre": "Losartán",
      "comerciales": [],
      "grupo": "antihipertensivo",
      "categoria": "medicamento"
    },
    "losartan hidroclorotiazida": {
      "nombre": "Losartán + Hidroclorotiazida",
      "comerciales": [],
      "grupo": "antihipertensivo",
      "categoria": "medicamento"
    },
    "enalapril": {
      "nombre": "Enalapril",
      "comerciales": [],
      "grupo": "antihipertensivo",
      "categoria": "medicamento"
    },
    "captopril": {
      "nombre": "Captopril",
      "comerciales": [],
      "grupo": "antihipertensivo",
      "categoria": "medicamento"
    },
    "simvastatina": {
      "nombre": "Simvastatina",
      "comerciales": [],
      "grupo": "hipolipemiante",
      "categoria": "medicamento"
    },
    "rosuvastatina ezetimiba": {
      "nombre": "Rosuvastatina + Ezetimiba",
      "comerciales": [],
      "grupo": "hipolipemiante",
      "categoria": "medicamento"
    },
    "dutasteride tamsulosina": {
      "nombre": "Dutasteride + Tamsulosina",
      "comerciales": [
        "duodart",
        "dutasteride tamsulosina"
      ],
      "grupo": "próstata",
      "categoria": "medicamento"
    },
    "serenoa repens": {
      "nombre": "Serenoa repens",
      "comerciales": [
        "permixon"
      ],
      "grupo": "próstata",
      "categoria": "medicamento"
    },
    "azitromicina": {
      "nombre": "Azitromicina",
      "comerciales": [],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "claritromicina": {
      "nombre": "Claritromicina",
      "comerciales": [],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "ciprofloxacino": {
      "nombre": "Ciprofloxacino",
      "comerciales": [],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "levofloxacino": {
      "nombre": "Levofloxacino",
      "comerciales": [
        "actira"
      ],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "doxiciclina": {
      "nombre": "Doxiciclina",
      "comerciales": [],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "metronidazol": {
      "nombre": "Metronidazol",
      "comerciales": [],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "fosfomicina": {
      "nombre": "Fosfomicina",
      "comerciales": [
        "monurol"
      ],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "cloxacilina": {
      "nombre": "Cloxacilina",
      "comerciales": [
        "anaclosil"
      ],
      "grupo": "antibiótico",
      "categoria": "medicamento"
    },
    "acido fusidico": {
      "nombre": "Ácido fusídico",
      "comerciales": [
        "fucidine",
        "fusidico acido"
      ],
      "grupo": "antibiótico tópico",
      "categoria": "medicamento"
    },
    "moxifloxacino": {
      "nombre": "Moxifloxacino",
      "comerciales": [
        "vigamox"
      ],
      "grupo": "antibiótico oftálmico",
      "categoria": "medicamento"
    },
    "clotrimazol": {
      "nombre": "Clotrimazol",
      "comerciales": [],
      "grupo": "antifúngico",
      "categoria": "medicamento"
    },
    "miconazol": {
      "nombre": "Miconazol",
      "comerciales": [],
      "grupo": "antifúngico",
      "categoria": "medicamento"
    },
    "ambroxol": {
      "nombre": "Ambroxol",
      "comerciales": [
        "mucosan"
      ],
      "grupo": "mucolítico",
      "categoria": "medicamento"
    },
    "carbocisteina": {
      "nombre": "Carbocisteína",
      "comerciales": [
        "pectox lisina",
        "fluidasa"
      ],
      "grupo": "mucolítico",
      "categoria": "medicamento"
    },
    "dextrometorfano": {
      "nombre": "Dextrometorfano",
      "comerciales": [
        "flutox"
      ],
      "grupo": "antitusivo",
      "categoria": "medicamento"
    },
    "cloperastina": {
      "nombre": "Cloperastina",
      "comerciales": [
        "sensedol"
      ],
      "grupo": "antitusivo",
      "categoria": "medicamento"
    },
    "desloratadina": {
      "nombre": "Desloratadina",
      "comerciales": [
        "aerius",
        "desloratadina cinfa"
      ],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "loratadina": {
      "nombre": "Loratadina",
      "comerciales": [],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "bilastina": {
      "nombre": "Bilastina",
      "comerciales": [
        "ibis"
      ],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "ebastina": {
      "nombre": "Ebastina",
      "comerciales": [
        "ebastel",
        "ebastel forte flas"
      ],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "dexclorfeniramina": {
      "nombre": "Dexclorfeniramina",
      "comerciales": [
        "polaramine",
        "polaramine repetabs"
      ],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "hidroxizina": {
      "nombre": "Hidroxizina",
      "comerciales": [
        "atarax"
      ],
      "grupo": "antihistamínico",
      "categoria": "medicamento"
    },
    "fluoxetina": {
      "nombre": "Fluoxetina",
      "comerciales": [],
      "grupo": "antidepresivo",
      "categoria": "medicamento"
    },
    "paroxetina": {
      "nombre": "Paroxetina",
      "comerciales": [],
      "grupo": "antidepresivo",
      "categoria": "medicamento"
    },
    "sulpirida": {
      "nombre": "Sulpirida",
      "comerciales": [
        "dogmatil"
      ],
      "grupo": "neuroléptico",
      "categoria": "medicamento"
    },
    "betahistina": {
      "nombre": "Betahistina",
      "comerciales": [
        "serc"
      ],
      "grupo": "vértigo",
      "categoria": "medicamento"
    },
    "trimetazidina": {
      "nombre": "Trimetazidina",
      "comerciales": [
        "idaptan"
      ],
      "grupo": "cardiológico",
      "categoria": "medicamento"
    },
    "diosmina": {
      "nombre": "Diosmina",
      "comerciales": [
        "daflon"
      ],
      "grupo": "venotónico",
      "categoria": "medicamento"
    },
    "metilprednisolona aceponato": {
      "nombre": "Metilprednisolona aceponato",
      "comerciales": [
        "adventan",
        "lexxema"
      ],
      "grupo": "corticoide tópico",
      "categoria": "medicamento"
    },
    "mometasona": {
      "nombre": "Mometasona",
      "comerciales": [
        "elocom",
        "elocom plus"
      ],
      "grupo": "corticoide tópico",
      "categoria": "medicamento"
    },
    "clobetasol": {
      "nombre": "Clobetasol",
      "comerciales": [
        "clovate"
      ],
      "grupo": "corticoide tópico",
      "categoria": "medicamento"
    },
    "pimecrolimus": {
      "nombre": "Pimecrolimus",
      "comerciales": [
        "elidel"
      ],
      "grupo": "inmunomodulador tópico",
      "categoria": "medicamento"
    },
    "hidrocortisona": {
      "nombre": "Hidrocortisona",
      "comerciales": [],
      "grupo": "corticoide tópico",
      "categoria": "medicamento"
    },
    "ketoprofeno": {
      "nombre": "Ketoprofeno",
      "comerciales": [
        "fastum gel"
      ],
      "grupo": "antiinflamatorio tópico",
      "categoria": "medicamento"
    },
    "dexametasona": {
      "nombre": "Dexametasona",
      "comerciales": [
        "maxidex"
      ],
      "grupo": "corticoide oftálmico",
      "categoria": "medicamento"
    },
    "fenilefrina": {
      "nombre": "Fenilefrina",
      "comerciales": [
        "colircusi fenilefrina"
      ],
      "grupo": "oftálmico",
      "categoria": "medicamento"
    },
    "ciclopentolato": {
      "nombre": "Ciclopentolato",
      "comerciales": [
        "colirofta cicloplejico"
      ],
      "grupo": "oftálmico",
      "categoria": "medicamento"
    },
    "tretinoina": {
      "nombre": "Ácido retinoico",
      "comerciales": [
        "plasimine"
      ],
      "grupo": "dermatológico",
      "categoria": "medicamento"
    },
    "plantago ovata": {
      "nombre": "Plantago ovata",
      "comerciales": [
        "plantaben",
        "agiolax"
      ],
      "grupo": "laxante",
      "categoria": "medicamento"
    },
    "parafina": {
      "nombre": "Parafina líquida",
      "comerciales": [
        "emuliquen simple"
      ],
      "grupo": "laxante",
      "categoria": "medicamento"
    },
    "macrogol": {
      "nombre": "Macrogol",
      "comerciales": [
        "bimotil",
        "citorsal"
      ],
      "grupo": "laxante",
      "categoria": "medicamento"
    },
    "almagato": {
      "nombre": "Almagato",
      "comerciales": [
        "almax"
      ],
      "grupo": "antiácido",
      "categoria": "medicamento"
    },
    "vitamina b": {
      "nombre": "Vitaminas B1-B6-B12",
      "comerciales": [
        "hidroxil",
        "hidroxil b12 b6 b1"
      ],
      "grupo": "vitamina",
      "categoria": "medicamento"
    },
    "citicolina": {
      "nombre": "Citicolina",
      "comerciales": [
        "brainal"
      ],
      "grupo": "neurotrófico",
      "categoria": "medicamento"
    },
    "budesonida inhalada": {
      "nombre": "Budesonida inhalada",
      "comerciales": [
        "pulmicort",
        "pulmicort turbuhaler"
      ],
      "grupo": "corticoide inhalado",
      "categoria": "medicamento"
    },
    "vacuna antitetanica": {
      "nombre": "Vacuna antitetánica",
      "comerciales": [
        "vat"
      ],
      "grupo": "vacuna",
      "categoria": "medicamento"
    },
    "betametasona clotrimazol gentamicina": {
      "nombre": "Betametasona + Clotrimazol + Gentamicina",
      "comerciales": [
        "cuatroderm",
        "septomida"
      ],
      "grupo": "dermatológico",
      "categoria": "medicamento"
    },
    "diosmina hesperidina": {
      "nombre": "Diosmina + Hesperidina",
      "comerciales": [
        "unibenestan"
      ],
      "grupo": "venotónico",
      "categoria": "medicamento"
    },
    "dutasteride": {
      "nombre": "Dutasteride + Tamsulosina",
      "comerciales": [
        "duodart"
      ],
      "grupo": "próstata",
      "categoria": "medicamento"
    }
  },
  "_no_medicamentos": "Estos no son medicamentos, pero estan en las recetas: absorbentes, espesantes, oxigeno. Se agrupan igual, para que no se repitan en pantalla.",
  "productos": {
    "oxigeno domiciliario": {
      "nombre": "Oxígeno domiciliario",
      "grupo": "oxigenoterapia",
      "categoria": "material"
    },
    "incopack pants t media 80 u absorb inc orina dia": {
      "nombre": "Incopack — día",
      "grupo": "absorbente",
      "categoria": "parafarmacia"
    },
    "incopack pants t media 80 u absorb inc orina sup noc": {
      "nombre": "Incopack — noche",
      "grupo": "absorbente",
      "categoria": "parafarmacia"
    },
    "thick and easy sabor neutro": {
      "nombre": "Thick and Easy",
      "grupo": "espesante",
      "categoria": "parafarmacia"
    },
    "media comp fuerte": {
      "nombre": "Media de compresión",
      "grupo": "material",
      "categoria": "parafarmacia"
    },
    "volumatic camara inhalacion": {
      "nombre": "Cámara de inhalación",
      "grupo": "material",
      "categoria": "parafarmacia"
    },
    "aquoral gotas lubricantes": {
      "nombre": "Aquoral — lágrimas",
      "grupo": "oftálmico",
      "categoria": "parafarmacia"
    },
    "preparado natural para conciliar el sueno": {
      "nombre": "Preparado natural (sueño)",
      "grupo": "complemento",
      "categoria": "parafarmacia"
    }
  },
  "_pacientes": "Construida con los medicamentos de Ana y de Pierre-Henri. Sirve a todos.",
  "_categorias": {
    "medicamento": {
      "es": "Medicamentos",
      "fr": "Médicaments",
      "ca": "Medicaments",
      "en": "Medication"
    },
    "parafarmacia": {
      "es": "Parafarmacia",
      "fr": "Parapharmacie",
      "ca": "Parafarmàcia",
      "en": "Parapharmacy"
    },
    "material": {
      "es": "Material",
      "fr": "Matériel",
      "ca": "Material",
      "en": "Equipment"
    }
  }
};
