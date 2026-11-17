import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-teilen (parent of instagram-grid-maker).
 *
 * Primary query "Bild teilen" (590/mo, DE); secondary "Bild aufteilen",
 * "Bild zerschneiden", "Bild in Teile schneiden". The piece file names
 * (_r1_c1) come from the code, only the example stem is localised.
 */
const content: ToolPageContent = {
  toolId: "split-image",
  locale: "de",
  name: "Bild teilen",
  tagline:
    "Schneiden Sie jedes Bild in gleiche Teile — zwei Hälften, drei Streifen, ein 3 × 3-Raster — oder in Kacheln mit exakter Pixelgröße. Alle Teile kommen in einer ZIP, der Reihe nach benannt. Kostenlos, in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },
  variantsHeading: "Bild teilen oder ein Instagram Grid erstellen",

  metaTitle: "Bild teilen – Bild online in Teile aufteilen | oMyImage",
  metaDescription:
    "Bild teilen online: Bild in gleiche Teile aufteilen, halbieren, 3 × 3-Raster oder Kacheln in Pixeln — alle Teile als ZIP. Kostenlos, ohne Upload.",

  intro:
    "Wer ein Bild teilt, zerschneidet es in kleinere Bilder, die perfekt wieder zusammenpassen. Mit dem Tool „Bild teilen“ von oMyImage geht das auf zwei Arten: als gleichmäßiges Raster, bei dem Sie die Zahl der Spalten und Zeilen wählen, oder als Kacheln mit fester Größe, bei denen Sie Breite und Höhe jedes Teils in Pixeln festlegen. Linien in der Vorschau zeigen genau, wo geschnitten wird, jedes Teil ist nummeriert, und der ganze Satz wird als eine ZIP heruntergeladen — oder Sie klicken auf ein einzelnes Teil, um nur dieses zu speichern. Fügen Sie mehrere Bilder hinzu, und jedes wird auf dieselbe Weise aufgeteilt.",

  sections: [
    {
      heading: "Gleichmäßiges Raster oder Kachelgröße",
      id: "modes",
      body: [
        "„Gleichmäßiges Raster“ teilt das Bild in so viele Stücke, wie Sie angeben: 2 Spalten und 1 Zeile ergeben eine linke und eine rechte Hälfte, 1 Spalte und 3 Zeilen drei waagerechte Streifen, 3 × 3 neun Teile. Die Teile sind so gleich, wie es die Pixel erlauben — lässt sich die Breite nicht exakt teilen, sind einige Teile ein Pixel breiter, nie bleibt am Ende ein dünner Streifen übrig.",
        "„Kachelgröße“ funktioniert umgekehrt: Sie legen die Größe jedes Teils fest, etwa 512 × 512 Pixel, und das Bild wird von der oberen linken Ecke aus in so viele Kacheln geschnitten, wie hineinpassen. Die letzte Zeile und Spalte bekommen, was übrig bleibt, und können daher kleiner sein. Das ist der Modus für Spielkarten, Textur-Sheets und alles, was Kacheln fester Größe erwartet.",
      ],
    },
    {
      heading: "Typische Arten, ein Bild aufzuteilen",
      id: "layouts",
      body: [
        "Zwei Hälften nebeneinander (2 × 1) trennen einen zweiseitigen Scan oder ein Vorher-Nachher-Foto. Obere und untere Hälfte (1 × 2) teilen einen hohen Handy-Screenshot. Drei senkrechte Streifen (3 × 1) ergeben ein Triptychon für drei Rahmen an der Wand. Ein 3 × 3- oder 4 × 4-Raster macht aus einem Foto ein Puzzle, ein Poster zum Ausdrucken oder einen Satz Kacheln für ein Mosaik.",
        "Die Schnellknöpfe über den Reglern stellen diese Aufteilungen mit einem Tippen ein; die Regler reichen bis 20 Spalten und 20 Zeilen.",
      ],
    },
    {
      heading: "Ein großes Poster auf normalem Papier drucken",
      id: "poster",
      body: [
        "Ein Heimdrucker kann kein meterbreites Poster drucken, wohl aber vier oder neun Teile davon. Teilen Sie das Bild in ein Raster, das zur Form Ihres Papiers passt — 2 × 2 oder 3 × 3 für ein Poster in der Form des Fotos —, drucken Sie jedes Teil in derselben Größe ohne „An Seite anpassen“, schneiden Sie die weißen Ränder ab und kleben Sie die Blätter von hinten zusammen.",
        "Nehmen Sie das größte Original, das Sie haben. Jedes Teil wird viel größer gedruckt, als es am Bildschirm erscheint, ein kleines Foto wird also unscharf. Ein 6000 Pixel breites Foto, in 3 Spalten geteilt, liefert immer noch 2000 Pixel pro Blatt — das druckt auf A4 gestochen scharf.",
      ],
    },
    {
      heading: "Kacheln für Spiele, Karten und das Web",
      id: "tiles",
      body: [
        "Game-Engines, Kartenviewer und manche Websites laden große Bilder als Raster aus Kacheln, damit nur der sichtbare Teil abgerufen wird. Wählen Sie „Kachelgröße“ und stellen Sie die Größe ein, die das Programm erwartet — 256 oder 512 Pixel sind üblich —, und die Dateien kommen nach Zeile und Spalte benannt heraus, bereit zum Laden in einer Schleife.",
        "Der Kachelmodus ist auch der schnellste Weg, einen sehr langen Screenshot oder eine Infografik in Seiten zu zerschneiden: Setzen Sie die Kachelbreite auf die volle Bildbreite und die Höhe auf eine Bildschirmhöhe.",
      ],
    },
    {
      heading: "Teile, die exakt zusammenpassen",
      id: "exact",
      body: [
        "Jedes Teil ist eine direkte Kopie seines Ausschnitts aus dem Original — nichts wird skaliert, nichts überlappt, und zwischen Nachbarn geht kein Pixel verloren, die Teile passen also lückenlos wieder zusammen. Als PNG gespeichert, sind sie pixelgenau identisch mit dem Original; JPG- und WEBP-Teile werden mit der gewählten Qualität neu komprimiert. Das ist meist unsichtbar, kann auf einfarbigen Flächen aber als feine Naht auffallen. Nehmen Sie PNG, wenn die Teile wieder zusammengesetzt werden.",
      ],
    },
    {
      heading: "Dateien, Namen und Formate",
      id: "names",
      body: [
        "Die Teile werden nach dem Bild mit Zeile und Spalte benannt — urlaub_r1_c1.jpg, urlaub_r1_c2.jpg und so weiter —, bei zehn oder mehr mit führenden Nullen, damit sie in jedem Ordner richtig sortiert sind. Teilen Sie mehrere Bilder auf einmal, landen die Teile jedes Bildes in einem eigenen Ordner innerhalb der ZIP.",
        "Die Teile behalten das Originalformat, sofern Sie kein anderes wählen. PNG und WEBP behalten Transparenz; JPG füllt transparente Bereiche mit der gewählten Hintergrundfarbe.",
      ],
    },
    {
      heading: "Ein Foto für Instagram teilen",
      id: "instagram",
      body: [
        "Ein Instagram-Profilraster und ein wischbares Panorama brauchen mehr als einen einfachen Schnitt: Das Foto muss auf die richtige Form zugeschnitten, jedes Teil für Instagram skaliert und die Beiträge in umgekehrter Reihenfolge hochgeladen werden. „Instagram Grid erstellen“ erledigt all das — nutzen Sie es statt dieser Seite für ein Raster mit drei Spalten oder ein Karussell.",
      ],
    },
    {
      heading: "Comics, Speisekarten und Dokumente aufteilen",
      id: "documents",
      body: [
        "Eine eingescannte Comicseite lässt sich mit einem Raster derselben Form in ihre Panels zerlegen, bereit zum einzelnen Posten. Eine lange Speisekarte oder ein Flyer, in einem Bild fotografiert, kann für eine Website in einzelne Seiten geschnitten werden. Bei zweiseitigen Buchscans liefert 2 × 1 die linke und rechte Seite als getrennte Bilder, die Sie anschließend mit „Bild in PDF umwandeln“ weiterverarbeiten können.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes Bild wird vollständig in Ihrem Browser geteilt. Nichts wird auf einen Server hochgeladen, und nichts wird aufbewahrt, nachdem Sie die Seite schließen.",
      ],
    },
  ],

  howToTitle: "So teilen Sie ein Bild",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WEBP-Bilder aus." },
    { title: "Schnitte festlegen", description: "Wählen Sie ein Raster wie 2 × 1 oder 3 × 3, oder legen Sie eine exakte Kachelgröße in Pixeln fest." },
    { title: "Teilen und herunterladen", description: "Klicken Sie auf „Bild teilen“, um alle Teile in einer ZIP zu erhalten, oder klicken Sie auf ein einzelnes Teil, um es zu speichern." },
  ],

  features: [
    { icon: "view_column", title: "Raster oder Kachelgröße", description: "Bis zu 20 × 20 gleiche Teile oder Kacheln in beliebiger Pixelgröße." },
    { icon: "folder_zip", title: "Alle Teile in einer ZIP", description: "Nach Zeile und Spalte benannt, damit die Reihenfolge erhalten bleibt." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser geteilt." },
  ],

  faqs: [
    { q: "Wie teile ich ein Bild in gleiche Teile?", a: "Bild hinzufügen, Anzahl der Spalten und Zeilen wählen und auf „Bild teilen“ klicken. Die Teile werden zusammen als ZIP heruntergeladen." },
    { q: "Wie schneide ich ein Bild in der Mitte durch?", a: "Wählen Sie 2 × 1 für eine linke und rechte Hälfte oder 1 × 2 für eine obere und untere Hälfte." },
    { q: "Kann ich ein Bild in ein 3 × 3-Raster aufteilen?", a: "Ja. Tippen Sie auf 3 × 3 oder stellen Sie beide Regler auf 3 — Sie erhalten neun Teile, nummeriert ab oben links." },
    { q: "Kann ich Kacheln in exakter Größe schneiden?", a: "Ja. Wählen Sie „Kachelgröße“ und geben Sie Breite und Höhe in Pixeln ein. Die letzte Zeile und Spalte sind kleiner, wenn die Größe nicht aufgeht." },
    { q: "Verlieren die Teile an Qualität?", a: "Es wird nichts skaliert. Als PNG sind sie identisch mit dem Original; JPG und WEBP werden mit der gewählten Qualität neu gespeichert." },
    { q: "Kann ich nur ein Teil herunterladen?", a: "Ja. Klicken Sie nach dem Teilen auf ein beliebiges Teil unter der Vorschau, um es einzeln zu speichern." },
    { q: "Kann ich mehrere Bilder auf einmal teilen?", a: "Ja. Jedes Bild wird auf dieselbe Weise geteilt und bekommt einen eigenen Ordner in der ZIP." },
    { q: "Wie heißen die Dateien?", a: "Nach Zeile und Spalte, etwa foto_r2_c3.png, damit sie richtig sortiert sind." },
    { q: "Bleibt Transparenz erhalten?", a: "Ja, als PNG oder WEBP. JPG füllt transparente Bereiche mit einer Farbe." },
    { q: "Wie viele Teile sind möglich?", a: "Bis zu 20 × 20 im Raster und bis zu 400 Teile pro Bild im Kachelmodus." },
    { q: "Wie teile ich ein Foto für ein Instagram-Raster?", a: "Nutzen Sie „Instagram Grid erstellen“ — es schneidet auf die richtige Form zu, skaliert die Beiträge und nummeriert sie in der Reihenfolge zum Posten." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das am Handy?", a: "Ja, in jedem mobilen Browser. Die Teile werden als ZIP heruntergeladen, die Ihr Handy öffnen kann." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Limits." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser geteilt. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // SplitImageTool.tsx — files
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "or drop a JPG, PNG or WEBP image here": "oder ein JPG-, PNG- oder WEBP-Bild hier ablegen",
    "Clear files": "Dateien leeren",
    "Remove": "Entfernen",
    // settings
    "Settings": "Einstellungen",
    "Split by": "Teilen nach",
    "Equal grid": "Gleichmäßiges Raster",
    "Tile size": "Kachelgröße",
    "Columns": "Spalten",
    "Rows": "Zeilen",
    "Tile width (px)": "Kachelbreite (px)",
    "Tile height (px)": "Kachelhöhe (px)",
    "Each piece:": "Jedes Teil:",
    "Each one:": "Jedes:",
    "Pieces": "Teile",
    "1 piece": "1 Teil",
    "{n} pieces": "{n} Teile",
    "The size does not divide evenly, so some pieces are 1 px wider or taller.":
      "Die Größe lässt sich nicht gleichmäßig teilen, daher sind einige Teile 1 px breiter oder höher.",
    "The last row and column are smaller — they take what is left.":
      "Die letzte Zeile und Spalte sind kleiner — sie bekommen, was übrig bleibt.",
    "Too many pieces — use bigger tiles (up to 400 pieces per image).":
      "Zu viele Teile — verwenden Sie größere Kacheln (bis zu 400 Teile pro Bild).",
    "For the first image — every image is split the same way.":
      "Für das erste Bild — jedes Bild wird auf dieselbe Weise geteilt.",
    // Instagram mode
    "Layout": "Layout", // i18n-same
    "Profile grid": "Profilraster",
    "Three posts per row, like your profile.": "Drei Beiträge pro Zeile, wie in Ihrem Profil.",
    "Carousel": "Karussell",
    "Post shape": "Beitragsformat",
    "Matches the profile grid exactly.": "Entspricht exakt dem Profilraster.",
    "The classic tall post. The grid trims a sliver off each side.":
      "Der klassische Hochformat-Beitrag. Das Raster schneidet an jeder Seite einen schmalen Streifen ab.",
    "Square posts. The grid trims their sides.": "Quadratische Beiträge. Das Raster beschneidet ihre Seiten.",
    "Tall slides that fill the most screen.": "Hohe Slides, die den meisten Bildschirm füllen.",
    "Square slides.": "Quadratische Slides.",
    "Slides": "Slides", // i18n-same
    "{n} posts": "{n} Beiträge",
    "{n} slides": "{n} Slides",
    "Drag the picture to choose what goes into the posts.":
      "Ziehen Sie das Bild, um auszuwählen, was in die Beiträge kommt.",
    "Horizontal position": "Horizontale Position",
    "Vertical position": "Vertikale Position",
    "Your picture is narrower than Instagram's 1080 px per post, so the pieces keep its own resolution.":
      "Ihr Bild ist schmaler als die 1080 px pro Beitrag bei Instagram, daher behalten die Teile seine eigene Auflösung.",
    "Post them in number order: 1 first, the top-left piece last.":
      "Posten Sie sie in der Reihenfolge der Nummern: 1 zuerst, das Teil oben links zuletzt.",
    "Add the slides to one post in number order, 1 first.":
      "Fügen Sie die Slides in der Reihenfolge der Nummern einem Beitrag hinzu, 1 zuerst.",
    "Make the grid": "Grid erstellen",
    "Make the carousel": "Karussell erstellen",
    // preview / output
    "Preview": "Vorschau",
    "The lines show where the image will be cut.": "Die Linien zeigen, wo das Bild geschnitten wird.",
    "Click a piece to download just that one.": "Klicken Sie auf ein Teil, um nur dieses herunterzuladen.",
    "Output format": "Ausgabeformat",
    "Same as original": "Wie Original",
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    "Split image": "Bild teilen",
    "Working…": "Wird bearbeitet…",
    "Done — 1 image saved.": "Fertig — 1 Bild gespeichert.",
    "Done — {n} pieces saved.": "Fertig — {n} Teile gespeichert.",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Your images are processed in your browser and never uploaded.":
      "Ihre Bilder werden in Ihrem Browser verarbeitet und nie hochgeladen.",
  },
};

export default content;
