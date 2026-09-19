import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/editor-de-fotos.
 *
 * Head term "editor de fotos online (grátis)" — one of the largest image
 * queries in Brazil; iLoveIMG /pt/editor-de-fotos, Fotor, Canva and PicsArt
 * all compete on it. The H1 carries it; "editar foto", "editor de imagem" and
 * "photoshop online" live in aliases.ts. The page is honest that this is not
 * a Photoshop replacement, same as the English one.
 *
 * RIBBON, ASPECTS, PRESETS, ADJ_SLIDERS, FONTS, SHAPE_LABELS and the nine
 * position names are module scope, maintained here by hand (§4.2). The default
 * annotate stamp text ("Label") is drawn INTO the image, so it is translated.
 */
const content: ToolPageContent = {
  toolId: "image-editor",
  locale: "pt",
  name: "Editor de fotos online",
  seoName: "Editor de fotos",
  crumbLabel: "Editor de fotos",
  tagline:
    "Edite imagens online em um só lugar — recorte, redimensione, gire, ajuste, aplique filtros, desfoque, bordas, formato redondo, marca d'água e desenho, com desfazer e refazer. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Editor de fotos online grátis — editar imagem no navegador | oMyImage",
  metaDescription:
    "Editor de fotos online e grátis: recorte, gire, ajuste brilho e contraste, aplique filtros, desenhe e coloque marca d'água em um só lugar. Sem instalar e sem cadastro.",

  intro:
    "Um editor de fotos online para tudo. O Editor de fotos do oMyImage junta em uma única tela recortar, redimensionar, girar e espelhar, ajustes de cor e filtros, preto e branco, desfoque, bordas, recorte redondo, marca d'água de texto ou logo e desenho à mão livre. Aplique as edições em qualquer ordem, desfaça e refaça à vontade, e exporte uma vez só no final. Tudo roda no seu navegador, então sua imagem continua totalmente privada.",

  sections: [
    {
      heading: "As edições de que as pessoas realmente precisam",
      id: "scope",
      body: [
        "A maior parte da edição de imagens não é retoque. É endireitar uma foto torta, cortar uma borda que distrai, redimensionar algo para caber num limite de envio, desenhar uma seta num print ou clarear uma foto tirada num ambiente escuro. Esses trabalhos têm duas coisas em comum: levam menos de um minuto e não justificam abrir um programa profissional.",
        "É essa lacuna que este editor preenche. Tudo fica numa única tela, então você recorta, gira, ajusta e anota sem trocar de ferramenta nem exportar no meio do caminho. Quando termina, uma exportação entrega o arquivo final.",
        "Ele não é, de propósito, um substituto do Photoshop. Não há camadas, máscaras nem modos de mesclagem, porque acrescentá-los deixaria mais lentas as noventa por cento das edições que nunca precisaram deles.",
      ],
    },
    {
      heading: "Uma ordem de etapas que faz sentido",
      id: "order",
      body: [
        "Composição primeiro: recorte e endireite antes de qualquer coisa, para que as etapas seguintes trabalhem só com os pixels que você vai manter. Ajustar a exposição de uma área que você vai cortar é trabalho jogado fora, e recortar depois de redimensionar desperdiça a resolução que você fez questão de manter.",
        "Os ajustes vêm em seguida — brilho, contraste, saturação — enquanto você ainda tem a imagem inteira para avaliar. Depois as anotações, já que setas e caixas precisam ficar na posição final em relação a um quadro que não vai mais mudar.",
        "Redimensione por último, logo antes de exportar. Assim a anotação é redimensionada uma vez, no final, em vez de ser desenhada num tamanho e espremida em outro. Uma frustração comum é o texto que parecia certo na tela e fica ilegível no arquivo exportado, e quase sempre isso vem de redimensionar depois de anotar.",
      ],
    },
    {
      heading: "Anotando prints de tela",
      id: "annotation",
      body: [
        "Desenhar num print é um dos motivos mais comuns para alguém abrir um editor — marcar um erro para o desenvolvedor, apontar uma configuração numa resposta de suporte, destacar uma cláusula num documento.",
        "Duas coisas fazem uma anotação funcionar. Primeiro, contraste: uma seta vermelha some sobre um aviso de erro vermelho, então escolha uma cor que brigue com a interface em vez de combinar com ela. Segundo, moderação: três setas e uma caixa comunicam; quinze marcações, não.",
        "Exporte prints em PNG, e não em JPG. Capturas de interface são quase só bordas nítidas e letras pequenas, exatamente o conteúdo que o JPG trata pior — você ganha um halo leve em volta de cada letra e um arquivo que muitas vezes nem fica menor.",
      ],
    },
    {
      heading: "Nada sai do seu dispositivo",
      id: "privacy",
      body: [
        "O editor inteiro roda num canvas HTML dentro da aba do seu navegador. Sua imagem é lida do disco para a memória, editada ali e gravada de volta quando você exporta — ela nunca é enviada, e não existe cópia em servidor nenhum para ser guardada ou vazar.",
        "Isso importa mais do que parece, por causa do que as pessoas costumam editar. Prints mostram e-mails, números de conta, painéis internos e abas abertas. Documentos fotografados para um envio mostram tudo o que um documento mostra. Fazer esse trabalho no próprio dispositivo significa que a pergunta \"quem mais tem uma cópia?\" nem aparece.",
        "Um efeito prático: depois que a página carrega, o editor continua funcionando mesmo sem internet.",
      ],
    },
  ],

  howToTitle: "Como editar uma imagem online",
  steps: [
    { title: "Abra uma imagem", description: "Selecione uma imagem, ou arraste e solte no editor." },
    { title: "Escolha uma ferramenta", description: "Clique em qualquer ícone da barra — recortar, girar, ajustar, desfocar, borda, redondo, marca d'água ou desenhar — e ajuste as opções com a prévia ao vivo." },
    { title: "Aplique e repita", description: "Aplique cada edição para ir somando as mudanças, com desfazer e refazer completos, e encadeie quantas ferramentas quiser." },
    { title: "Exporte", description: "Baixe a imagem final em PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "dashboard_customize", title: "Todas as ferramentas em um lugar", description: "Recortar, redimensionar, girar, espelhar, ajustar, filtros, preto e branco, desfoque, borda, redondo, marca d'água e desenho — sem sair da página." },
    { icon: "history", title: "Desfazer e refazer", description: "Aplique edições uma depois da outra e volte ou avance à vontade, ou retorne ao original a qualquer momento." },
    { icon: "lock", title: "100% privado", description: "O editor inteiro roda no seu navegador com canvas HTML — sua imagem nunca é enviada a um servidor." },
  ],

  faqs: [
    { q: "O que dá para fazer no editor?", a: "Recortar e redimensionar, girar e espelhar, ajustar brilho, contraste, saturação e matiz com filtros prontos, deixar em preto e branco, desfocar, adicionar borda, deixar redonda, colocar marca d'água de texto ou logo e desenhar ou anotar — tudo na mesma imagem." },
    { q: "Posso desfazer uma alteração?", a: "Sim. Cada edição aplicada entra num histórico que você pode desfazer e refazer, e dá para voltar ao original a qualquer momento." },
    { q: "Vou perder qualidade?", a: "As edições são compostas num canvas em resolução total. Exporte em PNG para um resultado sem perdas, ou em JPG/WEBP com um controle de qualidade." },
    { q: "Preciso instalar algo ou criar conta?", a: "Não. É um editor online grátis que roda inteiro no seu navegador — sem cadastro, sem instalação, e sua imagem nunca sai do seu dispositivo." },
    { q: "É privado mesmo?", a: "Sim. Toda a edição acontece no seu próprio navegador; nada é enviado nem guardado." },
    { q: "Funciona em qualquer computador?", a: "Sim. Roda no navegador que você já tem, no Windows, macOS, Linux, Android e iOS. Não há nada para baixar, nenhuma conta para criar e nenhuma assinatura — que é o objetivo, já que a maioria das edições leva menos de um minuto e não justifica instalar um programa de fotos." },
    { q: "Como ele se compara ao Photoshop?", a: "Não se compara, e nem tenta. Aqui não há camadas, máscaras, curvas nem modos de mesclagem. O que ele cobre é o conjunto de operações que responde pela imensa maioria das edições do dia a dia — recortar, girar, redimensionar, ajustar, anotar, exportar — sem tempo de abertura e sem licença." },
    { q: "Editar altera meu arquivo original?", a: "Não. A imagem é carregada na memória e tudo acontece numa cópia — nada é gravado até você exportar, e o arquivo no seu disco nunca é tocado. O desenho também pode ser apagado sem mexer no resto do trabalho." },
    { q: "Quais formatos posso abrir e salvar?", a: "Abre JPG, PNG, WEBP, GIF e BMP; salva em JPG, PNG ou WEBP. GIFs animados abrem no primeiro quadro, porque o editor trabalha com uma única imagem estática." },
    { q: "Editar diminui a qualidade da imagem?", a: "Recortar, girar em ângulos retos e espelhar são todos sem perdas. Diminuir o tamanho também é praticamente sem perdas. O único lugar em que se gasta qualidade é a exportação, então escolha PNG ou WEBP se quiser manter tudo exato, ou JPG com qualidade alta se quiser um arquivo menor." },
    { q: "Funciona no celular?", a: "Sim. O layout se adapta a telas pequenas e o canvas responde ao toque, então recortar e anotar funcionam com o dedo. Imagens muito grandes ficam limitadas pela memória que o celular dá ao navegador, e não pela ferramenta." },
    { q: "Tem filtros prontos como no Instagram?", a: "Sim: Original, Vívido, P&B, Sépia, Frio e Quente, na ferramenta Ajustar. Depois de escolher um filtro você ainda pode ajustar brilho, contraste, saturação, matiz e sépia à mão." },
  ],

  security:
    "Sua imagem continua privada. O editor inteiro roda no seu navegador com canvas HTML — nada é enviado a um servidor. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "612" },

  ui: {
    // AllInOneEditor.tsx
    "Please select an image file.": "Selecione um arquivo de imagem.",
    "Couldn't read that image.": "Não foi possível ler essa imagem.",
    "Applied.": "Aplicado.",
    "Couldn't apply that edit.": "Não foi possível aplicar essa edição.",
    "Exported your edited image.": "Sua imagem editada foi exportada.",
    "Export failed.": "Falha ao exportar.",
    "Couldn't read that logo.": "Não foi possível ler esse logo.",
    "Open an image": "Abrir uma imagem",
    "or drop a JPG, PNG, WEBP or GIF to start editing": "ou solte um JPG, PNG, WEBP ou GIF para começar a editar",
    "Drag the box or its corners to set the crop, then Apply.": "Arraste a caixa ou os cantos para definir o recorte e depois clique em Aplicar.",
    "Draw on the image, then Apply to bake it in.": "Desenhe na imagem e depois clique em Aplicar para gravar.",
    "Live preview — adjust on the right, then Apply.": "Prévia ao vivo — ajuste à direita e depois clique em Aplicar.",
    "Watermark": "Marca d'água",
    "Editor": "Editor", // i18n-same
    "Export image": "Exportar imagem",
    "Export": "Exportar",
    "Left": "Esquerda",
    "Right": "Direita",
    "Flip H": "Espelhar H",
    "Flip V": "Espelhar V",
    "Fine angle": "Ângulo fino",
    "Width": "Largura",
    "Height": "Altura",
    "Lock aspect ratio": "Travar proporção",
    "Intensity": "Intensidade",
    "Blur strength": "Força do desfoque",
    "Thickness": "Espessura",
    "Corner rounding": "Arredondamento dos cantos",
    "Border color": "Cor da borda",
    "Ring thickness": "Espessura do anel",
    "Ring color": "Cor do anel",
    "Text": "Texto",
    "Logo": "Logo", // i18n-same
    "Size": "Tamanho",
    "Text color": "Cor do texto",
    "Change logo": "Trocar logo",
    "Upload logo": "Enviar logo",
    "Logo size": "Tamanho do logo",
    "Opacity": "Opacidade",
    "Position": "Posição",
    "Text to stamp": "Texto para carimbar",
    "Label": "Legenda",
    "Color": "Cor",
    "Stroke / size": "Traço / tamanho",
    "Clear drawing": "Apagar desenho",
    "Undo": "Desfazer",
    "Redo": "Refazer",
    "Revert to original": "Voltar ao original",
    "Change": "Trocar",
    "JPG background": "Fundo do JPG",
    // RIBBON (module scope, §4.2)
    "Crop": "Recortar",
    "Rotate": "Girar",
    "Resize": "Tamanho",
    "Adjust": "Ajustar",
    "Gray": "P&B",
    "Blur": "Desfoque",
    "Border": "Borda",
    "Round": "Redondo",
    "Mark": "Marca",
    "Draw": "Desenhar",
    // ADJ presets and sliders
    "Vivid": "Vívido",
    "B&W": "P&B",
    "Sepia": "Sépia",
    "Cool": "Frio",
    "Warm": "Quente",
    "Brightness": "Brilho",
    "Contrast": "Contraste",
    "Saturation": "Saturação",
    "Hue": "Matiz",
    // FONTS
    "Sans": "Sem serifa",
    "Serif": "Com serifa",
    "Impact": "Impact", // i18n-same
    "Mono": "Mono", // i18n-same
    // SHAPE_LABELS
    "Pen": "Caneta",
    "Line": "Linha",
    "Arrow": "Seta",
    "Rectangle": "Retângulo",
    "Ellipse": "Elipse",
    // POSITION_LABELS
    "Top left": "Superior esquerda",
    "Top center": "Superior central",
    "Top right": "Superior direita",
    "Middle left": "Meio à esquerda",
    "Center": "Centro",
    "Middle right": "Meio à direita",
    "Bottom left": "Inferior esquerda",
    "Bottom center": "Inferior central",
    "Bottom right": "Inferior direita",
  },
};

export default content;
