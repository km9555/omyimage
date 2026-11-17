import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/gif-de-texto-escribiendo. Target query: «GIF de texto
 * escribiendo» (neutral Spanish, ES + MX, Nov 2026; the slug as people type
 * it); secondary «efecto máquina de escribir» / «texto animado» in the
 * metaTitle, intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "typing-text-gif",
  locale: "es",
  name: "GIF de texto escribiendo",
  tagline:
    "Crea un GIF en el que tu texto se escribe solo, letra a letra, con un cursor parpadeante. Elige la velocidad, la fuente y los colores. Gratis, en tu navegador y sin subir nada.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF de texto escribiendo – máquina de escribir | oMyImage",
  metaDescription:
    "GIF de texto escribiendo: tu mensaje aparece letra a letra con efecto máquina de escribir y cursor parpadeante. Elige velocidad, fuente y colores. Gratis.",

  intro:
    "Un texto que se escribe solo llama la atención como nunca lo hace un texto quieto. El «GIF de texto escribiendo» de oMyImage le da ese efecto máquina de escribir a cualquier mensaje: escríbelo, elige a qué velocidad se teclea, la fuente, el tamaño y los colores, y si al final parpadea un cursor. La vista previa reproduce la animación mientras la ajustas. Como el resultado es un GIF normal, este texto animado funciona donde el código no llega: en chats, presentaciones, correos electrónicos, archivos README de GitHub y cualquier sitio web, sin JavaScript y sin reproductor de video.",

  sections: [
    {
      heading: "Cómo funciona la escritura",
      id: "how",
      body: [
        "Tu texto se compone una sola vez, en su tamaño final, para que las líneas nunca salten mientras aparecen las letras. Después, cada fotograma revela la letra siguiente a la velocidad que elegiste. Como una persona al teclear, hace una pausa breve después de las comas y una más larga después de los puntos y al final de cada línea, así el ritmo resulta natural y no mecánico.",
        "Al final, el texto completo se mantiene durante el tiempo que elijas, de uno a cinco segundos, mientras el cursor parpadea cada medio segundo. Después el GIF vuelve a empezar o, si desmarcas «Repetir sin fin», se detiene en el texto terminado.",
      ],
    },
    {
      heading: "Velocidad y duración",
      id: "speed",
      body: [
        "Elige 6, 10, 15 o 25 letras por segundo. Seis parece una escritura cuidadosa y va bien con frases cortas y dramáticas; diez es un ritmo natural; quince y veinticinco terminan rápido los mensajes largos. La vista previa y el número de fotogramas se actualizan al cambiarla, y la duración de todo el GIF aparece debajo de la vista previa.",
        "Cada letra es un fotograma, así que un texto más largo tiene más fotogramas; pero cada fotograma solo añade la letra nueva, de modo que incluso un mensaje largo sigue siendo un archivo pequeño.",
      ],
    },
    {
      heading: "Fuente, tamaño y colores",
      id: "look",
      body: [
        "Máquina de escribir, una fuente monoespaciada, da el aspecto clásico de terminal; sans serif y serif van bien con citas y anuncios, e Impact crea un titular contundente. El tamaño va de 14 a 96 píxeles y el ancho de 320 a 800 píxeles; el alto crece con el número de líneas.",
        "Sirve cualquier color de texto y de fondo. Un fondo transparente permite poner el GIF sobre cualquier página, pero como la transparencia de GIF no tiene bordes suaves, las letras se ven más limpias sobre un color sólido que coincida con el lugar donde se mostrará el GIF.",
        "Un contorno, desde un borde fino hasta uno grueso, mantiene las letras legibles sobre fondos recargados o transparentes. Cinco combinaciones de colores (Classic Dark, Clean Light, Midnight Neon, Ocean Blue y Sunset Pop) fijan el color del texto, del fondo y del contorno con un clic, y después puedes cambiar cualquiera de ellos.",
      ],
    },
    {
      heading: "Dónde usar un texto animado",
      id: "uses",
      body: [
        "Envía un saludo que se escribe solo en WhatsApp o Telegram. Abre una presentación con una frase que se escribe sola en la primera diapositiva. Pon un eslogan animado al principio de un README de GitHub, donde no se permiten scripts pero sí GIF. Añade una firma o un titular en movimiento a un correo, una entrada de blog o una página de producto sin tocar código.",
      ],
    },
    {
      heading: "Cualquier idioma",
      id: "languages",
      body: [
        "Las letras se cuentan como las lees: una letra con tilde, una eñe, una sílaba en hindi o un emoji aparecen enteros y no por partes. El texto usa las fuentes de tu dispositivo, así que se puede escribir todo lo que tu dispositivo sea capaz de mostrar: alfabeto latino, cirílico, devanagari y más.",
      ],
    },
    {
      heading: "Consejos para un buen GIF con efecto máquina de escribir",
      id: "tips",
      body: [
        "Mantén el mensaje corto: una o dos frases se escriben en pocos segundos y vuelven a empezar antes de que se pierda la atención. Deja una pausa de dos o tres segundos al final para que se pueda leer toda la línea. Haz que el fondo coincida con la página o el chat donde aparecerá el GIF y elige un ancho cercano al tamaño al que se mostrará, para que las letras se vean nítidas.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "No hay nada que subir: el GIF se dibuja a partir de tu texto por completo en tu navegador, y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo crear un GIF de texto escribiendo",
  steps: [
    { title: "Escribe el texto", description: "Escribe el mensaje que debe teclear el GIF y haz clic en «Empezar»." },
    { title: "Elige el estilo", description: "Elige la velocidad, la fuente, el tamaño, los colores, el cursor y la pausa; la vista previa lo reproduce en vivo." },
    { title: "Crea y descarga", description: "Haz clic en «Crear GIF» y descarga la animación." },
  ],

  features: [
    { icon: "terminal", title: "Ritmo de escritura real", description: "Letra a letra, con pausas en comas, puntos y finales de línea." },
    { icon: "palette", title: "Tu estilo", description: "Velocidad, fuente, tamaño, colores, contorno, cursor y la pausa final." },
    { icon: "lock", title: "Sin subir nada", description: "Se dibuja por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo hago un GIF de texto escribiendo?", a: "Escribe tu mensaje, haz clic en «Empezar», elige la velocidad y el estilo, luego haz clic en «Crear GIF» y descárgalo." },
    { q: "¿Puedo cambiar la velocidad de escritura?", a: "Sí. Elige 6, 10, 15 o 25 letras por segundo." },
    { q: "¿Puedo quitar el cursor parpadeante?", a: "Sí. Desmarca «Cursor parpadeante»." },
    { q: "¿El GIF puede detenerse después de escribir una vez?", a: "Sí. Desmarca «Repetir sin fin» y se detendrá en el texto terminado." },
    { q: "¿Puedo usar varias líneas?", a: "Sí. Pulsa Enter para una línea nueva; las líneas largas también pasan solas a la siguiente." },
    { q: "¿El fondo puede ser transparente?", a: "Sí, aunque las letras se ven más limpias sobre un fondo sólido, porque la transparencia de GIF no tiene bordes suaves." },
    { q: "¿Puedo agregar un contorno al texto?", a: "Sí. Elige un color de contorno y mueve «Grosor del contorno». Una combinación de colores fija a la vez el color del texto, del fondo y del contorno." },
    { q: "¿Funciona con tildes, eñes, hindi o ruso?", a: "Sí. Se puede escribir en cualquier idioma que tu dispositivo pueda mostrar, emojis incluidos." },
    { q: "¿Puedo usarlo en un README de GitHub?", a: "Sí. Un GIF se muestra en los README, donde no pueden ejecutarse scripts ni animaciones CSS." },
    { q: "¿Cuánto pesa el archivo?", a: "Normalmente poco: cada fotograma solo añade una letra. Los textos largos en tamaños grandes ocupan más." },
    { q: "¿Tengo que subir algo?", a: "No. El GIF se dibuja a partir de tu texto en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de tu teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Qué diferencia hay entre un GIF de texto animado y un video?", a: "Un GIF se reproduce solo en cualquier sitio sin reproductor, también en correos y README, y con textos cortos pesa muy poco. Un video necesitaría un reproductor y suele pesar más." },
  ],

  security:
    "Tu texto se convierte en GIF por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // TypingTextGifTool.tsx
    "Typing Text GIF": "GIF de texto escribiendo",
    "What should the GIF type?": "¿Qué debe escribir el GIF?",
    "Hello! This GIF types your text, letter by letter.": "¡Hola! Este GIF escribe tu texto, letra a letra.",
    "Next you can change the speed, font, colours and cursor.": "Después podrás cambiar la velocidad, la fuente, los colores y el cursor.",
    "Start": "Empezar",
    "Back": "Atrás",
    "Type some text to see the preview.": "Escribe algo de texto para ver la vista previa.",
    "Text settings": "Ajustes del texto",
    "Text": "Texto",
    "Typing speed": "Velocidad de escritura",
    "{n} letters/s": "{n} letras/s",
    "Font": "Fuente",
    "Impact (meme)": "Impact (meme)", // i18n-same
    "Sans-serif": "Sans serif",
    "Serif": "Serif", // i18n-same
    "Typewriter": "Máquina de escribir",
    "Size": "Tamaño",
    "Width": "Ancho",
    "Alignment": "Alineación",
    "Left": "Izquierda",
    "Centre": "Centro",
    "Colour presets": "Combinaciones de colores",
    "Classic Dark": "Classic Dark", // i18n-same
    "Clean Light": "Clean Light", // i18n-same
    "Midnight Neon": "Midnight Neon", // i18n-same
    "Ocean Blue": "Ocean Blue", // i18n-same
    "Sunset Pop": "Sunset Pop", // i18n-same
    "Text colour": "Color del texto",
    "Background colour": "Color de fondo",
    "Transparent background": "Fondo transparente",
    "GIF transparency has no soft edges, so text looks smoothest on a solid background.": "La transparencia de GIF no tiene bordes suaves, así que el texto se ve más limpio sobre un fondo sólido.",
    "Outline colour": "Color del contorno",
    "Outline thickness": "Grosor del contorno",
    "Blinking cursor": "Cursor parpadeante",
    "Pause at the end": "Pausa al final",
    "Repeat forever": "Repetir sin fin",
    "Preview": "Vista previa",
    "Make GIF": "Crear GIF",
    "Result": "Resultado",
    "Your GIF will appear here.": "Tu GIF aparecerá aquí.",
    "Download GIF": "Descargar GIF",
    "Processing failed.": "No se pudo procesar el archivo.",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Output: {w} × {h} px": "Salida: {w} × {h} px",
    "{n} frames": "{n} fotogramas",
    "{s} s": "{s} s", // i18n-same
    "Everything happens in your browser; nothing is uploaded.": "Todo ocurre en tu navegador; no se sube nada.",
  },
};

export default content;
