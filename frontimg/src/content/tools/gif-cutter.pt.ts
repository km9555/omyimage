import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.pt";

/** Portuguese copy for /pt/cortar-gif. */
const content: ToolPageContent = {
  toolId: "gif-cutter",
  locale: "pt",
  name: "Cortar GIF",
  tagline:
    "Corte um GIF animado na parte que você quer: escolha o primeiro e o último quadro a manter, ou tire um trecho do meio. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Cortar GIF Online Grátis — Encurtar GIF Animado | oMyImage",
  metaDescription:
    "Corte GIFs animados online e grátis: escolha o quadro inicial e o final para ficar com uma parte do GIF, ou remova um trecho dele. No navegador, sem upload.",

  intro:
    "GIFs salvos de vídeos e gravações de tela quase nunca começam e terminam no lugar certo. Tem um segundo de nada antes da ação, um esmaecimento no final ou um meio comprido que você preferia pular. O Cortar GIF do oMyImage deixa você aparar quadro a quadro: mova os controles de início e fim, confira o primeiro e o último quadro da seleção nas miniaturas e escolha se quer manter essa parte ou removê-la. O resultado toca ao lado do original, com a nova duração e o novo tamanho, antes de você baixar.",

  sections: [
    {
      heading: "Manter uma parte ou remover uma parte",
      id: "modes",
      body: [
        "Manter salva só os quadros entre o controle de início e o de fim — o corte de sempre, para tirar o tempo morto das duas pontas ou separar um momento de um GIF longo.",
        "Remover faz o contrário: os quadros entre os controles são apagados e o resto é emendado. Use para tirar do meio uma pausa, um erro ou uma cena indesejada, mantendo o começo e o fim.",
      ],
    },
    {
      heading: "Encontrando os quadros certos",
      id: "frames",
      body: [
        "Cada controle mostra o número do quadro e o momento da animação em que ele começa, em segundos. As duas miniaturas mostram o primeiro e o último quadro da seleção, então você pode parar exatamente onde uma ação começa ou uma legenda termina, sem adivinhar numa linha do tempo.",
        "Quadros são o menor passo que um GIF tem. Um GIF feito de um vídeo a 10 quadros por segundo tem um quadro a cada décimo de segundo; um com tempos irregulares pode segurar um quadro por mais tempo, o que os tempos ao lado dos controles revelam.",
      ],
    },
    {
      heading: "O que continua igual",
      id: "kept",
      body: [
        "Os quadros que ficam não mudam, e cada um mantém a sua duração, então a animação restante toca exatamente como antes. O GIF continua repetindo. Quando as cores cabem numa paleta — como na maioria dos GIFs —, essas cores são gravadas de volta exatamente; GIFs que usam uma paleta por quadro recebem uma paleta única de 256 cores escolhida a partir de todos os quadros, o que raramente se nota.",
      ],
    },
    {
      heading: "Mais curto é mais leve",
      id: "size",
      body: [
        "Cada quadro removido é dado removido, então aparar é uma das formas mais eficientes de diminuir um GIF sem mexer na qualidade. Cortar um GIF de seis segundos para os seus melhores dois segundos costuma tirar uns dois terços do arquivo.",
        "Se ainda estiver grande demais para onde você vai mandar, recorte as bordas com o Recortar GIF ou reduza as cores com o Comprimir GIF.",
      ],
    },
    {
      heading: "Cortes comuns",
      id: "uses",
      body: [
        "Tirar os segundos vazios que o gravador de tela acrescenta antes de você começar e depois de parar. Ficar só com o ponto alto de um GIF de reação. Remover o momento em que alguém passa na frente da câmera. Dividir um GIF longo em partes curtas, salvando vários cortes do mesmo arquivo um depois do outro.",
        "Para cortar um vídeo antes de virar GIF, o Vídeo para GIF tem os próprios controles de início e fim, o que mantém o arquivo pequeno desde o começo.",
      ],
    },
    {
      heading: "GIFs curtos para WhatsApp",
      id: "messengers",
      body: [
        "Aplicativos de mensagem e redes sociais costumam ter limite de tamanho, e um GIF longo demais pode ser recusado ou convertido com perda de qualidade. Cortar o GIF para os segundos que importam é o jeito mais simples de caber nesses limites sem deixar a imagem pior — e um GIF curto ainda prende mais a atenção de quem vê.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é decodificado, cortado e codificado inteiramente no seu navegador. Ele nunca é enviado e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como cortar um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Defina início e fim", description: "Mova os controles até o primeiro e o último quadro e escolha manter ou remover essa parte." },
    { title: "Corte e baixe", description: "Clique em Cortar GIF, compare com o original e baixe o resultado." },
  ],

  features: [
    { icon: "burst_mode", title: "Precisão de quadro", description: "Comece e termine em quadros exatos, com tempos e miniaturas." },
    { icon: "delete", title: "Manter ou remover", description: "Apare as pontas ou tire um trecho do meio." },
    { icon: "lock", title: "Sem upload", description: "Cortado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como cortar um GIF?", a: "Adicione o GIF, mova os controles de Início e Fim até os quadros que quer, deixe Manter selecionado e clique em Cortar GIF." },
    { q: "Dá para remover quadros do meio de um GIF?", a: "Sim. Selecione a parte a apagar e escolha Remover; os quadros de antes e de depois são emendados." },
    { q: "Cortar muda a velocidade?", a: "Não. Cada quadro que fica mantém a duração original." },
    { q: "Cortar diminui a qualidade?", a: "Não. Os quadros mantidos não mudam, e as cores originais são reaproveitadas sempre que cabem numa paleta." },
    { q: "Quanto menor o GIF vai ficar?", a: "Mais ou menos na proporção dos quadros removidos — tirar metade dos quadros economiza cerca de metade do arquivo." },
    { q: "Dá para cortar por tempo em vez de quadros?", a: "Cada controle mostra o tempo em que o quadro começa, então dá para mirar num segundo; o corte em si sempre cai entre quadros." },
    { q: "A transparência é mantida?", a: "Sim. GIFs transparentes continuam transparentes." },
    { q: "O GIF cortado continua repetindo?", a: "Sim. Ele repete igual ao original." },
    { q: "Dá para dividir um GIF em várias partes?", a: "Sim — corte e baixe uma parte, depois mova os controles e corte a próxima do mesmo GIF." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. O GIF é cortado inteiramente no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Qual a diferença entre cortar e recortar um GIF?", a: "Cortar tira quadros, ou seja, tempo. Recortar tira bordas da imagem — para isso, use o Recortar GIF." },
  ],

  security:
    "Seu GIF é cortado inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
