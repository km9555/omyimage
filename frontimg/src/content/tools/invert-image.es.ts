import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/invertir-colores-imagen. Target query: «Invertir
 * colores» (1.3K ES / 2.4K MX, Nov 2026); secondary «negativo de imagen» in
 * the metaTitle, a heading and an FAQ. «Invertir imagen» alone is ambiguous in
 * Spanish (it can mean mirroring), so the page says «invertir colores» and
 * points to «Voltear imagen» once. The ui block is shared with
 * pixelate-image, image-brightness, glitch-effect and round-corners, which
 * import it from here.
 */
const content: ToolPageContent = {
  toolId: "invert-image",
  locale: "es",
  name: "Invertir colores de imagen",
  tagline:
    "Invierte los colores de cualquier foto: un negativo clásico, o una inversión inteligente que intercambia claros y oscuros pero mantiene los colores. Muchas imágenes a la vez. Gratis, en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Invertir colores de imagen – negativo gratis | oMyImage",
  metaDescription:
    "Invertir colores de imagen online y gratis: haz un negativo de imagen o intercambia claros y oscuros como en el modo oscuro. JPG, PNG y WebP, sin subir nada.",

  intro:
    "Invertir los colores de una imagen convierte cada color en su opuesto: el negro pasa a blanco, el azul a naranja, y una foto parece un negativo fotográfico. «Invertir colores de imagen» de oMyImage lo hace con un clic en archivos JPG, PNG y WebP, y añade un segundo modo que casi ninguna herramienta tiene: «Inversión inteligente», que intercambia claros y oscuros pero mantiene el tono de cada color, como hace el modo oscuro de un teléfono. Agrega una imagen o un lote entero, mira la vista previa en vivo, mantén pulsado el botón para comparar con el original y descarga.",

  sections: [
    {
      heading: "Negativo o inversión inteligente",
      id: "modes",
      body: [
        "«Negativo» invierte cada canal de color: cada valor pasa a ser 255 menos él mismo. Los blancos se vuelven negros, los rojos cian, los verdes magenta y los tonos de piel gris azulado: el aspecto de un negativo de película o de una radiografía. Si vuelves a invertir el resultado, recuperas exactamente el original.",
        "«Inversión inteligente» invierte solo la luminosidad. Las zonas oscuras se vuelven claras y las claras oscuras, pero el rojo sigue siendo rojo y el azul sigue siendo azul. Por eso es la opción adecuada para convertir una captura de pantalla o un documento blanco en una versión oscura sin que los colores se vean raros, y para darle a una foto un aire nocturno y misterioso.",
      ],
    },
    {
      heading: "Para qué sirve",
      id: "uses",
      body: [
        "Crea una versión en modo oscuro de una captura, un diagrama o una diapositiva para que encaje bien en un sitio web o una presentación oscuros. Pasa a fondo blanco una imagen con fondo negro antes de imprimirla, para ahorrar tinta y tóner. Convierte un negativo escaneado en blanco y negro de nuevo en una foto positiva. Crea arte, pósteres y fotos de perfil llamativos con un aspecto invertido.",
        "Los diseñadores también invierten imágenes para revisar una composición: cuando desaparecen los colores conocidos, es más fácil ver los problemas de equilibrio y de contraste.",
      ],
    },
    {
      heading: "Negativos de película escaneados",
      id: "negatives",
      body: [
        "Los negativos en blanco y negro se convierten en positivos sin problemas. Los negativos en color son más complicados: la película tiene una base naranja, así que una inversión directa sale con un fuerte tono azulado. Primero invierte los colores, después usa «Ajustar brillo de imagen» para aclarar la imagen y bajar la saturación, o conviértela con «Imagen en blanco y negro» si el color no importa.",
      ],
    },
    {
      heading: "Transparencia y formatos",
      id: "formats",
      body: [
        "Solo se invierten los colores; la transparencia queda exactamente como estaba, así que un logotipo sobre fondo transparente sigue siendo un logotipo sobre fondo transparente. PNG y WebP conservan esa transparencia; JPG no tiene, por lo que las zonas transparentes se rellenan con el color de fondo que elijas.",
        "La salida mantiene el formato original, salvo que elijas otro. PNG guarda los píxeles invertidos exactamente; JPG y WebP usan el ajuste de calidad, que puedes subir si los detalles finos son importantes.",
      ],
    },
    {
      heading: "Muchas imágenes a la vez",
      id: "batch",
      body: [
        "Agrega todas las imágenes que quieras. La vista previa muestra la primera, y el mismo modo se aplica a todas cuando haces clic en «Invertir colores». Una sola imagen se descarga directamente; varias llegan en un único archivo ZIP. Además, cada archivo de la lista recibe su propio botón de descarga cuando está listo.",
      ],
    },
    {
      heading: "Invertir logotipos e iconos",
      id: "logos",
      body: [
        "Un logotipo oscuro que desaparece sobre un sitio web oscuro se vuelve claro al invertirlo, siempre que el logotipo sea de un solo color oscuro. Los logotipos de varios colores también cambian de color, así que «Inversión inteligente», que mantiene los tonos, suele irles mejor. Revisa la vista previa contra el fondo sobre el que irá el logotipo antes de descargarlo.",
      ],
    },
    {
      heading: "Negativo de imagen: invertir colores en la práctica",
      id: "negative-practice",
      body: [
        "Quien busca «negativo de imagen» o «poner una foto en negativo» suele querer justo el modo «Negativo»: una foto que parece una tira de película revelada. Para pósteres, portadas de discos y proyectos artísticos es un efecto rápido y con mucha fuerza. Para capturas de pantalla y documentos, «Inversión inteligente» es casi siempre la mejor opción, porque los resaltados, los enlaces y los colores de los gráficos se siguen reconociendo.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada imagen se invierte por completo en tu navegador. No se sube nada a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo invertir los colores de una imagen",
  steps: [
    { title: "Agrega imágenes", description: "Selecciona una o varias imágenes JPG, PNG o WebP." },
    { title: "Elige el modo", description: "«Negativo» para el opuesto exacto, «Inversión inteligente» para mantener el tono de los colores." },
    { title: "Invierte y descarga", description: "Haz clic en «Invertir colores» para descargar la imagen, o un ZIP si son varias." },
  ],

  features: [
    { icon: "dark_mode", title: "Dos tipos de inversión", description: "Un negativo completo, o claros y oscuros intercambiados manteniendo los tonos." },
    { icon: "visibility", title: "Vista previa en vivo", description: "Mira el resultado al instante y mantén pulsado para comparar con el original." },
    { icon: "lock", title: "Sin subir nada", description: "Se invierte por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo invierto los colores de una imagen?", a: "Agrega la imagen, deja seleccionado «Negativo» y haz clic en «Invertir colores». La imagen invertida se descarga al momento." },
    { q: "¿Qué diferencia hay entre «Negativo» e «Inversión inteligente»?", a: "«Negativo» convierte cada color en su opuesto. «Inversión inteligente» solo intercambia claros y oscuros, así que los colores mantienen su tono." },
    { q: "¿Puedo hacer una captura de pantalla en modo oscuro?", a: "Sí. «Inversión inteligente» oscurece una captura blanca y mantiene reconocibles los elementos de color." },
    { q: "¿Se mantiene la transparencia?", a: "Sí. Solo cambian los colores; guarda en PNG o WebP para conservar las zonas transparentes." },
    { q: "¿Puedo invertir varias imágenes a la vez?", a: "Sí. Agrégalas todas; se descargan juntas en un archivo ZIP." },
    { q: "¿Puedo recuperar el original?", a: "Volver a aplicar «Negativo» lo restaura. Para un ida y vuelta perfecto, guarda en PNG." },
    { q: "¿Puedo convertir un negativo de película en una foto?", a: "Sí, en el caso de negativos en blanco y negro. Los negativos en color necesitan después una pequeña corrección de color." },
    { q: "¿Qué formatos admite?", a: "Acepta JPG, PNG y WebP; la salida usa el mismo formato o el que elijas." },
    { q: "¿Se sube mi imagen a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono." },
    { q: "¿Reduce la calidad?", a: "PNG es exacto. JPG y WebP se vuelven a guardar con la calidad que elijas." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Invertir colores es lo mismo que invertir una imagen en espejo?", a: "No. Invertir colores convierte cada color en su opuesto; el efecto espejo intercambia izquierda y derecha. Para eso está «Voltear imagen»." },
  ],

  security:
    "Tus imágenes se invierten por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  ui: {
    // ImageFilterTool.tsx — shared with pixelate-image, image-brightness,
    // glitch-effect and round-corners, whose modules reuse this block.
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WebP",
    "Please select image files.": "Selecciona archivos de imagen.",
    "Clear files": "Quitar archivos",
    "Remove": "Quitar",
    "Settings": "Ajustes",
    "Preview": "Vista previa",
    "Live preview of": "Vista previa en vivo de",
    "— applied to all {n} images.": "— se aplica a las {n} imágenes.",
    "Hold to see the original": "Mantén pulsado para ver el original",
    "Output format": "Formato de salida",
    "Same as original": "Igual que el original",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    "Working…": "Procesando…",
    "Processing failed.": "No se pudo procesar el archivo.",
    "done": "listo",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Done — 1 image saved.": "Listo: 1 imagen guardada.",
    "Done — {n} images saved.": "Listo: {n} imágenes guardadas.",
    "Your images are processed in your browser and never uploaded.": "Tus imágenes se procesan en tu navegador y nunca se suben.",
    "Reset": "Restablecer",
    // invert
    "Invert colours": "Invertir colores",
    "Invert": "Invertir",
    "Negative": "Negativo",
    "Smart invert": "Inversión inteligente",
    "Every colour becomes its opposite, like a film negative.": "Cada color se convierte en su opuesto, como en un negativo de película.",
    "Light and dark swap but colours keep their hue — a dark-mode look.": "Claros y oscuros se intercambian, pero los colores mantienen su tono: un aspecto de modo oscuro.",
    // pixelate
    "Pixelate image": "Pixelar imagen",
    "Block size": "Tamaño del bloque",
    "About {n} blocks along the longer side.": "Unos {n} bloques a lo largo del lado más largo.",
    // brightness
    "Apply adjustments": "Aplicar ajustes",
    "Brightness": "Brillo",
    "Contrast": "Contraste",
    "Saturation": "Saturación",
    // glitch
    "Apply glitch": "Aplicar glitch",
    "Strength": "Intensidad",
    "Colour split": "Separación de color",
    "Shifted slices": "Franjas desplazadas",
    "Scan lines": "Líneas de escaneo",
    "Shuffle the slices": "Mezclar las franjas",
    // round corners
    "Round the corners": "Redondear esquinas",
    "Corner radius": "Radio de las esquinas",
    "A share of the shorter side. 50% makes a pill, or a circle for square images.": "Proporción del lado más corto. Con 50 % sale una forma de píldora, o un círculo en imágenes cuadradas.",
    "Corners": "Esquinas",
    "Top left": "Arriba a la izquierda",
    "Top right": "Arriba a la derecha",
    "Bottom left": "Abajo a la izquierda",
    "Bottom right": "Abajo a la derecha",
    "Corner background": "Fondo de las esquinas",
    "JPG has no transparency, so the corners are filled with the background colour.": "JPG no admite transparencia, así que las esquinas se rellenan con el color de fondo.",
  },
};

export default content;
