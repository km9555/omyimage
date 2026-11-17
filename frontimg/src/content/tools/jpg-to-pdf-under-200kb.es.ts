import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/jpg-a-pdf-menos-de-200kb (variant of image-to-pdf,
 * 200 KB limit on the whole PDF). Target query: «JPG a PDF de menos de
 * 200 KB». Angle: pequeños JUEGOS de documentos — dos o tres páginas, frente
 * y reverso de una identificación, el orden de las páginas.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-200kb",
  locale: "es",
  name: "JPG a PDF de menos de 200 KB",
  tagline:
    "Une fotos o escaneos de tus documentos en un solo PDF de menos de 200 KB —certificados, boletas de calificaciones, identificaciones por ambos lados— para portales de admisión, becas y empleo. Páginas legibles, en tu navegador, sin subir nada.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "JPG a PDF de menos de 200 KB – varias páginas | oMyImage",
  metaDescription:
    "Convierte JPG a PDF de menos de 200 KB gratis: une dos o tres páginas o ambos lados de tu identificación en un PDF legible para portales de admisión y becas.",

  intro:
    "200 KB es el límite de PDF más común en los portales de admisión, becas y reclutamiento, normalmente para un documento de dos o tres páginas: una boleta de calificaciones con su reverso, un certificado con su anexo, los dos lados de una identificación. Esta página coloca tus imágenes en un solo PDF en el orden que elijas y, si el resultado pasa de 200 KB, vuelve a comprimirlas solo lo necesario para que el archivo completo entre, repartiendo el presupuesto para que todas las páginas queden igual de legibles.",

  sections: [
    {
      heading: "Dos o tres páginas legibles",
      id: "pages",
      body: [
        "Con 200 KB, dos páginas de texto mecanografiado conservan unos 800 × 1100 píxeles cada una, y tres páginas unos 600 × 800: claramente legibles con dos, y bien con tres cuando la letra es de tamaño normal, como en la mayoría de los certificados y formularios. El presupuesto se reparte según la superficie en píxeles, así que un escaneo de página completa recibe más que una identificación pequeña del mismo documento, y ninguna página termina mucho más borrosa que las demás.",
        "Las imágenes que ya caben no se tocan: si tus páginas son lo bastante ligeras para formar un PDF de menos de 200 KB tal como están, el PDF se arma con ellas sin cambios.",
      ],
    },
    {
      heading: "Poner las páginas en orden",
      id: "order",
      body: [
        "Agrega todas las imágenes y usa las flechas de cada una para ordenarlas como debe leerse el documento: el frente antes que el reverso, la página uno antes que la dos. La vista previa de la izquierda muestra exactamente cómo van a quedar las páginas.",
        "Ponles nombres claros a tus fotos antes de agregarlas, como boleta-frente y boleta-reverso, y detectarás un orden equivocado de un vistazo.",
      ],
    },
    {
      heading: "Los dos lados de una tarjeta en una página",
      id: "both-sides",
      body: [
        "Los portales suelen querer el frente y el reverso de una identificación en una sola página del PDF. Agrega las dos fotos, pon «Imágenes por página» en 2, y ambos lados quedan en una misma página A4, uno encima del otro. Recorta antes cada foto a la tarjeta para que los dos lados salgan del mismo tamaño.",
      ],
    },
    {
      heading: "Revisa antes de subir",
      id: "check",
      body: [
        "Abre el PDF descargado y amplía al 100 % cada página: los nombres, números y fechas deben leerse con claridad, y no debe faltar nada en los bordes. Si una página cuesta leerla, vuelve a tomar esa foto con mejor luz en lugar de subir el límite: una foto limpia se comprime mucho mejor que una oscura.",
      ],
    },
    {
      heading: "Cómo se cumple el límite de 200 KB",
      id: "how",
      body: [
        "Primero se arma el PDF con tus imágenes tal como están. Si ya pesa menos de 200 KB, lo recibes de inmediato y no se recomprime nada. Si no, la herramienta mide cuánto del archivo son imágenes y cuánto es la estructura propia del PDF, y reparte lo que queda de los 200 KB entre las imágenes según su tamaño.",
        "Después, cada imagen se vuelve a guardar con la calidad JPG más alta que cabe en su parte, y el PDF se reconstruye. Si el resultado todavía se pasa por unos bytes, las partes se ajustan y lo intenta una vez más, así que el archivo que descargas siempre queda por debajo del límite, no solo cerca de él.",
      ],
    },
  ],

  howToTitle: "Cómo convertir JPG a PDF de menos de 200 KB",
  steps: [
    { title: "Agrega tus imágenes", description: "Agrega las fotos o escaneos de cada página: JPG, PNG, WEBP o GIF." },
    { title: "Ordena y organiza las páginas", description: "Usa las flechas para fijar el orden; elige el tamaño de página y las imágenes por página." },
    { title: "Crea el PDF", description: "El PDF se descarga con menos de 200 KB, con las imágenes comprimidas solo lo necesario." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Un PDF de menos de 200 KB", description: "El archivo completo queda por debajo del límite, tenga las páginas que tenga." },
    { icon: "reorder", title: "Páginas en tu orden", description: "Reordena las páginas y mira el resultado en la vista previa antes de crear el PDF." },
    { icon: "lock", title: "Privado", description: "Los certificados y las identificaciones nunca salen de tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo convierto JPG a PDF de menos de 200 KB?", a: "Agrega las imágenes, ordénalas y pulsa «Crear PDF». El límite de 200 KB ya está configurado y las imágenes se comprimen solo lo necesario." },
    { q: "¿Cuántas páginas caben en un PDF de 200 KB?", a: "Dos páginas siguen claramente legibles; tres funcionan para certificados y formularios con letra de tamaño normal. Caben más, cada una con menos detalle." },
    { q: "¿Cómo pongo los dos lados de mi identificación en una página?", a: "Agrega las dos fotos y elige 2 en «Imágenes por página». Ambos lados quedan en una sola página." },
    { q: "¿Todas las páginas tendrán la misma calidad?", a: "Sí. El presupuesto de peso se reparte según la superficie de cada imagen, así que todas las páginas se comprimen de forma pareja." },
    { q: "Mis imágenes ya son ligeras, ¿se van a comprimir igual?", a: "No. Si ya forman un PDF de menos de 200 KB, se usan exactamente como están." },
    { q: "¿200 KB es lo mismo que 0,2 MB?", a: "Sí, 200 KB son 200.000 bytes. El PDF también cumple en los portales que cuentan 1 KB como 1024 bytes." },
    { q: "¿Se suben mis documentos?", a: "No. Las imágenes se comprimen y el PDF se arma en tu navegador." },
    { q: "¿Por qué tarda unos segundos?", a: "Cada imagen se comprime hasta su parte del límite y el PDF se reconstruye, todo en tu navegador. Las fotos grandes de teléfono tardan un poco más." },
    { q: "¿Puedo cambiar el orden después de agregar las fotos?", a: "Sí. Usa las flechas de cada imagen para moverla antes o después; la vista previa se actualiza al instante, y el orden que ves es el que tendrá el PDF." },
  ],

  security:
    "Las imágenes de tus documentos se comprimen y se unen en un PDF en tu dispositivo, dentro de tu navegador. No se sube ni se guarda nada en ningún lugar.",
};

export default content;
