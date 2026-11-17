import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/eliminar-metadatos.
 *
 * Primary query "Eliminar metadatos"; secondary "eliminar datos EXIF",
 * "quitar ubicación GPS de una foto". Privacy angle added as an FAQ — the
 * processing facts stay exactly as on the English page.
 */
const content: ToolPageContent = {
  toolId: "remove-exif",
  locale: "es",
  name: "Eliminar metadatos",
  tagline:
    "Elimina los datos EXIF y demás metadatos (incluida la ubicación GPS) de tus imágenes online antes de compartirlas. Con procesamiento por lotes, gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Eliminar metadatos – borrar datos EXIF de fotos | oMyImage",
  metaDescription:
    "Eliminar metadatos de fotos: borra los datos EXIF, la ubicación GPS, la cámara y la fecha de tus imágenes, también por lotes. Gratis y sin subir nada.",

  intro:
    "Protege tu privacidad antes de compartir fotos. La herramienta Eliminar metadatos de oMyImage borra los metadatos ocultos de tus imágenes (ubicación GPS, modelo de cámara y objetivo, software y fechas) volviendo a codificarlas directamente en tu navegador. Limpia una sola imagen o un lote entero y descárgalo al instante. No se sube nada, así que tus fotos y sus datos siguen siendo privados.",

  sections: [
    {
      heading: "Lo que llevan tus fotos",
      id: "what",
      body: [
        "Cada fotografía que hace un teléfono o una cámara llega con un bloque de metadatos adjunto. El estándar EXIF cubre los campos técnicos (velocidad de obturación, apertura, ISO, distancia focal, modelo de cámara), que son útiles e inofensivos. Lo que va junto a ellos es lo que merece atención.",
        "Las coordenadas GPS son lo importante. Si los servicios de ubicación estaban activados, el archivo registra dónde se tomó la foto con unos pocos metros de precisión, junto con la fecha y la hora exactas. Una foto hecha dentro de tu casa lleva tu domicilio en un formato que cualquier programa puede leer al instante.",
        "Hay más: números de serie del dispositivo que relacionan fotos distintas con la misma cámara, campos de propietario y derechos de autor que algunas cámaras rellenan automáticamente, el historial de edición de ciertas aplicaciones y, en algunos dispositivos, una miniatura incrustada del original, que a veces sobrevive al recorte y muestra lo que recortaste.",
      ],
    },
    {
      heading: "Dónde está realmente el riesgo",
      id: "risk",
      body: [
        "Las grandes redes sociales eliminan los metadatos al subir la imagen, así que una foto publicada en un perfil público suele estar limpia. Eso genera una falsa sensación de seguridad, porque los lugares por donde más se filtra la ubicación son los que nadie tiene en cuenta.",
        "Los mensajes directos y las apps de chat a menudo reenvían el archivo original. Lo mismo ocurre con los adjuntos de correo, los enlaces a almacenamiento en la nube, las subidas a foros y anuncios de compraventa, las imágenes enviadas a un servicio de impresión y todo lo que alojas en tu propio sitio web. Vender muebles por internet con fotos hechas en casa es el caso clásico: el anuncio es anónimo, el archivo no.",
        "La otra vía olvidada es la profesional. Las fotografías que entregas a un cliente, a un periodista, a una aseguradora o en un proceso legal llevan lo que lleven, y quien las recibe puede leerlo, fuera esa la intención o no.",
      ],
    },
    {
      heading: "La orientación se mantiene correcta",
      id: "orientation",
      body: [
        "Hay un campo EXIF que hace un trabajo real: la etiqueta de orientación. Los sensores del teléfono son fijos, así que cuando giras el teléfono la imagen se guarda de lado y una etiqueta indica en qué sentido debe mostrarse.",
        "Muchos eliminadores de metadatos tiran esa instrucción junto con todo lo demás, y una foto que se veía bien en todas partes aparece de repente de lado. No se ha dañado nada: los píxeles siempre estuvieron de lado, y lo que se eliminó fue la nota que lo explicaba.",
        "Esta herramienta lo evita: primero aplica a los píxeles la orientación de la etiqueta y solo después descarta los metadatos. El resultado se guarda en la posición correcta y no necesita ninguna instrucción, así que se ve derecho en todas partes.",
      ],
    },
    {
      heading: "Cómo se eliminan los datos EXIF aquí",
      id: "how",
      body: [
        "La imagen se decodifica en un canvas y se vuelve a codificar a partir de esos píxeles en bruto. El canvas no tiene ningún concepto de metadatos, así que no se traslada nada: el resultado contiene la imagen y nada más. Es exhaustivo por diseño, no por mantener una lista de campos que borrar.",
        "Todo ocurre dentro de tu navegador, algo importante dado el objetivo. Subir una fotografía a un servidor para quitarle los datos de ubicación sería contraproducente; aquí el archivo nunca sale de tu dispositivo y no queda ninguna copia en ningún sitio con las coordenadas que querías eliminar.",
        "Los lotes se procesan igual y se devuelven en un solo ZIP, que es lo habitual cuando preparas un conjunto de fotos para un anuncio o limpias una carpeta antes de compartirla.",
      ],
    },
  ],

  howToTitle: "Cómo eliminar los datos EXIF de una imagen",
  steps: [
    { title: "Subir", description: "Selecciona una o varias imágenes, o arrástralas al área de trabajo." },
    { title: "Elegir la salida", description: "Conserva el formato original o conviértelo, y ajusta la calidad para JPG/WEBP." },
    { title: "Limpiar y descargar", description: "Haz clic en «Eliminar metadatos y descargar»: una imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "shield", title: "Elimina GPS y datos de cámara", description: "Quita los datos EXIF, la ubicación GPS, la cámara, el objetivo y la fecha volviendo a codificar los píxeles por completo." },
    { icon: "burst_mode", title: "Limpieza por lotes", description: "Limpia de una vez un lote entero de imágenes JPG, PNG o WEBP y descárgalas en un ZIP." },
    { icon: "lock", title: "100 % privado", description: "Todo se ejecuta en tu navegador: tus imágenes nunca se suben a un servidor." },
  ],

  faqs: [
    { q: "¿Qué metadatos se eliminan?", a: "Todos los datos EXIF/IPTC/XMP incrustados, incluidos la ubicación GPS, el modelo de cámara y objetivo y la fecha de captura: el resultado conserva solo los píxeles." },
    { q: "¿Se reduce la calidad de la imagen?", a: "La imagen se vuelve a codificar, así que pon la calidad al 100 % para obtener un resultado prácticamente idéntico. El valor predeterminado del 95 % es un equilibrio seguro." },
    { q: "¿Puedo limpiar muchas imágenes a la vez?", a: "Sí. Agrega todas las que quieras: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿Qué se guarda exactamente en los datos EXIF?", a: "Mucho más de lo que la mayoría imagina: coordenadas GPS con unos pocos metros de precisión, la fecha y la hora exactas, el modelo y el número de serie de la cámara o el teléfono, el objetivo y los ajustes de exposición y, en algunos dispositivos, el nombre del propietario, el campo de derechos de autor y una miniatura de la imagen original." },
    { q: "¿Las redes sociales eliminan el EXIF automáticamente?", a: "Las grandes suelen hacerlo al subir la imagen, pero no conviene confiarse. Los mensajes directos, los enlaces en la nube, los adjuntos de correo, los foros, los anuncios de compraventa y los sitios web personales a menudo dejan pasar el archivo intacto, y justo ahí es donde la gente comparte fotos de cosas que tiene en su domicilio." },
    { q: "¿Eliminar el EXIF cambia el aspecto de la foto?", a: "No su orientación. La etiqueta de orientación se aplica primero a los píxeles y los metadatos se descartan después, así que una foto que se veía derecha sigue derecha. El único otro cambio es la recodificación, que controla el ajuste de calidad." },
    { q: "¿Esto elimina una marca de agua oculta o un código de rastreo?", a: "No. Borra los campos de metadatos estándar. Las marcas esteganográficas incrustadas en los propios píxeles son algo completamente distinto y sobreviven a la eliminación de metadatos; de hecho, sobrevivirían a la mayoría de las ediciones." },
    { q: "¿Puedo recuperar los metadatos después?", a: "No desde el archivo limpio. Conserva el original si te importan la fecha de captura o la ubicación: para organizar una biblioteca de fotos, para documentación de seguros o simplemente para recordar dónde se tomó una imagen." },
    { q: "¿Cómo compruebo primero qué contiene mi foto?", a: "Usa la herramienta «Ver metadatos de imagen». Lee todas las etiquetas que lleva tu archivo, incluidas las coordenadas GPS situadas en un mapa, por completo en tu navegador. Mirar antes de eliminar suele merecer el paso extra." },
    { q: "¿Sirve para proteger mis datos personales?", a: "Sí. Te ayuda a no compartir sin querer datos personales como la ubicación, el dispositivo y la hora de la toma, por ejemplo en fotos para anuncios de compraventa, solicitudes de empleo o clientes. Como el procesamiento es local en tu navegador, las imágenes nunca llegan a nosotros." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La eliminación de metadatos se hace por completo en tu navegador: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // RemoveExifTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "Couldn't process the images.": "No se pudieron procesar las imágenes.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "Clear files": "Borrar archivos",
    "Remove": "Quitar",
    "Metadata settings": "Ajustes de metadatos",
    "Output Settings": "Ajustes de salida",
    "Format": "Formato",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    "Strips EXIF, GPS location and camera data by re-encoding the pixels — all in your browser.":
      "Elimina los datos EXIF, la ubicación GPS y los datos de cámara volviendo a codificar los píxeles, todo en tu navegador.",
    "Clean": "Limpiar",
    "Cleaning…": "Limpiando…",
    "Remove metadata from {n}": "Eliminar metadatos de {n}",
    "Remove metadata & download": "Eliminar metadatos y descargar",
    "Removed metadata from 1 image.": "Se eliminaron los metadatos de 1 imagen.",
    "Removed metadata from {n} images.": "Se eliminaron los metadatos de {n} imágenes.",
    "metadata removed": "metadatos eliminados",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
  },
};

export default content;
