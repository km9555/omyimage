import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es BMP-to-JPG converter.
 *
 * Head term "BMP a JPG" (320 ES / 210 MX), "convertir BMP a JPG" and "mapa
 * de bits a JPG" as secondaries. The angle: enormous uncompressed files made
 * usable — and the one converter that never offloads to the server, because
 * the server library has no BMP decoder (pairs.ts serverFallback: false).
 */
const copy: LocalizedPairCopy = {
  name: "BMP a JPG",
  seoTitle: "BMP a JPG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte BMP a JPG gratis y sin registro: archivos hasta un 97 % más ligeros, con calidad ajustable y lotes en un ZIP. Todo se procesa en tu navegador.",
  unique: {
    intro:
      "Los archivos BMP son enormes porque apenas están comprimidos: un mapa de bits de 12 megapíxeles ocupa unos 36 MB, mientras que la misma foto en JPG ronda los 3 MB. Convertir BMP a JPG es la forma más rápida de hacer que esos archivos sean útiles: que se puedan adjuntar, subir y abrir en algo que no sea Windows. Tú controlas la calidad, y los lotes vuelven en un ZIP.",
    whyConvert:
      "BMP guarda cada píxel completo, sin ninguna compresión digna de ese nombre, y por eso los archivos son tan sorprendentemente grandes. Es un diseño deliberado de una época en la que la velocidad de decodificación importaba más que el espacio en disco, y hoy sobrevive sobre todo en utilidades de Windows, controladores antiguos de escáneres y cámaras, herramientas de captura de pantalla y equipos industriales o médicos especificados hace décadas. En cuanto necesitas enviar uno por correo, ponerlo en una web o pasarlo a casi cualquier aplicación moderna, el tamaño se convierte en el problema. Convertir a JPG suele reducirlo un 90 % o más sin diferencia visible con una calidad razonable. También resuelve un problema de compatibilidad que sorprende a mucha gente: aunque BMP se lee sin esfuerzo en Windows, el soporte en macOS, iOS y Android es más irregular de lo que cabría esperar de un formato tan antiguo.",
    notes: [
      {
        heading: "Espera una reducción de tamaño muy grande",
        body:
          "Una reducción del 90 al 97 % es normal y no indica que algo haya ido mal. Pasas de un formato que guarda cada píxel literalmente a otro que modela lo que la vista humana realmente percibe. Si necesitas la reducción sin ninguna pérdida, convierte a PNG: sigue siendo un gran ahorro frente a BMP, normalmente entre un 40 % y un 70 %, y sin pérdida.",
      },
      {
        heading: "Esta conversión siempre se hace en tu dispositivo",
        body:
          "La mayoría de las herramientas de este sitio pasan los archivos muy grandes a un servidor para procesarlos, pero BMP está excluido a propósito: la biblioteca de imágenes del servidor no tiene decodificador de BMP, así que un mapa de bits enviado allí fallaría en lugar de convertirse. Tu navegador maneja BMP perfectamente, de modo que las conversiones de BMP se quedan en tu equipo sea cual sea el tamaño del archivo. Con lo grandes que llegan a ser los mapas de bits, además es el camino más rápido: no hay ninguna subida que esperar.",
      },
      {
        heading: "Transparencia y profundidad de color",
        body:
          "La mayoría de los BMP que circulan son de 24 bits sin transparencia, así que normalmente no hay nada que aplanar. Algunos BMP de 32 bits sí llevan canal alfa; como JPG no puede guardarlo, cualquier zona transparente se rellena con el color de fondo que elijas. Los mapas de bits muy antiguos de 8 bits o de 1 bit se convierten sin problema, aunque un escaneo en blanco y negro de 1 bit suele quedar mejor en PNG, que maneja el monocromo de bordes duros con más eficiencia que JPG.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué los archivos BMP pesan tanto?",
        a: "Porque se guardan prácticamente sin compresión: cada píxel escrito por completo. Un BMP de 24 bits y 12 megapíxeles ocupa unos 36 MB. JPG comprime la misma imagen a una décima parte de eso o menos.",
      },
      {
        q: "¿Cuánto más pequeño será el JPG?",
        a: "Normalmente entre un 90 % y un 97 % más pequeño. Un mapa de bits de 36 MB suele quedarse entre 1 y 4 MB, según el ajuste de calidad y el detalle de la imagen.",
      },
      {
        q: "¿Pierdo calidad al convertir BMP a JPG?",
        a: "Algo, porque JPG es con pérdida. Con el ajuste predeterminado no se nota a un tamaño de visualización normal. Si no quieres ninguna pérdida, convierte a PNG: sigue siendo mucho más pequeño que BMP.",
      },
      {
        q: "¿Puedo convertir archivos BMP muy grandes?",
        a: "Sí. La conversión de BMP siempre se hace en tu navegador y no en un servidor, porque la biblioteca del servidor no puede leer BMP. Los archivos muy grandes solo tardan un poco más en procesarse.",
      },
      {
        q: "¿Los archivos BMP admiten transparencia?",
        a: "Los BMP de 24 bits, que son el caso habitual, no. Algunos BMP de 32 bits llevan canal alfa; como JPG no puede guardar transparencia, esas zonas se rellenan con el color de fondo que elijas.",
      },
      {
        q: "¿Convierto BMP a JPG o a PNG?",
        a: "A JPG para fotos y para obtener el archivo más pequeño posible. A PNG cuando necesitas calidad sin pérdida, cuando la imagen es una captura de pantalla o un dibujo de líneas, o cuando quieres conservar un canal alfa.",
      },
    ],
  },
};

export default copy;
