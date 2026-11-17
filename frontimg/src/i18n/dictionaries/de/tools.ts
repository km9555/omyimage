/**
 * German tool names + short descriptions, keyed by tool **id**, plus the
 * category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the German build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see i18n-de-brief.md) ───────────────
 * German-German (ß, not Swiss ss), one locale under `/de`, the reader is
 * addressed as **Sie** ("Laden Sie … hoch", "Wandeln Sie … um").
 *
 * Names follow the primary German query in the brief's table, not a word for
 * word translation: the home card, the nav link and the H1 should all read as
 * the thing a German typed into Google — "Hintergrund entfernen", "Bild
 * komprimieren", "PNG in JPG", "Meme Generator", "Farbwähler". Conversions are
 * "X in Y" (the dominant German query form), "umwandeln" over "konvertieren".
 *
 * Vocabulary: Bild / Bilder (head noun), Foto only where the query uses it
 * (Passbild, Profilbild); Datei, hochladen, herunterladen, kostenlos, KI.
 *
 * Format and product names stay Latin: JPG, PNG, WebP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR.
 *
 * 3x4-photo and 2x2-photo are not shipped as German pages; they are named
 * here anyway so the lists that still show them never fall back to English.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
  /** Short chip label on the home page's "Sizes and presets" (variants only). */
  presetLabel?: string;
}

export const deTools: Record<string, LocalizedTool> = {
  // ── Optimieren ────────────────────────────────────────────────────────
  "compress-image": {
    name: "Bild komprimieren",
    shortDescription: "JPG, PNG und WebP verkleinern — mit der Qualität, die Sie wählen.",
  },
  "resize-image": {
    name: "Bildgröße ändern",
    shortDescription: "Größe in Pixeln oder Prozent ändern, Seitenverhältnis bleibt erhalten.",
  },
  "crop-image": {
    name: "Bild zuschneiden",
    shortDescription: "Auf jedes Format oder Seitenverhältnis zuschneiden, auch im Stapel.",
  },
  "rotate-image": {
    name: "Bild drehen",
    shortDescription: "Um 90°, 180°, 270° oder jeden Winkel drehen und spiegeln, im Stapel.",
  },

  // ── Umwandeln ─────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "Bild in JPG umwandeln",
    shortDescription: "PNG, WebP, GIF und BMP → JPG.",
  },
  "png-to-jpg": {
    name: "PNG in JPG",
    shortDescription: "PNG-Bilder in kompakte JPG-Dateien umwandeln.",
  },
  "jpg-to-png": {
    name: "JPG in PNG",
    shortDescription: "JPG verlustfrei in PNG umwandeln, mit Transparenz.",
  },
  "webp-to-png": {
    name: "WebP in PNG",
    shortDescription: "Moderne WebP-Bilder in PNG umwandeln.",
  },
  "heic-to-png": {
    name: "HEIC in PNG",
    shortDescription: "iPhone-Fotos im HEIC-Format verlustfrei in PNG umwandeln.",
  },
  "image-to-text": {
    name: "Bild in Text umwandeln",
    shortDescription: "Bearbeitbaren Text per OCR aus Fotos und Scans auslesen.",
  },
  "webp-to-jpg": {
    name: "WebP in JPG",
    shortDescription: "WebP in JPG umwandeln, das sich überall öffnen lässt.",
  },
  "jpg-to-webp": {
    name: "JPG in WebP",
    shortDescription: "JPG-Fotos durch Umwandlung in WebP deutlich kleiner machen.",
  },
  "png-to-webp": {
    name: "PNG in WebP",
    shortDescription: "PNG in WebP umwandeln, Transparenz bleibt erhalten.",
  },
  "jfif-to-jpg": {
    name: "JFIF in JPG",
    shortDescription: "Heruntergeladene .jfif-Dateien in .jpg umwandeln.",
  },
  "gif-to-png": {
    name: "GIF in PNG",
    shortDescription: "Ein GIF in ein verlustfreies PNG-Bild umwandeln.",
  },
  "gif-to-jpg": {
    name: "GIF in JPG",
    shortDescription: "GIF-Frames in kompakte JPG-Bilder umwandeln.",
  },
  "bmp-to-jpg": {
    name: "BMP in JPG",
    shortDescription: "Riesige BMP-Dateien in kleine JPGs umwandeln.",
  },
  "avif-to-jpg": {
    name: "AVIF in JPG",
    shortDescription: "AVIF-Bilder überall öffnen — durch Umwandlung in JPG.",
  },
  "avif-to-png": {
    name: "AVIF in PNG",
    shortDescription: "AVIF verlustfrei in PNG umwandeln, mit Transparenz.",
  },
  "heic-to-jpg": {
    name: "HEIC in JPG umwandeln",
    shortDescription: "iPhone-Fotos im HEIC-Format in JPG oder PNG umwandeln.",
  },
  "image-to-pdf": {
    name: "Bild in PDF umwandeln",
    shortDescription: "JPG- und PNG-Bilder zu einer einzigen PDF zusammenfassen.",
  },
  "image-to-base64": {
    name: "Bild in Base64",
    shortDescription: "Ein Bild als Base64-Data-URI kodieren.",
  },
  "base64-to-image": {
    name: "Base64 in Bild",
    shortDescription: "Einen Base64-Text wieder in ein Bild dekodieren.",
  },
  "gif-to-images": {
    name: "GIF in Bilder",
    shortDescription: "Jeden Frame eines GIFs als PNG oder JPG speichern.",
  },

  // ── Bearbeiten und erstellen ──────────────────────────────────────────
  "image-editor": {
    name: "Bild bearbeiten",
    shortDescription: "Zuschneiden, anpassen, Filter, Zeichnen und Markieren — in einem Editor.",
  },
  "watermark-image": {
    name: "Wasserzeichen einfügen",
    shortDescription: "Text- oder Logo-Wasserzeichen hinzufügen, auch im Stapel.",
  },
  "meme-generator": {
    name: "Meme Generator",
    shortDescription: "Text oben und unten, Vorlagen, Export als PNG oder JPG.",
  },
  "html-to-image": {
    name: "HTML in Bild",
    shortDescription: "Eine URL oder HTML-Code in PNG oder JPG umwandeln.",
  },
  "blur-face": {
    name: "Gesichter verpixeln",
    shortDescription: "Gesichter und Kennzeichen erkennen und unkenntlich machen.",
  },
  "grayscale-image": {
    name: "Bild schwarz weiß",
    shortDescription: "Fotos in Schwarz-Weiß umwandeln, auch im Stapel.",
  },
  "blur-image": {
    name: "Bild unscharf machen",
    shortDescription: "Das ganze Bild sanft weichzeichnen.",
  },
  "add-border": {
    name: "Rahmen um Bild",
    shortDescription: "Einen farbigen Rahmen oder Rand um Fotos legen.",
  },
  "circle-crop": {
    name: "Bild rund zuschneiden",
    shortDescription: "Bilder kreisrund ausschneiden, ideal für Profilbilder.",
  },
  "merge-images": {
    name: "Bilder zusammenfügen",
    shortDescription: "Bilder nebeneinander, untereinander oder als Raster kombinieren.",
  },
  "image-color-picker": {
    name: "Farbwähler",
    shortDescription: "Jede Farbe aus einem Bild aufnehmen oder die ganze Palette auslesen.",
  },
  "image-metadata": {
    name: "EXIF-Daten anzeigen",
    shortDescription: "EXIF-, GPS- und Kameradaten eines Fotos ansehen.",
  },
  "remove-exif": {
    name: "Metadaten entfernen",
    shortDescription: "EXIF, GPS und Metadaten löschen — für mehr Privatsphäre.",
  },
  "gif-maker": {
    name: "GIF erstellen",
    shortDescription: "Aus Ihren Bildern ein animiertes GIF machen.",
  },

  // ── KI ────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "Hintergrund entfernen",
    shortDescription: "Bild freistellen mit KI — Ergebnis als transparentes PNG.",
  },
  "upscale-image": {
    name: "Bildqualität verbessern",
    shortDescription: "Mit KI 2×, 3× oder 4× hochskalieren und Details zurückholen.",
  },

  // ── Varianten: auf eine Größe komprimieren (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "Bildgröße in KB reduzieren",
    presetLabel: "In KB reduzieren",
    shortDescription: "Ein Foto auf genau die KB-Größe bringen, die Sie brauchen.",
  },
  "compress-image-to-20kb": {
    name: "Bild auf 20 KB verkleinern",
    shortDescription: "Fotos und Unterschriften unter 20 KB für Formulare.",
  },
  "compress-image-to-50kb": {
    name: "Bild auf 50 KB verkleinern",
    shortDescription: "Ein häufiges Limit für Fotos in Online-Bewerbungen.",
  },
  "compress-image-to-100kb": {
    name: "Bild auf 100 KB verkleinern",
    shortDescription: "Scharfe Fotos und Dokumente unter 100 KB.",
  },
  "compress-image-to-200kb": {
    name: "Bild auf 200 KB verkleinern",
    shortDescription: "Fotos und gescannte Dokumente unter 200 KB.",
  },
  "compress-image-to-1mb": {
    name: "Bild auf 1 MB verkleinern",
    shortDescription: "Handyfotos unter 1 MB, meist in voller Auflösung.",
  },
  "compress-image-to-10kb": {
    name: "Bild auf 10 KB verkleinern",
    shortDescription: "Unterschriften und kleine Fotos unter 10 KB.",
  },
  "compress-image-to-30kb": {
    name: "Bild auf 30 KB verkleinern",
    shortDescription: "Formularfotos unter 30 KB, Gesicht bleibt scharf.",
  },
  "compress-image-to-300kb": {
    name: "Bild auf 300 KB verkleinern",
    shortDescription: "Fotos und Dokumente unter 300 KB, gut lesbar.",
  },
  "compress-image-to-500kb": {
    name: "Bild auf 500 KB verkleinern",
    shortDescription: "Fotos, Dokumente und Screenshots unter 500 KB.",
  },
  "compress-image-to-2mb": {
    name: "Bild auf 2 MB verkleinern",
    shortDescription: "Große Handyfotos unter 2 MB.",
  },
  "compress-image-to-15kb": {
    name: "Bild auf 15 KB verkleinern",
    shortDescription: "Unterschriften und kleine Fotos unter 15 KB.",
  },
  "compress-image-to-40kb": {
    name: "Bild auf 40 KB verkleinern",
    shortDescription: "Scharfe Formularfotos unter 40 KB.",
  },
  "compress-image-to-150kb": {
    name: "Bild auf 150 KB verkleinern",
    shortDescription: "Fotos und handschriftliche Seiten unter 150 KB.",
  },
  "increase-image-size-in-kb": {
    name: "Bildgröße in KB erhöhen",
    presetLabel: "In KB erhöhen",
    shortDescription: "Ein Foto auf mindestens 10, 20 oder 50 KB bringen.",
  },
  "signature-resizer": {
    name: "Unterschrift skalieren",
    shortDescription: "Ihre Unterschrift bereinigen, zuschneiden und skalieren.",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG in PDF unter 100 KB",
    shortDescription: "Einseitige PDF unter 100 KB für Formulare.",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG in PDF unter 200 KB",
    shortDescription: "Zeugnisse und Dokumente als PDF unter 200 KB.",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG in PDF unter 300 KB",
    shortDescription: "Mehrseitige PDFs unter 300 KB.",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG in PDF unter 500 KB",
    shortDescription: "Lange Dokumente als PDF unter 500 KB.",
  },
  "convert-to-png": {
    name: "In PNG umwandeln",
    shortDescription: "JPG, WebP, GIF und BMP → PNG.",
  },
  "convert-to-webp": {
    name: "In WebP umwandeln",
    shortDescription: "JPG, PNG, GIF und BMP → WebP.",
  },
  "svg-to-png": {
    name: "SVG in PNG",
    shortDescription: "SVG-Vektoren als scharfes PNG in jeder Größe.",
  },
  "png-to-ico": {
    name: "PNG in ICO",
    shortDescription: "Favicon erstellen: .ico-Dateien und Windows-Symbole.",
  },
  "youtube-thumbnail-resizer": {
    name: "YouTube Thumbnail Größe",
    presetLabel: "YouTube-Thumbnail",
    shortDescription: "Jedes Bild im Thumbnail-Format: 1280 × 720.",
  },
  "whatsapp-dp-resizer": {
    name: "WhatsApp Profilbild",
    presetLabel: "WhatsApp-Profilbild",
    shortDescription: "Das ganze Foto im quadratischen Profilbild, ohne Abschneiden.",
  },
  "linkedin-banner-resizer": {
    name: "LinkedIn Banner Größe",
    presetLabel: "LinkedIn-Banner",
    shortDescription: "Jedes Bild als LinkedIn-Banner: 1584 × 396.",
  },
  "facebook-cover-resizer": {
    name: "Facebook Titelbild Größe",
    presetLabel: "Facebook-Titelbild",
    shortDescription: "Jedes Bild als Facebook-Titelbild: 851 × 315.",
  },
  "discord-banner-resizer": {
    name: "Discord Banner Größe",
    presetLabel: "Discord-Banner",
    shortDescription: "Profil- und Server-Banner für Discord.",
  },
  "9-16-aspect-ratio-image": {
    name: "Bild im 9:16 Format (1080x1920)",
    presetLabel: "9:16 (1080×1920)",
    shortDescription: "Jedes Bild im Seitenverhältnis 9:16, in 1080 × 1920.",
  },
  "dpi-converter": {
    name: "DPI ändern",
    shortDescription: "DPI auf 300, 200 oder einen anderen Wert setzen, ohne Qualitätsverlust.",
  },
  "dpi-checker": {
    name: "DPI prüfen",
    shortDescription: "Die DPI eines Bildes und seine Druckgröße anzeigen.",
  },
  "resize-image-in-cm": {
    name: "Bildgröße in cm ändern",
    presetLabel: "Größe in cm",
    shortDescription: "Auf eine exakte Größe in cm, mm oder Zoll skalieren.",
  },
  "video-to-gif": {
    name: "Video in GIF",
    shortDescription: "Einen Ausschnitt aus MP4, WEBM oder MOV in ein GIF umwandeln.",
  },
  "gif-compressor": {
    name: "GIF komprimieren",
    shortDescription: "Animierte GIFs verkleinern, ohne Frames zu verlieren.",
  },
  "gif-resizer": {
    name: "GIF Größe ändern",
    shortDescription: "Animierte GIFs skalieren, alle Frames bleiben erhalten.",
  },
  "gif-to-mp4": {
    name: "GIF in MP4",
    shortDescription: "GIFs in kleine MP4-Videos umwandeln.",
  },
  "webp-to-gif": {
    name: "WebP in GIF",
    shortDescription: "Animiertes WebP in GIF umwandeln.",
  },
  "gif-cropper": {
    name: "GIF zuschneiden",
    shortDescription: "Animierte GIFs zuschneiden, alle Frames bleiben erhalten.",
  },
  "rotate-gif": {
    name: "GIF drehen",
    shortDescription: "Animierte GIFs um 90° oder 180° drehen oder spiegeln.",
  },
  "reverse-gif": {
    name: "GIF rückwärts abspielen",
    shortDescription: "Ein GIF rückwärts oder als Bumerang abspielen lassen.",
  },
  "gif-speed-changer": {
    name: "GIF Geschwindigkeit ändern",
    shortDescription: "Animierte GIFs schneller oder langsamer machen.",
  },
  "gif-cutter": {
    name: "GIF schneiden",
    shortDescription: "GIFs kürzen und nur die gewünschten Frames behalten.",
  },
  "gif-to-webp": {
    name: "GIF in WebP",
    shortDescription: "Animierte GIFs in animiertes WebP umwandeln.",
  },
  "gif-to-apng": {
    name: "GIF in APNG",
    shortDescription: "Animierte GIFs in animiertes PNG (APNG) umwandeln.",
  },
  "gif-to-sprite-sheet": {
    name: "GIF in Sprite Sheet",
    shortDescription: "Alle Frames eines GIFs auf ein PNG-Sprite-Sheet legen.",
  },
  "gif-merger": {
    name: "GIFs zusammenfügen",
    shortDescription: "Mehrere GIFs nacheinander zu einem verbinden.",
  },
  "add-text-to-gif": {
    name: "Text in GIF einfügen",
    shortDescription: "Animierte GIFs beschriften — auf allen Frames oder nur auf einigen.",
  },
  "typing-text-gif": {
    name: "Schreibmaschinen-GIF",
    shortDescription: "Ein GIF erstellen, in dem sich Text Buchstabe für Buchstabe tippt.",
  },
  "invert-image": {
    name: "Bild invertieren",
    shortDescription: "Farben von Fotos umkehren — Negativ oder smarte Invertierung.",
  },
  "pixelate-image": {
    name: "Bild verpixeln",
    shortDescription: "Fotos in grobe Pixelblöcke verwandeln.",
  },
  "image-brightness": {
    name: "Bild aufhellen",
    shortDescription: "Fotos aufhellen, abdunkeln, Kontrast und Farbe anpassen.",
  },
  "glitch-effect": {
    name: "Glitch-Effekt",
    shortDescription: "Fotos im Look eines gestörten Bildschirms.",
  },
  "round-corners": {
    name: "Ecken abrunden",
    shortDescription: "Bildecken abrunden, mit transparenten Rändern.",
  },
  "remove-watermark": {
    name: "Wasserzeichen entfernen",
    shortDescription: "Wasserzeichen, Logos und Datumsstempel mit KI entfernen, im Browser.",
  },
  "remove-object": {
    name: "Objekt entfernen",
    shortDescription: "Personen, Objekte und Makel mit KI aus Fotos entfernen.",
  },
  "split-image": {
    name: "Bild teilen",
    shortDescription: "Ein Bild in gleiche Teile oder Kacheln zerschneiden.",
  },
  "image-overlay": {
    name: "Bilder überlagern",
    shortDescription: "Ein Bild über ein anderes legen, mit Deckkraft und Mischmodus.",
  },

  // ── Varianten: verbessern, spiegeln, Hintergrund (expansion.md) ──
  "image-to-hd": {
    name: "Bild in HD",
    shortDescription: "Ein kleines oder niedrig aufgelöstes Foto in HD umwandeln.",
  },
  "unblur-image": {
    name: "Bild schärfen",
    shortDescription: "Leicht unscharfe Fotos mit KI wieder scharf machen.",
  },
  "flip-image": {
    name: "Bild spiegeln",
    shortDescription: "Fotos horizontal oder vertikal spiegeln.",
  },
  "change-background-color": {
    name: "Hintergrundfarbe ändern",
    shortDescription: "Weißer, blauer oder roter Hintergrund für jedes Foto.",
  },
  "blur-background": {
    name: "Hintergrund unscharf machen",
    shortDescription: "Porträt-Effekt hinter jeder Person oder jedem Objekt.",
  },
  "passport-photo-maker": {
    name: "Biometrisches Passbild",
    shortDescription: "Passbilder, Visum- und Ausweisfotos, mit Druckbogen.",
  },
  "3x4-photo": {
    name: "3x4-Foto (Brasilien)",
    shortDescription: "Dokumentfotos im Format 3 × 4 cm, zugeschnitten und druckfertig.",
  },
  "2x2-photo": {
    name: "2x2-Foto (US-Visum)",
    shortDescription: "Foto im Format 2 × 2 Zoll für US-Reisepass und Visum.",
  },
  "instagram-grid-maker": {
    name: "Instagram Grid erstellen",
    shortDescription: "Ein Foto in ein Instagram-Raster oder Karussell aufteilen.",
  },
};

/**
 * Category labels. `title` is the home-page section heading, `navLabel` the
 * short pill / breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const deCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "Optimieren und komprimieren", navLabel: "Optimieren" },
  convert: { title: "Bilder umwandeln", navLabel: "Umwandeln" },
  edit: { title: "Bearbeiten und erstellen", navLabel: "Bearbeiten" },
  gif: { title: "GIF-Tools", navLabel: "GIF" },
  ai: { title: "KI-Tools", navLabel: "Bild-KI" },
};
