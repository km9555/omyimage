import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bildgroesse-in-kb-reduzieren (variant of compress-image,
 * target-size mode with no limit pre-filled). Primary query: „Bildgröße in KB
 * reduzieren“; secondary: „Bilder verkleinern KB“, „Foto KB reduzieren“.
 * The hub page: any limit, and what a KB limit means.
 */
const content: ToolPageContent = {
  toolId: "reduce-image-size-in-kb",
  locale: "de",
  name: "Bildgröße in KB reduzieren",
  tagline:
    "Geben Sie ein beliebiges Limit ein – 20 KB, 50 KB, 100 KB oder 1 MB – und erhalten Sie das schärfste JPG, das darunter passt. Mehrere Bilder auf einmal, kostenlos und direkt in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bildgröße in KB reduzieren – kostenlos & online | oMyImage",
  metaDescription:
    "Bildgröße in KB reduzieren: Limit eingeben, etwa 50 KB, 100 KB oder 1 MB, und das schärfste JPG laden. Bilder verkleinern in KB, im Stapel und ohne Upload.",

  intro:
    "Upload-Formulare fragen nicht nach einer Qualitätsstufe, sondern nach einer Zahl: „Foto maximal 50 KB“, „Unterschrift 10–20 KB“, „Dateigröße höchstens 1 MB“. Genau so funktioniert dieses Tool. Fügen Sie Ihre Bilder hinzu, tippen Sie das Limit in KB oder MB ein, und jedes Bild kommt darunter zurück – in der höchsten Qualität, die hineinpasst. Die Auflösung in Pixeln wird nur verringert, wenn die Qualität allein nicht reicht. So können Sie die Foto-KB reduzieren, ohne zu raten. Unterstützt werden JPG, PNG und WebP, ganze Stapel auf einmal, und Ihre Fotos werden nirgendwohin hochgeladen.",

  sections: [
    {
      heading: "Die Dateigröße festlegen, nicht die Qualität",
      id: "size-first",
      body: [
        "Der übliche Weg, ein Foto für ein Formular zu verkleinern, ist Ausprobieren: Qualitätsregler runter, speichern, Dateigröße im Explorer prüfen, noch einmal. Jede Runde ist eine neue Kompression, und jede erneute Kompression eines bereits komprimierten JPGs kostet ein Stück Detail.",
        "Hier nennen Sie stattdessen das Ergebnis, das Sie brauchen. Das Tool kodiert das Bild im Hintergrund mehrmals, nähert sich der höchsten Qualität, deren Datei noch unter Ihrem Limit bleibt, und gibt Ihnen genau diese Version. Ein verrauschtes 12-Megapixel-Handyfoto und ein sauberer Screenshot brauchen völlig unterschiedliche Einstellungen, um 100 KB zu erreichen – Sie müssen nicht wissen, welche, denn die Suche läuft für jedes Bild einzeln.",
      ],
    },
    {
      heading: "Was „KB“ im Formular bedeutet",
      id: "kb-meaning",
      body: [
        "Ein Kilobyte sind je nach Zählweise 1.000 oder 1.024 Bytes. Der Windows-Explorer rechnet in Einheiten von 1.024, die meisten Smartphones und Macs sowie viele Webformulare mit 1.000. Der Unterschied beträgt nur 2,4 %, reicht aber, damit eine Datei mit 50,5 KB von einem Formular abgelehnt wird, das „50 KB“ erlaubt.",
        "Das Tool umgeht diesen Streit, indem es die strengere Lesart ansetzt: Ein Limit von 50 KB bedeutet unter 50.000 Bytes. Diese Datei passt sowohl bei Formularen, die mit 1.000 Bytes pro Kilobyte rechnen, als auch bei solchen mit 1.024. Ihr Dateimanager zeigt das Ergebnis vielleicht als 48 oder 49 KB an – dieser kleine Puffer ist Absicht.",
      ],
    },
    {
      heading: "KB reduzieren ist nicht dasselbe wie Pixel reduzieren",
      id: "kb-vs-pixels",
      body: [
        "Dateigröße und Bildmaße sind zwei verschiedene Dinge, und manche Formulare verlangen beides: „200 × 230 Pixel, unter 50 KB“. Die Pixel bestimmen, wie groß das Bild ist; die Kilobytes, wie viel Speicher es belegt. Ein Foto mit 4000 Pixeln Breite lässt sich auf 100 KB bringen, und ein Bild mit 400 Pixeln kann 300 KB wiegen, wenn es als unkomprimiertes PNG gespeichert ist.",
        "Gibt das Formular genaue Pixelmaße vor, bringen Sie das Bild zuerst mit dem Tool „Bildgröße ändern“ auf diese Maße und drücken die Datei danach hier unter das KB-Limit. Nennt es nur ein KB-Limit, lassen Sie die Maße, wie sie sind – dieses Tool verkleinert sie selbst, und nur so weit wie nötig.",
      ],
    },
    {
      heading: "Typische Limits und woher sie kommen",
      id: "common-limits",
      body: [
        "Unterschriften und Daumenabdrücke in Prüfungs- und Bewerbungsformularen sind meist auf 10–20 KB begrenzt. Passbildartige Fotos in denselben Formularen liegen typischerweise bei 20–50 KB, manchmal bei 100 KB. Online-Bewerbungsportale, Uni-Portale sowie Visa- oder Ausweisanträge erlauben für ein Foto oder ein eingescanntes Dokument oft 100–300 KB, während allgemeine Uploads – Hausarbeiten, Support-Tickets, Kleinanzeigen, E-Mail-Anhänge – Bilder eher bei 1–2 MB deckeln.",
        "Für jedes dieser häufigen Limits gibt es eine eigene Seite mit Tipps für genau diese Größe, oben verlinkt. Diese Seite ist für alles andere da: jede Zahl, die Sie eintippen, in KB oder MB.",
      ],
    },
  ],

  howToTitle: "So reduzieren Sie die Bildgröße in KB",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie eine oder mehrere JPG-, PNG- oder WebP-Dateien aus oder ziehen Sie sie hierher." },
    { title: "Limit eingeben", description: "Tragen Sie die Maximalgröße in KB oder MB ein oder tippen Sie auf einen gängigen Wert wie 50 KB oder 100 KB." },
    { title: "Komprimieren und herunterladen", description: "Jedes Bild wird unter dem Limit gespeichert; laden Sie eine Datei einzeln oder alle als ZIP herunter." },
  ],

  features: [
    { icon: "straighten", title: "Jede gewünschte Größe", description: "Geben Sie ein beliebiges Limit in KB oder MB ein – nicht nur eine feste Auswahl – und jedes Bild landet darunter." },
    { icon: "high_quality", title: "Beste Qualität, die passt", description: "Das Tool sucht die höchste Qualität unter Ihrem Limit und verringert die Pixel nur, wenn es sein muss." },
    { icon: "lock", title: "Bleibt auf Ihrem Gerät", description: "Die Kompression läuft auf Ihrem Gerät – Ausweisfotos, Unterschriften und Dokumente bleiben dort." },
  ],

  faqs: [
    { q: "Wie reduziere ich die Größe eines Fotos in KB?", a: "Fügen Sie das Foto hinzu, geben Sie die benötigte Größe in KB ein (oder tippen Sie auf einen der gängigen Werte) und klicken Sie auf „Komprimieren“. Die heruntergeladene Datei liegt garantiert unter dieser Zahl, in der besten Qualität, die hineinpasst." },
    { q: "Ist „Bilder verkleinern in KB“ dasselbe wie Bilder komprimieren?", a: "Im Alltag ja. Ein Bild „in KB“ zu verkleinern heißt, die Dateigröße zu verringern – genau das macht eine Kompression. Dieses Tool verkleinert zusätzlich die Pixelmaße, wenn die Kompression allein das Limit nicht erreicht." },
    { q: "Warum zeigt meine Datei 49 KB an, obwohl ich 50 KB angegeben habe?", a: "Weil das Tool unter 50.000 Bytes bleibt, was Ihr Computer als etwa 48,8 Kilobyte zu je 1.024 Bytes anzeigen kann. Der Puffer sorgt dafür, dass die Datei bei beiden Zählweisen eines Formulars durchgeht." },
    { q: "Kann ich eine genaue Größe wie 37 KB eingeben?", a: "Ja. Jede ganze Zahl oder Dezimalzahl funktioniert, in KB oder MB. Die gängigen Größen sind nur Abkürzungen." },
    { q: "Ändern sich beim Reduzieren der KB die Bildmaße?", a: "Nur wenn es nötig ist. Das Tool senkt zuerst die Qualität und verringert Breite und Höhe nur, wenn selbst eine niedrige Qualität noch über Ihrem Limit läge." },
    { q: "Welches Format sollte ich wählen?", a: "JPG – es sei denn, Sie wissen, dass die Website WebP annimmt. Fast jedes Upload-Formular akzeptiert JPG; WebP erreicht dieselbe Größe mit etwas besserer Qualität, wird aber von manchen älteren Portalen noch abgelehnt." },
    { q: "Was passiert mit einem transparenten PNG?", a: "JPG kann keine Transparenz speichern, deshalb werden transparente Bereiche mit der Hintergrundfarbe Ihrer Wahl gefüllt – standardmäßig Weiß, was die meisten Formulare erwarten." },
    { q: "Kann ich viele Fotos auf einmal auf dieselbe Größe bringen?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten; jedes wird einzeln auf dasselbe Limit komprimiert, und Sie können alle zusammen als ZIP herunterladen." },
    { q: "Werden meine Bilder hochgeladen?", a: "In aller Regel nicht. Die Verkleinerung läuft in Ihrem Browser auf Ihrem Gerät. Nur ein Bild über etwa 16 Megapixel, das für einen Browser-Tab zu groß ist, wird auf unserem Server verarbeitet und nach etwa einer Stunde gelöscht." },
  ],

  security:
    "Ihre Bilder bleiben auf Ihrem Gerät. Das Reduzieren der Größe in KB geschieht in Ihrem Browser – nichts wird hochgeladen, gespeichert oder von anderen gesehen, was bei einem Ausweisfoto oder einer Unterschrift wichtig ist. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
