import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-300kb-verkleinern (variant of compress-image,
 * 300 KB). Target query: „Bild auf 300 KB verkleinern“. Angle: Dokumente —
 * Ausweis, Zeugnisse und Nachweise für Online-Bewerbung und Behördenportale.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-300kb",
  locale: "de",
  name: "Bild auf 300 KB verkleinern",
  tagline:
    "Verkleinern Sie Fotos und Dokumenten-Scans auf unter 300 KB, ohne dass der Text unleserlich wird — Personalausweis, Zeugnisse, Nachweise und Anschreiben für Bewerbungs- und Anmeldeportale. Mehrere Dateien auf einmal, direkt im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 300 KB verkleinern – kostenlos | oMyImage",
  metaDescription:
    "Bild auf 300 KB verkleinern, kostenlos und ohne Anmeldung: Ausweis, Zeugnisse und Scans bleiben lesbar — Foto unter 300 KB für Online-Bewerbung und Portale.",

  intro:
    "300 KB ist eine typische Grenze für hochgeladene Dokumente: Personalausweis oder Aufenthaltstitel, Meldebescheinigung, Abschlusszeugnis, Notenübersicht oder Arbeitszeugnis, die Bewerbungs-, Stipendien- und Anmeldeportale als Anhang verlangen. Der Platz reicht, um eine ganze Seite lesbar zu halten — Kleingedrucktes, Stempel und Unterschriften eingeschlossen —, solange das Foto der Seite gut ist. Fügen Sie alle Dokumente auf einmal hinzu, und jedes kommt als JPG unter 300 KB zurück.",

  sections: [
    {
      heading: "Ganze Seiten bleiben lesbar",
      id: "pages",
      body: [
        "Eine mit dem Smartphone fotografierte A4-Seite hat meist 3 bis 6 MB. Bei 300 KB behält dieselbe Seite rund 1600 × 2260 Pixel — scharf genug, um die kleinste Schrift auf einer Notenübersicht in 100-%-Ansicht zu lesen. Das Tool investiert das Budget zuerst in Details und verringert die Abmessungen nur, wenn eine Seite ungewöhnlich voll ist.",
        "Legen Sie das Blatt flach auf einen dunklen Tisch, fotografieren Sie es bei Tageslicht genau von oben, damit keine Schatten entstehen, und schneiden Sie den Tisch vor dem Komprimieren weg. Eine Scanner-App, die die Seite gerade ausrichtet, hilft ebenfalls.",
      ],
    },
    {
      heading: "Personalausweis: auf die Karte zuschneiden",
      id: "id-cards",
      body: [
        "Ein Ausweis ist klein, ein Foto davon zeigt also vor allem Tisch. Schneiden Sie es auf die Kanten der Karte zu, dann passt es bei sehr hoher Qualität unter 300 KB — mit klar erkennbarem Lichtbild, Nummer und Hologramm-Details.",
        "Verlangt ein Portal beide Seiten, erstellen Sie zwei Bilder — Vorder- und Rückseite — und komprimieren Sie sie zusammen; jedes kommt unter 300 KB zurück. Sollen beide Seiten in einer einzigen Datei stehen, setzen Sie sie vorher mit dem Tool „Bilder zusammenfügen“ auf eine Seite.",
      ],
    },
    {
      heading: "Farbig oder schwarz-weiß?",
      id: "colour",
      body: [
        "Lassen Sie Zeugnisse und Ausweise farbig: Farbige Stempel, Siegel und Lichtbilder gehören zu dem, was sie gültig macht, und manche Portale lehnen Dokumente ab, die wie eine Fotokopie aussehen. Für ein einfaches getipptes Schreiben oder ein ausgedrucktes Formular genügt Schwarz-Weiß und lässt mehr vom Budget für scharfen Text übrig.",
      ],
    },
    {
      heading: "Wenn das Portal ein PDF verlangt",
      id: "pdf",
      body: [
        "Manche Portale akzeptieren Dokumente nur als PDF. Komprimieren Sie die Seitenbilder zuerst hier und fügen Sie sie dann mit dem Tool „Bild in PDF umwandeln“ zusammen. Das PDF ist am Ende ungefähr so groß wie die Summe der Bilder, ein einseitiges Dokument bleibt also unter 300 KB.",
        "Gilt die 300-KB-Grenze für ein mehrseitiges Dokument als Ganzes, stellen Sie hier ein niedrigeres Limit pro Seite ein — bei drei Seiten etwa 90 KB je Seite —, damit das fertige PDF trotzdem passt.",
      ],
    },
    {
      heading: "Letzte Kontrolle vor dem Hochladen",
      id: "checklist",
      body: [
        "Öffnen Sie vor dem Hochladen jede Datei und prüfen Sie: Ist jede Zeile lesbar, fehlt kein Seitenrand, sind Stempel und Unterschriften sichtbar und steht das Dokument richtig herum? Benennen Sie die Dateien so, wie das Portal es verlangt — viele lehnen Leerzeichen, Umlaute oder Satzzeichen im Dateinamen ab —, und bewahren Sie die Originale auf, denn eine andere Bewerbung kann ein anderes Limit vorgeben.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 300 KB",
  steps: [
    { title: "Dokumente hinzufügen", description: "Wählen Sie Ihre Fotos und Dokumenten-Scans aus oder ziehen Sie sie hierher — JPG, PNG oder WEBP." },
    { title: "Auf unter 300 KB komprimieren", description: "Das Limit von 300 KB ist bereits eingestellt; jede Datei wird passend komprimiert." },
    { title: "Alles herunterladen", description: "Laden Sie jede Datei einzeln oder alle zusammen als ZIP herunter." },
  ],

  features: [
    { icon: "description", title: "Lesbare Dokumente", description: "Ganze Seiten behalten genug Pixel für Kleingedrucktes, Stempel und Unterschriften." },
    { icon: "picture_as_pdf", title: "Bereit für ein PDF", description: "Seiten hier komprimieren und mit „Bild in PDF umwandeln“ zusammenfügen, wenn ein Portal eine einzige Datei will." },
    { icon: "lock", title: "Privat", description: "Ausweisdokumente werden in Ihrem Browser komprimiert, nicht auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Wie verkleinere ich das Foto eines Dokuments auf 300 KB?", a: "Fügen Sie es hier hinzu und klicken Sie auf Komprimieren — das Limit von 300 KB ist bereits eingestellt. Schneiden Sie vorher den Tisch rund um das Blatt weg, dann wird das Ergebnis am schärfsten." },
    { q: "Ist der Text bei 300 KB noch lesbar?", a: "Ja. Eine ganze A4-Seite behält bei 300 KB etwa 1600 × 2260 Pixel, genug, um Kleingedrucktes in 100-%-Ansicht zu lesen." },
    { q: "Wie komprimiere ich Vorder- und Rückseite meines Personalausweises?", a: "Fotografieren Sie Vorder- und Rückseite getrennt, schneiden Sie jedes Bild auf die Karte zu und fügen Sie beide hinzu. Jedes kommt unter 300 KB zurück." },
    { q: "Kann ich ein PDF unter 300 KB erstellen?", a: "Bei einer Seite ja: Komprimieren Sie das Bild hier und wandeln Sie es mit „Bild in PDF umwandeln“ in ein PDF um. Bei mehreren Seiten geben Sie jeder Seite ein kleineres Limit, damit die Summe unter 300 KB bleibt." },
    { q: "Sind 300 KB dasselbe wie 0,3 MB?", a: "Ja. 300 KB sind 300.000 Byte oder 0,3 MB. Die Datei liegt auch bei Portalen unter dem Limit, die 1 KB als 1.024 Byte rechnen." },
    { q: "Warum sieht mein Scan nach dem Komprimieren grau aus?", a: "Das Grau stammt aus dem Originalfoto — meist von Schatten oder Kunstlicht. Fotografieren Sie die Seite bei Tageslicht ohne Schatten und komprimieren Sie erneut." },
    { q: "Reichen 300 KB auch für ein Bewerbungsfoto?", a: "Problemlos. Ein Porträtfoto unter 300 KB sieht am Bildschirm praktisch genauso aus wie das Original." },
    { q: "Kann ich hier ein PDF oder eine Word-Datei komprimieren?", a: "Nein — dieses Tool arbeitet mit Bildern (JPG, PNG und WEBP). Fotografieren Sie die Seite oder machen Sie einen Screenshot, komprimieren Sie das Bild hier und wandeln Sie es mit „Bild in PDF umwandeln“ um, falls das Portal ein PDF braucht." },
    { q: "Werden meine Ausweisdaten hochgeladen?", a: "Bei üblichen Fotogrößen nicht: Die Komprimierung läuft in Ihrem Browser. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, geht an unseren Server und wird dort nach etwa einer Stunde gelöscht." },
  ],

  security:
    "Ausweise, Zeugnisse und Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei üblichen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, geht an unseren Server und wird dort nach etwa einer Stunde gelöscht.",
};

export default content;
