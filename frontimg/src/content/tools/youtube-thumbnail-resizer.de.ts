import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/youtube-thumbnail-groesse (variant of resize-image).
 * Target query: „YouTube Thumbnail Größe“ (1K/mo, DE).
 */
const content: ToolPageContent = {
  toolId: "youtube-thumbnail-resizer",
  locale: "de",
  name: "YouTube Thumbnail Größe anpassen",
  tagline:
    "Bringen Sie jedes Bild auf die YouTube Thumbnail Größe – genau 1280 × 720 Pixel im 16:9 Format, als JPG deutlich unter dem Limit von 2 MB. Zuschneiden oder mit Rand auffüllen, kostenlos, im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "YouTube Thumbnail Größe: 1280 × 720 px, kostenlos | oMyImage",
  metaDescription:
    "Die richtige YouTube Thumbnail Größe: Bild auf 1280 × 720 Pixel im 16:9 Format bringen, als JPG unter 2 MB. Zuschneiden oder Rand auffüllen, ohne Anmeldung.",

  intro:
    "YouTube möchte eigene Thumbnails mit 1280 × 720 Pixeln, im 16:9-Rahmen und unter 2 MB. Ein Screenshot aus Ihrem Schnittprogramm, ein Foto vom Handy oder eine Grafik in falscher Exportgröße erfüllt selten alle drei Bedingungen. Dieses Tool ist bereits auf die YouTube Thumbnail Größe eingestellt: Fügen Sie Ihr Bild hinzu, entscheiden Sie, ob es den Rahmen per Zuschnitt füllen oder mit einer Farbe aufgefüllt werden soll, und laden Sie ein JPG herunter, das YouTube Studio auf Anhieb akzeptiert.",

  sections: [
    {
      heading: "Die Thumbnail-Größe, die YouTube verlangt",
      id: "spec",
      body: [
        "Laut YouTube sollen eigene Thumbnails eine Auflösung von 1280 × 720 Pixeln haben, mindestens 640 Pixel breit sein, als JPG, GIF oder PNG vorliegen und kleiner als 2 MB sein. Das 16:9 Format entspricht dem Player und fast jeder Stelle, an der ein Thumbnail erscheint – von den Suchergebnissen bis zur Spalte mit vorgeschlagenen Videos. Ein Bild in einer anderen Form bekommt deshalb Balken oder einen Zuschnitt, den YouTube statt Ihnen festlegt.",
        "Das Tool speichert standardmäßig als JPG, denn ein PNG in 1280 × 720 mit einem detailreichen, fotografischen Motiv kann allein schon über 2 MB kommen. Mit der Standardqualität von 92 % landet ein typisches Thumbnail bei wenigen Hundert Kilobyte – bequem unter dem Limit, mit scharfer Schrift und scharfen Gesichtern.",
      ],
    },
    {
      heading: "Zuschneiden oder mit Rand auffüllen",
      id: "fit",
      body: [
        "Zuschneiden und füllen ist voreingestellt: Das Bild wird so skaliert, dass es den ganzen 16:9-Rahmen bedeckt, und der Überstand wird gleichmäßig an den Rändern abgeschnitten. Für die meisten Fotos und Screenshots ist das richtig. Liegt Ihr Motiv nahe am Rand, schneiden Sie das Bild vorher selbst mit der Zuschneiden-Schaltfläche auf seiner Karte zu, damit der wichtige Teil im Rahmen landet.",
        "Mit Rand auffüllen behält das ganze Bild und füllt den restlichen Platz mit einer Farbe Ihrer Wahl. Das eignet sich für ein Hochformat-Foto vom Handy, ein quadratisches Logo oder eine 4:3-Folie, die beim Zuschneiden zu viel verlieren würde. Eine kräftige Markenfarbe hinter dem Bild wirkt meist bewusster als schwarze Balken.",
      ],
    },
    {
      heading: "Gestalten für kleine Bildschirme",
      id: "small",
      body: [
        "Die meisten Zuschauer sehen Ihr Thumbnail nur in einem Bruchteil seiner echten Größe – ein paar Zentimeter breit im Handy-Feed oder in der Seitenleiste. Große Formen, ein klar erkennbares Gesicht und drei oder vier Wörter in großer Schrift überstehen das; kleine Schrift, dünne Fonts und unruhige Hintergründe verschwinden. Prüfen Sie die Vorschau in kleiner Größe, bevor Sie sich festlegen.",
        "Lassen Sie die untere rechte Ecke frei. Dort blendet YouTube die Videolänge ein, und alles Wichtige in dieser Ecke – etwa das letzte Wort eines Titels – wird auf jedem Thumbnail verdeckt.",
      ],
    },
    {
      heading: "Hochladen in YouTube Studio",
      id: "upload",
      body: [
        "Öffnen Sie das Video in YouTube Studio, gehen Sie zu Details und wählen Sie unter Thumbnail die Option Datei hochladen. Eigene Thumbnails setzen einen bestätigten Kanal voraus; ist die Option ausgegraut, bestätigen Sie Ihr Konto zuerst mit einer Telefonnummer. Änderungen können eine Weile brauchen, bis sie überall sichtbar sind, weil Thumbnails zwischengespeichert werden.",
        "Bewahren Sie Ihre Originalgrafik auf. Wenn Sie später einen anderen Titel oder Ausschnitt testen, ändern Sie die Größe erneut ausgehend vom Original und nicht vom heruntergeladenen JPG – so verliert das Thumbnail durch wiederholtes Speichern keine Qualität.",
      ],
    },
    {
      heading: "Thumbnail aus einem Videobild",
      id: "frame",
      body: [
        "Ein starkes Standbild aus dem Video selbst ist ein guter Ausgangspunkt. Halten Sie das Video im Player oder Schnittprogramm an der richtigen Stelle an und machen Sie einen Screenshot im Vollbild. Auf einem 1080p-Bildschirm hat er bereits 1920 × 1080 Pixel – dieselbe 16:9-Form –, sodass beim Verkleinern auf 1280 × 720 nur die Pixelzahl sinkt. Screenshots von einem hochkant gehaltenen Handy sind hoch statt breit: Füllen Sie sie mit Rand auf oder schneiden Sie den entscheidenden Teil zu.",
      ],
    },
  ],

  howToTitle: "So bringen Sie ein Bild auf die YouTube Thumbnail Größe",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein JPG, PNG, WEBP, GIF oder BMP – einen Screenshot, ein Foto oder eine Grafik." },
    { title: "Zuschneiden oder auffüllen", description: "Die YouTube-Thumbnail-Größe ist schon eingestellt; wählen Sie Zuschneiden und füllen oder Mit Rand auffüllen." },
    { title: "Herunterladen", description: "Ändern Sie die Größe und laden Sie ein JPG mit 1280 × 720 Pixeln für YouTube Studio herunter." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Genau 1280 × 720", description: "Die 16:9-Größe, die YouTube empfiehlt – nach dem Hochladen wird nichts beschnitten oder mit Balken versehen." },
    { icon: "compress", title: "Unter 2 MB", description: "Standardmäßig als JPG gespeichert, deutlich unter dem Größenlimit für Thumbnails." },
    { icon: "lock", title: "Im Browser", description: "Ihre Grafik wird auf Ihrem Gerät verkleinert und nie hochgeladen." },
  ],

  faqs: [
    { q: "Welche Größe hat ein YouTube Thumbnail?", a: "1280 × 720 Pixel im Seitenverhältnis 16:9, mindestens 640 Pixel breit. Die Datei muss ein JPG, GIF oder PNG sein und kleiner als 2 MB." },
    { q: "Wie bringe ich mein Bild auf 1280 × 720?", a: "Fügen Sie es hier hinzu – die YouTube Thumbnail Größe ist bereits gewählt. Wählen Sie Zuschneiden und füllen oder Mit Rand auffüllen, dann Größe ändern und herunterladen." },
    { q: "Warum meldet YouTube, mein Thumbnail sei zu groß?", a: "Die Datei ist vermutlich größer als 2 MB, was bei PNG schnell passiert. Dieses Tool speichert standardmäßig als JPG, das meist nur einige Hundert Kilobyte hat." },
    { q: "Soll ich mein Bild zuschneiden oder auffüllen?", a: "Zuschneiden für Fotos und Screenshots, damit der Rahmen voll ist. Auffüllen für Hochformat-Fotos, Logos oder Folien, die beim Zuschneiden zu viel verlieren würden." },
    { q: "Warum kann ich kein eigenes Thumbnail hochladen?", a: "Eigene Thumbnails erfordern ein bestätigtes YouTube-Konto. Bestätigen Sie es in den YouTube-Einstellungen mit einer Telefonnummer, dann erscheint die Option in Studio." },
    { q: "Kann ich ein PNG als Thumbnail verwenden?", a: "Ja, YouTube akzeptiert PNG. Wählen Sie PNG als Ausgabeformat, achten Sie aber darauf, dass die Datei unter 2 MB bleibt; JPG ist die sicherere Wahl." },
    { q: "Was sollte nicht in der Ecke stehen?", a: "Nichts Wichtiges in der unteren rechten Ecke, denn dort zeigt YouTube die Videolänge. Halten Sie Schrift und Gesichter davon fern." },
    { q: "Kann ich mehrere Thumbnails auf einmal anpassen?", a: "Ja. Fügen Sie alle hinzu; jedes wird auf 1280 × 720 gebracht, und alle werden zusammen als ZIP-Datei heruntergeladen." },
    { q: "Wird mein Bild irgendwo hochgeladen?", a: "Nein. Es wird in Ihrem Browser verkleinert; nur Sie selbst laden es bei YouTube hoch." },
  ],

  security:
    "Ihr Thumbnail wird vollständig in Ihrem Browser bearbeitet. Sehr große Bilder werden unter Umständen auf unserem Server verarbeitet und sofort gelöscht; nichts wird gespeichert.",
};

export default content;
