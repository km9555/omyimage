import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/schreibmaschinen-gif. Target query: „Schreibmaschinen-GIF"
 * (Germany, Nov 2026); secondary „Text-GIF" in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "typing-text-gif",
  locale: "de",
  name: "Schreibmaschinen-GIF",
  tagline:
    "Erstellen Sie ein GIF, in dem sich Ihr Text Buchstabe für Buchstabe selbst schreibt, mit blinkendem Cursor. Tempo, Schrift und Farben wählen Sie selbst. Kostenlos, direkt im Browser – nichts hochzuladen.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Schreibmaschinen-GIF erstellen – Text-GIF | oMyImage",
  metaDescription:
    "Schreibmaschinen-GIF erstellen: Ihr Text tippt sich Buchstabe für Buchstabe, mit blinkendem Cursor. Tempo, Schrift und Farben wählbar. Kostenloses Text-GIF.",

  intro:
    "Text, der sich selbst tippt, fällt auf, wie es stehender Text nie schafft. Mit dem Schreibmaschinen-GIF von oMyImage bekommt jede Nachricht diesen Effekt: Schreiben Sie sie, wählen Sie das Tipptempo, Schrift, Größe und Farben und ob am Ende ein Cursor blinkt. Die Vorschau spielt die Animation ab, während Sie Einstellungen ändern. Weil das Ergebnis ein gewöhnliches Text-GIF ist, funktioniert es dort, wo Code nicht läuft – in Chats, Präsentationen, E-Mails, GitHub-READMEs und auf jeder Website, ganz ohne JavaScript und ohne Videoplayer.",

  sections: [
    {
      heading: "So funktioniert das Tippen",
      id: "how",
      body: [
        "Ihr Text wird einmal in seiner endgültigen Größe gesetzt, damit Zeilen nicht springen, während Buchstaben erscheinen. Dann zeigt jeder Frame im gewählten Tempo den nächsten Buchstaben. Wie ein Mensch beim Tippen macht das GIF nach Kommas eine kurze Pause, nach Punkten und am Zeilenende eine längere – der Rhythmus wirkt dadurch natürlich statt mechanisch.",
        "Am Ende bleibt der fertige Text für die gewählte Zeit stehen – eine bis fünf Sekunden –, während der Cursor jede halbe Sekunde blinkt. Danach beginnt das GIF von vorn, oder es bleibt auf dem fertigen Text stehen, wenn Sie das Häkchen bei „Endlos wiederholen“ entfernen.",
      ],
    },
    {
      heading: "Tempo und Länge",
      id: "speed",
      body: [
        "Wählen Sie 6, 10, 15 oder 25 Buchstaben pro Sekunde. Sechs wirkt wie bedächtiges Tippen und passt zu kurzen, dramatischen Sätzen; zehn ist ein natürliches Tempo; fünfzehn und fünfundzwanzig bringen lange Nachrichten schnell aufs Bild. Vorschau und Frame-Anzahl passen sich an, sobald Sie das Tempo ändern, und die Länge des ganzen GIFs steht unter der Vorschau.",
        "Jeder Buchstabe ist ein Frame, längerer Text bedeutet also mehr Frames. Da jeder Frame aber nur den neuen Buchstaben hinzufügt, bleibt selbst eine lange Nachricht eine kleine Datei.",
      ],
    },
    {
      heading: "Schrift, Größe und Farben",
      id: "look",
      body: [
        "Die Schreibmaschinenschrift, eine Festbreitenschrift, sorgt für den klassischen Terminal-Look; serifenlose und Serifenschrift passen zu Zitaten und Ankündigungen, und Impact ergibt eine kräftige Schlagzeile. Die Größe reicht von 14 bis 96 Pixel, die Breite von 320 bis 800 Pixel; die Höhe wächst mit der Zahl der Zeilen.",
        "Jede Text- und Hintergrundfarbe ist möglich. Ein transparenter Hintergrund lässt das GIF auf jeder Seite stehen. Weil GIF-Transparenz aber keine weichen Kanten kennt, sehen Buchstaben auf einer Volltonfarbe am glattesten aus, die zum Ort passt, an dem das GIF erscheint.",
        "Eine Kontur, vom feinen Rand bis zum dicken Umriss, hält Buchstaben auf unruhigen oder transparenten Hintergründen lesbar. Fünf Farbvorlagen – Classic Dark, Clean Light, Midnight Neon, Ocean Blue und Sunset Pop – setzen Text-, Hintergrund- und Konturfarbe mit einem Klick, und Sie können jede davon anschließend ändern.",
      ],
    },
    {
      heading: "Wo Sie ein Text-GIF einsetzen",
      id: "uses",
      body: [
        "Schicken Sie einen Gruß, der sich in WhatsApp oder Telegram selbst tippt. Eröffnen Sie eine Präsentation mit einem Satz, der sich auf der ersten Folie selbst schreibt. Setzen Sie einen animierten Slogan oben in ein GitHub-README, wo Skripte verboten, GIFs aber erlaubt sind. Ergänzen Sie eine E-Mail, einen Blogbeitrag oder eine Produktseite um eine bewegte Signatur oder Überschrift, ohne Code anzufassen.",
      ],
    },
    {
      heading: "Jede Sprache",
      id: "languages",
      body: [
        "Buchstaben werden so gezählt, wie Sie sie lesen: Ein Umlaut, ein Buchstabe mit Akzent, eine Hindi-Silbe oder ein Emoji erscheint als Ganzes und nicht in Einzelteilen. Der Text nutzt die Schriften Ihres Geräts, sodass sich alles tippen lässt, was Ihr Gerät anzeigen kann – lateinische, kyrillische, Devanagari-Schrift und mehr.",
      ],
    },
    {
      heading: "Tipps für ein gutes Schreibmaschinen-GIF",
      id: "tips",
      body: [
        "Halten Sie die Nachricht kurz: Ein oder zwei Sätze sind in wenigen Sekunden getippt und wiederholen sich, bevor die Aufmerksamkeit nachlässt. Lassen Sie am Ende zwei oder drei Sekunden Pause, damit man den ganzen Satz lesen kann. Passen Sie den Hintergrund an die Seite oder den Chat an, in dem das GIF erscheint, und wählen Sie eine Breite nahe der späteren Anzeigegröße, damit die Buchstaben scharf bleiben.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Es gibt nichts hochzuladen: Das GIF wird vollständig in Ihrem Browser aus Ihrem Text gezeichnet, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So erstellen Sie ein Schreibmaschinen-GIF",
  steps: [
    { title: "Text schreiben", description: "Tippen Sie die Nachricht, die das GIF schreiben soll, und klicken Sie auf „Start“." },
    { title: "Stil festlegen", description: "Wählen Sie Tempo, Schrift, Größe, Farben, Cursor und Pause; die Vorschau zeigt alles live." },
    { title: "Erstellen und herunterladen", description: "Klicken Sie auf „GIF erstellen“ und laden Sie die Animation herunter." },
  ],

  features: [
    { icon: "terminal", title: "Echter Tipprhythmus", description: "Buchstabe für Buchstabe, mit Pausen an Kommas, Punkten und Zeilenenden." },
    { icon: "palette", title: "Ihr Stil", description: "Tempo, Schrift, Größe, Farben, Kontur, Cursor und die Pause am Ende." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser gezeichnet." },
  ],

  faqs: [
    { q: "Wie erstelle ich ein Schreibmaschinen-GIF?", a: "Tippen Sie Ihre Nachricht, klicken Sie auf „Start“, wählen Sie Tempo und Stil, klicken Sie dann auf „GIF erstellen“ und laden Sie es herunter." },
    { q: "Kann ich das Tipptempo ändern?", a: "Ja. Wählen Sie 6, 10, 15 oder 25 Buchstaben pro Sekunde." },
    { q: "Kann ich den blinkenden Cursor entfernen?", a: "Ja. Entfernen Sie das Häkchen bei „Blinkender Cursor“." },
    { q: "Kann das GIF nach einmaligem Tippen stehen bleiben?", a: "Ja. Entfernen Sie das Häkchen bei „Endlos wiederholen“, dann bleibt es auf dem fertigen Text stehen." },
    { q: "Kann ich mehrere Zeilen verwenden?", a: "Ja. Drücken Sie die Eingabetaste für eine neue Zeile; lange Zeilen brechen auch von selbst um." },
    { q: "Kann der Hintergrund transparent sein?", a: "Ja, allerdings sehen Buchstaben auf einem farbigen Hintergrund am glattesten aus, weil GIF-Transparenz keine weichen Kanten hat." },
    { q: "Kann ich dem Text eine Kontur geben?", a: "Ja. Wählen Sie eine Konturfarbe und ziehen Sie den Regler „Konturstärke“. Eine Farbvorlage setzt Text-, Hintergrund- und Konturfarbe zusammen." },
    { q: "Funktioniert das mit Umlauten, Hindi oder Russisch?", a: "Ja. Jede Sprache, die Ihr Gerät anzeigen kann, lässt sich tippen, Emoji eingeschlossen." },
    { q: "Kann ich es in einem GitHub-README verwenden?", a: "Ja. Ein GIF wird in READMEs angezeigt, wo Skripte und CSS-Animationen nicht laufen." },
    { q: "Wie groß wird die Datei?", a: "Meist klein: Jeder Frame fügt nur einen Buchstaben hinzu. Lange Texte in großer Schrift brauchen mehr." },
    { q: "Muss ich etwas hochladen?", a: "Nein. Das GIF wird in Ihrem Browser aus Ihrem Text gezeichnet." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Was ist der Unterschied zwischen einem Text-GIF und einem Video?", a: "Ein Text-GIF spielt überall ohne Player automatisch ab, auch in E-Mails und READMEs, und bleibt bei kurzen Texten sehr klein. Ein Video bräuchte einen Player und ist oft größer." },
  ],

  security:
    "Ihr Text wird vollständig in Ihrem Browser zu einem GIF. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // TypingTextGifTool.tsx
    "Typing Text GIF": "Schreibmaschinen-GIF",
    "What should the GIF type?": "Was soll das GIF tippen?",
    "Hello! This GIF types your text, letter by letter.": "Hallo! Dieses GIF tippt Ihren Text, Buchstabe für Buchstabe.",
    "Next you can change the speed, font, colours and cursor.": "Danach können Sie Tempo, Schrift, Farben und Cursor ändern.",
    "Start": "Start", // i18n-same
    "Back": "Zurück",
    "Type some text to see the preview.": "Tippen Sie etwas Text, um die Vorschau zu sehen.",
    "Text settings": "Texteinstellungen",
    "Text": "Text", // i18n-same
    "Typing speed": "Tipptempo",
    "{n} letters/s": "{n} Buchstaben/s",
    "Font": "Schrift",
    "Impact (meme)": "Impact (Meme)",
    "Sans-serif": "Serifenlos",
    "Serif": "Serifenschrift",
    "Typewriter": "Schreibmaschine",
    "Size": "Größe",
    "Width": "Breite",
    "Alignment": "Ausrichtung",
    "Left": "Links",
    "Centre": "Zentriert",
    "Colour presets": "Farbvorlagen",
    "Classic Dark": "Classic Dark", // i18n-same
    "Clean Light": "Clean Light", // i18n-same
    "Midnight Neon": "Midnight Neon", // i18n-same
    "Ocean Blue": "Ocean Blue", // i18n-same
    "Sunset Pop": "Sunset Pop", // i18n-same
    "Text colour": "Textfarbe",
    "Background colour": "Hintergrundfarbe",
    "Transparent background": "Transparenter Hintergrund",
    "GIF transparency has no soft edges, so text looks smoothest on a solid background.": "GIF-Transparenz hat keine weichen Kanten – auf einem farbigen Hintergrund sieht Text am glattesten aus.",
    "Outline colour": "Konturfarbe",
    "Outline thickness": "Konturstärke",
    "Blinking cursor": "Blinkender Cursor",
    "Pause at the end": "Pause am Ende",
    "Repeat forever": "Endlos wiederholen",
    "Preview": "Vorschau",
    "Make GIF": "GIF erstellen",
    "Result": "Ergebnis",
    "Your GIF will appear here.": "Ihr GIF erscheint hier.",
    "Download GIF": "GIF herunterladen",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird bearbeitet… {p} %",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "Everything happens in your browser; nothing is uploaded.": "Alles geschieht in Ihrem Browser; nichts wird hochgeladen.",
  },
};

export default content;
