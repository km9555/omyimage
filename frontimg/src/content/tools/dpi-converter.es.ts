import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/cambiar-dpi-imagen (dpi-converter). Target query:
 * «Cambiar DPI de imagen», secondary «imagen a 300 DPI». Only the DPI field
 * in the header is rewritten (lib/image/dpi.ts); the ui block is shared with
 * dpi-checker, whose module reuses it.
 */
const content: ToolPageContent = {
  toolId: "dpi-converter",
  locale: "es",
  name: "Cambiar DPI de imagen",
  tagline:
    "Cambia los DPI de imágenes JPG y PNG a 300, 200, 72 o cualquier valor: solo cambia la etiqueta de DPI, así que la imagen queda exactamente igual. Por lotes, gratis y en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Cambiar DPI de imagen – a 300 DPI, gratis | oMyImage",
  metaDescription:
    "Cambiar DPI de imagen gratis y sin registro: pon tu imagen a 300 DPI o al valor que necesites sin perder calidad. JPG y PNG por lotes, directo en tu navegador.",

  intro:
    "Las imprentas, las editoriales y algunos formularios de solicitud piden imágenes «a 300 DPI», y una foto recién salida del teléfono o una captura de pantalla suele decir 72 o 96, o no decir nada. La herramienta «Cambiar DPI de imagen» de oMyImage reescribe ese único valor dentro del archivo. Agrega tus imágenes JPG o PNG, elige los DPI y descarga copias cuyos píxeles, calidad y colores son idénticos byte a byte a los originales, ahora etiquetadas con la resolución que necesitas.",

  sections: [
    {
      heading: "Qué cambian realmente los DPI",
      id: "what",
      body: [
        "DPI —puntos por pulgada; en rigor PPI para una imagen digital— es un número guardado en el encabezado del archivo. No describe la imagen: le dice a una impresora o a un programa de maquetación cuántos píxeles de la imagen debe meter en cada pulgada de papel. Las pantallas lo ignoran por completo, y por eso la misma foto se ve idéntica en un sitio web diga 72 o 300.",
        "Como los DPI son solo una etiqueta, cambiarlos es una edición mínima del encabezado: la densidad JFIF en un JPG (y la resolución EXIF, si el archivo la tiene) o el bloque pHYs en un PNG. No se recomprime nada, así que no hay pérdida de calidad y el peso del archivo se mantiene igual, con una diferencia de unos pocos bytes.",
      ],
    },
    {
      heading: "Cómo el tamaño de impresión depende de los DPI",
      id: "print-size",
      body: [
        "El tamaño de impresión es simplemente los píxeles divididos entre los DPI. Una foto de 1200 × 1800 píxeles etiquetada a 300 DPI se imprime a 4 × 6 pulgadas (10,2 × 15,2 cm). Etiquetada a 72 DPI, esos mismos píxeles piden una impresión de 16,7 × 25 pulgadas. Mientras eliges un valor, la herramienta muestra el tamaño al que se imprimirá la primera imagen, para que veas el efecto antes de descargar.",
        "Por eso cambiar los DPI es útil en programas de maquetación y procesadores de texto: una imagen etiquetada a 300 DPI entra en un documento con el tamaño físico previsto, en lugar de aparecer enorme.",
      ],
    },
    {
      heading: "Cuándo necesitas una imagen a 300 DPI",
      id: "when",
      body: [
        "300 DPI es el estándar para fotos impresas, libros, revistas y todo lo que se mira de cerca. Entre 150 y 200 DPI basta para pósteres e impresiones grandes que se ven a distancia, y algunos formularios de solicitud piden exactamente 200 o 300 porque su sistema revisa ese valor. 72 y 96 DPI son viejas convenciones de pantalla y solo importan cuando una plantilla las espera.",
        "Si un servicio de impresión rechaza un archivo por tener pocos DPI, revisa también su tamaño en píxeles: el servicio suele querer decir que la imagen se imprimirá demasiado grande o demasiado suave al tamaño que pediste, y eso no se arregla solo con una etiqueta nueva.",
      ],
    },
    {
      heading: "Cambiar los DPI no agrega píxeles",
      id: "resample",
      body: [
        "Poner 300 DPI a una imagen pequeña no la hace más nítida; hace que se imprima más pequeña. Una foto de 600 × 400 a 300 DPI se imprime a apenas 2 × 1,3 pulgadas. Para imprimir más grande con la misma calidad necesitas más píxeles desde el origen —un original o una exportación de mayor resolución—, no un número más alto en el encabezado.",
        "Cuando necesites un tamaño físico exacto, usa «Redimensionar imagen en cm»: calcula los píxeles para un tamaño en centímetros, milímetros o pulgadas a tus DPI y guarda los DPI en el archivo al mismo tiempo.",
      ],
    },
    {
      heading: "Qué archivos pueden guardar DPI",
      id: "formats",
      body: [
        "JPG y PNG tienen un lugar estándar para los DPI, y esos archivos se modifican tal cual. Los archivos WEBP, GIF y BMP se convierten primero a PNG —sin pérdida, así que se conserva cada píxel— porque el PNG puede llevar el valor y se acepta en cualquier lugar donde importen los DPI. El nombre del archivo descargado termina con el nuevo valor, por ejemplo foto_300dpi.jpg.",
      ],
    },
  ],

  howToTitle: "Cómo cambiar los DPI de una imagen",
  steps: [
    { title: "Agrega tus imágenes", description: "Selecciona una o varias imágenes JPG o PNG; también se aceptan WEBP, GIF y BMP." },
    { title: "Elige los DPI", description: "Elige 300, 200, 150, 96 o 72, o escribe cualquier valor, y revisa el tamaño de impresión." },
    { title: "Descarga", description: "Una sola imagen se descarga directamente; varias llegan juntas en un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Sin pérdida de calidad", description: "Solo cambia el valor de DPI del encabezado; los píxeles no se tocan." },
    { icon: "burst_mode", title: "Conversión por lotes", description: "Ajusta los DPI de una carpeta entera de imágenes de una vez." },
    { icon: "lock", title: "En tu navegador", description: "Tus imágenes se modifican en tu dispositivo y nunca se suben." },
  ],

  faqs: [
    { q: "¿Cómo pongo una imagen a 300 DPI?", a: "Agrega la imagen, elige 300 y haz clic en «Cambiar DPI». La copia descargada queda etiquetada a 300 DPI con exactamente los mismos píxeles." },
    { q: "¿Cambiar los DPI reduce la calidad?", a: "No. Solo cambia un número en el encabezado del archivo. No se recomprime nada, así que la calidad y el peso se mantienen." },
    { q: "¿300 DPI harán más nítida mi foto?", a: "No. Los DPI deciden a qué tamaño se imprime la imagen, no cuánto detalle tiene. Más DPI con los mismos píxeles dan una impresión más pequeña, no más nítida." },
    { q: "¿Cuántos DPI uso para imprimir?", a: "300 DPI para fotos y documentos que se miran de cerca; entre 150 y 200 para pósteres e impresiones grandes vistas a distancia." },
    { q: "¿Por qué mi imagen marca 72 o 96 DPI?", a: "Los teléfonos, las capturas de pantalla y muchas apps guardan 72 o 96, o ningún valor, y los programas asumen entonces uno de esos dos. Solo importa al imprimir." },
    { q: "¿Los DPI importan en sitios web o redes sociales?", a: "No. Las pantallas muestran píxeles e ignoran por completo el valor de DPI." },
    { q: "¿Puedo cambiar los DPI de un WEBP o un GIF?", a: "Sí. Se convierten a PNG sin perder ningún píxel, y el PNG recibe los DPI que elijas." },
    { q: "¿Cómo compruebo los DPI después de convertir?", a: "Usa «Ver DPI de imagen» o abre las propiedades del archivo: en Windows, la pestaña Detalles muestra la resolución horizontal y vertical." },
    { q: "¿Puedo cambiar los DPI de muchas imágenes a la vez?", a: "Sí. Agrégalas todas; cada una recibe los mismos DPI y se descargan juntas en un ZIP." },
    { q: "¿Se suben mis imágenes?", a: "No. Los DPI se cambian por completo en tu navegador." },
    { q: "¿Qué diferencia hay entre DPI y PPI?", a: "En la práctica, para una imagen digital se usan como sinónimos. PPI (píxeles por pulgada) es el término exacto para un archivo; DPI (puntos por pulgada) viene de la impresora. Los formularios y las imprentas suelen escribir DPI para ambos." },
  ],

  security:
    "Tus imágenes se modifican por completo en tu navegador: solo se reescribe el campo de DPI de cada archivo. No se sube, guarda ni rastrea nada.",

  ui: {
    // DpiTool.tsx — shared with dpi-checker, whose module reuses this block.
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "o arrastra aquí imágenes JPG, PNG, WEBP, GIF o BMP",
    "Change DPI": "Cambiar DPI",
    "Change DPI of {n} images": "Cambiar DPI de {n} imágenes",
    "Changed the DPI of 1 image.": "Se cambiaron los DPI de 1 imagen.",
    "Changed the DPI of {n} images.": "Se cambiaron los DPI de {n} imágenes.",
    "Clear files": "Quitar archivos",
    "Remove": "Quitar",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Please select image files.": "Selecciona archivos de imagen.",
    "Processing failed.": "Error al procesar.",
    "DPI": "DPI", // i18n-same
    "DPI check": "Revisión de DPI",
    "DPI settings": "Ajustes de DPI",
    "DPI only tells a printer how large to print the pixels. It never changes the pixels themselves.":
      "Los DPI solo le indican a la impresora a qué tamaño imprimir los píxeles. Nunca cambian los píxeles en sí.",
    "For a sharp print, divide the pixels by 300: that is the largest size in inches that prints at photo quality.":
      "Para una impresión nítida, divide los píxeles entre 300: ese es el tamaño máximo en pulgadas que se imprime con calidad fotográfica.",
    "Enter a DPI of at least 1.": "Escribe un valor de DPI de al menos 1.",
    "First image prints at {size}": "La primera imagen se imprime a {size}",
    "Most programs then assume 72 or 96 DPI.": "La mayoría de los programas asumen entonces 72 o 96 DPI.",
    "New DPI": "Nuevos DPI",
    "No DPI": "Sin DPI",
    "Not set": "Sin definir",
    "Only the DPI label changes — the pixels and quality stay exactly the same.":
      "Solo cambia la etiqueta de DPI: los píxeles y la calidad quedan exactamente iguales.",
    "Print size": "Tamaño de impresión",
    "Saving…": "Guardando…",
    "Sharp at 300 DPI": "Nítida a 300 DPI",
    "This format can't be read for DPI": "No se pueden leer los DPI de este formato",
    "WEBP, GIF and BMP files are saved as PNG, because only JPG and PNG can store a DPI.":
      "Los archivos WEBP, GIF y BMP se guardan como PNG, porque solo JPG y PNG pueden almacenar DPI.",
    "Where": "Dónde",
    "Your images are changed in your browser and never uploaded.": "Tus imágenes se modifican en tu navegador y nunca se suben.",
    "Your images are read in your browser and never uploaded.": "Tus imágenes se leen en tu navegador y nunca se suben.",
    "{dpi} DPI": "{dpi} DPI", // i18n-same
    "{x} × {y} DPI": "{x} × {y} DPI", // i18n-same
    "{w} × {h} cm ({wi} × {hi} in)": "{w} × {h} cm ({wi} × {hi} pulg.)",
    // SOURCE_LABEL (module scope)
    "Stored in the JFIF header": "Guardado en el encabezado JFIF",
    "Stored in the EXIF data": "Guardado en los datos EXIF",
    "Stored in the PNG pHYs chunk": "Guardado en el bloque pHYs del PNG",
    "Stored in the BMP header": "Guardado en el encabezado BMP",
    "Only an aspect ratio is stored, not a DPI": "Solo se guarda una relación de aspecto, no los DPI",
    "No DPI stored": "No hay DPI guardados",
  },
};

export default content;
