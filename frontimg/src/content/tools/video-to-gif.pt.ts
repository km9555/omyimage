import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/video-para-gif. */
const content: ToolPageContent = {
  toolId: "video-to-gif",
  locale: "pt",
  name: "Vídeo para GIF",
  tagline:
    "Transforme um trecho de vídeo MP4, WEBM ou MOV num GIF que repete — corte, escolha a taxa de quadros e o tamanho, e veja o resultado antes de baixar. Grátis, e o vídeo nunca sai do navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Vídeo para GIF Online Grátis — MP4 para GIF | oMyImage",
  metaDescription:
    "Converta vídeo em GIF online e grátis: corte um trecho de MP4, WEBM ou MOV, escolha taxa de quadros e tamanho, e baixe um GIF que repete. No navegador, sem enviar nada.",

  intro:
    "Um GIF toca em qualquer lugar onde uma imagem pode ir: conversas, fóruns, e-mails, slides e caixas de comentário que nunca tocariam um vídeo sozinhas. O conversor de Vídeo para GIF do oMyImage recorta o momento que você quer de um arquivo de vídeo e o transforma num GIF que repete. Adicione um MP4, WEBM ou MOV, marque o início e o fim enquanto assiste, escolha quão suave e quão grande ele deve ficar, e baixe o GIF. O vídeo é decodificado pelo seu próprio navegador, então nunca é enviado a lugar nenhum.",

  sections: [
    {
      heading: "Escolhendo o momento",
      id: "trim",
      body: [
        "GIFs funcionam melhor como loops curtos: uma reação, um produto girando, um passo de tutorial, o final de uma piada. Toque o vídeo e aperte Começar aqui e Terminar aqui nos momentos certos, ou digite os tempos em segundos. A ferramenta começa com os cinco primeiros segundos selecionados, porque a maioria dos bons GIFs é mais curta que isso.",
        "Cada segundo pesa no tamanho do arquivo. Um GIF guarda cada quadro como uma imagem, então um trecho de 10 segundos tem o dobro de quadros de um de 5 — e mais ou menos o dobro do tamanho. Cortar só a parte que as pessoas precisam ver é a maior economia.",
      ],
    },
    {
      heading: "Taxa de quadros e largura",
      id: "settings",
      body: [
        "Quadros por segundo decidem quão suave o movimento parece. 10 fps é o jeito clássico de GIF e mantém arquivos pequenos; 15 fps é visivelmente mais suave para movimentos rápidos; 20–25 fps se aproxima de vídeo, mas dobra ou mais o número de quadros. Para gravações de tela e cenas lentas, 5–10 fps muitas vezes bastam.",
        "A largura é a outra grande alavanca. 480 pixels servem para a maioria das conversas e páginas; 320 é bom para reações e incorporações pequenas; 640 ou a largura original é para tutoriais em que letras pequenas precisam continuar legíveis. A altura acompanha o formato do próprio vídeo, então nada fica esticado.",
      ],
    },
    {
      heading: "Qualidade e tamanho do arquivo",
      id: "quality",
      body: [
        "O GIF mostra só 256 cores, escolhidas aqui uma vez para o trecho inteiro, para as cores ficarem estáveis de um quadro para outro. Alta mantém as 256 e só ignora a oscilação mais leve; Média usa 128 cores e congela pequenas mudanças entre quadros; Arquivo pequeno vai além, o que combina com cenas simples e gravações de tela.",
        "Por trás, cada quadro depois do primeiro guarda só os pixels que mudaram, e o resto aparece do quadro anterior. O ruído do vídeo atrapalha isso — por isso os ajustes mais baixos tratam mudanças mínimas como nenhuma mudança, e é assim que cortam tanto o tamanho em gravações reais.",
      ],
    },
    {
      heading: "Quais vídeos funcionam",
      id: "formats",
      body: [
        "Qualquer vídeo que seu navegador toque funciona: MP4 (H.264), WEBM (VP8, VP9 ou AV1) e a maioria dos MOV. Vídeos de iPhone gravados em HEVC só tocam onde o sistema tem HEVC, como no Safari de Mac ou iPhone; em outros lugares pode aparecer um erro. Deixar a câmera do iPhone em Mais Compatível (Ajustes, Câmera, Formatos) grava em H.264, que funciona em todo lugar.",
        "O som é descartado, porque o GIF não tem áudio. A proporção, as cores e o tempo do trecho são mantidos, e o GIF repete para sempre, a não ser que você desmarque Repetir sempre.",
      ],
    },
    {
      heading: "Trechos longos e memória",
      id: "limits",
      body: [
        "Os quadros ficam na memória até o GIF ser gravado, então trechos muito longos ou muito grandes têm limite. Se a ferramenta disser que o trecho é longo demais para o tamanho, encurte-o, diminua a taxa de quadros ou escolha uma largura menor; o painel mostra quantos quadros você vai gerar. Para qualquer coisa acima de meio minuto, GIF raramente é o formato certo — um MP4 curto será menor e mais bonito.",
      ],
    },
  ],

  howToTitle: "Como converter um vídeo em GIF",
  steps: [
    { title: "Adicione um vídeo", description: "Selecione um arquivo MP4, WEBM ou MOV do computador ou do celular." },
    { title: "Corte e ajuste", description: "Marque o início e o fim e escolha taxa de quadros, largura e qualidade." },
    { title: "Crie o GIF", description: "Clique em Criar GIF, confira a prévia e baixe." },
  ],

  features: [
    { icon: "gif_box", title: "Corte no momento certo", description: "Marque início e fim enquanto o vídeo toca, com precisão de décimo de segundo." },
    { icon: "tune", title: "Tamanho sob controle", description: "Taxa de quadros, largura e qualidade deixam o GIF o menor possível." },
    { icon: "lock", title: "Nada é enviado", description: "Seu vídeo é decodificado e convertido pelo seu próprio navegador." },
  ],

  faqs: [
    { q: "Como converter um vídeo em GIF?", a: "Adicione o vídeo, marque início e fim, escolha taxa de quadros e largura e clique em Criar GIF. Confira a prévia e baixe." },
    { q: "Dá para converter MP4 em GIF?", a: "Dá. MP4 com H.264 funciona em todo navegador; WEBM e MOV também." },
    { q: "Por que meu vídeo do iPhone não abre?", a: "Provavelmente é HEVC, que alguns navegadores não tocam. Use o Safari, ou deixe a câmera do iPhone em Mais Compatível para gravar em H.264." },
    { q: "Qual pode ser a duração do GIF?", a: "Curto é melhor — alguns segundos. Trechos maiores são possíveis com taxas e larguras menores; a ferramenta avisa quando o trecho é longo demais." },
    { q: "Como deixar o GIF menor?", a: "Corte-o, use 10 fps, escolha uma largura menor como 320 ou 480 e selecione Média ou Arquivo pequeno." },
    { q: "O GIF mantém o som?", a: "Não. O GIF não tem áudio, então o som é descartado." },
    { q: "O GIF vai repetir?", a: "Vai, para sempre por padrão. Desmarque Repetir sempre para tocar uma vez." },
    { q: "Que taxa de quadros usar?", a: "10 fps para a maioria dos trechos, 15 fps para movimento rápido, 5–10 fps para gravações de tela." },
    { q: "Meu vídeo é enviado?", a: "Não. Ele é decodificado e transformado em GIF inteiramente no seu navegador." },
    { q: "Funciona no celular?", a: "Funciona, no navegador do celular, com vídeos que ele consiga tocar. Trechos curtos são mais rápidos no celular." },
  ],

  security:
    "Seu vídeo é decodificado pelo seu próprio navegador e o GIF é montado no seu aparelho. Nada é enviado, guardado ou rastreado.",

  ui: {
    // VideoToGifTool.tsx
    "Select a video": "Selecionar vídeo",
    "or drop an MP4, WEBM or MOV video here": "ou solte aqui um vídeo MP4, WEBM ou MOV",
    "Please select a video file.": "Selecione um arquivo de vídeo.",
    "This video can't be played in your browser.": "Este vídeo não pode ser reproduzido no seu navegador.",
    "Clear video": "Limpar vídeo",
    "Change video": "Trocar vídeo",
    "GIF settings": "Configurações do GIF",
    "Make GIF": "Criar GIF",
    "Download GIF": "Baixar GIF",
    "Saving…": "Salvando…",
    "Working… {p}%": "Processando… {p}%",
    "Your GIF will appear here.": "Seu GIF vai aparecer aqui.",
    "Video": "Vídeo",
    "GIF": "GIF", // i18n-same
    "Start here": "Começar aqui",
    "End here": "Terminar aqui",
    "Start": "Início",
    "End": "Fim",
    "Clip (seconds)": "Trecho (segundos)",
    "{len} s of {total} s. Use Start here and End here while the video plays.":
      "{len} s de {total} s. Use Começar aqui e Terminar aqui enquanto o vídeo toca.",
    "Frames per second": "Quadros por segundo",
    "Width (px)": "Largura (px)",
    "Original ({w})": "Original ({w})", // i18n-same
    "Loop forever": "Repetir sempre",
    "{n} frames": "{n} quadros",
    "{n} frames at {w} × {h} px": "{n} quadros em {w} × {h} px",
    "Too long for this size — shorten the clip, lower the frame rate or the width.":
      "Longo demais para este tamanho — encurte o trecho ou diminua a taxa de quadros ou a largura.",
    "Your video is converted in your browser and never uploaded.": "Seu vídeo é convertido no navegador e nunca é enviado.",
    // QUALITY_LABEL (module scope)
    "High": "Alta",
    "Medium": "Média",
    "Small file": "Arquivo pequeno",
  },
};

export default content;
