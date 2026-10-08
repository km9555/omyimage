import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-gif. */
const content: ToolPageContent = {
  toolId: "gif-compressor",
  locale: "pt",
  name: "Comprimir GIF",
  tagline:
    "Deixe GIFs animados menores — menos cores, quadros mais inteligentes e redimensionamento opcional — sem que parem de se mexer. Compare antes e depois e baixe. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Comprimir GIF Online Grátis — Reduzir Tamanho de GIF | oMyImage",
  metaDescription:
    "Comprima GIFs animados online e grátis: menos cores, quadros mais inteligentes e redimensionamento opcional deixam o GIF bem menor sem parar a animação. Sem enviar nada.",

  intro:
    "GIFs animados crescem rápido, e um GIF grande é aquele que o WhatsApp, os fóruns e o e-mail recusam ou carregam devagar. O Comprimir GIF do oMyImage reconstrói o seu GIF para ocupar menos espaço: guarda só o que muda entre os quadros, pode usar menos cores e ignorar pequenas oscilações, e pode descartar quadros ou diminuir o tamanho se você precisar de mais. Escolha Leve, Médio ou Forte, veja o original e o resultado lado a lado com os tamanhos e baixe o que preferir.",

  sections: [
    {
      heading: "Por que GIFs são tão pesados",
      id: "why",
      body: [
        "Um GIF é uma pilha de imagens, cada uma limitada a 256 cores e comprimida sem perdas. O tamanho cresce com três coisas: quantos pixels tem cada quadro, quantos quadros existem e quanto muda de um quadro para o outro. Um GIF feito a partir de um vídeo de celular chega fácil a dezenas de megabytes por poucos segundos de movimento.",
        "Muitos GIFs também são salvos de forma ineficiente, com cada quadro guardado inteiro mesmo onde nada se mexeu, ou com uma tabela de cores separada em cada quadro. Recodificar um arquivo assim de forma limpa costuma economizar bastante antes de abrir mão de qualquer qualidade.",
      ],
    },
    {
      heading: "O que cada nível faz",
      id: "levels",
      body: [
        "Leve reconstrói o GIF com uma única paleta de 256 cores e guarda só os pixels que mudam entre os quadros. É o que menos altera a aparência e a melhor primeira tentativa para GIFs exportados por ferramentas antigas.",
        "Médio usa 128 cores e trata diferenças muito pequenas entre quadros como se não houvesse mudança, o que remove o tremido que deixa GIFs de vídeo tão pesados. Forte usa 64 cores, ignora oscilações maiores e mantém um quadro a cada dois, somando o tempo dos quadros descartados aos que ficam, para a velocidade continuar a mesma.",
        "Cada ajuste abaixo dos níveis pode ser mudado sozinho: o número de cores, quais quadros manter e o tamanho em porcentagem do original.",
      ],
    },
    {
      heading: "Como tirar o máximo",
      id: "tips",
      body: [
        "A maior economia costuma vir do tamanho. Reduzir largura e altura pela metade deixa um quarto dos pixels, e o arquivo encolhe mais ou menos na mesma proporção. Se o GIF vai aparecer pequeno de qualquer jeito — num balão de conversa ou numa barra lateral —, escolha 75% ou 50%.",
        "Depois vêm quadros e cores. Animações simples, logotipos e gravações de tela ficam iguais com 64 ou até 32 cores; fotos e tons de pele pedem 128 ou mais. Manter um quadro a cada dois corta a contagem pela metade e combina com movimentos mais lentos.",
      ],
    },
    {
      heading: "Quando o resultado não fica menor",
      id: "already",
      body: [
        "Um GIF que já foi otimizado por uma ferramenta dedicada pode não diminuir no Leve, porque não sobra nada para tirar sem mudar a imagem. A ferramenta avisa quando isso acontece; tente Forte, menos cores ou um tamanho menor e compare o resultado antes de baixar.",
        "Se a animação precisa ficar nítida e pequena, considere convertê-la em MP4. Vídeo comprime movimento muito melhor que GIF e toca em qualquer conversa e qualquer celular.",
      ],
    },
    {
      heading: "Transparência e tempo",
      id: "transparency",
      body: [
        "GIFs transparentes continuam transparentes. Como a transparência do GIF é só ligada ou desligada, sem bordas suaves, o truque de guardar só o que muda não pode ser usado neles, então diminuem menos que GIFs opacos; reduzir cores e tamanho ainda ajuda.",
        "O tempo de cada quadro é mantido exatamente, inclusive atrasos irregulares, e o GIF repete como antes. Atrasos que os navegadores já mostram como 0,1 segundo são gravados assim, para a velocidade que você vê não mudar.",
      ],
    },
  ],

  howToTitle: "Como comprimir um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha um nível", description: "Escolha Leve, Médio ou Forte, ou ajuste cores, quadros e tamanho você mesmo." },
    { title: "Comprima e compare", description: "Clique em Comprimir GIF, compare os tamanhos lado a lado e baixe." },
  ],

  features: [
    { icon: "compress", title: "GIFs menores", description: "Só os pixels que mudam são guardados, com opção de menos cores, quadros ou pixels." },
    { icon: "visibility", title: "Antes e depois", description: "As duas versões tocam lado a lado com o tamanho de cada uma." },
    { icon: "lock", title: "Nada é enviado", description: "Seu GIF é comprimido inteiramente no navegador." },
  ],

  faqs: [
    { q: "Como diminuir o tamanho de um GIF?", a: "Adicione o GIF, escolha Médio ou Forte e clique em Comprimir GIF. Para economizar mais, escolha também um tamanho menor, como 75% ou 50%." },
    { q: "Comprimir vai tirar quadros?", a: "Não no Leve nem no Médio. O Forte mantém um quadro a cada dois e soma o tempo dos descartados aos que ficam, então a velocidade continua igual." },
    { q: "Por que meu GIF comprimido não ficou menor?", a: "Provavelmente ele já estava otimizado. Tente Forte, menos cores ou um tamanho menor." },
    { q: "A transparência é mantida?", a: "É. GIFs transparentes continuam transparentes, embora diminuam menos que os opacos." },
    { q: "Quantas cores devo manter?", a: "64 bastam para logotipos, desenhos e gravações de tela; mantenha 128 ou 256 para fotos e rostos." },
    { q: "O que deixa um GIF menor mais rápido?", a: "Diminuir em pixels. Metade da largura e da altura é cerca de um quarto dos dados." },
    { q: "O GIF continua repetindo?", a: "Continua. A repetição e o tempo de cada quadro são mantidos." },
    { q: "É melhor usar MP4?", a: "Para animações longas ou detalhadas, sim — o MP4 costuma ser bem menor. Use GIF onde vídeo não é aceito." },
    { q: "Existe limite de tamanho?", a: "Não há limite fixo. GIFs muito grandes demoram mais, e o progresso aparece enquanto trabalha." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. A compressão acontece inteiramente no seu navegador." },
  ],

  security:
    "Seu GIF é decodificado e recodificado inteiramente no seu navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // GifTool.tsx — shared with gif-resizer and webp-to-gif, whose modules reuse this block.
    "Select a GIF": "Selecionar GIF",
    "Select a WEBP": "Selecionar WEBP",
    "or drop a GIF here": "ou solte um GIF aqui",
    "or drop an animated WEBP here": "ou solte um WEBP animado aqui",
    "Please select a GIF.": "Selecione um GIF.",
    "Please select a WEBP image.": "Selecione uma imagem WEBP.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "GIF settings": "Configurações do GIF",
    "Compress GIF": "Comprimir GIF",
    "Resize GIF": "Redimensionar GIF",
    "Convert to GIF": "Converter para GIF",
    "Download GIF": "Baixar GIF",
    "Saving…": "Salvando…",
    "Working… {p}%": "Processando… {p}%",
    "Your GIF will appear here.": "Seu GIF vai aparecer aqui.",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "Set a size": "Defina um tamanho",
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p}% menor",
    "This GIF is already well optimised — try Strong, fewer colours or a smaller size.":
      "Este GIF já está bem otimizado — tente Forte, menos cores ou um tamanho menor.",
    "This WEBP isn't animated, so the GIF will be a single still image.": "Este WEBP não é animado, então o GIF será uma única imagem parada.",
    "Compression": "Compressão",
    "Stronger levels use fewer colours and skip tiny changes between frames.":
      "Níveis mais fortes usam menos cores e ignoram pequenas mudanças entre quadros.",
    "Colours": "Cores",
    "Frames": "Quadros",
    "Size": "Tamanho",
    "By percent": "Por porcentagem",
    "By pixels": "Por pixels",
    "Percent": "Porcentagem",
    "Width (px)": "Largura (px)",
    "Height (px)": "Altura (px)",
    "Keep aspect ratio": "Manter proporção",
    "Every frame is resized and the timing stays the same.": "Cada quadro é redimensionado e o tempo continua o mesmo.",
    "Every frame and its timing are kept. GIF has only 256 colours and no soft transparency, so gradients may band and semi-transparent edges become solid.":
      "Cada quadro e seu tempo são mantidos. O GIF tem só 256 cores e não tem transparência suave, então degradês podem formar faixas e bordas semitransparentes ficam sólidas.",
    "Your file is processed in your browser and never uploaded.": "Seu arquivo é processado no navegador e nunca é enviado.",
    // LEVEL_LABEL / KEEP_LABEL (module scope)
    "Light": "Leve",
    "Medium": "Médio",
    "Strong": "Forte",
    "Keep all frames": "Manter todos os quadros",
    "Keep every 2nd frame": "Manter 1 a cada 2 quadros",
    "Keep every 3rd frame": "Manter 1 a cada 3 quadros",
  },
};

export default content;
