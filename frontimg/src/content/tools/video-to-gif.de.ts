import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/video-in-gif.
 *
 * Head term „Video in GIF“ (9.9K/mo); „MP4 in GIF“ (12.1K) is the bigger
 * query but narrower, so it sits in the metaTitle, the intro, a heading and an
 * FAQ. „Video zu GIF“ appears once in the body.
 */
const content: ToolPageContent = {
  toolId: "video-to-gif",
  locale: "de",
  name: "Video in GIF",
  tagline:
    "Machen Sie aus einem Ausschnitt eines MP4-, WEBM- oder MOV-Videos ein GIF in Endlosschleife – zuschneiden, Bildrate und Größe wählen, Ergebnis vor dem Download ansehen. Kostenlos, und das Video verlässt nie Ihren Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Video in GIF umwandeln – MP4 in GIF online | oMyImage",
  metaDescription:
    "Video in GIF umwandeln: MP4, WEBM oder MOV zuschneiden, Bildrate und Breite wählen und das GIF herunterladen. Kostenlos, ohne Anmeldung, ohne Upload.",

  intro:
    "Ein GIF läuft überall, wo ein Bild hinpasst: in Chats, Foren, E-Mails, Präsentationen und Kommentarfeldern, die nie ein Video automatisch abspielen würden. Der Konverter „Video in GIF“ von oMyImage schneidet den gewünschten Moment aus einer Videodatei und macht daraus ein GIF in Endlosschleife – ob MP4 in GIF, WEBM oder MOV. Fügen Sie das Video hinzu, setzen Sie Anfang und Ende beim Ansehen, wählen Sie, wie flüssig und wie groß es werden soll, und laden Sie das GIF herunter. Das Video wird von Ihrem eigenen Browser dekodiert und daher nirgendwohin hochgeladen.",

  sections: [
    {
      heading: "Den richtigen Moment wählen",
      id: "trim",
      body: [
        "GIFs funktionieren am besten als kurze Schleifen: eine Reaktion, ein sich drehendes Produkt, ein Schritt in einer Anleitung, die Pointe eines Clips. Spielen Sie das Video ab und drücken Sie im richtigen Moment Hier starten und Hier beenden, oder geben Sie die Zeiten in Sekunden ein. Zu Beginn sind die ersten fünf Sekunden ausgewählt, weil die meisten guten GIFs kürzer sind.",
        "Jede Sekunde zählt bei der Dateigröße. Ein GIF speichert jeden Frame als Bild, ein 10-Sekunden-Clip hat also doppelt so viele Frames wie einer mit 5 Sekunden – und ist ungefähr doppelt so groß. Auf den Teil zu kürzen, den die Leute wirklich sehen müssen, spart am meisten.",
      ],
    },
    {
      heading: "Bildrate und Breite",
      id: "settings",
      body: [
        "Die Frames pro Sekunde bestimmen, wie flüssig die Bewegung wirkt. 10 fps ist das klassische GIF-Gefühl und hält Dateien klein; 15 fps ist bei schneller Bewegung spürbar flüssiger; 20–25 fps kommen an Video heran, verdoppeln aber die Zahl der Frames oder mehr. Für Bildschirmaufnahmen und ruhige Szenen reichen oft 5–10 fps.",
        "Die Breite ist der andere große Hebel. 480 Pixel passen für die meisten Chats und Webseiten; 320 eignen sich für Reaktionen und kleine Einbettungen; 640 oder die Originalbreite sind für Anleitungen, in denen kleiner Text lesbar bleiben muss. Die Höhe folgt dem Seitenverhältnis des Videos, es wird also nichts verzerrt.",
      ],
    },
    {
      heading: "Qualität und Dateigröße",
      id: "quality",
      body: [
        "GIF kann nur 256 Farben darstellen. Sie werden hier einmal für den ganzen Clip gewählt, damit die Farben von Frame zu Frame ruhig bleiben. Hoch behält alle 256 und ignoriert nur das schwächste Flimmern; Mittel nutzt 128 Farben und friert kleine Änderungen zwischen Frames ein; Kleine Datei geht noch weiter, was zu einfachen Szenen und Bildschirmaufnahmen passt.",
        "Im Hintergrund speichert jeder Frame nach dem ersten nur die Pixel, die sich geändert haben; der Rest scheint vom vorherigen Frame durch. Bildrauschen im Video macht diesen Trick zunichte – deshalb behandeln die niedrigeren Stufen winzige Änderungen als keine Änderung, und deshalb sparen sie bei echtem Filmmaterial so viel.",
      ],
    },
    {
      heading: "MP4 in GIF, WEBM und MOV: welche Videos funktionieren",
      id: "formats",
      body: [
        "Jedes Video, das Ihr Browser abspielen kann, funktioniert: MP4 (H.264), WEBM (VP8, VP9 oder AV1) und die meisten MOV-Dateien. iPhone-Videos in HEVC laufen nur dort, wo das System HEVC unterstützt, etwa in Safari auf Mac oder iPhone; anderswo kann ein Fehler erscheinen. Stellen Sie die iPhone-Kamera auf „Maximale Kompatibilität“ (Einstellungen, Kamera, Formate), nimmt sie in H.264 auf, und das funktioniert überall.",
        "Der Ton fällt weg, denn GIF hat keine Audiospur. Seitenverhältnis, Farben und Timing des Clips bleiben erhalten, und das GIF läuft endlos, sofern Sie Endlos wiederholen nicht abwählen.",
      ],
    },
    {
      heading: "Lange Clips und Arbeitsspeicher",
      id: "limits",
      body: [
        "Die Frames bleiben im Arbeitsspeicher, bis das GIF geschrieben ist, deshalb sind sehr lange oder sehr große Clips begrenzt. Meldet das Tool, dass der Clip für diese Größe zu lang ist, kürzen Sie ihn, senken Sie die Bildrate oder wählen Sie eine kleinere Breite; das Bedienfeld zeigt, wie viele Frames gleich entstehen. Für alles über einer halben Minute ist ein GIF selten das richtige Format – ein kurzes MP4 ist kleiner und sieht besser aus. Für ein Video zu GIF in guter Qualität gilt also: kurz halten.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Video in ein GIF um",
  steps: [
    { title: "Video hinzufügen", description: "Wählen Sie eine MP4-, WEBM- oder MOV-Datei von Ihrem Computer oder Smartphone aus." },
    { title: "Zuschneiden und einstellen", description: "Markieren Sie Anfang und Ende und wählen Sie dann Bildrate, Breite und Qualität." },
    { title: "GIF erstellen", description: "Klicken Sie auf GIF erstellen, prüfen Sie die Vorschau und laden Sie das GIF herunter." },
  ],

  features: [
    { icon: "gif_box", title: "Auf den Moment zugeschnitten", description: "Setzen Sie Anfang und Ende während der Wiedergabe, auf die Zehntelsekunde genau." },
    { icon: "tune", title: "Größe unter Kontrolle", description: "Bildrate, Breite und Qualitätsstufen halten das GIF so klein wie möglich." },
    { icon: "lock", title: "Kein Upload", description: "Ihr Video wird von Ihrem eigenen Browser dekodiert und umgewandelt." },
  ],

  faqs: [
    { q: "Wie wandle ich ein Video in ein GIF um?", a: "Fügen Sie das Video hinzu, markieren Sie Anfang und Ende, wählen Sie Bildrate und Breite und klicken Sie auf GIF erstellen. Vorschau prüfen, herunterladen, fertig." },
    { q: "Kann ich MP4 in GIF umwandeln?", a: "Ja. MP4 mit H.264 funktioniert in jedem Browser; WEBM und MOV funktionieren ebenfalls." },
    { q: "Warum lässt sich mein iPhone-Video nicht öffnen?", a: "Wahrscheinlich ist es in HEVC aufgenommen, das manche Browser nicht abspielen können. Verwenden Sie Safari oder stellen Sie die iPhone-Kamera auf „Maximale Kompatibilität“, damit sie in H.264 aufnimmt." },
    { q: "Wie lang darf das GIF sein?", a: "Kurz ist am besten – ein paar Sekunden. Längere Clips sind mit niedrigerer Bildrate und kleinerer Breite möglich; das Tool sagt Ihnen, wenn ein Clip für die Größe zu lang ist." },
    { q: "Wie mache ich das GIF kleiner?", a: "Kürzen Sie den Clip, senken Sie die Bildrate auf 10 fps, wählen Sie eine kleinere Breite wie 320 oder 480 Pixel und nehmen Sie Mittel oder Kleine Datei." },
    { q: "Behält das GIF den Ton?", a: "Nein. GIF hat keine Audiospur, der Ton fällt also weg." },
    { q: "Läuft das GIF in Schleife?", a: "Ja, standardmäßig endlos. Wählen Sie Endlos wiederholen ab, damit es nur einmal abgespielt wird." },
    { q: "Welche Bildrate sollte ich wählen?", a: "10 fps für die meisten Clips, 15 fps für schnelle Bewegung, 5–10 fps für Bildschirmaufnahmen." },
    { q: "Wird mein Video hochgeladen?", a: "Nein. Es wird vollständig in Ihrem Browser dekodiert und in ein GIF umgewandelt." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, im mobilen Browser – für Videos, die der Browser des Smartphones abspielen kann. Kürzere Clips gehen auf dem Smartphone schneller." },
    { q: "Hat das GIF ein Wasserzeichen?", a: "Nein. Das GIF enthält kein Logo, und Sie brauchen weder Konto noch Anmeldung." },
  ],

  security:
    "Ihr Video wird von Ihrem eigenen Browser dekodiert, und das GIF entsteht auf Ihrem Gerät. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // VideoToGifTool.tsx
    "Select a video": "Video auswählen",
    "or drop an MP4, WEBM or MOV video here": "oder ein MP4-, WEBM- oder MOV-Video hier ablegen",
    "Please select a video file.": "Bitte wählen Sie eine Videodatei aus.",
    "This video can't be played in your browser.": "Dieses Video kann in Ihrem Browser nicht abgespielt werden.",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Clear video": "Video entfernen",
    "Change video": "Video wechseln",
    "GIF settings": "GIF-Einstellungen",
    "Make GIF": "GIF erstellen",
    "Download GIF": "GIF herunterladen",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird verarbeitet… {p} %",
    "Your GIF will appear here.": "Ihr GIF erscheint hier.",
    "Video": "Video", // i18n-same
    "GIF": "GIF", // i18n-same
    "Start here": "Hier starten",
    "End here": "Hier beenden",
    "Start": "Anfang",
    "End": "Ende",
    "Clip (seconds)": "Ausschnitt (Sekunden)",
    "{len} s of {total} s. Use Start here and End here while the video plays.":
      "{len} s von {total} s. Nutzen Sie Hier starten und Hier beenden, während das Video läuft.",
    "Frames per second": "Frames pro Sekunde",
    "Width (px)": "Breite (px)",
    "Original ({w})": "Original ({w})", // i18n-same
    "Loop forever": "Endlos wiederholen",
    "Quality": "Qualität",
    "{n} frames": "{n} Frames",
    "{n} frames at {w} × {h} px": "{n} Frames mit {w} × {h} px",
    "Too long for this size — shorten the clip, lower the frame rate or the width.":
      "Zu lang für diese Größe – kürzen Sie den Ausschnitt oder senken Sie Bildrate oder Breite.",
    "Your video is converted in your browser and never uploaded.": "Ihr Video wird im Browser umgewandelt und nie hochgeladen.",
    // QUALITY_LABEL (module scope)
    "High": "Hoch",
    "Medium": "Mittel",
    "Small file": "Kleine Datei",
  },
};

export default content;
