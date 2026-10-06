import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/inverter-cores-da-imagem. */
const content: ToolPageContent = {
  toolId: "invert-image",
  locale: "pt",
  name: "Inverter cores da imagem",
  tagline:
    "Inverta as cores de qualquer foto — um negativo clássico, ou uma inversão inteligente que troca claro e escuro mas mantém as cores. Várias imagens de uma vez. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Inverter Cores da Imagem Online Grátis — Negativo de Foto | oMyImage",
  metaDescription:
    "Inverta as cores de imagens online e grátis: transforme uma foto em negativo, ou troque claro e escuro mantendo os tons. JPG, PNG e WEBP, várias de uma vez. No navegador, sem upload.",

  intro:
    "Inverter uma imagem transforma cada cor no seu oposto: o preto vira branco, o azul vira laranja, e a foto fica com cara de negativo de filme. O Inverter cores da imagem do oMyImage faz isso com um clique em arquivos JPG, PNG e WEBP, e traz um segundo modo que a maioria das ferramentas não tem — a Inversão inteligente, que troca claro e escuro mas mantém o tom de cada cor, como o modo escuro do celular. Adicione uma imagem ou um lote, veja a prévia ao vivo, segure o botão para comparar com o original e baixe.",

  sections: [
    {
      heading: "Negativo ou inversão inteligente",
      id: "modes",
      body: [
        "O Negativo inverte cada canal de cor: cada valor vira 255 menos ele mesmo. Brancos viram pretos, vermelhos viram ciano, verdes viram magenta, e a pele fica azul-acinzentada — o visual de um negativo de filme ou de um raio X. Inverter o resultado de novo devolve o original exatamente.",
        "A Inversão inteligente inverte só a luminosidade. Áreas escuras ficam claras e áreas claras ficam escuras, mas o vermelho continua vermelho e o azul continua azul. É a escolha certa para transformar um print ou documento branco numa versão escura sem que as cores fiquem estranhas, e para dar um ar noturno a uma foto.",
      ],
    },
    {
      heading: "Para que serve",
      id: "uses",
      body: [
        "Faça uma versão em modo escuro de um print, diagrama ou slide para combinar com um site ou apresentação escura. Inverta uma imagem de fundo preto para branco antes de imprimir, economizando tinta e toner. Transforme um negativo preto e branco escaneado de volta numa foto positiva. Crie artes, pôsteres e fotos de perfil marcantes com o visual invertido.",
        "Designers também invertem imagens para avaliar uma composição: sem as cores conhecidas, problemas de equilíbrio e contraste ficam mais fáceis de ver.",
      ],
    },
    {
      heading: "Negativos de filme escaneados",
      id: "negatives",
      body: [
        "Negativos preto e branco viram positivos sem problemas. Os coloridos são mais chatos: o filme tem uma base laranja, então a inversão direta sai com uma forte dominante azul. Inverta primeiro e depois use o Brilho e contraste para clarear a imagem e baixar a saturação, ou converta com Imagem em preto e branco se a cor não importar.",
      ],
    },
    {
      heading: "Transparência e formatos",
      id: "formats",
      body: [
        "Só as cores são invertidas; a transparência fica exatamente como estava, então um logotipo em fundo transparente continua num fundo transparente. PNG e WEBP mantêm essa transparência; o JPG não tem, então as áreas transparentes são preenchidas com a cor de fundo que você escolher.",
        "O resultado mantém o formato original, a não ser que você escolha outro. O PNG guarda os pixels invertidos exatamente; JPG e WEBP usam o controle de qualidade, que você pode aumentar se os detalhes finos importarem.",
      ],
    },
    {
      heading: "Várias imagens de uma vez",
      id: "batch",
      body: [
        "Adicione quantas imagens quiser. A prévia mostra a primeira, e o mesmo modo é aplicado a todas quando você clica em Inverter cores. Uma imagem é baixada direto; várias vêm num único arquivo ZIP. Cada arquivo da lista também ganha o seu próprio botão de download quando fica pronto.",
      ],
    },
    {
      heading: "Invertendo logotipos e ícones",
      id: "logos",
      body: [
        "Um logotipo escuro que some num site escuro vira um logotipo claro depois de invertido — desde que ele tenha uma cor escura só. Logotipos coloridos também mudam de cor, então a Inversão inteligente, que mantém os tons, costuma combinar melhor com eles. Confira a prévia contra o fundo onde o logotipo vai ficar antes de baixar.",
      ],
    },
    {
      heading: "Imprimindo prints escuros",
      id: "print",
      body: [
        "Prints de tela de aplicativos em modo escuro gastam muita tinta e ficam pesados no papel. Inverta com a Inversão inteligente antes de imprimir: o fundo fica branco, o texto fica escuro e os destaques coloridos continuam reconhecíveis.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada imagem é invertida inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como inverter as cores de uma imagem",
  steps: [
    { title: "Adicione imagens", description: "Selecione uma ou mais imagens JPG, PNG ou WEBP." },
    { title: "Escolha o modo", description: "Negativo para o oposto real, Inversão inteligente para manter os tons." },
    { title: "Inverta e baixe", description: "Clique em Inverter cores para baixar a imagem, ou um ZIP se forem várias." },
  ],

  features: [
    { icon: "dark_mode", title: "Dois tipos de inversão", description: "Um negativo completo, ou claro e escuro trocados com os tons mantidos." },
    { icon: "visibility", title: "Prévia ao vivo", description: "Veja o resultado na hora e segure para comparar com o original." },
    { icon: "lock", title: "Sem upload", description: "Invertida inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como inverter as cores de uma imagem?", a: "Adicione a imagem, deixe Negativo selecionado e clique em Inverter cores. A imagem invertida é baixada na hora." },
    { q: "Qual a diferença entre Negativo e Inversão inteligente?", a: "O Negativo transforma cada cor no seu oposto. A Inversão inteligente só troca claro e escuro, então as cores mantêm o tom." },
    { q: "Dá para fazer um print em modo escuro?", a: "Sim. A Inversão inteligente deixa um print branco escuro, com os elementos coloridos reconhecíveis." },
    { q: "A transparência é mantida?", a: "Sim. Só as cores mudam; salve como PNG ou WEBP para manter as áreas transparentes." },
    { q: "Dá para inverter várias imagens de uma vez?", a: "Sim. Adicione todas; elas são baixadas juntas num ZIP." },
    { q: "Dá para voltar ao original?", a: "Inverter um Negativo de novo restaura a imagem. Para um vaivém perfeito, salve como PNG." },
    { q: "Dá para transformar um negativo de filme em foto?", a: "Sim, em negativos preto e branco. Os coloridos precisam de uma pequena correção de cor depois." },
    { q: "Quais formatos funcionam?", a: "Entram JPG, PNG e WEBP; sai o mesmo formato ou o que você escolher." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, em qualquer navegador do celular." },
    { q: "Perde qualidade?", a: "O PNG é exato. JPG e WEBP são salvos de novo na qualidade escolhida." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Serve para economizar tinta na impressão?", a: "Sim. Inverta prints e imagens de fundo escuro antes de imprimir para o papel ficar branco." },
  ],

  security:
    "Suas imagens são invertidas inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // FxTool.tsx — shared with pixelate-image, image-brightness, glitch-effect
    // and round-corners, whose modules reuse this block.
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "Preview": "Prévia",
    "Live preview of": "Prévia ao vivo de",
    "— applied to all {n} images.": "— aplicado às {n} imagens.",
    "Hold to see the original": "Segure para ver o original",
    "done": "pronto",
    "Done — 1 image saved.": "Pronto — 1 imagem salva.",
    "Done — {n} images saved.": "Pronto — {n} imagens salvas.",
    "Output format": "Formato de saída",
    "Same as original": "Igual ao original",
    "JPG background": "Fundo do JPG",
    "Your images are processed in your browser and never uploaded.": "Suas imagens são processadas no navegador e nunca são enviadas.",
    // invert
    "Invert": "Inverter",
    "Invert colours": "Inverter cores",
    "Negative": "Negativo",
    "Smart invert": "Inversão inteligente",
    "Every colour becomes its opposite, like a film negative.": "Cada cor vira o seu oposto, como um negativo de filme.",
    "Light and dark swap but colours keep their hue — a dark-mode look.": "Claro e escuro se invertem, mas as cores mantêm o tom — um visual de modo escuro.",
    // pixelate
    "Pixelate image": "Pixelar",
    "Block size": "Tamanho do bloco",
    "About {n} blocks along the longer side.": "Cerca de {n} blocos no lado maior.",
    // adjust
    "Brightness": "Brilho",
    "Contrast": "Contraste",
    "Saturation": "Saturação",
    "Apply adjustments": "Aplicar ajustes",
    // glitch
    "Strength": "Intensidade",
    "Colour split": "Separação de cores",
    "Shifted slices": "Faixas deslocadas",
    "Scan lines": "Linhas de varredura",
    "Shuffle the slices": "Embaralhar as faixas",
    "Apply glitch": "Aplicar glitch",
    // corners
    "Corner radius": "Raio dos cantos",
    "A share of the shorter side. 50% makes a pill, or a circle for square images.": "Uma parte do lado menor. 50% faz uma pílula, ou um círculo em imagens quadradas.",
    "Corners": "Cantos",
    "Top left": "Em cima à esquerda",
    "Top right": "Em cima à direita",
    "Bottom left": "Embaixo à esquerda",
    "Bottom right": "Embaixo à direita",
    "Corner background": "Fundo dos cantos",
    "JPG has no transparency, so the corners are filled with the background colour.": "O JPG não tem transparência, então os cantos são preenchidos com a cor de fundo.",
    "Round the corners": "Arredondar cantos",
  },
};

export default content;
