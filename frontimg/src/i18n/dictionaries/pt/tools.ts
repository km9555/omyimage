/**
 * Portuguese tool names + short descriptions, keyed by tool **id**, plus the
 * four category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the Portuguese build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see conversion.md §5) ───────────────
 * **Brazilian Portuguese**, one locale under `/pt`, addressed as **você** with
 * imperatives ("Reduza", "Converta", "Remova").
 *
 * Pinned vocabulary so it cannot drift the way iLoveIMG's /pt did (it mixes
 * the European "ficheiro" into Brazilian copy): **arquivo** (not ficheiro),
 * **baixar** (not descarregar), **excluir** (not eliminar), **senha** (not
 * palavra-passe), **tela** (not ecrã), **girar** (not rodar), **rosto** (not
 * cara), **celular** (not telemóvel).
 *
 * Gender: **"a imagem"** / **"a foto"** are feminine; format names are
 * masculine — "o PNG", "o JPG", "o PDF", "o GIF", plural bare "-s" ("os PNGs").
 *
 * Names follow the market head term the slug targets (slugs.ts), not a word
 * for word translation: the home card, the nav link and the H1 should all
 * read as the thing a Brazilian typed into Google.
 *
 * Format and product names stay Latin: JPG, PNG, WEBP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
}

export const ptTools: Record<string, LocalizedTool> = {
  // ── Otimizar ──────────────────────────────────────────────────────────
  "compress-image": {
    name: "Comprimir imagem",
    shortDescription: "Reduza JPG, PNG e WEBP com a qualidade que você escolher.",
  },
  "resize-image": {
    name: "Redimensionar imagem",
    shortDescription: "Mude o tamanho em pixels ou porcentagem, mantendo a proporção.",
  },
  "crop-image": {
    name: "Recortar imagem",
    shortDescription: "Recorte em qualquer formato ou proporção, gire, em lote.",
  },
  "rotate-image": {
    name: "Girar imagem",
    shortDescription: "Gire 90°, 180°, 270° ou em qualquer ângulo, e espelhe, em lote.",
  },

  // ── Converter ─────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "Converter para JPG",
    shortDescription: "PNG, WEBP, GIF e BMP → JPG.",
  },
  "png-to-jpg": {
    name: "PNG para JPG",
    shortDescription: "Converta imagens PNG em JPG compactos.",
  },
  "jpg-to-png": {
    name: "JPG para PNG",
    shortDescription: "Converta JPG em PNG sem perdas, com transparência.",
  },
  "webp-to-png": {
    name: "WEBP para PNG",
    shortDescription: "Converta imagens WEBP modernas em PNG.",
  },
  "heic-to-png": {
    name: "HEIC para PNG",
    shortDescription: "Converta fotos HEIC do iPhone em PNG sem perdas.",
  },
  "image-to-text": {
    name: "Converter imagem em texto",
    shortDescription: "Extraia texto editável de fotos e digitalizações com OCR.",
  },
  "webp-to-jpg": {
    name: "WEBP para JPG",
    shortDescription: "Converta WEBP em JPG, que abre em qualquer lugar.",
  },
  "jpg-to-webp": {
    name: "JPG para WEBP",
    shortDescription: "Deixe fotos JPG mais leves convertendo para WEBP.",
  },
  "png-to-webp": {
    name: "PNG para WEBP",
    shortDescription: "Converta PNG em WEBP mantendo a transparência.",
  },
  "jfif-to-jpg": {
    name: "JFIF para JPG",
    shortDescription: "Transforme downloads .jfif em arquivos .jpg.",
  },
  "gif-to-png": {
    name: "GIF para PNG",
    shortDescription: "Converta um GIF em uma imagem PNG sem perdas.",
  },
  "gif-to-jpg": {
    name: "GIF para JPG",
    shortDescription: "Converta quadros de GIF em imagens JPG compactas.",
  },
  "bmp-to-jpg": {
    name: "BMP para JPG",
    shortDescription: "Transforme arquivos BMP enormes em JPGs leves.",
  },
  "avif-to-jpg": {
    name: "AVIF para JPG",
    shortDescription: "Abra imagens AVIF em qualquer lugar convertendo para JPG.",
  },
  "avif-to-png": {
    name: "AVIF para PNG",
    shortDescription: "Converta AVIF em PNG sem perdas, com transparência.",
  },
  "heic-to-jpg": {
    name: "HEIC para JPG",
    shortDescription: "Converta fotos HEIC do iPhone em JPG ou PNG.",
  },
  "image-to-pdf": {
    name: "Imagem para PDF",
    shortDescription: "Junte imagens JPG e PNG em um único PDF.",
  },
  "image-to-base64": {
    name: "Imagem para Base64",
    shortDescription: "Codifique uma imagem em um data URI Base64.",
  },
  "base64-to-image": {
    name: "Base64 para imagem",
    shortDescription: "Decodifique um texto Base64 de volta em imagem.",
  },
  "gif-to-images": {
    name: "GIF para imagens",
    shortDescription: "Extraia cada quadro de um GIF em PNG ou JPG.",
  },

  // ── Editar e criar ────────────────────────────────────────────────────
  "image-editor": {
    name: "Editor de fotos completo",
    shortDescription: "Recorte, ajuste, aplique filtros, desenhe e marque — tudo em um editor.",
  },
  "watermark-image": {
    name: "Colocar marca d'água em foto",
    shortDescription: "Adicione marca d'água de texto ou logo, em lote.",
  },
  "meme-generator": {
    name: "Gerador de memes",
    shortDescription: "Texto em cima e embaixo, modelos, exporte em PNG ou JPG.",
  },
  "html-to-image": {
    name: "HTML para imagem",
    shortDescription: "Transforme uma URL ou código HTML em PNG ou JPG.",
  },
  "blur-face": {
    name: "Desfocar rosto",
    shortDescription: "Detecte e desfoque rostos e placas para proteger a privacidade.",
  },
  "grayscale-image": {
    name: "Imagem em preto e branco",
    shortDescription: "Deixe fotos em preto e branco, em lote.",
  },
  "blur-image": {
    name: "Desfocar imagem",
    shortDescription: "Aplique um desfoque suave na imagem inteira.",
  },
  "add-border": {
    name: "Adicionar borda à imagem",
    shortDescription: "Coloque uma moldura colorida ou margem nas fotos.",
  },
  "circle-crop": {
    name: "Recortar imagem em círculo",
    shortDescription: "Recorte imagens em círculo para fotos de perfil.",
  },
  "merge-images": {
    name: "Juntar imagens",
    shortDescription: "Junte imagens lado a lado, uma embaixo da outra ou em grade.",
  },
  "image-color-picker": {
    name: "Seletor de cores e paleta",
    shortDescription: "Pegue qualquer cor ou extraia a paleta completa de uma imagem.",
  },
  "image-metadata": {
    name: "Ver metadados da imagem",
    shortDescription: "Veja dados EXIF, GPS e da câmera de uma foto.",
  },
  "remove-exif": {
    name: "Remover dados EXIF",
    shortDescription: "Apague EXIF, GPS e metadados para proteger a privacidade.",
  },
  "gif-maker": {
    name: "Criar GIF",
    shortDescription: "Monte um GIF animado com as suas imagens.",
  },

  // ── IA ────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "Remover fundo",
    shortDescription: "Remoção de fundo com IA para PNG transparente.",
  },
  "upscale-image": {
    name: "Melhorar qualidade da imagem",
    shortDescription: "Aumente e melhore com IA — 2×, 3×, 4× recuperando detalhes.",
  },

  // ── Variantes: comprimir até um tamanho (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "Reduzir tamanho da imagem em KB",
    shortDescription: "Diminua a foto para o tamanho em KB que você precisar.",
  },
  "compress-image-to-20kb": {
    name: "Comprimir imagem para 20 KB",
    shortDescription: "Fotos e assinaturas abaixo de 20 KB para formulários.",
  },
  "compress-image-to-50kb": {
    name: "Comprimir imagem para 50 KB",
    shortDescription: "Um limite de foto comum em inscrições.",
  },
  "compress-image-to-100kb": {
    name: "Comprimir imagem para 100 KB",
    shortDescription: "Fotos e documentos nítidos abaixo de 100 KB.",
  },
  "compress-image-to-200kb": {
    name: "Comprimir imagem para 200 KB",
    shortDescription: "Fotos e documentos digitalizados abaixo de 200 KB.",
  },
  "compress-image-to-1mb": {
    name: "Comprimir imagem para 1 MB",
    shortDescription: "Fotos do celular abaixo de 1 MB, quase sempre em tamanho total.",
  },
  "compress-image-to-10kb": {
    name: "Comprimir imagem para 10 KB",
    shortDescription: "Assinaturas e fotos pequenas abaixo de 10 KB.",
  },
  "compress-image-to-30kb": {
    name: "Comprimir imagem para 30 KB",
    shortDescription: "Fotos de formulário abaixo de 30 KB, rosto nítido.",
  },
  "compress-image-to-300kb": {
    name: "Comprimir imagem para 300 KB",
    shortDescription: "Fotos e documentos abaixo de 300 KB, sem perder a leitura.",
  },
  "compress-image-to-500kb": {
    name: "Comprimir imagem para 500 KB",
    shortDescription: "Fotos, documentos e prints abaixo de 500 KB.",
  },
  "compress-image-to-2mb": {
    name: "Comprimir imagem para 2 MB",
    shortDescription: "Fotos grandes do celular abaixo de 2 MB.",
  },
  "compress-image-to-15kb": {
    name: "Comprimir imagem para 15 KB",
    shortDescription: "Assinaturas e fotos pequenas abaixo de 15 KB.",
  },
  "compress-image-to-40kb": {
    name: "Comprimir imagem para 40 KB",
    shortDescription: "Fotos de formulário abaixo de 40 KB, nítidas.",
  },
  "compress-image-to-150kb": {
    name: "Comprimir imagem para 150 KB",
    shortDescription: "Fotos e páginas manuscritas abaixo de 150 KB.",
  },
  "increase-image-size-in-kb": {
    name: "Aumentar tamanho da imagem em KB",
    shortDescription: "Deixe uma foto com pelo menos 10, 20 ou 50 KB.",
  },
  "signature-resizer": {
    name: "Redimensionar assinatura",
    shortDescription: "Limpe, recorte e redimensione a sua assinatura.",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG para PDF até 100 KB",
    shortDescription: "PDF de uma página até 100 KB para formulários.",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG para PDF até 200 KB",
    shortDescription: "Certificados e documentos num PDF até 200 KB.",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG para PDF até 300 KB",
    shortDescription: "PDFs de várias páginas até 300 KB.",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG para PDF até 500 KB",
    shortDescription: "Documentos longos num PDF até 500 KB.",
  },
  "convert-to-png": {
    name: "Converter para PNG",
    shortDescription: "JPG, WEBP, GIF e BMP → PNG.",
  },
  "convert-to-webp": {
    name: "Converter para WEBP",
    shortDescription: "JPG, PNG, GIF e BMP → WEBP.",
  },
  "svg-to-png": {
    name: "SVG para PNG",
    shortDescription: "Vetores SVG em PNG nítido, em qualquer tamanho.",
  },
  "png-to-ico": {
    name: "PNG para ICO",
    shortDescription: "Crie favicons .ico e ícones do Windows.",
  },
  "youtube-thumbnail-resizer": {
    name: "Redimensionar Thumbnail do YouTube",
    shortDescription: "Qualquer imagem no tamanho de thumbnail: 1280 × 720.",
  },
  "whatsapp-dp-resizer": {
    name: "Foto de Perfil do WhatsApp",
    shortDescription: "A foto inteira num perfil quadrado, sem cortar.",
  },
  "linkedin-banner-resizer": {
    name: "Redimensionar Capa do LinkedIn",
    shortDescription: "Qualquer imagem como capa do LinkedIn: 1584 × 396.",
  },
  "facebook-cover-resizer": {
    name: "Redimensionar Capa do Facebook",
    shortDescription: "Qualquer imagem como capa do Facebook: 851 × 315.",
  },
  "discord-banner-resizer": {
    name: "Redimensionar Banner do Discord",
    shortDescription: "Banners de perfil e de servidor do Discord.",
  },
  "dpi-converter": {
    name: "Alterar DPI da Imagem",
    shortDescription: "Mude o DPI para 300, 200 ou outro valor, sem perder qualidade.",
  },
  "dpi-checker": {
    name: "Verificar DPI da Imagem",
    shortDescription: "Veja o DPI de uma imagem e o tamanho de impressão.",
  },
  "resize-image-in-cm": {
    name: "Redimensionar Imagem em cm",
    shortDescription: "Redimensione para um tamanho exato em cm, mm ou polegadas.",
  },
  "video-to-gif": {
    name: "Vídeo para GIF",
    shortDescription: "Transforme um trecho de vídeo MP4, WEBM ou MOV em GIF.",
  },
  "gif-compressor": {
    name: "Comprimir GIF",
    shortDescription: "Deixe GIFs animados menores sem perder quadros.",
  },
  "gif-resizer": {
    name: "Redimensionar GIF",
    shortDescription: "Redimensione GIFs animados mantendo todos os quadros.",
  },
  "gif-to-mp4": {
    name: "GIF para MP4",
    shortDescription: "Transforme GIFs em vídeos MP4 leves.",
  },
  "webp-to-gif": {
    name: "WEBP para GIF",
    shortDescription: "Converta WEBP animado em GIF.",
  },
  "gif-cropper": {
    name: "Recortar GIF",
    shortDescription: "Recorte GIFs animados mantendo todos os quadros.",
  },
  "rotate-gif": {
    name: "Girar GIF",
    shortDescription: "Gire ou espelhe GIFs animados em 90° ou 180°.",
  },
  "reverse-gif": {
    name: "Inverter GIF",
    shortDescription: "Faça um GIF tocar de trás para frente ou em bumerangue.",
  },
  "gif-speed-changer": {
    name: "Alterar velocidade do GIF",
    shortDescription: "Acelere ou desacelere GIFs animados.",
  },
  "gif-cutter": {
    name: "Cortar GIF",
    shortDescription: "Corte GIFs e fique só com os quadros que quiser.",
  },
  "gif-to-webp": {
    name: "GIF para WEBP",
    shortDescription: "Converta GIFs animados em WEBP animado.",
  },
  "gif-to-apng": {
    name: "GIF para APNG",
    shortDescription: "Converta GIFs animados em PNG animado (APNG).",
  },
  "gif-to-sprite-sheet": {
    name: "GIF para sprite sheet",
    shortDescription: "Coloque todos os quadros do GIF numa folha de sprites PNG.",
  },
  "gif-merger": {
    name: "Juntar GIFs",
    shortDescription: "Junte vários GIFs em um só, um depois do outro.",
  },
  "add-text-to-gif": {
    name: "Colocar texto em GIF",
    shortDescription: "Coloque legendas em GIFs animados, em todos os quadros ou em alguns.",
  },
  "typing-text-gif": {
    name: "GIF de texto digitando",
    shortDescription: "Crie um GIF de texto se digitando sozinho, letra por letra.",
  },
  "invert-image": {
    name: "Inverter cores da imagem",
    shortDescription: "Inverta as cores de fotos — negativo ou inversão inteligente.",
  },
  "pixelate-image": {
    name: "Pixelar imagem",
    shortDescription: "Transforme fotos em blocos de pixels.",
  },
  "image-brightness": {
    name: "Brilho e contraste",
    shortDescription: "Clareie, escureça e ajuste contraste e cor de fotos.",
  },
  "glitch-effect": {
    name: "Efeito glitch",
    shortDescription: "Dê às fotos um visual de tela com defeito.",
  },
  "round-corners": {
    name: "Arredondar cantos",
    shortDescription: "Deixe os cantos das imagens arredondados, com bordas transparentes.",
  },

  // ── Variantes: melhorar, espelhar, fundo (expansion.md) ──
  "image-to-hd": {
    name: "Converter imagem em HD",
    shortDescription: "Transforme uma foto pequena ou em baixa resolução em HD.",
  },
  "unblur-image": {
    name: "Tirar desfoque da foto",
    shortDescription: "Deixe nítidas fotos levemente borradas com IA.",
  },
  "flip-image": {
    name: "Espelhar imagem",
    shortDescription: "Espelhe fotos na horizontal ou na vertical.",
  },
  "change-background-color": {
    name: "Trocar fundo da foto",
    shortDescription: "Fundo branco, azul ou vermelho para qualquer foto.",
  },
  "blur-background": {
    name: "Desfocar fundo",
    shortDescription: "Efeito retrato atrás de qualquer pessoa ou objeto.",
  },
  "passport-photo-maker": {
    name: "Foto para documento",
    shortDescription: "Fotos 3x4, de passaporte e visto, com folha para imprimir.",
  },
  "3x4-photo": {
    name: "Foto 3x4 online",
    shortDescription: "Foto 3 × 4 cm enquadrada e pronta para imprimir.",
  },
  "2x2-photo": {
    name: "Foto 2x2 (visto americano)",
    shortDescription: "Foto de 2 × 2 polegadas para passaporte e visto dos EUA.",
  },
};

/**
 * Category labels. `title` is the home-page section heading, `navLabel` the
 * short pill / breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const ptCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "Otimizar e comprimir", navLabel: "Otimizar" },
  convert: { title: "Converter imagens", navLabel: "Converter" },
  edit: { title: "Editar e criar", navLabel: "Editar e criar" },
  ai: { title: "Ferramentas de IA", navLabel: "IA de imagem" },
};
