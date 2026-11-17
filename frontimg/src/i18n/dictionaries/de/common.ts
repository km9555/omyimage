/**
 * German SHARED chrome — strings rendered by components that appear on every
 * route (header, menus, footer, cookie banner, the tool workspace, result
 * screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.de.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `node scripts/i18n-keys.mjs de shared` report rather than retyping.
 *
 * Register and vocabulary (i18n-de-brief.md): the reader is addressed as
 * **Sie**; buttons are infinitives ("Herunterladen", "Hochladen",
 * "Komprimieren"); Bild / Bilder, Datei, hochladen, herunterladen, Gerät,
 * kostenlos, ohne Anmeldung, KI. German quotation marks „…“ are used inside
 * strings, never a bare ASCII double quote. German-German spelling (ß).
 */
export const deCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "Startseite",
  "Breadcrumb": "Brotkrümelnavigation",
  "More tools": "Weitere Tools",
  "{tool} features": "Funktionen von {tool}",
  "Security & privacy": "Sicherheit und Datenschutz",
  "Frequently asked questions": "Häufig gestellte Fragen",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "Tools", // i18n-same
  "Soon": "Bald",
  "Coming soon": "Demnächst",
  "{n} free tools — no sign-up required": "{n} kostenlose Tools — ohne Anmeldung",
  "New": "Neu",
  "Passport & ID Photos": "Passbilder und Ausweisfotos",
  "Passport & Signature": "Passbild und Unterschrift",
  "GIF Tools": "GIF-Tools",
  "Filters & Effects": "Filter und Effekte",
  "Browse all tools": "Alle Tools ansehen",
  "Browse tools": "Tools entdecken",
  "All tools": "Alle Tools",
  "Blog": "Blog", // i18n-same
  "Pricing": "Preise",
  "Language": "Sprache",
  "Select language": "Sprache auswählen",
  "More": "Mehr",
  "Open menu": "Menü öffnen",
  "Close menu": "Menü schließen",
  "Site menu": "Seitenmenü",
  "Credits": "Credits", // i18n-same
  "credits": "Credits",
  "Unlimited credits": "Unbegrenzte Credits",
  "{used} of {limit} premium runs used today": "Heute {used} von {limit} Premium-Nutzungen verbraucht",
  "Search tools…": "Tools durchsuchen…",
  "Search tools": "Tools durchsuchen",
  "Clear search": "Suche löschen",
  "No tools match “{query}”.": "Keine Tools für „{query}“ gefunden.",
  "Switch to light mode": "Zum hellen Modus wechseln",
  "Switch to dark mode": "Zum dunklen Modus wechseln",
  "Light mode": "Heller Modus",
  "Dark mode": "Dunkler Modus",
  "Help": "Hilfe",

  // Nav mega-menu / drawer sections (lib/nav-sections.ts — module scope, §4.2)
  "Optimize Image": "Bild optimieren",
  "Edit Image": "Bild bearbeiten",
  "Create": "Erstellen",
  "Image AI": "Bild-KI",
  "Privacy & Info": "Datenschutz und Infos",
  "Convert Format": "Format umwandeln",
  "Convert To & From": "Umwandeln von und nach",
  "Camera & Modern Formats": "Kamera und moderne Formate",

  // Navbar quick links + footer columns (module scope, §4.2)
  "Compress Image": "Bild komprimieren",
  "Resize Image": "Bildgröße ändern",
  "Crop Image": "Bild zuschneiden",
  "Rotate Image": "Bild drehen",
  "Convert to JPG": "In JPG umwandeln",
  "PNG to JPG": "PNG in JPG",
  "WEBP to PNG": "WebP in PNG",
  "HEIC to JPG": "HEIC in JPG",
  "Image to PDF": "Bild in PDF",
  "Watermark Image": "Wasserzeichen einfügen",
  "Image Editor": "Bild bearbeiten",
  "Meme Generator": "Meme Generator",
  "Remove Background": "Hintergrund entfernen",
  "Upscale Image": "Bildqualität verbessern",
  "Optimize": "Optimieren",
  "Convert": "Umwandeln",
  // CATEGORY_PILLS (lib/tool-categories.ts) labels, read by both the home page
  // and the dashboard, so they live here rather than in a page dictionary.
  "All": "Alle",
  "Edit & Create": "Bearbeiten und erstellen",
  "GIF": "GIF", // i18n-same
  "Edit & AI": "Bearbeiten und KI",
  "Contact": "Kontakt",
  "About": "Über uns",
  "Privacy Policy": "Datenschutzerklärung",
  "Terms of Service": "Nutzungsbedingungen",
  "Refund Policy": "Erstattungsrichtlinie",
  "Cookie Policy": "Cookie-Richtlinie",
  "Open-Source Licenses": "Open-Source-Lizenzen",
  "Free online image tools — fast, private, and no sign-up required.":
    "Kostenlose Online-Bildtools — schnell, privat und ohne Anmeldung.",
  "View Pricing →": "Preise ansehen →",
  "Need PDF tools? oMyPDF →": "PDF-Tools gesucht? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. Alle Rechte vorbehalten.",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "Anmelden",
  "Account": "Konto",
  "Account menu": "Kontomenü",
  "Signed in as": "Angemeldet als",
  "Dashboard": "Dashboard", // i18n-same
  "Admin": "Admin", // i18n-same
  "My Account": "Mein Konto",
  "Sign out": "Abmelden",
  "Show password": "Passwort anzeigen",
  "Hide password": "Passwort verbergen",
  "Unlimited AI runs": "Unbegrenzte KI-Nutzungen",
  "{n} AI runs per day": "{n} KI-Nutzungen pro Tag",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "Cookie-Einwilligung",
  "We value your privacy": "Ihre Privatsphäre ist uns wichtig",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "oMyImage verwendet notwendige Cookies für den Betrieb der Website und optionale Analyse-Cookies nur mit Ihrer Einwilligung. Ihre Bilder sind dabei nie betroffen.",
  "Accept All": "Alle akzeptieren",
  "Reject All": "Alle ablehnen",
  "Customize": "Anpassen",
  "Save preferences": "Einstellungen speichern",
  "Back": "Zurück",
  "Always on": "Immer aktiv",
  "Cookie Settings": "Cookie-Einstellungen",
  // CATEGORIES in CookieBanner.tsx (module scope, §4.2)
  "Necessary cookies": "Notwendige Cookies",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "Erforderlich für grundlegende Funktionen wie Sicherheit, das Merken Ihres Farbschemas und das Speichern Ihrer Cookie-Auswahl.",
  "Analytics cookies": "Analyse-Cookies",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "Helfen uns zu verstehen, wie Besucher oMyImage nutzen, damit wir die Leistung verbessern und entscheiden können, welche Tools wir als Nächstes entwickeln.",
  "Advertising cookies": "Werbe-Cookies",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "Dienen dazu, relevante Werbung anzuzeigen und deren Wirkung zu messen. oMyImage zeigt derzeit keine Werbung — Ihre Wahl wird gespeichert, falls sich das einmal ändert.",
  "Functional cookies": "Funktionale Cookies",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "Ermöglichen erweiterte Funktionen wie gespeicherte Einstellungen und ein persönlicheres Nutzungserlebnis.",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "Bilder auswählen",
  "Select an image": "Bild auswählen",
  "Take photo": "Foto aufnehmen",
  "Processed in your browser — your images never leave your device.":
    "Verarbeitung in Ihrem Browser — Ihre Bilder verlassen nie Ihr Gerät.",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "Verarbeitung auf unserem Server über eine verschlüsselte Verbindung — die Dateien werden direkt danach gelöscht.",
  "or import from": "oder importieren aus",
  "Connecting…": "Verbindung wird hergestellt…",
  "Add from {service}": "Aus {service} hinzufügen",
  "Import from {service}": "Aus {service} importieren",
  "Imported 1 file from Google Drive.": "1 Datei aus Google Drive importiert.",
  "Imported {n} files from Google Drive.": "{n} Dateien aus Google Drive importiert.",
  "Imported 1 file from Dropbox.": "1 Datei aus Dropbox importiert.",
  "Imported {n} files from Dropbox.": "{n} Dateien aus Dropbox importiert.",
  "Google Drive import failed.": "Import aus Google Drive fehlgeschlagen.",
  "Dropbox import failed.": "Import aus Dropbox fehlgeschlagen.",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "Ausgewählte Dateien ({n})",
  "Clear": "Leeren",
  "Add more files": "Weitere Dateien hinzufügen",
  "Move earlier": "Nach vorne verschieben",
  "Move later": "Nach hinten verschieben",
  "File view": "Dateiansicht",
  "Grid view": "Rasteransicht",
  "List view": "Listenansicht",
  "1 image": "1 Bild",
  "{n} images": "{n} Bilder",
  "1 file": "1 Datei",
  "{n} files": "{n} Dateien",
  "Settings": "Einstellungen",
  "Close": "Schließen",
  "Working…": "Wird bearbeitet…",
  "{label} value": "Wert für {label}",
  "Options": "Optionen",
  "Clear image": "Bild entfernen",
  "Clear files": "Dateien entfernen",
  "Change image": "Bild ändern",
  "Remove": "Entfernen",
  "Download": "Herunterladen",
  "Download {name}": "{name} herunterladen",
  "Download ({size})": "Herunterladen ({size})",
  "Download all (ZIP)": "Alle herunterladen (ZIP)",
  "Result": "Ergebnis",
  "Original": "Original", // i18n-same
  "Process": "Verarbeiten",
  "Processing…": "Wird verarbeitet…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "Dieses Tool läuft auf unserem Server, große Bilder können daher einige Sekunden dauern.",
  "Please select an image.": "Bitte wählen Sie ein Bild aus.",
  "Done — your image is ready.": "Fertig — Ihr Bild ist bereit.",
  "Processing failed.": "Verarbeitung fehlgeschlagen.",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "Hintergrund",
  "Background (replaces transparency)": "Hintergrund (ersetzt Transparenz)",
  "Auto — match the image's own edges": "Automatisch — passend zu den Bildrändern",
  "Auto": "Automatisch",
  "Transparent": "Transparent", // i18n-same
  "Custom": "Benutzerdefiniert",
  "Custom color": "Eigene Farbe",
  "Custom background color": "Eigene Hintergrundfarbe",
  "White": "Weiß",
  "Black": "Schwarz",
  "Gray": "Grau",
  "Charcoal": "Anthrazit",
  "Clay": "Terrakotta",
  "Red": "Rot",
  "Green": "Grün",
  "Blue": "Blau",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "Umwandlung in Ihrem Browser — die Dateien bleiben auf Ihrem Gerät (sehr große oder sehr hochauflösende Bilder werden auf unserem Server verarbeitet).",
  "Please select {format} files.": "Bitte wählen Sie {format}-Dateien aus.",
  "Please select image files.": "Bitte wählen Sie Bilddateien aus.",
  "Converted 1 image to {format}.": "1 Bild in {format} umgewandelt.",
  "Converted {n} images to {format}.": "{n} Bilder in {format} umgewandelt.",
  "Conversion failed.": "Umwandlung fehlgeschlagen.",
  "Conversion settings": "Einstellungen für die Umwandlung",
  "Conversion Settings": "Einstellungen für die Umwandlung",
  "Converting…": "Wird umgewandelt…",
  "Total: {before} → {after}": "Gesamt: {before} → {after}",
  "1 file ready": "1 Datei bereit",
  "{n} files ready — downloads as a ZIP": "{n} Dateien bereit — Download als ZIP",
  "Convert to {format}": "In {format} umwandeln",
  "Convert {n} to {format}": "{n} in {format} umwandeln",
  "Output:": "Ausgabe:",
  "Quality": "Qualität",
  "Auto-rotate by EXIF orientation": "Automatisch nach EXIF-Ausrichtung drehen",
  "Strip metadata": "Metadaten entfernen",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "Entfernt EXIF-Daten, Farbprofil, Kamera- und Standortdaten aus dem umgewandelten Bild, um die Dateigröße zu verringern.",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "Bild zuschneiden und drehen",
  "Crop & rotate": "Zuschneiden und drehen",
  "Cancel": "Abbrechen",
  "Apply": "Anwenden",
  "Free": "Frei",
  "Rotate left": "Nach links drehen",
  "Rotate right": "Nach rechts drehen",
  "Select whole image": "Ganzes Bild auswählen",
  "Reset": "Zurücksetzen",
  "Output": "Ausgabe",
  "Couldn't read this image.": "Dieses Bild konnte nicht gelesen werden.",
  // ── Photo editor (after "Take photo" on a phone) ────────────────────────
  "Edit photo": "Foto bearbeiten",
  "Edit {name}": "{name} bearbeiten",
  "Crop": "Zuschneiden",
  "Adjust": "Anpassen",
  "Filters": "Filter",
  "Auto enhance": "Automatisch verbessern",
  "Brightness": "Helligkeit",
  "Contrast": "Kontrast",
  "Saturation": "Sättigung",
  "Warmth": "Farbtemperatur",
  "Flip horizontal": "Horizontal spiegeln",
  "Flip vertical": "Vertikal spiegeln",
  "Straighten": "Begradigen",
  "Use original": "Original verwenden",
  "Done": "Fertig",
  "Vivid": "Lebendig",
  "B&W": "S/W",
  "Mono": "Mono", // i18n-same
  "Sepia": "Sepia", // i18n-same
  "Cool": "Kühl",
  "Warm": "Warm", // i18n-same
  "Couldn't apply that edit.": "Diese Bearbeitung konnte nicht angewendet werden.",
  "Compare original with result": "Original mit Ergebnis vergleichen",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "Zuschneidebereich. Zum Verschieben innen ziehen, zum Ändern der Größe an einem Griff ziehen, mit den Pfeiltasten fein verschieben.",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "Zusammengefügtes Bild — zum Verschieben ziehen, über die Ecken die Größe ändern, über den oberen Griff drehen",
  "Redaction area. Drag to paint over what you want hidden.":
    "Schwärzungsbereich. Ziehen Sie über alles, was verborgen werden soll.",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "Schwärzungsbereich. Ziehen, um einen Bereich zu zeichnen; anklicken, um ihn auszuwählen; an den Griffen ziehen, um die Größe zu ändern; Entf zum Löschen; Pfeiltasten zum Verschieben.",
  "Select your effect": "Effekt auswählen",
  "Previous effects": "Vorherige Effekte",
  "More effects": "Weitere Effekte",
  // EFFECT_SPECS labels (lib/image/effects.ts — module scope, §4.2)
  "No blur": "Keine Unschärfe",
  "Gaussian": "Gaußsch",
  "Colour": "Farbfläche",
  "Motion": "Bewegung",
  "Radial": "Radial", // i18n-same
  "Pixelate": "Verpixeln",
  "Glass": "Glas",
  "Bloom": "Leuchten",
  "Trippy waves": "Psychedelische Wellen",
  "Halftone": "Raster",
  "Particle": "Partikel",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "Verarbeitung abgeschlossen!",
  "Your image is ready for download": "Ihr Bild steht zum Download bereit",
  "Process more images": "Weitere Bilder bearbeiten",
  "Your image": "Ihr Bild",
  "Your images ({n})": "Ihre Bilder ({n})",
  "Preparing ZIP…": "ZIP wird vorbereitet…",
  "Download all (.zip)": "Alle herunterladen (.zip)",
  "Download all ({n})": "Alle herunterladen ({n})",
  "Continue with this file": "Mit dieser Datei weitermachen",
  "Share or save this tool": "Dieses Tool teilen oder speichern",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "Kopieren Sie den Link, teilen Sie ihn in sozialen Netzwerken oder setzen Sie ein Lesezeichen, um die Seite später wiederzufinden.",
  "Copied": "Kopiert",
  "Copy link": "Link kopieren",
  "Couldn't copy the link.": "Der Link konnte nicht kopiert werden.",
  "Share": "Teilen",
  "Share:": "Teilen:",
  "(Ctrl + D to bookmark)": "(Strg + D für ein Lesezeichen)",
  "Share on X": "Auf X teilen",
  "Share on Facebook": "Auf Facebook teilen",
  "Share on LinkedIn": "Auf LinkedIn teilen",
  "Share on WhatsApp": "Auf WhatsApp teilen",
  "Share on Telegram": "Auf Telegram teilen",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "Ich habe gerade {tool} auf oMyImage genutzt — kostenlos, schnell, ohne Anmeldung.",
  "Free image tools on oMyImage.": "Kostenlose Bildtools auf oMyImage.",
  "Enjoyed the result?": "Mit dem Ergebnis zufrieden?",
  "Share your experience on Trustpilot — it helps a lot.":
    "Teilen Sie Ihre Erfahrung auf Trustpilot — das hilft uns sehr.",
  "Leave a review": "Bewertung abgeben",

  // ── Toasts (sonner's own accessible names — ThemedToaster) ──────────────
  "Notifications": "Benachrichtigungen",
  "Close toast": "Benachrichtigung schließen",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "Premium-Tool",
  "Premium tool — Free plan includes a limited number per day":
    "Premium-Tool — der Free-Tarif enthält eine begrenzte Anzahl pro Tag",
  "Runs on our server — {allowance}": "Läuft auf unserem Server — {allowance}",
  "Added to Favorites": "Zu Favoriten hinzugefügt",
  "Removed from Favorites": "Aus Favoriten entfernt",
  "Add {tool} to favorites": "{tool} zu Favoriten hinzufügen",
  "Remove {tool} from favorites": "{tool} aus Favoriten entfernen",

  // ── Legal shell ─────────────────────────────────────────────────────────
  // "|section": a bare "Legal" is also the US paper size (image-to-pdf), which
  // must stay "Legal". The same English word, two meanings, two keys.
  // Auth chrome (components/auth) — shared by login, signup and the password flow.
  "Continue with Google": "Weiter mit Google",
  "or|divider": "oder",
  "Legal|section": "Rechtliches",
  "Last updated:": "Zuletzt aktualisiert:",
  "Contents": "Inhalt",
  "On this page": "Auf dieser Seite",
  "Back to top": "Nach oben",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "„{name}“ konnte nicht aus Dropbox heruntergeladen werden.",
  "Could not download “{name}” from Google Drive.": "„{name}“ konnte nicht aus Google Drive heruntergeladen werden.",
  "The Dropbox chooser failed to start.": "Die Dropbox-Auswahl konnte nicht gestartet werden.",
  "Unsupported image format: {name}": "Nicht unterstütztes Bildformat: {name}",
  "No frames found in this GIF.": "In diesem GIF wurden keine Frames gefunden.",
  "Canvas is not supported in this browser.": "Dieser Browser unterstützt kein Canvas.",
  "Canvas not supported.": "Canvas wird nicht unterstützt.",
  "Could not export the image.": "Das Bild konnte nicht exportiert werden.",
  "Add at least one frame.": "Fügen Sie mindestens einen Frame hinzu.",
  "Add at least one image.": "Fügen Sie mindestens ein Bild hinzu.",
  "Server error ({status}).": "Serverfehler ({status}).",
  "Couldn't reach the processing server for this large file.":
    "Der Verarbeitungsserver für diese große Datei ist nicht erreichbar.",
  "Couldn't reach the processing server.": "Der Verarbeitungsserver ist nicht erreichbar.",
  "No image selected.": "Kein Bild ausgewählt.",
  "The server did not start the job. Please try again.": "Der Server hat den Auftrag nicht gestartet. Bitte versuchen Sie es erneut.",
  "Timed out waiting for the server to finish.": "Zeitüberschreitung beim Warten auf den Server.",
  "Your browser cannot save {format} images. Try Chrome, Edge or Firefox.": "Ihr Browser kann keine {format}-Bilder speichern. Versuchen Sie es mit Chrome, Edge oder Firefox.",
  // lib/image/inpaint.ts (I18nError — invisible to i18n-keys)
  "The AI model could not be downloaded. Check your connection and try again.": "Das KI-Modell konnte nicht heruntergeladen werden. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
  "This file is not a valid SVG.": "Diese Datei ist kein gültiges SVG.",
  "This size is too large for your browser — try a smaller scale.": "Diese Größe ist für Ihren Browser zu groß — wählen Sie einen kleineren Maßstab.",
  "This SVG could not be drawn. It may use features browsers do not render as an image.": "Dieses SVG konnte nicht gezeichnet werden. Es nutzt möglicherweise Funktionen, die Browser nicht als Bild darstellen.",
  "Your browser blocks exporting this SVG because it contains embedded HTML.": "Ihr Browser blockiert den Export dieses SVG, weil es eingebettetes HTML enthält.",
  "This file is not a valid WebP image.": "Diese Datei ist kein gültiges WebP-Bild.",
  "This file is not a valid GIF.": "Diese Datei ist kein gültiges GIF.",
  "This WebP frame has no image data.": "Dieser WebP-Frame enthält keine Bilddaten.",
  "Your browser can't create MP4 video. Try Chrome, Edge or Safari.": "Ihr Browser kann kein MP4-Video erstellen. Versuchen Sie es mit Chrome, Edge oder Safari.",
  // …and the backend's own user-facing sentences (backend/src/routes/image).
  "Upload an image.": "Laden Sie ein Bild hoch.",
  "This file is too large.": "Diese Datei ist zu groß.",
  "Too many processing requests. Please wait a moment.":
    "Zu viele Verarbeitungsanfragen. Bitte warten Sie einen Moment.",
  "Too many requests. Please slow down and try again shortly.":
    "Zu viele Anfragen. Bitte warten Sie kurz und versuchen Sie es dann erneut.",
  "Too many requests. Please slow down.": "Zu viele Anfragen. Bitte etwas langsamer.",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "Sie haben das stündliche Verarbeitungslimit für Ihr Netzwerk erreicht. Bitte versuchen Sie es später erneut oder melden Sie sich für höhere Limits an.",
  "File not found or expired.": "Datei nicht gefunden oder abgelaufen.",
  "This OCR job was not found or has expired.": "Dieser OCR-Auftrag wurde nicht gefunden oder ist abgelaufen.",
  "That URL can't be reached — use a public http(s) address.":
    "Diese URL ist nicht erreichbar — verwenden Sie eine öffentliche http(s)-Adresse.",
  "Provide a width and/or height.": "Geben Sie eine Breite und/oder Höhe an.",
};
