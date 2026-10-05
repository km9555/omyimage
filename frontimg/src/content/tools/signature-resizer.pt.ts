import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/redimensionar-assinatura (new tool, 2026-10-05).
 * Brazil uses a scanned signature for registrations, contracts sent by email
 * and forms that ask for "assinatura digitalizada"; the tool and copy are the
 * same engine as /signature-resizer.
 */
const content: ToolPageContent = {
  toolId: "signature-resizer",
  locale: "pt",
  name: "Redimensionar assinatura",
  tagline:
    "Transforme a foto da sua assinatura num arquivo pronto para formulários: fundo branco, traço firme, bordas recortadas, o tamanho exato em pixels ou centímetros e um arquivo dentro da faixa de KB que você precisa. Grátis e privado, no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Redimensionar Assinatura Online — Fundo Branco e Tamanho em KB | oMyImage",
  metaDescription:
    "Redimensione a sua assinatura online grátis: fundo branco, bordas recortadas, tamanho em pixels ou cm e arquivo na faixa de KB pedida. No navegador, sem envio.",

  intro:
    "Formulários online são exigentes com a assinatura digitalizada: tinta escura em papel branco, um tamanho definido e um arquivo dentro de um limite de KB. Uma foto tirada com o celular falha em tudo — papel acinzentado, sombra num canto, pixels demais e um arquivo cem vezes maior do que o permitido. Esta ferramenta resolve tudo de uma vez: deixa o papel branco e a tinta escura, corta o espaço vazio, encaixa a assinatura no tamanho escolhido e salva um JPG dentro da faixa de KB — sem a sua assinatura sair do seu aparelho.",

  sections: [
    {
      heading: "O que os formulários pedem",
      id: "requirements",
      body: [
        "Cada formulário tem a sua regra. Alguns dão o tamanho em pixels, como 140 × 60; outros em centímetros, como 4 × 2 cm ou 6 × 2 cm; muitos só limitam o tamanho do arquivo, por exemplo entre 10 e 20 KB ou até 50 KB. Quase todos querem tinta escura em papel branco liso.",
        "Escolha o tamanho correspondente em Tamanho final — os tamanhos em centímetros são desenhados a 300 DPI e salvos com esse DPI, para imprimir no tamanho certo — e a faixa de KB que o formulário indica. Para um tamanho que não está na lista, escolha Tamanho personalizado e digite a largura e a altura em pixels.",
      ],
    },
    {
      heading: "Assinando e fotografando",
      id: "photographing",
      body: [
        "Assine três ou quatro vezes numa folha branca lisa, com caneta preta ou azul-escura, e escolha a melhor. Caneta esferográfica serve; uma caneta gel ou hidrográfica dá um traço mais escuro e uniforme, que resiste melhor à compressão.",
        "Fotografe a folha com luz do dia, bem de cima, com o celular paralelo ao papel para a assinatura não ficar esticada. Deixe a assinatura ocupar boa parte da foto — a ferramenta corta o resto — e evite que a sua própria sombra caia sobre o papel. Uma digitalização em scanner funciona igualmente bem.",
      ],
    },
    {
      heading: "Como o fundo é limpo",
      id: "cleaning",
      body: [
        "O papel numa foto nunca é branco de verdade, e raramente tem o mesmo tom de um lado ao outro. Em vez de um único corte para a imagem inteira, a ferramenta estima o brilho do papel em volta de cada ponto e compara cada pixel com a sua própria vizinhança. O papel fica branco puro, o traço fica firme, e uma sombra num canto desaparece em vez de virar uma mancha cinza.",
        "A intensidade da limpeza decide quanto cinza claro conta como papel. Aumente se sobrarem pontinhos ou uma sombra fraca; diminua se as pontas finas do traço começarem a falhar. A cor da tinta pode ser preta, azul-escura ou a cor original da sua caneta.",
      ],
    },
    {
      heading: "Tamanhos e limites de arquivo",
      id: "limits",
      body: [
        "A assinatura é ajustada para caber no tamanho escolhido, sem esticar, e centralizada sobre branco. Com um máximo, a qualidade do JPG fica a mais alta que o limite permite. Com um mínimo — a parte \"pelo menos 10 KB\" de uma faixa — uma assinatura pequena e limpa muitas vezes é simples demais para chegar ao número sozinha, então a qualidade é levada ao topo primeiro.",
        "Se um tamanho pequeno, como 140 × 60 pixels, ainda ficar abaixo do mínimo na qualidade máxima, o arquivo é completado com um bloco de dados vazio até atingi-lo. A assinatura não muda nem um pixel, e a página avisa quando isso acontece.",
        "As duas pontas da faixa são lidas do jeito seguro: \"pelo menos 10 KB\" vira pelo menos 10.240 bytes e \"até 20 KB\" vira no máximo 20.000, então o arquivo passa quer o formulário conte o kilobyte como 1.000, quer como 1.024 bytes.",
      ],
    },
  ],

  howToTitle: "Como redimensionar a assinatura para um formulário online",
  steps: [
    { title: "Adicione a foto da assinatura", description: "Uma foto ou digitalização da sua assinatura em papel branco — JPG, PNG ou WEBP." },
    { title: "Escolha o tamanho e a faixa de KB", description: "Escolha 140 × 60 px, um tamanho em centímetros ou o seu, e a faixa de tamanho que o formulário pede." },
    { title: "Baixe o JPG", description: "Confira a prévia e baixe uma assinatura limpa, pronta para enviar." },
  ],

  features: [
    { icon: "draw", title: "Fundo branco limpo", description: "Sombras e papel acinzentado somem, e a tinta fica firme — em preto, azul ou a cor original." },
    { icon: "crop", title: "Tamanho exato", description: "140 × 60 px, 4 × 2 cm, 6 × 2 cm ou qualquer tamanho, com o espaço vazio cortado antes." },
    { icon: "lock", title: "Nunca é enviada", description: "A sua assinatura é processada no navegador e fica no seu aparelho." },
  ],

  faqs: [
    { q: "Como deixar a assinatura entre 10 e 20 KB?", a: "Adicione a foto da assinatura e escolha a faixa De 10 KB a 20 KB em Tamanho do arquivo, com o tamanho em pixels que o formulário pede. O JPG baixado fica dentro da faixa." },
    { q: "Qual o tamanho certo de assinatura para formulários online?", a: "O que o formulário informar. Tamanhos em pixels como 140 × 60 e em centímetros como 4 × 2 cm são comuns; confira as instruções e escolha os mesmos valores aqui." },
    { q: "Como deixar o fundo da assinatura branco?", a: "Mantenha Limpar o fundo ligado. O papel fica branco puro e a tinta firme, mesmo que a foto tenha sido tirada com luz irregular." },
    { q: "Posso manter a assinatura em azul?", a: "Pode. Escolha Azul para um azul-escuro uniforme ou Original para a cor da sua caneta. Escolha Preta se o formulário pedir tinta preta." },
    { q: "Por que a assinatura ficou falhada depois da limpeza?", a: "A limpeza está forte demais para um traço fino ou claro. Diminua a intensidade da limpeza ou assine de novo com uma caneta mais escura." },
    { q: "Por que o meu arquivo foi completado?", a: "Uma assinatura pequena e limpa pode ser mais simples do que o mínimo do formulário permite. Depois de levar a qualidade ao máximo, a ferramenta acrescenta dados vazios até o mínimo; a imagem não muda." },
    { q: "Posso usar uma assinatura escaneada?", a: "Pode. Uma digitalização é ideal — luz uniforme e folha plana. Adicione o arquivo e a ferramenta recorta e redimensiona do mesmo jeito." },
    { q: "A minha assinatura é enviada para algum lugar?", a: "Não. Limpeza, redimensionamento e gravação acontecem no seu navegador; a assinatura nunca sai do seu aparelho." },
  ],

  security:
    "A sua assinatura é limpa, redimensionada e salva inteiramente no seu navegador. Ela nunca é enviada, guardada ou vista por mais ninguém.",

  ui: {
    // SignatureResizerTool.tsx
    "Select a signature": "Selecionar assinatura",
    "or drop a photo or scan of your signature here": "ou solte aqui uma foto ou digitalização da sua assinatura",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "Signature settings": "Configurações da assinatura",
    "Preview": "Prévia",
    "Output size": "Tamanho final",
    "Trimmed, original shape": "Recortada, formato original",
    "4 × 2 cm": "4 × 2 cm", // i18n-same
    "6 × 2 cm": "6 × 2 cm", // i18n-same
    "Custom size": "Tamanho personalizado",
    "Width (px)": "Largura (px)",
    "Height (px)": "Altura (px)",
    "File size": "Tamanho do arquivo",
    "No limit": "Sem limite",
    "Under {size}": "Até {size}",
    "{min} to {max}": "De {min} a {max}",
    "Minimum (KB)": "Mínimo (KB)",
    "Maximum (KB)": "Máximo (KB)",
    "KB": "KB",
    "Trim empty space": "Cortar espaço vazio",
    "Clean the background": "Limpar o fundo",
    "Makes the paper pure white and the ink solid, even in uneven light.": "Deixa o papel branco puro e a tinta firme, mesmo com luz irregular.",
    "Cleaning strength": "Intensidade da limpeza",
    "Ink colour": "Cor da tinta",
    "Black": "Preta",
    "Blue": "Azul",
    "Original": "Original", // i18n-same
    "Download signature": "Baixar assinatura",
    "Saving…": "Salvando…",
    "Output: {w} × {h} px": "Resultado: {w} × {h} px",
    "Last download: {size}": "Último download: {size}",
    "The file was padded to reach the minimum size; the picture itself is unchanged.": "O arquivo foi completado para atingir o tamanho mínimo; a imagem em si não mudou.",
    "No signature found — try a photo with darker ink on plain paper.": "Nenhuma assinatura encontrada — tente uma foto com tinta mais escura em papel liso.",
    "Your signature is processed in your browser and never uploaded.": "A sua assinatura é processada no navegador e nunca é enviada.",
    "Could not get under {size} — the smallest file is used.": "Não foi possível ficar abaixo de {size} — foi usado o menor arquivo possível.",
    "The maximum must be larger than the minimum.": "O máximo precisa ser maior que o mínimo.",
  },
};

export default content;
