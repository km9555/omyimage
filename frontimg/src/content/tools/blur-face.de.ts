import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gesichter-verpixeln. Target query „Gesichter verpixeln“
 * (1K/mo, Germany, Nov 2026), secondary „Gesicht verpixeln“ and „Gesicht
 * unkenntlich machen“. The legal section names the DSGVO and the German
 * „Recht am eigenen Bild“ — the rules a German reader is actually subject to.
 */
const content: ToolPageContent = {
  toolId: "blur-face",
  locale: "de",
  name: "Gesichter verpixeln & zensieren",
  tagline:
    "Gesichter, Kennzeichen und private Details in Ihren Fotos online verpixeln oder unscharf machen – Bereiche markieren, Stärke wählen, exportieren. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Gesichter verpixeln – online & kostenlos | oMyImage",
  metaDescription:
    "Gesichter verpixeln oder unscharf machen: Die KI findet Gesichter automatisch, Sie machen Gesicht, Kennzeichen oder Namen unkenntlich. Datenschutz im Browser.",

  intro:
    "Sie möchten ein Gesicht, ein Namensschild oder ein Kennzeichen unkenntlich machen, bevor Sie ein Foto teilen? Das Tool „Gesichter verpixeln“ von oMyImage findet Gesichter automatisch und lässt Sie eigene Bereiche über jedes andere private Detail ziehen. Verpixeln, weichzeichnen oder schwärzen Sie diese Bereiche, passen Sie jeden durch Ziehen an und bearbeiten Sie einen ganzen Stapel auf einmal. Die Zensur wird dauerhaft in das exportierte Bild eingerechnet, und alles – auch die Gesichtserkennung – läuft in Ihrem Browser. Ihr Foto wird also nie hochgeladen, was gerade mit Blick auf Datenschutz und DSGVO der richtige Umgang mit solchen Bildern ist.",

  sections: [
    {
      heading: "Warum Weichzeichnen besser ist als ein schwarzer Balken",
      id: "method",
      body: [
        "Ein schwarzes Rechteck über einem Gesicht in einer Bilddatei mit Ebenen ist keine Schwärzung – es ist ein Aufkleber, und jeder, der die Originaldatei öffnet, kann ihn verschieben. Selbst auf eine Ebene reduziert, verrät ein voller Balken, dass etwas verborgen wurde, und lädt zur Frage ein, was.",
        "Weichzeichnen funktioniert anders. Es zerstört die Information an Ort und Stelle: Die Pixel werden durch einen Durchschnitt ihrer Nachbarn ersetzt, und die Details, die das Gesicht erkennbar gemacht haben, existieren nirgends mehr in der Datei. Nach dem Export gibt es nichts wiederherzustellen, weil nichts erhalten blieb.",
        "Genau diese Eigenschaft wollen Sie von einer Schwärzung. Nicht Verbergen, das sich rückgängig machen lässt, sondern Zerstören, das sich nicht rückgängig machen lässt.",
      ],
    },
    {
      heading: "Unscharf machen oder verpixeln?",
      id: "blur-vs-pixelate",
      body: [
        "Beim Verpixeln werden Bereiche durch große Blöcke in jeweils einer gemittelten Farbe ersetzt. Das wirkt entschlossen, und deshalb ist es im Fernsehen und im Journalismus Konvention: Das Publikum soll verstehen, dass etwas zurückgehalten wurde.",
        "Für echte Anonymisierung ist es die schwächere Wahl. Die Blockmittelwerte behalten Struktur – die ungefähre Lage der Augen, die Form des Kiefers, den Kontrast zwischen Haar und Haut –, und Forscher haben gezeigt, dass sich Identitäten aus verpixelten Gesichtern rekonstruieren lassen, wenn die Blöcke nicht groß genug waren. Ein starker Gaußscher Weichzeichner hinterlässt deutlich weniger Signal.",
        "Verpixeln Sie, wenn die Zensur sichtbar sein soll, und zeichnen Sie weich, wenn die Person wirklich nicht zu erkennen sein soll. Brauchen Sie beides, verpixeln Sie kräftig statt zaghaft.",
      ],
    },
    {
      heading: "Die richtige Abdeckung",
      id: "coverage",
      body: [
        "Der häufigste Fehler ist ein zu enger Bereich. Wer nur die Augen abdeckt, lässt Kieferlinie, Haaransatz, Ohren und Hautton sichtbar – und Menschen werden an all dem erkannt. Decken Sie den ganzen Kopf ab, etwas über den Haaransatz hinaus.",
        "Der zweite Fehler ist eine zu schwache Unschärfe. Beurteilen Sie das Ergebnis in voller Vergrößerung, nicht in Miniaturgröße, denn was in einer kleinen Vorschau ausreichend aussieht, ist es oft nicht. Wenn Sie noch erkennen, wer es ist, kann das jeder, der die Person kennt.",
        "Denken Sie auch an den Rest des Bildes. Namensschilder, Hausnummern, Kfz-Kennzeichen, Spiegelungen in Fenstern und der Text auf einem Bildschirm hinter der Person identifizieren Menschen ebenfalls. Ein Foto mit perfekt verpixeltem Gesicht und gut lesbarem Straßenschild hat nicht viel erreicht.",
      ],
    },
    {
      heading: "Wann das rechtlich wichtig ist",
      id: "legal",
      body: [
        "Nach der DSGVO ist ein erkennbares Gesicht ein personenbezogenes Datum, und wer es veröffentlicht, braucht in der Regel eine Rechtsgrundlage – meist die Einwilligung. In Deutschland kommt das Recht am eigenen Bild hinzu. Diese Pflichten treffen Organisationen weit stärker als Privatpersonen, die Urlaubsfotos posten, aber sie sind real.",
        "Am deutlichsten greifen sie in absehbaren Situationen: Fotos mit Kindern, Bilder aus Schulen, Kitas, Praxen und Pflegeeinrichtungen, kommerziell genutzte Aufnahmen von Menschenmengen, Fotos am Arbeitsplatz und alles, was Menschen zeigt, die nicht wussten, dass sie fotografiert werden. Gesichter zu verpixeln ist der einfachste Weg, die Frage ganz aus der Welt zu schaffen.",
        "Weil hier alles in Ihrem Browser läuft, verlässt das unzensierte Original Ihr Gerät nie – genau der richtige Umgang mit dieser Art von Bildern.",
      ],
    },
  ],

  howToTitle: "So verpixeln Sie ein Gesicht auf einem Foto",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus oder ziehen Sie sie per Drag & Drop in den Arbeitsbereich." },
    { title: "Erkennen oder zeichnen", description: "Klicken Sie auf Gesichter erkennen, um sie automatisch zu finden, und verschieben, skalieren oder löschen Sie dann jeden Bereich – und ziehen Sie eigene über Kennzeichen, Namen oder Dokumente." },
    { title: "Exportieren", description: "Klicken Sie auf Exportieren, um die Bilder mit fest eingerechneter Zensur herunterzuladen – bei mehreren als ZIP." },
  ],

  features: [
    { icon: "face_retouching_natural", title: "Automatische Gesichtserkennung", description: "Findet jedes Gesicht im Foto mit der gewählten Empfindlichkeit; das Modell läuft auf Ihrem Gerät – das Bild wird nie hochgeladen." },
    { icon: "blur_on", title: "Weichzeichnen, verpixeln oder schwärzen", description: "Wählen Sie eine weiche Unschärfe, grobe Pixel oder eine volle Farbfläche und stellen Sie die Stärke so ein, dass sensible Details vollständig verschwinden." },
    { icon: "select_all", title: "Bearbeitbare Bereiche", description: "Jeder Bereich lässt sich verschieben, an jeder Ecke und Kante skalieren und einzeln löschen – als Ellipse für Gesichter oder Rechteck für Kennzeichen und Dokumente." },
    { icon: "lock", title: "Wirklich privat", description: "Alles wird in Ihrem Browser verarbeitet – das Original verlässt Ihr Gerät nie, und die Zensur ist in der exportierten Datei dauerhaft." },
  ],

  faqs: [
    { q: "Kann ich mehr als ein Gesicht verpixeln?", a: "Ja. Die automatische Erkennung markiert alle gefundenen Gesichter, und Sie können beliebig viele Bereiche von Hand ziehen, rückgängig machen oder löschen." },
    { q: "Was ist der Unterschied zwischen Weichzeichnen und Verpixeln?", a: "Weichzeichnen macht den Bereich gleichmäßig unscharf, Verpixeln ersetzt ihn durch große Blöcke. Bei ausreichender Stärke verbergen beide die Details vollständig." },
    { q: "Ist die Unschärfe dauerhaft?", a: "Ja. Die zensierten Bereiche werden direkt in das exportierte Bild gerechnet, sodass der Empfänger sie nicht rückgängig machen kann." },
    { q: "Lädt die automatische Erkennung mein Foto hoch?", a: "Nein. Das Modell zur Gesichtserkennung wird beim ersten Gebrauch in Ihren Browser geladen und läuft dann auf Ihrem eigenen Gerät – genau wie das Weichzeichnen. Nichts vom Bild wird irgendwohin gesendet, und darum geht es: Die Fotos, die Menschen zensieren, sind genau die, die nicht über fremde Server laufen sollten." },
    { q: "Ein Gesicht wurde übersehen – was nun?", a: "Erhöhen Sie die Empfindlichkeit und erkennen Sie erneut, oder ziehen Sie den Bereich einfach von Hand. Die Erkennung ist auf Gesichter abgestimmt, die einigermaßen nah an der Kamera sind; kleine Gesichter in einer Menge oder einer entfernten Straßenszene werden am ehesten übersehen. Alles, was sie findet, ist ein normaler Bereich, den Sie verschieben, skalieren oder löschen können." },
    { q: "Ist das kostenlos?", a: "Komplett kostenlos, ohne Wasserzeichen und ohne Anmeldung." },
    { q: "Lässt sich die Unschärfe rückgängig machen?", a: "Nicht mit praktikablen Mitteln. Weichzeichnen verwirft die Information, statt sie zu verbergen, also bleibt nichts wiederherzustellen – anders als bei einem schwarzen Balken in einer Datei mit Ebenen oder einer so groben Verpixelung, dass eine KI-Rekonstruktion denkbar wird. Nach dem Export ist das Gesicht aus den Pixeln verschwunden." },
    { q: "Soll ich weichzeichnen oder verpixeln?", a: "Weichzeichnen ist die sicherere Wahl. Eine Verpixelung mit großen Blöcken lässt sich mitunter teilweise rekonstruieren, weil die Blockmittelwerte noch Struktur tragen. Ein starker Gaußscher Weichzeichner lässt viel weniger übrig. Verpixeln macht deutlicher sichtbar, dass zensiert wurde – manchmal ist genau das gewollt." },
    { q: "Wie stark sollte die Unschärfe sein?", a: "So stark, dass Sie die Person in voller Vergrößerung selbst nicht mehr erkennen. Eine leichte Unschärfe, die nur die Züge weicher macht, ist keine Anonymisierung – das Gesicht bleibt für jeden, der die Person kennt, erkennbar, oft auch für Software. Im Zweifel stärker." },
    { q: "Entfernt das auch Standortdaten aus dem Foto?", a: "Ja, als Nebeneffekt: Das Bild wird über ein Canvas neu gezeichnet, das keine EXIF-Metadaten übernimmt, also fallen GPS-Koordinaten und Kameradaten weg. Wenn es Ihnen vor allem um die Metadaten und nicht um Gesichter geht, ist „Metadaten entfernen“ das passende Tool." },
    { q: "Muss ich Gesichter verpixeln, bevor ich Fotos poste?", a: "Das hängt davon ab, wo Sie sind und was das Foto zeigt. Nach der DSGVO ist ein erkennbares Gesicht ein personenbezogenes Datum, und wer Bilder von Kindern, Patienten, Passanten oder Menschen in sensiblen Situationen veröffentlicht, hat echte Pflichten. Fehlt die Einwilligung, ist Verpixeln die einfache Lösung." },
    { q: "Wird mein Foto hochgeladen?", a: "Nein. Der gesamte Vorgang läuft in einem Canvas in Ihrem Browser – und das ist hier besonders wichtig, denn die Bilder, die Menschen unkenntlich machen, sind meist genau die, die nicht über fremde Server laufen sollten." },
    { q: "Kann ich ein Kennzeichen oder ein Dokument unkenntlich machen?", a: "Ja. Im Tab Text sucht das Tool nach Schrift im Bild – ein Kfz-Kennzeichen, eine Hausnummer, eine Adresse – und markiert jede Fundstelle als Bereich. Was es nicht findet, decken Sie mit einem Rechteck im Tab Form ab oder übermalen es mit dem Pinsel." },
  ],

  security:
    "Ihre Bilder bleiben privat. Gesichtserkennung und Weichzeichnen laufen vollständig in Ihrem Browser – das quelloffene Modell MediaPipe BlazeFace wird auf Ihr Gerät geladen und dort ausgeführt, sodass zu keinem Zeitpunkt etwas auf einen Server hochgeladen wird. Das zensierte Ergebnis ist in der exportierten Datei dauerhaft. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // BlurTool.tsx — module-scope TABS (translated at the render site)
    "Brush": "Pinsel",
    "Shape": "Form",
    "Text": "Text", // i18n-same
    "Face": "Gesicht",
    // face-detect / text-detect SENSITIVITY_LABELS
    "Low": "Niedrig",
    "Recommended": "Empfohlen",
    "High": "Hoch",
    "Only very confident matches": "Nur sehr sichere Treffer",
    "Balanced for most photos": "Ausgewogen für die meisten Fotos",
    "Catches more, may over-detect": "Findet mehr, markiert eventuell zu viel",
    "Only clearly legible text": "Nur gut lesbarer Text",
    "Catches faint text, may over-detect": "Findet auch blassen Text, markiert eventuell zu viel",
    // Tesseract's own status strings, capitalised (text tab)
    "Loading tesseract core": "Erkennungs-Engine wird geladen",
    "Initializing tesseract": "Engine wird gestartet",
    "Initialized tesseract": "Engine gestartet",
    "Loading language traineddata": "Sprachmodell wird geladen",
    "Loaded language traineddata": "Sprachmodell geladen",
    "Initializing api": "Texterkennung wird vorbereitet",
    "Initialized api": "Texterkennung bereit",
    "Recognizing text": "Text wird gesucht",
    // BlurTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "Couldn't read {name}.": "{name} konnte nicht gelesen werden.",
    "Found 1 face": "1 Gesicht gefunden",
    "Found {n} faces": "{n} Gesichter gefunden",
    "Found 1 piece of text": "1 Textstelle gefunden",
    "Found {n} pieces of text": "{n} Textstellen gefunden",
    "in 1 image.": "in 1 Bild.",
    "in {n} images.": "in {n} Bildern.",
    "No faces detected — try a higher sensitivity, or draw the areas by hand.":
      "Keine Gesichter erkannt – versuchen Sie eine höhere Empfindlichkeit oder ziehen Sie die Bereiche von Hand.",
    "No text detected — try a higher sensitivity, or draw the areas by hand.":
      "Kein Text erkannt – versuchen Sie eine höhere Empfindlichkeit oder ziehen Sie die Bereiche von Hand.",
    "Face detection couldn't start. You can still draw areas by hand.":
      "Die Gesichtserkennung konnte nicht starten. Sie können die Bereiche trotzdem von Hand ziehen.",
    "Text detection couldn't start. You can still draw areas by hand.":
      "Die Texterkennung konnte nicht starten. Sie können die Bereiche trotzdem von Hand ziehen.",
    "Ellipse": "Ellipse", // i18n-same
    "Rectangle": "Rechteck",
    "Brush {n}": "Pinsel {n}",
    "Erase {n}": "Radierer {n}",
    "Add at least one area to censor.": "Fügen Sie mindestens einen Bereich zum Zensieren hinzu.",
    "Pick an effect — \"No blur\" leaves the image unchanged.":
      "Wählen Sie einen Effekt – ohne Effekt bleibt das Bild unverändert.",
    "Exported 1 image.": "1 Bild exportiert.",
    "Exported {n} images.": "{n} Bilder exportiert.",
    "Export failed.": "Der Export ist fehlgeschlagen.",
    "Edit {name}": "{name} bearbeiten",
    "1 area": "1 Bereich",
    "{n} areas": "{n} Bereiche",
    "1 image": "1 Bild",
    "{n} images": "{n} Bilder",
    "done": "fertig",
    "Download": "Herunterladen",
    "Remove": "Entfernen",
    "Quality": "Qualität",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Ziehen Sie, um einen Bereich zu zeichnen, klicken Sie einen an, um ihn auszuwählen, ziehen Sie an den Griffpunkten, um die Größe zu ändern, und drücken Sie Entf zum Löschen.",
    "1 area on this image.": "1 Bereich auf diesem Bild.",
    "{n} areas on this image.": "{n} Bereiche auf diesem Bild.",
    "Clear images": "Bilder entfernen",
    "Files": "Dateien",
    "Blur settings": "Unschärfe-Einstellungen",
    "Export": "Exportieren",
    "Exporting…": "Wird exportiert…",
    "Censor Settings": "Zensur-Einstellungen",
    "Censoring is baked into the exported file — all in your browser.":
      "Die Zensur wird fest in die exportierte Datei eingerechnet – alles in Ihrem Browser.",
    "Export {n} images": "{n} Bilder exportieren",
    "Export image": "Bild exportieren",
    "Draw on the image to edit": "Zum Bearbeiten auf das Bild zeichnen",
    "Add blur": "Unschärfe hinzufügen",
    "Brush size": "Pinselgröße",
    "Brush fade": "Pinselweichheit",
    "Undo stroke": "Strich rückgängig",
    "Clear all": "Alles löschen",
    "Remove erases from anything on the image, including a detected face — they share one mask.":
      "Entfernen radiert aus allem im Bild, auch aus einem erkannten Gesicht – alles teilt sich eine Maske.",
    "New area shape": "Form neuer Bereiche",
    "Ellipse follows the shape of a head more closely and looks less like a redaction box. Rectangle is better for signs, plates and documents.":
      "Die Ellipse folgt der Kopfform genauer und wirkt weniger wie ein Zensurbalken. Das Rechteck eignet sich besser für Schilder, Kennzeichen und Dokumente.",
    "Delete area": "Bereich löschen",
    "Drag on the image to draw an area, then move or resize it by its handles.":
      "Ziehen Sie auf dem Bild, um einen Bereich zu zeichnen, und verschieben oder skalieren Sie ihn dann an den Griffpunkten.",
    "Automatic text detection": "Automatische Texterkennung",
    "Reads the image on your device to find writing - a licence plate, a door number, an address. Your photo is never uploaded, though the recognition engine itself downloads from a CDN the first time you use it.":
      "Liest das Bild auf Ihrem Gerät, um Schrift zu finden - ein Kennzeichen, eine Hausnummer, eine Adresse. Ihr Foto wird nie hochgeladen; nur die Erkennungs-Engine selbst wird beim ersten Gebrauch von einem CDN geladen.",
    "Whole lines": "Ganze Zeilen",
    "Single words": "Einzelne Wörter",
    "Reading...": "Wird gelesen...",
    "This image": "Dieses Bild",
    "All {n}": "Alle {n}",
    "The first run downloads the engine, so it takes a few seconds. Lines suits an address, words suits one field on a form. Pale text on a dark background is often missed — draw over that with Shape or Brush.":
      "Beim ersten Mal wird die Engine geladen, das dauert ein paar Sekunden. Zeilen passen für eine Adresse, Wörter für ein einzelnes Formularfeld. Heller Text auf dunklem Hintergrund wird oft übersehen – decken Sie ihn mit Form oder Pinsel ab.",
    "Automatic face detection": "Automatische Gesichtserkennung",
    "Runs a face-detection model downloaded to your browser. Your photo is never uploaded — detection happens on your device.":
      "Nutzt ein Modell zur Gesichtserkennung, das in Ihren Browser geladen wird. Ihr Foto wird nie hochgeladen – die Erkennung geschieht auf Ihrem Gerät.",
    "Detecting…": "Wird erkannt…",
    "Detected faces become normal areas — nudge, resize or delete any of them.":
      "Erkannte Gesichter werden zu normalen Bereichen – verschieben, skalieren oder löschen Sie jeden davon.",
    "Edit blur masks": "Unschärfe-Masken bearbeiten",
    "Show": "Einblenden",
    "Hide": "Ausblenden",
    "Show {name}": "{name} einblenden",
    "Hide {name}": "{name} ausblenden",
    "Delete": "Löschen",
    "Delete {name}": "{name} löschen",
    "Intensity": "Intensität",
    "Block colour": "Blockfarbe",
    "{effect} keeps some of the original detail. For a face you want kept private, use Gaussian at a high intensity or Colour.":
      "{effect} behält einen Teil der Originaldetails. Für ein Gesicht, das privat bleiben soll, nutzen Sie den Gaußschen Weichzeichner mit hoher Intensität oder eine Farbfläche.",
  },
};

export default content;
