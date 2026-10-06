import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/svg-para-png. */
const content: ToolPageContent = {
  toolId: "svg-to-png",
  locale: "pt",
  name: "SVG para PNG",
  tagline:
    "Converta SVG em PNG online em 1×, 2×, 4× ou na largura que quiser — nítido em qualquer tamanho, transparente ou com fundo. Grátis, em lote e sem sair do navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "SVG para PNG Online Grátis — Qualquer Tamanho, Nítido | oMyImage",
  metaDescription:
    "Converta SVG em PNG online e grátis em 1×, 2×, 4× ou qualquer largura — nítido em todo tamanho, com fundo transparente ou colorido. Em lote, sem enviar nada.",

  intro:
    "O SVG é perfeito até você precisar colocá-lo num lugar que só aceita imagens comuns: uma postagem em rede social, um slide, um e-mail, a página de um aplicativo, um marketplace. O conversor de SVG para PNG do oMyImage desenha seus arquivos vetoriais como PNG exatamente no tamanho escolhido — desenhados de novo nessa resolução, então um ícone de 24 pixels exportado em 4× fica tão nítido quanto um criado com 96 pixels. Mantenha o fundo transparente ou ponha branco ou qualquer cor, e converta uma pasta inteira de ícones de uma vez.",

  sections: [
    {
      heading: "Por que converter SVG em PNG",
      id: "why",
      body: [
        "O SVG descreve formas, não pixels, e é por isso que ele escala para qualquer tamanho e os navegadores o adoram. Muitos outros lugares, não. Redes sociais recusam SVG, vários aplicativos de mensagem e de e-mail o mostram como anexo em vez de imagem, versões antigas de programas de escritório o inserem mal, e marketplaces, lojas de aplicativos e serviços de impressão sob demanda pedem PNG ou JPG.",
        "O PNG é o par natural do SVG porque não tem perdas e guarda transparência: logotipos, ícones e ilustrações saem com bordas limpas e fundo transparente, exatamente como aparecem no navegador.",
      ],
    },
    {
      heading: "Nítido em qualquer tamanho",
      id: "sharp",
      body: [
        "Muitos conversores desenham o SVG no tamanho padrão e depois esticam o bitmap, o que dá bordas moles e borradas em 2× e piores em 4×. Esta ferramenta define o tamanho final no próprio SVG antes de desenhá-lo, então o navegador rasteriza os vetores direto na resolução de saída. Curvas, linhas finas e texto pequeno ficam tão nítidos quanto o formato permite, em qualquer tamanho.",
        "Isso também significa que não há perda de qualidade ao aumentar: um logotipo exportado com 4000 pixels de largura é um desenho de 4000 pixels de verdade, bom para impressão e telas grandes. A saída tem limite de 8192 pixels no lado maior, ponto em que os navegadores de muitos aparelhos deixam de desenhar com segurança.",
      ],
    },
    {
      heading: "Escolhendo o tamanho",
      id: "sizes",
      body: [
        "Os botões de tamanho multiplicam o tamanho escrito no SVG. 1× dá o tamanho definido por quem desenhou; 2× é a escolha padrão para telas de alta resolução de celulares e notebooks, em que uma imagem precisa do dobro de pixels para ficar nítida; 4× serve para telas grandes e impressão. Os arquivos recebem @2x ou @4x no nome, para os tamanhos não se misturarem.",
        "Escolha Largura para definir uma largura exata em pixels, por exemplo 512 para o ícone de um aplicativo ou 1200 para uma imagem de rede social. A altura acompanha as proporções do próprio SVG. Num lote, todos os arquivos recebem essa largura.",
      ],
    },
    {
      heading: "Fundo transparente, branco ou colorido",
      id: "background",
      body: [
        "Por padrão o PNG mantém a transparência do SVG, mostrada sobre um xadrez na prévia. Escolha Branco quando a imagem for para um lugar que mostra a transparência como preto — alguns aplicativos de mensagem e programas de escritório antigos fazem isso — ou Cor sólida para colocá-la sobre a cor da sua marca num post ou num slide.",
      ],
    },
    {
      heading: "O que aparece e o que não aparece",
      id: "what-renders",
      body: [
        "O SVG é convertido com o próprio renderizador do navegador, no modo seguro de imagem. Formas, degradês, máscaras, filtros e imagens incorporadas aparecem como numa página web. O que precisaria de internet ou de código, não: scripts nunca rodam, e imagens, fontes ou folhas de estilo ligadas a outros sites não são carregadas.",
        "O ponto de atenção é o texto. Se o SVG usa uma fonte da web ligada, e não incorporada, o texto cai para uma fonte do sistema. Para manter a tipografia exata, converta o texto em contornos no seu programa de design antes de exportar o SVG, ou incorpore a fonte no arquivo.",
      ],
    },
    {
      heading: "SVG sem tamanho",
      id: "no-size",
      body: [
        "Alguns SVG — muitas vezes ícones exportados de programas de design ou copiados de bibliotecas de ícones — definem só um viewBox, ou nenhum tamanho. Quando há viewBox, as medidas dele viram o tamanho 1×. Quando não há nada, vale o padrão do navegador, 300 × 150 pixels, e a ferramenta avisa; escolha Largura para definir o tamanho que você realmente quer.",
      ],
    },
  ],

  howToTitle: "Como converter SVG em PNG",
  steps: [
    { title: "Adicione os SVG", description: "Selecione um ou vários arquivos SVG, ou arraste e solte." },
    { title: "Escolha tamanho e fundo", description: "Escolha 1×, 2×, 4× ou uma largura exata, e fundo transparente, branco ou colorido." },
    { title: "Baixe", description: "Um PNG é baixado direto; vários vêm juntos num ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Nítido em qualquer tamanho", description: "Os vetores são desenhados na resolução de saída, nunca esticados de uma imagem menor." },
    { icon: "opacity", title: "Transparência mantida", description: "O PNG mantém o fundo transparente do SVG, ou recebe branco ou qualquer cor." },
    { icon: "burst_mode", title: "Conversão em lote", description: "Converta uma pasta de ícones ou logotipos de uma vez e baixe um único ZIP." },
  ],

  faqs: [
    { q: "Como converter SVG em PNG?", a: "Adicione os arquivos SVG, escolha tamanho e fundo e clique em Baixar PNG. Vários arquivos vêm juntos num ZIP." },
    { q: "Como tirar um PNG de alta resolução de um SVG?", a: "Escolha 2× ou 4×, ou defina uma largura exata de até 8192 pixels. Os vetores são desenhados nessa resolução, então o PNG fica nítido, não esticado." },
    { q: "O PNG fica com fundo transparente?", a: "Fica, por padrão. Você também pode escolher branco ou qualquer cor como fundo." },
    { q: "Por que o texto ficou diferente no PNG?", a: "O SVG provavelmente usa uma fonte da web que não está incorporada no arquivo, então entra uma fonte do sistema. Converta o texto em contornos, ou incorpore a fonte, antes de exportar o SVG." },
    { q: "Por que meu PNG ficou com 300 × 150 pixels?", a: "O SVG não define tamanho nem viewBox, então vale o padrão do navegador. Escolha Largura e digite o tamanho que precisa." },
    { q: "Posso converter vários SVG de uma vez?", a: "Pode. Adicione quantos quiser; cada um é convertido com as mesmas configurações e todos vêm num único ZIP." },
    { q: "É seguro converter um SVG baixado da internet?", a: "É. O SVG é desenhado no modo de imagem do navegador, em que scripts nunca rodam e nada é buscado em outros sites." },
    { q: "Meus arquivos são enviados?", a: "Não. O SVG é lido e convertido inteiramente no seu navegador, e o PNG é criado no seu aparelho." },
    { q: "Qual o maior PNG que consigo fazer?", a: "Até 8192 pixels no lado maior. Acima disso, os navegadores de muitos aparelhos não conseguem desenhar a imagem com segurança." },
    { q: "Dá para converter SVG em JPG?", a: "Converta aqui para PNG com fundo branco e depois use o conversor de PNG para JPG, se precisar de um JPG." },
  ],

  security:
    "Seus arquivos SVG são lidos e convertidos em PNG inteiramente no seu navegador. Nada é enviado, scripts dentro do SVG nunca rodam e nenhum recurso externo é buscado.",

  ui: {
    // SvgToPngTool.tsx
    "Select SVG files": "Selecionar arquivos SVG",
    "or drop SVG files here": "ou solte arquivos SVG aqui",
    "Please select SVG files.": "Selecione arquivos SVG.",
    "{name} is not a valid SVG.": "{name} não é um SVG válido.",
    "Download PNG": "Baixar PNG",
    "Download PNGs (ZIP)": "Baixar PNGs (ZIP)",
    "Clear images": "Limpar imagens",
    "PNG settings": "Configurações do PNG",
    "Preview": "Prévia",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "Preview shows the first of {n} files": "A prévia mostra o primeiro de {n} arquivos",
    "Last download: {size}": "Último download: {size}",
    "Change files": "Trocar arquivos",
    "This SVG sets no size, so it is treated as 300 × 150 px — the browser default. Use a width to choose the output size.":
      "Este SVG não define tamanho, então é tratado como 300 × 150 px — o padrão do navegador. Use uma largura para escolher o tamanho de saída.",
    "Your SVG files are converted in your browser and never uploaded.": "Seus arquivos SVG são convertidos no navegador e nunca são enviados.",
    "Size": "Tamanho",
    "Width": "Largura",
    "Width (px)": "Largura (px)",
    "Multiplies the size set in the SVG. 2× is sharp on high-resolution screens.":
      "Multiplica o tamanho definido no SVG. 2× fica nítido em telas de alta resolução.",
    "Background colour": "Cor de fundo",
  },
};

export default content;
