import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/avif-para-jpg.
 *
 * Head term "AVIF para JPG"; "abrir avif", "avif não abre" and "converter
 * avif" live in aliases.ts — the intent is almost always a file that no
 * program on the person's computer will open.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF para JPG",
  seoTitle: "Converter AVIF para JPG online grátis | oMyImage",
  seoDescription:
    "Converta AVIF para JPG online e grátis: abra no seu computador aquelas imagens .avif que nenhum programa aceita. Em lote e sem enviar nada.",
  unique: {
    intro:
      "O AVIF é o formato de imagem mais eficiente em uso corrente e também o que os seus programas têm menos chance de abrir. Converter para JPG troca essa eficiência pela possibilidade de realmente usar o arquivo — em editores, em celulares mais antigos, numa gráfica, em qualquer coisa feita antes de mais ou menos 2021. Quem decodifica é o seu navegador, então nada é enviado.",
    whyConvert:
      "O AVIF se espalhou pelos sites muito mais rápido do que pelos programas de computador, e é essa distância que traz a maioria das pessoas até aqui. Você salvou uma imagem de um site moderno e agora o Photoshop, o Visualizador de Fotos do Windows, a galeria do seu celular ou um formulário de envio não quer saber do arquivo. Os navegadores são a exceção, não a regra: o Chrome decodifica AVIF desde a versão 85, o Firefox desde a 93 e o Safari desde a 16.4 — e é exatamente por isso que esta conversão pode acontecer localmente no seu navegador. O JPG vai no sentido contrário: é entendido por praticamente tudo, ao custo de arquivos maiores para a mesma qualidade visual. Se o arquivo é para seu próprio uso e o seu programa não lê AVIF, converter é muito mais simples do que caçar um codec.",
    notes: [
      {
        heading: "O arquivo vai ficar maior",
        body:
          "Essa é a troca esperada e vale deixar clara. O AVIF muitas vezes chega à metade do tamanho de um JPG na mesma qualidade, então ir no sentido contrário mais ou menos dobra. Você está comprando compatibilidade com bytes. Se o tamanho importa de verdade no destino, mantenha a qualidade em torno de 0,85 em vez de ir ao máximo — a diferença é difícil de ver e a economia é relevante.",
      },
      {
        heading: "Transparência e HDR não sobrevivem",
        body:
          "O AVIF aceita canal alfa e alta faixa dinâmica; o JPG não aceita nenhum dos dois. As áreas transparentes são preenchidas com uma cor de fundo que você escolhe. Imagens HDR são convertidas para a faixa padrão pelo navegador durante a decodificação, o que, numa foto clara e de alto contraste, pode achatar visivelmente as altas luzes. Se algum dos dois importa, converta para PNG — ele mantém a transparência, embora também não guarde HDR.",
      },
      {
        heading: "Por que o navegador abre e os seus programas não",
        body:
          "O AVIF embrulha o codec de vídeo AV1, que os fabricantes de navegador adotaram cedo e com força por ser livre de royalties e bom para streaming de vídeo. Os programas de imagem de computador demoraram mais, já que isso significa integrar um codec de vídeo inteiro para exibir uma imagem parada. Essa é a explicação completa daquela situação estranha em que a página mostra a imagem normalmente e dar dois cliques no arquivo salvo não faz nada.",
      },
    ],
    faqs: [
      { q: "Por que meu computador não abre arquivos AVIF?", a: "O suporte a AVIF chegou aos navegadores anos antes de chegar aos programas de computador. O Windows precisa da extensão de vídeo AV1 da Microsoft Store, e muitos editores de imagem ainda não têm suporte nenhum. Converter contorna a questão." },
      { q: "O JPG vai ser maior que o AVIF?", a: "Vai, normalmente com mais ou menos o dobro do tamanho em qualidade comparável. O AVIF é bem mais eficiente; o JPG é bem mais compatível. Essa é a troca que você está fazendo." },
      { q: "Converter perde qualidade?", a: "Um pouco, já que os dois formatos são com perdas e a imagem está sendo recodificada. Em qualidade 0,85 ou acima é muito difícil de ver. Converta a partir do AVIF original, e não de uma cópia que já passou por outra conversão." },
      { q: "O que acontece com a transparência de um AVIF?", a: "Ela é preenchida com uma cor sólida, porque o JPG não tem canal alfa. Escolha a cor de preenchimento antes de converter, ou converta para PNG para manter a transparência." },
      { q: "Minha imagem é enviada para converter?", a: "Não. O seu navegador já sabe decodificar AVIF, e é isso que torna a conversão local possível. A imagem é processada na sua aba e nunca é mandada para lugar nenhum." },
    ],
  },
};

export default copy;
