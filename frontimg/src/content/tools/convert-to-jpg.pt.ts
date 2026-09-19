import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/converter-para-jpg.
 *
 * Head term "converter para JPG" / "converter imagem para JPG" — iLoveIMG's
 * /pt/converter-para-jpg hub uses the same phrase. "transformar em JPG" and
 * "mudar formato da imagem" live in aliases.ts.
 */
const content: ToolPageContent = {
  toolId: "convert-to-jpg",
  locale: "pt",
  name: "Converter para JPG",
  tagline:
    "Converta imagens PNG, WEBP, GIF e BMP para JPG online — em lote e com controle de qualidade. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter imagem para JPG online grátis — PNG, WEBP, GIF, BMP | oMyImage",
  metaDescription:
    "Converta imagens para JPG online e grátis: PNG, WEBP, GIF e BMP em JPG leve e compatível com tudo. Em lote, com qualidade ajustável, no navegador e sem cadastro.",

  intro:
    "Converter imagem para JPG resolve o problema clássico do arquivo que o sistema não aceita. A ferramenta Converter para JPG do oMyImage transforma arquivos PNG, WEBP, GIF e BMP em JPGs de alta qualidade direto no seu navegador. Converta uma imagem ou um lote inteiro, escolha a qualidade e a cor de fundo que vai substituir qualquer transparência. Nada é enviado — é instantâneo e totalmente privado.",

  sections: [
    {
      heading: "Por que converter para JPG",
      id: "why",
      body: [
        "Quase todo mundo que converte para JPG está resolvendo um problema de compatibilidade, e não fazendo uma escolha estética. Um formulário recusa o arquivo, uma gráfica não aceita, um programa antigo não abre, ou um anexo precisa ficar abaixo de certo tamanho. O JPG é o formato que acaba com essas discussões — tem três décadas, não tem patentes e é lido por tudo.",
        "O segundo motivo é o peso. PNG e BMP, em especial, guardam muito mais dados do que uma fotografia precisa, e converter para JPG costuma cortar o arquivo em 80% ou mais sem diferença visível em uma qualidade sensata. Para qualquer coisa que vai por e-mail, formulário ou página da web, essa é a diferença entre um arquivo que funciona e um que não funciona.",
      ],
    },
    {
      heading: "O que o JPG não consegue fazer",
      id: "limits",
      body: [
        "O JPG não tem transparência. Não existe canal alfa no formato, então tudo o que é transparente precisa ser pintado com uma cor sólida antes de salvar. Isso não é problema em uma fotografia e é errado para um logotipo feito para ficar sobre um fundo colorido.",
        "Ele também guarda uma única imagem, então a animação se perde — um GIF ou WebP animado vira o primeiro quadro. E, por ser com perdas, cada salvamento descarta mais um pouco de detalhe. Converta uma vez, a partir da melhor imagem que você tiver, e guarde o original se for editar depois.",
        "Por fim, o JPG combina mal com conteúdo de bordas nítidas. Prints de tela, diagramas, desenhos e qualquer coisa com letras pequenas ganham um halo leve em volta de cada borda, e muitas vezes nem ficam menores. Para esses casos, PNG ou WEBP é o destino melhor.",
      ],
    },
    {
      heading: "Escolhendo a qualidade",
      id: "quality",
      body: [
        "O controle de qualidade decide com que agressividade os detalhes são descartados. Entre 85% e 92% a compressão é praticamente invisível e o arquivo continua bem menor do que o original — comece aí, a não ser que tenha um motivo para não fazer isso.",
        "Suba para 95% ou mais em imagens que vão ser impressas, ampliadas ou examinadas de perto; o arquivo cresce rápido por uma diferença que quase ninguém percebe na tela, mas a impressão não perdoa. Desça para 70% a 80% quando precisar respeitar um limite rígido de tamanho e a imagem for uma fotografia comum. Abaixo disso, os blocos aparecem primeiro no céu, na pele e em qualquer degradê suave.",
      ],
    },
    {
      heading: "Escolhendo o que preenche a transparência",
      id: "background",
      body: [
        "Como a transparência precisa virar alguma coisa, esta ferramenta usa por padrão a cor encontrada nas próprias bordas da imagem — sem precisar escolher, e sem um retângulo branco em volta de um assunto que nunca foi feito para ficar sobre branco. Branco, preto ou qualquer cor personalizada estão a um clique quando você quer algo diferente, como combinar com uma interface escura ou um cartão colorido.",
        "Um cuidado: a transparência de PNG e WebP costuma ter suavização, então os pixels da borda são parcialmente transparentes e se misturam com a cor escolhida. Uma imagem preparada sobre branco e preenchida com preto pode mostrar um contorno claro. Se isso aparecer, exportar de novo a imagem original sobre o fundo certo é mais limpo do que tentar corrigir depois.",
      ],
    },
  ],

  howToTitle: "Como converter uma imagem para JPG",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens PNG, WEBP, GIF ou BMP, ou arraste e solte." },
    { title: "Defina as opções", description: "Escolha a qualidade do JPG e a cor de fundo que vai substituir a transparência." },
    { title: "Converta e baixe", description: "Clique em Converter — um JPG é baixado na hora, ou vários chegam juntos em um ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Conversão em lote", description: "Converta dezenas de imagens PNG, WEBP, GIF ou BMP para JPG de uma vez e baixe tudo em um único ZIP." },
    { icon: "tune", title: "Controle de qualidade", description: "Escolha a qualidade do JPG de 50% a 100% para equilibrar o tamanho do arquivo e a fidelidade visual." },
    { icon: "lock", title: "100% privado", description: "A conversão roda inteira no seu navegador com canvas HTML — suas imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Quais formatos posso converter para JPG?", a: "PNG, WEBP, GIF e BMP. Os GIFs são convertidos a partir do primeiro quadro." },
    { q: "O que acontece com a transparência?", a: "O JPG não aceita transparência, então as áreas transparentes são preenchidas com uma cor de fundo. Por padrão usamos automaticamente a cor das bordas da própria imagem; escolha branco, preto ou qualquer outra cor se quiser algo diferente." },
    { q: "Posso converter muitas imagens de uma vez?", a: "Sim. Adicione quantas quiser — uma imagem é baixada como JPG, e várias chegam juntas em um ZIP." },
    { q: "É grátis e privado mesmo?", a: "Sim. Não tem cadastro nem marca d'água, e cada imagem é processada no seu próprio navegador." },
    { q: "O JPG mantém os dados EXIF e da câmera?", a: "Por padrão sim — qualquer EXIF ou XMP que a imagem original tenha é copiado para o JPG, incluindo a data da foto, o modelo da câmera e as coordenadas de GPS, se existirem. Marque \"Remover metadados\" para deixar tudo de fora, junto com o perfil de cor. Arquivos PNG, GIF e BMP raramente têm EXIF, então na maioria dos casos não há nada para manter." },
    { q: "O perfil de cor é preservado?", a: "Não, e é de propósito. A conversão decodifica a imagem em sRGB, então levar o perfil original junto descreveria os novos pixels de forma errada e mudaria as cores. O JPG é salvo em sRGB — que é o que um visualizador assume de qualquer forma —, e o perfil sRGB embutido some por completo se você marcar \"Remover metadados\"." },
    { q: "De quais formatos posso converter?", a: "PNG, WEBP, GIF e BMP. São os formatos que o navegador abre sozinho, e é isso que permite converter no seu dispositivo. HEIC e AVIF têm páginas próprias porque precisam de um tratamento diferente." },
    { q: "Por que o JPG ainda é o formato mais seguro?", a: "Porque ele tem trinta anos, não tem patentes e está implementado em praticamente todo programa que já mostrou uma imagem. Formatos mais novos comprimem melhor, mas \"melhor\" não vale nada quando o sistema para o qual você está enviando recusa o arquivo." },
    { q: "Que qualidade devo usar?", a: "Entre 85% e 92% serve para quase tudo. Suba para fotos que vão ser impressas ou em que o cliente vai dar zoom. Abaixo de 70% começam a aparecer blocos no céu e em degradês suaves, que é o ponto em que as pessoas notam a compressão em vez da foto." },
    { q: "Posso converter um GIF animado?", a: "Você recebe o primeiro quadro como um JPG estático. O JPG guarda uma única imagem, então a animação não sobrevive. Se precisar de um quadro específico, extraia todos com a ferramenta GIF para imagens e converta o que quiser." },
    { q: "Existe limite de arquivos?", a: "Não há limite fixo. Uma imagem é baixada direto; várias vão em um único ZIP. Lotes grandes só levam um pouco mais de tempo, e a aba continua utilizável enquanto processa." },
  ],

  security:
    "Suas imagens continuam privadas. A conversão para JPG acontece inteira no seu navegador com canvas HTML — nada é enviado a um servidor. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "734" },

  ui: {
    // Drop hint from app/convert-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG, WEBP, GIF or BMP images here": "ou solte imagens PNG, WEBP, GIF ou BMP aqui",
  },
};

export default content;
