import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/jpg-in-pdf-unter-200kb (variant of image-to-pdf, 200 KB).
 * Target query: „JPG in PDF unter 200 KB“. Angle: kleine Dokumenten-SETS
 * (Vorder- und Rückseite, zwei oder drei Seiten) für Bewerbungs-,
 * Stipendien- und Hochschulportale.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-200kb",
  locale: "de",
  name: "JPG in PDF unter 200 KB",
  tagline:
    "Fassen Sie Fotos oder Scans Ihrer Unterlagen zu einem PDF unter 200 KB zusammen — Zeugnisse, Notenübersichten, Ausweis mit Vorder- und Rückseite — für Hochschul-, Stipendien- und Jobportale. Lesbare Seiten, im Browser, ohne Upload.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "JPG in PDF unter 200 KB – mehrere Seiten | oMyImage",
  metaDescription:
    "JPG in PDF unter 200 KB: mehrere Bilder zu einem lesbaren PDF zusammenfügen, kostenlos, ohne Anmeldung — für Online-Bewerbung und Hochschulportale.",

  intro:
    "Hochschul-, Stipendien- und Bewerbungsportale geben häufig 200 KB für ein PDF vor, meist für ein Dokument mit zwei oder drei Seiten: eine Notenübersicht mit Rückseite, ein Zeugnis samt Anlage, beide Seiten eines Ausweises. Diese Seite setzt Ihre Bilder in der gewünschten Reihenfolge zu einem PDF zusammen und komprimiert sie, falls das Ergebnis über 200 KB liegt, gerade so weit neu, dass die ganze Datei passt — das Budget wird dabei so verteilt, dass jede Seite gleich gut lesbar bleibt.",

  sections: [
    {
      heading: "Zwei oder drei lesbare Seiten",
      id: "pages",
      body: [
        "Bei 200 KB behalten zwei Seiten mit getipptem Text jeweils etwa 800 × 1100 Pixel und drei Seiten rund 600 × 800 — bei zwei Seiten klar lesbar, bei drei in Ordnung, solange die Schrift normal groß ist wie auf den meisten Zeugnissen und Formularen. Das Budget wird nach Pixelfläche verteilt: Ein ganzseitiger Scan bekommt mehr davon als ein kleiner Ausweis im selben Dokument, und keine Seite wird deutlich unschärfer als die anderen.",
        "Bilder, die schon passen, bleiben unangetastet: Sind Ihre Seiten klein genug, um so wie sie sind ein PDF unter 200 KB zu ergeben, wird das PDF unverändert daraus erstellt.",
      ],
    },
    {
      heading: "Seiten in die richtige Reihenfolge bringen",
      id: "order",
      body: [
        "Fügen Sie alle Bilder hinzu und bringen Sie sie dann mit den Pfeilen an jedem Bild in die Lesereihenfolge — Vorderseite vor Rückseite, Seite eins vor Seite zwei. Die Vorschau links zeigt genau, wie die Seiten herauskommen.",
        "Benennen Sie Ihre Fotos vorher sinnvoll, etwa zeugnis-vorne und zeugnis-hinten, dann erkennen Sie eine falsche Reihenfolge auf einen Blick.",
      ],
    },
    {
      heading: "Beide Seiten einer Karte auf einer Seite",
      id: "both-sides",
      body: [
        "Portale wollen Vorder- und Rückseite eines Ausweises oft auf einer einzigen PDF-Seite. Fügen Sie beide Fotos hinzu, stellen Sie „Bilder pro Seite“ auf 2, und beide Seiten landen untereinander auf einer A4-Seite. Schneiden Sie jedes Foto vorher auf die Karte zu, damit beide Seiten gleich groß erscheinen.",
      ],
    },
    {
      heading: "Vor dem Hochladen prüfen",
      id: "check",
      body: [
        "Öffnen Sie das heruntergeladene PDF und zoomen Sie jede Seite auf 100 %: Namen, Nummern und Daten sollten klar lesbar sein, und an den Rändern darf nichts abgeschnitten sein. Ist eine Seite schwer zu lesen, fotografieren Sie sie bei besserem Licht neu, statt das Limit zu erhöhen — ein sauberes Foto lässt sich viel besser komprimieren als ein dunkles.",
      ],
    },
    {
      heading: "Wie das Limit von 200 KB eingehalten wird",
      id: "how",
      body: [
        "Zuerst wird das PDF aus Ihren Bildern im Originalzustand erstellt. Liegt es dann schon unter 200 KB, bekommen Sie es sofort, und nichts wird neu komprimiert. Andernfalls misst das Tool, wie viel der Datei auf Bilder und wie viel auf die PDF-Struktur selbst entfällt, und verteilt den Rest der 200 KB nach Größe auf die Bilder.",
        "Jedes Bild wird anschließend in der höchsten JPG-Qualität neu gespeichert, die in seinen Anteil passt, und das PDF wird neu erstellt. Liegt das Ergebnis noch ein paar Byte darüber, werden die Anteile enger gefasst und es folgt ein weiterer Versuch — die heruntergeladene Datei liegt also immer unter dem Limit, nicht nur knapp daneben.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie JPG in ein PDF unter 200 KB um",
  steps: [
    { title: "Bilder hinzufügen", description: "Fügen Sie die Fotos oder Scans aller Seiten hinzu — JPG, PNG, WEBP oder GIF." },
    { title: "Seiten ordnen und anlegen", description: "Legen Sie mit den Pfeilen die Reihenfolge fest; wählen Sie Seitengröße und Bilder pro Seite." },
    { title: "PDF erstellen", description: "Das PDF wird mit unter 200 KB heruntergeladen, die Bilder nur so weit wie nötig komprimiert." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Ein PDF unter 200 KB", description: "Die ganze Datei bleibt unter dem Limit, egal wie viele Seiten sie hat." },
    { icon: "reorder", title: "Seiten in Ihrer Reihenfolge", description: "Ordnen Sie Seiten um und sehen Sie das Ergebnis in der Vorschau, bevor Sie das PDF erstellen." },
    { icon: "lock", title: "Privat", description: "Zeugnisse und Ausweise verlassen nie Ihren Browser." },
  ],

  faqs: [
    { q: "Wie wandle ich JPG in ein PDF unter 200 KB um?", a: "Fügen Sie die Bilder hinzu, bringen Sie sie in die richtige Reihenfolge und klicken Sie auf „PDF erstellen“. Das Limit von 200 KB ist bereits eingestellt, und die Bilder werden nur so weit wie nötig komprimiert." },
    { q: "Wie viele Seiten passen in ein PDF mit 200 KB?", a: "Zwei Seiten bleiben klar lesbar; drei funktionieren bei Zeugnissen und Formularen mit normal großer Schrift. Auch mehr Seiten passen, jede dann mit weniger Details." },
    { q: "Wie bringe ich beide Seiten meines Ausweises auf eine Seite?", a: "Fügen Sie beide Fotos hinzu und wählen Sie 2 unter „Bilder pro Seite“. Beide Seiten landen auf einer Seite." },
    { q: "Haben alle Seiten die gleiche Qualität?", a: "Ja. Das Größenbudget wird nach der Fläche jedes Bildes verteilt, jede Seite wird also gleichmäßig komprimiert." },
    { q: "Meine Bilder sind schon klein — werden sie trotzdem komprimiert?", a: "Nein. Ergeben sie bereits ein PDF unter 200 KB, werden sie genau so verwendet, wie sie sind." },
    { q: "Sind 200 KB dasselbe wie 0,2 MB?", a: "Ja, 200 KB sind 200.000 Byte. Das PDF besteht auch Portale, die 1 KB als 1.024 Byte rechnen." },
    { q: "Werden meine Dokumente hochgeladen?", a: "Nein. Die Bilder werden in Ihrem Browser komprimiert, und dort entsteht auch das PDF." },
    { q: "Warum dauert es ein paar Sekunden?", a: "Jedes Bild wird auf seinen Anteil am Limit komprimiert und das PDF neu erstellt, alles in Ihrem Browser. Große Handyfotos brauchen einen Moment länger." },
  ],

  security:
    "Ihre Dokumentbilder werden auf Ihrem Gerät komprimiert und in Ihrem Browser zu einem PDF zusammengesetzt. Es wird nichts hochgeladen und nirgends etwas gespeichert.",
};

export default content;
