import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.de";

/**
 * German copy for /de/gif-rueckwaerts.
 *
 * Head term „GIF rückwärts abspielen“; „GIF umkehren“ (the button label) and
 * „Bumerang-GIF“ carry the secondary wording.
 */
const content: ToolPageContent = {
  toolId: "reverse-gif",
  locale: "de",
  name: "GIF rückwärts abspielen",
  tagline:
    "Spielen Sie ein animiertes GIF rückwärts ab oder machen Sie daraus einen Bumerang, der vorwärts und dann rückwärts läuft – als nahtlose Schleife. Jeder Frame behält sein Timing. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF rückwärts abspielen – Bumerang-GIF online | oMyImage",
  metaDescription:
    "GIF rückwärts abspielen oder als Bumerang-GIF vorwärts und zurück laufen lassen. Jeder Frame behält sein Timing. Kostenlos, ohne Wasserzeichen und ohne Upload.",

  intro:
    "Eine Animation rückwärts laufen zu lassen ist einer der ältesten Tricks überhaupt: Wasser springt zurück ins Glas, ein fallender Gegenstand fliegt in die Hand zurück, eine Menschenmenge läuft rückwärts. Mit „GIF rückwärts abspielen“ von oMyImage kehren Sie die Reihenfolge aller Frames Ihres GIFs um, sodass es vom Ende zum Anfang läuft. Die Option Bumerang spielt den Clip vorwärts und dann rückwärts, sodass die Schleife keinen sichtbaren Sprung hat. GIF hinzufügen, Richtung wählen, Ergebnis mit dem Original vergleichen, herunterladen.",

  sections: [
    {
      heading: "Rückwärts oder Bumerang",
      id: "modes",
      body: [
        "Rückwärts spielt die Frames vom letzten zum ersten ab. Das GIF dauert genauso lange wie vorher und hat gleich viele Frames; nur die Reihenfolge ändert sich. Das ist die richtige Wahl für Gags, die davon leben, dass die Zeit rückwärts läuft, und für GIFs, die andersherum einfach besser aussehen.",
        "Bumerang spielt die Frames vorwärts und dann rückwärts. Erster und letzter Frame werden an den Wendepunkten nicht wiederholt, die Bewegung federt also sauber zurück, statt kurz zu stocken. Das ist der Effekt, den Kamera-Apps Bumerang nennen, und der einfachste Weg, jeden kurzen Clip ohne Sprung zu wiederholen.",
      ],
    },
    {
      heading: "Timing",
      id: "timing",
      body: [
        "Jeder Frame behält seine eigene Dauer. Bleibt das Original zwei Sekunden auf dem letzten Frame stehen und startet dann neu, steht das umgekehrte GIF zwei Sekunden auf demselben Frame – jetzt am Anfang. Das ist meist gewollt; wirkt die Pause am Anfang seltsam, gibt „GIF Geschwindigkeit ändern“ jedem Frame dieselbe Anzeigedauer.",
        "Ein Bumerang ist fast doppelt so lang wie das Original, weil die meisten Frames zweimal laufen. Kurze Clips von ein bis drei Sekunden ergeben die besten Bumerangs; längere können auf dem Rückweg zäh wirken.",
      ],
    },
    {
      heading: "Warum manche GIFs mit einem Sprung neu starten",
      id: "loops",
      body: [
        "Die meisten GIFs sind aus Videos geschnitten, der letzte Frame passt also selten zum ersten. Startet das GIF neu, springt alles zurück an den Anfang, und das Auge bemerkt den Sprung alle paar Sekunden. Ein Bumerang springt nie: Er kehrt an jedem Ende um, die Bewegung ist also durchgehend, egal wie oft er läuft.",
        "Damit ist er eine schnelle Lösung für Produktaufnahmen, winkende Hände, eingeschenkte Getränke, Haare im Wind und andere kurze Bewegungen, die sonst bei jeder Wiederholung ruckeln würden.",
      ],
    },
    {
      heading: "Qualität und Dateigröße",
      id: "quality",
      body: [
        "Die Frames selbst werden nicht verändert. Passen die Farben des GIFs in eine Palette – wie bei den meisten GIFs –, werden genau dieselben Farben zurückgeschrieben. GIFs aus Videos verwenden manchmal eine Palette pro Frame; sie bekommen eine gemeinsame Palette mit 256 Farben aus allen Frames, was selten auffällt.",
        "Ein umgekehrtes GIF bleibt meist nah an seiner ursprünglichen Größe. Ein Bumerang ist größer, weil fast jeder Frame doppelt gespeichert wird; wenn das wichtig ist, macht „GIF komprimieren“ ihn danach leichter.",
      ],
    },
    {
      heading: "Ideen für Bumerang-GIFs",
      id: "ideas",
      body: [
        "Spulen Sie einen Sprung ins Wasser, einen Hüpfer oder ein Spritzen zurück, sodass es rückwärts passiert. Lassen Sie einen Bau, eine Zeichnung oder ein Rezept rückwärts laufen, sodass es sich selbst wieder auflöst. Machen Sie aus einer Produktdrehung oder einem Porträt-Clip einen Bumerang, der auf einer Website oder in einer Story sauber wiederholt. Kehren Sie ein Reaktions-GIF um, um seine Bedeutung komplett zu ändern.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser dekodiert, umsortiert und kodiert. Es wird nie hochgeladen, und nach dem Schließen der Seite wird nichts aufbewahrt.",
      ],
    },
  ],

  howToTitle: "So spielen Sie ein GIF rückwärts ab",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Richtung wählen", description: "Wählen Sie Rückwärts, um es rückwärts abzuspielen, oder Bumerang für vorwärts und dann rückwärts." },
    { title: "Umkehren und herunterladen", description: "Klicken Sie auf GIF umkehren, vergleichen Sie das Ergebnis mit dem Original und laden Sie es herunter." },
  ],

  features: [
    { icon: "history", title: "Rückwärts oder Bumerang", description: "Vom Ende her abspielen oder vorwärts und zurück in einer nahtlosen Schleife." },
    { icon: "visibility", title: "Nebeneinander", description: "Original und Ergebnis laufen direkt nebeneinander." },
    { icon: "lock", title: "Kein Upload", description: "Vollständig in Ihrem Browser umgekehrt." },
  ],

  faqs: [
    { q: "Wie spiele ich ein GIF rückwärts ab?", a: "Fügen Sie das GIF hinzu, lassen Sie Rückwärts ausgewählt und klicken Sie auf GIF umkehren. Die Frames laufen dann vom letzten zum ersten." },
    { q: "Was ist ein Bumerang-GIF?", a: "Ein GIF, das vorwärts und dann rückwärts läuft, immer wieder, sodass die Schleife nie an den Anfang zurückspringt." },
    { q: "Behält das umgekehrte GIF sein Tempo?", a: "Ja. Jeder Frame behält seine eigene Dauer; nur die Reihenfolge ändert sich." },
    { q: "Warum ist mein Bumerang länger?", a: "Die meisten Frames laufen zweimal – einmal vorwärts, einmal rückwärts –, ein Bumerang dauert also fast doppelt so lange." },
    { q: "Verschlechtert das Umkehren die Qualität?", a: "Nein. Die Frames werden nicht verändert, und die Originalfarben werden wiederverwendet, sobald sie in eine Palette passen." },
    { q: "Wird die Datei größer?", a: "Ein umgekehrtes GIF bleibt etwa gleich groß. Ein Bumerang ist größer, weil fast jeder Frame doppelt gespeichert wird." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente GIFs bleiben transparent." },
    { q: "Kann ich ein Video rückwärts abspielen?", a: "Wandeln Sie den Clip zuerst mit „Video in GIF“ um und kehren Sie dann hier das GIF um." },
    { q: "Kann ich aus einem Standbild einen Bumerang machen?", a: "Nein – ein Bumerang braucht Bewegung. Ein GIF mit einem einzigen Frame hat nichts, was sich umkehren ließe." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Das GIF wird vollständig in Ihrem Browser umgekehrt." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, im mobilen Browser. Lange GIFs dauern auf dem Smartphone etwas länger." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Begrenzung." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser umgekehrt. Nichts wird hochgeladen, gespeichert oder getrackt.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
