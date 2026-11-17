import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/unterschrift-skalieren (signature-resizer). Target
 * query: „Unterschrift skalieren“, secondary „Unterschrift Bild“. Same
 * in-browser engine as /signature-resizer (lib/image/signature.ts).
 */
const content: ToolPageContent = {
  toolId: "signature-resizer",
  locale: "de",
  name: "Unterschrift skalieren",
  tagline:
    "Machen Sie aus dem Handyfoto Ihrer Unterschrift eine saubere Datei für Formulare: weißer Hintergrund, kräftige Tinte, beschnittene Ränder, die exakte Größe in Pixeln oder Zentimetern und eine Datei zwischen 10 und 20 KB — oder in jedem anderen Bereich. Kostenlos und privat, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Unterschrift skalieren – weißer Hintergrund | oMyImage",
  metaDescription:
    "Unterschrift skalieren, kostenlos und ohne Anmeldung: Unterschrift als Bild mit weißem Hintergrund, exakter Größe in px oder cm und passender Dateigröße in KB.",

  intro:
    "Online-Formulare sind bei der Unterschrift streng: schwarze oder blaue Tinte auf weißem Papier, eine feste Größe wie 140 × 60 Pixel und eine Dateigröße zwischen beispielsweise 10 und 20 KB. Ein Handyfoto scheitert an allem gleichzeitig — graues Papier, ein Schatten in einer Ecke, viel zu viele Pixel und eine Datei, die hundertmal zu groß ist. Dieses Tool behebt alles auf einmal: Es macht das Papier weiß und die Tinte dunkel, schneidet den leeren Rand weg, setzt die Unterschrift auf die gewünschte Größe und speichert ein JPG im passenden KB-Bereich — ohne dass Ihre Unterschrift jemals Ihr Gerät verlässt.",

  sections: [
    {
      heading: "Was Formulare verlangen",
      id: "requirements",
      body: [
        "Bewerbungsportale von Banken und anderen Arbeitgebern in Indien verlangen häufig eine Unterschrift mit 140 × 60 Pixeln in einer Datei zwischen 10 und 20 KB. Andere Formulare geben die Größe in Zentimetern an, etwa 4 × 2 cm oder 6 × 2 cm, und manche legen nur eine Obergrenze für die Dateigröße fest. Fast alle wollen dunkle Tinte auf schlichtem weißem Papier, und viele lehnen eine Unterschrift in Großbuchstaben ab.",
        "Wählen Sie unter „Ausgabegröße“ die passende Größe — die Zentimetermaße werden mit 300 dpi gezeichnet und mit diesem dpi-Wert gespeichert, damit sie in der angegebenen Größe drucken — und stellen Sie den KB-Bereich ein, den das Formular nennt. Für eine Größe, die nicht aufgeführt ist, wählen Sie „Eigene Größe“ und tragen Breite und Höhe in Pixeln ein.",
      ],
    },
    {
      heading: "Unterschreiben und fotografieren",
      id: "photographing",
      body: [
        "Unterschreiben Sie drei- oder viermal auf schlichtem weißem Papier mit einem schwarzen oder dunkelblauen Stift und wählen Sie die schönste Variante. Ein Kugelschreiber genügt; ein Gelstift oder Filzstift ergibt eine dunklere, gleichmäßigere Linie, die die Komprimierung besser übersteht.",
        "Fotografieren Sie das Blatt bei Tageslicht genau von oben und halten Sie das Smartphone parallel zum Papier, damit die Unterschrift nicht verzerrt wird. Füllen Sie den Großteil des Bildes mit der Unterschrift — den Rest schneidet das Tool weg — und achten Sie darauf, dass Ihr eigener Schatten nicht auf das Papier fällt. Ein Flachbettscan funktioniert genauso gut.",
      ],
    },
    {
      heading: "So wird der Hintergrund bereinigt",
      id: "cleaning",
      body: [
        "Papier ist auf einem Foto nie wirklich weiß und selten von einer Seite zur anderen gleich hell. Statt einer einzigen Schwelle für das ganze Bild schätzt das Tool rund um jeden Punkt, wie hell das Papier dort ist, und vergleicht jedes Pixel mit seiner eigenen Umgebung. Das Papier wird reinweiß, der Strich kräftig, und ein Schatten in einer Ecke verschwindet, statt zu einem grauen Fleck zu werden.",
        "Die Reinigungsstärke legt fest, wie viel helles Grau als Papier gilt. Erhöhen Sie sie, wenn Sprenkel oder ein schwacher Schatten zurückbleiben; senken Sie sie, wenn die dünnen Enden Ihrer Striche abbrechen. Als Tintenfarbe stehen reines Schwarz, ein dunkles Blau oder die eigene Farbe Ihres Stifts zur Wahl.",
      ],
    },
    {
      heading: "Größen und Dateilimits",
      id: "limits",
      body: [
        "Die Unterschrift wird ohne Verzerrung in die gewählte Größe eingepasst und mittig auf Weiß gesetzt. Bei einer Obergrenze wird die JPG-Qualität so hoch eingestellt, wie das Limit erlaubt. Bei einer Untergrenze — der Hälfte „mindestens 10 KB“ eines Bereichs — ist eine kleine, saubere Unterschrift oft zu einfach, um die Zahl von selbst zu erreichen; deshalb wird zuerst die Qualität auf das Maximum gesetzt.",
        "Liegt eine winzige Größe wie 140 × 60 Pixel auch bei voller Qualität noch unter dem Minimum, wird die Datei mit einem leeren Datenblock aufgefüllt, bis sie es erreicht. Die Unterschrift selbst ändert sich dabei um kein einziges Pixel; die Seite weist Sie darauf hin, wenn das passiert ist.",
        "Beide Enden eines Bereichs werden auf der sicheren Seite ausgelegt: „mindestens 10 KB“ wird zu mindestens 10.240 Byte und „höchstens 20 KB“ zu höchstens 20.000 Byte, sodass die Datei besteht, egal ob das Formular ein Kilobyte als 1.000 oder 1.024 Byte zählt.",
      ],
    },
  ],

  howToTitle: "So skalieren Sie eine Unterschrift für ein Online-Formular",
  steps: [
    { title: "Foto der Unterschrift hinzufügen", description: "Ein Foto oder Scan Ihrer Unterschrift auf weißem Papier — JPG, PNG oder WEBP." },
    { title: "Größe und KB-Bereich wählen", description: "Wählen Sie 140 × 60 px, ein Zentimetermaß oder eine eigene Größe und den Dateigrößenbereich, den das Formular verlangt." },
    { title: "JPG herunterladen", description: "Prüfen Sie die Vorschau und laden Sie dann eine saubere Unterschrift herunter, bereit zum Hochladen." },
  ],

  features: [
    { icon: "draw", title: "Sauberer weißer Hintergrund", description: "Schatten und graues Papier werden entfernt, die Tinte wird kräftig — in Schwarz, Blau oder ihrer eigenen Farbe." },
    { icon: "crop", title: "Exakte Größe", description: "140 × 60 px, 4 × 2 cm, 6 × 2 cm oder jede andere Größe, nachdem der leere Rand weggeschnitten wurde." },
    { icon: "lock", title: "Kein Upload", description: "Ihre Unterschrift wird in Ihrem Browser verarbeitet und bleibt auf Ihrem Gerät." },
  ],

  faqs: [
    { q: "Wie bringe ich meine Unterschrift auf 10 bis 20 KB?", a: "Fügen Sie ein Foto Ihrer Unterschrift hinzu und wählen Sie unter „Dateigröße“ den Bereich 10 bis 20 KB sowie die Pixelgröße, die Ihr Formular verlangt. Das heruntergeladene JPG liegt innerhalb des Bereichs." },
    { q: "Wie groß sollte eine Unterschrift für Online-Formulare sein?", a: "So groß, wie das Formular es angibt. 140 × 60 Pixel und 10 bis 20 KB sind bei indischen Bewerbungsportalen eine häufige Vorgabe; andere Formulare nutzen Zentimetermaße wie 4 × 2 cm. Lesen Sie die Anleitung und wählen Sie hier dieselben Werte." },
    { q: "Wie mache ich den Hintergrund meiner Unterschrift weiß?", a: "Lassen Sie „Hintergrund bereinigen“ eingeschaltet. Das Papier wird reinweiß und die Tinte kräftig, selbst wenn das Foto bei ungleichmäßigem Licht entstanden ist." },
    { q: "Kann meine Unterschrift blau bleiben?", a: "Ja. Wählen Sie „Blau“ für ein gleichmäßiges Dunkelblau oder „Original“, um die eigene Farbe Ihres Stifts zu behalten. Wählen Sie „Schwarz“, wenn das Formular schwarze Tinte verlangt." },
    { q: "Warum wirkt meine Unterschrift nach dem Bereinigen zerrissen?", a: "Die Bereinigung ist für eine dünne oder helle Linie zu stark. Senken Sie die Reinigungsstärke oder unterschreiben Sie erneut mit einem dunkleren Stift." },
    { q: "Warum wurde meine Datei aufgefüllt?", a: "Eine kleine, saubere Unterschrift kann einfacher sein, als die Mindestgröße des Formulars zulässt. Nachdem die Qualität auf das Maximum gesetzt wurde, ergänzt das Tool leere Daten bis zum Minimum; das Bild selbst bleibt unverändert." },
    { q: "Kann ich eine eingescannte Unterschrift verwenden?", a: "Ja. Ein Scan ist ideal — gleichmäßiges Licht und eine flache Seite. Fügen Sie den Scan hinzu, und das Tool beschneidet und skaliert ihn auf dieselbe Weise." },
    { q: "Wird meine Unterschrift irgendwo hochgeladen?", a: "Nein. Bereinigen, Skalieren und Speichern geschehen vollständig in Ihrem Browser; die Unterschrift verlässt nie Ihr Gerät." },
    { q: "Kann ich das Unterschrift-Bild auch in ein Word- oder PDF-Dokument einfügen?", a: "Ja. Das heruntergeladene JPG lässt sich wie jedes andere Bild in ein Dokument einfügen. Ob eine eingefügte Bild-Unterschrift für einen bestimmten Vertrag oder Antrag genügt, entscheidet die jeweilige Stelle — fragen Sie im Zweifel dort nach." },
  ],

  security:
    "Ihre Unterschrift wird vollständig in Ihrem Browser bereinigt, skaliert und gespeichert. Sie wird nie hochgeladen, gespeichert oder von jemand anderem gesehen.",

  ui: {
    // SignatureResizerTool.tsx
    "Select a signature": "Unterschrift auswählen",
    "or drop a photo or scan of your signature here": "oder ein Foto oder einen Scan Ihrer Unterschrift hierher ziehen",
    "Change image": "Bild ändern",
    "Clear image": "Bild entfernen",
    "Please select an image.": "Bitte wählen Sie ein Bild aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
    "Signature settings": "Einstellungen für die Unterschrift",
    "Preview": "Vorschau",
    "Output size": "Ausgabegröße",
    "Trimmed, original shape": "Beschnitten, ursprüngliche Form",
    "4 × 2 cm": "4 × 2 cm", // i18n-same
    "6 × 2 cm": "6 × 2 cm", // i18n-same
    "Custom size": "Eigene Größe",
    "Width (px)": "Breite (px)",
    "Height (px)": "Höhe (px)",
    "File size": "Dateigröße",
    "No limit": "Kein Limit",
    "Under {size}": "Unter {size}",
    "{min} to {max}": "{min} bis {max}",
    "Minimum (KB)": "Minimum (KB)", // i18n-same
    "Maximum (KB)": "Maximum (KB)", // i18n-same
    "KB": "KB", // i18n-same
    "Trim empty space": "Leeren Rand wegschneiden",
    "Clean the background": "Hintergrund bereinigen",
    "Makes the paper pure white and the ink solid, even in uneven light.": "Macht das Papier reinweiß und die Tinte kräftig, auch bei ungleichmäßigem Licht.",
    "Cleaning strength": "Reinigungsstärke",
    "Ink colour": "Tintenfarbe",
    "Black": "Schwarz",
    "Blue": "Blau",
    "Original": "Original", // i18n-same
    "Download signature": "Unterschrift herunterladen",
    "Saving…": "Wird gespeichert…",
    "Output: {w} × {h} px": "Ergebnis: {w} × {h} px",
    "Last download: {size}": "Letzter Download: {size}",
    "The file was padded to reach the minimum size; the picture itself is unchanged.": "Die Datei wurde aufgefüllt, um die Mindestgröße zu erreichen; das Bild selbst ist unverändert.",
    "No signature found — try a photo with darker ink on plain paper.": "Keine Unterschrift gefunden — versuchen Sie ein Foto mit dunklerer Tinte auf schlichtem Papier.",
    "Your signature is processed in your browser and never uploaded.": "Ihre Unterschrift wird in Ihrem Browser verarbeitet und nie hochgeladen.",
    "Could not get under {size} — the smallest file is used.": "Unter {size} war nicht möglich — die kleinste Datei wird verwendet.",
    "The maximum must be larger than the minimum.": "Das Maximum muss größer als das Minimum sein.",
  },
};

export default content;
