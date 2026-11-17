import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/linkedin-banner-groesse (variant of resize-image).
 * Target query: „LinkedIn Banner Größe“; secondary „LinkedIn Banner“ (3.6K/mo, DE).
 */
const content: ToolPageContent = {
  toolId: "linkedin-banner-resizer",
  locale: "de",
  name: "LinkedIn Banner Größe anpassen",
  tagline:
    "Bringen Sie jedes Bild auf die Größe des LinkedIn-Hintergrundbilds – genau 1584 × 396 Pixel, ein Streifen im Format 4:1 –, zugeschnitten oder mit Rand aufgefüllt. Kostenlos, im Browser, ohne Anmeldung.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "LinkedIn Banner Größe: 1584 × 396 px erstellen | oMyImage",
  metaDescription:
    "Die richtige LinkedIn Banner Größe: Bild auf 1584 × 396 Pixel (4:1) bringen – zugeschnitten oder mit Farbrand. Ihr LinkedIn Banner, kostenlos, ohne Anmeldung.",

  intro:
    "Das Banner hinter Ihrem LinkedIn-Profilbild ist ein langer, schmaler Streifen: 1584 × 396 Pixel, viermal so breit wie hoch. Kaum ein Foto oder Design hat von Haus aus diese Form, also schneidet LinkedIn es unberechenbar zu oder lehnt es ab. Dieses Tool startet direkt mit der LinkedIn Banner Größe: Fügen Sie Ihr Bild hinzu, entscheiden Sie, ob es den Streifen per Zuschnitt füllen oder mit einer Farbe aufgefüllt werden soll, und laden Sie ein LinkedIn Banner herunter, das genau passt.",

  sections: [
    {
      heading: "Die Größe des LinkedIn-Hintergrundbilds",
      id: "spec",
      body: [
        "Das Hintergrundbild eines persönlichen LinkedIn-Profils misst 1584 × 396 Pixel, also 4:1, und wird als JPG oder PNG unter 8 MB hochgeladen. Ein Bild in genau dieser Größe passt, ohne dass das Zuschneide-Werkzeug von LinkedIn raten muss, welchen Streifen Ihres Bildes es behalten soll.",
        "Unternehmensseiten verwenden ein anderes, schmaleres Titelbild mit 1128 × 191 Pixeln. Für eine Unternehmensseite wählen Sie Eigene Größe und tragen diese Werte statt der Größe des persönlichen Banners ein.",
      ],
    },
    {
      heading: "Ihr Profilbild verdeckt einen Teil des Banners",
      id: "overlap",
      body: [
        "Am Desktop liegt Ihr rundes Profilbild über dem unteren linken Bereich des Banners, und auf dem Smartphone wird das Banner schmaler angezeigt und an den Seiten beschnitten. Text, Logos oder Gesichter im linken Drittel oder ganz außen können dadurch verschwinden.",
        "Platzieren Sie das Wichtige mittig oder rechts und behandeln Sie die linke Seite als Hintergrund. Eine ruhige Fläche dort lässt außerdem Ihr Profilbild besser wirken, statt dass es mit dem Banner konkurriert.",
      ],
    },
    {
      heading: "Aus einem normalen Foto einen 4:1-Streifen machen",
      id: "fit",
      body: [
        "Zuschneiden und füllen, die Voreinstellung, skaliert das Bild auf die volle Breite und schneidet oben und unten gleichmäßig ab – gut für eine Skyline, einen Schreibtisch oder eine abstrakte Textur. Liegt der interessante Teil nahe am oberen oder unteren Rand, schneiden Sie das Bild vorher selbst mit der Zuschneiden-Schaltfläche auf der Karte zu und wählen den Streifen, den Sie behalten möchten.",
        "Mit Rand auffüllen behält das ganze Bild und füllt die Seiten mit einer Farbe. Das passt zu einem Logo oder einer quadratischen Grafik: Das Motiv sitzt mittig in einem 4:1-Band aus Vollfarbe. Nehmen Sie eine Farbe aus Ihrer Marke oder aus dem Bild, damit das Band gewollt aussieht.",
      ],
    },
    {
      heading: "So bleibt das Banner scharf",
      id: "sharp",
      body: [
        "Starten Sie mit einem Bild, das mindestens 1584 Pixel breit ist. Ein kleineres Bild muss vergrößert werden, um das Banner zu füllen, und gestreckte Pixel wirken auf großen Bildschirmen weich. Haben Sie nur ein kleines Logo, füllen Sie es lieber mit Rand auf, statt es auf die volle Breite zu vergrößern.",
        "Schrift im Banner sollte groß und kurz sein. Auf dem Handy ist der ganze Streifen nur wenige Zentimeter hoch, ein Slogan in kleiner Schrift wird dort unlesbar. Ein Name, eine Rolle oder eine einzige Zeile funktionieren am besten.",
      ],
    },
    {
      heading: "Banner bei LinkedIn hochladen",
      id: "upload",
      body: [
        "Öffnen Sie Ihr Profil, klicken Sie auf das Stiftsymbol im Bannerbereich, wählen Sie Foto hochladen und das heruntergeladene Bild. Weil es bereits 1584 × 396 Pixel hat, sollte der Positionierungsschritt das ganze Bild zeigen. Passen Sie es nur an, wenn Sie möchten, und speichern Sie dann.",
      ],
    },
  ],

  howToTitle: "So passen Sie ein Bild an die LinkedIn Banner Größe an",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein JPG, PNG, WEBP, GIF oder BMP – ein Foto, ein Design oder ein Logo." },
    { title: "Zuschneiden oder auffüllen", description: "Die Größe 1584 × 396 ist schon eingestellt; wählen Sie Zuschneiden und füllen oder Mit Rand auffüllen." },
    { title: "Herunterladen", description: "Ändern Sie die Größe und laden Sie ein Banner herunter, das direkt in Ihr LinkedIn-Profil passt." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Genau 1584 × 396", description: "Die Hintergrundgröße im Format 4:1 – LinkedIn muss nichts mehr zuschneiden." },
    { icon: "palette", title: "Rand in Wunschfarbe", description: "Setzen Sie ein Logo oder eine quadratische Grafik auf einfarbigem Grund in den Streifen." },
    { icon: "lock", title: "Im Browser", description: "Ihr Bild wird auf Ihrem Gerät bearbeitet und nie hochgeladen." },
  ],

  faqs: [
    { q: "Welche Größe hat ein LinkedIn Banner?", a: "1584 × 396 Pixel im Format 4:1, als JPG oder PNG unter 8 MB – für das Hintergrundbild eines persönlichen Profils." },
    { q: "Wie bringe ich mein Bild auf 1584 × 396?", a: "Fügen Sie es hier hinzu – die LinkedIn-Größe ist bereits gewählt. Wählen Sie Zuschneiden und füllen oder Mit Rand auffüllen, dann Größe ändern und herunterladen." },
    { q: "Warum ist ein Teil meines Banners verdeckt?", a: "Am Desktop überdeckt Ihr Profilbild den unteren linken Bereich, auf dem Handy werden die Seiten beschnitten. Halten Sie wichtige Inhalte mittig oder rechts." },
    { q: "Welche Größe hat das Titelbild einer LinkedIn-Unternehmensseite?", a: "1128 × 191 Pixel. Wählen Sie Eigene Größe und tragen Sie diese Werte ein." },
    { q: "Mein Banner wirkt unscharf – warum?", a: "Das Original war vermutlich schmaler als 1584 Pixel und musste vergrößert werden. Starten Sie mit einem breiteren Bild oder füllen Sie ein kleines Logo mit Rand auf, statt es zu strecken." },
    { q: "Kann ich ein Logo auf einfarbigen Hintergrund setzen?", a: "Ja. Wählen Sie Mit Rand auffüllen und eine Hintergrundfarbe; das Logo sitzt mittig in einem 4:1-Streifen in dieser Farbe." },
    { q: "Was macht ein gutes LinkedIn Banner aus?", a: "Etwas Schlichtes, das Ihr Profil unterstützt: Ihre Stadt, Ihr Arbeitsplatz, Ihr Produkt oder eine Markenfarbe mit einer kurzen Textzeile auf der rechten Seite." },
    { q: "JPG oder PNG für das LinkedIn Banner?", a: "Beides funktioniert. JPG eignet sich für Fotos; PNG hält Schrift und flächige Grafiken schärfer." },
    { q: "Wird mein Bild irgendwo hochgeladen?", a: "Nein. Es wird in Ihrem Browser bearbeitet; nur Sie selbst laden es bei LinkedIn hoch." },
  ],

  security:
    "Ihr Bild wird vollständig in Ihrem Browser bearbeitet. Sehr große Bilder werden unter Umständen auf unserem Server verarbeitet und sofort gelöscht; nichts wird gespeichert.",
};

export default content;
