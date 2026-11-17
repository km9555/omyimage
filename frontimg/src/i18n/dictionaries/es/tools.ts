/**
 * Spanish tool names + short descriptions, keyed by tool **id**, plus the
 * category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the Spanish build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see i18n-es-brief.md) ───────────────
 * Neutral Spanish: one locale under `/es` for Spain AND Latin America, the
 * reader is addressed as **tú** ("Sube tu imagen", "Convierte…"). No
 * regionalisms — "dispositivo", "PC", "teléfono" for devices.
 *
 * Names follow the primary Spanish query in the brief's table, not a word for
 * word translation: the home card, the nav link and the H1 should all read as
 * the thing someone in Spain or Mexico typed into Google — «Quitar fondo»,
 * «Comprimir imagen», «PNG a JPG», «Generador de memes», «Selector de color»,
 * «Foto carnet». Conversions are "X a Y" (the dominant query form).
 *
 * Vocabulary: imagen / imágenes (head noun), foto only where the query uses it
 * (foto carnet, foto de perfil, editor de fotos); archivo, subir, descargar,
 * gratis, IA.
 *
 * Format and product names stay Latin: JPG, PNG, WebP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR.
 *
 * 3x4-photo and 2x2-photo are not shipped as Spanish pages; they are named
 * here anyway so the lists that still show them never fall back to English.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
  /** Short chip label on the home page's "Sizes and presets" (variants only). */
  presetLabel?: string;
}

export const esTools: Record<string, LocalizedTool> = {
  // ── Optimizar ─────────────────────────────────────────────────────────
  "compress-image": {
    name: "Comprimir imagen",
    shortDescription: "Reduce el peso de JPG, PNG y WebP con la calidad que elijas.",
  },
  "resize-image": {
    name: "Redimensionar imagen",
    shortDescription: "Cambia el tamaño en píxeles o porcentaje sin deformar la imagen.",
  },
  "crop-image": {
    name: "Recortar imagen",
    shortDescription: "Recorta a cualquier tamaño o proporción, también por lotes.",
  },
  "rotate-image": {
    name: "Girar imagen",
    shortDescription: "Gira 90°, 180°, 270° o cualquier ángulo y voltea, por lotes.",
  },

  // ── Convertir ─────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "Convertir a JPG",
    shortDescription: "PNG, WebP, GIF y BMP → JPG.",
  },
  "png-to-jpg": {
    name: "PNG a JPG",
    shortDescription: "Convierte imágenes PNG en archivos JPG más ligeros.",
  },
  "jpg-to-png": {
    name: "JPG a PNG",
    shortDescription: "Convierte JPG a PNG sin pérdida, con transparencia.",
  },
  "webp-to-png": {
    name: "WebP a PNG",
    shortDescription: "Convierte imágenes WebP modernas a PNG.",
  },
  "heic-to-png": {
    name: "HEIC a PNG",
    shortDescription: "Convierte fotos HEIC de iPhone a PNG sin pérdida.",
  },
  "image-to-text": {
    name: "Imagen a texto",
    shortDescription: "Extrae texto editable de fotos y escaneos con OCR.",
  },
  "webp-to-jpg": {
    name: "WebP a JPG",
    shortDescription: "Convierte WebP a JPG para abrirlo en cualquier sitio.",
  },
  "jpg-to-webp": {
    name: "JPG a WebP",
    shortDescription: "Haz tus fotos JPG mucho más ligeras convirtiéndolas a WebP.",
  },
  "png-to-webp": {
    name: "PNG a WebP",
    shortDescription: "Convierte PNG a WebP conservando la transparencia.",
  },
  "jfif-to-jpg": {
    name: "JFIF a JPG",
    shortDescription: "Convierte archivos .jfif descargados en .jpg.",
  },
  "gif-to-png": {
    name: "GIF a PNG",
    shortDescription: "Convierte un GIF en una imagen PNG sin pérdida.",
  },
  "gif-to-jpg": {
    name: "GIF a JPG",
    shortDescription: "Convierte los fotogramas de un GIF en imágenes JPG ligeras.",
  },
  "bmp-to-jpg": {
    name: "BMP a JPG",
    shortDescription: "Convierte archivos BMP enormes en JPG pequeños.",
  },
  "avif-to-jpg": {
    name: "AVIF a JPG",
    shortDescription: "Abre imágenes AVIF en cualquier sitio convirtiéndolas a JPG.",
  },
  "avif-to-png": {
    name: "AVIF a PNG",
    shortDescription: "Convierte AVIF a PNG sin pérdida, con transparencia.",
  },
  "heic-to-jpg": {
    name: "HEIC a JPG",
    shortDescription: "Convierte fotos HEIC de iPhone a JPG o PNG.",
  },
  "image-to-pdf": {
    name: "Imagen a PDF",
    shortDescription: "Une imágenes JPG y PNG en un solo PDF.",
  },
  "image-to-base64": {
    name: "Imagen a Base64",
    shortDescription: "Codifica una imagen como data URI en Base64.",
  },
  "base64-to-image": {
    name: "Base64 a imagen",
    shortDescription: "Decodifica un texto Base64 y recupera la imagen.",
  },
  "gif-to-images": {
    name: "GIF a imágenes",
    shortDescription: "Guarda cada fotograma de un GIF como PNG o JPG.",
  },

  // ── Editar y crear ────────────────────────────────────────────────────
  "image-editor": {
    name: "Editor de fotos",
    shortDescription: "Recorta, ajusta, aplica filtros, dibuja y anota en un solo editor.",
  },
  "watermark-image": {
    name: "Marca de agua",
    shortDescription: "Pon una marca de agua de texto o logo, también por lotes.",
  },
  "meme-generator": {
    name: "Generador de memes",
    shortDescription: "Texto arriba y abajo, plantillas y descarga en PNG o JPG.",
  },
  "html-to-image": {
    name: "HTML a imagen",
    shortDescription: "Convierte una URL o código HTML en PNG o JPG.",
  },
  "blur-face": {
    name: "Pixelar cara",
    shortDescription: "Detecta y oculta caras y matrículas automáticamente.",
  },
  "grayscale-image": {
    name: "Imagen en blanco y negro",
    shortDescription: "Pasa fotos a blanco y negro, también por lotes.",
  },
  "blur-image": {
    name: "Difuminar imagen",
    shortDescription: "Desenfoca suavemente toda la imagen.",
  },
  "add-border": {
    name: "Agregar borde a imagen",
    shortDescription: "Pon un borde o marco de color alrededor de tus fotos.",
  },
  "circle-crop": {
    name: "Recortar foto en círculo",
    shortDescription: "Recorta imágenes en forma circular, ideal para fotos de perfil.",
  },
  "merge-images": {
    name: "Unir imágenes",
    shortDescription: "Combina imágenes en horizontal, en vertical o en cuadrícula.",
  },
  "image-color-picker": {
    name: "Selector de color",
    shortDescription: "Obtén cualquier color de una imagen o extrae su paleta completa.",
  },
  "image-metadata": {
    name: "Ver metadatos de imagen",
    shortDescription: "Consulta los datos EXIF, GPS y de cámara de una foto.",
  },
  "remove-exif": {
    name: "Eliminar metadatos",
    shortDescription: "Borra EXIF, GPS y metadatos para proteger tu privacidad.",
  },
  "gif-maker": {
    name: "Crear GIF",
    shortDescription: "Convierte tus imágenes en un GIF animado.",
  },

  // ── IA ────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "Quitar fondo",
    shortDescription: "Elimina el fondo con IA y descarga un PNG transparente.",
  },
  "upscale-image": {
    name: "Mejorar calidad de imagen",
    shortDescription: "Aumenta la resolución 2×, 3× o 4× con IA y recupera detalles.",
  },

  // ── Variantes: comprimir a un tamaño (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "Reducir tamaño de imagen en KB",
    presetLabel: "Reducir en KB",
    shortDescription: "Deja una foto exactamente en los KB que necesitas.",
  },
  "compress-image-to-20kb": {
    name: "Comprimir imagen a 20 KB",
    shortDescription: "Fotos y firmas de menos de 20 KB para formularios.",
  },
  "compress-image-to-50kb": {
    name: "Comprimir imagen a 50 KB",
    shortDescription: "Un límite habitual para fotos en solicitudes online.",
  },
  "compress-image-to-100kb": {
    name: "Comprimir imagen a 100 KB",
    shortDescription: "Fotos y documentos nítidos de menos de 100 KB.",
  },
  "compress-image-to-200kb": {
    name: "Comprimir imagen a 200 KB",
    shortDescription: "Fotos y documentos escaneados de menos de 200 KB.",
  },
  "compress-image-to-1mb": {
    name: "Comprimir imagen a 1 MB",
    shortDescription: "Fotos del teléfono de menos de 1 MB, casi siempre a resolución completa.",
  },
  "compress-image-to-10kb": {
    name: "Comprimir imagen a 10 KB",
    shortDescription: "Firmas y fotos pequeñas de menos de 10 KB.",
  },
  "compress-image-to-30kb": {
    name: "Comprimir imagen a 30 KB",
    shortDescription: "Fotos para formularios de menos de 30 KB, con la cara nítida.",
  },
  "compress-image-to-300kb": {
    name: "Comprimir imagen a 300 KB",
    shortDescription: "Fotos y documentos legibles de menos de 300 KB.",
  },
  "compress-image-to-500kb": {
    name: "Comprimir imagen a 500 KB",
    shortDescription: "Fotos, documentos y capturas de pantalla de menos de 500 KB.",
  },
  "compress-image-to-2mb": {
    name: "Comprimir imagen a 2 MB",
    shortDescription: "Fotos grandes del teléfono de menos de 2 MB.",
  },
  "compress-image-to-15kb": {
    name: "Comprimir imagen a 15 KB",
    shortDescription: "Firmas y fotos pequeñas de menos de 15 KB.",
  },
  "compress-image-to-40kb": {
    name: "Comprimir imagen a 40 KB",
    shortDescription: "Fotos nítidas para formularios de menos de 40 KB.",
  },
  "compress-image-to-150kb": {
    name: "Comprimir imagen a 150 KB",
    shortDescription: "Fotos y páginas manuscritas de menos de 150 KB.",
  },
  "increase-image-size-in-kb": {
    name: "Aumentar tamaño de imagen en KB",
    presetLabel: "Aumentar en KB",
    shortDescription: "Lleva una foto a un mínimo de 10, 20 o 50 KB.",
  },
  "signature-resizer": {
    name: "Redimensionar firma",
    shortDescription: "Limpia, recorta y redimensiona la imagen de tu firma.",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG a PDF de menos de 100 KB",
    shortDescription: "PDF de una página de menos de 100 KB para formularios.",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG a PDF de menos de 200 KB",
    shortDescription: "Certificados y documentos en PDF de menos de 200 KB.",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG a PDF de menos de 300 KB",
    shortDescription: "PDF de varias páginas de menos de 300 KB.",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG a PDF de menos de 500 KB",
    shortDescription: "Documentos largos en PDF de menos de 500 KB.",
  },
  "convert-to-png": {
    name: "Convertir a PNG",
    shortDescription: "JPG, WebP, GIF y BMP → PNG.",
  },
  "convert-to-webp": {
    name: "Convertir a WebP",
    shortDescription: "JPG, PNG, GIF y BMP → WebP.",
  },
  "svg-to-png": {
    name: "SVG a PNG",
    shortDescription: "Vectores SVG como PNG nítidos en cualquier tamaño.",
  },
  "png-to-ico": {
    name: "PNG a ICO",
    shortDescription: "Crea un favicon: archivos .ico e iconos de Windows.",
  },
  "youtube-thumbnail-resizer": {
    name: "Tamaño de miniatura de YouTube",
    presetLabel: "Miniatura de YouTube",
    shortDescription: "Cualquier imagen en tamaño de miniatura: 1280 × 720.",
  },
  "whatsapp-dp-resizer": {
    name: "Foto de perfil de WhatsApp",
    presetLabel: "Perfil de WhatsApp",
    shortDescription: "La foto completa en el perfil cuadrado, sin recortar.",
  },
  "linkedin-banner-resizer": {
    name: "Banner de LinkedIn",
    presetLabel: "Banner de LinkedIn",
    shortDescription: "Cualquier imagen como banner de LinkedIn: 1584 × 396.",
  },
  "facebook-cover-resizer": {
    name: "Portada de Facebook",
    presetLabel: "Portada de Facebook",
    shortDescription: "Cualquier imagen como portada de Facebook: 851 × 315.",
  },
  "discord-banner-resizer": {
    name: "Banner de Discord",
    presetLabel: "Banner de Discord",
    shortDescription: "Banners de perfil y de servidor para Discord.",
  },
  "9-16-aspect-ratio-image": {
    name: "Formato 9:16 (1080x1920)",
    presetLabel: "9:16 (1080×1920)",
    shortDescription: "Cualquier imagen en proporción 9:16, a 1080 × 1920.",
  },
  "dpi-converter": {
    name: "Cambiar DPI de imagen",
    shortDescription: "Pon 300, 200 o cualquier otro valor de DPI sin perder calidad.",
  },
  "dpi-checker": {
    name: "Ver DPI de imagen",
    shortDescription: "Consulta los DPI de una imagen y su tamaño de impresión.",
  },
  "resize-image-in-cm": {
    name: "Redimensionar imagen en cm",
    presetLabel: "Tamaño en cm",
    shortDescription: "Ajusta a un tamaño exacto en cm, mm o pulgadas.",
  },
  "video-to-gif": {
    name: "Video a GIF",
    shortDescription: "Convierte un fragmento de MP4, WEBM o MOV en GIF.",
  },
  "gif-compressor": {
    name: "Comprimir GIF",
    shortDescription: "Reduce el tamaño de GIF animados sin perder fotogramas.",
  },
  "gif-resizer": {
    name: "Redimensionar GIF",
    shortDescription: "Cambia el tamaño de GIF animados conservando todos los fotogramas.",
  },
  "gif-to-mp4": {
    name: "GIF a MP4",
    shortDescription: "Convierte GIF en videos MP4 ligeros.",
  },
  "webp-to-gif": {
    name: "WebP a GIF",
    shortDescription: "Convierte WebP animado a GIF.",
  },
  "gif-cropper": {
    name: "Recortar GIF",
    shortDescription: "Recorta GIF animados conservando todos los fotogramas.",
  },
  "rotate-gif": {
    name: "Girar GIF",
    shortDescription: "Gira GIF animados 90° o 180°, o voltéalos.",
  },
  "reverse-gif": {
    name: "Invertir GIF",
    shortDescription: "Reproduce un GIF al revés o en modo bumerán.",
  },
  "gif-speed-changer": {
    name: "Cambiar velocidad de GIF",
    shortDescription: "Haz que un GIF animado vaya más rápido o más lento.",
  },
  "gif-cutter": {
    name: "Cortar GIF",
    shortDescription: "Acorta un GIF y quédate solo con los fotogramas que quieras.",
  },
  "gif-to-webp": {
    name: "GIF a WebP",
    shortDescription: "Convierte GIF animados en WebP animado.",
  },
  "gif-to-apng": {
    name: "GIF a APNG",
    shortDescription: "Convierte GIF animados en PNG animado (APNG).",
  },
  "gif-to-sprite-sheet": {
    name: "GIF a sprite sheet",
    shortDescription: "Coloca todos los fotogramas de un GIF en un sprite sheet PNG.",
  },
  "gif-merger": {
    name: "Unir GIFs",
    shortDescription: "Junta varios GIF uno tras otro en uno solo.",
  },
  "add-text-to-gif": {
    name: "Agregar texto a GIF",
    shortDescription: "Pon texto en un GIF animado, en todos los fotogramas o solo en algunos.",
  },
  "typing-text-gif": {
    name: "GIF de texto escribiendo",
    shortDescription: "Crea un GIF en el que el texto se escribe letra a letra.",
  },
  "invert-image": {
    name: "Invertir colores",
    shortDescription: "Invierte los colores de una foto — negativo o inversión inteligente.",
  },
  "pixelate-image": {
    name: "Pixelar imagen",
    shortDescription: "Convierte fotos en bloques de píxeles grandes.",
  },
  "image-brightness": {
    name: "Ajustar brillo de imagen",
    shortDescription: "Aclara u oscurece fotos y ajusta contraste y color.",
  },
  "glitch-effect": {
    name: "Efecto glitch",
    shortDescription: "Dale a tus fotos el aspecto de una pantalla con interferencias.",
  },
  "round-corners": {
    name: "Redondear esquinas",
    shortDescription: "Redondea las esquinas de una imagen con bordes transparentes.",
  },
  "remove-watermark": {
    name: "Quitar marca de agua",
    shortDescription: "Elimina marcas de agua, logos y fechas con IA, en el navegador.",
  },
  "remove-object": {
    name: "Eliminar objetos de fotos",
    shortDescription: "Quita personas, objetos e imperfecciones de tus fotos con IA.",
  },
  "split-image": {
    name: "Dividir imagen",
    shortDescription: "Corta una imagen en partes o mosaicos iguales.",
  },
  "image-overlay": {
    name: "Superponer imágenes",
    shortDescription: "Pon una imagen sobre otra con opacidad y modo de fusión.",
  },

  // ── Variantes: mejorar, voltear, fondo (expansion.md) ──
  "image-to-hd": {
    name: "Convertir imagen a HD",
    shortDescription: "Pasa una foto pequeña o de baja resolución a HD.",
  },
  "unblur-image": {
    name: "Mejorar nitidez de foto",
    shortDescription: "Recupera la nitidez de fotos un poco borrosas con IA.",
  },
  "flip-image": {
    name: "Voltear imagen",
    shortDescription: "Voltea fotos en horizontal o en vertical, como un espejo.",
  },
  "change-background-color": {
    name: "Cambiar fondo de foto",
    shortDescription: "Fondo blanco, azul o rojo para cualquier foto.",
  },
  "blur-background": {
    name: "Desenfocar fondo",
    shortDescription: "Efecto retrato detrás de cualquier persona u objeto.",
  },
  "passport-photo-maker": {
    name: "Foto carnet",
    shortDescription: "Fotos de pasaporte, visa y carnet, con hoja para imprimir.",
  },
  "3x4-photo": {
    name: "Foto 3x4 (Brasil)",
    shortDescription: "Fotos para documentos de 3 × 4 cm, recortadas y listas para imprimir.",
  },
  "2x2-photo": {
    name: "Foto 2x2 (visa de EE. UU.)",
    shortDescription: "Foto de 2 × 2 pulgadas para pasaporte y visa de EE. UU.",
  },
  "instagram-grid-maker": {
    name: "Cuadrícula para Instagram",
    shortDescription: "Divide una foto en una cuadrícula o un carrusel de Instagram.",
  },
};

/**
 * Category labels. `title` is the home-page section heading, `navLabel` the
 * short pill / breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const esCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "Optimizar y comprimir", navLabel: "Optimizar" },
  convert: { title: "Convertir imágenes", navLabel: "Convertir" },
  edit: { title: "Editar y crear", navLabel: "Editar" },
  gif: { title: "Herramientas GIF", navLabel: "GIF" },
  ai: { title: "Herramientas de IA", navLabel: "IA para imágenes" },
};
