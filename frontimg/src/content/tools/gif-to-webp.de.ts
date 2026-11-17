import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gif-in-webp. Target query: „GIF in WebP" (Germany,
 * Nov 2026; low volume, no secondary in the brief). The ui block is shared
 * with gif-to-apng and gif-to-sprite-sheet, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-to-webp",
  locale: "de",
  name: "GIF in WebP",
  tagline:
    "Wandeln Sie animierte GIFs in animiertes WebP um – verlustfrei, damit jedes Pixel bleibt, oder verlustbehaftet für viel kleinere Dateien. Jeder Frame behält sein Timing. Kostenlos, direkt im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF in WebP umwandeln – animiert & kostenlos | oMyImage",
  metaDescription:
    "GIF in WebP umwandeln, online und kostenlos: animiertes WebP verlustfrei oder deutlich kleiner. Alle Frames und Zeiten bleiben erhalten, ohne Upload.",

  intro:
    "GIF ist das älteste Animationsformat im Web und eines der am wenigsten effizienten. Animiertes WebP spielt dieselbe Animation in jedem aktuellen Browser ab, meist mit einem Bruchteil der Datenmenge. Der Konverter „GIF in WebP“ von oMyImage schreibt Ihr GIF Frame für Frame neu: Wählen Sie „Verlustfrei“, um jedes Pixel exakt zu behalten, oder „Hoch“ bzw. „Klein“ für eine verlustbehaftete Kompression, die die Datei noch deutlich stärker verkleinert. Das Ergebnis läuft neben dem Original, mit Dateigröße und Ersparnis, damit Sie vor dem Herunterladen abwägen können.",

  sections: [
    {
      heading: "Verlustfrei oder verlustbehaftet",
      id: "quality",
      body: [
        "„Verlustfrei“ speichert jedes Pixel genau so, wie es im GIF steht. Weil die verlustfreie Kompression von WebP weit besser ist als die von GIF, wird die Datei meist schon dadurch kleiner – bei Bildschirmaufnahmen, Logos und Zeichentrick mit großen einfarbigen Flächen oft um ein Drittel oder mehr.",
        "„Hoch“ und „Klein“ komprimieren dagegen verlustbehaftet, ähnlich wie ein JPG für jeden Frame. Aus Videos geschnittene GIFs werden damit meist halb so groß oder noch kleiner; dafür werden scharfe Kanten und Text leicht weicher. Probieren Sie zuerst „Hoch“ und wählen Sie „Klein“, wenn die Dateigröße wichtiger ist als die Schärfe. Bei kleinen, schlichten Grafiken kann „Verlustfrei“ sogar kleiner ausfallen als die verlustbehafteten Stufen – das Ergebnis zeigt jede Größe an, der Vergleich geht also schnell.",
      ],
    },
    {
      heading: "So wird die Animation gespeichert",
      id: "how",
      body: [
        "Jeder Frame wird vom WebP-Encoder Ihres eigenen Browsers kodiert und anschließend zu einem animierten WebP zusammengesetzt. Wie bei einem gut gemachten GIF speichert jeder Frame nach dem ersten nur das Rechteck, das sich verändert hat, und ein Frame, der mit dem vorherigen identisch ist, wird dessen Dauer zugeschlagen. Standbilder kosten also nichts.",
        "Jeder Frame behält sein Timing, und die Animation wiederholt sich genau wie das GIF – endlos, einmal oder eine bestimmte Anzahl von Malen. Transparente Bereiche bleiben transparent; ihre Kanten bleiben hart, weil GIF von vornherein keine weiche Transparenz kannte.",
      ],
    },
    {
      heading: "Wo WebP funktioniert",
      id: "support",
      body: [
        "Animiertes WebP läuft in Chrome, Edge, Firefox, Safari und Opera, auf dem Computer wie auf dem Smartphone, und ist damit für Websites unbedenklich. GIFs durch WebP zu ersetzen ist einer der einfachsten Wege, eine Seite schneller laden zu lassen, und erfüllt den Rat von Speed-Tests, Bilder in modernen Formaten auszuliefern.",
        "Außerhalb des Browsers ist die Unterstützung lückenhafter. Viele E-Mail-Programme, Chat-Apps, ältere Bildbearbeitungen und Upload-Formulare erwarten weiterhin GIF und zeigen womöglich nur ein Standbild. Behalten Sie das GIF für diese Fälle und verwenden Sie das WebP im Web.",
      ],
    },
    {
      heading: "Browser, die WebP erstellen können",
      id: "browsers",
      body: [
        "Die Umwandlung nutzt den im Browser eingebauten WebP-Encoder, es wird also nichts zusätzlich heruntergeladen. Chrome und Edge speichern „Verlustfrei“ tatsächlich verlustfrei, und auch Firefox erzeugt WebP-Dateien. Safari kann WebP anzeigen, aber nicht erstellen – und auf iPhone und iPad läuft jeder Browser mit der Engine von Safari. Verwenden Sie für dieses Tool daher einen Computer oder ein Android-Smartphone. Das Tool sagt Ihnen Bescheid, wenn Ihr Browser es nicht kann.",
      ],
    },
    {
      heading: "Sticker und Messenger",
      id: "stickers",
      body: [
        "Animierte Sticker für WhatsApp sind WebP-Dateien mit 512 × 512 Pixeln. Die Umwandlung ist also ein Schritt auf dem Weg vom GIF zum Sticker. Schneiden Sie das GIF vorher mit „GIF zuschneiden“ quadratisch zu und bringen Sie es mit „GIF Größe ändern“ auf 512 Pixel; danach wandeln Sie es hier um. Sticker-Apps setzen eine niedrige Größengrenze, deshalb passen „Hoch“ oder „Klein“ meist besser als „Verlustfrei“.",
      ],
    },
    {
      heading: "WebP auf der eigenen Website",
      id: "website",
      body: [
        "Um das WebP auf einer Seite zu verwenden, tauschen Sie einfach die Datei im Bild-Tag aus, so wie Sie es mit einem GIF tun würden. Müssen Sie noch sehr alte Programme bedienen, können Sie mit dem picture-Element das WebP anbieten und das GIF als Ausweichlösung hinterlegen. Am meisten profitieren Seiten mit mehreren Animationen: Jedes ersetzte GIF bedeutet weniger Daten, die ein Smartphone laden muss.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser gelesen und das WebP dort geschrieben. Nichts wird hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie GIF in WebP um",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Qualität wählen", description: "„Verlustfrei“ behält jedes Pixel; „Hoch“ und „Klein“ machen die Datei kleiner." },
    { title: "Umwandeln und herunterladen", description: "Klicken Sie auf „In WebP umwandeln“, vergleichen Sie die Größe mit dem GIF und laden Sie die Datei herunter." },
  ],

  features: [
    { icon: "sync_alt", title: "Bleibt animiert", description: "Alle Frames, ihr Timing und die Schleifeneinstellung werden übernommen." },
    { icon: "compress", title: "Kleinere Dateien", description: "Verlustfrei meist schon kleiner als das GIF, verlustbehaftet noch kleiner." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser umgewandelt." },
  ],

  faqs: [
    { q: "Wie wandle ich ein animiertes GIF in WebP um?", a: "Fügen Sie das GIF hinzu, wählen Sie „Verlustfrei“, „Hoch“ oder „Klein“ und klicken Sie auf „In WebP umwandeln“. Das WebP läuft genau wie das GIF." },
    { q: "Ist das WebP weiterhin animiert?", a: "Ja. Alle Frames und ihr Timing bleiben erhalten, und es wiederholt sich wie das GIF." },
    { q: "Ist WebP kleiner als GIF?", a: "Fast immer. Verlustfrei ist bei Grafiken oft ein Drittel kleiner; die verlustbehafteten Stufen halbieren GIFs aus Videos meist." },
    { q: "Verändert „Verlustfrei“ Pixel?", a: "Nein. In Chrome und Edge speichert „Verlustfrei“ jedes Pixel exakt so wie im GIF." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente Bereiche bleiben transparent." },
    { q: "Warum funktioniert es nicht in Safari?", a: "Safari kann WebP anzeigen, hat aber keinen WebP-Encoder. Verwenden Sie Chrome, Edge oder Firefox zum Umwandeln." },
    { q: "Wo kann ich animiertes WebP verwenden?", a: "Auf Websites und in jedem aktuellen Browser. Manche E-Mail- und Chat-Apps brauchen weiterhin GIF." },
    { q: "Kann ich daraus einen WhatsApp-Sticker machen?", a: "Schneiden Sie das GIF quadratisch zu, skalieren Sie es auf 512 × 512 Pixel, wandeln Sie es hier um und fügen Sie es dann mit einer Sticker-App hinzu." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Auf Android ja, in Chrome oder Firefox. Auf iPhone und iPad kann bisher kein Browser WebP-Dateien erstellen." },
    { q: "Wie wird aus einem WebP wieder ein GIF?", a: "Mit „WebP in GIF“, das jeden Frame und sein Timing behält." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Welche Qualitätsstufe soll ich wählen?", a: "„Verlustfrei“ für Grafiken und Bildschirmaufnahmen, „Hoch“ für GIFs aus Videos und „Klein“, wenn die Größengrenze knapp ist." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser umgewandelt. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // GifExportTool.tsx — shared with gif-to-apng and gif-to-sprite-sheet, whose modules reuse this block.
    "Select a GIF": "GIF auswählen",
    "or drop a GIF here": "oder GIF hierher ziehen",
    "Please select a GIF.": "Bitte wählen Sie ein GIF aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Change image": "Datei wechseln",
    "Clear image": "Datei entfernen",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird bearbeitet… {p} %",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "Your file is processed in your browser and never uploaded.": "Ihre Datei wird in Ihrem Browser verarbeitet und nie hochgeladen.",
    "Your animation will appear here.": "Ihre Animation erscheint hier.",
    "Your sprite sheet will appear here.": "Ihr Sprite Sheet erscheint hier.",
    "{p}% smaller than the GIF": "{p} % kleiner als das GIF",
    "{p}% larger than the GIF": "{p} % größer als das GIF",
    "Same size as the GIF": "Gleich groß wie das GIF",
    "Original": "Original", // i18n-same
    "Result": "Ergebnis",
    "Settings": "Einstellungen",
    "Download": "Herunterladen",
    // webp
    "Convert to WEBP": "In WebP umwandeln",
    "Quality": "Qualität",
    "Lossless": "Verlustfrei",
    "High": "Hoch",
    "Small": "Klein",
    "Every pixel is kept. Usually smaller than the GIF already.": "Jedes Pixel bleibt erhalten. Meist schon kleiner als das GIF.",
    "Lossy: much smaller files, with slight softening around sharp edges.": "Verlustbehaftet: viel kleinere Dateien, scharfe Kanten werden leicht weicher.",
    "This browser saves WEBP at very high quality instead of lossless.": "Dieser Browser speichert WebP in sehr hoher Qualität statt verlustfrei.",
    // apng
    "Convert to APNG": "In APNG umwandeln",
    "APNG keeps every pixel and frame. Only the part of each frame that changes is stored, so it is often smaller than the GIF.":
      "APNG behält jedes Pixel und jeden Frame. Von jedem Frame wird nur der Teil gespeichert, der sich ändert – daher ist es oft kleiner als das GIF.",
    // sprite
    "Make sprite sheet": "Sprite Sheet erstellen",
    "Layout": "Anordnung",
    "Grid": "Raster",
    "One row": "Eine Zeile",
    "One column": "Eine Spalte",
    "Columns": "Spalten",
    "Frames": "Frames", // i18n-same
    "Keep all frames": "Alle Frames behalten",
    "Keep every 2nd frame": "Jeden 2. Frame behalten",
    "Keep every 3rd frame": "Jeden 3. Frame behalten",
    "Frame size": "Frame-Größe",
    "Space between frames": "Abstand zwischen Frames",
    "Transparent background": "Transparenter Hintergrund",
    "Background colour": "Hintergrundfarbe",
    "{n} frames of {w} × {h} px, {cols} × {rows}": "{n} Frames à {w} × {h} px, {cols} × {rows}",
    "This sheet is too large for a browser to create. Keep fewer frames, choose a smaller frame size or use a grid.":
      "Dieses Sheet ist zu groß, um es im Browser zu erstellen. Behalten Sie weniger Frames, wählen Sie eine kleinere Frame-Größe oder nutzen Sie ein Raster.",
    "CSS animation": "CSS-Animation",
    "Copy": "Kopieren",
    "Copied": "Kopiert",
    "Could not copy.": "Kopieren fehlgeschlagen.",
    "Uses the average frame time, so frames with longer pauses play at the same pace as the rest.":
      "Verwendet die durchschnittliche Frame-Dauer, daher laufen Frames mit längeren Pausen im selben Tempo wie die übrigen.",
  },
};

export default content;
