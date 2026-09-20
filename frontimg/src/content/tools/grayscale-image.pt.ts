import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/imagem-preto-e-branco.
 *
 * Head term "foto em preto e branco" / "deixar imagem preto e branco" — how
 * Brazilians type it; "escala de cinza" is the technical term and appears in
 * the body and in aliases.ts, never in the H1. iLoveIMG has no pt page for
 * this; Fotor /pt and Adobe Express BR both title on "preto e branco".
 */
const content: ToolPageContent = {
  toolId: "grayscale-image",
  locale: "pt",
  name: "Imagem em preto e branco",
  tagline:
    "Deixe suas imagens em preto e branco online — com intensidade ajustável, prévia ao vivo e conversão em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Deixar foto em preto e branco online grátis | oMyImage",
  metaDescription:
    "Deixe fotos em preto e branco online e grátis: ajuste a intensidade, veja a prévia ao vivo e converta um lote inteiro. JPG, PNG e WEBP, tudo no seu navegador.",

  intro:
    "Deixar uma imagem em preto e branco dá à foto um ar clássico e atemporal. A ferramenta Imagem em preto e branco do oMyImage tira a cor de qualquer foto direto no seu navegador, com um controle de intensidade que vai de um desbotado sutil até a conversão total em escala de cinza. Converta uma imagem ou um lote inteiro e baixe na hora — nada é enviado, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "O que a conversão faz de verdade",
      id: "how",
      body: [
        "Uma imagem colorida guarda três números por pixel — vermelho, verde e azul. A escala de cinza guarda um: o brilho. A conversão precisa decidir quanto cada canal de cor contribui para esse valor único, e a resposta não é uma divisão igual, porque a visão humana não é igualmente sensível às três cores.",
        "Nós enxergamos o verde como muito mais claro que o azul na mesma intensidade, então a ponderação padrão pesa bastante no verde, médio no vermelho e pouco no azul. Tirar a média simples dos três canais é a abordagem ingênua e produz resultados visivelmente embarrados — céus claros demais, folhagem escura demais.",
        "A consequência que vale saber é que duas cores bem diferentes podem virar o mesmo cinza. O brilho é uma dimensão onde a cor eram três, então há perda real de informação, e não apenas uma cor guardada de lado.",
      ],
    },
    {
      heading: "Quando o preto e branco é a foto melhor",
      id: "aesthetics",
      body: [
        "Tirar a cor tira uma distração. O que sobra é composição, contraste, textura e luz — e é por isso que o retrato e a fotografia documental nunca abandonaram o monocromático. Um fundo bagunçado, cheio de cores brigando entre si, muitas vezes fica calmo em preto e branco, e um rosto ganha estrutura quando o tom de pele para de dominar.",
        "Também salva fotos com cor ruim. Luz misturada — a luz do dia entrando pela janela e a lâmpada amarela no teto — cria dominantes de cor difíceis de corrigir e que saltam aos olhos. Em preto e branco o problema simplesmente não existe.",
        "As imagens que sofrem são aquelas em que a cor carregava o sentido: um pôr do sol, um produto cujo diferencial é vir na cor verde-água, um gráfico colorido por categoria. Se a cor é o assunto, converter joga o assunto fora.",
      ],
    },
    {
      heading: "Documentos, digitalizações e tamanho de arquivo",
      id: "documents",
      body: [
        "Fotografar um documento com o celular produz uma imagem colorida daquilo que é, no fundo, texto preto em papel branco — três canais gastos registrando algo que precisava de um. Converter para preto e branco costuma reduzir o arquivo à metade, às vezes mais, sem nenhuma perda de legibilidade.",
        "E ainda arruma o resultado. Fotos de papel tiradas com o celular pegam a dominante de cor da luz que estiver no ambiente, então a página sai meio amarelada, azulada ou esverdeada conforme a lâmpada. O preto e branco remove isso por completo e faz um conjunto de páginas fotografadas em dias diferentes parecer uniforme.",
        "Isso combina bem com montar um PDF: converta para preto e branco primeiro e depois junte tudo num documento — o resultado fica com uma fração do tamanho da versão colorida, o que muitas vezes é a diferença entre caber ou não no limite de envio de um portal.",
      ],
    },
    {
      heading: "Impressão e acessibilidade",
      id: "print",
      body: [
        "Converter de propósito, em vez de deixar o driver da impressora fazer isso, coloca você no controle de como os tons são mapeados. E evita um aborrecimento prático: muitas impressoras de escritório cobram tarifa de colorido em qualquer página que tenha cor, então um único logotipo colorido transforma o documento inteiro num trabalho colorido.",
        "Tem também o lado da acessibilidade. Ver o seu trabalho em preto e branco é o teste mais rápido para saber se ele depende só da cor para transmitir informação. Se um gráfico fica ilegível, ou um campo obrigatório de formulário deixa de se distinguir, é exatamente isso que uma pessoa daltônica enxerga — e a correção é acrescentar um rótulo, uma textura ou um símbolo, e não trocar as cores.",
      ],
    },
  ],

  howToTitle: "Como deixar uma imagem em preto e branco",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Ajuste a intensidade", description: "Use o controle para um preto e branco total ou um desbotado parcial, com prévia ao vivo." },
    { title: "Converta e baixe", description: "Clique em Converter e baixar — uma imagem vem direto, várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "filter_b_and_w", title: "Intensidade ajustável", description: "Vá para o preto e branco total ou tire só parte da cor, com um controle de 0 a 100% e prévia na hora." },
    { icon: "burst_mode", title: "Conversão em lote", description: "Aplique o mesmo preto e branco a um lote inteiro de imagens JPG, PNG ou WEBP e baixe tudo em um ZIP." },
    { icon: "lock", title: "100% privado", description: "Tudo roda no seu navegador com canvas HTML — suas imagens nunca são enviadas a um servidor." },
  ],

  faqs: [
    { q: "O que o controle de intensidade faz?", a: "Em 100% a imagem fica totalmente em preto e branco; valores menores misturam as cores originais com o cinza, para um efeito desbotado e parcialmente sem cor." },
    { q: "Posso converter várias imagens de uma vez?", a: "Sim. Adicione quantas quiser — uma imagem é baixada direto e várias chegam juntas em um ZIP." },
    { q: "Quais formatos funcionam?", a: "JPG, PNG e WEBP, e você escolhe o formato de saída independentemente do de entrada." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e todas as imagens são processadas localmente no seu navegador." },
    { q: "O preto e branco deixa o arquivo menor?", a: "Em geral sim, e às vezes muito. Tirar a informação de cor deixa menos coisa para o codificador guardar — o PNG em especial pode cair pela metade ou mais. Para documentos fotografados e digitalizações, é uma das reduções de tamanho mais fáceis que existem." },
    { q: "Preto e branco é a mesma coisa que escala de cinza?", a: "Não exatamente, embora os termos sejam usados como sinônimos. A escala de cinza mantém 256 tons do preto ao branco. O preto e branco de verdade é um bit por pixel — preto puro ou branco puro, sem nada no meio —, que é o que um aparelho de fax produz, e o resultado é bem diferente." },
    { q: "Dá para recuperar a cor depois?", a: "Não. A conversão descarta os canais de cor de forma permanente, então guarde o original se achar que vai precisar. Esta ferramenta trabalha numa cópia e nunca altera o arquivo do seu disco, mas a imagem em preto e branco exportada é um caminho sem volta." },
    { q: "Por que algumas cores viram o mesmo tom de cinza?", a: "Porque a escala de cinza mede brilho, e não matiz. Um vermelho saturado e um verde saturado podem ter brilho percebido quase idêntico, então os dois viram quase o mesmo cinza. É por isso que um gráfico colorido pode ficar ilegível em preto e branco — as categorias eram distinguidas só pela cor." },
    { q: "Ajuda na impressão?", a: "Muitas vezes. Converter por conta própria significa que você decide como os tons são mapeados, em vez de deixar isso para o driver da impressora. E evita pagar tarifa de impressão colorida num documento que tem um único logotipo colorido na primeira página." },
    { q: "Posso converter um lote inteiro?", a: "Sim. Adicione quantas imagens quiser; todas são convertidas e voltam em um único ZIP — o caso mais comum é um conjunto de páginas digitalizadas ou uma galeria que precisa ficar uniforme." },
    { q: "Serve para foto 3x4 ou documento digitalizado?", a: "Serve, e é um uso comum. Muitos formulários e concursos pedem a digitalização em preto e branco, e converter aqui deixa o arquivo menor e as páginas uniformes. Se ainda houver limite de tamanho, passe depois pela ferramenta Comprimir imagem." },
  ],

  security:
    "Suas imagens continuam privadas. A conversão para preto e branco acontece inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "318" },

  ui: {
    // GrayscaleTool.tsx — module-scope FORMATS
    "Same as original": "Igual ao original",
    // GrayscaleTool.tsx
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "Converted 1 image to grayscale.": "1 imagem convertida para preto e branco.",
    "Converted {n} images to grayscale.": "{n} imagens convertidas para preto e branco.",
    "Grayscale failed.": "Não foi possível converter para preto e branco.",
    "done": "pronto",
    "Grayscale settings": "Preto e branco",
    "Grayscale Settings": "Preto e branco",
    "Grayscale & download": "Converter e baixar",
    "Grayscale {n} images": "Converter {n} imagens",
    "Live preview of": "Prévia ao vivo de",
    "— applied to all {n} images.": "— aplicado a todas as {n} imagens.",
    "Intensity": "Intensidade",
    "100% = fully black & white. Lower values desaturate partially.":
      "100% = totalmente preto e branco. Valores menores tiram só parte da cor.",
    "Output format": "Formato de saída",
    "JPG background": "Fundo do JPG",
  },
};

export default content;
