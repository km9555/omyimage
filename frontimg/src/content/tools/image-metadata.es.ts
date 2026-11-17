import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/ver-metadatos-imagen.
 *
 * Primary query "Ver metadatos de imagen"; secondary "EXIF", "datos EXIF",
 * "ver EXIF". The sister tool remove-exif is referred to by its Spanish name
 * «Eliminar metadatos».
 */
const content: ToolPageContent = {
  toolId: "image-metadata",
  locale: "es",
  name: "Ver metadatos de imagen",
  tagline:
    "Consulta online los metadatos EXIF de una imagen: cámara, objetivo, exposición, ubicación GPS y fecha. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Ver metadatos de imagen – visor EXIF online | oMyImage",
  metaDescription:
    "Ver metadatos de imagen online: lee los datos EXIF de una foto (cámara, objetivo, exposición, fecha y ubicación GPS). También HEIC, gratis y sin subir nada.",

  intro:
    "Descubre la historia oculta detrás de cualquier foto. La herramienta Ver metadatos de imagen de oMyImage lee los datos EXIF incrustados en tu imagen directamente en tu navegador (cámara y objetivo, apertura, velocidad de obturación, ISO, fecha de captura e incluso la ubicación GPS) y los presenta con claridad, con la lista completa de etiquetas a un clic. No se sube nada, así que tu foto sigue siendo privada.",

  sections: [
    {
      heading: "Qué son los metadatos y de dónde salen",
      id: "what",
      body: [
        "Toda cámara escribe un bloque de información en el archivo junto a la imagen. El estándar EXIF define la mayor parte, y se diseñó pensando en los fotógrafos: un registro exacto de cómo se expuso cada toma, realmente útil cuando intentas entender por qué una foto salió bien y otra no.",
        "Los teléfonos actuales añaden bastante más: coordenadas GPS, altitud y orientación de la brújula si los servicios de ubicación están activados; el modelo del dispositivo y a menudo un número de serie; la versión del software que procesó la imagen. Algunas cámaras rellenan los campos de propietario y derechos de autor con datos que configuraste una vez y olvidaste.",
        "Las aplicaciones de edición añaden sus propias entradas, así que un archivo puede ir acumulando un historial parcial de lo que se le hizo y cuándo. Nada de esto se ve al mirar la imagen, y todo viaja con el archivo.",
      ],
    },
    {
      heading: "Revisar los datos EXIF antes de compartir",
      id: "why",
      body: [
        "La razón más práctica para mirar es saber qué estás a punto de regalar. Una foto hecha en casa lleva tu dirección; una hecha en el trabajo, la de tu empresa. Al vender algo por internet, publicar en un foro o enviar un archivo a un desconocido, la imagen es anónima, pero los metadatos no.",
        "También tiene usos constructivos. Los fotógrafos estudian los datos de exposición para aprender de sus propios resultados o para entender cómo consiguió alguien una toma. Quien organiza una gran biblioteca de fotos depende de la fecha de captura para ordenar imágenes cuyos nombres de archivo hace tiempo que no dicen nada. Y en seguros y documentación legal, a menudo lo decisivo es cuándo y dónde se tomó una fotografía.",
        "Cuando recibes una imagen, los metadatos son una primera comprobación de su procedencia, aunque débil, porque cualquier dato se puede editar.",
      ],
    },
    {
      heading: "Lo que los metadatos no pueden demostrar",
      id: "limits",
      body: [
        "Los metadatos son datos, no pruebas. Cualquier campo se puede modificar con herramientas gratuitas, así que una fecha o una ubicación solo demuestran que alguien escribió esos valores en el archivo. Toma lo que encuentres como una pista, no como una conclusión.",
        "La ausencia demuestra todavía menos. Una foto sin metadatos muy probablemente pasó por una plataforma que los elimina, o es una captura de pantalla, o la volvió a guardar un editor, y nada de eso implica que se haya ocultado algo a propósito.",
        "Lo único que los metadatos establecen de forma fiable es qué está revelando un archivo ahora mismo. Esa es la pregunta que esta herramienta responde bien, y suele ser la que importa antes de enviar algo.",
      ],
    },
    {
      heading: "Lectura local, incluso de HEIC",
      id: "privacy",
      body: [
        "El archivo se analiza dentro de tu navegador y nunca se sube, que es el trato correcto para una herramienta cuyo único propósito es examinar información potencialmente sensible. Enviar una fotografía a un servidor para averiguar si revela tu dirección sería un intercambio absurdo.",
        "Los archivos HEIC y HEIF funcionan aquí aunque el sitio no pueda mostrarlos en el navegador. Los metadatos están en el contenedor y no en los datos de píxeles comprimidos, así que el analizador lee las etiquetas sin tocar nunca el flujo HEVC. Por eso esto funciona localmente, mientras que la conversión de HEIC tiene que hacerse en un servidor.",
      ],
    },
  ],

  howToTitle: "Cómo ver los metadatos de una imagen",
  steps: [
    { title: "Subir", description: "Selecciona una foto o arrástrala al área de trabajo." },
    { title: "Leer los datos", description: "Consulta los datos de cámara, objetivo, exposición, fecha y GPS extraídos del EXIF del archivo." },
    { title: "Explorarlo todo", description: "Despliega la lista completa de metadatos para revisar cada etiqueta incrustada." },
  ],

  features: [
    { icon: "photo_camera", title: "Lectura EXIF completa", description: "Marca y modelo de la cámara, objetivo, apertura, obturación, ISO, distancia focal, fechas y más, bien agrupados." },
    { icon: "location_on", title: "Ubicación GPS", description: "Si la foto está geoetiquetada, consulta las coordenadas y abre el lugar exacto en un mapa." },
    { icon: "lock", title: "100 % privado", description: "Los metadatos se leen por completo en tu navegador: tu foto nunca se sube a un servidor." },
  ],

  faqs: [
    { q: "¿Qué metadatos puede leer?", a: "EXIF, incluidos la cámara y el objetivo, los ajustes de exposición, la fecha de captura, la orientación, el espacio de color y las coordenadas GPS cuando las hay." },
    { q: "¿Por qué mi imagen no muestra metadatos?", a: "Puede que se hayan eliminado (por ejemplo, en redes sociales) o que el formato no guarde EXIF: la mayoría de los PNG y de las capturas de pantalla no tienen." },
    { q: "¿Puedo ver la ubicación GPS?", a: "Sí. Las fotos geoetiquetadas muestran sus coordenadas con un enlace para ver el lugar en un mapa." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro, y la foto se lee localmente en tu navegador: no se sube nada." },
    { q: "¿Qué pueden decirme los metadatos de una foto?", a: "Cuándo se tomó, al segundo; dónde, con unos pocos metros de precisión si la ubicación estaba activada; qué cámara o teléfono la hizo, incluido el modelo y a menudo un número de serie; y todos los ajustes de exposición: obturación, apertura, ISO, distancia focal y flash. Algunos archivos llevan además campos de propietario y derechos de autor y un historial de edición." },
    { q: "¿Puedo saber si una foto ha sido editada?", a: "A veces. Los programas de edición suelen escribir su nombre en los metadatos, y la fecha de modificación a menudo difiere de la de captura. Pero los metadatos se alteran con total facilidad, así que su ausencia no demuestra nada y su presencia es un indicio, no una prueba." },
    { q: "¿Por qué mi foto no tiene ningún metadato?", a: "Lo más probable es que ya haya pasado por algo que los eliminó. Las redes sociales quitan los metadatos al subir la imagen, las capturas de pantalla nunca los tuvieron y muchas apps de mensajería recodifican las imágenes al enviarlas. Editar y volver a guardar en algunas aplicaciones también los descarta." },
    { q: "¿Puede leer archivos HEIC de mi iPhone?", a: "Sí. Analiza los metadatos directamente desde el contenedor sin decodificar los píxeles comprimidos en HEVC, así que funciona en tu navegador aunque mostrar un HEIC no sea posible. Los ajustes de cámara, las fechas y el GPS se leen con normalidad." },
    { q: "¿Cómo elimino lo que encuentro aquí?", a: "Usa la herramienta «Eliminar metadatos». Vuelve a codificar la imagen a partir de los píxeles, sin dejar ningún metadato. Primero lee y luego elimina: saber qué llevaba un archivo suele ser más útil que borrarlo a ciegas." },
    { q: "¿Qué precisión tienen los datos GPS?", a: "Normalmente de unos pocos metros en exteriores con buena señal de satélite. En interiores, o en zonas urbanas densas donde el teléfono recurre a la ubicación por Wi-Fi y antenas, el error puede ser de decenas o cientos de metros. En cualquier caso, es más que suficiente para identificar un edificio." },
    { q: "¿Se suben mis imágenes a algún servidor?", a: "No. Los datos EXIF se leen por completo en tu navegador y el archivo no sale de tu dispositivo. No queda ninguna copia en un servidor que pueda contener datos personales como tu ubicación." },
  ],

  security:
    "Tu foto sigue siendo privada. Los metadatos EXIF se leen por completo en tu navegador: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // ImageMetadataTool.tsx
    "Please select an image file.": "Selecciona un archivo de imagen.",
    "Select an image": "Seleccionar imagen",
    "or drop a JPG, PNG, TIFF or HEIC photo here": "o suelta aquí una foto JPG, PNG, TIFF o HEIC",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "Metadata": "Metadatos",
    "Metadata of {name}": "Metadatos de {name}",
    "Metadata options": "Opciones de metadatos",
    "All metadata ({n})": "Todos los metadatos ({n})",
    "No EXIF block in this file — messaging apps and social networks usually strip it. The file and image details below are read from the image itself, so they are still accurate.":
      "Este archivo no tiene bloque EXIF: las apps de mensajería y las redes sociales suelen eliminarlo. Los datos del archivo y de la imagen que aparecen abajo se leen de la propia imagen, así que siguen siendo exactos.",
    "Location": "Ubicación",
    "Latitude": "Latitud",
    "Longitude": "Longitud",
    "View on map": "Ver en el mapa",
    "Raw header": "Cabecera sin procesar",
    "Raw header (first 128 bytes)": "Cabecera sin procesar (primeros 128 bytes)",
    "bytes": "bytes", // i18n-same
    "image": "imagen",
    "Unknown": "Desconocido",
    "unknown": "desconocido",
    "Copy": "Copiar",
    "Copy all": "Copiar todo",
    "Copied to clipboard.": "Copiado al portapapeles.",
    "Couldn't copy to the clipboard.": "No se pudo copiar al portapapeles.",
    "Downloaded metadata as JSON.": "Metadatos descargados en JSON.",
    "Downloaded metadata as TXT.": "Metadatos descargados en TXT.",
    "Generated by oMyImage": "Generado con oMyImage",
    "Extracted automatically in your browser. It may be neither complete nor":
      "Extraído automáticamente en tu navegador. Puede que no sea completo ni",
    "accurate — metadata can be edited or removed at any point in a file's life.":
      "exacto: los metadatos se pueden editar o eliminar en cualquier momento de la vida de un archivo.",
  },
};

export default content;
