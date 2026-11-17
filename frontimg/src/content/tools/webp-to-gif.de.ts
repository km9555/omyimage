import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.de";

/**
 * German copy for /de/webp-in-gif.
 *
 * Head term „WebP in GIF“ (umwandeln); WhatsApp stickers are the main German
 * use case and get a heading-level mention.
 */
const content: ToolPageContent = {
  toolId: "webp-to-gif",
  locale: "de",
  name: "WebP in GIF",
  tagline:
    "Wandeln Sie animierte WebP-Bilder in GIF um – mit jedem Frame und seinem Timing, damit die Animation auch in Apps und Programmen läuft, die WebP nicht verstehen. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "WebP in GIF umwandeln – animiert & kostenlos | oMyImage",
  metaDescription:
    "WebP in GIF umwandeln: Animierte WebP-Dateien und WhatsApp-Sticker mit allen Frames und Timing als GIF speichern. Kostenlos, im Browser, ohne Upload.",

  intro:
    "Animiertes WebP ist effizient, doch viele Programme können es noch immer nicht öffnen: ältere Bildbearbeitungen, manche Chat-Apps, Präsentationsprogramme und viele Upload-Formulare zeigen nur ein Standbild oder lehnen die Datei ab. GIF versteht dagegen jedes Programm. Der Konverter „WebP in GIF“ von oMyImage liest jeden Frame eines animierten WebP – samt Timing, Überblendung und Transparenz – und schreibt ihn in ein GIF in Endlosschleife. Datei hinzufügen, Ergebnis neben dem Original ansehen, herunterladen.",

  sections: [
    {
      heading: "Woher animierte WebPs kommen",
      id: "sources",
      body: [
        "Webseiten liefern Animationen als WebP aus, weil sie kleiner als GIFs sind – eine von einer Seite gespeicherte Animation ist daher oft eine .webp-Datei. Auch die animierten Sticker von WhatsApp sind WebP-Dateien. Im Browser sehen beide gut aus, fast überall sonst werden sie zum eingefrorenen Bild oder zur Fehlermeldung.",
        "Die Umwandlung in GIF macht die Animation portabel: Sie lässt sich in ein Dokument einfügen, in einem Forum hochladen, Frame für Frame bearbeiten oder über Apps verschicken, die WebP nie gelernt haben.",
      ],
    },
    {
      heading: "Was sich im GIF ändert",
      id: "tradeoffs",
      body: [
        "GIF ist älter und eingeschränkter. Es kann 256 Farben pro Frame darstellen, sanfte Verläufe und Fotos können also Stufen zeigen; dieses Tool wählt eine Palette für die ganze Animation, damit die Farben zumindest zwischen den Frames stabil bleiben. Transparenz kennt in GIF nur an oder aus, weiche, halbtransparente Kanten werden also hart.",
        "Rechnen Sie damit, dass das GIF größer wird als das WebP, oft um ein Mehrfaches. Wenn das wichtig ist, verkleinert „GIF komprimieren“ es danach, und wenn das Ziel Video akzeptiert, ist ein MP4 noch kleiner.",
      ],
    },
    {
      heading: "Frames und Timing",
      id: "timing",
      body: [
        "Jeder Frame des WebP wird einzeln dekodiert und so zusammengesetzt, wie ein Browser ihn abspielt – unter Beachtung der Überblend- und Entsorgungseinstellungen pro Frame. Animationen, die nur einen Teil des Bildes aktualisieren, kommen deshalb korrekt heraus. Jeder Frame behält seine Dauer, und das GIF läuft endlos.",
        "Die Umwandlung funktioniert in jedem modernen Browser, auch in Safari, weil jeder Frame mit der eingebauten WebP-Unterstützung des Browsers dekodiert wird statt mit einem zusätzlichen Decoder.",
      ],
    },
    {
      heading: "Unbewegte WebP-Bilder",
      id: "still",
      body: [
        "Ein nicht animiertes WebP wird zu einem GIF mit einem einzigen Frame, und das Tool weist Sie darauf hin. Für ein Standbild ist PNG oder JPG meist die bessere Wahl als GIF: Nutzen Sie „WebP in PNG“, um Transparenz und volle Farben zu behalten, oder „WebP in JPG“ für Fotos.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das WebP wird vollständig in Ihrem Browser gelesen und das GIF dort geschrieben. Sticker, Screenshots und gespeicherte Animationen verlassen nie Ihr Gerät, und nach dem Schließen der Seite wird nichts aufbewahrt.",
      ],
    },
    {
      heading: "Verlustbehaftetes und verlustfreies WebP",
      id: "kinds",
      body: [
        "WebP-Frames gibt es in zwei Arten: verlustbehaftet, eventuell mit separater Transparenzebene, und verlustfrei. Beide werden genau so gelesen, wie der Browser sie anzeigt. Unschärfe oder Blockbildung, die ein verlustbehaftetes WebP bereits hatte, wandert mit ins GIF – die Umwandlung kann keine Details zurückholen, die das WebP verworfen hat.",
      ],
    },
    {
      heading: "WhatsApp-Sticker und Banner danach verkleinern",
      id: "smaller",
      body: [
        "Ist das GIF größer, als das Ziel erlaubt, bringen Sie es auf die Größe, in der es angezeigt wird – Sticker sind meist 512 Pixel oder kleiner – und geben Sie es in „GIF komprimieren“ auf Stufe Mittel. Zusammen bringen diese beiden Schritte einen umgewandelten Sticker oder Banner meist auf eine angenehme Größe.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie WebP in GIF um",
  steps: [
    { title: "WebP hinzufügen", description: "Wählen Sie ein animiertes (oder unbewegtes) WebP-Bild aus." },
    { title: "Umwandeln", description: "Klicken Sie auf In GIF umwandeln; jeder Frame und sein Timing bleiben erhalten." },
    { title: "Herunterladen", description: "Vergleichen Sie das GIF mit dem Original und laden Sie es herunter." },
  ],

  features: [
    { icon: "gif_box", title: "Animation bleibt", description: "Jeder Frame, sein Timing, die Überblendung und die Transparenz werden übernommen." },
    { icon: "devices", title: "Läuft überall", description: "GIF öffnet sich in Apps, Programmen und Formularen, die WebP ablehnen." },
    { icon: "lock", title: "Kein Upload", description: "Vollständig in Ihrem Browser umgewandelt." },
  ],

  faqs: [
    { q: "Wie wandle ich ein animiertes WebP in GIF um?", a: "Fügen Sie das WebP hinzu und klicken Sie auf In GIF umwandeln. Jeder Frame und sein Timing bleiben erhalten, und das GIF läuft in Schleife." },
    { q: "Warum ist das GIF größer als das WebP?", a: "GIF komprimiert weit weniger effizient. Nutzen Sie danach „GIF komprimieren“, wenn die Größe wichtig ist." },
    { q: "Ändern sich die Farben?", a: "Bei Fotos und Verläufen leicht: GIF erlaubt 256 Farben, die einmal für die ganze Animation gewählt werden." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja, aber GIF-Transparenz hat keine weichen Kanten, halbtransparente Kanten werden also deckend." },
    { q: "Kann ich WhatsApp-Sticker umwandeln?", a: "Ja. Animierte WhatsApp-Sticker sind WebP-Dateien und lassen sich wie jede andere umwandeln." },
    { q: "Was, wenn mein WebP nicht animiert ist?", a: "Dann erhalten Sie ein GIF mit einem Frame. Für Standbilder ist „WebP in PNG“ oder „WebP in JPG“ meist besser." },
    { q: "Funktioniert es in Safari?", a: "Ja. Die Frames werden mit der eingebauten WebP-Unterstützung des Browsers dekodiert, und die hat Safari." },
    { q: "Wird meine Datei hochgeladen?", a: "Nein. Die Umwandlung findet vollständig in Ihrem Browser statt." },
    { q: "Wie lange dauert die Umwandlung?", a: "Bei Stickern und kurzen Animationen ein paar Sekunden. Lange oder große WebPs dauern länger, und der Fortschritt wird angezeigt." },
    { q: "Wiederholt sich das GIF genauso?", a: "Das GIF läuft endlos, wie fast alle animierten WebPs." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, im mobilen Browser. Große Animationen dauern auf dem Smartphone etwas länger." },
    { q: "Kann ich das GIF in einer Präsentation verwenden?", a: "Ja. PowerPoint, Keynote und Google Slides spielen GIFs direkt auf der Folie ab." },
  ],

  security:
    "Ihr WebP wird vollständig in Ihrem Browser gelesen und in GIF umgewandelt. Nichts wird hochgeladen, gespeichert oder getrackt.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
