import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/heic-a-jpg.
 *
 * Head term "HEIC a JPG" (14.8K/mo) — Spanish converter queries take the
 * "X a Y" form. Secondaries "convertir HEIC a JPG" and "fotos de iPhone" go in
 * the intro, a heading and an FAQ. The iPhone settings are named as Spanish
 * iOS shows them; Spain says "Ajustes" and Latin America "Configuración", so
 * both are given (Cámara › Formatos › «Más compatible»; Fotos › «Transferir a
 * Mac o PC» › «Automático» / «Conservar originales»).
 *
 * HeicTool is shared with /heic-to-png: its ui keys are duplicated there
 * (each route only has its own tool's ui in scope).
 */
const content: ToolPageContent = {
  toolId: "heic-to-jpg",
  locale: "es",
  name: "HEIC a JPG",
  tagline:
    "Convierte fotos HEIC y HEIF del iPhone a JPG o PNG online, por lotes y con control de calidad. Gratis y rápido, con el programa de código abierto ImageMagick.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "HEIC a JPG – convertir fotos de iPhone gratis | oMyImage",
  metaDescription:
    "HEIC a JPG gratis y sin registro: convierte fotos de iPhone de HEIC a JPG o PNG, por lotes y con control de calidad. Los archivos se eliminan después.",

  intro:
    "Los iPhone guardan las fotos en HEIC para ocupar poco espacio, pero muchas aplicaciones y dispositivos no pueden abrirlas. Con la herramienta HEIC a JPG de oMyImage puedes convertir HEIC a JPG: tus fotos .heic y .heif se convierten en JPG compatibles con todo (o en PNG sin pérdida), de una en una o por lotes. Es la única herramienta del sitio que se ejecuta en nuestro servidor en lugar de en tu navegador: decodificar HEIC requiere una biblioteca que, por su licencia, no podemos enviar a los navegadores, así que tu archivo se convierte en el servidor y se elimina justo después.",

  sections: [
    {
      heading: "Qué es HEIC y por qué da problemas",
      id: "what",
      body: [
        "HEIC es el formato que el iPhone usa de forma predeterminada desde iOS 11. Guarda las fotografías con aproximadamente la mitad del tamaño de un JPG equivalente, un verdadero logro técnico y la razón por la que Apple lo adoptó: un teléfono con diez mil fotos ahorra muchísimo espacio.",
        "El problema está en su base. HEIC envuelve el códec de video HEVC/H.265, y HEVC está cubierto por varios consorcios de patentes que cobran por las licencias de decodificación. Ese único hecho explica casi todos los problemas que la gente tiene con el formato: Windows no incluye un decodificador, la mayoría de los navegadores no lo muestran, muchos teléfonos Android no pueden abrirlo y una larga lista de programas de escritorio simplemente no sabe qué es el archivo.",
        "JPG no carga con nada de eso. Tiene treinta años, está libre de patentes y lo entiende todo lo que alguna vez ha mostrado una imagen. Al pasar de HEIC a JPG cambias algo de eficiencia de almacenamiento por la certeza de que la foto se abrirá dondequiera que la envíes.",
      ],
    },
    {
      heading: "Por qué esta herramienta usa nuestro servidor",
      id: "server",
      body: [
        "Todos los demás convertidores de este sitio funcionan dentro de tu navegador. HEIC es la excepción, y el motivo es la licencia, no el rendimiento. Todos los decodificadores de HEIC en JavaScript que existen —heic2any, heic-decode, heic-convert, libheif-js— son envoltorios de la misma biblioteca libheif, y libheif tiene licencia LGPL-3.0. Incluirla en un paquete web cuenta como distribución, lo que conlleva obligaciones que un bloque de JavaScript minificado no puede cumplir.",
        "Ejecutar la biblioteca en un servidor no es distribución, así que la decodificación se hace ahí. Tu foto viaja por una conexión HTTPS cifrada, se convierte y se elimina inmediatamente después. No se guarda, no se indexa ni se usa para nada más. Preferimos decirlo claramente antes que atribuir a esta herramienta en concreto una propiedad de privacidad que no tiene.",
      ],
    },
    {
      heading: "Fotos de iPhone: cómo evitar el problema desde el origen",
      id: "settings",
      body: [
        "Si conviertes archivos HEIC con frecuencia, vale la pena cambiar el ajuste en lugar de los archivos. En Ajustes (Configuración en Latinoamérica) › Cámara › Formatos, la opción «Más compatible» hace que la cámara guarde directamente en JPG. Pierdes la eficiencia de almacenamiento, que en un teléfono moderno rara vez es el factor limitante.",
        "Hay un segundo ajuste que confunde a mucha gente. En Ajustes › Fotos, la opción «Transferir a Mac o PC» puede estar en «Automático», que convierte HEIC a JPG durante la copia, o en «Conservar originales», que no lo hace. Una carpeta llena de archivos .heic que no se abren en un equipo con Windows muy a menudo es ese segundo ajuste haciendo exactamente lo que se le indicó.",
      ],
    },
    {
      heading: "Calidad y tamaño del archivo después de convertir",
      id: "quality",
      body: [
        "Tu teléfono ya comprimió el HEIC con pérdida, y codificarlo a JPG lo comprime por segunda vez. Con la calidad predeterminada no se nota al tamaño de visualización normal, pero es un paso generacional real, así que convierte desde el HEIC original y no desde una copia que ya haya pasado por otro proceso.",
        "Cuenta con que el JPG pese más que el HEIC —normalmente entre 1,5 y 2,5 veces—, porque pasas a un formato menos eficiente. Ese es el precio de la compatibilidad universal. Si en cambio necesitas una copia sin pérdida para editar, convierte a PNG, pero prepárate para un archivo varias veces más grande todavía.",
      ],
    },
  ],

  howToTitle: "Cómo convertir HEIC a JPG",
  steps: [
    { title: "Sube tus HEIC", description: "Selecciona una o varias fotos .heic / .heif, o arrástralas y suéltalas." },
    { title: "Elige un formato", description: "Elige JPG (con control de calidad) o PNG como formato de salida." },
    { title: "Convierte y descarga", description: "Haz clic en Convertir: una foto se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "photo_camera", title: "Hecho para fotos de iPhone", description: "Convierte las fotos HEIC/HEIF de Apple en JPG o PNG que se abren en todas partes: Windows, Android y la web." },
    { icon: "burst_mode", title: "Conversión por lotes", description: "Convierte todo un carrete a la vez y descárgalo todo en un solo ZIP." },
    { icon: "lock", title: "Privado de forma predeterminada", description: "La conversión se ejecuta en nuestro servidor con ImageMagick, de código abierto; los resultados se eliminan automáticamente en una hora y nunca se comparten ni se reutilizan." },
  ],

  faqs: [
    { q: "¿Qué es HEIC?", a: "HEIC (HEIF) es el formato de foto de alta eficiencia que los iPhone usan de forma predeterminada. Ahorra espacio, pero no es compatible en todas partes, así que convertirlo a JPG facilita compartirlo." },
    { q: "¿Puedo convertir muchos archivos HEIC a la vez?", a: "Sí. Agrega todos los que quieras: varios archivos se descargan juntos en un ZIP." },
    { q: "¿Se conserva la calidad?", a: "Sí. Elige PNG para una salida sin pérdida, o JPG con un control de calidad para equilibrar tamaño y fidelidad." },
    { q: "¿Se suben mis fotos?", a: "Sí: HEIC es la única herramienta del sitio que necesita un servidor. Decodificar HEIC requiere una biblioteca que, por motivos de licencia, no podemos enviar a tu navegador, así que el archivo se convierte en nuestro servidor y se elimina automáticamente en una hora. No se comparte ni se reutiliza nada." },
    { q: "¿Es gratis?", a: "Totalmente gratis, sin marca de agua y sin registro." },
    { q: "¿Por qué mi iPhone guarda las fotos en HEIC?", a: "Porque cabe aproximadamente el doble de imagen en el mismo espacio que con JPG, algo importante cuando un teléfono guarda miles de fotos. Apple cambió el formato predeterminado en iOS 11. El ahorro es real; el costo en compatibilidad es lo que trae a la gente hasta aquí." },
    { q: "¿Cómo hago que mi iPhone deje de usar HEIC?", a: "Abre Ajustes (Configuración), entra en Cámara, luego en Formatos, y elige «Más compatible». A partir de ese momento, las fotos nuevas se guardarán como JPG. Las fotos que ya tienes no se convierten, así que esas tendrás que convertirlas igualmente." },
    { q: "¿Por qué Windows no abre mis archivos HEIC?", a: "HEIC se basa en el códec de video HEVC/H.265, que está cubierto por consorcios de patentes, así que Windows no incluye un decodificador de forma predeterminada. Microsoft ofrece extensiones HEVC en su tienda, a veces de pago. Convertir HEIC a JPG evita el problema por completo." },
    { q: "¿Convierto a JPG o a PNG?", a: "JPG para casi todo: es mucho más ligero y se acepta en todas partes. Elige PNG cuando quieras una copia sin pérdida para editar o archivar, y acepta que el archivo será varias veces más grande. Para eso existe la página HEIC a PNG." },
    { q: "¿Se conservan la fecha y la ubicación de mi foto?", a: "De forma predeterminada, sí: el convertidor copia los metadatos EXIF —incluidas la fecha de captura y las coordenadas GPS, si la foto las tiene— al nuevo archivo. Marca «Eliminar metadatos» para quitarlo todo antes de compartir la imagen; las fotos de teléfono casi siempre registran dónde se tomaron. Para revisar esos datos antes, la herramienta Ver metadatos de imagen los lee directamente de un HEIC sin convertirlo, en tu navegador." },
    { q: "¿Puedo convertir todo un carrete?", a: "Sí. Agrega todos los archivos .heic o .heif que quieras; se convierten uno tras otro y se devuelven en un solo ZIP." },
    { q: "¿Funciona en el teléfono y en Windows?", a: "Sí. La herramienta funciona en cualquier navegador moderno: puedes subir las fotos directamente desde el iPhone o desde un equipo con Windows o macOS, sin instalar nada. Los JPG resultantes se abren en Windows, Android y cualquier formulario de subida." },
  ],

  security:
    "La conversión de HEIC se ejecuta en nuestro servidor con ImageMagick, de código abierto. Los resultados se guardan solo brevemente detrás de un enlace de descarga privado y se eliminan automáticamente en una hora. Nunca compartimos ni reutilizamos tus fotos.",

  ui: {
    // HeicTool.tsx (shared with /heic-to-png — keep these in sync there)
    "Please select HEIC or HEIF images.": "Selecciona imágenes HEIC o HEIF.",
    "Converted 1 HEIC image.": "Se convirtió 1 imagen HEIC.",
    "Converted {n} HEIC images.": "Se convirtieron {n} imágenes HEIC.",
    "or drop .heic / .heif photos here": "o suelta aquí fotos .heic / .heif",
    "Converted on our server over an encrypted connection — files are deleted right after.":
      "Convertido en nuestro servidor mediante una conexión cifrada: los archivos se eliminan justo después.",
    "1 HEIC image": "1 imagen HEIC",
    "{n} HEIC images": "{n} imágenes HEIC",
    "Conversion runs on our server; results are auto-deleted within an hour.":
      "La conversión se ejecuta en nuestro servidor; los resultados se eliminan automáticamente en una hora.",
    "Convert {n} images": "Convertir {n} imágenes",
    "Convert & download": "Convertir y descargar",
    "Convert": "Convertir",
    "Converting…": "Convirtiendo…",
    "Conversion failed.": "La conversión falló.",
    "Conversion Settings": "Ajustes de conversión",
    "Conversion settings": "Ajustes de conversión",
    "Clear files": "Quitar archivos",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Quality": "Calidad",
    "Remove": "Quitar",
    "Strip metadata": "Eliminar metadatos",
    "Remove EXIF, colour profile, camera and location data. Photos from a phone usually carry GPS coordinates.":
      "Elimina los datos EXIF, el perfil de color y los datos de cámara y ubicación. Las fotos de teléfono suelen llevar coordenadas GPS.",
    // Backend sentences this tool can surface (routes/image/heic)
    "Upload a HEIC or HEIF image.": "Sube una imagen HEIC o HEIF.",
    "HEIC conversion isn't enabled on this server (ImageMagick with libheif not installed).":
      "La conversión de HEIC no está disponible en este servidor por el momento.",
  },
};

export default content;
