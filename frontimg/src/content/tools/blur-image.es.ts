import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/difuminar-imagen. Target query «Difuminar imagen»
 * (Nov 2026), secondaries «desenfocar imagen» and «desenfocar foto». Neutral
 * Spanish, tú. Distinct from /es/desenfocar-fondo (AI keeps the subject sharp)
 * and /es/pixelar-cara (face detection).
 */
const content: ToolPageContent = {
  toolId: "blur-image",
  locale: "es",
  name: "Difuminar imagen",
  tagline:
    "Difumina una imagen online con un desenfoque gaussiano ajustable, vista previa en vivo y procesamiento por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Difuminar imagen – desenfocar fotos gratis | oMyImage",
  metaDescription:
    "Difuminar imagen online y gratis: desenfoca toda la foto o solo algunas zonas, pixélalas o tápalas. Vista previa en vivo, por lotes y sin subir nada.",

  intro:
    "Suaviza un fondo, anonimiza una escena o crea un efecto de vidrio esmerilado. La herramienta «Difuminar imagen» de oMyImage aplica un desenfoque gaussiano suave a tus fotos directamente en tu navegador, con un control deslizante para ajustar exactamente la intensidad que quieres y una vista previa en vivo. Desenfoca una sola imagen o un lote completo y descarga el resultado al instante. No se sube nada, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Cómo funciona un desenfoque gaussiano",
      id: "how",
      body: [
        "Cada píxel del resultado se sustituye por un promedio ponderado de los píxeles que lo rodean, en el que los vecinos cercanos cuentan más que los lejanos. La ponderación sigue una curva de campana, de ahí el nombre, y es lo que hace que el resultado se vea suave y natural en lugar de corrido en una dirección concreta.",
        "El radio controla hasta dónde llega ese promedio. Un radio pequeño mezcla solo los vecinos inmediatos y quita dureza a los bordes; uno grande atrae píxeles de todo el encuadre y disuelve la imagen en manchas de color. La relación no es lineal: duplicar el radio hace bastante más que duplicar el efecto visual.",
        "Como la operación sustituye los valores de los píxeles en lugar de taparlos, es destructiva por naturaleza. Eso es un inconveniente cuando suavizas una fotografía como efecto, y justo lo que buscas cuando quieres ocultar algo.",
      ],
    },
    {
      heading: "Difuminar para censurar",
      id: "redaction",
      body: [
        "Dibujar un recuadro negro sobre un número de cuenta bancaria en un programa de edición parece una censura, pero si el archivo conserva capas, el recuadro se puede mover, e incluso aplanado anuncia que se ocultó algo. El difuminado elimina la información en lugar de esconderla: tras exportar, los caracteres no se pueden recuperar porque ya no están representados en los píxeles.",
        "La regla práctica es juzgar el resultado con el zoom al máximo, no en una vista previa. Un difuminado que parece convincente en miniatura puede dejar el texto perfectamente legible cuando alguien abre la imagen como es debido. Si tú todavía distingues lo que decía, cualquiera puede.",
        "Para censurar una zona concreta y no toda la imagen, la herramienta «Pixelar cara» te deja dibujar zonas y mantener nítido todo lo demás, que suele ser lo que quieres cuando solo una parte de una captura de pantalla es sensible.",
      ],
    },
    {
      heading: "Desenfocar una foto como fondo para texto",
      id: "backgrounds",
      body: [
        "El texto colocado sobre una fotografía suele costar leerlo, porque la imagen de debajo tiene bordes y contrastes que compiten con las letras. Desenfocar el fondo es la solución habitual: la foto sigue aportando color, ambiente y contexto, pero nada en ella pelea con la tipografía.",
        "Por eso las imágenes desenfocadas están por todas partes detrás de titulares, pantallas de inicio de sesión, cabeceras de páginas web y portadas de presentaciones. El desenfoque debe ser más fuerte de lo que dicta el instinto: si sobrevive algún borde reconocible, acabará detrás de una letra y la hará más difícil de leer.",
        "Difuminar también reduce el tamaño del archivo, un efecto secundario útil para una imagen de fondo a ancho completo que, de otro modo, sería de lo más pesado de la página.",
      ],
    },
    {
      heading: "Simular poca profundidad de campo",
      id: "depth",
      body: [
        "Una cámara con el diafragma muy abierto deja el fondo fuera de foco y hace que el sujeto destaque. Las cámaras de los teléfonos lo imitan con el modo retrato, y se puede imitar después difuminando una imagen y superponiendo de nuevo un sujeto nítido encima.",
        "La advertencia honesta es que un desenfoque uniforme no es lo que hace un objetivo. El desenfoque óptico real aumenta con la distancia, así que una foto con poca profundidad de campo se vuelve cada vez más suave hacia el fondo de la escena, mientras que un desenfoque uniforme es igual de suave en todas partes. Si mantienes el efecto ligero, resulta convincente; si lo fuerzas, se nota lo que es.",
      ],
    },
  ],

  howToTitle: "Cómo difuminar una imagen",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Ajusta la intensidad", description: "Mueve el control de desenfoque y mira cómo cambia la vista previa en vivo al instante." },
    { title: "Aplica y descarga", description: "Haz clic en «Difuminar»: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "lens_blur", title: "Imagen completa o por zonas", description: "Suaviza toda la foto o dibuja zonas para difuminar, o inviértelo y desenfoca todo excepto esas zonas para mantener nítido tu sujeto." },
    { icon: "gradient", title: "Difuminar, pixelar o tapar", description: "Desde una bruma suave de 1 px hasta un desenfoque gaussiano intenso de 50 px, un pixelado grueso o un bloque de color sólido." },
    { icon: "burst_mode", title: "Difuminado por lotes", description: "Aplica el mismo desenfoque a un lote completo de imágenes JPG, PNG o WEBP y descárgalas en un ZIP." },
    { icon: "lock", title: "100 % privado", description: "Todo funciona en tu navegador con HTML canvas: tus imágenes nunca se suben a un servidor." },
  ],

  faqs: [
    { q: "¿Es un desenfoque gaussiano?", a: "Sí: usa el filtro de desenfoque gaussiano nativo del navegador para obtener un resultado suave y de alta calidad con cualquier intensidad." },
    { q: "¿Puedo difuminar solo una parte de la imagen?", a: "Sí. Cambia a «Por zonas» y arrastra sobre las zonas que quieres difuminar. Activa la opción de invertir para hacer lo contrario, desenfocar todo excepto esas zonas: así suavizas un fondo y mantienes nítido el sujeto." },
    { q: "¿Puedo desenfocar muchas imágenes a la vez?", a: "Sí. Añade todas las que quieras: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿Para qué sirve realmente difuminar?", a: "Sobre todo para tres cosas: ocultar datos sensibles como una dirección o un número de cuenta, crear un fondo suave para que el texto colocado encima se lea bien, y simular poca profundidad de campo para que un sujeto destaque sobre un fondo recargado." },
    { q: "¿Qué intensidad de desenfoque necesito?", a: "Para un fondo detrás de un texto, la suficiente para que ningún borde de la imagen compita con las letras, normalmente un ajuste bastante alto. Para un efecto de profundidad de campo, mucho menos, o el resultado se verá artificial. Para ocultar información, tanta que no puedas leerla con el zoom al máximo." },
    { q: "¿Se puede recuperar el detalle difuminado?", a: "En la práctica no, una vez exportada la imagen. Difuminar promedia los píxeles y descarta lo que había, a diferencia de un recuadro de color, que solo lo tapa. Por eso el difuminado es la herramienta correcta para censurar y un rectángulo dibujado no lo es." },
    { q: "¿Qué diferencia hay con la herramienta «Pixelar cara»?", a: "Esta herramienta es para la imagen completa o para zonas que dibujas tú. «Pixelar cara» añade detección automática de caras y censura por lotes, así que es mejor opción cuando el objetivo es anonimizar personas y no lograr un efecto visual." },
    { q: "¿Difuminar cambia el tamaño del archivo?", a: "Normalmente lo reduce, a veces bastante. La compresión funciona codificando las diferencias entre píxeles vecinos, y el difuminado elimina justo esas diferencias, así que queda mucho menos detalle que guardar." },
    { q: "¿Difuminar arregla una foto con ruido?", a: "Oculta el ruido suavizándolo todo, pero elimina el detalle real junto con el grano, así que el resultado se ve blando en lugar de limpio. Un desenfoque ligero puede ayudar a una imagen con mucho ruido; si te pasas, cambias un problema por otro." },
    { q: "¿Cómo desenfoco una foto en el teléfono?", a: "Abre esta página en el navegador de tu teléfono, elige la foto y ajusta la intensidad con el control deslizante. Las zonas se dibujan con el dedo; no necesitas instalar ninguna app." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El difuminado ocurre por completo en tu navegador con HTML canvas: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // BlurImageTool.tsx — module-scope FORMATS and STYLES
    "Same as original": "Igual que el original",
    "Blur|effect": "Difuminar",
    "Blur": "Difuminar",
    "Pixelate": "Pixelar",
    "Solid": "Bloque de color",
    // BlurImageTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "Couldn't read that image.": "No se pudo leer esa imagen.",
    "Draw at least one area, or switch to Whole image.":
      "Dibuja al menos una zona o cambia a «Imagen completa».",
    "Blurred 1 image.": "1 imagen difuminada.",
    "Blurred {n} images.": "{n} imágenes difuminadas.",
    "Blur failed.": "No se pudo difuminar.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "done": "listo",
    "1 image": "1 imagen",
    "{n} images": "{n} imágenes",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Remove": "Quitar",
    "Quality": "Calidad",
    "Live preview of": "Vista previa en vivo de",
    "— applied to all {n} images.": "— aplicado a las {n} imágenes.",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Arrastra para dibujar una zona, haz clic en una para seleccionarla, arrastra sus tiradores para cambiar el tamaño y pulsa Supr para borrarla.",
    "1 area.": "1 zona.",
    "{n} areas.": "{n} zonas.",
    "Clear images": "Quitar imágenes",
    "Files": "Archivos",
    "Blur settings": "Ajustes de difuminado",
    "Blur Settings": "Ajustes de difuminado",
    "Blurring…": "Difuminando…",
    "Blur {n} images": "Difuminar {n} imágenes",
    "Blur & download": "Difuminar y descargar",
    "What to blur": "Qué difuminar",
    "Whole image softens everything. Selective blurs only the areas you draw — or everything except them, with Invert on.":
      "«Imagen completa» lo suaviza todo. «Por zonas» difumina solo las zonas que dibujas o, con la opción de invertir activada, todo excepto ellas.",
    "Whole image": "Imagen completa",
    "Selective": "Por zonas",
    "Blur everything": "Difuminar todo",
    "except": "excepto",
    "these areas": "estas zonas",
    "New area shape": "Forma de las nuevas zonas",
    "Ellipse": "Elipse",
    "Rectangle": "Rectángulo",
    "Clear areas": "Borrar zonas",
    "Effect": "Efecto",
    "Blur strength": "Intensidad del difuminado",
    "Pixel size": "Tamaño del píxel",
    "Output format": "Formato de salida",
    "Fill colour": "Color de relleno",
    "JPG background": "Fondo del JPG",
  },
};

export default content;
