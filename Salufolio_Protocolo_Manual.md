# Protocolo móvil — manual

**Un cuaderno de cuidados que vive en el teléfono situado junto a la cama.**
Un solo fichero HTML: sin servidor, sin cuenta, sin conexión obligatoria.

> Manual completo, con capturas de todas las pantallas, en
> [`docs/`](docs/) — y también una documentación técnica y un documento
> académico trilingüe.

---

## Instalación

Copie `Salufolio_Protocolo_movil.html` al teléfono y ábralo con el navegador.
Nada más.

Para enviar los datos al ordenador de la casa, ábralo desde el servidor:

```
http://<dirección-del-ordenador>:7777/protocolo
```

Teléfono y ordenador en la misma red Wi-Fi.

## Los pacientes de la casa

Bajo la fecha, una lista. Se elige un nombre y toda la pantalla se rehace con
sus datos; **＋** añade un paciente, **🗑** lo borra previa confirmación, que
nombra a quien se va a perder y ofrece exportarlo antes.

Cada paciente tiene su propio casillero: su pauta, sus tomas, sus constantes,
sus observaciones, su material. Nada se mezcla. El idioma, el tamaño de letra,
el tema y la dirección del ordenador pertenecen al cuidador y son comunes.

En el ordenador se pueden abrir varias pestañas, cada una en un paciente
distinto: cada pestaña recuerda el suyo.

## Lo que se registra

| Pantalla | Contenido |
|---|---|
| **Hoy** | La pauta por momentos — desayuno, comida, cena, noche. Un toque marca la toma y graba la hora. Debajo, el material y, si hace falta, las urgencias |
| **Constantes** | Tensión, frecuencia, saturación, peso, temperatura. Debajo del formulario, las mediciones del día |
| **Notas** | Los registros del cuerpo y el vocabulario de observación |
| **Datos** | Paciente, pauta, avisos, historial, compartir, comentarios |

### Material y oxígeno

Un basculador: **I** enciende y graba la hora de inicio, la lámpara se enciende;
**O** apaga y graba el fin. El caudal se escribe a la izquierda, y si cambia con
el aparato en marcha el cambio queda fechado dentro de la sesión. Una sesión sin
hora de fin es una sesión abierta, no un error.

### Urgencias 112

Cuatro tiempos, sobre uno o varios días: **llamada**, **llegada** de la
asistencia, **salida** del domicilio, **regreso** a casa. La fecha solo se
escribe cuando cambia. El marco es rojo mientras la urgencia está en casa, color
miel cuando la persona está fuera.

### Los registros del cuerpo

Cuatro líneas: hidratación, cambios de pañal, deposiciones, micciones. El número
del día se escribe delante de cada elección, en singular o en plural según
convenga. Para la hidratación se toca «vasos» y se elige la bebida; el botón
está gris mientras no se haya bebido nada — y eso también es una información.

### El vocabulario de observación

Somnolencia, alimentación, ocupaciones del día, dolores localizados, hinchazón,
caída con su punto de impacto, agitación, y un «buen día» que merecía existir.

Varios abren una precisión: el botón pasa entonces a decir el **estado
resultante** en una sola frase. Para anular, se vuelve a tocar la elección
encendida. Elegir otra reemplaza, no acumula. Las ocupaciones admiten varias a la
vez; «Nada» es exclusivo.

### Corregir una hora

Se anota primero y se corrige después: una lista de lo anotado hoy, se toca la
línea, se ajusta la hora.

## Enviar al expediente

La pastilla junto al emblema dice si el ordenador contesta. «Enviar» deposita una
copia del día; nada se borra del teléfono. El envío parte sin esperar respuesta
—de ahí el nombre de satélite—, y por eso el botón está siempre activo: la
comprobación se hace en el ordenador, en la bandeja de Salufolio.

## Los principios

- **El programa trabaja, no el humano.** Todo se guarda solo, en el instante del
  gesto. Ningún botón «Guardar»: un cambio de estado se registra al teclear, no
  al salir del campo.
- **No tentar al diablo.** Lo que no puede funcionar no se muestra.
- **No esclavizar.** Ningún ritual, ningún recordatorio, ninguna casilla obligatoria.
- **Doctrina de 1966.** El comportamiento no se escribe en el código: se declara
  en tablas que el código recorre.
- **Doctrina Lavoisier.** Nada se pierde entre la fuente y la salida.
- **Las formas se declaran, no se calculan.**

## Idiomas

Español, valenciano, francés e inglés. El idioma se cambia en cualquier momento y
no afecta a los datos guardados: la etiqueta se almacena siempre en español, solo
la presentación se traduce.

---

*Programa libre — GNU GPL v3 · Pierre-Henri Giraud · [salufolio.com](https://salufolio.com)*
