import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/recortar-gif.
 *
 * Target query «recortar GIF» (recortar GIF animado / online) leads the h1.
 * The ui block is shared with rotate-gif, reverse-gif, gif-speed-changer and
 * gif-cutter, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-cropper",
  locale: "es",
  name: "Recortar GIF",
  tagline:
    "Recorta GIF animados en línea: arrastra un recuadro o escribe píxeles exactos, fija una relación de aspecto y cada fotograma se recorta igual. La animación sigue reproduciéndose. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Recortar GIF – Recortar GIF animado online gratis | oMyImage",
  metaDescription:
    "Recortar GIF sin perder la animación: arrastra el recuadro o escribe los píxeles y fija un formato como 1:1 o 16:9. Gratis y sin marca de agua.",

  intro:
    "La mayoría de las herramientas de recorte reducen un GIF a su primer fotograma, así que la animación se pierde en cuanto lo cortas. Con «Recortar GIF» de oMyImage trabajas sobre toda la animación: arrastra el recuadro sobre la parte que quieres conservar, o escribe su posición y su tamaño en píxeles, y cada fotograma se recorta exactamente a esa zona sin tocar sus tiempos. Un control deslizante de fotogramas te permite comprobar el recuadro frente al contenido en movimiento antes de confirmar, y el resultado se reproduce junto al original para que puedas compararlos antes de descargar.",

  sections: [
    {
      heading: "Por qué recortar un GIF",
      id: "why",
      body: [
        "Las grabaciones de pantalla y los GIF hechos a partir de un video suelen incluir más que la parte interesante: una barra del navegador, franjas negras de un clip panorámico, una marca de agua en una esquina o espacio vacío alrededor del sujeto. Recortar elimina todo eso, de modo que la acción llena el cuadro y la reacción o la demostración se entienden bien en los tamaños pequeños en los que se suelen mostrar los GIF.",
        "Además, recortar hace el archivo más ligero. Un GIF guarda cada píxel de cada fotograma, así que conservar la mitad del ancho y la mitad del alto deja más o menos una cuarta parte de los datos. Muchas veces eso basta para que un GIF quede por debajo de un límite de subida sin bajar en absoluto su calidad.",
      ],
    },
    {
      heading: "Elegir la zona",
      id: "area",
      body: [
        "Arrastra dentro del recuadro para moverlo y arrastra una esquina o un borde para cambiar su tamaño; las teclas de flecha lo desplazan de píxel en píxel. Los campos «Izquierda», «Arriba», «Ancho» y «Alto» muestran el recuadro en píxeles y aceptan valores escritos, que es la forma más rápida de ajustarte a un tamaño que te hayan pedido.",
        "Como el sujeto de una animación se mueve, el recuadro se dibuja sobre un fotograma cada vez. Usa el control deslizante de fotogramas debajo de la imagen para recorrer la animación y asegurarte de que nada importante se salga del recuadro a mitad de camino: una mano que saluda y sale de cuadro o un texto que aparece al final.",
      ],
    },
    {
      heading: "Relaciones de aspecto",
      id: "ratios",
      body: [
        "«Libre» deja que el recuadro tome cualquier forma. Las proporciones fijas lo bloquean mientras arrastras: 1:1 para avatares, stickers e Instagram, 4:5 para publicaciones verticales, 16:9 para banners tipo video y diapositivas, 9:16 para historias y pantallas de teléfono, y 4:3 o 3:2 para los formatos de foto clásicos. Al elegir una proporción, el recuadro actual se rehace alrededor de su centro, así que sigue sobre la misma parte de la imagen.",
        "Si el GIF debe tener además un tamaño exacto en píxeles, recórtalo primero a la proporción y después define el tamaño final con «Redimensionar GIF».",
      ],
    },
    {
      heading: "Lo que no cambia",
      id: "kept",
      body: [
        "Cada fotograma conserva su duración, así que la animación se reproduce a la misma velocidad y se repite como antes. Los GIF transparentes siguen siendo transparentes. Y como recortar solo elimina píxeles, los colores se escriben de nuevo exactamente iguales siempre que los colores del GIF quepan en una sola paleta, que es lo que ocurre en la mayoría de los GIF: no se vuelve a cuantizar nada, así que no aparecen franjas ni motas nuevas.",
        "Los GIF hechos a partir de un video a veces usan una paleta distinta para cada fotograma. Esos se vuelven a colorear con una sola paleta compartida de 256 colores, elegida entre todos los fotogramas, algo que rara vez se nota.",
      ],
    },
    {
      heading: "Recortes habituales",
      id: "uses",
      body: [
        "Quitar las franjas negras de un clip sacado de una película o de un video de YouTube. Reducir una grabación de pantalla al único cuadro de diálogo o botón del que trata. Hacer un avatar o un sticker cuadrado a partir de un GIF de reacción ancho. Recortar los bordes donde está una marca de agua o el logotipo de un sitio, cuando tienes derecho a usar la animación.",
        "En los recortes que cambian la forma (un GIF ancho que pasa a ser cuadrado o vertical), fija primero la proporción y después coloca el recuadro, para que el sujeto quede centrado.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica, se recorta y se codifica por completo en tu navegador. Nunca se sube a un servidor y no se guarda nada después de cerrar la página, así que las grabaciones de pantalla privadas y los clips personales se quedan en tu dispositivo.",
      ],
    },
    {
      heading: "Después de recortar",
      id: "next",
      body: [
        "Un GIF recortado muchas veces ya es lo bastante ligero. Si no lo es, «Comprimir GIF» puede reducirlo más con menos colores, y «Cortar GIF» puede eliminar los fotogramas anteriores o posteriores al momento que te interesa. Para girar el GIF, usa «Girar GIF»; para compartirlo como video, conviértelo con «GIF a MP4».",
      ],
    },
  ],

  howToTitle: "Cómo recortar un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Dibuja el recuadro", description: "Arrastra el recuadro de recorte o escribe su tamaño; fija una proporción si la necesitas." },
    { title: "Recorta y descarga", description: "Haz clic en «Recortar GIF», compara el resultado con el original y descárgalo." },
  ],

  features: [
    { icon: "crop", title: "Toda la animación", description: "Cada fotograma se recorta a la misma zona y conserva sus tiempos." },
    { icon: "aspect_ratio", title: "Tamaños exactos", description: "Arrastra el recuadro, escribe píxeles o fija una proporción como 1:1 o 16:9." },
    { icon: "lock", title: "Nada se sube", description: "Se recorta por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo recorto un GIF animado?", a: "Agrega el GIF, arrastra el recuadro sobre la zona que quieres conservar y haz clic en «Recortar GIF». Cada fotograma se recorta igual y la animación sigue reproduciéndose." },
    { q: "¿El GIF seguirá siendo animado?", a: "Sí. Se conservan todos los fotogramas, cada uno con su duración original, y el GIF se repite como antes." },
    { q: "¿Puedo recortar un GIF en cuadrado?", a: "Sí. Elige 1:1 y el recuadro mantiene la forma cuadrada mientras lo mueves y cambias su tamaño." },
    { q: "¿Puedo introducir un tamaño exacto?", a: "Sí. En los ajustes, escribe la posición izquierda y superior y el ancho y el alto en píxeles." },
    { q: "¿Recortar baja la calidad?", a: "No. Los píxeles dentro del recuadro se quedan como estaban, y los colores originales se reutilizan siempre que quepan en una paleta." },
    { q: "¿Se conserva la transparencia?", a: "Sí. Los GIF transparentes siguen siendo transparentes después de recortarlos." },
    { q: "¿El archivo pesará menos?", a: "Normalmente sí. Menos píxeles por fotograma significan menos datos, más o menos en proporción a la superficie que eliminas." },
    { q: "¿Por qué el recuadro muestra solo un fotograma?", a: "Un recuadro de recorte solo se puede dibujar sobre una imagen a la vez. Usa el control deslizante de fotogramas para comprobarlo con el resto de la animación." },
    { q: "¿Puedo recortar varios GIF a la vez?", a: "De uno en uno. Cada animación suele necesitar su propio recuadro." },
    { q: "¿Se sube mi GIF?", a: "No. El GIF se recorta por completo en tu navegador y nunca sale de tu dispositivo." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en un navegador del teléfono. Arrastra el recuadro con el dedo; los GIF grandes tardan un poco más en un teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límite en la cantidad de GIF que recortas." },
    { q: "¿Qué formato conviene para stickers?", a: "1:1. Los stickers son cuadrados; después de recortar, lleva el GIF a 512 píxeles o menos con «Redimensionar GIF»." },
  ],

  security:
    "Tu GIF se recorta por completo en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  ui: {
    // GifEditTool.tsx — shared with rotate-gif, reverse-gif, gif-speed-changer
    // and gif-cutter, whose modules reuse this block.
    "Select a GIF": "Seleccionar un GIF",
    "or drop a GIF here": "o suelta aquí un GIF",
    "Please select a GIF.": "Selecciona un GIF.",
    "Could not read this image.": "No se pudo leer esta imagen.",
    "Processing failed.": "No se pudo procesar.",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "GIF settings": "Ajustes del GIF",
    "Download GIF": "Descargar GIF",
    "Saving…": "Guardando…",
    "Working… {p}%": "Procesando… {p} %",
    "Your GIF will appear here.": "Tu GIF aparecerá aquí.",
    "Original": "Original", // i18n-same
    "Result": "Resultado",
    "Output: {w} × {h} px": "Salida: {w} × {h} px",
    "{n} frames": "{n} fotogramas",
    "{s} s": "{s} s", // i18n-same
    "Width (px)": "Ancho (px)",
    "Height (px)": "Alto (px)",
    "Left (px)": "Izquierda (px)",
    "Top (px)": "Arriba (px)",
    "Your file is processed in your browser and never uploaded.": "Tu archivo se procesa en tu navegador y nunca se sube.",
    "Preview": "Vista previa",
    "Crop GIF": "Recortar GIF",
    "Rotate GIF": "Girar GIF",
    "Reverse GIF": "Invertir GIF",
    "Change speed": "Cambiar velocidad",
    "Cut GIF": "Cortar GIF",
    "This GIF has only one frame, so it isn't animated.": "Este GIF tiene un solo fotograma, así que no es animado.",
    // crop
    "Aspect ratio": "Relación de aspecto",
    "Free": "Libre",
    "Select the whole frame": "Seleccionar el fotograma completo",
    "Every frame is cropped to the same area and keeps its timing.": "Cada fotograma se recorta a la misma zona y conserva sus tiempos.",
    "Drag the box to choose the area to keep · output {w} × {h} px":
      "Arrastra el recuadro para elegir la zona que se conserva · salida {w} × {h} px",
    "Frame {i} of {n}": "Fotograma {i} de {n}",
    "Frame shown under the crop box": "Fotograma que se ve bajo el recuadro de recorte",
    // rotate
    "Rotate": "Girar",
    "90° left": "90° a la izquierda",
    "90° right": "90° a la derecha",
    "Flip": "Voltear",
    "Horizontal": "Horizontal", // i18n-same
    "Vertical": "Vertical", // i18n-same
    "Every frame is turned the same way and keeps its timing.": "Cada fotograma se gira igual y conserva sus tiempos.",
    // reverse
    "Direction": "Dirección",
    "Reverse": "Invertir",
    "Boomerang": "Bumerán",
    "Plays forwards, then backwards, as one seamless loop.": "Se reproduce hacia delante y luego hacia atrás, en un bucle continuo.",
    "Plays the frames in reverse order, each with its own timing.": "Reproduce los fotogramas en orden inverso, cada uno con su propia duración.",
    // speed
    "Change": "Cambiar",
    "By speed": "Por velocidad",
    "Frame delay": "Duración del fotograma",
    "Speed": "Velocidad",
    "Above 1× is faster, below 1× is slower.": "Por encima de 1× va más rápido; por debajo de 1×, más lento.",
    "Every frame (ms)": "Cada fotograma (ms)",
    "{fps} frames per second": "{fps} fotogramas por segundo",
    "Length: {a} → {b}": "Duración: {a} → {b}",
    "Only the timing changes — every frame and pixel stays as it was.":
      "Solo cambian los tiempos: cada fotograma y cada píxel se quedan como estaban.",
    "To play this fast, {n} frames are merged: browsers slow down frames shorter than 0.02 s.":
      "Para ir así de rápido se combinan {n} fotogramas: los navegadores ralentizan los fotogramas de menos de 0,02 s.",
    // cut
    "Start": "Inicio",
    "End": "Final",
    "Frame {i} · {s} s": "Fotograma {i} · {s} s",
    "First frame": "Primer fotograma",
    "Last frame": "Último fotograma",
    "Selected part": "Parte seleccionada",
    "Keep it": "Conservarla",
    "Remove it": "Eliminarla",
    "Result: {n} frames · {s}": "Resultado: {n} fotogramas · {s}",
    "Keep at least one frame.": "Conserva al menos un fotograma.",
  },
};

export default content;
