import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/farbwaehler.
 *
 * Primary query "Farbwähler" (9.9K/mo, DE) together with the English loanword
 * "Color Picker" (40.5K) — both lead the title. Secondary "Farbe aus Bild",
 * "Farbpipette". Colour values (HEX/RGB/HSL) stay as written.
 */
const content: ToolPageContent = {
  toolId: "image-color-picker",
  locale: "de",
  name: "Farbwähler & Color Picker für Bilder",
  tagline:
    "Wählen Sie online jede Farbe aus einem Bild und extrahieren Sie die komplette Farbpalette an einem Ort — mit HEX-, RGB- und HSL-Werten, Lupe, Kopierfunktion und Download der Palette als Farbmusterblatt. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Farbwähler & Color Picker – Farbe aus Bild | oMyImage",
  metaDescription:
    "Farbwähler und Color Picker online: Farbe aus Bild per Farbpipette auslesen, HEX, RGB und HSL kopieren und die Farbpalette extrahieren. Kostenlos, ohne Upload.",

  intro:
    "Holen Sie sich in Sekunden die exakte Farbe aus jedem Bild — und machen Sie aus dem ganzen Foto eine einsatzbereite Palette. Mit dem Farbwähler (Color Picker) von oMyImage fahren Sie mit einer Lupe über das Bild und klicken, um einen beliebigen Pixel wie mit einer Farbpipette aufzunehmen, und kopieren dann seinen HEX-, RGB- oder HSL-Wert. Gleichzeitig extrahiert das Tool die dominanten Farben des Bildes und zeigt, wie viel vom Bild jede davon einnimmt — so können Sie die ganze Palette kopieren oder ein beschriftetes Farbmusterblatt herunterladen. Ideal, um Markenfarben abzugleichen, Moodboards zu bauen und für Web- oder Produktdesign. Alles läuft in Ihrem Browser, Ihr Bild bleibt privat.",

  sections: [
    {
      heading: "Eine Farbe aus dem Bild aufnehmen und den Wert ablesen",
      id: "sampling",
      body: [
        "Beim Aufnehmen einer Farbe wird der Wert eines einzelnen Pixels gelesen und in den Schreibweisen ausgegeben, die verschiedene Programme erwarten: HEX für CSS und Design-Software, RGB für Code, HSL, wenn Sie eine Familie verwandter Farbtöne aufbauen wollen, indem Sie jeweils nur eine Komponente ändern.",
        "HSL verdient mehr Beachtung, als es bekommt. Weil es den Farbton von Sättigung und Helligkeit trennt, genügt für eine hellere Version einer Markenfarbe die Änderung einer Zahl — in HEX müssten Sie drei raten. Für Hover-Zustände, deaktivierte Varianten und Abtönungen aus einer Grundfarbe ist es das deutlich einfachere Modell.",
        "Ein praktischer Hinweis: Fotos enthalten Rauschen, eine scheinbar einheitliche Fläche ist es also nicht. Zwei benachbarte Pixel im selben Stück Himmel liefern zwei leicht unterschiedliche Werte, und keiner davon ist falsch.",
      ],
    },
    {
      heading: "Eine Farbpalette extrahieren",
      id: "palette",
      body: [
        "Eine Analyse der dominanten Farben betrachtet das ganze Bild statt eines Pixels, fasst ähnliche Farben zusammen und meldet die, die die größte Fläche bedecken. Das ergibt die Palette, die ein Betrachter tatsächlich wahrnimmt — und die ist nicht immer das, was Sie nach Augenmaß gewählt hätten. Eine Farbe kann auffällig wirken und trotzdem nur einen winzigen Teil des Bildes einnehmen.",
        "Fotos sind gute Quellen für Paletten, weil das Licht einer Szene die Farben bereits aufeinander abgestimmt hat. Farben, die von derselben Sonne oder derselben Lampe beleuchtet werden, teilen einen Unterton, und genau dieser gemeinsame Stich lässt eine Palette stimmig statt zusammengewürfelt wirken.",
        "Üblich ist: die dominante Farbe als Basis, ein helles Neutral aus dem Bild für Hintergründe und eine kräftige Farbe für Akzente. Drei oder vier reichen völlig; eine Palette mit acht Farben verliert meist ihre Identität.",
      ],
    },
    {
      heading: "Farbharmonie ist nicht Barrierefreiheit",
      id: "contrast",
      body: [
        "Das ist der Fehler, den es zu vermeiden gilt. Eine Palette aus einem Foto ist danach ausgewählt, wie die Farben zueinander passen — das sagt nichts darüber, ob Text in einer davon auf einer anderen lesbar ist.",
        "Mitteltöne sind die besondere Falle: Sie wirken edel und fallen häufig in beide Richtungen durch die Kontrastanforderungen, weil sie weder hell genug für dunklen Text noch dunkel genug für hellen Text sind. Die WCAG verlangen 4,5:1 für normalen Text und 3:1 für großen Text, und ein hübsches mittleres Graublau auf einem hübschen mittleren Beige kann bei etwa 2:1 landen.",
        "Das praktikable Muster: die aufgenommene Palette für Akzente, Rahmen, Illustrationen und Hintergründe nutzen und Text in Tönen setzen, die Sie ausdrücklich geprüft haben. Harmonie und Kontrast sind getrennte Probleme und müssen getrennt gelöst werden.",
      ],
    },
    {
      heading: "Typische Einsatzzwecke",
      id: "uses",
      body: [
        "Am häufigsten wird ein Design auf ein Foto abgestimmt — eine Website, deren Akzentfarbe aus dem Titelbild stammt, wirkt durchdacht, ein beliebiges Blau dagegen nicht. Eine Markenpalette aus einem Moodboard entsteht auf dieselbe Weise.",
        "Darüber hinaus: eine Farbe aus einem Logo zurückgewinnen, wenn niemand die Markenrichtlinien findet, die Farben einer Diagrammreihe an ein Produktfoto anpassen, die Palette eines Wettbewerbers aus einem Screenshot auslesen und Farben aus einem Gemälde oder Stoff übernehmen, die bereits zusammen funktionieren.",
        "Alles wird von einem Canvas in Ihrem Browser abgelesen, das Bild wird also nie hochgeladen — wichtig, wenn die Quelle unveröffentlichte Designarbeit oder Material eines Kunden ist.",
      ],
    },
  ],

  howToTitle: "So wählen Sie eine Farbe aus einem Bild und extrahieren eine Palette",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein Bild aus, oder ziehen Sie es in den Arbeitsbereich." },
    { title: "Darüberfahren & klicken", description: "Fahren Sie über das Bild, um Farben mit der Lupe vorzuschauen, und klicken Sie auf einen Pixel, um seine Farbe festzuhalten." },
    { title: "Extrahierte Palette ansehen", description: "Die dominanten Farben des Bildes werden automatisch herausgezogen — mit dem Regler erhalten Sie zwischen 2 und 16 davon." },
    { title: "Kopieren oder herunterladen", description: "Kopieren Sie jeden HEX-, RGB- oder HSL-Wert mit einem Klick, die ganze Palette auf einmal, oder laden Sie sie als PNG-Farbmusterblatt herunter." },
  ],

  features: [
    { icon: "colorize", title: "Pixelgenaue Farbpipette", description: "Nehmen Sie die exakte Farbe jedes Pixels auf und lesen Sie sie sofort als HEX, RGB und HSL ab." },
    { icon: "search", title: "Lupe", description: "Eine Vergrößerungslupe folgt Ihrem Mauszeiger, damit Sie genau den gewünschten Pixel treffen." },
    { icon: "palette", title: "Komplette Farbpalette", description: "Extrahiert 2–16 dominante Farben mit ihrem Anteil am Bild und behält kleine Akzentfarben, statt sie wegzumitteln." },
    { icon: "lock", title: "100 % privat", description: "Farbwähler und Palette laufen komplett in Ihrem Browser mit HTML-Canvas — Ihr Bild wird nie hochgeladen." },
  ],

  faqs: [
    { q: "Welche Farbformate kann ich kopieren?", a: "HEX, RGB und HSL. Klicken Sie auf einen Wert, um ihn in die Zwischenablage zu kopieren." },
    { q: "Wie werden die Farben der Palette ausgewählt?", a: "Das Bild wird in voller Farbtreue abgetastet — ohne Weichzeichnen oder Glätten — und dann in Farbbereiche gruppiert. Das Tool erzeugt bewusst mehr Kandidaten und behält die, die sowohl häufig als auch optisch unterscheidbar sind. So bekommt auch ein kleiner, aber kräftiger Akzent ein eigenes Farbfeld, statt im Hintergrund unterzugehen." },
    { q: "Wie viele Farben kann ich extrahieren?", a: "Zwischen 2 und 16, einstellbar mit dem Regler. Jedes Farbfeld zeigt außerdem, welcher Anteil des Bildes dieser Farbe am nächsten kommt." },
    { q: "Kann ich die Palette exportieren?", a: "Ja. Kopieren Sie einzelne HEX-/RGB-Werte, die ganze Liste auf einmal, oder laden Sie ein beschriftetes PNG-Farbmusterblatt herunter." },
    { q: "Speichert der Color Picker einen Farbverlauf?", a: "Ja. Ihre zuletzt gewählten Farben erscheinen als Farbfelder, die Sie anklicken können, um sie erneut zu kopieren." },
    { q: "Welche Bildformate werden unterstützt?", a: "JPG, PNG, WEBP, GIF und BMP. Bei animierten Bildern stammen die Farben aus dem ersten Frame." },
    { q: "Ist der Farbwähler kostenlos und privat?", a: "Ja. Keine Anmeldung, und das Bild wird lokal in Ihrem Browser verarbeitet — nichts wird hochgeladen." },
    { q: "Was ist der Unterschied zwischen HEX, RGB und HSL?", a: "Sie beschreiben dieselbe Farbe auf drei Arten. HEX ist die kompakte sechsstellige Form für CSS und Design-Tools. RGB gibt die drei Kanalwerte direkt an, wie sie Code und Canvas-APIs erwarten. HSL zerlegt die Farbe in Farbton, Sättigung und Helligkeit — viel einfacher, wenn Sie Varianten eines Farbtons bauen." },
    { q: "Warum sieht die gewählte Farbe in meinem Design-Programm anders aus?", a: "Meist wegen unterschiedlicher Farbprofile. Ein Bild mit einem Wide-Gamut-Profil wie Display P3 wird für die Anzeige umgerechnet, daher kann der aufgenommene Wert von dem abweichen, den ein anderes Programm meldet. Außerdem enthalten Fotos Rauschen, zwei benachbarte Pixel in einer scheinbar einheitlichen Fläche sind also selten identisch." },
    { q: "Wie baue ich eine Palette aus einem Foto?", a: "Nehmen Sie die dominante Farbe als Basis und wählen Sie dann zwei oder drei ergänzende Töne aus verschiedenen Bereichen des Bildes — einen hellen für Hintergründe und einen kräftigen für Akzente. Fotos sind eine verlässliche Quelle, weil natürliches Licht die Farben einer Szene bereits harmonisiert." },
    { q: "Sind diese Farben barrierefrei?", a: "Nicht automatisch. Eine Palette aus einem Foto ist nach Harmonie gewählt, nicht nach Kontrast, und Mitteltöne aus einem Bild fallen als Textfarbe häufig durch. Prüfen Sie jedes Paar aus Text und Hintergrund gegen die WCAG, bevor Sie es verwenden — 4,5:1 für normalen Text, 3:1 für großen." },
    { q: "Kann ich die Farben einer Marke aus einem Screenshot auslesen?", a: "Ja, das ist ein häufiger Einsatz. Machen Sie einen Screenshot der Website oder des Logos und nehmen Sie die Farbe daraus auf. Beachten Sie, dass ein Screenshot Bildschirmdarstellung und Kompression durchlaufen hat — das Ergebnis ist sehr nah dran, aber nicht exakt. Gut genug zum Abgleichen, nicht für eine offizielle Markenspezifikation." },
  ],

  security:
    "Ihr Bild bleibt privat. Farbaufnahme und Palettenextraktion geschehen vollständig in Ihrem Browser mit HTML-Canvas — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // ImageColorPickerTool.tsx
    "Please select an image file.": "Bitte wählen Sie eine Bilddatei aus.",
    "Couldn't read that image.": "Dieses Bild konnte nicht gelesen werden.",
    "Select an image": "Bild auswählen",
    "or drop a JPG, PNG, WEBP or GIF here": "oder ein JPG, PNG, WEBP oder GIF hier ablegen",
    "Change image": "Bild ändern",
    "Clear image": "Bild entfernen",
    "Click anywhere on": "Klicken Sie auf eine beliebige Stelle in",
    "to pick a color.": "um eine Farbe auszuwählen.",
    "Click the image — or any palette swatch below — to sample a color.":
      "Klicken Sie auf das Bild — oder auf ein Farbfeld der Palette unten —, um eine Farbe aufzunehmen.",
    "Picked color": "Gewählte Farbe",
    "Copy {value}": "{value} kopieren",
    "Copied {value}": "{value} kopiert",
    "Copy failed.": "Kopieren fehlgeschlagen.",
    "Copy all": "Alle kopieren",
    "Recent": "Zuletzt verwendet",
    "Palette": "Palette", // i18n-same
    "Palette options": "Palettenoptionen",
    "Colors": "Farben",
    "Number of palette colors": "Anzahl der Palettenfarben",
    "Pick {value}": "{value} wählen",
    "{share} of pixels are closest to this color": "{share} der Pixel liegen dieser Farbe am nächsten",
    "Download palette (PNG)": "Palette herunterladen (PNG)",
    "This image is fully transparent — there are no colors to extract.":
      "Dieses Bild ist vollständig transparent — es gibt keine Farben zu extrahieren.",
    "This image only has 1 visually distinct color — showing it rather than repeating near-identical shades.":
      "Dieses Bild hat nur 1 optisch unterscheidbare Farbe — sie wird angezeigt, statt fast identische Töne zu wiederholen.",
    "This image only has {n} visually distinct colors — showing all of them rather than repeating near-identical shades.":
      "Dieses Bild hat nur {n} optisch unterscheidbare Farben — alle werden angezeigt, statt fast identische Töne zu wiederholen.",
    "Tip:": "Tipp:",
    "hover to preview with the magnifier and click to lock a color, or tap a palette swatch to load it. Copy buttons put the value straight on your clipboard, and everything runs in your browser.":
      "Fahren Sie darüber, um mit der Lupe vorzuschauen, und klicken Sie, um eine Farbe festzuhalten, oder tippen Sie auf ein Farbfeld der Palette, um es zu laden. Die Kopier-Buttons legen den Wert direkt in Ihre Zwischenablage, und alles läuft in Ihrem Browser.",
  },
};

export default content;
