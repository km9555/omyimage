import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-30kb-verkleinern (variant of compress-image,
 * preset targetKb 30). Primary query: „Bild auf 30 KB verkleinern“.
 * Angle: the form PHOTO limit — crop, plain background, resize-then-compress,
 * and the KB-vs-KiB confusion that makes a 29 KB file look „too big“.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-30kb",
  locale: "de",
  name: "Bild auf 30 KB verkleinern",
  tagline:
    "Komprimieren Sie ein Foto auf unter 30 KB für Prüfungs-, Zulassungs- und Bewerbungsformulare – mit einem Gesicht, das auf Prüfungsausweis oder Ausweisdokument scharf bleibt. Exaktes Limit, im Browser, kostenlos.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 30 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 30 KB verkleinern: Bewerbungsfoto oder Passfoto als scharfes JPG unter 30 KB. Foto komprimieren direkt im Browser – kostenlos und ohne Anmeldung.",

  intro:
    "30 KB ist eine verbreitete Obergrenze für das Foto in Prüfungs-, Zulassungs- und Bewerbungsformularen, manchmal auch für die Unterschrift. Das reicht für ein klares Foto im Passbildstil – wenn das Foto dafür vorbereitet ist. Fügen Sie Ihr Bild hier hinzu, und Sie erhalten ein JPG unter 30 KB in der höchsten Qualität, die passt. Die Tipps unten entscheiden darüber, ob ein Gesicht gestochen scharf oder verschmiert wirkt.",

  sections: [
    {
      heading: "Das Gesicht behalten, den Rest weglassen",
      id: "face-first",
      body: [
        "Formulare wollen ein Brustbild, also ist alles andere – das Zimmer, Ihr Schoß, die Decke – verschwendeter Platz. Schneiden Sie vor dem Komprimieren auf Kopf und Schultern zu, dann fließen die vollen 30 KB ins Gesicht. In dieser Größe behält ein Foto mit etwa 350 × 450 Pixeln gute Details bei Augen und Haaren.",
        "Blicken Sie gerade in die Kamera, sorgen Sie für gleichmäßiges Licht im Gesicht und vermeiden Sie starke Schatten auf einer Seite. Schatten und Rauschen sind feine Details, die der Kompressor speichern muss; gleichmäßiges Licht gibt ihm weniger zu tun und ein saubereres Ergebnis.",
      ],
    },
    {
      heading: "Warum ein schlichter Hintergrund hilft",
      id: "background",
      body: [
        "Die JPG-Kompression speichert glatte Flächen sehr günstig und unruhige sehr teuer. Eine einfarbig weiße oder helle Wand kostet fast nichts, sodass der Großteil der 30 KB ins Gesicht geht. Ein Bücherregal, gemusterte Vorhänge oder ein sonniger Garten hinter Ihnen können allein die Hälfte des Budgets verschlingen.",
        "Wurde Ihr Foto vor einem unruhigen Hintergrund aufgenommen, kann das Tool „Hintergrundfarbe ändern“ ihn zuerst durch schlichtes Weiß oder Blau ersetzen. Komprimieren Sie das Ergebnis dann hier.",
      ],
    },
    {
      heading: "Wenn das Formular auch Pixelmaße nennt",
      id: "dimensions",
      body: [
        "Manche Formulare verlangen beides: unter 30 KB und zum Beispiel 200 × 230 Pixel. Gehen Sie in dieser Reihenfolge vor – erst mit „Bildgröße ändern“ auf die exakten Maße bringen, dann hier auf 30 KB komprimieren. Wer zuerst komprimiert und danach skaliert, speichert das JPG ein zweites Mal und verliert Qualität ohne Grund.",
        "Nennt das Formular stattdessen eine Größe in Zentimetern, etwa 3,5 × 4,5 cm, beschreibt es das Seitenverhältnis des Fotos. Schneiden Sie auf diese Form zu und komprimieren Sie anschließend.",
      ],
    },
    {
      heading: "„Meine Datei hat 29 KB, aber das Formular sagt, sie sei zu groß“",
      id: "kb-kib",
      body: [
        "Computer zählen Kilobyte auf zwei Arten. Windows zeigt Größen in Einheiten von 1.024 Bytes an, viele Websites prüfen Limits dagegen in Einheiten von 1.000. Das Tool hält die Datei unter 30.000 Bytes und damit in beiden Fällen unter dem Limit.",
        "Lehnt ein Formular das Foto trotzdem ab, liegt es meist an etwas anderem: dem falschen Format (PNG statt JPG), einer zusätzlich geforderten Mindestgröße oder Maßen außerhalb des erlaubten Bereichs. Lesen Sie die Fehlermeldung genau – meist steht darin, woran es hakt.",
      ],
    },
    {
      heading: "Das Foto mit dem Smartphone aufnehmen",
      id: "phone",
      body: [
        "Nutzen Sie die Hauptkamera auf der Rückseite statt der Selfie-Kamera und lassen Sie das Foto von jemandem aus etwa 1,5 Metern Entfernung auf Augenhöhe machen. Stellen Sie sich vor eine schlichte helle Wand, mit Blick zu einem Fenster, sodass Tageslicht gleichmäßig auf Ihr Gesicht fällt, und halten Sie die Schultern gerade zur Kamera.",
        "Schalten Sie Beauty-Filter und Porträtmodus aus – beide weichzeichnen Kanten und fügen Effekte hinzu, die Formulare nicht erlauben – und machen Sie mehrere Aufnahmen. Wählen Sie die schärfste: Kompression kann ein Foto kleiner machen, aber kein verwackeltes scharf.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Foto auf 30 KB",
  steps: [
    { title: "Foto hinzufügen", description: "Auf Kopf und Schultern zuschneiden und hinzufügen – JPG, PNG oder WebP." },
    { title: "Unter 30 KB komprimieren", description: "Das Limit von 30 KB ist bereits eingestellt; ändern Sie es, wenn Ihr Formular etwas anderes verlangt." },
    { title: "Herunterladen und hochladen", description: "Laden Sie das JPG herunter und hängen Sie es an Ihr Formular an." },
  ],

  features: [
    { icon: "face", title: "Gesichter bleiben klar", description: "Die höchste Qualität, die unter 30 KB passt – Augen und Gesichtszüge bleiben scharf." },
    { icon: "aspect_ratio", title: "Passt zum Skalieren", description: "Erst auf die Pixelmaße des Formulars bringen, dann komprimieren – die richtige Reihenfolge für die beste Qualität." },
    { icon: "lock", title: "Kein Upload", description: "Ihr Foto wird in Ihrem Browser komprimiert, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 30 KB?", a: "Fügen Sie es hier hinzu und klicken Sie auf „Komprimieren“ – das Limit von 30 KB ist bereits eingestellt. Sie erhalten ein JPG unter 30 KB in der höchsten Qualität, die passt." },
    { q: "Welche Pixelgröße passt in 30 KB?", a: "Ein Brustbild mit etwa 350 × 450 Pixeln behält gute Details. Größere Fotos werden automatisch verkleinert, bis sie passen." },
    { q: "Ist das Foto deutlich genug für einen Prüfungsausweis?", a: "Ja. Solche Ausweise drucken das Foto klein, und dafür sind 30 KB reichlich, wenn das Foto aufs Gesicht zugeschnitten und gleichmäßig beleuchtet ist." },
    { q: "Erst skalieren oder erst komprimieren?", a: "Erst skalieren, dann komprimieren. Umgekehrt wird das JPG zweimal gespeichert und verliert Qualität, die nicht verloren gehen müsste." },
    { q: "Macht ein schlichter Hintergrund wirklich einen Unterschied?", a: "Ja. Einfarbige Flächen belegen in einem JPG sehr wenig Platz, also bleibt mehr von den 30 KB für Ihr Gesicht. Ein unruhiger Hintergrund kann die Hälfte des Budgets verbrauchen." },
    { q: "Windows zeigt eine andere Größe als das Formular – was stimmt?", a: "Beides, in unterschiedlichen Einheiten. Das Tool hält die Datei unter 30.000 Bytes, sodass sie passt, egal ob das Formular 1 KB als 1.000 oder 1.024 Bytes zählt." },
    { q: "Kann ich auch eine Unterschrift auf 30 KB bringen?", a: "Ja. Fügen Sie Foto und Unterschrift zusammen hinzu; beide kommen unter 30 KB zurück. Erlaubt das Unterschriftenfeld weniger, wiederholen Sie den Vorgang mit dieser Zahl." },
    { q: "Kann ich das Foto mit dem Handy aufnehmen?", a: "Ja. Nutzen Sie die Rückkamera, stehen Sie bei Tageslicht etwa 1,5 Meter entfernt vor einer schlichten Wand und schneiden Sie vor dem Komprimieren auf 30 KB auf Kopf und Schultern zu." },
  ],

  security:
    "Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei normalen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
