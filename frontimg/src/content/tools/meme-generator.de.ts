import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/meme-generator.
 *
 * Primary query "Meme Generator" (74K/mo, DE) — the English loanword is what
 * Germans type, so it stays in the H1. Secondary: "Meme erstellen" (5.4K),
 * "Meme Maker". The default captions ("OBERER TEXT" / "UNTERER TEXT") are
 * drawn INTO the exported image, so they are ui keys, not chrome.
 */
const content: ToolPageContent = {
  toolId: "meme-generator",
  locale: "de",
  name: "Meme Generator",
  tagline:
    "Memes online erstellen — setzen Sie die klassischen Texte oben und unten auf jedes Bild, mit Live-Vorschau, und exportieren Sie als PNG, JPG oder WEBP. Kostenlos, schnell und zu 100 % privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Meme Generator – Meme erstellen, kostenlos | oMyImage",
  metaDescription:
    "Kostenloser Meme Generator: Meme erstellen mit Ihrem Bild, Text oben und unten setzen, Schrift und Farbe anpassen und als PNG oder JPG laden. Ohne Anmeldung.",

  intro:
    "Mit dem Meme Generator von oMyImage machen Sie aus jedem Bild in Sekunden ein Meme. Das Tool setzt die klassischen fetten, umrandeten Texte oben und unten auf Ihre eigenen Fotos oder Vorlagen — mit voller Kontrolle über Schrift, Größe und Farben und einer Live-Vorschau, während Sie tippen. Lange Texte werden automatisch umbrochen. Meme erstellen, als PNG, JPG oder WEBP exportieren — alles in Ihrem Browser, nichts wird hochgeladen.",

  sections: [
    {
      heading: "Warum Memes so aussehen, wie sie aussehen",
      id: "convention",
      body: [
        "Dicke weiße Großbuchstaben mit schwarzem Rand sind weniger eine Stilfrage als ein gelöstes technisches Problem. Text über einem Foto muss lesbar bleiben, egal was darunter liegt, und das schafft keine einzelne Farbe — Weiß verschwindet vor einem hellen Himmel, Schwarz in einem Schatten.",
        "Der Rand löst das, weil er überall dort, wo ein Buchstabe landet, eine Kante im Gegenton garantiert. Impact oder eine andere fette, schmal laufende serifenlose Schrift erledigt den Rest: Die Buchstaben sind schmal genug, damit ein ganzer Satz in die Bildbreite passt, und kräftig genug, um starke Kompression zu überstehen.",
        "Das Ergebnis ist sofort wiedererkennbar, und genau das ist nützlich. Das Format verrät, worum es sich handelt, bevor jemand ein einziges Wort gelesen hat.",
      ],
    },
    {
      heading: "Oberer Text, unterer Text — und warum",
      id: "structure",
      body: [
        "Die zweizeilige Struktur besteht aus Aufbau und Pointe, und sie funktioniert, weil das Auge dazwischen das Bild liest. Der obere Text stellt die Situation her, das Bild liefert den Kontext, und die untere Zeile bringt die Pointe — diese kleine Verzögerung leistet echte komische Arbeit.",
        "Deshalb wirkt alles in einer Zeile meist flach, und deshalb scheitern sehr lange Texte: Wer am Ende angekommen ist, schaut das Bild nicht mehr an. Kurze Zeilen, am besten unter etwa acht Wörtern, halten den Rhythmus.",
        "Die Alternative — ein weißer Balken über oder unter dem Bild — passt zu längeren Bildunterschriften und Kommentaren und lässt das Foto frei. Sie wird eher als Bildunterschrift gelesen als als Meme, was manchmal der bessere Ton ist.",
      ],
    },
    {
      heading: "Export-Einstellungen, die das Teilen überstehen",
      id: "export",
      body: [
        "Rund 800 Pixel Breite sind in der Praxis ideal. Memes werden auf dem Handy angeschaut, und jede Plattform kodiert hochgeladene Bilder neu — WhatsApp, Instagram, X, Facebook-Gruppen —, ein Export mit 4000 Pixeln bringt also nichts und wird vom ersten Dienst, der ihn anfasst, verworfen.",
        "Diese Neukodierung zu verstehen lohnt sich, denn sie erklärt den typischen Verfall eines viel geteilten Memes. Jede Plattform komprimiert das Bild erneut, Artefakte stapeln sich auf Artefakten, und nach genügend Stationen ist das Bild sichtbar beschädigt. Verhindern lässt sich das nicht, aber eine saubere Vorlage in vernünftiger Größe verzögert es deutlich.",
        "Exportieren Sie Foto-Memes als JPG mit hoher Qualität und Grafiken oder Screenshots als PNG — dann bleiben die Textkanten schärfer.",
      ],
    },
    {
      heading: "Alles bleibt auf Ihrem Gerät",
      id: "privacy",
      body: [
        "Das Bild wird auf einem Canvas in Ihrem Browser zusammengesetzt, es wird also nichts hochgeladen. Das ist wichtig, weil sehr viele Memes aus privatem Material entstehen — ein Screenshot aus dem Gruppenchat, ein Foto eines Kollegen, etwas aus dem Familienalbum —, das man ungern einem Server überlässt, nur um zwei Zeilen Text hinzuzufügen.",
        "Außerdem funktioniert das Tool nach dem Laden der Seite auch ohne Internetverbindung, und es gibt keine Warteschlange, kein Nutzungslimit und kein Konto.",
      ],
    },
  ],

  howToTitle: "So erstellen Sie ein Meme",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein Bild oder eine Meme-Vorlage aus, oder ziehen Sie die Datei in den Arbeitsbereich." },
    { title: "Texte schreiben", description: "Tippen Sie den oberen und unteren Text ein und passen Sie Schrift, Größe, Farbe und Rand mit der Live-Vorschau an." },
    { title: "Exportieren", description: "Klicken Sie auf „Meme exportieren“, um Ihr Meme als PNG, JPG oder WEBP herunterzuladen." },
  ],

  features: [
    { icon: "text_fields", title: "Klassischer Meme-Text", description: "Fette Texte im Impact-Stil mit schwarzem Rand, automatischen Großbuchstaben und automatischem Zeilenumbruch bei langen Texten." },
    { icon: "palette", title: "Volle Gestaltung", description: "Ändern Sie Schrift, Größe, Textfarbe sowie Farbe und Stärke des Rands — passend zu jedem Meme-Stil." },
    { icon: "lock", title: "Privat & sofort", description: "Ihr Meme entsteht komplett in Ihrem Browser — das Bild wird nirgendwohin hochgeladen." },
  ],

  faqs: [
    { q: "Kann ich mein eigenes Bild verwenden?", a: "Ja. Laden Sie ein beliebiges JPG, PNG, WEBP oder GIF hoch und fügen Sie Texte hinzu — es gibt keine feste Vorlagenauswahl." },
    { q: "Werden lange Texte umbrochen?", a: "Ja. Die Texte werden automatisch auf mehrere Zeilen verteilt, damit sie immer in die Bildbreite passen." },
    { q: "In welchem Format kann ich exportieren?", a: "PNG (verlustfrei), JPG (kleiner) oder WEBP." },
    { q: "Ist der Meme Generator kostenlos?", a: "Ja, komplett kostenlos, ohne Wasserzeichen und ohne Anmeldung." },
    { q: "Bleiben meine Bilder privat?", a: "Ja. Alles wird lokal in Ihrem Browser gerendert; nichts wird hochgeladen." },
    { q: "Warum ist Meme-Text immer weiß mit schwarzem Rand?", a: "Weil das die einzige Kombination ist, die auf jedem Bild lesbar bleibt. Reines Weiß verschwindet vor einem hellen Himmel, reines Schwarz im Schatten. Der Rand garantiert Kontrast zu allem, was dahinter liegt — deshalb hat sich die Konvention seit zwanzig Jahren nicht verändert." },
    { q: "Welche Schrift sollte ich nehmen?", a: "Impact ist der Klassiker, und das aus gutem Grund — schmal, fett und auch klein gut lesbar, sodass selbst eine lange Zeile in die Bildbreite passt. Jede fette, schmale serifenlose Schrift erfüllt denselben Zweck, falls Impact nicht verfügbar ist." },
    { q: "Gehört der Text ins Bild oder darüber?", a: "Im Bild ist das Standardformat und übersteht das Teilen besser, weil das Meme ein einzelnes Bild ohne abtrennbare Teile ist. Text in einem Balken darüber und darunter passt zu längeren Texten und lässt das Bild frei — wichtig, wenn das Bild selbst die Pointe trägt." },
    { q: "In welcher Größe sollte ich exportieren?", a: "Rund 800 Pixel Breite reichen völlig. Memes werden auf dem Handy angeschaut und von jeder Plattform neu komprimiert, eine sehr große Datei bringt also nichts und lädt nur länger hoch." },
    { q: "Warum sieht mein Meme nach dem Posten schlechter aus?", a: "Weil Plattformen jeden Upload neu kodieren und jedes erneute Teilen wieder komprimiert. Genau dieser sich aufsummierende Schaden gibt viel geteilten Memes ihren ausgewaschenen, blockigen Look. Ein sauberes Bild in vernünftiger Größe verlangsamt den Verfall." },
    { q: "Darf ich jedes Bild verwenden?", a: "Technisch ja. Denken Sie aber daran, dass Fotos Urheber haben und dass ein Meme mit dem Foto oder Abbild einer Person bei kommerzieller Nutzung Fragen zum Urheberrecht und zum Recht am eigenen Bild aufwerfen kann. Für private Nutzung und soziale Netzwerke ist das selten ein praktisches Problem." },
    { q: "Kann ich auch am Handy ein Meme erstellen?", a: "Ja. Der Meme Generator läuft im Handy-Browser: Bild aus der Galerie wählen, Texte schreiben und das fertige Meme herunterladen, um es per WhatsApp zu verschicken oder zu posten." },
  ],

  security:
    "Ihre Bilder bleiben privat. Memes werden vollständig in Ihrem Browser mit HTML-Canvas gerendert — nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // MemeTool.tsx — default captions, drawn INTO the image
    "TOP TEXT": "OBERER TEXT",
    "BOTTOM TEXT": "UNTERER TEXT",
    // MemeTool.tsx
    "Couldn't read that image.": "Dieses Bild konnte nicht gelesen werden.",
    "Please select an image file.": "Bitte wählen Sie eine Bilddatei aus.",
    "Select an image": "Bild auswählen",
    "Change image": "Bild ändern",
    "Meme exported — download started.": "Meme exportiert — der Download hat begonnen.",
    "Export failed.": "Export fehlgeschlagen.",
    "or drop a JPG, PNG, WEBP or GIF here": "oder ein JPG, PNG, WEBP oder GIF hier ablegen",
    "Meme settings": "Meme-Einstellungen",
    "Meme Settings": "Meme-Einstellungen",
    "Export": "Exportieren",
    "Exporting…": "Wird exportiert…",
    "Long captions wrap automatically. Everything runs in your browser.":
      "Lange Texte werden automatisch umbrochen. Alles läuft in Ihrem Browser.",
    "Export meme": "Meme exportieren",
    "Caption": "Text",
    "Top text": "Oberer Text",
    "Bottom text": "Unterer Text",
    "Font": "Schrift",
    "Size": "Größe",
    "UPPERCASE": "GROSSBUCHSTABEN",
    "Style": "Stil",
    "Text color": "Textfarbe",
    "Outline color": "Randfarbe",
    "Outline thickness": "Randstärke",
    "Quality": "Qualität",
    "PNG (lossless)": "PNG (verlustfrei)",
    "JPG (smaller)": "JPG (kleiner)",
  },
};

export default content;
