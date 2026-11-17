import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * German copy for the /de JPG-to-WebP converter.
 *
 * Head term "JPG in WebP" (480/mo). The reader is a site owner chasing page
 * speed — Core Web Vitals, LCP — so this page is about performance, not
 * compatibility, which keeps it apart from the WebP-to-JPG page.
 */
const copy: LocalizedPairCopy = {
  name: "JPG in WebP",
  seoTitle: "JPG in WebP umwandeln – kostenlos & online | oMyImage",
  seoDescription:
    "JPG in WebP umwandeln, kostenlos und ohne Anmeldung: Fotos 25–35 % kleiner für schnellere Webseiten, Qualität einstellbar, ganze Ordner als ZIP. Im Browser.",
  unique: {
    intro:
      "JPG in WebP umzuwandeln ist der günstigste Gewinn an Ladezeit, den die meisten Websites noch übrig haben. Dasselbe Foto in derselben sichtbaren Qualität ist typischerweise 25–35 % kleiner, und jeder aktuelle Browser unterstützt das Format, seit Safari 2020 nachgezogen hat. Qualität einstellen, den ganzen Ordner auf einmal umwandeln und ein ZIP zurückbekommen.",
    whyConvert:
      "Hier geht es fast immer um Performance. Bilder sind auf einer typischen Webseite mit großem Abstand das Schwerste, und die Core Web Vitals – vor allem der Largest Contentful Paint – hängen maßgeblich davon ab, wie schnell das Hauptbild ankommt. WebP bringt eine spürbare Größenersparnis ohne die sichtbaren Artefakte, die Sie bekämen, wenn Sie einfach die JPG-Kompression weiter hochdrehen, denn sein Encoder ist eine Generation jünger und arbeitet mit größeren, klügeren Blöcken. Der Einwand der Kompatibilität, der früher viele zurückgehalten hat, hat sich praktisch erledigt: Chrome, Firefox, Edge, Opera und Safari können WebP alle darstellen, und damit erreichen Sie effektiv jeden Besucher. Vorsicht ist nur noch beim Ziel der Datei geboten. WebP ist für die Auslieferung im Web gedacht; zum Archivieren oder für die Druckerei ist es weiterhin eine schlechte Wahl.",
    notes: [
      {
        heading: "Wandeln Sie nicht Ihre Originale um",
        body:
          "Wandeln Sie Kopien für das Web um und lassen Sie Ihre Kameradateien, wie sie sind. Ein JPG wurde bereits einmal verlustbehaftet komprimiert, und die Neukodierung als WebP komprimiert es erneut. Auf einer Webseite sieht das Ergebnis gut aus, es ist aber eine Generation schlechter und lässt sich später nicht rückgängig machen. Behandeln Sie WebP als Ausgabeformat – so wie ein verkleinertes Vorschaubild – und nicht als Ersatz für Ihre Bildersammlung.",
      },
      {
        heading: "Welche Qualitätseinstellung sinnvoll ist",
        body:
          "Etwa 0,80 bis 0,85 ist für Fotos auf einer Website der beste Kompromiss: Dort ist die Ersparnis im Verhältnis zum sichtbaren Verlust am größten. Gehen Sie für Header-Bilder, Produktfotos oder alles, was Kunden heranzoomen, auf 0,92 oder höher. Unter etwa 0,70 beginnt der Encoder, feine Strukturen glattzubügeln – an Haut, Laub und Stoff fällt es zuerst auf. Wandeln Sie ein typisches Bild um, sehen Sie es sich genau an und lassen Sie dann den Stapel mit dieser Einstellung laufen.",
      },
      {
        heading: "Bei Bedarf mit Fallback ausliefern",
        body:
          "Müssen Sie wirklich uralte Clients unterstützen, ist der übliche Weg ein HTML-picture-Element, das zuerst das WebP und dann das ursprüngliche JPG als Ersatzquelle nennt – jeder Browser nimmt, was er versteht. Die meisten modernen Baukästen, CDNs und CMS übernehmen diese Auswahl inzwischen automatisch. Prüfen Sie also, ob Ihres das schon tut, bevor Sie von Hand Markup ergänzen.",
      },
    ],
    faqs: [
      { q: "Wie viel kleiner werden meine Bilder tatsächlich?", a: "Bei typischen Fotos rechnen Sie mit 25–35 % bei gleicher sichtbarer Qualität. Flächige Grafiken und Screenshots schneiden oft deutlich besser ab. Die Ersparnis hängt stark vom Bild ab, wandeln Sie also erst ein paar typische Dateien um, bevor Sie eine Einstellung für eine ganze Bibliothek festlegen." },
      { q: "Kann ich WebP heute bedenkenlos auf meiner Website verwenden?", a: "Ja. Jeder aktuelle Browser stellt es dar – Chrome und Firefox seit über zehn Jahren, Safari seit 2020. WebP ist ein etabliertes Format, kein Experiment." },
      { q: "Verliere ich Qualität, wenn ich JPG in WebP umwandle?", a: "Es gibt einen kleinen Generationsverlust, weil das JPG bereits verlustbehaftet komprimiert war und WebP es erneut komprimiert. Ab einer Qualität von 0,80 ist das in normaler Ansichtsgröße nicht zu sehen. Wandeln Sie immer vom besten Original um, das Sie haben, und nicht von einer bereits verkleinerten Kopie." },
      { q: "Ist WebP für den Druck geeignet?", a: "Nein. Druckabläufe erwarten TIFF, PNG oder hochwertiges JPG, und viele Druckvorstufen-Programme öffnen WebP überhaupt nicht. Nutzen Sie es für das Web und behalten Sie für den Druck ein anderes Format." },
      { q: "Unterstützt WebP Transparenz?", a: "Ja, WebP hat einen vollständigen Alphakanal. Eine JPG-Quelle hat keine Transparenz, die übernommen werden könnte – wandeln Sie aber ein PNG in WebP um, bleibt die Transparenz erhalten." },
      { q: "Kann ich einen ganzen Ordner in einem Durchgang umwandeln?", a: "Ja. Fügen Sie so viele JPGs hinzu, wie Sie möchten – sie werden nacheinander umgewandelt und als ein ZIP zurückgegeben. So wird üblicherweise eine bestehende Bildbibliothek umgestellt." },
    ],
  },
};

export default copy;
