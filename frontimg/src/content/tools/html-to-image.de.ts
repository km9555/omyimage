import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/html-in-bild.
 *
 * Primary query "HTML in Bild" (low volume, no strong German competitor page);
 * also covers "Webseite als Bild speichern" and "Screenshot einer Webseite"
 * naturally in the copy. Rendering runs on the server (headless Chromium) —
 * keep that fact exactly as in the English page.
 */
const content: ToolPageContent = {
  toolId: "html-to-image",
  locale: "de",
  name: "HTML in Bild",
  tagline:
    "Wandeln Sie eine Webseiten-URL oder HTML-Code online in ein Bild um — mit wählbarem Viewport, Format und ganzseitiger Aufnahme. Angetrieben von Open-Source-Headless-Chromium.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "HTML in Bild umwandeln – URL als PNG/JPG | oMyImage",
  metaDescription:
    "HTML in Bild umwandeln: Webseite per URL oder eigenen HTML-Code als PNG oder JPG rendern, Viewport und ganze Seite wählen. Kostenlos, ohne Anmeldung.",

  intro:
    "Machen Sie aus einer Webseite oder einem HTML-Schnipsel ein gestochen scharfes Bild. Das Tool „HTML in Bild“ von oMyImage rendert eine URL oder Ihr eigenes Markup mit Headless Chromium und liefert ein PNG oder JPG in genau der Größe, die Sie wählen — praktisch für Vorschaubilder, Previews und Social Cards. So speichern Sie eine Webseite als Bild, ohne selbst einen Screenshot zu basteln. Das Rendern läuft auf unserem Server mit dem Open-Source-Tool Puppeteer.",

  sections: [
    {
      heading: "Wie aus Markup ein Bild wird",
      id: "what",
      body: [
        "Ein Headless-Browser lädt Ihr HTML oder Ihre URL, baut das Layout genau so auf wie ein normaler Browser — mit CSS, Skripten und Webfonts — und hält das gerenderte Ergebnis als Bild fest. Es ist ein Screenshot, aufgenommen von einem Browser ohne Fenster.",
        "Dieser Unterschied ist wichtig. Das Ergebnis ist keine Annäherung daran, wie die Seite aussehen könnte, sondern dieselbe Rendering-Engine erzeugt dasselbe Layout. Deshalb kommen komplexes CSS, Flexbox, Grid und Webfonts korrekt heraus, wo einfachere HTML-zu-Bild-Konverter sie verzerren.",
        "Die Ausgabe ist ein ganz normales PNG oder JPG und kann überall hin, wo ein Bild hin kann — in eine Social Card, ein Dokument, eine Präsentation oder eine E-Mail.",
      ],
    },
    {
      heading: "Vorschaubilder für soziale Netzwerke",
      id: "og-images",
      body: [
        "Der häufigste Einsatz in der Praxis ist das Erzeugen von Open-Graph-Bildern — dem Bild, das erscheint, wenn ein Link in sozialen Netzwerken oder in einem Messenger geteilt wird. Diese für jeden Artikel von Hand zu gestalten skaliert nicht; sie als HTML-Vorlage anzulegen und als Bild zu rendern dagegen schon.",
        "1200 × 630 Pixel sind die Standardgröße und werden von praktisch jeder Plattform sinnvoll dargestellt. Bauen Sie die Karte als HTML-Vorlage mit Titel, Autor und Grafiken, die per CSS positioniert sind, und rendern Sie dann ein Bild pro Artikel.",
        "Zwei praktische Hinweise: Halten Sie wichtige Inhalte deutlich vom Rand fern, weil manche Plattformen auf ihr eigenes Seitenverhältnis zuschneiden, und verwenden Sie große Schrift. Diese Karten sind im Feed oft nur ein paar hundert Pixel breit, alles unter etwa 32 Pixeln in der Vorlage wird unlesbar.",
      ],
    },
    {
      heading: "Warum die Aufnahme von Ihrem Bildschirm abweichen kann",
      id: "differences",
      body: [
        "Der Renderer ist ein sauberer Browser. Er hat keine Erweiterungen, keinen Werbeblocker, keine angemeldete Sitzung und keinen Zugriff auf Schriften, die lokal auf Ihrem Rechner installiert sind. Eine Seite, die bei Ihnen auf eine bestimmte Weise aussieht, kann hier zu Recht anders gerendert werden — und meist ist der Unterschied aufschlussreich: Sie sehen, was ein anonymer Erstbesucher sieht.",
        "Lazy Loading ist der häufigste Grund für fehlende Inhalte. Bilder und Abschnitte, die erst beim Scrollen nachgeladen werden, sind vor der Aufnahme womöglich noch nicht ausgelöst worden, und Daten aus einem langsamen API-Aufruf können den Moment ganz verpassen.",
        "Animationen und Übergänge werden an der Stelle eingefroren, an der sie gerade waren. Blendet ein Element ein, kann die Aufnahme es mitten im Einblenden erwischen — ein guter Grund, Animationen im gerenderten CSS abzuschalten oder die Vorlage von vornherein als statisches Layout zu gestalten.",
      ],
    },
    {
      heading: "Dieses Tool läuft auf unserem Server",
      id: "server",
      body: [
        "Fast alles auf dieser Website läuft direkt in Ihrem Browser-Tab. Das Rendern einer Webseite geht so nicht, weil es eine vollständige Browser-Engine braucht — genau das, was Ihr Browser selbst ist, aber nichts, was eine Webseite innerhalb eines Tabs für beliebige fremde Inhalte steuern kann.",
        "Deshalb wird die URL oder das HTML, das Sie angeben, über eine verschlüsselte Verbindung an unseren Server geschickt, dort in einem Headless-Browser gerendert, und Sie erhalten das Bild zurück. Danach wird nichts aufbewahrt.",
        "Wichtig bei privaten Inhalten: Da die URL von unserem Server abgerufen wird und nicht von Ihnen, ist alles hinter einem Login oder in einem privaten Netzwerk nicht erreichbar. Das ist eine Einschränkung — und zugleich der Grund, warum dieses Tool nicht versehentlich etwas aufnehmen kann, was es nicht sollte.",
      ],
    },
  ],

  howToTitle: "So wandeln Sie HTML in ein Bild um",
  steps: [
    { title: "URL oder HTML eingeben", description: "Fügen Sie eine Webseiten-URL ein, oder wechseln Sie in den HTML-Modus und fügen Sie Ihr eigenes Markup ein." },
    { title: "Größe & Format festlegen", description: "Wählen Sie Breite und Höhe des Viewports, das Ausgabeformat und ob die ganze Seite aufgenommen werden soll." },
    { title: "Rendern & herunterladen", description: "Klicken Sie auf „Als Bild rendern“ und laden Sie den Screenshot als PNG oder JPG herunter." },
  ],

  features: [
    { icon: "link", title: "URL oder reines HTML", description: "Erstellen Sie einen Screenshot jeder öffentlichen Webseite oder rendern Sie Ihr eigenes HTML und CSS als Bild." },
    { icon: "aspect_ratio", title: "Eigener Viewport", description: "Legen Sie Breite und Höhe exakt fest und nehmen Sie bei Bedarf die gesamte scrollbare Seite auf." },
    { icon: "verified_user", title: "Open-Source-Engine", description: "Gerendert mit Headless Chromium über Puppeteer — kostenlos, Open Source und für kommerzielle Nutzung geeignet." },
  ],

  faqs: [
    { q: "Kann ich von jeder Website einen Screenshot machen?", a: "Von jeder öffentlich erreichbaren URL. Seiten, die Bots blockieren oder eine Anmeldung verlangen, werden eventuell nicht vollständig gerendert." },
    { q: "Kann ich mein eigenes HTML rendern?", a: "Ja. Wechseln Sie in den HTML-Modus und fügen Sie Markup mit Inline-CSS ein, um es exakt zu rendern." },
    { q: "In welche Formate kann ich exportieren?", a: "PNG (verlustfrei) oder JPG. Sie können außerdem die gesamte Höhe der scrollbaren Seite aufnehmen." },
    { q: "Welche Engine wird verwendet?", a: "Headless Chromium über die Open-Source-Bibliothek Puppeteer, ausgeführt auf unserem Server." },
    { q: "Ist das kostenlos?", a: "Ja — kostenlos, ohne Wasserzeichen und ohne Anmeldung." },
    { q: "Wofür braucht man HTML in Bild eigentlich?", a: "Für Vorschaubilder in sozialen Netzwerken, zum Festhalten einer Seite für Dokumentation oder Archiv, für einheitliche Screenshots in einem Changelog, als Bildvorschau einer E-Mail-Vorlage und um selbst geschriebenes HTML als Bild zu teilen, wo HTML nicht dargestellt wird." },
    { q: "Warum stimmt das Ergebnis nicht genau mit meinem Browser überein?", a: "Weil in einem sauberen Headless-Browser ohne Erweiterungen, ohne angemeldete Sitzung und ohne lokale Schriften über den Standardsatz hinaus gerendert wird. Inhalte hinter einem Login zeigen die abgemeldete Ansicht, und eine Seite, die eine nur auf Ihrem Rechner installierte Schrift nutzt, fällt auf eine andere zurück." },
    { q: "Kann das Tool eine Seite aufnehmen, die eine Anmeldung erfordert?", a: "Nein. Der Renderer hat keinen Zugriff auf Ihre Cookies oder Ihre Sitzung und sieht daher, was ein anonymer Besucher sieht. Für Seiten mit Anmeldung ist ein Screenshot im eigenen Browser der praktische Weg." },
    { q: "Warum fehlen Inhalte in der Aufnahme?", a: "Meist wegen Lazy Loading. Bilder und Abschnitte, die erst beim Scrollen geladen werden, sind vor der Aufnahme womöglich noch nicht erschienen. Inhalte aus einem langsamen API-Aufruf können aus demselben Grund fehlen, und Animationen werden in dem Frame eingefroren, den sie gerade erreicht hatten." },
    { q: "In welcher Größe sollte ich rendern?", a: "1200 × 630 ist der Standard für Vorschaubilder in sozialen Netzwerken und funktioniert auf den meisten Plattformen. 1280 oder 1440 Pixel Breite passen für Screenshots in Dokumentationen. Für Archivzwecke ist die ganzseitige Aufnahme richtig, sehr lange Seiten ergeben allerdings sehr hohe Bilder." },
    { q: "Läuft das wie die anderen Tools in meinem Browser?", a: "Nein — dieses Tool braucht eine echte Browser-Engine zum Rendern der Seite, und die lässt sich nicht auf Ihr Gerät ausliefern. Das HTML oder die URL wird an unseren Server geschickt, gerendert, und Sie erhalten das fertige Bild zurück. Danach wird nichts gespeichert." },
    { q: "Was passiert mit meinen Daten (DSGVO)?", a: "Die Übertragung ist verschlüsselt, das erzeugte Bild liegt nur kurz hinter einem privaten Download-Link und wird innerhalb einer Stunde automatisch gelöscht. Wir geben Ihre Inhalte nicht weiter und verwenden sie nicht anderweitig." },
  ],

  security:
    "Das Rendern läuft auf unserem Server mit Open-Source-Headless-Chromium. Das Ergebnis liegt nur kurz hinter einem privaten Download-Link und wird innerhalb einer Stunde automatisch gelöscht. Wir geben Ihre Inhalte niemals weiter und verwenden sie nicht erneut.",

  ui: {
    // HtmlToImageTool.tsx — pages
    "Add page": "Seite hinzufügen",
    "Page {n}": "Seite {n}",
    "Page name": "Seitenname",
    "Used as the downloaded file name for this page's image.":
      "Wird als Dateiname für das heruntergeladene Bild dieser Seite verwendet.",
    "1 page": "1 Seite",
    "{n} pages": "{n} Seiten",
    "Added 1 page.": "1 Seite hinzugefügt.",
    "Added {n} pages.": "{n} Seiten hinzugefügt.",
    "Import .html": ".html importieren",
    "Please choose .html files.": "Bitte wählen Sie .html-Dateien aus.",
    "HTML code": "HTML-Code",
    "<!doctype html> …": "<!doctype html> …", // i18n-same
    "{n} characters · a full document or a fragment both work.":
      "{n} Zeichen · ein vollständiges Dokument und ein Fragment funktionieren beide.",
    "Add some HTML to at least one page.": "Fügen Sie mindestens einer Seite etwas HTML hinzu.",
    "Remove {name}": "{name} entfernen",
    "Clear": "Leeren",
    "Web page URL": "Webseiten-URL",
    "Any public http(s) address. Private and local addresses are rejected by the server.":
      "Jede öffentliche http(s)-Adresse. Private und lokale Adressen lehnt der Server ab.",
    // rendering
    "Render to image": "Als Bild rendern",
    "Render {n} pages": "{n} Seiten rendern",
    "Rendering…": "Wird gerendert…",
    "Rendering {done} of {total}…": "Rendere {done} von {total}…",
    "Rendered 1 image.": "1 Bild gerendert.",
    "Rendered {n} images.": "{n} Bilder gerendert.",
    "Rendering failed.": "Rendern fehlgeschlagen.",
    "Rendering uses headless Chromium on our servers.":
      "Das Rendern nutzt Headless Chromium auf unseren Servern.",
    "Your rendered image will appear here.": "Ihr gerendertes Bild erscheint hier.",
    "1 image": "1 Bild",
    "{n} images": "{n} Bilder",
    "Download {name}": "{name} herunterladen",
    "Download all (ZIP)": "Alle herunterladen (ZIP)",
    "Back": "Zurück",
    // settings
    "Capture Settings": "Aufnahme-Einstellungen",
    "Open all settings": "Alle Einstellungen öffnen",
    "Screen size, format, full-page capture and more are in the settings.":
      "Bildschirmgröße, Format, ganzseitige Aufnahme und mehr finden Sie in den Einstellungen.",
    "Capturing at": "Aufnahme mit",
    "Viewport": "Viewport", // i18n-same
    "Screen size": "Bildschirmgröße",
    "The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths.":
      "Das Browserfenster, in dem die Seite aufgebaut wird. Responsive Websites zeigen bei diesen Breiten ihr Tablet- oder Mobil-Layout.",
    "Width (px)": "Breite (px)",
    "Height (px)": "Höhe (px)",
    "Width and height must be at least 100px.": "Breite und Höhe müssen mindestens 100 px betragen.",
    "Orientation": "Ausrichtung",
    "Portrait": "Hochformat",
    "Landscape": "Querformat",
    "Swaps the width and height of the chosen screen size.":
      "Tauscht Breite und Höhe der gewählten Bildschirmgröße.",
    "Resolution": "Auflösung",
    "2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file.":
      "2× rendert doppelt so viele Pixel für ein Retina-scharfes Ergebnis — gleiches Layout, größere Datei.",
    "Output": "Ausgabe",
    "Format": "Format", // i18n-same
    "Quality": "Qualität",
    "Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots.":
      "Höher erhält mehr Details und ergibt eine größere Datei. 80–90 ist für Screenshots ideal.",
    "Smaller file": "Kleinere Datei",
    "Higher quality": "Höhere Qualität",
    "Lower quality": "Niedrigere Qualität",
    "Capture full page": "Ganze Seite aufnehmen",
    "Scrolls to the bottom and stitches the whole document instead of just the visible window.":
      "Scrollt bis ganz nach unten und setzt das gesamte Dokument zusammen statt nur des sichtbaren Fensters.",
    "Transparent background": "Transparenter Hintergrund",
    "Skips the page background so the image keeps an alpha channel.":
      "Lässt den Seitenhintergrund weg, damit das Bild einen Alphakanal behält.",
    "JPG has no alpha channel — switch to PNG or WEBP for transparency.":
      "JPG hat keinen Alphakanal — wechseln Sie für Transparenz zu PNG oder WEBP.",
    "Advanced": "Erweitert",
    "Capture one element (optional)": "Nur ein Element aufnehmen (optional)",
    "A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page.":
      "Ein CSS-Selektor, z. B. #pricing oder .hero. Nur dieses Element wird aufgenommen; das hat Vorrang vor der ganzen Seite.",
    "Padding (px)": "Innenabstand (px)",
    "Breathing room added around the page content before the shot is taken.":
      "Freiraum, der vor der Aufnahme um den Seiteninhalt gelegt wird.",
    "Wait before capture (ms)": "Wartezeit vor der Aufnahme (ms)",
    "Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000.":
      "Zusätzliche Wartezeit nach dem Laden der Seite — nützlich für Animationen, Schriften oder nachgeladene Bilder. Max. 10000.",
    "Emulate dark mode": "Dunkelmodus simulieren",
    "Reports prefers-color-scheme: dark, so sites with a dark theme render it.":
      "Meldet prefers-color-scheme: dark, sodass Websites mit dunklem Design dieses rendern.",
    "Hide cookie banners": "Cookie-Banner ausblenden",
    "Hides the common consent overlays that would otherwise cover the shot.":
      "Blendet die üblichen Einwilligungs-Overlays aus, die sonst die Aufnahme verdecken würden.",
    "Only applies when capturing a URL.": "Gilt nur bei der Aufnahme einer URL.",
    "Custom CSS (optional)": "Eigenes CSS (optional)",
    "Injected last, so it overrides the page's own styles. Applies to every page in the batch.":
      "Wird zuletzt eingefügt und überschreibt daher die Styles der Seite. Gilt für jede Seite im Stapel.",
  },
};

export default content;
