import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/imagem-em-hd (variant of upscale-image, preset mode
 * "hd": HD / Full HD / 4K target, AI scale chosen automatically).
 * "imagem em hd" 3,600/mo, "deixar foto em hd" 1,300 (Brazil, 2026-10-04).
 * The head term "melhorar qualidade da foto" (165K) stays with the parent,
 * /pt/melhorar-qualidade-imagem; this page answers the "em HD" phrasing.
 */
const content: ToolPageContent = {
  toolId: "image-to-hd",
  locale: "pt",
  name: "Converter imagem em HD",
  tagline:
    "Um conversor de imagem em HD que acrescenta resolução de verdade: escolha HD, Full HD ou 4K e a IA leva a foto exatamente a esse tamanho, reconstruindo bordas e texturas e transformando uma imagem pequena ou em baixa resolução em HD. Grátis e sem marca d'água.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Converter Imagem em HD Online — Deixe a Foto em HD com IA | oMyImage",
  metaDescription:
    "Converta imagem em HD online com IA: escolha HD, Full HD ou 4K e receba a foto nesse tamanho, com bordas mais nítidas e detalhes mais limpos. Deixe a foto em HD grátis, sem marca d'água e sem instalar nada.",

  intro:
    "\"HD\" é uma quantidade de pixels: 1280 × 720 para HD, 1920 × 1080 para Full HD, 3840 × 2160 para 4K. Uma foto salva do WhatsApp, um print recortado ou uma imagem de celular antigo costuma ser bem menor que isso, e esticá-la num editor só aumenta o borrado. Este conversor usa um modelo de IA de ampliação que prevê os detalhes finos que uma versão maior teria, então as bordas saem nítidas em vez de moles. Envie uma imagem, escolha o tamanho de que precisa — HD, Full HD ou 4K — e baixe o resultado exatamente nesse tamanho no lado maior.",

  sections: [
    {
      heading: "O que HD significa numa foto",
      id: "hd-pixels",
      body: [
        "As resoluções de vídeo viraram o nome do dia a dia para tamanhos de imagem. Uma imagem é \"HD\" quando tem pelo menos uns 1280 pixels de largura, \"Full HD\" com 1920 e \"4K\" com cerca de 3840. Uma foto de 640 × 480 ampliada 2× vira 1280 × 960 — HD; com 3× fica 1920 × 1440, acima do Full HD; com 4× chega a 2560 × 1920.",
        "Por isso a ampliação certa depende de onde você parte, e é por isso que aqui você escolhe o tamanho final, não o fator: o conversor calcula a menor escala de IA que chega lá e ajusta o resultado para exatamente 1280, 1920 ou 3840 pixels no lado maior. Uma imagem que já é maior que o alvo volta no tamanho do alvo, mais limpa. E se nem 4× bastar — uma miniatura de 400 pixels não vira 4K de verdade — você recebe o resultado em 4×, sem esticar.",
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
    { title: "Escolha HD, Full HD ou 4K", description: "Full HD (1920 pixels) serve para quase tudo; a escala da IA é escolhida para você." },
    { title: "Converta e baixe", description: "A IA amplia e deixa nítida em poucos segundos; compare antes e depois e baixe." },
  ],

  features: [
    { icon: "hd", title: "Resolução HD de verdade", description: "HD, Full HD ou 4K no lado maior, com bordas e texturas reconstruídas em vez de esticadas." },
    { icon: "visibility", title: "Antes e depois", description: "Arraste o comparador para ver exatamente o que mudou antes de baixar." },
    { icon: "verified_user", title: "Sem marca d'água", description: "Grátis, sem cadastro e sem nada carimbado na sua imagem." },
  ],

  faqs: [
    { q: "Como deixar uma foto em HD?", a: "Envie a imagem, escolha HD, Full HD ou 4K e clique em Converter para HD. A IA devolve uma versão mais nítida nesse tamanho, que você compara e baixa." },
    { q: "Qual resolução conta como HD?", a: "Cerca de 1280 × 720 pixels ou mais é HD, 1920 × 1080 é Full HD e uns 3840 × 2160 é 4K. Escolha o que você precisa e o conversor cuida da escala." },
    { q: "Dá para deixar uma foto do WhatsApp em HD?", a: "Dá, e é um dos melhores usos: fotos encaminhadas são pequenas e cheias de blocos, e o ampliador aumenta a imagem e limpa boa parte desse estrago da compressão." },
    { q: "É a mesma coisa que Melhorar qualidade da imagem?", a: "Usa o mesmo motor de IA. Aqui você escolhe o tamanho final — HD, Full HD ou 4K — e a escala é escolhida para você; em Melhorar qualidade da imagem você mesmo escolhe 2×, 3× ou 4×." },
    { q: "Uma imagem em 4K fica um arquivo enorme?", a: "Pode ficar: 4K tem cerca de oito milhões de pixels. Se precisar dela menor depois, comprima — os detalhes novos aguentam bem uma compressão normal." },
    { q: "Dá para converter um print ou um quadro de vídeo em HD?", a: "Dá. Prints e quadros são imagens comuns; textos e bordas de interface, principalmente, ficam muito mais nítidos do que com um redimensionamento normal." },
    { q: "Minha imagem é enviada para um servidor?", a: "Sim — o modelo de IA roda no nosso servidor, então a imagem vai por uma conexão criptografada. O resultado fica atrás de um link privado e é apagado automaticamente em até uma hora; nunca é compartilhado nem reutilizado." },
  ],

  security:
    "Esta ferramenta roda no nosso servidor, com o motor de código aberto Real-ESRGAN, porque o modelo de IA precisa de mais memória do que uma aba do navegador oferece. A imagem viaja por uma conexão criptografada, o resultado fica só por pouco tempo atrás de um link privado e é apagado automaticamente em até uma hora, e nada é compartilhado nem usado para treinar modelos.",
};

export default content;
