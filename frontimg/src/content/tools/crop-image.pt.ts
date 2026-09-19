import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/recortar-imagem.
 *
 * Head term "recortar imagem" — iLoveIMG /pt/recortar-imagem, ResizePixel /pt,
 * PicWish /pt and Adobe Express BR all use it; "cortar foto" is the colloquial
 * variant and lives in the copy and aliases.ts.
 *
 * SHAPES, ASPECTS ("Free"), OUTPUT_TARGETS ("Original") and FORMATS are module
 * scope in CropTool.tsx; their keys are maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "crop-image",
  locale: "pt",
  name: "Recortar imagem",
  tagline:
    "Recorte imagens JPG, PNG, WEBP e GIF online — arraste para selecionar, trave uma proporção ou digite os pixels exatos. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Recortar imagem online grátis — cortar foto em 1:1, 16:9 e círculo | oMyImage",
  metaDescription:
    "Recorte imagens online e grátis: corte fotos em quadrado, 16:9, 4:5 ou círculo, gire e endireite. JPG, PNG, WEBP e GIF, em lote, direto no navegador e sem cadastro.",

  intro:
    "Recortar imagem é o jeito mais rápido de enquadrar uma foto do jeito certo ou deixá-la em um tamanho exato. A ferramenta Recortar imagem do oMyImage permite arrastar uma seleção sobre a foto, travá-la em uma proporção como 1:1 para foto de perfil ou 16:9 para miniaturas, ou digitar as dimensões exatas em pixels. Também dá para cortar em círculo, elipse ou cantos arredondados, girar e endireitar. O recorte acontece inteiro no seu navegador, então suas imagens continuam privadas e o resultado sai na hora.",

  sections: [
    {
      heading: "Recortar é compor, não só aparar",
      id: "composition",
      body: [
        "A maioria das fotografias melhora quando algo sai do quadro. O recorte aproxima o enquadramento do assunto, tira bordas que distraem, acerta um horizonte torto e muda para onde o olhar vai. É a edição mais eficiente que existe e a única que não custa nada em qualidade.",
        "O guia clássico é a regra dos terços: divida o quadro em uma grade de três por três e coloque o assunto sobre uma das linhas ou interseções, em vez de bem no centro. É um ponto de partida, não uma lei — composições centralizadas funcionam bem para simetria e retratos —, mas é uma correção confiável para uma foto que parece sem graça.",
        "O outro hábito que vale criar é conferir as bordas antes de confirmar. Metade de um desconhecido, uma lixeira, um pedaço de céu estourado no canto: essas coisas roubam a atenção do assunto e quase sempre somem com um recorte um pouco mais fechado.",
      ],
    },
    {
      heading: "Proporções fixas e onde elas são obrigatórias",
      id: "ratios",
      body: [
        "Um recorte livre é o certo quando a imagem é para uso próprio. As proporções fixas importam quando outra coisa decide o formato — toda rede social, marketplace e tamanho de impressão espera proporções específicas, e errar significa que o sistema recorta por você, normalmente mal.",
        "O quadrado (1:1) serve para foto de perfil e posts do feed do Instagram. O 4:5 é o retrato mais alto que o Instagram aceita e ocupa mais tela do que um quadrado. O 9:16 é a tela cheia na vertical dos Stories, Reels, TikTok e status do WhatsApp. O 16:9 é o formato widescreen padrão das miniaturas do YouTube e das prévias de link. Tamanhos de impressão seguem outra lógica — a foto 10×15 cm é 3:2, enquanto 13×18 e 20×25 não são, e é por isso que a mesma foto perde partes diferentes das bordas em cada tamanho.",
        "Definir a proporção antes de arrastar poupa a frustração de compor uma foto com cuidado e depois ver ela ser aparada para caber.",
      ],
    },
    {
      heading: "Recortar não diminui a qualidade",
      id: "quality",
      body: [
        "Os pixels que você mantém ficam intactos. O recorte não é uma reamostragem, então uma foto recortada é exatamente tão nítida quanto a original — ela só mostra menos da cena. Isso é diferente de dar zoom ou ampliar, que inventam pixels e amolecem o resultado.",
        "O que muda é o total de pixels, e isso tem um limite prático. Recorte uma foto de 12 megapixels até um cantinho e você pode ficar com 600 pixels de largura, o que funciona na tela do celular e não serve para impressão nem para um banner de largura total. Comece pelo original de maior resolução que tiver quando souber que vem um recorte bem fechado.",
      ],
    },
    {
      heading: "Uma ordem de etapas que faz sentido",
      id: "workflow",
      body: [
        "Recorte primeiro, depois redimensione, depois comprima. O recorte decide o conteúdo, o redimensionamento decide as dimensões em pixels e a compressão decide o tamanho do arquivo — nessa ordem, cada etapa trabalha com a menor entrada possível e você nunca comprime pixels que vai jogar fora.",
        "Aqui tudo roda no seu navegador, então passar de uma ferramenta para outra custa só um clique, e suas imagens não são enviadas em nenhuma etapa.",
      ],
    },
  ],

  howToTitle: "Como recortar uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Escolha o formato e enquadre", description: "Escolha retângulo, quadrado, círculo, elipse ou cantos arredondados, arraste a caixa para mover e as alças para redimensionar, e trave uma proporção como 1:1, 4:5 ou 16:9. Gire, espelhe ou endireite se a foto precisar." },
    { title: "Recorte e baixe", description: "Escolha o tamanho e o formato de saída e clique em Recortar e baixar — na hora, no seu navegador, em um ZIP se você recortou várias." },
  ],

  features: [
    {
      icon: "crop_free",
      title: "Recorte livre ou proporções fixas",
      description: "Recorte à mão livre, digite as dimensões exatas em pixels ou trave em 1:1, 4:3, 3:2, 16:9, 4:5 e outras para ter o tamanho certo para redes sociais ou impressão.",
    },
    {
      icon: "circle",
      title: "Formatos, não só retângulos",
      description: "Recorte em quadrado, círculo, elipse ou retângulo com cantos arredondados. PNG e WEBP deixam a área fora do formato transparente — ideal para fotos de perfil redondas.",
    },
    {
      icon: "rotate_90_degrees_cw",
      title: "Girar, espelhar e endireitar",
      description: "Gire de 90° em 90°, espelhe na horizontal ou na vertical e acerte um horizonte torto com o controle de endireitar antes de recortar.",
    },
    {
      icon: "bolt",
      title: "Em lote e no navegador",
      description: "Recorte um lote inteiro com o mesmo enquadramento e baixe um ZIP — tudo no seu dispositivo com canvas HTML, sem envio e sem espera.",
    },
    {
      icon: "image",
      title: "Qualquer formato comum",
      description: "Funciona com JPG, PNG, WEBP, GIF e BMP e permite exportar em JPG, PNG ou WEBP com qualidade ajustável.",
    },
  ],

  faqs: [
    { q: "A ferramenta de recorte do oMyImage é grátis?", a: "Sim. Recortar imagens é 100% grátis, sem marca d'água no resultado e sem cadastro." },
    { q: "Minhas imagens são enviadas para algum lugar?", a: "Não. O recorte roda inteiro no seu navegador com canvas HTML — sua imagem nunca sai do seu dispositivo." },
    { q: "Posso recortar em um tamanho específico?", a: "Sim. Digite a largura, a altura e as posições X e Y exatas em pixels, ou trave uma proporção e arraste as alças para ajustar visualmente." },
    { q: "Em quais formatos posso exportar?", a: "JPG, PNG ou WEBP. Escolha \"Igual ao original\" para manter o formato de entrada (GIF e BMP saem em PNG, porque a saída do canvas é uma imagem estática)." },
    { q: "Recortar diminui a qualidade?", a: "Não. O recorte só remove os pixels fora da seleção. Para JPG e WEBP você também pode escolher a qualidade da exportação." },
    { q: "Qual proporção usar nas redes sociais?", a: "1:1 para post do feed do Instagram ou a maioria das fotos de perfil, 4:5 para o retrato mais alto do Instagram, 9:16 para Stories, Reels, TikTok e status do WhatsApp, e 16:9 para miniaturas do YouTube e prévias de link no X. Os banners do LinkedIn são bem largos, perto de 4:1." },
    { q: "Qual a diferença entre recortar e redimensionar?", a: "Recortar remove partes da imagem e mantém os pixels que sobram no tamanho original. Redimensionar mantém a imagem inteira e muda quantos pixels ela tem. Recorte para mudar o que aparece no quadro; redimensione para mudar o tamanho do arquivo." },
    { q: "Posso recortar uma foto em um tamanho exato em pixels?", a: "Sim. Defina uma proporção fixa para controlar o formato e depois use a ferramenta Redimensionar imagem para chegar às dimensões exatas. Nessa ordem você evita a imagem esticada que aparece quando se força as medidas direto." },
    { q: "Recortar remove os dados EXIF?", a: "Sim, como efeito colateral — a imagem é recodificada a partir do canvas, que não leva os metadados junto. Isso inclui as coordenadas de GPS, o que muitas vezes é bem-vindo ao postar fotos publicamente. Se apagar os metadados é o objetivo, o Removedor de EXIF faz isso de forma explícita." },
    { q: "Posso recortar várias imagens de uma vez?", a: "Sim. Adicione quantas quiser e o mesmo recorte vale para todas, que é o que você quer em fotos de produto ou qualquer coisa fotografada sempre no mesmo lugar. O recorte é guardado em proporção, então imagens de tamanhos diferentes recebem o enquadramento equivalente, e tudo é baixado junto em um ZIP." },
    { q: "Dá para recortar em círculo ou outros formatos?", a: "Sim — recorte em retângulo, quadrado, círculo, elipse e cantos arredondados. Exporte em PNG ou WEBP e a área fora do formato fica transparente de verdade, que é o que você quer para uma foto de perfil redonda. O JPG não guarda transparência, então nele você escolhe uma cor para os cantos." },
    { q: "Posso girar ou endireitar enquanto recorto?", a: "Sim. Gire de 90° em 90°, espelhe na horizontal ou na vertical e use o controle de endireitar para nivelar um horizonte. Endireitar aproxima a imagem só o suficiente para não aparecerem cantos vazios." },
  ],

  security:
    "Suas imagens continuam privadas. O recorte é feito inteiro no seu navegador com canvas HTML — nada é enviado a um servidor. Quando você fecha a aba, a imagem some da memória. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "512" },

  ui: {
    // CropTool.tsx
    "Couldn't read {name}.": "Não foi possível ler {name}.",
    "Cropped 1 image.": "1 imagem recortada.",
    "Cropped {n} images.": "{n} imagens recortadas.",
    "Crop failed.": "Falha ao recortar.",
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "ou solte imagens JPG, PNG, WEBP, GIF ou BMP aqui",
    "Preview {name}": "Visualizar {name}",
    "done": "pronto",
    "Drag inside the box to move it, or a handle to resize · output {w} × {h} px":
      "Arraste dentro da caixa para mover, ou uma alça para redimensionar · saída {w} × {h} px",
    "— the same crop is applied to all {n} images": "— o mesmo recorte vale para as {n} imagens",
    "Clear images": "Remover imagens",
    "Files": "Arquivos",
    "Crop settings": "Configurações de recorte",
    "Crop Settings": "Configurações de recorte",
    "Crop|verb": "Recortar",
    "Cropping…": "Recortando…",
    "Output: {w} × {h} px — nothing is uploaded.": "Saída: {w} × {h} px — nada é enviado.",
    "Crop {n} images": "Recortar {n} imagens",
    "Crop & download": "Recortar e baixar",
    "Shape": "Formato",
    "Circle and Ellipse cut away the corners — export as PNG or WEBP to keep them transparent. JPG has no transparency, so those corners take the background colour instead.":
      "Círculo e Elipse cortam os cantos — exporte em PNG ou WEBP para deixá-los transparentes. O JPG não tem transparência, então esses cantos ficam com a cor de fundo.",
    "Corner radius": "Arredondamento dos cantos",
    "Aspect ratio": "Proporção",
    "Rotate & flip": "Girar e espelhar",
    "Flip horizontally": "Espelhar na horizontal",
    "Flip vertically": "Espelhar na vertical",
    "Straighten": "Endireitar",
    "Fine rotation for levelling a horizon. The image is zoomed just enough that no empty corners appear.":
      "Rotação fina para nivelar um horizonte. A imagem é aproximada só o suficiente para não aparecerem cantos vazios.",
    "Zoom": "Zoom", // i18n-same
    "Selection (px)": "Seleção (px)",
    "Exact pixel position and size of the crop on the image, after any rotation.":
      "Posição e tamanho exatos do recorte na imagem, em pixels, depois de qualquer rotação.",
    "Width": "Largura",
    "Height": "Altura",
    "Output size": "Tamanho de saída",
    "Corner fill (JPG has no transparency)": "Cor dos cantos (JPG não tem transparência)",
    "Outside the shape": "Fora do formato",
    // SHAPES / ASPECTS / OUTPUT_TARGETS / FORMATS (module scope, §4.2)
    "Rectangle": "Retângulo",
    "Square": "Quadrado",
    "Circle": "Círculo",
    "Ellipse": "Elipse",
    "Rounded": "Arredondado",
    "Same as original": "Igual ao original",
  },
};

export default content;
