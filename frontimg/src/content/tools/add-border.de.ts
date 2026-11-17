import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/rahmen-um-bild.
 *
 * Primary query "Rahmen um Bild" (DE); secondary "Bilderrahmen online",
 * "Rand um Bild". "Passepartout" is the German framing term for the inner mat.
 */
const content: ToolPageContent = {
  toolId: "add-border",
  locale: "de",
  name: "Rahmen um Bild hinzufügen",
  tagline:
    "Fügen Sie Ihren Bildern online einen farbigen Rand oder Rahmen hinzu — mit einstellbarer Stärke, abgerundeten Ecken, Live-Vorschau und Stapelverarbeitung. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Rahmen um Bild hinzufügen – kostenlos online | oMyImage",
  metaDescription:
    "Rahmen um Bild setzen: Bilderrahmen online mit Farbe, Stärke, runden Ecken, Passepartout und Bildunterschrift. Mehrere Bilder, kostenlos, ohne Upload.",

  intro:
    "Setzen Sie einen Rahmen um Ihr Bild für einen sauberen, fertigen Look. Das Tool von oMyImage legt einen farbigen Rand um jedes Bild, direkt in Ihrem Browser — mit Kontrolle über Stärke, Farbe und abgerundete Ecken und einer Live-Vorschau. Ein Bilderrahmen online, ohne Software: Rahmen Sie ein einzelnes Bild oder einen ganzen Stapel und laden Sie sofort herunter. Nichts wird hochgeladen, Ihre Bilder bleiben privat.",

  sections: [
    {
      heading: "Wofür ein Rahmen eigentlich gut ist",
      id: "why",
      body: [
        "Der praktischste Grund ist Abgrenzung. Ein Foto mit hellen Rändern auf einer weißen Seite hat keine sichtbare Grenze — der Himmel läuft in den Hintergrund über, und das Bild wirkt nicht mehr wie ein eigenes Objekt. Ein schmaler Rand stellt die Kante wieder her, und das Bild wirkt gewollt statt wie ein Fehler im Layout.",
        "Der zweite Grund ist das Format. Soziale Netzwerke, Marktplätze und Druckdienste verlangen oft ein bestimmtes Seitenverhältnis, und die übliche Lösung ist Zuschneiden. Mit einem Rand erreichen Sie das Verhältnis und behalten trotzdem die gesamte Komposition — wichtig, wenn das Abgeschnittene der eigentliche Sinn des Fotos war.",
        "Der dritte ist Einheitlichkeit. Bilder von verschiedenen Kameras in verschiedenen Größen, gleich gerahmt, wirken wie eine Serie statt wie ein Sammelsurium.",
      ],
    },
    {
      heading: "Die richtige Rahmenstärke",
      id: "thickness",
      body: [
        "Denken Sie in Prozent statt in Pixeln, denn ein Rand von 20 Pixeln ist bei einem 600 Pixel breiten Bild auffällig und bei einem 4000 Pixel breiten unsichtbar. Zwei bis fünf Prozent der Breite sind der Bereich für einen dezenten Rahmen, der die Kante definiert, ohne selbst zum Gestaltungselement zu werden.",
        "Ab zehn Prozent wirkt der Rand wie ein Passepartout — der breite Rand um Galerie-Drucke, der einem Bild Raum und eine gewisse Förmlichkeit gibt. Das ist ein bewusster Look und keine Voreinstellung, und er passt besser zu einem durchdachten Foto als zu einem Schnappschuss.",
        "Ein Punkt zum Prüfen: Wird das Bild deutlich kleiner als in Originalgröße angezeigt, kann ein schmaler Rand beim Verkleinern ganz verschwinden. Testen Sie in der Größe, in der es tatsächlich erscheint.",
      ],
    },
    {
      heading: "Auf ein anderes Seitenverhältnis auffüllen",
      id: "aspect",
      body: [
        "Ein ungleichmäßiger Rand ist das Werkzeug, um ein Foto in eine Form zu bringen, in der es nicht aufgenommen wurde. Füllen Sie nur die kurzen Seiten auf, und aus einem 3:2-Querformat wird ein 1:1-Quadrat mit vollständig erhaltenem Bildausschnitt.",
        "So posten die meisten Menschen Querformat-Fotos in quadratische Feeds, ohne die Ränder der Komposition zu verlieren, und so landen Hochformat-Aufnahmen in Präsentationsfolien im Breitbildformat. Die Alternative — Zuschneiden — kostet immer etwas, und oft ist das genau der Grund, warum Sie das Bild aufgenommen haben.",
        "Eine durchdachte Füllfarbe lässt das Ergebnis gestaltet statt geflickt wirken. Weiß oder Schwarz sind sicher; eine Farbe aus dem Foto selbst sieht oft am besten aus.",
      ],
    },
    {
      heading: "Die Farbe des Rahmens",
      id: "colour",
      body: [
        "Weiß ist aus gutem Grund der Standard — Galerie-Passepartouts und Druckränder nutzen es, und Fotos wirken damit klarer. Auf einer weißen Seite verschwindet es allerdings, was entweder genau das ist, was Sie wollen, oder genau das, was Sie vermeiden wollten. Prüfen Sie also das Ziel.",
        "Schwarz passt zu Bildern mit dunklen Tönen, hohem Kontrast oder einem filmischen Charakter und gibt einem Foto Gewicht. Eine Markenfarbe hält eine veröffentlichte Serie zusammen und ist die übliche Wahl für Social-Media-Inhalte, die erkennbar aus einer Hand kommen sollen.",
        "Transparente Ränder, verfügbar beim Export als PNG oder WEBP, sind die oft vergessene Option. Sie ändern das Seitenverhältnis, ohne etwas Sichtbares hinzuzufügen — oft die richtige Antwort, wenn das Bild in ein Layout kommt, das seinen eigenen Hintergrund mitbringt.",
      ],
    },
  ],

  howToTitle: "So setzen Sie einen Rahmen um ein Bild",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus, oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Rahmen gestalten", description: "Legen Sie Stärke, Farbe und optional abgerundete Ecken fest, mit Live-Vorschau." },
    { title: "Anwenden & herunterladen", description: "Klicken Sie auf „Rahmen hinzufügen“ — ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
  ],

  features: [
    { icon: "crop_din", title: "Mitwachsende Stärke", description: "Die Rahmenstärke ist ein Prozentsatz der kürzesten Seite und wirkt deshalb bei jeder Bildgröße gleich." },
    { icon: "rounded_corner", title: "Farbe & runde Ecken", description: "Wählen Sie eine beliebige Rahmenfarbe und runden Sie die Ecken für einen gepflegten, modernen Rahmen ab." },
    { icon: "lock", title: "Stapel & privat", description: "Rahmen Sie einen ganzen Stapel auf einmal, komplett in Ihrem Browser — Bilder werden nie hochgeladen." },
  ],

  faqs: [
    { q: "Wie wird die Rahmenstärke gemessen?", a: "Als Prozentsatz der kürzesten Bildseite, sodass dieselbe Einstellung bei Bildern jeder Größe einen proportionalen Rand ergibt." },
    { q: "Kann ich die Ecken abrunden?", a: "Ja. Mit dem Regler für den Eckenradius runden Sie die Bildecken gegenüber dem Rahmen ab, für einen weicheren Look." },
    { q: "Kann ich vielen Bildern auf einmal einen Rahmen geben?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten — ein einzelnes Bild wird direkt heruntergeladen, mehrere Bilder zusammen als ZIP." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Warum sollte ich einen Rahmen um ein Foto setzen?", a: "Drei häufige Gründe: damit ein helles Bild nicht in eine helle Seite übergeht und als eigenes Objekt erkennbar bleibt, damit ein nicht quadratisches Foto ohne Zuschnitt in einen quadratischen Platz passt, und damit eine Bilderserie einheitlich und fertig wirkt." },
    { q: "Wie bekomme ich ein Foto ohne Zuschneiden in einen quadratischen Post?", a: "Fügen Sie einen ungleichmäßigen Rand hinzu — Füllung an den kurzen Seiten, bis das Ganze quadratisch ist. Nichts wird abgeschnitten; das Bild schwebt einfach in einem Rahmen. So postet man üblicherweise ein Quer- oder Hochformat-Foto in einen quadratischen Feed, ohne die Komposition zu beschneiden." },
    { q: "Welche Rahmenfarbe wirkt am besten?", a: "Weiß für einen klaren Galerie-Look, Schwarz für Fotos mit dunklen Tönen oder filmischem Charakter und eine Markenfarbe für alles, was als Serie erscheint. Liegt das Foto auf einer farbigen Seite, lässt ein Rahmen in genau dieser Farbe es randlos wirken und gibt ihm trotzdem Luft." },
    { q: "Wie dick sollte der Rahmen sein?", a: "Zwei bis fünf Prozent der Bildbreite für einen dezenten Rahmen — genug, um die Kante zu definieren, ohne zum Gestaltungselement zu werden. Ab zehn Prozent wirkt er wie ein bewusstes Passepartout, wie bei Drucken und Galeriewänden. Schmale Ränder an sehr großen Bildern können beim Verkleinern ganz verschwinden." },
    { q: "Ändert ein Rahmen die Bildmaße?", a: "Ja. Der Rahmen wird um das Bild herum ergänzt, nicht darübergemalt, das Ergebnis ist also in jeder Richtung um die doppelte Rahmenstärke größer als das Original. Brauchen Sie eine exakte Endgröße, verkleinern Sie das Bild zuerst und lassen den Rahmen es wieder auffüllen." },
    { q: "Kann ich einen transparenten Rahmen verwenden?", a: "Ja, wenn Sie als PNG oder WEBP exportieren. Damit wird das Bild praktisch mit leerem Raum aufgefüllt — nützlich, wenn Sie für ein Layout das Seitenverhältnis ändern müssen, ohne einen sichtbaren Rahmen einzuführen." },
    { q: "Kann ich eine Bildunterschrift unter das Foto setzen?", a: "Ja. Aktivieren Sie die Bildunterschrift, und der untere Rand wird breiter, um Platz zu schaffen — wie bei einem Polaroid. Im Stapel erhält jedes Bild seinen eigenen Dateinamen als Unterschrift, es sei denn, Sie tippen einen Text ein; dann gilt dieser für alle." },
  ],

  security:
    "Ihre Bilder bleiben privat. Der Rahmen wird vollständig in Ihrem Browser mit HTML-Canvas hinzugefügt — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // AddBorderTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Added a border to 1 image.": "1 Bild mit Rahmen versehen.",
    "Added a border to {n} images.": "{n} Bilder mit Rahmen versehen.",
    "Adding the border failed.": "Der Rahmen konnte nicht hinzugefügt werden.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "done": "fertig",
    "Remove": "Entfernen",
    "Clear files": "Dateien leeren",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Border settings": "Rahmen-Einstellungen",
    "Border Settings": "Rahmen-Einstellungen",
    "Add border": "Rahmen hinzufügen",
    "Adding…": "Wird hinzugefügt…",
    "Live preview of": "Live-Vorschau von",
    "— applied to all {n} images.": "— wird auf alle {n} Bilder angewendet.",
    "Add border to {n}": "Rahmen zu {n} hinzufügen",
    "Add border & download": "Rahmen hinzufügen & herunterladen",
    "Presets": "Vorlagen",
    "Aspect ratio": "Seitenverhältnis",
    "The frame grows to reach the shape — the photo is never cropped.":
      "Der Rahmen wächst bis zum gewählten Format — das Foto wird nie beschnitten.",
    "Style": "Stil",
    "Thickness": "Stärke",
    "As a percentage of the image's shortest side, so it scales with any size.":
      "In Prozent der kürzesten Bildseite, damit er bei jeder Größe mitwächst.",
    "Corner radius": "Eckenradius",
    "Extra depth below": "Zusätzlicher Rand unten",
    "A deeper bottom edge, the way a Polaroid has one.":
      "Ein breiterer unterer Rand, wie bei einem Polaroid.",
    "Border colour": "Rahmenfarbe",
    "Inner mat": "Passepartout",
    "The thin second frame between the photo and the border, as in a mounted print.":
      "Der schmale zweite Rahmen zwischen Foto und Rand, wie bei einem gerahmten Druck.",
    "Mat width": "Passepartout-Breite",
    "Mat colour": "Passepartout-Farbe",
    "Caption": "Bildunterschrift",
    "Caption text": "Text der Bildunterschrift",
    "Text size": "Textgröße",
    "Each image is captioned with its own filename. Type something to use one caption for all of them.":
      "Jedes Bild erhält seinen Dateinamen als Unterschrift. Tippen Sie etwas ein, um eine Unterschrift für alle zu verwenden.",
    "Drawn in the band below the photo, which deepens to make room.":
      "Wird in den Streifen unter dem Foto geschrieben, der dafür breiter wird.",
    "Transparent background": "Transparenter Hintergrund",
    "Leaves everything outside the frame empty instead of filled, so the framed photo can sit on any background. The corners follow the Corner radius slider, and an aspect ratio leaves empty space around the frame rather than a thicker border.":
      "Lässt alles außerhalb des Rahmens leer statt gefüllt, damit das gerahmte Foto auf jedem Hintergrund liegen kann. Die Ecken folgen dem Regler „Eckenradius“, und ein Seitenverhältnis lässt leeren Raum um den Rahmen statt eines breiteren Rands.",
    "{format} cannot store transparency — the empty areas will export as solid black. Choose PNG or WEBP.":
      "{format} kann keine Transparenz speichern — die leeren Bereiche werden schwarz exportiert. Wählen Sie PNG oder WEBP.",
    "Saved as {format}, which can store transparency. Raise Corner radius to round the frame's outer edge.":
      "Gespeichert als {format}, das Transparenz speichern kann. Erhöhen Sie den Eckenradius, um die Außenkante des Rahmens abzurunden.",
    "Save as": "Speichern als",
    "Quality": "Qualität",
  },
};

export default content;
