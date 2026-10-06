import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/redimensionar-capa-facebook (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "facebook-cover-resizer",
  locale: "pt",
  name: "Redimensionar Capa do Facebook",
  tagline:
    "Deixe qualquer imagem no tamanho da foto de capa do Facebook — 851 × 315 pixels em JPG sRGB leve — cortada ou completada, pensando no corte do celular. Grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Capa do Facebook 851×315 — Redimensionar Grátis Online | oMyImage",
  metaDescription:
    "Deixe qualquer imagem no tamanho da capa do Facebook: 851 × 315 px em JPG sRGB leve, cortada ou completada, pensando no corte do celular. Grátis, sem enviar nada.",

  intro:
    "A capa do Facebook é larga e baixa, e aparece em dois formatos diferentes: uma faixa larga no computador e um recorte mais alto e estreito no celular. Enviar uma foto qualquer deixa o Facebook decidir o que cortar. Este redimensionador abre no tamanho da capa do Facebook, 851 × 315 pixels, e salva em JPG — adicione a imagem, escolha cortar ou completar, e baixe uma capa que carrega rápido e mostra o que você queria.",

  sections: [
    {
      heading: "O tamanho que o Facebook recomenda",
      id: "spec",
      body: [
        "A orientação do Facebook é enviar a capa como JPG sRGB com 851 pixels de largura e 315 de altura, de preferência com menos de 100 KB para carregar rápido. O mínimo aceito é 400 × 150 pixels. Uma capa que já começa em 851 × 315 não precisa ser reposicionada no computador.",
        "O redimensionador salva em JPG sRGB por padrão. Numa foto cheia de detalhes o arquivo ainda pode passar de 100 KB em qualidade alta; baixe um pouco o controle de qualidade, ou passe o resultado pelo modo 100 KB do compressor depois, se a velocidade importar mais que o último detalhe.",
      ],
    },
    {
      heading: "Computador e celular mostram partes diferentes",
      id: "crop",
      body: [
        "No computador a capa aparece com cerca de 820 × 312 pixels — quase a imagem inteira. No celular ela aparece com uns 640 × 360, um formato mais alto, então as bordas da esquerda e da direita são cortadas. Qualquer coisa perto das laterais, como um nome ou um logotipo num canto, pode sumir para quem visita pelo celular.",
        "Mantenha textos e rostos no centro da imagem e use as bordas para fundo que pode se perder. Em perfis pessoais a foto de perfil também cobre a parte de baixo à esquerda da capa, então deixe essa área tranquila também.",
      ],
    },
    {
      heading: "Recortar para preencher ou completar",
      id: "fit",
      body: [
        "Recortar para preencher, o padrão, ajusta a imagem para cobrir todo o quadro de 851 × 315 e apara o excesso por igual. Serve para paisagens, fotos de grupo tiradas de longe e fotos largas de produto. Se o assunto está alto ou baixo na foto, recorte antes com o botão de corte no cartão da imagem.",
        "Preencher com margem encaixa a imagem inteira no quadro e preenche as laterais com uma cor. Funciona para um logotipo quadrado, um cartaz ou o folheto de um evento que não pode perder nenhuma borda — escolha uma cor de fundo que combine com a arte.",
      ],
    },
    {
      heading: "Texto, logotipos e PNG",
      id: "text",
      body: [
        "O Facebook recomprime as capas, e a compressão JPG é mais dura com textos nítidos e logotipos. Se a sua capa é quase toda letras ou arte chapada, escolha PNG como formato de saída: o próprio Facebook indica que o PNG costuma dar um resultado melhor em imagens com texto ou logotipo.",
      ],
    },
    {
      heading: "Trocando a capa",
      id: "upload",
      body: [
        "No seu perfil ou página, clique em Editar foto da capa ou no ícone da câmera sobre a capa, escolha Carregar foto e selecione a imagem baixada. Como ela já tem o tamanho certo, a etapa de arrastar para reposicionar deve mostrar a imagem inteira; salve quando estiver bom. Páginas do Facebook usam a mesma capa larga, então a mesma imagem serve para uma página de empresa.",
      ],
    },
  ],

  howToTitle: "Como redimensionar uma imagem para a capa do Facebook",
  steps: [
    { title: "Adicione a imagem", description: "Selecione um JPG, PNG, WEBP, GIF ou BMP — foto, cartaz ou arte." },
    { title: "Corte ou complete", description: "O tamanho de capa 851 × 315 já vem escolhido; escolha Recortar para preencher ou Preencher com margem." },
    { title: "Baixe", description: "Redimensione e baixe um JPG pronto para virar sua capa." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exatamente 851 × 315", description: "O tamanho de capa que o Facebook recomenda, sem reposicionar no computador." },
    { icon: "speed", title: "JPG sRGB leve", description: "Salvo em JPG sRGB, o formato que o Facebook sugere para carregar rápido." },
    { icon: "lock", title: "No seu navegador", description: "Sua imagem é redimensionada no seu aparelho e nunca é enviada." },
  ],

  faqs: [
    { q: "Qual o tamanho da foto de capa do Facebook?", a: "Envie com 851 × 315 pixels. O Facebook mostra com cerca de 820 × 312 no computador e 640 × 360 no celular; o mínimo é 400 × 150." },
    { q: "Por que minha capa fica cortada no celular?", a: "O celular mostra um recorte mais alto da capa e corta as bordas da esquerda e da direita. Mantenha textos e rostos no centro." },
    { q: "Como deixo minha imagem em 851 × 315?", a: "Adicione aqui — o tamanho da capa já vem escolhido. Escolha Recortar para preencher ou Preencher com margem, depois redimensione e baixe." },
    { q: "JPG ou PNG para a capa do Facebook?", a: "JPG para fotos — o Facebook recomenda JPG sRGB com menos de 100 KB. PNG para capas que são quase só texto ou logotipo." },
    { q: "Como deixo a capa com menos de 100 KB?", a: "Baixe o controle de qualidade antes de redimensionar, ou comprima o resultado para 100 KB no compressor depois." },
    { q: "Posso usar a mesma imagem numa página do Facebook?", a: "Pode. Páginas usam a mesma capa larga; 851 × 315 funciona, com o mesmo cuidado de deixar o centro livre." },
    { q: "Minha capa ficou borrada — por quê?", a: "A original pode ser menor que 851 × 315 e foi ampliada, ou o Facebook comprimiu detalhes demais. Comece de uma imagem maior e use letras grandes." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Ela é redimensionada no seu navegador; só você a envia ao Facebook." },
  ],

  security:
    "Sua imagem é redimensionada inteiramente no seu navegador. Imagens muito grandes podem ser processadas no nosso servidor e apagadas na hora; nada fica guardado.",
};

export default content;
