import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-150kb (variant of compress-image,
 * preset targetKb 150). Primary query: «Comprimir imagen a 150 KB»;
 * secondary: «reducir foto a 150 KB». Angle: HANDWRITTEN pages — homework
 * and exams uploaded page by page — plus faint pencil, page order, scanner
 * apps and photos at this size.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-150kb",
  locale: "es",
  name: "Comprimir imagen a 150 KB",
  tagline:
    "Comprime fotos y páginas manuscritas o impresas a menos de 150 KB: letra legible, fotos claras y conjuntos completos de una vez. Para plataformas con un tope de 150 KB por archivo. Gratis y privado, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 150 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 150 KB: tareas y hojas escritas a mano con letra legible, página por página, o fotos nítidas. Reduce tu foto a 150 KB gratis, sin subir nada.",

  intro:
    "150 KB es un tope frecuente por archivo en plataformas de universidades y escuelas, sistemas de solicitudes y aulas virtuales, sobre todo donde los estudiantes suben tareas o exámenes escritos a mano, página por página. Alcanza para que una página manuscrita completa se lea con facilidad y para que un retrato se vea nítido. Agrega todas tus páginas de una vez y cada una vuelve como un JPG de menos de 150 KB con la calidad más alta que cabe.",

  sections: [
    {
      heading: "Páginas escritas a mano",
      id: "handwritten",
      body: [
        "A 150 KB, una página A4 completa conserva unos 1200 × 1700 píxeles con buena calidad: cada renglón de la letra se lee con el zoom normal, incluidos diagramas y números pequeños. La herramienta mantiene la calidad tan alta como lo permite el límite y reduce las dimensiones solo en páginas especialmente cargadas.",
        "Fotografía cada página plana, con luz de día, desde justo encima y sin nada más en el encuadre. Las páginas fotografiadas en ángulo se ven estiradas, y una sombra sobre el papel cuesta bytes y legibilidad.",
      ],
    },
    {
      heading: "Lápiz tenue y tinta clara",
      id: "faint",
      body: [
        "El lápiz y la tinta azul clara pierden contraste en una foto, y la compresión hace que las líneas finas y tenues se desvanezcan primero. Escribe con bolígrafo oscuro si puedes. Si la página ya está escrita, fotografíala con luz de día fuerte y pareja, y considera pasarla a blanco y negro con la herramienta «Imagen en blanco y negro» antes de comprimir: sin color, una parte mayor del presupuesto se dedica a las líneas.",
      ],
    },
    {
      heading: "Varias páginas en orden",
      id: "pages",
      body: [
        "Agrega todas las páginas juntas; cada una se comprime a menos de 150 KB y puedes descargarlas en un ZIP. Antes de agregarlas, nombra las fotos en orden de página —pagina-01, pagina-02, etc.— para que los archivos vuelvan en el orden que espera la plataforma.",
        "Si la plataforma quiere un solo PDF y limita el archivo completo a 150 KB, pon aquí un límite menor a cada página —unos 50 KB cada una para tres páginas— y después únelas con «Imagen a PDF».",
      ],
    },
    {
      heading: "Fotos a 150 KB",
      id: "photos",
      body: [
        "Para una fotografía, 150 KB es generoso: un retrato conserva unos 900 × 1200 píxeles con calidad alta, perfecto para un perfil, una credencial o un directorio de personal. No hace falta más preparación que recortar lo que no quieras que salga en la imagen.",
      ],
    },
    {
      heading: "Apps de escáner del teléfono y fotos normales",
      id: "scanner-apps",
      body: [
        "Una app de escáner de documentos —la que viene integrada en las notas o en el gestor de archivos de tu teléfono, o una aparte— detecta los bordes de la página, la endereza y sube el contraste para que el papel quede blanco y la escritura oscura. Para páginas manuscritas es el mejor punto de partida posible: un escaneo limpio se comprime a 150 KB con cada renglón nítido.",
        "Muchas apps de escáner guardan en PDF por defecto. Elige JPG al exportar, o haz una captura de pantalla de cada página, y luego comprime aquí las imágenes. Una foto normal también sirve; solo necesita buena luz de día y un ángulo recto desde arriba para verse tan limpia como un escaneo.",
        "Uses lo que uses, revisa la primera página a tamaño completo antes de hacer el resto: si esa se lee con facilidad a 150 KB, las demás también.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 150 KB",
  steps: [
    { title: "Agrega tus páginas o fotos", description: "Selecciónalas o arrástralas, en orden si son páginas: JPG, PNG o WebP." },
    { title: "Comprime a menos de 150 KB", description: "El límite de 150 KB ya está puesto; cada archivo se comprime para que quepa." },
    { title: "Descargar", description: "Descarga cada archivo por separado o todos juntos en un ZIP." },
  ],

  features: [
    { icon: "edit_note", title: "Letra legible", description: "Las páginas completas conservan píxeles suficientes para cada renglón, número y diagrama." },
    { icon: "folder_zip", title: "Tareas completas", description: "Muchas páginas comprimidas a la vez y descargadas juntas." },
    { icon: "lock", title: "Privado", description: "Tus páginas y fotos nunca salen de tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una imagen a 150 KB?", a: "Agrégala aquí y haz clic en «Comprimir»: el límite de 150 KB ya está puesto. Obtienes un JPG de menos de 150 KB con la mejor calidad que cabe." },
    { q: "¿Se puede leer la letra a mano a 150 KB?", a: "Sí. Una página completa conserva unos 1200 × 1700 píxeles, suficiente para leer una letra normal con el zoom habitual." },
    { q: "¿Cómo subo varias páginas manuscritas de menos de 150 KB cada una?", a: "Agrega todas las páginas juntas; cada una vuelve por debajo de 150 KB. Nombra antes las fotos en orden de página para que no se desordenen." },
    { q: "¿Lápiz o bolígrafo: qué funciona mejor?", a: "Un bolígrafo oscuro. Las líneas de lápiz salen tenues en las fotos y son lo primero que se desvanece al comprimir un archivo." },
    { q: "¿Puedo hacer un solo PDF con todas las páginas por debajo de 150 KB?", a: "Sí: pon aquí un límite menor a cada página para que el total quede por debajo de 150 KB y después únelas con «Imagen a PDF»." },
    { q: "¿Qué tan grande puede ser una foto a 150 KB?", a: "Unos 900 × 1200 píxeles con calidad alta: de sobra para perfiles y credenciales." },
    { q: "¿150 KB es lo mismo que 0,15 MB?", a: "Sí, 150 KB son 150 000 bytes. El archivo también pasa en plataformas que cuentan 1 KB como 1024 bytes." },
    { q: "¿Puedo usar una app de escáner del teléfono para las páginas?", a: "Sí, es la mejor manera. Exporta las páginas como JPG (o haz capturas de pantalla) en lugar de un PDF y luego comprímelas aquí a menos de 150 KB cada una." },
  ],

  security:
    "Las páginas y las fotos se comprimen en tu dispositivo, dentro de tu navegador. Con tamaños de foto normales no se sube ni se guarda nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se envía a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
