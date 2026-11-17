import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de AVIF-to-PNG converter.
 *
 * Head term "AVIF in PNG". The deciding factor against the AVIF-to-JPG page
 * is transparency and a lossless master file, so that is where this copy
 * spends its words.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF in PNG",
  seoTitle: "AVIF in PNG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "AVIF in PNG umwandeln, kostenlos und ohne Anmeldung: Transparenz bleibt erhalten, verlustfreie Arbeitsdatei, mehrere Dateien als ZIP. Läuft direkt im Browser.",
  unique: {
    intro:
      "Hat ein AVIF einen transparenten Hintergrund, ist PNG das richtige Ziel und nicht JPG. Wenn Sie AVIF in PNG umwandeln, bleibt der Alphakanal intakt und das Ergebnis wird verlustfrei gespeichert. Sie erhalten also genau das, was der Browser dekodiert hat – eine saubere Arbeitsdatei, die Sie in ein Designprogramm ziehen und beliebig oft bearbeiten können, ohne dass sie weiter an Qualität verliert.",
    whyConvert:
      "Ob Sie hierhin oder in JPG umwandeln, entscheidet sich fast immer an der Transparenz. AVIF enthält einen vollen Alphakanal, und bei einer Umwandlung in JPG muss diese Transparenz zerstört und durch eine feste Füllung ersetzt werden. PNG bewahrt sie – wichtig für Logos, freigestellte Produktbilder, Icons und alles, was auf einem Hintergrund stehen soll, den Sie nicht kontrollieren. Der zweite Faktor ist die Bearbeitung. PNG ist verlustfrei: Einmal umgewandelt, können Sie so oft zuschneiden, retuschieren und neu speichern, wie Sie möchten, ohne dass sich Kompressionsschäden ansammeln – das kann weder AVIF noch JPG bieten. Der Preis ist die Größe: PNG speichert alles, und ein AVIF mit wenigen hundert Kilobyte kann als PNG leicht mehrere Megabyte groß werden. Für eine Vorlagendatei ist das ein fairer Preis, für ein Bild auf einer Webseite ein schlechter.",
    notes: [
      {
        heading: "Rechnen Sie mit einem drastischen Größenzuwachs",
        body:
          "AVIF gehört zu den effizientesten Formaten überhaupt, PNG zu den am wenigsten effizienten; zwischen beiden umzuwandeln kann die Dateigröße verfünf- bis verzehnfachen. Dabei ist nichts kaputtgegangen. Betrachten Sie das PNG als Arbeitskopie und nicht als etwas zum Veröffentlichen – brauchen Sie es danach auf einer Webseite, wandeln Sie es weiter in WebP um, das die Transparenz bei einem Bruchteil des PNG-Gewichts behält.",
      },
      {
        heading: "Die Transparenz wird exakt übertragen",
        body:
          "Beide Formate speichern 8-Bit-Alpha, halbtransparente Pixel bleiben also halbtransparent. Weiche Schatten, ausgeblendete Kanten und geglätteter Text überstehen den Wechsel ohne Lichthof und ohne Randlinie. Eine Hintergrundfarbe müssen Sie hier nicht wählen, weil nichts aufgefüllt werden muss – genau das ist der Vorteil gegenüber einer Umwandlung in JPG.",
      },
      {
        heading: "HDR wird beim Dekodieren abgeflacht",
        body:
          "AVIF kann hohen Dynamikumfang und einen erweiterten Farbraum speichern. Das übliche PNG kann das nicht, und der Browser rechnet das Bild beim Dekodieren auf Standarddynamik herunter. Bei den meisten Bildern sieht man davon nichts; bei einem bewusst als HDR aufgenommenen Foto mit sehr hellen Lichtern kann es flacher wirken als das Original. Das passiert schon beim Dekodieren und gilt daher für jedes Zielformat.",
      },
    ],
    faqs: [
      { q: "Bleibt beim Umwandeln von AVIF in PNG die Transparenz erhalten?", a: "Ja, vollständig. Beide Formate unterstützen einen 8-Bit-Alphakanal, transparente und halbtransparente Bereiche werden also unverändert und ohne Hintergrundfüllung übertragen." },
      { q: "Ist die Umwandlung verlustfrei?", a: "Die PNG-Kodierung ist verlustfrei, in diesem Schritt geht also nichts verloren. Das AVIF selbst wurde aber wahrscheinlich verlustbehaftet gespeichert, und die Umwandlung bewahrt das Bild so, wie es jetzt ist – bereits verworfene Details stellt sie nicht wieder her." },
      { q: "Warum ist das PNG so viel größer?", a: "Weil PNG niemals Daten verwirft, während AVIF darin äußerst effizient ist. Eine fünf- bis zehnfache Größe ist normal. Wandeln Sie weiter in WebP um, wenn Sie eine kleine Datei mit Transparenz brauchen." },
      { q: "Soll ich für mein AVIF PNG oder JPG wählen?", a: "PNG, wenn das Bild Transparenz hat oder Sie es bearbeiten wollen. JPG, wenn es ein deckendes Foto ist und Sie die kleinste, am breitesten akzeptierte Datei möchten." },
      { q: "Kann ich mehrere AVIF-Dateien auf einmal umwandeln?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten – sie werden in Ihrem Browser nacheinander umgewandelt und gemeinsam als ein ZIP zurückgegeben." },
    ],
  },
};

export default copy;
