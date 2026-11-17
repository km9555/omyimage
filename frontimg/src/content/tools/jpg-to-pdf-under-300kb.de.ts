import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/jpg-in-pdf-unter-300kb (variant of image-to-pdf, 300 KB).
 * Target query: „JPG in PDF unter 300 KB“. Angle: FARBIGE Dokumente mit drei
 * bis fünf Seiten — Stempel, Siegel und Lichtbilder müssen lesbar bleiben.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-300kb",
  locale: "de",
  name: "JPG in PDF unter 300 KB",
  tagline:
    "Machen Sie aus mehreren Seiten Fotos oder Scans ein PDF unter 300 KB, in dem farbige Stempel, Siegel und Lichtbilder klar erkennbar bleiben. Für Antrags- und Nachweisportale. Im Browser, ohne Upload.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "JPG in PDF unter 300 KB – Farbe bleibt | oMyImage",
  metaDescription:
    "JPG in PDF unter 300 KB umwandeln: drei bis fünf farbige Seiten mit lesbaren Stempeln in einem PDF — kostenlos, ohne Anmeldung, für Antrags- und Behördenportal.",

  intro:
    "Ein PDF-Limit von 300 KB steht meist für ein umfangreicheres Dokument: drei bis fünf Seiten, oft in Farbe — eine Urkunde mit Siegel, ein Antragsformular mit aufgeklebtem Foto, ein Stapel Belege. Diese Seite setzt Ihre Bilder zu einem PDF zusammen und komprimiert sie, falls das Ergebnis über 300 KB liegt, gerade so stark neu, dass die ganze Datei passt. Mit 300 KB zum Verteilen bleiben Farben originalgetreu und Stempel lesbar.",

  sections: [
    {
      heading: "Farbe, die lesbar bleibt",
      id: "colour",
      body: [
        "Farbige Stempel und Siegel machen viele Dokumente erst gültig, und gerade sie verschwimmen oft als Erstes, wenn eine Datei stark komprimiert wird. Bei 300 KB behält ein dreiseitiges Farbdokument etwa 800 × 1100 Pixel pro Seite; blaue Stempel, rote Siegel und ein aufgeklebtes Foto bleiben also deutlich sichtbar.",
        "Besteht Ihr Dokument teils aus reinem getippten Text und teils aus Farbe, lassen Sie alles farbig — eine einzelne Schwarz-Weiß-Seite im PDF spart weniger, als man denkt, weil das Limit ohnehin auf alle Seiten verteilt wird.",
      ],
    },
    {
      heading: "Wie viele Seiten passen",
      id: "pages",
      body: [
        "Drei A4-Seiten bleiben bei 300 KB bequem lesbar, vier oder fünf funktionieren bei Dokumenten mit großer Schrift oder viel Weißraum. Die Größe wird nach der Fläche jedes Bildes aufgeteilt: Ein großer Scan bekommt mehr vom Budget als ein kleiner Kassenbon, und am Ende sind alle Seiten ähnlich scharf.",
        "Ab sechs Seiten nehmen Sie besser die Seite für 500 KB, sofern das Portal das erlaubt, oder teilen das Dokument auf zwei PDFs auf.",
      ],
    },
    {
      heading: "Mehrere kleine Belege auf einer Seite",
      id: "multi-up",
      body: [
        "Quittungen, Ausweise und kleine Bescheinigungen verschwenden Platz, wenn jede eine ganze A4-Seite belegt. Stellen Sie „Bilder pro Seite“ auf 2 oder 4, dann werden sie gemeinsam angeordnet. Das PDF wird kürzer und lässt sich leichter prüfen, und jedes Element behält trotzdem seine eigene Auflösung.",
      ],
    },
    {
      heading: "Ein letzter Blick vor dem Hochladen",
      id: "check",
      body: [
        "Öffnen Sie das PDF und zoomen Sie in jede Seite hinein. Prüfen Sie, ob die Seiten in der richtigen Reihenfolge stehen, nichts abgeschnitten ist und jeder Stempel und jede Unterschrift lesbar ist. Ist eine Seite deutlich schlechter als die übrigen, fotografieren Sie sie bei Tageslicht neu und erstellen Sie das PDF noch einmal.",
      ],
    },
    {
      heading: "Formulare mit aufgeklebtem Foto",
      id: "pasted-photo",
      body: [
        "Ein ausgefülltes Antragsformular trägt oft ein Passbild in einem Kästchen, und das Portal prüft, ob das Gesicht erkennbar ist. Bei 300 KB bleibt das aufgeklebte Foto in einem dreiseitigen Formular dafür klar genug — vorausgesetzt, die Seite selbst wurde gut fotografiert.",
        "Fotografieren Sie das Formular flach liegend, bei Tageslicht und ohne Blitz, damit das glänzende Foto kein Licht spiegelt. Zeigt das Fotofeld einen Lichtreflex, kippen Sie die Seite leicht vom Fenster weg und fotografieren Sie erneut.",
      ],
    },
    {
      heading: "Benennen und hochladen",
      id: "upload",
      body: [
        "Portale lehnen häufig Dateinamen mit Leerzeichen, Umlauten oder Sonderzeichen ab. Geben Sie dem PDF vor dem Hochladen einen kurzen Namen wie antrag_formular.pdf und bewahren Sie die Originalfotos auf, falls Sie das PDF später mit einem anderen Limit neu erstellen müssen.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie JPG in ein PDF unter 300 KB um",
  steps: [
    { title: "Seiten hinzufügen", description: "Fügen Sie Fotos oder Scans jeder Seite hinzu — JPG, PNG, WEBP oder GIF." },
    { title: "Anordnen", description: "Legen Sie Reihenfolge, Seitengröße und Bilder pro Seite fest; das Limit von 300 KB ist bereits eingestellt." },
    { title: "PDF erstellen", description: "Laden Sie ein PDF unter 300 KB herunter, mit klar erhaltenen Farben und Stempeln." },
  ],

  features: [
    { icon: "palette", title: "Farbe bleibt erhalten", description: "Stempel, Siegel und Fotos bleiben bei 300 KB farbig und klar." },
    { icon: "grid_view", title: "Mehrere Elemente pro Seite", description: "Zwei oder vier Belege oder Karten auf einer Seite, jedes in eigener Auflösung." },
    { icon: "lock", title: "Kein Upload", description: "Ihre Dokumente werden in Ihrem Browser komprimiert und zusammengefügt." },
  ],

  faqs: [
    { q: "Wie erstelle ich aus JPG-Bildern ein PDF unter 300 KB?", a: "Fügen Sie die Bilder hinzu, ordnen Sie sie an und klicken Sie auf „PDF erstellen“. Das Limit von 300 KB ist bereits eingestellt; die Bilder werden nur so weit wie nötig komprimiert." },
    { q: "Wie viele Seiten kann ein PDF mit 300 KB haben?", a: "Drei A4-Seiten bleiben in Farbe lesbar, vier oder fünf funktionieren bei großer Schrift. Auch längere Dokumente passen, mit weniger Details pro Seite." },
    { q: "Bleiben farbige Stempel sichtbar?", a: "Ja. Bei 300 KB behält ein Farbdokument genug Details für Stempel, Siegel und aufgeklebte Fotos." },
    { q: "Kann ich zwei Quittungen auf eine Seite setzen?", a: "Ja. Wählen Sie 2 oder 4 unter „Bilder pro Seite“." },
    { q: "Warum ist eine Seite unschärfer als die anderen?", a: "Meist wurde dieses Foto bei schlechterem Licht aufgenommen. Fotografieren Sie die Seite bei Tageslicht neu und erstellen Sie das PDF noch einmal." },
    { q: "Sind 300 KB dasselbe wie 0,3 MB?", a: "Ja, 300 KB sind 300.000 Byte. Das PDF besteht auch Portale, die 1 KB als 1.024 Byte rechnen." },
    { q: "Werden meine Dateien hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Ist das Foto auf meinem Formular danach noch erkennbar?", a: "Ja, bei 300 KB für ein Formular mit bis zu drei oder vier Seiten — sofern das Formular ohne Lichtreflex auf dem Foto aufgenommen wurde." },
  ],

  security:
    "Ihre Dokumentbilder werden auf Ihrem Gerät komprimiert und in Ihrem Browser zu einem PDF zusammengesetzt. Nichts wird hochgeladen, nichts wird gespeichert.",
};

export default content;
