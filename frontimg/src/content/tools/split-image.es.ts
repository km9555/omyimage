import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/dividir-imagen (parent of instagram-grid-maker).
 *
 * Primary query "Dividir imagen" (3.6K/mo, MX); secondary "cortar imagen en
 * partes", "dividir foto". The piece file names (_r1_c1) come from the code,
 * only the example stem is localised. The ui block also carries the
 * Instagram-mode labels, which instagram-grid-maker reuses.
 */
const content: ToolPageContent = {
  toolId: "split-image",
  locale: "es",
  name: "Dividir imagen",
  tagline:
    "Corta cualquier imagen en partes iguales (dos mitades, tres tiras, una cuadrícula de 3 × 3) o en mosaicos de un tamaño exacto en píxeles. Todas las partes llegan en un solo ZIP, nombradas en orden. Gratis y en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },
  variantsHeading: "Dividir una imagen o crear una cuadrícula para Instagram",

  metaTitle: "Dividir imagen – cortar imagen en partes online | oMyImage",
  metaDescription:
    "Dividir imagen online: corta una imagen en partes iguales, a la mitad, en cuadrícula de 3 × 3 o en mosaicos en píxeles, todo en un ZIP. Gratis, sin subidas.",

  intro:
    "Dividir una imagen es cortarla en imágenes más pequeñas que vuelven a encajar a la perfección. La herramienta Dividir imagen de oMyImage lo hace de dos maneras: con una cuadrícula igual, en la que eliges el número de columnas y filas, o con mosaicos de tamaño fijo, en los que eliges el ancho y el alto de cada parte en píxeles. Unas líneas en la vista previa muestran exactamente dónde caen los cortes, cada parte va numerada y el conjunto completo se descarga en un solo ZIP; o haz clic en cualquier parte para guardar solo esa. Agrega varias imágenes y cada una se divide de la misma manera.",

  sections: [
    {
      heading: "Cuadrícula igual o tamaño de mosaico",
      id: "modes",
      body: [
        "«Cuadrícula igual» divide la imagen en el número de partes que pidas: 2 columnas y 1 fila dan una mitad izquierda y otra derecha, 1 columna y 3 filas dan tres tiras horizontales, y 3 × 3 da nueve partes. Las partes son tan iguales como lo permiten los píxeles: cuando el ancho no se divide exactamente, algunas partes tienen un píxel más de ancho, nunca una astilla fina al final.",
        "«Tamaño de mosaico» funciona al revés: defines el tamaño de cada parte, por ejemplo 512 × 512 píxeles, y la imagen se corta desde la esquina superior izquierda en tantos mosaicos como quepan. La última fila y la última columna se quedan con lo que sobra, así que pueden ser más pequeñas. Es el modo para mapas de videojuegos, hojas de texturas y todo lo que espere mosaicos de un tamaño fijo.",
      ],
    },
    {
      heading: "Formas habituales de cortar una imagen en partes",
      id: "layouts",
      body: [
        "Dos mitades lado a lado (2 × 1) separan un escaneo de dos páginas o una foto de antes y después. Las mitades de arriba y abajo (1 × 2) dividen una captura de pantalla alta del teléfono. Tres tiras verticales (3 × 1) forman un tríptico para tres marcos en la pared. Una cuadrícula de 3 × 3 o 4 × 4 convierte una foto en un rompecabezas, en un póster para imprimir o en un conjunto de piezas para un mosaico.",
        "Los botones rápidos encima de los controles deslizantes aplican estos formatos con un toque; los controles llegan hasta 20 columnas y 20 filas.",
      ],
    },
    {
      heading: "Imprime un póster grande en papel normal",
      id: "poster",
      body: [
        "Una impresora doméstica no puede imprimir un póster de un metro de ancho, pero sí cuatro o nueve partes de uno. Divide la imagen en una cuadrícula que coincida con la forma de tu papel (2 × 2 o 3 × 3 para un póster con la misma forma que la foto), imprime todas las partes al mismo tamaño sin escalar para ajustar, recorta los márgenes blancos y une las hojas con cinta por detrás.",
        "Parte del original más grande que tengas. Cada parte se imprime mucho más grande de lo que se ve en pantalla, así que una foto pequeña queda borrosa; una foto de 6000 píxeles de ancho dividida en 3 columnas sigue dando 2000 píxeles por hoja, lo que se imprime nítido en A4 o Carta.",
      ],
    },
    {
      heading: "Mosaicos para juegos, mapas y la web",
      id: "tiles",
      body: [
        "Los motores de videojuegos, los visores de mapas y algunos sitios web cargan las imágenes grandes como una cuadrícula de mosaicos para descargar solo la parte visible. Elige «Tamaño de mosaico» y define el tamaño que espera el programa (256 o 512 píxeles son habituales), y los archivos salen nombrados por fila y columna, listos para cargarse en un bucle.",
        "El modo mosaico también es la forma más rápida de cortar una captura de pantalla o una infografía muy larga en páginas: pon el ancho del mosaico igual al ancho completo de la imagen y el alto igual a una pantalla.",
      ],
    },
    {
      heading: "Partes que encajan con exactitud",
      id: "exact",
      body: [
        "Cada parte es una copia directa de su zona del original: no se redimensiona nada, nada se solapa y no se pierde ningún píxel entre vecinas, así que las partes vuelven a encajar sin huecos. Guardadas en PNG, son idénticas píxel a píxel al original; las partes en JPG y WEBP se vuelven a comprimir con la calidad que elijas, lo que normalmente no se nota pero puede verse como costuras tenues en colores planos. Usa PNG cuando las partes se vayan a volver a unir.",
      ],
    },
    {
      heading: "Archivos, nombres y formatos",
      id: "names",
      body: [
        "Las partes se nombran como la imagen más su fila y columna (vacaciones_r1_c1.jpg, vacaciones_r1_c2.jpg, etc.), con ceros a la izquierda cuando hay diez o más, para que se ordenen correctamente en cualquier carpeta. Cuando divides varias imágenes a la vez, las partes de cada una van en su propia carpeta dentro del ZIP.",
        "Las partes conservan el formato original, a menos que elijas otro. PNG y WEBP conservan la transparencia; JPG rellena las zonas transparentes con el color de fondo que elijas.",
      ],
    },
    {
      heading: "Dividir una foto para Instagram",
      id: "instagram",
      body: [
        "Una cuadrícula de perfil de Instagram y un panorama deslizable necesitan algo más que un simple corte: hay que recortar la foto a la forma correcta, ajustar cada parte al tamaño de Instagram y subir las publicaciones en orden inverso. «Cuadrícula para Instagram» hace todo eso: úsala en lugar de esta página para una cuadrícula de 3 de ancho o un carrusel.",
      ],
    },
    {
      heading: "Dividir cómics, menús y documentos",
      id: "documents",
      body: [
        "Una página de cómic escaneada se divide en sus viñetas con una cuadrícula de la misma forma, lista para publicarlas una a una. Un menú de restaurante o un folleto largo fotografiado de una sola vez se puede cortar en páginas sueltas para un sitio web. En escaneos de libros a doble página, 2 × 1 da la página izquierda y la derecha como imágenes separadas que luego puedes pasar a «Imagen a PDF».",
      ],
    },
    {
      heading: "Privacidad",
      id: "privacy",
      body: [
        "Cada imagen se divide por completo en tu navegador. No se sube nada a ningún servidor y no se conserva nada cuando cierras la página.",
      ],
    },
  ],

  howToTitle: "Cómo dividir una imagen",
  steps: [
    { title: "Agregar la imagen", description: "Elige una o varias imágenes JPG, PNG o WEBP." },
    { title: "Elegir los cortes", description: "Elige una cuadrícula como 2 × 1 o 3 × 3, o define un tamaño de mosaico exacto en píxeles." },
    { title: "Dividir y descargar", description: "Haz clic en «Dividir imagen» para obtener todas las partes en un ZIP, o haz clic en una sola parte para guardarla." },
  ],

  features: [
    { icon: "view_column", title: "Cuadrícula o tamaño de mosaico", description: "Hasta 20 × 20 partes iguales, o mosaicos de cualquier tamaño en píxeles." },
    { icon: "folder_zip", title: "Todas las partes en un ZIP", description: "Nombradas por fila y columna, para que se mantengan en orden." },
    { icon: "lock", title: "Sin subidas", description: "Todo se divide en tu navegador." },
  ],

  faqs: [
    { q: "¿Cómo divido una imagen en partes iguales?", a: "Agrega la imagen, elige el número de columnas y filas y haz clic en «Dividir imagen». Las partes se descargan juntas en un ZIP." },
    { q: "¿Cómo corto una imagen por la mitad?", a: "Elige 2 × 1 para una mitad izquierda y otra derecha, o 1 × 2 para una mitad superior y otra inferior." },
    { q: "¿Puedo dividir una imagen en una cuadrícula de 3 × 3?", a: "Sí. Toca 3 × 3 o pon los dos controles en 3: obtienes nueve partes numeradas desde la esquina superior izquierda." },
    { q: "¿Puedo cortar mosaicos de un tamaño exacto?", a: "Sí. Elige «Tamaño de mosaico» e introduce el ancho y el alto en píxeles. La última fila y la última columna son más pequeñas si el tamaño no se divide exactamente." },
    { q: "¿Las partes pierden calidad?", a: "No se redimensiona nada. En PNG son idénticas al original; en JPG y WEBP se vuelven a guardar con la calidad que elijas." },
    { q: "¿Puedo descargar solo una parte?", a: "Sí. Después de dividir, haz clic en cualquier parte bajo la vista previa para guardarla por separado." },
    { q: "¿Puedo dividir varias imágenes a la vez?", a: "Sí. Cada imagen se divide de la misma manera y tiene su propia carpeta en el ZIP." },
    { q: "¿Cómo se nombran los archivos?", a: "Por fila y columna, como foto_r2_c3.png, para que se ordenen correctamente." },
    { q: "¿Se conserva la transparencia?", a: "Sí, en PNG o WEBP. JPG rellena las zonas transparentes con un color." },
    { q: "¿Cuántas partes puedo hacer?", a: "Hasta 20 × 20 en cuadrícula, y hasta 400 partes por imagen en modo mosaico." },
    { q: "¿Cómo divido una foto para una cuadrícula de Instagram?", a: "Usa «Cuadrícula para Instagram»: recorta a la forma correcta, ajusta el tamaño de las publicaciones y las numera en el orden de publicación." },
    { q: "¿Se suben mis imágenes?", a: "No. Todo ocurre en tu navegador." },
    { q: "¿Funciona en el teléfono?", a: "Sí, en cualquier navegador del teléfono. Las partes se descargan en un ZIP que tu teléfono puede abrir." },
    { q: "¿Es gratis?", a: "Sí. Sin cuenta, sin marca de agua y sin límites." },
  ],

  security:
    "Tus imágenes se dividen por completo en tu navegador. No se sube, se guarda ni se rastrea nada.",

  ui: {
    // SplitImageTool.tsx — files
    "Please select image files.": "Selecciona archivos de imagen.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "or drop a JPG, PNG or WEBP image here": "o suelta aquí una imagen JPG, PNG o WEBP",
    "Clear files": "Borrar archivos",
    "Remove": "Quitar",
    // settings
    "Settings": "Ajustes",
    "Split by": "Dividir por",
    "Equal grid": "Cuadrícula igual",
    "Tile size": "Tamaño de mosaico",
    "Columns": "Columnas",
    "Rows": "Filas",
    "Tile width (px)": "Ancho del mosaico (px)",
    "Tile height (px)": "Alto del mosaico (px)",
    "Each piece:": "Cada parte:",
    "Each one:": "Cada una:",
    "Pieces": "Partes",
    "1 piece": "1 parte",
    "{n} pieces": "{n} partes",
    "The size does not divide evenly, so some pieces are 1 px wider or taller.":
      "El tamaño no se divide exactamente, así que algunas partes tienen 1 px más de ancho o de alto.",
    "The last row and column are smaller — they take what is left.":
      "La última fila y la última columna son más pequeñas: se quedan con lo que sobra.",
    "Too many pieces — use bigger tiles (up to 400 pieces per image).":
      "Demasiadas partes: usa mosaicos más grandes (hasta 400 partes por imagen).",
    "For the first image — every image is split the same way.":
      "Para la primera imagen: todas las imágenes se dividen de la misma manera.",
    // Instagram mode
    "Layout": "Diseño",
    "Profile grid": "Cuadrícula del perfil",
    "Three posts per row, like your profile.": "Tres publicaciones por fila, como en tu perfil.",
    "Carousel": "Carrusel",
    "Post shape": "Formato de publicación",
    "Matches the profile grid exactly.": "Coincide exactamente con la cuadrícula del perfil.",
    "The classic tall post. The grid trims a sliver off each side.":
      "La clásica publicación vertical. La cuadrícula recorta una franja fina de cada lado.",
    "Square posts. The grid trims their sides.": "Publicaciones cuadradas. La cuadrícula recorta sus lados.",
    "Tall slides that fill the most screen.": "Diapositivas verticales que ocupan la mayor parte de la pantalla.",
    "Square slides.": "Diapositivas cuadradas.",
    "Slides": "Diapositivas",
    "{n} posts": "{n} publicaciones",
    "{n} slides": "{n} diapositivas",
    "Drag the picture to choose what goes into the posts.":
      "Arrastra la imagen para elegir qué entra en las publicaciones.",
    "Horizontal position": "Posición horizontal",
    "Vertical position": "Posición vertical",
    "Your picture is narrower than Instagram's 1080 px per post, so the pieces keep its own resolution.":
      "Tu imagen es más estrecha que los 1080 px por publicación de Instagram, así que las partes conservan su propia resolución.",
    "Post them in number order: 1 first, the top-left piece last.":
      "Publícalas en orden numérico: primero la 1 y al final la parte de arriba a la izquierda.",
    "Add the slides to one post in number order, 1 first.":
      "Agrega las diapositivas a una sola publicación en orden numérico, empezando por la 1.",
    "Make the grid": "Crear la cuadrícula",
    "Make the carousel": "Crear el carrusel",
    // preview / output
    "Preview": "Vista previa",
    "The lines show where the image will be cut.": "Las líneas muestran dónde se cortará la imagen.",
    "Click a piece to download just that one.": "Haz clic en una parte para descargar solo esa.",
    "Output format": "Formato de salida",
    "Same as original": "Igual que el original",
    "Quality": "Calidad",
    "JPG background": "Fondo del JPG",
    "Split image": "Dividir imagen",
    "Working…": "Procesando…",
    "Done — 1 image saved.": "Listo: 1 imagen guardada.",
    "Done — {n} pieces saved.": "Listo: {n} partes guardadas.",
    "Processing failed.": "Error al procesar.",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Your images are processed in your browser and never uploaded.":
      "Tus imágenes se procesan en tu navegador y nunca se suben.",
  },
};

export default content;
