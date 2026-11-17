import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-50kb-verkleinern (variant of compress-image,
 * preset targetKb 50). Primary query: „Bild auf 50 KB verkleinern“.
 * 50 KB is the typical PHOTOGRAPH limit on exam and government forms.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-50kb",
  locale: "de",
  name: "Bild auf 50 KB verkleinern",
  tagline:
    "Komprimieren Sie jedes Foto auf unter 50 KB – das Fotolimit, das die meisten Prüfungs-, Bewerbungs- und Behördenformulare setzen. Das schärfste JPG, das passt, mehrere Bilder auf einmal, in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 50 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 50 KB verkleinern: Handyfoto als scharfes JPG unter 50 KB für Behördenportale und Bewerbungen. Mehrere Fotos auf einmal, kostenlos, ohne Upload.",

  intro:
    "Wenn ein Antragsformular Ihnen schon einmal gesagt hat „Das Foto darf höchstens 50 KB groß sein“, ist diese Seite genau für diesen Moment gedacht. Fügen Sie das Foto direkt vom Handy hinzu – auch eines mit 5 MB –, und es kommt als JPG unter 50 KB zurück, in der höchsten Qualität, die passt. Das Tool senkt zuerst die Qualität und verringert die Pixelmaße nur, wenn es sein muss, damit Gesichter in der Größe, in der Formulare sie anzeigen, klar bleiben. Es verarbeitet JPG, PNG und WebP, auch mehrere Fotos auf einmal.",

  sections: [
    {
      heading: "Warum so viele Formulare 50 KB verlangen",
      id: "why-50kb",
      body: [
        "Prüfungsämter, Bewerbungsportale im öffentlichen Dienst, Stipendienprogramme und viele Behördenportale sammeln Fotos von unzähligen Antragstellern. Eine Obergrenze von 20–50 KB pro Foto hält Speicher und Ladezeiten im Rahmen, und ein Gesichtsfoto im Passbildstil braucht bei Weitem nicht die Auflösung einer Handykamera. 50 KB ist die häufigste Obergrenze für das Foto, während die Unterschrift meist niedriger bei 10–20 KB gedeckelt ist.",
        "Das Limit wird beim Hochladen automatisch geprüft. Darum scheitert eine Datei mit 51 KB, obwohl sie genauso aussieht wie eine mit 49 KB. Dieses Tool bleibt immer unter der Zahl, mit einem kleinen Sicherheitspuffer, der weiter unten erklärt wird.",
      ],
    },
    {
      heading: "50 KB sind eine Dateigröße, keine Bildgröße",
      id: "size-not-dimensions",
      body: [
        "Kilobyte messen Speicherplatz, nicht Breite und Höhe. Dieselben 50 KB können ein 1200-Pixel-Foto einer leeren Wand oder ein 400-Pixel-Foto einer belebten Straße enthalten, denn JPG gibt Bytes für Details aus, nicht für Fläche. Ein typisches Porträt im Passbildstil vor hellem Hintergrund passt bei rund 600 × 800 Pixeln in 50 KB und wirkt trotzdem scharf.",
        "Viele Formulare nennen zusätzlich Maße – 200 × 230 Pixel, 3,5 × 4,5 cm, 413 × 531 Pixel. Das ist eine eigene Anforderung: Bringen Sie das Foto zuerst mit „Bildgröße ändern“ auf diese Maße und komprimieren Sie es dann hier. Bei so kleinen Maßen passt das Foto meist in sehr hoher Qualität unter 50 KB.",
      ],
    },
    {
      heading: "So wird Ihr Foto unter 50 KB am besten",
      id: "best-photo",
      body: [
        "Beginnen Sie mit dem Originalfoto, nicht mit einer weitergeleiteten WhatsApp-Version oder einem Screenshot – jede frühere Kompression fügt Blockartefakte hinzu, die die nächste mitschleppen muss. Schneiden Sie vor dem Komprimieren auf Kopf und Schultern zu, damit das Budget ins Gesicht geht statt in den Raum dahinter.",
        "Ein schlichter, heller Hintergrund lässt sich viel besser komprimieren als ein gemusterter, und gleichmäßiges Tageslicht im Gesicht besser als harte Schatten. Verlangt das Formular einen weißen Hintergrund, fotografieren Sie vor einer weißen Wand oder nutzen Sie zuerst das Tool „Hintergrund entfernen“.",
      ],
    },
    {
      heading: "Warum ein Upload trotzdem abgelehnt werden kann",
      id: "rejections",
      body: [
        "Lehnt ein Portal ein Foto unter 50 KB ab, liegt es meist an einer anderen Regel: falsche Maße, eine Mindestgröße (manche Formulare verlangen zusätzlich mindestens 20 KB), ein anderes Dateiformat als JPG oder ein Dateiname mit Leerzeichen oder Sonderzeichen wie ä, ö, ü und ß. Prüfen Sie die Hinweise zu jedem dieser Punkte.",
        "Die KB-Zahl selbst ist hier nicht das Problem. Das Tool hält die Datei unter 50.000 Bytes, was durchgeht, ob das Formular ein Kilobyte als 1.000 oder 1.024 Bytes zählt – deshalb zeigt Ihr Computer sie vielleicht als 48 oder 49 KB an.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 50 KB",
  steps: [
    { title: "Foto hinzufügen", description: "Wählen Sie ein JPG, PNG oder WebP aus oder ziehen Sie es hierher – ein Handyfoto in voller Größe ist kein Problem." },
    { title: "Unter 50 KB komprimieren", description: "Das Limit von 50 KB ist bereits eingestellt. Behalten Sie JPG als Format, sofern das Formular nichts anderes verlangt." },
    { title: "Herunterladen", description: "Speichern Sie das Foto – es liegt unter 50 KB und ist bereit zum Hochladen. Mehrere Fotos werden als ZIP heruntergeladen." },
  ],

  features: [
    { icon: "badge", title: "Bereit für Antragsformulare", description: "Ein JPG unter 50 KB in der höchsten Qualität, die passt – genau das, was Prüfungs- und Behördenportale erwarten." },
    { icon: "photo_size_select_large", title: "Pixel sinken nur bei Bedarf", description: "Zuerst wird die Qualität gesenkt; die Maße werden nur verringert, wenn die Qualität allein 50 KB nicht erreicht." },
    { icon: "lock", title: "Privat von Grund auf", description: "Ihr Foto wird in Ihrem Browser verarbeitet, auf Ihrem eigenen Gerät – sinnvoll bei einem Ausweisfoto." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 50 KB?", a: "Fügen Sie das Foto hinzu, lassen Sie das Limit von 50 KB und das Format JPG eingestellt und klicken Sie auf „Komprimieren“. Die heruntergeladene Datei liegt garantiert unter 50 KB." },
    { q: "Wirkt ein 50-KB-Foto unscharf?", a: "Nicht in der Größe, in der Formulare es anzeigen. Ein Porträt passt bei rund 600 × 800 Pixeln in guter Qualität in 50 KB; Unschärfe kommt meist von einer bereits komprimierten Vorlage, also beginnen Sie mit dem Original." },
    { q: "Welche Pixelgröße sollte ein 50-KB-Foto haben?", a: "Eine feste Antwort gibt es nicht – es hängt davon ab, wie viel Detail das Foto hat. Nennt das Formular Maße, skalieren Sie zuerst darauf; wenn nicht, überlassen Sie es dem Tool, das so viele Pixel behält, wie passen." },
    { q: "Kann ich aus einem PNG oder Screenshot ein 50-KB-JPG machen?", a: "Ja. PNG- und WebP-Dateien werden dabei in JPG umgewandelt, transparente Bereiche werden weiß gefüllt oder mit einer anderen Hintergrundfarbe Ihrer Wahl." },
    { q: "Das Formular verlangt außerdem 200 × 230 Pixel. Was tun?", a: "Skalieren Sie zuerst mit „Bildgröße ändern“ auf 200 × 230 und komprimieren Sie das Ergebnis dann hier. In dieser Größe liegt das Foto in hoher Qualität deutlich unter 50 KB." },
    { q: "Sind 50 KB dasselbe wie 0,05 MB?", a: "Ja. Die Datei bleibt unter 50.000 Bytes, also 0,05 MB, und passt auch bei Formularen, die 1.024 Bytes pro Kilobyte zählen." },
    { q: "Kann ich mehrere Fotos auf einmal auf 50 KB verkleinern?", a: "Ja. Fügen Sie alle hinzu – jedes wird einzeln unter 50 KB gebracht, und Sie können sie zusammen als ZIP herunterladen." },
    { q: "Eignet sich ein 50-KB-Foto auch als E-Mail-Anhang für eine Bewerbung?", a: "Ja. Ein Foto unter 50 KB belastet kein Postfach und ist auf dem Bildschirm trotzdem klar. Für einen Ausdruck in größerem Format nehmen Sie lieber das Original." },
  ],

  security:
    "Das Foto bleibt auf Ihrem Gerät. Die Kompression auf 50 KB läuft in Ihrem Browser – nichts wird hochgeladen, nichts gespeichert, nichts ist für andere sichtbar. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
