import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/converter-para-png. */
const content: ToolPageContent = {
  toolId: "convert-to-png",
  locale: "pt",
  name: "Converter para PNG",
  tagline:
    "Converta imagens JPG, WEBP, GIF e BMP em PNG online — sem perdas, com a transparência preservada e em lote. Grátis e privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter Imagem para PNG Online Grátis — Sem Perdas | oMyImage",
  metaDescription:
    "Converta JPG, WEBP, GIF e BMP em PNG online e grátis. Saída sem perdas que mantém a transparência, conversão em lote, sem cadastro e sem instalar nada.",

  intro:
    "PNG é o formato para quando a imagem precisa ficar exatamente como está: sem nova compressão, sem novos artefatos, com a transparência intacta. O conversor para PNG do oMyImage transforma arquivos JPG, WEBP, GIF e BMP em PNG no seu navegador — uma imagem ou uma pasta inteira de uma vez, baixadas juntas num ZIP. Como o PNG não tem perdas, o que sai é pixel por pixel o que entrou, e toda edição e todo salvamento depois disso mantêm a imagem assim.",

  sections: [
    {
      heading: "Quando o PNG é o destino certo",
      id: "why",
      body: [
        "Quase toda conversão para PNG cai em quatro casos. O primeiro é edição: um JPG ou WEBP com perdas perde um pouco mais de detalhe a cada salvamento, então converte-se uma vez para PNG e faz-se todo o recorte, retoque e anotação num arquivo que não se degrada. O segundo é conteúdo nítido — capturas de tela, diagramas, gráficos, formulários digitalizados e qualquer coisa com letra pequena —, em que o PNG mantém cada borda limpa e o JPG colocaria um halo cinza em volta de cada letra.",
        "O terceiro é transparência. Logotipos, figurinhas, ícones e recortes de produto precisam ficar sobre qualquer fundo, e o PNG é o formato aceito em todo lugar que guarda uma camada transparente. O quarto é pura compatibilidade: programas de design, modelos de documento, motores de jogos e muitos formulários de envio pedem PNG, e um WEBP salvo de um site é justamente o arquivo que eles recusam.",
      ],
    },
    {
      heading: "Por que o PNG fica maior que o JPG",
      id: "bigger",
      body: [
        "Uma foto de celular de 300 KB costuma virar um PNG de 2 a 4 MB, e isso é esperado, não um defeito. O JPG e o WEBP com perdas ficam pequenos porque descartam detalhes que o olho dificilmente nota; o PNG não pode descartar nada, então precisa guardar cada pixel, inclusive todo o ruído fino de uma fotografia.",
        "A regra prática é simples. Para fotos, o PNG é a cópia de trabalho segura e o JPG ou o WEBP é o formato para compartilhar. Para capturas de tela, gráficos e qualquer coisa com cor chapada, o PNG costuma ser o menor dos três, além do mais nítido, porque grandes áreas da mesma cor se comprimem muito bem sem perda nenhuma.",
      ],
    },
    {
      heading: "Converter não desfaz a compressão",
      id: "not-restore",
      body: [
        "Converter um JPG em PNG preserva a imagem como ela está agora; não traz de volta o que o JPG já descartou. Céus em blocos, detalhes borrados e o leve contorno em volta do texto vão fielmente para o PNG. O que você ganha é que nada disso piora daqui para a frente.",
        "Se você tem o original — um RAW da câmera, o arquivo de design, a captura de tela como foi feita —, exporte o PNG a partir dele. Se o JPG é tudo o que existe e está visivelmente danificado, as ferramentas de aumentar resolução e tirar desfoque suavizam o pior, mas nenhuma conversão de formato faz isso.",
      ],
    },
    {
      heading: "Transparência na entrada e na saída",
      id: "transparency",
      body: [
        "Arquivos WEBP, GIF e alguns BMP podem ter áreas transparentes, e elas passam exatamente para o PNG, incluindo os pixels semitransparentes das bordas suavizadas. Nada é achatado e não há cor de fundo para escolher.",
        "Já o JPG não tem transparência para levar: o fundo branco dele é feito de pixels brancos de verdade. Convertido em PNG, ele continua branco. Para deixar o fundo transparente, passe a imagem primeiro pelo removedor de fundo — ele já entrega um PNG transparente.",
      ],
    },
    {
      heading: "Arquivos GIF e BMP",
      id: "gif-bmp",
      body: [
        "Um GIF animado é convertido no primeiro quadro, porque um PNG guarda uma única imagem parada. Se você precisa de um quadro específico, separe o GIF em imagens antes e fique com o que quiser. Um GIF parado é convertido sem mudar a aparência, e o PNG fica livre do limite de 256 cores do GIF para as edições seguintes.",
        "O BMP é o caso oposto: ele guarda os pixels sem compressão nenhuma, então a mesma imagem em PNG costuma ficar várias vezes menor, com exatamente os mesmos pixels. Converter digitalizações e capturas antigas em BMP para PNG é uma das poucas conversões que economizam espaço de graça.",
      ],
    },
    {
      heading: "Dados da câmera e cor",
      id: "metadata",
      body: [
        "Por padrão, os dados EXIF e XMP do original — data da foto, modelo da câmera e, se houver, a localização GPS — são copiados para o PNG. Marque Remover metadados para deixar tudo isso de fora, o que vale a pena antes de publicar uma foto. A imagem é convertida em sRGB, o espaço de cor que toda tela e todo navegador assumem, então as cores ficam iguais às do original numa tela comum.",
      ],
    },
  ],

  howToTitle: "Como converter uma imagem para PNG",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens JPG, WEBP, GIF ou BMP, ou arraste e solte." },
    { title: "Escolha as opções", description: "Mantenha ou remova os metadados da câmera e deixe a rotação automática ligada para fotos de celular." },
    { title: "Converta e baixe", description: "Clique em Converter — um PNG é baixado direto; vários vêm juntos num ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Saída sem perdas", description: "Cada pixel é mantido exatamente, então novas edições e salvamentos nunca degradam a imagem." },
    { icon: "burst_mode", title: "Conversão em lote", description: "Converta uma pasta inteira de JPG, WEBP, GIF ou BMP de uma vez e receba um único ZIP." },
    { icon: "lock", title: "Privado por padrão", description: "As imagens são convertidas no navegador; só arquivos muito grandes são processados no nosso servidor." },
  ],

  faqs: [
    { q: "Quais formatos posso converter para PNG?", a: "JPG, WEBP, GIF e BMP. GIFs são convertidos a partir do primeiro quadro. HEIC e AVIF têm conversores próprios, porque precisam de outro tratamento." },
    { q: "Converter para PNG melhora a qualidade?", a: "Não. A imagem fica exatamente como está agora. O PNG impede novas perdas, mas não recupera detalhes que um JPG já descartou." },
    { q: "Por que meu PNG ficou tão maior que o JPG?", a: "O PNG não tem perdas, então guarda cada pixel da foto, ruído incluído. Um aumento de cinco a dez vezes numa foto é normal. Capturas de tela e gráficos continuam pequenos." },
    { q: "A transparência é mantida?", a: "Sim. Áreas transparentes e semitransparentes de arquivos WEBP, GIF ou BMP passam para o PNG sem mudança. Um JPG não tem transparência, então o fundo continua como está." },
    { q: "Como deixo o fundo transparente?", a: "Converter um JPG em PNG mantém o fundo. Use antes o removedor de fundo; ele entrega um PNG com fundo transparente." },
    { q: "Posso converter várias imagens de uma vez?", a: "Pode. Adicione quantas quiser. Uma imagem é baixada como PNG; várias vêm juntas num único ZIP." },
    { q: "Meus dados EXIF são mantidos?", a: "Sim, por padrão — data, câmera e localização GPS passam para o PNG se o original tiver. Marque Remover metadados para tirar tudo." },
    { q: "Para fotos, uso PNG ou JPG?", a: "Use PNG como cópia de trabalho enquanto edita, e JPG ou WEBP para compartilhar ou enviar. O PNG é a melhor escolha para capturas de tela, texto e gráficos." },
    { q: "Minhas imagens são enviadas para algum lugar?", a: "Normalmente não — a conversão acontece no navegador. Só uma imagem grande demais para o navegador vai para o nosso servidor, é convertida lá e apagada na hora." },
    { q: "Funciona no celular?", a: "Funciona. A ferramenta roda nos navegadores de Android e iPhone; escolha as imagens na galeria e os PNGs vão para os seus downloads." },
  ],

  security:
    "Suas imagens são convertidas para PNG no seu navegador com canvas HTML. Só uma imagem grande demais para o navegador — acima de 100 MB ou além do limite de canvas dele — é processada no nosso servidor, e ela é apagada logo após a conversão. Nada fica guardado e nenhum arquivo é rastreado.",

  ui: {
    // Drop hint from app/convert-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG, WEBP, GIF or BMP images here": "ou solte imagens JPG, WEBP, GIF ou BMP aqui",
  },
};

export default content;
