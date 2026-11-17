import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-in-jpg-umwandeln.
 *
 * Head term "Bild in JPG umwandeln" (2.4K/mo, DE) — German converter queries
 * take the "X in Y" form. "In JPG umwandeln" and "Bildkonverter" are the
 * secondaries, used in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-jpg",
  locale: "de",
  name: "Bild in JPG umwandeln",
  tagline:
    "Wandeln Sie PNG-, WEBP-, GIF- und BMP-Bilder online in JPG um – im Stapel und mit einstellbarer Qualität. Kostenlos, schnell und privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "Bild in JPG umwandeln – kostenlos & online | oMyImage",
  metaDescription:
    "Bild in JPG umwandeln, kostenlos und ohne Anmeldung: PNG, WEBP, GIF und BMP in JPG – im Stapel, mit Qualitätsregler, direkt im Browser. Ihr Bildkonverter.",

  intro:
    "Sie brauchen Bilder, die überall funktionieren und wenig Speicher belegen? Mit dem oMyImage-Tool können Sie jedes Bild in JPG umwandeln: PNG-, WEBP-, GIF- und BMP-Dateien werden direkt in Ihrem Browser zu hochwertigen JPGs. Wandeln Sie ein einzelnes Bild oder einen ganzen Stapel um, wählen Sie die Qualität und die Hintergrundfarbe, die eine vorhandene Transparenz ersetzt. Die Umwandlung läuft auf Ihrem Gerät – sofort und privat.",

  sections: [
    {
      heading: "Warum überhaupt in JPG umwandeln?",
      id: "why",
      body: [
        "Fast jeder, der in JPG umwandelt, löst ein Kompatibilitätsproblem und trifft keine ästhetische Entscheidung. Ein Upload-Formular lehnt die Datei ab, eine Druckerei nimmt sie nicht an, ein älteres Programm öffnet sie nicht, oder ein E-Mail-Anhang muss unter einer bestimmten Größe bleiben. JPG ist das Format, das diese Diskussionen beendet – drei Jahrzehnte alt, frei von Patenten und von allem lesbar.",
        "Der zweite Grund ist das Gewicht. Vor allem PNG und BMP speichern weit mehr Daten, als ein Foto braucht. Die Umwandlung in JPG verkleinert die Datei bei vernünftiger Qualität oft um 80 % oder mehr, ohne sichtbaren Unterschied. Für alles, was Sie per E-Mail verschicken, hochladen oder auf einer Webseite zeigen, ist das der Unterschied zwischen einer Datei, die funktioniert, und einer, die scheitert.",
      ],
    },
    {
      heading: "Was JPG nicht kann",
      id: "limits",
      body: [
        "JPG kennt keine Transparenz. Das Format hat überhaupt keinen Alphakanal, deshalb muss alles Durchsichtige vor dem Speichern mit einer Vollfarbe übermalt werden. Für ein Foto ist das kein Problem, für ein Logo, das auf einem farbigen Hintergrund stehen soll, ist es falsch.",
        "Außerdem enthält eine JPG-Datei genau ein Bild, Animationen gehen also verloren – ein animiertes GIF oder WebP wird zu seinem ersten Frame. Und weil JPG verlustbehaftet ist, verwirft jedes Speichern ein wenig mehr Detail. Wandeln Sie einmal aus der besten Quelle um, die Sie haben, und behalten Sie das Original, falls Sie später noch bearbeiten möchten.",
        "Schließlich eignet sich JPG schlecht für Inhalte mit scharfen Kanten. Screenshots, Diagramme, Strichzeichnungen und alles mit kleiner Schrift bekommen einen leichten Schleier um jede Kante und werden oft nicht einmal kleiner. Für solche Bilder ist PNG oder WEBP das bessere Ziel.",
      ],
    },
    {
      heading: "Die richtige Qualität wählen",
      id: "quality",
      body: [
        "Der Qualitätsregler bestimmt, wie stark Details verworfen werden. Zwischen 85 und 92 % ist die Kompression praktisch unsichtbar, und die Datei ist trotzdem deutlich kleiner als die Quelle – fangen Sie dort an, wenn nichts dagegen spricht.",
        "Gehen Sie auf 95 % und höher bei Bildern, die gedruckt, vergrößert oder genau betrachtet werden; die Datei wächst schnell für einen Unterschied, den auf dem Bildschirm kaum jemand sieht, aber der Druck verzeiht nichts. Gehen Sie auf 70–80 % herunter, wenn Sie eine feste Größengrenze einhalten müssen und es sich um ein gewöhnliches Foto handelt. Darunter werden Blockartefakte sichtbar – zuerst im Himmel, auf Hauttönen und in jedem weichen Farbverlauf.",
      ],
    },
    {
      heading: "Womit die Transparenz gefüllt wird",
      id: "background",
      body: [
        "Da die Transparenz zu irgendetwas werden muss, übernimmt dieses Tool standardmäßig automatisch die Farbe, die es an den Rändern des Bildes findet – ohne dass Sie etwas auswählen müssen und ohne weißes Rechteck um ein Motiv, das nie für Weiß gedacht war. Weiß, Schwarz oder eine eigene Farbe sind nur einen Klick entfernt, wenn Sie etwas anderes möchten, etwa passend zu einer dunklen Oberfläche oder einer farbigen Karte.",
        "Ein Punkt, auf den Sie achten sollten: Die Transparenz in PNG und WebP ist meist kantengeglättet, die Randpixel sind also teilweise durchsichtig und mischen sich mit der gewählten Farbe. Ein Bild, das für Weiß vorbereitet und dann mit Schwarz gefüllt wurde, kann einen hellen Saum zeigen. Tritt das auf, ist es sauberer, die Quelle vor dem richtigen Hintergrund neu zu exportieren, als den Saum nachträglich zu korrigieren.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild in JPG um",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere PNG-, WEBP-, GIF- oder BMP-Bilder aus oder ziehen Sie sie in das Feld." },
    { title: "Optionen festlegen", description: "Wählen Sie die JPG-Qualität und die Hintergrundfarbe, mit der Transparenz aufgefüllt wird." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf Umwandeln – ein einzelnes JPG wird sofort heruntergeladen, mehrere Dateien kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Stapelumwandlung", description: "Wandeln Sie Dutzende PNG-, WEBP-, GIF- oder BMP-Bilder auf einmal in JPG um und laden Sie alles als eine ZIP-Datei herunter." },
    { icon: "tune", title: "Qualität einstellen", description: "Wählen Sie die JPG-Qualität von 50 % bis 100 %, um Dateigröße und Bildtreue auszubalancieren." },
    { icon: "lock", title: "100 % privat", description: "Die Umwandlung läuft mit HTML-Canvas in Ihrem Browser, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Welche Formate kann ich in JPG umwandeln?", a: "PNG, WEBP, GIF und BMP. Bei GIFs wird der erste Frame umgewandelt." },
    { q: "Was passiert mit der Transparenz?", a: "JPG unterstützt keine Transparenz, deshalb werden transparente Bereiche mit einer Hintergrundfarbe gefüllt. Standardmäßig übernehmen wir automatisch die Farbe an den Rändern des Bildes; wählen Sie stattdessen Weiß, Schwarz oder eine eigene Farbe, wenn Sie etwas anderes möchten." },
    { q: "Kann ich viele Bilder auf einmal umwandeln?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten – ein einzelnes Bild wird als JPG heruntergeladen, mehrere Bilder zusammen als ZIP." },
    { q: "Ist der Bildkonverter wirklich kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Behält das JPG meine EXIF- und Kameradaten?", a: "Standardmäßig ja – EXIF- oder XMP-Daten der Quelle werden in das JPG übernommen, einschließlich Aufnahmedatum, Kameramodell und GPS-Koordinaten, sofern vorhanden. Setzen Sie das Häkchen bei „Metadaten entfernen“, um all das wegzulassen, zusammen mit dem Farbprofil. PNG-, GIF- und BMP-Dateien enthalten nur selten EXIF-Daten, bei den meisten Quellen gibt es also nichts zu übernehmen." },
    { q: "Bleibt das Farbprofil erhalten?", a: "Nein, und das ist Absicht. Bei der Umwandlung wird das Bild in sRGB dekodiert; das ursprüngliche Profil mitzunehmen würde die neuen Pixel falsch beschreiben und die Farben verschieben. Das JPG wird als sRGB gespeichert – davon geht jeder Bildbetrachter ohnehin aus –, und das eingebettete sRGB-Profil entfällt ganz, wenn Sie „Metadaten entfernen“ wählen." },
    { q: "Aus welchen Formaten kann ich umwandeln?", a: "PNG, WEBP, GIF und BMP. Das sind die Formate, die ein Browser selbst dekodieren kann – nur deshalb kann die Umwandlung auf Ihrem Gerät stattfinden. HEIC und AVIF haben eigene Seiten, weil sie anders verarbeitet werden müssen." },
    { q: "Warum ist JPG immer noch das sicherste Format?", a: "Weil es dreißig Jahre alt, patentfrei und in praktisch jeder Software umgesetzt ist, die je ein Bild angezeigt hat. Neuere Formate komprimieren besser, aber „besser“ nützt nichts, wenn das System, in das Sie hochladen, die Datei ablehnt." },
    { q: "Welche Qualitätseinstellung sollte ich verwenden?", a: "85–92 % passt für fast alles. Gehen Sie höher bei Fotos, die gedruckt werden oder in die ein Kunde hineinzoomt. Unter 70 % sehen Sie Blockartefakte im Himmel und in weichen Verläufen – ab da bemerken Betrachter die Kompression statt des Bildes." },
    { q: "Kann ich ein animiertes GIF umwandeln?", a: "Sie erhalten den ersten Frame als unbewegtes JPG. Ein JPG enthält genau ein Bild, die Animation bleibt also nicht erhalten. Wenn Sie einen bestimmten Frame brauchen, zerlegen Sie das GIF zuerst mit dem Tool GIF in Bilder und wandeln Sie dann den gewünschten Frame um." },
    { q: "Gibt es eine Begrenzung bei der Anzahl der Dateien?", a: "Keine feste Grenze. Ein einzelnes Bild wird direkt heruntergeladen, mehrere werden in eine ZIP-Datei gepackt. Große Stapel dauern nur etwas länger, und der Tab bleibt während der Verarbeitung nutzbar." },
    { q: "Werden meine Bilder hochgeladen?", a: "Normalerweise nicht – die Umwandlung in JPG läuft in Ihrem Browser. Nur ein Bild über etwa 16 Megapixel, das für einen Browser-Tab zu groß ist, wird auf unserem Server verarbeitet und dort innerhalb von etwa einer Stunde gelöscht." },
  ],

  security:
    "Ihre Bilder bleiben privat. Die Umwandlung in JPG erfolgt in Ihrem Browser mit HTML-Canvas – keine Speicherung, kein Tracking Ihrer Dateien. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, geht an unseren Server und wird innerhalb von etwa einer Stunde gelöscht.",

  ui: {
    // Drop hint from app/convert-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG, WEBP, GIF or BMP images here": "oder PNG-, WEBP-, GIF- oder BMP-Bilder hier ablegen",
  },
};

export default content;
