# German (/de) authoring brief

Shared brief for everyone writing German copy for oMyImage. Read it fully
before writing. The playbook is `conversion.md` (§3 per-page procedure, §6
traps); Portuguese (`*.pt.ts`) and Indonesian (`*.id.ts`) are finished
examples of every file type.

## Market and voice

- Audience: Germany first, also Austria and Switzerland. German-German
  spelling (ß, not Swiss ss). One variant, tag `de`.
- **Address the reader as "Sie"** (iLoveIMG /de and our sister site oMyPDF
  /de both do). Imperatives: "Laden Sie Ihr Bild hoch", button labels in the
  infinitive ("Bild hochladen", "Herunterladen", "Komprimieren").
- Write natively, not translated word-for-word. Short German sentences,
  concrete numbers, no marketing fluff. Keep the facts of the English page
  exactly (what runs in the browser vs on the server, limits, formats).
- Quotation marks: German „…“ is correct here (the audit allows it in `de`
  only). Inside TS string literals use „…“ (U+201E / U+201C) — never a bare
  ASCII `"` inside a double-quoted string.
- Numbers: decimal comma (2,5 MB), thin/normal space before units (100 KB),
  dates DD.MM.YYYY. Units stay KB / MB / px / dpi / cm / mm.
- Keep verbatim: **oMyImage**, format names (JPG, JPEG, PNG, WebP, HEIC,
  AVIF, GIF, BMP, SVG, ICO, PDF, MP4, APNG, EXIF), product names (WhatsApp,
  YouTube, LinkedIn, Facebook, Discord, Instagram, iPhone, Windows, macOS).
- Every `{placeholder}` in a key must appear in the translation (gate).
- Vocabulary: Bild (head noun; "Bilder" for plural), Foto only where the
  German query uses it (Passbild/Passfoto, Profilbild). Datei, hochladen,
  herunterladen, Browser, Gerät, kostenlos, ohne Anmeldung, ohne
  Wasserzeichen, Qualität, Auflösung, Dateigröße, Bildgröße, umwandeln
  (preferred over konvertieren in headings; konvertieren is fine in body).
  "KI" for AI. "Hintergrund entfernen", "freistellen" as a secondary.

## SEO rules per tool page

- `metaTitle` (≤ 60 chars) and `h1`/`title` lead with the **primary German
  query** in the table below, exactly as Germans type it (capitalised as a
  German heading). metaTitle may add "– kostenlos & online" / "| ohne
  Anmeldung". metaDescription 140–160 chars, contains the primary query and
  one secondary.
- Use the secondary queries naturally in the intro, a section heading and an
  FAQ. Do not keyword-stuff.
- FAQs: at least as many as English; you may ADD German-market questions
  (e.g. biometric photo rules, Behörden upload limits in KB, DSGVO/privacy:
  "Werden meine Bilder hochgeladen?").
- Every tool page must RENDER ≥ 900 words (the module is the bulk of it);
  don't shorten the English copy.
- Variant pages (compress-image-to-50kb etc.) must stay distinct from each
  other (similarity ceiling 0.6) — translate each one's own specifics, never
  paste one into another.

## Primary German queries (Germany, Nov 2026; volume/mo, KD)

| id | de slug | primary query | secondary |
|---|---|---|---|
| compress-image | bild-komprimieren | Bild komprimieren (6.6K) / Bilder komprimieren (9.9K) | Bild verkleinern (12.1K), JPG komprimieren (8.1K), PNG komprimieren (3.6K), Foto komprimieren |
| resize-image | bildgroesse-aendern | Bildgröße ändern (4.4K) | Bild verkleinern, Bild vergrößern, Bild skalieren, Foto Größe ändern |
| crop-image | bild-zuschneiden | Bild zuschneiden (3.6K) | Foto zuschneiden, Bild ausschneiden |
| rotate-image | bild-drehen | Bild drehen (1.6K) | Foto drehen, Bild online drehen |
| remove-background | hintergrund-entfernen | Hintergrund entfernen (60.5K, KD13) | Bild Hintergrund entfernen (9.9K), Bild freistellen (5.4K), kostenlos (4.4K) |
| upscale-image | bildqualitaet-verbessern | Bildqualität verbessern (5.4K) | Bild hochskalieren (3.6K), Upscale (4.4K), Bild vergrößern, Bildauflösung erhöhen |
| image-to-pdf | bild-in-pdf-umwandeln | Bild in PDF umwandeln (27.1K) | JPG in PDF umwandeln (27.1K), Bilder in PDF (12.1K), Foto in PDF, PNG in PDF |
| image-editor | bild-bearbeiten | Bild bearbeiten (12.1K) | Foto bearbeiten (8.1K), Bildbearbeitung online |
| merge-images | bilder-zusammenfuegen | Bilder zusammenfügen (5.4K) | Collage erstellen (27.1K, mention naturally), Fotos zusammenfügen, Bilder kombinieren |
| image-to-text | bild-in-text-umwandeln | Bild in Text umwandeln (1.6K) | Bild zu Text (2.9K), Text aus Bild extrahieren, OCR online, Texterkennung |
| convert-to-jpg | bild-in-jpg-umwandeln | Bild in JPG umwandeln (2.4K) | In JPG umwandeln, Bildkonverter |
| convert-to-png | in-png-umwandeln | In PNG umwandeln | Bild in PNG umwandeln |
| convert-to-webp | in-webp-umwandeln | In WebP umwandeln | Bild in WebP |
| heic-to-jpg | heic-in-jpg | HEIC in JPG umwandeln (14.8K) | HEIC in JPG (8.1K), HEIC zu JPG, iPhone-Fotos |
| heic-to-png | heic-in-png | HEIC in PNG (880) | |
| png-to-jpg | png-in-jpg | PNG in JPG (18.1K) | PNG in JPG umwandeln, PNG zu JPG |
| jpg-to-png | jpg-in-png | JPG in PNG (12.1K) | JPG in PNG umwandeln, JPG zu PNG |
| svg-to-png | svg-in-png | SVG in PNG (12.1K) | SVG zu PNG |
| png-to-ico | png-in-ico | PNG in ICO (8.1K) | Favicon erstellen (720) |
| image-to-base64 / base64-to-image | bild-in-base64 / base64-in-bild | Bild in Base64 / Base64 in Bild | base64 to image (1K) |
| watermark-image | wasserzeichen-einfuegen | Wasserzeichen einfügen | Wasserzeichen erstellen (590), hinzufügen |
| remove-watermark | wasserzeichen-entfernen | Wasserzeichen entfernen (12.1K, KD0) | online, kostenlos |
| remove-object | objekt-entfernen | Objekt entfernen | Person aus Foto entfernen, Objekte aus Foto entfernen |
| blur-face | gesichter-verpixeln | Gesichter verpixeln (1K) | Gesicht verpixeln, Gesicht unkenntlich machen |
| blur-image | bild-unscharf-machen | Bild unscharf machen (590) | Bild weichzeichnen, Foto unscharf machen |
| blur-background | hintergrund-unscharf-machen | Hintergrund unscharf machen (880) | Hintergrund verschwommen |
| change-background-color | hintergrundfarbe-aendern | Hintergrundfarbe ändern (2.9K) | Hintergrund ändern, Hintergrund weiß machen |
| unblur-image | bild-schaerfen | Bild schärfen (1.9K) | Unscharfes Bild scharf machen (1.3K), Foto scharf machen |
| image-to-hd | bild-in-hd | Bild in HD | Foto HD, Auflösung erhöhen |
| passport-photo-maker | biometrisches-passbild | Biometrisches Passbild (33.1K) | Passbild erstellen, Passfoto, Bewerbungsfoto (mention 35 × 45 mm rules, Personalausweis/Reisepass; be honest that German authorities increasingly require photos from certified providers/E-Passbild — check the English copy's claims and do not invent legal facts) |
| meme-generator | meme-generator | Meme Generator (74K) | Meme erstellen (5.4K), Meme Maker |
| html-to-image | html-in-bild | HTML in Bild | |
| grayscale-image | bild-schwarz-weiss | Bild schwarz weiß (3.6K) | Schwarz-Weiß-Bild (8.1K), Foto schwarz weiß |
| add-border | rahmen-um-bild | Rahmen um Bild | Bilderrahmen online |
| circle-crop | bild-rund-zuschneiden | Bild rund zuschneiden | Foto rund ausschneiden, Bild Kreis |
| image-color-picker | farbwaehler | Farbwähler (9.9K) | Color Picker (40.5K), Farbe aus Bild, Farbpipette |
| image-metadata | exif-daten-anzeigen | EXIF-Daten anzeigen | EXIF-Daten, Metadaten Bild |
| remove-exif | metadaten-entfernen | Metadaten entfernen (880) | EXIF-Daten entfernen |
| image-overlay | bilder-ueberlagern | Bilder überlagern | Bild übereinander legen |
| split-image | bild-teilen | Bild teilen (590) | Bild aufteilen, Bild zerschneiden |
| instagram-grid-maker | instagram-grid-erstellen | Instagram Grid | Instagram Raster |
| gif-maker | gif-erstellen | GIF erstellen (9.9K) | GIF Maker (22.2K) |
| gif-to-images | gif-in-bilder | GIF in Bilder | Frames aus GIF |
| video-to-gif | video-in-gif | Video in GIF (9.9K) | MP4 in GIF (12.1K), Video zu GIF |
| gif-compressor | gif-komprimieren | GIF komprimieren (1.6K) | GIF verkleinern (720) |
| gif-resizer | gif-groesse-aendern | GIF Größe ändern | GIF verkleinern |
| gif-to-mp4 | gif-in-mp4 | GIF in MP4 (2.4K) | |
| webp-to-gif | webp-in-gif | WebP in GIF | |
| gif-cropper | gif-zuschneiden | GIF zuschneiden | |
| rotate-gif | gif-drehen | GIF drehen | |
| reverse-gif | gif-rueckwaerts | GIF rückwärts abspielen | |
| gif-speed-changer | gif-geschwindigkeit-aendern | GIF Geschwindigkeit ändern | |
| gif-cutter | gif-schneiden | GIF schneiden | |
| gif-to-webp / gif-to-apng | gif-in-webp / gif-in-apng | GIF in WebP / GIF in APNG | |
| gif-to-sprite-sheet | gif-in-sprite-sheet | Sprite Sheet (720) | |
| gif-merger | gifs-zusammenfuegen | GIFs zusammenfügen | |
| add-text-to-gif | text-in-gif-einfuegen | Text in GIF einfügen | Text auf GIF |
| typing-text-gif | schreibmaschinen-gif | Schreibmaschinen-GIF | Text-GIF |
| invert-image | bild-invertieren | Bild invertieren (720) | Farben invertieren, Bild negativ |
| pixelate-image | bild-verpixeln | Bild verpixeln (590) | Pixel Bild (9.9K) |
| image-brightness | bild-aufhellen | Bild aufhellen | Helligkeit ändern |
| glitch-effect | glitch-effekt | Glitch-Effekt | |
| round-corners | ecken-abrunden | Ecken abrunden | Abgerundete Ecken |
| flip-image | bild-spiegeln | Bild spiegeln (1.6K) | Foto spiegeln, spiegelverkehrt |
| reduce-image-size-in-kb | bildgroesse-in-kb-reduzieren | Bildgröße in KB reduzieren | Bilder verkleinern KB, Foto KB reduzieren |
| increase-image-size-in-kb | bildgroesse-in-kb-erhoehen | Bildgröße in KB erhöhen | |
| compress-image-to-NNkb / 1mb / 2mb | bild-auf-NNkb-verkleinern | Bild auf NN KB verkleinern | Bild unter 1 MB, Foto auf 100 KB verkleinern |
| jpg-to-pdf-under-NNkb | jpg-in-pdf-unter-NNkb | JPG in PDF unter NN KB | |
| signature-resizer | unterschrift-skalieren | Unterschrift skalieren | Unterschrift Bild |
| dpi-converter | dpi-aendern | DPI ändern | Bild DPI ändern |
| dpi-checker | dpi-pruefen | DPI prüfen | DPI herausfinden |
| resize-image-in-cm | bildgroesse-in-cm-aendern | Bildgröße in cm ändern | |
| 9-16-aspect-ratio-image | bild-9-16-1080x1920 | 9:16 Format (1.3K) | 1080x1920 (880), 9:16 Bild |
| youtube-thumbnail-resizer | youtube-thumbnail-groesse | YouTube Thumbnail Größe (1K) | |
| whatsapp-dp-resizer | whatsapp-profilbild | WhatsApp Profilbild (9.9K) | |
| linkedin-banner-resizer | linkedin-banner-groesse | LinkedIn Banner Größe | LinkedIn Banner (3.6K) |
| facebook-cover-resizer | facebook-titelbild-groesse | Facebook Titelbild Größe | Facebook Titelbild (1.6K) |
| discord-banner-resizer | discord-banner-groesse | Discord Banner Größe | Discord Banner (1.9K) |

Not shipped in German: 3x4-photo (Brazil-specific), 2x2-photo (US-specific).

## Files and gates

- Tool module: `src/content/tools/<id>.de.ts`. Copy the SHAPE of
  `<id>.en.ts` exactly (same fields, same feature `icon` values in the same
  order, same section `id`s, ≥ same number of FAQs) and set `locale: "de"`.
  Look at `<id>.pt.ts` for how a finished translation of that module is laid
  out (it shows which fields are localized and how the `ui` block looks).
- The `ui` block: run `node scripts/i18n-keys.mjs de <bucket>` from
  `frontimg/` — it prints every key that bucket needs, as `"English": "English"`.
  Translate the values; keys stay byte-identical English.
- Plurals: German has two forms; call sites already pair `"1 image"` /
  `"{n} images"` — translate both.
- Gates (run from `frontimg/`, all must pass for YOUR files):
  - `node scripts/i18n-keys.mjs de <your buckets>` → 0 missing
  - `node scripts/i18n-charset.mjs` (no stray characters)
  - `npx tsc --noEmit --incremental false` must not report errors in your files
- **Do not** touch `status.ts`, `slugs.ts`, routes under `src/app/de/`, or
  any file outside your assignment, and **do not run git** (another process
  commits). Do not run `npm run build` or start a dev server.
