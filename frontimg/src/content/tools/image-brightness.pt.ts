import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.pt";

/** Portuguese copy for /pt/ajustar-brilho-da-imagem. */
const content: ToolPageContent = {
  toolId: "image-brightness",
  locale: "pt",
  name: "Brilho e contraste",
  tagline:
    "Clareie uma foto escura, dê força com o contraste e deixe as cores mais vivas ou mais suaves com a saturação — com prévia ao vivo e comparação rápida de antes e depois. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Ajustar Brilho e Contraste da Imagem Online Grátis | oMyImage",
  metaDescription:
    "Ajuste brilho, contraste e saturação de imagens online e grátis, com prévia ao vivo. Corrija fotos escuras ou lavadas, várias de uma vez. No navegador, sem upload.",

  intro:
    "A maioria das fotos que decepcionam não está fora de foco — está um pouco escura, sem contraste ou acinzentada demais. Três controles resolvem quase tudo isso. O Brilho e contraste do oMyImage ajusta brilho, contraste e saturação de imagens JPG, PNG e WEBP, mostra a mudança ao vivo enquanto você arrasta e deixa você segurar um botão para ver o original de novo. Aplique os mesmos ajustes a um lote inteiro, para que um conjunto de fotos de produto ou de viagem saia uniforme.",

  sections: [
    {
      heading: "Os três controles",
      id: "sliders",
      body: [
        "O brilho clareia ou escurece todos os tons na mesma medida: arraste para a direita para salvar uma foto escura, para a esquerda para acalmar uma clara demais. O contraste afasta os tons do cinza médio — partes escuras mais escuras, partes claras mais claras —, o que dá profundidade a uma imagem chapada e enevoada; para a esquerda, ele suaviza uma foto dura.",
        "A saturação controla o quanto as cores são vivas. Aumente para comida, flores e paisagens; diminua para um visual mais apagado, de filme. Em −100 a imagem fica totalmente em preto e branco. O botão Redefinir volta os três para zero.",
      ],
    },
    {
      heading: "Corrigindo problemas comuns",
      id: "fixes",
      body: [
        "Foto escura de ambiente interno: brilho +20 a +40 e contraste +10 para não ficar lavada. Paisagem acinzentada e enevoada: contraste +20 a +30 e saturação +15. Foto de documento no celular para um formulário: brilho +15 e contraste +40 deixam o papel branco e o texto escuro e legível. Foto dura do meio-dia: contraste −15 e saturação −10.",
        "Passos pequenos funcionam melhor. Valores de brilho muito altos estouram as áreas claras para branco puro, e esse detalhe não volta — fique de olho no céu e em roupas brancas na prévia.",
      ],
    },
    {
      heading: "Antes e depois",
      id: "compare",
      body: [
        "Aperte e segure Segure para ver o original, embaixo da prévia, para mostrar a imagem sem ajustes; solte para ver os seus ajustes de novo. Comparar com frequência é o jeito mais fácil de não exagerar, porque os olhos se acostumam rápido a uma imagem mais clara ou mais colorida.",
      ],
    },
    {
      heading: "Lotes uniformes",
      id: "batch",
      body: [
        "Adicione um conjunto inteiro de imagens e os mesmos ajustes são aplicados a cada uma, então fotos tiradas na mesma luz saem combinando — útil para anúncios de produtos, fotos de imóveis e álbuns. A prévia usa a primeira imagem; cada arquivo da lista ganha o seu botão de download, e várias são baixadas juntas num ZIP.",
      ],
    },
    {
      heading: "Formatos e qualidade",
      id: "formats",
      body: [
        "O resultado mantém o formato original, a não ser que você escolha outro. O PNG guarda os pixels ajustados exatamente; JPG e WEBP usam o controle de qualidade. Áreas transparentes continuam transparentes em PNG e WEBP. Para preto e branco com mais controle da mistura, use o Imagem em preto e branco; para um negativo, use o Inverter cores da imagem.",
      ],
    },
    {
      heading: "Brilho para impressão e telas",
      id: "print",
      body: [
        "Fotos parecem mais escuras no papel do que numa tela iluminada, então imagens para impressão costumam precisar de um pouco mais de brilho — +10 a +20 é comum — e de um toque a mais de contraste. Para telas, confira o resultado no aparelho onde a imagem vai ser vista: celulares costumam ser mais claros que telas de notebook, e uma foto certa num pode parecer apagada no outro.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada imagem é ajustada inteiramente no seu navegador. Nada é enviado para um servidor, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como mudar o brilho de uma imagem",
  steps: [
    { title: "Adicione imagens", description: "Selecione uma ou mais imagens JPG, PNG ou WEBP." },
    { title: "Ajuste", description: "Mexa nos controles de brilho, contraste e saturação; segure para comparar." },
    { title: "Aplique e baixe", description: "Clique em Aplicar ajustes para baixar a imagem, ou um ZIP se forem várias." },
  ],

  features: [
    { icon: "light_mode", title: "Três controles essenciais", description: "Brilho, contraste e saturação, de −100 a +100." },
    { icon: "visibility", title: "Antes e depois", description: "Prévia ao vivo, e segure para ver o original." },
    { icon: "lock", title: "Sem upload", description: "Ajustada inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como deixar uma foto mais clara?", a: "Adicione a foto, arraste o controle de Brilho para a direita e clique em Aplicar ajustes." },
    { q: "O que o contraste faz?", a: "Afasta os tons escuros dos claros, dando mais profundidade a fotos chapadas." },
    { q: "O que a saturação faz?", a: "Deixa as cores mais vivas ou mais apagadas; em −100 a foto fica em preto e branco." },
    { q: "Como corrigir uma foto escura?", a: "Aumente o brilho de 20 a 40 e acrescente uns 10 de contraste para ela não ficar lavada." },
    { q: "Dá para deixar a foto de um documento mais legível?", a: "Sim. Um pouco mais de brilho e bem mais contraste deixam a folha branca e o texto escuro." },
    { q: "Dá para comparar com o original?", a: "Sim. Aperte e segure o botão embaixo da prévia para ver o original." },
    { q: "Dá para ajustar várias fotos de uma vez?", a: "Sim. Os mesmos ajustes são aplicados a todas, e elas são baixadas num ZIP." },
    { q: "Perde qualidade?", a: "O PNG mantém cada pixel. JPG e WEBP são salvos de novo na qualidade escolhida." },
    { q: "Minha imagem é enviada para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, em qualquer navegador do celular." },
    { q: "Dá para desfazer os ajustes?", a: "Use Redefinir antes de baixar; depois disso, guarde o arquivo original." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "As cores mudam quando aumento o brilho?", a: "Elas ficam mais claras, mas mantêm o tom. Só a saturação deixa as cores mais ou menos vivas." },
  ],

  security:
    "Suas imagens são ajustadas inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
