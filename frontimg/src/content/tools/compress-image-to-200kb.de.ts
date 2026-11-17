import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-200kb-verkleinern (variant of compress-image,
 * preset targetKb 200). Primary query: „Bild auf 200 KB verkleinern“.
 * Angle: a generous budget — full application SETS (photo, ID scan,
 * certificate) and print-worthy photos.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-200kb",
  locale: "de",
  name: "Bild auf 200 KB verkleinern",
  tagline:
    "Komprimieren Sie Fotos und Dokumentenscans auf unter 200 KB – für Registrierungs-, Zulassungs- und Bewerbungsportale. Fotos bleiben scharf, ganze Sätze werden auf einmal verarbeitet, und keine Datei wird hochgeladen.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 200 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 200 KB verkleinern: Foto, Ausweis-Scan und Zeugnis als scharfes JPG unter 200 KB für Bewerbungsportale. Bilder komprimieren im Stapel, ohne Upload.",

  intro:
    "200 KB ist das Limit, das Registrierungs- und Zulassungsportale, Stipendien- und Auswahlsysteme sowie viele Jobbörsen für jede angehängte Datei verwenden: ein Foto, ein Scan Ihres Personalausweises, eine Urkunde, eine Notenübersicht. Das ist doppelt so viel wie bei einem 100-KB-Formular und viermal so viel wie bei einem mit 50 KB. Das Ziel ist hier also nicht nur, hineinzupassen, sondern dabei noch wie das Original auszusehen. Fügen Sie den ganzen Satz hinzu, und jede Datei kommt als JPG unter 200 KB in der höchsten Qualität zurück, die passt.",

  sections: [
    {
      heading: "Ein großzügiges Limit – nutzen Sie es",
      id: "generous",
      body: [
        "Bei 200 KB behält ein Porträtfoto rund 1200 × 1600 Pixel in hoher Qualität: klar genug für einen Druck in Passbildgröße und zum Hineinzoomen am Bildschirm. Weil das Tool die höchste Qualität unter dem Limit sucht, statt eine feste Einstellung anzuwenden, kann ein sauberes Foto nahezu in Originalqualität herauskommen, während ein verrauschtes, detailreiches etwas stärker komprimiert wird.",
        "Ist Ihr Foto bereits ein gut komprimiertes JPG unter 200 KB, bekommen Sie es unverändert zurück – es gibt keinen Grund, eine Datei neu zu komprimieren, die das Formular ohnehin annimmt.",
      ],
    },
    {
      heading: "Wo 200-KB-Limits vorkommen",
      id: "where",
      body: [
        "Auswahlverfahren im öffentlichen Dienst, Schul- und Hochschulzulassungen, Stipendienbewerbungen und viele Jobportale begrenzen jeden Upload auf etwa 100–300 KB, wobei 200 KB der häufigste Wert ist. Dieselben Formulare verlangen meist mehrere Dateien: ein Bewerbungsfoto, eine Unterschrift, einen Ausweis, ein Abschlusszeugnis, manchmal ein Empfehlungsschreiben oder einen Nachweis über den Wohnsitz.",
        "Lesen Sie die Anforderung jedes Feldes einzeln – das Foto darf vielleicht 200 KB haben, die Unterschrift nur 20 oder 50 KB. Diese Seite stellt 200 KB ein; die oben verlinkten Seiten für 20 KB und 50 KB sind für die kleineren Felder voreingestellt.",
      ],
    },
    {
      heading: "Zeugnisse und Ausweis-Scans unter 200 KB",
      id: "scans",
      body: [
        "Ein vollständiges A4-Zeugnis, mit dem Handy fotografiert, hat 3–6 MB, die meisten davon für Papierstruktur und ungleichmäßiges Licht. Fotografieren Sie es flach, bei Tageslicht und bildfüllend, und schneiden Sie den Hintergrund vor dem Komprimieren weg; das Ergebnis passt in 200 KB, mit gut lesbarem Text und Stempeln.",
        "Farbige Stempel und Unterschriften auf einer Urkunde sind ein guter Grund, sie in Farbe zu belassen. Bei reinen Textseiten lässt eine vorherige Umwandlung mit „Bild schwarz weiß“ noch mehr vom Budget für scharfe Buchstaben übrig.",
      ],
    },
    {
      heading: "Jede Datei vor dem Absenden prüfen",
      id: "check",
      body: [
        "Die Ergebnisliste zeigt die neue Größe jeder Datei und, falls skaliert werden musste, die neuen Maße. Öffnen Sie vor dem Hochladen ein oder zwei Dateien: Text sollte bei 100 % Zoom lesbar sein, Gesichter sollten nicht verschmiert wirken, und ein farbiger Fotohintergrund sollte noch eine gleichmäßige Fläche sein.",
        "Benennen Sie die Dateien um, wenn das Portal bei Namen streng ist – viele lehnen Leerzeichen, Klammern oder Umlaute ab –, und behalten Sie Ihre Originale. Verlangt ein Formular später ein anderes Limit, komprimieren Sie erneut vom Original aus statt von der 200-KB-Kopie, damit Qualität nur einmal verloren geht.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 200 KB",
  steps: [
    { title: "Dateien hinzufügen", description: "Wählen Sie das Foto und die Scans aus, die Sie hochladen müssen, oder ziehen Sie sie hierher – JPG, PNG oder WebP." },
    { title: "Unter 200 KB komprimieren", description: "Das Limit von 200 KB ist bereits eingestellt; für ein strengeres Feld können Sie eine andere Zahl eingeben." },
    { title: "Den Satz herunterladen", description: "Jede Datei liegt unter 200 KB; laden Sie sie einzeln oder alle zusammen als ZIP herunter." },
  ],

  features: [
    { icon: "high_quality", title: "Nahezu Originalqualität", description: "Mit 200 KB Budget behalten Fotos den Großteil ihrer Auflösung und Details – das Tool nutzt das ganze Budget." },
    { icon: "folder_zip", title: "Die ganze Bewerbung auf einmal", description: "Foto, Ausweis-Scan und Zeugnisse in einem Durchgang, jedes unter 200 KB, gemeinsam als ZIP heruntergeladen." },
    { icon: "lock", title: "Keine Uploads", description: "Ausweisdokumente werden in Ihrem Browser komprimiert, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Foto auf 200 KB?", a: "Fügen Sie es hinzu und klicken Sie auf „Komprimieren“ – das Limit von 200 KB ist bereits eingestellt. Sie erhalten ein JPG unter 200 KB in der besten Qualität, die passt." },
    { q: "Wie bekomme ich einen Zeugnis-Scan unter 200 KB?", a: "Fotografieren Sie das Zeugnis flach bei gleichmäßigem Licht, schneiden Sie alles drumherum weg und komprimieren Sie es hier. Text und Stempel bleiben deutlich unter 200 KB lesbar." },
    { q: "Ist ein 200-KB-Foto gut genug zum Drucken?", a: "Für Pass- und Ausweisgrößen ja – 200 KB behalten mehr als genug Pixel. Für einen großen Ausdruck verwenden Sie lieber das Originalfoto." },
    { q: "Kann ich stattdessen 199 KB oder 190 KB nehmen?", a: "Ja. Geben Sie eine beliebige Zahl in das Größenfeld ein; 200 KB ist nur der Startwert." },
    { q: "Was ist, wenn mein Foto schon unter 200 KB liegt?", a: "Ist es bereits ein JPG unter dem Limit, bekommen Sie das Original unverändert zurück. Andernfalls wird es in JPG umgewandelt und unter 200 KB gehalten." },
    { q: "Sollte ich bei einem 200-KB-Limit JPG oder WebP wählen?", a: "JPG. Registrierungs- und Bewerbungsportale akzeptieren fast immer JPG, während viele WebP noch ablehnen." },
    { q: "Verändert die Kompression die Farben des Fotos?", a: "In dieser Größe nicht sichtbar. JPG speichert Farbe etwas ungenauer als Helligkeit, aber bei 200 KB ist der Unterschied nicht zu erkennen." },
  ],

  security:
    "Fotos, Ausweise und Urkunden werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei normalen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
