import type { ToolPageContent } from "@/content/tools/types";
import converter from "@/content/tools/dpi-converter.de";

/**
 * German copy for /de/dpi-pruefen (dpi-checker). Target query: „DPI prüfen“,
 * secondary „DPI herausfinden“. Reuses the dpi-converter `ui` block.
 */
const content: ToolPageContent = {
  toolId: "dpi-checker",
  locale: "de",
  name: "DPI prüfen",
  tagline:
    "Prüfen Sie die DPI von JPG-, PNG-, BMP- und WEBP-Bildern — und sehen Sie, in welcher Größe jedes Bild druckt und wie groß es höchstens scharf druckt. Kostenlos, viele Bilder auf einmal, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "DPI prüfen – DPI eines Bildes herausfinden | oMyImage",
  metaDescription:
    "DPI prüfen, kostenlos und ohne Anmeldung: DPI von JPG, PNG, BMP und WEBP herausfinden, mit Druckgröße in cm und größter scharfer Größe bei 300 dpi.",

  intro:
    "Bevor Sie ein Bild an eine Druckerei schicken oder in ein Formular hochladen, das eine bestimmte DPI verlangt, sollten Sie wissen, was tatsächlich in der Datei steht. „DPI prüfen“ von oMyImage liest die in jedem Bild gespeicherte Auflösung aus, zeigt, wo sie gespeichert ist, und rechnet sie in die Zahlen um, auf die es ankommt: wie groß das Bild bei dieser DPI druckt und wie groß es in Fotoqualität drucken kann. Fügen Sie ein Bild oder einen ganzen Ordner hinzu; nichts verlässt Ihren Browser.",

  sections: [
    {
      heading: "Was die Prüfung anzeigt",
      id: "what",
      body: [
        "Für jedes Bild erhalten Sie die Pixelgröße, die in der Datei gespeicherte DPI und den Fundort — den JFIF-Header oder die EXIF-Daten eines JPG, den pHYs-Block eines PNG, den Header einer BMP-Datei oder den EXIF-Block eines WEBP. Unterscheiden sich der horizontale und der vertikale Wert, werden beide angezeigt.",
        "Aus diesen Zahlen berechnet das Tool zwei Druckgrößen in Zentimetern und Zoll: die Größe, die die Datei bei ihrer gespeicherten DPI verlangt, und die größte Größe, in der sie bei 300 dpi scharf druckt — dem üblichen Standard für Fotos und Dokumente.",
      ],
    },
    {
      heading: "So lesen Sie das Ergebnis",
      id: "reading",
      body: [
        "Angenommen, ein Foto hat 2400 × 3000 Pixel und ist mit 72 dpi gespeichert. Die Prüfung meldet eine Druckgröße von etwa 84,7 × 105,8 cm — das, was ein Programm daraus macht, das der Angabe vertraut — und eine scharfe Druckgröße von 20,3 × 25,4 cm bei 300 dpi. Die zweite Zahl ist die ehrliche: So groß kann das Bild werden, bevor die Pixel sichtbar werden.",
        "Verlangt ein Formular oder eine Druckerei 300 dpi und die Prüfung zeigt etwas anderes, ändern Sie den Wert mit „DPI ändern“. Ist die scharfe Druckgröße kleiner als die Größe, die Sie brauchen, benötigt das Bild mehr Pixel, keine andere Angabe.",
      ],
    },
    {
      heading: "Wenn ein Bild keine DPI hat",
      id: "none",
      body: [
        "Viele Bilder enthalten überhaupt keine DPI: GIFs nie, viele PNGs und Screenshots ebenfalls nicht, und manche JPGs speichern nur ein Pixel-Seitenverhältnis. Die Prüfung sagt das klar. Programme greifen dann auf einen Standardwert zurück — meist 72 oder 96 dpi —, weshalb dieselbe Datei in verschiedenen Apps unterschiedliche Werte zeigen kann.",
        "Ein fehlender Wert ist für Bildschirme und Webseiten kein Problem. Er zählt erst, wenn das Bild gedruckt oder in ein Dokument eingesetzt wird, und das Setzen einer DPI behebt das in einer Sekunde.",
      ],
    },
    {
      heading: "DPI herausfinden unter Windows und Mac",
      id: "os",
      body: [
        "Unter Windows klicken Sie mit der rechten Maustaste auf das Bild, wählen „Eigenschaften“ und öffnen den Reiter „Details“: „Horizontale Auflösung“ und „Vertikale Auflösung“ zeigen die DPI. Auf dem Mac öffnen Sie das Bild in der Vorschau und wählen „Werkzeuge“ und dann „Informationen einblenden“; der erste Reiter nennt die Bild-DPI. Beide lesen denselben gespeicherten Wert wie dieses Tool, die Zahlen sollten also übereinstimmen.",
      ],
    },
    {
      heading: "DPI und Pixelgröße zusammen",
      id: "both",
      body: [
        "Manche Vorgaben kombinieren beides, etwa ein Foto von 3,5 × 4,5 cm bei 300 dpi — das entspricht 413 × 531 Pixeln. Prüfen Sie hier zuerst Pixelgröße und DPI; stimmt eines davon nicht, erzeugt „Bildgröße in cm ändern“ die exakte Pixelgröße für die benötigten Zentimeter und DPI und speichert die DPI in der Datei.",
      ],
    },
  ],

  howToTitle: "So prüfen Sie die DPI eines Bildes",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG-, BMP-, WEBP- oder GIF-Bilder aus." },
    { title: "Ergebnisse ablesen", description: "Jedes Bild zeigt seine Pixel, die gespeicherte DPI, deren Speicherort und seine Druckgrößen." },
    { title: "Bei Bedarf ändern", description: "Klicken Sie auf „DPI ändern“, um die Bilder direkt an das Tool zum Ändern der DPI zu übergeben." },
  ],

  features: [
    { icon: "info", title: "DPI und Speicherort", description: "JFIF, EXIF, PNG-pHYs oder BMP-Header — und ein klarer Hinweis, wenn es keine DPI gibt." },
    { icon: "straighten", title: "Druckgrößen", description: "Die Größe, in der jedes Bild druckt, und die größte scharfe Größe bei 300 dpi." },
    { icon: "lock", title: "Kein Upload", description: "Dateien werden in Ihrem Browser gelesen und verlassen nie Ihr Gerät." },
  ],

  faqs: [
    { q: "Wie prüfe ich die DPI eines Bildes?", a: "Fügen Sie es hier hinzu. Das Tool zeigt die in der Datei gespeicherte DPI, wo sie gespeichert ist und in welchen Größen das Bild druckt." },
    { q: "Warum hat mein Bild keine DPI?", a: "GIFs speichern nie eine, und viele PNGs, Screenshots und Webbilder ebenfalls nicht. Programme nehmen dann 72 oder 96 dpi an." },
    { q: "Warum zeigen verschiedene Apps unterschiedliche DPI?", a: "Speichert eine Datei keine DPI oder zwei widersprüchliche Werte, greift jede App auf ihren eigenen Standard zurück oder liest ein anderes Feld." },
    { q: "Sind 72 dpi schlecht?", a: "Nicht für Bildschirme, die DPI ignorieren. Beim Drucken zählt, ob genug Pixel für die gewünschte Größe vorhanden sind." },
    { q: "Wie groß kann mein Bild scharf gedruckt werden?", a: "Teilen Sie die Pixel durch 300, dann erhalten Sie Zoll. Das Tool erledigt das für Sie und zeigt das Ergebnis auch in Zentimetern." },
    { q: "Kann ich viele Bilder auf einmal prüfen?", a: "Ja. Fügen Sie alle hinzu; jedes bekommt ein eigenes Ergebnis." },
    { q: "Wie ändere ich die DPI nach der Prüfung?", a: "Klicken Sie auf „DPI ändern“. Ihre Bilder öffnen sich im Tool zum Ändern der DPI, wo Sie den neuen Wert wählen." },
    { q: "Kann das Tool die DPI aus einem WEBP oder BMP lesen?", a: "Ja, sofern die Datei eine speichert: BMP hat sie im Header, WEBP im EXIF-Block." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Die Dateien werden vollständig in Ihrem Browser gelesen." },
    { q: "Wie viele Pixel braucht ein Bild für 10 × 15 cm bei 300 dpi?", a: "Rund 1181 × 1772 Pixel. Zeigt die Prüfung weniger, druckt das Bild in dieser Größe weicher — dann brauchen Sie ein höher aufgelöstes Original." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser gelesen. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: converter.ui,
};

export default content;
