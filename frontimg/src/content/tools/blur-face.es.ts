import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/pixelar-cara. Target query «Pixelar cara» (1K ES, Nov
 * 2026), secondaries «difuminar cara», «difuminar rostro» and «censurar cara».
 * Neutral Spanish, tú. The legal section names the RGPD (Spain/EU) and the
 * data-protection laws of Latin America in general terms — no invented
 * article numbers or authority rules.
 */
const content: ToolPageContent = {
  toolId: "blur-face",
  locale: "es",
  name: "Pixelar cara y censurar",
  seoName: "Pixelar cara",
  tagline:
    "Pixela o difumina caras, matrículas y datos privados en tus fotos online: marca las zonas, elige la intensidad y exporta. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Pixelar cara – difuminar rostros gratis | oMyImage",
  metaDescription:
    "Pixelar cara online y gratis: la IA detecta los rostros y tú difuminas caras, matrículas o nombres. Protege datos personales sin subir la foto.",

  intro:
    "¿Necesitas ocultar una cara, una credencial con nombre o una matrícula antes de compartir una foto? La herramienta «Pixelar cara» de oMyImage encuentra los rostros automáticamente y te deja dibujar tus propias zonas sobre cualquier otro dato privado. Difumínalas, pixélalas o tápalas con un bloque de color, ajusta cada zona arrastrándola y procesa un lote completo de una vez. La censura queda grabada de forma permanente en la imagen exportada, y todo, incluida la detección de caras, funciona en tu navegador. Tu foto nunca se sube, que es justo como deben tratarse estas imágenes si te preocupan la privacidad, el RGPD o la protección de datos personales.",

  sections: [
    {
      heading: "Por qué difuminar es mejor que una franja negra",
      id: "method",
      body: [
        "Un rectángulo negro dibujado sobre una cara en un archivo de edición con capas no es una censura: es una pegatina, y cualquiera que abra el archivo original puede moverla. Incluso aplanado, un bloque sólido anuncia que algo se ocultó e invita a preguntarse qué.",
        "Difuminar funciona de otra manera. Destruye la información en su sitio: los píxeles se sustituyen por un promedio de sus vecinos, y el detalle que hacía reconocible la cara ya no existe en ninguna parte del archivo. Al exportarlo no hay nada que recuperar, porque no se conservó nada.",
        "Esa es la propiedad que de verdad buscas al censurar. No ocultar, que se puede deshacer, sino destruir, que no.",
      ],
    },
    {
      heading: "¿Difuminar o pixelar la cara?",
      id: "blur-vs-pixelate",
      body: [
        "Pixelar sustituye zonas por bloques grandes de un único color promediado. Se ve contundente, y por eso es la convención en la televisión y el periodismo, donde el público debe entender que se ha ocultado algo.",
        "Para una anonimización real es la opción más débil. Los promedios de los bloques conservan estructura (la posición aproximada de los ojos, la forma de la mandíbula, el contraste entre pelo y piel), y hay investigaciones que han recuperado identidades a partir de caras pixeladas cuando el tamaño del bloque no era lo bastante agresivo. Un difuminado gaussiano fuerte deja bastante menos señal.",
        "Usa el pixelado cuando quieras que la censura se note a simple vista, y el difuminado cuando quieras que la persona sea de verdad irreconocible. Si necesitas ambas cosas, pixela con fuerza y no con suavidad.",
      ],
    },
    {
      heading: "Cubrir bien la zona",
      id: "coverage",
      body: [
        "El error más común es difuminar una zona demasiado ajustada. Una zona que cubre solo los ojos deja intactos la mandíbula, el nacimiento del pelo, las orejas y el tono de piel, y las personas se reconocen por todo eso. Cubre toda la cabeza y extiéndete un poco más allá del pelo.",
        "El segundo error es difuminar demasiado poco. Juzga el resultado con el zoom al máximo, no en miniatura, porque un difuminado que parece suficiente en una vista previa pequeña a menudo no lo es. Si tú todavía sabes quién es, también lo sabrá cualquiera que conozca a esa persona.",
        "Piensa también en el resto del encuadre. Las credenciales con nombre, los números de las casas, las matrículas, los reflejos en las ventanas y el texto de una pantalla detrás de la persona también identifican a la gente, y una foto con la cara perfectamente difuminada y un letrero de calle bien visible no ha conseguido gran cosa.",
      ],
    },
    {
      heading: "Cuándo importa legalmente: RGPD y datos personales",
      id: "legal",
      body: [
        "Según el RGPD en España y la Unión Europea, y según leyes de protección de datos similares en México y el resto de América Latina, una cara reconocible es un dato personal, y publicarla suele requerir una base legal, normalmente el consentimiento. Esa obligación pesa mucho más sobre las organizaciones que sobre los particulares que publican fotos de vacaciones, pero existe.",
        "Las situaciones en las que más pesa son previsibles: fotos con menores, imágenes de escuelas, clínicas y centros de cuidado, fotos de multitudes con uso comercial, fotos en el trabajo y cualquier imagen de personas que no sabían que las estaban fotografiando. Pixelar las caras es la forma más sencilla de eliminar la duda por completo.",
        "Como aquí todo funciona en tu navegador, el original sin censurar nunca sale de tu dispositivo, que es el trato correcto para justo este tipo de imágenes.",
      ],
    },
  ],

  howToTitle: "Cómo pixelar una cara en una foto",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Detecta o dibuja", description: "Usa la detección automática para encontrar las caras y luego mueve, redimensiona o borra cualquier zona; dibuja también las tuyas sobre matrículas, nombres o documentos." },
    { title: "Exporta", description: "Haz clic en «Exportar» para descargar las imágenes con las zonas censuradas ya grabadas, en un ZIP si son varias." },
  ],

  features: [
    { icon: "face_retouching_natural", title: "Detección automática de caras", description: "Encuentra todas las caras de la foto con la sensibilidad que elijas, y el modelo funciona en tu dispositivo: la imagen nunca se sube." },
    { icon: "blur_on", title: "Difuminar, pixelar o tapar", description: "Elige un difuminado suave, un pixelado grueso o un bloque sólido, y ajusta la intensidad para ocultar por completo los datos sensibles." },
    { icon: "select_all", title: "Zonas editables", description: "Cada zona se puede mover, redimensionar desde cualquier esquina o borde y borrar por separado: elipses para caras o rectángulos para matrículas y documentos." },
    { icon: "lock", title: "Privado de verdad", description: "Todo se procesa en tu navegador: el original nunca sale de tu dispositivo y la censura es permanente en el archivo exportado." },
  ],

  faqs: [
    { q: "¿Puedo pixelar más de una cara?", a: "Sí. La detección automática marca todas las caras que encuentra, y puedes dibujar a mano tantas zonas como quieras, deshacerlas o borrarlas." },
    { q: "¿Qué diferencia hay entre difuminar y pixelar?", a: "Difuminar suaviza la zona de forma uniforme; pixelar la sustituye por bloques grandes. Con una intensidad suficiente, ambos ocultan el detalle por completo." },
    { q: "¿El difuminado es permanente?", a: "Sí. Las zonas censuradas se graban directamente en la imagen exportada, así que quien la reciba no puede deshacerlas." },
    { q: "¿La detección automática sube mi foto?", a: "No. El modelo de detección de caras se descarga en tu navegador la primera vez que lo usas y después funciona en tu propio dispositivo, igual que el difuminado. No se envía nada de la imagen a ningún sitio, y de eso se trata: las fotos que la gente censura son justo las que no deberían pasar por el servidor de otro." },
    { q: "No detectó una cara, ¿qué hago?", a: "Sube la sensibilidad y vuelve a detectar, o simplemente dibuja la zona a mano. La detección está ajustada para caras razonablemente cerca de la cámara, así que las caras pequeñas en una multitud o en una escena de calle lejana son las que suelen escaparse. Todo lo que encuentra es una zona normal que puedes mover, redimensionar o borrar." },
    { q: "¿Es gratis?", a: "Totalmente gratis, sin marca de agua y sin registro." },
    { q: "¿Se puede revertir el difuminado?", a: "No por ningún medio práctico. Difuminar descarta la información en lugar de ocultarla, así que no queda nada que recuperar, a diferencia de una franja negra dibujada en un archivo con capas o de un pixelado tan grueso que una reconstrucción con IA resulte plausible. Una vez exportada, la cara ha desaparecido de los píxeles." },
    { q: "¿Uso difuminado o pixelado?", a: "El difuminado es la opción más segura. Un pixelado con bloques grandes a veces se puede reconstruir en parte, porque los promedios de los bloques todavía conservan estructura. Un difuminado gaussiano fuerte deja mucho menos con lo que trabajar. El pixelado deja más claro que hubo una censura, y a veces es justo lo que quieres." },
    { q: "¿Qué intensidad de difuminado necesito?", a: "La suficiente para que tú mismo no reconozcas a la persona con el zoom al máximo. Un difuminado ligero que solo suaviza los rasgos no es anonimización: la cara sigue siendo identificable para cualquiera que conozca a la persona, y a menudo para un software. Ante la duda, más fuerte." },
    { q: "¿También elimina los datos de ubicación de la foto?", a: "Sí, como efecto secundario: la imagen se vuelve a dibujar desde un canvas, que no conserva los metadatos EXIF, así que se pierden las coordenadas GPS y los datos de la cámara. Si lo que te preocupa son los metadatos y no las caras, «Eliminar metadatos» es la herramienta específica." },
    { q: "¿Tengo que pixelar las caras antes de publicar fotos?", a: "Depende de dónde estés y de lo que muestre la foto. El RGPD y muchas leyes de protección de datos personales tratan una cara reconocible como un dato personal, y publicar imágenes de menores, pacientes, transeúntes o personas en situaciones delicadas conlleva obligaciones reales. Si no tienes el consentimiento, pixelar es la respuesta sencilla." },
    { q: "¿Se sube mi foto?", a: "No. Todo el proceso ocurre en un canvas dentro de tu navegador, y eso importa mucho aquí: las imágenes que la gente difumina suelen ser justo las que no deberían pasar por el servidor de nadie más." },
    { q: "¿Puedo censurar una matrícula o un documento?", a: "Sí. En la pestaña «Texto», la herramienta busca escritura en la imagen (una matrícula, un número de casa, una dirección) y marca cada hallazgo como una zona. Lo que no encuentre, cúbrelo con un rectángulo en la pestaña «Forma» o píntalo con el pincel." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. Tanto la detección de caras como el difuminado ocurren por completo en tu navegador: el modelo de código abierto MediaPipe BlazeFace se descarga en tu dispositivo y se ejecuta ahí, así que no se sube nada a ningún servidor en ningún momento. El resultado censurado es permanente en el archivo exportado. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // BlurTool.tsx — module-scope TABS (translated at the render site)
    "Brush": "Pincel",
    "Shape": "Forma",
    "Text": "Texto",
    "Face": "Cara",
    // face-detect / text-detect SENSITIVITY_LABELS
    "Low": "Baja",
    "Recommended": "Recomendada",
    "High": "Alta",
    "Only very confident matches": "Solo coincidencias muy seguras",
    "Balanced for most photos": "Equilibrada para la mayoría de las fotos",
    "Catches more, may over-detect": "Detecta más, puede marcar de más",
    "Only clearly legible text": "Solo texto claramente legible",
    "Catches faint text, may over-detect": "Detecta texto tenue, puede marcar de más",
    // Tesseract's own status strings, capitalised (text tab)
    "Loading tesseract core": "Cargando el motor de reconocimiento",
    "Initializing tesseract": "Iniciando el motor",
    "Initialized tesseract": "Motor iniciado",
    "Loading language traineddata": "Cargando el modelo de idioma",
    "Loaded language traineddata": "Modelo de idioma cargado",
    "Initializing api": "Preparando el reconocimiento de texto",
    "Initialized api": "Reconocimiento de texto listo",
    "Recognizing text": "Buscando texto",
    // BlurTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "Couldn't read {name}.": "No se pudo leer {name}.",
    "Found 1 face": "Se encontró 1 cara",
    "Found {n} faces": "Se encontraron {n} caras",
    "Found 1 piece of text": "Se encontró 1 texto",
    "Found {n} pieces of text": "Se encontraron {n} textos",
    "in 1 image.": "en 1 imagen.",
    "in {n} images.": "en {n} imágenes.",
    "No faces detected — try a higher sensitivity, or draw the areas by hand.":
      "No se detectaron caras: prueba con una sensibilidad más alta o dibuja las zonas a mano.",
    "No text detected — try a higher sensitivity, or draw the areas by hand.":
      "No se detectó texto: prueba con una sensibilidad más alta o dibuja las zonas a mano.",
    "Face detection couldn't start. You can still draw areas by hand.":
      "No se pudo iniciar la detección de caras. Aun así puedes dibujar las zonas a mano.",
    "Text detection couldn't start. You can still draw areas by hand.":
      "No se pudo iniciar la detección de texto. Aun así puedes dibujar las zonas a mano.",
    "Ellipse": "Elipse",
    "Rectangle": "Rectángulo",
    "Brush {n}": "Pincel {n}",
    "Erase {n}": "Borrado {n}",
    "Add at least one area to censor.": "Añade al menos una zona para censurar.",
    "Pick an effect — \"No blur\" leaves the image unchanged.":
      "Elige un efecto: sin efecto, la imagen queda igual.",
    "Exported 1 image.": "1 imagen exportada.",
    "Exported {n} images.": "{n} imágenes exportadas.",
    "Export failed.": "No se pudo exportar.",
    "Edit {name}": "Editar {name}",
    "1 area": "1 zona",
    "{n} areas": "{n} zonas",
    "1 image": "1 imagen",
    "{n} images": "{n} imágenes",
    "done": "listo",
    "Download": "Descargar",
    "Remove": "Quitar",
    "Quality": "Calidad",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Arrastra para dibujar una zona, haz clic en una para seleccionarla, arrastra sus tiradores para cambiar el tamaño y pulsa Supr para borrarla.",
    "1 area on this image.": "1 zona en esta imagen.",
    "{n} areas on this image.": "{n} zonas en esta imagen.",
    "Clear images": "Quitar imágenes",
    "Files": "Archivos",
    "Blur settings": "Ajustes de difuminado",
    "Export": "Exportar",
    "Exporting…": "Exportando…",
    "Censor Settings": "Ajustes de censura",
    "Censoring is baked into the exported file — all in your browser.":
      "La censura queda grabada en el archivo exportado, todo en tu navegador.",
    "Export {n} images": "Exportar {n} imágenes",
    "Export image": "Exportar imagen",
    "Draw on the image to edit": "Dibuja sobre la imagen para editar",
    "Add blur": "Añadir difuminado",
    "Brush size": "Tamaño del pincel",
    "Brush fade": "Suavidad del pincel",
    "Undo stroke": "Deshacer trazo",
    "Clear all": "Borrar todo",
    "Remove erases from anything on the image, including a detected face — they share one mask.":
      "«Quitar» borra de todo lo que haya en la imagen, incluida una cara detectada: todo comparte una misma máscara.",
    "New area shape": "Forma de las nuevas zonas",
    "Ellipse follows the shape of a head more closely and looks less like a redaction box. Rectangle is better for signs, plates and documents.":
      "La elipse sigue mejor la forma de una cabeza y parece menos una franja de censura. El rectángulo va mejor para letreros, matrículas y documentos.",
    "Delete area": "Borrar zona",
    "Drag on the image to draw an area, then move or resize it by its handles.":
      "Arrastra sobre la imagen para dibujar una zona y luego muévela o redimensiónala con sus tiradores.",
    "Automatic text detection": "Detección automática de texto",
    "Reads the image on your device to find writing - a licence plate, a door number, an address. Your photo is never uploaded, though the recognition engine itself downloads from a CDN the first time you use it.":
      "Lee la imagen en tu dispositivo para encontrar escritura - una matrícula, un número de casa, una dirección. Tu foto nunca se sube; solo el motor de reconocimiento se descarga de un CDN la primera vez que lo usas.",
    "Whole lines": "Líneas completas",
    "Single words": "Palabras sueltas",
    "Reading...": "Leyendo...",
    "This image": "Esta imagen",
    "All {n}": "Las {n}",
    "The first run downloads the engine, so it takes a few seconds. Lines suits an address, words suits one field on a form. Pale text on a dark background is often missed — draw over that with Shape or Brush.":
      "La primera vez se descarga el motor, así que tarda unos segundos. Las líneas sirven para una dirección; las palabras, para un solo campo de un formulario. El texto claro sobre fondo oscuro a menudo se escapa: cúbrelo con «Forma» o «Pincel».",
    "Automatic face detection": "Detección automática de caras",
    "Runs a face-detection model downloaded to your browser. Your photo is never uploaded — detection happens on your device.":
      "Usa un modelo de detección de caras descargado en tu navegador. Tu foto nunca se sube: la detección ocurre en tu dispositivo.",
    "Detecting…": "Detectando…",
    "Detected faces become normal areas — nudge, resize or delete any of them.":
      "Las caras detectadas se convierten en zonas normales: mueve, redimensiona o borra cualquiera de ellas.",
    "Edit blur masks": "Editar máscaras de difuminado",
    "Show": "Mostrar",
    "Hide": "Ocultar",
    "Show {name}": "Mostrar {name}",
    "Hide {name}": "Ocultar {name}",
    "Delete": "Borrar",
    "Delete {name}": "Borrar {name}",
    "Intensity": "Intensidad",
    "Block colour": "Color del bloque",
    "{effect} keeps some of the original detail. For a face you want kept private, use Gaussian at a high intensity or Colour.":
      "{effect} conserva parte del detalle original. Para una cara que quieras mantener privada, usa el difuminado gaussiano con intensidad alta o un bloque de color.",
  },
};

export default content;
