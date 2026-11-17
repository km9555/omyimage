import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gif-komprimieren.
 *
 * Head term „GIF komprimieren“ (1.6K/mo); secondary „GIF verkleinern“ (720)
 * in the metaTitle, intro, a heading and an FAQ. The ui block is shared with
 * gif-resizer and webp-to-gif, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "gif-compressor",
  locale: "de",
  name: "GIF komprimieren",
  tagline:
    "Machen Sie animierte GIFs kleiner – mit weniger Farben, schlaueren Frames und optional kleineren Maßen –, ohne dass die Animation stoppt. Vorher und nachher vergleichen, dann herunterladen. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF komprimieren – GIF verkleinern online | oMyImage",
  metaDescription:
    "GIF komprimieren und verkleinern: weniger Farben, sparsamere Frames, kleinere Maße. Animation bleibt erhalten, Vorher-nachher-Vergleich. Kostenlos, ohne Upload.",

  intro:
    "Animierte GIFs werden schnell groß, und ein großes GIF wird von Chats, Foren und E-Mail abgelehnt oder lädt langsam. Mit „GIF komprimieren“ von oMyImage verkleinern Sie ein GIF, indem es sparsamer neu aufgebaut wird: Es speichert nur, was sich zwischen den Frames ändert, kann weniger Farben verwenden und winziges Flimmern ignorieren und bei Bedarf Frames weglassen oder die Maße verkleinern. Wählen Sie Leicht, Mittel oder Stark, sehen Sie Original und Ergebnis mit ihren Dateigrößen nebeneinander und laden Sie die Version herunter, die Ihnen gefällt.",

  sections: [
    {
      heading: "Warum GIFs so groß sind",
      id: "why",
      body: [
        "Ein GIF ist ein Stapel von Bildern, jedes auf 256 Farben begrenzt und verlustfrei komprimiert. Die Größe wächst mit drei Dingen: wie viele Pixel ein Frame hat, wie viele Frames es gibt und wie viel sich von Frame zu Frame ändert. Ein GIF aus einem Handyvideo erreicht für wenige Sekunden Bewegung schnell mehrere Dutzend Megabyte.",
        "Viele GIFs sind zudem ineffizient gespeichert: jeder Frame vollständig, auch wo sich nichts bewegt, oder mit einer eigenen Farbtabelle pro Frame. Solch eine Datei sauber neu zu kodieren spart oft einen großen Teil, bevor überhaupt Qualität geopfert wird.",
      ],
    },
    {
      heading: "Was die Stufen bewirken",
      id: "levels",
      body: [
        "Leicht baut das GIF mit einer gemeinsamen Palette von 256 Farben neu auf und speichert nur die Pixel, die sich zwischen Frames ändern. Das verändert das Aussehen am wenigsten und ist der richtige erste Versuch für GIFs aus älteren Programmen.",
        "Mittel nutzt 128 Farben und behandelt sehr kleine Unterschiede zwischen Frames als keine Änderung – das beseitigt das Flimmern, das Video-GIFs so schwer macht. Stark nutzt 64 Farben, ignoriert auch größeres Flimmern und behält jeden zweiten Frame; die Zeit der weggelassenen Frames wird den behaltenen zugeschlagen, damit das Tempo gleich bleibt.",
        "Jede Einstellung unter den Stufen lässt sich einzeln ändern: die Zahl der Farben, welche Frames behalten werden, und die Größe in Prozent des Originals.",
      ],
    },
    {
      heading: "GIF verkleinern: so holen Sie am meisten heraus",
      id: "tips",
      body: [
        "Die größte Ersparnis bringen meist die Maße. Halbe Breite und Höhe lassen ein Viertel der Pixel übrig, und die Datei schrumpft ungefähr im gleichen Maß. Wird das GIF ohnehin klein angezeigt – in einer Chatblase oder Seitenleiste –, wählen Sie 75 % oder 50 %.",
        "Danach kommen Frames und Farben. Einfache Animationen, Logos und Bildschirmaufnahmen sehen mit 64 oder sogar 32 Farben gleich aus; Fotos und Hauttöne brauchen 128 oder mehr. Jeden zweiten Frame zu behalten halbiert die Frame-Zahl und passt zu langsameren Bewegungen.",
      ],
    },
    {
      heading: "Wenn das Ergebnis nicht kleiner wird",
      id: "already",
      body: [
        "Ein GIF, das schon mit einem spezialisierten Tool optimiert wurde, wird mit Leicht unter Umständen nicht kleiner, weil sich ohne Änderung am Bild nichts mehr entfernen lässt. Das Tool sagt Ihnen, wenn das passiert; versuchen Sie dann Stark, weniger Farben oder eine kleinere Größe und vergleichen Sie das Ergebnis vor dem Herunterladen.",
        "Muss die Animation scharf und klein bleiben, wandeln Sie sie besser in MP4 um. Video komprimiert Bewegung weit besser als GIF und läuft in jedem Chat und auf jedem Smartphone.",
      ],
    },
    {
      heading: "Transparenz und Timing",
      id: "transparency",
      body: [
        "Transparente GIFs bleiben transparent. Weil GIF-Transparenz nur an oder aus kennt, ohne weiche Kanten, lässt sich der Trick mit den Frame-Unterschieden bei ihnen nicht anwenden – sie schrumpfen daher weniger als undurchsichtige GIFs. Weniger Farben und kleinere Maße helfen trotzdem.",
        "Das Timing der Frames bleibt exakt erhalten, auch ungleichmäßige Anzeigedauern, und das GIF wiederholt sich wie zuvor. Anzeigedauern, die Browser ohnehin als 0,1 Sekunden abspielen, werden auch so geschrieben, damit sich das sichtbare Tempo nicht ändert.",
      ],
    },
  ],

  howToTitle: "So komprimieren Sie ein GIF",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Stufe wählen", description: "Wählen Sie Leicht, Mittel oder Stark oder stellen Sie Farben, Frames und Größe selbst ein." },
    { title: "Komprimieren und vergleichen", description: "Klicken Sie auf GIF komprimieren, vergleichen Sie die Dateigrößen nebeneinander und laden Sie das Ergebnis herunter." },
  ],

  features: [
    { icon: "compress", title: "Kleinere GIFs", description: "Nur geänderte Pixel werden gespeichert, optional mit weniger Farben, Frames oder Pixeln." },
    { icon: "visibility", title: "Vorher und nachher", description: "Beide Versionen laufen nebeneinander, mit ihren Dateigrößen." },
    { icon: "lock", title: "Kein Upload", description: "Ihr GIF wird vollständig in Ihrem Browser komprimiert." },
  ],

  faqs: [
    { q: "Wie kann ich ein GIF verkleinern?", a: "Fügen Sie das GIF hinzu, wählen Sie Mittel oder Stark und klicken Sie auf GIF komprimieren. Für größere Einsparungen wählen Sie zusätzlich eine kleinere Größe wie 75 % oder 50 %." },
    { q: "Entfernt das Komprimieren Frames?", a: "Bei Leicht und Mittel nicht. Stark behält jeden zweiten Frame und schlägt die Zeit der weggelassenen Frames den behaltenen zu, damit das Tempo gleich bleibt." },
    { q: "Warum ist mein komprimiertes GIF nicht kleiner?", a: "Wahrscheinlich war es bereits optimiert. Versuchen Sie Stark, weniger Farben oder eine kleinere Größe." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente GIFs bleiben transparent, schrumpfen aber weniger als undurchsichtige." },
    { q: "Wie viele Farben sollte ich behalten?", a: "64 reichen für Logos, Cartoons und Bildschirmaufnahmen; für Fotos und Gesichter behalten Sie 128 oder 256." },
    { q: "Was macht ein GIF am schnellsten kleiner?", a: "Kleinere Pixelmaße. Halbe Breite und Höhe sind etwa ein Viertel der Daten." },
    { q: "Läuft das GIF weiterhin in Schleife?", a: "Ja. Wiederholung und Timing der Frames bleiben erhalten." },
    { q: "Sollte ich stattdessen MP4 verwenden?", a: "Bei langen oder detailreichen Animationen ja – MP4 ist meist viel kleiner. Nutzen Sie GIF dort, wo Video nicht akzeptiert wird." },
    { q: "Gibt es eine Größenbeschränkung?", a: "Keine feste. Sehr große GIFs dauern länger, und der Fortschritt wird während der Arbeit angezeigt." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Die Komprimierung findet vollständig in Ihrem Browser statt." },
    { q: "Ist GIF komprimieren kostenlos?", a: "Ja. Ohne Konto, ohne Wasserzeichen und ohne Begrenzung, wie viele GIFs Sie verkleinern." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser dekodiert und neu kodiert. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // GifTool.tsx — shared with gif-resizer and webp-to-gif, whose modules reuse this block.
    "Select a GIF": "GIF auswählen",
    "Select a WEBP": "WebP auswählen",
    "or drop a GIF here": "oder ein GIF hier ablegen",
    "or drop an animated WEBP here": "oder ein animiertes WebP hier ablegen",
    "Please select a GIF.": "Bitte wählen Sie ein GIF aus.",
    "Please select a WEBP image.": "Bitte wählen Sie ein WebP-Bild aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Change image": "Bild wechseln",
    "Clear image": "Bild entfernen",
    "GIF settings": "GIF-Einstellungen",
    "Compress GIF": "GIF komprimieren",
    "Resize GIF": "GIF-Größe ändern",
    "Convert to GIF": "In GIF umwandeln",
    "Download GIF": "GIF herunterladen",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird verarbeitet… {p} %",
    "Your GIF will appear here.": "Ihr GIF erscheint hier.",
    "Original": "Original", // i18n-same
    "Result": "Ergebnis",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "Set a size": "Größe festlegen",
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p} % kleiner",
    "This GIF is already well optimised — try Strong, fewer colours or a smaller size.":
      "Dieses GIF ist bereits gut optimiert – versuchen Sie Stark, weniger Farben oder eine kleinere Größe.",
    "This WEBP isn't animated, so the GIF will be a single still image.":
      "Dieses WebP ist nicht animiert, das GIF wird daher ein einzelnes Standbild.",
    "Compression": "Komprimierung",
    "Stronger levels use fewer colours and skip tiny changes between frames.":
      "Stärkere Stufen nutzen weniger Farben und überspringen winzige Änderungen zwischen Frames.",
    "Colours": "Farben",
    "Frames": "Frames", // i18n-same
    "Size": "Größe",
    "By percent": "In Prozent",
    "By pixels": "In Pixeln",
    "Percent": "Prozent",
    "Width (px)": "Breite (px)",
    "Height (px)": "Höhe (px)",
    "Keep aspect ratio": "Seitenverhältnis beibehalten",
    "Every frame is resized and the timing stays the same.": "Jeder Frame wird skaliert, das Timing bleibt gleich.",
    "Every frame and its timing are kept. GIF has only 256 colours and no soft transparency, so gradients may band and semi-transparent edges become solid.":
      "Jeder Frame und sein Timing bleiben erhalten. GIF hat nur 256 Farben und keine weiche Transparenz, Verläufe können also Stufen zeigen und halbtransparente Kanten werden deckend.",
    "Your file is processed in your browser and never uploaded.": "Ihre Datei wird im Browser verarbeitet und nie hochgeladen.",
    // LEVEL_LABEL / KEEP_LABEL (module scope)
    "Light": "Leicht",
    "Medium": "Mittel",
    "Strong": "Stark",
    "Keep all frames": "Alle Frames behalten",
    "Keep every 2nd frame": "Jeden 2. Frame behalten",
    "Keep every 3rd frame": "Jeden 3. Frame behalten",
  },
};

export default content;
