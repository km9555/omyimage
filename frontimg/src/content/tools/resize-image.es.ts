import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/redimensionar-imagen. Structure
 * lives in ToolPageShell.
 *
 * Target query "redimensionar imagen" (12.1K ES / 9.9K MX per month).
 * Secondaries "cambiar tamaño de imagen", "reducir imagen" and "escalar
 * imagen" live in the intro, section headings and FAQs ("reducir peso" in the
 * KB sense belongs to compress-image). Addressed in "tú".
 *
 * FORMATS / MODES / FITS / PRINT_UNITS labels and the social preset names are
 * module scope and are maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "resize-image",
  locale: "es",
  name: "Redimensionar imagen",
  tagline:
    "Redimensiona imágenes JPG, PNG, WEBP y GIF online: en píxeles exactos o por porcentaje, con la proporción bloqueada y por lotes. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "optimize", label: "Optimizar" },
  variantsHeading: "Redimensionar para imprimir o para redes sociales",

  metaTitle: "Redimensionar imagen online gratis – píxeles o % | oMyImage",
  metaDescription:
    "Redimensionar imagen gratis: cambia el tamaño de imagen en píxeles o porcentaje, mantén la proporción y procesa lotes. Sin registro y en tu navegador.",

  intro:
    "¿Necesitas una imagen con un tamaño exacto para una foto de perfil, una miniatura o una impresión? Con «Redimensionar imagen» de oMyImage defines las dimensiones exactas en píxeles o escalas por porcentaje, con la proporción bloqueada para que nada se vea estirado. Puedes reducir una imagen, cambiar el tamaño de una foto o escalar un lote completo de una vez, elegir el formato de salida y descargar. Todo se ejecuta en tu navegador, así que tus imágenes siguen siendo privadas.",

  sections: [
    {
      heading: "Píxeles, dimensiones y tamaño del archivo",
      id: "basics",
      body: [
        "Las dimensiones de una imagen indican cuántos píxeles mide de ancho y de alto; su tamaño de archivo, cuántos bytes ocupa guardar esos píxeles. Ambas cosas están relacionadas, pero no son lo mismo, y confundirlas es la razón más común por la que una imagen sigue pesando demasiado después de «hacerla más pequeña».",
        "Redimensionar actúa sobre el primer número. Si reduces a la mitad el ancho y el alto, queda una cuarta parte de los píxeles, y el archivo suele reducirse en una proporción parecida: un efecto mucho mayor que el que puede lograr cualquier ajuste de compresión por sí solo. Por eso redimensionar primero y comprimir después da resultados muchísimo mejores que solo comprimir.",
        "La referencia que importa es el espacio que la imagen ocupa realmente en pantalla. Una foto de 4000 píxeles de ancho mostrada en una columna de 800 píxeles entrega veinticinco veces más datos de los que la pantalla puede usar, y ninguna compresión, por ingeniosa que sea, recupera ese desperdicio.",
      ],
    },
    {
      heading: "Reducir una imagen es seguro; agrandarla, no",
      id: "direction",
      body: [
        "Hacer una imagen más pequeña es una operación sin sorpresas. El remuestreo promedia grupos de píxeles en menos píxeles, y el resultado suele verse más nítido y limpio que el original a su nuevo tamaño. Puedes reducir mucho sin que se note.",
        "Agrandar es un problema completamente distinto, porque el detalle que pides nunca se capturó. La interpolación solo puede adivinar valores entre los píxeles que existen, así que los bordes se suavizan y las texturas finas se vuelven una mancha. Una ampliación del 20–25 % suele ser aceptable; duplicar el tamaño se nota claramente peor.",
        "Si de verdad necesitas una imagen más grande, un escalador con IA es lo único que ayuda, porque genera detalle verosímil a partir de un modelo entrenado en lugar de estirar lo que hay. Aun así, está inventando información, algo importante si la imagen sirve como prueba o tiene un uso técnico.",
      ],
    },
    {
      heading: "La proporción, y qué pasa cuando no la respetas",
      id: "aspect",
      body: [
        "La relación de aspecto es la relación entre el ancho y el alto. Si la mantienes bloqueada, la imagen se escala de forma proporcional: una foto 3:2 sigue siendo 3:2 y simplemente se hace más pequeña. Si la desbloqueas, puedes forzar las dimensiones que quieras, a costa de estirar o aplastar todo lo que aparece en el encuadre. En las caras se nota de inmediato; los paisajes lo disimulan un rato y luego se ven sutilmente raros.",
        "Cuando una imagen tiene que encajar en un recuadro exacto que no coincide con sus proporciones, el orden correcto es recortar y luego redimensionar, no estirar. Al recortar descartas lo que queda fuera de la forma deseada, el contenido restante no se deforma, y al redimensionar lo llevas a las dimensiones en píxeles que necesitas.",
      ],
    },
    {
      heading: "Cambiar el tamaño de muchas imágenes a la vez",
      id: "batch",
      body: [
        "Fijar las dimensiones una vez y aplicarlas a toda una carpeta es lo habitual en catálogos de productos, galerías y cualquier sitio con un espacio fijo para imágenes. En un lote mixto, el modo de porcentaje suele ser mejor opción, porque escala cada imagen en relación con su propio tamaño en lugar de forzarlas todas a las mismas dimensiones; es útil cuando se mezclan fotos verticales y horizontales.",
        "Todo se procesa en tu navegador y se entrega en un solo ZIP, así que cien imágenes son una sola descarga y no cien. No se sube nada, salvo que una imagen sea demasiado grande para que una pestaña del navegador la procese, algo que depende de su resolución y no de su tamaño de archivo.",
      ],
    },
  ],

  howToTitle: "Cómo redimensionar una imagen",
  steps: [
    { title: "Sube tus imágenes", description: "Selecciona una o varias imágenes, o arrástralas y suéltalas en el área de trabajo." },
    { title: "Define el tamaño", description: "Redimensiona en píxeles exactos o por porcentaje, y mantén la proporción para que nada se estire." },
    { title: "Redimensiona y descarga", description: "Haz clic en «Redimensionar»: una sola imagen se descarga directamente y varias se descargan juntas en un ZIP." },
  ],

  features: [
    { icon: "straighten", title: "Píxeles o porcentaje", description: "Define un ancho y un alto exactos, o escala cada imagen a un porcentaje de su tamaño original." },
    { icon: "link", title: "Proporción bloqueada", description: "Conserva las proporciones para que las imágenes nunca se vean estiradas: cada archivo de un lote mantiene su propia relación de aspecto." },
    { icon: "lock", title: "Privado e instantáneo", description: "El cambio de tamaño se hace en tu navegador con HTML canvas, en tu propio dispositivo." },
  ],

  faqs: [
    { q: "¿Puedo redimensionar sin perder la proporción?", a: "Sí. Deja activada la opción «Mantener proporción (ajustar)» y cada imagen se escalará para caber en tu recuadro de ancho y alto sin deformarse." },
    { q: "¿Puedo cambiar el tamaño de muchas imágenes al mismo tamaño?", a: "Sí. Define las dimensiones o el porcentaje una vez y se aplican a todo el lote; los archivos se descargan juntos en un ZIP." },
    { q: "¿Redimensionar reduce la calidad?", a: "Al reducir una imagen, se mantiene nítida. Agrandarla más allá del original puede verse suave, porque no hay detalle nuevo que agregar." },
    { q: "¿Qué formatos se admiten?", a: "JPG, PNG, WEBP, GIF y BMP como entrada; puedes exportar a JPG, PNG o WEBP (o mantener el formato original)." },
    { q: "¿Es gratis y privado?", a: "Sí. Sin registro ni marca de agua, y cada imagen se redimensiona localmente en tu navegador." },
    { q: "¿Qué tamaño deben tener las imágenes de una página web?", a: "El del espacio que realmente ocupan. Una portada a todo lo ancho en un diseño de escritorio rara vez necesita más de 1920 px de ancho; una imagen dentro de un artículo, normalmente 800–1200 px; una miniatura, 300–400 px. Duplica el tamaño solo si sirves una versión 2× específica para pantallas de alta densidad." },
    { q: "¿Qué diferencia hay entre redimensionar y comprimir?", a: "Redimensionar cambia cuántos píxeles hay; comprimir cambia qué tan eficientemente se guardan. En imágenes web, redimensionar suele ser la mayor ganancia, porque una foto que se muestra a 800 px de ancho pero se guarda a 4000 px carga veinticinco veces los píxeles que puede mostrar. Hacer ambas cosas da el resultado más pequeño." },
    { q: "¿Por qué mi imagen agrandada se ve borrosa?", a: "Porque el detalle no existe. Al escalar hacia arriba solo se puede interpolar entre los píxeles que ya hay, así que los bordes se suavizan y las texturas se emborronan. Si de verdad necesitas una imagen más grande, el escalador con IA reconstruye detalle verosímil en lugar de solo estirar lo que hay." },
    { q: "¿Puedo redimensionar a un ancho y alto exactos?", a: "Sí: desactiva «Mantener proporción (ajustar)» y define ambos valores. Ten en cuenta que la imagen se estirará si tus números no coinciden con sus proporciones. Para llenar un recuadro exacto sin deformar, recorta primero y redimensiona después." },
    { q: "¿Redimensionar cambia el formato del archivo?", a: "Solo si tú lo pides. Puedes mantener el formato original o exportar a JPG, PNG o WEBP. Convertir a WEBP al mismo tiempo es una forma habitual de conseguir menos píxeles y un archivo más pequeño en una sola pasada." },
    { q: "¿Puedo cambiar el tamaño de una foto en centímetros para imprimir?", a: "Sí. Elige centímetros o milímetros como unidad y una resolución en DPI: la herramienta calcula píxeles = tamaño × DPI. 300 DPI es el valor habitual para fotos impresas. Guarda en JPG o PNG, porque WEBP no puede almacenar el dato de DPI." },
    { q: "¿Se suben mis imágenes a un servidor?", a: "Por lo general, no. El cambio de tamaño se hace localmente en el navegador. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora." },
  ],

  security:
    "Tus imágenes siguen siendo privadas. El cambio de tamaño se hace en tu navegador con HTML canvas: sin almacenamiento y sin rastreo de tus archivos. Solo una imagen de más de unos 16 megapíxeles, demasiado grande para una pestaña del navegador, va a nuestro servidor y se elimina en aproximadamente una hora.",

  ui: {
    // ResizeTool.tsx
    "Resize": "Redimensionar",
    "Resize & download": "Redimensionar y descargar",
    "Resize Settings": "Configuración de tamaño",
    "Resize settings": "Configuración de tamaño",
    "Resize failed.": "No se pudo redimensionar.",
    "Resize {n} images": "Redimensionar {n} imágenes",
    "Resized 1 image.": "Se redimensionó 1 imagen.",
    "Resized {n} images.": "Se redimensionaron {n} imágenes.",
    "Resizing…": "Redimensionando…",
    "Type": "Tipo",
    "Size": "Tamaño",
    "Scale": "Escala",
    "Target": "Objetivo",
    "Current": "Actual",
    "Custom size": "Tamaño personalizado",
    "Preset type": "Tipo de preajuste",
    "Choose the social media platform": "Elige la red social",
    "Pick a platform and a preset size.": "Elige una plataforma y un tamaño predefinido.",
    "Width (px)": "Ancho (px)",
    "Height (px)": "Alto (px)",
    "Width ({unit})": "Ancho ({unit})",
    "Height ({unit})": "Alto ({unit})",
    "Unit": "Unidad",
    "Resolution (DPI)": "Resolución (DPI)",
    "{dpi} DPI": "{dpi} DPI", // i18n-same
    "Pixels = size × DPI. 300 DPI is the usual quality for printed photos.": "Píxeles = tamaño × DPI. 300 DPI es la calidad habitual para fotos impresas.",
    "WEBP can't store a DPI — choose JPG or PNG so the file keeps its print size.": "WEBP no puede guardar los DPI: elige JPG o PNG para que el archivo conserve su tamaño de impresión.",
    "How to fit the image": "Cómo ajustar la imagen",
    "Keep aspect ratio (fit)": "Mantener proporción (ajustar)",
    "Keep aspect ratio on to avoid stretching.": "Mantén la proporción activada para que nada se estire.",
    "Padding colour": "Color del borde",
    "First image → {w} × {h} px": "Primera imagen → {w} × {h} px",
    "— each keeps its own ratio": "— cada una mantiene su propia proporción",
    "set a size": "define un tamaño",
    "unknown": "desconocido",
    "Output format": "Formato de salida",
    "JPG background": "Fondo del JPG",
    "Quality": "Calidad",
    "or drop JPG, PNG, WEBP or GIF images here": "o suelta aquí imágenes JPG, PNG, WEBP o GIF",
    // Per-image quick edit
    "Crop|verb": "Recortar",
    "Rotate left": "Girar a la izquierda",
    "Rotate right": "Girar a la derecha",
    "Couldn't apply that edit.": "No se pudo aplicar esa edición.",
    "This image is too large to edit in the browser": "Esta imagen es demasiado grande para editarla en el navegador",
    "edited": "editada",
    "Details": "Detalles",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Quitar archivos",
    "Download": "Descargar",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Original": "Original", // i18n-same
    "Please select image files.": "Selecciona archivos de imagen.",
    "Remove": "Quitar",
    // FORMATS / MODES / FITS (module scope, §4.2)
    "Same as original": "Igual que el original",
    "By pixels": "En píxeles",
    "By percent": "Por porcentaje",
    "Social media": "Redes sociales",
    "Crop to fill": "Recortar y rellenar",
    "Pad": "Rellenar con borde",
    "Fit inside": "Ajustar dentro",
    "Exactly the preset size, overflow trimmed off the edges.":
      "Exactamente el tamaño predefinido; lo que sobra se recorta de los bordes.",
    "Exactly the preset size, the whole image kept, bars filled in.":
      "Exactamente el tamaño predefinido, con la imagen completa y bordes rellenos.",
    "Keeps the ratio, so the output is smaller than the preset.":
      "Mantiene la proporción, así que el resultado es más pequeño que el predefinido.",
    // FIT_NOTE (lib/image/fit.ts)
    "cropped to fill": "recortada para rellenar",
    "padded to fit": "con borde para ajustar",
    "fitted inside": "ajustada dentro",
    // Social preset names (lib/social-presets.ts)
    "Profile": "Perfil",
    "Square post": "Publicación cuadrada",
    "Portrait post": "Publicación vertical",
    "Landscape post": "Publicación horizontal",
    "Story / Reel": "Historia / Reel",
    "Cover": "Portada",
    "Shared post": "Publicación compartida",
    "Story": "Historia",
    "Event cover": "Portada de evento",
    "Header": "Encabezado",
    "Post image": "Imagen de publicación",
    "Company logo": "Logotipo de empresa",
    "Channel icon": "Icono del canal",
    "Profile banner": "Banner de perfil",
    "Server banner": "Banner del servidor",
    "Server icon": "Icono del servidor",
    // Print size mode (ResizeTool; PRINT_UNITS and MODES are module scope)
    "Print size": "Tamaño de impresión",
    "cm": "cm", // i18n-same
    "mm": "mm", // i18n-same
    "in": "pulg.",
    "Channel art": "Banner del canal",
    "Thumbnail": "Miniatura",
    "Standard pin": "Pin estándar",
    "Square pin": "Pin cuadrado",
    "Video / Story": "Video / Historia",
    "Status": "Estado",
    // Blur fill (FITS / FIT_NOTES) and YouTube Shorts
    "Blur fill": "Fondo difuminado",
    "Exactly the preset size, the whole image kept, bars filled with a blurred copy of it.":
      "Exactamente el tamaño predefinido, con la imagen completa y bordes rellenos con una copia difuminada de ella.",
    "padded with a blur": "con borde difuminado",
    "Shorts": "Shorts", // i18n-same — YouTube's Spanish UI says Shorts
  },
};

export default content;
