import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/svg-a-png.
 *
 * Head term "SVG a PNG" (8.1K ES / 5.4K MX) — Spanish converter queries take
 * the "X a Y" form. Secondary "convertir SVG a PNG", used in the intro, a
 * heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "svg-to-png",
  locale: "es",
  name: "SVG a PNG",
  tagline:
    "Convierte SVG a PNG online a 1×, 2×, 4× o cualquier ancho, nítido en todos los tamaños, transparente o con fondo. Gratis, por lotes y sin que nada salga de tu navegador.",
  category: { id: "convert", label: "Convertir" },

  metaTitle: "SVG a PNG – convertir gratis y en alta calidad | oMyImage",
  metaDescription:
    "SVG a PNG gratis: convierte SVG a PNG a 1×, 2×, 4× o un ancho exacto, nítido, transparente o con fondo. Por lotes y sin subir nada a ningún servidor.",

  intro:
    "SVG es perfecto hasta que tienes que ponerlo en algún sitio que solo acepta imágenes normales: una publicación en redes sociales, una diapositiva, un correo, una ficha de tienda de aplicaciones o un marketplace. Con el convertidor SVG a PNG de oMyImage puedes convertir SVG a PNG exactamente al tamaño que elijas, dibujado desde cero a esa resolución, de modo que un icono de 24 píxeles exportado a 4× queda tan nítido como uno diseñado a 96 píxeles. Conserva el fondo transparente o agrega blanco o cualquier color, y convierte una carpeta entera de iconos a la vez.",

  sections: [
    {
      heading: "Por qué convertir SVG a PNG",
      id: "why",
      body: [
        "SVG describe formas en lugar de píxeles, por eso escala a cualquier tamaño y por eso a los navegadores les encanta. Muchos otros lugares no lo aceptan. Las redes sociales rechazan subidas en SVG, muchas apps de mensajería y de correo lo muestran como archivo adjunto en lugar de como imagen, las versiones antiguas de los programas de oficina lo insertan mal, y los marketplaces, las tiendas de aplicaciones y los servicios de impresión bajo demanda piden PNG o JPG.",
        "PNG es el compañero natural de SVG porque no tiene pérdida y conserva la transparencia: logotipos, iconos e ilustraciones salen con bordes limpios y fondo transparente, exactamente como se ven en el navegador.",
      ],
    },
    {
      heading: "Nítido en cualquier tamaño",
      id: "sharp",
      body: [
        "Muchos convertidores renderizan el SVG a su tamaño predeterminado y luego estiran el mapa de bits, lo que deja bordes suaves y borrosos a 2× y peores a 4×. Esta herramienta fija el tamaño de destino en el propio SVG antes de dibujarlo, así que el navegador rasteriza los vectores directamente a la resolución de salida. Las curvas, las líneas finas y el texto pequeño quedan tan nítidos como el formato permite en cualquier tamaño.",
        "Eso también significa que ampliar no tiene costo de calidad: un logotipo exportado a 4000 píxeles de ancho es un renderizado real de 4000 píxeles, apto para impresión y pantallas grandes. La salida tiene un máximo de 8192 píxeles en el lado más largo, que es donde los navegadores de muchos dispositivos dejan de poder dibujar de forma fiable.",
      ],
    },
    {
      heading: "Cómo elegir el tamaño",
      id: "sizes",
      body: [
        "Los botones de tamaño multiplican el tamaño escrito en el SVG. 1× da el tamaño que fijó el diseñador; 2× es la opción estándar para pantallas de alta resolución de teléfonos y laptops, donde una imagen necesita el doble de píxeles para verse nítida; 4× sirve para pantallas grandes e impresión. Los archivos se nombran con @2x o @4x para distinguir los tamaños fácilmente.",
        "Elige «Ancho» para fijar en su lugar un ancho exacto en píxeles, por ejemplo 512 para un icono de aplicación o 1200 para una imagen de redes sociales. La altura sigue las proporciones del propio SVG. En un lote, todos los archivos reciben ese ancho.",
      ],
    },
    {
      heading: "Fondo transparente, blanco o de color",
      id: "background",
      body: [
        "De forma predeterminada, el PNG conserva la transparencia del SVG, que se muestra sobre un patrón de cuadros en la vista previa. Elige blanco cuando la imagen vaya a un lugar que muestra la transparencia como negro —algunas apps de mensajería y programas de oficina antiguos lo hacen— o un color para colocarla sobre el color de tu marca en una publicación o una diapositiva.",
      ],
    },
    {
      heading: "Qué se renderiza y qué no",
      id: "what-renders",
      body: [
        "El SVG se convierte con el propio motor de renderizado del navegador en su modo seguro de imagen. Las formas, degradados, máscaras, filtros e imágenes incrustadas se ven igual que en una página web. Lo que necesitaría internet o código, no: los scripts nunca se ejecutan, y las imágenes, fuentes u hojas de estilo enlazadas desde otros sitios web no se cargan.",
        "El texto es lo que hay que vigilar. Si el SVG usa una fuente web enlazada en lugar de incrustada, el texto se muestra con una fuente del sistema. Para conservar la tipografía exacta, convierte el texto en contornos (trazados) en tu herramienta de diseño antes de exportar el SVG, o incrusta la fuente en el archivo.",
      ],
    },
    {
      heading: "SVG sin tamaño definido",
      id: "no-size",
      body: [
        "Algunos SVG —a menudo iconos exportados desde herramientas de diseño o copiados de bibliotecas de iconos— solo definen un viewBox, o ningún tamaño. Si hay un viewBox, sus dimensiones se usan como tamaño 1×. Si no hay nada, se aplica el valor predeterminado del navegador de 300 × 150 píxeles, y la herramienta lo indica; elige «Ancho» para fijar el tamaño que realmente quieres.",
      ],
    },
  ],

  howToTitle: "Cómo convertir SVG a PNG",
  steps: [
    { title: "Agrega archivos SVG", description: "Selecciona uno o varios archivos SVG, o arrástralos y suéltalos." },
    { title: "Elige tamaño y fondo", description: "Elige 1×, 2×, 4× o un ancho exacto, y fondo transparente, blanco o de color." },
    { title: "Descarga", description: "Un PNG se descarga directamente; varios se descargan juntos en un ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Nítido en cualquier tamaño", description: "Los vectores se dibujan a la resolución de salida, nunca se estiran desde una imagen más pequeña." },
    { icon: "opacity", title: "Transparencia conservada", description: "El PNG conserva el fondo transparente del SVG, o lleva blanco o cualquier color." },
    { icon: "burst_mode", title: "Conversión por lotes", description: "Convierte una carpeta de iconos o logotipos a la vez y descarga un solo ZIP." },
  ],

  faqs: [
    { q: "¿Cómo convierto SVG a PNG?", a: "Agrega tus archivos SVG, elige el tamaño y el fondo, y haz clic en «Descargar PNG». Varios archivos se descargan juntos en un ZIP." },
    { q: "¿Cómo obtengo un PNG de alta resolución a partir de un SVG?", a: "Elige 2× o 4×, o fija un ancho exacto de hasta 8192 píxeles. Los vectores se dibujan a esa resolución, así que el PNG queda nítido en lugar de estirado." },
    { q: "¿El PNG tendrá fondo transparente?", a: "Sí, de forma predeterminada. También puedes elegir blanco o cualquier color como fondo." },
    { q: "¿Por qué el texto se ve distinto en el PNG?", a: "Probablemente el SVG enlaza una fuente web que no está incrustada en el archivo, así que se usa una fuente del sistema. Convierte el texto en contornos, o incrusta la fuente, antes de exportar el SVG." },
    { q: "¿Por qué mi PNG mide 300 × 150 píxeles?", a: "El SVG no define tamaño ni viewBox, así que se aplica el valor predeterminado del navegador. Elige «Ancho» e introduce el tamaño que necesitas." },
    { q: "¿Puedo convertir muchos archivos SVG a la vez?", a: "Sí. Agrega todos los que quieras; cada uno se convierte con los mismos ajustes y todos se descargan en un solo ZIP." },
    { q: "¿Es seguro convertir un SVG descargado de internet?", a: "Sí. El SVG se dibuja en el modo de imagen del navegador, donde los scripts nunca se ejecutan y no se carga nada de otros sitios web." },
    { q: "¿Se suben mis archivos?", a: "No. El SVG se lee y se convierte por completo en tu navegador, y el PNG se crea en tu dispositivo." },
    { q: "¿Cuál es el PNG más grande que puedo crear?", a: "Hasta 8192 píxeles en el lado más largo. Más allá de eso, los navegadores de muchos dispositivos no pueden dibujar la imagen de forma fiable." },
    { q: "¿Puedo convertir SVG a JPG?", a: "Convierte aquí de SVG a PNG con fondo blanco y luego usa el convertidor PNG a JPG si necesitas un JPG." },
    { q: "¿Qué tamaño uso para un logotipo en redes sociales o una presentación?", a: "Para redes sociales, un ancho de 1080 o 1200 píxeles suele bastar; para diapositivas, 2× sobre el tamaño del SVG o un ancho de 1920 píxeles. Como los vectores se dibujan a la resolución elegida, siempre puedes volver a exportar más grande sin perder nitidez." },
  ],

  security:
    "Tus archivos SVG se leen y se convierten a PNG por completo en tu navegador. No se sube nada, los scripts dentro del SVG nunca se ejecutan y no se cargan recursos externos.",

  ui: {
    // SvgToPngTool.tsx
    "Select SVG files": "Seleccionar archivos SVG",
    "or drop SVG files here": "o suelta aquí archivos SVG",
    "Please select SVG files.": "Selecciona archivos SVG.",
    "{name} is not a valid SVG.": "{name} no es un SVG válido.",
    "Download PNG": "Descargar PNG",
    "Download PNGs (ZIP)": "Descargar PNG (ZIP)",
    "Clear images": "Quitar imágenes",
    "PNG settings": "Ajustes de PNG",
    "Preview": "Vista previa",
    "Output: {w} × {h} px": "Salida: {w} × {h} px",
    "Preview shows the first of {n} files": "La vista previa muestra el primero de {n} archivos",
    "Last download: {size}": "Última descarga: {size}",
    "Change files": "Cambiar archivos",
    "This SVG sets no size, so it is treated as 300 × 150 px — the browser default. Use a width to choose the output size.":
      "Este SVG no define un tamaño, así que se trata como 300 × 150 px, el valor predeterminado del navegador. Fija un ancho para elegir el tamaño de salida.",
    "Your SVG files are converted in your browser and never uploaded.": "Tus archivos SVG se convierten en tu navegador y nunca se suben.",
    "Size": "Tamaño",
    "Width": "Ancho",
    "Width (px)": "Ancho (px)",
    "Multiplies the size set in the SVG. 2× is sharp on high-resolution screens.":
      "Multiplica el tamaño definido en el SVG. 2× se ve nítido en pantallas de alta resolución.",
    "Background": "Fondo",
    "Background colour": "Color de fondo",
    "Converting…": "Convirtiendo…",
    "Processing failed.": "El procesamiento falló.",
  },
};

export default content;
