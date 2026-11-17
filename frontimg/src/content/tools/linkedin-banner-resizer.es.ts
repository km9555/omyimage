import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/banner-linkedin (variant of resize-image).
 * Target query: «banner de LinkedIn»; secondary «tamaño banner LinkedIn», «portada de LinkedIn».
 */
const content: ToolPageContent = {
  toolId: "linkedin-banner-resizer",
  locale: "es",
  name: "Banner de LinkedIn: ajustar tamaño",
  tagline:
    "Lleva cualquier imagen al tamaño de la foto de fondo de LinkedIn: exactamente 1584 × 396 píxeles, una franja 4:1, recortada o rellenada con borde. Gratis, en tu navegador y sin registro.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Banner de LinkedIn: tamaño 1584 × 396, gratis | oMyImage",
  metaDescription:
    "Crea tu banner de LinkedIn con el tamaño correcto: imagen a 1584 × 396 píxeles (4:1), recortada o con borde de color. Portada de LinkedIn gratis y sin registro.",

  intro:
    "El banner que aparece detrás de tu foto de perfil de LinkedIn es una franja larga y delgada: 1584 × 396 píxeles, cuatro veces más ancha que alta. Casi ninguna foto o diseño tiene de entrada esa forma, así que LinkedIn la recorta de forma impredecible o la rechaza. Esta herramienta se abre ajustada al tamaño de fondo de LinkedIn: agrega tu imagen, decide si quieres recortarla para llenar la franja o rellenarla con un color, y descarga un banner de LinkedIn que encaja exactamente.",

  sections: [
    {
      heading: "El tamaño del banner de LinkedIn",
      id: "spec",
      body: [
        "La foto de fondo de un perfil personal de LinkedIn mide 1584 × 396 píxeles, una relación 4:1, y se sube como JPG o PNG de menos de 8 MB. Una imagen con exactamente ese tamaño entra sin que la herramienta de recorte de LinkedIn tenga que adivinar qué franja de tu imagen conservar.",
        "Las páginas de empresa usan otra imagen de portada, más estrecha, de 1128 × 191 píxeles. Para una página de empresa, elige «Tamaño personalizado» y escribe esos valores en lugar del tamaño del banner personal.",
      ],
    },
    {
      heading: "Tu foto de perfil tapa una parte del banner",
      id: "overlap",
      body: [
        "En el escritorio, tu foto de perfil redonda queda encima de la zona inferior izquierda del banner, y en el teléfono el banner se muestra más estrecho, con los lados recortados. Los textos, logotipos o caras que estén en el tercio izquierdo o en los extremos pueden quedar ocultos.",
        "Coloca lo importante del diseño en el centro o a la derecha, y trata el lado izquierdo como fondo. Una zona lisa ahí también hace que tu foto de perfil destaque en lugar de competir con el banner.",
      ],
    },
    {
      heading: "Convertir una foto normal en una franja 4:1",
      id: "fit",
      body: [
        "«Recortar y rellenar», la opción predeterminada, escala la imagen al ancho completo y recorta por igual la parte de arriba y la de abajo: funciona bien con el perfil de una ciudad, un escritorio o una textura abstracta. Si lo interesante está cerca del borde superior o inferior, recorta antes la imagen con el botón de recorte de su tarjeta y elige la franja que quieres conservar.",
        "«Rellenar con borde» conserva la imagen completa y llena los lados con un color, algo ideal para un logotipo o un gráfico cuadrado: la imagen queda en el centro de una banda 4:1 de color sólido. Elige un color de tu marca o de la propia imagen para que la banda se vea intencional.",
      ],
    },
    {
      heading: "Cómo mantener la nitidez del banner",
      id: "sharp",
      body: [
        "Parte de una imagen de al menos 1584 píxeles de ancho. Una imagen más pequeña tiene que ampliarse para llenar el banner, y los píxeles estirados se ven suaves en pantallas grandes. Si solo tienes un logotipo pequeño, rellénalo con borde en lugar de ampliarlo a todo el ancho.",
        "El texto del banner debe ser grande y breve. En el teléfono, toda la franja mide apenas unos centímetros de alto, así que un eslogan en letra pequeña se vuelve ilegible; un nombre, un cargo o una sola línea funcionan mejor.",
      ],
    },
    {
      heading: "Cómo subir el banner a LinkedIn",
      id: "upload",
      body: [
        "Abre tu perfil, haz clic en el icono del lápiz sobre la zona del banner, elige Subir foto y selecciona la imagen descargada. Como ya mide 1584 × 396, el paso de posicionamiento debería mostrar la imagen completa; ajústala solo si quieres, aplica los cambios y guarda.",
      ],
    },
  ],

  howToTitle: "Cómo ajustar una imagen al tamaño del banner de LinkedIn",
  steps: [
    { title: "Agrega tu imagen", description: "Selecciona un JPG, PNG, WEBP, GIF o BMP: una foto, un diseño o un logotipo." },
    { title: "Recorta o rellena", description: "El tamaño de 1584 × 396 ya está ajustado; elige «Recortar y rellenar» o «Rellenar con borde»." },
    { title: "Descarga", description: "Haz clic en «Redimensionar y descargar» y obtén un banner listo para tu perfil de LinkedIn." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactamente 1584 × 396", description: "El tamaño de fondo 4:1, así LinkedIn no tiene nada que recortar." },
    { icon: "palette", title: "Borde del color que quieras", description: "Encaja un logotipo o un gráfico cuadrado en la franja sobre un fondo de color sólido." },
    { icon: "lock", title: "En tu navegador", description: "Tu imagen se redimensiona en tu dispositivo y nunca se sube." },
  ],

  faqs: [
    { q: "¿Cuál es el tamaño del banner de LinkedIn?", a: "1584 × 396 píxeles, relación 4:1, como JPG o PNG de menos de 8 MB, para la foto de fondo de un perfil personal." },
    { q: "¿Cómo dejo mi imagen en 1584 × 396?", a: "Agrégala aquí: el tamaño de LinkedIn ya está seleccionado. Elige «Recortar y rellenar» o «Rellenar con borde» y luego «Redimensionar y descargar»." },
    { q: "¿Por qué se oculta una parte de mi banner?", a: "En el escritorio, tu foto de perfil tapa la zona inferior izquierda, y en el teléfono se recortan los lados. Mantén el contenido clave en el centro o a la derecha." },
    { q: "¿Qué tamaño tiene la portada de una página de empresa de LinkedIn?", a: "1128 × 191 píxeles. Elige «Tamaño personalizado» y escribe esos valores." },
    { q: "Mi banner se ve borroso, ¿por qué?", a: "Probablemente la imagen original medía menos de 1584 píxeles de ancho y tuvo que ampliarse. Parte de una imagen más ancha, o rellena con borde un logotipo pequeño en lugar de estirarlo." },
    { q: "¿Puedo poner un logotipo sobre un fondo liso?", a: "Sí. Elige «Rellenar con borde» y un color en «Color del borde»; el logotipo queda centrado en una franja 4:1 de ese color." },
    { q: "¿Qué hace que un banner de LinkedIn sea bueno?", a: "Algo sencillo que acompañe tu perfil: tu ciudad, tu espacio de trabajo, tu producto o un color de marca con una línea breve de texto a la derecha." },
    { q: "¿JPG o PNG para el banner de LinkedIn?", a: "Los dos funcionan. El JPG va mejor con fotos; el PNG mantiene más nítidos los textos y los gráficos planos." },
    { q: "¿Se sube mi imagen a algún sitio?", a: "No. Se redimensiona en tu navegador; solo tú la subes a LinkedIn." },
  ],

  security:
    "Tu imagen se redimensiona por completo en tu navegador. Las imágenes muy grandes pueden procesarse en nuestro servidor y se eliminan de inmediato; no se guarda nada.",
};

export default content;
