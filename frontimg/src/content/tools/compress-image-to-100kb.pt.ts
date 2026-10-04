import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-100kb (variant of compress-image, 100 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-100kb",
  locale: "pt",
  name: "Comprimir imagem para 100 KB",
  tagline:
    "Comprima fotos e documentos digitalizados para menos de 100 KB — para inscrições, cadastros, envio de documentos e e-mail. A maior qualidade que cabe, várias imagens de uma vez, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 100 KB Online — Grátis e em Lote | oMyImage",
  metaDescription:
    "Comprima fotos JPG, PNG ou WEBP para menos de 100 KB online e grátis. A maior qualidade que cabe no limite, várias imagens de uma vez, processadas no seu navegador.",

  intro:
    "100 KB é o limite que aparece em candidaturas a vagas, matrículas, cadastros em bancos e lojas, envio de documentos de identidade e em qualquer sistema que quer uma foto ou um documento digitalizado, mas não o arquivo inteiro da câmera. É um orçamento confortável: um retrato ou uma página de texto cabem nele sem estrago visível, desde que o arquivo não desperdice bytes com pixels que ninguém vai ver. Adicione as imagens e cada uma volta como JPG abaixo de 100 KB, com a melhor qualidade que o limite permite.",

  sections: [
    {
      heading: "Em 100 KB a qualidade deixa de ser problema",
      id: "comfortable",
      body: [
        "Abaixo de uns 50 KB, a compressão é um meio-termo visível. Em 100 KB, quase nunca: um retrato cabe com uns 900 × 1200 pixels e boa qualidade, muito mais do que um formulário exibe e o suficiente para imprimir uma 3×4.",
        "Por isso o primeiro passo da ferramenta é sempre baixar um pouco a qualidade e manter os seus pixels. Na maioria das fotos de celular ela também precisa reduzir as dimensões — para algo entre 1000 e 1500 pixels no lado maior — porque uma foto de 12 megapixels carrega mais detalhe do que 100 KB conseguem guardar com qualquer qualidade razoável.",
      ],
    },
    {
      heading: "Documentos digitalizados abaixo de 100 KB",
      id: "documents",
      body: [
        "Formulários com limite de 100 KB muitas vezes querem um documento em vez de um rosto: RG, CNH, comprovante de residência, histórico escolar, certificado. A foto de uma página tirada com o celular é quase toda papel branco, e papel com luz irregular é surpreendentemente caro de guardar, porque cada sombra é um detalhe que o JPG precisa descrever.",
        "Fotografe a página reta, com luz do dia uniforme, ocupando a tela toda, e recorte a mesa em volta. Para páginas só com texto, converter para preto e branco com a ferramenta Imagem em preto e branco antes de comprimir deixa mais dos 100 KB para o texto ficar nítido. Se o formulário quer PDF em vez de imagem, comprima a foto aqui primeiro e depois transforme em PDF com Imagem para PDF.",
      ],
    },
    {
      heading: "Várias fotos em um só e-mail",
      id: "email",
      body: [
        "Fotos de celular com 3–5 MB cada fazem um e-mail com dez imagens ser recusado, ou chegar ao destinatário como um download de 40 MB. Com 100 KB cada, as mesmas dez fotos somam cerca de 1 MB — leve o bastante para qualquer provedor e ainda perfeitamente nítido na tela.",
        "Adicione o conjunto inteiro de uma vez: cada imagem é comprimida separadamente para o mesmo limite, e o download em ZIP mantém tudo junto.",
      ],
    },
    {
      heading: "Documento com foto e selfie de verificação abaixo de 100 KB",
      id: "kyc",
      body: [
        "Bancos digitais, carteiras, operadoras e aplicativos de entrega que verificam identidade online costumam pedir a foto do RG ou da CNH abaixo de um limite como 100 KB, e recusam qualquer imagem que uma pessoa ou um sistema não consiga ler. O que faz um documento ser recusado quase nunca é o tamanho do arquivo: reflexo no plástico, um canto cortado, o documento ocupando só uma parte pequena da foto ou um número borrado.",
        "Apoie o documento sobre uma superfície escura e lisa, fotografe bem de cima e sem flash e recorte nas bordas antes de comprimir. Um documento recortado rente cabe com folga em 100 KB com todos os números nítidos, porque o espaço vai para o documento e não para a mesa em volta.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 100 KB",
  steps: [
    { title: "Adicione imagens ou documentos", description: "Selecione ou arraste arquivos JPG, PNG ou WEBP — fotos, páginas digitalizadas ou prints." },
    { title: "Comprima para menos de 100 KB", description: "O limite de 100 KB já vem definido; mude o número se o formulário aceitar outro tamanho." },
    { title: "Baixe", description: "Todos os arquivos voltam abaixo de 100 KB; baixe um por um ou todos juntos em um ZIP." },
  ],

  features: [
    { icon: "description", title: "Fotos e documentos", description: "Funciona tão bem com um RG ou certificado digitalizado quanto com um retrato — os dois cabem com folga em 100 KB." },
    { icon: "burst_mode", title: "O conjunto inteiro de uma vez", description: "Comprima todas as fotos e documentos de uma inscrição de uma vez e baixe tudo em um ZIP." },
    { icon: "lock", title: "Documentos ficam no aparelho", description: "RG, CNH e certificados são comprimidos no navegador e nunca são enviados a lugar nenhum." },
  ],

  faqs: [
    { q: "Como diminuir uma foto para 100 KB?", a: "Adicione a foto e clique em Comprimir — o limite de 100 KB já está definido. Você recebe um JPG abaixo de 100 KB com a maior qualidade que cabe." },
    { q: "100 KB é suficiente para uma foto 3×4?", a: "Com sobra. Uma foto 3×4 precisa de poucas centenas de pixels, o que cabe em 100 KB com qualidade muito alta." },
    { q: "Como deixar um documento digitalizado abaixo de 100 KB?", a: "Fotografe ou digitalize a página reta e bem iluminada, recorte nas bordas do papel e comprima aqui. Para páginas só com texto, converter para preto e branco antes deixa o texto mais nítido." },
    { q: "Quanto é 100 KB em MB?", a: "0,1 MB. O arquivo fica abaixo de 100.000 bytes, então também passa em formulários que contam 1.024 bytes por quilobyte." },
    { q: "Dá para comprimir uma foto HEIC do iPhone para 100 KB?", a: "Converta para JPG primeiro com HEIC para JPG e depois comprima o JPG aqui. Esta ferramenta lê JPG, PNG e WEBP." },
    { q: "O resultado pode continuar em PNG?", a: "Não — o PNG não consegue trocar qualidade por tamanho, então não dá para mirar um limite exato com ele. Você recebe um JPG, ou um WEBP se escolher e o site aceitar." },
    { q: "Por que a ferramenta deixou minha foto mais estreita?", a: "Porque mesmo com qualidade baixa a foto em tamanho original passava de 100 KB. A ferramenta reduziu as dimensões só o necessário para caber, o que fica bem melhor do que esmagar a qualidade." },
  ],

  security:
    "Suas fotos e documentos ficam no seu aparelho. Tudo é comprimido no navegador — sem envio, sem cópia em servidor, sem nada guardado.",
};

export default content;
