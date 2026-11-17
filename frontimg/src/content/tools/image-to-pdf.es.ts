import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/imagen-a-pdf. Structure lives in
 * ToolPageShell.
 *
 * Target query "imagen a PDF" (18.1K ES / 165K MX per month); "JPG a PDF"
 * (90.5K / 201K) is even bigger and goes into the metaTitle, intro and a
 * section heading; "convertir imagen a PDF" (135K MX), "foto a PDF" and "PNG
 * a PDF" live in the intro and FAQs. Submission cases are written for both
 * Spain and Latin America (job applications, government procedures, insurers,
 * schools); A4 is the default sheet, Carta (Letter) is named for Mexico and
 * the US. Addressed in "tú".
 *
 * Paper formats stay as they are (A4, Letter, Legal — conversion.md §5);
 * PAGE_SIZES, ORIENTATIONS, PER_IMAGE and FIT_LABELS are module scope, keys
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "image-to-pdf",
  locale: "es",
  name: "Imagen a PDF",
  tagline:
    "Convierte imágenes JPG, PNG y WEBP en un solo PDF online: ordena las páginas y elige tamaño de página, orientación, diseño y márgenes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },
  variantsHeading: "Convertir a un PDF por debajo de un límite de tamaño",

  metaTitle: "Imagen a PDF – convertir JPG a PDF gratis online | oMyImage",
  metaDescription:
    "Convierte imagen a PDF gratis: une fotos JPG, PNG o WEBP en un solo PDF, ordénalas y elige A4 o el tamaño de la imagen. JPG a PDF online y sin registro.",

  intro:
    "¿Necesitas enviar varias fotos o escaneos como un solo documento? Con «Imagen a PDF» de oMyImage unes tus imágenes JPG, PNG y WEBP en un único PDF, ya sea que quieras convertir una foto a PDF o pasar de JPG a PDF un lote completo. Ordena las páginas, ajusta cada página a su imagen o elige A4, Letter (Carta), Legal, A3 o A5, coloca hasta nueve imágenes por página y define el encaje, el margen y el fondo. Todo el PDF se arma en tu navegador, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Por qué convertir imágenes a PDF",
      id: "why",
      body: [
        "Un PDF convierte una carpeta de archivos sueltos en un solo documento con un orden fijo y un aspecto predecible. Eso importa siempre que algo se entrega y no solo se comparte: solicitudes de empleo, comprobantes de gastos, documentación para aseguradoras, tareas escolares, trámites en línea y papeleo legal casi siempre se piden en un único PDF, y un ZIP con archivos JPG muchas veces se rechaza sin más.",
        "También resuelve un problema de orden. Las imágenes enviadas como adjuntos separados llegan en el orden que se le ocurra al programa de correo, y los exploradores de archivos ponen «IMG_10» antes que «IMG_2». Un PDF fija la secuencia para siempre, de modo que quien lo recibe lee las páginas en el orden que tú decidiste.",
        "Por último, un PDF se imprime de forma predecible. El tamaño de página, la orientación y los márgenes se definen al crear el documento, en lugar de quedar en manos del cuadro de impresión que abra la otra persona.",
      ],
    },
    {
      heading: "JPG a PDF: tamaño de página, orientación y encaje",
      id: "layout",
      body: [
        "A4 es el estándar en casi todo el mundo fuera de Norteamérica, incluida España y gran parte de Latinoamérica; Letter (Carta) es un poco más ancho y más corto, y es el tamaño habitual en Estados Unidos y México. Elegir el que espera la impresora de quien lo recibe evita el escalado y los cortes que ocurren cuando un documento Letter llega a una bandeja A4.",
        "«Ajustar a la imagen» da a cada página el tamaño de su imagen, la opción correcta para documentos que solo se leerán en pantalla, colecciones de fotos y todo lo que mezcle orientaciones. Elimina las franjas blancas que aparecen cuando una foto horizontal se centra en una página vertical. La orientación automática es el punto intermedio: mantiene un tamaño de hoja estándar, pero gira cada página según su imagen, así que las fotos horizontales dejan de quedar encajonadas.",
        "El modo de encaje decide qué pasa cuando la imagen y la página siguen sin coincidir. «Encajar» muestra todo y acepta márgenes vacíos; «Cubrir» llena la hoja de borde a borde y recorta lo que sobra, ideal para páginas de fotos a sangre; «Estirar» fuerza un ajuste exacto y conviene reservarlo para imágenes con proporciones ya parecidas, porque deforma visiblemente todo lo demás.",
        "Colocar varias imágenes por página convierte la misma herramienta en una hoja de contactos o un folleto. Con 2 se divide a lo largo del lado largo de la página, mientras que 4, 6 y 9 forman una cuadrícula en orden de lectura; el margen se convierte también en el espacio entre celdas, no solo en el borde exterior.",
      ],
    },
    {
      heading: "Cómo mantener un tamaño de archivo razonable",
      id: "size",
      body: [
        "El PDF pesa más o menos lo mismo que las imágenes que pones dentro —se incrustan tal cual, sin volver a comprimirlas—, así que un documento hecho con veinte fotos de teléfono de 12 megapíxeles llegará a decenas de megabytes, normalmente muy por encima del límite de adjuntos del portal al que lo envías.",
        "La solución está antes. Redimensiona las imágenes a unos 1500–2000 píxeles en el lado largo, más que suficiente para leer en pantalla y para impresiones normales, y comprímelas antes de crear el PDF. En documentos de texto fotografiados, pasarlos primero a blanco y negro suele reducir el tamaño a la mitad otra vez sin perder legibilidad.",
      ],
    },
    {
      heading: "Todo ocurre en tu navegador",
      id: "privacy",
      body: [
        "El PDF se arma en tu propio dispositivo con una biblioteca PDF de JavaScript, así que las imágenes nunca se suben. Vale la pena saberlo por lo que la gente suele convertir aquí: pasaportes, estados de cuenta, documentos médicos, contratos e identificaciones son justo el tipo de archivos que no deberían pasar por el servidor de otra persona.",
        "Una consecuencia práctica es que la herramienta funciona sin conexión una vez cargada la página, y que los lotes muy grandes solo están limitados por la memoria de tu dispositivo, no por un límite de carga.",
      ],
    },
  ],

  howToTitle: "Cómo convertir imágenes a PDF",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona tus imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Ordena y configura", description: "Reordena las páginas con las flechas y luego elige el tamaño de página, la orientación, cuántas imágenes por página, el encaje, el margen y el fondo." },
    { title: "Crea el PDF", description: "Haz clic en «Crear PDF» para descargar un solo documento, organizado exactamente como lo configuraste." },
  ],

  features: [
    { icon: "reorder", title: "Reordenar páginas", description: "Pon tus imágenes en el orden que quieras con simples controles de subir y bajar antes de exportar." },
    { icon: "description", title: "Control total de la página", description: "Ajusta cada página a su imagen, o usa A4, Letter, Legal, A3 o A5 con orientación automática, vertical u horizontal y un margen que defines en puntos." },
    { icon: "grid_view", title: "Varias imágenes por página", description: "Coloca 1, 2, 4, 6 o 9 imágenes por página y elige si cada una se encaja, se recorta para cubrir o se estira." },
    { icon: "lock", title: "100 % privado", description: "El PDF se arma por completo en tu navegador: tus imágenes nunca se suben." },
  ],

  faqs: [
    { q: "¿Puedo unir muchas imágenes en un solo PDF?", a: "Sí. Agrega todas las imágenes que quieras y ordénalas como prefieras. Por defecto, cada imagen ocupa su propia página, pero también puedes colocar 2, 4, 6 o 9 por página." },
    { q: "¿Qué formatos de imagen se admiten?", a: "JPG, PNG, WEBP, GIF y BMP. La transparencia de los PNG se conserva, así que se ve el fondo de página que elijas, o ningún fondo." },
    { q: "¿Cómo convierto un PNG a PDF?", a: "Igual que un JPG: sube el archivo PNG, elige el tamaño de página y haz clic en «Crear PDF». Los PNG se incrustan sin pérdida, así que las capturas de pantalla y los gráficos quedan perfectamente nítidos." },
    { q: "¿Puedo elegir A4 o Carta?", a: "Sí: A4, Letter (Carta), Legal, A3 y A5, cada uno en vertical, horizontal o automático (que adapta la página a la forma de la imagen). O elige «Ajustar a la imagen» para que cada página tenga el tamaño de su imagen." },
    { q: "¿Qué hacen Encajar, Cubrir y Estirar?", a: "«Encajar» coloca la imagen completa dentro de la página y deja espacio vacío donde las formas no coinciden. «Cubrir» llena la página por completo y recorta lo que sobra. «Estirar» deforma la imagen para llenar la página exactamente; solo es útil cuando las proporciones ya son parecidas." },
    { q: "¿Crear el PDF reduce la calidad de mis imágenes?", a: "No. Los archivos JPG y PNG se incrustan tal cual, sin volver a comprimirlos, así que las páginas contienen tus píxeles originales. La única excepción es una foto con rotación EXIF, que debe guardarse de nuevo para que aparezca en la orientación correcta." },
    { q: "¿Se suben mis imágenes?", a: "No. El PDF se crea localmente en tu navegador, así que tus imágenes nunca salen de tu dispositivo." },
    { q: "¿Es gratis convertir JPG a PDF?", a: "Totalmente gratis, sin marca de agua y sin registro." },
    { q: "¿Qué tamaño de página debo elegir?", a: "A4 para todo lo que se imprima o entregue en España y en la mayoría de los países de Latinoamérica, Letter (Carta) para imprimir en Estados Unidos o México, y «Ajustar a la imagen» cuando el PDF solo se vaya a leer en pantalla. Así evitas los márgenes blancos que aparecen cuando una foto horizontal se coloca en una página vertical." },
    { q: "¿Puedo controlar el orden de las páginas?", a: "Sí: las imágenes se colocan en el orden en que aparecen en la lista, y puedes reordenarlas antes de crear el PDF. Esto importa sobre todo cuando tu explorador de archivos las ordenó como texto, lo que pone «pagina10» antes que «pagina2»." },
    { q: "¿El PDF será mucho más grande que mis imágenes?", a: "Solo un poco. Las imágenes se incrustan prácticamente tal cual, así que el PDF pesa aproximadamente la suma de tus archivos más una pequeña estructura adicional. Si el resultado es demasiado grande, comprime o redimensiona antes las imágenes: un PDF hecho con fotos de 4000 píxeles es enorme e innecesario para leer en pantalla." },
    { q: "¿Puedo hacer un PDF con fotos de documentos tomadas con el teléfono?", a: "Sí, y es uno de los usos más comunes. Para el mejor resultado, fotografía cada página de frente con luz pareja, recorta antes lo que la rodea y considera pasarlas por la herramienta de blanco y negro: un documento con aspecto de escaneo pesa mucho menos que una foto a todo color y suele leerse mejor." },
    { q: "¿El texto del PDF se puede buscar?", a: "No. Las páginas son imágenes, así que el PDF contiene fotos del texto y no el texto en sí. Si necesitas buscar o copiar las palabras, pasa antes las imágenes por la herramienta «Imagen a texto»: extrae el texto, que luego puedes pegar en un documento." },
    { q: "El portal solo acepta PDF de hasta 2 MB, ¿qué hago?", a: "Usa la variante con límite de tamaño: ahí escribes el tamaño máximo del PDF en KB o MB, y las imágenes se comprimen solo lo necesario para que todo el PDF quepa. Otra opción es reducir antes las imágenes a unos 1500 píxeles en el lado largo." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El PDF se arma por completo en tu navegador: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // ImageToPdfTool.tsx + PagePreview.tsx
    "or drop JPG, PNG, WEBP or GIF images here": "o suelta aquí imágenes JPG, PNG, WEBP o GIF",
    "Created a PDF with 1 page.": "Se creó un PDF de 1 página.",
    "Created a PDF with {n} pages.": "Se creó un PDF de {n} páginas.",
    "Couldn't create the PDF.": "No se pudo crear el PDF.",
    "{orientation} — {name}": "{orientation} — {name}", // i18n-same
    "Clear images": "Quitar imágenes",
    "PDF settings": "Configuración del PDF",
    "PDF Settings": "Configuración del PDF",
    "Build": "Crear",
    "Building PDF…": "Creando el PDF…",
    "1 page": "1 página",
    "{n} pages": "{n} páginas",
    "Use the arrows to reorder.": "Usa las flechas para reordenar.",
    // The separator between the page count and the line above. Spanish ends a
    // sentence the same way English does, so this is deliberately identical.
    ". |sentence-end": ". ", // i18n-same
    "Create PDF": "Crear PDF",
    "That's {size} of images. They're embedded without recompression, so the PDF will be about that big — likely too large to email.":
      "Son {size} de imágenes. Se incrustan sin volver a comprimirlas, así que el PDF pesará más o menos eso: probablemente demasiado para enviarlo por correo.",
    "Compress these first": "Comprimirlas primero",
    "Page size": "Tamaño de página",
    "Orientation": "Orientación",
    "Each page already takes its image's shape.": "Cada página ya toma la forma de su imagen.",
    "Set each image's orientation on its card — the first image on a page decides that page.":
      "Define la orientación de cada imagen en su tarjeta: la primera imagen de una página decide la de esa página.",
    "Set each image's orientation on its card.": "Define la orientación de cada imagen en su tarjeta.",
    "Images per page": "Imágenes por página",
    "Multi-up pages are laid out on A4.": "Las páginas con varias imágenes se organizan en A4.",
    "Fit": "Encaje",
    "Contain keeps the whole image (may add margins). Cover fills the area (may crop). Stretch distorts to fill exactly.":
      "Encajar conserva la imagen completa (puede agregar márgenes). Cubrir llena el área (puede recortar). Estirar deforma para llenar exactamente.",
    "Margin": "Margen",
    "Space around images (and between them on multi-up pages).": "Espacio alrededor de las imágenes (y entre ellas en páginas con varias imágenes).",
    "Page background": "Fondo de página",
    "Preview": "Vista previa",
    "Previous page": "Página anterior",
    "Next page": "Página siguiente",
    // PAGE_SIZES / ORIENTATIONS / PER_IMAGE / FIT_LABELS (module scope, §4.2)
    "Fit to image": "Ajustar a la imagen",
    "Auto": "Automática",
    "Auto (match image)": "Automática (según la imagen)",
    "Portrait": "Vertical",
    "Landscape": "Horizontal",
    "Custom (per image)": "Personalizada (por imagen)",
    "Contain": "Encajar",
    "Cover": "Cubrir",
    "Stretch": "Estirar",
    // ImageToPdfTool.tsx — size limit (jpg-to-pdf-under-N-kb)
    "Already under {size} — no compression needed.": "Ya pesa menos de {size}: no hace falta comprimir.",
    "Could not get the PDF under {size} — this is the smallest it can be.": "No se pudo bajar el PDF de {size}: este es el tamaño mínimo posible.",
    "Enter a size greater than zero.": "Escribe un tamaño mayor que cero.",
    "Images are compressed only as much as needed for the whole PDF to fit.": "Las imágenes se comprimen solo lo necesario para que todo el PDF quepa.",
    "KB": "KB", // i18n-same
    "MB": "MB", // i18n-same
    "Maximum PDF size": "Tamaño máximo del PDF",
    "PDF size: {size}": "Tamaño del PDF: {size}",
    "The PDF will be kept under {size}.": "El PDF quedará por debajo de {size}.",
    "Unit": "Unidad",
  },
};

export default content;
