import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.de";

/**
 * German copy for /de/gif-schneiden. Target query: „GIF schneiden" (Germany,
 * Nov 2026). „Schneiden" = trim in time; „zuschneiden" is the cropper's word,
 * so the page keeps the two apart (see the extra FAQ).
 */
const content: ToolPageContent = {
  toolId: "gif-cutter",
  locale: "de",
  name: "GIF schneiden",
  tagline:
    "Kürzen Sie ein animiertes GIF auf den Teil, den Sie brauchen: Wählen Sie den ersten und letzten Frame, der bleiben soll, oder schneiden Sie einen Abschnitt aus der Mitte heraus. Kostenlos, direkt im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF schneiden – online & kostenlos kürzen | oMyImage",
  metaDescription:
    "GIF schneiden online und kostenlos: Start- und End-Frame wählen, Anfang und Ende kürzen oder einen Teil aus der Mitte entfernen. Im Browser, ohne Upload.",

  intro:
    "GIFs aus Videos und Bildschirmaufnahmen beginnen und enden selten an der richtigen Stelle. Vor der eigentlichen Szene vergeht eine Sekunde, am Ende kommt eine Blende, oder in der Mitte zieht sich etwas, das Sie lieber überspringen würden. Mit „GIF schneiden“ von oMyImage kürzen Sie Ihr GIF Frame für Frame: Verschieben Sie die Regler für Anfang und Ende, prüfen Sie den ersten und letzten Frame Ihrer Auswahl in den Vorschaubildern und entscheiden Sie, ob Sie diesen Teil behalten oder entfernen. Das Ergebnis läuft neben dem Original, mit neuer Länge und Dateigröße, bevor Sie es herunterladen.",

  sections: [
    {
      heading: "Einen Teil behalten oder einen Teil entfernen",
      id: "modes",
      body: [
        "„Behalten“ speichert nur die Frames vom Anfangs- bis zum End-Regler – der übliche Schnitt, um Leerlauf an beiden Enden zu entfernen oder einen einzelnen Moment aus einem langen GIF herauszulösen.",
        "„Entfernen“ macht das Gegenteil: Die Frames zwischen den Reglern werden gelöscht, und der Rest wird nahtlos aneinandergefügt. So schneiden Sie eine Pause, einen Fehler oder eine unerwünschte Szene aus der Mitte heraus und behalten Anfang und Ende.",
      ],
    },
    {
      heading: "Die richtigen Frames finden",
      id: "frames",
      body: [
        "Jeder Regler zeigt die Nummer seines Frames und den Zeitpunkt in Sekunden, an dem dieser Frame in der Animation beginnt. Die beiden Vorschaubilder zeigen den ersten und letzten Frame der Auswahl. So treffen Sie genau den Moment, in dem eine Bewegung beginnt oder eine Einblendung endet, ohne auf einer Zeitleiste raten zu müssen.",
        "Ein Frame ist der kleinste Schritt, den ein GIF kennt. Ein GIF aus einem Video mit 10 Bildern pro Sekunde hat alle Zehntelsekunde einen Frame; bei ungleichmäßigem Timing kann ein Frame auch länger stehen bleiben – das verraten die Zeitangaben neben den Reglern.",
      ],
    },
    {
      heading: "Was gleich bleibt",
      id: "kept",
      body: [
        "Die Frames, die Sie behalten, werden nicht verändert, und jeder behält seine eigene Dauer. Die restliche Animation läuft also genau so ab wie vorher, und das GIF wiederholt sich weiterhin in einer Schleife. Passen seine Farben in eine einzige Palette – wie bei den meisten GIFs –, werden genau diese Farben wieder geschrieben. GIFs mit einer eigenen Palette pro Frame erhalten eine gemeinsame Palette mit 256 Farben aus allen Frames, was man nur selten sieht.",
      ],
    },
    {
      heading: "Kürzer heißt kleiner",
      id: "size",
      body: [
        "Jeder entfernte Frame sind entfernte Daten. Kürzen ist deshalb eine der wirksamsten Methoden, ein GIF zu verkleinern, ohne seine Qualität anzutasten. Wer ein sechs Sekunden langes GIF auf seine besten zwei Sekunden schneidet, spart typischerweise rund zwei Drittel der Dateigröße.",
        "Ist es für den Zielort immer noch zu groß, schneiden Sie mit „GIF zuschneiden“ die Ränder weg oder reduzieren Sie mit „GIF komprimieren“ die Farben.",
      ],
    },
    {
      heading: "Typische Schnitte",
      id: "uses",
      body: [
        "Entfernen Sie die leeren Sekunden, die ein Bildschirmrekorder vor dem Start und nach dem Stopp aufzeichnet. Behalten Sie bei einem Reaktions-GIF nur die Pointe. Schneiden Sie den Moment heraus, in dem jemand durchs Bild läuft. Teilen Sie ein langes GIF in kurze Stücke auf, indem Sie nacheinander mehrere Schnitte derselben Datei speichern.",
        "Wenn Sie ein Video kürzen möchten, bevor daraus ein GIF wird: „Video in GIF“ hat eigene Regler für Anfang und Ende, sodass die Datei von Anfang an klein bleibt.",
      ],
    },
    {
      heading: "Kurze GIFs für WhatsApp und Co.",
      id: "messengers",
      body: [
        "Messenger, Foren und soziale Netzwerke setzen oft eine Obergrenze für die Dateigröße. Ein zu langes GIF wird dann abgelehnt oder automatisch in schlechterer Qualität umgewandelt. Das GIF auf die Sekunden zu kürzen, auf die es ankommt, ist der einfachste Weg, unter diesen Grenzen zu bleiben, ohne dass das Bild leidet – und ein kurzes GIF hält die Aufmerksamkeit ohnehin besser.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser dekodiert, geschnitten und neu kodiert. Es wird nie hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert.",
      ],
    },
  ],

  howToTitle: "So schneiden Sie ein GIF",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Anfang und Ende festlegen", description: "Schieben Sie die Regler auf den ersten und letzten Frame und wählen Sie, ob dieser Teil bleiben oder weg soll." },
    { title: "Schneiden und herunterladen", description: "Klicken Sie auf „GIF schneiden“, vergleichen Sie das Ergebnis mit dem Original und laden Sie es herunter." },
  ],

  features: [
    { icon: "burst_mode", title: "Frame-genau", description: "Beginnen und enden Sie auf exakten Frames, mit Zeitangaben und Vorschaubildern." },
    { icon: "delete", title: "Behalten oder entfernen", description: "Kürzen Sie die Enden oder schneiden Sie einen Abschnitt aus der Mitte heraus." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser geschnitten." },
  ],

  faqs: [
    { q: "Wie kann ich ein GIF kürzen?", a: "Fügen Sie das GIF hinzu, schieben Sie die Regler „Anfang“ und „Ende“ auf die gewünschten Frames, lassen Sie „Behalten“ ausgewählt und klicken Sie auf „GIF schneiden“." },
    { q: "Kann ich Frames aus der Mitte eines GIFs entfernen?", a: "Ja. Markieren Sie den Teil, der weg soll, und wählen Sie „Entfernen“; die Frames davor und danach werden aneinandergefügt." },
    { q: "Ändert das Schneiden die Geschwindigkeit?", a: "Nein. Jeder Frame, den Sie behalten, hat seine ursprüngliche Dauer." },
    { q: "Verliert das GIF an Qualität?", a: "Nein. Die behaltenen Frames bleiben unverändert, und die Originalfarben werden wiederverwendet, sobald sie in eine Palette passen." },
    { q: "Wie viel kleiner wird mein GIF?", a: "Ungefähr im Verhältnis der entfernten Frames – wer die Hälfte der Frames entfernt, spart etwa die Hälfte der Dateigröße." },
    { q: "Kann ich ein GIF nach Zeit statt nach Frames schneiden?", a: "Jeder Regler zeigt, zu welcher Sekunde sein Frame beginnt. Sie können also auf eine Zeit zielen; der Schnitt selbst liegt aber immer zwischen zwei Frames." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Transparente GIFs bleiben transparent." },
    { q: "Läuft das gekürzte GIF weiterhin in einer Schleife?", a: "Ja. Es wiederholt sich genau wie das Original." },
    { q: "Kann ich ein GIF in mehrere Teile aufteilen?", a: "Ja – schneiden Sie einen Teil und laden Sie ihn herunter, verschieben Sie dann die Regler und schneiden Sie den nächsten Teil aus demselben GIF." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Das GIF wird vollständig in Ihrem Browser geschnitten." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, in jedem mobilen Browser." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Was ist der Unterschied zwischen GIF schneiden und GIF zuschneiden?", a: "Schneiden entfernt Frames, also Zeit. Zuschneiden entfernt Ränder des Bildes – dafür gibt es das Tool „GIF zuschneiden“." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser geschnitten. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
