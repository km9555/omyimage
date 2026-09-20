import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/heic-para-png.
 *
 * Head term "HEIC para PNG" — the sibling of /pt/heic-para-jpg, which takes
 * most of the search volume; this page is for people who want a lossless copy
 * to edit. iPhone settings are named as the Brazilian iOS UI shows them
 * (Ajustes › Câmera › Formatos › "Mais Compatível").
 *
 * HeicTool is shared with /heic-to-jpg, so its ui keys are duplicated here —
 * each route only has its own tool's ui in scope (conversion.md §6.2.3).
 */
const content: ToolPageContent = {
  toolId: "heic-to-png",
  locale: "pt",
  name: "HEIC para PNG",
  tagline:
    "Converta fotos HEIC e HEIF do iPhone em PNG sem perdas — em lote, sem cadastro e com os arquivos excluídos logo após a conversão.",
  crossLink: { lead: "Prefere um arquivo menor?", label: "Converter HEIC para JPG", toolId: "heic-to-jpg" },
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter HEIC para PNG online grátis — sem perdas | oMyImage",
  metaDescription:
    "Converta HEIC para PNG online e grátis: saída sem perdas das fotos do iPhone, em lote e sem cadastro. Ideal para editar, imprimir ou arquivar.",

  intro:
    "Converter HEIC para PNG transforma as fotos .heic do seu iPhone em arquivos que abrem em qualquer lugar. O PNG é sem perdas, então a imagem convertida é exatamente o que saiu do decodificador — sem uma segunda rodada de compressão em cima do que a câmera já fez. Adicione uma foto ou um rolo de câmera inteiro.",

  sections: [
    {
      heading: "Por que converter HEIC para PNG?",
      id: "why",
      body: [
        "O HEIC é o formato em que o iPhone salva fotos por padrão desde o iOS 11, e ele guarda mais ou menos o dobro de imagem no mesmo espaço que o JPG. O problema é que ele é construído sobre o codec de vídeo HEVC/H.265, coberto por grupos de patentes — então a maioria dos navegadores, muitos programas de Windows e vários apps de Android simplesmente se recusam a abrir um arquivo .heic sem instalar um codec a mais.",
        "O PNG é o tipo oposto de formato: sem graça, antigo para os padrões do software e entendido absolutamente por tudo. Escolher ele em vez do JPG se resume a uma coisa — o PNG é sem perdas. O HEIC já tinha sido comprimido com perdas quando o celular gravou, e converter para JPG comprime uma segunda vez. Converter para PNG não faz isso, então o que você recebe é exatamente o que o decodificador produziu. Para uma foto que você pretende editar, retocar, imprimir ou arquivar, isso importa.",
        "A troca é o tamanho do arquivo. Um HEIC que ocupa 2 MB no seu celular pode virar facilmente um PNG de 10 a 15 MB, porque o PNG nunca descarta nada. Se você só precisa mandar a foto por e-mail ou postar, o JPG é o destino melhor, e a diferença de tamanho é enorme.",
      ],
    },
    {
      heading: "Por que esta ferramenta roda no nosso servidor",
      id: "server",
      body: [
        "Quase toda ferramenta do oMyImage funciona dentro da aba do seu navegador. O HEIC é a exceção, e o motivo é jurídico, não técnico. Todo decodificador de HEIC em JavaScript que existe — heic2any, heic-decode, heic-convert, libheif-js — é a mesma biblioteca libheif por baixo, e a libheif é LGPL-3.0. Colocar isso no pacote de um site conta como distribuição, o que traz obrigações que um pedaço de JavaScript minificado não consegue cumprir.",
        "Então a decodificação acontece no nosso servidor, onde rodar a biblioteca não é distribuição. Seu arquivo é enviado por uma conexão HTTPS criptografada, convertido e excluído logo em seguida. Não guardamos, não indexamos e não usamos para mais nada. Esta é a única categoria de ferramenta daqui que funciona assim, e as páginas que fazem isso dizem com todas as letras, em vez de prometer uma privacidade que não existe.",
      ],
    },
    {
      heading: "Como impedir o iPhone de criar HEIC",
      id: "iphone",
      body: [
        "Se você prefere não converter toda vez, dá para mandar o celular parar. Em Ajustes, na seção Câmera, a tela Formatos oferece \"Mais Compatível\" — escolha essa opção e a câmera passa a gravar em JPG. Você perde um pouco de eficiência de armazenamento e as fotos que já existem não mudam, mas as novas deixam de ser um problema.",
        "Tem uma segunda configuração que vale conhecer. Em Fotos, a opção de transferir para Mac ou PC pode estar em \"Automático\", que converte HEIC em JPG durante a cópia. Se estiver em \"Manter Originais\", você recebe os arquivos .heic sem alteração — que muitas vezes é a origem daquela pasta cheia de fotos que não abrem.",
      ],
    },
    {
      heading: "PNG ou JPG para fotos do iPhone?",
      id: "png-or-jpg",
      body: [
        "Escolha PNG quando a foto vai para um editor, quando você vai salvá-la mais de uma vez, quando ela tem texto ou uma área chapada parecida com um print, que o JPG borraria, ou quando você quer uma cópia de arquivo que não vai se degradar mais.",
        "Escolha JPG quando a foto é um clique normal de câmera destinado a e-mail, mensagem, site ou gráfica. Ele tem uma fração do tamanho e a diferença de qualidade é invisível em ajustes sensatos. O seletor acima troca entre os dois sem precisar enviar de novo, então dá para testar as duas opções.",
      ],
    },
  ],

  howToTitle: "Como converter HEIC para PNG",
  steps: [
    {
      title: "Adicione suas fotos HEIC",
      description: "Solte arquivos .heic ou .heif direto do seu iPhone ou de um download do iCloud. Lotes são bem-vindos.",
    },
    {
      title: "O PNG já vem selecionado",
      description: "A saída é sem perdas, então não há controle de qualidade para ajustar. Troque para JPG se preferir um arquivo menor.",
    },
    {
      title: "Converta e baixe",
      description: "Uma foto é baixada sozinha; várias chegam juntas em um ZIP.",
    },
  ],

  features: [
    {
      icon: "high_quality",
      title: "Saída sem perdas",
      description:
        "O PNG guarda cada pixel exatamente como foi decodificado do HEIC, sem uma segunda rodada de estrago por compressão.",
    },
    {
      icon: "burst_mode",
      title: "Rolos de câmera inteiros",
      description:
        "Converta um lote de uma vez e receba um único ZIP, em vez de baixar foto por foto.",
    },
    {
      icon: "devices",
      title: "Abre em qualquer lugar",
      description:
        "O PNG tem suporte universal desde os anos 1990 — Windows, Android, Office, todo editor e todo navegador.",
    },
  ],

  faqs: [
    {
      q: "Converter HEIC para PNG perde qualidade?",
      a: "A etapa do PNG é sem perdas, então nada se perde ali. Lembre que o próprio HEIC foi comprimido com perdas pelo seu celular, então converter preserva a foto exatamente como ela está agora, sem restaurar o detalhe que a câmera já descartou.",
    },
    {
      q: "Por que o PNG ficou tão maior que o HEIC?",
      a: "Porque o PNG guarda tudo e o HEIC é extremamente eficiente em jogar fora o que o olho não vai sentir falta. Um aumento de cinco a oito vezes é normal. Converta para JPG se o tamanho importa mais do que ser sem perdas.",
    },
    {
      q: "Minha foto é enviada para um servidor?",
      a: "Sim, nesta ferramenta especificamente. Os navegadores não decodificam HEIC, e os únicos decodificadores em JavaScript são a libheif, sob licença LGPL, que não podemos entregar ao seu navegador. Seu arquivo vai por HTTPS ao nosso servidor, é convertido e é excluído logo depois.",
    },
    {
      q: "Posso converter um rolo de câmera inteiro de uma vez?",
      a: "Pode. Adicione quantos arquivos .heic ou .heif quiser e eles são convertidos um depois do outro, e entregues em um único ZIP.",
    },
    {
      q: "Funciona com arquivos .heif também?",
      a: "Funciona. HEIF é o contêiner e HEIC é a variante codificada em HEVC que a Apple usa. As duas extensões são aceitas.",
    },
    {
      q: "A data e o local da foto são mantidos?",
      a: "O conversor copia os metadados quando o formato de destino consegue guardá-los, e a opção \"Remover metadados\" apaga tudo antes do download. Se você quer ter certeza do que a foto carrega, a ferramenta Ver metadados da imagem lê o EXIF direto do HEIC, sem converter.",
    },
    {
      q: "Como faço o iPhone parar de salvar em HEIC?",
      a: "Em Ajustes, abra Câmera, depois Formatos, e escolha \"Mais Compatível\". As fotos novas passam a ser salvas em JPG. Os arquivos HEIC que já existem não mudam, então esses ainda precisam ser convertidos.",
    },
    {
      q: "É grátis?",
      a: "É — sem conta, sem marca d'água e sem limite de quantidade de fotos.",
    },
  ],

  security:
    "A decodificação de HEIC não roda num navegador — todo decodificador em JavaScript é a libheif, sob licença LGPL, que não temos como entregar ao seu aparelho. Sua foto é, portanto, enviada ao nosso servidor por uma conexão HTTPS criptografada, convertida e excluída logo em seguida. Ela nunca é armazenada, indexada ou usada para mais nada.",

  rating: { value: "4.8", count: "563" },

  ui: {
    // HeicTool.tsx — the same keys as heic-to-jpg.pt.ts (one shared component,
    // and each route only has its own tool's ui in scope).
    "Please select HEIC or HEIF images.": "Selecione imagens HEIC ou HEIF.",
    "Converted 1 HEIC image.": "1 imagem HEIC convertida.",
    "Converted {n} HEIC images.": "{n} imagens HEIC convertidas.",
    "or drop .heic / .heif photos here": "ou solte fotos .heic / .heif aqui",
    "Converted on our server over an encrypted connection — files are deleted right after.":
      "Convertido no nosso servidor por uma conexão criptografada — os arquivos são excluídos logo em seguida.",
    "1 HEIC image": "1 imagem HEIC",
    "{n} HEIC images": "{n} imagens HEIC",
    "Conversion runs on our server; results are auto-deleted within an hour.":
      "A conversão roda no nosso servidor; os resultados são excluídos automaticamente em até uma hora.",
    "Convert {n} images": "Converter {n} imagens",
    "Convert & download": "Converter e baixar",
    "Remove EXIF, colour profile, camera and location data. Photos from a phone usually carry GPS coordinates.":
      "Remove EXIF, perfil de cor, dados da câmera e de localização. Fotos de celular normalmente têm coordenadas de GPS.",
    // Backend sentences this tool can surface (routes/image/heic)
    "Upload a HEIC or HEIF image.": "Envie uma imagem HEIC ou HEIF.",
    "HEIC conversion isn't enabled on this server (ImageMagick with libheif not installed).":
      "A conversão de HEIC não está disponível neste servidor no momento.",
  },
};

export default content;
