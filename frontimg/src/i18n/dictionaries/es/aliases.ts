/**
 * Spanish search synonyms, keyed by tool id — what someone in Spain, Mexico
 * or anywhere else in Latin America types into the header search when they
 * don't know our tool's exact name.
 *
 * Generous on purpose: every primary and secondary query from the brief's
 * table (i18n-es-brief.md), BOTH sides of the Atlantic — the regional words
 * the interface deliberately avoids are welcome here as search aliases only
 * (ordenador / computadora, móvil / celular, remover / quitar), the English
 * loanwords Spanish speakers search with ("resize", "converter", "upscale",
 * "color picker", "meme generator"), and the usual typos.
 *
 * Lowercase. Accents are folded at match time (á → a, ñ → n — see
 * lib/search-normalize.ts), so "tamaño" / "tamano" and "imágenes" /
 * "imagenes" already match each other; a few accentless spellings are still
 * listed so the intent is visible to a reviewer.
 */
export const esAliases: Record<string, string[]> = {
  // ── Optimizar ─────────────────────────────────────────────────────────
  "compress-image": [
    "comprimir imagen", "comprimir imagenes", "comprimir imágenes", "comprimir foto",
    "comprimir fotos", "reducir tamaño de imagen", "reducir tamano de imagen",
    "reducir peso imagen", "reducir peso de foto", "bajar peso imagen", "aligerar imagen",
    "achicar imagen", "hacer imagen mas pequeña", "comprimir jpg", "comprimir jpeg",
    "comprimir png", "comprimir webp", "optimizar imagen", "compresor de imagenes",
    "compresor de fotos", "reducir mb", "reducir kb", "comprimir imajen", "conprimir imagen",
    "compress image", "compressor", "comprimir foto del movil", "comprimir foto celular",
    "comprimir imagen en el ordenador", "comprimir imagen en computadora",
  ],
  "resize-image": [
    "redimensionar imagen", "redimensionar foto", "cambiar tamaño de imagen",
    "cambiar tamano de imagen", "cambiar tamaño de foto", "reducir imagen", "agrandar imagen",
    "ampliar imagen", "escalar imagen", "ajustar tamaño imagen", "cambiar resolución",
    "cambiar pixeles", "ancho y alto", "tamaño en pixeles", "resize", "resizer",
    "redimencionar imagen", "redimensionar imajen", "proporción",
  ],
  "crop-image": [
    "recortar imagen", "recortar foto", "recortar imagenes", "cortar imagen", "cortar foto",
    "recortar online", "crop", "recorte de imagen", "recortar cuadrado", "16:9", "4:3",
    "recortar imajen",
  ],
  "rotate-image": [
    "girar imagen", "girar foto", "rotar imagen", "rotar foto", "girar imagen 90 grados",
    "90 grados", "180 grados", "enderezar foto", "foto de lado", "foto al revés",
    "voltear foto de lado", "rotate",
  ],
  "remove-exif": [
    "eliminar metadatos", "quitar metadatos", "borrar metadatos", "eliminar exif",
    "quitar exif", "borrar datos exif", "quitar ubicación de foto", "eliminar gps foto",
    "borrar ubicacion foto", "anonimizar foto", "privacidad foto", "exif remover",
  ],

  // ── Convertir ─────────────────────────────────────────────────────────
  "convert-to-jpg": [
    "convertir a jpg", "convertir imagen a jpg", "convertir a jpeg", "pasar a jpg",
    "cambiar formato a jpg", "convertidor de imagenes", "conversor de imagenes",
    "convertir imagen", "cambiar formato de imagen", "jpeg", "jpg converter", "a jpg",
  ],
  "png-to-jpg": [
    "png a jpg", "convertir png a jpg", "png a jpeg", "pasar png a jpg", "cambiar png a jpg",
    "png to jpg", "png en jpg", "png2jpg",
  ],
  "jpg-to-png": [
    "jpg a png", "convertir jpg a png", "jpeg a png", "pasar jpg a png", "cambiar jpg a png",
    "jpg to png", "jpg en png", "jpg2png",
  ],
  "webp-to-png": ["webp a png", "convertir webp a png", "abrir webp", "webp to png", "pasar webp a png"],
  "webp-to-jpg": [
    "webp a jpg", "convertir webp a jpg", "webp a jpeg", "abrir webp", "webp to jpg", "pasar webp a jpg",
  ],
  "jpg-to-webp": ["jpg a webp", "convertir jpg a webp", "jpeg a webp", "pasar a webp"],
  "png-to-webp": ["png a webp", "convertir png a webp", "pasar png a webp"],
  "heic-to-jpg": [
    "heic a jpg", "convertir heic a jpg", "heic a jpeg", "abrir heic", "fotos de iphone",
    "foto iphone a jpg", "convertir fotos de iphone", "heif a jpg", "heic to jpg",
    "archivo heic", "pasar heic a jpg", "abrir heic en ordenador", "abrir heic en computadora",
    "heic en windows", "fotos iphone a pc",
  ],
  "heic-to-png": ["heic a png", "convertir heic a png", "foto iphone a png", "heif a png"],
  "jfif-to-jpg": ["jfif a jpg", "convertir jfif a jpg", "abrir jfif", "archivo jfif"],
  "gif-to-png": ["gif a png", "convertir gif a png"],
  "gif-to-jpg": ["gif a jpg", "convertir gif a jpg"],
  "bmp-to-jpg": ["bmp a jpg", "convertir bmp a jpg", "bmp a jpeg"],
  "avif-to-jpg": ["avif a jpg", "convertir avif a jpg", "abrir avif", "archivo avif"],
  "avif-to-png": ["avif a png", "convertir avif a png"],
  "image-to-text": [
    "imagen a texto", "convertir imagen a texto", "extraer texto de imagen", "sacar texto de imagen",
    "texto de una foto", "foto a texto", "ocr", "ocr online", "reconocimiento de texto",
    "copiar texto de imagen", "captura a texto", "jpg a texto", "imagen a word", "image to text",
  ],
  "image-to-pdf": [
    "imagen a pdf", "convertir imagen a pdf", "jpg a pdf", "convertir jpg a pdf", "foto a pdf",
    "fotos a pdf", "png a pdf", "jpeg a pdf", "imagenes a pdf", "imágenes a pdf",
    "pasar fotos a pdf", "unir fotos en pdf", "juntar imagenes en un pdf", "image to pdf",
  ],
  "image-to-base64": [
    "imagen a base64", "base64", "codificar base64", "data uri", "base64 encoder", "convertir imagen a base64",
  ],
  "base64-to-image": [
    "base64 a imagen", "base64 to image", "decodificar base64", "base64 decoder",
    "base64 a png", "base64 a jpg",
  ],
  "gif-to-images": [
    "gif a imagenes", "gif a imágenes", "extraer fotogramas gif", "separar gif en imagenes",
    "frames de gif", "gif a jpg", "gif a png",
  ],

  // ── Editar y crear ────────────────────────────────────────────────────
  "image-editor": [
    "editor de fotos", "editar fotos", "editar foto", "editar imagen", "editor de imagenes",
    "editor de imágenes", "editor de fotos gratis", "editor de fotos online", "retocar fotos",
    "editor fotos", "photoshop online", "filtros para fotos", "dibujar en imagen", "photo editor",
  ],
  "watermark-image": [
    "marca de agua", "poner marca de agua", "agregar marca de agua", "añadir marca de agua",
    "anadir marca de agua", "insertar marca de agua", "crear marca de agua", "logo en foto",
    "poner logo en imagen", "texto sobre imagen", "proteger fotos", "copyright foto", "watermark",
  ],
  "meme-generator": [
    "generador de memes", "crear memes", "hacer memes", "crear meme", "meme generator",
    "meme maker", "memes", "meme", "plantillas de memes", "texto arriba y abajo",
  ],
  "html-to-image": [
    "html a imagen", "html a png", "pagina web a imagen", "captura de pagina web",
    "url a imagen", "html to image",
  ],
  "blur-face": [
    "pixelar cara", "pixelar caras", "difuminar cara", "difuminar rostro", "censurar cara",
    "tapar cara", "ocultar cara", "desenfocar cara", "pixelar matricula", "pixelar placa",
    "tapar matricula", "anonimizar foto",
  ],
  "grayscale-image": [
    "imagen en blanco y negro", "foto blanco y negro", "pasar foto a blanco y negro",
    "blanco y negro", "escala de grises", "quitar color", "foto en byn", "desaturar",
  ],
  "blur-image": [
    "difuminar imagen", "desenfocar imagen", "desenfocar foto", "difuminar foto",
    "imagen borrosa", "poner borroso", "blur", "efecto borroso",
  ],
  "add-border": [
    "agregar borde a imagen", "añadir borde a imagen", "marco para fotos", "poner marco a foto",
    "borde para fotos", "borde blanco", "marco de fotos online",
  ],
  "circle-crop": [
    "recortar foto en circulo", "recortar foto en círculo", "recortar imagen circular",
    "foto circular", "imagen redonda", "foto redonda", "foto de perfil redonda", "avatar redondo",
  ],
  "merge-images": [
    "unir imagenes", "unir imágenes", "unir fotos", "juntar fotos", "juntar imagenes",
    "combinar imagenes", "combinar fotos", "collage de fotos", "hacer collage", "collage",
    "fotos lado a lado", "poner dos fotos juntas", "unir dos fotos",
  ],
  "gif-maker": [
    "crear gif", "hacer gif", "gif maker", "creador de gif", "gif animado", "fotos a gif",
    "imagenes a gif", "hacer un gif con fotos", "crear animacion",
  ],
  "image-color-picker": [
    "selector de color", "color picker", "obtener color de imagen", "cuentagotas",
    "sacar color de imagen", "codigo de color", "codigo hex", "paleta de colores",
    "identificar color", "que color es", "selector de colores",
  ],
  "image-metadata": [
    "ver metadatos de imagen", "ver metadatos", "metadatos de foto", "datos exif", "exif",
    "visor exif", "exif viewer", "cuando se tomo la foto", "ubicacion de foto",
    "informacion de la imagen",
  ],

  // ── IA ────────────────────────────────────────────────────────────────
  "remove-background": [
    "quitar fondo", "quitar fondo imagen", "quitar fondo a imagen", "quitar fondo de foto",
    "eliminar fondo", "eliminar fondo de imagen", "borrar fondo", "remover fondo",
    "fondo transparente", "quitar fondo gratis", "quitar el fondo", "png transparente",
    "recortar persona", "sin fondo", "remove bg", "removebg", "remove background",
  ],
  "upscale-image": [
    "mejorar calidad de imagen", "mejorar calidad de foto", "mejorar calidad imagen",
    "aumentar resolución", "aumentar resolucion de imagen", "upscale", "upscaler",
    "escalar imagen", "ampliar imagen sin perder calidad", "mejorar foto", "mejorar imagen ia",
    "2x", "4x",
  ],

  // Variantes — comprimir a un tamaño
  "reduce-image-size-in-kb": [
    "reducir tamaño de imagen en kb", "reducir tamano imagen kb", "reducir kb de foto",
    "bajar kb imagen", "imagen a kb", "cambiar kb de imagen", "peso en kb",
  ],
  "compress-image-to-20kb": ["comprimir imagen a 20 kb", "reducir foto a 20 kb", "20 kb", "20kb", "firma 20 kb"],
  "compress-image-to-50kb": ["comprimir imagen a 50 kb", "reducir foto a 50 kb", "50 kb", "50kb", "foto 50 kb"],
  "compress-image-to-100kb": [
    "comprimir imagen a 100 kb", "reducir foto a 100 kb", "100 kb", "100kb", "imagen menos de 100 kb",
  ],
  "compress-image-to-200kb": [
    "comprimir imagen a 200 kb", "reducir foto a 200 kb", "200 kb", "200kb", "imagen menos de 200 kb",
  ],
  "compress-image-to-1mb": [
    "comprimir imagen a 1 mb", "reducir foto a 1 mb", "imagen menos de 1 mb", "1 mb", "1mb",
  ],
  "compress-image-to-10kb": ["comprimir imagen a 10 kb", "reducir foto a 10 kb", "10 kb", "10kb", "firma 10 kb"],
  "compress-image-to-30kb": ["comprimir imagen a 30 kb", "reducir foto a 30 kb", "30 kb", "30kb"],
  "compress-image-to-300kb": ["comprimir imagen a 300 kb", "reducir foto a 300 kb", "300 kb", "300kb"],
  "compress-image-to-500kb": ["comprimir imagen a 500 kb", "reducir foto a 500 kb", "500 kb", "500kb"],
  "compress-image-to-2mb": ["comprimir imagen a 2 mb", "reducir foto a 2 mb", "imagen menos de 2 mb", "2 mb", "2mb"],
  "compress-image-to-15kb": ["comprimir imagen a 15 kb", "reducir foto a 15 kb", "15 kb", "15kb"],
  "compress-image-to-40kb": ["comprimir imagen a 40 kb", "reducir foto a 40 kb", "40 kb", "40kb"],
  "compress-image-to-150kb": ["comprimir imagen a 150 kb", "reducir foto a 150 kb", "150 kb", "150kb"],
  "increase-image-size-in-kb": [
    "aumentar tamaño de imagen en kb", "aumentar tamano imagen kb", "aumentar kb de foto",
    "subir kb imagen", "aumentar peso de imagen", "hacer imagen mas pesada",
  ],
  "signature-resizer": [
    "redimensionar firma", "firma digital en imagen", "firma en imagen", "reducir firma",
    "recortar firma", "firma fondo blanco", "firma para formulario", "escanear firma",
  ],
  "jpg-to-pdf-under-100kb": ["jpg a pdf menos de 100 kb", "pdf 100 kb", "jpg a pdf 100kb"],
  "jpg-to-pdf-under-200kb": ["jpg a pdf menos de 200 kb", "pdf 200 kb", "jpg a pdf 200kb"],
  "jpg-to-pdf-under-300kb": ["jpg a pdf menos de 300 kb", "pdf 300 kb", "jpg a pdf 300kb"],
  "jpg-to-pdf-under-500kb": ["jpg a pdf menos de 500 kb", "pdf 500 kb", "jpg a pdf 500kb"],
  "convert-to-png": [
    "convertir a png", "convertir imagen a png", "pasar a png", "cambiar formato a png", "a png",
  ],
  "convert-to-webp": [
    "convertir a webp", "convertir imagen a webp", "pasar a webp", "cambiar formato a webp", "a webp",
  ],
  "svg-to-png": ["svg a png", "convertir svg a png", "vector a png", "pasar svg a png", "svg to png"],
  "png-to-ico": [
    "png a ico", "crear favicon", "generador de favicon", "favicon", "crear icono",
    "imagen a ico", "jpg a ico", "convertir png a ico",
  ],
  "youtube-thumbnail-resizer": [
    "tamaño de miniatura de youtube", "tamano miniatura youtube", "miniatura de youtube",
    "miniatura youtube", "portada de video youtube", "thumbnail youtube", "1280x720",
  ],
  "whatsapp-dp-resizer": [
    "foto de perfil de whatsapp", "foto de perfil whatsapp sin recortar", "foto perfil whatsapp",
    "foto completa whatsapp", "tamaño foto perfil whatsapp", "whatsapp dp",
  ],
  "linkedin-banner-resizer": [
    "banner de linkedin", "banner linkedin", "tamaño banner linkedin", "portada linkedin",
    "fondo de perfil linkedin", "1584x396",
  ],
  "facebook-cover-resizer": [
    "portada de facebook", "portada facebook", "tamaño portada facebook", "foto de portada facebook",
    "facebook cover", "851x315",
  ],
  "discord-banner-resizer": [
    "banner de discord", "banner discord", "tamaño banner discord", "banner de servidor discord",
  ],
  "9-16-aspect-ratio-image": [
    "formato 9:16", "imagen 9:16", "1080x1920", "foto 9:16", "tamaño historia instagram",
    "formato reels", "formato tiktok", "formato vertical", "historias",
  ],
  "dpi-converter": [
    "cambiar dpi de imagen", "cambiar dpi", "300 dpi", "imagen a 300 dpi", "aumentar dpi",
    "convertir dpi",
  ],
  "dpi-checker": [
    "ver dpi de imagen", "ver dpi", "saber dpi de una imagen", "cuantos dpi tiene mi imagen",
    "comprobar dpi", "comprobar resolución",
  ],
  "resize-image-in-cm": [
    "redimensionar imagen en cm", "cambiar tamaño imagen en cm", "imagen en centimetros",
    "cm a pixeles", "imagen en mm", "tamaño de impresión",
  ],
  "video-to-gif": [
    "video a gif", "vídeo a gif", "mp4 a gif", "convertir video a gif", "mov a gif",
    "gif desde video", "hacer gif de un video",
  ],
  "gif-compressor": [
    "comprimir gif", "reducir tamaño gif", "reducir tamano gif", "gif mas ligero", "optimizar gif",
  ],
  "gif-resizer": ["redimensionar gif", "cambiar tamaño gif", "reducir gif", "escalar gif"],
  "gif-to-mp4": ["gif a mp4", "convertir gif a mp4", "gif a video", "gif a vídeo"],
  "webp-to-gif": ["webp a gif", "convertir webp a gif", "webp animado a gif"],
  "gif-cropper": ["recortar gif", "cortar bordes gif", "crop gif"],
  "rotate-gif": ["girar gif", "rotar gif", "voltear gif"],
  "reverse-gif": ["invertir gif", "gif al reves", "gif al revés", "gif en reversa", "gif bumeran", "boomerang gif"],
  "gif-speed-changer": [
    "cambiar velocidad gif", "cambiar velocidad de gif", "acelerar gif", "ralentizar gif",
    "gif mas rapido", "gif mas lento",
  ],
  "gif-cutter": ["cortar gif", "acortar gif", "recortar duración gif", "quitar fotogramas gif"],
  "gif-to-webp": ["gif a webp", "convertir gif a webp", "webp animado"],
  "gif-to-apng": ["gif a apng", "png animado", "convertir gif a apng"],
  "gif-to-sprite-sheet": ["gif a sprite sheet", "sprite sheet", "spritesheet", "hoja de sprites"],
  "gif-merger": ["unir gifs", "unir gif", "juntar gifs", "combinar gifs"],
  "add-text-to-gif": [
    "agregar texto a gif", "añadir texto a gif", "poner texto en gif", "escribir en gif", "subtitulos gif",
  ],
  "typing-text-gif": [
    "gif de texto escribiendo", "texto escribiendose gif", "efecto maquina de escribir",
    "gif de texto", "texto animado",
  ],
  "invert-image": [
    "invertir colores", "invertir colores imagen", "negativo de imagen", "negativo de foto",
    "negativo", "colores invertidos",
  ],
  "pixelate-image": [
    "pixelar imagen", "pixelar foto", "pixelar", "efecto pixel", "pixel art", "mosaico",
  ],
  "image-brightness": [
    "ajustar brillo de imagen", "ajustar brillo", "aclarar foto", "iluminar foto",
    "oscurecer imagen", "foto muy oscura", "cambiar contraste", "subir brillo",
  ],
  "glitch-effect": ["efecto glitch", "glitch", "efecto vhs", "efecto distorsion", "rgb split"],
  "round-corners": [
    "redondear esquinas", "redondear esquinas imagen", "bordes redondeados", "esquinas redondas",
  ],
  "remove-watermark": [
    "quitar marca de agua", "eliminar marca de agua", "borrar marca de agua",
    "quitar marca de agua gratis", "remover marca de agua", "quitar logo de imagen",
    "quitar fecha de foto", "quitar texto de imagen", "watermark remover",
  ],
  "remove-object": [
    "eliminar objetos de fotos", "quitar personas de fotos", "borrar objetos", "borrar personas de foto",
    "quitar objetos de una foto", "borrador magico", "magic eraser", "quitar cosas de una foto",
  ],
  "split-image": [
    "dividir imagen", "cortar imagen en partes", "dividir foto", "partir imagen",
    "dividir imagen en partes iguales", "imagen en mosaicos",
  ],
  "image-overlay": [
    "superponer imagenes", "superponer imágenes", "poner una imagen sobre otra",
    "imagen encima de otra", "doble exposicion", "fusionar imagenes",
  ],

  // Variantes — HD, voltear, fondo
  "image-to-hd": [
    "convertir imagen a hd", "imagen hd", "foto hd", "foto en hd", "pasar foto a hd",
    "imagen en alta calidad", "aumentar resolucion",
  ],
  "unblur-image": [
    "mejorar nitidez de foto", "mejorar nitidez", "quitar desenfoque", "nitidez imagen",
    "foto borrosa", "enfocar foto", "foto movida", "unblur",
  ],
  "flip-image": [
    "voltear imagen", "voltear foto", "espejo imagen", "efecto espejo", "invertir imagen horizontal",
    "reflejar imagen", "selfie al reves", "flip",
  ],
  "change-background-color": [
    "cambiar fondo de foto", "cambiar fondo", "fondo blanco foto", "poner fondo blanco",
    "cambiar color de fondo", "fondo azul foto", "fondo rojo foto", "reemplazar fondo",
  ],
  "blur-background": [
    "desenfocar fondo", "difuminar fondo", "fondo borroso", "efecto retrato", "modo retrato",
    "bokeh", "desenfoque de fondo",
  ],
  "passport-photo-maker": [
    "foto carnet", "foto tamaño carnet", "foto para carnet", "foto dni", "foto para dni",
    "foto para pasaporte", "foto pasaporte", "foto de pasaporte", "foto infantil",
    "foto tamaño infantil", "foto para visa", "foto para documentos", "35x45",
    "fotos carnet desde el movil", "foto carnet celular", "hacer foto carnet",
  ],
  "3x4-photo": ["foto 3x4", "3x4", "3 x 4 cm"],
  "2x2-photo": ["foto 2x2", "foto visa estados unidos", "foto visa americana", "2x2 pulgadas"],
  "instagram-grid-maker": [
    "cuadricula para instagram", "cuadrícula instagram", "dividir foto para instagram",
    "instagram grid", "puzzle instagram", "carrusel instagram", "panorama instagram",
  ],
};
