import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bildgroesse-in-kb-erhoehen (variant of compress-image,
 * preset mode "increase"). Primary query: „Bildgröße in KB erhöhen“.
 * Quality first, then pixels, padding only as a last resort — and the page
 * says which happened.
 */
const content: ToolPageContent = {
  toolId: "increase-image-size-in-kb",
  locale: "de",
  name: "Bildgröße in KB erhöhen",
  tagline:
    "Bringen Sie ein Foto oder eine Unterschrift auf mindestens 10, 20, 50 KB oder jede Größe, die ein Formular verlangt – durch höhere Qualität und nur bei Bedarf mehr Pixel. Auch Bereiche wie 20–50 KB sind möglich. Kostenlos, direkt in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bildgröße in KB erhöhen – kostenlos & online | oMyImage",
  metaDescription:
    "Bildgröße in KB erhöhen: Mindestgröße eingeben, z. B. 20 KB, und ein JPG erhalten, das sie erreicht – auch für Bereiche wie 20–50 KB. Kostenlos, ohne Upload.",

  intro:
    "Die meisten Bild-Tools machen Dateien kleiner. Manche Formulare wollen das Gegenteil: „Das Foto muss zwischen 20 KB und 50 KB groß sein“ – und Ihr Bild mit 12 KB wird abgelehnt, weil es zu klein ist. Diese Seite erhöht die Dateigröße in KB bis zu dem Minimum, das Sie festlegen, und hält sie unter einem Maximum, falls es eines gibt. Und zwar auf ehrliche Weise: Das Bild wird zuerst in höherer Qualität gespeichert, dann mit mehr Pixeln. Das Ergebnis sieht also mindestens so gut aus wie Ihr Ausgangsbild.",

  sections: [
    {
      heading: "Warum Formulare eine Mindestgröße vorgeben",
      id: "why-minimum",
      body: [
        "Ein Minimum ist eine grobe Qualitätskontrolle. Ein Foto mit 5 KB wurde meist so stark komprimiert oder so klein gerechnet, dass ein Gesicht kaum noch zu erkennen ist – und eine Byte-Grenze ist für die Betreiber eines Portals der einfachste Weg, solche Bilder auszusortieren. Deshalb steht die Regel oft als Bereich da: mindestens 20 KB, damit das Foto deutlich ist, höchstens 50 KB, damit der Server nicht überläuft.",
        "Es geht also nicht nur um eine größere Zahl. Gesucht ist eine Datei, die das Minimum schafft, weil sie mehr Bildinformation trägt – genau das, was die Regel des Formulars sicherstellen wollte.",
      ],
    },
    {
      heading: "So wird die Datei größer",
      id: "how",
      body: [
        "Zuerst wird das Foto erneut als JPG in der höchsten Qualitätsstufe gespeichert. Eine stark komprimierte Datei wird dadurch oft doppelt oder dreimal so groß, ohne dass etwas verloren geht. Reicht das noch nicht für das Minimum, wird das Bild schrittweise vergrößert – um die Quadratwurzel des Fehlbetrags, weil die Dateigröße mit der Pixelzahl wächst – bis höchstens auf die vierfache Breite und Höhe.",
        "Ist ein Maximum gesetzt und die vergrößerte Datei schießt darüber hinaus, wird die Qualität gerade so weit gesenkt, dass sie im Bereich landet. Neben jeder Datei sehen Sie die Details: wie viel größer sie wurde und, falls sie vergrößert wurde, ihre neuen Maße.",
      ],
    },
    {
      heading: "Wann Fülldaten eingesetzt werden",
      id: "padding",
      body: [
        "Ein sehr schlichtes Bild, etwa eine kleine Unterschrift auf Weiß, kann selbst in voller Qualität und auf vierfacher Breite und Höhe unter dem Minimum bleiben. Erst dann fügt das Tool dem JPG einen leeren Datenblock hinzu, bis das Minimum erreicht ist. Jeder Bildbetrachter ignoriert diesen Block: Das Bild ist exakt dasselbe, die Datei ist nur schwerer.",
        "In der Ergebnisliste steht, wenn eine Datei aufgefüllt wurde. Für Unterschriften mit fester Pixelgröße erledigt das Tool „Unterschrift skalieren“ dasselbe, nachdem es die Unterschrift zuvor bereinigt und zugeschnitten hat.",
      ],
    },
    {
      heading: "Bereiche wie 20–50 KB",
      id: "ranges",
      body: [
        "Tragen Sie die kleinere Zahl als Minimum und die größere als Maximum ein. Dateien, die bereits JPGs innerhalb des Bereichs sind, bekommen Sie unverändert zurück; alles andere wird hineingebracht. Für das umgekehrte Problem – eine Datei ist zu groß – nutzen Sie „Bild komprimieren“ oder eine der Seiten zum Komprimieren auf eine feste Größe.",
        "Formulare sind sich nicht einig, ob ein Kilobyte 1.000 oder 1.024 Bytes hat. Das Tool wählt deshalb auf beiden Seiten die sichere Lesart: Ein Minimum von 20 KB bedeutet mindestens 20.480 Bytes, ein Maximum von 50 KB höchstens 50.000 Bytes. Die Datei passt so oder so.",
      ],
    },
  ],

  howToTitle: "So erhöhen Sie die Bildgröße in KB",
  steps: [
    { title: "Fotos hinzufügen", description: "Wählen Sie die zu kleinen Bilder aus oder ziehen Sie sie hierher – JPG, PNG oder WebP." },
    { title: "Minimum (und Maximum) festlegen", description: "Geben Sie das Minimum in KB ein und, falls das Formular einen Bereich nennt, auch das Maximum." },
    { title: "Herunterladen", description: "Jede Datei kommt als JPG zurück, das mindestens so groß ist wie das Minimum." },
  ],

  features: [
    { icon: "high_quality", title: "Qualität steigt, statt zu sinken", description: "Die Datei wächst, weil das Bild zuerst in höherer Qualität gespeichert wird – nichts wird verschlechtert, um Bytes hinzuzufügen." },
    { icon: "photo_size_select_large", title: "Bereiche werden eingehalten", description: "Legen Sie Minimum und Maximum fest, etwa 20–50 KB, und jede Datei landet darin." },
    { icon: "lock", title: "Privat", description: "Ihre Fotos werden in Ihrem Browser verarbeitet, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie erhöhe ich die Größe eines Fotos in KB?", a: "Fügen Sie das Foto hinzu, geben Sie das Minimum ein, das das Formular verlangt – zum Beispiel 20 KB – und starten Sie die Umwandlung. Sie erhalten ein JPG, das mindestens so groß ist." },
    { q: "Wird das Foto besser, wenn die KB steigen?", a: "Nicht über das Original hinaus – verlorene Details kommen nicht zurück. Das Vorhandene wird in höherer Qualität gespeichert, das Ergebnis sieht also mindestens so gut aus wie das Original, nie schlechter." },
    { q: "Mein Formular verlangt 20 KB bis 50 KB. Was gebe ich ein?", a: "20 als Minimum und 50 als Maximum. Die Datei wird in diesen Bereich gebracht; ein JPG, das schon darin liegt, bleibt, wie es ist." },
    { q: "Ändern sich die Bildmaße?", a: "Nur wenn höhere Qualität allein nicht reicht. Dann wird das Bild vergrößert, bis zum Vierfachen, und die neuen Maße werden neben der Datei angezeigt." },
    { q: "Was bedeutet „aufgefüllt, um das Minimum zu erreichen“?", a: "Das Bild war zu schlicht, um das Minimum selbst in höchster Qualität und vierfacher Größe zu erreichen, deshalb wurden der Datei leere Daten hinzugefügt. Das Bild selbst ist unverändert." },
    { q: "Kann ich die Größe eines PNG erhöhen?", a: "Ja, das Ergebnis ist aber ein JPG – das Format, das Formulare mit KB-Grenzen erwarten. Transparente Bereiche werden mit der Hintergrundfarbe Ihrer Wahl gefüllt." },
    { q: "Wird mein Foto hochgeladen?", a: "Nein. Alles passiert in Ihrem Browser." },
    { q: "Warum lehnt ein Online-Portal mein Foto als zu klein ab?", a: "Weil es eine Mindestgröße in KB prüft, um unscharfe oder winzige Bilder auszusortieren. Erhöhen Sie die Datei hier auf das genannte Minimum und laden Sie sie erneut hoch." },
  ],

  security:
    "Fotos und Unterschriften werden auf Ihrem Gerät verarbeitet, in Ihrem Browser. Nichts wird hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
