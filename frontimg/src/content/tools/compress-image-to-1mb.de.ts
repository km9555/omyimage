import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-1mb-verkleinern (variant of compress-image,
 * 1 MB). Target query: „Bild auf 1 MB verkleinern“, secondary „Bild unter
 * 1 MB“. Angle: bei 1 MB behält ein Handyfoto meist die VOLLE Auflösung.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-1mb",
  locale: "de",
  name: "Bild auf 1 MB verkleinern",
  tagline:
    "Verkleinern Sie Handyfotos auf unter 1 MB, meist ohne ein einziges Pixel Auflösung zu verlieren. Für Portal-Uploads, E-Mail und Messenger — kostenlos, im Stapel und privat in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 1 MB verkleinern – volle Auflösung | oMyImage",
  metaDescription:
    "Bild auf 1 MB verkleinern, kostenlos und ohne Anmeldung: Handyfotos unter 1 MB, meist in voller Auflösung. Ideal für Portale, Foren und E-Mail-Anhänge.",

  intro:
    "Ein Foto aus einem aktuellen Smartphone wiegt 3 bis 8 MB, und viele Stellen weisen alles über 1 MB zurück: Online-Portale und Lernplattformen, Foren und Kleinanzeigen, Support-Tickets, ältere E-Mail-Systeme. Anders als die strengen Grenzen von 20 KB oder 50 KB ist 1 MB groß genug, um ein Foto in voller Auflösung zu behalten — die Datei muss nur effizienter gespeichert werden. Fügen Sie Ihre Fotos hinzu; jedes kommt als JPG unter 1 MB zurück, in voller Größe, wann immer das passt, und nur etwas kleiner, wenn nicht.",

  sections: [
    {
      heading: "Warum Handyfotos 3 bis 8 MB groß sind",
      id: "why-big",
      body: [
        "Smartphone-Kameras speichern JPGs mit einer sehr hohen Qualitätsstufe, oft 90 bis 95 %, damit vor der Bearbeitung nichts verloren geht. Ab 12 Megapixeln kostet diese Qualität mehrere Megabyte pro Foto, und ein großer Teil davon steckt in Sensorrauschen und feinen Strukturen, die Sie bei normaler Betrachtungsgröße gar nicht sehen.",
        "Wer das Bild mit etwas niedrigerer Qualität neu speichert, entfernt den größten Teil dieses Ballasts. Bei einem typischen 12-Megapixel-Foto braucht es für unter 1 MB eine Qualität von etwa 75 bis 85 % — ein Unterschied, den Sie im direkten Vergleich kaum erkennen —, und die vollen 4000 × 3000 Pixel bleiben erhalten.",
      ],
    },
    {
      heading: "Wenn 1 MB für die volle Größe nicht reicht",
      id: "when-shrinks",
      body: [
        "Sehr detailreiche Motive — Laub, Kies, Menschenmengen, verrauschte Nachtaufnahmen — sowie Fotos mit 48 oder 50 Megapixeln können selbst bei mittlerer Qualität über 1 MB bleiben. Dann verringert das Tool zusätzlich ein wenig die Abmessungen und wählt die größte Größe, die passt, statt einer festen Vorgabe; ein Foto kommt dann zum Beispiel mit 3200 statt 4000 Pixeln Breite heraus.",
        "Das ist immer noch weit mehr Auflösung, als ein Bildschirm oder eine Upload-Vorschau zeigt. Die Ergebnisliste weist darauf hin, wenn ein Bild verkleinert wurde — nichts ändert sich, ohne dass Sie es erfahren.",
      ],
    },
    {
      heading: "Wo ein Bild unter 1 MB verlangt wird",
      id: "where",
      body: [
        "Online-Bewerbungen, die ganze Fotos statt Passbilder annehmen, Lernplattformen von Schulen und Hochschulen, Behördenportale, Community-Foren, Kleinanzeigen und Helpdesk-Systeme begrenzen Anhänge häufig auf 1 MB oder 2 MB. Viele E-Mail-Systeme geraten außerdem ins Stocken, sobald eine Nachricht 10 bis 20 MB übersteigt — das sind nur drei oder vier unkomprimierte Handyfotos.",
        "Wenn Sie einen Stapel vor dem Anhängen auf je 1 MB komprimieren, bleibt alles innerhalb dieser Grenzen, ohne dass sich die Bilder sichtbar verändern.",
      ],
    },
    {
      heading: "1 MB, 1000 KB oder 1024 KB?",
      id: "units",
      body: [
        "Manche Seiten schreiben das Limit als 1 MB, andere als 1000 KB oder 1024 KB. Dieses Tool hält die Datei unter 1.000.000 Byte, der strengsten dieser Lesarten, sodass sie alle besteht. Ihr Computer zeigt das Ergebnis eventuell als etwa 0,95 MB an — die kleine Lücke ist der Sicherheitsabstand.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 1 MB",
  steps: [
    { title: "Fotos hinzufügen", description: "Wählen Sie JPG-, PNG- oder WEBP-Fotos direkt von Smartphone oder Kamera aus oder ziehen Sie sie hierher." },
    { title: "Auf unter 1 MB komprimieren", description: "Das Limit von 1 MB ist bereits eingestellt — ändern Sie es auf 2 MB oder 500 KB, wenn Ihre Seite etwas anderes verlangt." },
    { title: "Herunterladen", description: "Jedes Foto kommt unter 1 MB zurück, in voller Auflösung, wann immer das passt." },
  ],

  features: [
    { icon: "photo_camera", title: "Volle Auflösung bleibt", description: "Die meisten Handyfotos passen ohne ein verlorenes Pixel unter 1 MB — entfernt wird nur überflüssige Qualität." },
    { icon: "speed", title: "Schnelle Stapel", description: "Komprimieren Sie ein ganzes Album auf einmal; jedes Foto wird einzeln bearbeitet, das Set lädt als ZIP herunter." },
    { icon: "lock", title: "Private Fotos bleiben privat", description: "Ihre Bilder werden in Ihrem Browser verarbeitet, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 1 MB?", a: "Fügen Sie das Foto hinzu und klicken Sie auf Komprimieren — das Limit von 1 MB ist bereits eingestellt. Sie erhalten ein JPG unter 1 MB in der besten Qualität, die passt." },
    { q: "Lässt sich ein 1-MB-Foto noch gut drucken?", a: "Ja, in üblichen Druckgrößen. Behält ein Foto unter 1 MB seine volle Auflösung, druckt es im Postkartenformat und in A4 wie das Original." },
    { q: "Wie viele Pixel kann ein Foto mit 1 MB haben?", a: "Meist die vollen 12 Megapixel eines Handyfotos, also etwa 4000 × 3000. Sehr detailreiche oder sehr hochauflösende Fotos werden zum Einpassen eventuell auf rund 3000 Pixel Breite verkleinert." },
    { q: "Kann ich ein 10-MB-Foto auf 1 MB verkleinern?", a: "Ja. Große Dateien sind kein Problem — das Tool öffnet sie in Ihrem Browser und findet die beste Kombination aus Qualität und Größe unter 1 MB." },
    { q: "Entfernt das Verkleinern auf 1 MB die Standortdaten?", a: "Bei jedem Foto, das neu gespeichert wird, ja — ein neues JPG enthält keine EXIF-Metadaten, also auch keinen GPS-Standort. Ein JPG, das schon unter 1 MB war, bekommen Sie unverändert zurück, samt Metadaten; um dort den Standort zu löschen, nutzen Sie „Metadaten entfernen“." },
    { q: "Kann ich Screenshots auf 1 MB komprimieren?", a: "Ja. Screenshots sind oft PNGs und überraschend groß; sie werden in ein JPG unter 1 MB umgewandelt, transparente Bereiche werden dabei weiß gefüllt." },
    { q: "Ist 1 MB dasselbe wie 1000 KB?", a: "In den Einheiten, die die meisten Seiten verwenden, ja. Das Tool hält Dateien unter 1.000.000 Byte, sodass sie auch ein als 1024 KB angegebenes Limit einhalten." },
    { q: "Wie bekomme ich ein Bild unter 1 MB für eine Online-Bewerbung?", a: "Laden Sie das Foto hier hoch, komprimieren Sie es mit dem voreingestellten Limit und hängen Sie die heruntergeladene Datei an. Prüfen Sie zusätzlich, ob das Portal ein bestimmtes Format wie JPG vorschreibt." },
  ],

  security:
    "Ihre Fotos bleiben auf Ihrem Gerät. Die Komprimierung auf 1 MB läuft in Ihrem Browser — nichts wird hochgeladen, gespeichert oder weitergegeben. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, geht an unseren Server und wird dort nach etwa einer Stunde gelöscht.",
};

export default content;
