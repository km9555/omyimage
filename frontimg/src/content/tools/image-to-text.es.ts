import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/imagen-a-texto. Structure lives
 * in ToolPageShell.
 *
 * Target query "imagen a texto" (6.6K ES / 14.8K MX per month); "convertir
 * imagen a texto", "extraer texto de imagen" and "OCR online" are the
 * secondaries and live in the metaTitle, intro, a section heading and FAQs.
 * Addressed in "tú".
 *
 * ACCURACY NOTE — this page describes what the tool actually does TODAY:
 * it reads on the server first (PaddleOCR) and falls back to Tesseract in the
 * browser. The English module (image-to-text.en.ts) describes the same
 * behaviour (LICENSE-AUDIT.md F4). Every privacy claim must stay consistent.
 *
 * On /es the recognition language defaults to Spanish (OCR_DEFAULT es → spa in
 * ImageToTextTool.tsx). The OCR language names and status strings are module
 * scope → ui, by hand.
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "es",
  name: "Imagen a texto",
  tagline:
    "Extrae el texto de fotos, capturas de pantalla y escaneos con OCR online, y cópialo, edítalo o guárdalo como .txt. Gratis, con reconocimiento en español y sin registro.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "Imagen a texto – extraer texto de imagen con OCR | oMyImage",
  metaDescription:
    "Convierte imagen a texto con OCR online gratis: extrae texto de fotos, capturas y escaneos, con acentos y ñ, y cópialo o guárdalo. Sin registro.",

  intro:
    "Saca las palabras de una captura de pantalla, una página escaneada o la foto de un documento y recibe texto editable: convertir imagen a texto en unos segundos. El reconocimiento (OCR) se ejecuta en nuestro servidor con un modelo de alta precisión: la imagen viaja por una conexión cifrada y se elimina en cuanto se lee. Si no se puede acceder al servidor, la página lee la imagen en tu propio dispositivo, así que la herramienta funciona de cualquier forma, y te avisa cuando eso ocurre. En esta página el español ya viene seleccionado como idioma, para que los acentos, la ñ y los signos ¿ y ¡ se reconozcan bien.",

  sections: [
    {
      heading: "Qué puede y qué no puede hacer el OCR",
      id: "accuracy",
      body: [
        "El reconocimiento óptico de caracteres funciona localizando formas en una página y comparándolas con un modelo entrenado de cómo se ven las letras. Con material limpio, de alto contraste y derecho —una captura de pantalla, una página de PDF exportada como imagen, el escaneo de un documento impreso— es muy preciso, y normalmente corregirás signos de puntuación más que palabras.",
        "Empeora justo con lo que hace interesante a una fotografía. Las tomas en ángulo, la luz desigual, las sombras sobre la página, la baja resolución, los fondos recargados detrás del texto y la compresión JPG fuerte reducen la precisión, a veces mucho. La escritura a mano es otro problema completamente distinto, porque el reconocedor está entrenado con letra impresa; espera malos resultados con cualquier letra cursiva.",
        "La conclusión práctica es que la imagen de entrada importa mucho más que cualquier ajuste. Si puedes repetir la foto de frente, con la página bien iluminada y ocupando todo el encuadre, ese único cambio hará más por el resultado que cualquier otra cosa disponible aquí.",
      ],
    },
    {
      heading: "Cómo extraer texto de una imagen con los mejores resultados",
      id: "tips",
      body: [
        "Fotografía o escanea de frente y no en ángulo, para que las líneas de texto crucen la imagen en horizontal. La inclinación es la causa más común de un resultado ilegible.",
        "Procura que el texto mida al menos 20 píxeles de alto. Si la letra se ve pequeña en el encuadre, recorta bien ajustado al bloque de texto antes de extraer: un recorte cerrado de la misma foto suele reconocerse mucho mejor que la imagen completa.",
        "Elige el idioma correcto antes de extraer. Un modelo en inglés leyendo español producirá en silencio errores con apariencia creíble en cada vocal acentuada y en cada ñ, y lo mismo ocurre a la inversa.",
        "Para un documento fotografiado bajo una lámpara de escritorio, pasarlo primero a escala de grises y subir el contraste puede ayudar al reconocedor a separar la tinta del papel.",
      ],
    },
    {
      heading: "Dónde se lee la imagen y por qué a veces tarda más",
      id: "model",
      body: [
        "La lectura principal se hace en nuestro servidor, que usa un modelo de reconocimiento más grande y preciso del que cabría cómodamente en una pestaña del navegador. Tu imagen viaja por una conexión HTTPS cifrada, se lee y el archivo se elimina justo después. No se guarda, no se indexa ni se usa para entrenar modelos. La primera solicitud en un idioma que el servidor no ha usado recientemente puede tardar un poco más mientras se carga el modelo de ese idioma; después, los resultados llegan rápido.",
        "Si no se puede acceder al servidor o no está disponible, la página recurre al motor Tesseract, que se ejecuta como WebAssembly dentro de tu navegador, y en ese caso la imagen nunca sale de tu dispositivo. El motor y el modelo de idioma pesan varios megabytes y se descargan la primera vez que hace falta esta alternativa; tu navegador guarda ambos en caché, así que las siguientes veces arranca casi de inmediato. Cuando esto ocurre, el resultado se marca como «leído en tu dispositivo», y suele ser algo menos preciso con texto pequeño o denso.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen a texto",
  steps: [
    {
      title: "Agrega tu imagen",
      description: "Suelta una foto, una captura de pantalla o un escaneo: JPG, PNG, WEBP y BMP funcionan.",
    },
    {
      title: "Elige el idioma",
      description: "El español ya viene seleccionado. Cámbialo si el texto está en otro idioma: influye en la precisión más que cualquier otro ajuste.",
    },
    {
      title: "Extrae y copia",
      description: "Haz clic en «Extraer texto». Corrige lo que el reconocedor haya leído mal y luego cópialo o guárdalo como archivo .txt.",
    },
  ],

  features: [
    {
      icon: "lock",
      title: "Se elimina justo después de leerla",
      description:
        "Tu imagen viaja por una conexión cifrada, se lee en nuestro servidor y se elimina de inmediato. No se guarda nada ni se usa para entrenar modelos.",
    },
    {
      icon: "translate",
      title: "13 idiomas",
      description:
        "Español, inglés, francés, alemán, italiano, portugués, neerlandés, ruso, árabe, hindi, chino, japonés y coreano.",
    },
    {
      icon: "edit_note",
      title: "Editable antes de guardar",
      description:
        "El resultado aparece en un cuadro de texto que puedes corregir. Ningún OCR es perfecto, así que arreglar algún carácter suelto es parte del trabajo.",
    },
  ],

  faqs: [
    {
      q: "¿Se sube mi imagen a un servidor?",
      a: "Sí, para la lectura principal. La imagen se envía por una conexión HTTPS cifrada a nuestro servidor, donde se reconoce el texto, y el archivo se elimina en cuanto se ha leído: no se guarda, no se comparte ni se usa para entrenar. Si el servidor no está disponible, el reconocimiento se hace en tu propio navegador y la imagen no sale de tu dispositivo; en ese caso, la herramienta marca el resultado como «leído en tu dispositivo».",
    },
    {
      q: "¿Qué tan preciso es convertir imagen a texto?",
      a: "Con material impreso limpio —capturas de pantalla, escaneos, páginas de documentos exportadas— la precisión suele ser muy alta. Baja con fotos en ángulo, mala iluminación, baja resolución y letra pequeña. El resultado es editable precisamente porque ningún OCR es perfecto.",
    },
    {
      q: "¿Puede leer escritura a mano?",
      a: "No de forma fiable. El reconocedor está entrenado con letra impresa, y la letra cursiva en particular da malos resultados. Las mayúsculas de imprenta bien hechas a veces funcionan; la letra ligada, por lo general, no.",
    },
    {
      q: "¿Qué idiomas se admiten?",
      a: "Trece: español, inglés, francés, alemán, italiano, portugués, neerlandés, ruso, árabe, hindi, chino simplificado, japonés y coreano. Elige el que coincida con tu texto antes de extraer: usar el modelo equivocado reduce mucho la precisión.",
    },
    {
      q: "¿Reconoce los acentos, la ñ y los signos ¿ y ¡?",
      a: "Sí, cuando el idioma elegido es español, que en esta página viene seleccionado por defecto. Con un modelo en inglés, las vocales acentuadas y la ñ a menudo se leerían como caracteres parecidos. Aun así, revisa el resultado si la letra es pequeña.",
    },
    {
      q: "¿Por qué a veces la extracción tarda?",
      a: "En el servidor, la primera solicitud en un idioma que no se ha usado recientemente espera a que se cargue su modelo; las siguientes son mucho más rápidas. Si la herramienta recurre a tu dispositivo, el motor y el modelo de idioma se descargan la primera vez en lugar de venir incluidos en la página, así que quien nunca usa esta herramienta no paga ese costo. Tu navegador los guarda en caché y las siguientes veces arranca de inmediato.",
    },
    {
      q: "¿Conserva el diseño original?",
      a: "Solo a grandes rasgos. Obtienes el texto con sus saltos de línea, no una reconstrucción de columnas, tablas o formato. En una tabla, normalmente tendrás que ordenar el resultado a mano.",
    },
    {
      q: "¿Puedo extraer texto de un PDF?",
      a: "No directamente: esta herramienta trabaja con imágenes. Exporta la página del PDF como PNG o JPG, o toma una captura de pantalla, y luego pásala por aquí.",
    },
    {
      q: "¿El OCR online es gratis?",
      a: "Sí, sin cuenta, sin marca de agua y sin límite de cuántas imágenes procesas.",
    },
  ],

  security:
    "La lectura principal se hace en nuestro servidor: tu imagen se sube por una conexión HTTPS cifrada, se reconoce el texto y el archivo se elimina justo después de leerlo. No se guarda, no se indexa ni se usa para entrenar modelos. Si no se puede acceder al servidor, el reconocimiento se ejecuta como WebAssembly dentro de la página y la imagen no se sube en absoluto; en ese caso, la única solicitud de red es la del modelo de reconocimiento genérico, que no lleva ninguna información sobre tu imagen.",

  ui: {
    // ImageToTextTool.tsx
    "Please select a JPG, PNG, WEBP or BMP image.": "Selecciona una imagen JPG, PNG, WEBP o BMP.",
    "or drop a JPG, PNG, WEBP or BMP here": "o suelta aquí un JPG, PNG, WEBP o BMP",
    "Read on our server for the best accuracy (falls back to your device if the server is unreachable) — files are deleted right after.":
      "Se lee en nuestro servidor para lograr la mejor precisión (o en tu dispositivo si no se puede acceder al servidor); los archivos se eliminan justo después.",
    "OCR settings": "Configuración de OCR",
    "OCR Settings": "Configuración de OCR",
    "Read": "Leer",
    "Reading…": "Leyendo…",
    "Read again": "Volver a leer",
    "Extract text": "Extraer texto",
    "Remove image": "Quitar imagen",
    "Extracted text": "Texto extraído",
    "1 word": "1 palabra",
    "{n} words": "{n} palabras",
    "{pct}% confidence": "{pct} % de confianza",
    "The recognizer's own estimate of how confident it is in this reading — not a guarantee. Low scores usually mean small or blurry source text; worth a proofread.":
      "La propia estimación del reconocedor sobre qué tan seguro está de esta lectura; no es una garantía. Una puntuación baja suele indicar texto pequeño o borroso: vale la pena revisarlo.",
    "editable before you copy or download": "editable antes de copiar o descargar",
    "read on your device": "leído en tu dispositivo",
    "Our server-side reader was unreachable or unavailable, so this ran on your device instead — usually a bit less accurate on small or dense text.":
      "No se pudo acceder a nuestro lector en el servidor o no estaba disponible, así que se ejecutó en tu dispositivo; suele ser algo menos preciso con texto pequeño o denso.",
    "Choose a language, then press Extract text.": "Elige un idioma y luego haz clic en «Extraer texto».",
    "Language of the text": "Idioma del texto",
    "Picking the right language matters more than anything else for accuracy.":
      "Elegir el idioma correcto es lo que más influye en la precisión.",
    "Copy text": "Copiar texto",
    "Download .txt": "Descargar .txt",
    "Read on our server for the best accuracy, over an encrypted connection — the image is deleted right after. If our server can't be reached, this reads the image on your own device instead, so the tool still works either way.":
      "Se lee en nuestro servidor para lograr la mejor precisión, por una conexión cifrada; la imagen se elimina justo después. Si no se puede acceder a nuestro servidor, la imagen se lee en tu propio dispositivo, así que la herramienta funciona de cualquier forma.",
    "Text copied to clipboard": "Texto copiado al portapapeles",
    "Couldn't access the clipboard.": "No se pudo acceder al portapapeles.",
    "No text found in this image": "No se encontró texto en esta imagen",
    "Try a sharper or higher-contrast scan.": "Prueba con un escaneo más nítido o con más contraste.",
    "Extracted 1 word": "Se extrajo 1 palabra",
    "Extracted {n} words": "Se extrajeron {n} palabras",
    "Could not read this image.": "No se pudo leer esta imagen.",
    // Progress / status (module scope humanStatus + inline setStatus calls)
    "Loading the recognition engine…": "Cargando el motor de reconocimiento…",
    "Uploading your image…": "Subiendo tu imagen…",
    "Queued on the server…": "En cola en el servidor…",
    "Reading the text on our server…": "Leyendo el texto en nuestro servidor…",
    "Server OCR unavailable — reading on your device instead…":
      "OCR del servidor no disponible: leyendo en tu dispositivo…",
    "Downloading the recognition model (first run only)…":
      "Descargando el modelo de reconocimiento (solo la primera vez)…",
    "Starting the engine…": "Iniciando el motor…",
    "Reading the text…": "Leyendo el texto…",
    // LANGUAGES (module scope, §4.2)
    "English": "Inglés",
    "Spanish": "Español",
    "French": "Francés",
    "German": "Alemán",
    "Italian": "Italiano",
    "Portuguese": "Portugués",
    "Dutch": "Neerlandés",
    "Russian": "Ruso",
    "Arabic": "Árabe",
    "Hindi": "Hindi", // i18n-same
    "Chinese (Simplified)": "Chino (simplificado)",
    "Japanese": "Japonés",
    "Korean": "Coreano",
    // Backend sentences this tool can surface (routes/image/ocr)
    "Upload an image to run OCR on.": "Sube una imagen para aplicar el OCR.",
    "Server OCR is unavailable (PaddleOCR is not installed on the server).":
      "El OCR del servidor no está disponible por ahora.",
  },
};

export default content;
