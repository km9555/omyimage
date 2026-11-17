import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/discord-banner-groesse (variant of resize-image).
 * Target query: „Discord Banner Größe“; secondary „Discord Banner“ (1.9K/mo, DE).
 */
const content: ToolPageContent = {
  toolId: "discord-banner-resizer",
  locale: "de",
  name: "Discord Banner Größe anpassen",
  tagline:
    "Bringen Sie jedes Bild auf eine Discord-Größe – ein Profilbanner mit 600 × 240, ein Serverbanner mit 960 × 540 oder ein Server-Icon mit 512 × 512 Pixeln –, zugeschnitten oder mit Rand aufgefüllt. Kostenlos, im Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Discord Banner Größe: Profil- & Serverbanner | oMyImage",
  metaDescription:
    "Die richtige Discord Banner Größe: Profilbanner 600 × 240, Serverbanner 960 × 540, Server-Icon 512 × 512. Discord Banner zuschneiden oder auffüllen.",

  intro:
    "Discord verwendet für jeden Bildplatz eine andere Form: einen breiten 5:2-Streifen für Ihr Profilbanner, ein 16:9-Banner über der Kanalliste eines Servers und Quadrate, die als Kreis erscheinen, für Icons und Avatare. Dieses Tool startet mit der Größe des Profilbanners und führt die übrigen Discord-Größen im selben Menü auf. Fügen Sie Ihr Bild hinzu, wählen Sie den Bildplatz, schneiden Sie es zu oder füllen Sie es mit Rand auf – und laden Sie ein Discord Banner hoch, das Discord nicht mehr für Sie zuschneiden muss.",

  sections: [
    {
      heading: "Alle Discord-Bildgrößen im Überblick",
      id: "sizes",
      body: [
        "Profilbanner: 600 × 240 Pixel im Format 5:2, angezeigt oben auf Ihrer Profilkarte. Discord nennt diesen Wert als Mindestgröße, und Banner sind eine Nitro-Funktion. Serverbanner: 960 × 540 Pixel im Format 16:9, angezeigt über der Kanalliste; Server schalten es ab Boost-Level 2 frei. Server-Icon: ein Quadrat, das als Kreis erscheint – 512 × 512 ist eine gute Größe. Avatar: ein Quadrat, das als Kreis erscheint, mindestens 128 × 128.",
        "Alle akzeptieren PNG, JPG und GIF unter 10 MB. Wählen Sie den Bildplatz unter Vorlagentyp, dann passen sich Breite und Höhe automatisch an.",
      ],
    },
    {
      heading: "Schärfere Banner in doppelter Größe",
      id: "double",
      body: [
        "Die Discord-Größen sind Mindestwerte, und hochauflösende Bildschirme zeigen ein Banner mit 600 × 240 etwas weich. Für ein schärferes Ergebnis wählen Sie Eigene Größe und tragen die doppelten Werte ein – 1200 × 480 für ein Profilbanner, 1920 × 1080 für ein Serverbanner. Discord verkleinert sie passend und behält dabei die Form.",
        "Tun Sie das nur, wenn das Originalbild mindestens so groß ist. Ein kleines Bild auf 1200 Pixel Breite zu vergrößern, fügt keine Details hinzu, sondern erzeugt nur eine größere unscharfe Datei.",
      ],
    },
    {
      heading: "Was Ihr Avatar verdeckt",
      id: "overlap",
      body: [
        "Auf der Profilkarte liegt Ihr runder Avatar über dem unteren linken Teil des Banners, und das Banner wird recht klein angezeigt. Text oder ein Gesicht in dieser Ecke verschwindet, feine Details gehen verloren. Halten Sie das Motiv in der Mitte oder in der rechten Hälfte und setzen Sie auf kräftige, einfache Formen.",
        "Icons und Avatare werden kreisförmig ausgeschnitten, ihre Ecken sind also nie sichtbar. Halten Sie Logo oder Gesicht deutlich innerhalb des Quadrats, oder wählen Sie Mit Rand auffüllen, damit das ganze Bild mittig auf einer Hintergrundfarbe sitzt.",
      ],
    },
    {
      heading: "Animierte Banner",
      id: "animated",
      body: [
        "Discord zeigt animierte GIF-Banner und -Avatare für Nitro-Mitglieder und auf geboosteten Servern. Dieses Tool arbeitet mit Standbildern: Ein GIF wird anhand seines ersten Frames verkleinert, und das Ergebnis ist ein unbewegtes PNG, JPG oder WEBP. Um eine Animation zu behalten, ändern Sie ihre Größe stattdessen mit einem eigenen GIF-Tool.",
      ],
    },
    {
      heading: "Bilder bei Discord hochladen",
      id: "upload",
      body: [
        "Für ein Profilbanner öffnen Sie die Benutzereinstellungen, dann Profile, und wählen Banner ändern. Für ein Serverbanner oder Server-Icon öffnen Sie die Servereinstellungen, dann Übersicht, und laden es dort hoch. Weil das Bild bereits die richtige Form hat, behält der Zuschneide-Schritt von Discord das ganze Bild.",
      ],
    },
  ],

  howToTitle: "So passen Sie ein Bild an die Discord Banner Größe an",
  steps: [
    { title: "Bild hinzufügen", description: "Wählen Sie ein JPG, PNG, WEBP, GIF oder BMP." },
    { title: "Discord-Bildplatz wählen", description: "Das Profilbanner ist vorausgewählt; wechseln Sie zu Serverbanner, Server-Icon oder Profilbild und schneiden Sie dann zu oder füllen auf." },
    { title: "Herunterladen", description: "Ändern Sie die Größe und laden Sie ein Bild herunter, das genau in den Bildplatz passt." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Alle Discord-Größen", description: "Profilbanner, Serverbanner, Server-Icon und Avatar in einem Menü." },
    { icon: "crop", title: "Zuschneiden oder auffüllen", description: "Füllen Sie den Rahmen ganz aus oder behalten Sie das ganze Bild auf einer Hintergrundfarbe." },
    { icon: "lock", title: "Im Browser", description: "Ihr Bild wird auf Ihrem Gerät bearbeitet und nie hochgeladen." },
  ],

  faqs: [
    { q: "Welche Größe hat ein Discord-Profilbanner?", a: "600 × 240 Pixel im Format 5:2 – das ist die Mindestgröße von Discord. Für ein schärferes Banner nehmen Sie 1200 × 480. Profilbanner setzen Nitro voraus." },
    { q: "Welche Größe hat ein Discord-Serverbanner?", a: "960 × 540 Pixel im Format 16:9. Ein Bild mit 1920 × 1080 wird akzeptiert und verkleinert. Serverbanner erfordern Boost-Level 2." },
    { q: "Wie groß sollte ein Discord-Server-Icon sein?", a: "Ein Quadrat, das als Kreis erscheint; 512 × 512 Pixel funktionieren gut. Halten Sie das Logo von den Ecken fern." },
    { q: "Wie groß darf die Datei für ein Discord Banner sein?", a: "Unter 10 MB, als PNG, JPG oder GIF." },
    { q: "Kann ich hier ein animiertes Banner erstellen?", a: "Nein. GIFs werden anhand ihres ersten Frames verkleinert und als Standbild gespeichert. Für Animationen nutzen Sie ein GIF-Tool." },
    { q: "Warum ist ein Teil meines Banners verdeckt?", a: "Ihr Avatar überdeckt den unteren linken Bereich des Profilbanners. Halten Sie Schrift und Gesichter in der Mitte oder in der rechten Hälfte." },
    { q: "Warum ist mein Server-Icon an den Ecken abgeschnitten?", a: "Discord zeigt Icons als Kreis. Halten Sie das Logo in der Mitte des Quadrats oder wählen Sie Mit Rand auffüllen, damit es mit Abstand auf einer Hintergrundfarbe sitzt." },
    { q: "Kann ich mehrere Bilder auf einmal anpassen?", a: "Ja. Fügen Sie alle hinzu; jedes wird auf die gewählte Discord-Größe gebracht, und alle werden zusammen als ZIP-Datei heruntergeladen." },
    { q: "Wird mein Bild irgendwo hochgeladen?", a: "Nein. Es wird in Ihrem Browser bearbeitet; nur Sie selbst laden es bei Discord hoch." },
  ],

  security:
    "Ihr Bild wird vollständig in Ihrem Browser bearbeitet. Sehr große Bilder werden unter Umständen auf unserem Server verarbeitet und sofort gelöscht; nichts wird gespeichert.",
};

export default content;
