/**
 * Spanish home page — HomeShell, HomeLauncher and ToolDirectory, which render
 * only on `/es`. Loaded with that route through HomeShell's <I18nScope>, so
 * this prose is not bundled on every page (common.ts is).
 *
 * Written for the Spanish and Mexican SERP in neutral Spanish ("tú", no
 * regionalisms), not translated from the English brand line: the H1 and the
 * intro carry the head terms editar / comprimir / convertir imágenes and
 * quitar fondo, plus "gratis", "online" and "sin registro". Every key that
 * names oMyImage keeps it verbatim (Google's OAuth review matches it against
 * the consent screen). "drive.file" is an OAuth scope identifier and is never
 * translated.
 */
export const esHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser": "Herramientas gratis: la mayoría funciona directamente en tu navegador",
  "Effortless Power for Image Workflows.": "Editar imágenes gratis y online.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "Con oMyImage puedes comprimir imágenes, convertirlas, recortarlas, cambiar su tamaño o quitar el fondo: gratis, online y sin registro.",
  "Step 1 · Upload your images": "Paso 1 · Sube tus imágenes",
  "Add images": "Añadir imágenes",
  "Drag & drop images or click to browse": "Arrastra tus imágenes aquí o haz clic para elegirlas",
  "+ More": "+ Más",
  "Remove {name}": "Quitar {name}",
  "Step 2 · Choose an action": "Paso 2 · Elige una acción",
  "Upload an image first": "Primero sube una imagen",
  "Search an action, e.g. compress or resize": "Busca una acción, p. ej. comprimir o redimensionar",
  "We can't process this file type yet.": "Todavía no podemos procesar este tipo de archivo.",
  "No matching action.": "Ninguna acción coincide.",
  "Continue": "Continuar",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "Privado por defecto",
  "Most tools run in your browser, so your images never leave your device.":
    "La mayoría de las herramientas funciona en tu navegador, así que tus imágenes no salen de tu dispositivo.",
  "{n} free image tools": "{n} herramientas de imagen gratis",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "Comprime, redimensiona, convierte, edita y crea GIF. Sin registro.",
  "Google Drive import is optional": "Importar desde Google Drive es opcional",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "oMyImage solo lee los archivos que eliges y no guarda nada en nuestros servidores.",
  "How we use Google data": "Cómo usamos los datos de Google",
  "Favorites": "Favoritos",
  "No tools in {category} yet.": "Todavía no hay herramientas en {category}.",
  "Browse all image format converters": "Ver todos los convertidores de formato de imagen",
  "All tools": "Todas las herramientas",
  "Tool categories": "Categorías de herramientas",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Cómo funciona",
  "Upload": "Subir",
  "Drop in your images or pick them from your device.":
    "Arrastra tus imágenes o elígelas desde tu dispositivo.",
  "Transform": "Transformar",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "Elige una herramienta y ajusta las opciones. El trabajo lo hace tu navegador; solo las tareas más pesadas pasan por nuestros servidores.",
  "Download|step": "Descargar",
  "Save the result to your device, ready to use.":
    "Guarda el resultado en tu dispositivo, listo para usar.",
  "About oMyImage": "Acerca de oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "es un conjunto gratuito de herramientas de imagen online para el trabajo de todos los días. En un solo sitio puedes comprimir imágenes, cambiar su tamaño, recortarlas, girarlas, convertirlas, ponerles marca de agua, editarlas y animarlas: {n} herramientas, cada una en su propia página y dedicada a hacer bien una sola tarea.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "La mayoría de las herramientas funciona por completo dentro de tu navegador: tu imagen se procesa en tu propio dispositivo y no se sube a ningún sitio. Los archivos más grandes y las herramientas de IA más exigentes se procesan en nuestros servidores y se eliminan poco después de terminar. oMyImage es gratis y no necesita cuenta.",
  "What you can do with oMyImage": "Qué puedes hacer con oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Comprimir imágenes JPG, PNG y WebP sin pérdida de calidad visible",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Redimensionar, recortar, girar y agregar bordes, de una en una o por lotes",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Convertir entre JPG, PNG, WebP, GIF, BMP, AVIF, HEIC y PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Editar fotos: marca de agua, blanco y negro, difuminado, memes y un editor completo",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "Crear y editar GIF: a partir de imágenes o de un video, comprimirlos, redimensionarlos, cortarlos, ponerles texto y convertirlos a MP4 o WebP",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "Extraer texto con OCR, ver o eliminar los metadatos EXIF y obtener colores de una imagen",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Herramientas de IA: quitar el fondo, mejorar la calidad de imagen y pixelar caras para proteger la privacidad",
  "How oMyImage uses your Google account": "Cómo usa oMyImage tu cuenta de Google",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Conectar Google es opcional: todas las herramientas de oMyImage funcionan sin hacerlo. Google se usa para dos cosas: iniciar sesión, si decides crear una cuenta, y la función",
  "Import from Google Drive": "Importar desde Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", que te permite elegir una imagen que ya tienes en Drive en lugar de subirla desde tu dispositivo.",
  "When you use Drive import, oMyImage requests the":
    "Cuando usas la importación desde Drive, oMyImage solicita el permiso",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "de Google, que da a la aplicación acceso solo a los archivos concretos que eliges en el selector de archivos de Google: no puede ver, explorar ni buscar en el resto de tu Drive. El archivo que eliges se descarga en tu navegador para la herramienta que estás usando, y nada más: oMyImage no modifica ni elimina nada de tu Drive, no guarda tus archivos de Google en nuestros servidores, no usa los datos de usuario de Google para entrenar modelos de IA y nunca los vende ni los comparte con terceros.",
  "You can revoke access at any time from your": "Puedes revocar el acceso en cualquier momento desde la",
  "Google Account permissions page": "página de permisos de tu cuenta de Google",
  "Contact us": "Contacto",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "Tamaños y ajustes predefinidos",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "Accesos directos a las herramientas de arriba, cada uno preparado para una tarea: una foto de 50 KB exactos, una miniatura de YouTube, una foto para pasaporte.",
  "Exact file size": "Tamaño de archivo exacto",
  "Hit the exact size a form or upload asks for":
    "Consigue justo el tamaño que te pide un formulario o una plataforma",
  "PDF under a size limit": "PDF por debajo de un límite de tamaño",
  "Scans and photos as a PDF that fits an upload cap":
    "Escaneos y fotos en un PDF que cabe en el límite de subida",
  "Passport & ID Photos": "Fotos carnet y para pasaporte",
  "Country-standard photo sizes, ready to print":
    "Tamaños de foto estándar de cada país, listos para imprimir",
  "Social and print sizes": "Tamaños para redes sociales e impresión",
  "Thumbnails, covers and print dimensions, ready to go":
    "Miniaturas, portadas y medidas de impresión, listas para usar",
  "AI presets": "Ajustes de IA",
  "Sharpen photos or swap the background in one click":
    "Mejora la nitidez de una foto o cambia el fondo con un clic",
  "Quick edits": "Ediciones rápidas",
  "Flip, split and other one-step jobs": "Voltear, dividir y otras tareas de un solo paso",
  "Take photo": "Tomar foto",
  "Edit {name}": "Editar {name}",
  "Add {tool} to favorites": "Añadir {tool} a favoritos",
  "Remove {tool} from favorites": "Quitar {tool} de favoritos",
  "Added to Favorites": "Añadida a Favoritos",
  "Removed from Favorites": "Quitada de Favoritos",
  "Privacy Policy": "Política de privacidad",
  "Terms of Service": "Términos del servicio",
  "KB": "KB", // i18n-same — the unit is written KB in Spanish
  "MB": "MB", // i18n-same
};
