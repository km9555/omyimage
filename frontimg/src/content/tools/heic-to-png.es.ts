import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/heic-a-png.
 *
 * Head term "HEIC a PNG" — the sibling of /es/heic-a-jpg, which takes most of
 * the search volume; this page is for people who want a lossless copy to
 * edit. Spanish converter queries take the "X a Y" form. iPhone settings are
 * named as Spanish iOS shows them (Ajustes / Configuración › Cámara ›
 * Formatos › «Más compatible»).
 *
 * HeicTool is shared with /heic-to-jpg, so its ui keys are duplicated here —
 * each route only has its own tool's ui in scope (conversion.md §6.2.3).
 */
const content: ToolPageContent = {
  toolId: "heic-to-png",
  locale: "es",
  name: "HEIC a PNG",
  tagline:
    "Convierte fotos HEIC y HEIF del iPhone a PNG sin pérdida, por lotes, sin registro y con los archivos eliminados justo después de la conversión.",
  crossLink: { lead: "¿Prefieres un archivo más pequeño?", label: "Convertir HEIC a JPG", toolId: "heic-to-jpg" },
  category: { id: "convert", label: "Convertir" },

  metaTitle: "HEIC a PNG – convertir sin pérdida y gratis | oMyImage",
  metaDescription:
    "HEIC a PNG gratis y sin registro: convierte fotos de iPhone a PNG sin pérdida y por lotes. Ideal para editar, imprimir o archivar tus imágenes HEIC.",

  intro:
    "Convierte las fotos .heic que genera tu iPhone en archivos PNG que se abren en cualquier parte. PNG no tiene pérdida, así que la imagen convertida es exactamente lo que salió del decodificador, sin una segunda ronda de compresión encima de la que ya aplicó la cámara. Agrega una sola foto o todo un carrete y recibe tus imágenes de HEIC a PNG.",

  sections: [
    {
      heading: "¿Por qué convertir HEIC a PNG?",
      id: "why",
      body: [
        "HEIC es el formato en el que el iPhone guarda las fotos de forma predeterminada desde iOS 11, y almacena aproximadamente el doble de imagen en el mismo espacio que JPG. El inconveniente es que se basa en el códec de video HEVC/H.265, cubierto por consorcios de patentes, así que la mayoría de los navegadores, gran parte del software de Windows y muchas aplicaciones de Android directamente se niegan a abrir un archivo .heic sin instalar un códec adicional.",
        "PNG es el tipo de formato opuesto: nada llamativo, antiquísimo para los estándares del software y entendido por absolutamente todo. Elegirlo en lugar de JPG se reduce a una sola cosa: PNG no tiene pérdida. El HEIC ya se comprimió con pérdida cuando tu teléfono lo guardó, y convertirlo a JPG lo comprime una segunda vez. Convertirlo a PNG no, así que obtienes exactamente lo que produjo el decodificador. Para una foto que vas a editar, retocar, imprimir o archivar, eso importa.",
        "El precio es el tamaño del archivo. Un HEIC que ocupa 2 MB en tu teléfono puede convertirse fácilmente en un PNG de 10 a 15 MB, porque PNG nunca descarta nada. Si solo necesitas enviar la foto por correo o publicarla, JPG es mejor destino y la diferencia de tamaño es enorme.",
      ],
    },
    {
      heading: "Por qué esta herramienta se ejecuta en nuestro servidor",
      id: "server",
      body: [
        "Casi todas las herramientas de oMyImage funcionan dentro de la pestaña de tu navegador. HEIC es la excepción, y el motivo es legal, no técnico. Todos los decodificadores de HEIC en JavaScript que existen —heic2any, heic-decode, heic-convert, libheif-js— son por dentro la misma biblioteca libheif, y libheif tiene licencia LGPL-3.0. Incluirla en un paquete para el navegador cuenta como distribución, lo que conlleva obligaciones que un fragmento de webpack minificado no puede cumplir.",
        "Por eso la decodificación se hace en nuestro servidor, donde ejecutar la biblioteca no es distribución. Tu archivo se envía por una conexión HTTPS cifrada, se convierte y se elimina inmediatamente después. No lo guardamos, no lo indexamos ni lo usamos para nada más. Es la única categoría de herramienta del sitio que funciona así, y las páginas que lo hacen lo dicen claramente en lugar de atribuirse una propiedad de privacidad que no tienen.",
      ],
    },
    {
      heading: "Cómo hacer que tu iPhone deje de crear HEIC",
      id: "iphone",
      body: [
        "Si prefieres no convertir cada vez, puedes indicarle al teléfono que deje de hacerlo. En Ajustes (Configuración en Latinoamérica), dentro de Cámara, la pantalla Formatos ofrece «Más compatible»: elígela y la cámara guardará en JPG a partir de entonces. Pierdes algo de eficiencia de almacenamiento y las fotos que ya tienes no cambian, pero las nuevas dejan de ser un problema.",
        "Hay un segundo ajuste que conviene conocer. En Fotos, la opción «Transferir a Mac o PC» puede estar en «Automático», que convierte HEIC a JPG al copiar. Si está en «Conservar originales», obtienes los archivos .heic sin cambios, y muchas veces de ahí sale una carpeta de fotos que no se pueden abrir.",
      ],
    },
    {
      heading: "¿PNG o JPG para las fotos de iPhone?",
      id: "png-or-jpg",
      body: [
        "Elige PNG cuando la foto vaya a un editor, cuando la vayas a guardar más de una vez, cuando contenga texto o zonas planas como las de una captura de pantalla que JPG difuminaría, o cuando quieras una copia de archivo que no se degrade más.",
        "Elige JPG cuando la foto sea una instantánea normal de la cámara pensada para correo, mensajería, un sitio web o un servicio de impresión. Ocupa una fracción del tamaño y la diferencia de calidad es invisible con ajustes razonables. El selector de arriba cambia entre los dos sin volver a subir nada, así que puedes probar ambos.",
      ],
    },
  ],

  howToTitle: "Cómo convertir HEIC a PNG",
  steps: [
    {
      title: "Agrega tus fotos HEIC",
      description: "Suelta archivos .heic o .heif directamente desde tu iPhone o desde una descarga de iCloud. Puedes subir varios a la vez.",
    },
    {
      title: "PNG ya está seleccionado",
      description: "La salida no tiene pérdida, así que no hay control de calidad que ajustar. Cambia a JPG si prefieres un archivo más pequeño.",
    },
    {
      title: "Convierte y descarga",
      description: "Una foto se descarga sola; varias llegan juntas en un ZIP.",
    },
  ],

  features: [
    {
      icon: "high_quality",
      title: "Salida sin pérdida",
      description:
        "PNG guarda cada píxel exactamente como se decodificó del HEIC, sin una segunda ronda de daños por compresión.",
    },
    {
      icon: "burst_mode",
      title: "Carretes completos",
      description:
        "Convierte un lote de una sola vez y recibe un único ZIP en lugar de descargar foto por foto.",
    },
    {
      icon: "devices",
      title: "Se abre en cualquier parte",
      description:
        "PNG es compatible en todas partes desde los años noventa: Windows, Android, Office, cualquier editor y cualquier navegador.",
    },
  ],

  faqs: [
    {
      q: "¿Convertir HEIC a PNG pierde calidad?",
      a: "El paso a PNG no tiene pérdida, así que ahí no se pierde nada. Ten en cuenta que el propio HEIC ya fue comprimido con pérdida por tu teléfono, así que la conversión conserva la foto exactamente como está ahora, sin recuperar el detalle que la cámara ya descartó.",
    },
    {
      q: "¿Por qué el PNG pesa mucho más que el HEIC?",
      a: "Porque PNG lo guarda todo y HEIC es extremadamente eficiente descartando lo que el ojo no echará de menos. Que el tamaño se multiplique entre cinco y ocho veces es normal. Convierte a JPG si te importa más el tamaño que la ausencia de pérdida.",
    },
    {
      q: "¿Se sube mi foto?",
      a: "Sí, en esta herramienta en concreto. Los navegadores no pueden decodificar HEIC y los únicos decodificadores en JavaScript se basan en libheif, con licencia LGPL, que no podemos enviar a tu navegador. Tu archivo viaja por HTTPS a nuestro servidor, se convierte y se elimina justo después.",
    },
    {
      q: "¿Puedo convertir todo un carrete a la vez?",
      a: "Sí. Agrega todos los archivos .heic o .heif que quieras; se convierten uno tras otro y se entregan en un solo ZIP.",
    },
    {
      q: "¿Funciona también con archivos .heif?",
      a: "Sí. HEIF es el contenedor y HEIC es la variante codificada con HEVC que usa Apple. Se aceptan ambas extensiones.",
    },
    {
      q: "¿Se conservan la fecha y la ubicación de la foto?",
      a: "El convertidor copia los metadatos siempre que el formato de destino pueda guardarlos, y la opción «Eliminar metadatos» lo quita todo antes de la descarga. Si quieres saber con certeza qué contiene la foto, la herramienta Ver metadatos de imagen lee los datos EXIF directamente de un HEIC sin convertirlo.",
    },
    {
      q: "¿Cómo evito que mi iPhone guarde en HEIC?",
      a: "En Ajustes (Configuración), abre Cámara, luego Formatos, y elige «Más compatible». Las fotos nuevas se guardarán como JPG. Los archivos HEIC que ya tienes no cambian, así que esos tendrás que convertirlos igualmente.",
    },
    {
      q: "¿Es gratis?",
      a: "Sí: sin cuenta, sin marca de agua y sin límite en el número de fotos.",
    },
    {
      q: "¿Por qué Windows no abre mis archivos HEIC?",
      a: "HEIC se basa en el códec de video HEVC/H.265, sujeto a patentes, así que Windows no incluye un decodificador de forma predeterminada. Un PNG, en cambio, se abre en cualquier versión de Windows sin software adicional, así que la conversión evita el problema por completo.",
    },
  ],

  security:
    "HEIC no se puede decodificar en un navegador: todos los decodificadores en JavaScript son libheif, con licencia LGPL, que no podemos enviar a tu dispositivo. Por eso tu foto se envía a nuestro servidor por una conexión HTTPS cifrada, se convierte y se elimina justo después. Nunca se guarda, se indexa ni se usa para nada más.",

  ui: {
    // HeicTool.tsx — the same keys as heic-to-jpg.es.ts (one shared component,
    // and each route only has its own tool's ui in scope).
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
