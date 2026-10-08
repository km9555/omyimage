import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.pt";

/** Portuguese copy for /pt/redimensionar-gif. */
const content: ToolPageContent = {
  toolId: "gif-resizer",
  locale: "pt",
  name: "Redimensionar GIF",
  tagline:
    "Redimensione GIFs animados por porcentagem ou em pixels exatos — cada quadro é redimensionado e a animação toca exatamente como antes. Grátis, sem marca d'água, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Redimensionar GIF Online Grátis — GIF Animado | oMyImage",
  metaDescription:
    "Redimensione GIFs animados online e grátis por porcentagem ou em pixels exatos. Todos os quadros e o tempo são mantidos. No navegador, sem enviar nada e sem marca d'água.",

  intro:
    "Redimensionar um GIF animado num editor de imagens comum normalmente guarda só o primeiro quadro. O Redimensionar GIF do oMyImage redimensiona todos os quadros da animação e mantém o tempo e a repetição, então o resultado se mexe exatamente como o original, só que no tamanho de que você precisa. Escale por porcentagem ou digite a largura e a altura em pixels, compare o original com o resultado e baixe.",

  sections: [
    {
      heading: "Porcentagem ou pixels exatos",
      id: "modes",
      body: [
        "Por porcentagem é o jeito rápido: 50% reduz largura e altura pela metade, 25% a um quarto, e qualquer valor até 400% funciona. Por pixels deixa você digitar uma largura ou altura exata; com Manter proporção ligado, o outro lado acompanha o formato do próprio GIF, então nada fica achatado.",
        "Desligue Manter proporção só quando o destino exigir uma caixa exata, como um avatar quadrado, e o GIF já estiver perto desse formato — senão a animação vai parecer esticada.",
      ],
    },
    {
      heading: "Tamanhos comuns",
      id: "sizes",
      body: [
        "Emojis personalizados e reações são quadrados pequenos: o Discord, por exemplo, mostra emojis em 128 × 128 e limita o arquivo a 256 KB, então um GIF de reação normalmente precisa diminuir em tamanho e em peso. Fotos de perfil e figurinhas costumam ter de 256 a 512 pixels de lado; GIFs em artigos e documentação costumam ter de 480 a 800 pixels de largura.",
        "Se o destino também tem limite de peso, redimensione primeiro e depois passe o resultado pelo Comprimir GIF; menos pixels é a maior economia isolada.",
      ],
    },
    {
      heading: "O que acontece com a qualidade",
      id: "quality",
      body: [
        "Diminuir um GIF mantém a nitidez, porque cada novo pixel é a média de vários antigos. Essa média cria cores intermediárias e, como o GIF permite 256 cores, o resultado ganha uma paleta nova escolhida para a animação inteira, o que mantém as cores estáveis de um quadro para outro.",
        "Aumentar é possível, mas não acrescenta detalhe: bordas ficam suaves e pixel art fica borrada. Para pixel art, aumente em múltiplos inteiros como 200% e espere alguma suavização; para detalhe de verdade, volte ao arquivo de origem.",
      ],
    },
    {
      heading: "Peso do arquivo depois de redimensionar",
      id: "filesize",
      body: [
        "O peso cai mais ou menos junto com o número de pixels, então 50% da largura e da altura costuma dar cerca de um quarto do tamanho. Como o GIF é reconstruído para cada quadro guardar só o que mudou, um GIF redimensionado pode ficar até menor do que os pixels sozinhos fariam esperar.",
        "Aumentar faz o contrário: o dobro do tamanho dá cerca de quatro vezes o arquivo. Confira o peso do resultado abaixo da prévia antes de baixar.",
      ],
    },
    {
      heading: "Quadros, tempo e transparência",
      id: "frames",
      body: [
        "Todos os quadros são mantidos com o próprio atraso, inclusive em GIFs em que alguns quadros param mais tempo que outros, e a animação repete como a original. GIFs transparentes continuam transparentes; a transparência do GIF não tem bordas suaves, então uma borda transparente muito reduzida pode parecer serrilhada sobre fundo escuro.",
      ],
    },
    {
      heading: "GIFs em slides e documentos",
      id: "slides",
      body: [
        "Um GIF colocado no PowerPoint, no Keynote, no Google Slides ou num documento do Word guarda o tamanho total em pixels dentro do arquivo, mesmo quando aparece pequeno. Um GIF de 1200 pixels mostrado como miniatura deixa a apresentação inteira pesada e lenta para abrir ou mandar por e-mail.",
        "Redimensione o GIF para mais ou menos a largura em que ele vai aparecer — cerca de 800 pixels para um slide inteiro, 400–600 para um GIF ao lado de texto — antes de inserir. O slide fica igual e o arquivo continua leve.",
      ],
    },
  ],

  howToTitle: "Como redimensionar um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha o tamanho", description: "Escolha uma porcentagem ou digite a largura e a altura em pixels." },
    { title: "Redimensione e baixe", description: "Clique em Redimensionar GIF, compare o resultado e baixe." },
  ],

  features: [
    { icon: "photo_size_select_large", title: "Todos os quadros", description: "A animação inteira é redimensionada, não só o primeiro quadro." },
    { icon: "aspect_ratio", title: "Porcentagem ou pixels", description: "Escale por porcentagem ou defina largura e altura exatas." },
    { icon: "lock", title: "Nada é enviado", description: "Seu GIF é redimensionado inteiramente no navegador." },
  ],

  faqs: [
    { q: "Como redimensionar um GIF animado?", a: "Adicione o GIF, escolha uma porcentagem ou pixels exatos e clique em Redimensionar GIF. Todos os quadros são redimensionados e a animação continua." },
    { q: "O GIF continua animado?", a: "Continua. Todos os quadros são mantidos com o tempo e a repetição originais." },
    { q: "Como deixar um GIF com 128 × 128?", a: "Escolha Por pixels, digite 128 na largura e, se o GIF não for quadrado, desligue Manter proporção ou recorte-o quadrado antes." },
    { q: "Redimensionar diminui o peso do arquivo?", a: "Diminuir, sim — metade da largura e da altura costuma dar cerca de um quarto do tamanho." },
    { q: "Dá para aumentar um GIF?", a: "Dá, até 400%, mas aumentar não acrescenta detalhe e as bordas ficam suaves." },
    { q: "A transparência é mantida?", a: "É. GIFs transparentes continuam transparentes depois de redimensionados." },
    { q: "Fica marca d'água?", a: "Não. O GIF redimensionado não tem marca d'água." },
    { q: "Dá para redimensionar e comprimir de uma vez?", a: "Redimensione aqui e depois passe o resultado pelo Comprimir GIF para usar menos cores ou quadros." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. O redimensionamento acontece inteiramente no seu navegador." },
    { q: "Dá para redimensionar um GIF no celular?", a: "Dá, no navegador do celular. GIFs grandes demoram um pouco mais no celular, e o progresso aparece enquanto trabalha." },
    { q: "Posso redimensionar vários GIFs de uma vez?", a: "Um por vez, para cada GIF ter a própria prévia e o próprio tamanho. As configurações continuam valendo para o próximo." },
  ],

  security:
    "Seu GIF é redimensionado quadro a quadro no seu navegador. Nada é enviado, guardado ou rastreado.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
