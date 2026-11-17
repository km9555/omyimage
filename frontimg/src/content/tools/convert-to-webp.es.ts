import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/convertir-a-webp.
 *
 * Head term "Convertir a WebP" — Spanish converter queries take the "X a Y"
 * form. "Convertir imagen a WebP" is the secondary, used in the intro, a
 * heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-webp",
  locale: "es",
  name: "Convertir a WebP",
  tagline:
    "Convierte imágenes JPG, PNG, GIF y BMP a WEBP online: archivos más pequeños para páginas más rápidas, con control de calidad y conversión por lotes. Gratis y privado en tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Convertir a WebP – gratis y online | oMyImage",
  metaDescription:
    "Convertir a WebP gratis: pasa JPG, PNG, GIF y BMP a WEBP con control de calidad y por lotes. Convertir imagen a WebP para páginas más rápidas, sin registro.",

  intro:
    "WEBP es el formato de imagen creado para la web: la misma imagen en menos bytes, con transparencia cuando la necesitas. Con la herramienta Convertir a WebP de oMyImage puedes convertir imagen a WebP en tu navegador: archivos JPG, PNG, GIF y BMP, una sola imagen o una carpeta entera de fotos de productos, imágenes de blog o capturas de pantalla a la vez, con un control de calidad para decidir el equilibrio entre tamaño y detalle. Las páginas hechas con los resultados cargan más rápido con cualquier conexión.",

  sections: [
    {
      heading: "Por qué los sitios web pasan sus imágenes a WEBP",
      id: "why",
      body: [
        "Las imágenes suelen ser la parte más pesada de una página web, y la imagen principal es a menudo lo que decide qué tan rápido parece cargar la página. Servir WEBP en lugar de JPG o PNG reduce esos bytes sin los bloques visibles que aparecerían si simplemente bajaras la calidad del JPG, porque el codificador WEBP es una generación más nuevo y predice cada bloque a partir de sus vecinos.",
        "Todos los navegadores actuales muestran WEBP —Chrome, Edge, Firefox, Opera y Safari desde 2020—, así que un sitio puede usarlo para prácticamente todos sus visitantes. Muchas plataformas, CDN y auditorías de velocidad lo recomiendan justo por eso, y una página más ligera también les consume menos datos a tus visitantes cuando navegan desde el teléfono.",
      ],
    },
    {
      heading: "Cuánto más pequeño queda",
      id: "smaller",
      body: [
        "En fotografías, un WEBP con la misma calidad aparente suele quedar entre un 25 y un 35 % más pequeño que el JPG de origen. La ganancia es mucho mayor desde PNG: una foto o una captura guardada como PNG a menudo se reduce entre un 70 y un 90 %, porque PNG no tiene pérdida y WEBP con una calidad alta sí la tiene.",
        "El resultado depende de la imagen. Las fotos con mucho detalle son las que menos se reducen; los gráficos planos, las capturas y las imágenes con grandes zonas lisas son las que más. La herramienta muestra el tamaño de cada archivo convertido junto al original, así que ves exactamente lo que ganaste antes de subir nada.",
      ],
    },
    {
      heading: "Cómo elegir la calidad",
      id: "quality",
      body: [
        "El control va del 50 al 100 % y empieza en 92 %, que mantiene las fotos visualmente idénticas al original. Para imágenes de un sitio web, lo habitual es un 75–85 %: la diferencia es muy difícil de ver al tamaño normal y los archivos son claramente más pequeños. Vuelve a subir para imágenes de portada, fotos de producto con zoom y todo lo que la gente vaya a mirar de cerca.",
        "Por debajo del 70 %, las zonas lisas como cielos y piel empiezan a verse como de cera más que con bloques: WEBP falla de forma más elegante que JPG, pero también falla. Convierte primero una imagen representativa, compárala con el original a tamaño completo y luego procesa el lote con el ajuste que elegiste.",
      ],
    },
    {
      heading: "Transparencia y animación",
      id: "transparency",
      body: [
        "WEBP admite un canal alfa completo, así que los logotipos, iconos y recortes de productos en PNG transparente siguen siendo transparentes después de la conversión, bordes incluidos: no se pinta ningún color de fondo. Eso convierte a WEBP en un sustituto directo de los PNG transparentes en un sitio web, normalmente con una fracción del tamaño.",
        "Un GIF animado se convierte solo en su primer fotograma. WEBP puede contener animación, pero esta herramienta produce imágenes fijas; conserva el GIF, o usa una herramienta de animación específica, cuando el movimiento importe.",
      ],
    },
    {
      heading: "Cuándo WEBP no es la opción correcta",
      id: "where-not",
      body: [
        "WEBP es un formato para servir imágenes, no para archivarlas ni intercambiarlas. Las imprentas, los programas de escritorio antiguos, algunos clientes de correo y muchos formularios oficiales siguen esperando JPG o PNG, y es probable que un WEBP enviado a ellos sea rechazado. Conserva tus originales y convierte copias para la web.",
        "La conversión también es de un solo sentido en cuanto a calidad: un WEBP hecho al 80 % ha descartado detalle que volver a convertirlo a PNG o JPG no recuperará. Cuando más adelante necesites otro formato, empieza de nuevo desde el archivo original.",
      ],
    },
    {
      heading: "Metadatos y compatibilidad de navegadores",
      id: "metadata",
      body: [
        "Los datos de la cámara —EXIF, fecha de captura y ubicación GPS— no se trasladan a los archivos WEBP creados aquí, lo que conviene para imágenes publicadas en la web, donde los datos de ubicación son de todos modos un riesgo para la privacidad. Si necesitas los metadatos, consérvalos en los originales.",
        "La conversión usa el codificador WEBP de tu propio navegador. Chrome, Edge, Firefox y Opera lo incluyen; Safari puede mostrar WEBP pero no guardarlo desde una página web, así que en Safari la herramienta te indica que cambies de navegador en lugar de entregarte un archivo con la extensión equivocada.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen a WEBP",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes JPG, PNG, GIF o BMP, o arrástralas y suéltalas." },
    { title: "Ajusta la calidad", description: "Deja el 92 % para imágenes casi idénticas o elige un 75–85 % para imágenes web más ligeras." },
    { title: "Convierte y descarga", description: "Haz clic en Convertir: un WEBP se descarga directamente y varios se descargan juntos en un ZIP." },
  ],

  features: [
    { icon: "speed", title: "Páginas web más ligeras", description: "Los archivos WEBP son más pequeños que los JPG y PNG que sustituyen, así que las páginas cargan más rápido." },
    { icon: "tune", title: "Control de calidad", description: "Elige una calidad entre el 50 y el 100 % y ve el nuevo tamaño de cada archivo." },
    { icon: "opacity", title: "Transparencia conservada", description: "Los logotipos e iconos PNG transparentes siguen siendo transparentes en WEBP, bordes suaves incluidos." },
  ],

  faqs: [
    { q: "¿Qué formatos puedo convertir a WebP?", a: "JPG, PNG, GIF y BMP. En los GIF se convierte el primer fotograma." },
    { q: "¿Cuánto más pequeño es WEBP que JPG?", a: "En fotos, normalmente entre un 25 y un 35 % más pequeño con la misma calidad visual. Desde PNG el ahorro es mucho mayor, a menudo del 70 al 90 %." },
    { q: "¿Qué calidad debo usar para un sitio web?", a: "Un 75–85 % sirve para la mayoría de las imágenes web. Usa el 92 % predeterminado o más para imágenes de portada y fotos de producto en las que la gente hará zoom." },
    { q: "¿Al convertir imagen a WebP se conserva la transparencia?", a: "Sí. Las zonas transparentes y semitransparentes de las imágenes PNG, GIF o BMP siguen siendo transparentes en el WEBP." },
    { q: "¿Todos los navegadores muestran WEBP?", a: "Sí, todos los navegadores actuales, incluido Safari desde 2020. Algunos programas de escritorio antiguos y ciertos formularios de subida todavía pueden no abrirlo." },
    { q: "¿Por qué no funciona en Safari?", a: "Safari puede mostrar WEBP, pero no crearlo desde una página web. Usa Chrome, Edge, Firefox u Opera para convertir; después, los archivos funcionan con normalidad en Safari." },
    { q: "¿Se conservan mis datos EXIF?", a: "No. Los archivos WEBP creados aquí no llevan datos de la cámara ni ubicación GPS, que es normalmente lo que quieres para imágenes publicadas en internet." },
    { q: "¿Puedo convertir una carpeta entera a la vez?", a: "Sí. Agrega todas las imágenes que quieras; se convierten una tras otra y se descargan juntas en un ZIP." },
    { q: "¿Puedo volver a convertir WEBP a JPG o PNG?", a: "Sí, con las herramientas WEBP a JPG y WEBP a PNG. El detalle eliminado por la compresión no vuelve, así que convierte desde el original cuando lo tengas." },
    { q: "¿Se suben mis imágenes?", a: "Normalmente no: la conversión se hace en tu navegador. Solo una imagen demasiado grande para tu navegador se envía a nuestro servidor, se convierte allí y se elimina de inmediato." },
    { q: "¿Es gratis y sin marca de agua?", a: "Sí. Convertir a WebP es gratis, sin registro y sin marca de agua, tanto para una imagen como para un lote completo." },
  ],

  security:
    "Tus imágenes se convierten a WEBP en tu navegador. Solo una imagen demasiado grande para el navegador —de más de 100 MB o por encima de su límite de canvas— se procesa en nuestro servidor, y se elimina justo después de la conversión. No se guarda nada y no se rastrea ningún archivo.",

  ui: {
    // Drop hint from app/convert-to-webp/page.tsx, translated inside ConvertTool.
    "or drop JPG, PNG, GIF or BMP images here": "o suelta aquí imágenes JPG, PNG, GIF o BMP",
  },
};

export default content;
