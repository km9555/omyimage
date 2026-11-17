import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/crear-gif.
 *
 * Target query «crear GIF» leads the h1 — Spanish speakers search the verb.
 * «hacer GIF» rides in the intro and a heading; «GIF maker» (KD 77+) is
 * contested, so it appears only in the metaTitle, the intro and one FAQ.
 */
const content: ToolPageContent = {
  toolId: "gif-maker",
  locale: "es",
  name: "Crear GIF",
  tagline:
    "Crea un GIF animado con tus imágenes en línea: ajusta la velocidad, el orden, el tamaño y el bucle con vista previa en vivo. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Crear GIF – GIF maker gratis y online | oMyImage",
  metaDescription:
    "Crear GIF con tus imágenes es fácil: este GIF maker gratis tiene vista previa en vivo de velocidad, orden, tamaño y bucle. Sin registro y sin marca de agua.",

  intro:
    "Convierte una serie de imágenes en una animación que se repite sin fin. Con «Crear GIF» de oMyImage haces un GIF animado con tus fotos directamente en el navegador, con vista previa en vivo, velocidad ajustable, tamaño de salida, control del bucle y fotogramas que puedes reordenar. Crea presentaciones, GIF de reacción o animaciones sencillas y descarga el resultado al instante. Este GIF maker no sube nada a ningún servidor, así que tus imágenes siguen siendo privadas. También puedes abrir un GIF que ya tengas y volver a editar sus fotogramas.",

  sections: [
    {
      heading: "Por qué el GIF sigue vivo",
      id: "why",
      body: [
        "Desde el punto de vista técnico, el GIF debería haber desaparecido hace décadas. Es de 1987, admite como máximo 256 colores por fotograma, comprime mal y un video hace el mismo trabajo con una fracción del tamaño y una calidad muy superior.",
        "Sobrevive por todo lo que no necesita. Un GIF se reproduce solo, se repite para siempre, no requiere reproductor, ni controles, ni que nadie haga clic, y funciona donde el video no llega: aplicaciones de chat, archivos README en plataformas de código, algunos clientes de correo, foros y cualquier sistema que lo trate simplemente como una imagen.",
        "Esa es toda la cuenta. Si tu destino acepta video, usa video. Si solo acepta imágenes, el GIF es la única opción animada que tienes.",
      ],
    },
    {
      heading: "El límite de 256 colores",
      id: "colours",
      body: [
        "El GIF guarda una paleta de 256 colores como máximo por fotograma, y cada píxel tiene que ser uno de ellos. Para ilustraciones planas, dibujos de línea, grabaciones de pantalla de interfaces y animaciones de logotipos es más que suficiente: esas imágenes rara vez tienen más colores distintos.",
        "Las fotografías son el caso difícil. Un solo fotograma de una escena real contiene miles de colores diferentes, así que el codificador tiene que elegir 256 y aproximar el resto. El tramado (dithering) esparce píxeles de colores vecinos de la paleta para simular los tonos intermedios; por eso los GIF fotográficos tienen ese aspecto moteado y algo granulado, que se nota sobre todo en el cielo y en la piel.",
        "Dentro del formato no hay nada que hacer. Si las bandas de color no son aceptables, la solución es un video, no un GIF mejor.",
      ],
    },
    {
      heading: "Cómo hacer un GIF más ligero",
      id: "size",
      body: [
        "Tres factores deciden el tamaño, y las dimensiones mandan. Cada fotograma guarda la imagen completa, así que reducir a la mitad el ancho y el alto deja una cuarta parte de los datos en cada uno. Es, con diferencia, la palanca más eficaz, y un GIF de 480 píxeles de ancho se ve perfectamente en una ventana de chat o en un README.",
        "Después viene la cantidad de fotogramas. Menos fotogramas hacen la animación algo menos fluida, pero el archivo baja en la misma proporción, y muchos bucles se ven bien a 8–12 fotogramas por segundo en lugar de 24. Recortar la secuencia para quedarte solo con los fotogramas que muestran la acción casi nunca duele.",
        "El tercero es la duración del bucle. Un bucle de dos segundos que se repite sin fin se ve mejor que uno de diez, y pesa cinco veces menos. Resistir la tentación de incluirlo todo es el mejor hábito que puedes tener aquí.",
      ],
    },
    {
      heading: "Ritmo y tiempos",
      id: "timing",
      body: [
        "La duración de cada fotograma marca el ritmo. Unos 100 ms por fotograma dan alrededor de diez fotogramas por segundo: lo bastante fluido para la mayoría de los bucles cortos, sin el costo en tamaño de una frecuencia mayor. Por debajo de unos 60 ms pagas muchos bytes por una fluidez que casi nadie va a notar.",
        "Con duraciones más largas, la animación se convierte en una presentación de diapositivas, y muchas veces eso es justo lo que quieres. Un tutorial paso a paso, varias vistas de un producto o una comparación de antes y después se leen mejor con 500–800 ms por fotograma, porque quien mira tiene tiempo de asimilar cada imagen antes de que cambie.",
        "Un detalle práctico: si el bucle se repite para siempre, mantén el último fotograma un poco más de tiempo. Le da a la vista un momento de pausa y evita que la animación se sienta frenética. Cada fotograma puede tener su propia duración, así que basta con cambiar el último.",
      ],
    },
  ],

  howToTitle: "Cómo hacer un GIF animado",
  steps: [
    { title: "Sube los fotogramas", description: "Selecciona dos o más imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Ajusta los tiempos", description: "Reordena los fotogramas, define la velocidad para todos o para cada uno y elige tamaño, ajuste, colores y bucle, todo con vista previa en vivo." },
    { title: "Crea y descarga", description: "Haz clic en «Crear GIF»: se genera en el navegador, ves la animación terminada con su tamaño y la descargas cuando te convenza." },
  ],

  features: [
    { icon: "gif_box", title: "Vista previa animada en vivo", description: "Mira tu animación a la velocidad exacta antes de exportarla, sin adivinar." },
    { icon: "speed", title: "Control total", description: "Define la duración para todos los fotogramas o para cada uno, invierte la secuencia o reprodúcela en bumerán, y elige tamaño de salida, ajuste, número de colores, bucle y fondo." },
    { icon: "lock", title: "100 % privado", description: "El GIF se codifica por completo en tu navegador: tus imágenes nunca se suben." },
  ],

  faqs: [
    { q: "¿Cuántas imágenes puedo usar?", a: "Al menos dos, y todas las que quieras: cada imagen se convierte en un fotograma de la animación." },
    { q: "¿Puedo controlar la velocidad?", a: "Sí, en dos niveles. El control de duración del fotograma fija el tiempo predeterminado de cada uno, expresado en milisegundos y en fotogramas por segundo, y cualquier fotograma puede tener su propia duración. Es útil para detenerse en una portada o en el fotograma final." },
    { q: "¿Qué pasa si mis imágenes tienen tamaños distintos?", a: "Se ajustan a un lienzo común con espacio para todas. «Contener» muestra cada fotograma completo y rellena la diferencia con tu color de fondo, «Cubrir» llena el lienzo y recorta lo que sobra, y «Estirar» fuerza un ajuste exacto." },
    { q: "¿Puedo editar un GIF que ya existe?", a: "Sí. Suelta un GIF y se separa de nuevo en sus fotogramas, cada uno con su duración original. A partir de ahí puedes reordenarlos, eliminarlos, cambiar los tiempos, invertir la secuencia o hacer un bumerán y volver a exportar." },
    { q: "¿El GIF puede tener fondo transparente?", a: "Sí: elige «Transparente» en lugar de un color y las zonas transparentes de tus imágenes se mantienen. En GIF la transparencia es de todo o nada por píxel, así que los bordes suaves y difuminados se vuelven duros. Si eso te molesta, pon un color sólido detrás." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin marca de agua, y el GIF se crea localmente en tu navegador." },
    { q: "¿Por qué mi GIF pesa tanto?", a: "Porque el GIF es un formato antiguo con una compresión débil y sin forma de descartar detalle como hacen los códecs modernos. Cada fotograma suma al archivo, y el contenido fotográfico es el peor caso. Reducir las dimensiones, usar menos fotogramas y acortar el bucle son las tres palancas que importan." },
    { q: "¿Cómo reduzco el tamaño del archivo?", a: "Primero reduce las dimensiones en píxeles: con la mitad de ancho y de alto, cada fotograma ocupa una cuarta parte. Después usa menos fotogramas y mantén el bucle corto. Un GIF de 480 píxeles de ancho y 15 fotogramas es un objetivo sensato; uno de 800 píxeles y 60 fotogramas rara vez lo es." },
    { q: "¿Por qué los colores se ven en franjas?", a: "El GIF admite como máximo 256 colores, así que todo lo que tiene degradados (cielos, tonos de piel, sombras) debe aproximarse, y los saltos entre los colores que quedan aparecen como franjas. Esta herramienta crea una sola paleta compartida para toda la animación, de modo que los colores se mantienen estables de un fotograma a otro en vez de cambiar. Los gráficos planos y las ilustraciones soportan el límite mucho mejor que las fotos." },
    { q: "¿Qué duración por fotograma debo usar?", a: "Unos 100 ms por fotograma dan aproximadamente 10 fotogramas por segundo, que se ve fluido en la mayoría de los bucles cortos. Las duraciones más cortas se ven más suaves pero multiplican el tamaño del archivo; las más largas se leen como una presentación, que suele ser la mejor opción para una secuencia paso a paso." },
    { q: "¿Puedo hacer un GIF a partir de un video?", a: "No con esta herramienta: crea un GIF con imágenes fijas que tú aportas. Para videos usa «Video a GIF». Para una serie de capturas de pantalla, vistas de un producto o una secuencia de stop motion, esta es justo la herramienta adecuada." },
    { q: "¿Me conviene un GIF o un video?", a: "Casi siempre un video, si la plataforma lo admite: un MP4 corto pesa una fracción y se ve mucho mejor. El GIF solo gana donde importa que se reproduzca solo y en cualquier parte sin reproductor: aplicaciones de chat, archivos README, algunos clientes de correo y foros antiguos." },
    { q: "¿Es un GIF maker sin marca de agua?", a: "Sí. El GIF terminado no lleva logotipo ni ninguna mención a oMyImage, y no necesitas cuenta. Tampoco hay un límite diario de GIF que puedas crear." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El GIF se codifica por completo en tu navegador con la biblioteca de código abierto gifenc, y un GIF importado también se decodifica ahí, con gifuct-js. No se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // GifMakerTool.tsx — module-scope FIT_LABELS
    "Contain": "Contener",
    "Cover": "Cubrir",
    "Stretch": "Estirar",
    "Custom": "Personalizado",
    // GifMakerTool.tsx
    "Couldn't read 1 image. It's marked and will be skipped.":
      "No se pudo leer 1 imagen. Está marcada y se omitirá.",
    "Couldn't read {n} images. They're marked and will be skipped.":
      "No se pudieron leer {n} imágenes. Están marcadas y se omitirán.",
    "Please select image files.": "Selecciona archivos de imagen.",
    "Imported 1 frame from {name}.": "Se importó 1 fotograma de {name}.",
    "Imported {n} frames from {name}.": "Se importaron {n} fotogramas de {name}.",
    "Couldn't read {name}.": "No se pudo leer {name}.",
    "Add at least two images to make an animation.": "Agrega al menos dos imágenes para crear una animación.",
    "Canvas is not supported in this browser.": "Este navegador no admite Canvas.",
    "Created a GIF from {n} frames ({size}).": "GIF creado con {n} fotogramas ({size}).",
    "Couldn't create the GIF.": "No se pudo crear el GIF.",
    "or drop two or more JPG, PNG or WEBP images here — or a GIF to re-edit":
      "o suelta aquí dos o más imágenes JPG, PNG o WebP, o un GIF para volver a editarlo",
    "Unreadable — skipped": "Ilegible: se omite",
    "Delay": "Duración",
    "Frame delay for {name}, in milliseconds": "Duración del fotograma {name}, en milisegundos",
    "Clear frames": "Quitar todos los fotogramas",
    "Remove": "Quitar",
    "GIF settings": "Ajustes del GIF",
    "Create": "Crear",
    "Building GIF…": "Creando el GIF…",
    "Live preview": "Vista previa en vivo",
    "1 frame": "1 fotograma",
    "{n} frames": "{n} fotogramas",
    "{s}s per loop": "{s} s por bucle",
    "Your GIF": "Tu GIF",
    "Finished GIF": "GIF terminado",
    "Download GIF": "Descargar GIF",
    "Animation Settings": "Ajustes de la animación",
    "Encoding frame {done} of {total}…": "Codificando fotograma {done} de {total}…",
    "Set the order with the arrows. The preview plays at your chosen speed.":
      "Define el orden con las flechas. La vista previa se reproduce a la velocidad elegida.",
    "Create GIF": "Crear GIF",
    "Frame delay": "Duración del fotograma",
    "Applies to frames without their own delay.": "Se aplica a los fotogramas sin duración propia.",
    "Playback": "Reproducción",
    "Reverse": "Invertir",
    "Boomerang": "Bumerán",
    "Looping": "Bucle",
    "Loop forever": "Repetir sin fin",
    "Play once": "Reproducir una vez",
    "Repeat a set number of times": "Repetir un número de veces",
    "Number of repeats": "Número de repeticiones",
    "Max size (longest side)": "Tamaño máximo (lado más largo)",
    "Custom max size in pixels": "Tamaño máximo personalizado en píxeles",
    "Fit": "Ajuste",
    "Contain keeps the whole frame (may add margins). Cover fills the canvas (may crop). Stretch distorts to fill exactly.":
      "«Contener» conserva el fotograma completo (puede añadir márgenes). «Cubrir» llena el lienzo (puede recortar). «Estirar» deforma la imagen para ajustarla exactamente.",
    "Colours": "Colores",
    "GIF stores at most 256 colours. Lowering this shrinks the file; flat graphics survive it far better than photos.":
      "El GIF guarda como máximo 256 colores. Bajar este valor reduce el archivo; los gráficos planos lo soportan mucho mejor que las fotos.",
    "Background (behind transparent areas)": "Fondo (detrás de las zonas transparentes)",
  },
};

export default content;
