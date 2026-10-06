import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/gif-para-mp4. */
const content: ToolPageContent = {
  toolId: "gif-to-mp4",
  locale: "pt",
  name: "GIF para MP4",
  tagline:
    "Converta GIFs em vídeo MP4 — em geral bem menor, com cores mais suaves e aceito em toda plataforma que recebe vídeo. Repita GIFs curtos, escolha um fundo e baixe. Grátis, no navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "GIF para MP4 Online Grátis — Vídeos Leves | oMyImage",
  metaDescription:
    "Converta GIF em MP4 online e grátis. O MP4 costuma ser bem menor e toca em todo lugar; repita GIFs curtos e escolha um fundo. No navegador, sem enviar nada.",

  intro:
    "O GIF é um formato antigo: 256 cores por quadro e uma compressão que nunca foi feita para movimento. O vídeo MP4 faz o mesmo trabalho numa fração do espaço e é o que Instagram, TikTok e a maioria dos aplicativos realmente querem. O conversor de GIF para MP4 do oMyImage transforma seu GIF num MP4 H.264 usando o próprio codificador de vídeo do navegador, mantém o tempo de cada quadro e permite repetir um loop curto para o vídeo durar o suficiente para postar.",

  sections: [
    {
      heading: "Por que converter GIF em MP4",
      id: "why",
      body: [
        "O principal motivo é o tamanho. A compressão de vídeo prevê o movimento entre quadros e guarda as cores de forma muito mais eficiente, então a mesma animação em MP4 costuma ser várias vezes menor que o GIF — às vezes dez vezes ou mais em GIFs detalhados ou fotográficos. A ferramenta mostra os dois tamanhos para você ver a diferença no seu arquivo.",
        "O segundo motivo é onde ele pode ir. Instagram e TikTok aceitam vídeo, não GIF; muitos aplicativos de conversa e programas de apresentação também lidam melhor com MP4. Mesmo sites que mostram um \"GIF\" muitas vezes o convertem em vídeo por trás.",
      ],
    },
    {
      heading: "Fazendo repetir",
      id: "loop",
      body: [
        "O GIF repete sozinho; o MP4 só repete se o player mandar. A maioria das plataformas toca um vídeo curto uma vez ou repete do jeito delas, e clipes muito curtos podem ser recusados ou parecer abruptos. Escolha 2×, 3× ou 5× para repetir a animação dentro do vídeo, e um GIF de um segundo vira alguns segundos de loop suave.",
        "O painel mostra quanto o vídeo vai durar com a sua escolha, para você acertar a duração de que a plataforma gosta.",
      ],
    },
    {
      heading: "Transparência e fundo",
      id: "background",
      body: [
        "O vídeo MP4 comum não tem transparência, então as áreas transparentes do GIF recebem uma cor de fundo — branca por padrão. Escolha a cor da página ou da conversa onde o vídeo vai aparecer, e uma figurinha ou logotipo transparente vai se misturar como se o fundo nem existisse.",
      ],
    },
    {
      heading: "Qualidade e tempo",
      id: "quality",
      body: [
        "Cada quadro é codificado com a própria duração, então GIFs com tempo irregular — uma pausa no último quadro, por exemplo — tocam exatamente como antes. O vídeo é codificado com uma taxa de bits generosa para o tamanho, o que mantém cores chapadas e textos limpos.",
        "O MP4 tem as dimensões do GIF; se a largura ou a altura for um número ímpar, uma linha ou coluna de fundo é acrescentada, porque o vídeo H.264 precisa de tamanhos pares.",
      ],
    },
    {
      heading: "Navegadores compatíveis",
      id: "browsers",
      body: [
        "A conversão usa o codificador de vídeo WebCodecs que vem nos navegadores modernos. Chrome, Edge e Safari conseguem criar MP4 (H.264); se o seu navegador não conseguir, a ferramenta avisa em vez de gerar um arquivo quebrado. O MP4 resultante toca em praticamente todo celular, computador e aplicativo.",
        "Nada é enviado: o GIF é decodificado e o vídeo é codificado no seu aparelho, o que também significa que GIFs maiores demoram um pouco mais em celulares mais lentos.",
      ],
    },
    {
      heading: "MP4 em slides e conversas",
      id: "uses",
      body: [
        "PowerPoint, Keynote e Google Slides inserem vídeo MP4, e um MP4 curto deixa a apresentação bem mais leve que a mesma animação em GIF. Configure o vídeo para tocar automaticamente e repetir no programa de slides, e ele se comporta exatamente como o GIF.",
        "Nas conversas, o MP4 é enviado mais rápido, gasta menos dados móveis e aguenta melhor ser encaminhado, porque os aplicativos recomprimem GIFs grandes com muito mais força do que vídeos curtos.",
      ],
    },
  ],

  howToTitle: "Como converter GIF em MP4",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha repetição e fundo", description: "Repita GIFs curtos para o vídeo durar alguns segundos e escolha um fundo para a transparência." },
    { title: "Converta e baixe", description: "Clique em Converter para MP4, veja a prévia e baixe o vídeo." },
  ],

  features: [
    { icon: "compress", title: "Arquivos bem menores", description: "O MP4 guarda a mesma animação numa fração do tamanho do GIF." },
    { icon: "speed", title: "Tempo de cada quadro mantido", description: "Atrasos irregulares e pausas tocam exatamente como no GIF." },
    { icon: "lock", title: "Nada é enviado", description: "Codificado pelo seu próprio navegador; o GIF nunca sai do aparelho." },
  ],

  faqs: [
    { q: "Como converter GIF em MP4?", a: "Adicione o GIF, escolha quantas vezes ele deve tocar e uma cor de fundo, e clique em Converter para MP4." },
    { q: "O MP4 fica menor que o GIF?", a: "Em geral bem menor — várias vezes, muitas vezes mais em GIFs detalhados. Os dois tamanhos aparecem depois da conversão." },
    { q: "Posso postar o MP4 no Instagram ou no TikTok?", a: "Pode. Esses aplicativos aceitam vídeo, não GIF. Repita GIFs curtos para o vídeo durar alguns segundos." },
    { q: "O MP4 vai repetir?", a: "Só se o player repetir. Use a opção de repetição para repetir a animação dentro do vídeo." },
    { q: "O que acontece com a transparência?", a: "O MP4 não tem transparência, então as áreas transparentes recebem a cor de fundo escolhida." },
    { q: "Por que não funciona no meu navegador?", a: "Seu navegador não tem codificador de vídeo MP4. Use o Chrome, o Edge ou o Safari." },
    { q: "O MP4 tem som?", a: "Não. GIFs não têm som, então o vídeo é mudo." },
    { q: "O tempo é mantido?", a: "É. Cada quadro mantém a própria duração, inclusive pausas." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. A conversão acontece inteiramente no seu navegador." },
    { q: "Posso converter vários GIFs de uma vez?", a: "Um por vez, para cada GIF ter a própria prévia, repetição e fundo." },
  ],

  security:
    "Seu GIF é decodificado e codificado como vídeo pelo seu próprio navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // GifToMp4Tool.tsx
    "Select a GIF": "Selecionar GIF",
    "or drop a GIF here": "ou solte um GIF aqui",
    "Please select a GIF.": "Selecione um GIF.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "MP4 settings": "Configurações do MP4",
    "Convert to MP4": "Converter para MP4",
    "Download MP4": "Baixar MP4",
    "Saving…": "Salvando…",
    "Working… {p}%": "Processando… {p}%",
    "Your MP4 will appear here.": "Seu MP4 vai aparecer aqui.",
    "GIF": "GIF", // i18n-same
    "MP4": "MP4", // i18n-same
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
    "{p}% smaller": "{p}% menor",
    "{n}×": "{n}×", // i18n-same
    "Encoded by your browser as H.264 — plays everywhere.": "Codificado pelo seu navegador em H.264 — toca em todo lugar.",
    "Play the animation": "Tocar a animação",
    "Video doesn't loop by itself on most sites. Repeat a short GIF so the MP4 lasts a few seconds — {s} s now.":
      "Na maioria dos sites o vídeo não repete sozinho. Repita um GIF curto para o MP4 durar alguns segundos — agora são {s} s.",
    "Background for transparent areas": "Fundo das áreas transparentes",
    "Your GIF is converted in your browser and never uploaded.": "Seu GIF é convertido no navegador e nunca é enviado.",
  },
};

export default content;
