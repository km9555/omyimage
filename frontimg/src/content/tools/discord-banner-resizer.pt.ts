import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/redimensionar-banner-discord (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "discord-banner-resizer",
  locale: "pt",
  name: "Redimensionar Banner do Discord",
  tagline:
    "Deixe qualquer imagem no tamanho do Discord — banner de perfil 600 × 240, banner de servidor 960 × 540 ou ícone de servidor 512 × 512 — cortada ou completada. Grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Banner do Discord — Tamanhos de Perfil e Servidor, Grátis | oMyImage",
  metaDescription:
    "Deixe qualquer imagem no tamanho do Discord: banner de perfil 600 × 240, banner de servidor 960 × 540 ou ícone 512 × 512. Corte ou complete, grátis, no navegador.",

  intro:
    "O Discord usa um formato diferente para cada espaço de imagem: uma faixa larga 5:2 no banner do perfil, um banner 16:9 no topo da lista de canais do servidor, e quadrados mostrados como círculos nos ícones e avatares. Este redimensionador abre no tamanho do banner de perfil e lista os outros tamanhos do Discord no mesmo menu. Adicione a imagem, escolha o espaço, corte ou complete para caber, e envie algo que o Discord não precisa cortar por você.",

  sections: [
    {
      heading: "Todos os tamanhos de imagem do Discord",
      id: "sizes",
      body: [
        "Banner de perfil: 600 × 240 pixels, proporção 5:2, no topo do seu cartão de perfil. O Discord indica esse tamanho como mínimo, e banners são um recurso do Nitro. Banner de servidor: 960 × 540 pixels, 16:9, acima da lista de canais; o servidor libera no nível 2 de impulso. Ícone de servidor: um quadrado mostrado em círculo — 512 × 512 é um bom tamanho. Avatar: quadrado mostrado em círculo, com pelo menos 128 × 128.",
        "Todos aceitam PNG, JPG e GIF com menos de 10 MB. Escolha o espaço em Tipo de publicação, e a largura e a altura mudam para combinar.",
      ],
    },
    {
      heading: "Banners mais nítidos no dobro do tamanho",
      id: "double",
      body: [
        "Os tamanhos do Discord são mínimos, e telas de alta resolução mostram um banner de 600 × 240 um pouco mole. Para um resultado mais nítido, escolha Tamanho personalizado e digite o dobro — 1200 × 480 para o banner de perfil, 1920 × 1080 para o de servidor. O Discord reduz para caber, mantendo o mesmo formato.",
        "Só faça isso quando a imagem original for pelo menos desse tamanho. Ampliar uma imagem pequena para 1200 pixels de largura não acrescenta detalhe nenhum, só gera um arquivo maior e borrado.",
      ],
    },
    {
      heading: "O que o seu avatar cobre",
      id: "overlap",
      body: [
        "No cartão de perfil, o avatar redondo fica sobre a parte de baixo à esquerda do banner, e o banner aparece bem pequeno. Texto ou um rosto nesse canto ficam escondidos, e detalhes finos se perdem. Mantenha o assunto no centro ou na metade direita e use formas simples e fortes.",
        "Ícones e avatares são recortados em círculo, então os cantos nunca aparecem. Mantenha o logotipo ou o rosto bem dentro do quadrado, ou escolha Preencher com margem para a imagem inteira ficar no meio com uma cor de fundo em volta.",
      ],
    },
    {
      heading: "Banners animados",
      id: "animated",
      body: [
        "O Discord mostra banners e avatares em GIF animado para membros Nitro e em servidores impulsionados. Este redimensionador trabalha com imagens paradas: um GIF é redimensionado a partir do primeiro quadro, e o resultado é um PNG, JPG ou WEBP parado. Para manter uma animação, redimensione numa ferramenta própria para GIF.",
      ],
    },
    {
      heading: "Enviando para o Discord",
      id: "upload",
      body: [
        "Para o banner de perfil, abra Configurações de usuário, depois Perfis, e escolha Alterar banner. Para banner ou ícone de servidor, abra Configurações do servidor, depois Visão geral, e envie por lá. Como a imagem já tem o formato certo, a etapa de corte do Discord mantém a imagem inteira.",
      ],
    },
  ],

  howToTitle: "Como redimensionar uma imagem para banner do Discord",
  steps: [
    { title: "Adicione a imagem", description: "Selecione um JPG, PNG, WEBP, GIF ou BMP." },
    { title: "Escolha o espaço do Discord", description: "Banner do perfil já vem escolhido; troque para Banner do servidor, Ícone do servidor ou Foto de perfil, e corte ou complete." },
    { title: "Baixe", description: "Redimensione e baixe uma imagem que encaixa exatamente no espaço." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Todos os tamanhos do Discord", description: "Banner de perfil, banner de servidor, ícone de servidor e avatar num só menu." },
    { icon: "crop", title: "Cortar ou completar", description: "Preencha o quadro, ou mantenha a imagem inteira sobre uma cor de fundo." },
    { icon: "lock", title: "No seu navegador", description: "Sua imagem é redimensionada no seu aparelho e nunca é enviada." },
  ],

  faqs: [
    { q: "Qual o tamanho do banner de perfil do Discord?", a: "600 × 240 pixels, proporção 5:2 — o mínimo do Discord. Para um banner mais nítido, use 1200 × 480. Banners de perfil exigem Nitro." },
    { q: "Qual o tamanho do banner de servidor do Discord?", a: "960 × 540 pixels, 16:9. Uma imagem de 1920 × 1080 é aceita e reduzida. Banners de servidor exigem nível 2 de impulso." },
    { q: "Qual o tamanho do ícone de servidor do Discord?", a: "Um quadrado mostrado em círculo; 512 × 512 pixels funciona bem. Mantenha o logotipo longe dos cantos." },
    { q: "Qual o limite de tamanho de arquivo dos banners?", a: "Menos de 10 MB, em PNG, JPG ou GIF." },
    { q: "Dá para fazer um banner animado aqui?", a: "Não. GIFs são redimensionados a partir do primeiro quadro e salvos como imagem parada. Use uma ferramenta de GIF para redimensionar uma animação." },
    { q: "Por que parte do meu banner fica escondida?", a: "O avatar cobre a parte de baixo à esquerda do banner de perfil. Mantenha textos e rostos no centro ou na metade direita." },
    { q: "Por que o ícone do servidor fica cortado nos cantos?", a: "O Discord mostra ícones em círculo. Mantenha o logotipo no meio do quadrado, ou escolha Preencher com margem para ele ficar sobre uma cor de fundo com espaço em volta." },
    { q: "Posso redimensionar várias imagens de uma vez?", a: "Pode. Adicione todas; cada uma vai para o tamanho do Discord escolhido e elas são baixadas juntas num ZIP." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Ela é redimensionada no seu navegador; só você a envia ao Discord." },
  ],

  security:
    "Sua imagem é redimensionada inteiramente no seu navegador. Imagens muito grandes podem ser processadas no nosso servidor e apagadas na hora; nada fica guardado.",
};

export default content;
