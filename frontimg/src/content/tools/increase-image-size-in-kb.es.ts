import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/aumentar-tamano-imagen-kb (variant of compress-image,
 * preset mode "increase"). Primary query: «Aumentar tamaño de imagen en KB»;
 * secondary: «aumentar peso de imagen», «aumentar KB de una foto».
 * The honest version: quality first, then pixels, padding only as a last
 * resort — and the result list says which happened.
 */
const content: ToolPageContent = {
  toolId: "increase-image-size-in-kb",
  locale: "es",
  name: "Aumentar tamaño de imagen en KB",
  tagline:
    "Haz que una foto o una firma pese al menos 10, 20, 50 KB o lo que pida el formulario, subiendo su calidad y, solo si hace falta, sus píxeles. Fija también un máximo para rangos como 20–50 KB. Gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Aumentar tamaño de imagen en KB – gratis | oMyImage",
  metaDescription:
    "Aumentar tamaño de imagen en KB hasta el mínimo del formulario, con un máximo opcional para rangos como 20–50 KB. Aumenta el peso de tu foto sin subirla.",

  intro:
    "Casi todas las herramientas de imagen hacen los archivos más pequeños. Algunos formularios piden lo contrario: «la foto debe pesar entre 20 KB y 50 KB», y la imagen de 12 KB que ya tienes es rechazada por ser demasiado pequeña. Esta página aumenta el tamaño del archivo en KB hasta el mínimo que indiques y lo mantiene por debajo de un máximo, si lo hay. Lo hace de forma honesta: primero guarda la imagen con más calidad y después con más píxeles, de modo que el resultado se ve al menos tan bien como el original. Nada de trucos que estropeen tu foto para sumar bytes.",

  sections: [
    {
      heading: "Por qué los formularios piden un tamaño mínimo",
      id: "why-minimum",
      body: [
        "Un mínimo es un control de calidad aproximado. Una foto guardada en 5 KB casi siempre se comprimió tanto, o se achicó tanto, que la cara ya no se reconoce, y quienes diseñaron el formulario eligieron un número de bytes como la forma más sencilla de descartarlas. Por eso la regla suele venir como un rango: al menos 20 KB para que la foto se vea clara y como mucho 50 KB para que el servidor no se sature.",
        "El objetivo, entonces, no es solo un número más grande. Es un archivo que supere el mínimo porque guarda más detalle, que es justo lo que la regla del formulario intentaba asegurar.",
      ],
    },
    {
      heading: "Cómo aumenta el peso de la imagen",
      id: "how",
      body: [
        "Primero la foto se vuelve a guardar como JPG con el ajuste de calidad más alto. Un archivo que estaba muy comprimido suele duplicar o triplicar su tamaño así, sin perder nada. Si aun así no llega al mínimo, la imagen se amplía paso a paso —según la raíz cuadrada de lo que falta, porque el tamaño del archivo crece con el número de píxeles— hasta cuatro veces su ancho y su alto.",
        "Si fijaste un máximo y el archivo ampliado lo supera, la calidad se baja lo justo para caer dentro del rango. Junto a cada archivo verás los detalles: cuánto creció y, si se amplió, sus nuevas dimensiones.",
      ],
    },
    {
      heading: "Cuándo se usa el relleno",
      id: "padding",
      body: [
        "Una imagen muy simple, como una firma pequeña sobre fondo blanco, puede quedarse por debajo del mínimo incluso con la calidad máxima y cuatro veces su ancho y su alto. Solo entonces la herramienta agrega al JPG un bloque de datos vacío hasta alcanzar el mínimo. Todos los visores de imágenes ignoran ese bloque: la imagen es exactamente la misma y el archivo simplemente pesa más.",
        "La lista de resultados indica cuándo un archivo se rellenó. Para firmas con un tamaño fijo en píxeles, la herramienta «Redimensionar firma» hace lo mismo después de limpiar y recortar la firma.",
      ],
    },
    {
      heading: "Rangos como 20–50 KB",
      id: "ranges",
      body: [
        "Escribe el número menor como mínimo y el mayor como máximo. Los archivos que ya son JPG y están dentro del rango se devuelven sin cambios, y todo lo demás se lleva dentro de él. Para el problema contrario —un archivo demasiado grande— usa «Comprimir imagen» o una de las páginas para comprimir a un tamaño concreto.",
        "Los formularios no se ponen de acuerdo en si un kilobyte son 1000 o 1024 bytes, así que la herramienta toma la lectura segura en cada extremo: un mínimo de 20 KB significa al menos 20 480 bytes, y un máximo de 50 KB significa como mucho 50 000. El archivo pasa en ambos casos.",
      ],
    },
  ],

  howToTitle: "Cómo aumentar el tamaño de una imagen en KB",
  steps: [
    { title: "Agrega tus fotos", description: "Selecciona o arrastra las imágenes que se quedan cortas: JPG, PNG o WebP." },
    { title: "Fija el mínimo (y un máximo)", description: "Escribe el mínimo en KB y también el máximo si el formulario indica un rango." },
    { title: "Descargar", description: "Cada archivo vuelve como un JPG que pesa al menos el mínimo indicado." },
  ],

  features: [
    { icon: "high_quality", title: "La calidad sube, no baja", description: "El archivo crece guardando primero la imagen con más calidad: no se degrada nada para sumar bytes." },
    { icon: "photo_size_select_large", title: "Rangos incluidos", description: "Fija un mínimo y un máximo, como 20–50 KB, y cada archivo queda dentro." },
    { icon: "lock", title: "Privado", description: "Tus fotos se procesan en tu navegador, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo aumento el tamaño de una foto en KB?", a: "Agrega la foto, escribe el mínimo que pide el formulario —por ejemplo, 20 KB— y haz clic en «Aumentar». Obtienes un JPG de al menos ese tamaño." },
    { q: "¿Aumentar los KB mejora la foto?", a: "No más allá del original: el detalle que se perdió no vuelve. Lo que hace es guardar lo que hay con más calidad, así que el resultado se ve al menos tan bien como el original, nunca peor." },
    { q: "Mi formulario dice de 20 KB a 50 KB. ¿Qué escribo?", a: "20 como mínimo y 50 como máximo. El archivo se lleva dentro de ese rango, y un JPG que ya está dentro se conserva tal cual." },
    { q: "¿Cambian las dimensiones?", a: "Solo si la calidad más alta no basta. En ese caso la imagen se amplía, hasta cuatro veces, y las nuevas dimensiones aparecen junto al archivo." },
    { q: "¿Qué significa «rellenado para alcanzar el mínimo»?", a: "La imagen era demasiado simple para llegar al mínimo incluso con la calidad máxima y cuatro veces su tamaño, así que se agregaron datos vacíos al archivo. La imagen en sí no cambia." },
    { q: "¿Puedo aumentar el tamaño de un PNG?", a: "Sí, pero el resultado es un JPG, que es lo que esperan los formularios con límites en KB. Las zonas transparentes se rellenan con el color de fondo que elijas." },
    { q: "¿Se sube mi foto a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Por qué un portal en línea rechaza mi foto por ser demasiado pequeña?", a: "Porque comprueba un tamaño mínimo en KB para descartar imágenes borrosas o diminutas. Aumenta aquí el archivo hasta el mínimo indicado y vuelve a subirlo." },
  ],

  security:
    "Las fotos y las firmas se procesan en tu dispositivo, dentro de tu navegador. Nada se sube ni se guarda. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se envía a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
