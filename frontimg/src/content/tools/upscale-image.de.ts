import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bildqualitaet-verbessern. Structure lives in
 * ToolPageShell.
 *
 * Head term "Bildqualität verbessern" (5.4K/mo). Germans search for the
 * RESULT (a better picture) more than for the operation, so the H1 names the
 * result and the copy explains the enlargement. Secondaries "Bild
 * hochskalieren" (3.6K), "Upscale" (4.4K), "Bild vergrößern" and
 * "Bildauflösung erhöhen" live in the intro, a section heading and the FAQs.
 * "Sie" form, German-German spelling.
 */
const content: ToolPageContent = {
  toolId: "upscale-image",
  locale: "de",
  name: "Bildqualität verbessern",
  tagline:
    "Vergrößern und verbessern Sie Bilder bis zu 4× mit einer KI, die echte Details ergänzt statt zu verwischen — und dabei weiche, verrauschte oder stark komprimierte Fotos schärft. Mit dem Open-Source-Modell Real-ESRGAN.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Bildqualität verbessern – Bild mit KI hochskalieren",
  metaDescription:
    "Bildqualität verbessern mit KI: Bild hochskalieren in 2×, 3× oder 4×, Auflösung erhöhen ohne Unschärfe. JPG, PNG und WEBP — kostenlos, online, ohne Anmeldung.",

  variantsHeading: "Weitere Wege, ein Foto zu verbessern",

  intro:
    "Machen Sie kleine oder niedrig aufgelöste Bilder größer, ohne dass sie verschwimmen. Das Tool „Bildqualität verbessern“ von oMyImage nutzt das Open-Source-Modell Real-ESRGAN, um Fotos bis zu 4× hochzuskalieren und dabei Kanten und Strukturen zu rekonstruieren — so erhöhen Sie die Bildauflösung, und das Ergebnis bleibt scharf. Weil die KI viel Rechenleistung braucht, läuft sie auf unserem Server; danach laden Sie das Bild in hoher Auflösung herunter.",

  sections: [
    {
      heading: "Interpolation oder Rekonstruktion: was beim Upscale passiert",
      id: "how",
      body: [
        "Gewöhnliches Vergrößern hat eine eingebaute Grenze. Verdoppeln Sie die Maße eines Bildes, steht hinter drei von vier Ausgabepixeln kein Quellpixel, also mittelt das Resampling die Nachbarn. Mitteln erzeugt weiche Übergänge — anders gesagt: Unschärfe. Kanten werden weich, feine Strukturen verschwinden, und die Vergrößerung sieht genau nach dem aus, was sie ist.",
        "Ein Super-Resolution-Modell geht das Problem anders an. Es wurde mit einer riesigen Zahl von Bildpaaren trainiert — dieselbe Szene in niedriger und in hoher Auflösung — und hat daraus gelernt, welche Details typischerweise hinter einer unscharfen Kante stecken. Bei einem neuen, niedrig aufgelösten Bild sagt es die hochaufgelöste Version vorher, statt sich ihr durch Mitteln anzunähern.",
        "Am deutlichsten sieht man den Unterschied an Kanten und Strukturen. Wo Interpolation einen weichen Verlauf liefert, liefert das Modell eine scharfe Grenze; wo Interpolation flachen Brei liefert, liefert es plausibles Korn, Poren, Stoffgewebe oder Laub.",
      ],
    },
    {
      heading: "Die ehrliche Einschränkung",
      id: "limits",
      body: [
        "Die Details sind erfunden. Das ist keine Kritik am Verfahren — so funktioniert es, und für die meisten Zwecke ist es genau das, was Sie wollen. Es bedeutet aber, dass das Ergebnis eine plausible Rekonstruktion ist und kein genaueres Foto, und dieser Unterschied zählt in bestimmten Situationen.",
        "Nutzen Sie es nicht, wenn die Pixel ein Beweis sind. Forensik, medizinische Bildgebung, wissenschaftliche Messungen, ein Kennzeichen oder ein Dokument aus einer Überwachungskamera lesen — in all diesen Fällen erzeugt das Modell bereitwillig überzeugende Details, die nie da waren. Das ist schlimmer als ein unscharfes Bild, weil es glaubwürdig aussieht.",
        "Für Fotografie, E-Commerce, Druck und Design gilt das alles nicht. Dort soll das Bild richtig aussehen, und das tut es.",
      ],
    },
    {
      heading: "Starten Sie mit der besten Quelle, die Sie haben",
      id: "source",
      body: [
        "Das Modell rekonstruiert aus dem, was es bekommt — eine saubere Vorlage ergibt ein besseres Ergebnis. Ein kleines Original ist kein Problem, darum geht es ja. Ein kleines Original, das mehrere Runden JPG-Komprimierung hinter sich hat, schon, denn Blockbildung und Säume werden zusammen mit den echten Details vergrößert und geschärft.",
        "Haben Sie die Wahl zwischen einem 600-Pixel-PNG und einem 600-Pixel-JPG desselben Bildes, nehmen Sie das PNG. Haben Sie irgendwo ein größeres Original, das Sie einmal verkleinert haben, greifen Sie darauf zurück. Und ist das Bild ein Screenshot von einem Screenshot, rechnen Sie damit, dass die Artefakte getreu und selbstbewusst mit reproduziert werden.",
      ],
    },
    {
      heading: "Wann sich das Bild-Hochskalieren lohnt",
      id: "uses",
      body: [
        "Der typische Fall ist ein Bild, das am Bildschirm gut aussieht, für den Druck aber nicht reicht. Ein 800 Pixel breites Produktfoto wirkt auf einer Webseite völlig in Ordnung und zerfällt auf einem Flyer — das Hochskalieren entscheidet dann oft darüber, ob das Shooting wiederholt werden muss oder nicht.",
        "Weitere häufige Einsätze: alte Familienfotos, die in niedriger Auflösung eingescannt wurden, Bilder von einer in die Jahre gekommenen Website ohne Originale, Vorschaubilder, die zu großen Titelbildern werden sollen, und niedrig aufgelöste Logos, die auf ein Schild müssen. In jedem dieser Fälle ist die Alternative kein besseres Bild — sondern gar keins.",
      ],
    },
  ],

  howToTitle: "So verbessern Sie die Bildqualität",
  steps: [
    { title: "Hochladen", description: "Wählen Sie ein Bild aus oder ziehen Sie es per Drag-and-drop in den Arbeitsbereich." },
    { title: "Faktor wählen", description: "Wählen Sie 2×, 3× oder 4× und klicken Sie auf „Hochskalieren“ — die KI ergänzt beim Vergrößern Details." },
    { title: "Herunterladen", description: "Laden Sie Ihr größeres, schärferes Bild herunter." },
  ],

  features: [
    { icon: "hd", title: "Bis zu 4× größer", description: "Vergrößern Sie kleine oder niedrig aufgelöste Bilder, während die KI Details rekonstruiert, statt zu verwischen." },
    { icon: "auto_awesome", title: "Details zurückgewinnen", description: "Real-ESRGAN stellt Kanten und Strukturen wieder her und liefert knackige Ergebnisse — selbst bei stark komprimierten Fotos." },
    { icon: "verified_user", title: "Open-Source-Engine", description: "Basiert auf Real-ESRGAN — kostenlos, quelloffen und auch für die kommerzielle Nutzung geeignet." },
  ],

  faqs: [
    { q: "Wie stark kann ich ein Bild vergrößern?", a: "Bis zu 4×. Aus einem Bild mit 500 × 500 Pixeln werden 2000 × 2000 — mit von der KI rekonstruierten Details statt weicher Unschärfe." },
    { q: "Kann ich damit ein Foto verbessern, statt es zu vergrößern?", a: "Ja — das ist derselbe Vorgang. Wählen Sie 2× für einen leichten Durchgang, der Kanten schärft, Rauschen glättet und Details in weichen oder komprimierten Fotos wiederherstellt. Beachten Sie, dass das Ergebnis trotzdem doppelt so groß ist wie das Original; verkleinern Sie es danach, wenn Sie die Originalgröße brauchen." },
    { q: "Welche Engine wird verwendet?", a: "Real-ESRGAN, ein quelloffenes Super-Resolution-Modell, das auch kommerziell genutzt werden darf." },
    { q: "Warum dauert es ein paar Sekunden?", a: "Hochskalieren ist rechenintensiv und läuft auf unserem Server. Größere Bilder und höhere Faktoren brauchen länger." },
    { q: "Macht das Tool ein sehr unscharfes Foto wieder scharf?", a: "Es verbessert Schärfe und Details deutlich, kann in extremen Fällen aber keine Informationen erfinden, die schlicht nicht vorhanden sind." },
    { q: "Werden meine Bilder gespeichert?", a: "Nein. Ergebnisse liegen nur kurz für Ihren Download-Link bereit und werden innerhalb einer Stunde automatisch gelöscht." },
    { q: "Was ist der Unterschied zum einfachen Vergrößern?", a: "Normales Vergrößern interpoliert zwischen den vorhandenen Pixeln, darum werden vergrößerte Bilder weich — es gibt keine neuen Details, auf die man zurückgreifen könnte. Dieses Modell wurde mit Millionen von Bildpaaren trainiert und sagt vorher, wie die fehlenden Details plausibel ausgesehen haben. Kanten bleiben scharf, Strukturen werden rekonstruiert statt verschmiert." },
    { q: "Sind die hinzugefügten Details echt?", a: "Nein, und das ist wichtig. Das Modell erfindet plausible Details, es stellt nichts wieder her, was tatsächlich aufgenommen wurde. Für Fotografie, Design und Druck ist das genau richtig. Für alles, was als Beweis, forensisch, medizinisch oder wissenschaftlich dient, ist es das falsche Werkzeug, weil das Ergebnis Informationen enthält, die nie im Original waren." },
    { q: "Bei welchen Bildern funktioniert es am besten?", a: "Bei Fotos mit echter Struktur — Gesichter, Landschaften, Stoffe, Laub. Auch saubere, niedrig aufgelöste Grafiken gelingen gut. Schwierig sind Bilder, die schon stark komprimiert sind, weil das Modell die JPG-Artefakte getreu mitvergrößert." },
    { q: "Gibt es eine Größenbeschränkung?", a: "Ja. Die Zahl der Eingabepixel ist begrenzt, weil das Hochskalieren wirklich aufwendig ist — der Aufwand wächst mit der Ausgabegröße, nicht mit der Eingabe. Sehr große Bilder werden gleich zu Beginn abgelehnt, statt mittendrin abzubrechen. Schneiden Sie in dem Fall auf den Teil zu, den Sie wirklich brauchen." },
    { q: "In welchem Format bekomme ich das Bild zurück?", a: "Im selben Format, das Sie hochgeladen haben — ein JPG kommt als JPG zurück, ein PNG als PNG, ein WEBP als WEBP. JPGs werden in hoher Qualität mit voller Farbauflösung neu kodiert, damit die Datei eine vernünftige Größe behält, statt sich zu einem vielfach größeren verlustfreien PNG aufzublähen. Transparenz bleibt bei PNG und WEBP erhalten." },
    { q: "Kann ich ein Bild mehrmals hochskalieren?", a: "Möglich ist es, bringt aber selten etwas. Der zweite Durchgang arbeitet mit den erfundenen Details des ersten statt mit echten Informationen, Fehler summieren sich, und das Ergebnis wirkt zunehmend künstlich. Ein Durchgang vom besten Original aus ist fast immer besser." },
    { q: "Kann ich so die Bildauflösung für den Druck erhöhen?", a: "Ja, das ist einer der häufigsten Einsätze. Für einen scharfen Druck rechnet man mit etwa 300 DPI: Ein Foto für 10 × 15 cm braucht also rund 1200 × 1800 Pixel. Hat Ihr Bild nur die Hälfte davon, bringt eine Hochskalierung um 2× es auf die nötige Auflösung." },
  ],

  security:
    "Das Hochskalieren läuft auf unserem Server mit der Open-Source-Engine Real-ESRGAN. Ergebnisse liegen nur kurz hinter einem privaten Download-Link und werden innerhalb einer Stunde automatisch gelöscht. Wir geben Ihre Bilder nie weiter und verwenden sie nicht erneut.",

  ui: {
    // UpscaleTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "or drop a JPG, PNG or WEBP here": "oder ein JPG, PNG oder WEBP hier ablegen",
    "Upscale": "Hochskalieren",
    "Upscaling…": "Wird hochskaliert…",
    "Scale factor": "Vergrößerungsfaktor",
    // unblur-image and image-to-hd modes (UpscaleTool preset.mode)
    "Unblur": "Scharf machen",
    "Unblurring…": "Wird geschärft…",
    "Keep the original size": "Originalgröße beibehalten",
    "The AI sharpens at twice the resolution, then the photo is returned at its own size — same picture, crisper.": "Die KI schärft in doppelter Auflösung, danach erhalten Sie das Foto in seiner eigenen Größe zurück — dasselbe Bild, nur schärfer.",
    "You get the sharpened photo at twice its size — useful for small or pixelated pictures.": "Sie erhalten das geschärfte Foto in doppelter Größe — praktisch für kleine oder verpixelte Bilder.",
    "Convert to HD": "In HD umwandeln",
    "Target size": "Zielgröße",
    "The longer side comes out at this size. The AI scale (2×, 3× or 4×) is chosen for you.": "Die längere Seite erhält diese Größe. Den KI-Faktor (2×, 3× oder 4×) wählen wir für Sie.",
    "A very small picture may not reach 4K even at 4× — you then get the 4× result.": "Ein sehr kleines Bild erreicht selbst mit 4× eventuell kein 4K — Sie erhalten dann das Ergebnis in 4×.",
    // Backend sentences this tool can surface (routes/image/upscale)
    "AI upscaling isn't enabled on this server (Real-ESRGAN not installed).":
      "Die KI-Hochskalierung ist auf diesem Server derzeit nicht verfügbar.",
  },
};

export default content;
