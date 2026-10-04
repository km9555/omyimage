import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/comprimir-imagem-para-50kb (variant of compress-image, 50 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-50kb",
  locale: "pt",
  name: "Comprimir imagem para 50 KB",
  tagline:
    "Comprima qualquer foto para menos de 50 KB — um limite comum em inscrições de concursos, vestibulares e cadastros. O JPG mais nítido que cabe, em lote, sem enviar nada.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Comprimir Imagem para 50 KB Online — Grátis, Abaixo de 50 KB | oMyImage",
  metaDescription:
    "Comprima qualquer foto para menos de 50 KB online e grátis. O JPG mais nítido que cabe no limite de inscrições e cadastros, várias fotos de uma vez, sem enviar arquivos.",

  intro:
    "Se um formulário já te disse \"a foto deve ter no máximo 50 KB\", esta página é para esse momento. Adicione a foto direto do celular — mesmo uma de 5 MB — e ela volta como JPG abaixo de 50 KB, com a maior qualidade que cabe. A ferramenta baixa a qualidade primeiro e só reduz as dimensões em pixels se for preciso, para o rosto continuar nítido no tamanho em que o formulário mostra a foto. Funciona com JPG, PNG e WEBP, e com várias fotos de uma vez.",

  sections: [
    {
      heading: "Por que tantos formulários pedem 50 KB",
      id: "why-50kb",
      body: [
        "Organizadoras de concursos, vestibulares, programas de bolsa e muitos serviços públicos recebem fotos de milhares ou milhões de candidatos. Limitar cada uma a algumas dezenas de KB mantém o armazenamento e as páginas leves, e uma foto de rosto no estilo 3×4 não precisa nem de perto da resolução de uma câmera de celular.",
        "O limite é conferido automaticamente no envio, e é por isso que um arquivo de 51 KB é recusado mesmo parecendo idêntico a um de 49 KB. Esta ferramenta sempre fica abaixo do número, com uma pequena margem de segurança explicada mais abaixo.",
      ],
    },
    {
      heading: "50 KB é tamanho de arquivo, não tamanho de foto",
      id: "size-not-dimensions",
      body: [
        "Quilobytes medem espaço em disco, não largura e altura. Os mesmos 50 KB podem guardar uma foto de 1200 pixels de uma parede lisa ou uma de 400 pixels de uma rua movimentada, porque o JPG gasta bytes com detalhe, não com área. Uma foto de rosto típica, com fundo claro, cabe em 50 KB com uns 600 × 800 pixels e continua nítida.",
        "Muitos formulários também informam dimensões — 3×4 cm, 300 × 400 pixels. Isso é outra exigência: redimensione para elas primeiro com a ferramenta Redimensionar imagem e depois comprima aqui. Nesses tamanhos pequenos, a foto quase sempre cabe em 50 KB com qualidade muito alta.",
      ],
    },
    {
      heading: "Como ter a melhor foto abaixo de 50 KB",
      id: "best-photo",
      body: [
        "Comece pela foto original, não por uma que veio encaminhada no WhatsApp ou por um print — cada compressão anterior adiciona blocos que a próxima precisa preservar. Recorte a cabeça e os ombros antes de comprimir, para o espaço ir para o rosto e não para o ambiente atrás.",
        "Um fundo claro e liso comprime muito melhor do que um estampado, e luz do dia uniforme no rosto comprime melhor do que sombras fortes. Se o formulário exige fundo branco, tire a foto em frente a uma parede branca ou use a ferramenta Remover fundo antes.",
      ],
    },
    {
      heading: "Por que o envio ainda pode ser recusado",
      id: "rejections",
      body: [
        "Se um portal recusa uma foto abaixo de 50 KB, o motivo costuma ser outra regra: dimensões erradas, um tamanho mínimo (alguns formulários exigem pelo menos 20 KB), um formato diferente de JPG ou um nome de arquivo com espaços ou acentos. Confira cada uma dessas regras nas instruções.",
        "A contagem de KB em si não é o problema. A ferramenta mantém o arquivo abaixo de 50.000 bytes, o que passa tanto se o formulário contar o quilobyte como 1.000 quanto como 1.024 bytes — por isso o seu computador pode mostrar 48 ou 49 KB.",
      ],
    },
  ],

  howToTitle: "Como comprimir uma imagem para 50 KB",
  steps: [
    { title: "Adicione sua foto", description: "Selecione ou arraste um JPG, PNG ou WEBP — pode ser a foto do celular em tamanho original." },
    { title: "Comprima para menos de 50 KB", description: "O limite de 50 KB já vem definido. Mantenha o formato JPG, a não ser que o formulário diga outra coisa." },
    { title: "Baixe", description: "Salve a foto — ela fica abaixo de 50 KB e pronta para enviar. Várias fotos vêm juntas em um ZIP." },
  ],

  features: [
    { icon: "badge", title: "Pronta para inscrições", description: "Um JPG abaixo de 50 KB com a maior qualidade que cabe — o que portais de concurso e de governo esperam." },
    { icon: "photo_size_select_large", title: "Reduz pixels só se precisar", description: "A qualidade baixa primeiro; as dimensões só diminuem quando a qualidade sozinha não chega a 50 KB." },
    { icon: "lock", title: "Privacidade de verdade", description: "Sua foto é processada no navegador e nunca é enviada — o certo para uma foto de documento." },
  ],

  faqs: [
    { q: "Como comprimir uma foto para 50 KB?", a: "Adicione a foto, mantenha o limite de 50 KB e o formato JPG, e clique em Comprimir. O arquivo baixado fica garantidamente abaixo de 50 KB." },
    { q: "Uma foto de 50 KB fica borrada?", a: "Não no tamanho em que os formulários mostram. Um retrato cabe em 50 KB com uns 600 × 800 pixels e boa qualidade; o borrado geralmente vem de uma foto que já tinha sido comprimida, então comece pelo original." },
    { q: "Qual tamanho em pixels deve ter uma foto de 50 KB?", a: "Não existe resposta fixa — depende de quanto detalhe a foto tem. Se o formulário informa dimensões, redimensione para elas antes; se não, deixe a ferramenta escolher, e ela mantém o máximo de pixels que couber." },
    { q: "Dá para transformar um PNG ou um print em JPG de 50 KB?", a: "Dá. Arquivos PNG e WEBP são convertidos para JPG no caminho, e áreas transparentes recebem fundo branco, ou outra cor que você escolher." },
    { q: "O formulário também pede foto 3×4. O que eu faço?", a: "Recorte ou redimensione para 3×4 antes, com as ferramentas Recortar imagem ou Redimensionar imagem, e depois comprima o resultado aqui. Nesse tamanho a foto fica bem abaixo de 50 KB com qualidade alta." },
    { q: "50 KB é o mesmo que 0,05 MB?", a: "Sim. O arquivo fica abaixo de 50.000 bytes, ou seja, 0,05 MB, e também passa em formulários que contam 1.024 bytes por quilobyte." },
    { q: "Posso comprimir várias fotos para 50 KB de uma vez?", a: "Pode. Adicione todas — cada uma fica abaixo de 50 KB separadamente, e você pode baixar tudo junto em um ZIP." },
  ],

  security:
    "A foto nunca sai do seu aparelho. A compressão para 50 KB roda inteiramente no navegador, então nada é enviado, guardado ou visto por outras pessoas.",
};

export default content;
