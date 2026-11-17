import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es WebP-to-PNG converter.
 *
 * Head term "WebP a PNG" (4.4K ES / 9.9K MX), "convertir WebP a PNG" as the
 * secondary. The angle is the one the English page takes: a file that will
 * not open on double-click, converted losslessly with the transparency
 * intact.
 */
const copy: LocalizedPairCopy = {
  name: "WebP a PNG",
  seoTitle: "WebP a PNG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte WebP a PNG gratis y sin registro: sin pérdida de calidad, con la transparencia intacta y lotes enteros en un ZIP. Funciona en tu navegador.",
  unique: {
    intro:
      "WebP hace que las páginas carguen rápido, pero sigue siendo el formato que no se abre con un doble clic. Al convertir WebP a PNG obtienes un archivo que entiende cualquier aplicación, con la transparencia intacta y sin perder calidad por el camino: como PNG es sin pérdida, los píxeles que salen son exactamente los que entraron. Arrastra un WebP o cien; todo se convierte dentro de tu navegador.",
    whyConvert:
      "El motivo habitual es la simple incompatibilidad. Guardaste una imagen de una web y ahora Photoshop, PowerPoint, el formulario de tu imprenta o un teléfono Android antiguo se niegan a abrirla. PNG es la respuesta más segura a ese problema: tiene soporte universal desde finales de los años noventa y, a diferencia de JPG, conserva la transparencia, así que un logotipo con fondo transparente sobrevive al cambio. El otro motivo frecuente es la edición. WebP es con pérdida por defecto, y cada vez que se guarda empeora un poco más. Si conviertes una vez a PNG, tienes un archivo de trabajo sin pérdida que puedes recortar, retocar y volver a guardar tantas veces como necesites sin que la imagen se vaya degradando sin que te des cuenta.",
    notes: [
      {
        heading: "El PNG pesará más, y es normal",
        body:
          "Un WebP de 180 KB puede acabar fácilmente en 900 KB como PNG, y eso no significa que algo haya salido mal. WebP consigue su tamaño descartando datos de la imagen; PNG tiene prohibido descartar nada. Cambias bytes por compatibilidad y por un archivo que ya no se va a degradar. Si el nuevo tamaño es un problema y no necesitas transparencia, convertir a JPG da un archivo mucho más pequeño, y si en realidad solo querías reducir el peso sin cambiar de formato, la herramienta «Comprimir imagen» es la mejor opción.",
      },
      {
        heading: "Un WebP animado se convierte en una sola imagen",
        body:
          "WebP puede contener una animación, igual que un GIF. Un formato de imagen fija como PNG no puede representarla, así que de un WebP animado solo se convierte el primer fotograma. Si necesitas conservar el movimiento, convierte a GIF en lugar de a PNG. Si lo que quieres es cada fotograma como una imagen separada, esa es una tarea distinta de la que hace esta herramienta.",
      },
      {
        heading: "La transparencia se conserva exactamente",
        body:
          "WebP y PNG guardan los dos un canal alfa completo de 8 bits, así que los bordes suaves, las sombras y el texto suavizado se convierten sin problemas. No hay ningún paso que aplane capas ni ningún color de fondo que elegir, porque no hay nada que rellenar. Esa es la principal ventaja práctica de convertir WebP a PNG en vez de a JPG, que tendría que pintar un color sólido detrás de cada píxel transparente.",
      },
    ],
    faqs: [
      {
        q: "¿Convertir WebP a PNG reduce la calidad?",
        a: "No. PNG es un formato sin pérdida, así que la conversión copia cada píxel exactamente. Ten en cuenta lo que no puede hacer: si el WebP original se guardó con pérdida, el detalle ya se perdió en ese momento, y el PNG conserva la imagen tal como está ahora, sin restaurar nada.",
      },
      {
        q: "¿Por qué mi PNG pesa mucho más que el WebP?",
        a: "Porque PNG nunca tira datos. El tamaño reducido de WebP viene de la compresión con pérdida, y PNG no puede usar ese truco. Que el archivo pese entre 3 y 6 veces más es completamente normal en una foto y es el precio esperable de un archivo sin pérdida que se abre en todas partes.",
      },
      {
        q: "¿Se mantiene la transparencia al convertir?",
        a: "Sí, por completo. Los dos formatos admiten canal alfa, así que las zonas transparentes y semitransparentes pasan sin cambios. No aparece ningún rectángulo blanco detrás de tu imagen.",
      },
      {
        q: "¿Qué pasa con un WebP animado?",
        a: "Obtienes el primer fotograma como un PNG estático. PNG no admite animación, así que los demás fotogramas no se pueden representar. Si necesitas conservar la animación, convierte a GIF.",
      },
      {
        q: "¿Puedo convertir una carpeta entera de archivos WebP de una vez?",
        a: "Sí. Selecciona o arrastra todos los que quieras: se convierten uno tras otro y se empaquetan en un único ZIP, así descargas un solo archivo en lugar de decenas.",
      },
      {
        q: "¿Por qué Fotos de Windows o Photoshop no abren mi archivo WebP?",
        a: "WebP llegó en 2010, pero el software de escritorio lo adoptó despacio. Photoshop necesitó un complemento hasta la versión 23.2, y las versiones antiguas de Windows necesitan un códec de Microsoft Store. Convertir a PNG evita el problema entero en lugar de resolverlo versión por versión.",
      },
      {
        q: "¿Se suben mis imágenes WebP para convertirlas?",
        a: "Por lo general, no. Tu navegador sabe leer WebP y escribir PNG por sí mismo, así que la conversión ocurre en tu pestaña. Solo una imagen de resolución excepcionalmente alta, que una pestaña del navegador ya no puede dibujar, pasa a nuestro servidor, y se elimina justo después.",
      },
    ],
  },
};

export default copy;
