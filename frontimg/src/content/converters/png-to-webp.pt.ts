import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/png-para-webp.
 *
 * Head term "PNG para WEBP" — "diminuir png", "png com transparência menor" e
 * "webp com transparência" live in aliases.ts.
 */
const copy: LocalizedPairCopy = {
  name: "PNG para WEBP",
  seoTitle: "Converter PNG para WEBP online grátis | oMyImage",
  seoDescription:
    "Converta PNG para WEBP online e grátis: arquivos bem menores com a transparência preservada e conversão em lote, direto no seu navegador. Sem cadastro.",
  unique: {
    intro:
      "O PNG é honesto, mas pesado. Converter para WebP mantém a transparência — o motivo pelo qual você usava PNG — e corta o arquivo para uma fração do tamanho. Para logotipos, ícones, prints de interface e qualquer coisa com canal alfa que precise carregar rápido, essa costuma ser a maior economia disponível de uma vez só.",
    whyConvert:
      "O problema do PNG é que ele se recusa a descartar qualquer coisa, o que é exatamente certo para um arquivo de trabalho e um desperdício para um arquivo da web. Um print ou um recorte de produto salvo em PNG passa facilmente dos megabytes, e numa página com uma dúzia deles o custo é sério. O WebP resolve isso sem obrigar você a abrir mão do canal alfa, e é isso que o torna estritamente melhor que a velha gambiarra de converter para JPG e pintar um fundo falso atrás da transparência. Você fica com bordas suaves, sombras e texto suavizado intactos, com algo entre um quarto e metade do tamanho do PNG. A ressalva a entender é que o modo com perdas do WebP é realmente com perdas, então o print de um texto pequeno pode ganhar um borrão leve se você baixar demais a qualidade.",
    notes: [
      {
        heading: "Prints e texto pedem um ajuste mais alto",
        body:
          "Conteúdo fotográfico tolera compressão agressiva porque o olho não acompanha pixels individuais numa textura. Conteúdo de bordas nítidas — prints de interface, texto, diagramas, desenho de linha — é o oposto: os defeitos de compressão se juntam nas bordas de alto contraste e aparecem como um halo ou um borrão leve. Se o seu PNG tem texto legível, fique em 0,90 ou acima e confira o resultado com zoom de 100% antes de rodar um lote.",
      },
      {
        heading: "A transparência passa exatamente",
        body:
          "Os dois formatos guardam um canal alfa completo de 8 bits, então esta conversão não achata nada nem pede uma cor de fundo. Pixels semitransparentes continuam semitransparentes, o que significa que sombras suaves e bordas esfumadas sobrevivem intactas. Esse é o principal motivo para escolher WebP em vez de JPG quando a origem é um PNG.",
      },
      {
        heading: "Quando manter o PNG",
        body:
          "Mantenha o PNG quando o arquivo for a cópia principal que você ainda vai editar, quando ele for para um contexto que não decodifica WebP — modelos de e-mail são o caso notório, já que vários clientes de e-mail de computador ainda não exibem — ou quando for um ícone minúsculo em que a economia são algumas centenas de bytes e não compensa um formato a mais no seu fluxo. O PNG também continua sendo a resposta certa para qualquer coisa que precise de fidelidade exata de pixel, como um QR code ou um diagrama técnico.",
      },
    ],
    faqs: [
      { q: "Converter PNG para WEBP mantém a transparência?", a: "Mantém, por completo. O WebP tem canal alfa completo, então áreas transparentes e semitransparentes passam sem alteração. Nada é achatado e não há cor de fundo para escolher." },
      { q: "Quanto menor o WEBP é em relação ao PNG?", a: "Normalmente de 50% a 75% menor em imagens fotográficas ou complexas. Gráficos chapados simples variam mais — às vezes a economia é enorme, e de vez em quando um PNG muito pequeno já está quase no ideal." },
      { q: "A conversão é sem perdas?", a: "Não por padrão. Esta ferramenta usa o modo com perdas do WebP, com um controle de qualidade, que é de onde vem a grande economia de tamanho. Deixe a qualidade alta se precisar de fidelidade quase igual à original, ou mantenha o PNG se precisar que seja exato." },
      { q: "O texto do meu print continua nítido?", a: "Em qualidade 0,90 ou acima, em geral sim. Ajustes mais baixos podem amolecer texto pequeno, porque os defeitos de compressão se juntam nas bordas de alto contraste. Confira um arquivo com zoom total antes de converter um lote inteiro." },
      { q: "Posso usar WEBP em e-mails?", a: "Não com segurança. Vários clientes de e-mail de computador ainda não exibem WebP, então PNG ou JPG continua sendo a escolha mais segura para e-mail. O WebP é voltado para páginas da web, onde o suporte é universal." },
    ],
  },
};

export default copy;
