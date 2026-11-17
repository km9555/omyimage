import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/redimensionar-firma (signature-resizer). Target
 * query: «Redimensionar firma», secondary «firma digital en imagen». Same
 * in-browser engine as /signature-resizer (lib/image/signature.ts).
 */
const content: ToolPageContent = {
  toolId: "signature-resizer",
  locale: "es",
  name: "Redimensionar firma",
  tagline:
    "Convierte la foto de tu firma tomada con el teléfono en un archivo limpio y listo para formularios: fondo blanco, tinta sólida, bordes recortados, el tamaño exacto en píxeles o centímetros y un archivo de entre 10 y 20 KB, o el rango que necesites. Gratis y privado, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Redimensionar firma – fondo blanco, gratis | oMyImage",
  metaDescription:
    "Redimensionar firma gratis y sin registro: tu firma digital en imagen con fondo blanco, tamaño exacto en px o cm y el peso en KB que pide tu formulario en línea.",

  intro:
    "Los formularios en línea son estrictos con la firma: tinta negra o azul sobre papel blanco, un tamaño fijo como 140 × 60 píxeles y un peso de archivo entre, por ejemplo, 10 y 20 KB. Una foto tomada con el teléfono falla en todo: papel gris, una sombra en una esquina, demasiados píxeles y un archivo cien veces más pesado de la cuenta. Esta herramienta lo arregla todo de una vez y te deja tu firma digital en imagen: blanquea el papel y oscurece la tinta, recorta el espacio vacío, ajusta la firma al tamaño que elijas y guarda un JPG dentro del rango de KB, sin que tu firma salga nunca de tu dispositivo.",

  sections: [
    {
      heading: "Qué piden los formularios",
      id: "requirements",
      body: [
        "Los portales de reclutamiento de bancos y de otras entidades en la India suelen pedir una firma de 140 × 60 píxeles en un archivo de entre 10 y 20 KB. Otros formularios dan el tamaño en centímetros, como 4 × 2 cm o 6 × 2 cm, y algunos solo fijan un límite de peso. Casi todos quieren tinta oscura sobre papel blanco liso, y muchos rechazan una firma escrita en mayúsculas.",
        "Elige el tamaño que corresponda en «Tamaño de salida» —los tamaños en centímetros se dibujan a 300 DPI y se guardan con ese valor, para que se impriman al tamaño indicado— y selecciona el rango de KB que indica el formulario. Para un tamaño que no está en la lista, elige «Tamaño personalizado» y escribe el ancho y el alto en píxeles.",
      ],
    },
    {
      heading: "Firmar y fotografiar",
      id: "photographing",
      body: [
        "Firma tres o cuatro veces en papel blanco liso con una pluma o bolígrafo negro o azul oscuro, y elige la mejor. Un bolígrafo común sirve; uno de gel o un plumón da una línea más oscura y pareja que resiste mejor la compresión.",
        "Fotografía el papel con luz de día y justo desde arriba, con el teléfono paralelo a la hoja para que la firma no se deforme. Haz que la firma ocupe la mayor parte del encuadre —la herramienta recorta el resto— y evita que tu propia sombra caiga sobre el papel. Un escáner de cama plana funciona igual de bien.",
      ],
    },
    {
      heading: "Cómo se limpia el fondo de la firma",
      id: "cleaning",
      body: [
        "En una foto, el papel nunca es blanco de verdad y casi nunca tiene el mismo tono de un lado a otro. En lugar de un único umbral para toda la imagen, la herramienta estima lo claro que es el papel alrededor de cada punto y compara cada píxel con su propio entorno. El papel queda blanco puro, el trazo queda sólido y una sombra en una esquina desaparece en vez de convertirse en una mancha gris.",
        "La «Intensidad de limpieza» decide cuánto gris claro cuenta como papel. Súbela si quedan puntitos o una sombra tenue; bájala si los extremos finos de tus trazos empiezan a cortarse. El «Color de tinta» puede ser negro puro, un azul oscuro o el color original de tu pluma.",
      ],
    },
    {
      heading: "Tamaños y límites de archivo",
      id: "limits",
      body: [
        "La firma se escala para caber dentro del tamaño elegido sin deformarse y se centra sobre fondo blanco. Con un máximo, la calidad del JPG se fija tan alta como lo permite el límite. Con un mínimo —la mitad «al menos 10 KB» de un rango—, una firma pequeña y limpia suele ser demasiado simple para llegar a esa cifra por sí sola, así que primero se sube la calidad al máximo.",
        "Si un tamaño diminuto como 140 × 60 píxeles sigue por debajo del mínimo con la calidad al tope, el archivo se rellena con un bloque de datos vacío hasta alcanzarlo. La firma en sí no cambia ni un píxel; la página te avisa cuando ocurre.",
        "Los dos extremos de un rango se interpretan del lado seguro: «al menos 10 KB» se convierte en al menos 10.240 bytes y «como máximo 20 KB» en como máximo 20.000, así que el archivo pasa tanto si el formulario cuenta un kilobyte como 1000 bytes como si lo cuenta como 1024.",
      ],
    },
  ],

  howToTitle: "Cómo redimensionar una firma para un formulario en línea",
  steps: [
    { title: "Agrega una foto de tu firma", description: "Una foto o un escaneo de tu firma sobre papel blanco: JPG, PNG o WEBP." },
    { title: "Elige el tamaño y el rango de KB", description: "Elige 140 × 60 px, un tamaño en centímetros o uno propio, y el rango de peso que pide el formulario." },
    { title: "Descarga el JPG", description: "Revisa la vista previa y descarga una firma limpia, lista para subir." },
  ],

  features: [
    { icon: "draw", title: "Fondo blanco limpio", description: "Se quitan las sombras y el papel gris, y la tinta queda sólida: en negro, en azul o en su propio color." },
    { icon: "crop", title: "Tamaño exacto", description: "140 × 60 px, 4 × 2 cm, 6 × 2 cm o cualquier tamaño, después de recortar el espacio vacío." },
    { icon: "lock", title: "Nunca se sube", description: "Tu firma se procesa en tu navegador y se queda en tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo dejo mi firma entre 10 y 20 KB?", a: "Agrega una foto de tu firma y elige el rango de 10 a 20 KB en «Tamaño del archivo», junto con el tamaño en píxeles que pide tu formulario. El JPG descargado queda dentro del rango." },
    { q: "¿De qué tamaño debe ser una firma para formularios en línea?", a: "El que indique el formulario. 140 × 60 píxeles y 10–20 KB es un requisito común en los portales de reclutamiento de la India; otros formularios usan tamaños en centímetros como 4 × 2 cm. Revisa las instrucciones y elige aquí los mismos valores." },
    { q: "¿Cómo pongo blanco el fondo de mi firma?", a: "Deja activada la opción «Limpiar el fondo». El papel queda blanco puro y la tinta sólida, aunque la foto se haya tomado con luz irregular." },
    { q: "¿Puedo dejar mi firma en tinta azul?", a: "Sí. Elige «Azul» para un azul oscuro parejo, u «Original» para conservar el color de tu pluma. Elige «Negro» si el formulario pide tinta negra." },
    { q: "¿Por qué mi firma se ve cortada después de limpiarla?", a: "La limpieza es demasiado fuerte para una línea fina o clara. Baja la «Intensidad de limpieza» o vuelve a firmar con una pluma más oscura." },
    { q: "¿Por qué se rellenó mi archivo?", a: "Una firma pequeña y limpia puede ser más simple de lo que permite el tamaño mínimo del formulario. Tras subir la calidad al máximo, la herramienta agrega datos vacíos hasta alcanzar el mínimo; la imagen en sí no cambia." },
    { q: "¿Puedo usar una firma escaneada?", a: "Sí. Un escaneo es ideal: luz pareja y una hoja plana. Agrega el escaneo y la herramienta lo recorta y redimensiona de la misma manera." },
    { q: "¿Se sube mi firma a algún lugar?", a: "No. La limpieza, el redimensionado y el guardado ocurren en tu navegador; la firma nunca sale de tu dispositivo." },
    { q: "¿Puedo insertar la imagen de mi firma en un documento de Word o en un PDF?", a: "Sí. El JPG descargado se inserta como cualquier otra imagen. Si una firma pegada como imagen vale para un contrato o un trámite concreto lo decide la entidad que lo recibe; ante la duda, pregúntale a ella." },
  ],

  security:
    "Tu firma se limpia, se redimensiona y se guarda por completo en tu navegador. Nunca se sube, se almacena ni la ve nadie más.",

  ui: {
    // SignatureResizerTool.tsx
    "Select a signature": "Seleccionar una firma",
    "or drop a photo or scan of your signature here": "o arrastra aquí una foto o un escaneo de tu firma",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "Please select an image.": "Selecciona una imagen.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Processing failed.": "Error al procesar.",
    "Signature settings": "Ajustes de la firma",
    "Preview": "Vista previa",
    "Output size": "Tamaño de salida",
    "Trimmed, original shape": "Recortada, forma original",
    "4 × 2 cm": "4 × 2 cm", // i18n-same
    "6 × 2 cm": "6 × 2 cm", // i18n-same
    "Custom size": "Tamaño personalizado",
    "Width (px)": "Ancho (px)",
    "Height (px)": "Alto (px)",
    "File size": "Tamaño del archivo",
    "No limit": "Sin límite",
    "Under {size}": "Menos de {size}",
    "{min} to {max}": "De {min} a {max}",
    "Minimum (KB)": "Mínimo (KB)",
    "Maximum (KB)": "Máximo (KB)",
    "KB": "KB", // i18n-same
    "Trim empty space": "Recortar espacio vacío",
    "Clean the background": "Limpiar el fondo",
    "Makes the paper pure white and the ink solid, even in uneven light.": "Deja el papel blanco puro y la tinta sólida, incluso con luz irregular.",
    "Cleaning strength": "Intensidad de limpieza",
    "Ink colour": "Color de tinta",
    "Black": "Negro",
    "Blue": "Azul",
    "Original": "Original", // i18n-same
    "Download signature": "Descargar firma",
    "Saving…": "Guardando…",
    "Output: {w} × {h} px": "Resultado: {w} × {h} px",
    "Last download: {size}": "Última descarga: {size}",
    "The file was padded to reach the minimum size; the picture itself is unchanged.": "El archivo se rellenó para alcanzar el tamaño mínimo; la imagen en sí no cambia.",
    "No signature found — try a photo with darker ink on plain paper.": "No se encontró ninguna firma: prueba con una foto con tinta más oscura sobre papel liso.",
    "Your signature is processed in your browser and never uploaded.": "Tu firma se procesa en tu navegador y nunca se sube.",
    "Could not get under {size} — the smallest file is used.": "No se pudo bajar de {size}: se usa el archivo más pequeño.",
    "The maximum must be larger than the minimum.": "El máximo debe ser mayor que el mínimo.",
  },
};

export default content;
