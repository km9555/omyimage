import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/jpg-para-pdf-ate-300kb (variant of image-to-pdf, 300 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-300kb",
  locale: "pt",
  name: "JPG para PDF até 300 KB",
  tagline:
    "Transforme várias páginas de fotos ou digitalizações num PDF com menos de 300 KB, com carimbos, selos e fotos coloridas ainda nítidos. Para portais de inscrição e de conferência de documentos. No navegador, sem enviar nada.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "JPG para PDF até 300 KB — Grátis, Documentos de Várias Páginas | oMyImage",
  metaDescription:
    "Converta várias páginas JPG num PDF com menos de 300 KB online e grátis — documentos coloridos, carimbos e fotos continuam nítidos. No navegador, sem envio.",

  intro:
    "Um limite de 300 KB para PDF normalmente significa um documento mais completo: três a cinco páginas, muitas vezes coloridas — um diploma com selo, um formulário preenchido com foto colada, um conjunto de recibos. Esta página monta as suas imagens num PDF só e, se o resultado passar de 300 KB, recomprime-as só o bastante para o arquivo inteiro caber. Com 300 KB para dividir, as cores ficam fiéis e os carimbos continuam legíveis.",

  sections: [
    {
      heading: "Cores que continuam legíveis",
      id: "colour",
      body: [
        "Carimbos e selos coloridos são o que torna muitos documentos válidos, e costumam ser a primeira coisa a borrar quando um arquivo é muito comprimido. Com 300 KB, um documento colorido de três páginas mantém cerca de 800 × 1100 pixels por página, então carimbos azuis, selos vermelhos e uma foto colada continuam bem visíveis.",
        "Se parte do documento é texto digitado simples e parte é colorida, mantenha tudo colorido — trocar uma página para preto e branco economiza menos do que parece, porque o limite é dividido entre as páginas de qualquer forma.",
      ],
    },
    {
      heading: "Quantas páginas cabem",
      id: "pages",
      body: [
        "Três páginas A4 ficam bem legíveis com 300 KB, e quatro ou cinco funcionam para documentos com letra grande ou bastante espaço em branco. O tamanho é dividido pela área de cada imagem, então uma digitalização grande recebe mais do limite que um recibo pequeno, e todas as páginas saem com nitidez parecida.",
        "Para seis páginas ou mais, considere a página de 500 KB se o portal permitir, ou divida o documento em dois PDFs.",
      ],
    },
    {
      heading: "Vários itens pequenos numa página",
      id: "multi-up",
      body: [
        "Recibos, documentos de identidade e certificados pequenos desperdiçam espaço quando cada um ocupa uma página A4 inteira. Escolha 2 ou 4 em Imagens por página e eles são organizados juntos. O PDF fica mais curto e fácil de conferir, e cada item continua guardado na sua própria resolução.",
      ],
    },
    {
      heading: "Uma última olhada antes de enviar",
      id: "check",
      body: [
        "Abra o PDF e dê zoom em cada página. Confira se as páginas estão na ordem certa, se nada foi cortado e se todo carimbo e assinatura dá para ler. Se uma página estiver bem pior que as outras, tire aquela foto de novo com luz do dia e monte o PDF outra vez.",
      ],
    },
    {
      heading: "Formulários com foto colada",
      id: "pasted-photo",
      body: [
        "Um formulário de inscrição preenchido muitas vezes traz uma foto 3x4 colada num quadro, e o portal confere se o rosto é reconhecível. Com 300 KB, um formulário de três páginas mantém a foto colada nítida o bastante para isso, desde que a página tenha sido bem fotografada.",
        "Fotografe o formulário deitado, com luz do dia e sem flash, para a foto brilhante não refletir a luz. Se o quadro da foto sair com reflexo, incline um pouco a folha para longe da janela e fotografe de novo.",
      ],
    },
    {
      heading: "Nome do arquivo e envio",
      id: "upload",
      body: [
        "Portais costumam recusar nomes de arquivo com espaços ou caracteres especiais. Dê ao PDF um nome curto, como formulario_inscricao.pdf, antes de enviar, e guarde as fotos originais caso precise montar o PDF de novo com outro limite.",
      ],
    },
  ],

  howToTitle: "Como converter JPG em PDF até 300 KB",
  steps: [
    { title: "Adicione as páginas", description: "Adicione fotos ou digitalizações de cada página — JPG, PNG, WEBP ou GIF." },
    { title: "Organize", description: "Defina a ordem, o tamanho da página e as imagens por página; o limite de 300 KB já vem definido." },
    { title: "Crie o PDF", description: "Baixe um PDF abaixo de 300 KB, com cores e carimbos nítidos." },
  ],

  features: [
    { icon: "palette", title: "Cores preservadas", description: "Carimbos, selos e fotos continuam nítidos e coloridos com 300 KB." },
    { icon: "grid_view", title: "Vários itens por página", description: "Dois ou quatro recibos ou documentos numa página, cada um na sua resolução." },
    { icon: "lock", title: "Nada é enviado", description: "Os seus documentos são comprimidos e juntados no navegador." },
  ],

  faqs: [
    { q: "Como fazer um PDF com menos de 300 KB a partir de imagens JPG?", a: "Adicione as imagens, organize e clique em Criar PDF. O limite de 300 KB já vem definido; as imagens são comprimidas só o necessário." },
    { q: "Quantas páginas pode ter um PDF de 300 KB?", a: "Três páginas A4 ficam legíveis em cores; quatro ou cinco funcionam quando a letra é grande. Documentos mais longos também cabem, com menos detalhe por página." },
    { q: "Os carimbos coloridos continuam visíveis?", a: "Continuam. Com 300 KB, um documento colorido mantém detalhe suficiente para carimbos, selos e fotos coladas." },
    { q: "Dá para colocar dois recibos numa página?", a: "Dá. Escolha 2 ou 4 em Imagens por página." },
    { q: "Por que uma página ficou mais borrada que as outras?", a: "Geralmente aquela foto foi tirada com menos luz. Fotografe de novo com luz do dia e monte o PDF outra vez." },
    { q: "300 KB é o mesmo que 0,3 MB?", a: "Sim, 300 KB são 300.000 bytes. O PDF também passa em portais que contam 1 KB como 1.024 bytes." },
    { q: "Os meus arquivos são enviados?", a: "Não. Tudo acontece no seu navegador." },
    { q: "A foto colada no formulário continua reconhecível?", a: "Continua, com 300 KB para um formulário de até três ou quatro páginas — desde que ele tenha sido fotografado sem reflexo na foto." },
  ],

  security:
    "As imagens dos seus documentos são comprimidas e montadas em PDF no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
