import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.es";

/**
 * Spanish copy for /es/girar-gif.
 *
 * Target query «girar GIF» leads the h1; «rotar GIF» and «voltear GIF» ride
 * along in the metaTitle/metaDescription, a heading and an FAQ, because the
 * same tool also flips.
 */
const content: ToolPageContent = {
  toolId: "rotate-gif",
  locale: "es",
  name: "Girar GIF",
  tagline:
    "Gira GIF animados 90° a la izquierda o a la derecha o 180°, o voltéalos como en un espejo: cada fotograma gira igual y la animación sigue reproduciéndose. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Girar GIF – Rotar y voltear GIF animados online | oMyImage",
  metaDescription:
    "Girar GIF 90° o 180°, o voltearlo en horizontal o en vertical: se conservan todos los fotogramas, los tiempos y los colores. Rota tu GIF gratis.",

  intro:
    "Un GIF grabado con el teléfono sostenido al revés, o un clip que hay que reflejar para que mire hacia el otro lado, no se puede corregir en la mayoría de los editores de imágenes sin perder la animación. Con «Girar GIF» de oMyImage giras toda la animación de una vez: elige 90° a la izquierda, 90° a la derecha o 180°, añade un volteo horizontal o vertical si lo necesitas y mira cómo se mueve la vista previa mientras eliges. Cada fotograma se gira igual, conserva sus tiempos y sus colores exactos, así que el resultado se ve igual que el original, solo que en la orientación correcta.",

  sections: [
    {
      heading: "Cuándo hay que girar un GIF",
      id: "when",
      body: [
        "Los teléfonos graban en la dirección en que se sostienen, y los convertidores de GIF no siempre leen la etiqueta de orientación que le indica al reproductor que gire el video, así que un clip grabado en vertical puede terminar acostado. Las grabaciones de pantalla de un monitor girado, los escaneos de dibujos animados y los GIF guardados desde aplicaciones que recortan de forma extraña tienen el mismo problema.",
        "Girarlo corrige el propio archivo, no solo cómo lo muestra una aplicación, así que el GIF queda en la orientación correcta en cualquier lugar donde lo publiques o lo envíes.",
      ],
    },
    {
      heading: "Rotar o voltear un GIF",
      id: "modes",
      body: [
        "La rotación gira la imagen alrededor de su centro: 90° a la derecha (en el sentido de las agujas del reloj), 90° a la izquierda (en sentido contrario) o 180° (boca abajo). Un cuarto de vuelta intercambia el ancho y el alto, así que un GIF de 480 × 270 pasa a ser de 270 × 480; media vuelta mantiene el tamaño.",
        "Voltear, en cambio, refleja la imagen. El volteo horizontal intercambia izquierda y derecha, útil cuando el sujeto debe mirar hacia el interior de una página o hacia un texto, y el volteo vertical intercambia arriba y abajo. El texto de un GIF volteado se lee al revés, así que voltea solo cuando eso no importe.",
        "La rotación y los volteos se pueden combinar: por ejemplo, un giro de 90° más un volteo horizontal da una versión vertical reflejada. La vista previa muestra la combinación antes de procesar nada.",
      ],
    },
    {
      heading: "Lo que no cambia",
      id: "kept",
      body: [
        "Cada fotograma conserva su duración, así que la animación se reproduce a la misma velocidad y se repite exactamente como antes. Las zonas transparentes siguen siendo transparentes.",
        "Un giro en múltiplos de 90° mueve los píxeles sin mezclarlos, así que nada se vuelve a muestrear ni se desenfoca. Cuando los colores del GIF caben en una sola paleta, que es lo que pasa en la mayoría de los GIF, esos colores se escriben de nuevo exactamente iguales. Los GIF hechos a partir de un video a veces usan una paleta por fotograma; esos reciben una sola paleta compartida de 256 colores elegida entre todos los fotogramas, algo que rara vez se nota.",
      ],
    },
    {
      heading: "Vertical y horizontal",
      id: "orientation",
      body: [
        "Un clip de teléfono de lado convertido en GIF vertical va bien para historias, pantallas de teléfono y chats, donde las animaciones altas ocupan más espacio. Al revés, un clip vertical girado a horizontal encaja mejor en diapositivas, sitios web y banners tipo video.",
        "Si además el resultado necesita una forma concreta, por ejemplo cuadrada para un avatar, recórtalo después con «Recortar GIF»; si necesita un tamaño exacto en píxeles, usa «Redimensionar GIF».",
      ],
    },
    {
      heading: "Tamaño del archivo",
      id: "size",
      body: [
        "Girar no añade ni quita píxeles, así que el archivo suele quedarse cerca de su tamaño original. Puede salir un poco más pesado o más ligero, porque la compresión GIF trabaja fila por fila y una imagen girada tiene filas distintas. Para hacerlo más ligero a propósito, pásalo después por «Comprimir GIF».",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica, se gira y se codifica por completo en tu navegador. Nunca se sube y no se guarda nada cuando cierras la página: los clips personales y las grabaciones de pantalla se quedan en tu dispositivo.",
      ],
    },
    {
      heading: "Girar imágenes fijas",
      id: "stills",
      body: [
        "Para fotos JPG, PNG y WebP, usa «Girar imagen»: procesa muchos archivos a la vez y también puede girar una imagen en cualquier ángulo, no solo en pasos de 90°. «Girar GIF» existe porque los rotadores comunes solo conservan el primer fotograma de una animación.",
      ],
    },
  ],

  howToTitle: "Cómo girar un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Elige el giro", description: "Selecciona 90° a la izquierda, 90° a la derecha o 180°, y añade un volteo si lo necesitas; la vista previa se actualiza sobre la marcha." },
    { title: "Gira y descarga", description: "Haz clic en «Girar GIF», compara el resultado con el original y descárgalo." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Girar o reflejar", description: "90° a la izquierda o a la derecha, 180°, y volteos horizontales o verticales." },
    { icon: "visibility", title: "Vista previa en vivo", description: "Mira la animación girada antes de procesar nada." },
    { icon: "lock", title: "Nada se sube", description: "Se gira por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo giro un GIF animado?", a: "Agrega el GIF, elige 90° a la izquierda, 90° a la derecha o 180° y haz clic en «Girar GIF». Cada fotograma se gira y la animación sigue reproduciéndose." },
    { q: "¿Puedo voltear un GIF en horizontal?", a: "Sí. Elige «Horizontal» en «Voltear» para reflejarlo de izquierda a derecha, con o sin rotación." },
    { q: "¿El GIF seguirá siendo animado?", a: "Sí. Se conservan todos los fotogramas con sus tiempos originales, y el GIF se repite como antes." },
    { q: "¿Girar baja la calidad?", a: "No. Los cuartos de vuelta mueven los píxeles sin mezclarlos, y los colores originales se reutilizan cuando caben en una paleta." },
    { q: "¿Por qué se intercambian el ancho y el alto?", a: "Un giro de 90° pone la imagen de lado, así que un GIF de 480 × 270 pasa a ser de 270 × 480. Un giro de 180° mantiene el tamaño." },
    { q: "¿Puedo rotar un GIF en un ángulo personalizado?", a: "Aquí no. «Girar GIF» gira en pasos de 90°, lo que mantiene nítido cada píxel; otros ángulos desenfocarían los fotogramas y añadirían esquinas." },
    { q: "¿Se conserva la transparencia?", a: "Sí. Los GIF transparentes siguen siendo transparentes." },
    { q: "¿Cambiará el tamaño del archivo?", a: "Solo un poco. No se añaden ni se quitan píxeles, pero la compresión puede variar ligeramente con la nueva orientación." },
    { q: "¿Se sube mi GIF?", a: "No. El GIF se gira por completo en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en un navegador del teléfono. Los GIF grandes tardan un poco más en un teléfono." },
    { q: "¿Puedo girar un GIF que salió de un video?", a: "Sí. Se gira como cualquier otro GIF; para girar el propio video, conviértelo primero en GIF con «Video a GIF»." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límite en la cantidad de GIF que giras." },
  ],

  security:
    "Tu GIF se gira por completo en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
