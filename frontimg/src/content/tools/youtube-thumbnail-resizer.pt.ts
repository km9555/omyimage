import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/redimensionar-thumbnail-youtube (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "youtube-thumbnail-resizer",
  locale: "pt",
  name: "Redimensionar Thumbnail do YouTube",
  tagline:
    "Deixe qualquer imagem no tamanho de thumbnail do YouTube — exatamente 1280 × 720 pixels, 16:9, salva em JPG bem abaixo do limite de 2 MB. Cortar ou preencher, grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Redimensionar Thumbnail do YouTube — 1280×720 Grátis | oMyImage",
  metaDescription:
    "Deixe qualquer imagem no tamanho de thumbnail do YouTube: 1280 × 720 px (16:9), em JPG abaixo do limite de 2 MB. Cortar ou preencher, grátis e no navegador.",

  intro:
    "O YouTube quer thumbnails personalizadas em 1280 × 720 pixels, num quadro 16:9, com menos de 2 MB. Uma captura da sua edição, uma foto do celular ou uma arte exportada no tamanho errado raramente acerta as três coisas. Este redimensionador já abre no tamanho de thumbnail do YouTube: adicione a imagem, escolha se ela deve ser cortada para preencher o quadro ou completada com uma cor, e baixe um JPG que o YouTube Studio aceita de primeira.",

  sections: [
    {
      heading: "O tamanho que o YouTube pede",
      id: "spec",
      body: [
        "A orientação do próprio YouTube para thumbnails personalizadas é uma resolução de 1280 × 720 pixels, com largura mínima de 640, em JPG, GIF ou PNG, e arquivo com menos de 2 MB. O formato 16:9 combina com o player e com quase todo lugar onde a thumbnail aparece, da busca à coluna de vídeos sugeridos; uma imagem em outro formato ganha faixas ou um corte feitos pelo YouTube, e não por você.",
        "O redimensionador salva em JPG por padrão, porque um PNG de 1280 × 720 de uma thumbnail cheia de detalhes pode passar de 2 MB sozinho. Na qualidade padrão de 92%, uma thumbnail típica fica em poucas centenas de kilobytes, com folga abaixo do limite e com textos e rostos nítidos.",
      ],
    },
    {
      heading: "Recortar para preencher ou completar",
      id: "fit",
      body: [
        "Recortar para preencher é o padrão: a imagem é ampliada até cobrir todo o quadro 16:9, e o que sobra é aparado por igual nas bordas. Isso serve para a maioria das fotos e capturas de tela. Se o assunto está perto de uma borda, recorte a imagem antes com o botão de corte no cartão dela, para que a parte importante fique no quadro.",
        "Preencher com margem mantém a imagem inteira e preenche o espaço que sobra com uma cor que você escolhe. Use para uma foto vertical do celular, um logotipo quadrado ou um slide 4:3 que perderia demais com o corte. Uma cor sólida da sua marca atrás da imagem costuma parecer mais intencional do que faixas pretas.",
      ],
    },
    {
      heading: "Pensando numa tela pequena",
      id: "small",
      body: [
        "A maioria das pessoas vê sua thumbnail bem menor que o tamanho real — poucos centímetros de largura no feed do celular ou na lateral. Formas grandes, um rosto claro e três ou quatro palavras em letra grande sobrevivem a isso; letra miúda, fontes finas e fundos poluídos somem. Olhe a prévia pequena antes de decidir.",
        "Deixe o canto inferior direito livre. O YouTube mostra a duração do vídeo ali, e qualquer coisa importante nesse canto, como a última palavra de um título, fica coberta em toda thumbnail.",
      ],
    },
    {
      heading: "Enviando no YouTube Studio",
      id: "upload",
      body: [
        "Abra o vídeo no YouTube Studio, vá em Detalhes e escolha Enviar arquivo em Miniatura. Thumbnails personalizadas exigem um canal verificado; se a opção estiver cinza, verifique a conta com um número de telefone antes. A mudança pode levar um tempo para aparecer em todo lugar, porque as thumbnails ficam em cache.",
        "Guarde a arte original. Se depois quiser testar outro título ou outro corte, redimensione de novo a partir do original, e não do JPG baixado, para a thumbnail nunca perder qualidade de tanto ser salva.",
      ],
    },
    {
      heading: "A partir de um quadro do vídeo",
      id: "frame",
      body: [
        "Um bom quadro do próprio vídeo é um ótimo ponto de partida. Pause nele no player ou no editor e faça uma captura em tela cheia; numa tela 1080p ela já tem 1920 × 1080, o mesmo formato 16:9, então redimensionar para 1280 × 720 só muda a quantidade de pixels. Capturas de um celular em pé são altas em vez de largas — complete-as, ou corte a parte que importa.",
      ],
    },
  ],

  howToTitle: "Como redimensionar uma imagem para thumbnail do YouTube",
  steps: [
    { title: "Adicione a imagem", description: "Selecione um JPG, PNG, WEBP, GIF ou BMP — captura, foto ou arte." },
    { title: "Corte ou complete", description: "O tamanho de thumbnail do YouTube já vem escolhido; escolha Recortar para preencher ou Preencher com margem." },
    { title: "Baixe", description: "Redimensione e baixe um JPG de 1280 × 720 pronto para o YouTube Studio." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exatamente 1280 × 720", description: "O tamanho 16:9 que o YouTube recomenda, sem corte nem faixas depois do envio." },
    { icon: "compress", title: "Abaixo de 2 MB", description: "Salvo em JPG por padrão, bem abaixo do limite de tamanho das thumbnails." },
    { icon: "lock", title: "No seu navegador", description: "Sua arte é redimensionada no seu aparelho e nunca é enviada." },
  ],

  faqs: [
    { q: "Qual o tamanho da thumbnail do YouTube?", a: "1280 × 720 pixels, proporção 16:9, com largura mínima de 640 pixels. O arquivo deve ser JPG, GIF ou PNG e ter menos de 2 MB." },
    { q: "Como deixo minha imagem em 1280 × 720?", a: "Adicione aqui — o tamanho de thumbnail do YouTube já vem escolhido. Escolha Recortar para preencher ou Preencher com margem, depois redimensione e baixe." },
    { q: "Por que o YouTube diz que a thumbnail é grande demais?", a: "O arquivo provavelmente passa de 2 MB, o que acontece fácil com PNG. Esta ferramenta salva em JPG por padrão, que costuma ter poucas centenas de kilobytes." },
    { q: "Corto ou completo minha imagem?", a: "Corte para fotos e capturas de tela, para o quadro ficar cheio. Complete para fotos verticais, logotipos ou slides que perderiam demais com o corte." },
    { q: "Por que não consigo enviar uma thumbnail personalizada?", a: "Thumbnails personalizadas exigem uma conta verificada. Verifique com um número de telefone nas configurações do YouTube e a opção aparece no Studio." },
    { q: "Posso usar uma thumbnail em PNG?", a: "Pode, o YouTube aceita PNG. Escolha PNG como formato de saída, mas confira se o arquivo fica abaixo de 2 MB; JPG é o padrão mais seguro." },
    { q: "O que evitar no canto da thumbnail?", a: "O canto inferior direito, onde o YouTube mostra a duração do vídeo. Mantenha textos e rostos longe dele." },
    { q: "Posso redimensionar várias thumbnails de uma vez?", a: "Pode. Adicione todas; cada uma vira 1280 × 720 e elas são baixadas juntas num ZIP." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Ela é redimensionada no seu navegador; só você a envia ao YouTube." },
  ],

  security:
    "Sua thumbnail é redimensionada inteiramente no seu navegador. Imagens muito grandes podem ser processadas no nosso servidor e apagadas na hora; nada fica guardado.",
};

export default content;
