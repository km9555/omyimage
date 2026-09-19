/**
 * Portuguese search synonyms, keyed by tool id — what a Brazilian types into
 * the header search when they don't know our tool's exact name.
 *
 * Also the home for the vocabulary the INTERFACE deliberately doesn't use
 * (conversion.md §5): European Portuguese forms (ficheiro, rodar, cara,
 * fotografia) and colloquial or brand-generic terms (tirar fundo, png
 * transparente, diminuir foto). They catch the query without making the
 * interface inconsistent.
 *
 * Lowercase; accents are optional at match time (the search folds them), so
 * "rotacao" and "rotação" both land.
 */
export const ptAliases: Record<string, string[]> = {
  // ── Otimizar ──────────────────────────────────────────────────────────
  "compress-image": [
    "diminuir tamanho da imagem", "reduzir tamanho da foto", "comprimir foto",
    "compactar imagem", "diminuir kb", "reduzir kb", "otimizar imagem",
    "deixar imagem mais leve", "compressor de imagem", "comprimir jpg",
    "comprimir png", "diminuir peso da foto", "reduzir mb",
  ],
  "resize-image": [
    "mudar tamanho da imagem", "alterar tamanho", "redimensionar foto",
    "aumentar imagem", "diminuir imagem", "pixels", "largura altura",
    "mudar resolução", "redimensionador", "tamanho da foto",
  ],
  "crop-image": [
    "cortar imagem", "cortar foto", "recortar foto", "aparar imagem",
    "proporção", "quadrado", "16:9", "4:3", "cortar parte da imagem",
  ],
  "rotate-image": [
    "rodar imagem", "girar foto", "virar imagem", "espelhar imagem",
    "endireitar foto", "90 graus", "180 graus", "rotação", "foto de lado",
  ],
  "remove-exif": [
    "remover metadados", "apagar exif", "remover localização da foto",
    "limpar gps", "privacidade da foto", "remover dados da câmera",
  ],

  // ── Converter ─────────────────────────────────────────────────────────
  "convert-to-jpg": [
    "converter para jpeg", "transformar em jpg", "mudar formato para jpg",
    "conversor de imagem", "converter imagem", "mudar formato da imagem",
  ],
  "png-to-jpg": ["png em jpg", "png para jpeg", "converter png", "transformar png em jpg"],
  "jpg-to-png": ["jpg em png", "jpeg para png", "converter jpg", "transformar jpg em png"],
  "webp-to-png": ["webp em png", "converter webp", "abrir webp"],
  "webp-to-jpg": ["webp em jpg", "webp para jpeg", "converter webp em jpg"],
  "jpg-to-webp": ["jpg em webp", "converter para webp"],
  "png-to-webp": ["png em webp", "converter png para webp"],
  "heic-to-jpg": [
    "heic em jpg", "foto do iphone para jpg", "heif para jpg", "converter heic",
    "abrir heic", "foto iphone",
  ],
  "heic-to-png": ["heic em png", "foto do iphone para png", "heif para png"],
  "jfif-to-jpg": ["jfif em jpg", "abrir jfif", "converter jfif"],
  "gif-to-png": ["gif em png"],
  "gif-to-jpg": ["gif em jpg"],
  "bmp-to-jpg": ["bmp em jpg", "converter bmp"],
  "avif-to-jpg": ["avif em jpg", "abrir avif", "converter avif"],
  "avif-to-png": ["avif em png"],
  "image-to-text": [
    "ocr", "extrair texto de imagem", "copiar texto da imagem", "foto para texto",
    "ler texto da foto", "print para texto", "converter imagem em texto",
    "transcrever imagem", "jpg para texto",
  ],
  "image-to-pdf": [
    "jpg para pdf", "png para pdf", "foto para pdf", "juntar fotos em pdf",
    "converter imagem em pdf", "transformar foto em pdf",
  ],
  "image-to-base64": ["base64", "data uri", "codificar imagem"],
  "base64-to-image": ["decodificar base64", "base64 em imagem", "base64 para png"],
  "gif-to-images": ["extrair quadros do gif", "separar gif", "frames do gif", "dividir gif"],

  // ── Editar e criar ────────────────────────────────────────────────────
  "image-editor": [
    "editar foto", "editar imagem", "editor de imagem", "editor online",
    "filtros", "ajustar brilho", "desenhar na foto", "photoshop online",
  ],
  "watermark-image": [
    "marca dagua", "colocar marca d'água", "logo na foto", "proteger foto",
    "assinatura na foto", "texto na foto",
  ],
  "meme-generator": ["criar meme", "fazer meme", "meme", "texto em cima e embaixo"],
  "html-to-image": ["print de site", "captura de tela de site", "url para imagem", "html em png"],
  "blur-face": [
    "borrar rosto", "desfocar cara", "esconder rosto", "pixelizar rosto",
    "censurar rosto", "desfocar placa", "anonimizar foto",
  ],
  "grayscale-image": [
    "preto e branco", "foto preto e branco", "escala de cinza", "tons de cinza",
    "tirar cor da foto",
  ],
  "blur-image": ["borrar imagem", "embaçar foto", "desfoque", "desfocar fundo"],
  "add-border": ["moldura", "borda na foto", "margem na imagem", "enquadrar foto"],
  "circle-crop": ["foto redonda", "recorte circular", "foto de perfil redonda", "avatar redondo"],
  "merge-images": [
    "juntar fotos", "unir imagens", "combinar imagens", "colagem",
    "fotos lado a lado", "montagem de fotos", "grade de fotos",
  ],
  "gif-maker": ["fazer gif", "gif animado", "fotos em gif", "animação"],
  "image-color-picker": [
    "conta-gotas", "pegar cor da imagem", "código hex", "paleta de cores",
    "extrair cores", "cor da foto", "selecionar cor",
  ],
  "image-metadata": [
    "ver exif", "dados da foto", "informações da câmera", "localização da foto",
    "quando a foto foi tirada", "propriedades da imagem",
  ],

  // ── IA ────────────────────────────────────────────────────────────────
  "remove-background": [
    "tirar fundo", "remover fundo da foto", "fundo transparente", "png transparente",
    "apagar fundo", "recortar pessoa", "remove bg", "sem fundo",
  ],
  "upscale-image": [
    "aumentar resolução", "melhorar foto", "foto em hd", "ampliar imagem",
    "deixar foto nítida", "tirar desfoque", "melhorar imagem com ia", "2x", "4x",
  ],
};
