import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/foto-para-documento (new tool, 2026-10-04). In
 * Brazil the everyday document photo is the 3 × 4 cm ("foto 3x4" 90.5K/mo,
 * which has its own page, /pt/foto-3x4); this parent page targets "foto para
 * documento", "foto de passaporte" and "foto para visto", and opens on 3 × 4
 * cm because that is what most Brazilian visitors need. Framing, sizing and
 * print sheets run in the browser; only the optional background change uses
 * the server, and the copy says so.
 */
const content: ToolPageContent = {
  toolId: "passport-photo-maker",
  locale: "pt",
  name: "Foto para documento",
  tagline:
    "Faça foto 3x4, de passaporte e de visto em casa: o rosto é enquadrado automaticamente no tamanho certo — 3 × 4 cm, 5 × 7 cm, 35 × 45 mm, 2 × 2 polegadas e outros — e você baixa a foto em 300 DPI e uma folha com várias cópias para imprimir. Grátis e privado, no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },
  variantsHeading: "Tamanhos de foto para documento",

  metaTitle: "Foto para Documento Online — 3x4, Passaporte e Visto, Grátis | oMyImage",
  metaDescription:
    "Faça foto para documento online grátis: enquadramento automático do rosto em 3x4, 5x7, 35x45 mm ou 2x2, fundo branco ou colorido e folha 10x15 para imprimir.",

  intro:
    "Uma foto para documento é, antes de tudo, geometria: o tamanho certo do papel, a cabeça na altura certa, o espaço certo acima dela. Esta ferramenta faz essa conta por você. Envie uma foto de frente e nítida, escolha o tamanho do documento, e ela encontra o rosto, enquadra cabeça e ombros nas proporções que as regras de documento usam e gera um JPG pronto para imprimir em 300 DPI. Você pode ajustar o enquadramento, trocar o fundo por branco ou outra cor, manter o arquivo abaixo de um limite em KB para formulários online e baixar uma folha 10 × 15 cm ou A4 com quantas cópias couberem.",

  sections: [
    {
      heading: "Tamanhos de foto por documento e por país",
      id: "sizes",
      body: [
        "No Brasil, a 3 × 4 cm é a foto de documento do dia a dia: matrícula escolar e universitária, crachá, carteirinha de estudante, de clube e de academia, inscrição em concurso e ficha de emprego. A 5 × 7 cm aparece em alguns documentos e em pedidos feitos em consulados. Para viajar, cada país tem o seu padrão: 35 × 45 mm (3,5 × 4,5 cm) na União Europeia, no espaço Schengen, no Reino Unido e em muitos outros países, e 2 × 2 polegadas (cerca de 5 × 5 cm) para visto e passaporte dos Estados Unidos. O Canadá usa 50 × 70 mm e o visto chinês, 33 × 48 mm.",
        "As regras mudam e variam entre passaporte, visto e formulário, então trate esta lista como ponto de partida e confira as instruções atuais do seu documento. Todos esses tamanhos estão na lista da ferramenta; escolha o que o seu formulário pede.",
      ],
    },
    {
      heading: "Como funciona o enquadramento automático",
      id: "framing",
      body: [
        "Um modelo de detecção de rosto encontra o seu rosto na foto — no seu aparelho, sem enviar a imagem. A partir da posição do rosto, a ferramenta estima a cabeça inteira, do alto do cabelo ao queixo, e ajusta o quadro para que a cabeça ocupe a fatia da altura que as regras de documento pedem, centralizada na horizontal e com um pouco mais de espaço acima da cabeça do que nas laterais.",
        "Penteados, chapéus e ângulos incomuns podem desviar um pouco a estimativa, então confira a prévia. O controle Tamanho da cabeça aumenta ou diminui a cabeça, os controles de posição movem o quadro e Redefinir enquadramento volta ao resultado automático. Se a foto original tiver pouco espaço acima da cabeça, o quadro é deslocado para não aparecer uma faixa vazia; trocar o fundo devolve o espaçamento padrão.",
      ],
    },
    {
      heading: "Como tirar uma foto que é aceita",
      id: "taking",
      body: [
        "Fique a cerca de um metro de uma parede lisa e clara, de frente para a câmera, com luz uniforme no rosto — a luz do dia vinda de uma janela à sua frente funciona bem; luz forte vinda de cima, não. Mantenha expressão neutra, boca fechada e os dois olhos abertos, e tire os óculos se as regras do seu documento exigirem (muitas exigem hoje).",
        "Peça para outra pessoa tirar a foto a uns 1,5 metro de distância, em vez de fazer uma selfie com o braço esticado, que deforma o rosto. Tire várias e escolha a mais nítida: o enquadramento dá para corrigir aqui; o foco, não.",
      ],
    },
    {
      heading: "Imprimindo no tamanho certo",
      id: "printing",
      body: [
        "A foto é salva em 300 DPI, a resolução que gráficas e impressoras de foto esperam, então ela sai exatamente no tamanho do documento — uma 3 × 4 cm tem 354 × 472 pixels, uma 35 × 45 mm tem 413 × 531. A folha de impressão coloca quantas cópias couberem em papel fotográfico 10 × 15 cm ou em A4, com linhas cinza finas para recortar.",
        "Imprima a folha em 100% (\"tamanho real\"), não em \"ajustar à página\", senão as fotos saem um pouco menores. A revelação 10 × 15 é a opção mais barata na maioria das lojas de foto e comporta várias fotos 3x4 numa folha só.",
      ],
    },
    {
      heading: "Fotos para inscrições online",
      id: "online",
      body: [
        "Formulários online de concursos, vestibulares, processos seletivos e cadastros costumam pedir um JPG abaixo de um limite de tamanho — muitas vezes 50 KB, 100 KB ou 200 KB. Digite o limite em Tamanho máximo do arquivo e a foto baixada fica abaixo dele. O tamanho impresso continua certo mesmo que alguns pixels precisem sair, porque a marcação de DPI do arquivo é ajustada junto.",
      ],
    },
    {
      heading: "Quando o órgão tira a foto na hora",
      id: "on-site",
      body: [
        "Vários documentos brasileiros têm a foto tirada no próprio atendimento — o passaporte, na Polícia Federal, e a identidade e a CNH em muitos estados. Nesses casos você não precisa levar foto. A foto em papel ou em arquivo continua sendo pedida em todo o resto: escolas, faculdades, empresas, conselhos de classe, clubes, academias e muitos formulários online. Antes de imprimir, veja no site do órgão se a foto é mesmo exigida e em que tamanho.",
      ],
    },
  ],

  howToTitle: "Como fazer uma foto para documento",
  steps: [
    { title: "Envie um retrato", description: "Escolha uma foto de frente, nítida — JPG, PNG ou WEBP." },
    { title: "Escolha o tamanho", description: "Selecione o tamanho do documento; o rosto é enquadrado sozinho e você pode ajustar." },
    { title: "Baixe a foto ou a folha", description: "Salve a foto em 300 DPI ou uma folha 10 × 15 cm ou A4 com várias cópias para imprimir." },
  ],

  features: [
    { icon: "badge", title: "Enquadramento automático", description: "A detecção de rosto dimensiona e centraliza a cabeça como as regras de documento pedem, em todos os tamanhos comuns." },
    { icon: "grid_view", title: "Folhas para imprimir", description: "Quantas cópias couberem em papel 10 × 15 cm ou A4, com linhas de corte, em 300 DPI." },
    { icon: "lock", title: "Privado por padrão", description: "Enquadramento e impressão acontecem no seu navegador; só a troca de fundo, se você quiser, usa o nosso servidor." },
  ],

  faqs: [
    { q: "Qual é o tamanho da foto para documento?", a: "Depende do documento. No Brasil, a mais pedida é a 3 × 4 cm; passaportes e vistos de muitos países usam 35 × 45 mm, e os Estados Unidos, 2 × 2 polegadas. Escolha o tamanho na lista e o enquadramento se ajusta." },
    { q: "Quantos pixels tem cada tamanho em 300 DPI?", a: "3 × 4 cm = 354 × 472 pixels; 35 × 45 mm = 413 × 531; 5 × 7 cm = 591 × 827; 2 × 2 polegadas = 600 × 600. A ferramenta salva exatamente esses tamanhos, com o DPI gravado no arquivo." },
    { q: "Posso deixar o fundo branco?", a: "Sim. Em Fundo, escolha Trocar cor; a pessoa é recortada e colocada sobre branco ou a cor que você escolher. Essa etapa usa uma execução de IA no nosso servidor." },
    { q: "Como imprimir várias fotos numa folha só?", a: "Baixe a folha 10 × 15 cm ou A4 e imprima em 100%. Uma folha 10 × 15 comporta várias fotos 3x4 ou 35 × 45 mm, com linhas cinza para recortar." },
    { q: "Dá para fazer a foto com menos de 50 KB para um formulário?", a: "Sim. Digite 50 em Tamanho máximo do arquivo antes de baixar; a foto fica abaixo de 50 KB e o tamanho impresso continua correto." },
    { q: "A minha foto vai ser aceita?", a: "A ferramenta acerta o tamanho e o enquadramento. Iluminação, expressão, óculos, posição da cabeça e a data da foto são regras que você precisa cumprir na hora de fotografar — confira as instruções do seu documento." },
    { q: "Minha foto é enviada para algum servidor?", a: "Não — detecção de rosto, enquadramento e impressão rodam no seu navegador. Só se você trocar o fundo a foto vai para o nosso servidor, onde o recorte é apagado automaticamente em até uma hora." },
    { q: "Posso usar uma selfie?", a: "Melhor não. Um celular com o braço esticado deforma o rosto, e a maioria das regras pede uma foto tirada a cerca de 1,5 m. Peça ajuda a alguém ou use o timer e um apoio." },
    { q: "Dá para imprimir em casa?", a: "Sim, numa impressora jato de tinta com papel fotográfico, imprimindo a folha A4 ou 10 × 15 em 100%. Papel comum serve para fichas internas, mas o papel fotográfico dura mais e é o que a maioria das instituições espera." },
  ],

  security:
    "Detecção de rosto, enquadramento, redimensionamento e folhas de impressão rodam inteiramente no seu navegador — a foto não sai do seu aparelho. Se você decidir trocar o fundo, a foto é enviada uma vez, por conexão criptografada, ao nosso mecanismo de remoção de fundo (rembg), e o resultado é apagado automaticamente em até uma hora.",

  ui: {
    // PassportPhotoTool.tsx — document sizes
    "35 × 45 mm — passport: India, UK, EU, Russia": "35 × 45 mm — passaporte e visto: UE, Reino Unido, Índia, Rússia",
    "2 × 2 in (51 × 51 mm) — US passport and visa": "2 × 2 pol. (51 × 51 mm) — passaporte e visto dos EUA",
    "3 × 4 cm — documents: Brazil, Indonesia": "3 × 4 cm — foto 3x4 (documentos no Brasil)",
    "4 × 6 cm — pas foto (Indonesia)": "4 × 6 cm — documentos da Indonésia",
    "2 × 3 cm — pas foto (Indonesia)": "2 × 3 cm — documentos da Indonésia",
    "5 × 7 cm — document photo (Brazil)": "5 × 7 cm — foto 5x7",
    "33 × 48 mm — China visa": "33 × 48 mm — visto da China",
    "50 × 70 mm — Canada passport": "50 × 70 mm — passaporte do Canadá",
    "2 × 2 in": "2 × 2 pol.",
    // PassportPhotoTool.tsx
    "Select a photo": "Selecionar foto",
    "or drop a JPG, PNG or WEBP portrait here": "ou solte aqui um retrato em JPG, PNG ou WEBP",
    "No face found — the photo is centred instead. Use the controls to frame it.": "Nenhum rosto encontrado — a foto foi centralizada. Use os controles para enquadrar.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "Looking for the face…": "Procurando o rosto…",
    "Printed size: {size} at 300 DPI ({px})": "Tamanho impresso: {size} em 300 DPI ({px})",
    "The photo has little room above the head, so the frame was moved to fit. Changing the background restores the usual spacing.": "A foto tem pouco espaço acima da cabeça, então o quadro foi deslocado para caber. Trocar o fundo devolve o espaçamento padrão.",
    "Preview": "Prévia",
    "Photo settings": "Configurações da foto",
    "Document size": "Tamanho do documento",
    "Head size": "Tamanho da cabeça",
    "Move left / right": "Mover para a esquerda / direita",
    "Move up / down": "Mover para cima / baixo",
    "Reset framing": "Redefinir enquadramento",
    "Background": "Fundo",
    "Keep original": "Manter original",
    "Change colour": "Trocar cor",
    "Removing background…": "Removendo o fundo…",
    "Background colour": "Cor do fundo",
    "Max file size (optional)": "Tamanho máximo do arquivo (opcional)",
    "KB": "KB",
    "For forms with a limit such as 50 KB. Leave empty for the best quality.": "Para formulários com limite, como 50 KB. Deixe vazio para a melhor qualidade.",
    "Original: {size}": "Original: {size}", // i18n-same
    "Changing the background uses one AI run on our server; everything else stays in your browser.": "Trocar o fundo usa uma execução de IA no nosso servidor; todo o resto fica no seu navegador.",
    "Download photo": "Baixar foto",
    "Saving…": "Salvando…",
    "Download 4×6 in print sheet ({n} photos)": "Baixar folha 10 × 15 cm ({n} fotos)",
    "Download A4 print sheet ({n} photos)": "Baixar folha A4 ({n} fotos)",
    "Could not get under {size} — the smallest file is used.": "Não foi possível ficar abaixo de {size} — foi usado o menor arquivo possível.",
  },
};

export default content;
