import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/jpg-in-png.
 *
 * Head term "JPG in PNG" (12.1K/mo, DE); secondaries "JPG in PNG umwandeln"
 * and "JPG zu PNG", used in the intro, a heading and an FAQ.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-png",
  locale: "de",
  name: "JPG in PNG umwandeln",
  tagline:
    "Wandeln Sie JPG-Bilder online in verlustfreie PNGs um – im Stapel, ohne weiteren Qualitätsverlust. Kostenlos, schnell und 100 % privat in Ihrem Browser.",
  category: { id: "convert", label: "Umwandeln" },

  metaTitle: "JPG in PNG umwandeln – kostenlos & online | oMyImage",
  metaDescription:
    "JPG in PNG umwandeln, kostenlos und ohne Anmeldung: JPG zu PNG im Stapel, verlustfrei für Bearbeitung und Grafiken. Im Browser – Ihre Bilder bleiben privat.",

  intro:
    "Sie brauchen eine verlustfreie Kopie eines JPGs zum Bearbeiten oder für Grafikarbeiten? Mit dem JPG-in-PNG-Konverter von oMyImage wandeln Sie Ihre JPGs direkt im Browser in saubere PNG-Dateien um – einzeln oder in großen Mengen. PNG ist verlustfrei und unterstützt Transparenz, also ideal, wenn Sie keine weitere Kompression wollen. Kein Upload, keine Anmeldung, sofortige Ergebnisse.",

  sections: [
    {
      heading: "Was diese Umwandlung leistet und was nicht",
      id: "expectations",
      body: [
        "Wenn Sie JPG in PNG umwandeln, ändert sich der Container, nicht der Inhalt. PNG speichert das Bild ab diesem Punkt verlustfrei, was wirklich nützlich ist – aber es kann die Kompression nicht rückgängig machen, die das JPG bereits angewendet hat. Zeigt die Quelle sichtbare Blöcke im Himmel oder einen Schleier um Schrift, gibt das PNG das originalgetreu wieder.",
        "Stellen Sie es sich vor, als würden Sie das Bild in seinem aktuellen Zustand einfrieren. Jedes weitere Speichern ist verlustfrei, der Qualitätsverlust summiert sich also nicht mehr. Das ist der echte Nutzen, und deshalb gehört diese Umwandlung an den Anfang eines Bearbeitungsablaufs, nicht ans Ende.",
      ],
    },
    {
      heading: "Warum Designer vor dem Bearbeiten JPG zu PNG umwandeln",
      id: "editing",
      body: [
        "JPG bestraft Wiederholung. Öffnen Sie ein JPG, schneiden Sie es zu, speichern Sie es, öffnen Sie es erneut, passen Sie die Tonwerte an, speichern Sie wieder – jeder Durchgang kodiert das ganze Bild neu und verwirft ein wenig mehr. Nach einer Handvoll Durchgängen ist der Schaden offensichtlich, besonders in weichen Verläufen und an Kanten.",
        "PNG kennt diese Strafe nicht. Nach der Umwandlung können Sie so oft speichern, wie Sie möchten, ohne kumulativen Verlust – damit ist PNG das sinnvolle Arbeitsformat für alles, was Sie gerade verändern. Die andere Hälfte des Grundes ist Transparenz: Solange die Datei ein JPG ist, können Sie keinen Hintergrund ins Nichts radieren, weil das Format keinen Platz hat, das festzuhalten. Die Umwandlung gibt dem Alphakanal zuerst ein Zuhause.",
      ],
    },
    {
      heading: "PNG oder WEBP?",
      id: "webp",
      body: [
        "Wenn Sie umwandeln, um zu bearbeiten oder weil ein System es verlangt, ist PNG richtig, und die Dateigröße ist einfach der Preis dafür. Wenn der Grund ist, dass Sie Transparenz auf einer Webseite möchten, ist WEBP meist das bessere Ziel – es unterstützt wie PNG einen vollständigen Alphakanal, aber mit einem Bruchteil der Größe, und jeder aktuelle Browser kann es dekodieren.",
        "Die praktische Unterscheidung ist das Ziel. PNG für Masterdateien, Bildbearbeitungsprogramme und alles, was in den Druck oder ins Archiv geht. WEBP für alles, was an einen Browser ausgeliefert wird. Ein JPG in ein mehrere Megabyte großes PNG umzuwandeln und dieses dann auf eine Website zu stellen, ist ein häufiger und teurer Fehler.",
      ],
    },
    {
      heading: "Screenshots und Text",
      id: "screenshots",
      body: [
        "Haben Sie einen Screenshot, der als JPG gespeichert wurde, verhindert die Umwandlung in PNG, dass er noch schlechter wird – unscharfe Schrift wird dadurch aber nicht wieder scharf. JPG geht schlecht mit kontrastreichen Kanten um, und Schrift besteht aus nichts anderem, also ist das typische Flimmern um die Buchstaben fest eingebrannt.",
        "Die Lehre für das nächste Mal: Nehmen Sie Screenshots gleich als PNG auf. Das Screenshot-Werkzeug jedes Betriebssystems lässt sich darauf einstellen, und bei Aufnahmen von Benutzeroberflächen ist PNG meist schärfer und kleiner als das JPG-Gegenstück.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie JPG in PNG um",
  steps: [
    { title: "JPGs hochladen", description: "Wählen Sie ein oder mehrere JPG-Bilder aus oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Prüfen", description: "PNG ist verlustfrei, es gibt also keine Qualitätseinstellung – bestätigen Sie einfach Ihre Dateien." },
    { title: "Umwandeln & herunterladen", description: "Klicken Sie auf Umwandeln – ein JPG wird als PNG heruntergeladen, mehrere kommen zusammen als ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "JPG → PNG im Stapel", description: "Wandeln Sie viele JPGs auf einmal in PNG um und laden Sie alle als ein ZIP-Archiv herunter." },
    { icon: "high_quality", title: "Verlustfreie Ausgabe", description: "PNG ist ein verlustfreies Format – Ihre umgewandelten Bilder behalten jedes Pixel an Detail." },
    { icon: "lock", title: "Privat & sofort", description: "Die Umwandlung läuft lokal in Ihrem Browser – Ihre JPGs verlassen Ihr Gerät nie." },
  ],

  faqs: [
    { q: "Warum JPG in PNG umwandeln?", a: "PNG ist verlustfrei und unterstützt Transparenz – nützlich für Bearbeitung, Logos und Grafiken, bei denen Sie keine JPG-Kompressionsartefakte wollen." },
    { q: "Wird das PNG größer als das JPG?", a: "Meist ja – PNG ist verlustfrei, Fotos werden also größer. Der Gegenwert: kein weiterer Qualitätsverlust." },
    { q: "Kann ich mehrere JPGs auf einmal umwandeln?", a: "Ja. Fügen Sie so viele hinzu, wie Sie möchten – mehrere Dateien werden zusammen als ZIP heruntergeladen." },
    { q: "Ist das kostenlos und privat?", a: "Vollständig. Keine Anmeldung, kein Wasserzeichen, und jedes Bild wird in Ihrem Browser verarbeitet." },
    { q: "Verbessert die Umwandlung von JPG zu PNG die Qualität?", a: "Nein, und das ist das häufigste Missverständnis bei dieser Umwandlung. PNG ist verlustfrei und erhält das Bild perfekt – aber das JPG hat schon bei seiner Erstellung Details verworfen, und diese Details sind weg. Sie erhalten eine originalgetreue verlustfreie Kopie eines verlustbehafteten Bildes, kein wiederhergestelltes Original." },
    { q: "Wird dabei Transparenz hinzugefügt?", a: "Nicht von selbst. PNG unterstützt einen Alphakanal, aber ein JPG hat keine Transparenz, die übernommen werden könnte – das Ergebnis ist also vollständig deckend. Die Umwandlung gibt Ihnen eine Datei, die Transparenz aufnehmen kann, sobald Sie sie bearbeiten – deshalb wandeln Designer um, bevor sie einen Hintergrund freistellen." },
    { q: "Warum ist das PNG so viel größer?", a: "Weil PNG nie Daten verwirft. Aus einem 500 KB großen JPG-Foto wird häufig ein PNG mit 3–5 MB. Das sind die erwarteten Kosten eines verlustfreien Formats und kein Zeichen dafür, dass etwas schiefgelaufen ist." },
    { q: "Wann sollte ich JPG in PNG umwandeln?", a: "Vor dem Bearbeiten, wenn Sie mehrmals speichern und keinen weiteren Qualitätsverlust wollen; wenn Sie Transparenz hinzufügen müssen; wenn ein System ausdrücklich PNG verlangt; und bei Screenshots oder textlastigen Bildern, bei denen JPG-Artefakte sichtbar sind." },
    { q: "Entfernt die Umwandlung JPG-Kompressionsartefakte?", a: "Nein. Blöcke, Streifen und Schleier an Kanten sind jetzt Teil der Bilddaten, und PNG speichert sie originalgetreu. Nur ein KI-Restaurierungsmodell kann sie abmildern, und selbst das ist Rekonstruktion, keine Wiederherstellung." },
  ],

  security:
    "Ihre Bilder bleiben privat. Die Umwandlung von JPG in PNG erfolgt vollständig in Ihrem Browser mit HTML-Canvas – nichts wird hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // Drop hint from app/jpg-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG images here": "oder JPG-Bilder hier ablegen",
  },
};

export default content;
