import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-zuschneiden. Structure lives in ToolPageShell.
 *
 * Head term "Bild zuschneiden" (3.6K/mo); "Foto zuschneiden" and "Bild
 * ausschneiden" are the secondaries and live in the intro, a section heading
 * and the FAQs. "Sie" form, German-German spelling.
 *
 * SHAPES, ASPECTS ("Free"), OUTPUT_TARGETS ("Original") and FORMATS are module
 * scope in CropTool.tsx; their keys are maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "crop-image",
  locale: "de",
  name: "Bild zuschneiden",
  tagline:
    "Schneiden Sie JPG-, PNG-, WEBP- und GIF-Bilder online zu — Auswahl aufziehen, Seitenverhältnis fixieren oder exakte Pixel eingeben. Kostenlos, schnell und 100 % privat im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild zuschneiden – Foto online zuschneiden, kostenlos",
  metaDescription:
    "Bild zuschneiden in 1:1, 4:5, 16:9 oder als Kreis: Foto online zuschneiden, drehen und gerade ausrichten. JPG, PNG, WEBP, im Browser, ohne Anmeldung.",

  intro:
    "Sie möchten ein Bild auf den perfekten Ausschnitt oder eine exakte Größe bringen? Mit dem Tool „Bild zuschneiden“ von oMyImage ziehen Sie eine Auswahl über Ihr Foto, fixieren sie auf ein Seitenverhältnis wie 1:1 für Profilbilder oder 16:9 für Vorschaubilder oder tippen die Pixelmaße exakt ein. Sie können ein Foto auch rund, als Ellipse oder mit abgerundeten Ecken zuschneiden, drehen und gerade ausrichten. Das Zuschneiden passiert vollständig in Ihrem Browser — Ihre Bilder bleiben privat, und das Ergebnis ist sofort da.",

  sections: [
    {
      heading: "Zuschneiden ist Bildgestaltung, nicht nur Beschneiden",
      id: "composition",
      body: [
        "Die meisten Fotos werden besser, wenn etwas wegfällt. Ein Zuschnitt rückt den Rahmen enger ans Motiv, entfernt störende Ränder, korrigiert einen schiefen Horizont und lenkt den Blick dorthin, wo er hinsoll. Es ist die wirksamste Bearbeitung überhaupt und die einzige, die keinerlei Qualität kostet.",
        "Die klassische Faustregel ist die Drittel-Regel: Teilen Sie das Bild in ein Raster aus drei mal drei Feldern und setzen Sie das Motiv auf eine der Linien oder Schnittpunkte statt genau in die Mitte. Das ist ein Ausgangspunkt, kein Gesetz — mittige Kompositionen funktionieren gut bei Symmetrie und Porträts —, aber eine verlässliche Rettung für ein Foto, das flach wirkt.",
        "Die zweite nützliche Gewohnheit: Prüfen Sie die Ränder, bevor Sie zuschneiden. Ein halber Passant, eine Mülltonne, ein heller Fleck Himmel in der Ecke — all das zieht Aufmerksamkeit vom Motiv ab und verschwindet fast immer mit einem etwas engeren Ausschnitt.",
      ],
    },
    {
      heading: "Feste Seitenverhältnisse und wo sie verlangt werden",
      id: "ratios",
      body: [
        "Ein freier Zuschnitt ist richtig, wenn das Bild für Sie selbst ist. Feste Verhältnisse zählen, wenn etwas anderes die Form vorgibt — jede Social-Media-Plattform, jeder Marktplatz und jedes Druckformat erwartet bestimmte Proportionen, und wer sie verfehlt, wird vom System zugeschnitten, meist schlecht.",
        "Quadratisch (1:1) gilt für Profilbilder und Beiträge im Instagram-Feed. 4:5 ist das höchste Hochformat, das Instagram erlaubt, und füllt mehr Bildschirm als ein Quadrat. 9:16 ist das vertikale Vollbild für Storys, Reels und TikTok. 16:9 ist das übliche Breitbildformat für YouTube-Thumbnails und Linkvorschauen. Druckformate folgen eigenen Regeln — 10 × 15 cm entspricht 3:2, 13 × 18 cm und 20 × 25 cm dagegen nicht, weshalb Abzüge in verschiedenen Größen unterschiedlich viel vom Rand verlieren.",
        "Wer das Verhältnis vor dem Aufziehen festlegt, erspart sich den Ärger, ein Bild sorgfältig zu gestalten und es dann doch passend gestutzt zu bekommen.",
      ],
    },
    {
      heading: "Foto zuschneiden kostet keine Qualität",
      id: "quality",
      body: [
        "Die Pixel, die Sie behalten, bleiben unangetastet. Zuschneiden ist kein Neuberechnen, ein zugeschnittenes Foto ist also genauso scharf wie das Original — es zeigt nur weniger von der Szene. Das ist etwas anderes als Zoomen oder Vergrößern, wobei Pixel erfunden werden und das Ergebnis weicher wird.",
        "Was sich ändert, ist die Gesamtzahl der Pixel, und das hat praktische Grenzen. Schneiden Sie ein 12-Megapixel-Foto auf eine kleine Ecke zu, bleiben vielleicht 600 Pixel Breite — genug für ein Handydisplay, zu wenig für einen Abzug oder ein Banner über die volle Breite. Wenn ein enger Ausschnitt geplant ist, starten Sie mit dem Original in höchster Auflösung.",
      ],
    },
    {
      heading: "Die sinnvolle Reihenfolge",
      id: "workflow",
      body: [
        "Erst zuschneiden, dann skalieren, dann komprimieren. Der Zuschnitt bestimmt den Inhalt, die Größenänderung die Pixelmaße und die Komprimierung die Dateigröße. In dieser Reihenfolge arbeitet jeder Schritt mit der kleinsten sinnvollen Eingabe, und Sie komprimieren nie Pixel, die Sie gleich wegwerfen.",
        "Hier läuft alles in Ihrem Browser, der Wechsel zwischen diesen Tools kostet also nur einen Klick, und Ihre Bilder werden zu keinem Zeitpunkt hochgeladen.",
      ],
    },
  ],

  howToTitle: "So schneiden Sie ein Bild zu",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus oder ziehen Sie sie per Drag-and-drop in den Arbeitsbereich." },
    { title: "Form und Ausschnitt wählen", description: "Wählen Sie Rechteck, Quadrat, Kreis, Ellipse oder abgerundete Form, verschieben Sie den Rahmen und ziehen Sie an den Griffen, und fixieren Sie ein Verhältnis wie 1:1, 4:5 oder 16:9. Drehen, spiegeln oder begradigen Sie das Bild bei Bedarf." },
    { title: "Zuschneiden und herunterladen", description: "Wählen Sie Ausgabegröße und Format und klicken Sie auf „Zuschneiden und herunterladen“ — sofort im Browser, als ZIP, wenn Sie mehrere Bilder zugeschnitten haben." },
  ],

  features: [
    {
      icon: "crop_free",
      title: "Freier Zuschnitt oder feste Verhältnisse",
      description: "Schneiden Sie frei zu, geben Sie exakte Pixelmaße ein oder fixieren Sie 1:1, 4:3, 3:2, 16:9, 4:5 und mehr für perfekte Social-Media- und Druckformate.",
    },
    {
      icon: "circle",
      title: "Formen statt nur Rechtecke",
      description: "Schneiden Sie quadratisch, rund, als Ellipse oder mit abgerundeten Ecken zu. PNG und WEBP lassen den Bereich außerhalb der Form transparent — ideal für runde Avatare.",
    },
    {
      icon: "rotate_90_degrees_cw",
      title: "Drehen, spiegeln und begradigen",
      description: "Drehen Sie in 90°-Schritten, spiegeln Sie horizontal oder vertikal und richten Sie einen schiefen Horizont vor dem Zuschneiden mit dem Begradigen-Regler aus.",
    },
    {
      icon: "bolt",
      title: "Stapelweise und im Browser",
      description: "Schneiden Sie einen ganzen Stapel mit demselben Ausschnitt zu und laden Sie ein ZIP herunter — alles auf Ihrem Gerät mit HTML-Canvas, ohne Upload und ohne Wartezeit.",
    },
    {
      icon: "image",
      title: "Alle gängigen Formate",
      description: "Funktioniert mit JPG, PNG, WEBP, GIF und BMP und exportiert als JPG, PNG oder WEBP mit einstellbarer Qualität.",
    },
  ],

  faqs: [
    { q: "Ist das Zuschneide-Tool von oMyImage kostenlos?", a: "Ja. Bilder zuschneiden ist zu 100 % kostenlos, ohne Wasserzeichen auf dem Ergebnis und ohne Anmeldung." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Das Zuschneiden läuft vollständig in Ihrem Browser mit HTML-Canvas — Ihr Bild verlässt Ihr Gerät nie." },
    { q: "Kann ich auf eine bestimmte Größe zuschneiden?", a: "Ja. Geben Sie Breite, Höhe sowie X- und Y-Wert exakt in Pixeln ein, oder fixieren Sie ein Seitenverhältnis und ziehen Sie die Griffe, um die Größe visuell festzulegen." },
    { q: "In welche Formate kann ich exportieren?", a: "JPG, PNG oder WEBP. Mit „Wie Original“ behalten Sie das Eingabeformat (GIF und BMP werden als PNG exportiert, da die Canvas-Ausgabe ein Standbild ist)." },
    { q: "Verliert das Bild beim Zuschneiden an Qualität?", a: "Nein. Beim Zuschneiden werden nur Pixel außerhalb Ihrer Auswahl entfernt. Für JPG und WEBP können Sie zusätzlich die Exportqualität wählen." },
    { q: "Welches Seitenverhältnis brauche ich für Social Media?", a: "1:1 für einen Beitrag im Instagram-Feed und die meisten Profilbilder, 4:5 für das höhere Instagram-Hochformat, 9:16 für Storys, Reels und TikTok und 16:9 für YouTube-Thumbnails und Linkvorschauen auf Twitter/X. LinkedIn-Banner sind mit etwa 4:1 ungewöhnlich breit." },
    { q: "Was ist der Unterschied zwischen Zuschneiden und Größe ändern?", a: "Beim Zuschneiden werden Teile des Bildes entfernt, die übrigen Pixel bleiben in Originalgröße. Beim Ändern der Größe bleibt das ganze Bild erhalten, aber die Zahl der Pixel ändert sich. Zuschneiden ändert, was im Bild ist; Skalieren ändert, wie groß die Datei ist." },
    { q: "Kann ich ein Foto auf eine exakte Pixelgröße zuschneiden?", a: "Ja. Legen Sie mit einem festen Verhältnis die Form fest und bringen Sie das Bild danach mit dem Tool „Bildgröße ändern“ auf die exakten Pixelmaße. In dieser Reihenfolge vermeiden Sie die Verzerrung, die entsteht, wenn man Maße direkt erzwingt." },
    { q: "Werden beim Zuschneiden EXIF-Daten entfernt?", a: "Ja, als Nebeneffekt — das Bild wird aus dem Canvas neu kodiert, und Metadaten werden dabei nicht übernommen. Dazu gehören auch GPS-Koordinaten, was beim öffentlichen Teilen oft ein willkommener Bonus ist. Wenn das Entfernen von Metadaten Ihr eigentliches Ziel ist, nutzen Sie den EXIF-Entferner, der genau zeigt, was er löscht." },
    { q: "Kann ich mehrere Bilder auf einmal zuschneiden?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten, und derselbe Zuschnitt wird auf alle angewendet — genau richtig für Produktfotos oder alles, was im gleichen Aufbau fotografiert wurde. Der Ausschnitt wird proportional gespeichert, Bilder unterschiedlicher Größe erhalten also jeweils den entsprechenden Ausschnitt, und alles wird zusammen als ZIP heruntergeladen." },
    { q: "Kann ich ein Bild rund oder in anderen Formen ausschneiden?", a: "Ja — Rechteck, Quadrat, Kreis, Ellipse und abgerundete Ecken stehen zur Verfügung. Exportieren Sie als PNG oder WEBP, bleibt der Bereich außerhalb der Form wirklich transparent, genau richtig für einen runden Avatar. JPG kann keine Transparenz speichern, dort wählen Sie stattdessen eine Farbe für die Ecken." },
    { q: "Kann ich beim Zuschneiden drehen oder begradigen?", a: "Ja. Drehen Sie in 90°-Schritten, spiegeln Sie horizontal oder vertikal und richten Sie mit dem Begradigen-Regler einen Horizont aus. Beim Begradigen wird gerade so weit hineingezoomt, dass keine leeren Keile in den Ecken entstehen." },
    { q: "Wie schneide ich ein Bewerbungsfoto oder Passbild zu?", a: "Für ein Bewerbungsfoto fixieren Sie ein Hochformat wie 4:5 oder 3:4 und lassen über dem Kopf etwas Luft. Für biometrische Pass- und Ausweisfotos mit 35 × 45 mm und festen Kopfmaßen nutzen Sie besser unseren Passbild-Ersteller — prüfen Sie aber immer die aktuellen Vorgaben der Behörde." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das Zuschneiden erfolgt vollständig in Ihrem Browser mit HTML-Canvas — es wird nie etwas auf einen Server hochgeladen. Wenn Sie den Tab schließen, ist das Bild aus dem Speicher verschwunden. Keine Speicherung, keine Auswertung Ihrer Dateien.",

  ui: {
    // CropTool.tsx
    "Couldn't read {name}.": "{name} konnte nicht gelesen werden.",
    "Cropped 1 image.": "1 Bild zugeschnitten.",
    "Cropped {n} images.": "{n} Bilder zugeschnitten.",
    "Crop failed.": "Zuschneiden fehlgeschlagen.",
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "oder JPG-, PNG-, WEBP-, GIF- oder BMP-Bilder hier ablegen",
    "Preview {name}": "Vorschau {name}",
    "done": "fertig",
    "Drag inside the box to move it, or a handle to resize · output {w} × {h} px":
      "Innerhalb des Rahmens ziehen zum Verschieben, an einem Griff zum Ändern der Größe · Ausgabe {w} × {h} px",
    "— the same crop is applied to all {n} images": "— derselbe Zuschnitt gilt für alle {n} Bilder",
    "Clear images": "Bilder entfernen",
    "Files": "Dateien",
    "Crop settings": "Zuschnitt-Einstellungen",
    "Crop Settings": "Zuschnitt-Einstellungen",
    "Crop|verb": "Zuschneiden",
    "Cropping…": "Wird zugeschnitten…",
    "Output: {w} × {h} px — nothing is uploaded.": "Ausgabe: {w} × {h} px — nichts wird hochgeladen.",
    "Crop {n} images": "{n} Bilder zuschneiden",
    "Crop & download": "Zuschneiden und herunterladen",
    "Shape": "Form",
    "Circle and Ellipse cut away the corners — export as PNG or WEBP to keep them transparent. JPG has no transparency, so those corners take the background colour instead.":
      "Kreis und Ellipse schneiden die Ecken weg — exportieren Sie als PNG oder WEBP, damit sie transparent bleiben. JPG kennt keine Transparenz, dort erhalten die Ecken stattdessen die Hintergrundfarbe.",
    "Corner radius": "Eckenradius",
    "Aspect ratio": "Seitenverhältnis",
    "Rotate & flip": "Drehen und spiegeln",
    "Flip horizontally": "Horizontal spiegeln",
    "Flip vertically": "Vertikal spiegeln",
    "Straighten": "Begradigen",
    "Fine rotation for levelling a horizon. The image is zoomed just enough that no empty corners appear.":
      "Feindrehung zum Ausrichten eines Horizonts. Das Bild wird gerade so weit vergrößert, dass keine leeren Ecken entstehen.",
    "Zoom": "Zoom", // i18n-same
    "Selection (px)": "Auswahl (px)",
    "Exact pixel position and size of the crop on the image, after any rotation.":
      "Exakte Position und Größe des Ausschnitts im Bild in Pixeln, nach einer eventuellen Drehung.",
    "Width": "Breite",
    "Height": "Höhe",
    "Output size": "Ausgabegröße",
    "Corner fill (JPG has no transparency)": "Eckenfarbe (JPG hat keine Transparenz)",
    "Outside the shape": "Außerhalb der Form",
    // SHAPES / ASPECTS / OUTPUT_TARGETS / FORMATS (module scope, §4.2)
    "Rectangle": "Rechteck",
    "Square": "Quadrat",
    "Circle": "Kreis",
    "Ellipse": "Ellipse", // i18n-same
    "Rounded": "Abgerundet",
    "Same as original": "Wie Original",
  },
};

export default content;
