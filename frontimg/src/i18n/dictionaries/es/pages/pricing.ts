import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the /es pricing page (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names.
 * Everything around them is translated. The currency itself is decided by the
 * server from the visitor's region, not by this page, so no price appears
 * here.
 */
export const esPricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "Hoy todas las herramientas son gratis, sin registro",
  "Simple, honest pricing.": "Precios sencillos y honestos.",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "Empieza gratis y sigue gratis para el trabajo de todos los días. Estamos preparando planes de pago para quien necesite archivos más grandes y más usos de IA.",

  // Controls
  "Monthly": "Mensual",
  "Yearly": "Anual",
  "Save {n}%": "Ahorra un {n} %",
  "Prices are shown in the currency of your region.": "Los precios se muestran en la moneda de tu región.",
  "Prices in {currency}": "Precios en {currency}",
  "Loading prices…": "Cargando precios…",
  "Yearly prices are shown per month, billed annually.":
    "Los precios anuales se muestran por mes y se facturan una vez al año.",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "El más popular",
  "Coming soon": "Próximamente",
  "Everything you need for everyday images.": "Todo lo que necesitas para tus imágenes del día a día.",
  "For regular users who want more headroom.": "Para quien lo usa a menudo y quiere más margen.",
  "Unlimited AI, the largest files, priority speed.": "IA ilimitada, los archivos más grandes y velocidad prioritaria.",
  "Start using the tools": "Empezar a usar las herramientas",
  "All {n} tools, no account needed": "Las {n} herramientas, sin registro",
  "Unlimited in-browser processing, no daily cap": "Procesamiento ilimitado en el navegador, sin límite diario",
  "Server processing for files up to 100 MB": "Procesamiento en el servidor para archivos de hasta 100 MB",
  "10 AI runs / day": "10 usos de IA al día",
  "Batch up to 20 files": "Lotes de hasta 20 archivos",
  "Results download straight to your device": "Los resultados se descargan directamente en tu dispositivo",
  "Everything in Free": "Todo lo de Free",
  "Server processing for files up to 200 MB": "Procesamiento en el servidor para archivos de hasta 200 MB",
  "100 AI runs / day": "100 usos de IA al día",
  "Batch up to 100 files": "Lotes de hasta 100 archivos",
  "Priority server processing": "Procesamiento prioritario en el servidor",
  "24-hour download links": "Enlaces de descarga válidos 24 horas",
  "Everything in Plus": "Todo lo de Plus",
  "Server processing for files up to 300 MB": "Procesamiento en el servidor para archivos de hasta 300 MB",
  "Unlimited AI runs": "Usos de IA ilimitados",
  "Unlimited batch size": "Lotes sin límite de tamaño",
  "Top-priority processing queue": "Máxima prioridad en la cola de procesamiento",
  "7-day download links": "Enlaces de descarga válidos 7 días",
  "/ month": "/ mes",
  "Free forever": "Gratis para siempre",
  "Billed annually — {total} / year": "Facturación anual: {total} / año",
  "Billed monthly": "Facturación mensual",
  "Paid plans aren't available yet": "Los planes de pago aún no están disponibles",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "Los planes de pago todavía no se pueden contratar: los precios de arriba son lo que pensamos cobrar cuando se lancen. Todo lo incluido en",
  "is free to use in the meantime.": "se puede usar gratis mientras tanto.",

  // Trust tiles
  "Private by default": "Privado por defecto",
  "Most tools run entirely in your browser — your images never leave your device.":
    "La mayoría de las herramientas funciona por completo en tu navegador: tus imágenes nunca salen de tu dispositivo.",
  "No account needed": "Sin registro",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "Abre una herramienta y listo. Nunca ha hecho falta registrarse para usar oMyImage.",
  "Deleted automatically": "Eliminación automática",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "En Free no se guarda nada: los resultados se descargan directamente en tu dispositivo. Cuando un plan ofrece enlaces de descarga, su validez es todo el tiempo que se conservan, y nunca se reutiliza nada.",

  // FAQ
  "Questions": "Preguntas",
  "Do I need an account to use oMyImage?": "¿Necesito una cuenta para usar oMyImage?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "No. Todas las herramientas funcionan ya, sin cuenta y sin registro. Las cuentas solo importan para los planes de pago, que todavía no están activos.",
  "Is the free tier really free?": "¿El plan gratuito es gratis de verdad?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "Sí. No hay ninguna prueba que se convierta en un plan de pago ni ningún método de pago guardado. Las herramientas gratuitas son, sencillamente, gratis.",
  "When can I buy Plus or Pro?": "¿Cuándo podré contratar Plus o Pro?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "Todavía no: la facturación no está activa, por eso esos botones están desactivados en lugar de fingir que aceptan un pago. Los precios que ves son lo que pensamos cobrar cuando se lancen.",
  "Why are prices different in my country?": "¿Por qué los precios son distintos en mi país?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "La moneda depende del país desde el que navegas, así que no tienes que elegir nada. India y algunos otros mercados tienen precios más bajos a propósito en lugar de una simple conversión; en el resto, los precios se calculan a partir de nuestros precios en EE. UU. con un tipo de cambio que actualizamos periódicamente, no con el del día.",
  "What counts as an AI run?": "¿Qué cuenta como un uso de IA?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "Las herramientas de IA que funcionan en el servidor: «Quitar fondo» y «Mejorar calidad de imagen». Son lo único que contabilizamos, porque son lo único que nos cuesta dinero real en cada uso. Todo lo que se ejecuta en tu navegador es ilimitado en todos los planes y lo seguirá siendo.",
  "Why do the paid plans only raise the file size a little?": "¿Por qué los planes de pago solo aumentan un poco el tamaño de archivo?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "Porque casi nada lo necesita. La mayoría de las imágenes se procesa por completo en tu navegador, donde no imponemos ningún límite de tamaño: el único techo es lo que tu propio dispositivo puede dibujar. Nuestro servidor es para los archivos demasiado grandes o de demasiada resolución para eso, y 100 MB ya cubren la inmensa mayoría. Preferimos dar una cifra que podemos cumplir de verdad antes que un gigabyte llamativo.",
  "What decides whether an image is processed in my browser or on your server?":
    "¿Qué decide si una imagen se procesa en mi navegador o en su servidor?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "Sobre todo la resolución, no el tamaño del archivo. Un navegador solo puede dibujar un canvas hasta cierto número de píxeles, y una foto de teléfono moderna de 48 megapíxeles puede superarlo aunque pese solo unos pocos megabytes. Cuando eso pasa, procesamos la imagen en nuestro servidor y la eliminamos justo después. Cada herramienta te indica qué camino siguió.",
  "Are my images kept?": "¿Se guardan mis imágenes?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "La mayoría de las herramientas no sube nada. En las que sí lo hacen, los resultados se eliminan automáticamente en aproximadamente una hora. Consulta los detalles en la Política de privacidad.",

  // Closing CTA
  "Start now — no card, no account.": "Empieza ya: sin tarjeta y sin cuenta.",
  "All {n} tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "Hoy las {n} herramientas son gratis. Los planes de pago darán más margen, no pondrán barreras.",
  "Browse all tools": "Ver todas las herramientas",
};
