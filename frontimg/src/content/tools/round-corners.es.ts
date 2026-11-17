import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.es";

/**
 * Spanish copy for /es/redondear-esquinas-imagen. Target query: «Redondear
 * esquinas» (neutral Spanish, ES + MX, Nov 2026); secondary «bordes
 * redondeados» in the metaTitle, intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "round-corners",
  locale: "es",
  name: "Redondear esquinas de imagen",
  tagline:
    "Dale a tus imágenes esquinas redondeadas, con el radio que quieras y en las esquinas que quieras, con bordes transparentes en PNG o un color de fondo a tu elección. Muchas imágenes a la vez. Gratis, en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Redondear esquinas – bordes redondeados gratis | oMyImage",
  metaDescription:
    "Redondear esquinas online y gratis: bordes redondeados para JPG, PNG y WebP, con cualquier radio, transparentes o de color. Varias a la vez, sin subir nada.",

  intro:
    "Las esquinas redondeadas hacen que una imagen parezca terminada: los iconos de apps, las tarjetas de los sitios web, las diapositivas y las publicaciones en redes las usan. Con «Redondear esquinas de imagen» de oMyImage recortas las esquinas de imágenes JPG, PNG y WebP con el radio que elijas, en las cuatro esquinas o solo en algunas, y las partes recortadas quedan transparentes para que la imagen se vea limpia sobre cualquier fondo. Consigue bordes redondeados mirando cómo cambia la vista previa mientras arrastras, y después descarga una imagen o un lote entero.",

  sections: [
    {
      heading: "Elegir el radio",
      id: "radius",
      body: [
        "El radio se fija como una proporción del lado más corto de la imagen, así que el mismo ajuste da el mismo aspecto en un icono pequeño y en un banner grande. Entre un 5 y un 10 por ciento es el redondeo suave de una tarjeta web; del 15 al 25 por ciento parece un icono de app; el 50 por ciento convierte un rectángulo en una píldora y una imagen cuadrada en un círculo perfecto.",
        "Desmarca esquinas para redondear solo algunas: las dos de arriba para una pestaña o la cabecera de una tarjeta, o una sola para una forma de bocadillo o de etiqueta.",
      ],
    },
    {
      heading: "Esquinas transparentes o de color",
      id: "background",
      body: [
        "Las esquinas transparentes necesitan un formato que admita transparencia, por eso la salida es PNG de forma predeterminada; WebP también sirve y pesa menos. Si la imagen va a ir sobre una página, una diapositiva o un documento con un fondo conocido, puedes rellenar las esquinas con ese color, lo que además te permite guardar en JPG.",
        "JPG no puede guardar transparencia de ningún modo. Cuando eliges JPG, las esquinas se rellenan con el color de fondo, blanco salvo que elijas otro.",
      ],
    },
    {
      heading: "Dónde ayudan los bordes redondeados",
      id: "uses",
      body: [
        "Las capturas de pantalla con esquinas redondeadas se ven cuidadas en documentación, publicaciones y diapositivas. Las fotos de producto y los retratos del equipo resultan más cercanos en un sitio web. Los iconos de apps y juegos necesitan cuadrados redondeados; las fotos de perfil suelen quedar mejor en círculo. Las miniaturas de una cuadrícula se ven más ordenadas cuando todas comparten el mismo radio: agrega la serie completa de una vez y así será.",
      ],
    },
    {
      heading: "Círculos y otras formas",
      id: "shapes",
      body: [
        "Un radio del 50 por ciento en una imagen cuadrada da un círculo exacto. Para un círculo a partir de una foto rectangular, controlando qué parte queda dentro, usa «Recortar foto en círculo», que te permite mover el círculo y cambiar su tamaño. Para añadir un marco o un borde de color alrededor de la imagen redondeada, usa después «Agregar borde a imagen».",
      ],
    },
    {
      heading: "Muchas imágenes a la vez",
      id: "batch",
      body: [
        "Agrega todas las imágenes que necesites; a cada una se le aplican el mismo radio y las mismas esquinas, adaptados a su tamaño. La vista previa muestra la primera imagen, cada archivo recibe su propio botón de descarga cuando termina, y varios se descargan juntos en un archivo ZIP.",
      ],
    },
    {
      heading: "Esquinas iguales en todo un diseño",
      id: "consistency",
      body: [
        "Usa el mismo radio en todo un diseño: las tarjetas, los botones y las imágenes que comparten radio de esquina parecen hechos para ir juntos. Como aquí el radio es una proporción del lado más corto, con un solo ajuste todo el lote queda proporcionado. Si quieres el mismo radio en píxeles en imágenes de tamaños distintos, dales antes un mismo tamaño con «Redimensionar imagen».",
      ],
    },
    {
      heading: "Imágenes con esquinas redondeadas en presentaciones y documentos",
      id: "office",
      body: [
        "PowerPoint, Keynote y Word pueden recortar imágenes con esquinas redondeadas, pero la forma suele perderse en cuanto copias la imagen a otro programa, la exportas a PDF o la subes a un sitio web. En cambio, un PNG con las esquinas ya redondeadas y transparentes se ve igual en todas partes: en diapositivas, correos, documentos y redes sociales.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada imagen se redondea por completo en tu navegador. No se sube nada a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo redondear las esquinas de una imagen",
  steps: [
    { title: "Agrega imágenes", description: "Selecciona una o varias imágenes JPG, PNG o WebP." },
    { title: "Ajusta el radio", description: "Arrastra el control del radio y elige las esquinas y el fondo." },
    { title: "Redondea y descarga", description: "Haz clic en «Redondear esquinas» para descargar un PNG, o un ZIP si son varias." },
  ],

  features: [
    { icon: "rounded_corner", title: "Cualquier radio", description: "Desde un borde suave hasta una píldora o un círculo, en las esquinas que elijas." },
    { icon: "visibility", title: "Bordes transparentes", description: "PNG y WebP mantienen las esquinas transparentes." },
    { icon: "lock", title: "Sin subir nada", description: "Se redondea por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo redondeo las esquinas de una imagen?", a: "Agrega la imagen, ajusta el radio y haz clic en «Redondear esquinas». Se descarga un PNG con las esquinas transparentes." },
    { q: "¿Por qué el resultado es un PNG?", a: "Las esquinas transparentes necesitan PNG o WebP. Elige JPG para rellenar las esquinas con un color." },
    { q: "¿Puedo redondear solo algunas esquinas?", a: "Sí. Desmarca las esquinas que quieras mantener rectas." },
    { q: "¿Cómo hago un círculo?", a: "Usa un radio del 50 % en una imagen cuadrada. Para otras fotos, «Recortar foto en círculo» te permite colocar el círculo." },
    { q: "¿Las esquinas pueden ser de un color en lugar de transparentes?", a: "Sí. Elige un color de fondo o guarda en JPG." },
    { q: "¿Puedo redondear varias imágenes a la vez?", a: "Sí. A cada una se le aplica el mismo radio y se descargan en un ZIP." },
    { q: "¿Qué radio usan los iconos de apps?", a: "Entre un 20 y un 25 por ciento del lado para el aspecto moderno de cuadrado redondeado." },
    { q: "¿Reduce la calidad?", a: "No. PNG conserva cada píxel; solo se recortan las esquinas." },
    { q: "¿Se sube mi imagen a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono." },
    { q: "¿Puedo añadir también un borde?", a: "Sí. Usa después «Agregar borde a imagen» sobre la imagen redondeada." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿Puedo usarlo para fotos de perfil?", a: "Sí. Una foto cuadrada al 50 % se convierte en un círculo, y las esquinas transparentes permiten ponerla sobre cualquier fondo." },
    { q: "¿Los bordes redondeados se mantienen en Word o PowerPoint?", a: "Sí. Como PNG con esquinas transparentes, la imagen se ve igual en cualquier programa, también después de exportarla a PDF." },
  ],

  security:
    "Tus imágenes se redondean por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
