import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/quitar-fondo. Structure lives in
 * ToolPageShell.
 *
 * Target query "quitar fondo" (201K ES / 450K MX per month) — the biggest
 * Spanish query on the site. Secondaries "quitar fondo imagen" (90.5K /
 * 110K), "eliminar fondo" (40.5K / 90.5K), "borrar fondo", "fondo
 * transparente" and "gratis" live in the intro, a section heading and the
 * FAQs. The marketplace example names what Spanish-speaking sellers use
 * (Amazon, Mercado Libre, eBay, Shopify) without inventing their rules.
 * Addressed in "tú".
 */
const content: ToolPageContent = {
  toolId: "remove-background",
  locale: "es",
  name: "Quitar fondo",
  tagline:
    "Quita el fondo de cualquier imagen automáticamente con IA y descarga un PNG transparente y limpio. Con el motor de código abierto rembg.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Quitar fondo de imagen gratis – online con IA | oMyImage",
  metaDescription:
    "Quitar fondo de imagen gratis con IA: elimina el fondo de fotos de personas, productos y logos y descarga un PNG transparente. Sin registro ni marca de agua.",

  variantsHeading: "Cambiar o desenfocar el fondo en su lugar",

  intro:
    "Quitar el fondo de una foto aquí toma un solo clic. «Quitar fondo» de oMyImage usa un modelo de IA de código abierto que detecta el sujeto —una persona, un producto o un objeto— y vuelve transparente todo lo demás. Así puedes quitar el fondo de una imagen, eliminar el fondo de una foto de producto o borrar el fondo de un logotipo y obtener un PNG con fondo transparente para tiendas en línea, presentaciones y diseños, gratis y sin marca de agua. El trabajo pesado de la IA se ejecuta en nuestro servidor; el resultado se descarga como PNG transparente.",

  sections: [
    {
      heading: "Qué hace realmente el modelo de IA",
      id: "how",
      body: [
        "Esto no es croma. Los quitafondos antiguos buscaban un rango de píxeles parecidos —el método de la pantalla verde— y fallaban en cuanto el fondo tenía muchos elementos o el sujeto compartía su color. Lo que se ejecuta aquí es un modelo de segmentación entrenado con una enorme cantidad de imágenes, que predice para cada píxel qué tan probable es que pertenezca al sujeto en primer plano.",
        "Por eso funciona con una persona de pie en una habitación cualquiera y no solo frente a un fondo de estudio. El modelo aprendió cómo suelen verse las personas, los productos y los animales, así que puede separarlos de un fondo que nunca ha visto antes.",
        "Eso también explica los casos en los que falla. Cuando el modelo no está seguro —porque el sujeto y el fondo tienen tonos parecidos, porque el borde es realmente ambiguo o porque el sujeto es algo poco común—, la máscara queda suave o irregular justo en esos puntos. Hace una estimación informada; no está midiendo nada.",
      ],
    },
    {
      heading: "Cómo eliminar el fondo de una imagen con un recorte limpio",
      id: "tips",
      body: [
        "Lo que más importa es el contraste. Un sujeto que se distingue del fondo en brillo o color se separa limpiamente; uno que se confunde con él, no. Si tú tomas la foto, esa sola decisión vale más que cualquier ajuste.",
        "Una luz pareja y suave también ayuda. Las sombras duras que caen sobre el límite entre el sujeto y el fondo confunden el borde, y un sujeto iluminado desde atrás a menudo pierde su contorno por completo. La resolución influye en los detalles: una imagen pequeña y muy comprimida le da al modelo menos material, y los artefactos de JPG alrededor de los bordes son justo donde los recortes salen mal.",
        "Por último, mantén el sujeto completo dentro del encuadre siempre que puedas. Si el borde de la foto lo corta, el modelo no tiene un límite que encontrar por ese lado, y el resultado suele ser un corte recto a lo largo del marco.",
      ],
    },
    {
      heading: "Qué hacer con un PNG de fondo transparente",
      id: "uses",
      body: [
        "El uso más común es la foto de producto para una publicación en un marketplace, donde un fondo blanco o transparente y limpio muchas veces es un requisito y no una simple preferencia. Amazon, eBay y la mayoría de las plataformas de comercio electrónico lo especifican de forma explícita, y en Mercado Libre o en una tienda de Shopify los productos recortados se ven mucho más profesionales.",
        "Además: fotos de perfil y retratos de equipo que deben ir sobre un color de marca, diapositivas de presentación en las que un sujeto flotante se ve mucho mejor que una foto con un rectángulo que no combina detrás, logotipos y stickers, y cualquier diseño en el que el sujeto tenga que superponerse a otros elementos. Como el resultado es un PNG normal con canal alfa, cualquier programa de diseño lo entiende.",
      ],
    },
    {
      heading: "Por qué esta herramienta necesita un servidor",
      id: "server",
      body: [
        "Casi todo en este sitio se ejecuta dentro de tu navegador. Quitar el fondo no, y la razón es el tamaño: el modelo de segmentación es demasiado grande para descargarlo de forma razonable en una pestaña del navegador, y necesita más capacidad de cálculo de la que una pestaña puede ofrecer con comodidad.",
        "Por eso el modelo se ejecuta como un proceso aparte en nuestra máquina. Tu imagen se envía por una conexión HTTPS cifrada, se procesa, y tanto el archivo subido como el resultado se eliminan en menos de una hora. No se conserva, no se indexa ni se usa para entrenar nada. Las páginas que suben tus archivos lo dicen claramente en lugar de dar a entender otra cosa.",
      ],
    },
  ],

  howToTitle: "Cómo quitar el fondo de una imagen",
  steps: [
    { title: "Sube tu imagen", description: "Selecciona una imagen, o arrástrala y suéltala en el área de trabajo." },
    { title: "Quita el fondo", description: "Haz clic en «Quitar fondo»: nuestra IA detecta el sujeto y elimina el resto." },
    { title: "Descarga", description: "Descarga tu sujeto como PNG transparente, listo para cualquier fondo." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Detección del sujeto con IA", description: "Una red neuronal de código abierto encuentra personas, productos y objetos y elimina el fondo automáticamente." },
    { icon: "opacity", title: "PNG transparente", description: "El resultado es un PNG limpio y transparente que puedes colocar sobre cualquier color, foto o diseño." },
    { icon: "verified_user", title: "Motor de código abierto", description: "Funciona con rembg: gratis, de código abierto y apto para uso comercial." },
  ],

  faqs: [
    { q: "¿Cómo funciona quitar el fondo?", a: "Un modelo de IA (U²-Net, a través del proyecto de código abierto rembg) identifica el sujeto principal y vuelve transparente todo lo demás." },
    { q: "¿En qué formato se descarga el resultado?", a: "Como PNG transparente, para que puedas colocar tu sujeto sobre cualquier fondo nuevo." },
    { q: "¿Funciona con productos y personas?", a: "Sí: maneja bien personas, productos, animales y la mayoría de los sujetos claros. Los detalles muy finos, como cabellos sueltos, pueden variar." },
    { q: "¿De verdad puedo quitar el fondo gratis?", a: "Sí. No necesitas registrarte y el resultado no lleva marca de agua. El motor (rembg + U²-Net) es de código abierto y apto para uso comercial." },
    { q: "¿Se guardan mis imágenes?", a: "No. Los archivos procesados se guardan solo un momento para tu enlace de descarga y se eliminan automáticamente en menos de una hora." },
    { q: "¿Qué tipo de imágenes funcionan mejor?", a: "Un sujeto claro sobre un fondo con el que contraste. Retratos, productos sobre una superficie lisa y mascotas funcionan bien. Al modelo le cuesta cuando el sujeto y el fondo comparten colores y tonos: un gato gris en un sillón gris es realmente difícil." },
    { q: "¿Funciona con cabello y pelo de animales?", a: "Bastante bien, y justo aquí es donde los quitafondos solían fallar estrepitosamente. Los mechones finos son el caso más difícil para cualquier recorte, así que espera que el modelo acierte la forma general y pierda algunos cabellos sueltos en el borde. Una buena separación entre sujeto y fondo ayuda muchísimo." },
    { q: "¿Por qué el resultado tiene que ser PNG?", a: "Porque la transparencia necesita un canal alfa y JPG no lo tiene. Si guardaras el recorte como JPG, la zona eliminada volvería como blanco sólido, lo que anula el propósito. WEBP también admite transparencia si necesitas un archivo más pequeño para la web." },
    { q: "¿Puedo poner un fondo nuevo detrás del sujeto?", a: "Sí. Para un color sólido —blanco, azul o rojo para una foto de documento— usa «Cambiar fondo de foto», que coloca el recorte sobre cualquier color en un solo paso. «Desenfocar fondo» conserva el sujeto y suaviza la escena original detrás de él. El PNG transparente de esta página también funciona en cualquier programa de diseño." },
    { q: "¿Por qué esta herramienta usa un servidor si otras no?", a: "Porque usa una red neuronal demasiado grande para descargarla en una pestaña del navegador. El modelo se ejecuta como un proceso aparte en nuestra máquina, tu imagen se envía por HTTPS, y tanto el archivo subido como el resultado se eliminan en menos de una hora." },
    { q: "¿Puedo quitar el fondo de varias imágenes a la vez?", a: "Esta herramienta procesa una imagen cada vez, porque cada ejecución es un cálculo pesado del modelo y no una operación rápida de píxeles. Para un lote, procésalas una tras otra: cada una tarda unos segundos." },
    { q: "¿Es seguro subir fotos personales?", a: "Tu imagen se usa únicamente para quitar el fondo, viaja cifrada y se elimina como máximo en una hora. No se comparte con terceros ni se usa para entrenar modelos. Aun así, no subas imágenes de otras personas sin su consentimiento." },
  ],

  security:
    "El procesamiento se ejecuta en nuestro servidor con el motor de código abierto rembg. Los resultados se guardan solo un momento detrás de un enlace de descarga privado y se eliminan automáticamente en menos de una hora. Nunca compartimos ni reutilizamos tus imágenes.",

  ui: {
    "Background colour": "Color de fondo",
    "Blur background": "Desenfocar fondo",
    "Blur strength": "Intensidad del desenfoque",
    "Change background": "Cambiar fondo",
    "Finding the subject…": "Buscando el sujeto…",
    "ID photo colours": "Colores para fotos de documento",
    "The first run finds the subject on our server; changing the blur afterwards happens in your browser, with no extra run.": "La primera ejecución encuentra el sujeto en nuestro servidor; después, cambiar el desenfoque se hace en tu navegador, sin otra ejecución.",
    "The first run removes the background on our server; changing the colour afterwards happens in your browser, with no extra run.": "La primera ejecución quita el fondo en nuestro servidor; después, cambiar el color se hace en tu navegador, sin otra ejecución.",
    // RemoveBgTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "Remove background": "Quitar fondo",
    "Removing background…": "Quitando el fondo…",
    "or drop a JPG, PNG or WEBP here": "o suelta aquí un JPG, PNG o WEBP",
    "a transparent PNG. Powered by the open-source rembg engine on the server.":
      "un PNG transparente. Con el motor de código abierto rembg en el servidor.",
    // Backend sentences this tool can surface (routes/image/remove-background).
    "Background removal isn't enabled on this server (rembg not installed).":
      "Quitar el fondo no está disponible en este servidor por ahora.",
  },
};

export default content;
