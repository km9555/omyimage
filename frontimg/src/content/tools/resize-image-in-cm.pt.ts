import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/redimensionar-imagem-em-cm (variant of resize-image, Print size mode). */
const content: ToolPageContent = {
  toolId: "resize-image-in-cm",
  locale: "pt",
  name: "Redimensionar Imagem em cm",
  tagline:
    "Redimensione uma imagem para um tamanho exato em centímetros, milímetros ou polegadas, em 300 DPI ou qualquer DPI — com o DPI gravado no arquivo, para imprimir nesse tamanho. Grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Redimensionar Imagem em cm Online — Tamanho de Impressão Exato | oMyImage",
  metaDescription:
    "Redimensione uma imagem para um tamanho exato em centímetros, milímetros ou polegadas, em 300 DPI ou outro, com o DPI gravado no arquivo. Grátis, sem enviar nada.",

  intro:
    "Formulários, gráficas e modelos de documento descrevem imagens em centímetros — uma foto 3x4, uma impressão 10 × 15, uma figura de 8 cm de largura num relatório. Mas uma imagem é feita de pixels, então o tamanho precisa ser traduzido. Esta ferramenta faz a tradução: digite o tamanho em cm, mm ou polegadas, escolha o DPI, e ela redimensiona a imagem para o número exato de pixels e grava o DPI no arquivo, para qualquer impressora ou editor de texto colocá-la no tamanho que você pediu.",

  sections: [
    {
      heading: "De centímetros para pixels",
      id: "formula",
      body: [
        "Pixels = tamanho em polegadas × DPI, e uma polegada tem 2,54 cm. Em 300 DPI, cada centímetro precisa de cerca de 118 pixels. Uma foto 3x4 (3 × 4 cm) vira então 354 × 472 pixels, e uma página A4 inteira de 21 × 29,7 cm vira 2480 × 3508 pixels.",
        "Você nunca precisa fazer a conta. Digite o tamanho, e o painel mostra o tamanho em pixels para o qual a primeira imagem será redimensionada no DPI escolhido. Troque entre cm, mm e polegadas quando quiser; o valor é convertido para o tamanho físico continuar o mesmo.",
      ],
    },
    {
      heading: "Tamanhos comuns em 300 DPI",
      id: "common",
      body: [
        "Uma foto 3x4: 354 × 472 px. Uma foto 5x7 (5 × 7 cm): 591 × 827 px. Uma impressão 10 × 15 cm: 1181 × 1772 px. Uma página A4: 2480 × 3508 px. Uma página A5 (14,8 × 21 cm): 1748 × 2480 px.",
        "Para fotos de documento com regras de tamanho do rosto, o Foto para documento faz o recorte e o fundo por você; esta ferramenta é para qualquer outro tamanho de que você precise no papel.",
      ],
    },
    {
      heading: "Mantendo as proporções",
      id: "aspect",
      body: [
        "Com Manter proporção ligado, você digita um lado e o outro acompanha o formato da própria imagem, então nada fica achatado. Para acertar os dois lados exatamente — digamos 3 × 4 cm a partir de uma foto deitada —, recorte antes a imagem nesse formato com o botão de corte no cartão dela e depois digite o tamanho. Desligar a trava e digitar os dois lados estica a imagem para caber, o que raramente é o desejado.",
        "Quando o tamanho é preenchido a partir da primeira imagem, ele mostra o tamanho de impressão atual dela no DPI escolhido — um jeito rápido de ver em que tamanho uma foto seria impressa como está.",
      ],
    },
    {
      heading: "Qual DPI escolher",
      id: "dpi",
      body: [
        "300 DPI é o padrão para fotos e documentos impressos, e o valor inicial aqui. 200 DPI é comum em formulários e ainda imprime bem; 150 DPI serve para pôsteres grandes vistos de longe; 600 DPI é para desenhos de traço e detalhes finos. Mais DPI significa mais pixels para os mesmos centímetros, então um arquivo maior.",
        "Se a imagem tem menos pixels do que o tamanho exige, ela é ampliada e a impressão sai suave. O painel mostra os pixels de destino, então compare com o tamanho da própria imagem antes de redimensionar; para um resultado nítido, imprima menor ou parta de um original maior.",
      ],
    },
    {
      heading: "O DPI fica gravado no arquivo",
      id: "saved",
      body: [
        "Arquivos JPG e PNG redimensionados levam o DPI escolhido, então Word, Google Docs, programas de diagramação e janelas de impressão os mostram no tamanho físico pretendido logo de cara. O WEBP não tem um campo de DPI que o navegador consiga gravar, então escolha JPG ou PNG como formato de saída quando o tamanho de impressão importar.",
        "Os nomes dos arquivos dizem o que você fez, por exemplo foto_3x4cm.jpg, para um lote com tamanhos diferentes continuar fácil de separar.",
      ],
    },
  ],

  howToTitle: "Como redimensionar uma imagem em cm",
  steps: [
    { title: "Adicione a imagem", description: "Selecione uma ou várias imagens JPG, PNG, WEBP, GIF ou BMP." },
    { title: "Digite o tamanho e o DPI", description: "Digite a largura ou a altura em cm, mm ou polegadas e escolha o DPI — 300 já vem selecionado." },
    { title: "Redimensione e baixe", description: "Baixe imagens com o tamanho exato em pixels e o DPI gravado no arquivo." },
  ],

  features: [
    { icon: "straighten", title: "cm, mm ou polegadas", description: "Digite o tamanho na unidade do seu formulário ou da gráfica; os pixels são calculados para você." },
    { icon: "high_quality", title: "DPI gravado no arquivo", description: "JPG e PNG levam o DPI, então imprimem no tamanho que você digitou." },
    { icon: "lock", title: "No seu navegador", description: "Suas imagens são redimensionadas no seu aparelho e nunca são enviadas." },
  ],

  faqs: [
    { q: "Como redimensionar uma imagem em cm?", a: "Adicione a imagem, digite a largura ou a altura em centímetros, escolha o DPI e clique em Redimensionar e baixar. A imagem recebe o tamanho exato em pixels e o DPI fica gravado no arquivo." },
    { q: "Quantos pixels tem 1 cm?", a: "Depende do DPI: cerca de 118 pixels em 300 DPI, 79 em 200 DPI e 28 em 72 DPI." },
    { q: "Quanto é uma foto 3x4 em pixels?", a: "354 × 472 pixels em 300 DPI, ou 236 × 315 pixels em 200 DPI." },
    { q: "Dá para redimensionar em polegadas ou milímetros?", a: "Dá. Troque a unidade para polegadas ou mm; os valores são convertidos para o tamanho físico continuar o mesmo." },
    { q: "Que DPI devo usar?", a: "300 DPI para fotos e documentos, 200 DPI para a maioria dos formulários, 150 DPI para pôsteres grandes." },
    { q: "A imagem vai ser impressa no tamanho que digitei?", a: "Vai, em JPG ou PNG: o DPI fica gravado no arquivo, então impressoras e editores de texto usam o tamanho certo." },
    { q: "Por que a imagem ficou borrada depois de redimensionar em cm?", a: "Ela tinha menos pixels do que o tamanho pedia e foi ampliada. Imprima menor, use um DPI menor ou parta de um original maior." },
    { q: "Como acertar largura e altura exatas sem esticar?", a: "Recorte antes a imagem no formato certo com o botão de corte no cartão dela, depois digite os dois lados." },
    { q: "Posso redimensionar várias imagens para o mesmo tamanho?", a: "Pode. Adicione todas; cada uma é redimensionada para o mesmo tamanho físico e elas são baixadas juntas num ZIP." },
    { q: "Minhas imagens são enviadas?", a: "Não. O redimensionamento acontece no navegador; só imagens muito grandes podem ser processadas no nosso servidor e são apagadas na hora." },
  ],

  security:
    "Suas imagens são redimensionadas no seu navegador, e o DPI é gravado em cada arquivo ali mesmo. Imagens muito grandes podem ser processadas no nosso servidor e são apagadas na hora; nada fica guardado.",
};

export default content;
