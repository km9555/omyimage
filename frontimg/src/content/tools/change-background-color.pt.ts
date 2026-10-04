import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/trocar-fundo-da-foto (variant of remove-background
 * with a colour composited in the browser). Brazil 2026-10-04: "fundo branco
 * foto" 8,100/mo (KD 0), "foto 3x4 fundo branco" 260; the 3x4 document photo
 * on a white background is the Brazilian use.
 */
const content: ToolPageContent = {
  toolId: "change-background-color",
  locale: "pt",
  name: "Trocar fundo da foto",
  tagline:
    "Troque o fundo de uma foto por branco, azul, vermelho ou qualquer cor que quiser. A IA recorta a pessoa ou o objeto e você testa as cores na hora — feito para foto 3x4, documentos e perfil.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Trocar Fundo da Foto Online — Fundo Branco, Azul ou Vermelho | oMyImage",
  metaDescription:
    "Troque o fundo da foto por branco, azul, vermelho ou qualquer cor online com IA — ideal para foto 3x4 e de documento. Um envio e você testa todas as cores de graça.",

  intro:
    "Formulários e órgãos que emitem documentos são exigentes com uma coisa acima de todas: o fundo. Uns pedem branco liso, outros azul-claro, e uma foto tirada na frente da parede da cozinha é recusada. Esta ferramenta recorta a pessoa (ou um produto) com um modelo de IA e a coloca sobre uma cor sólida à sua escolha, então uma foto tirada em casa vira uma foto 3x4 ou de perfil que dá para usar. O recorte acontece uma vez; trocar entre branco, azul, vermelho ou qualquer outra cor depois disso é instantâneo e grátis.",

  sections: [
    {
      heading: "Que cor de fundo os documentos pedem?",
      id: "colours",
      body: [
        "Branco ou cinza bem claro é a exigência mais comum para foto de documento e de passaporte no mundo, e é o padrão da foto 3x4 no Brasil: carteirinhas, crachás, matrículas, inscrições em concursos. Azul-claro aparece em algumas carteiras de identidade estudantil e crachás de empresa, e fundos vermelho ou azul são padrão em fotos de documento de outros países, como a Indonésia.",
        "Siga sempre a instrução exata do seu documento — a ferramenta dá a cor; ela não tem como saber qual o seu órgão quer. As quatro cores de documento no topo das configurações são um ponto de partida, e qualquer outra cor pode ser escolhida logo abaixo.",
      ],
    },
    {
      heading: "Como o fundo é trocado",
      id: "how",
      body: [
        "Primeiro, um modelo de IA de segmentação no nosso servidor encontra o assunto — a pessoa, com cabelo e ombros, ou o produto — e devolve um recorte com o entorno transparente. Depois, o seu navegador coloca esse recorte sobre a cor escolhida e salva um JPG.",
        "Como o segundo passo acontece no seu aparelho, trocar a cor não roda a IA de novo: dá para comparar branco, azul e vermelho em poucos segundos, e só o primeiro passo conta como uma execução de IA.",
      ],
    },
    {
      heading: "Como ter um contorno limpo no cabelo",
      id: "edges",
      body: [
        "Cabelo é a parte mais difícil de qualquer recorte. Fotografe a pessoa contra um fundo que contraste com o cabelo — parede clara atrás de cabelo escuro, ou o contrário — e evite luz de janela por trás, que faz a borda do cabelo brilhar.",
        "Garanta que os ombros e o alto da cabeça apareçam inteiros na foto, com um pouco de espaço em volta. Um recorte não reconstrói a parte da cabeça que o enquadramento original cortou, e as regras de foto de documento costumam exigir um espaço acima da cabeça de qualquer forma.",
      ],
    },
    {
      heading: "Depois do fundo",
      id: "next",
      body: [
        "Foto de documento costuma ter regra de tamanho também. Com o fundo certo, recorte na proporção 3x4 com Recortar imagem e, se o formulário limitar o tamanho do arquivo, deixe-o abaixo do limite em uma das páginas de compressão em KB — inscrições costumam pedir menos de 50 KB, 100 KB ou 200 KB.",
      ],
    },
  ],

  howToTitle: "Como trocar a cor do fundo de uma foto",
  steps: [
    { title: "Envie a foto", description: "Selecione um JPG, PNG ou WEBP com a pessoa ou o objeto bem visível." },
    { title: "Remova o fundo", description: "Clique em Trocar fundo — a IA recorta o assunto em poucos segundos." },
    { title: "Escolha a cor e baixe", description: "Teste branco, azul, vermelho ou qualquer cor na hora e baixe o JPG." },
  ],

  features: [
    { icon: "format_color_fill", title: "Qualquer cor, na hora", description: "Branco, azul e vermelho a um toque, mais um seletor para qualquer outra — sem execução extra de IA por cor." },
    { icon: "badge", title: "Feito para foto de documento", description: "Recorte limpo em volta do cabelo e dos ombros, sobre a cor sólida que os formulários pedem." },
    { icon: "verified_user", title: "Sem marca d'água", description: "Grátis, sem nada carimbado no resultado." },
  ],

  faqs: [
    { q: "Como colocar fundo branco numa foto?", a: "Envie a foto e clique em Trocar fundo. O branco já vem selecionado, então assim que o recorte aparecer você pode baixar o JPG com fundo branco." },
    { q: "Dá para fazer foto 3x4 com fundo branco em casa?", a: "Dá: tire a foto de frente, com boa luz e um pouco de espaço acima da cabeça, troque o fundo para branco aqui e depois recorte na proporção 3x4 com Recortar imagem." },
    { q: "Trocar a cor gasta outra execução de IA?", a: "Não. Só o primeiro passo — encontrar o assunto — roda no nosso servidor. Testar outras cores depois acontece no seu navegador." },
    { q: "A foto vai atender às regras do documento?", a: "O fundo vai ficar liso e uniforme, que é a parte que esta ferramenta controla. Tamanho, posição da cabeça, iluminação e expressão são regras separadas que você precisa conferir no seu documento." },
    { q: "Serve para foto de produto?", a: "Serve. Marketplaces costumam exigir fundo branco puro; a ferramenta recorta o produto e o coloca no branco do mesmo jeito que faz com uma pessoa." },
    { q: "Por que o resultado é JPG e não PNG?", a: "Um fundo de cor sólida não tem transparência para preservar, e quase todo formulário pede JPG. Para um recorte transparente, use Remover fundo." },
    { q: "Minha foto fica guardada?", a: "Só por pouco tempo. O recorte é feito no nosso servidor, fica atrás de um link privado e é apagado automaticamente em até uma hora; a cor é aplicada no seu aparelho." },
  ],

  security:
    "A remoção do fundo roda no nosso servidor com o motor de código aberto rembg; o resultado fica só por pouco tempo atrás de um link privado e é apagado automaticamente em até uma hora. A nova cor é aplicada no seu navegador, e nada é compartilhado nem reutilizado.",
};

export default content;
