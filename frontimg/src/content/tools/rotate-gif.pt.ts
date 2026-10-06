import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.pt";

/** Portuguese copy for /pt/girar-gif. */
const content: ToolPageContent = {
  toolId: "rotate-gif",
  locale: "pt",
  name: "Girar GIF",
  tagline:
    "Gire GIFs animados 90° para a esquerda ou para a direita ou 180°, ou espelhe como num espelho — todos os quadros giram do mesmo jeito e a animação continua tocando. Grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Girar GIF Online Grátis — Rotacionar ou Espelhar GIF | oMyImage",
  metaDescription:
    "Gire GIFs animados 90° ou 180°, ou espelhe na horizontal ou vertical, online e grátis. Todos os quadros e a temporização são mantidos. No navegador, sem upload.",

  intro:
    "Um GIF gravado com o celular na posição errada, ou um trecho que precisa ser espelhado para olhar para o outro lado, não tem conserto na maioria dos editores sem perder a animação. O Girar GIF do oMyImage gira a animação inteira de uma vez: escolha 90° à esquerda, 90° à direita ou 180°, acrescente um espelhamento horizontal ou vertical se precisar, e veja a prévia se mexer enquanto escolhe. Todos os quadros giram do mesmo jeito, mantêm a duração e mantêm as cores exatas, então o resultado fica igual ao original — só que na posição certa.",

  sections: [
    {
      heading: "Quando um GIF precisa girar",
      id: "when",
      body: [
        "O celular grava na direção em que está sendo segurado, e nem todo conversor de GIF lê a informação de orientação que manda o player girar o vídeo. Por isso um vídeo feito em pé pode virar um GIF deitado. Gravações de tela de um monitor girado, desenhos animados escaneados e GIFs salvos de aplicativos que cortam de um jeito estranho têm o mesmo problema.",
        "Girar corrige o próprio arquivo, não só o modo como um aplicativo o mostra, então o GIF fica na posição certa em qualquer lugar onde você postar ou mandar.",
      ],
    },
    {
      heading: "Girar ou espelhar",
      id: "modes",
      body: [
        "Girar roda a imagem em volta do centro: 90° à direita (sentido horário), 90° à esquerda (anti-horário) ou 180° (de cabeça para baixo). Um quarto de volta troca largura e altura, então um GIF de 480 × 270 vira 270 × 480; meia volta mantém o tamanho.",
        "Espelhar inverte a imagem. O espelhamento horizontal troca esquerda e direita — útil quando a pessoa deve olhar para dentro da página ou para uma legenda — e o vertical troca cima e baixo. Textos num GIF espelhado ficam ao contrário, então espelhe só quando isso não importar.",
        "Dá para combinar giro e espelhamento: 90° mais o espelhamento horizontal, por exemplo, gera uma versão em retrato espelhada. A prévia mostra a combinação antes de qualquer processamento.",
      ],
    },
    {
      heading: "O que continua igual",
      id: "kept",
      body: [
        "Cada quadro mantém a sua duração, então a animação toca na mesma velocidade e repete exatamente como antes. Áreas transparentes continuam transparentes.",
        "Um giro em múltiplos de 90° move os pixels sem misturá-los, então nada é reamostrado nem fica borrado. Quando as cores do GIF cabem numa paleta — o que vale para a maioria —, essas mesmas cores são gravadas de volta. GIFs feitos de vídeo às vezes usam uma paleta por quadro; esses recebem uma paleta única de 256 cores, escolhida a partir de todos os quadros, o que raramente se nota.",
      ],
    },
    {
      heading: "Retrato e paisagem",
      id: "orientation",
      body: [
        "Um vídeo de celular deitado transformado em GIF em pé combina com stories, telas de celular e conversas, onde animações altas ocupam mais espaço. No sentido contrário, um GIF em retrato girado para paisagem encaixa melhor em slides, sites e banners no formato de vídeo.",
        "Se o resultado também precisar de um formato específico — quadrado para avatar, por exemplo —, recorte depois com o Recortar GIF; se precisar de um tamanho exato em pixels, use o Redimensionar GIF.",
      ],
    },
    {
      heading: "Tamanho do arquivo",
      id: "size",
      body: [
        "Girar não acrescenta nem tira pixels, então o arquivo costuma ficar perto do tamanho original. Ele pode sair um pouco maior ou menor, porque a compressão do GIF trabalha linha por linha e uma imagem girada tem linhas diferentes. Para diminuir de propósito, passe o resultado pelo Comprimir GIF.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é decodificado, girado e codificado inteiramente no seu navegador. Ele nunca é enviado e nada fica guardado depois que você fecha a página — vídeos pessoais e gravações de tela continuam no seu aparelho.",
      ],
    },
    {
      heading: "Girar imagens paradas",
      id: "stills",
      body: [
        "Para fotos JPG, PNG e WEBP, use o Girar imagem: ele trabalha com vários arquivos de uma vez e também gira em qualquer ângulo, não só de 90 em 90 graus. O Girar GIF existe porque os giradores comuns guardam só o primeiro quadro de uma animação.",
      ],
    },
    {
      heading: "GIFs do celular",
      id: "phone",
      body: [
        "No celular, o jeito mais comum de ter um GIF deitado é gravar a tela ou um vídeo com o aparelho na horizontal e convertê-lo depois. Antes de mandar o GIF no WhatsApp ou postar, abra esta página no próprio navegador do celular, escolha o giro e baixe — o arquivo corrigido fica salvo direto no aparelho.",
      ],
    },
  ],

  howToTitle: "Como girar um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha o giro", description: "Escolha 90° à esquerda, 90° à direita ou 180°, e um espelhamento se precisar; a prévia se atualiza na hora." },
    { title: "Gire e baixe", description: "Clique em Girar GIF, compare com o original e baixe o resultado." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Girar ou espelhar", description: "90° para a esquerda ou direita, 180° e espelhamento horizontal ou vertical." },
    { icon: "visibility", title: "Prévia ao vivo", description: "Veja a animação girada antes de processar." },
    { icon: "lock", title: "Sem upload", description: "Girado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como girar um GIF animado?", a: "Adicione o GIF, escolha 90° à esquerda, 90° à direita ou 180° e clique em Girar GIF. Todos os quadros giram e a animação continua tocando." },
    { q: "Dá para espelhar um GIF na horizontal?", a: "Sim. Escolha Horizontal em Espelhar para inverter da esquerda para a direita, com ou sem giro." },
    { q: "O GIF continua animado?", a: "Sim. Todos os quadros ficam com a temporização original, e o GIF repete como antes." },
    { q: "Girar diminui a qualidade?", a: "Não. Giros de 90° movem os pixels sem misturá-los, e as cores originais são reaproveitadas quando cabem numa paleta." },
    { q: "Por que largura e altura trocaram?", a: "Um giro de 90° deita a imagem, então um GIF de 480 × 270 vira 270 × 480. Um giro de 180° mantém o tamanho." },
    { q: "Posso girar num ângulo qualquer?", a: "Aqui não. O Girar GIF gira de 90 em 90 graus, o que mantém cada pixel nítido; outros ângulos borrariam os quadros e criariam cantos vazios." },
    { q: "A transparência é mantida?", a: "Sim. GIFs transparentes continuam transparentes." },
    { q: "O tamanho do arquivo muda?", a: "Só um pouco. Nenhum pixel entra ou sai, mas a compressão pode variar um pouco com a nova orientação." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. O GIF é girado inteiramente no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular. GIFs grandes demoram um pouco mais." },
    { q: "Dá para girar um GIF que veio de um vídeo?", a: "Sim, como qualquer outro GIF. Para girar o próprio vídeo, transforme-o em GIF antes com o Vídeo para GIF." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite de GIFs." },
    { q: "Posso girar e espelhar ao mesmo tempo?", a: "Sim. Escolha o giro e o espelhamento juntos; a prévia mostra o resultado combinado." },
  ],

  security:
    "Seu GIF é girado inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
