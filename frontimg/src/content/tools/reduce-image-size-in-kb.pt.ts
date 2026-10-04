import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/reduzir-tamanho-da-imagem-em-kb (variant of
 * compress-image, target-size mode with no limit pre-filled). KB queries are
 * small in Brazil (largest measured: "comprimir imagem para 70k" 1,000/mo);
 * the page serves the general "diminuir os KB da foto" need behind them.
 */
const content: ToolPageContent = {
  toolId: "reduce-image-size-in-kb",
  locale: "pt",
  name: "Reduzir tamanho da imagem em KB",
  tagline:
    "Diminua os KB de qualquer foto: digite o limite — 20 KB, 70 KB, 100 KB ou 1 MB — e receba o JPG mais nítido que cabe nele. Em lote, grátis e direto no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Reduzir Tamanho da Imagem em KB Online — Grátis | oMyImage",
  metaDescription:
    "Diminua os KB da foto online e grátis: digite qualquer limite, como 50 KB, 100 KB ou 1 MB, e baixe o JPG mais nítido que cabe nele. Em lote, sem enviar arquivos.",

  intro:
    "Formulário não pede qualidade, pede um número: \"foto de até 100 KB\", \"arquivo com no máximo 1 MB\", \"imagem abaixo de 70 KB\". Esta ferramenta funciona do mesmo jeito. Adicione as imagens, digite o limite em KB ou MB, e cada uma volta abaixo dele — com a maior qualidade que cabe, diminuindo os pixels só quando a qualidade sozinha não basta. Funciona com JPG, PNG e WEBP, processa várias imagens de uma vez e nunca envia suas fotos para lugar nenhum.",

  sections: [
    {
      heading: "Defina o tamanho, não a qualidade",
      id: "size-first",
      body: [
        "O jeito comum de diminuir uma foto para um formulário é tentativa e erro: baixar um controle de qualidade, salvar, conferir o tamanho na pasta e tentar de novo. Cada rodada é mais uma compressão, e cada nova compressão de um JPG já comprimido joga fora mais um pouco de detalhe.",
        "Aqui você informa o resultado de que precisa. A ferramenta codifica a imagem várias vezes por trás dos panos, chegando à maior qualidade cujo arquivo ainda fica abaixo do limite, e entrega essa versão. Uma foto de celular cheia de ruído e uma captura de tela limpa precisam de ajustes completamente diferentes para chegar a 100 KB — você não precisa saber quais, porque a busca é feita para cada imagem.",
      ],
    },
    {
      heading: "O que \"KB\" quer dizer no formulário",
      id: "kb-meaning",
      body: [
        "Um quilobyte pode ser 1.000 ou 1.024 bytes, dependendo de quem conta. O Windows mostra tamanhos em unidades de 1.024; celulares, Macs e muitos sites usam 1.000. A diferença é de só 2,4%, mas basta para um arquivo de 50,5 KB ser recusado por um formulário que aceita \"50 KB\".",
        "A ferramenta evita a discussão mirando a leitura mais rígida: um limite de 50 KB significa menos de 50.000 bytes. Esse arquivo passa tanto no formulário que conta 1.000 bytes por quilobyte quanto no que conta 1.024. Seu computador pode mostrar o resultado como 48 ou 49 KB — essa pequena folga é proposital.",
      ],
    },
    {
      heading: "Diminuir KB não é o mesmo que diminuir pixels",
      id: "kb-vs-pixels",
      body: [
        "Tamanho do arquivo e dimensões da imagem são coisas diferentes, e às vezes o formulário pede as duas: \"3×4, até 100 KB\". Os pixels dizem o tamanho da imagem; os quilobytes dizem quanto espaço ela ocupa. Uma foto de 4000 pixels cabe em 100 KB, e uma de 400 pixels pode pesar 300 KB se for salva como PNG.",
        "Quando o formulário dá dimensões exatas, redimensione primeiro com a ferramenta Redimensionar imagem e depois traga o arquivo para baixo do limite aqui. Quando ele só fala em KB, deixe as dimensões em paz — a ferramenta reduz por conta própria, e só o quanto precisar.",
      ],
    },
    {
      heading: "Limites comuns e de onde eles vêm",
      id: "common-limits",
      body: [
        "Assinaturas digitalizadas costumam ser limitadas a 20 KB. Fotos de rosto para inscrições em concursos, vestibulares, carteirinhas e cadastros ficam em geral entre 50 KB e 100 KB, e há sistemas que pedem algo mais específico, como 70 KB — basta digitar o número. Documentos digitalizados e anexos de portais do governo, de RH ou de escolas costumam ir de 200 KB a 1 MB.",
        "Os limites mais comuns têm páginas próprias, com dicas para cada tamanho, nos links acima. Esta página serve para qualquer outro número que você digitar, em KB ou MB.",
      ],
    },
  ],

  howToTitle: "Como reduzir o tamanho de uma imagem em KB",
  steps: [
    { title: "Adicione as imagens", description: "Selecione ou arraste um ou vários arquivos JPG, PNG ou WEBP." },
    { title: "Digite o limite", description: "Informe o tamanho máximo em KB ou MB, ou toque em um dos tamanhos comuns, como 50 KB ou 100 KB." },
    { title: "Comprima e baixe", description: "Cada imagem é salva abaixo do limite; baixe um arquivo ou todos juntos em um ZIP." },
  ],

  features: [
    { icon: "straighten", title: "O tamanho que você precisar", description: "Digite qualquer limite em KB ou MB — não só uma lista de opções — e todas as imagens ficam abaixo dele." },
    { icon: "high_quality", title: "A melhor qualidade que cabe", description: "A ferramenta busca a maior qualidade dentro do limite e só reduz os pixels quando é inevitável." },
    { icon: "lock", title: "Nada é enviado", description: "A compressão roda no seu aparelho, então fotos de documento e assinaturas nunca saem dele." },
  ],

  faqs: [
    { q: "Como diminuir os KB de uma foto?", a: "Adicione a foto, digite o tamanho em KB (ou toque em um dos tamanhos comuns) e clique em Comprimir. O arquivo baixado fica garantidamente abaixo desse número, com a melhor qualidade que cabe." },
    { q: "Reduzir em KB é o mesmo que comprimir a imagem?", a: "Na prática, sim. Diminuir \"em KB\" é reduzir o tamanho do arquivo, que é o que a compressão faz; esta ferramenta também reduz as dimensões quando só a compressão não alcança o limite." },
    { q: "Por que o arquivo mostra 49 KB se pedi 50 KB?", a: "Porque a ferramenta fica abaixo de 50.000 bytes, o que o seu computador pode mostrar como uns 48,8 quilobytes de 1.024 bytes. A folga garante que o arquivo passe nas duas formas de contar." },
    { q: "Posso digitar um tamanho exato, como 70 KB?", a: "Pode. Qualquer número inteiro ou decimal funciona, em KB ou MB. Os tamanhos prontos são só atalhos." },
    { q: "Reduzir em KB muda as dimensões da foto?", a: "Só quando necessário. A ferramenta diminui a qualidade primeiro e só reduz largura e altura se nem com qualidade baixa a foto couber no limite." },
    { q: "Qual formato devo escolher?", a: "JPG, a menos que você saiba que o site aceita WEBP. Praticamente todo formulário aceita JPG; o WEBP chega ao mesmo tamanho com qualidade um pouco melhor, mas ainda é recusado por alguns portais antigos." },
    { q: "O que acontece com um PNG transparente?", a: "O JPG não guarda transparência, então as áreas transparentes são preenchidas com a cor de fundo que você escolher — branco por padrão, que é o que a maioria dos formulários espera." },
    { q: "Posso reduzir várias fotos para o mesmo tamanho de uma vez?", a: "Pode. Adicione quantas quiser; cada uma é comprimida separadamente até o mesmo limite, e você pode baixar todas juntas em um ZIP." },
  ],

  security:
    "Suas imagens ficam no seu aparelho. A redução em KB acontece inteiramente no navegador — nada é enviado, guardado ou visto por outras pessoas, o que importa quando a foto é de um documento ou de uma assinatura.",
};

export default content;
