import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-2mb (variant of compress-image, 2 MB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-2mb",
  locale: "pt",
  name: "Comprimir imagem para 2 MB",
  tagline:
    "Comprima fotos grandes do celular e da câmera para menos de 2 MB — quase sempre na resolução original — para envios em sites, formulários, fóruns e e-mail. Rápido, grátis e privado no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 2 MB Online — Fotos em Resolução Total | oMyImage",
  metaDescription:
    "Comprima fotos grandes do celular para menos de 2 MB online e grátis, quase sempre na resolução original — para limites de envio em sites e formulários. Privado.",

  intro:
    "Os celulares atuais tiram fotos de 3 a 12 MB, e muitos sites ainda param em 2 MB por arquivo. Esta página comprime as suas fotos para logo abaixo dessa linha, mantendo-as o mais perto possível do original: na maioria dos casos a resolução total sobrevive e só sai o excesso que não se vê. Adicione uma foto ou um lote inteiro e cada uma volta como JPG abaixo de 2 MB.",

  sections: [
    {
      heading: "Por que tantos sites param em 2 MB",
      id: "why-2mb",
      body: [
        "O PHP, linguagem por trás de uma grande parte dos sites, vem com um limite padrão de envio de 2 MB, e muitos sites nunca mudam isso. Por isso o mesmo número aparece em formulários de contato, portais de vagas, sistemas escolares, fóruns e sites de pequenas empresas — o limite costuma vir da configuração do servidor, não de alguém ter decidido do que uma foto precisa.",
        "O efeito prático é o mesmo: um arquivo de 2,1 MB é recusado, muitas vezes com um erro pouco claro. Comprimir para logo abaixo de 2 MB resolve sem deixar a foto menor na tela.",
      ],
    },
    {
      heading: "Resolução total, na maioria dos casos",
      id: "full-res",
      body: [
        "Um JPG de 12 megapixels com boa qualidade ocupa uns 2 a 4 MB. Para ficar abaixo de 2 MB, a ferramenta primeiro baixa um pouco a qualidade do JPG — uma mudança que você não percebe nos tamanhos normais de visualização — e mantém todos os pixels. Só fotos muito grandes ou muito detalhadas, como as de 48 ou 200 megapixels, também são reduzidas.",
        "Se a foto já é um JPG abaixo de 2 MB, ela volta intacta.",
      ],
    },
    {
      heading: "Fotos grandes de câmera",
      id: "camera",
      body: [
        "Fotos direto da câmera ou do modo de alta resolução do celular podem ter de 15 a 30 MB. Se uma delas tiver mais pixels do que o seu navegador consegue segurar de uma vez — navegadores de celular têm os limites mais baixos —, ela é aberta num tamanho reduzido primeiro e depois comprimida para menos de 2 MB. De qualquer jeito o resultado continua com milhares de pixels de largura, muito mais do que qualquer site mostra.",
        "Exportações em PNG de aplicativos de edição funcionam igual: uma foto PNG de 20 MB vira um JPG abaixo de 2 MB sem mudança visível.",
      ],
    },
    {
      heading: "Se o site ainda recusar o arquivo",
      id: "rejected",
      body: [
        "Alguns sites contam 2 MB como 2.000.000 bytes e outros como 2.097.152; a ferramenta fica abaixo de 2.000.000, então os dois aceitam. Se o envio continuar falhando, confira as outras regras: os formatos aceitos (alguns só aceitam JPG), uma largura ou altura máxima, ou um limite no total de todos os arquivos juntos, e não em cada um.",
      ],
    },
    {
      heading: "Uma foto de 2 MB ainda serve para imprimir?",
      id: "print",
      body: [
        "Serve, para impressões do dia a dia. Uma foto de 12 megapixels mantida na resolução total abaixo de 2 MB tem cerca de 4000 × 3000 pixels — o bastante para uma revelação 10 × 15 nítida e para A4 com qualidade de laboratório. A pequena queda de qualidade do JPG não aparece no papel, na distância normal de visualização.",
        "Para impressões grandes ou gráficas profissionais, guarde e envie o arquivo original; a compressão é para enviar e compartilhar, não para arquivar as suas fotos.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma foto para 2 MB",
  steps: [
    { title: "Adicione as fotos", description: "Selecione ou solte fotos grandes — JPG, PNG ou WEBP, uma ou várias." },
    { title: "Comprima para menos de 2 MB", description: "O limite de 2 MB já vem definido; a qualidade cai só o necessário." },
    { title: "Baixe e envie", description: "Baixe as fotos uma a uma ou num ZIP, prontas para enviar." },
  ],

  features: [
    { icon: "photo_camera", title: "Mantém a resolução", description: "A maioria das fotos mantém todos os pixels; só as muito grandes são reduzidas." },
    { icon: "upload_file", title: "Passa nos limites de envio", description: "Todo arquivo fica abaixo de 2.000.000 bytes — aceito do jeito que o site contar os megabytes." },
    { icon: "lock", title: "Privado", description: "As fotos são comprimidas no seu navegador e nunca vão para um servidor." },
  ],

  faqs: [
    { q: "Como comprimir uma foto para 2 MB?", a: "Adicione aqui e clique em Comprimir — o limite de 2 MB já vem definido. Você recebe um JPG abaixo de 2 MB, quase sempre na resolução original." },
    { q: "Por que os sites limitam o envio a 2 MB?", a: "Muitas vezes porque 2 MB é o limite padrão de envio do PHP e muitos sites mantêm o padrão. É uma configuração do servidor, não uma avaliação da sua foto." },
    { q: "A foto vai perder resolução?", a: "Normalmente não. A ferramenta baixa um pouco a qualidade do JPG antes de mexer nas dimensões, e só fotos muito grandes são reduzidas." },
    { q: "Dá para comprimir uma foto de 20 MB para 2 MB?", a: "Dá. Fotos grandes são tratadas no seu navegador e voltam abaixo de 2 MB, ainda com milhares de pixels de largura." },
    { q: "2 MB é o mesmo que 2000 KB ou 2048 KB?", a: "Os dois são usados. A ferramenta mantém o arquivo abaixo de 2.000.000 bytes, que fica dentro do limite de qualquer forma." },
    { q: "E se a foto já tiver menos de 2 MB?", a: "Se ela é um JPG abaixo de 2 MB, volta exatamente como estava." },
    { q: "Dá para comprimir várias fotos para um mesmo formulário?", a: "Dá. Adicione todas; cada uma volta abaixo de 2 MB. Se o formulário limitar o total de todos os arquivos, escolha um limite menor por foto." },
    { q: "Dá para imprimir a foto depois de comprimir para 2 MB?", a: "Dá. A maioria das fotos mantém a resolução total, mais do que suficiente para revelações 10 × 15 e A4. Para pôsteres ou trabalhos profissionais, imprima do original." },
  ],

  security:
    "As fotos são comprimidas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
