import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/selector-de-color.
 *
 * Primary query "Selector de color" together with the English loanword
 * "Color picker" (18.1K ES / 27.1K MX) — both lead the title. Secondary
 * "obtener color de imagen", "cuentagotas". Colour values (HEX/RGB/HSL) stay
 * as written.
 */
const content: ToolPageContent = {
  toolId: "image-color-picker",
  locale: "es",
  name: "Selector de color y color picker de imágenes",
  tagline:
    "Elige cualquier color de una imagen online y extrae su paleta completa en un solo lugar: obtén valores HEX, RGB y HSL con una lupa, cópialos o descarga la paleta como hoja de muestras. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Selector de color – Color picker de imagen | oMyImage",
  metaDescription:
    "Selector de color y color picker online: obtén el color de una imagen con el cuentagotas, copia HEX, RGB y HSL y extrae la paleta. Gratis y sin subir nada.",

  intro:
    "Obtén el color exacto de cualquier imagen en segundos y convierte la foto entera en una paleta lista para usar. El selector de color (color picker) de oMyImage te permite pasar el cursor con una lupa y hacer clic para tomar cualquier píxel, como con un cuentagotas, y luego copiar su valor HEX, RGB o HSL. Al mismo tiempo extrae los colores dominantes de la imagen y muestra cuánto ocupa cada uno, para que copies la paleta completa o descargues una hoja de muestras con etiquetas. Perfecto para igualar colores de marca, crear moodboards y para diseño web o de producto. Todo se ejecuta en tu navegador, así que tu imagen sigue siendo privada.",

  sections: [
    {
      heading: "Tomar un color y leer su valor",
      id: "sampling",
      body: [
        "Elegir un color lee el valor de un solo píxel y lo muestra en las notaciones que esperan las distintas herramientas: HEX para CSS y programas de diseño, RGB para código y HSL cuando quieres crear una familia de tonos relacionados ajustando un componente cada vez.",
        "HSL merece más uso del que recibe. Como separa el tono de la saturación y la luminosidad, conseguir una versión más clara de un color de marca consiste en cambiar un solo número, mientras que en HEX supone adivinar tres. Para generar estados de hover, variantes deshabilitadas y matices a partir de un único color base, es con diferencia el modelo más sencillo.",
        "Una advertencia práctica: las fotografías tienen ruido, así que lo que parece una zona plana no lo es. Si tomas dos píxeles vecinos del mismo trozo de cielo, obtendrás dos valores ligeramente distintos, y ninguno es incorrecto.",
      ],
    },
    {
      heading: "Extraer una paleta de colores de una imagen",
      id: "palette",
      body: [
        "Un análisis de colores dominantes mira la imagen completa en lugar de un solo píxel, agrupa los colores parecidos y muestra los que cubren más superficie. Así obtienes la paleta que percibe realmente quien mira la imagen, que no siempre coincide con la que habrías elegido a ojo: un color puede parecer protagonista ocupando muy poca parte del encuadre.",
        "Las fotografías son buenas fuentes de paletas porque la luz de la escena ya ha armonizado los colores. Los colores iluminados por el mismo sol, o por la misma lámpara, comparten un matiz de fondo, y ese tono común es lo que hace que una paleta se sienta coherente y no ensamblada.",
        "El enfoque habitual es tomar el color dominante como base, un neutro claro de la imagen para los fondos y un color saturado para los acentos. Con tres o cuatro basta; una paleta de ocho tiende a perder identidad.",
      ],
    },
    {
      heading: "Armonía de color no es accesibilidad",
      id: "contrast",
      body: [
        "Este es el error que conviene evitar. Una paleta sacada de una fotografía se elige por cómo combinan los colores, y eso no dice nada sobre si un texto en uno de ellos se lee bien sobre otro.",
        "Los tonos medios son la trampa más común: parecen sofisticados y a menudo no cumplen los requisitos de contraste en ninguna dirección, porque no son lo bastante claros para llevar texto oscuro ni lo bastante oscuros para llevar texto claro. Las WCAG piden 4,5:1 para texto normal y 3:1 para texto grande, y un azul grisáceo medio muy bonito sobre un beige medio muy bonito puede quedarse cerca de 2:1.",
        "El patrón que funciona es usar la paleta obtenida para acentos, bordes, ilustraciones y fondos, y mantener el texto en tonos que hayas comprobado expresamente. La armonía y el contraste son problemas distintos y hay que resolverlos por separado.",
      ],
    },
    {
      heading: "Usos habituales",
      id: "uses",
      body: [
        "El más frecuente es igualar un diseño con una fotografía: un sitio cuyo color de acento sale de su imagen principal se siente cuidado de una forma que un azul cualquiera no consigue. Crear una paleta de marca a partir de un moodboard funciona igual.",
        "Además: recuperar el color de un logotipo cuando nadie encuentra el manual de marca, igualar los colores de las series de un gráfico con una foto de producto, obtener la paleta de un competidor a partir de una captura de pantalla y tomar colores de una pintura o un tejido que ya combinan entre sí.",
        "Todo se toma desde un canvas dentro de tu navegador, así que la imagen nunca se sube, algo importante cuando el origen es un diseño aún no publicado o material de un cliente.",
      ],
    },
  ],

  howToTitle: "Cómo obtener un color y extraer la paleta de una imagen",
  steps: [
    { title: "Subir", description: "Selecciona una imagen o arrástrala al área de trabajo." },
    { title: "Pasar el cursor y hacer clic", description: "Mueve el cursor sobre la imagen para previsualizar los colores con la lupa y haz clic en cualquier píxel para fijar su color." },
    { title: "Revisar la paleta extraída", description: "Los colores dominantes de la imagen se extraen automáticamente: usa el control deslizante para obtener entre 2 y 16." },
    { title: "Copiar o descargar", description: "Copia cualquier valor HEX, RGB o HSL con un toque, copia la paleta completa de una vez o descárgala como hoja de muestras en PNG." },
  ],

  features: [
    { icon: "colorize", title: "Selector preciso al píxel", description: "Toma el color exacto de cualquier píxel y léelo al instante en HEX, RGB y HSL." },
    { icon: "search", title: "Lupa de aumento", description: "Una lupa con zoom sigue tu cursor para que apuntes justo al píxel que quieres." },
    { icon: "palette", title: "Paleta de colores completa", description: "Extrae de 2 a 16 colores dominantes con su porcentaje de la imagen, y conserva los pequeños colores de acento en lugar de promediarlos." },
    { icon: "lock", title: "100 % privado", description: "Tanto el selector como la paleta funcionan por completo en tu navegador con canvas HTML: tu imagen nunca se sube." },
  ],

  faqs: [
    { q: "¿Qué formatos de color puedo copiar?", a: "HEX, RGB y HSL. Haz clic en cualquier valor para copiarlo al portapapeles." },
    { q: "¿Cómo se eligen los colores de la paleta?", a: "La imagen se analiza con total fidelidad de color, sin desenfocar ni suavizar, y luego se agrupa en regiones de color. La herramienta genera más colores candidatos de los necesarios y se queda con los que son a la vez frecuentes y visualmente distintos, de modo que un acento pequeño pero intenso sigue teniendo su muestra en lugar de diluirse en el fondo." },
    { q: "¿Cuántos colores puedo extraer?", a: "Entre 2 y 16, ajustables con el control deslizante. Cada muestra indica además qué parte de la imagen se acerca más a ese color." },
    { q: "¿Puedo exportar la paleta?", a: "Sí. Copia valores HEX/RGB sueltos, copia la lista completa de una vez o descarga una hoja de muestras en PNG con etiquetas." },
    { q: "¿El color picker guarda un historial de colores?", a: "Sí. Los colores que elegiste hace poco aparecen como muestras en las que puedes hacer clic para volver a copiarlos." },
    { q: "¿Qué formatos de imagen se admiten?", a: "JPG, PNG, WEBP, GIF y BMP. En las imágenes animadas, los colores salen del primer fotograma." },
    { q: "¿El selector de color es gratis y privado?", a: "Sí. Sin registro, y la imagen se procesa localmente en tu navegador: no se sube nada." },
    { q: "¿Qué diferencia hay entre HEX, RGB y HSL?", a: "Describen el mismo color de tres maneras. HEX es la forma compacta de seis dígitos que se usa en CSS y en herramientas de diseño. RGB da directamente los valores de los tres canales, que es lo que esperan el código y las API de canvas. HSL divide el color en tono, saturación y luminosidad, mucho más fácil de manejar cuando creas variaciones de un tono." },
    { q: "¿Por qué el color elegido se ve distinto en mi programa de diseño?", a: "Normalmente por una diferencia de perfil de color. Una imagen con un perfil de gama amplia como Display P3 se convierte para mostrarse en pantalla, así que el valor que tomas puede diferir del que indica otra aplicación. Además, las fotografías tienen ruido, de modo que dos píxeles contiguos en lo que parece un color plano rara vez son idénticos." },
    { q: "¿Cómo creo una paleta a partir de una fotografía?", a: "Toma el color dominante como base y luego elige dos o tres tonos de apoyo de distintas zonas de la imagen: uno claro para los fondos y uno saturado para los acentos. Las fotografías son una fuente fiable porque la luz natural ya armoniza los colores de una escena." },
    { q: "¿Estos colores serán accesibles?", a: "No automáticamente. Una paleta sacada de una fotografía se elige por armonía, no por contraste, y los tonos medios de una imagen a menudo no cumplen los requisitos de contraste como texto. Comprueba cada pareja de texto y fondo con las WCAG antes de usarla: 4,5:1 para texto normal y 3:1 para texto grande." },
    { q: "¿Puedo obtener los colores de una marca desde una captura de pantalla?", a: "Sí, y es un uso habitual. Haz una captura del sitio o del logotipo y toma los colores de ella. Ten en cuenta que una captura ha pasado por el renderizado de la pantalla y por la compresión de imagen, así que el resultado es muy aproximado pero no exacto: suficiente para igualar colores, no para una especificación oficial de marca." },
  ],

  security:
    "Tu imagen sigue siendo privada. La toma de colores y la extracción de la paleta se hacen por completo en tu navegador con canvas HTML: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // ImageColorPickerTool.tsx
    "Please select an image file.": "Selecciona un archivo de imagen.",
    "Couldn't read that image.": "No se pudo leer esa imagen.",
    "Select an image": "Seleccionar imagen",
    "or drop a JPG, PNG, WEBP or GIF here": "o suelta aquí un JPG, PNG, WEBP o GIF",
    "Change image": "Cambiar imagen",
    "Clear image": "Quitar imagen",
    "Click anywhere on": "Haz clic en cualquier punto de",
    "to pick a color.": "para elegir un color.",
    "Click the image — or any palette swatch below — to sample a color.":
      "Haz clic en la imagen, o en cualquier muestra de la paleta de abajo, para tomar un color.",
    "Picked color": "Color elegido",
    "Copy {value}": "Copiar {value}",
    "Copied {value}": "{value} copiado",
    "Copy failed.": "Error al copiar.",
    "Copy all": "Copiar todo",
    "Recent": "Recientes",
    "Palette": "Paleta",
    "Palette options": "Opciones de la paleta",
    "Colors": "Colores",
    "Number of palette colors": "Número de colores de la paleta",
    "Pick {value}": "Elegir {value}",
    "{share} of pixels are closest to this color": "El {share} de los píxeles se acerca más a este color",
    "Download palette (PNG)": "Descargar paleta (PNG)",
    "This image is fully transparent — there are no colors to extract.":
      "Esta imagen es totalmente transparente: no hay colores que extraer.",
    "This image only has 1 visually distinct color — showing it rather than repeating near-identical shades.":
      "Esta imagen solo tiene 1 color visualmente distinto: se muestra ese en lugar de repetir tonos casi idénticos.",
    "This image only has {n} visually distinct colors — showing all of them rather than repeating near-identical shades.":
      "Esta imagen solo tiene {n} colores visualmente distintos: se muestran todos en lugar de repetir tonos casi idénticos.",
    "Tip:": "Consejo:",
    "hover to preview with the magnifier and click to lock a color, or tap a palette swatch to load it. Copy buttons put the value straight on your clipboard, and everything runs in your browser.":
      "pasa el cursor para previsualizar con la lupa y haz clic para fijar un color, o toca una muestra de la paleta para cargarla. Los botones de copiar envían el valor directamente al portapapeles, y todo se ejecuta en tu navegador.",
  },
};

export default content;
