import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.de";

/**
 * German copy for /de/glitch-effekt. Target query: „Glitch-Effekt" (Germany,
 * Nov 2026; no secondary in the brief). „Glitch Effekt Foto" is used once in
 * the body as the natural long-tail form.
 */
const content: ToolPageContent = {
  toolId: "glitch-effect",
  locale: "de",
  name: "Glitch-Effekt",
  tagline:
    "Geben Sie jedem Foto den Look eines kaputten Bildschirms – Rot-Blau-Farbversatz, verschobene Streifen und Scanlines –, mit Stärkeregler und Mischen-Button. Kostenlos, direkt im Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Glitch-Effekt für Fotos – online & kostenlos | oMyImage",
  metaDescription:
    "Glitch-Effekt online und kostenlos: Farbversatz, verschobene Streifen und Scanlines auf jedes Foto legen, mit Stärkeregler und Live-Vorschau. Ohne Upload.",

  intro:
    "Der Glitch-Look stammt von versagender Technik: einem Videosignal, das verrutscht, einem Bildschirm, der reißt, Farben, die auseinanderdriften. Inzwischen ist er ein eigener Stil auf Albumcovern, Postern, Thumbnails und Profilbildern. Der Glitch-Effekt von oMyImage setzt ihn aus drei Zutaten zusammen, die Sie einzeln ein- und ausschalten – Farbversatz, verschobene Streifen und Scanlines –, mit einem Regler für die Stärke und einem Button, der die Streifen neu mischt, bis die Komposition stimmt. Alles erscheint live in der Vorschau, bevor Sie herunterladen.",

  sections: [
    {
      heading: "Die drei Zutaten",
      id: "parts",
      body: [
        "Der Farbversatz zieht den Rotkanal in die eine und den Blaukanal in die andere Richtung und hinterlässt farbige Säume an jeder Kante – der bekannteste Teil des Effekts, wie bei einem falsch justierten Projektor. Verschobene Streifen schneiden dünne horizontale Bänder aus dem Bild und schieben sie zur Seite, als hätte das Signal einen Aussetzer. Scanlines dunkeln jede zweite Zeile ab – die Textur eines alten Monitors oder einer VHS-Kassette.",
        "Nutzen Sie alle drei für einen vollen Glitch oder nur einen: Der Farbversatz allein gibt Porträts einen dezenten 3D-Brillen-Rand, die Streifen allein wirken wie ein zerrissener Digitaldruck.",
      ],
    },
    {
      heading: "Stärke und Mischen",
      id: "strength",
      body: [
        "Die Stärke skaliert alles gemeinsam: wie weit die Farben auseinanderliegen, wie viele Streifen sich verschieben und wie weit, und wie dunkel die Scanlines sind. Etwa 20 bis 40 ergibt eine Andeutung von Störung; ab 70 wird es laut und chaotisch.",
        "Die Streifen werden zufällig verteilt. Liegt ein Streifen quer über einem Gesicht oder verdeckt ein wichtiges Detail, klicken Sie auf „Streifen neu mischen“ für eine neue Anordnung. Die Anordnung bleibt fest, bis Sie erneut mischen – Vorschau und Download stimmen also immer überein.",
      ],
    },
    {
      heading: "Wo der Effekt wirkt",
      id: "uses",
      body: [
        "Geglitchte Bilder passen zu Musik-Artwork, Gaming- und Tech-Thumbnails, Veranstaltungspostern, Cyberpunk- und Vaporwave-Designs und zu Profilbildern, die in einer Liste auffallen sollen. Klare Formen und starker Kontrast nehmen den Effekt am besten an; ein unruhiges Foto kann zu Rauschen werden. Fette Schrift im Bild ist ein gutes Ziel – der Versatz lässt Buchstaben aussehen, als würden sie vibrieren.",
        "Damit sich der Glitch bewegt, erstellen Sie einige Versionen mit unterschiedlicher Mischung und fügen sie mit „GIF erstellen“ zu einer kurzen Animation zusammen.",
      ],
    },
    {
      heading: "Viele Bilder, ein Look",
      id: "batch",
      body: [
        "Fügen Sie mehrere Bilder hinzu, und dieselben Einstellungen und dieselbe Anordnung werden auf alle angewendet, jeweils passend zur Bildgröße. So teilt eine Serie von Posts oder Covern einen gemeinsamen Look. JPG, PNG und WebP werden angenommen; das Ergebnis behält sein Format, sofern Sie kein anderes wählen, und transparente Bereiche bleiben in PNG und WebP transparent. Mehrere Bilder werden zusammen als ZIP heruntergeladen.",
      ],
    },
    {
      heading: "Tipps für Glitch-Art",
      id: "tips",
      body: [
        "Setzen Sie ein starkes Motiv leicht aus der Mitte, damit die Streifen durch den Hintergrund und nicht durch ein Gesicht laufen. Dunkle Bilder mit hellen Akzenten zeigen den Farbversatz am besten. Ein leicht überkontrastiertes Foto – probieren Sie vorher „Bild aufhellen“ – ergibt ein schärferes, digitaleres Ergebnis, und PNG bewahrt die klaren Kanten der Streifen und Farbsäume.",
      ],
    },
    {
      heading: "Glitch-Effekt für Foto, Cover und Thumbnail",
      id: "formats-social",
      body: [
        "Für Instagram, YouTube-Thumbnails oder Spotify-Cover bringen Sie das Bild am besten zuerst auf das Zielformat und legen den Glitch-Effekt erst danach darauf. So landen die Streifen dort, wo sie später auch zu sehen sind, und werden beim Zuschneiden nicht abgeschnitten. Ein dezenter Effekt mit Stärke 20 bis 40 wirkt in kleinen Vorschaubildern oft stärker, als er in voller Größe aussieht.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Jedes Bild wird vollständig in Ihrem Browser bearbeitet. Nichts wird auf einen Server hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So legen Sie einen Glitch-Effekt auf ein Foto",
  steps: [
    { title: "Bilder hinzufügen", description: "Wählen Sie ein oder mehrere JPG-, PNG- oder WebP-Bilder aus." },
    { title: "Glitch einstellen", description: "Stärke festlegen, Effekte auswählen und Streifen mischen, bis es passt." },
    { title: "Anwenden und herunterladen", description: "Klicken Sie auf „Glitch anwenden“, um das Bild herunterzuladen – oder eine ZIP-Datei bei mehreren." },
  ],

  features: [
    { icon: "gradient", title: "Drei Glitch-Effekte", description: "Farbversatz, verschobene Streifen und Scanlines, jeweils ein- oder ausschaltbar." },
    { icon: "visibility", title: "Live-Vorschau", description: "Sehen Sie jede Änderung sofort und mischen Sie neu, bis es passt." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser bearbeitet." },
  ],

  faqs: [
    { q: "Wie lege ich einen Glitch-Effekt auf ein Foto?", a: "Fügen Sie das Foto hinzu, stellen Sie die Stärke ein, wählen Sie die Effekte und klicken Sie auf „Glitch anwenden“." },
    { q: "Was ist der Farbversatz?", a: "Rot- und Blauanteil des Bildes werden in entgegengesetzte Richtungen verschoben, sodass an Kanten farbige Säume entstehen." },
    { q: "Kann ich ändern, wo die Streifen liegen?", a: "Ja. Klicken Sie auf „Streifen neu mischen“ für eine neue zufällige Anordnung." },
    { q: "Sieht der Download aus wie die Vorschau?", a: "Ja. Die Anordnung bleibt fest, bis Sie neu mischen, und wird auf das ganze Bild hochgerechnet." },
    { q: "Kann ich einen dezenten Glitch erzeugen?", a: "Ja. Verwenden Sie eine Stärke von 20 bis 40 oder schalten Sie nur den Farbversatz ein." },
    { q: "Kann ich einen animierten Glitch erstellen?", a: "Erstellen Sie einige Versionen mit unterschiedlicher Mischung und fügen Sie sie mit „GIF erstellen“ zusammen." },
    { q: "Kann ich mehrere Bilder auf einmal bearbeiten?", a: "Ja. Sie teilen dieselben Einstellungen und werden als ZIP heruntergeladen." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja, wenn Sie als PNG oder WebP speichern." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Welche Bilder eignen sich am besten?", a: "Klare Formen, fette Schrift und hoher Kontrast. Sehr unruhige Fotos können zu Rauschen werden." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "In welchem Format soll ich speichern?", a: "PNG bewahrt die scharfen Streifenkanten und Farbsäume; JPG macht sie leicht weicher." },
  ],

  security:
    "Ihre Bilder werden vollständig in Ihrem Browser bearbeitet. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // ImageFilterTool.tsx is shared with invert-image; reuse its translations.
  ui: invert.ui,
};

export default content;
