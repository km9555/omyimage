import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/sobrepor-imagens. */
const content: ToolPageContent = {
  toolId: "image-overlay",
  locale: "pt",
  name: "Sobrepor imagens",
  tagline:
    "Coloque uma imagem sobre a outra — arraste para o lugar, redimensione e gire, deixe mais transparente com a opacidade e misture com modos de mesclagem como multiplicação e tela. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Sobrepor Imagens Online Grátis — Colocar uma Foto sobre Outra | oMyImage",
  metaDescription:
    "Sobreponha uma imagem a outra online e grátis: arraste, redimensione e gire, ajuste a opacidade e escolha um modo de mesclagem como multiplicação ou tela. No navegador, sem upload.",

  intro:
    "Sobrepor imagens é colocar uma foto em cima da outra para criar algo que nenhuma das duas seria sozinha: um logo em uma foto de produto, uma textura sobre um retrato, um vazamento de luz sobre uma paisagem, uma segunda foto esmaecida na primeira para uma dupla exposição. O Sobrepor imagens do oMyImage traz as duas camadas e os controles que importam — posição, tamanho, rotação, opacidade e oito modos de mesclagem —, com uma prévia ao vivo em que você arrasta a imagem de cima. O resultado é salvo no tamanho total da imagem de fundo.",

  sections: [
    {
      heading: "Posicionar ou cobrir tudo",
      id: "fit",
      body: [
        "Posicionar livremente coloca a imagem de cima onde você arrastar, no tamanho e no ângulo escolhidos. O tamanho é medido como uma fração da largura do fundo, então 50 % é metade da largura do fundo em qualquer resolução; os nove botões de posição encaixam a imagem em uma borda ou canto, e as setas do teclado fazem ajustes finos.",
        "Cobrir tudo estica a imagem de cima sobre o fundo inteiro, mantendo as proporções e cortando o que passar. É a opção para texturas, efeitos de luz e duplas exposições, que precisam chegar a todas as bordas.",
      ],
    },
    {
      heading: "Os modos de mesclagem, explicados",
      id: "blend",
      body: [
        "Normal simplesmente desenha a imagem de cima, esmaecida pela opacidade. Multiplicação só escurece: o branco some e o preto continua preto, o que é perfeito para assinaturas, carimbos e desenhos escaneados em papel branco. Tela é o contrário — só clareia, então o preto some; é assim que se adicionam vazamentos de luz, reflexos de lente, fogo e céus estrelados com fundo preto.",
        "Sobreposição e luz suave passam contraste pela imagem de cima, clareando as partes claras do fundo e escurecendo as escuras; a luz suave é a mais delicada das duas e combina com papel, granulado e tons de cor. Escurecer e clarear mantêm o pixel mais escuro ou o mais claro. Diferença subtrai uma imagem da outra para um visual estranho e invertido — e mostra exatamente onde duas fotos quase iguais diferem.",
      ],
    },
    {
      heading: "Fazendo uma dupla exposição",
      id: "double-exposure",
      body: [
        "Use um retrato como fundo e uma paisagem, uma floresta ou o horizonte de uma cidade por cima. Escolha Cobrir tudo, coloque o modo em Tela ou Clarear e baixe a opacidade para algo entre 50 e 80 %, até o rosto aparecer através da cena. Retratos com fundo liso e claro funcionam melhor, porque a cena preenche o espaço vazio em volta da silhueta. Troque as imagens para ver qual ordem fica melhor.",
      ],
    },
    {
      heading: "Logos, adesivos e assinaturas",
      id: "logos",
      body: [
        "Um logo ou adesivo salvo em PNG com fundo transparente fica na foto sem nenhuma caixa em volta — arraste para um canto, ajuste o tamanho e baixe a opacidade se ele precisar ser discreto. Uma assinatura fotografada em papel branco não tem transparência, mas o modo Multiplicação faz o branco sumir e deixa só a tinta.",
        "Para aplicar o mesmo logo em muitas fotos de uma vez, o Colocar marca d'água é mais rápido: ele aplica um logo ou texto a um lote inteiro.",
      ],
    },
    {
      heading: "Texturas e efeitos de luz",
      id: "textures",
      body: [
        "Texturas de papel, tela de pintura, granulado de filme e poeira dão um ar analógico a uma imagem digital sem graça: coloque a textura por cima com Cobrir tudo, escolha Luz suave ou Sobreposição e mantenha a opacidade baixa. Imagens de chuva, neve, bokeh e vazamento de luz costumam vir com fundo preto; com o modo Tela, o preto desaparece e só a luz fica.",
      ],
    },
    {
      heading: "Imagem dentro da imagem",
      id: "inset",
      body: [
        "Uma segunda foto pequena dentro de uma grande mostra detalhe e contexto ao mesmo tempo: um close do rótulo no canto da foto inteira do produto, um mapa em uma foto de viagem, o antes dentro do depois. Mantenha o modo Normal e a opacidade cheia, deixe o tamanho por volta de 25 a 35 % e encaixe em um canto. Alguns graus de rotação transformam o detalhe em uma foto casual, como se estivesse presa com alfinete.",
      ],
    },
    {
      heading: "Tamanho, formato e transparência",
      id: "output",
      body: [
        "O resultado sempre tem o tamanho da imagem de fundo, então uma imagem de cima maior que o fundo é simplesmente cortada nas bordas. Ele é salvo no formato do fundo, a menos que você escolha outro. PNG e WEBP mantêm qualquer transparência do fundo; o JPG não tem transparência, então as áreas transparentes são preenchidas com a cor que você escolher.",
      ],
    },
    {
      heading: "Montagens para redes sociais",
      id: "social",
      body: [
        "Sobrepor é o atalho para capas e posts que parecem feitos em programa de design: uma foto de fundo, um recorte em PNG por cima e um toque de textura. Para manter o padrão de uma série, repita o mesmo tamanho, posição e opacidade em cada montagem — os números ficam visíveis ao lado de cada controle.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "As duas imagens são combinadas inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como sobrepor imagens",
  steps: [
    { title: "Adicione o fundo", description: "Escolha a imagem de baixo — ou solte as duas imagens de uma vez." },
    { title: "Adicione a imagem de cima", description: "Arraste para o lugar e ajuste tamanho, rotação, opacidade e modo de mesclagem." },
    { title: "Salve", description: "Clique em Salvar imagem para baixar o resultado no tamanho total." },
  ],

  features: [
    { icon: "layers", title: "Oito modos de mesclagem", description: "Normal, multiplicação, tela, sobreposição, luz suave, escurecer, clarear e diferença." },
    { icon: "opacity", title: "Opacidade e posição", description: "Arraste, redimensione, gire e esmaeça a imagem de cima com prévia ao vivo." },
    { icon: "lock", title: "Sem upload", description: "Combinadas inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como colocar uma imagem em cima da outra?", a: "Adicione o fundo, adicione a imagem de cima, arraste para o lugar e clique em Salvar imagem." },
    { q: "Como deixar a imagem de cima transparente?", a: "Baixe o controle de Opacidade. Em 50 % as duas imagens aparecem por igual." },
    { q: "Como tirar o fundo branco de uma assinatura ou logo?", a: "Escolha o modo Multiplicação — o branco some e as linhas escuras ficam." },
    { q: "Como tirar o fundo preto de um efeito de luz?", a: "Escolha o modo Tela — o preto some e a luz fica." },
    { q: "Como fazer uma dupla exposição?", a: "Use um retrato como fundo, uma paisagem por cima, Cobrir tudo, Tela ou Clarear e opacidade entre 50 e 80 %." },
    { q: "Dá para girar a imagem de cima?", a: "Dá, até 180 graus para cada lado." },
    { q: "Qual é o tamanho do resultado?", a: "Sempre o tamanho da imagem de fundo." },
    { q: "Posso trocar as duas imagens?", a: "Pode. Trocar imagens coloca a de cima embaixo e o fundo por cima." },
    { q: "Um PNG transparente continua transparente?", a: "Sim. As partes transparentes da imagem de cima deixam o fundo aparecer." },
    { q: "Posso colocar um logo em muitas fotos de uma vez?", a: "Para isso use o Colocar marca d'água — ele aplica o mesmo logo a um lote inteiro." },
    { q: "Minhas imagens são enviadas?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Funciona. Arraste com o dedo para mover a imagem de cima." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limites." },
  ],

  security:
    "Suas imagens são combinadas inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // OverlayTool.tsx
    "or drop the background image here — or both images at once": "ou solte aqui a imagem de fundo — ou as duas imagens de uma vez",
    "Preview": "Prévia",
    "Preview — drag, or use the arrow keys, to move the overlay": "Prévia — arraste, ou use as setas do teclado, para mover a imagem de cima",
    "Drag the overlay to move it.": "Arraste a imagem de cima para movê-la.",
    "Hold to see the original": "Segure para ver o original",
    "Add the image to put on top": "Adicione a imagem que vai por cima",
    "A photo, logo, texture or PNG with transparency — click or drop it here.": "Uma foto, logo, textura ou PNG com transparência — clique ou solte aqui.",
    "Background image": "Imagem de fundo",
    "Overlay image": "Imagem de cima",
    "Not added yet": "Ainda não adicionada",
    "Replace": "Trocar",
    "Add": "Adicionar",
    "Swap images": "Trocar imagens",
    "Fit": "Encaixe",
    "Place freely": "Posicionar livremente",
    "Cover everything": "Cobrir tudo",
    "Drag it on the preview, then set its size and angle.": "Arraste na prévia e depois ajuste o tamanho e o ângulo.",
    "Covers the whole picture and trims what sticks out — for textures, light leaks and double exposures.": "Cobre a imagem inteira e corta o que passar — para texturas, vazamentos de luz e duplas exposições.",
    "Size": "Tamanho",
    "Its width as a share of the background's width.": "A largura dela como fração da largura do fundo.",
    "Rotation": "Rotação",
    "Position": "Posição",
    "Top left": "Superior esquerda",
    "Top center": "Superior central",
    "Top right": "Superior direita",
    "Middle left": "Meio à esquerda",
    "Center": "Centro",
    "Middle right": "Meio à direita",
    "Bottom left": "Inferior esquerda",
    "Bottom center": "Inferior central",
    "Bottom right": "Inferior direita",
    "Opacity": "Opacidade",
    "Blend mode": "Modo de mesclagem",
    "Normal": "Normal", // i18n-same — the blend mode's name in Portuguese editors
    "Multiply": "Multiplicação",
    "Screen": "Tela",
    "Overlay": "Sobreposição",
    "Soft light": "Luz suave",
    "Darken": "Escurecer",
    "Lighten": "Clarear",
    "Difference": "Diferença",
    "Draws the image as it is.": "Desenha a imagem como ela é.",
    "Only darkens — white disappears. Good for signatures, stamps and line art.": "Só escurece — o branco some. Bom para assinaturas, carimbos e desenhos.",
    "Only lightens — black disappears. Good for light leaks, flares, fire and stars.": "Só clareia — o preto some. Bom para vazamentos de luz, reflexos, fogo e estrelas.",
    "Boosts contrast: lights get lighter and darks darker.": "Aumenta o contraste: o claro fica mais claro e o escuro, mais escuro.",
    "A gentler overlay — for textures and colour tints.": "Uma sobreposição mais suave — para texturas e tons de cor.",
    "Keeps whichever pixel is darker.": "Mantém o pixel que for mais escuro.",
    "Keeps whichever pixel is lighter.": "Mantém o pixel que for mais claro.",
    "Subtracts the colours — an inverted, artistic look.": "Subtrai as cores — um visual invertido e artístico.",
    "Output format": "Formato de saída",
    "Same as original": "Igual ao original",
    "The result is the size of the background image.": "O resultado tem o tamanho da imagem de fundo.",
    "JPG background": "Fundo do JPG",
    "Your images are processed in your browser and never uploaded.": "Suas imagens são processadas no navegador e nunca são enviadas.",
    "Save image": "Salvar imagem",
    "Done — 1 image saved.": "Pronto — 1 imagem salva.",
  },
};

export default content;
