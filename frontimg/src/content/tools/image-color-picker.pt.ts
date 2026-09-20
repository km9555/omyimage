import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/seletor-de-cores.
 *
 * Head term "seletor de cores" / "pegar cor de imagem" — Canva pt-BR and Adobe
 * Color BR title on "seletor de cores"; "conta-gotas", "extrair paleta de
 * cores", "descobrir a cor de uma imagem" and "código hexadecimal da cor" live
 * in aliases.ts. Brazilians write "cor" and "paleta"; the notation names (HEX,
 * RGB, HSL) travel untranslated.
 */
const content: ToolPageContent = {
  toolId: "image-color-picker",
  locale: "pt",
  name: "Seletor de cores e extrator de paleta",
  tagline:
    "Pegue qualquer cor de uma imagem online e extraia a paleta completa no mesmo lugar — veja os valores HEX, RGB e HSL com uma lupa, copie com um toque ou baixe a paleta como uma folha de amostras. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Seletor de cores de imagem online grátis — HEX, RGB e paleta | oMyImage",
  metaDescription:
    "Pegue a cor exata de qualquer imagem online e grátis: veja HEX, RGB e HSL com lupa e extraia a paleta de cores dominantes. Tudo no navegador, sem enviar a foto.",

  intro:
    "Um seletor de cores pega a cor exata de qualquer imagem em segundos — e transforma a foto inteira numa paleta pronta para usar. O seletor de cores do oMyImage deixa você passar o mouse com uma lupa e clicar para amostrar qualquer pixel, e depois copiar o valor em HEX, RGB ou HSL. Ao mesmo tempo, ele extrai as cores dominantes da imagem e mostra quanto da figura cada uma ocupa, então dá para copiar a paleta inteira ou baixar uma folha de amostras com os códigos. Perfeito para acertar as cores de uma marca, montar moodboards e trabalhar em design de web ou de produto. Tudo roda no seu navegador, então sua imagem continua privada.",

  sections: [
    {
      heading: "Amostrar uma cor e ler o valor",
      id: "sampling",
      body: [
        "Pegar uma cor lê o valor de um único pixel e informa esse valor nas notações que cada ferramenta espera. HEX para CSS e programas de design, RGB para código, e HSL quando você quer montar uma família de tons relacionados mexendo em um componente por vez.",
        "O HSL merece ser mais usado do que é. Como ele separa matiz de saturação e luminosidade, criar uma versão mais clara da cor de uma marca é mexer em um número só, enquanto fazer o mesmo em HEX significa chutar três. Para gerar estados de hover, variações desativadas e tons a partir de uma cor base, é um modelo bem mais fácil.",
        "Um cuidado prático: fotos têm ruído, então o que parece uma área chapada não é. Amostrar dois pixels vizinhos no mesmo pedaço de céu vai dar dois valores levemente diferentes, e nenhum dos dois está errado.",
      ],
    },
    {
      heading: "Extrair uma paleta",
      id: "palette",
      body: [
        "Uma análise de cores dominantes olha a imagem inteira, e não um pixel, agrupa cores parecidas e informa as que cobrem mais área. Isso entrega a paleta que uma pessoa de fato percebe, que nem sempre é a que você escolheria no olho — uma cor pode parecer marcante ocupando muito pouco do quadro.",
        "Fotos são boas fontes de paleta porque a luz da cena já harmonizou as cores. Cores iluminadas pelo mesmo sol, ou pela mesma lâmpada, compartilham um subtom, e é esse subtom comum que faz uma paleta parecer coerente em vez de montada.",
        "A abordagem usual é pegar a cor dominante como base, um neutro claro da imagem para fundos e uma cor saturada para destaques. Três ou quatro bastam; uma paleta de oito costuma perder a identidade.",
      ],
    },
    {
      heading: "Harmonia de cor não é acessibilidade",
      id: "contrast",
      body: [
        "Este é o erro que vale evitar. Uma paleta tirada de uma foto é escolhida pelo jeito que as cores convivem, e isso não diz nada sobre um texto numa delas ser legível sobre a outra.",
        "As cores de tom médio são a armadilha: elas parecem sofisticadas e reprovam nos requisitos de contraste nos dois sentidos, por não serem nem claras o bastante para aguentar texto escuro nem escuras o bastante para aguentar texto claro. A WCAG pede 4,5:1 para texto normal e 3:1 para texto grande, e um azul-acinzentado bonito sobre um bege bonito pode ficar perto de 2:1.",
        "O padrão que funciona é usar a paleta amostrada em destaques, bordas, ilustrações e fundos, e manter o texto em tons que você conferiu de propósito. Harmonia e contraste são problemas separados e precisam ser resolvidos separadamente.",
      ],
    },
    {
      heading: "Usos comuns",
      id: "uses",
      body: [
        "Combinar um design com uma foto é o mais frequente — um site cuja cor de destaque vem da imagem principal parece pensado de um jeito que um azul qualquer não parece. Montar a paleta de uma marca a partir de um moodboard funciona igual.",
        "Além disso: recuperar a cor de um logotipo quando ninguém acha o manual da marca, igualar as cores de um gráfico à foto de um produto, amostrar a paleta de um concorrente a partir de um print e tirar cores de uma pintura ou de um tecido que já funcionam bem juntas.",
        "Tudo é amostrado de um canvas dentro do seu navegador, então a imagem nunca é enviada — o que importa quando a fonte é um trabalho de design ainda não lançado ou o material de um cliente.",
      ],
    },
  ],

  howToTitle: "Como pegar uma cor e extrair a paleta de uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma imagem, ou arraste e solte na área de trabalho." },
    { title: "Passe o mouse e clique", description: "Mova sobre a imagem para ver as cores com a lupa e clique em qualquer pixel para travar a cor." },
    { title: "Leia a paleta extraída", description: "As cores dominantes da imagem saem automaticamente — use o controle para ter de 2 a 16 delas." },
    { title: "Copie ou baixe", description: "Copie qualquer valor HEX, RGB ou HSL com um toque, copie a paleta inteira de uma vez, ou baixe tudo como uma folha de amostras em PNG." },
  ],

  features: [
    { icon: "colorize", title: "Precisão de um pixel", description: "Amostre a cor exata de qualquer pixel e leia na hora em HEX, RGB e HSL." },
    { icon: "search", title: "Lupa de aumento", description: "Uma lupa ampliada acompanha o cursor para você mirar exatamente o pixel que quer." },
    { icon: "palette", title: "Paleta completa", description: "Extrai de 2 a 16 cores dominantes com a participação de cada uma na imagem, e mantém pequenos destaques em vez de diluí-los na média." },
    { icon: "lock", title: "100% privado", description: "Tanto o seletor quanto a paleta rodam inteiramente no seu navegador com canvas HTML — sua imagem nunca é enviada." },
  ],

  faqs: [
    { q: "Em quais formatos de cor posso copiar?", a: "HEX, RGB e HSL. Clique em qualquer valor para copiar para a área de transferência." },
    { q: "Como as cores da paleta são escolhidas?", a: "A imagem é amostrada com fidelidade total de cor — sem desfoque e sem suavização — e depois agrupada em regiões de cor. A ferramenta gera mais candidatas do que precisa e fica com as que são ao mesmo tempo frequentes e visualmente distintas, então um destaque pequeno mas vibrante ganha a própria amostra em vez de virar média do fundo." },
    { q: "Quantas cores posso extrair?", a: "De 2 a 16, ajustáveis no controle. Cada amostra também mostra a participação da imagem mais próxima daquela cor." },
    { q: "Dá para exportar a paleta?", a: "Dá. Copie valores HEX/RGB individuais, copie a lista inteira de uma vez, ou baixe uma folha de amostras em PNG com os códigos." },
    { q: "Ele guarda um histórico de cores?", a: "Guarda. As cores que você pegou recentemente aparecem como amostras em que você pode clicar para copiar de novo." },
    { q: "Quais formatos de imagem funcionam?", a: "JPG, PNG, WEBP, GIF e BMP. Em imagens animadas, as cores vêm do primeiro quadro." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro, e a imagem é processada localmente no seu navegador — nada é enviado." },
    { q: "Qual a diferença entre HEX, RGB e HSL?", a: "São três jeitos de descrever a mesma cor. O HEX é a forma compacta de seis dígitos usada em CSS e em programas de design. O RGB dá os três valores de canal direto, que é o que código e APIs de canvas esperam. O HSL separa a cor em matiz, saturação e luminosidade, o que é muito mais fácil de raciocinar quando você monta variações de um tom." },
    { q: "Por que a cor que peguei aparece diferente no meu programa de design?", a: "Normalmente é diferença de perfil de cor. Uma imagem marcada com um perfil de gama ampla, como o Display P3, é convertida para exibição, então o valor que você amostra pode ser diferente do que outro programa informa. Fotos também têm ruído, então dois pixels vizinhos numa cor aparentemente chapada quase nunca são idênticos." },
    { q: "Como montar uma paleta a partir de uma foto?", a: "Pegue a cor dominante como base e depois escolha dois ou três tons de apoio em áreas diferentes da imagem — um claro para fundos e um saturado para destaques. Fotos são uma fonte confiável porque a luz natural já harmoniza as cores de uma cena." },
    { q: "Essas cores vão ser acessíveis?", a: "Não automaticamente. Uma paleta amostrada de uma foto é escolhida por harmonia, não por contraste, e tons médios tirados de uma imagem reprovam com frequência nos requisitos de contraste como texto. Confira cada par de texto e fundo pela WCAG antes de usar — 4,5:1 para texto normal e 3:1 para texto grande." },
    { q: "Dá para extrair as cores de uma marca a partir de um print?", a: "Dá, e é um uso comum. Tire um print do site ou do logotipo e amostre dali. Só lembre que um print passou pela renderização da tela e pela compressão da imagem, então o resultado fica muito próximo, mas não exato — bom para combinar, não para uma especificação oficial de marca." },
  ],

  security:
    "Sua imagem continua privada. A amostragem de cor e a extração da paleta acontecem inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.9", count: "401" },

  ui: {
    // ColorPickerTool.tsx
    "Please select an image file.": "Selecione um arquivo de imagem.",
    "This image is fully transparent — there are no colors to extract.":
      "Esta imagem é totalmente transparente — não há cores para extrair.",
    "Couldn't read that image.": "Não foi possível ler essa imagem.",
    "Copied {value}": "{value} copiado",
    "Copy failed.": "Não foi possível copiar.",
    "or drop a JPG, PNG, WEBP or GIF here": "ou solte um JPG, PNG, WEBP ou GIF aqui",
    "Copy {value}": "Copiar {value}",
    "Clear image": "Limpar imagem",
    "Palette options": "Opções da paleta",
    "Copy all": "Copiar tudo",
    "Pick {value}": "Escolher {value}",
    "Click anywhere on": "Clique em qualquer ponto de",
    "to pick a color.": "para pegar uma cor.",
    "Colors": "Cores",
    "Picked color": "Cor escolhida",
    "Click the image — or any palette swatch below — to sample a color.":
      "Clique na imagem — ou em qualquer amostra da paleta abaixo — para pegar uma cor.",
    "Recent": "Recentes",
    "Palette": "Paleta",
    "Number of palette colors": "Número de cores da paleta",
    "This image only has 1 visually distinct color — showing it rather than repeating near-identical shades.":
      "Esta imagem tem só 1 cor visualmente distinta — mostrando ela em vez de repetir tons quase idênticos.",
    "This image only has {n} visually distinct colors — showing all of them rather than repeating near-identical shades.":
      "Esta imagem tem só {n} cores visualmente distintas — mostrando todas em vez de repetir tons quase idênticos.",
    "{share} of pixels are closest to this color": "{share} dos pixels estão mais próximos desta cor",
    "Download palette (PNG)": "Baixar paleta (PNG)",
    "Tip:": "Dica:",
    "hover to preview with the magnifier and click to lock a color, or tap a palette swatch to load it. Copy buttons put the value straight on your clipboard, and everything runs in your browser.":
      "passe o mouse para ver com a lupa e clique para travar uma cor, ou toque numa amostra da paleta para carregá-la. Os botões de copiar mandam o valor direto para a área de transferência, e tudo roda no seu navegador.",
  },
};

export default content;
