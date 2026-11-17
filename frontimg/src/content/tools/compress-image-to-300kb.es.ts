import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-300kb (variant of compress-image,
 * 300 KB). Target query: «Comprimir imagen a 300 KB»; secondary «reducir foto
 * a 300 KB». Angle: documentos — identificación, títulos y certificados que
 * siguen legibles para portales de empleo, becas e inscripciones.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-300kb",
  locale: "es",
  name: "Comprimir imagen a 300 KB",
  tagline:
    "Comprime fotos y escaneos de documentos a menos de 300 KB sin que el texto deje de leerse: identificaciones, títulos, certificados de calificaciones y cartas para portales de empleo e inscripción. Varios archivos a la vez, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 300 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 300 KB gratis y sin registro: identificaciones, títulos y escaneos siguen legibles. Reduce tu foto a 300 KB para portales de empleo y trámites.",

  intro:
    "300 KB es un límite habitual para subir documentos: el documento de identidad (DNI, INE o cédula), la tarjeta de residencia, el título, el certificado de calificaciones o la carta de recomendación que te piden los portales de empleo, de becas y de inscripción. Es espacio suficiente para que una página completa siga legible —letra pequeña, sellos y firmas incluidos— siempre que la foto de la página sea buena. Si necesitas reducir una foto a 300 KB, agrega todos tus documentos de una vez y cada uno vuelve como JPG de menos de 300 KB.",

  sections: [
    {
      heading: "Páginas completas que se siguen leyendo",
      id: "pages",
      body: [
        "Una hoja A4 fotografiada con el teléfono suele pesar entre 3 y 6 MB. Con 300 KB, esa misma página conserva unos 1600 × 2260 píxeles: nitidez de sobra para leer la letra más pequeña de un certificado de calificaciones al 100 % de zoom. La herramienta invierte el presupuesto primero en el detalle y solo reduce las dimensiones si una página está inusualmente cargada.",
        "Coloca la hoja plana sobre una mesa oscura, fotografíala justo desde arriba con luz de día para que no haya sombras y recorta la mesa antes de comprimir. Una app de escaneo que endereza la página también ayuda.",
      ],
    },
    {
      heading: "Identificaciones: recorta a la tarjeta",
      id: "id-cards",
      body: [
        "Una identificación es pequeña, así que en la foto casi todo es mesa. Recorta hasta los bordes de la tarjeta y cabrá en menos de 300 KB con una calidad muy alta, con la fotografía, el número y los detalles del holograma bien claros.",
        "Si el portal pide ambos lados, haz dos imágenes —frente y reverso— y comprímelas juntas; cada una vuelve con menos de 300 KB. Si las quiere en un solo archivo, ponlas primero en una misma página con la herramienta «Unir imágenes».",
      ],
    },
    {
      heading: "¿A color o en blanco y negro?",
      id: "colour",
      body: [
        "Deja los certificados y las identificaciones a color: los sellos, escudos y fotografías de color forman parte de lo que los hace válidos, y algunos portales rechazan documentos que parecen fotocopias. Para una carta escrita a máquina o un formulario impreso, el blanco y negro basta y deja más presupuesto para un texto nítido.",
      ],
    },
    {
      heading: "Cuando el portal pide un PDF",
      id: "pdf",
      body: [
        "Algunos portales solo aceptan documentos en PDF. Comprime aquí primero las imágenes de las páginas y luego combínalas con la herramienta «Imagen a PDF». El PDF termina pesando casi lo mismo que la suma de las imágenes, así que un documento de una página se queda por debajo de 300 KB.",
        "Si el límite de 300 KB se aplica a un documento de varias páginas completo, pon aquí un límite menor por página —para tres páginas, unos 90 KB cada una— para que el PDF final también entre.",
      ],
    },
    {
      heading: "Una última revisión antes de subir",
      id: "checklist",
      body: [
        "Antes de pulsar «Subir», abre cada archivo y comprueba: que se lea cada línea, que no falte ningún borde de la página, que los sellos y las firmas se vean y que el documento esté al derecho. Nombra los archivos como pide el portal —muchos rechazan espacios, acentos o signos en el nombre— y guarda los originales, porque otra solicitud puede exigir un límite distinto.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 300 KB",
  steps: [
    { title: "Agrega tus documentos", description: "Selecciona o arrastra tus fotos y escaneos de documentos: JPG, PNG o WEBP." },
    { title: "Comprime a menos de 300 KB", description: "El límite de 300 KB ya está configurado; cada archivo se comprime hasta que quepa." },
    { title: "Descarga el conjunto", description: "Descarga cada archivo por separado o todos juntos en un ZIP." },
  ],

  features: [
    { icon: "description", title: "Documentos legibles", description: "Las páginas completas conservan píxeles suficientes para leer letra pequeña, sellos y firmas." },
    { icon: "picture_as_pdf", title: "Listo para un PDF", description: "Comprime aquí las páginas y únelas con «Imagen a PDF» para los portales que piden un solo archivo." },
    { icon: "lock", title: "Privado", description: "Los documentos de identidad se comprimen en tu navegador, no se suben a un servidor." },
  ],

  faqs: [
    { q: "¿Cómo comprimo la foto de un documento a 300 KB?", a: "Agrégala aquí y pulsa «Comprimir»: el límite de 300 KB ya está configurado. Recorta antes la mesa alrededor de la hoja para obtener el resultado más nítido." },
    { q: "¿El texto se sigue leyendo con 300 KB?", a: "Sí. Una página A4 completa conserva unos 1600 × 2260 píxeles con 300 KB, suficiente para leer letra pequeña al 100 % de zoom." },
    { q: "¿Cómo comprimo los dos lados de mi identificación?", a: "Fotografía el frente y el reverso por separado, recorta cada imagen a la tarjeta y agrega las dos. Cada una vuelve con menos de 300 KB." },
    { q: "¿Puedo hacer un PDF de menos de 300 KB?", a: "Con una sola página, sí: comprime aquí la imagen y conviértela en PDF con «Imagen a PDF». Con varias páginas, dale a cada una un límite menor para que el total se quede por debajo de 300 KB." },
    { q: "¿300 KB es lo mismo que 0,3 MB?", a: "Sí. 300 KB son 300.000 bytes, o sea 0,3 MB. El archivo también queda dentro del límite en los portales que cuentan 1 KB como 1024 bytes." },
    { q: "¿Por qué mi escaneo se ve gris después de comprimirlo?", a: "El gris viene de la foto original, casi siempre por sombras o luz artificial. Fotografía la página con luz de día y sin sombras y vuelve a comprimir." },
    { q: "¿300 KB sirven también para una foto de perfil?", a: "De sobra. Una foto de retrato de menos de 300 KB se ve en pantalla prácticamente igual que el original." },
    { q: "¿Puedo comprimir aquí un PDF o un archivo de Word?", a: "No: esta herramienta trabaja con imágenes (JPG, PNG y WEBP). Fotografía la página o haz una captura de pantalla, comprime la imagen aquí y conviértela en PDF con «Imagen a PDF» si el portal lo necesita." },
    { q: "¿Se suben mis documentos de identidad a un servidor?", a: "Con fotos de tamaño normal, no: la compresión ocurre en tu navegador. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor, donde se borra en aproximadamente una hora." },
  ],

  security:
    "Las identificaciones, los certificados y las fotos se comprimen en tu dispositivo, dentro de tu navegador. Con fotos de tamaño normal no se sube ni se guarda nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se borra en aproximadamente una hora.",
};

export default content;
