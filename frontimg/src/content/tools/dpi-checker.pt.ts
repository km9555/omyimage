import type { ToolPageContent } from "@/content/tools/types";
import converter from "@/content/tools/dpi-converter.pt";

/** Portuguese copy for /pt/verificar-dpi-da-imagem. */
const content: ToolPageContent = {
  toolId: "dpi-checker",
  locale: "pt",
  name: "Verificar DPI da Imagem",
  tagline:
    "Veja o DPI de imagens JPG, PNG, BMP e WEBP — e o tamanho em que cada uma é impressa e o maior tamanho em que sai nítida. Grátis, várias imagens de uma vez, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Verificar DPI da Imagem Online Grátis | oMyImage",
  metaDescription:
    "Veja o DPI de imagens JPG, PNG, BMP e WEBP online e grátis, com o tamanho de impressão e o maior tamanho nítido. No navegador, sem enviar nada.",

  intro:
    "Antes de mandar uma imagem para a gráfica ou para um formulário que pede um certo DPI, vale saber o que o arquivo realmente diz. O Verificar DPI do oMyImage lê a resolução guardada em cada imagem, mostra onde ela está guardada e a transforma nos números que importam: em que tamanho a imagem é impressa nesse DPI e qual o maior tamanho com qualidade de foto. Adicione uma imagem ou uma pasta inteira; nada sai do seu navegador.",

  sections: [
    {
      heading: "O que a verificação mostra",
      id: "what",
      body: [
        "Para cada imagem você vê o tamanho em pixels, o DPI guardado no arquivo e onde ele foi encontrado — o cabeçalho JFIF ou os dados EXIF de um JPG, o bloco pHYs de um PNG, o cabeçalho de um BMP ou o bloco EXIF de um WEBP. Se os valores horizontal e vertical forem diferentes, os dois aparecem.",
        "A partir desses números, a ferramenta calcula dois tamanhos de impressão em centímetros e polegadas: o tamanho que o arquivo pede no DPI guardado e o maior tamanho que sai nítido em 300 DPI, o padrão usual para fotos e documentos.",
      ],
    },
    {
      heading: "Como ler o resultado",
      id: "reading",
      body: [
        "Imagine uma foto de 2400 × 3000 pixels guardada com 72 DPI. A verificação mostra um tamanho de impressão de cerca de 84,7 × 105,8 cm — o que faria um programa que confia no rótulo — e um tamanho nítido de 20,3 × 25,4 cm em 300 DPI. O segundo número é o honesto: é até onde ela pode ir antes de os pixels aparecerem.",
        "Se um formulário ou gráfica pede 300 DPI e a verificação mostra outro valor, mude-o com o Alterar DPI. Se o tamanho nítido é menor que o tamanho de que você precisa, a imagem precisa de mais pixels, não de outro rótulo.",
      ],
    },
    {
      heading: "Quando a imagem não tem DPI",
      id: "none",
      body: [
        "Muitas imagens não têm DPI nenhum: GIFs nunca têm, muitos PNGs e capturas de tela também não, e alguns JPGs guardam só uma proporção de pixels. A verificação diz isso com clareza. Os programas então usam um padrão — em geral 72 ou 96 DPI —, e é por isso que o mesmo arquivo pode mostrar valores diferentes em aplicativos diferentes.",
        "A falta de valor não é problema para telas e sites. Só importa quando a imagem é impressa ou colocada num documento, e definir um DPI resolve isso em um segundo.",
      ],
    },
    {
      heading: "Como ver o DPI no Windows e no Mac",
      id: "os",
      body: [
        "No Windows, clique com o botão direito na imagem, escolha Propriedades e abra a aba Detalhes: Resolução horizontal e Resolução vertical mostram o DPI. No Mac, abra a imagem no Pré-Visualização e escolha Ferramentas, depois Mostrar Inspetor; a primeira aba traz o DPI da imagem. Os dois leem o mesmo valor guardado que esta ferramenta, então os números devem coincidir.",
      ],
    },
    {
      heading: "DPI e tamanho em pixels juntos",
      id: "both",
      body: [
        "Algumas exigências combinam os dois, como uma foto de 3,5 × 4,5 cm em 300 DPI, o que significa 413 × 531 pixels. Confira aqui primeiro o tamanho em pixels e o DPI; se algum estiver errado, o Redimensionar Imagem em cm gera o tamanho exato em pixels para os centímetros e o DPI de que você precisa e grava o DPI no arquivo.",
      ],
    },
  ],

  howToTitle: "Como verificar o DPI de uma imagem",
  steps: [
    { title: "Adicione as imagens", description: "Selecione uma ou várias imagens JPG, PNG, BMP, WEBP ou GIF." },
    { title: "Leia os resultados", description: "Cada imagem mostra os pixels, o DPI guardado, onde ele está e os tamanhos de impressão." },
    { title: "Mude se precisar", description: "Clique em Alterar DPI para levar as imagens direto para a ferramenta de alterar DPI." },
  ],

  features: [
    { icon: "info", title: "DPI e onde está guardado", description: "JFIF, EXIF, pHYs do PNG ou cabeçalho BMP — e um aviso claro quando não há nenhum." },
    { icon: "straighten", title: "Tamanhos de impressão", description: "O tamanho em que cada imagem é impressa e o maior tamanho nítido em 300 DPI." },
    { icon: "lock", title: "Nada é enviado", description: "Os arquivos são lidos no seu navegador e nunca saem do aparelho." },
  ],

  faqs: [
    { q: "Como verificar o DPI de uma imagem?", a: "Adicione-a aqui. A ferramenta mostra o DPI guardado no arquivo, onde ele está e os tamanhos de impressão." },
    { q: "Por que minha imagem não tem DPI?", a: "GIFs nunca guardam DPI, e muitos PNGs, capturas de tela e imagens da web também não. Os programas então assumem 72 ou 96 DPI." },
    { q: "Por que aplicativos diferentes mostram DPI diferentes?", a: "Quando o arquivo não guarda DPI, ou guarda dois valores que não batem, cada aplicativo usa o próprio padrão ou lê outro campo." },
    { q: "72 DPI é ruim?", a: "Não para telas, que ignoram o DPI. Para imprimir, o que importa é se há pixels suficientes para o tamanho desejado." },
    { q: "Até que tamanho minha imagem imprime nítida?", a: "Divida os pixels por 300 para ter polegadas. A ferramenta faz a conta e mostra o resultado também em centímetros." },
    { q: "Posso verificar várias imagens de uma vez?", a: "Pode. Adicione todas; cada uma recebe o próprio resultado." },
    { q: "Como mudo o DPI depois de verificar?", a: "Clique em Alterar DPI. Suas imagens abrem na ferramenta de alterar DPI, onde você escolhe o novo valor." },
    { q: "Ela lê o DPI de WEBP e BMP?", a: "Lê, quando o arquivo guarda um: o BMP no cabeçalho, o WEBP no bloco EXIF." },
    { q: "Minhas imagens são enviadas?", a: "Não. Os arquivos são lidos inteiramente no seu navegador." },
  ],

  security:
    "Suas imagens são lidas inteiramente no seu navegador. Nada é enviado, guardado ou rastreado.",

  // DpiTool.tsx is shared with dpi-converter, and each route only has its own
  // tool's ui in scope — the checker reuses the converter's translations.
  ui: converter.ui,
};

export default content;
