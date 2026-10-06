import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.pt";

/** Portuguese copy for /pt/gif-para-sprite-sheet. */
const content: ToolPageContent = {
  toolId: "gif-to-sprite-sheet",
  locale: "pt",
  name: "GIF para sprite sheet",
  tagline:
    "Coloque todos os quadros de um GIF animado numa única folha de sprites PNG — em grade, numa linha ou numa coluna —, com espaçamento e uma animação CSS pronta. Grátis, no navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "GIF para Sprite Sheet Online Grátis — Folha de Sprites PNG | oMyImage",
  metaDescription:
    "Transforme um GIF animado numa sprite sheet PNG online e grátis: em grade, linha ou coluna, com espaçamento e animação CSS pronta. No navegador, sem upload.",

  intro:
    "Uma sprite sheet coloca todos os quadros de uma animação lado a lado numa só imagem. Jogos e páginas web mostram um quadro de cada vez movendo uma janela pela folha, o que carrega mais rápido e é mais fácil de controlar que um GIF. O GIF para sprite sheet do oMyImage transforma qualquer GIF animado numa folha PNG transparente em poucos cliques: escolha grade, uma linha ou uma coluna, decida quantos quadros manter e de que tamanho, adicione espaçamento se o seu motor precisar e copie o CSS que toca a animação.",

  sections: [
    {
      heading: "Grade, linha ou coluna",
      id: "layout",
      body: [
        "A grade organiza os quadros em linhas e colunas, o que deixa a folha mais ou menos quadrada — o formato que a maioria dos motores de jogo e ferramentas de textura prefere. Você escolhe o número de colunas; as linhas saem da contagem de quadros.",
        "Uma linha ou uma coluna põe todos os quadros numa fila só. É a disposição mais fácil de animar com CSS, e a ferramenta escreve a folha de estilo para você: o tamanho do quadro, o fundo e uma animação steps() que percorre a faixa no ritmo do GIF.",
      ],
    },
    {
      heading: "Quadros, tamanho e espaçamento",
      id: "options",
      body: [
        "Manter 1 a cada 2 ou 1 a cada 3 quadros reduz a folha à metade ou a um terço sem deixar o movimento irreconhecível, o que faz diferença em GIFs longos. O tamanho do quadro reduz todos os quadros para 75, 50 ou 25 por cento, para ícones e personagens pequenos.",
        "O espaçamento acrescenta 2, 4 ou 8 pixels entre os quadros. Motores que suavizam ou escalam texturas podem pegar uma linha de pixels do quadro vizinho quando os quadros se encostam; um pequeno espaço evita esse vazamento. O fundo fica transparente, a não ser que você escolha uma cor.",
      ],
    },
    {
      heading: "Usando a folha num motor de jogo",
      id: "engines",
      body: [
        "O painel de configurações mostra o tamanho do quadro e o número de colunas e linhas — os números de que um motor precisa para recortar a folha. No Phaser, Godot, Unity, GameMaker e ferramentas parecidas, importe o PNG, defina a largura e a altura do quadro e acrescente o espaçamento, se usou. A ordem dos quadros do GIF é mantida, da esquerda para a direita e de cima para baixo.",
        "Um GIF pode ter uma pausa diferente em cada quadro; a maioria dos motores toca a folha numa taxa de quadros fixa, então ajuste-a para a velocidade que quiser.",
      ],
    },
    {
      heading: "Usando a folha com CSS",
      id: "css",
      body: [
        "Com uma linha ou uma coluna, o resultado inclui um bloco CSS curto: um elemento do tamanho de um quadro, a folha como fundo e uma animação com steps() para o fundo pular de quadro em quadro em vez de deslizar. Cole na sua folha de estilo, dê a classe sprite a um elemento, e a animação toca sem nenhum script.",
        "O CSS usa a duração total do GIF distribuída igualmente entre os quadros, então um GIF com pausas irregulares toca num ritmo constante.",
      ],
    },
    {
      heading: "Limites de tamanho",
      id: "limits",
      body: [
        "Os navegadores não conseguem criar uma imagem com mais de 16.384 pixels de largura ou de altura, e o Safari para em cerca de 16,7 milhões de pixels no total. Um GIF longo numa linha só chega lá rápido. Quando a folha ficaria grande demais, a ferramenta avisa; use a grade, mantenha menos quadros ou escolha um tamanho menor.",
      ],
    },
    {
      heading: "Folhas para estudar e imprimir",
      id: "review",
      body: [
        "Uma sprite sheet em grade também é um jeito prático de ver uma animação inteira de uma vez: para revisar um movimento quadro a quadro, mostrar a sequência numa apresentação ou imprimir os quadros para uma aula de animação. Com espaçamento e fundo branco, cada quadro fica bem separado.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é lido e a folha é desenhada inteiramente no seu navegador. Nada é enviado, e nada fica guardado depois que você fecha a página. Para ter os quadros como arquivos separados em vez de uma folha, use o GIF para imagens.",
      ],
    },
  ],

  howToTitle: "Como fazer uma sprite sheet a partir de um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha a disposição", description: "Grade, uma linha ou uma coluna; defina quadros, tamanho, espaçamento e fundo." },
    { title: "Crie e baixe", description: "Clique em Criar sprite sheet, copie o CSS se precisar e baixe o PNG." },
  ],

  features: [
    { icon: "grid_view", title: "Qualquer disposição", description: "Grade com as colunas que você quiser, uma linha ou uma coluna." },
    { icon: "code", title: "CSS incluído", description: "Uma animação steps() pronta para folhas em linha e em coluna." },
    { icon: "lock", title: "Sem upload", description: "Criada inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como transformar um GIF em sprite sheet?", a: "Adicione o GIF, escolha grade, linha ou coluna e clique em Criar sprite sheet. Baixe o PNG." },
    { q: "O que é uma sprite sheet?", a: "Uma imagem que guarda todos os quadros de uma animação, lado a lado." },
    { q: "O fundo é transparente?", a: "Sim, por padrão. Você pode escolher uma cor sólida." },
    { q: "Posso escolher o número de colunas?", a: "Sim. Na grade, digite o número de colunas; as linhas saem da contagem de quadros." },
    { q: "Por que pôr espaço entre os quadros?", a: "Alguns motores misturam pixels vizinhos ao escalar texturas; um pequeno espaço impede que um quadro vaze no outro." },
    { q: "Como animar a folha com CSS?", a: "Escolha uma linha ou uma coluna e copie o CSS mostrado com o resultado." },
    { q: "Por que a minha folha ficou grande demais?", a: "Navegadores não criam imagens com mais de 16.384 pixels de lado. Use a grade, mantenha menos quadros ou reduza o tamanho." },
    { q: "Todos os quadros são mantidos?", a: "Sim, a não ser que você escolha manter 1 a cada 2 ou 3 quadros." },
    { q: "Perde qualidade?", a: "Não. Em 100%, os quadros são copiados pixel a pixel para um PNG." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Dá para ter os quadros como imagens separadas?", a: "Sim, com o GIF para imagens." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular. Folhas muito grandes podem passar do limite de memória do aparelho." },
  ],

  security:
    "Seu GIF vira sprite sheet inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // GifExportTool.tsx is shared with gif-to-webp; each route only has its own
  // tool's ui in scope, so this page reuses the WEBP page's translations.
  ui: webp.ui,
};

export default content;
