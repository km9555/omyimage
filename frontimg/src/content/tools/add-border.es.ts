import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/agregar-borde-a-imagen.
 *
 * Primary query "Agregar borde a imagen"; secondary "marco para fotos".
 * "Paspartú" is the framing term for the inner mat, understood in Spain and
 * Latin America alike.
 */
const content: ToolPageContent = {
  toolId: "add-border",
  locale: "es",
  name: "Agregar borde a imagen",
  tagline:
    "Agrega un borde o marco de color a tus imágenes online, con grosor ajustable, esquinas redondeadas, vista previa en vivo y procesamiento por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Agregar borde a imagen – marco para fotos gratis | oMyImage",
  metaDescription:
    "Agrega un borde a tu imagen: marco para fotos online con color, grosor, esquinas redondeadas, paspartú y pie de foto. Por lotes, gratis y sin subir nada.",

  intro:
    "Enmarca tus fotos para darles un acabado limpio y terminado. La herramienta Agregar borde a imagen de oMyImage rodea cualquier imagen con un borde de color directamente en tu navegador, con control sobre el grosor, el color y las esquinas redondeadas y una vista previa en vivo. Un marco para fotos online, sin instalar programas: enmarca una sola imagen o un lote entero y descárgalo al instante. No se sube nada, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Para qué sirve realmente un borde",
      id: "why",
      body: [
        "La razón más práctica es la separación. Una fotografía con bordes claros colocada sobre una página blanca no tiene un límite visible: el cielo se funde con el fondo y la imagen deja de parecer un objeto. Un borde fino devuelve el contorno y la imagen se lee como algo intencionado, no como un error de maquetación.",
        "La segunda razón es el encaje. Las redes sociales, los marketplaces y los servicios de impresión suelen pedir una relación de aspecto concreta, y el remedio habitual es recortar. Rellenar con un borde te da esa proporción sin perder nada de la composición, algo importante cuando lo que habrías recortado era justo lo esencial de la foto.",
        "La tercera es la coherencia. Un conjunto de imágenes de cámaras distintas y de tamaños distintos, enmarcadas de la misma manera, empieza a parecer una colección y no un surtido.",
      ],
    },
    {
      heading: "Cómo elegir el grosor",
      id: "thickness",
      body: [
        "Piensa en porcentajes y no en píxeles, porque un borde de 20 píxeles destaca en una imagen de 600 píxeles y es invisible en una de 4000. Entre el dos y el cinco por ciento del ancho es el rango para un marco discreto que define el borde sin convertirse en protagonista.",
        "A partir del diez por ciento se lee como un paspartú, el margen ancho que se usa alrededor de las copias de galería y que da a la imagen aire y cierta formalidad. Es un estilo deliberado más que una opción por defecto, y funciona mejor en una fotografía cuidada que en una instantánea.",
        "Una cosa que conviene comprobar: si la imagen se va a mostrar mucho más pequeña que su tamaño original, un borde fino puede desaparecer por completo al reducirla. Pruébala al tamaño en que realmente se verá.",
      ],
    },
    {
      heading: "Rellenar hasta otra relación de aspecto",
      id: "aspect",
      body: [
        "Un borde desigual es la herramienta para que una fotografía encaje en un formato en el que no se tomó. Agrega relleno solo a los lados cortos y una foto horizontal 3:2 se convierte en un cuadrado 1:1 con el encuadre completo intacto.",
        "Así publica la mayoría de la gente fotos horizontales en feeds cuadrados sin perder los bordes de la composición, y así entran las fotos verticales en diapositivas panorámicas. La alternativa, recortar, siempre te cuesta algo, y a menudo ese algo es la razón por la que hiciste la foto.",
        "Elegir con cuidado el color del relleno hace que el resultado parezca diseñado y no parcheado. El blanco o el negro son apuestas seguras; tomar un color de la propia fotografía suele quedar mejor.",
      ],
    },
    {
      heading: "Elección del color",
      id: "colour",
      body: [
        "El blanco es el color por defecto por buenas razones: es el que usan los paspartús de galería y los bordes de impresión, y hace que las fotografías se vean más limpias. También desaparece sobre una página blanca, lo cual es justo lo que quieres o justo lo que intentabas evitar, así que revisa dónde se va a publicar.",
        "El negro va bien con imágenes de tonos oscuros, mucho contraste o aire cinematográfico, y le da peso a la fotografía. Un color de marca une un conjunto publicado y es la opción habitual para contenido de redes sociales que tiene que parecer que sale del mismo sitio.",
        "El relleno transparente, disponible al exportar en PNG o WEBP, es la opción que la gente olvida. Cambia la relación de aspecto sin añadir nada visible, y suele ser la respuesta correcta cuando la imagen va a ir en un diseño que ya pone su propio fondo.",
      ],
    },
  ],

  howToTitle: "Cómo agregar un borde a una imagen",
  steps: [
    { title: "Subir", description: "Selecciona una o varias imágenes, o arrástralas al área de trabajo." },
    { title: "Diseñar el borde", description: "Define el grosor, el color y, si quieres, las esquinas redondeadas con vista previa en vivo." },
    { title: "Aplicar y descargar", description: "Haz clic en «Agregar borde»: una imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "crop_din", title: "Grosor proporcional", description: "El tamaño del borde es un porcentaje del lado más corto, así que se ve igual de coherente en cualquier dimensión de imagen." },
    { icon: "rounded_corner", title: "Color y esquinas redondeadas", description: "Elige cualquier color de borde y redondea las esquinas interiores para un marco moderno y pulido." },
    { icon: "lock", title: "Por lotes y privado", description: "Enmarca un lote entero de una vez, todo en tu navegador: las imágenes nunca se suben." },
  ],

  faqs: [
    { q: "¿Cómo se mide el grosor?", a: "Como porcentaje del lado más corto de la imagen, de modo que el mismo ajuste da un borde proporcional en imágenes de cualquier tamaño." },
    { q: "¿Puedo redondear las esquinas?", a: "Sí. El control de radio de esquina redondea las esquinas interiores de la imagen contra el borde para un aspecto más suave." },
    { q: "¿Puedo agregar bordes a muchas imágenes a la vez?", a: "Sí. Agrega todas las que quieras: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿Por qué agregar un borde a una foto?", a: "Tres razones habituales: evitar que una imagen clara se funda con una página clara para que se lea como un objeto definido, hacer que una foto no cuadrada encaje en un espacio cuadrado sin recortar nada, y dar a un conjunto de imágenes un acabado uniforme." },
    { q: "¿Cómo encajo una foto en una publicación cuadrada sin recortarla?", a: "Agrega un borde desigual: relleno en los lados cortos hasta que el total sea cuadrado. No se corta nada; la imagen simplemente queda dentro de un marco. Es la forma estándar de publicar una foto horizontal o vertical en un feed cuadrado conservando toda la composición." },
    { q: "¿Qué color de borde queda mejor?", a: "Blanco para un aspecto limpio de galería, negro para fotos de tonos oscuros o aire cinematográfico, y un color de marca para todo lo que se publique como serie. Si la foto va sobre una página de color, un borde de ese mismo color hace que parezca sin borde y aun así le da aire a la imagen." },
    { q: "¿Qué grosor debe tener el borde?", a: "Entre el dos y el cinco por ciento del ancho de la imagen para un marco discreto: suficiente para definir el borde sin convertirse en un elemento de diseño. Del diez por ciento en adelante se lee como un paspartú deliberado, como el de las copias impresas y las paredes de galería. Los bordes finos en imágenes muy grandes pueden desaparecer por completo al reducir la imagen." },
    { q: "¿Agregar un borde cambia las dimensiones de la imagen?", a: "Sí. El borde se añade alrededor de la imagen, no se dibuja encima, así que el resultado es más grande que el original en el doble del grosor del borde en cada dirección. Si necesitas un tamaño final exacto, primero reduce la imagen y deja que el borde la haga crecer de nuevo." },
    { q: "¿Puedo usar un borde transparente?", a: "Sí, si exportas en PNG o WEBP. En la práctica eso rellena la imagen con espacio vacío, algo útil cuando necesitas cambiar la relación de aspecto para un diseño sin añadir un marco visible." },
    { q: "¿Puedo poner un pie de foto debajo de la imagen?", a: "Sí. Activa el pie de foto y el borde inferior se ensancha para dejarle espacio, como en una Polaroid. En un lote, cada imagen lleva su propio nombre de archivo como pie de foto, a menos que escribas un texto; en ese caso se usa para todas." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El borde se agrega por completo en tu navegador con canvas HTML: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // AddBorderTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "Added a border to 1 image.": "Se agregó un borde a 1 imagen.",
    "Added a border to {n} images.": "Se agregó un borde a {n} imágenes.",
    "Adding the border failed.": "No se pudo agregar el borde.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "done": "listo",
    "Remove": "Quitar",
    "Clear files": "Borrar archivos",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Border settings": "Ajustes del borde",
    "Border Settings": "Ajustes del borde",
    "Add border": "Agregar borde",
    "Adding…": "Agregando…",
    "Live preview of": "Vista previa en vivo de",
    "— applied to all {n} images.": "— se aplica a las {n} imágenes.",
    "Add border to {n}": "Agregar borde a {n}",
    "Add border & download": "Agregar borde y descargar",
    "Presets": "Ajustes predefinidos",
    "Aspect ratio": "Relación de aspecto",
    "The frame grows to reach the shape — the photo is never cropped.":
      "El marco crece hasta alcanzar el formato: la foto nunca se recorta.",
    "Style": "Estilo",
    "Thickness": "Grosor",
    "As a percentage of the image's shortest side, so it scales with any size.":
      "Como porcentaje del lado más corto de la imagen, para que se adapte a cualquier tamaño.",
    "Corner radius": "Radio de esquina",
    "Extra depth below": "Margen extra abajo",
    "A deeper bottom edge, the way a Polaroid has one.":
      "Un borde inferior más ancho, como el de una Polaroid.",
    "Border colour": "Color del borde",
    "Inner mat": "Paspartú",
    "The thin second frame between the photo and the border, as in a mounted print.":
      "El segundo marco fino entre la foto y el borde, como en una copia montada.",
    "Mat width": "Ancho del paspartú",
    "Mat colour": "Color del paspartú",
    "Caption": "Pie de foto",
    "Caption text": "Texto del pie de foto",
    "Text size": "Tamaño del texto",
    "Each image is captioned with its own filename. Type something to use one caption for all of them.":
      "Cada imagen lleva su propio nombre de archivo como pie de foto. Escribe algo para usar un mismo pie de foto en todas.",
    "Drawn in the band below the photo, which deepens to make room.":
      "Se dibuja en la franja bajo la foto, que se ensancha para dejarle espacio.",
    "Transparent background": "Fondo transparente",
    "Leaves everything outside the frame empty instead of filled, so the framed photo can sit on any background. The corners follow the Corner radius slider, and an aspect ratio leaves empty space around the frame rather than a thicker border.":
      "Deja vacío todo lo que queda fuera del marco en lugar de rellenarlo, para que la foto enmarcada pueda ir sobre cualquier fondo. Las esquinas siguen el control «Radio de esquina», y una relación de aspecto deja espacio vacío alrededor del marco en lugar de un borde más grueso.",
    "{format} cannot store transparency — the empty areas will export as solid black. Choose PNG or WEBP.":
      "{format} no admite transparencia: las zonas vacías se exportarán en negro sólido. Elige PNG o WEBP.",
    "Saved as {format}, which can store transparency. Raise Corner radius to round the frame's outer edge.":
      "Se guarda como {format}, que admite transparencia. Sube el radio de esquina para redondear el borde exterior del marco.",
    "Save as": "Guardar como",
    "Quality": "Calidad",
  },
};

export default content;
