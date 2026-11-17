import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-100kb-verkleinern (variant of compress-image,
 * preset targetKb 100). Primary query: „Bild auf 100 KB verkleinern“;
 * secondary „Foto auf 100 KB verkleinern“. Angle: 100 KB is where photos stop
 * suffering — and where scanned DOCUMENTS start.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-100kb",
  locale: "de",
  name: "Bild auf 100 KB verkleinern",
  tagline:
    "Komprimieren Sie Fotos und eingescannte Dokumente auf unter 100 KB – für Antragsformulare, Ausweis-Uploads und E-Mails. Die höchste Qualität, die passt, viele Bilder auf einmal, verarbeitet in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 100 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 100 KB verkleinern: Fotos und Scans als scharfes JPG unter 100 KB. Foto auf 100 KB verkleinern für Bewerbung, Ausweis-Upload und E-Mail – ohne Upload.",

  intro:
    "100 KB ist das Limit, das Ihnen bei Online-Bewerbungen, Uni- und Visaanträgen, bei der Identitätsprüfung und Ausweis-Uploads begegnet – überall dort, wo eine Website ein Foto oder ein eingescanntes Dokument möchte, aber keine Kameradatei in voller Größe. Es ist ein komfortables Budget: Ein Porträt oder eine Textseite passt hinein, ohne sichtbaren Schaden, solange die Datei keine Bytes für Pixel verschwendet, die niemand sieht. Fügen Sie Ihre Bilder hinzu, und jedes kommt als JPG unter 100 KB in der besten Qualität zurück, die das Limit erlaubt.",

  sections: [
    {
      heading: "Ab 100 KB ist Qualität kein Problem mehr",
      id: "comfortable",
      body: [
        "Unter etwa 50 KB ist Kompression ein Kompromiss, den man sieht. Bei 100 KB meist nicht mehr: Ein Porträt passt bei rund 900 × 1200 Pixeln in guter Qualität hinein – weit mehr, als ein Antragsformular anzeigt, und genug für einen Druck in Passbildgröße.",
        "Deshalb senkt das Tool immer zuerst leicht die Qualität und behält Ihre Pixel. Bei den meisten Handyfotos muss es zusätzlich die Maße verringern – auf etwa 1000–1500 Pixel an der langen Seite –, weil ein 12-Megapixel-Foto mehr Detail trägt, als 100 KB in irgendeiner vernünftigen Qualität fassen können.",
      ],
    },
    {
      heading: "Eingescannte Dokumente unter 100 KB",
      id: "documents",
      body: [
        "Formulare mit einem 100-KB-Limit wollen oft eher ein Dokument als ein Gesicht: ein Zeugnis, einen Ausweis, eine Urkunde, eine Meldebescheinigung oder eine Nebenkostenabrechnung. Ein Handyfoto einer Seite besteht großteils aus weißem Papier, und Papier mit ungleichmäßigem Licht ist überraschend teuer zu speichern, weil jeder leichte Schatten ein Detail ist, das das JPG beschreiben muss.",
        "Fotografieren Sie die Seite flach, bei gleichmäßigem Tageslicht und bildfüllend, und schneiden Sie den Tisch drumherum weg. Bei reinen Textseiten sorgt eine vorherige Umwandlung mit „Bild schwarz weiß“ dafür, dass mehr von den 100 KB in scharfe Schrift fließt. Will das Formular ein PDF statt eines Bildes, komprimieren Sie den Scan zuerst hier und wandeln ihn dann mit „Bild in PDF umwandeln“ um.",
      ],
    },
    {
      heading: "Mehrere Fotos für eine E-Mail",
      id: "email",
      body: [
        "Handyfotos mit je 3–5 MB lassen eine E-Mail mit zehn Bildern scheitern oder landen beim Empfänger als 40-MB-Download. Bei 100 KB pro Bild ergeben dieselben zehn Fotos etwa 1 MB – klein genug für jeden Mail-Anbieter und auf dem Bildschirm trotzdem völlig klar.",
        "Fügen Sie den ganzen Satz auf einmal hinzu: Jedes Bild wird einzeln auf dasselbe Limit komprimiert, und der ZIP-Download hält alles zusammen.",
      ],
    },
    {
      heading: "Ausweisfotos für die Online-Identifizierung unter 100 KB",
      id: "kyc",
      body: [
        "Banken, Zahlungsdienste und Mobilfunkanbieter, die Identitäten online prüfen, wollen meist ein klares Foto des Ausweises unter einem Limit wie 100 KB und lehnen alles ab, was Mensch oder Maschine nicht lesen kann. Abgelehnt wird ein Ausweis dabei fast nie wegen der Dateigröße, sondern wegen Spiegelungen auf der laminierten Karte, einer abgeschnittenen Ecke, einer Karte, die nur einen kleinen Teil des Bildes füllt, oder einer verwackelten Nummer.",
        "Legen Sie den Ausweis auf eine dunkle, einfarbige Fläche, fotografieren Sie ihn ohne Blitz senkrecht von oben und schneiden Sie vor dem Komprimieren auf seine Kanten zu. Ein eng zugeschnittener Ausweis passt mühelos in 100 KB, mit jeder Ziffer scharf, weil das Budget für die Karte ausgegeben wird statt für den Tisch drumherum.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 100 KB",
  steps: [
    { title: "Bilder oder Scans hinzufügen", description: "Wählen Sie JPG-, PNG- oder WebP-Dateien aus oder ziehen Sie sie hierher – Fotos, gescannte Seiten oder Screenshots." },
    { title: "Unter 100 KB komprimieren", description: "Das Limit von 100 KB ist bereits eingestellt; ändern Sie die Zahl, wenn Ihr Formular eine andere Größe erlaubt." },
    { title: "Herunterladen", description: "Jede Datei kommt unter 100 KB zurück; laden Sie sie einzeln oder gemeinsam als ZIP herunter." },
  ],

  features: [
    { icon: "description", title: "Fotos und Dokumente", description: "Funktioniert bei einer eingescannten Urkunde oder einem Ausweis genauso gut wie bei einem Porträt – beides passt sauber in 100 KB." },
    { icon: "burst_mode", title: "Ein ganzer Satz auf einmal", description: "Komprimieren Sie alle Fotos und Scans für einen Antrag in einem Durchgang und laden Sie sie als ZIP herunter." },
    { icon: "lock", title: "Dokumente bleiben auf Ihrem Gerät", description: "Ausweise und Urkunden werden in Ihrem Browser komprimiert, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 100 KB?", a: "Fügen Sie das Foto hinzu und klicken Sie auf „Komprimieren“ – das Limit von 100 KB ist bereits eingestellt. Sie erhalten ein JPG unter 100 KB in der höchsten Qualität, die passt." },
    { q: "Reichen 100 KB für ein Passfoto?", a: "Locker. Ein Foto in Passbildgröße braucht nur wenige hundert Pixel Breite, und die passen in sehr hoher Qualität in 100 KB." },
    { q: "Wie bekomme ich ein eingescanntes Dokument unter 100 KB?", a: "Fotografieren oder scannen Sie die Seite flach und gleichmäßig beleuchtet, schneiden Sie auf die Seitenränder zu und komprimieren Sie sie hier. Bei reinen Textseiten lässt eine vorherige Schwarz-Weiß-Umwandlung mehr Platz für scharfe Schrift." },
    { q: "Wie viel sind 100 KB in MB?", a: "0,1 MB. Die Datei bleibt unter 100.000 Bytes und passt damit auch bei Formularen, die 1.024 Bytes pro Kilobyte zählen." },
    { q: "Kann ich ein HEIC-Foto vom iPhone auf 100 KB verkleinern?", a: "Wandeln Sie es zuerst mit „HEIC in JPG umwandeln“ in ein JPG um und komprimieren Sie dieses dann hier. Dieses Tool liest JPG, PNG und WebP." },
    { q: "Kann das Ergebnis ein PNG bleiben?", a: "Nein – PNG kann Qualität nicht gegen Größe tauschen und lässt sich daher nicht auf ein exaktes Limit steuern. Sie erhalten ein JPG oder, wenn Sie es wählen und die Website es annimmt, ein WebP." },
    { q: "Warum hat das Tool mein Foto schmaler gemacht?", a: "Weil das Foto in voller Größe selbst bei niedriger Qualität über 100 KB lag. Das Tool hat die Maße gerade so weit verringert, dass es passt – das sieht viel besser aus als eine zerquetschte Qualität." },
  ],

  security:
    "Ihre Fotos und Dokumente bleiben auf Ihrem Gerät. Fast jede Datei wird in Ihrem Browser komprimiert – kein Upload, keine Kopie auf einem Server, nichts wird aufbewahrt. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
