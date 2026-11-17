import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/jpg-in-pdf-unter-100kb (variant of image-to-pdf, 100 KB).
 * Target query: „JPG in PDF unter 100 KB“. Angle: das strenge, meist EINSEITIGE
 * Dokumenten-PDF — was hineinpasst, die Seite vorbereiten, mehrere Seiten.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-100kb",
  locale: "de",
  name: "JPG in PDF unter 100 KB",
  tagline:
    "Machen Sie aus einem Foto oder Scan eines Dokuments ein PDF unter 100 KB — für Formulare mit den strengsten PDF-Limits. Die Bilder werden nur so stark komprimiert, wie die Gesamtdatei es verlangt, in Ihrem Browser, ohne Upload.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "JPG in PDF unter 100 KB – kostenlos & online | oMyImage",
  metaDescription:
    "JPG in PDF unter 100 KB umwandeln: Ein Dokumentfoto wird zum lesbaren PDF unter 100 KB — kostenlos, ohne Anmeldung, für Formulare und Behördenportale.",

  intro:
    "Formulare, die ein Dokument „als PDF, maximal 100 KB“ verlangen — ein Zeugnis, einen Ausweis, eine Bescheinigung, einen Nachweis —, meinen in der Regel eine einzige Seite. Ein Handyfoto dieser Seite hat allein schon 3 bis 5 MB; steckt man es einfach in ein PDF, ist die Datei dreißig- bis fünfzigmal zu groß. Diese Seite erstellt das PDF und komprimiert das Bild darin, falls das Ergebnis über 100 KB liegt, gerade so stark neu, dass die ganze Datei passt — mit so scharfem Text, wie das Limit erlaubt.",

  sections: [
    {
      heading: "Was in ein PDF mit 100 KB passt",
      id: "what-fits",
      body: [
        "Eine A4-Seite passt bequem: Bei 100 KB behält eine volle Seite mit getipptem Text etwa 800 × 1100 Pixel in guter Qualität, und ein Zeugnis mit mehr Weißraum behält noch mehr — genug, um gedruckten Text, Stempel und Unterschriften bei normalem Zoom zu lesen. Die PDF-Struktur selbst braucht nur wenige Kilobyte, fast das ganze Limit geht also an das Bild der Seite.",
        "Auch zwei Seiten passen, jede mit etwas geringerer Auflösung; ab drei Seiten verschwimmt Kleingedrucktes. Verlangt ein Formular ein langes Dokument in 100 KB, lohnt sich die Frage, ob es auch getrennte Dateien pro Seite annimmt.",
      ],
    },
    {
      heading: "Die Seite vorbereiten",
      id: "prepare",
      body: [
        "Legen Sie das Dokument flach auf eine dunkle Unterlage, fotografieren Sie es bei Tageslicht genau von oben und schneiden Sie alles weg, was nicht zur Seite gehört. Eine saubere, gleichmäßig ausgeleuchtete Seite lässt sich viel besser komprimieren als eine mit Schatten, und der übrig gebliebene Tisch rund um die Seite ist verschwendeter Speicher.",
        "Bei einem schlichten getippten oder gedruckten Dokument liefert eine vorherige Umwandlung in Schwarz-Weiß mit dem Tool „Bild schwarz weiß“ bei 100 KB deutlich schärferen Text. Zeugnisse mit farbigen Stempeln und Siegeln lassen Sie farbig.",
      ],
    },
    {
      heading: "Seitengröße und Layout",
      id: "layout",
      body: [
        "A4 ist voreingestellt und passt zu den meisten Dokumenten. „An Bild anpassen“ gibt jeder Seite die Form des Fotos, ohne Ränder — praktisch für Ausweise und Quittungen. Die Seitengröße ändert die Dateigröße kaum, denn fast das ganze PDF besteht aus dem Bild; wählen Sie also, was richtig aussieht.",
        "Das Limit-Feld lässt sich ändern: Tragen Sie 99 ein, wenn ein Formular schon bei Werten knapp an 100 KB warnt, oder eine ganz andere Zahl.",
      ],
    },
    {
      heading: "Wenn es nicht passt",
      id: "too-big",
      body: [
        "Hat ein Dokument viele Seiten, reichen 100 KB womöglich einfach nicht, um sie lesbar zu halten. Das Tool erstellt trotzdem das kleinstmögliche PDF und sagt Ihnen, wenn es das Limit nicht unterschreiten konnte. Nutzen Sie dann die Seite für 200 KB oder 300 KB, sofern das Formular das erlaubt, oder erstellen Sie ein PDF pro Seite.",
      ],
    },
    {
      heading: "Scannen oder fotografieren?",
      id: "scan-or-photo",
      body: [
        "Ein Flachbettscan ist der sauberste Ausgangspunkt: gleichmäßiges Licht, eine perfekt flache Seite und weißer Hintergrund — alles lässt sich gut komprimieren. Für ein PDF mit 100 KB genügen 150 bis 200 dpi beim Scannen; höhere Einstellungen fügen nur Pixel hinzu, die zum Einpassen wieder entfernt werden.",
        "Ein Smartphone funktioniert fast genauso gut, wenn Sie die Seite bei Tageslicht gerade von oben und ohne Blitz fotografieren. Scanner-Apps helfen zusätzlich, weil sie die Seite gerade ausrichten und das Papier aufhellen; exportieren Sie das Ergebnis als JPG und fügen Sie es hier hinzu.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie JPG in ein PDF unter 100 KB um",
  steps: [
    { title: "Seitenbilder hinzufügen", description: "Fügen Sie das Foto oder den Scan Ihres Dokuments hinzu — JPG, PNG, WEBP oder GIF." },
    { title: "Layout prüfen", description: "Wählen Sie Seitengröße und Reihenfolge; das Limit von 100 KB ist bereits eingestellt." },
    { title: "PDF erstellen", description: "Die Bilder werden nur so weit wie nötig komprimiert, und das PDF wird mit unter 100 KB heruntergeladen." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Limit für die ganze Datei", description: "Das fertige PDF liegt unter 100 KB — nicht nur jedes einzelne Bild darin." },
    { icon: "description", title: "Lesbare Seiten", description: "Bilder werden nur so stark komprimiert, wie das Limit es verlangt, damit der Text scharf bleibt." },
    { icon: "lock", title: "Kein Upload", description: "Ihre Dokumente werden in Ihrem Browser zum PDF." },
  ],

  faqs: [
    { q: "Wie wandle ich ein JPG in ein PDF unter 100 KB um?", a: "Fügen Sie das Bild hinzu, prüfen Sie die Seitengröße und klicken Sie auf „PDF erstellen“. Das Limit von 100 KB ist bereits eingestellt; das Bild wird nur so weit wie nötig komprimiert." },
    { q: "Ist mein Dokument danach noch lesbar?", a: "Bei einer oder zwei Seiten ja — bei 100 KB behält eine A4-Seite genug Details für gedruckten Text, Stempel und Unterschriften." },
    { q: "Kann ich mehrere Seiten in ein PDF mit 100 KB packen?", a: "Zwei Seiten funktionieren gut; bei mehr Seiten bekommt jede weniger Pixel. Für lange Dokumente nehmen Sie ein höheres Limit, wenn das Formular es zulässt." },
    { q: "Ändert die Seitengröße die Dateigröße?", a: "Kaum. Fast das ganze PDF ist das Bild; die Seitengröße ändert nur, wie es angeordnet ist." },
    { q: "Was, wenn mein PDF schon unter 100 KB liegt?", a: "Ergeben die Bilder bereits ein PDF unter 100 KB, wird nichts neu komprimiert, und das PDF wird aus ihnen erstellt, wie sie sind." },
    { q: "Sind 100 KB dasselbe wie 0,1 MB?", a: "Ja, 100 KB sind 100.000 Byte. Das PDF besteht auch Formulare, die 1 KB als 1.024 Byte rechnen." },
    { q: "Werden meine Dokumente hochgeladen?", a: "Nein. Das PDF entsteht vollständig in Ihrem Browser." },
    { q: "Soll ich das Dokument scannen oder fotografieren?", a: "Beides funktioniert. Ein Scan ist etwas sauberer; ein Handyfoto bei Tageslicht, gerade von oben und ohne Blitz, kommt sehr nah heran." },
  ],

  security:
    "Ihre Dokumentbilder werden auf Ihrem Gerät, in Ihrem Browser, komprimiert und zu einem PDF zusammengesetzt. Nichts wird hochgeladen oder irgendwo gespeichert.",
};

export default content;
