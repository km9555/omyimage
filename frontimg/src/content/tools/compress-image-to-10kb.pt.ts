import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-10kb (variant of compress-image, 10 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-10kb",
  locale: "pt",
  name: "Comprimir imagem para 10 KB",
  tagline:
    "Deixe uma assinatura, uma impressão digital ou uma foto pequena abaixo de 10 KB — o limite mais apertado dos formulários online. A ferramenta reduz qualidade e tamanho só o necessário, no seu navegador, sem enviar nada.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 10 KB Online — Assinatura e Foto Pequena | oMyImage",
  metaDescription:
    "Comprima assinatura, impressão digital ou foto pequena para menos de 10 KB online e grátis — para inscrições com o limite mais apertado. No navegador, sem envio.",

  intro:
    "10 KB é o menor tamanho de arquivo que os formulários online pedem, e ele aparece justamente onde a imagem é pequena: o campo da assinatura numa inscrição de concurso ou processo seletivo, uma impressão digital, a foto de um sistema de cadastro antigo. Uma foto de celular é de trezentas a quinhentas vezes maior que isso, então chegar a menos de 10 KB tem menos a ver com compressão esperta e mais com manter só o que o formulário precisa. Adicione a imagem e receba um JPG abaixo de 10 KB — a versão mais nítida que cabe.",

  sections: [
    {
      heading: "O tamanho real de 10 KB",
      id: "how-small",
      body: [
        "10 KB são 10.000 bytes. Uma assinatura limpa, com caneta preta em papel branco, recortada bem rente e com uns 300 × 120 pixels, cabe com folga. Uma foto de rosto e ombros também cabe, mas só com cerca de 200 × 250 pixels — mais ou menos o tamanho em que ela aparece impressa num cartão de confirmação, e não muito mais.",
        "A ferramenta primeiro procura a maior qualidade de JPG que fica abaixo de 10 KB. Quando nem a menor qualidade aceitável basta, ela reduz as dimensões em pequenos passos e procura de novo, então você sempre recebe um arquivo dentro do limite, nunca um erro.",
      ],
    },
    {
      heading: "Prepare a imagem antes de apertar",
      id: "prepare",
      body: [
        "Cada pixel desnecessário gasta bytes que você não tem. Recorte a assinatura até a tinta quase encostar nas bordas e recorte a foto no rosto e nos ombros. Para assinaturas, converta antes para preto e branco com a ferramenta Imagem em preto e branco: o ruído de cor do papel e da luz ocupa espaço sem acrescentar nada.",
        "Assine com caneta escura em papel branco liso e fotografe de cima, com luz do dia. Um original limpo e com bom contraste comprime muito melhor do que um cinzento e com sombra, e o resultado continua legível.",
      ],
    },
    {
      heading: "Impressão digital",
      id: "thumb",
      body: [
        "Se o formulário pedir a impressão digital do polegar, pressione o dedo numa almofada de carimbo e depois uma vez, com firmeza, numa folha branca — rolar levemente mostra mais da digital. Fotografe de perto, com boa luz, para as linhas ficarem nítidas, e recorte só a digital antes de comprimir.",
        "Depois de comprimir, amplie para 100%: as linhas da digital precisam continuar visíveis. Se viraram uma mancha escura, confira se o campo é mesmo de 10 KB; digitais costumam ter um limite maior que o da assinatura, e mais espaço preserva os detalhes.",
      ],
    },
    {
      heading: "Quando o resultado fica grosseiro",
      id: "rough",
      body: [
        "Bordas quadriculadas em volta das letras significam que o arquivo teve de ser comprimido demais. Recorte mais rente, aumente o contraste ou comece de um original melhor. Um arquivo logo abaixo do limite, com qualidade razoável, fica muito melhor do que uma imagem grande esmagada para caber.",
        "Confira também as outras regras do formulário. Muitos campos dão as dimensões em pixels além do tamanho; redimensione primeiro para essas medidas com a ferramenta Redimensionar imagem e só depois comprima, para entregar exatamente o que o formulário pede.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 10 KB",
  steps: [
    { title: "Recorte e adicione a imagem", description: "Recorte a assinatura ou a foto bem rente e adicione — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 10 KB", description: "O limite de 10 KB já vem definido. Qualidade e tamanho caem só o necessário." },
    { title: "Confira e baixe", description: "Amplie para ver se continua legível e baixe o JPG." },
  ],

  features: [
    { icon: "draw", title: "Feito para assinaturas", description: "Imagens pequenas em preto e branco, como assinaturas e digitais, continuam legíveis abaixo de 10 KB." },
    { icon: "crop", title: "Só encolhe se precisar", description: "A qualidade é ajustada primeiro; as dimensões só diminuem se o arquivo ainda não couber." },
    { icon: "lock", title: "Fica no seu aparelho", description: "A sua assinatura é comprimida no navegador e nunca é enviada para lugar nenhum." },
  ],

  faqs: [
    { q: "Como comprimir uma assinatura para 10 KB?", a: "Recorte bem rente, adicione aqui e clique em Comprimir — o limite de 10 KB já vem definido. Converter para preto e branco antes dá o resultado mais limpo." },
    { q: "Uma foto cabe mesmo em 10 KB?", a: "Cabe, no tamanho de foto 3x4 impressa pequena: cerca de 200 × 250 pixels. Serve para os campos de foto pequenos de cadastros e cartões, não para algo maior." },
    { q: "Como fotografar a impressão digital para um formulário online?", a: "Faça a digital numa folha branca com almofada de carimbo, fotografe de perto com luz do dia, recorte só a digital e comprima. Amplie para 100% e confira se as linhas aparecem." },
    { q: "Por que a minha assinatura de 10 KB ficou borrada?", a: "Geralmente o original tinha muita coisa em volta, ou papel cinza e sombra. Recorte mais rente, converta para preto e branco e comprima de novo a partir do original." },
    { q: "O arquivo deve ser JPG ou PNG para um limite de 10 KB?", a: "JPG. É o que quase todo formulário aceita, e o limite de tamanho desta ferramenta sempre gera JPG (ou WEBP, se você escolher)." },
    { q: "E se o meu arquivo já tiver menos de 10 KB?", a: "Se ele já é um JPG dentro do limite, volta sem alteração — não faz sentido comprimir de novo." },
    { q: "10 KB é o mesmo que 0,01 MB?", a: "Sim. 10 KB são 10.000 bytes, ou 0,01 MB. A ferramenta conta 1 KB como 1.000 bytes, então o arquivo também fica dentro do limite em sites que contam 1.024." },
  ],

  security:
    "Assinaturas, digitais e fotos são comprimidas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
