import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bildgroesse-aendern. Structure lives in ToolPageShell.
 *
 * Head term "Bildgröße ändern" (4.4K/mo). Secondaries "Bild verkleinern"
 * (12.1K, shared with compress-image, which owns the KB sense), "Bild
 * vergrößern", "Bild skalieren" and "Foto Größe ändern" live in the intro,
 * section headings and FAQs. "Sie" form, German-German spelling.
 */
const content: ToolPageContent = {
  toolId: "resize-image",
  locale: "de",
  name: "Bildgröße ändern",
  tagline:
    "Ändern Sie die Größe von JPG-, PNG-, WEBP- und GIF-Bildern online — in exakten Pixeln oder Prozent, mit fixiertem Seitenverhältnis und für viele Bilder auf einmal. Kostenlos, schnell und 100 % privat im Browser.",
  category: { id: "optimize", label: "Optimieren" },
  variantsHeading: "Größe für Druck oder soziale Netzwerke ändern",

  metaTitle: "Bildgröße ändern – Bild online skalieren, kostenlos",
  metaDescription:
    "Bildgröße ändern in Pixeln oder Prozent: Bilder online verkleinern oder vergrößern, Seitenverhältnis beibehalten, auch im Stapel. Kostenlos und ohne Anmeldung.",

  intro:
    "Sie brauchen ein Bild in einer exakten Größe — für ein Profilbild, ein Vorschaubild oder einen Ausdruck? Mit dem Tool „Bildgröße ändern“ von oMyImage legen Sie die Maße genau in Pixeln fest oder skalieren das Bild prozentual, und dank fixiertem Seitenverhältnis wirkt nichts verzerrt. So können Sie ein Bild verkleinern, ein Foto in der Größe ändern oder gleich einen ganzen Stapel auf einmal skalieren, das Ausgabeformat wählen und herunterladen. Alles läuft in Ihrem Browser, Ihre Bilder bleiben also privat.",

  sections: [
    {
      heading: "Pixel, Bildmaße und Dateigröße",
      id: "basics",
      body: [
        "Die Maße eines Bildes geben an, wie viele Pixel es breit und hoch ist; die Dateigröße, wie viele Byte nötig sind, um diese Pixel zu speichern. Beides hängt zusammen, ist aber nicht dasselbe — und wer es verwechselt, hat nach dem „Verkleinern“ oft immer noch zu schwere Bilder.",
        "Das Ändern der Bildgröße setzt bei der ersten Zahl an. Halbieren Sie Breite und Höhe, bleibt ein Viertel der Pixel übrig, und die Datei schrumpft meist im ähnlichen Verhältnis — ein deutlich größerer Effekt, als jede Komprimierungseinstellung allein erreichen kann. Deshalb liefert erst skalieren, dann komprimieren weit bessere Ergebnisse als nur komprimieren.",
        "Entscheidend ist der Platz, den das Bild auf dem Bildschirm tatsächlich einnimmt. Ein 4000 Pixel breites Foto in einer 800 Pixel breiten Spalte liefert fünfundzwanzigmal mehr Daten, als das Display nutzen kann, und keine noch so geschickte Komprimierung holt diese Verschwendung zurück.",
      ],
    },
    {
      heading: "Bild verkleinern ist unproblematisch, Bild vergrößern nicht",
      id: "direction",
      body: [
        "Ein Bild zu verkleinern ist ein gutmütiger Vorgang. Das Resampling fasst Pixelgruppen zu weniger Pixeln zusammen, und das Ergebnis wirkt in der neuen Größe meist schärfer und sauberer als das Original. Sie können kräftig herunterskalieren, ohne dass man es sieht.",
        "Vergrößern ist ein grundlegend anderes Problem, denn die Details, die Sie verlangen, wurden nie aufgenommen. Interpolation kann nur Werte zwischen den vorhandenen Pixeln schätzen, deshalb werden Kanten weich und feine Strukturen matschig. Eine Vergrößerung um 20–25 % ist meist noch in Ordnung, eine Verdopplung sieht sichtbar schlechter aus.",
        "Wenn Sie wirklich ein größeres Bild brauchen, hilft nur ein KI-Upscaler, weil er aus einem trainierten Modell plausible Details erzeugt, statt das Vorhandene zu strecken. Auch dann erfindet er Informationen — wichtig, wenn das Bild als Beleg oder für technische Zwecke dient.",
      ],
    },
    {
      heading: "Seitenverhältnis — und was passiert, wenn Sie es ignorieren",
      id: "aspect",
      body: [
        "Das Seitenverhältnis beschreibt das Verhältnis von Breite zu Höhe. Bleibt es fixiert, skaliert Ihr Bild proportional — ein Foto im Format 3:2 bleibt 3:2 und wird einfach kleiner. Lösen Sie die Fixierung, können Sie beliebige Maße erzwingen, allerdings um den Preis, dass alles im Bild gestreckt oder gestaucht wird. Bei Gesichtern fällt das sofort auf, Landschaften verbergen es eine Weile und wirken dann seltsam falsch.",
        "Muss ein Bild genau in einen Rahmen passen, dessen Proportionen nicht zu ihm passen, lautet die richtige Reihenfolge: erst zuschneiden, dann skalieren — nicht strecken. Das Zuschneiden entfernt die Teile außerhalb der Zielform, der Rest bleibt unverzerrt, und das anschließende Skalieren bringt ihn auf die gewünschten Pixelmaße.",
      ],
    },
    {
      heading: "Die Größe vieler Bilder auf einmal ändern",
      id: "batch",
      body: [
        "Maße einmal festlegen und auf einen ganzen Ordner anwenden — das ist der Normalfall bei Produktkatalogen, Galerie-Uploads und jeder Website mit festen Bildplätzen. Bei gemischten Stapeln ist der Prozentmodus oft die bessere Wahl, weil er jedes Bild relativ zu seiner eigenen Größe skaliert, statt alles auf identische Maße zu zwingen — praktisch, wenn Hoch- und Querformate gemischt sind.",
        "Alles wird in Ihrem Browser verarbeitet und als eine einzige ZIP-Datei geliefert, hundert Bilder sind also ein Download statt hundert. Hochgeladen wird nur, wenn ein Bild zu groß für einen Browser-Tab ist — und das hängt von seiner Auflösung ab, nicht von seiner Dateigröße.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die Bildgröße",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus oder ziehen Sie sie per Drag-and-drop in den Arbeitsbereich." },
    { title: "Größe festlegen", description: "Skalieren Sie in exakten Pixeln oder in Prozent und behalten Sie das Seitenverhältnis bei, damit nichts verzerrt wird." },
    { title: "Skalieren und herunterladen", description: "Klicken Sie auf „Größe ändern“ — ein einzelnes Bild wird direkt heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "straighten", title: "Pixel oder Prozent", description: "Legen Sie eine exakte Breite und Höhe fest oder skalieren Sie jedes Bild um einen Prozentsatz seiner Originalgröße." },
    { icon: "link", title: "Seitenverhältnis fixieren", description: "Die Proportionen bleiben erhalten, damit Bilder nie gestreckt aussehen — jede Datei im Stapel behält ihr eigenes Verhältnis." },
    { icon: "lock", title: "Privat und sofort", description: "Die Größenänderung läuft mit HTML-Canvas in Ihrem Browser, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Kann ich die Bildgröße ändern, ohne das Seitenverhältnis zu verlieren?", a: "Ja. Lassen Sie „Seitenverhältnis beibehalten“ eingeschaltet, dann wird jedes Bild ohne Verzerrung in Ihren Rahmen aus Breite und Höhe eingepasst." },
    { q: "Kann ich viele Bilder auf dieselbe Größe bringen?", a: "Ja. Legen Sie Maße oder Prozentsatz einmal fest, sie gelten dann für den ganzen Stapel; die Dateien werden zusammen als ZIP heruntergeladen." },
    { q: "Verliert das Bild beim Skalieren an Qualität?", a: "Verkleinerte Bilder bleiben scharf. Wenn Sie ein Bild über das Original hinaus vergrößern, kann es weich wirken, weil keine neuen Details hinzukommen." },
    { q: "Welche Formate werden unterstützt?", a: "Als Eingabe JPG, PNG, WEBP, GIF und BMP; exportieren können Sie als JPG, PNG oder WEBP (oder im Originalformat belassen)." },
    { q: "Ist das Tool kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser skaliert." },
    { q: "Welche Bildgröße ist für eine Website richtig?", a: "Orientieren Sie sich am Platz, den das Bild tatsächlich einnimmt. Ein Titelbild über die volle Breite braucht am Desktop selten mehr als 1920 px, ein Bild im Artikel meist 800–1200 px, ein Vorschaubild 300–400 px. Verdoppeln Sie nur, wenn Sie eine eigene 2×-Version für hochauflösende Displays ausliefern." },
    { q: "Was ist der Unterschied zwischen Bildgröße ändern und Bild komprimieren?", a: "Die Größenänderung bestimmt, wie viele Pixel es gibt; die Komprimierung, wie effizient sie gespeichert werden. Bei Webbildern bringt das Skalieren meist mehr, denn ein Foto, das 800 px breit angezeigt, aber mit 4000 px gespeichert wird, trägt fünfundzwanzigmal mehr Pixel, als es zeigen kann. Beides zusammen ergibt die kleinste Datei." },
    { q: "Warum sieht mein vergrößertes Bild unscharf aus?", a: "Weil die Details nicht existieren. Beim Hochskalieren lässt sich nur zwischen vorhandenen Pixeln interpolieren, Kanten werden weich und Strukturen verschmieren. Wenn Sie wirklich ein größeres Bild brauchen, rekonstruiert der KI-Upscaler plausible Details, statt das Vorhandene nur zu strecken." },
    { q: "Kann ich ein Bild auf eine exakte Breite und Höhe bringen?", a: "Ja — schalten Sie „Seitenverhältnis beibehalten“ aus und geben Sie beide Werte ein. Beachten Sie, dass das Bild gestreckt wird, wenn Ihre Zahlen nicht zu seinen Proportionen passen. Um einen exakten Rahmen ohne Verzerrung zu füllen, schneiden Sie zuerst zu und skalieren danach." },
    { q: "Ändert sich beim Skalieren das Dateiformat?", a: "Nur, wenn Sie es wollen. Sie können das Originalformat behalten oder als JPG, PNG oder WEBP exportieren. Gleichzeitig in WEBP umzuwandeln ist ein beliebter Weg, in einem Durchgang weniger Pixel und eine kleinere Datei zu bekommen." },
    { q: "Kann ich die Größe eines Fotos auch in Zentimetern für den Druck ändern?", a: "Ja. Wählen Sie Zentimeter oder Millimeter als Einheit und eine Auflösung in DPI — das Tool rechnet Pixel = Größe × DPI. 300 DPI ist der übliche Wert für gedruckte Fotos. Speichern Sie dafür als JPG oder PNG, denn WEBP kann keine DPI-Angabe speichern." },
    { q: "Werden meine Bilder auf einen Server hochgeladen?", a: "In aller Regel nicht. Die Größenänderung läuft lokal im Browser. Nur ein Bild mit mehr als etwa 16 Megapixeln, das für einen Browser-Tab zu groß ist, geht an unseren Server und wird dort innerhalb von etwa einer Stunde gelöscht." },
  ],

  security:
    "Ihre Bilder bleiben privat. Die Größenänderung geschieht mit HTML-Canvas in Ihrem Browser — keine Speicherung, keine Auswertung Ihrer Dateien. Nur ein Bild mit mehr als etwa 16 Megapixeln, das für einen Browser-Tab zu groß ist, geht an unseren Server und wird innerhalb von etwa einer Stunde gelöscht.",

  ui: {
    // ResizeTool.tsx
    "Resize": "Größe ändern",
    "Resize & download": "Größe ändern & herunterladen",
    "Resize Settings": "Einstellungen zur Größe",
    "Resize settings": "Einstellungen zur Größe",
    "Resize failed.": "Größenänderung fehlgeschlagen.",
    "Resize {n} images": "{n} Bilder skalieren",
    "Resized 1 image.": "1 Bild skaliert.",
    "Resized {n} images.": "{n} Bilder skaliert.",
    "Resizing…": "Größe wird geändert…",
    "Type": "Art",
    "Size": "Größe",
    "Scale": "Skalieren",
    "Target": "Ziel",
    "Current": "Aktuell",
    "Custom size": "Eigene Größe",
    "Preset type": "Vorlagentyp",
    "Choose the social media platform": "Wählen Sie die Social-Media-Plattform",
    "Pick a platform and a preset size.": "Wählen Sie eine Plattform und eine vorgegebene Größe.",
    "Width (px)": "Breite (px)",
    "Height (px)": "Höhe (px)",
    "Width ({unit})": "Breite ({unit})",
    "Height ({unit})": "Höhe ({unit})",
    "Unit": "Einheit",
    "Resolution (DPI)": "Auflösung (DPI)",
    "{dpi} DPI": "{dpi} DPI", // i18n-same
    "Pixels = size × DPI. 300 DPI is the usual quality for printed photos.": "Pixel = Größe × DPI. 300 DPI ist der übliche Wert für gedruckte Fotos.",
    "WEBP can't store a DPI — choose JPG or PNG so the file keeps its print size.": "WEBP kann keine DPI speichern — wählen Sie JPG oder PNG, damit die Datei ihre Druckgröße behält.",
    "How to fit the image": "Wie das Bild eingepasst wird",
    "Keep aspect ratio (fit)": "Seitenverhältnis beibehalten (einpassen)",
    "Keep aspect ratio on to avoid stretching.": "Lassen Sie das Seitenverhältnis fixiert, damit nichts gestreckt wird.",
    "Padding colour": "Randfarbe",
    "First image → {w} × {h} px": "Erstes Bild → {w} × {h} px",
    "— each keeps its own ratio": "— jedes behält sein eigenes Verhältnis",
    "set a size": "Größe festlegen",
    "unknown": "unbekannt",
    "Output format": "Ausgabeformat",
    "JPG background": "JPG-Hintergrund",
    "Quality": "Qualität",
    "or drop JPG, PNG, WEBP or GIF images here": "oder JPG-, PNG-, WEBP- oder GIF-Bilder hier ablegen",
    // Per-image quick edit
    "Crop|verb": "Zuschneiden",
    "Rotate left": "Nach links drehen",
    "Rotate right": "Nach rechts drehen",
    "Couldn't apply that edit.": "Diese Bearbeitung konnte nicht angewendet werden.",
    "This image is too large to edit in the browser": "Dieses Bild ist zu groß, um es im Browser zu bearbeiten",
    "edited": "bearbeitet",
    "Details": "Details", // i18n-same
    // Shared (ToolWorkspace / upload)
    "Clear files": "Dateien entfernen",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Original": "Original", // i18n-same
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Remove": "Entfernen",
    // FORMATS / MODES / FITS (module scope, §4.2)
    "Same as original": "Wie Original",
    "By pixels": "In Pixeln",
    "By percent": "In Prozent",
    "Social media": "Social Media",
    "Crop to fill": "Zuschneiden und füllen",
    "Pad": "Mit Rand auffüllen",
    "Fit inside": "Einpassen",
    "Exactly the preset size, overflow trimmed off the edges.":
      "Genau die Vorlagengröße; was übersteht, wird an den Rändern abgeschnitten.",
    "Exactly the preset size, the whole image kept, bars filled in.":
      "Genau die Vorlagengröße, das ganze Bild bleibt erhalten, die Ränder werden aufgefüllt.",
    "Keeps the ratio, so the output is smaller than the preset.":
      "Behält das Seitenverhältnis bei, daher ist das Ergebnis kleiner als die Vorlage.",
    // FIT_NOTE (lib/image/fit.ts)
    "cropped to fill": "zugeschnitten und gefüllt",
    "padded to fit": "mit Rand eingepasst",
    "fitted inside": "eingepasst",
    // Social preset names (lib/social-presets.ts)
    "Profile": "Profilbild",
    "Square post": "Quadratischer Beitrag",
    "Portrait post": "Beitrag im Hochformat",
    "Landscape post": "Beitrag im Querformat",
    "Story / Reel": "Story / Reel", // i18n-same
    "Cover": "Titelbild",
    "Shared post": "Geteilter Beitrag",
    "Story": "Story", // i18n-same
    "Event cover": "Veranstaltungs-Titelbild",
    "Header": "Header-Bild",
    "Post image": "Beitragsbild",
    "Company logo": "Firmenlogo",
    "Channel icon": "Kanalsymbol",
    "Profile banner": "Profilbanner",
    "Server banner": "Serverbanner",
    "Server icon": "Serversymbol",
    // Print size mode (ResizeTool; PRINT_UNITS and MODES are module scope)
    "Print size": "Druckgröße",
    "cm": "cm", // i18n-same
    "mm": "mm", // i18n-same
    "in": "Zoll",
    "Channel art": "Kanalbanner",
    "Thumbnail": "Thumbnail", // i18n-same
    "Standard pin": "Standard-Pin",
    "Square pin": "Quadratischer Pin",
    "Video / Story": "Video / Story", // i18n-same
    "Status": "Status", // i18n-same
    // Blur fill (FITS / FIT_NOTES) and YouTube Shorts
    "Blur fill": "Unscharfer Hintergrund",
    "Exactly the preset size, the whole image kept, bars filled with a blurred copy of it.":
      "Genau die Vorlagengröße, das ganze Bild bleibt erhalten, die Ränder werden mit einer unscharfen Kopie davon gefüllt.",
    "padded with a blur": "mit unscharfem Rand",
    "Shorts": "Shorts", // i18n-same — YouTube's German UI says Shorts
  },
};

export default content;
