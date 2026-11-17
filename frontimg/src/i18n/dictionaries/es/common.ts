/**
 * Spanish SHARED chrome — strings rendered by components that appear on every
 * route (header, menus, footer, cookie banner, the tool workspace, result
 * screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.es.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `node scripts/i18n-keys.mjs es shared` report rather than retyping.
 *
 * Register and vocabulary (i18n-es-brief.md): neutral Spanish for Spain AND
 * Latin America, the reader is addressed as **tú**; buttons are infinitives
 * ("Descargar", "Subir imagen", "Comprimir"); imagen / imágenes, archivo,
 * subir, descargar, navegador, dispositivo, teléfono, gratis, sin registro,
 * IA. No regionalisms (no second-person plural forms, no device words that
 * only one side of the Atlantic uses). Quoted text uses « » or “ ”, never a bare ASCII double
 * quote. The shared UI glossary in the brief is used verbatim.
 */
export const esCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "Inicio",
  "Breadcrumb": "Ruta de navegación",
  "More tools": "Más herramientas",
  "{tool} features": "Funciones de {tool}",
  "Security & privacy": "Seguridad y privacidad",
  "Frequently asked questions": "Preguntas frecuentes",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "Herramientas",
  "Soon": "Pronto",
  "Coming soon": "Próximamente",
  "{n} free tools — no sign-up required": "{n} herramientas gratis — sin registro",
  "New": "Nuevo",
  "Passport & ID Photos": "Fotos de pasaporte y carnet",
  "Passport & Signature": "Foto carnet y firma",
  "GIF Tools": "Herramientas GIF",
  "Filters & Effects": "Filtros y efectos",
  "Browse all tools": "Ver todas las herramientas",
  "Browse tools": "Explorar herramientas",
  "All tools": "Todas las herramientas",
  "Blog": "Blog", // i18n-same
  "Pricing": "Precios",
  "Language": "Idioma",
  "Select language": "Seleccionar idioma",
  "More": "Más",
  "Open menu": "Abrir menú",
  "Close menu": "Cerrar menú",
  "Site menu": "Menú del sitio",
  "Credits": "Créditos",
  "credits": "créditos",
  "Unlimited credits": "Créditos ilimitados",
  "{used} of {limit} premium runs used today": "Hoy has usado {used} de {limit} usos premium",
  "Search tools…": "Buscar herramientas…",
  "Search tools": "Buscar herramientas",
  "Clear search": "Borrar búsqueda",
  "No tools match “{query}”.": "Ninguna herramienta coincide con «{query}».",
  "Switch to light mode": "Cambiar al modo claro",
  "Switch to dark mode": "Cambiar al modo oscuro",
  "Light mode": "Modo claro",
  "Dark mode": "Modo oscuro",
  "Help": "Ayuda",

  // Nav mega-menu / drawer sections (lib/nav-sections.ts — module scope, §4.2)
  "Optimize Image": "Optimizar imagen",
  "Edit Image": "Editar imagen",
  "Create": "Crear",
  "Image AI": "IA para imágenes",
  "Privacy & Info": "Privacidad e información",
  "Convert Format": "Convertir formato",
  "Convert To & From": "Convertir desde y hacia",
  "Camera & Modern Formats": "Cámara y formatos modernos",

  // Navbar quick links + footer columns (module scope, §4.2)
  "Compress Image": "Comprimir imagen",
  "Resize Image": "Redimensionar imagen",
  "Crop Image": "Recortar imagen",
  "Rotate Image": "Girar imagen",
  "Convert to JPG": "Convertir a JPG",
  "PNG to JPG": "PNG a JPG",
  "WEBP to PNG": "WebP a PNG",
  "HEIC to JPG": "HEIC a JPG",
  "Image to PDF": "Imagen a PDF",
  "Watermark Image": "Marca de agua",
  "Image Editor": "Editor de fotos",
  "Meme Generator": "Generador de memes",
  "Remove Background": "Quitar fondo",
  "Upscale Image": "Mejorar calidad de imagen",
  "Optimize": "Optimizar",
  "Convert": "Convertir",
  // CATEGORY_PILLS (lib/tool-categories.ts) labels, read by both the home page
  // and the dashboard, so they live here rather than in a page dictionary.
  "All": "Todas",
  "Edit & Create": "Editar y crear",
  "GIF": "GIF", // i18n-same
  "Edit & AI": "Editar e IA",
  "Contact": "Contacto",
  "About": "Acerca de",
  "Privacy Policy": "Política de privacidad",
  "Terms of Service": "Términos del servicio",
  "Refund Policy": "Política de reembolso",
  "Cookie Policy": "Política de cookies",
  "Open-Source Licenses": "Licencias de código abierto",
  "Free online image tools — fast, private, and no sign-up required.":
    "Herramientas de imagen gratis y online — rápidas, privadas y sin registro.",
  "View Pricing →": "Ver precios →",
  "Need PDF tools? oMyPDF →": "¿Necesitas herramientas PDF? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. Todos los derechos reservados.",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "Iniciar sesión",
  "Account": "Cuenta",
  "Account menu": "Menú de la cuenta",
  "Signed in as": "Sesión iniciada como",
  "Dashboard": "Panel",
  "Admin": "Admin", // i18n-same
  "My Account": "Mi cuenta",
  "Sign out": "Cerrar sesión",
  "Show password": "Mostrar contraseña",
  "Hide password": "Ocultar contraseña",
  "Unlimited AI runs": "Usos de IA ilimitados",
  "{n} AI runs per day": "{n} usos de IA al día",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "Consentimiento de cookies",
  "We value your privacy": "Valoramos tu privacidad",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "oMyImage usa cookies necesarias para funcionar y cookies de análisis opcionales solo con tu consentimiento. Tus imágenes nunca intervienen.",
  "Accept All": "Aceptar todo",
  "Reject All": "Rechazar todo",
  "Customize": "Personalizar",
  "Save preferences": "Guardar preferencias",
  "Back": "Atrás",
  "Always on": "Siempre activas",
  "Cookie Settings": "Configuración de cookies",
  // CATEGORIES in CookieBanner.tsx (module scope, §4.2)
  "Necessary cookies": "Cookies necesarias",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "Imprescindibles para las funciones básicas del sitio, como la seguridad, recordar tu tema y guardar tu elección de cookies.",
  "Analytics cookies": "Cookies de análisis",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "Nos ayudan a entender cómo se usa oMyImage para mejorar el rendimiento y decidir qué herramientas crear a continuación.",
  "Advertising cookies": "Cookies publicitarias",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "Sirven para mostrar anuncios relevantes y medir su rendimiento. oMyImage no muestra anuncios hoy — tu elección se guarda por si eso cambia algún día.",
  "Functional cookies": "Cookies funcionales",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "Activan funciones adicionales, como preferencias guardadas y una experiencia más personalizada.",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "Seleccionar imágenes",
  "Select an image": "Seleccionar imagen",
  "Take photo": "Tomar foto",
  "Processed in your browser — your images never leave your device.":
    "Se procesa en tu navegador — tus imágenes nunca salen de tu dispositivo.",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "Se procesa en nuestro servidor mediante una conexión cifrada — los archivos se eliminan justo después.",
  "or import from": "o importar desde",
  "Connecting…": "Conectando…",
  "Add from {service}": "Añadir desde {service}",
  "Import from {service}": "Importar desde {service}",
  "Imported 1 file from Google Drive.": "Se importó 1 archivo desde Google Drive.",
  "Imported {n} files from Google Drive.": "Se importaron {n} archivos desde Google Drive.",
  "Imported 1 file from Dropbox.": "Se importó 1 archivo desde Dropbox.",
  "Imported {n} files from Dropbox.": "Se importaron {n} archivos desde Dropbox.",
  "Google Drive import failed.": "No se pudo importar desde Google Drive.",
  "Dropbox import failed.": "No se pudo importar desde Dropbox.",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "Archivos seleccionados ({n})",
  "Clear": "Vaciar",
  "Add more files": "Añadir más archivos",
  "Move earlier": "Mover antes",
  "Move later": "Mover después",
  "File view": "Vista de archivos",
  "Grid view": "Vista de cuadrícula",
  "List view": "Vista de lista",
  "1 image": "1 imagen",
  "{n} images": "{n} imágenes",
  "1 file": "1 archivo",
  "{n} files": "{n} archivos",
  "Settings": "Ajustes",
  "Close": "Cerrar",
  "Working…": "Trabajando…",
  "{label} value": "Valor de {label}",
  "Options": "Opciones",
  "Clear image": "Quitar imagen",
  "Clear files": "Quitar archivos",
  "Change image": "Cambiar imagen",
  "Remove": "Quitar",
  "Download": "Descargar",
  "Download {name}": "Descargar {name}",
  "Download ({size})": "Descargar ({size})",
  "Download all (ZIP)": "Descargar todo (ZIP)",
  "Result": "Resultado",
  "Original": "Original", // i18n-same
  "Process": "Procesar",
  "Processing…": "Procesando…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "Esta herramienta funciona en nuestro servidor, así que las imágenes grandes pueden tardar unos segundos.",
  "Please select an image.": "Selecciona una imagen.",
  "Done — your image is ready.": "Listo — tu imagen está preparada.",
  "Processing failed.": "No se pudo procesar.",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "Fondo",
  "Background (replaces transparency)": "Fondo (sustituye la transparencia)",
  "Auto — match the image's own edges": "Automático — igual que los bordes de la imagen",
  "Auto": "Automático",
  "Transparent": "Transparente",
  "Custom": "Personalizado",
  "Custom color": "Color personalizado",
  "Custom background color": "Color de fondo personalizado",
  "White": "Blanco",
  "Black": "Negro",
  "Gray": "Gris",
  "Charcoal": "Carbón",
  "Clay": "Arcilla",
  "Red": "Rojo",
  "Green": "Verde",
  "Blue": "Azul",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "Se convierte en tu navegador — los archivos se quedan en tu dispositivo (las imágenes muy grandes o de muy alta resolución se procesan en nuestro servidor).",
  "Please select {format} files.": "Selecciona archivos {format}.",
  "Please select image files.": "Selecciona archivos de imagen.",
  "Converted 1 image to {format}.": "Se convirtió 1 imagen a {format}.",
  "Converted {n} images to {format}.": "Se convirtieron {n} imágenes a {format}.",
  "Conversion failed.": "No se pudo convertir.",
  "Conversion settings": "Ajustes de conversión",
  "Conversion Settings": "Ajustes de conversión",
  "Converting…": "Convirtiendo…",
  "Total: {before} → {after}": "Total: {before} → {after}",
  "1 file ready": "1 archivo listo",
  "{n} files ready — downloads as a ZIP": "{n} archivos listos — se descargan en un ZIP",
  "Convert to {format}": "Convertir a {format}",
  "Convert {n} to {format}": "Convertir {n} a {format}",
  "Output:": "Salida:",
  "Quality": "Calidad",
  "Auto-rotate by EXIF orientation": "Girar automáticamente según la orientación EXIF",
  "Strip metadata": "Eliminar metadatos",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "Elimina los datos EXIF, el perfil de color y los datos de cámara y ubicación de la imagen convertida para reducir su tamaño.",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "Recortar y girar imagen",
  "Crop & rotate": "Recortar y girar",
  "Cancel": "Cancelar",
  "Apply": "Aplicar",
  "Free": "Libre",
  "Rotate left": "Girar a la izquierda",
  "Rotate right": "Girar a la derecha",
  "Select whole image": "Seleccionar toda la imagen",
  "Reset": "Restablecer",
  "Output": "Salida",
  "Couldn't read this image.": "No se pudo leer esta imagen.",
  // ── Photo editor (after "Take photo" on a phone) ────────────────────────
  "Edit photo": "Editar foto",
  "Edit {name}": "Editar {name}",
  "Crop": "Recortar",
  "Adjust": "Ajustar",
  "Filters": "Filtros",
  "Auto enhance": "Mejora automática",
  "Brightness": "Brillo",
  "Contrast": "Contraste",
  "Saturation": "Saturación",
  "Warmth": "Calidez",
  "Flip horizontal": "Voltear horizontalmente",
  "Flip vertical": "Voltear verticalmente",
  "Straighten": "Enderezar",
  "Use original": "Usar original",
  "Done": "Listo",
  "Vivid": "Vívido",
  "B&W": "B/N",
  "Mono": "Mono", // i18n-same
  "Sepia": "Sepia", // i18n-same
  "Cool": "Frío",
  "Warm": "Cálido",
  "Couldn't apply that edit.": "No se pudo aplicar esa edición.",
  "Compare original with result": "Comparar el original con el resultado",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "Área de recorte. Arrastra dentro para moverla, arrastra un tirador para cambiar su tamaño y usa las flechas para ajustarla.",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "Imagen combinada — arrastra para moverla, usa las esquinas para cambiar su tamaño y el tirador superior para girarla",
  "Redaction area. Drag to paint over what you want hidden.":
    "Área de censura. Arrastra para pintar sobre lo que quieras ocultar.",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "Área de censura. Arrastra para dibujar una zona; haz clic en una para seleccionarla; arrastra sus tiradores para cambiar su tamaño; Supr para eliminarla; flechas para ajustarla.",
  "Select your effect": "Elige tu efecto",
  "Previous effects": "Efectos anteriores",
  "More effects": "Más efectos",
  // EFFECT_SPECS labels (lib/image/effects.ts — module scope, §4.2)
  "No blur": "Sin desenfoque",
  "Gaussian": "Gaussiano",
  "Colour": "Color",
  "Motion": "Movimiento",
  "Radial": "Radial", // i18n-same
  "Pixelate": "Pixelar",
  "Glass": "Cristal",
  "Bloom": "Resplandor",
  "Trippy waves": "Ondas psicodélicas",
  "Halftone": "Semitono",
  "Particle": "Partículas",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "¡Proceso completado!",
  "Your image is ready for download": "Tu imagen está lista para descargar",
  "Process more images": "Procesar más imágenes",
  "Your image": "Tu imagen",
  "Your images ({n})": "Tus imágenes ({n})",
  "Preparing ZIP…": "Preparando ZIP…",
  "Download all (.zip)": "Descargar todo (.zip)",
  "Download all ({n})": "Descargar todo ({n})",
  "Continue with this file": "Continuar con este archivo",
  "Share or save this tool": "Comparte o guarda esta herramienta",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "Copia el enlace, compártelo en redes sociales o guarda la página en favoritos para encontrarla después.",
  "Copied": "Copiado",
  "Copy link": "Copiar enlace",
  "Couldn't copy the link.": "No se pudo copiar el enlace.",
  "Share": "Compartir",
  "Share:": "Compartir:",
  "(Ctrl + D to bookmark)": "(Ctrl + D para guardar en favoritos)",
  "Share on X": "Compartir en X",
  "Share on Facebook": "Compartir en Facebook",
  "Share on LinkedIn": "Compartir en LinkedIn",
  "Share on WhatsApp": "Compartir en WhatsApp",
  "Share on Telegram": "Compartir en Telegram",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "Acabo de usar {tool} en oMyImage — gratis, rápido y sin registro.",
  "Free image tools on oMyImage.": "Herramientas de imagen gratis en oMyImage.",
  "Enjoyed the result?": "¿Te gustó el resultado?",
  "Share your experience on Trustpilot — it helps a lot.":
    "Cuenta tu experiencia en Trustpilot — nos ayuda mucho.",
  "Leave a review": "Dejar una reseña",

  // ── Toasts (sonner's own accessible names — ThemedToaster) ──────────────
  "Notifications": "Notificaciones",
  "Close toast": "Cerrar notificación",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "Herramienta premium",
  "Premium tool — Free plan includes a limited number per day":
    "Herramienta premium — el plan Free incluye un número limitado de usos al día",
  "Runs on our server — {allowance}": "Funciona en nuestro servidor — {allowance}",
  "Added to Favorites": "Añadida a favoritos",
  "Removed from Favorites": "Quitada de favoritos",
  "Add {tool} to favorites": "Añadir {tool} a favoritos",
  "Remove {tool} from favorites": "Quitar {tool} de favoritos",

  // ── Legal shell ─────────────────────────────────────────────────────────
  // "|section": a bare "Legal" is also the US paper size (image-to-pdf), which
  // must stay "Legal". The same English word, two meanings, two keys.
  // Auth chrome (components/auth) — shared by login, signup and the password flow.
  "Continue with Google": "Continuar con Google",
  "or|divider": "o",
  "Legal|section": "Legal",
  "Last updated:": "Última actualización:",
  "Contents": "Contenido",
  "On this page": "En esta página",
  "Back to top": "Volver arriba",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "No se pudo descargar «{name}» desde Dropbox.",
  "Could not download “{name}” from Google Drive.": "No se pudo descargar «{name}» desde Google Drive.",
  "The Dropbox chooser failed to start.": "No se pudo abrir el selector de Dropbox.",
  "Unsupported image format: {name}": "Formato de imagen no compatible: {name}",
  "No frames found in this GIF.": "No se encontraron fotogramas en este GIF.",
  "Canvas is not supported in this browser.": "Este navegador no es compatible con Canvas.",
  "Canvas not supported.": "Canvas no es compatible.",
  "Could not export the image.": "No se pudo exportar la imagen.",
  "Add at least one frame.": "Añade al menos un fotograma.",
  "Add at least one image.": "Añade al menos una imagen.",
  "Server error ({status}).": "Error del servidor ({status}).",
  "Couldn't reach the processing server for this large file.":
    "No se pudo conectar con el servidor de procesamiento para este archivo grande.",
  "Couldn't reach the processing server.": "No se pudo conectar con el servidor de procesamiento.",
  "No image selected.": "No hay ninguna imagen seleccionada.",
  "The server did not start the job. Please try again.": "El servidor no inició el proceso. Inténtalo de nuevo.",
  "Timed out waiting for the server to finish.": "Se agotó el tiempo de espera del servidor.",
  "Your browser cannot save {format} images. Try Chrome, Edge or Firefox.": "Tu navegador no puede guardar imágenes {format}. Prueba con Chrome, Edge o Firefox.",
  // lib/image/inpaint.ts (I18nError — invisible to i18n-keys)
  "The AI model could not be downloaded. Check your connection and try again.": "No se pudo descargar el modelo de IA. Revisa tu conexión e inténtalo de nuevo.",
  "This file is not a valid SVG.": "Este archivo no es un SVG válido.",
  "This size is too large for your browser — try a smaller scale.": "Este tamaño es demasiado grande para tu navegador — prueba con una escala menor.",
  "This SVG could not be drawn. It may use features browsers do not render as an image.": "No se pudo dibujar este SVG. Puede usar funciones que los navegadores no muestran como imagen.",
  "Your browser blocks exporting this SVG because it contains embedded HTML.": "Tu navegador bloquea la exportación de este SVG porque contiene HTML incrustado.",
  "This file is not a valid WebP image.": "Este archivo no es una imagen WebP válida.",
  "This file is not a valid GIF.": "Este archivo no es un GIF válido.",
  "This WebP frame has no image data.": "Este fotograma WebP no contiene datos de imagen.",
  "Your browser can't create MP4 video. Try Chrome, Edge or Safari.": "Tu navegador no puede crear video MP4. Prueba con Chrome, Edge o Safari.",
  // …and the backend's own user-facing sentences (backend/src/routes/image).
  "Upload an image.": "Sube una imagen.",
  "This file is too large.": "Este archivo es demasiado grande.",
  "Too many processing requests. Please wait a moment.":
    "Demasiadas solicitudes de procesamiento. Espera un momento.",
  "Too many requests. Please slow down and try again shortly.":
    "Demasiadas solicitudes. Ve más despacio e inténtalo de nuevo en breve.",
  "Too many requests. Please slow down.": "Demasiadas solicitudes. Ve más despacio.",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "Has alcanzado el límite de procesamiento por hora de tu red. Inténtalo más tarde o inicia sesión para tener límites más altos.",
  "File not found or expired.": "Archivo no encontrado o caducado.",
  "This OCR job was not found or has expired.": "Este proceso de OCR no existe o ha caducado.",
  "That URL can't be reached — use a public http(s) address.":
    "No se puede acceder a esa URL — usa una dirección http(s) pública.",
  "Provide a width and/or height.": "Indica un ancho, un alto o ambos.",
};
