import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/in-png-umwandeln.
 *
 * Head term "In PNG umwandeln" (DE; volume not reported separately) —
 * German converter queries take the "X in Y" form. "Bild in PNG umwandeln" is
 * the secondary, used in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-png",
  locale: "de",
  name: "In PNG umwandeln",
  tagline:
    "Wandeln Sie JPG-, WEBP-, GIF- und BMP-Bilder online in PNG um – verlustfrei, mit erhaltener Transparenz und im Stapel. Kostenlos und privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "In PNG umwandeln – verlustfrei & kostenlos | oMyImage",
  metaDescription:
    "Bilder kostenlos in PNG umwandeln: JPG, WEBP, GIF und BMP verlustfrei in PNG, Transparenz bleibt erhalten. Bild in PNG umwandeln im Stapel, ohne Anmeldung.",

  intro:
    "PNG ist das Format, in das Sie umwandeln, wenn ein Bild genau so bleiben soll, wie es ist: keine weitere Kompression, keine neuen Artefakte, Transparenz unverändert. Mit oMyImage können Sie jedes Bild in PNG umwandeln – JPG-, WEBP-, GIF- und BMP-Dateien werden in Ihrem Browser zu PNGs, ein einzelnes Bild oder ein ganzer Ordner auf einmal, zusammen als ZIP heruntergeladen. Weil PNG verlustfrei ist, kommt Pixel für Pixel heraus, was hineingegangen ist, und jede spätere Bearbeitung und jedes erneute Speichern ändert daran nichts.",

  sections: [
    {
      heading: "Wann PNG das richtige Ziel ist",
      id: "why",
      body: [
        "Die meisten Umwandlungen in PNG fallen in vier Gruppen. Die erste ist die Bearbeitung: Ein verlustbehaftetes JPG oder WEBP verliert bei jedem Speichern etwas mehr Detail, also wandelt man einmal in PNG um und erledigt Zuschneiden, Retuschieren und Beschriften an einer Datei, die nicht schlechter werden kann. Die zweite sind scharfe Inhalte – Screenshots, Diagramme, Tabellen, gescannte Formulare und alles mit kleiner Schrift –, bei denen PNG jede Kante sauber hält, während JPG um jeden Buchstaben einen grauen Schleier legen würde.",
        "Die dritte Gruppe ist Transparenz. Logos, Sticker, Icons und freigestellte Produkte müssen auf jedem Hintergrund stehen können, und PNG ist das überall unterstützte Format, das eine durchsichtige Ebene tragen kann. Die vierte ist schlichte Kompatibilität: Designprogramme, Dokumentvorlagen, Game-Engines und viele Upload-Formulare verlangen ausdrücklich PNG, und ein von einer Webseite gespeichertes WEBP ist genau die Datei, die sie ablehnen.",
      ],
    },
    {
      heading: "Warum das PNG größer ist als das JPG",
      id: "bigger",
      body: [
        "Aus einem 300 KB großen Handyfoto wird häufig ein PNG mit 2–4 MB, und das ist zu erwarten, kein Fehler. JPG und verlustbehaftetes WEBP erreichen ihre kleinen Größen, indem sie Details verwerfen, die das Auge kaum vermisst; PNG darf nichts verwerfen und muss deshalb jedes Pixel speichern, einschließlich des feinen Rauschens eines Fotos.",
        "Die Faustregel ist einfach. Bei Fotos ist PNG die sichere Arbeitskopie und JPG oder WEBP das Format zum Teilen. Bei Screenshots, Grafiken und allem mit flächigen Farben ist PNG oft nicht nur das schärfste, sondern auch das kleinste der drei Formate, weil große Flächen gleicher Farbe sich ohne jeden Verlust extrem gut komprimieren lassen.",
      ],
    },
    {
      heading: "Umwandeln macht Kompression nicht rückgängig",
      id: "not-restore",
      body: [
        "Wenn Sie ein JPG in PNG umwandeln, bleibt das Bild so erhalten, wie es jetzt ist; was das JPG bereits verworfen hat, kommt nicht zurück. Blockiger Himmel, verwischte Feinheiten und die leichten Ringe um Schrift werden originalgetreu ins PNG übernommen. Was Sie gewinnen: Ab jetzt wird nichts davon schlimmer.",
        "Wenn Sie das Original haben – eine Kamera-RAW-Datei, eine Designdatei, den Screenshot wie aufgenommen –, exportieren Sie das PNG lieber daraus. Ist das JPG alles, was Sie haben, und sichtbar beschädigt, können die Tools zum Hochskalieren und Schärfen das Schlimmste abmildern – eine Formatumwandlung kann das nicht.",
      ],
    },
    {
      heading: "Transparenz rein und raus",
      id: "transparency",
      body: [
        "WEBP, GIF und manche BMP-Dateien können transparente Bereiche enthalten, und diese werden exakt ins PNG übernommen, einschließlich der weichen, teilweise durchsichtigen Pixel an kantengeglätteten Rändern. Nichts wird auf eine Ebene reduziert, und es gibt keine Hintergrundfarbe zu wählen.",
        "Ein JPG dagegen hat keine Transparenz, die übernommen werden könnte: Sein weißer Hintergrund besteht aus echten weißen Pixeln. Bei der Umwandlung in PNG bleibt dieses Weiß erhalten. Um den Hintergrund durchsichtig zu machen, schicken Sie das Bild zuerst durch das Tool Hintergrund entfernen – es liefert direkt ein transparentes PNG.",
      ],
    },
    {
      heading: "GIF- und BMP-Quellen",
      id: "gif-bmp",
      body: [
        "Ein animiertes GIF wird zu seinem ersten Frame, weil ein PNG nur ein einzelnes Standbild enthält. Wenn Sie einen bestimmten Frame brauchen, zerlegen Sie das GIF zuerst in Einzelbilder und behalten Sie den gewünschten. Ein unbewegtes GIF wird ohne jede sichtbare Änderung umgewandelt, und das PNG ist für spätere Bearbeitungen frei von der GIF-Grenze von 256 Farben.",
        "BMP ist der umgekehrte Fall: Es speichert Pixel völlig unkomprimiert, sodass dasselbe Bild als PNG meist um ein Mehrfaches kleiner ist – mit exakt denselben Pixeln. Alte BMP-Scans und Screenshots in PNG umzuwandeln gehört zu den wenigen Umwandlungen, die ganz ohne Nachteil Speicherplatz sparen.",
      ],
    },
    {
      heading: "Kameradaten und Farbe",
      id: "metadata",
      body: [
        "Standardmäßig werden EXIF- und XMP-Daten der Quelle – Aufnahmedatum, Kameramodell und, falls vorhanden, der GPS-Standort – ins PNG übernommen. Setzen Sie das Häkchen bei „Metadaten entfernen“, um all das wegzulassen; das lohnt sich, bevor Sie ein Foto öffentlich teilen. Das Bild wird in sRGB umgewandelt, dem Farbraum, von dem jeder Bildschirm und jeder Browser ausgeht, sodass die Farben im PNG auf einem normalen Display genauso aussehen wie im Original.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild in PNG um",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere JPG-, WEBP-, GIF- oder BMP-Bilder aus oder ziehen Sie sie in das Feld." },
    { title: "Optionen wählen", description: "Behalten oder entfernen Sie die Kamera-Metadaten und lassen Sie die automatische Drehung für Handyfotos eingeschaltet." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf Umwandeln – ein PNG wird direkt heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Verlustfreie Ausgabe", description: "Jedes Pixel bleibt exakt erhalten, sodass weitere Bearbeitungen und Speichervorgänge das Bild nie verschlechtern." },
    { icon: "burst_mode", title: "Stapelumwandlung", description: "Wandeln Sie einen ganzen Ordner mit JPG-, WEBP-, GIF- oder BMP-Dateien auf einmal um und erhalten Sie eine ZIP-Datei zurück." },
    { icon: "lock", title: "Standardmäßig privat", description: "Bilder werden in Ihrem Browser umgewandelt; nur sehr große Dateien verarbeitet unser Server." },
  ],

  faqs: [
    { q: "Welche Formate kann ich in PNG umwandeln?", a: "JPG, WEBP, GIF und BMP. Bei GIFs wird der erste Frame umgewandelt. HEIC und AVIF haben eigene Konverter, weil sie anders verarbeitet werden müssen." },
    { q: "Verbessert die Umwandlung in PNG die Qualität?", a: "Nein. Das Bild bleibt genau so, wie es jetzt ist. PNG verhindert weitere Verluste, kann aber keine Details zurückholen, die ein JPG bereits verworfen hat." },
    { q: "Warum ist mein PNG so viel größer als das JPG?", a: "PNG ist verlustfrei und speichert deshalb jedes Pixel eines Fotos, Rauschen inklusive. Eine fünf- bis zehnfache Größe ist bei einem Foto normal. Screenshots und Grafiken bleiben klein." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente und halbtransparente Bereiche aus WEBP-, GIF- oder BMP-Dateien werden unverändert ins PNG übernommen. Ein JPG hat keine Transparenz, sein Hintergrund bleibt also, wie er ist." },
    { q: "Wie mache ich den Hintergrund transparent?", a: "Bei der Umwandlung von JPG in PNG bleibt der Hintergrund erhalten. Nutzen Sie zuerst das Tool Hintergrund entfernen; es liefert ein PNG mit transparentem Hintergrund." },
    { q: "Kann ich viele Bilder auf einmal in PNG umwandeln?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten. Ein einzelnes Bild wird als PNG heruntergeladen, mehrere zusammen in einer ZIP-Datei." },
    { q: "Bleiben meine EXIF-Daten erhalten?", a: "Standardmäßig ja – Aufnahmedatum, Kamera und GPS-Standort werden übernommen, sofern die Quelle sie enthält. Setzen Sie das Häkchen bei „Metadaten entfernen“, um alles zu löschen." },
    { q: "Sollte ich für Fotos PNG oder JPG verwenden?", a: "Verwenden Sie PNG als Arbeitskopie, solange Sie bearbeiten, und JPG oder WEBP zum Teilen oder Hochladen. Für Screenshots, Text und Grafiken ist PNG die bessere Wahl." },
    { q: "Werden meine Bilder hochgeladen?", a: "Normalerweise nicht – die Umwandlung läuft in Ihrem Browser. Nur ein Bild, das für Ihren Browser zu groß ist, wird an unseren Server geschickt, dort umgewandelt und sofort wieder gelöscht." },
    { q: "Funktioniert das auch auf dem Handy?", a: "Ja. Das Tool läuft in mobilen Browsern auf Android und iPhone; wählen Sie Bilder aus Ihrer Galerie aus, und die PNGs landen in Ihren Downloads." },
  ],

  security:
    "Ihre Bilder werden in Ihrem Browser mit HTML-Canvas in PNG umgewandelt. Nur ein Bild, das für den Browser zu groß ist – über 100 MB oder jenseits seiner Canvas-Grenze –, wird auf unserem Server verarbeitet und direkt nach der Umwandlung gelöscht. Nichts wird gespeichert, keine Datei wird nachverfolgt.",

  ui: {
    // Drop hint from app/convert-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG, WEBP, GIF or BMP images here": "oder JPG-, WEBP-, GIF- oder BMP-Bilder hier ablegen",
  },
};

export default content;
