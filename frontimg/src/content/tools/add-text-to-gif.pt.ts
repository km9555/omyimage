import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/colocar-texto-em-gif. */
const content: ToolPageContent = {
  toolId: "add-text-to-gif",
  locale: "pt",
  name: "Colocar texto em GIF",
  tagline:
    "Coloque uma legenda num GIF animado — texto de meme, legenda ou rótulo — em todos os quadros ou só em alguns, e veja tocando ao vivo antes de salvar. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Colocar Texto em GIF Online Grátis — Legenda em GIF | oMyImage",
  metaDescription:
    "Escreva em GIFs animados online e grátis: texto de meme, legendas ou rótulos em todos os quadros ou em alguns, com contorno, caixa e prévia ao vivo. No navegador, sem upload.",

  intro:
    "Um GIF diz mais com as palavras certas: a piada embaixo de uma reação, uma legenda num vídeo sem som, um rótulo em cada passo de um tutorial. O Colocar texto em GIF do oMyImage escreve o seu texto na própria animação. Digite, escolha uma das nove posições, a fonte, o tamanho e as cores, e a prévia toca o GIF com a sua legenda em tempo real. Quando estiver bom, coloque no GIF; o texto passa a fazer parte de cada quadro escolhido, então aparece aonde quer que o GIF vá.",

  sections: [
    {
      heading: "Posicionando o texto",
      id: "position",
      body: [
        "Escolha um dos nove pontos — os cantos, o meio de cada borda ou o centro. Legendas longas quebram a linha sozinhas, e o Enter começa uma linha nova onde você quiser. O texto mantém uma pequena margem da borda, para o contorno nunca ser cortado.",
        "O tamanho é definido como uma parte do lado menor do GIF, então a mesma configuração fica certa num vídeo vertical de celular e num banner largo. A prévia mostra o resultado na hora, na animação em movimento e não num quadro parado.",
      ],
    },
    {
      heading: "Estilo meme ou estilo legenda",
      id: "style",
      body: [
        "O visual clássico de meme é texto branco em Impact, em maiúsculas, com um contorno preto grosso — legível em qualquer fundo, claro ou escuro. Escolha Impact, marque Letras maiúsculas e deixe o contorno no padrão. Para legendas, uma fonte sem serifa com uma caixa atrás do texto lê melhor e fica mais discreta.",
        "As cores do texto e do contorno podem ser as que você quiser. Deixe a espessura do contorno em zero para um texto limpo, sem borda, ou aumente para fundos movimentados e claros. A caixa usa a cor do contorno, parcialmente transparente, então o quadro continua aparecendo por trás.",
      ],
    },
    {
      heading: "Texto só em alguns quadros",
      id: "timing",
      body: [
        "Escolha Alguns quadros para mostrar o texto só numa parte da animação. Dois controles definem o primeiro e o último quadro, com o tempo em que cada um começa, para a piada aparecer exatamente quando a reação acontece, ou um rótulo acompanhar cada passo de uma gravação de tela.",
        "Para mostrar várias legendas diferentes, coloque uma, baixe o GIF, abra de novo e coloque a próxima em outra faixa de quadros. Cada passada mantém o texto anterior.",
      ],
    },
    {
      heading: "Fontes",
      id: "fonts",
      body: [
        "As quatro fontes — Impact, sem serifa, com serifa e máquina de escrever — vêm do seu aparelho, então nada extra é baixado. A Impact vem no Windows e no macOS; em celulares que não a têm, uma fonte sem serifa em negrito toma o lugar. Qualquer idioma que o aparelho mostre funciona, inclusive acentos, outros alfabetos e emojis.",
      ],
    },
    {
      heading: "Qualidade e tamanho do arquivo",
      id: "quality",
      body: [
        "Cada quadro mantém a sua duração, e o GIF repete como antes. As bordas do texto são suavizadas contra a imagem atrás delas, e as 256 cores do GIF são escolhidas de novo para a animação inteira, então as cores do texto entram sem faixas. Colocar texto muda pouco o tamanho do arquivo; se o GIF precisar ficar menor, passe-o depois pelo Comprimir GIF.",
      ],
    },
    {
      heading: "Legendas que dá para ler",
      id: "tips",
      body: [
        "Legendas curtas leem melhor: um GIF repete em poucos segundos, então mantenha o texto em uma ou duas linhas. Coloque onde a ação não está — embaixo na maioria dos vídeos, em cima quando rostos ou mãos ficam na parte de baixo. Texto claro com contorno escuro funciona em quase tudo; num fundo muito carregado, ligue a caixa.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é lido, recebe a legenda e é gravado inteiramente no seu navegador. Ele nunca é enviado, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como colocar texto num GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escreva e estilize", description: "Digite o texto, escolha posição, fonte, tamanho e cores; a prévia toca ao vivo." },
    { title: "Coloque e baixe", description: "Clique em Colocar texto no GIF, confira o resultado e baixe." },
  ],

  features: [
    { icon: "text_fields", title: "Prévia ao vivo", description: "Veja a legenda no GIF tocando enquanto digita." },
    { icon: "palette", title: "Meme ou legenda", description: "Contorno, caixa, cores, maiúsculas e nove posições." },
    { icon: "lock", title: "Sem upload", description: "Legendado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como colocar texto num GIF animado?", a: "Adicione o GIF, digite o texto, escolha onde fica e como aparece, clique em Colocar texto no GIF e baixe." },
    { q: "O GIF continua animado?", a: "Sim. Cada quadro mantém a duração; o texto é desenhado em cada um." },
    { q: "Dá para fazer texto de meme clássico?", a: "Sim. Escolha Impact, marque Letras maiúsculas e mantenha o contorno preto." },
    { q: "O texto pode aparecer só em parte do GIF?", a: "Sim. Escolha Alguns quadros e defina o primeiro e o último quadro nos controles." },
    { q: "Dá para colocar mais de uma legenda?", a: "Coloque uma, baixe o GIF, abra de novo e coloque a próxima." },
    { q: "Posso pôr o texto num canto?", a: "Sim. Escolha qualquer uma das nove posições, inclusive os cantos." },
    { q: "Dá para escrever em várias linhas?", a: "Sim. Aperte Enter para uma linha nova; linhas longas também quebram sozinhas." },
    { q: "Funciona com acentos e emojis?", a: "Sim, com qualquer escrita que o seu aparelho consiga mostrar." },
    { q: "O arquivo fica muito maior?", a: "Normalmente só um pouco. O Comprimir GIF pode reduzi-lo depois." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Dá para usar o GIF legendado no WhatsApp?", a: "Sim. O texto faz parte da imagem, então aparece em qualquer app que mostre GIFs." },
  ],

  security:
    "Seu GIF é legendado inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // GifTextTool.tsx
    "Select a GIF": "Selecionar GIF",
    "or drop a GIF here": "ou solte um GIF aqui",
    "Please select a GIF.": "Selecione um GIF.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "Your text here": "Seu texto aqui",
    "Preview": "Prévia",
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
    "The preview plays your text live. Add it to the GIF when it looks right.": "A prévia toca o seu texto ao vivo. Coloque no GIF quando estiver bom.",
    "Working… {p}%": "Processando… {p}%",
    "Text settings": "Configurações do texto",
    "Text": "Texto",
    "Position": "Posição",
    "Top left": "Em cima à esquerda",
    "Top": "Em cima",
    "Top right": "Em cima à direita",
    "Left": "Esquerda",
    "Middle": "Centro",
    "Right": "Direita",
    "Bottom left": "Embaixo à esquerda",
    "Bottom": "Embaixo",
    "Bottom right": "Embaixo à direita",
    "Font": "Fonte",
    "Impact (meme)": "Impact (meme)", // i18n-same
    "Sans-serif": "Sem serifa",
    "Serif": "Com serifa",
    "Typewriter": "Máquina de escrever",
    "Size": "Tamanho",
    "Text colour": "Cor do texto",
    "Outline colour": "Cor do contorno",
    "Outline thickness": "Espessura do contorno",
    "Box behind the text": "Caixa atrás do texto",
    "CAPITAL LETTERS": "LETRAS MAIÚSCULAS",
    "Show the text": "Mostrar o texto",
    "Whole GIF": "No GIF todo",
    "Some frames": "Alguns quadros",
    "From": "De",
    "To": "Até",
    "Frame {i} · {s} s": "Quadro {i} · {s} s",
    "Long text wraps onto new lines by itself. Press Enter to start a new line.": "Textos longos quebram a linha sozinhos. Aperte Enter para começar uma linha nova.",
    "Your file is processed in your browser and never uploaded.": "Seu arquivo é processado no navegador e nunca é enviado.",
    "Add text to GIF": "Colocar texto no GIF",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "Download GIF": "Baixar GIF",
    "Saving…": "Salvando…",
  },
};

export default content;
