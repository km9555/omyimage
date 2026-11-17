import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/in-webp-umwandeln.
 *
 * Head term "In WebP umwandeln" (DE; volume not reported separately) —
 * German converter queries take the "X in Y" form. "Bild in WebP" is the
 * secondary, used in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "convert-to-webp",
  locale: "de",
  name: "In WebP umwandeln",
  tagline:
    "Wandeln Sie JPG-, PNG-, GIF- und BMP-Bilder online in WEBP um – kleinere Dateien für schnellere Seiten, mit Qualitätsregler und Stapelumwandlung. Kostenlos und privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "In WebP umwandeln – kostenlos & online | oMyImage",
  metaDescription:
    "Bilder kostenlos in WebP umwandeln: JPG, PNG, GIF und BMP als Bild in WebP – kleinere Dateien, schnellere Seiten, mit Qualitätsregler, im Stapel. Ohne Upload.",

  intro:
    "WEBP ist das Bildformat, das für das Web gebaut wurde: dasselbe Bild in weniger Bytes, mit Transparenz, wenn Sie sie brauchen. Mit oMyImage können Sie Bilder direkt in Ihrem Browser in WebP umwandeln – JPG-, PNG-, GIF- und BMP-Dateien, ein einzelnes Bild oder einen ganzen Ordner mit Produktfotos, Blogbildern oder Screenshots auf einmal. Ein Qualitätsregler bestimmt das Verhältnis zwischen Größe und Detail. Seiten, die aus den Ergebnissen gebaut werden, laden auf jeder Verbindung schneller.",

  sections: [
    {
      heading: "Warum Websites ihre Bilder auf WEBP umstellen",
      id: "why",
      body: [
        "Bilder sind meist der schwerste Teil einer Webseite, und oft entscheidet das Hauptbild darüber, wie schnell die Seite zu laden scheint. WEBP statt JPG oder PNG auszuliefern spart diese Bytes ein, ohne die sichtbaren Blockartefakte, die Sie bekämen, wenn Sie einfach die JPG-Qualität senken – der WEBP-Encoder ist eine Generation jünger und sagt jeden Block aus seinen Nachbarn voraus.",
        "Jeder aktuelle Browser zeigt WEBP an – Chrome, Edge, Firefox, Opera und Safari seit 2020 –, sodass eine Website das Format für praktisch alle Besucher nutzen kann. Viele Plattformen, CDNs und Pagespeed-Analysen empfehlen es genau aus diesem Grund, und eine kleinere Seite kostet Ihre Besucher außerdem weniger mobiles Datenvolumen.",
      ],
    },
    {
      heading: "Wie viel kleiner ein Bild in WebP wird",
      id: "smaller",
      body: [
        "Bei Fotos ist ein WEBP mit gleicher sichtbarer Qualität typischerweise 25–35 % kleiner als das JPG, aus dem es stammt. Von PNG aus ist der Gewinn viel größer: Ein Foto oder Screenshot, der als PNG gespeichert wurde, schrumpft oft um 70–90 %, weil PNG verlustfrei ist und WEBP mit hoher Qualitätseinstellung nicht.",
        "Das Ergebnis hängt vom Bild ab. Unruhige, detailreiche Fotos schrumpfen am wenigsten; flächige Grafiken, Screenshots und Bilder mit großen einfarbigen Bereichen am meisten. Das Tool zeigt die Größe jeder umgewandelten Datei neben dem Original an, sodass Sie genau sehen, was Sie gewonnen haben, bevor Sie etwas hochladen.",
      ],
    },
    {
      heading: "Die Qualität wählen",
      id: "quality",
      body: [
        "Der Regler reicht von 50 % bis 100 % und beginnt bei 92 %, womit Fotos optisch identisch zur Quelle bleiben. Für Bilder auf einer Website sind 75–85 % die übliche Wahl: Der Unterschied ist in normaler Darstellungsgröße kaum zu erkennen, und die Dateien sind deutlich kleiner. Gehen Sie für Hero-Bilder, Produktfotos mit Zoom und alles, was Menschen genau betrachten, wieder höher.",
        "Unter etwa 70 % wirken glatte Flächen wie Himmel und Haut eher wächsern als blockig – WEBP versagt eleganter als JPG, aber es versagt. Wandeln Sie zuerst ein repräsentatives Bild um, vergleichen Sie es in voller Größe mit dem Original und starten Sie dann den Stapel mit der Einstellung, für die Sie sich entschieden haben.",
      ],
    },
    {
      heading: "Transparenz und Animation",
      id: "transparency",
      body: [
        "WEBP unterstützt einen vollständigen Alphakanal, sodass transparente PNG-Logos, Icons und freigestellte Produkte nach der Umwandlung transparent bleiben, Ränder eingeschlossen – es wird keine Hintergrundfarbe eingefügt. Damit ist WEBP ein direkter Ersatz für transparente PNGs auf einer Website, meist mit einem Bruchteil der Größe.",
        "Ein animiertes GIF wird nur zu seinem ersten Frame. WEBP kann zwar Animationen enthalten, dieses Tool erzeugt aber Standbilder; behalten Sie das GIF oder nutzen Sie ein eigenes Animationstool, wenn es auf die Bewegung ankommt.",
      ],
    },
    {
      heading: "Wo WEBP die falsche Wahl ist",
      id: "where-not",
      body: [
        "WEBP ist ein Format zum Ausliefern von Bildern, nicht zum Archivieren oder Austauschen. Druckereien, ältere Desktop-Software, manche E-Mail-Programme und viele offizielle Upload-Formulare erwarten weiterhin JPG oder PNG, und ein WEBP wird dort wahrscheinlich abgelehnt. Behalten Sie Ihre Originale und wandeln Sie Kopien für das Web um.",
        "Die Umwandlung ist außerdem eine Einbahnstraße, was die Qualität angeht: Ein WEBP mit 80 % hat Details verworfen, die eine Rückumwandlung in PNG oder JPG nicht wiederherstellt. Wenn Sie später ein anderes Format brauchen, beginnen Sie wieder mit der Originaldatei.",
      ],
    },
    {
      heading: "Metadaten und Browser-Unterstützung",
      id: "metadata",
      body: [
        "Kameradaten – EXIF, Aufnahmedatum und GPS-Standort – werden nicht in die hier erzeugten WEBP-Dateien übernommen. Das passt zu Bildern, die im Web veröffentlicht werden, wo Standortdaten ohnehin ein Datenschutzrisiko sind. Wenn Sie die Metadaten brauchen, bewahren Sie sie in den Originalen auf.",
        "Die Umwandlung nutzt den WEBP-Encoder Ihres Browsers. Chrome, Edge, Firefox und Opera haben alle einen; Safari kann WEBP anzeigen, aber nicht aus einer Webseite heraus speichern. In Safari weist Sie das Tool deshalb darauf hin, den Browser zu wechseln, statt Ihnen eine falsch benannte Datei zu geben.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild in WebP um",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere JPG-, PNG-, GIF- oder BMP-Bilder aus oder ziehen Sie sie in das Feld." },
    { title: "Qualität einstellen", description: "Behalten Sie 92 % für nahezu identische Bilder oder wählen Sie 75–85 % für kleinere Website-Bilder." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf Umwandeln – ein WEBP wird direkt heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "speed", title: "Leichtere Webseiten", description: "WEBP-Dateien sind kleiner als die JPGs und PNGs, die sie ersetzen – Seiten laden schneller." },
    { icon: "tune", title: "Qualität einstellen", description: "Wählen Sie eine Qualität von 50 % bis 100 % und sehen Sie die neue Größe jeder Datei." },
    { icon: "opacity", title: "Transparenz bleibt", description: "Transparente PNG-Logos und Icons bleiben auch als WEBP transparent, weiche Ränder inklusive." },
  ],

  faqs: [
    { q: "Welche Formate kann ich in WebP umwandeln?", a: "JPG, PNG, GIF und BMP. Bei GIFs wird der erste Frame umgewandelt." },
    { q: "Wie viel kleiner ist WEBP als JPG?", a: "Bei Fotos meist 25–35 % kleiner bei gleicher sichtbarer Qualität. Von PNG aus ist die Ersparnis viel größer, oft 70–90 %." },
    { q: "Welche Qualität sollte ich für eine Website verwenden?", a: "75–85 % passt für die meisten Website-Bilder. Nutzen Sie die Voreinstellung 92 % oder mehr für Hero-Bilder und Produktfotos, in die Besucher hineinzoomen." },
    { q: "Behält ein Bild in WebP seine Transparenz?", a: "Ja. Transparente und halbtransparente Bereiche von PNG-, GIF- oder BMP-Bildern bleiben im WEBP transparent." },
    { q: "Zeigen alle Browser WEBP an?", a: "Ja – jeder aktuelle Browser, auch Safari seit 2020. Ältere Desktop-Software und manche Upload-Formulare öffnen es möglicherweise noch nicht." },
    { q: "Warum funktioniert es nicht in Safari?", a: "Safari kann WEBP anzeigen, aber nicht aus einer Webseite heraus erzeugen. Nutzen Sie zum Umwandeln Chrome, Edge, Firefox oder Opera; die Dateien funktionieren danach ganz normal in Safari." },
    { q: "Bleiben meine EXIF-Daten erhalten?", a: "Nein. Die hier erzeugten WEBP-Dateien enthalten keine Kameradaten und keinen GPS-Standort – das ist bei online veröffentlichten Bildern meist genau richtig." },
    { q: "Kann ich einen ganzen Ordner auf einmal umwandeln?", a: "Ja. Fügen Sie so viele Bilder hinzu, wie Sie möchten; sie werden nacheinander umgewandelt und zusammen als ZIP heruntergeladen." },
    { q: "Kann ich WEBP wieder in JPG oder PNG umwandeln?", a: "Ja, mit den Tools WEBP in JPG und WEBP in PNG. Durch Kompression entfernte Details kommen nicht zurück, wandeln Sie also aus dem Original um, wenn Sie es haben." },
    { q: "Werden meine Bilder hochgeladen?", a: "Normalerweise nicht – die Umwandlung läuft in Ihrem Browser. Nur ein Bild, das für Ihren Browser zu groß ist, wird an unseren Server geschickt, dort umgewandelt und sofort wieder gelöscht." },
  ],

  security:
    "Ihre Bilder werden in Ihrem Browser in WEBP umgewandelt. Nur ein Bild, das für den Browser zu groß ist – über 100 MB oder jenseits seiner Canvas-Grenze –, wird auf unserem Server verarbeitet und direkt nach der Umwandlung gelöscht. Nichts wird gespeichert, keine Datei wird nachverfolgt.",

  ui: {
    // Drop hint from app/convert-to-webp/page.tsx, translated inside ConvertTool.
    "or drop JPG, PNG, GIF or BMP images here": "oder JPG-, PNG-, GIF- oder BMP-Bilder hier ablegen",
  },
};

export default content;
