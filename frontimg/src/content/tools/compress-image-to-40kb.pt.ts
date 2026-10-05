import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-40kb (variant of compress-image, 40 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-40kb",
  locale: "pt",
  name: "Comprimir imagem para 40 KB",
  tagline:
    "Comprima uma foto para menos de 40 KB para inscrições — um rosto nítido e natural num limite exato, e uma escolha segura para campos de foto de \"20 a 50 KB\". Grátis, no navegador, sem enviar nada.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 40 KB Online — Foto Nítida para Inscrição | oMyImage",
  metaDescription:
    "Comprima uma foto para menos de 40 KB online e grátis — para inscrições com limite de 40 KB ou faixa de 20 a 50 KB. Rosto nítido, limite exato, sem envio.",

  intro:
    "40 KB é o limite de foto em muitas inscrições e também o número sensato para mirar quando o formulário pede uma foto \"entre 20 KB e 50 KB\": com folga acima do mínimo e com folga abaixo do máximo. Nesse tamanho, uma foto tipo 3x4 mantém tons de pele naturais e detalhes claros em volta dos olhos. Adicione a sua foto e receba um JPG abaixo de 40 KB com a maior qualidade que cabe.",

  sections: [
    {
      heading: "Um alvo seguro dentro da faixa de 20 a 50 KB",
      id: "inside-range",
      body: [
        "Mirar bem no topo da faixa é arriscado: um arquivo de 49,9 KB num computador pode ser contado como 51 KB por um formulário que mede de outro jeito. 40 KB deixa folga dos dois lados, então a foto é aceita seja qual for a conta do formulário, e ainda carrega o dobro de detalhe de um arquivo de 20 KB.",
        "Se o formulário dá a faixa e algum arquivo seu já está dentro dela, não precisa comprimir de novo — só os arquivos fora da faixa precisam mudar.",
      ],
    },
    {
      heading: "O que uma foto de 40 KB mantém",
      id: "detail",
      body: [
        "Um retrato de rosto e ombros com cerca de 400 × 500 pixels cabe em 40 KB com boa qualidade: os cílios e os fios de cabelo continuam distintos, e sobra detalhe para a foto sair nítida numa carteirinha ou num crachá.",
        "Recorte no rosto e nos ombros antes de comprimir, para o limite ser gasto no rosto e não no cômodo atrás de você.",
      ],
    },
    {
      heading: "Usando uma foto 3x4 impressa",
      id: "printed-photo",
      body: [
        "Se você só tem uma foto 3x4 de estúdio impressa, coloque-a deitada perto de uma janela e fotografe bem de cima, com o celular paralelo a ela. Incline a foto um pouco para longe da janela se aparecer reflexo, e deixe a foto ocupar o quadro todo.",
        "Recorte a borda branca e a mesa antes de comprimir. Uma cópia limpa de uma foto de estúdio comprime bem, porque essas fotos já têm luz uniforme e fundo liso.",
      ],
    },
    {
      heading: "Cores naturais",
      id: "colours",
      body: [
        "Lâmpadas deixam a pele alaranjada, e algumas câmeras de celular puxam o rosto para o azul ou o verde. Formulários que conferem as fotos às vezes recusam uma cor muito puxada, e a compressão não corrige isso. Tire a foto com luz do dia, perto de uma janela e com as luzes do teto apagadas, e as cores saem naturais.",
      ],
    },
    {
      heading: "Uma foto para vários formulários",
      id: "several-forms",
      body: [
        "A maioria das pessoas precisa da mesma foto tipo 3x4 para mais de uma inscrição, e cada formulário tem o seu limite. Guarde a foto original — o arquivo grande do celular ou do estúdio — numa pasta segura e faça cada versão para envio a partir dela: 40 KB para este formulário, 20 KB ou 100 KB para o próximo.",
        "Comprimir de novo uma cópia já comprimida perde um pouco de detalhe a cada vez, então uma foto que foi apertada para 20 KB e depois precisa ter 40 KB nunca fica tão boa quanto uma feita do original. Dê a cada versão o nome do tamanho, como foto_40kb.jpg, para enviar o arquivo certo no formulário certo.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma foto para 40 KB",
  steps: [
    { title: "Adicione a foto", description: "Recorte no rosto e nos ombros e adicione — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 40 KB", description: "O limite de 40 KB já vem definido; mude se o formulário pedir outro número." },
    { title: "Baixe", description: "Baixe o JPG e anexe na sua inscrição." },
  ],

  features: [
    { icon: "face", title: "Rostos nítidos e naturais", description: "Cerca de 400 × 500 pixels com boa qualidade — tons de pele e detalhes preservados." },
    { icon: "verified_user", title: "Seguro dentro de faixas", description: "40 KB passa em campos de foto de 20 a 50 KB com folga dos dois lados." },
    { icon: "lock", title: "Nada é enviado", description: "A foto é comprimida no seu navegador e fica no seu aparelho." },
  ],

  faqs: [
    { q: "Como comprimir uma foto para 40 KB?", a: "Adicione aqui e clique em Comprimir — o limite de 40 KB já vem definido. Você recebe um JPG abaixo de 40 KB com a maior qualidade que cabe." },
    { q: "O formulário pede de 20 a 50 KB — 40 KB serve?", a: "Serve. 40 KB fica com folga dentro da faixa, seja qual for o jeito de o formulário contar os kilobytes." },
    { q: "Quantos pixels tem uma foto de 40 KB?", a: "Normalmente cerca de 400 × 500 pixels para um retrato de rosto e ombros. Fotos maiores são reduzidas automaticamente até caber." },
    { q: "Como transformar uma foto 3x4 impressa em arquivo?", a: "Fotografe-a deitada, com luz do dia e bem de cima, evitando reflexo, recorte a borda e comprima aqui." },
    { q: "Por que a minha foto ficou alaranjada ou azulada?", a: "Luz de lâmpada e alguns ajustes do celular tingem a foto. Tire de novo com luz do dia; a compressão mantém as cores como estão e não as corrige." },
    { q: "Uma foto de 40 KB fica boa impressa numa carteirinha?", a: "Fica. Carteirinhas e crachás imprimem a foto pequena, e 40 KB é detalhe de sobra para isso." },
    { q: "40 KB é o mesmo que 0,04 MB?", a: "Sim, 40 KB são 40.000 bytes. O arquivo também passa em formulários que contam 1 KB como 1.024 bytes." },
    { q: "Devo guardar a foto original depois de comprimir?", a: "Deve. Faça cada tamanho que precisar a partir do original, não de uma cópia comprimida — cada nova compressão perde um pouco de detalhe." },
  ],

  security:
    "As fotos são comprimidas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
