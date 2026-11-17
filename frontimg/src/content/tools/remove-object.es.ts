import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/eliminar-objetos-de-fotos. Target query «Eliminar
 * objetos de fotos» (6.6K MX, KD 0, Nov 2026), secondaries «quitar personas de
 * fotos» and «borrar objetos». Neutral Spanish, tú. Same engine facts as
 * English: MI-GAN (Picsart AI Research) in the browser, 27 MB model, about a
 * second per removal, 16.7 MP cap.
 */
const content: ToolPageContent = {
  toolId: "remove-object",
  locale: "es",
  name: "Eliminar objetos de fotos",
  tagline:
    "Pinta encima de lo que no quieres en una foto (un desconocido al fondo, un contenedor de basura, un cable eléctrico, una mancha) y la IA rellena el espacio para que encaje. Gratis y funciona por completo en tu navegador.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Eliminar objetos de fotos – gratis con IA | oMyImage",
  metaDescription:
    "Eliminar objetos de fotos en segundos: quita personas, cables y elementos molestos pintando encima y la IA rellena el fondo. Gratis y sin subir tu foto.",

  intro:
    "«Eliminar objetos de fotos» borra elementos de una imagen como lo haría un retocador: marcas lo que debe desaparecer y un modelo de IA pinta lo que plausiblemente habría detrás, igualando los colores, la luz y la textura alrededor del hueco. oMyImage ejecuta ese modelo, MI-GAN de Picsart AI Research, dentro de tu navegador, así que tu foto nunca se sube y no hay límite diario. Pinta sobre un turista, dibuja un recuadro alrededor de un letrero, borra objetos uno a uno o varios a la vez, deshaz cualquier paso y descarga la foto limpia en su tamaño original. Así también puedes quitar personas de fotos sin instalar ningún programa de edición.",

  sections: [
    {
      heading: "Cómo marcar lo que debe desaparecer",
      id: "marking",
      body: [
        "El pincel pinta una marca rosa sobre la imagen; haz que cubra todo el objeto, con un poco de margen. Incluye la sombra del objeto y cualquier reflejo, o quedarán como un fantasma. La herramienta Recuadro marca un rectángulo con un solo arrastre, rápida para letreros, vehículos y cualquier cosa cuadrada. El Borrador retira una marca que pintaste de más.",
        "Las marcas no tienen que ser perfectas. La herramienta las amplía unos píxeles antes de rellenar, para cubrir también el borde suave alrededor de un objeto. Lo importante es que ninguna parte del objeto sobresalga de la marca.",
      ],
    },
    {
      heading: "Qué objetos borra bien",
      id: "good-at",
      body: [
        "Lo que mejor resulta son los elementos situados delante de un fondo bastante uniforme: personas y vehículos delante de edificios, basura sobre césped o arena, cables y postes contra el cielo, una mancha en una pared, un grano en la piel, una miga sobre un mantel. El modelo se entrenó con fotografías de lugares, así que cielos, agua, follaje, paredes, suelos y calles son lo que reconstruye de forma más convincente.",
        "Es más difícil cuando la zona oculta contenía algo que el modelo no puede adivinar: media cara, una línea de texto, el dibujo de una alfombra que continúa detrás del objeto. Rellenará el hueco con algo suave y creíble, no con lo que realmente había ahí.",
      ],
    },
    {
      heading: "Objetos grandes: trabaja por pasadas",
      id: "passes",
      body: [
        "El modelo rellena cada zona con un máximo de 512 píxeles de ancho y escala el resultado para que encaje, así que un hueco muy grande queda más suave que el resto de la foto. Para un objeto grande, elimínalo en dos o tres partes, empezando por los bordes: cada pasada le da a la siguiente un entorno real del que copiar. Si marcas varios objetos pequeños a la vez, cada uno se rellena por separado y conserva todo el detalle.",
        "Si un relleno no queda bien, pulsa «Deshacer», cambia la marca (más grande, o dejando fuera una parte del fondo que lo confundió) y vuelve a intentarlo. Cada intento tarda alrededor de un segundo.",
      ],
    },
    {
      heading: "Deshacer, rehacer y comparar",
      id: "history",
      body: [
        "Cada eliminación se puede deshacer y rehacer, con los botones o con Ctrl+Z y Ctrl+Shift+Z. «Empezar de nuevo» recupera la foto original. Mantén pulsado el botón «Mantén pulsado para ver el original» para alternar entre el antes y el después: es la forma más fácil de detectar un relleno que no termina de encajar.",
      ],
    },
    {
      heading: "IA que funciona en tu dispositivo",
      id: "on-device",
      body: [
        "La mayoría de las herramientas para borrar objetos suben tu foto a un servidor. Aquí es el modelo el que viene a ti: la primera vez que abres la herramienta descarga unos 27 MB de datos del modelo desde nuestro propio sitio (una barra de progreso muestra cuánto falta) y tu navegador los guarda, así que las visitas siguientes arrancan al instante. A partir de ahí, eliminar un objeto ocurre en tu PC o en tu teléfono, en alrededor de un segundo en una laptop y en unos segundos en un teléfono, incluso sin conexión.",
        "Como no se envía nada a ningún sitio, es seguro para fotos personales, documentos de identidad y trabajos para clientes.",
      ],
    },
    {
      heading: "Calidad y formatos de archivo",
      id: "quality",
      body: [
        "La foto se edita a su tamaño completo, hasta 16,7 megapíxeles; cualquier imagen mayor, como una toma de 48 MP de un teléfono, se reduce primero a ese tamaño, y la página te lo indica. Solo cambian las zonas marcadas: todos los demás píxeles se guardan exactamente como estaban. Elige el formato original o JPG, PNG o WEBP. PNG conserva la transparencia; JPG rellena las zonas transparentes con blanco.",
      ],
    },
    {
      heading: "Ideas para quitar personas y objetos de fotos",
      id: "ideas",
      body: [
        "Saca a los turistas de una foto de viaje. Quita un cable suelto, un auto estacionado o un contenedor de basura de la foto de un anuncio inmobiliario. Elimina una etiqueta de precio de una foto de producto, la fecha impresa de una copia escaneada o una mota de polvo de un escaneo. Borra a tu ex de una foto de grupo, a un intruso de una foto de boda o un objeto de un fondo antes de usarlo como fondo de pantalla.",
        "Para recortar un sujeto completo y descartar el fondo, usa «Quitar fondo». Para textos y logos superpuestos a una imagen, «Quitar marca de agua» se abre con la herramienta Recuadro lista.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Tu foto se edita por completo en tu navegador, con un modelo que funciona en tu dispositivo. No se sube nada y no se guarda nada cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo eliminar un objeto de una foto",
  steps: [
    { title: "Añade tu foto", description: "Elige una imagen JPG, PNG o WEBP." },
    { title: "Marca el objeto", description: "Pinta encima con el pincel o arrastra un recuadro a su alrededor, con la sombra incluida." },
    { title: "Elimina y descarga", description: "Haz clic en «Eliminar objeto», revisa el resultado y luego en «Descargar imagen»." },
  ],

  features: [
    { icon: "ink_eraser", title: "Pincel, recuadro y borrador", description: "Marca los objetos con precisión y deshaz o rehaz cada eliminación." },
    { icon: "smart_toy", title: "Relleno con IA en un segundo", description: "MI-GAN reconstruye el fondo para que encaje con lo que lo rodea." },
    { icon: "lock", title: "Nunca se sube", description: "La IA funciona en tu navegador, en tu dispositivo." },
  ],

  faqs: [
    { q: "¿Cómo elimino un objeto de una foto?", a: "Añade la foto, pinta sobre el objeto con el pincel y haz clic en «Eliminar objeto». Después descarga el resultado." },
    { q: "¿De verdad es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límite diario, porque la IA funciona en tu propio dispositivo." },
    { q: "¿Se sube mi foto?", a: "No. El modelo de IA se descarga en tu navegador y la foto nunca sale de tu dispositivo." },
    { q: "¿Por qué la primera eliminación tarda más?", a: "La primera vez, tu navegador descarga el modelo de IA de 27 MB. Lo guarda, así que las visitas siguientes arrancan de inmediato." },
    { q: "¿Puedo quitar personas de fotos?", a: "Sí. Pinta sobre la persona y su sombra; funciona mejor cuando está delante de un fondo bastante liso." },
    { q: "¿Puedo borrar varios objetos a la vez?", a: "Sí. Márcalos todos y haz clic una vez en «Eliminar objeto»: cada uno se rellena por separado." },
    { q: "El resultado se ve borroso, ¿qué hago?", a: "Deshaz y elimina el objeto grande en partes más pequeñas, empezando por los bordes. Las zonas pequeñas conservan todo el detalle." },
    { q: "¿Puedo deshacer una eliminación?", a: "Sí: «Deshacer», «Rehacer» y «Empezar de nuevo», o Ctrl+Z y Ctrl+Shift+Z." },
    { q: "¿Reduce la calidad de la foto?", a: "No. Solo cambian las zonas marcadas, y la foto mantiene su tamaño hasta 16,7 megapíxeles." },
    { q: "¿Funciona sin conexión?", a: "Una vez cargado el modelo, sí: eliminar objetos no necesita conexión." },
    { q: "¿Funciona en el teléfono?", a: "Sí. Pinta con el dedo; cada eliminación tarda unos segundos en un teléfono." },
    { q: "¿Qué formatos admite?", a: "Acepta JPG, PNG y WEBP, y guarda en el mismo formato o en cualquiera de los tres." },
    { q: "¿Puede quitar todo el fondo?", a: "Para eso usa «Quitar fondo»: recorta el sujeto y deja el fondo transparente." },
    { q: "¿Puedo quitar a alguien de una foto y publicarla?", a: "Técnicamente, sí. Lo que cuenta es quién sigue apareciendo en la imagen: para publicar a personas reconocibles suele hacer falta su consentimiento, porque su imagen es un dato personal. Quitar a una persona reduce ese problema más de lo que lo crea, pero usa la herramienta solo con fotos que puedas editar." },
  ],

  security:
    "Tu foto se edita por completo en tu navegador, con un modelo que funciona en tu dispositivo. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // InpaintTool.tsx — shared with remove-watermark, whose module reuses this block.
    "or drop a JPG, PNG or WEBP image here": "o suelta aquí una imagen JPG, PNG o WEBP",
    "Please select image files.": "Selecciona archivos de imagen.",
    "Clear files": "Quitar archivos",
    "Settings": "Ajustes",
    "Marking tool": "Herramienta de marcado",
    "Brush": "Pincel",
    "Box": "Recuadro",
    "Eraser": "Borrador",
    "Drag a box over the area to remove.": "Arrastra un recuadro sobre la zona que quieres eliminar.",
    "Paint over a mark to take it back.": "Pinta sobre una marca para retirarla.",
    "Paint over every letter of the watermark, including its outline or shadow.": "Pinta sobre cada letra de la marca de agua, incluido su contorno o sombra.",
    "Paint over the whole object, including its shadow and reflection.": "Pinta sobre todo el objeto, incluidos su sombra y su reflejo.",
    "Brush size": "Tamaño del pincel",
    "Clear marks": "Borrar marcas",
    "Undo": "Deshacer",
    "Redo": "Rehacer",
    "Start over": "Empezar de nuevo",
    "AI model ready — it runs on your device.": "Modelo de IA listo: funciona en tu dispositivo.",
    "The AI model could not be loaded.": "No se pudo cargar el modelo de IA.",
    "Try again": "Reintentar",
    "Loading the AI model…": "Cargando el modelo de IA…",
    "Only on the first visit — after that your browser keeps it.": "Solo en la primera visita; después tu navegador lo guarda.",
    "Output format": "Formato de salida",
    "Quality": "Calidad",
    "Same as original": "Igual que el original",
    "Your image never leaves your device: the AI runs in your browser.": "Tu imagen nunca sale de tu dispositivo: la IA funciona en tu navegador.",
    "Remove watermark": "Quitar marca de agua",
    "Remove object": "Eliminar objeto",
    "Removing…": "Eliminando…",
    "Download image": "Descargar imagen",
    "Processing failed.": "Error al procesar.",
    "Mark the watermark first — draw a box around it or paint over it.": "Primero marca la marca de agua: dibuja un recuadro a su alrededor o pinta encima.",
    "Paint over what you want to remove first.": "Primero pinta sobre lo que quieres eliminar.",
    "Picture — mark the watermark here": "Imagen: marca aquí la marca de agua",
    "Picture — mark what to remove here": "Imagen: marca aquí lo que quieres eliminar",
    "Mark the watermark, then click Remove watermark.": "Marca la marca de agua y haz clic en «Quitar marca de agua».",
    "Mark what you want gone, then click Remove object.": "Marca lo que quieres quitar y haz clic en «Eliminar objeto».",
    "Hold to see the original": "Mantén pulsado para ver el original",
    "This photo is very large, so it is edited and saved at {w} × {h} px.": "Esta foto es muy grande, así que se edita y se guarda a {w} × {h} px.",
  },
};

export default content;
