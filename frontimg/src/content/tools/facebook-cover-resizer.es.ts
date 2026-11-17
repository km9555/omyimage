import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/portada-facebook (variant of resize-image).
 * Target query: «portada de Facebook»; secondary «tamaño portada Facebook».
 */
const content: ToolPageContent = {
  toolId: "facebook-cover-resizer",
  locale: "es",
  name: "Portada de Facebook: ajustar tamaño",
  tagline:
    "Lleva cualquier imagen al tamaño de la foto de portada de Facebook: 851 × 315 píxeles como JPG sRGB ligero, recortada o rellenada con borde, pensando en el recorte del teléfono. Gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Portada de Facebook: tamaño 851 × 315 px | oMyImage",
  metaDescription:
    "El tamaño de portada de Facebook correcto: lleva tu imagen a 851 × 315 píxeles como JPG sRGB ligero. Tu portada de Facebook recortada o con borde, gratis.",

  intro:
    "La portada de Facebook es ancha y baja, y se muestra con dos formas distintas: una franja ancha en la PC y un recorte más alto y estrecho en el teléfono. Si subes cualquier foto sin más, Facebook decide qué se corta. Esta herramienta se abre ajustada al tamaño de portada de Facebook, 851 × 315 píxeles, y guarda un JPG: agrega tu imagen, elige recortar o rellenar con borde, y descarga una portada que carga rápido y muestra justo lo que querías mostrar.",

  sections: [
    {
      heading: "El tamaño de portada que recomienda Facebook",
      id: "spec",
      body: [
        "Facebook recomienda subir las portadas como archivos JPG en sRGB de 851 píxeles de ancho y 315 de alto, idealmente de menos de 100 KB para que carguen rápido. El mínimo que acepta es de 400 × 150 píxeles. Una portada que mide exactamente 851 × 315 no necesita reacomodarse en el escritorio.",
        "La herramienta guarda un JPG en sRGB por defecto. Con una foto llena de detalle, el archivo puede pasar de 100 KB aun con calidad alta. Baja un poco el control de calidad, o pasa después el resultado por el modo de 100 KB del compresor, si te importa más la velocidad de carga que el último detalle.",
      ],
    },
    {
      heading: "El escritorio y el teléfono muestran partes distintas",
      id: "crop",
      body: [
        "En la PC, la portada se muestra a unos 820 × 312 píxeles, casi la imagen completa. En el teléfono aparece a unos 640 × 360, una forma más alta, así que se cortan los bordes izquierdo y derecho. Todo lo que esté cerca de los lados, como un nombre o un logotipo en una esquina, puede desaparecer para quien visita desde el teléfono.",
        "Mantén los textos y las caras en el centro de la imagen, y deja los extremos para un fondo que se pueda perder. En los perfiles personales, tu foto de perfil también tapa la parte inferior izquierda de la portada, así que deja esa zona tranquila.",
      ],
    },
    {
      heading: "Recortar y rellenar o rellenar con borde",
      id: "fit",
      body: [
        "«Recortar y rellenar», la opción predeterminada, escala la imagen hasta cubrir todo el marco de 851 × 315 y recorta lo que sobra por igual. Va bien con paisajes, fotos de grupo tomadas a cierta distancia y fotos anchas de producto. Si el motivo está muy arriba o muy abajo en la imagen, recórtala antes tú mismo con el botón de recorte de la tarjeta de la imagen.",
        "«Rellenar con borde» encaja la imagen completa dentro del marco y llena los lados con un color. Sirve para un logotipo cuadrado, un cartel o el flyer de un evento que no puede perder ningún borde: elige en «Color del borde» un color que combine con el diseño.",
      ],
    },
    {
      heading: "Textos, logotipos y PNG",
      id: "text",
      body: [
        "Facebook vuelve a comprimir las portadas, y la compresión JPG afecta sobre todo a los textos nítidos y a los logotipos. Si tu portada es casi todo letras o gráficos planos, elige PNG como formato de salida: Facebook indica que el PNG suele dar mejor resultado en imágenes con texto o con un logotipo.",
      ],
    },
    {
      heading: "Cómo cambiar tu portada de Facebook",
      id: "upload",
      body: [
        "En tu perfil o en tu página, haz clic en Editar foto de portada o en el icono de la cámara sobre la portada, elige Subir foto y selecciona la imagen descargada. Como ya tiene el tamaño correcto, el paso de arrastrar para reacomodar debería mostrar la imagen completa; guarda cuando se vea bien. Las páginas de Facebook usan la misma portada ancha, así que la misma imagen sirve también para la página de un negocio.",
      ],
    },
  ],

  howToTitle: "Cómo ajustar una imagen al tamaño de portada de Facebook",
  steps: [
    { title: "Agrega tu imagen", description: "Selecciona un JPG, PNG, WEBP, GIF o BMP: una foto, un cartel o un diseño." },
    { title: "Recorta o rellena", description: "El tamaño de portada de 851 × 315 ya está ajustado; elige «Recortar y rellenar» o «Rellenar con borde»." },
    { title: "Descarga", description: "Haz clic en «Redimensionar y descargar» y obtén un JPG listo para ponerlo como portada." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactamente 851 × 315", description: "El tamaño de portada que recomienda Facebook, sin reacomodar nada en el escritorio." },
    { icon: "speed", title: "JPG sRGB ligero", description: "Se guarda como JPG en sRGB, el formato que Facebook sugiere para que cargue rápido." },
    { icon: "lock", title: "En tu navegador", description: "Tu imagen se redimensiona en tu dispositivo y nunca se sube." },
  ],

  faqs: [
    { q: "¿Cuál es el tamaño de la portada de Facebook?", a: "Súbela a 851 × 315 píxeles. Facebook la muestra a unos 820 × 312 en la PC y a 640 × 360 en el teléfono; el mínimo es 400 × 150." },
    { q: "¿Por qué mi portada se ve cortada en el teléfono?", a: "Los teléfonos muestran un recorte más alto de la portada y cortan los bordes izquierdo y derecho. Mantén los textos y las caras en el centro." },
    { q: "¿Cómo dejo mi imagen en 851 × 315?", a: "Agrégala aquí: el tamaño de portada ya está seleccionado. Elige «Recortar y rellenar» o «Rellenar con borde» y luego «Redimensionar y descargar»." },
    { q: "¿JPG o PNG para la portada de Facebook?", a: "JPG para fotos: Facebook recomienda un JPG sRGB de menos de 100 KB. PNG para portadas que son sobre todo texto o un logotipo." },
    { q: "¿Cómo dejo la portada por debajo de 100 KB?", a: "Baja el control de calidad antes de redimensionar, o comprime después el resultado a 100 KB con el compresor." },
    { q: "¿Puedo usar la misma imagen en una página de Facebook?", a: "Sí. Las páginas usan la misma portada ancha; 851 × 315 funciona, con el mismo consejo de dejar lo importante en el centro." },
    { q: "Mi portada se ve borrosa, ¿por qué?", a: "Puede que la imagen original fuera más pequeña que 851 × 315 y se ampliara, o que Facebook comprimiera los detalles finos. Parte de una imagen más grande y usa letra grande." },
    { q: "¿Se sube mi imagen a algún sitio?", a: "No. Se redimensiona en tu navegador; solo tú la subes a Facebook." },
  ],

  security:
    "Tu imagen se redimensiona por completo en tu navegador. Las imágenes muy grandes pueden procesarse en nuestro servidor y se eliminan de inmediato; no se guarda nada.",
};

export default content;
