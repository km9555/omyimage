import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/gif-de-texto-digitando. */
const content: ToolPageContent = {
  toolId: "typing-text-gif",
  locale: "pt",
  name: "GIF de texto digitando",
  tagline:
    "Crie um GIF do seu texto se digitando sozinho, letra por letra, com um cursor piscando. Escolha a velocidade, a fonte e as cores. Grátis, no navegador — nada para enviar.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "GIF de Texto Digitando Online Grátis — Efeito de Digitação | oMyImage",
  metaDescription:
    "Crie um GIF de texto digitando online e grátis: suas palavras aparecem letra por letra, com cursor piscando. Escolha velocidade, fonte e cores. No navegador, sem upload.",

  intro:
    "Um texto que se digita sozinho chama a atenção de um jeito que texto parado nunca chama. O GIF de texto digitando do oMyImage transforma qualquer mensagem nesse efeito: escreva, escolha a velocidade, a fonte, o tamanho e as cores, e se um cursor deve piscar no final. A prévia toca a animação enquanto você ajusta. Como o resultado é um GIF comum, ele funciona onde código não funciona — em conversas, slides, e-mails, READMEs do GitHub e qualquer site —, sem JavaScript e sem player de vídeo.",

  sections: [
    {
      heading: "Como a digitação funciona",
      id: "how",
      body: [
        "O texto é diagramado uma vez, no tamanho final, então as linhas nunca pulam enquanto as letras aparecem. Depois, cada quadro revela a próxima letra na velocidade escolhida. Como uma pessoa digitando, ele faz uma pausa curta depois de vírgulas e mais longa depois de pontos e no fim de cada linha, o que deixa o ritmo natural em vez de mecânico.",
        "No final, o texto pronto fica parado pelo tempo que você escolher — de um a cinco segundos — enquanto o cursor pisca a cada meio segundo. Depois o GIF recomeça, ou, se você desmarcar Repetir sempre, ele para no texto pronto.",
      ],
    },
    {
      heading: "Velocidade e duração",
      id: "speed",
      body: [
        "Escolha 6, 10, 15 ou 25 letras por segundo. Seis parece uma digitação cuidadosa e combina com frases curtas e dramáticas; dez é um ritmo natural; quinze e vinte e cinco terminam mensagens longas rapidinho. A prévia e a contagem de quadros mudam na hora, e a duração do GIF inteiro aparece embaixo da prévia.",
        "Cada letra é um quadro, então textos mais longos têm mais quadros — mas cada quadro só acrescenta a letra nova, então até uma mensagem longa fica num arquivo pequeno.",
      ],
    },
    {
      heading: "Fonte, tamanho e cores",
      id: "look",
      body: [
        "Máquina de escrever, uma fonte monoespaçada, dá o visual clássico de terminal; sem serifa e com serifa combinam com citações e avisos, e a Impact faz um título forte. O tamanho vai de 14 a 96 pixels e a largura de 320 a 800 pixels; a altura cresce com o número de linhas.",
        "Qualquer cor de texto e de fundo funciona. Um fundo transparente deixa o GIF combinar com qualquer página, mas, como a transparência do GIF não tem bordas suaves, as letras ficam mais bonitas sobre uma cor sólida igual à do lugar onde o GIF vai aparecer.",
        "Um contorno, de uma borda fina a uma borda grossa, mantém as letras legíveis em fundos movimentados ou transparentes. Cinco combinações de cores prontas — Escuro clássico, Claro e limpo, Neon da meia-noite, Azul oceano e Pôr do sol — definem as cores do texto, do fundo e do contorno com um clique, e você pode mudar qualquer uma depois.",
      ],
    },
    {
      heading: "Onde usar",
      id: "uses",
      body: [
        "Mande no WhatsApp ou no Telegram uma saudação que se digita sozinha. Abra uma apresentação com uma frase que se escreve no primeiro slide. Ponha um slogan animado no topo de um README do GitHub, onde scripts não são permitidos mas GIFs são. Coloque uma assinatura ou um título em movimento num e-mail, num post de blog ou numa página de produto sem mexer em código.",
      ],
    },
    {
      heading: "Qualquer idioma",
      id: "languages",
      body: [
        "As letras são contadas do jeito que você lê, então uma letra acentuada, uma sílaba em híndi ou um emoji aparecem inteiros, e não em pedaços. O texto usa as fontes do seu aparelho, então tudo o que ele consegue mostrar — alfabeto latino, cirílico, devanágari e outros — pode ser digitado.",
      ],
    },
    {
      heading: "Dicas para um bom GIF de digitação",
      id: "tips",
      body: [
        "Mantenha a mensagem curta: uma ou duas frases se digitam em poucos segundos e repetem antes que a atenção se perca. Deixe uma pausa de dois ou três segundos no fim para todo mundo conseguir ler a frase inteira. Combine o fundo com a página ou conversa onde o GIF vai aparecer, e escolha uma largura perto do tamanho em que ele será mostrado, para as letras ficarem nítidas.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Não há nada para enviar: o GIF é desenhado a partir do seu texto inteiramente no seu navegador, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como fazer um GIF de texto digitando",
  steps: [
    { title: "Escreva o texto", description: "Digite a mensagem que o GIF deve digitar e clique em Começar." },
    { title: "Defina o estilo", description: "Escolha velocidade, fonte, tamanho, cores, cursor e pausa; a prévia toca ao vivo." },
    { title: "Crie e baixe", description: "Clique em Criar GIF e baixe a animação." },
  ],

  features: [
    { icon: "terminal", title: "Ritmo de digitação real", description: "Letra por letra, com pausas em vírgulas, pontos e fins de linha." },
    { icon: "palette", title: "Do seu jeito", description: "Velocidade, fonte, tamanho, cores, contorno, cursor e pausa no final." },
    { icon: "lock", title: "Sem upload", description: "Desenhado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como fazer um GIF de texto digitando?", a: "Digite a mensagem, clique em Começar, escolha a velocidade e o estilo, depois clique em Criar GIF e baixe." },
    { q: "Dá para mudar a velocidade?", a: "Sim. Escolha 6, 10, 15 ou 25 letras por segundo." },
    { q: "Dá para tirar o cursor piscando?", a: "Sim. Desmarque Cursor piscando." },
    { q: "O GIF pode parar depois de digitar uma vez?", a: "Sim. Desmarque Repetir sempre e ele para no texto pronto." },
    { q: "Posso usar várias linhas?", a: "Sim. Aperte Enter para uma linha nova; linhas longas também quebram sozinhas." },
    { q: "O fundo pode ser transparente?", a: "Sim, mas as letras ficam mais suaves num fundo sólido, porque a transparência do GIF não tem bordas suaves." },
    { q: "Posso colocar contorno no texto?", a: "Sim. Escolha a cor do contorno e arraste Espessura do contorno. Uma combinação de cores pronta define as cores do texto, do fundo e do contorno de uma vez." },
    { q: "Funciona com acentos e emojis?", a: "Sim. Qualquer escrita que o seu aparelho mostre pode ser digitada, emojis incluídos." },
    { q: "Posso usar num README do GitHub?", a: "Sim. Um GIF aparece em READMEs, onde scripts e animações CSS não rodam." },
    { q: "De que tamanho fica o arquivo?", a: "Normalmente pequeno: cada quadro só acrescenta uma letra. Textos longos em tamanho grande ocupam mais." },
    { q: "Preciso enviar algum arquivo?", a: "Não. O GIF é desenhado a partir do seu texto no navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Dá para mandar no WhatsApp?", a: "Sim. Baixe o GIF e envie como qualquer outro; ele toca na conversa." },
  ],

  security:
    "Seu texto vira GIF inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // TypingGifTool.tsx
    "Hello! This GIF types your text, letter by letter.": "Olá! Este GIF digita o seu texto, letra por letra.",
    "What should the GIF type?": "O que o GIF deve digitar?",
    "Start": "Começar",
    "Next you can change the speed, font, colours and cursor.": "Depois você pode mudar a velocidade, a fonte, as cores e o cursor.",
    "Preview": "Prévia",
    "Type some text to see the preview.": "Digite um texto para ver a prévia.",
    "Your GIF will appear here.": "Seu GIF vai aparecer aqui.",
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
    "Working… {p}%": "Processando… {p}%",
    "Text": "Texto",
    "Typing speed": "Velocidade de digitação",
    "{n} letters/s": "{n} letras/s",
    "Font": "Fonte",
    "Typewriter": "Máquina de escrever",
    "Sans-serif": "Sem serifa",
    "Serif": "Com serifa",
    "Impact (meme)": "Impact (meme)", // i18n-same
    "Size": "Tamanho",
    "Width": "Largura",
    "Alignment": "Alinhamento",
    "Left": "Esquerda",
    "Centre": "Centro",
    "Text colour": "Cor do texto",
    "Background colour": "Cor do fundo",
    "Transparent background": "Fundo transparente",
    "GIF transparency has no soft edges, so text looks smoothest on a solid background.": "A transparência do GIF não tem bordas suaves, então o texto fica mais bonito num fundo sólido.",
    "Outline colour": "Cor do contorno",
    "Outline thickness": "Espessura do contorno",
    "Colour presets": "Combinações de cores",
    "Classic Dark": "Escuro clássico",
    "Clean Light": "Claro e limpo",
    "Midnight Neon": "Neon da meia-noite",
    "Ocean Blue": "Azul oceano",
    "Sunset Pop": "Pôr do sol",
    "Blinking cursor": "Cursor piscando",
    "Pause at the end": "Pausa no final",
    "Repeat forever": "Repetir sempre",
    "Everything happens in your browser; nothing is uploaded.": "Tudo acontece no seu navegador; nada é enviado.",
    "Typing Text GIF": "GIF de texto digitando",
    "Text settings": "Configurações do texto",
    "Make GIF": "Criar GIF",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "Download GIF": "Baixar GIF",
    "Saving…": "Salvando…",
  },
};

export default content;
