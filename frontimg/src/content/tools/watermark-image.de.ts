import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/wasserzeichen-einfuegen. Target query „Wasserzeichen
 * einfügen“ (Germany, Nov 2026), secondary „Wasserzeichen erstellen“ (590/mo)
 * and „Wasserzeichen hinzufügen“. Sie-form.
 *
 * The default watermark text is the brand "© oMyImage" in every language
 * (WatermarkTool.tsx) — not copy. The nine named positions, FONTS and FORMATS
 * are module scope, maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "watermark-image",
  locale: "de",
  name: "Wasserzeichen einfügen",
  seoName: "Wasserzeichen",
  tagline:
    "Fügen Sie Ihren Bildern online ein Wasserzeichen aus Text oder Logo hinzu – mit Position, Deckkraft und Drehung, Live-Vorschau und Stapelverarbeitung. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Wasserzeichen einfügen – kostenlos & online | oMyImage",
  metaDescription:
    "Wasserzeichen einfügen, online und kostenlos: Text oder Logo mit Position, Deckkraft und Drehung, Live-Vorschau und Stapel. Wasserzeichen erstellen ohne Upload.",

  intro:
    "Mit einem eigenen Wasserzeichen schützen Sie Ihre Fotos und versehen Ihre Bilder mit Ihrer Marke. Mit dem Tool „Wasserzeichen einfügen“ von oMyImage fügen Sie einen Text hinzu – in der Schrift, Farbe und mit der Kontur Ihrer Wahl – oder legen Ihr eigenes Logo über das Bild und platzieren es genau, mit Live-Vorschau, Deckkraft und Drehung. Sie können ein Wasserzeichen für ein einzelnes Bild erstellen oder einen ganzen Stapel auf einmal versehen. Alles läuft in Ihrem Browser, Ihre Bilder bleiben also privat.",

  sections: [
    {
      heading: "Was ein Wasserzeichen tatsächlich leistet",
      id: "purpose",
      body: [
        "Ein Wasserzeichen erfüllt drei Aufgaben, und es lohnt sich, klar zu sein, welche davon Sie brauchen. Es schreckt vor beiläufiger Weiterverwendung ab, denn die meisten Menschen, die ein unmarkiertes Bild ohne Zögern speichern würden, machen sich bei einem markierten nicht die Mühe. Es nennt den Urheber, sodass Ihr Name mitreist, wenn ein Bild weitergegeben wird. Und es kennzeichnet Vorschauen: Sie können einem Kunden das Bild zeigen, während die unlizenzierte Version unattraktiv für die Nutzung bleibt.",
        "Was es nicht leistet, ist Diebstahl zu verhindern. Wer ein Bildbearbeitungsprogramm und etwas Geduld hat, kann ein Wasserzeichen entfernen, und KI-gestütztes Inpainting hat diese Hürde deutlich gesenkt. Wer ein Wasserzeichen als Kopierschutz versteht, landet bei Markierungen, die so massiv sind, dass sie das Foto ruinieren – und trotzdem niemanden aufhalten, der es wirklich darauf anlegt.",
        "Das realistische Ziel sind Reibung und Urhebernennung. Wenn Sie es so betrachten, werden die Gestaltungsentscheidungen deutlich einfacher.",
      ],
    },
    {
      heading: "Platzierung und das Zuschneide-Problem",
      id: "placement",
      body: [
        "Eine Markierung in einer Ecke ist dezent und wirkt professionell, deshalb ist sie der Standard für fertige Arbeiten. Die Schwäche liegt auf der Hand: Eine Ecke lässt sich mühelos wegschneiden, und das Bild übersteht den Zuschnitt ohne sichtbaren Verlust.",
        "Ein Wasserzeichen, das sich über das ganze Bild wiederholt oder diagonal durch die Mitte läuft, löst das Problem – zu einem Preis. Wer es entfernen will, muss nun über dem Motiv retuschieren statt drumherum zu schneiden, und das ist echte Arbeit. Das Foto ist dafür aber schwerer anzusehen. Diese Variante gehört deshalb auf Vorschauen, Probeabzüge und Portfolio-Bilder, nicht auf ausgelieferte Arbeiten.",
        "Ein Mittelweg, den viele Fotografen nutzen: eine einzelne Markierung so setzen, dass sie das Motiv überlappt, statt auf leerem Hintergrund zu sitzen. Das stört weit weniger als ein Kachelmuster und lässt sich viel schwerer sauber entfernen als eine Markierung in der Ecke.",
      ],
    },
    {
      heading: "Deckkraft, Größe und Kontrast",
      id: "design",
      body: [
        "Eine Deckkraft von etwa 30–50 % ist der Bereich, in dem ein Wasserzeichen lesbar ist, ohne das Bild zu dominieren. Die Falle: an einem Bild testen und auf hundert anwenden. Ein weißes Wasserzeichen mit 35 % ist auf einem dunklen Foto deutlich sichtbar und auf einem hellen Himmel praktisch unsichtbar. Ist Ihr Stapel gemischt, prüfen Sie das hellste und das dunkelste Bild, bevor Sie es anwenden.",
        "Die Größe ist weniger wichtig, als viele denken. Ein Wasserzeichen, das etwa 10–20 % der Bildbreite einnimmt, ist auf dem Smartphone lesbar, ohne aufdringlich zu sein. Sehr kleine Markierungen sind leicht wegzuschneiden und leicht zu übersehen; sehr große sind kein Wasserzeichen mehr, sondern ein Plakat.",
        "Verwenden Sie für Logos ein transparentes PNG. Ein als JPG gespeichertes Logo bringt ein weißes Rechteck mit, das auf jedem Bild, das hinter dem Logo nicht weiß ist, wie ein Fehler aussieht.",
      ],
    },
    {
      heading: "Behalten Sie ein Original ohne Wasserzeichen",
      id: "workflow",
      body: [
        "Ein Wasserzeichen einzufügen ist destruktiv – es wird Teil der Pixel und lässt sich später nicht mehr herauslösen. Arbeiten Sie immer mit einer Kopie und bewahren Sie das saubere Original auf. Sobald Sie das Bild ordentlich lizenzieren, drucken oder an einen Kunden liefern müssen, ist die Version mit Wasserzeichen nutzlos.",
        "Die sinnvolle Reihenfolge lautet: bearbeiten, dann auf die Zielgröße skalieren, das Wasserzeichen ganz zum Schluss. Wer es vor dem Skalieren einfügt, verkleinert es zusammen mit allem anderen, und auf dem kleineren Bild ist es dann oft nicht mehr lesbar.",
        "Hier läuft alles in Ihrem Browser, das Original ohne Wasserzeichen verlässt Ihr Gerät also nie – und das ist wichtig, denn meist fügen Sie ein Wasserzeichen ja gerade deshalb hinzu, weil das Bild nicht frei kursieren soll.",
      ],
    },
  ],

  howToTitle: "So fügen Sie ein Wasserzeichen in ein Bild ein",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus oder ziehen Sie sie per Drag & Drop in den Arbeitsbereich." },
    { title: "Wasserzeichen erstellen", description: "Geben Sie einen Text ein oder laden Sie ein Logo hoch und stellen Sie Position, Größe, Deckkraft und Drehung mit Live-Vorschau ein." },
    { title: "Anwenden & herunterladen", description: "Klicken Sie auf Wasserzeichen anwenden – ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
  ],

  features: [
    { icon: "title", title: "Text oder Logo", description: "Setzen Sie einen eigenen Text – mit Schrift, Farbe und Kontur – oder legen Sie Ihr eigenes transparentes PNG-Logo über das Bild." },
    { icon: "grid_view", title: "Volle Kontrolle über die Platzierung", description: "Wählen Sie eine von neun Positionen, stellen Sie Größe, Deckkraft und Drehung ein und sehen Sie jede Änderung live vor dem Export." },
    { icon: "lock", title: "Privat & im Stapel", description: "Versehen Sie einen ganzen Stapel auf einmal mit demselben Wasserzeichen, komplett in Ihrem Browser – Bilder werden nie hochgeladen." },
  ],

  faqs: [
    { q: "Kann ich mein eigenes Logo als Wasserzeichen verwenden?", a: "Ja. Wechseln Sie zu „Logo“, laden Sie ein PNG hoch (transparent funktioniert am besten) und stellen Sie Größe, Position und Deckkraft ein." },
    { q: "Kann ich vielen Bildern gleichzeitig ein Wasserzeichen hinzufügen?", a: "Ja. Dasselbe Wasserzeichen wird auf jedes hinzugefügte Bild angewendet, und alle werden zusammen als ZIP heruntergeladen." },
    { q: "Ist das Wasserzeichen auf jedem Bild lesbar?", a: "Aktivieren Sie die Textkontur, damit es auch auf unruhigen Hintergründen lesbar bleibt, und passen Sie Deckkraft und Farbe nach Geschmack an." },
    { q: "Werden meine Originalbilder verändert?", a: "Nein. Ihre Originale bleiben unberührt; das Tool erzeugt in Ihrem Browser neue Kopien mit Wasserzeichen." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen von uns, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Wo sollte ich ein Wasserzeichen platzieren?", a: "Eine einzelne Markierung in der Ecke stört am wenigsten, ist aber am leichtesten wegzuschneiden. Ein gekacheltes oder diagonales Wasserzeichen durch die Mitte ist viel schwerer zu entfernen, konkurriert aber mit dem Bild. Richten Sie die Wahl nach dem Risiko: Portfolio-Vorschauen und Probeabzüge rechtfertigen die auffällige Variante, fertige Kundenarbeiten meist nicht." },
    { q: "Welche Deckkraft funktioniert am besten?", a: "Für die meisten Bilder zwischen 30 % und 50 %. Niedrig genug, dass das Foto wirkt, hoch genug, dass das Wasserzeichen einen Screenshot übersteht. Unter etwa 20 % kann es auf einer hellen oder unruhigen Fläche ganz verschwinden – und dann verfehlt es seinen Zweck." },
    { q: "Kann man ein Wasserzeichen entfernen?", a: "Wer es darauf anlegt, kann mit einem Bildbearbeitungsprogramm fast jedes Wasserzeichen entfernen oder abschwächen, und KI-Inpainting hat das einfacher gemacht. Ein Wasserzeichen schreckt vor beiläufigem Kopieren ab und weist die Urheberschaft aus; ein Kopierschutz ist es nicht. Markierungen, die das Motiv überlappen, sind deutlich schwerer zu entfernen als solche auf leerem Hintergrund." },
    { q: "Text oder Logo – was ist besser?", a: "Text ist schneller und bleibt in jeder Größe scharf – ein Name, ein Handle oder eine Domain genügt oft. Ein Logo transportiert Wiedererkennung und wirkt professioneller. Wenn Sie ein Logo verwenden, ist ein transparentes PNG unverzichtbar; ein JPG-Logo bringt sein eigenes weißes Rechteck mit." },
    { q: "Verschlechtert das Wasserzeichen die Bildqualität?", a: "Das Wasserzeichen wird direkt auf das Bild gezeichnet, darüber hinaus wird nichts verschlechtert. Beim Export als JPG kostet die erneute Kodierung wie üblich ein wenig Qualität; exportieren Sie als PNG, um das zu vermeiden. In jedem Fall gilt: Behalten Sie ein Original ohne Wasserzeichen – aus Ihrer Kopie lässt es sich später nicht mehr entfernen." },
    { q: "Kann ich einen ganzen Stapel identisch markieren?", a: "Ja, das ist der Normalfall. Legen Sie Text oder Logo, Position und Deckkraft einmal fest und wenden Sie sie auf alle Dateien an; Sie erhalten sie als ein ZIP zurück. Die Position ist relativ, sodass gemischte Hoch- und Querformate das Wasserzeichen jeweils in der richtigen Ecke bekommen." },
    { q: "Wie füge ich meinen Instagram-Namen als Wasserzeichen ein?", a: "Wählen Sie „Text“, geben Sie Ihren @-Namen ein, aktivieren Sie die Kontur, damit er auf jedem Hintergrund sichtbar ist, und setzen Sie ihn mit 40–60 % Deckkraft in eine Ecke. Wenden Sie das auf den ganzen Stapel an – alle Fotos tragen dann dieselbe Signatur." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das Wasserzeichen wird vollständig in Ihrem Browser mit HTML-Canvas eingefügt – nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // WatermarkTool.tsx
    "Couldn't read that logo image.": "Das Logo-Bild konnte nicht gelesen werden.",
    "Upload a logo image first.": "Laden Sie zuerst ein Logo-Bild hoch.",
    "Watermarked 1 image.": "1 Bild mit Wasserzeichen versehen.",
    "Watermarked {n} images.": "{n} Bilder mit Wasserzeichen versehen.",
    "Watermarking failed.": "Das Wasserzeichen konnte nicht eingefügt werden.",
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "done": "fertig",
    "Live preview of": "Live-Vorschau von",
    "— the same watermark applies to all {n} images.": "– dasselbe Wasserzeichen gilt für alle {n} Bilder.",
    "1 image": "1 Bild",
    "{n} images": "{n} Bilder",
    "Clear images": "Bilder entfernen",
    "Files": "Dateien",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Remove": "Entfernen",
    "Apply": "Anwenden",
    "Watermark settings": "Wasserzeichen-Einstellungen",
    "Watermark Settings": "Wasserzeichen-Einstellungen",
    "Applying…": "Wird angewendet…",
    "Watermark {n} images": "{n} Bilder markieren",
    "Watermark & download": "Wasserzeichen anwenden & herunterladen",
    "Text": "Text", // i18n-same
    "Logo": "Logo", // i18n-same
    "Watermark text": "Wasserzeichen-Text",
    "Font": "Schriftart",
    "Size": "Größe",
    "Bold": "Fett",
    "Text color": "Textfarbe",
    "Outline (for legibility)": "Kontur (für bessere Lesbarkeit)",
    "Outline color": "Konturfarbe",
    "Change logo": "Logo ändern",
    "Upload logo (PNG)": "Logo hochladen (PNG)",
    "Logo size": "Logo-Größe",
    "Opacity": "Deckkraft",
    "Rotation": "Drehung",
    "Position": "Position", // i18n-same
    "Output": "Ausgabe",
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    // POSITION_LABELS / FONTS / FORMATS (module scope, §4.2)
    "Top left": "Oben links",
    "Top center": "Oben Mitte",
    "Top right": "Oben rechts",
    "Middle left": "Mitte links",
    "Center": "Mitte",
    "Middle right": "Mitte rechts",
    "Bottom left": "Unten links",
    "Bottom center": "Unten Mitte",
    "Bottom right": "Unten rechts",
    "Sans (Inter)": "Serifenlos (Inter)",
    "Serif (Georgia)": "Serifenschrift (Georgia)",
    "Impact": "Impact", // i18n-same
    "Monospace": "Festbreitenschrift",
    "Same as original": "Wie Original",
  },
};

export default content;
