import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.es";

/**
 * Spanish copy for /es/pixelar-imagen. Target query: «Pixelar imagen»
 * (neutral Spanish, ES + MX, Nov 2026); secondary «pixelar foto» in the
 * metaTitle, a heading and an FAQ; «pixel art» stays in English, as Spanish
 * speakers search it.
 */
const content: ToolPageContent = {
  toolId: "pixelate-image",
  locale: "es",
  name: "Pixelar imagen",
  tagline:
    "Convierte cualquier foto en bloques de píxeles: desde un mosaico sutil hasta un pixel art retro llamativo. Elige el tamaño del bloque, mira la vista previa en vivo y pixela muchas imágenes a la vez. Gratis, en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Pixelar imagen – pixelar foto online gratis | oMyImage",
  metaDescription:
    "Pixelar imagen online y gratis: elige el tamaño del bloque y convierte cualquier foto en mosaico o en pixel art retro. Varias imágenes a la vez, sin subir nada.",

  intro:
    "Pixelar una imagen sustituye sus detalles por bloques cuadrados de color, y cada bloque toma el color de la zona que cubre. Es el aspecto de los videojuegos antiguos, de los mosaicos de azulejos y de una imagen que se ha hecho ilegible a propósito. Con «Pixelar imagen» de oMyImage eliges exactamente qué tamaño tienen esos bloques: arrastra el control y la vista previa se actualiza al instante, indicando más o menos cuántos bloques caben a lo largo de la imagen. Agrega una imagen o un lote y descárgalas pixeladas en el mismo formato o en otro.",

  sections: [
    {
      heading: "Elegir el tamaño del bloque",
      id: "size",
      body: [
        "El tamaño del bloque se mide en píxeles de la imagen original, de 2 a 120. Los bloques pequeños, de 4 a 8 píxeles, dan un mosaico suave en el que todavía se reconoce la imagen; de 16 a 32 píxeles, una foto se convierte en una escena de pixel art clara; por encima, la imagen queda reducida a un puñado de cuadrados de colores.",
        "Como el ajuste está en píxeles, el mismo valor se ve más fino en una foto grande que en una pequeña. La nota bajo el control indica cuántos bloques caben a lo largo del lado más largo, una guía más fiable que el número en sí.",
      ],
    },
    {
      heading: "Pixelar fotos: pixel art y estilo retro",
      id: "art",
      body: [
        "Para un aspecto de videojuego de 8 o 16 bits, busca entre 40 y 80 bloques a lo largo del lado más largo. Los temas sencillos con formas marcadas (un logotipo, una mascota delante de una pared lisa, el perfil de una ciudad) son los que mejor se pixelan. Si el resultado se ve apagado, sube antes el contraste con «Ajustar brillo de imagen»; el pixel art se lee mejor con colores claros y saturados.",
        "Guarda el pixel art en PNG. La compresión JPG emborrona los bordes nítidos de los bloques y añade manchas dentro de los cuadrados lisos, lo que arruina el efecto.",
      ],
    },
    {
      heading: "Pixelar para ocultar cosas",
      id: "privacy-note",
      body: [
        "Pixelar es una forma muy popular de ocultar caras, matrículas y textos, pero los bloques pequeños no son seguros: a veces una cara o una palabra pixelada se puede reconocer o reconstruir. Si pixelas para proteger a alguien, usa bloques grandes para que no quede ninguna estructura. Para ocultar solo una parte de la imagen (caras, una matrícula, un nombre), usa «Pixelar cara», que detecta los rostros y te permite pixelar o difuminar solo las zonas que elijas.",
      ],
    },
    {
      heading: "Otros usos",
      id: "uses",
      body: [
        "Las fotos pixeladas son buenos fondos para texto, porque las formas se mantienen pero el detalle ya no compite con las palabras. También sirven como vistas previas sin spoilers, como imágenes para juegos de preguntas en los que hay que adivinar qué se ve, y como punto de partida para patrones de punto de cruz, de cuentas y de mosaico, en los que cada bloque se convierte en una puntada o una pieza.",
      ],
    },
    {
      heading: "Muchas imágenes, cualquier formato",
      id: "batch",
      body: [
        "Agrega todas las imágenes que necesites; a todas se les aplica el mismo tamaño de bloque. Se aceptan JPG, PNG y WebP, y el resultado mantiene el formato original salvo que elijas otro. Las zonas transparentes siguen siendo transparentes en PNG y WebP. Una sola imagen se descarga directamente; varias llegan en un archivo ZIP.",
      ],
    },
    {
      heading: "Pixelado y tamaño del archivo",
      id: "size-note",
      body: [
        "Una imagen pixelada contiene mucho menos detalle, así que se comprime muy bien: un PNG muy pixelado puede pesar una fracción del original, lo que lo hace práctico para fondos ligeros y marcadores de posición. Para reducirlo todavía más sin perder la nitidez de los bloques, mantén el PNG y pásalo por «Comprimir imagen».",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada imagen se pixela por completo en tu navegador. No se sube nada a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo pixelar una imagen",
  steps: [
    { title: "Agrega imágenes", description: "Selecciona una o varias imágenes JPG, PNG o WebP." },
    { title: "Ajusta el tamaño del bloque", description: "Arrastra el control hasta que la vista previa tenga el aspecto que buscas." },
    { title: "Pixela y descarga", description: "Haz clic en «Pixelar imagen» para descargarla, o un ZIP si son varias." },
  ],

  features: [
    { icon: "apps", title: "Cualquier tamaño de bloque", description: "Desde un mosaico fino hasta un puñado de cuadrados, de 2 a 120 píxeles." },
    { icon: "visibility", title: "Vista previa en vivo", description: "Mira el efecto mientras arrastras y mantén pulsado para comparar." },
    { icon: "lock", title: "Sin subir nada", description: "Se pixela por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo pixelo una imagen?", a: "Agrega la imagen, ajusta el tamaño del bloque con el control y haz clic en «Pixelar imagen». La imagen pixelada se descarga al momento." },
    { q: "¿Qué tamaño de bloque uso?", a: "De 4 a 8 px para un mosaico sutil, de 16 a 32 px para pixel art, y más grande para que la imagen quede abstracta." },
    { q: "¿Pixelar es seguro para ocultar caras o textos?", a: "Solo con bloques grandes. Los bloques pequeños a veces se pueden reconocer; «Pixelar cara» ofrece opciones más potentes para partes de una imagen." },
    { q: "¿Puedo pixelar solo una parte de la imagen?", a: "Aquí no: esta herramienta pixela la imagen entera. «Pixelar cara» puede pixelar las zonas que elijas." },
    { q: "¿Qué formato es mejor para pixel art?", a: "PNG. Mantiene nítidos los bordes de los bloques; JPG los emborrona." },
    { q: "¿Puedo pixelar varias imágenes a la vez?", a: "Sí. Todas se pixelan con el mismo tamaño de bloque y se descargan en un ZIP." },
    { q: "¿Se mantiene la transparencia?", a: "Sí, si guardas en PNG o WebP." },
    { q: "¿Se puede deshacer el pixelado?", a: "No: el detalle se pierde. Conserva tu archivo original." },
    { q: "¿Se sube mi imagen a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono." },
    { q: "¿Puedo usarlo para patrones de punto de cruz?", a: "Sí. Pixela la foto y cada bloque será una puntada." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Cómo pixelo una foto con estilo retro?", a: "Elige un tamaño de bloque con el que quepan unos 40 a 80 bloques a lo largo del lado más largo, sube antes el contraste si hace falta y guarda en PNG." },
  ],

  security:
    "Tus imágenes se pixelan por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
