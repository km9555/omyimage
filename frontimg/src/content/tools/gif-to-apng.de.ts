import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.de";

/**
 * German copy for /de/gif-in-apng. Target query: „GIF in APNG" (Germany,
 * Nov 2026; low volume). „Animiertes PNG" is used in the body as the plain
 * German description of the format.
 */
const content: ToolPageContent = {
  toolId: "gif-to-apng",
  locale: "de",
  name: "GIF in APNG",
  tagline:
    "Wandeln Sie animierte GIFs in APNG um, das animierte PNG – jedes Pixel, jeder Frame und jede Pause bleibt erhalten, oft in einer kleineren Datei. Kostenlos, direkt im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF in APNG umwandeln – animiertes PNG, kostenlos | oMyImage",
  metaDescription:
    "GIF in APNG umwandeln, online und kostenlos: animiertes PNG ohne Qualitätsverlust, alle Frames und Pausen bleiben, oft kleiner. Im Browser, ohne Upload.",

  intro:
    "APNG ist PNG mit Animation: dasselbe verlustfreie Format wie ein gewöhnliches PNG, ergänzt um zusätzliche Abschnitte für Frames und Timing. Jeder aktuelle Browser spielt es ab, und Programme, die die Animation nicht verstehen, zeigen einfach den ersten Frame als normales PNG. Der Konverter „GIF in APNG“ von oMyImage schreibt Ihr GIF als APNG, ohne ein einziges Pixel zu verändern, speichert jeden Frame so kompakt wie möglich und zeigt die Dateigröße neben dem Original, damit Sie sehen, was Sie gewonnen haben.",

  sections: [
    {
      heading: "Warum APNG statt GIF",
      id: "why",
      body: [
        "GIF komprimiert mit LZW, einem Verfahren aus den 1980er-Jahren; PNG nutzt DEFLATE, das dieselben Pixel stärker zusammenpresst. Die Umwandlung von GIF in APNG macht die Datei deshalb oft kleiner, ganz ohne Verlust – am deutlichsten bei Zeichentrick, Logos, Icons und Bildschirmaufnahmen mit großen einfarbigen Flächen.",
        "APNG kann außerdem volle Farbtiefe und weiche, halbtransparente Kanten speichern, was GIF nicht kann. Ein umgewandeltes GIF behält genau seine bisherigen Farben und harten Kanten; bearbeiten Sie die Frames später aber weiter, zwingt APNG sie nicht zurück auf 256 Farben.",
      ],
    },
    {
      heading: "So wird die Datei aufgebaut",
      id: "how",
      body: [
        "Passen alle Frames in 256 Farben – bei einem GIF fast immer der Fall –, verwendet das APNG eine Palette, sodass jedes Pixel wie im GIF nur ein Byte belegt. Andernfalls speichert es volles RGBA. Jeder Frame nach dem ersten hält nur das Rechteck fest, das sich verändert hat, und ein Frame, der dem vorherigen gleicht, wird dessen Dauer zugeschlagen.",
        "Jeder Frame behält seine genaue Dauer in Millisekunden, und die Animation wiederholt sich wie beim GIF – endlos, einmal oder eine festgelegte Anzahl von Malen. Transparente Bereiche bleiben transparent.",
      ],
    },
    {
      heading: "Wo APNG abgespielt wird",
      id: "support",
      body: [
        "Chrome, Edge, Firefox, Safari und Opera spielen APNG ab, auf dem Computer wie auf dem Smartphone. Ein APNG funktioniert also überall, wo auf einer Webseite ein Bild stehen kann. LINE nutzt APNG für seine animierten Sticker, und viele Sticker- und Emoji-Tools akzeptieren es.",
        "Bildbetrachter, Bildbearbeitungen und Chat-Apps, die nur gewöhnliches PNG kennen, zeigen statt der Animation den ersten Frame. Das ist die eingebaute Rückfallebene von APNG, bedeutet aber auch: Für E-Mails und die meisten Messenger ist GIF weiterhin die sicherere Wahl.",
      ],
    },
    {
      heading: "Die Dateiendung",
      id: "extension",
      body: [
        "Die heruntergeladene Datei endet auf .png – die Endung, die Browser und die meisten Websites erwarten. Die Animation steckt in der Datei, nicht in ihrem Namen. Verlangt ein Dienst ausdrücklich eine .apng-Datei, benennen Sie die Endung einfach um; der Inhalt bleibt derselbe.",
      ],
    },
    {
      heading: "APNG oder WebP",
      id: "webp",
      body: [
        "Beide sind moderne Nachfolger von GIF. Verlustfreies WebP ist meist noch kleiner, verlustbehaftetes WebP sogar deutlich kleiner. WebP lässt sich aber in Safari nicht erstellen, und manche Tools akzeptieren es nicht. APNG ist ausschließlich verlustfrei, lässt sich in jedem Browser einschließlich Safari erstellen und öffnet sich überall dort als statisches PNG, wo Animation nicht unterstützt wird. Für eine Website probieren Sie beides und behalten die kleinere Datei; für Sticker nehmen Sie das, was die Plattform verlangt.",
      ],
    },
    {
      heading: "Erst bearbeiten, dann umwandeln",
      id: "prepare",
      body: [
        "Der Konverter übernimmt das GIF genau so, wie es ist. Erledigen Sie Änderungen deshalb vor der Umwandlung: „GIF zuschneiden“ für die Form, „GIF Größe ändern“ für eine exakte Pixelgröße – Sticker-Plattformen legen meist beides fest – und „GIF schneiden“, um nur die Frames zu behalten, die Sie brauchen. Diese Tools behalten die eigenen Farben des GIFs, sodass das APNG pixelgenau dem entspricht, was Sie vorbereitet haben.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser gelesen und das APNG dort geschrieben. Nichts wird hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie GIF in APNG um",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Umwandeln", description: "Klicken Sie auf „In APNG umwandeln“; jedes Pixel und jeder Frame bleibt erhalten." },
    { title: "Herunterladen", description: "Vergleichen Sie die Größe mit dem GIF und laden Sie das APNG herunter." },
  ],

  features: [
    { icon: "image", title: "Verlustfrei", description: "Jedes Pixel, jeder Frame und jede Pause wird unverändert übernommen." },
    { icon: "compress", title: "Oft kleiner", description: "Die Kompression von PNG schlägt bei denselben Frames meist die von GIF." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser umgewandelt." },
  ],

  faqs: [
    { q: "Wie wandle ich ein GIF in APNG um?", a: "Fügen Sie das GIF hinzu und klicken Sie auf „In APNG umwandeln“. Das animierte PNG läuft genau wie das GIF." },
    { q: "Was ist APNG?", a: "Animated PNG, also animiertes PNG: eine PNG-Datei, die zusätzlich Animations-Frames und deren Timing enthält." },
    { q: "Ist APNG verlustfrei?", a: "Ja. Jedes Pixel jedes Frames wird exakt gespeichert." },
    { q: "Ist APNG kleiner als GIF?", a: "Oft, dank besserer Kompression – vor allem bei Grafiken und Bildschirmaufnahmen. Das Tool zeigt den Unterschied an." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente Bereiche bleiben transparent." },
    { q: "Warum sieht mein APNG wie ein Standbild aus?", a: "Das Programm, in dem Sie es geöffnet haben, unterstützt kein APNG und zeigt den ersten Frame. Öffnen Sie die Datei in einem Browser, um die Animation zu sehen." },
    { q: "Warum endet die Datei auf .png?", a: "APNG-Dateien verwenden die PNG-Endung. Benennen Sie sie nur in .apng um, wenn ein Dienst das verlangt." },
    { q: "Funktioniert es in Safari?", a: "Ja. Safari spielt APNG ab und kann es mit diesem Tool auch erstellen." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser – auch auf iPhone und iPad." },
    { q: "Soll ich APNG oder WebP verwenden?", a: "WebP ist meist kleiner; APNG funktioniert in mehr Tools und in Safari. Probieren Sie beides, wenn es auf die Größe ankommt." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Kann ich APNG in E-Mails verwenden?", a: "Besser nicht. Viele E-Mail-Programme zeigen nur den ersten Frame. Für E-Mails bleibt GIF die sichere Wahl." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser umgewandelt. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // GifExportTool.tsx is shared with gif-to-webp; reuse its translations.
  ui: webp.ui,
};

export default content;
