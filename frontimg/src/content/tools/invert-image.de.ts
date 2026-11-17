import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-invertieren. Target query: „Bild invertieren"
 * (720/mo, Germany, Nov 2026); secondary „Farben invertieren" and „Bild
 * negativ". The ui block is shared with pixelate-image, image-brightness,
 * glitch-effect and round-corners, which import it from here.
 */
const content: ToolPageContent = {
  toolId: "invert-image",
  locale: "de",
  name: "Bild invertieren",
  tagline:
    "Invertieren Sie die Farben jedes Fotos – als klassisches Negativ oder als smarte Umkehrung, die Hell und Dunkel tauscht, die Farben aber behält. Viele Bilder auf einmal. Kostenlos, direkt im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild invertieren – Farben umkehren, kostenlos | oMyImage",
  metaDescription:
    "Bild invertieren online und kostenlos: Farben invertieren wie ein Negativ oder Hell und Dunkel tauschen wie im Dunkelmodus. JPG, PNG, WebP, ohne Upload.",

  intro:
    "Ein Bild zu invertieren heißt, jede Farbe in ihr Gegenteil zu verwandeln: Schwarz wird Weiß, Blau wird Orange, und ein Foto sieht aus wie ein Filmnegativ. „Bild invertieren“ von oMyImage erledigt das mit einem Klick für JPG-, PNG- und WebP-Dateien und bietet einen zweiten Modus, der den meisten Tools fehlt: „Smart invertieren“ tauscht Hell und Dunkel, behält aber den Farbton jeder Farbe – so wie der Dunkelmodus eines Smartphones. Fügen Sie ein Bild oder einen ganzen Stapel hinzu, beobachten Sie die Live-Vorschau, halten Sie die Taste gedrückt, um mit dem Original zu vergleichen, und laden Sie das Ergebnis herunter.",

  sections: [
    {
      heading: "Negativ oder smart invertieren",
      id: "modes",
      body: [
        "„Negativ“ kehrt jeden Farbkanal um: Jeder Wert wird zu 255 minus sich selbst. Weiß wird Schwarz, Rot wird Cyan, Grün wird Magenta, und Hauttöne werden blaugrau – der Look eines Filmnegativs oder Röntgenbilds. Invertieren Sie das Ergebnis erneut, erhalten Sie exakt das Original zurück.",
        "„Smart invertieren“ kehrt nur die Helligkeit um. Dunkle Bereiche werden hell und helle dunkel, aber Rot bleibt Rot und Blau bleibt Blau. Damit ist dieser Modus die richtige Wahl, um aus einem weißen Screenshot oder Dokument eine dunkle Version zu machen, ohne dass die Farben seltsam wirken – oder für eine düstere, nächtliche Variante eines Fotos.",
      ],
    },
    {
      heading: "Wofür das nützlich ist",
      id: "uses",
      body: [
        "Erstellen Sie eine Dunkelmodus-Version eines Screenshots, Diagramms oder einer Folie, damit sie sich angenehm in eine dunkle Website oder Präsentation einfügt. Kehren Sie ein Bild mit schwarzem Hintergrund vor dem Drucken in Weiß um, um Tinte und Toner zu sparen. Verwandeln Sie ein eingescanntes Schwarz-Weiß-Negativ zurück in ein Positiv. Gestalten Sie auffällige Kunst, Poster und Profilbilder im invertierten Look.",
        "Designer invertieren Bilder außerdem, um eine Komposition zu prüfen: Sind die vertrauten Farben weg, fallen Probleme mit Balance und Kontrast leichter auf.",
      ],
    },
    {
      heading: "Gescannte Filmnegative",
      id: "negatives",
      body: [
        "Schwarz-Weiß-Negative lassen sich sauber in Positive umkehren. Farbnegative sind kniffliger: Der Film hat eine orangefarbene Grundschicht, deshalb hat eine reine Umkehrung einen starken Blaustich. Invertieren Sie zuerst, hellen Sie das Bild dann mit „Bild aufhellen“ auf und senken Sie die Sättigung – oder wandeln Sie es mit „Bild schwarz weiß“ um, wenn Farbe keine Rolle spielt.",
      ],
    },
    {
      heading: "Transparenz und Formate",
      id: "formats",
      body: [
        "Nur die Farben werden invertiert; die Transparenz bleibt genau, wie sie war. Ein Logo auf transparentem Hintergrund bleibt also ein Logo auf transparentem Hintergrund. PNG und WebP behalten diese Transparenz; JPG kennt keine, deshalb werden transparente Bereiche mit der gewählten Hintergrundfarbe gefüllt.",
        "Die Ausgabe behält das Originalformat, sofern Sie kein anderes wählen. PNG speichert die invertierten Pixel exakt; JPG und WebP verwenden die Qualitätseinstellung, die Sie erhöhen können, wenn feine Details wichtig sind.",
      ],
    },
    {
      heading: "Viele Bilder auf einmal",
      id: "batch",
      body: [
        "Fügen Sie so viele Bilder hinzu, wie Sie möchten. Die Vorschau zeigt das erste, und derselbe Modus wird auf alle angewendet, sobald Sie auf „Farben invertieren“ klicken. Ein einzelnes Bild wird direkt heruntergeladen, mehrere kommen als eine ZIP-Datei. Jede Datei in der Liste bekommt nach der Bearbeitung außerdem einen eigenen Download-Button.",
      ],
    },
    {
      heading: "Logos und Icons invertieren",
      id: "logos",
      body: [
        "Ein dunkles Logo, das auf einer dunklen Website verschwindet, wird nach dem Invertieren hell – solange es einfarbig dunkel ist. Mehrfarbige Logos ändern dabei auch ihre Farben; hier passt „Smart invertieren“, das die Farbtöne behält, oft besser. Prüfen Sie die Vorschau vor dem Herunterladen vor dem Hintergrund, auf dem das Logo später steht.",
      ],
    },
    {
      heading: "Bild negativ machen: Farben invertieren in der Praxis",
      id: "negative-practice",
      body: [
        "Wer im Netz nach „Bild negativ“ sucht, meint meist genau den Modus „Negativ“: ein Foto, das wie ein entwickelter Filmstreifen aussieht. Für Plakate, Plattencover und Kunstprojekte ist das ein schneller Effekt mit starker Wirkung. Für Screenshots und Dokumente ist „Smart invertieren“ fast immer die bessere Wahl, weil Markierungen, Links und Diagrammfarben erkennbar bleiben.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes Bild wird vollständig in Ihrem Browser invertiert. Nichts wird auf einen Server hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So invertieren Sie ein Bild",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WebP-Bilder aus." },
    { title: "Modus wählen", description: "„Negativ“ für das echte Gegenteil, „Smart invertieren“, um die Farbtöne zu behalten." },
    { title: "Invertieren und herunterladen", description: "Klicken Sie auf „Farben invertieren“, um das Bild herunterzuladen – oder eine ZIP-Datei bei mehreren." },
  ],

  features: [
    { icon: "dark_mode", title: "Zwei Arten der Umkehrung", description: "Ein vollständiges Negativ oder Hell und Dunkel getauscht bei gleichen Farbtönen." },
    { icon: "visibility", title: "Live-Vorschau", description: "Sehen Sie das Ergebnis sofort und halten Sie gedrückt, um mit dem Original zu vergleichen." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser invertiert." },
  ],

  faqs: [
    { q: "Wie invertiere ich die Farben eines Bildes?", a: "Fügen Sie das Bild hinzu, lassen Sie „Negativ“ ausgewählt und klicken Sie auf „Farben invertieren“. Das invertierte Bild wird sofort heruntergeladen." },
    { q: "Was ist der Unterschied zwischen „Negativ“ und „Smart invertieren“?", a: "„Negativ“ verwandelt jede Farbe in ihr Gegenteil. „Smart invertieren“ tauscht nur Hell und Dunkel, die Farben behalten ihren Farbton." },
    { q: "Kann ich einen Screenshot im Dunkelmodus erstellen?", a: "Ja. „Smart invertieren“ macht einen weißen Screenshot dunkel, während farbige Elemente erkennbar bleiben." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Nur die Farben ändern sich; speichern Sie als PNG oder WebP, um transparente Bereiche zu behalten." },
    { q: "Kann ich mehrere Bilder auf einmal invertieren?", a: "Ja. Fügen Sie alle hinzu; sie werden zusammen als ZIP-Datei heruntergeladen." },
    { q: "Bekomme ich das Original zurück?", a: "Ein erneutes Invertieren im Modus „Negativ“ stellt es wieder her. Für eine verlustfreie Hin- und Rückumwandlung speichern Sie als PNG." },
    { q: "Kann ich ein Filmnegativ in ein Foto verwandeln?", a: "Bei Schwarz-Weiß-Negativen ja. Farbnegative brauchen danach noch eine kleine Farbkorrektur." },
    { q: "Welche Formate funktionieren?", a: "JPG, PNG und WebP als Eingabe; als Ausgabe dasselbe Format oder eines Ihrer Wahl." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Verringert sich die Qualität?", a: "PNG ist exakt. JPG und WebP werden mit der gewählten Qualität neu gespeichert." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Ist Bild invertieren dasselbe wie Bild spiegeln?", a: "Nein. Invertieren kehrt die Farben um, Spiegeln vertauscht links und rechts. Dafür gibt es „Bild spiegeln“." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser invertiert. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // ImageFilterTool.tsx — shared with pixelate-image, image-brightness,
    // glitch-effect and round-corners, whose modules reuse this block.
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WebP-Bilder hierher ziehen",
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Clear files": "Dateien entfernen",
    "Remove": "Entfernen",
    "Settings": "Einstellungen",
    "Preview": "Vorschau",
    "Live preview of": "Live-Vorschau von",
    "— applied to all {n} images.": "– wird auf alle {n} Bilder angewendet.",
    "Hold to see the original": "Gedrückt halten für das Original",
    "Output format": "Ausgabeformat",
    "Same as original": "Wie das Original",
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    "Working…": "Wird bearbeitet…",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "done": "fertig",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Done — 1 image saved.": "Fertig – 1 Bild gespeichert.",
    "Done — {n} images saved.": "Fertig – {n} Bilder gespeichert.",
    "Your images are processed in your browser and never uploaded.": "Ihre Bilder werden in Ihrem Browser verarbeitet und nie hochgeladen.",
    "Reset": "Zurücksetzen",
    // invert
    "Invert colours": "Farben invertieren",
    "Invert": "Invertieren",
    "Negative": "Negativ",
    "Smart invert": "Smart invertieren",
    "Every colour becomes its opposite, like a film negative.": "Jede Farbe wird zu ihrem Gegenteil, wie bei einem Filmnegativ.",
    "Light and dark swap but colours keep their hue — a dark-mode look.": "Hell und Dunkel tauschen, die Farben behalten ihren Farbton – ein Dunkelmodus-Look.",
    // pixelate
    "Pixelate image": "Bild verpixeln",
    "Block size": "Blockgröße",
    "About {n} blocks along the longer side.": "Etwa {n} Blöcke entlang der längeren Seite.",
    // brightness
    "Apply adjustments": "Anpassungen übernehmen",
    "Brightness": "Helligkeit",
    "Contrast": "Kontrast",
    "Saturation": "Sättigung",
    // glitch
    "Apply glitch": "Glitch anwenden",
    "Strength": "Stärke",
    "Colour split": "Farbversatz",
    "Shifted slices": "Verschobene Streifen",
    "Scan lines": "Scanlines",
    "Shuffle the slices": "Streifen neu mischen",
    // round corners
    "Round the corners": "Ecken abrunden",
    "Corner radius": "Eckenradius",
    "A share of the shorter side. 50% makes a pill, or a circle for square images.": "Anteil der kürzeren Seite. 50 % ergibt eine Pillenform, bei quadratischen Bildern einen Kreis.",
    "Corners": "Ecken",
    "Top left": "Oben links",
    "Top right": "Oben rechts",
    "Bottom left": "Unten links",
    "Bottom right": "Unten rechts",
    "Corner background": "Hintergrund der Ecken",
    "JPG has no transparency, so the corners are filled with the background colour.": "JPG kennt keine Transparenz, daher werden die Ecken mit der Hintergrundfarbe gefüllt.",
  },
};

export default content;
