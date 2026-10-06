import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.pt";

/** Portuguese copy for /pt/arredondar-cantos-da-imagem. */
const content: ToolPageContent = {
  toolId: "round-corners",
  locale: "pt",
  name: "Arredondar cantos",
  tagline:
    "Deixe imagens com cantos arredondados — qualquer raio, quaisquer cantos —, com bordas transparentes em PNG ou com uma cor de fundo à sua escolha. Várias imagens de uma vez. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Arredondar Cantos da Imagem Online Grátis — PNG Arredondado | oMyImage",
  metaDescription:
    "Arredonde os cantos de imagens online e grátis: escolha o raio e quais cantos, mantenha as bordas transparentes em PNG ou preencha com uma cor. No navegador, sem upload.",

  intro:
    "Cantos arredondados deixam uma imagem com cara de acabada: ícones de aplicativo, cards de sites, slides e posts usam isso o tempo todo. O Arredondar cantos do oMyImage corta os cantos de imagens JPG, PNG e WEBP no raio que você escolher, nos quatro cantos ou só em alguns, e deixa as partes cortadas transparentes, para a imagem ficar limpa em qualquer fundo. Veja a prévia mudar enquanto arrasta e baixe uma imagem ou um lote inteiro.",

  sections: [
    {
      heading: "Escolhendo o raio",
      id: "radius",
      body: [
        "O raio é definido como uma parte do lado menor da imagem, então o mesmo ajuste dá o mesmo visual num ícone pequeno e num banner grande. Por volta de 5 a 10 por cento é o arredondamento suave de um card de site; de 15 a 25 por cento parece um ícone de aplicativo; 50 por cento transforma um retângulo numa pílula e uma imagem quadrada num círculo perfeito.",
        "Desmarque cantos para arredondar só alguns — os dois de cima para uma aba ou o topo de um card, ou um canto só para um formato de balão ou etiqueta.",
      ],
    },
    {
      heading: "Cantos transparentes ou coloridos",
      id: "background",
      body: [
        "Cantos transparentes precisam de um formato com transparência, então a saída é PNG por padrão; WEBP também serve e fica menor. Se a imagem vai para uma página, slide ou documento com fundo conhecido, você pode preencher os cantos com essa cor, o que também permite salvar em JPG.",
        "O JPG não guarda transparência nenhuma. Quando o JPG é escolhido, os cantos são preenchidos com a cor de fundo, branca a menos que você escolha outra.",
      ],
    },
    {
      heading: "Onde cantos arredondados ajudam",
      id: "uses",
      body: [
        "Prints com cantos arredondados ficam caprichados em documentação, posts e slides. Fotos de produto e retratos de equipe ficam mais simpáticos em sites. Ícones de aplicativos e jogos pedem quadrados arredondados; fotos de perfil costumam ficar melhores em círculo. Miniaturas numa grade ficam mais organizadas com o mesmo raio — adicione o conjunto todo de uma vez e elas ficam iguais.",
      ],
    },
    {
      heading: "Círculos e outros formatos",
      id: "shapes",
      body: [
        "Um raio de 50 por cento numa imagem quadrada dá um círculo exato. Para um círculo a partir de uma foto retangular, escolhendo qual parte fica dentro, use o Recortar imagem em círculo, que deixa você mover e redimensionar o círculo. Para pôr uma moldura ou uma borda colorida em volta da imagem arredondada, use o Adicionar borda à imagem depois.",
      ],
    },
    {
      heading: "Várias imagens de uma vez",
      id: "batch",
      body: [
        "Adicione quantas imagens precisar; o mesmo raio e os mesmos cantos são aplicados a cada uma, na proporção do seu tamanho. A prévia mostra a primeira imagem, cada arquivo ganha o seu botão de download quando fica pronto, e várias são baixadas juntas num arquivo ZIP.",
      ],
    },
    {
      heading: "Cantos iguais em todo o design",
      id: "consistency",
      body: [
        "Use o mesmo raio em todo um design: cards, botões e imagens com o mesmo arredondamento parecem fazer parte da mesma peça. Como o raio aqui é uma parte do lado menor, ajustar uma vez deixa o lote todo combinando em proporção. Para o mesmo raio em pixels em imagens de tamanhos diferentes, deixe todas do mesmo tamanho antes com o Redimensionar imagem.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada imagem é arredondada inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como arredondar os cantos de uma imagem",
  steps: [
    { title: "Adicione imagens", description: "Selecione uma ou mais imagens JPG, PNG ou WEBP." },
    { title: "Defina o raio", description: "Arraste o controle do raio, escolha os cantos e o fundo." },
    { title: "Arredonde e baixe", description: "Clique em Arredondar cantos para baixar um PNG, ou um ZIP se forem várias." },
  ],

  features: [
    { icon: "rounded_corner", title: "Qualquer raio", description: "De uma borda suave a uma pílula ou círculo, nos cantos que você escolher." },
    { icon: "visibility", title: "Bordas transparentes", description: "PNG e WEBP mantêm os cantos transparentes." },
    { icon: "lock", title: "Sem upload", description: "Arredondada inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como arredondar os cantos de uma imagem?", a: "Adicione a imagem, defina o raio e clique em Arredondar cantos. Um PNG com cantos transparentes é baixado." },
    { q: "Por que o resultado é PNG?", a: "Cantos transparentes precisam de PNG ou WEBP. Escolha JPG para preencher os cantos com uma cor." },
    { q: "Dá para arredondar só alguns cantos?", a: "Sim. Desmarque os cantos que devem ficar retos." },
    { q: "Como fazer um círculo?", a: "Use raio de 50% numa imagem quadrada. Para outras fotos, o Recortar imagem em círculo deixa você posicionar o círculo." },
    { q: "Os cantos podem ter uma cor em vez de transparência?", a: "Sim. Escolha uma cor de fundo, ou salve como JPG." },
    { q: "Dá para arredondar várias imagens de uma vez?", a: "Sim. O mesmo raio é aplicado a cada uma, e elas são baixadas num ZIP." },
    { q: "Que raio usam os ícones de aplicativo?", a: "Cerca de 20 a 25 por cento do lado, para um visual moderno de quadrado arredondado." },
    { q: "Perde qualidade?", a: "Não. O PNG mantém cada pixel; só os cantos são cortados." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, em qualquer navegador do celular." },
    { q: "Dá para pôr uma borda também?", a: "Sim. Use o Adicionar borda à imagem na imagem arredondada depois." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Serve para foto de perfil?", a: "Sim. Uma foto quadrada com 50% vira um círculo, e os cantos transparentes combinam com qualquer fundo." },
  ],

  security:
    "Suas imagens são arredondadas inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
