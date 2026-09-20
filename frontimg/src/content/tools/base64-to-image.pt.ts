import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/base64-para-imagem.
 *
 * Head term "Base64 para imagem" — the x-para-y pattern of the converter
 * family; "decodificar base64", "converter base64 em imagem" and "visualizar
 * base64" live in aliases.ts. Technical audience, so data URI, MIME, JSON and
 * API stay untranslated.
 */
const content: ToolPageContent = {
  toolId: "base64-to-image",
  locale: "pt",
  name: "Base64 para imagem",
  tagline:
    "Converta um texto Base64 ou data URI de volta em imagem online — veja a prévia na hora e baixe em PNG, JPG ou WEBP. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Base64 para imagem online grátis — decodificar data URI | oMyImage",
  metaDescription:
    "Converta Base64 em imagem online e grátis: cole o data URI ou o Base64 puro, veja a prévia na hora e baixe em PNG, JPG ou WEBP. Tudo decodificado no navegador.",

  intro:
    "Converter Base64 para imagem transforma um texto de volta num arquivo de imagem de verdade. A ferramenta Base64 para imagem do oMyImage decodifica um data URI ou um Base64 puro direto no seu navegador, mostra a prévia na hora e deixa você baixar como está ou converter para PNG, JPG ou WEBP. Nada é enviado, então os seus dados continuam privados.",

  sections: [
    {
      heading: "Transformando texto de volta em figura",
      id: "what",
      body: [
        "O Base64 existe para que dados binários consigam viajar por canais feitos para texto. É por isso que imagens aparecem como longas sequências de caracteres dentro de respostas de API, payloads JSON, código HTML, arquivos CSS, colunas de banco de dados e corpos de e-mail — em algum momento a figura precisou caber em algum lugar que só aceitava texto.",
        "A decodificação reverte a transformação exatamente. O Base64 é sem perdas: quatro caracteres voltam a ser três bytes, e o que sai é byte a byte o arquivo original. Nada é aproximado e nenhuma qualidade se perde, então a imagem decodificada é idêntica à que foi codificada.",
        "O momento em que você costuma precisar disso é depurando — você tem uma resposta ou uma linha de log com algo que deveria ser uma imagem e quer ver se é a imagem certa, ou se é sequer uma imagem válida.",
      ],
    },
    {
      heading: "Por que um texto não decodifica",
      id: "troubleshooting",
      body: [
        "A esmagadora maioria das falhas é estrago de copiar e colar, e não dado realmente corrompido. Visualizadores de log, clientes de e-mail e terminais inserem quebras de linha em textos longos; editores quebram a linha na tela; escapes de JSON ficam para trás. Qualquer caractere perdido quebra a decodificação.",
        "O corte é a outra causa frequente. Consoles e sistemas de log costumam cortar valores longos, às vezes com reticências e às vezes em silêncio, então você fica com um pedaço que parece completo. Um Base64 válido sempre tem comprimento divisível por quatro, com um ou dois caracteres \"=\" no fim quando necessário — se o seu não tem, ele está incompleto.",
        "Fique de olho também no Base64 para URL. Alguns sistemas trocam \"+\" e \"/\" por \"-\" e \"_\" para o texto poder aparecer numa URL, e essas variantes precisam ser convertidas de volta antes de um decodificador padrão aceitar.",
      ],
    },
    {
      heading: "Com ou sem o prefixo",
      id: "prefix",
      body: [
        "Um data URI completo parece \"data:image/png;base64,\" seguido do conteúdo. Esse prefixo não faz parte da codificação — é uma declaração que diz ao navegador o que os bytes decodificados representam, e é assim que uma tag img sabe tratar o resultado como PNG e não como JPG.",
        "As duas formas funcionam aqui. Se o prefixo estiver presente, ele é usado para determinar o formato de saída, que é o resultado mais confiável. Sem ele, o formato é deduzido dos próprios bytes decodificados, já que todo formato de imagem começa com uma assinatura reconhecível.",
      ],
    },
    {
      heading: "Decodificado no seu aparelho, de propósito",
      id: "privacy",
      body: [
        "Tudo acontece dentro da aba do seu navegador. Nesta ferramenta isso não é um detalhe qualquer, por causa de onde esses textos costumam vir: respostas de API internas, logs de produção, exportações de banco de dados e arquivos de configuração.",
        "Colar esse material num site que processa no servidor significa entregar o que o conteúdo tiver, junto com todo o contexto em volta. Aqui o texto é decodificado na própria página e a imagem resultante é oferecida para download — nada é transmitido, e não existe cópia no servidor com que se preocupar depois.",
      ],
    },
  ],

  howToTitle: "Como converter Base64 em imagem",
  steps: [
    { title: "Cole", description: "Cole um data URI ou um texto Base64 puro no campo de entrada." },
    { title: "Veja a prévia", description: "A imagem decodificada aparece na hora, com as dimensões e a checagem de validade." },
    { title: "Baixe", description: "Baixe a imagem original, ou converta antes para PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "image", title: "Decodificação instantânea", description: "Identifica sozinho PNG, JPG, GIF, WEBP, BMP e SVG a partir do texto e mostra a prévia enquanto você digita." },
    { icon: "sync_alt", title: "Converter ao baixar", description: "Salve a imagem decodificada como está, ou recodifique para PNG, JPG ou WEBP com controle de qualidade." },
    { icon: "lock", title: "100% privado", description: "A decodificação acontece inteiramente no seu navegador — nada é enviado a um servidor." },
  ],

  faqs: [
    { q: "O que dá para colar aqui?", a: "Tanto data URIs completos (data:image/png;base64,…) quanto textos Base64 puros. Para a entrada pura, o tipo da imagem é detectado automaticamente." },
    { q: "Dá para converter o formato?", a: "Dá. Baixe o original, ou escolha PNG, JPG ou WEBP para recodificar antes de baixar." },
    { q: "E se o meu texto for inválido?", a: "Você vê uma mensagem clara — confira se copiou o texto Base64 inteiro." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro, e a decodificação acontece localmente no seu navegador — nada é enviado." },
    { q: "Preciso incluir o prefixo do data URI?", a: "Não. Cole o Base64 puro ou o data URI completo começando com \"data:image/…;base64,\" — o prefixo é detectado e tratado. Incluir ajuda, porque declara o formato explicitamente em vez de deixá-lo ser deduzido." },
    { q: "Por que o meu texto não decodifica?", a: "Normalmente por espaços ou quebras de linha que entraram quando ele foi copiado de um log, de um e-mail ou de um JSON. O corte é a outra causa comum — textos longos são truncados por editores e terminais. O comprimento de um Base64 válido é sempre múltiplo de quatro, com \"=\" de preenchimento no fim quando preciso." },
    { q: "De onde costumam vir esses textos?", a: "De respostas de API que devolvem imagens embutidas, payloads JSON, colunas de banco que guardam imagens como texto, código HTML e CSS que você está depurando, código-fonte de e-mail, arquivos de configuração e saída de log. De qualquer lugar em que o binário precisou passar por um canal só de texto." },
    { q: "Em que formato eu recebo de volta?", a: "No formato original — o data URI carrega o tipo MIME, então um PNG decodifica como PNG e um JPG como JPG. Se o texto não tiver prefixo, o formato é deduzido pelo número mágico dos bytes decodificados." },
    { q: "Existe limite de tamanho?", a: "Só a memória do seu navegador. Textos muito longos podem demorar para colar e para decodificar, já que tudo precisa ficar na página. Imagens de vários megabytes codificadas como texto são desajeitadas por natureza, e não por um limite daqui." },
    { q: "Meus dados são enviados para algum lugar?", a: "Não. A decodificação acontece no seu navegador, o que importa porque esses textos vêm rotineiramente de respostas de API, sistemas internos e logs — o tipo de material que não deveria ser colado num serviço remoto." },
  ],

  security:
    "Seus dados continuam privados. A decodificação de Base64 acontece inteiramente no seu navegador — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "254" },

  ui: {
    // Base64ToImageTool.tsx
    "That doesn't look like a valid Base64 image string.":
      "Isso não parece um texto Base64 de imagem válido.",
    "Image downloaded.": "Imagem baixada.",
    "Couldn't decode that string.": "Não foi possível decodificar esse texto.",
    "Canvas not supported.": "Este navegador não tem suporte a canvas.",
    "Downloaded as {format}.": "Baixado em {format}.",
    "Conversion failed.": "Não foi possível converter.",
    "Decoded image": "Imagem decodificada",
    "Clear input": "Limpar entrada",
    "Output settings": "Configurações de saída",
    "Decoded": "Decodificada",
    "Paste a Base64 string to preview the image here.":
      "Cole um texto Base64 para ver a imagem aqui.",
    "decoded preview": "prévia decodificada",
    "Base64 Input": "Entrada em Base64",
    "Download image": "Baixar imagem",
    "Download as {format}": "Baixar em {format}",
    "Paste a data URI (data:image/png;base64,…) or raw Base64":
      "Cole um data URI (data:image/png;base64,…) ou o Base64 puro",
    "Valid image detected.": "Imagem válida detectada.",
    "Convert & download": "Converter e baixar",
  },
};

export default content;
