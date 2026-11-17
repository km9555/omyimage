import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/convertir-imagen-a-hd (variant of upscale-image,
 * Real-ESRGAN — preset mode "hd": pick HD / Full HD / 4K, the AI scale is
 * chosen for you). Target query «Convertir imagen a HD» (Nov 2026),
 * secondaries «imagen HD» and «foto HD». Neutral Spanish, tú. Angle as in
 * English: what "HD" means in pixels. Extra Spanish-only section on printing.
 */
const content: ToolPageContent = {
  toolId: "image-to-hd",
  locale: "es",
  name: "Convertir imagen a HD",
  tagline:
    "Un conversor a HD que añade resolución real: elige HD, Full HD o 4K y la IA lleva tu foto exactamente a ese tamaño mientras reconstruye bordes y texturas, para que una imagen pequeña o de baja resolución se convierta en una imagen HD limpia. Gratis y sin marca de agua.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Convertir imagen a HD – foto HD, Full HD y 4K | oMyImage",
  metaDescription:
    "Convertir imagen a HD con IA: aumenta la resolución a HD, Full HD o 4K con bordes reconstruidos, no estirados. Foto HD gratis y sin marca de agua.",

  intro:
    "«HD» es una cantidad de píxeles: 1280 × 720 para HD, 1920 × 1080 para Full HD y 3840 × 2160 para 4K. Una foto guardada de un chat, una captura de pantalla recortada o una foto de un teléfono antiguo suele ser mucho más pequeña, y estirarla en un editor solo agranda el desenfoque. Este conversor usa un modelo de IA de escalado que predice el detalle fino que tendría una versión más grande, así que los bordes salen nítidos en lugar de suaves. Sube una imagen, elige el tamaño que necesitas (HD, Full HD o 4K) y descarga el resultado exactamente con ese tamaño en su lado más largo. Así conviertes una foto a HD sin que se vea pixelada.",

  sections: [
    {
      heading: "Qué significa HD en una foto",
      id: "hd-pixels",
      body: [
        "Las resoluciones de video se convirtieron en los nombres cotidianos de los tamaños de imagen. Una imagen es «HD» cuando mide al menos unos 1280 píxeles de ancho, «Full HD» con 1920 píxeles y «4K» con unos 3840. Una foto de 640 × 480 ampliada 2× pasa a 1280 × 960, es decir, HD; 3× da 1920 × 1440, más que Full HD; 4× llega a 2560 × 1920.",
        "Así que la ampliación adecuada depende del punto de partida, y por eso aquí eliges el objetivo y no el factor: el conversor calcula el menor factor de IA que lo alcanza y ajusta el resultado a exactamente 1280, 1920 o 3840 píxeles en el lado más largo. Una imagen que ya es más grande que el objetivo vuelve con el tamaño del objetivo, más limpia. Y si ni siquiera 4× es suficiente (una miniatura de 400 píxeles no puede convertirse honestamente en 4K), recibes el resultado a 4× en lugar de una imagen estirada.",
      ],
    },
    {
      heading: "Por qué redimensionar no convierte una imagen en HD",
      id: "vs-resize",
      body: [
        "Un redimensionado normal reparte los píxeles existentes sobre una cuadrícula más grande y mezcla entre ellos. La imagen crece, pero no aparece información nueva, así que cada borde se convierte en una transición suave y el texto se ve emborronado.",
        "Un escalador con IA ha aprendido, a partir de millones de pares de imágenes, cómo suele verse el detalle fino a mayor resolución: cómo deberían resolverse el pelo, los ladrillos, el follaje y las letras. Dibuja ese detalle mientras amplía. El resultado no es un original recuperado, pero se percibe como una imagen realmente más nítida, que es lo que de verdad se busca al convertir una imagen a HD.",
      ],
    },
    {
      heading: "Imágenes que se convierten bien a HD y las que no",
      id: "good-sources",
      body: [
        "Las fotos de producto, los paisajes, las ilustraciones, los logos, las capturas de videojuegos y la mayoría de los retratos se convierten muy bien, porque su detalle sigue patrones que el modelo conoce. Las fotos muy comprimidas, como las imágenes reenviadas varias veces por apps de mensajería, también mejoran de forma notable: el modelo elimina buena parte de los bloques mientras amplía.",
        "Las caras diminutas en una foto de grupo, el texto muy pequeño y las imágenes muy desenfocadas son los casos difíciles. El modelo las hará más grandes y más limpias, pero no puede saber qué decía realmente una matrícula ilegible, y no debería fingirlo. Para una foto suave o algo borrosa, la página «Mejorar nitidez de foto» explica qué puedes esperar.",
      ],
    },
    {
      heading: "Dónde se necesitan versiones en HD",
      id: "uses",
      body: [
        "Los motivos típicos son un banner de perfil o de canal que la plataforma muestra en Full HD, una miniatura o imagen de portada que debe medir al menos 1280 píxeles de ancho, una foto familiar antigua que quieres imprimir más grande, una imagen de producto que un marketplace rechaza por pequeña o una imagen para una presentación que se ve pixelada en el proyector.",
      ],
    },
    {
      heading: "Foto HD para imprimir",
      id: "print",
      body: [
        "Para imprimir, lo que cuenta son los píxeles por centímetro. A 300 dpi, una foto de 10 × 15 cm necesita unos 1200 × 1800 píxeles; una de 13 × 18 cm, unos 1500 × 2100. Full HD, con 1920 píxeles en el lado largo, alcanza para 10 × 15 cm; para 13 × 18 cm o más, elige 4K.",
        "Antes de enviar la imagen a imprimir, revísala con el zoom al máximo, sobre todo las caras y el texto, porque la impresión muestra detalles que en la pantalla del teléfono pasan desapercibidos.",
      ],
    },
  ],

  howToTitle: "Cómo convertir una imagen a HD",
  steps: [
    { title: "Sube la imagen", description: "Selecciona un JPG, PNG o WEBP; una imagen cada vez." },
    { title: "Elige HD, Full HD o 4K", description: "Full HD (1920 píxeles) sirve para la mayoría de los usos; el factor de IA se elige por ti." },
    { title: "Convierte y descarga", description: "La IA amplía la imagen y mejora su nitidez en unos segundos; compara el antes y el después y descárgala." },
  ],

  features: [
    { icon: "hd", title: "Resolución HD real", description: "HD, Full HD o 4K en el lado más largo, con bordes y texturas reconstruidos en lugar de estirados." },
    { icon: "visibility", title: "Antes y después", description: "Arrastra el control de comparación para ver exactamente qué cambió antes de descargar." },
    { icon: "verified_user", title: "Sin marca de agua", description: "Gratis, sin registro y sin nada estampado en tu imagen." },
  ],

  faqs: [
    { q: "¿Cómo convierto una imagen a HD?", a: "Sube la imagen, elige HD, Full HD o 4K y pulsa el botón para convertir a HD. La IA devuelve una versión más nítida con ese tamaño, que puedes comparar y descargar." },
    { q: "¿Qué resolución se considera HD?", a: "Aproximadamente 1280 × 720 píxeles o más es HD, 1920 × 1080 es Full HD y unos 3840 × 2160 es 4K. Elige la que necesites y el conversor se encarga del factor." },
    { q: "¿Puedo convertir una foto de WhatsApp a HD?", a: "Sí, y es uno de los mejores usos: las fotos reenviadas son pequeñas y tienen bloques, y el escalador las amplía y además limpia la mayor parte del daño de la compresión." },
    { q: "¿Es lo mismo que «Mejorar calidad de imagen»?", a: "Usa el mismo motor de IA. Aquí eliges el tamaño final (HD, Full HD o 4K) y el factor se elige por ti; en «Mejorar calidad de imagen» eliges tú 2×, 3× o 4×." },
    { q: "¿Una imagen 4K será un archivo muy grande?", a: "Puede serlo: 4K son unos ocho millones de píxeles. Si después la necesitas más ligera, comprímela; el detalle extra resiste bien una compresión normal." },
    { q: "¿Puedo convertir a HD un fotograma de video o una captura de pantalla?", a: "Sí. Las capturas y los fotogramas son imágenes normales; el texto y los bordes de las interfaces, en particular, quedan mucho más nítidos que con un redimensionado normal." },
    { q: "¿Se sube mi imagen?", a: "Sí: el modelo de IA funciona en nuestro servidor, así que la imagen se envía por una conexión cifrada. El resultado queda tras un enlace de descarga privado y se borra automáticamente en menos de una hora; nunca se comparte ni se reutiliza." },
    { q: "¿Puedo ampliar una foto para imprimirla?", a: "Sí. Para imprimir a 300 dpi, una foto de 10 × 15 cm necesita unos 1200 × 1800 píxeles, así que Full HD o 4K suelen bastar. Revisa el resultado con el zoom al máximo antes de imprimir, sobre todo en las caras." },
  ],

  security:
    "Esta herramienta funciona en nuestro servidor porque el modelo de IA necesita más memoria de la que ofrece una pestaña del navegador, y usa el motor de código abierto Real-ESRGAN. Tu imagen viaja por una conexión cifrada, el resultado se guarda solo un breve tiempo tras un enlace de descarga privado y se borra automáticamente en menos de una hora, y nada se comparte nunca ni se usa para entrenar modelos.",
};

export default content;
