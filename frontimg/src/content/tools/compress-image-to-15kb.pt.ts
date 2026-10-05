import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-15kb (variant of compress-image, 15 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-15kb",
  locale: "pt",
  name: "Comprimir imagem para 15 KB",
  tagline:
    "Comprima uma assinatura ou uma foto pequena para menos de 15 KB para inscrições em concursos, processos seletivos e cadastros. A versão mais nítida que cabe, feita no seu navegador — nada é enviado.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 15 KB Online — Assinatura e Foto, Grátis | oMyImage",
  metaDescription:
    "Comprima assinatura ou foto pequena para menos de 15 KB online e grátis — para inscrições com limite de 15 KB. O resultado mais nítido que cabe, sem envio.",

  intro:
    "15 KB fica entre os limites mais apertados de assinatura e os menores limites de foto, e os formulários usam esse número para os dois: o campo da assinatura, um campo de foto pequeno, às vezes uma impressão digital digitalizada. Dá para uma assinatura limpa e legível e para uma foto de rosto e ombros reconhecível — desde que a imagem seja bem preparada. Adicione a sua e receba um JPG abaixo de 15 KB com a maior qualidade que cabe.",

  sections: [
    {
      heading: "O que cabe em 15 KB",
      id: "what-fits",
      body: [
        "Uma assinatura com tinta escura em papel branco cabe com folga, mesmo com algumas centenas de pixels de largura, porque quase tudo nela é branco liso. Uma foto é mais difícil: conte com cerca de 250 × 310 pixels para um retrato de rosto e ombros, mais ou menos o tamanho em que ela aparece num cartão de confirmação.",
        "A ferramenta encontra a maior qualidade de JPG que fica abaixo de 15 KB e só reduz as dimensões quando a qualidade sozinha não basta. A lista de resultados mostra o novo tamanho de cada arquivo e as novas dimensões sempre que mudarem.",
      ],
    },
    {
      heading: "Limpe a assinatura primeiro",
      id: "clean-signature",
      body: [
        "Uma assinatura fotografada sobre a mesa traz papel acinzentado, uma sombra e um pedaço da mesa — tudo detalhe que o compressor tenta guardar. Passe-a antes pela ferramenta Redimensionar assinatura: ela deixa o papel branco puro, a tinta firme e corta o espaço vazio. Uma assinatura limpa cabe em 15 KB com bordas nítidas e sobra.",
        "Se o formulário também der as dimensões exatas da assinatura em pixels, defina-as em Redimensionar assinatura e escolha lá a faixa de KB; ela resolve as duas coisas de uma vez.",
      ],
    },
    {
      heading: "Pouca luz custa bytes",
      id: "low-light",
      body: [
        "Uma foto tirada dentro de casa à noite fica cheia de granulado — pontinhos coloridos que a câmera acrescenta quando falta luz. Para o compressor JPG esse granulado é detalhe, e com 15 KB ele ocupa o espaço de que o rosto precisa. A mesma pose fotografada perto de uma janela, com luz do dia, comprime num arquivo de 15 KB bem mais nítido.",
        "Se você só tem a foto granulada, comprimir funciona do mesmo jeito; a ferramenta só precisa reduzir um pouco mais as dimensões para caber, o que também suaviza o granulado.",
      ],
    },
    {
      heading: "Foto e assinatura para o mesmo formulário",
      id: "one-form",
      body: [
        "Adicione a foto e a assinatura juntas e as duas voltam abaixo de 15 KB de uma vez. Se um dos campos aceitar mais — um campo de foto de 50 KB, por exemplo —, comprima esse arquivo de novo com o limite dele, a partir do original e não da cópia de 15 KB, para manter o máximo de detalhe que o campo permite.",
      ],
    },
    {
      heading: "Recortando a foto para um limite de 15 KB",
      id: "small-photo",
      body: [
        "Recorte de logo acima do alto do cabelo até logo abaixo dos ombros, com o rosto no meio e os olhos a mais ou menos um terço do topo. O rosto deve ocupar a maior parte da imagem; cada centímetro de parede ou teto que sobra é detalhe que o compressor paga com os mesmos 15 KB.",
        "Uma foto bem recortada também precisa encolher menos para caber, então o rosto que fica mantém mais pixels. Por isso a mesma foto fica bem mais nítida com 15 KB quando é recortada antes do que quando a imagem inteira é comprimida como está.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 15 KB",
  steps: [
    { title: "Adicione a imagem", description: "Uma assinatura ou uma foto recortada — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 15 KB", description: "O limite de 15 KB já vem definido; qualidade e tamanho caem só o necessário." },
    { title: "Baixe", description: "Baixe o JPG e envie no formulário." },
  ],

  features: [
    { icon: "draw", title: "Assinaturas nítidas", description: "Assinaturas limpas ficam bem abaixo de 15 KB com bordas definidas." },
    { icon: "face", title: "Fotos reconhecíveis", description: "Um retrato de rosto e ombros mantém o rosto claro no tamanho de cartão de confirmação." },
    { icon: "lock", title: "Privado", description: "Assinaturas e fotos são comprimidas no seu navegador, nunca enviadas." },
  ],

  faqs: [
    { q: "Como comprimir uma imagem para 15 KB?", a: "Adicione aqui e clique em Comprimir — o limite de 15 KB já vem definido. Você recebe um JPG abaixo de 15 KB com a melhor qualidade que cabe." },
    { q: "Que tamanho de foto cabe em 15 KB?", a: "Cerca de 250 × 310 pixels para um retrato de rosto e ombros; fotos maiores são reduzidas automaticamente até caber." },
    { q: "Devo limpar a assinatura antes de comprimir para 15 KB?", a: "Sim. Redimensionar assinatura deixa o papel branco e corta as bordas, então a assinatura cabe com folga e fica nítida." },
    { q: "Por que uma foto tirada à noite fica pior com 15 KB?", a: "Pouca luz gera granulado, e o compressor gasta bytes para guardá-lo. Uma foto do mesmo rosto com luz do dia fica mais nítida no mesmo tamanho." },
    { q: "Dá para comprimir a foto e a assinatura para 15 KB juntas?", a: "Dá. Adicione as duas; cada uma volta abaixo de 15 KB." },
    { q: "E se a imagem já tiver menos de 15 KB?", a: "Se ela já for um JPG dentro do limite, volta sem alteração." },
    { q: "15 KB é o mesmo que 0,015 MB?", a: "Sim, 15 KB são 15.000 bytes. O arquivo também passa em formulários que contam 1 KB como 1.024 bytes." },
    { q: "Qual a melhor forma de recortar a foto para um limite de 15 KB?", a: "De logo acima do cabelo até logo abaixo dos ombros, com o rosto centralizado ocupando quase todo o quadro. Quanto mais justo o recorte, mais nítido o rosto com 15 KB." },
  ],

  security:
    "Assinaturas e fotos são comprimidas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
