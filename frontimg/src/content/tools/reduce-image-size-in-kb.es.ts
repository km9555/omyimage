import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/reducir-tamano-imagen-kb (variant of compress-image,
 * target-size mode with no limit pre-filled). Primary query: «Reducir tamaño
 * de imagen en KB». The hub page of the KB family: any limit, and what a KB
 * limit on a form actually means. Each common limit has its own page.
 */
const content: ToolPageContent = {
  toolId: "reduce-image-size-in-kb",
  locale: "es",
  name: "Reducir tamaño de imagen en KB",
  tagline:
    "Escribe cualquier límite —20 KB, 50 KB, 100 KB o 1 MB— y obtén el JPG más nítido que quepa por debajo. Varias imágenes a la vez, gratis y procesado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Reducir tamaño de imagen en KB – gratis | oMyImage",
  metaDescription:
    "Reducir tamaño de imagen en KB: escribe el límite, como 50 KB, 100 KB o 1 MB, y descarga el JPG más nítido que cabe. Reduce el peso de tus fotos sin subirlas.",

  intro:
    "Los formularios en línea no te piden un nivel de calidad, te piden un número: «foto de menos de 50 KB», «firma de 10 a 20 KB», «tamaño máximo del archivo: 1 MB». Esta herramienta funciona igual. Agrega tus imágenes, escribe el límite en KB o MB y cada una vuelve por debajo de él, con la calidad más alta que cabe. Solo se reducen las dimensiones en píxeles si la calidad por sí sola no basta. Así puedes reducir el peso de una imagen sin adivinar ajustes. Acepta JPG, PNG y WebP, procesa lotes completos de una sola vez y nunca sube tus fotos a ningún sitio.",

  sections: [
    {
      heading: "Fija el tamaño, no la calidad",
      id: "size-first",
      body: [
        "La forma habitual de achicar una foto para un formulario es ir probando: bajar un control de calidad, guardar, mirar el tamaño del archivo en el explorador de archivos y volver a empezar. Cada intento es una nueva compresión, y cada vez que vuelves a comprimir un JPG que ya estaba comprimido pierdes un poco más de detalle.",
        "Aquí indicas directamente el resultado que necesitas. La herramienta codifica la imagen varias veces en segundo plano, se acerca a la calidad más alta cuyo archivo sigue por debajo de tu límite y te entrega exactamente esa versión. Una foto de 12 megapíxeles con ruido, tomada con el teléfono, y una captura de pantalla limpia necesitan ajustes muy distintos para llegar a 100 KB. No hace falta que sepas cuáles: la búsqueda se hace por separado para cada imagen.",
      ],
    },
    {
      heading: "Qué significa «KB» en un formulario",
      id: "kb-meaning",
      body: [
        "Un kilobyte son 1000 o 1024 bytes, según quién cuente. El Explorador de Windows muestra los tamaños en unidades de 1024; la mayoría de los teléfonos y los Mac, y muchos formularios web, usan 1000. La diferencia es de solo un 2,4 %, pero basta para que un archivo de 50,5 KB sea rechazado por un formulario que admite «50 KB».",
        "La herramienta evita esa discusión tomando la lectura más estricta: un límite de 50 KB significa menos de 50 000 bytes. Ese archivo pasa tanto en un formulario que cuenta 1000 bytes por kilobyte como en uno que cuenta 1024. Puede que tu explorador de archivos muestre el resultado como 48 o 49 KB: ese pequeño margen es intencional.",
      ],
    },
    {
      heading: "Reducir KB no es lo mismo que reducir píxeles",
      id: "kb-vs-pixels",
      body: [
        "El tamaño del archivo y las dimensiones de la imagen son cosas distintas, y a veces los formularios piden ambas: «200 × 230 píxeles, menos de 50 KB». Los píxeles deciden qué tan grande se ve la imagen; los kilobytes, cuánto espacio ocupa. Una foto de 4000 píxeles de ancho puede caber en 100 KB, y una de 400 píxeles puede pesar 300 KB si está guardada como PNG sin comprimir.",
        "Si el formulario indica dimensiones exactas en píxeles, primero lleva la imagen a esas medidas con la herramienta «Redimensionar imagen» y luego baja aquí el archivo por debajo del límite en KB. Si solo indica un límite en KB, deja las dimensiones como están: esta herramienta las reduce por sí sola, y solo lo necesario.",
      ],
    },
    {
      heading: "Límites habituales y de dónde vienen",
      id: "common-limits",
      body: [
        "Las firmas y las huellas dactilares en formularios de exámenes y convocatorias de empleo suelen estar limitadas a 10–20 KB. Las fotos tipo carnet en esos mismos formularios rondan los 20–50 KB, a veces 100 KB. Los portales de admisión universitaria, los portales de empleo y los trámites en línea de visas o documentos de identidad suelen permitir de 100 a 300 KB por foto o documento escaneado, mientras que las subidas generales —tareas, solicitudes de soporte, anuncios clasificados, adjuntos de correo— suelen limitar las imágenes a 1–2 MB.",
        "Cada uno de esos límites frecuentes tiene su propia página con consejos para ese tamaño, enlazada más arriba. Esta página sirve para todo lo demás: cualquier número que escribas, en KB o en MB.",
      ],
    },
  ],

  howToTitle: "Cómo reducir el tamaño de una imagen en KB",
  steps: [
    { title: "Agrega tus imágenes", description: "Selecciona o arrastra uno o varios archivos JPG, PNG o WebP." },
    { title: "Escribe el límite", description: "Indica el tamaño máximo en KB o MB, o toca uno habitual como 50 KB o 100 KB." },
    { title: "Comprimir y descargar", description: "Cada imagen se guarda por debajo del límite; descarga un archivo o todos juntos en un ZIP." },
  ],

  features: [
    { icon: "straighten", title: "El tamaño que necesites", description: "Escribe cualquier límite en KB o MB, no solo una lista de valores fijos, y cada imagen queda por debajo." },
    { icon: "high_quality", title: "La mejor calidad que cabe", description: "La herramienta busca la calidad más alta bajo tu límite y solo reduce los píxeles cuando no queda otra opción." },
    { icon: "lock", title: "Se queda en tu dispositivo", description: "La compresión se hace en tu dispositivo, así que fotos de identificación, firmas y documentos no salen de él." },
  ],

  faqs: [
    { q: "¿Cómo reduzco el tamaño de una foto en KB?", a: "Agrega la foto, escribe el tamaño que necesitas en KB (o toca uno de los tamaños habituales) y haz clic en «Comprimir». El archivo que descargas queda garantizado por debajo de ese número, con la mejor calidad que cabe." },
    { q: "¿Reducir el peso de una imagen en KB es lo mismo que comprimirla?", a: "En la práctica, sí. Reducir una imagen «en KB» significa bajar el tamaño del archivo, y eso es lo que hace la compresión. Esta herramienta además reduce las dimensiones en píxeles cuando la compresión sola no alcanza el límite." },
    { q: "¿Por qué mi archivo muestra 49 KB si pedí 50 KB?", a: "Porque la herramienta se mantiene por debajo de 50 000 bytes, que tu equipo puede mostrar como unos 48,8 kilobytes de 1024 bytes cada uno. Ese margen garantiza que el archivo pase en las dos formas en que un formulario puede contar un kilobyte." },
    { q: "¿Puedo escribir un tamaño exacto como 37 KB?", a: "Sí. Sirve cualquier número entero o decimal, en KB o en MB. Los tamaños habituales son solo atajos." },
    { q: "¿Reducir los KB cambia las dimensiones de la imagen?", a: "Solo cuando es necesario. La herramienta baja primero la calidad y reduce el ancho y el alto únicamente si incluso con una calidad baja el archivo seguiría por encima de tu límite." },
    { q: "¿Qué formato me conviene elegir?", a: "JPG, salvo que sepas que el sitio acepta WebP. Casi todos los formularios aceptan JPG; WebP llega al mismo tamaño con un poco más de calidad, pero algunos portales antiguos todavía lo rechazan." },
    { q: "¿Qué pasa con un PNG transparente?", a: "JPG no puede guardar transparencia, así que las zonas transparentes se rellenan con el color de fondo que elijas: blanco por defecto, que es lo que esperan la mayoría de los formularios." },
    { q: "¿Puedo reducir muchas fotos al mismo tamaño a la vez?", a: "Sí. Agrega todas las que quieras; cada una se comprime por separado al mismo límite y puedes descargarlas juntas en un ZIP." },
    { q: "¿Se suben mis imágenes a algún servidor?", a: "Por lo general, no. La reducción se hace en tu navegador, en tu propio dispositivo. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se procesa en nuestro servidor y se elimina en aproximadamente una hora." },
  ],

  security:
    "Tus imágenes se quedan en tu dispositivo. La reducción del tamaño en KB ocurre en tu navegador: nada se sube, se guarda ni lo ve nadie más, algo importante cuando se trata de una foto de identificación o de una firma. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, se envía a nuestro servidor y se elimina en aproximadamente una hora.",
};

export default content;
