import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bilder-zusammenfuegen. Structure lives in ToolPageShell.
 *
 * Head term "Bilder zusammenfügen" (5.4K/mo). "Collage erstellen" (27.1K) is
 * a bigger but broader query — mentioned naturally in the intro, a section and
 * an FAQ without pretending this is a template collage maker. "Fotos
 * zusammenfügen" and "Bilder kombinieren" live in the intro, a heading and the
 * FAQs. "Sie" form, German-German spelling.
 *
 * LAYOUTS, CELL_FITS and ASPECT_PRESETS hints are module scope; their keys are
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "merge-images",
  locale: "de",
  name: "Bilder zusammenfügen",
  tagline:
    "Fügen Sie mehrere Bilder online zu einem zusammen — nebeneinander, untereinander oder im Raster, mit Abstand, Hintergrund und eigener Reihenfolge. Kostenlos, schnell und 100 % privat im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bilder zusammenfügen – Fotos online kombinieren, kostenlos",
  metaDescription:
    "Bilder zusammenfügen: Fotos nebeneinander, untereinander oder im Raster kombinieren und eine einfache Collage erstellen. Kostenlos, ohne Anmeldung, im Browser.",

  intro:
    "Fügen Sie mehrere Fotos in Sekunden zu einem einzigen Bild zusammen. Das Tool „Bilder zusammenfügen“ von oMyImage setzt Ihre Bilder direkt im Browser nebeneinander, untereinander oder in ein Raster, und Sie bestimmen Reihenfolge, Abstand und Hintergrund. So können Sie Fotos zusammenfügen, eine schlichte Collage erstellen, Vorher-nachher-Vergleiche oder Übersichtsblätter bauen und sofort herunterladen — nichts wird hochgeladen, Ihre Bilder bleiben also privat.",

  sections: [
    {
      heading: "Ein Bild statt mehrerer",
      id: "why",
      body: [
        "Sehr viele Stellen akzeptieren genau ein Bild. Angebote auf Marktplätzen, Forenbeiträge, Bewertungsformulare, Bugtracker, Chatnachrichten und die meisten sozialen Netzwerke haben einen Platz statt einer Galerie, und der übliche Umweg — mehrere Bilder nacheinander posten — heißt, dass sich der Betrachter beim dritten Bild noch an das erste erinnern muss.",
        "Das Zusammenfügen löst das, indem der Vergleich in einem einzigen Rahmen landet. Ein Vorher-nachher steht nebeneinander, wo der Unterschied sofort sichtbar ist; drei Produktansichten kommen gemeinsam an; eine Folge von Screenshots liest sich wie eine Geschichte. Niemand muss sich durchklicken.",
        "Es ist außerdem der einfachste Weg zu einem ehrlichen Vergleich. Zwei Bilder, die zusammen im selben Maßstab gezeigt werden, lassen sich viel schwerer falsch darstellen als zwei Bilder, die nacheinander erscheinen.",
      ],
    },
    {
      heading: "Bilder kombinieren: nebeneinander oder untereinander?",
      id: "direction",
      body: [
        "Beim horizontalen Zusammenfügen stehen die Bilder nebeneinander — die natürliche Wahl für Vergleiche. Das Auge wandert leicht hinüber, und die beiden Hälften werden als Paar gelesen. Das ist das Standardlayout für Vorher-nachher-Bearbeitungen, Produktvarianten und jedes A gegen B.",
        "Beim vertikalen Zusammenfügen werden die Bilder untereinander gestapelt. Das passt zu Abläufen und Anleitungen, bei denen die Reihenfolge zählt und von oben nach unten einen Fortschritt bedeutet. Es ist auch die bessere Wahl für alles, was auf dem Handy angesehen wird: Ein hohes Bild füllt einen Bildschirm im Hochformat, ein breites wird dagegen so weit verkleinert, bis die Details verschwinden.",
        "Wenn Sie unsicher sind, fragen Sie sich, was der Betrachter tun soll. Vergleichen? Dann nebeneinander. Folgen? Dann untereinander.",
      ],
    },
    {
      heading: "Größen, Abstände und Ausrichtung",
      id: "layout",
      body: [
        "Bilder mit unterschiedlichen Maßen werden an der gemeinsamen Kante ausgerichtet, und der restliche Platz wird mit Ihrer Hintergrundfarbe gefüllt. Das ist eine vernünftige Voreinstellung, aber das Ergebnis wirkt deutlich aufgeräumter, wenn die Bilder ein Maß teilen — dieselbe Breite für einen vertikalen Stapel, dieselbe Höhe für einen horizontalen Streifen. Sie vorher durch das Tool „Bildgröße ändern“ zu schicken, dauert einen Moment und verbessert das Ergebnis erheblich.",
        "Ein Abstand zwischen den Bildern lohnt sich meistens. Ohne ihn können zwei Fotos mit ähnlichen Rändern wie eine durchgehende Szene wirken — im besten Fall verwirrend, bei einem Vorher-nachher im schlimmsten Fall irreführend. Zehn bis zwanzig Pixel reichen in der Regel, um die Grenze zu zeigen, ohne nach Collage auszusehen.",
        "Die Hintergrundfarbe füllt sowohl die Abstände als auch übrig gebliebenen Platz. Weiß passt fast überall; hinter Fotos sieht ein mittleres Grau oft besser aus, und für Veröffentlichungen funktioniert Ihre Markenfarbe gut.",
      ],
    },
    {
      heading: "Zusammenfügen ist verlustfrei",
      id: "quality",
      body: [
        "In den automatischen Layouts, mit „Bildgrößen“ auf „Original“, werden die Bilder in ihren nativen Pixelmaßen gezeichnet. Nichts wird neu berechnet, nichts weichgezeichnet — das zusammengefügte Ergebnis ist genauso scharf wie die Vorlagen. Das ist der richtige Modus, um Screenshots aneinanderzusetzen, denn schon ein halbes Pixel Unschärfe fällt bei Text sofort auf.",
        "Was Qualität kostet, ist das Skalieren. Wenn Sie ein Bild auf der freien Arbeitsfläche („Benutzerdefiniert“) vergrößern oder verkleinern oder „Angleichen“ bzw. „Füllen“ wählen, damit alle Bilder gleich groß sind, wird dieses Bild neu berechnet — unvermeidlich und nicht schlimmer als jede andere Größenänderung, aber gut zu wissen, wenn die Alternative nichts gekostet hätte.",
        "Die einzige weitere Qualitätsfrage ist das Exportformat. Wählen Sie PNG oder WEBP, damit alles exakt bleibt, oder JPG, wenn das Ergebnis ein Foto ist und Sie eine kleinere Datei wollen. Enthält das Bild Screenshots oder Text, ist PNG klar die bessere Wahl — die Artefakte von JPG sammeln sich genau an den scharfen Kanten, aus denen Schrift besteht.",
      ],
    },
  ],

  howToTitle: "So fügen Sie Bilder zu einem zusammen",
  steps: [
    { title: "Hochladen", description: "Wählen Sie zwei oder mehr Bilder aus oder ziehen Sie sie per Drag-and-drop in den Arbeitsbereich." },
    { title: "Anordnen und gestalten", description: "Wählen Sie nebeneinander, untereinander oder Raster, ziehen Sie die Miniaturen in die gewünschte Reihenfolge und legen Sie Abstand und Hintergrund fest. Mit „Benutzerdefiniert“ verschieben, drehen und skalieren Sie jedes Bild von Hand." },
    { title: "Zusammenfügen und herunterladen", description: "Klicken Sie auf „Zusammenfügen“ — das kombinierte Bild wird sofort als PNG, JPG oder WEBP heruntergeladen." },
  ],

  features: [
    { icon: "grid_view", title: "Vier Layouts", description: "Kombinieren Sie Fotos nebeneinander, untereinander, im Raster oder frei angeordnet auf einer eigenen Arbeitsfläche." },
    { icon: "open_with", title: "Bearbeitbare Vorschau", description: "Im Modus „Benutzerdefiniert“ ist die Vorschau der Editor — ziehen Sie ein Bild zum Verschieben, eine Ecke zum Skalieren und den oberen Griff zum Drehen, wobei Kanten beim Ziehen einrasten." },
    { icon: "lock", title: "100 % privat", description: "Das Zusammenfügen läuft vollständig mit HTML-Canvas in Ihrem Browser — Ihre Bilder werden nie hochgeladen." },
  ],

  faqs: [
    { q: "Wie setze ich zwei Bilder nebeneinander?", a: "Fügen Sie beide Bilder hinzu, lassen Sie das Layout auf „Nebeneinander“ und klicken Sie auf „Zusammenfügen“. Die Bilder werden in voller Auflösung an ihrer gemeinsamen Kante verbunden, auf Wunsch mit Abstand dazwischen, und das Ergebnis wird als eine PNG-, JPG- oder WEBP-Datei heruntergeladen. Stellen Sie „Bildgrößen“ auf „Angleichen“, wenn beide gleich hoch sein sollen." },
    { q: "Ist das dasselbe wie eine App zum Fotos zusammenfügen?", a: "Ja — „Fotos zusammenfügen“, „Bilder kombinieren“ und „Bilder verbinden“ beschreiben dieselbe Aufgabe. Der Unterschied: Hier muss nichts installiert werden. Es läuft in jedem Browser auf Handy, Tablet oder Computer, ohne Anmeldung und ohne Wasserzeichen auf dem Ergebnis." },
    { q: "Kann ich Bilder auf dem Handy zusammenfügen?", a: "Ja. Öffnen Sie diese Seite in Safari oder Chrome auf dem iPhone oder Android-Gerät, tippen Sie, um Fotos aus Ihrer Galerie auszuwählen, wählen Sie ein Layout und fügen Sie sie zusammen. Auf dem Handy funktioniert untereinander meist am besten, weil ein hohes Bild den Bildschirm im Hochformat füllt." },
    { q: "Wie viele Bilder kann ich zusammenfügen?", a: "So viele Sie möchten — fügen Sie zwei oder mehr hinzu und ordnen Sie sie nebeneinander, untereinander oder im Raster an." },
    { q: "Kann ich die Reihenfolge der Bilder ändern?", a: "Ja. Ziehen Sie eine Miniatur an eine neue Stelle in der Liste oder nutzen Sie die Pfeile nach oben und unten — beides bestimmt die Reihenfolge, in der die Bilder kombiniert werden. Im Modus „Benutzerdefiniert“ legt die Reihenfolge außerdem fest, welches Bild bei Überlappung oben liegt; mit „Nach vorne“ und „Nach hinten“ ändern Sie das." },
    { q: "Kann ich einen transparenten Hintergrund behalten?", a: "Ja. Wählen Sie einen transparenten Hintergrund und exportieren Sie als PNG oder WEBP, damit die Abstände durchsichtig bleiben." },
    { q: "Ist das Tool kostenlos und privat?", a: "Ja. Keine Anmeldung und kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Was passiert, wenn meine Bilder unterschiedlich groß sind?", a: "Standardmäßig behalten sie ihre eigenen Maße, werden an der gemeinsamen Kante ausgerichtet, und übriger Platz erhält die gewählte Hintergrundfarbe. Wenn sie lieber gleich groß sein sollen, stellen Sie „Bildgrößen“ auf „Angleichen“ — dann haben alle Bilder in einer Reihe dieselbe Höhe bzw. in einer Spalte dieselbe Breite. „Füllen“ geht weiter und schneidet alle auf identische Kacheln zu." },
    { q: "Sollte ich horizontal oder vertikal zusammenfügen?", a: "Horizontal für Vorher-nachher-Paare und direkte Vergleiche, weil das Auge nebeneinander leichter vergleicht als untereinander. Vertikal für Abläufe, Schritt-für-Schritt-Anleitungen und alles, was auf dem Handy gelesen wird, wo ein hohes Bild den Bildschirm besser nutzt als ein breites." },
    { q: "Kann ich Abstand zwischen den Bildern einfügen?", a: "Ja — einen Abstand in Ihrer gewählten Hintergrundfarbe. Schon zehn oder zwanzig Pixel machen deutlich, dass es sich um getrennte Bilder handelt und nicht um eine durchgehende Szene. Das ist wichtig bei Vergleichen, bei denen ein nahtloser Übergang irreführend wäre." },
    { q: "Wofür ist das nützlich?", a: "Für Vorher-nachher-Bearbeitungen, Produktfotos aus mehreren Blickwinkeln in einem Angebotsbild, Schritt-für-Schritt-Anleitungen, Screenshot-Folgen für Fehlerberichte oder Dokumentationen, Kontaktbögen und Beiträge in sozialen Netzwerken, die nur ein Bild erlauben, obwohl Sie drei Dinge zeigen möchten." },
    { q: "Kann ich damit eine Collage erstellen?", a: "Ja, eine schlichte: Das Raster-Layout setzt mehrere Fotos in Zeilen und Spalten mit einheitlichem Abstand, und mit „Benutzerdefiniert“ ordnen Sie Bilder frei an, drehen und überlappen sie. Vorlagen mit Stickern oder Rahmen-Designs bietet das Tool nicht — es geht um saubere, schnelle Kombinationen." },
    { q: "Verringert das Zusammenfügen die Qualität?", a: "Nicht in den automatischen Layouts mit „Bildgrößen“ auf „Original“ — dort werden die Bilder in ihren nativen Pixelmaßen gezeichnet, und nichts wird neu berechnet. Wenn Sie ein Bild im Modus „Benutzerdefiniert“ skalieren oder „Angleichen“ bzw. „Füllen“ nutzen, wird es neu berechnet — der übliche kleine Preis jeder Größenänderung. Der Export als JPG kostet etwas mehr; PNG und WEBP übernehmen alles exakt." },
    { q: "Gibt es eine sinnvolle Obergrenze?", a: "Eine feste Grenze gibt es nicht, aber ein sehr langer Streifen ist schwer anzusehen — die meisten Plattformen verkleinern ein breites Bild, bis es passt, sodass zehn nebeneinandergesetzte Bilder am Ende zu klein zum Erkennen sein können. Zwei bis vier Bilder sind in der Praxis ideal." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das Zusammenfügen geschieht vollständig mit HTML-Canvas in Ihrem Browser — nichts wird auf einen Server hochgeladen. Keine Speicherung, keine Auswertung Ihrer Dateien.",

  ui: {
    // MergeTool.tsx — module-scope LAYOUTS
    "Side by side": "Nebeneinander",
    "Stacked": "Untereinander",
    "Grid": "Raster",
    "One row, left to right": "Eine Reihe, von links nach rechts",
    "One column, top to bottom": "Eine Spalte, von oben nach unten",
    "Rows and columns": "Zeilen und Spalten",
    "Move, rotate and resize by hand": "Von Hand verschieben, drehen und skalieren",
    // lib/image/merge CELL_FITS
    "Match": "Angleichen",
    "Fill": "Füllen",
    "Native size, nothing resampled": "Originalgröße, nichts wird neu berechnet",
    "Equal heights in a row, equal widths in a column": "Gleiche Höhe in einer Reihe, gleiche Breite in einer Spalte",
    "Identical tiles, overflow cropped": "Identische Kacheln, Überstand wird abgeschnitten",
    // lib/image/frame ASPECT_PRESETS hints (ratios pass through)
    "Instagram": "Instagram", // i18n-same
    "Portrait": "Hochformat",
    "Widescreen": "Breitbild",
    "Story": "Story", // i18n-same
    "Classic": "Klassisch",
    "DSLR": "DSLR", // i18n-same
    "Print": "Druck",
    // MergeTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Images are still loading — try again in a moment.": "Die Bilder werden noch geladen — versuchen Sie es gleich noch einmal.",
    "Merged 1 image.": "1 Bild zusammengefügt.",
    "Merged {n} images.": "{n} Bilder zusammengefügt.",
    "Merge failed.": "Zusammenfügen fehlgeschlagen.",
    "or drop two or more JPG, PNG or WEBP images here": "oder zwei oder mehr JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "Drag to move, corners to resize, the top handle to rotate. Shift snaps the angle, Alt turns off snapping.":
      "Ziehen zum Verschieben, Ecken zum Skalieren, oberer Griff zum Drehen. Shift rastet den Winkel ein, Alt schaltet das Einrasten aus.",
    "Live preview of the merged image.": "Live-Vorschau des zusammengefügten Bildes.",
    "Clear images": "Bilder entfernen",
    "Files": "Dateien",
    "Merge settings": "Einstellungen zum Zusammenfügen",
    "Merge Settings": "Einstellungen zum Zusammenfügen",
    "Merge": "Zusammenfügen",
    "Merging…": "Wird zusammengefügt…",
    "Images keep their stacking order — use the layer arrows to change which sits on top.":
      "Die Bilder behalten ihre Stapelreihenfolge — mit den Ebenen-Pfeilen ändern Sie, welches oben liegt.",
    "Drag a thumbnail to reorder. A transparent PNG background keeps the gaps see-through.":
      "Ziehen Sie eine Miniatur, um die Reihenfolge zu ändern. Ein transparenter PNG-Hintergrund lässt die Abstände durchsichtig.",
    "Merge & download": "Zusammenfügen und herunterladen",
    "Layout": "Layout", // i18n-same
    "Canvas": "Arbeitsfläche",
    "Fit to content": "An Inhalt anpassen",
    "Re-arrange": "Neu anordnen",
    "Selected image": "Ausgewähltes Bild",
    "Click an image on the canvas to select it. Drag to move, use the corner handles to resize, and the handle above the top edge to rotate. Arrow keys nudge, Shift makes them move further.":
      "Klicken Sie auf ein Bild auf der Arbeitsfläche, um es auszuwählen. Ziehen zum Verschieben, Eckgriffe zum Skalieren, der Griff über der Oberkante zum Drehen. Pfeiltasten verschieben fein, mit Shift weiter.",
    "Bring forward": "Nach vorne",
    "Send back": "Nach hinten",
    "Nothing selected — click an image on the canvas.": "Nichts ausgewählt — klicken Sie auf ein Bild auf der Arbeitsfläche.",
    "Columns": "Spalten",
    "Auto squares the grid off for you.": "„Automatisch“ macht das Raster möglichst quadratisch.",
    "Image sizes": "Bildgrößen",
    "Spacing": "Abstand",
    "Output format": "Ausgabeformat",
  },
};

export default content;
