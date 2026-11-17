import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-drehen. Structure lives in ToolPageShell.
 *
 * Head term "Bild drehen" (1.6K/mo); "Foto drehen" and "Bild online drehen"
 * are the secondaries and live in the intro, a section heading and the FAQs.
 * "Foto liegt auf der Seite / steht auf dem Kopf" is how Germans describe the
 * EXIF problem, so the copy uses it. "Sie" form, German-German spelling.
 */
const content: ToolPageContent = {
  toolId: "rotate-image",
  locale: "de",
  name: "Bild drehen",
  tagline:
    "Drehen und spiegeln Sie JPG-, PNG-, WEBP- und GIF-Bilder online — in 90°-Schritten oder um jeden beliebigen Winkel, mit Live-Vorschau und für viele Bilder auf einmal. Kostenlos, schnell und 100 % privat im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild drehen – Foto online drehen & spiegeln, kostenlos",
  metaDescription:
    "Bild drehen in 90°-Schritten oder um jeden Winkel: Foto online drehen und spiegeln, mit Vorschau und im Stapel. Kostenlos, ohne Anmeldung, direkt im Browser.",

  variantsHeading: "Drehen oder spiegeln",

  intro:
    "Richten Sie ein Foto, das auf der Seite liegt, wieder auf, oder drehen Sie eine Grafik genau auf den Winkel, den Sie brauchen. Mit dem Tool „Bild drehen“ von oMyImage drehen Sie Bilder in 90°-Schritten, spiegeln sie oder stellen mit Live-Vorschau einen beliebigen Winkel ein — für ein einzelnes Bild oder einen ganzen Stapel auf einmal. Wählen Sie Ausgabeformat und Hintergrund und laden Sie das Ergebnis herunter. So können Sie jedes Foto online drehen, und weil alles in Ihrem Browser passiert, bleiben Ihre Bilder privat.",

  sections: [
    {
      heading: "Das Problem mit der EXIF-Ausrichtung",
      id: "exif",
      body: [
        "Der häufigste Grund, warum ein Foto gedreht erscheint, ist nicht, dass es falsch aufgenommen wurde — sondern dass die Kamera es absichtlich quer gespeichert hat. Der Sensor im Handy hat eine feste Ausrichtung; drehen Sie das Telefon, dreht sich der Sensor nicht mit. Statt die Pixel neu zu schreiben, legt die Kamera ein EXIF-Ausrichtungs-Tag an, das beschreibt, wie das Bild vor der Anzeige gedreht werden soll.",
        "Das funktioniert so lange, bis das Bild auf Software trifft, die das Tag ignoriert. Ältere Content-Management-Systeme, manche Upload-Formulare, bestimmte E-Mail-Programme und viel selbst entwickelte Software lesen die rohen Pixel und zeigen ein Foto, das auf der Seite liegt oder auf dem Kopf steht. Ärgerlich daran: In der Galerie Ihres Handys und am Rechner sieht alles richtig aus, das Problem zeigt sich erst nach dem Veröffentlichen.",
        "Wenn Sie hier ein Bild drehen, wird die Ausrichtung direkt in die Pixel geschrieben und das Tag entfernt. Damit ist jede Mehrdeutigkeit beseitigt: Jedes Programm zeigt dasselbe, weil es nichts mehr zu interpretieren gibt.",
      ],
    },
    {
      heading: "Drehungen im rechten Winkel kosten nichts",
      id: "lossless",
      body: [
        "Wenn Sie ein Bild um 90, 180 oder 270 Grad drehen, wandert jedes Pixel an eine neue Position, ohne seinen Wert zu ändern. Es wird nichts interpoliert, also gibt es keine Unschärfe und keinerlei Qualitätsverlust — das gedrehte Bild ist genauso scharf wie das Original. Dasselbe gilt für horizontales und vertikales Spiegeln.",
        "Beliebige Winkel sind etwas anderes. Bei einer Drehung um 3 Grad liegen die meisten Ausgabepixel zwischen den Eingabepixeln, ihre Werte müssen also aus den Nachbarn interpoliert werden. Bei kleinen Korrekturen ist der Effekt sehr gering, aber vorhanden, und er summiert sich, wenn Sie dieselbe Datei wiederholt drehen. Richten Sie das Bild deshalb einmal vom Original aus gerade, statt es über mehrere Sitzungen Grad für Grad nachzujustieren.",
      ],
    },
    {
      heading: "Einen schiefen Horizont gerade drehen",
      id: "straighten",
      body: [
        "Ein schiefer Horizont gehört zu den Fehlern, die das Auge bemerkt, ohne sie benennen zu können — und meist liegt er nur ein oder zwei Grad daneben. Kleine Korrekturen machen einen überraschend großen Unterschied dafür, wie durchdacht ein Foto wirkt.",
        "Weil sich bei einer Drehung um einen schrägen Winkel das Rechteck innerhalb seines Rahmens dreht, reichen die Ecken nicht mehr bis an den Rand, und es bleiben dreieckige Lücken. Diese werden mit der gewählten Hintergrundfarbe gefüllt. In der Praxis schneiden die meisten danach etwas enger zu, um sie zu entfernen, was ein wenig vom Bild kostet — wenn Sie also wissen, dass eine Aufnahme schief wird, lassen Sie beim Fotografieren etwas Luft um das Motiv.",
      ],
    },
    {
      heading: "Mehrere Fotos auf einmal drehen",
      id: "batch",
      body: [
        "Falsch herum eingezogene Scans aus dem Dokumenteneinzug, eine Serie quer gehaltener Handyfotos, Produktbilder, die alle dieselbe Vierteldrehung brauchen — das sind die typischen Fälle, in denen eine Drehung auf viele Dateien gleichzeitig angewendet wird.",
        "Drehung und Spiegelung gelten für jede Datei im Stapel gleichermaßen. Brauchen die Bilder unterschiedliche Korrekturen, sortieren Sie sie zuerst nach Richtung — die nach links gekippten in einen Stapel, die nach rechts gekippten in einen anderen — und bearbeiten Sie jede Gruppe in einem Durchgang. Alles läuft in Ihrem Browser und kommt als eine ZIP-Datei zurück.",
      ],
    },
  ],

  howToTitle: "So drehen Sie ein Bild",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus oder ziehen Sie sie per Drag-and-drop in den Arbeitsbereich." },
    { title: "Drehen oder spiegeln", description: "Nutzen Sie die 90°-Schaltflächen, spiegeln Sie horizontal oder vertikal oder stellen Sie mit dem Regler einen beliebigen Winkel ein." },
    { title: "Drehen und herunterladen", description: "Wählen Sie ein Ausgabeformat und klicken Sie auf „Drehen“ — ein Bild wird direkt heruntergeladen, mehrere als ZIP." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Drehen und spiegeln", description: "Drehen Sie Bilder in 90°-Schritten nach links oder rechts, spiegeln Sie sie horizontal oder vertikal oder stellen Sie jeden Winkel von 0 bis 359° ein." },
    { icon: "burst_mode", title: "Stapeldrehung", description: "Wenden Sie dieselbe Drehung auf viele Bilder gleichzeitig an und laden Sie alle in einer einzigen ZIP-Datei herunter." },
    { icon: "palette", title: "Format und Hintergrund", description: "Exportieren Sie als JPG, PNG oder WEBP und wählen Sie für schräge Ecken einen transparenten, weißen, schwarzen oder eigenen Hintergrund." },
  ],

  faqs: [
    { q: "Kann ich ein Bild um einen eigenen Winkel drehen?", a: "Ja. Nutzen Sie die 90°-Schaltflächen für schnelle Drehungen oder den Winkelregler für jeden Wert von 0 bis 359 Grad." },
    { q: "Wofür ist die Hintergrund-Option?", a: "Wenn Sie um einen Winkel drehen, der kein Vielfaches von 90° ist, entstehen leere Ecken. Der Hintergrund füllt sie — transparent (PNG/WEBP), weiß, schwarz oder in einer eigenen Farbe." },
    { q: "Kann ich viele Bilder auf einmal drehen?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten; dieselbe Drehung und Spiegelung gilt für alle, und mehrere Dateien werden zusammen als ZIP heruntergeladen." },
    { q: "Verliert das Bild beim Drehen an Qualität?", a: "Drehungen um 90° und 180° sind verlustfrei. Für andere Winkel oder beim Export als JPG können Sie die Qualität einstellen. PNG und WEBP bleiben scharf." },
    { q: "Ist das Tool kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser gedreht." },
    { q: "Warum liegt mein Foto auf manchen Geräten auf der Seite, auf anderen nicht?", a: "Weil die Kamera das Bild in der Ausrichtung ihres Sensors gespeichert und ein EXIF-Tag ergänzt hat, das angibt, wie herum es angezeigt werden soll. Software, die das Tag liest, zeigt es richtig an; Software, die es ignoriert, zeigt das rohe, quer liegende Bild. Wenn Sie das Foto hier drehen, wird die richtige Ausrichtung fest in die Pixel geschrieben, und jedes Programm zeigt es gleich." },
    { q: "Was, wenn jedes Foto eine andere Drehung braucht?", a: "Eine Drehung gilt für alle Fotos im Stapel — einen automatischen Modus pro Foto gibt es nicht. Sortieren Sie die Fotos danach, wie sie gedreht sind, zum Beispiel alle, die eine Vierteldrehung im Uhrzeigersinn brauchen, und bearbeiten Sie jede Gruppe separat." },
    { q: "Kann ich ein Foto um wenige Grad gerade drehen?", a: "Ja. Für einen schiefen Horizont reichen meist ein oder zwei Grad. Beachten Sie, dass jeder Winkel, der kein Vielfaches von 90° ist, dreieckige Lücken in den Ecken hinterlässt, die mit Ihrer Hintergrundfarbe gefüllt werden — die meisten schneiden danach leicht zu, um sie zu entfernen." },
    { q: "Ändert das Spiegeln die Bildqualität?", a: "Nein. Horizontales und vertikales Spiegeln ordnet wie Drehungen um 90° und 180° nur vorhandene Pixel neu an — nichts wird neu berechnet, das Ergebnis ist in der Qualität pixelgenau identisch mit dem Original." },
    { q: "Kann ich einen ganzen Ordner auf einmal drehen?", a: "Ja. Fügen Sie alle Dateien aus dem Ordner hinzu und wenden Sie dieselbe Drehung auf alle an; sie kommen als eine ZIP-Datei zurück. Brauchen sie unterschiedliche Drehungen, teilen Sie sie vorher in Gruppen auf." },
    { q: "Wie drehe ich ein Foto, das auf dem Kopf steht?", a: "Klicken Sie zweimal auf eine der 90°-Schaltflächen oder stellen Sie den Winkel auf 180°. Diese Drehung ist verlustfrei, und weil die Ausrichtung danach in den Pixeln steckt, steht das Foto auch auf Websites und in E-Mails richtig herum." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das Drehen geschieht mit HTML-Canvas in Ihrem Browser — keine Speicherung, keine Auswertung Ihrer Dateien. Nur ein Bild mit mehr als etwa 16 Megapixeln, das für einen Browser-Tab zu groß ist, geht an unseren Server und wird innerhalb von etwa einer Stunde gelöscht.",

  ui: {
    "Flip": "Spiegeln",
    "Flipping…": "Wird gespiegelt…",
    "Flip & download": "Spiegeln und herunterladen",
    "Flip {n} images": "{n} Bilder spiegeln",
    // RotateTool.tsx
    "Rotated 1 image.": "1 Bild gedreht.",
    "Rotated {n} images.": "{n} Bilder gedreht.",
    "Rotation failed.": "Drehen fehlgeschlagen.",
    "or drop JPG, PNG, WEBP or GIF images here": "oder JPG-, PNG-, WEBP- oder GIF-Bilder hier ablegen",
    "Rotated in your browser — your images never leave your device.":
      "Im Browser gedreht — Ihre Bilder verlassen Ihr Gerät nie.",
    "Rotate & flip": "Drehen und spiegeln",
    "Rotate": "Drehen",
    "Rotating…": "Wird gedreht…",
    "Rotation preview": "Vorschau der Drehung",
    "Preview of": "Vorschau von",
    "— the same transform applies to all {n} images.": "— dieselbe Drehung gilt für alle {n} Bilder.",
    "Transform Settings": "Einstellungen zum Drehen",
    "90° steps straighten; the angle slider gives a custom tilt.":
      "90°-Schritte richten auf; mit dem Winkelregler stellen Sie eine eigene Neigung ein.",
    "Rotate {n} images": "{n} Bilder drehen",
    "Rotate & download": "Drehen und herunterladen",
    "Transform": "Transformieren",
    "Flip horizontal": "Horizontal spiegeln",
    "Flip vertical": "Vertikal spiegeln",
    "Flip H": "Horiz. spiegeln",
    "Flip V": "Vert. spiegeln",
    "Angle": "Winkel",
    "Format": "Format", // i18n-same
    "Background (for angled corners)": "Hintergrund (für schräge Ecken)",
    // FORMATS (module scope, §4.2)
    "Same as original": "Wie Original",
  },
};

export default content;
