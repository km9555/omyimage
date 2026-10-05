import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/aumentar-tamanho-da-imagem-em-kb (variant of compress-image, mode "increase"). */
const content: ToolPageContent = {
  toolId: "increase-image-size-in-kb",
  locale: "pt",
  name: "Aumentar tamanho da imagem em KB",
  tagline:
    "Deixe uma foto ou assinatura com pelo menos 10, 20, 50 KB ou o tamanho que o formulário exigir — subindo a qualidade e, só se precisar, as dimensões. Defina também um máximo para faixas como 20–50 KB. Grátis, no navegador, sem enviar nada.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Aumentar Tamanho da Imagem em KB Online — Grátis, Sem Envio | oMyImage",
  metaDescription:
    "Aumente o tamanho de uma foto em KB online e grátis — para formulários que exigem pelo menos 10, 20 ou 50 KB. A qualidade sobe, não desce. No navegador, sem envio.",

  intro:
    "A maioria das ferramentas de imagem deixa os arquivos menores. Alguns formulários querem o contrário: \"a foto deve ter entre 20 KB e 50 KB\", e a imagem de 12 KB que você tem é recusada por ser pequena demais. Esta página aumenta o tamanho do arquivo em KB até o mínimo que você definir, e o mantém abaixo de um máximo, se houver. Ela faz isso do jeito honesto — guardando a imagem com mais qualidade e, depois, com mais pixels —, então o resultado fica no mínimo tão bom quanto o original.",

  sections: [
    {
      heading: "Por que formulários exigem um tamanho mínimo",
      id: "why-minimum",
      body: [
        "O mínimo é um controle de qualidade improvisado. Uma foto salva com 5 KB normalmente foi comprimida tanto, ou reduzida tanto, que o rosto já nem é reconhecível, e quem fez o formulário escolheu um número de bytes como o jeito mais simples de recusar essas fotos. Por isso a regra costuma vir como faixa: pelo menos 20 KB para a foto ser nítida, no máximo 50 KB para não sobrecarregar o servidor.",
        "Então o objetivo não é só um número maior. É um arquivo que passe do mínimo porque carrega mais detalhe, que é exatamente o que a regra do formulário queria garantir.",
      ],
    },
    {
      heading: "Como o tamanho aumenta",
      id: "how",
      body: [
        "Primeiro a foto é salva de novo como JPG na qualidade máxima. Um arquivo que tinha sido muito comprimido muitas vezes dobra ou triplica assim, sem perder nada. Se ainda faltar para o mínimo, a imagem é ampliada aos poucos — pela raiz quadrada do que falta, porque o tamanho do arquivo cresce com o número de pixels — até quatro vezes a largura e a altura.",
        "Se houver um máximo e o arquivo ampliado passar dele, a qualidade baixa só o bastante para cair dentro da faixa. Os detalhes aparecem ao lado de cada arquivo: quanto ele cresceu e, se foi ampliado, as novas dimensões.",
      ],
    },
    {
      heading: "Quando o arquivo é completado",
      id: "padding",
      body: [
        "Uma imagem muito simples, como uma assinatura pequena sobre branco, pode continuar abaixo do mínimo mesmo na qualidade máxima e ampliada quatro vezes. Só então a ferramenta acrescenta ao JPG um bloco de dados vazio até chegar ao mínimo. Todo visualizador de imagem ignora esse bloco: a imagem é exatamente a mesma, o arquivo só fica mais pesado.",
        "A lista de resultados avisa quando um arquivo foi completado. Para assinaturas com tamanho fixo em pixels, a ferramenta Redimensionar assinatura faz o mesmo depois de limpar e recortar a assinatura.",
      ],
    },
    {
      heading: "Faixas como 20–50 KB",
      id: "ranges",
      body: [
        "Digite o número menor como mínimo e o maior como máximo. Arquivos que já são JPG dentro da faixa voltam intactos, e o resto é trazido para dentro dela. Para o problema oposto — um arquivo grande demais — use Comprimir imagem ou uma das páginas de comprimir para um tamanho.",
        "Os formulários não concordam se um kilobyte tem 1.000 ou 1.024 bytes, então a ferramenta usa a leitura segura em cada ponta: um mínimo de 20 KB significa pelo menos 20.480 bytes, e um máximo de 50 KB significa no máximo 50.000. O arquivo passa das duas formas.",
      ],
    },
  ],

  howToTitle: "Como aumentar o tamanho de uma imagem em KB",
  steps: [
    { title: "Adicione as fotos", description: "Selecione ou solte as imagens que estão pequenas demais — JPG, PNG ou WEBP." },
    { title: "Defina o mínimo (e um máximo)", description: "Digite o mínimo em KB, e o máximo também se o formulário der uma faixa." },
    { title: "Baixe", description: "Cada arquivo volta como JPG com pelo menos o tamanho mínimo." },
  ],

  features: [
    { icon: "high_quality", title: "A qualidade sobe, não desce", description: "O arquivo cresce guardando a imagem com mais qualidade primeiro — nada é piorado para ganhar bytes." },
    { icon: "photo_size_select_large", title: "Faixas resolvidas", description: "Defina mínimo e máximo, como 20–50 KB, e cada arquivo cai dentro da faixa." },
    { icon: "lock", title: "Nada é enviado", description: "As fotos são processadas no seu navegador e não saem do seu aparelho." },
  ],

  faqs: [
    { q: "Como aumentar o tamanho de uma foto em KB?", a: "Adicione a foto, digite o mínimo que o formulário pede — por exemplo 20 KB — e clique em Aumentar. Você recebe um JPG com pelo menos esse tamanho." },
    { q: "Aumentar os KB melhora a foto?", a: "Não além do original — detalhe perdido não volta. A foto é guardada com mais qualidade, então o resultado fica no mínimo tão bom quanto o original, nunca pior." },
    { q: "O formulário pede de 20 KB a 50 KB. O que eu digito?", a: "20 como mínimo e 50 como máximo. O arquivo é trazido para dentro da faixa, e um JPG que já está nela continua como está." },
    { q: "As dimensões vão mudar?", a: "Só se a qualidade sozinha não bastar. Aí a imagem é ampliada, até quatro vezes, e as novas dimensões aparecem ao lado do arquivo." },
    { q: "O que significa \"completada para atingir o mínimo\"?", a: "A imagem era simples demais para chegar ao mínimo mesmo na qualidade máxima e ampliada quatro vezes, então foram acrescentados dados vazios ao arquivo. A imagem não mudou." },
    { q: "Dá para aumentar o tamanho de um PNG?", a: "Dá, mas o resultado é um JPG, que é o que os formulários com limite em KB esperam. Áreas transparentes recebem a cor de fundo que você escolher." },
    { q: "A minha foto é enviada para algum servidor?", a: "Não. Tudo acontece no seu navegador." },
  ],

  security:
    "Fotos e assinaturas são processadas no seu aparelho, no navegador. Nada é enviado nem guardado em lugar nenhum.",
};

export default content;
