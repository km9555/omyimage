import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/bmp-para-jpg.
 *
 * Head term "BMP para JPG"; "bitmap para jpg" and "diminuir arquivo bmp" live
 * in aliases.ts. This pair has serverFallback:false, so the copy says the
 * conversion always runs locally — and the generated privacy note agrees,
 * because it is built from the same engine data (conversion.md §6.4).
 */
const copy: LocalizedPairCopy = {
  name: "BMP para JPG",
  seoTitle: "Converter BMP para JPG online grátis | oMyImage",
  seoDescription:
    "Converta BMP para JPG online e grátis: reduza bitmaps enormes em até 97% com controle de qualidade e conversão em lote, tudo no seu navegador.",
  unique: {
    intro:
      "Arquivos BMP são enormes porque quase não têm compressão — um bitmap de 12 megapixels ocupa uns 36 MB, enquanto a mesma foto em JPG fica perto de 3 MB. Converter é o jeito mais rápido de tornar esses arquivos utilizáveis: anexáveis, enviáveis e abríveis em algo que não seja o Windows. Você controla a qualidade, e os lotes voltam em um ZIP.",
    whyConvert:
      "O BMP guarda cada pixel por inteiro, sem compressão digna do nome, e é por isso que os arquivos são de um tamanho tão assustador. Esse é um projeto deliberado de uma época em que a velocidade de decodificação importava mais que o espaço em disco, e ele sobrevive hoje principalmente em utilitários do Windows, drivers antigos de scanner e câmera, ferramentas de captura de tela e equipamentos industriais ou médicos especificados décadas atrás. No momento em que você precisa mandar um por e-mail, colocar num site ou entregar a quase qualquer aplicativo moderno, o tamanho vira o problema. Converter para JPG costuma cortar 90% ou mais sem diferença visível numa qualidade sensata. Também resolve uma questão de compatibilidade que pega muita gente: embora o BMP seja trivialmente legível no Windows, o suporte no macOS, no iOS e no Android é mais irregular do que você esperaria de um formato tão antigo.",
    notes: [
      {
        heading: "Espere uma redução de tamanho enorme",
        body:
          "Uma redução de 90% a 97% é normal, e não é sinal de que algo deu errado. Você está saindo de um formato que guarda cada pixel literalmente para um que modela o que a visão humana de fato percebe. Se você precisa da redução sem perda nenhuma, converta para PNG — ainda é uma grande economia sobre o BMP, normalmente de 40% a 70%, e sem perdas.",
      },
      {
        heading: "Esta conversão sempre roda no seu aparelho",
        body:
          "A maioria das ferramentas daqui entrega arquivos muito grandes a um servidor para processar, mas o BMP é deliberadamente excluído disso: a biblioteca de imagem do servidor não tem decodificador de BMP, então um bitmap enviado falharia em vez de converter. Seu navegador lida muito bem com BMP, então as conversões de BMP ficam na sua máquina por maior que seja o arquivo. Dado o tamanho dos bitmaps, esse também é o caminho mais rápido — não há envio para esperar.",
      },
      {
        heading: "Transparência e profundidade de cor",
        body:
          "A maioria dos arquivos BMP em circulação é de 24 bits e sem transparência, então normalmente não há nada para achatar. Alguns BMPs de 32 bits carregam um canal alfa; como o JPG não guarda um, qualquer área transparente é preenchida com a cor de fundo que você escolher. Bitmaps bem antigos, de 8 ou 1 bit, convertem sem problema, embora uma digitalização em preto e branco de 1 bit costume ficar melhor em PNG, que lida com monocromático de borda dura de forma mais eficiente que o JPG.",
      },
    ],
    faqs: [
      { q: "Por que arquivos BMP são tão grandes?", a: "Porque eles são guardados praticamente sem compressão — cada pixel escrito por inteiro. Um BMP de 24 bits com 12 megapixels tem uns 36 MB. O JPG comprime a mesma imagem para mais ou menos um décimo disso, ou menos." },
      { q: "Quanto menor vai ficar o JPG?", a: "Normalmente de 90% a 97% menor. Um bitmap de 36 MB costuma cair para algo entre 1 e 4 MB, dependendo da qualidade escolhida e de quanto detalhe a imagem tem." },
      { q: "Vou perder qualidade convertendo BMP para JPG?", a: "Um pouco, porque o JPG é com perdas. No ajuste padrão isso não aparece em tamanhos normais de visualização. Se você não pode ter perda nenhuma, converta para PNG — ainda fica muito menor que o BMP." },
      { q: "Posso converter arquivos BMP muito grandes?", a: "Pode. A conversão de BMP sempre roda no seu navegador, e não num servidor, porque a biblioteca do servidor não lê BMP. Arquivos muito grandes só demoram um pouco mais para processar." },
      { q: "Arquivos BMP aceitam transparência?", a: "BMPs de 24 bits, que são o caso comum, não. Alguns BMPs de 32 bits carregam um canal alfa; como o JPG não guarda transparência, essas áreas são preenchidas com a cor de fundo que você selecionar." },
      { q: "Converto BMP para JPG ou para PNG?", a: "JPG para fotos e para o menor arquivo possível. PNG quando você precisa de qualidade sem perdas, quando a imagem é um print ou um desenho de linha, ou quando quer manter um canal alfa." },
    ],
  },
};

export default copy;
