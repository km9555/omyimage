import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/gif-a-webp. Target query: «GIF a WebP» (neutral
 * Spanish, ES + MX, Nov 2026; low volume); «convertir GIF a WebP» and «WebP
 * animado» in the body. The ui block is shared with gif-to-apng and
 * gif-to-sprite-sheet, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-to-webp",
  locale: "es",
  name: "GIF a WebP",
  tagline:
    "Convierte GIF animados en WebP animado: sin pérdida para conservar cada píxel, o con pérdida para archivos mucho más pequeños. Cada fotograma mantiene su tiempo. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF a WebP – convertir GIF animado gratis | oMyImage",
  metaDescription:
    "Convierte GIF a WebP online y gratis: WebP animado sin pérdida o mucho más ligero. Se conservan todos los fotogramas y sus tiempos, sin subir nada.",

  intro:
    "GIF es el formato de animación más antiguo de la web y uno de los menos eficientes. El WebP animado reproduce la misma animación en cualquier navegador actual, normalmente con una fracción de los datos. El conversor «GIF a WebP» de oMyImage reescribe tu GIF fotograma a fotograma: elige «Sin pérdida» para conservar cada píxel exactamente igual, o «Alta» o «Pequeña» para una compresión con pérdida que reduce el archivo todavía mucho más. El resultado se reproduce junto al original, con su tamaño y el ahorro conseguido, para que decidas el equilibrio antes de descargarlo.",

  sections: [
    {
      heading: "Sin pérdida o con pérdida",
      id: "quality",
      body: [
        "«Sin pérdida» guarda cada píxel tal como está en el GIF. Como la compresión sin pérdida de WebP es muy superior a la de GIF, el archivo suele quedar más pequeño ya solo por eso: a menudo un tercio menos o más en grabaciones de pantalla, logotipos y dibujos animados, donde grandes zonas comparten un mismo color.",
        "«Alta» y «Pequeña» usan en cambio compresión con pérdida, como si cada fotograma fuera un JPG. Normalmente reducen a la mitad, o más, los GIF sacados de un video, a cambio de suavizar un poco los bordes nítidos y el texto. Prueba primero «Alta»; elige «Pequeña» cuando el tamaño importe más que la nitidez. En gráficos pequeños y sencillos, «Sin pérdida» puede incluso quedar por debajo de los ajustes con pérdida; el panel de resultado muestra cada tamaño, así que comparar es rápido.",
      ],
    },
    {
      heading: "Cómo se guarda la animación",
      id: "how",
      body: [
        "Cada fotograma se codifica con el codificador WebP de tu propio navegador y después se empaqueta en un WebP animado. Igual que en un GIF bien hecho, cada fotograma posterior al primero guarda solo el rectángulo que cambió, y un fotograma idéntico al anterior se suma a la duración de este, de modo que los momentos quietos no ocupan nada.",
        "Cada fotograma mantiene su tiempo y la animación se repite exactamente como lo hacía el GIF: sin fin, una sola vez o un número concreto de veces. Las zonas transparentes siguen transparentes; sus bordes quedan duros, porque el GIF nunca tuvo transparencia suave.",
      ],
    },
    {
      heading: "Dónde funciona WebP",
      id: "support",
      body: [
        "El WebP animado se reproduce en Chrome, Edge, Firefox, Safari y Opera, tanto en equipos de escritorio como en teléfonos, así que es seguro para sitios web. Cambiar los GIF por WebP es una de las formas más sencillas de que una página cargue más rápido, y cumple el consejo de las pruebas de velocidad de servir imágenes en formatos modernos.",
        "Fuera del navegador, la compatibilidad es más irregular. Muchos programas de correo, apps de chat, editores de imágenes antiguos y formularios de subida siguen esperando un GIF y pueden mostrar solo un fotograma fijo. Conserva el GIF para esos casos y usa el WebP en la web.",
      ],
    },
    {
      heading: "Navegadores que pueden crear WebP",
      id: "browsers",
      body: [
        "La conversión usa el codificador WebP integrado en el navegador, así que no se descarga nada adicional. Chrome y Edge guardan «Sin pérdida» como un verdadero archivo sin pérdida, y Firefox también crea archivos WebP. Safari puede mostrar WebP pero no crearlo, y en iPhone y iPad todos los navegadores usan el motor de Safari; por eso, para esta herramienta usa un equipo de escritorio o una laptop, o bien un teléfono Android. La herramienta te avisa si tu navegador no puede hacerlo.",
      ],
    },
    {
      heading: "Stickers y mensajería",
      id: "stickers",
      body: [
        "Los stickers animados de WhatsApp son archivos WebP de 512 × 512 píxeles, así que convertir el GIF es un paso hacia crear un sticker. Primero recorta el GIF en forma cuadrada con «Recortar GIF» y llévalo a 512 píxeles con «Redimensionar GIF»; después conviértelo aquí. Las apps de stickers fijan un límite de tamaño pequeño, por lo que «Alta» o «Pequeña» suelen encajar mejor que «Sin pérdida».",
      ],
    },
    {
      heading: "WebP animado en tu propio sitio web",
      id: "website",
      body: [
        "Para usar el WebP en una página basta con cambiar el archivo en la etiqueta de imagen, igual que harías con un GIF. Si todavía tienes que dar servicio a programas muy antiguos, puedes ofrecer el WebP con el elemento picture y dejar el GIF como alternativa. Las páginas con varias animaciones son las que más ganan: cada GIF que sustituyes son menos datos que un teléfono tiene que descargar.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica y el WebP se escribe por completo en tu navegador. No se sube nada y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo convertir un GIF a WebP",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado desde tu PC o tu teléfono." },
    { title: "Elige la calidad", description: "«Sin pérdida» conserva cada píxel; «Alta» y «Pequeña» reducen el tamaño del archivo." },
    { title: "Convierte y descarga", description: "Haz clic en «Convertir a WebP», compara el tamaño con el del GIF y descárgalo." },
  ],

  features: [
    { icon: "sync_alt", title: "Sigue animado", description: "Se conservan todos los fotogramas, sus tiempos y el ajuste de repetición." },
    { icon: "compress", title: "Archivos más pequeños", description: "Sin pérdida suele pesar menos que el GIF; con pérdida, menos todavía." },
    { icon: "lock", title: "Sin subir nada", description: "Se convierte por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo convierto un GIF animado a WebP?", a: "Agrega el GIF, elige «Sin pérdida», «Alta» o «Pequeña» y haz clic en «Convertir a WebP». El WebP se reproduce exactamente igual que el GIF." },
    { q: "¿El WebP sigue siendo animado?", a: "Sí. Se conservan todos los fotogramas y sus tiempos, y se repite igual que el GIF." },
    { q: "¿WebP pesa menos que GIF?", a: "Casi siempre. «Sin pérdida» suele ser un tercio más pequeño en gráficos; los ajustes con pérdida normalmente reducen a la mitad los GIF hechos a partir de video." },
    { q: "¿«Sin pérdida» cambia algún píxel?", a: "No. En Chrome y Edge, «Sin pérdida» guarda cada píxel exactamente como está en el GIF." },
    { q: "¿Se mantiene la transparencia?", a: "Sí. Las zonas transparentes siguen siendo transparentes." },
    { q: "¿Por qué no funciona en Safari?", a: "Safari puede mostrar WebP, pero no tiene codificador WebP. Usa Chrome, Edge o Firefox para convertir." },
    { q: "¿Dónde puedo usar WebP animado?", a: "En sitios web y en cualquier navegador actual. Algunas apps de correo y de chat todavía necesitan GIF." },
    { q: "¿Puedo hacer un sticker de WhatsApp?", a: "Recorta el GIF en forma cuadrada, redimensiónalo a 512 × 512 y conviértelo aquí; después agrégalo con una app de stickers." },
    { q: "¿Se sube mi GIF a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "En Android sí, con Chrome o Firefox. En iPhone y iPad, por ahora ningún navegador puede crear archivos WebP." },
    { q: "¿Cómo vuelvo a convertir un WebP en GIF?", a: "Con «WebP a GIF», que conserva cada fotograma y su tiempo." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Qué nivel de calidad elijo?", a: "«Sin pérdida» para gráficos y grabaciones de pantalla, «Alta» para GIF sacados de un video y «Pequeña» cuando el límite de tamaño es muy ajustado." },
  ],

  security:
    "Tu GIF se convierte por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // GifExportTool.tsx — shared with gif-to-apng and gif-to-sprite-sheet, whose modules reuse this block.
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
    "Your file is processed in your browser and never uploaded.": "Tu archivo se procesa en tu navegador y nunca se sube.",
    "Your animation will appear here.": "Tu animación aparecerá aquí.",
    "Your sprite sheet will appear here.": "Tu sprite sheet aparecerá aquí.",
    "{p}% smaller than the GIF": "{p} % más pequeño que el GIF",
    "{p}% larger than the GIF": "{p} % más grande que el GIF",
    "Same size as the GIF": "Mismo tamaño que el GIF",
    "Original": "Original", // i18n-same
    "Result": "Resultado",
    "Settings": "Ajustes",
    "Download": "Descargar",
    // webp
    "Convert to WEBP": "Convertir a WebP",
    "Quality": "Calidad",
    "Lossless": "Sin pérdida",
    "High": "Alta",
    "Small": "Pequeña",
    "Every pixel is kept. Usually smaller than the GIF already.": "Se conserva cada píxel. Normalmente ya pesa menos que el GIF.",
    "Lossy: much smaller files, with slight softening around sharp edges.": "Con pérdida: archivos mucho más pequeños, con bordes nítidos un poco más suaves.",
    "This browser saves WEBP at very high quality instead of lossless.": "Este navegador guarda el WebP con calidad muy alta en lugar de sin pérdida.",
    // apng
    "Convert to APNG": "Convertir a APNG",
    "APNG keeps every pixel and frame. Only the part of each frame that changes is stored, so it is often smaller than the GIF.":
      "APNG conserva cada píxel y cada fotograma. De cada fotograma solo se guarda la parte que cambia, por eso suele pesar menos que el GIF.",
    // sprite
    "Make sprite sheet": "Crear sprite sheet",
    "Layout": "Disposición",
    "Grid": "Cuadrícula",
    "One row": "Una fila",
    "One column": "Una columna",
    "Columns": "Columnas",
    "Frames": "Fotogramas",
    "Keep all frames": "Conservar todos los fotogramas",
    "Keep every 2nd frame": "Conservar 1 de cada 2 fotogramas",
    "Keep every 3rd frame": "Conservar 1 de cada 3 fotogramas",
    "Frame size": "Tamaño del fotograma",
    "Space between frames": "Espacio entre fotogramas",
    "Transparent background": "Fondo transparente",
    "Background colour": "Color de fondo",
    "{n} frames of {w} × {h} px, {cols} × {rows}": "{n} fotogramas de {w} × {h} px, {cols} × {rows}",
    "This sheet is too large for a browser to create. Keep fewer frames, choose a smaller frame size or use a grid.":
      "Esta hoja es demasiado grande para que un navegador la cree. Conserva menos fotogramas, elige un tamaño de fotograma menor o usa una cuadrícula.",
    "CSS animation": "Animación CSS",
    "Copy": "Copiar",
    "Copied": "Copiado",
    "Could not copy.": "No se pudo copiar.",
    "Uses the average frame time, so frames with longer pauses play at the same pace as the rest.":
      "Usa la duración media de los fotogramas, así que los fotogramas con pausas más largas se reproducen al mismo ritmo que el resto.",
  },
};

export default content;
