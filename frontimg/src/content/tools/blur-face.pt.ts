import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/desfocar-rosto.
 *
 * Head term "desfocar rosto (em foto)" — Watermarkly, SnapEdit, img2go and
 * Imagy all title on it for pt-BR; Fotor /pt uses "borrar rosto", which lives
 * in aliases.ts with "censurar foto" and "pixelizar rosto". iLoveIMG /pt says
 * "desfocar cara" — European Portuguese, the form to avoid (conversion.md §3).
 * The legal section names the LGPD, not the GDPR: it is the law a Brazilian
 * reader is actually subject to, and the reasoning is the same.
 */
const content: ToolPageContent = {
  toolId: "blur-face",
  locale: "pt",
  name: "Desfocar rosto e censurar",
  tagline:
    "Desfoque ou pixelize rostos, placas de carro e dados pessoais nas suas fotos online — marque as áreas, escolha a intensidade e exporte. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Desfocar rosto em foto online grátis — borrar e pixelizar | oMyImage",
  metaDescription:
    "Desfoque rostos em fotos online e grátis: a IA encontra os rostos sozinha e você borra, pixeliza ou tampa placas e documentos. Tudo no navegador, sem enviar a foto.",

  intro:
    "Desfocar o rosto de uma foto é o jeito mais simples de esconder quem aparece nela antes de compartilhar. A ferramenta Desfocar rosto do oMyImage encontra os rostos automaticamente e deixa você marcar à mão qualquer outro detalhe privado — um crachá, uma placa de carro, um documento na mesa. Desfoque, pixelize ou cubra com uma cor sólida, ajuste cada área arrastando, e processe um lote inteiro de uma vez. A censura fica gravada de forma permanente na imagem exportada, e tudo — inclusive a detecção de rostos — roda no seu navegador, então sua foto nunca é enviada.",

  sections: [
    {
      heading: "Por que desfocar é melhor do que uma tarja preta",
      id: "method",
      body: [
        "Um retângulo preto desenhado sobre um rosto num arquivo de edição em camadas não é censura — é um adesivo, e qualquer pessoa que abrir o arquivo original consegue tirar do lugar. Mesmo achatada, uma tarja sólida anuncia que algo foi escondido e convida à pergunta: o quê?",
        "O desfoque funciona de outro jeito. Ele destrói a informação no lugar: cada pixel é trocado pela média dos vizinhos, e o detalhe que tornava o rosto reconhecível deixa de existir em qualquer parte do arquivo. Depois de exportar não há nada para recuperar, porque nada foi guardado.",
        "Essa é a propriedade que você realmente quer de uma censura. Não esconder, que pode ser desfeito, mas destruir, que não pode.",
      ],
    },
    {
      heading: "Desfocar ou pixelizar",
      id: "blur-vs-pixelate",
      body: [
        "A pixelização troca regiões por blocos grandes de uma única cor média. Ela parece decidida e, por isso, é a convenção da televisão e do jornalismo, onde o público precisa entender que algo foi omitido.",
        "Para anonimizar de verdade, é a opção mais fraca. As médias dos blocos guardam estrutura — a posição aproximada dos olhos, o formato do queixo, o contraste entre cabelo e pele —, e pesquisadores já mostraram que é possível reconhecer pessoas em rostos pixelizados quando o bloco não era grande o bastante. Um desfoque gaussiano forte deixa bem menos sinal para trás.",
        "Use a pixelização quando quiser que a censura seja visivelmente óbvia, e o desfoque quando quiser que a pessoa fique de fato irreconhecível. Se precisar das duas coisas, pixelize com blocos grandes, e não pequenos.",
      ],
    },
    {
      heading: "Como cobrir o suficiente",
      id: "coverage",
      body: [
        "O erro mais comum é desfocar apertado demais. Uma área que cobre só os olhos deixa intactos o contorno do rosto, a linha do cabelo, as orelhas e o tom de pele — e as pessoas são reconhecidas por tudo isso. Cubra a cabeça inteira e passe um pouco da linha do cabelo.",
        "O segundo erro é desfocar fraco demais. Avalie o resultado com zoom total, e não no tamanho da miniatura, porque um desfoque que parece suficiente numa prévia pequena muitas vezes não é. Se você ainda consegue dizer quem é, qualquer pessoa que conheça quem está na foto também consegue.",
        "Lembre do resto da imagem. Crachás, números de casa, placas de carro, reflexos em vidros e o texto de uma tela atrás da pessoa também identificam alguém — e uma foto com o rosto perfeitamente desfocado e uma placa de rua legível não resolveu muita coisa. A aba Texto encontra escrita automaticamente, e as abas Pincel e Forma cobrem o resto à mão.",
      ],
    },
    {
      heading: "Quando isso importa pela LGPD",
      id: "legal",
      body: [
        "Pela Lei Geral de Proteção de Dados (LGPD), um rosto reconhecível é dado pessoal — e a imagem de uma pessoa também é protegida pelo direito de imagem do Código Civil. Publicar essa imagem normalmente exige uma base legal, e o consentimento é a mais comum. A obrigação pesa muito mais sobre empresas e instituições do que sobre quem posta fotos das férias, mas ela existe.",
        "As situações em que ela pesa mais são previsíveis: fotos com crianças, imagens de escolas, clínicas e hospitais, fotos de multidão usadas em publicidade, fotos no ambiente de trabalho e qualquer imagem de pessoas que não sabiam que estavam sendo fotografadas. Desfocar os rostos é o jeito mais barato de tirar a questão da mesa.",
        "Como tudo aqui roda no seu navegador, o original sem censura nunca sai do seu aparelho — que é exatamente o tratamento certo para esse tipo de imagem.",
      ],
    },
  ],

  howToTitle: "Como desfocar o rosto em uma foto",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Detecte ou desenhe", description: "Na aba Rosto, clique em Esta imagem para encontrar os rostos automaticamente; depois arraste, redimensione ou exclua qualquer área — e desenhe as suas sobre placas, nomes ou documentos." },
    { title: "Exporte", description: "Clique em Exportar imagem para baixar as fotos com as áreas censuradas gravadas — em um ZIP quando forem várias." },
  ],

  features: [
    { icon: "face_retouching_natural", title: "Detecção automática de rostos", description: "Encontra todos os rostos da foto na sensibilidade que você escolher, e o modelo roda no seu aparelho — a imagem nunca é enviada." },
    { icon: "blur_on", title: "Desfocar, pixelizar ou tarjar", description: "Escolha um desfoque suave, uma pixelização em blocos ou uma cor sólida, e ajuste a intensidade até esconder de vez os detalhes sensíveis." },
    { icon: "select_all", title: "Áreas editáveis", description: "Cada área pode ser movida, redimensionada por qualquer canto ou lado e excluída individualmente — em elipse para rostos ou em retângulo para placas e documentos." },
    { icon: "lock", title: "Privado de verdade", description: "Tudo é processado no seu navegador — o original nunca sai do seu aparelho, e a censura é permanente no arquivo exportado." },
  ],

  faqs: [
    { q: "Dá para desfocar mais de um rosto?", a: "Sim. A detecção automática marca todos os rostos que encontrar, e você pode desenhar quantas áreas quiser à mão, além de desfazer ou limpar tudo." },
    { q: "Qual a diferença entre desfocar e pixelizar?", a: "O desfoque suaviza a área de forma contínua, e a pixelização troca a área por blocos grandes. Com intensidade alta o bastante, os dois escondem os detalhes." },
    { q: "O desfoque é permanente?", a: "Sim. As áreas censuradas são desenhadas direto na imagem exportada, então quem recebe não consegue desfazer." },
    { q: "A detecção automática envia minha foto?", a: "Não. O modelo de detecção de rostos é baixado para o seu navegador na primeira vez que você usa e depois roda no seu próprio aparelho — igual ao desfoque. Nada da imagem é enviado para lugar nenhum, e esse é o ponto: as fotos que as pessoas censuram são justamente as que não deveriam passar pelo servidor de ninguém." },
    { q: "Ele não achou um rosto — e agora?", a: "Aumente a sensibilidade e detecte de novo, ou simplesmente desenhe a área à mão. A detecção é ajustada para rostos razoavelmente perto da câmera, então rostos pequenos numa multidão ou numa cena de rua distante são as falhas mais comuns. Tudo o que ela encontra vira uma área normal, que você pode mover, redimensionar ou excluir." },
    { q: "É grátis?", a: "Totalmente grátis, sem marca d'água e sem cadastro." },
    { q: "Dá para reverter o desfoque?", a: "Não, por nenhum meio prático. O desfoque descarta a informação em vez de escondê-la, então não sobra nada para recuperar — diferente de uma tarja preta desenhada num arquivo em camadas, ou de uma pixelização tão leve que uma IA consiga reconstruir. Depois de exportado, o rosto não existe mais nos pixels." },
    { q: "Uso desfoque ou pixelização?", a: "O desfoque é a escolha mais segura. Uma pixelização com blocos grandes às vezes pode ser parcialmente reconstruída, porque as médias dos blocos ainda guardam estrutura. Um desfoque gaussiano forte deixa muito menos para trabalhar. A pixelização deixa mais claro que houve censura, o que de vez em quando é o que você quer." },
    { q: "Qual intensidade de desfoque devo usar?", a: "Forte o bastante para que você mesmo não reconheça a pessoa com zoom total. Um desfoque leve que só suaviza os traços não é anonimização — o rosto continua identificável para quem conhece a pessoa, e muitas vezes para um software. Na dúvida, vá mais forte." },
    { q: "Isso também remove a localização da foto?", a: "Sim, como efeito colateral: a imagem é redesenhada num canvas, que não leva os metadados EXIF junto, então as coordenadas de GPS e os dados da câmera somem. Se a sua preocupação principal são os metadados, e não os rostos, a ferramenta Remover EXIF é a certa." },
    { q: "Preciso desfocar rostos antes de postar fotos?", a: "Depende de onde e do que é a foto. Pela LGPD um rosto reconhecível é dado pessoal, e publicar imagens de crianças, pacientes, pessoas que só passavam ou gente em situações sensíveis traz obrigações reais. Quando você não tem o consentimento, desfocar é a resposta simples." },
    { q: "Minha foto é enviada para algum servidor?", a: "Não. Toda a operação roda num canvas dentro do seu navegador, o que importa muito aqui — as imagens que as pessoas desfocam costumam ser exatamente as que não deveriam passar pelo servidor de ninguém." },
    { q: "Dá para desfocar uma placa de carro ou um documento?", a: "Sim. Na aba Texto a ferramenta procura escrita na imagem — uma placa, um número de casa, um CPF num documento — e marca cada trecho como uma área. O que ela não achar, você cobre com um retângulo na aba Forma ou pinta com o Pincel." },
  ],

  security:
    "Suas imagens continuam privadas. Tanto a detecção de rostos quanto o desfoque acontecem inteiramente no seu navegador — o modelo de código aberto MediaPipe BlazeFace é baixado para o seu aparelho e roda ali, então nada é enviado a um servidor em momento nenhum. O resultado censurado é permanente no arquivo exportado. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "389" },

  ui: {
    // BlurTool.tsx — module-scope TABS (translated at the render site)
    "Brush": "Pincel",
    "Shape": "Forma",
    "Text": "Texto",
    "Face": "Rosto",
    // face-detect / text-detect SENSITIVITY_LABELS
    "Low": "Baixa",
    "Recommended": "Recomendada",
    "High": "Alta",
    "Only very confident matches": "Só correspondências muito seguras",
    "Balanced for most photos": "Equilibrada para a maioria das fotos",
    "Catches more, may over-detect": "Encontra mais, pode marcar demais",
    "Only clearly legible text": "Só texto bem legível",
    "Catches faint text, may over-detect": "Encontra texto apagado, pode marcar demais",
    // Tesseract's own status strings, capitalised (text tab)
    "Loading tesseract core": "Carregando o motor de reconhecimento",
    "Initializing tesseract": "Iniciando o motor",
    "Initialized tesseract": "Motor iniciado",
    "Loading language traineddata": "Baixando o modelo de idioma",
    "Loaded language traineddata": "Modelo de idioma carregado",
    "Initializing api": "Preparando a leitura",
    "Initialized api": "Leitura pronta",
    "Recognizing text": "Procurando texto",
    // BlurTool.tsx
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "Couldn't read {name}.": "Não foi possível ler {name}.",
    "Found 1 face": "1 rosto encontrado",
    "Found {n} faces": "{n} rostos encontrados",
    "Found 1 piece of text": "1 trecho de texto encontrado",
    "Found {n} pieces of text": "{n} trechos de texto encontrados",
    "in 1 image.": "em 1 imagem.",
    "in {n} images.": "em {n} imagens.",
    "No faces detected — try a higher sensitivity, or draw the areas by hand.":
      "Nenhum rosto detectado — tente uma sensibilidade maior, ou desenhe as áreas à mão.",
    "No text detected — try a higher sensitivity, or draw the areas by hand.":
      "Nenhum texto detectado — tente uma sensibilidade maior, ou desenhe as áreas à mão.",
    "Face detection couldn't start. You can still draw areas by hand.":
      "Não foi possível iniciar a detecção de rostos. Você ainda pode desenhar as áreas à mão.",
    "Text detection couldn't start. You can still draw areas by hand.":
      "Não foi possível iniciar a detecção de texto. Você ainda pode desenhar as áreas à mão.",
    "Ellipse": "Elipse",
    "Rectangle": "Retângulo",
    "Brush {n}": "Pincel {n}",
    "Erase {n}": "Borracha {n}",
    "Add at least one area to censor.": "Adicione pelo menos uma área para censurar.",
    "Pick an effect — \"No blur\" leaves the image unchanged.":
      "Escolha um efeito — \"Sem desfoque\" deixa a imagem como está.",
    "Exported 1 image.": "1 imagem exportada.",
    "Exported {n} images.": "{n} imagens exportadas.",
    "Export failed.": "Falha ao exportar.",
    "Edit {name}": "Editar {name}",
    "1 area": "1 área",
    "{n} areas": "{n} áreas",
    "done": "pronto",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Arraste para desenhar uma área, clique numa para selecionar, arraste as alças para redimensionar e aperte Delete para excluir.",
    "1 area on this image.": "1 área nesta imagem.",
    "{n} areas on this image.": "{n} áreas nesta imagem.",
    "Clear images": "Limpar imagens",
    "Files": "Arquivos",
    "Blur settings": "Configurações de desfoque",
    "Export": "Exportar",
    "Exporting…": "Exportando…",
    "Censor Settings": "Configurações de censura",
    "Censoring is baked into the exported file — all in your browser.":
      "A censura fica gravada no arquivo exportado — tudo no seu navegador.",
    "Export {n} images": "Exportar {n} imagens",
    "Export image": "Exportar imagem",
    "Draw on the image to edit": "Desenhe na imagem para editar",
    "Add blur": "Desfocar",
    "Brush size": "Tamanho do pincel",
    "Brush fade": "Suavidade do pincel",
    "Undo stroke": "Desfazer traço",
    "Clear all": "Limpar tudo",
    "Remove erases from anything on the image, including a detected face — they share one mask.":
      "Remover apaga de qualquer coisa na imagem, inclusive de um rosto detectado — tudo compartilha a mesma máscara.",
    "New area shape": "Formato da nova área",
    "Ellipse follows the shape of a head more closely and looks less like a redaction box. Rectangle is better for signs, plates and documents.":
      "A elipse acompanha melhor o formato de uma cabeça e parece menos uma tarja. O retângulo é melhor para letreiros, placas e documentos.",
    "Delete area": "Excluir área",
    "Drag on the image to draw an area, then move or resize it by its handles.":
      "Arraste na imagem para desenhar uma área e depois mova ou redimensione pelas alças.",
    "Automatic text detection": "Detecção automática de texto",
    "Reads the image on your device to find writing - a licence plate, a door number, an address. Your photo is never uploaded, though the recognition engine itself downloads from a CDN the first time you use it.":
      "Lê a imagem no seu aparelho para encontrar escrita - uma placa de carro, um número de casa, um endereço. Sua foto nunca é enviada, mas o motor de reconhecimento é baixado de uma CDN na primeira vez que você usa.",
    "Whole lines": "Linhas inteiras",
    "Single words": "Palavras soltas",
    "Reading...": "Lendo...",
    "This image": "Esta imagem",
    "All {n}": "Todas ({n})",
    "The first run downloads the engine, so it takes a few seconds. Lines suits an address, words suits one field on a form. Pale text on a dark background is often missed — draw over that with Shape or Brush.":
      "Na primeira vez o motor é baixado, então leva alguns segundos. Linhas servem para um endereço; palavras, para um campo de um formulário. Texto claro sobre fundo escuro costuma escapar — cubra à mão com Forma ou Pincel.",
    "Automatic face detection": "Detecção automática de rostos",
    "Runs a face-detection model downloaded to your browser. Your photo is never uploaded — detection happens on your device.":
      "Usa um modelo de detecção de rostos baixado para o seu navegador. Sua foto nunca é enviada — a detecção acontece no seu aparelho.",
    "Detecting…": "Detectando…",
    "Detected faces become normal areas — nudge, resize or delete any of them.":
      "Os rostos detectados viram áreas normais — ajuste, redimensione ou exclua qualquer uma.",
    "Edit blur masks": "Editar máscaras de desfoque",
    "Show": "Mostrar",
    "Hide": "Ocultar",
    "Show {name}": "Mostrar {name}",
    "Hide {name}": "Ocultar {name}",
    "Delete": "Excluir",
    "Delete {name}": "Excluir {name}",
    "Intensity": "Intensidade",
    "Block colour": "Cor do bloco",
    "{effect} keeps some of the original detail. For a face you want kept private, use Gaussian at a high intensity or Colour.":
      "{effect} mantém parte do detalhe original. Para um rosto que precisa ficar privado, use Gaussiano com intensidade alta ou Cor sólida.",
  },
};

export default content;
