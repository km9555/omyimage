import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/agregar-texto-a-gif. Target query: «Agregar texto a
 * GIF» (neutral Spanish, ES + MX, Nov 2026; «agregar» reads naturally in both
 * markets); secondary «poner texto a un GIF» / «escribir en un GIF» in the
 * intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "add-text-to-gif",
  locale: "es",
  name: "Agregar texto a GIF",
  tagline:
    "Pon un texto sobre un GIF animado (el de un meme, un subtítulo o una etiqueta) en todos los fotogramas o solo en algunos, y míralo en movimiento antes de guardar. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Agregar texto a GIF – online y gratis | oMyImage",
  metaDescription:
    "Agregar texto a GIF online y gratis: escribe el texto de un meme o un subtítulo sobre un GIF animado y elige fuente y colores. Vista previa en vivo.",

  intro:
    "Un GIF dice más con las palabras adecuadas encima: el remate debajo de una reacción, un subtítulo en un clip sin sonido, una etiqueta en cada paso de un tutorial. Con «Agregar texto a GIF» de oMyImage escribes tu texto directamente sobre la animación: poner texto a un GIF sin programas de edición. Escríbelo, elige una de las nueve posiciones, una fuente, un tamaño y los colores, y la vista previa reproduce el GIF con tu texto en tiempo real. Cuando te guste cómo queda, agrégalo al GIF; el texto pasa a formar parte de cada fotograma que elegiste, así que se verá en cualquier sitio al que vaya el GIF.",

  sections: [
    {
      heading: "Colocar el texto",
      id: "position",
      body: [
        "Elige cualquiera de los nueve puntos: las esquinas, el centro de cada borde o el centro de la imagen. Los textos largos pasan solos a la línea siguiente, y la tecla Enter empieza una línea nueva donde tú quieras. El texto guarda un pequeño margen con el borde para que el contorno nunca quede cortado.",
        "El tamaño se fija como una proporción del lado más corto del GIF, así que el mismo ajuste queda bien en un clip vertical de teléfono y en un banner ancho. La vista previa muestra el resultado al instante, sobre la animación en movimiento y no sobre un solo fotograma.",
      ],
    },
    {
      heading: "Escribir en un GIF: estilo meme o estilo subtítulo",
      id: "style",
      body: [
        "El aspecto clásico de un meme es la fuente Impact en mayúsculas, blanca y con un contorno negro grueso: se lee sobre cualquier fondo, claro u oscuro. Elige Impact, marca «MAYÚSCULAS» y deja el contorno con su valor predeterminado. Para subtítulos, una fuente sans serif sencilla con un recuadro detrás del texto se lee mejor y resulta más tranquila.",
        "El color del texto y el del contorno pueden ser los que quieras. Pon el grosor del contorno en cero para un texto limpio sin borde, o súbelo para fondos claros y recargados. El recuadro usa el color del contorno, con algo de transparencia, para que el fotograma se siga viendo detrás.",
      ],
    },
    {
      heading: "Texto solo en algunos fotogramas",
      id: "timing",
      body: [
        "Elige «Algunos fotogramas» para mostrar el texto solo durante una parte de la animación. Dos controles marcan el primer y el último fotograma, con el segundo en que empieza cada uno, para que un remate aparezca justo cuando llega la reacción o para que una etiqueta acompañe cada paso de una grabación de pantalla.",
        "Para mostrar varios textos distintos, agrega uno, descarga el GIF, ábrelo de nuevo y agrega el siguiente en otro rango de fotogramas. Cada pasada conserva el texto anterior.",
      ],
    },
    {
      heading: "Fuentes",
      id: "fonts",
      body: [
        "Las cuatro fuentes (Impact, sans serif, serif y máquina de escribir) vienen de tu dispositivo, así que no se descarga nada adicional. Impact viene integrada en Windows y macOS; en los teléfonos que no la tienen, la sustituye una sans serif en negrita. Funciona cualquier idioma que tu dispositivo pueda mostrar, con tildes, eñes y signos ¿ ¡, y también hindi, ruso y emojis.",
      ],
    },
    {
      heading: "Calidad y tamaño del archivo",
      id: "quality",
      body: [
        "Cada fotograma mantiene su tiempo y el GIF se repite como antes. Los bordes del texto se suavizan contra la imagen que hay detrás, y los 256 colores del GIF se vuelven a elegir para toda la animación, de modo que los colores del texto encajan sin franjas. Agregar texto cambia el tamaño del archivo solo un poco; si el GIF tiene que pesar menos, pásalo después por «Comprimir GIF».",
      ],
    },
    {
      heading: "Textos que se leen bien",
      id: "tips",
      body: [
        "Los textos cortos funcionan mejor: un GIF se repite en pocos segundos, así que limítate a una o dos líneas. Colócalo donde no está la acción: abajo en la mayoría de los clips, arriba cuando las caras o las manos quedan en la parte baja del encuadre. Un texto claro con contorno oscuro funciona sobre casi todo; en un fondo recargado, activa el recuadro.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica, recibe el texto y se vuelve a codificar por completo en tu navegador. Nunca se sube a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo agregar texto a un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado desde tu PC o tu teléfono." },
    { title: "Escribe y da estilo", description: "Escribe el texto y elige la posición, la fuente, el tamaño y los colores; la vista previa lo reproduce en vivo." },
    { title: "Agrega y descarga", description: "Haz clic en «Agregar texto al GIF», revisa el resultado y descárgalo." },
  ],

  features: [
    { icon: "text_fields", title: "Vista previa en vivo", description: "Mira el texto sobre el GIF en movimiento mientras escribes." },
    { icon: "palette", title: "Meme o subtítulo", description: "Contorno, recuadro, colores, mayúsculas y nueve posiciones." },
    { icon: "lock", title: "Sin subir nada", description: "El texto se agrega por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo agrego texto a un GIF animado?", a: "Agrega el GIF, escribe tu texto, elige dónde va y cómo se ve, haz clic en «Agregar texto al GIF» y descárgalo." },
    { q: "¿El GIF seguirá animado?", a: "Sí. Cada fotograma mantiene su tiempo; el texto se dibuja sobre cada uno de ellos." },
    { q: "¿Puedo hacer el texto clásico de un meme?", a: "Sí. Elige Impact, marca «MAYÚSCULAS» y mantén el contorno negro." },
    { q: "¿El texto puede aparecer solo en una parte del GIF?", a: "Sí. Elige «Algunos fotogramas» y marca el primer y el último fotograma con los controles." },
    { q: "¿Puedo agregar más de un texto?", a: "Agrega uno, descarga el GIF, ábrelo de nuevo y agrega el siguiente texto." },
    { q: "¿Puedo poner el texto en una esquina?", a: "Sí. Elige cualquiera de las nueve posiciones, esquinas incluidas." },
    { q: "¿Puedo escribir en varias líneas?", a: "Sí. Pulsa Enter para empezar una línea nueva; las líneas largas también pasan solas a la siguiente." },
    { q: "¿Funciona con tildes, eñes, hindi, ruso o emojis?", a: "Sí, con cualquier escritura que tu dispositivo pueda mostrar." },
    { q: "¿El archivo pesará mucho más?", a: "Normalmente solo un poco. «Comprimir GIF» puede reducirlo después." },
    { q: "¿Se sube mi GIF a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de tu teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Cómo pongo texto a un GIF sin que se vea borroso?", a: "Los fotogramas no se modifican; solo se añade el texto, con los bordes suavizados. Un grosor de contorno adecuado lo mantiene nítido y legible incluso sobre un fondo recargado." },
  ],

  security:
    "El texto se agrega a tu GIF por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // AddTextToGifTool.tsx
    "Select a GIF": "Seleccionar GIF",
    "or drop a GIF here": "o suelta un GIF aquí",
    "Please select a GIF.": "Selecciona un GIF.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Change image": "Cambiar archivo",
    "Clear image": "Quitar archivo",
    "Processing failed.": "No se pudo procesar el archivo.",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Output: {w} × {h} px": "Salida: {w} × {h} px",
    "{n} frames": "{n} fotogramas",
    "{s} s": "{s} s", // i18n-same
    "Frame {i} · {s} s": "Fotograma {i} · {s} s",
    "Your file is processed in your browser and never uploaded.": "Tu archivo se procesa en tu navegador y nunca se sube.",
    "Preview": "Vista previa",
    "Result": "Resultado",
    "Download GIF": "Descargar GIF",
    "Add text to GIF": "Agregar texto al GIF",
    "Text settings": "Ajustes del texto",
    "Text": "Texto",
    "Your text here": "Tu texto aquí",
    "Long text wraps onto new lines by itself. Press Enter to start a new line.": "El texto largo pasa solo a la línea siguiente. Pulsa Enter para empezar una línea nueva.",
    "The preview plays your text live. Add it to the GIF when it looks right.": "La vista previa reproduce tu texto en vivo. Agrégalo al GIF cuando te guste cómo queda.",
    "Position": "Posición",
    "Top left": "Arriba a la izquierda",
    "Top": "Arriba",
    "Top right": "Arriba a la derecha",
    "Left": "Izquierda",
    "Middle": "Centro",
    "Right": "Derecha",
    "Bottom left": "Abajo a la izquierda",
    "Bottom": "Abajo",
    "Bottom right": "Abajo a la derecha",
    "Font": "Fuente",
    "Impact (meme)": "Impact (meme)", // i18n-same
    "Sans-serif": "Sans serif",
    "Serif": "Serif", // i18n-same
    "Typewriter": "Máquina de escribir",
    "Size": "Tamaño",
    "CAPITAL LETTERS": "MAYÚSCULAS",
    "Text colour": "Color del texto",
    "Outline colour": "Color del contorno",
    "Outline thickness": "Grosor del contorno",
    "Box behind the text": "Recuadro detrás del texto",
    "Show the text": "Mostrar el texto",
    "Whole GIF": "Todo el GIF",
    "Some frames": "Algunos fotogramas",
    "From": "Desde",
    "To": "Hasta",
  },
};

export default content;
