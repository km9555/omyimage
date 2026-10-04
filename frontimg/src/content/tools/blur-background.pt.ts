import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/desfocar-fundo (variant of remove-background: the
 * cut-out over a blurred copy of the original, composited in the browser).
 * Brazil 2026-10-04: "desfocar fundo da foto" 2,900/mo, "desfocar fundo" 2,400.
 */
const content: ToolPageContent = {
  toolId: "blur-background",
  locale: "pt",
  name: "Desfocar fundo",
  tagline:
    "Desfoque o fundo de qualquer foto e mantenha a pessoa ou o produto nítidos — o efeito do modo retrato, aplicado depois. A IA encontra o assunto; você escolhe a intensidade. Grátis e sem marca d'água.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Desfocar Fundo da Foto Online — Efeito Modo Retrato, Grátis | oMyImage",
  metaDescription:
    "Desfoque o fundo de qualquer foto online com IA: a pessoa ou o produto continua nítido e o resto fica suave. Intensidade ajustável, grátis e sem marca d'água.",

  intro:
    "Um fundo desfocado é o que faz o modo retrato do celular parecer foto de câmera profissional: o assunto se destaca, e uma sala bagunçada, uma multidão ou uma rua movimentada viram manchas suaves de cor. Esta ferramenta adiciona esse efeito a uma foto que você já tirou. Um modelo de IA encontra a pessoa, o pet ou o produto, mantém tudo exatamente como estava e desfoca o que está atrás na medida que você escolher. Ajustar a intensidade depois é instantâneo, então dá para achar o ponto certo no olho.",

  sections: [
    {
      heading: "Como funciona",
      id: "how",
      body: [
        "Primeiro, um modelo de segmentação no nosso servidor contorna o assunto e devolve um recorte. Depois, o seu navegador pega a foto original, desfoca e coloca o recorte nítido por cima, exatamente na mesma posição.",
        "Como o desfoque é aplicado no seu aparelho, mexer no controle de intensidade não envia nada ao servidor de novo — o assunto é encontrado uma vez, e você testa desfoque leve, médio e forte sem gastar outra execução de IA.",
      ],
    },
    {
      heading: "Quanto desfoque parece natural",
      id: "strength",
      body: [
        "Uma câmera de verdade desfoca mais o que está mais longe do assunto. Um desfoque leve combina com um retrato tirado perto de uma parede; um desfoque forte combina com alguém na frente de uma paisagem distante ou de uma rua. Se o desfoque for muito mais forte do que a profundidade da cena sugere, a foto começa a parecer um recorte colado sobre uma pintura.",
        "Comece pelo meio do controle e compare com a visão de antes e depois. Em fotos de produto para loja virtual, um desfoque mais forte costuma funcionar bem, porque a ideia é tirar a distração, não imitar uma lente.",
      ],
    },
    {
      heading: "Desfocar o fundo ou desfocar parte da imagem?",
      id: "vs-blur-image",
      body: [
        "Esta página mantém o assunto principal nítido e suaviza todo o resto automaticamente. Se, em vez disso, você precisa esconder algo específico — uma placa de carro, um rosto na multidão, uma tela com informações pessoais —, use Desfocar imagem ou Desfocar rosto, que desfocam só as áreas que você marcar.",
      ],
    },
    {
      heading: "Fotos que funcionam melhor",
      id: "best",
      body: [
        "Um assunto principal claro, com algum espaço em volta: uma pessoa da cintura para cima, um pet, um carro, um produto sobre a mesa. Fotos de grupo bagunçadas, em que não fica claro quem é o assunto, e detalhes finos como raios de bicicleta ou cabelo solto contra um fundo de cor parecida são mais difíceis para o modelo, e as bordas podem aparecer.",
      ],
    },
    {
      heading: "Fundo desfocado em fotos de produto e anúncio",
      id: "products",
      body: [
        "Marketplaces e sites de classificados estão cheios de fotos tiradas na mesa da cozinha ou no chão do quarto. Desfocar o fundo mantém o ambiente real — em que o comprador muitas vezes confia mais do que num fundo branco colado — e puxa a atenção para o item.",
        "Fotografe o produto um pouco de cima, com alguma distância entre ele e a parede de trás, e use um desfoque mais forte do que usaria num retrato. Se a plataforma exigir fundo branco liso, use Trocar fundo da foto.",
      ],
    },
  ],

  howToTitle: "Como desfocar o fundo de uma foto",
  steps: [
    { title: "Envie a foto", description: "Selecione um JPG, PNG ou WEBP com uma pessoa, um pet ou um objeto bem definido." },
    { title: "Desfoque o fundo", description: "Clique em Desfocar fundo — a IA encontra o assunto em poucos segundos." },
    { title: "Ajuste e baixe", description: "Arraste o controle de intensidade até ficar bom, compare com o original e baixe." },
  ],

  features: [
    { icon: "lens_blur", title: "Efeito modo retrato", description: "O assunto fica exatamente como estava enquanto tudo atrás dele fica suave." },
    { icon: "tune", title: "Intensidade ajustável", description: "De uma suavização leve a um desfoque forte, mudando na hora no seu navegador." },
    { icon: "verified_user", title: "Sem marca d'água", description: "Grátis, sem nada carimbado na sua foto." },
  ],

  faqs: [
    { q: "Como desfocar o fundo de uma foto?", a: "Envie a foto e clique em Desfocar fundo. Quando a IA encontrar o assunto, arraste o controle de intensidade até o ponto que você quer e baixe o resultado." },
    { q: "A pessoa continua totalmente nítida?", a: "Sim — o assunto vem da sua foto original, sem alteração. Só o fundo é desfocado." },
    { q: "Mudar a intensidade gasta outra execução de IA?", a: "Não. O assunto é encontrado uma vez no nosso servidor; o desfoque em si é aplicado no seu navegador, então dá para ajustar quantas vezes quiser." },
    { q: "Dá para desfocar o fundo de uma foto de produto?", a: "Dá. Um produto sobre a mesa ou numa prateleira funciona bem, e um desfoque mais forte é um jeito rápido de tirar um cenário bagunçado de uma foto de anúncio." },
    { q: "Qual a diferença para Desfocar imagem?", a: "Desfocar imagem desfoca as áreas que você escolhe. Esta ferramenta escolhe por você: mantém o assunto principal nítido e desfoca todo o resto." },
    { q: "Em que formato vem o resultado?", a: "Em JPG, do mesmo tamanho do recorte que a IA devolve. Ele é feito para compartilhar, postar ou imprimir, então não tem transparência." },
    { q: "Minha foto fica guardada?", a: "Só por pouco tempo. O assunto é encontrado no nosso servidor, o resultado fica atrás de um link privado e é apagado automaticamente em até uma hora, e o desfoque é aplicado no seu aparelho." },
  ],

  security:
    "A detecção do assunto roda no nosso servidor com o motor de código aberto rembg; os resultados ficam só por pouco tempo atrás de um link privado e são apagados automaticamente em até uma hora. O desfoque é aplicado no seu navegador, e nada é compartilhado nem reutilizado.",
};

export default content;
