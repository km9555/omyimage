import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.de";

/**
 * German copy for /de/gif-groesse-aendern.
 *
 * Head term „GIF Größe ändern“; secondary „GIF verkleinern“ (720/mo), which
 * the compressor also carries — here it is about pixel size, not file weight.
 */
const content: ToolPageContent = {
  toolId: "gif-resizer",
  locale: "de",
  name: "GIF Größe ändern",
  tagline:
    "Ändern Sie die Größe animierter GIFs in Prozent oder auf exakte Pixel – jeder Frame wird skaliert, und die Animation läuft genau wie vorher. Kostenlos, ohne Wasserzeichen, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF Größe ändern – animiertes GIF skalieren | oMyImage",
  metaDescription:
    "GIF Größe ändern in Prozent oder Pixeln: Alle Frames und das Timing bleiben erhalten. GIF verkleinern oder vergrößern, kostenlos, ohne Wasserzeichen und Upload.",

  intro:
    "Wer die Größe eines animierten GIFs in einem gewöhnlichen Bildbearbeitungsprogramm ändert, behält meist nur den ersten Frame. Mit „GIF Größe ändern“ von oMyImage wird jeder Frame der Animation skaliert, Timing und Wiederholung bleiben erhalten – das Ergebnis bewegt sich genau wie das Original, nur in der Größe, die Sie brauchen. Skalieren Sie in Prozent oder geben Sie Breite und Höhe in Pixeln ein, vergleichen Sie Original und Ergebnis und laden Sie es herunter. So können Sie ein GIF verkleinern oder, wenn nötig, auch vergrößern.",

  sections: [
    {
      heading: "In Prozent oder in exakten Pixeln",
      id: "modes",
      body: [
        "In Prozent ist der schnelle Weg: 50 % halbieren Breite und Höhe, 25 % vierteln sie, und jeder Wert bis 400 % funktioniert. In Pixeln geben Sie eine exakte Breite oder Höhe ein; ist Seitenverhältnis beibehalten aktiv, folgt die andere Seite der Form des GIFs, sodass nichts gestaucht wird.",
        "Schalten Sie Seitenverhältnis beibehalten nur aus, wenn das Ziel einen exakten Rahmen verlangt, etwa ein quadratisches Profilbild, und das GIF dieser Form schon nahekommt – sonst wirkt die Animation verzerrt.",
      ],
    },
    {
      heading: "Gängige Größen",
      id: "sizes",
      body: [
        "Eigene Emojis und Reaktionen sind kleine Quadrate: Discord zum Beispiel zeigt Emojis mit 128 × 128 an und begrenzt die Datei auf 256 KB, ein Reaktions-GIF muss also meist bei Maßen und Dateigröße schrumpfen. Profilbilder und Sticker sind typischerweise 256–512 Pixel im Quadrat; GIFs in Artikeln und Dokumentationen sind meist 480–800 Pixel breit.",
        "Hat das Ziel zusätzlich eine Dateigrößengrenze, ändern Sie zuerst die Größe und geben Sie das Ergebnis dann in „GIF komprimieren“; weniger Pixel sind die größte einzelne Ersparnis.",
      ],
    },
    {
      heading: "Was mit der Qualität passiert",
      id: "quality",
      body: [
        "Beim Verkleinern bleibt ein GIF scharf, weil jedes neue Pixel aus mehreren alten gemittelt wird. Diese Mittelung erzeugt Zwischenfarben, und da GIF nur 256 Farben erlaubt, bekommt das Ergebnis eine neue Palette, die über die ganze Animation gewählt wird – so bleiben die Farben von Frame zu Frame stabil.",
        "Vergrößern ist möglich, fügt aber keine Details hinzu: Kanten werden weich, kleine Pixel-Art wird unscharf. Vergrößern Sie Pixel-Art um ganze Vielfache wie 200 % und rechnen Sie mit Glättung; für echte Details greifen Sie auf die Originalquelle zurück.",
      ],
    },
    {
      heading: "Dateigröße nach dem Skalieren",
      id: "filesize",
      body: [
        "Die Dateigröße sinkt ungefähr mit der Zahl der Pixel, 50 % von Breite und Höhe bedeuten also meist rund ein Viertel der Größe. Weil das GIF so neu aufgebaut wird, dass jeder Frame nur die Änderungen speichert, kann ein verkleinertes GIF sogar kleiner werden, als die Pixelzahl allein erwarten lässt.",
        "Vergrößern bewirkt das Gegenteil: doppelte Maße sind etwa die vierfache Datei. Prüfen Sie die Größe des Ergebnisses unter der Vorschau, bevor Sie herunterladen.",
      ],
    },
    {
      heading: "Frames, Timing und Transparenz",
      id: "frames",
      body: [
        "Jeder Frame behält seine eigene Anzeigedauer, auch bei GIFs, in denen manche Frames länger stehen als andere, und die Animation wiederholt sich wie das Original. Transparente GIFs bleiben transparent; da GIF-Transparenz keine weichen Kanten kennt, kann eine stark verkleinerte transparente Kante vor dunklem Hintergrund leicht gezackt wirken.",
      ],
    },
    {
      heading: "GIFs in Präsentationen und Dokumenten",
      id: "slides",
      body: [
        "Ein GIF in PowerPoint, Keynote, Google Slides oder einem Word-Dokument behält in der Datei seine volle Pixelgröße, auch wenn es klein angezeigt wird. Ein GIF mit 1200 Pixeln als Vorschaubild macht die ganze Präsentation schwer und langsam zu öffnen oder zu versenden.",
        "Bringen Sie das GIF vor dem Einfügen ungefähr auf die Breite, in der es tatsächlich erscheint – etwa 800 Pixel für eine Folie in voller Breite, 400–600 für ein GIF neben Text. Die Folie sieht gleich aus, und die Datei bleibt leicht.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die Größe eines GIFs",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Größe wählen", description: "Wählen Sie einen Prozentwert oder geben Sie Breite und Höhe in Pixeln ein." },
    { title: "Skalieren und herunterladen", description: "Klicken Sie auf GIF-Größe ändern, vergleichen Sie das Ergebnis und laden Sie es herunter." },
  ],

  features: [
    { icon: "photo_size_select_large", title: "Jeder Frame skaliert", description: "Die ganze Animation wird skaliert, nicht nur der erste Frame." },
    { icon: "aspect_ratio", title: "Prozent oder Pixel", description: "Skalieren Sie in Prozent oder legen Sie eine exakte Breite und Höhe fest." },
    { icon: "lock", title: "Kein Upload", description: "Ihr GIF wird vollständig in Ihrem Browser skaliert." },
  ],

  faqs: [
    { q: "Wie ändere ich die Größe eines animierten GIFs?", a: "Fügen Sie das GIF hinzu, wählen Sie einen Prozentwert oder exakte Pixel und klicken Sie auf GIF-Größe ändern. Jeder Frame wird skaliert, und die Animation läuft weiter." },
    { q: "Ist das GIF danach noch animiert?", a: "Ja. Alle Frames bleiben mit ihrem ursprünglichen Timing und ihrer Wiederholung erhalten." },
    { q: "Wie mache ich ein GIF 128 × 128 groß?", a: "Wählen Sie In Pixeln, geben Sie 128 als Breite ein und schalten Sie, falls das GIF nicht quadratisch ist, Seitenverhältnis beibehalten aus – oder schneiden Sie es vorher quadratisch zu." },
    { q: "Wird die Datei durch das Skalieren kleiner?", a: "Beim Verkleinern ja – halbe Breite und Höhe ergeben meist etwa ein Viertel der Größe." },
    { q: "Kann ich ein GIF vergrößern?", a: "Ja, bis 400 %, aber Vergrößern fügt keine Details hinzu, und Kanten werden weich." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente GIFs bleiben nach dem Skalieren transparent." },
    { q: "Gibt es ein Wasserzeichen?", a: "Nein. Das skalierte GIF hat kein Wasserzeichen." },
    { q: "Kann ich gleichzeitig skalieren und komprimieren?", a: "Ändern Sie hier die Größe und geben Sie das Ergebnis dann in „GIF komprimieren“, um Farben oder Frames zu reduzieren." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Das Skalieren findet vollständig in Ihrem Browser statt." },
    { q: "Kann ich die GIF-Größe auf dem Smartphone ändern?", a: "Ja, im mobilen Browser. Große GIFs dauern auf dem Smartphone etwas länger, und der Fortschritt wird angezeigt." },
    { q: "Kann ich mehrere GIFs auf einmal skalieren?", a: "Eins nach dem anderen, damit jedes GIF seine eigene Vorschau und Größe bekommt. Die Einstellungen bleiben für das nächste erhalten." },
  ],

  security:
    "Ihr GIF wird Frame für Frame in Ihrem Browser skaliert. Nichts wird hochgeladen, gespeichert oder getrackt.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
