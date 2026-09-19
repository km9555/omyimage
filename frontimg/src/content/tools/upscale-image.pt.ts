import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/melhorar-qualidade-imagem.
 *
 * Head term "melhorar qualidade da imagem/foto" — Fotor /pt, PicWish /pt and
 * CapCut pt-br title on it; iLoveIMG uses "ampliar imagem". Brazilians search
 * for the RESULT (a better photo) far more than for the operation
 * ("upscale"), so the H1 names the result and the copy explains the
 * enlargement. "aumentar resolução", "foto em HD" and "tirar desfoque" live in
 * aliases.ts.
 */
const content: ToolPageContent = {
  toolId: "upscale-image",
  locale: "pt",
  name: "Melhorar qualidade da imagem",
  tagline:
    "Aumente e melhore imagens em até 4× com uma IA que cria detalhes de verdade em vez de borrar — e ainda deixa nítidas fotos moles, granuladas ou comprimidas. Com o Real-ESRGAN de código aberto.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Melhorar qualidade da imagem online grátis com IA — até 4× | oMyImage",
  metaDescription:
    "Melhore a qualidade de fotos online e grátis com IA: aumente a resolução em 2×, 3× ou 4× sem borrar, recuperando bordas e texturas. JPG, PNG e WEBP, sem cadastro.",

  intro:
    "Melhorar a qualidade da imagem é o que você precisa quando uma foto pequena ou de baixa resolução tem que ficar maior sem virar um borrão. A ferramenta Melhorar qualidade da imagem do oMyImage usa o modelo de código aberto Real-ESRGAN para ampliar fotos em até 4×, reconstruindo bordas e texturas para o resultado continuar nítido. Ela roda no nosso servidor, porque a IA exige muito processamento, e entrega uma imagem em alta resolução para baixar.",

  sections: [
    {
      heading: "Interpolação versus reconstrução",
      id: "how",
      body: [
        "O redimensionamento comum tem um limite embutido. Quando você dobra as dimensões de uma imagem, três de cada quatro pixels de saída não têm um pixel de origem por trás, então o algoritmo tira a média dos vizinhos. Tirar a média produz transições suaves, que é outro jeito de dizer que produz borrão — as bordas amolecem, a textura fina some, e a ampliação parece exatamente o que é.",
        "Um modelo de super-resolução ataca o problema de outro jeito. Ele foi treinado com uma quantidade enorme de pares de imagens — a mesma cena em baixa e em alta resolução — e com isso aprendeu que tipo de detalhe costuma existir atrás de uma borda borrada. Diante de uma imagem nova em baixa resolução, ele prevê a versão em alta resolução em vez de tirar a média na direção dela.",
        "A diferença prática aparece mais nas bordas e nas texturas. Onde a interpolação dá um degradê mole, o modelo dá um contorno nítido; onde a interpolação dá uma massa sem forma, ele dá granulação, poros, trama de tecido ou folhagem plausíveis.",
      ],
    },
    {
      heading: "A limitação, sem rodeios",
      id: "limits",
      body: [
        "O detalhe é inventado. Isso não é uma crítica à técnica — é assim que ela funciona e, na maioria dos casos, é exatamente o que você quer. Mas significa que o resultado é uma reconstrução plausível, e não uma fotografia mais exata, e essa diferença importa em alguns contextos.",
        "Não use onde os pixels são prova. Perícia, imagens médicas, medição científica, ler uma placa de carro ou um documento em uma câmera de segurança — em todos esses casos o modelo vai produzir, sem hesitar, detalhes convincentes que nunca existiram, o que é pior do que uma imagem borrada, porque parece confiável.",
        "Para fotografia, e-commerce, impressão e design, nada disso se aplica. Você quer que a imagem pareça certa, e ela parece.",
      ],
    },
    {
      heading: "Comece pela melhor imagem que você tiver",
      id: "source",
      body: [
        "O modelo reconstrói a partir do que recebe, então uma entrada mais limpa dá um resultado melhor. Uma imagem pequena não é problema — esse é o objetivo —, mas uma imagem pequena que passou por várias rodadas de compressão JPG é, porque os blocos e halos são ampliados e ficam nítidos junto com o detalhe real.",
        "Se você pode escolher entre um PNG de 600 pixels e um JPG de 600 pixels da mesma imagem, use o PNG. Se você tem um original maior que diminuiu em algum momento, volte a ele. E se a imagem é um print de um print, espere que os defeitos sejam reproduzidos com toda a fidelidade e confiança.",
      ],
    },
    {
      heading: "Onde melhorar a qualidade faz diferença",
      id: "uses",
      body: [
        "O caso mais comum é uma imagem que fica ótima na tela e não serve para impressão. Uma foto de produto de 800 pixels aparece perfeitamente numa loja virtual e desmonta num panfleto, e ampliar com IA muitas vezes é a diferença entre refazer a sessão de fotos e não refazer.",
        "Outros usos comuns: fotos antigas de família digitalizadas em baixa resolução, imagens tiradas de um site velho sem os originais, miniaturas que precisam virar imagem de destaque, fotos recebidas pelo WhatsApp que chegaram comprimidas, e logotipos em baixa resolução que precisam ir para uma fachada. Em todos esses casos a alternativa não é uma imagem melhor — é imagem nenhuma.",
      ],
    },
  ],

  howToTitle: "Como melhorar a qualidade de uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma imagem, ou arraste e solte na área de trabalho." },
    { title: "Escolha a escala", description: "Escolha 2×, 3× ou 4× e clique em Melhorar — a IA cria detalhes enquanto amplia." },
    { title: "Baixe", description: "Baixe sua imagem maior e mais nítida." },
  ],

  features: [
    { icon: "hd", title: "Até 4× maior", description: "Amplie imagens pequenas ou de baixa resolução enquanto a IA reconstrói os detalhes em vez de borrar." },
    { icon: "auto_awesome", title: "Recuperação de detalhes", description: "O Real-ESRGAN restaura bordas e texturas para um resultado nítido, mesmo em fotos muito comprimidas." },
    { icon: "verified_user", title: "Motor de código aberto", description: "Funciona com o Real-ESRGAN — gratuito, de código aberto e liberado para uso comercial." },
  ],

  faqs: [
    { q: "Quanto posso ampliar uma imagem?", a: "Até 4×. Uma imagem de 500×500 vira 2000×2000, com detalhes reconstruídos pela IA em vez de um borrão." },
    { q: "Posso usar para melhorar uma foto sem ampliar?", a: "Sim — é a mesma operação. Escolha 2× para uma passada leve que deixa as bordas nítidas, limpa o ruído e recupera detalhes em fotos moles ou comprimidas. O resultado continua com o dobro das dimensões originais; diminua depois na ferramenta Redimensionar imagem se precisar do tamanho original." },
    { q: "Qual motor é usado?", a: "O Real-ESRGAN, um modelo de super-resolução de código aberto liberado para uso comercial." },
    { q: "Por que demora alguns segundos?", a: "Melhorar a qualidade exige muito processamento e roda no nosso servidor. Imagens maiores e escalas mais altas levam mais tempo." },
    { q: "Conserta uma foto muito borrada?", a: "Melhora bastante a nitidez e os detalhes, mas em casos extremos não consegue inventar uma informação que não existe." },
    { q: "Minhas imagens ficam guardadas?", a: "Não. Os resultados ficam guardados só por pouco tempo para o seu link de download e são excluídos automaticamente em até uma hora." },
    { q: "Qual a diferença para só redimensionar?", a: "Redimensionar interpola entre os pixels que você já tem, e por isso imagens ampliadas ficam moles — não há detalhe novo para usar. Este modelo foi treinado com milhões de pares de imagens e prevê como o detalhe que falta provavelmente era, então as bordas continuam nítidas e a textura é reconstruída em vez de espalhada." },
    { q: "O detalhe acrescentado é real?", a: "Não, e isso importa. O modelo inventa detalhes plausíveis, não recupera algo que foi capturado. Para fotografia, design e impressão é exatamente o que você quer. Para qualquer coisa que sirva de prova, perícia, medicina ou ciência é a ferramenta errada, porque o resultado tem informação que nunca esteve no original." },
    { q: "Em que tipo de imagem funciona melhor?", a: "Em fotografias com textura de verdade — rostos, paisagens, tecidos, folhagem. Também vai bem em gráficos limpos de baixa resolução. Tem dificuldade com imagens já muito comprimidas, porque amplia os defeitos do JPG junto com todo o resto." },
    { q: "Existe limite de tamanho?", a: "Sim. Há um teto de pixels de entrada, porque ampliar com IA exige muito processamento — o trabalho cresce com o tamanho de saída, não o de entrada. Imagens muito grandes são recusadas logo de início em vez de travar no meio. Se chegar no limite, recorte só a parte que você realmente precisa." },
    { q: "Em que formato recebo a imagem?", a: "No mesmo que você enviou — um JPG volta como JPG, um PNG como PNG, um WEBP como WEBP. Os JPGs são recodificados em alta qualidade com resolução de cor completa, então o arquivo continua com um tamanho sensato em vez de virar um PNG sem perdas muitas vezes maior. A transparência é mantida no PNG e no WEBP." },
    { q: "Posso ampliar a mesma imagem mais de uma vez?", a: "Pode, mas raramente ajuda. A segunda passada trabalha em cima dos detalhes inventados na primeira, e não de informação real, então os erros se acumulam e o resultado começa a parecer artificial. Uma passada a partir do melhor original quase sempre é melhor." },
    { q: "Dá para melhorar uma foto que veio pelo WhatsApp?", a: "Sim, e é um dos usos mais comuns. O WhatsApp comprime as fotos enviadas, e a IA recupera bordas e reduz a granulação que isso cria. Se você tiver acesso à foto original, com quem enviou, ela sempre vai dar um resultado melhor." },
  ],

  security:
    "A melhoria de qualidade roda no nosso servidor com o motor de código aberto Real-ESRGAN. Os resultados ficam guardados só por pouco tempo, atrás de um link de download privado, e são excluídos automaticamente em até uma hora. Nunca compartilhamos nem reutilizamos suas imagens.",

  rating: { value: "4.8", count: "612" },

  ui: {
    // UpscaleTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "or drop a JPG, PNG or WEBP here": "ou solte um JPG, PNG ou WEBP aqui",
    "Upscale": "Melhorar",
    "Upscaling…": "Melhorando…",
    "Scale factor": "Fator de escala",
    // Backend sentences this tool can surface (routes/image/upscale)
    "AI upscaling isn't enabled on this server (Real-ESRGAN not installed).":
      "A melhoria de qualidade com IA não está disponível neste servidor no momento.",
  },
};

export default content;
