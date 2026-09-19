import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/heic-para-jpg.
 *
 * Head term "HEIC para JPG" / "converter HEIC para JPG" — the query every
 * Brazilian iPhone user sending photos to a Windows PC or a gov.br form ends
 * up typing. "foto do iPhone para JPG" and "abrir HEIC" live in aliases.ts.
 * The iPhone settings are named as they appear in the Brazilian iOS UI
 * (Ajustes › Câmera › Formatos › "Mais Compatível"; Ajustes › Fotos ›
 * "Transferir para Mac ou PC" › "Automático" / "Manter Originais").
 *
 * HeicTool is shared with /heic-to-png: its ui keys are duplicated there when
 * that page ships (each route only has its own tool's ui in scope).
 */
const content: ToolPageContent = {
  toolId: "heic-to-jpg",
  locale: "pt",
  name: "HEIC para JPG",
  tagline:
    "Converta fotos HEIC e HEIF do iPhone em JPG ou PNG online — em lote e com controle de qualidade. Grátis e rápido, com o ImageMagick de código aberto.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter HEIC para JPG online grátis — fotos do iPhone | oMyImage",
  metaDescription:
    "Converta HEIC para JPG online e grátis: transforme fotos do iPhone em JPG ou PNG que abrem no Windows, Android e em qualquer site. Em lote e sem cadastro.",

  intro:
    "Converter HEIC para JPG é o jeito de fazer as fotos do iPhone abrirem em qualquer lugar. O iPhone salva fotos em HEIC para ocupar menos espaço, mas muitos programas e aparelhos não conseguem abrir esse formato. A ferramenta HEIC para JPG do oMyImage converte suas fotos .heic e .heif em JPG, compatível com tudo (ou em PNG sem perdas) — uma de cada vez ou um lote inteiro. Esta é a única ferramenta daqui que roda no nosso servidor, e não no seu navegador: para ler HEIC é preciso uma biblioteca que, pela licença dela, não podemos colocar no navegador. Então o arquivo é convertido no servidor e excluído logo em seguida.",

  sections: [
    {
      heading: "O que é HEIC e por que ele dá problema",
      id: "what",
      body: [
        "HEIC é o formato que o iPhone usa por padrão desde o iOS 11. Ele guarda fotografias com mais ou menos metade do tamanho de um JPG equivalente, o que é uma conquista de engenharia de verdade e o motivo de a Apple ter adotado — um celular com dez mil fotos economiza muito espaço.",
        "O problema está na base dele. O HEIC usa o codec de vídeo HEVC/H.265, e o HEVC é coberto por vários grupos de patentes que cobram licença pelos decodificadores. Esse único fato explica quase todos os problemas que as pessoas têm com o formato: o Windows não vem com decodificador, a maioria dos navegadores não exibe, muitos celulares Android não abrem, e uma lista enorme de programas simplesmente não sabe o que é o arquivo.",
        "O JPG não tem nada disso. Ele tem trinta anos, não tem patentes e é entendido por tudo que já mostrou uma imagem. Converter troca um pouco da economia de espaço pela certeza de que a foto vai abrir onde você mandar.",
      ],
    },
    {
      heading: "Por que esta ferramenta usa o nosso servidor",
      id: "server",
      body: [
        "Todos os outros conversores deste site funcionam dentro do seu navegador. O HEIC é a exceção, e o motivo é de licença, não de desempenho. Todo decodificador de HEIC em JavaScript que existe — heic2any, heic-decode, heic-convert, libheif-js — é uma embalagem da mesma biblioteca libheif, e a libheif é LGPL-3.0. Colocar ela dentro do código de um site conta como distribuição, o que traz obrigações que um pedaço de JavaScript minificado não consegue cumprir.",
        "Rodar a biblioteca em um servidor não é distribuição, então é lá que a decodificação acontece. Sua foto viaja por uma conexão HTTPS criptografada, é convertida e é excluída logo depois. Ela não é guardada, indexada nem usada para mais nada. Preferimos dizer isso com clareza a prometer uma privacidade que esta ferramenta específica não tem.",
      ],
    },
    {
      heading: "Resolvendo o problema na origem",
      id: "settings",
      body: [
        "Se você converte HEIC com frequência, vale mudar a configuração em vez dos arquivos. Em Ajustes › Câmera › Formatos, a opção \"Mais Compatível\" faz a câmera gravar direto em JPG. Você perde a economia de espaço, o que num celular moderno raramente é o problema.",
        "Tem uma segunda configuração que pega muita gente. Em Ajustes › Fotos, a opção \"Transferir para Mac ou PC\" pode estar em \"Automático\", que converte HEIC em JPG durante a cópia, ou em \"Manter Originais\", que não converte. Uma pasta cheia de arquivos .heic que não abrem no Windows muitas vezes é essa segunda configuração fazendo exatamente o que mandaram.",
      ],
    },
    {
      heading: "Qualidade e tamanho do arquivo depois da conversão",
      id: "quality",
      body: [
        "O HEIC já foi comprimido com perdas pelo seu celular, e codificar em JPG comprime uma segunda vez. Na qualidade padrão isso não aparece em tamanhos normais de visualização, mas é uma geração a mais de verdade, então converta a partir do HEIC original, e não de uma cópia que já passou por outra coisa.",
        "Espere que o JPG fique maior do que o HEIC — normalmente entre 1,5 e 2,5 vezes —, porque você está indo para um formato menos eficiente. Essa é a troca pela compatibilidade total. Se precisar de uma cópia sem perdas para editar, converta para PNG, mas prepare-se para um arquivo várias vezes maior.",
      ],
    },
  ],

  howToTitle: "Como converter HEIC para JPG",
  steps: [
    { title: "Envie os HEIC", description: "Selecione uma ou várias fotos .heic / .heif, ou arraste e solte." },
    { title: "Escolha o formato", description: "Escolha JPG (com qualidade ajustável) ou PNG como saída." },
    { title: "Converta e baixe", description: "Clique em Converter — uma foto é baixada direto; várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "photo_camera", title: "Feito para fotos do iPhone", description: "Transforme as fotos HEIC/HEIF da Apple em JPG ou PNG que abrem em qualquer lugar — Windows, Android e na web." },
    { icon: "burst_mode", title: "Conversão em lote", description: "Converta um rolo de câmera inteiro de uma vez e baixe tudo em um único ZIP." },
    { icon: "lock", title: "Privado por padrão", description: "A conversão roda no nosso servidor com o ImageMagick de código aberto; os resultados são excluídos automaticamente em até uma hora e nunca são compartilhados nem reutilizados." },
  ],

  faqs: [
    { q: "O que é HEIC?", a: "HEIC (HEIF) é o formato de foto de alta eficiência que o iPhone usa por padrão. Ele economiza espaço, mas não é aceito em todo lugar, então converter para JPG facilita o compartilhamento." },
    { q: "Posso converter vários arquivos HEIC de uma vez?", a: "Sim. Adicione quantos quiser — vários arquivos são baixados juntos em um ZIP." },
    { q: "A qualidade é mantida?", a: "Sim. Escolha PNG para uma saída sem perdas, ou JPG com um controle de qualidade para equilibrar tamanho e fidelidade." },
    { q: "Minhas fotos são enviadas?", a: "Sim — o HEIC é a única ferramenta daqui que precisa de um servidor. Ler HEIC exige uma biblioteca que não podemos colocar no seu navegador por questões de licença, então o arquivo é convertido no nosso servidor e excluído automaticamente em até uma hora. Nada é compartilhado nem reutilizado." },
    { q: "É grátis?", a: "Totalmente grátis, sem marca d'água e sem cadastro." },
    { q: "Por que o iPhone salva fotos em HEIC?", a: "Porque ele cabe mais ou menos o dobro de imagens no mesmo espaço que o JPG, o que importa quando o celular guarda milhares de fotos. A Apple mudou o padrão no iOS 11. A economia é real; o custo de compatibilidade é o que traz as pessoas até aqui." },
    { q: "Como fazer o iPhone parar de usar HEIC?", a: "Abra Ajustes, vá em Câmera, depois em Formatos, e escolha \"Mais Compatível\". As fotos novas passam a ser salvas em JPG. Isso não converte as fotos que você já tem, então essas ainda precisam ser convertidas." },
    { q: "Por que o Windows não abre meus arquivos HEIC?", a: "O HEIC usa o codec de vídeo HEVC/H.265, que é coberto por grupos de patentes, então o Windows não vem com decodificador por padrão. A Microsoft oferece as extensões HEVC na loja, às vezes pagas. Converter evita o problema de vez." },
    { q: "Converto para JPG ou PNG?", a: "JPG para quase tudo — é muito menor e aceito em todo lugar. Escolha PNG quando quiser uma cópia sem perdas para editar ou arquivar, sabendo que o arquivo vai ficar várias vezes maior. Existe uma página própria de HEIC para PNG para isso." },
    { q: "A data e o local da foto são mantidos?", a: "Por padrão, sim: o conversor copia os dados EXIF, como a data da foto e as coordenadas de GPS, para o arquivo novo. Marque \"Remover metadados\" para apagar tudo antes de compartilhar — fotos de celular quase sempre têm o local onde foram tiradas." },
    { q: "Posso converter o rolo de câmera inteiro?", a: "Sim. Adicione quantos arquivos .heic ou .heif quiser; eles são convertidos em sequência e voltam em um único ZIP." },
    { q: "Consigo enviar foto do iPhone para o gov.br ou para um concurso?", a: "Sim, depois de converter. A maioria dos portais públicos e formulários de inscrição aceita só JPG, PNG ou PDF e recusa HEIC. Converta aqui para JPG e, se o formulário tiver limite de tamanho, passe pela ferramenta Comprimir imagem antes de enviar." },
  ],

  security:
    "A conversão de HEIC roda no nosso servidor com o ImageMagick de código aberto. Os resultados ficam guardados só por pouco tempo, atrás de um link de download privado, e são excluídos automaticamente em até uma hora. Nunca compartilhamos nem reutilizamos suas fotos.",

  rating: { value: "4.9", count: "742" },

  ui: {
    // HeicTool.tsx (shared with /heic-to-png — copy these there too)
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
