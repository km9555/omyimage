import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-30kb (variant of compress-image,
 * preset targetKb 30). Primary query: «Comprimir imagen a 30 KB»; secondary:
 * «reducir foto a 30 KB». Angle: the form PHOTO limit — what makes a face
 * survive 30 KB (crop, plain background), resize-then-compress, and the
 * KB-vs-KiB confusion that makes a 29 KB file look "too big".
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-30kb",
  locale: "es",
  name: "Comprimir imagen a 30 KB",
  tagline:
    "Comprime una foto a menos de 30 KB para formularios de exámenes, admisión y empleo, con la cara lo bastante nítida para un comprobante o una credencial. Límite exacto, en tu navegador y gratis.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 30 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 30 KB para la foto de un formulario de examen, admisión o empleo, con la cara nítida. Reduce tu foto a 30 KB gratis y sin subirla.",

  intro:
    "30 KB es un tope frecuente para la fotografía en formularios de exámenes, admisión y convocatorias de empleo, y a veces también para la firma. Alcanza para una foto tipo carnet clara, siempre que la foto esté preparada para ello. Agrega tu imagen aquí y obtendrás un JPG de menos de 30 KB con la calidad más alta que cabe; los consejos de abajo marcan la diferencia entre una cara que se ve definida y una que se ve emborronada.",

  sections: [
    {
      heading: "Conserva la cara, olvida el resto",
      id: "face-first",
      body: [
        "Los formularios quieren una foto de cabeza y hombros, así que todo lo demás —la habitación, tus piernas, el techo— es espacio desperdiciado. Recorta a cabeza y hombros antes de comprimir y los 30 KB completos se dedican a la cara. Con este peso, una foto de unos 350 × 450 píxeles conserva buen detalle en los ojos y el cabello.",
        "Mira directo a la cámara, mantén la cara iluminada de forma pareja y evita sombras fuertes de un lado. Las sombras y el grano son detalle fino que el compresor tiene que guardar; una luz uniforme le da menos trabajo y un resultado más limpio.",
      ],
    },
    {
      heading: "Por qué ayuda un fondo liso",
      id: "background",
      body: [
        "La compresión JPG guarda las zonas lisas con muy pocos bytes y las zonas con mucho detalle con muchos. Una pared blanca o clara casi no cuesta nada, así que la mayor parte de los 30 KB se va en la cara. Un librero, unas cortinas estampadas o un jardín soleado detrás de ti pueden quedarse con la mitad del presupuesto por sí solos.",
        "Si tu foto se tomó delante de un fondo recargado, la herramienta «Cambiar fondo de foto» puede reemplazarlo antes por blanco o azul liso. Después comprime aquí el resultado.",
      ],
    },
    {
      heading: "Cuando el formulario también indica dimensiones en píxeles",
      id: "dimensions",
      body: [
        "Algunos formularios piden las dos cosas: menos de 30 KB y, por ejemplo, 200 × 230 píxeles. Hazlo en ese orden: primero redimensiona a las medidas exactas con la herramienta «Redimensionar imagen» y después comprime aquí a 30 KB. Si comprimes primero y redimensionas después, el JPG se guarda dos veces y pierde calidad sin ningún motivo.",
        "Si el formulario da un tamaño en centímetros, como 3,5 × 4,5 cm, está describiendo la forma de la foto. Recorta a esa proporción y luego comprime.",
      ],
    },
    {
      heading: "«Mi archivo pesa 29 KB, pero el formulario dice que es demasiado grande»",
      id: "kb-kib",
      body: [
        "Los equipos cuentan los kilobytes de dos maneras. Windows muestra los tamaños en unidades de 1024 bytes, mientras que muchos sitios web comprueban los límites en unidades de 1000. La herramienta mantiene el archivo por debajo de 30 000 bytes, que queda por debajo del límite de las dos formas.",
        "Si aun así un formulario rechaza la foto, el motivo suele ser otro: el formato equivocado (PNG en lugar de JPG), un tamaño mínimo que también exige o unas dimensiones fuera de su rango. Lee con atención el mensaje de error; casi siempre dice cuál es.",
      ],
    },
    {
      heading: "Tomar la foto con el teléfono",
      id: "phone",
      body: [
        "Usa la cámara principal (la trasera) en lugar de la frontal, y pide a alguien que tome la foto a aproximadamente 1,5 metros, a la altura de tus ojos. Colócate delante de una pared lisa y clara, de frente a una ventana, para que la luz de día te caiga de forma pareja en la cara, y mantén los hombros rectos hacia la cámara.",
        "Desactiva los filtros de belleza y el modo retrato —los dos suavizan los bordes y agregan efectos que los formularios no permiten— y toma varias fotos. Elige la más nítida: la compresión puede hacer una foto más pequeña, pero no puede volver nítida una foto movida.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una foto a 30 KB",
  steps: [
    { title: "Agrega tu foto", description: "Recórtala a cabeza y hombros y agrégala: JPG, PNG o WebP." },
    { title: "Comprime a menos de 30 KB", description: "El límite de 30 KB ya está puesto; cámbialo si tu formulario pide otra cifra." },
    { title: "Descarga y sube", description: "Descarga el JPG y adjúntalo a tu formulario." },
  ],

  features: [
    { icon: "face", title: "Caras definidas", description: "La calidad más alta que cabe en 30 KB, para que los ojos y los rasgos se vean nítidos." },
    { icon: "aspect_ratio", title: "Combina con redimensionar", description: "Primero redimensiona a los píxeles del formulario y luego comprime: el orden correcto para la mejor calidad." },
    { icon: "lock", title: "Sin subidas", description: "Tu foto se comprime en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una foto a 30 KB?", a: "Agrégala aquí y haz clic en «Comprimir»: el límite de 30 KB ya está puesto. Obtienes un JPG de menos de 30 KB con la calidad más alta que cabe." },
    { q: "¿Qué tamaño en píxeles cabe en 30 KB?", a: "Una foto de cabeza y hombros de unos 350 × 450 píxeles conserva buen detalle. Las fotos más grandes se reducen automáticamente hasta que caben." },
    { q: "¿La foto se verá bien en el comprobante de examen?", a: "Sí. Los comprobantes imprimen la foto en pequeño, y 30 KB es más que suficiente para eso si la foto está recortada a la cara y bien iluminada." },
    { q: "¿Primero redimensiono o primero comprimo?", a: "Primero redimensiona y luego comprime. Si comprimes y después redimensionas, el JPG se guarda dos veces y pierde una calidad que no hacía falta perder." },
    { q: "¿De verdad importa tanto un fondo liso?", a: "Sí. Las zonas lisas ocupan muy poco en un JPG, así que más de los 30 KB se dedican a tu cara. Un fondo recargado puede gastarse la mitad del presupuesto." },
    { q: "Windows muestra un tamaño distinto al del formulario: ¿cuál es el correcto?", a: "Los dos, en unidades distintas. La herramienta mantiene el archivo por debajo de 30 000 bytes, así que pasa tanto si el formulario cuenta 1 KB como 1000 como si lo cuenta como 1024 bytes." },
    { q: "¿También puedo reducir una firma a 30 KB?", a: "Sí. Agrega la foto y la firma juntas; cada una vuelve por debajo de 30 KB. Si el campo de la firma admite menos, vuelve a procesarla con ese número." },
    { q: "¿Puedo tomar la foto con mi teléfono?", a: "Sí. Usa la cámara trasera, colócate a unos 1,5 metros con luz de día delante de una pared lisa y recorta a cabeza y hombros antes de comprimir a 30 KB." },
  ],

  security:
    "Las fotos se comprimen en tu dispositivo, dentro de tu navegador. Con los tamaños de foto normales no se sube ni se guarda nada. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se envía a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
