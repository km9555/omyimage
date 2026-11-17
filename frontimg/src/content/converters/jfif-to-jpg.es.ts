import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es JFIF-to-JPG converter.
 *
 * Head term "JFIF a JPG" (1.9K ES / 2.9K MX); "convertir JFIF a JPG", "qué es
 * un archivo JFIF" and "JFIF a JPEG" as secondaries. The angle is the English
 * one: a naming problem, not a format problem, and why renaming is not always
 * enough.
 */
const copy: LocalizedPairCopy = {
  name: "JFIF a JPG",
  seoTitle: "JFIF a JPG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte JFIF a JPG gratis y sin registro: archivos .jpg limpios que acepta cualquier formulario o programa, en lote y en un ZIP, sin salir de tu navegador.",
  unique: {
    intro:
      "Guardaste una imagen y Windows te entregó un archivo .jfif que la mitad de tus programas no quiere abrir. No le pasa nada: un JFIF es un JPEG perfectamente normal con una extensión poco habitual, pero eso sirve de poco cuando el formulario de subida lo rechaza. Este convertidor de JFIF a JPG lee el archivo y escribe un .jpg limpio que se comporta como esperabas desde el principio.",
    whyConvert:
      "Es un problema de nombre disfrazado de problema de formato. JFIF son las siglas de JPEG File Interchange Format, y es el contenedor que usa por dentro prácticamente cualquier archivo que ya llamas JPG. La razón de que de repente tengas archivos terminados en .jfif es una rareza del registro de Windows: ciertas combinaciones de Windows y Chrome registran .jfif como extensión preferida para el tipo MIME image/jpeg, y a partir de ahí las imágenes guardadas reciben esa extensión en lugar de .jpg. Los bytes son idénticos a los que habrías obtenido antes. Por desgracia, muchos programas miran la extensión y no el contenido del archivo (portales de empleo, gestores de fotos antiguos, tiendas online, plataformas escolares para entregar trabajos) y simplemente lo rechazan. Cambiar el nombre a mano suele funcionar, pero falla cuando la extensión está oculta, cuando hay decenas de archivos o cuando el sistema que lo recibe también valida el contenido.",
    notes: [
      {
        heading: "¿Por qué no cambiar simplemente el nombre del archivo?",
        body:
          "A menudo puedes, y si tienes un solo archivo y las extensiones visibles es la solución más rápida. Deja de servir a gran escala y en los casos en que Windows te oculta las extensiones, y acabas con algo llamado foto.jpg.jfif que no ha mejorado nada. Convertir además normaliza el archivo: se decodifica y se vuelve a codificar como un JPEG estándar, lo que resuelve los casos ocasionales en que el programa que lo recibe rechazaba algo del interior del archivo y no su nombre.",
      },
      {
        heading: "Cómo evitar que Windows lo vuelva a hacer",
        body:
          "La causa de fondo es una asociación de tipo de archivo en el registro de Windows, en la entrada del tipo de contenido image/jpeg, donde .jfif figura como extensión predeterminada. Editar el registro lo arregla para siempre en las descargas futuras, pero no hace nada con los archivos que ya tienes, y no es algo que convenga tocar a la ligera. Convertir resuelve lo que ya está en tu disco, que suele ser el problema inmediato.",
      },
      {
        heading: "Una sola recodificación, pérdida mínima",
        body:
          "Como JFIF y JPG son el mismo formato de fondo, esta conversión es casi un paso directo. La imagen se decodifica y se vuelve a codificar una sola vez, así que con una calidad alta la diferencia es imperceptible. Deja el control de calidad alto: aquí no hay ningún problema de tamaño que resolver y no es el momento de comprimir.",
      },
    ],
    faqs: [
      {
        q: "¿Qué es exactamente un archivo JFIF?",
        a: "Es un JPEG. JFIF significa JPEG File Interchange Format y es el contenedor estándar que ya usan casi todos los archivos JPG. La única diferencia son las letras que van después del punto.",
      },
      {
        q: "¿Por qué Chrome guarda las imágenes como .jfif en lugar de .jpg?",
        a: "Una asociación del registro de Windows indica .jfif como extensión predeterminada para el tipo de contenido image/jpeg. Chrome le pregunta a Windows qué extensión usar y Windows le responde .jfif. Es una rareza de la configuración de Windows, no un error de Chrome.",
      },
      {
        q: "¿Puedo cambiar .jfif por .jpg sin más?",
        a: "Muchas veces sí, porque el contenido ya es un JPEG válido. Resulta incómodo cuando Windows oculta las extensiones, no sirve para un lote grande y no ayuda si el programa que lo recibe objeta algo distinto del nombre.",
      },
      {
        q: "¿Se pierde calidad al convertir JFIF a JPG?",
        a: "Prácticamente nada con una calidad alta. La imagen se decodifica y se vuelve a codificar una vez, que es un paso de generación muy pequeño. Mantén el control alto y no verás diferencia.",
      },
      {
        q: "¿Puedo convertir muchos archivos JFIF a la vez?",
        a: "Sí, y es el principal motivo para usar un convertidor en vez de renombrar. Arrastra la carpeta entera y recibirás un ZIP con todos los archivos .jpg.",
      },
      {
        q: "¿Un archivo JFIF es peligroso o está dañado?",
        a: "No. Es un archivo de imagen normal con una extensión poco conocida. No tiene nada roto, y precisamente por eso la situación resulta tan confusa.",
      },
      {
        q: "¿También sirve para convertir JFIF a JPEG?",
        a: "Sí. JPG y JPEG son el mismo formato con dos nombres; el archivo que descargas termina en .jpg y lo acepta cualquier sitio que pida una imagen JPEG.",
      },
    ],
  },
};

export default copy;
