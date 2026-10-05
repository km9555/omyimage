import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-500kb (variant of compress-image, 500 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-500kb",
  locale: "pt",
  name: "Comprimir imagem para 500 KB",
  tagline:
    "Comprima fotos, prints e documentos para menos de 500 KB sem perda visível — para portais, e-mail, lojas virtuais e sites. Muitos arquivos de uma vez, no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 500 KB Online — Sem Perder Qualidade | oMyImage",
  metaDescription:
    "Comprima fotos, prints e documentos para menos de 500 KB online e grátis — qualidade quase original para portais, e-mail, lojas virtuais e sites. Sem envio.",

  intro:
    "500 KB — meio megabyte — é o limite de envio de muitos portais de vagas e de ensino, lojas virtuais, fóruns e sistemas escolares, e um teto sensato para imagens de site. É um orçamento folgado: a maioria das fotos volta igual ao original, só que com uma fração do tamanho. Adicione uma imagem ou cem, e cada uma é salva como JPG abaixo de 500 KB com a maior qualidade que cabe.",

  sections: [
    {
      heading: "Meio megabyte é bastante",
      id: "plenty",
      body: [
        "Uma foto de celular de 12 megapixels costuma ter de 3 a 5 MB. Abaixo de 500 KB ela geralmente mantém cerca de 2000 × 1500 pixels ou mais, numa qualidade em que não dá para ver diferença na tela do celular ou do notebook. Texturas finas, como grama, cascalho ou uma camisa estampada, são as mais difíceis de comprimir; só nesses casos a ferramenta reduz as dimensões, e apenas se precisar.",
        "Como o limite é folgado, não é preciso recortar nem preparar a foto antes. Adicione do jeito que ela está.",
      ],
    },
    {
      heading: "Prints e textos continuam nítidos",
      id: "screenshots",
      body: [
        "Prints de tela costumam ser salvos em PNG, que pode passar de vários megabytes numa tela cheia. Convertido para JPG abaixo de 500 KB, o texto continua nítido no tamanho original, então o print de um comprovante, de uma conversa ou de uma mensagem de erro segue fácil de ler.",
        "Para prints que são quase só cor lisa e texto — um documento ou uma tela de configurações — o WEBP deixa o texto ainda mais limpo no mesmo tamanho. Escolha WEBP no formato se o lugar para onde você vai enviar aceitar.",
      ],
    },
    {
      heading: "Imagens para sites e lojas virtuais",
      id: "websites",
      body: [
        "Toda imagem de uma página precisa ser baixada antes de aparecer, então fotos grandes deixam o site lento, principalmente no 4G. 500 KB é um máximo razoável para um banner grande ou uma foto de produto; imagens menores, como miniaturas, deveriam ter bem menos.",
        "Fotos de produto para marketplaces também combinam com esse limite: mantêm detalhe suficiente para o cliente dar zoom na textura e na etiqueta e ainda sobem rápido.",
      ],
    },
    {
      heading: "Muitos arquivos de uma vez",
      id: "batch",
      body: [
        "Adicione uma pasta inteira — fotos de produtos, as imagens de um anúncio, um álbum para mandar por e-mail — e todas são comprimidas para menos de 500 KB de uma vez. Baixe uma por uma ou todas juntas num ZIP. Imagens que já são JPG abaixo de 500 KB ficam como estão.",
      ],
    },
    {
      heading: "Enviando fotos por e-mail",
      id: "email",
      body: [
        "A maioria dos serviços de e-mail limita os anexos a cerca de 20–25 MB por mensagem, e os anexos crescem mais ou menos um terço no envio, porque o e-mail os codifica como texto. Dez fotos de celular de 4 MB cada não passam; as mesmas dez com 500 KB cada formam uma mensagem de uns 7 MB, que qualquer serviço aceita.",
        "Quem recebe ainda ganha fotos grandes o bastante para ver em tela cheia e imprimir em tamanho de cartão-postal, sem esperar um download enorme.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 500 KB",
  steps: [
    { title: "Adicione as imagens", description: "Selecione ou solte uma ou várias fotos, prints ou documentos — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 500 KB", description: "O limite de 500 KB já vem definido; escolha JPG ou WEBP." },
    { title: "Baixe", description: "Baixe cada imagem ou todas num ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Sem perda visível", description: "Com meio megabyte para gastar, as fotos mantêm a aparência e quase toda a resolução." },
    { icon: "screenshot_monitor", title: "Prints nítidos", description: "Prints grandes em PNG viram arquivos JPG ou WEBP pequenos com texto legível." },
    { icon: "lock", title: "Privado", description: "Tudo acontece no seu navegador; as imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Como comprimir uma imagem para 500 KB?", a: "Adicione aqui e clique em Comprimir — o limite de 500 KB já vem definido. O resultado é um JPG abaixo de 500 KB com a melhor qualidade que cabe." },
    { q: "Vou ver alguma diferença com 500 KB?", a: "Normalmente não. Para a maioria das fotos, 500 KB bastam para ficarem iguais ao original na tela do celular ou do computador." },
    { q: "500 KB é um bom tamanho para imagens de site?", a: "Como máximo para banners grandes e fotos de produto, é. Imagens menores, como miniaturas, deveriam ficar bem abaixo de 100 KB." },
    { q: "Escolho JPG ou WEBP?", a: "JPG funciona em qualquer lugar. WEBP dá um pouco mais de qualidade no mesmo tamanho e é ótimo para sites, mas alguns formulários e apps antigos não aceitam." },
    { q: "500 KB é o mesmo que 0,5 MB?", a: "Sim. 500 KB são 500.000 bytes, ou meio megabyte. O arquivo também fica dentro do limite em sites que contam 1 KB como 1.024 bytes." },
    { q: "O texto miúdo de um print continua legível?", a: "Continua. Com 500 KB um print de tela cheia mantém a resolução original em quase todos os casos, então o texto fica tão nítido quanto antes." },
    { q: "Dá para comprimir 50 fotos para 500 KB cada de uma vez?", a: "Dá. Adicione todas juntas; cada uma volta abaixo de 500 KB e você pode baixá-las num único arquivo ZIP." },
    { q: "Quantas fotos de 500 KB cabem num e-mail?", a: "Com o limite comum de 25 MB de anexos, umas 35 a 40 — os anexos crescem cerca de um terço no envio. Para mais fotos, mande vários e-mails ou compartilhe um link." },
  ],

  security:
    "Fotos, prints e documentos são comprimidos no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
