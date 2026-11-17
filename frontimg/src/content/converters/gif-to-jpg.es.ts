import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Spanish copy for the /es GIF-to-JPG converter.
 *
 * Head term "GIF a JPG" (480/mo), "convertir GIF a JPG" and "GIF a JPEG" as
 * secondaries. The angle that separates it from GIF a PNG: a small, accepted
 * still photo for an upload form, at the cost of transparency — and the
 * dithering that JPG does not remove.
 */
const copy: LocalizedPairCopy = {
  name: "GIF a JPG",
  seoTitle: "GIF a JPG – convertir gratis y online | oMyImage",
  seoDescription:
    "Convierte GIF a JPG gratis y sin registro: una foto ligera que acepta cualquier formulario, con color de fondo a elegir para las zonas transparentes.",
  unique: {
    intro:
      "Convertir un GIF a JPG te da un archivo de foto pequeño y aceptado en todas partes. Es lo adecuado cuando necesitas adjuntar, subir o imprimir una imagen fija y el GIF pesa demasiado o directamente no lo aceptan. Las zonas transparentes se rellenan con el color que elijas, y los GIF animados se convierten en su primer fotograma.",
    whyConvert:
      "Hay dos situaciones que traen a la gente hasta aquí. La primera es un formulario que no acepta GIF: muchos solo admiten JPG y PNG, sobre todo los que esperan una fotografía, como la subida de un documento de identidad, un anuncio en una tienda online o un servicio de impresión. La segunda es el tamaño: un GIF animado largo puede ocupar muchos megabytes, y si lo único que necesitas es un fotograma representativo, un JPG de ese fotograma pesa una fracción. JPG también es el destino adecuado cuando el contenido es fotográfico, porque su compresión está diseñada para imágenes de tonos continuos, algo para lo que la paleta de GIF nunca sirvió. Lo que JPG no puede hacer es transparencia ni animación, así que es la elección equivocada si cualquiera de las dos te importa.",
    notes: [
      {
        heading: "Los píxeles transparentes necesitan un fondo",
        body:
          "JPG no tiene canal alfa, así que cualquier zona transparente del GIF tiene que rellenarse con algo sólido. El blanco es el color predeterminado y suele ser la respuesta correcta, pero si la imagen va a ir sobre una página de color puedes elegir ese color aquí y evitar un recuadro blanco evidente. Como la transparencia de GIF es de bordes duros, el límite puede verse algo dentado después del relleno: ese borde viene del GIF, no de la conversión.",
      },
      {
        heading: "Los defectos de la paleta siguen a la vista",
        body:
          "Un GIF ya está reducido a 256 colores, a menudo con tramado, ese patrón de puntitos que se usa para simular tonos intermedios. La compresión JPG no elimina ese patrón y, de hecho, puede hacerlo algo más visible, porque el codificador trata los puntos del tramado como detalle real que vale la pena conservar. Mantener el control de calidad razonablemente alto evita agravar el problema.",
      },
      {
        heading: "Solo el primer fotograma",
        body:
          "JPG guarda exactamente una imagen, así que un GIF animado se convierte en su fotograma inicial. Ningún ajuste cambia eso. Si necesitas un fotograma concreto y no el primero, extrae antes los fotogramas con la herramienta «GIF a imágenes» y luego convierte el que quieras.",
      },
    ],
    faqs: [
      {
        q: "¿Qué fotograma de un GIF animado obtengo?",
        a: "El primero. JPG no puede guardar animaciones, así que solo se convierte el fotograma inicial. Usa «GIF a imágenes» si necesitas otro fotograma o todos.",
      },
      {
        q: "¿Qué pasa con la transparencia?",
        a: "Se rellena con un color sólido, porque JPG no admite transparencia. El blanco es el predeterminado y puedes elegir otro color antes de convertir.",
      },
      {
        q: "¿El JPG pesará menos que el GIF?",
        a: "Casi siempre, y muchísimo menos en el caso de los GIF animados, porque te quedas con un fotograma en lugar de cientos. En un GIF sencillo de un solo fotograma y pocos colores la diferencia es menor y, a veces, se invierte.",
      },
      {
        q: "¿Convierto a JPG o a PNG?",
        a: "A JPG si quieres un archivo pequeño y el contenido es fotográfico. A PNG si necesitas conservar la transparencia o una calidad sin pérdida para seguir editando.",
      },
      {
        q: "¿La imagen se verá peor?",
        a: "Un poco, porque JPG es con pérdida, pero con la calidad predeterminada el cambio cuesta verlo. El patrón de tramado del GIF original es el defecto más visible, y ya estaba ahí antes de la conversión.",
      },
      {
        q: "¿Puedo convertir GIF a JPEG con esta herramienta?",
        a: "Sí. JPG y JPEG son el mismo formato con dos nombres. El archivo que descargas termina en .jpg y sirve en cualquier formulario que pida una imagen JPEG.",
      },
    ],
  },
};

export default copy;
