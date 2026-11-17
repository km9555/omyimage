import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gif-in-bilder.
 *
 * Head term „GIF in Bilder“ (umwandeln/zerlegen); secondary „Frames aus GIF“
 * (extrahieren). German usage says „Frame“ far more than „Einzelbild“, so the
 * copy uses Frame throughout and „Einzelbilder“ once as a synonym.
 */
const content: ToolPageContent = {
  toolId: "gif-to-images",
  locale: "de",
  name: "GIF in Bilder",
  tagline:
    "Extrahieren Sie online alle Frames aus einem animierten GIF – als ZIP in PNG, JPG oder WebP oder einzeln. Kostenlos, schnell und zu 100 % privat im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF in Bilder – Frames aus GIF extrahieren | oMyImage",
  metaDescription:
    "GIF in Bilder zerlegen: Extrahieren Sie alle Frames aus einem GIF als PNG, JPG oder WebP und laden Sie sie als ZIP herunter. Kostenlos, im Browser, ohne Upload.",

  intro:
    "Ein GIF in Bilder umwandeln heißt, eine Animation wieder in einzelne Bilder zu zerlegen. Das Tool „GIF in Bilder“ von oMyImage extrahiert alle Frames aus einem GIF direkt in Ihrem Browser – vollständig zusammengesetzt, sodass jeder Frame ein komplettes Bild ist – und Sie laden sie gesammelt als ZIP oder einzeln herunter, in PNG, JPG oder WebP. Nichts wird hochgeladen, Ihr GIF bleibt also privat.",

  sections: [
    {
      heading: "Was Ihnen die Frames aus einem GIF bringen",
      id: "why",
      body: [
        "Ein animiertes GIF ist ein Stapel von Standbildern mit Zeitangaben. Zerlegen Sie es, erhalten Sie jedes dieser Standbilder als normale Bilddatei – genau das, was Sie brauchen, wenn eigentlich nicht die Animation gefragt ist.",
        "Der häufigste Fall: einen guten Frame finden. Ein Reaktions-GIF enthält einen Moment, den Sie als Standbild wollen; eine Bildschirmaufnahme enthält genau den Zustand der Oberfläche, den Sie für eine Dokumentation brauchen; eine Stop-Motion-Folge enthält den einen Frame, der am besten gelungen ist.",
        "Der zweite Fall ist die Reparatur. Mit einem vorhandenen GIF stimmt etwas nicht – ein verirrter Frame, ein Wasserzeichen, eine falsche Farbe –, und solange es eine Animation ist, lässt sich das nicht beheben. Frames extrahieren, die betroffenen korrigieren, neu zusammensetzen.",
      ],
    },
    {
      heading: "Wie GIF-Frames tatsächlich gespeichert sind",
      id: "decoding",
      body: [
        "GIF ist sparsamer, als es zunächst scheint. Statt jeden Frame vollständig zu speichern, hält es nur den Bereich fest, der sich seit dem vorigen geändert hat – zusammen mit einer Anweisung, was mit der Fläche darunter geschehen soll: stehen lassen, auf den Hintergrund zurücksetzen oder den vorherigen Zustand wiederherstellen.",
        "Deshalb liefert eine naive Extraktion nur Bruchstücke: Ein Tool, das einfach jeden gespeicherten Block ausliest, bekommt ein Teilbild mit transparenten Lücken, nicht das Bild, das Sie beim Abspielen sehen. Richtiges Dekodieren bedeutet, jeden Frame auf den bis dahin aufgebauten Zustand der vorherigen zu legen.",
        "Genau das passiert hier. Die Bilder, die Sie erhalten, sind vollständige Frames, wie sie beim Abspielen erscheinen – in der richtigen Reihenfolge und korrekt nummeriert.",
      ],
    },
    {
      heading: "Warum PNG das richtige Ausgabeformat ist",
      id: "format",
      body: [
        "GIF-Frames sind bereits auf eine Palette von höchstens 256 Farben reduziert. Diese Reduktion ist fest eingebrannt und lässt sich nicht rückgängig machen. Beim Extrahieren geht es also nur darum, nichts weiter zu verschlechtern.",
        "PNG ist verlustfrei – die Frames kommen genau so an, wie der Decoder sie erzeugt hat. Außerdem übernimmt PNG die Transparenz von GIF korrekt, durchsichtige Bereiche bleiben also durchsichtig und bekommen keinen weißen Hintergrund.",
        "JPG wäre in beiden Punkten die falsche Wahl: Es fügt zur Palettenbegrenzung noch eigene Kompressionsartefakte hinzu und kann überhaupt keine Transparenz speichern. Brauchen Sie danach kleinere Dateien, wandeln Sie die extrahierten PNGs gezielt um, statt standardmäßig Qualität zu verlieren.",
      ],
    },
    {
      heading: "Extrahieren, bearbeiten, neu zusammensetzen",
      id: "workflow",
      body: [
        "Frames extrahieren und neu zusammensetzen ist der praktische Weg, eine Animation zu ändern, die Sie nicht selbst erstellt haben. Holen Sie die Frames hier heraus, nehmen Sie die nötige Änderung vor – zuschneiden, Farbe anpassen, unerwünschte Frames löschen, etwas Sensibles unkenntlich machen – und geben Sie das Ergebnis dann in „GIF erstellen“.",
        "Auf dem Rückweg sollten Sie das Timing bewahren. Notieren Sie vorher die ursprüngliche Anzeigedauer pro Frame, denn eine andere Rate verändert den Charakter der Animation, manchmal drastisch. Und behalten Sie die Nummerierung bei: Die Reihenfolge beim Hinzufügen ist die Reihenfolge beim Abspielen.",
        "Beide Schritte laufen in Ihrem Browser. Ein GIF mit Inhalten, die Sie lieber nicht hochladen möchten, lässt sich so zerlegen und wieder zusammensetzen, ohne Ihr Gerät zu verlassen.",
      ],
    },
  ],

  howToTitle: "So extrahieren Sie Frames aus einem GIF",
  steps: [
    { title: "GIF hochladen", description: "Wählen Sie ein animiertes GIF aus oder ziehen Sie es in den Arbeitsbereich." },
    { title: "Frames ansehen", description: "Jeder Frame wird extrahiert und vollständig zusammengesetzt – Sie sehen alle in einem Raster." },
    { title: "Herunterladen", description: "Speichern Sie alle Frames als ZIP in PNG, JPG oder WebP, oder klicken Sie auf einen einzelnen Frame, um nur ihn herunterzuladen." },
  ],

  features: [
    { icon: "burst_mode", title: "Jeder Frame", description: "Zerlegt ein animiertes GIF in alle seine Einzelbilder, vollständig zusammengesetzt, sodass jedes ein komplettes Bild ist." },
    { icon: "folder_zip", title: "Alles als ZIP", description: "Exportieren Sie alle Frames auf einmal als nummeriertes ZIP in PNG, JPG oder WebP." },
    { icon: "lock", title: "100 % privat", description: "Die Frames werden vollständig in Ihrem Browser extrahiert – Ihr GIF wird nie auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Sind die Frames vollständige Bilder?", a: "Ja. Jeder Frame wird unter Beachtung der GIF-Anweisungen für die Fläche darunter zusammengesetzt, sodass Teil-Frames zu vollständigen Bildern werden." },
    { q: "In welche Formate kann ich exportieren?", a: "PNG (mit Transparenz), JPG (mit Hintergrundfarbe) oder WebP." },
    { q: "Kann ich nur einen Frame herunterladen?", a: "Ja. Klicken Sie im Raster auf einen Frame, um ihn einzeln herunterzuladen, oder laden Sie mit der Schaltfläche alle Frames als ZIP herunter." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Ohne Anmeldung, und das GIF wird lokal in Ihrem Browser verarbeitet – nichts wird hochgeladen." },
    { q: "Wozu brauche ich die einzelnen Frames?", a: "Um ein gutes Standbild aus einer Animation zu holen, einen bestimmten Frame zu bearbeiten und die Schleife neu zu bauen, Bewegungen Frame für Frame zu studieren, einen unerwünschten Frame zu entfernen – oder einfach, weil Sie ein Standbild brauchen und nur das GIF haben." },
    { q: "Bekomme ich wirklich jeden Frame?", a: "Ja – das GIF wird vollständig dekodiert, nicht nur stichprobenartig, Sie erhalten also jeden gespeicherten Frame in der richtigen Reihenfolge. Eine Drei-Sekunden-Schleife mit 10 Frames pro Sekunde ergibt dreißig Bilder, nummeriert, damit die Abfolge erhalten bleibt." },
    { q: "Welches Exportformat sollte ich wählen?", a: "Fast immer PNG. GIF-Frames sind bereits auf 256 Farben begrenzt, und PNG speichert sie verlustfrei, sodass nichts weiter leidet – außerdem bleibt die Transparenz erhalten. JPG würde zusätzliche Kompressionsartefakte erzeugen und kann keine Transparenz speichern." },
    { q: "Warum sehen manche Frames unvollständig oder transparent aus?", a: "Weil GIF Frames als Unterschied zum vorherigen speichert – nur die Pixel, die sich geändert haben. Der Decoder setzt sie wieder zu vollständigen Bildern zusammen, und genau die erhalten Sie hier. Wenn Sie in einem anderen Tool schon einmal einen rohen GIF-Frame mit nur einem Bruchstück gesehen haben, ist das der Grund." },
    { q: "Kann ich nach dem Bearbeiten wieder ein GIF erstellen?", a: "Ja. Extrahieren Sie hier, bearbeiten Sie die gewünschten Frames und setzen Sie sie mit „GIF erstellen“ wieder zur Schleife zusammen. Dieser Kreislauf ist der übliche Weg, eine vorhandene Animation zu reparieren oder aufzuräumen." },
    { q: "Funktioniert das auch mit einem sehr langen GIF?", a: "In der Regel ja, aber ein GIF mit Hunderten Frames ergibt Hunderte Dateien und braucht länger zum Dekodieren und Packen. Alles passiert in Ihrem Browser, die praktische Grenze ist also der Arbeitsspeicher Ihres Geräts, nicht ein Upload-Limit." },
    { q: "Werden meine GIFs auf einen Server hochgeladen?", a: "Nein. Die Datei wird nur in Ihrem Browser gelesen und zerlegt. oMyImage sieht, speichert und verarbeitet Ihr GIF nicht auf einem Server – auch datenschutzrechtlich bleibt also alles auf Ihrem Gerät." },
  ],

  security:
    "Ihr GIF bleibt privat. Die Frames werden vollständig in Ihrem Browser mit der Open-Source-Bibliothek gifuct-js extrahiert – nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // GifToImagesTool.tsx
    "Please select a GIF file.": "Bitte wählen Sie eine GIF-Datei aus.",
    "No frames found in this GIF.": "In diesem GIF wurden keine Frames gefunden.",
    "Extracted 1 frame.": "1 Frame extrahiert.",
    "Extracted {n} frames.": "{n} Frames extrahiert.",
    "Couldn't read that GIF.": "Dieses GIF konnte nicht gelesen werden.",
    "Downloaded 1 frame as a ZIP.": "1 Frame als ZIP heruntergeladen.",
    "Downloaded {n} frames as a ZIP.": "{n} Frames als ZIP heruntergeladen.",
    "Couldn't build the ZIP.": "Das ZIP konnte nicht erstellt werden.",
    "Select a GIF": "GIF auswählen",
    "or drop an animated .gif here": "oder ein animiertes .gif hier ablegen",
    "1 frame": "1 Frame",
    "{n} frames": "{n} Frames",
    "frame": "Frame",
    "frames": "Frames",
    "Clear GIF": "GIF entfernen",
    "Change GIF": "GIF wechseln",
    "Frame settings": "Frame-Einstellungen",
    "Frame Settings": "Frame-Einstellungen",
    "Download frame {n}": "Frame {n} herunterladen",
    "Frame {n}": "Frame {n}", // i18n-same
    "showing first {n}, all included in the ZIP": "die ersten {n} werden angezeigt, alle sind im ZIP enthalten",
    "Click any frame to download it on its own.": "Klicken Sie auf einen Frame, um nur ihn herunterzuladen.",
    "Download 1 frame (ZIP)": "1 Frame herunterladen (ZIP)",
    "Download all {n} frames (ZIP)": "Alle {n} Frames herunterladen (ZIP)",
    "Download": "Herunterladen",
    "Output": "Ausgabe",
    "Format": "Format", // i18n-same
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    "Working…": "Wird verarbeitet…",
  },
};

export default content;
