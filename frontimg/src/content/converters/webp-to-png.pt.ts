import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/webp-para-png.
 *
 * Head term "WEBP para PNG" / "converter WEBP em PNG" — the x-para-y pattern
 * the whole converter family uses; "abrir arquivo webp" and "webp não abre"
 * live in aliases.ts and are the real intent behind most of this traffic.
 */
const copy: LocalizedPairCopy = {
  name: "WEBP para PNG",
  seoTitle: "Converter WEBP para PNG online grátis | oMyImage",
  seoDescription:
    "Converta WEBP para PNG online e grátis: mantém a transparência, converte em lote e roda no seu navegador. Sem cadastro.",
  unique: {
    intro:
      "O WebP deixa as páginas rápidas, mas continua sendo o formato que não abre quando você dá dois cliques. Converter para PNG entrega um arquivo que todo programa entende, com a transparência intacta e sem perder qualidade no caminho — como o PNG é sem perdas, os pixels que saem são exatamente os que entraram. Solte um WebP ou cem; tudo é convertido dentro do seu navegador.",
    whyConvert:
      "O motivo de sempre é incompatibilidade pura. Você salvou uma imagem de um site e agora o Photoshop, o PowerPoint, o formulário de envio da gráfica ou um Android mais antigo se recusa a abrir. O PNG é a resposta mais segura possível para esse problema: ele tem suporte universal desde o fim dos anos 1990 e, diferente do JPG, preserva a transparência, então um logotipo com fundo transparente sobrevive à viagem. O outro motivo comum é edição. O WebP é com perdas por padrão, e cada novo salvamento degrada um pouco mais. Converter uma vez para PNG dá um arquivo de trabalho sem perdas, que você pode recortar, retocar e salvar quantas vezes precisar sem a imagem se deteriorando em silêncio.",
    notes: [
      {
        heading: "Espere um PNG maior — isso é normal",
        body:
          "Um WebP de 180 KB pode facilmente virar um PNG de 900 KB, e nada deu errado quando isso acontece. O WebP consegue o tamanho dele descartando dados da imagem; o PNG é proibido de descartar qualquer coisa. Você está trocando bytes por compatibilidade e por um arquivo que não vai se degradar mais. Se o tamanho resultante for um problema e você não precisar de transparência, converter para JPG sai muito menor — e, se a sua ideia era só diminuir o arquivo e não trocar o formato, a ferramenta de comprimir é a certa.",
      },
      {
        heading: "WebP animado vira um quadro só",
        body:
          "O WebP pode guardar uma animação, bem parecido com um GIF. Um formato estático como o PNG não consegue representar isso, então um WebP animado é convertido apenas no primeiro quadro. Se você precisa manter o movimento, converta para GIF em vez de PNG. E se quiser cada quadro como uma imagem separada, esse é outro trabalho, da ferramenta GIF para imagens.",
      },
      {
        heading: "A transparência é mantida exatamente",
        body:
          "WebP e PNG guardam um canal alfa completo de 8 bits, então bordas suaves, sombras e texto suavizado convertem sem problema. Não há etapa de achatamento nem cor de fundo para escolher, porque não há nada para preencher. Essa é a principal vantagem prática de converter WebP para PNG em vez de para JPG, que teria de pintar algo sólido atrás de cada pixel transparente.",
      },
    ],
    faqs: [
      {
        q: "Converter WEBP para PNG reduz a qualidade?",
        a: "Não. O PNG é um formato sem perdas, então a conversão copia cada pixel exatamente. Só entenda o que ela não faz: se o WebP original foi salvo com perdas, o detalhe já tinha sido descartado ali, e converter para PNG preserva a imagem como ela está agora, sem restaurar nada.",
      },
      {
        q: "Por que o meu PNG ficou tão maior que o WEBP?",
        a: "Porque o PNG nunca joga dado fora. O tamanho pequeno do WebP vem da compressão com perdas, e o PNG não pode usar esse truque. Um aumento de 3 a 6 vezes é totalmente normal numa imagem fotográfica e é o custo esperado de um arquivo sem perdas e legível em qualquer lugar.",
      },
      {
        q: "A transparência sobrevive à conversão?",
        a: "Sim, por completo. Os dois formatos aceitam canal alfa, então áreas transparentes e semitransparentes passam sem alteração. Nenhum retângulo branco aparece atrás da sua imagem.",
      },
      {
        q: "O que acontece com um WEBP animado?",
        a: "Você recebe o primeiro quadro como um PNG estático. O PNG não tem suporte a animação, então os quadros restantes não podem ser representados. Converta para GIF se precisar manter a animação.",
      },
      {
        q: "Posso converter uma pasta de arquivos WEBP de uma vez?",
        a: "Pode. Selecione ou arraste quantos quiser e todos são convertidos em sequência, e depois empacotados em um único ZIP — um download em vez de dezenas.",
      },
      {
        q: "Por que o Fotos do Windows ou o Photoshop não abre meu arquivo WEBP?",
        a: "O WebP chegou em 2010, mas os programas de computador adotaram devagar. O Photoshop precisou de um plugin até a versão 23.2, e versões mais antigas do Windows precisam de um codec da Microsoft Store. Converter para PNG contorna a questão inteira, em vez de resolver versão por versão.",
      },
    ],
  },
};

export default copy;
