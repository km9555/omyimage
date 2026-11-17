import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-in-pdf-umwandeln. Structure lives in ToolPageShell.
 *
 * Head term "Bild in PDF umwandeln" (27.1K/mo); "JPG in PDF umwandeln"
 * (27.1K) is equally big and goes into the metaTitle, intro and a section
 * heading; "Bilder in PDF" (12.1K), "Foto in PDF" and "PNG in PDF" live in the
 * intro and FAQs. German submission cases (Bewerbung, Behörden, Krankenkasse,
 * Steuererklärung) replace the English examples; DIN A4 is the default sheet.
 *
 * Paper formats stay as they are (A4, Letter, Legal — conversion.md §5);
 * PAGE_SIZES, ORIENTATIONS, PER_IMAGE and FIT_LABELS are module scope, keys
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "image-to-pdf",
  locale: "de",
  name: "Bild in PDF umwandeln",
  tagline:
    "Wandeln Sie JPG-, PNG- und WEBP-Bilder online in ein einziges PDF um — Seiten sortieren, Seitenformat, Ausrichtung, Layout und Ränder wählen. Kostenlos, schnell und 100 % privat im Browser.",
  category: { id: "convert", label: "Umwandeln" },
  variantsHeading: "In ein PDF unter einer Größengrenze umwandeln",

  metaTitle: "Bild in PDF umwandeln – JPG in PDF, kostenlos & online",
  metaDescription:
    "Bild in PDF umwandeln: mehrere Fotos als JPG, PNG oder WEBP zu einem PDF zusammenfügen, sortieren, in A4 oder Bildgröße. Kostenlos, ohne Anmeldung, im Browser.",

  intro:
    "Sie wollen mehrere Fotos oder Scans als ein einziges Dokument verschicken? Mit dem Tool „Bild in PDF umwandeln“ von oMyImage fassen Sie JPG-, PNG- und WEBP-Bilder zu einem PDF zusammen — ob Sie ein einzelnes Foto in PDF umwandeln oder viele Bilder in ein PDF packen. Sortieren Sie die Seiten, passen Sie jede Seite an ihr Bild an oder wählen Sie A4, Letter, Legal, A3 oder A5, platzieren Sie bis zu neun Bilder pro Seite und legen Sie Einpassung, Rand und Hintergrund fest. Das PDF wird komplett in Ihrem Browser erstellt, Ihre Bilder bleiben also privat.",

  sections: [
    {
      heading: "Warum Bilder überhaupt in ein PDF gehören",
      id: "why",
      body: [
        "Ein PDF macht aus einem Ordner loser Dateien ein Dokument mit fester Reihenfolge und vorhersehbarem Aussehen. Das zählt immer dann, wenn etwas eingereicht und nicht nur geteilt wird: Bewerbungen, Reisekostenabrechnungen, Unterlagen für die Krankenkasse oder Versicherung, Belege für die Steuererklärung, Hausarbeiten und Behördenanträge werden fast immer als ein einziges PDF erwartet, und ein ZIP mit JPGs wird oft gar nicht angenommen.",
        "Es löst außerdem ein Reihenfolgeproblem. Bilder als einzelne Anhänge kommen in der Reihenfolge an, die dem E-Mail-Programm gerade passt, und Dateimanager sortieren „IMG_10“ vor „IMG_2“. Ein PDF legt die Abfolge dauerhaft fest, sodass Ihr Gegenüber die Seiten in der beabsichtigten Reihenfolge liest.",
        "Und schließlich druckt ein PDF berechenbar. Seitenformat, Ausrichtung und Ränder werden beim Erstellen des Dokuments festgelegt, statt im Druckdialog ausgehandelt zu werden, den der Empfänger zufällig öffnet.",
      ],
    },
    {
      heading: "JPG in PDF umwandeln: Seitenformat, Ausrichtung und Einpassung",
      id: "layout",
      body: [
        "A4 ist fast überall außerhalb Nordamerikas der Standard — in Deutschland, Österreich und der Schweiz ohnehin. Letter ist etwas breiter und kürzer und das Standardformat in den USA. Wer das Format wählt, das der Drucker des Empfängers erwartet, vermeidet das Skalieren und Abschneiden, das passiert, wenn ein Letter-Dokument auf ein A4-Fach trifft.",
        "„An Bild anpassen“ richtet jede Seite stattdessen nach dem Bild aus — die richtige Wahl für Dokumente, die nur am Bildschirm gelesen werden, für Fotosammlungen und für alles mit gemischter Ausrichtung. So entfallen die weißen Streifen, die entstehen, wenn ein breites Foto mittig auf eine hohe Seite gesetzt wird. Die automatische Ausrichtung ist der Mittelweg: Sie behält ein Standardformat, dreht aber jede Seite passend zu ihrem Bild, sodass Querformatfotos nicht mehr in Balken stecken.",
        "Die Einpassung entscheidet, was passiert, wenn Bild und Seite trotzdem nicht zusammenpassen. „Einpassen“ zeigt alles und nimmt leere Ränder in Kauf; „Füllen“ füllt das Blatt randlos und schneidet Überstehendes ab, was zu randlosen Fotoseiten passt; „Strecken“ erzwingt eine exakte Passform und ist nur für Bilder mit bereits ähnlichen Proportionen gedacht, weil es alles andere sichtbar verzerrt.",
        "Mehrere Bilder pro Seite machen aus demselben Tool einen Kontaktbogen oder ein Handout. Bei 2 Bildern wird entlang der langen Seitenkante geteilt, 4, 6 und 9 ergeben ein Raster in Lesereihenfolge — und der Rand wird dabei auch zum Abstand zwischen den Zellen, nicht nur zum Rahmen außen herum.",
      ],
    },
    {
      heading: "Die Dateigröße im Rahmen halten",
      id: "size",
      body: [
        "Das PDF ist ungefähr so groß wie die Bilder, die Sie hineinlegen — sie werden unverändert und ohne erneute Komprimierung eingebettet. Ein Dokument aus zwanzig Handyfotos mit je 12 Megapixeln kommt also schnell auf mehrere Dutzend Megabyte und liegt damit meist weit über dem Anhangslimit des Portals, bei dem Sie es einreichen.",
        "Die Lösung liegt vorher. Verkleinern Sie die Bilder auf etwa 1500–2000 Pixel an der langen Kante — mehr als genug zum Lesen am Bildschirm und für normale Ausdrucke — und komprimieren Sie sie, bevor Sie das PDF erstellen. Bei abfotografierten Textdokumenten halbiert eine Umwandlung in Graustufen die Größe oft noch einmal, ohne die Lesbarkeit zu beeinträchtigen.",
      ],
    },
    {
      heading: "Alles passiert in Ihrem Browser",
      id: "privacy",
      body: [
        "Das PDF wird mit einer JavaScript-PDF-Bibliothek auf Ihrem eigenen Gerät zusammengesetzt, die Bilder werden also nie hochgeladen. Das ist gut zu wissen, denn hier landen typischerweise Reisepässe, Kontoauszüge, Arztbriefe, Verträge und Ausweisdokumente — genau die Art von Unterlagen, die nicht über fremde Server laufen sollte.",
        "Eine praktische Folge: Sobald die Seite geladen ist, funktioniert das Tool auch offline, und sehr große Stapel sind nur durch den Arbeitsspeicher Ihres Geräts begrenzt, nicht durch ein Upload-Limit.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie Bilder in ein PDF um",
  steps: [
    { title: "Hochladen", description: "Wählen Sie Ihre Bilder aus oder ziehen Sie sie per Drag-and-drop in den Arbeitsbereich." },
    { title: "Anordnen und einrichten", description: "Sortieren Sie die Seiten mit den Pfeilen und wählen Sie dann Seitenformat, Ausrichtung, Bilder pro Seite, Einpassung, Rand und Hintergrund." },
    { title: "PDF erstellen", description: "Klicken Sie auf „PDF erstellen“, um ein einziges Dokument herunterzuladen, genau so aufgebaut, wie Sie es eingestellt haben." },
  ],

  features: [
    { icon: "reorder", title: "Seiten sortieren", description: "Bringen Sie Ihre Bilder vor dem Export mit einfachen Auf- und Ab-Pfeilen in die gewünschte Reihenfolge." },
    { icon: "description", title: "Volle Kontrolle über die Seite", description: "Passen Sie jede Seite an ihr Bild an oder nutzen Sie A4, Letter, Legal, A3 oder A5 mit automatischer Ausrichtung, Hoch- oder Querformat und einem Rand, den Sie in Punkt festlegen." },
    { icon: "grid_view", title: "Mehrere Bilder pro Seite", description: "Platzieren Sie 1, 2, 4, 6 oder 9 Bilder pro Seite und wählen Sie, ob jedes eingepasst, zum Füllen zugeschnitten oder gestreckt wird." },
    { icon: "lock", title: "100 % privat", description: "Das PDF wird vollständig in Ihrem Browser erstellt — Ihre Bilder werden nie hochgeladen." },
  ],

  faqs: [
    { q: "Kann ich viele Bilder zu einem PDF zusammenfügen?", a: "Ja. Fügen Sie so viele Bilder hinzu, wie Sie möchten, und ordnen Sie sie in der gewünschten Reihenfolge an. Standardmäßig wird jedes Bild zu einer eigenen Seite, Sie können aber auch 2, 4, 6 oder 9 pro Seite platzieren." },
    { q: "Welche Bildformate werden unterstützt?", a: "JPG, PNG, WEBP, GIF und BMP. Die Transparenz von PNGs bleibt erhalten, sodass der gewählte Seitenhintergrund durchscheint — oder auch gar kein Hintergrund." },
    { q: "Wie kann ich ein PNG in PDF umwandeln?", a: "Genauso wie ein JPG: PNG-Datei hochladen, Seitenformat wählen und auf „PDF erstellen“ klicken. PNGs werden verlustfrei eingebettet, Screenshots und Grafiken bleiben also gestochen scharf." },
    { q: "Kann ich A4 oder Letter wählen?", a: "Ja — A4, Letter, Legal, A3 und A5, jeweils im Hochformat, Querformat oder automatisch (dann richtet sich die Seite nach der Form des Bildes). Oder Sie wählen „An Bild anpassen“, damit jede Seite genau so groß ist wie ihr Bild." },
    { q: "Was bewirken Einpassen, Füllen und Strecken?", a: "„Einpassen“ setzt das ganze Bild auf die Seite und lässt freien Raum, wo die Formen nicht übereinstimmen. „Füllen“ füllt die Seite vollständig und schneidet ab, was übersteht. „Strecken“ verzerrt das Bild, bis es die Seite exakt füllt — nur sinnvoll, wenn die Seitenverhältnisse ohnehin ähnlich sind." },
    { q: "Verlieren meine Bilder beim Erstellen des PDFs an Qualität?", a: "Nein. JPG- und PNG-Dateien werden unverändert und ohne erneute Komprimierung eingebettet, die Seiten enthalten also Ihre Originalpixel. Einzige Ausnahme ist ein Foto mit EXIF-Drehung, das neu gespeichert werden muss, damit es richtig herum erscheint." },
    { q: "Werden meine Bilder hochgeladen?", a: "Nein. Das PDF wird lokal in Ihrem Browser erstellt, Ihre Bilder verlassen Ihr Gerät nie." },
    { q: "Ist das Tool kostenlos?", a: "Ja, vollständig kostenlos — ohne Wasserzeichen und ohne Anmeldung." },
    { q: "Welches Seitenformat sollte ich wählen?", a: "A4 für alles, was in Deutschland, Österreich oder der Schweiz gedruckt oder eingereicht wird, Letter für den Druck in den USA und „An Bild anpassen“, wenn das PDF nur am Bildschirm gelesen wird. So vermeiden Sie die weißen Ränder, die entstehen, wenn ein Querformatfoto auf eine Hochformatseite gesetzt wird." },
    { q: "Kann ich die Reihenfolge der Seiten bestimmen?", a: "Ja — die Bilder werden in der Reihenfolge der Liste platziert, und Sie können sie vor dem Erstellen umsortieren. Das ist vor allem wichtig, wenn Ihr Dateimanager sie als Text sortiert hat und deshalb „seite10“ vor „seite2“ steht." },
    { q: "Wird das PDF viel größer als meine Bilder?", a: "Nur geringfügig. Die Bilder werden weitgehend unverändert eingebettet, das PDF ist also ungefähr die Summe Ihrer Dateien plus etwas Strukturdaten. Ist das Ergebnis zu groß, komprimieren oder verkleinern Sie die Bilder vorher — ein PDF aus 4000-Pixel-Fotos ist riesig und zum Lesen am Bildschirm völlig unnötig." },
    { q: "Kann ich aus Handyfotos von Dokumenten ein PDF machen?", a: "Ja, das ist einer der häufigsten Anwendungsfälle. Für das beste Ergebnis fotografieren Sie jede Seite gerade von oben bei gleichmäßigem Licht, schneiden die Umgebung vorher weg und wandeln die Bilder eventuell mit dem Schwarz-Weiß-Tool um — ein Dokument, das wie gescannt aussieht, ist viel kleiner als ein Farbfoto und oft besser lesbar." },
    { q: "Ist der Text im PDF durchsuchbar?", a: "Nein. Die Seiten sind Bilder, das PDF enthält also Bilder von Text, nicht den Text selbst. Wenn Sie die Wörter durchsuchen oder kopieren möchten, lassen Sie die Bilder vorher durch das Tool „Bild in Text umwandeln“ laufen — es extrahiert den Text, den Sie dann in ein Dokument einfügen können." },
    { q: "Das Portal erlaubt nur PDFs bis 2 MB — was kann ich tun?", a: "Nutzen Sie die Variante mit Größengrenze: Dort geben Sie die maximale PDF-Größe in KB oder MB ein, und die Bilder werden nur so weit komprimiert, wie nötig ist, damit das ganze PDF passt. Alternativ verkleinern Sie die Bilder vorher auf etwa 1500 Pixel an der langen Kante." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das PDF wird vollständig in Ihrem Browser erstellt — nichts wird auf einen Server hochgeladen. Keine Speicherung, keine Auswertung Ihrer Dateien.",

  ui: {
    // ImageToPdfTool.tsx + PagePreview.tsx
    "or drop JPG, PNG, WEBP or GIF images here": "oder JPG-, PNG-, WEBP- oder GIF-Bilder hier ablegen",
    "Created a PDF with 1 page.": "PDF mit 1 Seite erstellt.",
    "Created a PDF with {n} pages.": "PDF mit {n} Seiten erstellt.",
    "Couldn't create the PDF.": "Das PDF konnte nicht erstellt werden.",
    "{orientation} — {name}": "{orientation} — {name}", // i18n-same
    "Clear images": "Bilder entfernen",
    "PDF settings": "PDF-Einstellungen",
    "PDF Settings": "PDF-Einstellungen",
    "Build": "Erstellen",
    "Building PDF…": "PDF wird erstellt…",
    "1 page": "1 Seite",
    "{n} pages": "{n} Seiten",
    "Use the arrows to reorder.": "Mit den Pfeilen umsortieren.",
    // The separator between the page count and the line above. German ends a
    // sentence the same way English does, so this is deliberately identical.
    ". |sentence-end": ". ", // i18n-same
    "Create PDF": "PDF erstellen",
    "That's {size} of images. They're embedded without recompression, so the PDF will be about that big — likely too large to email.":
      "Das sind {size} an Bildern. Sie werden ohne erneute Komprimierung eingebettet, das PDF wird also etwa so groß — vermutlich zu groß für eine E-Mail.",
    "Compress these first": "Vorher komprimieren",
    "Page size": "Seitenformat",
    "Orientation": "Ausrichtung",
    "Each page already takes its image's shape.": "Jede Seite übernimmt bereits die Form ihres Bildes.",
    "Set each image's orientation on its card — the first image on a page decides that page.":
      "Legen Sie die Ausrichtung jedes Bildes auf seiner Karte fest — das erste Bild einer Seite bestimmt die Seite.",
    "Set each image's orientation on its card.": "Legen Sie die Ausrichtung jedes Bildes auf seiner Karte fest.",
    "Images per page": "Bilder pro Seite",
    "Multi-up pages are laid out on A4.": "Seiten mit mehreren Bildern werden auf A4 angeordnet.",
    "Fit": "Einpassung",
    "Contain keeps the whole image (may add margins). Cover fills the area (may crop). Stretch distorts to fill exactly.":
      "Einpassen behält das ganze Bild (eventuell mit Rändern). Füllen füllt die Fläche (eventuell beschnitten). Strecken verzerrt, um exakt zu füllen.",
    "Margin": "Rand",
    "Space around images (and between them on multi-up pages).": "Abstand um die Bilder (und zwischen ihnen bei mehreren Bildern pro Seite).",
    "Page background": "Seitenhintergrund",
    "Preview": "Vorschau",
    "Previous page": "Vorherige Seite",
    "Next page": "Nächste Seite",
    // PAGE_SIZES / ORIENTATIONS / PER_IMAGE / FIT_LABELS (module scope, §4.2)
    "Fit to image": "An Bild anpassen",
    "Auto": "Automatisch",
    "Auto (match image)": "Automatisch (wie Bild)",
    "Portrait": "Hochformat",
    "Landscape": "Querformat",
    "Custom (per image)": "Individuell (pro Bild)",
    "Contain": "Einpassen",
    "Cover": "Füllen",
    "Stretch": "Strecken",
    // ImageToPdfTool.tsx — size limit (jpg-to-pdf-under-N-kb)
    "Already under {size} — no compression needed.": "Bereits unter {size} — keine Komprimierung nötig.",
    "Could not get the PDF under {size} — this is the smallest it can be.": "Das PDF ließ sich nicht unter {size} bringen — kleiner geht es nicht.",
    "Enter a size greater than zero.": "Geben Sie eine Größe größer als null ein.",
    "Images are compressed only as much as needed for the whole PDF to fit.": "Die Bilder werden nur so weit komprimiert, wie nötig ist, damit das ganze PDF passt.",
    "KB": "KB",
    "MB": "MB",
    "Maximum PDF size": "Maximale PDF-Größe",
    "PDF size: {size}": "PDF-Größe: {size}",
    "The PDF will be kept under {size}.": "Das PDF bleibt unter {size}.",
    "Unit": "Einheit",
  },
};

export default content;
