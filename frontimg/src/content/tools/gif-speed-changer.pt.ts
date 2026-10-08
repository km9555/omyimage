import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.pt";

/** Portuguese copy for /pt/alterar-velocidade-gif. */
const content: ToolPageContent = {
  toolId: "gif-speed-changer",
  locale: "pt",
  name: "Alterar velocidade do GIF",
  tagline:
    "Acelere ou desacelere um GIF animado, ou dê a mesma duração a todos os quadros. Quase sempre só o tempo muda — cada pixel continua como estava. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Alterar Velocidade do GIF Online — Acelerar ou Desacelerar | oMyImage",
  metaDescription:
    "Mude a velocidade de um GIF online e grátis: deixe o GIF animado mais rápido ou mais lento, ou dê a mesma duração a todos os quadros. Quase sempre sem mexer num pixel. No navegador, sem upload.",

  intro:
    "Um GIF que se arrasta faz a piada chegar atrasada; um que corre demais deixa um tutorial impossível de acompanhar. O Alterar velocidade do GIF do oMyImage corrige o ritmo sem refazer a animação. Escolha uma velocidade como 2× ou 0,5×, ou digite a sua, e veja a nova duração antes de salvar. Quando só o tempo precisa mudar — o que acontece na maioria das vezes —, a ferramenta reescreve a duração de cada quadro e não toca nas imagens, então o GIF mantém exatamente a mesma qualidade e o mesmo tamanho.",

  sections: [
    {
      heading: "Como funciona a velocidade de um GIF",
      id: "how",
      body: [
        "O GIF não tem taxa de quadros. Cada quadro carrega a sua própria duração, guardada em centésimos de segundo, e o player mostra o quadro por esse tempo antes de passar ao próximo. É por isso que um GIF pode parar no ponto alto da piada e correr no resto — e por isso mudar a velocidade significa mudar todas essas durações.",
        "Acelerar 2× corta cada duração pela metade, e desacelerar para 0,5× dobra todas, então o ritmo do original — com as suas pausas — é mantido, só que mais rápido ou mais lento.",
      ],
    },
    {
      heading: "Por velocidade ou por duração do quadro",
      id: "modes",
      body: [
        "Por velocidade muda a escala do tempo do próprio GIF. Os botões cobrem as escolhas mais comuns, de 0,25× a 3×, e o campo aceita qualquer valor de 0,1× a 10×. A nova duração aparece antes de você clicar, então você sabe exatamente quanto tempo o resultado vai tocar.",
        "Duração do quadro dá a mesma duração a todos os quadros, em milissegundos: 100 ms são 10 quadros por segundo, 50 ms são 20 e 40 ms são 25. Use para fazer um GIF irregular tocar de forma fluida ou para ajustar um GIF a um ritmo definido. O número de quadros por segundo se atualiza enquanto você digita.",
      ],
    },
    {
      heading: "O limite de velocidade dos navegadores",
      id: "limit",
      body: [
        "Os navegadores seguem uma regra antiga: um quadro de GIF com duração de 0,01 segundo ou menos é mostrado por 0,1 segundo. Ela protege contra GIFs gravados com duração zero, mas faz um GIF acelerado demais tocar mais devagar, não mais rápido. A menor duração que toca como está gravada é 0,02 segundo — 50 quadros por segundo.",
        "Esta ferramenta conhece a regra. Quando uma velocidade empurraria quadros para menos de 0,02 segundo, quadros vizinhos são unidos até cada um ter duração suficiente, e a ferramenta mostra quantos. O GIF então toca na velocidade escolhida, com menos quadros — exatamente o que um player mostraria nesse ritmo de qualquer jeito.",
      ],
    },
    {
      heading: "Sem perdas sempre que possível",
      id: "lossless",
      body: [
        "Quando todos os quadros ficam e só as durações mudam, o GIF não é recodificado. Os valores de duração dentro do arquivo são reescritos e todo o resto — os pixels, a paleta, a compressão — continua igual byte a byte. O tamanho do arquivo praticamente não muda, e o processo leva um instante mesmo com GIFs longos.",
        "Só quando quadros precisam ser unidos o GIF é recodificado. Mesmo assim as cores dele são reaproveitadas sempre que cabem numa paleta, então os quadros continuam com a mesma aparência.",
      ],
    },
    {
      heading: "Velocidades que funcionam",
      id: "tips",
      body: [
        "GIFs de reação e memes costumam ficar melhores um pouco mais rápidos, entre 1,25× e 1,5×. Tutoriais e gravações de tela podem precisar de 0,75× ou 0,5× para quem assiste acompanhar cada passo. Câmera lenta de esporte, bichos e respingos fica melhor em 0,5× ou menos quando o original tem muitos quadros; um GIF com poucos quadros fica travado ao desacelerar, porque nada é criado entre eles.",
      ],
    },
    {
      heading: "GIFs para WhatsApp e redes",
      id: "social",
      body: [
        "Um GIF lento demais no WhatsApp ou no Telegram cansa antes do fim; um rápido demais passa sem ninguém entender. Ajuste a velocidade aqui antes de mandar: como o arquivo continua com o mesmo tamanho, ele chega tão rápido quanto o original e é aceito nos mesmos lugares.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "O GIF é lido e reescrito inteiramente no seu navegador. Ele nunca é enviado e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como mudar a velocidade de um GIF",
  steps: [
    { title: "Adicione o GIF", description: "Selecione um GIF animado do computador ou do celular." },
    { title: "Defina a velocidade", description: "Escolha uma velocidade como 2× ou 0,5×, ou dê a mesma duração a todos os quadros." },
    { title: "Aplique e baixe", description: "Clique em Alterar velocidade, compare com o original e baixe o resultado." },
  ],

  features: [
    { icon: "speed", title: "Mais rápido ou mais lento", description: "De 0,1× a 10×, ou uma duração única para todos os quadros." },
    { icon: "check", title: "Pixels intactos", description: "Só o tempo é reescrito quando todos os quadros ficam." },
    { icon: "lock", title: "Sem upload", description: "Alterado inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como acelerar um GIF?", a: "Adicione o GIF, escolha uma velocidade acima de 1×, como 1,5× ou 2×, e clique em Alterar velocidade." },
    { q: "Como deixar um GIF mais lento?", a: "Escolha uma velocidade abaixo de 1×, como 0,75× ou 0,5×. Cada quadro fica mais tempo na tela." },
    { q: "Mudar a velocidade diminui a qualidade?", a: "Normalmente nada: quando todos os quadros ficam, só as durações são reescritas e os pixels continuam iguais." },
    { q: "Por que o meu GIF não fica mais rápido?", a: "Os navegadores mostram quadros com menos de 0,02 segundo como 0,1 segundo. Passando disso, a ferramenta une quadros para o GIF tocar na velocidade escolhida." },
    { q: "O que é a duração do quadro?", a: "Quanto tempo cada quadro fica na tela. 100 ms são 10 quadros por segundo; 50 ms são 20." },
    { q: "Dá para dar a mesma duração a todos os quadros?", a: "Sim. Escolha Duração do quadro e digite em milissegundos; o mínimo é 20 ms." },
    { q: "O tamanho do arquivo muda?", a: "Quase nada quando só o tempo muda. Quando quadros são unidos, o GIF fica menor." },
    { q: "A transparência é mantida?", a: "Sim. A transparência não é tocada." },
    { q: "Por que meu GIF desacelerado ficou travado?", a: "Desacelerar mostra os mesmos quadros por mais tempo; não cria quadros entre eles. GIFs com muitos quadros desaceleram com mais suavidade." },
    { q: "Meu GIF é enviado para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "Quanto tempo leva?", a: "Um instante quando só o tempo muda. Quando quadros são unidos, alguns segundos, com o progresso na tela." },
  ],

  security:
    "A velocidade do seu GIF é alterada inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
