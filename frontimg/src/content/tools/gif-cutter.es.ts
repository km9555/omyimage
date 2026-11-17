import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.es";

/**
 * Spanish copy for /es/cortar-gif. Target query: «Cortar GIF» (neutral
 * Spanish, ES + MX, Nov 2026); «acortar GIF» and «recortar duración» appear
 * in the body. «Cortar» = trim in time; «recortar» is the cropper's word, so
 * the page keeps the two apart (see the extra FAQ).
 */
const content: ToolPageContent = {
  toolId: "gif-cutter",
  locale: "es",
  name: "Cortar GIF",
  tagline:
    "Acorta un GIF animado y quédate solo con la parte que quieres: elige el primer y el último fotograma que se conservan, o corta un fragmento del medio. Gratis, en tu navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Cortar GIF – acortar un GIF online gratis | oMyImage",
  metaDescription:
    "Cortar GIF online y gratis: elige el fotograma de inicio y de fin, acorta el principio y el final o quita un fragmento del medio. En tu navegador, sin subirlo.",

  intro:
    "Los GIF sacados de videos y grabaciones de pantalla casi nunca empiezan y terminan donde deberían. Hay un segundo vacío antes de la acción, un fundido al final o un tramo central que preferirías saltarte. Con «Cortar GIF» de oMyImage acortas tu GIF fotograma a fotograma: mueve los controles de inicio y fin, revisa en las miniaturas el primer y el último fotograma de tu selección y decide si quieres conservar esa parte o eliminarla. El resultado se reproduce junto al original, con su nueva duración y su nuevo tamaño, antes de que lo descargues.",

  sections: [
    {
      heading: "Conservar una parte o eliminar una parte",
      id: "modes",
      body: [
        "«Conservarla» guarda solo los fotogramas que van del control de inicio al control de fin. Es el corte habitual: sirve para quitar el tiempo muerto de los dos extremos o para sacar un único momento de un GIF largo.",
        "«Eliminarla» hace lo contrario: borra los fotogramas que quedan entre los controles y une el resto sin saltos. Úsalo para cortar una pausa, un error o una escena que sobra en medio del GIF, manteniendo el principio y el final.",
      ],
    },
    {
      heading: "Encontrar los fotogramas exactos",
      id: "frames",
      body: [
        "Cada control muestra el número de su fotograma y el segundo de la animación en el que empieza ese fotograma. Las dos miniaturas enseñan el primer y el último fotograma de la selección, así que puedes detenerte justo donde comienza un movimiento o donde termina un texto, sin adivinar sobre una línea de tiempo.",
        "El fotograma es el paso más pequeño que tiene un GIF. Un GIF creado a partir de un video a 10 fotogramas por segundo tiene un fotograma cada décima de segundo; uno con un ritmo irregular puede mantener un fotograma durante más tiempo, y eso se ve en los tiempos que aparecen junto a los controles.",
      ],
    },
    {
      heading: "Lo que no cambia",
      id: "kept",
      body: [
        "Los fotogramas que conservas no se modifican y cada uno mantiene su propia duración, de modo que la animación que queda se reproduce exactamente igual que antes. El GIF sigue repitiéndose en bucle. Cuando sus colores caben en una sola paleta, como ocurre en la mayoría de los GIF, esos mismos colores se vuelven a escribir sin cambios; los GIF que usan una paleta distinta en cada fotograma reciben una paleta común de 256 colores elegida a partir de todos ellos, algo que rara vez se nota.",
      ],
    },
    {
      heading: "Más corto significa más ligero",
      id: "size",
      body: [
        "Cada fotograma que quitas son datos que desaparecen, por eso acortar un GIF es una de las formas más eficaces de reducir su tamaño sin tocar la calidad. Si dejas un GIF de seis segundos en sus dos mejores segundos, normalmente te ahorras cerca de dos tercios del archivo.",
        "Si aun así pesa demasiado para el sitio donde lo vas a enviar, quita los bordes con «Recortar GIF» o reduce los colores con «Comprimir GIF».",
      ],
    },
    {
      heading: "Cortes habituales",
      id: "uses",
      body: [
        "Quita los segundos vacíos que una grabadora de pantalla añade antes de empezar y después de detenerla. Deja solo el remate de un GIF de reacción. Elimina el momento en que alguien cruza por delante de la cámara. Divide un GIF largo en piezas cortas guardando varios cortes del mismo archivo, uno detrás de otro.",
        "Si quieres acortar un video antes de convertirlo en GIF, «Video a GIF» tiene sus propios controles de inicio y fin, y así el archivo es pequeño desde el principio.",
      ],
    },
    {
      heading: "GIF cortos para WhatsApp, redes y foros",
      id: "messengers",
      body: [
        "Las apps de mensajería, los foros y las redes sociales suelen fijar un límite de tamaño de archivo. Un GIF demasiado largo se rechaza o se convierte automáticamente con peor calidad. Cortar el GIF y dejar solo los segundos que importan es la forma más sencilla de quedarse por debajo de esos límites sin que la imagen pierda calidad, y además un GIF corto mantiene mejor la atención de quien lo ve.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "El GIF se decodifica, se corta y se vuelve a codificar por completo en tu navegador. Nunca se sube a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo cortar un GIF",
  steps: [
    { title: "Agrega el GIF", description: "Selecciona un GIF animado desde tu PC o tu teléfono." },
    { title: "Marca el inicio y el fin", description: "Mueve los controles hasta el primer y el último fotograma y elige si quieres conservar o eliminar esa parte." },
    { title: "Corta y descarga", description: "Haz clic en «Cortar GIF», compara el resultado con el original y descárgalo." },
  ],

  features: [
    { icon: "burst_mode", title: "Precisión de fotograma", description: "Empieza y termina en fotogramas exactos, con tiempos y miniaturas." },
    { icon: "delete", title: "Conservar o eliminar", description: "Acorta los extremos o corta un fragmento del medio." },
    { icon: "lock", title: "Sin subir nada", description: "Se corta por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo puedo acortar un GIF?", a: "Agrega el GIF, mueve los controles «Inicio» y «Final» hasta los fotogramas que quieres, deja seleccionada la opción «Conservarla» y haz clic en «Cortar GIF»." },
    { q: "¿Puedo quitar fotogramas del medio de un GIF?", a: "Sí. Selecciona la parte que quieres borrar y elige «Eliminarla»; los fotogramas de antes y de después se unen." },
    { q: "¿Cortar el GIF cambia su velocidad?", a: "No. Cada fotograma que conservas mantiene su duración original." },
    { q: "¿Pierde calidad?", a: "No. Los fotogramas conservados no se modifican y se reutilizan los colores originales siempre que quepan en una sola paleta." },
    { q: "¿Cuánto más ligero será mi GIF?", a: "Más o menos en proporción a los fotogramas que quitas: si eliminas la mitad de los fotogramas, el archivo pesa aproximadamente la mitad." },
    { q: "¿Puedo cortar un GIF por tiempo en lugar de por fotogramas?", a: "Cada control muestra el segundo en el que empieza su fotograma, así que puedes apuntar a un momento concreto; el corte, eso sí, siempre cae entre dos fotogramas." },
    { q: "¿Se mantiene la transparencia?", a: "Sí. Los GIF transparentes siguen siendo transparentes." },
    { q: "¿El GIF cortado se sigue repitiendo en bucle?", a: "Sí. Se repite igual que el original." },
    { q: "¿Puedo dividir un GIF en varias partes?", a: "Sí: corta y descarga una parte, mueve los controles y corta la siguiente del mismo GIF." },
    { q: "¿Se sube mi GIF a algún servidor?", a: "No. El GIF se corta por completo en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Qué diferencia hay entre cortar un GIF y recortar un GIF?", a: "Cortar quita fotogramas, es decir, tiempo. Recortar quita los bordes de la imagen; para eso está la herramienta «Recortar GIF»." },
  ],

  security:
    "Tu GIF se corta por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
