import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/dividir-foto-para-instagram (variant of split-image). */
const content: ToolPageContent = {
  toolId: "instagram-grid-maker",
  locale: "pt",
  name: "Dividir foto para Instagram",
  tagline:
    "Transforme uma foto em uma grade contínua no perfil do Instagram — 3, 6, 9 ou até 15 posts — ou em um carrossel panorâmico que continua a cada deslize. Recortada nos formatos do Instagram, com 1080 px e numerada na ordem de publicação.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Dividir Foto para Instagram — Grade e Carrossel Grátis | oMyImage",
  metaDescription:
    "Divida uma foto em posts para a grade do perfil do Instagram (3:4, 4:5 ou quadrado) ou em um carrossel panorâmico, no tamanho do Instagram e numerados na ordem de postar. Grátis, no navegador.",

  intro:
    "Um post em grade é uma imagem grande espalhada por vários posts do Instagram: o perfil mostra a imagem inteira, e cada post continua fazendo sentido sozinho no feed. Fazer isso na mão significa recortar em um formato estranho, cortar a foto em terços exatos, redimensionar cada parte e lembrar de publicar de trás para frente. O Dividir foto para Instagram faz tudo: escolha quantas linhas, escolha o formato do post, arraste a foto para enquadrar e baixe os posts já numerados na ordem certa. Ele também cria carrosséis contínuos — um panorama largo cortado em slides que se emendam ao deslizar.",

  sections: [
    {
      heading: "Como funciona a grade do perfil",
      id: "profile-grid",
      body: [
        "O perfil mostra os posts de três em três por linha, do mais novo para o mais antigo, começando no canto superior esquerdo. Desde janeiro de 2025 as miniaturas são retângulos verticais 3:4, e não mais quadrados. Corte uma imagem em três colunas, publique as partes na ordem certa e o perfil mostra tudo como uma imagem só.",
        "Uma linha pede 3 posts, duas linhas 6, três linhas 9. Aqui você vai até cinco linhas — 15 posts —, que é mais ou menos o que um perfil mostra na tela do celular sem rolar.",
      ],
    },
    {
      heading: "Qual formato de post escolher",
      id: "shapes",
      body: [
        "3:4 (1080 × 1440 pixels) é o formato das miniaturas da grade, então o que você vê na prévia é exatamente o que o perfil mostra, sem perder nada nas emendas. 4:5 (1080 × 1350) é o post vertical clássico; a grade corta cerca de 3 % de cada lado dele, então as emendas dão um pulinho. Posts quadrados 1:1 perdem um oitavo da largura de cada lado na grade, o que aparece em linhas que atravessam de um post para o outro.",
        "Escolha 3:4, a menos que o seu app do Instagram corte fotos 3:4 para 4:5 no envio — nesse caso use 4:5, que qualquer versão do app aceita sem cortar.",
      ],
    },
    {
      heading: "Publicando na ordem certa",
      id: "order",
      body: [
        "Como o post mais novo aparece no canto superior esquerdo, o quebra-cabeça é publicado de trás para frente: a parte 1 é o canto inferior direito e sai primeiro, e a do canto superior esquerdo sai por último. Os arquivos vêm numerados assim — foto_post-01.jpg, foto_post-02.jpg e assim por diante — e a prévia mostra os mesmos números em cada parte.",
        "Publique tudo de uma vez e, depois, poste em grupos de três: um único post a mais desloca todas as partes uma casa e desmonta a imagem. Posts fixados sempre ocupam os primeiros lugares da grade, então desafixe-os enquanto publica, ou fixe uma linha inteira de três.",
      ],
    },
    {
      heading: "Carrosséis contínuos",
      id: "carousel",
      body: [
        "Escolha Carrossel para cortar uma imagem larga em 2 a 10 slides em uma única linha. Adicione-os a um único post na ordem dos números; ao deslizar, cada slide continua exatamente de onde o anterior parou, e uma paisagem, uma foto de grupo ou um banner comprido viram uma imagem contínua. Slides 4:5 ocupam mais espaço na tela do celular; slides quadrados combinam com panoramas bem largos, que precisariam de muitos slides.",
      ],
    },
    {
      heading: "Enquadrando a foto",
      id: "framing",
      body: [
        "A grade inteira tem um formato só — três posts 3:4 na largura e três linhas na altura formam um retrato 3:4, enquanto uma única linha de três forma uma faixa larga 9:4 —, então a maioria das fotos tem mais imagem do que cabe. A parte que fica de fora aparece escurecida na prévia. Arraste a foto, ou use os controles de posição, para escolher o que entra nos posts, e mantenha rostos e textos longe das linhas de corte, onde ficariam divididos entre dois posts.",
      ],
    },
    {
      heading: "Tamanho e qualidade",
      id: "quality",
      body: [
        "Cada post sai com 1080 pixels de largura, a largura em que o Instagram guarda as fotos do feed, então o app não reduz de novo. Uma foto com menos pixels que isso mantém a própria resolução em vez de ser ampliada. Os posts são salvos em JPG com qualidade de 92 % por padrão; o Instagram recomprime todo envio, então uma qualidade maior quase não aparece, mas o PNG está disponível se você preferir entregar os pixels intactos.",
      ],
    },
    {
      heading: "Ideias de posts em grade",
      id: "ideas",
      body: [
        "Marcas usam a grade para anunciar um lançamento ou uma promoção com uma imagem marcante que toma conta do perfil. Fotógrafos publicam uma paisagem em uma linha de três. Artistas revelam um desenho grande em partes ao longo do dia. Organizadores de eventos transformam o cartaz em um 3 × 3 impossível de ignorar, e viajantes fazem um carrossel com o panorama inteiro em vez de cortar para caber.",
      ],
    },
    {
      heading: "Grade para lojas e criadores",
      id: "business",
      body: [
        "Em perfis de loja, a grade funciona como uma vitrine: uma linha de três com a coleção nova chama atenção de quem visita o perfil, e cada parte pode levar a um produto diferente na legenda. Criadores de conteúdo usam uma linha como capa de uma série, intercalando com posts comuns em grupos de três para manter o alinhamento.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "A sua foto é cortada e redimensionada inteiramente no navegador. Nada é enviado para os nossos servidores, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como fazer uma grade para o Instagram",
  steps: [
    { title: "Adicione a foto", description: "Escolha uma imagem JPG, PNG ou WEBP." },
    { title: "Monte a grade", description: "Escolha o número de linhas e o formato do post, e arraste a foto para enquadrar." },
    { title: "Baixe e publique", description: "Clique em Criar a grade e publique as partes na ordem dos números, o 1 primeiro." },
  ],

  features: [
    { icon: "photo_library", title: "Grade ou carrossel", description: "Uma grade de 3 colunas com até 15 posts, ou um carrossel de até 10 slides." },
    { icon: "check", title: "Numerados para publicar", description: "Os arquivos e a prévia mostram a ordem de publicação." },
    { icon: "lock", title: "Sem upload", description: "Feito inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como fazer um post em grade no Instagram?", a: "Adicione a foto, escolha as linhas e o formato, clique em Criar a grade e publique as partes na ordem dos números, começando pelo 1." },
    { q: "Qual parte eu publico primeiro?", a: "A número 1 — a do canto inferior direito. A do canto superior esquerdo vai por último, porque o Instagram mostra o post mais novo primeiro." },
    { q: "Qual é o tamanho de cada post?", a: "1080 × 1440 px em 3:4, 1080 × 1350 px em 4:5 e 1080 × 1080 px no quadrado — ou menor, se a foto tiver menos pixels." },
    { q: "Uso 3:4 ou 4:5?", a: "O 3:4 bate exatamente com a grade do perfil. Use 4:5 se o seu app cortar fotos 3:4 no envio." },
    { q: "Quantos posts uma grade pode ter?", a: "Três por linha, de uma linha (3 posts) a cinco linhas (15 posts)." },
    { q: "Por que a minha grade ficou desalinhada?", a: "Geralmente um post fixado ou um post avulso a deslocou. Desafixe os posts ao publicar e poste novidades de três em três." },
    { q: "O que é um carrossel contínuo?", a: "Uma imagem larga cortada em slides de um mesmo post, que continua de um slide para o outro ao deslizar." },
    { q: "Quantos slides de carrossel posso fazer?", a: "De 2 a 10, em 4:5 ou quadrado." },
    { q: "Posso escolher que parte da foto é usada?", a: "Pode. Arraste a foto na prévia ou use os controles de posição; a parte escurecida fica de fora." },
    { q: "O Instagram vai piorar a qualidade?", a: "Ele recomprime todo envio, mas posts com 1080 pixels de largura não são redimensionados de novo, o que os mantém o mais nítidos possível." },
    { q: "A minha foto é enviada para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Funciona. Baixe o ZIP, abra no app de arquivos do celular e compartilhe os posts com o Instagram a partir dali." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limites." },
  ],

  security:
    "A sua foto é cortada e redimensionada inteiramente no navegador. Nada é enviado, guardado ou rastreado.",
};

export default content;
