import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/convertir-a-png.
 *
 * Head term "Convertir a PNG" (5.4K ES / 9.9K MX) — Spanish converter queries
 * take the "X a Y" form. "Convertir imagen a PNG" is the secondary, used in
 * the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-png",
  locale: "es",
  name: "Convertir a PNG",
  tagline:
    "Convierte imágenes JPG, WEBP, GIF y BMP a PNG online: sin pérdida, con la transparencia intacta y por lotes. Gratis y privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Convertir a PNG – sin pérdida y gratis | oMyImage",
  metaDescription:
    "Convertir a PNG gratis: pasa JPG, WEBP, GIF y BMP a PNG sin pérdida y con la transparencia intacta. Convertir imagen a PNG por lotes, sin registro.",

  intro:
    "PNG es el formato al que conviertes cuando la imagen tiene que quedarse exactamente como está: sin más compresión, sin nuevos artefactos y con la transparencia intacta. Con la herramienta Convertir a PNG de oMyImage puedes convertir imagen a PNG directamente en tu navegador: archivos JPG, WEBP, GIF y BMP, una sola imagen o una carpeta entera a la vez, descargados juntos en un ZIP. Como PNG no tiene pérdida, lo que sale es píxel por píxel lo que entró, y cada edición y cada guardado posterior lo mantienen así.",

  sections: [
    {
      heading: "Cuándo conviene convertir imagen a PNG",
      id: "why",
      body: [
        "La mayoría de las conversiones a PNG caen en cuatro grupos. El primero es la edición: un JPG o WEBP con pérdida pierde un poco más de detalle cada vez que se guarda, así que se convierte una vez a PNG y todo el recorte, el retoque y las anotaciones se hacen sobre un archivo que no puede degradarse. El segundo es el contenido nítido —capturas de pantalla, diagramas, gráficos, formularios escaneados y todo lo que tenga texto pequeño—, donde PNG mantiene cada borde definido y JPG añadiría un halo gris alrededor de cada letra.",
        "El tercero es la transparencia. Logotipos, stickers, iconos y recortes de productos tienen que poder ir sobre cualquier fondo, y PNG es el formato compatible en todas partes que puede llevar una capa transparente. El cuarto es la simple compatibilidad: herramientas de diseño, plantillas de documentos, motores de videojuegos y muchos formularios de subida piden PNG específicamente, y un WEBP guardado de una página web es justo el archivo que rechazan.",
      ],
    },
    {
      heading: "Por qué el PNG pesa más que el JPG",
      id: "bigger",
      body: [
        "Una foto de teléfono de 300 KB suele convertirse en un PNG de 2 a 4 MB, y eso es lo esperado, no un fallo. JPG y WEBP con pérdida consiguen sus tamaños pequeños descartando detalle que el ojo difícilmente echa de menos; PNG no puede descartar nada, así que tiene que guardar cada píxel, incluido todo el ruido fino de una fotografía.",
        "La regla general es sencilla. Para fotografías, PNG es la copia de trabajo segura y JPG o WEBP es el formato para compartir. Para capturas, gráficos y todo lo que tenga colores planos, PNG suele ser el más pequeño de los tres además del más nítido, porque las grandes áreas de un mismo color se comprimen muy bien sin ninguna pérdida.",
      ],
    },
    {
      heading: "Convertir no deshace la compresión",
      id: "not-restore",
      body: [
        "Convertir un JPG a PNG conserva la imagen tal como está ahora; no recupera lo que el JPG ya descartó. Los cielos con bloques, el detalle fino emborronado y el leve halo alrededor del texto se copian fielmente al PNG. Lo que ganas es que nada de eso empeore a partir de ahora.",
        "Si tienes el original —un RAW de la cámara, un archivo de diseño, la captura tal como se hizo—, exporta el PNG desde ahí. Si el JPG es lo único que tienes y está visiblemente dañado, las herramientas para mejorar la calidad y la nitidez pueden suavizar lo peor, pero ninguna conversión de formato lo hará.",
      ],
    },
    {
      heading: "Transparencia de entrada y de salida",
      id: "transparency",
      body: [
        "Los archivos WEBP, GIF y algunos BMP pueden tener zonas transparentes, y esas zonas pasan al PNG exactamente igual, incluidos los píxeles suaves y parcialmente transparentes de los bordes suavizados. No se aplana nada y no hay que elegir color de fondo.",
        "Un JPG, en cambio, no tiene transparencia que trasladar: su fondo blanco son píxeles blancos de verdad. Al convertirlo a PNG, ese blanco se mantiene. Para que el fondo sea transparente, pasa primero la imagen por «Quitar fondo», que entrega directamente un PNG transparente.",
      ],
    },
    {
      heading: "Archivos GIF y BMP de origen",
      id: "gif-bmp",
      body: [
        "Un GIF animado se convierte en su primer fotograma, porque un PNG contiene una sola imagen fija. Si necesitas un fotograma concreto, divide primero el GIF en imágenes y quédate con el que quieras. Un GIF fijo se convierte sin ningún cambio de aspecto, y el PNG queda libre del límite de 256 colores del GIF para cualquier edición posterior.",
        "BMP es el caso contrario: guarda los píxeles sin ninguna compresión, así que la misma imagen en PNG suele ser varias veces más pequeña con exactamente los mismos píxeles. Convertir escaneos y capturas antiguas en BMP a PNG es una de las pocas conversiones que ahorra espacio sin costo alguno.",
      ],
    },
    {
      heading: "Datos de la cámara y color",
      id: "metadata",
      body: [
        "De forma predeterminada, los datos EXIF y XMP del original —fecha de captura, modelo de cámara y, si existe, la ubicación GPS— se copian al PNG. Marca «Eliminar metadatos» para omitirlo todo, algo recomendable antes de compartir una foto públicamente. La imagen se convierte en sRGB, el espacio de color que asume cualquier pantalla y navegador, así que en una pantalla normal los colores del PNG se ven igual que en el original.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen a PNG",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes JPG, WEBP, GIF o BMP, o arrástralas y suéltalas." },
    { title: "Elige las opciones", description: "Conserva o elimina los metadatos de la cámara y deja activada la rotación automática para las fotos del teléfono." },
    { title: "Convierte y descarga", description: "Haz clic en Convertir: un PNG se descarga directamente y varios se descargan juntos en un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Salida sin pérdida", description: "Cada píxel se conserva exactamente, así que las ediciones y guardados posteriores nunca degradan la imagen." },
    { icon: "burst_mode", title: "Conversión por lotes", description: "Convierte una carpeta entera de archivos JPG, WEBP, GIF o BMP a la vez y recibe un solo ZIP." },
    { icon: "lock", title: "Privado de forma predeterminada", description: "Las imágenes se convierten en tu navegador; solo los archivos muy grandes se procesan en nuestro servidor." },
  ],

  faqs: [
    { q: "¿Qué formatos puedo convertir a PNG?", a: "JPG, WEBP, GIF y BMP. En los GIF se convierte el primer fotograma. HEIC y AVIF tienen sus propios convertidores porque requieren un tratamiento distinto." },
    { q: "¿Convertir a PNG mejora la calidad?", a: "No. Mantiene la imagen exactamente como está ahora. PNG evita más pérdidas, pero no puede recuperar el detalle que un JPG ya descartó." },
    { q: "¿Por qué mi PNG pesa mucho más que el JPG?", a: "PNG no tiene pérdida, así que guarda cada píxel de una fotografía, ruido incluido. Que una foto ocupe entre cinco y diez veces más es normal. Las capturas de pantalla y los gráficos siguen siendo ligeros." },
    { q: "¿Se conserva la transparencia?", a: "Sí. Las zonas transparentes y semitransparentes de los archivos WEBP, GIF o BMP pasan al PNG sin cambios. Un JPG no tiene transparencia, así que su fondo se queda como está." },
    { q: "¿Cómo hago transparente el fondo?", a: "Al convertir un JPG a PNG se conserva su fondo. Usa primero «Quitar fondo»: entrega un PNG con fondo transparente." },
    { q: "¿Puedo convertir imagen a PNG por lotes?", a: "Sí. Agrega todas las que quieras. Una sola imagen se descarga como PNG; varias se descargan juntas en un archivo ZIP." },
    { q: "¿Se conservan mis datos EXIF?", a: "De forma predeterminada, sí: la fecha de captura, la cámara y la ubicación GPS se trasladan si el original las tiene. Marca «Eliminar metadatos» para quitarlo todo." },
    { q: "¿Uso PNG o JPG para las fotos?", a: "Usa PNG como copia de trabajo mientras editas, y JPG o WEBP para compartir o subir. PNG es mejor opción para capturas de pantalla, texto y gráficos." },
    { q: "¿Se suben mis imágenes?", a: "Normalmente no: la conversión se hace en tu navegador. Solo una imagen demasiado grande para tu navegador se envía a nuestro servidor, se convierte allí y se elimina de inmediato." },
    { q: "¿Funciona en el teléfono?", a: "Sí. La herramienta funciona en navegadores de teléfonos Android y iPhone; elige las imágenes de tu galería y los PNG se guardan en tus descargas." },
    { q: "¿Necesito registrarme o instalar algo?", a: "No. Convertir a PNG es gratis, sin registro, sin marca de agua y sin instalar ningún programa: basta con abrir la página en cualquier navegador moderno." },
  ],

  security:
    "Tus imágenes se convierten a PNG en tu navegador con HTML canvas. Solo una imagen demasiado grande para el navegador —de más de 100 MB o por encima de su límite de canvas— se procesa en nuestro servidor, y se elimina justo después de la conversión. No se guarda nada y no se rastrea ningún archivo.",

  ui: {
    // Drop hint from app/convert-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG, WEBP, GIF or BMP images here": "o suelta aquí imágenes JPG, WEBP, GIF o BMP",
  },
};

export default content;
