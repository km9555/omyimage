import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-bearbeiten. Structure lives in ToolPageShell.
 *
 * Head term "Bild bearbeiten" (12.1K/mo); "Foto bearbeiten" (8.1K) and
 * "Bildbearbeitung online" are the secondaries and live in the metaTitle,
 * intro, a section heading and the FAQs. The page is honest that this is not
 * a Photoshop replacement, same as the English one. "Sie" form.
 *
 * RIBBON, ASPECTS, PRESETS, ADJ_SLIDERS, FONTS, SHAPE_LABELS and the nine
 * position names are module scope, maintained here by hand (§4.2). The default
 * annotate stamp text ("Label") is drawn INTO the image, so it is translated.
 */
const content: ToolPageContent = {
  toolId: "image-editor",
  locale: "de",
  name: "Bild bearbeiten",
  seoName: "Bildbearbeitung online",
  crumbLabel: "Bild bearbeiten",
  tagline:
    "Bearbeiten Sie Bilder online an einem Ort — zuschneiden, Größe ändern, drehen, anpassen, Filter, Weichzeichnen, Rahmen, rund zuschneiden, Wasserzeichen und Zeichnen, mit Rückgängig und Wiederholen. Kostenlos, schnell und 100 % privat im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild bearbeiten – Foto online bearbeiten, kostenlos",
  metaDescription:
    "Bild bearbeiten im Browser: Foto zuschneiden, drehen, Helligkeit anpassen, Filter, Text und Wasserzeichen. Kostenlose Bildbearbeitung online, ohne Anmeldung.",

  intro:
    "Ein Editor für alles. Mit „Bild bearbeiten“ von oMyImage haben Sie Zuschneiden, Größe ändern, Drehen und Spiegeln, Farbkorrekturen und Filter, Schwarz-Weiß, Weichzeichnen, Rahmen, runden Zuschnitt, Text- und Logo-Wasserzeichen sowie freies Zeichnen auf einer einzigen Arbeitsfläche. Wenden Sie Bearbeitungen in beliebiger Reihenfolge an, machen Sie sie nach Belieben rückgängig oder wiederholen Sie sie, und exportieren Sie einmal, wenn Sie fertig sind. So können Sie jedes Foto online bearbeiten, ohne Programm und ohne Anmeldung — und weil alles in Ihrem Browser läuft, bleibt Ihr Bild vollständig privat.",

  sections: [
    {
      heading: "Die Bearbeitungen, die man wirklich braucht",
      id: "scope",
      body: [
        "Die meiste Bildbearbeitung ist keine Retusche. Es geht darum, ein schiefes Foto gerade zu richten, einen störenden Rand wegzuschneiden, ein Bild auf ein Upload-Limit zu verkleinern, einen Pfeil auf einen Screenshot zu zeichnen oder ein Foto aus einem dunklen Raum aufzuhellen. Diese Aufgaben haben zwei Dinge gemeinsam: Sie dauern unter einer Minute, und sie rechtfertigen nicht, ein Profiprogramm zu öffnen.",
        "Genau diese Lücke füllt dieser Editor. Alles liegt auf einer Arbeitsfläche, Sie können also zuschneiden, drehen, anpassen und beschriften, ohne zwischen Tools zu wechseln oder zwischendurch zu exportieren. Am Ende liefert ein einziger Export die fertige Datei.",
        "Er ist bewusst kein Photoshop-Ersatz. Es gibt keine Ebenen, Masken oder Füllmethoden, weil sie die neunzig Prozent der Bearbeitungen verlangsamen würden, die sie nie gebraucht haben.",
      ],
    },
    {
      heading: "Foto bearbeiten in der richtigen Reihenfolge",
      id: "order",
      body: [
        "Zuerst die Bildgestaltung: Schneiden Sie zu und richten Sie gerade aus, bevor Sie irgendetwas anderes tun, damit spätere Schritte nur an Pixeln arbeiten, die Sie behalten. Die Belichtung eines Bereichs zu korrigieren, den Sie gleich wegschneiden, ist verschwendete Mühe, und wer nach dem Skalieren zuschneidet, wirft Auflösung weg, die er bewusst behalten hat.",
        "Danach die Anpassungen — Helligkeit, Kontrast, Sättigung —, solange Sie noch das ganze Bild beurteilen können. Dann die Beschriftung, denn Pfeile und Rahmen müssen an ihrer endgültigen Stelle sitzen, bezogen auf einen Ausschnitt, der sich nicht mehr ändert.",
        "Die Größe ändern Sie zuletzt, direkt vor dem Export. So wird die Beschriftung nur einmal am Ende skaliert, statt in einer Größe gezeichnet und in eine andere gequetscht zu werden. Ein häufiges Ärgernis — Text, der auf der Arbeitsfläche gut aussah und in der exportierten Datei unleserlich ist — entsteht fast immer durch Skalieren nach dem Beschriften.",
      ],
    },
    {
      heading: "Screenshots beschriften",
      id: "annotation",
      body: [
        "Auf einem Screenshot zu zeichnen ist einer der häufigsten Gründe, überhaupt einen Editor zu öffnen — einen Fehler für die Entwicklung markieren, in einer Support-Antwort auf eine Einstellung zeigen, eine Klausel in einem Dokument hervorheben.",
        "Zwei Dinge machen Markierungen wirksam. Erstens Kontrast: Ein roter Pfeil verschwindet vor einem roten Fehlerbanner, wählen Sie also eine Farbe, die sich von der Oberfläche abhebt, statt zu ihr zu passen. Zweitens Zurückhaltung: Drei Pfeile und ein Rahmen sagen etwas aus, fünfzehn Markierungen nicht.",
        "Exportieren Sie Screenshots als PNG statt als JPG. Bildschirmaufnahmen bestehen fast nur aus harten Kanten und kleinem Text — genau das, was JPG am schlechtesten verarbeitet. Sie bekommen einen leichten Schleier um jedes Zeichen und eine Datei, die oft nicht einmal kleiner ist.",
      ],
    },
    {
      heading: "Nichts verlässt Ihr Gerät",
      id: "privacy",
      body: [
        "Der gesamte Editor läuft auf einem HTML-Canvas in Ihrem Browser-Tab. Ihr Bild wird von der Festplatte in den Arbeitsspeicher gelesen, dort bearbeitet und beim Export wieder geschrieben — es wird nie hochgeladen, und es gibt keine Kopie auf einem Server, die aufbewahrt werden oder in falsche Hände geraten könnte.",
        "Das ist wichtiger, als es klingt, wenn man bedenkt, was typischerweise bearbeitet wird. Screenshots enthalten E-Mail-Adressen, Kontonummern, interne Dashboards und offene Tabs. Abfotografierte Dokumente für einen Upload enthalten alles, was ein Dokument eben enthält. Wer diese Arbeit lokal erledigt, muss sich nicht fragen, wer sonst noch eine Kopie hat.",
        "Ein praktischer Nebeneffekt: Sobald die Seite geladen ist, funktioniert der Editor auch ohne Internetverbindung.",
      ],
    },
  ],

  howToTitle: "So bearbeiten Sie ein Bild online",
  steps: [
    { title: "Bild öffnen", description: "Wählen Sie ein Bild aus oder ziehen Sie es per Drag-and-drop in den Editor." },
    { title: "Werkzeug wählen", description: "Klicken Sie auf ein Symbol in der Leiste — Zuschneiden, Drehen, Anpassen, Weichzeichnen, Rahmen, Rund, Wasserzeichen oder Zeichnen — und stellen Sie die Optionen mit Live-Vorschau ein." },
    { title: "Anwenden und wiederholen", description: "Wenden Sie jede Bearbeitung an, um Änderungen zu stapeln — mit vollem Rückgängig und Wiederholen —, und kombinieren Sie so viele Werkzeuge, wie Sie möchten." },
    { title: "Exportieren", description: "Laden Sie das fertige Bild als PNG, JPG oder WEBP herunter." },
  ],

  features: [
    { icon: "dashboard_customize", title: "Alle Werkzeuge an einem Ort", description: "Zuschneiden, Größe ändern, Drehen, Spiegeln, Anpassen, Filter, Schwarz-Weiß, Weichzeichnen, Rahmen, Rund, Wasserzeichen und Zeichnen — ohne die Seite zu verlassen." },
    { icon: "history", title: "Rückgängig und Wiederholen", description: "Wenden Sie Bearbeitungen nacheinander an, gehen Sie beliebig vor oder zurück oder kehren Sie jederzeit zum Original zurück." },
    { icon: "lock", title: "100 % privat", description: "Der gesamte Editor läuft mit HTML-Canvas in Ihrem Browser — Ihr Bild wird nie auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Was kann ich im Editor alles machen?", a: "Zuschneiden und Größe ändern, drehen und spiegeln, Helligkeit, Kontrast, Sättigung und Farbton mit Filtervorlagen anpassen, Schwarz-Weiß, Weichzeichnen, einen Rahmen hinzufügen, rund zuschneiden, ein Text- oder Logo-Wasserzeichen einfügen und zeichnen oder beschriften — alles in einem Bild." },
    { q: "Kann ich eine Änderung rückgängig machen?", a: "Ja. Jede angewendete Bearbeitung landet in einem Verlauf, den Sie rückgängig machen und wiederholen können, und Sie können jederzeit zum Original zurückkehren." },
    { q: "Arbeitet der Editor in voller Auflösung?", a: "Ja. Bearbeitungen werden auf einem Canvas in voller Auflösung zusammengesetzt. Exportieren Sie als PNG für verlustfreie Ausgabe oder als JPG/WEBP mit Qualitätsregler." },
    { q: "Muss ich etwas installieren oder mich anmelden?", a: "Nein. Es ist ein kostenloser Online-Editor, der vollständig in Ihrem Browser läuft — keine Anmeldung, keine Installation, und Ihr Bild verlässt Ihr Gerät nie." },
    { q: "Ist das wirklich privat?", a: "Ja. Die gesamte Bearbeitung findet lokal in Ihrem Browser statt; nichts wird hochgeladen oder gespeichert." },
    { q: "Funktioniert er auf jedem Computer?", a: "Ja. Er läuft in dem Browser, den Sie schon haben, unter Windows, macOS, Linux, Android und iOS. Kein Download, kein Konto und kein Abo — genau darum geht es, denn die meisten Bearbeitungen dauern unter einer Minute und rechtfertigen keine Foto-Software." },
    { q: "Wie schlägt sich das im Vergleich zu Photoshop?", a: "Gar nicht, und das ist auch nicht das Ziel. Es gibt hier keine Ebenen, Masken, Gradationskurven oder Füllmethoden. Abgedeckt sind dafür die Arbeitsschritte, die den Großteil der alltäglichen Bildbearbeitung ausmachen — zuschneiden, drehen, skalieren, anpassen, beschriften, exportieren —, ohne Ladezeit und ohne Lizenz." },
    { q: "Verändert die Bearbeitung meine Originaldatei?", a: "Nein. Das Bild wird in den Arbeitsspeicher geladen, und alles geschieht an einer Kopie — erst beim Export wird etwas festgeschrieben, und die Datei auf Ihrer Festplatte bleibt unberührt. Zeichnungen lassen sich außerdem löschen, ohne den Rest Ihrer Arbeit anzutasten." },
    { q: "Welche Formate kann ich öffnen und speichern?", a: "Öffnen: JPG, PNG, WEBP, GIF und BMP; speichern: JPG, PNG oder WEBP. Animierte GIFs werden mit ihrem ersten Frame geöffnet, da der Editor mit einem einzelnen Standbild arbeitet." },
    { q: "Verliert das Bild beim Bearbeiten an Qualität?", a: "Zuschneiden, Drehen im rechten Winkel und Spiegeln sind verlustfrei. Auch Verkleinern ist praktisch verlustfrei. Qualität kostet nur der Export — wählen Sie PNG oder WEBP, wenn alles exakt bleiben soll, oder JPG mit hoher Qualität für eine kleinere Datei." },
    { q: "Kann ich ein Foto auch auf dem Handy bearbeiten?", a: "Ja. Das Layout passt sich an kleine Bildschirme an, und die Arbeitsfläche reagiert auf Berührung, sodass Zuschneiden und Beschriften mit dem Finger funktionieren. Sehr große Bilder sind durch den Speicher begrenzt, den Ihr Handy dem Browser zuteilt, nicht durch das Tool." },
    { q: "Gibt es fertige Filter wie bei Instagram?", a: "Ja: Original, Lebhaft, S/W, Sepia, Kühl und Warm im Werkzeug „Anpassen“, dazu „Automatisch verbessern“, das flache oder zu dunkle Belichtung mit einem Tipp korrigiert. Nach der Filterwahl bleiben die Regler aktiv, sodass Sie Helligkeit, Kontrast, Sättigung, Farbton und Sepia von Hand feinjustieren können." },
    { q: "Kann ich Text auf ein Bild schreiben?", a: "Ja. Mit dem Wasserzeichen-Werkzeug setzen Sie Text oder ein Logo mit wählbarer Schrift, Größe, Farbe, Deckkraft und Position auf das Bild; mit dem Zeichenwerkzeug fügen Sie Pfeile, Linien, Rechtecke und Ellipsen hinzu." },
  ],

  security:
    "Ihr Bild bleibt privat. Der gesamte Editor läuft mit HTML-Canvas in Ihrem Browser — nichts wird auf einen Server hochgeladen. Keine Speicherung, keine Auswertung Ihrer Dateien.",

  ui: {
    // AllInOneEditor.tsx
    "Please select an image file.": "Bitte wählen Sie eine Bilddatei aus.",
    "Couldn't read that image.": "Dieses Bild konnte nicht gelesen werden.",
    "Applied.": "Angewendet.",
    "Couldn't apply that edit.": "Diese Bearbeitung konnte nicht angewendet werden.",
    "Exported your edited image.": "Ihr bearbeitetes Bild wurde exportiert.",
    "Export failed.": "Export fehlgeschlagen.",
    "Couldn't read that logo.": "Dieses Logo konnte nicht gelesen werden.",
    "Open an image": "Bild öffnen",
    "or drop a JPG, PNG, WEBP or GIF to start editing": "oder ein JPG, PNG, WEBP oder GIF hier ablegen und loslegen",
    "Drag the box or its corners to set the crop, then Apply.": "Ziehen Sie den Rahmen oder seine Ecken, um den Ausschnitt festzulegen, und klicken Sie dann auf „Anwenden“.",
    "Draw on the image, then Apply to bake it in.": "Zeichnen Sie auf das Bild und klicken Sie dann auf „Anwenden“, um es fest einzufügen.",
    "Live preview — adjust on the right, then Apply.": "Live-Vorschau — rechts anpassen, dann „Anwenden“.",
    "Watermark": "Wasserzeichen",
    "Editor": "Editor", // i18n-same
    "Export image": "Bild exportieren",
    "Export": "Exportieren",
    "Left": "Links",
    "Right": "Rechts",
    "Flip H": "Horiz. spiegeln",
    "Flip V": "Vert. spiegeln",
    "Fine angle": "Feinwinkel",
    "Width": "Breite",
    "Height": "Höhe",
    "Lock aspect ratio": "Seitenverhältnis fixieren",
    "Intensity": "Intensität",
    "Blur strength": "Stärke der Unschärfe",
    "Thickness": "Stärke",
    "Corner rounding": "Eckenrundung",
    "Border color": "Rahmenfarbe",
    "Ring thickness": "Ringstärke",
    "Ring color": "Ringfarbe",
    "Text": "Text", // i18n-same
    "Logo": "Logo", // i18n-same
    "Size": "Größe",
    "Text color": "Textfarbe",
    "Change logo": "Logo ändern",
    "Upload logo": "Logo hochladen",
    "Logo size": "Logogröße",
    "Opacity": "Deckkraft",
    "Position": "Position", // i18n-same
    "Text to stamp": "Aufzudruckender Text",
    "Label": "Beschriftung",
    "Color": "Farbe",
    "Stroke / size": "Strich / Größe",
    "Clear drawing": "Zeichnung löschen",
    "Undo": "Rückgängig",
    "Redo": "Wiederholen",
    "Revert to original": "Zurück zum Original",
    "Change": "Ändern",
    "JPG background": "JPG-Hintergrund",
    // RIBBON (module scope, §4.2)
    "Crop": "Zuschneiden",
    "Rotate": "Drehen",
    "Resize": "Größe",
    "Adjust": "Anpassen",
    "Gray": "S/W",
    "Blur": "Weichzeichnen",
    "Border": "Rahmen",
    "Round": "Rund",
    "Mark": "Wasserzeichen",
    "Draw": "Zeichnen",
    // ADJ presets and sliders
    "Vivid": "Lebhaft",
    "B&W": "S/W",
    "Sepia": "Sepia", // i18n-same
    "Cool": "Kühl",
    "Warm": "Warm", // i18n-same
    "Brightness": "Helligkeit",
    "Contrast": "Kontrast",
    "Saturation": "Sättigung",
    "Hue": "Farbton",
    // FONTS
    "Sans": "Serifenlos",
    "Serif": "Serifen",
    "Impact": "Impact", // i18n-same
    "Mono": "Mono", // i18n-same
    // SHAPE_LABELS
    "Pen": "Stift",
    "Line": "Linie",
    "Arrow": "Pfeil",
    "Rectangle": "Rechteck",
    "Ellipse": "Ellipse", // i18n-same
    // POSITION_LABELS
    "Top left": "Oben links",
    "Top center": "Oben Mitte",
    "Top right": "Oben rechts",
    "Middle left": "Mitte links",
    "Center": "Mitte",
    "Middle right": "Mitte rechts",
    "Bottom left": "Unten links",
    "Bottom center": "Unten Mitte",
    "Bottom right": "Unten rechts",
    "Auto enhance": "Automatisch verbessern",
    "Live preview — open the options below, then Apply.": "Live-Vorschau — Optionen unten öffnen, dann „Anwenden“.",
  },
};

export default content;
