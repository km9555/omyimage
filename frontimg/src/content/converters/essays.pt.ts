import type { FormatId } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) "what is this format" essays.
 *
 * Each converter page composes the essays for BOTH of its formats, so these
 * carry real weight: they are what keeps two pages sharing a source format
 * from reading as the same page twice (see formats.ts). Only the formats a
 * shipped pt pair actually uses are here; anything missing falls back to the
 * English essay through `formatEssay()`.
 */
export const PT_ESSAYS: Partial<Record<FormatId, string>> = {
  jpg:
    "O JPG (também escrito JPEG) é o formato padrão das fotos desde 1992. Ele usa compressão com perdas ajustada ao funcionamento da visão humana — descartando detalhes finos de cor que o olho quase não registra —, e é por isso que uma foto salva em JPG pode ter um décimo do tamanho da mesma imagem em PNG. Em troca, ele não tem canal de transparência e cada novo salvamento degrada um pouco a imagem, então ele serve para fotos finalizadas, e não para arquivos de trabalho.",
  png:
    "O PNG é um formato sem perdas criado em 1996 como substituto livre de patentes para o GIF. Nada é descartado na compressão, então a imagem pode ser aberta e salva de novo indefinidamente sem perder qualidade, e ele carrega um canal alfa completo para transparências com bordas suaves. Essa fidelidade custa espaço: uma foto guardada em PNG costuma ser várias vezes maior do que a mesma foto em JPG, e é por isso que o PNG é a escolha certa para prints, logotipos e desenhos de linha, e não para o que sai da câmera.",
  jfif:
    "O JFIF não é bem um formato separado — a sigla quer dizer JPEG File Interchange Format, e ele é o contêiner em que a imensa maioria dos arquivos que você já chama de JPG está guardada. A confusão é puramente sobre a extensão do arquivo. Certas configurações de Windows e Chrome salvam as imagens baixadas como .jfif em vez de .jpg e, embora os bytes sejam um JPEG perfeitamente comum, um número surpreendente de programas se recusa a abrir só porque não reconhece a extensão.",
  gif:
    "O GIF é de 1987 e está limitado a uma paleta de 256 cores por quadro, e é por isso que fotos guardadas em GIF mostram faixas e pontilhado visíveis. Ele sobrevive por dois motivos: anima e é entendido por praticamente todo programa já escrito. A transparência dele é binária — um pixel está totalmente visível ou totalmente invisível —, então ele não consegue as bordas suaves que o PNG faz.",
  bmp:
    "O BMP é o bitmap original do Windows, da Microsoft, e costuma ser guardado sem compressão nenhuma — cada pixel escrito por inteiro. Uma foto de 12 megapixels em BMP de 24 bits ocupa uns 36 MB, contra mais ou menos 3 MB em JPG. Ele ainda aparece em utilitários do Windows, drivers antigos de scanner, equipamentos médicos e industriais e alguns sistemas embarcados, e é por isso que converter para fora dele é uma necessidade comum, mesmo que quase ninguém o escolha de propósito.",
  avif:
    "O AVIF embrulha o codec de vídeo AV1, livre de royalties, num formato de imagem estática, e comprime mais do que qualquer outro em uso corrente — muitas vezes metade do tamanho de um JPG com a mesma qualidade, ainda por cima com transparência e alta faixa dinâmica. Os navegadores decodificam bem (Chrome desde a versão 85, Firefox desde a 93, Safari desde a 16.4), mas o suporte rareia rápido fora deles: muitos editores de imagem, sistemas operacionais mais antigos e quase todos os fluxos de impressão ainda não abrem um arquivo desses.",
  webp:
    "O WebP é o formato de imagem que o Google lançou em 2010, e ele é incomum por oferecer modos com e sem perdas mais transparência num mesmo contêiner. Na prática ele fica de 25% a 35% menor que um JPG de qualidade equivalente, e foi por isso que se espalhou rápido pela web depois que o Safari passou a aceitá-lo, em 2020. A fraqueza dele está fora do navegador: muitos programas de computador, celulares antigos e fluxos de impressão ainda não abrem um arquivo .webp.",
};
