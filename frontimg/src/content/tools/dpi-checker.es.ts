import type { ToolPageContent } from "@/content/tools/types";
import converter from "@/content/tools/dpi-converter.es";

/**
 * Spanish copy for /es/ver-dpi-imagen (dpi-checker). Target query: «Ver DPI
 * de imagen», secondary «saber los DPI de una imagen». Reuses the
 * dpi-converter `ui` block.
 */
const content: ToolPageContent = {
  toolId: "dpi-checker",
  locale: "es",
  name: "Ver DPI de imagen",
  tagline:
    "Consulta los DPI de imágenes JPG, PNG, BMP y WEBP, y mira el tamaño al que se imprime cada una y el tamaño máximo al que se imprime nítida. Gratis, muchas imágenes a la vez, en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Ver DPI de imagen – gratis y online | oMyImage",
  metaDescription:
    "Ver DPI de imagen gratis y sin registro: saber los DPI de una imagen JPG, PNG, BMP o WEBP, dónde están guardados y a qué tamaño se imprime nítida.",

  intro:
    "Antes de mandar una imagen a una imprenta o de subirla a un formulario que pide ciertos DPI, conviene saber qué dice realmente el archivo. La herramienta «Ver DPI de imagen» de oMyImage lee la resolución guardada en cada imagen, te dice dónde está guardada y la convierte en las cifras que importan: a qué tamaño se imprime la imagen con esos DPI y qué tan grande puede imprimirse con calidad fotográfica. Agrega una imagen o una carpeta entera; nada sale de tu navegador.",

  sections: [
    {
      heading: "Qué muestra la herramienta",
      id: "what",
      body: [
        "Para cada imagen obtienes su tamaño en píxeles, los DPI guardados en el archivo y dónde se encontraron: el encabezado JFIF o los datos EXIF de un JPG, el bloque pHYs de un PNG, el encabezado de un BMP o el bloque EXIF de un WEBP. Si los valores horizontal y vertical son distintos, se muestran los dos.",
        "A partir de esas cifras, la herramienta calcula dos tamaños de impresión en centímetros y en pulgadas: el tamaño que pide el archivo con sus DPI guardados y el tamaño máximo al que se imprime nítido a 300 DPI, el estándar habitual para fotos y documentos.",
      ],
    },
    {
      heading: "Cómo leer el resultado",
      id: "reading",
      body: [
        "Supón que una foto mide 2400 × 3000 píxeles y está guardada a 72 DPI. La herramienta indica un tamaño de impresión de unos 84,7 × 105,8 cm —lo que haría con ella un programa que confía en la etiqueta— y un tamaño nítido de 20,3 × 25,4 cm a 300 DPI. La segunda cifra es la honesta: es lo máximo que puede crecer antes de que se noten los píxeles.",
        "Si un formulario o una imprenta pide 300 DPI y aquí aparece otro valor, cámbialo con «Cambiar DPI de imagen». Si el tamaño nítido es menor que el que necesitas, a la imagen le faltan píxeles, no le hace falta otra etiqueta.",
      ],
    },
    {
      heading: "Cuando una imagen no tiene DPI",
      id: "none",
      body: [
        "Muchas imágenes no llevan ningún valor de DPI: los GIF nunca, muchos PNG y capturas de pantalla tampoco, y algunos JPG solo guardan una relación de aspecto de píxel. La herramienta lo dice claramente. Los programas recurren entonces a un valor predeterminado —normalmente 72 o 96 DPI—, y por eso el mismo archivo puede mostrar valores distintos en apps distintas.",
        "Que falte el valor no es un problema para pantallas ni sitios web. Solo importa cuando la imagen se imprime o se coloca en un documento, y asignarle unos DPI lo resuelve en un segundo.",
      ],
    },
    {
      heading: "Saber los DPI de una imagen en Windows y Mac",
      id: "os",
      body: [
        "En Windows, haz clic derecho en la imagen, elige «Propiedades» y abre la pestaña «Detalles»: «Resolución horizontal» y «Resolución vertical» muestran los DPI. En un Mac, abre la imagen en Vista Previa y elige Herramientas y luego Mostrar inspector; la primera pestaña indica los DPI de la imagen. Ambos leen el mismo valor guardado que esta herramienta, así que las cifras deberían coincidir.",
      ],
    },
    {
      heading: "DPI y tamaño en píxeles juntos",
      id: "both",
      body: [
        "Algunos requisitos combinan ambos, como una foto de 3,5 × 4,5 cm a 300 DPI, que equivale a 413 × 531 píxeles. Revisa aquí primero el tamaño en píxeles y los DPI; si alguno no cuadra, «Redimensionar imagen en cm» genera el tamaño exacto en píxeles para los centímetros y los DPI que necesitas y guarda los DPI en el archivo.",
      ],
    },
  ],

  howToTitle: "Cómo ver los DPI de una imagen",
  steps: [
    { title: "Agrega tus imágenes", description: "Selecciona una o varias imágenes JPG, PNG, BMP, WEBP o GIF." },
    { title: "Lee los resultados", description: "Cada imagen muestra sus píxeles, los DPI guardados, dónde están guardados y sus tamaños de impresión." },
    { title: "Cámbialos si hace falta", description: "Haz clic en «Cambiar DPI» para enviar las imágenes directamente a «Cambiar DPI de imagen»." },
  ],

  features: [
    { icon: "info", title: "Los DPI y dónde están guardados", description: "Encabezado JFIF, EXIF, pHYs de PNG o encabezado BMP, y un aviso claro cuando no hay ninguno." },
    { icon: "straighten", title: "Tamaños de impresión", description: "El tamaño al que se imprime cada imagen y el tamaño nítido máximo a 300 DPI." },
    { icon: "lock", title: "Nada se sube", description: "Los archivos se leen en tu navegador y nunca salen de tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo veo los DPI de una imagen?", a: "Agrégala aquí. La herramienta muestra los DPI guardados en el archivo, dónde están guardados y los tamaños a los que se imprime." },
    { q: "¿Por qué mi imagen no tiene DPI?", a: "Los GIF nunca los guardan, y muchos PNG, capturas de pantalla e imágenes de internet tampoco. Los programas asumen entonces 72 o 96 DPI." },
    { q: "¿Por qué cada app muestra DPI distintos?", a: "Cuando un archivo no guarda DPI, o guarda dos valores contradictorios, cada app recurre a su propio valor predeterminado o lee un campo diferente." },
    { q: "¿72 DPI es malo?", a: "No para las pantallas, que ignoran los DPI. Para imprimir, lo que importa es si hay píxeles suficientes para el tamaño que necesitas." },
    { q: "¿Qué tan grande puede imprimirse nítida mi imagen?", a: "Divide los píxeles entre 300 para obtener pulgadas. La herramienta lo calcula por ti y también muestra el resultado en centímetros." },
    { q: "¿Puedo revisar muchas imágenes a la vez?", a: "Sí. Agrégalas todas; cada una tiene su propio resultado." },
    { q: "¿Cómo cambio los DPI después de revisarlos?", a: "Haz clic en «Cambiar DPI». Tus imágenes se abren en «Cambiar DPI de imagen», donde eliges el nuevo valor." },
    { q: "¿Puede leer los DPI de un WEBP o un BMP?", a: "Sí, cuando el archivo los guarda: el BMP los lleva en su encabezado y el WEBP en su bloque EXIF." },
    { q: "¿Se suben mis imágenes?", a: "No. Los archivos se leen por completo en tu navegador." },
    { q: "¿Los DPI dicen algo sobre la calidad de la imagen?", a: "No por sí solos. La calidad depende de los píxeles y de la compresión; los DPI solo fijan el tamaño de impresión. Una imagen a 300 DPI con pocos píxeles se imprime nítida, pero muy pequeña." },
  ],

  security:
    "Tus imágenes se leen por completo en tu navegador. No se sube, guarda ni rastrea nada.",

  ui: converter.ui,
};

export default content;
