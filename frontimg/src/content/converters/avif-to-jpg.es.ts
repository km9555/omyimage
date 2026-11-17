import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es AVIF-to-JPG converter.
 *
 * Head term "AVIF a JPG" (4.4K ES / 8.1K MX), "convertir AVIF a JPG", "abrir
 * AVIF" and "AVIF a JPEG" as secondaries. The angle: the most efficient
 * format, and the one your software is least likely to open — decoded by the
 * browser, so nothing is uploaded.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF a JPG",
  seoTitle: "AVIF a JPG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte AVIF a JPG gratis y sin registro: abre por fin esas imágenes en cualquier programa. Calidad ajustable, lotes en un ZIP y nada se sube a un servidor.",
  unique: {
    intro:
      "AVIF es el formato de imagen más eficiente de uso común y también el que menos probabilidades tiene de abrirse en tus programas. Al convertir AVIF a JPG cambias esa eficiencia por la posibilidad de usar el archivo de verdad: en editores, en teléfonos antiguos, en una imprenta o en cualquier cosa creada antes de 2021, más o menos. La decodificación la hace tu navegador, así que no se sube nada.",
    whyConvert:
      "AVIF se extendió por las páginas web mucho más rápido que por el software de escritorio, y esa diferencia es la razón por la que casi todo el mundo acaba aquí. Guardaste una imagen de un sitio moderno y ahora Photoshop, el visor de fotos de Windows, la galería de tu teléfono o un formulario de envío no quieren saber nada de ella. Los navegadores son la excepción y no la regla: Chrome decodifica AVIF desde la versión 85, Firefox desde la 93 y Safari desde la 16.4, y justo por eso esta conversión puede hacerse en local, dentro de tu navegador. JPG va en sentido contrario: lo entiende prácticamente todo, a cambio de archivos más grandes con la misma calidad visual. Si el archivo es solo para tu uso y tu software no lee AVIF, convertirlo es mucho más sencillo que buscar un códec.",
    notes: [
      {
        heading: "El archivo pesará más",
        body:
          "Es el intercambio esperado y conviene tenerlo claro. AVIF suele conseguir la mitad del tamaño de un JPG con la misma calidad, así que al convertir en sentido contrario el peso más o menos se duplica. Compras compatibilidad con bytes. Si el tamaño importa de verdad en el destino, deja el control de calidad en torno a 0,85 en lugar de subirlo al máximo: la diferencia cuesta verla y el ahorro es notable.",
      },
      {
        heading: "La transparencia y el HDR no se conservan",
        body:
          "AVIF admite canal alfa y alto rango dinámico; JPG no admite ninguno de los dos. Las zonas transparentes se rellenan con el color de fondo que elijas. Las imágenes HDR las adapta el navegador al rango estándar durante la decodificación, y en una foto luminosa y de mucho contraste eso puede aplanar visiblemente las luces. Si cualquiera de las dos cosas te importa, convierte a PNG: conserva la transparencia, aunque tampoco puede conservar el HDR.",
      },
      {
        heading: "Por qué tu navegador lo abre y tus aplicaciones no",
        body:
          "AVIF envuelve el códec de video AV1, que los fabricantes de navegadores adoptaron pronto y con entusiasmo porque está libre de regalías y es bueno para el streaming de video. El software de imagen de escritorio ha tardado más, porque supone integrar todo un códec de video para mostrar una imagen fija. Esa es toda la explicación de la situación tan extraña en la que una página web muestra la imagen sin problemas y hacer doble clic en el archivo guardado no hace nada.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué mi equipo no abre archivos AVIF?",
        a: "El soporte de AVIF llegó a los navegadores años antes que al software de escritorio. Windows necesita la extensión AV1 Video Extension de Microsoft Store, y muchos editores de imagen siguen sin admitirlo. Convertir evita el problema.",
      },
      {
        q: "¿El JPG pesará más que el AVIF?",
        a: "Sí, normalmente alrededor del doble con una calidad comparable. AVIF es mucho más eficiente; JPG es mucho más compatible. Ese es el intercambio que haces.",
      },
      {
        q: "¿Convertir AVIF a JPG hace perder calidad?",
        a: "Un poco, porque los dos formatos son con pérdida y la imagen se vuelve a codificar. Con una calidad de 0,85 o más cuesta mucho notarlo. Convierte desde el AVIF original y no desde una copia que ya haya pasado por otra conversión.",
      },
      {
        q: "¿Qué pasa con la transparencia de un AVIF?",
        a: "Se rellena con un color sólido, porque JPG no tiene canal alfa. Elige el color de relleno antes de convertir, o convierte a PNG para conservar la transparencia.",
      },
      {
        q: "¿Se sube mi imagen para convertirla?",
        a: "No. Tu navegador ya sabe decodificar AVIF, y eso es lo que permite convertir en local. La imagen se procesa en tu pestaña y no se envía a ningún sitio.",
      },
      {
        q: "¿Puedo convertir varios archivos AVIF a JPG a la vez?",
        a: "Sí. Arrastra todos los que necesites: se convierten uno tras otro con el mismo ajuste de calidad y los descargas juntos en un único ZIP.",
      },
    ],
  },
};

export default copy;
