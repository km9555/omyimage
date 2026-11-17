import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the data-driven converter pages.
 *
 * These are the GENERATED sentences — the how-to steps, the feature tiles, the
 * boilerplate FAQs, the privacy note and ConverterPage's own chrome. The prose
 * that makes each pair its own page lives in `src/content/converters/`.
 *
 * Loaded by `lib/converters/i18n.ts`, which hands it to `getT()` for the
 * server markup and down through an `<I18nScope>` so ConvertTool sees it too.
 * A sentence with a conditional tail has one key per variant (conversion.md
 * §6.4).
 *
 * `{offload}` is filled with the translated fragment below, which carries NO
 * article ("imágenes muy grandes o de muy alta resolución"); every sentence
 * supplies its own "las" in front of it, so the fragment reads correctly after
 * "entre", as a subject and inside the parenthesis.
 *
 * Neutral Spanish, addressed as tú. "Your computer" becomes "tu dispositivo"
 * (i18n-es-brief.md bans the regional words for computer and phone).
 */
export const esConverters: Dict = {
  // ── copy.ts: shared fragments ──────────────────────────────────────────
  "very large or very high-resolution images": "imágenes muy grandes o de muy alta resolución",

  // ── copy.ts: buildSteps ────────────────────────────────────────────────
  "Add your {from} files": "Añade tus archivos {from}",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "Arrastra imágenes {from} a la zona de carga o haz clic para buscarlas. Añade todas las que quieras — se ponen en cola juntas.",
  "Choose your quality": "Elige la calidad",
  "Drag the quality slider to trade file size against detail.":
    "Mueve el control de calidad para equilibrar el tamaño del archivo y el nivel de detalle.",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "Como {to} no admite transparencia, también puedes elegir el color que rellena las zonas transparentes.",
  "The default suits most images — raise it for detailed photographs.":
    "El valor predeterminado sirve para la mayoría de las imágenes — súbelo para fotos con mucho detalle.",
  "Check the settings": "Revisa los ajustes",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "La salida en {to} es sin pérdida y conserva la transparencia, así que no hay nada que configurar. El giro automático lee la orientación EXIF para que las fotos verticales queden derechas.",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "La salida en {to} es sin pérdida, así que no hay nada que configurar. El giro automático lee la orientación EXIF para que las fotos verticales queden derechas.",
  "Convert and download": "Convierte y descarga",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "Pulsa Convertir. Un solo archivo se descarga en {to} al instante; varios llegan juntos en un ZIP.",

  // ── copy.ts: buildFeatures ─────────────────────────────────────────────
  "Batch {from} → {to}": "{from} → {to} por lotes",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "Convierte una carpeta entera de una vez. Varios archivos se descargan en un único ZIP, sin tener que bajarlos uno por uno.",
  "Transparency survives": "La transparencia se conserva",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "Las zonas transparentes de tu {from} siguen transparentes en el {to} — sin un recuadro blanco detrás de la imagen.",
  "You pick the background": "Tú eliges el fondo",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "{to} no puede guardar transparencia, así que las zonas transparentes deben rellenarse. Elige tú el color en lugar de recibir blanco por defecto.",
  "Quality you control": "Calidad bajo tu control",
  "Lossless output": "Salida sin pérdida",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "Un control de calidad en lugar de un ajuste fijo, para que decidas tú el equilibrio entre tamaño y detalle.",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "{to} es sin pérdida — la imagen convertida es idéntica, píxel a píxel, a la original.",
  "No software to install": "Sin programas que instalar",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "Nada que descargar y ninguna cuenta que crear. Los archivos se envían por HTTPS, se convierten y después se eliminan del servidor.",
  "Private by default": "Privado por defecto",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "La conversión se hace en la pestaña de tu navegador. Tus archivos {from} no se suben nunca, salvo que alguno esté entre las {offload}.",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "La conversión se hace en la pestaña de tu navegador. Tus archivos {from} no se suben nunca.",

  // ── copy.ts: buildBoilerplateFaqs ──────────────────────────────────────
  "What happens to my files?": "¿Qué pasa con mis archivos?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Esta conversión necesita un servidor, porque los navegadores no pueden decodificar {from} por sí solos. Los archivos viajan por una conexión HTTPS cifrada, se convierten y después se eliminan — nunca se usan para nada más.",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Esta conversión necesita un servidor, porque los navegadores no pueden generar {to} por sí solos. Los archivos viajan por una conexión HTTPS cifrada, se convierten y después se eliminan — nunca se usan para nada más.",
  "Are my images uploaded anywhere?": "¿Se suben mis imágenes a algún sitio?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "No. La conversión de {from} a {to} se hace por completo en la pestaña de tu navegador, así que los datos de la imagen nunca salen de tu dispositivo. La única excepción son las imágenes demasiado grandes para que una pestaña las dibuje — de más de {mb} MB o con demasiados megapíxeles para su canvas, algo que una foto de un teléfono moderno puede alcanzar con solo unos pocos MB. Esas se envían por HTTPS a nuestro servidor y se eliminan tras la conversión, y la herramienta te avisa cuando ocurre.",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "No. La conversión de {from} a {to} se hace por completo en la pestaña de tu navegador, así que los datos de la imagen nunca salen de tu dispositivo.",
  "How many {from} files can I convert at once?": "¿Cuántos archivos {from} puedo convertir a la vez?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "No hay un límite fijo. Añade un lote grande: los archivos se procesan uno tras otro y se entregan en un único ZIP. Los lotes muy grandes simplemente tardan más — la pestaña sigue respondiendo todo el tiempo.",
  "Is there a watermark, sign-up or payment?": "¿Hay marca de agua, registro o pago?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "Nada de eso. No hay cuenta, ni marca de agua en el resultado, ni ningún cobro. El archivo convertido es exactamente la imagen que convertiste.",
  "Does this work on a phone?": "¿Funciona en el teléfono?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "Sí. El conversor funciona en los navegadores de iOS y Android — puedes elegir imágenes directamente de tu galería y la descarga llega a tu carpeta de descargas habitual.",

  // ── copy.ts: buildSecurity and buildPrivacyNote ────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "{from} a {to} es una de las pocas conversiones que no pueden hacerse en el navegador, así que tu archivo se envía a nuestro servidor para procesarlo. La transferencia va cifrada con HTTPS, el archivo se convierte al momento y después se elimina. Nada se guarda, se indexa ni se usa para entrenar modelos.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "Tus imágenes se quedan en tu dispositivo. La conversión de {from} a {to} ocurre por completo en tu navegador — sin subida, sin copia en un servidor y sin registro de lo que convertiste. La única excepción son las {offload}: superan lo que una pestaña del navegador puede procesar, así que se envían por HTTPS, se convierten y se eliminan.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "Tus imágenes se quedan en tu dispositivo. La conversión de {from} a {to} ocurre por completo en tu navegador — sin subida, sin copia en un servidor y sin registro de lo que convertiste.",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "Se convierte en nuestro servidor mediante una conexión cifrada — los archivos se eliminan justo después.",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "Se convierte en tu navegador — los archivos se quedan en tu dispositivo (las {offload} se procesan en nuestro servidor).",
  "Converted in your browser — your images never leave your device.":
    "Se convierte en tu navegador — tus imágenes nunca salen de tu dispositivo.",

  // ── ConverterPage chrome ───────────────────────────────────────────────
  "Why convert {from} to {to}?": "¿Por qué convertir {from} a {to}?",
  "{from} and {to}, briefly": "{from} y {to}, en pocas palabras",
  "How to convert {from} to {to}": "Cómo convertir {from} a {to}",
  "Going the other way?": "¿Necesitas la conversión inversa?",
  "Convert {name}": "Convertir {name}",
  "or drop {from} images here": "o suelta aquí imágenes {from}",
};
