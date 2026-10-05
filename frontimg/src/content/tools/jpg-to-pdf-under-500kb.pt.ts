import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/jpg-para-pdf-ate-500kb (variant of image-to-pdf, 500 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-500kb",
  locale: "pt",
  name: "JPG para PDF até 500 KB",
  tagline:
    "Junte muitas fotos ou digitalizações num PDF com menos de 500 KB — inscrições de várias páginas, recibos, relatórios e trabalhos manuscritos — prontos para enviar ou mandar por e-mail. Páginas legíveis, no navegador, sem enviar nada.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "JPG para PDF até 500 KB Online — Documentos Longos, Grátis | oMyImage",
  metaDescription:
    "Junte várias páginas JPG num PDF com menos de 500 KB online e grátis — inscrições, recibos e relatórios prontos para enviar ou mandar por e-mail. Privado.",

  intro:
    "500 KB é o limite comum quando um portal ou um setor quer o documento inteiro de uma vez: uma inscrição de dez páginas, um mês de recibos, um trabalho manuscrito, um relatório com fotos. Montadas direto do celular, essas páginas geram um PDF de 20 ou 30 MB. Esta página monta o PDF e, se ele passar de 500 KB, recomprime as imagens só o bastante para o arquivo inteiro caber, deixando cada página tão legível quanto o limite permite.",

  sections: [
    {
      heading: "Documentos longos num arquivo só",
      id: "long",
      body: [
        "Com 500 KB, cinco páginas de texto digitado mantêm cerca de 800 × 1100 pixels cada, e dez páginas cerca de 600 × 800 — o bastante para letra de tamanho normal e manuscrita continuarem legíveis no zoom normal. O limite é dividido pela área de cada imagem, então as páginas saem por igual.",
        "Até umas dez páginas o resultado continua confortável de ler; acima disso, divida o documento em dois PDFs ou pergunte se o portal aceita um arquivo maior.",
      ],
    },
    {
      heading: "Recibos e comprovantes compridos",
      id: "receipts",
      body: [
        "Um cupom fiscal é comprido e estreito, e uma página A4 deixaria a maior parte vazia. Escolha Ajustar à imagem como tamanho de página e cada recibo vira uma página exatamente no seu formato — fácil de ler no celular e fácil de conferir para quem cuida das contas.",
        "Vários recibos também podem dividir uma página A4: escolha 2 ou 4 em Imagens por página.",
      ],
    },
    {
      heading: "Mandando o PDF por e-mail",
      id: "email",
      body: [
        "A maioria dos serviços de e-mail limita os anexos a cerca de 20–25 MB por mensagem, e muitas caixas corporativas aceitam bem menos. Um PDF abaixo de 500 KB passa em qualquer lugar, abre na hora no celular e não lota a caixa de quem recebe — e ainda imprime legível em A4.",
      ],
    },
    {
      heading: "Guarde os originais",
      id: "originals",
      body: [
        "O PDF comprimido é uma cópia para enviar. Guarde as fotos originais: se alguém pedir depois uma versão mais nítida de uma página, ou outro limite, você faz a partir dos originais, e não do PDF comprimido.",
      ],
    },
    {
      heading: "Trabalhos e páginas manuscritas",
      id: "assignments",
      body: [
        "Faculdades e escolas muitas vezes recebem trabalhos manuscritos num PDF só, com limite de tamanho. Fotografe cada página com luz do dia, bem de cima, e adicione as fotos na ordem das páginas — a prévia mostra todas antes de você criar o arquivo.",
        "Caneta escura fica muito mais legível que lápis depois da compressão. Se uma página sair fraca, fotografe só ela de novo; não precisa recomeçar o resto.",
      ],
    },
    {
      heading: "Fotos de tamanhos diferentes",
      id: "mixed",
      body: [
        "Páginas fotografadas a distâncias diferentes, ou com celulares diferentes, ficam com tamanhos em pixels bem diferentes. Em páginas A4 ou Carta, todas são ajustadas à mesma página, e o limite é dividido pela área de cada foto, então uma foto enorme não espreme as outras.",
      ],
    },
  ],

  howToTitle: "Como converter JPG em PDF até 500 KB",
  steps: [
    { title: "Adicione todas as páginas", description: "Adicione fotos ou digitalizações de cada página — JPG, PNG, WEBP ou GIF." },
    { title: "Ordene e organize", description: "Organize as páginas e escolha o tamanho; o limite de 500 KB já vem definido." },
    { title: "Crie o PDF", description: "Baixe um PDF abaixo de 500 KB, pronto para enviar ou mandar por e-mail." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Muitas páginas, um arquivo pequeno", description: "Até dez páginas num único PDF abaixo de 500 KB." },
    { icon: "receipt_long", title: "Recibos cabem", description: "Páginas no formato da imagem para recibos compridos, ou vários por página A4." },
    { icon: "lock", title: "Privado", description: "As páginas são comprimidas e juntadas no navegador, nunca enviadas." },
  ],

  faqs: [
    { q: "Como converter JPG em PDF com menos de 500 KB?", a: "Adicione todas as imagens, coloque em ordem e clique em Criar PDF. O limite de 500 KB já vem definido; as imagens são comprimidas só o necessário." },
    { q: "Quantas páginas cabem num PDF de 500 KB?", a: "Cinco páginas ficam bem legíveis e dez funcionam para letra de tamanho normal. Acima disso, divida o documento." },
    { q: "Como fazer um PDF de recibos?", a: "Adicione as fotos dos recibos e escolha Ajustar à imagem como tamanho de página, ou 2–4 imagens por página A4." },
    { q: "Dá para mandar um PDF de 500 KB por e-mail?", a: "Dá, por qualquer serviço de e-mail — fica muito abaixo de todos os limites de anexo." },
    { q: "Letra manuscrita continua legível?", a: "Continua, para até umas dez páginas de letra normal. Fotografe cada página com luz do dia para o resultado mais nítido." },
    { q: "500 KB é o mesmo que 0,5 MB?", a: "Sim, 500 KB são 500.000 bytes. O PDF também passa em portais que contam 1 KB como 1.024 bytes." },
    { q: "As minhas páginas são enviadas?", a: "Não. O PDF é feito inteiramente no seu navegador." },
    { q: "Dá para juntar fotos de celulares diferentes?", a: "Dá. Cada foto é ajustada ao mesmo tamanho de página, seja qual for a resolução, e o limite é dividido de forma justa entre elas." },
    { q: "Dá para misturar digitalizações e capturas de tela no mesmo PDF?", a: "Dá. Adicione qualquer JPG, PNG, WEBP ou GIF na ordem desejada — cada imagem vira uma página, e o limite é dividido entre todas." },
  ],

  security:
    "As imagens das suas páginas são comprimidas e montadas em PDF no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
