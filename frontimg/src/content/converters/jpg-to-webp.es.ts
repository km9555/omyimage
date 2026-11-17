import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es JPG-to-WebP converter.
 *
 * Head term "JPG a WebP" (1.6K ES / 1.3K MX), "convertir JPG a WebP" and
 * "JPEG a WebP" as secondaries. A performance page: the reader runs a website
 * and wants lighter images, so the copy talks page speed and quality settings,
 * not compatibility.
 */
const copy: LocalizedPairCopy = {
  name: "JPG a WebP",
  seoTitle: "JPG a WebP – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte JPG a WebP gratis y sin registro: imágenes entre un 25 % y un 35 % más ligeras para tu web, con calidad ajustable y carpetas enteras en un ZIP.",
  unique: {
    intro:
      "Convertir JPG a WebP es la mejora de velocidad más barata que le queda a la mayoría de los sitios web. La misma foto, con la misma calidad aparente, suele pesar entre un 25 % y un 35 % menos, y todos los navegadores actuales admiten el formato desde que Safari se sumó en 2020. Ajusta la calidad, convierte la carpeta entera de una vez y recibe un ZIP.",
    whyConvert:
      "Aquí casi siempre se trata de rendimiento. Las imágenes son, con mucha diferencia, lo que más pesa en una página web típica, y las Core Web Vitals (sobre todo el Largest Contentful Paint) dependen en gran parte de lo rápido que llega la imagen principal. WebP consigue una reducción de tamaño importante sin los defectos visibles que aparecerían si simplemente apretaras más la compresión JPG, porque su codificador es una generación más moderno y trabaja con bloques más grandes y más inteligentes. La objeción de compatibilidad que antes frenaba a la gente prácticamente ha desaparecido: Chrome, Firefox, Edge, Opera y Safari decodifican WebP, lo que cubre en la práctica a todos tus visitantes. La única precaución tiene que ver con el destino del archivo. WebP sirve para publicar en la web; sigue siendo una mala elección para archivar o para entregar a una imprenta.",
    notes: [
      {
        heading: "No conviertas tus originales",
        body:
          "Convierte copias pensadas para la web y deja los archivos de tu cámara como están. Un JPG ya se comprimió con pérdida una vez, y volver a codificarlo en WebP lo comprime de nuevo: en una página web se ve bien, pero es un paso atrás de generación y no se puede deshacer después. Trata WebP como un formato de salida, igual que tratarías una miniatura redimensionada, y no como un sustituto de tu biblioteca de fotos.",
      },
      {
        heading: "Qué calidad usar",
        body:
          "Entre 0,80 y 0,85 está el punto ideal para fotos en un sitio web, y es donde el ahorro de tamaño es mayor en relación con el coste visual. Sube a 0,92 o más para imágenes de cabecera, fotos de producto o cualquier cosa que un cliente vaya a ampliar. Por debajo de 0,70, el codificador empieza a suavizar las texturas finas: la piel, la vegetación y las telas son donde primero se nota. Convierte una imagen representativa, mírala con atención y luego procesa el lote con ese ajuste.",
      },
      {
        heading: "Sírvelo con una alternativa si lo necesitas",
        body:
          "Si tienes que dar soporte a clientes realmente antiguos, lo habitual es usar el elemento HTML picture con el WebP primero y el JPG original como fuente alternativa, para que cada navegador tome lo que entiende. La mayoría de los creadores de sitios, CDN y gestores de contenido modernos ya hacen esta negociación automáticamente, así que comprueba si el tuyo lo hace antes de añadir código a mano.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto más pequeñas serán mis imágenes?",
        a: "En fotos típicas, espera entre un 25 % y un 35 % menos con la misma calidad visual. Los gráficos planos y las capturas de pantalla suelen reducirse bastante más. El ahorro depende mucho de cada imagen, así que convierte unos cuantos archivos representativos antes de decidir el ajuste para toda una biblioteca.",
      },
      {
        q: "¿Es seguro usar WebP en mi sitio web hoy?",
        a: "Sí. Todos los navegadores actuales lo decodifican: Chrome y Firefox desde hace más de una década, Safari desde 2020. Es un formato consolidado, no experimental.",
      },
      {
        q: "¿Convertir JPG a WebP hace perder calidad?",
        a: "Hay una pequeña pérdida de generación, porque el JPG ya estaba comprimido con pérdida y WebP lo comprime de nuevo. Con una calidad de 0,80 o más no se nota a un tamaño de visualización normal. Convierte siempre desde el mejor original que tengas, no desde una copia ya reducida.",
      },
      {
        q: "¿WebP sirve para imprimir?",
        a: "No. Los flujos de impresión esperan TIFF, PNG o JPG de alta calidad, y muchas herramientas de preimpresión ni siquiera abren WebP. Úsalo para la web y guarda otro formato para imprimir.",
      },
      {
        q: "¿WebP admite transparencia?",
        a: "Sí, WebP tiene un canal alfa completo. Un JPG de origen no tiene transparencia que trasladar, pero si conviertes un PNG a WebP, la transparencia se conserva.",
      },
      {
        q: "¿Puedo convertir una carpeta entera de una vez?",
        a: "Sí. Añade todos los JPG que quieras: se convierten uno tras otro y se devuelven en un solo ZIP, que es la forma habitual de migrar una biblioteca de imágenes existente.",
      },
      {
        q: "¿Se conservan los datos EXIF de la cámara?",
        a: "No. Esta conversión no traslada los metadatos del JPG al WebP, así que la fecha, el modelo de cámara o la ubicación GPS no viajan con la imagen publicada. Para una foto que va a una página web, eso suele ser una ventaja: el archivo es más ligero y no revela información privada.",
      },
    ],
  },
};

export default copy;
