import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/recortar-foto-en-circulo.
 *
 * Primary query "Recortar foto en círculo"; secondary "recortar imagen
 * circular", "foto circular". Profile pictures are "foto de perfil", which the
 * copy uses where the English says profile picture; "avatar" is understood too.
 */
const content: ToolPageContent = {
  toolId: "circle-crop",
  locale: "es",
  name: "Recortar foto en círculo",
  tagline:
    "Recorta imágenes en un círculo perfecto online, ideal para avatares y fotos de perfil, con fondo transparente, aro opcional y procesamiento por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Recortar foto en círculo – foto circular PNG | oMyImage",
  metaDescription:
    "Recorta tu foto en círculo con fondo transparente: mueve el círculo, agrega un aro y guarda la imagen circular en PNG. Gratis, sin registro y sin subir nada.",

  intro:
    "Crea avatares redondos y fotos de perfil impecables en segundos. La herramienta Recortar foto en círculo de oMyImage recorta tu imagen en un círculo suave directamente en tu navegador: arrastra el círculo para encuadrar justo lo que quieres, cambia su tamaño, haz zoom para colocarlo con precisión y elige el tamaño de exportación. Es transparente por defecto, con rellenos de color y aro opcionales. Recorta una imagen circular o un lote entero: no se sube nada, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "La transparencia lo es todo",
      id: "transparency",
      body: [
        "Un recorte circular solo es realmente circular si las esquinas son transparentes. Si no, tienes una imagen cuadrada con un círculo dibujado, y en cuanto la colocas sobre un fondo de otro color, el cuadrado se hace visible.",
        "Eso convierte el formato de exportación en la decisión más importante, y en la que más gente se equivoca. PNG y WEBP tienen canal alfa y mantienen vacías las esquinas. JPG no tiene canal alfa, así que la zona fuera del círculo tiene que rellenarse con algo, y por eso un recorte circular en JPG llega con una caja blanca alrededor.",
        "Si sabes que la imagen siempre irá sobre un color sólido conocido, rellenar con ese color funciona bien. Si puede acabar en cualquier sitio, usa PNG.",
      ],
    },
    {
      heading: "Dónde se necesitan de verdad las fotos circulares",
      id: "uses",
      body: [
        "La mayoría de las redes sociales aplican ellas mismas la máscara circular a los avatares, así que basta con subir un cuadrado. Los casos que necesitan un recorte circular real son aquellos en los que nada hará la máscara por ti.",
        "Eso incluye las páginas de equipo y las firmas de autor de un sitio web, las fotos de rostro en diapositivas de presentaciones, las fotos de colaboradores en un PDF o informe, logotipos e insignias, firmas de correo electrónico y materiales impresos. En todos ellos colocas directamente un archivo de imagen, y si sus esquinas no son transparentes, se verán.",
        "También resulta práctico para fotos de producto e iconos, donde un recorte redondo simplemente se ve más acabado que un rectángulo flotando en el diseño.",
      ],
    },
    {
      heading: "Componer dentro de un círculo",
      id: "composition",
      body: [
        "Un círculo recorta más de lo que parece: las esquinas del original desaparecen por completo, así que todo lo que esté cerca de un borde se pierde. Deja más espacio alrededor del sujeto que en un recorte rectangular.",
        "En los retratos, la colocación fiable es con los ojos un poco por encima del centro y algo de espacio sobre la cabeza. Centrar matemáticamente toda la cabeza suele dejar un hueco raro arriba y cortar la barbilla. Si llenas el círculo con la cara, resulta agobiante; si dejas un pequeño margen, se lee como un retrato pensado.",
        "Si puedes, parte de una imagen más o menos cuadrada. Recortar en círculo una foto horizontal muy ancha desecha la mayor parte del encuadre, así que un original más cerrado te da mucha más resolución útil en el resultado.",
      ],
    },
    {
      heading: "Tamaño y aros",
      id: "sizing",
      body: [
        "Entre 400 y 800 píxeles por lado cubre cualquier uso realista. Las plataformas reducen la imagen a sus propias dimensiones, así que más resolución que eso son bytes desperdiciados; mucho menos y la imagen se ve borrosa en una pantalla de alta densidad.",
        "Un aro fino alrededor del borde resuelve un problema concreto: un retrato claro sobre una página clara no tiene un límite visible y la cabeza parece flotar. Un aro de uno o dos píxeles en un tono medio define la forma sin llamar la atención. Los aros más gruesos empiezan a parecer un marco, y eso ya es una decisión de diseño, no una corrección.",
      ],
    },
  ],

  howToTitle: "Cómo recortar una foto en círculo",
  steps: [
    { title: "Subir", description: "Selecciona una o varias imágenes, o arrástralas al área de trabajo." },
    { title: "Colocar el círculo", description: "Arrastra el círculo donde quieras, arrastra su tirador para cambiar el tamaño, haz zoom para ver el detalle y luego define el tamaño de salida, el fondo y el aro opcional." },
    { title: "Recortar y descargar", description: "Haz clic en «Recortar en círculo y descargar»: una imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "panorama_fish_eye", title: "Recorta justo donde quieras", description: "Arrastra el círculo sobre la parte de la foto que realmente quieres, cambia su tamaño con el tirador y haz zoom para colocarlo con precisión." },
    { icon: "blur_circular", title: "Transparente o con marco", description: "Exporta un PNG/WEBP transparente o agrega un fondo de color y un aro alrededor del círculo." },
    { icon: "lock", title: "Por lotes y privado", description: "Recorta en círculo un lote entero de una vez, todo en tu navegador: las imágenes nunca se suben." },
  ],

  faqs: [
    { q: "¿El fondo será transparente?", a: "Sí, por defecto: exporta en PNG o WEBP para que las esquinas fuera del círculo sigan siendo transparentes. Elige JPG para aplanar la imagen sobre un color." },
    { q: "¿Y si mi imagen no es cuadrada?", a: "No hace falta que lo sea. El círculo empieza centrado, casi tan ancho como el lado más corto, y puedes arrastrarlo a cualquier parte de la imagen y cambiar su tamaño, así que una cara en la esquina de una foto ancha es igual de fácil de recortar que una centrada. «Centrar y restablecer zoom» lo devuelve a su sitio." },
    { q: "¿Puedo elegir dónde va el círculo?", a: "Sí. Arrastra el círculo para moverlo, arrastra el tirador de su borde para cambiar el tamaño y desplaza la rueda para hacer zoom cuando necesites precisión. Las flechas del teclado lo mueven píxel a píxel (mantén Shift (Mayús) para mover diez) y + y − cambian su tamaño." },
    { q: "¿De qué tamaño será la imagen exportada?", a: "Por defecto, «Original» exporta el círculo con su propia resolución en la imagen de origen, así que nunca se amplía. También puedes forzar 256, 512 o 1024 píxeles por lado, algo cómodo para avatares que tienen un espacio fijo que llenar." },
    { q: "¿Puedo agregar un aro alrededor del círculo?", a: "Sí. Define el grosor y el color del aro para añadir un borde limpio al recorte circular." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro y sin marca de agua, y cada imagen se procesa localmente en tu navegador." },
    { q: "¿Por qué mi recorte circular tiene un cuadrado blanco detrás?", a: "Porque exportaste en JPG. JPG no admite transparencia, así que todo lo que queda fuera del círculo tiene que rellenarse con un color sólido. Exporta en PNG o WEBP y las esquinas quedarán realmente transparentes." },
    { q: "¿De qué tamaño debe ser una foto de perfil?", a: "Entre unos 400 × 400 y 800 × 800 cubre prácticamente todas las plataformas. Todas reducen la imagen a su propio tamaño de visualización, así que más de unos 800 píxeles no aporta nada, mientras que menos de unos 200 se ve borroso en una pantalla de alta densidad." },
    { q: "¿Necesito recortar en círculo una foto de perfil?", a: "Normalmente no: la mayoría de las plataformas aplican su propia máscara circular al cuadrado que subas. Hacerlo tú importa cuando necesitas la imagen redonda en un sitio que no la va a enmascarar: un sitio web, una diapositiva, un PDF, una firma de correo o un documento impreso." },
    { q: "¿Cómo centro el recorte en una cara?", a: "Coloca el círculo de modo que los ojos queden un poco por encima del centro, no justo en medio. Centrar toda la cabeza suele dejar demasiado espacio arriba y cortar la barbilla. Deja un poco de aire alrededor de la cabeza en lugar de llenar el círculo de borde a borde." },
    { q: "¿Cuándo vale la pena agregar un aro?", a: "Cuando la imagen vaya sobre un fondo de tono parecido: sin aro, el borde de un retrato claro puede desaparecer contra una página clara y la cabeza parece flotar. Mantenlo fino; un aro grueso compite con el sujeto." },
    { q: "¿La imagen pierde calidad?", a: "No. El recorte conserva los píxeles restantes exactamente como estaban. El único coste de calidad está en la exportación, y eligiendo PNG evitas incluso eso." },
    { q: "¿Puedo hacer una foto circular desde el teléfono?", a: "Sí. La herramienta funciona en el navegador del teléfono: elige la foto de tu galería, arrastra el círculo con el dedo y descarga la foto circular en PNG. Tampoco en ese caso se sube nada." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El recorte circular se hace por completo en tu navegador con canvas HTML: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // CircleCropTool.tsx
    "Please select image files.": "Selecciona archivos de imagen.",
    "Couldn't read {name}.": "No se pudo leer {name}.",
    "or drop JPG, PNG or WEBP images here": "o suelta aquí imágenes JPG, PNG o WEBP",
    "Files": "Archivos",
    "1 image": "1 imagen",
    "{n} images": "{n} imágenes",
    "Clear images": "Borrar imágenes",
    "Remove": "Quitar",
    "Preview {name}": "Vista previa de {name}",
    "Drag the circle to move it, or a corner handle to resize":
      "Arrastra el círculo para moverlo, o un tirador de esquina para cambiar el tamaño",
    "Zoom": "Zoom", // i18n-same
    "Recentre & reset zoom": "Centrar y restablecer zoom",
    "exports at": "se exporta a",
    "Circle Crop Settings": "Ajustes del recorte circular",
    "Circle crop settings": "Ajustes del recorte circular",
    "Output size": "Tamaño de salida",
    "Original exports the circle at its own resolution in the source image — it never upscales. The fixed sizes suit avatars with a set slot to fill.":
      "«Original» exporta el círculo con su propia resolución en la imagen de origen: nunca se amplía. Los tamaños fijos sirven para avatares con un espacio determinado que llenar.",
    "Output format": "Formato de salida",
    "Quality": "Calidad",
    "Background": "Fondo",
    "Ring thickness": "Grosor del aro",
    "Ring color": "Color del aro",
    "— applied to all {n} images": "— se aplica a las {n} imágenes",
    "Crop": "Recortar",
    "Cropping…": "Recortando…",
    "Circle crop {n}": "Recortar {n} en círculo",
    "Circle crop & download": "Recortar en círculo y descargar",
    "Circle-cropped 1 image.": "Se recortó 1 imagen en círculo.",
    "Circle-cropped {n} images.": "Se recortaron {n} imágenes en círculo.",
    "Circle crop failed.": "Error al recortar en círculo.",
    "done": "listo",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
  },
};

export default content;
