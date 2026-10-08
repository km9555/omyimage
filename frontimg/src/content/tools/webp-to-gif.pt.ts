import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.pt";

/** Portuguese copy for /pt/webp-para-gif. */
const content: ToolPageContent = {
  toolId: "webp-to-gif",
  locale: "pt",
  name: "WEBP para GIF",
  tagline:
    "Converta imagens WEBP animadas em GIF, mantendo cada quadro e o tempo — para a animação tocar em aplicativos e editores que não entendem WEBP. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "WEBP para GIF Online Grátis — WEBP Animado | oMyImage",
  metaDescription:
    "Converta WEBP animado em GIF online e grátis, mantendo cada quadro e o tempo. Funciona também com WEBP parado. No navegador, sem enviar nada.",

  intro:
    "O WEBP animado é eficiente, mas muito software ainda não o abre: editores de imagem antigos, alguns aplicativos de conversa, programas de apresentação e muitos formulários de envio mostram só um quadro parado ou recusam o arquivo. O GIF é entendido em todo lugar. O conversor de WEBP para GIF do oMyImage lê cada quadro de um WEBP animado — com tempo, mesclagem e transparência — e grava tudo como um GIF que repete. Adicione o arquivo, veja o resultado ao lado do original e baixe.",

  sections: [
    {
      heading: "De onde vêm os WEBP animados",
      id: "sources",
      body: [
        "Sites servem animações em WEBP porque são menores que GIFs, então uma animação salva de uma página muitas vezes é um .webp. As figurinhas animadas do WhatsApp também são arquivos WEBP. As duas aparecem bem no navegador e viram uma imagem congelada ou um erro em quase todo o resto.",
        "Converter para GIF deixa a animação portátil: dá para colar num documento, enviar a um fórum, editar quadro a quadro ou mandar por aplicativos que nunca aprenderam WEBP.",
      ],
    },
    {
      heading: "O que muda no GIF",
      id: "tradeoffs",
      body: [
        "O GIF é mais antigo e mais limitado. Ele mostra 256 cores por quadro, então degradês suaves e fotos podem formar faixas; esta ferramenta escolhe uma única paleta para a animação inteira, para as cores ao menos ficarem estáveis entre quadros. A transparência do GIF é só ligada ou desligada, então bordas suaves e semitransparentes ficam duras.",
        "Espere um GIF maior que o WEBP, muitas vezes várias vezes maior. Se isso importar, o Comprimir GIF pode diminuí-lo depois, e se o destino aceitar vídeo, um MP4 será ainda menor.",
      ],
    },
    {
      heading: "Quadros e tempo",
      id: "timing",
      body: [
        "Cada quadro do WEBP é decodificado separadamente e montado do jeito que o navegador o toca, respeitando as configurações de mesclagem e descarte de cada quadro, então animações que atualizam só parte da imagem saem corretas. Cada quadro mantém a duração, e o GIF repete para sempre.",
        "A conversão funciona em qualquer navegador moderno, inclusive o Safari, porque cada quadro é decodificado pelo próprio suporte a WEBP do navegador, sem um decodificador extra.",
      ],
    },
    {
      heading: "WEBP parado",
      id: "still",
      body: [
        "Um WEBP que não é animado vira um GIF de um quadro só, e a ferramenta avisa. Para uma imagem parada, PNG ou JPG costumam ser escolhas melhores que GIF: use WEBP para PNG para manter transparência e todas as cores, ou WEBP para JPG para fotos.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O WEBP é lido e o GIF é gravado inteiramente no seu navegador. Figurinhas, capturas e animações salvas nunca saem do seu aparelho, e nada fica guardado depois que você fecha a página.",
      ],
    },
    {
      heading: "WEBP com e sem perdas",
      id: "kinds",
      body: [
        "Os quadros de um WEBP podem ser de dois tipos: com perdas, que pode trazer uma camada de transparência separada, e sem perdas. Os dois são lidos exatamente como o navegador os mostra. Qualquer borrão ou bloquinho que um WEBP com perdas já tinha passa para o GIF — converter não recupera detalhes que o WEBP descartou.",
      ],
    },
    {
      heading: "Deixando o GIF menor depois",
      id: "smaller",
      body: [
        "Se o GIF ficar maior do que o lugar para onde você vai mandar permite, redimensione-o para o tamanho em que vai aparecer — figurinhas costumam ter 512 pixels ou menos — e passe pelo Comprimir GIF no nível Médio. Juntos, esses passos costumam deixar uma figurinha ou banner convertido num tamanho confortável.",
      ],
    },
  ],

  howToTitle: "Como converter WEBP em GIF",
  steps: [
    { title: "Adicione o WEBP", description: "Selecione uma imagem WEBP animada (ou parada)." },
    { title: "Converta", description: "Clique em Converter para GIF; cada quadro e o tempo são mantidos." },
    { title: "Baixe", description: "Compare o GIF com o original e baixe." },
  ],

  features: [
    { icon: "gif_box", title: "Animação mantida", description: "Cada quadro, o tempo, a mesclagem e a transparência passam para o GIF." },
    { icon: "devices", title: "Toca em todo lugar", description: "O GIF abre em aplicativos, editores e formulários que recusam WEBP." },
    { icon: "lock", title: "Nada é enviado", description: "Convertido inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como converter um WEBP animado em GIF?", a: "Adicione o WEBP e clique em Converter para GIF. Cada quadro e o tempo são mantidos, e o GIF repete." },
    { q: "Por que o GIF ficou maior que o WEBP?", a: "O GIF comprime bem menos. Use o Comprimir GIF depois se o tamanho importar." },
    { q: "As cores vão mudar?", a: "Um pouco em fotos e degradês: o GIF permite 256 cores, escolhidas uma vez para a animação inteira." },
    { q: "A transparência é mantida?", a: "É, mas a transparência do GIF não tem bordas suaves, então bordas semitransparentes ficam sólidas." },
    { q: "Dá para converter figurinhas do WhatsApp?", a: "Dá. Figurinhas animadas do WhatsApp são arquivos WEBP e convertem como qualquer outro." },
    { q: "E se meu WEBP não for animado?", a: "Você recebe um GIF de um quadro. Para imagens paradas, WEBP para PNG ou WEBP para JPG costuma ser melhor." },
    { q: "Funciona no Safari?", a: "Funciona. Os quadros são decodificados pelo suporte a WEBP do próprio navegador, que o Safari tem." },
    { q: "Meu arquivo é enviado?", a: "Não. A conversão acontece inteiramente no seu navegador." },
    { q: "Quanto tempo leva a conversão?", a: "Alguns segundos para figurinhas e animações curtas. WEBPs longos ou grandes levam mais, e o progresso aparece." },
    { q: "O GIF repete do mesmo jeito?", a: "O GIF repete para sempre, como quase todo WEBP animado." },
    { q: "Funciona no celular?", a: "Funciona, no navegador do celular. Animações grandes demoram um pouco mais no celular." },
    { q: "Dá para usar o GIF numa apresentação?", a: "Dá. PowerPoint, Keynote e Google Slides tocam GIFs direto no slide." },
  ],

  security:
    "Seu WEBP é lido e convertido em GIF inteiramente no seu navegador. Nada é enviado, guardado ou rastreado.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
