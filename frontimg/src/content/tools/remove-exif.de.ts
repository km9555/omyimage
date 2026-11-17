import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/metadaten-entfernen.
 *
 * Primary query "Metadaten entfernen" (880/mo, DE); secondary "EXIF-Daten
 * entfernen", "GPS-Daten aus Foto entfernen". DSGVO/privacy angle added as an
 * FAQ — the processing facts stay exactly as on the English page.
 */
const content: ToolPageContent = {
  toolId: "remove-exif",
  locale: "de",
  name: "Metadaten entfernen",
  tagline:
    "Entfernen Sie EXIF- und andere Metadaten — inklusive GPS-Standort — online aus Ihren Bildern, bevor Sie sie teilen. Mit Stapelverarbeitung, kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Metadaten entfernen – EXIF-Daten löschen | oMyImage",
  metaDescription:
    "Metadaten entfernen: EXIF-Daten entfernen, GPS-Standort, Kamera und Zeitstempel aus Fotos löschen, auch im Stapel. Kostenlos, im Browser, ohne Upload.",

  intro:
    "Schützen Sie Ihre Privatsphäre, bevor Sie Fotos teilen. Mit diesem Tool von oMyImage können Sie die versteckten Metadaten aus Ihren Bildern entfernen — GPS-Standort, Kamera- und Objektivmodell, Software und Zeitstempel —, indem die Bilder direkt in Ihrem Browser neu kodiert werden. Bereinigen Sie ein einzelnes Bild oder einen ganzen Stapel und laden Sie sofort herunter. Nichts wird hochgeladen, Ihre Fotos und deren Daten bleiben privat.",

  sections: [
    {
      heading: "Was Ihre Fotos mit sich tragen",
      id: "what",
      body: [
        "Jedes Foto, das ein Handy oder eine Kamera aufnimmt, kommt mit einem angehängten Block Metadaten. Der EXIF-Standard umfasst die technischen Felder — Verschlusszeit, Blende, ISO, Brennweite, Kameramodell —, die nützlich und harmlos sind. Interessant ist, was daneben steht.",
        "Die GPS-Koordinaten sind das Entscheidende. Waren die Ortungsdienste aktiv, speichert die Datei den Aufnahmeort auf wenige Meter genau, zusammen mit exaktem Datum und Uhrzeit. Ein Foto aus Ihrem Wohnzimmer enthält Ihre Wohnadresse in einer Form, die jede Software sofort lesen kann.",
        "Und es gibt mehr: Geräteseriennummern, die verschiedene Fotos derselben Kamera zuordnen, Besitzer- und Copyright-Felder, die manche Kameras automatisch ausfüllen, Bearbeitungsverläufe bestimmter Programme und auf manchen Geräten ein eingebettetes Vorschaubild des Originals — das gelegentlich einen Zuschnitt übersteht und zeigt, was Sie weggeschnitten haben.",
      ],
    },
    {
      heading: "Wo das Risiko tatsächlich liegt",
      id: "risk",
      body: [
        "Große soziale Netzwerke entfernen Metadaten beim Hochladen, ein öffentlich gepostetes Foto ist also meist sauber. Das erzeugt eine trügerische Sicherheit, denn die Wege, über die Fotos am häufigsten ihren Standort verraten, sind die, an die niemand denkt.",
        "Direktnachrichten und Chat-Apps leiten oft die Originaldatei weiter. Ebenso E-Mail-Anhänge, Links zu Cloud-Speichern, Uploads in Foren und Kleinanzeigen, Bilder an einen Fotodruck-Dienst und alles, was Sie auf Ihrer eigenen Website veröffentlichen. Der klassische Fall: Möbel online verkaufen, mit Fotos aus der eigenen Wohnung — die Anzeige ist anonym, die Datei nicht.",
        "Der andere übersehene Weg ist beruflich. Fotos, die Sie einem Kunden, einer Journalistin, einer Versicherung oder in einem Rechtsverfahren übergeben, tragen alles mit sich, was sie tragen, und der Empfänger kann es lesen — ob das beabsichtigt war oder nicht.",
      ],
    },
    {
      heading: "Die Ausrichtung bleibt korrekt",
      id: "orientation",
      body: [
        "Ein EXIF-Feld leistet echte Arbeit: der Ausrichtungs-Tag. Handysensoren sind fest verbaut, wenn Sie das Handy drehen, wird das Bild also seitlich gespeichert, und ein Tag vermerkt, wie herum es angezeigt werden soll.",
        "Viele Metadaten-Entferner werfen diese Anweisung mit allem anderen weg, und ein Foto, das überall richtig aussah, liegt plötzlich auf der Seite. Kaputt ist nichts — die Pixel lagen schon immer seitlich, nur die erklärende Notiz fehlt jetzt.",
        "Dieses Tool vermeidet das: Die Ausrichtung aus dem Tag wird zuerst auf die Pixel angewendet, erst danach werden die Metadaten verworfen. Das Ergebnis ist richtig herum gespeichert, braucht keine Anweisung und wird überall aufrecht angezeigt.",
      ],
    },
    {
      heading: "So funktioniert das Entfernen der EXIF-Daten hier",
      id: "how",
      body: [
        "Das Bild wird auf einen Canvas dekodiert und aus diesen reinen Pixeln neu kodiert. Ein Canvas kennt keine Metadaten, also wird nichts übernommen — die Ausgabe enthält das Bild und sonst nichts. Das ist schon vom Prinzip her gründlich, statt auf einer Liste zu löschender Felder zu beruhen.",
        "Alles passiert in Ihrem Browser, und das ist angesichts des Zwecks wichtig. Ein Foto auf einen Server hochzuladen, um seine Standortdaten zu entfernen, würde die Übung ziemlich ad absurdum führen; hier verlässt die Datei nie Ihr Gerät, und nirgendwo liegt eine Kopie mit den Koordinaten, die Sie loswerden wollten.",
        "Stapel werden genauso verarbeitet und als eine ZIP-Datei zurückgegeben — der Normalfall, wenn Sie eine Reihe Fotos für eine Anzeige vorbereiten oder einen Ordner vor dem Teilen bereinigen.",
      ],
    },
  ],

  howToTitle: "So entfernen Sie EXIF-Daten aus einem Bild",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein oder mehrere Bilder aus, oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Ausgabe wählen", description: "Behalten Sie das Originalformat oder wandeln Sie um, und legen Sie die Qualität für JPG/WEBP fest." },
    { title: "Bereinigen & herunterladen", description: "Klicken Sie auf „Bereinigen“ — ein einzelnes Bild wird direkt heruntergeladen, mehrere zusammen als ZIP." },
  ],

  features: [
    { icon: "shield", title: "Entfernt GPS- & Kameradaten", description: "Entfernt EXIF, GPS-Standort, Kamera-, Objektiv- und Zeitstempeldaten durch vollständiges Neukodieren der Pixel." },
    { icon: "burst_mode", title: "Stapelbereinigung", description: "Bereinigen Sie einen ganzen Stapel JPG-, PNG- oder WEBP-Bilder auf einmal und laden Sie sie als ZIP herunter." },
    { icon: "lock", title: "100 % privat", description: "Alles läuft in Ihrem Browser — Ihre Bilder werden nie auf einen Server hochgeladen." },
  ],

  faqs: [
    { q: "Welche Metadaten werden entfernt?", a: "Alle eingebetteten EXIF-, IPTC- und XMP-Daten, darunter GPS-Standort, Kamera- und Objektivmodell und Aufnahmedatum — die Ausgabe enthält nur noch die Pixel." },
    { q: "Verschlechtert sich die Bildqualität?", a: "Das Bild wird neu kodiert; stellen Sie die Qualität auf 100 % für ein praktisch identisches Ergebnis. Der Standardwert von 95 % ist ein sicherer Kompromiss." },
    { q: "Kann ich viele Bilder auf einmal bereinigen?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten — ein einzelnes Bild wird direkt heruntergeladen, mehrere Bilder zusammen als ZIP." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird lokal in Ihrem Browser verarbeitet." },
    { q: "Was genau steht in den EXIF-Daten?", a: "Weit mehr, als die meisten erwarten: GPS-Koordinaten auf wenige Meter genau, exaktes Datum und Uhrzeit, Kamera- oder Handymodell samt Seriennummer, Objektiv- und Belichtungseinstellungen und auf manchen Geräten Besitzername, Copyright-Feld und ein Vorschaubild des Originals." },
    { q: "Entfernen soziale Netzwerke EXIF-Daten automatisch?", a: "Die großen tun das in der Regel beim Hochladen, verlassen sollten Sie sich darauf aber nicht. Direktnachrichten, Cloud-Links, E-Mail-Anhänge, Foren, Kleinanzeigen und eigene Websites reichen die Datei oft unverändert weiter — und genau dort teilen Menschen Fotos von Dingen an ihrer Wohnadresse." },
    { q: "Verändert das Entfernen der EXIF-Daten, wie das Foto aussieht?", a: "Nicht seine Ausrichtung. Der Ausrichtungs-Tag wird zuerst auf die Pixel angewendet und die Metadaten erst danach verworfen, ein aufrecht angezeigtes Foto bleibt also aufrecht. Die einzige andere Änderung ist das Neukodieren, das Sie über die Qualitätseinstellung steuern." },
    { q: "Entfernt das ein verstecktes Wasserzeichen oder einen Tracking-Code?", a: "Nein. Es löscht die üblichen Metadatenfelder. Steganografische Markierungen in den Pixeln selbst sind etwas völlig anderes und überstehen das Entfernen der Metadaten — und übrigens auch die meisten Bearbeitungen." },
    { q: "Kann ich die Metadaten danach wiederherstellen?", a: "Nicht aus der bereinigten Datei. Behalten Sie Ihr Original, wenn Aufnahmedatum oder Ort für Sie wichtig sind — zum Ordnen einer Fotosammlung, für Versicherungsunterlagen oder einfach, um sich zu erinnern, wo ein Bild entstanden ist." },
    { q: "Wie prüfe ich vorher, was mein Foto enthält?", a: "Mit dem Tool „EXIF-Daten anzeigen“. Es liest jeden Tag Ihrer Datei, inklusive GPS-Koordinaten auf einer Karte, komplett in Ihrem Browser. Erst nachsehen, dann entfernen — der zusätzliche Schritt lohnt sich meist." },
    { q: "Hilft das beim Datenschutz nach DSGVO?", a: "Es hilft, personenbezogene Angaben wie Standort, Gerät und Aufnahmezeit nicht ungewollt weiterzugeben — etwa bei Fotos für Kleinanzeigen, Bewerbungen oder Kunden. Da die Verarbeitung lokal in Ihrem Browser erfolgt, gelangen die Bilder dabei selbst nie zu uns." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das Entfernen der Metadaten geschieht vollständig in Ihrem Browser — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // RemoveExifTool.tsx
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Couldn't process the images.": "Die Bilder konnten nicht verarbeitet werden.",
    "or drop JPG, PNG or WEBP images here": "oder JPG-, PNG- oder WEBP-Bilder hier ablegen",
    "Clear files": "Dateien leeren",
    "Remove": "Entfernen",
    "Metadata settings": "Metadaten-Einstellungen",
    "Output Settings": "Ausgabe-Einstellungen",
    "Format": "Format", // i18n-same
    "Quality": "Qualität",
    "JPG background": "JPG-Hintergrund",
    "Strips EXIF, GPS location and camera data by re-encoding the pixels — all in your browser.":
      "Entfernt EXIF, GPS-Standort und Kameradaten durch Neukodieren der Pixel — alles in Ihrem Browser.",
    "Clean": "Bereinigen",
    "Cleaning…": "Wird bereinigt…",
    "Remove metadata from {n}": "Metadaten aus {n} entfernen",
    "Remove metadata & download": "Metadaten entfernen & herunterladen",
    "Removed metadata from 1 image.": "Metadaten aus 1 Bild entfernt.",
    "Removed metadata from {n} images.": "Metadaten aus {n} Bildern entfernt.",
    "metadata removed": "Metadaten entfernt",
    "Download": "Herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
  },
};

export default content;
