import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de GIF-to-JPG converter.
 *
 * Head term "GIF in JPG". The angle is a still photo file for an upload that
 * will not take a GIF, or one frame instead of a multi-megabyte animation —
 * not editing, which is the GIF-to-PNG page's story.
 */
const copy: LocalizedPairCopy = {
  name: "GIF in JPG",
  seoTitle: "GIF in JPG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "GIF in JPG umwandeln, kostenlos und ohne Anmeldung: kleines Foto statt großer Animation, Farbe für transparente Bereiche wählbar, Stapel als ZIP. Im Browser.",
  unique: {
    intro:
      "Wenn Sie ein GIF in JPG umwandeln, erhalten Sie eine kleine Fotodatei, die überall angenommen wird. Das ist der richtige Schritt, wenn Sie ein Standbild anhängen, hochladen oder drucken müssen und das GIF entweder zu groß ist oder schlicht nicht akzeptiert wird. Transparente Bereiche werden mit einer Farbe Ihrer Wahl gefüllt, und animierte GIFs werden in ihr erstes Einzelbild umgewandelt.",
    whyConvert:
      "Zwei Situationen führen Leute hierher. Die erste ist ein Upload, der kein GIF annimmt – viele Formulare akzeptieren nur JPG und PNG, vor allem alles, was ein Foto erwartet, etwa ein Ausweis-Upload, ein Inserat auf einem Marktplatz oder ein Druckdienst. Die zweite ist die Dateigröße: Ein langes animiertes GIF kann viele Megabyte groß werden, und wenn Sie eigentlich nur ein aussagekräftiges Einzelbild brauchen, wiegt ein JPG dieses Bildes nur einen Bruchteil. JPG ist auch das richtige Ziel, wenn der Inhalt fotografisch ist, denn seine Kompression ist für Bilder mit fließenden Tonwerten gemacht – etwas, wofür die GIF-Palette nie gedacht war. Was JPG nicht kann, sind Transparenz und Animation. Ist Ihnen eines davon wichtig, ist JPG die falsche Wahl.",
    notes: [
      {
        heading: "Transparente Pixel brauchen einen Hintergrund",
        body:
          "JPG hat keinen Alphakanal, jeder transparente Bereich im GIF muss also mit etwas Festem gefüllt werden. Voreingestellt ist Weiß, und das passt meistens. Wird das Bild aber auf einer farbigen Seite stehen, können Sie hier genau diese Farbe wählen und vermeiden einen auffälligen weißen Kasten. Weil GIF-Transparenz hart begrenzt ist, kann die Kante nach dem Füllen leicht gezackt wirken – diese Kante stammt aus dem GIF, nicht aus der Umwandlung.",
      },
      {
        heading: "Palettenartefakte bleiben sichtbar",
        body:
          "Ein GIF wurde bereits auf 256 Farben reduziert, oft mit Dithering – dem gesprenkelten Rauschmuster, das Zwischentöne vortäuscht. Die JPG-Kompression entfernt dieses Muster nicht und kann es sogar etwas stärker hervortreten lassen, weil der Encoder die Dithering-Punkte als echtes, erhaltenswertes Detail behandelt. Ein eher hoch eingestellter Qualitätsregler verhindert, dass sich das Problem verschärft.",
      },
      {
        heading: "Nur das erste Einzelbild",
        body:
          "JPG enthält genau ein Bild, ein animiertes GIF wird also in sein erstes Einzelbild umgewandelt. Keine Einstellung ändert daran etwas. Brauchen Sie ein bestimmtes Einzelbild statt des ersten, extrahieren Sie die Bilder zuerst mit dem Tool GIF in Bilder und wandeln dann das gewünschte um.",
      },
    ],
    faqs: [
      { q: "Welches Einzelbild eines animierten GIFs bekomme ich?", a: "Das erste. JPG kann keine Animation speichern, deshalb wird nur das Anfangsbild umgewandelt. Nutzen Sie GIF in Bilder, wenn Sie ein anderes Einzelbild oder alle brauchen." },
      { q: "Was passiert mit der Transparenz?", a: "Sie wird mit einer einheitlichen Farbe gefüllt, weil JPG keine Transparenz unterstützt. Voreingestellt ist Weiß, und Sie können vor dem Umwandeln eine andere Farbe wählen." },
      { q: "Wird das JPG kleiner als das GIF?", a: "Fast immer, und bei animierten GIFs drastisch, denn Sie behalten ein Einzelbild statt Hunderter. Bei einem einfachen GIF mit nur einem Bild und wenigen Farben ist der Unterschied kleiner und kehrt sich gelegentlich sogar um." },
      { q: "Soll ich in JPG oder in PNG umwandeln?", a: "JPG, wenn Sie eine kleine Datei möchten und der Inhalt fotografisch ist. PNG, wenn die Transparenz erhalten bleiben soll oder Sie für die Weiterbearbeitung verlustfreie Qualität brauchen." },
      { q: "Sieht das Bild danach schlechter aus?", a: "Ein wenig, da JPG verlustbehaftet ist – bei der Standardqualität ist die Veränderung aber kaum zu sehen. Auffälliger ist das Dithering-Muster des ursprünglichen GIFs, und das war schon vor der Umwandlung da." },
    ],
  },
};

export default copy;
