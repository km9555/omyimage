import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de WebP-to-JPG converter.
 *
 * Head term "WebP in JPG" (22.2K/mo, the biggest German converter query).
 * The German angle is the upload that refuses .webp: Druckereien, online
 * application portals, shop back ends, older Office versions.
 */
const copy: LocalizedPairCopy = {
  name: "WebP in JPG",
  seoTitle: "WebP in JPG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "WebP in JPG umwandeln, kostenlos und ohne Anmeldung: viele Dateien auf einmal, Qualität einstellbar, Farbe für transparente Bereiche wählbar. Läuft im Browser.",
  unique: {
    intro:
      "Auf einer Webseite ist WebP hervorragend, überall sonst eher unpraktisch. Wenn Sie WebP in JPG umwandeln, erhalten Sie das eine Bildformat, das nirgends abgelehnt wird – von E-Mail-Programmen, Druckereien, digitalen Bilderrahmen, älteren Handys und Upload-Formularen von Behörden. Sie bestimmen die Qualität, und wenn das WebP transparente Bereiche hat, wählen Sie auch die Farbe, mit der sie gefüllt werden, denn JPG kann Transparenz nicht speichern.",
    whyConvert:
      "Fast alle, die hier landen, sind gegen eine Wand gelaufen, statt eine Wahl getroffen zu haben. Sie haben per Rechtsklick ein Bild gespeichert, und dort, wo es hin soll, wird keine .webp-Datei akzeptiert. Diese Liste ist lang und hartnäckig: viele Druckdienste, ältere Office-Versionen, Produkt-Uploads in Onlineshops, digitale Bilderrahmen, Bewerbungsportale und eine Menge eingebetteter und industrieller Software. JPG ist seit drei Jahrzehnten der kleinste gemeinsame Nenner der digitalen Bildwelt, deshalb ist Umwandeln meist schneller, als sich mit dem Programm herumzuschlagen, das die Datei ablehnt. Der zweite Grund ist die Dateigröße. Ist Ihr WebP zufällig verlustfrei gespeichert – bei Screenshots ist das häufig so –, kann es sogar größer sein als ein JPG desselben Bildes, und die Umwandlung verkleinert es deutlich.",
    notes: [
      {
        heading: "Aus Transparenz muss etwas werden",
        body:
          "JPG hat überhaupt keinen Alphakanal, ein transparenter Hintergrund kann also nicht einfach mitkommen. Darunter muss etwas gemalt werden, und üblich ist überall Weiß. Auf einer weißen Seite passt das, auf einer dunklen fällt es sofort auf – deshalb lässt Sie dieses Tool die Füllfarbe selbst wählen, statt sie vorauszusetzen. Ist Ihnen die Transparenz wirklich wichtig, ist JPG das falsche Ziel: Wandeln Sie in PNG um und behalten Sie sie.",
      },
      {
        heading: "Zwei verlustbehaftete Schritte hintereinander",
        body:
          "Ein verlustbehaftetes WebP hat bereits Details verworfen, und die Kodierung als JPG verwirft noch etwas mehr. In der Praxis sieht man das bei vernünftigen Qualitätseinstellungen selten, aber der Effekt ist real und summiert sich, wenn Sie immer wieder hin und her umwandeln. Wandeln Sie einmal um, von der besten Quelle, die Sie haben, und behalten Sie dieses Ergebnis. Soll das Bild noch weiter bearbeitet werden, ist ein verlustfreies PNG die bessere Zwischenstufe.",
      },
      {
        heading: "Animiertes WebP ergibt ein einziges Bild",
        body:
          "JPG speichert genau ein Bild, deshalb wird ein animiertes WebP in sein erstes Einzelbild umgewandelt. Innerhalb von JPG gibt es daran nichts zu ändern. Geht es Ihnen um die Animation, wandeln Sie stattdessen in GIF um.",
      },
    ],
    faqs: [
      { q: "Warum öffnet mein Computer keine WebP-Datei?", a: "Weil WebP 2010 erschien und Desktop-Software nur langsam nachgezogen hat. Ältere Windows-Versionen brauchen einen Codec aus dem Microsoft Store, Photoshop unterstützt das Format erst seit Version 23.2 nativ, und viele kleinere Programme können es bis heute nicht. Die Umwandlung in JPG erspart Ihnen, für jedes Programm einzeln eine Lösung zu suchen." },
      { q: "Wird das JPG größer oder kleiner als das WebP?", a: "Meist etwas größer, wenn das WebP verlustbehaftet war, denn WebP komprimiert bei gleicher sichtbarer Qualität effizienter. War das WebP verlustfrei – typisch für Screenshots und Grafiken –, wird das JPG dagegen deutlich kleiner." },
      { q: "Was passiert mit transparenten Bereichen?", a: "Sie werden mit einer einheitlichen Farbe gefüllt, weil JPG keine Transparenz speichern kann. Voreingestellt ist Weiß, und Sie können die Farbe vor dem Umwandeln ändern. Wenn die Transparenz erhalten bleiben soll, wandeln Sie in PNG um." },
      { q: "Verschlechtert die Umwandlung die Bildqualität?", a: "Ein wenig, weil JPG verlustbehaftet ist. Bei der Standardqualität ist der Unterschied in normaler Ansichtsgröße nicht zu sehen. Erhöhen Sie den Regler, wenn Sie detailreiche Fotos umwandeln, die Sie drucken möchten." },
      { q: "Kann ich viele WebP-Dateien auf einmal umwandeln?", a: "Ja. Ziehen Sie den ganzen Stapel hinein – die Dateien werden nacheinander umgewandelt und als ein einziges ZIP geliefert, damit Sie sich nicht durch einzelne Downloads klicken müssen." },
      { q: "Eignet sich das JPG für Bewerbungsportale oder Online-Formulare?", a: "Ja, das ist einer der häufigsten Anwendungsfälle. Viele Portale und Upload-Formulare akzeptieren nur JPG, PNG oder PDF und lehnen WebP ab. Wandeln Sie hier in JPG um, und falls eine Größengrenze in KB gilt, verkleinern Sie das Bild anschließend mit dem Tool zum Bild komprimieren." },
    ],
  },
};

export default copy;
