import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.pt";

/** Portuguese copy for /pt/efeito-glitch. */
const content: ToolPageContent = {
  toolId: "glitch-effect",
  locale: "pt",
  name: "Efeito glitch",
  tagline:
    "Dê a qualquer foto um visual de tela com defeito — separação de cores em vermelho e azul, faixas deslocadas e linhas de varredura —, com controle de intensidade e um botão para embaralhar. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Efeito Glitch Online Grátis — Foto com Efeito Glitch | oMyImage",
  metaDescription:
    "Coloque efeito glitch em fotos online e grátis: separação de cores RGB, faixas deslocadas e linhas de varredura, com controle de intensidade e embaralhar. No navegador, sem upload.",

  intro:
    "O visual glitch vem de equipamentos com defeito: um sinal de vídeo que escorrega, uma tela que rasga, cores que se separam. Virou um estilo próprio em capas de disco, pôsteres, miniaturas e fotos de perfil. O Efeito glitch do oMyImage monta esse visual com três ingredientes que você liga e desliga — separação de cores, faixas deslocadas e linhas de varredura —, um controle de intensidade e um botão que embaralha as faixas até a composição ficar boa. Tudo aparece na prévia antes de você baixar.",

  sections: [
    {
      heading: "Os três ingredientes",
      id: "parts",
      body: [
        "A separação de cores puxa o canal vermelho para um lado e o azul para o outro, deixando franjas coloridas em todas as bordas — a parte mais reconhecível do efeito, como um projetor desalinhado. As faixas deslocadas cortam tiras horizontais finas da imagem e as empurram para o lado, como se o sinal pulasse. As linhas de varredura escurecem faixas alternadas, a textura de um monitor antigo ou de uma fita VHS.",
        "Use os três para um glitch completo, ou só um: a separação de cores sozinha dá um contorno sutil de óculos 3D a retratos, e as faixas sozinhas parecem uma impressão digital rasgada.",
      ],
    },
    {
      heading: "Intensidade e embaralhar",
      id: "strength",
      body: [
        "A intensidade ajusta tudo junto: o quanto as cores se separam, quantas faixas se mexem e até onde vão, e o quanto as linhas de varredura escurecem. Entre 20 e 40 dá só um toque de defeito; de 70 para cima fica barulhento e caótico.",
        "As faixas são colocadas ao acaso. Se uma tira cair em cima de um rosto ou esconder um detalhe importante, clique em Embaralhar as faixas para uma nova arrumação. Ela fica fixa até você embaralhar de novo, então a prévia e o download são sempre iguais.",
      ],
    },
    {
      heading: "Onde funciona",
      id: "uses",
      body: [
        "Imagens com glitch combinam com capas de música, miniaturas de games e tecnologia, pôsteres de eventos, artes cyberpunk e vaporwave e fotos de perfil que precisam se destacar numa lista. Formas fortes e bom contraste recebem melhor o efeito; uma foto muito carregada pode virar ruído. Texto em negrito numa imagem é um ótimo alvo — a separação faz as letras parecerem vibrar.",
        "Para fazer o glitch se mexer, crie algumas versões com embaralhamentos diferentes e junte tudo numa animação curta com o Criar GIF.",
      ],
    },
    {
      heading: "Várias imagens, um visual só",
      id: "batch",
      body: [
        "Adicione várias imagens e os mesmos ajustes e a mesma arrumação são aplicados a todas, no tamanho de cada uma, então uma série de posts ou capas fica com o mesmo visual. JPG, PNG e WEBP são aceitos; o resultado mantém o formato, a não ser que você escolha outro, e áreas transparentes continuam transparentes em PNG e WEBP. Várias imagens são baixadas juntas num ZIP.",
      ],
    },
    {
      heading: "Dicas de arte glitch",
      id: "tips",
      body: [
        "Coloque um tema forte um pouco fora do centro, para as faixas cortarem o fundo e não um rosto. Imagens escuras com detalhes claros mostram melhor a separação de cores. Uma foto com um pouco de contraste a mais — experimente o Brilho e contraste antes — dá um resultado mais nítido e digital, e salvar em PNG mantém as bordas nítidas das faixas e das franjas.",
      ],
    },
    {
      heading: "Glitch em miniaturas e capas",
      id: "covers",
      body: [
        "Em miniaturas de vídeo e capas de playlist, o glitch chama o olhar mesmo em tamanho pequeno, principalmente nas bordas de letras grandes. Aplique o efeito com intensidade moderada e confira a prévia reduzida: detalhes muito finos somem quando a imagem aparece pequena numa lista.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada imagem recebe o glitch inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como colocar efeito glitch numa foto",
  steps: [
    { title: "Adicione imagens", description: "Selecione uma ou mais imagens JPG, PNG ou WEBP." },
    { title: "Ajuste o glitch", description: "Defina a intensidade, escolha os efeitos e embaralhe as faixas até ficar bom." },
    { title: "Aplique e baixe", description: "Clique em Aplicar glitch para baixar a imagem, ou um ZIP se forem várias." },
  ],

  features: [
    { icon: "gradient", title: "Três efeitos glitch", description: "Separação de cores, faixas deslocadas e linhas de varredura, cada um liga e desliga." },
    { icon: "visibility", title: "Prévia ao vivo", description: "Veja cada mudança na hora e embaralhe até combinar." },
    { icon: "lock", title: "Sem upload", description: "Glitch aplicado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como colocar efeito glitch numa foto?", a: "Adicione a foto, ajuste a intensidade, escolha os efeitos e clique em Aplicar glitch." },
    { q: "O que é a separação de cores?", a: "As partes vermelha e azul da imagem deslocadas em direções opostas, deixando franjas coloridas nas bordas." },
    { q: "Dá para mudar onde as faixas ficam?", a: "Sim. Clique em Embaralhar as faixas para uma nova arrumação aleatória." },
    { q: "O download fica igual à prévia?", a: "Sim. A arrumação fica fixa até você embaralhar e é ajustada à imagem inteira." },
    { q: "Dá para fazer um glitch sutil?", a: "Sim. Use intensidade de 20 a 40, ou ligue só a separação de cores." },
    { q: "Dá para fazer um glitch animado?", a: "Crie algumas versões com embaralhamentos diferentes e junte com o Criar GIF." },
    { q: "Dá para aplicar em várias imagens de uma vez?", a: "Sim. Elas recebem os mesmos ajustes e são baixadas num ZIP." },
    { q: "A transparência é mantida?", a: "Sim, quando você salva como PNG ou WEBP." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, em qualquer navegador do celular." },
    { q: "Que imagens funcionam melhor?", a: "Formas fortes, texto em negrito e alto contraste. Fotos muito carregadas podem virar ruído." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Em que formato salvar?", a: "PNG mantém as bordas das faixas e as franjas nítidas; o JPG as suaviza um pouco." },
  ],

  security:
    "O glitch é aplicado às suas imagens inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
