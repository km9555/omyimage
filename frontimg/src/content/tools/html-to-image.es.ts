import type { ToolPageContent } from "@/content/tools/types";

/**
 * Spanish copy for /es/html-a-imagen.
 *
 * Primary query "HTML a imagen" (low volume, not in the brief's table); the
 * copy also covers "guardar página web como imagen" and "captura de una
 * página web" naturally. Rendering runs on the server (headless Chromium) —
 * keep that fact exactly as in the English page.
 */
const content: ToolPageContent = {
  toolId: "html-to-image",
  locale: "es",
  name: "HTML a imagen",
  tagline:
    "Convierte la URL de una página web o código HTML en una imagen online: elige el viewport, el formato y la captura de página completa. Con tecnología de Chromium headless de código abierto.",
  category: { id: "edit", label: "Editar y crear" },

  metaTitle: "HTML a imagen – convertir URL a PNG o JPG | oMyImage",
  metaDescription:
    "Convierte HTML a imagen: renderiza una página web por URL o tu propio código HTML como PNG o JPG, con viewport y página completa. Gratis y sin registro.",

  intro:
    "Convierte una página web o un fragmento de HTML en una imagen nítida. La herramienta HTML a imagen de oMyImage renderiza una URL o tu propio código con Chromium headless y te entrega un PNG o JPG exactamente del tamaño que elijas: ideal para miniaturas, vistas previas y tarjetas para redes sociales. Así puedes guardar una página web como imagen sin tener que armar la captura de pantalla a mano. El renderizado se hace en nuestro servidor con Puppeteer, una herramienta de código abierto.",

  sections: [
    {
      heading: "Cómo el código se convierte en imagen",
      id: "what",
      body: [
        "Un navegador headless carga tu HTML o tu URL, construye el diseño exactamente igual que un navegador normal (aplica el CSS, ejecuta los scripts y carga las fuentes web) y luego captura el resultado renderizado como imagen. Es una captura de pantalla tomada por un navegador sin ventana.",
        "Esa diferencia importa. No es una aproximación de cómo podría verse la página: es el mismo motor de renderizado produciendo el mismo diseño, y por eso el CSS complejo, flexbox, grid y las fuentes web salen bien donde otros conversores de HTML a imagen más simples los deforman.",
        "El resultado es un PNG o JPG normal y corriente, así que puede ir a cualquier sitio donde vaya una imagen: una tarjeta para redes sociales, un documento, una presentación o un correo electrónico.",
      ],
    },
    {
      heading: "Tarjetas de vista previa para redes sociales",
      id: "og-images",
      body: [
        "El uso más común en producción es generar imágenes Open Graph, la imagen que aparece cuando se comparte un enlace en redes sociales o en una app de mensajería. Diseñarlas a mano para cada artículo no escala; crearlas como plantilla HTML y renderizarlas como imagen, sí.",
        "1200 × 630 píxeles es el tamaño estándar y prácticamente todas las plataformas lo muestran bien. Construye la tarjeta como plantilla HTML, con el título, el autor y las ilustraciones posicionados con CSS, y luego renderiza una imagen por artículo.",
        "Dos consejos prácticos: deja el contenido importante bien alejado de los bordes, porque algunas plataformas recortan a su propia relación de aspecto, y usa letra grande. Estas tarjetas suelen verse en el feed a un par de cientos de píxeles de ancho, así que cualquier texto de menos de unos 32 píxeles en el original será ilegible.",
      ],
    },
    {
      heading: "Por qué la captura puede ser distinta de tu pantalla",
      id: "differences",
      body: [
        "El renderizador es un navegador limpio. No tiene extensiones, ni bloqueador de anuncios, ni sesión iniciada, ni acceso a las fuentes instaladas localmente en tu equipo. Una página que tú ves de una manera puede renderizarse aquí de otra con toda razón, y casi siempre la diferencia es reveladora: estás viendo lo que ve un visitante anónimo que entra por primera vez.",
        "La carga diferida (lazy loading) es la causa más frecuente de contenido faltante. Las imágenes y secciones configuradas para cargarse al hacer scroll pueden no haberse activado antes de la captura, y los datos que llegan de una llamada lenta a una API pueden perderse el momento por completo.",
        "Las animaciones y transiciones quedan congeladas en el punto en que estuvieran. Si un elemento aparece con un fundido, la captura puede atraparlo a medio camino: una buena razón para desactivar las animaciones en el CSS que renderizas o para diseñar la plantilla como un diseño estático desde el principio.",
      ],
    },
    {
      heading: "Esta herramienta se ejecuta en nuestro servidor",
      id: "server",
      body: [
        "Casi todo en este sitio funciona dentro de la pestaña de tu navegador. Renderizar una página web no puede hacerse así, porque requiere un motor de navegador completo: justo lo que ya es tu navegador, pero no algo que una página pueda controlar desde una pestaña sobre contenido arbitrario de terceros.",
        "Por eso, la URL o el HTML que proporcionas se envía a nuestro servidor mediante una conexión cifrada, se renderiza allí en un navegador headless y te devolvemos la imagen. Después no se conserva nada.",
        "A tener en cuenta con el contenido privado: como la URL la descarga nuestro servidor y no tú, no se puede acceder a nada que esté detrás de un inicio de sesión o en una red privada. Es una limitación, y también la razón por la que esta herramienta no puede capturar por accidente algo que no debería.",
      ],
    },
  ],

  howToTitle: "Cómo convertir HTML a imagen",
  steps: [
    { title: "Introducir URL o HTML", description: "Pega la URL de una página web, o cambia al modo HTML y pega tu propio código." },
    { title: "Elegir tamaño y formato", description: "Elige el ancho y el alto del viewport, el formato de salida y si quieres capturar la página completa." },
    { title: "Renderizar y descargar", description: "Haz clic en «Renderizar como imagen» y descarga la captura en PNG o JPG." },
  ],

  features: [
    { icon: "link", title: "URL o HTML puro", description: "Haz una captura de cualquier página web pública o renderiza un fragmento de tu propio HTML y CSS como imagen." },
    { icon: "aspect_ratio", title: "Viewport personalizado", description: "Define el ancho y el alto exactos y, si quieres, captura toda la página desplazable." },
    { icon: "verified_user", title: "Motor de código abierto", description: "Renderizado con Chromium headless mediante Puppeteer: gratis, de código abierto y apto para uso comercial." },
  ],

  faqs: [
    { q: "¿Puedo hacer una captura de cualquier sitio web?", a: "De cualquier URL accesible públicamente. Las páginas que bloquean bots o exigen iniciar sesión pueden no renderizarse por completo." },
    { q: "¿Puedo renderizar mi propio HTML?", a: "Sí. Cambia al modo HTML y pega código con CSS en línea para renderizarlo con exactitud." },
    { q: "¿En qué formatos puedo exportar?", a: "PNG (sin pérdida) o JPG. También puedes capturar toda la altura de la página desplazable." },
    { q: "¿Qué motor se usa?", a: "Chromium headless mediante la biblioteca de código abierto Puppeteer, que se ejecuta en nuestro servidor." },
    { q: "¿Es gratis?", a: "Sí: gratis, sin marca de agua y sin registro." },
    { q: "¿Para qué sirve realmente convertir HTML a imagen?", a: "Para generar tarjetas de vista previa para redes sociales, capturar una página para documentación o un archivo, producir capturas uniformes para un registro de cambios, previsualizar una plantilla de correo como imagen y convertir HTML que escribiste en una imagen que puedas compartir donde el HTML no se muestra." },
    { q: "¿Por qué el resultado no coincide exactamente con mi navegador?", a: "Porque se renderiza en un navegador headless limpio, sin extensiones, sin sesión iniciada y sin más fuentes locales que el conjunto estándar. El contenido detrás de un inicio de sesión mostrará la vista sin sesión, y una página que dependa de una fuente instalada solo en tu equipo usará otra en su lugar." },
    { q: "¿Puede capturar una página que requiere iniciar sesión?", a: "No. El renderizador no tiene acceso a tus cookies ni a tu sesión, así que ve lo mismo que un visitante anónimo. Para páginas con inicio de sesión, lo práctico es hacer la captura desde tu propio navegador." },
    { q: "¿Por qué falta contenido en la captura?", a: "Normalmente por la carga diferida. Las imágenes y secciones que solo se cargan al hacer scroll pueden no haber aparecido antes de la captura. El contenido que llega por una llamada lenta a una API puede faltar por el mismo motivo, y las animaciones quedan congeladas en el fotograma al que hubieran llegado." },
    { q: "¿A qué tamaño debo renderizar?", a: "1200 × 630 es el estándar para tarjetas de vista previa en redes sociales y funciona en la mayoría de las plataformas. 1280 o 1440 píxeles de ancho van bien para capturas de documentación. Para archivar, lo adecuado es la captura de página completa, aunque las páginas muy largas producen imágenes muy altas." },
    { q: "¿Se ejecuta en mi navegador como las demás herramientas?", a: "No: esta necesita un motor de navegador real para renderizar la página, y eso no se puede enviar a tu dispositivo. El HTML o la URL se envía a nuestro servidor, se renderiza y te devolvemos la imagen resultante. Después no se guarda nada." },
    { q: "¿Qué pasa con mis datos?", a: "La transferencia va cifrada, la imagen generada se guarda solo un momento detrás de un enlace de descarga privado y se elimina automáticamente en menos de una hora. No compartimos tu contenido ni lo usamos para nada más." },
  ],

  security:
    "El renderizado se hace en nuestro servidor con Chromium headless de código abierto. El resultado se guarda solo brevemente detrás de un enlace de descarga privado y se elimina automáticamente en menos de una hora. Nunca compartimos ni reutilizamos tu contenido.",

  ui: {
    // HtmlToImageTool.tsx — pages
    "Add page": "Agregar página",
    "Page {n}": "Página {n}",
    "Page name": "Nombre de la página",
    "Used as the downloaded file name for this page's image.":
      "Se usa como nombre del archivo descargado para la imagen de esta página.",
    "1 page": "1 página",
    "{n} pages": "{n} páginas",
    "Added 1 page.": "Se agregó 1 página.",
    "Added {n} pages.": "Se agregaron {n} páginas.",
    "Import .html": "Importar .html",
    "Please choose .html files.": "Elige archivos .html.",
    "HTML code": "Código HTML",
    "<!doctype html> …": "<!doctype html> …", // i18n-same
    "{n} characters · a full document or a fragment both work.":
      "{n} caracteres · sirve tanto un documento completo como un fragmento.",
    "Add some HTML to at least one page.": "Agrega algo de HTML al menos a una página.",
    "Remove {name}": "Quitar {name}",
    "Clear": "Borrar",
    "Web page URL": "URL de la página web",
    "Any public http(s) address. Private and local addresses are rejected by the server.":
      "Cualquier dirección http(s) pública. El servidor rechaza las direcciones privadas y locales.",
    // rendering
    "Render to image": "Renderizar como imagen",
    "Render {n} pages": "Renderizar {n} páginas",
    "Rendering…": "Renderizando…",
    "Rendering {done} of {total}…": "Renderizando {done} de {total}…",
    "Rendered 1 image.": "Se renderizó 1 imagen.",
    "Rendered {n} images.": "Se renderizaron {n} imágenes.",
    "Rendering failed.": "Error al renderizar.",
    "Rendering uses headless Chromium on our servers.":
      "El renderizado usa Chromium headless en nuestros servidores.",
    "Your rendered image will appear here.": "Tu imagen renderizada aparecerá aquí.",
    "1 image": "1 imagen",
    "{n} images": "{n} imágenes",
    "Download {name}": "Descargar {name}",
    "Download all (ZIP)": "Descargar todo (ZIP)",
    "Back": "Atrás",
    // settings
    "Capture Settings": "Ajustes de captura",
    "Open all settings": "Abrir todos los ajustes",
    "Screen size, format, full-page capture and more are in the settings.":
      "El tamaño de pantalla, el formato, la captura de página completa y más están en los ajustes.",
    "Capturing at": "Capturando a",
    "Viewport": "Viewport", // i18n-same
    "Screen size": "Tamaño de pantalla",
    "The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths.":
      "La ventana del navegador en la que se construye la página. Los sitios adaptables muestran su diseño para tableta o teléfono en esos anchos.",
    "Width (px)": "Ancho (px)",
    "Height (px)": "Alto (px)",
    "Width and height must be at least 100px.": "El ancho y el alto deben ser de al menos 100 px.",
    "Orientation": "Orientación",
    "Portrait": "Vertical",
    "Landscape": "Horizontal",
    "Swaps the width and height of the chosen screen size.":
      "Intercambia el ancho y el alto del tamaño de pantalla elegido.",
    "Resolution": "Resolución",
    "2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file.":
      "2× renderiza el doble de píxeles para un resultado nítido en pantallas retina: el mismo diseño, un archivo más grande.",
    "Output": "Salida",
    "Format": "Formato",
    "Quality": "Calidad",
    "Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots.":
      "Más alta conserva más detalle y genera un archivo más grande. 80–90 es el punto ideal para capturas de pantalla.",
    "Smaller file": "Archivo más pequeño",
    "Higher quality": "Mayor calidad",
    "Lower quality": "Menor calidad",
    "Capture full page": "Capturar página completa",
    "Scrolls to the bottom and stitches the whole document instead of just the visible window.":
      "Desplaza hasta el final y une todo el documento en lugar de solo la ventana visible.",
    "Transparent background": "Fondo transparente",
    "Skips the page background so the image keeps an alpha channel.":
      "Omite el fondo de la página para que la imagen conserve un canal alfa.",
    "JPG has no alpha channel — switch to PNG or WEBP for transparency.":
      "JPG no tiene canal alfa: cambia a PNG o WEBP para conseguir transparencia.",
    "Advanced": "Avanzado",
    "Capture one element (optional)": "Capturar un solo elemento (opcional)",
    "A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page.":
      "Un selector CSS, p. ej. #pricing o .hero. Solo se captura ese elemento, lo que tiene prioridad sobre la página completa.",
    "Padding (px)": "Margen interior (px)",
    "Breathing room added around the page content before the shot is taken.":
      "Espacio que se agrega alrededor del contenido de la página antes de tomar la captura.",
    "Wait before capture (ms)": "Espera antes de capturar (ms)",
    "Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000.":
      "Tiempo de espera adicional después de cargar la página: útil para animaciones, fuentes o imágenes de carga diferida. Máx. 10000.",
    "Emulate dark mode": "Simular modo oscuro",
    "Reports prefers-color-scheme: dark, so sites with a dark theme render it.":
      "Indica prefers-color-scheme: dark, para que los sitios con tema oscuro lo muestren.",
    "Hide cookie banners": "Ocultar avisos de cookies",
    "Hides the common consent overlays that would otherwise cover the shot.":
      "Oculta las ventanas de consentimiento habituales que, de otro modo, taparían la captura.",
    "Only applies when capturing a URL.": "Solo se aplica al capturar una URL.",
    "Custom CSS (optional)": "CSS personalizado (opcional)",
    "Injected last, so it overrides the page's own styles. Applies to every page in the batch.":
      "Se inserta al final, así que anula los estilos propios de la página. Se aplica a todas las páginas del lote.",
  },
};

export default content;
