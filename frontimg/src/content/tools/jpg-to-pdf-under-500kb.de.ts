import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/jpg-in-pdf-unter-500kb (variant of image-to-pdf, 500 KB).
 * Target query: „JPG in PDF unter 500 KB“. Angle: LANGE Dokumente —
 * mehrseitige Anträge, Belege, Berichte — und der Versand per E-Mail.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-500kb",
  locale: "de",
  name: "JPG in PDF unter 500 KB",
  tagline:
    "Fassen Sie viele Fotos oder Scans zu einem PDF unter 500 KB zusammen — mehrseitige Anträge, Kassenbons, Berichte und handschriftliche Arbeiten — bereit zum Hochladen oder Mailen. Lesbare Seiten, im Browser, ohne Upload.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "JPG in PDF unter 500 KB – lange Dokumente | oMyImage",
  metaDescription:
    "JPG in PDF unter 500 KB: bis zu zehn Seiten, Belege oder Handschrift in einem kleinen PDF — kostenlos, ohne Anmeldung, ideal als E-Mail-Anhang oder für Portale.",

  intro:
    "500 KB sind das übliche Limit, wenn ein Portal oder ein Büro ein ganzes Dokument auf einmal haben will: einen zehnseitigen Antrag, die Belege eines Monats, eine handschriftliche Hausarbeit, einen Bericht mit Fotos. Direkt vom Smartphone zusammengestellt, ergeben diese Seiten ein PDF mit 20 oder 30 MB. Diese Seite erstellt das PDF und komprimiert die Bilder, falls es über 500 KB liegt, gerade so weit neu, dass die ganze Datei passt — jede Seite bleibt so lesbar, wie das Limit es zulässt.",

  sections: [
    {
      heading: "Lange Dokumente in einer Datei",
      id: "long",
      body: [
        "Bei 500 KB behalten fünf Seiten mit getipptem Text jeweils etwa 800 × 1100 Pixel und zehn Seiten rund 600 × 800 — genug, damit normal große Schrift und Handschrift bei normalem Zoom lesbar bleiben. Das Budget wird nach der Fläche jedes Bildes verteilt, die Seiten fallen also gleichmäßig aus.",
        "Bis etwa zehn Seiten lässt sich das Ergebnis noch bequem lesen; darüber hinaus teilen Sie das Dokument in zwei PDFs auf oder fragen nach, ob das Portal eine größere Datei annimmt.",
      ],
    },
    {
      heading: "Kassenbons und lange Belege",
      id: "receipts",
      body: [
        "Ein Kassenbon ist lang und schmal, auf einer A4-Seite bliebe der größte Teil leer. Wählen Sie „An Bild anpassen“ als Seitengröße, dann wird jeder Bon zu einer Seite in genau seiner eigenen Form — gut auf dem Smartphone lesbar und leicht für die Buchhaltung zu prüfen.",
        "Mehrere Belege können sich auch eine A4-Seite teilen: Stellen Sie „Bilder pro Seite“ auf 2 oder 4.",
      ],
    },
    {
      heading: "Das PDF per E-Mail verschicken",
      id: "email",
      body: [
        "Die meisten E-Mail-Dienste begrenzen Anhänge auf etwa 20 bis 25 MB pro Nachricht, und viele Firmenpostfächer erlauben deutlich weniger. Ein PDF unter 500 KB kommt überall durch, öffnet sich auf dem Smartphone sofort und füllt nicht das Postfach der Empfänger — und lässt sich trotzdem lesbar auf A4 ausdrucken.",
      ],
    },
    {
      heading: "Die Originale aufbewahren",
      id: "originals",
      body: [
        "Das komprimierte PDF ist eine Kopie zum Verschicken und Hochladen. Behalten Sie die Originalfotos: Wenn später jemand eine deutlichere Fassung einer Seite oder ein anderes Limit verlangt, erstellen Sie sie aus den Originalen statt aus dem komprimierten PDF.",
      ],
    },
    {
      heading: "Hausarbeiten und Handschriftliches",
      id: "assignments",
      body: [
        "Hochschulen und Schulen sammeln handschriftliche Arbeiten oft als ein PDF mit Größenlimit ein. Fotografieren Sie jede Seite bei Tageslicht gerade von oben und fügen Sie die Fotos in Seitenreihenfolge hinzu — die Vorschau zeigt jede Seite, bevor Sie die Datei erstellen.",
        "Dunkler Kugelschreiber ist nach dem Komprimieren viel besser lesbar als Bleistift. Fällt eine Seite blass aus, fotografieren Sie nur diese neu; die übrigen müssen Sie nicht noch einmal aufnehmen.",
      ],
    },
    {
      heading: "Fotos in unterschiedlichen Größen",
      id: "mixed",
      body: [
        "Seiten, die aus unterschiedlichem Abstand oder mit verschiedenen Smartphones fotografiert wurden, haben sehr unterschiedliche Pixelmaße. Auf A4- oder Letter-Seiten werden alle passend auf dieselbe Seite skaliert, und das Größenbudget wird nach der Fläche jedes Fotos verteilt, sodass ein riesiges Foto die anderen nicht verdrängt.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie JPG in ein PDF unter 500 KB um",
  steps: [
    { title: "Alle Seiten hinzufügen", description: "Fügen Sie Fotos oder Scans jeder Seite hinzu — JPG, PNG, WEBP oder GIF." },
    { title: "Ordnen und anlegen", description: "Bringen Sie die Seiten in Reihenfolge und wählen Sie die Seitengröße; das Limit von 500 KB ist bereits eingestellt." },
    { title: "PDF erstellen", description: "Laden Sie ein PDF unter 500 KB herunter, bereit zum Hochladen oder Mailen." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Viele Seiten, eine kleine Datei", description: "Bis zu zehn Seiten in einem einzigen PDF unter 500 KB." },
    { icon: "receipt_long", title: "Kassenbons passen", description: "Seiten im Format des Bildes für lange Bons oder mehrere Belege pro A4-Seite." },
    { icon: "lock", title: "Privat", description: "Seiten werden in Ihrem Browser komprimiert und zusammengefügt, nie hochgeladen." },
  ],

  faqs: [
    { q: "Wie wandle ich JPG in ein PDF unter 500 KB um?", a: "Fügen Sie alle Bilder hinzu, bringen Sie sie in Reihenfolge und klicken Sie auf „PDF erstellen“. Das Limit von 500 KB ist bereits eingestellt; die Bilder werden nur so weit wie nötig komprimiert." },
    { q: "Wie viele Seiten passen in ein PDF mit 500 KB?", a: "Fünf Seiten bleiben klar lesbar, zehn sind bei normal großer Schrift in Ordnung. Darüber hinaus teilen Sie das Dokument auf." },
    { q: "Wie erstelle ich ein PDF aus Kassenbons?", a: "Fügen Sie die Fotos der Bons hinzu und wählen Sie „An Bild anpassen“ als Seitengröße oder 2 bis 4 Bilder pro A4-Seite." },
    { q: "Kann ich ein PDF mit 500 KB per E-Mail verschicken?", a: "Ja, mit jedem E-Mail-Dienst — es liegt weit unter jedem Anhanglimit." },
    { q: "Bleibt Handschrift lesbar?", a: "Ja, bei bis zu etwa zehn Seiten normaler Handschrift. Fotografieren Sie jede Seite bei Tageslicht, dann wird das Ergebnis am deutlichsten." },
    { q: "Sind 500 KB dasselbe wie 0,5 MB?", a: "Ja, 500 KB sind 500.000 Byte. Das PDF besteht auch Portale, die 1 KB als 1.024 Byte rechnen." },
    { q: "Werden meine Seiten hochgeladen?", a: "Nein. Das PDF entsteht vollständig in Ihrem Browser." },
    { q: "Warum ist mein PDF kleiner als 500 KB, obwohl die Grenze 500 KB beträgt?", a: "Das Tool komprimiert nur so weit wie nötig und lässt einen kleinen Sicherheitsabstand, damit das PDF auch Portale besteht, die anders rechnen. Bei wenigen Seiten bleibt die Datei oft deutlich darunter, weil die Bilder gar nicht stärker komprimiert werden müssen — die Qualität ist dann so hoch wie möglich." },
    { q: "Kann ich Fotos von verschiedenen Smartphones kombinieren?", a: "Ja. Jedes Foto wird unabhängig von seiner Auflösung an dieselbe Seitengröße angepasst, und das Limit wird fair zwischen ihnen aufgeteilt." },
  ],

  security:
    "Ihre Seitenbilder werden auf Ihrem Gerät, in Ihrem Browser, komprimiert und zu einem PDF zusammengesetzt. Nichts wird hochgeladen oder irgendwo gespeichert.",
};

export default content;
