import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/jpg-para-pdf-ate-100kb (variant of image-to-pdf, 100 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-100kb",
  locale: "pt",
  name: "JPG para PDF até 100 KB",
  tagline:
    "Transforme a foto ou a digitalização de um documento num PDF com menos de 100 KB — para formulários com os limites de PDF mais apertados. As imagens são comprimidas só o necessário para o arquivo inteiro caber, no seu navegador, sem enviar nada.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "JPG para PDF até 100 KB Online — Grátis, Sem Envio | oMyImage",
  metaDescription:
    "Converta fotos e documentos digitalizados em PDF com menos de 100 KB online e grátis — para formulários com limites rígidos. Comprime só o necessário, sem envio.",

  intro:
    "Formulários que pedem um documento \"em PDF, no máximo 100 KB\" — um diploma, o RG, um comprovante de residência, um histórico — quase sempre querem uma página só. Uma foto de celular dessa página já tem de 3 a 5 MB, então simplesmente colocá-la num PDF gera um arquivo trinta a cinquenta vezes maior do que o permitido. Esta página monta o PDF e, se ele passar de 100 KB, recomprime a imagem dentro dele só o bastante para o arquivo inteiro caber, mantendo o texto tão nítido quanto o limite permite.",

  sections: [
    {
      heading: "O que cabe num PDF de 100 KB",
      id: "what-fits",
      body: [
        "Uma página A4 cabe com folga: com 100 KB, uma página inteira de texto digitado mantém cerca de 800 × 1100 pixels com boa qualidade, e um diploma com mais espaço em branco mantém mais — o bastante para ler texto impresso, carimbos e assinaturas no zoom normal. A estrutura do PDF em si ocupa só alguns kilobytes, então quase todo o limite vai para a imagem da página.",
        "Duas páginas também cabem, com menos resolução cada uma; três ou mais começam a borrar letras pequenas. Se um formulário pedir um documento longo em 100 KB, vale conferir se ele aceita um arquivo por página.",
      ],
    },
    {
      heading: "Preparando a página",
      id: "prepare",
      body: [
        "Coloque o documento deitado numa superfície escura, fotografe bem de cima com luz do dia e recorte tudo o que não for a página. Uma página limpa e com luz uniforme comprime muito melhor do que uma com sombra, e o pedaço de mesa em volta é byte desperdiçado.",
        "Para um documento simples, digitado ou impresso, convertê-lo antes para preto e branco com a ferramenta Imagem em preto e branco deixa o texto bem mais nítido em 100 KB. Mantenha coloridos os documentos com carimbos e selos coloridos.",
      ],
    },
    {
      heading: "Tamanho da página e layout",
      id: "layout",
      body: [
        "A4 é o padrão e serve para a maioria dos documentos. Ajustar à imagem faz cada página ter o formato da foto, sem margens, o que combina com documentos de identidade e recibos. O tamanho da página quase não muda o tamanho do arquivo — quase todo o PDF é a imagem —, então escolha o que ficar melhor.",
        "O limite pode ser alterado: digite 99 para formulários que reclamam de qualquer coisa perto de 100 KB, ou outro número.",
      ],
    },
    {
      heading: "Quando não cabe",
      id: "too-big",
      body: [
        "Se o documento tiver muitas páginas, 100 KB pode ser pouco demais para mantê-las legíveis. A ferramenta ainda gera o menor PDF possível e avisa se não conseguiu ficar abaixo do limite. Nesse caso, use a página de 200 KB ou 300 KB, se o formulário permitir, ou faça um PDF por página.",
      ],
    },
    {
      heading: "Digitalizar ou fotografar?",
      id: "scan-or-photo",
      body: [
        "Uma digitalização em scanner de mesa é o começo mais limpo: luz uniforme, página bem plana e fundo branco, e tudo isso comprime bem. Digitalizar com 150–200 DPI é mais que suficiente para um PDF de 100 KB — configurações maiores só acrescentam pixels que vão sair de novo para caber.",
        "O celular funciona quase tão bem se você fotografar a página com luz do dia, bem de cima e sem flash. Aplicativos de digitalização ajudam ainda mais ao endireitar a página e branquear o papel; exporte o resultado em JPG e adicione aqui.",
      ],
    },
  ],

  howToTitle: "Como converter JPG em PDF até 100 KB",
  steps: [
    { title: "Adicione as imagens da página", description: "Adicione a foto ou digitalização do documento — JPG, PNG, WEBP ou GIF." },
    { title: "Confira o layout", description: "Escolha o tamanho e a ordem das páginas; o limite de 100 KB já vem definido." },
    { title: "Crie o PDF", description: "As imagens são comprimidas só o necessário, e o PDF é baixado abaixo de 100 KB." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Limite no arquivo inteiro", description: "O PDF final fica abaixo de 100 KB — não só cada imagem dentro dele." },
    { icon: "description", title: "Páginas legíveis", description: "As imagens são comprimidas só o que o limite exige, então o texto continua nítido." },
    { icon: "lock", title: "Nada é enviado", description: "Os seus documentos viram PDF no seu navegador." },
  ],

  faqs: [
    { q: "Como converter um JPG em PDF com menos de 100 KB?", a: "Adicione a imagem, confira o tamanho da página e clique em Criar PDF. O limite de 100 KB já vem definido; a imagem é comprimida só o necessário." },
    { q: "O meu documento vai continuar legível?", a: "Para uma ou duas páginas, vai — com 100 KB uma página A4 mantém detalhe suficiente para texto impresso, carimbos e assinaturas." },
    { q: "Dá para colocar várias páginas num PDF de 100 KB?", a: "Duas páginas funcionam bem; mais páginas ficam com menos pixels cada. Para documentos longos, use um limite maior se o formulário permitir." },
    { q: "O tamanho da página muda o tamanho do arquivo?", a: "Quase nada. Praticamente todo o PDF é a imagem; o tamanho da página só muda como ela é posicionada." },
    { q: "E se o PDF já ficar abaixo de 100 KB?", a: "Se as imagens já formam um PDF abaixo de 100 KB, nada é recomprimido e o PDF é montado com elas como estão." },
    { q: "100 KB é o mesmo que 0,1 MB?", a: "Sim, 100 KB são 100.000 bytes. O PDF também passa em formulários que contam 1 KB como 1.024 bytes." },
    { q: "Os meus documentos são enviados?", a: "Não. O PDF é feito inteiramente no seu navegador." },
    { q: "Devo digitalizar ou fotografar o documento?", a: "Os dois funcionam. A digitalização é um pouco mais limpa; uma foto de celular com luz do dia, bem de cima e sem flash, fica muito próxima." },
  ],

  security:
    "As imagens do seu documento são comprimidas e montadas em PDF no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
