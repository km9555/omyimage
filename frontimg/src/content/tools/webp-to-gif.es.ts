import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.es";

/**
 * Spanish copy for /es/webp-a-gif.
 *
 * Target query «WebP a GIF» (convertir WebP a GIF) leads the h1. WhatsApp's
 * animated stickers are the main real-world use, so they get a mention in the
 * metaDescription, a section and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "webp-to-gif",
  locale: "es",
  name: "WebP a GIF",
  tagline:
    "Convierte imágenes WebP animadas a GIF conservando cada fotograma y sus tiempos, para que la animación se reproduzca en aplicaciones y editores que no entienden WebP. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "WebP a GIF – Convertir WebP animado a GIF gratis | oMyImage",
  metaDescription:
    "Convierte WebP a GIF gratis: guarda archivos WebP animados y stickers de WhatsApp como GIF con todos sus fotogramas y tiempos. Sin subir archivos.",

  intro:
    "El WebP animado es eficiente, pero mucho software todavía no lo abre: editores de imágenes antiguos, algunas aplicaciones de chat, programas de presentaciones y muchos formularios de subida muestran solo una imagen fija o rechazan el archivo. El GIF, en cambio, se entiende en todas partes. El convertidor «WebP a GIF» de oMyImage lee cada fotograma de un WebP animado, con sus tiempos, su fusión y su transparencia, y los escribe como un GIF que se repite sin fin. Agrega el archivo, mira el resultado junto al original y descárgalo.",

  sections: [
    {
      heading: "De dónde salen los WebP animados",
      id: "sources",
      body: [
        "Los sitios web sirven las animaciones en WebP porque pesan menos que los GIF, así que una animación guardada desde una página suele ser un .webp. Los stickers animados de WhatsApp también son archivos WebP. Ambos se ven bien en un navegador y, en casi cualquier otro lugar, se convierten en una imagen congelada o en un error.",
        "Convertirlos a GIF hace que la animación sea portátil: se puede pegar en un documento, subir a un foro, editar fotograma a fotograma o enviar por aplicaciones que nunca aprendieron a leer WebP.",
      ],
    },
    {
      heading: "Qué cambia en el GIF",
      id: "tradeoffs",
      body: [
        "El GIF es más antiguo y más limitado. Puede mostrar 256 colores por fotograma, así que los degradados suaves y las fotos pueden mostrar franjas; esta herramienta elige una sola paleta para toda la animación, de modo que al menos los colores se mantienen estables entre fotogramas. En GIF la transparencia es de sí o no, así que los bordes suaves y semitransparentes se vuelven duros.",
        "Cuenta con que el GIF pese más que el WebP, a menudo varias veces más. Si eso importa, «Comprimir GIF» puede reducirlo después, y si el destino acepta video, un MP4 pesará todavía menos.",
      ],
    },
    {
      heading: "Fotogramas y tiempos",
      id: "timing",
      body: [
        "Cada fotograma del WebP se decodifica por separado y se ensambla tal como lo reproduce un navegador, respetando los ajustes de fusión y eliminación de cada fotograma, así que las animaciones que solo actualizan una parte de la imagen salen correctamente. Cada fotograma conserva su duración y el GIF se repite sin fin.",
        "La conversión funciona en cualquier navegador moderno, incluido Safari, porque cada fotograma se decodifica con la compatibilidad WebP del propio navegador en lugar de un decodificador adicional.",
      ],
    },
    {
      heading: "Imágenes WebP fijas",
      id: "still",
      body: [
        "Un WebP que no es animado se convierte en un GIF de un solo fotograma, y la herramienta te lo indica. Para una imagen fija, PNG o JPG suelen ser mejor opción que GIF: usa «WebP a PNG» para conservar la transparencia y todos los colores, o «WebP a JPG» para fotos.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El WebP se lee y el GIF se escribe por completo en tu navegador. Los stickers, las capturas de pantalla y las animaciones guardadas nunca salen de tu dispositivo, y no se guarda nada después de cerrar la página.",
      ],
    },
    {
      heading: "WebP con pérdida y sin pérdida",
      id: "kinds",
      body: [
        "Los fotogramas WebP son de dos tipos: con pérdida, que pueden llevar una capa de transparencia aparte, y sin pérdida. Ambos se leen exactamente como los muestra el navegador. Cualquier desenfoque o efecto de bloques que ya tuviera un WebP con pérdida pasa al GIF: la conversión no puede recuperar el detalle que el WebP descartó.",
      ],
    },
    {
      heading: "Cómo hacer el GIF más ligero después",
      id: "smaller",
      body: [
        "Si el GIF pesa más de lo que permite el lugar al que lo envías, redimensiónalo al tamaño con el que se va a ver (los stickers suelen medir 512 píxeles o menos) y pásalo por «Comprimir GIF» en nivel «Media». Juntas, esas dos cosas suelen dejar un sticker o un banner convertido en un tamaño cómodo.",
      ],
    },
  ],

  howToTitle: "Cómo convertir WebP a GIF",
  steps: [
    { title: "Agrega el WebP", description: "Selecciona una imagen WebP animada (o fija)." },
    { title: "Convierte", description: "Haz clic en «Convertir a GIF»; se conservan todos los fotogramas y sus tiempos." },
    { title: "Descarga", description: "Compara el GIF con el original y descárgalo." },
  ],

  features: [
    { icon: "gif_box", title: "La animación se conserva", description: "Se mantienen todos los fotogramas, sus tiempos, su fusión y su transparencia." },
    { icon: "devices", title: "Se reproduce en todas partes", description: "El GIF se abre en aplicaciones, editores y formularios que rechazan WebP." },
    { icon: "lock", title: "Nada se sube", description: "Se convierte por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo convierto un WebP animado a GIF?", a: "Agrega el WebP y haz clic en «Convertir a GIF». Se conservan todos los fotogramas y sus tiempos, y el GIF se repite en bucle." },
    { q: "¿Por qué el GIF pesa más que el WebP?", a: "El GIF comprime de forma mucho menos eficiente. Si el tamaño importa, usa después «Comprimir GIF»." },
    { q: "¿Cambiarán los colores?", a: "Un poco en fotos y degradados: el GIF admite 256 colores, elegidos una sola vez para toda la animación." },
    { q: "¿Se conserva la transparencia?", a: "Sí, pero la transparencia del GIF no tiene bordes suaves, así que los bordes semitransparentes se vuelven sólidos." },
    { q: "¿Puedo convertir stickers de WhatsApp?", a: "Sí. Los stickers animados de WhatsApp son archivos WebP y se convierten como cualquier otro." },
    { q: "¿Y si mi WebP no es animado?", a: "Obtienes un GIF de un solo fotograma. Para imágenes fijas, «WebP a PNG» o «WebP a JPG» suelen ser mejor opción." },
    { q: "¿Funciona en Safari?", a: "Sí. Los fotogramas se decodifican con la compatibilidad WebP del propio navegador, que Safari tiene." },
    { q: "¿Se sube mi archivo?", a: "No. La conversión ocurre por completo en tu navegador." },
    { q: "¿Cuánto tarda la conversión?", a: "Unos segundos para stickers y animaciones cortas. Los WebP largos o grandes tardan más, y el progreso se muestra en pantalla." },
    { q: "¿El GIF se repite igual?", a: "El GIF se repite sin fin, como hacen casi todos los WebP animados." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en un navegador del teléfono. Las animaciones grandes tardan un poco más en un teléfono." },
    { q: "¿Puedo usar el GIF en una presentación?", a: "Sí. PowerPoint, Keynote y Google Slides reproducen los GIF directamente en la diapositiva." },
    { q: "¿Es gratis convertir WebP a GIF?", a: "Sí. Sin registro, sin marca de agua y sin límite en la cantidad de archivos que conviertes." },
  ],

  security:
    "Tu WebP se lee y se convierte a GIF por completo en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
