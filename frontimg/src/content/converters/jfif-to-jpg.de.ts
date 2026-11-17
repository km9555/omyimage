import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de JFIF-to-JPG converter.
 *
 * Head term "JFIF in JPG" (590/mo). A naming problem dressed up as a format
 * problem: the Windows registry hands Chrome .jfif for image/jpeg.
 */
const copy: LocalizedPairCopy = {
  name: "JFIF in JPG",
  seoTitle: "JFIF in JPG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "JFIF in JPG umwandeln, kostenlos und ohne Anmeldung: aus .jfif wird eine saubere .jpg-Datei, auch viele Dateien auf einmal als ZIP. Läuft direkt im Browser.",
  unique: {
    intro:
      "Sie haben ein Bild gespeichert, und Windows hat Ihnen eine .jfif-Datei gegeben, die die Hälfte Ihrer Programme nicht öffnen will. An der Datei ist nichts falsch – eine JFIF ist ein ganz gewöhnliches JPEG mit ungewöhnlicher Endung –, aber das hilft wenig, wenn das Upload-Formular sie ablehnt. Dieser Konverter liest die Datei und schreibt eine saubere .jpg, die sich so verhält, wie Sie es von Anfang an erwartet haben.",
    whyConvert:
      "Hier tarnt sich ein Namensproblem als Formatproblem. JFIF steht für JPEG File Interchange Format und ist der Container, den praktisch jede Datei, die Sie ohnehin JPG nennen, intern verwendet. Dass Sie plötzlich Dateien mit der Endung .jfif haben, liegt an einer Eigenheit der Windows-Registry: Bestimmte Kombinationen aus Windows und Chrome tragen .jfif als bevorzugte Endung für den MIME-Typ image/jpeg ein, und ab dann bekommen gespeicherte Bilder diese Endung statt .jpg. Die Bytes sind identisch mit dem, was Sie vorher bekommen hätten. Leider prüft viel Software die Endung statt des Dateiinhalts – Bewerbungsportale, ältere Fotoverwaltungen, Shop-Uploads, Abgabesysteme von Schulen und Hochschulen – und lehnt die Datei einfach ab. Die Datei von Hand umzubenennen, klappt oft, scheitert aber, wenn die Endung ausgeblendet ist, wenn es Dutzende Dateien sind oder wenn das Zielsystem auch den Inhalt prüft.",
    notes: [
      {
        heading: "Warum nicht einfach umbenennen?",
        body:
          "Oft geht das, und bei einer einzelnen Datei mit sichtbarer Endung ist es der schnellste Weg. Bei vielen Dateien stößt es an Grenzen, ebenso wenn Windows die Endungen ausblendet – dann haben Sie am Ende eine Datei namens foto.jpg.jfif, und nichts ist gewonnen. Die Umwandlung normalisiert die Datei außerdem: Sie wird dekodiert und als Standard-Baseline-JPEG neu kodiert. Das löst auch die seltenen Fälle, in denen das Zielprogramm sich an etwas im Inneren der Datei gestört hat und nicht an ihrem Namen.",
      },
      {
        heading: "Damit Windows das nicht wieder tut",
        body:
          "Die eigentliche Ursache ist eine Dateitypzuordnung in der Windows-Registry: Beim Eintrag für den Inhaltstyp image/jpeg ist .jfif als Standardendung hinterlegt. Ein Eingriff in die Registry behebt das dauerhaft für künftige Downloads, ändert aber nichts an den Dateien, die Sie schon haben – und ist nichts, was man nebenbei ausprobieren sollte. Die Umwandlung kümmert sich um das, was bereits auf Ihrer Festplatte liegt, und das ist meist das akute Problem.",
      },
      {
        heading: "Eine Neukodierung, minimaler Verlust",
        body:
          "Da JFIF und JPG dasselbe Format sind, ist diese Umwandlung fast ein Durchreichen. Das Bild wird einmal dekodiert und einmal neu kodiert, bei hoher Qualitätseinstellung ist der Unterschied nicht wahrnehmbar. Lassen Sie den Qualitätsregler weit oben – hier gibt es kein Größenproblem zu lösen, und jetzt ist nicht der Moment zum Komprimieren.",
      },
    ],
    faqs: [
      { q: "Was ist eine JFIF-Datei eigentlich?", a: "Ein JPEG. JFIF steht für JPEG File Interchange Format und ist der Standard-Container, den fast alle JPG-Dateien ohnehin verwenden. Der einzige Unterschied sind die Buchstaben nach dem Punkt." },
      { q: "Warum speichert Chrome Bilder als .jfif statt als .jpg?", a: "Eine Zuordnung in der Windows-Registry nennt .jfif als Standardendung für den Inhaltstyp image/jpeg. Chrome fragt Windows, welche Endung es verwenden soll, und bekommt .jfif zur Antwort. Das ist eine Eigenheit der Windows-Konfiguration, kein Fehler in Chrome." },
      { q: "Kann ich .jfif einfach in .jpg umbenennen?", a: "Häufig ja, denn der Inhalt ist bereits ein gültiges JPEG. Umständlich wird es, wenn Windows die Dateiendungen ausblendet; bei einem großen Stapel ist es unpraktisch, und es hilft nicht, wenn sich das Zielprogramm an etwas anderem als dem Namen stört." },
      { q: "Verliere ich durch die Umwandlung Qualität?", a: "Bei hoher Qualitätseinstellung praktisch keine. Das Bild wird einmal dekodiert und neu kodiert, ein sehr kleiner Generationsschritt. Lassen Sie den Regler weit oben, dann sehen Sie keinen Unterschied." },
      { q: "Kann ich viele JFIF-Dateien auf einmal umwandeln?", a: "Ja, und genau das ist der Hauptgrund, einen Konverter statt Umbenennen zu nutzen. Ziehen Sie den ganzen Ordner hinein, und Sie erhalten ein ZIP mit .jpg-Dateien zurück." },
      { q: "Ist eine JFIF-Datei gefährlich oder beschädigt?", a: "Nein. Es ist eine normale Bilddatei mit ungewohnter Endung. Nichts daran ist kaputt – und genau deshalb ist die Situation so verwirrend." },
    ],
  },
};

export default copy;
