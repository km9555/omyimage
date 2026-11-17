import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/jpg-a-pdf-menos-de-500kb (variant of image-to-pdf,
 * 500 KB limit on the whole PDF). Target query: «JPG a PDF de menos de
 * 500 KB». Angle: documentos LARGOS — solicitudes de diez páginas, recibos,
 * tareas escritas a mano y envío por correo. German rendered only 891 words
 * here, so this page carries two extra FAQs.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-500kb",
  locale: "es",
  name: "JPG a PDF de menos de 500 KB",
  tagline:
    "Une muchas fotos o escaneos en un solo PDF de menos de 500 KB —solicitudes de varias páginas, recibos, informes y tareas escritas a mano—, listo para subir o enviar por correo. Páginas legibles, en tu navegador, sin subir nada.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG a PDF de menos de 500 KB – documentos largos | oMyImage",
  metaDescription:
    "Convierte JPG a PDF de menos de 500 KB gratis: hasta diez páginas, recibos y tareas a mano en un solo PDF legible, listo para subir o enviar por correo.",

  intro:
    "500 KB es el límite habitual cuando un portal o una oficina quiere un documento completo de una vez: una solicitud de diez páginas, los recibos de un mes, una tarea escrita a mano, un informe con fotografías. Armadas directamente desde el teléfono, esas páginas forman un PDF de 20 o 30 MB. Esta página crea el PDF y, si pasa de 500 KB, vuelve a comprimir las imágenes solo lo necesario para que el archivo completo entre, con cada página tan legible como permite el límite.",

  sections: [
    {
      heading: "Documentos largos en un solo archivo",
      id: "long",
      body: [
        "Con 500 KB, cinco páginas de texto mecanografiado conservan unos 800 × 1100 píxeles cada una, y diez páginas unos 600 × 800: suficiente para que la letra de tamaño normal y la escritura a mano se lean a un zoom normal. El presupuesto se reparte según la superficie de cada imagen, así que las páginas salen parejas.",
        "Hasta unas diez páginas el resultado se lee con comodidad; más allá, divide el documento en dos PDF o pregunta si el portal acepta un archivo más grande.",
      ],
    },
    {
      heading: "Recibos y tickets largos",
      id: "receipts",
      body: [
        "Un ticket de caja es largo y estrecho, y una página A4 dejaría vacía la mayor parte. Elige «Ajustar a la imagen» como tamaño de página y cada recibo se convierte en una página exactamente con su forma: fácil de leer en el teléfono y fácil de revisar para el área de contabilidad.",
        "Varios recibos también pueden compartir una página A4: pon «Imágenes por página» en 2 o 4.",
      ],
    },
    {
      heading: "Enviar el PDF por correo",
      id: "email",
      body: [
        "La mayoría de los servicios de correo limitan los adjuntos a unos 20–25 MB por mensaje, y muchos buzones de trabajo permiten bastante menos. Un PDF de menos de 500 KB pasa por cualquier lado, se abre al instante en el teléfono y no llena el buzón de quien lo recibe, y aun así se imprime legible en A4.",
      ],
    },
    {
      heading: "Guarda los originales",
      id: "originals",
      body: [
        "El PDF comprimido es una copia para enviar y subir. Conserva las fotos originales: si más adelante alguien te pide una versión más clara de una página, o un límite distinto, puedes generarla desde los originales y no desde el PDF comprimido.",
      ],
    },
    {
      heading: "Tareas y trabajos escritos a mano",
      id: "assignments",
      body: [
        "Escuelas y universidades suelen recoger las tareas escritas a mano como un solo PDF con límite de peso. Fotografía cada página con luz de día, justo desde arriba, y agrega las fotos en el orden de las páginas; la vista previa muestra cada una antes de crear el archivo.",
        "La tinta oscura se lee mucho mejor que el lápiz una vez comprimidas las páginas. Si una página sale tenue, vuelve a tomar solo esa; no hace falta empezar de nuevo con las demás.",
      ],
    },
    {
      heading: "Fotos de tamaños distintos",
      id: "mixed",
      body: [
        "Las páginas fotografiadas a distintas distancias, o con teléfonos diferentes, terminan con tamaños en píxeles muy distintos. En páginas A4 o Carta todas se escalan para ocupar la misma página, y el presupuesto de peso se reparte según la superficie de cada foto, así que una foto enorme no deja sin espacio a las demás.",
      ],
    },
  ],

  howToTitle: "Cómo convertir JPG a PDF de menos de 500 KB",
  steps: [
    { title: "Agrega todas las páginas", description: "Agrega fotos o escaneos de cada página: JPG, PNG, WEBP o GIF." },
    { title: "Ordena y organiza", description: "Acomoda las páginas y elige el tamaño de página; el límite de 500 KB ya está configurado." },
    { title: "Crea el PDF", description: "Descarga un solo PDF de menos de 500 KB, listo para subir o enviar por correo." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Muchas páginas, un archivo ligero", description: "Hasta diez páginas en un solo PDF de menos de 500 KB." },
    { icon: "receipt_long", title: "Los recibos caben", description: "Páginas con «Ajustar a la imagen» para recibos largos, o varios por página A4." },
    { icon: "lock", title: "Privado", description: "Las páginas se comprimen y se unen en tu navegador, nunca se suben." },
  ],

  faqs: [
    { q: "¿Cómo convierto JPG a PDF de menos de 500 KB?", a: "Agrega todas las imágenes, ordénalas y pulsa «Crear PDF». El límite de 500 KB ya está configurado; las imágenes se comprimen solo lo necesario." },
    { q: "¿Cuántas páginas caben en un PDF de 500 KB?", a: "Cinco páginas siguen claramente legibles y diez funcionan bien con letra de tamaño normal. A partir de ahí, divide el documento." },
    { q: "¿Cómo hago un PDF con mis recibos?", a: "Agrega las fotos de los recibos y elige «Ajustar a la imagen» como tamaño de página, o de 2 a 4 imágenes por página A4." },
    { q: "¿Puedo enviar por correo un PDF de 500 KB?", a: "Sí, a cualquier servicio de correo: está muy por debajo de todos los límites de adjuntos." },
    { q: "¿La escritura a mano se seguirá leyendo?", a: "Sí, en hasta unas diez páginas de letra manuscrita normal. Fotografía cada página con luz de día para obtener el resultado más claro." },
    { q: "¿500 KB es lo mismo que 0,5 MB?", a: "Sí, 500 KB son 500.000 bytes. El PDF también cumple en los portales que cuentan 1 KB como 1024 bytes." },
    { q: "¿Se suben mis páginas?", a: "No. El PDF se crea por completo en tu navegador." },
    { q: "¿Puedo combinar fotos de teléfonos distintos?", a: "Sí. Cada foto se ajusta al mismo tamaño de página, sea cual sea su resolución, y el límite se reparte de forma justa entre todas." },
    { q: "¿Qué hago si mi documento tiene más de diez páginas?", a: "Divídelo en dos PDF de menos de 500 KB cada uno, por ejemplo páginas 1–8 y 9–16, o pregunta si el portal admite un archivo mayor. Así cada página conserva más detalle." },
    { q: "¿Puedo usar el tamaño Carta en lugar de A4?", a: "Sí. Elige Carta como tamaño de página si vas a imprimir en ese papel; el peso del PDF casi no cambia, porque casi todo el archivo son las imágenes." },
  ],

  security:
    "Las imágenes de tus páginas se comprimen y se unen en un PDF en tu dispositivo, dentro de tu navegador. No se sube ni se guarda nada en ningún lugar.",
};

export default content;
