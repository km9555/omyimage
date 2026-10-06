import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-150kb (variant of compress-image, 150 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-150kb",
  locale: "pt",
  name: "Comprimir imagem para 150 KB",
  tagline:
    "Comprima fotos e páginas manuscritas ou impressas para menos de 150 KB — letra legível, fotos nítidas, vários arquivos de uma vez. Para portais com limite de 150 KB. Grátis e privado, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 150 KB Online — Fotos e Páginas, Grátis | oMyImage",
  metaDescription:
    "Comprima fotos e páginas manuscritas para menos de 150 KB online e grátis — letra legível para portais com limite de 150 KB. Em lote, sem enviar arquivos.",

  intro:
    "150 KB é um limite comum por arquivo em portais de faculdades, plataformas de ensino e sistemas de inscrição — principalmente onde alunos enviam trabalhos e provas manuscritas página por página. Dá para uma página manuscrita inteira continuar fácil de ler e para um retrato ficar nítido. Adicione todas as páginas de uma vez e cada uma volta como JPG abaixo de 150 KB com a maior qualidade que cabe.",

  sections: [
    {
      heading: "Páginas manuscritas",
      id: "handwritten",
      body: [
        "Com 150 KB, uma página A4 inteira mantém cerca de 1200 × 1700 pixels com boa qualidade: cada linha da letra legível no zoom normal, incluindo desenhos e números pequenos. A ferramenta mantém a qualidade tão alta quanto o limite permite e só reduz as dimensões em páginas muito carregadas.",
        "Fotografe cada página deitada, com luz do dia, bem de cima e sem nada além dela no quadro. Páginas fotografadas de lado parecem esticadas, e uma sombra sobre o papel custa bytes e legibilidade.",
      ],
    },
    {
      heading: "Lápis fraco e tinta clara",
      id: "faint",
      body: [
        "Lápis e caneta azul-clara perdem contraste na foto, e a compressão apaga primeiro as linhas finas e fracas. Escreva com caneta escura, se puder. Se a página já está escrita, fotografe com luz do dia forte e uniforme e considere converter para preto e branco com a ferramenta Imagem em preto e branco antes de comprimir — sem cor, mais do limite vai para as linhas em si.",
      ],
    },
    {
      heading: "Várias páginas em ordem",
      id: "pages",
      body: [
        "Adicione todas as páginas juntas; cada uma é comprimida para menos de 150 KB e você pode baixar tudo num ZIP. Dê nome às fotos na ordem das páginas antes de adicionar — pagina-01, pagina-02 e assim por diante — para os arquivos voltarem na ordem que o portal espera.",
        "Se o portal quiser um único PDF com no máximo 150 KB no total, dê a cada página um limite menor aqui — uns 50 KB cada para três páginas — e depois junte tudo com Imagem para PDF.",
      ],
    },
    {
      heading: "Fotos com 150 KB",
      id: "photos",
      body: [
        "Para uma fotografia, 150 KB é generoso: um retrato mantém cerca de 900 × 1200 pixels com alta qualidade, ótimo para perfil, carteirinha ou cadastro. Não precisa preparar nada além de recortar o que você não quer na foto.",
      ],
    },
    {
      heading: "Aplicativos de digitalização e fotos comuns",
      id: "scanner-apps",
      body: [
        "Um aplicativo de digitalização de documentos — o que já vem no app de notas ou de arquivos do celular, ou outro qualquer — encontra as bordas da página, endireita e aumenta o contraste, deixando o papel branco e a letra escura. Para páginas manuscritas, é o melhor ponto de partida possível: uma digitalização limpa cabe em 150 KB com cada linha nítida.",
        "Muitos desses aplicativos salvam em PDF por padrão. Escolha JPG na hora de exportar, ou faça um print de cada página, e então comprima as imagens aqui. Uma foto comum também funciona; ela só precisa de boa luz do dia e de um ângulo bem de cima para ficar tão limpa quanto uma digitalização.",
        "Seja qual for o caminho, confira a primeira página em tamanho real antes de fazer o resto: se ela estiver fácil de ler com 150 KB, as outras também vão estar.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 150 KB",
  steps: [
    { title: "Adicione as páginas ou fotos", description: "Selecione ou solte, na ordem das páginas se forem páginas — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 150 KB", description: "O limite de 150 KB já vem definido; cada arquivo é comprimido para caber." },
    { title: "Baixe", description: "Baixe cada arquivo ou todos num ZIP." },
  ],

  features: [
    { icon: "edit_note", title: "Letra legível", description: "Páginas inteiras mantêm pixels suficientes para cada linha, número e desenho." },
    { icon: "folder_zip", title: "Trabalhos inteiros", description: "Muitas páginas comprimidas de uma vez e baixadas juntas." },
    { icon: "lock", title: "Privado", description: "As suas páginas e fotos não saem do navegador." },
  ],

  faqs: [
    { q: "Como comprimir uma imagem para 150 KB?", a: "Adicione aqui e clique em Comprimir — o limite de 150 KB já vem definido. Você recebe um JPG abaixo de 150 KB com a melhor qualidade que cabe." },
    { q: "A letra continua legível com 150 KB?", a: "Continua. Uma página inteira mantém cerca de 1200 × 1700 pixels, o bastante para ler uma letra normal no zoom comum." },
    { q: "Como enviar várias páginas manuscritas com menos de 150 KB cada?", a: "Adicione todas as páginas juntas; cada uma volta abaixo de 150 KB. Nomeie as fotos na ordem das páginas antes, para manter a ordem." },
    { q: "Lápis ou caneta — o que funciona melhor?", a: "Caneta escura. As linhas de lápis ficam fracas na foto e somem primeiro quando o arquivo é comprimido." },
    { q: "Dá para fazer um PDF com todas as páginas abaixo de 150 KB?", a: "Dá: dê a cada página um limite menor aqui para o total ficar abaixo de 150 KB e junte tudo com Imagem para PDF." },
    { q: "Qual o tamanho de uma foto com 150 KB?", a: "Cerca de 900 × 1200 pixels com alta qualidade — de sobra para perfis e carteirinhas." },
    { q: "150 KB é o mesmo que 0,15 MB?", a: "Sim, 150 KB são 150.000 bytes. O arquivo também passa em portais que contam 1 KB como 1.024 bytes." },
    { q: "Posso usar um aplicativo de digitalização para as páginas?", a: "Pode — é o melhor jeito. Exporte as páginas como JPG (ou faça prints) em vez de PDF e depois comprima aqui para menos de 150 KB cada." },
  ],

  security:
    "Páginas e fotos são comprimidas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
