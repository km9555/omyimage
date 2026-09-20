import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/gif-para-imagens.
 *
 * Head term "GIF para imagens" / "extrair frames de GIF" — ezgif's pt mirror,
 * Aspose and img2go pt title on "dividir GIF em quadros" / "extrair frames";
 * the slug follows the x-para-y pattern of the converter family, and "GIF
 * para PNG (quadros)", "separar GIF" and "extrair frames" live in aliases.ts.
 * Brazilian usage says "frame" as often as "quadro"; the copy uses "quadro"
 * and carries "frames" in the headings people search with.
 */
const content: ToolPageContent = {
  toolId: "gif-to-images",
  locale: "pt",
  name: "GIF para imagens",
  tagline:
    "Extraia todos os frames de um GIF animado online — baixe tudo num ZIP em PNG, JPG ou WEBP, ou pegue um quadro só. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "GIF para imagens online grátis — extrair frames de GIF | oMyImage",
  metaDescription:
    "Separe um GIF em imagens online e grátis: extraia todos os frames em PNG, JPG ou WEBP e baixe num ZIP, ou baixe um quadro só. Tudo no navegador, sem enviar o GIF.",

  intro:
    "Converter GIF para imagens é desmontar uma animação de volta em fotos separadas. A ferramenta GIF para imagens do oMyImage extrai todos os frames de um GIF direto no seu navegador — já compostos, para cada quadro ser uma imagem completa — e deixa você baixar todos num ZIP ou um de cada vez, em PNG, JPG ou WEBP. Nada é enviado, então seu GIF continua privado.",

  sections: [
    {
      heading: "O que você ganha ao extrair os frames",
      id: "why",
      body: [
        "Um GIF animado é uma pilha de imagens paradas com informação de tempo. Separar essa pilha dá cada imagem como um arquivo normal, que é o que você precisa sempre que a animação não é bem o que você quer.",
        "O caso mais comum é achar um quadro bom. Um GIF de reação tem um momento que você quer como imagem parada; uma gravação de tela tem o único estado da interface de que você precisa para a documentação; uma sequência em stop-motion tem o quadro que ficou melhor.",
        "O segundo é o conserto. Algo está errado num GIF que já existe — um quadro sobrando, uma marca d'água, uma cor errada — e não dá para corrigir enquanto ele continua sendo animação. Extraia, corrija os quadros em questão e monte de novo.",
      ],
    },
    {
      heading: "Como os frames de um GIF são guardados de verdade",
      id: "decoding",
      body: [
        "O GIF é mais econômico do que parece. Em vez de guardar cada quadro inteiro, ele registra só a região que mudou desde o anterior, junto com uma instrução sobre o que fazer com a área de baixo — manter, voltar ao fundo ou voltar ao que estava antes.",
        "É por isso que uma extração ingênua devolve pedaços: uma ferramenta que só lê cada bloco guardado recebe uma imagem parcial com buracos transparentes, e não a imagem que você vê quando o GIF toca. Decodificar direito significa compor cada quadro sobre o estado acumulado dos anteriores.",
        "É o que acontece aqui, então as imagens que você recebe são quadros completos, exatamente como aparecem durante a reprodução, na ordem e numerados corretamente.",
      ],
    },
    {
      heading: "Por que PNG é a saída certa",
      id: "format",
      body: [
        "Os quadros de um GIF já foram reduzidos a uma paleta de no máximo 256 cores. Essa redução está gravada e não tem volta, então o objetivo ao extrair é simplesmente não piorar nada.",
        "O PNG é sem perdas, ou seja, os quadros chegam exatamente como o decodificador produziu. Ele também lida direito com a transparência do GIF, então quadros com áreas transparentes continuam assim, em vez de ganhar um fundo branco.",
        "O JPG seria a escolha errada nos dois pontos — ele acrescentaria os próprios defeitos de compressão por cima do limite da paleta e não guarda transparência de jeito nenhum. Se precisar de arquivos menores depois, converta os PNGs extraídos de propósito, em vez de perder qualidade por padrão.",
      ],
    },
    {
      heading: "Extrair, editar e montar de novo",
      id: "workflow",
      body: [
        "Extrair e remontar é o jeito prático de modificar uma animação que você não criou. Separe os quadros aqui, faça a mudança que precisar — recortar, ajustar a cor, tirar os que não quer, desfocar algo sensível — e depois passe o resultado pelo Criar GIF.",
        "Uma coisa para preservar na volta: o tempo. Remontar com outra velocidade muda o caráter da animação, às vezes bastante. Se o que você quer é só reordenar, tirar ou retimar quadros, solte o GIF direto no Criar GIF: ele separa os quadros mantendo o intervalo original de cada um. E mantenha a numeração dos arquivos, já que a ordem em que são adicionados é a ordem em que vão tocar.",
        "Tudo roda no seu navegador nas duas pontas, então um GIF com algo que você prefere não enviar pode ser desmontado e montado de novo sem sair do seu computador.",
      ],
    },
  ],

  howToTitle: "Como extrair os frames de um GIF",
  steps: [
    { title: "Envie um GIF", description: "Selecione um GIF animado, ou arraste e solte na área de trabalho." },
    { title: "Veja os quadros", description: "Todos os quadros são extraídos e compostos — veja a prévia numa grade." },
    { title: "Baixe", description: "Salve todos os quadros num ZIP em PNG, JPG ou WEBP, ou clique em qualquer quadro para baixar só ele." },
  ],

  features: [
    { icon: "burst_mode", title: "Todos os quadros", description: "Separa um GIF animado em todos os seus quadros, já compostos para cada um ser uma imagem completa." },
    { icon: "folder_zip", title: "Download em ZIP", description: "Exporte todos os quadros de uma vez num ZIP numerado em PNG, JPG ou WEBP." },
    { icon: "lock", title: "100% privado", description: "Os quadros são extraídos inteiramente no seu navegador — seu GIF nunca é enviado a um servidor." },
  ],

  faqs: [
    { q: "Os quadros saem como imagens completas?", a: "Sim. Cada quadro é composto respeitando as regras de descarte do GIF, então os quadros parciais viram imagens inteiras." },
    { q: "Em que formatos posso exportar?", a: "PNG (com transparência), JPG (com uma cor de fundo) ou WEBP." },
    { q: "Posso baixar só um quadro?", a: "Sim. Clique em qualquer quadro da grade para baixar só ele, ou use o botão para baixar todos num ZIP." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro, e o GIF é processado localmente no seu navegador — nada é enviado." },
    { q: "Por que eu ia querer os quadros separados?", a: "Para escolher uma imagem boa de dentro da animação, editar um quadro específico e montar o GIF de novo, estudar um movimento quadro a quadro, tirar um quadro indesejado, ou simplesmente porque você precisava de uma imagem parada e só tinha o GIF." },
    { q: "Vou receber todos os quadros?", a: "Sim — o GIF é decodificado de verdade, e não amostrado, então você recebe cada quadro guardado, na ordem. Uma animação de três segundos a 10 quadros por segundo dá trinta imagens, numeradas para a sequência não se perder." },
    { q: "Qual formato de exportação devo escolher?", a: "PNG em quase todos os casos. Os quadros do GIF já estão limitados a 256 cores, e o PNG guarda tudo sem perdas, então nada piora — e ele mantém a transparência do GIF. O JPG acrescentaria defeitos de compressão ao limite da paleta e não guarda transparência." },
    { q: "Por que alguns quadros parecem incompletos ou transparentes?", a: "Porque o GIF guarda os quadros como diferenças em relação ao anterior — só os pixels que mudaram. O decodificador compõe tudo de volta em imagens completas, que é o que você recebe. Se já viu um quadro cru de GIF em outra ferramenta mostrando só um pedaço, o motivo é esse." },
    { q: "Posso montar um GIF de novo depois de editar os quadros?", a: "Sim. Extraia aqui, edite os quadros que quiser e passe tudo pelo Criar GIF para remontar a animação. Essa ida e volta é o jeito comum de consertar ou limpar uma animação que já existe." },
    { q: "Funciona com um GIF muito longo?", a: "Em geral, sim, mas um GIF com centenas de quadros gera centenas de arquivos e demora mais para decodificar e compactar. Tudo acontece no seu navegador, então o limite prático é a memória do seu aparelho, e não um limite de envio." },
    { q: "Dá para transformar um GIF em foto para usar como figurinha ou foto de perfil?", a: "Sim. Extraia os quadros, escolha o melhor e baixe só ele em PNG — a transparência continua, o que é útil para figurinhas. Depois é só recortar, se precisar, na ferramenta Recortar imagem." },
  ],

  security:
    "Seu GIF continua privado. A extração dos quadros acontece inteiramente no seu navegador com a biblioteca de código aberto gifuct-js — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "228" },

  ui: {
    // GifToImagesTool.tsx
    "Please select a GIF file.": "Selecione um arquivo GIF.",
    "No frames found in this GIF.": "Nenhum quadro encontrado neste GIF.",
    "Extracted 1 frame.": "1 quadro extraído.",
    "Extracted {n} frames.": "{n} quadros extraídos.",
    "Couldn't read that GIF.": "Não foi possível ler esse GIF.",
    "Downloaded 1 frame as a ZIP.": "1 quadro baixado em ZIP.",
    "Downloaded {n} frames as a ZIP.": "{n} quadros baixados em ZIP.",
    "Couldn't build the ZIP.": "Não foi possível montar o ZIP.",
    "Select a GIF": "Selecionar GIF",
    "or drop an animated .gif here": "ou solte um .gif animado aqui",
    "1 frame": "1 quadro",
    "{n} frames": "{n} quadros",
    "frame": "quadro",
    "frames": "quadros",
    "Clear GIF": "Limpar GIF",
    "Frame settings": "Configurações dos quadros",
    "Frame Settings": "Configurações dos quadros",
    "Download frame {n}": "Baixar quadro {n}",
    "Frame {n}": "Quadro {n}",
    "showing first {n}, all included in the ZIP": "mostrando os primeiros {n}, todos incluídos no ZIP",
    "Change GIF": "Trocar GIF",
    "Click any frame to download it on its own.": "Clique em qualquer quadro para baixar só ele.",
    "Download 1 frame (ZIP)": "Baixar 1 quadro (ZIP)",
    "Download all {n} frames (ZIP)": "Baixar os {n} quadros (ZIP)",
    "Output": "Saída",
    "Format": "Formato",
    "JPG background": "Fundo do JPG",
  },
};

export default content;
