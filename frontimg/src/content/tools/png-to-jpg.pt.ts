import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/png-para-jpg.
 *
 * Head term "PNG para JPG" / "converter PNG para JPG" — iLoveIMG
 * /pt/converter-para-jpg/png-para-jpg, Adobe Express BR ("transformar imagem
 * PNG para JPG"), Smallpdf /pt, Convertio. "PNG em JPG" and "transformar PNG
 * em JPG" live in aliases.ts.
 *
 * The drop hint comes from the English page file and is translated inside
 * ConvertTool with this module's ui in scope — hence the key below.
 */
const content: ToolPageContent = {
  toolId: "png-to-jpg",
  locale: "pt",
  name: "PNG para JPG",
  tagline:
    "Converta imagens PNG em JPG online — em lote, com controle de qualidade e da cor de fundo. Grátis, rápido e privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter PNG para JPG online grátis — em lote | oMyImage",
  metaDescription:
    "Converta PNG para JPG online e grátis: arquivos bem menores, qualidade ajustável e fundo automático para áreas transparentes. Em lote, no navegador e sem cadastro.",

  intro:
    "Converter PNG para JPG é o jeito mais simples de deixar fotos muito mais leves. O PNG é ótimo para gráficos, mas em fotos ele gera arquivos enormes. O conversor de PNG para JPG do oMyImage transforma seus PNGs em JPGs compactos e de alta qualidade direto no seu navegador — um de cada vez ou em lote. Escolha a qualidade e a cor que vai substituir a transparência, e baixe. Sem envio, sem espera e sem cadastro.",

  sections: [
    {
      heading: "Quando converter PNG para JPG é a escolha certa",
      id: "why",
      body: [
        "O PNG é sem perdas, que é exatamente o que você quer em um arquivo de trabalho e muitas vezes um desperdício em um arquivo final. Uma fotografia salva em PNG guarda cada pixel por inteiro, e isso costuma significar vários megabytes onde um JPG visualmente idêntico teria algumas centenas de kilobytes. Se a imagem é uma fotografia e vai para uma página da web, um e-mail ou um formulário com limite de tamanho, converter costuma ser a maior economia disponível.",
        "O outro motivo comum é um limite rígido. Portais de vagas, formulários do governo, anúncios em marketplace e gráficas muitas vezes limitam o envio a 1, 2 ou 5 MB, e um print de celular ou uma foto salva em PNG passa disso na hora. Converter para JPG com qualidade de 85% normalmente resolve sem nenhuma diferença visível.",
      ],
    },
    {
      heading: "O que você perde",
      id: "tradeoffs",
      body: [
        "Duas coisas, e as duas importam em casos específicos. A primeira é a transparência: o JPG não tem canal alfa, então tudo o que é transparente precisa ser pintado com uma cor sólida. Isso não é problema em uma fotografia e é fatal para um logotipo feito para ficar sobre um fundo colorido.",
        "A segunda é que o JPG é um formato com perdas, e para sempre. A conversão descarta detalhes, e nenhuma etapa posterior os recupera. Converter um PNG que você talvez precise editar de novo é uma porta de mão única — recorte, retoque e salve algumas vezes em JPG e a degradação se acumula de forma visível. Guarde o PNG como original e trate o JPG como um arquivo de saída.",
      ],
    },
    {
      heading: "Fotografias sim, gráficos geralmente não",
      id: "content",
      body: [
        "A compressão do JPG foi pensada para imagens de tom contínuo, em que a cor muda aos poucos pelo quadro. Fotografias são exatamente isso, e é por isso que o formato se sai tão bem nelas.",
        "Conteúdo com bordas nítidas é o caso oposto. Logotipos, desenhos, diagramas, prints de tela e qualquer coisa com texto têm contornos de alto contraste, e o JPG espalha pequenos defeitos em volta de cada um — aquele ruído característico em volta das letras. Pior: como o codificador trata essas bordas como detalhe importante, o arquivo muitas vezes nem fica muito menor. Para esse tipo de imagem, comprimir o PNG ou converter para WEBP dá um resultado melhor nas duas frentes.",
      ],
    },
    {
      heading: "Escolhendo a cor de fundo",
      id: "background",
      body: [
        "Como a transparência precisa virar alguma coisa, esta ferramenta usa por padrão a cor encontrada nas próprias bordas da imagem, o que evita o retângulo branco óbvio em volta de um assunto que nunca foi feito para ficar sobre branco. Você ainda pode escolher branco, preto ou qualquer cor personalizada — útil quando a imagem vai ficar sobre uma interface escura ou um cartão colorido.",
        "Um cuidado: a transparência do PNG costuma ter suavização, ou seja, os pixels da borda são parcialmente transparentes. Eles se misturam com a cor que você escolher, então uma imagem preparada para fundo branco e preenchida com preto pode mostrar um contorno claro. Se isso acontecer, a solução mais limpa é exportar de novo a imagem original sobre o fundo certo, em vez de brigar com ela aqui.",
      ],
    },
  ],

  howToTitle: "Como converter PNG para JPG",
  steps: [
    { title: "Envie os PNGs", description: "Selecione uma ou várias imagens PNG, ou arraste e solte na área de trabalho." },
    { title: "Defina qualidade e fundo", description: "Escolha a qualidade do JPG e a cor que vai preencher as áreas transparentes." },
    { title: "Converta e baixe", description: "Clique em Converter — um PNG é baixado como JPG; vários chegam juntos em um ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "PNG → JPG em lote", description: "Converta vários PNGs para JPG de uma vez e baixe tudo em um único ZIP — ideal para diminuir pastas de prints." },
    { icon: "compress", title: "Arquivos menores", description: "Em fotos, o JPG é bem menor do que o PNG. Ajuste a qualidade para chegar ao tamanho que você precisa." },
    { icon: "lock", title: "Privado e instantâneo", description: "Tudo é processado no seu navegador — seus PNGs nunca saem do seu dispositivo." },
  ],

  faqs: [
    { q: "Por que converter PNG para JPG?", a: "Arquivos JPG são muito menores em imagens fotográficas, o que deixa o envio, o e-mail e o carregamento na web bem mais rápidos." },
    { q: "O que acontece com as áreas transparentes do PNG?", a: "O JPG não guarda transparência, então os pixels transparentes são preenchidos com uma cor de fundo. Por padrão usamos automaticamente a cor das bordas da própria imagem; escolha branco, preto ou qualquer outra cor se quiser algo diferente." },
    { q: "Posso converter vários PNGs de uma vez?", a: "Sim. Adicione quantos PNGs quiser — vários arquivos são baixados juntos em um ZIP." },
    { q: "Converter diminui a qualidade?", a: "O JPG é um formato com perdas, mas com qualidade de 90% ou mais a diferença costuma ser invisível e o arquivo fica muito menor." },
    { q: "Quanto menor o JPG vai ficar?", a: "Em fotografias, normalmente de 60% a 90% menor. Uma foto PNG de 4 MB costuma virar um JPG entre 300 KB e 1 MB. Gráficos chapados e prints ganham bem menos e às vezes até aumentam — são os casos em que o PNG já era o formato certo." },
    { q: "Devo converter prints de tela de PNG para JPG?", a: "Normalmente não. A compressão do JPG funciona mal em bordas nítidas e letras pequenas, criando um halo em volta do texto, e os prints costumam ficar mais borrados e nem um pouco menores. Comprima o PNG ou converta para WEBP." },
    { q: "Posso voltar de JPG para PNG depois?", a: "Dá para trocar o formato, mas não dá para recuperar o que foi descartado. A etapa em JPG remove detalhes para sempre, e voltar para PNG só guarda a imagem já degradada sem perdas. Guarde o PNG original se for editar de novo." },
    { q: "Por que meu JPG ficou maior do que o PNG?", a: "Porque a imagem é do tipo que o PNG trata melhor — poucas cores, áreas chapadas, bordas duras. O PNG comprime isso com muita eficiência, enquanto o JPG precisa guardar os detalhes que ele enxerga em cada borda. Logotipos e diagramas são os culpados de sempre." },
    { q: "Funciona no celular?", a: "Sim. O conversor funciona no navegador do celular, no Android e no iPhone — você escolhe as imagens na galeria e o JPG vai para a pasta de downloads." },
  ],

  security:
    "Suas imagens continuam privadas. A conversão de PNG para JPG acontece inteira no seu navegador com canvas HTML — nada é enviado. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "688" },

  ui: {
    // Drop hint from app/png-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG images here": "ou solte imagens PNG aqui",
  },
};

export default content;
