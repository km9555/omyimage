import type { ToolPageContent } from "@/content/tools/types";
import object from "@/content/tools/remove-object.pt";

/** Portuguese copy for /pt/remover-marca-dagua. BR "remover marca d'água" 74K/mo. */
const content: ToolPageContent = {
  toolId: "remove-watermark",
  locale: "pt",
  name: "Remover marca d'água",
  tagline:
    "Tire marcas d'água, logos, textos e datas de fotos: marque, e a IA preenche a área combinando com o resto da imagem. Grátis e sem upload — roda no seu navegador.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Remover Marca d'Água de Foto Grátis — Com IA, Sem Upload | oMyImage",
  metaDescription:
    "Remova marcas d'água, logos, textos e datas de fotos de graça: marque e a IA preenche a área. Roda no seu navegador — sem upload e sem cadastro.",

  intro:
    "Uma marca d'água é um texto ou logo colocado sobre uma imagem, e tirá-la significa reconstruir os pixels que ela cobria. O Remover marca d'água faz isso com um modelo de IA, o MI-GAN da Picsart AI Research, que roda dentro do seu navegador: desenhe uma caixa em volta da marca ou pinte por cima, clique em Remover marca d'água e a área é preenchida a partir do entorno em cerca de um segundo. Ele foi feito para as suas próprias imagens — o logo numa foto antiga de produto, a data gravada numa foto escaneada, a legenda de um print que você mesmo fez — e nada do que você carrega é enviado.",

  sections: [
    {
      heading: "Marcando a marca d'água",
      id: "marking",
      body: [
        "A ferramenta já abre com a Caixa selecionada, porque a maioria das marcas d'água fica dentro de um retângulo: arraste de um canto da marca até o outro. Para um texto que faz curva ou está espalhado, troque para o Pincel e pinte cada letra. Cubra também o contorno, a sombra e qualquer brilho, senão sobra um rastro leve das letras.",
        "Você pode marcar várias marcas d'água antes de remover — um logo num canto e um endereço de site no outro — e cada uma é preenchida separadamente.",
      ],
    },
    {
      heading: "O que sai limpo, e o que não sai",
      id: "expectations",
      body: [
        "A IA não revela o que estava embaixo da marca d'água; ela pinta o que o resto da imagem sugere. Isso funciona muito bem para marcas pequenas sobre céu, água, paredes, grama, fundos lisos de estúdio e fundos desfocados — logos de canto, datas, assinaturas e legendas curtas costumam sumir sem deixar rastro.",
        "Marcas d'água grandes e semitransparentes, atravessando a foto inteira na diagonal, são mais difíceis: o modelo precisa inventar áreas grandes de detalhe, então o resultado fica mais suave e pode borrar rostos, textos e estampas. Remova em partes menores e confira com \"Segure para ver o original\".",
      ],
    },
    {
      heading: "Use em imagens que você pode editar",
      id: "responsible",
      body: [
        "Marcas d'água em fotos de banco de imagens e em prévias de fotógrafos protegem o trabalho e a renda de alguém. Tirá-las para usar a imagem sem pagar viola direitos autorais na maioria dos países — licencie a imagem. Esta ferramenta é para as suas fotos e para imagens que você tem permissão de alterar: o logo antigo da sua empresa, a data que a câmera adicionou, uma marca d'água que você colocou no seu portfólio antes de perder o original.",
      ],
    },
    {
      heading: "Datas em fotos antigas",
      id: "date-stamps",
      body: [
        "Câmeras de filme e as primeiras câmeras digitais imprimiam a data em números laranja num canto. Escaneie a foto, desenhe uma caixa em volta da data e remova. Fotos antigas costumam ter poeira e riscos também; marque com um pincel pequeno e remova tudo na mesma passada.",
      ],
    },
    {
      heading: "Textos e logos em prints e fotos de produtos",
      id: "text",
      body: [
        "Fotos de produtos dos seus anúncios antigos muitas vezes trazem o nome de uma loja antiga ou um selo de promoção; prints trazem nomes de usuário, notificações e horários. Marque com a Caixa e remova. Em áreas de cor lisa, como o fundo branco de um produto ou o painel liso de um aplicativo, o preenchimento fica praticamente invisível.",
      ],
    },
    {
      heading: "IA que roda no seu navegador",
      id: "on-device",
      body: [
        "Removedores de marca d'água online costumam enviar a sua imagem e limitar quantas você pode fazer de graça. Este baixa o modelo de IA para o navegador — cerca de 27 MB do nosso próprio site, uma vez só; o navegador guarda — e faz cada remoção no seu aparelho. É por isso que não há limite nem upload, e que continua funcionando sem conexão depois que o modelo carrega.",
      ],
    },
    {
      heading: "Qualidade, desfazer e formatos",
      id: "quality",
      body: [
        "Só as áreas marcadas mudam; todos os outros pixels são salvos exatamente como eram, no tamanho total da imagem até 16,7 megapixels. Toda remoção pode ser desfeita e refeita, pelos botões ou com Ctrl+Z e Ctrl+Shift+Z, e Começar de novo volta ao original. Baixe no formato original, ou em JPG, PNG ou WEBP.",
        "Para colocar a sua própria marca d'água em fotos, use o Colocar marca d'água.",
      ],
    },
    {
      heading: "Assinaturas e carimbos",
      id: "signatures",
      body: [
        "Em fotos de documentos que você mesmo digitalizou, carimbos de protocolo, rabiscos e números de página às vezes atrapalham a leitura. Marque cada um com a Caixa e remova; sobre papel liso, o preenchimento some no fundo.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "A sua imagem é editada inteiramente no navegador, por um modelo que roda no seu aparelho. Nada é enviado, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como remover a marca d'água de uma foto",
  steps: [
    { title: "Adicione a foto", description: "Escolha uma imagem JPG, PNG ou WEBP." },
    { title: "Marque a marca d'água", description: "Arraste uma caixa em volta dela ou pinte cada letra com o pincel." },
    { title: "Remova e baixe", description: "Clique em Remover marca d'água, compare com o original e clique em Baixar imagem." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Caixa ou pincel", description: "Marque um logo com um arraste ou pinte um texto espalhado." },
    { icon: "smart_toy", title: "Preenchimento com IA em um segundo", description: "A área é reconstruída a partir da imagem em volta." },
    { icon: "lock", title: "Sem upload e sem limite", description: "A IA roda no seu aparelho." },
  ],

  faqs: [
    { q: "Como tirar a marca d'água de uma foto?", a: "Adicione a foto, arraste uma caixa em volta da marca d'água e clique em Remover marca d'água. Depois baixe a imagem limpa." },
    { q: "O removedor de marca d'água é grátis?", a: "Sim. Sem conta, sem marca d'água nossa e sem limite diário — a IA roda no seu aparelho." },
    { q: "A minha imagem é enviada?", a: "Não. O modelo é baixado para o navegador e a imagem nunca sai do seu aparelho." },
    { q: "Dá para remover um logo?", a: "Dá. Coloque o logo numa caixa, incluindo sombra ou contorno, e remova." },
    { q: "Dá para remover a data de uma foto?", a: "Dá. Desenhe uma caixa em volta da data e remova — funciona especialmente bem em fotos escaneadas." },
    { q: "Dá para tirar texto de uma imagem?", a: "Dá. Pinte o texto com o pincel, ou use a caixa se ele estiver em uma linha." },
    { q: "Por que uma marca d'água grande ainda aparece?", a: "Marcas grandes e transparentes sobre áreas com muito detalhe são difíceis de reconstruir. Remova em partes menores e marque também o contorno." },
    { q: "Ele recupera os pixels originais?", a: "Não. Ele pinta o que o entorno sugere, o que normalmente fica imperceptível em fundos lisos." },
    { q: "É legal remover uma marca d'água?", a: "Nas suas próprias imagens, ou nas que você tem permissão de editar, sim. Removê-la para usar a foto de outra pessoa sem licença geralmente viola direitos autorais." },
    { q: "Posso desfazer uma remoção?", a: "Pode — Desfazer, Refazer e Começar de novo, ou Ctrl+Z e Ctrl+Shift+Z." },
    { q: "A imagem perde qualidade?", a: "Não. Só as áreas marcadas mudam, e a imagem mantém o tamanho até 16,7 megapixels." },
    { q: "Funciona no celular?", a: "Funciona. Desenhe a caixa ou pinte com o dedo; cada remoção leva alguns segundos." },
    { q: "Dá para tirar marca d'água de vídeos?", a: "Não — ele funciona com fotos: JPG, PNG e WEBP." },
  ],

  security:
    "A sua imagem é editada inteiramente no navegador, por um modelo que roda no seu aparelho. Nada é enviado, guardado ou rastreado.",

  // InpaintTool.tsx is shared with remove-object; each route only has its own
  // tool's ui in scope, so this page reuses the remove-object translations.
  ui: object.ui,
};

export default content;
