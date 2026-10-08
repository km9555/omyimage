import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.pt";

/** Portuguese copy for /pt/gif-para-apng. */
const content: ToolPageContent = {
  toolId: "gif-to-apng",
  locale: "pt",
  name: "GIF para APNG",
  tagline:
    "Converta GIFs animados em APNG, o PNG animado — cada pixel, quadro e pausa mantidos, muitas vezes num arquivo menor. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF para APNG Online Grátis — PNG Animado | oMyImage",
  metaDescription:
    "Converta GIF em APNG (PNG animado) online e grátis. Cada pixel e cada quadro são mantidos, muitas vezes num arquivo menor. No navegador, sem upload.",

  intro:
    "APNG é um PNG com animação: o mesmo formato sem perdas de um PNG comum, com blocos extras que guardam os quadros e os tempos. Todos os navegadores atuais tocam APNG, e programas que não entendem a animação simplesmente mostram o primeiro quadro como um PNG normal. O conversor de GIF para APNG do oMyImage grava o seu GIF como APNG sem mudar um único pixel, guarda cada quadro da forma mais compacta possível e mostra o tamanho ao lado do original, para você ver o que ganhou.",

  sections: [
    {
      heading: "Por que APNG em vez de GIF",
      id: "why",
      body: [
        "O GIF comprime com LZW, um método dos anos 1980; o PNG usa DEFLATE, que espreme os mesmos pixels com mais força. Por isso, converter um GIF em APNG muitas vezes deixa o arquivo menor sem perda nenhuma — principalmente em desenhos, logotipos, ícones e gravações de tela com grandes áreas lisas.",
        "O APNG também aceita cores completas e bordas suaves e semitransparentes, que o GIF não aceita. Um GIF convertido mantém exatamente as cores e as bordas duras que tinha, mas, se você editar os quadros depois, o APNG não vai forçá-los de volta para 256 cores.",
      ],
    },
    {
      heading: "Como o arquivo é montado",
      id: "how",
      body: [
        "Quando todos os quadros cabem em 256 cores — quase sempre, num GIF —, o APNG usa uma paleta, então cada pixel ocupa um byte, como no GIF. Caso contrário, guarda RGBA completo. Cada quadro depois do primeiro registra só o retângulo que mudou, e um quadro idêntico ao anterior é somado à duração dele.",
        "Cada quadro mantém a duração exata, em milissegundos, e a animação repete como o GIF — sem parar, uma vez só ou um número definido de vezes. Áreas transparentes continuam transparentes.",
      ],
    },
    {
      heading: "Onde o APNG toca",
      id: "support",
      body: [
        "Chrome, Edge, Firefox, Safari e Opera tocam APNG, no computador e no celular, então um APNG funciona em qualquer lugar onde uma imagem cabe numa página. O LINE usa APNG nas figurinhas animadas, e muitas ferramentas de figurinhas e emojis aceitam o formato.",
        "Visualizadores, editores e apps de conversa que só conhecem o PNG comum mostram o primeiro quadro em vez da animação. Essa é a alternativa embutida do APNG, mas significa que o GIF ainda é a escolha mais segura para e-mail e para a maioria dos apps de mensagem.",
      ],
    },
    {
      heading: "A extensão do arquivo",
      id: "extension",
      body: [
        "O download termina em .png, a extensão que navegadores e a maioria dos sites esperam; a animação está dentro do arquivo, não no nome. Se algum serviço pedir especificamente um arquivo .apng, é só renomear a extensão — o conteúdo é o mesmo.",
      ],
    },
    {
      heading: "APNG ou WEBP",
      id: "webp",
      body: [
        "Os dois substituem o GIF de forma moderna. O WEBP sem perdas costuma ser ainda menor, e o WEBP com perdas muito menor, mas o WEBP não pode ser criado no Safari e algumas ferramentas não o aceitam. O APNG é só sem perdas, pode ser criado em qualquer navegador, inclusive o Safari, e abre como PNG parado onde não há suporte à animação. Para um site, teste os dois e fique com o menor; para figurinhas, use o que a plataforma pedir.",
      ],
    },
    {
      heading: "Edite antes, converta depois",
      id: "prepare",
      body: [
        "O conversor mantém o GIF exatamente como está, então faça as edições antes de converter. Use o Recortar GIF para o formato e o Redimensionar GIF para um tamanho exato em pixels — plataformas de figurinhas costumam fixar os dois — e o Cortar GIF para ficar só com os quadros necessários. Essas ferramentas mantêm as cores do GIF, então o APNG fica idêntico, pixel a pixel, ao que você preparou.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é lido e o APNG é gravado inteiramente no seu navegador. Nada é enviado, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como converter GIF para APNG",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Converta", description: "Clique em Converter para APNG; cada pixel e cada quadro são mantidos." },
    { title: "Baixe", description: "Compare o tamanho com o GIF e baixe o APNG." },
  ],

  features: [
    { icon: "image", title: "Sem perdas", description: "Cada pixel, quadro e pausa passam sem mudança." },
    { icon: "compress", title: "Muitas vezes menor", description: "A compressão do PNG costuma superar a do GIF nos mesmos quadros." },
    { icon: "lock", title: "Sem upload", description: "Convertido inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como converter um GIF em APNG?", a: "Adicione o GIF e clique em Converter para APNG. O PNG animado toca igual ao GIF." },
    { q: "O que é APNG?", a: "PNG animado: um arquivo PNG que também guarda quadros de animação e os seus tempos." },
    { q: "O APNG é sem perdas?", a: "Sim. Cada pixel de cada quadro é guardado exatamente." },
    { q: "APNG é menor que GIF?", a: "Muitas vezes, graças a uma compressão melhor, principalmente em gráficos e gravações de tela. A ferramenta mostra a diferença." },
    { q: "A transparência é mantida?", a: "Sim. Áreas transparentes continuam transparentes." },
    { q: "Por que meu APNG parece uma imagem parada?", a: "O programa em que você abriu não suporta APNG e mostra o primeiro quadro. Abra no navegador para ver a animação." },
    { q: "Por que o arquivo termina em .png?", a: "Arquivos APNG usam a extensão PNG. Renomeie para .apng só se algum serviço pedir." },
    { q: "Funciona no Safari?", a: "Sim. O Safari toca APNG e também consegue criá-lo com esta ferramenta." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, em qualquer navegador do celular, inclusive no iPhone." },
    { q: "Devo usar APNG ou WEBP?", a: "O WEBP costuma ser menor; o APNG funciona em mais ferramentas e no Safari. Teste os dois se o tamanho importar." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Dá para fazer figurinha do LINE?", a: "O LINE usa APNG nas figurinhas animadas. Prepare o GIF no tamanho pedido pela plataforma e converta aqui." },
  ],

  security:
    "Seu GIF é convertido inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // GifExportTool.tsx is shared with gif-to-webp; each route only has its own
  // tool's ui in scope, so this page reuses the WEBP page's translations.
  ui: webp.ui,
};

export default content;
