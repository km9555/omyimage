import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-100kb (variant of compress-image,
 * preset targetKb 100). Primary query: «Comprimir imagen a 100 KB»;
 * secondary: «reducir foto a 100 KB». Angle: 100 KB is where photos stop
 * suffering — and where scanned DOCUMENTS start, so this page covers both.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-100kb",
  locale: "es",
  name: "Comprimir imagen a 100 KB",
  tagline:
    "Comprime fotos y documentos escaneados a menos de 100 KB para solicitudes, verificaciones de identidad y correo. La calidad más alta que cabe, muchas imágenes a la vez, procesadas en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 100 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 100 KB: fotos y documentos escaneados como JPG nítidos para portales de empleo y trámites. Reduce tu foto a 100 KB gratis y sin subirla.",

  intro:
    "100 KB es el límite que encuentras en portales de empleo, formularios de universidades y de visas, verificaciones de identidad en bancos y aplicaciones, y en cualquier sitio que quiera una foto o un documento escaneado pero no un archivo de cámara a tamaño completo. Es un presupuesto cómodo: un retrato o una página de texto caben sin daño visible, siempre que el archivo no desperdicie bytes en píxeles que nadie va a ver. Agrega tus imágenes y cada una vuelve como un JPG de menos de 100 KB con la mejor calidad que permite el límite.",

  sections: [
    {
      heading: "A partir de 100 KB, la calidad deja de ser el problema",
      id: "comfortable",
      body: [
        "Por debajo de unos 50 KB, la compresión es un compromiso que se nota. A 100 KB casi nunca: un retrato cabe a unos 900 × 1200 píxeles con buena calidad, mucho más de lo que muestra un formulario de solicitud y suficiente para imprimirlo en tamaño carnet.",
        "Por eso lo primero que hace siempre la herramienta es bajar un poco la calidad y conservar tus píxeles. Con la mayoría de las fotos de teléfono también tiene que reducir las dimensiones —a unos 1000–1500 píxeles en el lado largo—, porque una foto de 12 megapíxeles lleva más detalle del que 100 KB pueden guardar con cualquier calidad razonable.",
      ],
    },
    {
      heading: "Documentos escaneados de menos de 100 KB",
      id: "documents",
      body: [
        "Los formularios con un límite de 100 KB muchas veces piden un documento y no una cara: una constancia de calificaciones, una identificación, un certificado, un recibo de luz o de agua. Una foto de una hoja tomada con el teléfono es casi todo papel blanco, y el papel con luz desigual sale sorprendentemente caro de guardar, porque cada sombra leve es detalle que el JPG tiene que describir.",
        "Fotografía la hoja plana, con luz de día pareja, llenando el encuadre, y recorta la mesa que la rodea. Para páginas solo de texto, pasarlas a blanco y negro con la herramienta «Imagen en blanco y negro» antes de comprimir permite dedicar más de los 100 KB a mantener el texto nítido. Si el formulario quiere un PDF en lugar de una imagen, comprime primero aquí el escaneo y después conviértelo en PDF con «Imagen a PDF».",
      ],
    },
    {
      heading: "Varias fotos en un solo correo",
      id: "email",
      body: [
        "Con fotos de teléfono de 3 a 5 MB cada una, un correo con diez imágenes adjuntas falla o llega a la bandeja del destinatario como una descarga de 40 MB. A 100 KB cada una, las mismas diez fotos suman alrededor de 1 MB: lo bastante poco para cualquier proveedor de correo y perfectamente claras en pantalla.",
        "Agrega todo el conjunto de una vez: cada imagen se comprime por separado al mismo límite, y la descarga en ZIP las mantiene juntas.",
      ],
    },
    {
      heading: "Identificaciones y fotos para verificación de identidad",
      id: "kyc",
      body: [
        "Los bancos, las billeteras digitales y las compañías telefónicas que verifican tu identidad en línea suelen pedir una foto clara de tu identificación por debajo de un límite como 100 KB, y rechazan todo lo que una persona o un sistema automático no pueda leer. Lo que hace que rechacen una identificación casi nunca es el peso del archivo: un reflejo sobre la tarjeta plastificada, una esquina cortada, una tarjeta que ocupa solo una parte pequeña del encuadre o un número borroso.",
        "Coloca la tarjeta sobre una superficie oscura y lisa, fotografíala desde justo encima sin flash y recórtala a sus bordes antes de comprimir. Una tarjeta bien recortada cabe con facilidad en 100 KB con cada dígito nítido, porque el presupuesto se gasta en la tarjeta y no en la mesa que la rodea.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 100 KB",
  steps: [
    { title: "Agrega imágenes o escaneos", description: "Selecciona o arrastra archivos JPG, PNG o WebP: fotos, páginas escaneadas o capturas de pantalla." },
    { title: "Comprime a menos de 100 KB", description: "El límite de 100 KB ya está puesto; cambia el número si tu formulario admite otro tamaño." },
    { title: "Descargar", description: "Cada archivo vuelve por debajo de 100 KB; descárgalos uno por uno o todos juntos en un ZIP." },
  ],

  features: [
    { icon: "description", title: "Fotos y documentos", description: "Funciona igual de bien con un certificado escaneado o una identificación que con un retrato: los dos caben limpios en 100 KB." },
    { icon: "burst_mode", title: "Todo el conjunto a la vez", description: "Comprime de una sola vez todas las fotos y escaneos de una solicitud y descárgalos en un ZIP." },
    { icon: "lock", title: "Tus documentos no salen de tu dispositivo", description: "Las identificaciones y los certificados se comprimen en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo reduzco una foto a 100 KB?", a: "Agrega la foto y haz clic en «Comprimir»: el límite de 100 KB ya está puesto. Obtienes un JPG de menos de 100 KB con la calidad más alta que cabe." },
    { q: "¿100 KB alcanzan para una foto tamaño carnet?", a: "De sobra. Una foto tamaño carnet necesita solo unos cientos de píxeles de ancho, y eso cabe en 100 KB con una calidad muy alta." },
    { q: "¿Cómo dejo un documento escaneado por debajo de 100 KB?", a: "Fotografía o escanea la hoja plana y con luz pareja, recorta a los bordes de la página y comprímela aquí. Para páginas solo de texto, pasarlas antes a blanco y negro deja más espacio para un texto nítido." },
    { q: "¿Cuánto es 100 KB en MB?", a: "0,1 MB. El archivo se mantiene por debajo de 100 000 bytes, así que también pasa en formularios que cuentan 1024 bytes por kilobyte." },
    { q: "¿Puedo comprimir a 100 KB una foto HEIC del iPhone?", a: "Conviértela antes a JPG con «HEIC a JPG» y después comprime aquí el JPG. Esta herramienta lee JPG, PNG y WebP." },
    { q: "¿El resultado puede seguir siendo PNG?", a: "No: PNG no puede cambiar calidad por tamaño, así que no se puede ajustar a un límite exacto. Obtienes un JPG, o un WebP si lo eliges y el sitio lo acepta." },
    { q: "¿Por qué la herramienta hizo mi foto más angosta?", a: "Porque incluso con una calidad baja la foto a tamaño completo pasaba de 100 KB. La herramienta redujo las dimensiones lo justo para que cupiera, lo que se ve mucho mejor que aplastar la calidad." },
    { q: "¿Es seguro comprimir aquí una identificación oficial?", a: "Sí. La identificación se comprime en tu navegador y no se envía a ningún servidor; solo las imágenes de más de unos 16 megapíxeles se procesan en nuestro servidor, y se eliminan en aproximadamente una hora." },
  ],

  security:
    "Tus fotos y documentos se quedan en tu dispositivo. Casi todos los archivos se comprimen en tu navegador: sin subida, sin copia en un servidor, sin nada guardado. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
