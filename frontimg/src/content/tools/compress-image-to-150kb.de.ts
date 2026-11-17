import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-150kb-verkleinern (variant of compress-image,
 * preset targetKb 150). Primary query: „Bild auf 150 KB verkleinern“.
 * Angle: HANDWRITTEN pages uploaded page by page, faint pencil, page order,
 * and photos at this size.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-150kb",
  locale: "de",
  name: "Bild auf 150 KB verkleinern",
  tagline:
    "Komprimieren Sie Fotos sowie handschriftliche oder gedruckte Seiten auf unter 150 KB – lesbare Handschrift, klare Fotos, ganze Stapel auf einmal. Für Upload-Portale mit 150-KB-Grenze. Kostenlos und privat, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 150 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 150 KB verkleinern: handschriftliche Seiten und Fotos als lesbares JPG unter 150 KB für Uni-Portale und Lernplattformen. Kostenlos, ohne Upload.",

  intro:
    "150 KB ist eine verbreitete Grenze pro Datei auf Uni- und Prüfungsportalen, in Bewerbungssystemen und auf Lernplattformen – vor allem dort, wo Studierende und Schüler handschriftliche Hausaufgaben oder Klausurlösungen Seite für Seite hochladen. Das reicht, damit eine volle handschriftliche Seite gut lesbar bleibt und ein Porträtfoto scharf wirkt. Fügen Sie alle Seiten auf einmal hinzu, und jede kommt als JPG unter 150 KB in der höchsten Qualität zurück, die passt.",

  sections: [
    {
      heading: "Handschriftliche Seiten",
      id: "handwritten",
      body: [
        "Bei 150 KB behält eine volle A4-Seite etwa 1200 × 1700 Pixel in guter Qualität: Jede Zeile Handschrift ist bei normalem Zoom lesbar, auch Skizzen und kleine Zahlen. Das Tool hält die Qualität so hoch, wie das Limit erlaubt, und verringert die Maße nur bei ungewöhnlich dicht beschriebenen Seiten.",
        "Fotografieren Sie jede Seite flach bei Tageslicht, senkrecht von oben und ohne andere Gegenstände im Bild. Schräg aufgenommene Seiten wirken verzerrt, und ein Schatten auf dem Papier kostet Bytes und Lesbarkeit.",
      ],
    },
    {
      heading: "Blasser Bleistift und helle Tinte",
      id: "faint",
      body: [
        "Bleistift und hellblaue Tinte verlieren auf einem Foto an Kontrast, und bei der Kompression verblassen dünne, schwache Linien zuerst. Schreiben Sie nach Möglichkeit mit einem dunklen Stift. Ist die Seite bereits beschrieben, fotografieren Sie sie bei kräftigem, gleichmäßigem Tageslicht und wandeln Sie sie vor dem Komprimieren mit „Bild schwarz weiß“ um – ohne Farbe fließt mehr vom Budget in die Linien selbst.",
      ],
    },
    {
      heading: "Mehrere Seiten in der richtigen Reihenfolge",
      id: "pages",
      body: [
        "Fügen Sie alle Seiten zusammen hinzu; jede wird auf unter 150 KB komprimiert, und Sie können sie als ZIP herunterladen. Benennen Sie die Fotos vorher in Seitenreihenfolge – seite-01, seite-02 und so weiter –, damit die Dateien in der Reihenfolge zurückkommen, die das Portal erwartet.",
        "Will das Portal ein einziges PDF und begrenzt die ganze Datei auf 150 KB, geben Sie hier jeder Seite ein kleineres Limit – etwa 50 KB pro Seite bei drei Seiten – und fügen Sie sie dann mit „Bild in PDF umwandeln“ zusammen.",
      ],
    },
    {
      heading: "Fotos bei 150 KB",
      id: "photos",
      body: [
        "Für ein Foto sind 150 KB großzügig: Ein Porträt behält rund 900 × 1200 Pixel in hoher Qualität, gut geeignet für ein Profil, einen Ausweis oder ein Mitarbeiterverzeichnis. Eine Vorbereitung ist nicht nötig, außer alles abzuschneiden, was Sie nicht im Bild haben möchten.",
      ],
    },
    {
      heading: "Scanner-Apps und normale Fotos",
      id: "scanner-apps",
      body: [
        "Eine Dokumentenscanner-App – die in die Notizen- oder Dateien-App Ihres Handys eingebaute oder eine eigene – erkennt die Seitenränder, richtet die Seite gerade aus und verstärkt den Kontrast, sodass das Papier weiß und die Schrift dunkel wird. Für handschriftliche Seiten ist das der bestmögliche Ausgangspunkt: Ein sauberer Scan lässt sich mit jeder Zeile gestochen scharf auf 150 KB komprimieren.",
        "Viele Scanner-Apps speichern standardmäßig als PDF. Wählen Sie beim Exportieren JPG oder machen Sie von jeder Seite einen Screenshot und komprimieren Sie die Bilder dann hier. Ein normales Foto geht auch; es braucht nur gutes Tageslicht und einen Blickwinkel senkrecht von oben, um so sauber wie ein Scan zu wirken.",
        "Egal, welchen Weg Sie wählen: Prüfen Sie die erste Seite in voller Größe, bevor Sie den Rest erledigen. Ist diese bei 150 KB gut lesbar, sind es die anderen auch.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 150 KB",
  steps: [
    { title: "Seiten oder Fotos hinzufügen", description: "Wählen Sie sie aus oder ziehen Sie sie hierher, bei Seiten in der richtigen Reihenfolge – JPG, PNG oder WebP." },
    { title: "Unter 150 KB komprimieren", description: "Das Limit von 150 KB ist bereits eingestellt; jede Datei wird passend komprimiert." },
    { title: "Herunterladen", description: "Laden Sie jede Datei einzeln oder alle zusammen als ZIP herunter." },
  ],

  features: [
    { icon: "edit_note", title: "Lesbare Handschrift", description: "Volle Seiten behalten genug Pixel für jede Zeile, Zahl und Skizze." },
    { icon: "folder_zip", title: "Ganze Hausarbeiten", description: "Viele Seiten auf einmal komprimiert und gemeinsam heruntergeladen." },
    { icon: "lock", title: "Privat", description: "Ihre Seiten und Fotos verlassen nie Ihren Browser." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Bild auf 150 KB?", a: "Fügen Sie es hier hinzu und klicken Sie auf „Komprimieren“ – das Limit von 150 KB ist bereits eingestellt. Sie erhalten ein JPG unter 150 KB in der besten Qualität, die passt." },
    { q: "Ist Handschrift bei 150 KB noch lesbar?", a: "Ja. Eine volle Seite behält etwa 1200 × 1700 Pixel, genug, um normale Handschrift bei üblichem Zoom zu lesen." },
    { q: "Wie lade ich mehrere handschriftliche Seiten mit je unter 150 KB hoch?", a: "Fügen Sie alle Seiten zusammen hinzu; jede kommt unter 150 KB zurück. Benennen Sie die Fotos vorher in Seitenreihenfolge, damit die Reihenfolge erhalten bleibt." },
    { q: "Bleistift oder Kugelschreiber – was funktioniert besser?", a: "Ein dunkler Stift. Bleistiftlinien sind auf Fotos blass und verblassen bei der Kompression als Erstes." },
    { q: "Kann ich aus allen Seiten ein PDF unter 150 KB machen?", a: "Ja: Geben Sie hier jeder Seite ein kleineres Limit, sodass die Summe unter 150 KB bleibt, und fügen Sie sie dann mit „Bild in PDF umwandeln“ zusammen." },
    { q: "Wie groß kann ein Foto bei 150 KB sein?", a: "Etwa 900 × 1200 Pixel in hoher Qualität – reichlich für Profile und Ausweise." },
    { q: "Sind 150 KB dasselbe wie 0,15 MB?", a: "Ja, 150 KB sind 150.000 Bytes. Die Datei passt auch bei Portalen, die 1 KB als 1.024 Bytes zählen." },
    { q: "Kann ich für die Seiten eine Scanner-App verwenden?", a: "Ja – das ist sogar der beste Weg. Exportieren Sie die Seiten als JPG (oder machen Sie Screenshots) statt als PDF und komprimieren Sie sie dann hier auf jeweils unter 150 KB." },
  ],

  security:
    "Seiten und Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei normalen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
