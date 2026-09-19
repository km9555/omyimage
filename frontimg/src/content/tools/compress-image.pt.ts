import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/comprimir-imagem. Structure lives in
 * ToolPageShell.
 *
 * Head term "comprimir imagem" — iLoveIMG /pt/comprimir-imagem, Watermarkly,
 * img2go, Fotor and PicWish all title on it; "reduzir tamanho da imagem",
 * "diminuir KB" and "compactar imagem" are the long tail and live in the
 * sections, FAQs and aliases.ts. Written for Brazil, not translated line by
 * line: the FAQs add the questions Brazilians actually ask (WhatsApp, gov.br
 * upload limits in KB) that the English page does not have.
 *
 * FORMATS labels are module scope in CompressTool.tsx and are maintained here
 * by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "compress-image",
  locale: "pt",
  name: "Comprimir imagem",
  tagline:
    "Comprima imagens JPG, PNG e WEBP online — reduza o tamanho do arquivo com controle de qualidade, em lote, e veja quanto economizou. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir imagem online grátis — JPG, PNG e WEBP | oMyImage",
  metaDescription:
    "Comprima imagens JPG, PNG e WEBP online e grátis. Reduza o tamanho em KB sem perder qualidade, em lote e no seu navegador — sem cadastro e sem marca d'água.",

  intro:
    "Comprimir imagem é a forma mais rápida de deixar fotos mais leves para sites, e-mail, WhatsApp e formulários com limite de tamanho. A ferramenta Comprimir imagem do oMyImage reduz arquivos JPG, PNG e WEBP direto no seu navegador: converta para WEBP para chegar ao menor tamanho, controle a qualidade e, se quiser, diminua as dimensões de fotos muito grandes. Os PNGs são comprimidos do jeito certo, reduzindo o número de cores com pontilhado em vez de apenas salvar de novo. Comprima uma imagem ou um lote inteiro e veja exatamente quanto você economizou.",

  sections: [
    {
      heading: "Por que comprimir imagens faz tanta diferença",
      id: "why",
      body: [
        "As imagens quase sempre são o que mais pesa em uma página da web — muitas vezes mais do que o HTML, o CSS e o JavaScript juntos. Por isso elas dominam o Largest Contentful Paint, a métrica do Core Web Vitals que mede quanto tempo o visitante espera até ver o conteúdo principal. Cortar o peso das imagens pela metade costuma melhorar a velocidade percebida mais do que qualquer otimização de código.",
        "O custo não é só velocidade. A maior parte do Brasil navega pelo celular, muitas vezes no plano de dados, e uma foto de capa sem compressão gasta a franquia de alguém para entregar detalhes que a tela nem consegue mostrar. Uma fotografia de 4 MB exibida em uma coluna de 800 pixels entrega cerca de dez vezes mais informação do que a tela aproveita.",
        "Também existe o lado prático: formulários de inscrição, portais do governo, lojas virtuais e sistemas de RH costumam aceitar só arquivos abaixo de 100 KB, 200 KB ou 1 MB. Comprimir é a correção mais barata, porque não exige mudar o layout nem o seu fluxo de trabalho. A imagem continua com a mesma aparência e pesa uma fração do que pesava.",
      ],
    },
    {
      heading: "Compressão com perdas e sem perdas: dois mecanismos diferentes",
      id: "how",
      body: [
        "JPG e WebP são formatos com perdas. Eles analisam a imagem, descartam a informação a que a visão humana é menos sensível — principalmente pequenas variações de cor — e guardam o que sobra. É por isso que conseguem reduções tão grandes em fotografias, e também por isso que uma qualidade baixa demais cria aqueles blocos e halos em volta de bordas com muito contraste.",
        "O PNG não funciona assim: ele é sem perdas por definição, então diminui reduzindo quantas cores diferentes a imagem usa. Nosso caminho para PNG quantiza a paleta e aplica pontilhado, o que é praticamente invisível em logotipos, capturas de tela e ilustrações chapadas, e bem visível em uma foto com um céu em degradê. Com a qualidade em 95% ou mais, o PNG continua perfeitamente sem perdas e só a codificação é otimizada.",
        "É por isso que o formato importa tanto quanto o controle deslizante. Uma captura de tela comprimida como JPG fica pior e mais pesada do que a mesma captura como PNG otimizado, e uma fotografia salva em PNG fica várias vezes maior do que precisaria.",
      ],
    },
    {
      heading: "Qual formato escolher na saída",
      id: "format",
      body: [
        "O WebP gera o menor arquivo para uma mesma qualidade, suporta transparência e é aberto por todos os navegadores atuais. É a escolha padrão para qualquer imagem que vá para um site ou loja virtual.",
        "O JPG é um pouco maior, mas é aceito em qualquer lugar, inclusive em sistemas que nunca ouviram falar de WebP. Escolha JPG para anexos de e-mail, formulários de envio, portais públicos, gráficas e qualquer coisa que saia da web.",
        "O PNG é a resposta certa para conteúdo com bordas nítidas — logotipos, desenhos, capturas de tela, diagramas — e para tudo que precisa manter a transparência sem perdas. Não use PNG para fotografias, a não ser que tenha um motivo específico.",
      ],
    },
    {
      heading: "Quando a imagem não diminui mais",
      id: "already-optimised",
      body: [
        "Às vezes a ferramenta devolve o seu arquivo original e avisa. Isso é proposital: se nada do que conseguimos gerar fica menor do que o arquivo enviado, devolver uma versão \"comprimida\" maior seria um fracasso disfarçado de resultado.",
        "Normalmente isso significa que a imagem já passou por um otimizador, ou que é um gráfico pequeno em que o cabeçalho fixo do formato ocupa quase todo o arquivo. PNGs muito pequenos, em especial, têm um piso abaixo do qual o cabeçalho e a paleta são a maior parte dos bytes. Nesses casos o ganho que resta está em outro lugar: redimensionar para o tamanho em que a imagem realmente aparece, ou trocar de formato de vez.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens JPG, PNG ou WEBP, ou arraste e solte na área de envio." },
    { title: "Escolha as configurações", description: "Escolha o formato de saída e a qualidade e, se quiser, diminua imagens muito grandes." },
    { title: "Comprima e baixe", description: "Clique em Comprimir — uma imagem é baixada direto; várias chegam juntas em um arquivo ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Compressão em lote", description: "Comprima dezenas de imagens de uma vez e baixe tudo em um único ZIP, vendo quanto cada arquivo economizou." },
    { icon: "tune", title: "Controle de qualidade e formato", description: "Converta para WEBP para ter os menores arquivos, ou mantenha o formato e ajuste a qualidade exata que você quer." },
    { icon: "lock", title: "100% privado", description: "A compressão roda no seu navegador para quase todas as fotos, e essas imagens nunca são enviadas a lugar nenhum." },
  ],

  faqs: [
    { q: "Quanto minhas imagens vão diminuir?", a: "Depende da imagem e das configurações. Converter fotos para WEBP com qualidade entre 70% e 80% costuma reduzir o tamanho em 50% a 80% com pouca diferença visível, e gráficos em PNG normalmente caem de 60% a 80% na qualidade padrão." },
    { q: "Como funciona a compressão de PNG?", a: "O PNG não consegue descartar detalhes como o JPG, então ele diminui de outro jeito: reduzindo quantas cores a imagem usa. Na qualidade padrão de 70%, quantizamos para 128 cores com pontilhado, o que costuma ser invisível em ilustrações, logotipos e capturas de tela. Coloque a qualidade em 95% ou mais para manter o PNG perfeitamente sem perdas." },
    { q: "Qual formato gera os menores arquivos?", a: "O WEBP normalmente gera os menores arquivos para uma mesma qualidade, seguido pelo JPG. O PNG continua sendo a melhor escolha para gráficos com bordas nítidas, cores chapadas e transparência." },
    { q: "Comprimir reduz a qualidade?", a: "JPG e WEBP são formatos com perdas, então uma qualidade muito baixa mostra defeitos; o PNG perde cores, não detalhes. O padrão de 70% é um ótimo equilíbrio; aumente para imagens importantes." },
    { q: "Por que uma das minhas imagens não diminuiu?", a: "Porque ela já estava otimizada. Se nada do que geramos fica menor que o arquivo enviado, devolvemos o original intacto e avisamos — um compressor que entrega um arquivo maior falhou na única coisa que precisava fazer." },
    { q: "Posso comprimir várias imagens de uma vez?", a: "Sim. Adicione quantas quiser — vários arquivos são baixados juntos em um ZIP, cada um com a porcentagem economizada." },
    { q: "É grátis e privado?", a: "Totalmente. Não tem cadastro nem marca d'água, e quase todas as imagens são comprimidas no seu próprio navegador. Só arquivos grandes demais para uma aba do navegador vão para o nosso servidor, e a ferramenta avisa quando isso acontece." },
    { q: "Qual qualidade devo usar?", a: "Entre 70% e 80% é o ponto de partida certo para fotos em um site, e é onde está a maior parte da economia. Use 90% ou mais para fotos de produto, imagens de destaque e qualquer coisa em que o cliente vá dar zoom. Abaixo de uns 60% começam a aparecer blocos em céus e degradês suaves." },
    { q: "Comprimir uma imagem reduz as dimensões dela?", a: "Não. A compressão muda como os pixels são guardados, não quantos são — uma foto de 4000×3000 continua 4000×3000. Se você também quer menos pixels, use a ferramenta Redimensionar imagem, que costuma ser o ganho maior para imagens da web." },
    { q: "A compressão remove os dados EXIF?", a: "Recodificar a imagem descarta a maior parte dos metadados, incluindo as configurações da câmera e as coordenadas de GPS, como efeito colateral. Se o objetivo é justamente apagar esses dados, use o Removedor de EXIF, que foi feito para isso e mostra exatamente o que é apagado." },
    { q: "Posso comprimir a mesma imagem duas vezes?", a: "Pode, mas não deveria. Cada passagem com perdas descarta detalhes para sempre e o estrago se acumula, então um JPG comprimido duas vezes fica visivelmente pior do que um comprimido uma vez só na configuração equivalente. Sempre comece pelo melhor original que você tiver." },
    { q: "Como diminuir uma foto para menos de 100 KB?", a: "Converta para JPG ou WEBP, marque \"Diminuir imagens grandes\" com um tamanho máximo de uns 1200 px e comece com a qualidade em 70%. A maioria das fotos de celular fica abaixo de 100 KB assim; se ainda passar, baixe a qualidade aos poucos ou reduza o tamanho máximo. É o caminho para portais e formulários que limitam o envio em KB." },
    { q: "Comprimir ajuda a mandar fotos pelo WhatsApp sem perder qualidade?", a: "Ajuda a controlar o resultado. O WhatsApp recomprime por conta própria tudo o que é enviado como foto; se você já envia uma imagem bem comprimida, com as dimensões certas, ele tem menos o que estragar. Para preservar o original de verdade, envie como documento." },
  ],

  security:
    "Suas imagens continuam privadas. Quase todas as fotos são comprimidas inteiramente no seu navegador e nunca saem do seu dispositivo; só imagens muito grandes ou de altíssima resolução vão para o nosso servidor, onde são excluídas logo em seguida. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "912" },

  ui: {
    // CompressTool.tsx
    "Compress": "Comprimir",
    "Compressing…": "Comprimindo…",
    "Compress & download": "Comprimir e baixar",
    "Compress {n} images": "Comprimir {n} imagens",
    "Compress more images": "Comprimir mais imagens",
    "Compressed": "Comprimido",
    "Compression complete!": "Compressão concluída!",
    "Compression settings": "Configurações de compressão",
    "Compression Settings": "Configurações de compressão",
    "File size reduced by {pct}%": "Tamanho do arquivo reduzido em {pct}%",
    "Already optimised — kept your original file.": "Já estava otimizada — mantivemos o seu arquivo original.",
    "Already optimised — kept your original files.": "Já estavam otimizadas — mantivemos os seus arquivos originais.",
    "Already optimised. Try a lower quality, or WEBP, for a smaller file.":
      "Já estava otimizada. Tente uma qualidade menor, ou WEBP, para um arquivo menor.",
    "already optimised — kept original": "já otimizada — original mantido",
    "no smaller output": "não ficou menor",
    "{n} colors": "{n} cores",
    "Processed 1 image.": "1 imagem processada.",
    "Processed {n} images.": "{n} imagens processadas.",
    "Compression failed.": "Falha na compressão.",
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "WEBP usually gives the smallest files. Everything runs in your browser.":
      "O WEBP costuma gerar os menores arquivos. Tudo roda no seu navegador.",
    "Output format": "Formato de saída",
    // FORMATS (module scope, §4.2)
    "Same as original": "Igual ao original",
    "WEBP (smallest)": "WEBP (menor tamanho)",
    "PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless.":
      "O PNG diminui reduzindo as cores. Com 95% ou mais ele fica perfeitamente sem perdas.",
    "Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless.":
      "Qualidade menor = arquivo menor. PNGs diminuem reduzindo as cores; com 95% ou mais ficam sem perdas.",
    "Lower quality = smaller file. 60–80% is a great balance.":
      "Qualidade menor = arquivo menor. Entre 60% e 80% é um ótimo equilíbrio.",
    "Shrink large images": "Diminuir imagens grandes",
    "Also reduce the dimensions, not just the quality. A phone photo is around 4000px wide, while a web page or an email attachment rarely needs more than 2000 — and halving the width quarters the pixel count, which saves far more than quality alone.":
      "Reduza também as dimensões, não só a qualidade. Uma foto de celular tem cerca de 4000px de largura, enquanto uma página da web ou um anexo de e-mail raramente precisa de mais de 2000 — e cortar a largura pela metade divide o número de pixels por quatro, o que economiza muito mais do que a qualidade sozinha.",
    "Max width/height": "Largura/altura máx.",
    "JPG background": "Fundo do JPG",
  },
};

export default content;
