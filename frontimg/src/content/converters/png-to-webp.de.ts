import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de PNG-to-WebP converter.
 *
 * Head term "PNG in WebP" (720/mo). The angle is keeping the alpha channel
 * while cutting the weight — logos, icons, UI screenshots — which separates
 * it from the JPG-to-WebP page's photo-and-page-speed story.
 */
const copy: LocalizedPairCopy = {
  name: "PNG in WebP",
  seoTitle: "PNG in WebP umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "PNG in WebP umwandeln, kostenlos und ohne Anmeldung: Transparenz bleibt erhalten, die Datei wird oft um die Hälfte oder mehr kleiner. Läuft im Browser.",
  unique: {
    intro:
      "PNG ist ehrlich, aber schwer. Wenn Sie PNG in WebP umwandeln, bleibt die Transparenz erhalten – also genau der Grund, aus dem Sie PNG überhaupt verwendet haben –, während die Datei auf einen Bruchteil schrumpft. Für Logos, Icons, UI-Screenshots und alles mit Alphakanal, das schnell laden muss, ist das meist die größte einzelne Ersparnis, die es gibt.",
    whyConvert:
      "Das Problem von PNG ist, dass es nichts verwerfen will – für eine Arbeitsdatei genau richtig, für ein Bild auf einer Webseite Verschwendung. Ein Screenshot oder ein freigestelltes Produktbild als PNG erreicht schnell mehrere Megabyte, und auf einer Seite mit einem Dutzend davon wird es richtig teuer. WebP löst das, ohne dass Sie auf den Alphakanal verzichten müssen. Genau deshalb ist es dem alten Behelf klar überlegen, in JPG umzuwandeln und einen falschen Hintergrund hinter die Transparenz zu malen. Weiche Kanten, Schlagschatten und geglätteter Text bleiben intakt, bei etwa einem Viertel bis der Hälfte der PNG-Größe. Wichtig zu wissen: Der verlustbehaftete Modus von WebP ist tatsächlich verlustbehaftet. Ein Screenshot mit kleiner Schrift kann leicht verwaschen wirken, wenn Sie den Qualitätsregler zu weit herunterziehen.",
    notes: [
      {
        heading: "Screenshots und Text brauchen eine höhere Einstellung",
        body:
          "Fotos vertragen starke Kompression, weil das Auge in einer Textur nicht einzelnen Pixeln folgt. Bei scharfkantigen Inhalten – UI-Screenshots, Text, Diagrammen, Strichzeichnungen – ist es umgekehrt: Kompressionsartefakte sammeln sich an kontrastreichen Kanten und zeigen sich als leichter Lichthof oder Unschärfe. Enthält Ihr PNG lesbaren Text, bleiben Sie bei 0,90 oder darüber und prüfen Sie das Ergebnis in 100-%-Ansicht, bevor Sie einen Stapel umwandeln.",
      },
      {
        heading: "Die Transparenz wird exakt übernommen",
        body:
          "Beide Formate speichern einen vollen 8-Bit-Alphakanal. Diese Umwandlung reduziert daher nichts auf eine Ebene und fragt Sie nach keiner Hintergrundfarbe. Halbtransparente Pixel bleiben halbtransparent, weiche Schatten und ausgeblendete Kanten überstehen den Wechsel unbeschadet. Das ist der Hauptgrund, bei einer PNG-Quelle WebP statt JPG zu wählen.",
      },
      {
        heading: "Wann Sie besser beim PNG bleiben",
        body:
          "Behalten Sie PNG, wenn die Datei eine Vorlage ist, die Sie noch bearbeiten werden; wenn sie in einer Umgebung landet, die WebP nicht darstellt – berüchtigt sind E-Mail-Vorlagen, denn mehrere Desktop-Mailprogramme können es bis heute nicht –; oder wenn es um ein winziges Icon geht, bei dem die Ersparnis ein paar hundert Bytes beträgt und ein weiteres Format im Ablauf nicht lohnt. PNG bleibt auch die richtige Wahl für alles, was pixelgenau sein muss, etwa einen QR-Code oder ein technisches Diagramm.",
      },
    ],
    faqs: [
      { q: "Bleibt beim Umwandeln von PNG in WebP die Transparenz erhalten?", a: "Ja, vollständig. WebP hat einen vollen Alphakanal, transparente und halbtransparente Bereiche werden also unverändert übernommen. Nichts wird auf eine Ebene reduziert, und Sie müssen keine Hintergrundfarbe wählen." },
      { q: "Wie viel kleiner ist WebP als PNG?", a: "Bei Fotos oder komplexen Bildern typischerweise 50–75 %. Bei einfachen, flächigen Grafiken schwankt es stärker – manchmal ist die Ersparnis enorm, gelegentlich ist ein sehr kleines PNG schon nahezu optimal." },
      { q: "Ist die Umwandlung verlustfrei?", a: "Standardmäßig nicht. Dieses Tool nutzt den verlustbehafteten Modus von WebP mit einem Qualitätsregler, denn daher kommen die großen Einsparungen. Stellen Sie die Qualität hoch, wenn Sie nah am Original bleiben wollen, oder behalten Sie das PNG, wenn es exakt sein muss." },
      { q: "Bleibt Text in meinem Screenshot scharf?", a: "Ab einer Qualität von 0,90 in der Regel ja. Niedrigere Einstellungen können kleine Schrift weicher machen, weil sich Kompressionsartefakte an kontrastreichen Kanten sammeln. Prüfen Sie eine Datei in voller Vergrößerung, bevor Sie einen ganzen Stapel umwandeln." },
      { q: "Kann ich WebP in E-Mails verwenden?", a: "Nicht zuverlässig. Mehrere Desktop-Mailprogramme stellen WebP bis heute nicht dar, für E-Mails sind PNG oder JPG daher die sicherere Wahl. WebP ist für Webseiten gedacht, wo es überall unterstützt wird." },
    ],
  },
};

export default copy;
