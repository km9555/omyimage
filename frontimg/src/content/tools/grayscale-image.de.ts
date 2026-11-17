import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-schwarz-weiss.
 *
 * Primary query "Bild schwarz weiß" (3.6K/mo, DE); secondary
 * "Schwarz-Weiß-Bild" (8.1K) and "Foto schwarz weiß". "Graustufen" is the
 * technical term and is used in the body where precision matters.
 */
const content: ToolPageContent = {
  toolId: "grayscale-image",
  locale: "de",
  name: "Bild schwarz weiß machen",
  tagline:
    "Bilder online in Graustufen (schwarz-weiß) umwandeln — mit einstellbarer Intensität, Live-Vorschau und Stapelverarbeitung. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild schwarz weiß machen – kostenlos online | oMyImage",
  metaDescription:
    "Bild schwarz weiß machen: Fotos online in ein Schwarz-Weiß-Bild umwandeln, Intensität per Regler wählen, mehrere Bilder auf einmal. Kostenlos und privat.",

  intro:
    "Geben Sie Ihren Fotos einen zeitlosen Schwarz-Weiß-Look. Mit diesem Tool von oMyImage machen Sie ein Bild schwarz weiß, direkt in Ihrem Browser — mit einem Intensitätsregler für alles von einer dezenten Entsättigung bis zum vollständigen Schwarz-Weiß-Bild. Bearbeiten Sie ein einzelnes Foto oder einen ganzen Stapel und laden Sie sofort herunter. Nichts wird hochgeladen, Ihre Bilder bleiben privat.",

  sections: [
    {
      heading: "Was bei der Umwandlung tatsächlich passiert",
      id: "how",
      body: [
        "Ein Farbbild speichert drei Werte pro Pixel — Rot, Grün und Blau. Ein Graustufenbild speichert einen: die Helligkeit. Die Umwandlung muss entscheiden, wie viel jeder Farbkanal zu diesem einen Wert beiträgt, und die Antwort ist keine gleichmäßige Aufteilung, weil das menschliche Auge nicht für alle drei gleich empfindlich ist.",
        "Grün nehmen wir bei gleicher Intensität deutlich heller wahr als Blau, deshalb gewichtet die Standardformel Grün stark, Rot mittel und Blau nur gering. Die drei Kanäle einfach zu mitteln ist der naive Ansatz und führt zu spürbar matschigen Ergebnissen — der Himmel zu hell, das Laub zu dunkel.",
        "Wichtig zu wissen: Zwei sehr unterschiedliche Farben können denselben Grauton ergeben. Aus drei Dimensionen Farbe wird eine Dimension Helligkeit, die Information geht also wirklich verloren und wird nicht nur beiseitegelegt.",
      ],
    },
    {
      heading: "Warum ein Foto schwarz-weiß oft stärker wirkt",
      id: "aesthetics",
      body: [
        "Wer die Farbe entfernt, entfernt eine Ablenkung. Übrig bleiben Bildaufbau, Kontrast, Struktur und Licht — deshalb haben Porträt- und Dokumentarfotografie nie auf Schwarz-Weiß verzichtet. Ein unruhiger Hintergrund voller konkurrierender Farben wird in Graustufen oft ruhig, und ein Gesicht gewinnt an Struktur, sobald der Hautton nicht mehr dominiert.",
        "Es rettet außerdem Fotos mit schlechten Farben. Mischlicht — Tageslicht durchs Fenster und Glühlampen an der Decke — erzeugt Farbstiche, die schwer zu korrigieren und sofort sichtbar sind. In Graustufen existiert das Problem schlicht nicht.",
        "Leiden tun die Bilder, bei denen die Farbe die Aussage trägt: ein Sonnenuntergang, ein Produkt, dessen Verkaufsargument die Farbe Petrol ist, ein Diagramm mit Farbcodierung nach Kategorien. Ist die Farbe das Motiv, wirft die Umwandlung das Motiv weg.",
      ],
    },
    {
      heading: "Dokumente, Scans und Dateigröße",
      id: "documents",
      body: [
        "Wer ein Dokument mit dem Handy fotografiert, erhält ein vollfarbiges Bild von etwas, das im Grunde schwarzer Text auf weißem Papier ist — drei Kanäle für etwas, das einen gebraucht hätte. Die Umwandlung in Graustufen halbiert die Datei typischerweise, manchmal sogar mehr, ohne jeden Verlust an Lesbarkeit.",
        "Sie räumt das Ergebnis auch auf. Handyfotos von Papier fangen Farbstiche vom Raumlicht ein, sodass die Seite je nach Lampe leicht gelblich, bläulich oder grünlich wirkt. Graustufen entfernen das vollständig und lassen Seiten, die an verschiedenen Tagen fotografiert wurden, einheitlich aussehen.",
        "Das passt gut zum Erstellen einer PDF: erst in Graustufen umwandeln, dann zu einem Dokument zusammenfügen — das Ergebnis ist nur ein Bruchteil so groß wie die Farbversion. Oft entscheidet genau das darüber, ob ein Upload-Limit, etwa bei einem Behördenportal, eingehalten wird oder nicht.",
      ],
    },
    {
      heading: "Druck und Barrierefreiheit",
      id: "print",
      body: [
        "Wenn Sie selbst bewusst umwandeln, statt das dem Druckertreiber zu überlassen, bestimmen Sie, wie die Tonwerte abgebildet werden. Außerdem umgehen Sie ein praktisches Ärgernis: Viele Bürodrucker berechnen jede Seite mit Farbe als Farbdruck, ein einziges farbiges Logo macht also das ganze Dokument zum Farbauftrag.",
        "Es gibt auch einen Aspekt der Barrierefreiheit. Ihre Arbeit in Graustufen anzusehen ist der schnellste Test, ob sie Bedeutung allein über Farbe vermittelt. Wird ein Diagramm unlesbar oder ist ein Pflichtfeld in einem Formular nicht mehr zu erkennen, erleben farbenblinde Menschen genau das — und die Lösung ist eine Beschriftung, ein Muster oder eine Form, nicht eine andere Farbpalette.",
      ],
    },
  ],

  howToTitle: "So machen Sie ein Bild schwarz weiß",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus, oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Intensität einstellen", description: "Wählen Sie mit dem Regler einen vollständigen Schwarz-Weiß-Look oder eine teilweise Entsättigung, mit Live-Vorschau." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf „Umwandeln“ — ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
  ],

  features: [
    { icon: "filter_b_and_w", title: "Einstellbare Intensität", description: "Ganz schwarz-weiß oder nur teilweise entsättigt — mit einem stufenlosen Regler von 0–100 % und sofortiger Vorschau." },
    { icon: "burst_mode", title: "Stapelverarbeitung", description: "Wandeln Sie einen ganzen Stapel JPG-, PNG- oder WEBP-Bilder gleich um und laden Sie sie als ZIP herunter." },
    { icon: "lock", title: "100 % privat", description: "Alles läuft in Ihrem Browser mit HTML-Canvas — Ihre Bilder werden nie auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Was bewirkt der Intensitätsregler?", a: "Bei 100 % ist das Bild vollständig schwarz-weiß; niedrigere Werte mischen die Originalfarben mit Grau für einen verblassten, teilweise entsättigten Look." },
    { q: "Kann ich viele Bilder auf einmal schwarz-weiß machen?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten — ein einzelnes Bild wird direkt heruntergeladen, mehrere Bilder zusammen als ZIP." },
    { q: "Welche Formate werden unterstützt?", a: "JPG, PNG und WEBP; das Ausgabeformat können Sie unabhängig vom Eingabeformat wählen." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Wird die Datei durch Graustufen kleiner?", a: "Meistens ja, manchmal sogar deutlich. Ohne Farbinformation muss der Encoder weniger speichern — gerade PNG kann um die Hälfte oder mehr schrumpfen. Bei fotografierten Dokumenten und Scans ist das einer der einfachsten Wege, Dateigröße zu sparen." },
    { q: "Ist schwarz-weiß dasselbe wie Graustufen?", a: "Nicht ganz, auch wenn die Begriffe oft gleich verwendet werden. Graustufen enthalten 256 Abstufungen von Schwarz bis Weiß. Echtes Schwarz-Weiß hat ein Bit pro Pixel — reines Schwarz oder reines Weiß, nichts dazwischen —, wie es Faxgeräte und manche Scanner erzeugen, und das sieht ganz anders aus." },
    { q: "Kann ich die Farbe danach zurückholen?", a: "Nein. Die Umwandlung in Graustufen verwirft die Farbkanäle endgültig, behalten Sie also Ihr Original, falls Sie es noch brauchen. Das Tool arbeitet mit einer Kopie und verändert nie die Datei auf Ihrem Datenträger, aber das exportierte Schwarz-Weiß-Bild ist ein Ergebnis ohne Rückweg." },
    { q: "Warum werden manche Farben zum gleichen Grauton?", a: "Weil Graustufen die Helligkeit messen, nicht den Farbton. Ein kräftiges Rot und ein kräftiges Grün können fast dieselbe wahrgenommene Helligkeit haben und fallen deshalb auf nahezu dasselbe Grau zusammen. Darum kann ein buntes Diagramm in Graustufen unlesbar werden — die Kategorien waren nur über den Farbton unterscheidbar." },
    { q: "Hilft das beim Drucken?", a: "Oft. Wenn Sie selbst umwandeln, entscheiden Sie, wie die Tonwerte abgebildet werden, statt es dem Druckertreiber zu überlassen. Außerdem vermeiden Sie, dass ein Dokument mit einem einzigen farbigen Logo auf Seite eins als Farbdruck abgerechnet wird." },
    { q: "Kann ich einen ganzen Stapel in Graustufen umwandeln?", a: "Ja. Fügen Sie beliebig viele Bilder hinzu, alle werden umgewandelt und als eine ZIP-Datei zurückgegeben — der übliche Fall bei einer Reihe gescannter Seiten oder einer einheitlichen Galerie." },
    { q: "Kann ich auch ein Foto schwarz weiß machen, das ich mit dem Handy aufgenommen habe?", a: "Ja. Das Tool läuft im Handy-Browser: Foto aus der Galerie wählen, Intensität einstellen und das Schwarz-Weiß-Bild direkt auf dem Gerät speichern. Auch dabei wird nichts hochgeladen." },
  ],

  security:
    "Ihre Bilder bleiben privat. Die Umwandlung in Graustufen geschieht vollständig in Ihrem Browser mit HTML-Canvas — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // GrayscaleTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "Clear files": "Dateien leeren",
    "Remove": "Entfernen",
    "Live preview of": "Live-Vorschau von",
    "Grayscale Settings": "Schwarz-Weiß-Einstellungen",
    "Grayscale settings": "Schwarz-Weiß-Einstellungen",
    "Intensity": "Intensität",
    "100% = fully black & white. Lower values desaturate partially.":
      "100 % = vollständig schwarz-weiß. Niedrigere Werte entsättigen teilweise.",
    "— applied to all {n} images.": "— wird auf alle {n} Bilder angewendet.",
    "Output format": "Ausgabeformat",
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    "Convert": "Umwandeln",
    "Converting…": "Wird umgewandelt…",
    "Grayscale {n} images": "{n} Bilder schwarz-weiß machen",
    "Grayscale & download": "Schwarz-weiß machen & herunterladen",
    "Converted 1 image to grayscale.": "1 Bild in Graustufen umgewandelt.",
    "Converted {n} images to grayscale.": "{n} Bilder in Graustufen umgewandelt.",
    "Grayscale failed.": "Umwandlung in Graustufen fehlgeschlagen.",
    "done": "fertig",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
  },
};

export default content;
