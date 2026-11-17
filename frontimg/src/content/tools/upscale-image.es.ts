import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/mejorar-calidad-imagen. Structure
 * lives in ToolPageShell.
 *
 * Target query "mejorar calidad de imagen" (8.1K per month). People search for
 * the RESULT (a better picture) more than for the operation, so the H1 names
 * the result and the copy explains the enlargement. Secondaries "mejorar
 * calidad de foto", "aumentar resolución", "upscale" and "escalar imagen" live
 * in the intro, a section heading and the FAQs. Addressed in "tú".
 */
const content: ToolPageContent = {
  toolId: "upscale-image",
  locale: "es",
  name: "Mejorar calidad de imagen",
  tagline:
    "Amplía y mejora imágenes hasta 4× con una IA que agrega detalle real en lugar de difuminar, y que de paso da nitidez a fotos suaves, con ruido o muy comprimidas. Con el modelo de código abierto Real-ESRGAN.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Mejorar calidad de imagen online con IA, gratis | oMyImage",
  metaDescription:
    "Mejorar calidad de imagen con IA: aumenta la resolución 2×, 3× o 4× sin que se vea borrosa. Mejora la calidad de fotos JPG, PNG y WEBP gratis y sin registro.",

  variantsHeading: "Más formas de mejorar la nitidez de una foto",

  intro:
    "Haz más grandes tus imágenes pequeñas o de baja resolución sin que se vean borrosas. «Mejorar calidad de imagen» de oMyImage usa el modelo de código abierto Real-ESRGAN para ampliar fotos hasta 4× y reconstruir bordes y texturas, así que puedes aumentar la resolución y mejorar la calidad de una foto manteniendo el resultado nítido. Como la IA exige mucho cálculo, se ejecuta en nuestro servidor; después descargas la imagen en alta resolución.",

  sections: [
    {
      heading: "Interpolación o reconstrucción: qué pasa al hacer un upscale",
      id: "how",
      body: [
        "Redimensionar de forma normal tiene un límite incorporado. Cuando duplicas las dimensiones de una imagen, tres de cada cuatro píxeles de salida no tienen un píxel de origen detrás, así que el remuestreo promedia los vecinos. Promediar produce transiciones suaves, que es otra forma de decir que produce desenfoque: los bordes se suavizan, la textura fina desaparece y la ampliación se ve exactamente como lo que es.",
        "Un modelo de superresolución ataca el problema de otra manera. Se entrenó con una cantidad enorme de pares de imágenes —la misma escena en baja y en alta resolución— y aprendió qué tipo de detalle suele haber detrás de un borde borroso. Ante una nueva imagen de baja resolución, predice la versión en alta resolución en lugar de acercarse a ella promediando.",
        "La diferencia práctica se nota sobre todo en bordes y texturas. Donde la interpolación da un degradado suave, el modelo da un límite nítido; donde la interpolación da una mancha plana, el modelo da un grano verosímil, poros, el tejido de una tela o follaje.",
      ],
    },
    {
      heading: "La limitación honesta",
      id: "limits",
      body: [
        "El detalle es inventado. No es una crítica a la técnica: así funciona, y para la mayoría de los usos es justo lo que quieres. Pero significa que el resultado es una reconstrucción verosímil y no una fotografía más exacta, y esa diferencia importa en contextos concretos.",
        "No lo uses cuando los píxeles son una prueba. Trabajo forense, imágenes médicas, mediciones científicas, leer una placa de auto o un documento en una cámara de seguridad: en todos esos casos el modelo producirá sin problema detalles convincentes que nunca existieron, lo cual es peor que una imagen borrosa porque parece fiable.",
        "Para fotografía, comercio electrónico, impresión y diseño, nada de eso aplica. Quieres que la imagen se vea bien, y se ve bien.",
      ],
    },
    {
      heading: "Parte de la mejor fuente que tengas",
      id: "source",
      body: [
        "El modelo reconstruye a partir de lo que recibe, así que una entrada más limpia da un mejor resultado. Un original pequeño no es problema —de eso se trata—, pero un original pequeño que ha pasado por varias rondas de compresión JPG sí lo es, porque los bloques y halos se amplían y se afilan junto con el detalle real.",
        "Si puedes elegir entre un PNG de 600 píxeles y un JPG de 600 píxeles de la misma imagen, usa el PNG. Si tienes un original más grande que redujiste en algún momento, vuelve a él. Y si la imagen es una captura de una captura de pantalla, espera que los artefactos se reproduzcan con total fidelidad y aplomo.",
      ],
    },
    {
      heading: "Cuándo vale la pena aumentar la resolución",
      id: "uses",
      body: [
        "El caso habitual es una imagen que se ve bien en pantalla pero no alcanza para imprimir. Una foto de producto de 800 píxeles se ve perfecta en una página web y se desmorona en un volante, y escalar la imagen a menudo marca la diferencia entre repetir la sesión de fotos o no.",
        "Otros usos comunes: fotos familiares antiguas escaneadas en baja resolución, imágenes sacadas de un sitio web viejo del que ya no quedan originales, miniaturas que deben convertirse en imágenes de portada y logotipos de baja resolución que tienen que ir en un letrero. En cada caso, la alternativa no es una imagen mejor: es no tener imagen.",
      ],
    },
  ],

  howToTitle: "Cómo mejorar la calidad de una imagen",
  steps: [
    { title: "Sube tu imagen", description: "Selecciona una imagen, o arrástrala y suéltala en el área de trabajo." },
    { title: "Elige la escala", description: "Escoge 2×, 3× o 4× y haz clic en «Mejorar»: la IA agrega detalle mientras amplía." },
    { title: "Descarga", description: "Descarga tu imagen más grande y más nítida." },
  ],

  features: [
    { icon: "hd", title: "Hasta 4× más grande", description: "Amplía imágenes pequeñas o de baja resolución mientras la IA reconstruye el detalle en lugar de difuminarlo." },
    { icon: "auto_awesome", title: "Recuperación de detalle", description: "Real-ESRGAN restaura bordes y texturas para lograr resultados nítidos, incluso en fotos muy comprimidas." },
    { icon: "verified_user", title: "Motor de código abierto", description: "Funciona con Real-ESRGAN: gratis, de código abierto y apto para uso comercial." },
  ],

  faqs: [
    { q: "¿Cuánto puedo ampliar una imagen?", a: "Hasta 4×. Una imagen de 500 × 500 se convierte en una de 2000 × 2000, con detalle reconstruido por IA en lugar de un desenfoque suave." },
    { q: "¿Puedo usarlo para mejorar la calidad de una foto sin agrandarla?", a: "Sí, es la misma operación. Elige 2× para una pasada ligera que da nitidez a los bordes, limpia el ruido y recupera detalle en fotos suaves o comprimidas. Ten en cuenta que el resultado sigue teniendo el doble de las dimensiones originales; redúcelo después si necesitas el tamaño original." },
    { q: "¿Qué motor se usa?", a: "Real-ESRGAN, un modelo de superresolución de código abierto apto para uso comercial." },
    { q: "¿Por qué tarda unos segundos?", a: "Escalar con IA exige mucho cálculo y se ejecuta en nuestro servidor. Las imágenes más grandes y las escalas más altas tardan más." },
    { q: "¿Arregla una foto muy borrosa?", a: "Mejora notablemente la nitidez y el detalle, pero en casos extremos no puede inventar información que no existe." },
    { q: "¿Se guardan mis imágenes?", a: "No. Los resultados se guardan solo un momento para tu enlace de descarga y se eliminan automáticamente en menos de una hora." },
    { q: "¿En qué se diferencia de simplemente redimensionar?", a: "Redimensionar interpola entre los píxeles que ya tienes, por eso las imágenes ampliadas se ven suaves: no hay detalle nuevo del cual partir. Este modelo se entrenó con millones de pares de imágenes y predice cómo era de forma verosímil el detalle que falta, así que los bordes se mantienen nítidos y la textura se reconstruye en lugar de emborronarse." },
    { q: "¿El detalle agregado es real?", a: "No, y esto importa. El modelo inventa detalle verosímil; no recupera algo que se haya capturado. Para fotografía, diseño e impresión es exactamente lo que quieres. Para cualquier uso como prueba, forense, médico o científico es la herramienta equivocada, porque el resultado contiene información que nunca estuvo en el original." },
    { q: "¿Con qué imágenes funciona mejor?", a: "Con fotografías con textura real: caras, paisajes, telas, follaje. También funciona bien con gráficos limpios de baja resolución. Le cuesta con imágenes que ya están muy comprimidas, porque amplía fielmente los artefactos de JPG junto con todo lo demás." },
    { q: "¿Hay un límite de tamaño?", a: "Sí. Hay un tope de píxeles de entrada porque escalar con IA es realmente costoso de calcular: el trabajo crece con el tamaño de salida, no con el de entrada. Las imágenes muy grandes se rechazan desde el principio en lugar de agotar el tiempo a medio proceso. Si te topas con el límite, recorta la parte que realmente necesitas." },
    { q: "¿En qué formato recibo la imagen?", a: "En el mismo que subiste: un JPG vuelve como JPG, un PNG como PNG y un WEBP como WEBP. Los JPG se vuelven a codificar en alta calidad con resolución de color completa, para que el archivo tenga un tamaño razonable en lugar de inflarse como un PNG sin pérdida varias veces más grande. La transparencia se conserva en PNG y WEBP." },
    { q: "¿Puedo mejorar la misma imagen más de una vez?", a: "Puedes, pero rara vez ayuda. La segunda pasada trabaja sobre el detalle inventado de la primera y no sobre información real, así que los errores se acumulan y el resultado empieza a verse artificial. Una sola pasada desde el mejor original que tengas casi siempre es mejor." },
    { q: "¿Puedo aumentar la resolución de una foto para imprimirla?", a: "Sí, es uno de los usos más comunes. Para una impresión nítida se calculan unos 300 DPI: una foto de 10 × 15 cm necesita alrededor de 1200 × 1800 píxeles. Si tu imagen solo tiene la mitad, escalarla 2× la lleva a la resolución necesaria." },
  ],

  security:
    "El escalado se ejecuta en nuestro servidor con el motor de código abierto Real-ESRGAN. Los resultados se guardan solo un momento detrás de un enlace de descarga privado y se eliminan automáticamente en menos de una hora. Nunca compartimos ni reutilizamos tus imágenes.",

  ui: {
    // UpscaleTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "or drop a JPG, PNG or WEBP here": "o suelta aquí un JPG, PNG o WEBP",
    "Upscale": "Mejorar",
    "Upscaling…": "Mejorando…",
    "Scale factor": "Factor de escala",
    // unblur-image and image-to-hd modes (UpscaleTool preset.mode)
    "Unblur": "Dar nitidez",
    "Unblurring…": "Dando nitidez…",
    "Keep the original size": "Mantener el tamaño original",
    "The AI sharpens at twice the resolution, then the photo is returned at its own size — same picture, crisper.": "La IA da nitidez al doble de resolución y luego te devuelve la foto en su propio tamaño: la misma imagen, más nítida.",
    "You get the sharpened photo at twice its size — useful for small or pixelated pictures.": "Recibes la foto con más nitidez al doble de su tamaño: útil para imágenes pequeñas o pixeladas.",
    "Convert to HD": "Convertir a HD",
    "Target size": "Tamaño objetivo",
    "The longer side comes out at this size. The AI scale (2×, 3× or 4×) is chosen for you.": "El lado más largo sale con este tamaño. La escala de la IA (2×, 3× o 4×) se elige por ti.",
    "A very small picture may not reach 4K even at 4× — you then get the 4× result.": "Una imagen muy pequeña puede no llegar a 4K ni siquiera con 4×; en ese caso recibes el resultado a 4×.",
    // Backend sentences this tool can surface (routes/image/upscale)
    "AI upscaling isn't enabled on this server (Real-ESRGAN not installed).":
      "El escalado con IA no está disponible en este servidor por ahora.",
  },
};

export default content;
