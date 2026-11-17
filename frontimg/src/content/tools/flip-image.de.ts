import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-spiegeln (variant of rotate-image, preset flipH).
 * Target query: „Bild spiegeln" (1.6K/mo, Germany, Nov 2026); secondary
 * „Foto spiegeln" and „spiegelverkehrt". „Bild invertieren" is a different
 * tool (colours), so the page says spiegeln throughout and points there once.
 */
const content: ToolPageContent = {
  toolId: "flip-image",
  locale: "de",
  name: "Bild spiegeln",
  tagline:
    "Spiegeln Sie ein Bild horizontal oder vertikal – gespiegelte Selfies, spiegelverkehrten Text und Produktfotos mit einem Klick. Mehrere Bilder auf einmal, JPG, PNG und WebP, und alles bleibt in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild spiegeln – Foto spiegeln, online & kostenlos | oMyImage",
  metaDescription:
    "Bild spiegeln online und kostenlos: Foto horizontal oder vertikal spiegeln, Selfies und spiegelverkehrten Text korrigieren. JPG, PNG und WebP, ohne Upload.",

  intro:
    "Ein Bild zu spiegeln heißt, es umzuklappen: Horizontales Spiegeln vertauscht links und rechts, als würden Sie in einen Spiegel schauen, und vertikales Spiegeln stellt es auf den Kopf – so, wie eine Wasseroberfläche das Ufer spiegelt. Diese Seite öffnet mit bereits eingeschalteter horizontaler Spiegelung, denn genau die brauchen die meisten: ein Selfie der Frontkamera entspiegeln, spiegelverkehrten Text lesbar machen oder dafür sorgen, dass alle Fotos einer Serie in dieselbe Richtung blicken. Fügen Sie ein Bild oder einen ganzen Ordner hinzu, prüfen Sie die Vorschau und laden Sie das Ergebnis herunter.",

  sections: [
    {
      heading: "Spiegeln oder drehen: Was brauchen Sie?",
      id: "flip-vs-rotate",
      body: [
        "Drehen bewegt das ganze Bild um seine Mitte, sodass ein liegendes Foto aufgerichtet werden kann; gespiegelt wird dabei nichts. Spiegeln klappt das Bild um, sodass Text spiegelverkehrt erscheint und die linke Hand einer Person zur rechten wird.",
        "Ein schneller Test: Steht das Foto richtig herum, blickt aber in die falsche Richtung, müssen Sie es spiegeln. Liegt es auf der Seite oder steht auf dem Kopf, ist aber sonst richtig, müssen Sie es drehen. Die Einstellungen für beides liegen im selben Bereich – Sie können also das eine, das andere oder beides zugleich tun.",
      ],
    },
    {
      heading: "Warum Selfies gespiegelt herauskommen",
      id: "selfies",
      body: [
        "Die Frontkamera eines Smartphones zeigt Ihnen eine gespiegelte Vorschau, weil Sie sich so aus dem Spiegel kennen, und viele Smartphones speichern das Foto auch so. Das Ergebnis: Die Schrift auf Ihrem T-Shirt oder einem Schild hinter Ihnen ist spiegelverkehrt, und Ihr Scheitel sitzt auf der Seite, die andere Menschen nicht sehen.",
        "Horizontales Spiegeln stellt das Foto so dar, wie alle anderen Sie sehen. Manche Smartphones haben eine Einstellung, mit der Fotos der Frontkamera künftig ungespiegelt gespeichert werden; für bereits aufgenommene Fotos ist Spiegeln hier die schnellste Lösung.",
      ],
    },
    {
      heading: "Gute Gründe, ein Foto zu spiegeln",
      id: "uses",
      body: [
        "Designer spiegeln Produktfotos, damit in einem Raster alle Artikel in dieselbe Richtung zeigen, und spiegeln Porträts, damit die Person in die Seite hinein und nicht aus ihr heraus blickt. Lehrkräfte und Bastler spiegeln Bilder für Bügeltransfers und Siebdruck, bei denen der Druck seitenverkehrt aufgebracht wird. Zeichner spiegeln eine Zeichnung, um Proportionsfehler zu entdecken, die das eigene Auge nicht mehr wahrnimmt.",
        "Das Spiegeln selbst verändert kein Pixel, nur deren Reihenfolge – erneutes Spiegeln stellt also die ursprüngliche Anordnung wieder her. Speichern Sie als PNG, damit die Datei exakt verlustfrei bleibt; JPG wird mit hoher Qualitätseinstellung neu gespeichert.",
      ],
    },
    {
      heading: "Wann Sie nicht spiegeln sollten",
      id: "text-and-logos",
      body: [
        "Horizontales Spiegeln kehrt alles im Bild um, auch Schrift. Logos, Straßenschilder, Kennzeichen und Preisschilder werden spiegelverkehrt. Ein Produktfoto mit bedruckter Verpackung lassen Sie deshalb besser unverändert – oder Sie prüfen es nach dem Spiegeln auf Text, bevor Sie es veröffentlichen.",
        "Screenshots sollten fast nie gespiegelt werden: Liegt einer auf der Seite, muss er gedreht werden. Und bei Porträts gilt: Gesichter sind nicht perfekt symmetrisch. Ein gespiegeltes Foto von jemandem, den Sie gut kennen, kann Ihnen leicht fremd vorkommen, obwohl die Person sich genau so im Spiegel sieht.",
      ],
    },
    {
      heading: "Spiegeln ist nicht invertieren",
      id: "not-invert",
      body: [
        "Im Deutschen wird „ein Bild umkehren“ manchmal für beides verwendet. Spiegeln vertauscht die Seiten eines Bildes, die Farben bleiben gleich. Invertieren kehrt dagegen die Farben um – Schwarz wird Weiß, wie bei einem Negativ – und lässt die Anordnung unverändert. Wenn Sie das suchen, nutzen Sie „Bild invertieren“.",
      ],
    },
  ],

  howToTitle: "So spiegeln Sie ein Bild",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie eine oder mehrere JPG-, PNG- oder WebP-Dateien aus oder ziehen Sie sie hierher." },
    { title: "Richtung wählen", description: "Die horizontale Spiegelung ist eingeschaltet; wechseln Sie zu vertikal oder kombinieren Sie sie bei Bedarf mit einer Drehung." },
    { title: "Herunterladen", description: "Laden Sie das gespiegelte Bild herunter, oder alle zusammen als ZIP." },
  ],

  features: [
    { icon: "flip", title: "Horizontal oder vertikal", description: "Von links nach rechts oder von oben nach unten spiegeln, einzeln oder kombiniert, mit Live-Vorschau." },
    { icon: "burst_mode", title: "Eine ganze Serie auf einmal", description: "Spiegeln Sie alle Bilder eines Stapels gleich und laden Sie sie zusammen herunter." },
    { icon: "lock", title: "Kein Upload", description: "Das Spiegeln geschieht in Ihrem Browser, Ihre Fotos bleiben auf Ihrem Gerät." },
  ],

  faqs: [
    { q: "Wie spiegle ich ein Bild horizontal?", a: "Fügen Sie das Bild hinzu – die horizontale Spiegelung ist bereits eingeschaltet –, prüfen Sie die Vorschau und laden Sie es herunter. Mehr ist nicht nötig." },
    { q: "Was bedeutet spiegelverkehrt?", a: "Links und rechts sind vertauscht, wie im Spiegel. Text liest sich dann von rechts nach links; horizontales Spiegeln macht ihn wieder lesbar." },
    { q: "Wie entspiegle ich ein Selfie?", a: "Spiegeln Sie es horizontal. Frontkameras speichern oft ein gespiegeltes Bild, und horizontales Spiegeln zeigt Sie so, wie andere Sie sehen." },
    { q: "Kann ich ein Bild vertikal spiegeln?", a: "Ja. Schalten Sie in den Einstellungen die vertikale Spiegelung ein – allein oder zusammen mit der horizontalen." },
    { q: "Kann ich viele Bilder auf einmal spiegeln?", a: "Ja. Fügen Sie einen ganzen Stapel hinzu; jedes Bild wird gleich gespiegelt, und Sie können alle als ZIP herunterladen." },
    { q: "Bleibt ein transparentes PNG transparent?", a: "Ja, solange Sie PNG oder WebP als Ausgabeformat behalten. JPG kennt keine Transparenz, transparente Bereiche würden mit einer Hintergrundfarbe gefüllt." },
    { q: "Korrigiert Spiegeln spiegelverkehrten Text?", a: "Ja – horizontales Spiegeln macht gespiegelte Schrift wieder normal lesbar, sofern der Text wirklich gespiegelt war und nicht schräg durch Glas fotografiert wurde." },
    { q: "Ist Bild spiegeln dasselbe wie Bild invertieren?", a: "Nein. Spiegeln vertauscht links und rechts, Invertieren kehrt die Farben um. Für Farben gibt es „Bild invertieren“." },
  ],

  security:
    "Ihre Bilder verlassen nie Ihr Gerät. Das Spiegeln läuft vollständig in Ihrem Browser, ohne Upload und ohne Speicherung.",
};

export default content;
