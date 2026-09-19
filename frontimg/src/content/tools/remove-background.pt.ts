import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/remover-fundo.
 *
 * Head term "remover fundo" / "remover fundo de imagem" — iLoveIMG
 * /pt/remover-fundo; "tirar fundo", "fundo transparente" and "PNG
 * transparente" are the colloquial long tail (sections, FAQs, aliases.ts).
 * The Brazilian marketplace angle (Mercado Livre, Shopee, catálogo do
 * WhatsApp Business) replaces the English page's Amazon/eBay example, because
 * that is where a Brazilian seller needs a white background.
 */
const content: ToolPageContent = {
  toolId: "remove-background",
  locale: "pt",
  name: "Remover fundo de imagem",
  seoName: "Remover fundo",
  tagline:
    "Remova o fundo de qualquer imagem automaticamente com IA e baixe um PNG transparente e limpo. Com o motor de código aberto rembg.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Remover fundo de imagem online grátis — PNG transparente | oMyImage",
  metaDescription:
    "Remova o fundo de fotos online e grátis com IA. Recorte pessoas, produtos e objetos e baixe um PNG com fundo transparente, pronto para Mercado Livre e Shopee.",

  intro:
    "Remover o fundo de uma imagem agora leva um clique. A ferramenta Remover fundo do oMyImage usa um modelo de IA de código aberto para detectar o assunto principal — uma pessoa, um produto ou um objeto — e deixar todo o resto transparente, entregando um PNG limpo para lojas virtuais, apresentações e designs. O processamento pesado de IA roda no nosso servidor, e o resultado é baixado como PNG com fundo transparente.",

  sections: [
    {
      heading: "O que o modelo realmente faz",
      id: "how",
      body: [
        "Isto não é chroma key. Os removedores de fundo antigos procuravam uma faixa de pixels parecidos — a técnica do fundo verde — e desmoronavam assim que o fundo era cheio de detalhes ou o assunto tinha a mesma cor dele. O que roda aqui é um modelo de segmentação treinado com uma quantidade enorme de imagens, que calcula para cada pixel a probabilidade de ele pertencer ao assunto em primeiro plano.",
        "É por isso que ele funciona com uma pessoa em pé em uma sala comum, e não só na frente de um fundo de estúdio. Ele aprendeu como pessoas, produtos e animais costumam ser, então consegue separá-los de um fundo que nunca viu antes.",
        "Isso também explica os casos em que ele erra. Quando o modelo fica em dúvida — porque assunto e fundo têm tons parecidos, porque a borda é realmente ambígua ou porque o assunto é algo incomum — o recorte fica suave ou serrilhado exatamente nesses pontos. Ele está fazendo uma estimativa bem informada, não uma medição.",
      ],
    },
    {
      heading: "Como conseguir um recorte limpo",
      id: "tips",
      body: [
        "Contraste é o que mais importa. Um assunto que se diferencia do fundo em brilho ou cor é separado com perfeição; um que se mistura com ele, não. Se você controla a foto, essa única escolha ajuda mais do que qualquer configuração.",
        "Luz uniforme e difusa também ajuda. Sombras fortes caindo sobre a divisa entre assunto e fundo confundem a borda, e um assunto iluminado por trás muitas vezes perde o contorno por completo. A resolução pesa nas bordas — uma imagem pequena e muito comprimida dá menos informação ao modelo, e os defeitos do JPG em volta das bordas são justamente onde os recortes dão errado.",
        "Por fim, sempre que puder, mantenha o assunto inteiro dentro do quadro. Algo cortado pela borda da foto não dá ao modelo nenhum contorno para encontrar daquele lado, e o resultado costuma ser um corte reto ao longo da borda.",
      ],
    },
    {
      heading: "O que fazer com um PNG transparente",
      id: "uses",
      body: [
        "O uso mais comum é a foto de produto para anúncio em marketplace, em que o fundo branco ou transparente muitas vezes é uma exigência, e não uma preferência. Mercado Livre, Shopee, Amazon e o catálogo do WhatsApp Business destacam produtos com fundo limpo, e muitas plataformas pedem isso explicitamente na foto principal.",
        "Além disso: fotos de perfil e de equipe que precisam ficar sobre a cor da marca, slides de apresentação em que o assunto \"flutuando\" fica muito melhor do que uma foto com um retângulo destoando atrás, logotipos e figurinhas, e qualquer trabalho de design em que o assunto precise ficar por cima de outros elementos. Como o resultado é um PNG comum com canal alfa, qualquer programa de design entende.",
      ],
    },
    {
      heading: "Por que esta ferramenta precisa de um servidor",
      id: "server",
      body: [
        "Quase tudo neste site roda dentro do seu navegador. A remoção de fundo não, e o motivo é o tamanho: o modelo de segmentação é grande demais para ser baixado em uma aba do navegador de forma sensata, e precisa de mais processamento do que uma aba consegue oferecer com folga.",
        "Por isso o modelo roda como um processo separado na nossa máquina. Sua imagem é enviada por uma conexão HTTPS criptografada, processada, e tanto o envio quanto o resultado são excluídos em até uma hora. Nada é guardado, indexado ou usado para treinar modelos. As páginas que enviam seus arquivos dizem isso claramente, em vez de dar a entender o contrário.",
      ],
    },
  ],

  howToTitle: "Como remover o fundo de uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma imagem, ou arraste e solte na área de trabalho." },
    { title: "Remova o fundo", description: "Clique em Remover fundo — nossa IA detecta o assunto e recorta o resto." },
    { title: "Baixe", description: "Baixe o seu recorte como PNG transparente, pronto para qualquer fundo." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Detecção do assunto com IA", description: "Uma rede neural de código aberto encontra pessoas, produtos e objetos e remove o fundo automaticamente." },
    { icon: "opacity", title: "PNG transparente", description: "O resultado é um PNG transparente e limpo, que você pode colocar sobre qualquer cor, foto ou design." },
    { icon: "verified_user", title: "Motor de código aberto", description: "Funciona com o rembg — gratuito, de código aberto e liberado para uso comercial." },
  ],

  faqs: [
    { q: "Como funciona a remoção de fundo?", a: "Um modelo de IA (U²-Net, pelo projeto de código aberto rembg) identifica o assunto principal e deixa todo o resto transparente." },
    { q: "Em que formato fica o resultado?", a: "Em PNG transparente, para você colocar o assunto sobre qualquer fundo novo." },
    { q: "Funciona com produtos e pessoas?", a: "Sim — funciona bem com pessoas, produtos, animais e a maioria dos assuntos bem definidos. Detalhes muito finos, como fios de cabelo soltos, podem variar." },
    { q: "É grátis e de código aberto mesmo?", a: "Sim. O motor (rembg + U²-Net) é de código aberto e liberado para uso comercial." },
    { q: "Minhas imagens ficam guardadas?", a: "Não. Os arquivos processados ficam guardados só por pouco tempo para o seu link de download e são excluídos automaticamente em até uma hora." },
    { q: "Que tipo de imagem funciona melhor?", a: "Um assunto bem definido sobre um fundo com o qual ele contrasta. Retratos, produtos sobre uma superfície lisa e animais de estimação funcionam bem. O modelo tem dificuldade quando assunto e fundo têm cores e tons parecidos — um gato cinza em um sofá cinza é realmente difícil." },
    { q: "Funciona com cabelo e pelos?", a: "Razoavelmente bem, e era exatamente aqui que a remoção de fundo costumava falhar feio. Fios finos são o caso mais difícil para qualquer recorte, então espere que o modelo acerte o formato geral e perca alguns fios soltos na borda. Uma boa separação entre assunto e fundo ajuda muito." },
    { q: "Por que o resultado precisa ser PNG?", a: "Porque a transparência precisa de um canal alfa, e o JPG não tem. Se você salvasse o recorte em JPG, a área removida voltaria como branco sólido, o que acaba com o propósito. O WEBP também aceita transparência, se você precisar de um arquivo menor para a web." },
    { q: "Posso colocar um fundo novo atrás do assunto?", a: "Sim — com o PNG transparente em mãos, abra-o no Editor de fotos ou na ferramenta Adicionar borda para colocá-lo sobre uma cor, ou use em qualquer programa de design. O recorte é um PNG normal com transparência, então qualquer programa que entenda PNG funciona." },
    { q: "Por que esta ferramenta roda em um servidor e as outras não?", a: "Porque ela usa uma rede neural grande demais para ser baixada em uma aba do navegador. O modelo roda como um processo separado na nossa máquina, sua imagem é enviada por HTTPS, e tanto o envio quanto o resultado são excluídos em até uma hora." },
    { q: "Posso remover o fundo de várias imagens de uma vez?", a: "Esta ferramenta processa uma imagem por vez, porque cada execução é uma inferência pesada de modelo, e não uma operação rápida de pixels. Para um lote, processe uma depois da outra — cada uma leva alguns segundos." },
    { q: "Como deixar o fundo branco para o Mercado Livre ou a Shopee?", a: "Remova o fundo aqui para ter um PNG transparente e depois coloque-o sobre branco na ferramenta Adicionar borda ou no Editor de fotos, exportando em JPG. O resultado é o produto sobre um fundo branco puro, como os marketplaces pedem na foto principal." },
  ],

  security:
    "O processamento roda no nosso servidor com o motor de código aberto rembg. Os resultados ficam guardados só por pouco tempo, atrás de um link de download privado, e são excluídos automaticamente em até uma hora. Nunca compartilhamos nem reutilizamos suas imagens.",

  rating: { value: "4.8", count: "974" },

  ui: {
    // RemoveBgTool.tsx (the rest of the chrome is ServerImageTool → common.ts)
    "Remove background": "Remover fundo",
    "Removing background…": "Removendo o fundo…",
    "or drop a JPG, PNG or WEBP here": "ou solte um JPG, PNG ou WEBP aqui",
    "a transparent PNG. Powered by the open-source rembg engine on the server.":
      "um PNG transparente. Feito com o motor de código aberto rembg, no servidor.",
    // Backend sentences this tool can surface (routes/image/remove-background).
    "Background removal isn't enabled on this server (rembg not installed).":
      "A remoção de fundo não está disponível neste servidor no momento.",
  },
};

export default content;
