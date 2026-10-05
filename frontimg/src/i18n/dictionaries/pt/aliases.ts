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

  // Variantes — comprimir até um tamanho
  "reduce-image-size-in-kb": [
    "diminuir kb da foto", "reduzir kb", "diminuir tamanho da foto em kb", "comprimir imagem em kb",
  ],
  "compress-image-to-20kb": [
    "comprimir imagem para 20kb", "20 kb", "assinatura 20 kb",
  ],
  "compress-image-to-50kb": [
    "comprimir imagem para 50kb", "50 kb",
  ],
  "compress-image-to-100kb": [
    "comprimir imagem para 100kb", "100 kb", "reduzir foto para 100kb",
  ],
  "compress-image-to-200kb": [
    "comprimir imagem para 200kb", "200 kb",
  ],
  "compress-image-to-1mb": [
    "comprimir imagem para 1mb", "1 mb", "comprimir foto 1mb",
  ],
  "compress-image-to-10kb": [
    "comprimir imagem para 10kb", "10 kb", "assinatura 10kb",
  ],
  "compress-image-to-30kb": [
    "comprimir imagem para 30kb", "30 kb", "foto 30kb",
  ],
  "compress-image-to-300kb": [
    "comprimir imagem para 300kb", "300 kb", "reduzir foto para 300kb",
  ],
  "compress-image-to-500kb": [
    "comprimir imagem para 500kb", "500 kb", "reduzir foto para 500kb",
  ],
  "compress-image-to-2mb": [
    "comprimir imagem para 2mb", "2 mb", "reduzir foto para 2mb",
  ],
  "compress-image-to-15kb": [
    "comprimir imagem para 15kb", "15 kb",
  ],
  "compress-image-to-40kb": [
    "comprimir imagem para 40kb", "40 kb",
  ],
  "compress-image-to-150kb": [
    "comprimir imagem para 150kb", "150 kb",
  ],
  "increase-image-size-in-kb": [
    "aumentar tamanho da imagem", "aumentar kb da foto", "aumentar tamanho da foto em kb",
  ],
  "signature-resizer": [
    "redimensionar assinatura", "assinatura digitalizada", "assinatura fundo branco", "assinatura 20kb",
  ],
  "jpg-to-pdf-under-100kb": [
    "jpg para pdf 100kb", "pdf 100kb", "converter jpg em pdf até 100kb",
  ],
  "jpg-to-pdf-under-200kb": [
    "jpg para pdf 200kb", "pdf 200kb", "converter jpg em pdf até 200kb",
  ],
  "jpg-to-pdf-under-300kb": [
    "jpg para pdf 300kb", "pdf 300kb", "converter jpg em pdf até 300kb",
  ],
  "jpg-to-pdf-under-500kb": [
    "jpg para pdf 500kb", "pdf 500kb", "converter jpg em pdf até 500kb",
  ],
  "convert-to-png": [
    "converter para png", "transformar em png", "mudar formato para png", "imagem para png",
  ],
  "convert-to-webp": [
    "converter para webp", "transformar em webp", "imagem para webp", "mudar formato para webp",
  ],
  "svg-to-png": [
    "converter svg", "svg em png", "vetor para png", "exportar svg como png",
  ],
  "png-to-ico": [
    "gerador de favicon", "imagem para ico", "criar ícone", "favicon ico", "jpg para ico",
  ],

  // Variantes — HD, espelhar, fundo
  "image-to-hd": [
    "imagem em hd", "foto em hd", "deixar foto em hd", "converter imagem em hd", "foto hd",
  ],
  "unblur-image": [
    "tirar desfoque", "foto borrada", "despixelar imagem", "deixar foto nítida",
  ],
  "flip-image": [
    "espelhar foto", "espelhar imagem", "inverter foto", "virar imagem", "efeito espelho",
  ],
  "change-background-color": [
    "fundo branco foto", "trocar fundo", "mudar fundo da foto", "fundo azul", "fundo vermelho", "foto 3x4 fundo branco",
  ],
  "blur-background": [
    "desfocar fundo da foto", "fundo desfocado", "modo retrato", "efeito bokeh",
  ],
  "passport-photo-maker": [
    "foto para documento", "foto de passaporte", "foto para passaporte", "foto 5x7", "foto para rg", "foto para cnh", "foto de visto",
  ],
  "3x4-photo": [
    "foto 3x4", "fazer foto 3x4", "foto 3x4 online", "foto 3 por 4", "foto para carteirinha",
  ],
  "2x2-photo": [
    "foto 2x2", "foto visto americano", "foto passaporte americano", "2x2 polegadas",
  ],
};
