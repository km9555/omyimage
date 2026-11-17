import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-500kb-verkleinern (variant of compress-image,
 * 500 KB). Target query: „Bild auf 500 KB verkleinern“. Angle: ein halbes
 * Megabyte ist großzügig — Fotos ohne sichtbaren Verlust, Screenshots,
 * Webseiten-Bilder und E-Mail-Anhänge.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-500kb",
  locale: "de",
  name: "Bild auf 500 KB verkleinern",
  tagline:
    "Verkleinern Sie Fotos, Screenshots und Scans ohne sichtbaren Verlust auf unter 500 KB — für Upload-Portale, E-Mail, Online-Marktplätze und Webseiten. Ganze Stapel auf einmal, direkt im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 500 KB verkleinern – ohne Verlust | oMyImage",
  metaDescription:
    "Bild auf 500 KB verkleinern, kostenlos und online: Fotos und Screenshots unter 500 KB ohne sichtbaren Verlust — für Portale, E-Mail-Anhänge und Webseiten.",

  intro:
    "500 KB — ein halbes Megabyte — ist das Upload-Limit vieler Bewerbungs- und Hochschulportale, Onlineshops, Foren und Schulplattformen und eine vernünftige Obergrenze für Bilder auf einer Webseite. Das Budget ist großzügig: Die meisten Fotos sehen danach genauso aus wie das Original, sind aber nur noch einen Bruchteil so groß. Fügen Sie ein Bild oder hundert hinzu; jedes wird als JPG unter 500 KB in der höchsten Qualität gespeichert, die hineinpasst.",

  sections: [
    {
      heading: "Ein halbes Megabyte reicht völlig",
      id: "plenty",
      body: [
        "Ein Handyfoto mit 12 Megapixeln hat typischerweise 3 bis 5 MB. Unter 500 KB bleiben meist rund 2000 × 1500 Pixel oder mehr erhalten, bei einer Qualität, in der Sie auf Smartphone oder Laptop keinen Unterschied erkennen. Am schwierigsten zu komprimieren sind feine Strukturen wie Rasen, Kies oder ein gemustertes Hemd; nur dort verringert das Tool die Abmessungen, wenn es sein muss.",
        "Weil das Limit großzügig ist, müssen Sie das Foto vorher weder zuschneiden noch vorbereiten. Fügen Sie es einfach so hinzu, wie es ist.",
      ],
    },
    {
      heading: "Screenshots und Text bleiben scharf",
      id: "screenshots",
      body: [
        "Screenshots werden oft als PNG gespeichert, und ein ganzer Bildschirm kann dabei mehrere Megabyte erreichen. Als JPG unter 500 KB bleibt der Text in voller Größe scharf — ein Screenshot einer Quittung, eines Chats oder einer Fehlermeldung ist weiterhin gut lesbar.",
        "Bei Screenshots, die vor allem aus Flächen und Text bestehen — etwa ein Dokument oder eine Einstellungsseite —, hält WEBP den Text bei gleicher Dateigröße noch sauberer. Wählen Sie WEBP im Format-Feld, wenn die Zielseite das Format akzeptiert.",
      ],
    },
    {
      heading: "Bilder für Webseiten und Onlineshops",
      id: "websites",
      body: [
        "Jedes Bild auf einer Webseite muss erst geladen werden, bevor es erscheint; große Fotos bremsen die Seite also aus, vor allem im Mobilfunknetz. 500 KB sind ein sinnvolles Maximum für ein großes Banner oder ein Produktfoto; kleinere Bilder wie Vorschaubilder sollten deutlich weniger haben.",
        "Auch Produktfotos für Online-Marktplätze passen gut zu diesem Limit: Sie behalten genug Details, damit Kundinnen und Kunden Struktur und Etiketten heranzoomen können, und laden trotzdem schnell hoch.",
      ],
    },
    {
      heading: "Viele Dateien auf einmal",
      id: "batch",
      body: [
        "Fügen Sie einen ganzen Ordner hinzu — eine Serie Produktfotos, die Bilder für eine Anzeige, ein Album für eine E-Mail —, und jedes Bild wird in einem Durchgang auf unter 500 KB komprimiert. Laden Sie die Dateien einzeln oder zusammen als ZIP herunter. Bilder, die bereits JPGs unter 500 KB sind, bleiben unverändert.",
      ],
    },
    {
      heading: "Fotos per E-Mail verschicken",
      id: "email",
      body: [
        "Die meisten E-Mail-Dienste begrenzen Anhänge auf etwa 20 bis 25 MB pro Nachricht, und Anhänge wachsen beim Versand um rund ein Drittel, weil E-Mail sie als Text kodiert. Zehn Handyfotos mit je 4 MB kommen nicht durch; dieselben zehn mit je 500 KB ergeben eine Nachricht von etwa 7 MB, die jeder Dienst annimmt.",
        "Die Empfänger erhalten trotzdem Fotos, die groß genug für die Vollbildansicht und für einen Abzug im Postkartenformat sind — ohne auf einen riesigen Download zu warten.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 500 KB",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere Fotos, Screenshots oder Scans aus oder ziehen Sie sie hierher — JPG, PNG oder WEBP." },
    { title: "Auf unter 500 KB komprimieren", description: "Das Limit von 500 KB ist bereits eingestellt; wählen Sie JPG oder WEBP." },
    { title: "Herunterladen", description: "Laden Sie jedes Bild einzeln oder alle zusammen als ZIP herunter." },
  ],

  features: [
    { icon: "high_quality", title: "Kein sichtbarer Verlust", description: "Mit einem halben Megabyte behalten Fotos ihr volles Aussehen und den Großteil ihrer Auflösung." },
    { icon: "screenshot_monitor", title: "Scharfe Screenshots", description: "Große PNG-Screenshots werden zu kleinen JPG- oder WEBP-Dateien mit lesbarem Text." },
    { icon: "lock", title: "Privat", description: "Die Komprimierung läuft in Ihrem Browser, auf Ihrem eigenen Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Bild auf 500 KB?", a: "Fügen Sie es hier hinzu und klicken Sie auf Komprimieren — das Limit von 500 KB ist bereits eingestellt. Sie erhalten ein JPG unter 500 KB in der besten Qualität, die hineinpasst." },
    { q: "Sehe ich bei 500 KB einen Unterschied?", a: "Meist nicht. Bei den meisten Fotos reichen 500 KB, damit sie auf Smartphone- oder Computerbildschirm identisch mit dem Original aussehen." },
    { q: "Sind 500 KB eine gute Größe für Bilder auf Webseiten?", a: "Als Obergrenze für große Banner und Produktfotos ja. Kleinere Bilder wie Vorschaubilder sollten deutlich unter 100 KB liegen." },
    { q: "Soll ich JPG oder WEBP wählen?", a: "JPG funktioniert überall. WEBP liefert bei gleicher Größe etwas bessere Qualität und eignet sich für Webseiten, wird aber von manchen Formularen und älteren Apps nicht angenommen." },
    { q: "Sind 500 KB dasselbe wie 0,5 MB?", a: "Ja. 500 KB sind 500.000 Byte, also ein halbes Megabyte. Die Datei liegt auch bei Seiten unter dem Limit, die 1 KB als 1.024 Byte rechnen." },
    { q: "Bleibt kleiner Text in einem Screenshot lesbar?", a: "Ja. Bei 500 KB behält ein Vollbild-Screenshot fast immer seine volle Auflösung, der Text ist also so scharf wie im Original." },
    { q: "Kann ich 50 Fotos auf einmal auf je 500 KB verkleinern?", a: "Ja. Fügen Sie alle zusammen hinzu; jedes kommt unter 500 KB zurück, und Sie können alle als eine ZIP-Datei herunterladen." },
    { q: "Wie viele 500-KB-Fotos passen in eine E-Mail?", a: "Bei einem üblichen Anhanglimit von 25 MB etwa 35 bis 40 — Anhänge wachsen beim Versand um rund ein Drittel. Für mehr Fotos verschicken Sie mehrere E-Mails oder teilen Sie stattdessen einen Link." },
  ],

  security:
    "Fotos, Screenshots und Scans werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Bei üblichen Fotogrößen wird nichts hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, geht an unseren Server und wird dort nach etwa einer Stunde gelöscht.",
};

export default content;
