import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/tamano-miniatura-youtube (variant of resize-image).
 * Target query: «tamaño de miniatura de YouTube»; secondary «miniatura de YouTube», «1280 x 720».
 */
const content: ToolPageContent = {
  toolId: "youtube-thumbnail-resizer",
  locale: "es",
  name: "Tamaño de miniatura de YouTube",
  tagline:
    "Lleva cualquier imagen al tamaño de miniatura de YouTube: exactamente 1280 × 720 píxeles, en 16:9, guardada como JPG muy por debajo del límite de 2 MB. Recorta o rellena con borde, gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Tamaño de miniatura de YouTube: 1280 × 720 | oMyImage",
  metaDescription:
    "Ajusta tu imagen al tamaño de miniatura de YouTube: 1280 × 720 píxeles en 16:9, como JPG de menos de 2 MB. Recorta o rellena con borde, gratis y sin registro.",

  intro:
    "YouTube pide miniaturas personalizadas de 1280 × 720 píxeles, en un marco 16:9 y de menos de 2 MB. Una captura de tu edición, una foto del teléfono o un diseño exportado con el tamaño equivocado casi nunca cumple las tres condiciones. Esta herramienta se abre ya ajustada al tamaño de miniatura de YouTube: agrega tu imagen, elige si quieres recortarla para llenar el marco o rellenarla con un color, y descarga un JPG que YouTube Studio acepta a la primera.",

  sections: [
    {
      heading: "El tamaño de miniatura que pide YouTube",
      id: "spec",
      body: [
        "Según las indicaciones de YouTube, una miniatura personalizada debe tener una resolución de 1280 × 720 píxeles, con un ancho mínimo de 640, en formato JPG, GIF o PNG, y pesar menos de 2 MB. La forma 16:9 coincide con el reproductor y con casi todos los lugares donde aparece una miniatura, desde los resultados de búsqueda hasta la columna de videos sugeridos. Por eso una imagen con otra forma recibe franjas o un recorte que decide YouTube y no tú.",
        "La herramienta guarda un JPG por defecto, porque un PNG de 1280 × 720 con un motivo fotográfico lleno de detalle puede superar los 2 MB por sí solo. Con la calidad predeterminada del 92 %, una miniatura típica se queda en unos pocos cientos de kilobytes: holgadamente por debajo del límite y con textos y caras nítidos.",
      ],
    },
    {
      heading: "Recortar y rellenar o rellenar con borde",
      id: "fit",
      body: [
        "«Recortar y rellenar» es la opción predeterminada: la imagen se escala hasta cubrir todo el marco 16:9 y lo que sobra se recorta por igual en los bordes. Es lo correcto para la mayoría de las fotos y capturas. Si tu motivo está cerca de un borde, recorta antes la imagen tú mismo con el botón de recorte de su tarjeta, para que la parte importante quede dentro del marco.",
        "«Rellenar con borde» conserva la imagen completa y llena el espacio restante con el color que elijas. Úsalo con una foto vertical del teléfono, un logotipo cuadrado o una diapositiva 4:3 que perdería demasiado al recortarse. Un color sólido de tu marca detrás de la imagen suele verse más intencional que unas franjas negras.",
      ],
    },
    {
      heading: "Diseñar para una pantalla pequeña",
      id: "small",
      body: [
        "La mayoría de la gente ve tu miniatura a una fracción de su tamaño real: unos pocos centímetros de ancho en el feed del teléfono o en la barra lateral. Las formas grandes, una cara clara y tres o cuatro palabras en letra grande sobreviven a eso; la letra pequeña, las fuentes delgadas y los fondos recargados desaparecen. Revisa la vista previa en tamaño pequeño antes de decidirte.",
        "Deja libre la esquina inferior derecha. Ahí YouTube muestra la duración del video, y cualquier cosa importante en esa esquina, como la última palabra de un título, queda tapada en todas las miniaturas.",
      ],
    },
    {
      heading: "Cómo subirla en YouTube Studio",
      id: "upload",
      body: [
        "Abre el video en YouTube Studio, ve a Detalles y elige Subir archivo en el apartado de la miniatura. Las miniaturas personalizadas requieren un canal verificado; si la opción aparece en gris, verifica primero tu cuenta con un número de teléfono. Los cambios pueden tardar un poco en verse en todas partes, porque las miniaturas se guardan en caché.",
        "Conserva tu diseño original. Si más adelante pruebas otro título u otro recorte, vuelve a redimensionar a partir del original y no del JPG descargado; así la miniatura nunca pierde calidad por guardarse una y otra vez.",
      ],
    },
    {
      heading: "Una miniatura a partir de un fotograma del video",
      id: "frame",
      body: [
        "Un buen fotograma del propio video es un excelente punto de partida. Pausa el video en tu reproductor o editor en el momento justo y haz una captura a pantalla completa. En una pantalla de 1080p ya mide 1920 × 1080, la misma forma 16:9, así que al reducirla a 1280 × 720 solo cambia la cantidad de píxeles. Las capturas de un teléfono en vertical son altas en lugar de anchas: rellénalas con borde o recorta la parte que importa.",
      ],
    },
  ],

  howToTitle: "Cómo ajustar una imagen al tamaño de miniatura de YouTube",
  steps: [
    { title: "Agrega tu imagen", description: "Selecciona un JPG, PNG, WEBP, GIF o BMP: una captura, una foto o un diseño." },
    { title: "Recorta o rellena", description: "El tamaño de miniatura de YouTube ya está ajustado; elige «Recortar y rellenar» o «Rellenar con borde»." },
    { title: "Descarga", description: "Haz clic en «Redimensionar y descargar» y obtén un JPG de 1280 × 720 listo para YouTube Studio." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactamente 1280 × 720", description: "El tamaño 16:9 que recomienda YouTube, así nada se recorta ni recibe franjas al subirlo." },
    { icon: "compress", title: "Menos de 2 MB", description: "Se guarda como JPG por defecto, muy por debajo del límite de peso para miniaturas." },
    { icon: "lock", title: "En tu navegador", description: "Tu diseño se redimensiona en tu dispositivo y nunca se sube." },
  ],

  faqs: [
    { q: "¿Cuál es el tamaño de una miniatura de YouTube?", a: "1280 × 720 píxeles, en relación 16:9, con un ancho mínimo de 640 píxeles. El archivo debe ser JPG, GIF o PNG y pesar menos de 2 MB." },
    { q: "¿Cómo dejo mi imagen en 1280 × 720?", a: "Agrégala aquí: el tamaño de miniatura de YouTube ya está seleccionado. Elige «Recortar y rellenar» o «Rellenar con borde» y luego «Redimensionar y descargar»." },
    { q: "¿Por qué YouTube dice que mi miniatura es demasiado grande?", a: "Seguramente el archivo pesa más de 2 MB, algo que pasa fácilmente con PNG. Esta herramienta guarda un JPG por defecto, que suele pesar unos pocos cientos de kilobytes." },
    { q: "¿Conviene recortar o rellenar con borde?", a: "Recorta las fotos y capturas para que el marco quede lleno. Rellena con borde las fotos verticales, los logotipos o las diapositivas que perderían demasiado al recortarse." },
    { q: "¿Por qué no puedo subir una miniatura personalizada?", a: "Las miniaturas personalizadas requieren una cuenta de YouTube verificada. Verifícala con un número de teléfono en la configuración de YouTube y la opción aparecerá en Studio." },
    { q: "¿Puedo usar una miniatura en PNG?", a: "Sí, YouTube acepta PNG. Elige PNG como formato de salida, pero comprueba que el archivo siga por debajo de 2 MB; el JPG es la opción más segura." },
    { q: "¿Qué debo evitar poner en la esquina?", a: "Nada importante en la esquina inferior derecha, donde YouTube muestra la duración del video. Mantén textos y caras lejos de ahí." },
    { q: "¿Puedo redimensionar varias miniaturas a la vez?", a: "Sí. Agrégalas todas; cada una queda en 1280 × 720 y se descargan juntas en un ZIP." },
    { q: "¿Se sube mi imagen a algún sitio?", a: "No. Se redimensiona en tu navegador; solo tú la subes a YouTube." },
  ],

  security:
    "Tu miniatura se redimensiona por completo en tu navegador. Las imágenes muy grandes pueden procesarse en nuestro servidor y se eliminan de inmediato; no se guarda nada.",
};

export default content;
