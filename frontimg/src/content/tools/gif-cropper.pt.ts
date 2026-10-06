import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/recortar-gif. */
const content: ToolPageContent = {
  toolId: "gif-cropper",
  locale: "pt",
  name: "Recortar GIF",
  tagline:
    "Recorte GIFs animados online — arraste uma caixa ou digite os pixels exatos, trave uma proporção, e todos os quadros são recortados do mesmo jeito. A animação continua tocando. Grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Recortar GIF Online Grátis — Cortar GIF Animado | oMyImage",
  metaDescription:
    "Recorte GIFs animados online e grátis: arraste a caixa ou digite os pixels, escolha uma proporção como 1:1 ou 16:9, e todos os quadros são recortados igual. No navegador, sem upload.",

  intro:
    "A maioria dos recortadores de imagem transforma o GIF no primeiro quadro, e a animação some no momento do corte. O recortador de GIF do oMyImage trabalha com a animação inteira: arraste a caixa sobre a parte que você quer manter, ou digite a posição e o tamanho em pixels, e cada quadro é cortado exatamente nessa área, com a temporização intacta. Um controle deslizante de quadros permite conferir a caixa contra o que se move antes de confirmar, e o resultado toca ao lado do original para você comparar antes de baixar.",

  sections: [
    {
      heading: "Por que recortar um GIF",
      id: "why",
      body: [
        "Gravações de tela e GIFs feitos de vídeo quase sempre trazem mais do que a parte interessante: a barra do navegador, faixas pretas de um vídeo widescreen, uma marca d'água no canto ou espaço vazio em volta do assunto. O recorte tira tudo isso, a ação ocupa o quadro e a reação ou demonstração fica clara nos tamanhos pequenos em que GIFs costumam aparecer.",
        "Recortar também deixa o arquivo menor. O GIF guarda cada pixel de cada quadro, então manter metade da largura e metade da altura deixa mais ou menos um quarto dos dados. Muitas vezes isso basta para o GIF caber no limite de envio sem perder nada de qualidade.",
      ],
    },
    {
      heading: "Escolhendo a área",
      id: "area",
      body: [
        "Arraste dentro da caixa para movê-la e arraste um canto ou uma borda para mudar o tamanho; as setas do teclado ajustam um pixel por vez. Os campos Esquerda, Topo, Largura e Altura mostram a caixa em pixels e aceitam valores digitados — o jeito mais rápido de chegar a um tamanho que pediram para você.",
        "Como o assunto de uma animação se mexe, a caixa é desenhada sobre um quadro de cada vez. Use o controle de quadros embaixo da imagem para percorrer a animação e garantir que nada importante escape da caixa no meio do caminho — uma mão que sai de cena ou uma legenda que aparece no final.",
      ],
    },
    {
      heading: "Proporções",
      id: "ratios",
      body: [
        "Livre deixa a caixa com qualquer formato. As proporções fixas travam a caixa enquanto você arrasta: 1:1 para avatares, figurinhas e Instagram, 4:5 para posts em retrato, 16:9 para banners e slides no formato de vídeo, 9:16 para stories e telas de celular, e 4:3 ou 3:2 para formatos clássicos de foto. Ao escolher uma proporção, a caixa atual muda de forma em volta do próprio centro e continua sobre a mesma parte da imagem.",
        "Se o GIF precisar de um tamanho exato em pixels além do formato, recorte primeiro na proporção e depois ajuste o tamanho final no Redimensionar GIF.",
      ],
    },
    {
      heading: "O que continua igual",
      id: "kept",
      body: [
        "Cada quadro mantém a sua duração, então a animação toca na mesma velocidade e repete como antes. GIFs transparentes continuam transparentes. E como recortar só remove pixels, as cores são gravadas de volta exatamente sempre que as cores do GIF cabem numa única paleta, o que vale para a maioria dos GIFs — nada é requantizado, então não surgem faixas nem pontinhos novos.",
        "GIFs feitos de vídeo às vezes usam uma paleta diferente em cada quadro. Esses ganham uma paleta única de 256 cores, escolhida a partir de todos os quadros, o que raramente se nota.",
      ],
    },
    {
      heading: "Recortes comuns",
      id: "uses",
      body: [
        "Tirar as faixas pretas de um trecho convertido de um filme ou de um vídeo do YouTube. Reduzir uma gravação de tela à janela ou ao botão de que ela trata. Fazer um avatar ou uma figurinha quadrada a partir de um GIF de reação largo. Cortar as bordas onde fica uma marca d'água ou o logo de um site, quando você tem direito de usar a animação.",
        "Para recortes que mudam o formato — um GIF largo virando quadrado ou retrato — trave a proporção primeiro e depois posicione a caixa, para o assunto ficar centralizado.",
      ],
    },
    {
      heading: "GIFs para redes e mensagens",
      id: "social",
      body: [
        "Cada lugar mostra o GIF de um jeito. No WhatsApp e no Telegram, um GIF muito largo aparece pequeno na conversa; recortado em 1:1 ou 4:5, ele ocupa mais espaço na tela. Em stories, o formato 9:16 preenche o celular inteiro. Em sites e apresentações, 16:9 combina com o resto do layout.",
        "Recortar antes de enviar também evita que o próprio aplicativo corte a animação do jeito dele, muitas vezes justamente na parte que importa.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é decodificado, recortado e codificado inteiramente no seu navegador. Ele nunca é enviado para um servidor e nada fica guardado depois que você fecha a página, então gravações de tela particulares e vídeos pessoais continuam no seu aparelho.",
      ],
    },
    {
      heading: "Depois do recorte",
      id: "next",
      body: [
        "Um GIF recortado muitas vezes já fica pequeno o bastante. Se não ficar, o Comprimir GIF reduz mais com menos cores, e o Cortar GIF tira os quadros antes ou depois do momento que você quer. Para deitar o GIF de lado, use o Girar GIF; para compartilhar como vídeo, converta com o GIF para MP4.",
      ],
    },
  ],

  howToTitle: "Como recortar um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Desenhe a caixa", description: "Arraste a caixa de recorte ou digite o tamanho; trave uma proporção se precisar." },
    { title: "Recorte e baixe", description: "Clique em Recortar GIF, compare com o original e baixe o resultado." },
  ],

  features: [
    { icon: "crop", title: "Animação inteira", description: "Todos os quadros são recortados na mesma área e mantêm a duração." },
    { icon: "aspect_ratio", title: "Tamanhos exatos", description: "Arraste a caixa, digite pixels ou trave uma proporção como 1:1 ou 16:9." },
    { icon: "lock", title: "Sem upload", description: "Recortado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como recortar um GIF animado?", a: "Adicione o GIF, arraste a caixa sobre a área que quer manter e clique em Recortar GIF. Todos os quadros são recortados igual e a animação continua tocando." },
    { q: "O GIF continua animado?", a: "Sim. Todos os quadros ficam, cada um com a duração original, e o GIF repete como antes." },
    { q: "Dá para recortar um GIF em formato quadrado?", a: "Sim. Escolha 1:1 e a caixa mantém o formato quadrado enquanto você move e redimensiona." },
    { q: "Posso digitar um tamanho exato?", a: "Sim. Digite a posição da esquerda e do topo e a largura e a altura em pixels nas configurações." },
    { q: "Recortar diminui a qualidade?", a: "Não. Os pixels dentro da caixa ficam como estavam, e as cores originais são reaproveitadas sempre que cabem numa paleta." },
    { q: "A transparência é mantida?", a: "Sim. GIFs transparentes continuam transparentes depois do recorte." },
    { q: "O arquivo fica menor?", a: "Normalmente sim. Menos pixels por quadro significa menos dados, mais ou menos na proporção da área removida." },
    { q: "Por que a caixa mostra só um quadro?", a: "Uma caixa de recorte só pode ser desenhada sobre uma imagem por vez. Use o controle de quadros para conferir o resto da animação." },
    { q: "Dá para recortar vários GIFs de uma vez?", a: "Um por vez. Cada animação costuma precisar da sua própria caixa." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. O GIF é recortado inteiramente no seu navegador e não sai do seu aparelho." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular. Arraste a caixa com o dedo; GIFs grandes demoram um pouco mais." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite de GIFs." },
    { q: "Qual proporção usar para figurinha?", a: "1:1. Figurinhas são quadradas; depois de recortar, reduza para 512 pixels ou menos com o Redimensionar GIF." },
  ],

  security:
    "Seu GIF é recortado inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // GifEditTool.tsx — shared with rotate-gif, reverse-gif, gif-speed-changer
    // and gif-cutter, whose modules reuse this block.
    "Select a GIF": "Selecionar GIF",
    "or drop a GIF here": "ou solte um GIF aqui",
    "Please select a GIF.": "Selecione um GIF.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "GIF settings": "Configurações do GIF",
    "Download GIF": "Baixar GIF",
    "Saving…": "Salvando…",
    "Working… {p}%": "Processando… {p}%",
    "Your GIF will appear here.": "Seu GIF vai aparecer aqui.",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
    "Width (px)": "Largura (px)",
    "Height (px)": "Altura (px)",
    "Left (px)": "Esquerda (px)",
    "Top (px)": "Topo (px)",
    "Your file is processed in your browser and never uploaded.": "Seu arquivo é processado no navegador e nunca é enviado.",
    "Preview": "Prévia",
    "Crop GIF": "Recortar GIF",
    "Rotate GIF": "Girar GIF",
    "Reverse GIF": "Inverter GIF",
    "Change speed": "Alterar velocidade",
    "Cut GIF": "Cortar GIF",
    "This GIF has only one frame, so it isn't animated.": "Este GIF tem só um quadro, então não é animado.",
    // crop
    "Aspect ratio": "Proporção",
    "Free": "Livre",
    "Select the whole frame": "Selecionar o quadro inteiro",
    "Every frame is cropped to the same area and keeps its timing.": "Todos os quadros são recortados na mesma área e mantêm a duração.",
    "Drag the box to choose the area to keep · output {w} × {h} px": "Arraste a caixa para escolher a área que fica · saída {w} × {h} px",
    "Frame {i} of {n}": "Quadro {i} de {n}",
    "Frame shown under the crop box": "Quadro mostrado sob a caixa de recorte",
    // rotate
    "Rotate": "Girar",
    "90° left": "90° à esquerda",
    "90° right": "90° à direita",
    "Flip": "Espelhar",
    "Horizontal": "Horizontal", // i18n-same
    "Vertical": "Vertical", // i18n-same
    "Every frame is turned the same way and keeps its timing.": "Todos os quadros giram do mesmo jeito e mantêm a duração.",
    // reverse
    "Direction": "Sentido",
    "Reverse": "Inverter",
    "Boomerang": "Bumerangue",
    "Plays forwards, then backwards, as one seamless loop.": "Toca para a frente e depois para trás, num loop contínuo.",
    "Plays the frames in reverse order, each with its own timing.": "Toca os quadros na ordem inversa, cada um com a sua duração.",
    // speed
    "Change": "Alterar",
    "By speed": "Por velocidade",
    "Frame delay": "Duração do quadro",
    "Speed": "Velocidade",
    "Above 1× is faster, below 1× is slower.": "Acima de 1× fica mais rápido; abaixo de 1×, mais lento.",
    "Every frame (ms)": "Cada quadro (ms)",
    "{fps} frames per second": "{fps} quadros por segundo",
    "Length: {a} → {b}": "Duração: {a} → {b}",
    "Only the timing changes — every frame and pixel stays as it was.": "Só o tempo muda — cada quadro e cada pixel continuam como estavam.",
    "To play this fast, {n} frames are merged: browsers slow down frames shorter than 0.02 s.":
      "Para tocar nessa velocidade, {n} quadros são unidos: os navegadores desaceleram quadros com menos de 0,02 s.",
    // cut
    "Start": "Início",
    "End": "Fim",
    "Frame {i} · {s} s": "Quadro {i} · {s} s",
    "First frame": "Primeiro quadro",
    "Last frame": "Último quadro",
    "Selected part": "Parte selecionada",
    "Keep it": "Manter",
    "Remove it": "Remover",
    "Result: {n} frames · {s}": "Resultado: {n} quadros · {s}",
    "Keep at least one frame.": "Mantenha pelo menos um quadro.",
  },
};

export default content;
