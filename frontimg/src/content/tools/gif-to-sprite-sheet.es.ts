import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.es";

/**
 * Spanish copy for /es/gif-a-sprite-sheet. Target query: «GIF a sprite sheet»
 * (neutral Spanish, ES + MX, Nov 2026). Spanish-speaking game developers use
 * the English term «sprite sheet»; «hoja de sprites» and «spritesheet» appear
 * once each in the body as the natural variants.
 */
const content: ToolPageContent = {
  toolId: "gif-to-sprite-sheet",
  locale: "es",
  name: "GIF a sprite sheet",
  tagline:
    "Coloca todos los fotogramas de un GIF animado en un único sprite sheet PNG, en cuadrícula, en una fila o en una columna, con separación y una animación CSS lista para usar. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF a sprite sheet – crear spritesheet gratis | oMyImage",
  metaDescription:
    "GIF a sprite sheet online y gratis: todos los fotogramas en un PNG, en cuadrícula, fila o columna, con separación y animación CSS. Sin subir nada.",

  intro:
    "Un sprite sheet, o hoja de sprites, coloca todos los fotogramas de una animación uno al lado del otro en una sola imagen. Los juegos y las páginas web muestran entonces un fotograma cada vez moviendo una ventana sobre la hoja, algo que carga más rápido y se controla mejor que un GIF. Con «GIF a sprite sheet» de oMyImage conviertes cualquier GIF animado en un spritesheet PNG transparente en pocos clics: elige una cuadrícula, una sola fila o una sola columna, decide cuántos fotogramas conservar y de qué tamaño, añade separación si tu motor la necesita y copia el CSS que reproduce la animación.",

  sections: [
    {
      heading: "Cuadrícula, fila o columna",
      id: "layout",
      body: [
        "Una cuadrícula reparte los fotogramas en filas y columnas, lo que mantiene la hoja más o menos cuadrada, la forma que prefieren la mayoría de los motores de juego y de las herramientas de texturas. Tú eliges el número de columnas; las filas salen del número de fotogramas.",
        "«Una fila» o «Una columna» colocan todos los fotogramas en una sola línea. Es la disposición más fácil de animar con CSS, y la herramienta escribe la hoja de estilos por ti: el tamaño del fotograma, el fondo y una animación con steps() que recorre la tira al ritmo del GIF.",
      ],
    },
    {
      heading: "Fotogramas, tamaño y separación",
      id: "options",
      body: [
        "Conservar uno de cada dos o uno de cada tres fotogramas reduce la hoja a la mitad o a un tercio y el movimiento se sigue reconociendo, algo importante en los GIF largos. El tamaño del fotograma escala cada uno al 75, 50 o 25 por ciento, útil para iconos y personajes pequeños.",
        "La separación añade un espacio de 2, 4 u 8 píxeles entre fotogramas. Los motores que suavizan o escalan las texturas pueden tomar una línea de píxeles del fotograma vecino cuando los fotogramas se tocan; un pequeño espacio evita ese sangrado. El fondo sigue siendo transparente, salvo que elijas un color.",
      ],
    },
    {
      heading: "Usar la hoja en un motor de juego",
      id: "engines",
      body: [
        "El panel de ajustes muestra el tamaño del fotograma y el número de columnas y filas, justo los datos que un motor necesita para dividir la hoja. En Phaser, Godot, Unity, GameMaker y herramientas similares, importa el PNG, indica el ancho y el alto del fotograma y añade la separación si la usaste. Se respeta el orden de los fotogramas del GIF original, de izquierda a derecha y de arriba abajo.",
        "Los GIF pueden tener una pausa distinta en cada fotograma; la mayoría de los motores reproducen una hoja a una sola velocidad de fotogramas, así que ajústala a la velocidad que quieras.",
      ],
    },
    {
      heading: "Usar la hoja con CSS",
      id: "css",
      body: [
        "Con una fila o una columna, el resultado incluye un bloque CSS corto: un elemento del tamaño de un fotograma, la hoja como fondo y una animación de keyframes con steps() para que el fondo salte de un fotograma a otro en lugar de deslizarse. Pégalo en tu hoja de estilos, dale a un elemento la clase sprite y la animación se reproduce sin ningún script.",
        "El CSS reparte la duración total del GIF de forma uniforme entre los fotogramas, así que un GIF con pausas irregulares se reproduce a un ritmo constante.",
      ],
    },
    {
      heading: "Límites de tamaño",
      id: "limits",
      body: [
        "Los navegadores no pueden crear una imagen de más de 16.384 píxeles de ancho o de alto, y Safari se detiene en unos 16,7 millones de píxeles en total. Un GIF largo en una sola fila alcanza ese límite enseguida. Cuando una hoja sería demasiado grande, la herramienta te lo indica; usa una cuadrícula, conserva menos fotogramas o elige un tamaño de fotograma menor.",
      ],
    },
    {
      heading: "Usos en la web y en el desarrollo de videojuegos",
      id: "uses",
      body: [
        "Los sprite sheets sirven para botones animados, indicadores de carga e iconos en sitios web, para personajes y efectos en juegos 2D y para prototipos en los que quieres probar una animación rápidamente. Un GIF que ya tienes suele ser el punto de partida más rápido: en lugar de exportar cada fotograma por separado, obtienes la hoja terminada en un solo paso.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica y la hoja se dibuja por completo en tu navegador. No se sube nada y no queda nada guardado cuando cierras la página. Si prefieres obtener los fotogramas como archivos separados en lugar de una sola hoja, usa «GIF a imágenes».",
      ],
    },
  ],

  howToTitle: "Cómo crear un sprite sheet a partir de un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado desde tu PC o tu teléfono." },
    { title: "Elige la disposición", description: "Cuadrícula, una fila o una columna; ajusta los fotogramas, el tamaño, la separación y el fondo." },
    { title: "Crea y descarga", description: "Haz clic en «Crear sprite sheet», copia el CSS si lo necesitas y descarga el PNG." },
  ],

  features: [
    { icon: "grid_view", title: "Cualquier disposición", description: "Cuadrícula con las columnas que elijas, una sola fila o una sola columna." },
    { icon: "code", title: "CSS incluido", description: "Una animación con steps() lista para hojas en fila o en columna." },
    { icon: "lock", title: "Sin subir nada", description: "Se crea por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo convierto un GIF en un sprite sheet?", a: "Agrega el GIF, elige cuadrícula, fila o columna y haz clic en «Crear sprite sheet». Después descarga el PNG." },
    { q: "¿Qué es un sprite sheet?", a: "Una sola imagen que contiene todos los fotogramas de una animación, colocados uno al lado del otro." },
    { q: "¿El fondo es transparente?", a: "Sí, de forma predeterminada. También puedes elegir un color sólido." },
    { q: "¿Puedo elegir el número de columnas?", a: "Sí. En la disposición en cuadrícula, escribe el número de columnas; las filas salen del número de fotogramas." },
    { q: "¿Para qué sirve la separación entre fotogramas?", a: "Algunos motores mezclan los píxeles vecinos al escalar las texturas; un pequeño espacio evita que los fotogramas se contaminen entre sí." },
    { q: "¿Cómo animo la hoja con CSS?", a: "Elige una fila o una columna y copia el CSS que aparece junto al resultado." },
    { q: "¿Por qué mi hoja es demasiado grande?", a: "Los navegadores no pueden crear imágenes de más de 16.384 píxeles por lado. Usa una cuadrícula, conserva menos fotogramas o hazlos más pequeños." },
    { q: "¿Se conservan todos los fotogramas?", a: "Sí, salvo que elijas conservar uno de cada dos o uno de cada tres." },
    { q: "¿Pierde calidad?", a: "No. Al 100 % de tamaño, los fotogramas se copian píxel a píxel en un PNG." },
    { q: "¿Se sube mi GIF a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Puedo obtener los fotogramas como imágenes separadas?", a: "Sí, con «GIF a imágenes»." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿El sprite sheet funciona en Unity o Godot?", a: "Sí. Importa el PNG e indica el tamaño de fotograma, las columnas, las filas y la separación que muestra la herramienta." },
  ],

  security:
    "Tu GIF se convierte en un sprite sheet por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // GifExportTool.tsx is shared with gif-to-webp; reuse its translations.
  ui: webp.ui,
};

export default content;
