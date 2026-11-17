import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-unscharf-machen. Target query „Bild unscharf
 * machen“ (590/mo, Germany, Nov 2026), secondary „Bild weichzeichnen“ and
 * „Foto unscharf machen“. Distinct from /de/hintergrund-unscharf-machen (AI
 * keeps the subject sharp) and /de/gesichter-verpixeln (face detection).
 */
const content: ToolPageContent = {
  toolId: "blur-image",
  locale: "de",
  name: "Bild unscharf machen",
  tagline:
    "Machen Sie ein Bild online unscharf – mit einstellbarem Gaußschen Weichzeichner, Live-Vorschau und Stapelverarbeitung. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Bild unscharf machen – online & kostenlos | oMyImage",
  metaDescription:
    "Bild unscharf machen, online und kostenlos: ganzes Foto oder einzelne Bereiche weichzeichnen, verpixeln oder abdecken. Live-Vorschau, im Stapel, ohne Upload.",

  intro:
    "Einen Hintergrund weicher machen, eine Szene anonymisieren oder einen Milchglas-Effekt erzeugen: Mit „Bild unscharf machen“ von oMyImage legen Sie direkt in Ihrem Browser einen gleichmäßigen Gaußschen Weichzeichner über Ihre Fotos – mit einem Regler, um genau die gewünschte Stärke einzustellen, und mit Live-Vorschau. Zeichnen Sie ein einzelnes Bild oder einen ganzen Stapel weich und laden Sie das Ergebnis sofort herunter. Nichts wird hochgeladen, Ihre Bilder bleiben also privat.",

  sections: [
    {
      heading: "So funktioniert ein Gaußscher Weichzeichner",
      id: "how",
      body: [
        "Jedes Pixel wird durch einen gewichteten Durchschnitt der Pixel um es herum ersetzt, wobei nahe Nachbarn stärker zählen als entfernte. Die Gewichtung folgt einer Glockenkurve – daher der Name – und sorgt dafür, dass das Ergebnis natürlich weich wirkt und nicht in eine bestimmte Richtung verschmiert.",
        "Der Radius bestimmt, wie weit diese Mittelung reicht. Ein kleiner Radius mischt nur direkte Nachbarn und nimmt Kanten etwas Härte; ein großer zieht Pixel aus dem ganzen Bild heran und löst es in Farbflächen auf. Der Zusammenhang ist nicht linear – ein doppelter Radius wirkt deutlich mehr als doppelt so stark.",
        "Weil der Vorgang Pixelwerte ersetzt, statt sie abzudecken, ist er von Natur aus destruktiv. Das ist ein Nachteil, wenn Sie ein Foto nur als Effekt weichzeichnen – und genau der Sinn, wenn Sie etwas verbergen wollen.",
      ],
    },
    {
      heading: "Unschärfe zum Schwärzen",
      id: "redaction",
      body: [
        "Ein schwarzes Rechteck über einer Kontonummer in einem Bildbearbeitungsprogramm fühlt sich wie Schwärzen an. Behält die Datei aber Ebenen, lässt sich das Rechteck verschieben, und selbst reduziert verrät es, dass etwas verborgen wurde. Unschärfe entfernt die Information, statt sie zu verdecken: Nach dem Export sind die Zeichen nicht wiederherstellbar, weil sie in den Pixeln nicht mehr vorkommen.",
        "Die praktische Regel: Beurteilen Sie das Ergebnis in voller Vergrößerung, nicht in einer Vorschau. Eine Unschärfe, die im Miniaturbild überzeugend aussieht, kann Text vollständig lesbar lassen, sobald jemand das Bild richtig öffnet. Wenn Sie noch erkennen, was dort stand, kann das jeder.",
        "Um nur einen bestimmten Bereich statt des ganzen Bildes unkenntlich zu machen, können Sie mit „Gesichter verpixeln“ Bereiche zeichnen und den Rest scharf lassen – meist genau das, was Sie wollen, wenn nur ein Teil eines Screenshots sensibel ist.",
      ],
    },
    {
      heading: "Hintergründe für Text",
      id: "backgrounds",
      body: [
        "Text auf einem Foto ist oft schwer zu lesen, weil das Bild darunter Kanten und Kontraste hat, die mit den Buchstaben konkurrieren. Den Hintergrund weichzuzeichnen ist die übliche Lösung – das Foto liefert weiterhin Farbe, Stimmung und Kontext, aber nichts darin kämpft gegen die Schrift.",
        "Deshalb sieht man unscharfe Bilder überall hinter Überschriften, Anmeldebildschirmen, Hero-Bereichen und Titelfolien. Die Unschärfe sollte stärker sein, als man instinktiv meint: Überlebt eine erkennbare Kante, landet sie garantiert hinter einem Buchstaben und erschwert das Lesen.",
        "Weichzeichnen verkleinert außerdem die Datei – ein nützlicher Nebeneffekt bei einem Hintergrundbild in voller Breite, das sonst zu den schwersten Elementen der Seite gehören würde.",
      ],
    },
    {
      heading: "Geringe Schärfentiefe nachahmen",
      id: "depth",
      body: [
        "Eine Kamera mit offener Blende lässt den Hintergrund unscharf werden und das Motiv hervortreten. Smartphones ahmen das mit dem Porträtmodus nach, und nachträglich lässt es sich annähern, indem man ein Bild weichzeichnet und ein scharfes Motiv wieder darüberlegt.",
        "Ehrlich gesagt: Eine gleichmäßige Unschärfe ist nicht das, was ein Objektiv tut. Echte optische Unschärfe nimmt mit der Entfernung zu, ein Foto mit geringer Schärfentiefe wird also zum Hintergrund hin immer weicher, während eine gleichmäßige Unschärfe überall gleich weich ist. Dezent eingesetzt wirkt der Effekt überzeugend; übertrieben sieht er aus wie das, was er ist.",
      ],
    },
  ],

  howToTitle: "So machen Sie ein Bild unscharf",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus oder ziehen Sie sie per Drag & Drop in den Arbeitsbereich." },
    { title: "Stärke einstellen", description: "Ziehen Sie den Unschärfe-Regler und sehen Sie, wie sich die Live-Vorschau sofort ändert." },
    { title: "Anwenden & herunterladen", description: "Klicken Sie auf Weichzeichnen – ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
  ],

  features: [
    { icon: "lens_blur", title: "Ganzes Bild oder Auswahl", description: "Zeichnen Sie das ganze Foto weich oder nur gezeichnete Bereiche – oder kehren Sie es um und machen Sie alles außer diesen Bereichen unscharf, damit Ihr Motiv scharf bleibt." },
    { icon: "gradient", title: "Weichzeichnen, verpixeln oder abdecken", description: "Von einem zarten 1-px-Schleier bis zu kräftigen 50 px Gaußscher Unschärfe, grobe Pixel oder eine volle Farbfläche." },
    { icon: "burst_mode", title: "Stapelverarbeitung", description: "Wenden Sie dieselbe Unschärfe auf einen ganzen Stapel JPG-, PNG- oder WEBP-Bilder an und laden Sie sie als ZIP herunter." },
    { icon: "lock", title: "100 % privat", description: "Alles läuft in Ihrem Browser mit HTML-Canvas – Ihre Bilder werden nie auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Ist das ein Gaußscher Weichzeichner?", a: "Ja – das Tool nutzt den nativen Gauß-Filter des Browsers für ein weiches, hochwertiges Ergebnis in jeder Stärke." },
    { q: "Kann ich nur einen Teil des Bildes unscharf machen?", a: "Ja. Wechseln Sie zu Auswahl und ziehen Sie über die Bereiche, die unscharf werden sollen. Mit Umkehren erreichen Sie das Gegenteil – alles außer diesen Bereichen wird weichgezeichnet. So machen Sie einen Hintergrund unscharf und lassen das Motiv scharf." },
    { q: "Kann ich viele Bilder auf einmal weichzeichnen?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten – ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Ohne Anmeldung und ohne Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Wofür ist Unschärfe eigentlich nützlich?", a: "Vor allem für drei Dinge: sensible Details wie eine Adresse oder Kontonummer verbergen, einen weichen Hintergrund schaffen, damit Text darauf lesbar bleibt, und geringe Schärfentiefe nachahmen, damit ein Motiv sich von einem unruhigen Hintergrund abhebt." },
    { q: "Wie stark sollte die Unschärfe sein?", a: "Für einen Hintergrund hinter Text so stark, dass keine Kante mit der Schrift konkurriert – meist eine recht hohe Einstellung. Für einen Schärfentiefe-Effekt viel schwächer, sonst wirkt es künstlich. Zum Verbergen von Informationen so stark, dass Sie in voller Vergrößerung nichts mehr lesen können." },
    { q: "Lassen sich weichgezeichnete Details wiederherstellen?", a: "Praktisch nicht, sobald das Bild exportiert ist. Weichzeichnen mittelt Pixel und verwirft, was dort war – anders als ein Farbbalken, der nur abdeckt. Deshalb ist Unschärfe das richtige Werkzeug zum Schwärzen und ein gezeichnetes Rechteck nicht." },
    { q: "Was ist der Unterschied zum Tool „Gesichter verpixeln“?", a: "Dieses Tool ist für das ganze Bild oder für Bereiche, die Sie selbst zeichnen. „Gesichter verpixeln“ bietet zusätzlich automatische Gesichtserkennung und Zensur im Stapel und ist daher die bessere Wahl, wenn es darum geht, Personen zu anonymisieren, statt einen visuellen Effekt zu erzielen." },
    { q: "Ändert Weichzeichnen die Dateigröße?", a: "Meist wird die Datei kleiner, manchmal deutlich. Kompression kodiert Unterschiede zwischen benachbarten Pixeln, und genau diese Unterschiede entfernt die Unschärfe – es bleibt also viel weniger Detail zu speichern." },
    { q: "Behebt Unschärfe ein verrauschtes Foto?", a: "Sie versteckt Rauschen, indem sie alles glättet, entfernt mit dem Korn aber auch echte Details – das Ergebnis wirkt weich statt sauber. Eine leichte Unschärfe kann einem sehr verrauschten Bild helfen; alles darüber tauscht ein Problem gegen ein anderes." },
    { q: "Wie mache ich ein Foto auf dem Handy unscharf?", a: "Öffnen Sie diese Seite im Browser Ihres Smartphones, wählen Sie das Foto aus und stellen Sie die Stärke mit dem Regler ein. Bereiche zeichnen Sie mit dem Finger; eine App brauchen Sie nicht." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das Weichzeichnen geschieht vollständig in Ihrem Browser mit HTML-Canvas – nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // BlurImageTool.tsx — module-scope FORMATS and STYLES
    "Same as original": "Wie Original",
    "Blur|effect": "Weichzeichnen",
    "Blur": "Weichzeichnen",
    "Pixelate": "Verpixeln",
    "Solid": "Farbfläche",
    // BlurImageTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Couldn't read that image.": "Das Bild konnte nicht gelesen werden.",
    "Draw at least one area, or switch to Whole image.":
      "Zeichnen Sie mindestens einen Bereich oder wechseln Sie zu Ganzes Bild.",
    "Blurred 1 image.": "1 Bild weichgezeichnet.",
    "Blurred {n} images.": "{n} Bilder weichgezeichnet.",
    "Blur failed.": "Das Weichzeichnen ist fehlgeschlagen.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "done": "fertig",
    "1 image": "1 Bild",
    "{n} images": "{n} Bilder",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Remove": "Entfernen",
    "Quality": "Qualität",
    "Live preview of": "Live-Vorschau von",
    "— applied to all {n} images.": "– angewendet auf alle {n} Bilder.",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Ziehen Sie, um einen Bereich zu zeichnen, klicken Sie einen an, um ihn auszuwählen, ziehen Sie an den Griffpunkten, um die Größe zu ändern, und drücken Sie Entf zum Löschen.",
    "1 area.": "1 Bereich.",
    "{n} areas.": "{n} Bereiche.",
    "Clear images": "Bilder entfernen",
    "Files": "Dateien",
    "Blur settings": "Unschärfe-Einstellungen",
    "Blur Settings": "Unschärfe-Einstellungen",
    "Blurring…": "Wird weichgezeichnet…",
    "Blur {n} images": "{n} Bilder weichzeichnen",
    "Blur & download": "Weichzeichnen & herunterladen",
    "What to blur": "Was unscharf werden soll",
    "Whole image softens everything. Selective blurs only the areas you draw — or everything except them, with Invert on.":
      "Ganzes Bild zeichnet alles weich. Auswahl zeichnet nur die Bereiche weich, die Sie zeichnen – oder mit Umkehren alles außer ihnen.",
    "Whole image": "Ganzes Bild",
    "Selective": "Auswahl",
    "Blur everything": "Alles weichzeichnen",
    "except": "außer",
    "these areas": "diesen Bereichen",
    "New area shape": "Form neuer Bereiche",
    "Ellipse": "Ellipse", // i18n-same
    "Rectangle": "Rechteck",
    "Clear areas": "Bereiche löschen",
    "Effect": "Effekt",
    "Blur strength": "Unschärfe-Stärke",
    "Pixel size": "Pixelgröße",
    "Output format": "Ausgabeformat",
    "Fill colour": "Füllfarbe",
    "JPG background": "JPG-Hintergrund",
  },
};

export default content;
