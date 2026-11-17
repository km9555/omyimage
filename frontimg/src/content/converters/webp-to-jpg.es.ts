import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es WebP-to-JPG converter.
 *
 * Head term "WebP a JPG" (12.1K ES / 18.1K MX), the biggest converter query
 * in Spanish; "convertir WebP a JPG" and "WebP a JPEG" as secondaries. The
 * angle is the English one: a file that something refuses, turned into the
 * one format nothing refuses, with a chosen fill colour for transparency.
 */
const copy: LocalizedPairCopy = {
  name: "WebP a JPG",
  seoTitle: "WebP a JPG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte WebP a JPG gratis y sin registro: eliges la calidad y el color de fondo, conviertes lotes enteros en un ZIP y todo se procesa en tu navegador.",
  unique: {
    intro:
      "WebP funciona de maravilla en una página web y da problemas en casi todo lo demás. Al convertir WebP a JPG obtienes el único formato de imagen que nadie rechaza: clientes de correo, imprentas, marcos digitales, teléfonos antiguos y formularios de trámites oficiales. Tú eliges la calidad y, si el WebP tiene zonas transparentes, también el color que las rellena, porque JPG no puede conservarlas.",
    whyConvert:
      "Casi todo el que llega aquí se ha topado con un muro, no ha tomado una decisión. Hiciste clic derecho en una imagen, la guardaste, y el sitio donde necesitas usarla no acepta un .webp. La lista es larga y tozuda: muchos servicios de impresión, versiones antiguas de Office, los formularios para subir productos de las tiendas online, los marcos de fotos digitales y una gran cantidad de software industrial e integrado. JPG es el mínimo común denominador de la imagen digital desde hace tres décadas, así que convertir WebP a JPG suele ser más rápido que pelearse con lo que rechaza el archivo. El segundo motivo es el tamaño. Si tu WebP es sin pérdida (las capturas de pantalla a menudo lo son), puede pesar incluso más que un JPG de la misma imagen, y al convertirlo se reduce de forma considerable.",
    notes: [
      {
        heading: "La transparencia tiene que convertirse en algo",
        body:
          "JPG no tiene canal alfa, así que un fondo transparente no puede pasar tal cual. Hay que pintar algo debajo, y lo habitual en todas partes es el blanco. Eso queda bien en una página blanca y salta a la vista en una oscura, y por eso esta herramienta te deja elegir el color de relleno en lugar de suponerlo. Si la transparencia te importa de verdad, JPG no es el destino adecuado: convierte el WebP a PNG y la conservarás.",
      },
      {
        heading: "Dos pasos con pérdida seguidos",
        body:
          "Un WebP con pérdida ya ha descartado detalle, y codificarlo en JPG descarta un poco más. En la práctica casi nunca se nota con una calidad razonable, pero el efecto es real y se acumula si conviertes de un formato a otro una y otra vez. Convierte una sola vez, desde la mejor fuente que tengas, y quédate con ese resultado. Si vas a seguir editando la imagen, un PNG sin pérdida es mejor archivo intermedio.",
      },
      {
        heading: "Un WebP animado te da un solo fotograma",
        body:
          "JPG es un formato de una sola imagen, así que un WebP animado se convierte en su primer fotograma. Dentro de JPG no hay forma de evitarlo. Si lo importante es la animación, convierte a GIF en su lugar.",
      },
      {
        heading: "WebP, JPG o JPEG: es lo mismo al final",
        body:
          "Mucha gente busca «WebP a JPEG» y se pregunta si es otra conversión. No lo es: JPG y JPEG son dos nombres del mismo formato, y la extensión de tres letras viene de la época de MS-DOS, que no admitía extensiones más largas. El archivo que descargas aquí termina en .jpg y lo abre cualquier programa que acepte JPEG, desde el visor de fotos de Windows y macOS hasta un formulario web o la galería de tu teléfono.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué mi equipo no abre un archivo WebP?",
        a: "Porque WebP apareció en 2010 y el software de escritorio ha tardado en adoptarlo. Las versiones antiguas de Windows necesitan un códec de Microsoft Store, Photoshop solo añadió soporte nativo en la versión 23.2 y muchas aplicaciones pequeñas siguen sin tenerlo. Convertir a JPG te ahorra perseguir el problema programa por programa.",
      },
      {
        q: "¿El JPG pesará más o menos que el WebP?",
        a: "Normalmente un poco más si el WebP era con pérdida, porque WebP comprime con más eficiencia a la misma calidad visual. Si el WebP era sin pérdida, algo habitual en capturas de pantalla y gráficos, el JPG será muchísimo más pequeño.",
      },
      {
        q: "¿Qué pasa con las zonas transparentes?",
        a: "Se rellenan con un color sólido, porque JPG no puede guardar transparencia. El blanco es el color predeterminado y puedes cambiarlo antes de convertir. Para mantener la transparencia, convierte a PNG.",
      },
      {
        q: "¿Convertir WebP a JPG reduce la calidad de la imagen?",
        a: "Un poco, porque JPG es un formato con pérdida. Con la calidad predeterminada la diferencia no se ve a un tamaño normal. Sube el control deslizante si conviertes fotos con mucho detalle que piensas imprimir.",
      },
      {
        q: "¿Puedo convertir muchos archivos WebP a la vez?",
        a: "Sí. Arrastra el lote completo: se convierten uno tras otro y los recibes en un único ZIP, sin tener que hacer clic en cada descarga.",
      },
      {
        q: "¿Se suben mis imágenes WebP a un servidor?",
        a: "Por lo general, no. Tu navegador sabe leer WebP y escribir JPG por sí mismo, así que la conversión ocurre en tu pestaña. Solo una imagen de resolución excepcionalmente alta, que una pestaña del navegador no puede dibujar, pasa a nuestro servidor, y se elimina justo después.",
      },
    ],
  },
};

export default copy;
