import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-in-base64.
 *
 * Head term "Bild in Base64" (DE; volume not reported separately) — the
 * "X in Y" pattern of the converter family. The audience is technical, so
 * HTML, CSS, data URI and MIME stay untranslated.
 */
const content: ToolPageContent = {
  toolId: "image-to-base64",
  locale: "de",
  name: "Bild in Base64 umwandeln",
  tagline:
    "Wandeln Sie ein Bild online in einen Base64-String oder eine Data-URI um – mit Ausgabe als reines Base64, CSS und HTML und Kopieren per Klick. Kostenlos, schnell und 100 % privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "Bild in Base64 umwandeln – Data-URI erstellen | oMyImage",
  metaDescription:
    "Bild in Base64 umwandeln, kostenlos: Data-URI, reines Base64, CSS-Regel oder <img>-Tag erzeugen und per Klick kopieren. Alles im Browser, ohne Upload.",

  intro:
    "Betten Sie Ihre Bilder direkt in Code ein. Mit dem oMyImage-Tool wandeln Sie ein Bild in Base64 um: Jedes Bild wird direkt in Ihrem Browser zu einer Base64-Data-URI kodiert, und Sie erhalten zusätzlich den reinen String, eine CSS-Hintergrundregel und ein fertiges <img>-Tag. Ideal, um kleine Icons und Logos ohne zusätzliche HTTP-Anfrage einzubetten. Nichts wird hochgeladen, Ihr Bild bleibt also privat.",

  sections: [
    {
      heading: "Wofür Base64-Kodierung da ist",
      id: "what",
      body: [
        "Base64 schreibt Binärdaten mit einem eingeschränkten Satz von Textzeichen neu. Es existiert, weil sehr viele Systeme für Text gebaut wurden und sich unvorhersehbar verhalten, wenn sie rohe Bytes bekommen – E-Mail-Inhalte, JSON-Payloads, XML-Dokumente, HTML-Attribute, URL-Parameter und viele Konfigurationsformate gehören dazu.",
        "Wenn Sie ein Bild in Base64 kodieren, können Sie das Bild selbst in einen dieser reinen Textkanäle legen. Als Data-URI verpackt, mit dem MIME-Typ vorneweg, kann es direkt in das src-Attribut eines img-Tags oder in eine CSS-Regel background-image, und der Browser stellt die ursprünglichen Bytes wieder her.",
        "Der Preis ist die Größe. Vier Zeichen tragen drei Bytes, die Textform ist also etwa ein Drittel größer als die Datei, und keine Kompression holt das zurück.",
      ],
    },
    {
      heading: "Wann Inlining hilft und wann es schadet",
      id: "tradeoffs",
      body: [
        "Der Vorteil ist eine Netzwerkanfrage weniger. Bei einer sehr kleinen Datei kann der Hin- und Rückweg mehr Zeit kosten als die Bytes selbst, sodass Inlining die Seite tatsächlich früher darstellt. Etwa 5 KB ist die übliche Faustregel.",
        "Darüber ist Inlining meist ein Verlust, aus Gründen, die man leicht übersieht. Ein eingebettetes Bild kann nicht separat zwischengespeichert werden und wird deshalb bei jedem Besuch mit dem HTML erneut geladen, während eine normale Bilddatei einmal geladen und wiederverwendet wird. Es kann außerdem nicht per Lazy Loading nachgeladen werden und bläht das Dokument selbst auf, was Parsing und erste Darstellung verzögert.",
        "Die praktische Empfehlung: Icons, winzige Logos und Platzhalter einbetten. Fotos normal ausliefern.",
      ],
    },
    {
      heading: "Das Problem mit E-Mails",
      id: "email",
      body: [
        "Bilder als Data-URIs in HTML-E-Mails einzubetten wirkt wie ein eleganter Weg, nichts hosten zu müssen – und scheitert oft genug, um eine schlechte Voreinstellung zu sein. Vor allem Outlook unter Windows zeigt sie seit Langem nicht an, und mehrere andere Programme entfernen oder blockieren sie als Sicherheitsmaßnahme.",
        "Die zuverlässigen Wege sind: das Bild hosten und verlinken oder es anhängen und über eine CID-Referenz einbinden – der Mechanismus, für den E-Mail-Programme tatsächlich gebaut wurden. Base64 in E-Mails lohnt sich nur, wenn Sie das E-Mail-Programm jedes Empfängers kontrollieren.",
      ],
    },
    {
      heading: "Kodierung ist keine Verschlüsselung",
      id: "security",
      body: [
        "Base64 wird manchmal für eine Art Verschleierung oder Schutz gehalten. Es ist keins von beidem. Jede Browser-Konsole, jeder Texteditor mit Decoder und tausend Websites verwandeln den String in einer Sekunde zurück in das Originalbild. Es gibt keinen Schlüssel und kein Geheimnis.",
        "Das ist wichtig, wenn das Bild selbst sensibel ist. Ein Dokument, einen Ausweis oder ein privates Foto in Base64 zu kodieren und in eine Konfigurationsdatei, ein Ticket oder ein geteiltes Dokument einzufügen, ist genauso offen, als hätten Sie das Bild angehängt – und oft weniger offensichtlich: Der String sieht wie Kauderwelsch aus und verleitet dazu, ihn für sicher zu halten.",
        "Die Kodierung erfolgt hier in Ihrem Browser, das Bild wird also nie hochgeladen. Die eigentliche Datenschutzfrage stellt sich bei dem, was Sie mit dem fertigen String machen.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild in Base64 um",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein Bild aus oder ziehen Sie es in den Arbeitsbereich." },
    { title: "Format wählen", description: "Wechseln Sie zwischen Data-URI, reinem Base64, einer CSS-Hintergrundregel oder einem <img>-Tag." },
    { title: "Kopieren oder herunterladen", description: "Kopieren Sie den String in die Zwischenablage oder laden Sie ihn als .txt-Datei herunter." },
  ],

  features: [
    { icon: "data_object", title: "Vier Ausgabeformate", description: "Erhalten Sie eine einsatzbereite Data-URI, das reine Base64, eine CSS-Regel background-image oder ein vollständiges <img>-Tag." },
    { icon: "bolt", title: "Sofortige Kodierung", description: "Die Kodierung startet in dem Moment, in dem Sie die Datei ablegen – kein Warten, kein Upload." },
    { icon: "lock", title: "100 % privat", description: "Ihr Bild wird in Ihrem Browser kodiert und nie an einen Server gesendet." },
  ],

  faqs: [
    { q: "Was ist eine Base64-Data-URI?", a: "Eine Textdarstellung Ihres Bildes, die Sie direkt in HTML oder CSS einbetten können – ohne separate Dateianfrage." },
    { q: "Warum ist der String größer als meine Datei?", a: "Die Base64-Kodierung bringt etwa 33 % Zusatzaufwand mit sich, deshalb eignet sie sich am besten für kleine Bilder wie Icons und Logos." },
    { q: "Welche Formate werden unterstützt?", a: "JPG, PNG, WEBP, GIF, BMP, SVG und AVIF." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, und das Bild wird lokal in Ihrem Browser kodiert – nichts wird hochgeladen." },
    { q: "Warum ist der Base64-String größer als die Datei?", a: "Weil Base64 drei Bytes Binärdaten mit vier Textzeichen darstellt; die kodierte Form ist also etwa 33 % größer, plus ein wenig für das Data-URI-Präfix. Dieser Zusatzaufwand ist der Preis dafür, Binärdaten dort unterbringen zu können, wo nur Text erlaubt ist." },
    { q: "Wann sollte ich eine Data-URI tatsächlich verwenden?", a: "Für kleine Dateien – Icons, ein Logo in einer E-Mail-Signatur, einen Platzhalter, eine Textur in einer HTML-Seite aus einer einzigen Datei. Unter etwa 5 KB wiegt die eingesparte HTTP-Anfrage meist den Größennachteil auf. Darüber ist eine normale, separat ausgelieferte Bilddatei schneller." },
    { q: "Warum werden meine eingebetteten Bilder in E-Mails nicht angezeigt?", a: "Weil mehrere große E-Mail-Programme Data-URIs blockieren oder ignorieren – Outlook unter Windows ist der hartnäckigste Fall. Für E-Mails hosten Sie das Bild und verlinken es oder nutzen einen richtigen CID-Anhang; eingebettetes Base64 ist in diesem Zusammenhang unzuverlässig." },
    { q: "Schützt Base64-Verschlüsselung mein Bild?", a: "Nein, und das ist ein verbreitetes Missverständnis. Base64 ist eine Kodierung, keine Verschlüsselung – jeder kann sie trivial umkehren, ohne Schlüssel. Sie macht Binärdaten als Text transportierbar, bietet aber keinerlei Vertraulichkeit." },
    { q: "Kann ich Base64 in CSS verwenden?", a: "Ja, als URL für background-image – ein vernünftiger Weg, ein kleines Icon oder Muster einzubetten. Beachten Sie, dass eine Data-URI in einem Stylesheet von jedem Besucher geladen wird, ob die Regel jemals greift oder nicht, und nicht getrennt vom CSS zwischengespeichert werden kann." },
    { q: "Welche Formate kann ich kodieren?", a: "JPG, PNG, WEBP, GIF, BMP, SVG und AVIF. Die Ausgabe ist eine vollständige Data-URI mit dem richtigen MIME-Typ, sodass Sie sie direkt in ein img-Tag oder ein Stylesheet einfügen können." },
  ],

  security:
    "Ihr Bild bleibt privat. Die Base64-Kodierung erfolgt vollständig in Ihrem Browser – nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // ImageToBase64Tool.tsx — module-scope TABS
    "Data URI": "Data-URI",
    "Raw Base64": "Reines Base64",
    "CSS": "CSS", // i18n-same
    "HTML": "HTML", // i18n-same
    // ImageToBase64Tool.tsx
    "Select an image": "Bild auswählen",
    "Change image": "Bild ändern",
    "Please select an image file.": "Bitte wählen Sie eine Bilddatei aus.",
    "Couldn't read that image.": "Dieses Bild konnte nicht gelesen werden.",
    "Copied to clipboard": "In die Zwischenablage kopiert",
    "Copy failed.": "Kopieren fehlgeschlagen.",
    "or drop a JPG, PNG, WEBP, GIF or SVG here": "oder ein JPG, PNG, WEBP, GIF oder SVG hier ablegen",
    "Encoding options": "Kodierungsoptionen",
    "Copy": "Kopieren",
    "Output": "Ausgabe",
    "{size} encoded": "{size} kodiert",
    "Base64 Output": "Base64-Ausgabe",
    "Tip:": "Tipp:",
    "Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.":
      "Base64-Strings sind etwa 33 % größer als die Datei – am besten für kleine Icons, die in CSS oder HTML eingebettet werden. Alles läuft in Ihrem Browser.",
  },
};

export default content;
