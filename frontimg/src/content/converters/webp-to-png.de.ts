import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de WebP-to-PNG converter.
 *
 * Head term "WebP in PNG" (18.1K/mo in Germany). The angle is the one the
 * English page takes: a file that will not open on double-click, converted
 * losslessly with the transparency intact.
 */
const copy: LocalizedPairCopy = {
  name: "WebP in PNG",
  seoTitle: "WebP in PNG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "WebP in PNG umwandeln, kostenlos und ohne Anmeldung: verlustfrei, Transparenz bleibt erhalten, ganze Stapel als ZIP. Läuft direkt in Ihrem Browser.",
  unique: {
    intro:
      "WebP macht Webseiten schnell, ist aber immer noch das Format, das sich per Doppelklick nicht öffnen lässt. Wandeln Sie WebP in PNG um, erhalten Sie eine Datei, die jedes Programm versteht – mit intakter Transparenz und ohne Qualitätsverlust. Da PNG verlustfrei ist, kommen genau die Pixel heraus, die hineingegangen sind. Ziehen Sie ein WebP oder hundert hinein; umgewandelt wird alles in Ihrem Browser.",
    whyConvert:
      "Der übliche Grund ist schlicht fehlende Kompatibilität. Sie haben ein Bild von einer Webseite gespeichert, und nun weigern sich Photoshop, PowerPoint, das Upload-Formular Ihrer Druckerei oder ein älteres Android-Handy, es anzurühren. PNG ist die sicherste Antwort auf dieses Problem: Das Format wird seit Ende der 1990er-Jahre überall unterstützt und bewahrt – anders als JPG – die Transparenz, sodass ein Logo mit durchsichtigem Hintergrund den Wechsel übersteht. Der zweite häufige Grund ist die Bearbeitung. WebP ist standardmäßig verlustbehaftet, und jeder Speichervorgang verschlechtert das Bild ein wenig mehr. Einmal in PNG umgewandelt, haben Sie eine verlustfreie Arbeitsdatei, die Sie beliebig oft zuschneiden, retuschieren und neu speichern können, ohne dass das Bild dabei unbemerkt schlechter wird.",
    notes: [
      {
        heading: "Das PNG wird größer – das ist normal",
        body:
          "Ein WebP mit 180 KB kann als PNG leicht bei 900 KB landen, und dabei ist nichts schiefgegangen. WebP erreicht seine geringe Größe, indem es Bilddaten verwirft; PNG darf überhaupt nichts verwerfen. Sie tauschen Bytes gegen Kompatibilität und gegen eine Datei, die sich nicht weiter verschlechtert. Ist die neue Größe ein Problem und brauchen Sie keine Transparenz, wird eine Umwandlung in JPG deutlich kleiner. Wollten Sie die Datei eigentlich nur verkleinern statt das Format zu wechseln, ist das Tool zum Bild komprimieren die bessere Wahl.",
      },
      {
        heading: "Animiertes WebP wird zu einem Einzelbild",
        body:
          "WebP kann ähnlich wie GIF eine Animation enthalten. Ein Standbildformat wie PNG kann das nicht abbilden, deshalb wird bei einem animierten WebP nur das erste Bild übernommen. Soll die Bewegung erhalten bleiben, wandeln Sie in GIF statt in PNG um. Möchten Sie gezielt jedes Einzelbild als eigene Datei, ist das eine andere Aufgabe als die, die dieses Tool erledigt.",
      },
      {
        heading: "Die Transparenz bleibt exakt erhalten",
        body:
          "WebP und PNG speichern beide einen vollen 8-Bit-Alphakanal. Weiche Kanten, Schlagschatten und geglätteter Text werden daher sauber übernommen. Es gibt keinen Schritt, der Ebenen zusammenführt, und keine Hintergrundfarbe auszuwählen, weil nichts aufgefüllt werden muss. Genau das ist der praktische Hauptvorteil gegenüber einer Umwandlung in JPG, bei der hinter jedes transparente Pixel eine feste Farbe gemalt werden müsste.",
      },
    ],
    faqs: [
      {
        q: "Verliert das Bild Qualität, wenn ich WebP in PNG umwandle?",
        a: "Nein. PNG ist verlustfrei, jedes Pixel wird also exakt übernommen. Beachten Sie aber, was die Umwandlung nicht kann: Wurde das ursprüngliche WebP verlustbehaftet gespeichert, sind die Details schon damals verloren gegangen. Das PNG bewahrt das Bild so, wie es jetzt ist, und stellt nichts wieder her.",
      },
      {
        q: "Warum ist mein PNG so viel größer als das WebP?",
        a: "Weil PNG niemals Daten wegwirft. Die geringe Größe von WebP kommt von der verlustbehafteten Kompression, und diesen Trick kann PNG nicht nutzen. Eine drei- bis sechsmal größere Datei ist bei Fotos völlig normal und der erwartbare Preis für eine verlustfreie, überall lesbare Datei.",
      },
      {
        q: "Bleibt die Transparenz bei der Umwandlung erhalten?",
        a: "Ja, vollständig. Beide Formate unterstützen einen Alphakanal, transparente und halbtransparente Bereiche werden also unverändert übernommen. Hinter Ihrem Bild erscheint kein weißes Rechteck.",
      },
      {
        q: "Was passiert mit einem animierten WebP?",
        a: "Sie erhalten das erste Bild als statisches PNG. PNG unterstützt keine Animation, die übrigen Bilder lassen sich also nicht darstellen. Wandeln Sie stattdessen in GIF um, wenn die Animation erhalten bleiben soll.",
      },
      {
        q: "Kann ich einen ganzen Ordner mit WebP-Dateien auf einmal umwandeln?",
        a: "Ja. Wählen Sie so viele Dateien aus oder ziehen Sie sie hinein – sie werden nacheinander umgewandelt und in einem einzigen ZIP gebündelt, sodass Sie einen Download statt Dutzender haben.",
      },
      {
        q: "Warum öffnen die Windows-Fotoanzeige oder Photoshop meine WebP-Datei nicht?",
        a: "WebP kam 2010 auf den Markt, aber Desktop-Software hat das Format nur langsam übernommen. Photoshop brauchte bis Version 23.2 ein Plug-in, und ältere Windows-Versionen benötigen einen Codec aus dem Microsoft Store. Die Umwandlung in PNG umgeht das ganze Problem, statt es Version für Version zu lösen.",
      },
      {
        q: "Werden meine WebP-Bilder dafür hochgeladen?",
        a: "In der Regel nicht. Ihr Browser kann WebP selbst lesen und PNG selbst schreiben, die Umwandlung findet also in Ihrem Tab statt. Nur ein außergewöhnlich hochauflösendes Bild, das ein Browser-Tab nicht mehr darstellen kann, geht an unseren Server und wird direkt danach gelöscht.",
      },
    ],
  },
};

export default copy;
