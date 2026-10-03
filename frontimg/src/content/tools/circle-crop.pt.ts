import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/recortar-imagem-em-circulo.
 *
 * Head term "recortar imagem em círculo" / "cortar foto em círculo" — iLoveIMG
 * /pt uses "recortar imagem" for the rectangular tool, and the round crop is
 * searched as "foto redonda", "imagem circular" and "foto de perfil redonda",
 * all in aliases.ts. The slug is ASCII, so "circulo" without the accent; the
 * copy always writes "círculo" properly.
 */
const content: ToolPageContent = {
  toolId: "circle-crop",
  locale: "pt",
  name: "Recortar imagem em círculo",
  tagline:
    "Recorte imagens num círculo perfeito online — ideal para avatares e fotos de perfil, com fundo transparente, borda opcional e processamento em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Recortar imagem em círculo online grátis — foto redonda | oMyImage",
  metaDescription:
    "Recorte fotos em círculo online e grátis: deixe a imagem redonda com fundo transparente, escolha o tamanho e adicione uma borda. Sem cadastro e sem enviar a foto.",

  intro:
    "Recortar uma imagem em círculo é o jeito de fazer avatares e fotos de perfil redondas em segundos. A ferramenta Recortar imagem em círculo do oMyImage corta sua foto num círculo suave direto no navegador — arraste o círculo para enquadrar exatamente o que você quer, redimensione, aproxime o zoom para posicionar com precisão e escolha o tamanho de saída. Fundo transparente por padrão, com cor de preenchimento e borda opcionais. Recorte uma imagem ou um lote inteiro — nada é enviado, então suas fotos continuam privadas.",

  sections: [
    {
      heading: "A transparência é o ponto principal",
      id: "transparency",
      body: [
        "Um recorte circular só é realmente circular se os cantos ficarem transparentes. Caso contrário você tem uma imagem quadrada com um círculo desenhado nela — e, assim que ela for colocada sobre um fundo de outra cor, o quadrado aparece.",
        "Isso faz do formato de exportação a decisão mais importante aqui, e a que mais gente erra. PNG e WEBP têm canal alfa e mantêm os cantos vazios. O JPG não tem canal alfa nenhum, então a área fora do círculo precisa ser preenchida com alguma coisa — é por isso que um recorte circular em JPG chega com uma caixa branca em volta.",
        "Se você sabe que a imagem vai ficar sempre sobre uma cor sólida conhecida, preencher com essa cor funciona bem. Se ela pode ir para qualquer lugar, use PNG.",
      ],
    },
    {
      heading: "Onde a imagem redonda é realmente necessária",
      id: "uses",
      body: [
        "A maioria das redes sociais já aplica a máscara redonda no avatar, então enviar um quadrado basta. Os casos que precisam de um recorte circular de verdade são aqueles em que ninguém vai fazer a máscara para você.",
        "Isso inclui páginas de equipe e assinaturas de autor num site, fotos em slides de apresentação, fotos de colaboradores num PDF ou relatório, logotipos e selos, assinaturas de e-mail e material impresso. Em todos esses casos você está colocando um arquivo de imagem diretamente, e, se os cantos não forem transparentes, eles vão aparecer.",
        "Também é útil para fotos de produto e ícones, em que um recorte redondo simplesmente parece mais acabado do que um retângulo solto no layout.",
      ],
    },
    {
      heading: "Compondo dentro de um círculo",
      id: "composition",
      body: [
        "Um círculo corta mais do que parece — os cantos do original somem por completo, então qualquer coisa perto da borda desaparece. Componha deixando mais espaço em volta do assunto do que você deixaria num recorte retangular.",
        "Em retratos, o posicionamento que funciona é deixar os olhos um pouco acima do centro, com um respiro acima da cabeça. Centralizar a cabeça inteira matematicamente costuma deixar um vazio esquisito em cima e cortar o queixo. Encher o círculo com o rosto dá sensação de aperto; deixar uma margem pequena faz parecer um retrato pensado.",
        "Comece de uma foto mais ou menos quadrada, se puder. Recortar em círculo uma foto panorâmica joga fora a maior parte do quadro, então um original mais fechado dá muito mais resolução aproveitável no resultado.",
      ],
    },
    {
      heading: "Tamanho e borda",
      id: "sizing",
      body: [
        "Entre 400 e 800 pixels de lado cobre todo uso realista. As plataformas reduzem para as dimensões delas, então mais resolução que isso são bytes desperdiçados; bem menos e a imagem fica mole numa tela de alta densidade.",
        "Uma borda fina em volta resolve um problema específico: um retrato claro numa página clara não tem limite visível, e a cabeça parece flutuar. Uma borda de um ou dois pixels num tom médio define a forma sem chamar atenção. Bordas mais grossas começam a parecer moldura, o que é uma decisão de design, e não uma correção.",
      ],
    },
  ],

  howToTitle: "Como recortar uma imagem em círculo",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Posicione o círculo", description: "Arraste o círculo para onde quiser, puxe a alça para redimensionar, aproxime o zoom para os detalhes e depois escolha o tamanho de saída, o fundo e a borda opcional." },
    { title: "Recorte e baixe", description: "Clique em Recortar em círculo e baixar — uma imagem vem direto, várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "panorama_fish_eye", title: "Recorte exatamente onde quiser", description: "Arraste o círculo sobre a parte da foto que você realmente quer, redimensione pela alça e aproxime o zoom para posicionar com precisão." },
    { icon: "blur_circular", title: "Transparente ou com borda", description: "Exporte um PNG ou WEBP transparente, ou acrescente uma cor de fundo e uma borda em volta do círculo." },
    { icon: "lock", title: "Em lote e privado", description: "Recorte um lote inteiro de uma vez, tudo no seu navegador — as imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "O fundo fica transparente?", a: "Sim, por padrão — exporte em PNG ou WEBP para os cantos fora do círculo continuarem transparentes. Escolha JPG para achatar sobre uma cor." },
    { q: "E se a minha imagem não for quadrada?", a: "Não precisa ser. O círculo começa centralizado, quase da largura do lado menor, e você pode arrastá-lo para qualquer parte da imagem e redimensionar — então um rosto no canto de uma foto larga é tão fácil de recortar quanto um centralizado. \"Centralizar e zerar o zoom\" o traz de volta." },
    { q: "Posso escolher onde o círculo fica?", a: "Pode. Arraste o círculo para mover, puxe a alça na borda para redimensionar e use o zoom quando precisar de precisão. As setas do teclado movem um pixel por vez (com Shift, dez), e + e − redimensionam." },
    { q: "Qual vai ser o tamanho da imagem exportada?", a: "Por padrão, \"Original\" exporta o círculo na resolução que ele tem na imagem de origem, então nada é ampliado. Você também pode fixar 256, 512 ou 1024 pixels de lado, o que é prático para avatares com um espaço de tamanho definido." },
    { q: "Dá para colocar uma borda em volta do círculo?", a: "Sim. Ajuste a espessura e a cor da borda para criar um contorno limpo em volta do recorte circular." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e todas as imagens são processadas localmente no seu navegador." },
    { q: "Por que meu recorte em círculo ficou com um quadrado branco atrás?", a: "Porque você exportou em JPG. O JPG não tem transparência, então tudo fora do círculo precisa ser preenchido com uma cor sólida. Exporte em PNG ou WEBP e os cantos ficam realmente transparentes." },
    { q: "Qual deve ser o tamanho de uma foto de perfil?", a: "Algo entre 400×400 e 800×800 cobre praticamente todas as plataformas. Todas reduzem para o tamanho de exibição delas, então mandar mais de uns 800 pixels não ganha nada, e menos de uns 200 fica mole numa tela de alta densidade." },
    { q: "Preciso mesmo recortar em círculo para uma foto de perfil?", a: "Em geral não — a maioria das plataformas aplica a própria máscara redonda no quadrado que você enviar. Fazer isso por conta importa quando você precisa da imagem redonda em algum lugar que não vai mascarar para você: um site, um slide, um PDF, uma assinatura de e-mail ou um material impresso." },
    { q: "Como centralizar o recorte no rosto?", a: "Posicione o círculo com os olhos um pouco acima do meio, e não exatamente no centro. Centralizar pela cabeça inteira costuma deixar espaço demais em cima e cortar o queixo. Deixe um respiro em volta da cabeça em vez de encher o círculo de ponta a ponta." },
    { q: "Quando vale a pena colocar a borda?", a: "Quando a imagem vai ficar sobre um fundo de tom parecido — sem ela, a borda de um retrato claro pode sumir numa página clara e a cabeça parece flutuar. Deixe fina; uma borda pesada disputa com o assunto." },
    { q: "A imagem perde qualidade?", a: "Não. O recorte mantém os pixels que sobram exatamente como estavam. O único custo de qualidade é a exportação, e escolher PNG evita até isso." },
  ],

  security:
    "Suas imagens continuam privadas. O recorte em círculo acontece inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.9", count: "352" },

  ui: {
    // CircleCropTool.tsx — module-scope FORMATS and OUTPUT_TARGETS
    "PNG (transparent)": "PNG (transparente)",
    "WEBP (transparent)": "WEBP (transparente)",
    // CircleCropTool.tsx
    "Couldn't read {name}.": "Não foi possível ler {name}.",
    "Circle-cropped 1 image.": "1 imagem recortada em círculo.",
    "Circle-cropped {n} images.": "{n} imagens recortadas em círculo.",
    "Circle crop failed.": "Não foi possível recortar em círculo.",
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "Preview {name}": "Ver {name}",
    "done": "pronto",
    "Drag the circle to move it, or a corner handle to resize":
      "Arraste o círculo para mover, ou uma alça de canto para redimensionar",
    "exports at": "exporta em",
    "— applied to all {n} images": "— aplicado a todas as {n} imagens",
    "Clear images": "Limpar imagens",
    "Files": "Arquivos",
    "Circle crop settings": "Recorte em círculo",
    "Circle Crop Settings": "Recorte em círculo",
    "Crop": "Recortar",
    "Cropping…": "Recortando…",
    "Circle crop {n}": "Recortar {n} imagens",
    "Circle crop & download": "Recortar em círculo e baixar",
    "Zoom": "Zoom", // i18n-same
    "Output size": "Tamanho de saída",
    "Original exports the circle at its own resolution in the source image — it never upscales. The fixed sizes suit avatars with a set slot to fill.":
      "Original exporta o círculo na resolução que ele tem na imagem de origem — nunca amplia. Os tamanhos fixos servem para avatares com um espaço definido.",
    "Recentre & reset zoom": "Centralizar e zerar o zoom",
    "Output format": "Formato de saída",
    "Ring thickness": "Espessura da borda",
    "Ring color": "Cor da borda",
  },
};

export default content;
