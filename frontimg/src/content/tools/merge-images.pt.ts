import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/juntar-imagens.
 *
 * Head term "juntar imagens" / "juntar fotos" — Adobe Express BR ("juntar
 * imagens"), Fotor, Canva pt-BR and imagecombiner all title on it. "juntar
 * fotos", "unir imagens", "colocar uma foto do lado da outra" and "montagem de
 * fotos" live in aliases.ts; the H1 keeps the slug's "imagens" and the intro
 * and FAQs carry "fotos", the word most people actually type.
 */
const content: ToolPageContent = {
  toolId: "merge-images",
  locale: "pt",
  name: "Juntar imagens",
  tagline:
    "Junte várias imagens em uma só online — lado a lado, uma embaixo da outra ou em grade, com espaçamento, fundo e ordem que você escolhe. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Juntar imagens online grátis — juntar fotos lado a lado | oMyImage",
  metaDescription:
    "Junte imagens online e grátis: coloque fotos lado a lado, uma embaixo da outra ou em grade, com espaçamento e fundo. Baixe em PNG, JPG ou WEBP, sem enviar nada.",

  intro:
    "Juntar imagens é o jeito de transformar várias fotos em um arquivo só. A ferramenta Juntar imagens do oMyImage coloca suas fotos lado a lado, uma embaixo da outra ou em grade direto no seu navegador, com controle da ordem, do espaçamento e do fundo — e um modo Personalizada para mover, girar e redimensionar cada foto à mão. Monte colagens, antes e depois ou folhas de comparação e baixe na hora. Nada é enviado, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "Uma imagem em vez de várias",
      id: "why",
      body: [
        "Muitos lugares aceitam exatamente uma imagem. Anúncios em marketplaces, posts em fóruns, formulários de avaliação, sistemas de chamados, conversas e a maioria das redes sociais têm um espaço, e não uma galeria — e o jeito de sempre, mandar várias fotos em sequência, obriga quem vê a lembrar da primeira enquanto olha a terceira.",
        "Juntar resolve isso colocando a comparação num único quadro. Um antes e depois fica lado a lado, onde a diferença aparece na hora; três ângulos de um produto chegam juntos; uma sequência de prints vira uma história só. Ninguém precisa ficar passando imagem.",
        "Também é o jeito mais simples de fazer uma comparação honesta. Duas imagens mostradas juntas, na mesma escala, são muito mais difíceis de distorcer do que duas imagens mostradas uma depois da outra.",
      ],
    },
    {
      heading: "Lado a lado ou uma embaixo da outra",
      id: "direction",
      body: [
        "Juntar na horizontal coloca as imagens lado a lado, a escolha natural para comparações. O olho passa de uma para a outra com facilidade e as duas metades são lidas como um par. É o formato padrão para antes e depois, variações de um produto e qualquer comparação A contra B.",
        "Juntar na vertical empilha as imagens uma embaixo da outra. Combina com sequências e instruções, em que a ordem importa e de cima para baixo indica progressão. Também é a melhor escolha para qualquer coisa que vai ser vista no celular: uma imagem alta enche a tela em pé, enquanto uma larga é reduzida até o detalhe sumir.",
        "Na dúvida, pense no que a pessoa deve fazer ao ver. Comparar? Lado a lado. Seguir passos? Uma embaixo da outra.",
      ],
    },
    {
      heading: "Tamanhos, espaços e alinhamento",
      id: "layout",
      body: [
        "Imagens de tamanhos diferentes são alinhadas pela borda em que se encontram, e o espaço que sobra é preenchido com a cor de fundo. É um padrão razoável, mas o resultado fica bem mais arrumado quando as imagens têm uma medida em comum — a mesma largura numa pilha vertical, a mesma altura numa faixa horizontal. Em Tamanho das imagens, a opção Igualar faz isso por você; Preencher vai além e recorta todas em blocos idênticos.",
        "Na maioria das vezes vale colocar um espaço entre as imagens. Sem ele, duas fotos com bordas parecidas podem parecer uma cena contínua, o que no mínimo confunde e, num antes e depois, pode enganar. De dez a vinte pixels costuma bastar para marcar a divisão sem parecer uma colagem.",
        "A cor de fundo preenche os espaços e qualquer sobra. O branco serve para quase tudo; um cinza médio costuma ficar melhor atrás de fotos, e a cor da sua marca funciona bem para o que vai ser publicado.",
      ],
    },
    {
      heading: "Juntar não perde qualidade",
      id: "quality",
      body: [
        "Nos formatos automáticos, com Tamanho das imagens em Original, as imagens são desenhadas nas dimensões nativas em pixels. Nada é reamostrado nem suavizado, então o resultado é exatamente tão nítido quanto as imagens de entrada. É o modo certo para emendar prints, em que meio pixel de suavização no texto aparece na hora.",
        "O que custa é mudar a escala. Redimensionar uma imagem no modo Personalizada, ou escolher Igualar ou Preencher para todas terem o mesmo tamanho, reamostra aquela imagem — inevitável, e nada pior do que qualquer outro redimensionamento, mas vale saber quando a alternativa era de graça.",
        "O único cuidado de qualidade é o formato de exportação. Escolha PNG ou WEBP para manter tudo exato, ou JPG se o resultado for uma foto e você quiser um arquivo menor. Se a montagem tiver prints ou texto, o PNG é claramente melhor — os defeitos do JPG se juntam justamente nas bordas nítidas de que as letras são feitas.",
      ],
    },
  ],

  howToTitle: "Como juntar imagens em uma só",
  steps: [
    { title: "Envie", description: "Selecione duas ou mais imagens, ou arraste e solte na área de trabalho." },
    { title: "Organize e ajuste", description: "Escolha Lado a lado, Empilhadas ou Grade, arraste as miniaturas para mudar a ordem e ajuste o espaçamento e o fundo. Personalizada deixa você mover, girar e redimensionar cada imagem à mão." },
    { title: "Junte e baixe", description: "Clique em Juntar e baixar — a imagem combinada é baixada na hora em PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "grid_view", title: "Quatro formatos", description: "Junte fotos lado a lado, empilhadas na vertical, em grade, ou organize livremente numa tela personalizada." },
    { icon: "open_with", title: "Prévia editável", description: "No modo Personalizada a prévia é o editor — arraste uma imagem para mover, puxe um canto para redimensionar e use a alça de cima para girar, com as bordas se alinhando enquanto você mexe." },
    { icon: "lock", title: "100% privado", description: "A junção roda inteiramente no seu navegador com canvas HTML — suas imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Quantas imagens posso juntar?", a: "Quantas quiser — adicione duas ou mais e organize lado a lado, uma embaixo da outra ou em grade." },
    { q: "Posso mudar a ordem das imagens?", a: "Sim. Arraste uma miniatura para outra posição na lista, ou use as setas para cima e para baixo se preferir — os dois definem a ordem em que as imagens são combinadas. No modo Personalizada a ordem também decide qual imagem fica por cima onde elas se sobrepõem, e os botões Trazer para frente e Enviar para trás mudam isso." },
    { q: "Dá para manter o fundo transparente?", a: "Sim. Escolha um fundo transparente e exporte em PNG ou WEBP para os espaços continuarem transparentes." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e todas as imagens são processadas localmente no seu navegador." },
    { q: "E se as minhas imagens tiverem tamanhos diferentes?", a: "Por padrão cada uma mantém as próprias dimensões, elas são alinhadas pela borda em que se encontram e o espaço que sobra fica com a cor de fundo que você escolher. Se preferir que combinem, mude Tamanho das imagens para Igualar — assim todas ficam com a mesma altura numa linha ou a mesma largura numa coluna. Preencher vai além e recorta todas em blocos idênticos." },
    { q: "Junto na horizontal ou na vertical?", a: "Na horizontal para antes e depois e comparações lado a lado, porque o olho compara mais fácil de um lado para o outro do que de cima para baixo. Na vertical para sequências, passo a passo e qualquer coisa que vai ser vista no celular, onde uma imagem alta aproveita melhor a tela do que uma larga." },
    { q: "Posso colocar espaço entre as imagens?", a: "Sim — um espaço com a cor de fundo que você escolher. Um espaço pequeno, de dez ou vinte pixels, deixa claro que são imagens separadas e não uma cena contínua, o que importa em comparações em que uma emenda perfeita poderia enganar." },
    { q: "Para que isso serve?", a: "Antes e depois, fotos de um produto de vários ângulos numa única imagem de anúncio, tutoriais passo a passo, sequências de prints para relatar um erro ou documentar algo, folhas de contato e posts em redes que só aceitam uma imagem quando você tem três coisas para mostrar." },
    { q: "Juntar imagens reduz a qualidade?", a: "Não nos formatos automáticos com Tamanho das imagens em Original — ali as imagens são desenhadas nas dimensões nativas e nada é reamostrado. Redimensionar uma imagem no modo Personalizada, ou usar Igualar ou Preencher, muda a escala dela, o pequeno custo de sempre ao mudar o tamanho de uma imagem. Exportar em JPG custa um pouco mais; PNG e WEBP mantêm exato o que você entregar." },
    { q: "Existe um limite prático de quantas juntar?", a: "Não há um limite fixo, mas uma faixa muito comprida fica difícil de ver — a maioria das plataformas reduz uma imagem larga para caber, então dez imagens lado a lado podem ficar pequenas demais para ler. De duas a quatro é o ponto ideal na prática." },
    { q: "Consigo juntar duas fotos pelo celular?", a: "Sim. A ferramenta roda no navegador do celular: escolha as fotos na galeria, arraste para organizar e toque em Juntar para baixar a imagem pronta." },
  ],

  security:
    "Suas imagens continuam privadas. A junção acontece inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "289" },

  ui: {
    // MergeTool.tsx — module-scope LAYOUTS
    "Side by side": "Lado a lado",
    "Stacked": "Empilhadas",
    "Grid": "Grade",
    "One row, left to right": "Uma linha, da esquerda para a direita",
    "One column, top to bottom": "Uma coluna, de cima para baixo",
    "Rows and columns": "Linhas e colunas",
    "Move, rotate and resize by hand": "Mova, gire e redimensione à mão",
    // lib/image/merge CELL_FITS
    "Match": "Igualar",
    "Fill": "Preencher",
    "Native size, nothing resampled": "Tamanho nativo, nada é reamostrado",
    "Equal heights in a row, equal widths in a column": "Mesma altura numa linha, mesma largura numa coluna",
    "Identical tiles, overflow cropped": "Blocos idênticos, o excesso é cortado",
    // lib/image/frame ASPECT_PRESETS hints (ratios pass through)
    "Instagram": "Instagram", // i18n-same
    "Portrait": "Retrato",
    "Widescreen": "Widescreen", // i18n-same
    "Story": "Stories",
    "Classic": "Clássico",
    "DSLR": "DSLR", // i18n-same
    "Print": "Impressão",
    // MergeTool.tsx
    "Please select image files.": "Selecione arquivos de imagem.",
    "Images are still loading — try again in a moment.": "As imagens ainda estão carregando — tente de novo em um instante.",
    "Merged 1 image.": "1 imagem combinada.",
    "Merged {n} images.": "{n} imagens combinadas.",
    "Merge failed.": "Não foi possível juntar as imagens.",
    "or drop two or more JPG, PNG or WEBP images here": "ou solte duas ou mais imagens JPG, PNG ou WEBP aqui",
    "Drag to move, corners to resize, the top handle to rotate. Shift snaps the angle, Alt turns off snapping.":
      "Arraste para mover, use os cantos para redimensionar e a alça de cima para girar. Shift trava o ângulo, Alt desliga o alinhamento automático.",
    "Live preview of the merged image.": "Prévia ao vivo da imagem combinada.",
    "Clear images": "Limpar imagens",
    "Files": "Arquivos",
    "Merge settings": "Configurações de junção",
    "Merge Settings": "Configurações de junção",
    "Merge": "Juntar",
    "Merging…": "Juntando…",
    "Images keep their stacking order — use the layer arrows to change which sits on top.":
      "As imagens mantêm a ordem de empilhamento — use os botões de camada para mudar qual fica por cima.",
    "Drag a thumbnail to reorder. A transparent PNG background keeps the gaps see-through.":
      "Arraste uma miniatura para mudar a ordem. Um fundo transparente em PNG deixa os espaços transparentes.",
    "Merge & download": "Juntar e baixar",
    "Layout": "Formato",
    "Canvas": "Tela",
    "Fit to content": "Ajustar ao conteúdo",
    "Re-arrange": "Reorganizar",
    "Selected image": "Imagem selecionada",
    "Click an image on the canvas to select it. Drag to move, use the corner handles to resize, and the handle above the top edge to rotate. Arrow keys nudge, Shift makes them move further.":
      "Clique numa imagem da tela para selecionar. Arraste para mover, use as alças dos cantos para redimensionar e a alça acima da borda de cima para girar. As setas do teclado fazem ajustes finos; com Shift, movem mais.",
    "Bring forward": "Trazer para frente",
    "Send back": "Enviar para trás",
    "Nothing selected — click an image on the canvas.": "Nada selecionado — clique numa imagem da tela.",
    "Columns": "Colunas",
    "Auto squares the grid off for you.": "No automático, a grade fica o mais quadrada possível.",
    "Image sizes": "Tamanho das imagens",
    "Spacing": "Espaçamento",
    "Output format": "Formato de saída",
  },
};

export default content;
