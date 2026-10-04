import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-20kb (variant of compress-image, 20 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-20kb",
  locale: "pt",
  name: "Comprimir imagem para 20 KB",
  tagline:
    "Comprima uma foto ou uma assinatura digitalizada para menos de 20 KB — o limite que inscrições e cadastros costumam exigir para assinaturas e fotos pequenas. JPG nítido, em lote, sem enviar nada.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 20 KB — Foto e Assinatura, Grátis | oMyImage",
  metaDescription:
    "Comprima foto ou assinatura para menos de 20 KB online e grátis. JPG nítido que passa no limite de inscrições e cadastros, vários arquivos de uma vez, no navegador.",

  intro:
    "Vinte quilobytes é o limite mais apertado que a maioria das pessoas encontra, e quase sempre vem de um formulário de inscrição: uma assinatura digitalizada, uma impressão digital ou uma foto pequena para concurso, processo seletivo ou cadastro em banco. A foto de uma assinatura tirada com o celular pesa de 2 a 4 MB — duzentas vezes mais do que o permitido. Esta página leva qualquer JPG, PNG ou WEBP para baixo de 20 KB em um passo, mantendo a imagem tão nítida quanto esse limite permite, e funciona com vários arquivos de uma vez.",

  sections: [
    {
      heading: "Assinaturas: é para isso que serve o limite de 20 KB",
      id: "signatures",
      body: [
        "Inscrições de concursos públicos, processos seletivos, matrículas e alguns cadastros pedem a assinatura digitalizada, em geral com até 20 KB e em formato retangular, comprido e baixo. O limite é pequeno porque uma assinatura carrega pouquíssima informação: traços escuros sobre um fundo liso.",
        "Por isso mesmo, assinaturas são as imagens mais fáceis de comprimir bem. Uma assinatura limpa cabe em 20 KB com qualidade alta e num tamanho bem maior do que o formulário vai exibir. Se a sua sair borrada ou manchada, o problema quase sempre é a foto original, não a compressão — veja a próxima seção.",
      ],
    },
    {
      heading: "Como deixar a assinatura limpa abaixo de 20 KB",
      id: "clean-signature",
      body: [
        "Assine com caneta preta ou azul-escura em papel branco liso e fotografe com luz do dia, sem a sombra do celular e sem flash. Sombras e papel acinzentado são o inimigo: o JPG gasta a maior parte dos 20 KB descrevendo o sombreado do fundo, não os seus traços.",
        "Recorte bem rente à assinatura antes de comprimir — a ferramenta Recortar imagem faz isso em segundos — para o arquivo não gastar bytes com papel vazio. Uma assinatura recortada com uns 400 × 150 pixels continua nítida bem abaixo de 20 KB; não há vantagem nenhuma em manter uma foto de 4000 pixels de uma folha de papel.",
      ],
    },
    {
      heading: "O que cabe em 20 quilobytes",
      id: "what-fits",
      body: [
        "Para uma assinatura em fundo branco, 20 KB é bastante. Para uma foto de rosto, é apertado: conte com algo em torno de 300 × 400 pixels com boa qualidade, dependendo do quanto o fundo tem de detalhe. Um fundo liso e claro atrás do rosto dá muito menos trabalho ao compressor do que uma sala cheia de coisas ou uma parede estampada.",
        "Se o formulário pede foto de 20 KB e também informa dimensões exatas, redimensione primeiro com a ferramenta Redimensionar imagem e depois comprima aqui. Nessa ordem, a ferramenta só precisa baixar a qualidade, sem escolher um tamanho por você.",
      ],
    },
    {
      heading: "Quando o formulário diz \"entre 10 KB e 20 KB\"",
      id: "range",
      body: [
        "Alguns formulários definem um mínimo além do máximo, para recusar imagens quase vazias. Esta página mira logo abaixo de 20 KB, e o resultado costuma ficar entre 15 KB e 20 KB — dentro de uma faixa de 10 a 20 KB.",
        "Imagens muito pequenas ou muito simples podem ficar abaixo do mínimo mesmo na qualidade máxima, porque não há detalhe suficiente para chegar a 10 KB. Se isso acontecer, fotografe ou digitalize a assinatura maior, ou deixe um pouco mais de margem no recorte, e comprima de novo a partir desse original.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 20 KB",
  steps: [
    { title: "Adicione a foto ou a assinatura", description: "Selecione ou arraste o JPG, PNG ou WEBP — recorte a assinatura bem rente antes, para o resultado mais limpo." },
    { title: "Comprima para menos de 20 KB", description: "O limite de 20 KB já vem definido; mude o número se o formulário aceitar um pouco mais ou um pouco menos." },
    { title: "Baixe e envie", description: "Salve o JPG e anexe no formulário — ele fica garantidamente abaixo de 20 KB." },
  ],

  features: [
    { icon: "draw", title: "Feito para assinaturas", description: "Traços escuros sobre fundo branco comprimem muito bem — um recorte rente continua nítido bem abaixo de 20 KB." },
    { icon: "verified_user", title: "Sempre abaixo de 20 KB", description: "O arquivo fica abaixo de 20.000 bytes, então passa em formulários que contam o KB como 1.000 ou como 1.024 bytes." },
    { icon: "lock", title: "Sua assinatura continua privada", description: "Tudo roda no seu navegador. Uma assinatura digitalizada é a última coisa que você deveria mandar para o servidor de um desconhecido." },
  ],

  faqs: [
    { q: "Como comprimir uma assinatura para 20 KB?", a: "Recorte a assinatura bem rente, adicione aqui e clique em Comprimir — o limite de 20 KB já está definido. Assinar com caneta escura em papel branco e fotografar com luz do dia dá o resultado mais nítido." },
    { q: "Qual o tamanho em pixels de uma assinatura de 20 KB?", a: "Se o formulário não informa, um recorte de uns 400 × 150 pixels mantém a assinatura nítida e fica bem abaixo de 20 KB. Se ele informa dimensões, redimensione para elas antes de comprimir." },
    { q: "O formulário pede foto de até 20 KB — o rosto vai ficar nítido?", a: "Sim, no tamanho em que o formulário mostra a foto. Conte com uns 300 × 400 pixels com boa qualidade; um fundo liso e claro atrás do rosto deixa mais dos 20 KB para o rosto." },
    { q: "O formulário pede entre 10 KB e 20 KB. Funciona?", a: "Normalmente o resultado fica entre 15 KB e 20 KB. Se uma imagem muito pequena ou muito simples ficar abaixo de 10 KB, fotografe ou digitalize maior e comprima de novo." },
    { q: "Por que a assinatura comprimida ficou cinza ou manchada?", a: "O fundo da foto original estava cinza ou com sombra, e o JPG está gastando o espaço com esse sombreado. Fotografe de novo em papel branco com luz uniforme e os traços saem limpos." },
    { q: "Dá para comprimir a foto e a assinatura juntas?", a: "Dá. Adicione os dois arquivos; cada um fica abaixo de 20 KB separadamente e você pode baixar os dois em um ZIP. Se a foto puder ter mais (muitas vezes 50 KB), use a página de 50 KB para ela." },
    { q: "20 KB é o mesmo que 0,02 MB?", a: "Sim, nas unidades decimais que os formulários usam. A ferramenta mantém o arquivo abaixo de 20.000 bytes, o que também atende formulários que contam 1.024 bytes por quilobyte." },
  ],

  security:
    "Assinaturas e fotos de documento nunca saem do seu aparelho. A compressão acontece inteiramente no navegador — não há envio, cópia em servidor nem nada para apagar depois.",
};

export default content;
