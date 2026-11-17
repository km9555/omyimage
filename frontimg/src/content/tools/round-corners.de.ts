import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.de";

/**
 * German copy for /de/ecken-abrunden. Target query: „Ecken abrunden"
 * (Germany, Nov 2026); secondary „Abgerundete Ecken" in the intro, a heading
 * and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "round-corners",
  locale: "de",
  name: "Ecken abrunden",
  tagline:
    "Geben Sie Bildern abgerundete Ecken – mit beliebigem Radius, an beliebigen Ecken –, transparent als PNG oder mit einer Hintergrundfarbe Ihrer Wahl. Viele Bilder auf einmal. Kostenlos, direkt im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Ecken abrunden – Bild mit runden Ecken, kostenlos | oMyImage",
  metaDescription:
    "Ecken abrunden online und kostenlos: abgerundete Ecken für JPG, PNG und WebP, beliebiger Radius, transparent oder farbig. Viele Bilder auf einmal, ohne Upload.",

  intro:
    "Abgerundete Ecken lassen ein Bild fertig wirken: App-Icons, Website-Karten, Folien und Social-Media-Posts nutzen sie alle. Mit „Ecken abrunden“ von oMyImage schneiden Sie die Ecken von JPG-, PNG- und WebP-Bildern im gewünschten Radius ab, an allen vier Ecken oder nur an einigen, und lassen die abgeschnittenen Bereiche transparent, damit das Bild sauber auf jedem Hintergrund sitzt. Beobachten Sie die Vorschau beim Ziehen und laden Sie dann ein Bild oder einen ganzen Stapel herunter.",

  sections: [
    {
      heading: "Den Radius wählen",
      id: "radius",
      body: [
        "Der Radius wird als Anteil der kürzeren Bildseite angegeben, sodass dieselbe Einstellung auf einem kleinen Icon und einem großen Banner gleich aussieht. Etwa 5 bis 10 Prozent entsprechen der sanften Rundung einer Website-Karte; 15 bis 25 Prozent wirken wie ein App-Icon; 50 Prozent machen aus einem Rechteck eine Pillenform und aus einem quadratischen Bild einen perfekten Kreis.",
        "Entfernen Sie Häkchen bei einzelnen Ecken, um nur einige abzurunden – die oberen beiden für einen Tab oder Kartenkopf, eine einzelne für eine Sprechblasen- oder Etikettenform.",
      ],
    },
    {
      heading: "Transparente Ecken oder eine Farbe",
      id: "background",
      body: [
        "Transparente Ecken brauchen ein Format, das Transparenz unterstützt, deshalb ist die Ausgabe standardmäßig PNG; WebP funktioniert ebenfalls und ist kleiner. Kommt das Bild auf eine Seite, Folie oder in ein Dokument mit bekanntem Hintergrund, können Sie die Ecken stattdessen mit dieser Farbe füllen – dann lässt es sich auch als JPG speichern.",
        "JPG kann überhaupt keine Transparenz speichern. Ist JPG gewählt, werden die Ecken mit der Hintergrundfarbe gefüllt, Weiß, sofern Sie keine andere wählen.",
      ],
    },
    {
      heading: "Wo abgerundete Ecken helfen",
      id: "uses",
      body: [
        "Screenshots mit abgerundeten Ecken wirken in Dokumentationen, Posts und Folien gepflegt. Produktfotos und Teamporträts sehen auf Websites freundlicher aus. App- und Spiel-Icons brauchen abgerundete Quadrate; Profilbilder wirken oft als Kreis am besten. Vorschaubilder in einem Raster sehen ordentlicher aus, wenn alle denselben Radius haben – fügen Sie die ganze Serie auf einmal hinzu, dann ist das so.",
      ],
    },
    {
      heading: "Kreise und andere Formen",
      id: "shapes",
      body: [
        "Ein Radius von 50 Prozent auf einem quadratischen Bild ergibt einen exakten Kreis. Für einen Kreis aus einem rechteckigen Foto, bei dem Sie bestimmen, welcher Teil darin landet, nutzen Sie „Bild rund zuschneiden“ – dort verschieben und skalieren Sie den Kreis. Um dem abgerundeten Bild einen Rahmen oder farbigen Rand zu geben, verwenden Sie anschließend „Rahmen um Bild“.",
      ],
    },
    {
      heading: "Viele Bilder auf einmal",
      id: "batch",
      body: [
        "Fügen Sie so viele Bilder hinzu, wie Sie brauchen; derselbe Radius und dieselben Ecken werden auf jedes angewendet, passend zu seiner Größe. Die Vorschau zeigt das erste Bild, jede Datei bekommt nach der Bearbeitung einen eigenen Download-Button, und mehrere werden zusammen als ZIP-Datei heruntergeladen.",
      ],
    },
    {
      heading: "Einheitliche Ecken im ganzen Design",
      id: "consistency",
      body: [
        "Verwenden Sie in einem Design überall denselben Radius: Karten, Buttons und Bilder mit gleichem Eckenradius wirken, als gehörten sie zusammen. Weil der Radius hier ein Anteil der kürzeren Seite ist, passt eine einmalige Einstellung die ganze Serie proportional an. Wenn Sie denselben Radius in Pixeln auf Bildern unterschiedlicher Größe möchten, bringen Sie sie vorher mit „Bildgröße ändern“ auf eine Größe.",
      ],
    },
    {
      heading: "Bilder mit runden Ecken in Präsentationen und Dokumenten",
      id: "office",
      body: [
        "PowerPoint, Keynote und Word können Bilder zwar mit runden Ecken maskieren, doch die Form geht oft verloren, sobald Sie das Bild in ein anderes Programm kopieren, als PDF exportieren oder auf eine Website stellen. Ein PNG mit bereits abgerundeten, transparenten Ecken sieht dagegen überall gleich aus – in Folien, E-Mails, Dokumenten und auf Social Media.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes Bild wird vollständig in Ihrem Browser abgerundet. Nichts wird auf einen Server hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So runden Sie die Ecken eines Bildes ab",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WebP-Bilder aus." },
    { title: "Radius einstellen", description: "Ziehen Sie den Radius-Regler, wählen Sie die Ecken und den Hintergrund." },
    { title: "Abrunden und herunterladen", description: "Klicken Sie auf „Ecken abrunden“, um ein PNG herunterzuladen – oder eine ZIP-Datei bei mehreren." },
  ],

  features: [
    { icon: "rounded_corner", title: "Jeder Radius", description: "Von der sanften Kante bis zur Pillenform oder zum Kreis, an den Ecken Ihrer Wahl." },
    { icon: "visibility", title: "Transparente Ränder", description: "PNG und WebP halten die Ecken durchsichtig." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser abgerundet." },
  ],

  faqs: [
    { q: "Wie runde ich die Ecken eines Bildes ab?", a: "Fügen Sie das Bild hinzu, stellen Sie den Radius ein und klicken Sie auf „Ecken abrunden“. Ein PNG mit transparenten Ecken wird heruntergeladen." },
    { q: "Warum ist das Ergebnis ein PNG?", a: "Transparente Ecken brauchen PNG oder WebP. Wählen Sie JPG, um die Ecken stattdessen mit einer Farbe zu füllen." },
    { q: "Kann ich nur einige Ecken abrunden?", a: "Ja. Entfernen Sie das Häkchen bei den Ecken, die eckig bleiben sollen." },
    { q: "Wie mache ich einen Kreis?", a: "Verwenden Sie einen Radius von 50 % auf einem quadratischen Bild. Bei anderen Fotos können Sie den Kreis mit „Bild rund zuschneiden“ positionieren." },
    { q: "Können die Ecken farbig statt transparent sein?", a: "Ja. Wählen Sie eine Hintergrundfarbe oder speichern Sie als JPG." },
    { q: "Kann ich mehrere Bilder auf einmal abrunden?", a: "Ja. Auf jedes wird derselbe Radius angewendet, und sie werden als ZIP heruntergeladen." },
    { q: "Welchen Radius haben App-Icons?", a: "Etwa 20 bis 25 Prozent der Seitenlänge für den modernen abgerundeten Quadrat-Look." },
    { q: "Verringert sich die Qualität?", a: "Nein. PNG behält jedes Pixel; nur die Ecken werden abgeschnitten." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Kann ich auch einen Rahmen hinzufügen?", a: "Ja. Nutzen Sie danach „Rahmen um Bild“ für das abgerundete Bild." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Kann ich das für Profilbilder verwenden?", a: "Ja. Ein quadratisches Foto wird bei 50 % zum Kreis, und transparente Ecken lassen es auf jedem Hintergrund sitzen." },
    { q: "Bleiben die abgerundeten Ecken in Word oder PowerPoint erhalten?", a: "Ja. Als PNG mit transparenten Ecken sieht das Bild in jedem Programm gleich aus, auch nach dem Export als PDF." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser abgerundet. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
