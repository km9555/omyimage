import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/dpi-aendern (dpi-converter). Target query: „DPI ändern“,
 * secondary „Bild DPI ändern“. The `ui` block is shared with dpi-checker,
 * whose module reuses it.
 */
const content: ToolPageContent = {
  toolId: "dpi-converter",
  locale: "de",
  name: "DPI ändern",
  tagline:
    "Ändern Sie die DPI von JPG- und PNG-Bildern auf 300, 200, 72 oder jeden anderen Wert — nur die DPI-Angabe ändert sich, das Bild bleibt exakt gleich. Im Stapel, kostenlos, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "DPI ändern – Bild auf 300 dpi setzen, kostenlos | oMyImage",
  metaDescription:
    "Bild DPI ändern, kostenlos und ohne Anmeldung: JPG und PNG auf 300 dpi oder jeden Wert setzen, ohne Qualitätsverlust. Druckgröße in cm sofort sehen.",

  intro:
    "Druckereien, Verlage und manche Antragsformulare verlangen Bilder „mit 300 dpi“, und ein Foto direkt vom Smartphone oder ein Screenshot gibt meist 72 oder 96 an — oder gar nichts. Mit „DPI ändern“ von oMyImage schreiben Sie genau diesen einen Wert in der Datei neu. Fügen Sie Ihre JPG- oder PNG-Bilder hinzu, wählen Sie den DPI-Wert und laden Sie Kopien herunter, deren Pixel, Qualität und Farben Byte für Byte dem Original entsprechen — jetzt mit der Auflösung, die Sie brauchen.",

  sections: [
    {
      heading: "Was DPI tatsächlich ändert",
      id: "what",
      body: [
        "DPI — dots per inch, bei einem digitalen Bild genau genommen PPI — ist eine Zahl im Dateikopf. Sie beschreibt nicht das Bild selbst, sondern sagt einem Drucker oder Layoutprogramm, wie viele Pixel des Bildes auf jeden Zoll Papier kommen. Bildschirme ignorieren sie vollständig; deshalb sieht dasselbe Foto auf einer Webseite identisch aus, ob darin 72 oder 300 steht.",
        "Weil DPI nur eine Angabe ist, genügt eine winzige Änderung im Dateikopf: die JFIF-Dichte in einem JPG (und die EXIF-Auflösung, falls vorhanden) oder der pHYs-Block in einem PNG. Nichts wird neu komprimiert — es gibt also keinen Qualitätsverlust, und die Dateigröße bleibt bis auf wenige Byte gleich.",
      ],
    },
    {
      heading: "Wie sich die Druckgröße aus der DPI ergibt",
      id: "print-size",
      body: [
        "Die Druckgröße ist einfach Pixel geteilt durch DPI. Ein Foto mit 1200 × 1800 Pixeln und 300 dpi druckt in 4 × 6 Zoll (10,2 × 15,2 cm). Mit 72 dpi verlangen dieselben Pixel einen Druck von 16,7 × 25 Zoll. Das Tool zeigt bei der Auswahl eines Werts an, in welcher Größe das erste Bild gedruckt wird, sodass Sie die Wirkung vor dem Herunterladen sehen.",
        "Deshalb ist das Ändern der DPI in Layoutprogrammen und Textverarbeitungen nützlich: Ein Bild mit 300 dpi landet in der gewünschten physischen Größe im Dokument, statt riesig zu erscheinen.",
      ],
    },
    {
      heading: "Wann Sie 300 dpi brauchen",
      id: "when",
      body: [
        "300 dpi sind der Standard für Fotoabzüge, Bücher, Zeitschriften und alles, was man nah vor Augen hält. 150 bis 200 dpi reichen für Poster und große Drucke, die aus der Entfernung betrachtet werden, und manche Antragsformulare verlangen genau 200 oder 300, weil ihr System den Wert prüft. 72 und 96 dpi sind alte Bildschirmkonventionen und spielen nur eine Rolle, wenn eine Vorlage sie erwartet.",
        "Lehnt ein Druckdienst eine Datei wegen zu niedriger DPI ab, prüfen Sie auch die Pixelgröße: Meist meint der Dienst, dass das Bild in der bestellten Größe zu groß oder zu weich gedruckt würde — und das lässt sich mit einer neuen Angabe allein nicht beheben.",
      ],
    },
    {
      heading: "DPI ändern heißt nicht Pixel hinzufügen",
      id: "resample",
      body: [
        "300 dpi für ein kleines Bild einzustellen, macht es nicht schärfer, sondern lässt es kleiner drucken. Ein Foto mit 600 × 400 Pixeln druckt bei 300 dpi nur in 2 × 1,3 Zoll (etwa 5,1 × 3,4 cm). Um bei gleicher Qualität größer zu drucken, brauchen Sie mehr Pixel aus der Quelle — ein höher aufgelöstes Original oder einen größeren Export —, nicht eine größere Zahl im Dateikopf.",
        "Brauchen Sie eine exakte physische Größe, nutzen Sie „Bildgröße in cm ändern“: Das Tool berechnet die Pixel für ein Maß in Zentimetern, Millimetern oder Zoll bei Ihrer DPI und speichert die DPI gleichzeitig in der Datei.",
      ],
    },
    {
      heading: "Welche Dateien DPI speichern können",
      id: "formats",
      body: [
        "JPG und PNG haben beide einen festen Platz für die DPI, und diese Dateien werden direkt geändert. WEBP-, GIF- und BMP-Dateien werden zuerst verlustfrei in PNG umgewandelt, sodass jedes Pixel erhalten bleibt — denn PNG kann den Wert speichern und wird überall akzeptiert, wo DPI eine Rolle spielt. Der heruntergeladene Dateiname endet auf den neuen Wert, zum Beispiel foto_300dpi.jpg.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die DPI eines Bildes",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG- oder PNG-Bilder aus; WEBP, GIF und BMP werden ebenfalls angenommen." },
    { title: "DPI wählen", description: "Wählen Sie 300, 200, 150, 96 oder 72 oder tippen Sie einen beliebigen Wert ein, und prüfen Sie die Druckgröße." },
    { title: "Herunterladen", description: "Ein einzelnes Bild wird direkt heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Kein Qualitätsverlust", description: "Nur der DPI-Wert im Dateikopf ändert sich; die Pixel bleiben unangetastet." },
    { icon: "burst_mode", title: "Stapelverarbeitung", description: "Setzen Sie die DPI eines ganzen Ordners voller Bilder auf einmal." },
    { icon: "lock", title: "In Ihrem Browser", description: "Ihre Bilder werden auf Ihrem Gerät geändert und nie hochgeladen." },
  ],

  faqs: [
    { q: "Wie ändere ich ein Bild auf 300 dpi?", a: "Fügen Sie das Bild hinzu, wählen Sie 300 und klicken Sie auf „DPI ändern“. Die heruntergeladene Kopie trägt 300 dpi bei exakt denselben Pixeln." },
    { q: "Verringert das Ändern der DPI die Qualität?", a: "Nein. Es ändert sich nur eine Zahl im Dateikopf. Nichts wird neu komprimiert, Qualität und Dateigröße bleiben also gleich." },
    { q: "Wird mein Foto mit 300 dpi schärfer?", a: "Nein. Die DPI bestimmt, wie groß das Bild gedruckt wird, nicht wie viele Details es hat. Ein höherer DPI-Wert bei denselben Pixeln ergibt einen kleineren, nicht schärferen Druck." },
    { q: "Welche DPI sollte ich zum Drucken verwenden?", a: "300 dpi für Fotos und Dokumente, die aus der Nähe betrachtet werden; 150 bis 200 für Poster und große Drucke, die man aus der Entfernung sieht." },
    { q: "Warum zeigt mein Bild 72 oder 96 dpi?", a: "Smartphones, Screenshots und viele Apps speichern 72 oder 96 oder gar keinen Wert, und Programme nehmen dann einen dieser Werte an. Das spielt nur beim Drucken eine Rolle." },
    { q: "Spielt DPI für Webseiten oder soziale Medien eine Rolle?", a: "Nein. Bildschirme zeigen Pixel an und ignorieren den DPI-Wert vollständig." },
    { q: "Kann ich die DPI eines WEBP oder GIF ändern?", a: "Ja. Sie werden ohne Pixelverlust in PNG umgewandelt, und das PNG erhält die DPI, die Sie wählen." },
    { q: "Wie prüfe ich die DPI nach dem Umwandeln?", a: "Nutzen Sie „DPI prüfen“ oder öffnen Sie die Dateieigenschaften: Unter Windows zeigt der Reiter „Details“ die horizontale und vertikale Auflösung." },
    { q: "Kann ich die DPI vieler Bilder auf einmal ändern?", a: "Ja. Fügen Sie alle hinzu; jedes erhält dieselbe DPI, und alle werden zusammen als ZIP heruntergeladen." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Die DPI wird vollständig in Ihrem Browser geändert." },
    { q: "Wie viele Pixel brauche ich für einen Druck in 10 × 15 cm mit 300 dpi?", a: "Etwa 1181 × 1772 Pixel: Teilen Sie die Zentimeter durch 2,54 und multiplizieren Sie mit 300. Hat Ihr Bild weniger Pixel, ändert ein neuer DPI-Wert daran nichts." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser geändert — nur das DPI-Feld jeder Datei wird neu geschrieben. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // DpiTool.tsx — shared with dpi-checker, whose module reuses this block.
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "oder JPG-, PNG-, WEBP-, GIF- oder BMP-Bilder hierher ziehen",
    "Change DPI": "DPI ändern",
    "Change DPI of {n} images": "DPI von {n} Bildern ändern",
    "Changed the DPI of 1 image.": "DPI von 1 Bild geändert.",
    "Changed the DPI of {n} images.": "DPI von {n} Bildern geändert.",
    "Clear files": "Dateien entfernen",
    "Remove": "Entfernen",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
    "DPI": "DPI", // i18n-same
    "DPI check": "DPI-Prüfung",
    "DPI settings": "DPI-Einstellungen",
    "DPI only tells a printer how large to print the pixels. It never changes the pixels themselves.":
      "Die DPI sagt einem Drucker nur, wie groß die Pixel gedruckt werden. Die Pixel selbst ändert sie nie.",
    "For a sharp print, divide the pixels by 300: that is the largest size in inches that prints at photo quality.":
      "Für einen scharfen Druck teilen Sie die Pixel durch 300: Das ist die größte Größe in Zoll, die in Fotoqualität druckt.",
    "Enter a DPI of at least 1.": "Geben Sie eine DPI von mindestens 1 ein.",
    "First image prints at {size}": "Das erste Bild druckt in {size}",
    "Most programs then assume 72 or 96 DPI.": "Die meisten Programme nehmen dann 72 oder 96 dpi an.",
    "New DPI": "Neue DPI",
    "No DPI": "Keine DPI",
    "Not set": "Nicht gesetzt",
    "Only the DPI label changes — the pixels and quality stay exactly the same.":
      "Nur die DPI-Angabe ändert sich — Pixel und Qualität bleiben exakt gleich.",
    "Print size": "Druckgröße",
    "Saving…": "Wird gespeichert…",
    "Sharp at 300 DPI": "Scharf bei 300 dpi",
    "This format can't be read for DPI": "Bei diesem Format lässt sich die DPI nicht auslesen",
    "WEBP, GIF and BMP files are saved as PNG, because only JPG and PNG can store a DPI.":
      "WEBP-, GIF- und BMP-Dateien werden als PNG gespeichert, weil nur JPG und PNG eine DPI speichern können.",
    "Where": "Wo",
    "Your images are changed in your browser and never uploaded.": "Ihre Bilder werden in Ihrem Browser geändert und nie hochgeladen.",
    "Your images are read in your browser and never uploaded.": "Ihre Bilder werden in Ihrem Browser gelesen und nie hochgeladen.",
    "{dpi} DPI": "{dpi} dpi",
    "{x} × {y} DPI": "{x} × {y} dpi",
    "{w} × {h} cm ({wi} × {hi} in)": "{w} × {h} cm ({wi} × {hi} Zoll)",
    // SOURCE_LABEL (module scope)
    "Stored in the JFIF header": "Im JFIF-Header gespeichert",
    "Stored in the EXIF data": "In den EXIF-Daten gespeichert",
    "Stored in the PNG pHYs chunk": "Im pHYs-Block des PNG gespeichert",
    "Stored in the BMP header": "Im BMP-Header gespeichert",
    "Only an aspect ratio is stored, not a DPI": "Nur ein Seitenverhältnis ist gespeichert, keine DPI",
    "No DPI stored": "Keine DPI gespeichert",
  },
};

export default content;
