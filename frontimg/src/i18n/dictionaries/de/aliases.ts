/**
 * German search synonyms, keyed by tool id — what someone in Germany, Austria
 * or Switzerland types into the header search when they don't know our tool's
 * exact name.
 *
 * Generous on purpose: every primary and secondary query from the brief's
 * table (i18n-de-brief.md), the colloquial forms the interface deliberately
 * doesn't use ("freistellen", "bild kleiner machen", "handyfoto"), English
 * loanwords Germans search with ("resize", "converter", "upscale"), and the
 * usual typos.
 *
 * Lowercase. Umlauts and ß are folded at match time (ö → o, ß → ss — see
 * lib/search-normalize.ts), so "größe" / "grösse" / "grosse" already match
 * each other. The "oe / ae / ue" transliteration is NOT folded, so the common
 * ones ("groesse", "aendern", "zusammenfuegen") are listed explicitly.
 */
export const deAliases: Record<string, string[]> = {
  // ── Optimieren ────────────────────────────────────────────────────────
  "compress-image": [
    "bild komprimieren", "bilder komprimieren", "foto komprimieren", "fotos komprimieren",
    "bild verkleinern", "bilder verkleinern", "foto verkleinern", "bild kleiner machen",
    "foto kleiner machen", "dateigröße verringern", "dateigroesse verringern",
    "dateigröße reduzieren", "jpg komprimieren", "jpeg komprimieren", "png komprimieren",
    "webp komprimieren", "bild optimieren", "bildkompression", "bild kompremieren",
    "bild komprimiren", "mb reduzieren", "kb reduzieren", "bild verkleinern kb",
    "compress image", "kompressor",
  ],
  "resize-image": [
    "bildgröße ändern", "bildgroesse aendern", "bild größe ändern", "foto größe ändern",
    "bild verkleinern", "bild vergrößern", "bild skalieren", "foto skalieren",
    "bildgröße anpassen", "pixel ändern", "auflösung ändern", "breite höhe",
    "bild resize", "resize", "resizer", "bildgrösse", "bild kleiner machen",
    "bild größer machen", "seitenverhältnis",
  ],
  "crop-image": [
    "bild zuschneiden", "foto zuschneiden", "bild ausschneiden", "foto ausschneiden",
    "bild beschneiden", "bild croppen", "crop", "zuschneiden", "bildausschnitt",
    "quadratisch zuschneiden", "16:9", "4:3", "bild zuschneiden online",
  ],
  "rotate-image": [
    "bild drehen", "foto drehen", "bild online drehen", "bild rotieren", "foto rotieren",
    "bild um 90 grad drehen", "90 grad", "180 grad", "bild gerade machen",
    "bild steht auf dem kopf", "bild seitlich", "drehen",
  ],
  "remove-exif": [
    "metadaten entfernen", "exif daten entfernen", "exif entfernen", "exif löschen",
    "metadaten löschen", "gps daten entfernen", "standort aus foto entfernen",
    "foto anonymisieren", "kameradaten entfernen", "datenschutz foto",
  ],

  // ── Umwandeln ─────────────────────────────────────────────────────────
  "convert-to-jpg": [
    "bild in jpg umwandeln", "in jpg umwandeln", "in jpeg umwandeln", "jpg konvertieren",
    "bildkonverter", "bild konvertieren", "bildformat ändern", "jpeg", "zu jpg",
    "jpg converter", "format umwandeln",
  ],
  "png-to-jpg": [
    "png in jpg", "png zu jpg", "png in jpg umwandeln", "png in jpeg", "png to jpg",
    "png jpg konvertieren", "png umwandeln", "png2jpg",
  ],
  "jpg-to-png": [
    "jpg in png", "jpg zu png", "jpg in png umwandeln", "jpeg in png", "jpg to png",
    "jpg png konvertieren", "jpg umwandeln", "jpg2png",
  ],
  "webp-to-png": ["webp in png", "webp zu png", "webp umwandeln", "webp öffnen", "webp to png"],
  "webp-to-jpg": ["webp in jpg", "webp zu jpg", "webp in jpeg", "webp umwandeln", "webp to jpg"],
  "jpg-to-webp": ["jpg in webp", "jpg zu webp", "jpeg in webp", "in webp umwandeln"],
  "png-to-webp": ["png in webp", "png zu webp", "png in webp umwandeln"],
  "heic-to-jpg": [
    "heic in jpg", "heic zu jpg", "heic in jpg umwandeln", "heic in jpeg", "heic umwandeln",
    "heic öffnen", "heic iphone", "iphone fotos umwandeln", "iphone foto in jpg",
    "heif in jpg", "heic to jpg", "heic konvertieren",
  ],
  "heic-to-png": ["heic in png", "heic zu png", "heic in png umwandeln", "iphone foto in png", "heif in png"],
  "jfif-to-jpg": ["jfif in jpg", "jfif zu jpg", "jfif öffnen", "jfif umwandeln"],
  "gif-to-png": ["gif in png", "gif zu png"],
  "gif-to-jpg": ["gif in jpg", "gif zu jpg"],
  "bmp-to-jpg": ["bmp in jpg", "bmp zu jpg", "bmp umwandeln"],
  "avif-to-jpg": ["avif in jpg", "avif zu jpg", "avif öffnen", "avif umwandeln"],
  "avif-to-png": ["avif in png", "avif zu png"],
  "image-to-text": [
    "bild in text umwandeln", "bild zu text", "text aus bild extrahieren", "text aus bild",
    "ocr", "ocr online", "texterkennung", "text erkennen", "foto in text",
    "text aus foto kopieren", "screenshot in text", "jpg in text", "bild in word",
    "text abschreiben", "image to text",
  ],
  "image-to-pdf": [
    "bild in pdf umwandeln", "bild in pdf", "bilder in pdf", "jpg in pdf", "jpg in pdf umwandeln",
    "foto in pdf", "fotos in pdf", "png in pdf", "jpeg in pdf", "bilder zu pdf zusammenfügen",
    "bilder zu einer pdf", "jpg zu pdf", "foto als pdf", "image to pdf",
  ],
  "image-to-base64": ["bild in base64", "base64", "base64 kodieren", "data uri", "base64 encoder"],
  "base64-to-image": [
    "base64 in bild", "base64 to image", "base64 dekodieren", "base64 decoder",
    "base64 zu png", "base64 in jpg",
  ],
  "gif-to-images": [
    "gif in bilder", "frames aus gif", "gif zerlegen", "gif einzelbilder", "gif frames extrahieren",
    "gif in jpg", "gif in png",
  ],

  // ── Bearbeiten und erstellen ──────────────────────────────────────────
  "image-editor": [
    "bild bearbeiten", "foto bearbeiten", "bildbearbeitung online", "bildbearbeitung",
    "fotobearbeitung", "bildbearbeitungsprogramm", "foto editor", "bild editor",
    "photoshop online", "filter", "auf bild zeichnen", "bilder bearbeiten kostenlos",
  ],
  "watermark-image": [
    "wasserzeichen einfügen", "wasserzeichen erstellen", "wasserzeichen hinzufügen",
    "wasserzeichen einfuegen", "logo auf bild", "logo einfügen", "text auf bild",
    "bild schützen", "copyright auf foto", "watermark",
  ],
  "meme-generator": [
    "meme generator", "meme erstellen", "meme maker", "meme machen", "memes erstellen",
    "meme", "mem generator", "text oben unten",
  ],
  "html-to-image": [
    "html in bild", "html zu bild", "html in png", "webseite als bild", "screenshot webseite",
    "url in bild", "html to image",
  ],
  "blur-face": [
    "gesichter verpixeln", "gesicht verpixeln", "gesicht unkenntlich machen", "gesicht unscharf machen",
    "gesicht verwischen", "gesicht zensieren", "kennzeichen verpixeln", "nummernschild verpixeln",
    "foto anonymisieren", "gesichter unkenntlich",
  ],
  "grayscale-image": [
    "bild schwarz weiß", "schwarz weiß bild", "schwarz-weiß-bild", "foto schwarz weiß",
    "schwarz weiss", "bild schwarzweiß machen", "graustufen", "farbe entfernen", "entsättigen",
  ],
  "blur-image": [
    "bild unscharf machen", "bild weichzeichnen", "foto unscharf machen", "bild verwischen",
    "weichzeichner", "blur", "bild verschwommen machen",
  ],
  "add-border": [
    "rahmen um bild", "bilderrahmen online", "rahmen hinzufügen", "bild mit rahmen",
    "rand um bild", "foto rahmen", "weißer rand",
  ],
  "circle-crop": [
    "bild rund zuschneiden", "foto rund ausschneiden", "bild kreis", "rundes bild",
    "rundes profilbild", "kreis ausschneiden", "avatar rund",
  ],
  "merge-images": [
    "bilder zusammenfügen", "bilder zusammenfuegen", "fotos zusammenfügen", "bilder kombinieren",
    "collage", "collage erstellen", "fotocollage", "bilder nebeneinander", "bilder untereinander",
    "zwei bilder zusammenfügen", "bilder verbinden",
  ],
  "gif-maker": [
    "gif erstellen", "gif maker", "gif machen", "animiertes gif", "bilder zu gif",
    "fotos zu gif", "gif aus bildern", "animation erstellen",
  ],
  "image-color-picker": [
    "farbwähler", "farbwaehler", "color picker", "farbe aus bild", "farbpipette", "pipette",
    "farbcode aus bild", "hex code", "farbpalette", "farbe bestimmen", "farbe erkennen",
  ],
  "image-metadata": [
    "exif daten anzeigen", "exif-daten", "exif daten", "metadaten bild", "metadaten anzeigen",
    "exif viewer", "kameradaten", "wann wurde das foto aufgenommen", "foto standort",
    "bildinformationen",
  ],

  // ── KI ────────────────────────────────────────────────────────────────
  "remove-background": [
    "hintergrund entfernen", "bild hintergrund entfernen", "hintergrund entfernen kostenlos",
    "bild freistellen", "freistellen", "foto freistellen", "hintergrund löschen",
    "hintergrund weg", "transparenter hintergrund", "png transparent", "hintergrund transparent machen",
    "remove bg", "removebg", "ohne hintergrund", "hintergrund entferner",
  ],
  "upscale-image": [
    "bildqualität verbessern", "bildqualitaet verbessern", "bild hochskalieren", "upscale",
    "upscaler", "bild vergrößern", "bildauflösung erhöhen", "auflösung erhöhen",
    "foto verbessern", "bild verbessern ki", "ki upscaler", "2x", "4x",
  ],

  // Varianten — auf eine Größe komprimieren
  "reduce-image-size-in-kb": [
    "bildgröße in kb reduzieren", "bilder verkleinern kb", "foto kb reduzieren", "kb verkleinern",
    "bild auf kb verkleinern", "dateigröße in kb", "bild kb ändern",
  ],
  "compress-image-to-20kb": ["bild auf 20 kb verkleinern", "20 kb", "20kb", "unterschrift 20 kb"],
  "compress-image-to-50kb": ["bild auf 50 kb verkleinern", "50 kb", "50kb", "foto 50 kb"],
  "compress-image-to-100kb": [
    "bild auf 100 kb verkleinern", "foto auf 100 kb verkleinern", "100 kb", "100kb", "bild unter 100 kb",
  ],
  "compress-image-to-200kb": ["bild auf 200 kb verkleinern", "200 kb", "200kb", "bild unter 200 kb"],
  "compress-image-to-1mb": [
    "bild auf 1 mb verkleinern", "bild unter 1 mb", "1 mb", "1mb", "foto unter 1 mb",
  ],
  "compress-image-to-10kb": ["bild auf 10 kb verkleinern", "10 kb", "10kb", "unterschrift 10 kb"],
  "compress-image-to-30kb": ["bild auf 30 kb verkleinern", "30 kb", "30kb", "foto 30 kb"],
  "compress-image-to-300kb": ["bild auf 300 kb verkleinern", "300 kb", "300kb", "bild unter 300 kb"],
  "compress-image-to-500kb": ["bild auf 500 kb verkleinern", "500 kb", "500kb", "bild unter 500 kb"],
  "compress-image-to-2mb": ["bild auf 2 mb verkleinern", "bild unter 2 mb", "2 mb", "2mb"],
  "compress-image-to-15kb": ["bild auf 15 kb verkleinern", "15 kb", "15kb"],
  "compress-image-to-40kb": ["bild auf 40 kb verkleinern", "40 kb", "40kb"],
  "compress-image-to-150kb": ["bild auf 150 kb verkleinern", "150 kb", "150kb"],
  "increase-image-size-in-kb": [
    "bildgröße in kb erhöhen", "bild kb erhöhen", "bild größer machen kb", "dateigröße erhöhen",
    "foto kb vergrößern",
  ],
  "signature-resizer": [
    "unterschrift skalieren", "unterschrift bild", "unterschrift verkleinern",
    "unterschrift zuschneiden", "unterschrift freistellen", "digitale unterschrift",
    "unterschrift weißer hintergrund",
  ],
  "jpg-to-pdf-under-100kb": ["jpg in pdf unter 100 kb", "pdf 100 kb", "jpg in pdf 100kb"],
  "jpg-to-pdf-under-200kb": ["jpg in pdf unter 200 kb", "pdf 200 kb", "jpg in pdf 200kb"],
  "jpg-to-pdf-under-300kb": ["jpg in pdf unter 300 kb", "pdf 300 kb", "jpg in pdf 300kb"],
  "jpg-to-pdf-under-500kb": ["jpg in pdf unter 500 kb", "pdf 500 kb", "jpg in pdf 500kb"],
  "convert-to-png": [
    "in png umwandeln", "bild in png umwandeln", "zu png", "png konvertieren", "bild in png",
  ],
  "convert-to-webp": [
    "in webp umwandeln", "bild in webp", "bild in webp umwandeln", "zu webp", "webp konvertieren",
  ],
  "svg-to-png": ["svg in png", "svg zu png", "svg in png umwandeln", "svg umwandeln", "vektor in png"],
  "png-to-ico": [
    "png in ico", "favicon erstellen", "favicon generator", "ico erstellen", "icon erstellen",
    "bild in ico", "jpg in ico",
  ],
  "youtube-thumbnail-resizer": [
    "youtube thumbnail größe", "youtube thumbnail", "youtube vorschaubild", "thumbnail erstellen",
    "1280x720",
  ],
  "whatsapp-dp-resizer": [
    "whatsapp profilbild", "whatsapp profilbild ohne zuschneiden", "whatsapp profilbild größe",
    "whatsapp profilbild ganz", "whatsapp dp",
  ],
  "linkedin-banner-resizer": [
    "linkedin banner größe", "linkedin banner", "linkedin hintergrundbild", "linkedin titelbild",
    "1584x396",
  ],
  "facebook-cover-resizer": [
    "facebook titelbild größe", "facebook titelbild", "facebook cover", "facebook banner", "851x315",
  ],
  "discord-banner-resizer": [
    "discord banner größe", "discord banner", "discord profilbanner", "discord server banner",
  ],
  "9-16-aspect-ratio-image": [
    "9:16 format", "9:16 bild", "1080x1920", "bild in 9:16", "hochformat 9:16",
    "instagram story größe", "reels format", "tiktok format", "story format",
  ],
  "dpi-converter": [
    "dpi ändern", "bild dpi ändern", "dpi aendern", "300 dpi", "auf 300 dpi", "dpi erhöhen",
  ],
  "dpi-checker": [
    "dpi prüfen", "dpi herausfinden", "dpi pruefen", "dpi anzeigen", "wie viel dpi hat mein bild",
    "auflösung prüfen",
  ],
  "resize-image-in-cm": [
    "bildgröße in cm ändern", "bild in cm", "bildgröße cm", "zentimeter", "cm in pixel",
    "bild in mm", "druckgröße",
  ],
  "video-to-gif": [
    "video in gif", "video zu gif", "mp4 in gif", "mp4 zu gif", "mov in gif", "gif aus video",
    "video in gif umwandeln",
  ],
  "gif-compressor": [
    "gif komprimieren", "gif verkleinern", "gif kleiner machen", "gif optimieren", "gif dateigröße",
  ],
  "gif-resizer": ["gif größe ändern", "gif verkleinern", "gif skalieren", "gif groesse aendern"],
  "gif-to-mp4": ["gif in mp4", "gif zu mp4", "gif in video", "gif in mp4 umwandeln"],
  "webp-to-gif": ["webp in gif", "webp zu gif", "animiertes webp in gif"],
  "gif-cropper": ["gif zuschneiden", "gif croppen", "gif ausschneiden"],
  "rotate-gif": ["gif drehen", "gif spiegeln", "gif rotieren"],
  "reverse-gif": ["gif rückwärts abspielen", "gif rückwärts", "gif umkehren", "gif bumerang", "boomerang gif"],
  "gif-speed-changer": [
    "gif geschwindigkeit ändern", "gif schneller machen", "gif langsamer machen", "gif tempo",
  ],
  "gif-cutter": ["gif schneiden", "gif kürzen", "gif frames entfernen", "gif trimmen"],
  "gif-to-webp": ["gif in webp", "gif zu webp", "animiertes webp"],
  "gif-to-apng": ["gif in apng", "gif zu apng", "animiertes png"],
  "gif-to-sprite-sheet": ["sprite sheet", "spritesheet", "gif in sprite sheet", "gif frames in ein bild"],
  "gif-merger": ["gifs zusammenfügen", "gif zusammenfügen", "gifs kombinieren", "gifs verbinden"],
  "add-text-to-gif": ["text in gif einfügen", "text auf gif", "gif beschriften", "gif untertitel"],
  "typing-text-gif": ["schreibmaschinen-gif", "schreibmaschinen gif", "text-gif", "text gif", "tippender text"],
  "invert-image": [
    "bild invertieren", "farben invertieren", "bild negativ", "negativ", "farben umkehren",
  ],
  "pixelate-image": [
    "bild verpixeln", "pixel bild", "pixelbild", "verpixeln", "pixel effekt", "mosaik", "pixel art",
  ],
  "image-brightness": [
    "bild aufhellen", "helligkeit ändern", "foto aufhellen", "bild heller machen",
    "bild abdunkeln", "kontrast ändern", "bild zu dunkel",
  ],
  "glitch-effect": ["glitch-effekt", "glitch effekt", "glitch", "vhs effekt", "rgb verschiebung"],
  "round-corners": ["ecken abrunden", "abgerundete ecken", "runde ecken", "bild ecken rund"],
  "remove-watermark": [
    "wasserzeichen entfernen", "wasserzeichen entfernen online", "wasserzeichen entfernen kostenlos",
    "logo entfernen", "datum aus foto entfernen", "text aus bild entfernen", "watermark remover",
  ],
  "remove-object": [
    "objekt entfernen", "person aus foto entfernen", "objekte aus foto entfernen",
    "personen entfernen", "radiergummi", "magic eraser", "störende objekte entfernen",
  ],
  "split-image": [
    "bild teilen", "bild aufteilen", "bild zerschneiden", "bild in teile schneiden",
    "bild halbieren", "bild kacheln",
  ],
  "image-overlay": [
    "bilder überlagern", "bild übereinander legen", "bilder übereinanderlegen",
    "bild auf bild", "doppelbelichtung", "bilder ueberlagern",
  ],

  // Varianten — HD, spiegeln, Hintergrund
  "image-to-hd": [
    "bild in hd", "foto hd", "foto in hd", "auflösung erhöhen", "bild hd machen", "hd qualität",
  ],
  "unblur-image": [
    "bild schärfen", "unscharfes bild scharf machen", "foto scharf machen", "bild scharf machen",
    "verschwommenes foto", "bild schaerfen", "unscharf",
  ],
  "flip-image": [
    "bild spiegeln", "foto spiegeln", "spiegelverkehrt", "bild horizontal spiegeln",
    "bild vertikal spiegeln", "selfie spiegeln",
  ],
  "change-background-color": [
    "hintergrundfarbe ändern", "hintergrund ändern", "hintergrund weiß machen", "weißer hintergrund",
    "hintergrund austauschen", "hintergrundfarbe aendern", "hintergrund blau", "hintergrund ersetzen",
  ],
  "blur-background": [
    "hintergrund unscharf machen", "hintergrund verschwommen", "hintergrund weichzeichnen",
    "porträtmodus", "bokeh", "hintergrund verwischen",
  ],
  "passport-photo-maker": [
    "biometrisches passbild", "passbild erstellen", "passbild", "passfoto", "bewerbungsfoto",
    "biometrisches foto", "personalausweis foto", "reisepass foto", "35x45", "passbild selber machen",
    "visumfoto", "ausweisfoto",
  ],
  "3x4-photo": ["3x4 foto", "foto 3x4", "3 x 4 cm"],
  "2x2-photo": ["2x2 foto", "us visum foto", "us passfoto", "2x2 zoll"],
  "instagram-grid-maker": [
    "instagram grid", "instagram raster", "instagram grid erstellen", "instagram puzzle",
    "bild für instagram teilen", "instagram karussell", "panorama karussell",
  ],
};
