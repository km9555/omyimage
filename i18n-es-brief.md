# Spanish (/es) authoring brief

Shared brief for everyone writing Spanish copy for oMyImage. Read it fully
before writing. The playbook is `conversion.md` (§3 per-page procedure, §6
traps, §12 German — the same rollout one language earlier). Finished
examples of every file type: German (`*.de.ts`, the most recent and closest
in shape), Portuguese (`*.pt.ts`).

## Market and voice — NEUTRAL Spanish

- ONE `/es` serves Spain AND Latin America. Mexico searches roughly twice as
  much as Spain on most head terms, so the copy must read naturally in both.
  Write "español neutro": standard grammar, no regionalisms.
- **Address the reader as "tú"** (iLoveIMG /es does): "Sube tu imagen",
  "Descarga el resultado". Button labels in the infinitive ("Subir imagen",
  "Descargar", "Comprimir").
- **Never** use Spain-only forms: no vosotros/vuestro/podéis, no "ordenador"
  (Spain) and no "computadora" (LatAm) — say "dispositivo", "equipo", "PC"
  or "teléfono". No "móvil" (Spain) / "celular" (LatAm) — say "teléfono".
  No "coger", no "pinchar" — use "hacer clic"/"tocar". The audit rejects
  ordenador, vosotros, vuestro, móvil, coger, pinchar.
- Write natively, not word-for-word. Short sentences, concrete numbers, no
  fluff. Keep every fact of the English page exactly (what runs in the
  browser vs the server, limits, formats).
- Quotation marks: use « » or plain “ ” for quoted UI labels — never a bare
  ASCII `"` inside a double-quoted TS string. Opening ¿ and ¡ are required.
- Numbers: decimal comma (2,5 MB), units with a space (100 KB). Dates
  DD/MM/AAAA. Units stay KB / MB / px / dpi / cm.
- Keep verbatim: **oMyImage**, format names (JPG, JPEG, PNG, WebP, HEIC,
  AVIF, GIF, BMP, SVG, ICO, PDF, MP4, APNG, EXIF), product names (WhatsApp,
  YouTube, LinkedIn, Facebook, Discord, Instagram, iPhone, Windows, macOS).
- Every `{placeholder}` in a key must appear in the translation (gate).
- Vocabulary: **imagen** is the head noun (comprimir imagen 14.8K ES / 27.1K
  MX vs comprimir foto 6.6K / 5.4K); "foto" only where the query uses it
  (foto carnet, foto de perfil, editor de fotos). archivo, subir, descargar,
  navegador, dispositivo, gratis, sin registro, sin marca de agua, calidad,
  resolución, tamaño del archivo. "IA" for AI. "quitar fondo" (not remover).

## SEO rules per tool page

- `metaTitle` (≤ 60 chars incl. " | oMyImage") and the H1/name lead with the
  **primary Spanish query** below, as people type it. metaTitle may add
  "– gratis y online" / "sin registro". metaDescription 140–160 chars with the
  primary query and one secondary.
- Use secondaries naturally in intro, one heading and one FAQ. No stuffing.
- FAQs: at least as many as English; you may ADD Spanish-market questions
  (privacy/"¿Se suben mis imágenes?", upload limits of government and job
  portals in general terms, Mexican/Spanish ID-photo context on the carnet
  page) — never invented limits for named institutions.
- Every tool page must RENDER ≥ 900 words; don't shorten the English.
- Variant pages (comprimir-imagen-a-50kb etc.) stay distinct from each other
  (similarity ceiling 0.6) — translate each one's own specifics.

## Primary Spanish queries (ES / MX volume per month, Nov 2026)

| id | es slug | primary query | secondary |
|---|---|---|---|
| remove-background | quitar-fondo | Quitar fondo (201K / 450K) | quitar fondo imagen (90.5K / 110K), eliminar fondo (40.5K / 90.5K), borrar fondo, fondo transparente, gratis |
| image-to-pdf | imagen-a-pdf | Imagen a PDF (18.1K / 165K) | JPG a PDF (90.5K / 201K), convertir imagen a PDF (135K MX), foto a PDF, PNG a PDF |
| compress-image | comprimir-imagen | Comprimir imagen (14.8K / 27.1K) | comprimir imágenes, reducir tamaño de imagen, comprimir JPG, comprimir PNG, reducir peso imagen |
| image-editor | editor-de-fotos | Editor de fotos (12.1K / 33.1K) | editar fotos, editar imagen, editor de imágenes, gratis, online |
| merge-images | unir-imagenes | Unir imágenes | unir fotos, juntar fotos, combinar imágenes, collage de fotos (33.1K MX — mention naturally) |
| remove-watermark | quitar-marca-de-agua | Quitar marca de agua (22.2K / 33.1K, KD ≤ 11) | eliminar marca de agua, borrar marca de agua |
| watermark-image | marca-de-agua | Marca de agua (6.6K / 12.1K) | poner / agregar / añadir marca de agua |
| image-color-picker | selector-de-color | Selector de color | Color picker (18.1K / 27.1K), obtener color de imagen, cuentagotas |
| meme-generator | generador-de-memes | Generador de memes | Meme generator (18.1K), crear memes |
| resize-image | redimensionar-imagen | Redimensionar imagen (12.1K / 9.9K) | cambiar tamaño de imagen, reducir imagen, escalar imagen |
| crop-image | recortar-imagen | Recortar imagen (9.9K / 12.1K) | recortar foto |
| rotate-image | girar-imagen | Girar imagen | rotar imagen, girar foto |
| flip-image | voltear-imagen | Voltear imagen | espejo imagen, invertir imagen horizontal |
| image-to-text | imagen-a-texto | Imagen a texto (6.6K / 14.8K) | convertir imagen a texto, extraer texto de imagen, OCR online |
| upscale-image | mejorar-calidad-imagen | Mejorar calidad de imagen (8.1K) | mejorar calidad de foto, aumentar resolución, upscale, escalar imagen |
| image-to-hd | convertir-imagen-a-hd | Convertir imagen a HD | imagen HD, foto HD |
| unblur-image | mejorar-nitidez-foto | Mejorar nitidez de foto | quitar desenfoque, nitidez imagen |
| convert-to-jpg | convertir-a-jpg | Convertir a JPG (9.9K / 12.1K) | convertir imagen a JPG |
| convert-to-png / -webp | convertir-a-png / -webp | Convertir a PNG (5.4K / 9.9K) / a WebP | convertir imagen a PNG |
| png-to-jpg | png-a-jpg | PNG a JPG (14.8K) | convertir PNG a JPG |
| jpg-to-png | jpg-a-png | JPG a PNG (9.9K / 22.2K) | convertir JPG a PNG |
| heic-to-jpg | heic-a-jpg | HEIC a JPG (14.8K) | convertir HEIC a JPG, fotos de iPhone |
| heic-to-png | heic-a-png | HEIC a PNG | |
| svg-to-png | svg-a-png | SVG a PNG (8.1K / 5.4K) | convertir SVG a PNG |
| png-to-ico | png-a-ico | PNG a ICO (6.6K / 5.4K) | crear favicon |
| image-to-base64 / base64-to-image | imagen-a-base64 / base64-a-imagen | Imagen a Base64 / Base64 a imagen | |
| gif-maker | crear-gif | Crear GIF | hacer GIF, GIF maker (KD 77+) |
| video-to-gif | video-a-gif | Video a GIF (6.6K / 8.1K) | MP4 a GIF, convertir video a GIF |
| gif-compressor | comprimir-gif | Comprimir GIF (2.9K) | reducir tamaño GIF |
| gif-to-mp4 | gif-a-mp4 | GIF a MP4 | |
| other GIF tools | redimensionar-gif, recortar-gif, girar-gif, invertir-gif, cambiar-velocidad-gif, cortar-gif, gif-a-webp, gif-a-apng, gif-a-sprite-sheet, unir-gifs, agregar-texto-a-gif, gif-de-texto-escribiendo, webp-a-gif, gif-a-imagenes | as the slug reads | |
| blur-face | pixelar-cara | Pixelar cara (1K ES) | difuminar cara, difuminar rostro, censurar cara |
| blur-image | difuminar-imagen | Difuminar imagen | desenfocar imagen, desenfocar foto |
| blur-background | desenfocar-fondo | Desenfocar fondo (1.3K MX) | difuminar fondo |
| change-background-color | cambiar-fondo-foto | Cambiar fondo de foto | fondo blanco foto (1.3K / 2.9K), cambiar color de fondo |
| remove-object | eliminar-objetos-de-fotos | Eliminar objetos de fotos (6.6K MX, KD 0) | quitar personas de fotos, borrar objetos |
| grayscale-image | imagen-blanco-y-negro | Imagen en blanco y negro | foto blanco y negro, pasar foto a blanco y negro |
| add-border | agregar-borde-a-imagen | Agregar borde a imagen | marco para fotos |
| circle-crop | recortar-foto-en-circulo | Recortar foto en círculo | recortar imagen circular, foto circular |
| image-metadata / remove-exif | ver-metadatos-imagen / eliminar-metadatos | Ver metadatos de imagen / Eliminar metadatos | EXIF |
| image-overlay | superponer-imagenes | Superponer imágenes | |
| split-image | dividir-imagen | Dividir imagen (3.6K MX) | cortar imagen en partes |
| instagram-grid-maker | cuadricula-instagram | Cuadrícula para Instagram | dividir foto para Instagram |
| invert-image | invertir-colores-imagen | Invertir colores (1.3K / 2.4K) | negativo de imagen |
| pixelate-image | pixelar-imagen | Pixelar imagen | pixelar foto |
| image-brightness | ajustar-brillo-imagen | Ajustar brillo de imagen | |
| glitch-effect | efecto-glitch | Efecto glitch | |
| round-corners | redondear-esquinas-imagen | Redondear esquinas | bordes redondeados |
| passport-photo-maker | foto-carnet | Foto carnet (33.1K ES) | foto DNI (14.8K ES), foto tamaño carnet, foto para pasaporte, foto infantil (6.6K MX). The tool's presets are 35×45 mm, 2×2 in, 3×4 cm, 4×6 cm, 2×3 cm, 5×7 cm, 33×48 mm, 50×70 mm — there is NO Spanish DNI (26×32 mm) or Mexican "infantil" (2.5×3 cm) preset, so do not promise one. You may say the 35×45 mm preset suits EU passports/visas and that other sizes can be made by cropping to a custom size only if the English copy says so. Never claim acceptance by an authority. |
| reduce/increase-image-size-in-kb | reducir-tamano-imagen-kb / aumentar-tamano-imagen-kb | Reducir tamaño de imagen en KB | |
| compress-image-to-NNkb / 1mb / 2mb | comprimir-imagen-a-NNkb | Comprimir imagen a NN KB | reducir foto a NN KB |
| jpg-to-pdf-under-NNkb | jpg-a-pdf-menos-de-NNkb | JPG a PDF de menos de NN KB | |
| signature-resizer | redimensionar-firma | Redimensionar firma | firma digital en imagen |
| dpi-converter / dpi-checker | cambiar-dpi-imagen / ver-dpi-imagen | Cambiar DPI de imagen / Ver DPI | |
| resize-image-in-cm | redimensionar-imagen-en-cm | Redimensionar imagen en cm | |
| 9-16-aspect-ratio-image | imagen-9-16-1080x1920 | Formato 9:16 (1.3K MX) | 1080x1920 (1K / 1.9K) |
| youtube-thumbnail-resizer | tamano-miniatura-youtube | Tamaño de miniatura de YouTube | |
| whatsapp-dp-resizer | foto-de-perfil-whatsapp | Foto de perfil de WhatsApp (14.8K MX, KD 0) | sin recortar |
| linkedin-banner-resizer | banner-linkedin | Banner de LinkedIn | tamaño |
| facebook-cover-resizer | portada-facebook | Portada de Facebook | tamaño portada Facebook |
| discord-banner-resizer | banner-discord | Banner de Discord | |

Not shipped in Spanish: 3x4-photo (Brazil), 2x2-photo (US) — but give them
Spanish names in `dictionaries/es/tools.ts` so lists never fall back.

## Files and gates

- Tool module: `src/content/tools/<id>.es.ts`, the SHAPE of `<id>.en.ts`
  exactly (fields, feature `icon`s in order, section `id`s, ≥ FAQ count),
  `locale: "es"`. `<id>.de.ts` shows how the most recent locale laid out the
  same module, including shared `ui` blocks reused across sibling tools
  (e.g. `ui: cropper.ui`) and module-scope labels the key script cannot see.
- `ui` block: `node scripts/i18n-keys.mjs es <bucket>` (from `frontimg/`)
  prints every key; translate the values, keys stay byte-identical English.
  Mark values deliberately identical to English with `// i18n-same`.
- Spanish has two plural forms; translate both `"1 image"` / `"{n} images"`.
- Gates (from `frontimg/`): `node scripts/i18n-keys.mjs es <your buckets>` → 0
  missing; `node scripts/i18n-charset.mjs`; `npx tsc --noEmit --incremental
  false` with no errors in YOUR files.
- **Do not** touch status.ts, slugs.ts, routes under `src/app/es/` (except the
  legal writer), registries, or files outside your assignment. **No git, no
  build, no dev server.**

## Shared UI glossary (use EXACTLY these, in ui blocks and when prose quotes a button)

Copy written by one person often quotes another tool's button. These fixed
renderings keep the page text and the UI identical:

| English key | Spanish |
|---|---|
| Compress | Comprimir |
| Compress & download | Comprimir y descargar |
| Download | Descargar |
| Select images / Select image | Seleccionar imágenes / Seleccionar imagen |
| Resize | Redimensionar |
| Resize & download | Redimensionar y descargar |
| Crop to fill | Recortar y rellenar |
| Pad | Rellenar con borde |
| Blur fill | Fondo difuminado |
| Padding colour | Color del borde |
| Custom size | Tamaño personalizado |
| Keep aspect ratio (fit) | Mantener proporción (ajustar) |
| Create PDF | Crear PDF |
| Images per page | Imágenes por página |
| Fit to image | Ajustar a la imagen |
| Remove background | Quitar fondo |
| Accept All / Reject All / Customize | Aceptar todo / Rechazar todo / Personalizar |
| Cookie Settings | Configuración de cookies |
| Continue with Google | Continuar con Google |
| Import from Google Drive | Importar desde Google Drive |
| Last updated: | Última actualización: |

Tool names quoted in prose use the H1 names in the table above
(«Quitar fondo», «Comprimir imagen», «Unir imágenes», «Crear GIF»…).
