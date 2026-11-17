import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-40kb-verkleinern (variant of compress-image,
 * preset targetKb 40). Primary query: „Bild auf 40 KB verkleinern“.
 * Angle: 40 KB as the SAFE target inside a 20–50 KB photo range, digitising
 * a printed studio photo, and colour casts.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-40kb",
  locale: "de",
  name: "Bild auf 40 KB verkleinern",
  tagline:
    "Komprimieren Sie ein Foto für Antragsformulare auf unter 40 KB – ein scharfes, natürlich wirkendes Gesicht bei exaktem Limit und die sichere Wahl für Fotofelder mit „20–50 KB“. Kostenlos, direkt in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 40 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 40 KB verkleinern: Passfoto als natürliches, scharfes JPG unter 40 KB – ideal für Fotofelder mit 20–50 KB. Foto komprimieren, kostenlos, ohne Upload.",

  intro:
    "40 KB ist auf vielen Antragsformularen ein eigenes Fotolimit, und zugleich die vernünftige Zielgröße, wenn ein Formular ein Foto „zwischen 20 KB und 50 KB“ verlangt: mit reichlich Abstand zum Minimum und reichlich Abstand zum Maximum. In dieser Größe behält ein Foto im Passbildstil natürliche Hauttöne und klare Details rund um die Augen. Fügen Sie Ihr Foto hinzu, und Sie erhalten ein JPG unter 40 KB in der höchsten Qualität, die passt.",

  sections: [
    {
      heading: "Ein sicheres Ziel innerhalb von 20–50 KB",
      id: "inside-range",
      body: [
        "Genau auf die Obergrenze eines Bereichs zu zielen ist riskant: Eine Datei mit 49,9 KB auf dem einen Computer kann von einem Formular, das anders misst, als 51 KB gewertet werden. 40 KB lassen nach beiden Seiten Luft, sodass das Foto angenommen wird, egal wie das Formular zählt – und es trägt trotzdem doppelt so viel Detail wie eine 20-KB-Datei.",
        "Nennt ein Formular den Bereich und liegt eine Ihrer Dateien bereits irgendwo darin, müssen Sie sie nicht erneut komprimieren – nur Dateien außerhalb des Bereichs brauchen eine Änderung.",
      ],
    },
    {
      heading: "Was ein 40-KB-Foto bewahrt",
      id: "detail",
      body: [
        "Ein Brustbild mit etwa 400 × 500 Pixeln passt in guter Qualität in 40 KB: genug, damit Wimpern und einzelne Haarsträhnen unterscheidbar bleiben, und mehr als genug, damit das Foto auf einer Ausweiskarte oder einem Prüfungsausweis scharf gedruckt wird.",
        "Schneiden Sie vor dem Komprimieren auf Kopf und Schultern zu, damit das Budget ins Gesicht fließt statt in den Raum dahinter.",
      ],
    },
    {
      heading: "Ein gedrucktes Passbild verwenden",
      id: "printed-photo",
      body: [
        "Haben Sie nur ein gedrucktes Foto vom Fotografen, legen Sie es bei Tageslicht flach hin und fotografieren Sie es senkrecht von oben, das Handy parallel zum Bild. Sehen Sie eine Spiegelung, kippen Sie den Abzug leicht vom Fenster weg, und füllen Sie den Bildausschnitt mit dem Foto.",
        "Schneiden Sie vor dem Komprimieren den weißen Rand und den Tisch weg. Eine saubere Kopie eines Abzugs lässt sich gut komprimieren, weil Studiofotos ohnehin gleichmäßig ausgeleuchtet sind und einen schlichten Hintergrund haben.",
      ],
    },
    {
      heading: "Natürliche Farben",
      id: "colours",
      body: [
        "Zimmerlampen färben die Haut orange, und manche Handykameras ziehen Gesichter ins Bläuliche oder Grünliche. Formulare, die Fotos prüfen, lehnen einen starken Farbstich manchmal ab, und Kompression kann ihn nicht beheben. Fotografieren Sie bei Tageslicht am Fenster mit ausgeschalteter Deckenbeleuchtung, dann wirken die Farben natürlich.",
      ],
    },
    {
      heading: "Ein Foto für mehrere Formulare",
      id: "several-forms",
      body: [
        "Die meisten Menschen brauchen dasselbe Passfoto für mehr als einen Antrag, und jedes Formular setzt sein eigenes Limit. Bewahren Sie das Original – die volle Datei vom Handy oder vom Fotostudio – in einem sicheren Ordner auf und erstellen Sie jede Upload-Version daraus: 40 KB für dieses Formular, 20 KB oder 100 KB für das nächste.",
        "Eine bereits komprimierte Kopie erneut zu komprimieren kostet jedes Mal etwas Detail. Ein Foto, das erst auf 20 KB gepresst wurde und dann 40 KB haben soll, sieht nie so gut aus wie eines, das aus dem Original entstanden ist. Benennen Sie jede Version nach ihrer Größe, etwa foto_40kb.jpg, damit Sie die richtige Datei im richtigen Formular hochladen.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Foto auf 40 KB",
  steps: [
    { title: "Foto hinzufügen", description: "Auf Kopf und Schultern zuschneiden und hinzufügen – JPG, PNG oder WebP." },
    { title: "Unter 40 KB komprimieren", description: "Das Limit von 40 KB ist bereits eingestellt; ändern Sie es, wenn Ihr Formular eine andere Zahl braucht." },
    { title: "Herunterladen", description: "Laden Sie das JPG herunter und hängen Sie es an Ihren Antrag an." },
  ],

  features: [
    { icon: "face", title: "Natürliche, scharfe Gesichter", description: "Etwa 400 × 500 Pixel in guter Qualität – Hauttöne und feine Details bleiben erhalten." },
    { icon: "verified_user", title: "Sicher innerhalb von Bereichen", description: "40 KB passen in Fotofelder mit 20–50 KB, mit Spielraum nach beiden Seiten." },
    { icon: "lock", title: "Privat", description: "Ihr Foto wird in Ihrem Browser komprimiert und bleibt auf Ihrem Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 40 KB?", a: "Fügen Sie es hier hinzu und klicken Sie auf „Komprimieren“ – das Limit von 40 KB ist bereits eingestellt. Sie erhalten ein JPG unter 40 KB in der höchsten Qualität, die passt." },
    { q: "Mein Formular verlangt 20 bis 50 KB – sind 40 KB richtig?", a: "Ja. 40 KB liegen sicher innerhalb des Bereichs, egal wie das Formular Kilobyte zählt." },
    { q: "Wie viele Pixel hat ein 40-KB-Foto?", a: "Bei einem Brustbild meist etwa 400 × 500 Pixel. Größere Fotos werden automatisch verkleinert, bis sie passen." },
    { q: "Wie mache ich aus einem gedruckten Passbild eine Datei?", a: "Fotografieren Sie es flach bei Tageslicht senkrecht von oben, ohne Spiegelung, schneiden Sie den Rand weg und komprimieren Sie es hier." },
    { q: "Warum wirkt mein Foto orange oder bläulich?", a: "Kunstlicht und manche Handy-Einstellungen färben das Foto. Nehmen Sie es bei Tageslicht neu auf; die Kompression übernimmt die Farben unverändert und kann sie nicht korrigieren." },
    { q: "Lässt sich ein 40-KB-Foto gut auf eine Ausweiskarte drucken?", a: "Ja. Ausweiskarten und Prüfungsausweise drucken das Foto klein, und 40 KB liefern dafür mehr als genug Detail." },
    { q: "Sind 40 KB dasselbe wie 0,04 MB?", a: "Ja, 40 KB sind 40.000 Bytes. Die Datei passt auch bei Formularen, die 1 KB als 1.024 Bytes zählen." },
    { q: "Sollte ich das Originalfoto nach dem Komprimieren behalten?", a: "Ja. Erstellen Sie jede benötigte Größe aus dem Original, nicht aus einer komprimierten Kopie – jede weitere Kompressionsrunde kostet etwas Detail." },
  ],

  security:
    "Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei normalen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
