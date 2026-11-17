import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/redimensionar-imagen-en-cm (variant of resize-image,
 * Print size mode). Target query: «Redimensionar imagen en cm»; secondary
 * «cambiar tamaño de imagen en cm». Angle: medidas exactas de impresión en
 * cm/mm a 300 DPI, con los DPI guardados en el archivo.
 */
const content: ToolPageContent = {
  toolId: "resize-image-in-cm",
  locale: "es",
  name: "Redimensionar imagen en cm",
  tagline:
    "Redimensiona una imagen a un tamaño exacto en centímetros, milímetros o pulgadas a 300 DPI o a los DPI que quieras, con los DPI guardados en el archivo para que se imprima a ese tamaño. Gratis, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Redimensionar imagen en cm – exacto a 300 DPI | oMyImage",
  metaDescription:
    "Redimensionar imagen en cm gratis: cambia el tamaño de tu imagen en cm, mm o pulgadas a 300 DPI, con los DPI guardados para imprimir exactamente a esa medida.",

  intro:
    "Los formularios, las imprentas y las plantillas de documentos describen las imágenes en centímetros o pulgadas: una foto de 3,5 × 4,5 cm, una copia de 10 × 15 cm, una imagen de 8 cm de ancho en un informe. Pero una imagen está hecha de píxeles, así que hay que traducir esa medida. Esta herramienta hace la traducción por ti: si necesitas cambiar el tamaño de una imagen en cm, escribe la medida en cm, mm o pulgadas, elige los DPI y tu imagen se redimensiona exactamente al número de píxeles correcto, con los DPI escritos en el archivo, para que cualquier impresora o procesador de texto la coloque al tamaño que pediste.",

  sections: [
    {
      heading: "De centímetros a píxeles",
      id: "formula",
      body: [
        "Píxeles = tamaño en pulgadas × DPI, y una pulgada son 2,54 cm. A 300 DPI, cada centímetro necesita unos 118 píxeles. Por eso una foto de 3,5 × 4,5 cm se convierte en 413 × 531 píxeles, y una página A4 completa de 21 × 29,7 cm en 2480 × 3508 píxeles.",
        "Nunca tienes que hacer la cuenta tú. Escribe la medida y el panel muestra el tamaño en píxeles al que se redimensionará la primera imagen con los DPI elegidos. Cambia entre cm, mm y pulgadas cuando quieras; la medida se convierte para que el tamaño físico siga siendo el mismo.",
      ],
    },
    {
      heading: "Tamaños de impresión habituales a 300 DPI",
      id: "common",
      body: [
        "Una foto de identificación de 3,5 × 4,5 cm: 413 × 531 px. Una copia fotográfica de 10 × 15 cm: 1181 × 1772 px, o 1200 × 1800 px para una copia real de 4 × 6 pulgadas. Una foto de 2 × 2 pulgadas: 600 × 600 px. Una página A4: 2480 × 3508 px. Una página A5 (14,8 × 21 cm): 1748 × 2480 px.",
        "Para fotos de pasaporte y de identificación con reglas sobre el tamaño de la cara, «Foto carnet» se encarga del recorte y del fondo por ti; esta herramienta es para cualquier otro tamaño que necesites en papel.",
      ],
    },
    {
      heading: "Mantener las proporciones",
      id: "aspect",
      body: [
        "Con «Mantener proporción (ajustar)» activado, escribes un lado y el otro sigue la forma propia de la imagen, así que nada se aplasta. Para clavar los dos lados exactos —por ejemplo, 3,5 × 4,5 cm a partir de una foto horizontal—, recorta primero la imagen a esa forma con el botón de recorte de su tarjeta y luego escribe la medida. Si desactivas el candado y escribes los dos lados, la imagen se estira para encajar, y eso casi nunca es lo que quieres.",
        "Cuando la medida se rellena a partir de la primera imagen, muestra el tamaño de impresión actual de esa imagen con los DPI elegidos: una forma rápida de ver a qué tamaño se imprimiría una foto tal como está.",
      ],
    },
    {
      heading: "Qué DPI elegir",
      id: "dpi",
      body: [
        "300 DPI es el estándar para fotos y documentos impresos, y el valor predeterminado aquí. 200 DPI es habitual en formularios de solicitud y todavía se imprime bien; 150 DPI sirve para pósteres grandes que se ven a distancia; 600 DPI es para dibujos de línea y detalle fino. Más DPI significa más píxeles para los mismos centímetros, y por lo tanto un archivo más pesado.",
        "Si tu imagen tiene menos píxeles de los que necesita la medida, se amplía y la impresión se verá suave. El panel muestra los píxeles de destino, así que compáralos con el tamaño propio de la imagen antes de redimensionar; para un resultado nítido, imprime más pequeño o parte de un original más grande.",
      ],
    },
    {
      heading: "Los DPI se guardan en el archivo",
      id: "saved",
      body: [
        "Los archivos JPG y PNG redimensionados quedan etiquetados con los DPI que elegiste, así que Word, Google Docs, los programas de maquetación y los cuadros de impresión los muestran desde el principio al tamaño físico previsto. WEBP no tiene un campo de DPI que un navegador pueda escribir, así que elige JPG o PNG como formato de salida cuando importe el tamaño de impresión.",
        "Los nombres de archivo dicen lo que hiciste, por ejemplo foto_3.5x4.5cm.jpg, para que un lote con tamaños distintos se distinga fácilmente.",
      ],
    },
  ],

  howToTitle: "Cómo redimensionar una imagen en cm",
  steps: [
    { title: "Agrega tu imagen", description: "Selecciona una o varias imágenes JPG, PNG, WEBP, GIF o BMP." },
    { title: "Escribe la medida y los DPI", description: "Escribe el ancho o el alto en cm, mm o pulgadas y elige los DPI; 300 viene preseleccionado." },
    { title: "Redimensiona y descarga", description: "Descarga imágenes con el tamaño exacto en píxeles y los DPI guardados en el archivo." },
  ],

  features: [
    { icon: "straighten", title: "cm, mm o pulgadas", description: "Escribe la medida en la unidad que usa tu formulario o tu impresora; los píxeles se calculan por ti." },
    { icon: "high_quality", title: "DPI guardados en el archivo", description: "Los JPG y PNG resultantes llevan los DPI, así que se imprimen al tamaño que escribiste." },
    { icon: "lock", title: "En tu navegador", description: "Tus imágenes se redimensionan en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo redimensiono una imagen en cm?", a: "Agrega la imagen, escribe el ancho o el alto en centímetros, elige los DPI y haz clic en «Redimensionar». La imagen recibe el tamaño exacto en píxeles y los DPI se guardan en el archivo." },
    { q: "¿Cuántos píxeles son 1 cm?", a: "Depende de los DPI: unos 118 píxeles a 300 DPI, 79 a 200 DPI y 28 a 72 DPI." },
    { q: "¿Cuánto es 3,5 × 4,5 cm en píxeles?", a: "413 × 531 píxeles a 300 DPI, o 276 × 354 píxeles a 200 DPI." },
    { q: "¿Puedo redimensionar en pulgadas o milímetros?", a: "Sí. Cambia la unidad a pulgadas o mm; los valores se convierten para que el tamaño físico siga siendo el mismo." },
    { q: "¿Qué DPI debo usar?", a: "300 DPI para fotos y documentos, 200 DPI para la mayoría de los formularios y 150 DPI para pósteres grandes." },
    { q: "¿La imagen se imprimirá al tamaño que escribí?", a: "Sí, en JPG o PNG: los DPI se guardan en el archivo, así que las impresoras y los procesadores de texto usan el tamaño correcto." },
    { q: "¿Por qué mi imagen se ve borrosa después de cambiar su tamaño en cm?", a: "Tenía menos píxeles de los que necesitaba la medida y se amplió. Imprímela más pequeña, usa menos DPI o parte de un original más grande." },
    { q: "¿Cómo consigo un ancho y un alto exactos sin estirar la imagen?", a: "Recorta primero la imagen a la forma correcta con el botón de recorte de su tarjeta y luego escribe los dos lados." },
    { q: "¿Puedo redimensionar muchas imágenes al mismo tamaño?", a: "Sí. Agrégalas todas; cada una se redimensiona al mismo tamaño físico y se descargan juntas en un ZIP." },
    { q: "¿Se suben mis imágenes?", a: "No. El redimensionado ocurre en tu navegador; solo las imágenes muy grandes pueden procesarse en nuestro servidor, donde se borran de inmediato." },
    { q: "¿Cómo paso una imagen a tamaño carta o A4?", a: "Escribe 21 × 29,7 cm para A4 o 21,6 × 27,9 cm para tamaño carta, con «Mantener proporción (ajustar)» activado si no quieres deformarla. A 300 DPI, una página A4 completa necesita 2480 × 3508 píxeles." },
  ],

  security:
    "Tus imágenes se redimensionan en tu navegador y los DPI se escriben ahí mismo en cada archivo. Las imágenes muy grandes pueden procesarse en nuestro servidor y se borran de inmediato; no se conserva nada.",
};

export default content;
