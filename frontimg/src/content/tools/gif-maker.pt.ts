import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/criar-gif.
 *
 * Head term "criar GIF" / "criar GIF online" — FlexClip /pt, Figma, Picasion
 * /pt and Adobe Express BR all title on it; "fazer GIF", "GIF animado" and
 * "juntar fotos em GIF" live in aliases.ts. "Criador de GIF" is the product
 * noun competitors use in the H1, but Brazilians search the verb.
 */
const content: ToolPageContent = {
  toolId: "gif-maker",
  locale: "pt",
  name: "Criar GIF",
  tagline:
    "Crie um GIF animado com suas imagens online — ajuste a velocidade, a ordem, o tamanho e a repetição com prévia ao vivo. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Criar GIF online grátis — GIF animado com suas fotos | oMyImage",
  metaDescription:
    "Crie GIF animado online e grátis com suas fotos: ajuste velocidade, ordem, tamanho e repetição com prévia ao vivo e baixe na hora. Sem cadastro e sem enviar nada.",

  intro:
    "Criar um GIF é transformar uma sequência de imagens numa animação que se repete. O Criar GIF do oMyImage monta um GIF animado com as suas fotos direto no navegador, com prévia ao vivo, velocidade ajustável, tamanho de saída, repetição e reordenação dos quadros. Faça apresentações, GIFs de reação ou animações simples e baixe na hora — nada é enviado, então suas imagens continuam privadas. Também dá para abrir um GIF pronto e editar os quadros dele.",

  sections: [
    {
      heading: "Por que o GIF sobrevive",
      id: "why",
      body: [
        "Por qualquer critério técnico, o GIF deveria ter sumido há décadas. Ele é de 1987, tem no máximo 256 cores por quadro, comprime mal, e um vídeo faz o mesmo trabalho com uma fração do tamanho e muito mais qualidade.",
        "Ele sobrevive pelo que não precisa. Um GIF toca sozinho, repete para sempre, não precisa de player, de controles nem de um toque do usuário, e funciona onde vídeo não funciona — apps de conversa, arquivos README em sites de código, alguns clientes de e-mail, fóruns e qualquer sistema que trate o arquivo simplesmente como imagem.",
        "A conta é só essa. Se o destino aceita vídeo, use vídeo. Se aceita imagens e mais nada, o GIF é a única opção animada que você tem.",
      ],
    },
    {
      heading: "O limite de 256 cores",
      id: "colours",
      body: [
        "O GIF guarda uma paleta de no máximo 256 cores por quadro, e cada pixel precisa ser uma delas. Para ilustração chapada, desenho de linha, gravações de tela de interfaces e animações de logotipo isso sobra — esse tipo de imagem raramente tem mais cores diferentes do que isso.",
        "Fotos são o caso difícil. Um único quadro de uma cena real tem milhares de cores diferentes, então o codificador precisa escolher 256 e aproximar o resto. O pontilhado (dithering) espalha pixels de cores vizinhas da paleta para imitar os tons intermediários, e é por isso que GIFs de fotos têm aquela cara granulada, mais visível no céu e na pele.",
        "Dentro do formato não há o que fazer. Se as faixas de cor forem inaceitáveis, a resposta é um vídeo, e não um GIF melhor.",
      ],
    },
    {
      heading: "Como controlar o tamanho do arquivo",
      id: "size",
      body: [
        "Três coisas definem o tamanho, e as dimensões mandam. Cada quadro guarda a imagem inteira, então cortar a largura e a altura pela metade reduz os dados de cada um a um quarto — é de longe a alavanca mais eficaz, e um GIF de 480 pixels de largura fica ótimo numa conversa ou num README.",
        "Depois vem o número de quadros. Menos quadros deixam a animação mais picotada, mas o arquivo fica proporcionalmente menor, e muitas animações ficam boas com 8 a 12 quadros por segundo em vez de 24. Cortar a sequência para ficar só com os quadros que mostram a ação costuma não doer nada.",
        "O terceiro é a duração do ciclo. Uma animação de dois segundos que se repete para sempre é mais gostosa de ver do que uma de dez segundos, e é cinco vezes menor. Resistir à vontade de incluir tudo é o melhor hábito aqui.",
      ],
    },
    {
      heading: "Tempo e ritmo",
      id: "timing",
      body: [
        "O intervalo entre quadros define o ritmo. Uns 100 ms por quadro dão cerca de dez quadros por segundo — fluido o bastante para a maioria das animações curtas sem o custo de uma taxa maior. Abaixo de uns 60 ms você paga muitos bytes por uma fluidez que pouca gente percebe.",
        "Intervalos maiores transformam a animação numa apresentação de slides, o que muitas vezes é exatamente o que você quer. Um passo a passo, os ângulos de um produto ou um antes e depois ficam melhores com 500 a 800 ms por quadro, dando tempo de ver cada um antes de mudar.",
        "Um toque prático: se a animação se repete para sempre, segurar o último quadro um pouco mais dá ao olho um instante para respirar e evita que ela pareça frenética. Cada quadro pode ter o próprio intervalo, então basta mudar só o último.",
      ],
    },
  ],

  howToTitle: "Como criar um GIF animado",
  steps: [
    { title: "Envie os quadros", description: "Selecione duas ou mais imagens, ou arraste e solte na área de trabalho." },
    { title: "Ajuste o tempo", description: "Reordene os quadros, defina a velocidade geral ou por quadro e escolha tamanho, encaixe, cores e repetição — tudo com prévia ao vivo." },
    { title: "Crie e baixe", description: "Clique em Criar GIF — ele é montado no navegador, mostra a animação pronta e o tamanho dela, e você baixa quando estiver satisfeito." },
  ],

  features: [
    { icon: "gif_box", title: "Prévia animada ao vivo", description: "Veja a animação tocando na velocidade exata antes de exportar — sem adivinhação." },
    { icon: "speed", title: "Controle total", description: "Defina o intervalo geral ou por quadro, inverta a sequência ou faça um bumerangue, e escolha tamanho de saída, encaixe, número de cores, repetição e fundo." },
    { icon: "lock", title: "100% privado", description: "O GIF é codificado inteiramente no seu navegador — suas imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Quantas imagens posso usar?", a: "Pelo menos duas, e quantas quiser — cada imagem vira um quadro da animação." },
    { q: "Posso controlar a velocidade?", a: "Sim, em dois níveis. O controle de intervalo define o tempo padrão de cada quadro, mostrado em milissegundos e em quadros por segundo, e qualquer quadro pode ter o próprio intervalo — útil para segurar num quadro de título ou no final." },
    { q: "E se as minhas imagens tiverem tamanhos diferentes?", a: "Elas são encaixadas numa tela comum, do tamanho necessário para caber todas. Conter mostra cada quadro inteiro e completa a diferença com a cor de fundo, Cobrir preenche a tela e corta o excesso, e Esticar força o encaixe exato." },
    { q: "Posso editar um GIF que já existe?", a: "Sim. Solte um GIF e ele é separado de volta em quadros, mantendo o intervalo original de cada um. A partir daí você pode reordenar, excluir, mudar o tempo, inverter ou fazer bumerangue e exportar de novo." },
    { q: "O GIF pode ter fundo transparente?", a: "Sim — escolha Transparente em vez de uma cor e as áreas transparentes das imagens continuam transparentes. No GIF a transparência é tudo ou nada em cada pixel, então bordas suavizadas viram bordas duras; se isso importar, coloque uma cor sólida atrás." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e o GIF é montado localmente no seu navegador." },
    { q: "Por que meu GIF ficou tão grande?", a: "Porque o GIF é um formato antigo, com compressão fraca e sem como descartar detalhes do jeito que os codecs modernos fazem. Cada quadro soma no arquivo, e conteúdo fotográfico é o pior caso. Diminuir as dimensões, reduzir o número de quadros e encurtar o ciclo são as três alavancas que importam." },
    { q: "Como deixo o arquivo menor?", a: "Reduza primeiro as dimensões em pixels — cortar largura e altura pela metade deixa cada quadro com um quarto do tamanho. Depois use menos quadros e mantenha o ciclo curto. Um GIF de 480 pixels de largura com 15 quadros é um alvo sensato; 800 pixels e 60 quadros raramente é." },
    { q: "Por que as cores ficam em faixas?", a: "O GIF aceita no máximo 256 cores, então qualquer coisa com degradê — céu, tons de pele, sombras — precisa ser aproximada, e os degraus entre as cores que sobram aparecem como faixas. Esta ferramenta monta uma paleta única para a animação inteira, o que mantém as cores estáveis de um quadro para o outro em vez de deixá-las mudar. Gráficos chapados e ilustrações lidam com o limite muito melhor do que fotos." },
    { q: "Qual intervalo entre quadros devo usar?", a: "Uns 100 ms por quadro dão cerca de 10 quadros por segundo, o que parece fluido para a maioria das animações curtas. Intervalos menores ficam mais fluidos, mas multiplicam o tamanho do arquivo; maiores parecem apresentação de slides, o que muitas vezes é a escolha certa para um passo a passo." },
    { q: "Posso fazer um GIF a partir de um vídeo?", a: "Não com esta ferramenta — ela monta o GIF a partir de imagens paradas que você envia. Você precisaria extrair os quadros do vídeo antes. Para uma sequência de prints, ângulos de produto ou um stop-motion, esta é exatamente a ferramenta certa." },
    { q: "Uso GIF ou vídeo?", a: "Vídeo, quase sempre, se a plataforma aceitar — um MP4 curto tem uma fração do tamanho e muito mais qualidade. O GIF só ganha onde tocar sozinho em qualquer lugar, sem player, é o que importa: apps de conversa, arquivos README, alguns clientes de e-mail e fóruns antigos." },
  ],

  security:
    "Suas imagens continuam privadas. O GIF é codificado inteiramente no seu navegador com a biblioteca de código aberto gifenc — e um GIF importado também é decodificado ali, com a gifuct-js. Nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "335" },

  ui: {
    // GifMakerTool.tsx — module-scope FIT_LABELS
    "Contain": "Conter",
    "Cover": "Cobrir",
    "Stretch": "Esticar",
    // "Custom" is feminine in common.ts (a disposição); here it is o tamanho.
    "Custom": "Personalizado",
    // GifMakerTool.tsx
    "Couldn't read 1 image. It's marked and will be skipped.":
      "Não foi possível ler 1 imagem. Ela foi marcada e será ignorada.",
    "Couldn't read {n} images. They're marked and will be skipped.":
      "Não foi possível ler {n} imagens. Elas foram marcadas e serão ignoradas.",
    "Please select image files.": "Selecione arquivos de imagem.",
    "Imported 1 frame from {name}.": "1 quadro importado de {name}.",
    "Imported {n} frames from {name}.": "{n} quadros importados de {name}.",
    "Couldn't read {name}.": "Não foi possível ler {name}.",
    "Add at least two images to make an animation.": "Adicione pelo menos duas imagens para fazer uma animação.",
    "Canvas is not supported in this browser.": "Este navegador não tem suporte a canvas.",
    "Created a GIF from {n} frames ({size}).": "GIF criado com {n} quadros ({size}).",
    "Couldn't create the GIF.": "Não foi possível criar o GIF.",
    "or drop two or more JPG, PNG or WEBP images here — or a GIF to re-edit":
      "ou solte duas ou mais imagens JPG, PNG ou WEBP aqui — ou um GIF para editar",
    "Unreadable — skipped": "Ilegível — ignorada",
    "Delay": "Intervalo",
    "Frame delay for {name}, in milliseconds": "Intervalo do quadro {name}, em milissegundos",
    "Clear frames": "Limpar quadros",
    "GIF settings": "Configurações do GIF",
    "Create": "Criar",
    "Building GIF…": "Montando o GIF…",
    "Live preview": "Prévia ao vivo",
    "1 frame": "1 quadro",
    "{n} frames": "{n} quadros",
    "{s}s per loop": "{s} s por ciclo",
    "Your GIF": "Seu GIF",
    "Finished GIF": "GIF pronto",
    "Download GIF": "Baixar GIF",
    "Animation Settings": "Configurações da animação",
    "Encoding frame {done} of {total}…": "Codificando quadro {done} de {total}…",
    "Set the order with the arrows. The preview plays at your chosen speed.":
      "Defina a ordem com as setas. A prévia toca na velocidade escolhida.",
    "Create GIF": "Criar GIF",
    "Frame delay": "Intervalo entre quadros",
    "Applies to frames without their own delay.": "Vale para os quadros sem intervalo próprio.",
    "Playback": "Reprodução",
    "Reverse": "Inverter",
    "Boomerang": "Bumerangue",
    "Looping": "Repetição",
    "Loop forever": "Repetir sempre",
    "Play once": "Tocar uma vez",
    "Repeat a set number of times": "Repetir um número de vezes",
    "Number of repeats": "Número de repetições",
    "Max size (longest side)": "Tamanho máximo (lado maior)",
    "Custom max size in pixels": "Tamanho máximo personalizado em pixels",
    "Fit": "Encaixe",
    "Contain keeps the whole frame (may add margins). Cover fills the canvas (may crop). Stretch distorts to fill exactly.":
      "Conter mantém o quadro inteiro (pode adicionar margens). Cobrir preenche a tela (pode cortar). Esticar distorce para preencher exatamente.",
    "Colours": "Cores",
    "GIF stores at most 256 colours. Lowering this shrinks the file; flat graphics survive it far better than photos.":
      "O GIF guarda no máximo 256 cores. Diminuir reduz o arquivo; gráficos chapados aguentam muito melhor do que fotos.",
    "Background (behind transparent areas)": "Fundo (atrás das áreas transparentes)",
  },
};

export default content;
