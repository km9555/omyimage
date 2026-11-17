import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/hintergrundfarbe-aendern (variant of remove-background:
 * rembg cut-out, then a colour composited in the browser). Target query
 * „Hintergrundfarbe ändern“ (2.9K/mo, Germany, Nov 2026), secondary
 * „Hintergrund ändern“ and „Hintergrund weiß machen“.
 */
const content: ToolPageContent = {
  toolId: "change-background-color",
  locale: "de",
  name: "Hintergrundfarbe ändern",
  tagline:
    "Ändern Sie den Hintergrund eines Fotos in Weiß, Blau, Rot oder jede beliebige Farbe. Die KI stellt Person oder Gegenstand frei, und Sie probieren Farben sofort aus – gemacht für Pass-, Ausweis- und Profilbilder.",
  category: { id: "ai", label: "Bild-KI" },

  metaTitle: "Hintergrundfarbe ändern – Hintergrund weiß machen | oMyImage",
  metaDescription:
    "Hintergrundfarbe ändern mit KI: Person freistellen und den Hintergrund weiß, blau, rot oder in jeder Farbe einfärben. Ideal für Bewerbungs- und Profilbilder.",

  intro:
    "Antragsformulare und Behörden sind bei einer Sache strenger als bei allen anderen: dem Hintergrund. Manche wollen schlichtes Weiß, manche Hellblau, manche Rot – und ein Foto vor der Küchenwand wird abgelehnt. Dieses Tool stellt die Person (oder ein Produkt) mit einem KI-Modell frei und setzt sie auf eine einfarbige Fläche Ihrer Wahl, sodass aus einem Foto von zu Hause ein brauchbares Ausweis- oder Profilbild wird. Das Freistellen geschieht einmal; danach ist der Wechsel zwischen Weiß, Blau, Rot oder einer eigenen Farbe sofort möglich und kostenlos. So können Sie den Hintergrund ändern oder einfach den Hintergrund weiß machen.",

  sections: [
    {
      heading: "Welche Farbe verlangen Formulare?",
      id: "colours",
      body: [
        "Weiß oder ein sehr helles Grau ist weltweit die häufigste Vorgabe für Pass- und Visumfotos, auch in Indien, den USA und Großbritannien. Hellblau ist bei manchen nationalen Ausweisen sowie Schüler- oder Mitarbeiterausweisen verbreitet. Rote oder blaue Hintergründe sind beim indonesischen pas foto Standard, wo die jeweilige Institution die Farbe festlegt.",
        "Halten Sie sich immer an die genaue Vorgabe für Ihr Dokument – dieses Tool liefert Ihnen die Farbe, kann aber nicht wissen, welche Ihre Behörde verlangt. Die vier Ausweisfarben oben in den Einstellungen sind ein Ausgangspunkt, darunter können Sie jede beliebige Farbe wählen.",
      ],
    },
    {
      heading: "So wird der Hintergrund ersetzt",
      id: "how",
      body: [
        "Zuerst findet ein KI-Segmentierungsmodell auf unserem Server das Motiv – die Person mit Haaren und Schultern oder das Produkt – und liefert es als Freisteller mit transparenter Umgebung zurück. Dann setzt Ihr Browser diesen Freisteller auf die gewählte Farbe und speichert ein JPG.",
        "Weil der zweite Schritt auf Ihrem Gerät passiert, läuft die KI beim Farbwechsel nicht erneut: Sie können Weiß, Blau und Rot in wenigen Sekunden vergleichen, und nur der erste Schritt zählt als KI-Durchlauf.",
      ],
    },
    {
      heading: "Saubere Kanten an den Haaren",
      id: "edges",
      body: [
        "Haare sind der schwierigste Teil jedes Freistellers. Fotografieren Sie die Person vor einem Hintergrund, der sich von ihren Haaren abhebt – eine helle Wand hinter dunklem Haar oder umgekehrt –, und vermeiden Sie Gegenlicht von einem Fenster, das die Haarkanten leuchten lässt.",
        "Achten Sie darauf, dass Schultern und Oberkopf vollständig im Bild sind, mit etwas Platz drumherum. Ein Freisteller kann keinen Teil des Kopfes rekonstruieren, den der ursprüngliche Bildausschnitt abgeschnitten hat, und Passbildregeln verlangen ohnehin meist einen Abstand über dem Kopf.",
      ],
    },
    {
      heading: "Nach dem Hintergrund",
      id: "next",
      body: [
        "Für Ausweisfotos gelten meist auch Größenvorgaben. Wenn der Hintergrund stimmt, schneiden Sie das Bild mit „Bild zuschneiden“ auf das geforderte Seitenverhältnis zu. Begrenzt das Formular die Dateigröße, bringen Sie das Bild auf einer der Seiten „Bild auf … KB verkleinern“ unter das Limit – Online-Formulare für Prüfungen und Behörden verlangen oft unter 50 KB oder 100 KB.",
      ],
    },
  ],

  howToTitle: "So ändern Sie die Hintergrundfarbe eines Fotos",
  steps: [
    { title: "Foto hochladen", description: "Wählen Sie ein JPG, PNG oder WEBP, auf dem die Person oder der Gegenstand gut zu sehen ist." },
    { title: "Hintergrund entfernen", description: "Klicken Sie auf Hintergrund ändern – die KI stellt das Motiv in wenigen Sekunden frei." },
    { title: "Farbe wählen & herunterladen", description: "Probieren Sie Weiß, Blau, Rot oder jede andere Farbe sofort aus und laden Sie dann das JPG herunter." },
  ],

  features: [
    { icon: "format_color_fill", title: "Jede Farbe, sofort", description: "Die Ausweisfarben Weiß, Blau und Rot mit einem Klick, dazu ein Farbwähler für jede andere – ohne zusätzlichen KI-Durchlauf pro Farbe." },
    { icon: "badge", title: "Gemacht für Ausweisfotos", description: "Ein sauberer Freisteller um Haare und Schultern auf der einfarbigen Fläche, die Formulare verlangen." },
    { icon: "verified_user", title: "Ohne Wasserzeichen", description: "Kostenlos nutzbar, ohne dass etwas auf das Ergebnis gestempelt wird." },
  ],

  faqs: [
    { q: "Wie mache ich den Hintergrund eines Fotos weiß?", a: "Laden Sie das Foto hoch und klicken Sie auf Hintergrund ändern. Weiß ist von Anfang an ausgewählt – sobald der Freisteller erscheint, können Sie das JPG mit weißem Hintergrund direkt herunterladen." },
    { q: "Kann ich den Hintergrund für ein Ausweisfoto blau oder rot machen?", a: "Ja. Tippen Sie nach dem Freistellen auf das blaue oder rote Farbfeld oder wählen Sie mit dem Farbwähler einen beliebigen Ton. Die Änderung erfolgt sofort." },
    { q: "Verbraucht ein Farbwechsel einen weiteren KI-Durchlauf?", a: "Nein. Nur der erste Schritt – das Motiv finden – läuft auf unserem Server. Weitere Farben probieren Sie danach in Ihrem Browser aus." },
    { q: "Erfüllt das Foto die Passbild-Vorgaben?", a: "Der Hintergrund wird einfarbig und gleichmäßig – das ist der Teil, den dieses Tool steuert. Größe, Kopfposition, Beleuchtung und Gesichtsausdruck sind eigene Vorgaben, die Sie für Ihr Dokument prüfen sollten. Für den deutschen Personalausweis und Reisepass wird das Foto seit dem 1. Mai 2025 digital bei der Behörde oder einem zertifizierten Fotografen aufgenommen." },
    { q: "Kann ich es für Produktfotos nutzen?", a: "Ja. Marktplätze verlangen oft einen rein weißen Hintergrund; das Tool stellt das Produkt frei und setzt es auf Weiß, genau wie bei einer Person." },
    { q: "Warum ist das Ergebnis ein JPG und kein PNG?", a: "Ein einfarbiger Hintergrund hat keine Transparenz, die erhalten werden müsste, und fast jedes Formular will JPG. Für einen transparenten Freisteller nutzen Sie stattdessen „Hintergrund entfernen“." },
    { q: "Wird mein Foto gespeichert?", a: "Nur kurz. Der Freisteller entsteht auf unserem Server, liegt hinter einem privaten Link und wird innerhalb einer Stunde automatisch gelöscht; die Farbe wird auf Ihrem Gerät angewendet." },
    { q: "Eignet sich das für Bewerbungsfotos?", a: "Ja. Ein ruhiger, einfarbiger Hintergrund – Weiß, ein helles Grau oder ein dezentes Blau – lässt ein Bewerbungs- oder LinkedIn-Foto professioneller wirken. Wählen Sie die Farbe mit dem Farbwähler und vergleichen Sie mehrere Töne, bevor Sie herunterladen." },
  ],

  security:
    "Die Hintergrundentfernung läuft auf unserem Server mit der quelloffenen Engine rembg; das Ergebnis liegt nur kurz hinter einem privaten Download-Link und wird innerhalb einer Stunde automatisch gelöscht. Die neue Farbe wird in Ihrem Browser angewendet, und nichts wird weitergegeben oder wiederverwendet.",
};

export default content;
