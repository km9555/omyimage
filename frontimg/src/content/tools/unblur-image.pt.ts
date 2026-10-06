import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese copy for /pt/tirar-desfoque-da-foto (variant of upscale-image,
 * 2×). "despixelar imagem" 170/mo; the page is honest about which blur the
 * model can and cannot fix, as the English one is.
 */
const content: ToolPageContent = {
  toolId: "unblur-image",
  locale: "pt",
  name: "Tirar desfoque da foto",
  tagline:
    "Deixe nítidas fotos moles, levemente borradas ou pixeladas com IA. Você recebe de volta a foto no mesmo tamanho, só que mais nítida: o modelo reconstrói bordas e texturas — funciona melhor em desfoque leve e em fotos estragadas pela compressão. Grátis e sem marca d'água.",
  category: { id: "ai", label: "IA de imagem" },

  metaTitle: "Tirar Desfoque da Foto Online — Deixe Fotos Nítidas com IA | oMyImage",
  metaDescription:
    "Tire o desfoque de fotos online com IA: deixe nítidas fotos moles ou levemente borradas, no mesmo tamanho da original. Funciona melhor em desfoque leve e compressão. Grátis, sem marca d'água.",

  intro:
    "A maioria das fotos que as pessoas chamam de \"borradas\" está, na verdade, mole: um pouco fora de foco, tirada com pouca luz, diminuída e salva de novo por um aplicativo de mensagem ou ampliada a partir de um original pequeno. São exatamente esses os defeitos para os quais um modelo de restauração de imagem com IA é treinado. Envie a foto e o modelo a redesenha no dobro da resolução — bordas, texturas e linhas finas — e a devolve no tamanho original, pronta para ocupar o lugar da antiga, sem a maior parte da moleza e dos blocos. Ele não salva toda imagem — as seções abaixo explicam que tipo de desfoque ele corrige e qual não.",

  sections: [
    {
      heading: "Os tipos de desfoque que ele corrige",
      id: "fixable",
      body: [
        "A moleza de pequenos erros de foco, de lentes simples e sensores pequenos e da redução de ruído com pouca luz. A pixelização de fotos salvas pequenas e depois ampliadas. Os blocos e borrões da compressão pesada de JPG, que é o que acontece com uma foto toda vez que ela é encaminhada num aplicativo de mensagem.",
        "Em todos esses casos as formas continuam lá, só não estão bem desenhadas. O modelo reconhece as formas — um olho, uma letra, uma folha, uma costura — e as desenha nítidas, e para o olho isso aparece como uma foto sem desfoque.",
      ],
    },
    {
      heading: "Os tipos que ele não corrige",
      id: "limits",
      body: [
        "Desfoque forte de movimento, quando a câmera ou o assunto se mexeu e cada borda virou um rastro, e fotos muito fora de foco, em que os detalhes derreteram em manchas. Nelas a informação realmente se perdeu, e qualquer ferramenta que diga recuperá-la está inventando.",
        "Este modelo ainda deixa essas fotos mais limpas, mas não transforma um rosto ou uma placa ilegível em algo legível, e não foi feito para isso. Se um resultado parecer plausível mas errado — um rosto levemente diferente do da pessoa —, trate como ilustração, não como prova.",
      ],
    },
    {
      heading: "Como ter o melhor resultado",
      id: "tips",
      body: [
        "Comece sempre pela melhor cópia que você tiver: o original da galeria é melhor que um print, que é melhor que uma cópia encaminhada. Recorte o que não interessa antes de enviar, para a atenção do modelo ir para a parte importante.",
        "Mantenha o tamanho original para fotos que você vai usar como estão. Desligue a opção para uma imagem pequena ou pixelada que você quer maior: aí o resultado nítido vem com o dobro do tamanho. Compare o resultado com o comparador antes de baixar; em rostos, olhe primeiro os olhos e a linha do cabelo.",
      ],
    },
    {
      heading: "Fotos antigas e digitalizadas",
      id: "old-photos",
      body: [
        "Digitalizações de fotos antigas e fotos copiadas de um álbum impresso costumam estar moles e granuladas, e não realmente borradas, o que combina bem com o modelo: ele remove boa parte do granulado e redesenha os contornos.",
        "Ele não conserta arranhões, dobras, manchas nem cores desbotadas — isso é estrago na foto impressa, não falta de resolução, e precisa de retoque. Digitalize na maior resolução que o seu scanner oferece e depois deixe nítida aqui.",
      ],
    },
  ],

  howToTitle: "Como tirar o desfoque de uma foto",
  steps: [
    { title: "Envie a foto borrada", description: "Selecione um JPG, PNG ou WEBP — o arquivo original, não um print, se você tiver." },
    { title: "Mantenha o tamanho ou amplie", description: "O resultado mantém o tamanho da sua foto; desligue isso para recebê-la com o dobro do tamanho." },
    { title: "Deixe nítida e baixe", description: "Compare antes e depois com o comparador e baixe a imagem mais nítida." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Restauração com IA", description: "Reconstrói bordas, texturas e letras em vez de misturar pixels — no tamanho da sua própria foto." },
    { icon: "visibility", title: "Antes e depois honesto", description: "Um comparador mostra exatamente o que mudou, para você julgar o resultado." },
    { icon: "verified_user", title: "Grátis, sem marca d'água", description: "Sem cadastro e sem nada carimbado no resultado." },
  ],

  faqs: [
    { q: "Como tirar o desfoque de uma foto online?", a: "Envie a foto e clique em Tirar o desfoque. Compare o resultado com o comparador e baixe se estiver bom — ele volta no mesmo tamanho da sua foto." },
    { q: "Dá para consertar uma foto em que a câmera tremeu?", a: "Só em parte. O desfoque de movimento espalha os detalhes em rastros que nenhum modelo consegue desfazer de verdade; você terá uma imagem mais limpa, mas não a foto nítida que a câmera perdeu." },
    { q: "Dá para deixar reconhecível um rosto borrado?", a: "Não, e nem deveria. Num rosto que já é reconhecível ele deixa tudo bem mais nítido; num irreconhecível ele só estaria chutando, então o resultado não pode ser usado para identificar ninguém." },
    { q: "Ele despixela imagens?", a: "Sim — uma imagem pequena e cheia de blocos é um dos melhores casos. Desligue Manter o tamanho original para dar espaço ao detalhe extra: os blocos viram bordas suaves e textura com o dobro do tamanho." },
    { q: "A foto sem desfoque fica do mesmo tamanho da original?", a: "Sim, por padrão. O modelo prevê detalhes no dobro da resolução e o resultado volta ao tamanho da sua foto. Desligue Manter o tamanho original para baixar em 2×." },
    { q: "Ele conserta texto borrado na foto de um documento?", a: "Texto levemente mole fica bem mais nítido. Texto borrado demais para ler no original normalmente continua ilegível." },
    { q: "Minha foto é enviada?", a: "Sim, para o nosso servidor, porque o modelo precisa de mais memória do que um navegador tem. O resultado fica só por pouco tempo atrás de um link privado e é apagado automaticamente em até uma hora." },
  ],

  security:
    "A remoção do desfoque roda no nosso servidor com o motor de código aberto Real-ESRGAN. A foto viaja por uma conexão criptografada, o resultado fica só por pouco tempo atrás de um link privado e é apagado automaticamente em até uma hora, e nada é compartilhado nem reutilizado.",
};

export default content;
