import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.es";

/**
 * Spanish copy for /es/invertir-gif.
 *
 * Target query «invertir GIF» leads the h1; «GIF al revés» and «GIF en
 * reversa» (MX) ride in the metaTitle, the intro and an FAQ, and «GIF
 * bumerán» names the second mode.
 */
const content: ToolPageContent = {
  toolId: "reverse-gif",
  locale: "es",
  name: "Invertir GIF",
  tagline:
    "Reproduce un GIF animado al revés, o conviértelo en un bumerán que va hacia delante y luego hacia atrás en un bucle continuo. Cada fotograma conserva sus tiempos. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Invertir GIF – Poner un GIF al revés o en bumerán | oMyImage",
  metaDescription:
    "Invertir GIF online: pon tu GIF al revés o en reversa, o crea un GIF bumerán que va y vuelve sin saltos. Cada fotograma conserva sus tiempos. Gratis.",

  intro:
    "Reproducir una animación al revés es uno de los trucos más antiguos que existen: el agua vuelve a saltar dentro del vaso, un objeto que cae sube de nuevo a la mano, una multitud camina en reversa. «Invertir GIF» de oMyImage da la vuelta al orden de todos los fotogramas de tu GIF para que se reproduzca del final al principio, y su opción «Bumerán» reproduce el clip hacia delante y luego hacia atrás, de modo que el bucle no tiene ningún salto visible. Agrega el GIF, elige una dirección, compara el resultado con el original y descárgalo.",

  sections: [
    {
      heading: "Al revés o en bumerán",
      id: "modes",
      body: [
        "«Invertir» reproduce los fotogramas del último al primero. El GIF dura exactamente lo mismo que antes y tiene el mismo número de fotogramas; solo cambia el orden. Es la opción adecuada para los chistes que dependen de que el tiempo corra hacia atrás y para los GIF que simplemente se ven mejor al revés.",
        "«Bumerán» reproduce los fotogramas hacia delante y luego hacia atrás. El primer y el último fotograma no se repiten en los puntos de giro, así que el movimiento rebota con suavidad en lugar de detenerse. Es el efecto que las aplicaciones de cámara de los teléfonos llaman bumerán, y la forma más sencilla de hacer que cualquier clip corto se repita sin saltos.",
      ],
    },
    {
      heading: "Tiempos",
      id: "timing",
      body: [
        "Cada fotograma conserva su propia duración. Si el original se detiene dos segundos en su último fotograma y luego vuelve a empezar, el GIF invertido se detiene esos mismos dos segundos en ese fotograma, que ahora está al principio. Normalmente eso es lo que quieres, pero si la pausa se siente rara al inicio, «Cambiar velocidad de GIF» puede dar a todos los fotogramas la misma duración.",
        "Un bumerán dura casi el doble que el original, porque la mayoría de los fotogramas se reproducen dos veces. Los clips cortos, de uno a tres segundos, dan los mejores bumeranes; los más largos pueden sentirse lentos en el camino de vuelta.",
      ],
    },
    {
      heading: "Por qué algunos GIF se repiten con un salto",
      id: "loops",
      body: [
        "La mayoría de los GIF se cortan de un video, así que el último fotograma rara vez coincide con el primero. Cuando el GIF vuelve a empezar, todo regresa de golpe a donde comenzó, y la vista detecta el salto cada pocos segundos. Un bumerán nunca salta: se invierte en cada extremo, así que el movimiento es continuo por muchas veces que se reproduzca.",
        "Por eso es un arreglo rápido para fotos de producto, manos que saludan, bebidas que se sirven, pelo al viento y otros movimientos cortos que, si no, darían un tirón en cada vuelta.",
      ],
    },
    {
      heading: "Calidad y tamaño del archivo",
      id: "quality",
      body: [
        "Los fotogramas en sí no cambian. Cuando los colores del GIF caben en una sola paleta, como ocurre en la mayoría de los GIF, se escriben de nuevo exactamente los mismos colores. Los GIF hechos a partir de un video a veces usan una paleta por fotograma, y esos reciben una sola paleta compartida de 256 colores elegida entre todos los fotogramas, algo que rara vez se nota.",
        "Un GIF invertido suele pesar más o menos lo mismo que el original. Un bumerán pesa más, porque casi todos los fotogramas se guardan dos veces; si eso importa, «Comprimir GIF» puede aligerarlo después.",
      ],
    },
    {
      heading: "Ideas",
      id: "ideas",
      body: [
        "Rebobina un clavado, un salto o un chapuzón para que ocurra al revés. Reproduce en reversa una construcción, un dibujo o una receta para que se deshaga sola. Convierte el giro de un producto o un clip de retrato en un bumerán que se repita limpiamente en un sitio web o en una historia. Invierte un GIF de reacción para cambiar por completo su significado.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica, se reordena y se codifica por completo en tu navegador. Nunca se sube y no se guarda nada después de cerrar la página.",
      ],
    },
  ],

  howToTitle: "Cómo invertir un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Elige una dirección", description: "Elige «Invertir» para reproducirlo al revés o «Bumerán» para que vaya hacia delante y luego hacia atrás." },
    { title: "Invierte y descarga", description: "Haz clic en «Invertir GIF», compara el resultado con el original y descárgalo." },
  ],

  features: [
    { icon: "history", title: "Al revés o en bumerán", description: "Reprodúcelo desde el final, o haz que vaya y vuelva en un bucle continuo." },
    { icon: "visibility", title: "Uno al lado del otro", description: "El original y el resultado se reproducen juntos." },
    { icon: "lock", title: "Nada se sube", description: "Se invierte por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo pongo un GIF al revés?", a: "Agrega el GIF, deja seleccionada la opción «Invertir» y haz clic en «Invertir GIF». Los fotogramas se reproducen del último al primero." },
    { q: "¿Qué es un GIF bumerán?", a: "Un GIF que se reproduce hacia delante y luego hacia atrás, una y otra vez, de modo que el bucle nunca salta de vuelta al inicio." },
    { q: "¿El GIF invertido conserva su velocidad?", a: "Sí. Cada fotograma conserva su propia duración; solo cambia el orden." },
    { q: "¿Por qué mi bumerán dura más?", a: "La mayoría de los fotogramas se reproducen dos veces, una hacia delante y otra hacia atrás, así que un bumerán dura casi el doble." },
    { q: "¿Invertir baja la calidad?", a: "No. Los fotogramas no cambian, y los colores originales se reutilizan siempre que quepan en una paleta." },
    { q: "¿El archivo pesará más?", a: "Un GIF invertido pesa más o menos lo mismo. Un bumerán pesa más, porque casi todos los fotogramas se guardan dos veces." },
    { q: "¿Se conserva la transparencia?", a: "Sí. Los GIF transparentes siguen siendo transparentes." },
    { q: "¿Puedo poner un video en reversa?", a: "Convierte primero el clip con «Video a GIF» y después invierte el GIF aquí." },
    { q: "¿Puedo hacer un bumerán con una imagen fija?", a: "No: un bumerán necesita movimiento. Un GIF con un solo fotograma no tiene nada que invertir." },
    { q: "¿Se sube mi GIF?", a: "No. El GIF se invierte por completo en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en un navegador del teléfono. Los GIF largos tardan un poco más en un teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Puedo invertir y cambiar la velocidad a la vez?", a: "En dos pasos: invierte el GIF aquí y después pasa el resultado por «Cambiar velocidad de GIF» para acelerarlo o ralentizarlo." },
  ],

  security:
    "Tu GIF se invierte por completo en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
