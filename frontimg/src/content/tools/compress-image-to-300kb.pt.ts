import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-300kb (variant of compress-image, 300 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-300kb",
  locale: "pt",
  name: "Comprimir imagem para 300 KB",
  tagline:
    "Comprima fotos e documentos digitalizados para menos de 300 KB com o texto ainda fácil de ler — RG, CNH, diplomas, históricos e comprovantes para inscrições e vagas. Em lote, sem envio.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 300 KB Online — Fotos e Documentos | oMyImage",
  metaDescription:
    "Comprima fotos e documentos para menos de 300 KB online e grátis — RG, diplomas e comprovantes legíveis para inscrições e vagas. Em lote e sem enviar arquivos.",

  intro:
    "300 KB é um limite típico para o envio de documentos: o RG ou a CNH, o comprovante de residência, o diploma, o histórico escolar ou a carta de referência que portais de inscrição, bolsas e processos seletivos pedem para anexar. Há espaço para manter uma página inteira legível — letras miúdas, carimbos e assinaturas incluídos — desde que a foto da página seja boa. Adicione todos os documentos de uma vez e cada um volta como JPG abaixo de 300 KB.",

  sections: [
    {
      heading: "Páginas inteiras que continuam legíveis",
      id: "pages",
      body: [
        "Uma página A4 fotografada com o celular costuma ter de 3 a 6 MB. Com 300 KB, a mesma página mantém cerca de 1600 × 2260 pixels — nítido o bastante para ler as letras menores de um histórico com zoom de 100%. A ferramenta gasta o limite primeiro em detalhe e só reduz as dimensões se a página for muito carregada.",
        "Coloque a folha deitada numa mesa escura, fotografe bem de cima com luz do dia para não haver sombra e recorte a mesa antes de comprimir. Um aplicativo de digitalização que endireita a página também ajuda.",
      ],
    },
    {
      heading: "RG e CNH: recorte no documento",
      id: "id-cards",
      body: [
        "Um documento de identidade é pequeno, então a foto dele é quase toda mesa. Recorte nas bordas do documento e ele cabe abaixo de 300 KB com qualidade altíssima, com a foto, o número e os detalhes de segurança bem visíveis.",
        "Se o portal pedir frente e verso, faça duas imagens e comprima as duas juntas; cada uma volta abaixo de 300 KB. Se ele quiser os dois lados num arquivo só, junte-os numa página com a ferramenta Juntar imagens primeiro.",
      ],
    },
    {
      heading: "Colorido ou preto e branco?",
      id: "colour",
      body: [
        "Mantenha diplomas e documentos de identidade coloridos: carimbos, selos e fotos coloridas fazem parte do que os torna válidos, e alguns portais recusam documentos com cara de fotocópia. Para uma carta digitada ou um formulário impresso, preto e branco serve e deixa mais espaço para um texto nítido.",
      ],
    },
    {
      heading: "Quando o portal quer PDF",
      id: "pdf",
      body: [
        "Alguns portais só aceitam documentos em PDF. Comprima as imagens das páginas aqui primeiro e depois junte-as com a ferramenta Imagem para PDF. O PDF fica perto da soma dos tamanhos das imagens, então um documento de uma página continua abaixo de 300 KB.",
        "Para um documento de várias páginas com limite de 300 KB no arquivo inteiro, defina aqui um limite menor por página — para três páginas, uns 90 KB cada — para que o PDF final ainda caiba.",
      ],
    },
    {
      heading: "Uma última conferida antes de enviar",
      id: "checklist",
      body: [
        "Antes de clicar em enviar, abra cada arquivo e confira: todas as linhas estão legíveis, nenhuma borda da página foi cortada, carimbos e assinaturas aparecem e o documento está na posição certa. Dê aos arquivos o nome que o portal pede — muitos recusam espaços ou acentos no nome — e guarde os originais, porque outra inscrição pode pedir um limite diferente.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 300 KB",
  steps: [
    { title: "Adicione os documentos", description: "Selecione ou solte as fotos e os documentos digitalizados — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 300 KB", description: "O limite de 300 KB já vem definido; todos os arquivos são comprimidos para caber." },
    { title: "Baixe o conjunto", description: "Baixe cada arquivo ou todos juntos num ZIP." },
  ],

  features: [
    { icon: "description", title: "Documentos legíveis", description: "Páginas inteiras mantêm pixels suficientes para ler letras miúdas, carimbos e assinaturas." },
    { icon: "picture_as_pdf", title: "Prontos para PDF", description: "Comprima as páginas aqui e junte-as com Imagem para PDF nos portais que pedem um arquivo só." },
    { icon: "lock", title: "Privado", description: "Os documentos são comprimidos no seu navegador, não enviados para um servidor." },
  ],

  faqs: [
    { q: "Como comprimir a foto de um documento para 300 KB?", a: "Adicione aqui e clique em Comprimir — o limite de 300 KB já vem definido. Recorte a mesa em volta da folha antes, para o resultado mais nítido." },
    { q: "O texto continua legível com 300 KB?", a: "Continua. Uma página A4 inteira mantém cerca de 1600 × 2260 pixels com 300 KB, o suficiente para ler letras miúdas com zoom de 100%." },
    { q: "Como comprimir frente e verso do RG?", a: "Fotografe a frente e o verso separados, recorte cada um no documento e adicione os dois. Cada imagem volta abaixo de 300 KB." },
    { q: "Dá para fazer um PDF com menos de 300 KB?", a: "Para uma página, dá: comprima a imagem aqui e transforme em PDF com Imagem para PDF. Para várias páginas, dê a cada uma um limite menor para o total ficar abaixo de 300 KB." },
    { q: "300 KB é o mesmo que 0,3 MB?", a: "Sim. 300 KB são 300.000 bytes, ou 0,3 MB. O arquivo também fica dentro do limite em portais que contam 1 KB como 1.024 bytes." },
    { q: "Por que o documento ficou acinzentado depois de comprimir?", a: "O cinza vem da foto original — geralmente sombra ou luz de lâmpada. Fotografe a página com luz do dia, sem sombra, e comprima de novo." },
    { q: "300 KB serve para foto de perfil também?", a: "Com sobra. Uma foto de retrato abaixo de 300 KB fica praticamente igual ao original na tela." },
    { q: "Dá para comprimir um PDF ou um arquivo do Word aqui?", a: "Não — esta ferramenta trabalha com imagens (JPG, PNG e WEBP). Fotografe ou faça um print da página, comprima a imagem aqui e transforme em PDF com Imagem para PDF se o portal pedir." },
  ],

  security:
    "Documentos de identidade, diplomas e fotos são comprimidos no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
