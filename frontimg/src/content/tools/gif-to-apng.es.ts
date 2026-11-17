import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.es";

/**
 * Spanish copy for /es/gif-a-apng. Target query: «GIF a APNG» (neutral
 * Spanish, ES + MX, Nov 2026; low volume). «PNG animado» is used in the body
 * as the plain Spanish description of the format.
 */
const content: ToolPageContent = {
  toolId: "gif-to-apng",
  locale: "es",
  name: "GIF a APNG",
  tagline:
    "Convierte GIF animados en APNG, el PNG animado: se conservan cada píxel, cada fotograma y cada pausa, a menudo en un archivo más pequeño. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF a APNG – PNG animado sin pérdida, gratis | oMyImage",
  metaDescription:
    "Convierte GIF a APNG online y gratis: PNG animado sin pérdida, con todos los fotogramas y pausas, y a menudo más ligero. En tu navegador, sin subir nada.",

  intro:
    "APNG es PNG con animación: el mismo formato sin pérdida que un PNG normal, con bloques adicionales que guardan los fotogramas y sus tiempos. Todos los navegadores actuales lo reproducen, y los programas que no entienden la animación simplemente muestran el primer fotograma como un PNG normal. El conversor «GIF a APNG» de oMyImage escribe tu GIF como APNG sin cambiar ni un solo píxel, guarda cada fotograma de la forma más compacta posible y muestra el tamaño junto al original para que veas cuánto has ganado.",

  sections: [
    {
      heading: "Por qué APNG en lugar de GIF",
      id: "why",
      body: [
        "GIF comprime con LZW, un método de los años ochenta; PNG usa DEFLATE, que comprime los mismos píxeles con más eficacia. Por eso, convertir un GIF a APNG a menudo lo hace más pequeño sin ninguna pérdida, sobre todo en dibujos animados, logotipos, iconos y grabaciones de pantalla con grandes zonas de un solo color.",
        "Además, APNG puede guardar color completo y bordes suaves y semitransparentes, algo que GIF no puede. Un GIF convertido a APNG conserva exactamente los colores y los bordes duros que tenía, pero si más adelante editas los fotogramas, APNG no te obligará a volver a los 256 colores.",
      ],
    },
    {
      heading: "Cómo se construye el archivo",
      id: "how",
      body: [
        "Cuando todos los fotogramas caben en 256 colores, lo que casi siempre ocurre con un GIF, el APNG usa una paleta, de modo que cada píxel ocupa un byte, igual que en el GIF. Si no, guarda RGBA completo. Cada fotograma posterior al primero registra solo el rectángulo que cambió, y un fotograma idéntico al anterior se suma a la duración de este.",
        "Cada fotograma mantiene su duración exacta, en milisegundos, y la animación se repite como lo hacía el GIF: sin fin, una sola vez o un número concreto de veces. Las zonas transparentes siguen siendo transparentes.",
      ],
    },
    {
      heading: "Dónde se reproduce APNG",
      id: "support",
      body: [
        "Chrome, Edge, Firefox, Safari y Opera reproducen APNG, tanto en equipos de escritorio como en teléfonos, así que un APNG funciona en cualquier lugar de una página web donde pueda ir una imagen. LINE usa APNG para sus stickers animados, y muchas herramientas de stickers y emojis lo aceptan.",
        "Los visores de imágenes, los editores y las apps de chat que solo conocen el PNG normal muestran el primer fotograma en lugar de la animación. Esa es la alternativa integrada de APNG, pero también significa que, para el correo electrónico y la mayoría de las apps de mensajería, el GIF sigue siendo la opción más segura.",
      ],
    },
    {
      heading: "La extensión del archivo",
      id: "extension",
      body: [
        "El archivo descargado termina en .png, la extensión que esperan los navegadores y la mayoría de los sitios; la animación está dentro del archivo, no en su nombre. Si un servicio pide expresamente un archivo .apng, cambia la extensión: el contenido es el mismo.",
      ],
    },
    {
      heading: "¿APNG o WebP?",
      id: "webp",
      body: [
        "Los dos son sustitutos modernos del GIF. El WebP sin pérdida suele ser todavía más pequeño, y el WebP con pérdida, mucho más, pero WebP no se puede crear en Safari y algunas herramientas no lo aceptan. APNG es solo sin pérdida, se puede crear en cualquier navegador, Safari incluido, y se abre como un PNG fijo allí donde la animación no es compatible. Para un sitio web, prueba los dos y quédate con el más pequeño; para stickers, usa lo que pida la plataforma.",
      ],
    },
    {
      heading: "Primero edita, después convierte",
      id: "prepare",
      body: [
        "El conversor mantiene el GIF exactamente como está, así que haz cualquier edición antes de convertir. Usa «Recortar GIF» para la forma y «Redimensionar GIF» para un tamaño exacto en píxeles, ya que las plataformas de stickers suelen fijar ambos, y «Cortar GIF» para quedarte solo con los fotogramas que necesitas. Esas herramientas conservan los colores propios del GIF, de modo que el APNG queda idéntico, píxel a píxel, a lo que preparaste.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica y el APNG se escribe por completo en tu navegador. No se sube nada y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo convertir un GIF a APNG",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado desde tu PC o tu teléfono." },
    { title: "Convierte", description: "Haz clic en «Convertir a APNG»; se conservan cada píxel y cada fotograma." },
    { title: "Descarga", description: "Compara el tamaño con el del GIF y descarga el APNG." },
  ],

  features: [
    { icon: "image", title: "Sin pérdida", description: "Cada píxel, fotograma y pausa pasa sin cambios." },
    { icon: "compress", title: "A menudo más ligero", description: "La compresión de PNG suele superar a la de GIF con los mismos fotogramas." },
    { icon: "lock", title: "Sin subir nada", description: "Se convierte por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo convierto un GIF a APNG?", a: "Agrega el GIF y haz clic en «Convertir a APNG». El PNG animado se reproduce exactamente igual que el GIF." },
    { q: "¿Qué es APNG?", a: "Animated PNG, es decir, PNG animado: un archivo PNG que además contiene fotogramas de animación y sus tiempos." },
    { q: "¿APNG es sin pérdida?", a: "Sí. Cada píxel de cada fotograma se guarda exactamente." },
    { q: "¿APNG pesa menos que GIF?", a: "A menudo, gracias a una mejor compresión, sobre todo en gráficos y grabaciones de pantalla. La herramienta muestra la diferencia." },
    { q: "¿Se mantiene la transparencia?", a: "Sí. Las zonas transparentes siguen siendo transparentes." },
    { q: "¿Por qué mi APNG parece una imagen fija?", a: "El programa en el que lo abriste no es compatible con APNG y muestra el primer fotograma. Ábrelo en un navegador para ver la animación." },
    { q: "¿Por qué el archivo termina en .png?", a: "Los archivos APNG usan la extensión PNG. Cámbiala a .apng solo si un servicio te lo pide." },
    { q: "¿Funciona en Safari?", a: "Sí. Safari reproduce APNG y también puede crearlo con esta herramienta." },
    { q: "¿Se sube mi GIF a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono, también en iPhone y iPad." },
    { q: "¿Uso APNG o WebP?", a: "WebP suele ser más pequeño; APNG funciona en más herramientas y en Safari. Prueba los dos si el tamaño importa." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Puedo usar APNG en correos electrónicos?", a: "Mejor no. Muchos programas de correo muestran solo el primer fotograma. Para el correo, el GIF sigue siendo la opción segura." },
  ],

  security:
    "Tu GIF se convierte por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // GifExportTool.tsx is shared with gif-to-webp; reuse its translations.
  ui: webp.ui,
};

export default content;
