import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gif-in-mp4.
 *
 * Head term „GIF in MP4“ (2.4K/mo); „GIF in MP4 umwandeln“ carries the
 * metaTitle and the how-to heading.
 */
const content: ToolPageContent = {
  toolId: "gif-to-mp4",
  locale: "de",
  name: "GIF in MP4",
  tagline:
    "Wandeln Sie GIFs in MP4-Videos um – meist deutlich kleiner, mit saubereren Farben und auf jeder Plattform akzeptiert, die Video annimmt. Kurze GIFs wiederholen, Hintergrund wählen, herunterladen. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF in MP4 umwandeln – kostenlos & online | oMyImage",
  metaDescription:
    "GIF in MP4 umwandeln: Das Video ist meist um ein Vielfaches kleiner, behält das Timing jedes Frames und läuft auf Instagram und TikTok. Kostenlos, ohne Upload.",

  intro:
    "GIF ist ein altes Format: 256 Farben pro Frame und eine Kompression, die nie für Bewegung gedacht war. Ein MP4-Video erledigt dieselbe Aufgabe mit einem Bruchteil des Speicherplatzes und ist das, was Instagram, TikTok und die meisten Apps eigentlich wollen. Der Konverter „GIF in MP4“ von oMyImage macht aus Ihrem GIF ein H.264-MP4 mit dem eingebauten Video-Encoder Ihres Browsers, behält das Timing jedes Frames bei und lässt Sie eine kurze Schleife wiederholen, damit das Video lang genug zum Posten ist.",

  sections: [
    {
      heading: "Warum ein GIF in MP4 umwandeln",
      id: "why",
      body: [
        "Der wichtigste Grund ist die Größe. Videokompression sagt Bewegung zwischen Frames voraus und speichert Farben weit effizienter, daher ist dieselbe Animation als MP4 typischerweise um ein Mehrfaches kleiner als das GIF – bei detailreichen oder fotografischen GIFs manchmal zehnmal oder mehr. Das Tool zeigt beide Größen, sodass Sie den Unterschied für Ihre Datei sehen.",
        "Der zweite Grund ist, wo die Datei hinkann. Instagram und TikTok nehmen Video-Uploads an, keine GIFs; viele Messenger und Präsentationsprogramme kommen ebenfalls besser mit MP4 zurecht. Selbst Seiten, die Ihnen ein „GIF“ zeigen, wandeln es im Hintergrund oft in ein Video um.",
      ],
    },
    {
      heading: "Eine Schleife daraus machen",
      id: "loop",
      body: [
        "Ein GIF wiederholt sich von selbst; ein MP4 nur, wenn der Player es so eingestellt hat. Die meisten Plattformen spielen ein kurzes Video einmal ab oder wiederholen es nach eigenen Regeln, und sehr kurze Clips werden manchmal abgelehnt oder wirken abrupt. Wählen Sie 2×, 3× oder 5×, um die Animation innerhalb des Videos zu wiederholen – aus einem einsekündigen GIF werden so ein paar Sekunden flüssige Schleife.",
        "Das Bedienfeld zeigt, wie lang das Video mit Ihrer Auswahl wird, sodass Sie die Länge treffen, die Ihre Plattform mag.",
      ],
    },
    {
      heading: "Transparenz und Hintergrund",
      id: "background",
      body: [
        "Normales MP4-Video kennt keine Transparenz, transparente Bereiche des GIFs werden daher mit einer Hintergrundfarbe gefüllt – standardmäßig Weiß. Wählen Sie die Farbe der Seite oder des Chats, in dem das Video erscheint, dann fügt sich ein transparenter Sticker oder ein Logo ein, als gäbe es keinen Hintergrund.",
      ],
    },
    {
      heading: "Qualität und Timing",
      id: "quality",
      body: [
        "Jeder Frame wird mit seiner eigenen Dauer kodiert, GIFs mit ungleichmäßigem Timing – etwa einer Pause auf dem letzten Frame – laufen also genau wie vorher. Das Video wird mit einer für seine Größe großzügigen Bitrate kodiert, was flächige Farben und Text sauber hält.",
        "Das MP4 hat die Maße des GIFs; ist Breite oder Höhe eine ungerade Zahl, wird eine Zeile oder Spalte Hintergrund ergänzt, weil H.264-Video gerade Maße braucht.",
      ],
    },
    {
      heading: "Browser-Unterstützung",
      id: "browsers",
      body: [
        "Die Umwandlung nutzt den WebCodecs-Video-Encoder moderner Browser. Chrome, Edge und Safari können MP4 (H.264) erzeugen; kann Ihr Browser das nicht, sagt das Tool es Ihnen, statt eine defekte Datei zu liefern. Das fertige MP4 läuft auf praktisch jedem Smartphone, Computer und in jeder App.",
        "Nichts wird hochgeladen: Das GIF wird auf Ihrem Gerät dekodiert und das Video dort kodiert. Das bedeutet auch, dass größere GIFs auf langsameren Smartphones etwas länger brauchen.",
      ],
    },
    {
      heading: "MP4 in Präsentationen und Chats",
      id: "uses",
      body: [
        "PowerPoint, Keynote und Google Slides fügen MP4-Videos direkt ein, und ein kurzes MP4 hält eine Präsentation viel leichter als dieselbe Animation als GIF. Stellen Sie das Video im Präsentationsprogramm auf automatisches Abspielen und Wiederholen, dann verhält es sich genau wie das GIF.",
        "In Chats wird ein MP4 schneller gesendet, verbraucht weniger mobile Daten und übersteht Weiterleitungen besser, weil Apps große GIFs viel aggressiver nachkomprimieren als kurze Videos.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein GIF in MP4 um",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Wiederholung und Hintergrund wählen", description: "Wiederholen Sie kurze GIFs, damit das Video ein paar Sekunden dauert, und wählen Sie einen Hintergrund für transparente Bereiche." },
    { title: "Umwandeln und herunterladen", description: "Klicken Sie auf In MP4 umwandeln, sehen Sie sich die Vorschau an und laden Sie das Video herunter." },
  ],

  features: [
    { icon: "compress", title: "Viel kleinere Dateien", description: "MP4 speichert dieselbe Animation mit einem Bruchteil der GIF-Größe." },
    { icon: "speed", title: "Timing jedes Frames bleibt", description: "Ungleichmäßige Anzeigedauern und Pausen laufen genau wie im GIF." },
    { icon: "lock", title: "Kein Upload", description: "Kodiert von Ihrem eigenen Browser; das GIF verlässt nie Ihr Gerät." },
  ],

  faqs: [
    { q: "Wie wandle ich ein GIF in MP4 um?", a: "Fügen Sie das GIF hinzu, wählen Sie, wie oft es abgespielt werden soll, und eine Hintergrundfarbe, und klicken Sie dann auf In MP4 umwandeln." },
    { q: "Ist das MP4 kleiner als das GIF?", a: "Meist viel kleiner – um ein Mehrfaches, bei detailreichen GIFs oft noch mehr. Beide Größen werden nach der Umwandlung angezeigt." },
    { q: "Kann ich das MP4 auf Instagram oder TikTok posten?", a: "Ja. Diese Apps nehmen Videos statt GIFs an. Wiederholen Sie kurze GIFs, damit das Video ein paar Sekunden dauert." },
    { q: "Läuft das MP4 in Schleife?", a: "Nur wenn der Player es wiederholt. Mit der Wiederholungsoption legen Sie die Schleife direkt ins Video." },
    { q: "Was passiert mit der Transparenz?", a: "MP4 kennt keine Transparenz, transparente Bereiche bekommen die gewählte Hintergrundfarbe." },
    { q: "Warum funktioniert es in meinem Browser nicht?", a: "Ihr Browser hat keinen MP4-Video-Encoder. Verwenden Sie Chrome, Edge oder Safari." },
    { q: "Hat das MP4 Ton?", a: "Nein. GIFs haben keinen Ton, das Video ist also stumm." },
    { q: "Bleibt das Timing erhalten?", a: "Ja. Jeder Frame behält seine eigene Dauer, auch Pausen." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Die Umwandlung findet vollständig in Ihrem Browser statt." },
    { q: "Kann ich mehrere GIFs auf einmal umwandeln?", a: "Eins nach dem anderen, damit jedes GIF seine eigene Vorschau, Wiederholungszahl und seinen eigenen Hintergrund bekommt." },
    { q: "Ist GIF in MP4 kostenlos?", a: "Ja. Ohne Konto, ohne Wasserzeichen im Video und ohne Begrenzung der Anzahl." },
  ],

  security:
    "Ihr GIF wird von Ihrem eigenen Browser dekodiert und als Video kodiert. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // GifToMp4Tool.tsx
    "Select a GIF": "GIF auswählen",
    "or drop a GIF here": "oder ein GIF hier ablegen",
    "Please select a GIF.": "Bitte wählen Sie ein GIF aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Change image": "Bild wechseln",
    "Clear image": "Bild entfernen",
    "MP4 settings": "MP4-Einstellungen",
    "Convert to MP4": "In MP4 umwandeln",
    "Download MP4": "MP4 herunterladen",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird verarbeitet… {p} %",
    "Your MP4 will appear here.": "Ihr MP4 erscheint hier.",
    "GIF": "GIF", // i18n-same
    "MP4": "MP4", // i18n-same
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p} % kleiner",
    "{n}×": "{n}×", // i18n-same
    "Encoded by your browser as H.264 — plays everywhere.": "Von Ihrem Browser als H.264 kodiert – läuft überall.",
    "Play the animation": "Animation abspielen",
    "Video doesn't loop by itself on most sites. Repeat a short GIF so the MP4 lasts a few seconds — {s} s now.":
      "Auf den meisten Seiten wiederholt sich Video nicht von selbst. Wiederholen Sie ein kurzes GIF, damit das MP4 ein paar Sekunden dauert – aktuell {s} s.",
    "Background for transparent areas": "Hintergrund für transparente Bereiche",
    "Your GIF is converted in your browser and never uploaded.": "Ihr GIF wird im Browser umgewandelt und nie hochgeladen.",
  },
};

export default content;
