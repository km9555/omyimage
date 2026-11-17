import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.de";

/**
 * German copy for /de/gif-drehen.
 *
 * Head term „GIF drehen“; „GIF spiegeln“ rides along in the metaTitle, a
 * heading and an FAQ because the same tool flips.
 */
const content: ToolPageContent = {
  toolId: "rotate-gif",
  locale: "de",
  name: "GIF drehen",
  tagline:
    "Drehen Sie animierte GIFs um 90° nach links oder rechts oder um 180°, oder spiegeln Sie sie – jeder Frame dreht sich gleich, und die Animation läuft weiter. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF drehen & spiegeln – animierte GIFs online | oMyImage",
  metaDescription:
    "GIF drehen um 90° oder 180° oder horizontal und vertikal spiegeln – alle Frames, Timing und Farben bleiben erhalten. Kostenlos, ohne Wasserzeichen, ohne Upload.",

  intro:
    "Ein GIF, das mit falsch gehaltenem Handy aufgenommen wurde, oder ein Clip, der gespiegelt in die andere Richtung schauen soll, lässt sich in den meisten Bildbearbeitungen nicht korrigieren, ohne die Animation zu verlieren. Mit „GIF drehen“ von oMyImage drehen Sie die ganze Animation auf einmal: Wählen Sie 90° nach links, 90° nach rechts oder 180°, fügen Sie bei Bedarf eine horizontale oder vertikale Spiegelung hinzu und sehen Sie die Vorschau sich dabei mitbewegen. Jeder Frame wird gleich gedreht, behält sein Timing und seine exakten Farben – das Ergebnis sieht aus wie das Original, nur richtig herum.",

  sections: [
    {
      heading: "Wann ein GIF gedreht werden muss",
      id: "when",
      body: [
        "Smartphones nehmen in der Richtung auf, in der sie gehalten werden, und GIF-Konverter lesen nicht immer die Ausrichtungsangabe, die einem Player sagt, das Video zu drehen. Ein Clip im Hochformat kann deshalb auf der Seite liegend herauskommen. Bildschirmaufnahmen eines gedrehten Monitors, Scans animierter Zeichnungen und GIFs aus Apps, die seltsam zuschneiden, haben dasselbe Problem.",
        "Das Drehen korrigiert die Datei selbst, nicht nur die Anzeige in einer App – das GIF steht also überall richtig, wo Sie es posten oder verschicken.",
      ],
    },
    {
      heading: "GIF drehen oder spiegeln",
      id: "modes",
      body: [
        "Drehen dreht das Bild um seine Mitte: 90° nach rechts (im Uhrzeigersinn), 90° nach links (gegen den Uhrzeigersinn) oder 180° (auf den Kopf). Eine Vierteldrehung tauscht Breite und Höhe, aus einem GIF mit 480 × 270 wird 270 × 480; eine halbe Drehung behält die Größe.",
        "Spiegeln kehrt das Bild stattdessen um. Horizontal tauscht links und rechts – praktisch, wenn ein Motiv in eine Seite hinein oder zu einer Bildunterschrift schauen soll –, vertikal tauscht oben und unten. Text in einem gespiegelten GIF steht spiegelverkehrt, spiegeln Sie also nur, wenn das keine Rolle spielt.",
        "Drehung und Spiegelung lassen sich kombinieren: Eine 90°-Drehung plus horizontale Spiegelung ergibt zum Beispiel eine gespiegelte Hochformat-Version. Die Vorschau zeigt die Kombination, bevor irgendetwas verarbeitet wird.",
      ],
    },
    {
      heading: "Was gleich bleibt",
      id: "kept",
      body: [
        "Jeder Frame behält seine Dauer, die Animation läuft also im selben Tempo und wiederholt sich genau wie vorher. Transparente Bereiche bleiben transparent.",
        "Eine Drehung um ein Vielfaches von 90° verschiebt Pixel, ohne sie zu vermischen – nichts wird neu berechnet oder weichgezeichnet. Passen die Farben des GIFs in eine Palette, was für die meisten GIFs gilt, werden sie exakt zurückgeschrieben. GIFs aus Videos verwenden manchmal eine Palette pro Frame; sie bekommen eine gemeinsame Palette mit 256 Farben aus allen Frames, was selten auffällt.",
      ],
    },
    {
      heading: "Hochformat und Querformat",
      id: "orientation",
      body: [
        "Ein seitlich liegender Handy-Clip, der zum Hochformat-GIF gedreht wird, passt zu Stories, Handybildschirmen und Chats, wo hohe Animationen mehr vom Bild füllen. Umgekehrt passt ein ins Querformat gedrehter Hochkant-Clip besser zu Folien, Webseiten und videoartigen Bannern.",
        "Braucht das Ergebnis zusätzlich eine bestimmte Form – quadratisch für ein Profilbild etwa –, schneiden Sie es danach mit „GIF zuschneiden“ zu; für eine exakte Pixelgröße nutzen Sie „GIF Größe ändern“.",
      ],
    },
    {
      heading: "Dateigröße",
      id: "size",
      body: [
        "Beim Drehen kommen keine Pixel hinzu und keine weg, die Datei bleibt daher meist nah an ihrer ursprünglichen Größe. Sie kann etwas größer oder kleiner werden, weil die GIF-Kompression zeilenweise arbeitet und ein gedrehtes Bild andere Zeilen hat. Um sie gezielt zu verkleinern, geben Sie das Ergebnis danach in „GIF komprimieren“.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser dekodiert, gedreht und kodiert. Es wird nie hochgeladen, und nach dem Schließen der Seite wird nichts aufbewahrt – persönliche Clips und Bildschirmaufnahmen bleiben auf Ihrem Gerät.",
      ],
    },
    {
      heading: "Standbilder drehen",
      id: "stills",
      body: [
        "Für JPG-, PNG- und WebP-Fotos nutzen Sie stattdessen „Bild drehen“: Es verarbeitet viele Dateien auf einmal und dreht ein Bild auch um beliebige Winkel, nicht nur in 90°-Schritten. „GIF drehen“ gibt es, weil gewöhnliche Dreh-Tools nur den ersten Frame einer Animation behalten.",
      ],
    },
  ],

  howToTitle: "So drehen Sie ein GIF",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Drehung wählen", description: "Wählen Sie 90° nach links, 90° nach rechts oder 180° und bei Bedarf eine Spiegelung; die Vorschau aktualisiert sich sofort." },
    { title: "Drehen und herunterladen", description: "Klicken Sie auf GIF drehen, vergleichen Sie das Ergebnis mit dem Original und laden Sie es herunter." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Drehen oder spiegeln", description: "90° nach links oder rechts, 180° sowie horizontale oder vertikale Spiegelung." },
    { icon: "visibility", title: "Live-Vorschau", description: "Sehen Sie die gedrehte Animation, bevor irgendetwas verarbeitet wird." },
    { icon: "lock", title: "Kein Upload", description: "Vollständig in Ihrem Browser gedreht." },
  ],

  faqs: [
    { q: "Wie drehe ich ein animiertes GIF?", a: "Fügen Sie das GIF hinzu, wählen Sie 90° nach links, 90° nach rechts oder 180° und klicken Sie auf GIF drehen. Jeder Frame wird gedreht, und die Animation läuft weiter." },
    { q: "Kann ich ein GIF horizontal spiegeln?", a: "Ja. Wählen Sie unter Spiegeln die Option Horizontal, um es von links nach rechts zu spiegeln – mit oder ohne Drehung." },
    { q: "Ist das GIF danach noch animiert?", a: "Ja. Alle Frames bleiben mit ihrem ursprünglichen Timing erhalten, und das GIF wiederholt sich wie vorher." },
    { q: "Verschlechtert Drehen die Qualität?", a: "Nein. Vierteldrehungen verschieben Pixel, ohne sie zu vermischen, und die Originalfarben werden wiederverwendet, sobald sie in eine Palette passen." },
    { q: "Warum sind Breite und Höhe vertauscht?", a: "Eine 90°-Drehung legt das Bild auf die Seite, aus einem GIF mit 480 × 270 wird also 270 × 480. Eine 180°-Drehung behält die Größe." },
    { q: "Kann ich um einen beliebigen Winkel drehen?", a: "Hier nicht. „GIF drehen“ arbeitet in 90°-Schritten, was jedes Pixel scharf hält; andere Winkel würden die Frames weichzeichnen und leere Ecken erzeugen." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente GIFs bleiben transparent." },
    { q: "Ändert sich die Dateigröße?", a: "Nur wenig. Es kommen keine Pixel hinzu oder weg, aber die Kompression kann mit der neuen Ausrichtung leicht schwanken." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Das GIF wird vollständig in Ihrem Browser gedreht." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, im mobilen Browser. Große GIFs dauern auf dem Smartphone etwas länger." },
    { q: "Kann ich ein GIF drehen, das aus einem Video stammt?", a: "Ja. Es wird wie jedes andere GIF gedreht; um das Video selbst zu drehen, machen Sie daraus zuerst mit „Video in GIF“ ein GIF." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Begrenzung, wie viele GIFs Sie drehen." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser gedreht. Nichts wird hochgeladen, gespeichert oder getrackt.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
