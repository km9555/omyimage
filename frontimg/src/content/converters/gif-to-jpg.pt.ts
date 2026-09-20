import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/gif-para-jpg.
 *
 * Head term "GIF para JPG"; "gif para jpeg" and "transformar gif em foto"
 * live in aliases.ts.
 */
const copy: LocalizedPairCopy = {
  name: "GIF para JPG",
  seoTitle: "Converter GIF para JPG online grátis | oMyImage",
  seoDescription:
    "Converta GIF para JPG online e grátis: arquivo pequeno e aceito em qualquer lugar, com escolha da cor de fundo e conversão em lote. Sem cadastro.",
  unique: {
    intro:
      "Transformar um GIF em JPG entrega um arquivo de foto pequeno e aceito em toda parte. É o movimento certo quando você precisa anexar, enviar ou imprimir uma imagem parada e o GIF é grande demais ou simplesmente não é aceito. As áreas transparentes são preenchidas com uma cor que você escolhe, e GIFs animados são convertidos no primeiro quadro.",
    whyConvert:
      "Duas situações trazem as pessoas até aqui. A primeira é um envio que não aceita GIF — muitos formulários aceitam só JPG e PNG, principalmente quando esperam uma foto, como o envio de um documento, um anúncio em marketplace ou um serviço de impressão. A segunda é o tamanho: um GIF animado longo pode chegar a vários megabytes e, se tudo o que você precisa é de um quadro representativo, um JPG desse quadro tem uma fração do peso. O JPG também é o destino certo quando o conteúdo é fotográfico, porque a compressão dele foi feita para imagens de tom contínuo de um jeito que a paleta do GIF nunca foi. O que o JPG não faz é transparência nem animação, então ele é a escolha errada se alguma das duas importa para você.",
    notes: [
      {
        heading: "Pixels transparentes precisam de um fundo",
        body:
          "O JPG não tem canal alfa, então qualquer área transparente do GIF precisa ser preenchida com algo sólido. O branco é o padrão e normalmente a resposta certa, mas, se a imagem vai ficar sobre uma página colorida, você pode escolher essa cor aqui e evitar uma caixa branca evidente. Como a transparência do GIF tem borda dura, o limite pode parecer meio serrilhado depois do preenchimento — essa borda veio do GIF, e não da conversão.",
      },
      {
        heading: "Os defeitos da paleta continuam visíveis",
        body:
          "Um GIF já foi reduzido a 256 cores, muitas vezes com pontilhado — aquele padrão de ruído usado para imitar tons intermediários. A compressão JPG não remove esse padrão e pode até torná-lo um pouco mais perceptível, porque o codificador trata os pontos do pontilhado como detalhe real, digno de ser preservado. Manter a qualidade razoavelmente alta evita agravar o problema.",
      },
      {
        heading: "Só o primeiro quadro",
        body:
          "O JPG guarda exatamente uma imagem, então um GIF animado é convertido no quadro de abertura. Não há ajuste que mude isso. Se você precisa de um quadro específico, e não do primeiro, extraia os quadros antes com a ferramenta GIF para imagens e depois converta o que você quer.",
      },
    ],
    faqs: [
      { q: "Qual quadro de um GIF animado eu recebo?", a: "O primeiro. O JPG não guarda animação, então só o quadro de abertura é convertido. Use GIF para imagens se precisar de outro quadro ou de todos." },
      { q: "O que acontece com a transparência?", a: "Ela é preenchida com uma cor sólida, porque o JPG não aceita transparência. O branco é o padrão e você pode escolher outra cor antes de converter." },
      { q: "O JPG vai ser menor que o GIF?", a: "Quase sempre, e de forma dramática em GIFs animados, já que você fica com um quadro em vez de centenas. Num GIF simples de quadro único e poucas cores a diferença é menor, e de vez em quando se inverte." },
      { q: "Converto para JPG ou para PNG?", a: "JPG se você quer um arquivo pequeno e o conteúdo é fotográfico. PNG se precisa manter a transparência ou uma qualidade sem perdas para continuar editando." },
      { q: "A imagem vai ficar pior?", a: "Um pouco, já que o JPG é com perdas — mas, na qualidade padrão, a mudança é difícil de ver. O padrão de pontilhado do GIF original é o defeito mais perceptível, e ele já estava lá antes da conversão." },
    ],
  },
};

export default copy;
