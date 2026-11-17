import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-komprimieren. Structure lives in ToolPageShell.
 *
 * Head terms "Bilder komprimieren" (9.9K/mo) and "Bild komprimieren" (6.6K);
 * "Bild verkleinern" (12.1K), "JPG komprimieren" (8.1K), "PNG komprimieren"
 * (3.6K) and "Foto komprimieren" are the secondaries and live in the intro,
 * section headings and FAQs. Written for Germany/Austria/Switzerland in the
 * "Sie" form; the FAQs add the questions German users ask (upload limits of
 * Behörden and Bewerbungsportale in KB, DSGVO/privacy) that English lacks.
 *
 * FORMATS labels are module scope in CompressTool.tsx and are maintained here
 * by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "compress-image",
  locale: "de",
  name: "Bild komprimieren",
  tagline:
    "Komprimieren Sie JPG-, PNG- und WEBP-Bilder online — nach Qualität oder direkt auf eine exakte Größe wie 50 KB oder 100 KB. Mit Stapelverarbeitung und Anzeige der Ersparnis. Kostenlos, schnell und privat im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild komprimieren – Bilder online verkleinern, kostenlos",
  metaDescription:
    "Bilder komprimieren und verkleinern: JPG, PNG und WEBP online auf wenige KB reduzieren, auch im Stapel. Kostenlos, ohne Anmeldung und ohne Wasserzeichen.",

  variantsHeading: "Auf eine exakte Dateigröße komprimieren",

  intro:
    "Große Bilddateien bremsen Websites aus, füllen den Speicher und sprengen E-Mail-Anhänge — und Upload-Formulare lehnen sie oft komplett ab. Mit dem Tool „Bild komprimieren“ von oMyImage verkleinern Sie JPG-, PNG- und WEBP-Dateien direkt im Browser, und zwar auf zwei Arten: nach Qualität, indem Sie für die kleinste Datei in WEBP umwandeln, die Qualität einstellen und sehr große Fotos auf Wunsch herunterskalieren; oder nach Dateigröße, indem Sie ein Limit wie 50 KB eintippen und das schärfste Bild erhalten, das darunter passt. PNGs werden richtig komprimiert, nämlich durch Farbreduktion mit Dithering statt durch bloßes Neuspeichern. Komprimieren Sie ein einzelnes Foto oder gleich einen ganzen Stapel Bilder und sehen Sie genau, wie viel Sie gespart haben.",

  sections: [
    {
      heading: "Warum Bilder komprimieren mehr bringt als alles andere auf einer Seite",
      id: "why",
      body: [
        "Bilder sind fast immer das Schwerste, was eine Webseite lädt — oft mehr als HTML, CSS und JavaScript zusammen. Damit bestimmen sie den Largest Contentful Paint, den Core-Web-Vitals-Wert, der misst, wie lange Besucher warten, bis der Hauptinhalt erscheint. Wer das Gewicht seiner Bilder halbiert, gewinnt beim gefühlten Tempo meist mehr als mit jeder Code-Optimierung.",
        "Es geht nicht nur um Geschwindigkeit. Ein großer Teil der Besucher surft mobil mit begrenztem Datenvolumen, und ein unkomprimiertes Titelbild verbraucht dieses Volumen für Details, die das Display gar nicht darstellen kann. Ein Foto mit 4 MB in einer 800 Pixel breiten Spalte liefert grob zehnmal so viel Information, wie der Bildschirm nutzen kann.",
        "Dazu kommt der Alltag: Bewerbungsportale, Behördenformulare, Online-Shops und Personalsysteme akzeptieren häufig nur Dateien unter 100 KB, 200 KB oder 1 MB. Komprimieren ist die günstigste Lösung, weil sich weder Layout noch Arbeitsablauf ändern. Das Bild sieht gleich aus und wiegt nur noch einen Bruchteil.",
      ],
    },
    {
      heading: "Verlustbehaftet und verlustfrei: zwei verschiedene Verfahren",
      id: "how",
      body: [
        "JPG und WebP arbeiten verlustbehaftet. Sie analysieren das Bild, verwerfen Informationen, für die das menschliche Auge am wenigsten empfindlich ist — vor allem feine Farbabstufungen — und speichern den Rest. Deshalb schrumpfen Fotos so stark, und deshalb entstehen bei zu niedriger Qualität die typischen Blöcke und Säume an kontrastreichen Kanten.",
        "PNG kann so nicht arbeiten: Das Format ist per Definition verlustfrei und wird kleiner, indem die Zahl der unterschiedlichen Farben sinkt. Unser PNG-Verfahren quantisiert die Palette und wendet Dithering an. Bei Logos, Screenshots und flächigen Grafiken ist das praktisch unsichtbar, bei einem Foto mit glattem Himmel dagegen deutlich zu sehen. Ab einer Qualität von 95 % bleibt das PNG vollständig verlustfrei, und nur die Kodierung wird optimiert.",
        "Darum zählt das Format genauso viel wie der Schieberegler. Ein Screenshot, der als JPG komprimiert wird, sieht schlechter aus und ist größer als derselbe Screenshot als optimiertes PNG — und ein Foto im PNG-Format ist um ein Vielfaches größer als nötig.",
      ],
    },
    {
      heading: "JPG, PNG oder WEBP: das richtige Ausgabeformat",
      id: "format",
      body: [
        "WebP liefert bei gleicher Qualität die kleinste Datei, unterstützt Transparenz und wird von allen aktuellen Browsern angezeigt. Für alles, was auf eine Website kommt, ist es die erste Wahl.",
        "JPG ist etwas größer, wird aber wirklich überall akzeptiert, auch von Software, die WebP nicht kennt. Nehmen Sie JPG für E-Mail-Anhänge, Upload-Formulare, Behördenportale, Fotodienste und alles, was das Web verlässt.",
        "PNG ist die richtige Antwort für Inhalte mit harten Kanten — Logos, Strichzeichnungen, Screenshots, Diagramme — und für alles, dessen Transparenz verlustfrei erhalten bleiben muss. Für Fotos sollten Sie PNG nur nehmen, wenn es einen konkreten Grund dafür gibt.",
      ],
    },
    {
      heading: "Bild verkleinern auf ein KB-Limit statt nach Qualität",
      id: "target-size",
      body: [
        "Wenn ein Formular „maximal 100 KB“ verlangt, beantwortet der Qualitätsregler die falsche Frage: Sie müssten einen Wert raten, komprimieren, die Größe prüfen und es erneut versuchen. Stellen Sie stattdessen auf „Nach Dateigröße“ um, tippen Sie das Limit ein, und das Tool übernimmt das Ausprobieren — es sucht die höchste Qualität, deren Ergebnis noch passt, und verringert nur dann zusätzlich die Pixelmaße, wenn selbst eine niedrige Qualität zu groß ist.",
        "Das Ergebnis liegt immer unter der eingegebenen Zahl, nie nur „ungefähr“ dort. Das Tool rechnet 1 KB als 1.000 Byte, sodass eine Datei für ein 50-KB-Limit auch Formulare besteht, die 1 KB als 1.024 Byte zählen. Liegt ein Bild im gewählten Format bereits unter dem Limit, erhalten Sie es unverändert zurück statt einer unnötig neu komprimierten Kopie.",
        "Die häufigsten Grenzen haben eigene Seiten mit passenden Tipps — Unterschriften mit 20 KB, Fotos für Prüfungsanmeldungen mit 50 KB, Bewerbungsfotos und Scans mit 100 KB und 200 KB sowie Handyfotos mit 1 MB.",
      ],
    },
    {
      heading: "Wenn sich ein Bild nicht weiter komprimieren lässt",
      id: "already-optimised",
      body: [
        "Manchmal gibt das Tool Ihr Original zurück und sagt das auch. Das ist Absicht: Wenn nichts, was wir erzeugen können, kleiner ist als Ihre Datei, wäre eine größere „komprimierte“ Version nur ein als Ergebnis getarnter Fehlschlag.",
        "Meist heißt das, dass das Bild schon durch einen Optimierer gelaufen ist oder dass es sich um eine kleine Grafik handelt, bei der der feste Overhead des Formats überwiegt. Gerade sehr kleine PNGs haben eine Untergrenze, unter der Header und Palette den Großteil der Datei ausmachen. Dann liegt die verbleibende Ersparnis woanders — im Verkleinern auf die tatsächlich angezeigten Maße oder im Wechsel des Formats.",
      ],
    },
  ],

  howToTitle: "So komprimieren Sie ein Bild",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WEBP-Bilder aus oder ziehen Sie sie per Drag-and-drop hinein." },
    { title: "Einstellungen wählen", description: "Legen Sie Ausgabeformat und Qualität fest — oder wechseln Sie zu „Nach Dateigröße“ und tippen Sie ein Limit wie 50 KB ein." },
    { title: "Komprimieren und herunterladen", description: "Klicken Sie auf „Komprimieren“ — ein einzelnes Bild wird direkt heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Stapelkomprimierung", description: "Komprimieren Sie Dutzende Bilder auf einmal und laden Sie alle als eine ZIP-Datei herunter — jeweils mit Anzeige der Ersparnis." },
    { icon: "tune", title: "Qualität, Format oder exakte Größe", description: "Wandeln Sie für die kleinsten Dateien in WEBP um, stellen Sie die Qualität genau ein oder geben Sie ein Größenlimit vor und erhalten Sie die schärfste Datei darunter." },
    { icon: "lock", title: "100 % privat", description: "Bei fast allen Fotos läuft die Komprimierung in Ihrem Browser, und diese Bilder werden nirgendwohin hochgeladen." },
  ],

  faqs: [
    { q: "Wie viel kleiner werden meine Bilder?", a: "Das hängt vom Bild und den Einstellungen ab. Fotos, die mit 70–80 % Qualität in WEBP umgewandelt werden, schrumpfen oft um 50–80 % ohne sichtbaren Unterschied, und PNG-Grafiken werden bei der Standardqualität meist um 60–80 % kleiner." },
    { q: "Wie funktioniert PNG komprimieren?", a: "PNG kann Details nicht wie JPG verwerfen und wird deshalb anders kleiner: durch weniger unterschiedliche Farben. Bei den standardmäßigen 70 % quantisieren wir auf 128 Farben mit Dithering, was bei Illustrationen, Logos und Screenshots meist unsichtbar bleibt. Stellen Sie 95 % oder mehr ein, damit das PNG vollständig verlustfrei bleibt." },
    { q: "Welches Format ergibt die kleinsten Dateien?", a: "WEBP erzeugt bei gleicher Qualität in der Regel die kleinsten Dateien, gefolgt von JPG. PNG bleibt die beste Wahl für Grafiken mit harten Kanten, flächigen Farben und Transparenz." },
    { q: "Verliert mein Bild durch das Komprimieren an Qualität?", a: "JPG und WEBP sind verlustbehaftet, bei sehr niedriger Qualität sehen Sie also Artefakte; PNG verliert Farben statt Details. Die Standardeinstellung von 70 % ist ein guter Kompromiss — für wichtige Bilder stellen Sie einen höheren Wert ein." },
    { q: "Wie kann ich ein JPG komprimieren, ohne dass es schlecht aussieht?", a: "Bleiben Sie zwischen 70 und 85 % Qualität und verkleinern Sie sehr große Fotos zusätzlich mit „Große Bilder verkleinern“ auf die tatsächlich benötigte Breite. Das spart meist mehr als eine niedrigere Qualität und hält Himmel und Hauttöne sauber." },
    { q: "Warum ist eines meiner Bilder nicht kleiner geworden?", a: "Weil es schon optimiert war. Wenn nichts, was wir erzeugen, Ihre Datei unterbietet, geben wir das Original unverändert zurück und kennzeichnen es — ein Kompressor, der eine größere Datei liefert, hat seinen Zweck verfehlt." },
    { q: "Kann ich mehrere Bilder auf einmal komprimieren?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten — mehrere Dateien werden zusammen als ZIP heruntergeladen, jede mit der eingesparten Prozentzahl." },
    { q: "Ist das Tool kostenlos und privat?", a: "Ja, vollständig. Keine Anmeldung, kein Wasserzeichen, und fast jedes Bild wird lokal in Ihrem Browser komprimiert. Nur Dateien, die zu groß für einen Browser-Tab sind, gehen an unseren Server, und das Tool sagt Ihnen, wenn das passiert." },
    { q: "Werden meine Bilder hochgeladen? Wie steht es um den Datenschutz?", a: "Fast alle Fotos verlassen Ihr Gerät nie, weil die Komprimierung im Browser stattfindet. Nur sehr große oder extrem hochauflösende Bilder werden zur Verarbeitung an unseren Server geschickt und direkt danach gelöscht. Es wird nichts gespeichert und keine Datei ausgewertet." },
    { q: "Welche Qualitätsstufe sollte ich wählen?", a: "70–80 % ist der richtige Startpunkt für Fotos auf einer Website, hier entsteht der größte Teil der Ersparnis. Für Produktfotos, Titelbilder und alles, was Kunden heranzoomen, nehmen Sie 90 % oder mehr. Unter etwa 60 % werden Blöcke in Himmel und weichen Verläufen sichtbar." },
    { q: "Ändert das Komprimieren die Bildgröße in Pixeln?", a: "Nein. Komprimieren ändert, wie die Pixel gespeichert werden, nicht wie viele es sind — ein Foto mit 4000 × 3000 Pixeln bleibt 4000 × 3000. Wenn Sie auch weniger Pixel möchten, nutzen Sie das Tool „Bildgröße ändern“; für Webbilder ist das oft der größere Gewinn." },
    { q: "Werden beim Komprimieren die EXIF-Daten entfernt?", a: "Beim Neukodieren gehen als Nebeneffekt die meisten Metadaten verloren, darunter Kameraeinstellungen und GPS-Koordinaten. Wenn das Entfernen dieser Daten Ihr eigentliches Ziel ist, nutzen Sie den EXIF-Entferner, der genau dafür gebaut ist und zeigt, was er löscht." },
    { q: "Kann ich ein Bild auf eine bestimmte Größe wie 50 KB verkleinern?", a: "Ja. Stellen Sie die Einstellungen auf „Nach Dateigröße“ um, geben Sie das Limit in KB oder MB ein (oder tippen Sie auf eine der gängigen Größen) und komprimieren Sie. Jedes Bild liegt danach unter diesem Limit, mit der höchsten Qualität, die passt — die Maße werden nur reduziert, wenn die Qualität allein nicht reicht." },
    { q: "Mein Bewerbungsportal oder Behördenformular erlaubt nur 200 KB — was tun?", a: "Wählen Sie „Nach Dateigröße“, geben Sie 200 KB ein und nehmen Sie JPG als Format, denn JPG akzeptiert praktisch jedes Portal. Da das Tool 1 KB als 1.000 Byte rechnet, passt die Datei auch dann, wenn das Formular mit 1.024 Byte pro KB zählt." },
    { q: "Kann ich dasselbe Bild zweimal komprimieren?", a: "Möglich ist es, empfehlenswert nicht. Jeder verlustbehaftete Durchgang verwirft Details endgültig, und die Schäden summieren sich — ein zweimal komprimiertes JPG sieht deutlich schlechter aus als eines, das einmal mit der entsprechenden Einstellung komprimiert wurde. Starten Sie immer vom besten Original, das Sie haben." },
  ],

  security:
    "Ihre Bilder bleiben privat. Fast jedes Foto wird vollständig in Ihrem Browser komprimiert und verlässt Ihr Gerät nie; nur sehr große oder sehr hochauflösende Bilder gehen an unseren Server und werden dort direkt danach gelöscht. Keine Speicherung, keine Auswertung Ihrer Dateien.",

  ui: {
    "By quality": "Nach Qualität",
    "By file size": "Nach Dateigröße",
    "Compression mode": "Komprimierungsmodus",
    "Target size": "Zielgröße",
    "Unit": "Einheit",
    "KB": "KB",
    "MB": "MB",
    "A KB here is 1,000 bytes, so the file passes forms that count a KB as 1,000 or as 1,024 bytes.": "1 KB entspricht hier 1.000 Byte — die Datei passt also auch in Formulare, die 1 KB als 1.000 oder als 1.024 Byte zählen.",
    "JPG (best for forms)": "JPG (am besten für Formulare)",
    "Each image gets the highest quality that fits under the limit. If that is still too big, its dimensions are reduced as well.": "Jedes Bild erhält die höchste Qualität, die unter das Limit passt. Ist es dann noch zu groß, werden auch die Maße verringert.",
    "Enter a target size greater than zero.": "Geben Sie eine Zielgröße größer als null ein.",
    "Every image is now under {size}.": "Alle Bilder sind jetzt kleiner als {size}.",
    "Some images could not get under {size}.": "Einige Bilder ließen sich nicht unter {size} bringen.",
    "Every image will be compressed to under {size}.": "Jedes Bild wird auf unter {size} komprimiert.",
    "Set any target size in KB or MB after adding your images.": "Nach dem Hinzufügen der Bilder können Sie jede Zielgröße in KB oder MB festlegen.",
    "already under {size} — kept original": "bereits unter {size} — Original behalten",
    "could not get under {size}": "nicht unter {size} möglich",
    "resized to {dims}": "verkleinert auf {dims}",
    // CompressTool.tsx
    "Compress": "Komprimieren",
    "Compressing…": "Wird komprimiert…",
    "Compress & download": "Komprimieren und herunterladen",
    "Compress {n} images": "{n} Bilder komprimieren",
    "Compress more images": "Weitere Bilder komprimieren",
    "Compressed": "Komprimiert",
    "Compression complete!": "Komprimierung abgeschlossen!",
    "Compression settings": "Komprimierungseinstellungen",
    "Compression Settings": "Komprimierungseinstellungen",
    "File size reduced by {pct}%": "Dateigröße um {pct} % reduziert",
    "Already optimised — kept your original file.": "Bereits optimiert — Ihre Originaldatei wurde behalten.",
    "Already optimised — kept your original files.": "Bereits optimiert — Ihre Originaldateien wurden behalten.",
    "Already optimised. Try a lower quality, or WEBP, for a smaller file.":
      "Bereits optimiert. Für eine kleinere Datei versuchen Sie eine niedrigere Qualität oder WEBP.",
    "already optimised — kept original": "bereits optimiert — Original behalten",
    "no smaller output": "kein kleineres Ergebnis",
    "{n} colors": "{n} Farben",
    "Processed 1 image.": "1 Bild verarbeitet.",
    "Processed {n} images.": "{n} Bilder verarbeitet.",
    "Compression failed.": "Komprimierung fehlgeschlagen.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "WEBP usually gives the smallest files. Everything runs in your browser.":
      "WEBP ergibt meist die kleinsten Dateien. Alles läuft in Ihrem Browser.",
    "Output format": "Ausgabeformat",
    // FORMATS (module scope, §4.2)
    "Same as original": "Wie Original",
    "WEBP (smallest)": "WEBP (am kleinsten)",
    "PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless.":
      "PNG wird durch Farbreduktion kleiner. Ab 95 % bleibt es vollständig verlustfrei.",
    "Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless.":
      "Niedrigere Qualität = kleinere Datei. PNGs werden durch Farbreduktion kleiner; ab 95 % bleiben sie verlustfrei.",
    "Lower quality = smaller file. 60–80% is a great balance.":
      "Niedrigere Qualität = kleinere Datei. 60–80 % sind ein guter Kompromiss.",
    "Shrink large images": "Große Bilder verkleinern",
    "Also reduce the dimensions, not just the quality. A phone photo is around 4000px wide, while a web page or an email attachment rarely needs more than 2000 — and halving the width quarters the pixel count, which saves far more than quality alone.":
      "Verringern Sie auch die Maße, nicht nur die Qualität. Ein Handyfoto ist rund 4000 px breit, eine Webseite oder ein E-Mail-Anhang braucht selten mehr als 2000 — und halbe Breite heißt ein Viertel der Pixel, was weit mehr spart als die Qualität allein.",
    "Max width/height": "Max. Breite/Höhe",
    "JPG background": "JPG-Hintergrund",
    // CompressTool.tsx — increase mode (increase-image-size-in-kb)
    "Enter a minimum size greater than zero.": "Geben Sie eine Mindestgröße größer als null ein.",
    "Every image is now at least {size}.": "Alle Bilder sind jetzt mindestens {size} groß.",
    "For forms with a range such as 20–50 KB. The result is always a JPG.": "Für Formulare mit einem Bereich wie 20–50 KB. Das Ergebnis ist immer ein JPG.",
    "Increase": "Vergrößern",
    "Increase & download": "Vergrößern und herunterladen",
    "Increase more images": "Weitere Bilder vergrößern",
    "Increase {n} images": "{n} Bilder vergrößern",
    "Increasing…": "Wird vergrößert…",
    "Maximum size (optional)": "Maximalgröße (optional)",
    "Minimum size": "Mindestgröße",
    "New size": "Neue Größe",
    "Quality is raised first, then the dimensions. If an image is still short, the file is padded with empty data — the picture itself does not change.": "Zuerst wird die Qualität erhöht, dann die Maße. Fehlt danach noch etwas, wird die Datei mit leeren Daten aufgefüllt — das Bild selbst ändert sich nicht.",
    "Set the minimum size in KB after adding your images.": "Legen Sie die Mindestgröße in KB fest, nachdem Sie die Bilder hinzugefügt haben.",
    "Size increase complete!": "Vergrößerung abgeschlossen!",
    "Size settings": "Größeneinstellungen",
    "Some images could not reach {size}.": "Einige Bilder haben {size} nicht erreicht.",
    "The maximum must be larger than the minimum.": "Das Maximum muss größer als das Minimum sein.",
    "already at least {size} — kept original": "bereits mindestens {size} — Original behalten",
    "could not reach {size}": "{size} nicht erreicht",
    "enlarged to {dims}": "vergrößert auf {dims}",
    "padded to reach the minimum": "aufgefüllt, um das Minimum zu erreichen",
    // Shared (ToolWorkspace / upload)
    "Clear files": "Dateien entfernen",
    "Download": "Herunterladen",
    "Original": "Original", // i18n-same
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
    "Quality": "Qualität",
    "Remove": "Entfernen",
    "Settings": "Einstellungen",
  },
};

export default content;
