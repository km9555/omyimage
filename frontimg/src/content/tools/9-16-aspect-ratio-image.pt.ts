import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/imagem-9-16-1080x1920 (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "9-16-aspect-ratio-image",
  locale: "pt",
  name: "Imagem 9:16 em 1080x1920",
  tagline:
    "Transforme qualquer foto, print ou imagem de IA numa imagem na proporção 9:16, com exatamente 1080 × 1920 pixels — recortada, com margem ou com fundo desfocado, nunca esticada. Grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },
  crossLink: { lead: "A imagem tem menos de 1080 pixels de largura?", label: "Aumente a resolução primeiro", toolId: "upscale-image" },

  metaTitle: "Imagem 9:16 (1080x1920): Converter Proporção | oMyImage",
  metaDescription:
    "Converta qualquer imagem para a proporção 9:16 em 1080x1920 px para Stories, Reels, TikTok, Shorts e Web Stories. Recorte, margem ou fundo desfocado, grátis.",

  intro:
    "Stories, Reels, Shorts, TikTok e as Web Stories do Google ocupam a tela do celular em pé, e todos pedem o mesmo formato: proporção 9:16, de preferência 1080 × 1920 pixels. A maioria das imagens não tem esse formato. Uma foto na horizontal, uma arte quadrada de IA ou uma foto 4:3 do celular acaba cortada pelo aplicativo onde ele quiser, ou espremida entre faixas pretas. Este conversor já abre em 1080 × 1920. Adicione as imagens, escolha como cada uma vira 9:16 — recortada, com uma margem colorida ou com as sobras preenchidas por uma cópia desfocada dela mesma — e baixe arquivos que preenchem a tela de ponta a ponta.",

  sections: [
    {
      heading: "O que é a proporção 9:16",
      id: "ratio",
      body: [
        "Proporção (ou aspect ratio) é o formato de uma imagem, escrito largura : altura. 9:16 quer dizer nove partes de largura para cada dezesseis de altura — um retângulo alto, exatamente o formato da tela de um celular na vertical. É o 16:9 da TV e dos vídeos do YouTube deitado de lado. Divida 9 por 16 e o resultado é 0,5625: qualquer imagem cuja largura dividida pela altura dê 0,5625 é 9:16, seja qual for o tamanho.",
        "A proporção, sozinha, não diz nada sobre nitidez. 720 × 1280, 1080 × 1920 e 2160 × 3840 são todas 9:16; muda só a quantidade de pixels que carrega a imagem. Por isso uma imagem 9:16 ainda pode ficar borrada: o formato está certo, mas faltam pixels para uma tela grande.",
      ],
    },
    {
      heading: "Por que 1080x1920 é o tamanho padrão",
      id: "pixels",
      body: [
        "1080 × 1920 (quase sempre escrito 1080x1920) é o Full HD em pé: 1080 pixels de largura por 1920 de altura, cerca de 2,1 megapixels. É o tamanho que os grandes aplicativos de vídeo vertical recomendam para posts em tela cheia, e o tamanho em que o celular grava vídeo Full HD na vertical. Se você envia algo maior, o aplicativo reduz; se envia menos, ele aumenta — e é aí que a imagem perde nitidez.",
        "Em JPG, na qualidade padrão de 92%, uma foto de 1080 × 1920 costuma ficar com poucas centenas de kilobytes: leve para qualquer formulário de envio e com detalhe de sobra para a tela.",
      ],
    },
    {
      heading: "Papel de parede 1080x1920 para celular",
      id: "wallpaper",
      body: [
        "Muita gente procura 1080x1920 para usar uma foto como papel de parede. Funciona, com um detalhe: a maioria dos celulares lançados desde 2018 tem tela mais alta que 9:16 (algo como 9:19,5 ou 9:20). Num aparelho assim, uma imagem 9:16 é ampliada para cobrir a tela e perde um pouco das laterais. Deixe o assunto principal no centro e a foto continua bonita em qualquer modelo.",
      ],
    },
    {
      heading: "Onde se usa imagem 9:16",
      id: "uses",
      body: [
        "Stories e Reels do Instagram: os Stories ocupam a tela inteira em 1080 × 1920. Os Reels tocam no mesmo tamanho, mas a grade do seu perfil mostra uma prévia cortada, então mantenha o assunto perto do meio. A Meta recomenda deixar cerca de 14% em cima e embaixo — uns 250 pixels — sem texto, porque o nome do perfil e a barra de resposta ficam ali.",
        "TikTok e YouTube Shorts: os dois nasceram na vertical e os dois colocam botões na lateral direita e a legenda embaixo. Mantenha o que importa na parte central e alta de um slide ou capa de 1080 × 1920. O Status do WhatsApp, o Snapchat e os Stories do Facebook ocupam a tela do mesmo jeito.",
        "Web Stories do Google: cada página de uma Web Story é uma tela vertical sem bordas, e 9:16 em 1080 × 1920 é o formato que a preenche sem faixas. Deixar todas as páginas no mesmo tamanho também evita que a história \"pule\" quando o leitor toca para avançar. A imagem de capa (poster) é outro formato — 3:4, com pelo menos 640 × 853 pixels — então faça essa à parte.",
      ],
      link: {
        label: "Leia o guia (em inglês): Google Web Stories com imagens de IA — tamanhos, velocidade e regras do Google",
        href: "/blog/google-web-stories-ai-images",
      },
    },
    {
      heading: "Como converter para 9:16 sem esticar",
      id: "convert",
      body: [
        "Esticar uma imagem até 1080 × 1920 deixa rostos compridos e círculos ovais, por isso esta ferramenta nunca faz isso. Uma imagem de qualquer outro formato vira 9:16 de três jeitos honestos, e você escolhe o que combina com ela.",
        "Recortar para preencher (o padrão) aumenta a imagem até cobrir todo o quadro 9:16 e corta o que sobra. Serve bem para fotos na vertical: uma foto 3:4 do celular perde só um quarto da largura. Já com fotos na horizontal é duro — uma foto 4:3 fica com só 42% da largura —, então use antes o botão de recorte no cartão da imagem. A janela de recorte abre travada em 9:16, e você arrasta o quadro para a parte que importa em vez de ficar com o centro.",
        "Preencher com margem mantém a imagem inteira e completa as faixas de cima e de baixo com uma cor que você escolhe — preto, branco ou a cor da sua marca. Fundo desfocado também mantém a imagem inteira, mas preenche essas faixas com uma cópia ampliada e desfocada da própria foto, o visual que o Reels e o TikTok usam para vídeos na horizontal. Costuma ser a melhor escolha para fotos largas, prints e slides: nada se perde e a tela continua cheia.",
      ],
    },
    {
      heading: "Como manter a imagem nítida",
      id: "sharp",
      body: [
        "Recortar uma imagem horizontal para 9:16 deixa uma fatia estreita, muitas vezes com menos de 1080 pixels de largura. Um print de 1920 × 1080, recortado em 9:16, fica com só 608 × 1080 e precisa ser ampliado quase duas vezes para chegar a 1080 × 1920. O fundo desfocado evita isso: a imagem aparece na largura total de 1080 pixels, que o print de 1920 pixels cobre sem ampliar nada. Para imagens que já são pequenas, aumente a resolução com IA antes de converter.",
        "Os geradores de imagem com IA raramente entregam 9:16 no tamanho cheio. Muitos começam no quadrado, a opção vertical do ChatGPT é 1024 × 1536 (proporção 2:3) e o 9:16 do Midjourney sai com cerca de 816 × 1456. Recorte ou use o fundo desfocado aqui; para um resultado mais nítido, aumente a resolução das de 816 × 1456 antes.",
      ],
    },
  ],

  howToTitle: "Como converter uma imagem para 9:16 (1080 × 1920)",
  steps: [
    { title: "Adicione as imagens", description: "Selecione um ou mais arquivos JPG, PNG, WEBP, GIF ou BMP — fotos, prints ou imagens de IA." },
    { title: "Escolha o encaixe", description: "1080 × 1920 já vem marcado. Escolha Recortar para preencher, Preencher com margem ou Fundo desfocado; para recortar à mão, use o botão de recorte no cartão." },
    { title: "Baixe", description: "Toque em Redimensionar e baixar para ter a imagem 9:16, ou um ZIP se adicionou várias." },
  ],

  features: [
    { icon: "crop_portrait", title: "Exatamente 1080 × 1920", description: "Toda imagem sai no tamanho 9:16 Full HD que Stories, Reels, Shorts e Web Stories esperam." },
    { icon: "blur_on", title: "Recorte, margem ou desfoque", description: "Três jeitos de mudar o formato sem esticar, incluindo um fundo desfocado feito da sua própria foto." },
    { icon: "lock", title: "Roda no navegador", description: "Suas imagens são convertidas no seu aparelho e não são enviadas." },
  ],

  faqs: [
    { q: "O que é proporção 9:16?", a: "Um retângulo alto, com nove partes de largura para cada dezesseis de altura — o formato da tela do celular em pé. É o formato 16:9 girado 90 graus." },
    { q: "Qual o tamanho de uma imagem 9:16 em pixels?", a: "1080 × 1920 é o padrão. 720 × 1280 e 2160 × 3840 também são 9:16, com menos ou mais pixels; 1080 × 1920 é o que a maioria dos aplicativos recomenda." },
    { q: "1080x1920 é a mesma coisa que 9:16?", a: "Sim. 1080 dividido por 1920 dá 0,5625, exatamente 9 dividido por 16. Toda imagem de 1080 × 1920 é 9:16." },
    { q: "Como converter uma imagem para 9:16 sem esticar?", a: "Adicione aqui e escolha Recortar para preencher, Preencher com margem ou Fundo desfocado. Os três entregam exatamente 1080 × 1920 mantendo as proporções da imagem; nenhum estica." },
    { q: "Posso escolher qual parte da foto fica?", a: "Sim. Com Recortar para preencher marcado, toque no botão de recorte no cartão da imagem. A janela abre travada em 9:16; arraste o quadro sobre o assunto e aplique." },
    { q: "Qual a diferença entre 9:16 e 16:9?", a: "A orientação. 16:9 é deitado (TV, vídeos do YouTube, tela de notebook); 9:16 é o mesmo formato em pé (Stories, Reels, Shorts, tela do celular)." },
    { q: "Por que minha imagem 9:16 ficou borrada?", a: "Quase sempre a imagem original tinha poucos pixels: um recorte estreito de uma foto horizontal é ampliado para chegar a 1080 × 1920. Use o fundo desfocado ou aumente a resolução antes." },
    { q: "Serve como papel de parede de celular?", a: "Serve. Em celulares mais altos que 9:16, o sistema amplia a imagem e corta um pouco das laterais; deixe o assunto no centro." },
    { q: "O Instagram vai cortar minha imagem 9:16?", a: "Nos Stories, não: eles mostram o 9:16 inteiro. O Reels também toca em tela cheia, mas a prévia na grade do perfil é cortada, então mantenha o assunto no centro." },
    { q: "Dá para converter várias imagens para 9:16 de uma vez?", a: "Dá. Adicione todas juntas; cada uma vira 1080 × 1920 com o encaixe escolhido, e elas são baixadas num único ZIP." },
    { q: "Minhas fotos são enviadas para algum servidor?", a: "Não. A conversão acontece no seu navegador. Só uma imagem grande demais para o navegador abrir é reduzida antes no nosso servidor, e ela é apagada na mesma hora." },
  ],

  security:
    "Suas imagens são convertidas no seu navegador e não são enviadas. Só uma imagem grande demais para o navegador — uma foto com muitos megapixels — vai para o nosso servidor para ser reduzida, e é apagada assim que volta; nada fica guardado.",
};

export default content;
