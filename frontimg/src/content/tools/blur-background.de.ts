import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/hintergrund-unscharf-machen (variant of
 * remove-background: rembg cut-out composited over a blurred copy of the
 * original, in the browser). Target query „Hintergrund unscharf machen“
 * (880/mo, Germany, Nov 2026), secondary „Hintergrund verschwommen“.
 * Distinct from /de/bild-unscharf-machen (blurs regions you choose).
 */
const content: ToolPageContent = {
  toolId: "blur-background",
  locale: "de",
  name: "Hintergrund unscharf machen",
  tagline:
    "Machen Sie den Hintergrund jedes Fotos unscharf und lassen Sie Person oder Produkt gestochen scharf – der Porträtmodus-Look, nachträglich. Die KI findet das Motiv, Sie wählen die Stärke. Kostenlos, ohne Wasserzeichen.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Hintergrund unscharf machen – online mit KI | oMyImage",
  metaDescription:
    "Hintergrund unscharf machen mit KI: Person oder Produkt bleibt scharf, der Hintergrund wird verschwommen wie im Porträtmodus. Stärke einstellbar, kostenlos.",

  intro:
    "Ein unscharfer Hintergrund lässt den Porträtmodus eines Smartphones wie ein Foto aus einer großen Kamera wirken: Das Motiv tritt hervor, und ein unaufgeräumtes Zimmer, eine Menschenmenge oder eine belebte Straße werden zu weichen Farbflächen. Dieses Tool verleiht diesen Look einem Foto, das Sie bereits gemacht haben. Ein KI-Modell findet die Person, das Haustier oder das Produkt, lässt es genau so, wie es war, und macht alles dahinter so stark verschwommen, wie Sie möchten. Die Stärke lässt sich danach sofort ändern, sodass Sie das richtige Maß nach Augenmaß finden.",

  sections: [
    {
      heading: "So funktioniert es",
      id: "how",
      body: [
        "Zuerst umreißt ein Segmentierungsmodell auf unserem Server das Motiv und liefert es als Freisteller zurück. Dann nimmt Ihr Browser das Originalfoto, zeichnet es weich und legt den scharfen Freisteller exakt an derselben Position wieder darüber.",
        "Weil die Unschärfe auf Ihrem Gerät entsteht, wird beim Verschieben des Stärke-Reglers nichts erneut an den Server gesendet – das Motiv wird einmal gefunden, und Sie können leichte, mittlere und starke Unschärfe ausprobieren, ohne einen weiteren KI-Durchlauf zu verbrauchen.",
      ],
    },
    {
      heading: "Wie viel Unschärfe natürlich wirkt",
      id: "strength",
      body: [
        "Eine echte Kamera zeichnet den Hintergrund umso stärker weich, je weiter er vom Motiv entfernt ist. Eine leichte Unschärfe passt zu einem Porträt vor einer nahen Wand; eine starke zu einer Person vor einer weiten Landschaft oder einer Stadtstraße. Ist die Unschärfe viel stärker, als die Tiefe der Szene nahelegt, sieht das Foto aus wie ein ausgeschnittenes Motiv auf einem Gemälde.",
        "Beginnen Sie etwa in der Mitte des Reglers und vergleichen Sie mit der Vorher-Nachher-Ansicht. Bei Produktfotos für einen Shop funktioniert oft eine stärkere Unschärfe, denn hier geht es darum, Ablenkung zu entfernen, nicht darum, wie ein Objektiv zu wirken.",
      ],
    },
    {
      heading: "Hintergrund unscharf machen oder nur einen Teil des Bildes?",
      id: "vs-blur-image",
      body: [
        "Diese Seite lässt das Hauptmotiv scharf und macht alles andere automatisch verschwommen. Wenn Sie stattdessen etwas Bestimmtes verbergen müssen – ein Kennzeichen, ein Gesicht in der Menge, einen Bildschirm mit privaten Informationen –, nutzen Sie „Bild unscharf machen“ oder „Gesichter verpixeln“. Diese Tools machen nur die Bereiche unscharf, die Sie markieren.",
      ],
    },
    {
      heading: "Welche Fotos am besten funktionieren",
      id: "best",
      body: [
        "Ein klares Hauptmotiv mit etwas Platz drumherum: eine Person ab der Hüfte aufwärts, ein Haustier, ein Auto, ein Produkt auf einem Tisch. Unruhige Gruppenfotos, bei denen unklar ist, wer das Motiv ist, und feine Details wie Fahrradspeichen oder lose Haare vor einem ähnlich farbigen Hintergrund sind für das Modell schwieriger, und seine Kanten können sichtbar werden.",
      ],
    },
    {
      heading: "Unscharfe Hintergründe für Produkt- und Anzeigenfotos",
      id: "products",
      body: [
        "Marktplätze und Kleinanzeigen sind voll von Fotos, die auf dem Küchentisch oder dem Schlafzimmerboden entstanden sind. Ein unscharfer Hintergrund bewahrt die echte Umgebung – der Käufer oft mehr vertrauen als einem eingefügten weißen Hintergrund – und lenkt den Blick trotzdem auf den Artikel selbst.",
        "Fotografieren Sie das Produkt leicht von oben, mit etwas Abstand zur Wand dahinter, und wählen Sie eine stärkere Unschärfe als bei einem Porträt. Verlangt die Plattform stattdessen einen schlichten weißen Hintergrund, nutzen Sie „Hintergrundfarbe ändern“.",
      ],
    },
  ],

  howToTitle: "So machen Sie den Hintergrund eines Fotos unscharf",
  steps: [
    { title: "Foto hochladen", description: "Wählen Sie ein JPG, PNG oder WEBP mit einer deutlich erkennbaren Person, einem Tier oder einem Gegenstand." },
    { title: "Hintergrund unscharf machen", description: "Klicken Sie auf Hintergrund unscharf machen – die KI findet das Motiv in wenigen Sekunden." },
    { title: "Anpassen & herunterladen", description: "Ziehen Sie den Stärke-Regler, bis es passt, vergleichen Sie mit dem Original und laden Sie das Ergebnis herunter." },
  ],

  features: [
    { icon: "lens_blur", title: "Porträtmodus-Look", description: "Das Motiv bleibt genau, wie es war, während alles dahinter weich wird." },
    { icon: "tune", title: "Einstellbare Stärke", description: "Von sanfter Weichzeichnung bis zu starker Unschärfe, sofort geändert in Ihrem Browser." },
    { icon: "verified_user", title: "Ohne Wasserzeichen", description: "Kostenlos nutzbar, ohne dass etwas auf Ihr Foto gestempelt wird." },
  ],

  faqs: [
    { q: "Wie mache ich den Hintergrund eines Fotos unscharf?", a: "Laden Sie das Foto hoch und klicken Sie auf Hintergrund unscharf machen. Sobald die KI das Motiv gefunden hat, ziehen Sie den Stärke-Regler auf das gewünschte Maß und laden das Ergebnis herunter." },
    { q: "Bleibt die Person vollständig scharf?", a: "Ja – das Motiv wird unverändert aus Ihrem Originalfoto übernommen. Nur der Hintergrund wird unscharf." },
    { q: "Kostet eine andere Stärke einen weiteren KI-Durchlauf?", a: "Nein. Das Motiv wird einmal auf unserem Server gefunden; die Unschärfe selbst entsteht in Ihrem Browser, Sie können sie also beliebig oft anpassen." },
    { q: "Kann ich den Hintergrund eines Produktfotos unscharf machen?", a: "Ja. Ein Produkt auf einem Tisch oder Regal funktioniert gut, und eine stärkere Unschärfe ist ein schneller Weg, eine unaufgeräumte Umgebung aus einem Anzeigenfoto zu nehmen." },
    { q: "Was ist der Unterschied zu „Bild unscharf machen“?", a: "„Bild unscharf machen“ zeichnet die Bereiche weich, die Sie auswählen. Dieses Tool wählt für Sie: Es lässt das Hauptmotiv scharf und macht alles andere verschwommen." },
    { q: "In welchem Format ist das Ergebnis?", a: "Als JPG, in der Größe des Freistellers, den die KI liefert. Es ist zum Teilen, Posten oder Drucken gedacht und hat daher keine Transparenz." },
    { q: "Wird mein Foto gespeichert?", a: "Nur kurz. Das Motiv wird auf unserem Server gefunden, das Ergebnis liegt hinter einem privaten Link und wird innerhalb einer Stunde automatisch gelöscht; die Unschärfe entsteht auf Ihrem Gerät." },
    { q: "Funktioniert das auch mit Handyfotos ohne Porträtmodus?", a: "Ja, genau dafür ist es gemacht. Ein normales Foto mit klar erkennbarer Person bekommt nachträglich einen verschwommenen Hintergrund – wie aus dem Porträtmodus, nur dass Sie die Stärke danach noch frei wählen können." },
  ],

  security:
    "Die Motiverkennung läuft auf unserem Server mit der quelloffenen Engine rembg; Ergebnisse liegen nur kurz hinter einem privaten Download-Link und werden innerhalb einer Stunde automatisch gelöscht. Die Unschärfe wird in Ihrem Browser angewendet, und nichts wird weitergegeben oder wiederverwendet.",
};

export default content;
