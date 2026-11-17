import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-rund-zuschneiden.
 *
 * Primary query "Bild rund zuschneiden" (DE); secondary "Foto rund
 * ausschneiden", "Bild Kreis" / "Bild kreisförmig". Profile pictures are
 * "Profilbild" in German, which the copy uses where the English says avatar.
 */
const content: ToolPageContent = {
  toolId: "circle-crop",
  locale: "de",
  name: "Bild rund zuschneiden",
  tagline:
    "Schneiden Sie Bilder online zu einem perfekten Kreis zu — ideal für Avatare und Profilbilder, mit transparentem Hintergrund, optionalem Ring und Stapelverarbeitung. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild rund zuschneiden – Profilbild als Kreis | oMyImage",
  metaDescription:
    "Bild rund zuschneiden: Foto rund ausschneiden mit transparentem Hintergrund, Kreis frei verschieben, Ring hinzufügen, als PNG speichern. Kostenlos, ohne Upload.",

  intro:
    "Erstellen Sie in Sekunden saubere runde Avatare und Profilbilder. Mit diesem Tool von oMyImage schneiden Sie ein Bild rund zu, direkt in Ihrem Browser — ziehen Sie den Kreis genau auf den Ausschnitt, den Sie möchten, ändern Sie seine Größe, zoomen Sie für präzises Platzieren hinein und wählen Sie die Exportgröße. Standardmäßig transparent, wahlweise mit Farbfüllung und Ring. Schneiden Sie ein einzelnes Foto rund aus oder einen ganzen Stapel — nichts wird hochgeladen, Ihre Bilder bleiben privat.",

  sections: [
    {
      heading: "Transparenz ist der eigentliche Sinn",
      id: "transparency",
      body: [
        "Ein runder Zuschnitt ist nur dann wirklich rund, wenn die Ecken transparent sind. Sonst haben Sie ein quadratisches Bild mit einem gemalten Kreis darauf, und sobald es auf einem andersfarbigen Hintergrund liegt, wird das Quadrat sichtbar.",
        "Damit ist das Exportformat die wichtigste Entscheidung — und die, bei der am häufigsten danebengegriffen wird. PNG und WEBP haben beide einen Alphakanal und lassen die Ecken leer. JPG hat überhaupt keinen Alphakanal, der Bereich außerhalb des Kreises muss also mit etwas gefüllt werden. Deshalb kommt ein runder Zuschnitt als JPG mit einem weißen Kasten drumherum an.",
        "Wenn Sie wissen, dass das Bild immer auf einer bestimmten Vollfarbe liegt, funktioniert eine Füllung in genau dieser Farbe. Kann es überall landen, nehmen Sie PNG.",
      ],
    },
    {
      heading: "Wo runde Bilder wirklich gebraucht werden",
      id: "uses",
      body: [
        "Die meisten sozialen Netzwerke maskieren Profilbilder selbst als Kreis, ein quadratischer Upload reicht dort also aus. Einen echten runden Zuschnitt brauchen Sie dort, wo niemand das Maskieren für Sie übernimmt.",
        "Das betrifft Team-Seiten und Autorenzeilen auf Websites, Porträts auf Präsentationsfolien, Fotos von Mitwirkenden in einer PDF oder einem Bericht, Logos und Abzeichen, E-Mail-Signaturen und Drucksachen. In all diesen Fällen setzen Sie eine Bilddatei direkt ein, und wenn ihre Ecken nicht transparent sind, sieht man sie.",
        "Praktisch ist es auch für Produktfotos und Icons, bei denen ein Kreis schlicht fertiger wirkt als ein Rechteck, das in einem Layout schwebt.",
      ],
    },
    {
      heading: "Den Bildausschnitt im Kreis gestalten",
      id: "composition",
      body: [
        "Ein Kreis schneidet stärker zu, als es aussieht — die Ecken des Originals fallen komplett weg, alles nahe am Rand verschwindet also. Lassen Sie mehr Raum um das Motiv als bei einem rechteckigen Zuschnitt.",
        "Bei Porträts ist die verlässliche Position: Augen leicht über der Mitte, mit etwas Platz über dem Kopf. Den ganzen Kopf mathematisch zu zentrieren lässt oben oft eine unschöne Lücke und schneidet das Kinn ab. Füllt das Gesicht den Kreis komplett aus, wirkt es beengt; mit einem kleinen Rand wirkt es wie ein durchdachtes Porträt.",
        "Starten Sie nach Möglichkeit mit einem eher quadratischen Original. Wer ein breites Querformat-Foto rund zuschneidet, verwirft den Großteil des Bildes; ein engerer Ausschnitt liefert im Ergebnis deutlich mehr nutzbare Auflösung.",
      ],
    },
    {
      heading: "Größe und Ringe",
      id: "sizing",
      body: [
        "400 bis 800 Pixel im Quadrat decken jeden realistischen Einsatz ab. Plattformen verkleinern ohnehin auf ihre eigenen Maße, mehr Auflösung ist also verschwendeter Speicher; deutlich weniger wirkt auf hochauflösenden Displays unscharf.",
        "Ein dünner Ring am Rand löst ein bestimmtes Problem: Ein helles Porträt auf einer hellen Seite hat keine sichtbare Grenze, und der Kopf scheint zu schweben. Ein Ring von ein oder zwei Pixeln in einem mittleren Ton definiert die Form, ohne aufzufallen. Dickere Ringe wirken wie ein Rahmen — das ist eine Gestaltungsentscheidung, keine Korrektur.",
      ],
    },
  ],

  howToTitle: "So schneiden Sie ein Bild rund zu",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus, oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Kreis platzieren", description: "Ziehen Sie den Kreis an die gewünschte Stelle, ändern Sie die Größe am Griff, zoomen Sie für Details hinein und legen Sie dann Ausgabegröße, Hintergrund und optionalen Ring fest." },
    { title: "Zuschneiden & herunterladen", description: "Klicken Sie auf „Zuschneiden“ — ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
  ],

  features: [
    { icon: "panorama_fish_eye", title: "Genau dort zuschneiden, wo Sie wollen", description: "Ziehen Sie den Kreis über den Teil des Fotos, den Sie wirklich möchten, ändern Sie seine Größe am Griff und zoomen Sie für präzises Platzieren hinein." },
    { icon: "blur_circular", title: "Transparent oder gerahmt", description: "Exportieren Sie ein transparentes PNG/WEBP oder fügen Sie einen farbigen Hintergrund und einen Ring um den Kreis hinzu." },
    { icon: "lock", title: "Stapel & privat", description: "Schneiden Sie einen ganzen Stapel auf einmal rund zu, komplett in Ihrem Browser — Bilder werden nie hochgeladen." },
  ],

  faqs: [
    { q: "Ist der Hintergrund transparent?", a: "Ja, standardmäßig — exportieren Sie als PNG oder WEBP, damit die Ecken außerhalb des Kreises transparent bleiben. Wählen Sie JPG, um auf eine Farbe zu reduzieren." },
    { q: "Was, wenn mein Bild nicht quadratisch ist?", a: "Das muss es nicht sein. Der Kreis startet zentriert und fast so breit wie die kürzere Seite, und Sie können ihn überallhin ziehen und in der Größe ändern — ein Gesicht in der Ecke eines breiten Fotos ist also genauso leicht zuzuschneiden wie ein zentriertes. „Zentrieren & Zoom zurücksetzen“ bringt ihn zurück." },
    { q: "Kann ich bestimmen, wo der Kreis sitzt?", a: "Ja. Ziehen Sie den Kreis, um ihn zu verschieben, ziehen Sie den Griff am Rand, um die Größe zu ändern, und scrollen Sie zum Hineinzoomen, wenn es genau sein muss. Die Pfeiltasten verschieben ihn pixelweise (mit gedrückter Umschalttaste um zehn), und + und − ändern die Größe." },
    { q: "Wie groß wird das exportierte Bild?", a: "Standardmäßig exportiert „Original“ den Kreis in seiner eigenen Auflösung im Ausgangsbild, es wird also nie hochskaliert. Sie können auch feste 256, 512 oder 1024 Pixel im Quadrat erzwingen — praktisch für Avatare mit festem Platz." },
    { q: "Kann ich einen Ring um den Kreis hinzufügen?", a: "Ja. Legen Sie Stärke und Farbe des Rings fest, um dem runden Zuschnitt einen sauberen Rand zu geben." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Warum hat mein rundes Bild ein weißes Quadrat dahinter?", a: "Weil Sie als JPG exportiert haben. JPG kennt keine Transparenz, also muss alles außerhalb des Kreises mit einer Vollfarbe gefüllt werden. Exportieren Sie stattdessen als PNG oder WEBP, dann bleiben die Ecken wirklich transparent." },
    { q: "Wie groß sollte ein Profilbild sein?", a: "Etwa 400 × 400 bis 800 × 800 Pixel decken praktisch jede Plattform ab. Alle verkleinern auf ihre eigene Anzeigegröße, mehr als rund 800 Pixel bringen also nichts, während weniger als etwa 200 auf hochauflösenden Bildschirmen unscharf aussieht." },
    { q: "Muss ich ein Profilbild überhaupt rund zuschneiden?", a: "Meist nicht — die meisten Plattformen legen selbst eine runde Maske über das hochgeladene Quadrat. Selbst zuschneiden lohnt sich, wenn Sie das runde Bild an einer Stelle brauchen, die es nicht für Sie maskiert: auf einer Website, einer Folie, in einer PDF, einer E-Mail-Signatur oder einem gedruckten Dokument." },
    { q: "Wie zentriere ich den Kreis auf ein Gesicht?", a: "Platzieren Sie den Kreis so, dass die Augen leicht über der Mitte liegen statt genau in der Mitte. Wer den ganzen Kopf zentriert, lässt oben meist zu viel Platz und schneidet das Kinn ab. Lassen Sie etwas Raum um den Kopf, statt den Kreis randvoll zu füllen." },
    { q: "Wann lohnt sich ein Ring?", a: "Wenn das Bild auf einem Hintergrund mit ähnlichem Ton liegt — ohne Ring kann der Rand eines hellen Porträts auf einer hellen Seite verschwinden, und der Kopf scheint zu schweben. Halten Sie ihn dünn; ein kräftiger Ring konkurriert mit dem Motiv." },
    { q: "Verliert das Bild an Qualität?", a: "Nein. Beim Zuschneiden bleiben die übrigen Pixel genau so, wie sie waren. Qualität kostet nur der Export, und mit PNG vermeiden Sie selbst das." },
  ],

  security:
    "Ihre Bilder bleiben privat. Der runde Zuschnitt geschieht vollständig in Ihrem Browser mit HTML-Canvas — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // CircleCropTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Couldn't read {name}.": "{name} konnte nicht gelesen werden.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "Files": "Dateien",
    "1 image": "1 Bild",
    "{n} images": "{n} Bilder",
    "Clear images": "Bilder leeren",
    "Remove": "Entfernen",
    "Preview {name}": "Vorschau von {name}",
    "Drag the circle to move it, or a corner handle to resize":
      "Ziehen Sie den Kreis, um ihn zu verschieben, oder einen Eckgriff, um die Größe zu ändern",
    "Zoom": "Zoom", // i18n-same
    "Recentre & reset zoom": "Zentrieren & Zoom zurücksetzen",
    "exports at": "Export mit",
    "Circle Crop Settings": "Einstellungen für runden Zuschnitt",
    "Circle crop settings": "Einstellungen für runden Zuschnitt",
    "Output size": "Ausgabegröße",
    "Original exports the circle at its own resolution in the source image — it never upscales. The fixed sizes suit avatars with a set slot to fill.":
      "„Original“ exportiert den Kreis in seiner eigenen Auflösung im Ausgangsbild — es wird nie hochskaliert. Die festen Größen passen für Avatare mit festem Platz.",
    "Output format": "Ausgabeformat",
    "Quality": "Qualität",
    "Background": "Hintergrund",
    "Ring thickness": "Ringstärke",
    "Ring color": "Ringfarbe",
    "— applied to all {n} images": "— wird auf alle {n} Bilder angewendet",
    "Crop": "Zuschneiden",
    "Cropping…": "Wird zugeschnitten…",
    "Circle crop {n}": "{n} rund zuschneiden",
    "Circle crop & download": "Rund zuschneiden & herunterladen",
    "Circle-cropped 1 image.": "1 Bild rund zugeschnitten.",
    "Circle-cropped {n} images.": "{n} Bilder rund zugeschnitten.",
    "Circle crop failed.": "Runder Zuschnitt fehlgeschlagen.",
    "done": "fertig",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
  },
};

export default content;
