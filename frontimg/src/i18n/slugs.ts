/**
 * Translated tool slugs, keyed by tool **id**. Ported from oMyPDF.
 *
 * Keyed by id and NOT by slug: every oMyImage id happens to equal its English
 * slug today, but oMyPDF has five that differ and the id is the only key
 * guaranteed to stay stable. English slugs are NOT repeated here — they are
 * read straight from the tool registry so the two can't drift.
 *
 * ── Slug conventions (Portuguese — Brazilian) ──────────────────────────────
 * Hyphen-separated, all lowercase, ASCII only (ã→a, ç→c, é→e, "d'água"→dagua)
 * so URLs never percent-encode in sitemaps, analytics or shared links.
 *
 * The slug carries the phrase Brazilians actually search, checked against the
 * market rather than translated word by word (conversion.md §5):
 *   • "x para y" is the converter pattern — iLoveIMG /pt/png-para-jpg, Adobe
 *     BR, Smallpdf /pt all use it.
 *   • Brazilian vocabulary over European: girar (not rodar), rosto (not cara).
 *     iLoveIMG /pt uses rodar-imagem and desfocar-cara, and mixes "ficheiro"
 *     into Brazilian copy; that inconsistency is a thing to beat, not copy.
 *
 * ── Slug conventions (Hindi) ───────────────────────────────────────────────
 * Hindi keeps the **English** slug: `/hi/compress-image`, not
 * `/hi/image-compress-karen`.
 *
 * Both localized competitors do this — iLoveIMG ships `/hi/compress-image`,
 * `/hi/resize-image` and `/hi/remove-background` (verified live 2026-09-20),
 * and Smallpdf `/hi/compress-pdf`. Indian searches for these tools are
 * overwhelmingly typed in English or Hinglish, so a transliterated slug would
 * carry a phrase nobody searches while permanently owning the URL. The Hindi
 * page still competes for Hindi-script queries — through its COPY, which is
 * where "फोटो का साइज कम करें" belongs.
 *
 * It is also the only form the codebase allows: the audit requires ASCII-only
 * slugs so URLs never percent-encode, and Devanagari cannot be expressed in
 * `[a-z0-9-]`.
 *
 * The map below is therefore 40 identical pairs. That is deliberate and it is
 * NOT to be replaced with `Object.fromEntries(TOOLS.map(…))`: a derived map has
 * no literal `"key": "value"` pairs and no closing `};` of its own, which broke
 * two of oMyPDF's regex parsers (its conversion.md §4.28) — ours read this file
 * the same way (i18n-verify, i18n-audit, gen-converters, verify-build).
 *
 * A slug is FOREVER once shipped (listed in status.ts) — changing one orphans
 * its rankings. Until then it can still be corrected at the start of its batch.
 */
import { TOOLS, TOOLS_BY_ID } from "@/lib/tools";
import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  type Locale,
  type TranslatedLocale,
} from "@/i18n/config";

const PT_TOOL_SLUGS: Record<string, string> = {
  // ── Otimizar ─────────────────────────────────────────────────────────
  "compress-image": "comprimir-imagem",
  "resize-image": "redimensionar-imagem",
  "crop-image": "recortar-imagem",
  "rotate-image": "girar-imagem",

  // ── Converter ────────────────────────────────────────────────────────
  "convert-to-jpg": "converter-para-jpg",
  "png-to-jpg": "png-para-jpg",
  "jpg-to-png": "jpg-para-png",
  "webp-to-png": "webp-para-png",
  "heic-to-png": "heic-para-png",
  "image-to-text": "imagem-em-texto",
  "webp-to-jpg": "webp-para-jpg",
  "jpg-to-webp": "jpg-para-webp",
  "png-to-webp": "png-para-webp",
  "jfif-to-jpg": "jfif-para-jpg",
  "gif-to-png": "gif-para-png",
  "gif-to-jpg": "gif-para-jpg",
  "bmp-to-jpg": "bmp-para-jpg",
  "avif-to-jpg": "avif-para-jpg",
  "avif-to-png": "avif-para-png",
  "heic-to-jpg": "heic-para-jpg",
  "image-to-pdf": "imagem-para-pdf",
  "image-to-base64": "imagem-para-base64",
  "base64-to-image": "base64-para-imagem",
  "gif-to-images": "gif-para-imagens",

  // ── Editar e criar ───────────────────────────────────────────────────
  "image-editor": "editor-de-fotos",
  "watermark-image": "colocar-marca-dagua",
  "meme-generator": "gerador-de-memes",
  "html-to-image": "html-para-imagem",
  "blur-face": "desfocar-rosto",
  "grayscale-image": "imagem-preto-e-branco",
  "blur-image": "desfocar-imagem",
  "add-border": "adicionar-borda",
  "circle-crop": "recortar-imagem-em-circulo",
  "merge-images": "juntar-imagens",
  "image-color-picker": "seletor-de-cores",
  "image-metadata": "ver-metadados-imagem",
  "remove-exif": "remover-exif",
  "gif-maker": "criar-gif",

  // ── IA ───────────────────────────────────────────────────────────────
  "remove-background": "remover-fundo",
  "upscale-image": "melhorar-qualidade-imagem",

  // ── Variants: compress-image to a file size (expansion.md §5) ─────────
  "reduce-image-size-in-kb": "reduzir-tamanho-da-imagem-em-kb",
  "compress-image-to-20kb": "comprimir-imagem-para-20kb",
  "compress-image-to-50kb": "comprimir-imagem-para-50kb",
  "compress-image-to-100kb": "comprimir-imagem-para-100kb",
  "compress-image-to-200kb": "comprimir-imagem-para-200kb",
  "compress-image-to-1mb": "comprimir-imagem-para-1mb",
  "compress-image-to-10kb": "comprimir-imagem-para-10kb",
  "compress-image-to-30kb": "comprimir-imagem-para-30kb",
  "compress-image-to-300kb": "comprimir-imagem-para-300kb",
  "compress-image-to-500kb": "comprimir-imagem-para-500kb",
  "compress-image-to-2mb": "comprimir-imagem-para-2mb",
  "compress-image-to-15kb": "comprimir-imagem-para-15kb",
  "compress-image-to-40kb": "comprimir-imagem-para-40kb",
  "compress-image-to-150kb": "comprimir-imagem-para-150kb",
  "increase-image-size-in-kb": "aumentar-tamanho-da-imagem-em-kb",
  "signature-resizer": "redimensionar-assinatura",
  "jpg-to-pdf-under-100kb": "jpg-para-pdf-ate-100kb",
  "jpg-to-pdf-under-200kb": "jpg-para-pdf-ate-200kb",
  "jpg-to-pdf-under-300kb": "jpg-para-pdf-ate-300kb",
  "jpg-to-pdf-under-500kb": "jpg-para-pdf-ate-500kb",
  "convert-to-png": "converter-para-png",
  "convert-to-webp": "converter-para-webp",
  "svg-to-png": "svg-para-png",
  "png-to-ico": "png-para-ico",
  "youtube-thumbnail-resizer": "redimensionar-thumbnail-youtube",
  "whatsapp-dp-resizer": "foto-de-perfil-whatsapp",
  "linkedin-banner-resizer": "redimensionar-capa-linkedin",
  "facebook-cover-resizer": "redimensionar-capa-facebook",
  "discord-banner-resizer": "redimensionar-banner-discord",
  "9-16-aspect-ratio-image": "imagem-9-16-1080x1920",
  "dpi-converter": "alterar-dpi-da-imagem",
  "dpi-checker": "verificar-dpi-da-imagem",
  "resize-image-in-cm": "redimensionar-imagem-em-cm",
  "video-to-gif": "video-para-gif",
  "gif-compressor": "comprimir-gif",
  "gif-resizer": "redimensionar-gif",
  "gif-to-mp4": "gif-para-mp4",
  "webp-to-gif": "webp-para-gif",
  "gif-cropper": "recortar-gif",
  "rotate-gif": "girar-gif",
  "reverse-gif": "inverter-gif",
  "gif-speed-changer": "alterar-velocidade-gif",
  "gif-cutter": "cortar-gif",
  "gif-to-webp": "gif-para-webp",
  "gif-to-apng": "gif-para-apng",
  "gif-to-sprite-sheet": "gif-para-sprite-sheet",
  "gif-merger": "juntar-gif",
  "add-text-to-gif": "colocar-texto-em-gif",
  "typing-text-gif": "gif-de-texto-digitando",
  "invert-image": "inverter-cores-da-imagem",
  "pixelate-image": "pixelar-imagem",
  "image-brightness": "ajustar-brilho-da-imagem",
  "glitch-effect": "efeito-glitch",
  "round-corners": "arredondar-cantos-da-imagem",
  "remove-watermark": "remover-marca-dagua",
  "remove-object": "remover-objetos-da-foto",
  "split-image": "dividir-imagem",
  "image-overlay": "sobrepor-imagens",

  // ── Variants: upscale, rotate, remove-background (expansion.md §5) ────
  "image-to-hd": "imagem-em-hd",
  "unblur-image": "tirar-desfoque-da-foto",
  "flip-image": "espelhar-imagem",
  "change-background-color": "trocar-fundo-da-foto",
  "blur-background": "desfocar-fundo",

  // ── Passport / ID photo maker and variants (expansion.md §5) ──────────
  "passport-photo-maker": "foto-para-documento",
  "3x4-photo": "foto-3x4",
  "2x2-photo": "foto-2x2",
  "instagram-grid-maker": "dividir-foto-para-instagram",
};

/** Hindi keeps the English slug — see the header. Authored, never derived. */
const HI_TOOL_SLUGS: Record<string, string> = {
  // ── ऑप्टिमाइज़ ─────────────────────────────────────────────────────────
  "compress-image": "compress-image",
  "resize-image": "resize-image",
  "crop-image": "crop-image",
  "rotate-image": "rotate-image",

  // ── कन्वर्ट ──────────────────────────────────────────────────────────
  "convert-to-jpg": "convert-to-jpg",
  "png-to-jpg": "png-to-jpg",
  "jpg-to-png": "jpg-to-png",
  "webp-to-png": "webp-to-png",
  "heic-to-png": "heic-to-png",
  "image-to-text": "image-to-text",
  "webp-to-jpg": "webp-to-jpg",
  "jpg-to-webp": "jpg-to-webp",
  "png-to-webp": "png-to-webp",
  "jfif-to-jpg": "jfif-to-jpg",
  "gif-to-png": "gif-to-png",
  "gif-to-jpg": "gif-to-jpg",
  "bmp-to-jpg": "bmp-to-jpg",
  "avif-to-jpg": "avif-to-jpg",
  "avif-to-png": "avif-to-png",
  "heic-to-jpg": "heic-to-jpg",
  "image-to-pdf": "image-to-pdf",
  "image-to-base64": "image-to-base64",
  "base64-to-image": "base64-to-image",
  "gif-to-images": "gif-to-images",

  // ── एडिट और क्रिएट ───────────────────────────────────────────────────
  "image-editor": "image-editor",
  "watermark-image": "watermark-image",
  "meme-generator": "meme-generator",
  "html-to-image": "html-to-image",
  "blur-face": "blur-face",
  "grayscale-image": "grayscale-image",
  "blur-image": "blur-image",
  "add-border": "add-border",
  "circle-crop": "circle-crop",
  "merge-images": "merge-images",
  "image-color-picker": "image-color-picker",
  "image-metadata": "image-metadata",
  "remove-exif": "remove-exif",
  "gif-maker": "gif-maker",

  // ── AI ───────────────────────────────────────────────────────────────
  "remove-background": "remove-background",
  "upscale-image": "upscale-image",

  // ── Variants: compress-image to a file size (expansion.md §5) ─────────
  "reduce-image-size-in-kb": "reduce-image-size-in-kb",
  "compress-image-to-20kb": "compress-image-to-20kb",
  "compress-image-to-50kb": "compress-image-to-50kb",
  "compress-image-to-100kb": "compress-image-to-100kb",
  "compress-image-to-200kb": "compress-image-to-200kb",
  "compress-image-to-1mb": "compress-image-to-1mb",
  "compress-image-to-10kb": "compress-image-to-10kb",
  "compress-image-to-30kb": "compress-image-to-30kb",
  "compress-image-to-300kb": "compress-image-to-300kb",
  "compress-image-to-500kb": "compress-image-to-500kb",
  "compress-image-to-2mb": "compress-image-to-2mb",
  "compress-image-to-15kb": "compress-image-to-15kb",
  "compress-image-to-40kb": "compress-image-to-40kb",
  "compress-image-to-150kb": "compress-image-to-150kb",
  "increase-image-size-in-kb": "increase-image-size-in-kb",
  "signature-resizer": "signature-resizer",
  "jpg-to-pdf-under-100kb": "jpg-to-pdf-under-100kb",
  "jpg-to-pdf-under-200kb": "jpg-to-pdf-under-200kb",
  "jpg-to-pdf-under-300kb": "jpg-to-pdf-under-300kb",
  "jpg-to-pdf-under-500kb": "jpg-to-pdf-under-500kb",
  "convert-to-png": "convert-to-png",
  "convert-to-webp": "convert-to-webp",
  "svg-to-png": "svg-to-png",
  "png-to-ico": "png-to-ico",
  "youtube-thumbnail-resizer": "youtube-thumbnail-resizer",
  "whatsapp-dp-resizer": "whatsapp-dp-resizer",
  "linkedin-banner-resizer": "linkedin-banner-resizer",
  "facebook-cover-resizer": "facebook-cover-resizer",
  "discord-banner-resizer": "discord-banner-resizer",
  "9-16-aspect-ratio-image": "9-16-aspect-ratio-image",
  "dpi-converter": "dpi-converter",
  "dpi-checker": "dpi-checker",
  "resize-image-in-cm": "resize-image-in-cm",
  "video-to-gif": "video-to-gif",
  "gif-compressor": "gif-compressor",
  "gif-resizer": "gif-resizer",
  "gif-to-mp4": "gif-to-mp4",
  "webp-to-gif": "webp-to-gif",
  "gif-cropper": "gif-cropper",
  "rotate-gif": "rotate-gif",
  "reverse-gif": "reverse-gif",
  "gif-speed-changer": "gif-speed-changer",
  "gif-cutter": "gif-cutter",
  "gif-to-webp": "gif-to-webp",
  "gif-to-apng": "gif-to-apng",
  "gif-to-sprite-sheet": "gif-to-sprite-sheet",
  "gif-merger": "gif-merger",
  "add-text-to-gif": "add-text-to-gif",
  "typing-text-gif": "typing-text-gif",
  "invert-image": "invert-image",
  "pixelate-image": "pixelate-image",
  "image-brightness": "image-brightness",
  "glitch-effect": "glitch-effect",
  "round-corners": "round-corners",
  "remove-watermark": "remove-watermark",
  "remove-object": "remove-object",
  "split-image": "split-image",
  "image-overlay": "image-overlay",

  // ── Variants: upscale, rotate, remove-background (expansion.md §5) ────
  "image-to-hd": "image-to-hd",
  "unblur-image": "unblur-image",
  "flip-image": "flip-image",
  "change-background-color": "change-background-color",
  "blur-background": "blur-background",

  // ── Passport / ID photo maker and variants (expansion.md §5) ──────────
  "passport-photo-maker": "passport-photo-maker",
  "3x4-photo": "3x4-photo",
  "2x2-photo": "2x2-photo",
  "instagram-grid-maker": "instagram-grid-maker",
};

/**
 * Russian keeps the ENGLISH slug, like Hindi and unlike Portuguese.
 *
 * iLoveIMG does the same: /ru/compress-image is a live page and the
 * transliterated /ru/szhat-izobrazhenie is a 404. Transliterating Cyrillic
 * gives no keyword benefit — Google reads the page's language from its content
 * and hreflang, not its path — and it produces slugs a Russian reader cannot
 * type and an English speaker cannot recognise. i18n-audit also requires
 * lowercase ASCII, which Cyrillic could only satisfy via percent-encoding.
 */
const RU_TOOL_SLUGS: Record<string, string> = {
  // ── Оптимизация ─────────────────────────────────────────────────────────
  "compress-image": "compress-image",
  "resize-image": "resize-image",
  "crop-image": "crop-image",
  "rotate-image": "rotate-image",

  // ── Конвертация ──────────────────────────────────────────────────────────
  "convert-to-jpg": "convert-to-jpg",
  "png-to-jpg": "png-to-jpg",
  "jpg-to-png": "jpg-to-png",
  "webp-to-png": "webp-to-png",
  "heic-to-png": "heic-to-png",
  "image-to-text": "image-to-text",
  "webp-to-jpg": "webp-to-jpg",
  "jpg-to-webp": "jpg-to-webp",
  "png-to-webp": "png-to-webp",
  "jfif-to-jpg": "jfif-to-jpg",
  "gif-to-png": "gif-to-png",
  "gif-to-jpg": "gif-to-jpg",
  "bmp-to-jpg": "bmp-to-jpg",
  "avif-to-jpg": "avif-to-jpg",
  "avif-to-png": "avif-to-png",
  "heic-to-jpg": "heic-to-jpg",
  "image-to-pdf": "image-to-pdf",
  "image-to-base64": "image-to-base64",
  "base64-to-image": "base64-to-image",
  "gif-to-images": "gif-to-images",

  // ── Редактирование и создание ───────────────────────────────────────────────────
  "image-editor": "image-editor",
  "watermark-image": "watermark-image",
  "meme-generator": "meme-generator",
  "html-to-image": "html-to-image",
  "blur-face": "blur-face",
  "grayscale-image": "grayscale-image",
  "blur-image": "blur-image",
  "add-border": "add-border",
  "circle-crop": "circle-crop",
  "merge-images": "merge-images",
  "image-color-picker": "image-color-picker",
  "image-metadata": "image-metadata",
  "remove-exif": "remove-exif",
  "gif-maker": "gif-maker",

  // ── AI ───────────────────────────────────────────────────────────────
  "remove-background": "remove-background",
  "upscale-image": "upscale-image",

  // ── Variants: compress-image to a file size (expansion.md §5) ─────────
  "reduce-image-size-in-kb": "reduce-image-size-in-kb",
  "compress-image-to-20kb": "compress-image-to-20kb",
  "compress-image-to-50kb": "compress-image-to-50kb",
  "compress-image-to-100kb": "compress-image-to-100kb",
  "compress-image-to-200kb": "compress-image-to-200kb",
  "compress-image-to-1mb": "compress-image-to-1mb",
  "compress-image-to-10kb": "compress-image-to-10kb",
  "compress-image-to-30kb": "compress-image-to-30kb",
  "compress-image-to-300kb": "compress-image-to-300kb",
  "compress-image-to-500kb": "compress-image-to-500kb",
  "compress-image-to-2mb": "compress-image-to-2mb",
  "compress-image-to-15kb": "compress-image-to-15kb",
  "compress-image-to-40kb": "compress-image-to-40kb",
  "compress-image-to-150kb": "compress-image-to-150kb",
  "increase-image-size-in-kb": "increase-image-size-in-kb",
  "signature-resizer": "signature-resizer",
  "jpg-to-pdf-under-100kb": "jpg-to-pdf-under-100kb",
  "jpg-to-pdf-under-200kb": "jpg-to-pdf-under-200kb",
  "jpg-to-pdf-under-300kb": "jpg-to-pdf-under-300kb",
  "jpg-to-pdf-under-500kb": "jpg-to-pdf-under-500kb",
  "convert-to-png": "convert-to-png",
  "convert-to-webp": "convert-to-webp",
  "svg-to-png": "svg-to-png",
  "png-to-ico": "png-to-ico",
  "youtube-thumbnail-resizer": "youtube-thumbnail-resizer",
  "whatsapp-dp-resizer": "whatsapp-dp-resizer",
  "linkedin-banner-resizer": "linkedin-banner-resizer",
  "facebook-cover-resizer": "facebook-cover-resizer",
  "discord-banner-resizer": "discord-banner-resizer",
  "9-16-aspect-ratio-image": "9-16-aspect-ratio-image",
  "dpi-converter": "dpi-converter",
  "dpi-checker": "dpi-checker",
  "resize-image-in-cm": "resize-image-in-cm",
  "video-to-gif": "video-to-gif",
  "gif-compressor": "gif-compressor",
  "gif-resizer": "gif-resizer",
  "gif-to-mp4": "gif-to-mp4",
  "webp-to-gif": "webp-to-gif",
  "gif-cropper": "gif-cropper",
  "rotate-gif": "rotate-gif",
  "reverse-gif": "reverse-gif",
  "gif-speed-changer": "gif-speed-changer",
  "gif-cutter": "gif-cutter",
  "gif-to-webp": "gif-to-webp",
  "gif-to-apng": "gif-to-apng",
  "gif-to-sprite-sheet": "gif-to-sprite-sheet",
  "gif-merger": "gif-merger",
  "add-text-to-gif": "add-text-to-gif",
  "typing-text-gif": "typing-text-gif",
  "invert-image": "invert-image",
  "pixelate-image": "pixelate-image",
  "image-brightness": "image-brightness",
  "glitch-effect": "glitch-effect",
  "round-corners": "round-corners",
  "remove-watermark": "remove-watermark",
  "remove-object": "remove-object",
  "split-image": "split-image",
  "image-overlay": "image-overlay",

  // ── Variants: upscale, rotate, remove-background (expansion.md §5) ────
  "image-to-hd": "image-to-hd",
  "unblur-image": "unblur-image",
  "flip-image": "flip-image",
  "change-background-color": "change-background-color",
  "blur-background": "blur-background",

  // ── Passport / ID photo maker and variants (expansion.md §5) ──────────
  "passport-photo-maker": "passport-photo-maker",
  "3x4-photo": "3x4-photo",
  "2x2-photo": "2x2-photo",
  "instagram-grid-maker": "instagram-grid-maker",
};

/**
 * ── Slug conventions (Indonesian) ─────────────────────────────────────────
 * Indonesian TRANSLATES its slugs, like Portuguese and unlike Hindi/Russian.
 * Verified live 2026-09-24: iLoveIMG serves `/id/kompres-gambar` (200) and
 * 404s `/id/compress-image`, while it serves `/ru/compress-image`; so does
 * imagetotext.info (`/id/gambar-ke-teks`). The split is script, not size: a
 * Latin-script language gets its own words in the URL, and Indonesian has no
 * diacritics at all, so its slugs are already the plain ASCII the audit
 * requires.
 *
 * Each slug is the phrase Indonesians measurably type — Indonesia (2360) / id,
 * two keyword calls, figures per month — which is NOT what iLoveIMG chose:
 *   • Head noun is `foto`, not `gambar`: kompres foto 673,000 vs kompres
 *     gambar 18,100. iLoveIMG ships kompres-gambar.
 *   • English loanwords win where they have taken over: hapus background
 *     1,220,000 vs hapus latar belakang 201,000 (iLoveIMG's); crop foto 14,800
 *     vs potong foto 8,100; blur, color picker, gif maker, meme generator,
 *     watermark, and — by far the biggest — "hd foto" at 823,000 for upscale.
 *   • Native Indonesian wins where a natural phrase exists: gabungkan foto,
 *     bingkai foto (33,100 vs border foto 320), foto hitam putih, ubah foto ke
 *     jpg (22,200 vs konversi ke jpg 880, iLoveIMG's).
 *   • `gambar` survives only where the object is not a photograph: OCR
 *     (gambar ke teks 5,400 — "foto ke teks" returned nothing), a rendered web
 *     page, and a GIF's frames.
 *   • `x ke y` is the converter pattern ("ke" = "to"): png-ke-jpg.
 *   • The Base64 pair keeps its English slugs because that is what is typed
 *     ("image to base64" 1,600; "gambar ke base64" returned nothing) — it is a
 *     developer tool and the query is a developer's.
 *
 * A slug is FOREVER once shipped. Every one below was settled by measurement
 * before the first page, precisely so none of them has to move.
 */
const ID_TOOL_SLUGS: Record<string, string> = {
  // ── Optimasi ───────────────────────────────────────────────────────────
  "compress-image": "kompres-foto",
  "resize-image": "ubah-ukuran-foto",
  "crop-image": "crop-foto",
  "rotate-image": "putar-foto",

  // ── Konversi ───────────────────────────────────────────────────────────
  "convert-to-jpg": "ubah-foto-ke-jpg",
  "png-to-jpg": "png-ke-jpg",
  "jpg-to-png": "jpg-ke-png",
  "webp-to-png": "webp-ke-png",
  "heic-to-png": "heic-ke-png",
  "image-to-text": "gambar-ke-teks",
  "webp-to-jpg": "webp-ke-jpg",
  "jpg-to-webp": "jpg-ke-webp",
  "png-to-webp": "png-ke-webp",
  "jfif-to-jpg": "jfif-ke-jpg",
  "gif-to-png": "gif-ke-png",
  "gif-to-jpg": "gif-ke-jpg",
  "bmp-to-jpg": "bmp-ke-jpg",
  "avif-to-jpg": "avif-ke-jpg",
  "avif-to-png": "avif-ke-png",
  "heic-to-jpg": "heic-ke-jpg",
  "image-to-pdf": "foto-ke-pdf",
  "image-to-base64": "image-to-base64",
  "base64-to-image": "base64-to-image",
  "gif-to-images": "gif-ke-gambar",

  // ── Edit & buat ────────────────────────────────────────────────────────
  "image-editor": "editor-foto",
  "watermark-image": "watermark-foto",
  "meme-generator": "meme-generator",
  "html-to-image": "html-ke-gambar",
  "blur-face": "blur-wajah",
  "grayscale-image": "foto-hitam-putih",
  "blur-image": "blur-foto",
  "add-border": "bingkai-foto",
  "circle-crop": "crop-foto-bulat",
  "merge-images": "gabungkan-foto",
  "image-color-picker": "color-picker",
  "image-metadata": "metadata-foto",
  "remove-exif": "hapus-exif",
  "gif-maker": "gif-maker",

  // ── AI ─────────────────────────────────────────────────────────────────
  "remove-background": "hapus-background",
  "upscale-image": "hd-foto",

  // ── Variants: compress-image to a file size (expansion.md §5) ─────────
  "reduce-image-size-in-kb": "perkecil-ukuran-foto-kb",
  "compress-image-to-20kb": "kompres-foto-20kb",
  "compress-image-to-50kb": "kompres-foto-50kb",
  "compress-image-to-100kb": "kompres-foto-100kb",
  "compress-image-to-200kb": "kompres-foto-200kb",
  "compress-image-to-1mb": "kompres-foto-1mb",
  "compress-image-to-10kb": "kompres-foto-10kb",
  "compress-image-to-30kb": "kompres-foto-30kb",
  "compress-image-to-300kb": "kompres-foto-300kb",
  "compress-image-to-500kb": "kompres-foto-500kb",
  "compress-image-to-2mb": "kompres-foto-2mb",
  "compress-image-to-15kb": "kompres-foto-15kb",
  "compress-image-to-40kb": "kompres-foto-40kb",
  "compress-image-to-150kb": "kompres-foto-150kb",
  "increase-image-size-in-kb": "perbesar-ukuran-foto-kb",
  "signature-resizer": "ubah-ukuran-tanda-tangan",
  "jpg-to-pdf-under-100kb": "jpg-ke-pdf-100kb",
  "jpg-to-pdf-under-200kb": "jpg-ke-pdf-200kb",
  "jpg-to-pdf-under-300kb": "jpg-ke-pdf-300kb",
  "jpg-to-pdf-under-500kb": "jpg-ke-pdf-500kb",
  "convert-to-png": "ubah-foto-ke-png",
  "convert-to-webp": "ubah-foto-ke-webp",
  "svg-to-png": "svg-ke-png",
  "png-to-ico": "png-ke-ico",
  "youtube-thumbnail-resizer": "ubah-ukuran-thumbnail-youtube",
  "whatsapp-dp-resizer": "foto-profil-wa-full",
  "linkedin-banner-resizer": "ubah-ukuran-banner-linkedin",
  "facebook-cover-resizer": "ubah-ukuran-sampul-facebook",
  "discord-banner-resizer": "ubah-ukuran-banner-discord",
  "9-16-aspect-ratio-image": "ubah-foto-ke-9-16",
  "dpi-converter": "ubah-dpi-foto",
  "dpi-checker": "cek-dpi-foto",
  "resize-image-in-cm": "ubah-ukuran-foto-cm",
  "video-to-gif": "video-ke-gif",
  "gif-compressor": "kompres-gif",
  "gif-resizer": "ubah-ukuran-gif",
  "gif-to-mp4": "gif-ke-mp4",
  "webp-to-gif": "webp-ke-gif",
  "gif-cropper": "crop-gif",
  "rotate-gif": "putar-gif",
  "reverse-gif": "reverse-gif",
  "gif-speed-changer": "ubah-kecepatan-gif",
  "gif-cutter": "potong-gif",
  "gif-to-webp": "gif-ke-webp",
  "gif-to-apng": "gif-ke-apng",
  "gif-to-sprite-sheet": "gif-ke-sprite-sheet",
  "gif-merger": "gabung-gif",
  "add-text-to-gif": "tambah-teks-ke-gif",
  "typing-text-gif": "gif-teks-mengetik",
  "invert-image": "invert-warna-foto",
  "pixelate-image": "pixelate-foto",
  "image-brightness": "atur-kecerahan-foto",
  "glitch-effect": "efek-glitch-foto",
  "round-corners": "sudut-melengkung-foto",
  "remove-watermark": "hapus-watermark",
  "remove-object": "hapus-objek-foto",
  "split-image": "split-foto",
  "image-overlay": "overlay-foto",

  // ── Variants: upscale, rotate, remove-background (expansion.md §5) ────
  "image-to-hd": "jadikan-foto-hd",
  "unblur-image": "foto-blur-jadi-jelas",
  "flip-image": "mirror-foto",
  "change-background-color": "ganti-background-foto",
  "blur-background": "blur-background-foto",

  // ── Passport / ID photo maker and variants (expansion.md §5) ──────────
  "passport-photo-maker": "pas-foto",
  "3x4-photo": "foto-3x4",
  "2x2-photo": "pas-foto-2x2",
  "instagram-grid-maker": "grid-instagram",
};

/*
 * ── Slug conventions (German) ──────────────────────────────────────────────
 * Translated, ASCII: ä→ae, ö→oe, ü→ue, ß→ss (the transliteration Germans use
 * themselves when an umlaut is unavailable, e.g. in domains and e-mail).
 * Measured 2026-11-17, Germany / de (conversion.md §12, OpenSEO de-head-terms):
 *   • Head noun is "Bild", not "Foto": bild verkleinern 12.1K vs foto
 *     verkleinern 3.6K; bild bearbeiten 12.1K vs foto bearbeiten 8.1K.
 *   • Converter pairs are "x in y": png in jpg 18.1K vs png zu jpg 1.9K;
 *     webp in jpg 22.2K. iLoveIMG /de uses the same form.
 *   • English loanwords win where they have taken over: meme generator 74K
 *     (meme erstellen 5.4K), glitch effekt, sprite sheet.
 *   • passport-photo-maker carries the term on the form, "biometrisches
 *     Passbild" (33.1K) — not the vaguer Passfoto (14.8K).
 */
const DE_TOOL_SLUGS: Record<string, string> = {
  // ── Optimieren ───────────────────────────────────────────────────────
  "compress-image": "bild-komprimieren",
  "resize-image": "bildgroesse-aendern",
  "crop-image": "bild-zuschneiden",
  "rotate-image": "bild-drehen",

  // ── Konvertieren ─────────────────────────────────────────────────────
  "convert-to-jpg": "bild-in-jpg-umwandeln",
  "png-to-jpg": "png-in-jpg",
  "jpg-to-png": "jpg-in-png",
  "webp-to-png": "webp-in-png",
  "heic-to-png": "heic-in-png",
  "image-to-text": "bild-in-text-umwandeln",
  "webp-to-jpg": "webp-in-jpg",
  "jpg-to-webp": "jpg-in-webp",
  "png-to-webp": "png-in-webp",
  "jfif-to-jpg": "jfif-in-jpg",
  "gif-to-png": "gif-in-png",
  "gif-to-jpg": "gif-in-jpg",
  "bmp-to-jpg": "bmp-in-jpg",
  "avif-to-jpg": "avif-in-jpg",
  "avif-to-png": "avif-in-png",
  "heic-to-jpg": "heic-in-jpg",
  "image-to-pdf": "bild-in-pdf-umwandeln",
  "image-to-base64": "bild-in-base64",
  "base64-to-image": "base64-in-bild",
  "gif-to-images": "gif-in-bilder",

  // ── Bearbeiten und erstellen ─────────────────────────────────────────
  "image-editor": "bild-bearbeiten",
  "watermark-image": "wasserzeichen-einfuegen",
  "meme-generator": "meme-generator",
  "html-to-image": "html-in-bild",
  "blur-face": "gesichter-verpixeln",
  "grayscale-image": "bild-schwarz-weiss",
  "blur-image": "bild-unscharf-machen",
  "add-border": "rahmen-um-bild",
  "circle-crop": "bild-rund-zuschneiden",
  "merge-images": "bilder-zusammenfuegen",
  "image-color-picker": "farbwaehler",
  "image-metadata": "exif-daten-anzeigen",
  "remove-exif": "metadaten-entfernen",
  "gif-maker": "gif-erstellen",

  // ── KI ───────────────────────────────────────────────────────────────
  "remove-background": "hintergrund-entfernen",
  "upscale-image": "bildqualitaet-verbessern",

  // ── Variants (expansion.md §5) ────────────────────────────────────────
  "reduce-image-size-in-kb": "bildgroesse-in-kb-reduzieren",
  "compress-image-to-20kb": "bild-auf-20kb-verkleinern",
  "compress-image-to-50kb": "bild-auf-50kb-verkleinern",
  "compress-image-to-100kb": "bild-auf-100kb-verkleinern",
  "compress-image-to-200kb": "bild-auf-200kb-verkleinern",
  "compress-image-to-1mb": "bild-auf-1mb-verkleinern",
  "compress-image-to-10kb": "bild-auf-10kb-verkleinern",
  "compress-image-to-30kb": "bild-auf-30kb-verkleinern",
  "compress-image-to-300kb": "bild-auf-300kb-verkleinern",
  "compress-image-to-500kb": "bild-auf-500kb-verkleinern",
  "compress-image-to-2mb": "bild-auf-2mb-verkleinern",
  "compress-image-to-15kb": "bild-auf-15kb-verkleinern",
  "compress-image-to-40kb": "bild-auf-40kb-verkleinern",
  "compress-image-to-150kb": "bild-auf-150kb-verkleinern",
  "increase-image-size-in-kb": "bildgroesse-in-kb-erhoehen",
  "signature-resizer": "unterschrift-skalieren",
  "jpg-to-pdf-under-100kb": "jpg-in-pdf-unter-100kb",
  "jpg-to-pdf-under-200kb": "jpg-in-pdf-unter-200kb",
  "jpg-to-pdf-under-300kb": "jpg-in-pdf-unter-300kb",
  "jpg-to-pdf-under-500kb": "jpg-in-pdf-unter-500kb",
  "convert-to-png": "in-png-umwandeln",
  "convert-to-webp": "in-webp-umwandeln",
  "svg-to-png": "svg-in-png",
  "png-to-ico": "png-in-ico",
  "youtube-thumbnail-resizer": "youtube-thumbnail-groesse",
  "whatsapp-dp-resizer": "whatsapp-profilbild",
  "linkedin-banner-resizer": "linkedin-banner-groesse",
  "facebook-cover-resizer": "facebook-titelbild-groesse",
  "discord-banner-resizer": "discord-banner-groesse",
  "9-16-aspect-ratio-image": "bild-9-16-1080x1920",
  "dpi-converter": "dpi-aendern",
  "dpi-checker": "dpi-pruefen",
  "resize-image-in-cm": "bildgroesse-in-cm-aendern",
  "video-to-gif": "video-in-gif",
  "gif-compressor": "gif-komprimieren",
  "gif-resizer": "gif-groesse-aendern",
  "gif-to-mp4": "gif-in-mp4",
  "webp-to-gif": "webp-in-gif",
  "gif-cropper": "gif-zuschneiden",
  "rotate-gif": "gif-drehen",
  "reverse-gif": "gif-rueckwaerts",
  "gif-speed-changer": "gif-geschwindigkeit-aendern",
  "gif-cutter": "gif-schneiden",
  "gif-to-webp": "gif-in-webp",
  "gif-to-apng": "gif-in-apng",
  "gif-to-sprite-sheet": "gif-in-sprite-sheet",
  "gif-merger": "gifs-zusammenfuegen",
  "add-text-to-gif": "text-in-gif-einfuegen",
  "typing-text-gif": "schreibmaschinen-gif",
  "invert-image": "bild-invertieren",
  "pixelate-image": "bild-verpixeln",
  "image-brightness": "bild-aufhellen",
  "glitch-effect": "glitch-effekt",
  "round-corners": "ecken-abrunden",
  "remove-watermark": "wasserzeichen-entfernen",
  "remove-object": "objekt-entfernen",
  "split-image": "bild-teilen",
  "image-overlay": "bilder-ueberlagern",
  "image-to-hd": "bild-in-hd",
  "unblur-image": "bild-schaerfen",
  "flip-image": "bild-spiegeln",
  "change-background-color": "hintergrundfarbe-aendern",
  "blur-background": "hintergrund-unscharf-machen",
  "passport-photo-maker": "biometrisches-passbild",
  "3x4-photo": "foto-3x4",
  "2x2-photo": "passfoto-2x2",
  "instagram-grid-maker": "instagram-grid-erstellen",
};

/*
 * ── Slug conventions (Spanish — neutral) ───────────────────────────────────
 * ONE /es for Spain and Latin America (Mexico is the larger audience).
 * Measured 2026-11-17, Spain 2724 + Mexico 2484 / es (conversion.md §13):
 *   • Head noun "imagen": comprimir imagen 14.8K ES / 27.1K MX vs comprimir
 *     foto 6.6K / 5.4K. "foto" only where the query uses it (foto carnet,
 *     foto de perfil whatsapp, editor de fotos).
 *   • Converter pairs are "x a y" (jpg a pdf 90.5K / 201K, png a jpg 14.8K).
 *   • quitar fondo (201K / 450K) over eliminar fondo, the slug iLoveIMG uses.
 *   • ASCII: tamaño → tamano, accents dropped.
 */
const ES_TOOL_SLUGS: Record<string, string> = {
  "compress-image": "comprimir-imagen",
  "resize-image": "redimensionar-imagen",
  "crop-image": "recortar-imagen",
  "rotate-image": "girar-imagen",
  "convert-to-jpg": "convertir-a-jpg",
  "png-to-jpg": "png-a-jpg",
  "jpg-to-png": "jpg-a-png",
  "webp-to-png": "webp-a-png",
  "heic-to-png": "heic-a-png",
  "image-to-text": "imagen-a-texto",
  "webp-to-jpg": "webp-a-jpg",
  "jpg-to-webp": "jpg-a-webp",
  "png-to-webp": "png-a-webp",
  "jfif-to-jpg": "jfif-a-jpg",
  "gif-to-png": "gif-a-png",
  "gif-to-jpg": "gif-a-jpg",
  "bmp-to-jpg": "bmp-a-jpg",
  "avif-to-jpg": "avif-a-jpg",
  "avif-to-png": "avif-a-png",
  "heic-to-jpg": "heic-a-jpg",
  "image-to-pdf": "imagen-a-pdf",
  "image-to-base64": "imagen-a-base64",
  "base64-to-image": "base64-a-imagen",
  "gif-to-images": "gif-a-imagenes",
  "image-editor": "editor-de-fotos",
  "watermark-image": "marca-de-agua",
  "meme-generator": "generador-de-memes",
  "html-to-image": "html-a-imagen",
  "blur-face": "pixelar-cara",
  "grayscale-image": "imagen-blanco-y-negro",
  "blur-image": "difuminar-imagen",
  "add-border": "agregar-borde-a-imagen",
  "circle-crop": "recortar-foto-en-circulo",
  "merge-images": "unir-imagenes",
  "image-color-picker": "selector-de-color",
  "image-metadata": "ver-metadatos-imagen",
  "remove-exif": "eliminar-metadatos",
  "gif-maker": "crear-gif",
  "remove-background": "quitar-fondo",
  "upscale-image": "mejorar-calidad-imagen",
  "reduce-image-size-in-kb": "reducir-tamano-imagen-kb",
  "compress-image-to-20kb": "comprimir-imagen-a-20kb",
  "compress-image-to-50kb": "comprimir-imagen-a-50kb",
  "compress-image-to-100kb": "comprimir-imagen-a-100kb",
  "compress-image-to-200kb": "comprimir-imagen-a-200kb",
  "compress-image-to-1mb": "comprimir-imagen-a-1mb",
  "compress-image-to-10kb": "comprimir-imagen-a-10kb",
  "compress-image-to-30kb": "comprimir-imagen-a-30kb",
  "compress-image-to-300kb": "comprimir-imagen-a-300kb",
  "compress-image-to-500kb": "comprimir-imagen-a-500kb",
  "compress-image-to-2mb": "comprimir-imagen-a-2mb",
  "compress-image-to-15kb": "comprimir-imagen-a-15kb",
  "compress-image-to-40kb": "comprimir-imagen-a-40kb",
  "compress-image-to-150kb": "comprimir-imagen-a-150kb",
  "increase-image-size-in-kb": "aumentar-tamano-imagen-kb",
  "signature-resizer": "redimensionar-firma",
  "jpg-to-pdf-under-100kb": "jpg-a-pdf-menos-de-100kb",
  "jpg-to-pdf-under-200kb": "jpg-a-pdf-menos-de-200kb",
  "jpg-to-pdf-under-300kb": "jpg-a-pdf-menos-de-300kb",
  "jpg-to-pdf-under-500kb": "jpg-a-pdf-menos-de-500kb",
  "convert-to-png": "convertir-a-png",
  "convert-to-webp": "convertir-a-webp",
  "svg-to-png": "svg-a-png",
  "png-to-ico": "png-a-ico",
  "youtube-thumbnail-resizer": "tamano-miniatura-youtube",
  "whatsapp-dp-resizer": "foto-de-perfil-whatsapp",
  "linkedin-banner-resizer": "banner-linkedin",
  "facebook-cover-resizer": "portada-facebook",
  "discord-banner-resizer": "banner-discord",
  "9-16-aspect-ratio-image": "imagen-9-16-1080x1920",
  "dpi-converter": "cambiar-dpi-imagen",
  "dpi-checker": "ver-dpi-imagen",
  "resize-image-in-cm": "redimensionar-imagen-en-cm",
  "video-to-gif": "video-a-gif",
  "gif-compressor": "comprimir-gif",
  "gif-resizer": "redimensionar-gif",
  "gif-to-mp4": "gif-a-mp4",
  "webp-to-gif": "webp-a-gif",
  "gif-cropper": "recortar-gif",
  "rotate-gif": "girar-gif",
  "reverse-gif": "invertir-gif",
  "gif-speed-changer": "cambiar-velocidad-gif",
  "gif-cutter": "cortar-gif",
  "gif-to-webp": "gif-a-webp",
  "gif-to-apng": "gif-a-apng",
  "gif-to-sprite-sheet": "gif-a-sprite-sheet",
  "gif-merger": "unir-gifs",
  "add-text-to-gif": "agregar-texto-a-gif",
  "typing-text-gif": "gif-de-texto-escribiendo",
  "invert-image": "invertir-colores-imagen",
  "pixelate-image": "pixelar-imagen",
  "image-brightness": "ajustar-brillo-imagen",
  "glitch-effect": "efecto-glitch",
  "round-corners": "redondear-esquinas-imagen",
  "remove-watermark": "quitar-marca-de-agua",
  "remove-object": "eliminar-objetos-de-fotos",
  "split-image": "dividir-imagen",
  "image-overlay": "superponer-imagenes",
  "image-to-hd": "convertir-imagen-a-hd",
  "unblur-image": "mejorar-nitidez-foto",
  "flip-image": "voltear-imagen",
  "change-background-color": "cambiar-fondo-foto",
  "blur-background": "desenfocar-fondo",
  "passport-photo-maker": "foto-carnet",
  "3x4-photo": "foto-3x4",
  "2x2-photo": "foto-2x2",
  "instagram-grid-maker": "cuadricula-instagram",
};

/*
 * ── Slug conventions (French) ──────────────────────────────────────────────
 * Measured 2026-11-17, France 2250 / fr (conversion.md §14, OpenSEO
 * fr-head-terms):
 *   • Head noun "image" (compresser image 33.1K vs compresser photo 14.8K);
 *     "photo" where the query carries it (photo d'identité 33.1K, retoucher
 *     photo 8.1K, photo noir et blanc).
 *   • Converter pairs are "x en y" (png en pdf 60.5K, image en pdf 49.5K,
 *     png en jpg 22.2K). Sizes in French units: 100 ko, 1 mo.
 *   • supprimer arrière-plan (12.1K) is the remove-background head; the
 *     watermark ADD intent is "filigrane" (49.5K), removal "supprimer
 *     filigrane".
 *   • ASCII: accents dropped (arrière → arriere, métadonnées → metadonnees).
 */
const FR_TOOL_SLUGS: Record<string, string> = {
  "compress-image": "compresser-image",
  "resize-image": "redimensionner-image",
  "crop-image": "recadrer-image",
  "rotate-image": "pivoter-image",
  "convert-to-jpg": "convertir-en-jpg",
  "png-to-jpg": "png-en-jpg",
  "jpg-to-png": "jpg-en-png",
  "webp-to-png": "webp-en-png",
  "heic-to-png": "heic-en-png",
  "image-to-text": "image-en-texte",
  "webp-to-jpg": "webp-en-jpg",
  "jpg-to-webp": "jpg-en-webp",
  "png-to-webp": "png-en-webp",
  "jfif-to-jpg": "jfif-en-jpg",
  "gif-to-png": "gif-en-png",
  "gif-to-jpg": "gif-en-jpg",
  "bmp-to-jpg": "bmp-en-jpg",
  "avif-to-jpg": "avif-en-jpg",
  "avif-to-png": "avif-en-png",
  "heic-to-jpg": "heic-en-jpg",
  "image-to-pdf": "image-en-pdf",
  "image-to-base64": "image-en-base64",
  "base64-to-image": "base64-en-image",
  "gif-to-images": "gif-en-images",
  "image-editor": "retoucher-photo",
  "watermark-image": "ajouter-filigrane",
  "meme-generator": "generateur-de-meme",
  "html-to-image": "html-en-image",
  "blur-face": "flouter-visage",
  "grayscale-image": "photo-noir-et-blanc",
  "blur-image": "flouter-photo",
  "add-border": "ajouter-bordure-image",
  "circle-crop": "recadrer-photo-en-cercle",
  "merge-images": "fusionner-images",
  "image-color-picker": "selecteur-de-couleur",
  "image-metadata": "voir-metadonnees-photo",
  "remove-exif": "supprimer-metadonnees",
  "gif-maker": "creer-gif",
  "remove-background": "supprimer-arriere-plan",
  "upscale-image": "ameliorer-qualite-image",
  "reduce-image-size-in-kb": "reduire-taille-image-ko",
  "compress-image-to-20kb": "compresser-image-20ko",
  "compress-image-to-50kb": "compresser-image-50ko",
  "compress-image-to-100kb": "compresser-image-100ko",
  "compress-image-to-200kb": "compresser-image-200ko",
  "compress-image-to-1mb": "compresser-image-1mo",
  "compress-image-to-10kb": "compresser-image-10ko",
  "compress-image-to-30kb": "compresser-image-30ko",
  "compress-image-to-300kb": "compresser-image-300ko",
  "compress-image-to-500kb": "compresser-image-500ko",
  "compress-image-to-2mb": "compresser-image-2mo",
  "compress-image-to-15kb": "compresser-image-15ko",
  "compress-image-to-40kb": "compresser-image-40ko",
  "compress-image-to-150kb": "compresser-image-150ko",
  "increase-image-size-in-kb": "augmenter-taille-image-ko",
  "signature-resizer": "redimensionner-signature",
  "jpg-to-pdf-under-100kb": "jpg-en-pdf-moins-de-100ko",
  "jpg-to-pdf-under-200kb": "jpg-en-pdf-moins-de-200ko",
  "jpg-to-pdf-under-300kb": "jpg-en-pdf-moins-de-300ko",
  "jpg-to-pdf-under-500kb": "jpg-en-pdf-moins-de-500ko",
  "convert-to-png": "convertir-en-png",
  "convert-to-webp": "convertir-en-webp",
  "svg-to-png": "svg-en-png",
  "png-to-ico": "png-en-ico",
  "youtube-thumbnail-resizer": "taille-miniature-youtube",
  "whatsapp-dp-resizer": "photo-de-profil-whatsapp",
  "linkedin-banner-resizer": "banniere-linkedin",
  "facebook-cover-resizer": "couverture-facebook",
  "discord-banner-resizer": "banniere-discord",
  "9-16-aspect-ratio-image": "image-9-16-1080x1920",
  "dpi-converter": "changer-dpi-image",
  "dpi-checker": "verifier-dpi-image",
  "resize-image-in-cm": "redimensionner-image-en-cm",
  "video-to-gif": "video-en-gif",
  "gif-compressor": "compresser-gif",
  "gif-resizer": "redimensionner-gif",
  "gif-to-mp4": "gif-en-mp4",
  "webp-to-gif": "webp-en-gif",
  "gif-cropper": "recadrer-gif",
  "rotate-gif": "pivoter-gif",
  "reverse-gif": "inverser-gif",
  "gif-speed-changer": "vitesse-gif",
  "gif-cutter": "couper-gif",
  "gif-to-webp": "gif-en-webp",
  "gif-to-apng": "gif-en-apng",
  "gif-to-sprite-sheet": "gif-en-sprite-sheet",
  "gif-merger": "fusionner-gif",
  "add-text-to-gif": "ajouter-texte-gif",
  "typing-text-gif": "gif-texte-machine-a-ecrire",
  "invert-image": "inverser-couleurs-image",
  "pixelate-image": "pixeliser-image",
  "image-brightness": "luminosite-image",
  "glitch-effect": "effet-glitch",
  "round-corners": "arrondir-coins-image",
  "remove-watermark": "supprimer-filigrane",
  "remove-object": "supprimer-objet-photo",
  "split-image": "decouper-image",
  "image-overlay": "superposer-images",
  "image-to-hd": "image-en-hd",
  "unblur-image": "rendre-photo-nette",
  "flip-image": "image-miroir",
  "change-background-color": "changer-fond-photo",
  "blur-background": "flouter-arriere-plan",
  "passport-photo-maker": "photo-identite",
  "3x4-photo": "photo-3x4",
  "2x2-photo": "photo-2x2",
  "instagram-grid-maker": "grille-instagram",
};

const TOOL_SLUGS: Record<TranslatedLocale, Record<string, string>> = {
  pt: PT_TOOL_SLUGS,
  hi: HI_TOOL_SLUGS,
  ru: RU_TOOL_SLUGS,
  id: ID_TOOL_SLUGS,
  de: DE_TOOL_SLUGS,
  es: ES_TOOL_SLUGS,
  fr: FR_TOOL_SLUGS,
};

/** The slug a tool uses in `locale` (no prefix). English → the registry slug. */
export function toolSlug(toolId: string, locale: Locale): string {
  const english = TOOLS_BY_ID[toolId]?.slug ?? toolId;
  if (locale === DEFAULT_LOCALE) return english;
  return TOOL_SLUGS[locale][toolId] ?? english;
}

/** True when `locale` has its own slug for this tool (rather than falling back). */
export function hasTranslatedSlug(toolId: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return toolId in TOOL_SLUGS[locale];
}

/** Full path for a tool in a locale: `/compress-image`, `/pt/comprimir-imagem`. */
export function toolPath(toolId: string, locale: Locale): string {
  return `${LOCALE_PREFIX[locale]}/${toolSlug(toolId, locale)}`;
}

/** slug → id, per locale. */
const REVERSE: Record<string, Record<string, string>> = (() => {
  const out: Record<string, Record<string, string>> = {
    [DEFAULT_LOCALE]: Object.fromEntries(TOOLS.map((t) => [t.slug, t.id])),
  };
  for (const [locale, map] of Object.entries(TOOL_SLUGS)) {
    out[locale] = Object.fromEntries(Object.entries(map).map(([id, slug]) => [slug, id]));
  }
  return out;
})();

/** The tool id a slug names in `locale`, or undefined. */
export function toolIdFromSlug(slug: string, locale: Locale): string | undefined {
  return REVERSE[locale]?.[slug];
}

/** Every translated slug map — for the audit script and the slug tests. */
export function translatedSlugMaps(): Record<TranslatedLocale, Record<string, string>> {
  return TOOL_SLUGS;
}
