import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/marca-de-agua. Target query «Marca de agua»
 * (6.6K ES / 12.1K MX, Nov 2026), secondaries «poner marca de agua»,
 * «agregar marca de agua», «añadir marca de agua». Neutral Spanish, tú.
 *
 * The default watermark text is the brand "© oMyImage" in every language
 * (WatermarkTool.tsx) — not copy. The nine named positions, FONTS and FORMATS
 * are module scope, maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "watermark-image",
  locale: "es",
  name: "Marca de agua",
  seoName: "Marca de agua",
  tagline:
    "Pon una marca de agua de texto o logo en tus imágenes online, con control de posición, opacidad y rotación, vista previa en vivo y procesamiento por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Marca de agua – poner marca de agua gratis | oMyImage",
  metaDescription:
    "Pon una marca de agua en tus imágenes gratis: texto o logo con posición, opacidad y rotación, vista previa y lotes. Agregar marca de agua sin subir nada.",

  intro:
    "Protege tus fotos y firma tus imágenes con una marca de agua personalizada. La herramienta «Marca de agua» de oMyImage te permite agregar un texto, con la fuente, el color y el contorno que elijas, o superponer tu propio logo, y colocarlo exactamente donde quieras con vista previa en vivo, opacidad y rotación. Puedes añadir la marca de agua a una sola imagen o a un lote completo de una vez. Todo se procesa en tu navegador, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Lo que una marca de agua consigue en realidad",
      id: "purpose",
      body: [
        "Una marca de agua cumple tres funciones, y conviene tener claro cuál necesitas. Disuade de la reutilización casual, porque la mayoría de quienes guardarían sin pensarlo una imagen sin marcar no se molestan con una marcada. Atribuye la autoría, de modo que cuando una imagen circula, tu nombre viaja con ella. Y marca las pruebas: puedes enseñarle la foto a un cliente mientras la versión sin licencia resulta poco atractiva de usar.",
        "Lo que no hace es impedir el robo. Cualquiera con un programa de edición y algo de paciencia puede quitar una marca de agua, y el relleno inteligente con IA ha bajado mucho esa barrera. Tratar la marca de agua como protección anticopia lleva a marcas tan pesadas que arruinan la fotografía y, aun así, no detienen a quien de verdad quiere usarla.",
        "El objetivo realista es poner trabas y dejar clara la autoría. Planteado así, las decisiones de diseño resultan mucho más fáciles.",
      ],
    },
    {
      heading: "Dónde poner la marca de agua y el problema del recorte",
      id: "placement",
      body: [
        "Una marca en una esquina es discreta y se ve profesional; por eso es la opción habitual para el trabajo terminado. Su punto débil es evidente: una esquina se recorta sin esfuerzo y la imagen sobrevive a la operación sin que se note nada.",
        "Repetir la marca en mosaico por todo el encuadre, o cruzarla en diagonal por el centro, resuelve eso a cambio de un precio. Quitarla exige retocar sobre el motivo en lugar de recortar alrededor, y eso es trabajo de verdad. Pero la foto se vuelve más difícil de mirar, así que esta opción es para pruebas, vistas previas y piezas de portafolio, no para el trabajo que entregas.",
        "Un término medio que usan muchos fotógrafos: colocar una sola marca de forma que se superponga al motivo en lugar de quedar sobre un fondo vacío. Molesta mucho menos que un mosaico y es bastante más difícil de eliminar limpiamente que una marca en la esquina.",
      ],
    },
    {
      heading: "Opacidad, tamaño y contraste",
      id: "design",
      body: [
        "Una opacidad de alrededor del 30–50 % es el rango en el que una marca de agua se lee sin dominar la imagen. La trampa está en probarla en una imagen y aplicarla a cien: una marca blanca al 35 % se ve claramente en una foto oscura y es prácticamente invisible sobre un cielo luminoso. Si tu lote es variado, revisa la imagen más clara y la más oscura antes de aplicarla.",
        "El tamaño importa menos de lo que se suele pensar. Una marca que ocupa aproximadamente entre el 10 y el 20 % del ancho del encuadre se lee en un teléfono sin resultar estridente. Las marcas muy pequeñas son fáciles de recortar y de pasar por alto; las muy grandes dejan de ser una marca de agua y se convierten en un cartel.",
        "Para los logos, usa un PNG transparente. Un logo guardado como JPG arrastra consigo un rectángulo blanco, que parece un error en cualquier imagen cuyo fondo detrás de la marca no sea blanco.",
      ],
    },
    {
      heading: "Conserva un original sin marca",
      id: "workflow",
      body: [
        "Poner una marca de agua es destructivo: la marca pasa a formar parte de los píxeles y no se puede separar después. Trabaja siempre sobre una copia y guarda el original limpio, porque en el momento en que necesites licenciar la imagen como corresponde, imprimirla o entregarla a un cliente, la versión con marca de agua no te sirve.",
        "El orden lógico es editar, luego redimensionar para el destino y, por último, añadir la marca de agua. Si la pones antes de redimensionar, la marca se escala junto con todo lo demás y a menudo queda ilegible en la imagen más pequeña.",
        "Aquí todo se procesa en tu navegador, así que el original sin marca nunca sale de tu dispositivo. Y eso importa, porque normalmente pones una marca de agua precisamente porque no quieres que la imagen circule libremente.",
      ],
    },
  ],

  howToTitle: "Cómo poner una marca de agua en una imagen",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Diseña la marca de agua", description: "Escribe un texto o sube un logo y ajusta la posición, el tamaño, la opacidad y la rotación con vista previa en vivo." },
    { title: "Aplica y descarga", description: "Haz clic en «Marca de agua y descargar»: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "title", title: "Texto o logo", description: "Estampa un texto propio, con fuente, color y contorno, o superpone tu propio logo en PNG transparente." },
    { icon: "grid_view", title: "Control total de la posición", description: "Elige cualquiera de las nueve posiciones, ajusta el tamaño, la opacidad y la rotación y mira cómo cambia en vivo antes de exportar." },
    { icon: "lock", title: "Privado y por lotes", description: "Aplica la misma marca de agua a un lote completo de una vez, todo en tu navegador: las imágenes nunca se suben." },
  ],

  faqs: [
    { q: "¿Puedo poner mi propio logo como marca de agua?", a: "Sí. Cambia a «Logo», sube un PNG (transparente funciona mejor) y ajusta su tamaño, posición y opacidad." },
    { q: "¿Puedo agregar una marca de agua a muchas imágenes a la vez?", a: "Sí. La misma marca de agua se aplica a todas las imágenes que añadas, y se descargan juntas en un ZIP." },
    { q: "¿Se leerá la marca de agua en cualquier imagen?", a: "Activa el contorno del texto para que se lea bien sobre fondos recargados, y ajusta la opacidad y el color a tu gusto." },
    { q: "¿Modifica mis imágenes originales?", a: "No. Tus originales no se tocan; la herramienta crea copias nuevas con marca de agua en tu navegador." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin ninguna marca de agua nuestra, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿Dónde debo colocar la marca de agua?", a: "Una sola marca en una esquina es lo menos intrusivo y también lo más fácil de recortar. Una marca en mosaico o en diagonal por el centro es mucho más difícil de quitar, pero compite con la imagen. Elige según el riesgo: las vistas previas de portafolio y las pruebas justifican la versión intrusiva; el trabajo terminado para clientes, normalmente no." },
    { q: "¿Qué opacidad funciona mejor?", a: "Entre el 30 % y el 50 % para la mayoría de las imágenes. Lo bastante baja para que la foto se siga apreciando y lo bastante alta para sobrevivir a una captura de pantalla. Por debajo de un 20 % aproximadamente, la marca puede desaparecer por completo sobre una zona clara o recargada, y entonces pierde su sentido." },
    { q: "¿Se puede quitar una marca de agua?", a: "Una persona decidida, con un programa de edición, puede eliminar o atenuar casi cualquier marca de agua, y el relleno con IA lo ha facilitado. Una marca de agua disuade de la copia casual y afirma la autoría; no es una protección anticopia. Las marcas que se superponen al motivo son bastante más difíciles de quitar que las que quedan sobre un fondo vacío." },
    { q: "¿Uso texto o un logo?", a: "El texto es más rápido y se escala con nitidez: un nombre, un usuario o un dominio suelen bastar. Un logo aporta reconocimiento de marca y se ve más acabado. Si usas un logo, un PNG transparente es imprescindible; un logo en JPG trae consigo su propio recuadro blanco." },
    { q: "¿La marca de agua empeora la calidad de la imagen?", a: "La marca se dibuja directamente sobre la imagen, así que no se degrada nada más allá de eso. Si exportas en JPG, la nueva compresión cuesta un poco de calidad, como siempre; exporta en PNG para evitarlo. En cualquier caso, guarda un original sin marca: de tu copia ya no se puede quitar después." },
    { q: "¿Puedo marcar un lote completo de forma idéntica?", a: "Sí, y es lo habitual. Define una vez el texto o el logo, la posición y la opacidad y aplícalos a todos los archivos; los recibes en un único ZIP. La posición es relativa, así que en un lote mezclado de fotos verticales y horizontales cada una recibe la marca en la esquina correcta." },
    { q: "¿Cómo añado mi usuario de Instagram como marca de agua?", a: "Elige «Texto», escribe tu @usuario, activa el contorno para que se vea sobre cualquier fondo y colócalo en una esquina con una opacidad del 40–60 %. Aplícalo a todo el lote y todas tus fotos llevarán la misma firma." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La marca de agua se aplica por completo en tu navegador con HTML canvas: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // WatermarkTool.tsx
    "Couldn't read that logo image.": "No se pudo leer la imagen del logo.",
    "Upload a logo image first.": "Primero sube una imagen de logo.",
    "Watermarked 1 image.": "Marca de agua aplicada a 1 imagen.",
    "Watermarked {n} images.": "Marca de agua aplicada a {n} imágenes.",
    "Watermarking failed.": "No se pudo aplicar la marca de agua.",
    "Please select image files.": "Selecciona archivos de imagen.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "done": "listo",
    "Live preview of": "Vista previa en vivo de",
    "— the same watermark applies to all {n} images.": "— la misma marca de agua se aplica a las {n} imágenes.",
    "1 image": "1 imagen",
    "{n} images": "{n} imágenes",
    "Clear images": "Quitar imágenes",
    "Files": "Archivos",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Remove": "Quitar",
    "Apply": "Aplicar",
    "Watermark settings": "Ajustes de la marca de agua",
    "Watermark Settings": "Ajustes de la marca de agua",
    "Applying…": "Aplicando…",
    "Watermark {n} images": "Marcar {n} imágenes",
    "Watermark & download": "Marca de agua y descargar",
    "Text": "Texto",
    "Logo": "Logo", // i18n-same
    "Watermark text": "Texto de la marca de agua",
    "Font": "Fuente",
    "Size": "Tamaño",
    "Bold": "Negrita",
    "Text color": "Color del texto",
    "Outline (for legibility)": "Contorno (para mejor lectura)",
    "Outline color": "Color del contorno",
    "Change logo": "Cambiar logo",
    "Upload logo (PNG)": "Subir logo (PNG)",
    "Logo size": "Tamaño del logo",
    "Opacity": "Opacidad",
    "Rotation": "Rotación",
    "Position": "Posición",
    "Output": "Salida",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    // POSITION_LABELS / FONTS / FORMATS (module scope, §4.2)
    "Top left": "Arriba a la izquierda",
    "Top center": "Arriba al centro",
    "Top right": "Arriba a la derecha",
    "Middle left": "Centro a la izquierda",
    "Center": "Centro",
    "Middle right": "Centro a la derecha",
    "Bottom left": "Abajo a la izquierda",
    "Bottom center": "Abajo al centro",
    "Bottom right": "Abajo a la derecha",
    "Sans (Inter)": "Sans serif (Inter)",
    "Serif (Georgia)": "Serif (Georgia)", // i18n-same
    "Impact": "Impact", // i18n-same
    "Monospace": "Monoespaciada",
    "Same as original": "Igual que el original",
  },
};

export default content;
