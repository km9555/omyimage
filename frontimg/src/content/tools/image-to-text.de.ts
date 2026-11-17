import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-in-text-umwandeln. Structure lives in
 * ToolPageShell.
 *
 * Head term "Bild in Text umwandeln" (1.6K/mo); "Bild zu Text" (2.9K), "Text
 * aus Bild extrahieren", "OCR online" and "Texterkennung" are the
 * secondaries and live in the metaTitle, intro, a section heading and FAQs.
 * "Sie" form, German-German spelling.
 *
 * ACCURACY NOTE — this page describes what the tool actually does TODAY:
 * it reads on the server first (PaddleOCR) and falls back to Tesseract in the
 * browser. The English module (image-to-text.en.ts) describes the same
 * behaviour (LICENSE-AUDIT.md F4). Every privacy claim must stay consistent.
 *
 * On /de the recognition language defaults to German (OCR_DEFAULT in
 * ImageToTextTool.tsx). The OCR language names and status strings are module
 * scope → ui, by hand.
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "de",
  name: "Bild in Text umwandeln",
  tagline:
    "Extrahieren Sie Text aus Fotos, Screenshots und Scans per OCR online und kopieren, bearbeiten oder speichern Sie ihn als .txt. Kostenlos, mit deutscher Texterkennung und ohne Anmeldung.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "Bild in Text umwandeln – OCR online, kostenlos",
  metaDescription:
    "Bild in Text umwandeln per OCR: Text aus Bild extrahieren und kopieren — aus Fotos, Screenshots und Scans, mit Umlauten und ß. Kostenlos und ohne Anmeldung.",

  intro:
    "Holen Sie die Wörter aus einem Screenshot, einer eingescannten Seite oder dem Foto eines Dokuments und erhalten Sie bearbeitbaren Text zurück — Bild zu Text in wenigen Sekunden. Die Texterkennung (OCR) läuft auf unserem Server mit einem besonders genauen Erkennungsmodell: Das Bild wird verschlüsselt übertragen und gelöscht, sobald es gelesen wurde. Ist der Server nicht erreichbar, liest die Seite das Bild stattdessen auf Ihrem eigenen Gerät, das Tool funktioniert also in jedem Fall — und sagt Ihnen, wenn das passiert ist. Auf dieser Seite ist Deutsch bereits als Sprache eingestellt, damit Umlaute und ß richtig erkannt werden.",

  sections: [
    {
      heading: "Was die Texterkennung kann — und was nicht",
      id: "accuracy",
      body: [
        "Optische Zeichenerkennung funktioniert, indem sie Formen auf einer Seite findet und mit einem trainierten Modell davon abgleicht, wie Buchstaben aussehen. Bei sauberem, kontrastreichem, geradem Material — einem Screenshot, einer als Bild exportierten PDF-Seite, einem Flachbettscan eines gedruckten Dokuments — ist sie sehr genau, und Sie korrigieren meist eher Satzzeichen als Wörter.",
        "Schlechter wird sie genau bei dem, was ein Foto lebendig macht. Schräge Aufnahmen, ungleichmäßiges Licht, Schatten über der Seite, niedrige Auflösung, unruhige Hintergründe hinter dem Text und starke JPG-Komprimierung verringern die Genauigkeit, teils deutlich. Handschrift ist ein ganz anderes Problem, denn die Erkennung ist auf Druckschrift trainiert; bei Schreibschrift sind schlechte Ergebnisse zu erwarten.",
        "Die praktische Konsequenz: Die Vorlage zählt weit mehr als jede Einstellung. Wenn Sie das Foto noch einmal gerade von oben aufnehmen können, mit gleichmäßig beleuchteter Seite, die das Bild ausfüllt, bringt diese eine Änderung mehr als alles andere hier.",
      ],
    },
    {
      heading: "Text aus Bild extrahieren: so gelingt es am besten",
      id: "tips",
      body: [
        "Fotografieren oder scannen Sie gerade statt schräg, damit die Textzeilen waagerecht durchs Bild laufen. Schräglage ist die häufigste Ursache für Zeichensalat.",
        "Der Text sollte mindestens 20 Pixel hoch sein. Ist die Schrift im Bild klein, schneiden Sie vor dem Extrahieren eng auf den Textblock zu — ein enger Ausschnitt desselben Fotos wird oft viel besser erkannt als das ganze Bild.",
        "Wählen Sie vor dem Extrahieren die richtige Sprache. Ein englisches Modell, das deutschen Text liest, macht aus jedem Umlaut und jedem ß stillschweigend plausibel wirkenden Unsinn — und umgekehrt genauso.",
        "Bei einem Dokument, das unter einer Schreibtischlampe fotografiert wurde, kann es helfen, es zuerst in Graustufen umzuwandeln und den Kontrast zu erhöhen, damit die Erkennung Tinte und Papier besser trennt.",
      ],
    },
    {
      heading: "Wo gelesen wird — und warum ein Durchlauf länger dauern kann",
      id: "model",
      body: [
        "Die eigentliche Erkennung läuft auf unserem Server, der ein größeres und genaueres Modell nutzt, als bequem in einen Browser-Tab passen würde. Ihr Bild wird über eine verschlüsselte HTTPS-Verbindung übertragen, gelesen und die Datei direkt danach gelöscht. Sie wird nicht aufbewahrt, nicht indexiert und nicht zum Training von Modellen verwendet. Die erste Anfrage für eine Sprache, die der Server länger nicht genutzt hat, kann etwas dauern, während das Sprachmodell lädt; danach kommen die Ergebnisse schnell.",
        "Ist der Server nicht erreichbar oder nicht verfügbar, weicht die Seite auf die Tesseract-Engine aus, die als WebAssembly in Ihrem Browser läuft — dann verlässt das Bild Ihr Gerät nie. Engine und Sprachmodell sind mehrere Megabyte groß und werden beim ersten Bedarf heruntergeladen; Ihr Browser speichert beides zwischen, spätere Durchläufe starten also fast sofort. Das Ergebnis ist in diesem Fall mit „auf Ihrem Gerät gelesen“ gekennzeichnet und bei kleinem oder dichtem Text meist etwas ungenauer.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild in Text um",
  steps: [
    {
      title: "Bild hinzufügen",
      description: "Legen Sie ein Foto, einen Screenshot oder einen Scan ab — JPG, PNG, WEBP und BMP funktionieren.",
    },
    {
      title: "Sprache wählen",
      description: "Deutsch ist bereits ausgewählt. Ändern Sie die Sprache, wenn der Text in einer anderen geschrieben ist — das beeinflusst die Genauigkeit stärker als jede andere Einstellung.",
    },
    {
      title: "Extrahieren und kopieren",
      description: "Klicken Sie auf „Text extrahieren“. Korrigieren Sie, was die Erkennung falsch gelesen hat, und kopieren Sie den Text oder speichern Sie ihn als .txt-Datei.",
    },
  ],

  features: [
    {
      icon: "lock",
      title: "Direkt nach dem Lesen gelöscht",
      description:
        "Ihr Bild wird verschlüsselt übertragen, auf unserem Server gelesen und sofort gelöscht. Nichts wird gespeichert oder zum Training von Modellen genutzt.",
    },
    {
      icon: "translate",
      title: "13 Sprachen",
      description:
        "Deutsch, Englisch, Spanisch, Französisch, Italienisch, Portugiesisch, Niederländisch, Russisch, Arabisch, Hindi, Chinesisch, Japanisch und Koreanisch.",
    },
    {
      icon: "edit_note",
      title: "Vor dem Speichern bearbeitbar",
      description:
        "Das Ergebnis landet in einem Textfeld, das Sie korrigieren können. Keine OCR ist perfekt, ein falsches Zeichen zu korrigieren gehört also dazu.",
    },
  ],

  faqs: [
    {
      q: "Wird mein Bild auf einen Server hochgeladen?",
      a: "Ja, für die eigentliche Erkennung. Das Bild wird über eine verschlüsselte HTTPS-Verbindung an unseren Server geschickt, dort wird der Text erkannt, und die Datei wird gelöscht, sobald sie gelesen wurde — sie wird nicht gespeichert, weitergegeben oder zum Training genutzt. Ist der Server nicht verfügbar, läuft die Erkennung stattdessen in Ihrem eigenen Browser, und das Bild verlässt Ihr Gerät nicht; das Tool kennzeichnet das Ergebnis dann mit „auf Ihrem Gerät gelesen“.",
    },
    {
      q: "Wie genau ist die Umwandlung von Bild zu Text?",
      a: "Bei sauberem gedrucktem Material — Screenshots, Scans, exportierten Dokumentseiten — ist die Genauigkeit in der Regel sehr hoch. Sie lässt nach bei schrägen Fotos, schlechtem Licht, niedriger Auflösung und kleiner Schrift. Das Ergebnis ist bearbeitbar, gerade weil keine OCR perfekt ist.",
    },
    {
      q: "Kann das Tool Handschrift lesen?",
      a: "Nicht zuverlässig. Die Erkennung ist auf Druckschrift trainiert, und vor allem Schreibschrift liefert schlechte Ergebnisse. Saubere Druckbuchstaben klappen manchmal; alles Verbundene meist nicht.",
    },
    {
      q: "Welche Sprachen werden unterstützt?",
      a: "Dreizehn: Deutsch, Englisch, Spanisch, Französisch, Italienisch, Portugiesisch, Niederländisch, Russisch, Arabisch, Hindi, vereinfachtes Chinesisch, Japanisch und Koreanisch. Wählen Sie vor dem Extrahieren die Sprache Ihres Textes — mit dem falschen Modell sinkt die Genauigkeit stark.",
    },
    {
      q: "Werden Umlaute und ß richtig erkannt?",
      a: "Ja, wenn Deutsch als Sprache eingestellt ist — auf dieser Seite ist das die Voreinstellung. Mit einem englischen Modell würden ä, ö, ü und ß dagegen oft als ähnlich aussehende Zeichen gelesen. Prüfen Sie bei kleiner Schrift trotzdem kurz nach.",
    },
    {
      q: "Warum dauert eine Extraktion manchmal länger?",
      a: "Auf dem Server wartet die erste Anfrage für eine länger nicht genutzte Sprache, bis deren Modell geladen ist; spätere Anfragen sind deutlich schneller. Weicht das Tool auf Ihr Gerät aus, werden Engine und Sprachmodell beim ersten Mal heruntergeladen statt in die Seite eingebaut — wer dieses Tool nie nutzt, zahlt also auch nicht dafür. Ihr Browser speichert beides zwischen, spätere Durchläufe starten sofort.",
    },
    {
      q: "Bleibt das ursprüngliche Layout erhalten?",
      a: "Nur grob. Sie erhalten den Text mit seinen Zeilenumbrüchen, aber keine Nachbildung von Spalten, Tabellen oder Formatierung. Eine Tabelle müssen Sie in der Regel von Hand nachbearbeiten.",
    },
    {
      q: "Kann ich Text aus einem PDF extrahieren?",
      a: "Nicht direkt — dieses Tool verarbeitet Bilder. Exportieren Sie die PDF-Seite zuerst als PNG oder JPG oder machen Sie einen Screenshot davon und lassen Sie das Bild dann hier durchlaufen.",
    },
    {
      q: "Ist die OCR online kostenlos?",
      a: "Ja — ohne Konto, ohne Wasserzeichen und ohne Begrenzung, wie viele Bilder Sie verarbeiten.",
    },
  ],

  security:
    "Die eigentliche Erkennung findet auf unserem Server statt: Ihr Bild wird über eine verschlüsselte HTTPS-Verbindung hochgeladen, der Text wird erkannt, und die Datei wird direkt nach dem Lesen gelöscht. Sie wird nicht gespeichert, nicht indexiert und nicht zum Training von Modellen verwendet. Ist der Server nicht erreichbar, läuft die Erkennung stattdessen als WebAssembly in der Seite, und das Bild wird gar nicht hochgeladen; die einzige Netzwerkanfrage gilt dann dem allgemeinen Erkennungsmodell, das keinerlei Informationen über Ihr Bild enthält.",

  ui: {
    // ImageToTextTool.tsx
    "Please select a JPG, PNG, WEBP or BMP image.": "Bitte wählen Sie ein JPG-, PNG-, WEBP- oder BMP-Bild aus.",
    "or drop a JPG, PNG, WEBP or BMP here": "oder ein JPG, PNG, WEBP oder BMP hier ablegen",
    "Read on our server for the best accuracy (falls back to your device if the server is unreachable) — files are deleted right after.":
      "Für die beste Genauigkeit auf unserem Server gelesen (auf Ihrem Gerät, falls der Server nicht erreichbar ist) — die Dateien werden direkt danach gelöscht.",
    "OCR settings": "OCR-Einstellungen",
    "OCR Settings": "OCR-Einstellungen",
    "Read": "Lesen",
    "Reading…": "Wird gelesen…",
    "Read again": "Erneut lesen",
    "Extract text": "Text extrahieren",
    "Remove image": "Bild entfernen",
    "Extracted text": "Extrahierter Text",
    "1 word": "1 Wort",
    "{n} words": "{n} Wörter",
    "{pct}% confidence": "{pct} % Konfidenz",
    "The recognizer's own estimate of how confident it is in this reading — not a guarantee. Low scores usually mean small or blurry source text; worth a proofread.":
      "Die eigene Einschätzung der Erkennung, wie sicher sie sich bei diesem Ergebnis ist — keine Garantie. Niedrige Werte deuten meist auf kleinen oder unscharfen Text hin; Korrekturlesen lohnt sich.",
    "editable before you copy or download": "vor dem Kopieren oder Herunterladen bearbeitbar",
    "read on your device": "auf Ihrem Gerät gelesen",
    "Our server-side reader was unreachable or unavailable, so this ran on your device instead — usually a bit less accurate on small or dense text.":
      "Unsere Server-Erkennung war nicht erreichbar oder nicht verfügbar, daher lief die Erkennung auf Ihrem Gerät — bei kleinem oder dichtem Text meist etwas ungenauer.",
    "Choose a language, then press Extract text.": "Wählen Sie eine Sprache und klicken Sie dann auf „Text extrahieren“.",
    "Language of the text": "Sprache des Textes",
    "Picking the right language matters more than anything else for accuracy.":
      "Die richtige Sprache ist für die Genauigkeit wichtiger als alles andere.",
    "Copy text": "Text kopieren",
    "Download .txt": ".txt herunterladen",
    "Read on our server for the best accuracy, over an encrypted connection — the image is deleted right after. If our server can't be reached, this reads the image on your own device instead, so the tool still works either way.":
      "Für die beste Genauigkeit über eine verschlüsselte Verbindung auf unserem Server gelesen — das Bild wird direkt danach gelöscht. Ist unser Server nicht erreichbar, wird das Bild stattdessen auf Ihrem eigenen Gerät gelesen, das Tool funktioniert also in jedem Fall.",
    "Text copied to clipboard": "Text in die Zwischenablage kopiert",
    "Couldn't access the clipboard.": "Kein Zugriff auf die Zwischenablage.",
    "No text found in this image": "In diesem Bild wurde kein Text gefunden",
    "Try a sharper or higher-contrast scan.": "Versuchen Sie einen schärferen oder kontrastreicheren Scan.",
    "Extracted 1 word": "1 Wort extrahiert",
    "Extracted {n} words": "{n} Wörter extrahiert",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    // Progress / status (module scope humanStatus + inline setStatus calls)
    "Loading the recognition engine…": "Erkennungs-Engine wird geladen…",
    "Uploading your image…": "Ihr Bild wird hochgeladen…",
    "Queued on the server…": "In der Warteschlange des Servers…",
    "Reading the text on our server…": "Text wird auf unserem Server gelesen…",
    "Server OCR unavailable — reading on your device instead…":
      "Server-OCR nicht verfügbar — wird stattdessen auf Ihrem Gerät gelesen…",
    "Downloading the recognition model (first run only)…":
      "Erkennungsmodell wird heruntergeladen (nur beim ersten Mal)…",
    "Starting the engine…": "Engine wird gestartet…",
    "Reading the text…": "Text wird gelesen…",
    // LANGUAGES (module scope, §4.2)
    "English": "Englisch",
    "Spanish": "Spanisch",
    "French": "Französisch",
    "German": "Deutsch",
    "Italian": "Italienisch",
    "Portuguese": "Portugiesisch",
    "Dutch": "Niederländisch",
    "Russian": "Russisch",
    "Arabic": "Arabisch",
    "Hindi": "Hindi", // i18n-same
    "Chinese (Simplified)": "Chinesisch (vereinfacht)",
    "Japanese": "Japanisch",
    "Korean": "Koreanisch",
    // Backend sentences this tool can surface (routes/image/ocr)
    "Upload an image to run OCR on.": "Laden Sie ein Bild für die Texterkennung hoch.",
    "Server OCR is unavailable (PaddleOCR is not installed on the server).":
      "Die Server-Texterkennung ist derzeit nicht verfügbar.",
  },
};

export default content;
