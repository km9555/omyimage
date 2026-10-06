import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/gif-para-webp. */
const content: ToolPageContent = {
  toolId: "gif-to-webp",
  locale: "pt",
  name: "GIF para WEBP",
  tagline:
    "Converta GIFs animados em WEBP animado — sem perdas para manter cada pixel, ou com perdas para arquivos bem menores. Cada quadro mantém a sua duração. Grátis, no navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "GIF para WEBP Online Grátis — WEBP Animado | oMyImage",
  metaDescription:
    "Converta GIF animado em WEBP animado online e grátis. Sem perdas mantém cada pixel; com perdas deixa o arquivo bem menor. Todos os quadros e tempos são mantidos. No navegador.",

  intro:
    "O GIF é o formato de animação mais antigo da web e um dos menos eficientes. O WEBP animado toca a mesma animação em todos os navegadores atuais, normalmente com uma fração do tamanho. O conversor de GIF para WEBP do oMyImage reescreve o seu GIF quadro a quadro: escolha Sem perdas para manter cada pixel exatamente igual, ou Alta e Menor para uma compressão com perdas que encolhe o arquivo muito mais. O resultado toca ao lado do original, com o tamanho e a economia, para você escolher antes de baixar.",

  sections: [
    {
      heading: "Sem perdas ou com perdas",
      id: "quality",
      body: [
        "Sem perdas guarda cada pixel exatamente como está no GIF. Como a compressão sem perdas do WEBP é muito melhor que a do GIF, o arquivo normalmente já fica menor — muitas vezes um terço ou mais em gravações de tela, logotipos e desenhos, onde grandes áreas têm uma cor só.",
        "Alta e Menor usam compressão com perdas, como um JPG em cada quadro. Elas costumam reduzir pela metade, ou mais, os GIFs tirados de vídeo, com um leve amaciamento em bordas nítidas e textos. Comece pela Alta; escolha Menor quando o tamanho importar mais que a nitidez. Em gráficos pequenos e simples, Sem perdas pode até ficar menor que as opções com perdas — o resultado mostra cada tamanho, então é rápido comparar.",
      ],
    },
    {
      heading: "Como a animação é guardada",
      id: "how",
      body: [
        "Cada quadro é codificado pelo próprio codificador WEBP do navegador e depois montado num WEBP animado. Como num GIF bem feito, cada quadro depois do primeiro guarda só o retângulo que mudou, e um quadro idêntico ao anterior é somado à duração dele, então momentos parados não custam nada.",
        "Cada quadro mantém a sua duração, e a animação repete exatamente como o GIF — sem parar, uma vez só ou um número definido de vezes. Áreas transparentes continuam transparentes; as bordas continuam duras, porque o GIF nunca teve transparência suave.",
      ],
    },
    {
      heading: "Onde o WEBP funciona",
      id: "support",
      body: [
        "O WEBP animado toca no Chrome, Edge, Firefox, Safari e Opera, no computador e no celular, então é seguro para sites. Trocar GIFs por WEBP é uma das formas mais simples de fazer uma página carregar mais rápido e atende ao conselho dos testes de velocidade de usar formatos de imagem modernos.",
        "Fora do navegador o suporte é mais irregular. Muitos programas de e-mail, apps de conversa, editores antigos e formulários de envio ainda esperam GIF e podem mostrar só um quadro parado. Mantenha o GIF nesses lugares e use o WEBP na web.",
      ],
    },
    {
      heading: "Navegadores que criam WEBP",
      id: "browsers",
      body: [
        "A conversão usa o codificador WEBP embutido no navegador, então nada extra é baixado. Chrome e Edge gravam Sem perdas como sem perdas de verdade, e o Firefox também cria arquivos WEBP. O Safari mostra WEBP mas não consegue criar — e no iPhone e no iPad todos os navegadores usam o motor do Safari —, então use um computador ou um celular Android nesta ferramenta. Ela avisa se o seu navegador não conseguir.",
      ],
    },
    {
      heading: "Figurinhas e mensagens",
      id: "stickers",
      body: [
        "As figurinhas animadas do WhatsApp são arquivos WEBP de 512 × 512 pixels, então converter é um passo para transformar um GIF em figurinha. Antes, recorte o GIF em quadrado com o Recortar GIF e redimensione para 512 pixels com o Redimensionar GIF; depois converta aqui. Apps de figurinhas têm limite de tamanho pequeno, então Alta ou Menor costumam caber melhor que Sem perdas.",
      ],
    },
    {
      heading: "WEBP no seu site",
      id: "website",
      body: [
        "Para usar o WEBP numa página, basta trocar o arquivo na tag de imagem, como faria com um GIF. Se ainda precisar atender programas muito antigos, a tag picture permite oferecer o WEBP e deixar o GIF como alternativa. Páginas com várias animações são as que mais ganham: cada GIF trocado é menos dado para baixar no celular.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é lido e o WEBP é gravado inteiramente no seu navegador. Nada é enviado, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como converter GIF para WEBP",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha a qualidade", description: "Sem perdas mantém cada pixel; Alta e Menor deixam o arquivo menor." },
    { title: "Converta e baixe", description: "Clique em Converter para WEBP, compare o tamanho com o GIF e baixe." },
  ],

  features: [
    { icon: "sync_alt", title: "Continua animado", description: "Todos os quadros, tempos e a configuração de repetição são mantidos." },
    { icon: "compress", title: "Arquivos menores", description: "Sem perdas costuma ser menor que o GIF; com perdas, menor ainda." },
    { icon: "lock", title: "Sem upload", description: "Convertido inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como converter um GIF animado em WEBP?", a: "Adicione o GIF, escolha Sem perdas, Alta ou Menor e clique em Converter para WEBP. O WEBP toca igual ao GIF." },
    { q: "O WEBP continua animado?", a: "Sim. Todos os quadros e tempos são mantidos, e ele repete como o GIF." },
    { q: "WEBP é menor que GIF?", a: "Quase sempre. Sem perdas costuma ficar um terço menor em gráficos; as opções com perdas costumam reduzir pela metade os GIFs de vídeo." },
    { q: "Sem perdas muda algum pixel?", a: "Não. No Chrome e no Edge, Sem perdas guarda cada pixel exatamente como no GIF." },
    { q: "A transparência é mantida?", a: "Sim. Áreas transparentes continuam transparentes." },
    { q: "Por que não funciona no Safari?", a: "O Safari mostra WEBP, mas não tem codificador WEBP. Use Chrome, Edge ou Firefox para converter." },
    { q: "Onde posso usar WEBP animado?", a: "Em sites e em todos os navegadores atuais. Alguns apps de e-mail e de conversa ainda precisam de GIF." },
    { q: "Dá para fazer figurinha do WhatsApp?", a: "Recorte o GIF em quadrado, redimensione para 512 × 512, converta aqui e adicione com um app de figurinhas." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "No Android, sim, no Chrome ou no Firefox. No iPhone e no iPad nenhum navegador cria WEBP ainda." },
    { q: "Como transformar um WEBP de volta em GIF?", a: "Use o WEBP para GIF, que mantém todos os quadros e tempos." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Qual qualidade escolher?", a: "Sem perdas para desenhos e telas; Alta para GIFs de vídeo; Menor quando o limite de tamanho for apertado." },
  ],

  security:
    "Seu GIF é convertido inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // GifExportTool.tsx — shared with gif-to-apng and gif-to-sprite-sheet, whose modules reuse this block.
    "Select a GIF": "Selecionar GIF",
    "or drop a GIF here": "ou solte um GIF aqui",
    "Please select a GIF.": "Selecione um GIF.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "Saving…": "Salvando…",
    "Working… {p}%": "Processando… {p}%",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
    "Your file is processed in your browser and never uploaded.": "Seu arquivo é processado no navegador e nunca é enviado.",
    "Your animation will appear here.": "Sua animação vai aparecer aqui.",
    "Your sprite sheet will appear here.": "Sua sprite sheet vai aparecer aqui.",
    "{p}% smaller than the GIF": "{p}% menor que o GIF",
    "{p}% larger than the GIF": "{p}% maior que o GIF",
    "Same size as the GIF": "Mesmo tamanho do GIF",
    // webp
    "Convert to WEBP": "Converter para WEBP",
    "Quality": "Qualidade",
    "Lossless": "Sem perdas",
    "High": "Alta",
    "Small": "Menor",
    "Every pixel is kept. Usually smaller than the GIF already.": "Cada pixel é mantido. Normalmente já fica menor que o GIF.",
    "Lossy: much smaller files, with slight softening around sharp edges.": "Com perdas: arquivos bem menores, com leve amaciamento nas bordas nítidas.",
    "This browser saves WEBP at very high quality instead of lossless.": "Este navegador grava o WEBP em qualidade muito alta, e não sem perdas.",
    // apng
    "Convert to APNG": "Converter para APNG",
    "APNG keeps every pixel and frame. Only the part of each frame that changes is stored, so it is often smaller than the GIF.":
      "O APNG mantém cada pixel e cada quadro. Só a parte de cada quadro que muda é guardada, então muitas vezes fica menor que o GIF.",
    // sprite
    "Make sprite sheet": "Criar sprite sheet",
    "Layout": "Disposição",
    "Grid": "Grade",
    "One row": "Uma linha",
    "One column": "Uma coluna",
    "Columns": "Colunas",
    "Frames": "Quadros",
    "Keep all frames": "Manter todos os quadros",
    "Keep every 2nd frame": "Manter 1 a cada 2 quadros",
    "Keep every 3rd frame": "Manter 1 a cada 3 quadros",
    "Frame size": "Tamanho do quadro",
    "Space between frames": "Espaço entre quadros",
    "Transparent background": "Fundo transparente",
    "Background colour": "Cor do fundo",
    "{n} frames of {w} × {h} px, {cols} × {rows}": "{n} quadros de {w} × {h} px, {cols} × {rows}",
    "This sheet is too large for a browser to create. Keep fewer frames, choose a smaller frame size or use a grid.":
      "Esta folha é grande demais para o navegador criar. Mantenha menos quadros, escolha um tamanho menor ou use a grade.",
    "CSS animation": "Animação CSS",
    "Copy": "Copiar",
    "Could not copy.": "Não foi possível copiar.",
    "Uses the average frame time, so frames with longer pauses play at the same pace as the rest.":
      "Usa o tempo médio dos quadros, então quadros com pausas mais longas tocam no mesmo ritmo dos outros.",
  },
};

export default content;
