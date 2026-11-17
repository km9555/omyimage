import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.es";

/**
 * Spanish copy for /es/cambiar-velocidad-gif.
 *
 * Target query «cambiar velocidad de GIF» leads the h1; «acelerar GIF» and
 * «ralentizar GIF» sit in the metaDescription and in the FAQ questions people
 * actually type.
 */
const content: ToolPageContent = {
  toolId: "gif-speed-changer",
  locale: "es",
  name: "Cambiar velocidad de GIF",
  tagline:
    "Acelera o ralentiza un GIF animado, o da a todos los fotogramas la misma duración. Normalmente solo cambian los tiempos: cada píxel se queda como estaba. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Cambiar velocidad de GIF – Acelerar o ralentizar | oMyImage",
  metaDescription:
    "Cambiar velocidad de GIF gratis: acelera o ralentiza tu GIF de 0,1× a 10×, o da a cada fotograma la misma duración. Sin perder calidad y sin registro.",

  intro:
    "Un GIF que se arrastra hace que un chiste llegue tarde; uno que va a toda prisa hace imposible seguir un tutorial. «Cambiar velocidad de GIF» de oMyImage corrige el ritmo sin rehacer la animación. Elige una velocidad como 2× o 0,5×, o escribe la tuya, y mira la nueva duración antes de guardar. Cuando solo hay que cambiar los tiempos, que es lo más habitual, la herramienta reescribe la duración de cada fotograma y deja las imágenes intactas, así que el GIF conserva exactamente su calidad y su tamaño.",

  sections: [
    {
      heading: "Cómo funciona la velocidad de un GIF",
      id: "how",
      body: [
        "Un GIF no tiene una frecuencia de fotogramas. Cada fotograma lleva su propia duración, guardada en centésimas de segundo, y el reproductor muestra el fotograma durante ese tiempo antes de pasar al siguiente. Por eso un GIF puede detenerse en el remate de un chiste y pasar rápido por el resto, y por eso cambiar la velocidad significa cambiar cada duración.",
        "Acelerar a 2× reduce cada duración a la mitad, y ralentizar a 0,5× las duplica, así que se conserva el ritmo del original, pausas incluidas, solo que más rápido o más lento.",
      ],
    },
    {
      heading: "Por velocidad o por duración del fotograma",
      id: "modes",
      body: [
        "«Por velocidad» escala los tiempos propios del GIF. Los botones cubren las opciones habituales de 0,25× a 3×, y el campo acepta cualquier valor de 0,1× a 10×. La nueva duración se muestra antes de hacer clic, así que sabes exactamente cuánto durará el resultado.",
        "«Duración del fotograma» da en cambio a todos los fotogramas la misma duración, en milisegundos: 100 ms son 10 fotogramas por segundo, 50 ms son 20 y 40 ms son 25. Úsala para que un GIF irregular se reproduzca de forma fluida o para ajustar un GIF a un ritmo concreto. La cifra de fotogramas por segundo se actualiza mientras escribes.",
      ],
    },
    {
      heading: "El límite de velocidad de los navegadores",
      id: "limit",
      body: [
        "Los navegadores tienen una regla antigua: un fotograma de GIF con una duración de 0,01 segundos o menos se muestra durante 0,1 segundos. Protege contra los GIF escritos con duración cero, pero significa que un GIF demasiado acelerado se reproduce más lento, no más rápido. La duración más corta que se reproduce tal como está escrita es de 0,02 segundos, es decir, 50 fotogramas por segundo.",
        "Esta herramienta conoce la regla. Cuando una velocidad dejaría fotogramas por debajo de 0,02 segundos, los fotogramas vecinos se combinan hasta que cada uno dura lo suficiente, y la herramienta te dice cuántos. Así el GIF se reproduce a la velocidad que elegiste, con menos fotogramas, que es justo lo que un reproductor mostraría a ese ritmo de todos modos.",
      ],
    },
    {
      heading: "Sin pérdida siempre que se puede",
      id: "lossless",
      body: [
        "Cuando se conservan todos los fotogramas y solo cambian las duraciones, el GIF no se vuelve a codificar en absoluto. Se reescriben los valores de duración dentro del archivo y todo lo demás (los píxeles, la paleta, la compresión) queda igual byte por byte. El tamaño del archivo prácticamente no cambia y el proceso tarda un instante, incluso con GIF largos.",
        "Solo cuando hay que combinar fotogramas se vuelve a codificar el GIF. Incluso entonces se reutilizan sus propios colores siempre que quepan en una paleta, así que los fotogramas se ven igual.",
      ],
    },
    {
      heading: "Velocidades recomendadas",
      id: "tips",
      body: [
        "Los GIF de reacción y los memes suelen funcionar mejor un poco más rápidos, entre 1,25× y 1,5×. Los tutoriales y las grabaciones de pantalla pueden necesitar ir a 0,75× o 0,5× para que se pueda seguir cada paso. La cámara lenta de deportes, mascotas y chapuzones se ve mejor a 0,5× o menos cuando el original tiene muchos fotogramas; un GIF con pocos fotogramas se verá a saltos al ralentizarlo, porque no se añade nada entre ellos.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se lee y se reescribe por completo en tu navegador. Nunca se sube y no se guarda nada después de cerrar la página.",
      ],
    },
  ],

  howToTitle: "Cómo cambiar la velocidad de un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado de tu PC o de tu teléfono." },
    { title: "Ajusta la velocidad", description: "Elige una velocidad como 2× o 0,5×, o da a todos los fotogramas la misma duración." },
    { title: "Aplica y descarga", description: "Haz clic en «Cambiar velocidad», compara el resultado con el original y descárgalo." },
  ],

  features: [
    { icon: "speed", title: "Más rápido o más lento", description: "De 0,1× a 10×, o una sola duración para todos los fotogramas." },
    { icon: "check", title: "Píxeles intactos", description: "Solo se reescriben los tiempos cuando se conservan todos los fotogramas." },
    { icon: "lock", title: "Nada se sube", description: "Se cambia por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo acelero un GIF?", a: "Agrega el GIF, elige una velocidad mayor que 1×, como 1,5× o 2×, y haz clic en «Cambiar velocidad»." },
    { q: "¿Cómo ralentizo un GIF?", a: "Elige una velocidad menor que 1×, como 0,75× o 0,5×. Cada fotograma se muestra durante más tiempo." },
    { q: "¿Cambiar la velocidad baja la calidad?", a: "Normalmente, en absoluto: cuando se conservan todos los fotogramas, solo se reescriben las duraciones y los píxeles se quedan exactamente como estaban." },
    { q: "¿Por qué mi GIF no va más rápido?", a: "Los navegadores muestran los fotogramas de menos de 0,02 segundos como si duraran 0,1 segundos. A partir de ese punto, la herramienta combina fotogramas para que el GIF siga reproduciéndose a la velocidad que elegiste." },
    { q: "¿Qué significa la duración del fotograma?", a: "El tiempo que se muestra cada fotograma. 100 ms son 10 fotogramas por segundo; 50 ms son 20." },
    { q: "¿Puedo poner la misma duración a todos los fotogramas?", a: "Sí. Elige «Duración del fotograma» y escríbela en milisegundos; el mínimo es 20 ms." },
    { q: "¿Cambiará el tamaño del archivo?", a: "Casi nada cuando solo cambian los tiempos. Cuando se combinan fotogramas, el GIF pesa menos." },
    { q: "¿Se conserva la transparencia?", a: "Sí. La transparencia no se toca." },
    { q: "¿Por qué mi GIF ralentizado se ve a saltos?", a: "Ralentizar muestra los mismos fotogramas durante más tiempo; no puede inventar fotogramas intermedios. Los GIF con muchos fotogramas son los que se ralentizan con más suavidad." },
    { q: "¿Se sube mi GIF?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en un navegador del teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Puedo cambiar la velocidad de un video?", a: "No directamente. Convierte primero el clip con «Video a GIF» (allí también eliges los fotogramas por segundo) y después ajusta aquí la velocidad del GIF." },
  ],

  security:
    "Los tiempos de tu GIF se cambian por completo en tu navegador. No se sube, no se guarda ni se rastrea nada.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
