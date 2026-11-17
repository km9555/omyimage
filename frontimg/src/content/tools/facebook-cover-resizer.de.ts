import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/facebook-titelbild-groesse (variant of resize-image).
 * Target query: „Facebook Titelbild Größe“; secondary „Facebook Titelbild“ (1.6K/mo, DE).
 */
const content: ToolPageContent = {
  toolId: "facebook-cover-resizer",
  locale: "de",
  name: "Facebook Titelbild Größe anpassen",
  tagline:
    "Bringen Sie jedes Bild auf die Größe eines Facebook-Titelbilds – 851 × 315 Pixel als leichtes sRGB-JPG –, zugeschnitten oder mit Rand aufgefüllt, mit Blick auf den Ausschnitt am Handy. Kostenlos, im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Facebook Titelbild Größe: 851 × 315 px anpassen | oMyImage",
  metaDescription:
    "Die richtige Facebook Titelbild Größe: Bild auf 851 × 315 Pixel bringen, als leichtes sRGB-JPG. Ihr Facebook Titelbild zugeschnitten oder aufgefüllt, kostenlos.",

  intro:
    "Ein Facebook Titelbild ist breit und niedrig, und es wird in zwei verschiedenen Formen gezeigt: als breiter Streifen am Computer und als höherer, schmalerer Ausschnitt auf dem Handy. Laden Sie einfach irgendein Foto hoch, entscheidet Facebook, was abgeschnitten wird. Dieses Tool startet mit der Facebook Titelbild Größe von 851 × 315 Pixeln und speichert ein JPG: Fügen Sie Ihr Bild hinzu, wählen Sie Zuschneiden oder Auffüllen und laden Sie ein Titelbild herunter, das schnell lädt und genau das zeigt, was Sie zeigen wollen.",

  sections: [
    {
      heading: "Die Größe, die Facebook empfiehlt",
      id: "spec",
      body: [
        "Facebook empfiehlt, Titelbilder als sRGB-JPG mit 851 Pixeln Breite und 315 Pixeln Höhe hochzuladen, idealerweise unter 100 KB, damit sie schnell laden. Das Minimum liegt bei 400 × 150 Pixeln. Ein Titelbild, das genau 851 × 315 misst, muss am Desktop nicht neu positioniert werden.",
        "Das Tool speichert standardmäßig ein JPG in sRGB. Bei einem detailreichen Foto kann die Datei mit hoher Qualität trotzdem über 100 KB liegen. Ziehen Sie den Qualitätsregler etwas herunter oder komprimieren Sie das Ergebnis danach mit dem 100-KB-Modus des Komprimierers, wenn Ihnen die Ladezeit wichtiger ist als das letzte Detail.",
      ],
    },
    {
      heading: "Desktop und Handy zeigen unterschiedliche Ausschnitte",
      id: "crop",
      body: [
        "Am Computer wird das Titelbild mit etwa 820 × 312 Pixeln angezeigt – fast das ganze Bild. Auf dem Handy erscheint es mit ungefähr 640 × 360 Pixeln, also in einer höheren Form, und der linke und rechte Rand fallen weg. Alles nahe an den Seiten, etwa ein Name oder ein Logo in einer Ecke, kann für Besucher am Handy verschwinden.",
        "Halten Sie Schrift und Gesichter in der Bildmitte und nutzen Sie die äußeren Ränder für Hintergrund, auf den Sie verzichten können. Auf persönlichen Profilen überdeckt außerdem Ihr Profilbild den unteren linken Teil des Titelbilds – lassen Sie auch diesen Bereich ruhig.",
      ],
    },
    {
      heading: "Zuschneiden oder mit Rand auffüllen",
      id: "fit",
      body: [
        "Zuschneiden und füllen, die Voreinstellung, skaliert das Bild so, dass es den ganzen Rahmen von 851 × 315 bedeckt, und schneidet den Überstand gleichmäßig ab. Das passt zu Landschaften, Gruppenfotos aus etwas Entfernung und breiten Produktaufnahmen. Sitzt das Motiv weit oben oder unten im Bild, schneiden Sie es vorher selbst mit der Zuschneiden-Schaltfläche auf der Bildkarte zu.",
        "Mit Rand auffüllen passt das ganze Bild in den Rahmen ein und füllt die Seiten mit einer Farbe. Das eignet sich für ein quadratisches Logo, ein Plakat oder einen Veranstaltungsflyer, bei dem kein Rand verloren gehen darf – wählen Sie eine Hintergrundfarbe, die zum Design passt.",
      ],
    },
    {
      heading: "Schrift, Logos und PNG",
      id: "text",
      body: [
        "Facebook komprimiert Titelbilder erneut, und die JPG-Kompression trifft scharfe Schrift und Logos am stärksten. Besteht Ihr Titelbild vor allem aus Schrift oder flächigen Grafiken, wählen Sie PNG als Ausgabeformat: Laut Facebook liefert PNG bei Bildern mit Text oder Logo oft ein besseres Ergebnis.",
      ],
    },
    {
      heading: "Titelbild bei Facebook ändern",
      id: "upload",
      body: [
        "Klicken Sie auf Ihrem Profil oder Ihrer Seite auf Titelbild bearbeiten oder auf das Kamerasymbol im Titelbild, wählen Sie Foto hochladen und das heruntergeladene Bild. Da es bereits die richtige Größe hat, sollte der Schritt zum Verschieben das ganze Bild zeigen; speichern Sie, wenn alles passt. Facebook-Seiten verwenden dasselbe breite Titelbild, sodass das Bild auch für eine Unternehmensseite funktioniert.",
      ],
    },
  ],

  howToTitle: "So passen Sie ein Bild an die Facebook Titelbild Größe an",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein JPG, PNG, WEBP, GIF oder BMP – ein Foto, ein Plakat oder ein Design." },
    { title: "Zuschneiden oder auffüllen", description: "Die Titelbild-Größe 851 × 315 ist schon eingestellt; wählen Sie Zuschneiden und füllen oder Mit Rand auffüllen." },
    { title: "Herunterladen", description: "Ändern Sie die Größe und laden Sie ein JPG herunter, das Sie direkt als Titelbild einstellen können." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Genau 851 × 315", description: "Die Titelbild-Größe, die Facebook empfiehlt – am Desktop ist kein Verschieben nötig." },
    { icon: "speed", title: "Leichtes sRGB-JPG", description: "Gespeichert als JPG in sRGB, dem Format, das Facebook für schnelles Laden vorschlägt." },
    { icon: "lock", title: "Im Browser", description: "Ihr Bild wird auf Ihrem Gerät bearbeitet und nie hochgeladen." },
  ],

  faqs: [
    { q: "Welche Größe hat ein Facebook Titelbild?", a: "Laden Sie es mit 851 × 315 Pixeln hoch. Facebook zeigt es am Computer mit etwa 820 × 312 und auf dem Handy mit 640 × 360 Pixeln; das Minimum ist 400 × 150." },
    { q: "Warum ist mein Titelbild auf dem Handy abgeschnitten?", a: "Handys zeigen einen höheren Ausschnitt des Titelbilds und schneiden links und rechts ab. Halten Sie Schrift und Gesichter in der Mitte." },
    { q: "Wie bringe ich mein Bild auf 851 × 315?", a: "Fügen Sie es hier hinzu – die Titelbild-Größe ist bereits gewählt. Wählen Sie Zuschneiden und füllen oder Mit Rand auffüllen, dann Größe ändern und herunterladen." },
    { q: "JPG oder PNG für das Facebook Titelbild?", a: "JPG für Fotos – Facebook empfiehlt ein sRGB-JPG unter 100 KB. PNG für Titelbilder, die vor allem aus Schrift oder einem Logo bestehen." },
    { q: "Wie bekomme ich das Titelbild unter 100 KB?", a: "Senken Sie vor dem Verkleinern den Qualitätsregler oder komprimieren Sie das Ergebnis danach mit dem Komprimierer auf 100 KB." },
    { q: "Kann ich dasselbe Bild für eine Facebook-Seite verwenden?", a: "Ja. Seiten nutzen dasselbe breite Titelbild; 851 × 315 passt, mit demselben Tipp, die Mitte für das Wichtige zu nutzen." },
    { q: "Mein Titelbild wirkt unscharf – warum?", a: "Das Original war womöglich kleiner als 851 × 315 und wurde vergrößert, oder Facebook hat feine Details komprimiert. Starten Sie mit einem größeren Bild und halten Sie Schrift groß." },
    { q: "Wird mein Bild irgendwo hochgeladen?", a: "Nein. Es wird in Ihrem Browser bearbeitet; nur Sie selbst laden es bei Facebook hoch." },
  ],

  security:
    "Ihr Bild wird vollständig in Ihrem Browser bearbeitet. Sehr große Bilder werden unter Umständen auf unserem Server verarbeitet und sofort gelöscht; nichts wird gespeichert.",
};

export default content;
