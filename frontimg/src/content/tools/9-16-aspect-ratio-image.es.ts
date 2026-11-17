import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/imagen-9-16-1080x1920 (variant of resize-image).
 * Target query: «formato 9:16» (1.3K/mo, MX); secondary «1080x1920» (1K ES / 1.9K MX).
 */
const content: ToolPageContent = {
  toolId: "9-16-aspect-ratio-image",
  locale: "es",
  name: "Imagen en formato 9:16 (1080x1920)",
  tagline:
    "Convierte cualquier foto, captura de pantalla o imagen de IA en una imagen en formato 9:16 de exactamente 1080 × 1920 píxeles: recortada, con borde o con fondo difuminado, nunca estirada. Gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },
  crossLink: { lead: "¿Tu imagen mide menos de 1080 píxeles de ancho?", label: "Amplíala primero", toolId: "upscale-image" },

  metaTitle: "Formato 9:16: imagen a 1080x1920 gratis | oMyImage",
  metaDescription:
    "Pasa cualquier imagen al formato 9:16 de 1080x1920 píxeles para Stories, Reels, TikTok, Shorts y Web Stories. Recorte, borde o fondo difuminado, gratis.",

  intro:
    "Las Stories, los Reels, los Shorts, los TikToks y las Google Web Stories llenan la pantalla de un teléfono en vertical, y todos piden la misma forma: el formato 9:16, idealmente de 1080 × 1920 píxeles. La mayoría de las imágenes no tienen esa forma. Una foto horizontal, una imagen cuadrada generada con IA o una toma 4:3 del teléfono termina recortada donde la aplicación quiera, o encajonada entre franjas negras. Este conversor se abre ya ajustado a 1080 × 1920. Agrega tus imágenes, decide cómo se convierte cada una en 9:16 —recortándola, rellenándola con un color o completando los huecos con una copia difuminada de sí misma— y descarga archivos que ocupan la pantalla de borde a borde.",

  sections: [
    {
      heading: "Qué es el formato 9:16",
      id: "ratio",
      body: [
        "La relación de aspecto es la forma de una imagen, escrita como ancho : alto. 9:16 significa nueve unidades de ancho por cada dieciséis de alto: un rectángulo alto, justo la forma de la pantalla de un teléfono moderno sostenido en vertical. Es el 16:9 de la televisión y de YouTube, girado 90 grados. Si divides 9 entre 16 obtienes 0,5625; cualquier imagen cuyo ancho dividido entre su alto dé 0,5625 es 9:16, sin importar su tamaño.",
        "La relación de aspecto por sí sola no dice nada de la nitidez. 720 × 1280, 1080 × 1920 y 2160 × 3840 son todas 9:16; solo cambia cuántos píxeles forman la imagen. Por eso una imagen 9:16 puede verse suave: la forma es correcta, pero tiene muy pocos píxeles para una pantalla de teléfono grande.",
      ],
    },
    {
      heading: "Por qué 1080x1920 píxeles es el estándar",
      id: "pixels",
      body: [
        "1080 × 1920 (casi siempre escrito 1080x1920) es Full HD en vertical: 1080 píxeles de ancho, 1920 de alto, unos 2,1 megapíxeles. Es el tamaño que recomiendan las grandes aplicaciones de video vertical para publicaciones a pantalla completa, y el tamaño con el que un teléfono graba video Full HD en vertical. Si subes algo más grande, la aplicación lo reduce; si subes algo más pequeño, lo amplía, y ahí es donde aparece el desenfoque.",
        "Guardada como JPG con la calidad predeterminada del 92 %, una foto de 1080 × 1920 suele pesar unos cuantos cientos de kilobytes: lo bastante ligera para cualquier formulario de subida y con detalle de sobra para la pantalla.",
      ],
    },
    {
      heading: "Dónde se usan las imágenes 9:16",
      id: "uses",
      body: [
        "Instagram Stories y Reels: las Stories llenan la pantalla a 1080 × 1920. Los Reels se reproducen al mismo tamaño, pero la cuadrícula de tu perfil muestra una vista previa recortada, así que mantén el motivo cerca del centro. Meta recomienda dejar libre de texto alrededor del 14 % superior e inferior —unos 250 píxeles—, porque ahí aparecen el nombre del perfil y la barra de respuesta.",
        "TikTok y YouTube Shorts: los dos están pensados para el formato vertical, y los dos colocan botones a lo largo del borde derecho y la descripción en la parte inferior. Pon todo lo que quieras que se vea en la zona central superior de una diapositiva o portada de 1080 × 1920. Los estados de WhatsApp, Snapchat y las historias de Facebook llenan la pantalla de la misma manera.",
        "Google Web Stories: cada página de una Web Story es una pantalla vertical sin márgenes, y el 9:16 a 1080 × 1920 es la forma que la llena sin franjas. Si todas las páginas tienen el mismo tamaño, la historia tampoco salta al avanzar. La imagen de póster de la historia tiene otra forma —3:4, de al menos 640 × 853 píxeles—, así que créala por separado.",
      ],
      link: {
        label: "Lee la guía (en inglés): Google Web Stories con imágenes de IA – tamaños, velocidad y reglas de Google",
        href: "/blog/google-web-stories-ai-images",
      },
    },
    {
      heading: "Convertir a 9:16 sin estirar la imagen",
      id: "convert",
      body: [
        "Estirar una imagen hasta 1080 × 1920 alarga las caras y vuelve ovalados los círculos, así que esta herramienta nunca lo hace. Una imagen de cualquier otra forma se convierte en 9:16 de una de estas tres maneras honestas, y tú eliges la que mejor le va.",
        "«Recortar y rellenar» (la opción predeterminada) escala la imagen hasta cubrir todo el marco 9:16 y recorta lo que sobra. Va bien con fotos verticales: una toma 3:4 del teléfono pierde solo una cuarta parte de su ancho. Con las horizontales es más duro —una foto 4:3 conserva apenas el 42 % de su ancho—, así que primero usa el botón de recorte de la tarjeta de la imagen. La ventana de recorte se abre fija en 9:16 y arrastras el marco sobre la parte que importa, en lugar de quedarte con el centro.",
        "«Rellenar con borde» conserva la imagen completa y llena las franjas de arriba y abajo con el color que elijas: negro, blanco o el color de tu marca. «Fondo difuminado» también conserva la imagen completa, pero llena esas franjas con una copia suavizada y ampliada de la misma imagen, el estilo que usan Reels y TikTok para los clips horizontales. Suele ser la mejor opción para fotos anchas, capturas de pantalla y diapositivas, porque no se pierde nada y la pantalla se ve llena.",
      ],
    },
    {
      heading: "Cómo mantener la nitidez",
      id: "sharp",
      body: [
        "Al recortar una imagen horizontal a 9:16 queda una franja estrecha que a menudo mide menos de 1080 píxeles de ancho. Una captura de 1920 × 1080 recortada a 9:16 mide solo 608 × 1080, así que hay que ampliarla casi al doble para llegar a 1080 × 1920. El fondo difuminado evita eso: la imagen se muestra a lo largo de los 1080 píxeles de ancho, que la captura de 1920 píxeles cubre sin ninguna ampliación. Las imágenes que ya son pequeñas desde el principio conviene pasarlas por un escalador con IA antes de convertirlas.",
        "Los generadores de imágenes con IA rara vez entregan 9:16 a tamaño completo. Muchos crean un cuadrado por defecto, la opción vertical de ChatGPT es de 1024 × 1536 (es decir, 2:3) y el 9:16 de Midjourney sale a unos 816 × 1456. Recórtalas o usa el fondo difuminado aquí; para un resultado más nítido, amplía primero las de 816 × 1456.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen al formato 9:16 (1080 × 1920)",
  steps: [
    { title: "Agrega tus imágenes", description: "Selecciona uno o varios archivos JPG, PNG, WEBP, GIF o BMP: fotos, capturas de pantalla o imágenes de IA." },
    { title: "Elige cómo encajarlas", description: "1080 × 1920 ya está ajustado. Elige «Recortar y rellenar», «Rellenar con borde» o «Fondo difuminado»; para recortar a mano, usa el botón de recorte de la tarjeta." },
    { title: "Descarga", description: "Haz clic en «Redimensionar y descargar» para obtener una imagen 9:16, o un ZIP si agregaste varias." },
  ],

  features: [
    { icon: "crop_portrait", title: "Exactamente 1080 × 1920", description: "Cada imagen sale en el tamaño Full HD 9:16 que esperan Stories, Reels, Shorts y Web Stories." },
    { icon: "blur_on", title: "Recorte, borde o difuminado", description: "Tres maneras de cambiar la forma sin estirar, incluido un fondo difuminado hecho con tu propia foto." },
    { icon: "lock", title: "Funciona en tu navegador", description: "Tus imágenes se convierten en tu dispositivo y no se suben." },
  ],

  faqs: [
    { q: "¿Qué es el formato 9:16?", a: "Un rectángulo alto de nueve unidades de ancho por cada dieciséis de alto: la forma de la pantalla de un teléfono en vertical. Es el formato panorámico 16:9 girado 90 grados." },
    { q: "¿Cuántos píxeles mide una imagen 9:16?", a: "El estándar es 1080 × 1920. 720 × 1280 y 2160 × 3840 también son 9:16, con menos o más píxeles; 1080 × 1920 es lo que recomiendan la mayoría de las aplicaciones." },
    { q: "¿1080x1920 es lo mismo que 9:16?", a: "Sí. 1080 entre 1920 da 0,5625, exactamente 9 entre 16. Toda imagen de 1080 × 1920 es 9:16." },
    { q: "¿Cómo convierto una imagen a 9:16 sin estirarla?", a: "Agrégala aquí y elige «Recortar y rellenar», «Rellenar con borde» o «Fondo difuminado». Las tres dan exactamente 1080 × 1920 y respetan las proporciones de la imagen; ninguna la estira." },
    { q: "¿Puedo elegir qué parte de la foto se conserva?", a: "Sí. Con «Recortar y rellenar» seleccionado, haz clic en el botón de recorte de la tarjeta de la imagen. La ventana se abre fija en 9:16; arrastra el marco sobre el motivo y aplica el recorte." },
    { q: "¿Qué diferencia hay entre 9:16 y 16:9?", a: "La orientación. 16:9 es horizontal (televisión, videos de YouTube, monitores); 9:16 es la misma forma en vertical (Stories, Reels, Shorts, pantallas de teléfono)." },
    { q: "¿Por qué mi imagen 9:16 se ve borrosa?", a: "Normalmente la original tenía muy pocos píxeles: una franja estrecha de una imagen horizontal se amplía para llegar a 1080 × 1920. Usa «Fondo difuminado» o amplía antes la imagen." },
    { q: "¿Sirve una imagen de 1080x1920 como fondo de pantalla del teléfono?", a: "Sí. Muchos teléfonos recientes son algo más altos que 9:16; en ellos el sistema amplía un poco la imagen y recorta algo de los lados. Mantén el motivo principal en el centro." },
    { q: "¿Instagram recorta mi imagen 9:16?", a: "En las Stories no: ahí el 9:16 se ve completo. Un Reel también se reproduce a pantalla completa, pero su vista previa en la cuadrícula del perfil sale recortada, así que mantén el motivo cerca del centro." },
    { q: "¿Puedo convertir varias imágenes a 9:16 a la vez?", a: "Sí. Agrégalas juntas; cada una queda en 1080 × 1920 con el ajuste que elegiste y se descargan en un solo ZIP." },
    { q: "¿Se suben mis fotos para convertirlas?", a: "No. La conversión se hace en tu navegador. Solo una imagen demasiado grande para que tu navegador la abra se reduce antes en nuestro servidor, y se elimina de inmediato." },
  ],

  security:
    "Tus imágenes se convierten en tu navegador y no se suben. Solo una imagen demasiado grande para tu navegador —una foto de muchísimos megapíxeles— se envía a nuestro servidor para reducirla, y se elimina en cuanto se devuelve; no se guarda nada.",
};

export default content;
