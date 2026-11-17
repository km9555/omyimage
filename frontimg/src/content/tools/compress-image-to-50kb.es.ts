import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-50kb (variant of compress-image,
 * preset targetKb 50). Primary query: «Comprimir imagen a 50 KB»; secondary:
 * «reducir foto a 50 KB», «foto de 50 KB». 50 KB is the typical PHOTOGRAPH
 * limit on exam, job and government forms — this page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-50kb",
  locale: "es",
  name: "Comprimir imagen a 50 KB",
  tagline:
    "Comprime cualquier foto a menos de 50 KB, el límite para fotografías que fijan la mayoría de los formularios de exámenes, empleo y trámites oficiales. El JPG más nítido que cabe, varias fotos a la vez, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 50 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 50 KB: la foto de tu teléfono como JPG nítido para trámites en línea y portales de empleo. Reduce tu foto a 50 KB gratis y sin subirla.",

  intro:
    "Si alguna vez un formulario te dijo «la foto debe pesar menos de 50 KB», esta página es justo para ese momento. Agrega la foto directamente desde tu teléfono —aunque pese 5 MB— y vuelve como un JPG de menos de 50 KB, con la calidad más alta que cabe. La herramienta baja primero la calidad y reduce las dimensiones en píxeles solo si no queda otra, así que las caras se ven claras al tamaño en que los formularios las muestran. Acepta JPG, PNG y WebP, y procesa varias fotos a la vez.",

  sections: [
    {
      heading: "Por qué tantos formularios piden 50 KB",
      id: "why-50kb",
      body: [
        "Los organismos que aplican exámenes, los portales de empleo público, los programas de becas y muchos trámites en línea reciben fotografías de miles o millones de solicitantes. Limitar cada una a 20–50 KB mantiene bajo control su almacenamiento y la carga de sus páginas, y una foto tipo carnet no necesita ni de lejos la resolución de la cámara de un teléfono. 50 KB es el tope más habitual para la fotografía, y la firma suele tener un límite menor, de 10 a 20 KB.",
        "El límite se comprueba automáticamente al subir el archivo, y por eso uno de 51 KB falla aunque se vea idéntico a uno de 49 KB. Esta herramienta siempre se queda por debajo de la cifra, con un pequeño margen de seguridad que se explica más abajo.",
      ],
    },
    {
      heading: "50 KB es un peso de archivo, no un tamaño de imagen",
      id: "size-not-dimensions",
      body: [
        "Los kilobytes miden almacenamiento, no ancho ni alto. Los mismos 50 KB pueden contener una foto de 1200 píxeles de una pared lisa o una de 400 píxeles de una calle llena de gente, porque el JPG gasta bytes en el detalle, no en la superficie. Un retrato tipo carnet típico sobre fondo claro cabe en 50 KB a unos 600 × 800 píxeles y sigue viéndose nítido.",
        "Muchos formularios también indican dimensiones: 200 × 230 píxeles, 3,5 × 4,5 cm, 413 × 531 píxeles. Es un requisito aparte: primero redimensiona a esas medidas con la herramienta «Redimensionar imagen» y después comprime aquí. Con dimensiones tan pequeñas, la foto suele caber por debajo de 50 KB con una calidad muy alta.",
      ],
    },
    {
      heading: "Cómo conseguir la mejor foto por debajo de 50 KB",
      id: "best-photo",
      body: [
        "Parte de la foto original, no de una reenviada por WhatsApp ni de una captura de pantalla: cada compresión anterior agrega bloques que la siguiente tiene que conservar. Recorta a cabeza y hombros antes de comprimir, para que el presupuesto se gaste en la cara y no en la habitación de atrás.",
        "Un fondo liso y claro se comprime mucho mejor que uno estampado, y una luz de día pareja sobre la cara se comprime mejor que unas sombras duras. Si el formulario exige fondo blanco, toma la foto delante de una pared blanca o usa antes la herramienta «Quitar fondo».",
      ],
    },
    {
      heading: "Por qué una foto puede seguir siendo rechazada",
      id: "rejections",
      body: [
        "Si un portal rechaza una foto que pesa menos de 50 KB, el motivo suele ser otra regla: dimensiones incorrectas, un tamaño mínimo (algunos formularios también exigen al menos 20 KB), un tipo de archivo distinto de JPG o un nombre de archivo con espacios o caracteres especiales. Revisa las instrucciones para cada uno de estos puntos.",
        "El número de KB en sí no es el problema aquí. La herramienta mantiene el archivo por debajo de 50 000 bytes, que pasa tanto si el formulario cuenta un kilobyte como 1000 como si lo cuenta como 1024 bytes; por eso tu equipo puede mostrarlo como 48 o 49 KB.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 50 KB",
  steps: [
    { title: "Agrega tu foto", description: "Selecciona o arrastra un JPG, PNG o WebP; una foto del teléfono a tamaño completo sirve." },
    { title: "Comprime a menos de 50 KB", description: "El límite de 50 KB ya está puesto. Deja JPG como formato salvo que el formulario diga otra cosa." },
    { title: "Descargar", description: "Guarda la foto: pesa menos de 50 KB y está lista para subir. Varias fotos se descargan en un ZIP." },
  ],

  features: [
    { icon: "badge", title: "Lista para solicitudes", description: "Un JPG de menos de 50 KB con la calidad más alta que cabe: lo que esperan los portales de exámenes y trámites oficiales." },
    { icon: "photo_size_select_large", title: "Achica píxeles solo si hace falta", description: "Primero se baja la calidad; las dimensiones se reducen solo cuando la calidad sola no llega a 50 KB." },
    { icon: "lock", title: "Privado por diseño", description: "Tu foto se procesa en tu navegador, en tu propio dispositivo: lo sensato para una foto de identificación." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una foto a 50 KB?", a: "Agrega la foto, deja el límite de 50 KB y el formato JPG, y haz clic en «Comprimir». El archivo que descargas queda garantizado por debajo de 50 KB." },
    { q: "¿Una foto de 50 KB se verá borrosa?", a: "No al tamaño en que la muestran los formularios. Un retrato cabe en 50 KB a unos 600 × 800 píxeles con buena calidad; lo borroso suele venir de un original ya comprimido, así que parte del original." },
    { q: "¿Qué tamaño en píxeles debe tener una foto de 50 KB?", a: "No hay una respuesta fija: depende de cuánto detalle tenga la foto. Si el formulario indica dimensiones, redimensiona primero a ellas; si no, deja que la herramienta decida, y conservará todos los píxeles que quepan." },
    { q: "¿Puedo convertir un PNG o una captura de pantalla en un JPG de 50 KB?", a: "Sí. Los archivos PNG y WebP se convierten a JPG en el proceso, y las zonas transparentes se rellenan de blanco o del color de fondo que elijas." },
    { q: "El formulario también pide 200 × 230 píxeles. ¿Qué hago?", a: "Redimensiona primero a 200 × 230 con la herramienta «Redimensionar imagen» y después comprime aquí el resultado. A ese tamaño, la foto quedará muy por debajo de 50 KB con una calidad alta." },
    { q: "¿50 KB es lo mismo que 0,05 MB?", a: "Sí. El archivo se mantiene por debajo de 50 000 bytes, que son 0,05 MB, y también pasa en formularios que cuentan 1024 bytes por kilobyte." },
    { q: "¿Puedo comprimir varias fotos a 50 KB de una vez?", a: "Sí. Agrégalas todas: cada una se lleva por separado por debajo de 50 KB y puedes descargarlas juntas en un ZIP." },
    { q: "¿Se sube mi foto a internet al comprimirla?", a: "No. La compresión a 50 KB ocurre en tu navegador, en tu dispositivo. Solo una imagen enorme, de más de unos 16 megapíxeles, se procesa en nuestro servidor y se elimina en aproximadamente una hora." },
  ],

  security:
    "La foto se queda en tu dispositivo. La compresión a 50 KB se ejecuta en tu navegador, así que no hay nada subido, nada guardado y nada que otra persona pueda ver. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
