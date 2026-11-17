import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-in-hd (variant of upscale-image, Real-ESRGAN —
 * preset mode "hd": pick HD / Full HD / 4K, the AI scale is chosen for you).
 * Target query „Bild in HD“ (Germany, Nov 2026), secondary „Foto HD“ and
 * „Auflösung erhöhen“. Angle as in English: what "HD" means in pixels.
 */
const content: ToolPageContent = {
  toolId: "image-to-hd",
  locale: "de",
  name: "Bild in HD umwandeln",
  tagline:
    "Ein HD-Konverter, der echte Auflösung hinzufügt: Wählen Sie HD, Full HD oder 4K, und die KI bringt Ihr Foto genau auf diese Größe und baut dabei Kanten und Strukturen neu auf – so wird aus einem kleinen Bild ein sauberes HD-Bild. Kostenlos, ohne Wasserzeichen.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Bild in HD umwandeln – Foto in HD, Full HD & 4K | oMyImage",
  metaDescription:
    "Bild in HD umwandeln mit KI: Auflösung erhöhen auf HD, Full HD oder 4K, mit neu aufgebauten Kanten statt Pixelbrei. Foto in HD – kostenlos, ohne Wasserzeichen.",

  intro:
    "„HD“ ist eine Pixelzahl: 1280 × 720 für HD, 1920 × 1080 für Full HD, 3840 × 2160 für 4K. Ein Foto aus einem Chat, ein zugeschnittener Screenshot oder ein altes Handyfoto ist oft viel kleiner, und wer es in einem Bildprogramm einfach aufzieht, vergrößert nur die Unschärfe. Dieser Konverter nutzt ein KI-Modell zum Hochskalieren, das die feinen Details vorhersagt, die eine größere Version hätte – Kanten werden scharf statt weich. Laden Sie ein Bild hoch, wählen Sie die gewünschte Größe – HD, Full HD oder 4K – und laden Sie das Ergebnis in genau dieser Größe an der längeren Seite herunter. So machen Sie ein Foto in HD und erhöhen die Auflösung, ohne dass es pixelig wirkt.",

  sections: [
    {
      heading: "Was HD bei einem Foto bedeutet",
      id: "hd-pixels",
      body: [
        "Videoauflösungen sind zu den Alltagsnamen für Bildgrößen geworden. Ein Bild gilt als „HD“, wenn es mindestens etwa 1280 Pixel breit ist, als „Full HD“ bei 1920 Pixeln und als „4K“ bei etwa 3840. Ein Foto mit 640 × 480 wird bei 2-facher Vergrößerung zu 1280 × 960 – HD; 3-fach ergibt 1920 × 1440, also mehr als Full HD; 4-fach erreicht 2560 × 1920.",
        "Die richtige Vergrößerung hängt also vom Ausgangsbild ab – deshalb wählen Sie hier das Ziel, nicht den Faktor: Der Konverter ermittelt den kleinsten KI-Faktor, der das Ziel erreicht, und bringt das Ergebnis an der längeren Seite auf genau 1280, 1920 oder 3840 Pixel. Ein Bild, das bereits größer als das Ziel ist, kommt bereinigt in Zielgröße zurück. Und reicht selbst 4× nicht – ein Vorschaubild mit 400 Pixeln kann nicht ehrlich zu 4K werden –, erhalten Sie das 4×-Ergebnis statt eines gestreckten Bildes.",
      ],
    },
    {
      heading: "Warum einfaches Vergrößern ein Bild nicht zu HD macht",
      id: "vs-resize",
      body: [
        "Eine normale Größenänderung verteilt die vorhandenen Pixel auf ein größeres Raster und mischt dazwischen. Das Bild wird größer, aber es entstehen keine neuen Informationen – jede Kante wird zu einem weichen Übergang, und Text wirkt verschmiert.",
        "Ein KI-Upscaler hat aus Millionen von Bildpaaren gelernt, wie feine Details bei höherer Auflösung normalerweise aussehen – wie Haare, Ziegel, Laub und Schrift aufgelöst sein sollten. Diese Details zeichnet er beim Vergrößern hinein. Das Ergebnis ist kein wiederhergestelltes Original, wirkt aber wie ein wirklich schärferes Bild – und genau das meint man, wenn man ein Bild in HD umwandeln will.",
      ],
    },
    {
      heading: "Bilder, die sich gut umwandeln lassen – und welche nicht",
      id: "good-sources",
      body: [
        "Produktfotos, Landschaften, Illustrationen, Logos, Spiele-Screenshots und die meisten Porträts lassen sich sehr gut umwandeln, weil ihre Details Mustern folgen, die das Modell kennt. Auch stark komprimierte Fotos, etwa mehrfach per Messenger weitergeleitete Bilder, werden sichtbar besser: Das Modell entfernt beim Vergrößern einen Großteil der Blockartefakte.",
        "Winzige Gesichter auf einem Gruppenfoto, sehr kleiner Text und stark unscharfe Bilder sind die schwierigen Fälle. Das Modell macht sie größer und sauberer, kann aber nicht wissen, was auf einem unlesbaren Kennzeichen wirklich stand – und sollte es auch nicht vorgeben. Für ein weiches oder leicht unscharfes Foto erklärt die Seite „Bild schärfen“, was Sie erwarten können.",
      ],
    },
    {
      heading: "Wo HD-Versionen gebraucht werden",
      id: "uses",
      body: [
        "Typische Anlässe sind ein Profil- oder Kanalbanner, das die Plattform in Full HD anzeigt, ein Thumbnail oder Titelbild, das mindestens 1280 Pixel breit sein muss, ein altes Familienfoto, das Sie größer drucken möchten, ein Produktbild, das ein Marktplatz als zu klein ablehnt, oder ein Bild für eine Präsentation, das auf dem Beamer pixelig aussieht.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie ein Bild in HD um",
  steps: [
    { title: "Bild hochladen", description: "Wählen Sie ein JPG, PNG oder WEBP – jeweils ein Bild." },
    { title: "HD, Full HD oder 4K wählen", description: "Full HD (1920 Pixel) passt für die meisten Zwecke; der KI-Faktor wird für Sie gewählt." },
    { title: "Umwandeln & herunterladen", description: "Die KI vergrößert und schärft das Bild in wenigen Sekunden; vergleichen Sie Vorher und Nachher und laden Sie es dann herunter." },
  ],

  features: [
    { icon: "hd", title: "Echte HD-Auflösung", description: "HD, Full HD oder 4K an der längeren Seite, mit neu aufgebauten statt gestreckten Kanten und Strukturen." },
    { icon: "visibility", title: "Vorher und Nachher", description: "Ziehen Sie den Vergleichsregler, um vor dem Herunterladen genau zu sehen, was sich geändert hat." },
    { icon: "verified_user", title: "Ohne Wasserzeichen", description: "Kostenlos, ohne Anmeldung und ohne dass etwas auf Ihr Bild gestempelt wird." },
  ],

  faqs: [
    { q: "Wie wandle ich ein Bild in HD um?", a: "Laden Sie das Bild hoch, wählen Sie HD, Full HD oder 4K und klicken Sie auf In HD umwandeln. Die KI liefert eine schärfere Version in dieser Größe, die Sie vergleichen und herunterladen können." },
    { q: "Welche Auflösung gilt als HD?", a: "Ungefähr 1280 × 720 Pixel oder mehr ist HD, 1920 × 1080 ist Full HD und etwa 3840 × 2160 ist 4K. Wählen Sie, was Sie brauchen, und der Konverter kümmert sich um den Faktor." },
    { q: "Kann ich ein WhatsApp-Foto in HD umwandeln?", a: "Ja, das ist einer der besten Einsätze: Weitergeleitete Fotos sind klein und blockig, und der Upscaler vergrößert sie und beseitigt dabei den Großteil der Kompressionsschäden." },
    { q: "Ist das dasselbe wie „Bildqualität verbessern“?", a: "Es nutzt dieselbe KI-Engine. Hier wählen Sie die Endgröße – HD, Full HD oder 4K – und der Faktor wird für Sie bestimmt; bei „Bildqualität verbessern“ wählen Sie 2×, 3× oder 4× selbst." },
    { q: "Wird ein 4K-Bild eine sehr große Datei?", a: "Das kann sein: 4K sind etwa acht Millionen Pixel. Brauchen Sie es danach kleiner, komprimieren Sie es – die zusätzlichen Details überstehen eine normale Kompression gut." },
    { q: "Kann ich ein Videostandbild oder einen Screenshot in HD umwandeln?", a: "Ja. Screenshots und Standbilder sind ganz normale Bilder; besonders Text und Kanten von Benutzeroberflächen werden deutlich schärfer als bei einer normalen Größenänderung." },
    { q: "Wird mein Bild hochgeladen?", a: "Ja – das KI-Modell läuft auf unserem Server, daher wird das Bild über eine verschlüsselte Verbindung gesendet. Das Ergebnis liegt hinter einem privaten Download-Link und wird innerhalb einer Stunde automatisch gelöscht; es wird nie weitergegeben oder wiederverwendet." },
    { q: "Kann ich damit ein Foto zum Drucken vergrößern?", a: "Ja. Für einen Druck mit 300 dpi braucht ein 10 × 15 cm großes Foto etwa 1200 × 1800 Pixel; Full HD oder 4K reichen dafür meist aus. Prüfen Sie das Ergebnis vor dem Druck in voller Vergrößerung, besonders bei Gesichtern." },
  ],

  security:
    "Dieses Tool läuft auf unserem Server, weil das KI-Modell mehr Speicher braucht, als ein Browser-Tab bietet, und nutzt die quelloffene Engine Real-ESRGAN. Ihr Bild wird über eine verschlüsselte Verbindung übertragen, das Ergebnis liegt nur kurz hinter einem privaten Download-Link und wird innerhalb einer Stunde automatisch gelöscht, und nichts wird jemals weitergegeben oder für Training verwendet.",
};

export default content;
