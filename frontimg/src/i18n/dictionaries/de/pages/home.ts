/**
 * German home page — HomeShell, HomeLauncher and ToolDirectory, which render
 * only on `/de`. Loaded with that route through HomeShell's <I18nScope>, so
 * this prose is not bundled on every page (common.ts is).
 *
 * The H1 keeps "oMyImage" verbatim (Google's OAuth review matches it against
 * the consent screen) and pairs it with the German head terms instead of a
 * translation of the English brand line: Bilder kostenlos bearbeiten,
 * komprimieren, umwandeln, Hintergrund entfernen — online, ohne Anmeldung.
 * "drive.file" is an OAuth scope identifier and is never translated.
 */
export const deHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser": "Kostenlose Tools – die meisten laufen direkt im Browser",
  "Effortless Power for Image Workflows.": "Bilder kostenlos online bearbeiten.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "Mit oMyImage Bilder komprimieren, umwandeln, zuschneiden, die Bildgröße ändern oder den Hintergrund entfernen – kostenlos, online und ohne Anmeldung.",
  "Step 1 · Upload your images": "Schritt 1 · Bilder hochladen",
  "Add images": "Bilder hinzufügen",
  "Drag & drop images or click to browse": "Bilder hierher ziehen oder klicken, um sie auszuwählen",
  "+ More": "+ Weitere",
  "Remove {name}": "{name} entfernen",
  "Step 2 · Choose an action": "Schritt 2 · Aktion wählen",
  "Upload an image first": "Laden Sie zuerst ein Bild hoch",
  "Search an action, e.g. compress or resize": "Aktion suchen, z. B. komprimieren oder Größe ändern",
  "We can't process this file type yet.": "Diesen Dateityp können wir noch nicht verarbeiten.",
  "No matching action.": "Keine passende Aktion.",
  "Continue": "Weiter",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "Standardmäßig privat",
  "Most tools run in your browser, so your images never leave your device.":
    "Die meisten Tools laufen in Ihrem Browser – Ihre Bilder verlassen Ihr Gerät nicht.",
  "{n} free image tools": "{n} kostenlose Bildtools",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "Komprimieren, Größe ändern, umwandeln, bearbeiten und GIFs erstellen. Ohne Anmeldung.",
  "Google Drive import is optional": "Der Import aus Google Drive ist optional",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "oMyImage liest nur die Dateien, die Sie auswählen, und speichert nichts auf unseren Servern.",
  "How we use Google data": "Wie wir Google-Daten verwenden",
  "Favorites": "Favoriten",
  "No tools in {category} yet.": "In {category} gibt es noch keine Tools.",
  "Browse all image format converters": "Alle Bildformat-Konverter ansehen",
  "All tools": "Alle Tools",
  "Tool categories": "Tool-Kategorien",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "So funktioniert es",
  "Upload": "Hochladen",
  "Drop in your images or pick them from your device.":
    "Ziehen Sie Ihre Bilder hinein oder wählen Sie sie auf Ihrem Gerät aus.",
  "Transform": "Bearbeiten",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "Wählen Sie ein Tool und passen Sie die Einstellungen an. Die Arbeit erledigt Ihr Browser – nur aufwendigere Aufgaben laufen auf unseren Servern.",
  "Download|step": "Herunterladen",
  "Save the result to your device, ready to use.":
    "Speichern Sie das Ergebnis auf Ihrem Gerät – sofort einsatzbereit.",
  "About oMyImage": "Über oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "ist eine kostenlose Sammlung von Online-Bildtools für die alltägliche Arbeit mit Bildern. Hier können Sie Bilder an einem Ort komprimieren, die Bildgröße ändern, zuschneiden, drehen, umwandeln, mit einem Wasserzeichen versehen, bearbeiten und animieren: {n} Tools, jedes auf einer eigenen Seite, die genau eine Aufgabe gut erledigt.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "Die meisten Tools laufen vollständig in Ihrem Webbrowser: Ihr Bild wird auf Ihrem eigenen Gerät verarbeitet und nirgendwohin hochgeladen. Größere Dateien und die aufwendigeren KI-Tools werden auf unseren Servern verarbeitet und kurz nach Abschluss gelöscht. oMyImage ist kostenlos und funktioniert ohne Anmeldung.",
  "What you can do with oMyImage": "Was Sie mit oMyImage machen können",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "JPG-, PNG- und WebP-Bilder ohne sichtbaren Qualitätsverlust komprimieren",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Bildgröße ändern, zuschneiden, drehen und Rahmen hinzufügen – einzeln oder viele Bilder auf einmal",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Zwischen JPG, PNG, WebP, GIF, BMP, AVIF, HEIC und PDF umwandeln",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Bilder bearbeiten: Wasserzeichen, Schwarz-Weiß, Weichzeichner, Memes und ein vollständiger Editor",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "GIFs erstellen und bearbeiten: aus Bildern oder Videos, komprimieren, Größe ändern, kürzen, beschriften und in MP4 oder WebP umwandeln",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "Text per OCR erkennen, EXIF-Metadaten anzeigen oder entfernen, Farben aus Bildern aufnehmen",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "KI-Tools: Hintergrund entfernen, Bilder hochskalieren, Gesichter zum Schutz der Privatsphäre verpixeln",
  "How oMyImage uses your Google account": "Wie oMyImage Ihr Google-Konto verwendet",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Die Verbindung mit Google ist optional – jedes Tool auf oMyImage funktioniert auch ohne. Google wird für zwei Dinge verwendet: für die Anmeldung, falls Sie ein Konto anlegen möchten, und für den",
  "Import from Google Drive": "Import aus Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", mit dem Sie ein Bild auswählen, das bereits in Ihrem Drive liegt, statt es von Ihrem Gerät hochzuladen.",
  "When you use Drive import, oMyImage requests the":
    "Wenn Sie den Drive-Import nutzen, fordert oMyImage die Berechtigung",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "an. Sie gibt der App nur Zugriff auf genau die Dateien, die Sie in Googles eigener Dateiauswahl wählen – den Rest Ihres Drive kann sie weder sehen noch durchsuchen. Die gewählte Datei wird für das jeweilige Tool in Ihren Browser geladen, und das ist alles: oMyImage ändert oder löscht nichts in Ihrem Drive, speichert Ihre Google-Dateien nicht auf unseren Servern, verwendet keine Google-Nutzerdaten zum Training von KI-Modellen und verkauft oder teilt sie niemals mit Dritten.",
  "You can revoke access at any time from your": "Sie können den Zugriff jederzeit widerrufen – auf der",
  "Google Account permissions page": "Berechtigungsseite Ihres Google-Kontos",
  "Contact us": "Kontakt",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "Größen und Vorlagen",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "Abkürzungen zu den Tools oben, jede für eine bestimmte Aufgabe eingerichtet: ein Bild mit genau 50 KB, ein YouTube-Thumbnail, ein Passbild.",
  "Exact file size": "Exakte Dateigröße",
  "Hit the exact size a form or upload asks for":
    "Genau die Dateigröße erreichen, die ein Formular oder Upload verlangt",
  "PDF under a size limit": "PDF unter einer Größengrenze",
  "Scans and photos as a PDF that fits an upload cap":
    "Scans und Fotos als PDF, das in jedes Upload-Limit passt",
  "Passport & ID Photos": "Passbilder & Ausweisfotos",
  "Country-standard photo sizes, ready to print":
    "Passbildformate nach Landesnorm, fertig zum Drucken",
  "Social and print sizes": "Formate für Social Media und Druck",
  "Thumbnails, covers and print dimensions, ready to go":
    "Thumbnails, Titelbilder und Druckmaße, sofort einsatzbereit",
  "AI presets": "KI-Vorlagen",
  "Sharpen photos or swap the background in one click":
    "Bilder schärfen oder den Hintergrund mit einem Klick austauschen",
  "Quick edits": "Schnelle Bearbeitung",
  "Flip, split and other one-step jobs": "Spiegeln, teilen und andere Aufgaben in einem Schritt",
  "Take photo": "Foto aufnehmen",
  "Edit {name}": "{name} bearbeiten",
  "Add {tool} to favorites": "{tool} zu den Favoriten hinzufügen",
  "Remove {tool} from favorites": "{tool} aus den Favoriten entfernen",
  "Added to Favorites": "Zu den Favoriten hinzugefügt",
  "Removed from Favorites": "Aus den Favoriten entfernt",
  "Privacy Policy": "Datenschutzerklärung",
  "Terms of Service": "Nutzungsbedingungen",
  "KB": "KB", // i18n-same — the unit is written KB in German
  "MB": "MB", // i18n-same
};
