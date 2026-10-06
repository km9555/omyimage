import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/jpg-para-pdf-ate-200kb (variant of image-to-pdf, 200 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-200kb",
  locale: "pt",
  name: "JPG para PDF até 200 KB",
  tagline:
    "Junte fotos ou digitalizações dos seus documentos num PDF com menos de 200 KB — diplomas, históricos, RG frente e verso — para portais de matrícula, bolsas e vagas. Páginas legíveis, no seu navegador, sem enviar nada.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "JPG para PDF até 200 KB Online — Grátis, Páginas Legíveis | oMyImage",
  metaDescription:
    "Converta imagens JPG num PDF com menos de 200 KB online e grátis — diplomas, históricos e RG para portais de matrícula e vagas. Páginas legíveis, sem envio.",

  intro:
    "200 KB é um limite de PDF muito comum em portais de matrícula, bolsas de estudo e processos seletivos, geralmente para um documento de duas ou três páginas: um histórico com o verso, um diploma e o anexo, os dois lados do RG. Esta página coloca as suas imagens num PDF só, na ordem que você escolher e, se o resultado passar de 200 KB, recomprime as imagens só o bastante para o arquivo inteiro caber — dividindo o limite para todas as páginas ficarem igualmente legíveis.",

  sections: [
    {
      heading: "Duas ou três páginas legíveis",
      id: "pages",
      body: [
        "Com 200 KB, duas páginas de texto digitado mantêm cerca de 800 × 1100 pixels cada, e três páginas cerca de 600 × 800 — bem legível com duas e suficiente com três quando a letra tem tamanho normal, como na maioria dos diplomas e formulários. O limite é dividido pela área de cada imagem, então uma página inteira digitalizada recebe mais do que um RG pequeno no mesmo documento, e nenhuma página fica muito mais borrada que as outras.",
        "Imagens que já cabem não são tocadas: se as suas páginas já formam um PDF abaixo de 200 KB como estão, o PDF é montado com elas sem mudança.",
      ],
    },
    {
      heading: "Colocando as páginas em ordem",
      id: "order",
      body: [
        "Adicione todas as imagens e use as setas de cada uma para colocá-las na ordem de leitura do documento — frente antes do verso, página um antes da dois. A prévia à esquerda mostra exatamente como as páginas vão sair.",
        "Dê nomes claros às fotos antes de adicionar, como historico-frente e historico-verso, e você percebe uma ordem errada num relance.",
      ],
    },
    {
      heading: "Os dois lados de um documento numa página",
      id: "both-sides",
      body: [
        "Portais costumam pedir a frente e o verso do RG ou da CNH numa única página de PDF. Adicione as duas fotos, escolha 2 em Imagens por página, e os dois lados vão para uma página A4, um embaixo do outro. Recorte cada foto no documento antes, para os dois lados saírem do mesmo tamanho.",
      ],
    },
    {
      heading: "Confira antes de enviar",
      id: "check",
      body: [
        "Abra o PDF baixado e dê zoom de 100% em cada página: nomes, números e datas precisam estar bem legíveis, e nada pode ficar cortado nas bordas. Se uma página estiver difícil de ler, tire a foto de novo com mais luz em vez de aumentar o limite — uma foto limpa comprime muito melhor do que uma escura.",
      ],
    },
    {
      heading: "Como o limite de 200 KB é atingido",
      id: "how",
      body: [
        "Primeiro o PDF é montado com as suas imagens como estão. Se ele já ficar abaixo de 200 KB, você recebe na hora e nada é recomprimido. Se não, a ferramenta mede quanto do arquivo são imagens e quanto é a estrutura do PDF, e divide o que sobra dos 200 KB entre as imagens pelo tamanho de cada uma.",
        "Cada imagem é então salva de novo com a maior qualidade de JPG que cabe na sua parte, e o PDF é remontado. Se o resultado ainda passar alguns bytes, as partes são apertadas e ela tenta mais uma vez — então o arquivo baixado fica sempre abaixo do limite, não só perto dele.",
      ],
    },
  ],

  howToTitle: "Como converter JPG em PDF até 200 KB",
  steps: [
    { title: "Adicione as imagens", description: "Adicione as fotos ou digitalizações de cada página — JPG, PNG, WEBP ou GIF." },
    { title: "Ordene e organize as páginas", description: "Use as setas para a ordem; escolha o tamanho da página e as imagens por página." },
    { title: "Crie o PDF", description: "O PDF é baixado abaixo de 200 KB, com as imagens comprimidas só o necessário." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Um PDF abaixo de 200 KB", description: "O arquivo inteiro fica abaixo do limite, com quantas páginas tiver." },
    { icon: "reorder", title: "Páginas na sua ordem", description: "Reordene as páginas e veja o resultado na prévia antes de criar o PDF." },
    { icon: "lock", title: "Privado", description: "Diplomas e documentos de identidade não saem do seu navegador." },
  ],

  faqs: [
    { q: "Como converter JPG em PDF com menos de 200 KB?", a: "Adicione as imagens, coloque em ordem e clique em Criar PDF. O limite de 200 KB já vem definido, e as imagens são comprimidas só o necessário." },
    { q: "Quantas páginas cabem num PDF de 200 KB?", a: "Duas páginas ficam bem legíveis; três funcionam para diplomas e formulários com letra de tamanho normal. Mais páginas também cabem, cada uma com menos detalhe." },
    { q: "Como colocar a frente e o verso do RG numa página só?", a: "Adicione as duas fotos e escolha 2 em Imagens por página. Os dois lados vão para a mesma página." },
    { q: "Todas as páginas ficam com a mesma qualidade?", a: "Ficam. O limite é dividido pela área de cada imagem, então todas as páginas são comprimidas por igual." },
    { q: "As minhas imagens já são pequenas — vão ser comprimidas mesmo assim?", a: "Não. Se elas já formam um PDF abaixo de 200 KB, são usadas exatamente como estão." },
    { q: "200 KB é o mesmo que 0,2 MB?", a: "Sim, 200 KB são 200.000 bytes. O PDF também passa em portais que contam 1 KB como 1.024 bytes." },
    { q: "Os meus documentos são enviados?", a: "Não. As imagens são comprimidas e o PDF é montado no seu navegador." },
    { q: "Por que demora alguns segundos?", a: "Cada imagem é comprimida para a sua parte do limite e o PDF é remontado, tudo no seu navegador. Fotos grandes de celular levam um pouco mais." },
  ],

  security:
    "As imagens dos seus documentos são comprimidas e montadas em PDF no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
