import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/gif-para-png.
 *
 * Head term "GIF para PNG"; "gif transparente", "converter gif em imagem" and
 * "tirar frame do gif" live in aliases.ts. The cross-reference to
 * /pt/gif-para-imagens matters — half this traffic wants every frame, not one.
 */
const copy: LocalizedPairCopy = {
  name: "GIF para PNG",
  seoTitle: "Converter GIF para PNG online grátis | oMyImage",
  seoDescription:
    "Converta GIF para PNG online e grátis: saída sem perdas, transparência preservada e conversão em lote, direto no seu navegador. Sem cadastro.",
  unique: {
    intro:
      "Converter um GIF para PNG tira a imagem da paleta de 256 cores e a coloca em cor completa, e dá transparência com bordas suaves em vez da versão liga-desliga do GIF. A saída é sem perdas, então ela vira um arquivo de trabalho de verdade, que você pode editar e salvar de novo sem degradar. GIFs animados são convertidos no primeiro quadro, já que o PNG guarda uma imagem só.",
    whyConvert:
      "O motivo de sempre é edição. O limite de paleta do GIF significa que toda imagem é reduzida a no máximo 256 cores distintas, e a transparência dele é de um bit — um pixel está totalmente opaco ou totalmente invisível, sem nada no meio. Isso produz aquela franja serrilhada característica que aparece quando um logotipo em GIF é colocado sobre um fundo para o qual ele não foi preparado. O PNG não tem nenhuma dessas restrições: cor completa de 24 bits mais um canal alfa de 8 bits, então as bordas podem ser realmente suaves. Converter não vai inventar as cores que o GIF já descartou, mas interrompe qualquer perda a mais e entrega um arquivo que você consegue compor direito. O outro motivo comum é simples modernização — trocar arquivos GIF antigos de um projeto ou de um sistema de design por algo que se comporte de forma previsível.",
    notes: [
      {
        heading: "Converter não devolve a cor perdida",
        body:
          "Essa é a expectativa que vale deixar clara. Se uma foto foi salva como GIF, ela foi reduzida a 256 cores naquele momento, e as faixas e o pontilhado viraram parte da imagem. Converter para PNG preserva fielmente essa aparência num contêiner melhor; não tem como reconstruir os degradês que foram jogados fora. Se você tem acesso ao original de antes de virar GIF, converta esse.",
      },
      {
        heading: "A transparência melhora, não só se mantém",
        body:
          "A transparência do GIF é binária, então bordas suavizadas foram pré-misturadas com o fundo que o designer imaginou. Esses pixels passam para o PNG como estão — o halo não some sozinho. O que você ganha é folga: o PNG guarda transparência parcial, então, uma vez em PNG, dá para limpar a borda num editor, o que nunca foi possível enquanto o arquivo continuava GIF.",
      },
      {
        heading: "A animação não sobrevive",
        body:
          "O PNG é um formato de imagem única, então um GIF animado é convertido apenas no primeiro quadro. Se você quer cada quadro como um arquivo separado, use a ferramenta GIF para imagens — ela extrai a sequência inteira. Se quer manter a animação, mantenha o GIF.",
      },
    ],
    faqs: [
      { q: "O que acontece com um GIF animado?", a: "Você recebe o primeiro quadro como um PNG estático. O PNG não guarda animação. Para tirar todos os quadros, cada um como um arquivo, use a ferramenta GIF para imagens; para manter a animação, mantenha o GIF." },
      { q: "O PNG vai ficar melhor que o GIF?", a: "Vai ficar igual. O PNG tira as restrições que estragaram a imagem, mas não desfaz o estrago já feito — a redução para 256 cores aconteceu quando o GIF foi criado e está gravada." },
      { q: "A conversão de GIF para PNG é sem perdas?", a: "É. O PNG guarda cada pixel exatamente como estava no GIF, então nada se perde nesta etapa." },
      { q: "A transparência passa junto?", a: "Passa. A cor transparente única do GIF vira pixels totalmente transparentes no PNG. Você também ganha a possibilidade de editar transparência suave depois, o que o GIF nunca aceitou." },
      { q: "O arquivo PNG vai ficar maior?", a: "Muitas vezes sim, às vezes bastante. A paleta do GIF é uma forma de compressão, e o PNG guarda a informação de cor completa. Em gráficos chapados simples os dois podem ficar próximos; em conteúdo fotográfico com pontilhado, o PNG costuma ser maior." },
    ],
  },
};

export default copy;
