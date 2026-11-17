import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/png-in-jpg.
 *
 * Head term "PNG in JPG" (18.1K/mo, DE); secondaries "PNG in JPG umwandeln"
 * and "PNG zu JPG", used in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "png-to-jpg",
  locale: "de",
  name: "PNG in JPG umwandeln",
  tagline:
    "Wandeln Sie PNG-Bilder online in komprimierte JPGs um – im Stapel, mit Qualitäts- und Hintergrundeinstellung. Kostenlos, schnell und privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "PNG in JPG umwandeln – kostenlos & online | oMyImage",
  metaDescription:
    "PNG in JPG umwandeln, kostenlos und ohne Anmeldung: PNG zu JPG im Stapel, mit Qualitätsregler und Hintergrundfarbe für Transparenz. Im Browser, ohne Upload.",

  intro:
    "PNG ist ideal für Grafiken, erzeugt bei Fotos aber riesige Dateien. Mit dem PNG-in-JPG-Konverter von oMyImage wandeln Sie Ihre PNGs direkt im Browser in kompakte, hochwertige JPGs um – einzeln oder in großen Mengen. Wählen Sie die Qualität und die Hintergrundfarbe, die die Transparenz ersetzt, und laden Sie herunter. Kein Upload, keine Wartezeit, keine Anmeldung.",

  sections: [
    {
      heading: "Wann PNG in JPG der richtige Schritt ist",
      id: "why",
      body: [
        "PNG ist verlustfrei – genau das, was Sie für eine Arbeitsdatei wollen, und oft Verschwendung für eine fertige. Ein als PNG gespeichertes Foto enthält jedes Pixel vollständig, was regelmäßig mehrere Megabyte bedeutet, wo ein optisch identisches JPG nur ein paar hundert Kilobyte hätte. Wenn das Bild ein Foto ist und auf eine Webseite, in eine E-Mail oder durch ein Upload-Formular mit Größenlimit soll, ist die Umwandlung meist die größte Ersparnis, die Sie haben.",
        "Der andere häufige Anlass ist eine feste Grenze. Jobportale, Behördenformulare, Marktplatz-Angebote und Druckdienste begrenzen Uploads oft auf 1, 2 oder 5 MB, und ein Handy-Screenshot oder Kamerafoto im PNG-Format sprengt das sofort. Die Umwandlung in JPG mit 85 % Qualität bleibt typischerweise unter dem Limit, ohne sichtbare Veränderung.",
      ],
    },
    {
      heading: "Was Sie aufgeben",
      id: "tradeoffs",
      body: [
        "Zwei Dinge, und beide sind in bestimmten Fällen wichtig. Das erste ist Transparenz: JPG hat überhaupt keinen Alphakanal, deshalb muss alles Durchsichtige mit einer Vollfarbe übermalt werden. Für ein Foto ist das in Ordnung, für ein Logo, das auf einem farbigen Hintergrund stehen soll, fatal.",
        "Das zweite: JPG ist verlustbehaftet, und zwar dauerhaft. Die Umwandlung verwirft Details, und kein späterer Schritt holt sie zurück. Ein PNG, das Sie vielleicht noch bearbeiten müssen, in JPG umzuwandeln, ist eine Einbahnstraße – schneiden Sie es zu, retuschieren Sie es und speichern Sie es ein paar Mal als JPG, und der Qualitätsverlust summiert sich sichtbar. Behalten Sie das PNG als Master und betrachten Sie das JPG als Ausgabe.",
      ],
    },
    {
      heading: "Fotos ja, Grafiken meist nicht",
      id: "content",
      body: [
        "Die Kompression von JPG wurde für Bilder mit fließenden Farbübergängen entwickelt, bei denen sich die Farbe allmählich über das Bild verändert. Fotos sind genau das, deshalb funktioniert das Format bei ihnen so gut.",
        "Inhalte mit scharfen Kanten sind der umgekehrte Fall. Logos, Strichzeichnungen, Diagramme, Screenshots und alles mit Text haben kontrastreiche Grenzen, und JPG verstreut um jede davon leichte Artefakte – das typische Flimmern um Buchstaben. Schlimmer noch: Weil der Encoder diese Kanten als wichtige Details behandelt, wird die Datei oft kaum kleiner. Für solche Bilder liefern PNG-Komprimierung oder die Umwandlung in WEBP in beiden Punkten das bessere Ergebnis.",
      ],
    },
    {
      heading: "Hintergrundfarbe für transparente PNGs wählen",
      id: "background",
      body: [
        "Da die Transparenz zu irgendetwas werden muss, übernimmt dieses Tool standardmäßig automatisch die Farbe, die es an den Rändern des Bildes findet. So vermeiden Sie das auffällige weiße Rechteck um ein Motiv, das nie für Weiß gedacht war. Sie können trotzdem Weiß, Schwarz oder eine eigene Farbe wählen – praktisch, wenn das Bild auf einer dunklen Oberfläche oder einer farbigen Karte stehen soll.",
        "Eine Einschränkung: PNG-Transparenz ist oft kantengeglättet, die Randpixel sind also teilweise durchsichtig. Sie mischen sich mit der gewählten Farbe, sodass ein Bild, das für einen weißen Hintergrund vorbereitet und dann mit Schwarz gefüllt wurde, einen hellen Saum zeigen kann. Passiert das, ist es am saubersten, die Quelle vor dem richtigen Hintergrund neu zu exportieren, statt hier dagegen anzukämpfen.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie PNG in JPG um",
  steps: [
    { title: "PNGs hochladen", description: "Wählen Sie ein oder mehrere PNG-Bilder aus oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Qualität & Hintergrund festlegen", description: "Wählen Sie die JPG-Qualität und die Farbe, mit der transparente Bereiche gefüllt werden." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf Umwandeln – ein PNG wird als JPG heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "PNG → JPG im Stapel", description: "Wandeln Sie viele PNGs auf einmal in JPG um und laden Sie alle in einer ZIP-Datei herunter – ideal, um Screenshot-Ordner zu verkleinern." },
    { icon: "compress", title: "Kleinere Dateien", description: "Bei Fotos ist JPG viel kleiner als PNG. Stellen Sie den Qualitätsregler so ein, dass Sie die gewünschte Größe erreichen." },
    { icon: "lock", title: "Privat & sofort", description: "Alles wird lokal in Ihrem Browser verarbeitet – Ihre PNGs verlassen Ihr Gerät nie." },
  ],

  faqs: [
    { q: "Warum PNG in JPG umwandeln?", a: "JPG-Dateien sind bei Fotos viel kleiner und lassen sich dadurch schneller hochladen, per E-Mail versenden und im Web laden." },
    { q: "Was passiert mit transparenten Bereichen im PNG?", a: "JPG kann keine Transparenz speichern, deshalb werden transparente Pixel mit einer Hintergrundfarbe gefüllt. Standardmäßig übernehmen wir automatisch die Farbe an den Rändern des Bildes; wählen Sie stattdessen Weiß, Schwarz oder eine eigene Farbe, wenn Sie etwas anderes möchten." },
    { q: "Kann ich mehrere PNGs auf einmal umwandeln?", a: "Ja. Fügen Sie so viele PNGs hinzu, wie Sie möchten – mehrere Dateien werden zusammen als ZIP-Archiv heruntergeladen." },
    { q: "Verringert die Umwandlung die Qualität?", a: "JPG ist verlustbehaftet, aber ab 90 % Qualität ist der Unterschied meist unsichtbar, während die Datei deutlich kleiner wird." },
    { q: "Wie viel kleiner wird das JPG?", a: "Bei Fotos meist 60–90 % kleiner. Ein 4 MB großes PNG-Foto landet als JPG häufig zwischen 300 KB und 1 MB. Flächige Grafiken und Screenshots profitieren viel weniger und können gelegentlich sogar größer werden – das sind die Fälle, in denen PNG schon das richtige Format war." },
    { q: "Sollte ich Screenshots von PNG zu JPG umwandeln?", a: "Meist nicht. JPG-Kompression funktioniert schlecht bei scharfen Kanten und kleiner Schrift und erzeugt einen leichten Schleier um Buchstaben; Screenshots werden oft unschärfer und kaum kleiner. Komprimieren Sie lieber das PNG oder wandeln Sie es in WEBP um." },
    { q: "Kann ich das JPG später wieder in PNG umwandeln?", a: "Sie können das Format wechseln, aber nicht zurückholen, was verworfen wurde. Der JPG-Schritt entfernt Details dauerhaft, und die Rückumwandlung in PNG speichert nur das verschlechterte Bild verlustfrei. Behalten Sie das Original-PNG, wenn Sie es noch einmal bearbeiten müssen." },
    { q: "Warum ist mein umgewandeltes JPG größer als das PNG?", a: "Weil das Bild genau die Art ist, mit der PNG am besten umgeht – wenige verschiedene Farben, flächige Bereiche, harte Kanten. PNG komprimiert das extrem effizient, während JPG an jeder Kante Details speichern muss, die es zu sehen glaubt. Logos und Diagramme sind die üblichen Kandidaten." },
    { q: "Werden meine PNGs hochgeladen?", a: "Nein. Die Umwandlung von PNG in JPG läuft vollständig in Ihrem Browser mit HTML-Canvas. Ihre Dateien werden nicht an einen Server gesendet, nicht gespeichert und nicht nachverfolgt." },
  ],

  security:
    "Ihre Bilder bleiben privat. Die Umwandlung von PNG in JPG erfolgt vollständig in Ihrem Browser mit HTML-Canvas – nichts wird hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // Drop hint from app/png-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG images here": "oder PNG-Bilder hier ablegen",
  },
};

export default content;
