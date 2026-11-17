import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-schaerfen (variant of upscale-image, Real-ESRGAN at
 * 2×, returned at the photo's own size by default — preset mode "unblur").
 * Target query „Bild schärfen“ (1.9K/mo, Germany, Nov 2026), secondary
 * „Unscharfes Bild scharf machen“ (1.3K) and „Foto scharf machen“. Honest
 * like the English: mild blur and compression yes, motion blur and a badly
 * missed focus no.
 */
const content: ToolPageContent = {
  toolId: "unblur-image",
  locale: "de",
  name: "Bild schärfen",
  tagline:
    "Schärfen Sie weiche, leicht unscharfe oder verpixelte Fotos mit KI und erhalten Sie sie in derselben Größe zurück – nur klarer. Das Modell baut Kanten und Strukturen neu auf, am besten bei leichter Unschärfe und Kompressionsmatsch. Kostenlos, ohne Wasserzeichen.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Bild schärfen – unscharfes Bild scharf machen | oMyImage",
  metaDescription:
    "Bild schärfen mit KI: unscharfes Bild scharf machen, Pixel und JPG-Artefakte glätten – in Originalgröße oder doppelt so groß. Kostenlos, ohne Wasserzeichen.",

  intro:
    "Die meisten Fotos, die man „unscharf“ nennt, sind eigentlich weich: ein wenig neben dem Fokus, bei schwachem Licht aufgenommen, von einer Chat-App verkleinert und neu gespeichert oder aus einem kleinen Original vergrößert. Genau auf solche Fehler ist ein KI-Modell zur Bildrestaurierung trainiert. Laden Sie das Foto hoch, und das Modell zeichnet es in doppelter Auflösung neu – Kanten, Strukturen und feine Linien – und gibt es dann in der Originalgröße zurück. So passt es genau an die Stelle des alten Bildes, nur ohne den Großteil der Weichheit und Blockartefakte. Nicht jedes Bild lässt sich retten – die Abschnitte unten erklären, welche Art von Unschärfe das Tool behebt und welche nicht.",

  sections: [
    {
      heading: "Diese Unschärfe lässt sich beheben",
      id: "fixable",
      body: [
        "Weichheit durch leicht verfehlten Fokus, durch einfache Objektive und kleine Sensoren und durch Rauschunterdrückung bei wenig Licht. Verpixelung bei Fotos, die klein gespeichert und später vergrößert wurden. Blockartefakte und Verschmieren durch starke JPG-Kompression – das passiert mit einem Foto jedes Mal, wenn es über einen Messenger weitergeleitet wird.",
        "In all diesen Fällen sind die Formen noch da, nur nicht klar gezeichnet. Das Modell erkennt die Formen – ein Auge, einen Buchstaben, ein Blatt, eine Naht – und zeichnet sie scharf nach. Für das Auge wirkt das wie ein scharf gemachtes Foto.",
      ],
    },
    {
      heading: "Diese Unschärfe lässt sich nicht beheben",
      id: "limits",
      body: [
        "Starke Bewegungsunschärfe, bei der sich Kamera oder Motiv bewegt haben und jede Kante zu einem Streifen verwischt ist, und Fotos, die stark außer Fokus sind, sodass Details zu Flecken verschmolzen sind. Hier ist die Information tatsächlich verloren, und jedes Tool, das behauptet, sie wiederherzustellen, erfindet etwas.",
        "Das Modell macht auch solche Fotos sauberer, aber es macht aus einem unlesbaren Gesicht oder Kennzeichen kein lesbares – und ist dafür auch nicht gebaut. Wirkt ein Ergebnis plausibel, aber falsch – ein Gesicht, das der Person nur ähnlich sieht –, behandeln Sie es als Illustration, nicht als Beweis.",
      ],
    },
    {
      heading: "So erzielen Sie das beste Ergebnis",
      id: "tips",
      body: [
        "Beginnen Sie immer mit der besten Kopie, die Sie haben: Das Original aus der Galerie schlägt einen Screenshot, und der schlägt eine weitergeleitete Kopie. Schneiden Sie vor dem Hochladen weg, was Sie nicht brauchen, damit sich das Modell auf den wichtigen Teil konzentriert.",
        "Behalten Sie die Originalgröße bei Fotos, die Sie so verwenden wollen, wie sie sind. Schalten Sie sie aus bei einem kleinen oder verpixelten Bild, das größer werden soll: Dann erhalten Sie das geschärfte Ergebnis in doppelter Größe. Vergleichen Sie das Ergebnis vor dem Herunterladen mit dem Schieberegler; achten Sie bei Gesichtern zuerst auf Augen und Haaransatz.",
      ],
    },
    {
      heading: "Alte und gescannte Fotos",
      id: "old-photos",
      body: [
        "Scans alter Abzüge und Fotos, die aus einem gedruckten Album abfotografiert wurden, sind meist eher weich und körnig als wirklich unscharf – das liegt dem Modell gut: Es entfernt viel vom Korn und zeichnet Konturen neu.",
        "Kratzer, Knicke, Flecken oder verblasste Farben repariert es nicht – das sind Schäden am Abzug, keine fehlende Auflösung, und sie brauchen eine Retusche. Scannen Sie mit der höchsten Auflösung, die Ihr Scanner bietet, und schärfen Sie das Bild dann hier.",
      ],
    },
  ],

  howToTitle: "So schärfen Sie ein unscharfes Bild",
  steps: [
    { title: "Unscharfes Foto hochladen", description: "Wählen Sie ein JPG, PNG oder WEBP – wenn möglich die Originaldatei, keinen Screenshot." },
    { title: "Größe behalten oder vergrößern", description: "Das Ergebnis behält die Größe Ihres Fotos; schalten Sie das aus, um es doppelt so groß zu erhalten." },
    { title: "Schärfen & herunterladen", description: "Vergleichen Sie Vorher und Nachher mit dem Schieberegler und laden Sie dann das geschärfte Bild herunter." },
  ],

  features: [
    { icon: "auto_fix_high", title: "KI-Restaurierung", description: "Baut Kanten, Strukturen und Schrift neu auf, statt Pixel zu mischen – in der Größe Ihres Fotos." },
    { icon: "visibility", title: "Ehrlicher Vorher-Nachher-Vergleich", description: "Ein Vergleichsregler zeigt genau, was sich geändert hat, damit Sie das Ergebnis selbst beurteilen können." },
    { icon: "verified_user", title: "Kostenlos, ohne Wasserzeichen", description: "Kein Konto und nichts, was auf das Ergebnis gestempelt wird." },
  ],

  faqs: [
    { q: "Wie kann ich ein Bild online schärfen?", a: "Laden Sie das Foto hoch und klicken Sie auf Schärfen. Vergleichen Sie das Ergebnis mit dem Schieberegler und laden Sie es herunter, wenn es passt – es kommt in derselben Größe wie Ihr Foto zurück." },
    { q: "Kann es ein verwackeltes Foto reparieren?", a: "Nur teilweise. Bewegungsunschärfe verwischt Details zu Streifen, die kein Modell wirklich umkehren kann; Sie erhalten ein saubereres Bild, aber nicht das scharfe, das die Kamera verpasst hat." },
    { q: "Kann es ein unscharfes Gesicht erkennbar machen?", a: "Nein, und das soll es auch nicht. Ein bereits erkennbares Gesicht schärft es gut; bei einem unkenntlichen würde es nur raten, daher darf das Ergebnis nicht zur Identifizierung von Personen verwendet werden." },
    { q: "Kann es verpixelte Bilder entpixeln?", a: "Ja – ein kleines, blockiges Bild ist einer seiner besten Fälle. Schalten Sie Originalgröße behalten aus, damit die zusätzlichen Details Platz haben: Die Blöcke werden in doppelter Größe durch glatte Kanten und Strukturen ersetzt." },
    { q: "Ist das geschärfte Foto so groß wie mein Original?", a: "Ja, standardmäßig. Das Modell berechnet Details in doppelter Auflösung, und das Ergebnis wird auf die Größe Ihres Fotos zurückskaliert. Schalten Sie Originalgröße behalten aus, um es in 2× herunterzuladen." },
    { q: "Wird unscharfer Text auf einem Dokumentfoto lesbar?", a: "Leicht weicher Text wird deutlich schärfer. Text, der im Original zu verschwommen zum Lesen ist, bleibt meist unlesbar." },
    { q: "Wird mein Foto hochgeladen?", a: "Ja, auf unseren Server, weil das Modell mehr Speicher braucht, als ein Browser hat. Das Ergebnis liegt nur kurz hinter einem privaten Link und wird innerhalb einer Stunde automatisch gelöscht." },
    { q: "Was ist der Unterschied zum Schärfen-Regler in einer Foto-App?", a: "Ein klassischer Schärfen-Regler verstärkt nur den Kontrast an vorhandenen Kanten – bei zu viel entstehen helle Säume und Rauschen. Das KI-Modell zeichnet Kanten und Strukturen neu und entfernt dabei Kompressionsartefakte, statt sie mitzuverstärken." },
  ],

  security:
    "Das Schärfen läuft auf unserem Server mit der quelloffenen Engine Real-ESRGAN. Ihr Foto wird über eine verschlüsselte Verbindung übertragen, das Ergebnis liegt nur kurz hinter einem privaten Download-Link und wird innerhalb einer Stunde automatisch gelöscht, und nichts wird weitergegeben oder wiederverwendet.",
};

export default content;
