import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/foto-3x4 (variant of passport-photo-maker, 3 × 4
 * cm). Brazil: "foto 3x4" 90.5K/mo at KD 0, the biggest single query in the
 * photo-ID family. Written around Brazilian use — matrícula, crachá,
 * carteirinha, concurso — and phone photos taken at home.
 */
const content: ToolPageContent = {
  toolId: "3x4-photo",
  locale: "pt",
  name: "Foto 3x4 online",
  tagline:
    "Faça foto 3x4 online, em casa: o rosto é enquadrado automaticamente em 3 × 4 cm, o fundo pode ficar branco ou de outra cor, e você baixa a foto em 300 DPI e uma folha 10 × 15 com oito cópias para revelar. Grátis, no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Foto 3x4 Online Grátis — Fundo Branco e Folha 10x15 | oMyImage",
  metaDescription:
    "Faça foto 3x4 online grátis: o rosto é enquadrado em 3 × 4 cm automaticamente, com fundo branco ou colorido e folha 10x15 com 8 fotos para imprimir. Sem cadastro.",

  intro:
    "A foto 3x4 continua sendo a foto de documento mais pedida no Brasil, e quase sempre aparece na última hora: a matrícula pede duas, o crachá da empresa uma, a carteirinha do clube outra. Esta página abre o criador de fotos já no tamanho 3 × 4 cm. Envie uma foto de frente tirada com o celular, e o rosto é detectado e enquadrado com o espaço certo acima da cabeça; ajuste se quiser, deixe o fundo branco e baixe uma foto única ou uma folha 10 × 15 para revelar em qualquer loja de fotos.",

  sections: [
    {
      heading: "Onde a foto 3x4 é pedida",
      id: "where",
      body: [
        "Matrícula em escola, faculdade e curso técnico; crachá e ficha de registro no emprego; carteirinha de estudante, de biblioteca, de clube e de academia; inscrição em concursos e processos seletivos que pedem foto colada na ficha; cadastros em sindicatos, associações e conselhos. Muitas dessas instituições também aceitam a foto em arquivo, por e-mail ou num formulário online.",
        "Confira a instrução de quem pede: o tamanho é 3 × 4 cm praticamente sempre, mas a cor do fundo, o uso de óculos e se a foto deve ser recente variam de um lugar para outro.",
      ],
    },
    {
      heading: "Foto 3x4 em pixels",
      id: "pixels",
      body: [
        "Em 300 DPI — a resolução que as lojas de revelação e as impressoras de foto usam — 3 × 4 cm equivalem a 354 × 472 pixels, e é isso que a ferramenta salva, com o DPI gravado no arquivo para a foto sair com exatamente 3 × 4 cm. Para um formulário online você também pode definir um tamanho máximo em KB; o tamanho impresso continua certo mesmo que o arquivo precise ficar menor.",
      ],
    },
    {
      heading: "Fundo branco, azul ou outra cor",
      id: "background",
      body: [
        "Uma foto tirada na frente de uma parede clara e lisa costuma servir como está para a maioria das fotos 3x4 brasileiras, que pedem fundo branco ou claro. Se a parede for colorida, tiver azulejos, quadros ou sombra, escolha Trocar cor em Fundo: a pessoa é recortada uma vez no nosso servidor, e você pode alternar entre branco, cinza claro, azul ou qualquer cor na hora.",
      ],
    },
    {
      heading: "Imprimindo a folha de fotos 3x4",
      id: "printing",
      body: [
        "Baixe a folha 10 × 15 cm: ela leva oito fotos 3x4 com linhas finas para recortar, e uma revelação 10 × 15 é o item mais barato em quase toda loja de fotos. Envie o arquivo pelo aplicativo ou site da loja e peça a impressão em tamanho real, sem cortes.",
        "Se você tem impressora jato de tinta em casa, a folha A4 leva 36 fotos 3x4. Use papel fotográfico e imprima em 100%, não em \"ajustar à página\", senão as fotos saem menores que 3 × 4 cm.",
      ],
    },
    {
      heading: "Tirando a foto 3x4 com o celular",
      id: "phone",
      body: [
        "Use a câmera traseira, não a frontal, e peça para alguém fotografar você a uns 1,5 metro, na altura dos olhos. Se o celular tiver zoom de 2x, use: a lente um pouco mais fechada deixa o rosto com proporções naturais. Desligue filtros de beleza e o modo retrato, que borram o contorno do cabelo, e fotografe na vertical, com a cabeça e os ombros inteiros no quadro e um pouco de espaço acima.",
        "Prefira luz natural de uma janela à sua frente, sem sol direto. Óculos com reflexo, boné, franja cobrindo os olhos e sorriso aberto são os motivos mais comuns de uma foto 3x4 ser recusada.",
      ],
    },
  ],

  howToTitle: "Como fazer foto 3x4 online",
  steps: [
    { title: "Envie o retrato", description: "Uma foto de frente, nítida, tirada contra uma parede lisa." },
    { title: "Confira o enquadramento", description: "O rosto é enquadrado em 3 × 4 cm automaticamente; ajuste tamanho e posição se precisar." },
    { title: "Baixe ou imprima", description: "Salve a foto única ou a folha 10 × 15 com oito fotos 3x4, ou a A4 com 36." },
  ],

  features: [
    { icon: "badge", title: "Enquadrada em 3 × 4 cm", description: "A cabeça é dimensionada e centralizada automaticamente, com o espaço acima dela que as fotos de documento pedem." },
    { icon: "grid_view", title: "Folha com cópias", description: "Folha 10 × 15 com oito fotos ou A4 com 36, com linhas de corte, pronta para qualquer loja de revelação." },
    { icon: "lock", title: "Fica no seu navegador", description: "Enquadrar e imprimir nunca envia a sua foto; só a troca de fundo usa o nosso servidor." },
  ],

  faqs: [
    { q: "Como fazer foto 3x4 pelo celular?", a: "Peça para alguém fotografar você de frente, contra uma parede clara, a uns 1,5 m. Envie a foto aqui — o tamanho 3 × 4 cm já vem selecionado —, confira o enquadramento e baixe a foto ou a folha para revelar." },
    { q: "Qual o tamanho da foto 3x4 em pixels?", a: "354 × 472 pixels em 300 DPI, que imprime exatamente em 3 × 4 cm. A ferramenta também grava o DPI no arquivo." },
    { q: "Dá para fazer foto 3x4 com fundo branco?", a: "Sim. Em Fundo, escolha Trocar cor e deixe o branco selecionado. O recorte é feito uma vez no nosso servidor; trocar de cor depois é instantâneo." },
    { q: "Quantas fotos 3x4 cabem numa folha 10 × 15?", a: "Oito, com espaço entre elas para recortar. Numa folha A4 cabem 36. A ferramenta mostra o número no botão antes de você baixar." },
    { q: "Posso usar óculos na foto 3x4?", a: "Depende de quem pede. Para crachás e carteirinhas em geral pode; documentos oficiais e passaportes costumam proibir. Na dúvida, tire os óculos e evite reflexo nas lentes." },
    { q: "Foto 3x4 é o mesmo que 3,5 × 4,5?", a: "Não. A 3 × 4 cm é menor e mais estreita; 3,5 × 4,5 cm (35 × 45 mm) é o tamanho internacional de passaporte e visto. As duas estão na lista de tamanhos — escolha a que o seu documento pede." },
    { q: "A minha foto 3x4 é enviada para a internet?", a: "Não para enquadrar, redimensionar ou montar a folha — tudo isso acontece no seu navegador. Só a troca de fundo, se você escolher, envia a foto ao nosso servidor, e o resultado é apagado em até uma hora." },
    { q: "Qual a diferença entre foto 3x4 e 5x7?", a: "A 5 × 7 cm é bem maior e aparece em alguns documentos e pedidos em consulados; a 3 × 4 cm é a do dia a dia. As duas estão na lista de tamanhos, com o mesmo enquadramento automático." },
  ],

  security:
    "Enquadramento, redimensionamento e folhas de impressão rodam inteiramente no seu navegador. Só a troca de fundo, se você escolher, envia a foto uma vez, criptografada, ao nosso mecanismo de remoção de fundo, e o resultado é apagado automaticamente em até uma hora.",
};

export default content;
