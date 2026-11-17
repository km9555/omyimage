import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/imagen-blanco-y-negro.
 *
 * Primary query "Imagen en blanco y negro"; secondary "foto blanco y negro",
 * "pasar foto a blanco y negro". "Escala de grises" is the technical term and
 * is used in the body where precision matters.
 */
const content: ToolPageContent = {
  toolId: "grayscale-image",
  locale: "es",
  name: "Imagen en blanco y negro",
  tagline:
    "Convierte imágenes a escala de grises (blanco y negro) online, con intensidad ajustable, vista previa en vivo y procesamiento por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Imagen en blanco y negro – gratis y online | oMyImage",
  metaDescription:
    "Convierte una imagen en blanco y negro: pasa tus fotos a blanco y negro online, elige la intensidad con un control deslizante y procesa varias a la vez. Gratis.",

  intro:
    "Dale a tus fotos un aire atemporal en blanco y negro. La herramienta Imagen en blanco y negro de oMyImage quita el color de cualquier imagen directamente en tu navegador, con un control de intensidad que va desde un leve desvanecido hasta una conversión monocroma completa. Pasa una foto a blanco y negro o procesa un lote entero y descárgalo al instante: no se sube nada, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Qué hace realmente la conversión",
      id: "how",
      body: [
        "Una imagen en color guarda tres números por píxel: rojo, verde y azul. La escala de grises guarda uno solo: el brillo. La conversión tiene que decidir cuánto aporta cada canal de color a ese único valor, y la respuesta no es un reparto a partes iguales, porque la vista humana no es igual de sensible a los tres.",
        "Percibimos el verde como mucho más brillante que el azul con la misma intensidad, así que la ponderación estándar se apoya mucho en el verde, moderadamente en el rojo y muy poco en el azul. Promediar los tres canales por igual es el método ingenuo y da resultados claramente apagados: cielos demasiado claros y vegetación demasiado oscura.",
        "La consecuencia que conviene conocer es que dos colores muy distintos pueden producir el mismo gris. El brillo es una sola dimensión donde el color tenía tres, así que la información se pierde de verdad, no solo se deja a un lado.",
      ],
    },
    {
      heading: "Por qué una foto en blanco y negro puede ser mejor",
      id: "aesthetics",
      body: [
        "Quitar el color quita una distracción. Lo que queda es la composición, el contraste, la textura y la luz, y por eso el retrato y la fotografía documental nunca han abandonado el blanco y negro. Un fondo recargado de colores que compiten entre sí suele calmarse en escala de grises, y un rostro gana estructura cuando el tono de piel deja de dominar.",
        "También rescata fotos con mal color. La iluminación mixta (luz de día por una ventana y bombillas incandescentes en el techo) genera dominantes de color difíciles de corregir y que se notan enseguida. En escala de grises, el problema simplemente no existe.",
        "Las imágenes que salen perdiendo son aquellas en las que el color transmitía el significado: una puesta de sol, un producto cuyo atractivo es que viene en verde azulado, un gráfico con categorías codificadas por color. Si el color es el tema, convertir la imagen tira el tema a la basura.",
      ],
    },
    {
      heading: "Documentos, escaneos y tamaño del archivo",
      id: "documents",
      body: [
        "Fotografiar un documento con el teléfono produce una imagen a todo color de algo que en esencia es texto negro sobre papel blanco: tres canales gastados en registrar lo que necesitaba uno. Pasarlo a escala de grises suele reducir el archivo a la mitad, a veces más, sin perder nada de legibilidad.",
        "Además, ordena el resultado. Las fotos de papel hechas con el teléfono captan la dominante de color de la luz de la habitación, así que la página sale ligeramente amarilla, azul o verde según la bombilla. La escala de grises elimina eso por completo y hace que un conjunto de páginas fotografiadas en días distintos se vea uniforme.",
        "Combina bien con crear un PDF: primero pasa las imágenes a blanco y negro, luego únelas en un documento, y el resultado pesa una fracción de la versión en color, que a menudo es la diferencia entre cumplir un límite de subida o no.",
      ],
    },
    {
      heading: "Impresión y accesibilidad",
      id: "print",
      body: [
        "Convertir a propósito, en lugar de dejar que lo haga el controlador de la impresora, te da el control sobre cómo se traducen los tonos. También evita una molestia práctica: muchas impresoras de oficina cobran tarifa de color por cualquier página que lleve color, así que un solo logotipo en color convierte todo un documento en un trabajo a color.",
        "También hay un aspecto de accesibilidad. Ver tu trabajo en escala de grises es la prueba más rápida para saber si depende solo del color para transmitir información. Si un gráfico se vuelve ilegible, o un campo obligatorio de un formulario deja de distinguirse, eso es exactamente lo que experimenta un lector con daltonismo, y la solución es añadir una etiqueta, un patrón o una forma, no cambiar la paleta.",
      ],
    },
  ],

  howToTitle: "Cómo pasar una imagen a blanco y negro",
  steps: [
    { title: "Subir", description: "Selecciona una o varias imágenes, o arrástralas al área de trabajo." },
    { title: "Ajustar la intensidad", description: "Usa el control deslizante para un blanco y negro completo o una desaturación parcial, con vista previa en vivo." },
    { title: "Convertir y descargar", description: "Haz clic en «Blanco y negro y descargar»: una imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "filter_b_and_w", title: "Intensidad ajustable", description: "Pasa a blanco y negro total o desatura parcialmente con un control suave de 0 a 100 % y vista previa instantánea." },
    { icon: "burst_mode", title: "Conversión por lotes", description: "Aplica la misma escala de grises a todo un lote de imágenes JPG, PNG o WEBP y descárgalas en un ZIP." },
    { icon: "lock", title: "100 % privado", description: "Todo se ejecuta en tu navegador con canvas HTML: tus imágenes nunca se suben a un servidor." },
  ],

  faqs: [
    { q: "¿Qué hace el control de intensidad?", a: "Al 100 % la imagen queda totalmente en blanco y negro; los valores más bajos mezclan los colores originales con gris para un aspecto desvaído y parcialmente desaturado." },
    { q: "¿Puedo pasar muchas imágenes a blanco y negro a la vez?", a: "Sí. Agrega todas las que quieras: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
    { q: "¿Qué formatos se admiten?", a: "JPG, PNG y WEBP, y puedes elegir el formato de salida independientemente del de entrada." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿La escala de grises reduce el tamaño del archivo?", a: "Normalmente sí, y a veces de forma drástica. Al quitar la información de color, el codificador tiene menos que guardar; en concreto, un PNG puede bajar a la mitad o más. En documentos fotografiados y escaneos es una de las formas más fáciles de ahorrar tamaño." },
    { q: "¿Blanco y negro es lo mismo que escala de grises?", a: "No exactamente, aunque los términos se usen indistintamente. La escala de grises conserva 256 tonos del negro al blanco. El blanco y negro puro es un bit por píxel (negro puro o blanco puro, sin nada en medio), que es lo que producen los faxes y algunos escáneres, y se ve muy diferente." },
    { q: "¿Puedo recuperar el color después?", a: "No. Pasar a escala de grises descarta los canales de color de forma permanente, así que guarda el original si crees que lo vas a necesitar. Esta herramienta trabaja sobre una copia y nunca modifica el archivo de tu disco, pero la imagen en blanco y negro exportada es un resultado sin vuelta atrás." },
    { q: "¿Por qué algunos colores acaban en el mismo tono de gris?", a: "Porque la escala de grises mide el brillo, no el tono. Un rojo saturado y un verde saturado pueden tener un brillo percibido casi idéntico, así que se convierten prácticamente en el mismo gris. Por eso un gráfico colorido puede volverse ilegible en escala de grises: las categorías se distinguían solo por el tono." },
    { q: "¿Ayuda a la hora de imprimir?", a: "A menudo, sí. Si conviertes tú mismo, decides cómo se traducen los tonos en lugar de dejarlo en manos del controlador de la impresora. Además, evitas que te cobren impresión a color por un documento que solo tiene un logotipo en color en la primera página." },
    { q: "¿Puedo convertir un lote a escala de grises?", a: "Sí. Agrega todas las imágenes que quieras, se convierten todas y te las devolvemos en un solo ZIP, que es lo habitual con un conjunto de páginas escaneadas o una galería uniforme." },
    { q: "¿Puedo pasar a blanco y negro una foto hecha con el teléfono?", a: "Sí. La herramienta funciona en el navegador del teléfono: elige la foto de tu galería, ajusta la intensidad y guarda la foto en blanco y negro directamente en el dispositivo. Tampoco en ese caso se sube nada." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La conversión a escala de grises se hace por completo en tu navegador con canvas HTML: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // GrayscaleTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "Clear files": "Borrar archivos",
    "Remove": "Quitar",
    "Live preview of": "Vista previa en vivo de",
    "Grayscale Settings": "Ajustes de blanco y negro",
    "Grayscale settings": "Ajustes de blanco y negro",
    "Intensity": "Intensidad",
    "100% = fully black & white. Lower values desaturate partially.":
      "100 % = blanco y negro total. Los valores más bajos desaturan parcialmente.",
    "— applied to all {n} images.": "— se aplica a las {n} imágenes.",
    "Output format": "Formato de salida",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    "Convert": "Convertir",
    "Converting…": "Convirtiendo…",
    "Grayscale {n} images": "Pasar {n} imágenes a blanco y negro",
    "Grayscale & download": "Blanco y negro y descargar",
    "Converted 1 image to grayscale.": "Se convirtió 1 imagen a escala de grises.",
    "Converted {n} images to grayscale.": "Se convirtieron {n} imágenes a escala de grises.",
    "Grayscale failed.": "Error al convertir a escala de grises.",
    "done": "listo",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
  },
};

export default content;
