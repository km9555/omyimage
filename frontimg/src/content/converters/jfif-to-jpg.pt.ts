import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Portuguese (Brazilian) copy for /pt/jfif-para-jpg.
 *
 * Head term "JFIF para JPG" — the people who land here saved an image on
 * Windows and got a file nothing opens, so "o que é jfif", "abrir jfif" and
 * "jfif não abre" live in aliases.ts. The Brazilian pain point named in the
 * copy is the upload form: concursos, portais do governo, marketplaces.
 */
const copy: LocalizedPairCopy = {
  name: "JFIF para JPG",
  seoTitle: "Converter JFIF para JPG online grátis | oMyImage",
  seoDescription:
    "Converta JFIF para JPG online e grátis: transforme em lote aqueles arquivos .jfif do Windows em .jpg que qualquer site aceita. Sem cadastro.",
  unique: {
    intro:
      "Você salvou uma imagem e o Windows te entregou um arquivo .jfif que metade dos seus programas se recusa a abrir. Não há nada de errado com ele — um JFIF é um JPEG perfeitamente comum com uma extensão incomum —, mas isso conforta pouco quando o formulário de envio recusa o arquivo. Este conversor lê o arquivo e grava um .jpg limpo, que se comporta como você esperava desde o começo.",
    whyConvert:
      "Este é um problema de nome disfarçado de problema de formato. JFIF quer dizer JPEG File Interchange Format, e é o contêiner que praticamente todo arquivo que você já chama de JPG usa por dentro. O motivo de você de repente ter arquivos terminados em .jfif é uma peculiaridade do registro do Windows: certas combinações de Windows e Chrome registram .jfif como a extensão preferida para o tipo MIME image/jpeg e, a partir daí, as imagens salvas ganham essa extensão em vez de .jpg. Os bytes são idênticos aos que você teria antes. Infelizmente muitos sistemas conferem a extensão em vez do conteúdo — portais de vaga, sistemas de concurso, gerenciadores de foto antigos, formulários de e-commerce, sistemas de entrega de trabalho escolar — e simplesmente recusam. Renomear o arquivo à mão muitas vezes funciona, mas falha quando a extensão está oculta, quando são dezenas de arquivos ou quando o sistema que recebe também valida o conteúdo.",
    notes: [
      {
        heading: "Por que não simplesmente renomear o arquivo?",
        body:
          "Muitas vezes dá, e se você tem um arquivo só e as extensões estão visíveis, é a solução mais rápida. Ela desanda em escala e nos casos em que o Windows esconde as extensões, e você acaba com algo chamado foto.jpg.jfif, que não está nem um pouco melhor. Converter também normaliza o arquivo: ele é decodificado e recodificado como um JPEG padrão, o que resolve aqueles casos em que o sistema que recebe estava reclamando de algo dentro do arquivo, e não do nome dele.",
      },
      {
        heading: "Como impedir o Windows de fazer isso de novo",
        body:
          "A causa é uma associação de tipo de arquivo no registro do Windows, na entrada do tipo de conteúdo image/jpeg, onde .jfif está listada como extensão padrão. Editar o registro resolve de vez para os downloads futuros, mas não faz nada pelos arquivos que você já tem — e não é algo para tentar sem cuidado. Converter resolve o que já está no seu disco, que costuma ser o problema imediato.",
      },
      {
        heading: "Uma recodificação, perda mínima",
        body:
          "Como JFIF e JPG são o mesmo formato por baixo, esta conversão é quase uma passagem direta. A imagem é decodificada e recodificada uma vez, então, com a qualidade alta, a diferença é imperceptível. Deixe o controle de qualidade em cima — não há um problema de tamanho para resolver aqui, e este não é o momento de comprimir.",
      },
    ],
    faqs: [
      { q: "O que é um arquivo JFIF, afinal?", a: "É um JPEG. JFIF quer dizer JPEG File Interchange Format e é o contêiner padrão que quase todo arquivo JPG já usa. A única diferença são as letras depois do ponto." },
      { q: "Por que o Chrome salva imagens como .jfif em vez de .jpg?", a: "Uma associação no registro do Windows lista .jfif como extensão padrão do tipo de conteúdo image/jpeg. O Chrome pergunta ao Windows qual extensão usar e recebe .jfif. É uma peculiaridade de configuração do Windows, não um defeito do Chrome." },
      { q: "Posso só renomear .jfif para .jpg?", a: "Com frequência sim, já que o conteúdo já é um JPEG válido. Fica chato quando o Windows esconde as extensões, é inútil para um lote grande e não ajuda se o sistema que recebe estiver reclamando de outra coisa além do nome." },
      { q: "Converter perde qualidade?", a: "Praticamente nada com a qualidade alta. A imagem é decodificada e recodificada uma vez, o que é um passo de geração muito pequeno. Mantenha o controle em cima e você não vê diferença." },
      { q: "Dá para converter muitos arquivos JFIF de uma vez?", a: "Dá, e esse é o principal motivo para usar um conversor em vez de renomear. Solte a pasta inteira e você recebe um ZIP com os arquivos .jpg." },
      { q: "Um arquivo JFIF é perigoso ou está corrompido?", a: "Não. É um arquivo de imagem normal com uma extensão pouco familiar. Não há nada quebrado nele, e é exatamente por isso que a situação confunde tanto." },
    ],
  },
};

export default copy;
