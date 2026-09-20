import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/jpg-para-webp.
 *
 * Head term "JPG para WEBP" — the audience is people speeding up a site, so
 * "deixar site mais rápido", "comprimir jpg para webp" and "webp para site"
 * live in aliases.ts. Core Web Vitals and LCP keep their English names, which
 * is how Brazilian developers refer to them.
 */
const copy: LocalizedPairCopy = {
  name: "JPG para WEBP",
  seoTitle: "Converter JPG para WEBP online grátis | oMyImage",
  seoDescription:
    "Converta JPG para WEBP online e grátis e corte de 25% a 35% do peso das imagens. Converta em lote com controle de qualidade, direto no seu navegador.",
  unique: {
    intro:
      "Converter JPG para WebP é o ganho de velocidade mais barato que sobrou para a maioria dos sites. A mesma foto, com a mesma qualidade aparente, costuma ficar de 25% a 35% menor, e todos os navegadores atuais aceitam o formato desde que o Safari entrou, em 2020. Escolha a qualidade, converta a pasta inteira de uma vez e receba um ZIP de volta.",
    whyConvert:
      "Aqui quase sempre se trata de desempenho. As imagens são, com larga vantagem, a coisa mais pesada de uma página típica, e os Core Web Vitals — o Largest Contentful Paint em especial — são dominados pela rapidez com que a imagem principal chega. O WebP entrega uma redução de tamanho relevante sem os defeitos visíveis que você teria apenas apertando mais a compressão do JPG, porque o codificador dele é uma geração mais novo e trabalha em blocos maiores e mais espertos. A objeção de compatibilidade que segurava as pessoas praticamente evaporou: Chrome, Firefox, Edge, Opera e Safari decodificam WebP, o que cobre efetivamente todo visitante que você tem. O cuidado que resta é com o destino do arquivo. O WebP é para servir na web; ele continua sendo uma escolha ruim para arquivar ou para entregar numa gráfica.",
    notes: [
      {
        heading: "Não converta os seus originais",
        body:
          "Converta cópias destinadas à web e mantenha os arquivos da câmera como estão. Um JPG já foi comprimido com perdas uma vez, e recodificar para WebP comprime de novo — o resultado fica bom numa página, mas é um degrau de geração para baixo, e não é algo que você desfaça depois. Trate o WebP como formato de saída, do mesmo jeito que você trataria uma miniatura redimensionada, e não como substituto da sua biblioteca.",
      },
      {
        heading: "Que qualidade usar",
        body:
          "Entre 0,80 e 0,85 é o ponto ideal para fotos num site, e é onde a economia de tamanho é mais dramática em relação ao custo visual. Vá para 0,92 ou mais em imagens de destaque, fotos de produto ou qualquer coisa que o cliente vá ampliar. Abaixo de uns 0,70 o codificador começa a alisar a textura fina — pele, folhagem e tecido são onde isso aparece primeiro. Converta uma imagem representativa, olhe com calma e só então rode o lote nesse ajuste.",
      },
      {
        heading: "Sirva com uma alternativa, se precisar",
        body:
          "Se você atende clientes realmente antigos, a abordagem padrão é um elemento picture do HTML listando o WebP primeiro e o JPG original como fonte alternativa, deixando cada navegador pegar o que entende. A maioria dos construtores de sites, CDNs e CMS modernos já faz essa negociação sozinha, então confira se o seu já resolve antes de escrever a marcação à mão.",
      },
    ],
    faqs: [
      { q: "Quanto menores as minhas imagens vão ficar de verdade?", a: "Em fotos típicas, espere de 25% a 35% com a mesma qualidade visual. Gráficos chapados e prints costumam ir bem melhor. A economia depende muito da imagem, então converta alguns arquivos representativos antes de fixar um ajuste para a biblioteca inteira." },
      { q: "Já dá para usar WEBP no meu site com segurança?", a: "Dá. Todos os navegadores atuais decodificam — Chrome e Firefox há mais de uma década, Safari desde 2020. É um formato consolidado, não experimental." },
      { q: "Converter JPG para WEBP perde qualidade?", a: "Há uma pequena perda de geração, porque o JPG já tinha sido comprimido com perdas e o WebP comprime de novo. Em qualidade 0,80 ou acima isso não aparece em tamanhos normais de visualização. Converta sempre do melhor original que você tiver, e não de uma cópia já reduzida." },
      { q: "WEBP serve para impressão?", a: "Não. Fluxos de impressão esperam TIFF, PNG ou JPG de alta qualidade, e muitas ferramentas de pré-impressão nem abrem WebP. Use na web e guarde outra coisa para imprimir." },
      { q: "O WEBP aceita transparência?", a: "Aceita, com canal alfa completo. Um JPG de origem não tem transparência para levar junto, mas, se você converter um PNG para WebP, a transparência é preservada." },
      { q: "Posso converter uma pasta inteira de uma vez?", a: "Pode. Adicione quantos JPGs quiser e eles são convertidos em sequência e devolvidos em um ZIP, que é a forma usual de migrar uma biblioteca de imagens existente." },
    ],
  },
};

export default copy;
