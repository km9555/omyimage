import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/gif-a-mp4.
 *
 * Target query «GIF a MP4» leads the h1; «convertir GIF a MP4» carries the
 * metaTitle, the how-to heading and the first FAQ.
 */
const content: ToolPageContent = {
  toolId: "gif-to-mp4",
  locale: "es",
  name: "GIF a MP4",
  tagline:
    "Convierte GIF en video MP4: normalmente mucho más ligero, con colores más limpios y aceptado en cualquier plataforma que admita video. Repite los GIF cortos, elige un fondo y descarga. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF a MP4 – Convertir GIF a MP4 gratis y online | oMyImage",
  metaDescription:
    "Convertir GIF a MP4 gratis: el video suele pesar varias veces menos, conserva los tiempos de cada fotograma y sirve para Instagram y TikTok. Sin subir archivos.",

  intro:
    "El GIF es un formato antiguo: 256 colores por fotograma y una compresión que nunca se pensó para el movimiento. Un video MP4 hace el mismo trabajo en una fracción del espacio y es lo que Instagram, TikTok y la mayoría de las aplicaciones realmente esperan. El convertidor «GIF a MP4» de oMyImage transforma tu GIF en un MP4 H.264 con el codificador de video integrado en tu navegador, conserva los tiempos de cada fotograma y te permite repetir un bucle corto para que el video dure lo suficiente como para publicarlo.",

  sections: [
    {
      heading: "Por qué convertir un GIF a MP4",
      id: "why",
      body: [
        "La razón principal es el tamaño. La compresión de video predice el movimiento entre fotogramas y guarda los colores de forma mucho más eficiente, así que la misma animación en MP4 suele pesar varias veces menos que el GIF, a veces diez veces menos o más en los GIF detallados o fotográficos. La herramienta muestra los dos tamaños para que veas la diferencia con tu archivo.",
        "La segunda razón es dónde puedes usarlo. Instagram y TikTok aceptan subidas de video, no de GIF; muchas aplicaciones de mensajería y de presentaciones también se llevan mejor con MP4. Incluso los sitios que te muestran un «GIF» a menudo lo convierten en video por detrás.",
      ],
    },
    {
      heading: "Cómo hacer que se repita",
      id: "loop",
      body: [
        "Un GIF se repite solo; un MP4 solo se repite si el reproductor está configurado para hacerlo. La mayoría de las plataformas reproducen un video corto una vez o lo repiten según sus propias reglas, y los clips muy cortos pueden ser rechazados o sentirse bruscos. Elige 2×, 3× o 5× para repetir la animación dentro del video, de modo que un GIF de un segundo se convierta en unos segundos de bucle fluido.",
        "El panel muestra cuánto durará el video con tu elección, para que puedas apuntar a la duración que prefiere tu plataforma.",
      ],
    },
    {
      heading: "Transparencia y fondo",
      id: "background",
      body: [
        "El video MP4 estándar no admite transparencia, así que las zonas transparentes del GIF se rellenan con un color de fondo, blanco de forma predeterminada. Elige el color de la página o del chat donde se verá el video y un sticker o un logotipo transparente se integrará como si no hubiera fondo.",
      ],
    },
    {
      heading: "Calidad y tiempos",
      id: "quality",
      body: [
        "Cada fotograma se codifica con su propia duración, así que los GIF con tiempos desiguales (por ejemplo, una pausa en el último fotograma) se reproducen exactamente igual que antes. El video se codifica con una tasa de bits generosa para su tamaño, lo que mantiene limpios los colores planos y el texto.",
        "El MP4 tiene las mismas dimensiones que el GIF; si el ancho o el alto es un número impar, se añade una fila o una columna de fondo, porque el video H.264 necesita medidas pares.",
      ],
    },
    {
      heading: "Compatibilidad con navegadores",
      id: "browsers",
      body: [
        "La conversión usa el codificador de video WebCodecs integrado en los navegadores modernos. Chrome, Edge y Safari pueden crear MP4 (H.264); si tu navegador no puede, la herramienta te lo dice en lugar de generar un archivo dañado. El MP4 resultante se reproduce en prácticamente cualquier teléfono, equipo y aplicación.",
        "No se sube nada: el GIF se decodifica y el video se codifica en tu dispositivo, lo que también significa que los GIF más grandes tardan un poco más en los teléfonos más lentos.",
      ],
    },
    {
      heading: "MP4 en presentaciones y chats",
      id: "uses",
      body: [
        "PowerPoint, Keynote y Google Slides insertan video MP4, y un MP4 corto hace que una presentación pese mucho menos que la misma animación en GIF. Configura el video para que se reproduzca automáticamente y en bucle en el programa de presentaciones, y se comportará igual que el GIF.",
        "En los chats, un MP4 se envía más rápido, gasta menos datos del teléfono y aguanta mejor los reenvíos, porque las aplicaciones vuelven a comprimir los GIF grandes de forma mucho más agresiva que los videos cortos.",
      ],
    },
  ],

  howToTitle: "Cómo convertir un GIF a MP4",
  steps: [
    { title: "Agrega tu GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Elige repeticiones y fondo", description: "Repite los GIF cortos para que el video dure unos segundos y elige un fondo para las zonas transparentes." },
    { title: "Convierte y descarga", description: "Haz clic en «Convertir a MP4», mira la vista previa y descarga el video." },
  ],

  features: [
    { icon: "compress", title: "Archivos mucho más ligeros", description: "El MP4 guarda la misma animación en una fracción del tamaño del GIF." },
    { icon: "speed", title: "Se conservan los tiempos", description: "Las duraciones desiguales y las pausas se reproducen exactamente como en el GIF." },
    { icon: "lock", title: "Nada se sube", description: "Lo codifica tu propio navegador; el GIF nunca sale de tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo convierto un GIF a MP4?", a: "Agrega el GIF, elige cuántas veces debe reproducirse y un color de fondo, y haz clic en «Convertir a MP4»." },
    { q: "¿El MP4 pesa menos que el GIF?", a: "Normalmente mucho menos: varias veces, y a menudo más en los GIF detallados. Los dos tamaños se muestran después de la conversión." },
    { q: "¿Puedo publicar el MP4 en Instagram o TikTok?", a: "Sí. Esas aplicaciones aceptan video en lugar de GIF. Repite los GIF cortos para que el video dure unos segundos." },
    { q: "¿El MP4 se repetirá en bucle?", a: "Solo si el reproductor lo repite. Usa la opción de repetición para meter el bucle dentro del propio video." },
    { q: "¿Qué pasa con la transparencia?", a: "El MP4 no admite transparencia, así que las zonas transparentes reciben el color de fondo que elijas." },
    { q: "¿Por qué no funciona en mi navegador?", a: "Tu navegador no tiene codificador de video MP4. Usa Chrome, Edge o Safari." },
    { q: "¿El MP4 tiene sonido?", a: "No. Los GIF no tienen sonido, así que el video es mudo." },
    { q: "¿Se conservan los tiempos?", a: "Sí. Cada fotograma mantiene su propia duración, pausas incluidas." },
    { q: "¿Se sube mi GIF?", a: "No. La conversión ocurre por completo en tu navegador." },
    { q: "¿Puedo convertir varios GIF a la vez?", a: "De uno en uno, para que cada GIF tenga su propia vista previa, su número de repeticiones y su fondo." },
    { q: "¿Convertir GIF a MP4 es gratis?", a: "Sí. Sin cuenta, sin marca de agua en el video y sin límite en la cantidad de conversiones." },
  ],

  security:
    "Tu propio navegador decodifica el GIF y lo codifica como video. No se sube, no se guarda ni se rastrea nada.",

  ui: {
    // GifToMp4Tool.tsx
    "Select a GIF": "Seleccionar un GIF",
    "or drop a GIF here": "o suelta aquí un GIF",
    "Please select a GIF.": "Selecciona un GIF.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Processing failed.": "No se pudo procesar.",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "MP4 settings": "Ajustes del MP4",
    "Convert to MP4": "Convertir a MP4",
    "Download MP4": "Descargar MP4",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Your MP4 will appear here.": "Tu MP4 aparecerá aquí.",
    "GIF": "GIF", // i18n-same
    "MP4": "MP4", // i18n-same
    "{n} frames": "{n} fotogramas",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p} % más ligero",
    "{n}×": "{n}×", // i18n-same
    "Encoded by your browser as H.264 — plays everywhere.": "Codificado por tu navegador en H.264: se reproduce en todas partes.",
    "Play the animation": "Reproducir la animación",
    "Video doesn't loop by itself on most sites. Repeat a short GIF so the MP4 lasts a few seconds — {s} s now.":
      "En la mayoría de los sitios, el video no se repite solo. Repite un GIF corto para que el MP4 dure unos segundos; ahora dura {s} s.",
    "Background for transparent areas": "Fondo para las zonas transparentes",
    "Your GIF is converted in your browser and never uploaded.": "Tu GIF se convierte en tu navegador y nunca se sube.",
  },
};

export default content;
