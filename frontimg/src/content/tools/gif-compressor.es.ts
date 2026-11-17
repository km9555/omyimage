import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-gif.
 *
 * Target query «comprimir GIF» (2.9K) leads the h1; secondary «reducir tamaño
 * GIF» sits in the metaTitle, the intro, a heading and an FAQ. The ui block
 * is shared with gif-resizer and webp-to-gif, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-compressor",
  locale: "es",
  name: "Comprimir GIF",
  tagline:
    "Haz más ligeros tus GIF animados con menos colores, fotogramas más inteligentes y, si quieres, menos tamaño, sin que dejen de moverse. Compara el antes y el después y descarga. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Comprimir GIF – Reducir tamaño de GIF online | oMyImage",
  metaDescription:
    "Comprimir GIF gratis y reducir su tamaño: menos colores, fotogramas más eficientes y menos píxeles, sin perder la animación. Compara antes y después.",

  intro:
    "Los GIF animados crecen rápido, y un GIF pesado es justo el que los chats, los foros y el correo rechazan o cargan con lentitud. Con «Comprimir GIF» de oMyImage reduces el tamaño de un GIF reconstruyéndolo para que ocupe menos: guarda solo lo que cambia entre fotogramas, puede usar menos colores e ignorar parpadeos diminutos, y si necesitas más, puede descartar fotogramas o reducir las dimensiones. Elige «Ligera», «Media» o «Fuerte», mira el original y el resultado uno al lado del otro con sus tamaños y descarga el que prefieras.",

  sections: [
    {
      heading: "Por qué los GIF pesan tanto",
      id: "why",
      body: [
        "Un GIF es una pila de imágenes, cada una limitada a 256 colores y comprimida sin pérdida. El tamaño crece con tres cosas: cuántos píxeles tiene cada fotograma, cuántos fotogramas hay y cuánto cambia de un fotograma a otro. Un GIF hecho con un video del teléfono puede llegar fácilmente a decenas de megabytes por unos pocos segundos de movimiento.",
        "Además, muchos GIF están guardados de forma poco eficiente: cada fotograma completo aunque nada se mueva, o con una tabla de colores distinta en cada fotograma. Volver a codificar un archivo así de forma limpia suele ahorrar una buena parte antes de sacrificar nada de calidad.",
      ],
    },
    {
      heading: "Qué hace cada nivel",
      id: "levels",
      body: [
        "«Ligera» reconstruye el GIF con una sola paleta compartida de 256 colores y guarda solo los píxeles que cambian entre fotogramas. Es la que menos altera el aspecto y el primer intento adecuado para los GIF exportados con herramientas antiguas.",
        "«Media» usa 128 colores y trata las diferencias muy pequeñas entre fotogramas como si no hubiera cambio, lo que elimina el centelleo que hace tan pesados los GIF sacados de un video. «Fuerte» usa 64 colores, ignora parpadeos más grandes y conserva uno de cada dos fotogramas, sumando el tiempo de los descartados a los que se quedan para que la velocidad no cambie.",
        "Cada ajuste debajo de los niveles se puede cambiar por separado: la cantidad de colores, qué fotogramas conservar y el tamaño como porcentaje del original.",
      ],
    },
    {
      heading: "Reducir el tamaño de un GIF al máximo",
      id: "tips",
      body: [
        "El mayor ahorro suele venir de las dimensiones. Con la mitad de ancho y de alto queda una cuarta parte de los píxeles, y el archivo se reduce más o menos en la misma proporción. Si el GIF se va a ver pequeño de todos modos, en una burbuja de chat o en una barra lateral, elige 75 % o 50 %.",
        "Después vienen los fotogramas y los colores. Las animaciones sencillas, los logotipos y las grabaciones de pantalla se ven igual con 64 o incluso 32 colores; las fotos y los tonos de piel necesitan 128 o más. Conservar uno de cada dos fotogramas reduce el número a la mitad y va bien con movimientos lentos.",
      ],
    },
    {
      heading: "Cuando el resultado no es más ligero",
      id: "already",
      body: [
        "Un GIF que ya fue optimizado con una herramienta especializada quizá no baje de tamaño con «Ligera», porque no queda nada que quitar sin cambiar la imagen. La herramienta te avisa cuando pasa; prueba «Fuerte», menos colores o un tamaño menor, y compara el resultado antes de descargarlo.",
        "Si la animación tiene que verse nítida y pesar poco, piensa en convertirla a MP4. El video comprime el movimiento mucho mejor que el GIF y se reproduce en cualquier chat y en cualquier teléfono.",
      ],
    },
    {
      heading: "Transparencia y tiempos",
      id: "transparency",
      body: [
        "Los GIF transparentes conservan su transparencia. Como en GIF la transparencia es de sí o no, sin bordes suaves, el truco de guardar solo las diferencias entre fotogramas no se puede usar con ellos, así que se reducen menos que los GIF opacos; aun así, bajar los colores y el tamaño ayuda.",
        "Los tiempos de los fotogramas se mantienen exactamente, incluidas las duraciones desiguales, y el GIF se repite como antes. Las duraciones que los navegadores ya reproducen como 0,1 segundos se escriben así, de modo que la velocidad que ves no cambia.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir un GIF",
  steps: [
    { title: "Agrega tu GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Elige un nivel", description: "Selecciona «Ligera», «Media» o «Fuerte», o ajusta tú mismo los colores, los fotogramas y el tamaño." },
    { title: "Comprime y compara", description: "Haz clic en «Comprimir GIF», compara los tamaños uno al lado del otro y descarga." },
  ],

  features: [
    { icon: "compress", title: "GIF más ligeros", description: "Solo se guardan los píxeles que cambian, con la opción de usar menos colores, fotogramas o píxeles." },
    { icon: "visibility", title: "Antes y después", description: "Las dos versiones se reproducen una al lado de la otra con su tamaño de archivo." },
    { icon: "lock", title: "Nada se sube", description: "Tu GIF se comprime por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo reduzco el tamaño de un GIF?", a: "Agrega el GIF, elige «Media» o «Fuerte» y haz clic en «Comprimir GIF». Para ahorrar más, elige también un tamaño menor, como 75 % o 50 %." },
    { q: "¿Comprimir elimina fotogramas?", a: "Con «Ligera» y «Media», no. «Fuerte» conserva uno de cada dos fotogramas y suma el tiempo de los descartados a los que se quedan, para que la velocidad sea la misma." },
    { q: "¿Por qué mi GIF comprimido no pesa menos?", a: "Probablemente ya estaba optimizado. Prueba «Fuerte», menos colores o un tamaño menor." },
    { q: "¿Se conserva la transparencia?", a: "Sí. Los GIF transparentes siguen siendo transparentes, aunque se reducen menos que los opacos." },
    { q: "¿Cuántos colores debo conservar?", a: "64 bastan para logotipos, dibujos animados y grabaciones de pantalla; conserva 128 o 256 para fotos y caras." },
    { q: "¿Qué reduce un GIF más rápido?", a: "Hacerlo más pequeño en píxeles. Con la mitad de ancho y de alto queda más o menos una cuarta parte de los datos." },
    { q: "¿El GIF se sigue repitiendo en bucle?", a: "Sí. Se conservan el bucle y los tiempos de los fotogramas." },
    { q: "¿Debería usar MP4 en su lugar?", a: "Para animaciones largas o con mucho detalle, sí: el MP4 suele pesar mucho menos. Usa GIF donde no se acepte video." },
    { q: "¿Hay un límite de tamaño?", a: "No hay un límite fijo. Los GIF muy grandes tardan más, y el progreso se muestra mientras se procesan." },
    { q: "¿Se sube mi GIF?", a: "No. La compresión ocurre por completo en tu navegador." },
    { q: "¿Comprimir GIF es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límite en la cantidad de GIF que puedes reducir." },
  ],

  security:
    "Tu GIF se decodifica y se vuelve a codificar por completo en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  ui: {
    // GifTool.tsx — shared with gif-resizer and webp-to-gif, whose modules reuse this block.
    "Select a GIF": "Seleccionar un GIF",
    "Select a WEBP": "Seleccionar un WebP",
    "or drop a GIF here": "o suelta aquí un GIF",
    "or drop an animated WEBP here": "o suelta aquí un WebP animado",
    "Please select a GIF.": "Selecciona un GIF.",
    "Please select a WEBP image.": "Selecciona una imagen WebP.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Processing failed.": "No se pudo procesar.",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "GIF settings": "Ajustes del GIF",
    "Compress GIF": "Comprimir GIF",
    "Resize GIF": "Redimensionar GIF",
    "Convert to GIF": "Convertir a GIF",
    "Download GIF": "Descargar GIF",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Your GIF will appear here.": "Tu GIF aparecerá aquí.",
    "Original": "Original", // i18n-same
    "Result": "Resultado",
    "Output: {w} × {h} px": "Salida: {w} × {h} px",
    "Set a size": "Define un tamaño",
    "{n} frames": "{n} fotogramas",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p} % más ligero",
    "This GIF is already well optimised — try Strong, fewer colours or a smaller size.":
      "Este GIF ya está bien optimizado: prueba «Fuerte», menos colores o un tamaño menor.",
    "This WEBP isn't animated, so the GIF will be a single still image.":
      "Este WebP no es animado, así que el GIF será una sola imagen fija.",
    "Compression": "Compresión",
    "Stronger levels use fewer colours and skip tiny changes between frames.":
      "Los niveles más fuertes usan menos colores y omiten los cambios diminutos entre fotogramas.",
    "Colours": "Colores",
    "Frames": "Fotogramas",
    "Size": "Tamaño",
    "By percent": "Por porcentaje",
    "By pixels": "Por píxeles",
    "Percent": "Porcentaje",
    "Width (px)": "Ancho (px)",
    "Height (px)": "Alto (px)",
    "Keep aspect ratio": "Mantener proporción",
    "Every frame is resized and the timing stays the same.": "Se redimensiona cada fotograma y los tiempos no cambian.",
    "Every frame and its timing are kept. GIF has only 256 colours and no soft transparency, so gradients may band and semi-transparent edges become solid.":
      "Se conservan todos los fotogramas y sus tiempos. El GIF solo tiene 256 colores y no admite transparencia suave, así que los degradados pueden mostrar franjas y los bordes semitransparentes se vuelven sólidos.",
    "Your file is processed in your browser and never uploaded.": "Tu archivo se procesa en tu navegador y nunca se sube.",
    // LEVEL_LABEL / KEEP_LABEL (module scope)
    "Light": "Ligera",
    "Medium": "Media",
    "Strong": "Fuerte",
    "Keep all frames": "Conservar todos los fotogramas",
    "Keep every 2nd frame": "Conservar 1 de cada 2 fotogramas",
    "Keep every 3rd frame": "Conservar 1 de cada 3 fotogramas",
  },
};

export default content;
