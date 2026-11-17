import type { ToolPageContent } from "@/content/tools/types";

/**
 * German copy for /de/biometrisches-passbild. Target query „Biometrisches
 * Passbild“ (33.1K/mo, Germany, Nov 2026), secondary „Passbild erstellen“,
 * „Passfoto“, „Bewerbungsfoto“. Facts kept to what the English page states
 * (35 × 45 mm, head about two-thirds to three-quarters of the height, 300 DPI,
 * print sheets), plus one German fact stated plainly: since 01.05.2025 photos
 * for the German Personalausweis and Reisepass are only accepted digitally
 * (taken at the authority or sent by a certified photographer — E-Passbild),
 * so the copy does NOT claim the output is accepted there; it points to visas,
 * other documents, printing and checking a photo. Framing, sizing and print
 * sheets run in the browser; only the optional background change uses the
 * server, and the copy says so.
 */
const content: ToolPageContent = {
  toolId: "passport-photo-maker",
  locale: "de",
  name: "Biometrisches Passbild erstellen",
  seoName: "Passbild-Generator",
  tagline:
    "Erstellen Sie Pass-, Visum- und Ausweisfotos zu Hause: Das Gesicht wird automatisch auf das benötigte Format zugeschnitten – 35 × 45 mm, 2 × 2 Zoll, 3 × 4 cm und mehr –, und Sie erhalten ein Foto mit 300 DPI plus einen Druckbogen mit mehreren Kopien. Kostenlos und privat in Ihrem Browser.",
  category: { id: "edit", label: "Bearbeiten & Erstellen" },
  variantsHeading: "Pass- und Ausweisfoto-Größen",

  metaTitle: "Biometrisches Passbild erstellen – 35 × 45 mm | oMyImage",
  metaDescription:
    "Biometrisches Passbild im Format 35 × 45 mm erstellen: Gesicht automatisch ausrichten, Hintergrund weiß machen, Druckbogen mit 300 DPI. Passfoto kostenlos.",

  intro:
    "Ein biometrisches Passbild ist vor allem eine Frage der Geometrie: das richtige Format, der Kopf in der richtigen Höhe, der richtige Abstand darüber. Diese Geometrie übernimmt das Tool für Sie. Laden Sie ein scharfes Foto von vorn hoch, wählen Sie das Dokumentformat, und es findet das Gesicht, richtet Kopf und Schultern in den Proportionen aus, die Passbildregeln vorgeben, und erzeugt ein druckfertiges JPG mit 300 DPI. Sie können den Ausschnitt feinjustieren, den Hintergrund auf schlichtes Weiß oder eine andere Farbe ändern, die Datei unter einem KB-Limit für Online-Formulare halten und einen Druckbogen im Format 10 × 15 cm oder A4 mit so vielen Kopien herunterladen, wie darauf passen. Wichtig für Deutschland: Für Personalausweis und Reisepass wird das Foto seit dem 1. Mai 2025 nur noch digital angenommen – mehr dazu unten.",

  sections: [
    {
      heading: "Personalausweis und Reisepass: das E-Passbild seit 2025",
      id: "e-passbild",
      body: [
        "Seit dem 01.05.2025 nehmen deutsche Pass- und Ausweisbehörden für Personalausweis und Reisepass keine Papierfotos mehr an. Das Lichtbild wird entweder direkt bei der Behörde aufgenommen oder von einem dafür zertifizierten Fotografen digital erstellt und über einen gesicherten Weg an die Behörde übermittelt (E-Passbild). Ein Foto, das Sie zu Hause erstellen und ausdrucken oder hochladen, wird für diese beiden Dokumente daher nicht akzeptiert – auch nicht von diesem Tool.",
        "Wofür sich das Tool trotzdem eignet: Visumanträge anderer Länder, die eigene Fotos verlangen (etwa 35 × 45 mm oder 2 × 2 Zoll für die USA), Dokumente und Ausweise, bei denen die ausstellende Stelle weiterhin ein Papier- oder Dateifoto annimmt, Studierenden-, Firmen- und Mitgliedsausweise, Bewerbungsfotos und Online-Formulare mit Fotoupload. Und es hilft, ein vorhandenes Passfoto zu prüfen: Sitzt der Kopf in der richtigen Höhe, stimmt das Format? Welche Regeln für Ihr Dokument gelten, erfahren Sie immer bei der zuständigen Stelle.",
      ],
    },
    {
      heading: "Passbild-Größen nach Land",
      id: "sizes",
      body: [
        "Deutschland und die übrigen EU- und Schengen-Staaten, Großbritannien, Indien, Russland und Australien verwenden für Passfotos 35 × 45 mm (3,5 × 4,5 cm); der Kopf füllt dabei etwa zwei Drittel bis drei Viertel der Bildhöhe. Die USA verwenden 2 × 2 Zoll (51 × 51 mm) für Pässe und Visa, und Indien nutzt dasselbe 2 × 2-Zoll-Format für Visa und OCI-Karten. Brasilien und Indonesien verwenden für die meisten Dokumente 3 × 4 cm; Indonesien zusätzlich 2 × 3 und 4 × 6 cm. Kanadas Passfoto misst 50 × 70 mm, das Visumfoto für China 33 × 48 mm.",
        "Regeln ändern sich und unterscheiden sich zwischen Pass, Visum und Prüfungsformular. Sehen Sie diese Liste daher als Ausgangspunkt und prüfen Sie die aktuellen Vorgaben für Ihr Dokument. Alle genannten Formate sind im Tool enthalten; wählen Sie das, das Ihr Formular nennt.",
      ],
    },
    {
      heading: "So funktioniert der automatische Zuschnitt",
      id: "framing",
      body: [
        "Ein Modell zur Gesichtserkennung findet das Gesicht in Ihrem Foto – auf Ihrem Gerät, ohne Upload. Aus der Position des Gesichts schätzt das Tool den ganzen Kopf, vom Scheitel bis zum Kinn, und skaliert den Ausschnitt so, dass der Kopf den Anteil der Bildhöhe einnimmt, den Passbildregeln verlangen – horizontal zentriert und mit etwas mehr Platz über dem Kopf als an den Seiten.",
        "Frisuren, Kopfbedeckungen und ungewöhnliche Winkel können die Schätzung leicht verfälschen, prüfen Sie also die Vorschau. Der Regler Kopfgröße macht den Kopf größer oder kleiner, die Positionsregler verschieben den Ausschnitt, und Ausschnitt zurücksetzen stellt das automatische Ergebnis wieder her.",
      ],
    },
    {
      heading: "Ein Foto, das den Regeln entspricht",
      id: "taking",
      body: [
        "Stellen Sie sich etwa einen Meter vor eine schlichte, helle Wand, blicken Sie gerade in die Kamera und sorgen Sie für gleichmäßiges Licht auf dem Gesicht – Tageslicht von einem Fenster vor Ihnen funktioniert gut, hartes Licht von oben nicht. Behalten Sie einen neutralen Gesichtsausdruck mit geschlossenem Mund und beiden Augen offen, und nehmen Sie die Brille ab, wenn die Regeln für Ihr Dokument das verlangen (viele tun das inzwischen).",
        "Lassen Sie das Foto von jemand anderem aus etwa 1,5 Metern Entfernung machen, statt ein Selfie mit ausgestrecktem Arm aufzunehmen, das das Gesicht verzerrt. Machen Sie mehrere Aufnahmen und wählen Sie die schärfste: Den Ausschnitt können Sie hier korrigieren, die Schärfe nicht.",
      ],
    },
    {
      heading: "In der richtigen Größe drucken",
      id: "printing",
      body: [
        "Das Foto wird mit 300 DPI gespeichert, der Auflösung, die Fotolabore und Fotodrucker erwarten. So wird es exakt im Dokumentformat gedruckt – ein 35 × 45 mm großes Foto hat 413 × 531 Pixel. Der Druckbogen platziert so viele Kopien, wie auf Fotopapier im Format 10 × 15 cm (4 × 6 Zoll) oder auf A4 passen, mit dünnen grauen Schnittlinien.",
        "Drucken Sie den Bogen mit 100 % („Tatsächliche Größe“), nicht „An Seite anpassen“, sonst werden die Fotos etwas zu klein. Ein Abzug in 10 × 15 cm ist an den meisten Fotoautomaten und im Drogeriemarkt die günstigste Option und fasst mehrere Fotos im Format 35 × 45 mm.",
      ],
    },
    {
      heading: "Fotos für Online-Anträge",
      id: "online",
      body: [
        "Online-Formulare für Prüfungen, Bewerbungen, Visa und Ausweise verlangen meist ein JPG unter einer bestimmten Dateigröße – oft 50 KB, 100 KB oder 200 KB. Tragen Sie das Limit unter Maximale Dateigröße ein, und das heruntergeladene Foto bleibt darunter. Die Druckgröße stimmt auch dann, wenn Pixel reduziert werden müssen, weil die DPI-Angabe entsprechend angepasst wird.",
      ],
    },
  ],

  howToTitle: "So erstellen Sie ein Passbild",
  steps: [
    { title: "Porträt hochladen", description: "Wählen Sie ein scharfes Foto von vorn – als JPG, PNG oder WEBP." },
    { title: "Format wählen", description: "Wählen Sie das Format Ihres Dokuments; das Gesicht wird automatisch ausgerichtet, und Sie können nachjustieren." },
    { title: "Foto oder Bogen herunterladen", description: "Speichern Sie das einzelne Foto mit 300 DPI oder einen Druckbogen in 10 × 15 cm oder A4 mit mehreren Kopien." },
  ],

  features: [
    { icon: "badge", title: "Automatischer Zuschnitt", description: "Die Gesichtserkennung skaliert und zentriert den Kopf so, wie Passbildregeln es verlangen, in allen gängigen Dokumentformaten." },
    { icon: "grid_view", title: "Druckbögen", description: "So viele Kopien, wie auf Fotopapier 10 × 15 cm oder A4 passen, mit Schnittlinien, in 300 DPI." },
    { icon: "lock", title: "Standardmäßig privat", description: "Zuschnitt und Druckbogen entstehen in Ihrem Browser; nur ein optionaler Hintergrundwechsel nutzt unseren Server." },
  ],

  faqs: [
    { q: "Welche Größe hat ein biometrisches Passbild?", a: "In Deutschland, der EU, Großbritannien, Indien und vielen anderen Ländern 35 × 45 mm (3,5 × 4,5 cm), wobei der Kopf etwa zwei Drittel bis drei Viertel der Bildhöhe ausfüllt. Die USA verwenden 2 × 2 Zoll (5,1 × 5,1 cm), Brasilien und Indonesien für die meisten Dokumente 3 × 4 cm." },
    { q: "Kann ich das Foto für meinen Personalausweis oder Reisepass verwenden?", a: "Nein. Seit dem 01.05.2025 werden Fotos für den deutschen Personalausweis und Reisepass nur noch digital angenommen – aufgenommen direkt bei der Behörde oder von einem zertifizierten Fotografen übermittelt. Ein selbst erstelltes Foto, ob ausgedruckt oder als Datei, wird dort nicht akzeptiert. Für Visa anderer Länder, andere Ausweise und Bewerbungen können Sie es nutzen, sofern die jeweilige Stelle eigene Fotos annimmt." },
    { q: "Wie viele Pixel hat ein Passbild?", a: "Bei der üblichen Druckauflösung von 300 DPI hat ein Foto mit 35 × 45 mm 413 × 531 Pixel und eines mit 2 × 2 Zoll 600 × 600 Pixel. Das Tool speichert genau diese Größen." },
    { q: "Kann ich den Hintergrund weiß machen?", a: "Ja. Wählen Sie unter Hintergrund die Option Farbe ändern; die Person wird freigestellt und auf Weiß oder eine Farbe Ihrer Wahl gesetzt. Dieser Schritt nutzt einen KI-Durchlauf auf unserem Server." },
    { q: "Wie drucke ich mehrere Passbilder auf einen Bogen?", a: "Laden Sie den Druckbogen in 10 × 15 cm oder A4 herunter und drucken Sie ihn in 100 % Größe. Ein Bogen in 10 × 15 cm fasst mehrere Fotos im Format 35 × 45 mm, mit grauen Schnittlinien." },
    { q: "Kann ich ein Passfoto unter 50 KB für ein Online-Formular erstellen?", a: "Ja. Tragen Sie vor dem Herunterladen 50 unter Maximale Dateigröße ein; das Foto bleibt unter 50 KB, und die Druckgröße stimmt weiterhin." },
    { q: "Wird mein Foto akzeptiert?", a: "Das Tool sorgt für das richtige Format und den richtigen Zuschnitt. Beleuchtung, Gesichtsausdruck, Brille, Kopfhaltung und das Alter des Fotos sind Regeln, die Sie beim Fotografieren erfüllen müssen – prüfen Sie die Vorgaben Ihres Dokuments. Ob eine Stelle selbst erstellte Fotos überhaupt annimmt, entscheidet sie selbst." },
    { q: "Wird mein Foto hochgeladen?", a: "Nein – Gesichtserkennung, Zuschnitt und Druckbogen laufen in Ihrem Browser. Nur wenn Sie den Hintergrund ändern, wird das Foto an unseren Server gesendet, wo der Freisteller innerhalb einer Stunde automatisch gelöscht wird." },
    { q: "Kann ich ein Selfie verwenden?", a: "Besser nicht. Ein Smartphone mit ausgestrecktem Arm verzerrt das Gesicht, und die meisten Regeln verlangen ein Foto aus etwa 1,5 m Entfernung. Bitten Sie jemanden, das Foto zu machen, oder nutzen Sie Selbstauslöser und Stativ." },
    { q: "Kann ich damit ein Bewerbungsfoto erstellen?", a: "Ja. Für eine Bewerbung gibt es kein vorgeschriebenes Format; der Zuschnitt auf 35 × 45 mm oder 3 × 4 cm mit ruhigem, einfarbigem Hintergrund wirkt aber sauber und lässt sich gut in einen Lebenslauf einfügen. Setzen Sie bei Bedarf eine Dateigröße für Online-Bewerbungsportale." },
  ],

  security:
    "Gesichtserkennung, Zuschnitt, Größenänderung und Druckbögen laufen vollständig in Ihrem Browser – das Foto verlässt Ihr Gerät nicht. Wenn Sie den Hintergrund ändern, wird das Foto einmal über eine verschlüsselte Verbindung an unsere Engine zur Hintergrundentfernung (rembg) gesendet, und das Ergebnis wird innerhalb einer Stunde automatisch gelöscht.",

  ui: {
    // PassportPhotoTool.tsx — document sizes (module scope)
    "35 × 45 mm — passport: India, UK, EU, Russia": "35 × 45 mm – Pass und Visum: EU, UK, Indien, Russland",
    "2 × 2 in (51 × 51 mm) — US passport and visa": "2 × 2 Zoll (51 × 51 mm) – Pass und Visum USA",
    "3 × 4 cm — documents: Brazil, Indonesia": "3 × 4 cm – Dokumente: Brasilien, Indonesien",
    "4 × 6 cm — pas foto (Indonesia)": "4 × 6 cm – Dokumente (Indonesien)",
    "2 × 3 cm — pas foto (Indonesia)": "2 × 3 cm – Dokumente (Indonesien)",
    "5 × 7 cm — document photo (Brazil)": "5 × 7 cm – Dokumentfoto (Brasilien)",
    "33 × 48 mm — China visa": "33 × 48 mm – Visum China",
    "50 × 70 mm — Canada passport": "50 × 70 mm – Pass Kanada",
    "2 × 2 in": "2 × 2 Zoll",
    // PassportPhotoTool.tsx
    "Select a photo": "Foto auswählen",
    "Please select an image.": "Bitte wählen Sie ein Bild aus.",
    "or drop a JPG, PNG or WEBP portrait here": "oder ein Porträt als JPG, PNG oder WEBP hier ablegen",
    "Change image": "Bild ändern",
    "Clear image": "Bild entfernen",
    "No face found — the photo is centred instead. Use the controls to frame it.": "Kein Gesicht gefunden – das Foto wurde stattdessen zentriert. Richten Sie es mit den Reglern aus.",
    "Could not read this image.": "Dieses Bild konnte nicht gelesen werden.",
    "Processing failed.": "Die Verarbeitung ist fehlgeschlagen.",
    "Looking for the face…": "Gesicht wird gesucht…",
    "Printed size: {size} at 300 DPI ({px})": "Druckgröße: {size} bei 300 DPI ({px})",
    "The photo has little room above the head, so the frame was moved to fit. Changing the background restores the usual spacing.": "Über dem Kopf ist wenig Platz, deshalb wurde der Ausschnitt verschoben. Ein Hintergrundwechsel stellt den üblichen Abstand wieder her.",
    "Preview": "Vorschau",
    "Photo settings": "Foto-Einstellungen",
    "Document size": "Dokumentformat",
    "Head size": "Kopfgröße",
    "Move left / right": "Nach links / rechts verschieben",
    "Move up / down": "Nach oben / unten verschieben",
    "Reset framing": "Ausschnitt zurücksetzen",
    "Background": "Hintergrund",
    "Keep original": "Original behalten",
    "Change colour": "Farbe ändern",
    "Removing background…": "Hintergrund wird entfernt…",
    "Background colour": "Hintergrundfarbe",
    "Max file size (optional)": "Maximale Dateigröße (optional)",
    "KB": "KB",
    "For forms with a limit such as 50 KB. Leave empty for the best quality.": "Für Formulare mit Limit, etwa 50 KB. Leer lassen für beste Qualität.",
    "Original: {size}": "Original: {size}", // i18n-same
    "Changing the background uses one AI run on our server; everything else stays in your browser.": "Ein Hintergrundwechsel nutzt einen KI-Durchlauf auf unserem Server; alles andere bleibt in Ihrem Browser.",
    "Download photo": "Foto herunterladen",
    "Saving…": "Wird gespeichert…",
    "Download 4×6 in print sheet ({n} photos)": "Druckbogen 10 × 15 cm herunterladen ({n} Fotos)",
    "Download A4 print sheet ({n} photos)": "Druckbogen A4 herunterladen ({n} Fotos)",
    "Could not get under {size} — the smallest file is used.": "Unter {size} war nicht möglich – die kleinstmögliche Datei wird verwendet.",
  },
};

export default content;
