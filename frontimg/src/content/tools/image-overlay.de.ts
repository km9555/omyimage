import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bilder-ueberlagern.
 *
 * Primary query "Bilder überlagern" (DE); secondary "Bild übereinander legen",
 * "Bild in Bild einfügen". Blend-mode names follow the German Photoshop/GIMP
 * labels (Multiplizieren, Negativ multiplizieren, Ineinanderkopieren …) so
 * they match what German users already know.
 */
const content: ToolPageContent = {
  toolId: "image-overlay",
  locale: "de",
  name: "Bilder überlagern",
  tagline:
    "Legen Sie ein Bild über ein anderes — ziehen Sie es an die richtige Stelle, ändern Sie Größe und Drehung, blenden Sie es mit der Deckkraft aus und mischen Sie es mit Füllmethoden wie Multiplizieren und Negativ multiplizieren ein. Kostenlos, in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bilder überlagern – Bild übereinander legen | oMyImage",
  metaDescription:
    "Bilder überlagern online: Bild übereinander legen, Logo, Textur oder Doppelbelichtung mit Deckkraft und 8 Füllmethoden. Kostenlos, ohne Upload.",

  intro:
    "Wer Bilder überlagert, legt ein Bild über ein anderes und schafft so etwas, das keines allein könnte: ein Logo auf einem Produktfoto, eine Textur über einem Porträt, einen Lichteffekt über einer Landschaft, ein zweites Foto, das für eine Doppelbelichtung ins erste überblendet wird. Mit dem Tool „Bilder überlagern“ von oMyImage legen Sie zwei Ebenen übereinander und erhalten die Regler, auf die es ankommt — Position, Größe, Drehung, Deckkraft und acht Füllmethoden — mit einer Live-Vorschau, auf der Sie das obere Bild herumziehen können. Das Ergebnis wird in der vollen Größe des Hintergrundbildes gespeichert.",

  sections: [
    {
      heading: "Frei platzieren oder alles bedecken",
      id: "fit",
      body: [
        "„Frei platzieren“ setzt das obere Bild genau dorthin, wohin Sie es ziehen, in der Größe und dem Winkel, die Sie einstellen. Die Größe wird als Anteil an der Breite des Hintergrunds gemessen, 50 % sind also immer halb so breit wie der Hintergrund, egal bei welcher Auflösung. Die neun Positionsknöpfe rasten es an einem Rand oder in einer Ecke ein, und mit den Pfeiltasten schieben Sie es pixelweise.",
        "„Alles bedecken“ zieht das obere Bild über den gesamten Hintergrund, behält dabei seine Proportionen und schneidet ab, was übersteht. Das ist die Einstellung für Texturen, Lichteffekte und Doppelbelichtungen, die bis an jeden Rand reichen sollen.",
      ],
    },
    {
      heading: "Füllmethoden erklärt",
      id: "blend",
      body: [
        "„Normal“ zeichnet das obere Bild einfach, abgeschwächt durch die Deckkraft. „Multiplizieren“ dunkelt nur ab: Weiß verschwindet und Schwarz bleibt schwarz — ideal für Unterschriften, Stempel und Strichzeichnungen, die auf weißem Papier eingescannt wurden. „Negativ multiplizieren“ ist das Gegenteil — es hellt nur auf, Schwarz verschwindet also. So werden Lichtlecks, Blendenflecke, Feuer und Sternenhimmel auf schwarzem Hintergrund eingefügt.",
        "„Ineinanderkopieren“ und „Weiches Licht“ verstärken den Kontrast durch das obere Bild hindurch: Helle Bereiche des Hintergrunds werden heller, dunkle dunkler. Weiches Licht ist die sanftere Variante und passt zu Papier, Körnung und Farbtönungen. „Abdunkeln“ und „Aufhellen“ behalten jeweils den dunkleren bzw. helleren Pixel. „Differenz“ zieht ein Bild vom anderen ab und erzeugt einen seltsamen, invertierten Look — und zeigt genau, wo sich zwei fast identische Fotos unterscheiden.",
      ],
    },
    {
      heading: "Eine Doppelbelichtung erstellen",
      id: "double-exposure",
      body: [
        "Nehmen Sie ein Porträt als Hintergrund und eine Landschaft, einen Wald oder eine Skyline darüber. Wählen Sie „Alles bedecken“, stellen Sie die Füllmethode auf „Negativ multiplizieren“ oder „Aufhellen“ und senken Sie die Deckkraft auf 50 bis 80 %, bis das Gesicht durch die Szene scheint. Am besten funktionieren Porträts vor einem schlichten, hellen Hintergrund, weil die Szene den leeren Raum um die Silhouette füllt. Tauschen Sie die Bilder, um zu sehen, welche Reihenfolge besser wirkt.",
      ],
    },
    {
      heading: "Logos, Sticker und Unterschriften",
      id: "logos",
      body: [
        "Ein Logo oder Sticker als PNG mit transparentem Hintergrund liegt ohne Kasten auf dem Foto — ziehen Sie es in eine Ecke, passen Sie die Größe an und senken Sie die Deckkraft, wenn es dezent sein soll. Eine auf weißem Papier fotografierte Unterschrift hat keine Transparenz, aber mit „Multiplizieren“ verschwindet das Weiß und nur die Tinte bleibt.",
        "Um dasselbe Logo auf viele Fotos auf einmal zu setzen, ist „Wasserzeichen einfügen“ schneller: Es bringt ein Logo oder einen Text auf einen ganzen Stapel.",
      ],
    },
    {
      heading: "Texturen und Lichteffekte",
      id: "textures",
      body: [
        "Papier-, Leinwand-, Filmkorn- und Staubtexturen geben einem flachen Digitalbild einen analogen Charakter: Legen Sie die Textur mit „Alles bedecken“ darüber, wählen Sie „Weiches Licht“ oder „Ineinanderkopieren“ und halten Sie die Deckkraft niedrig. Bilder von Regen, Schnee, Bokeh und Lichtlecks gibt es meist auf Schwarz; mit „Negativ multiplizieren“ fällt das Schwarz weg und nur das Licht bleibt.",
      ],
    },
    {
      heading: "Bild im Bild",
      id: "inset",
      body: [
        "Ein kleines zweites Bild in einem großen zeigt Detail und Zusammenhang zugleich: eine Nahaufnahme des Produktetiketts in der Ecke des Gesamtbildes, ein Kartenausschnitt auf einem Reisefoto, ein Vorher-Foto im Nachher-Foto. Bleiben Sie bei „Normal“ und voller Deckkraft, stellen Sie die Größe auf etwa 25–35 % und rasten Sie das Bild in einer Ecke ein. Ein paar Grad Drehung machen daraus einen lässig angehefteten Schnappschuss.",
      ],
    },
    {
      heading: "Größe, Format und Transparenz",
      id: "output",
      body: [
        "Das Ergebnis hat immer die Größe des Hintergrundbildes; ein oberes Bild, das größer als der Hintergrund ist, wird an den Rändern einfach abgeschnitten. Gespeichert wird im Format des Hintergrunds, sofern Sie kein anderes wählen. PNG und WEBP behalten die Transparenz des Hintergrunds; JPG hat keine, transparente Bereiche werden also mit der Farbe gefüllt, die Sie wählen.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Beide Bilder werden vollständig in Ihrem Browser kombiniert. Nichts wird auf einen Server hochgeladen, und nichts wird aufbewahrt, nachdem Sie die Seite schließen.",
      ],
    },
  ],

  howToTitle: "So überlagern Sie Bilder",
  steps: [
    { title: "Hintergrund hinzufügen", description: "Wählen Sie das untere Bild aus — oder legen Sie beide Bilder auf einmal ab." },
    { title: "Oberes Bild hinzufügen", description: "Ziehen Sie es an die richtige Stelle und legen Sie dann Größe, Drehung, Deckkraft und Füllmethode fest." },
    { title: "Speichern", description: "Klicken Sie auf „Bild speichern“, um das Ergebnis in voller Größe herunterzuladen." },
  ],

  features: [
    { icon: "layers", title: "Acht Füllmethoden", description: "Normal, Multiplizieren, Negativ multiplizieren, Ineinanderkopieren, Weiches Licht, Abdunkeln, Aufhellen und Differenz." },
    { icon: "opacity", title: "Deckkraft und Platzierung", description: "Ziehen, skalieren, drehen und blenden Sie das obere Bild mit Live-Vorschau." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser kombiniert." },
  ],

  faqs: [
    { q: "Wie lege ich ein Bild über ein anderes?", a: "Fügen Sie den Hintergrund hinzu, dann das obere Bild, ziehen Sie es an die richtige Stelle und klicken Sie auf „Bild speichern“." },
    { q: "Wie mache ich das obere Bild durchsichtig?", a: "Senken Sie den Regler „Deckkraft“. Bei 50 % sind beide Bilder gleich stark zu sehen." },
    { q: "Wie entferne ich den weißen Hintergrund einer Unterschrift oder eines Logos?", a: "Stellen Sie die Füllmethode auf „Multiplizieren“ — Weiß verschwindet, die dunklen Linien bleiben." },
    { q: "Wie entferne ich den schwarzen Hintergrund eines Lichteffekts?", a: "Stellen Sie die Füllmethode auf „Negativ multiplizieren“ — Schwarz verschwindet, das Licht bleibt." },
    { q: "Wie erstelle ich eine Doppelbelichtung?", a: "Porträt als Hintergrund, Landschaft darüber, „Alles bedecken“, „Negativ multiplizieren“ oder „Aufhellen“ und 50–80 % Deckkraft." },
    { q: "Kann ich das obere Bild drehen?", a: "Ja, um bis zu 180 Grad in jede Richtung." },
    { q: "Wie groß ist das Ergebnis?", a: "Immer so groß wie das Hintergrundbild." },
    { q: "Kann ich die beiden Bilder tauschen?", a: "Ja. „Bilder tauschen“ legt das obere Bild nach unten und den Hintergrund nach oben." },
    { q: "Bleibt ein transparentes PNG transparent?", a: "Ja. Durch transparente Stellen des oberen Bildes ist der Hintergrund zu sehen." },
    { q: "Kann ich ein Logo auf viele Fotos auf einmal legen?", a: "Nutzen Sie dafür „Wasserzeichen einfügen“ — es bringt dasselbe Logo auf einen ganzen Stapel." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das am Handy?", a: "Ja. Ziehen Sie mit dem Finger, um das obere Bild zu verschieben." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Limits." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser kombiniert. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // ImageOverlayTool.tsx — files
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "or drop the background image here — or both images at once":
      "oder das Hintergrundbild hier ablegen — oder beide Bilder auf einmal",
    "Background image": "Hintergrundbild",
    "Overlay image": "Oberes Bild",
    "Not added yet": "Noch nicht hinzugefügt",
    "Add": "Hinzufügen",
    "Replace": "Ersetzen",
    "Swap images": "Bilder tauschen",
    "Clear files": "Dateien leeren",
    "Add the image to put on top": "Fügen Sie das Bild hinzu, das oben liegen soll",
    "A photo, logo, texture or PNG with transparency — click or drop it here.":
      "Ein Foto, Logo, eine Textur oder ein PNG mit Transparenz — hier klicken oder ablegen.",
    "Drag it on the preview, then set its size and angle.":
      "Ziehen Sie es in der Vorschau an seinen Platz und legen Sie dann Größe und Winkel fest.",
    // preview
    "Preview": "Vorschau",
    "Preview — drag, or use the arrow keys, to move the overlay":
      "Vorschau — ziehen oder die Pfeiltasten verwenden, um das obere Bild zu verschieben",
    "Drag the overlay to move it.": "Ziehen Sie das obere Bild, um es zu verschieben.",
    "Hold to see the original": "Gedrückt halten, um das Original zu sehen",
    // settings
    "Settings": "Einstellungen",
    "Fit": "Einpassung",
    "Place freely": "Frei platzieren",
    "Cover everything": "Alles bedecken",
    "Covers the whole picture and trims what sticks out — for textures, light leaks and double exposures.":
      "Bedeckt das ganze Bild und schneidet ab, was übersteht — für Texturen, Lichtlecks und Doppelbelichtungen.",
    "Position": "Position", // i18n-same
    "Top left": "Oben links",
    "Top center": "Oben Mitte",
    "Top right": "Oben rechts",
    "Middle left": "Mitte links",
    "Center": "Mitte",
    "Middle right": "Mitte rechts",
    "Bottom left": "Unten links",
    "Bottom center": "Unten Mitte",
    "Bottom right": "Unten rechts",
    "Size": "Größe",
    "Its width as a share of the background's width.": "Seine Breite als Anteil an der Breite des Hintergrunds.",
    "Rotation": "Drehung",
    "Opacity": "Deckkraft",
    "Blend mode": "Füllmethode",
    "Normal": "Normal", // i18n-same — the blend mode's name in German editors
    "Draws the image as it is.": "Zeichnet das Bild so, wie es ist.",
    "Multiply": "Multiplizieren",
    "Only darkens — white disappears. Good for signatures, stamps and line art.":
      "Dunkelt nur ab — Weiß verschwindet. Gut für Unterschriften, Stempel und Strichzeichnungen.",
    "Screen": "Negativ multiplizieren",
    "Only lightens — black disappears. Good for light leaks, flares, fire and stars.":
      "Hellt nur auf — Schwarz verschwindet. Gut für Lichtlecks, Blendenflecke, Feuer und Sterne.",
    "Overlay": "Ineinanderkopieren",
    "Boosts contrast: lights get lighter and darks darker.":
      "Verstärkt den Kontrast: Helles wird heller, Dunkles dunkler.",
    "Soft light": "Weiches Licht",
    "A gentler overlay — for textures and colour tints.":
      "Eine sanftere Überlagerung — für Texturen und Farbtönungen.",
    "Darken": "Abdunkeln",
    "Keeps whichever pixel is darker.": "Behält jeweils den dunkleren Pixel.",
    "Lighten": "Aufhellen",
    "Keeps whichever pixel is lighter.": "Behält jeweils den helleren Pixel.",
    "Difference": "Differenz",
    "Subtracts the colours — an inverted, artistic look.":
      "Zieht die Farben voneinander ab — ein invertierter, künstlerischer Look.",
    // output
    "Output format": "Ausgabeformat",
    "Same as original": "Wie Original",
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    "The result is the size of the background image.": "Das Ergebnis hat die Größe des Hintergrundbildes.",
    "Save image": "Bild speichern",
    "Working…": "Wird bearbeitet…",
    "Done — 1 image saved.": "Fertig — 1 Bild gespeichert.",
    "Processing failed.": "Verarbeitung fehlgeschlagen.",
    "Your images are processed in your browser and never uploaded.":
      "Ihre Bilder werden in Ihrem Browser verarbeitet und nie hochgeladen.",
  },
};

export default content;
