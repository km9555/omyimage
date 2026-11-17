import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/png-a-jpg.
 *
 * Head term "PNG a JPG" (14.8K/mo) — Spanish converter queries take the
 * "X a Y" form. Secondary "convertir PNG a JPG", used in the intro, a heading
 * and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "png-to-jpg",
  locale: "es",
  name: "PNG a JPG",
  tagline:
    "Convierte imágenes PNG a JPG comprimido online, por lotes y con control de calidad y fondo. Gratis, rápido y privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "PNG a JPG – convertir gratis y online | oMyImage",
  metaDescription:
    "PNG a JPG gratis y sin registro: convierte PNG a JPG por lotes, con control de calidad y color de fondo para la transparencia. En tu navegador, sin subir nada.",

  intro:
    "PNG es ideal para gráficos, pero con fotos genera archivos enormes. Con el convertidor PNG a JPG de oMyImage puedes convertir PNG a JPG compacto y de alta calidad directamente en tu navegador, de uno en uno o por lotes. Elige la calidad y el color de fondo que sustituye la transparencia, y descarga. Sin subir archivos, sin esperas y sin registro.",

  sections: [
    {
      heading: "Cuándo conviene convertir PNG a JPG",
      id: "why",
      body: [
        "PNG no tiene pérdida, que es justo lo que quieres en un archivo de trabajo y a menudo un desperdicio en uno terminado. Una fotografía guardada como PNG lleva cada píxel completo, y eso suele significar varios megabytes donde un JPG visualmente idéntico ocuparía unos cientos de kilobytes. Si la imagen es una fotografía y va a una página web, a un correo o a un formulario de subida con límite de tamaño, convertirla suele ser el mayor ahorro posible.",
        "El otro motivo habitual es un límite estricto. Los portales de empleo, los formularios de trámites, los anuncios de tiendas en línea y los servicios de impresión suelen limitar las subidas a 1, 2 o 5 MB, y una captura del teléfono o una foto de cámara guardada como PNG supera ese límite de inmediato. Convertir a JPG con un 85 % de calidad normalmente lo resuelve sin ningún cambio visible.",
      ],
    },
    {
      heading: "Lo que pierdes",
      id: "tradeoffs",
      body: [
        "Dos cosas, y ambas importan en casos concretos. La primera es la transparencia: JPG no tiene canal alfa, así que todo lo transparente debe pintarse con un color sólido. Para una fotografía no hay problema; para un logotipo pensado para ir sobre un fondo de color, es fatal.",
        "La segunda es que JPG tiene pérdida, y de forma permanente. La conversión descarta detalle y ningún paso posterior lo recupera. Convertir un PNG que quizá tengas que volver a editar es un camino sin retorno: recórtalo, retócalo y guárdalo varias veces como JPG, y la degradación se acumula de forma visible. Conserva el PNG como original y trata el JPG como un resultado final.",
      ],
    },
    {
      heading: "Fotografías sí, gráficos normalmente no",
      id: "content",
      body: [
        "La compresión de JPG se diseñó para imágenes de tono continuo, donde el color cambia gradualmente a lo largo del encuadre. Las fotografías son exactamente eso, y por eso el formato funciona tan bien con ellas.",
        "El contenido con bordes nítidos es el caso contrario. Los logotipos, dibujos de líneas, diagramas, capturas de pantalla y todo lo que tenga texto presentan bordes de alto contraste, y JPG esparce leves artefactos alrededor de cada uno: el característico «ruido de mosquito» que se ve alrededor de las letras. Peor aún, como el codificador trata esos bordes como detalle importante, el archivo a menudo no queda mucho más pequeño. Para ese tipo de imagen, comprimir el PNG o convertirlo a WEBP da mejor resultado en ambos sentidos.",
      ],
    },
    {
      heading: "Cómo elegir el color de fondo",
      id: "background",
      body: [
        "Como la transparencia tiene que convertirse en algo, esta herramienta toma automáticamente, de forma predeterminada, el color que encuentra en los bordes de la propia imagen, lo que evita el típico rectángulo blanco alrededor de un motivo que nunca estuvo pensado para ir sobre blanco. Aun así, puedes elegir blanco, negro o cualquier color personalizado, algo útil cuando la imagen irá sobre una interfaz oscura o una tarjeta de color.",
        "Una advertencia: la transparencia de los PNG suele estar suavizada, es decir, los píxeles del borde son parcialmente transparentes. Esos píxeles se mezclan con el color que elijas, así que una imagen preparada para un fondo blanco y luego rellenada con negro puede mostrar un halo claro. Si eso ocurre, la solución más limpia es volver a exportar el original sobre el fondo correcto en lugar de pelearse con él aquí.",
      ],
    },
  ],

  howToTitle: "Cómo convertir PNG a JPG",
  steps: [
    { title: "Sube tus PNG", description: "Selecciona una o varias imágenes PNG, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Ajusta calidad y fondo", description: "Elige la calidad del JPG y el color que rellena las zonas transparentes." },
    { title: "Convierte y descarga", description: "Haz clic en Convertir: un PNG se descarga como JPG y varios se descargan juntos en un ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "PNG → JPG por lotes", description: "Convierte muchos PNG a JPG a la vez y descárgalos todos en un solo ZIP, ideal para aligerar carpetas de capturas de pantalla." },
    { icon: "compress", title: "Archivos más pequeños", description: "En fotos, JPG pesa mucho menos que PNG. Ajusta el control de calidad para llegar al tamaño que necesitas." },
    { icon: "lock", title: "Privado e instantáneo", description: "Todo se procesa localmente en tu navegador: tus PNG nunca salen de tu dispositivo." },
  ],

  faqs: [
    { q: "¿Por qué convertir PNG a JPG?", a: "Los archivos JPG son mucho más pequeños en imágenes fotográficas, así que se suben, se envían por correo y cargan en la web más rápido." },
    { q: "¿Qué pasa con las zonas transparentes del PNG?", a: "JPG no puede guardar transparencia, así que los píxeles transparentes se rellenan con un color de fondo. De forma predeterminada tomamos automáticamente el color de los bordes de la imagen; si prefieres otra cosa, elige blanco, negro o cualquier color personalizado." },
    { q: "¿Puedo convertir varios PNG a la vez?", a: "Sí. Agrega todos los PNG que quieras: varios archivos se descargan juntos en un archivo ZIP." },
    { q: "¿La conversión reduce la calidad?", a: "JPG tiene pérdida, pero con una calidad del 90 % o más la diferencia suele ser invisible, mientras que el archivo queda mucho más pequeño." },
    { q: "¿Cuánto más pequeño será el JPG?", a: "En fotografías, normalmente entre un 60 y un 90 % más pequeño. Una foto PNG de 4 MB suele quedar entre 300 KB y 1 MB como JPG. Los gráficos planos y las capturas de pantalla se benefician mucho menos y, a veces, incluso crecen: son los casos en los que PNG ya era el formato correcto." },
    { q: "¿Conviene pasar capturas de pantalla de PNG a JPG?", a: "Normalmente no. La compresión JPG funciona mal con bordes nítidos y texto pequeño, produce un leve halo alrededor de las letras, y las capturas suelen quedar más borrosas y no más pequeñas. Mejor comprime el PNG o conviértelo a WEBP." },
    { q: "¿Puedo volver a convertir de JPG a PNG más adelante?", a: "Puedes cambiar el formato, pero no recuperar lo que se descartó. El paso a JPG elimina detalle de forma permanente, y volver a PNG solo guarda sin pérdida la imagen ya degradada. Conserva el PNG original si quizá tengas que editarlo de nuevo." },
    { q: "¿Por qué mi JPG convertido pesa más que el PNG?", a: "Porque la imagen es del tipo que PNG maneja mejor: pocos colores distintos, zonas planas y bordes duros. PNG comprime eso con muchísima eficiencia, mientras que JPG tiene que guardar en cada borde el detalle que cree ver. Los logotipos y los diagramas son los casos típicos." },
    { q: "¿Se suben mis PNG?", a: "No. La conversión de PNG a JPG se hace por completo en tu navegador con HTML canvas. Tus archivos no se envían a ningún servidor, no se guardan y no se rastrean." },
    { q: "¿Qué calidad debo elegir para un formulario con límite de tamaño?", a: "Empieza con un 85 %. Si el archivo sigue superando el límite, baja de 5 en 5 hasta cumplirlo; en una foto normal, hasta un 70 % los cambios apenas se notan. Si tampoco basta, reduce además las dimensiones de la imagen con «Redimensionar imagen»." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La conversión de PNG a JPG se hace por completo en tu navegador con HTML canvas: no se sube nada. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // Drop hint from app/png-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG images here": "o suelta aquí imágenes PNG",
  },
};

export default content;
