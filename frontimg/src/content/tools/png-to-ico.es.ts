import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/png-a-ico.
 *
 * Head term "PNG a ICO" (6.6K ES / 5.4K MX) — Spanish converter queries take
 * the "X a Y" form. Secondary "crear favicon", used in the intro, a heading
 * and an FAQ. Windows dialogs are named as the Spanish UI shows them
 * (Propiedades › Personalizar › «Cambiar icono…»).
 */
const content: ToolPageContent = {
  toolId: "png-to-ico",
  locale: "es",
  name: "PNG a ICO",
  tagline:
    "Convierte PNG, JPG o SVG a un archivo ICO online: un favicon.ico con 16, 32 y 48 px, o un icono de Windows con todos los tamaños hasta 256 px. Gratis, privado y en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "PNG a ICO – crear favicon gratis y online | oMyImage",
  metaDescription:
    "PNG a ICO gratis: crea un favicon con 16, 32 y 48 px o un icono de Windows de hasta 256 px a partir de PNG, JPG, WEBP o SVG. En tu navegador, sin subir nada.",

  intro:
    "Un archivo ICO no es una imagen, sino un pequeño conjunto de ellas: el mismo icono en varios tamaños, para que la pestaña del navegador, la barra de tareas y el escritorio elijan cada uno el que le corresponde. Con el convertidor PNG a ICO de oMyImage construyes ese conjunto a partir de una sola imagen. Parte de un PNG, JPG, WEBP o SVG, elige los tamaños —favicon o icono completo de Windows— y revisa cada tamaño en sus dimensiones reales en píxeles antes de descargar un solo archivo .ico. Así puedes crear un favicon en unos segundos.",

  sections: [
    {
      heading: "Qué hay dentro de un archivo ICO",
      id: "what-ico",
      body: [
        "ICO es el formato de iconos de Windows, y es un contenedor: un archivo guarda varias imágenes cuadradas, normalmente de 16 × 16 a 256 × 256 píxeles. Windows elige el tamaño más cercano para cada lugar donde aparece un icono —una lista de archivos, la barra de tareas, el escritorio— y los navegadores hacen lo mismo con la pestaña y los marcadores. Por eso un único PNG redimensionado y renombrado a .ico no es un icono de verdad.",
        "Los archivos creados aquí guardan los tamaños menores de 256 como mapas de bits de 32 bits con transparencia completa, la forma que lee cualquier versión de Windows en uso y cualquier navegador, y el tamaño de 256 píxeles como PNG comprimido, igual que los iconos del propio Windows. El resultado se abre en cualquier programa que maneje iconos.",
      ],
    },
    {
      heading: "Cómo crear un favicon.ico",
      id: "favicon",
      body: [
        "Para un sitio web, elige el ajuste predefinido Favicon: 16, 32 y 48 píxeles. 16 es el tamaño clásico de la pestaña del navegador, 32 se usa en pantallas de alta resolución y en la barra de tareas cuando un sitio está anclado, y 48 cubre los accesos directos de Windows y las vistas más grandes de marcadores y mosaicos. Juntos dan a cada lugar habitual un tamaño que no hay que estirar.",
        "Llama al archivo favicon.ico y colócalo en la carpeta raíz de tu sitio, para que sea accesible en /favicon.ico. Los navegadores solicitan esa dirección automáticamente, incluso en páginas que no declaran ningún icono. Los sitios modernos suelen añadir también iconos PNG y SVG con etiquetas link, pero el .ico de la raíz sigue siendo el que todos los navegadores y muchas herramientas buscan primero.",
      ],
    },
    {
      heading: "Iconos para carpetas y accesos directos de Windows",
      id: "windows",
      body: [
        "Para un acceso directo del escritorio, una carpeta o una aplicación, elige el ajuste predefinido Icono de Windows, que incluye todos los tamaños de 16 a 256 píxeles. Windows usa los tamaños grandes para los iconos del escritorio y las vistas grandes del Explorador, y los pequeños para las listas y la barra de tareas; si falta un tamaño, escala el más cercano y el icono se ve borroso.",
        "Para usar el icono, haz clic derecho en un acceso directo, abre Propiedades y elige «Cambiar icono…»; para una carpeta, abre Propiedades, luego Personalizar y después «Cambiar icono…», y busca tu archivo .ico. Guarda el .ico en un lugar donde no se vaya a mover ni borrar, porque Windows lo lee desde esa ubicación.",
      ],
    },
    {
      heading: "Diseñar para 16 píxeles",
      id: "small",
      body: [
        "En 16 × 16 píxeles hay espacio para una forma y quizá una letra, no para un logotipo detallado. Las formas gruesas, el contraste fuerte y una silueta simple sobreviven; las líneas finas, el texto pequeño y los degradados sutiles se convierten en una mancha gris. La vista previa muestra cada tamaño en su tamaño real en píxeles, así que puedes juzgar honestamente la versión de 16 píxeles antes de descargar.",
        "Para obtener los tamaños pequeños más limpios, la imagen se reduce por pasos, a la mitad cada vez y con un suavizado de alta calidad, en lugar de encogerla de golpe, lo que suele eliminar los detalles finos de forma impredecible. Si el icono de 16 píxeles sigue viéndose recargado, prueba con una versión simplificada del logotipo —solo la inicial o el símbolo— como imagen de origen.",
      ],
    },
    {
      heading: "Iconos cuadrados a partir de cualquier imagen",
      id: "square",
      body: [
        "Los iconos son cuadrados. Si tu imagen no lo es, elige «Ajustar imagen completa» para conservarlo todo y rellenar los lados con transparencia, o «Recortar en cuadrado» para recortar el lado más largo desde el centro. El fondo transparente se conserva de forma predeterminada; marca la opción de fondo blanco si el icono se va a mostrar en algún lugar que convierte la transparencia en negro.",
        "El mejor origen es un PNG cuadrado con fondo transparente de 256 píxeles o más. Un JPG también sirve, pero no tiene transparencia, así que su fondo pasa a formar parte del icono. Un SVG es ideal: primero se dibuja a alta resolución, así que todos los tamaños quedan nítidos.",
      ],
    },
  ],

  howToTitle: "Cómo convertir PNG a ICO",
  steps: [
    { title: "Agrega una imagen", description: "Selecciona una imagen PNG, JPG, WEBP o SVG; lo mejor es que sea cuadrada y con fondo transparente." },
    { title: "Elige los tamaños", description: "Elige Favicon (16, 32, 48) o Icono de Windows (de 16 a 256), o marca los tamaños exactos." },
    { title: "Descarga el ICO", description: "Revisa cada tamaño en la vista previa y descarga un solo archivo .ico." },
  ],

  features: [
    { icon: "apps", title: "Todos los tamaños en un archivo", description: "16, 24, 32, 48, 64, 128 y 256 píxeles, empaquetados en un único .ico." },
    { icon: "opacity", title: "Transparencia conservada", description: "Los iconos mantienen un fondo totalmente transparente, con bordes suaves y sin dientes de sierra." },
    { icon: "lock", title: "Sin subir nada", description: "El icono se crea en tu navegador; tu imagen nunca sale de tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo convierto PNG a ICO?", a: "Agrega tu imagen, elige el ajuste Favicon o Icono de Windows, revisa la vista previa y haz clic en «Descargar ICO»." },
    { q: "¿Qué tamaños debe tener un favicon.ico?", a: "16, 32 y 48 píxeles, el ajuste Favicon. Cubren las pestañas del navegador, las pantallas de alta resolución y los accesos directos de Windows." },
    { q: "¿Qué tamaños necesita un icono de Windows?", a: "Hasta 256 píxeles. El ajuste Icono de Windows incluye 16, 24, 32, 48, 64, 128 y 256, para que Windows nunca tenga que estirar un tamaño." },
    { q: "¿Puedo convertir JPG o SVG a ICO?", a: "Sí. Funcionan PNG, JPG, WEBP, GIF, BMP y SVG. JPG no tiene transparencia, así que su fondo se mantiene; SVG da los resultados más nítidos." },
    { q: "¿Se conserva el fondo transparente?", a: "Sí. La transparencia se conserva en todos los tamaños, salvo que elijas un fondo blanco." },
    { q: "Mi imagen no es cuadrada, ¿qué pasa?", a: "Elige «Ajustar imagen completa» para conservarla entera con lados transparentes, o «Recortar en cuadrado» para recortar el lado más largo." },
    { q: "¿Dónde coloco el favicon.ico?", a: "En la carpeta raíz de tu sitio web, para que cargue en tusitio.com/favicon.ico. Los navegadores lo buscan ahí automáticamente." },
    { q: "¿Cómo cambio el icono de una carpeta en Windows?", a: "Haz clic derecho en la carpeta, abre Propiedades, luego Personalizar y después «Cambiar icono…», y elige tu archivo .ico." },
    { q: "¿Por qué mi icono de 16 píxeles se ve borroso?", a: "Solo hay 256 píxeles con los que trabajar. Usa un origen más simple —solo el símbolo o la inicial— con formas gruesas y contraste fuerte." },
    { q: "¿Se sube mi imagen?", a: "No. El archivo ICO se crea por completo en tu navegador." },
    { q: "¿Puedo crear un favicon gratis aquí?", a: "Sí. Sube tu logotipo, elige el ajuste Favicon y descarga el favicon.ico terminado: sin registro, sin marca de agua y sin límites." },
  ],

  security:
    "Tu imagen se redimensiona y se empaqueta en un archivo ICO por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // PngToIcoTool.tsx
    "Select an image": "Seleccionar imagen",
    "or drop a PNG, JPG, WEBP or SVG image here": "o suelta aquí una imagen PNG, JPG, WEBP o SVG",
    "Please select an image.": "Selecciona una imagen.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Processing failed.": "El procesamiento falló.",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "Icon settings": "Ajustes del icono",
    "Download ICO": "Descargar ICO",
    "Saving…": "Guardando…",
    "Shown at actual size": "Se muestra a tamaño real",
    "Last download: {size}": "Última descarga: {size}",
    "Your image is smaller than the largest icon size, so that size is enlarged and will look soft.":
      "Tu imagen es más pequeña que el mayor tamaño de icono, así que ese tamaño se amplía y se verá suave.",
    "Your image is converted in your browser and never uploaded.": "Tu imagen se convierte en tu navegador y nunca se sube.",
    "Icon sizes": "Tamaños del icono",
    "Favicon": "Favicon", // i18n-same
    "Windows icon": "Icono de Windows",
    "Sizes in pixels. A favicon needs 16, 32 and 48; Windows uses up to 256.":
      "Tamaños en píxeles. Un favicon necesita 16, 32 y 48; Windows usa hasta 256.",
    "Shape": "Forma",
    "Fit whole image": "Ajustar imagen completa",
    "Crop to square": "Recortar en cuadrado",
    "Icons are square. Fit keeps everything and fills the sides; crop trims the longer side.":
      "Los iconos son cuadrados. Ajustar lo conserva todo y rellena los lados; recortar quita parte del lado más largo.",
    "White background instead of transparent": "Fondo blanco en lugar de transparente",
  },
};

export default content;
