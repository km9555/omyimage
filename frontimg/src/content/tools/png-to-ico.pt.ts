import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/png-para-ico. */
const content: ToolPageContent = {
  toolId: "png-to-ico",
  locale: "pt",
  name: "PNG para ICO",
  tagline:
    "Converta PNG, JPG ou SVG em arquivo ICO online — um favicon.ico com 16, 32 e 48 px, ou um ícone do Windows com todos os tamanhos até 256 px. Grátis e privado, no navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "PNG para ICO Online Grátis — Gerador de Favicon | oMyImage",
  metaDescription:
    "Converta PNG, JPG ou SVG em ICO online e grátis — favicon.ico com 16, 32 e 48 px ou ícone do Windows até 256 px. Feito no navegador, sem enviar nada.",

  intro:
    "Um arquivo ICO não é uma imagem, e sim um pequeno conjunto delas: o mesmo ícone em vários tamanhos, para que uma aba do navegador, a barra de tarefas e a área de trabalho escolham cada uma o que serve. O conversor de PNG para ICO do oMyImage monta esse conjunto a partir de uma única imagem. Comece de um PNG, JPG, WEBP ou SVG, escolha os tamanhos — favicon ou ícone completo do Windows — e veja cada tamanho na prévia, em pixels reais, antes de baixar um único arquivo .ico.",

  sections: [
    {
      heading: "O que existe dentro de um ICO",
      id: "what-ico",
      body: [
        "ICO é o formato de ícone do Windows, e ele é um contêiner: um arquivo guarda várias imagens quadradas, normalmente de 16 × 16 até 256 × 256 pixels. O Windows escolhe o tamanho mais próximo para cada lugar onde o ícone aparece — uma lista de arquivos, a barra de tarefas, a área de trabalho —, e os navegadores fazem o mesmo com a aba e os favoritos. Por isso um PNG redimensionado e renomeado para .ico não é um ícone de verdade.",
        "Os arquivos feitos aqui guardam os tamanhos abaixo de 256 como bitmaps de 32 bits com transparência completa, a forma que toda versão do Windows em uso e todo navegador leem, e o tamanho de 256 pixels como PNG comprimido, do jeito que os ícones do próprio Windows fazem. O resultado abre em qualquer programa que entenda ícones.",
      ],
    },
    {
      heading: "Criando um favicon.ico",
      id: "favicon",
      body: [
        "Para um site, escolha a predefinição Favicon: 16, 32 e 48 pixels. 16 é o tamanho clássico da aba do navegador, 32 é usado em telas de alta resolução e na barra de tarefas quando o site é fixado, e 48 cobre atalhos do Windows e as visualizações maiores de favoritos e blocos de sites. Juntos, eles dão a todo lugar comum um tamanho que não precisa ser esticado.",
        "Dê ao arquivo o nome favicon.ico e coloque-o na pasta raiz do site, para que ele responda em /favicon.ico. Os navegadores pedem esse endereço sozinhos, mesmo em páginas que não declaram ícone. Sites modernos costumam acrescentar ícones PNG e SVG com tags link, mas o .ico na raiz continua sendo o primeiro que todo navegador e muitas ferramentas procuram.",
      ],
    },
    {
      heading: "Ícones para pastas e atalhos do Windows",
      id: "windows",
      body: [
        "Para um atalho na área de trabalho, uma pasta ou um programa, escolha a predefinição Ícone do Windows, que inclui todos os tamanhos de 16 a 256 pixels. O Windows usa os tamanhos grandes nos ícones da área de trabalho e nas visualizações grandes do Explorador, e os pequenos nas listas e na barra de tarefas; se falta um tamanho, ele estica o mais próximo e o ícone fica borrado.",
        "Para usar o ícone, clique com o botão direito num atalho, abra Propriedades e escolha Alterar Ícone; numa pasta, abra Propriedades, depois Personalizar e Alterar Ícone, e selecione o seu arquivo .ico. Guarde o .ico num lugar de onde ele não será movido nem apagado, porque o Windows lê o ícone desse local.",
      ],
    },
    {
      heading: "Desenhando para 16 pixels",
      id: "small",
      body: [
        "Em 16 × 16 pixels cabe uma forma e talvez uma letra, não um logotipo cheio de detalhes. Formas fortes, bom contraste e uma silhueta simples sobrevivem; linhas finas, texto pequeno e degradês sutis viram um borrão cinza. A prévia mostra cada tamanho no tamanho real em pixels, para você avaliar com honestidade a versão de 16 pixels antes de baixar.",
        "Para os tamanhos pequenos saírem mais limpos, a imagem é reduzida em etapas, pela metade a cada vez e com suavização de alta qualidade, em vez de encolher num salto só, que costuma apagar detalhes finos de forma imprevisível. Se o ícone de 16 pixels ainda parecer carregado, use como origem uma versão simplificada do logotipo — só a inicial ou o símbolo.",
      ],
    },
    {
      heading: "Ícones quadrados a partir de qualquer imagem",
      id: "square",
      body: [
        "Ícones são quadrados. Se a sua imagem não é, escolha Encaixar imagem inteira para manter tudo e preencher as laterais com transparência, ou Cortar em quadrado para aparar o lado maior a partir do centro. O fundo transparente é mantido por padrão; marque a opção de fundo branco se o ícone for aparecer num lugar que transforma transparência em preto.",
        "A melhor origem é um PNG quadrado com fundo transparente, de 256 pixels ou mais. Um JPG também funciona, mas ele não tem transparência, então o fundo vira parte do ícone. Um SVG é o ideal: ele é desenhado primeiro em alta resolução, então todo tamanho fica nítido.",
      ],
    },
  ],

  howToTitle: "Como converter PNG em ICO",
  steps: [
    { title: "Adicione uma imagem", description: "Selecione um PNG, JPG, WEBP ou SVG — quadrado e com fundo transparente é o melhor." },
    { title: "Escolha os tamanhos", description: "Escolha Favicon (16, 32, 48) ou Ícone do Windows (16 a 256), ou marque os tamanhos exatos." },
    { title: "Baixe o ICO", description: "Confira cada tamanho na prévia e baixe um único arquivo .ico." },
  ],

  features: [
    { icon: "apps", title: "Todos os tamanhos num arquivo", description: "16, 24, 32, 48, 64, 128 e 256 pixels, reunidos num único .ico." },
    { icon: "opacity", title: "Transparência mantida", description: "Os ícones mantêm o fundo transparente completo, com bordas suaves." },
    { icon: "lock", title: "Sem envio", description: "O ícone é montado no navegador; a sua imagem não sai do aparelho." },
  ],

  faqs: [
    { q: "Como converter PNG em ICO?", a: "Adicione a imagem, escolha a predefinição Favicon ou Ícone do Windows, confira a prévia e clique em Baixar ICO." },
    { q: "Quais tamanhos um favicon.ico deve ter?", a: "16, 32 e 48 pixels — a predefinição Favicon. Eles cobrem abas do navegador, telas de alta resolução e atalhos do Windows." },
    { q: "Quais tamanhos um ícone do Windows precisa?", a: "Até 256 pixels. A predefinição Ícone do Windows inclui 16, 24, 32, 48, 64, 128 e 256, então o Windows nunca precisa esticar um tamanho." },
    { q: "Dá para converter JPG ou SVG em ICO?", a: "Dá. PNG, JPG, WEBP, GIF, BMP e SVG funcionam. O JPG não tem transparência, então o fundo fica; o SVG dá os resultados mais nítidos." },
    { q: "O fundo transparente é mantido?", a: "É. A transparência é mantida em todos os tamanhos, a não ser que você escolha fundo branco." },
    { q: "Minha imagem não é quadrada — o que acontece?", a: "Escolha Encaixar imagem inteira para manter tudo com laterais transparentes, ou Cortar em quadrado para aparar o lado maior." },
    { q: "Onde coloco o favicon.ico?", a: "Na pasta raiz do site, para que ele abra em seusite.com/favicon.ico. Os navegadores procuram lá automaticamente." },
    { q: "Como trocar o ícone de uma pasta no Windows?", a: "Clique com o botão direito na pasta, abra Propriedades, depois Personalizar e Alterar Ícone, e escolha o seu arquivo .ico." },
    { q: "Por que meu ícone de 16 pixels fica borrado?", a: "Só existem 256 pixels para trabalhar. Use uma origem mais simples — só o símbolo ou a inicial —, com formas fortes e bom contraste." },
    { q: "Minha imagem é enviada?", a: "Não. O arquivo ICO é criado inteiramente no seu navegador." },
  ],

  security:
    "Sua imagem é redimensionada e reunida num arquivo ICO inteiramente no seu navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // PngToIcoTool.tsx
    "or drop a PNG, JPG, WEBP or SVG image here": "ou solte aqui uma imagem PNG, JPG, WEBP ou SVG",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "Icon settings": "Configurações do ícone",
    "Download ICO": "Baixar ICO",
    "Saving…": "Salvando…",
    "Shown at actual size": "Mostrado no tamanho real",
    "Last download: {size}": "Último download: {size}",
    "Your image is smaller than the largest icon size, so that size is enlarged and will look soft.":
      "Sua imagem é menor que o maior tamanho de ícone, então esse tamanho é ampliado e vai ficar menos nítido.",
    "Your image is converted in your browser and never uploaded.": "Sua imagem é convertida no navegador e nunca é enviada.",
    "Icon sizes": "Tamanhos do ícone",
    "Favicon": "Favicon", // i18n-same
    "Windows icon": "Ícone do Windows",
    "Sizes in pixels. A favicon needs 16, 32 and 48; Windows uses up to 256.":
      "Tamanhos em pixels. Um favicon precisa de 16, 32 e 48; o Windows usa até 256.",
    "Shape": "Formato",
    "Fit whole image": "Encaixar imagem inteira",
    "Crop to square": "Cortar em quadrado",
    "Icons are square. Fit keeps everything and fills the sides; crop trims the longer side.":
      "Ícones são quadrados. Encaixar mantém tudo e preenche as laterais; cortar apara o lado maior.",
    "White background instead of transparent": "Fundo branco em vez de transparente",
  },
};

export default content;
