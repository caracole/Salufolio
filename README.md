<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="blason_oscuro.svg"><img src="blason_claro.svg" width="440" alt="Salufolio"></picture></p>

# Salufolio 🐝

**Expediente médico longitudinal, local-first — un archivo HTML, sin servidor, sin nube.**

> « Éviter de faire tout ce que l'ordinateur peut faire » — *Pierre-Henri Giraud, 1966*

Salufolio nace de un caso real: reunificar diez años de historia clínica dispersa
entre sistemas de salud que no se hablan (Comunitat Valenciana, Navarra, Perú),
y devolver el expediente a quien le pertenece: **el paciente y su cuidador**.

> El paciente (o su familia) es el único punto del sistema donde convergen TODAS
> las fuentes: sanidad pública, hospitales privados, analíticas en papel.
> Salufolio le da los medios de reunirlas.

## 🚀 Probar ahora

**[caracole.github.io/Salufolio](https://caracole.github.io/Salufolio)** — el panal de acceso.
Clic en el alvéolo central 🩺 para entrar. Sus datos viven **solo en su navegador**
(localStorage) — nada sale de su máquina. Empiece importando un `.mf` o añadiendo
sus primeros datos. La extracción de PDF por IA es **BYOK** (su propia clave de
API): solo salen de su máquina los documentos que usted decide enviar.

## El ecosistema (79 módulos)

| Pieza | Qué hace |
|---|---|
| **Salufolio** (`Salufolio.html`) | El expediente: valores con fuente, curvas, radar, cronología, medicamentos, protocolo diario |
| **⚡ Informe express** | Resumen EN PANTALLA para el médico — tratamiento real, valores fuera de rango con tendencia, eventos. 90 segundos, sin rodeos |
| **Extractor** (integrado) | PDF → datos: informes y analíticas convertidos en valores fechados con su fuente. OCR Tesseract para documentos escaneados. Las extracciones se cachean — el mismo documento nunca se procesa dos veces |
| **🔍 Auditoría** | El juez de paz: diagnósticos sin soporte, valores imposibles, colisiones de identificadores. *La auditoría señala; el juicio es humano* |
| **📱 Protocolo móvil** (`Salufolio_Protocolo_movil.html`) | La app del cuidador: tomas diarias, constantes, corrección de días pasados — sincronizada por WiFi local |
| **🧱 ModularBuilder** | El taller: 79 módulos ensamblados en un archivo único — build, split, punto fijo |

## Doctrina

- **Salufolio no inventa nada** — cada dato conserva el documento del que procede
- **Local-first absoluto** — sin servidor obligatorio, sin nube, sin cuenta
- **Table-driven** — el comportamiento vive en tablas, no en código disperso
- **Lavoisier** — nada se pierde: copias automáticas, historial completo

## Documentación

- [`MODULES.md`](MODULES.md) — catálogo de los 79 módulos (autogenerado desde el código)
- [`Salufolio_Protocolo_Manual.md`](Salufolio_Protocolo_Manual.md) — manual del Protocolo
- [`ALINEACION_CMDIC.md`](ALINEACION_CMDIC.md) — alineación con el CMDIC

## Licencia y cita

GNU GPL v3 · DOI [10.5281/zenodo.19973451](https://doi.org/10.5281/zenodo.19973451)
Contacto: salufolio@proton.me

*Desarrollado por Pierre-Henri Giraud (ingeniero desde 1966 — CAE 510, Bull) con Claude (Anthropic) como taller.*
