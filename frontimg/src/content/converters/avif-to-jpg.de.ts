import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de AVIF-to-JPG converter.
 *
 * Head term "AVIF in JPG" (1.3K/mo). The angle: the most efficient format in
 * use, and the one your software is least likely to open — browser support
 * arrived years before desktop support.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF in JPG",
  seoTitle: "AVIF in JPG umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "AVIF in JPG umwandeln, kostenlos und ohne Anmeldung: Datei öffnen, wo AVIF nicht geht, Qualität einstellbar, Stapel als ZIP. Kein Upload, alles im Browser.",
  unique: {
    intro:
      "AVIF ist das effizienteste Bildformat, das heute verbreitet im Einsatz ist – und zugleich das, das Ihre Software am wenigsten wahrscheinlich öffnet. Wenn Sie AVIF in JPG umwandeln, tauschen Sie diese Effizienz gegen die Möglichkeit, die Datei tatsächlich zu nutzen: in Bildbearbeitungsprogrammen, auf älteren Handys, in der Druckerei, in allem, was vor etwa 2021 entstanden ist. Das Dekodieren übernimmt Ihr Browser, es wird also nichts hochgeladen.",
    whyConvert:
      "AVIF hat sich auf Websites viel schneller verbreitet als in Desktop-Software, und genau diese Lücke ist der Grund, warum die meisten hier landen. Sie haben ein Bild von einer modernen Website gespeichert, und nun wollen Photoshop, die Windows-Fotoanzeige, die Galerie-App Ihres Handys oder ein Upload-Formular nichts damit zu tun haben. Browser sind eher die Ausnahme als die Regel: Chrome dekodiert AVIF seit Version 85, Firefox seit 93 und Safari seit 16.4 – und genau deshalb kann diese Umwandlung überhaupt lokal in Ihrem Browser stattfinden. JPG geht den umgekehrten Weg: Es wird praktisch von allem verstanden, um den Preis größerer Dateien bei gleicher sichtbarer Qualität. Ist die Datei nur für Sie selbst gedacht und kann Ihre Software kein AVIF lesen, ist Umwandeln weit einfacher, als nach einem Codec zu suchen.",
    notes: [
      {
        heading: "Die Datei wird größer",
        body:
          "Das ist der erwartbare Tausch, und man sollte ihn klar benennen. AVIF erreicht bei gleicher Qualität oft die halbe Größe eines JPG, der umgekehrte Weg verdoppelt sie also ungefähr. Sie bezahlen Kompatibilität mit Bytes. Spielt die Größe am Ziel wirklich eine Rolle, lassen Sie den Qualitätsregler bei etwa 0,85, statt ihn aufs Maximum zu schieben – der Unterschied ist kaum zu sehen, die Ersparnis aber erheblich.",
      },
      {
        heading: "Transparenz und HDR gehen verloren",
        body:
          "AVIF unterstützt einen Alphakanal und hohen Dynamikumfang (HDR); JPG unterstützt beides nicht. Transparente Bereiche werden mit einer Hintergrundfarbe Ihrer Wahl gefüllt. HDR-Bilder werden vom Browser beim Dekodieren auf Standarddynamik heruntergerechnet, was bei einem hellen, kontrastreichen Foto die Lichter sichtbar abflachen kann. Ist eines davon wichtig, wandeln Sie in PNG um – das bewahrt die Transparenz, HDR allerdings auch nicht.",
      },
      {
        heading: "Warum Ihr Browser die Datei öffnet, Ihre Programme aber nicht",
        body:
          "AVIF verpackt den Videocodec AV1, den die Browserhersteller früh und entschlossen übernommen haben, weil er lizenzfrei und gut für Video-Streaming ist. Desktop-Bildsoftware hat länger gebraucht, denn dafür muss ein kompletter Videocodec eingebaut werden, nur um ein Standbild anzuzeigen. Das erklärt die seltsame Situation, dass eine Webseite das Bild problemlos zeigt, ein Doppelklick auf die gespeicherte Datei aber nichts bewirkt.",
      },
    ],
    faqs: [
      { q: "Warum öffnet mein Computer keine AVIF-Dateien?", a: "AVIF kam Jahre früher in die Browser als in Desktop-Software. Windows braucht die AV1 Video Extension aus dem Microsoft Store, und viele Bildbearbeitungsprogramme unterstützen das Format bis heute überhaupt nicht. Die Umwandlung umgeht das Problem." },
      { q: "Wird das JPG größer als das AVIF?", a: "Ja, bei vergleichbarer Qualität typischerweise etwa doppelt so groß. AVIF ist wesentlich effizienter, JPG wesentlich kompatibler. Das ist der Tausch, den Sie eingehen." },
      { q: "Geht bei der Umwandlung Qualität verloren?", a: "Ein wenig, da beide Formate verlustbehaftet sind und das Bild neu kodiert wird. Ab einer Qualität von 0,85 ist das sehr schwer zu erkennen. Wandeln Sie vom Original-AVIF um, nicht von einer Kopie, die schon eine andere Umwandlung hinter sich hat." },
      { q: "Was passiert mit der Transparenz in einem AVIF?", a: "Sie wird mit einer einheitlichen Farbe gefüllt, weil JPG keinen Alphakanal hat. Wählen Sie die Füllfarbe vor dem Umwandeln, oder wandeln Sie in PNG um, wenn die Transparenz erhalten bleiben soll." },
      { q: "Wird mein Bild für die Umwandlung hochgeladen?", a: "Nein. Ihr Browser kann AVIF bereits dekodieren, und genau das macht die lokale Umwandlung möglich. Das Bild wird in Ihrem Tab verarbeitet und nirgendwohin gesendet." },
    ],
  },
};

export default copy;
