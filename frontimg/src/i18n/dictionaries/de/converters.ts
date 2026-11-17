import type { Dict } from "@/i18n/t";

/**
 * German strings for the data-driven converter pages.
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
 * `{offload}` is filled with the translated fragment below
 * ("sehr große oder sehr hochauflösende Bilder", nominative plural), so every
 * sentence places it in a nominative slot — German case endings would break
 * if it landed after "zu den" or "unter den".
 */
export const deConverters: Dict = {
  // ── copy.ts: shared fragments ──────────────────────────────────────────
  "very large or very high-resolution images": "sehr große oder sehr hochauflösende Bilder",

  // ── copy.ts: buildSteps ────────────────────────────────────────────────
  "Add your {from} files": "{from}-Dateien hinzufügen",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "Ziehen Sie {from}-Bilder in das Upload-Feld oder klicken Sie, um Dateien auszuwählen. Fügen Sie so viele hinzu, wie Sie möchten — sie landen gemeinsam in der Warteschlange.",
  "Choose your quality": "Qualität wählen",
  "Drag the quality slider to trade file size against detail.":
    "Verschieben Sie den Qualitätsregler, um zwischen Dateigröße und Detailtreue abzuwägen.",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "Da {to} keine Transparenz kennt, können Sie außerdem die Farbe wählen, die transparente Bereiche füllt.",
  "The default suits most images — raise it for detailed photographs.":
    "Der Standardwert passt für die meisten Bilder — erhöhen Sie ihn für detailreiche Fotos.",
  "Check the settings": "Einstellungen prüfen",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "Die Ausgabe als {to} ist verlustfrei und behält die Transparenz, es gibt also nichts einzustellen. Die automatische Drehung liest die EXIF-Ausrichtung, damit Hochformatfotos aufrecht bleiben.",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "Die Ausgabe als {to} ist verlustfrei, es gibt also nichts einzustellen. Die automatische Drehung liest die EXIF-Ausrichtung, damit Hochformatfotos aufrecht bleiben.",
  "Convert and download": "Umwandeln und herunterladen",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "Klicken Sie auf Umwandeln. Eine einzelne Datei wird sofort als {to} heruntergeladen, mehrere kommen gesammelt in einer ZIP-Datei.",

  // ── copy.ts: buildFeatures ─────────────────────────────────────────────
  "Batch {from} → {to}": "{from} → {to} im Stapel",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "Wandeln Sie einen ganzen Ordner in einem Durchgang um. Mehrere Dateien erhalten Sie als eine ZIP-Datei — kein mühsames Herunterladen einzeln.",
  "Transparency survives": "Transparenz bleibt erhalten",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "Transparente Bereiche Ihres {from} bleiben im {to} transparent — kein weißer Kasten hinter dem Bild.",
  "You pick the background": "Sie wählen den Hintergrund",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "{to} kann keine Transparenz speichern, durchsichtige Bereiche müssen also gefüllt werden. Wählen Sie die Farbe selbst, statt einfach Weiß zu bekommen.",
  "Quality you control": "Qualität unter Ihrer Kontrolle",
  "Lossless output": "Verlustfreie Ausgabe",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "Ein Qualitätsregler statt einer festen Voreinstellung — Sie entscheiden, wo die Grenze zwischen Dateigröße und Detail liegt.",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "{to} ist verlustfrei — das umgewandelte Bild entspricht Pixel für Pixel dem Original.",
  "No software to install": "Keine Software nötig",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "Nichts herunterzuladen, kein Konto anzulegen. Die Dateien werden per HTTPS übertragen, umgewandelt und danach vom Server gelöscht.",
  "Private by default": "Standardmäßig privat",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "Die Umwandlung läuft direkt in Ihrem Browser-Tab. Ihre {from}-Dateien werden nicht hochgeladen — einzige Ausnahme: {offload}.",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "Die Umwandlung läuft direkt in Ihrem Browser-Tab. Ihre {from}-Dateien werden nie hochgeladen.",

  // ── copy.ts: buildBoilerplateFaqs ──────────────────────────────────────
  "What happens to my files?": "Was passiert mit meinen Dateien?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Diese Umwandlung braucht einen Server, weil Browser {from} nicht selbst dekodieren können. Die Dateien werden über eine verschlüsselte HTTPS-Verbindung übertragen, umgewandelt und anschließend gelöscht — sie werden für nichts anderes verwendet.",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Diese Umwandlung braucht einen Server, weil Browser {to} nicht selbst erzeugen können. Die Dateien werden über eine verschlüsselte HTTPS-Verbindung übertragen, umgewandelt und anschließend gelöscht — sie werden für nichts anderes verwendet.",
  "Are my images uploaded anywhere?": "Werden meine Bilder irgendwohin hochgeladen?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "Nein. Die Umwandlung von {from} in {to} läuft vollständig in Ihrem Browser-Tab, die Bilddaten verlassen Ihren Computer also nie. Einzige Ausnahme sind Bilder, die zu groß für einen Browser-Tab sind — entweder über {mb} MB oder mit zu vielen Megapixeln für das Canvas, was ein modernes Handyfoto schon bei wenigen MB erreichen kann. Diese werden per HTTPS an unseren Server gesendet und nach der Umwandlung gelöscht, und das Tool zeigt Ihnen an, wenn das passiert.",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "Nein. Die Umwandlung von {from} in {to} läuft vollständig in Ihrem Browser-Tab, die Bilddaten verlassen Ihren Computer also nie.",
  "How many {from} files can I convert at once?": "Wie viele {from}-Dateien kann ich auf einmal umwandeln?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "Es gibt kein festes Limit. Fügen Sie einen großen Stapel hinzu — die Dateien werden nacheinander verarbeitet und dann als eine ZIP-Datei ausgeliefert. Sehr große Stapel dauern einfach länger, der Tab bleibt dabei bedienbar.",
  "Is there a watermark, sign-up or payment?": "Gibt es ein Wasserzeichen, eine Anmeldung oder Kosten?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "Nichts davon. Kein Konto, kein Wasserzeichen im Ergebnis und keine Kosten. Die umgewandelte Datei ist genau das Bild, das Sie umgewandelt haben.",
  "Does this work on a phone?": "Funktioniert das auf dem Handy?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "Ja. Der Konverter funktioniert in mobilen Browsern unter iOS und Android — Sie können Bilder direkt aus der Galerie wählen, und der Download landet in Ihrem üblichen Download-Ordner.",

  // ── copy.ts: buildSecurity and buildPrivacyNote ────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "{from} in {to} ist eine der wenigen Umwandlungen, die nicht im Browser laufen können, deshalb wird Ihre Datei zur Verarbeitung an unseren Server gesendet. Die Übertragung ist per HTTPS verschlüsselt, die Datei wird sofort umgewandelt und danach gelöscht. Nichts wird gespeichert, indexiert oder zum Training verwendet.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "Ihre Bilder bleiben auf Ihrem Gerät. Die Umwandlung von {from} in {to} findet vollständig in Ihrem Browser statt — kein Upload, keine Kopie auf einem Server und kein Protokoll darüber, was Sie umgewandelt haben. Die einzige Ausnahme sind {offload}: Sie übersteigen, was ein Browser-Tab verarbeiten kann, und werden deshalb per HTTPS gesendet, umgewandelt und gelöscht.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "Ihre Bilder bleiben auf Ihrem Gerät. Die Umwandlung von {from} in {to} findet vollständig in Ihrem Browser statt — kein Upload, keine Kopie auf einem Server und kein Protokoll darüber, was Sie umgewandelt haben.",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "Umwandlung auf unserem Server über eine verschlüsselte Verbindung — die Dateien werden direkt danach gelöscht.",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "Umwandlung in Ihrem Browser — die Dateien bleiben auf Ihrem Gerät ({offload} werden auf unserem Server verarbeitet).",
  "Converted in your browser — your images never leave your device.":
    "Umwandlung in Ihrem Browser — Ihre Bilder verlassen nie Ihr Gerät.",

  // ── ConverterPage chrome ───────────────────────────────────────────────
  "Why convert {from} to {to}?": "Warum {from} in {to} umwandeln?",
  "{from} and {to}, briefly": "{from} und {to} kurz erklärt",
  "How to convert {from} to {to}": "So wandeln Sie {from} in {to} um",
  "Going the other way?": "Andersherum umwandeln?",
  "Convert {name}": "{name} umwandeln",
  "or drop {from} images here": "oder {from}-Bilder hier ablegen",
};
