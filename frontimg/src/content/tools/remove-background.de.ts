import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/hintergrund-entfernen. Structure lives in ToolPageShell.
 *
 * Head term "Hintergrund entfernen" (60.5K/mo, KD 13) — the biggest German
 * query on the site. Secondaries "Bild Hintergrund entfernen" (9.9K), "Bild
 * freistellen" (5.4K) and "Hintergrund entfernen kostenlos" (4.4K) live in the
 * intro, a section heading and the FAQs. The marketplace example names what
 * German sellers use (Amazon, eBay, Kleinanzeigen, Etsy, Otto). "Sie" form.
 */
const content: ToolPageContent = {
  toolId: "remove-background",
  locale: "de",
  name: "Hintergrund entfernen",
  tagline:
    "Entfernen Sie den Hintergrund aus jedem Bild automatisch mit KI und laden Sie ein sauberes, transparentes PNG herunter. Mit der Open-Source-Engine rembg.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Hintergrund entfernen – kostenlos & online mit KI",
  metaDescription:
    "Hintergrund entfernen mit KI: Bild freistellen und als transparentes PNG laden — für Personen, Produkte, Logos. Kostenlos, ohne Anmeldung, ohne Wasserzeichen.",

  variantsHeading: "Hintergrund stattdessen ersetzen oder unscharf machen",

  intro:
    "Den Hintergrund aus einem Bild entfernen dauert hier nur einen Klick. Das Tool „Hintergrund entfernen“ von oMyImage nutzt ein Open-Source-KI-Modell, das das Motiv erkennt — eine Person, ein Produkt oder einen Gegenstand — und alles andere transparent macht. So können Sie ein Bild freistellen und erhalten ein sauberes PNG für Online-Shops, Präsentationen und Designs, kostenlos und ohne Wasserzeichen. Die rechenintensive KI-Arbeit läuft auf unserem Server; das Ergebnis laden Sie als transparentes PNG herunter.",

  sections: [
    {
      heading: "Was das KI-Modell tatsächlich macht",
      id: "how",
      body: [
        "Das ist kein Chroma-Keying. Ältere Hintergrund-Entferner suchten nach einem Bereich ähnlicher Pixel — das Greenscreen-Prinzip — und versagten, sobald der Hintergrund unruhig war oder das Motiv dessen Farbe teilte. Hier läuft ein Segmentierungsmodell, das mit einer sehr großen Zahl von Bildern trainiert wurde und für jedes Pixel vorhersagt, wie wahrscheinlich es zum Motiv im Vordergrund gehört.",
        "Deshalb kommt es mit einer Person in einem ganz normalen Zimmer zurecht statt nur vor einem Studiohintergrund. Das Modell hat gelernt, wie Menschen, Produkte und Tiere typischerweise aussehen, und kann sie daher auch von einem Hintergrund trennen, den es nie zuvor gesehen hat.",
        "Das erklärt auch, wann es scheitert. Ist sich das Modell unsicher — weil Motiv und Hintergrund ähnliche Töne haben, weil die Kante wirklich mehrdeutig ist oder weil das Motiv ungewöhnlich ist —, wird die Maske genau an diesen Stellen weich oder ausgefranst. Es trifft eine fundierte Schätzung, es misst nichts.",
      ],
    },
    {
      heading: "Bild freistellen: Tipps für einen sauberen Ausschnitt",
      id: "tips",
      body: [
        "Am wichtigsten ist der Kontrast. Ein Motiv, das sich in Helligkeit oder Farbe vom Hintergrund abhebt, lässt sich sauber trennen; eines, das mit ihm verschmilzt, nicht. Wenn Sie die Aufnahme selbst machen, bringt diese eine Entscheidung mehr als jede Einstellung.",
        "Gleichmäßiges, weiches Licht hilft ebenfalls. Harte Schatten auf der Grenze zwischen Motiv und Hintergrund verwirren die Kante, und ein Motiv im Gegenlicht verliert oft seinen Umriss ganz. Die Auflösung spielt an den Rändern eine Rolle — ein kleines, stark komprimiertes Bild gibt dem Modell weniger Material, und JPG-Artefakte an Kanten sind genau die Stellen, an denen Freisteller misslingen.",
        "Und schließlich: Lassen Sie das Motiv möglichst vollständig im Bild. Wird es vom Bildrand angeschnitten, findet das Modell auf dieser Seite keine Grenze, und das Ergebnis ist meist ein gerader Schnitt entlang des Rands.",
      ],
    },
    {
      heading: "Wofür Sie ein transparentes PNG nutzen",
      id: "uses",
      body: [
        "Am häufigsten ist das Produktfoto für ein Angebot auf einem Marktplatz, wo ein sauberer weißer oder transparenter Hintergrund oft Pflicht und nicht nur Geschmackssache ist. Amazon, eBay, Otto und die meisten E-Commerce-Plattformen schreiben es ausdrücklich vor, und auch auf Kleinanzeigen oder Etsy wirken freigestellte Produkte deutlich professioneller.",
        "Darüber hinaus: Profilbilder und Team-Porträts, die auf einer Markenfarbe stehen sollen, Präsentationsfolien, auf denen ein freigestelltes Motiv viel besser aussieht als ein Foto mit unpassendem Rechteck dahinter, Logos und Sticker sowie jede Designarbeit, bei der das Motiv andere Elemente überlappen soll. Da das Ergebnis ein gewöhnliches PNG mit Alphakanal ist, versteht es jedes Designprogramm.",
      ],
    },
    {
      heading: "Warum dieses Tool einen Server braucht",
      id: "server",
      body: [
        "Fast alles auf dieser Website läuft in Ihrem Browser. Das Hintergrundentfernen nicht, und der Grund ist die Größe: Das Segmentierungsmodell ist viel zu groß, um es sinnvoll in einen Browser-Tab zu laden, und es braucht mehr Rechenleistung, als ein Tab bequem liefern kann.",
        "Deshalb läuft das Modell als eigener Prozess auf unserem Rechner. Ihr Bild wird über eine verschlüsselte HTTPS-Verbindung übertragen und verarbeitet, und sowohl der Upload als auch das Ergebnis werden innerhalb einer Stunde gelöscht. Nichts wird aufbewahrt, indexiert oder zum Training verwendet. Seiten, die Ihre Dateien hochladen, sagen das auch offen.",
      ],
    },
  ],

  howToTitle: "So entfernen Sie den Hintergrund aus einem Bild",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein Bild aus oder ziehen Sie es per Drag-and-drop in den Arbeitsbereich." },
    { title: "Hintergrund entfernen", description: "Klicken Sie auf „Hintergrund entfernen“ — unsere KI erkennt das Motiv und schneidet den Rest weg." },
    { title: "Herunterladen", description: "Laden Sie Ihr Motiv als transparentes PNG herunter, bereit für jeden neuen Hintergrund." },
  ],

  features: [
    { icon: "auto_fix_high", title: "KI-Motiverkennung", description: "Ein neuronales Open-Source-Netz findet Personen, Produkte und Gegenstände und entfernt den Hintergrund automatisch." },
    { icon: "opacity", title: "Transparentes PNG", description: "Das Ergebnis ist ein sauberes, transparentes PNG, das Sie auf jede Farbe, jedes Foto und jedes Design legen können." },
    { icon: "verified_user", title: "Open-Source-Engine", description: "Basiert auf rembg — kostenlos, quelloffen und auch für die kommerzielle Nutzung geeignet." },
  ],

  faqs: [
    { q: "Wie funktioniert das Hintergrundentfernen?", a: "Ein KI-Modell (U²-Net aus dem Open-Source-Projekt rembg) erkennt das Hauptmotiv und macht alles andere transparent." },
    { q: "In welchem Format erhalte ich das Ergebnis?", a: "Als transparentes PNG, sodass Sie Ihr Motiv auf jeden neuen Hintergrund setzen können." },
    { q: "Funktioniert es bei Produkten und Personen?", a: "Ja — Personen, Produkte, Tiere und die meisten klar erkennbaren Motive gelingen gut. Sehr feine Details wie einzelne abstehende Haare können schwanken." },
    { q: "Kann ich den Hintergrund wirklich kostenlos entfernen?", a: "Ja. Sie brauchen keine Anmeldung, und auf dem Ergebnis landet kein Wasserzeichen. Die Engine (rembg + U²-Net) ist Open Source und für die kommerzielle Nutzung freigegeben." },
    { q: "Werden meine Bilder gespeichert?", a: "Nein. Verarbeitete Dateien liegen nur kurz für Ihren Download-Link bereit und werden innerhalb einer Stunde automatisch gelöscht." },
    { q: "Welche Bilder eignen sich am besten?", a: "Ein klares Motiv vor einem Hintergrund, von dem es sich abhebt. Porträts, Produkte auf einer schlichten Fläche und Haustiere funktionieren gut. Schwierig wird es, wenn Motiv und Hintergrund Farben und Töne teilen — eine graue Katze auf einem grauen Sofa ist wirklich knifflig." },
    { q: "Kommt das Tool mit Haaren und Fell zurecht?", a: "Recht gut, und genau hier sind Hintergrund-Entferner früher kläglich gescheitert. Feine Strähnen sind für jeden Freisteller der schwierigste Fall: Rechnen Sie damit, dass die Gesamtform stimmt und am Rand ein paar abstehende Haare verloren gehen. Eine gute Trennung zwischen Motiv und Hintergrund hilft enorm." },
    { q: "Warum muss das Ergebnis ein PNG sein?", a: "Weil Transparenz einen Alphakanal braucht und JPG keinen hat. Würden Sie den Freisteller als JPG speichern, käme der entfernte Bereich als einfarbiges Weiß zurück — und der Zweck wäre verfehlt. Auch WEBP unterstützt Transparenz, falls Sie eine kleinere Datei für das Web brauchen." },
    { q: "Kann ich einen neuen Hintergrund hinter das Motiv legen?", a: "Ja. Für eine einfarbige Fläche — etwa Weiß oder Hellgrau für ein Bewerbungs- oder Ausweisfoto — nutzen Sie „Hintergrundfarbe ändern“, das den Freisteller in einem Schritt auf jede Farbe setzt. „Hintergrund unscharf machen“ behält das Motiv und zeichnet die ursprüngliche Szene dahinter weich. Das transparente PNG von dieser Seite funktioniert außerdem in jedem Designprogramm." },
    { q: "Warum läuft dieses Tool auf einem Server, andere aber nicht?", a: "Weil es ein neuronales Netz nutzt, das viel zu groß ist, um es in einen Browser-Tab zu laden. Das Modell läuft als eigener Prozess auf unserem Rechner, Ihr Bild wird per HTTPS übertragen, und Upload wie Ergebnis werden innerhalb einer Stunde gelöscht." },
    { q: "Kann ich bei mehreren Bildern gleichzeitig den Hintergrund entfernen?", a: "Dieses Tool verarbeitet ein Bild nach dem anderen, weil jeder Durchlauf eine aufwendige Modellberechnung ist und keine schnelle Pixeloperation. Für mehrere Bilder bearbeiten Sie sie nacheinander — jedes dauert nur ein paar Sekunden." },
    { q: "Ist das Hochladen mit der DSGVO vereinbar?", a: "Ihr Bild wird ausschließlich zur Freistellung verarbeitet, verschlüsselt übertragen und spätestens nach einer Stunde gelöscht. Es wird weder an Dritte weitergegeben noch zum Trainieren von Modellen genutzt. Laden Sie trotzdem keine Bilder Dritter hoch, für die Sie keine Einwilligung haben." },
  ],

  security:
    "Die Verarbeitung läuft auf unserem Server mit der Open-Source-Engine rembg. Ergebnisse liegen nur kurz hinter einem privaten Download-Link und werden innerhalb einer Stunde automatisch gelöscht. Wir geben Ihre Bilder nie weiter und verwenden sie nicht erneut.",

  ui: {
    "Background colour": "Hintergrundfarbe",
    "Blur background": "Hintergrund unscharf machen",
    "Blur strength": "Stärke der Unschärfe",
    "Change background": "Hintergrund ändern",
    "Finding the subject…": "Motiv wird gesucht…",
    "ID photo colours": "Farben für Ausweisfotos",
    "The first run finds the subject on our server; changing the blur afterwards happens in your browser, with no extra run.": "Der erste Durchlauf findet das Motiv auf unserem Server; die Unschärfe ändern Sie danach in Ihrem Browser, ohne weiteren Durchlauf.",
    "The first run removes the background on our server; changing the colour afterwards happens in your browser, with no extra run.": "Der erste Durchlauf entfernt den Hintergrund auf unserem Server; die Farbe ändern Sie danach in Ihrem Browser, ohne weiteren Durchlauf.",
    // RemoveBgTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "Remove background": "Hintergrund entfernen",
    "Removing background…": "Hintergrund wird entfernt…",
    "or drop a JPG, PNG or WEBP here": "oder ein JPG, PNG oder WEBP hier ablegen",
    "a transparent PNG. Powered by the open-source rembg engine on the server.":
      "ein transparentes PNG. Erstellt mit der Open-Source-Engine rembg auf dem Server.",
    // Backend sentences this tool can surface (routes/image/remove-background).
    "Background removal isn't enabled on this server (rembg not installed).":
      "Das Entfernen des Hintergrunds ist auf diesem Server derzeit nicht verfügbar.",
  },
};

export default content;
