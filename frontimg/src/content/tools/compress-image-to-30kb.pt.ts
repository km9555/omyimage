import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-30kb (variant of compress-image, 30 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-30kb",
  locale: "pt",
  name: "Comprimir imagem para 30 KB",
  tagline:
    "Comprima uma foto para menos de 30 KB para inscrições em concursos, vestibulares e vagas — com o rosto ainda nítido para o cartão de confirmação ou a carteirinha. Limite exato, sem envio, grátis.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 30 KB Online — Foto para Inscrição | oMyImage",
  metaDescription:
    "Comprima uma foto para menos de 30 KB online e grátis — para inscrições que limitam a foto a 30 KB. Rosto nítido, limite exato e nenhum arquivo enviado.",

  intro:
    "30 KB é um limite comum para a foto em inscrições de concursos, vestibulares e processos seletivos, e às vezes também para a assinatura. Dá para uma foto 3x4 nítida — desde que a foto seja preparada para isso. Adicione a sua imagem e receba um JPG abaixo de 30 KB com a maior qualidade que cabe; as dicas abaixo fazem a diferença entre um rosto bem definido e um rosto borrado.",

  sections: [
    {
      heading: "Fique com o rosto, descarte o resto",
      id: "face-first",
      body: [
        "Formulários querem uma foto de rosto e ombros, então todo o resto — o cômodo, o colo, o teto — é espaço desperdiçado. Recorte no rosto e nos ombros antes de comprimir e os 30 KB inteiros vão para o rosto. Nesse tamanho, uma foto de uns 350 × 450 pixels mantém bem os detalhes dos olhos e do cabelo.",
        "Olhe direto para a câmera, com o rosto iluminado por igual e sem sombra forte de um lado. Sombra e granulado são detalhes finos que o compressor precisa guardar; uma luz uniforme dá menos trabalho e um resultado mais limpo.",
      ],
    },
    {
      heading: "Por que um fundo liso ajuda",
      id: "background",
      body: [
        "A compressão JPG guarda áreas lisas por quase nada e áreas cheias de detalhe a um custo alto. Uma parede branca ou clara quase não pesa, então a maior parte dos 30 KB vai para o rosto. Uma estante, uma cortina estampada ou um quintal ensolarado atrás de você podem gastar metade do limite sozinhos.",
        "Se a foto foi tirada na frente de um fundo poluído, a ferramenta Trocar fundo da foto troca o fundo por branco ou azul primeiro. Depois é só comprimir o resultado aqui.",
      ],
    },
    {
      heading: "Quando o formulário também pede dimensões em pixels",
      id: "dimensions",
      body: [
        "Alguns formulários pedem as duas coisas: menos de 30 KB e, por exemplo, 200 × 230 pixels. Faça nessa ordem — primeiro redimensione para as medidas exatas com a ferramenta Redimensionar imagem, depois comprima para 30 KB aqui. Comprimir antes e redimensionar depois salva o JPG duas vezes e perde qualidade à toa.",
        "Se o formulário der o tamanho em centímetros, como 3 × 4 cm, ele está falando do formato da foto. Recorte nesse formato e então comprima.",
      ],
    },
    {
      heading: "\"O arquivo tem 29 KB e o site diz que é grande demais\"",
      id: "kb-kib",
      body: [
        "Os computadores contam quilobytes de dois jeitos. O Windows mostra tamanhos em unidades de 1.024 bytes, enquanto muitos sites conferem o limite em unidades de 1.000. A ferramenta mantém o arquivo abaixo de 30.000 bytes, que fica dentro do limite de qualquer forma.",
        "Se o formulário ainda recusar a foto, o motivo costuma ser outro: o formato errado (PNG em vez de JPG), um tamanho mínimo que também é exigido ou dimensões fora da faixa permitida. Leia a mensagem de erro com atenção — normalmente ela diz qual é.",
      ],
    },
    {
      heading: "Tirando a foto com o celular",
      id: "phone",
      body: [
        "Use a câmera principal (traseira), não a de selfie, e peça para alguém fotografar você a cerca de 1,5 metro, na altura dos olhos. Fique na frente de uma parede lisa e clara, de frente para uma janela, para a luz do dia cair por igual no rosto, com os ombros retos para a câmera.",
        "Desligue filtros de beleza e o modo retrato — os dois suavizam contornos e acrescentam efeitos que os formulários não aceitam — e tire várias fotos. Escolha a mais nítida: a compressão deixa a foto menor, mas não deixa nítida uma foto tremida.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma foto para 30 KB",
  steps: [
    { title: "Adicione a foto", description: "Recorte no rosto e nos ombros e adicione — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 30 KB", description: "O limite de 30 KB já vem definido; mude se o seu formulário pedir outro valor." },
    { title: "Baixe e envie", description: "Baixe o JPG e anexe no formulário." },
  ],

  features: [
    { icon: "face", title: "Rosto nítido", description: "A maior qualidade que cabe em 30 KB, para olhos e traços continuarem definidos." },
    { icon: "aspect_ratio", title: "Combina com redimensionar", description: "Redimensione para as medidas do formulário primeiro e depois comprima — a ordem certa para a melhor qualidade." },
    { icon: "lock", title: "Sem envio", description: "A foto é comprimida no seu navegador e não sai do seu aparelho." },
  ],

  faqs: [
    { q: "Como comprimir uma foto para 30 KB?", a: "Adicione aqui e clique em Comprimir — o limite de 30 KB já vem definido. Você recebe um JPG abaixo de 30 KB com a maior qualidade que cabe." },
    { q: "Que tamanho em pixels cabe em 30 KB?", a: "Uma foto de rosto e ombros com uns 350 × 450 pixels mantém bem os detalhes. Fotos maiores são reduzidas automaticamente até caber." },
    { q: "A foto vai ficar boa no cartão de confirmação?", a: "Vai. O cartão imprime a foto pequena, e 30 KB sobram para isso se a foto estiver recortada no rosto e com luz uniforme." },
    { q: "Redimensiono primeiro ou comprimo primeiro?", a: "Redimensione primeiro e comprima depois. Comprimir e depois redimensionar salva o JPG duas vezes e perde qualidade sem necessidade." },
    { q: "Um fundo liso faz mesmo diferença?", a: "Faz. Áreas lisas ocupam pouquíssimo espaço num JPG, então sobra mais dos 30 KB para o rosto. Um fundo cheio de detalhes pode gastar metade do limite." },
    { q: "O Windows mostra um tamanho diferente do site — qual está certo?", a: "Os dois, em unidades diferentes. A ferramenta mantém o arquivo abaixo de 30.000 bytes, então ele passa tanto em sites que contam 1 KB como 1.000 quanto como 1.024 bytes." },
    { q: "Dá para comprimir a assinatura para 30 KB também?", a: "Dá. Adicione a foto e a assinatura juntas; cada uma volta abaixo de 30 KB. Se o campo da assinatura aceitar menos, rode de novo com esse número." },
    { q: "Posso tirar a foto com o celular?", a: "Pode. Use a câmera traseira, fique a uns 1,5 metro de distância com luz do dia na frente de uma parede lisa e recorte no rosto e nos ombros antes de comprimir para 30 KB." },
  ],

  security:
    "As fotos são comprimidas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
