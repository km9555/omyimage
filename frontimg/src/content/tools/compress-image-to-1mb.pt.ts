import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/comprimir-imagem-para-1mb (variant of compress-image,
 * 1 MB). "comprimir imagem para 1mb grátis" surfaces in Brazilian autocomplete.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-1mb",
  locale: "pt",
  name: "Comprimir imagem para 1 MB",
  tagline:
    "Comprima fotos do celular para menos de 1 MB, quase sempre sem perder um pixel de resolução. Para portais, e-mail e aplicativos de mensagem — grátis, em lote e privado no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 1 MB Online — Grátis, Resolução Total | oMyImage",
  metaDescription:
    "Comprima fotos do celular para menos de 1 MB online e grátis, geralmente em resolução total. Cabe no limite de portais, e-mail e apps. Privado, no seu navegador.",

  intro:
    "Uma foto de celular moderno pesa de 3 a 8 MB, e muitos lugares recusam qualquer coisa acima de 1 MB: portais e plataformas de ensino, fóruns e classificados, chamados de suporte, sistemas de e-mail mais antigos. Diferente dos limites apertados de 20 KB ou 50 KB, 1 MB é espaço suficiente para manter a foto em resolução total — o arquivo só precisa ser guardado de forma mais eficiente. Adicione suas fotos, e cada uma volta como JPG abaixo de 1 MB, em tamanho original sempre que couber e só um pouco menor quando não couber.",

  sections: [
    {
      heading: "Por que fotos de celular têm 3–8 MB",
      id: "why-big",
      body: [
        "As câmeras de celular salvam o JPG com uma qualidade altíssima, muitas vezes entre 90% e 95%, para nada se perder antes de você editar. Com 12 megapixels ou mais, essa qualidade custa vários megabytes por foto, boa parte gasta com ruído do sensor e texturas finas que você nem enxerga no tamanho normal de visualização.",
        "Salvar de novo com uma qualidade um pouco menor elimina quase todo esse desperdício. Para uma foto típica de 12 megapixels, ficar abaixo de 1 MB pede uma qualidade entre 75% e 85% — uma diferença difícil de notar lado a lado — e os 4000 × 3000 pixels continuam lá.",
      ],
    },
    {
      heading: "Quando 1 MB não basta para o tamanho original",
      id: "when-shrinks",
      body: [
        "Cenas muito detalhadas — folhagem, cascalho, multidões, fotos noturnas cheias de ruído — e fotos de 48 ou 50 megapixels podem passar de 1 MB mesmo com qualidade moderada. Aí a ferramenta também reduz um pouco as dimensões, escolhendo o maior tamanho que cabe em vez de um tamanho fixo, então uma foto pode sair com 3200 pixels de largura em vez de 4000.",
        "Ainda é muito mais resolução do que qualquer tela ou prévia de envio mostra. A lista de resultados avisa sempre que uma imagem foi redimensionada, então nada muda sem você saber.",
      ],
    },
    {
      heading: "Onde aparece o limite de 1 MB",
      id: "where",
      body: [
        "Inscrições que aceitam fotos completas em vez de fotos de documento, plataformas de ensino de escolas e faculdades, portais de serviços públicos, fóruns, anúncios de classificados e sistemas de atendimento costumam limitar os anexos a 1 MB ou 2 MB. Muitos sistemas de e-mail também sofrem quando a mensagem passa de 10–20 MB, o que dá só três ou quatro fotos de celular sem compressão.",
        "Comprimir o lote para 1 MB cada antes de anexar mantém tudo dentro desses limites sem mudar as fotos de forma visível.",
      ],
    },
    {
      heading: "1 MB, 1000 KB ou 1024 KB?",
      id: "units",
      body: [
        "Alguns sites escrevem o limite como 1 MB, outros como 1000 KB ou 1024 KB. Esta ferramenta mantém o arquivo abaixo de 1.000.000 bytes, a leitura mais rígida das três, então ele passa em todas. Seu computador pode mostrar o resultado como uns 0,95 MB — essa diferença é a margem de segurança.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 1 MB",
  steps: [
    { title: "Adicione suas fotos", description: "Selecione ou arraste fotos JPG, PNG ou WEBP direto do celular ou da câmera." },
    { title: "Comprima para menos de 1 MB", description: "O limite de 1 MB já vem definido — mude para 2 MB ou 500 KB se o seu site pedir outro valor." },
    { title: "Baixe", description: "Cada foto volta abaixo de 1 MB, em resolução total sempre que couber." },
  ],

  features: [
    { icon: "photo_camera", title: "Mantém a resolução total", description: "A maioria das fotos de celular cabe em 1 MB sem perder um pixel — só a qualidade desperdiçada é removida." },
    { icon: "speed", title: "Lotes rápidos", description: "Comprima um álbum inteiro de uma vez; cada foto é tratada separadamente e o conjunto vem em um ZIP." },
    { icon: "lock", title: "Fotos pessoais continuam pessoais", description: "Suas fotos são processadas no navegador e nunca são enviadas para um servidor." },
  ],

  faqs: [
    { q: "Como comprimir uma foto para 1 MB?", a: "Adicione a foto e clique em Comprimir — o limite de 1 MB já está definido. O arquivo baixado é um JPG abaixo de 1 MB com a melhor qualidade que cabe." },
    { q: "Uma foto de 1 MB continua boa para imprimir?", a: "Sim, nos tamanhos comuns de impressão. Quando a foto mantém a resolução total abaixo de 1 MB, ela imprime como o original em 10×15 e até em A4." },
    { q: "Quantos pixels pode ter uma foto de 1 MB?", a: "Normalmente os 12 megapixels completos de uma foto de celular, uns 4000 × 3000. Fotos muito detalhadas ou de resolução muito alta podem cair para uns 3000 pixels de largura para caber." },
    { q: "Dá para comprimir uma foto de 10 MB para 1 MB?", a: "Dá. Arquivos grandes não são problema — a ferramenta lê a foto no seu navegador e encontra a melhor qualidade e o melhor tamanho abaixo de 1 MB." },
    { q: "Comprimir para 1 MB remove a localização da foto?", a: "Para toda foto que ela salva de novo, sim — o JPG novo não leva metadados EXIF, nem a localização GPS. Um JPG que já tinha menos de 1 MB volta intacto, com os metadados; para tirar a localização desses, use a ferramenta Remover dados EXIF." },
    { q: "Posso comprimir prints para 1 MB?", a: "Pode. Prints costumam ser PNG e podem ser bem pesados; eles são convertidos para JPG abaixo de 1 MB, com qualquer transparência preenchida de branco." },
    { q: "1 MB é o mesmo que 1000 KB?", a: "Nas unidades que a maioria dos sites usa, sim. A ferramenta mantém os arquivos abaixo de 1.000.000 bytes, então eles também passam num limite escrito como 1024 KB." },
  ],

  security:
    "Suas fotos nunca saem do seu aparelho. A compressão para 1 MB roda inteiramente no navegador — nada é enviado, guardado ou compartilhado.",
};

export default content;
