import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/redimensionar-imagem.
 *
 * Head term "redimensionar imagem" — iLoveIMG /pt/redimensionar-imagem, Adobe
 * Express BR ("Redimensionador de imagens grátis"), ResizePixel /pt and
 * Pixelcut all title on it. "mudar tamanho da imagem", "aumentar/diminuir
 * imagem" and "tamanho para Instagram" are the long tail (sections, FAQs,
 * aliases.ts).
 *
 * The social-media presets are named the way Brazilian users meet them in the
 * apps ("Stories", "Reels", "Status") — lib/social-presets.ts is module scope,
 * so every preset label is maintained here by hand (§4.2), together with
 * MODES, FITS and FIT_NOTE.
 */
const content: ToolPageContent = {
  toolId: "resize-image",
  locale: "pt",
  name: "Redimensionar imagem",
  tagline:
    "Redimensione imagens JPG, PNG, WEBP e GIF online — por pixels exatos ou porcentagem, com proporção travada, tamanhos prontos para redes sociais e em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Redimensionar imagem online grátis — em pixels ou % | oMyImage",
  metaDescription:
    "Redimensione imagens online e grátis sem perder qualidade: por pixels, porcentagem ou tamanhos do Instagram e WhatsApp. JPG, PNG, WEBP e GIF, em lote e sem cadastro.",

  intro:
    "Redimensionar imagem é o que você precisa quando a foto tem que caber em um tamanho exato — foto de perfil, miniatura, capa do Facebook, Stories do Instagram ou impressão. A ferramenta Redimensionar imagem do oMyImage permite definir as dimensões em pixels ou mudar a escala por porcentagem, com a proporção travada para nada ficar esticado, e ainda traz tamanhos prontos para as principais redes sociais. Redimensione uma imagem ou um lote inteiro, escolha o formato de saída e baixe. Tudo roda no seu navegador, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "Pixels, dimensões e tamanho do arquivo",
      id: "basics",
      body: [
        "As dimensões de uma imagem são quantos pixels ela tem de largura e de altura; o tamanho do arquivo é quantos bytes esses pixels ocupam. Os dois estão ligados, mas não são a mesma coisa — e confundir um com o outro é o motivo mais comum de alguém \"diminuir\" uma foto e ela continuar pesada.",
        "Redimensionar mexe no primeiro número. Cortar a largura e a altura pela metade deixa um quarto dos pixels, e o arquivo normalmente encolhe em uma proporção parecida — um efeito muito maior do que qualquer configuração de compressão consegue sozinha. Por isso redimensionar primeiro e comprimir depois dá resultados muito melhores do que só comprimir.",
        "O que importa é o espaço que a imagem realmente ocupa na tela. Uma fotografia de 4000 pixels de largura exibida em uma coluna de 800 pixels entrega vinte e cinco vezes mais dados do que a tela consegue usar, e nenhuma compressão esperta recupera esse desperdício.",
      ],
    },
    {
      heading: "Diminuir é seguro; aumentar não é",
      id: "direction",
      body: [
        "Deixar uma imagem menor é uma operação bem comportada. O algoritmo junta grupos de pixels em menos pixels, e o resultado costuma ficar mais nítido e limpo do que o original naquele novo tamanho. Dá para diminuir bastante sem nenhum estrago visível.",
        "Aumentar é um problema totalmente diferente, porque o detalhe que você está pedindo nunca foi capturado. A interpolação só consegue adivinhar valores entre os pixels que existem, então as bordas ficam moles e as texturas viram borrão. Um aumento de 20% a 25% costuma ser aceitável; dobrar o tamanho já fica visivelmente pior.",
        "Se você realmente precisa de uma imagem maior, um ampliador com IA é a única abordagem que ajuda, porque ele cria detalhes plausíveis a partir de um modelo treinado em vez de esticar o que já existe. Mesmo assim ele está inventando informação, o que importa se a imagem for uma prova ou um documento técnico.",
      ],
    },
    {
      heading: "Proporção, e o que acontece quando você a quebra",
      id: "aspect",
      body: [
        "Proporção é a relação entre largura e altura. Com ela travada, a imagem muda de escala por igual — uma foto 3:2 continua 3:2 e apenas fica menor. Destravada, você pode forçar qualquer medida, ao custo de esticar ou achatar tudo o que está no quadro. Rostos denunciam isso na hora; paisagens escondem por um tempo e depois parecem estranhas.",
        "Quando a imagem precisa preencher uma caixa exata que não combina com a proporção dela, a ordem certa é recortar e depois redimensionar, e não esticar. O modo Redes sociais faz isso por você: escolha \"Recortar para preencher\" e a sobra é cortada das bordas, ou \"Preencher com margem\" para manter a imagem inteira com faixas na cor que você escolher.",
      ],
    },
    {
      heading: "Tamanhos certos para Instagram, WhatsApp e outras redes",
      id: "social",
      body: [
        "Cada rede social espera um formato. No Instagram, um post quadrado tem 1080×1080 px, um post retrato 1080×1350 px e os Stories e Reels 1080×1920 px. A capa do Facebook tem 851×315 px, a miniatura do YouTube 1280×720 px e o status do WhatsApp 1080×1920 px. Enviar no tamanho errado faz o aplicativo recortar ou recomprimir a foto do jeito dele.",
        "No modo Redes sociais, escolha a plataforma e o tipo de publicação e as medidas são preenchidas automaticamente. Depois decida como a foto se encaixa: recortar para preencher, preencher com margem ou caber dentro do tamanho mantendo a proporção.",
      ],
    },
    {
      heading: "Redimensionar um lote inteiro",
      id: "batch",
      body: [
        "Definir as medidas uma vez e aplicar a uma pasta inteira é o caso normal para catálogos de produtos, galerias e qualquer site com um espaço fixo para imagens. O modo por porcentagem muitas vezes é a melhor escolha para um lote misto, porque muda a escala de cada imagem em relação ao próprio tamanho em vez de forçar todas às mesmas medidas — útil quando fotos na vertical e na horizontal estão misturadas.",
        "Tudo é processado no seu navegador e entregue em um único ZIP, então cem imagens viram um download só, e não cem. Nada é enviado, a não ser que uma imagem seja grande demais para uma aba do navegador desenhar — o que depende da resolução, não do tamanho do arquivo.",
      ],
    },
  ],

  howToTitle: "Como redimensionar uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Defina o tamanho", description: "Redimensione por pixels exatos, por porcentagem ou escolha um tamanho de rede social, com a proporção travada para não esticar." },
    { title: "Redimensione e baixe", description: "Clique em Redimensionar — uma imagem é baixada direto; várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "straighten", title: "Pixels ou porcentagem", description: "Defina largura e altura exatas, ou mude a escala de todas as imagens por uma porcentagem do tamanho original." },
    { icon: "link", title: "Proporção travada", description: "Mantenha as proporções para as imagens nunca ficarem esticadas — cada arquivo do lote mantém a sua." },
    { icon: "lock", title: "Privado e instantâneo", description: "O redimensionamento roda inteiro no seu navegador com canvas HTML — suas imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Dá para redimensionar sem perder a proporção?", a: "Sim. Deixe \"Manter proporção\" ativado e cada imagem se ajusta à largura e altura que você definiu, sem distorção." },
    { q: "Posso redimensionar várias imagens para o mesmo tamanho?", a: "Sim. Defina as medidas ou a porcentagem uma vez e elas valem para o lote inteiro; os arquivos são baixados juntos em um ZIP." },
    { q: "Redimensionar diminui a qualidade?", a: "Diminuir a imagem mantém a nitidez. Aumentar além do tamanho original pode deixar a foto mole, porque não existe detalhe novo para acrescentar." },
    { q: "Quais formatos são aceitos?", a: "JPG, PNG, WEBP, GIF e BMP na entrada; a saída pode ser JPG, PNG ou WEBP (ou o mesmo formato do original)." },
    { q: "É grátis e privado?", a: "Sim. Não tem cadastro nem marca d'água, e cada imagem é redimensionada no seu próprio navegador." },
    { q: "Qual o tamanho ideal de imagem para um site?", a: "O do espaço que ela realmente ocupa. Uma imagem de destaque de largura total raramente precisa de mais de 1920 px; uma imagem dentro de um texto, de 800 a 1200 px; uma miniatura, de 300 a 400 px. Dobre só se estiver servindo uma versão 2× para telas de alta densidade." },
    { q: "Qual a diferença entre redimensionar e comprimir?", a: "Redimensionar muda quantos pixels existem; comprimir muda a eficiência com que eles são guardados. Para a web, redimensionar costuma ser o ganho maior, porque uma foto exibida com 800 px mas guardada com 4000 px carrega vinte e cinco vezes mais pixels do que consegue mostrar. Fazer os dois dá o menor resultado." },
    { q: "Por que minha imagem ampliada ficou borrada?", a: "Porque o detalhe não existe. Aumentar só consegue interpolar entre os pixels que já estão lá, então as bordas amolecem e as texturas borram. Se você precisa mesmo de uma imagem maior, a ferramenta Melhorar qualidade da imagem reconstrói detalhes plausíveis com IA em vez de só esticar." },
    { q: "Posso redimensionar para uma largura e altura exatas?", a: "Sim — desative \"Manter proporção\" e preencha as duas. Saiba que a imagem vai esticar se os números não combinarem com a proporção dela. Para preencher uma caixa exata sem distorção, use o modo Redes sociais com \"Recortar para preencher\", ou recorte primeiro e redimensione depois." },
    { q: "Redimensionar muda o formato do arquivo?", a: "Só se você pedir. Dá para manter o formato original ou exportar em JPG, PNG ou WEBP. Converter para WEBP ao mesmo tempo é um jeito comum de ter menos pixels e um arquivo menor de uma vez só." },
    { q: "Qual o tamanho de foto para o Instagram?", a: "1080×1080 px para posts quadrados, 1080×1350 px para posts na vertical e 1080×1920 px para Stories e Reels. No modo Redes sociais, escolha Instagram e o tipo de post e as medidas já vêm preenchidas." },
  ],

  security:
    "Suas imagens continuam privadas. O redimensionamento acontece inteiro no seu navegador com canvas HTML — nada é enviado a um servidor. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "803" },

  ui: {
    // ResizeTool.tsx
    "Resize": "Redimensionar",
    "Resizing…": "Redimensionando…",
    "Resize & download": "Redimensionar e baixar",
    "Resize {n} images": "Redimensionar {n} imagens",
    "Resize settings": "Configurações de redimensionamento",
    "Resize Settings": "Configurações de redimensionamento",
    "Resized 1 image.": "1 imagem redimensionada.",
    "Resized {n} images.": "{n} imagens redimensionadas.",
    "Resize failed.": "Falha ao redimensionar.",
    "Couldn't apply that edit.": "Não foi possível aplicar essa edição.",
    "or drop JPG, PNG, WEBP or GIF images here": "ou solte imagens JPG, PNG, WEBP ou GIF aqui",
    "This image is too large to edit in the browser": "Esta imagem é grande demais para editar no navegador",
    "edited": "editada",
    "Crop|verb": "Recortar",
    "Details": "Detalhes",
    "Type": "Tipo",
    "unknown": "desconhecido",
    "Current": "Atual",
    "Size": "Tamanho",
    "Target": "Destino",
    "set a size": "defina um tamanho",
    "First image → {w} × {h} px": "Primeira imagem → {w} × {h} px",
    "— each keeps its own ratio": "— cada uma mantém a própria proporção",
    "Pick a platform and a preset size.": "Escolha uma plataforma e um tamanho pronto.",
    "Keep aspect ratio on to avoid stretching.": "Mantenha a proporção ativada para não esticar.",
    "Width (px)": "Largura (px)",
    "Height (px)": "Altura (px)",
    "Keep aspect ratio (fit)": "Manter proporção (ajustar)",
    "Scale": "Escala",
    "Choose the social media platform": "Escolha a rede social",
    "Preset type": "Tipo de publicação",
    "Custom size": "Tamanho personalizado",
    "How to fit the image": "Como encaixar a imagem",
    "Output format": "Formato de saída",
    "Padding colour": "Cor da margem",
    "JPG background": "Fundo do JPG",
    // FORMATS / MODES / FITS (module scope, §4.2)
    "Same as original": "Igual ao original",
    "By pixels": "Por pixels",
    "By percent": "Por porcentagem",
    "Social media": "Redes sociais",
    "Crop to fill": "Recortar para preencher",
    "Pad": "Preencher com margem",
    "Fit inside": "Caber dentro",
    "Exactly the preset size, overflow trimmed off the edges.":
      "Exatamente o tamanho escolhido; o que sobra é cortado das bordas.",
    "Exactly the preset size, the whole image kept, bars filled in.":
      "Exatamente o tamanho escolhido, com a imagem inteira e faixas preenchidas.",
    "Keeps the ratio, so the output is smaller than the preset.":
      "Mantém a proporção, então o resultado fica menor que o tamanho escolhido.",
    // FIT_NOTE (lib/image/fit.ts)
    "cropped to fill": "recortada para preencher",
    "padded to fit": "com margem para caber",
    "fitted inside": "encaixada dentro",
    // Social preset names (lib/social-presets.ts)
    "Profile": "Foto de perfil",
    "Square post": "Post quadrado",
    "Portrait post": "Post vertical",
    "Landscape post": "Post horizontal",
    "Story / Reel": "Stories / Reels",
    "Cover": "Capa",
    "Shared post": "Post compartilhado",
    "Story": "Stories",
    "Event cover": "Capa de evento",
    "Header": "Cabeçalho",
    "Post image": "Imagem do post",
    "Company logo": "Logo da empresa",
    "Channel icon": "Ícone do canal",
    "Channel art": "Banner do canal",
    "Thumbnail": "Miniatura",
    "Standard pin": "Pin padrão",
    "Square pin": "Pin quadrado",
    "Video / Story": "Vídeo / Stories",
    "Status": "Status", // i18n-same
  },
};

export default content;
