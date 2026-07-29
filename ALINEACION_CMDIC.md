# Salufolio y el Conjunto Mínimo de Datos de los Informes Clínicos (CMDIC)

**Alineación normativa del formato `.mf` con el Real Decreto 1093/2010** (modificado por el RD 572/2023, BOE 05-07-2023), por el que se aprueba el conjunto mínimo de datos de los informes clínicos en el Sistema Nacional de Salud.

## Motivación

Salufolio es una aplicación local y de código abierto (GNU GPL v3) para la gestión personal del expediente médico. Su formato de datos, el fichero `.mf` (JSON), se ha alineado deliberadamente con el CMDIC para garantizar tres propiedades:

1. **Legibilidad clínica** — el mismo principio que enuncia el RD: legibilidad para profesionales y ciudadanía.
2. **Interoperabilidad semántica** — los datos codificados pueden dialogar con los sistemas de información sanitarios españoles y europeos (eHDSI).
3. **Trazabilidad** — cada dato conserva la referencia a su documento fuente.

## Correspondencias implementadas

| Concepto CMDIC (RD 1093/2010) | Implementación en el formato `.mf` |
|---|---|
| TEXTO CODIFICADO: identificador de fuente + código + término | Tripletes `{fuente, codigo, termino}` en `diagnosticos_cod` (episodios) y `codigos` (antecedentes). Terminologías: CIE-9-MC, CIE-10 |
| Antecedentes personales / Enfermedades previas, con «Año de inicio» | Tabla `antecedentes`: etiqueta, categoría, códigos, `ano_inicio`, primera/última mención, número de episodios, estado |
| Antecedentes quirúrgicos (procedimiento + año) | Tabla `antecedentes_quirurgicos` |
| Dispositivos médicos (con fecha de implantación) | Tabla `dispositivos_medicos` (nomenclatura EMDN prevista) |
| Medicación: fármaco, fechas inicio/fin, vía de administración, dosis, posología, frecuencia de las tomas | Tabla `medicaments`: `nom`, `date`, fechas calculadas, `via_administracion` (deducida de la forma farmacéutica), `dose`, `posologie`, `frequence`, `historial_fechas` |
| Signos vitales (PA sistólica/diastólica, FC, temperatura, SpO₂) | Mediciones `TA_sys`, `TA_dia`, `FC`, `Temp`, `SpO2` en la tabla `mesures` |
| Valores nulos (NullFlavor) en secciones obligatorias sin información | `{"NullFlavor": "NI"}` en secciones vacías |
| Tipos de documentos clínicos (Anexo 1, 9 tipos) | Tabla `sources`: índice de los documentos PDF utilizados, con paginación |

## Terminologías de referencia: estado y hoja de ruta

| Terminología | Uso en el RD | Estado en Salufolio |
|---|---|---|
| CIE-9-MC / CIE-10 | Diagnósticos | ✅ Implementado (tripletes) |
| Nomenclátor AEMPS | Medicamentos (principio activo) | 🔜 Previsto (diccionario local) |
| ATC | Clasificación de fármacos (eHDSI/MVC) | 🔜 Previsto (farmacovigilancia e interacciones) |
| EDQM | Dosis y formas farmacéuticas | 🔜 Previsto |
| LOINC / UCUM | Pruebas de laboratorio y unidades | 🔜 Previsto |
| SNOMED CT | Terminología clínica integral | Estudio (requiere licencia nacional CNR) |

## Declaración en el fichero

Cada `.mf` generado incluye una cabecera de codificación:

```json
"codificacion": {
  "norma": "CMDIC — RD 1093/2010 (mod. RD 572/2023)",
  "formato": "TEXTO CODIFICADO: {fuente, codigo, termino}",
  "terminologias": ["CIE-9-MC", "CIE-10"]
}
```

## Nota

Salufolio no es un producto sanitario ni un sistema de historia clínica electrónica oficial; es una herramienta personal de organización y visualización. La alineación con el CMDIC es una decisión de diseño orientada a la calidad de los datos y a la interoperabilidad futura.

---
*Salufolio — Pierre-Henri Giraud · GNU GPL v3 · DOI 10.5281/zenodo.19973451*
