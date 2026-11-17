import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/heic-in-jpg.
 *
 * Head term "HEIC in JPG umwandeln" (14.8K/mo, DE); secondaries "HEIC in JPG"
 * (8.1K), "HEIC zu JPG" and "iPhone-Fotos". The iPhone settings are named as
 * the German iOS UI shows them (Einstellungen › Kamera › Formate ›
 * „Maximale Kompatibilität“; Einstellungen › Fotos › „Auf Mac oder PC
 * übertragen“ › „Automatisch“ / „Originale behalten“).
 *
 * HeicTool is shared with /heic-to-png: its ui keys are duplicated there
 * (each route only has its own tool's ui in scope).
 */
const content: ToolPageContent = {
  toolId: "heic-to-jpg",
  locale: "de",
  name: "HEIC in JPG umwandeln",
  tagline:
    "Wandeln Sie HEIC- und HEIF-Fotos vom iPhone online in JPG oder PNG um – im Stapel und mit einstellbarer Qualität. Kostenlos und schnell, mit dem Open-Source-Programm ImageMagick.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "HEIC in JPG umwandeln – kostenlos & online | oMyImage",
  metaDescription:
    "HEIC in JPG umwandeln, kostenlos und ohne Anmeldung: iPhone-Fotos von HEIC zu JPG oder PNG, im Stapel und mit Qualitätsregler. Dateien werden danach gelöscht.",

  intro:
    "iPhones speichern Fotos als HEIC, um Platz zu sparen – aber viele Programme und Geräte können diese Dateien nicht öffnen. Mit oMyImage können Sie HEIC in JPG umwandeln: Ihre .heic- und .heif-Fotos werden zu JPGs, die überall funktionieren (oder zu verlustfreien PNGs) – einzeln oder als ganzer Stapel. Dies ist das einzige Tool hier, das auf unserem Server statt in Ihrem Browser läuft: Zum Dekodieren von HEIC braucht es eine Bibliothek, die wir aus Lizenzgründen nicht an Browser ausliefern dürfen. Ihre Datei wird deshalb auf dem Server umgewandelt und direkt danach gelöscht.",

  sections: [
    {
      heading: "Was HEIC ist und warum es Ärger macht",
      id: "what",
      body: [
        "HEIC ist das Format, in dem ein iPhone seit iOS 11 standardmäßig fotografiert. Es speichert Fotos in etwa halb so groß wie ein vergleichbares JPG – eine echte technische Leistung und der Grund, warum Apple es eingeführt hat. Ein Handy mit zehntausend Fotos spart damit sehr viel Speicherplatz.",
        "Das Problem ist die Grundlage. HEIC verpackt den Videocodec HEVC/H.265, und HEVC fällt unter mehrere Patentpools, die für Decoder-Lizenzen Gebühren verlangen. Diese eine Tatsache erklärt fast jedes Problem mit dem Format: Windows bringt keinen Decoder mit, die meisten Browser zeigen HEIC nicht an, viele Android-Handys können es nicht öffnen, und eine lange Liste von Desktop-Programmen weiß schlicht nicht, was die Datei ist.",
        "JPG hat diesen Ballast nicht. Es ist dreißig Jahre alt, patentfrei und wird von allem verstanden, das je ein Bild angezeigt hat. Wer von HEIC zu JPG wechselt, tauscht etwas Speichereffizienz gegen die Gewissheit, dass sich das Foto überall öffnen lässt, wohin Sie es schicken.",
      ],
    },
    {
      heading: "Warum dieses Tool unseren Server nutzt",
      id: "server",
      body: [
        "Jeder andere Konverter auf dieser Website arbeitet in Ihrem Browser. HEIC ist die Ausnahme, und der Grund ist die Lizenz, nicht die Leistung. Jeder JavaScript-Decoder für HEIC, den es gibt – heic2any, heic-decode, heic-convert, libheif-js –, ist eine Hülle um dieselbe Bibliothek libheif, und libheif steht unter LGPL-3.0. Sie in ein Web-Bundle zu packen gilt als Weitergabe, und die damit verbundenen Pflichten kann ein minifizierter JavaScript-Block nicht erfüllen.",
        "Die Bibliothek auf einem Server laufen zu lassen ist keine Weitergabe, deshalb findet das Dekodieren dort statt. Ihr Foto wird über eine verschlüsselte HTTPS-Verbindung übertragen, umgewandelt und unmittelbar danach gelöscht. Es wird nicht gespeichert, nicht indexiert und für nichts anderes verwendet. Das sagen wir lieber offen, als eine Datenschutz-Eigenschaft zu behaupten, die gerade dieses Tool nicht hat.",
      ],
    },
    {
      heading: "Das Problem an der Quelle abstellen",
      id: "settings",
      body: [
        "Wenn Sie regelmäßig HEIC-Dateien umwandeln, lohnt es sich, statt der Dateien die Einstellung zu ändern. Unter Einstellungen › Kamera › Formate sorgt die Option „Maximale Kompatibilität“ dafür, dass die Kamera direkt JPG speichert. Sie verlieren die Speichereffizienz, die auf einem modernen Handy aber selten der Engpass ist.",
        "Eine zweite Einstellung sorgt oft für Verwirrung. Unter Einstellungen › Fotos lässt sich „Auf Mac oder PC übertragen“ auf „Automatisch“ stellen, was HEIC beim Kopieren in JPG umwandelt, oder auf „Originale behalten“, was das nicht tut. Ein Ordner voller nicht zu öffnender .heic-Dateien auf einem Windows-Rechner ist sehr oft genau diese zweite Einstellung, die tut, was man ihr gesagt hat.",
      ],
    },
    {
      heading: "Qualität und Dateigröße nach der Umwandlung",
      id: "quality",
      body: [
        "Das HEIC wurde von Ihrem Handy bereits verlustbehaftet komprimiert, und die Kodierung in JPG komprimiert es ein zweites Mal. Bei der Standardqualität ist das in normaler Ansichtsgröße nicht sichtbar, aber es ist ein echter Generationsschritt. Wandeln Sie deshalb aus dem Original-HEIC um und nicht aus einer Kopie, die schon einmal bearbeitet wurde.",
        "Rechnen Sie damit, dass das JPG größer ist als das HEIC – meist um das 1,5- bis 2,5-Fache –, weil Sie zu einem weniger effizienten Format wechseln. Das ist der Preis für Kompatibilität mit allem. Wenn Sie stattdessen eine verlustfreie Kopie zum Bearbeiten brauchen, wandeln Sie in PNG um, aber stellen Sie sich auf eine noch einmal mehrfach größere Datei ein.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie HEIC in JPG um",
  steps: [
    { title: "HEIC hochladen", description: "Wählen Sie ein oder mehrere .heic- oder .heif-Fotos aus oder ziehen Sie sie in das Feld." },
    { title: "Format wählen", description: "Wählen Sie JPG (mit Qualitätsregler) oder PNG als Ausgabeformat." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf Umwandeln – ein Foto wird direkt heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "photo_camera", title: "Für iPhone-Fotos gemacht", description: "Machen Sie aus Apples HEIC/HEIF-Fotos JPGs oder PNGs, die sich überall öffnen lassen – unter Windows, auf Android und im Web." },
    { icon: "burst_mode", title: "Stapelumwandlung", description: "Wandeln Sie eine ganze Fotomediathek auf einmal um und laden Sie alles als eine ZIP-Datei herunter." },
    { icon: "lock", title: "Standardmäßig privat", description: "Die Umwandlung läuft auf unserem Server mit dem Open-Source-Programm ImageMagick; Ergebnisse werden innerhalb einer Stunde automatisch gelöscht und nie weitergegeben oder wiederverwendet." },
  ],

  faqs: [
    { q: "Was ist HEIC?", a: "HEIC (HEIF) ist das besonders effiziente Fotoformat, das iPhones standardmäßig verwenden. Es spart Platz, wird aber nicht überall unterstützt – die Umwandlung in JPG macht das Teilen einfacher." },
    { q: "Kann ich viele HEIC-Dateien auf einmal umwandeln?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten – mehrere Dateien werden zusammen als ZIP heruntergeladen." },
    { q: "Bleibt die Qualität erhalten?", a: "Ja. Wählen Sie PNG für eine verlustfreie Ausgabe oder JPG mit Qualitätsregler, um Größe und Bildtreue auszubalancieren." },
    { q: "Werden meine Fotos hochgeladen?", a: "Ja – HEIC ist das einzige Tool hier, das einen Server braucht. Zum Dekodieren von HEIC ist eine Bibliothek nötig, die wir aus Lizenzgründen nicht an Ihren Browser ausliefern können. Die Datei wird deshalb auf unserem Server umgewandelt und innerhalb einer Stunde automatisch gelöscht. Nichts wird weitergegeben oder wiederverwendet." },
    { q: "Ist das kostenlos?", a: "Komplett kostenlos, ohne Wasserzeichen und ohne Anmeldung." },
    { q: "Warum speichert mein iPhone Fotos als HEIC?", a: "Weil es im selben Speicherplatz etwa doppelt so viel Bild unterbringt wie JPG – das zählt, wenn ein Handy Tausende Fotos hält. Apple hat die Voreinstellung mit iOS 11 umgestellt. Die Ersparnis ist echt; der Preis bei der Kompatibilität ist das, was Menschen hierherführt." },
    { q: "Wie stelle ich HEIC auf dem iPhone ab?", a: "Öffnen Sie Einstellungen › Kamera › Formate und wählen Sie „Maximale Kompatibilität“. Neue Fotos werden ab dann als JPG gespeichert. Bereits vorhandene Fotos werden dadurch nicht umgewandelt, diese müssen Sie weiterhin konvertieren." },
    { q: "Warum kann Windows meine HEIC-Dateien nicht öffnen?", a: "HEIC basiert auf dem Videocodec HEVC/H.265, der unter Patentpools fällt, deshalb liefert Windows standardmäßig keinen Decoder mit. Microsoft bietet HEVC-Erweiterungen im Store an, teils kostenpflichtig. Wenn Sie HEIC zu JPG umwandeln, umgehen Sie das Problem ganz." },
    { q: "Sollte ich in JPG oder PNG umwandeln?", a: "JPG für fast alles – es ist viel kleiner und wird überall akzeptiert. Wählen Sie PNG, wenn Sie eine verlustfreie Kopie zum Bearbeiten oder Archivieren möchten, und nehmen Sie in Kauf, dass die Datei um ein Mehrfaches größer wird. Dafür gibt es eine eigene Seite HEIC in PNG." },
    { q: "Bleiben Datum und Ort meines Fotos erhalten?", a: "Standardmäßig ja: Der Konverter übernimmt die EXIF-Metadaten – einschließlich Aufnahmedatum und GPS-Koordinaten, sofern das Foto sie enthält – in die neue Datei. Setzen Sie das Häkchen bei „Metadaten entfernen“, um alles zu löschen, bevor Sie das Bild teilen; Handyfotos speichern fast immer, wo sie aufgenommen wurden. Um diese Daten vorher anzusehen, liest das Tool EXIF-Daten anzeigen sie direkt aus einem HEIC, ohne Umwandlung, in Ihrem Browser." },
    { q: "Kann ich eine ganze Fotomediathek umwandeln?", a: "Ja. Fügen Sie so viele .heic- oder .heif-Dateien hinzu, wie Sie möchten; sie werden nacheinander umgewandelt und als eine ZIP-Datei zurückgegeben." },
    { q: "Was ist der Unterschied zwischen HEIC in JPG und HEIC zu JPG?", a: "Keiner – beide Suchbegriffe meinen dieselbe Umwandlung. Ob Sie „HEIC in JPG“, „HEIC zu JPG“ oder „HEIC in JPG umwandeln“ suchen: Hier laden Sie Ihre iPhone-Fotos hoch und erhalten JPG-Dateien zurück, die Windows, Android und jedes Upload-Formular öffnen." },
  ],

  security:
    "Die HEIC-Umwandlung läuft auf unserem Server mit dem Open-Source-Programm ImageMagick. Ergebnisse liegen nur kurz hinter einem privaten Download-Link und werden innerhalb einer Stunde automatisch gelöscht. Wir geben Ihre Fotos nie weiter und verwenden sie nicht wieder.",

  ui: {
    // HeicTool.tsx (shared with /heic-to-png — keep these in sync there)
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
