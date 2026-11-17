import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de BMP-to-JPG converter.
 *
 * Head term "BMP in JPG" (320/mo). The angle is size — 36 MB bitmaps — and
 * the fact that BMP always converts locally (the server library has no BMP
 * loader, see pairs.ts), which no other pair can say.
 */
const copy: LocalizedPairCopy = {
  name: "BMP in JPG",
  seoTitle: "BMP in JPG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "BMP in JPG umwandeln, kostenlos und ohne Anmeldung: Bitmaps werden 90 % kleiner und mehr, Qualität einstellbar, Stapel als ZIP. Läuft immer lokal im Browser.",
  unique: {
    intro:
      "BMP-Dateien sind riesig, weil sie kaum komprimiert sind – eine Bitmap mit 12 Megapixeln belegt rund 36 MB, dasselbe Foto als JPG eher 3 MB. Wenn Sie BMP in JPG umwandeln, machen Sie solche Dateien am schnellsten brauchbar: zum Anhängen, zum Hochladen und zum Öffnen auf etwas anderem als Windows. Sie steuern die Qualität, und Stapel kommen als ZIP zurück.",
    whyConvert:
      "BMP speichert jedes Pixel vollständig, ohne nennenswerte Kompression – deshalb sind die Dateien so verblüffend groß. Das war Absicht, aus einer Zeit, in der die Dekodiergeschwindigkeit wichtiger war als Speicherplatz, und heute überlebt das Format vor allem in Windows-Hilfsprogrammen, älteren Scanner- und Kameratreibern, Bildschirmaufnahme-Tools sowie in Industrie- und Medizingeräten, die vor Jahrzehnten spezifiziert wurden. Sobald Sie eine solche Datei per E-Mail verschicken, auf eine Website stellen oder an fast irgendeine moderne Anwendung übergeben wollen, wird die Größe zum Problem. Die Umwandlung in JPG verkleinert sie typischerweise um 90 % oder mehr, ohne sichtbaren Unterschied bei vernünftiger Qualitätseinstellung. Sie löst außerdem ein Kompatibilitätsproblem, das viele überrascht: Unter Windows ist BMP problemlos lesbar, unter macOS, iOS und Android ist die Unterstützung aber lückenhafter, als man es bei einem so alten Format erwarten würde.",
    notes: [
      {
        heading: "Rechnen Sie mit einer sehr starken Verkleinerung",
        body:
          "Eine Verkleinerung um 90–97 % ist normal und kein Zeichen dafür, dass etwas schiefgelaufen ist. Sie wechseln von einem Format, das jedes Pixel wörtlich speichert, zu einem, das abbildet, was das menschliche Auge tatsächlich wahrnimmt. Brauchen Sie die Verkleinerung ganz ohne Verlust, wandeln Sie stattdessen in PNG um – immer noch eine große Ersparnis gegenüber BMP, typischerweise 40–70 %, und verlustfrei.",
      },
      {
        heading: "Diese Umwandlung läuft immer lokal",
        body:
          "Die meisten Tools hier geben sehr große Dateien zur Verarbeitung an einen Server weiter, BMP ist davon aber bewusst ausgenommen: Die serverseitige Bildbibliothek hat keinen BMP-Decoder, eine ausgelagerte Bitmap würde also scheitern statt umgewandelt zu werden. Ihr Browser kommt mit BMP bestens zurecht, deshalb bleiben BMP-Umwandlungen auf Ihrem Rechner, egal wie groß die Datei ist. Bei der Größe typischer Bitmaps ist das auch der schnellere Weg – es gibt keinen Upload, auf den Sie warten müssten.",
      },
      {
        heading: "Transparenz und Farbtiefe",
        body:
          "Die meisten BMP-Dateien im Umlauf haben 24 Bit und keine Transparenz, meist gibt es also nichts aufzufüllen. Manche 32-Bit-BMPs enthalten einen Alphakanal; weil JPG keinen speichern kann, wird jeder transparente Bereich mit der von Ihnen gewählten Hintergrundfarbe gefüllt. Sehr alte 8-Bit- oder 1-Bit-Bitmaps lassen sich problemlos umwandeln, ein 1-Bit-Schwarz-Weiß-Scan ist als PNG allerdings oft besser aufgehoben, weil PNG harte einfarbige Kanten effizienter speichert als JPG.",
      },
    ],
    faqs: [
      { q: "Warum sind BMP-Dateien so groß?", a: "Weil sie im Grunde unkomprimiert gespeichert werden – jedes Pixel vollständig ausgeschrieben. Eine 24-Bit-BMP mit 12 Megapixeln hat rund 36 MB. JPG komprimiert dasselbe Bild auf etwa ein Zehntel davon oder weniger." },
      { q: "Wie viel kleiner wird das JPG?", a: "Meist 90–97 % kleiner. Eine Bitmap mit 36 MB landet je nach Qualitätseinstellung und Detailreichtum des Bildes üblicherweise zwischen 1 und 4 MB." },
      { q: "Verliere ich Qualität, wenn ich BMP in JPG umwandle?", a: "Etwas, weil JPG verlustbehaftet ist. Bei der Standardeinstellung ist das in normaler Ansichtsgröße nicht zu sehen. Wenn gar nichts verloren gehen darf, wandeln Sie in PNG um – auch das ist viel kleiner als BMP." },
      { q: "Kann ich sehr große BMP-Dateien umwandeln?", a: "Ja. Die BMP-Umwandlung läuft immer in Ihrem Browser und nicht auf einem Server, weil die serverseitige Bibliothek BMP nicht lesen kann. Sehr große Dateien brauchen nur etwas länger." },
      { q: "Unterstützen BMP-Dateien Transparenz?", a: "24-Bit-BMPs, der übliche Fall, nicht. Manche 32-Bit-BMPs enthalten einen Alphakanal; da JPG keine Transparenz speichern kann, werden diese Bereiche mit der gewählten Hintergrundfarbe gefüllt." },
      { q: "Soll ich BMP in JPG oder in PNG umwandeln?", a: "JPG für Fotos und für die kleinstmögliche Datei. PNG, wenn Sie verlustfreie Qualität brauchen, wenn das Bild ein Screenshot oder eine Strichzeichnung ist oder wenn ein Alphakanal erhalten bleiben soll." },
    ],
  },
};

export default copy;
