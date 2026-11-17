import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.es";

/**
 * Spanish copy for /es/efecto-glitch. Target query: «Efecto glitch» (neutral
 * Spanish, ES + MX, Nov 2026; no secondary in the brief). «Efecto glitch para
 * fotos» is used in the metaTitle and once in the body as the natural
 * long-tail form.
 */
const content: ToolPageContent = {
  toolId: "glitch-effect",
  locale: "es",
  name: "Efecto glitch",
  tagline:
    "Dale a cualquier foto el aspecto de una pantalla averiada: separación de color rojo y azul, franjas desplazadas y líneas de escaneo, con un control de intensidad y un botón para mezclar. Gratis, en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Efecto glitch para fotos – online y gratis | oMyImage",
  metaDescription:
    "Efecto glitch online y gratis: aplica separación de color, franjas desplazadas y líneas de escaneo a cualquier foto, con control de intensidad y vista previa.",

  intro:
    "El aspecto glitch se inspira en los fallos del hardware: una señal de video que se desliza, una pantalla que se rasga, colores que se separan. Hoy es un estilo propio en portadas de discos, pósteres, miniaturas y fotos de perfil. El «Efecto glitch» de oMyImage lo construye con tres ingredientes que puedes activar y desactivar (separación de color, franjas desplazadas y líneas de escaneo), un control para la intensidad y un botón que vuelve a mezclar las franjas hasta que la composición te convence. Todo se ve en vivo en la vista previa antes de descargar.",

  sections: [
    {
      heading: "Los tres ingredientes",
      id: "parts",
      body: [
        "La separación de color desplaza el canal rojo hacia un lado y el azul hacia el otro, y deja bordes de color a lo largo de cada contorno: la parte más reconocible del efecto, como un proyector mal alineado. Las franjas desplazadas cortan tiras horizontales finas de la imagen y las empujan hacia un lado, como si la señal hubiera dado un salto. Las líneas de escaneo oscurecen una banda de cada dos, la textura de un monitor antiguo o de una cinta VHS.",
        "Usa los tres para un glitch completo, o solo uno: la separación de color sola le da a un retrato un borde sutil de gafas 3D, y las franjas solas parecen una impresión digital rasgada.",
      ],
    },
    {
      heading: "Intensidad y mezcla",
      id: "strength",
      body: [
        "La intensidad escala todo a la vez: cuánto se separan los colores, cuántas franjas se mueven y cuánto se desplazan, y lo oscuras que son las líneas de escaneo. Entre 20 y 40 aproximadamente da un toque de daño; de 70 en adelante el efecto es fuerte y caótico.",
        "Las franjas se colocan al azar. Si una tira cae sobre una cara o tapa un detalle importante, haz clic en «Mezclar las franjas» para obtener otra disposición. La disposición se mantiene fija hasta que vuelves a mezclar, así que la vista previa y la descarga siempre coinciden.",
      ],
    },
    {
      heading: "Dónde funciona",
      id: "uses",
      body: [
        "Las imágenes con glitch quedan bien en portadas musicales, miniaturas de gaming y tecnología, carteles de eventos, diseños cyberpunk y vaporwave, y fotos de perfil que deben destacar en una lista. Las formas marcadas y el contraste alto son los que mejor aceptan el efecto; una foto muy cargada puede convertirse en ruido. Un texto grueso dentro de la imagen es un buen objetivo: la separación hace que las letras parezcan vibrar.",
        "Para que el glitch se mueva, crea varias versiones con mezclas distintas y combínalas en una animación corta con «Crear GIF».",
      ],
    },
    {
      heading: "Muchas imágenes, un mismo estilo",
      id: "batch",
      body: [
        "Agrega varias imágenes y los mismos ajustes y la misma disposición se aplican a todas, adaptados al tamaño de cada una, para que una serie de publicaciones o portadas comparta un mismo estilo. Se aceptan JPG, PNG y WebP; el resultado mantiene su formato salvo que elijas otro, y las zonas transparentes siguen siendo transparentes en PNG y WebP. Varias imágenes se descargan juntas en un ZIP.",
      ],
    },
    {
      heading: "Consejos de glitch art",
      id: "tips",
      body: [
        "Coloca el tema principal un poco descentrado, para que las franjas atraviesen el fondo y no una cara. Las imágenes oscuras con acentos brillantes son las que mejor muestran la separación de color. Una foto con un poco de contraste de más (prueba antes «Ajustar brillo de imagen») da un resultado más nítido y más digital, y guardar en PNG conserva los bordes definidos de las franjas y los contornos de color.",
      ],
    },
    {
      heading: "Efecto glitch para fotos, portadas y miniaturas",
      id: "formats-social",
      body: [
        "Para Instagram, miniaturas de YouTube o portadas de Spotify, lo mejor es llevar primero la imagen al formato de destino y aplicar el efecto glitch después. Así las franjas quedan donde se verán al final y no se cortan al recortar. Un efecto sutil, con una intensidad de 20 a 40, suele verse más fuerte en una miniatura pequeña que a tamaño completo.",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada imagen se procesa por completo en tu navegador. No se sube nada a ningún servidor y no queda nada guardado cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo aplicar un efecto glitch a una foto",
  steps: [
    { title: "Agrega imágenes", description: "Selecciona una o varias imágenes JPG, PNG o WebP." },
    { title: "Ajusta el glitch", description: "Fija la intensidad, elige los efectos y mezcla las franjas hasta que te convenza." },
    { title: "Aplica y descarga", description: "Haz clic en «Aplicar glitch» para descargar la imagen, o un ZIP si son varias." },
  ],

  features: [
    { icon: "gradient", title: "Tres efectos glitch", description: "Separación de color, franjas desplazadas y líneas de escaneo, cada uno activable." },
    { icon: "visibility", title: "Vista previa en vivo", description: "Mira cada cambio al instante y vuelve a mezclar hasta que encaje." },
    { icon: "lock", title: "Sin subir nada", description: "Se procesa por completo en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo aplico un efecto glitch a una foto?", a: "Agrega la foto, fija la intensidad, elige los efectos y haz clic en «Aplicar glitch»." },
    { q: "¿Qué es la separación de color?", a: "Las partes roja y azul de la imagen se desplazan en direcciones opuestas y dejan bordes de color en los contornos." },
    { q: "¿Puedo cambiar dónde caen las franjas?", a: "Sí. Haz clic en «Mezclar las franjas» para obtener una nueva disposición al azar." },
    { q: "¿La descarga se verá como la vista previa?", a: "Sí. La disposición se mantiene hasta que vuelves a mezclar y se escala a la imagen completa." },
    { q: "¿Puedo hacer un glitch sutil?", a: "Sí. Usa una intensidad de 20 a 40, o activa solo la separación de color." },
    { q: "¿Puedo hacer un glitch animado?", a: "Crea varias versiones con mezclas distintas y combínalas con «Crear GIF»." },
    { q: "¿Puedo aplicar el glitch a varias imágenes a la vez?", a: "Sí. Comparten los mismos ajustes y se descargan en un ZIP." },
    { q: "¿Se mantiene la transparencia?", a: "Sí, si guardas en PNG o WebP." },
    { q: "¿Se sube mi imagen a algún servidor?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en el navegador de cualquier teléfono." },
    { q: "¿Qué imágenes funcionan mejor?", a: "Formas marcadas, texto grueso y contraste alto. Las fotos muy cargadas pueden convertirse en ruido." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
    { q: "¿En qué formato guardo?", a: "PNG conserva los bordes nítidos de las franjas y los contornos de color; JPG los suaviza un poco." },
  ],

  security:
    "Tus imágenes se procesan por completo en tu navegador. No se sube, no se guarda y no se rastrea nada.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
