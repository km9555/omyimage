import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/unir-imagenes. Structure lives in
 * ToolPageShell.
 *
 * Target query "unir imágenes". "Collage de fotos" (33.1K MX) is a bigger but
 * broader query — mentioned naturally in the intro, a section and an FAQ
 * without pretending this is a template collage maker. "Unir fotos", "juntar
 * fotos" and "combinar imágenes" live in the intro, a heading and the FAQs.
 * Addressed in "tú".
 *
 * LAYOUTS, CELL_FITS and ASPECT_PRESETS hints are module scope; their keys are
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "merge-images",
  locale: "es",
  name: "Unir imágenes",
  tagline:
    "Une varias imágenes en una sola online: lado a lado, una debajo de otra o en cuadrícula, con espaciado, fondo y el orden que quieras. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Unir imágenes gratis – juntar fotos y collage | oMyImage",
  metaDescription:
    "Unir imágenes online: junta fotos lado a lado, una debajo de otra o en cuadrícula y crea un collage de fotos sencillo. Gratis, sin registro y en tu navegador.",

  intro:
    "Une varias fotos en una sola imagen en segundos. «Unir imágenes» de oMyImage coloca tus imágenes lado a lado, una debajo de otra o en cuadrícula directamente en tu navegador, y tú controlas el orden, el espaciado y el fondo. Así puedes unir fotos, juntar fotos para un antes y después, combinar imágenes en hojas de comparación o armar un collage de fotos sencillo y descargarlo al instante; no se sube nada, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Una imagen en lugar de varias",
      id: "why",
      body: [
        "Muchísimos sitios aceptan exactamente una imagen. Las publicaciones en marketplaces, los foros, los formularios de reseñas, los gestores de errores, los mensajes de chat y la mayoría de las redes sociales tienen un espacio y no una galería, y el truco habitual —publicar varias imágenes seguidas— obliga a quien mira a recordar la primera mientras ve la tercera.",
        "Unir imágenes lo resuelve poniendo la comparación dentro de un solo marco. Un antes y después queda lado a lado, donde la diferencia se ve de inmediato; tres ángulos de un producto llegan juntos; una serie de capturas de pantalla se lee como una sola historia. No hay que ir haciendo clic.",
        "También es la forma más sencilla de hacer una comparación honesta. Dos imágenes mostradas juntas a la misma escala son mucho más difíciles de tergiversar que dos imágenes mostradas una tras otra.",
      ],
    },
    {
      heading: "Combinar imágenes: ¿lado a lado o una debajo de otra?",
      id: "direction",
      body: [
        "Al unir en horizontal, las imágenes quedan lado a lado, la opción natural para comparar. La vista se desplaza con facilidad y las dos mitades se leen como un par. Es el diseño estándar para ediciones de antes y después, variantes de producto y cualquier comparación A contra B.",
        "Al unir en vertical, las imágenes se apilan hacia abajo. Funciona para secuencias e instrucciones, donde el orden importa y de arriba abajo implica avance. También es la mejor opción para todo lo que se verá en un teléfono: una imagen alta llena una pantalla vertical, mientras que una ancha se reduce hasta que los detalles desaparecen.",
        "Si no estás seguro, piensa en lo que debe hacer quien mira. ¿Comparar? Horizontal. ¿Seguir pasos? Vertical.",
      ],
    },
    {
      heading: "Tamaños, espacios y alineación",
      id: "layout",
      body: [
        "Las imágenes de distintas dimensiones se alinean por el borde de unión y el espacio restante se rellena con tu color de fondo. Es un valor predeterminado razonable, pero el resultado se ve bastante más ordenado cuando las imágenes comparten una dimensión: el mismo ancho en una pila vertical, la misma altura en una tira horizontal. Pasarlas antes por «Redimensionar imagen» toma un momento y mejora mucho el resultado.",
        "Casi siempre vale la pena dejar un espacio entre imágenes. Sin él, dos fotos con bordes parecidos pueden verse como una sola escena continua, algo confuso en el mejor de los casos y engañoso en un antes y después. Entre diez y veinte píxeles suelen bastar para marcar el límite sin que parezca un collage.",
        "El color de fondo rellena tanto los espacios como cualquier hueco sobrante. El blanco va bien en casi todo; detrás de fotografías suele verse mejor un gris medio, y usar el color de tu marca funciona bien para todo lo que se publique.",
      ],
    },
    {
      heading: "Unir imágenes no pierde calidad",
      id: "quality",
      body: [
        "En los diseños automáticos, con «Tamaño de las imágenes» en «Original», las imágenes se dibujan con sus dimensiones nativas en píxeles. No hay remuestreo ni suavizado, así que el resultado unido es exactamente igual de nítido que las imágenes de partida. Es el modo ideal para unir capturas de pantalla, donde medio píxel de suavizado en el texto se nota de inmediato.",
        "Lo que cuesta calidad es escalar. Cambiar el tamaño de una imagen en el lienzo «Personalizado», o elegir «Igualar» o «Rellenar» para que todas compartan tamaño, remuestrea esa imagen: es inevitable y no peor que cualquier otro cambio de tamaño, pero conviene saberlo cuando la alternativa no costaba nada.",
        "La única otra cuestión de calidad es el formato de exportación. Elige PNG o WEBP para conservar todo exacto, o JPG si el resultado es una fotografía y quieres un archivo más pequeño. Si la imagen unida contiene capturas o texto, PNG es claramente la mejor opción: los artefactos de JPG se concentran justo en los bordes nítidos de las letras.",
      ],
    },
  ],

  howToTitle: "Cómo unir imágenes en una sola",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona dos o más imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Ordena y da estilo", description: "Elige lado a lado, una debajo de otra o cuadrícula, arrastra las miniaturas para reordenarlas y define el espaciado y el fondo. «Personalizado» te permite mover, girar y redimensionar cada imagen a mano." },
    { title: "Une y descarga", description: "Haz clic en «Unir»: la imagen combinada se descarga al instante en PNG, JPG o WEBP." },
  ],

  features: [
    { icon: "grid_view", title: "Cuatro diseños", description: "Combina fotos lado a lado, apiladas en vertical, en cuadrícula o colocadas libremente en un lienzo personalizado." },
    { icon: "open_with", title: "Vista previa editable", description: "En el modo «Personalizado», la vista previa es el editor: arrastra una imagen para moverla, tira de una esquina para cambiar su tamaño y usa el control superior para girarla, con bordes que se alinean solos mientras mueves." },
    { icon: "lock", title: "100 % privado", description: "La unión se hace por completo en tu navegador con HTML canvas: tus imágenes nunca se suben." },
  ],

  faqs: [
    { q: "¿Cómo pongo dos fotos una al lado de la otra?", a: "Agrega ambas imágenes, deja el diseño en «Lado a lado» y haz clic en «Unir». Se juntan por su borde común a resolución completa, con un espacio opcional entre ellas, y el resultado se descarga como un solo archivo PNG, JPG o WEBP. Cambia «Tamaño de las imágenes» a «Igualar» si quieres que ambas tengan la misma altura." },
    { q: "¿Es lo mismo que una app para juntar fotos?", a: "Sí: «unir fotos», «juntar fotos» y «combinar imágenes» describen la misma tarea. La diferencia es que aquí no hay que instalar nada: funciona en cualquier navegador de teléfono, tableta o PC, sin registro y sin marca de agua en el resultado." },
    { q: "¿Puedo unir imágenes desde el teléfono?", a: "Sí. Abre esta página en Safari o Chrome en iPhone o Android, toca para elegir fotos de tu galería, escoge un diseño y únelas. En el teléfono, apilar en vertical suele funcionar mejor, porque una imagen alta llena una pantalla vertical." },
    { q: "¿Cuántas imágenes puedo unir?", a: "Todas las que quieras: agrega dos o más y colócalas lado a lado, una debajo de otra o en cuadrícula." },
    { q: "¿Puedo cambiar el orden de las imágenes?", a: "Sí. Arrastra una miniatura a una nueva posición de la lista, o usa las flechas de subir y bajar si lo prefieres; ambas cosas definen el orden en que se combinan. En el modo «Personalizado», el orden también decide qué imagen queda encima cuando se superponen, y los botones «Traer adelante» y «Enviar atrás» lo cambian." },
    { q: "¿Puedo mantener un fondo transparente?", a: "Sí. Elige un fondo transparente y exporta en PNG o WEBP para que los espacios queden transparentes." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro ni marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿Qué pasa si mis imágenes tienen tamaños distintos?", a: "Por defecto conservan sus propias dimensiones, se alinean por el borde de unión y el espacio sobrante toma el color de fondo que elijas. Si prefieres que coincidan, cambia «Tamaño de las imágenes» a «Igualar»: así todas tienen la misma altura en una fila o el mismo ancho en una columna. «Rellenar» va más allá y las recorta todas en mosaicos idénticos." },
    { q: "¿Conviene unir en horizontal o en vertical?", a: "En horizontal para pares de antes y después y comparaciones directas, porque el ojo compara mejor de lado a lado que de arriba abajo. En vertical para secuencias, instrucciones paso a paso y todo lo que se vaya a leer en un teléfono, donde una imagen alta aprovecha mejor la pantalla que una ancha." },
    { q: "¿Puedo agregar espacio entre las imágenes?", a: "Sí: un espacio del color de fondo que elijas. Un margen pequeño de diez o veinte píxeles deja claro que son imágenes separadas y no una sola escena continua, algo importante en comparaciones donde una unión sin costuras sería engañosa." },
    { q: "¿Para qué sirve?", a: "Para ediciones de antes y después, fotos de producto desde varios ángulos en una sola imagen de anuncio, tutoriales paso a paso, secuencias de capturas para reportes de errores o documentación, hojas de contactos y publicaciones en redes sociales que solo permiten una imagen cuando tienes tres cosas que mostrar." },
    { q: "¿Puedo hacer un collage de fotos?", a: "Sí, uno sencillo: el diseño en cuadrícula coloca varias fotos en filas y columnas con un espaciado uniforme, y con «Personalizado» colocas las imágenes libremente, las giras y las superpones. La herramienta no ofrece plantillas con stickers ni marcos decorativos: se centra en combinaciones limpias y rápidas." },
    { q: "¿Unir imágenes reduce la calidad?", a: "No en los diseños automáticos con «Tamaño de las imágenes» en «Original»: ahí las imágenes se dibujan con sus dimensiones nativas en píxeles y no se remuestrea nada. Cambiar el tamaño de una imagen en el modo «Personalizado», o usar «Igualar» o «Rellenar», sí la reescala, que es el pequeño costo habitual de cambiar el tamaño de una imagen. Exportar en JPG cuesta un poco más; PNG y WEBP conservan exactamente lo que les das." },
    { q: "¿Hay un límite práctico de cuántas conviene unir?", a: "No hay un tope fijo, pero una tira muy larga se vuelve difícil de ver: la mayoría de las plataformas reduce una imagen ancha hasta que quepa, así que unir diez imágenes en horizontal puede terminar siendo demasiado pequeño para leerse. Entre dos y cuatro es el punto ideal en la práctica." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. La unión se hace por completo en tu navegador con HTML canvas: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // MergeTool.tsx — module-scope LAYOUTS
    "Side by side": "Lado a lado",
    "Stacked": "Una debajo de otra",
    "Grid": "Cuadrícula",
    "Custom": "Personalizado",
    "One row, left to right": "Una fila, de izquierda a derecha",
    "One column, top to bottom": "Una columna, de arriba abajo",
    "Rows and columns": "Filas y columnas",
    "Move, rotate and resize by hand": "Mover, girar y cambiar el tamaño a mano",
    // lib/image/merge CELL_FITS
    "Original": "Original", // i18n-same
    "Match": "Igualar",
    "Fill": "Rellenar",
    "Native size, nothing resampled": "Tamaño nativo, sin remuestreo",
    "Equal heights in a row, equal widths in a column": "Misma altura en una fila, mismo ancho en una columna",
    "Identical tiles, overflow cropped": "Mosaicos idénticos, lo que sobra se recorta",
    // lib/image/frame ASPECT_PRESETS hints (ratios pass through)
    "Auto": "Automático",
    "Instagram": "Instagram", // i18n-same
    "Portrait": "Vertical",
    "Widescreen": "Panorámico",
    "Story": "Historia",
    "Classic": "Clásico",
    "DSLR": "DSLR", // i18n-same
    "Print": "Impresión",
    // MergeTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "Images are still loading — try again in a moment.": "Las imágenes todavía se están cargando; vuelve a intentarlo en un momento.",
    "Merged 1 image.": "Se unió 1 imagen.",
    "Merged {n} images.": "Se unieron {n} imágenes.",
    "Merge failed.": "No se pudieron unir las imágenes.",
    "or drop two or more JPG, PNG or WEBP images here": "o suelta aquí dos o más imágenes JPG, PNG o WEBP",
    "Drag to move, corners to resize, the top handle to rotate. Shift snaps the angle, Alt turns off snapping.":
      "Arrastra para mover, usa las esquinas para cambiar el tamaño y el control superior para girar. Shift ajusta el ángulo por pasos; Alt desactiva la alineación automática.",
    "Live preview of the merged image.": "Vista previa en vivo de la imagen unida.",
    "Clear images": "Quitar imágenes",
    "Files": "Archivos",
    "Merge settings": "Configuración de la unión",
    "Merge Settings": "Configuración de la unión",
    "Merge": "Unir",
    "Merging…": "Uniendo…",
    "Images keep their stacking order — use the layer arrows to change which sits on top.":
      "Las imágenes mantienen su orden de capas: usa las flechas de capa para cambiar cuál queda encima.",
    "Drag a thumbnail to reorder. A transparent PNG background keeps the gaps see-through.":
      "Arrastra una miniatura para reordenar. Un fondo PNG transparente deja los espacios transparentes.",
    "Merge & download": "Unir y descargar",
    "Layout": "Diseño",
    "Canvas": "Lienzo",
    "Fit to content": "Ajustar al contenido",
    "Re-arrange": "Reorganizar",
    "Selected image": "Imagen seleccionada",
    "Click an image on the canvas to select it. Drag to move, use the corner handles to resize, and the handle above the top edge to rotate. Arrow keys nudge, Shift makes them move further.":
      "Haz clic en una imagen del lienzo para seleccionarla. Arrastra para moverla, usa los controles de las esquinas para cambiar su tamaño y el control sobre el borde superior para girarla. Las flechas del teclado la desplazan un poco; con Shift, más.",
    "Bring forward": "Traer adelante",
    "Send back": "Enviar atrás",
    "Nothing selected — click an image on the canvas.": "No hay nada seleccionado: haz clic en una imagen del lienzo.",
    "Columns": "Columnas",
    "Auto squares the grid off for you.": "«Automático» hace la cuadrícula lo más cuadrada posible.",
    "Image sizes": "Tamaño de las imágenes",
    "Spacing": "Espaciado",
    "Output format": "Formato de salida",
  },
};

export default content;
