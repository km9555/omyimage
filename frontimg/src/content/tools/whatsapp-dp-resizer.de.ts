import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/whatsapp-profilbild (variant of resize-image).
 * Target query: „WhatsApp Profilbild“ (9.9K/mo, DE, KD 0) – priority page.
 */
const content: ToolPageContent = {
  toolId: "whatsapp-dp-resizer",
  locale: "de",
  name: "WhatsApp Profilbild ohne Zuschneiden",
  tagline:
    "Setzen Sie ein ganzes Foto als WhatsApp Profilbild, ohne es zu beschneiden – eingepasst in ein Quadrat mit Hintergrundfarbe – oder füllen Sie das Quadrat per Zuschnitt. 500 × 500 px, kostenlos, im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "WhatsApp Profilbild ohne Zuschneiden – kostenlos | oMyImage",
  metaDescription:
    "WhatsApp Profilbild ganz zeigen: Foto ohne Zuschneiden in ein Quadrat einpassen, Hintergrundfarbe frei wählen, 500 × 500 px. Auch für Gruppenbild und Business.",

  intro:
    "WhatsApp akzeptiert nur quadratische Profilbilder. Wählen Sie ein breites Gruppenfoto oder eine Ganzkörperaufnahme im Hochformat, müssen Sie den größten Teil davon wegschneiden. Dieses Tool löst das Problem andersherum: Es passt das komplette Foto in ein Quadrat ein und füllt den freien Platz mit einer Farbe, sodass WhatsApp nichts mehr abschneiden muss. Fügen Sie ein Foto hinzu, wählen Sie die Randfarbe und laden Sie ein Bild mit 500 × 500 Pixeln herunter, das vollständig als WhatsApp Profilbild passt.",

  sections: [
    {
      heading: "Das ganze Foto als Profilbild, ohne Zuschneiden",
      id: "no-crop",
      body: [
        "Das Tool startet mit der Option Mit Rand auffüllen. Ihr Foto wird so weit verkleinert, bis es vollständig ins Quadrat passt, und die Streifen darüber und darunter – oder links und rechts – werden mit der Randfarbe gefüllt, standardmäßig Weiß. Wenn WhatsApp danach den Zuschneide-Rahmen anzeigt, umfasst er bereits das ganze Bild. Sie tippen einfach auf Fertig, und niemand am Bildrand geht verloren.",
        "Wählen Sie eine Randfarbe, die zum Foto passt: Weiß und Schwarz sind neutral, eine Farbe aus dem Foto selbst wirkt oft natürlicher als beide. Wechseln Sie zu Zuschneiden und füllen, wenn Sie lieber eine Nahaufnahme möchten, die den ganzen Kreis ausfüllt.",
      ],
    },
    {
      heading: "Der Kreis verdeckt die Ecken",
      id: "circle",
      body: [
        "WhatsApp zeigt Profilbilder als Kreis an – in der Chatliste ebenso wie in Ihrem Profil. Die Ecken des Quadrats sind also nie zu sehen. Gesichter oder Schrift nahe den Ecken werden abgeschnitten; halten Sie das Wichtige in der Mitte.",
        "Bei einem aufgefüllten Foto schneidet der Kreis fast nur den Rand weg – genau deshalb funktioniert das Auffüllen so gut. Ein sehr breites Gruppenfoto erscheint im Kreis allerdings klein. Werden die Gesichter zu winzig, schneiden Sie das Foto vorher etwas zu, damit die Personen mehr vom Bild einnehmen.",
      ],
    },
    {
      heading: "Welche Größe das WhatsApp Profilbild haben sollte",
      id: "size",
      body: [
        "WhatsApp nennt keine offizielle Größe für Profilbilder und komprimiert jedes hochgeladene Bild neu. 500 × 500 Pixel ist eine weit verbreitete Größe, die auf dem Smartphone scharf aussieht, ohne unnötig groß zu sein; 192 × 192 Pixel gelten meist als Untergrenze, die noch akzeptabel wirkt. Für ein größeres Quadrat ändern Sie Breite und Höhe unter der Vorlage, zum Beispiel auf 1080 × 1080. Beide Werte müssen gleich bleiben, damit das Bild quadratisch ist.",
        "Dieselbe Größe gilt für Profilbilder in WhatsApp Business. Ein Logo sieht dort meist am besten aus, wenn es mit weißem Rand aufgefüllt wird – so schneidet der Kreis nicht in den Schriftzug.",
      ],
    },
    {
      heading: "So stellen Sie das Bild als Profilbild ein",
      id: "set",
      body: [
        "Speichern Sie das heruntergeladene Bild auf Ihrem Smartphone, öffnen Sie WhatsApp, gehen Sie zu Einstellungen und tippen Sie auf Ihr Profilbild. Wählen Sie dann Bearbeiten oder das Kamerasymbol und suchen Sie das Bild in Ihrer Galerie aus. Weil es bereits quadratisch ist, ändert der Zuschneide-Schritt nichts mehr. Am Computer laden Sie es dort herunter und wählen es genauso in WhatsApp Web oder der Desktop-App aus.",
      ],
    },
    {
      heading: "Gruppenbild und Status",
      id: "groups",
      body: [
        "Gruppenbilder sind ebenfalls Quadrate, die als Kreis erscheinen. Mit demselben Trick bleibt ein komplettes Teamfoto oder ein Vereinslogo als Gruppenbild vollständig sichtbar. Für einen Status, also ein hohes Bild im Vollbild, verwenden Sie stattdessen die Vorlage WhatsApp Status (1080 × 1920) aus der Vorlagenliste.",
      ],
    },
  ],

  howToTitle: "So setzen Sie ein ganzes Foto als WhatsApp Profilbild",
  steps: [
    { title: "Foto hinzufügen", description: "Wählen Sie ein JPG, PNG, WEBP, GIF oder BMP – in beliebigem Format, ob hoch oder quer." },
    { title: "Randfarbe wählen", description: "Mit Rand auffüllen ist schon aktiv; wählen Sie Weiß, Schwarz oder eine beliebige Farbe für den freien Platz." },
    { title: "Herunterladen und einstellen", description: "Laden Sie das quadratische Bild herunter und stellen Sie es als Profilbild ein – ohne Zuschneiden." },
  ],

  features: [
    { icon: "crop_square", title: "Kein Zuschneiden", description: "Das ganze Foto passt ins Quadrat, WhatsApp muss nichts abschneiden." },
    { icon: "palette", title: "Beliebige Randfarbe", description: "Füllen Sie den freien Platz mit Weiß, Schwarz oder einer Farbe, die zum Foto passt." },
    { icon: "lock", title: "Privat", description: "Ihr Foto wird auf Ihrem Gerät bearbeitet und nie hochgeladen." },
  ],

  faqs: [
    { q: "Wie setze ich ein ganzes Foto als WhatsApp Profilbild, ohne es zuzuschneiden?", a: "Fügen Sie es hier mit der Option Mit Rand auffüllen hinzu. Das ganze Foto wird mit einer Hintergrundfarbe in ein Quadrat eingepasst, sodass der Zuschneide-Schritt von WhatsApp alles behält." },
    { q: "Welche Größe ist für ein WhatsApp Profilbild richtig?", a: "WhatsApp nennt keine offizielle Größe. 500 × 500 Pixel ist eine übliche Wahl, die scharf aussieht; 192 × 192 Pixel gelten meist als Minimum." },
    { q: "Warum schneidet WhatsApp mein Foto ab?", a: "WhatsApp akzeptiert nur quadratische Bilder und zeigt sie als Kreis. Ein breites oder hohes Foto muss beschnitten werden – es sei denn, Sie füllen es vorher zu einem Quadrat auf." },
    { q: "Kann ich die Hintergrundfarbe wählen?", a: "Ja. Weiß ist voreingestellt; unter der Randfarbe wählen Sie Schwarz oder jede andere Farbe." },
    { q: "Funktioniert das auch für WhatsApp Business?", a: "Ja. Auch Profilbilder in WhatsApp Business sind Quadrate, die als Kreis erscheinen; Logos wirken mit weißem Rand ringsum am besten." },
    { q: "Kann ich damit ein Gruppenbild erstellen?", a: "Ja. Gruppenbilder sind ebenfalls runde Quadrate, und durch das Auffüllen bleibt ein ganzes Gruppenfoto oder Logo sichtbar." },
    { q: "Verschlechtert WhatsApp die Qualität?", a: "WhatsApp komprimiert Profilbilder selbst. Ein scharfes Quadrat mit 500 × 500 Pixeln oder mehr liefert danach das beste Ergebnis." },
    { q: "Warum ist mein WhatsApp Profilbild unscharf?", a: "Meist war das Ausgangsbild zu klein oder wurde stark beschnitten und dann vergrößert. Starten Sie mit einem Foto, das mindestens 500 Pixel an der kurzen Seite hat, und füllen Sie es lieber auf, statt einen kleinen Ausschnitt zu nehmen." },
    { q: "Wird mein Foto hochgeladen?", a: "Nein. Es wird in Ihrem Browser bearbeitet; nur Sie selbst stellen es in WhatsApp ein." },
  ],

  security:
    "Ihr Foto wird vollständig in Ihrem Browser bearbeitet. Sehr große Bilder werden unter Umständen auf unserem Server verarbeitet und sofort gelöscht; nichts wird gespeichert.",
};

export default content;
