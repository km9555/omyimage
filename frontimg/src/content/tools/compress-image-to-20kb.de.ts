import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-20kb-verkleinern (variant of compress-image,
 * preset targetKb 20). Primary query: „Bild auf 20 KB verkleinern“.
 * 20 KB is above all the SIGNATURE limit, so that is this page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-20kb",
  locale: "de",
  name: "Bild auf 20 KB verkleinern",
  tagline:
    "Komprimieren Sie ein Foto oder eine Unterschrift auf unter 20 KB – das Limit, das Prüfungs-, Bewerbungs- und Bankformulare für Unterschriften und kleine Fotos setzen. Scharfe JPGs, viele Dateien auf einmal, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 20 KB verkleinern – Unterschrift & Foto | oMyImage",
  metaDescription:
    "Bild auf 20 KB verkleinern: Unterschrift oder Foto als scharfes JPG unter 20 KB für Online-Formulare. Mehrere Dateien auf einmal, kostenlos, ohne Upload.",

  intro:
    "Zwanzig Kilobyte sind das strengste Limit, dem die meisten Menschen je begegnen, und es stammt fast immer aus einem Antragsformular: eine eingescannte Unterschrift, ein Abdruck des linken Daumens oder ein kleines Foto für eine Prüfung, ein Auswahlverfahren im öffentlichen Dienst oder eine Bank. Ein Handyfoto einer Unterschrift hat typischerweise 2–4 MB – das Hundertfache und mehr. Diese Seite bringt jedes JPG, PNG oder WebP in einem Schritt unter 20 KB, hält das Bild so scharf, wie es dieses Budget zulässt, und verarbeitet Ihren ganzen Satz Dokumente auf einmal.",

  sections: [
    {
      heading: "Wofür 20 KB gedacht sind: Unterschriften",
      id: "signatures",
      body: [
        "Online-Anträge für Auswahlprüfungen, Bewerbungen bei Bahn und Banken, Studienplatzvergaben und viele Behördenportale verlangen eine eingescannte Unterschrift, meist zwischen 10 KB und 20 KB und etwa 140 × 60 Pixel groß, manchmal mit der Angabe „6 cm × 2 cm“. Das Limit ist winzig, weil eine Unterschrift sehr wenig Information braucht: dunkle Striche auf einfarbigem Grund.",
        "Genau deshalb lassen sich Unterschriften am besten komprimieren. Eine saubere Unterschrift passt in hoher Qualität in 20 KB, und zwar in einer Größe, die weit über der Darstellung im Formular liegt. Wirkt Ihre verschwommen oder fleckig, liegt das fast immer am Ausgangsfoto, nicht an der Kompression – siehe nächster Abschnitt.",
      ],
    },
    {
      heading: "Eine saubere Unterschrift unter 20 KB",
      id: "clean-signature",
      body: [
        "Unterschreiben Sie mit schwarzer oder dunkelblauer Tinte auf glattem weißem Papier und fotografieren Sie bei Tageslicht, ohne Ihren eigenen Schatten und ohne Blitz auf dem Blatt. Schatten und graues Papier sind hier der Feind: Ein JPG verbraucht sonst den Großteil seiner 20 KB für sanfte Hintergrundverläufe statt für Ihre Striche.",
        "Schneiden Sie die Unterschrift vor dem Komprimieren eng zu – mit „Bild zuschneiden“ dauert das wenige Sekunden –, damit die Datei keine Bytes für leeres Papier ausgibt. Eine eng zugeschnittene Unterschrift mit etwa 400 × 150 Pixeln bleibt deutlich unter 20 KB gestochen scharf; ein 4000-Pixel-Foto eines ganzen Blatts bringt keinen Vorteil.",
      ],
    },
    {
      heading: "Was in 20 Kilobyte passt",
      id: "what-fits",
      body: [
        "Für eine Unterschrift auf weißem Grund sind 20 KB großzügig. Für ein Gesichtsfoto ist es knapp: Rechnen Sie mit etwa 300 × 400 Pixeln in guter Qualität, abhängig davon, wie detailreich der Hintergrund ist. Ein schlichter, heller Hintergrund hinter dem Gesicht gibt dem Encoder weit weniger zu speichern als ein unruhiges Zimmer oder eine gemusterte Tapete.",
        "Verlangt ein Formular ein 20-KB-Foto und nennt zusätzlich genaue Maße, bringen Sie es zuerst mit „Bildgröße ändern“ auf diese Maße und komprimieren dann hier. In dieser Reihenfolge muss das Tool nur noch die Qualität senken und keine Größe für Sie wählen.",
      ],
    },
    {
      heading: "Wenn das Formular „zwischen 10 KB und 20 KB“ verlangt",
      id: "range",
      body: [
        "Manche Formulare setzen neben dem Maximum auch ein Minimum, damit ein fast leeres Bild abgelehnt wird. Diese Seite zielt knapp unter 20 KB, und das Ergebnis landet meist zwischen 15 KB und 20 KB – also innerhalb eines Bereichs von 10–20 KB.",
        "Sehr kleine oder sehr schlichte Bilder können selbst in höchster Qualität unter dem Minimum bleiben, weil schlicht nicht genug Detail vorhanden ist, um 10 KB zu füllen. Scannen oder fotografieren Sie die Unterschrift dann größer oder wählen Sie einen etwas weiteren Ausschnitt und komprimieren Sie erneut von diesem Original aus.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 20 KB",
  steps: [
    { title: "Foto oder Unterschrift hinzufügen", description: "Wählen Sie Ihr JPG, PNG oder WebP aus oder ziehen Sie es hierher – eine Unterschrift vorher eng zuschneiden." },
    { title: "Unter 20 KB komprimieren", description: "Das Limit von 20 KB ist bereits eingestellt; ändern Sie es, wenn Ihr Formular etwas mehr oder weniger erlaubt." },
    { title: "Herunterladen und hochladen", description: "Speichern Sie das JPG und hängen Sie es an Ihr Formular – es liegt garantiert unter 20 KB." },
  ],

  features: [
    { icon: "draw", title: "Gemacht für Unterschriften", description: "Klare dunkle Striche auf Weiß lassen sich hervorragend komprimieren – eng zugeschnitten bleibt alles weit unter 20 KB scharf." },
    { icon: "verified_user", title: "Immer unter 20 KB", description: "Die Datei bleibt unter 20.000 Bytes und passt damit bei Formularen, die ein KB als 1.000 oder als 1.024 Bytes zählen." },
    { icon: "lock", title: "Ihre Unterschrift bleibt privat", description: "Alles läuft in Ihrem Browser. Eine eingescannte Unterschrift ist das Letzte, was Sie auf einen fremden Server laden sollten." },
  ],

  faqs: [
    { q: "Wie verkleinere ich eine Unterschrift auf 20 KB?", a: "Schneiden Sie die Unterschrift eng zu, fügen Sie sie hier hinzu und klicken Sie auf „Komprimieren“ – das Limit von 20 KB ist bereits eingestellt. Dunkle Tinte auf weißem Papier, bei Tageslicht fotografiert, ergibt das schärfste Ergebnis." },
    { q: "Welche Pixelgröße sollte eine 20-KB-Unterschrift haben?", a: "Die meisten Formulare verlangen etwa 140 × 60 Pixel, und eine Unterschrift in dieser Größe hat nur wenige Kilobyte. Ist keine Größe angegeben, bleibt ein Ausschnitt von rund 400 × 150 Pixeln scharf und trotzdem deutlich unter 20 KB." },
    { q: "Mein Formular verlangt ein Foto unter 20 KB – ist das Gesicht dann noch deutlich?", a: "Ja, in der Größe, in der das Formular es anzeigt. Rechnen Sie mit etwa 300 × 400 Pixeln in guter Qualität; ein schlichter, heller Hintergrund lässt mehr von den 20 KB für das Gesicht übrig." },
    { q: "Das Formular verlangt 10 KB bis 20 KB. Funktioniert das?", a: "Meist landet das Ergebnis zwischen 15 KB und 20 KB. Kommt ein sehr kleines oder schlichtes Bild unter 10 KB heraus, fotografieren oder scannen Sie es größer und komprimieren erneut." },
    { q: "Warum sieht meine komprimierte Unterschrift grau oder fleckig aus?", a: "Der Hintergrund des Originals war grau oder verschattet, und das JPG verbraucht sein Budget für diese Schattierung. Fotografieren Sie erneut auf weißem Papier bei gleichmäßigem Licht oder erhöhen Sie den Kontrast, dann werden die Striche sauber." },
    { q: "Kann ich Foto und Unterschrift zusammen komprimieren?", a: "Ja. Fügen Sie beide Dateien hinzu; jede wird separat unter 20 KB gebracht, und Sie können sie als ZIP herunterladen. Darf das Foto größer sein (oft 50 KB), komprimieren Sie es stattdessen auf der 50-KB-Seite." },
    { q: "Sind 20 KB dasselbe wie 0,02 MB?", a: "Ja, 20 KB sind in den dezimalen Einheiten, die Formulare verwenden, 0,02 MB. Das Tool hält die Datei unter 20.000 Bytes, was auch Formulare erfüllt, die 1.024 Bytes pro Kilobyte zählen." },
  ],

  security:
    "Unterschriften und Ausweisfotos bleiben auf Ihrem Gerät. Die Kompression läuft in Ihrem Browser – kein Upload, keine Kopie auf einem Server und nichts, was hinterher gelöscht werden müsste. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
