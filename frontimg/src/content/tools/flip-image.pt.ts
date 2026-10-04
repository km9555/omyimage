import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/espelhar-imagem (variant of rotate-image, flipH).
 * "espelhar imagem" 1,900/mo + "espelhar foto" 1,300 (Brazil, 2026-10-04).
 * "inverter imagem" (2,400) is ambiguous — also "invert colours" — so the
 * slug and H1 say espelhar; inverter lives in the body and the aliases.
 */
const content: ToolPageContent = {
  toolId: "flip-image",
  locale: "pt",
  name: "Espelhar imagem",
  tagline:
    "Espelhe uma imagem na horizontal ou na vertical — selfies espelhadas, texto ao contrário e fotos de produto em um clique. Em lote, JPG, PNG e WEBP, e tudo fica no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Espelhar Imagem Online — Inverter Foto na Horizontal, Grátis | oMyImage",
  metaDescription:
    "Espelhe imagens online na horizontal ou na vertical: desinverta selfies, corrija texto ao contrário e alinhe fotos de produto. Em lote, JPG, PNG e WEBP, direto no navegador.",

  intro:
    "Espelhar uma imagem é refleti-la: o espelhamento horizontal troca esquerda e direita, como se você olhasse num espelho, e o vertical a vira de cabeça para baixo, do jeito que a água reflete a margem de um lago. Esta página já abre com o espelhamento horizontal ligado, porque é o que quase todo mundo precisa — desinverter uma selfie da câmera frontal, corrigir um texto que aparece ao contrário ou deixar todas as fotos de uma série olhando para o mesmo lado. Adicione uma imagem ou uma pasta inteira, confira a prévia e baixe.",

  sections: [
    {
      heading: "Espelhar ou girar: qual você precisa?",
      id: "flip-vs-rotate",
      body: [
        "Girar roda a imagem inteira em torno do centro, então uma foto deitada pode ficar em pé; nada é espelhado. Espelhar reflete a imagem, então o texto fica ao contrário e a mão esquerda da pessoa vira a direita.",
        "Um teste rápido: se a foto está na posição certa mas virada para o lado errado, você precisa espelhar. Se está de lado ou de cabeça para baixo mas fora isso correta, você precisa girar — os controles das duas coisas ficam no mesmo painel, então dá para fazer uma, a outra ou as duas de uma vez.",
      ],
    },
    {
      heading: "Por que as selfies saem espelhadas",
      id: "selfies",
      body: [
        "A câmera frontal do celular mostra uma prévia espelhada porque é assim que você está acostumado a se ver no espelho, e muitos celulares também salvam a foto desse jeito. O resultado é uma imagem em que o texto da camiseta ou de uma placa atrás de você aparece ao contrário, e a risca do cabelo fica do lado que as outras pessoas não veem.",
        "Um espelhamento horizontal devolve a foto ao jeito como todo mundo vê você. Alguns celulares têm uma opção para salvar as fotos da câmera frontal sem espelhar daqui em diante; para as fotos que você já tirou, espelhar aqui é o conserto mais rápido.",
      ],
    },
    {
      heading: "Bons motivos para espelhar uma imagem",
      id: "uses",
      body: [
        "Designers espelham fotos de produto para que todos os itens de uma vitrine olhem para o mesmo lado, e espelham retratos para que a pessoa olhe para dentro da página, e não para fora. Professores e artesãos espelham imagens para transfer de camiseta e serigrafia, em que a impressão sai invertida. Desenhistas espelham um desenho para enxergar erros de proporção que o olho já não percebe.",
        "O espelhamento em si não altera nenhum pixel, só a ordem deles, então espelhar de novo devolve a arrumação original. Salve em PNG para o arquivo continuar exatamente sem perdas; a saída em JPG é salva de novo com qualidade alta.",
      ],
    },
    {
      heading: "Quando não espelhar",
      id: "text-and-logos",
      body: [
        "O espelhamento horizontal inverte tudo na imagem, inclusive a escrita. Logotipos, placas de rua, placas de carro e etiquetas de preço saem ao contrário, então uma foto de produto com embalagem impressa normalmente fica melhor sem espelhar — ou espelhada e conferida antes de publicar.",
        "Prints de tela quase nunca devem ser espelhados: se um aparecer de lado, ele precisa ser girado. E num retrato, lembre que rostos não são perfeitamente simétricos; a foto espelhada de alguém que você conhece bem pode parecer levemente estranha para você, mesmo sendo exatamente como essa pessoa se vê no espelho.",
      ],
    },
  ],

  howToTitle: "Como espelhar uma imagem",
  steps: [
    { title: "Adicione as imagens", description: "Selecione ou arraste um ou vários arquivos JPG, PNG ou WEBP." },
    { title: "Escolha a direção", description: "O espelhamento horizontal já vem ligado; troque para o vertical ou combine com um giro, se precisar." },
    { title: "Baixe", description: "Baixe a imagem espelhada, ou todas juntas em um ZIP." },
  ],

  features: [
    { icon: "flip", title: "Horizontal ou vertical", description: "Espelhe da esquerda para a direita ou de cima para baixo, separado ou junto, com prévia ao vivo." },
    { icon: "burst_mode", title: "O conjunto inteiro de uma vez", description: "Espelhe todas as imagens de um lote do mesmo jeito e baixe tudo junto." },
    { icon: "lock", title: "Nada é enviado", description: "O espelhamento acontece no seu navegador, então suas fotos ficam no seu aparelho." },
  ],

  faqs: [
    { q: "Como espelhar uma imagem na horizontal?", a: "Adicione a imagem — o espelhamento horizontal já está ligado —, confira a prévia e baixe. É só isso." },
    { q: "Espelhar e inverter a imagem são a mesma coisa?", a: "Quase sempre que alguém fala em \"inverter a foto\" está falando de espelhar. Mas \"inverter as cores\" é outra coisa: troca cada cor pelo seu oposto, como um negativo, e não é o que esta página faz." },
    { q: "Como desinverter uma selfie?", a: "Espelhe na horizontal. A câmera frontal muitas vezes salva a foto espelhada, e o espelhamento horizontal mostra você do jeito que as outras pessoas veem." },
    { q: "Dá para espelhar na vertical?", a: "Dá. Ligue o espelhamento vertical nas configurações — sozinho ou junto com o horizontal." },
    { q: "Posso espelhar várias imagens de uma vez?", a: "Pode. Adicione um lote inteiro; todas as imagens são espelhadas do mesmo jeito e você pode baixá-las em um ZIP." },
    { q: "Um PNG transparente continua transparente?", a: "Continua, desde que você mantenha PNG ou WEBP como formato de saída. O JPG não tem transparência, então as áreas transparentes receberiam uma cor de fundo." },
    { q: "Espelhar conserta um texto que aparece ao contrário?", a: "Sim — o espelhamento horizontal transforma a escrita espelhada em texto normal, desde que o texto estivesse espelhado, e não fotografado através de um vidro em ângulo." },
  ],

  security:
    "Suas imagens nunca saem do seu aparelho. O espelhamento roda inteiramente no navegador, sem envio nem armazenamento.",
};

export default content;
