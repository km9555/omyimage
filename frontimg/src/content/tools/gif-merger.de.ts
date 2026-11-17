import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gifs-zusammenfuegen. Target query: „GIFs zusammenfügen"
 * (Germany, Nov 2026). „GIFs kombinieren" / „GIF verbinden" appear in the
 * body as natural variants.
 */
const content: ToolPageContent = {
  toolId: "gif-merger",
  locale: "de",
  name: "GIFs zusammenfügen",
  tagline:
    "Fügen Sie mehrere animierte GIFs zu einem zusammen: Bringen Sie sie in die richtige Reihenfolge, und sie laufen nacheinander ab, jeder Frame mit seinem eigenen Timing. Kostenlos, direkt im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIFs zusammenfügen – online & kostenlos | oMyImage",
  metaDescription:
    "GIFs zusammenfügen, online und kostenlos: mehrere animierte GIFs nacheinander zu einem GIF kombinieren, Reihenfolge festlegen, Timing behalten. Ohne Upload.",

  intro:
    "Manchmal reicht ein GIF nicht aus: Auf eine Reaktion soll die Antwort folgen, ein Tutorial besteht aus drei kurzen Clips, oder ein Vorher-nachher wirkt als eine Animation besser. Mit „GIFs zusammenfügen“ von oMyImage verbinden Sie sie. Fügen Sie zwei oder mehr GIFs hinzu, bringen Sie sie in die gewünschte Reihenfolge, legen Sie fest, wie GIFs unterschiedlicher Größe eingepasst werden, und kombinieren Sie sie. Das Ergebnis spielt jedes GIF der Reihe nach ab, behält das Timing jedes Frames und läuft als eine einzige Animation in Schleife.",

  sections: [
    {
      heading: "Reihenfolge und Timing",
      id: "order",
      body: [
        "Die GIFs laufen von oben nach unten durch die Liste. Mit den Pfeilen neben jedem GIF schieben Sie es nach oben oder unten, mit dem Kreuz entfernen Sie es, und über „GIFs hinzufügen“ holen Sie weitere dazu. Die Liste zeigt für jedes GIF Größe, Frame-Anzahl und Länge, damit Sie die Abfolge planen können.",
        "Jeder Frame behält seine eigene Dauer, jeder Teil läuft also in seinem ursprünglichen Tempo, Pausen eingeschlossen. Das zusammengefügte GIF wiederholt sich als Ganzes: Wenn das letzte GIF endet, beginnt wieder das erste.",
      ],
    },
    {
      heading: "GIFs unterschiedlicher Größe",
      id: "sizes",
      body: [
        "Ein GIF hat für alle seine Frames eine einzige Größe, also braucht auch das zusammengefügte GIF eine. Wählen Sie die Größe des ersten GIFs, die größte oder die kleinste. GIFs, die bereits diese Größe haben, werden Pixel für Pixel übernommen; die anderen werden passend skaliert.",
        "„Einpassen“ zeigt jeden Frame vollständig und ergänzt Ränder, wo sich die Formen unterscheiden – transparent oder in einer Farbe Ihrer Wahl. „Füllen und zuschneiden“ skaliert jeden Frame so, dass er die ganze Ausgabe bedeckt, und schneidet ab, was übersteht. Es gibt dann keine Ränder, aber die Kanten der abweichend geformten GIFs gehen verloren.",
      ],
    },
    {
      heading: "Farben und Dateigröße",
      id: "colours",
      body: [
        "Ein GIF kann nur 256 Farben gleichzeitig verwenden. Haben die GIFs, die Sie zusammenfügen, wenige gemeinsame Farben und dieselbe Größe, bleiben diese Farben exakt erhalten. Andernfalls wird aus allen eine gemeinsame Palette mit 256 Farben gewählt; bei sehr unterschiedlichen GIFs, etwa einem Zeichentrick und einem Fotoclip, kann dabei etwas Farbdetail verloren gehen.",
        "Die zusammengefügte Datei ist ungefähr so groß wie alle GIFs zusammen. Ist sie für den Zielort zu groß, schicken Sie sie anschließend durch „GIF komprimieren“ oder „GIF Größe ändern“.",
      ],
    },
    {
      heading: "Ideen",
      id: "ideas",
      body: [
        "Machen Sie aus drei kurzen Bildschirmaufnahmen ein Schritt-für-Schritt-Tutorial. Hängen Sie an ein Frage-GIF die Pointe. Setzen Sie einen Vorher- und einen Nachher-Clip in eine Animation. Fügen Sie die Teile eines langen GIFs, das Sie mit „GIF schneiden“ zerlegt haben, in neuer Reihenfolge wieder zusammen. Stellen Sie die besten Momente aus mehreren Reaktions-GIFs zu einem Zusammenschnitt zusammen.",
        "Das Tool verbindet GIFs zeitlich, eines nach dem anderen. Um jeden Teil vorher zu kürzen, verwenden Sie „GIF schneiden“; um das Tempo eines Teils zu ändern, „GIF Geschwindigkeit ändern“ – jeweils vor dem Zusammenfügen.",
      ],
    },
    {
      heading: "Schleifen und Boomerangs",
      id: "loops",
      body: [
        "Das zusammengefügte GIF läuft als eine Animation endlos in Schleife, selbst wenn einer der Teile nur einmal abgespielt werden sollte. Das ermöglicht einen einfachen Trick: Fügen Sie ein GIF mit einer umgekehrten Kopie seiner selbst zusammen, erstellt mit „GIF rückwärts abspielen“, und es läuft erst vorwärts und dann rückwärts. Wer dasselbe GIF zweimal zusammenfügt, verdoppelt seine Länge, ohne das Tempo zu ändern – praktisch, wenn eine Plattform eine Mindestdauer verlangt.",
      ],
    },
    {
      heading: "GIFs kombinieren für Präsentationen und Social Media",
      id: "social",
      body: [
        "Ein einzelnes, zusammengefügtes GIF lässt sich leichter teilen als mehrere Dateien: In einer Präsentation, einem Forenbeitrag oder einer Nachricht läuft die ganze Abfolge in einem Stück, und niemand muss mehrere Anhänge öffnen. Achten Sie dabei auf die Dateigröße – viele Plattformen haben Obergrenzen, und kurze Teile ergeben ein schlankes Ergebnis.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes GIF wird vollständig in Ihrem Browser gelesen und das zusammengefügte GIF dort geschrieben. Nichts wird hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So fügen Sie GIFs zusammen",
  steps: [
    { title: "GIFs hinzufügen", description: "Wählen Sie zwei oder mehr animierte GIFs von Ihrem Computer oder Smartphone aus." },
    { title: "Reihenfolge festlegen", description: "Schieben Sie GIFs nach oben oder unten und wählen Sie dann die Größe und wie andere Größen eingepasst werden." },
    { title: "Zusammenfügen und herunterladen", description: "Klicken Sie auf „GIFs zusammenfügen“, sehen Sie sich das Ergebnis an und laden Sie es herunter." },
  ],

  features: [
    { icon: "layers", title: "Eins nach dem anderen", description: "Jedes GIF läuft der Reihe nach, jeder Frame mit seinem eigenen Timing." },
    { icon: "swap_vert", title: "Beliebige Reihenfolge", description: "GIFs vor dem Zusammenfügen umsortieren, hinzufügen oder entfernen." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser zusammengefügt." },
  ],

  faqs: [
    { q: "Wie füge ich mehrere GIFs zu einem zusammen?", a: "Fügen Sie zwei oder mehr GIFs hinzu, bringen Sie sie in die richtige Reihenfolge und klicken Sie auf „GIFs zusammenfügen“. Im Ergebnis laufen sie nacheinander ab." },
    { q: "Kann ich die Reihenfolge ändern?", a: "Ja. Nutzen Sie die Pfeile nach oben und unten neben jedem GIF." },
    { q: "Behalten die GIFs ihr Tempo?", a: "Ja. Jeder Frame behält seine ursprüngliche Dauer." },
    { q: "Was passiert, wenn die GIFs unterschiedlich groß sind?", a: "Wählen Sie die Ausgabegröße und dann „Einpassen“, um Frames vollständig mit Rändern zu zeigen, oder „Füllen und zuschneiden“, um Ränder zu vermeiden." },
    { q: "Können die Ränder transparent sein?", a: "Ja, standardmäßig. Sie können auch eine Farbe wählen." },
    { q: "Ändern sich die Farben?", a: "Nicht, wenn die GIFs wenige Farben teilen. Sehr unterschiedliche GIFs teilen sich eine Palette mit 256 Farben, was Farben leicht abschwächen kann." },
    { q: "Wie groß wird das zusammengefügte GIF?", a: "Etwa so groß wie alle GIFs zusammen. Mit „GIF komprimieren“ können Sie es anschließend verkleinern." },
    { q: "Kann ich GIFs nebeneinander setzen?", a: "Nein – dieses Tool verbindet GIFs zeitlich, eines nach dem anderen." },
    { q: "Wie viele GIFs kann ich zusammenfügen?", a: "So viele, wie der Speicher Ihres Geräts zulässt; ein paar Dutzend kurze GIFs sind kein Problem." },
    { q: "Werden meine GIFs hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Kann ich ein GIF als Boomerang laufen lassen?", a: "Ja. Erstellen Sie mit „GIF rückwärts abspielen“ eine umgekehrte Kopie und fügen Sie beide hier zusammen." },
  ],

  security:
    "Ihre GIFs werden vollständig in Ihrem Browser zusammengefügt. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  ui: {
    // GifMergerTool.tsx
    "Select GIFs": "GIFs auswählen",
    "or drop two or more GIFs here": "oder zwei oder mehr GIFs hierher ziehen",
    "Please select GIF files.": "Bitte wählen Sie GIF-Dateien aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Add GIFs": "GIFs hinzufügen",
    "Clear all": "Alle entfernen",
    "Remove": "Entfernen",
    "Move up": "Nach oben",
    "Move down": "Nach unten",
    "Add at least two GIFs to merge them.": "Fügen Sie mindestens zwei GIFs hinzu, um sie zusammenzufügen.",
    "Merge settings": "Einstellungen zum Zusammenfügen",
    "Size": "Größe",
    "First GIF": "Erstes GIF",
    "Largest": "Größtes",
    "Smallest": "Kleinstes",
    "GIFs of another size": "GIFs anderer Größe",
    "Fit inside": "Einpassen",
    "Fill and crop": "Füllen und zuschneiden",
    "The whole frame stays visible, with borders where the shapes differ.": "Der ganze Frame bleibt sichtbar, mit Rändern, wo sich die Formen unterscheiden.",
    "The frame fills the output; edges that stick out are cropped.": "Der Frame füllt die Ausgabe; überstehende Kanten werden abgeschnitten.",
    "Transparent background": "Transparenter Hintergrund",
    "Background colour": "Hintergrundfarbe",
    "Merge GIFs": "GIFs zusammenfügen",
    "The GIFs play in the order of the list, each frame with its own timing.": "Die GIFs laufen in der Reihenfolge der Liste ab, jeder Frame mit seinem eigenen Timing.",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Saving…": "Wird gespeichert…",
    "Working… {p}%": "Wird bearbeitet… {p} %",
    "Output: {w} × {h} px": "Ausgabe: {w} × {h} px",
    "Result": "Ergebnis",
    "Download GIF": "GIF herunterladen",
    "{n} frames": "{n} Frames",
    "{s} s": "{s} s", // i18n-same
    "Your files are processed in your browser and never uploaded.": "Ihre Dateien werden in Ihrem Browser verarbeitet und nie hochgeladen.",
  },
};

export default content;
