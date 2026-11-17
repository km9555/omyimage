import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/png-in-ico.
 *
 * Head term "PNG in ICO" (8.1K/mo, DE); secondary "Favicon erstellen" (720),
 * used in the intro, a heading and an FAQ. Windows dialogs are named as the
 * German UI shows them (Eigenschaften › Anpassen › „Anderes Symbol…“).
 */
const content: ToolPageContent = {
  toolId: "png-to-ico",
  locale: "de",
  name: "PNG in ICO umwandeln",
  tagline:
    "Wandeln Sie PNG, JPG oder SVG online in eine ICO-Datei um – ein favicon.ico mit 16, 32 und 48 px oder ein Windows-Symbol mit allen Größen bis 256 px. Kostenlos, privat, in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "PNG in ICO umwandeln – Favicon erstellen | oMyImage",
  metaDescription:
    "PNG in ICO umwandeln, kostenlos: Favicon erstellen mit 16, 32 und 48 px oder Windows-Symbol bis 256 px – aus PNG, JPG, WEBP oder SVG. Im Browser, ohne Upload.",

  intro:
    "Eine ICO-Datei ist nicht ein Bild, sondern ein kleiner Satz davon: dasselbe Symbol in mehreren Größen, damit Browser-Tab, Taskleiste und Desktop jeweils die passende auswählen können. Mit dem Konverter von oMyImage wandeln Sie PNG in ICO um und bauen diesen Satz aus einem einzigen Bild. Starten Sie mit einem PNG, JPG, WEBP oder SVG, wählen Sie die Größen – Favicon oder vollständiges Windows-Symbol – und sehen Sie sich jede Größe in ihren echten Pixelmaßen an, bevor Sie eine .ico-Datei herunterladen. So können Sie in wenigen Sekunden ein Favicon erstellen.",

  sections: [
    {
      heading: "Was in einer ICO-Datei steckt",
      id: "what-ico",
      body: [
        "ICO ist das Symbolformat von Windows, und es ist ein Container: Eine Datei enthält mehrere quadratische Bilder, typischerweise von 16 × 16 bis 256 × 256 Pixel. Windows wählt für jede Stelle, an der ein Symbol erscheint – Dateiliste, Taskleiste, Desktop –, die nächstliegende Größe, und Browser machen es beim Tab und bei Lesezeichen genauso. Deshalb ist ein einzelnes verkleinertes PNG, das in .ico umbenannt wurde, kein echtes Symbol.",
        "Dateien von hier speichern die Größen unter 256 als 32-Bit-Bitmaps mit voller Transparenz – die Form, die jede gebräuchliche Windows-Version und jeder Browser liest – und die 256-Pixel-Größe als komprimiertes PNG, so wie es die Windows-eigenen Symbole tun. Das Ergebnis öffnet sich in jedem Programm, das mit Symbolen umgehen kann.",
      ],
    },
    {
      heading: "Ein favicon.ico erstellen",
      id: "favicon",
      body: [
        "Für eine Website wählen Sie die Vorgabe Favicon: 16, 32 und 48 Pixel. 16 ist die klassische Größe im Browser-Tab, 32 wird auf hochauflösenden Bildschirmen und in der Taskleiste genutzt, wenn eine Seite angeheftet ist, und 48 deckt Windows-Verknüpfungen sowie größere Lesezeichen- und Kachelansichten ab. Zusammen geben sie jedem üblichen Ort eine Größe, die nicht gestreckt werden muss.",
        "Nennen Sie die Datei favicon.ico und legen Sie sie in das Stammverzeichnis Ihrer Website, sodass sie unter /favicon.ico erreichbar ist. Browser fragen diese Adresse automatisch ab, selbst auf Seiten, die kein Symbol angeben. Moderne Websites ergänzen oft PNG- und SVG-Symbole mit link-Tags, aber das .ico im Stammverzeichnis bleibt die Datei, nach der jeder Browser und viele Tools zuerst suchen.",
      ],
    },
    {
      heading: "Symbole für Windows-Ordner und Verknüpfungen",
      id: "windows",
      body: [
        "Für eine Desktop-Verknüpfung, einen Ordner oder ein Programm wählen Sie die Vorgabe Windows-Symbol, die jede Größe von 16 bis 256 Pixel enthält. Windows nutzt die großen Größen für Desktop-Symbole und große Explorer-Ansichten, die kleinen für Listen und die Taskleiste; fehlt eine Größe, skaliert Windows die nächstliegende, und das Symbol wirkt verschwommen.",
        "Um das Symbol zu verwenden, klicken Sie mit der rechten Maustaste auf eine Verknüpfung, öffnen Sie Eigenschaften und wählen Sie „Anderes Symbol…“; bei einem Ordner öffnen Sie Eigenschaften, dann Anpassen, dann „Anderes Symbol…“, und wählen Ihre .ico-Datei aus. Bewahren Sie die .ico-Datei an einem Ort auf, an dem sie nicht verschoben oder gelöscht wird, denn Windows liest sie von dort.",
      ],
    },
    {
      heading: "Gestalten für 16 Pixel",
      id: "small",
      body: [
        "Auf 16 × 16 Pixeln ist Platz für eine Form und vielleicht einen Buchstaben, nicht für ein detailliertes Logo. Kräftige Formen, starker Kontrast und eine einfache Silhouette überleben; dünne Linien, kleine Schrift und feine Verläufe werden zu grauem Brei. Die Vorschau zeigt jede Größe in ihrer tatsächlichen Pixelgröße, sodass Sie die 16-Pixel-Version vor dem Download ehrlich beurteilen können.",
        "Für möglichst saubere kleine Größen wird das Bild schrittweise verkleinert – jedes Mal auf die Hälfte, mit hochwertiger Glättung – statt in einem Sprung, bei dem dünne Details unvorhersehbar verloren gehen. Wirkt das 16-Pixel-Symbol trotzdem unruhig, probieren Sie eine vereinfachte Version des Logos als Quelle – nur den Anfangsbuchstaben oder das Zeichen.",
      ],
    },
    {
      heading: "Quadratische Symbole aus jedem Bild",
      id: "square",
      body: [
        "Symbole sind quadratisch. Ist Ihr Bild es nicht, wählen Sie „Ganzes Bild einpassen“, um alles zu behalten und die Seiten mit Transparenz aufzufüllen, oder „Quadratisch zuschneiden“, um die längere Seite von der Mitte aus zu kürzen. Ein transparenter Hintergrund bleibt standardmäßig erhalten; setzen Sie das Häkchen bei der Option für einen weißen Hintergrund, wenn das Symbol an einem Ort angezeigt wird, der Transparenz schwarz darstellt.",
        "Die beste Quelle ist ein quadratisches PNG mit transparentem Hintergrund und mindestens 256 Pixeln. Ein JPG funktioniert auch, hat aber keine Transparenz, sein Hintergrund wird also Teil des Symbols. Ein SVG ist ideal: Es wird zuerst in hoher Auflösung gezeichnet, sodass jede Größe scharf ist.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie PNG in ICO um",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein PNG-, JPG-, WEBP- oder SVG-Bild aus – am besten quadratisch mit transparentem Hintergrund." },
    { title: "Größen wählen", description: "Wählen Sie Favicon (16, 32, 48) oder Windows-Symbol (16 bis 256) oder setzen Sie Häkchen bei genau den Größen, die Sie brauchen." },
    { title: "ICO herunterladen", description: "Prüfen Sie jede Größe in der Vorschau und laden Sie dann eine .ico-Datei herunter." },
  ],

  features: [
    { icon: "apps", title: "Alle Größen in einer Datei", description: "16, 24, 32, 48, 64, 128 und 256 Pixel, verpackt in einer einzigen .ico-Datei." },
    { icon: "opacity", title: "Transparenz bleibt", description: "Symbole behalten einen vollständig transparenten Hintergrund mit weichen, geglätteten Kanten." },
    { icon: "lock", title: "Kein Upload", description: "Das Symbol wird in Ihrem Browser erstellt; Ihr Bild verlässt Ihr Gerät nie." },
  ],

  faqs: [
    { q: "Wie wandle ich PNG in ICO um?", a: "Fügen Sie Ihr Bild hinzu, wählen Sie die Vorgabe Favicon oder Windows-Symbol, prüfen Sie die Vorschau und klicken Sie auf „ICO herunterladen“." },
    { q: "Welche Größen sollte ein favicon.ico haben?", a: "16, 32 und 48 Pixel – die Vorgabe Favicon. Sie decken Browser-Tabs, hochauflösende Bildschirme und Windows-Verknüpfungen ab." },
    { q: "Welche Größen braucht ein Windows-Symbol?", a: "Bis zu 256 Pixel. Die Vorgabe Windows-Symbol enthält 16, 24, 32, 48, 64, 128 und 256, sodass Windows nie eine Größe strecken muss." },
    { q: "Kann ich JPG oder SVG in ICO umwandeln?", a: "Ja. PNG, JPG, WEBP, GIF, BMP und SVG funktionieren alle. JPG hat keine Transparenz, sein Hintergrund bleibt also; SVG liefert die schärfsten Ergebnisse." },
    { q: "Bleibt der transparente Hintergrund erhalten?", a: "Ja. Die Transparenz bleibt in jeder Größe erhalten, außer Sie wählen einen weißen Hintergrund." },
    { q: "Mein Bild ist nicht quadratisch – was passiert?", a: "Wählen Sie „Ganzes Bild einpassen“, um alles mit transparenten Seiten zu behalten, oder „Quadratisch zuschneiden“, um die längere Seite zu kürzen." },
    { q: "Wohin gehört favicon.ico?", a: "In das Stammverzeichnis Ihrer Website, sodass es unter ihreseite.de/favicon.ico geladen wird. Browser suchen dort automatisch." },
    { q: "Wie ändere ich ein Ordnersymbol in Windows?", a: "Klicken Sie mit der rechten Maustaste auf den Ordner, öffnen Sie Eigenschaften, dann Anpassen, dann „Anderes Symbol…“, und wählen Sie Ihre .ico-Datei aus." },
    { q: "Warum wirkt mein 16-Pixel-Symbol verschwommen?", a: "Es stehen nur 256 Pixel zur Verfügung. Verwenden Sie eine einfachere Quelle – nur das Zeichen oder den Anfangsbuchstaben – mit kräftigen Formen und starkem Kontrast." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Die ICO-Datei wird vollständig in Ihrem Browser erstellt." },
    { q: "Kann ich hier kostenlos ein Favicon erstellen?", a: "Ja. Laden Sie Ihr Logo hoch, wählen Sie die Vorgabe Favicon und laden Sie die fertige favicon.ico herunter – ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung." },
  ],

  security:
    "Ihr Bild wird vollständig in Ihrem Browser skaliert und in eine ICO-Datei verpackt. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // PngToIcoTool.tsx
    "Select an image": "Bild auswählen",
    "or drop a PNG, JPG, WEBP or SVG image here": "oder ein PNG-, JPG-, WEBP- oder SVG-Bild hier ablegen",
    "Please select an image.": "Bitte wählen Sie ein Bild aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
    "Change image": "Bild ändern",
    "Clear image": "Bild entfernen",
    "Icon settings": "Symbol-Einstellungen",
    "Download ICO": "ICO herunterladen",
    "Saving…": "Wird gespeichert…",
    "Shown at actual size": "In tatsächlicher Größe dargestellt",
    "Last download: {size}": "Letzter Download: {size}",
    "Your image is smaller than the largest icon size, so that size is enlarged and will look soft.":
      "Ihr Bild ist kleiner als die größte Symbolgröße; diese Größe wird deshalb hochskaliert und wirkt unscharf.",
    "Your image is converted in your browser and never uploaded.": "Ihr Bild wird in Ihrem Browser umgewandelt und nie hochgeladen.",
    "Icon sizes": "Symbolgrößen",
    "Favicon": "Favicon", // i18n-same
    "Windows icon": "Windows-Symbol",
    "Sizes in pixels. A favicon needs 16, 32 and 48; Windows uses up to 256.":
      "Größen in Pixeln. Ein Favicon braucht 16, 32 und 48; Windows nutzt bis zu 256.",
    "Shape": "Form",
    "Fit whole image": "Ganzes Bild einpassen",
    "Crop to square": "Quadratisch zuschneiden",
    "Icons are square. Fit keeps everything and fills the sides; crop trims the longer side.":
      "Symbole sind quadratisch. Einpassen behält alles und füllt die Seiten auf; Zuschneiden kürzt die längere Seite.",
    "White background instead of transparent": "Weißer statt transparenter Hintergrund",
  },
};

export default content;
