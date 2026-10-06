import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/alterar-dpi-da-imagem. */
const content: ToolPageContent = {
  toolId: "dpi-converter",
  locale: "pt",
  name: "Alterar DPI da Imagem",
  tagline:
    "Mude o DPI de imagens JPG e PNG para 300, 200, 72 ou qualquer valor — só o rótulo de DPI muda, então a imagem continua exatamente igual. Em lote, grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Alterar DPI da Imagem para 300 Online Grátis | oMyImage",
  metaDescription:
    "Mude o DPI de imagens JPG e PNG para 300, 200, 72 ou qualquer valor, online e grátis. Só o DPI muda, então a qualidade fica idêntica. Em lote, sem enviar nada.",

  intro:
    "Gráficas, editoras e alguns formulários pedem imagens \"em 300 DPI\", e uma foto tirada no celular ou uma captura de tela costuma dizer 72 ou 96 — ou nada. A ferramenta Alterar DPI do oMyImage reescreve esse único valor no arquivo. Adicione suas imagens JPG ou PNG, escolha o DPI e baixe cópias cujos pixels, qualidade e cores são, byte a byte, os do original, agora com a resolução de que você precisa.",

  sections: [
    {
      heading: "O que o DPI muda de fato",
      id: "what",
      body: [
        "DPI — pontos por polegada, a rigor PPI numa imagem digital — é um número guardado no cabeçalho do arquivo. Ele não descreve a imagem; diz a uma impressora ou a um programa de diagramação quantos pixels colocar em cada polegada de papel. As telas o ignoram por completo, e é por isso que a mesma foto aparece igual num site seja ela de 72 ou de 300.",
        "Como o DPI é só um rótulo, mudá-lo é uma pequena edição no cabeçalho: a densidade JFIF de um JPG (e a resolução EXIF, se o arquivo tiver) ou o bloco pHYs de um PNG. Nada é recomprimido, então não há perda de qualidade e o tamanho do arquivo fica o mesmo, com diferença de poucos bytes.",
      ],
    },
    {
      heading: "Como o tamanho de impressão sai do DPI",
      id: "print-size",
      body: [
        "Tamanho de impressão é simplesmente pixels divididos pelo DPI. Uma foto de 1200 × 1800 pixels com 300 DPI é impressa em 10,2 × 15,2 cm (4 × 6 polegadas). Com 72 DPI, os mesmos pixels pedem uma impressão de 42,3 × 63,5 cm. A ferramenta mostra em que tamanho a primeira imagem será impressa enquanto você escolhe o valor, para ver o efeito antes de baixar.",
        "Por isso mudar o DPI é útil em programas de diagramação e editores de texto: uma imagem com 300 DPI entra no documento no tamanho físico pretendido, em vez de aparecer enorme.",
      ],
    },
    {
      heading: "Quando você precisa de 300 DPI",
      id: "when",
      body: [
        "300 DPI é o padrão para fotos impressas, livros, revistas e tudo o que se olha de perto. 150–200 DPI servem para pôsteres e impressões grandes vistas de longe, e alguns formulários pedem exatamente 200 ou 300 porque o sistema confere o valor. 72 e 96 DPI são convenções antigas de tela e só importam quando um modelo os exige.",
        "Se uma gráfica recusar o arquivo por DPI baixo, confira também o tamanho em pixels: em geral ela quer dizer que a imagem vai sair grande demais ou sem nitidez no tamanho pedido, e um novo rótulo sozinho não resolve isso.",
      ],
    },
    {
      heading: "Mudar o DPI não é acrescentar pixels",
      id: "resample",
      body: [
        "Colocar 300 DPI numa imagem pequena não a deixa mais nítida; faz com que ela seja impressa menor. Uma foto de 600 × 400 em 300 DPI sai com apenas 5,1 × 3,4 cm. Para imprimir maior com a mesma qualidade, você precisa de mais pixels na origem — um original ou uma exportação de resolução maior —, não de um número maior no cabeçalho.",
        "Quando precisar de um tamanho físico exato, use Redimensionar Imagem em cm: ela calcula os pixels para um tamanho em centímetros, milímetros ou polegadas no seu DPI e grava o DPI no arquivo ao mesmo tempo.",
      ],
    },
    {
      heading: "Quais arquivos guardam DPI",
      id: "formats",
      body: [
        "JPG e PNG têm um lugar padrão para o DPI, e esses arquivos são alterados direto. Arquivos WEBP, GIF e BMP são convertidos antes para PNG — sem perdas, então todo pixel é mantido —, porque o PNG consegue guardar o valor e é aceito em qualquer lugar onde o DPI importa. O nome do arquivo baixado termina com o novo valor, por exemplo foto_300dpi.jpg.",
      ],
    },
  ],

  howToTitle: "Como alterar o DPI de uma imagem",
  steps: [
    { title: "Adicione as imagens", description: "Selecione uma ou várias imagens JPG ou PNG; WEBP, GIF e BMP também são aceitos." },
    { title: "Escolha o DPI", description: "Escolha 300, 200, 150, 96 ou 72, ou digite qualquer valor, e confira o tamanho de impressão." },
    { title: "Baixe", description: "Uma imagem é baixada direto; várias vêm juntas num ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Sem perder qualidade", description: "Só o valor de DPI no cabeçalho muda; os pixels ficam intactos." },
    { icon: "burst_mode", title: "Em lote", description: "Defina o DPI de uma pasta inteira de imagens de uma vez." },
    { icon: "lock", title: "No seu navegador", description: "Suas imagens são alteradas no seu aparelho e nunca são enviadas." },
  ],

  faqs: [
    { q: "Como deixar uma imagem em 300 DPI?", a: "Adicione a imagem, escolha 300 e clique em Alterar DPI. A cópia baixada fica com 300 DPI e exatamente os mesmos pixels." },
    { q: "Mudar o DPI diminui a qualidade?", a: "Não. Só um número no cabeçalho do arquivo muda. Nada é recomprimido, então qualidade e tamanho do arquivo continuam iguais." },
    { q: "300 DPI deixa minha foto mais nítida?", a: "Não. O DPI define em que tamanho a imagem é impressa, não quanto detalhe ela tem. Um DPI maior nos mesmos pixels dá uma impressão menor, não mais nítida." },
    { q: "Que DPI usar para imprimir?", a: "300 DPI para fotos e documentos vistos de perto; 150–200 para pôsteres e impressões grandes vistas de longe." },
    { q: "Por que minha imagem mostra 72 ou 96 DPI?", a: "Celulares, capturas de tela e muitos aplicativos salvam 72 ou 96, ou nenhum valor, e os programas então assumem um desses. Isso só importa na impressão." },
    { q: "O DPI importa para sites e redes sociais?", a: "Não. As telas mostram pixels e ignoram o valor de DPI completamente." },
    { q: "Dá para mudar o DPI de um WEBP ou GIF?", a: "Dá. Eles são convertidos para PNG sem perder nenhum pixel, e o PNG recebe o DPI escolhido." },
    { q: "Como confiro o DPI depois de converter?", a: "Use o Verificar DPI, ou abra as propriedades do arquivo: no Windows, a aba Detalhes mostra a resolução horizontal e vertical." },
    { q: "Posso mudar o DPI de várias imagens de uma vez?", a: "Pode. Adicione todas; cada uma recebe o mesmo DPI e elas são baixadas juntas num ZIP." },
    { q: "Minhas imagens são enviadas?", a: "Não. O DPI é alterado inteiramente no seu navegador." },
  ],

  security:
    "Suas imagens são alteradas inteiramente no seu navegador — só o campo de DPI de cada arquivo é reescrito. Nada é enviado, guardado ou rastreado.",

  ui: {
    // DpiTool.tsx — shared with dpi-checker, whose module reuses this block.
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "ou solte imagens JPG, PNG, WEBP, GIF ou BMP aqui",
    "Change DPI": "Alterar DPI",
    "Change DPI of {n} images": "Alterar DPI de {n} imagens",
    "Changed the DPI of 1 image.": "DPI de 1 imagem alterado.",
    "Changed the DPI of {n} images.": "DPI de {n} imagens alterado.",
    "DPI": "DPI", // i18n-same
    "DPI check": "Verificação de DPI",
    "DPI settings": "Configurações de DPI",
    "DPI only tells a printer how large to print the pixels. It never changes the pixels themselves.":
      "O DPI só diz à impressora em que tamanho imprimir os pixels. Ele nunca muda os pixels em si.",
    "For a sharp print, divide the pixels by 300: that is the largest size in inches that prints at photo quality.":
      "Para uma impressão nítida, divida os pixels por 300: esse é o maior tamanho, em polegadas, com qualidade de foto.",
    "Enter a DPI of at least 1.": "Digite um DPI de pelo menos 1.",
    "First image prints at {size}": "A primeira imagem é impressa em {size}",
    "Most programs then assume 72 or 96 DPI.": "Nesse caso, a maioria dos programas assume 72 ou 96 DPI.",
    "New DPI": "Novo DPI",
    "No DPI": "Sem DPI",
    "Not set": "Não definido",
    "Only the DPI label changes — the pixels and quality stay exactly the same.":
      "Só o valor de DPI muda — os pixels e a qualidade continuam exatamente iguais.",
    "Print size": "Tamanho de impressão",
    "Saving…": "Salvando…",
    "Sharp at 300 DPI": "Nítido a 300 DPI",
    "This format can't be read for DPI": "Não é possível ler o DPI deste formato",
    "WEBP, GIF and BMP files are saved as PNG, because only JPG and PNG can store a DPI.":
      "Arquivos WEBP, GIF e BMP são salvos como PNG, porque só JPG e PNG guardam o DPI.",
    "Where": "Onde",
    "Your images are changed in your browser and never uploaded.": "Suas imagens são alteradas no navegador e nunca são enviadas.",
    "Your images are read in your browser and never uploaded.": "Suas imagens são lidas no navegador e nunca são enviadas.",
    "{dpi} DPI": "{dpi} DPI", // i18n-same
    "{x} × {y} DPI": "{x} × {y} DPI", // i18n-same
    "{w} × {h} cm ({wi} × {hi} in)": "{w} × {h} cm ({wi} × {hi} pol.)",
    // SOURCE_LABEL (module scope)
    "Stored in the JFIF header": "Guardado no cabeçalho JFIF",
    "Stored in the EXIF data": "Guardado nos dados EXIF",
    "Stored in the PNG pHYs chunk": "Guardado no bloco pHYs do PNG",
    "Stored in the BMP header": "Guardado no cabeçalho BMP",
    "Only an aspect ratio is stored, not a DPI": "Só a proporção é guardada, não o DPI",
    "No DPI stored": "Nenhum DPI guardado",
  },
};

export default content;
