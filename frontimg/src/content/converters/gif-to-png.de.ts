import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de GIF-to-PNG converter.
 *
 * Head term "GIF in PNG" (1K/mo). The angle is editing: out of the
 * 256-colour palette and one-bit transparency into a lossless working file.
 */
const copy: LocalizedPairCopy = {
  name: "GIF in PNG",
  seoTitle: "GIF in PNG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "GIF in PNG umwandeln, kostenlos und ohne Anmeldung: verlustfreie Arbeitsdatei mit voller Farbtiefe, Transparenz bleibt erhalten, Stapel als ZIP. Im Browser.",
  unique: {
    intro:
      "Wenn Sie ein GIF in PNG umwandeln, holen Sie es aus einer Palette von 256 Farben in volle Farbtiefe und bekommen weiche Transparenz statt der harten An-oder-aus-Variante von GIF. Das Ergebnis ist verlustfrei und wird damit zu einer richtigen Arbeitsdatei, die Sie bearbeiten und neu speichern können, ohne dass sie schlechter wird. Animierte GIFs werden in ihr erstes Einzelbild umgewandelt, weil PNG nur ein Bild enthält.",
    whyConvert:
      "Meist geht es ums Bearbeiten. Wegen der Palettengrenze wird jedes GIF auf höchstens 256 unterschiedliche Farben reduziert, und seine Transparenz ist einstufig: Ein Pixel ist entweder voll deckend oder völlig unsichtbar, dazwischen gibt es nichts. Daraus entsteht der typische gezackte Rand, den man sieht, wenn ein GIF-Logo auf einem Hintergrund landet, für den es nicht vorbereitet wurde. PNG kennt keine dieser Einschränkungen: volle 24-Bit-Farbe plus ein 8-Bit-Alphakanal, sodass Kanten wirklich weich sein können. Die Umwandlung erfindet keine Farben, die das GIF schon verworfen hat, sie stoppt aber jeden weiteren Verlust und gibt Ihnen eine Datei, die Sie sauber in andere Bilder einsetzen können. Der zweite häufige Grund ist schlichte Modernisierung – alte GIF-Grafiken in einer Codebasis oder einem Designsystem durch etwas zu ersetzen, das sich berechenbar verhält.",
    notes: [
      {
        heading: "Die Umwandlung holt keine verlorenen Farben zurück",
        body:
          "Das ist die eine Erwartung, die man klar setzen sollte. Wurde ein Foto als GIF gespeichert, wurde es in diesem Moment auf 256 Farben reduziert, und Farbstufen und Dithering wurden Teil des Bildes. Die Umwandlung in PNG bewahrt dieses Aussehen originalgetreu in einem besseren Container; die verworfenen Farbverläufe kann sie nicht rekonstruieren. Haben Sie noch das Original, bevor es zum GIF wurde, wandeln Sie besser dieses um.",
      },
      {
        heading: "Transparenz wird besser, nicht nur bewahrt",
        body:
          "GIF-Transparenz ist binär, deshalb wurden geglättete Kanten vorab mit dem Hintergrund verrechnet, den der Gestalter angenommen hat. Diese Pixel gehen unverändert ins PNG über – der Lichthof verschwindet nicht von selbst. Was Sie gewinnen, ist Spielraum: PNG kann teilweise Transparenz speichern, sodass Sie die Kante im PNG in einem Bildbearbeitungsprogramm tatsächlich bereinigen können. Solange die Datei ein GIF war, ging das nie.",
      },
      {
        heading: "Die Animation bleibt nicht erhalten",
        body:
          "PNG speichert ein einzelnes Bild, ein animiertes GIF wird also nur in sein erstes Einzelbild umgewandelt. Möchten Sie jedes Einzelbild als eigene Datei, nutzen Sie stattdessen das Tool GIF in Bilder – es extrahiert die komplette Sequenz. Soll die Animation bleiben, behalten Sie das GIF.",
      },
    ],
    faqs: [
      { q: "Was passiert mit einem animierten GIF?", a: "Sie erhalten das erste Einzelbild als statisches PNG. PNG kann keine Animation speichern. Um jedes Einzelbild als eigene Datei zu bekommen, nutzen Sie das Tool GIF in Bilder; soll die Animation erhalten bleiben, behalten Sie das GIF." },
      { q: "Sieht das PNG besser aus als das GIF?", a: "Es sieht genauso aus. PNG hebt die Beschränkungen auf, die dem Bild geschadet haben, kann den bereits entstandenen Schaden aber nicht rückgängig machen – die Reduktion auf 256 Farben geschah beim Erstellen des GIFs und ist fest eingebrannt." },
      { q: "Ist die Umwandlung von GIF in PNG verlustfrei?", a: "Ja. PNG speichert jedes Pixel genau so, wie es im GIF war, in diesem Schritt geht also nichts weiter verloren." },
      { q: "Wird die Transparenz übernommen?", a: "Ja. Die eine transparente Farbe des GIFs wird im PNG zu vollständig transparenten Pixeln. Zusätzlich können Sie danach weiche Transparenz bearbeiten, was GIF nie unterstützt hat." },
      { q: "Wird die PNG-Datei größer?", a: "Oft ja, manchmal deutlich. Die Palette von GIF ist selbst eine Form der Kompression, während PNG die vollen Farbinformationen speichert. Bei einfachen, flächigen Grafiken liegen beide nah beieinander; bei gedithertem fotografischem Inhalt ist PNG meist größer." },
      { q: "Werden meine GIFs dafür auf einen Server hochgeladen?", a: "In der Regel nicht. Ihr Browser liest GIF und schreibt PNG selbst, die Umwandlung passiert also in Ihrem Tab. Nur ein Bild mit außergewöhnlich hoher Auflösung, das ein Browser-Tab nicht mehr darstellen kann, wird auf unserem Server verarbeitet und direkt danach gelöscht." },
    ],
  },
};

export default copy;
