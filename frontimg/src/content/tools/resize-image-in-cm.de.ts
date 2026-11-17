import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bildgroesse-in-cm-aendern (variant of resize-image,
 * Print size mode). Target query: „Bildgröße in cm ändern“. Angle: exakte
 * Druckmaße in cm/mm bei 300 dpi, DPI wird in der Datei gespeichert.
 */
const content: ToolPageContent = {
  toolId: "resize-image-in-cm",
  locale: "de",
  name: "Bildgröße in cm ändern",
  tagline:
    "Bringen Sie ein Bild auf eine exakte Größe in Zentimetern, Millimetern oder Zoll, bei 300 dpi oder jeder anderen DPI — die DPI wird in der Datei gespeichert, damit es genau in dieser Größe druckt. Kostenlos, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bildgröße in cm ändern – exakt für den Druck | oMyImage",
  metaDescription:
    "Bildgröße in cm ändern, kostenlos und ohne Anmeldung: Bild auf exakte Zentimeter oder Millimeter bei 300 dpi bringen, DPI in der Datei gespeichert, druckfertig.",

  intro:
    "Formulare, Druckereien und Dokumentvorlagen beschreiben Bilder in Zentimetern oder Zoll — ein Foto von 3,5 × 4,5 cm, ein Abzug in 10 × 15 cm, eine Abbildung mit 8 cm Breite in einem Bericht. Ein Bild besteht aber aus Pixeln, also muss die Größe übersetzt werden. Genau das übernimmt dieses Tool: Geben Sie die Größe in cm, mm oder Zoll ein, wählen Sie die DPI, und es bringt Ihr Bild auf exakt die richtige Pixelzahl und schreibt die DPI in die Datei — so platziert jeder Drucker und jede Textverarbeitung es in der gewünschten Größe.",

  sections: [
    {
      heading: "Von Zentimetern zu Pixeln",
      id: "formula",
      body: [
        "Pixel = Größe in Zoll × DPI, und ein Zoll sind 2,54 cm. Bei 300 dpi braucht jeder Zentimeter rund 118 Pixel. Ein Foto von 3,5 × 4,5 cm wird daher zu 413 × 531 Pixeln, eine ganze A4-Seite mit 21 × 29,7 cm zu 2480 × 3508 Pixeln.",
        "Rechnen müssen Sie das nie selbst. Tippen Sie die Größe ein, und das Bedienfeld zeigt, auf welche Pixelgröße das erste Bild bei der gewählten DPI gebracht wird. Wechseln Sie jederzeit zwischen cm, mm und Zoll; die Werte werden umgerechnet, sodass die physische Größe gleich bleibt.",
      ],
    },
    {
      heading: "Gängige Druckgrößen bei 300 dpi",
      id: "common",
      body: [
        "Ein Passbild im Format 35 × 45 mm: 413 × 531 px. Ein Fotoabzug in 10 × 15 cm: 1181 × 1772 px, oder 1200 × 1800 px für einen echten 4 × 6-Zoll-Abzug. Ein Foto von 2 × 2 Zoll: 600 × 600 px. Eine A4-Seite: 2480 × 3508 px. Eine A5-Seite (14,8 × 21 cm): 1748 × 2480 px.",
        "Für Pass- und Ausweisfotos mit Vorgaben zur Gesichtsgröße übernimmt „Biometrisches Passbild“ Zuschnitt und Hintergrund für Sie; dieses Tool ist für jede andere Größe gedacht, die Sie auf Papier brauchen.",
      ],
    },
    {
      heading: "Die Proportionen beibehalten",
      id: "aspect",
      body: [
        "Ist „Seitenverhältnis beibehalten“ aktiv, geben Sie eine Seite ein, und die andere folgt der Form des Bildes — nichts wird gestaucht. Um beide Seiten exakt zu treffen — etwa 3,5 × 4,5 cm aus einem Querformat-Foto —, schneiden Sie das Bild zuerst mit dem Zuschneiden-Button auf seiner Karte in diese Form und geben dann die Größe ein. Schalten Sie das Schloss aus und tippen beide Seiten ein, wird das Bild passend gezogen, und das ist selten gewollt.",
        "Wird die Größe vom ersten Bild übernommen, zeigt sie dessen aktuelle Druckgröße bei der gewählten DPI — ein schneller Weg, um zu sehen, wie groß ein Foto unverändert drucken würde.",
      ],
    },
    {
      heading: "Welche DPI Sie wählen sollten",
      id: "dpi",
      body: [
        "300 dpi sind der Standard für Fotos und gedruckte Dokumente und hier voreingestellt. 200 dpi sind bei Antragsformularen üblich und drucken immer noch gut; 150 dpi passen zu großen Postern, die man aus der Entfernung betrachtet; 600 dpi sind für Strichzeichnungen und feine Details. Eine höhere DPI bedeutet mehr Pixel für dieselben Zentimeter und damit eine größere Datei.",
        "Hat Ihr Bild weniger Pixel, als die Größe verlangt, wird es vergrößert, und der Druck wirkt weich. Das Bedienfeld zeigt die Zielpixel; vergleichen Sie sie vor dem Ändern mit der Größe des Bildes. Für ein scharfes Ergebnis drucken Sie kleiner oder starten mit einem größeren Original.",
      ],
    },
    {
      heading: "Die DPI wird in der Datei gespeichert",
      id: "saved",
      body: [
        "Geänderte JPG- und PNG-Dateien tragen die gewählte DPI, sodass Word, Google Docs, Layoutprogramme und Druckdialoge sie sofort in der beabsichtigten physischen Größe anzeigen. WEBP hat kein DPI-Feld, das ein Browser schreiben kann; wählen Sie daher JPG oder PNG als Ausgabeformat, wenn es auf die Druckgröße ankommt.",
        "Die Dateinamen sagen, was Sie erstellt haben, zum Beispiel foto_3.5x4.5cm.jpg — so lässt sich ein Stapel mit verschiedenen Größen leicht auseinanderhalten.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die Bildgröße in cm",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG-, WEBP-, GIF- oder BMP-Bilder aus." },
    { title: "Größe und DPI eingeben", description: "Tippen Sie Breite oder Höhe in cm, mm oder Zoll ein und wählen Sie die DPI — 300 ist voreingestellt." },
    { title: "Ändern und herunterladen", description: "Laden Sie Bilder mit exakter Pixelgröße und in der Datei gespeicherter DPI herunter." },
  ],

  features: [
    { icon: "straighten", title: "cm, mm oder Zoll", description: "Geben Sie die Größe in der Einheit Ihres Formulars oder Druckers ein; die Pixel werden für Sie berechnet." },
    { icon: "high_quality", title: "DPI in der Datei gespeichert", description: "JPG- und PNG-Dateien tragen die DPI und drucken deshalb in der eingegebenen Größe." },
    { icon: "lock", title: "In Ihrem Browser", description: "Ihre Bilder werden auf Ihrem eigenen Gerät geändert." },
  ],

  faqs: [
    { q: "Wie ändere ich die Bildgröße in cm?", a: "Fügen Sie das Bild hinzu, tippen Sie Breite oder Höhe in Zentimetern ein, wählen Sie die DPI und klicken Sie auf „Größe ändern“. Das Bild erhält die exakte Pixelgröße, und die DPI wird in der Datei gespeichert." },
    { q: "Wie viele Pixel sind 1 cm?", a: "Das hängt von der DPI ab: rund 118 Pixel bei 300 dpi, 79 bei 200 dpi und 28 bei 72 dpi." },
    { q: "Wie viele Pixel sind 3,5 × 4,5 cm?", a: "413 × 531 Pixel bei 300 dpi oder 276 × 354 Pixel bei 200 dpi." },
    { q: "Kann ich die Größe in Zoll oder Millimetern angeben?", a: "Ja. Stellen Sie die Einheit auf Zoll oder mm um; die Werte werden so umgerechnet, dass die physische Größe gleich bleibt." },
    { q: "Welche DPI sollte ich verwenden?", a: "300 dpi für Fotos und Dokumente, 200 dpi für die meisten Formulare, 150 dpi für große Poster." },
    { q: "Druckt das Bild in der eingegebenen Größe?", a: "Ja, als JPG oder PNG: Die DPI ist in der Datei gespeichert, sodass Drucker und Textverarbeitungen die richtige Größe verwenden." },
    { q: "Warum ist mein Bild nach dem Ändern in cm unscharf?", a: "Es hatte weniger Pixel, als die Größe verlangt, und wurde vergrößert. Drucken Sie es kleiner, nehmen Sie eine niedrigere DPI oder starten Sie mit einem größeren Original." },
    { q: "Wie bekomme ich exakte Breite und Höhe, ohne das Bild zu verzerren?", a: "Schneiden Sie das Bild zuerst mit dem Zuschneiden-Button auf seiner Karte in die richtige Form und geben Sie dann beide Seiten ein." },
    { q: "Kann ich viele Bilder auf dieselbe Größe bringen?", a: "Ja. Fügen Sie alle hinzu; jedes wird auf dieselbe physische Größe gebracht, und alle werden zusammen als ZIP heruntergeladen." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Die Größenänderung läuft in Ihrem Browser; nur sehr große Bilder werden eventuell auf unserem Server verarbeitet und sofort gelöscht." },
    { q: "Wie viele Pixel braucht eine A4-Seite bei 300 dpi?", a: "2480 × 3508 Pixel für 21 × 29,7 cm. Für A5 (14,8 × 21 cm) sind es 1748 × 2480 Pixel." },
  ],

  security:
    "Ihre Bilder werden in Ihrem Browser in der Größe geändert, und die DPI wird dort in jede Datei geschrieben. Sehr große Bilder werden eventuell auf unserem Server verarbeitet und sofort gelöscht; nichts wird aufbewahrt.",
};

export default content;
