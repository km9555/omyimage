import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.pt";

/** Portuguese copy for /pt/inverter-gif. */
const content: ToolPageContent = {
  toolId: "reverse-gif",
  locale: "pt",
  name: "Inverter GIF",
  tagline:
    "Faça um GIF animado tocar de trás para frente, ou transforme-o num bumerangue que vai e volta num loop contínuo. Cada quadro mantém a sua duração. Grátis, no navegador.",
  category: { id: "edit", label: "Editar" },

  metaTitle: "Inverter GIF Online Grátis — GIF ao Contrário e Bumerangue | oMyImage",
  metaDescription:
    "Inverta um GIF animado online e grátis: toque de trás para frente ou crie um bumerangue que vai e volta. A duração dos quadros é mantida. No navegador, sem upload.",

  intro:
    "Rodar uma animação de trás para frente é um dos truques mais antigos que existem: a água pula de volta para o copo, o objeto que caiu sobe para a mão, a multidão anda de costas. O Inverter GIF do oMyImage troca a ordem de todos os quadros do seu GIF para ele tocar do fim para o começo, e a opção Bumerangue toca o trecho para a frente e depois para trás, então o loop não tem salto visível. Adicione o GIF, escolha o sentido, compare com o original e baixe.",

  sections: [
    {
      heading: "Inverter ou bumerangue",
      id: "modes",
      body: [
        "Inverter toca os quadros do último para o primeiro. O GIF dura exatamente o mesmo tempo e tem o mesmo número de quadros; só a ordem muda. É a escolha certa para piadas que dependem do tempo correndo ao contrário e para GIFs que simplesmente ficam melhores no outro sentido.",
        "Bumerangue toca os quadros para a frente e depois para trás. O primeiro e o último quadro não se repetem nos pontos de virada, então o movimento rebate suavemente em vez de parar. É o efeito que os aplicativos de câmera chamam de bumerangue, e o jeito mais fácil de fazer qualquer trecho curto repetir sem salto.",
      ],
    },
    {
      heading: "Temporização",
      id: "timing",
      body: [
        "Cada quadro mantém a sua duração. Se o original fica dois segundos parado no último quadro antes de recomeçar, o GIF invertido fica esses mesmos dois segundos nesse quadro — só que agora no início. Normalmente é isso que se quer, mas se a pausa ficar estranha no começo, o Alterar velocidade do GIF pode dar a mesma duração a todos os quadros.",
        "Um bumerangue dura quase o dobro do original, porque a maioria dos quadros toca duas vezes. Trechos curtos, de um a três segundos, dão os melhores bumerangues; os mais longos podem parecer lentos na volta.",
      ],
    },
    {
      heading: "Por que alguns GIFs dão um pulo no loop",
      id: "loops",
      body: [
        "A maioria dos GIFs é cortada de vídeo, então o último quadro raramente combina com o primeiro. Quando o GIF recomeça, tudo volta de repente para o ponto de partida, e o olho percebe o salto a cada poucos segundos. Um bumerangue nunca salta: ele inverte em cada ponta, então o movimento é contínuo não importa quantas vezes toque.",
        "Isso faz dele uma solução rápida para fotos de produto, mãos acenando, bebidas sendo servidas, cabelo ao vento e outros movimentos curtos que tropeçariam a cada repetição.",
      ],
    },
    {
      heading: "Qualidade e tamanho",
      id: "quality",
      body: [
        "Os quadros em si não mudam. Quando as cores do GIF cabem numa paleta — como na maioria dos GIFs —, as mesmas cores são gravadas de volta. GIFs feitos de vídeo às vezes usam uma paleta por quadro, e esses recebem uma paleta única de 256 cores escolhida a partir de todos os quadros, o que raramente se nota.",
        "Um GIF invertido costuma ficar perto do tamanho original. Um bumerangue fica maior, já que quase todos os quadros são guardados duas vezes; se isso importar, o Comprimir GIF deixa o arquivo mais leve depois.",
      ],
    },
    {
      heading: "Ideias",
      id: "ideas",
      body: [
        "Rebobine um mergulho, um salto ou um respingo para acontecer ao contrário. Faça um prédio, um desenho ou uma receita se desmontar. Transforme o giro de um produto ou um retrato em vídeo num bumerangue que repete sem emenda num site ou num story. Inverta um GIF de reação para mudar completamente o sentido dele.",
      ],
    },
    {
      heading: "Bumerangue para redes sociais",
      id: "social",
      body: [
        "Bumerangues fazem sucesso em stories, status do WhatsApp e posts porque prendem o olhar: o movimento vai e volta sem fim. Comece com um trecho de um a dois segundos — gerado, por exemplo, com o Vídeo para GIF —, escolha Bumerangue aqui e, se o arquivo ficar pesado, reduza o tamanho com o Redimensionar GIF antes de postar.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é decodificado, reordenado e codificado inteiramente no seu navegador. Ele nunca é enviado e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como inverter um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Escolha o sentido", description: "Inverter para tocar de trás para frente, ou Bumerangue para ir e voltar." },
    { title: "Inverta e baixe", description: "Clique em Inverter GIF, compare com o original e baixe o resultado." },
  ],

  features: [
    { icon: "history", title: "Ao contrário ou bumerangue", description: "Toque a partir do fim, ou vá e volte num loop contínuo." },
    { icon: "visibility", title: "Lado a lado", description: "O original e o resultado tocam um ao lado do outro." },
    { icon: "lock", title: "Sem upload", description: "Invertido inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como inverter um GIF?", a: "Adicione o GIF, deixe Inverter selecionado e clique em Inverter GIF. Os quadros tocam do último para o primeiro." },
    { q: "O que é um GIF bumerangue?", a: "Um GIF que toca para a frente e depois para trás, sem parar, então o loop nunca salta de volta para o início." },
    { q: "O GIF invertido mantém a velocidade?", a: "Sim. Cada quadro mantém a sua duração; só a ordem muda." },
    { q: "Por que o meu bumerangue ficou mais longo?", a: "A maioria dos quadros toca duas vezes — uma indo, outra voltando —, então o bumerangue dura quase o dobro." },
    { q: "Inverter diminui a qualidade?", a: "Não. Os quadros não mudam, e as cores originais são reaproveitadas sempre que cabem numa paleta." },
    { q: "O arquivo fica maior?", a: "Um GIF invertido fica mais ou menos do mesmo tamanho. Um bumerangue fica maior, porque quase todos os quadros são guardados duas vezes." },
    { q: "A transparência é mantida?", a: "Sim. GIFs transparentes continuam transparentes." },
    { q: "Dá para inverter um vídeo?", a: "Converta o trecho com o Vídeo para GIF primeiro e depois inverta o GIF aqui." },
    { q: "Dá para fazer bumerangue de uma imagem parada?", a: "Não — o bumerangue precisa de movimento. Um GIF com um só quadro não tem o que inverter." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. O GIF é invertido inteiramente no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular. GIFs longos demoram um pouco mais." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Qual a duração ideal para um bumerangue?", a: "De um a três segundos. Trechos mais longos ficam lentos na volta e pesados." },
  ],

  security:
    "Seu GIF é invertido inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
