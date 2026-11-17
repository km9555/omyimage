import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/banner-discord (variant of resize-image).
 * Target query: «banner de Discord»; secondary «tamaño banner Discord», «icono de servidor».
 */
const content: ToolPageContent = {
  toolId: "discord-banner-resizer",
  locale: "es",
  name: "Banner de Discord: ajustar tamaño",
  tagline:
    "Lleva cualquier imagen a un tamaño de Discord: un banner de perfil de 600 × 240, un banner de servidor de 960 × 540 o un icono de servidor de 512 × 512 píxeles, recortada o rellenada con borde. Gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Banner de Discord: perfil y servidor, gratis | oMyImage",
  metaDescription:
    "El tamaño correcto del banner de Discord: perfil 600 × 240, servidor 960 × 540 e icono de servidor 512 × 512. Recorta o rellena tu banner de Discord gratis.",

  intro:
    "Discord usa una forma distinta para cada espacio de imagen: una franja ancha 5:2 para el banner de tu perfil, un banner 16:9 encima de la lista de canales de un servidor, y cuadrados que se muestran como círculo para los iconos y los avatares. Esta herramienta se abre con el tamaño del banner de perfil y reúne los demás tamaños de Discord en el mismo menú. Agrega tu imagen, elige el espacio, recórtala o rellénala con borde, y sube un banner de Discord que Discord ya no tenga que recortar por ti.",

  sections: [
    {
      heading: "Todos los tamaños de imagen de Discord",
      id: "sizes",
      body: [
        "Banner de perfil: 600 × 240 píxeles, relación 5:2, que se muestra en la parte superior de tu tarjeta de perfil. Discord indica este valor como mínimo, y los banners son una función de Nitro. Banner de servidor: 960 × 540 píxeles, 16:9, que se muestra encima de la lista de canales; los servidores lo desbloquean con el nivel 2 de mejoras (Boost). Icono de servidor: un cuadrado que se ve como círculo; 512 × 512 es un buen tamaño. Avatar: un cuadrado que se ve como círculo, de al menos 128 × 128.",
        "Todos aceptan PNG, JPG y GIF de menos de 10 MB. Elige el espacio en el menú de tipo de plantilla y el ancho y el alto cambian solos para coincidir.",
      ],
    },
    {
      heading: "Banners más nítidos al doble de tamaño",
      id: "double",
      body: [
        "Los tamaños de Discord son mínimos, y en las pantallas de alta resolución un banner de 600 × 240 se ve algo suave. Para un resultado más nítido, elige «Tamaño personalizado» y escribe el doble de los valores: 1200 × 480 para un banner de perfil y 1920 × 1080 para un banner de servidor. Discord los reduce para que encajen y conserva la misma forma.",
        "Hazlo solo si la imagen original es al menos así de grande. Ampliar una imagen pequeña a 1200 píxeles de ancho no agrega detalle: solo crea un archivo borroso más grande.",
      ],
    },
    {
      heading: "Lo que tapa tu avatar",
      id: "overlap",
      body: [
        "En la tarjeta de perfil, tu avatar redondo queda encima de la parte inferior izquierda del banner, y el banner se muestra bastante pequeño. Un texto o una cara en esa esquina quedan ocultos, y los detalles finos se pierden. Mantén el motivo en el centro o en la mitad derecha y usa formas simples y marcadas.",
        "Los iconos y los avatares se recortan en círculo, así que sus esquinas nunca se ven. Mantén el logotipo o la cara bien dentro del cuadrado, o elige «Rellenar con borde» para que la imagen completa quede en el centro con un color de fondo alrededor.",
      ],
    },
    {
      heading: "Banners animados",
      id: "animated",
      body: [
        "Discord muestra banners y avatares GIF animados a los miembros de Nitro y en los servidores con mejoras. Esta herramienta trabaja con imágenes fijas: un GIF se redimensiona a partir de su primer fotograma y el resultado es un PNG, JPG o WEBP sin movimiento. Para conservar una animación, redimensiónala con una herramienta específica para GIF.",
      ],
    },
    {
      heading: "Cómo subir las imágenes a Discord",
      id: "upload",
      body: [
        "Para un banner de perfil, abre los ajustes de usuario, luego Perfiles, y elige cambiar el banner. Para un banner o icono de servidor, abre los ajustes del servidor, luego Vista general, y súbelo ahí. Como la imagen ya tiene la forma correcta, el paso de recorte de Discord conserva la imagen completa.",
      ],
    },
  ],

  howToTitle: "Cómo ajustar una imagen al tamaño del banner de Discord",
  steps: [
    { title: "Agrega tu imagen", description: "Selecciona un JPG, PNG, WEBP, GIF o BMP." },
    { title: "Elige el espacio de Discord", description: "El banner de perfil viene seleccionado; cambia a banner de servidor, icono de servidor o foto de perfil y luego recorta o rellena con borde." },
    { title: "Descarga", description: "Haz clic en «Redimensionar y descargar» y obtén una imagen que encaja exactamente en ese espacio." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Todos los tamaños de Discord", description: "Banner de perfil, banner de servidor, icono de servidor y avatar en un solo menú." },
    { icon: "crop", title: "Recortar o rellenar", description: "Llena todo el marco o conserva la imagen completa sobre un color de fondo." },
    { icon: "lock", title: "En tu navegador", description: "Tu imagen se redimensiona en tu dispositivo y nunca se sube." },
  ],

  faqs: [
    { q: "¿Cuál es el tamaño del banner de perfil de Discord?", a: "600 × 240 píxeles, relación 5:2: es el mínimo de Discord. Para un banner más nítido, usa 1200 × 480. Los banners de perfil requieren Nitro." },
    { q: "¿Cuál es el tamaño del banner de servidor de Discord?", a: "960 × 540 píxeles, 16:9. Una imagen de 1920 × 1080 se acepta y se reduce. Los banners de servidor requieren el nivel 2 de mejoras." },
    { q: "¿De qué tamaño debe ser el icono de un servidor de Discord?", a: "Un cuadrado que se ve como círculo; 512 × 512 píxeles funciona bien. Mantén el logotipo lejos de las esquinas." },
    { q: "¿Cuál es el peso máximo de un banner de Discord?", a: "Menos de 10 MB, en PNG, JPG o GIF." },
    { q: "¿Puedo crear un banner animado aquí?", a: "No. Los GIF se redimensionan a partir de su primer fotograma y se guardan como imagen fija. Para redimensionar una animación, usa una herramienta para GIF." },
    { q: "¿Por qué se oculta una parte de mi banner?", a: "Tu avatar tapa la zona inferior izquierda del banner de perfil. Mantén los textos y las caras en el centro o en la mitad derecha." },
    { q: "¿Por qué el icono de mi servidor sale cortado en las esquinas?", a: "Discord muestra los iconos como círculos. Mantén el logotipo en el centro del cuadrado, o elige «Rellenar con borde» para que quede sobre un color de fondo con espacio alrededor." },
    { q: "¿Puedo redimensionar varias imágenes a la vez?", a: "Sí. Agrégalas todas; cada una se ajusta al tamaño de Discord seleccionado y se descargan juntas en un ZIP." },
    { q: "¿Se sube mi imagen a algún sitio?", a: "No. Se redimensiona en tu navegador; solo tú la subes a Discord." },
  ],

  security:
    "Tu imagen se redimensiona por completo en tu navegador. Las imágenes muy grandes pueden procesarse en nuestro servidor y se eliminan de inmediato; no se guarda nada.",
};

export default content;
