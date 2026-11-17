import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/mejorar-nitidez-foto (variant of upscale-image,
 * Real-ESRGAN at 2×, returned at the photo's own size by default — preset
 * mode "unblur"). Target query «Mejorar nitidez de foto» (Nov 2026),
 * secondaries «quitar desenfoque» and «nitidez imagen». Neutral Spanish, tú.
 * Honest like the English: mild blur and compression yes, motion blur and a
 * badly missed focus no. Extra Spanish-only section on chat-app photos.
 */
const content: ToolPageContent = {
  toolId: "unblur-image",
  locale: "es",
  name: "Mejorar nitidez de foto",
  tagline:
    "Mejora la nitidez de fotos suaves, algo borrosas o pixeladas con IA y recupéralas del mismo tamaño, solo que más nítidas. El modelo reconstruye bordes y texturas; funciona mejor con desenfoques leves y compresión excesiva. Gratis y sin marca de agua.",
  category: { id: "ai", label: "IA de imagen" },

  metaTitle: "Mejorar nitidez de foto – quitar desenfoque | oMyImage",
  metaDescription:
    "Mejorar nitidez de foto con IA: quita el desenfoque leve, el pixelado y los artefactos JPG, en tamaño original o al doble. Gratis y sin marca de agua.",

  intro:
    "La mayoría de las fotos que llamamos «borrosas» en realidad están suaves: un poco desenfocadas, tomadas con poca luz, reducidas y vueltas a guardar por una app de mensajería o ampliadas a partir de un original pequeño. Esos son justo los defectos con los que se entrena un modelo de IA de restauración de imágenes. Sube la foto y el modelo la vuelve a dibujar al doble de resolución (bordes, texturas y líneas finas) y luego te la devuelve en su tamaño original, para que encaje justo donde estaba la anterior, sin la mayor parte de la suavidad y los bloques. No puede rescatar todas las imágenes: las secciones de abajo explican qué tipos de desenfoque corrige y cuáles no.",

  sections: [
    {
      heading: "Los desenfoques que corrige",
      id: "fixable",
      body: [
        "La suavidad causada por un ligero error de enfoque, por objetivos baratos y sensores pequeños, y por la reducción de ruido con poca luz. El pixelado de las fotos que se guardaron pequeñas y luego se ampliaron. Los bloques y el emborronado de una compresión JPG fuerte, que es lo que le pasa a una foto cada vez que se reenvía por una app de mensajería.",
        "En todos estos casos las formas siguen ahí, solo que no están dibujadas con nitidez. El modelo reconoce las formas (un ojo, una letra, una hoja, una costura) y las dibuja nítidas, y a la vista eso se percibe como una foto sin desenfoque.",
      ],
    },
    {
      heading: "Los que no puede corregir",
      id: "limits",
      body: [
        "El desenfoque de movimiento fuerte, cuando la cámara o el sujeto se movieron y cada borde se ha corrido en una estela, y las fotos muy desenfocadas, en las que los detalles se han fundido en manchas. En esos casos la información se ha perdido de verdad, y cualquier herramienta que diga recuperarla se la está inventando.",
        "Este modelo dejará esas fotos algo más limpias, pero no convertirá una cara o una matrícula ilegible en una legible, ni está diseñado para eso. Si un resultado parece verosímil pero incorrecto (una cara ligeramente distinta a la de la persona), tómalo como una ilustración, no como una prueba.",
      ],
    },
    {
      heading: "Cómo conseguir el mejor resultado",
      id: "tips",
      body: [
        "Empieza siempre por la mejor copia que tengas: el original de la galería es mejor que una captura de pantalla, y esta es mejor que una copia reenviada. Recorta lo que no necesites antes de subirla, para que el modelo se concentre en la parte que importa.",
        "Mantén el tamaño original para las fotos que vas a usar tal cual. Desactívalo para una imagen pequeña o pixelada que quieras más grande: así obtienes el resultado más nítido al doble de tamaño. Compara el resultado con el control deslizante antes de descargar; en las caras, mira primero los ojos y el nacimiento del pelo.",
      ],
    },
    {
      heading: "Fotos antiguas y escaneadas",
      id: "old-photos",
      body: [
        "Los escaneos de copias antiguas y las fotos tomadas de un álbum impreso suelen estar más suaves y granuladas que realmente borrosas, y eso le va muy bien al modelo: elimina buena parte del grano y vuelve a dibujar los contornos.",
        "No repara rayones, dobleces, manchas ni colores desvaídos: eso es daño en la copia, no falta de resolución, y necesita retoque. Escanea a la máxima resolución que ofrezca tu escáner y luego mejora la nitidez aquí.",
      ],
    },
    {
      heading: "Fotos reenviadas por WhatsApp y otras apps",
      id: "messaging",
      body: [
        "Cuando una foto pasa por WhatsApp, Telegram o una red social, se reduce y se vuelve a comprimir. Tras varios reenvíos aparecen bloques en las zonas lisas, halos alrededor del texto y una pérdida general de detalle. Es uno de los casos en los que mejor funciona: el modelo limpia los artefactos y redibuja los bordes.",
        "Si puedes, pide a quien te la envió el archivo original o mándala como documento en lugar de como foto, porque así la app no la comprime. Si solo tienes la copia reenviada, súbela tal cual, sin hacer antes una captura de pantalla, que añadiría otra capa de pérdida.",
      ],
    },
  ],

  howToTitle: "Cómo mejorar la nitidez de una foto",
  steps: [
    { title: "Sube la foto borrosa", description: "Selecciona un JPG, PNG o WEBP; el archivo original, no una captura, si lo tienes." },
    { title: "Mantén el tamaño o amplía", description: "El resultado conserva el tamaño de tu foto; desactiva esa opción para obtenerla al doble de tamaño." },
    { title: "Mejora y descarga", description: "Compara el antes y el después con el control deslizante y luego descarga la imagen más nítida." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Restauración con IA", description: "Reconstruye bordes, texturas y letras en lugar de mezclar píxeles, en el tamaño de tu propia foto." },
    { icon: "visibility", title: "Antes y después honesto", description: "Un control de comparación muestra exactamente qué cambió, para que juzgues el resultado tú mismo." },
    { icon: "verified_user", title: "Gratis y sin marca de agua", description: "Sin cuenta y sin nada estampado en el resultado." },
  ],

  faqs: [
    { q: "¿Cómo mejoro la nitidez de una foto online?", a: "Sube la foto y pulsa el botón para mejorar la nitidez. Compara el resultado con el control deslizante y descárgalo si te convence: vuelve con el mismo tamaño que tu foto." },
    { q: "¿Puede arreglar una foto en la que se movió la cámara?", a: "Solo en parte. El desenfoque de movimiento corre el detalle en estelas que ningún modelo puede revertir de verdad; obtendrás una imagen más limpia, pero no la foto nítida que la cámara no captó." },
    { q: "¿Puede hacer reconocible una cara borrosa?", a: "No, ni debería. En una cara que ya es reconocible mejora mucho la nitidez; en una irreconocible solo estaría adivinando, así que el resultado no debe usarse para identificar a nadie." },
    { q: "¿Sirve para despixelar imágenes?", a: "Sí: una imagen pequeña y llena de bloques es uno de sus mejores casos. Desactiva la opción de mantener el tamaño original para que el detalle extra tenga espacio: los bloques se sustituyen por bordes suaves y texturas al doble de tamaño." },
    { q: "¿La foto mejorada tiene el mismo tamaño que el original?", a: "Sí, de forma predeterminada. El modelo calcula el detalle al doble de resolución y el resultado se escala de vuelta al tamaño de tu foto. Desactiva la opción de mantener el tamaño original para descargarla a 2×." },
    { q: "¿Arregla el texto borroso en la foto de un documento?", a: "Un texto ligeramente suave queda claramente más nítido. Un texto demasiado borroso para leerse en el original normalmente sigue siendo ilegible." },
    { q: "¿Se sube mi foto?", a: "Sí, a nuestro servidor, porque el modelo necesita más memoria de la que tiene un navegador. El resultado se guarda solo un breve tiempo tras un enlace privado y se borra automáticamente en menos de una hora." },
    { q: "¿En qué se diferencia del control de nitidez de una app de fotos?", a: "Un control de nitidez clásico solo aumenta el contraste en los bordes que ya existen; si te pasas, aparecen halos claros y ruido. El modelo de IA vuelve a dibujar bordes y texturas y elimina los artefactos de compresión en lugar de reforzarlos." },
  ],

  security:
    "La mejora de nitidez se ejecuta en nuestro servidor con el motor de código abierto Real-ESRGAN. Tu foto viaja por una conexión cifrada, el resultado se guarda solo un breve tiempo tras un enlace de descarga privado y se borra automáticamente en menos de una hora, y nada se comparte ni se reutiliza.",
};

export default content;
