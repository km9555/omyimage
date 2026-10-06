import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/remover-objetos-da-foto. */
const content: ToolPageContent = {
  toolId: "remove-object",
  locale: "pt",
  name: "Remover objetos da foto",
  tagline:
    "Pinte por cima de qualquer coisa que você não quer na foto — um estranho ao fundo, uma lixeira, um fio, uma mancha — e a IA preenche o espaço combinando com o resto. Grátis, e roda inteiramente no seu navegador.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Remover Objetos da Foto Grátis — Borracha Mágica com IA | oMyImage",
  metaDescription:
    "Remova objetos, pessoas, textos e imperfeições de fotos de graça: pinte por cima e a IA preenche o fundo. Roda no seu navegador — sem upload e sem cadastro.",

  intro:
    "Remover objetos da foto apaga coisas de uma imagem do jeito que um retocador faria: você marca o que deve sair, e um modelo de IA pinta o que plausivelmente estaria atrás, combinando cores, luz e textura em volta do buraco. O oMyImage roda esse modelo — o MI-GAN, da Picsart AI Research — dentro do seu navegador, então a sua foto nunca é enviada e não existe limite diário. Pinte por cima de um turista, desenhe uma caixa em volta de uma placa, remova uma coisa de cada vez ou várias de uma vez, desfaça o que quiser e baixe a foto limpa no tamanho original.",

  sections: [
    {
      heading: "Como marcar o que vai sair",
      id: "marking",
      body: [
        "O Pincel pinta uma marca rosa sobre a imagem; faça com que ela cubra o objeto inteiro, com uma pequena folga. Inclua a sombra e qualquer reflexo do objeto, senão eles ficam para trás como um fantasma. A ferramenta Caixa marca um retângulo com um único arraste — rápido para placas, carros e qualquer coisa quadrada. A Borracha desfaz uma marca que passou do ponto.",
        "As marcas não precisam ser caprichadas. A ferramenta aumenta as marcas alguns pixels antes de preencher, para cobrir também a borda suave em volta do objeto. O que importa é que nada do objeto fique para fora da marca.",
      ],
    },
    {
      heading: "O que ela remove bem",
      id: "good-at",
      body: [
        "Coisas na frente de um fundo mais ou menos uniforme saem melhor: pessoas e carros diante de prédios, lixo na grama ou na areia, fios e postes contra o céu, uma mancha na parede, uma espinha na pele, uma migalha na toalha. O modelo foi treinado com fotos de lugares, então céu, água, folhagem, paredes, pisos e ruas são o que ele reconstrói de forma mais convincente.",
        "É mais difícil quando a área escondida tinha algo que o modelo não consegue adivinhar — metade de um rosto, uma linha de texto, a estampa de um tapete que continua atrás do objeto. Ele preenche a falha com algo liso e convincente, não com o que estava lá de verdade.",
      ],
    },
    {
      heading: "Objetos grandes: trabalhe em etapas",
      id: "passes",
      body: [
        "O modelo preenche cada área com até 512 pixels de largura e ajusta o resultado ao tamanho, então um buraco muito grande volta mais suave que o resto da foto. Para um objeto grande, remova em duas ou três partes, começando pelas bordas: cada etapa dá à próxima um entorno real para copiar. Vários objetos pequenos marcados de uma vez são preenchidos cada um separadamente, então mantêm todo o detalhe.",
        "Se um preenchimento ficar estranho, aperte Desfazer, mude a marca — maior, ou deixando de fora uma parte do fundo que confundiu o modelo — e tente de novo. Cada tentativa leva cerca de um segundo.",
      ],
    },
    {
      heading: "Desfazer, refazer e comparar",
      id: "history",
      body: [
        "Toda remoção pode ser desfeita e refeita, pelos botões ou com Ctrl+Z e Ctrl+Shift+Z. Começar de novo traz a foto original de volta. Segure o botão \"Segure para ver o original\" para alternar entre antes e depois — o jeito mais fácil de achar um preenchimento que não combinou.",
      ],
    },
    {
      heading: "IA que roda no seu aparelho",
      id: "on-device",
      body: [
        "A maioria dos removedores de objetos envia a sua foto para um servidor. Aqui é o modelo que vem até você: na primeira vez que você abre a ferramenta, ela baixa cerca de 27 MB de dados do modelo do nosso próprio site — uma barra mostra o progresso — e o navegador guarda esses dados, então as próximas visitas começam na hora. Depois disso, remover um objeto acontece no seu computador ou celular, em cerca de um segundo num notebook e alguns segundos num celular, até sem conexão.",
        "Como nada é enviado para lugar nenhum, é seguro para fotos pessoais, documentos e trabalhos de clientes.",
      ],
    },
    {
      heading: "Qualidade e formatos",
      id: "quality",
      body: [
        "A foto é editada no tamanho total — até 16,7 megapixels; qualquer coisa maior, como uma foto de 48 MP do celular, é reduzida a esse tamanho antes, e a página avisa. Só as áreas marcadas mudam: todos os outros pixels são salvos exatamente como eram. Escolha o formato original ou JPG, PNG ou WEBP. O PNG mantém a transparência; o JPG preenche as áreas transparentes com branco.",
      ],
    },
    {
      heading: "Ideias",
      id: "ideas",
      body: [
        "Tire os turistas de uma foto de viagem. Remova um fio solto, um carro estacionado ou uma lixeira de um anúncio de imóvel. Apague a etiqueta de preço de uma foto de produto, a data impressa em uma foto antiga escaneada ou uma poeira de um escaneamento. Tire um ex de uma foto de grupo, um intruso de uma foto de casamento ou um objeto de um fundo antes de usar como papel de parede.",
        "Para recortar o assunto inteiro e descartar o fundo, use o Remover fundo. Para textos e logos sobre a imagem, o Remover marca d'água já abre com a ferramenta Caixa pronta.",
      ],
    },
    {
      heading: "Fotos de produtos e anúncios",
      id: "listings",
      body: [
        "Em lojas online e anúncios de classificados, um fundo limpo vende mais: remova cabos, embalagens e objetos esquecidos ao redor do produto antes de publicar. Para manter a qualidade, marque cada coisa separadamente e confira o resultado com o botão de comparar.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "A sua foto é editada inteiramente no navegador, por um modelo que roda no seu aparelho. Nada é enviado, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como remover um objeto de uma foto",
  steps: [
    { title: "Adicione a foto", description: "Escolha uma imagem JPG, PNG ou WEBP." },
    { title: "Marque o objeto", description: "Pinte por cima com o pincel ou arraste uma caixa em volta — sombra incluída." },
    { title: "Remova e baixe", description: "Clique em Remover objeto, confira o resultado e clique em Baixar imagem." },
  ],

  features: [
    { icon: "ink_eraser", title: "Pincel, caixa e borracha", description: "Marque com precisão e desfaça ou refaça cada remoção." },
    { icon: "smart_toy", title: "Preenchimento com IA em um segundo", description: "O MI-GAN reconstrói o fundo combinando com o entorno." },
    { icon: "lock", title: "Nunca enviada", description: "A IA roda no seu navegador, no seu aparelho." },
  ],

  faqs: [
    { q: "Como remover um objeto de uma foto?", a: "Adicione a foto, pinte o objeto com o pincel e clique em Remover objeto. Depois baixe o resultado." },
    { q: "É grátis mesmo?", a: "Sim. Sem conta, sem marca d'água e sem limite diário, porque a IA roda no seu próprio aparelho." },
    { q: "A minha foto é enviada?", a: "Não. O modelo de IA é baixado para o navegador e a foto nunca sai do seu aparelho." },
    { q: "Por que a primeira remoção demora mais?", a: "Na primeira vez o navegador baixa o modelo de IA de 27 MB. Ele fica guardado, e as próximas visitas começam na hora." },
    { q: "Dá para tirar pessoas de uma foto?", a: "Dá. Pinte a pessoa e a sombra dela; funciona melhor quando ela está na frente de um fundo mais simples." },
    { q: "Dá para remover vários objetos de uma vez?", a: "Dá. Marque todos e clique em Remover objeto uma vez — cada um é preenchido separadamente." },
    { q: "O resultado ficou borrado — o que fazer?", a: "Desfaça e remova o objeto grande em partes menores, começando pelas bordas. Áreas pequenas mantêm todo o detalhe." },
    { q: "Posso desfazer uma remoção?", a: "Pode — Desfazer, Refazer e Começar de novo, ou Ctrl+Z e Ctrl+Shift+Z." },
    { q: "A foto perde qualidade?", a: "Não. Só as áreas marcadas mudam, e a foto mantém o tamanho até 16,7 megapixels." },
    { q: "Funciona sem internet?", a: "Depois que o modelo carrega, sim: remover objetos não precisa de conexão." },
    { q: "Funciona no celular?", a: "Funciona. Pinte com o dedo; cada remoção leva alguns segundos no celular." },
    { q: "Quais formatos são aceitos?", a: "JPG, PNG e WEBP na entrada, e o mesmo formato ou qualquer um dos três na saída." },
    { q: "Dá para remover o fundo inteiro?", a: "Para isso use o Remover fundo — ele recorta o assunto e deixa o fundo transparente." },
  ],

  security:
    "A sua foto é editada inteiramente no navegador, por um modelo que roda no seu aparelho. Nada é enviado, guardado ou rastreado.",

  ui: {
    // InpaintTool.tsx — shared with remove-watermark, whose module reuses this block.
    "or drop a JPG, PNG or WEBP image here": "ou solte uma imagem JPG, PNG ou WEBP aqui",
    "Marking tool": "Ferramenta de marcação",
    "Brush": "Pincel",
    "Box": "Caixa",
    "Eraser": "Borracha",
    "Drag a box over the area to remove.": "Arraste uma caixa sobre a área a remover.",
    "Paint over a mark to take it back.": "Pinte sobre uma marca para desfazê-la.",
    "Paint over every letter of the watermark, including its outline or shadow.": "Pinte cada letra da marca d'água, incluindo o contorno ou a sombra.",
    "Paint over the whole object, including its shadow and reflection.": "Pinte o objeto inteiro, incluindo a sombra e o reflexo.",
    "Brush size": "Tamanho do pincel",
    "Clear marks": "Limpar marcas",
    "Undo": "Desfazer",
    "Redo": "Refazer",
    "Start over": "Começar de novo",
    "AI model ready — it runs on your device.": "Modelo de IA pronto — ele roda no seu aparelho.",
    "The AI model could not be loaded.": "Não foi possível carregar o modelo de IA.",
    "Try again": "Tentar de novo",
    "Loading the AI model…": "Carregando o modelo de IA…",
    "Only on the first visit — after that your browser keeps it.": "Só na primeira visita — depois o navegador guarda o modelo.",
    "Output format": "Formato de saída",
    "Same as original": "Igual ao original",
    "Your image never leaves your device: the AI runs in your browser.": "A sua imagem nunca sai do aparelho: a IA roda no navegador.",
    "Remove watermark": "Remover marca d'água",
    "Remove object": "Remover objeto",
    "Removing…": "Removendo…",
    "Download image": "Baixar imagem",
    "Mark the watermark first — draw a box around it or paint over it.": "Marque a marca d'água primeiro — desenhe uma caixa em volta ou pinte por cima.",
    "Paint over what you want to remove first.": "Primeiro pinte o que você quer remover.",
    "Picture — mark the watermark here": "Imagem — marque a marca d'água aqui",
    "Picture — mark what to remove here": "Imagem — marque aqui o que remover",
    "Mark the watermark, then click Remove watermark.": "Marque a marca d'água e clique em Remover marca d'água.",
    "Mark what you want gone, then click Remove object.": "Marque o que deve sair e clique em Remover objeto.",
    "Hold to see the original": "Segure para ver o original",
    "This photo is very large, so it is edited and saved at {w} × {h} px.": "Esta foto é muito grande, então é editada e salva com {w} × {h} px.",
  },
};

export default content;
