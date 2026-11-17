import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/comprimir-imagen-a-20kb (variant of compress-image,
 * preset targetKb 20). Primary query: «Comprimir imagen a 20 KB»; secondary:
 * «reducir foto a 20 KB», «firma de 20 KB». 20 KB is above all the SIGNATURE
 * limit, so that is this page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-20kb",
  locale: "es",
  name: "Comprimir imagen a 20 KB",
  tagline:
    "Comprime una foto o una firma a menos de 20 KB, el límite que fijan los formularios de exámenes, convocatorias de empleo y bancos para firmas y fotos pequeñas. JPG nítidos, muchos archivos a la vez, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Comprimir imagen a 20 KB – gratis y online | oMyImage",
  metaDescription:
    "Comprimir imagen a 20 KB: firma escaneada o foto pequeña como JPG nítido para trámites. Reduce tu foto a 20 KB gratis, varias a la vez y sin subirlas.",

  intro:
    "Veinte kilobytes es el límite más estricto con el que se topa la mayoría de la gente, y casi siempre viene de una solicitud: una firma escaneada, la huella del pulgar izquierdo o una foto pequeña para un examen, una convocatoria de empleo público o un banco. Una foto de una firma tomada con el teléfono suele pesar de 2 a 4 MB, es decir, unas doscientas veces más de lo permitido. Esta página lleva cualquier JPG, PNG o WebP por debajo de 20 KB en un solo paso, conservando la imagen tan nítida como ese presupuesto lo permite, y procesa todos tus documentos de una vez.",

  sections: [
    {
      heading: "Las firmas son para lo que existe el límite de 20 KB",
      id: "signatures",
      body: [
        "Las solicitudes en línea para exámenes de oposición o de admisión, convocatorias de bancos y organismos públicos, inscripciones universitarias y muchos trámites oficiales piden una firma escaneada, normalmente de entre 10 y 20 KB y de unos 140 × 60 píxeles, a veces expresada como «6 × 2 cm». El límite es tan pequeño porque una firma necesita muy poca información: trazos oscuros sobre un fondo liso.",
        "Eso también hace que las firmas sean las imágenes más fáciles de comprimir bien. Una firma limpia cabe en 20 KB con una calidad alta y a un tamaño mucho mayor del que el formulario va a mostrar. Si la tuya sale borrosa o manchada, el problema casi siempre está en la foto de origen, no en la compresión: mira la siguiente sección.",
      ],
    },
    {
      heading: "Cómo dejar una firma limpia por debajo de 20 KB",
      id: "clean-signature",
      body: [
        "Firma con tinta negra o azul oscuro sobre papel blanco liso y fotografíala con luz de día, sin tu sombra ni el flash del teléfono sobre la hoja. Las sombras y el papel gris son el enemigo aquí: un JPG gasta la mayor parte de sus 20 KB describiendo los degradados suaves del fondo, no tus trazos.",
        "Recorta bien la firma antes de comprimir —la herramienta «Recortar imagen» lo hace en unos segundos— para que el archivo no gaste bytes en papel vacío. Una firma recortada al ras, de unos 400 × 150 píxeles, se mantiene nítida muy por debajo de 20 KB; no sirve de nada conservar una foto de 4000 píxeles de una hoja de papel.",
      ],
    },
    {
      heading: "Qué cabe en 20 kilobytes",
      id: "what-fits",
      body: [
        "Para una firma sobre fondo blanco, 20 KB es un margen generoso. Para una foto de la cara es justo: cuenta con algo del orden de 300 × 400 píxeles con buena calidad, según lo detallado que sea el fondo. Un fondo liso y claro detrás de la cara le da al codificador mucho menos que guardar que una habitación llena de cosas o una pared estampada.",
        "Si un formulario pide una foto de 20 KB y además indica dimensiones exactas, primero redimensiona a esas medidas con la herramienta «Redimensionar imagen» y después comprime aquí. En ese orden, la herramienta solo tiene que bajar la calidad, sin elegir un tamaño por ti.",
      ],
    },
    {
      heading: "Cuando el formulario dice «entre 10 KB y 20 KB»",
      id: "range",
      body: [
        "Algunos formularios fijan un mínimo además del máximo, para rechazar imágenes casi vacías. Esta página apunta justo por debajo de 20 KB, y el resultado suele quedar entre 15 y 20 KB: dentro de un rango de 10 a 20 KB.",
        "Las imágenes muy pequeñas o muy simples pueden quedar por debajo del mínimo incluso con la calidad más alta, porque sencillamente no tienen detalle suficiente para llenar 10 KB. Si te pasa, escanea o fotografía la firma más grande, o deja un recorte un poco más amplio, y vuelve a comprimir a partir de ese original.",
      ],
    },
  ],

  howToTitle: "Cómo comprimir una imagen a 20 KB",
  steps: [
    { title: "Agrega la foto o la firma", description: "Selecciona o arrastra tu JPG, PNG o WebP; recorta antes la firma al ras para el resultado más limpio." },
    { title: "Comprime a menos de 20 KB", description: "El límite de 20 KB ya está puesto; cámbialo si tu formulario permite un poco más o un poco menos." },
    { title: "Descarga y sube", description: "Guarda el JPG y adjúntalo a tu formulario: queda garantizado por debajo de 20 KB." },
  ],

  features: [
    { icon: "draw", title: "Pensado para firmas", description: "Los trazos oscuros sobre blanco se comprimen de maravilla: un recorte ajustado queda nítido muy por debajo de 20 KB." },
    { icon: "verified_user", title: "Menos de 20 KB, siempre", description: "El archivo se mantiene por debajo de 20 000 bytes, así que pasa en formularios que cuentan un KB como 1000 o como 1024 bytes." },
    { icon: "lock", title: "Tu firma sigue siendo privada", description: "Todo se ejecuta en tu navegador. Una firma escaneada es lo último que deberías subir al servidor de un desconocido." },
  ],

  faqs: [
    { q: "¿Cómo comprimo una firma a 20 KB?", a: "Recorta la firma al ras, agrégala aquí y haz clic en «Comprimir»: el límite de 20 KB ya está puesto. Firmar con tinta oscura sobre papel blanco y fotografiarla con luz de día da el resultado más nítido." },
    { q: "¿Qué tamaño en píxeles debe tener una firma de 20 KB?", a: "La mayoría de los formularios piden unos 140 × 60 píxeles, y una firma de ese tamaño pesa apenas unos pocos kilobytes. Si no se indica tamaño, un recorte de unos 400 × 150 píxeles la mantiene nítida y queda muy por debajo de 20 KB." },
    { q: "Mi formulario pide una foto de menos de 20 KB: ¿se verá clara la cara?", a: "Sí, al tamaño en que el formulario la muestra. Cuenta con unos 300 × 400 píxeles con buena calidad; un fondo liso y claro detrás de la cara deja más de los 20 KB para la cara misma." },
    { q: "El formulario dice de 10 KB a 20 KB. ¿Funciona?", a: "Normalmente el resultado queda entre 15 y 20 KB. Si una imagen muy pequeña o muy simple sale por debajo de 10 KB, fotografíala o escanéala más grande y vuelve a comprimir." },
    { q: "¿Por qué mi firma comprimida se ve gris o con manchas?", a: "El fondo del original era gris o tenía sombras, y el JPG está gastando su presupuesto en ese sombreado. Vuelve a fotografiarla sobre papel blanco con luz pareja, o sube el contraste, y los trazos saldrán limpios." },
    { q: "¿Puedo comprimir mi foto y mi firma juntas?", a: "Sí. Agrega los dos archivos; cada uno se lleva por separado por debajo de 20 KB y puedes descargarlos en un ZIP. Si la foto admite más (a menudo 50 KB), comprímela mejor en la página de 50 KB." },
    { q: "¿20 KB es lo mismo que 0,02 MB?", a: "Sí, 20 KB son 0,02 MB en las unidades decimales que usan los formularios. La herramienta mantiene el archivo por debajo de 20 000 bytes, lo que también cumple con formularios que cuentan 1024 bytes por kilobyte." },
  ],

  security:
    "Las firmas y las fotos de identificación se quedan en tu dispositivo. La compresión se ejecuta en tu navegador: sin subida, sin copia en un servidor y sin nada que borrar después. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
