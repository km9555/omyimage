import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/text-in-gif-einfuegen. Target query: „Text in GIF
 * einfügen" (Germany, Nov 2026); secondary „Text auf GIF" in the intro, a
 * heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "add-text-to-gif",
  locale: "de",
  name: "Text in GIF einfügen",
  tagline:
    "Schreiben Sie eine Beschriftung auf ein animiertes GIF – Meme-Text, Untertitel oder ein Label –, auf allen Frames oder nur auf einigen, und sehen Sie sie live, bevor Sie speichern. Kostenlos, direkt im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Text in GIF einfügen – online & kostenlos | oMyImage",
  metaDescription:
    "Text in GIF einfügen, online und kostenlos: Meme-Text oder Untertitel auf ein animiertes GIF schreiben, Schrift und Farben wählen. Live-Vorschau, ohne Upload.",

  intro:
    "Mit den richtigen Worten sagt ein GIF mehr: die Pointe unter einer Reaktion, ein Untertitel auf einem stummen Clip, ein Label für jeden Schritt eines Tutorials. Mit „Text in GIF einfügen“ von oMyImage schreiben Sie Ihren Text direkt in die Animation – Text auf GIF, ohne Bildbearbeitungsprogramm. Tippen Sie ihn ein, wählen Sie eine von neun Positionen, Schrift, Größe und Farben, und die Vorschau spielt das GIF mit Ihrer Beschriftung in Echtzeit ab. Sieht alles gut aus, fügen Sie den Text ein; er wird Teil jedes gewählten Frames und ist überall zu sehen, wohin das GIF geht.",

  sections: [
    {
      heading: "Den Text platzieren",
      id: "position",
      body: [
        "Wählen Sie eine von neun Stellen – die Ecken, die Mitte jeder Kante oder das Zentrum. Lange Beschriftungen brechen automatisch in neue Zeilen um, und mit der Eingabetaste beginnen Sie eine neue Zeile, wo immer Sie wollen. Der Text hält einen kleinen Abstand zum Rand, damit die Kontur nie abgeschnitten wird.",
        "Die Größe wird als Anteil der kürzeren Seite des GIFs festgelegt. Dieselbe Einstellung wirkt deshalb auf einem hochkanten Handy-Clip genauso stimmig wie auf einem breiten Banner. Die Vorschau zeigt das Ergebnis sofort – auf der laufenden Animation, nicht nur auf einem einzelnen Frame.",
      ],
    },
    {
      heading: "Text auf GIF: Meme-Stil oder Untertitel",
      id: "style",
      body: [
        "Der klassische Meme-Look ist weiße Impact-Schrift in Großbuchstaben mit dicker schwarzer Kontur – lesbar auf jedem Hintergrund, ob hell oder dunkel. Wählen Sie Impact, setzen Sie das Häkchen bei „Großbuchstaben“ und lassen Sie die Kontur auf dem Standardwert. Für Untertitel liest sich eine schlichte serifenlose Schrift mit einer Box hinter dem Text besser und wirkt ruhiger.",
        "Text- und Konturfarbe sind frei wählbar. Setzen Sie die Konturstärke auf null für sauberen Text ohne Rand, oder erhöhen Sie sie für unruhige, helle Hintergründe. Die Box verwendet die Konturfarbe, teilweise transparent, sodass der Frame durchscheint.",
      ],
    },
    {
      heading: "Text nur auf einigen Frames",
      id: "timing",
      body: [
        "Wählen Sie „Einige Frames“, um den Text nur während eines Teils der Animation zu zeigen. Zwei Regler legen den ersten und letzten Frame fest, jeweils mit dem Zeitpunkt, an dem er beginnt. So erscheint eine Pointe genau dann, wenn die Reaktion sitzt, oder ein Label begleitet jeden Schritt einer Bildschirmaufnahme.",
        "Für mehrere verschiedene Beschriftungen fügen Sie eine ein, laden das GIF herunter, öffnen es erneut und fügen die nächste auf einem anderen Frame-Bereich hinzu. Jeder Durchgang behält den bisherigen Text.",
      ],
    },
    {
      heading: "Schriften",
      id: "fonts",
      body: [
        "Die vier Schriften – Impact, serifenlos, Serifenschrift und Schreibmaschine – stammen von Ihrem Gerät, es wird also nichts zusätzlich heruntergeladen. Impact ist in Windows und macOS enthalten; auf Smartphones ohne Impact springt eine fette serifenlose Schrift ein. Jede Sprache, die Ihr Gerät anzeigen kann, funktioniert – mit Umlauten und ß ebenso wie mit Hindi, Russisch und Emoji.",
      ],
    },
    {
      heading: "Qualität und Dateigröße",
      id: "quality",
      body: [
        "Jeder Frame behält sein Timing, und das GIF wiederholt sich wie zuvor. Die Textkanten werden gegen das Bild dahinter geglättet, und die 256 Farben des GIFs werden für die ganze Animation neu gewählt, damit sich die Textfarben ohne Streifenbildung einfügen. Text verändert die Dateigröße nur wenig; muss das GIF kleiner werden, schicken Sie es anschließend durch „GIF komprimieren“.",
      ],
    },
    {
      heading: "Beschriftungen, die man lesen kann",
      id: "tips",
      body: [
        "Kurze Beschriftungen wirken am besten: Ein GIF läuft in wenigen Sekunden durch, halten Sie den Text also bei ein oder zwei Zeilen. Setzen Sie ihn dorthin, wo gerade nichts passiert – bei den meisten Clips unten, oben, wenn Gesichter oder Hände tief im Bild sind. Heller Text mit dunkler Kontur funktioniert fast überall; auf unruhigem Hintergrund schalten Sie die Box ein.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser dekodiert, beschriftet und neu kodiert. Es wird nie hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So fügen Sie Text in ein GIF ein",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Schreiben und gestalten", description: "Tippen Sie den Text, wählen Sie Position, Schrift, Größe und Farben; die Vorschau zeigt alles live." },
    { title: "Einfügen und herunterladen", description: "Klicken Sie auf „Text in GIF einfügen“, prüfen Sie das Ergebnis und laden Sie es herunter." },
  ],

  features: [
    { icon: "text_fields", title: "Live-Vorschau", description: "Sehen Sie die Beschriftung auf dem laufenden GIF, während Sie tippen." },
    { icon: "palette", title: "Meme oder Untertitel", description: "Kontur, Box, Farben, Großbuchstaben und neun Positionen." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser beschriftet." },
  ],

  faqs: [
    { q: "Wie füge ich Text in ein animiertes GIF ein?", a: "Fügen Sie das GIF hinzu, tippen Sie Ihren Text, wählen Sie Position und Aussehen, klicken Sie dann auf „Text in GIF einfügen“ und laden Sie das Ergebnis herunter." },
    { q: "Bleibt das GIF animiert?", a: "Ja. Jeder Frame behält sein Timing; der Text wird auf jeden einzelnen gezeichnet." },
    { q: "Kann ich klassischen Meme-Text erstellen?", a: "Ja. Wählen Sie Impact, setzen Sie das Häkchen bei „Großbuchstaben“ und behalten Sie die schwarze Kontur." },
    { q: "Kann der Text nur in einem Teil des GIFs erscheinen?", a: "Ja. Wählen Sie „Einige Frames“ und legen Sie mit den Reglern den ersten und letzten Frame fest." },
    { q: "Kann ich mehr als eine Beschriftung hinzufügen?", a: "Fügen Sie eine ein, laden Sie das GIF herunter, öffnen Sie es erneut und fügen Sie die nächste hinzu." },
    { q: "Kann ich den Text in eine Ecke setzen?", a: "Ja. Wählen Sie eine der neun Positionen, die Ecken eingeschlossen." },
    { q: "Kann ich auf mehrere Zeilen schreiben?", a: "Ja. Drücken Sie die Eingabetaste für eine neue Zeile; lange Zeilen brechen auch von selbst um." },
    { q: "Funktionieren Umlaute, Hindi, Russisch oder Emoji?", a: "Ja, mit jeder Schrift, die Ihr Gerät anzeigen kann." },
    { q: "Wird die Datei viel größer?", a: "Meist nur ein wenig. „GIF komprimieren“ kann sie anschließend verkleinern." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Wie bekomme ich Text auf ein GIF, ohne dass es unscharf wird?", a: "Die Frames selbst bleiben unverändert; nur der Text kommt hinzu, mit geglätteten Kanten. Eine passende Konturstärke hält ihn auch auf unruhigem Hintergrund scharf lesbar." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser beschriftet. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // AddTextToGifTool.tsx
    "Select a GIF": "GIF auswählen",
    "or drop a GIF here": "oder GIF hierher ziehen",
    "Please select a GIF.": "Bitte wählen Sie ein GIF aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Change image": "Datei wechseln",
    "Clear image": "Datei entfernen",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird bearbeitet… {p} %",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "Frame {i} · {s} s": "Frame {i} · {s} s", // i18n-same
    "Your file is processed in your browser and never uploaded.": "Ihre Datei wird in Ihrem Browser verarbeitet und nie hochgeladen.",
    "Preview": "Vorschau",
    "Result": "Ergebnis",
    "Download GIF": "GIF herunterladen",
    "Add text to GIF": "Text in GIF einfügen",
    "Text settings": "Texteinstellungen",
    "Text": "Text", // i18n-same
    "Your text here": "Ihr Text hier",
    "Long text wraps onto new lines by itself. Press Enter to start a new line.": "Langer Text bricht automatisch um. Drücken Sie die Eingabetaste für eine neue Zeile.",
    "The preview plays your text live. Add it to the GIF when it looks right.": "Die Vorschau zeigt Ihren Text live. Fügen Sie ihn in das GIF ein, sobald alles passt.",
    "Position": "Position", // i18n-same
    "Top left": "Oben links",
    "Top": "Oben",
    "Top right": "Oben rechts",
    "Left": "Links",
    "Middle": "Mitte",
    "Right": "Rechts",
    "Bottom left": "Unten links",
    "Bottom": "Unten",
    "Bottom right": "Unten rechts",
    "Font": "Schrift",
    "Impact (meme)": "Impact (Meme)",
    "Sans-serif": "Serifenlos",
    "Serif": "Serifenschrift",
    "Typewriter": "Schreibmaschine",
    "Size": "Größe",
    "CAPITAL LETTERS": "GROSSBUCHSTABEN",
    "Text colour": "Textfarbe",
    "Outline colour": "Konturfarbe",
    "Outline thickness": "Konturstärke",
    "Box behind the text": "Box hinter dem Text",
    "Show the text": "Text anzeigen",
    "Whole GIF": "Ganzes GIF",
    "Some frames": "Einige Frames",
    "From": "Von",
    "To": "Bis",
  },
};

export default content;
