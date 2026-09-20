import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/imagem-para-base64.
 *
 * Head term "imagem para Base64" / "converter imagem em Base64" — the x-para-y
 * pattern of the converter family, and the term developers type in Portuguese
 * too. "codificar imagem em base64" and "data URI" live in aliases.ts. The
 * audience is technical, so HTML, CSS, data URI and MIME stay untranslated.
 */
const content: ToolPageContent = {
  toolId: "image-to-base64",
  locale: "pt",
  name: "Imagem para Base64",
  tagline:
    "Converta uma imagem em texto Base64 ou data URI online — com saída em Base64 puro, CSS e HTML, e cópia com um toque. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "convert", label: "Converter" },

  metaTitle: "Imagem para Base64 online grátis — gerar data URI | oMyImage",
  metaDescription:
    "Converta imagem em Base64 online e grátis: gere o data URI, o Base64 puro, a regra CSS ou a tag <img> e copie com um toque. Tudo no navegador, sem enviar nada.",

  intro:
    "Converter imagem para Base64 é o jeito de colocar a figura direto dentro do código. A ferramenta Imagem para Base64 do oMyImage codifica qualquer imagem num data URI Base64 direto no seu navegador, e também entrega o texto puro, uma regra de background em CSS e uma tag <img> pronta. Perfeito para embutir ícones e logotipos pequenos sem uma requisição HTTP a mais. Nada é enviado, então sua imagem continua privada.",

  sections: [
    {
      heading: "Para que serve a codificação Base64",
      id: "what",
      body: [
        "O Base64 reescreve dados binários usando só um conjunto restrito de caracteres de texto. Ele existe porque muitos sistemas foram feitos para transportar texto e se comportam de forma imprevisível ao receber bytes crus — corpos de e-mail, payloads JSON, documentos XML, atributos HTML, parâmetros de URL e vários formatos de configuração, entre outros.",
        "Codificar uma imagem em Base64 permite colocar a própria figura dentro de um desses canais que só aceitam texto. Embrulhada como data URI, com o tipo MIME declarado na frente, ela vai direto no atributo src de uma tag img ou numa regra background-image do CSS, e o navegador reconstrói os bytes originais.",
        "O custo é o tamanho. Quatro caracteres carregam três bytes, então a forma em texto fica cerca de um terço maior que o arquivo, e não há compressão para recuperar isso.",
      ],
    },
    {
      heading: "Quando embutir ajuda e quando atrapalha",
      id: "tradeoffs",
      body: [
        "O ganho é uma requisição de rede a menos. Para um arquivo muito pequeno, a ida e volta custa mais tempo do que os bytes, então embutir realmente faz a página aparecer antes. Uns 5 KB é a regra de bolso usual.",
        "Acima disso, embutir costuma ser prejuízo, por motivos fáceis de esquecer. Uma imagem embutida não pode ser armazenada em cache separadamente, então ela é baixada junto com o HTML a cada visita, enquanto um arquivo de imagem normal é buscado uma vez e reaproveitado. Ela também não pode ser carregada sob demanda, e ainda infla o próprio documento, o que atrasa a interpretação e a primeira exibição.",
        "A orientação prática: embuta ícones, logotipos minúsculos e placeholders. Sirva fotos normalmente.",
      ],
    },
    {
      heading: "O problema do e-mail",
      id: "email",
      body: [
        "Embutir imagens como data URI num e-mail em HTML parece um jeito elegante de não precisar hospedar nada, e falha com frequência suficiente para ser um padrão ruim. O Outlook no Windows, em especial, há muito tempo se recusa a exibir, e vários outros clientes removem ou bloqueiam por segurança.",
        "Os caminhos confiáveis são hospedar a imagem e apontar para ela, ou anexá-la e referenciá-la por CID — o mecanismo para o qual os clientes de e-mail foram realmente projetados. Base64 em e-mail só vale quando você controla o cliente de todo mundo que vai receber.",
      ],
    },
    {
      heading: "Codificar não é criptografar",
      id: "security",
      body: [
        "Às vezes o Base64 é confundido com uma forma de ofuscação ou proteção. Ele não é nem uma coisa nem outra. Qualquer console de navegador, qualquer editor de texto com um decodificador, qualquer um de mil sites transforma o texto de volta na imagem original em um segundo. Não há chave e não há segredo.",
        "Isso importa quando a imagem em si é sensível. Codificar em Base64 um documento, um RG ou uma foto particular e colar isso num arquivo de configuração, num chamado ou num documento compartilhado é exatamente tão exposto quanto anexar a imagem — e muitas vezes de forma menos óbvia, porque o texto parece embaralhado, o que leva as pessoas a tratá-lo como seguro.",
        "A codificação aqui acontece no seu navegador, então a imagem nunca é enviada. O que você faz com o texto resultante é onde a questão real de privacidade mora.",
      ],
    },
  ],

  howToTitle: "Como converter uma imagem para Base64",
  steps: [
    { title: "Envie", description: "Selecione uma imagem, ou arraste e solte na área de trabalho." },
    { title: "Escolha o formato", description: "Alterne entre data URI, Base64 puro, uma regra de background em CSS ou uma tag <img>." },
    { title: "Copie ou baixe", description: "Copie o texto para a área de transferência ou baixe como um arquivo .txt." },
  ],

  features: [
    { icon: "data_object", title: "Quatro formatos de saída", description: "Receba um data URI pronto para usar, o Base64 puro, uma regra background-image em CSS ou uma tag <img> completa." },
    { icon: "bolt", title: "Codificação instantânea", description: "A codificação acontece no momento em que você solta o arquivo — sem espera e sem envio." },
    { icon: "lock", title: "100% privado", description: "Sua imagem é codificada no seu navegador e nunca é mandada para um servidor." },
  ],

  faqs: [
    { q: "O que é um data URI em Base64?", a: "É uma representação em texto da sua imagem que você pode embutir direto no HTML ou no CSS, evitando uma requisição de arquivo separada." },
    { q: "Por que o texto é maior que o meu arquivo?", a: "A codificação Base64 acrescenta cerca de 33% de sobrecarga, então ela combina melhor com imagens pequenas, como ícones e logotipos." },
    { q: "Quais formatos funcionam?", a: "JPG, PNG, WEBP, GIF, BMP, SVG e AVIF." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro, e a imagem é codificada localmente no seu navegador — nada é enviado." },
    { q: "Por que o texto em Base64 é maior que o arquivo?", a: "Porque o Base64 representa três bytes de binário com quatro caracteres de texto, então a forma codificada fica cerca de 33% maior, mais um pouco para o prefixo do data URI. Essa sobrecarga é o preço de poder colocar dados binários onde só texto é permitido." },
    { q: "Quando vale mesmo usar um data URI?", a: "Para arquivos pequenos — ícones, um logotipo numa assinatura de e-mail, um placeholder, uma textura numa página HTML de arquivo único. Abaixo de uns 5 KB, a requisição HTTP economizada costuma compensar o aumento de tamanho. Acima disso, um arquivo de imagem servido normalmente é mais rápido." },
    { q: "Por que as minhas imagens embutidas não aparecem no e-mail?", a: "Porque vários clientes de e-mail importantes bloqueiam ou ignoram data URIs, e o Outlook no Windows é o caso persistente. Para e-mail, hospede a imagem e aponte para ela, ou use um anexo com CID — Base64 embutido não é confiável nesse contexto." },
    { q: "O Base64 protege a minha imagem?", a: "Não, e esse é um mal-entendido comum. Base64 é codificação, não criptografia — é trivialmente reversível por qualquer pessoa, sem nenhuma chave envolvida. Ele torna dados binários seguros para transportar como texto; não oferece confidencialidade nenhuma." },
    { q: "Posso usar Base64 no CSS?", a: "Pode, como URL de background-image, e é um jeito razoável de embutir um ícone ou uma textura pequena. Só saiba que um data URI numa folha de estilo é baixado por toda visita, mesmo que aquela regra nunca seja usada, e que ele não pode ser armazenado em cache separado do CSS." },
    { q: "Quais formatos posso codificar?", a: "JPG, PNG, WEBP, GIF, BMP, SVG e AVIF. A saída é um data URI completo, já com o tipo MIME certo, então dá para colar direto numa tag img ou numa folha de estilo." },
  ],

  security:
    "Sua imagem continua privada. A codificação em Base64 acontece inteiramente no seu navegador — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.8", count: "298" },

  ui: {
    // ImageToBase64Tool.tsx — module-scope TABS
    "Data URI": "Data URI", // i18n-same
    "Raw Base64": "Base64 puro",
    "CSS": "CSS", // i18n-same
    "HTML": "HTML", // i18n-same
    // ImageToBase64Tool.tsx
    "Please select an image file.": "Selecione um arquivo de imagem.",
    "Couldn't read that image.": "Não foi possível ler essa imagem.",
    "Copied to clipboard": "Copiado para a área de transferência",
    "Copy failed.": "Não foi possível copiar.",
    "or drop a JPG, PNG, WEBP, GIF or SVG here": "ou solte um JPG, PNG, WEBP, GIF ou SVG aqui",
    "Encoding options": "Opções de codificação",
    "Copy": "Copiar",
    "{size} encoded": "{size} codificado",
    "Base64 Output": "Saída em Base64",
    "Tip:": "Dica:",
    "Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.":
      "Textos em Base64 ficam cerca de 33% maiores que o arquivo — melhor para ícones pequenos embutidos em CSS ou HTML. Tudo roda no seu navegador.",
  },
};

export default content;
