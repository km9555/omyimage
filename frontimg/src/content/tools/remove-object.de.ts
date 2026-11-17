import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/objekt-entfernen. Target query „Objekt entfernen“
 * (Germany, Nov 2026), secondary „Person aus Foto entfernen“ and „Objekte aus
 * Foto entfernen“. Same engine facts as English: MI-GAN (Picsart AI Research)
 * in the browser, 27 MB model, about a second per removal, 16.7 MP cap.
 */
const content: ToolPageContent = {
  toolId: "remove-object",
  locale: "de",
  name: "Objekt entfernen",
  tagline:
    "Übermalen Sie alles, was nicht ins Foto gehört – einen Fremden im Hintergrund, eine Mülltonne, eine Stromleitung, einen Fleck – und die KI füllt die Stelle passend auf. Kostenlos und komplett in Ihrem Browser.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Objekt entfernen aus Foto – kostenlos mit KI | oMyImage",
  metaDescription:
    "Objekt entfernen in Sekunden: Personen, Objekte und Störendes aus Fotos entfernen – übermalen, und die KI füllt den Hintergrund auf. Kostenlos, ohne Upload.",

  intro:
    "Mit „Objekt entfernen“ löschen Sie Dinge aus Fotos so, wie es ein Retuscheur tun würde: Sie markieren, was weg soll, und ein KI-Modell malt hinein, was plausibel dahinter gewesen sein könnte – passend zu Farben, Licht und Struktur rund um die Lücke. oMyImage führt dieses Modell – MI-GAN von Picsart AI Research – direkt in Ihrem Browser aus. Ihr Foto wird also nie hochgeladen, und es gibt kein Tageslimit. Übermalen Sie einen Touristen, ziehen Sie einen Rahmen um ein Schild, entfernen Sie ein Objekt nach dem anderen oder mehrere auf einmal, machen Sie jeden Schritt rückgängig und laden Sie das bereinigte Foto in Originalgröße herunter. So lässt sich auch eine Person aus einem Foto entfernen, ohne ein Bildbearbeitungsprogramm zu installieren.",

  sections: [
    {
      heading: "So markieren Sie, was verschwinden soll",
      id: "marking",
      body: [
        "Der Pinsel legt eine rosa Markierung über das Bild; decken Sie damit das ganze Objekt ab, mit etwas Rand. Nehmen Sie den Schatten und eventuelle Spiegelungen mit, sonst bleiben sie als Geisterbild zurück. Das Rechteck-Werkzeug markiert eine Fläche mit einem einzigen Ziehen – praktisch für Schilder, Autos und alles Eckige. Mit dem Radierer nehmen Sie eine zu weit gemalte Markierung zurück.",
        "Die Markierung muss nicht ordentlich sein. Das Tool vergrößert sie vor dem Auffüllen um ein paar Pixel, sodass auch der weiche Rand um ein Objekt erfasst wird. Wichtig ist nur, dass nichts vom Objekt über die Markierung hinausragt.",
      ],
    },
    {
      heading: "Was sich gut entfernen lässt",
      id: "good-at",
      body: [
        "Am besten gelingen Dinge vor einem recht gleichmäßigen Hintergrund: Menschen und Autos vor Gebäuden, Müll auf Gras oder Sand, Leitungen und Masten vor dem Himmel, ein Fleck an der Wand, ein Pickel auf der Haut, ein Krümel auf der Tischdecke. Das Modell wurde mit Fotos von Orten trainiert, deshalb rekonstruiert es Himmel, Wasser, Laub, Wände, Böden und Straßen am überzeugendsten.",
        "Schwieriger wird es, wenn der verdeckte Bereich etwas enthielt, das das Modell nicht erraten kann – ein halbes Gesicht, eine Textzeile, das Muster eines Teppichs, das hinter dem Objekt weiterläuft. Es füllt die Lücke dann mit etwas Glattem und Glaubwürdigem, aber nicht mit dem, was wirklich dort war.",
      ],
    },
    {
      heading: "Große Objekte: in mehreren Durchgängen",
      id: "passes",
      body: [
        "Das Modell füllt jede Fläche mit bis zu 512 Pixeln Breite und skaliert das Ergebnis passend, deshalb wirkt eine sehr große Lücke weicher als das Foto drumherum. Entfernen Sie ein großes Objekt in zwei oder drei Teilen und beginnen Sie an den Rändern: Jeder Durchgang liefert dem nächsten echte Umgebung, an der er sich orientieren kann. Mehrere kleine Objekte, die Sie gleichzeitig markieren, werden einzeln gefüllt und behalten volle Detailschärfe.",
        "Sieht eine Füllung falsch aus, klicken Sie auf Rückgängig, ändern Sie die Markierung – größer, oder ohne den Teil des Hintergrunds, der das Modell verwirrt hat – und versuchen Sie es erneut. Jeder Versuch dauert etwa eine Sekunde.",
      ],
    },
    {
      heading: "Rückgängig, Wiederholen und Vergleichen",
      id: "history",
      body: [
        "Jedes Entfernen lässt sich rückgängig machen und wiederholen, über die Schaltflächen oder mit Strg+Z und Strg+Umschalt+Z. „Neu beginnen“ stellt das Originalfoto wieder her. Halten Sie die Schaltfläche „Gedrückt halten für Original“, um zwischen Vorher und Nachher zu wechseln – so erkennen Sie am leichtesten eine Füllung, die nicht ganz passt.",
      ],
    },
    {
      heading: "KI, die auf Ihrem Gerät läuft",
      id: "on-device",
      body: [
        "Die meisten Objektentferner laden Ihr Foto auf einen Server. Hier kommt das Modell zu Ihnen: Beim ersten Öffnen lädt das Tool etwa 27 MB Modelldaten von unserer eigenen Website herunter – ein Fortschrittsbalken zeigt den Stand –, und Ihr Browser speichert sie, sodass spätere Besuche sofort starten. Danach geschieht das Entfernen auf Ihrem Computer oder Smartphone, in etwa einer Sekunde am Laptop und in wenigen Sekunden am Handy, sogar ohne Internetverbindung.",
        "Weil nichts übertragen wird, eignet sich das Tool auch für private Fotos, Ausweisdokumente und Kundenaufträge.",
      ],
    },
    {
      heading: "Qualität und Dateiformate",
      id: "quality",
      body: [
        "Das Foto wird in voller Größe bearbeitet – bis 16,7 Megapixel; alles Größere, etwa eine 48-MP-Aufnahme vom Smartphone, wird vorher auf diese Größe verkleinert, und die Seite weist darauf hin. Nur die markierten Bereiche ändern sich: Jedes andere Pixel wird exakt so gespeichert, wie es war. Wählen Sie das Originalformat oder JPG, PNG bzw. WEBP. PNG behält Transparenz bei; JPG füllt transparente Bereiche mit Weiß.",
      ],
    },
    {
      heading: "Ideen",
      id: "ideas",
      body: [
        "Entfernen Sie Touristen aus einem Urlaubsfoto. Nehmen Sie ein loses Kabel, ein parkendes Auto oder eine Mülltonne aus einem Immobilienfoto. Entfernen Sie einen Preisaufkleber von einem Produktfoto, einen Datumsstempel von einem gescannten Abzug oder einen Staubfleck von einem Scan. Löschen Sie den Ex aus einem Gruppenfoto, einen Fotobomber aus einem Hochzeitsbild oder ein Objekt aus einem Hintergrund, bevor Sie es als Hintergrundbild verwenden.",
        "Wenn Sie ein ganzes Motiv freistellen und stattdessen den Hintergrund entfernen möchten, nutzen Sie „Hintergrund entfernen“. Für Text und Logos, die über einem Bild liegen, öffnet „Wasserzeichen entfernen“ direkt mit dem Rechteck-Werkzeug.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Ihr Foto wird vollständig in Ihrem Browser von einem Modell bearbeitet, das auf Ihrem Gerät läuft. Nichts wird hochgeladen, und nichts bleibt gespeichert, nachdem Sie die Seite geschlossen haben.",
      ],
    },
  ],

  howToTitle: "So entfernen Sie ein Objekt aus einem Foto",
  steps: [
    { title: "Foto hinzufügen", description: "Wählen Sie ein JPG-, PNG- oder WEBP-Bild aus." },
    { title: "Objekt markieren", description: "Übermalen Sie es mit dem Pinsel oder ziehen Sie ein Rechteck darum – inklusive Schatten." },
    { title: "Entfernen und herunterladen", description: "Klicken Sie auf Objekt entfernen, prüfen Sie das Ergebnis und klicken Sie dann auf Bild herunterladen." },
  ],

  features: [
    { icon: "ink_eraser", title: "Pinsel, Rechteck und Radierer", description: "Markieren Sie Objekte genau und machen Sie jedes Entfernen rückgängig oder wiederholen Sie es." },
    { icon: "smart_toy", title: "KI-Füllung in etwa einer Sekunde", description: "MI-GAN rekonstruiert den Hintergrund passend zur Umgebung." },
    { icon: "lock", title: "Nie hochgeladen", description: "Die KI läuft in Ihrem Browser, auf Ihrem Gerät." },
  ],

  faqs: [
    { q: "Wie entferne ich ein Objekt aus einem Foto?", a: "Fügen Sie das Foto hinzu, übermalen Sie das Objekt mit dem Pinsel und klicken Sie auf Objekt entfernen. Laden Sie danach das Ergebnis herunter." },
    { q: "Ist das wirklich kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und kein Tageslimit, weil die KI auf Ihrem eigenen Gerät läuft." },
    { q: "Wird mein Foto hochgeladen?", a: "Nein. Das KI-Modell wird in Ihren Browser geladen, und das Foto verlässt Ihr Gerät nie." },
    { q: "Warum dauert das erste Entfernen länger?", a: "Beim ersten Mal lädt Ihr Browser das 27 MB große KI-Modell herunter. Er speichert es, sodass spätere Besuche sofort starten." },
    { q: "Kann ich eine Person aus einem Foto entfernen?", a: "Ja. Übermalen Sie die Person und ihren Schatten; am besten funktioniert es, wenn sie vor einem eher schlichten Hintergrund steht." },
    { q: "Kann ich mehrere Objekte auf einmal entfernen?", a: "Ja. Markieren Sie alle und klicken Sie einmal auf Objekt entfernen – jedes wird einzeln aufgefüllt." },
    { q: "Das Ergebnis wirkt unscharf – was kann ich tun?", a: "Machen Sie den Schritt rückgängig und entfernen Sie ein großes Objekt in kleineren Teilen, beginnend an den Rändern. Kleine Flächen behalten volle Detailschärfe." },
    { q: "Kann ich ein Entfernen rückgängig machen?", a: "Ja – mit Rückgängig, Wiederholen und Neu beginnen oder mit Strg+Z und Strg+Umschalt+Z." },
    { q: "Verschlechtert sich die Fotoqualität?", a: "Nein. Nur die markierten Bereiche ändern sich, und das Foto behält seine Größe bis 16,7 Megapixel." },
    { q: "Funktioniert es offline?", a: "Sobald das Modell geladen ist, ja: Zum Entfernen von Objekten brauchen Sie keine Verbindung." },
    { q: "Funktioniert es auf dem Smartphone?", a: "Ja. Malen Sie mit dem Finger; jedes Entfernen dauert auf dem Handy einige Sekunden." },
    { q: "Welche Formate werden unterstützt?", a: "JPG, PNG und WEBP als Eingabe, und dasselbe Format oder eines der drei als Ausgabe." },
    { q: "Kann es den ganzen Hintergrund entfernen?", a: "Dafür gibt es „Hintergrund entfernen“ – es stellt das Motiv frei und macht den Hintergrund transparent." },
    { q: "Darf ich Personen aus Fotos entfernen und das Bild veröffentlichen?", a: "Technisch ist das kein Problem. Rechtlich zählt, wer noch auf dem Bild zu sehen ist: Für erkennbare Personen brauchen Sie in Deutschland in der Regel deren Einwilligung (Recht am eigenen Bild, DSGVO). Wer eine Person entfernt, verringert dieses Problem eher, als dass er es schafft." },
  ],

  security:
    "Ihr Foto wird vollständig in Ihrem Browser von einem Modell bearbeitet, das auf Ihrem Gerät läuft. Nichts wird hochgeladen, gespeichert oder getrackt.",

  ui: {
    // InpaintTool.tsx — shared with remove-watermark, whose module reuses this block.
    "or drop a JPG, PNG or WEBP image here": "oder ein JPG-, PNG- oder WEBP-Bild hier ablegen",
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Clear files": "Dateien entfernen",
    "Settings": "Einstellungen",
    "Marking tool": "Markierwerkzeug",
    "Brush": "Pinsel",
    "Box": "Rechteck",
    "Eraser": "Radierer",
    "Drag a box over the area to remove.": "Ziehen Sie ein Rechteck über den Bereich, der entfernt werden soll.",
    "Paint over a mark to take it back.": "Übermalen Sie eine Markierung, um sie zurückzunehmen.",
    "Paint over every letter of the watermark, including its outline or shadow.": "Übermalen Sie jeden Buchstaben des Wasserzeichens, inklusive Kontur oder Schatten.",
    "Paint over the whole object, including its shadow and reflection.": "Übermalen Sie das ganze Objekt, inklusive Schatten und Spiegelung.",
    "Brush size": "Pinselgröße",
    "Clear marks": "Markierungen löschen",
    "Undo": "Rückgängig",
    "Redo": "Wiederholen",
    "Start over": "Neu beginnen",
    "AI model ready — it runs on your device.": "KI-Modell bereit – es läuft auf Ihrem Gerät.",
    "The AI model could not be loaded.": "Das KI-Modell konnte nicht geladen werden.",
    "Try again": "Erneut versuchen",
    "Loading the AI model…": "KI-Modell wird geladen…",
    "Only on the first visit — after that your browser keeps it.": "Nur beim ersten Besuch – danach speichert Ihr Browser es.",
    "Output format": "Ausgabeformat",
    "Quality": "Qualität",
    "Same as original": "Wie Original",
    "Your image never leaves your device: the AI runs in your browser.": "Ihr Bild verlässt nie Ihr Gerät: Die KI läuft in Ihrem Browser.",
    "Remove watermark": "Wasserzeichen entfernen",
    "Remove object": "Objekt entfernen",
    "Removing…": "Wird entfernt…",
    "Download image": "Bild herunterladen",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Mark the watermark first — draw a box around it or paint over it.": "Markieren Sie zuerst das Wasserzeichen – ziehen Sie ein Rechteck darum oder übermalen Sie es.",
    "Paint over what you want to remove first.": "Übermalen Sie zuerst, was Sie entfernen möchten.",
    "Picture — mark the watermark here": "Bild – markieren Sie hier das Wasserzeichen",
    "Picture — mark what to remove here": "Bild – markieren Sie hier, was entfernt werden soll",
    "Mark the watermark, then click Remove watermark.": "Markieren Sie das Wasserzeichen und klicken Sie dann auf Wasserzeichen entfernen.",
    "Mark what you want gone, then click Remove object.": "Markieren Sie, was weg soll, und klicken Sie dann auf Objekt entfernen.",
    "Hold to see the original": "Gedrückt halten für Original",
    "This photo is very large, so it is edited and saved at {w} × {h} px.": "Dieses Foto ist sehr groß und wird deshalb mit {w} × {h} px bearbeitet und gespeichert.",
  },
};

export default content;
