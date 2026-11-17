import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/heic-in-png.
 *
 * Head term "HEIC in PNG" (880/mo, DE) — the sibling of /de/heic-in-jpg,
 * which takes most of the search volume; this page is for people who want a
 * lossless copy to edit. iPhone settings are named as the German iOS UI shows
 * them (Einstellungen › Kamera › Formate › „Maximale Kompatibilität“).
 *
 * HeicTool is shared with /heic-to-jpg, so its ui keys are duplicated here —
 * each route only has its own tool's ui in scope (conversion.md §6.2.3).
 */
const content: ToolPageContent = {
  toolId: "heic-to-png",
  locale: "de",
  name: "HEIC in PNG umwandeln",
  tagline:
    "Wandeln Sie HEIC- und HEIF-Fotos vom iPhone verlustfrei in PNG um – im Stapel, ohne Anmeldung und mit Löschung der Dateien direkt nach der Umwandlung.",
  crossLink: { lead: "Lieber eine kleinere Datei?", label: "HEIC in JPG umwandeln", toolId: "heic-to-jpg" },
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "HEIC in PNG – verlustfrei & kostenlos umwandeln | oMyImage",
  metaDescription:
    "HEIC in PNG umwandeln, kostenlos und ohne Anmeldung: iPhone-Fotos verlustfrei als PNG, im Stapel. Ideal zum Bearbeiten, Drucken oder Archivieren Ihrer Bilder.",

  intro:
    "Wandeln Sie die .heic-Fotos Ihres iPhones in PNG-Dateien um, die sich überall öffnen lassen. PNG ist verlustfrei, das umgewandelte Bild entspricht also genau dem, was der Decoder geliefert hat – ohne zweite Kompressionsrunde zusätzlich zu dem, was die Kamera bereits getan hat. Fügen Sie ein einzelnes Foto oder eine ganze Fotomediathek hinzu, und Sie erhalten Ihre Bilder als HEIC in PNG zurück.",

  sections: [
    {
      heading: "Warum HEIC in PNG umwandeln?",
      id: "why",
      body: [
        "HEIC ist das Format, in dem ein iPhone seit iOS 11 standardmäßig Fotos speichert, und es bringt im selben Speicherplatz etwa doppelt so viel Bild unter wie JPG. Der Haken: Es basiert auf dem Videocodec HEVC/H.265, der unter Patentpools fällt – deshalb weigern sich die meisten Browser, viele Windows-Programme und zahlreiche Android-Apps, eine .heic-Datei ohne zusätzlich installierten Codec zu öffnen.",
        "PNG ist das genaue Gegenteil: unspektakulär, für Software-Verhältnisse uralt und von absolut allem verstanden. Ob PNG oder JPG, entscheidet sich an einem Punkt – PNG ist verlustfrei. Das HEIC wurde bereits verlustbehaftet komprimiert, als Ihr Handy es geschrieben hat, und die Umwandlung in JPG komprimiert es ein zweites Mal. Die Umwandlung in PNG tut das nicht; Sie erhalten genau das, was der Decoder erzeugt hat. Bei einem Foto, das Sie bearbeiten, retuschieren, drucken oder archivieren möchten, ist das wichtig.",
        "Der Preis ist die Dateigröße. Ein HEIC, das auf Ihrem Handy 2 MB belegt, wird leicht zu einem PNG mit 10–15 MB, weil PNG nie etwas verwirft. Wenn Sie das Foto nur per E-Mail verschicken oder posten wollen, ist JPG das bessere Ziel, und der Größenunterschied ist enorm.",
      ],
    },
    {
      heading: "Warum dieses Tool auf unserem Server läuft",
      id: "server",
      body: [
        "Fast jedes Tool auf oMyImage arbeitet direkt in Ihrem Browser-Tab. HEIC ist die Ausnahme, und der Grund ist rechtlicher, nicht technischer Natur. Jeder existierende JavaScript-Decoder für HEIC – heic2any, heic-decode, heic-convert, libheif-js – ist im Kern dieselbe Bibliothek libheif, und libheif steht unter LGPL-3.0. Sie in ein Browser-Bundle zu packen gilt als Weitergabe, und die damit verbundenen Pflichten kann ein minifizierter Webpack-Chunk nicht erfüllen.",
        "Deshalb findet das Dekodieren stattdessen auf unserem Server statt, wo das Ausführen der Bibliothek keine Weitergabe ist. Ihre Datei wird über eine verschlüsselte HTTPS-Verbindung gesendet, umgewandelt und unmittelbar danach gelöscht. Wir behalten sie nicht, indexieren sie nicht und verwenden sie für nichts anderes. Das ist die einzige Art von Tool hier, die so arbeitet, und die betroffenen Seiten sagen das offen, statt eine Datenschutz-Eigenschaft zu behaupten, die sie nicht haben.",
      ],
    },
    {
      heading: "Dem iPhone HEIC abgewöhnen",
      id: "iphone",
      body: [
        "Wenn Sie nicht jedes Mal umwandeln möchten, können Sie dem Handy sagen, damit aufzuhören. Unter Einstellungen › Kamera › Formate gibt es die Option „Maximale Kompatibilität“ – wählen Sie sie, und die Kamera speichert ab dann JPG. Sie verlieren etwas Speichereffizienz, und bereits vorhandene Fotos bleiben unverändert, aber neue Aufnahmen sind kein Problem mehr.",
        "Eine zweite Einstellung sollten Sie kennen. Unter Einstellungen › Fotos lässt sich „Auf Mac oder PC übertragen“ auf „Automatisch“ stellen, was HEIC beim Kopieren in JPG umwandelt. Steht sie auf „Originale behalten“, erhalten Sie die .heic-Dateien unverändert – oft genau die Ursache für einen Ordner voller Fotos, die sich nicht öffnen lassen.",
      ],
    },
    {
      heading: "PNG oder JPG für iPhone-Fotos?",
      id: "png-or-jpg",
      body: [
        "Wählen Sie PNG, wenn das Foto in ein Bildbearbeitungsprogramm geht, wenn Sie es mehr als einmal neu speichern, wenn es Text oder flächige Bereiche wie bei einem Screenshot enthält, die JPG verwischen würde, oder wenn Sie eine Archivkopie möchten, die nicht weiter an Qualität verliert.",
        "Wählen Sie JPG, wenn es ein normaler Schnappschuss ist, der per E-Mail, Messenger, auf eine Website oder zu einem Druckdienst geht. Die Datei ist nur ein Bruchteil so groß, und der Qualitätsunterschied ist bei vernünftigen Einstellungen unsichtbar. Der Umschalter oben wechselt zwischen beiden Formaten, ohne dass Sie neu hochladen müssen – Sie können also beides ausprobieren.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie HEIC in PNG um",
  steps: [
    {
      title: "HEIC-Fotos hinzufügen",
      description: "Legen Sie .heic- oder .heif-Dateien direkt vom iPhone oder aus dem iCloud-Download ab. Mehrere Dateien auf einmal sind kein Problem.",
    },
    {
      title: "PNG ist bereits ausgewählt",
      description: "Die Ausgabe ist verlustfrei, es gibt also keinen Qualitätsregler einzustellen. Wechseln Sie zu JPG, wenn Sie lieber eine kleinere Datei möchten.",
    },
    {
      title: "Umwandeln und herunterladen",
      description: "Ein einzelnes Foto wird direkt heruntergeladen; mehrere kommen zusammen als ZIP.",
    },
  ],

  features: [
    {
      icon: "high_quality",
      title: "Verlustfreie Ausgabe",
      description:
        "PNG speichert jedes Pixel genau so, wie es aus dem HEIC dekodiert wurde – ohne zweite Runde an Kompressionsschäden.",
    },
    {
      icon: "burst_mode",
      title: "Ganze Fotomediatheken",
      description:
        "Wandeln Sie einen Stapel in einem Durchgang um und erhalten Sie eine einzige ZIP-Datei, statt Foto für Foto herunterzuladen.",
    },
    {
      icon: "devices",
      title: "Öffnet sich überall",
      description:
        "PNG wird seit den 1990er-Jahren überall unterstützt – Windows, Android, Office, jedes Bildbearbeitungsprogramm und jeder Browser.",
    },
  ],

  faqs: [
    {
      q: "Verliert man bei der Umwandlung von HEIC in PNG Qualität?",
      a: "Der PNG-Schritt ist verlustfrei, dabei geht also nichts verloren. Bedenken Sie aber, dass das HEIC selbst bereits von Ihrem Handy verlustbehaftet komprimiert wurde – die Umwandlung erhält das Foto genau so, wie es jetzt ist, und stellt keine Details wieder her, die die Kamera schon verworfen hat.",
    },
    {
      q: "Warum ist das PNG so viel größer als das HEIC?",
      a: "Weil PNG alles speichert und HEIC extrem effizient darin ist, wegzulassen, was das Auge nicht vermisst. Eine fünf- bis achtfache Größe ist normal. Wandeln Sie stattdessen in JPG um, wenn Ihnen die Größe wichtiger ist als Verlustfreiheit.",
    },
    {
      q: "Wird mein Foto hochgeladen?",
      a: "Ja, bei diesem Tool schon. Browser können HEIC nicht dekodieren, und die einzigen JavaScript-Decoder basieren auf dem LGPL-lizenzierten libheif, das wir nicht an Ihren Browser ausliefern können. Ihre Datei geht über HTTPS an unseren Server, wird umgewandelt und direkt danach gelöscht.",
    },
    {
      q: "Kann ich eine ganze Fotomediathek auf einmal umwandeln?",
      a: "Ja. Fügen Sie so viele .heic- oder .heif-Dateien hinzu, wie Sie möchten; sie werden nacheinander umgewandelt und dann als eine einzige ZIP-Datei geliefert.",
    },
    {
      q: "Funktioniert das auch mit .heif-Dateien?",
      a: "Ja. HEIF ist der Container, und HEIC ist die mit HEVC kodierte Variante, die Apple verwendet. Beide Dateiendungen werden akzeptiert.",
    },
    {
      q: "Bleiben Datum und Ort des Fotos erhalten?",
      a: "Der Konverter übernimmt Metadaten überall dort, wo das Zielformat sie aufnehmen kann, und die Option „Metadaten entfernen“ löscht vor dem Download alles. Wenn Sie sicher wissen möchten, was das Foto enthält, liest das Tool EXIF-Daten anzeigen die EXIF-Daten direkt aus einem HEIC, ohne Umwandlung.",
    },
    {
      q: "Wie verhindere ich, dass mein iPhone überhaupt HEIC speichert?",
      a: "Öffnen Sie Einstellungen › Kamera › Formate und wählen Sie „Maximale Kompatibilität“. Neue Fotos werden dann als JPG gespeichert. Vorhandene HEIC-Dateien bleiben davon unberührt, diese müssen Sie weiterhin umwandeln.",
    },
    {
      q: "Ist das kostenlos?",
      a: "Ja – kein Konto, kein Wasserzeichen und keine Begrenzung der Anzahl an Fotos.",
    },
    {
      q: "Warum kann Windows meine HEIC-Dateien nicht öffnen?",
      a: "HEIC basiert auf dem Videocodec HEVC/H.265, für den Patentgebühren anfallen, deshalb liefert Windows standardmäßig keinen Decoder mit. Ein PNG dagegen öffnet jede Windows-Version ohne Zusatzsoftware – die Umwandlung umgeht das Problem also vollständig.",
    },
  ],

  security:
    "HEIC lässt sich nicht im Browser dekodieren – jeder JavaScript-Decoder ist das LGPL-lizenzierte libheif, das wir nicht an Ihr Gerät ausliefern dürfen. Ihr Foto wird deshalb über eine verschlüsselte HTTPS-Verbindung an unseren Server gesendet, umgewandelt und direkt danach gelöscht. Es wird nie gespeichert, indexiert oder für etwas anderes verwendet.",

  ui: {
    // HeicTool.tsx — the same keys as heic-to-jpg.de.ts (one shared component,
    // and each route only has its own tool's ui in scope).
    "Please select HEIC or HEIF images.": "Bitte wählen Sie HEIC- oder HEIF-Bilder aus.",
    "Converted 1 HEIC image.": "1 HEIC-Bild umgewandelt.",
    "Converted {n} HEIC images.": "{n} HEIC-Bilder umgewandelt.",
    "or drop .heic / .heif photos here": "oder .heic- / .heif-Fotos hier ablegen",
    "Converted on our server over an encrypted connection — files are deleted right after.":
      "Umgewandelt auf unserem Server über eine verschlüsselte Verbindung – die Dateien werden direkt danach gelöscht.",
    "1 HEIC image": "1 HEIC-Bild",
    "{n} HEIC images": "{n} HEIC-Bilder",
    "Conversion runs on our server; results are auto-deleted within an hour.":
      "Die Umwandlung läuft auf unserem Server; Ergebnisse werden innerhalb einer Stunde automatisch gelöscht.",
    "Convert {n} images": "{n} Bilder umwandeln",
    "Convert & download": "Umwandeln & herunterladen",
    "Convert": "Umwandeln",
    "Converting…": "Wird umgewandelt…",
    "Conversion failed.": "Umwandlung fehlgeschlagen.",
    "Conversion Settings": "Einstellungen für die Umwandlung",
    "Conversion settings": "Einstellungen für die Umwandlung",
    "Clear files": "Dateien entfernen",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Quality": "Qualität",
    "Remove": "Entfernen",
    "Strip metadata": "Metadaten entfernen",
    "Remove EXIF, colour profile, camera and location data. Photos from a phone usually carry GPS coordinates.":
      "Entfernt EXIF-Daten, Farbprofil, Kamera- und Standortdaten. Handyfotos enthalten meist GPS-Koordinaten.",
    // Backend sentences this tool can surface (routes/image/heic)
    "Upload a HEIC or HEIF image.": "Laden Sie ein HEIC- oder HEIF-Bild hoch.",
    "HEIC conversion isn't enabled on this server (ImageMagick with libheif not installed).":
      "Die HEIC-Umwandlung ist auf diesem Server derzeit nicht verfügbar.",
  },
};

export default content;
