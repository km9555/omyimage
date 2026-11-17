import type { Dict } from "@/i18n/t";

/**
 * German strings for the /de image converter hub (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own
 * chrome and its FAQ.
 */
export const deImageConverter: Dict = {
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} Formatkonverter, jeder für ein bestimmtes Formatpaar gebaut statt als allgemeines Auswahlmenü. Wählen Sie unten Ihr Ausgangsformat. Alles ist kostenlos, verarbeitet ganze Stapel und läuft in Ihrem Browser – es sei denn, das Format macht das unmöglich.",
  "Convert from {format}": "{format} umwandeln",
  "to {format}": "in {format}",
  "Frequently asked questions": "Häufige Fragen",
  "Home": "Startseite",

  "Which image format should I convert to?": "In welches Bildformat soll ich umwandeln?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "JPG für Fotos, die überall funktionieren müssen. PNG, wenn Sie Transparenz oder eine verlustfreie Datei zum Weiterbearbeiten brauchen. WebP, wenn das Bild auf eine Webseite soll und Sie die kleinste Datei möchten, die noch Transparenz unterstützt. AVIF ist noch kleiner, lässt sich aber in deutlich weniger Programmen öffnen.",
  "Do these converters upload my images?": "Laden diese Konverter meine Bilder hoch?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "Fast alle laufen vollständig in Ihrem Browser, das Bild verlässt Ihr Gerät also nie. Ausnahmen sind Formate, die ein Browser nicht selbst lesen oder schreiben kann – vor allem HEIC –, und diese Seiten sagen das ausdrücklich.",
  "Can I convert several files at once?": "Kann ich mehrere Dateien auf einmal umwandeln?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "Ja. Jeder Konverter hier verarbeitet Stapel: Fügen Sie so viele Dateien hinzu, wie Sie möchten, und Sie erhalten sie als ein einziges ZIP statt als einzelne Downloads zurück.",
  "Is there a file size limit?": "Gibt es eine Größenbeschränkung?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "Eine feste Grenze gibt es nicht. Sehr große oder sehr hochauflösende Bilder gehen bei den meisten Konvertern an unseren Server, weil ein Browser-Tab ein Canvas nur bis zu einer bestimmten Größe darstellen kann – ein Handyfoto mit 48 Megapixeln stößt an diese Grenze, obwohl es nur wenige Megabyte groß ist. BMP ist die Ausnahme und wird immer lokal umgewandelt.",
  "Do I lose quality when converting?": "Verliere ich beim Umwandeln an Qualität?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "Das hängt vom Zielformat ab. PNG ist verlustfrei, in diesem Schritt geht also nichts verloren. JPG, WebP und AVIF sind verlustbehaftet und kodieren das Bild neu, bei vernünftigen Qualitätseinstellungen ist der Unterschied aber nicht zu sehen. Wiederholtes Umwandeln zwischen verlustbehafteten Formaten summiert die Verluste – wandeln Sie also einmal um, vom besten Original, das Sie haben.",
};
