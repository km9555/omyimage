import type { ToolPageContent } from "@/content/tools/types";
import object from "@/content/tools/remove-object.de";

/**
 * German copy for /de/wasserzeichen-entfernen. Target query „Wasserzeichen
 * entfernen“ — 12.1K/mo in Germany at KD 0 (Nov 2026), SERP held by weak AI
 * start-ups: a priority page. Secondary „Wasserzeichen entfernen online“ and
 * „… kostenlos“. Same engine as /de/objekt-entfernen (MI-GAN in the browser),
 * opening with the box tool. The copy asks people to use it on images they
 * own or may edit (Urheberrecht).
 */
const content: ToolPageContent = {
  toolId: "remove-watermark",
  locale: "de",
  name: "Wasserzeichen entfernen",
  tagline:
    "Entfernen Sie Wasserzeichen, Logos, Text und Datumsstempel aus Fotos: markieren, und die KI füllt die Stelle passend zum restlichen Bild auf. Kostenlos und ohne Upload – alles läuft in Ihrem Browser.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Wasserzeichen entfernen – online & kostenlos | oMyImage",
  metaDescription:
    "Wasserzeichen entfernen, online und kostenlos: Logos, Text und Datum aus Fotos markieren, die KI füllt die Stelle auf. Im Browser – ohne Upload, ohne Anmeldung.",

  intro:
    "Ein Wasserzeichen ist ein Text oder Logo, das über einem Bild liegt – wer es entfernen will, muss die Pixel darunter neu aufbauen. Genau das erledigt „Wasserzeichen entfernen“ mit einem KI-Modell, MI-GAN von Picsart AI Research, das direkt in Ihrem Browser läuft: Ziehen Sie ein Rechteck um das Wasserzeichen oder übermalen Sie es, klicken Sie auf Wasserzeichen entfernen, und die Stelle wird in etwa einer Sekunde aus der Umgebung aufgefüllt. Das Tool ist für Ihre eigenen Bilder gedacht – das Logo auf einem alten Produktfoto, das Datum auf einem gescannten Abzug, die Beschriftung auf einem Screenshot, den Sie selbst gemacht haben. Sie können Wasserzeichen online und kostenlos entfernen, und nichts, was Sie öffnen, wird hochgeladen.",

  sections: [
    {
      heading: "Das Wasserzeichen markieren",
      id: "marking",
      body: [
        "Das Tool öffnet mit ausgewähltem Rechteck, weil die meisten Wasserzeichen in einer rechteckigen Fläche sitzen: Ziehen Sie es von einer Ecke des Wasserzeichens zur gegenüberliegenden. Bei Text, der einer Kurve folgt oder verteilt ist, wechseln Sie zum Pinsel und übermalen jeden Buchstaben. Erfassen Sie auch Kontur, Schlagschatten und einen eventuellen Schein, sonst bleibt eine schwache Spur der Buchstaben zurück.",
        "Sie können mehrere Wasserzeichen markieren, bevor Sie sie entfernen – etwa ein Logo in der einen Ecke und eine Webadresse in der anderen –, und jedes wird einzeln aufgefüllt.",
      ],
    },
    {
      heading: "Was sich sauber entfernen lässt – und was nicht",
      id: "expectations",
      body: [
        "Die KI legt nicht frei, was unter dem Wasserzeichen war; sie malt hinein, was das umgebende Bild nahelegt. Das funktioniert sehr gut bei kleinen Markierungen auf Himmel, Wasser, Wänden, Gras, schlichten Studiohintergründen und unscharfen Hintergründen – Logos in der Ecke, Datumsstempel, Signaturen und kurze Beschriftungen verschwinden meist spurlos.",
        "Große, halbtransparente Wasserzeichen, die diagonal über das ganze Foto laufen, sind schwieriger: Das Modell muss große Detailflächen erfinden, deshalb wird das Ergebnis weicher und kann Gesichter, Schrift und feine Muster verwischen. Entfernen Sie solche Wasserzeichen in kleineren Abschnitten und prüfen Sie das Ergebnis mit „Gedrückt halten für Original“.",
      ],
    },
    {
      heading: "Nur für Bilder, die Sie bearbeiten dürfen",
      id: "responsible",
      body: [
        "Wasserzeichen auf Stockfotos und auf Vorschaubildern von Fotografen schützen die Arbeit und das Einkommen anderer. Sie zu entfernen, um das Bild ohne Bezahlung zu nutzen, verletzt in Deutschland wie in den meisten Ländern das Urheberrecht – lizenzieren Sie das Bild stattdessen. Dieses Tool ist für Ihre eigenen Fotos und für Bilder, die Sie verändern dürfen: das alte Logo Ihres Unternehmens, ein Zeitstempel, den Ihre Kamera eingefügt hat, ein Wasserzeichen, das Sie selbst auf Ihr Portfolio gesetzt haben, bevor das Original verloren ging.",
      ],
    },
    {
      heading: "Datumsstempel auf alten Fotos",
      id: "date-stamps",
      body: [
        "Analoge Kameras und frühe Digitalkameras druckten das Datum in orangefarbenen Ziffern in eine Ecke. Scannen Sie den Abzug, ziehen Sie ein Rechteck um das Datum und entfernen Sie es. Alte Abzüge haben oft auch Staub und Kratzer; markieren Sie diese mit einem kleinen Pinsel und entfernen Sie alles im selben Durchgang.",
      ],
    },
    {
      heading: "Text und Logos auf Screenshots und Produktfotos",
      id: "text",
      body: [
        "Produktfotos aus Ihren eigenen früheren Angeboten tragen oft einen alten Shopnamen oder einen Aktionsaufkleber; Screenshots zeigen Benutzernamen, Benachrichtigungen und Uhrzeiten. Markieren Sie sie mit dem Rechteck und entfernen Sie sie. Auf einfarbigen Flächen, etwa einem weißen Produkthintergrund oder einer schlichten App-Oberfläche, ist die Füllung praktisch unsichtbar.",
      ],
    },
    {
      heading: "KI, die in Ihrem Browser läuft",
      id: "on-device",
      body: [
        "Online-Tools zum Wasserzeichen-Entfernen laden Ihr Bild meist hoch und begrenzen, wie viele Bilder Sie kostenlos bearbeiten dürfen. Dieses Tool lädt stattdessen das KI-Modell in Ihren Browser – etwa 27 MB von unserer eigenen Website, einmalig; Ihr Browser speichert es – und erledigt jedes Entfernen auf Ihrem Gerät. Deshalb gibt es kein Limit und keinen Upload, und deshalb funktioniert es auch ohne Verbindung weiter, sobald das Modell geladen ist.",
      ],
    },
    {
      heading: "Qualität, Rückgängig und Formate",
      id: "quality",
      body: [
        "Nur die markierten Bereiche ändern sich; jedes andere Pixel wird exakt so gespeichert, wie es war, in voller Bildgröße bis 16,7 Megapixel. Jedes Entfernen lässt sich rückgängig machen und wiederholen, über die Schaltflächen oder mit Strg+Z und Strg+Umschalt+Z, und „Neu beginnen“ stellt das Original wieder her. Laden Sie das Bild im Originalformat oder als JPG, PNG oder WEBP herunter.",
        "Wenn Sie stattdessen Ihr eigenes Wasserzeichen in Fotos einfügen möchten, nutzen Sie „Wasserzeichen einfügen“.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Ihr Bild wird vollständig in Ihrem Browser von einem Modell bearbeitet, das auf Ihrem Gerät läuft. Nichts wird hochgeladen, und nichts bleibt gespeichert, nachdem Sie die Seite geschlossen haben.",
      ],
    },
  ],

  howToTitle: "So entfernen Sie ein Wasserzeichen aus einem Foto",
  steps: [
    { title: "Foto hinzufügen", description: "Wählen Sie ein JPG-, PNG- oder WEBP-Bild aus." },
    { title: "Wasserzeichen markieren", description: "Ziehen Sie ein Rechteck darum oder übermalen Sie jeden Buchstaben mit dem Pinsel." },
    { title: "Entfernen und herunterladen", description: "Klicken Sie auf Wasserzeichen entfernen, vergleichen Sie mit dem Original und klicken Sie auf Bild herunterladen." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Rechteck oder Pinsel", description: "Markieren Sie ein Logo mit einem Zug oder übermalen Sie verstreuten Text." },
    { icon: "smart_toy", title: "KI-Füllung in etwa einer Sekunde", description: "Die Stelle wird aus dem umgebenden Bild neu aufgebaut." },
    { icon: "lock", title: "Kein Upload, kein Limit", description: "Die KI läuft auf Ihrem Gerät." },
  ],

  faqs: [
    { q: "Wie entferne ich ein Wasserzeichen aus einem Foto?", a: "Fügen Sie das Foto hinzu, ziehen Sie ein Rechteck um das Wasserzeichen und klicken Sie auf Wasserzeichen entfernen. Laden Sie dann das bereinigte Bild herunter." },
    { q: "Kann ich Wasserzeichen kostenlos entfernen?", a: "Ja. Kein Konto, kein eigenes Wasserzeichen von uns und kein Tageslimit – die KI läuft auf Ihrem Gerät." },
    { q: "Wird mein Bild hochgeladen?", a: "Nein. Das Modell wird in Ihren Browser geladen, und Ihr Bild verlässt Ihr Gerät nie." },
    { q: "Kann ich damit ein Logo entfernen?", a: "Ja. Ziehen Sie ein Rechteck um das Logo, inklusive Schatten oder Kontur, und entfernen Sie es." },
    { q: "Kann ich einen Datumsstempel entfernen?", a: "Ja. Ziehen Sie ein Rechteck um das Datum und entfernen Sie es – das klappt besonders gut bei gescannten Abzügen." },
    { q: "Kann ich Text aus einem Bild entfernen?", a: "Ja. Übermalen Sie den Text mit dem Pinsel oder markieren Sie ihn mit dem Rechteck, wenn er in einer Zeile steht." },
    { q: "Warum ist ein großes Wasserzeichen noch sichtbar?", a: "Große, durchscheinende Wasserzeichen über detailreichen Bereichen sind schwer zu rekonstruieren. Entfernen Sie sie in kleineren Abschnitten und markieren Sie auch die Kontur." },
    { q: "Stellt es die Original-Pixel wieder her?", a: "Nein. Es malt hinein, was die Umgebung nahelegt – auf schlichten Hintergründen ist das meist nicht vom Original zu unterscheiden." },
    { q: "Ist es legal, ein Wasserzeichen zu entfernen?", a: "Bei Ihren eigenen Bildern oder solchen, die Sie bearbeiten dürfen, ja. Wer ein Wasserzeichen entfernt, um das Foto eines anderen ohne Lizenz zu nutzen, verletzt in der Regel das Urheberrecht." },
    { q: "Kann ich ein Entfernen rückgängig machen?", a: "Ja – mit Rückgängig, Wiederholen und Neu beginnen oder mit Strg+Z und Strg+Umschalt+Z." },
    { q: "Verschlechtert sich die Bildqualität?", a: "Nein. Nur die markierten Bereiche ändern sich, und das Bild behält seine Größe bis 16,7 Megapixel." },
    { q: "Funktioniert es auf dem Smartphone?", a: "Ja. Ziehen Sie das Rechteck oder malen Sie mit dem Finger; jedes Entfernen dauert einige Sekunden." },
    { q: "Kann es Wasserzeichen aus Videos entfernen?", a: "Nein – es arbeitet mit Fotos: JPG, PNG und WEBP." },
    { q: "Muss ich ein Programm installieren?", a: "Nein. Sie entfernen das Wasserzeichen online im Browser, auf Windows, macOS, Android oder iPhone. Nur das KI-Modell wird beim ersten Besuch einmalig geladen." },
  ],

  security:
    "Ihr Bild wird vollständig in Ihrem Browser von einem Modell bearbeitet, das auf Ihrem Gerät läuft. Nichts wird hochgeladen, gespeichert oder getrackt.",

  // InpaintTool.tsx is shared with remove-object; each route only has its own
  // tool's ui in scope, so this page reuses the remove-object translations.
  ui: object.ui,
};

export default content;
