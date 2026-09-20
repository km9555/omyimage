import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/adicionar-borda.
 *
 * Head term "adicionar borda na foto" / "colocar borda em imagem" — Fotor /pt,
 * Canva pt-BR and Adobe Express BR title on "borda"; "moldura" is the frame
 * and appears in the body and in aliases.ts along with "colocar moldura" and
 * "deixar foto quadrada para o Instagram", which is what most of this page's
 * Brazilian traffic is actually trying to do.
 */
const content: ToolPageContent = {
  toolId: "add-border",
  locale: "pt",
  name: "Adicionar borda à imagem",
  tagline:
    "Coloque uma borda ou moldura colorida nas suas imagens online — com espessura ajustável, cantos arredondados, prévia ao vivo e processamento em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Adicionar borda na foto online grátis — moldura e fundo | oMyImage",
  metaDescription:
    "Adicione borda ou moldura em fotos online e grátis: escolha cor, espessura e cantos arredondados, ou deixe a foto quadrada sem cortar nada. Tudo no navegador.",

  intro:
    "Adicionar uma borda deixa a foto com um acabamento limpo e definido. A ferramenta Adicionar borda do oMyImage envolve qualquer imagem numa borda colorida direto no navegador, com controle de espessura, cor e cantos arredondados, além de molduras prontas, passe-partout interno e legenda embaixo da foto — tudo com prévia ao vivo. Emoldure uma imagem ou um lote inteiro e baixe na hora; nada é enviado, então suas fotos continuam privadas.",

  sections: [
    {
      heading: "Para que serve uma borda, de verdade",
      id: "why",
      body: [
        "O motivo mais prático é separar. Uma foto de bordas claras colocada numa página branca não tem limite visível — o céu se mistura com o fundo e a imagem deixa de parecer um objeto. Uma borda fina devolve essa fronteira, e a foto passa a parecer intencional em vez de um erro no layout.",
        "O segundo motivo é caber. Redes sociais, marketplaces e gráficas costumam pedir uma proporção específica, e a solução automática é cortar. Preencher com borda entrega a proporção mantendo a composição inteira, o que importa quando o que seria cortado era justamente o motivo da foto.",
        "O terceiro é a uniformidade. Um conjunto de imagens de câmeras diferentes, em tamanhos diferentes, emoldurado do mesmo jeito começa a parecer uma coleção em vez de uma miscelânea.",
      ],
    },
    {
      heading: "Escolhendo a espessura",
      id: "thickness",
      body: [
        "Pense em porcentagem, e não em pixels, porque uma borda de 20 pixels é evidente numa imagem de 600 pixels e invisível numa de 4000. De dois a cinco por cento da largura é a faixa de uma moldura discreta, que define a borda sem virar um elemento em si.",
        "Dez por cento ou mais é lido como passe-partout — aquela margem larga usada em quadros de galeria, que dá espaço e certa formalidade à imagem. É um visual deliberado, e não um padrão, e funciona melhor numa foto pensada do que num clique rápido.",
        "Uma coisa para conferir: se a imagem vai ser exibida bem menor do que o tamanho original, uma borda fina pode sumir por completo na redução. Teste no tamanho em que ela realmente vai aparecer.",
      ],
    },
    {
      heading: "Preenchendo para outra proporção",
      id: "aspect",
      body: [
        "Uma borda desigual é a ferramenta para fazer uma foto caber num formato em que ela não foi tirada. Acrescente preenchimento só nos lados menores e uma foto 3:2 deitada vira um quadrado 1:1 com o quadro inteiro preservado.",
        "É assim que a maioria das pessoas posta fotos horizontais em feeds quadrados sem perder as pontas da composição, e é assim que fotos em pé entram em slides widescreen. A alternativa — cortar — sempre custa alguma coisa, e muitas vezes essa coisa é o motivo pelo qual você tirou a foto.",
        "Escolher a cor do preenchimento com cuidado faz o resultado parecer projetado, e não remendado. Branco ou preto são seguros; pegar uma cor da própria foto costuma ficar ainda melhor.",
      ],
    },
    {
      heading: "Escolha da cor",
      id: "colour",
      body: [
        "O branco é o padrão por um bom motivo — é o que passe-partouts de galeria e bordas de impressão usam, e deixa as fotos com cara mais limpa. Ele também some numa página branca, o que é exatamente o que você quer ou exatamente o que você estava tentando evitar; então confira onde a imagem vai parar.",
        "O preto combina com imagens de tons escuros, alto contraste ou clima cinematográfico, e dá peso à foto. Uma cor da marca amarra um conjunto publicado e é a escolha usual para conteúdo de redes sociais que precisa parecer vindo do mesmo lugar.",
        "O preenchimento transparente, disponível ao exportar em PNG ou WEBP, é a opção que as pessoas esquecem. Ele muda a proporção sem acrescentar nada visível, o que costuma ser a resposta certa quando a imagem vai entrar num layout que já tem o próprio fundo.",
      ],
    },
  ],

  howToTitle: "Como adicionar uma borda a uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Ajuste a borda", description: "Escolha uma moldura pronta ou defina espessura, cor e cantos arredondados, com prévia ao vivo." },
    { title: "Aplique e baixe", description: "Clique em Adicionar borda e baixar — uma imagem vem direto, várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "crop_din", title: "Espessura proporcional", description: "O tamanho da borda é uma porcentagem do lado menor, então fica igual em imagens de qualquer dimensão." },
    { icon: "rounded_corner", title: "Cor e cantos arredondados", description: "Escolha qualquer cor de borda e arredonde os cantos internos para uma moldura moderna e bem-acabada." },
    { icon: "lock", title: "Em lote e privado", description: "Emoldure um lote inteiro de uma vez, tudo no seu navegador — as imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Como a espessura é medida?", a: "Como uma porcentagem do lado menor da imagem, então o mesmo ajuste dá uma borda proporcional em imagens de qualquer tamanho." },
    { q: "Posso arredondar os cantos?", a: "Pode. O controle de arredondamento arredonda os cantos internos da foto contra a borda, para um visual mais suave." },
    { q: "Dá para colocar borda em várias imagens de uma vez?", a: "Sim. Adicione quantas quiser — uma imagem é baixada direto e várias chegam juntas em um ZIP." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e todas as imagens são processadas localmente no seu navegador." },
    { q: "Por que colocar borda numa foto?", a: "Três motivos comuns: impedir que uma imagem clara se misture com uma página clara, para ela parecer um objeto definido; fazer uma foto não quadrada caber num espaço quadrado sem cortar nada; e dar a um conjunto de imagens um acabamento uniforme." },
    { q: "Como deixar a foto quadrada para o Instagram sem cortar?", a: "Adicione uma borda desigual — preenchimento só nos lados menores, até o total ficar quadrado. Nada é cortado; a foto simplesmente flutua dentro de uma moldura. É o jeito padrão de postar uma foto deitada ou em pé num feed quadrado mantendo a composição inteira." },
    { q: "Qual cor de borda funciona melhor?", a: "Branco para um visual limpo de galeria, preto para fotos de tons escuros ou clima cinematográfico, e a cor da marca para qualquer coisa publicada em conjunto. Se a foto vai ficar sobre uma página colorida, igualar a borda a essa cor faz a imagem parecer sem borda e ainda assim ganhar respiro." },
    { q: "Qual deve ser a espessura da borda?", a: "De dois a cinco por cento da largura para uma moldura discreta — o bastante para definir a borda sem virar elemento de design. Dez por cento ou mais já é um passe-partout deliberado, do tipo usado em quadros. Bordas finas em imagens muito grandes podem sumir quando a imagem é reduzida." },
    { q: "Adicionar borda muda as dimensões da imagem?", a: "Sim. A borda é acrescentada em volta da imagem, e não desenhada por cima, então a saída fica maior que a entrada em duas vezes a espessura da borda em cada direção. Se você precisa de um tamanho final exato, redimensione a imagem para menos antes e deixe a borda trazer de volta." },
    { q: "Posso usar uma borda transparente?", a: "Pode, se exportar em PNG ou WEBP. Isso preenche a imagem com espaço vazio, útil quando você precisa mudar a proporção para um layout sem criar uma moldura visível." },
    { q: "Dá para colocar uma legenda embaixo da foto?", a: "Dá. Ative a Legenda e a borda de baixo se alarga para abrir espaço, no estilo de uma Polaroid. Num lote, cada imagem recebe o próprio nome de arquivo como legenda, a não ser que você digite um texto — aí ele vale para todas." },
  ],

  security:
    "Suas imagens continuam privadas. A borda é aplicada inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "241" },

  ui: {
    // lib/image/frame FRAME_PRESETS (a moldura — feminine)
    "Classic|preset": "Clássica",
    "Golden": "Dourada",
    "Double": "Dupla",
    "Vintage": "Vintage", // i18n-same
    "Polaroid": "Polaroid", // i18n-same
    "White": "Branca",
    "Film": "Filme",
    "Minimal": "Minimalista",
    "Bold": "Marcante",
    // lib/image/frame BORDER_STYLES (a borda — feminine)
    "Solid": "Sólida",
    "Double line": "Linha dupla",
    "Dashed": "Tracejada",
    "Dotted": "Pontilhada",
    "Groove": "Sulcada",
    "Ridge": "Em relevo",
    "None": "Nenhuma",
    // lib/image/frame ASPECT_PRESETS hints (the ratios pass through)
    "Instagram": "Instagram", // i18n-same
    "Portrait": "Retrato",
    "Widescreen": "Widescreen", // i18n-same
    "Story": "Stories",
    "Classic": "Clássico",
    "DSLR": "DSLR", // i18n-same
    "Print": "Impressão",
    // AddBorderTool.tsx
    "Please select image files.": "Selecione arquivos de imagem.",
    "Added a border to 1 image.": "Borda adicionada a 1 imagem.",
    "Added a border to {n} images.": "Borda adicionada a {n} imagens.",
    "Adding the border failed.": "Não foi possível adicionar a borda.",
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "done": "pronto",
    "Clear files": "Limpar arquivos",
    "Border settings": "Configurações da borda",
    "Border Settings": "Configurações da borda",
    "Add border": "Adicionar borda",
    "Adding…": "Adicionando…",
    "Live preview of": "Prévia ao vivo de",
    "— applied to all {n} images.": "— aplicado a todas as {n} imagens.",
    "Add border to {n}": "Adicionar borda a {n}",
    "Add border & download": "Adicionar borda e baixar",
    "Presets": "Molduras prontas",
    "Aspect ratio": "Proporção",
    "The frame grows to reach the shape — the photo is never cropped.":
      "A moldura cresce até chegar na proporção — a foto nunca é cortada.",
    "Style": "Estilo",
    "Thickness": "Espessura",
    "As a percentage of the image's shortest side, so it scales with any size.":
      "Em porcentagem do lado menor da imagem, então acompanha qualquer tamanho.",
    "Corner radius": "Arredondamento dos cantos",
    "Extra depth below": "Margem extra embaixo",
    "A deeper bottom edge, the way a Polaroid has one.":
      "Uma borda de baixo mais larga, como a de uma Polaroid.",
    "Border colour": "Cor da borda",
    "Inner mat": "Passe-partout",
    "The thin second frame between the photo and the border, as in a mounted print.":
      "A segunda moldura fina entre a foto e a borda, como num quadro emoldurado.",
    "Mat width": "Largura do passe-partout",
    "Mat colour": "Cor do passe-partout",
    "Caption": "Legenda",
    "Caption text": "Texto da legenda",
    "Text size": "Tamanho do texto",
    "Each image is captioned with its own filename. Type something to use one caption for all of them.":
      "Cada imagem recebe o próprio nome de arquivo como legenda. Digite algo para usar a mesma legenda em todas.",
    "Drawn in the band below the photo, which deepens to make room.":
      "Escrita na faixa abaixo da foto, que se alarga para abrir espaço.",
    "Transparent background": "Fundo transparente",
    "Leaves everything outside the frame empty instead of filled, so the framed photo can sit on any background. The corners follow the Corner radius slider, and an aspect ratio leaves empty space around the frame rather than a thicker border.":
      "Deixa vazio tudo o que está fora da moldura, em vez de preenchido, para a foto emoldurada ficar bem sobre qualquer fundo. Os cantos seguem o controle de arredondamento, e uma proporção deixa espaço vazio em volta da moldura em vez de uma borda mais grossa.",
    "{format} cannot store transparency — the empty areas will export as solid black. Choose PNG or WEBP.":
      "{format} não guarda transparência — as áreas vazias vão sair pretas. Escolha PNG ou WEBP.",
    "Saved as {format}, which can store transparency. Raise Corner radius to round the frame's outer edge.":
      "Salvo em {format}, que guarda transparência. Aumente o arredondamento para arredondar a borda externa da moldura.",
    "Save as": "Salvar como",
  },
};

export default content;
