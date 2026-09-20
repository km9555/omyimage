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
  webp:
    "O WebP é o formato de imagem que o Google lançou em 2010, e ele é incomum por oferecer modos com e sem perdas mais transparência num mesmo contêiner. Na prática ele fica de 25% a 35% menor que um JPG de qualidade equivalente, e foi por isso que se espalhou rápido pela web depois que o Safari passou a aceitá-lo, em 2020. A fraqueza dele está fora do navegador: muitos programas de computador, celulares antigos e fluxos de impressão ainda não abrem um arquivo .webp.",
};
