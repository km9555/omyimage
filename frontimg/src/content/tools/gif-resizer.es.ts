import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.es";

/**
 * Spanish copy for /es/redimensionar-gif.
 *
 * Target query «redimensionar GIF» leads the h1; «cambiar tamaño de GIF»
 * rides in the metaTitle, the intro and an FAQ. «reducir tamaño GIF» belongs
 * to the compressor (file weight); here the subject is pixel size.
 */
const content: ToolPageContent = {
  toolId: "gif-resizer",
  locale: "es",
  name: "Redimensionar GIF",
  tagline:
    "Redimensiona GIF animados por porcentaje o a píxeles exactos: se ajusta cada fotograma y la animación se reproduce igual que antes. Gratis, sin marca de agua y en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Redimensionar GIF – Cambiar tamaño de GIF animado | oMyImage",
  metaDescription:
    "Redimensionar GIF por porcentaje o en píxeles sin perder la animación: se conservan todos los fotogramas y sus tiempos. Gratis y sin marca de agua.",

  intro:
    "Si cambias el tamaño de un GIF animado en un editor de imágenes común, lo normal es que solo conserve el primer fotograma. Con «Redimensionar GIF» de oMyImage se redimensiona cada fotograma de la animación y se mantienen sus tiempos y su bucle, así que el resultado se mueve exactamente como el original, solo que al tamaño que necesitas. Escala por porcentaje o escribe el ancho y el alto en píxeles, compara el original con el resultado y descárgalo. Así puedes cambiar el tamaño de un GIF para hacerlo más pequeño o, si hace falta, más grande.",

  sections: [
    {
      heading: "Por porcentaje o en píxeles exactos",
      id: "modes",
      body: [
        "«Por porcentaje» es la vía rápida: 50 % reduce a la mitad el ancho y el alto, 25 % los deja en una cuarta parte, y funciona cualquier valor hasta 400 %. «Por píxeles» te deja escribir un ancho o un alto exactos; con «Mantener proporción» activado, el otro lado sigue la forma del propio GIF para que nada se aplaste.",
        "Desactiva «Mantener proporción» solo cuando el destino exija un recuadro exacto, como un avatar cuadrado, y el GIF ya tenga una forma parecida; si no, la animación se verá estirada.",
      ],
    },
    {
      heading: "Tamaños habituales",
      id: "sizes",
      body: [
        "Los emojis personalizados y las reacciones son cuadrados pequeños: Discord, por ejemplo, muestra los emojis a 128 × 128 y limita el archivo a 256 KB, así que un GIF de reacción normalmente tiene que reducirse tanto en dimensiones como en peso. Las fotos de perfil y los stickers suelen medir entre 256 y 512 píxeles de lado; los GIF insertados en artículos y documentación suelen tener entre 480 y 800 píxeles de ancho.",
        "Si el destino también tiene un límite de peso, redimensiona primero y luego pasa el resultado por «Comprimir GIF»; tener menos píxeles es el mayor ahorro individual.",
      ],
    },
    {
      heading: "Qué pasa con la calidad",
      id: "quality",
      body: [
        "Al reducir un GIF, se mantiene nítido, porque cada píxel nuevo se calcula como promedio de varios antiguos. Ese promedio crea colores intermedios y, como el GIF admite 256 colores, el resultado recibe una paleta nueva elegida a partir de toda la animación, lo que mantiene los colores estables de un fotograma a otro.",
        "Ampliar es posible, pero no añade detalle: los bordes se suavizan y el pixel art pequeño se ve borroso. Para pixel art, amplía por múltiplos enteros como 200 % y cuenta con cierto suavizado; si necesitas detalle real, vuelve a la fuente original.",
      ],
    },
    {
      heading: "El peso del archivo después de redimensionar",
      id: "filesize",
      body: [
        "El peso del archivo baja más o menos con el número de píxeles, así que el 50 % del ancho y del alto suele significar alrededor de una cuarta parte del tamaño. Como el GIF se reconstruye para que cada fotograma guarde solo lo que cambió, un GIF redimensionado puede quedar incluso más ligero de lo que harían pensar los píxeles por sí solos.",
        "Ampliar produce el efecto contrario: el doble de tamaño equivale aproximadamente a cuatro veces el archivo. Revisa el peso del resultado debajo de la vista previa antes de descargarlo.",
      ],
    },
    {
      heading: "Fotogramas, tiempos y transparencia",
      id: "frames",
      body: [
        "Cada fotograma se conserva con su propia duración, también en los GIF en los que algunos fotogramas se detienen más que otros, y la animación se repite igual que el original. Los GIF transparentes siguen siendo transparentes; la transparencia del GIF no tiene bordes suaves, así que un borde transparente muy reducido puede verse algo dentado sobre un fondo oscuro.",
      ],
    },
    {
      heading: "GIF en presentaciones y documentos",
      id: "slides",
      body: [
        "Un GIF insertado en PowerPoint, Keynote, Google Slides o un documento de Word conserva dentro del archivo su tamaño completo en píxeles, aunque se muestre pequeño. Un GIF de 1200 píxeles usado como miniatura hace que toda la presentación pese mucho y tarde en abrirse o en enviarse por correo.",
        "Antes de insertarlo, redimensiona el GIF más o menos al ancho con el que realmente se va a ver: unos 800 píxeles para una diapositiva a todo lo ancho, 400–600 para un GIF junto a un texto. La diapositiva se ve igual y el archivo sigue siendo ligero.",
      ],
    },
  ],

  howToTitle: "Cómo redimensionar un GIF",
  steps: [
    { title: "Agrega tu GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Elige el tamaño", description: "Selecciona un porcentaje o escribe el ancho y el alto en píxeles." },
    { title: "Redimensiona y descarga", description: "Haz clic en «Redimensionar GIF», compara el resultado y descárgalo." },
  ],

  features: [
    { icon: "photo_size_select_large", title: "Todos los fotogramas redimensionados", description: "Se redimensiona toda la animación, no solo el primer fotograma." },
    { icon: "aspect_ratio", title: "Porcentaje o píxeles", description: "Escala por porcentaje o define un ancho y un alto exactos." },
    { icon: "lock", title: "Nada se sube", description: "Tu GIF se redimensiona por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo redimensiono un GIF animado?", a: "Agrega el GIF, elige un porcentaje o unos píxeles exactos y haz clic en «Redimensionar GIF». Se redimensiona cada fotograma y la animación sigue reproduciéndose." },
    { q: "¿El GIF seguirá siendo animado?", a: "Sí. Se conservan todos los fotogramas con sus tiempos y su bucle originales." },
    { q: "¿Cómo hago un GIF de 128 × 128?", a: "Elige «Por píxeles», escribe 128 como ancho y, si el GIF no es cuadrado, desactiva «Mantener proporción» o recórtalo en cuadrado primero." },
    { q: "¿Cambiar el tamaño de un GIF reduce el peso del archivo?", a: "Hacerlo más pequeño sí: la mitad de ancho y de alto suele dar más o menos una cuarta parte del tamaño." },
    { q: "¿Puedo hacer un GIF más grande?", a: "Sí, hasta 400 %, pero ampliar no añade detalle y los bordes se suavizan." },
    { q: "¿Se conserva la transparencia?", a: "Sí. Los GIF transparentes siguen siendo transparentes después de redimensionarlos." },
    { q: "¿Lleva marca de agua?", a: "No. El GIF redimensionado no tiene marca de agua." },
    { q: "¿Puedo redimensionar y comprimir a la vez?", a: "Redimensiona aquí y luego pasa el resultado por «Comprimir GIF» para usar menos colores o fotogramas." },
    { q: "¿Se sube mi GIF?", a: "No. El redimensionado ocurre por completo en tu navegador." },
    { q: "¿Puedo redimensionar un GIF en el teléfono?", a: "Sí, en un navegador del teléfono. Los GIF grandes tardan un poco más en un teléfono, y el progreso se muestra mientras se procesan." },
    { q: "¿Puedo redimensionar varios GIF a la vez?", a: "De uno en uno, para que cada GIF tenga su propia vista previa y su tamaño. Los ajustes se quedan guardados para el siguiente." },
    { q: "¿Es gratis?", a: "Sí. Sin registro, sin cuenta y sin límite en la cantidad de GIF que puedes redimensionar." },
  ],

  security:
    "Tu GIF se redimensiona fotograma a fotograma en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
