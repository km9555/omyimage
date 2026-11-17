import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/instagram-grid-erstellen (variant of split-image,
 * preset mode "instagram").
 *
 * Primary query "Instagram Grid" (DE); secondary "Instagram Raster",
 * "Instagram Karussell", "Foto für Instagram teilen". Facts as in the English
 * page: profile grid shows 3:4 thumbnails, three per row, newest top-left
 * (since January 2025); feed photos are stored 1080 px wide.
 */
const content: ToolPageContent = {
  toolId: "instagram-grid-maker",
  locale: "de",
  name: "Instagram Grid erstellen",
  tagline:
    "Machen Sie aus einem Foto ein nahtloses Instagram-Profilraster — 3, 6, 9 oder bis zu 15 Beiträge — oder ein Panorama-Karussell, das beim Wischen weiterläuft. Auf die Instagram-Formate zugeschnitten, mit 1080 px Breite und in der Reihenfolge zum Posten nummeriert.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },

  metaTitle: "Instagram Grid erstellen – Raster & Karussell | oMyImage",
  metaDescription:
    "Instagram Grid erstellen: Foto in ein Instagram Raster mit 3–15 Beiträgen oder ein Karussell teilen, 1080 px, nummeriert zum Posten. Kostenlos, ohne Upload.",

  intro:
    "Ein Instagram Grid ist ein großes Bild, das auf mehrere Instagram-Beiträge verteilt wird: Ihr Profil zeigt es als Ganzes, während jeder Beitrag im Feed für sich steht. Von Hand heißt das: auf ein ungewöhnliches Format zuschneiden, das Foto in exakte Drittel zerlegen, jedes Teil skalieren und daran denken, alles rückwärts hochzuladen. Dieses Tool erledigt all das: Wählen Sie die Zahl der Zeilen und das Beitragsformat, ziehen Sie das Foto in den gewünschten Ausschnitt und laden Sie die Beiträge herunter — bereits in der Reihenfolge nummeriert, in der Sie sie teilen. Außerdem erstellt es nahtlose Karussells — ein breites Panorama, in Slides geschnitten, die beim Wischen aneinander anschließen.",

  sections: [
    {
      heading: "So funktioniert das Profilraster",
      id: "profile-grid",
      body: [
        "Ihr Profil zeigt Beiträge zu dritt pro Zeile, die neuesten zuerst, beginnend oben links. Seit Januar 2025 sind die Vorschaubilder hohe 3:4-Rechtecke statt Quadrate. Schneiden Sie ein Bild in drei Spalten, posten Sie die Teile in der richtigen Reihenfolge, und das Profil zeigt es als ein Bild.",
        "Eine Zeile braucht 3 Beiträge, zwei Zeilen 6, drei Zeilen 9. Dieses Tool geht bis zu fünf Zeilen — 15 Beiträge —, ungefähr so viel, wie ein Profil auf dem Handy ohne Scrollen zeigt.",
      ],
    },
    {
      heading: "Welches Beitragsformat Sie wählen sollten",
      id: "shapes",
      body: [
        "3:4 (1080 × 1440 Pixel) ist das Format der Vorschaubilder im Raster — was Sie in der Vorschau sehen, zeigt Ihr Profil also exakt so, ohne verlorene Übergänge zwischen den Beiträgen. 4:5 (1080 × 1350) ist der klassische hohe Feed-Beitrag; das Raster schneidet davon an jeder Seite etwa 3 % ab, die Übergänge springen also ganz leicht. Quadratische 1:1-Beiträge verlieren im Raster an jeder Seite ein Achtel ihrer Breite, was bei Linien, die von Beitrag zu Beitrag laufen, auffällt.",
        "Wählen Sie 3:4, außer Ihre Instagram-App schneidet 3:4-Fotos beim Hochladen auf 4:5 zu — dann nehmen Sie 4:5, das jede Version der App unbeschnitten akzeptiert.",
      ],
    },
    {
      heading: "In der richtigen Reihenfolge posten",
      id: "order",
      body: [
        "Weil der neueste Beitrag oben links erscheint, wird das Puzzle rückwärts gepostet: Teil 1 ist die untere rechte Ecke und kommt zuerst, das Teil oben links kommt zuletzt. Die Dateien sind entsprechend nummeriert — foto_post-01.jpg, foto_post-02.jpg und so weiter —, und die Vorschau zeigt dieselben Nummern auf jedem Teil.",
        "Posten Sie alle in einem Rutsch und halten Sie spätere Beiträge in Dreiergruppen: Ein einzelner zusätzlicher Beitrag verschiebt jedes Teil um einen Platz und zerstört das Bild. Angeheftete Beiträge stehen immer auf den ersten Plätzen des Rasters — lösen Sie sie also während des Postens oder heften Sie eine ganze Dreierreihe an.",
      ],
    },
    {
      heading: "Nahtlose Karussells",
      id: "carousel",
      body: [
        "Wählen Sie „Karussell“, um ein breites Bild in 2 bis 10 Slides in einer einzigen Reihe zu schneiden. Fügen Sie sie in der Reihenfolge der Nummern einem Beitrag hinzu; beim Wischen setzt jede Slide genau dort an, wo die vorige endete, sodass eine Landschaft, ein Gruppenfoto oder ein langes Banner wie ein durchgehendes Bild wirkt. 4:5-Slides füllen auf dem Handy den meisten Bildschirm; quadratische Slides passen zu breiten Panoramen, die sonst sehr viele Slides bräuchten.",
      ],
    },
    {
      heading: "Den Bildausschnitt wählen",
      id: "framing",
      body: [
        "Das ganze Raster hat ein festes Format — drei 3:4-Beiträge nebeneinander und drei Zeilen untereinander ergeben ein 3:4-Hochformat, eine einzelne Dreierreihe dagegen einen breiten 9:4-Streifen —, die meisten Fotos haben also mehr Bild, als hineinpasst. Der Teil außerhalb des Rasters ist in der Vorschau abgedunkelt. Ziehen Sie das Foto oder nutzen Sie die Positionsregler, um auszuwählen, was in die Beiträge kommt, und halten Sie Gesichter und Schrift von den Schnittlinien fern, wo sie auf zwei Beiträge verteilt würden.",
      ],
    },
    {
      heading: "Größe und Qualität",
      id: "quality",
      body: [
        "Jeder Beitrag kommt mit 1080 Pixel Breite heraus — der Breite, in der Instagram Feed-Fotos speichert —, damit die App sie nicht noch einmal verkleinert. Ein Foto mit weniger Pixeln behält seine eigene Auflösung, statt vergrößert zu werden. Standardmäßig werden die Beiträge als JPG mit 92 % Qualität gespeichert; Instagram komprimiert jeden Upload ohnehin neu, eine höhere Einstellung fällt daher selten auf. PNG steht bereit, wenn Sie lieber unveränderte Pixel übergeben.",
      ],
    },
    {
      heading: "Ideen für Grid-Beiträge",
      id: "ideas",
      body: [
        "Marken nutzen ein Raster, um einen Launch oder einen Sale mit einem markanten Bild anzukündigen, das das ganze Profil übernimmt. Fotografen posten eine einzelne Landschaft über eine Dreierreihe. Künstlerinnen enthüllen eine große Zeichnung Stück für Stück über einen Tag. Veranstalter machen aus einem Plakat ein 3 × 3, das niemand übersieht, und Reisende erstellen ein Karussell aus einem ganzen Panorama, statt es passend zuzuschneiden.",
      ],
    },
    {
      heading: "Datenschutz",
      id: "privacy",
      body: [
        "Ihr Foto wird vollständig in Ihrem Browser geschnitten und skaliert. Nichts wird auf unsere Server hochgeladen, und nichts wird aufbewahrt, nachdem Sie die Seite schließen.",
      ],
    },
  ],

  howToTitle: "So erstellen Sie ein Instagram Grid",
  steps: [
    { title: "Foto hinzufügen", description: "Wählen Sie ein JPG-, PNG- oder WEBP-Bild aus." },
    { title: "Raster einrichten", description: "Wählen Sie die Zahl der Zeilen und das Beitragsformat und ziehen Sie das Foto in den gewünschten Ausschnitt." },
    { title: "Herunterladen und posten", description: "Klicken Sie auf „Grid erstellen“ und posten Sie die Teile in der Reihenfolge der Nummern, 1 zuerst." },
  ],

  features: [
    { icon: "photo_library", title: "Raster oder Karussell", description: "Ein Profilraster mit drei Spalten und bis zu 15 Beiträgen oder ein Karussell mit bis zu 10 Slides." },
    { icon: "check", title: "Nummeriert zum Posten", description: "Dateien und Vorschau zeigen die Reihenfolge, in der Sie posten." },
    { icon: "lock", title: "Kein Upload", description: "Wird vollständig in Ihrem Browser erstellt." },
  ],

  faqs: [
    { q: "Wie erstelle ich einen Grid-Post auf Instagram?", a: "Foto hinzufügen, Zeilen und Format wählen, auf „Grid erstellen“ klicken und die Teile dann in der Reihenfolge der Nummern posten, beginnend mit 1." },
    { q: "Welches Teil poste ich zuerst?", a: "Nummer 1 — das Teil unten rechts. Das Teil oben links kommt zuletzt, weil Instagram den neuesten Beitrag zuerst zeigt." },
    { q: "Wie groß ist jeder Beitrag?", a: "1080 × 1440 px bei 3:4, 1080 × 1350 px bei 4:5 und 1080 × 1080 px bei quadratisch — oder kleiner, wenn Ihr Foto weniger Pixel hat." },
    { q: "Soll ich 3:4 oder 4:5 nehmen?", a: "3:4 entspricht exakt dem Profilraster. Nehmen Sie 4:5, wenn Ihre App 3:4-Fotos beim Hochladen zuschneidet." },
    { q: "Wie viele Beiträge kann ein Instagram Raster haben?", a: "Drei pro Zeile, von einer Zeile (3 Beiträge) bis zu fünf Zeilen (15 Beiträge)." },
    { q: "Warum sieht mein Grid kaputt aus?", a: "Meist hat ein angehefteter Beitrag oder ein späterer Einzelbeitrag es verschoben. Lösen Sie angeheftete Beiträge während des Postens und fügen Sie neue Beiträge in Dreiergruppen hinzu." },
    { q: "Was ist ein nahtloses Karussell?", a: "Ein breites Bild, in die Slides eines einzigen Beitrags geschnitten, sodass es beim Wischen über die Slides hinweg weiterläuft." },
    { q: "Wie viele Karussell-Slides kann ich erstellen?", a: "Zwischen 2 und 10, im Format 4:5 oder quadratisch." },
    { q: "Kann ich wählen, welcher Teil des Fotos verwendet wird?", a: "Ja. Ziehen Sie das Foto in der Vorschau oder nutzen Sie die Positionsregler; der abgedunkelte Teil bleibt außen vor." },
    { q: "Verschlechtert Instagram die Qualität?", a: "Instagram komprimiert jeden Upload neu, aber Beiträge mit 1080 Pixel Breite werden nicht noch einmal skaliert, was sie so scharf wie möglich hält." },
    { q: "Wird mein Foto hochgeladen?", a: "Nein. Alles geschieht in Ihrem Browser." },
    { q: "Funktioniert das am Handy?", a: "Ja. Laden Sie die ZIP herunter, öffnen Sie sie in der Dateien-App Ihres Handys und teilen Sie die Beiträge von dort aus auf Instagram." },
    { q: "Ist das kostenlos?", a: "Ja. Kein Konto, kein Wasserzeichen und keine Limits." },
  ],

  security:
    "Ihr Foto wird vollständig in Ihrem Browser geschnitten und skaliert. Nichts wird hochgeladen, gespeichert oder getrackt.",
};

export default content;
