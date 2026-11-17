import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/gif-erstellen.
 *
 * Head term „GIF erstellen“ (9.9K/mo, KD 7) leads the h1 — Germans search the
 * verb. „GIF Maker“ (22.2K, KD 79) is contested, so it rides along in the
 * metaTitle, the intro and one FAQ instead of the h1.
 */
const content: ToolPageContent = {
  toolId: "gif-maker",
  locale: "de",
  name: "GIF erstellen",
  tagline:
    "Erstellen Sie online ein animiertes GIF aus Ihren Bildern – mit Live-Vorschau für Geschwindigkeit, Reihenfolge, Größe und Wiederholung. Kostenlos, schnell und zu 100 % privat im Browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF erstellen – GIF Maker kostenlos & online | oMyImage",
  metaDescription:
    "GIF erstellen aus Ihren Bildern: Der kostenlose GIF Maker mit Live-Vorschau für Tempo, Reihenfolge, Größe und Schleife. Ohne Anmeldung, ohne Wasserzeichen.",

  intro:
    "Aus einer Reihe von Bildern wird eine Animation in Endlosschleife. Mit „GIF erstellen“ von oMyImage bauen Sie ein animiertes GIF aus Ihren Fotos direkt im Browser – mit Live-Vorschau, einstellbarer Geschwindigkeit, Ausgabegröße, Wiederholung und frei sortierbaren Frames. Erstellen Sie Diashows, Reaktions-GIFs oder einfache Animationen und laden Sie das Ergebnis sofort herunter. Der GIF Maker lädt nichts hoch, Ihre Bilder bleiben also privat. Ein vorhandenes GIF können Sie ebenfalls öffnen und seine Frames neu bearbeiten.",

  sections: [
    {
      heading: "Warum es GIF immer noch gibt",
      id: "why",
      body: [
        "Technisch betrachtet hätte GIF schon vor Jahrzehnten verschwinden müssen. Das Format stammt von 1987, kennt höchstens 256 Farben pro Frame, komprimiert schwach, und ein Video erledigt dieselbe Aufgabe mit einem Bruchteil der Dateigröße und deutlich besserer Qualität.",
        "GIF überlebt wegen dem, was es nicht braucht. Ein GIF startet von selbst, läuft endlos, braucht keinen Player, keine Bedienelemente und keinen Klick – und funktioniert dort, wo Video nicht funktioniert: in Chat-Apps, in README-Dateien auf Code-Plattformen, in manchen E-Mail-Programmen, in Foren und in jedem System, das die Datei schlicht als Bild behandelt.",
        "Mehr ist es nicht. Wenn Ihr Ziel Video annimmt, nehmen Sie Video. Wenn es nur Bilder annimmt, ist GIF die einzige animierte Option, die Sie haben.",
      ],
    },
    {
      heading: "Die Grenze von 256 Farben",
      id: "colours",
      body: [
        "GIF speichert pro Frame eine Palette mit höchstens 256 Farben, und jedes Pixel muss eine davon sein. Für flächige Illustrationen, Strichzeichnungen, Bildschirmaufnahmen von Oberflächen und Logo-Animationen reicht das völlig – solche Bilder enthalten selten mehr unterschiedliche Farben.",
        "Fotos sind der schwierige Fall. Ein einziger Frame einer echten Szene enthält Tausende Farben, also muss der Encoder 256 auswählen und den Rest annähern. Beim Dithering werden Pixel benachbarter Palettenfarben gestreut, um Zwischentöne vorzutäuschen. Deshalb wirken Foto-GIFs leicht gesprenkelt und körnig, am stärksten bei Himmel und Haut.",
        "Innerhalb des Formats lässt sich daran nichts ändern. Wenn Farbstufen nicht akzeptabel sind, ist ein Video die Lösung – kein besseres GIF.",
      ],
    },
    {
      heading: "So steuern Sie die Dateigröße",
      id: "size",
      body: [
        "Drei Faktoren bestimmen die Größe, und die Abmessungen dominieren. Jeder Frame speichert das ganze Bild. Halbieren Sie Breite und Höhe, bleibt pro Frame nur ein Viertel der Daten – das ist mit Abstand der wirksamste Hebel, und ein GIF mit 480 Pixeln Breite sieht im Chatfenster oder in einer README völlig gut aus.",
        "Danach kommt die Zahl der Frames. Weniger Frames machen die Animation etwas ruckeliger, die Datei aber proportional kleiner. Viele Schleifen wirken mit 8–12 Frames pro Sekunde einwandfrei, 24 sind selten nötig. Die Sequenz auf die Frames zu kürzen, die die eigentliche Bewegung zeigen, tut meist nicht weh.",
        "Der dritte Faktor ist die Länge der Schleife. Eine Zwei-Sekunden-Schleife, die endlos läuft, schaut man lieber an als eine mit zehn Sekunden – und sie ist fünfmal kleiner. Der Versuchung zu widerstehen, alles unterzubringen, ist hier die beste Gewohnheit.",
      ],
    },
    {
      heading: "Timing und Rhythmus",
      id: "timing",
      body: [
        "Die Anzeigedauer pro Frame bestimmt das Tempo. Rund 100 ms pro Frame ergeben etwa zehn Frames pro Sekunde – flüssig genug für die meisten kurzen Schleifen, ohne die Dateikosten einer höheren Rate. Unter etwa 60 ms bezahlen Sie viele Bytes für eine Flüssigkeit, die kaum jemand bemerkt.",
        "Längere Anzeigedauern machen aus der Animation eine Diashow, und genau das ist oft gewünscht. Eine Schritt-für-Schritt-Anleitung, mehrere Ansichten eines Produkts oder ein Vorher-nachher-Vergleich wirken mit 500–800 ms pro Frame besser, weil der Betrachter jedes Bild erfassen kann, bevor es wechselt.",
        "Ein praktischer Tipp: Läuft die Schleife endlos, halten Sie den letzten Frame etwas länger. Das gibt dem Auge einen Moment Ruhe und verhindert, dass die Animation hektisch wirkt. Jeder Frame kann eine eigene Anzeigedauer haben, Sie müssen also nur den letzten ändern.",
      ],
    },
  ],

  howToTitle: "So erstellen Sie ein animiertes GIF",
  steps: [
    { title: "Frames hochladen", description: "Wählen Sie zwei oder mehr Bilder aus oder ziehen Sie sie in den Arbeitsbereich." },
    { title: "Timing festlegen", description: "Sortieren Sie die Frames, stellen Sie das Tempo für alle oder pro Frame ein und wählen Sie Größe, Anpassung, Farben und Wiederholung – alles mit Live-Vorschau." },
    { title: "Erstellen und herunterladen", description: "Klicken Sie auf GIF erstellen – das GIF wird im Browser gebaut, Sie sehen die fertige Animation samt Dateigröße und laden sie herunter, wenn sie Ihnen gefällt." },
  ],

  features: [
    { icon: "gif_box", title: "Animierte Live-Vorschau", description: "Sehen Sie die Animation vor dem Export in genau dem Tempo, in dem sie später läuft – ohne Rätselraten." },
    { icon: "speed", title: "Volle Kontrolle", description: "Legen Sie die Anzeigedauer für alle oder einzelne Frames fest, spielen Sie die Folge rückwärts oder als Bumerang ab und wählen Sie Ausgabegröße, Anpassung, Farbanzahl, Wiederholung und Hintergrund." },
    { icon: "lock", title: "100 % privat", description: "Das GIF wird vollständig in Ihrem Browser kodiert – Ihre Bilder werden nie hochgeladen." },
  ],

  faqs: [
    { q: "Wie viele Bilder kann ich verwenden?", a: "Mindestens zwei, nach oben ohne feste Grenze – jedes Bild wird zu einem Frame der Animation." },
    { q: "Kann ich die Geschwindigkeit einstellen?", a: "Ja, auf zwei Ebenen. Der Regler für die Anzeigedauer legt die Standardzeit pro Frame fest, angezeigt in Millisekunden und Frames pro Sekunde, und jeder einzelne Frame kann eine eigene Dauer bekommen – praktisch, um auf einem Titelbild oder dem letzten Frame zu verweilen." },
    { q: "Was passiert, wenn meine Bilder unterschiedlich groß sind?", a: "Sie werden in eine gemeinsame Fläche eingepasst, die groß genug für alle ist. Einpassen zeigt jeden Frame vollständig und füllt den Rest mit Ihrer Hintergrundfarbe, Füllen deckt die Fläche ab und schneidet Überstände ab, Strecken erzwingt eine exakte Passform." },
    { q: "Kann ich ein vorhandenes GIF bearbeiten?", a: "Ja. Legen Sie ein GIF ab, und es wird wieder in seine Frames zerlegt – jeweils mit der ursprünglichen Anzeigedauer. Danach können Sie sortieren, löschen, das Timing ändern, die Folge umkehren oder als Bumerang abspielen und neu exportieren." },
    { q: "Kann das GIF einen transparenten Hintergrund haben?", a: "Ja – wählen Sie Transparent statt einer Farbe, dann bleiben transparente Bereiche Ihrer Bilder transparent. GIF-Transparenz gilt pro Pixel ganz oder gar nicht, weiche, geglättete Kanten werden also hart. Wenn das stört, legen Sie lieber eine Volltonfarbe dahinter." },
    { q: "Ist das kostenlos und privat?", a: "Ja. Ohne Anmeldung und ohne Wasserzeichen, und das GIF wird lokal in Ihrem Browser erstellt." },
    { q: "Warum ist mein GIF so groß?", a: "Weil GIF ein altes Format mit schwacher Kompression ist, das Details nicht so verwerfen kann wie moderne Codecs. Jeder Frame vergrößert die Datei, und Fotomaterial ist der ungünstigste Fall. Kleinere Abmessungen, weniger Frames und eine kürzere Schleife sind die drei Hebel, die zählen." },
    { q: "Wie mache ich die Datei kleiner?", a: "Verringern Sie zuerst die Pixelmaße – halbe Breite und Höhe bedeuten ein Viertel pro Frame. Verwenden Sie dann weniger Frames und halten Sie die Schleife kurz. Ein GIF mit 480 Pixeln Breite und 15 Frames ist ein vernünftiges Ziel, 800 Pixel und 60 Frames sind es selten." },
    { q: "Warum zeigen die Farben Stufen?", a: "GIF erlaubt höchstens 256 Farben. Alles mit Verläufen – Himmel, Hauttöne, Schatten – muss angenähert werden, und die Sprünge zwischen den verbleibenden Farben erscheinen als Streifen. Dieses Tool erstellt eine gemeinsame Palette für die ganze Animation, damit die Farben von Frame zu Frame stabil bleiben und nicht springen. Flächige Grafiken und Illustrationen kommen mit der Grenze viel besser zurecht als Fotos." },
    { q: "Welche Anzeigedauer pro Frame sollte ich wählen?", a: "Rund 100 ms pro Frame ergeben etwa 10 Frames pro Sekunde, was für die meisten kurzen Schleifen flüssig wirkt. Kürzere Werte sehen flüssiger aus, vervielfachen aber die Dateigröße. Längere wirken wie eine Diashow – für eine Schritt-für-Schritt-Folge oft genau richtig." },
    { q: "Kann ich ein GIF aus einem Video erstellen?", a: "Nicht mit diesem Tool – es baut ein GIF aus Standbildern, die Sie bereitstellen. Für Videos nutzen Sie „Video in GIF“. Für eine Reihe von Screenshots, Produktansichten oder eine Stop-Motion-Serie ist dieses Tool genau das richtige." },
    { q: "Sollte ich ein GIF oder ein Video verwenden?", a: "Fast immer ein Video, wenn die Plattform es unterstützt – ein kurzes MP4 ist einen Bruchteil so groß und sieht deutlich besser aus. GIF gewinnt nur dort, wo automatisches Abspielen ohne Player zählt: in Chat-Apps, README-Dateien, manchen E-Mail-Programmen und älteren Foren." },
    { q: "Ist das ein GIF Maker ohne Wasserzeichen?", a: "Ja. Das fertige GIF enthält kein Logo und keinen Hinweis auf oMyImage, und Sie brauchen kein Konto. Es gibt auch kein Tageslimit für die Zahl der GIFs, die Sie erstellen." },
  ],

  security:
    "Ihre Bilder bleiben privat. Das GIF wird vollständig in Ihrem Browser mit der Open-Source-Bibliothek gifenc kodiert – und ein importiertes GIF wird dort ebenfalls dekodiert, mit gifuct-js. Nichts wird auf einen Server hochgeladen. Keine Speicherung, kein Tracking Ihrer Dateien.",

  ui: {
    // GifMakerTool.tsx — module-scope FIT_LABELS
    "Contain": "Einpassen",
    "Cover": "Füllen",
    "Stretch": "Strecken",
    "Custom": "Benutzerdefiniert",
    // GifMakerTool.tsx
    "Couldn't read 1 image. It's marked and will be skipped.":
      "1 Bild konnte nicht gelesen werden. Es ist markiert und wird übersprungen.",
    "Couldn't read {n} images. They're marked and will be skipped.":
      "{n} Bilder konnten nicht gelesen werden. Sie sind markiert und werden übersprungen.",
    "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
    "Imported 1 frame from {name}.": "1 Frame aus {name} importiert.",
    "Imported {n} frames from {name}.": "{n} Frames aus {name} importiert.",
    "Couldn't read {name}.": "{name} konnte nicht gelesen werden.",
    "Add at least two images to make an animation.": "Fügen Sie mindestens zwei Bilder hinzu, um eine Animation zu erstellen.",
    "Canvas is not supported in this browser.": "Dieser Browser unterstützt kein Canvas.",
    "Created a GIF from {n} frames ({size}).": "GIF aus {n} Frames erstellt ({size}).",
    "Couldn't create the GIF.": "Das GIF konnte nicht erstellt werden.",
    "or drop two or more JPG, PNG or WEBP images here — or a GIF to re-edit":
      "oder zwei oder mehr JPG-, PNG- oder WebP-Bilder hier ablegen – oder ein GIF zum Bearbeiten",
    "Unreadable — skipped": "Nicht lesbar – übersprungen",
    "Delay": "Dauer",
    "Frame delay for {name}, in milliseconds": "Anzeigedauer für {name} in Millisekunden",
    "Clear frames": "Alle Frames entfernen",
    "Remove": "Entfernen",
    "GIF settings": "GIF-Einstellungen",
    "Create": "Erstellen",
    "Building GIF…": "GIF wird erstellt…",
    "Live preview": "Live-Vorschau",
    "1 frame": "1 Frame",
    "{n} frames": "{n} Frames",
    "{s}s per loop": "{s} s pro Durchlauf",
    "Your GIF": "Ihr GIF",
    "Finished GIF": "Fertiges GIF",
    "Download GIF": "GIF herunterladen",
    "Animation Settings": "Animationseinstellungen",
    "Encoding frame {done} of {total}…": "Frame {done} von {total} wird kodiert…",
    "Set the order with the arrows. The preview plays at your chosen speed.":
      "Legen Sie die Reihenfolge mit den Pfeilen fest. Die Vorschau läuft im gewählten Tempo.",
    "Create GIF": "GIF erstellen",
    "Frame delay": "Anzeigedauer pro Frame",
    "Applies to frames without their own delay.": "Gilt für Frames ohne eigene Anzeigedauer.",
    "Playback": "Wiedergabe",
    "Reverse": "Rückwärts",
    "Boomerang": "Bumerang",
    "Looping": "Wiederholung",
    "Loop forever": "Endlos wiederholen",
    "Play once": "Einmal abspielen",
    "Repeat a set number of times": "Bestimmte Anzahl wiederholen",
    "Number of repeats": "Anzahl der Wiederholungen",
    "Max size (longest side)": "Maximale Größe (längste Seite)",
    "Custom max size in pixels": "Eigene Maximalgröße in Pixeln",
    "Fit": "Anpassung",
    "Contain keeps the whole frame (may add margins). Cover fills the canvas (may crop). Stretch distorts to fill exactly.":
      "Einpassen zeigt den ganzen Frame (eventuell mit Rändern). Füllen deckt die Fläche ab (eventuell mit Beschnitt). Strecken verzerrt das Bild, bis es genau passt.",
    "Colours": "Farben",
    "GIF stores at most 256 colours. Lowering this shrinks the file; flat graphics survive it far better than photos.":
      "GIF speichert höchstens 256 Farben. Weniger Farben verkleinern die Datei; flächige Grafiken vertragen das viel besser als Fotos.",
    "Background (behind transparent areas)": "Hintergrund (hinter transparenten Bereichen)",
  },
};

export default content;
