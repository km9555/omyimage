import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es AVIF-to-PNG converter.
 *
 * Head term "AVIF a PNG" (1.6K ES / 2.9K MX), "convertir AVIF a PNG" as
 * secondary. The angle that separates it from AVIF a JPG: transparency and
 * a lossless master file, at the price of a five- to ten-fold size jump.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF a PNG",
  seoTitle: "AVIF a PNG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte AVIF a PNG gratis y sin registro: conserva el fondo transparente y obtén un archivo sin pérdida para editar. Lotes en un ZIP, en tu navegador.",
  unique: {
    intro:
      "Cuando un AVIF tiene fondo transparente, el destino correcto es PNG y no JPG. Al convertir AVIF a PNG, el canal alfa se mantiene intacto y el resultado se guarda sin pérdida, así que obtienes exactamente lo que decodificó el navegador: un archivo de trabajo limpio que puedes llevar a una herramienta de diseño o editar una y otra vez sin que se degrade más.",
    whyConvert:
      "Lo que decide entre esta conversión y la de JPG es casi siempre la transparencia. AVIF lleva un canal alfa completo, y si conviertes a JPG esa transparencia tiene que destruirse y sustituirse por un relleno sólido. PNG la conserva, algo importante para logotipos, recortes de producto, iconos y cualquier imagen pensada para ir sobre un fondo que no controlas. El segundo factor es la edición. PNG es sin pérdida, así que una vez convertido puedes recortar, retocar y volver a guardar tantas veces como quieras sin acumular daños de compresión, algo que ni AVIF ni JPG pueden ofrecer. El coste es el tamaño: PNG lo guarda todo, y un AVIF de unos cientos de kilobytes puede convertirse con facilidad en varios megabytes como PNG. Es un precio justo para un archivo maestro y uno malo para un recurso web.",
    notes: [
      {
        heading: "Espera un aumento de tamaño drástico",
        body:
          "AVIF es uno de los formatos más eficientes que existen y PNG uno de los que menos; al convertir de uno a otro, el tamaño del archivo puede multiplicarse por cinco o por diez. No ha fallado nada cuando eso pasa. Piensa en el PNG como una copia de trabajo y no como algo para publicar: si luego lo necesitas en una página web, conviértelo a WebP, que mantiene la transparencia con una fracción del peso de PNG.",
      },
      {
        heading: "La transparencia pasa exactamente igual",
        body:
          "Los dos formatos guardan un alfa de 8 bits, así que los píxeles semitransparentes siguen siendo semitransparentes. Las sombras suaves, los bordes difuminados y el texto suavizado sobreviven sin halos ni líneas de contorno. Aquí no hay color de fondo que elegir, porque no hay nada que rellenar, y esa es justamente la ventaja frente a convertir a JPG.",
      },
      {
        heading: "El HDR se aplana al decodificar",
        body:
          "AVIF puede guardar alto rango dinámico y una gama de color amplia. El PNG de uso común no, y el navegador adapta la imagen al rango estándar mientras la decodifica. En la mayoría de las imágenes no se nota; en una foto HDR hecha a propósito, con luces muy brillantes, puede verse más plana que el original. Esto ocurre en el paso de decodificación, así que se aplica sea cual sea el formato al que conviertas.",
      },
    ],
    faqs: [
      {
        q: "¿Convertir AVIF a PNG mantiene la transparencia?",
        a: "Sí, por completo. Los dos formatos admiten un canal alfa de 8 bits, así que las zonas transparentes y semitransparentes pasan sin cambios y sin ningún relleno de fondo.",
      },
      {
        q: "¿La conversión es sin pérdida?",
        a: "La codificación PNG es sin pérdida, así que en ese paso no se pierde nada. El AVIF seguramente se guardó con pérdida, y convertir conserva la imagen tal como está ahora, sin restaurar el detalle ya descartado.",
      },
      {
        q: "¿Por qué el PNG pesa tanto más?",
        a: "Porque PNG nunca descarta datos, mientras que AVIF es extremadamente eficiente haciéndolo. Un aumento de cinco a diez veces es normal. Convierte después a WebP si necesitas un archivo pequeño que siga teniendo transparencia.",
      },
      {
        q: "¿Elijo PNG o JPG para mi AVIF?",
        a: "PNG si la imagen tiene transparencia o piensas editarla. JPG si es una foto opaca y quieres el archivo más pequeño y más universalmente aceptado.",
      },
      {
        q: "¿Puedo convertir varios archivos AVIF a la vez?",
        a: "Sí. Añade todos los que quieras: se convierten uno tras otro en tu navegador y los recibes juntos en un único ZIP.",
      },
      {
        q: "¿Se sube mi AVIF a un servidor para convertirlo?",
        a: "Normalmente no. Tu navegador decodifica AVIF y escribe PNG por sí mismo, así que la imagen se procesa en tu pestaña. Solo una imagen de resolución excepcionalmente alta, que una pestaña no puede dibujar, pasa a nuestro servidor, y se elimina justo después.",
      },
    ],
  },
};

export default copy;
