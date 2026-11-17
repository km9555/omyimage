import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.de";

/**
 * German copy for /de/bild-verpixeln. Target query: „Bild verpixeln" (590/mo,
 * Germany, Nov 2026); „Pixel Bild" (9.9K) sits beside it in the metaTitle and
 * returns in the pixel-art heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "pixelate-image",
  locale: "de",
  name: "Bild verpixeln",
  tagline:
    "Verwandeln Sie jedes Foto in grobe Pixelblöcke – vom dezenten Mosaik bis zur kräftigen Retro-Pixel-Art. Blockgröße wählen, live ansehen und viele Bilder auf einmal verpixeln. Kostenlos, direkt im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild verpixeln – Pixel Bild online erstellen | oMyImage",
  metaDescription:
    "Bild verpixeln online und kostenlos: Blockgröße wählen und aus jedem Foto ein Pixel Bild, Mosaik oder Retro-Pixel-Art machen. Mehrere Bilder, ohne Upload.",

  intro:
    "Beim Verpixeln werden die Details eines Bildes durch quadratische Farbblöcke ersetzt; jeder Block nimmt die Farbe der Fläche an, die er abdeckt. Das ist der Look alter Videospiele, von Mosaikfliesen und von Bildern, die absichtlich unkenntlich gemacht wurden. Mit „Bild verpixeln“ von oMyImage bestimmen Sie genau, wie groß diese Blöcke sind: Ziehen Sie den Regler, und die Vorschau aktualisiert sich sofort und zeigt, wie viele Blöcke ungefähr entlang des Bildes passen. Fügen Sie ein Bild oder einen ganzen Stapel hinzu und laden Sie sie verpixelt herunter – im selben oder einem anderen Format.",

  sections: [
    {
      heading: "Die Blockgröße wählen",
      id: "size",
      body: [
        "Die Blockgröße wird in Pixeln des Originalbildes gemessen, von 2 bis 120. Kleine Blöcke von 4 bis 8 Pixeln ergeben ein sanftes Mosaik, auf dem man das Motiv noch erkennt; mit 16 bis 32 Pixeln wird ein Foto zu einer deutlichen Pixel-Art-Szene; darüber bleiben nur noch eine Handvoll farbiger Quadrate.",
        "Weil die Einstellung in Pixeln angegeben ist, wirkt derselbe Wert auf einem großen Foto feiner als auf einem kleinen. Der Hinweis unter dem Regler zeigt, wie viele Blöcke entlang der längeren Seite passen – ein verlässlicherer Anhaltspunkt als die Zahl selbst.",
      ],
    },
    {
      heading: "Pixel Bild, Pixel-Art und Retro-Look",
      id: "art",
      body: [
        "Für den Look von 8- oder 16-Bit-Spielen peilen Sie 40 bis 80 Blöcke entlang der längeren Seite an. Einfache Motive mit klaren Formen – ein Logo, ein Haustier vor einer schlichten Wand, eine Skyline – lassen sich am besten verpixeln. Wirkt das Ergebnis matschig, erhöhen Sie vorher mit „Bild aufhellen“ den Kontrast; Pixel-Art lebt von klaren, satten Farben.",
        "Speichern Sie Pixel-Art als PNG. Die JPG-Kompression verwischt die scharfen Blockkanten und erzeugt Flecken in den einfarbigen Quadraten, was den Effekt zunichtemacht.",
      ],
    },
    {
      heading: "Verpixeln, um etwas zu verbergen",
      id: "privacy-note",
      body: [
        "Verpixeln ist eine beliebte Methode, Gesichter, Kennzeichen und Text unkenntlich zu machen. Kleine Blöcke sind dafür aber nicht sicher: Ein verpixeltes Gesicht oder Wort lässt sich manchmal erkennen oder rekonstruieren. Wenn Sie verpixeln, um jemanden zu schützen, verwenden Sie große Blöcke, damit keine Struktur übrig bleibt. Um nur einen Teil eines Bildes zu verbergen – Gesichter, ein Kennzeichen, einen Namen –, nutzen Sie „Gesichter verpixeln“: Das Tool erkennt Gesichter und verpixelt oder verwischt nur die Bereiche, die Sie auswählen.",
      ],
    },
    {
      heading: "Weitere Einsatzmöglichkeiten",
      id: "uses",
      body: [
        "Verpixelte Fotos eignen sich gut als Hintergrund für Text, weil die Formen bleiben, die Details aber nicht mehr mit den Worten konkurrieren. Sie funktionieren auch als spoilerfreie Vorschau, als Quizbilder, bei denen man das Motiv erraten muss, und als Vorlage für Kreuzstich-, Bügelperlen- und Mosaikmuster, bei denen jeder Block ein Stich oder eine Fliese wird.",
      ],
    },
    {
      heading: "Viele Bilder, jedes Format",
      id: "batch",
      body: [
        "Fügen Sie so viele Bilder hinzu, wie Sie brauchen; auf alle wird dieselbe Blockgröße angewendet. JPG, PNG und WebP werden angenommen, und das Ergebnis behält das Originalformat, sofern Sie kein anderes wählen. Transparente Bereiche bleiben in PNG und WebP transparent. Ein Bild wird direkt heruntergeladen, mehrere kommen als ZIP-Datei.",
      ],
    },
    {
      heading: "Verpixeln und Dateigröße",
      id: "size-note",
      body: [
        "Ein verpixeltes Bild enthält viel weniger Details und lässt sich deshalb gut komprimieren: Ein stark verpixeltes PNG kann nur einen Bruchteil der Originalgröße haben und eignet sich so für leichte Hintergründe und Platzhalter. Um es weiter zu verkleinern, ohne die scharfen Blöcke zu verlieren, behalten Sie PNG und schicken es durch „Bild komprimieren“.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes Bild wird vollständig in Ihrem Browser verpixelt. Nichts wird auf einen Server hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So verpixeln Sie ein Bild",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WebP-Bilder aus." },
    { title: "Blockgröße einstellen", description: "Ziehen Sie den Regler, bis die Vorschau den gewünschten Look zeigt." },
    { title: "Verpixeln und herunterladen", description: "Klicken Sie auf „Bild verpixeln“, um es herunterzuladen – oder eine ZIP-Datei bei mehreren." },
  ],

  features: [
    { icon: "apps", title: "Jede Blockgröße", description: "Vom feinen Mosaik bis zu einer Handvoll Quadrate, 2 bis 120 Pixel." },
    { icon: "visibility", title: "Live-Vorschau", description: "Sehen Sie den Effekt beim Ziehen und halten Sie gedrückt zum Vergleichen." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser verpixelt." },
  ],

  faqs: [
    { q: "Wie verpixle ich ein Bild?", a: "Fügen Sie das Bild hinzu, stellen Sie die Blockgröße mit dem Regler ein und klicken Sie auf „Bild verpixeln“. Das verpixelte Bild wird sofort heruntergeladen." },
    { q: "Welche Blockgröße soll ich verwenden?", a: "4–8 px für ein dezentes Mosaik, 16–32 px für Pixel-Art, größere Werte, um das Bild abstrakt zu machen." },
    { q: "Ist Verpixeln sicher, um Gesichter oder Text zu verbergen?", a: "Nur mit großen Blöcken. Kleine Blöcke lassen sich manchmal erkennen; „Gesichter verpixeln“ bietet stärkere Optionen für Teile eines Bildes." },
    { q: "Kann ich nur einen Teil eines Bildes verpixeln?", a: "Hier nicht – dieses Tool verpixelt das ganze Bild. „Gesichter verpixeln“ kann ausgewählte Bereiche verpixeln." },
    { q: "Welches Format ist am besten für Pixel-Art?", a: "PNG. Es hält die Blockkanten scharf; JPG verwischt sie." },
    { q: "Kann ich mehrere Bilder auf einmal verpixeln?", a: "Ja. Alle werden mit derselben Blockgröße verpixelt und als ZIP heruntergeladen." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja, wenn Sie als PNG oder WebP speichern." },
    { q: "Kann ich das Verpixeln rückgängig machen?", a: "Nein – die Details sind weg. Bewahren Sie Ihre Originaldatei auf." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Kann ich damit Kreuzstichmuster erstellen?", a: "Ja. Verpixeln Sie das Foto; dann entspricht jeder Block einem Stich." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Wie mache ich aus einem Foto ein Pixel Bild im Retro-Stil?", a: "Wählen Sie eine Blockgröße, bei der etwa 40 bis 80 Blöcke entlang der längeren Seite passen, erhöhen Sie bei Bedarf vorher den Kontrast und speichern Sie als PNG." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser verpixelt. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
