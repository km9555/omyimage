import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/svg-in-png.
 *
 * Head term "SVG in PNG" (12.1K/mo, DE); secondary "SVG zu PNG", used in the
 * intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "svg-to-png",
  locale: "de",
  name: "SVG in PNG umwandeln",
  tagline:
    "Wandeln Sie SVG online in PNG um – in 1×, 2×, 4× oder jeder Breite, in jeder Größe scharf gerendert, transparent oder mit Hintergrund. Kostenlos, im Stapel und ohne dass etwas Ihren Browser verlässt.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "SVG in PNG umwandeln – scharf & kostenlos | oMyImage",
  metaDescription:
    "SVG in PNG umwandeln, kostenlos: SVG zu PNG in 1×, 2×, 4× oder exakter Breite, scharf gerendert, transparent oder mit Hintergrund. Im Stapel, ohne Upload.",

  intro:
    "SVG ist perfekt – bis Sie es irgendwo einsetzen müssen, wo nur gewöhnliche Bilder angenommen werden: ein Social-Media-Beitrag, eine Folie, eine E-Mail, ein App-Store-Eintrag, ein Marktplatz-Upload. Mit dem Konverter von oMyImage wandeln Sie SVG in PNG um, in genau der Größe, die Sie wählen – frisch in dieser Auflösung gezeichnet, sodass ein 24-Pixel-Icon, exportiert in 4×, so scharf ist wie eines, das für 96 Pixel gestaltet wurde. Behalten Sie den transparenten Hintergrund oder fügen Sie Weiß oder eine beliebige Farbe hinzu, und wandeln Sie einen ganzen Ordner mit Icons auf einmal um.",

  sections: [
    {
      heading: "Warum SVG in PNG umwandeln",
      id: "why",
      body: [
        "SVG beschreibt Formen statt Pixel – deshalb lässt es sich auf jede Größe skalieren, und deshalb lieben Browser es. Viele andere Orte nicht. Soziale Netzwerke lehnen SVG-Uploads ab, viele Messenger und E-Mail-Programme zeigen es als Dateianhang statt als Bild, ältere Office-Versionen fügen es schlecht ein, und Marktplätze, App-Stores und Print-on-Demand-Dienste verlangen PNG oder JPG.",
        "PNG ist der natürliche Partner für SVG, weil es verlustfrei ist und Transparenz behält: Logos, Icons und Illustrationen kommen mit sauberen Kanten und durchsichtigem Hintergrund heraus, genau so, wie sie im Browser aussehen.",
      ],
    },
    {
      heading: "In jeder Größe scharf",
      id: "sharp",
      body: [
        "Viele Konverter rendern das SVG in seiner Standardgröße und strecken dann die Bitmap – das ergibt bei 2× weiche, verschwommene Kanten und bei 4× noch schlimmere. Dieses Tool setzt die Zielgröße direkt im SVG, bevor es gezeichnet wird, sodass der Browser die Vektoren unmittelbar in der Ausgabeauflösung rastert. Kurven, dünne Linien und kleine Schrift sind in jeder Größe so scharf, wie das Format es zulässt.",
        "Das bedeutet auch: Große Ausgaben kosten keine Qualität. Ein Logo, das 4000 Pixel breit exportiert wird, ist ein echtes 4000-Pixel-Rendering, geeignet für den Druck und große Bildschirme. Die Ausgabe ist auf 8192 Pixel an der längsten Seite begrenzt – dort hören Browser auf vielen Geräten auf, zuverlässig zeichnen zu können.",
      ],
    },
    {
      heading: "Die Größe wählen",
      id: "sizes",
      body: [
        "Die Größen-Schaltflächen multiplizieren die im SVG festgelegte Größe. 1× liefert die Größe, die der Designer gesetzt hat; 2× ist die Standardwahl für hochauflösende Handy- und Laptop-Bildschirme, auf denen ein Bild doppelt so viele Pixel braucht, um scharf zu wirken; 4× passt für große Displays und den Druck. Die Dateien erhalten im Namen @2x oder @4x, damit sich die Größen leicht unterscheiden lassen.",
        "Wählen Sie „Breite“, um stattdessen eine exakte Pixelbreite festzulegen, zum Beispiel 512 für ein App-Icon oder 1200 für ein Social-Media-Bild. Die Höhe folgt den Proportionen des SVG. In einem Stapel erhält jede Datei diese Breite.",
      ],
    },
    {
      heading: "Transparenter, weißer oder farbiger Hintergrund",
      id: "background",
      body: [
        "Standardmäßig behält das PNG die Transparenz des SVG, in der Vorschau auf einem Schachbrettmuster dargestellt. Wählen Sie Weiß, wenn das Bild an einen Ort geht, der Transparenz als Schwarz anzeigt – manche Messenger und ältere Office-Programme tun das –, oder Farbe, um es für einen Social-Media-Beitrag oder eine Folie auf eine Markenfarbe zu setzen.",
      ],
    },
    {
      heading: "Was gerendert wird und was nicht",
      id: "what-renders",
      body: [
        "SVG wird mit dem eigenen Renderer des Browsers in dessen sicherem Bildmodus umgewandelt. Formen, Verläufe, Masken, Filter und eingebettete Bilder werden so dargestellt wie auf einer Webseite. Alles, was das Internet oder Code bräuchte, nicht: Skripte laufen nie, und Bilder, Schriften oder Stylesheets, die von anderen Websites verlinkt sind, werden nicht geladen.",
        "Auf Text sollten Sie achten. Nutzt das SVG eine Webschrift, die verlinkt statt eingebettet ist, fällt der Text auf eine Systemschrift zurück. Um die exakte Schrift zu behalten, wandeln Sie den Text in Ihrem Designprogramm vor dem SVG-Export in Pfade (Outlines) um oder betten Sie die Schrift in die Datei ein.",
      ],
    },
    {
      heading: "SVGs ohne Größenangabe",
      id: "no-size",
      body: [
        "Manche SVGs – oft Icons, die aus Designprogrammen exportiert oder aus Icon-Bibliotheken kopiert wurden – legen nur eine viewBox fest oder überhaupt keine Größe. Gibt es eine viewBox, werden ihre Maße als 1×-Größe verwendet. Gibt es nichts, gilt die Browser-Voreinstellung von 300 × 150 Pixeln, und das Tool weist darauf hin; wählen Sie „Breite“, um die Größe festzulegen, die Sie tatsächlich wollen.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie SVG in PNG um",
  steps: [
    { title: "SVG-Dateien hinzufügen", description: "Wählen Sie eine oder mehrere SVG-Dateien aus oder ziehen Sie sie in das Feld." },
    { title: "Größe und Hintergrund wählen", description: "Wählen Sie 1×, 2×, 4× oder eine exakte Breite sowie transparent, Weiß oder eine Farbe." },
    { title: "Herunterladen", description: "Ein PNG wird direkt heruntergeladen; mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "In jeder Größe scharf", description: "Vektoren werden in der Ausgabeauflösung gezeichnet, nie aus einem kleineren Bild hochgestreckt." },
    { icon: "opacity", title: "Transparenz bleibt", description: "Das PNG behält den transparenten Hintergrund des SVG oder erhält Weiß oder eine beliebige Farbe." },
    { icon: "burst_mode", title: "Stapelumwandlung", description: "Wandeln Sie einen Ordner mit Icons oder Logos auf einmal um und laden Sie eine ZIP-Datei herunter." },
  ],

  faqs: [
    { q: "Wie wandle ich SVG in PNG um?", a: "Fügen Sie Ihre SVG-Dateien hinzu, wählen Sie Größe und Hintergrund und klicken Sie auf „PNG herunterladen“. Mehrere Dateien werden zusammen als ZIP heruntergeladen." },
    { q: "Wie bekomme ich ein hochauflösendes PNG aus einem SVG?", a: "Wählen Sie 2× oder 4× oder legen Sie eine exakte Breite bis 8192 Pixel fest. Die Vektoren werden in dieser Auflösung gezeichnet, das PNG ist also scharf statt gestreckt." },
    { q: "Hat das PNG einen transparenten Hintergrund?", a: "Ja, standardmäßig. Sie können auch Weiß oder eine beliebige Farbe als Hintergrund wählen." },
    { q: "Warum sieht der Text im PNG anders aus?", a: "Das SVG verlinkt wahrscheinlich eine Webschrift, die nicht in der Datei eingebettet ist, deshalb wird eine Systemschrift verwendet. Wandeln Sie den Text in Pfade um oder betten Sie die Schrift ein, bevor Sie das SVG exportieren." },
    { q: "Warum ist mein PNG 300 × 150 Pixel groß?", a: "Das SVG legt weder eine Größe noch eine viewBox fest, deshalb gilt die Browser-Voreinstellung. Wählen Sie „Breite“ und geben Sie die gewünschte Größe ein." },
    { q: "Kann ich viele SVG-Dateien auf einmal umwandeln?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten; jede wird mit denselben Einstellungen umgewandelt, und alle werden als eine ZIP-Datei heruntergeladen." },
    { q: "Ist es sicher, ein SVG aus dem Internet umzuwandeln?", a: "Ja. Das SVG wird im Bildmodus des Browsers gezeichnet, in dem Skripte nie laufen und nichts von anderen Websites geladen wird." },
    { q: "Werden meine Dateien hochgeladen?", a: "Nein. Das SVG wird vollständig in Ihrem Browser gelesen und umgewandelt, und das PNG entsteht auf Ihrem Gerät." },
    { q: "Wie groß darf das PNG höchstens sein?", a: "Bis zu 8192 Pixel an der längsten Seite. Darüber können Browser auf vielen Geräten das Bild nicht mehr zuverlässig zeichnen." },
    { q: "Kann ich SVG stattdessen in JPG umwandeln?", a: "Wandeln Sie hier SVG zu PNG mit weißem Hintergrund um und nutzen Sie dann den Konverter PNG in JPG, wenn Sie ein JPG brauchen." },
  ],

  security:
    "Ihre SVG-Dateien werden vollständig in Ihrem Browser gelesen und in PNG umgewandelt. Nichts wird hochgeladen, Skripte im SVG laufen nie, und es werden keine externen Ressourcen geladen.",

  ui: {
    // SvgToPngTool.tsx
    "Select SVG files": "SVG-Dateien auswählen",
    "or drop SVG files here": "oder SVG-Dateien hier ablegen",
    "Please select SVG files.": "Bitte wählen Sie SVG-Dateien aus.",
    "{name} is not a valid SVG.": "{name} ist keine gültige SVG-Datei.",
    "Download PNG": "PNG herunterladen",
    "Download PNGs (ZIP)": "PNGs herunterladen (ZIP)",
    "Clear images": "Bilder entfernen",
    "PNG settings": "PNG-Einstellungen",
    "Preview": "Vorschau",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "Preview shows the first of {n} files": "Die Vorschau zeigt die erste von {n} Dateien",
    "Last download: {size}": "Letzter Download: {size}",
    "Change files": "Dateien ändern",
    "This SVG sets no size, so it is treated as 300 × 150 px — the browser default. Use a width to choose the output size.":
      "Dieses SVG legt keine Größe fest und wird deshalb als 300 × 150 px behandelt – die Browser-Voreinstellung. Legen Sie eine Breite fest, um die Ausgabegröße zu wählen.",
    "Your SVG files are converted in your browser and never uploaded.": "Ihre SVG-Dateien werden in Ihrem Browser umgewandelt und nie hochgeladen.",
    "Size": "Größe",
    "Width": "Breite",
    "Width (px)": "Breite (px)",
    "Multiplies the size set in the SVG. 2× is sharp on high-resolution screens.":
      "Multipliziert die im SVG festgelegte Größe. 2× ist auf hochauflösenden Bildschirmen scharf.",
    "Background": "Hintergrund",
    "Background colour": "Hintergrundfarbe",
    "Converting…": "Wird umgewandelt…",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
  },
};

export default content;
