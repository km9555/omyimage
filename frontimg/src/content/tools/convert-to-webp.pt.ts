import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/converter-para-webp. */
const content: ToolPageContent = {
  toolId: "convert-to-webp",
  locale: "pt",
  name: "Converter para WEBP",
  tagline:
    "Converta imagens JPG, PNG, GIF e BMP em WEBP online — arquivos menores para páginas mais rápidas, com controle de qualidade e em lote. Grátis e privado no navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter Imagem para WEBP Online Grátis — Sites Mais Leves | oMyImage",
  metaDescription:
    "Converta JPG, PNG, GIF e BMP em WEBP online e grátis — arquivos menores para sites mais rápidos, com ajuste de qualidade e conversão em lote. Sem cadastro.",

  intro:
    "WEBP é o formato de imagem feito para a web: a mesma imagem em menos bytes, com transparência quando você precisa. O conversor para WEBP do oMyImage transforma arquivos JPG, PNG, GIF e BMP em WEBP no seu navegador — uma imagem ou uma pasta inteira de fotos de produto, imagens de blog ou capturas de tela de uma vez —, com um controle de qualidade para decidir o equilíbrio entre tamanho e detalhe. Páginas montadas com o resultado carregam mais rápido em qualquer conexão.",

  sections: [
    {
      heading: "Por que os sites trocam as imagens por WEBP",
      id: "why",
      body: [
        "As imagens costumam ser a parte mais pesada de uma página, e a imagem principal muitas vezes decide quão rápido a página parece carregar. Servir WEBP no lugar de JPG ou PNG corta esses bytes sem os blocos visíveis que você teria só baixando a qualidade do JPG, porque o codificador WEBP é uma geração mais novo e prevê cada bloco a partir dos vizinhos.",
        "Todo navegador atual mostra WEBP — Chrome, Edge, Firefox, Opera e, desde 2020, o Safari —, então um site pode usá-lo para praticamente todos os visitantes. Muitas plataformas, CDNs e auditorias de velocidade recomendam o formato exatamente por isso, e uma página menor também gasta menos dados móveis de quem visita.",
      ],
    },
    {
      heading: "Quanto menor ele fica",
      id: "smaller",
      body: [
        "Para fotos, um WEBP com a mesma qualidade aparente costuma ficar 25–35% menor que o JPG de origem. O ganho é muito maior a partir de PNG: uma foto ou captura de tela salva em PNG muitas vezes encolhe 70–90%, porque o PNG não tem perdas e o WEBP numa qualidade alta tem.",
        "O resultado depende da imagem. Fotos cheias de detalhes encolhem menos; gráficos chapados, capturas de tela e imagens com grandes áreas lisas encolhem mais. A ferramenta mostra o tamanho de cada arquivo convertido ao lado do original, para você ver exatamente o que ganhou antes de publicar.",
      ],
    },
    {
      heading: "Escolhendo a qualidade",
      id: "quality",
      body: [
        "O controle vai de 50% a 100% e começa em 92%, que deixa as fotos visualmente idênticas ao original. Para imagens de site, 75–85% é a escolha comum: a diferença é muito difícil de ver no tamanho normal e os arquivos ficam claramente menores. Volte a subir para imagens de destaque, fotos de produto com zoom e tudo o que as pessoas vão olhar de perto.",
        "Abaixo de uns 70%, áreas lisas como céu e pele começam a parecer enceradas em vez de quadriculadas — o WEBP falha com mais elegância que o JPG, mas falha. Converta primeiro uma imagem representativa, compare com o original no tamanho real e só então rode o lote com a configuração escolhida.",
      ],
    },
    {
      heading: "Transparência e animação",
      id: "transparency",
      body: [
        "O WEBP tem canal alfa completo, então logotipos, ícones e recortes de produto em PNG transparente continuam transparentes depois da conversão, bordas incluídas — nenhuma cor de fundo é pintada. Isso faz do WEBP um substituto direto do PNG transparente num site, em geral por uma fração do tamanho.",
        "Um GIF animado é convertido só no primeiro quadro. O WEBP pode guardar animação, mas esta ferramenta gera imagens paradas; mantenha o GIF, ou use uma ferramenta de animação própria, quando o movimento importa.",
      ],
    },
    {
      heading: "Quando o WEBP é a escolha errada",
      id: "where-not",
      body: [
        "WEBP é um formato para servir imagens, não para arquivar ou trocar arquivos. Gráficas, programas de computador mais antigos, alguns clientes de e-mail e muitos formulários oficiais ainda esperam JPG ou PNG, e um WEBP enviado para eles tem boa chance de voltar. Guarde os originais e converta cópias para a web.",
        "A conversão também é de mão única na qualidade: um WEBP feito em 80% descartou detalhes que voltar para PNG ou JPG não recupera. Quando precisar de outro formato depois, comece de novo a partir do arquivo original.",
      ],
    },
    {
      heading: "Metadados e suporte dos navegadores",
      id: "metadata",
      body: [
        "Os dados da câmera — EXIF, data da foto e localização GPS — não vão para os WEBP feitos aqui, o que combina com imagens publicadas na web, onde a localização é um risco de privacidade de qualquer forma. Se você precisa dos metadados, mantenha-os nos originais.",
        "A conversão usa o codificador WEBP do próprio navegador. Chrome, Edge, Firefox e Opera têm um; o Safari mostra WEBP, mas não consegue salvá-lo a partir de uma página, então no Safari a ferramenta avisa para trocar de navegador em vez de entregar um arquivo com o nome errado.",
      ],
    },
  ],

  howToTitle: "Como converter uma imagem para WEBP",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens JPG, PNG, GIF ou BMP, ou arraste e solte." },
    { title: "Ajuste a qualidade", description: "Deixe 92% para imagens quase idênticas, ou escolha 75–85% para imagens de site menores." },
    { title: "Converta e baixe", description: "Clique em Converter — um WEBP é baixado direto; vários vêm juntos num ZIP." },
  ],

  features: [
    { icon: "speed", title: "Páginas mais leves", description: "Arquivos WEBP são menores que os JPG e PNG que substituem, então as páginas carregam mais rápido." },
    { icon: "tune", title: "Controle de qualidade", description: "Escolha a qualidade de 50% a 100% e veja o novo tamanho de cada arquivo." },
    { icon: "opacity", title: "Transparência mantida", description: "Logotipos e ícones em PNG transparente continuam transparentes no WEBP, com bordas suaves." },
  ],

  faqs: [
    { q: "Quais formatos posso converter para WEBP?", a: "JPG, PNG, GIF e BMP. GIFs são convertidos a partir do primeiro quadro." },
    { q: "Quanto o WEBP é menor que o JPG?", a: "Em geral 25–35% menor com a mesma qualidade visual em fotos. A partir de PNG a economia é bem maior, muitas vezes 70–90%." },
    { q: "Que qualidade usar num site?", a: "75–85% serve para a maioria das imagens de site. Use os 92% padrão ou mais para imagens de destaque e fotos de produto com zoom." },
    { q: "O WEBP mantém a transparência?", a: "Mantém. Áreas transparentes e semitransparentes de imagens PNG, GIF ou BMP continuam transparentes no WEBP." },
    { q: "Todos os navegadores mostram WEBP?", a: "Sim — todo navegador atual, inclusive o Safari desde 2020. Programas mais antigos e alguns formulários de envio ainda podem não abrir." },
    { q: "Por que não funciona no Safari?", a: "O Safari mostra WEBP, mas não consegue criá-lo a partir de uma página. Converta no Chrome, Edge, Firefox ou Opera; os arquivos depois funcionam normalmente no Safari." },
    { q: "Meus dados EXIF são mantidos?", a: "Não. Os WEBP feitos aqui não levam dados da câmera nem localização GPS, o que em geral é o desejado para imagens publicadas." },
    { q: "Posso converter uma pasta inteira de uma vez?", a: "Pode. Adicione quantas imagens quiser; elas são convertidas uma após a outra e baixadas juntas num ZIP." },
    { q: "Dá para voltar de WEBP para JPG ou PNG?", a: "Dá, com as ferramentas WEBP para JPG e WEBP para PNG. O detalhe removido pela compressão não volta, então converta do original quando tiver." },
    { q: "Minhas imagens são enviadas para algum lugar?", a: "Normalmente não — a conversão acontece no navegador. Só uma imagem grande demais para o navegador vai para o nosso servidor, é convertida lá e apagada na hora." },
  ],

  security:
    "Suas imagens são convertidas para WEBP no seu navegador. Só uma imagem grande demais para o navegador — acima de 100 MB ou além do limite de canvas dele — é processada no nosso servidor, e ela é apagada logo após a conversão. Nada fica guardado e nenhum arquivo é rastreado.",

  ui: {
    // Drop hint from app/convert-to-webp/page.tsx, translated inside ConvertTool.
    "or drop JPG, PNG, GIF or BMP images here": "ou solte imagens JPG, PNG, GIF ou BMP aqui",
  },
};

export default content;
