import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/base64-in-bild.
 *
 * Head term "Base64 in Bild" (DE; volume not reported separately) — the
 * "X in Y" pattern of the converter family; developers also type the English
 * "base64 to image" (1K), mentioned once in an FAQ. Technical audience, so
 * data URI, MIME, JSON and API stay untranslated.
 */
const content: ToolPageContent = {
  toolId: "base64-to-image",
  locale: "de",
  name: "Base64 in Bild umwandeln",
  tagline:
    "Wandeln Sie einen Base64-String oder eine Data-URI online zurück in ein Bild um – mit sofortiger Vorschau und Download als PNG, JPG oder WEBP. Kostenlos, schnell und 100 % privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "Base64 in Bild umwandeln – Data-URI dekodieren | oMyImage",
  metaDescription:
    "Base64 in Bild umwandeln, kostenlos: Data-URI oder reines Base64 einfügen, Vorschau sofort sehen und als PNG, JPG oder WEBP laden. Base64 to Image im Browser.",

  intro:
    "Machen Sie aus einem Base64-String wieder eine echte Bilddatei. Mit dem oMyImage-Tool wandeln Sie Base64 in ein Bild um: Eine Data-URI oder reines Base64 wird direkt in Ihrem Browser dekodiert und sofort in der Vorschau angezeigt. Laden Sie das Bild unverändert herunter oder wandeln Sie es in PNG, JPG oder WEBP um. Nichts wird hochgeladen, Ihre Daten bleiben also privat.",

  sections: [
    {
      heading: "Aus Text wird wieder ein Bild",
      id: "what",
      body: [
        "Base64 gibt es, damit Binärdaten durch Kanäle reisen können, die für Text gebaut wurden. Deshalb tauchen Bilder als lange Zeichenketten in API-Antworten, JSON-Payloads, HTML-Quelltext, CSS-Dateien, Datenbankspalten und E-Mail-Inhalten auf – irgendwann musste das Bild an einen Ort passen, der nur Text annahm.",
        "Die Dekodierung kehrt die Umwandlung exakt um. Base64 ist verlustfrei: Vier Zeichen werden wieder zu drei Bytes, und heraus kommt Byte für Byte die Originaldatei. Nichts wird angenähert, keine Qualität geht verloren – das dekodierte Bild ist identisch mit dem, das kodiert wurde.",
        "Der typische Moment, in dem Sie das brauchen, ist die Fehlersuche: Sie haben eine Antwort oder eine Logzeile mit etwas, das ein Bild sein sollte, und möchten sehen, ob es das richtige ist – oder überhaupt ein gültiges Bild.",
      ],
    },
    {
      heading: "Warum sich ein String nicht dekodieren lässt",
      id: "troubleshooting",
      body: [
        "Die überwältigende Mehrheit der Fehler sind Schäden beim Kopieren und Einfügen, keine wirklich beschädigten Daten. Log-Viewer, E-Mail-Programme und Terminals fügen Zeilenumbrüche in lange Strings ein, Texteditoren brechen weich um, JSON-Escapes bleiben stehen. Jedes überzählige Zeichen bricht die Dekodierung.",
        "Die andere häufige Ursache ist Abschneiden. Konsolen und Logsysteme kürzen lange Werte oft, mal mit Auslassungspunkten, mal stillschweigend, sodass Sie ein Fragment haben, das vollständig aussieht. Ein gültiger Base64-String hat immer eine durch vier teilbare Länge und ist bei Bedarf am Ende mit einem oder zwei „=“-Zeichen aufgefüllt – ist das bei Ihrem nicht der Fall, ist er unvollständig.",
        "Achten Sie auch auf URL-sicheres Base64. Manche Systeme ersetzen „+“ und „/“ durch „-“ und „_“, damit der String in einer URL stehen kann, und diese Varianten müssen zurückgewandelt werden, bevor ein Standard-Decoder sie annimmt.",
      ],
    },
    {
      heading: "Mit oder ohne Präfix",
      id: "prefix",
      body: [
        "Eine vollständige Data-URI sieht aus wie „data:image/png;base64,“ gefolgt von den eigentlichen Daten. Dieses Präfix gehört nicht zur Kodierung – es ist eine Angabe, die dem Browser sagt, was die dekodierten Bytes darstellen. So weiß ein img-Tag, dass es das Ergebnis als PNG und nicht als JPG behandeln soll.",
        "Hier funktionieren beide Formen. Ist das Präfix vorhanden, bestimmt es das Ausgabeformat, was das zuverlässigste Ergebnis liefert. Fehlt es, wird das Format aus den dekodierten Bytes selbst ermittelt, denn jedes Bildformat beginnt mit einer erkennbaren Signatur.",
      ],
    },
    {
      heading: "Bewusst lokal dekodiert",
      id: "privacy",
      body: [
        "Alles passiert in Ihrem Browser-Tab. Gerade bei diesem Tool ist das kein Nebendetail, denn es geht darum, woher solche Strings meist stammen: interne API-Antworten, Produktions-Logs, Datenbankexporte und Konfigurationsdateien.",
        "Solches Material in eine Website einzufügen, die es auf dem Server verarbeitet, heißt, alles herauszugeben, was der Inhalt enthält – samt dem Kontext drumherum. Hier wird der String in der Seite dekodiert und das fertige Bild als Download angeboten. Nichts wird übertragen, und es gibt hinterher keine Kopie auf einem Server, um die Sie sich sorgen müssten.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie Base64 in ein Bild um",
  steps: [
    { title: "Einfügen", description: "Fügen Sie eine Data-URI oder einen reinen Base64-String in das Eingabefeld ein." },
    { title: "Vorschau", description: "Das dekodierte Bild erscheint sofort, mit seinen Abmessungen und einer Gültigkeitsprüfung." },
    { title: "Herunterladen", description: "Laden Sie das Originalbild herunter oder wandeln Sie es vorher in PNG, JPG oder WEBP um." },
  ],

  features: [
    { icon: "image", title: "Sofortige Dekodierung", description: "Erkennt PNG, JPG, GIF, WEBP, BMP und SVG automatisch aus dem String und zeigt die Vorschau schon beim Tippen." },
    { icon: "sync_alt", title: "Umwandeln beim Download", description: "Speichern Sie das dekodierte Bild unverändert oder kodieren Sie es mit Qualitätsregler neu als PNG, JPG oder WEBP." },
    { icon: "lock", title: "100 % privat", description: "Die Dekodierung erfolgt vollständig in Ihrem Browser – nichts wird auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Welche Eingaben werden akzeptiert?", a: "Sowohl vollständige Data-URIs (data:image/png;base64,…) als auch reine Base64-Strings. Bei reiner Eingabe wird der Bildtyp automatisch erkannt." },
    { q: "Kann ich das Format umwandeln?", a: "Ja. Laden Sie das Original herunter oder wählen Sie PNG, JPG oder WEBP, um vor dem Download neu zu kodieren." },
    { q: "Was ist, wenn mein String ungültig ist?", a: "Sie sehen eine klare Meldung – prüfen Sie, ob Sie den gesamten Base64-String kopiert haben." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, und die Dekodierung erfolgt lokal in Ihrem Browser – nichts wird hochgeladen." },
    { q: "Muss ich das Data-URI-Präfix mit angeben?", a: "Nein. Fügen Sie entweder den bloßen Base64-String oder die vollständige Data-URI ein, die mit „data:image/…;base64,“ beginnt – das Präfix wird erkannt und verarbeitet. Es mitzugeben hilft trotzdem, weil es das Format ausdrücklich angibt, statt es ableiten zu lassen." },
    { q: "Warum lässt sich mein String nicht dekodieren?", a: "Meist wegen Leerzeichen oder Zeilenumbrüchen, die beim Kopieren aus einem Log, einer E-Mail oder einer JSON-Datei hineingeraten sind. Die andere häufige Ursache ist Abschneiden – lange Strings werden von Editoren und Terminals gekürzt. Die Länge eines gültigen Base64-Strings ist immer ein Vielfaches von vier, bei Bedarf mit „=“ am Ende aufgefüllt." },
    { q: "Woher kommen solche Strings normalerweise?", a: "Aus API-Antworten, die Bilder direkt mitliefern, JSON-Payloads, Datenbankspalten, die Bilder als Text speichern, HTML- und CSS-Quelltext bei der Fehlersuche, E-Mail-Quelltext, Konfigurationsdateien und Log-Ausgaben. Überall dort, wo Binärdaten durch einen reinen Textkanal mussten." },
    { q: "In welchem Format erhalte ich das Bild zurück?", a: "In dem des Originals – die Data-URI enthält den MIME-Typ, ein PNG wird also zu einem PNG dekodiert und ein JPG zu einem JPG. Hat der String kein Präfix, wird das Format aus der Signatur (Magic Number) der dekodierten Bytes abgeleitet." },
    { q: "Gibt es eine Größenbegrenzung?", a: "Nur den Arbeitsspeicher Ihres Browsers. Sehr lange Strings können beim Einfügen und Dekodieren langsam sein, weil das Ganze in der Seite gehalten werden muss. Mehrere Megabyte große Bilder als Text sind von Natur aus unhandlich, nicht wegen einer Grenze hier." },
    { q: "Werden meine Daten irgendwohin gesendet?", a: "Nein. Die Dekodierung erfolgt in Ihrem Browser – wichtig, weil solche Strings regelmäßig aus API-Antworten, internen Systemen und Logs stammen, also aus Material, das nicht in einen fremden Dienst eingefügt werden sollte." },
    { q: "Ist das dasselbe wie „Base64 to Image“?", a: "Ja. „Base64 to Image“ ist der englische Name derselben Umwandlung – hier heißt sie Base64 in Bild. Sie fügen den String ein und erhalten eine Bilddatei zurück, vollständig in Ihrem Browser." },
  ],

  security:
    "Ihre Daten bleiben privat. Die Base64-Dekodierung erfolgt vollständig in Ihrem Browser – nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // Base64ToImageTool.tsx
    "That doesn't look like a valid Base64 image string.":
      "Das sieht nicht nach einem gültigen Base64-Bild-String aus.",
    "Image downloaded.": "Bild heruntergeladen.",
    "Couldn't decode that string.": "Dieser String konnte nicht dekodiert werden.",
    "Canvas not supported.": "Dieser Browser unterstützt Canvas nicht.",
    "Downloaded as {format}.": "Als {format} heruntergeladen.",
    "Conversion failed.": "Umwandlung fehlgeschlagen.",
    "Decoded image": "Dekodiertes Bild",
    "Clear input": "Eingabe löschen",
    "Output settings": "Ausgabe-Einstellungen",
    "Decoded": "Dekodiert",
    "Paste a Base64 string to preview the image here.":
      "Fügen Sie einen Base64-String ein, um hier die Vorschau des Bildes zu sehen.",
    "decoded preview": "dekodierte Vorschau",
    "Base64 Input": "Base64-Eingabe",
    "Download": "Herunterladen",
    "Download image": "Bild herunterladen",
    "Download as {format}": "Als {format} herunterladen",
    "Paste a data URI (data:image/png;base64,…) or raw Base64":
      "Data-URI (data:image/png;base64,…) oder reines Base64 einfügen",
    "Valid image detected.": "Gültiges Bild erkannt.",
    "Convert & download": "Umwandeln & herunterladen",
    "Quality": "Qualität",
  },
};

export default content;
