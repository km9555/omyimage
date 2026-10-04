import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-200kb (variant of compress-image, 200 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-200kb",
  locale: "pt",
  name: "Comprimir imagem para 200 KB",
  tagline:
    "Comprima fotos e documentos digitalizados para menos de 200 KB — para portais de inscrição, matrícula e vagas de emprego. Mantém a nitidez, funciona com o conjunto inteiro e não envia nenhum arquivo.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 200 KB Online — Fotos Nítidas, Grátis | oMyImage",
  metaDescription:
    "Comprima fotos e documentos para menos de 200 KB online e grátis — para inscrições, matrículas e vagas. A maior qualidade que cabe, em lote, sem enviar arquivos.",

  intro:
    "200 KB é o limite que portais de inscrição e matrícula, programas de bolsa, processos seletivos e muitos sites de vagas usam para cada arquivo anexado: uma foto, o RG digitalizado, um diploma, um histórico. É o dobro de um formulário de 100 KB e quatro vezes um de 50 KB, então a meta aqui não é só caber, é caber parecendo o original. Adicione o conjunto inteiro, e cada arquivo volta como JPG abaixo de 200 KB com a maior qualidade que cabe.",

  sections: [
    {
      heading: "Um limite folgado — aproveite",
      id: "generous",
      body: [
        "Com 200 KB, um retrato mantém algo como 1200 × 1600 pixels com qualidade alta: nítido o bastante para imprimir em 3×4 e para dar zoom na tela. Como a ferramenta procura a maior qualidade dentro do limite em vez de aplicar um ajuste fixo, uma foto limpa pode sair quase igual ao original, enquanto uma muito detalhada recebe um pouco mais de compressão.",
        "Se a sua foto já é um JPG bem comprimido abaixo de 200 KB, ela volta intacta — não há motivo para recomprimir um arquivo que o formulário já aceita.",
      ],
    },
    {
      heading: "Onde aparecem os limites de 200 KB",
      id: "where",
      body: [
        "Inscrições em concursos e processos seletivos, matrículas em escolas e universidades, programas de bolsa e muitos portais de emprego limitam cada envio entre 100 KB e 300 KB, e 200 KB é o número mais comum. Os mesmos formulários costumam pedir vários arquivos: foto, assinatura, documento de identidade, diploma ou histórico, às vezes comprovante de residência.",
        "Leia a exigência de cada campo separadamente — a foto pode aceitar 200 KB enquanto a assinatura aceita só 20 ou 50 KB. Esta página vem com 200 KB; as páginas de 20 KB e 50 KB, nos links acima, já vêm prontas para os campos menores.",
      ],
    },
    {
      heading: "Diplomas e documentos abaixo de 200 KB",
      id: "scans",
      body: [
        "Um diploma A4 fotografado com o celular tem 3–6 MB, a maior parte descrevendo a textura do papel e a luz irregular. Fotografe reto, com luz do dia, ocupando a tela toda, e recorte o fundo antes de comprimir; o resultado cabe em 200 KB com texto e carimbos bem legíveis.",
        "Carimbos e assinaturas coloridos num diploma são um bom motivo para mantê-lo colorido. Para páginas só com texto, converter para preto e branco antes com a ferramenta Imagem em preto e branco deixa ainda mais espaço para letras nítidas.",
      ],
    },
    {
      heading: "Confira cada arquivo antes de enviar",
      id: "check",
      body: [
        "A lista de resultados mostra o novo tamanho de cada arquivo e, quando foi preciso redimensionar, as novas dimensões. Abra um ou dois antes de enviar: o texto deve estar legível com 100% de zoom, o rosto não pode parecer borrado e um fundo colorido de foto deve continuar com uma cor só, sem manchas.",
        "Depois, renomeie os arquivos se o portal for exigente com nomes — muitos recusam espaços, parênteses ou acentos — e guarde os originais. Se mais tarde outro formulário pedir um limite diferente, comprima de novo a partir do original, e não da cópia de 200 KB, para a qualidade ser perdida uma vez só.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 200 KB",
  steps: [
    { title: "Adicione os arquivos", description: "Selecione ou arraste a foto e os documentos que você precisa enviar — JPG, PNG ou WEBP." },
    { title: "Comprima para menos de 200 KB", description: "O limite de 200 KB já vem definido; digite outro para um campo mais rígido." },
    { title: "Baixe o conjunto", description: "Todos os arquivos ficam abaixo de 200 KB; baixe um por um ou todos juntos em um ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Qualidade quase original", description: "Com 200 KB disponíveis, as fotos mantêm quase toda a resolução e o detalhe — a ferramenta usa o espaço todo." },
    { icon: "folder_zip", title: "A inscrição inteira de uma vez", description: "Foto, documento e diplomas em um só lote, cada um abaixo de 200 KB, baixados juntos em um ZIP." },
    { icon: "lock", title: "Sem envio de arquivos", description: "Documentos de identidade são comprimidos no seu navegador, não em um servidor." },
  ],

  faqs: [
    { q: "Como comprimir uma foto para 200 KB?", a: "Adicione a foto e clique em Comprimir — o limite de 200 KB já está definido. Você recebe um JPG abaixo de 200 KB com a melhor qualidade que cabe." },
    { q: "Como deixar a foto de um diploma abaixo de 200 KB?", a: "Fotografe o diploma reto e com luz uniforme, recorte tudo o que estiver em volta e comprima aqui. Texto e carimbos continuam legíveis bem abaixo de 200 KB." },
    { q: "Uma foto de 200 KB serve para imprimir?", a: "Para tamanhos de documento, como 3×4 e 5×7, sim — 200 KB guardam pixels de sobra. Para uma impressão grande, use a foto original." },
    { q: "Posso usar 199 KB ou 190 KB?", a: "Pode. Digite qualquer número no campo de tamanho; 200 KB é só o valor inicial." },
    { q: "E se a minha foto já tiver menos de 200 KB?", a: "Se ela já for um JPG abaixo do limite, você recebe o original intacto. Caso contrário, ela é convertida para JPG e fica abaixo de 200 KB." },
    { q: "JPG ou WEBP para um limite de 200 KB?", a: "JPG. Portais de inscrição e de vagas quase sempre aceitam JPG, enquanto muitos ainda recusam WEBP." },
    { q: "Comprimir muda as cores da foto?", a: "Nada visível nesse tamanho. O JPG guarda a cor com um pouco menos de precisão que o brilho, mas em 200 KB a diferença não aparece." },
  ],

  security:
    "Fotos, RG e diplomas são comprimidos no seu aparelho, dentro do navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
