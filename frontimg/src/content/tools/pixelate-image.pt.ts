import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.pt";

/** Portuguese copy for /pt/pixelar-imagem. */
const content: ToolPageContent = {
  toolId: "pixelate-image",
  locale: "pt",
  name: "Pixelar imagem",
  tagline:
    "Transforme qualquer foto em blocos de pixels — de um mosaico sutil a uma pixel art retrô bem marcada. Escolha o tamanho do bloco, veja ao vivo e pixele várias imagens de uma vez. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Pixelar Imagem Online Grátis — Efeito Pixel Art | oMyImage",
  metaDescription:
    "Pixele imagens online e grátis: escolha o tamanho do bloco e transforme qualquer foto em pixels grandes ou num visual de pixel art retrô. Várias de uma vez. No navegador, sem upload.",

  intro:
    "Pixelar troca os detalhes de uma imagem por blocos quadrados de cor, cada um com a cor da área que cobre. É o visual dos videogames antigos, dos mosaicos de azulejo e de uma imagem tornada ilegível de propósito. O Pixelar imagem do oMyImage deixa você escolher exatamente o tamanho desses blocos: arraste o controle e a prévia muda na hora, mostrando mais ou menos quantos blocos cabem na imagem. Adicione uma foto ou um lote e baixe tudo pixelado no mesmo formato ou em outro.",

  sections: [
    {
      heading: "Escolhendo o tamanho do bloco",
      id: "size",
      body: [
        "O tamanho do bloco é medido em pixels da imagem original, de 2 a 120. Blocos pequenos, de 4 a 8 pixels, dão um mosaico suave que ainda mostra o que é a imagem; de 16 a 32 pixels, a foto vira uma cena clara de pixel art; acima disso, a imagem vira um punhado de quadrados coloridos.",
        "Como o ajuste é em pixels, o mesmo valor parece mais fino numa foto grande do que numa pequena. A nota embaixo do controle mostra quantos blocos cabem no lado maior, o que é um guia mais confiável do que o número em si.",
      ],
    },
    {
      heading: "Pixel art e visual retrô",
      id: "art",
      body: [
        "Para um visual de jogo de 8 ou 16 bits, mire em 40 a 80 blocos no lado maior. Temas simples, com formas fortes — um logotipo, um bicho contra uma parede lisa, um horizonte de prédios — pixelam melhor. Aumente o contraste antes com o Brilho e contraste se o resultado ficar embaçado; pixel art fica melhor com cores claras e saturadas.",
        "Salve pixel art como PNG. A compressão do JPG borra as bordas nítidas dos blocos e cria manchas dentro dos quadrados lisos, o que estraga o efeito.",
      ],
    },
    {
      heading: "Pixelar para esconder coisas",
      id: "privacy-note",
      body: [
        "Pixelar é um jeito popular de esconder rostos, placas e textos, mas blocos pequenos não são seguros: um rosto ou uma palavra pixelada às vezes pode ser reconhecida ou reconstruída. Se for para proteger alguém, use blocos grandes, para não sobrar estrutura nenhuma. Para esconder só uma parte da imagem — rostos, uma placa, um nome —, use o Desfocar rosto, que detecta rostos e deixa você pixelar ou desfocar só as áreas escolhidas.",
      ],
    },
    {
      heading: "Outros usos",
      id: "uses",
      body: [
        "Fotos pixeladas são bons fundos para texto, porque as formas ficam mas os detalhes param de competir com as palavras. Também servem como prévias sem spoiler, como imagens de quiz em que os jogadores adivinham a foto, e como ponto de partida para gráficos de ponto-cruz, miçangas e mosaicos, em que cada bloco vira um ponto ou um azulejo.",
      ],
    },
    {
      heading: "Várias imagens, qualquer formato",
      id: "batch",
      body: [
        "Adicione quantas imagens precisar; o mesmo tamanho de bloco é aplicado a todas. JPG, PNG e WEBP são aceitos, e o resultado mantém o formato original, a não ser que você escolha outro. Áreas transparentes continuam transparentes em PNG e WEBP. Uma imagem é baixada direto; várias vêm num arquivo ZIP.",
      ],
    },
    {
      heading: "Pixelação e tamanho do arquivo",
      id: "size-note",
      body: [
        "Uma imagem pixelada tem muito menos detalhe, então comprime bem: um PNG bem pixelado pode ter uma fração do tamanho do original, o que é útil para fundos leves e imagens provisórias. Para diminuir ainda mais sem perder os blocos nítidos, mantenha o PNG e passe pelo Comprimir imagem.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada imagem é pixelada inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como pixelar uma imagem",
  steps: [
    { title: "Adicione imagens", description: "Selecione uma ou mais imagens JPG, PNG ou WEBP." },
    { title: "Defina o bloco", description: "Arraste o controle até a prévia ficar com o visual que você quer." },
    { title: "Pixele e baixe", description: "Clique em Pixelar para baixar a imagem, ou um ZIP se forem várias." },
  ],

  features: [
    { icon: "apps", title: "Qualquer tamanho de bloco", description: "De um mosaico fino a poucos quadrados, de 2 a 120 pixels." },
    { icon: "visibility", title: "Prévia ao vivo", description: "Veja o efeito enquanto arrasta e segure para comparar." },
    { icon: "lock", title: "Sem upload", description: "Pixelada inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como pixelar uma imagem?", a: "Adicione a imagem, ajuste o tamanho do bloco e clique em Pixelar. A imagem pixelada é baixada na hora." },
    { q: "Que tamanho de bloco usar?", a: "4–8 px para um mosaico sutil, 16–32 px para pixel art, maior para deixar a imagem abstrata." },
    { q: "Pixelar é seguro para esconder rostos ou texto?", a: "Só com blocos grandes. Blocos pequenos às vezes são reconhecíveis; o Desfocar rosto tem opções mais fortes para partes da imagem." },
    { q: "Dá para pixelar só uma parte da imagem?", a: "Aqui não — esta ferramenta pixela a imagem toda. O Desfocar rosto pixela áreas escolhidas." },
    { q: "Qual formato é melhor para pixel art?", a: "PNG. Ele mantém as bordas dos blocos nítidas; o JPG borra." },
    { q: "Dá para pixelar várias imagens de uma vez?", a: "Sim. Todas recebem o mesmo tamanho de bloco e são baixadas num ZIP." },
    { q: "A transparência é mantida?", a: "Sim, quando você salva como PNG ou WEBP." },
    { q: "Dá para desfazer a pixelação?", a: "Não — os detalhes se perdem. Guarde o arquivo original." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, em qualquer navegador do celular." },
    { q: "Serve para gráfico de ponto-cruz?", a: "Sim. Pixele a foto e cada bloco vira um ponto." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "A imagem pixelada fica mais leve?", a: "Normalmente sim, principalmente em PNG, porque sobra muito menos detalhe." },
  ],

  security:
    "Suas imagens são pixeladas inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
