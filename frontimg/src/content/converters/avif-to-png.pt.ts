import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/avif-para-png.
 *
 * Head term "AVIF para PNG"; the intent that separates this page from
 * /pt/avif-para-jpg is transparency, so "avif com transparência" and "avif
 * para png sem perdas" live in aliases.ts.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF para PNG",
  seoTitle: "Converter AVIF para PNG online grátis | oMyImage",
  seoDescription:
    "Converta AVIF para PNG online e grátis: saída sem perdas com a transparência preservada, em lote e sem enviar nada — tudo roda no seu navegador.",
  unique: {
    intro:
      "Quando um AVIF tem fundo transparente, o destino certo é o PNG, e não o JPG. Ele mantém o canal alfa intacto e guarda o resultado sem perdas, então o que você recebe é exatamente o que o navegador decodificou — um arquivo de trabalho limpo, para jogar num programa de design e editar quantas vezes quiser sem degradar.",
    whyConvert:
      "O que decide entre este caminho e converter para JPG é quase sempre a transparência. O AVIF carrega um canal alfa completo e, se você converter para JPG, essa transparência precisa ser destruída e trocada por um preenchimento sólido. O PNG mantém, e isso importa para logotipos, recortes de produto, ícones e qualquer coisa que vá ficar sobre um fundo que você não controla. O segundo fator é edição. O PNG é sem perdas, então, depois de converter, dá para recortar, retocar e salvar de novo quantas vezes quiser sem acumular estrago de compressão — algo que nem o AVIF nem o JPG oferecem. O custo é o tamanho: o PNG guarda tudo, e um AVIF de algumas centenas de kilobytes vira facilmente vários megabytes em PNG. Esse é um preço justo por um arquivo mestre e um preço ruim por um arquivo de site.",
    notes: [
      {
        heading: "Espere um aumento de tamanho dramático",
        body:
          "O AVIF é um dos formatos mais eficientes que existem e o PNG é um dos menos; converter de um para o outro pode multiplicar o tamanho do arquivo por cinco ou dez. Nada quebrou quando isso acontece. Pense no PNG como uma cópia de trabalho, e não como algo para publicar — se depois você precisar dele numa página da web, converta em seguida para WebP, que mantém a transparência com uma fração do peso do PNG.",
      },
      {
        heading: "A transparência passa exatamente",
        body:
          "Os dois formatos guardam alfa de 8 bits, então pixels semitransparentes continuam semitransparentes. Sombras suaves, bordas esfumadas e texto suavizado sobrevivem sem halo e sem linha de recorte. Aqui não há cor de fundo para escolher, porque não há nada para preencher — que é justamente a vantagem sobre converter para JPG.",
      },
      {
        heading: "O HDR é achatado na decodificação",
        body:
          "O AVIF pode guardar alta faixa dinâmica e uma gama de cores ampla. O PNG de uso comum não, e o navegador converte a imagem para a faixa padrão enquanto decodifica. Na maioria das imagens isso é invisível; numa foto deliberadamente em HDR, com altas luzes muito claras, o resultado pode parecer mais chapado que o original. Isso acontece na etapa de decodificação, então vale para qualquer formato de destino.",
      },
    ],
    faqs: [
      { q: "Converter AVIF para PNG mantém a transparência?", a: "Mantém, por completo. Os dois formatos aceitam canal alfa de 8 bits, então áreas transparentes e semitransparentes passam sem alteração e sem preenchimento de fundo." },
      { q: "A conversão é sem perdas?", a: "A codificação em PNG é sem perdas, então nada se perde nessa etapa. O AVIF em si provavelmente foi salvo com perdas, e converter preserva a imagem como ela está agora, sem restaurar o detalhe já descartado." },
      { q: "Por que o PNG ficou tão maior?", a: "Porque o PNG nunca descarta dados, enquanto o AVIF é extremamente eficiente em descartar. Um aumento de cinco a dez vezes é normal. Converta em seguida para WebP se precisar de um arquivo pequeno que ainda tenha transparência." },
      { q: "Escolho PNG ou JPG para o meu AVIF?", a: "PNG se a imagem tem transparência ou se você pretende editá-la. JPG se ela é uma foto opaca e você quer o arquivo menor e mais aceito em todo lugar." },
      { q: "Posso converter vários arquivos AVIF de uma vez?", a: "Pode. Adicione quantos quiser — eles são convertidos em sequência no seu navegador e voltam juntos em um único ZIP." },
    ],
  },
};

export default copy;
