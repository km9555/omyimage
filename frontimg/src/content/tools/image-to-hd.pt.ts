import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/imagem-em-hd (variant of upscale-image, 2×).
 * "imagem em hd" 3,600/mo, "deixar foto em hd" 1,300 (Brazil, 2026-10-04).
 * The head term "melhorar qualidade da foto" (165K) stays with the parent,
 * /pt/melhorar-qualidade-imagem; this page answers the "em HD" phrasing.
 */
const content: ToolPageContent = {
  toolId: "image-to-hd",
  locale: "pt",
  name: "Converter imagem em HD",
  tagline:
    "Um conversor de imagem em HD que acrescenta resolução de verdade: a IA amplia a foto 2×, 3× ou 4× e reconstrói bordas e texturas, transformando uma imagem pequena ou em baixa resolução em HD. Grátis e sem marca d'água.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Converter Imagem em HD Online — Deixe a Foto em HD com IA | oMyImage",
  metaDescription:
    "Converta imagem em HD online com IA: 2×, 3× ou 4× mais pixels, com bordas mais nítidas e detalhes mais limpos. Deixe a foto em HD grátis, sem marca d'água e sem instalar nada.",

  intro:
    "\"HD\" é uma quantidade de pixels: 1280 × 720 para HD, 1920 × 1080 para Full HD, 3840 × 2160 para 4K. Uma foto salva do WhatsApp, um print recortado ou uma imagem de celular antigo costuma ser bem menor que isso, e esticá-la num editor só aumenta o borrado. Este conversor usa um modelo de IA de ampliação para aumentar a imagem 2×, 3× ou 4× prevendo os detalhes finos que uma versão maior teria, então as bordas saem nítidas em vez de moles. Envie uma imagem, escolha a escala e baixe o resultado em HD.",

  sections: [
    {
      heading: "O que HD significa numa foto",
      id: "hd-pixels",
      body: [
        "As resoluções de vídeo viraram o nome do dia a dia para tamanhos de imagem. Uma imagem é \"HD\" quando tem pelo menos uns 1280 pixels de largura, \"Full HD\" com 1920 e \"4K\" com cerca de 3840. Uma foto de 640 × 480 ampliada 2× vira 1280 × 960 — HD; com 3× fica 1920 × 1440, acima do Full HD; com 4× chega a 2560 × 1920.",
        "Por isso a escala certa depende de onde você parte. Escolha o menor fator que passa do tamanho de que você precisa: ir além gera um arquivo maior sem deixar a imagem melhor.",
      ],
    },
    {
      heading: "Por que só redimensionar não deixa a imagem em HD",
      id: "vs-resize",
      body: [
        "Um redimensionamento comum espalha os pixels que já existem por uma grade maior e mistura os vizinhos. A imagem fica maior, mas nenhuma informação nova aparece, então toda borda vira uma rampa suave e o texto fica borrado.",
        "Um ampliador com IA aprendeu, com milhões de pares de imagens, como os detalhes finos costumam ser em resolução maior — como cabelo, tijolo, folhagem e letras devem aparecer. Ele desenha esses detalhes enquanto amplia. O resultado não é um original recuperado, mas é lido como uma imagem de fato mais nítida, que é o que \"converter em HD\" realmente pede.",
      ],
    },
    {
      heading: "Imagens que convertem bem — e as que não",
      id: "good-sources",
      body: [
        "Fotos de produto, paisagens, ilustrações, logotipos, capturas de jogos e a maioria dos retratos convertem muito bem, porque seus detalhes seguem padrões que o modelo conhece. Fotos muito comprimidas, como as que foram encaminhadas várias vezes no WhatsApp, também melhoram bastante: o modelo remove boa parte dos blocos enquanto amplia.",
        "Rostos minúsculos numa foto de grupo, texto muito pequeno e imagens muito fora de foco são os casos difíceis. O modelo vai deixá-las maiores e mais limpas, mas não tem como saber o que uma placa ilegível dizia — e não deve fingir que sabe. Para uma foto mole ou levemente borrada, a página Tirar desfoque da foto explica o que esperar.",
      ],
    },
    {
      heading: "Onde se precisa de uma versão em HD",
      id: "uses",
      body: [
        "Os motivos mais comuns são uma capa de perfil ou de canal que a plataforma mostra em Full HD, uma miniatura que precisa ter pelo menos 1280 pixels de largura, uma foto antiga de família que você quer imprimir maior, uma imagem de produto que o marketplace recusa por ser pequena ou uma imagem de apresentação que fica pixelada no projetor.",
      ],
    },
  ],

  howToTitle: "Como converter uma imagem em HD",
  steps: [
    { title: "Envie a imagem", description: "Selecione um JPG, PNG ou WEBP — uma imagem por vez." },
    { title: "Escolha a escala", description: "2× costuma bastar para HD; use 3× ou 4× para originais muito pequenos." },
    { title: "Converta e baixe", description: "A IA amplia e deixa nítida em poucos segundos; compare antes e depois e baixe." },
  ],

  features: [
    { icon: "hd", title: "Resolução HD de verdade", description: "2×, 3× ou 4× mais pixels, com bordas e texturas reconstruídas em vez de esticadas." },
    { icon: "visibility", title: "Antes e depois", description: "Arraste o comparador para ver exatamente o que mudou antes de baixar." },
    { icon: "verified_user", title: "Sem marca d'água", description: "Grátis, sem cadastro e sem nada carimbado na sua imagem." },
  ],

  faqs: [
    { q: "Como deixar uma foto em HD?", a: "Envie a imagem, escolha 2× (ou 3×/4× para fotos muito pequenas) e clique no botão. A IA devolve uma versão maior e mais nítida, que você compara e baixa." },
    { q: "Qual resolução conta como HD?", a: "Cerca de 1280 × 720 pixels ou mais é HD, 1920 × 1080 é Full HD e uns 3840 × 2160 é 4K. Escolha a escala que leva a sua imagem além do tamanho de que você precisa." },
    { q: "Dá para deixar uma foto do WhatsApp em HD?", a: "Dá, e é um dos melhores usos: fotos encaminhadas são pequenas e cheias de blocos, e o ampliador aumenta a imagem e limpa boa parte desse estrago da compressão." },
    { q: "É a mesma coisa que Melhorar qualidade da imagem?", a: "É o mesmo motor de IA. Esta página é ajustada para o objetivo comum de chegar ao HD; a página Melhorar qualidade da imagem trata da ampliação em geral." },
    { q: "Uma imagem 4× em HD fica um arquivo enorme?", a: "Pode ficar, porque tem dezesseis vezes mais pixels. Se precisar dela menor depois, comprima — os detalhes novos aguentam bem uma compressão normal." },
    { q: "Dá para converter um print ou um quadro de vídeo em HD?", a: "Dá. Prints e quadros são imagens comuns; textos e bordas de interface, principalmente, ficam muito mais nítidos do que com um redimensionamento normal." },
    { q: "Minha imagem é enviada para um servidor?", a: "Sim — o modelo de IA roda no nosso servidor, então a imagem vai por uma conexão criptografada. O resultado fica atrás de um link privado e é apagado automaticamente em até uma hora; nunca é compartilhado nem reutilizado." },
  ],

  security:
    "Esta ferramenta roda no nosso servidor, com o motor de código aberto Real-ESRGAN, porque o modelo de IA precisa de mais memória do que uma aba do navegador oferece. A imagem viaja por uma conexão criptografada, o resultado fica só por pouco tempo atrás de um link privado e é apagado automaticamente em até uma hora, e nada é compartilhado nem usado para treinar modelos.",
};

export default content;
