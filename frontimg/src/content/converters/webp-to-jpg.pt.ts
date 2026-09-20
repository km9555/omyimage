import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/webp-para-jpg.
 *
 * Head term "WEBP para JPG" — "converter webp em jpg" and "webp para jpeg"
 * live in aliases.ts. The Brazilian angle on this page is the upload form
 * that refuses .webp: gov.br, concursos, marketplaces and gráficas.
 */
const copy: LocalizedPairCopy = {
  name: "WEBP para JPG",
  seoTitle: "Converter WEBP para JPG online grátis | oMyImage",
  seoDescription:
    "Converta WEBP para JPG online e grátis: converta em lote, ajuste a qualidade e escolha a cor de fundo das áreas transparentes. Sem cadastro, roda no navegador.",
  unique: {
    intro:
      "O WebP é excelente numa página da web e desajeitado em todo o resto. Converter para JPG entrega o único formato de imagem que nada recusa — clientes de e-mail, gráficas, porta-retratos digitais, celulares antigos, formulários de envio do governo. Você escolhe a qualidade e, se o WebP tiver áreas transparentes, escolhe também a cor que vai preenchê-las, porque o JPG não consegue mantê-las.",
    whyConvert:
      "Quase todo mundo que chega aqui bateu num muro, não fez uma escolha. Você clicou com o botão direito numa imagem, salvou, e o lugar onde ela precisa entrar não aceita um .webp. Essa lista é longa e teimosa: muitas gráficas, versões antigas do Office, formulários de produto de e-commerce, porta-retratos digitais, sistemas de concursos e uma montanha de software embarcado e industrial. O JPG é o menor denominador comum da imagem digital há três décadas, então converter costuma ser mais rápido do que brigar com o que está recusando o arquivo. O segundo motivo é o tamanho. Se o seu WebP por acaso for sem perdas — prints costumam ser —, ele pode até ser maior que um JPG da mesma imagem, e converter reduz bastante.",
    notes: [
      {
        heading: "A transparência tem de virar alguma coisa",
        body:
          "O JPG não tem canal alfa nenhum, então um fundo transparente não pode simplesmente passar para o outro lado. Alguma coisa precisa ser pintada embaixo, e o padrão em toda parte é o branco. Isso funciona bem numa página branca e salta aos olhos numa escura, e é por isso que esta ferramenta deixa você escolher a cor de preenchimento em vez de supor. Se a transparência importa de verdade, o JPG é o alvo errado — converta para PNG e mantenha.",
      },
      {
        heading: "Duas etapas com perdas em sequência",
        body:
          "Um WebP com perdas já descartou detalhe, e codificar em JPG descarta um pouco mais. Na prática isso raramente aparece em qualidades sensatas, mas é um efeito real e se acumula se você ficar convertendo de um lado para o outro. Converta uma vez, a partir da melhor origem que tiver, e guarde esse resultado. Se a imagem ainda vai ser editada, um PNG sem perdas é um intermediário melhor.",
      },
      {
        heading: "WebP animado dá um quadro só",
        body:
          "O JPG é um formato de imagem única, então um WebP animado é convertido no primeiro quadro. Não há como contornar isso dentro do próprio JPG. Se a animação é o ponto, converta para GIF.",
      },
    ],
    faqs: [
      { q: "Por que meu computador não abre um arquivo WEBP?", a: "Porque o WebP chegou em 2010 e os programas de computador demoraram a acompanhar. Versões mais antigas do Windows precisam de um codec da Microsoft Store, o Photoshop só ganhou suporte nativo na versão 23.2, e muitos aplicativos menores ainda não têm nenhum. Converter para JPG evita caçar solução para cada um." },
      { q: "O JPG vai ficar maior ou menor que o WEBP?", a: "Normalmente um pouco maior, se o WebP era com perdas, porque o WebP comprime de forma mais eficiente na mesma qualidade visual. Se o WebP era sem perdas — comum em prints e gráficos —, o JPG fica muito menor." },
      { q: "O que acontece com as áreas transparentes?", a: "Elas são preenchidas com uma cor sólida, já que o JPG não guarda transparência. O branco é o padrão e você pode mudar antes de converter. Para manter a transparência, converta para PNG." },
      { q: "Converter reduz a qualidade da imagem?", a: "Um pouco, porque o JPG é com perdas. Na qualidade padrão a diferença não aparece em tamanhos normais de visualização. Aumente o controle se estiver convertendo fotos detalhadas que pretende imprimir." },
      { q: "Posso converter muitos arquivos WEBP de uma vez?", a: "Pode. Solte o lote inteiro e eles são convertidos um depois do outro, e entregues em um único ZIP — em vez de você clicar em download um por um." },
      { q: "Serve para enviar foto no gov.br ou em site de concurso?", a: "Serve, e é um dos usos mais comuns. A maioria dos portais públicos e formulários de inscrição aceita só JPG, PNG ou PDF e recusa WebP. Converta aqui para JPG e, se houver limite de tamanho, passe antes pela ferramenta Comprimir imagem." },
    ],
  },
};

export default copy;
