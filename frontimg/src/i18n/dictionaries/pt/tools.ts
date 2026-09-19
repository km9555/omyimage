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
    shortDescription: "Gire 90°, 180°, 270° ou endireite automaticamente, em lote.",
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
