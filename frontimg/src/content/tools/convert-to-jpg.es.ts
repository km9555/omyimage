import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/convertir-a-jpg.
 *
 * Head term "Convertir a JPG" (9.9K ES / 12.1K MX) — Spanish converter queries
 * take the "X a Y" form. "Convertir imagen a JPG" is the secondary, used in
 * the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-jpg",
  locale: "es",
  name: "Convertir a JPG",
  tagline:
    "Convierte imágenes PNG, WEBP, GIF y BMP a JPG online, por lotes y con control de calidad. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Convertir a JPG – gratis y online | oMyImage",
  metaDescription:
    "Convertir a JPG gratis y sin registro: pasa PNG, WEBP, GIF y BMP a JPG por lotes, con control de calidad, directo en tu navegador. Convertir imagen a JPG fácil.",

  intro:
    "¿Necesitas imágenes ligeras que funcionen en todas partes? Con la herramienta Convertir a JPG de oMyImage puedes convertir cualquier imagen a JPG: los archivos PNG, WEBP, GIF y BMP se transforman en JPG de alta calidad directamente en tu navegador. Convierte una sola imagen o un lote completo, elige la calidad y el color de fondo que sustituye la transparencia. Todo se ejecuta en tu dispositivo, así que es instantáneo y privado.",

  sections: [
    {
      heading: "¿Por qué convertir imagen a JPG?",
      id: "why",
      body: [
        "Casi todo el que convierte a JPG está resolviendo un problema de compatibilidad, no tomando una decisión estética. Un formulario rechaza el archivo, una imprenta no lo acepta, un programa antiguo no lo abre o un adjunto de correo tiene que quedar por debajo de cierto tamaño. JPG es el formato que termina con esas discusiones: tiene tres décadas, no está atado a patentes y todo lo puede leer.",
        "La segunda razón es el peso. PNG y BMP, sobre todo, guardan muchos más datos de los que necesita una fotografía, y al convertir a JPG el archivo suele reducirse un 80 % o más sin ningún cambio visible con una calidad razonable. Para cualquier cosa que vayas a enviar por correo, subir o mostrar en una página web, esa es la diferencia entre un archivo que funciona y uno que no.",
      ],
    },
    {
      heading: "Lo que JPG no puede hacer",
      id: "limits",
      body: [
        "JPG no admite transparencia. El formato no tiene canal alfa, así que todo lo que sea transparente debe pintarse con un color sólido antes de guardar. Para una fotografía no hay problema; para un logotipo pensado para ir sobre un fondo de color, es un error.",
        "Además, un JPG contiene exactamente una imagen, por lo que la animación se pierde: un GIF o WebP animado se convierte en su primer fotograma. Y como es un formato con pérdida, cada vez que se guarda descarta un poco más de detalle. Convierte una sola vez desde la mejor fuente que tengas y conserva ese original por si necesitas editar más adelante.",
        "Por último, JPG no es buena opción para contenido con bordes nítidos. Las capturas de pantalla, los diagramas, los dibujos de líneas y todo lo que tenga texto pequeño adquieren un leve halo alrededor de cada borde y, a menudo, ni siquiera ocupan menos. Para esas imágenes, PNG o WEBP es mejor destino.",
      ],
    },
    {
      heading: "Cómo elegir la calidad",
      id: "quality",
      body: [
        "El control de calidad decide con cuánta agresividad se descarta el detalle. Entre el 85 y el 92 % la compresión es prácticamente invisible y el archivo sigue siendo mucho más pequeño que el original: empieza ahí, salvo que tengas un motivo para no hacerlo.",
        "Sube al 95 % o más en imágenes que se van a imprimir, ampliar o examinar de cerca; el archivo crece rápido por una diferencia que casi nadie ve en pantalla, pero la impresión no perdona. Baja al 70–80 % cuando necesites cumplir un límite de tamaño estricto y se trate de una fotografía normal. Por debajo de eso aparecen bloques visibles, primero en cielos, tonos de piel y cualquier degradado suave.",
      ],
    },
    {
      heading: "Qué color rellena la transparencia",
      id: "background",
      body: [
        "Como la transparencia tiene que convertirse en algo, esta herramienta toma automáticamente, de forma predeterminada, el color que encuentra en los bordes de la propia imagen: no tienes que elegir nada y no aparece un rectángulo blanco alrededor de un motivo que nunca estuvo pensado para ir sobre blanco. Blanco, negro o cualquier color personalizado están a un clic si quieres otra cosa, por ejemplo para que coincida con una interfaz oscura o una tarjeta de color.",
        "Un detalle a tener en cuenta: la transparencia de PNG y WebP suele estar suavizada, es decir, los píxeles del borde son parcialmente transparentes y se mezclan con el color que elijas. Una imagen preparada sobre blanco y luego rellenada con negro puede mostrar un halo claro. Si aparece, es más limpio volver a exportar el original sobre el fondo correcto que intentar corregirlo después.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen a JPG",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes PNG, WEBP, GIF o BMP, o arrástralas y suéltalas." },
    { title: "Ajusta las opciones", description: "Elige la calidad del JPG y el color de fondo con el que se aplana la transparencia." },
    { title: "Convierte y descarga", description: "Haz clic en Convertir: un solo JPG se descarga al instante y varios se descargan juntos en un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Conversión por lotes", description: "Convierte decenas de imágenes PNG, WEBP, GIF o BMP a JPG a la vez y descárgalas todas en un solo ZIP." },
    { icon: "tune", title: "Control de calidad", description: "Elige la calidad del JPG entre el 50 % y el 100 % para equilibrar el tamaño del archivo y la fidelidad visual." },
    { icon: "lock", title: "100 % privado", description: "La conversión se ejecuta en tu navegador con HTML canvas, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Qué formatos puedo convertir a JPG?", a: "PNG, WEBP, GIF y BMP. En los GIF se convierte el primer fotograma." },
    { q: "¿Qué pasa con la transparencia?", a: "JPG no admite transparencia, así que las zonas transparentes se rellenan con un color de fondo. De forma predeterminada tomamos automáticamente el color de los bordes de la imagen; si prefieres otra cosa, elige blanco, negro o cualquier color personalizado." },
    { q: "¿Puedo convertir muchas imágenes a la vez?", a: "Sí. Agrega todas las que quieras: una sola imagen se descarga como JPG y varias se descargan juntas en un ZIP." },
    { q: "¿Convertir imagen a JPG aquí es realmente gratis y privado?", a: "Sí. No hay registro ni marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿El JPG conserva mis datos EXIF y de la cámara?", a: "De forma predeterminada, sí: los datos EXIF o XMP del original se copian al JPG, incluidos la fecha de captura, el modelo de cámara y las coordenadas GPS si existen. Marca «Eliminar metadatos» para omitirlo todo, junto con el perfil de color. Ten en cuenta que los archivos PNG, GIF y BMP rara vez llevan EXIF, así que en la mayoría de los casos no hay nada que conservar." },
    { q: "¿Se conserva el perfil de color?", a: "No, y es intencional. Al convertir, la imagen se decodifica a sRGB, así que trasladar el perfil original describiría mal los nuevos píxeles y alteraría los colores. El JPG se guarda en sRGB, que es lo que cualquier visor supone de todos modos, y el perfil sRGB incrustado se elimina por completo si marcas «Eliminar metadatos»." },
    { q: "¿Desde qué formatos puedo convertir?", a: "PNG, WEBP, GIF y BMP. Son los formatos que un navegador decodifica de forma nativa, y eso es lo que permite que la conversión ocurra en tu dispositivo. HEIC y AVIF tienen páginas propias porque requieren un tratamiento distinto." },
    { q: "¿Por qué JPG sigue siendo el formato más seguro?", a: "Porque tiene treinta años, está libre de patentes y está implementado en prácticamente todo el software que alguna vez ha mostrado una imagen. Los formatos más nuevos comprimen mejor, pero «mejor» no sirve de nada si el sistema al que subes el archivo lo rechaza." },
    { q: "¿Qué calidad debo usar?", a: "Entre el 85 y el 92 % sirve para casi todo. Sube más en fotografías que vas a imprimir o en las que un cliente hará zoom. Por debajo del 70 % empiezan a verse bloques en cielos y degradados suaves, y ahí la gente nota la compresión en lugar de la imagen." },
    { q: "¿Puedo convertir un GIF animado?", a: "Obtienes su primer fotograma como JPG fijo. Un JPG contiene una sola imagen, así que la animación no puede conservarse. Si necesitas un fotograma concreto, extráelos todos primero con la herramienta GIF a imágenes y convierte el que quieras." },
    { q: "¿Hay un límite de archivos?", a: "No hay un límite fijo. Una sola imagen se descarga directamente; varias se empaquetan en un ZIP. Los lotes grandes solo tardan un poco más, y la pestaña sigue siendo usable mientras se procesan." },
    { q: "¿Se suben mis imágenes?", a: "Normalmente no: la conversión a JPG se hace en tu navegador. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se procesa en nuestro servidor y se elimina en aproximadamente una hora." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La conversión a JPG se hace en tu navegador con HTML canvas: sin almacenamiento y sin rastreo de tus archivos. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora.",

  ui: {
    // Drop hint from app/convert-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG, WEBP, GIF or BMP images here": "o suelta aquí imágenes PNG, WEBP, GIF o BMP",
  },
};

export default content;
