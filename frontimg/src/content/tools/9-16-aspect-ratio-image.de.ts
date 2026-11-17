import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-9-16-1080x1920 (variant of resize-image).
 * Target query: „9:16 Format“ (1.3K/mo, DE); secondary „1080x1920“ (880), „9:16 Bild“.
 */
const content: ToolPageContent = {
  toolId: "9-16-aspect-ratio-image",
  locale: "de",
  name: "Bild im 9:16 Format (1080x1920)",
  tagline:
    "Machen Sie aus jedem Foto, Screenshot oder KI-Bild ein Bild im 9:16 Format mit genau 1080 × 1920 Pixeln – zugeschnitten, mit Rand oder mit unscharfem Hintergrund, aber nie verzerrt. Kostenlos, direkt im Browser.",
  category: { id: "optimize", label: "Optimieren" },
  crossLink: { lead: "Ist Ihr Bild schmaler als 1080 Pixel?", label: "Zuerst hochskalieren", toolId: "upscale-image" },

  metaTitle: "9:16 Format: Bild in 1080x1920 umwandeln | oMyImage",
  metaDescription:
    "Bringen Sie jedes Bild ins 9:16 Format mit 1080x1920 Pixeln – für Stories, Reels, TikTok, Shorts und Web Stories. Zuschneiden, Rand oder Unschärfe, kostenlos.",

  intro:
    "Stories, Reels, Shorts, TikToks und Google Web Stories füllen ein hochkant gehaltenes Smartphone aus, und alle verlangen dieselbe Form: das 9:16 Format, am besten mit 1080 × 1920 Pixeln. Die meisten Bilder haben diese Form nicht. Ein Querformat-Foto, ein quadratisches KI-Bild oder eine 4:3-Aufnahme vom Handy wird von der App irgendwo beschnitten oder zwischen schwarze Balken gequetscht. Dieser Konverter startet bereits mit 1080 × 1920. Fügen Sie Ihre Bilder hinzu, legen Sie fest, wie jedes davon zum 9:16 Bild wird – zugeschnitten, mit einem farbigen Rand aufgefüllt oder mit einer unscharfen Kopie seiner selbst hinterlegt – und laden Sie Dateien herunter, die den Bildschirm von Kante zu Kante füllen.",

  sections: [
    {
      heading: "Was das 9:16 Format bedeutet",
      id: "ratio",
      body: [
        "Das Seitenverhältnis beschreibt die Form eines Bildes, geschrieben als Breite : Höhe. 9:16 heißt: neun Einheiten Breite auf sechzehn Einheiten Höhe – ein hohes Rechteck, genau die Form eines Smartphone-Displays im Hochformat. Es ist das 16:9 von Fernseher und YouTube, nur um 90 Grad gedreht. Teilen Sie 9 durch 16, erhalten Sie 0,5625. Jedes Bild, dessen Breite geteilt durch die Höhe 0,5625 ergibt, ist 9:16 – egal, wie groß es ist.",
        "Über die Schärfe sagt das Seitenverhältnis allein nichts aus. 720 × 1280, 1080 × 1920 und 2160 × 3840 sind alle 9:16; sie unterscheiden sich nur darin, wie viele Pixel das Motiv tragen. Deshalb kann ein 9:16 Bild trotzdem weich wirken: Die Form stimmt, aber für ein großes Handydisplay sind es zu wenige Pixel.",
      ],
    },
    {
      heading: "Warum 1080x1920 Pixel der Standard ist",
      id: "pixels",
      body: [
        "1080 × 1920 (meist 1080x1920 geschrieben) ist Full HD im Hochformat: 1080 Pixel breit, 1920 Pixel hoch, rund 2,1 Megapixel. Diese Größe empfehlen die großen Apps für vertikale Inhalte im Vollbild, und in dieser Größe nimmt ein Smartphone hochkant Full-HD-Video auf. Laden Sie etwas Größeres hoch, verkleinert die App es; laden Sie weniger hoch, vergrößert sie es – und genau dabei schleicht sich Unschärfe ein.",
        "Als JPG mit der Standardqualität von 92 % wiegt ein Foto in 1080 × 1920 meist nur einige Hundert Kilobyte – klein genug für jedes Upload-Formular und mit reichlich Details für den Bildschirm.",
      ],
    },
    {
      heading: "Wo 9:16 Bilder verwendet werden",
      id: "uses",
      body: [
        "Instagram Stories und Reels: Stories füllen den Bildschirm mit 1080 × 1920. Reels laufen in derselben Größe, aber Ihr Profilraster zeigt eine beschnittene Vorschau – halten Sie das Motiv also nahe der Mitte. Meta empfiehlt, oben und unten etwa 14 % – rund 250 Pixel – frei von Text zu lassen, weil dort der Profilname und die Antwortleiste liegen.",
        "TikTok und YouTube Shorts: Beide sind auf Hochformat ausgelegt, und beide legen Schaltflächen an den rechten Rand und die Beschreibung an den unteren Rand. Platzieren Sie alles Wichtige im oberen mittleren Bereich einer Folie oder eines Titelbilds in 1080 × 1920. WhatsApp Status, Snapchat und Facebook Stories füllen den Bildschirm auf die gleiche Weise.",
        "Google Web Stories: Jede Seite einer Web Story ist ein randloser Hochformat-Bildschirm, und 9:16 in 1080 × 1920 ist die Form, die ihn ohne Balken füllt. Wenn alle Seiten gleich groß sind, springt die Story beim Weitertippen außerdem nicht. Das Posterbild der Story hat eine andere Form – 3:4, mindestens 640 × 853 Pixel –, erstellen Sie es daher separat.",
      ],
      link: {
        label: "Zum Leitfaden (auf Englisch): Google Web Stories mit KI-Bildern – Größen, Ladezeit und Googles Regeln",
        href: "/blog/google-web-stories-ai-images",
      },
    },
    {
      heading: "In 9:16 umwandeln, ohne zu verzerren",
      id: "convert",
      body: [
        "Wer ein Bild auf 1080 × 1920 zieht, bekommt lange Gesichter und ovale Kreise – deshalb macht dieses Tool das nie. Ein Bild in einer anderen Form wird auf einem von drei ehrlichen Wegen zu 9:16, und Sie wählen den, der zum Motiv passt.",
        "Zuschneiden und füllen (die Voreinstellung) vergrößert das Bild, bis es den ganzen 9:16-Rahmen bedeckt, und schneidet den Überstand ab. Das passt zu Hochformat-Fotos: Eine 3:4-Aufnahme vom Handy verliert nur ein Viertel ihrer Breite. Bei Querformat ist es hart – von einem 4:3-Foto bleiben nur 42 % der Breite –, nutzen Sie deshalb vorher die Zuschneiden-Schaltfläche auf der Bildkarte. Das Zuschneidefenster öffnet sich fest auf 9:16, und Sie ziehen den Rahmen über den Bildteil, auf den es ankommt, statt einfach die Mitte zu bekommen.",
        "Mit Rand auffüllen behält das ganze Bild und füllt die Streifen oben und unten mit einer Farbe Ihrer Wahl – Schwarz, Weiß oder Ihre Markenfarbe. Unscharfer Hintergrund behält ebenfalls das ganze Bild, füllt die Streifen aber mit einer weichgezeichneten, vergrößerten Kopie desselben Bildes – der Look, den Reels und TikTok für Querformat-Clips verwenden. Für breite Fotos, Screenshots und Folien ist das meist die beste Wahl: Nichts geht verloren, und der Bildschirm wirkt trotzdem voll.",
      ],
    },
    {
      heading: "So bleibt das Bild scharf",
      id: "sharp",
      body: [
        "Schneiden Sie ein Querformat-Bild auf 9:16 zu, bleibt ein schmaler Streifen übrig, der oft weniger als 1080 Pixel breit ist. Ein Screenshot mit 1920 × 1080, auf 9:16 zugeschnitten, misst nur 608 × 1080 und muss fast auf das Doppelte vergrößert werden, um 1080 × 1920 zu erreichen. Der unscharfe Hintergrund vermeidet das: Das Bild wird über die volle Breite von 1080 Pixeln gezeigt, und die deckt der 1920 Pixel breite Screenshot ganz ohne Vergrößern ab. Bilder, die von Anfang an klein sind, sollten Sie vor dem Umwandeln mit einem KI-Upscaler vergrößern.",
        "KI-Bildgeneratoren liefern selten 9:16 in voller Größe. Viele erzeugen standardmäßig ein Quadrat, das Hochformat von ChatGPT hat 1024 × 1536 Pixel (also 2:3), und das 9:16 von Midjourney kommt mit etwa 816 × 1456 Pixeln. Schneiden Sie diese Bilder hier zu oder hinterlegen Sie sie unscharf; für ein schärferes Ergebnis skalieren Sie Bilder mit 816 × 1456 vorher hoch.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild ins 9:16 Format (1080 × 1920) um",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie eine oder mehrere JPG-, PNG-, WEBP-, GIF- oder BMP-Dateien – Fotos, Screenshots oder KI-Bilder." },
    { title: "Einpassung wählen", description: "1080 × 1920 ist bereits eingestellt. Wählen Sie Zuschneiden und füllen, Mit Rand auffüllen oder Unscharfer Hintergrund; für einen eigenen Ausschnitt nutzen Sie die Zuschneiden-Schaltfläche auf der Karte." },
    { title: "Herunterladen", description: "Klicken Sie auf Größe ändern & herunterladen und erhalten Sie ein 9:16 Bild – oder eine ZIP-Datei, wenn Sie mehrere hinzugefügt haben." },
  ],

  features: [
    { icon: "crop_portrait", title: "Genau 1080 × 1920", description: "Jedes Bild kommt im 9:16-Full-HD-Format heraus, das Stories, Reels, Shorts und Web Stories erwarten." },
    { icon: "blur_on", title: "Zuschneiden, Rand oder Unschärfe", description: "Drei Wege, die Form zu ändern, ohne zu verzerren – einschließlich eines unscharfen Hintergrunds aus Ihrem eigenen Foto." },
    { icon: "lock", title: "Läuft im Browser", description: "Ihre Bilder werden auf Ihrem Gerät umgewandelt und nicht hochgeladen." },
  ],

  faqs: [
    { q: "Was ist das 9:16 Format?", a: "Ein hohes Rechteck mit neun Einheiten Breite auf sechzehn Einheiten Höhe – die Form eines Smartphone-Displays im Hochformat. Es ist das Breitbildformat 16:9, um 90 Grad gedreht." },
    { q: "Wie groß ist ein 9:16 Bild in Pixeln?", a: "1080 × 1920 ist der Standard. 720 × 1280 und 2160 × 3840 sind ebenfalls 9:16, nur mit weniger oder mehr Pixeln; 1080 × 1920 empfehlen die meisten Apps." },
    { q: "Ist 1080x1920 dasselbe wie 9:16?", a: "Ja. 1080 geteilt durch 1920 ergibt 0,5625 – genau 9 geteilt durch 16. Jedes Bild mit 1080 × 1920 Pixeln ist 9:16." },
    { q: "Wie wandle ich ein Bild in 9:16 um, ohne es zu verzerren?", a: "Fügen Sie es hier hinzu und wählen Sie Zuschneiden und füllen, Mit Rand auffüllen oder Unscharfer Hintergrund. Alle drei liefern genau 1080 × 1920 und behalten die Proportionen des Bildes; keine Option zieht es in die Länge." },
    { q: "Kann ich bestimmen, welcher Teil des Fotos erhalten bleibt?", a: "Ja. Ist Zuschneiden und füllen gewählt, klicken Sie auf die Zuschneiden-Schaltfläche der Bildkarte. Das Fenster ist fest auf 9:16 eingestellt; ziehen Sie den Rahmen über Ihr Motiv und übernehmen Sie den Ausschnitt." },
    { q: "Was ist der Unterschied zwischen 9:16 und 16:9?", a: "Die Ausrichtung. 16:9 ist quer (Fernseher, YouTube-Videos, Laptop-Bildschirme); 9:16 ist dieselbe Form hochkant (Stories, Reels, Shorts, Handydisplays)." },
    { q: "Warum sieht mein 9:16 Bild unscharf aus?", a: "Meist hatte das Original zu wenige Pixel: Ein schmaler Ausschnitt aus einem Querformat-Bild wird vergrößert, um 1080 × 1920 zu erreichen. Nutzen Sie den unscharfen Hintergrund oder skalieren Sie das Bild vorher hoch." },
    { q: "Eignet sich ein 1080x1920-Bild als Handy-Hintergrundbild?", a: "Ja. Viele neuere Smartphones sind allerdings etwas höher als 9:16; dort vergrößert das System das Bild leicht und schneidet an den Seiten etwas ab. Halten Sie das Hauptmotiv in der Mitte." },
    { q: "Schneidet Instagram mein 9:16 Bild zu?", a: "In Stories nicht – dort wird 9:16 vollständig gezeigt. Ein Reel läuft ebenfalls im Vollbild, aber die Vorschau im Profilraster ist beschnitten; halten Sie das Motiv deshalb in der Mitte." },
    { q: "Kann ich mehrere Bilder auf einmal in 9:16 umwandeln?", a: "Ja. Fügen Sie alle zusammen hinzu; jedes wird mit der gewählten Einpassung zu 1080 × 1920 und alle werden als eine ZIP-Datei heruntergeladen." },
    { q: "Werden meine Fotos für die Umwandlung hochgeladen?", a: "Nein. Die Umwandlung läuft in Ihrem Browser. Nur ein Bild, das zu groß ist, um im Browser geöffnet zu werden, wird vorher auf unserem Server verkleinert und dort sofort gelöscht." },
  ],

  security:
    "Ihre Bilder werden in Ihrem Browser umgewandelt und nicht hochgeladen. Nur ein Bild, das für Ihren Browser zu groß ist – etwa ein Foto mit sehr vielen Megapixeln –, wird zum Verkleinern an unseren Server geschickt und gelöscht, sobald es zurückgegeben ist; nichts wird gespeichert.",
};

export default content;
