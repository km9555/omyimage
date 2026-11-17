import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.de";

/**
 * German copy for /de/gif-geschwindigkeit-aendern.
 *
 * Head term „GIF Geschwindigkeit ändern“; „GIF schneller machen“ and „GIF
 * verlangsamen“ appear in the FAQ questions people actually type.
 */
const content: ToolPageContent = {
  toolId: "gif-speed-changer",
  locale: "de",
  name: "GIF Geschwindigkeit ändern",
  tagline:
    "Beschleunigen oder verlangsamen Sie ein animiertes GIF oder geben Sie jedem Frame dieselbe Anzeigedauer. Meist ändert sich nur das Timing – jedes Pixel bleibt, wie es war. Kostenlos, im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF Geschwindigkeit ändern – kostenlos | oMyImage",
  metaDescription:
    "GIF Geschwindigkeit ändern: GIF schneller oder langsamer machen (0,1× bis 10×) oder jedem Frame dieselbe Dauer geben. Ohne Qualitätsverlust und kostenlos.",

  intro:
    "Ein GIF, das schleicht, lässt einen Witz zu spät zünden; eins, das rast, macht eine Anleitung unmöglich nachzuvollziehen. Mit „GIF Geschwindigkeit ändern“ von oMyImage korrigieren Sie das Tempo, ohne die Animation neu zu bauen. Wählen Sie ein Tempo wie 2× oder 0,5× oder geben Sie ein eigenes ein und sehen Sie die neue Länge vor dem Speichern. Muss sich nur das Timing ändern – und das ist meistens so –, schreibt das Tool die Anzeigedauer jedes Frames neu und lässt die Bilder unberührt. Das GIF behält also exakt seine Qualität und Größe.",

  sections: [
    {
      heading: "Wie die Geschwindigkeit eines GIFs funktioniert",
      id: "how",
      body: [
        "Ein GIF hat keine feste Bildrate. Jeder Frame trägt seine eigene Anzeigedauer, gespeichert in Hundertstelsekunden, und ein Player zeigt den Frame so lange, bevor er weitergeht. Deshalb kann ein GIF auf einer Pointe verweilen und durch den Rest hetzen – und deshalb bedeutet eine Tempoänderung, jede einzelne Dauer zu ändern.",
        "Mit 2× halbiert sich jede Dauer, mit 0,5× verdoppelt sie sich. Der Rhythmus des Originals – samt seinen Pausen – bleibt also erhalten, nur schneller oder langsamer.",
      ],
    },
    {
      heading: "Nach Tempo oder nach Anzeigedauer",
      id: "modes",
      body: [
        "Nach Tempo skaliert das eigene Timing des GIFs. Die Schaltflächen decken die üblichen Werte von 0,25× bis 3× ab, das Eingabefeld akzeptiert alles von 0,1× bis 10×. Die neue Länge wird vor dem Klick angezeigt, Sie wissen also genau, wie lange das Ergebnis läuft.",
        "Anzeigedauer gibt stattdessen jedem Frame dieselbe Dauer, in Millisekunden: 100 ms sind 10 Frames pro Sekunde, 50 ms sind 20 und 40 ms sind 25. So läuft ein ungleichmäßiges GIF gleichmäßig, oder ein GIF passt zu einem vorgegebenen Takt. Die Angabe in Frames pro Sekunde aktualisiert sich beim Tippen.",
      ],
    },
    {
      heading: "Die Tempogrenze der Browser",
      id: "limit",
      body: [
        "Browser folgen einer alten Regel: Ein GIF-Frame mit einer Dauer von 0,01 Sekunden oder weniger wird 0,1 Sekunden lang gezeigt. Das schützt vor GIFs mit einer Dauer von null, bedeutet aber, dass ein zu stark beschleunigtes GIF langsamer läuft statt schneller. Die kürzeste Dauer, die wie angegeben abgespielt wird, sind 0,02 Sekunden – 50 Frames pro Sekunde.",
        "Dieses Tool kennt die Regel. Würde ein Tempo Frames unter 0,02 Sekunden drücken, werden benachbarte Frames zusammengelegt, bis jeder lang genug ist, und das Tool sagt Ihnen, wie viele. Das GIF läuft dann im gewählten Tempo mit weniger Frames – genau das, was ein Player bei diesem Tempo ohnehin zeigen würde.",
      ],
    },
    {
      heading: "Verlustfrei, wann immer es geht",
      id: "lossless",
      body: [
        "Bleiben alle Frames erhalten und ändern sich nur die Anzeigedauern, wird das GIF überhaupt nicht neu kodiert. Die Dauerwerte in der Datei werden umgeschrieben, alles andere – Pixel, Palette, Kompression – bleibt Byte für Byte gleich. Die Dateigröße ändert sich praktisch nicht, und die Arbeit dauert selbst bei langen GIFs nur einen Moment.",
        "Nur wenn Frames zusammengelegt werden müssen, wird das GIF neu kodiert. Selbst dann werden seine eigenen Farben wiederverwendet, sobald sie in eine Palette passen, die Frames sehen also gleich aus.",
      ],
    },
    {
      heading: "Gute Geschwindigkeiten",
      id: "tips",
      body: [
        "Reaktions-GIFs und Memes wirken oft etwas schneller besser, bei etwa 1,25× bis 1,5×. Anleitungen und Bildschirmaufnahmen müssen eventuell auf 0,75× oder 0,5× verlangsamt werden, damit man jedem Schritt folgen kann. Zeitlupen von Sport, Haustieren und Spritzern wirken bei 0,5× oder darunter am besten, wenn das Original viele Frames hat; ein GIF mit nur wenigen Frames ruckelt beim Verlangsamen, weil dazwischen nichts ergänzt wird.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser gelesen und neu geschrieben. Es wird nie hochgeladen, und nach dem Schließen der Seite wird nichts aufbewahrt.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die Geschwindigkeit eines GIFs",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Tempo festlegen", description: "Wählen Sie ein Tempo wie 2× oder 0,5× oder geben Sie jedem Frame dieselbe Anzeigedauer." },
    { title: "Anwenden und herunterladen", description: "Klicken Sie auf Tempo ändern, vergleichen Sie das Ergebnis mit dem Original und laden Sie es herunter." },
  ],

  features: [
    { icon: "speed", title: "Schneller oder langsamer", description: "0,1× bis 10× oder eine Anzeigedauer für alle Frames." },
    { icon: "check", title: "Pixel unberührt", description: "Nur das Timing wird neu geschrieben, solange alle Frames erhalten bleiben." },
    { icon: "lock", title: "Kein Upload", description: "Vollständig in Ihrem Browser geändert." },
  ],

  faqs: [
    { q: "Wie mache ich ein GIF schneller?", a: "Fügen Sie das GIF hinzu, wählen Sie ein Tempo über 1×, etwa 1,5× oder 2×, und klicken Sie auf Tempo ändern." },
    { q: "Wie verlangsame ich ein GIF?", a: "Wählen Sie ein Tempo unter 1×, etwa 0,75× oder 0,5×. Jeder Frame wird dann länger angezeigt." },
    { q: "Verschlechtert eine Tempoänderung die Qualität?", a: "Meist überhaupt nicht: Bleiben alle Frames erhalten, werden nur die Anzeigedauern neu geschrieben, und die Pixel bleiben genau, wie sie waren." },
    { q: "Warum wird mein GIF nicht noch schneller?", a: "Browser zeigen Frames unter 0,02 Sekunden 0,1 Sekunden lang. Ab diesem Punkt legt das Tool Frames zusammen, damit das GIF trotzdem im gewählten Tempo läuft." },
    { q: "Was bedeutet Anzeigedauer?", a: "Wie lange jeder Frame gezeigt wird. 100 ms sind 10 Frames pro Sekunde, 50 ms sind 20." },
    { q: "Kann ich jedem Frame dieselbe Dauer geben?", a: "Ja. Wählen Sie Anzeigedauer und geben Sie den Wert in Millisekunden ein; das Minimum sind 20 ms." },
    { q: "Ändert sich die Dateigröße?", a: "Kaum, wenn sich nur das Timing ändert. Werden Frames zusammengelegt, wird das GIF kleiner." },
    { q: "Bleibt die Transparenz erhalten?", a: "Ja. Die Transparenz bleibt unberührt." },
    { q: "Warum ruckelt mein verlangsamtes GIF?", a: "Verlangsamen zeigt dieselben Frames länger; Zwischenbilder kann es nicht erfinden. GIFs mit vielen Frames lassen sich am flüssigsten verlangsamen." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Alles passiert in Ihrem Browser." },
    { q: "Funktioniert das auf dem Smartphone?", a: "Ja, im mobilen Browser." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Begrenzung." },
  ],

  security:
    "Das Timing Ihres GIFs wird vollständig in Ihrem Browser geändert. Nichts wird hochgeladen, gespeichert oder getrackt.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
