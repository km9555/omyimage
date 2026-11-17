import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gif-zuschneiden.
 *
 * Head term „GIF zuschneiden“. The ui block is shared with rotate-gif,
 * reverse-gif, gif-speed-changer and gif-cutter, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-cropper",
  locale: "de",
  name: "GIF zuschneiden",
  tagline:
    "Schneiden Sie animierte GIFs online zu – Rahmen ziehen oder exakte Pixel eingeben, Seitenverhältnis fixieren, und jeder Frame wird gleich beschnitten. Die Animation läuft weiter. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF zuschneiden – animierte GIFs online | oMyImage",
  metaDescription:
    "GIF zuschneiden, ohne die Animation zu verlieren: Rahmen ziehen oder Pixel eingeben, Format wie 1:1 oder 16:9 fixieren. Kostenlos und ohne Wasserzeichen.",

  intro:
    "Die meisten Zuschneide-Tools reduzieren ein GIF auf seinen ersten Frame, die Animation ist also in dem Moment weg, in dem Sie schneiden. Mit „GIF zuschneiden“ von oMyImage bearbeiten Sie die ganze Animation: Ziehen Sie den Rahmen über den Teil, den Sie behalten möchten, oder geben Sie Position und Größe in Pixeln ein, und jeder Frame wird exakt auf diesen Bereich zugeschnitten – sein Timing bleibt unberührt. Mit einem Frame-Regler prüfen Sie den Rahmen vorher an bewegten Inhalten, und das Ergebnis läuft neben dem Original, damit Sie vor dem Herunterladen vergleichen können.",

  sections: [
    {
      heading: "Warum ein GIF zuschneiden",
      id: "why",
      body: [
        "Bildschirmaufnahmen und GIFs aus Videos enthalten meist mehr als den interessanten Teil: eine Browser-Leiste, schwarze Balken eines Breitbild-Clips, ein Wasserzeichen in der Ecke oder leeren Raum um das Motiv. Zuschneiden entfernt all das, die Handlung füllt den Frame, und die Reaktion oder Demo bleibt auch in den kleinen Größen gut erkennbar, in denen GIFs meist gezeigt werden.",
        "Zuschneiden macht die Datei außerdem kleiner. Ein GIF speichert jedes Pixel jedes Frames; behalten Sie halbe Breite und halbe Höhe, bleibt etwa ein Viertel der Daten. Das reicht oft, um ein GIF unter ein Upload-Limit zu bringen, ohne seine Qualität überhaupt zu senken.",
      ],
    },
    {
      heading: "Den Bereich wählen",
      id: "area",
      body: [
        "Ziehen Sie innerhalb des Rahmens, um ihn zu verschieben, und an einer Ecke oder Kante, um seine Größe zu ändern; die Pfeiltasten bewegen ihn pixelweise. Die Felder Links, Oben, Breite und Höhe zeigen den Rahmen in Pixeln und nehmen eingetippte Werte an – der schnellste Weg, eine vorgegebene Größe zu treffen.",
        "Weil sich das Motiv einer Animation bewegt, wird der Rahmen jeweils über einem Frame gezeichnet. Gehen Sie mit dem Frame-Regler unter dem Bild durch die Animation und prüfen Sie, dass nichts Wichtiges zwischendurch aus dem Rahmen rutscht – eine winkende Hand, die aus dem Bild geht, oder eine Bildunterschrift, die erst spät erscheint.",
      ],
    },
    {
      heading: "Seitenverhältnisse",
      id: "ratios",
      body: [
        "Frei lässt den Rahmen jede Form annehmen. Die festen Verhältnisse fixieren ihn beim Ziehen: 1:1 für Profilbilder, Sticker und Instagram, 4:5 für Hochformat-Posts, 16:9 für videoartige Banner und Folien, 9:16 für Stories und Handybildschirme sowie 4:3 oder 3:2 für klassische Fotoformate. Ein gewähltes Verhältnis formt den aktuellen Rahmen um seine Mitte herum um, er bleibt also über demselben Bildteil.",
        "Muss das GIF neben der Form auch eine exakte Pixelgröße haben, schneiden Sie zuerst auf das Verhältnis zu und legen dann mit „GIF Größe ändern“ die endgültige Größe fest.",
      ],
    },
    {
      heading: "Was gleich bleibt",
      id: "kept",
      body: [
        "Jeder Frame behält seine Dauer, die Animation läuft also im selben Tempo und wiederholt sich wie zuvor. Transparente GIFs bleiben transparent. Und weil Zuschneiden nur Pixel entfernt, werden die Farben exakt zurückgeschrieben, sobald die Farben des GIFs in eine einzige Palette passen – das trifft auf die meisten GIFs zu. Nichts wird neu quantisiert, es entstehen also keine neuen Farbstufen oder Sprenkel.",
        "GIFs aus Videos verwenden manchmal eine eigene Palette pro Frame. Diese werden mit einer gemeinsamen Palette von 256 Farben neu eingefärbt, die aus allen Frames gewählt wird – das fällt selten auf.",
      ],
    },
    {
      heading: "Typische Zuschnitte",
      id: "uses",
      body: [
        "Schwarze Balken aus einem Clip entfernen, der aus einem Film oder YouTube-Video stammt. Eine Bildschirmaufnahme auf den einen Dialog oder Button reduzieren, um den es geht. Aus einem breiten Reaktions-GIF ein quadratisches Profilbild oder einen Sticker machen. Ränder abschneiden, an denen ein Wasserzeichen oder Website-Logo sitzt – sofern Sie die Animation verwenden dürfen.",
        "Bei Zuschnitten, die die Form ändern – ein breites GIF wird quadratisch oder hochkant –, fixieren Sie zuerst das Verhältnis und positionieren dann den Rahmen, damit das Motiv mittig landet.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser dekodiert, zugeschnitten und kodiert. Es wird nie auf einen Server hochgeladen, und nach dem Schließen der Seite wird nichts aufbewahrt – private Bildschirmaufnahmen und persönliche Clips bleiben auf Ihrem Gerät.",
      ],
    },
    {
      heading: "Nach dem Zuschneiden",
      id: "next",
      body: [
        "Ein zugeschnittenes GIF ist oft schon klein genug. Falls nicht, verkleinert „GIF komprimieren“ es weiter mit weniger Farben, und „GIF schneiden“ entfernt die Frames vor oder nach dem gewünschten Moment. Um das GIF zu drehen, nutzen Sie „GIF drehen“; um es als Video zu teilen, wandeln Sie es mit „GIF in MP4“ um.",
      ],
    },
  ],

  howToTitle: "So schneiden Sie ein GIF zu",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Rahmen ziehen", description: "Ziehen Sie den Zuschnittrahmen oder geben Sie seine Größe ein; fixieren Sie bei Bedarf ein Seitenverhältnis." },
    { title: "Zuschneiden und herunterladen", description: "Klicken Sie auf GIF zuschneiden, vergleichen Sie das Ergebnis mit dem Original und laden Sie es herunter." },
  ],

  features: [
    { icon: "crop", title: "Die ganze Animation", description: "Jeder Frame wird auf denselben Bereich zugeschnitten und behält sein Timing." },
    { icon: "aspect_ratio", title: "Exakte Größen", description: "Rahmen ziehen, Pixel eingeben oder ein Verhältnis wie 1:1 oder 16:9 fixieren." },
    { icon: "lock", title: "Kein Upload", description: "Vollständig in Ihrem Browser zugeschnitten." },
  ],

  faqs: [
    { q: "Wie schneide ich ein animiertes GIF zu?", a: "Fügen Sie das GIF hinzu, ziehen Sie den Rahmen über den Bereich, den Sie behalten möchten, und klicken Sie auf GIF zuschneiden. Jeder Frame wird gleich beschnitten, und die Animation läuft weiter." },
    { q: "Ist das GIF danach noch animiert?", a: "Ja. Alle Frames bleiben erhalten, jeder mit seiner ursprünglichen Dauer, und das GIF wiederholt sich wie zuvor." },
    { q: "Kann ich ein GIF quadratisch zuschneiden?", a: "Ja. Wählen Sie 1:1, dann bleibt der Rahmen beim Verschieben und Ändern der Größe quadratisch." },
    { q: "Kann ich eine exakte Größe eingeben?", a: "Ja. Geben Sie in den Einstellungen die Position links und oben sowie Breite und Höhe in Pixeln ein." },
    { q: "Verschlechtert Zuschneiden die Qualität?", a: "Nein. Die Pixel im Rahmen bleiben, wie sie waren, und die Originalfarben werden wiederverwendet, sobald sie in eine Palette passen." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente GIFs bleiben nach dem Zuschneiden transparent." },
    { q: "Wird die Datei kleiner?", a: "In der Regel ja. Weniger Pixel pro Frame bedeuten weniger Daten, ungefähr im Verhältnis zur entfernten Fläche." },
    { q: "Warum zeigt der Rahmen nur einen Frame?", a: "Ein Zuschnittrahmen lässt sich nur über einem Bild auf einmal zeichnen. Prüfen Sie ihn mit dem Frame-Regler am Rest der Animation." },
    { q: "Kann ich mehrere GIFs auf einmal zuschneiden?", a: "Eins nach dem anderen. Jede Animation braucht meist ihren eigenen Rahmen." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Das GIF wird vollständig in Ihrem Browser zugeschnitten und verlässt nie Ihr Gerät." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, im mobilen Browser. Ziehen Sie den Rahmen mit dem Finger; große GIFs dauern auf dem Smartphone etwas länger." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Begrenzung, wie viele GIFs Sie zuschneiden." },
    { q: "Welches Format eignet sich für Sticker?", a: "1:1. Sticker sind quadratisch; bringen Sie das GIF nach dem Zuschneiden mit „GIF Größe ändern“ auf 512 Pixel oder weniger." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser zugeschnitten. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // GifEditTool.tsx — shared with rotate-gif, reverse-gif, gif-speed-changer
    // and gif-cutter, whose modules reuse this block.
    "Select a GIF": "GIF auswählen",
    "or drop a GIF here": "oder ein GIF hier ablegen",
    "Please select a GIF.": "Bitte wählen Sie ein GIF aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Change image": "Bild wechseln",
    "Clear image": "Bild entfernen",
    "GIF settings": "GIF-Einstellungen",
    "Download GIF": "GIF herunterladen",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird verarbeitet… {p} %",
    "Your GIF will appear here.": "Ihr GIF erscheint hier.",
    "Original": "Original", // i18n-same
    "Result": "Ergebnis",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "Width (px)": "Breite (px)",
    "Height (px)": "Höhe (px)",
    "Left (px)": "Links (px)",
    "Top (px)": "Oben (px)",
    "Your file is processed in your browser and never uploaded.": "Ihre Datei wird im Browser verarbeitet und nie hochgeladen.",
    "Preview": "Vorschau",
    "Crop GIF": "GIF zuschneiden",
    "Rotate GIF": "GIF drehen",
    "Reverse GIF": "GIF umkehren",
    "Change speed": "Tempo ändern",
    "Cut GIF": "GIF schneiden",
    "This GIF has only one frame, so it isn't animated.": "Dieses GIF hat nur einen Frame und ist daher nicht animiert.",
    // crop
    "Aspect ratio": "Seitenverhältnis",
    "Free": "Frei",
    "Select the whole frame": "Ganzen Frame auswählen",
    "Every frame is cropped to the same area and keeps its timing.": "Jeder Frame wird auf denselben Bereich zugeschnitten und behält sein Timing.",
    "Drag the box to choose the area to keep · output {w} × {h} px":
      "Ziehen Sie den Rahmen über den Bereich, der bleiben soll · Ausgabe {w} × {h} px",
    "Frame {i} of {n}": "Frame {i} von {n}",
    "Frame shown under the crop box": "Frame unter dem Zuschnittrahmen",
    // rotate
    "Rotate": "Drehen",
    "90° left": "90° nach links",
    "90° right": "90° nach rechts",
    "Flip": "Spiegeln",
    "Horizontal": "Horizontal", // i18n-same
    "Vertical": "Vertikal",
    "Every frame is turned the same way and keeps its timing.": "Jeder Frame wird gleich gedreht und behält sein Timing.",
    // reverse
    "Direction": "Richtung",
    "Reverse": "Rückwärts",
    "Boomerang": "Bumerang",
    "Plays forwards, then backwards, as one seamless loop.": "Läuft vorwärts, dann rückwärts – als eine nahtlose Schleife.",
    "Plays the frames in reverse order, each with its own timing.": "Spielt die Frames in umgekehrter Reihenfolge ab, jeden mit seiner eigenen Dauer.",
    // speed
    "Change": "Ändern",
    "By speed": "Nach Tempo",
    "Frame delay": "Anzeigedauer",
    "Speed": "Tempo",
    "Above 1× is faster, below 1× is slower.": "Über 1× wird es schneller, unter 1× langsamer.",
    "Every frame (ms)": "Jeder Frame (ms)",
    "{fps} frames per second": "{fps} Frames pro Sekunde",
    "Length: {a} → {b}": "Länge: {a} → {b}",
    "Only the timing changes — every frame and pixel stays as it was.":
      "Nur das Timing ändert sich – jeder Frame und jedes Pixel bleibt, wie es war.",
    "To play this fast, {n} frames are merged: browsers slow down frames shorter than 0.02 s.":
      "Für dieses Tempo werden {n} Frames zusammengelegt: Browser bremsen Frames unter 0,02 s aus.",
    // cut
    "Start": "Anfang",
    "End": "Ende",
    "Frame {i} · {s} s": "Frame {i} · {s} s", // i18n-same
    "First frame": "Erster Frame",
    "Last frame": "Letzter Frame",
    "Selected part": "Ausgewählter Teil",
    "Keep it": "Behalten",
    "Remove it": "Entfernen",
    "Result: {n} frames · {s}": "Ergebnis: {n} Frames · {s}",
    "Keep at least one frame.": "Behalten Sie mindestens einen Frame.",
  },
};

export default content;
