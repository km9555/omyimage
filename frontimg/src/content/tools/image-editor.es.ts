import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish (neutral, ES + LatAm) copy for /es/editor-de-fotos. Structure lives
 * in ToolPageShell.
 *
 * Target query "editor de fotos" (12.1K ES / 33.1K MX per month); "editar
 * fotos", "editar imagen", "editor de imágenes", "gratis" and "online" are the
 * secondaries and live in the metaTitle, intro, a section heading and the
 * FAQs. The page is honest that this is not a Photoshop replacement, same as
 * the English one. Addressed in "tú".
 *
 * RIBBON, ASPECTS, PRESETS, ADJ_SLIDERS, FONTS, SHAPE_LABELS and the nine
 * position names are module scope, maintained here by hand (§4.2). The default
 * annotate stamp text ("Label") is drawn INTO the image, so it is translated.
 */
const content: ToolPageContent = {
  toolId: "image-editor",
  locale: "es",
  name: "Editor de fotos",
  seoName: "Editor de imágenes online",
  crumbLabel: "Editor de fotos",
  tagline:
    "Edita imágenes online en un solo lugar: recortar, redimensionar, girar, ajustar, filtros, desenfoque, bordes, recorte circular, marca de agua y dibujo, con deshacer y rehacer. Gratis, rápido y 100 % privado en tu navegador.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "Editor de fotos online gratis – editar imagen | oMyImage",
  metaDescription:
    "Editor de fotos gratis en tu navegador: recorta, gira, ajusta el brillo, aplica filtros y agrega texto o marca de agua. Edita fotos online sin registro.",

  intro:
    "Un solo editor para todo. El «Editor de fotos» de oMyImage reúne en un mismo lienzo recortar, redimensionar, girar y voltear, ajustes de color y filtros, blanco y negro, desenfoque, bordes, recorte circular, marcas de agua de texto y logotipo, y dibujo a mano alzada. Aplica las ediciones en el orden que quieras, deshaz y rehaz con libertad, y exporta una sola vez cuando termines. Así puedes editar fotos online gratis, sin instalar ningún programa ni registrarte, y como todo se ejecuta en tu navegador, tu imagen se mantiene completamente privada.",

  sections: [
    {
      heading: "Las ediciones que la gente realmente necesita",
      id: "scope",
      body: [
        "La mayor parte de la edición de imágenes no es retoque. Es enderezar una foto torcida, recortar un borde que distrae, redimensionar algo para cumplir un límite de carga, dibujar una flecha en una captura de pantalla o aclarar una foto tomada en una habitación oscura. Esas tareas tienen dos cosas en común: toman menos de un minuto y no justifican abrir un programa profesional.",
        "Ese es el hueco que cubre este editor de imágenes. Todo está en un mismo lienzo, así que puedes recortar, girar, ajustar y anotar sin cambiar de herramienta ni exportar a mitad del proceso. Al terminar, una sola exportación te da el archivo final.",
        "A propósito, no es un sustituto de Photoshop. No hay capas, máscaras ni modos de fusión, porque agregarlos haría más lento el noventa por ciento de las ediciones que nunca los necesitaron.",
      ],
    },
    {
      heading: "Editar fotos en el orden correcto",
      id: "order",
      body: [
        "Primero la composición: recorta y endereza antes que nada, para que los pasos siguientes trabajen solo sobre los píxeles que vas a conservar. Corregir la exposición de una zona que estás a punto de recortar es trabajo perdido, y recortar después de redimensionar desecha resolución que conservaste a propósito.",
        "Después los ajustes —brillo, contraste, saturación—, mientras todavía tienes la imagen completa para juzgar. Luego las anotaciones, porque las flechas y los recuadros deben quedar en su posición final respecto a un encuadre que ya no va a cambiar.",
        "Redimensiona al final, justo antes de exportar. Así las anotaciones se escalan una sola vez, al final, en lugar de dibujarse a un tamaño y comprimirse a otro. Una frustración habitual —un texto que se veía bien en el lienzo y es ilegible en el archivo exportado— casi siempre viene de redimensionar después de anotar.",
      ],
    },
    {
      heading: "Anotar capturas de pantalla",
      id: "annotation",
      body: [
        "Dibujar sobre una captura de pantalla es uno de los motivos más comunes para abrir un editor: marcar un error para un desarrollador, señalar una opción en una respuesta de soporte o resaltar una cláusula en un documento.",
        "Dos cosas hacen que una anotación funcione. Primero, el contraste: una flecha roja desaparece sobre un aviso de error rojo, así que elige un color que choque con la interfaz en lugar de combinar con ella. Segundo, la moderación: tres flechas y un recuadro comunican; quince marcas, no.",
        "Exporta las capturas de pantalla en PNG y no en JPG. Las capturas de una interfaz son casi solo bordes nítidos y texto pequeño, justo el contenido que JPG maneja peor: aparece un halo tenue alrededor de cada carácter y el archivo a menudo ni siquiera es más pequeño.",
      ],
    },
    {
      heading: "Nada sale de tu dispositivo",
      id: "privacy",
      body: [
        "Todo el editor funciona sobre un HTML canvas dentro de la pestaña de tu navegador. Tu imagen se lee del disco a la memoria, se edita ahí y se vuelve a escribir al exportar: nunca se sube, y no hay ninguna copia en un servidor que pueda conservarse o filtrarse.",
        "Eso importa más de lo que parece, por lo que la gente suele editar. Las capturas de pantalla contienen correos electrónicos, números de cuenta, paneles internos y pestañas abiertas. Los documentos fotografiados para subirlos contienen todo lo que contiene un documento. Hacer ese trabajo en local significa que la pregunta de quién más tiene una copia ni siquiera se plantea.",
        "Un efecto práctico: una vez cargada la página, el editor sigue funcionando sin conexión.",
      ],
    },
  ],

  howToTitle: "Cómo editar una imagen online",
  steps: [
    { title: "Abre una imagen", description: "Selecciona una imagen, o arrástrala y suéltala en el editor." },
    { title: "Elige una herramienta", description: "Haz clic en cualquier icono de la barra —recortar, girar, ajustar, desenfocar, borde, redondear, marca de agua o dibujar— y ajusta sus opciones con vista previa en vivo." },
    { title: "Aplica y repite", description: "Aplica cada edición para acumular cambios, con deshacer y rehacer completos, y encadena todas las herramientas que quieras." },
    { title: "Exporta", description: "Descarga la imagen final en PNG, JPG o WEBP." },
  ],

  features: [
    { icon: "dashboard_customize", title: "Todas las herramientas en un lugar", description: "Recortar, redimensionar, girar, voltear, ajustar, filtros, blanco y negro, desenfoque, borde, redondear, marca de agua y dibujo, sin salir de la página." },
    { icon: "history", title: "Deshacer y rehacer", description: "Aplica ediciones una tras otra y avanza o retrocede con libertad, o vuelve al original en cualquier momento." },
    { icon: "lock", title: "100 % privado", description: "Todo el editor se ejecuta en tu navegador con HTML canvas: tu imagen nunca se sube a un servidor." },
  ],

  faqs: [
    { q: "¿Qué puedo hacer en el editor de fotos?", a: "Recortar y redimensionar, girar y voltear, ajustar brillo, contraste, saturación y tono con filtros predefinidos, pasar a blanco y negro, desenfocar, agregar un borde, recortar en círculo, añadir una marca de agua de texto o logotipo, y dibujar o hacer anotaciones, todo en una misma imagen." },
    { q: "¿Puedo deshacer un cambio?", a: "Sí. Cada edición aplicada se agrega a un historial que puedes deshacer y rehacer, y puedes volver al original en cualquier momento." },
    { q: "¿El editor trabaja a resolución completa?", a: "Sí. Las ediciones se componen sobre un canvas a resolución completa. Exporta en PNG para una salida sin pérdida, o en JPG/WEBP con un control de calidad." },
    { q: "¿Tengo que instalar algo o registrarme?", a: "No. Es un editor de fotos online gratis que funciona por completo en tu navegador: sin registro, sin instalación, y tu imagen nunca sale de tu dispositivo." },
    { q: "¿De verdad es privado?", a: "Sí. Toda la edición se hace localmente en tu navegador; no se sube ni se guarda nada." },
    { q: "¿Funciona en cualquier PC o teléfono?", a: "Sí. Funciona en el navegador que ya tienes, en Windows, macOS, Linux, Android e iOS. No hay nada que descargar, ninguna cuenta que crear ni suscripción; de eso se trata, porque la mayoría de las ediciones que la gente necesita toman menos de un minuto y no justifican instalar un programa de fotografía." },
    { q: "¿Cómo se compara con Photoshop?", a: "No se compara, ni lo pretende. Aquí no hay capas, máscaras, curvas ni modos de fusión. Lo que sí cubre es el conjunto de operaciones que representan la inmensa mayoría de las ediciones cotidianas —recortar, girar, redimensionar, ajustar, anotar, exportar— sin tiempo de carga ni licencia." },
    { q: "¿Editar modifica mi archivo original?", a: "No. La imagen se carga en memoria y todo ocurre sobre una copia: nada se confirma hasta que exportas, y el archivo de tu disco nunca se toca. Además, el dibujo se puede borrar sin afectar el resto de tu trabajo." },
    { q: "¿Qué formatos puedo abrir y guardar?", a: "Puedes abrir JPG, PNG, WEBP, GIF y BMP, y guardar en JPG, PNG o WEBP. Los GIF animados se abren con su primer fotograma, porque el editor trabaja con una sola imagen fija." },
    { q: "¿Editar reduce la calidad de la imagen?", a: "Recortar, girar en ángulos rectos y voltear son operaciones sin pérdida. Reducir el tamaño también lo es en la práctica. El único momento en que se gasta calidad es al exportar, así que elige PNG o WEBP si quieres conservarlo todo exacto, o JPG con una calidad alta si quieres un archivo más pequeño." },
    { q: "¿Puedo editar fotos desde el teléfono?", a: "Sí. El diseño se adapta a pantallas pequeñas y el lienzo responde al tacto, así que recortar y anotar funciona con el dedo. Las imágenes muy grandes están limitadas por la memoria que tu teléfono le da al navegador, no por la herramienta." },
    { q: "¿Hay filtros listos como en Instagram?", a: "Sí: Original, Vívido, B/N, Sepia, Frío y Cálido en la herramienta «Ajustar», además de «Mejora automática», que corrige con un toque una exposición plana u oscura. Después de elegir un filtro, los controles siguen activos, así que puedes afinar a mano el brillo, el contraste, la saturación, el tono y el sepia." },
    { q: "¿Puedo escribir texto sobre una imagen?", a: "Sí. Con la herramienta de marca de agua colocas texto o un logotipo con la fuente, el tamaño, el color, la opacidad y la posición que elijas; con la herramienta de dibujo agregas flechas, líneas, rectángulos y elipses." },
  ],

  security:
    "Tu imagen sigue siendo privada. Todo el editor se ejecuta en tu navegador con HTML canvas: no se sube nada a ningún servidor. Sin almacenamiento y sin rastreo de tus archivos.",

  ui: {
    // AllInOneEditor.tsx
    "Please select an image file.": "Selecciona un archivo de imagen.",
    "Couldn't read that image.": "No se pudo leer esa imagen.",
    "Applied.": "Aplicado.",
    "Couldn't apply that edit.": "No se pudo aplicar esa edición.",
    "Exported your edited image.": "Se exportó tu imagen editada.",
    "Export failed.": "No se pudo exportar.",
    "Couldn't read that logo.": "No se pudo leer ese logotipo.",
    "Open an image": "Abrir una imagen",
    "or drop a JPG, PNG, WEBP or GIF to start editing": "o suelta aquí un JPG, PNG, WEBP o GIF para empezar a editar",
    "Drag the box or its corners to set the crop, then Apply.": "Arrastra el recuadro o sus esquinas para definir el recorte y luego haz clic en «Aplicar».",
    "Draw on the image, then Apply to bake it in.": "Dibuja sobre la imagen y luego haz clic en «Aplicar» para fijarlo.",
    "Live preview — adjust on the right, then Apply.": "Vista previa en vivo: ajusta a la derecha y luego «Aplicar».",
    "Live preview — open the options below, then Apply.": "Vista previa en vivo: abre las opciones de abajo y luego «Aplicar».",
    "Watermark": "Marca de agua",
    "Editor": "Editor", // i18n-same
    "Export image": "Exportar imagen",
    "Export": "Exportar",
    "Left": "Izquierda",
    "Right": "Derecha",
    "Flip H": "Voltear H",
    "Flip V": "Voltear V",
    "Fine angle": "Ángulo fino",
    "Width": "Ancho",
    "Height": "Alto",
    "Lock aspect ratio": "Bloquear proporción",
    "Intensity": "Intensidad",
    "Blur strength": "Intensidad del desenfoque",
    "Thickness": "Grosor",
    "Corner rounding": "Redondeo de esquinas",
    "Border color": "Color del borde",
    "Ring thickness": "Grosor del aro",
    "Ring color": "Color del aro",
    "Text": "Texto",
    "Logo": "Logotipo",
    "Size": "Tamaño",
    "Text color": "Color del texto",
    "Change logo": "Cambiar logotipo",
    "Upload logo": "Subir logotipo",
    "Logo size": "Tamaño del logotipo",
    "Opacity": "Opacidad",
    "Position": "Posición",
    "Text to stamp": "Texto que se estampa",
    "Label": "Etiqueta",
    "Color": "Color", // i18n-same
    "Stroke / size": "Trazo / tamaño",
    "Clear drawing": "Borrar dibujo",
    "Undo": "Deshacer",
    "Redo": "Rehacer",
    "Revert to original": "Volver al original",
    "Change": "Cambiar",
    "JPG background": "Fondo del JPG",
    // RIBBON (module scope, §4.2)
    "Crop": "Recortar",
    "Rotate": "Girar",
    "Resize": "Tamaño",
    "Adjust": "Ajustar",
    "Gray": "B/N",
    "Blur": "Desenfocar",
    "Border": "Borde",
    "Round": "Redondear",
    "Mark": "Marca",
    "Draw": "Dibujar",
    // ASPECTS
    "Free": "Libre",
    // ADJ presets and sliders
    "Original": "Original", // i18n-same
    "Vivid": "Vívido",
    "B&W": "B/N",
    "Sepia": "Sepia", // i18n-same
    "Cool": "Frío",
    "Warm": "Cálido",
    "Brightness": "Brillo",
    "Contrast": "Contraste",
    "Saturation": "Saturación",
    "Hue": "Tono",
    "Auto enhance": "Mejora automática",
    // FONTS
    "Sans": "Sans", // i18n-same
    "Serif": "Serif", // i18n-same
    "Impact": "Impact", // i18n-same
    "Mono": "Mono", // i18n-same
    // SHAPE_LABELS
    "Pen": "Lápiz",
    "Line": "Línea",
    "Arrow": "Flecha",
    "Rectangle": "Rectángulo",
    "Ellipse": "Elipse",
    // POSITION_LABELS
    "Top left": "Arriba a la izquierda",
    "Top center": "Arriba al centro",
    "Top right": "Arriba a la derecha",
    "Middle left": "Centro a la izquierda",
    "Center": "Centro",
    "Middle right": "Centro a la derecha",
    "Bottom left": "Abajo a la izquierda",
    "Bottom center": "Abajo al centro",
    "Bottom right": "Abajo a la derecha",
  },
};

export default content;
