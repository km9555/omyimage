import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/ver-metadados-imagem.
 *
 * Head term "metadados da imagem" / "ver EXIF da foto" — Brazilians search
 * both the technical term and the question ("onde a foto foi tirada",
 * "descobrir localização da foto"), all in aliases.ts. "dados EXIF" is the
 * phrase photographers use and appears throughout the body.
 *
 * The section titles and row labels in MetadataTool.tsx are KEYS, translated
 * at the render site, so every one of them lives in the ui block below —
 * i18n:keys cannot see them, because they arrive through a variable.
 */
const content: ToolPageContent = {
  toolId: "image-metadata",
  locale: "pt",
  name: "Ver metadados da imagem",
  tagline:
    "Veja os metadados EXIF de uma imagem online — câmera, lente, exposição, localização GPS e data. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Ver metadados da imagem online grátis — EXIF e GPS | oMyImage",
  metaDescription:
    "Veja os metadados EXIF de uma foto online e grátis: câmera, lente, abertura, ISO, data e localização GPS. Tudo lido no seu navegador, sem enviar a imagem.",

  intro:
    "Ver os metadados de uma imagem mostra a história escondida por trás da foto. O visualizador de metadados do oMyImage lê os dados EXIF gravados no arquivo direto no seu navegador — câmera e lente, abertura, velocidade do obturador, ISO, data da captura e até a localização GPS — e organiza tudo de forma clara, com a lista completa de tags a um clique. Nada é enviado, então sua foto continua privada.",

  sections: [
    {
      heading: "O que são metadados e de onde eles vêm",
      id: "what",
      body: [
        "Toda câmera grava um bloco de informações no arquivo, ao lado da imagem. O padrão EXIF define a maior parte deles, e foi pensado para fotógrafos — um registro de exatamente como cada foto foi exposta, o que é genuinamente útil quando você tenta entender por que uma foto deu certo e outra não.",
        "Os celulares modernos acrescentam bem mais. Coordenadas de GPS, altitude e direção da bússola, se a localização estiver ligada; o modelo do aparelho e muitas vezes um número de série; a versão do software que processou a imagem. Algumas câmeras preenchem os campos de autor e direitos autorais a partir de uma configuração que você fez uma vez e esqueceu.",
        "Programas de edição acrescentam as próprias entradas, então um arquivo pode acumular um histórico parcial do que foi feito com ele e quando. Nada disso aparece quando você olha a foto, e tudo isso viaja junto com o arquivo.",
      ],
    },
    {
      heading: "Ler antes de compartilhar",
      id: "why",
      body: [
        "O motivo mais prático para olhar é descobrir o que você está prestes a entregar. Uma foto tirada em casa carrega o seu endereço; uma tirada no trabalho carrega o do seu emprego. Vender algo em um marketplace, postar num fórum, mandar um arquivo para um desconhecido — em todos esses casos a imagem é anônima e os metadados não são.",
        "Há usos construtivos também. Fotógrafos examinam os dados de exposição para aprender com os próprios resultados ou para entender como alguém conseguiu determinada foto. Quem organiza uma biblioteca grande depende das datas de captura para ordenar imagens cujos nomes de arquivo já se perderam faz tempo. Documentação de seguro e questões jurídicas muitas vezes dependem de quando e onde a foto foi tirada.",
        "E, quando você recebe uma imagem, os metadados são uma primeira checagem de procedência — embora fraca, já que tudo ali pode ser editado.",
      ],
    },
    {
      heading: "O que os metadados não resolvem",
      id: "limits",
      body: [
        "Metadado é dado, não é prova. Todo campo pode ser alterado com ferramentas gratuitas, então uma data ou uma localização provam apenas que alguém escreveu aqueles valores no arquivo. Trate o que você encontrar como uma pista, e não como uma conclusão.",
        "A ausência prova menos ainda. Uma foto sem metadados muito provavelmente passou por uma plataforma que remove tudo, ou é um print, ou foi salva de novo por um editor — nada disso significa que algo foi escondido de propósito.",
        "A única coisa que os metadados estabelecem com segurança é o que o arquivo está revelando neste momento. Essa é a pergunta que esta ferramenta responde bem, e costuma ser a pergunta que importa antes de você enviar alguma coisa.",
      ],
    },
    {
      heading: "Lido no seu aparelho, inclusive HEIC",
      id: "privacy",
      body: [
        "O arquivo é lido dentro do seu navegador e nunca é enviado, que é o tratamento certo para uma ferramenta cujo propósito inteiro é examinar informação possivelmente sensível. Mandar uma foto para um servidor só para descobrir se ela revela o seu endereço seria uma troca estranha.",
        "Arquivos HEIC e HEIF funcionam aqui, mesmo que o site não consiga exibi-los no navegador. Os metadados ficam no contêiner, e não nos pixels comprimidos, então o leitor lê as tags sem encostar no fluxo HEVC — e é por isso que isto funciona localmente enquanto a conversão de HEIC precisa rodar num servidor.",
      ],
    },
  ],

  howToTitle: "Como ver os metadados de uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma foto, ou arraste e solte na área de trabalho." },
    { title: "Leia os dados", description: "Veja câmera, lente, exposição, data e GPS extraídos do EXIF do arquivo." },
    { title: "Explore tudo", description: "Abra a lista completa de metadados para conferir cada tag gravada." },
  ],

  features: [
    { icon: "photo_camera", title: "Leitura completa do EXIF", description: "Marca e modelo da câmera, lente, abertura, obturador, ISO, distância focal, datas e mais, tudo agrupado." },
    { icon: "location_on", title: "Localização GPS", description: "Se a foto tiver geolocalização, veja as coordenadas e abra o ponto exato num mapa." },
    { icon: "lock", title: "100% privado", description: "Os metadados são lidos inteiramente no seu navegador — sua foto nunca é enviada a um servidor." },
  ],

  faqs: [
    { q: "Quais metadados ele consegue ler?", a: "EXIF, incluindo câmera e lente, configurações de exposição, data da captura, orientação, espaço de cor e coordenadas de GPS quando existirem." },
    { q: "Por que minha imagem não mostra metadados?", a: "Eles podem ter sido removidos (por uma rede social, por exemplo), ou o formato não guarda EXIF — a maioria dos PNGs e dos prints não tem nenhum." },
    { q: "Dá para ver a localização GPS?", a: "Sim. Fotos com geolocalização mostram as coordenadas com um link para ver o local num mapa." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro, e a foto é lida localmente no seu navegador — nada é enviado." },
    { q: "O que os metadados podem me dizer sobre uma foto?", a: "Quando ela foi tirada, com precisão de segundos; onde, com precisão de poucos metros se a localização estava ligada; qual câmera ou celular tirou, incluindo o modelo e muitas vezes um número de série; e as configurações completas de exposição — obturador, abertura, ISO, distância focal, flash. Alguns arquivos ainda trazem campos de autor e direitos autorais e um histórico de edição." },
    { q: "Dá para saber se uma foto foi editada?", a: "Às vezes. Programas de edição costumam escrever o próprio nome nos metadados, e a data de modificação muitas vezes é diferente da data da captura. Mas metadado é trivialmente alterável, então a ausência não prova nada e a presença é indício, não prova." },
    { q: "Por que minha foto não tem nenhum metadado?", a: "O mais provável é que ela já tenha passado por algo que removeu tudo. As redes sociais removem os metadados no envio, prints nunca tiveram nenhum, e muitos apps de mensagem recodificam as imagens ao enviar. Editar e salvar de novo em alguns programas também descarta." },
    { q: "Ele lê arquivos HEIC do iPhone?", a: "Lê. Ele extrai os metadados direto do contêiner sem decodificar os pixels comprimidos em HEVC, então funciona no seu navegador mesmo que exibir um HEIC não funcione. Configurações da câmera, datas e GPS são lidos normalmente." },
    { q: "Como remover o que eu encontrei aqui?", a: "Use a ferramenta Remover EXIF. Ela recodifica a imagem a partir dos pixels, o que não deixa metadado nenhum para trás. Leia primeiro, remova depois — saber o que o arquivo estava carregando costuma ser mais útil do que simplesmente limpar no escuro." },
    { q: "Qual a precisão dos dados de GPS?", a: "Normalmente poucos metros ao ar livre, com boa recepção de satélite. Dentro de prédios, ou em áreas urbanas densas em que o celular recorre a Wi-Fi e antenas de celular, pode errar dezenas ou centenas de metros. De todo jeito, é preciso o bastante para identificar um edifício." },
    { q: "Como saber onde uma foto foi tirada?", a: "Se o EXIF tiver coordenadas de GPS, elas aparecem no bloco Localização, com um link para abrir o ponto no mapa. Se não aparecer nada, a foto não tem geolocalização — ou porque a localização estava desligada, ou porque o aplicativo por onde ela passou removeu esse dado." },
  ],

  security:
    "Sua foto continua privada. Os metadados EXIF são lidos inteiramente no seu navegador — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.9", count: "312" },

  ui: {
    // MetadataTool.tsx — section titles (keys, translated at the render site)
    "File": "Arquivo",
    "Image": "Imagem",
    "Camera": "Câmera",
    "Exposure": "Exposição",
    "Date & time": "Data e hora",
    "Author & rights": "Autor e direitos",
    // MetadataTool.tsx — row labels
    "File name": "Nome do arquivo",
    "File size": "Tamanho do arquivo",
    "File type": "Tipo de arquivo",
    "Extension": "Extensão",
    "MIME type": "Tipo MIME",
    "Last modified": "Última modificação",
    "MD5": "MD5", // i18n-same
    "SHA-256": "SHA-256", // i18n-same
    "Dimensions": "Dimensões",
    "Megapixels": "Megapixels", // i18n-same
    "Aspect ratio": "Proporção",
    "Orientation": "Orientação",
    "Color space": "Espaço de cor",
    "Camera make": "Marca da câmera",
    "Camera model": "Modelo da câmera",
    "Lens": "Lente",
    "Software": "Software", // i18n-same
    "Aperture": "Abertura",
    "Shutter speed": "Velocidade do obturador",
    "ISO": "ISO", // i18n-same
    "Focal length": "Distância focal",
    "Focal length (35mm)": "Distância focal (35mm)",
    "Flash": "Flash", // i18n-same
    "Exposure program": "Programa de exposição",
    "Metering mode": "Modo de medição",
    "White balance": "Balanço de branco",
    "Taken": "Tirada em",
    "Digitized": "Digitalizada em",
    "Modified": "Modificada em",
    "Artist": "Autor",
    "Copyright": "Direitos autorais",
    "Description": "Descrição",
    // lib/image/format-info.ts — container row labels
    "JFIF version": "Versão JFIF",
    "Resolution unit": "Unidade de resolução",
    "X resolution": "Resolução X",
    "Y resolution": "Resolução Y",
    "Encoding process": "Processo de codificação",
    "Bits per sample": "Bits por amostra",
    "Color components": "Componentes de cor",
    "Chroma subsampling": "Subamostragem de croma",
    "Bit depth": "Profundidade de bits",
    "Color type": "Tipo de cor",
    "Interlaced": "Entrelaçado",
    "GIF version": "Versão do GIF",
    "Color table size": "Tamanho da tabela de cores",
    // lib/image/format-info.ts — the closed set of word values (TRANSLATABLE_VALUES)
    "None": "Nenhuma",
    "inches": "polegadas",
    "cm": "cm", // i18n-same
    "Yes (Adam7)": "Sim (Adam7)",
    "No": "Não",
    // MetadataTool.tsx
    "Please select an image file.": "Selecione um arquivo de imagem.",
    "bytes": "bytes", // i18n-same
    "Unknown": "Desconhecido",
    "unknown": "desconhecido",
    "image": "imagem",
    "or drop a JPG, PNG, TIFF or HEIC photo here": "ou solte uma foto JPG, PNG, TIFF ou HEIC aqui",
    "Clear image": "Limpar imagem",
    "Metadata options": "Opções de metadados",
    "Metadata": "Metadados",
    "Copy": "Copiar",
    "Copy all": "Copiar tudo",
    "Copied to clipboard.": "Copiado para a área de transferência.",
    "Couldn't copy to the clipboard.": "Não foi possível copiar para a área de transferência.",
    "Downloaded metadata as TXT.": "Metadados baixados em TXT.",
    "Downloaded metadata as JSON.": "Metadados baixados em JSON.",
    "No EXIF block in this file — messaging apps and social networks usually strip it. The file and image details below are read from the image itself, so they are still accurate.":
      "Este arquivo não tem bloco EXIF — apps de mensagem e redes sociais costumam remover. Os detalhes de arquivo e de imagem abaixo são lidos da própria imagem, então continuam corretos.",
    "Location": "Localização",
    "Latitude": "Latitude", // i18n-same
    "Longitude": "Longitude", // i18n-same
    "View on map": "Ver no mapa",
    "All metadata ({n})": "Todos os metadados ({n})",
    "Raw header": "Cabeçalho bruto",
    "Raw header (first 128 bytes)": "Cabeçalho bruto (primeiros 128 bytes)",
    // The TXT export (a person reads it; the JSON export keeps English keys)
    "Metadata of {name}": "Metadados de {name}",
    "Extracted automatically in your browser. It may be neither complete nor":
      "Extraídos automaticamente no seu navegador. Podem não estar completos nem",
    "accurate — metadata can be edited or removed at any point in a file's life.":
      "corretos — metadados podem ser editados ou removidos a qualquer momento.",
    "Generated by oMyImage": "Gerado pelo oMyImage",
  },
};

export default content;
