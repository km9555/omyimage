import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/imagem-em-texto.
 *
 * Head term "converter imagem em texto" — the Brazilian SERP converges on it
 * (invertexto.com, QuillBot /pt, imagetotext.info /br/imagem-em-texto, OCR.Best).
 * "extrair texto de imagem", "copiar texto de imagem" and "OCR online" are the
 * long tail. Hence the H1 "Converter imagem em texto" and the slug
 * `imagem-em-texto` (conversion.md §5).
 *
 * ACCURACY NOTE — this page describes what the tool actually does TODAY:
 * it reads on the server first (PaddleOCR) and falls back to Tesseract in the
 * browser. The English module (image-to-text.en.ts) still says the image is
 * never uploaded, which is no longer true; that is an English-side fix, and
 * this translation deliberately does not reproduce it.
 *
 * On /pt the recognition language defaults to Portuguese (ImageToTextTool.tsx).
 * The OCR language names and status strings are module scope → ui, by hand.
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "pt",
  name: "Converter imagem em texto",
  tagline:
    "Extraia o texto de fotos, prints e documentos digitalizados com OCR online e copie, edite ou baixe em .txt. Grátis, em português e sem cadastro.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter imagem em texto online grátis — OCR em português | oMyImage",
  metaDescription:
    "Converta imagem em texto com OCR online e grátis. Extraia e copie o texto de fotos, prints e documentos em JPG, PNG ou WEBP — com acentos em português.",

  intro:
    "Converter imagem em texto é tirar as palavras de um print, de uma página digitalizada ou da foto de um documento e receber de volta um texto que você pode copiar e editar. A leitura (OCR) é feita no nosso servidor com um modelo de reconhecimento de alta precisão e, se ele não puder ser acessado, a própria página lê a imagem no seu dispositivo — então a ferramenta funciona de um jeito ou de outro. Nesta página o idioma já vem em português, para os acentos e o ç saírem certos.",

  sections: [
    {
      heading: "O que o OCR consegue — e o que não consegue — fazer",
      id: "accuracy",
      body: [
        "O reconhecimento óptico de caracteres funciona localizando formas na página e comparando-as com um modelo treinado de como as letras são. Em material limpo, com bom contraste e reto — um print de tela, uma página de PDF exportada como imagem, um documento impresso passado no scanner — ele é muito preciso, e normalmente você vai corrigir pontuação, não palavras.",
        "Ele piora exatamente nas coisas que tornam uma foto difícil. Fotos tiradas de lado, iluminação irregular, sombra sobre a página, baixa resolução, fundo poluído atrás do texto e compressão forte de JPG reduzem a precisão, às vezes bastante. Letra cursiva é outro problema; espere resultados fracos com texto escrito à mão ligado.",
        "A lição prática é que a imagem de entrada importa muito mais do que qualquer configuração. Se você puder tirar a foto de novo, de frente, com a página bem iluminada e ocupando o quadro, só essa mudança vai melhorar o resultado mais do que qualquer outra coisa.",
      ],
    },
    {
      heading: "Como conseguir o melhor resultado",
      id: "tips",
      body: [
        "Fotografe ou escaneie de frente, e não na diagonal, para as linhas de texto ficarem na horizontal. A inclinação é a causa mais comum de texto embaralhado.",
        "Procure deixar o texto com pelo menos 20 pixels de altura. Se as letras ficam pequenas no quadro, recorte bem em volta do bloco de texto antes de extrair — um recorte mais justo da mesma foto costuma ser lido muito melhor do que a imagem inteira.",
        "Escolha o idioma certo antes de extrair. Um modelo em inglês lendo português produz, sem avisar, um texto aparentemente plausível e errado em cada letra acentuada — é por isso que aqui o português já vem selecionado.",
        "Para um documento fotografado sob uma luminária, deixar a imagem em preto e branco primeiro e aumentar o contraste pode ajudar o leitor a separar a tinta do papel.",
      ],
    },
    {
      heading: "Onde a leitura acontece e por que a primeira vez pode demorar",
      id: "model",
      body: [
        "A leitura principal roda no nosso servidor, que usa um modelo de reconhecimento maior e mais preciso do que caberia em uma aba do navegador. A imagem é enviada por uma conexão criptografada e excluída logo depois de lida.",
        "Se o servidor estiver fora do ar, a página lê a imagem no seu próprio dispositivo com o motor Tesseract. Nesse caso o motor e o modelo do idioma, que têm alguns megabytes, são baixados na primeira vez; o navegador guarda os dois em cache, então as leituras seguintes começam quase na hora. A ferramenta avisa quando a leitura foi feita no seu dispositivo.",
      ],
    },
    {
      heading: "Para que as pessoas usam",
      id: "uses",
      body: [
        "Copiar o texto de um print de conversa ou de um post, digitalizar uma receita ou um recibo, tirar o texto de um boleto ou de uma nota para colar em uma planilha, transcrever um slide fotografado em aula, ou recuperar o conteúdo de um documento que só existe como foto. Como o resultado cai em uma caixa de texto editável, você corrige o que precisar antes de copiar ou baixar.",
      ],
    },
  ],

  howToTitle: "Como converter imagem em texto",
  steps: [
    {
      title: "Adicione a imagem",
      description: "Envie uma foto, um print ou uma digitalização — JPG, PNG, WEBP e BMP funcionam.",
    },
    {
      title: "Escolha o idioma",
      description: "O português já vem selecionado. Troque se o texto estiver em outro idioma — isso afeta a precisão mais do que qualquer outra configuração.",
    },
    {
      title: "Extraia e copie",
      description: "Clique em Extrair texto. Corrija o que o leitor tiver errado e depois copie ou baixe como arquivo .txt.",
    },
  ],

  features: [
    {
      icon: "lock",
      title: "Arquivo excluído logo após a leitura",
      description:
        "A imagem viaja por uma conexão criptografada, é lida e excluída em seguida. Nada fica guardado nem é usado para treinar modelos.",
    },
    {
      icon: "translate",
      title: "13 idiomas",
      description:
        "Português, inglês, espanhol, francês, alemão, italiano, holandês, russo, árabe, hindi, chinês, japonês e coreano.",
    },
    {
      icon: "edit_note",
      title: "Editável antes de salvar",
      description:
        "O resultado cai em uma caixa de texto que você pode corrigir. Nenhum OCR é perfeito, então ajustar um caractere faz parte do trabalho.",
    },
  ],

  faqs: [
    {
      q: "Minha imagem é enviada para um servidor?",
      a: "Sim, para a leitura principal: a imagem vai por uma conexão criptografada até o nosso servidor, é lida e excluída logo em seguida. Se o servidor não estiver disponível, a leitura acontece no seu próprio navegador e a imagem não sai do dispositivo — a ferramenta avisa quando isso acontece.",
    },
    {
      q: "Qual a precisão da conversão de imagem em texto?",
      a: "Em material impresso e limpo — prints, digitalizações, páginas de documentos exportadas — a precisão costuma ser muito alta. Ela cai com fotos tiradas de lado, pouca luz, baixa resolução e letras pequenas. O resultado é editável justamente porque nenhum OCR é perfeito.",
    },
    {
      q: "Consegue ler letra de mão?",
      a: "Não de forma confiável. O reconhecimento é treinado em letra impressa, e a letra cursiva em especial dá resultados fracos. Letra de forma bem legível às vezes funciona; texto escrito ligado geralmente não.",
    },
    {
      q: "Quais idiomas são aceitos?",
      a: "Treze: português, inglês, espanhol, francês, alemão, italiano, holandês, russo, árabe, hindi, chinês simplificado, japonês e coreano. Selecione o idioma do texto antes de extrair — usar o modelo errado piora muito a precisão.",
    },
    {
      q: "Os acentos e o ç saem certos?",
      a: "Sim, desde que o idioma selecionado seja o português, que nesta página já vem marcado. Com um modelo em inglês, letras como ã, é e ç viram outra coisa ou somem.",
    },
    {
      q: "Por que a primeira leitura pode demorar?",
      a: "Quando a leitura roda no seu dispositivo, o motor e o modelo do idioma são baixados na primeira vez em vez de virem junto com a página, para que quem nunca usa esta ferramenta não pague por ela. O navegador guarda tudo em cache, e as próximas leituras começam na hora.",
    },
    {
      q: "Mantém o layout original?",
      a: "Só em parte. Você recebe o texto com as quebras de linha, não uma reconstrução de colunas, tabelas ou formatação. Para uma tabela, normalmente é preciso arrumar o resultado à mão.",
    },
    {
      q: "Dá para extrair texto de um PDF?",
      a: "Não diretamente — esta ferramenta recebe imagens. Exporte ou tire um print da página do PDF como PNG ou JPG primeiro e depois passe por aqui.",
    },
    {
      q: "É grátis?",
      a: "Sim, sem conta, sem marca d'água e sem limite de quantas imagens você converte.",
    },
  ],

  security:
    "A leitura principal acontece no nosso servidor: a imagem é enviada por uma conexão criptografada e excluída logo depois de lida, sem ser guardada, indexada ou usada para treinar modelos. Se o servidor não puder ser acessado, o reconhecimento roda no seu próprio dispositivo e a imagem não é enviada.",

  rating: { value: "4.8", count: "726" },

  ui: {
    // ImageToTextTool.tsx
    "Please select a JPG, PNG, WEBP or BMP image.": "Selecione uma imagem JPG, PNG, WEBP ou BMP.",
    "or drop a JPG, PNG, WEBP or BMP here": "ou solte um JPG, PNG, WEBP ou BMP aqui",
    "Read on our server for the best accuracy (falls back to your device if the server is unreachable) — files are deleted right after.":
      "Lido no nosso servidor para ter mais precisão (ou no seu dispositivo, se o servidor não responder) — os arquivos são excluídos logo em seguida.",
    "OCR settings": "Configurações do OCR",
    "OCR Settings": "Configurações do OCR",
    "Read": "Ler",
    "Reading…": "Lendo…",
    "Read again": "Ler de novo",
    "Extract text": "Extrair texto",
    "Remove image": "Remover imagem",
    "Extracted text": "Texto extraído",
    "1 word": "1 palavra",
    "{n} words": "{n} palavras",
    "{pct}% confidence": "{pct}% de confiança",
    "The recognizer's own estimate of how confident it is in this reading — not a guarantee. Low scores usually mean small or blurry source text; worth a proofread.":
      "A estimativa do próprio leitor sobre o quanto confia nesta leitura — não é uma garantia. Notas baixas costumam indicar texto pequeno ou borrado; vale revisar.",
    "editable before you copy or download": "editável antes de copiar ou baixar",
    "read on your device": "lido no seu dispositivo",
    "Our server-side reader was unreachable or unavailable, so this ran on your device instead — usually a bit less accurate on small or dense text.":
      "O leitor do servidor não respondeu, então a leitura rodou no seu dispositivo — normalmente um pouco menos precisa com texto pequeno ou denso.",
    "Choose a language, then press Extract text.": "Escolha o idioma e clique em Extrair texto.",
    "Language of the text": "Idioma do texto",
    "Picking the right language matters more than anything else for accuracy.":
      "Escolher o idioma certo é o que mais importa para a precisão.",
    "Copy text": "Copiar texto",
    "Download .txt": "Baixar .txt",
    "Read on our server for the best accuracy, over an encrypted connection — the image is deleted right after. If our server can't be reached, this reads the image on your own device instead, so the tool still works either way.":
      "Lido no nosso servidor para ter mais precisão, por uma conexão criptografada — a imagem é excluída logo depois. Se o servidor não responder, a leitura é feita no seu próprio dispositivo, então a ferramenta funciona de um jeito ou de outro.",
    "Text copied to clipboard": "Texto copiado",
    "Couldn't access the clipboard.": "Não foi possível acessar a área de transferência.",
    "No text found in this image": "Nenhum texto encontrado nesta imagem",
    "Try a sharper or higher-contrast scan.": "Tente uma imagem mais nítida ou com mais contraste.",
    "Extracted 1 word": "1 palavra extraída",
    "Extracted {n} words": "{n} palavras extraídas",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    // Progress / status (module scope humanStatus + inline setStatus calls)
    "Loading the recognition engine…": "Carregando o motor de reconhecimento…",
    "Uploading your image…": "Enviando sua imagem…",
    "Queued on the server…": "Na fila do servidor…",
    "Reading the text on our server…": "Lendo o texto no nosso servidor…",
    "Server OCR unavailable — reading on your device instead…":
      "OCR do servidor indisponível — lendo no seu dispositivo…",
    "Downloading the recognition model (first run only)…":
      "Baixando o modelo de reconhecimento (só na primeira vez)…",
    "Starting the engine…": "Iniciando o motor…",
    "Reading the text…": "Lendo o texto…",
    // LANGUAGES (module scope, §4.2)
    "English": "Inglês",
    "Spanish": "Espanhol",
    "French": "Francês",
    "German": "Alemão",
    "Italian": "Italiano",
    "Portuguese": "Português",
    "Dutch": "Holandês",
    "Russian": "Russo",
    "Arabic": "Árabe",
    "Hindi": "Hindi", // i18n-same
    "Chinese (Simplified)": "Chinês (simplificado)",
    "Japanese": "Japonês",
    "Korean": "Coreano",
    // Backend sentences this tool can surface (routes/image/ocr)
    "Upload an image to run OCR on.": "Envie uma imagem para fazer o OCR.",
    "Server OCR is unavailable (PaddleOCR is not installed on the server).":
      "O OCR do servidor está indisponível no momento.",
  },
};

export default content;
