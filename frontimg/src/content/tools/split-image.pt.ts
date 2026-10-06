import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/dividir-imagem. BR "dividir imagem" 9.9K/mo. */
const content: ToolPageContent = {
  toolId: "split-image",
  locale: "pt",
  name: "Dividir imagem",
  tagline:
    "Corte qualquer imagem em partes iguais — duas metades, três tiras, uma grade 3 × 3 — ou em blocos de um tamanho exato em pixels. Todas as partes chegam em um único ZIP, nomeadas em ordem. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },
  variantsHeading: "Dividir uma imagem ou montar uma grade para o Instagram",

  metaTitle: "Dividir Imagem Online Grátis — Cortar Foto em Partes Iguais | oMyImage",
  metaDescription:
    "Divida uma imagem em partes iguais online e grátis: duas metades, grade 3×3 ou blocos de qualquer tamanho em pixels. Todas as partes em um ZIP. No navegador, sem upload.",

  intro:
    "Dividir uma imagem é cortá-la em imagens menores que se encaixam de volta com perfeição. O Dividir imagem do oMyImage faz isso de dois jeitos: em uma grade igual, em que você escolhe o número de colunas e linhas, ou em blocos de tamanho fixo, em que você define a largura e a altura de cada parte em pixels. Linhas na prévia mostram exatamente onde ficam os cortes, cada parte recebe um número e o conjunto inteiro é baixado em um único ZIP — ou você clica em uma parte só para salvar apenas ela. Adicione várias imagens e cada uma é dividida do mesmo jeito.",

  sections: [
    {
      heading: "Grade igual ou tamanho do bloco",
      id: "modes",
      body: [
        "A grade igual divide a imagem no número de partes que você pedir: 2 colunas e 1 linha dão uma metade esquerda e uma direita, 1 coluna e 3 linhas dão três tiras horizontais, 3 × 3 dá nove partes. As partes ficam tão iguais quanto os pixels permitem — quando a largura não divide exatamente, algumas partes ficam com um pixel a mais, nunca com uma tirinha fina sobrando no fim.",
        "O tamanho do bloco funciona ao contrário: você define o tamanho de cada parte, por exemplo 512 × 512 pixels, e a imagem é cortada a partir do canto superior esquerdo em quantos blocos couberem. A última linha e a última coluna ficam com o que sobrar, por isso podem ser menores. É o modo para mapas de jogos, folhas de texturas e tudo que espera blocos de tamanho fixo.",
      ],
    },
    {
      heading: "Jeitos comuns de dividir",
      id: "layouts",
      body: [
        "Duas metades lado a lado (2 × 1) separam um escaneamento de duas páginas ou uma foto de antes e depois. Metade de cima e de baixo (1 × 2) dividem um print comprido do celular. Três tiras verticais (3 × 1) formam um tríptico para três quadros na parede. Uma grade 3 × 3 ou 4 × 4 transforma uma foto em quebra-cabeça, em pôster para imprimir ou em peças de um mosaico.",
        "Os botões rápidos acima dos controles deslizantes aplicam essas divisões com um toque; os controles vão até 20 colunas e 20 linhas.",
      ],
    },
    {
      heading: "Imprima um pôster grande em papel comum",
      id: "poster",
      body: [
        "Uma impressora doméstica não imprime um pôster de um metro, mas imprime quatro ou nove partes dele. Divida a imagem em uma grade com o formato do papel — 2 × 2 ou 3 × 3 para um pôster com o mesmo formato da foto —, imprima todas as partes no mesmo tamanho, sem a opção de ajustar à página, apare as margens brancas e junte as folhas com fita pelo verso.",
        "Comece pelo maior original que você tiver. Cada parte é impressa muito maior do que aparece na tela, então uma foto pequena fica borrada; uma foto de 6000 pixels de largura dividida em 3 colunas ainda dá 2000 pixels por folha, o que sai nítido em A4.",
      ],
    },
    {
      heading: "Blocos para jogos, mapas e sites",
      id: "tiles",
      body: [
        "Motores de jogos, visualizadores de mapas e alguns sites carregam imagens grandes como uma grade de blocos, para buscar só a parte visível. Escolha Tamanho do bloco e defina o tamanho que o programa espera — 256 ou 512 pixels são comuns — e os arquivos saem nomeados por linha e coluna, prontos para carregar em sequência.",
        "O modo de blocos também é o jeito mais rápido de fatiar um print muito comprido ou um infográfico em páginas: use a largura total da imagem como largura do bloco e a altura de uma tela como altura.",
      ],
    },
    {
      heading: "Partes que se encaixam com exatidão",
      id: "exact",
      body: [
        "Cada parte é uma cópia direta do seu pedaço do original — nada é redimensionado, nada se sobrepõe e nenhum pixel se perde entre vizinhas, então as partes se encaixam de volta sem frestas. Salvas em PNG, são idênticas ao original pixel por pixel; partes em JPG e WEBP são recomprimidas na qualidade que você escolher, o que normalmente não se nota, mas pode aparecer como emendas leves em cores lisas. Use PNG quando as partes forem juntadas de novo.",
      ],
    },
    {
      heading: "Arquivos, nomes e formatos",
      id: "names",
      body: [
        "As partes levam o nome da imagem com a linha e a coluna — ferias_r1_c1.jpg, ferias_r1_c2.jpg e assim por diante —, com zeros à esquerda quando passam de nove, para ficarem na ordem certa em qualquer pasta. Quando você divide várias imagens de uma vez, as partes de cada uma vão para uma pasta própria dentro do ZIP.",
        "As partes mantêm o formato original, a menos que você escolha outro. PNG e WEBP mantêm a transparência; o JPG preenche as áreas transparentes com a cor de fundo escolhida.",
      ],
    },
    {
      heading: "Dividir uma foto para o Instagram",
      id: "instagram",
      body: [
        "Uma grade no perfil do Instagram ou um panorama em carrossel pedem mais do que um corte simples: a foto precisa ser recortada no formato certo, cada parte precisa ter o tamanho do Instagram e os posts precisam ser publicados na ordem inversa. O Dividir foto para Instagram faz tudo isso — use-o no lugar desta página para uma grade de 3 colunas ou um carrossel.",
      ],
    },
    {
      heading: "Quadrinhos, cardápios e documentos",
      id: "documents",
      body: [
        "Uma página de quadrinhos escaneada se divide em quadros com uma grade do mesmo formato, prontos para postar um por vez. Um cardápio ou folheto comprido fotografado de uma vez só pode ser cortado em páginas para um site. Em escaneamentos de livro com duas páginas, 2 × 1 entrega a página esquerda e a direita como imagens separadas, que depois podem ir para o Imagem para PDF.",
      ],
    },
    {
      heading: "Partes do mesmo tamanho para impressão de fotos",
      id: "print-sizes",
      body: [
        "Para imprimir as partes em um serviço de revelação, escolha uma grade que dê partes com a proporção do papel da foto. Uma imagem 3:2 dividida em 2 × 2 dá quatro partes também 3:2, que cabem certinho em fotos 10 × 15 sem cortes; o mesmo vale para 3 × 3. Se a proporção não bater, o laboratório corta as bordas e a imagem não se encaixa mais.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada imagem é dividida inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como dividir uma imagem",
  steps: [
    { title: "Adicione a imagem", description: "Escolha uma ou mais imagens JPG, PNG ou WEBP." },
    { title: "Escolha os cortes", description: "Escolha uma grade como 2 × 1 ou 3 × 3, ou defina um tamanho exato de bloco em pixels." },
    { title: "Divida e baixe", description: "Clique em Dividir imagem para receber todas as partes em um ZIP, ou clique em uma parte para salvar só ela." },
  ],

  features: [
    { icon: "view_column", title: "Grade ou tamanho do bloco", description: "Até 20 × 20 partes iguais, ou blocos de qualquer tamanho em pixels." },
    { icon: "folder_zip", title: "Todas as partes em um ZIP", description: "Nomeadas por linha e coluna, para ficarem em ordem." },
    { icon: "lock", title: "Sem upload", description: "Dividida inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como dividir uma imagem em partes iguais?", a: "Adicione a imagem, escolha o número de colunas e linhas e clique em Dividir imagem. As partes são baixadas juntas em um ZIP." },
    { q: "Como cortar uma imagem ao meio?", a: "Escolha 2 × 1 para metade esquerda e direita, ou 1 × 2 para metade de cima e de baixo." },
    { q: "Dá para dividir uma imagem em uma grade 3 × 3?", a: "Dá. Toque em 3 × 3 ou coloque os dois controles em 3 — você recebe nove partes numeradas a partir do canto superior esquerdo." },
    { q: "Dá para cortar blocos de um tamanho exato?", a: "Dá. Escolha Tamanho do bloco e digite a largura e a altura em pixels. A última linha e a última coluna ficam menores se o tamanho não dividir certinho." },
    { q: "As partes perdem qualidade?", a: "Nada é redimensionado. Em PNG elas são idênticas ao original; JPG e WEBP são salvos de novo na qualidade escolhida." },
    { q: "Posso baixar só uma parte?", a: "Pode. Depois de dividir, clique em qualquer parte abaixo da prévia para salvá-la sozinha." },
    { q: "Posso dividir várias imagens de uma vez?", a: "Pode. Cada imagem é dividida do mesmo jeito e ganha uma pasta própria no ZIP." },
    { q: "Como os arquivos são nomeados?", a: "Por linha e coluna, como foto_r2_c3.png, para ficarem em ordem." },
    { q: "A transparência é mantida?", a: "Sim, em PNG ou WEBP. O JPG preenche as áreas transparentes com uma cor." },
    { q: "Quantas partes posso fazer?", a: "Até 20 × 20 na grade, e até 400 partes por imagem no modo de blocos." },
    { q: "Como dividir uma foto para uma grade do Instagram?", a: "Use o Dividir foto para Instagram — ele recorta no formato certo, dimensiona os posts e numera na ordem de publicação." },
    { q: "Minhas imagens são enviadas para algum servidor?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Funciona, em qualquer navegador. As partes chegam em um ZIP que o celular consegue abrir." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limites." },
  ],

  security:
    "Suas imagens são divididas inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // SplitTool.tsx — also rendered by instagram-grid-maker, whose page gets
    // this block merged under its own (expansion.md §2).
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "or drop a JPG, PNG or WEBP image here": "ou solte uma imagem JPG, PNG ou WEBP aqui",
    "Preview": "Prévia",
    "The lines show where the image will be cut.": "As linhas mostram onde a imagem será cortada.",
    "Pieces": "Partes",
    "Click a piece to download just that one.": "Clique em uma parte para baixar só ela.",
    "1 piece": "1 parte",
    "{n} pieces": "{n} partes",
    "Done — 1 image saved.": "Pronto — 1 imagem salva.",
    "Done — {n} pieces saved.": "Pronto — {n} partes salvas.",
    "Split image": "Dividir imagem",
    "Split by": "Dividir por",
    "Equal grid": "Grade igual",
    "Tile size": "Tamanho do bloco",
    "Columns": "Colunas",
    "Rows": "Linhas",
    "Tile width (px)": "Largura do bloco (px)",
    "Tile height (px)": "Altura do bloco (px)",
    "Each piece:": "Cada parte:",
    "The size does not divide evenly, so some pieces are 1 px wider or taller.": "O tamanho não divide certinho, então algumas partes ficam com 1 px a mais de largura ou altura.",
    "The last row and column are smaller — they take what is left.": "A última linha e a última coluna são menores — ficam com o que sobra.",
    "Too many pieces — use bigger tiles (up to 400 pieces per image).": "Partes demais — use blocos maiores (até 400 partes por imagem).",
    "For the first image — every image is split the same way.": "Valores da primeira imagem — todas são divididas do mesmo jeito.",
    "Output format": "Formato de saída",
    "Same as original": "Igual ao original",
    "JPG background": "Fundo do JPG",
    "Your images are processed in your browser and never uploaded.": "Suas imagens são processadas no navegador e nunca são enviadas.",
    // Instagram mode
    "Make the grid": "Criar a grade",
    "Make the carousel": "Criar o carrossel",
    "Layout": "Formato",
    "Profile grid": "Grade do perfil",
    "Carousel": "Carrossel",
    "Three posts per row, like your profile.": "Três posts por linha, como no seu perfil.",
    "Slides": "Slides", // i18n-same — the word Instagram uses in Brazil
    "Post shape": "Formato do post",
    "Matches the profile grid exactly.": "Igual à grade do perfil.",
    "The classic tall post. The grid trims a sliver off each side.": "O post vertical clássico. A grade corta uma tirinha de cada lado.",
    "Square posts. The grid trims their sides.": "Posts quadrados. A grade corta as laterais.",
    "Tall slides that fill the most screen.": "Slides verticais, que ocupam mais tela.",
    "Square slides.": "Slides quadrados.",
    "Horizontal position": "Posição horizontal",
    "Vertical position": "Posição vertical",
    "{n} posts": "{n} posts", // i18n-same — "post" is the Brazilian word
    "{n} slides": "{n} slides", // i18n-same
    "Each one:": "Cada um:",
    "Your picture is narrower than Instagram's 1080 px per post, so the pieces keep its own resolution.": "Sua foto tem menos que os 1080 px por post do Instagram, então as partes mantêm a resolução dela.",
    "Post them in number order: 1 first, the top-left piece last.": "Publique na ordem dos números: o 1 primeiro e a parte do canto superior esquerdo por último.",
    "Add the slides to one post in number order, 1 first.": "Adicione os slides a um único post na ordem dos números, o 1 primeiro.",
    "Drag the picture to choose what goes into the posts.": "Arraste a foto para escolher o que entra nos posts.",
  },
};

export default content;
