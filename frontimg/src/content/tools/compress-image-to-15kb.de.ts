import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/bild-auf-15kb-verkleinern (variant of compress-image,
 * preset targetKb 15). Primary query: „Bild auf 15 KB verkleinern“.
 * Angle: small-but-not-tiny — clean the signature first, and why low light
 * and grain eat a small budget.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-15kb",
  locale: "de",
  name: "Bild auf 15 KB verkleinern",
  tagline:
    "Komprimieren Sie eine Unterschrift oder ein kleines Foto auf unter 15 KB – für Prüfungs-, Bewerbungs- und Registrierungsformulare. Die deutlichste Version, die passt, berechnet in Ihrem Browser.",
  category: { id: "optimize", label: "Optimieren" },

  metaTitle: "Bild auf 15 KB verkleinern – kostenlos & online | oMyImage",
  metaDescription:
    "Bild auf 15 KB verkleinern: Unterschrift oder Passfoto als scharfes JPG unter 15 KB für Online-Formulare. Foto komprimieren im Browser, kostenlos, ohne Upload.",

  intro:
    "15 KB liegt zwischen den strengsten Limits für Unterschriften und den kleinsten Limits für Fotos, und Formulare nutzen den Wert für beides: das Unterschriftenfeld, ein kleines Fotofeld, manchmal einen eingescannten Daumenabdruck. Das genügt für eine saubere, lesbare Unterschrift und ein gut erkennbares Brustbild – sofern das Bild gut vorbereitet ist. Fügen Sie Ihres hinzu, und Sie erhalten ein JPG unter 15 KB in der höchsten Qualität, die passt.",

  sections: [
    {
      heading: "Was in 15 KB passt",
      id: "what-fits",
      body: [
        "Eine Unterschrift in dunkler Tinte auf weißem Papier passt mühelos, selbst bei einigen hundert Pixeln Breite, denn der größte Teil davon ist schlichtes Weiß. Ein Foto ist anspruchsvoller: Rechnen Sie bei einem Brustbild mit etwa 250 × 310 Pixeln – ungefähr die Größe, in der es auf einem Prüfungsausweis oder einem Antragsformular erscheint.",
        "Das Tool ermittelt die höchste JPG-Qualität unter 15 KB und verringert die Maße nur, wenn die Qualität allein nicht reicht. Die Ergebnisliste zeigt die neue Dateigröße jeder Datei und, falls sie sich geändert haben, die neuen Maße.",
      ],
    },
    {
      heading: "Zuerst die Unterschrift säubern",
      id: "clean-signature",
      body: [
        "Eine auf dem Schreibtisch fotografierte Unterschrift bringt graues Papier, einen Schatten und einen Streifen Tischplatte mit – lauter Details, die der Kompressor zu erhalten versucht. Schicken Sie sie vorher durch das Tool „Unterschrift skalieren“: Es macht das Papier reinweiß, die Tinte satt und entfernt leere Ränder. Eine bereinigte Unterschrift passt danach mit scharfen Kanten und Reserve unter 15 KB.",
        "Nennt das Formular für die Unterschrift zusätzlich genaue Pixelmaße, stellen Sie diese in „Unterschrift skalieren“ ein und wählen dort auch den KB-Bereich – beides erledigt sich in einem Schritt.",
      ],
    },
    {
      heading: "Wenig Licht kostet Bytes",
      id: "low-light",
      body: [
        "Ein abends in der Wohnung aufgenommenes Foto ist voller Bildrauschen – feine farbige Sprenkel, die die Kamera hinzufügt, wenn Licht fehlt. Für einen JPG-Kompressor ist dieses Rauschen Detail, und bei 15 KB belegt es Platz, den das Gesicht braucht. Dieselbe Pose am Fenster bei Tageslicht ergibt eine spürbar schärfere 15-KB-Datei.",
        "Haben Sie nur das verrauschte Foto, funktioniert die Kompression trotzdem; das Tool muss die Maße lediglich etwas stärker verringern, was das Rauschen nebenbei glättet.",
      ],
    },
    {
      heading: "Foto und Unterschrift für ein Formular",
      id: "one-form",
      body: [
        "Fügen Sie Foto und Unterschrift gemeinsam hinzu, und beide kommen in einem Durchgang unter 15 KB zurück. Erlaubt eines der Felder mehr – etwa ein Fotofeld mit 50 KB –, komprimieren Sie diese Datei erneut mit ihrem eigenen Limit, und zwar vom Original aus statt von der 15-KB-Kopie, damit sie so viel Detail behält, wie ihr Feld zulässt.",
      ],
    },
    {
      heading: "Ein Foto für ein 15-KB-Limit zuschneiden",
      id: "small-photo",
      body: [
        "Schneiden Sie von knapp über dem Haaransatz bis knapp unter die Schultern zu, mit dem Gesicht in der Mitte und den Augen etwa auf einem Drittel der Höhe. Das Gesicht sollte den Großteil des Bildes ausfüllen; jeder Zentimeter Wand oder Decke, der drinbleibt, ist Detail, das der Kompressor aus denselben 15 KB bezahlen muss.",
        "Ein eng zugeschnittenes Foto muss außerdem weniger verkleinert werden, um zu passen, sodass das verbleibende Gesicht mehr Pixel behält. Darum wirkt dasselbe Foto bei 15 KB deutlich schärfer, wenn es vorher zugeschnitten wurde, als wenn das ganze Bild unverändert komprimiert wird.",
      ],
    },
  ],

  howToTitle: "So verkleinern Sie ein Bild auf 15 KB",
  steps: [
    { title: "Bild hinzufügen", description: "Eine Unterschrift oder ein zugeschnittenes Foto – JPG, PNG oder WebP." },
    { title: "Unter 15 KB komprimieren", description: "Das Limit von 15 KB ist bereits eingestellt; Qualität und Größe sinken nur so weit wie nötig." },
    { title: "Herunterladen", description: "Laden Sie das JPG herunter und hängen Sie es an Ihr Formular an." },
  ],

  features: [
    { icon: "draw", title: "Unterschriften bleiben scharf", description: "Saubere Unterschriften passen mit klaren Kanten weit unter 15 KB." },
    { icon: "face", title: "Gut erkennbare Fotos", description: "Ein Brustbild behält in Ausweisgröße ein klares Gesicht." },
    { icon: "lock", title: "Privat", description: "Unterschriften und Fotos werden in Ihrem Browser komprimiert, auf Ihrem Gerät." },
  ],

  faqs: [
    { q: "Wie verkleinere ich ein Bild auf 15 KB?", a: "Fügen Sie es hier hinzu und klicken Sie auf „Komprimieren“ – das Limit von 15 KB ist bereits eingestellt. Sie erhalten ein JPG unter 15 KB in der besten Qualität, die passt." },
    { q: "Welche Fotogröße passt in 15 KB?", a: "Bei einem Brustbild etwa 250 × 310 Pixel; größere Fotos werden automatisch verkleinert, bis sie passen." },
    { q: "Sollte ich meine Unterschrift vor dem Komprimieren auf 15 KB säubern?", a: "Ja. „Unterschrift skalieren“ macht das Papier weiß und schneidet die Ränder ab, sodass die Unterschrift leicht passt und scharf bleibt." },
    { q: "Warum sieht ein Foto vom Abend bei 15 KB schlechter aus?", a: "Wenig Licht erzeugt Bildrauschen, und der Kompressor verbraucht Bytes, um es zu erhalten. Ein Tageslichtfoto desselben Gesichts wirkt bei gleicher Größe schärfer." },
    { q: "Kann ich Foto und Unterschrift zusammen auf 15 KB bringen?", a: "Ja. Fügen Sie beide hinzu; jede Datei kommt unter 15 KB zurück." },
    { q: "Was ist, wenn das Bild schon unter 15 KB liegt?", a: "Ist es bereits ein JPG unter dem Limit, wird es unverändert zurückgegeben." },
    { q: "Sind 15 KB dasselbe wie 0,015 MB?", a: "Ja, 15 KB sind 15.000 Bytes. Die Datei passt auch bei Formularen, die 1 KB als 1.024 Bytes zählen." },
    { q: "Wie schneide ich ein Foto für ein 15-KB-Limit am besten zu?", a: "Von knapp über den Haaren bis knapp unter die Schultern, Gesicht mittig und bildfüllend. Je enger der Ausschnitt, desto schärfer das Gesicht bei 15 KB." },
  ],

  security:
    "Unterschriften und Fotos werden auf Ihrem Gerät komprimiert, in Ihrem Browser. Nichts wird hochgeladen oder gespeichert. Nur ein Bild über etwa 16 Megapixel, zu groß für einen Browser-Tab, wird an unseren Server geschickt und nach etwa einer Stunde gelöscht.",
};

export default content;
