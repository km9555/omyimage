import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/jpg-para-png.
 *
 * Head term "JPG para PNG" / "converter JPG para PNG" — the same "x para y"
 * pattern iLoveIMG, Adobe Express BR and Smallpdf /pt use. "JPG em PNG" and
 * "fundo transparente" intent live in aliases.ts; the page is explicit that
 * converting does NOT make the background transparent, because that is the
 * most common Brazilian query behind this search ("jpg para png sem fundo").
 */
const content: ToolPageContent = {
  toolId: "jpg-to-png",
  locale: "pt",
  name: "JPG para PNG",
  tagline:
    "Converta imagens JPG em PNG sem perdas, online — em lote e sem perder qualidade. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Converter JPG para PNG online grátis — sem perder qualidade | oMyImage",
  metaDescription:
    "Converta JPG para PNG online e grátis, sem perdas e em lote. Ideal para editar sem degradar e para quem precisa de PNG. Direto no navegador, sem cadastro.",

  intro:
    "Converter JPG para PNG é o que você precisa quando quer uma cópia sem perdas de uma foto para editar, ou quando um sistema exige arquivos PNG. O conversor de JPG para PNG do oMyImage transforma seus JPGs em arquivos PNG limpos direto no seu navegador — um de cada vez ou em lote. O PNG é sem perdas e aceita transparência, então é perfeito quando você não quer nenhuma compressão a mais. Sem envio, sem cadastro e com resultado na hora.",

  sections: [
    {
      heading: "O que esta conversão faz e o que ela não faz",
      id: "expectations",
      body: [
        "Converter JPG para PNG troca o formato do arquivo, não o conteúdo. A partir daqui o PNG guarda a imagem sem perdas, o que é realmente útil — mas ele não consegue desfazer a compressão que o JPG já aplicou. Se a imagem original tem blocos visíveis no céu ou um halo em volta do texto, o PNG vai reproduzir isso fielmente.",
        "Pense nisso como congelar a imagem onde ela está. Cada salvamento seguinte é sem perdas, então a degradação para de se acumular. Esse é o benefício de verdade, e é por isso que essa conversão faz sentido no começo de um fluxo de edição, e não no final.",
      ],
    },
    {
      heading: "Por que designers convertem antes de editar",
      id: "editing",
      body: [
        "O JPG castiga a repetição. Abra um JPG, recorte, salve, abra de novo, ajuste os níveis, salve outra vez — cada ciclo recodifica a imagem inteira e joga fora mais um pouco. Depois de algumas passadas o estrago fica óbvio, principalmente em degradês suaves e em volta das bordas.",
        "O PNG não tem essa penalidade. Depois de convertido, você pode salvar quantas vezes quiser sem perda acumulada, o que faz dele o formato de trabalho sensato para qualquer coisa que você esteja alterando. A outra metade do motivo é a transparência: não dá para apagar um fundo enquanto o arquivo é JPG, porque o formato não tem onde registrar isso. Converter antes dá ao canal alfa um lugar para existir.",
      ],
    },
    {
      heading: "PNG ou WEBP?",
      id: "webp",
      body: [
        "Se o motivo da conversão é edição ou uma exigência de sistema, o PNG é o certo e o tamanho do arquivo é só o preço. Se o motivo é ter transparência em uma página da web, o WEBP costuma ser um destino melhor — ele aceita canal alfa completo como o PNG, com uma fração do tamanho, e todos os navegadores atuais abrem.",
        "A divisão prática é o destino. PNG para arquivos originais, editores e tudo o que vai para impressão ou arquivo. WEBP para tudo o que vai ser servido a um navegador. Converter um JPG em um PNG de vários megabytes e depois colocar isso em um site é um erro comum e caro.",
      ],
    },
    {
      heading: "Prints de tela e texto",
      id: "screenshots",
      body: [
        "Se você tem um print de tela que foi salvo em JPG, converter para PNG impede que ele piore, mas não deixa nítido o texto que já está borrado. O JPG lida mal com bordas de alto contraste, e letras são só isso, então aquele borrão em volta dos caracteres fica gravado.",
        "A lição para a próxima vez é capturar em PNG desde o início. A ferramenta de captura de todo sistema operacional pode ser configurada para isso, e em capturas de interface o PNG costuma ser mais nítido e menor do que o JPG equivalente.",
      ],
    },
  ],

  howToTitle: "Como converter JPG para PNG",
  steps: [
    { title: "Envie os JPGs", description: "Selecione uma ou várias imagens JPG, ou arraste e solte na área de trabalho." },
    { title: "Confira", description: "O PNG é sem perdas, então não há qualidade para escolher — é só confirmar os arquivos." },
    { title: "Converta e baixe", description: "Clique em Converter — um JPG é baixado como PNG; vários chegam juntos em um ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "JPG → PNG em lote", description: "Converta vários JPGs para PNG de uma vez e baixe tudo em um único arquivo ZIP." },
    { icon: "high_quality", title: "Saída sem perdas", description: "O PNG é um formato sem perdas, então as imagens convertidas mantêm cada pixel de detalhe." },
    { icon: "lock", title: "Privado e instantâneo", description: "A conversão roda no seu navegador — seus JPGs nunca saem do seu dispositivo." },
  ],

  faqs: [
    { q: "Por que converter JPG para PNG?", a: "O PNG é sem perdas e aceita transparência, o que é útil para edição, logotipos e gráficos em que você não quer os defeitos da compressão do JPG." },
    { q: "O PNG vai ficar maior do que o JPG?", a: "Normalmente sim — o PNG é sem perdas, então imagens fotográficas ficam maiores. A troca é que não há mais perda de qualidade." },
    { q: "Posso converter vários JPGs de uma vez?", a: "Sim. Adicione quantos quiser — vários arquivos são baixados juntos em um ZIP." },
    { q: "É grátis e privado?", a: "Totalmente. Sem cadastro, sem marca d'água, e cada imagem é processada no seu navegador." },
    { q: "Converter JPG para PNG melhora a qualidade?", a: "Não, e esse é o mal-entendido mais comum sobre esta conversão. O PNG é sem perdas, então preserva a imagem com perfeição — mas o JPG já tinha descartado detalhes quando foi criado, e esses detalhes não voltam. Você recebe uma cópia sem perdas de uma imagem com perdas, não o original restaurado." },
    { q: "Converter deixa o fundo transparente?", a: "Não sozinho. O PNG aceita canal alfa, mas o JPG não tem transparência para levar junto, então o resultado continua opaco. O que a conversão faz é dar um arquivo que pode guardar transparência depois de editado. Para tirar o fundo de verdade, use a ferramenta Remover fundo, que já entrega um PNG transparente." },
    { q: "Por que o PNG ficou tão maior?", a: "Porque o PNG nunca descarta dados. Uma foto JPG de 500 KB costuma virar um PNG de 3 a 5 MB. Esse é o custo esperado de um formato sem perdas, e não é sinal de que algo deu errado." },
    { q: "Quando devo converter JPG para PNG?", a: "Antes de editar, quando você vai salvar várias vezes e não quer degradar mais; quando precisa adicionar transparência; quando um sistema exige PNG; e em prints ou imagens com muito texto em que os defeitos do JPG aparecem." },
    { q: "Converter remove os defeitos da compressão do JPG?", a: "Não. Os blocos, as faixas e os halos em volta das bordas agora fazem parte da imagem, e o PNG os guarda fielmente. Só um modelo de restauração com IA consegue reduzi-los, e mesmo isso é reconstrução, não recuperação." },
  ],

  security:
    "Suas imagens continuam privadas. A conversão de JPG para PNG acontece inteira no seu navegador com canvas HTML — nada é enviado. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.8", count: "503" },

  ui: {
    // Drop hint from app/jpg-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG images here": "ou solte imagens JPG aqui",
  },
};

export default content;
