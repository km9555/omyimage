import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/redimensionar-capa-linkedin (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "linkedin-banner-resizer",
  locale: "pt",
  name: "Redimensionar Capa do LinkedIn",
  tagline:
    "Deixe qualquer imagem no tamanho da foto de capa do LinkedIn — exatamente 1584 × 396 pixels, uma faixa 4:1 — cortada ou completada para caber. Grátis, no navegador, sem cadastro.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Capa do LinkedIn 1584×396 — Redimensionar Grátis Online | oMyImage",
  metaDescription:
    "Deixe qualquer imagem no tamanho da capa do LinkedIn: exatamente 1584 × 396 px (4:1), cortada ou completada, pensando na foto de perfil por cima. Grátis, sem cadastro.",

  intro:
    "O banner atrás da sua foto de perfil no LinkedIn é uma faixa longa e fina: 1584 × 396 pixels, quatro vezes mais larga que alta. Quase nenhuma foto ou arte nasce nesse formato, então o LinkedIn corta de um jeito imprevisível ou recusa. Este redimensionador abre no tamanho da capa do LinkedIn — adicione a imagem, decida se ela deve ser cortada para preencher a faixa ou completada com uma cor, e baixe uma capa que encaixa exatamente.",

  sections: [
    {
      heading: "O tamanho da capa do LinkedIn",
      id: "spec",
      body: [
        "A foto de capa do perfil pessoal do LinkedIn tem 1584 × 396 pixels, proporção 4:1, em JPG ou PNG com menos de 8 MB. Uma imagem exatamente nesse tamanho entra sem a ferramenta de corte do LinkedIn precisar adivinhar qual faixa da foto manter.",
        "Páginas de empresa usam outra capa, mais estreita (1128 × 191 pixels). Para uma página de empresa, escolha Tamanho personalizado e digite esses números no lugar do tamanho da capa pessoal.",
      ],
    },
    {
      heading: "Sua foto de perfil cobre uma parte",
      id: "overlap",
      body: [
        "No computador, sua foto de perfil redonda fica sobre a parte de baixo, à esquerda, da capa; no celular a capa aparece mais estreita, com as laterais aparadas. Textos, logotipos ou rostos no terço esquerdo ou nas pontas podem sumir.",
        "Deixe o mais importante centralizado ou à direita, e trate o lado esquerdo como fundo. Uma área lisa ali também faz sua foto de perfil se destacar, em vez de disputar atenção com a capa.",
      ],
    },
    {
      heading: "Transformando uma foto comum numa faixa 4:1",
      id: "fit",
      body: [
        "Recortar para preencher, o padrão, ajusta a imagem à largura total e apara em cima e embaixo por igual — bom para uma paisagem urbana, uma mesa de trabalho ou uma textura. Se o interessante está perto do topo ou da base, recorte a imagem antes com o botão de corte no cartão dela, escolhendo a faixa que quer manter.",
        "Preencher com margem mantém a imagem inteira e preenche as laterais com uma cor, o que combina com um logotipo ou uma arte quadrada: a figura fica no meio de uma faixa 4:1 de cor sólida. Escolha uma cor da marca ou da própria imagem para a faixa parecer proposital.",
      ],
    },
    {
      heading: "Mantendo a nitidez",
      id: "sharp",
      body: [
        "Comece de uma imagem com pelo menos 1584 pixels de largura. Uma imagem menor precisa ser ampliada para preencher a capa, e pixels esticados parecem moles em telas grandes. Se você só tem um logotipo pequeno, complete-o em vez de ampliá-lo até a largura toda.",
        "Texto na capa deve ser grande e curto. No celular a faixa inteira tem poucos centímetros de altura, então um slogan em letra pequena fica ilegível; um nome, um cargo ou uma única linha funciona melhor.",
      ],
    },
    {
      heading: "Enviando para o LinkedIn",
      id: "upload",
      body: [
        "Abra seu perfil, clique no ícone de lápis na área da capa, escolha Carregar foto e selecione a imagem baixada. Como ela já tem 1584 × 396, a etapa de posicionamento deve mostrar a imagem inteira; ajuste só se quiser, depois aplique e salve.",
      ],
    },
  ],

  howToTitle: "Como redimensionar uma imagem para a capa do LinkedIn",
  steps: [
    { title: "Adicione a imagem", description: "Selecione um JPG, PNG, WEBP, GIF ou BMP — foto, arte ou logotipo." },
    { title: "Corte ou complete", description: "O tamanho 1584 × 396 já vem escolhido; escolha Recortar para preencher ou Preencher com margem." },
    { title: "Baixe", description: "Redimensione e baixe uma capa pronta para o seu perfil do LinkedIn." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exatamente 1584 × 396", description: "O tamanho 4:1 da capa, então o LinkedIn não tem o que cortar." },
    { icon: "palette", title: "Preencher com margem", description: "Encaixe um logotipo ou arte quadrada na faixa sobre um fundo sólido." },
    { icon: "lock", title: "No seu navegador", description: "Sua imagem é redimensionada no seu aparelho e nunca é enviada." },
  ],

  faqs: [
    { q: "Qual o tamanho da capa do LinkedIn?", a: "1584 × 396 pixels, proporção 4:1, em JPG ou PNG com menos de 8 MB, para a foto de capa do perfil pessoal." },
    { q: "Como deixo minha imagem em 1584 × 396?", a: "Adicione aqui — o tamanho do LinkedIn já vem escolhido. Escolha Recortar para preencher ou Preencher com margem, depois redimensione e baixe." },
    { q: "Por que parte da minha capa fica escondida?", a: "Sua foto de perfil cobre a parte de baixo à esquerda no computador, e o celular apara as laterais. Mantenha o importante no centro ou à direita." },
    { q: "Qual o tamanho da capa de uma página de empresa?", a: "1128 × 191 pixels. Escolha Tamanho personalizado e digite esses números." },
    { q: "Minha capa ficou borrada — por quê?", a: "A original provavelmente tinha menos de 1584 pixels de largura e precisou ser ampliada. Comece de uma imagem mais larga, ou complete um logotipo pequeno em vez de esticá-lo." },
    { q: "Posso colocar um logotipo sobre um fundo liso?", a: "Pode. Escolha Preencher com margem e uma cor de fundo; o logotipo fica centralizado numa faixa 4:1 dessa cor." },
    { q: "O que faz uma boa capa no LinkedIn?", a: "Algo simples que apoie o perfil: sua cidade, seu espaço de trabalho, seu produto, ou a cor da marca com uma linha curta de texto à direita." },
    { q: "JPG ou PNG para a capa do LinkedIn?", a: "Os dois funcionam. JPG para fotos; PNG mantém textos e artes chapadas mais nítidos." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Ela é redimensionada no seu navegador; só você a envia ao LinkedIn." },
  ],

  security:
    "Sua imagem é redimensionada inteiramente no seu navegador. Imagens muito grandes podem ser processadas no nosso servidor e apagadas na hora; nada fica guardado.",
};

export default content;
