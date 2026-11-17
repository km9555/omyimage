import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-2mb-verkleinern (variant of compress-image,
 * 2 MB). Target query: „Bild auf 2 MB verkleinern“. Angle: warum 2 MB so oft
 * die Grenze ist (PHP-Standardlimit), volle Auflösung, und was tun, wenn die
 * Seite die Datei trotzdem ablehnt.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-2mb",
  locale: "de",
  name: "Bild auf 2 MB verkleinern",
  tagline:
    "Verkleinern Sie große Handy- und Kamerafotos auf unter 2 MB — meist in voller Auflösung — für Uploads auf Webseiten, Formulare, Foren und E-Mail. Schnell, kostenlos und privat in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 2 MB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 2 MB verkleinern: Große Fotos unter 2 MB, meist in voller Auflösung — kostenlos, ohne Anmeldung, für Upload-Formulare, Foren und E-Mail-Anhänge.",

  intro:
    "Aktuelle Smartphones machen Fotos mit 3 bis 12 MB, und viele Webseiten hören immer noch bei 2 MB pro Datei auf. Diese Seite komprimiert Ihre Fotos auf knapp unter diese Grenze und hält sie dabei so nah wie möglich am Original: In den meisten Fällen bleibt die volle Auflösung erhalten, entfernt wird nur der unsichtbare Überschuss. Fügen Sie ein Foto oder einen ganzen Stapel hinzu; jedes kommt als JPG unter 2 MB zurück.",

  sections: [
    {
      heading: "Warum so viele Seiten bei 2 MB aufhören",
      id: "why-2mb",
      body: [
        "PHP, die Sprache hinter einem großen Teil aller Webseiten, hat ein voreingestelltes Upload-Limit von 2 MB, und viele Betreiber ändern es nie. Deshalb taucht dieselbe Zahl bei Kontaktformularen, Jobportalen, Schulplattformen, Foren und Webseiten kleiner Firmen auf — das Limit stammt oft aus den Servereinstellungen, nicht aus einer Überlegung, was ein Foto braucht.",
        "Die Folge ist dieselbe: Eine Datei mit 2,1 MB wird abgelehnt, oft mit einer unklaren Fehlermeldung. Wenn Sie knapp unter 2 MB komprimieren, ist das Problem gelöst, ohne dass das Foto beim Ansehen kleiner wird.",
      ],
    },
    {
      heading: "In den meisten Fällen volle Auflösung",
      id: "full-res",
      body: [
        "Ein JPG mit 12 Megapixeln in guter Qualität belegt etwa 2 bis 4 MB. Um unter 2 MB zu kommen, senkt das Tool zuerst die JPG-Qualität ein wenig — eine Änderung, die Ihnen bei normaler Betrachtungsgröße nicht auffällt — und behält jedes Pixel. Nur sehr große oder sehr detailreiche Fotos, etwa Aufnahmen mit 48 oder 200 Megapixeln, werden zusätzlich verkleinert.",
        "Ist ein Foto bereits ein JPG unter 2 MB, bekommen Sie es unverändert zurück.",
      ],
    },
    {
      heading: "Große Kamerafotos",
      id: "camera",
      body: [
        "Fotos direkt aus einer Kamera oder aus dem Hochauflösungsmodus eines Smartphones können 15 bis 30 MB groß sein. Hat eines mehr Pixel, als Ihr Browser auf einmal fassen kann — Handy-Browser haben die niedrigsten Grenzen —, wird es zuerst in reduzierter Größe geöffnet und dann auf unter 2 MB komprimiert. So oder so ist das Ergebnis noch mehrere tausend Pixel breit, weit mehr, als eine Webseite anzeigt.",
        "PNG-Exporte aus Bildbearbeitungs-Apps verhalten sich genauso: Ein PNG-Foto mit 20 MB wird zu einem JPG unter 2 MB, ohne sichtbare Veränderung.",
      ],
    },
    {
      heading: "Wenn eine Seite die Datei trotzdem ablehnt",
      id: "rejected",
      body: [
        "Manche Seiten rechnen 2 MB als 2.000.000 Byte, andere als 2.097.152; das Tool bleibt unter 2.000.000, also akzeptieren beide. Scheitert der Upload trotzdem, prüfen Sie die anderen Vorgaben: die erlaubten Formate (manche nehmen nur JPG), eine maximale Breite oder Höhe oder ein Limit für die Gesamtgröße aller Dateien statt für jede einzelne.",
      ],
    },
    {
      heading: "Eignet sich ein 2-MB-Foto noch zum Drucken?",
      id: "print",
      body: [
        "Ja, für Alltagsabzüge. Ein 12-Megapixel-Foto, das unter 2 MB seine volle Auflösung behält, hat etwa 4000 × 3000 Pixel — genug für einen scharfen Abzug in 10 × 15 cm und für A4 in Fotolabor-Qualität. Die leicht gesenkte JPG-Qualität ist auf Papier bei normalem Betrachtungsabstand nicht zu sehen.",
        "Für große Formate oder professionellen Druck bewahren Sie die Originaldatei auf und schicken Sie diese; Komprimierung ist zum Hochladen und Teilen da, nicht zum Archivieren Ihrer Fotos.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Foto auf 2 MB",
  steps: [
    { title: "Fotos hinzufügen", description: "Wählen Sie große Fotos aus oder ziehen Sie sie hierher — JPG, PNG oder WEBP, eines oder viele." },
    { title: "Auf unter 2 MB komprimieren", description: "Das Limit von 2 MB ist bereits eingestellt; die Qualität wird nur so weit gesenkt wie nötig." },
    { title: "Herunterladen und hochladen", description: "Laden Sie die Fotos einzeln oder als ZIP herunter, bereit zum Hochladen." },
  ],

  features: [
    { icon: "photo_camera", title: "Auflösung bleibt erhalten", description: "Die meisten Fotos behalten jedes Pixel; nur sehr große werden verkleinert." },
    { icon: "upload_file", title: "Besteht Upload-Limits", description: "Jede Datei landet unter 2.000.000 Byte — akzeptiert, egal wie eine Seite Megabyte zählt." },
    { icon: "lock", title: "Privat", description: "Fotos werden in Ihrem Browser komprimiert und nie an einen Server geschickt." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 2 MB?", a: "Fügen Sie es hier hinzu und klicken Sie auf Komprimieren — das Limit von 2 MB ist bereits eingestellt. Sie erhalten ein JPG unter 2 MB, meist in der Originalauflösung." },
    { q: "Warum begrenzen Webseiten Uploads auf 2 MB?", a: "Oft, weil 2 MB das Standard-Upload-Limit von PHP ist und viele Seiten es so lassen. Es ist eine Servereinstellung, kein Urteil über Ihr Foto." },
    { q: "Verliert mein Foto an Auflösung?", a: "Meist nicht. Das Tool senkt zuerst leicht die JPG-Qualität, bevor es die Pixelmaße antastet; nur sehr große Fotos werden verkleinert." },
    { q: "Kann ich ein 20-MB-Foto auf 2 MB verkleinern?", a: "Ja. Große Fotos werden in Ihrem Browser verarbeitet und kommen unter 2 MB zurück, immer noch mehrere tausend Pixel breit." },
    { q: "Sind 2 MB dasselbe wie 2000 KB oder 2048 KB?", a: "Beides ist üblich. Das Tool hält die Datei unter 2.000.000 Byte und damit in jedem Fall unter dem Limit." },
    { q: "Was passiert, wenn mein Foto schon unter 2 MB ist?", a: "Ist es ein JPG unter 2 MB, bekommen Sie das Original unverändert zurück." },
    { q: "Kann ich mehrere Fotos für ein Upload-Formular komprimieren?", a: "Ja. Fügen Sie alle hinzu; jedes kommt unter 2 MB zurück. Begrenzt das Formular die Summe aller Dateien, wählen Sie stattdessen ein niedrigeres Limit pro Foto." },
    { q: "Kann ich ein auf 2 MB komprimiertes Foto drucken?", a: "Ja. Die meisten Fotos behalten ihre volle Auflösung, und das reicht für Abzüge in 10 × 15 cm und A4. Für Poster oder professionelle Arbeiten drucken Sie vom Original." },
  ],

  security:
    "Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei üblichen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, geht an unseren Server und wird dort nach etwa einer Stunde gelöscht.",
};

export default content;
