import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/desfocar-imagem.
 *
 * Head term "desfocar imagem" / "desfocar foto" — Fotor /pt, Canva pt-BR and
 * Adobe Express BR title on it; "borrar imagem", "deixar foto desfocada" and
 * "efeito desfoque" live in aliases.ts. iLoveIMG's pt page is "desfocar
 * imagem" too, so the slug matches the market head term exactly.
 *
 * The cross-link to /pt/desfocar-rosto matters here: that page is the one for
 * anonymising people, and Brazilians land on this one looking for both.
 */
const content: ToolPageContent = {
  toolId: "blur-image",
  locale: "pt",
  name: "Desfocar imagem",
  tagline:
    "Desfoque uma imagem online com desfoque gaussiano ajustável, prévia ao vivo e conversão em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Desfocar imagem online grátis — deixar foto desfocada | oMyImage",
  metaDescription:
    "Desfoque imagens online e grátis: aplique desfoque gaussiano na foto inteira ou só nas áreas que você marcar, com prévia ao vivo. Tudo no navegador, sem enviar nada.",

  intro:
    "Desfocar uma imagem serve para suavizar um fundo, esconder algo que não deve aparecer ou criar um efeito de vidro fosco. A ferramenta Desfocar imagem do oMyImage aplica um desfoque gaussiano suave nas suas fotos direto no navegador, com um controle para escolher exatamente a intensidade e prévia ao vivo. Desfoque a imagem inteira ou só as áreas que você marcar, uma foto ou um lote inteiro, e baixe na hora — nada é enviado, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "Como funciona o desfoque gaussiano",
      id: "how",
      body: [
        "Cada pixel da saída é trocado por uma média ponderada dos pixels ao redor, em que os vizinhos próximos pesam mais que os distantes. Essa ponderação segue uma curva em sino — daí o nome —, e é ela que faz o resultado parecer naturalmente suave, em vez de borrado numa direção só.",
        "O raio controla até onde essa média alcança. Um raio pequeno mistura só os vizinhos imediatos e tira a dureza da imagem; um raio grande puxa pixels de longe e dissolve tudo em manchas de cor. A relação não é linear — dobrar o raio faz bem mais do que dobrar o efeito visual.",
        "Como a operação troca os valores dos pixels em vez de cobri-los, ela é destrutiva por natureza. Isso é uma desvantagem quando você está só suavizando uma foto por estética, e é exatamente o ponto quando você está escondendo alguma coisa.",
      ],
    },
    {
      heading: "Desfoque como censura",
      id: "redaction",
      body: [
        "Desenhar uma tarja preta sobre o número de uma conta bancária num editor parece censura, mas, se o arquivo guarda camadas, a tarja pode ser arrastada — e, mesmo achatada, ela anuncia que algo foi escondido. O desfoque remove a informação em vez de escondê-la: depois de exportar, os caracteres não têm como ser recuperados, porque não estão mais representados nos pixels.",
        "A regra prática é avaliar o resultado com zoom total, e não na prévia. Um desfoque que parece convincente no tamanho de uma miniatura pode deixar o texto perfeitamente legível quando alguém abre a imagem de verdade. Se você ainda consegue ler o que estava escrito, qualquer pessoa também consegue.",
        "Para censurar uma área específica em vez da foto inteira, a ferramenta Desfocar rosto deixa você marcar regiões — inclusive com detecção automática de rostos e de texto — e manter todo o resto nítido, que costuma ser o que você quer quando só um pedaço do print é sensível.",
      ],
    },
    {
      heading: "Fundos para texto",
      id: "backgrounds",
      body: [
        "Texto por cima de uma foto costuma ser difícil de ler, porque a imagem embaixo tem bordas e contraste brigando com as letras. Desfocar o fundo é a solução padrão — a foto continua dando cor, clima e contexto, mas nada nela disputa com a tipografia.",
        "É por isso que imagem desfocada aparece atrás de tantas chamadas, telas de login, seções de destaque e slides de abertura. O desfoque precisa ser mais forte do que o instinto sugere: se sobrar qualquer borda reconhecível, ela vai acabar atrás de uma letra e atrapalhar a leitura.",
        "Desfocar também reduz o tamanho do arquivo, um efeito colateral útil para uma imagem de fundo de largura total que, sem isso, seria uma das coisas mais pesadas da página.",
      ],
    },
    {
      heading: "Imitando pouca profundidade de campo",
      id: "depth",
      body: [
        "Uma câmera com abertura grande joga o fundo para fora de foco e faz o assunto se destacar. Os celulares imitam isso com o modo retrato, e dá para chegar perto depois, desfocando a imagem e colocando o assunto nítido por cima.",
        "A ressalva honesta é que um desfoque uniforme não é o que uma lente faz. O desfoque óptico real aumenta com a distância, então uma foto com pouca profundidade de campo fica progressivamente mais suave em direção ao fundo da cena, enquanto um desfoque uniforme é igualmente suave em tudo. Mantenha o efeito leve e ele convence; force a mão e fica com cara do que é.",
      ],
    },
  ],

  howToTitle: "Como desfocar uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Escolha a intensidade", description: "Arraste o controle de desfoque e veja a prévia ao vivo mudar na hora." },
    { title: "Aplique e baixe", description: "Clique em Desfocar e baixar — uma imagem vem direto, várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "lens_blur", title: "Imagem inteira ou por área", description: "Suavize a foto toda, ou marque áreas para desfocar — ou inverta e desfoque tudo menos elas, mantendo o assunto nítido." },
    { icon: "gradient", title: "Desfoque, pixelização ou cor sólida", description: "Vá de um desfoque leve de 1px até um gaussiano pesado de 50px, troque para pixelização em blocos ou tampe as áreas por completo." },
    { icon: "burst_mode", title: "Desfoque em lote", description: "Aplique o mesmo desfoque a um lote inteiro de imagens JPG, PNG ou WEBP e baixe tudo em um ZIP." },
    { icon: "lock", title: "100% privado", description: "Tudo roda no seu navegador com canvas HTML — suas imagens nunca são enviadas a um servidor." },
  ],

  faqs: [
    { q: "É um desfoque gaussiano?", a: "Sim — a ferramenta usa o filtro de desfoque gaussiano nativo do navegador, para um resultado suave e de qualidade em qualquer intensidade." },
    { q: "Posso desfocar só uma parte da imagem?", a: "Sim. Mude para Por área e arraste sobre as partes que quer desfocar. Ative a inversão para fazer o contrário — desfocar tudo menos essas áreas, que é como se suaviza um fundo mantendo o assunto nítido." },
    { q: "Dá para desfocar várias imagens de uma vez?", a: "Sim. Adicione quantas quiser — uma imagem é baixada direto e várias chegam juntas em um ZIP." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e todas as imagens são processadas localmente no seu navegador." },
    { q: "Para que desfocar serve na prática?", a: "Basicamente para três coisas: esconder um detalhe sensível, como um endereço ou o número de uma conta; criar um fundo suave para que o texto por cima continue legível; e imitar pouca profundidade de campo, para o assunto se destacar de um fundo bagunçado." },
    { q: "Qual deve ser a intensidade do desfoque?", a: "Para um fundo atrás de texto, forte o bastante para que nenhuma borda da imagem dispute com as letras — normalmente bem alto. Para efeito de profundidade, bem mais leve, ou fica artificial. Para esconder informação, forte o bastante para você não conseguir ler com zoom total." },
    { q: "O detalhe desfocado pode ser recuperado?", a: "Na prática, não, depois que a imagem é exportada. O desfoque tira a média dos pixels e descarta o que estava ali, diferente de uma tarja colorida, que apenas cobre. É por isso que o desfoque é a ferramenta certa para censurar e um retângulo desenhado não é." },
    { q: "Qual a diferença para a ferramenta Desfocar rosto?", a: "Esta aqui trabalha na imagem como um todo, ou em áreas que você mesmo desenha. A Desfocar rosto acrescenta detecção automática de rostos e de texto e censura em lote, então é a melhor escolha quando o objetivo é anonimizar pessoas em vez de criar um efeito visual." },
    { q: "Desfocar muda o tamanho do arquivo?", a: "Em geral diminui, às vezes bastante. A compressão funciona codificando diferenças entre pixels vizinhos, e o desfoque remove justamente essas diferenças, então sobra muito menos detalhe para guardar." },
    { q: "Desfocar resolve uma foto granulada?", a: "Ele esconde o ruído suavizando tudo, mas leva junto o detalhe real, então o resultado fica mole em vez de limpo. Um desfoque leve pode ajudar uma foto muito granulada; mais do que isso e você trocou um problema por outro." },
    { q: "Dá para desfocar o fundo de uma foto e deixar a pessoa nítida?", a: "Dá. Use o modo Por área, marque a pessoa e ative a inversão: o desfoque vai para tudo menos o que você marcou. Se quiser separar a pessoa do fundo de verdade, a ferramenta Remover fundo faz esse recorte." },
  ],

  security:
    "Suas imagens continuam privadas. O desfoque acontece inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "276" },

  ui: {
    // BlurImageTool.tsx — module-scope FORMATS and STYLES
    "Same as original": "Igual ao original",
    "Blur|effect": "Desfoque",
    "Blur": "Desfocar",
    "Pixelate": "Pixelizar",
    "Solid": "Cor sólida",
    // BlurImageTool.tsx
    "Couldn't read that image.": "Não foi possível ler essa imagem.",
    "Draw at least one area, or switch to Whole image.":
      "Desenhe pelo menos uma área, ou volte para Imagem inteira.",
    "Blurred 1 image.": "1 imagem desfocada.",
    "Blurred {n} images.": "{n} imagens desfocadas.",
    "Blur failed.": "Não foi possível desfocar.",
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "done": "pronto",
    "Live preview of": "Prévia ao vivo de",
    "— applied to all {n} images.": "— aplicado a todas as {n} imagens.",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Arraste para desenhar uma área, clique numa para selecionar, arraste as alças para redimensionar e aperte Delete para excluir.",
    "1 area.": "1 área.",
    "{n} areas.": "{n} áreas.",
    "Clear images": "Limpar imagens",
    "Files": "Arquivos",
    "Blur settings": "Configurações de desfoque",
    "Blur Settings": "Configurações de desfoque",
    "Blurring…": "Desfocando…",
    "Blur {n} images": "Desfocar {n} imagens",
    "Blur & download": "Desfocar e baixar",
    "What to blur": "O que desfocar",
    "Whole image softens everything. Selective blurs only the areas you draw — or everything except them, with Invert on.":
      "Imagem inteira suaviza tudo. Por área desfoca só o que você desenhar — ou tudo menos isso, com a inversão ligada.",
    "Whole image": "Imagem inteira",
    "Selective": "Por área",
    "Blur everything": "Desfocar tudo",
    "except": "menos",
    "these areas": "estas áreas",
    "New area shape": "Formato da nova área",
    "Ellipse": "Elipse",
    "Rectangle": "Retângulo",
    "Clear areas": "Limpar áreas",
    "Effect": "Efeito",
    "Blur strength": "Intensidade do desfoque",
    "Pixel size": "Tamanho do bloco",
    "Output format": "Formato de saída",
    "Fill colour": "Cor de preenchimento",
    "JPG background": "Fundo do JPG",
  },
};

export default content;
