import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/imagem-para-pdf.
 *
 * Head term "imagem para PDF" / "converter imagem para PDF" — PDFgear
 * /pt/imagem-para-pdf, PDF24 /pt/imagens-para-pdf; "JPG para PDF" is the
 * biggest variant (Adobe BR, Smallpdf, iLovePDF all own it) and is carried in
 * the copy, the FAQs and aliases.ts. The Brazilian submission cases (gov.br,
 * INSS, faculdades, processos seletivos) replace the English examples.
 *
 * Paper formats stay as they are (A4, Letter, Legal — conversion.md §5);
 * PAGE_SIZES, ORIENTATIONS, PER_IMAGE and FIT_LABELS are module scope, keys
 * maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "image-to-pdf",
  locale: "pt",
  name: "Imagem para PDF",
  tagline:
    "Junte imagens JPG, PNG e WEBP em um único PDF online — reordene as páginas e escolha tamanho, orientação, layout e margens. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter imagem para PDF online grátis — JPG e PNG em PDF | oMyImage",
  metaDescription:
    "Converta imagens em PDF online e grátis: junte fotos JPG, PNG e WEBP em um único PDF, na ordem certa, em A4 ou no tamanho da imagem. Sem marca d'água e sem cadastro.",

  intro:
    "Converter imagem para PDF é o que você precisa para mandar várias fotos ou digitalizações como um único documento. A ferramenta Imagem para PDF do oMyImage junta suas imagens JPG, PNG e WEBP em um só PDF. Reordene as páginas, ajuste cada página ao tamanho da imagem ou escolha A4, Letter, Legal, A3 ou A5, coloque até nove imagens por página e defina o encaixe, a margem e o fundo. Tudo é montado no seu navegador, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "Por que colocar imagens em um PDF",
      id: "why",
      body: [
        "Um PDF transforma uma pasta de arquivos soltos em um único documento, com ordem fixa e aparência previsível. Isso importa sempre que algo vai ser entregue, e não só compartilhado: inscrições em processos seletivos, pedidos no gov.br e no INSS, trabalhos da faculdade, reembolsos de despesas e documentos para advogados quase sempre são pedidos como um único PDF, e um ZIP cheio de JPGs muitas vezes é recusado na hora.",
        "Ele também resolve um problema de ordem. Imagens mandadas como anexos separados chegam na sequência que o programa de e-mail quiser, e os gerenciadores de arquivos colocam \"IMG_10\" antes de \"IMG_2\". Um PDF fixa a sequência para sempre, então quem recebe lê as páginas na ordem que você pretendia.",
        "Por fim, um PDF imprime de forma previsível. Tamanho da página, orientação e margens são decididos quando o documento é montado, e não negociados pela janela de impressão que a outra pessoa abrir.",
      ],
    },
    {
      heading: "Tamanho da página, orientação e encaixe",
      id: "layout",
      body: [
        "O A4 é o padrão no Brasil e em quase todo o mundo fora da América do Norte; o Letter é um pouco mais largo e mais curto e é o padrão dos Estados Unidos. Escolher o que a impressora de quem recebe espera evita a redução e os cortes que acontecem quando um documento Letter encontra uma bandeja A4.",
        "\"Ajustar à imagem\" faz cada página ter o tamanho da própria foto, o que é o certo para documentos lidos só na tela, coleções de fotos e qualquer coisa com orientações misturadas. Isso elimina as faixas brancas que aparecem quando uma foto larga fica centralizada em uma página alta. A orientação automática é o meio-termo: mantém um tamanho de folha padrão, mas vira cada página para combinar com a imagem, então as fotos na horizontal deixam de ficar com faixas.",
        "O modo de encaixe decide o que acontece quando a imagem e a página ainda não combinam. Conter mostra tudo e aceita as margens vazias; Cobrir preenche a folha de ponta a ponta e corta o que sobra, o que combina com páginas de foto sangradas; Esticar força um encaixe exato e deve ficar para imagens cujas proporções já são próximas, porque deforma visivelmente todo o resto.",
        "Colocar várias imagens por página transforma a mesma ferramenta em uma folha de contatos ou uma apostila. O modo 2 por página divide ao longo do lado maior da folha, enquanto 4, 6 e 9 montam uma grade na ordem de leitura — e a margem vira também o espaço entre as imagens, além da borda em volta delas.",
      ],
    },
    {
      heading: "Mantendo o arquivo em um tamanho razoável",
      id: "size",
      body: [
        "O PDF fica mais ou menos do tamanho das imagens que você coloca nele — elas entram como estão, sem nova compressão —, então um documento montado com vinte fotos de celular de 12 megapixels passa de dezenas de megabytes, normalmente bem acima do limite de anexo do sistema para onde você vai enviar.",
        "A solução vem antes. Redimensione as imagens para cerca de 1500 a 2000 pixels no lado maior, o que é mais do que suficiente para leitura na tela e impressão comum, e comprima antes de montar. Em fotos de documentos com texto, deixar em preto e branco antes costuma cortar o tamanho pela metade de novo, sem perder a legibilidade.",
      ],
    },
    {
      heading: "Tudo acontece no seu navegador",
      id: "privacy",
      body: [
        "O PDF é montado no seu próprio dispositivo com uma biblioteca de PDF em JavaScript, então as imagens nunca são enviadas. Vale saber disso considerando o que as pessoas mais convertem aqui — RG, CNH, comprovantes de residência, extratos, laudos médicos e contratos são exatamente o tipo de coisa que não deveria passar pelo servidor de outra pessoa.",
        "Uma consequência prática é que a ferramenta funciona offline depois que a página carrega, e que lotes muito grandes são limitados pela memória do seu dispositivo, e não por um limite de envio.",
      ],
    },
  ],

  howToTitle: "Como converter imagens em PDF",
  steps: [
    { title: "Envie", description: "Selecione suas imagens, ou arraste e solte na área de trabalho." },
    { title: "Organize e configure", description: "Reordene as páginas com as setas e escolha o tamanho da página, a orientação, quantas imagens por página, o encaixe, a margem e o fundo." },
    { title: "Crie o PDF", description: "Clique em Criar PDF para baixar um único documento, montado exatamente como você configurou." },
  ],

  features: [
    { icon: "reorder", title: "Reordene as páginas", description: "Coloque as imagens na ordem que quiser com controles simples de subir e descer antes de exportar." },
    { icon: "description", title: "Controle total da página", description: "Ajuste cada página à imagem, ou use A4, Letter, Legal, A3 ou A5 com orientação automática, retrato ou paisagem e a margem que você definir em pontos." },
    { icon: "grid_view", title: "Várias imagens por página", description: "Coloque 1, 2, 4, 6 ou 9 imagens por página e escolha se cada uma fica contida, recortada para preencher ou esticada." },
    { icon: "lock", title: "100% privado", description: "O PDF é montado inteiro no seu navegador — suas imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Posso juntar muitas imagens em um único PDF?", a: "Sim. Adicione quantas imagens quiser e coloque na ordem que preferir. Por padrão cada imagem vira uma página, ou você pode colocar 2, 4, 6 ou 9 por página." },
    { q: "Quais formatos de imagem são aceitos?", a: "JPG, PNG, WEBP, GIF e BMP. A transparência do PNG é mantida, então o fundo que você escolher para a página aparece por trás — inclusive nenhum fundo." },
    { q: "Posso escolher A4 ou Letter?", a: "Sim — A4, Letter, Legal, A3 e A5, cada um em retrato, paisagem ou automático (que ajusta a página ao formato da própria imagem). Ou escolha \"Ajustar à imagem\" para cada página ter o tamanho da foto." },
    { q: "O que fazem Conter, Cobrir e Esticar?", a: "Conter coloca a imagem inteira dentro da página, deixando espaço vazio onde os formatos não combinam. Cobrir preenche a página toda e corta o que sobra. Esticar deforma a imagem para preencher a página exatamente — só é útil quando as proporções já são parecidas." },
    { q: "Montar o PDF diminui a qualidade das imagens?", a: "Não. Arquivos JPG e PNG entram exatamente como estão, sem nova compressão, então as páginas guardam seus pixels originais. A única exceção é uma foto com rotação EXIF, que precisa ser salva de novo para aparecer na posição certa." },
    { q: "Minhas imagens são enviadas?", a: "Não. O PDF é montado no seu navegador, então suas imagens nunca saem do seu dispositivo." },
    { q: "É grátis?", a: "Totalmente grátis, sem marca d'água e sem cadastro." },
    { q: "Qual tamanho de página escolher?", a: "A4 para qualquer coisa que vá para impressão no Brasil, Letter para impressão nos Estados Unidos, e \"Ajustar à imagem\" quando o PDF só vai ser lido na tela. Ajustar à imagem evita as margens brancas que aparecem quando uma foto na horizontal fica em uma página em pé." },
    { q: "Posso controlar a ordem das páginas?", a: "Sim — as imagens entram na ordem em que aparecem na lista, e você pode reorganizar antes de montar. Isso importa principalmente quando o gerenciador de arquivos ordenou como texto e colocou \"pagina10\" antes de \"pagina2\"." },
    { q: "O PDF vai ficar muito maior do que as imagens?", a: "Só um pouco. As imagens entram praticamente como estão, então o PDF fica mais ou menos com a soma dos arquivos mais uma pequena estrutura. Se o resultado ficar grande demais, comprima ou redimensione as imagens antes — um PDF feito com fotos de 4000 pixels é enorme e desnecessário para leitura na tela." },
    { q: "Posso fazer um PDF com fotos de documentos tiradas no celular?", a: "Sim, e é um dos usos mais comuns — RG, CNH, comprovantes e contratos. Para o melhor resultado, fotografe cada página de frente e com luz uniforme, recorte o que está em volta antes e considere passar pela ferramenta Imagem em preto e branco — um documento com cara de digitalizado fica bem menor que uma foto colorida e muitas vezes mais legível." },
    { q: "O texto do PDF fica pesquisável?", a: "Não. As páginas são imagens, então o PDF tem fotos do texto, e não o texto em si. Se você precisa pesquisar ou copiar as palavras, passe as imagens pela ferramenta Converter imagem em texto antes — ela extrai o texto, que você pode colar em um documento." },
    { q: "Como transformar JPG em PDF?", a: "Envie os arquivos JPG aqui, coloque na ordem certa e clique em Criar PDF. Uma foto vira um PDF de uma página; várias fotos viram um único PDF com uma página para cada uma, ou várias por página se você escolher." },
  ],

  security:
    "Suas imagens continuam privadas. O PDF é montado inteiro no seu navegador — nada é enviado a um servidor. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "655" },

  ui: {
    // ImageToPdfTool.tsx + PagePreview.tsx
    "or drop JPG, PNG, WEBP or GIF images here": "ou solte imagens JPG, PNG, WEBP ou GIF aqui",
    "Created a PDF with 1 page.": "PDF criado com 1 página.",
    "Created a PDF with {n} pages.": "PDF criado com {n} páginas.",
    "Couldn't create the PDF.": "Não foi possível criar o PDF.",
    "{orientation} — {name}": "{orientation} — {name}", // i18n-same
    "Clear images": "Remover imagens",
    "PDF settings": "Configurações do PDF",
    "PDF Settings": "Configurações do PDF",
    "Build": "Criar",
    "Building PDF…": "Criando o PDF…",
    "1 page": "1 página",
    "{n} pages": "{n} páginas",
    "Use the arrows to reorder.": "Use as setas para reordenar.",
    // The separator between the page count and the line above. Portuguese ends
    // a sentence the same way English does, so this is deliberately identical
    // to the key — stated rather than left to the fallback, so `i18n:keys pt`
    // stops reporting it as missing. Hindi maps it to "। " (hi/common.ts).  (i18n-charset-ok: quotes another locale on purpose)
    ". |sentence-end": ". ", // i18n-same
    "Create PDF": "Criar PDF",
    "That's {size} of images. They're embedded without recompression, so the PDF will be about that big — likely too large to email.":
      "São {size} de imagens. Elas entram sem nova compressão, então o PDF vai ficar mais ou menos desse tamanho — provavelmente grande demais para e-mail.",
    "Compress these first": "Comprimir antes",
    "Page size": "Tamanho da página",
    "Orientation": "Orientação",
    "Each page already takes its image's shape.": "Cada página já segue o formato da sua imagem.",
    "Set each image's orientation on its card — the first image on a page decides that page.":
      "Defina a orientação de cada imagem no cartão dela — a primeira imagem de uma página decide a orientação da página.",
    "Set each image's orientation on its card.": "Defina a orientação de cada imagem no cartão dela.",
    "Images per page": "Imagens por página",
    "Multi-up pages are laid out on A4.": "Páginas com várias imagens são montadas em A4.",
    "Fit": "Encaixe",
    "Contain keeps the whole image (may add margins). Cover fills the area (may crop). Stretch distorts to fill exactly.":
      "Conter mantém a imagem inteira (pode sobrar margem). Cobrir preenche a área (pode cortar). Esticar deforma para preencher exatamente.",
    "Margin": "Margem",
    "Space around images (and between them on multi-up pages).": "Espaço em volta das imagens (e entre elas nas páginas com várias).",
    "Page background": "Fundo da página",
    "Preview": "Pré-visualização",
    "Previous page": "Página anterior",
    "Next page": "Próxima página",
    // PAGE_SIZES / ORIENTATIONS / PER_IMAGE / FIT_LABELS (module scope, §4.2)
    "Fit to image": "Ajustar à imagem",
    // Orientation is feminine ("a orientação"); common.ts has the masculine
    // "Automático" for the background picker. The scope wins on this page.
    "Auto": "Automática",
    "Auto (match image)": "Automática (igual à imagem)",
    "Portrait": "Retrato",
    "Landscape": "Paisagem",
    "Custom (per image)": "Personalizada (por imagem)",
    "Contain": "Conter",
    "Cover": "Cobrir",
    "Stretch": "Esticar",
  },
};

export default content;
