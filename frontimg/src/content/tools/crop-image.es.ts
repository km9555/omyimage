import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/recortar-imagen. Structure lives
 * in ToolPageShell.
 *
 * Target query "recortar imagen" (9.9K ES / 12.1K MX per month); "recortar
 * foto" is the secondary and lives in the intro, a section heading and the
 * FAQs. Addressed in "tú".
 *
 * SHAPES, ASPECTS ("Free"), OUTPUT_TARGETS ("Original") and FORMATS are module
 * scope in CropTool.tsx; their keys are maintained here by hand (§4.2). The
 * shared ToolWorkspace keys are listed too until dictionaries/es/common.ts
 * carries them.
 */
const content: ToolPageContent = {
  toolId: "crop-image",
  locale: "es",
  name: "Recortar imagen",
  tagline:
    "Recorta imágenes JPG, PNG, WEBP y GIF online: arrastra para seleccionar, fija una proporción o escribe los píxeles exactos. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },

  metaTitle: "Recortar imagen online gratis – recortar foto | oMyImage",
  metaDescription:
    "Recortar imagen en 1:1, 4:5, 16:9 o en círculo: recorta tu foto online, gírala y enderézala. JPG, PNG y WEBP en tu navegador, gratis y sin registro.",

  intro:
    "¿Quieres dejar una imagen con el encuadre perfecto o con un tamaño exacto? Con «Recortar imagen» de oMyImage arrastras una selección sobre tu foto, la fijas a una proporción como 1:1 para fotos de perfil o 16:9 para miniaturas, o escribes las dimensiones exactas en píxeles. También puedes recortar una foto en círculo, en elipse o con esquinas redondeadas, y girarla o enderezarla. El recorte se hace por completo en tu navegador, así que tus imágenes siguen siendo privadas y el resultado es instantáneo.",

  sections: [
    {
      heading: "Recortar es componer, no solo quitar bordes",
      id: "composition",
      body: [
        "La mayoría de las fotos mejora cuando se quita algo. Un recorte ajusta el encuadre alrededor del sujeto, elimina bordes que distraen, endereza un horizonte torcido y cambia el punto donde se posa la mirada. Es la edición más eficaz que existe y la única que no cuesta nada de calidad.",
        "La guía clásica es la regla de los tercios: divide el encuadre en una cuadrícula de tres por tres y coloca al sujeto sobre una de las líneas o intersecciones en lugar de justo en el centro. Es un punto de partida, no una ley —las composiciones centradas funcionan bien con simetría y en retratos—, pero es un arreglo fiable para una foto que se siente plana.",
        "El otro hábito que vale la pena adquirir es revisar los bordes antes de confirmar. Medio desconocido, un bote de basura, una mancha de cielo brillante en una esquina: todo eso le roba atención al sujeto y casi siempre desaparece con un recorte un poco más cerrado.",
      ],
    },
    {
      heading: "Proporciones fijas y dónde se exigen",
      id: "ratios",
      body: [
        "Un recorte libre es lo correcto cuando la imagen es para ti. Las proporciones fijas importan cuando otro decide la forma: cada red social, cada tienda en línea y cada tamaño de impresión espera unas proporciones concretas, y si no las respetas, el sistema recorta por ti, normalmente mal.",
        "El cuadrado (1:1) sirve para fotos de perfil y publicaciones del feed de Instagram. 4:5 es el formato vertical más alto que permite Instagram y ocupa más pantalla que un cuadrado. 9:16 es la pantalla completa vertical de Historias, Reels y TikTok. 16:9 es el formato panorámico estándar para miniaturas de YouTube y vistas previas de enlaces. Los tamaños de impresión siguen su propia lógica: 10 × 15 cm equivale a 3:2, pero 13 × 18 cm y 20 × 25 cm no, y por eso las fotos impresas en distintos tamaños pierden más o menos de los bordes.",
        "Fijar la proporción antes de arrastrar te ahorra la frustración de componer una foto con cuidado y que luego la recorten para que encaje.",
      ],
    },
    {
      heading: "Recortar una foto no le quita calidad",
      id: "quality",
      body: [
        "Los píxeles que conservas quedan intactos. Recortar no es remuestrear, así que una foto recortada es exactamente igual de nítida que la original: simplemente muestra menos de la escena. Es distinto de hacer zoom o agrandar, que inventan píxeles y suavizan el resultado.",
        "Lo que sí cambia es la cantidad total de píxeles, y eso tiene un límite práctico. Si recortas una foto de 12 megapíxeles a una esquina pequeña, quizá te queden 600 píxeles de ancho: suficiente para la pantalla de un teléfono, pero insuficiente para una impresión o un banner a todo lo ancho. Cuando sepas que vas a hacer un recorte muy cerrado, parte del original de mayor resolución que tengas.",
      ],
    },
    {
      heading: "Un orden de pasos sensato",
      id: "workflow",
      body: [
        "Primero recorta, luego redimensiona y después comprime. El recorte decide el contenido, el redimensionado decide las dimensiones en píxeles y la compresión decide el tamaño del archivo. Hacerlo en ese orden significa que cada paso trabaja con la entrada más pequeña posible y nunca comprimes píxeles que estás a punto de descartar.",
        "Aquí todo se ejecuta en tu navegador, así que pasar de una herramienta a otra solo cuesta un clic, y tus imágenes no se suben en ningún momento.",
      ],
    },
  ],

  howToTitle: "Cómo recortar una imagen",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Elige la forma y el encuadre", description: "Escoge rectángulo, cuadrado, círculo, elipse o forma redondeada, arrastra el recuadro para moverlo y los controles para cambiar su tamaño, y fija una proporción como 1:1, 4:5 o 16:9. Gira, voltea o endereza la foto si lo necesita." },
    { title: "Recorta y descarga", description: "Elige el tamaño y el formato de salida y haz clic en «Recortar y descargar»: al instante, en tu navegador, y en un ZIP si recortaste varias." },
  ],

  features: [
    {
      icon: "crop_free",
      title: "Recorte libre o proporciones fijas",
      description: "Recorta a mano alzada, escribe dimensiones exactas en píxeles o fija 1:1, 4:3, 3:2, 16:9, 4:5 y más para tamaños perfectos de redes sociales o impresión.",
    },
    {
      icon: "circle",
      title: "Formas, no solo rectángulos",
      description: "Recorta en cuadrado, círculo, elipse o rectángulo redondeado. PNG y WEBP mantienen transparente el área fuera de la forma: ideal para avatares redondos.",
    },
    {
      icon: "rotate_90_degrees_cw",
      title: "Girar, voltear y enderezar",
      description: "Gira en pasos de 90°, voltea en horizontal o vertical y nivela un horizonte torcido con el control para enderezar antes de recortar.",
    },
    {
      icon: "bolt",
      title: "Por lotes y en el navegador",
      description: "Recorta un lote completo con el mismo encuadre y descarga un ZIP, todo en tu dispositivo con HTML canvas, sin subir nada y sin esperas.",
    },
    {
      icon: "image",
      title: "Cualquier formato común",
      description: "Funciona con JPG, PNG, WEBP, GIF y BMP, y te permite exportar a JPG, PNG o WEBP con calidad ajustable.",
    },
  ],

  faqs: [
    { q: "¿La herramienta para recortar de oMyImage es gratis?", a: "Sí. Recortar imágenes es 100 % gratis, sin marca de agua en el resultado y sin necesidad de registro." },
    { q: "¿Se suben mis imágenes?", a: "No. El recorte se hace por completo en tu navegador con HTML canvas: tu imagen nunca sale de tu dispositivo." },
    { q: "¿Puedo recortar a un tamaño concreto?", a: "Sí. Escribe los valores exactos de ancho, alto, X e Y en píxeles, o fija una proporción y arrastra los controles para ajustar el tamaño a simple vista." },
    { q: "¿A qué formatos puedo exportar?", a: "JPG, PNG o WEBP. Elige «Igual que el original» para mantener el formato de entrada (GIF y BMP se exportan como PNG, porque la salida del canvas es una imagen fija)." },
    { q: "¿Recortar reduce la calidad?", a: "No. Recortar solo elimina los píxeles que quedan fuera de tu selección. Para JPG y WEBP también puedes elegir la calidad de exportación." },
    { q: "¿Qué proporción debo usar en redes sociales?", a: "1:1 para una publicación del feed de Instagram o la mayoría de las fotos de perfil, 4:5 para el formato vertical más alto de Instagram, 9:16 para Historias, Reels y TikTok, y 16:9 para miniaturas de YouTube y vistas previas de enlaces en Twitter/X. Los banners de LinkedIn son inusualmente anchos, de aproximadamente 4:1." },
    { q: "¿En qué se diferencia recortar de redimensionar?", a: "Recortar elimina partes de la imagen y conserva los píxeles restantes en su tamaño original. Redimensionar conserva toda la imagen y cambia cuántos píxeles tiene. Recorta para cambiar lo que aparece en el encuadre; redimensiona para cambiar lo grande que es el archivo." },
    { q: "¿Puedo recortar una foto a un tamaño exacto en píxeles?", a: "Sí. Fija una proporción para controlar la forma y luego usa «Redimensionar imagen» para llegar a las dimensiones exactas en píxeles. Hacerlo en ese orden evita la deformación que se produce al forzar las dimensiones directamente." },
    { q: "¿Recortar elimina los datos EXIF?", a: "Sí, como efecto secundario: la imagen se vuelve a codificar desde el canvas, que no conserva los metadatos. Eso incluye las coordenadas GPS, algo que suele ser una ventaja al publicar fotos. Si eliminar metadatos es tu objetivo real, el eliminador de EXIF lo hace de forma explícita." },
    { q: "¿Puedo recortar varias imágenes a la vez?", a: "Sí. Agrega todas las que quieras y se aplica el mismo recorte a todas, justo lo que necesitas para fotos de producto o cualquier serie tomada con la misma disposición. El recorte se guarda de forma proporcional, así que imágenes de distintos tamaños reciben el encuadre equivalente, y todo se descarga junto en un ZIP." },
    { q: "¿Puedo recortar una foto en círculo o en otras formas?", a: "Sí: tienes recortes en rectángulo, cuadrado, círculo, elipse y con esquinas redondeadas. Si exportas en PNG o WEBP, el área fuera de la forma queda realmente transparente, perfecto para un avatar redondo. JPG no puede guardar transparencia, así que ahí eliges un color para las esquinas." },
    { q: "¿Puedo girar o enderezar mientras recorto?", a: "Sí. Gira en pasos de 90°, voltea en horizontal o vertical y usa el control para enderezar y nivelar un horizonte. Al enderezar, la imagen se amplía lo justo para que no aparezcan cuñas vacías en las esquinas." },
    { q: "¿Cómo recorto una foto para un currículum o una foto tipo carnet?", a: "Para un currículum, fija un formato vertical como 4:5 o 3:4 y deja algo de espacio sobre la cabeza. Para fotos de pasaporte o documentos de identidad con medidas estrictas, como 35 × 45 mm, es mejor usar nuestra herramienta «Foto carnet», y siempre conviene revisar los requisitos vigentes de la autoridad correspondiente." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El recorte se hace por completo en tu navegador con HTML canvas: nunca se sube nada a un servidor. Al cerrar la pestaña, la imagen desaparece de la memoria. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // CropTool.tsx
    "Couldn't read {name}.": "No se pudo leer {name}.",
    "Cropped 1 image.": "Se recortó 1 imagen.",
    "Cropped {n} images.": "Se recortaron {n} imágenes.",
    "Crop failed.": "No se pudo recortar.",
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "o suelta aquí imágenes JPG, PNG, WEBP, GIF o BMP",
    "Preview {name}": "Vista previa de {name}",
    "done": "listo",
    "Drag inside the box to move it, or a handle to resize · output {w} × {h} px":
      "Arrastra dentro del recuadro para moverlo o desde un control para cambiar su tamaño · salida {w} × {h} px",
    "— the same crop is applied to all {n} images": "— se aplica el mismo recorte a las {n} imágenes",
    "Clear images": "Quitar imágenes",
    "Files": "Archivos",
    "Crop settings": "Configuración del recorte",
    "Crop Settings": "Configuración del recorte",
    "Crop|verb": "Recortar",
    "Cropping…": "Recortando…",
    "Output: {w} × {h} px — nothing is uploaded.": "Salida: {w} × {h} px; no se sube nada.",
    "Crop {n} images": "Recortar {n} imágenes",
    "Crop & download": "Recortar y descargar",
    "Shape": "Forma",
    "Circle and Ellipse cut away the corners — export as PNG or WEBP to keep them transparent. JPG has no transparency, so those corners take the background colour instead.":
      "Círculo y Elipse eliminan las esquinas: exporta en PNG o WEBP para que queden transparentes. JPG no admite transparencia, así que esas esquinas toman el color de fondo.",
    "Corner radius": "Radio de las esquinas",
    "Aspect ratio": "Proporción",
    "Rotate & flip": "Girar y voltear",
    "Rotate left": "Girar a la izquierda",
    "Rotate right": "Girar a la derecha",
    "Flip horizontally": "Voltear en horizontal",
    "Flip vertically": "Voltear en vertical",
    "Straighten": "Enderezar",
    "Fine rotation for levelling a horizon. The image is zoomed just enough that no empty corners appear.":
      "Giro fino para nivelar un horizonte. La imagen se amplía lo justo para que no aparezcan esquinas vacías.",
    "Zoom": "Zoom", // i18n-same
    "Selection (px)": "Selección (px)",
    "Exact pixel position and size of the crop on the image, after any rotation.":
      "Posición y tamaño exactos del recorte en la imagen, en píxeles, después de cualquier giro.",
    "Width": "Ancho",
    "Height": "Alto",
    "Output": "Salida",
    "Output size": "Tamaño de salida",
    "Corner fill (JPG has no transparency)": "Relleno de esquinas (JPG no admite transparencia)",
    "Outside the shape": "Fuera de la forma",
    "1 image": "1 imagen",
    "{n} images": "{n} imágenes",
    // SHAPES / ASPECTS / OUTPUT_TARGETS / FORMATS (module scope, §4.2)
    "Rectangle": "Rectángulo",
    "Square": "Cuadrado",
    "Circle": "Círculo",
    "Ellipse": "Elipse",
    "Rounded": "Redondeado",
    "Same as original": "Igual que el original",
    "Free": "Libre",
    "Original": "Original", // i18n-same
    // Shared (ToolWorkspace / upload)
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Please select image files.": "Selecciona archivos de imagen.",
    "Quality": "Calidad",
    "Remove": "Quitar",
  },
};

export default content;
