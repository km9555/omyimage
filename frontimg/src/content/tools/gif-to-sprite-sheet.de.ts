import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.de";

/**
 * German copy for /de/gif-in-sprite-sheet. Target query: „Sprite Sheet"
 * (720/mo, Germany, Nov 2026). German game developers use the English term,
 * so it stays as is; „Spritesheet" (one word) appears once in the body.
 */
const content: ToolPageContent = {
  toolId: "gif-to-sprite-sheet",
  locale: "de",
  name: "GIF in Sprite Sheet",
  tagline:
    "Legen Sie jeden Frame eines animierten GIFs auf ein einziges PNG-Sprite-Sheet – als Raster, in einer Zeile oder einer Spalte –, mit Abständen und fertiger CSS-Animation. Kostenlos, direkt im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Sprite Sheet aus GIF erstellen – kostenlos | oMyImage",
  metaDescription:
    "Sprite Sheet aus GIF erstellen, online und kostenlos: alle Frames als PNG im Raster, in Zeile oder Spalte, mit Abstand und CSS-Animation. Ohne Upload.",

  intro:
    "Ein Sprite Sheet legt alle Frames einer Animation nebeneinander auf ein einziges Bild. Spiele und Webseiten zeigen dann jeweils einen Frame, indem sie ein Fenster über das Sheet verschieben – das lädt schneller und lässt sich besser steuern als ein GIF. Mit „GIF in Sprite Sheet“ von oMyImage wird aus jedem animierten GIF in wenigen Klicks ein transparentes PNG-Spritesheet: Wählen Sie ein Raster, eine einzelne Zeile oder eine einzelne Spalte, legen Sie fest, wie viele Frames bleiben und wie groß sie sind, fügen Sie bei Bedarf Abstände für Ihre Engine hinzu und kopieren Sie das CSS, das die Animation abspielt.",

  sections: [
    {
      heading: "Raster, Zeile oder Spalte",
      id: "layout",
      body: [
        "Ein Raster ordnet die Frames in Zeilen und Spalten an. So bleibt das Sheet ungefähr quadratisch – die Form, die die meisten Game-Engines und Textur-Tools bevorzugen. Sie wählen die Anzahl der Spalten; die Zeilen ergeben sich aus der Zahl der Frames.",
        "„Eine Zeile“ oder „Eine Spalte“ setzt alle Frames in eine einzige Reihe. Dieses Layout lässt sich am einfachsten mit CSS animieren, und das Tool schreibt das Stylesheet für Sie: Frame-Größe, Hintergrund und eine steps()-Animation, die im Tempo des GIFs über den Streifen läuft.",
      ],
    },
    {
      heading: "Frames, Größe und Abstand",
      id: "options",
      body: [
        "Wer nur jeden zweiten oder dritten Frame behält, halbiert oder drittelt das Sheet, und die Bewegung bleibt trotzdem erkennbar – wichtig bei langen GIFs. Die Frame-Größe skaliert jeden Frame auf 75, 50 oder 25 Prozent, passend für kleine Icons und Figuren.",
        "Der Abstand fügt 2, 4 oder 8 Pixel Lücke zwischen den Frames ein. Engines, die Texturen glätten oder skalieren, können sonst eine Pixelreihe aus dem benachbarten Frame mitnehmen, wenn sich Frames berühren; eine kleine Lücke verhindert dieses Durchscheinen. Der Hintergrund bleibt transparent, sofern Sie keine Farbe wählen.",
      ],
    },
    {
      heading: "Das Sheet in einer Game-Engine verwenden",
      id: "engines",
      body: [
        "Das Einstellungsfeld zeigt die Frame-Größe sowie die Zahl der Spalten und Zeilen – genau die Werte, die eine Engine zum Zerlegen des Sheets braucht. In Phaser, Godot, Unity, GameMaker und ähnlichen Tools importieren Sie das PNG, tragen Breite und Höhe eines Frames ein und geben den Abstand an, falls Sie einen verwendet haben. Die Reihenfolge der Frames aus dem Original-GIF bleibt erhalten, von links nach rechts und von oben nach unten.",
        "GIFs können für jeden Frame eine andere Pause haben; die meisten Engines spielen ein Sheet dagegen mit einer festen Bildrate ab. Stellen Sie diese passend zum gewünschten Tempo ein.",
      ],
    },
    {
      heading: "Das Sheet mit CSS verwenden",
      id: "css",
      body: [
        "Bei einer Zeile oder Spalte enthält das Ergebnis einen kurzen CSS-Block: ein Element in der Größe eines Frames, das Sheet als Hintergrund und eine Keyframe-Animation mit steps(), damit der Hintergrund von Frame zu Frame springt, statt zu gleiten. Fügen Sie ihn in Ihr Stylesheet ein, geben Sie einem Element die Klasse sprite, und die Animation läuft ganz ohne Skript.",
        "Das CSS verteilt die Gesamtlaufzeit des GIFs gleichmäßig auf alle Frames. Ein GIF mit ungleichmäßigen Pausen läuft dadurch in gleichmäßigem Tempo.",
      ],
    },
    {
      heading: "Größengrenzen",
      id: "limits",
      body: [
        "Browser können kein Bild erzeugen, das breiter oder höher als 16.384 Pixel ist, und Safari stoppt bei insgesamt etwa 16,7 Millionen Pixeln. Ein langes GIF in einer einzigen Zeile erreicht diese Grenze schnell. Wäre ein Sheet zu groß, meldet das Tool das; nutzen Sie dann ein Raster, behalten Sie weniger Frames oder wählen Sie eine kleinere Frame-Größe.",
      ],
    },
    {
      heading: "Einsatz in Web und Spieleentwicklung",
      id: "uses",
      body: [
        "Sprite Sheets eignen sich für animierte Buttons, Ladeanzeigen und Icons auf Websites, für Spielfiguren und Effekte in 2D-Spielen und für Prototypen, in denen eine Animation schnell ausprobiert werden soll. Ein vorhandenes GIF ist dafür oft der schnellste Ausgangspunkt: Statt jeden Frame einzeln zu exportieren, erhalten Sie das fertige Sheet in einem Schritt.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Das GIF wird vollständig in Ihrem Browser gelesen und das Sheet dort gezeichnet. Nichts wird hochgeladen, und nach dem Schließen der Seite bleibt nichts gespeichert. Wenn Sie die Frames lieber als einzelne Dateien statt auf einem Sheet möchten, nutzen Sie „GIF in Bilder“.",
      ],
    },
  ],

  howToTitle: "So erstellen Sie ein Sprite Sheet aus einem GIF",
  steps: [
    { title: "GIF hinzufügen", description: "Wählen Sie ein animiertes GIF von Ihrem Computer oder Smartphone aus." },
    { title: "Layout wählen", description: "Raster, eine Zeile oder eine Spalte; legen Sie Frames, Größe, Abstand und Hintergrund fest." },
    { title: "Erstellen und herunterladen", description: "Klicken Sie auf „Sprite Sheet erstellen“, kopieren Sie bei Bedarf das CSS und laden Sie das PNG herunter." },
  ],

  features: [
    { icon: "grid_view", title: "Jedes Layout", description: "Raster mit Ihrer Spaltenzahl, eine einzelne Zeile oder eine einzelne Spalte." },
    { icon: "code", title: "CSS inklusive", description: "Eine fertige steps()-Animation für Zeilen- und Spalten-Sheets." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser erstellt." },
  ],

  faqs: [
    { q: "Wie mache ich aus einem GIF ein Sprite Sheet?", a: "Fügen Sie das GIF hinzu, wählen Sie Raster, Zeile oder Spalte und klicken Sie auf „Sprite Sheet erstellen“. Laden Sie dann das PNG herunter." },
    { q: "Was ist ein Sprite Sheet?", a: "Ein einzelnes Bild, das alle Frames einer Animation nebeneinander enthält." },
    { q: "Ist der Hintergrund transparent?", a: "Ja, standardmäßig. Sie können stattdessen auch eine Volltonfarbe wählen." },
    { q: "Kann ich die Anzahl der Spalten festlegen?", a: "Ja. Geben Sie im Raster-Layout die Spaltenzahl ein; die Zeilen ergeben sich aus der Zahl der Frames." },
    { q: "Wozu Abstand zwischen den Frames?", a: "Manche Engines vermischen beim Skalieren benachbarte Pixel; eine kleine Lücke verhindert, dass Frames ineinander übergehen." },
    { q: "Wie animiere ich das Sheet mit CSS?", a: "Wählen Sie eine Zeile oder eine Spalte und kopieren Sie das CSS, das mit dem Ergebnis angezeigt wird." },
    { q: "Warum ist mein Sheet zu groß?", a: "Browser können keine Bilder über 16.384 Pixel Kantenlänge erzeugen. Nutzen Sie ein Raster, behalten Sie weniger Frames oder verkleinern Sie sie." },
    { q: "Bleibt jeder Frame erhalten?", a: "Ja, außer Sie wählen, nur jeden 2. oder 3. Frame zu behalten." },
    { q: "Geht dabei Qualität verloren?", a: "Nein. Bei 100 % Größe werden die Frames Pixel für Pixel in ein PNG kopiert." },
    { q: "Wird mein GIF hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Kann ich die Frames als einzelne Bilder bekommen?", a: "Ja, mit „GIF in Bilder“." },
    { q: "Ist das kostenlos?", a: "Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit." },
    { q: "Funktioniert das Sprite Sheet in Unity oder Godot?", a: "Ja. Importieren Sie das PNG und tragen Sie die angezeigte Frame-Größe, Spalten, Zeilen und den Abstand ein." },
  ],

  security:
    "Ihr GIF wird vollständig in Ihrem Browser in ein Sprite Sheet verwandelt. Nichts wird hochgeladen, gespeichert oder nachverfolgt.",

  // GifExportTool.tsx is shared with gif-to-webp; reuse its translations.
  ui: webp.ui,
};

export default content;
