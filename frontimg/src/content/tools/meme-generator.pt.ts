import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/gerador-de-memes.
 *
 * Head term "gerador de memes" — Adobe Express BR, Canva pt-BR, Kapwing pt and
 * iLoveIMG /pt all title on it; "criar meme" and "fazer meme" live in
 * aliases.ts. The default captions ("TEXTO DE CIMA" / "TEXTO DE BAIXO") are
 * drawn INTO the exported image, so they are ui keys, not chrome
 * (conversion.md §6.3).
 */
const content: ToolPageContent = {
  toolId: "meme-generator",
  locale: "pt",
  name: "Gerador de memes",
  tagline:
    "Crie memes online — coloque as legendas clássicas em cima e embaixo de qualquer imagem com prévia ao vivo e exporte em PNG, JPG ou WEBP. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Gerador de memes online grátis — criar meme com sua foto | oMyImage",
  metaDescription:
    "Crie memes online e grátis com o gerador de memes: coloque texto em cima e embaixo da sua foto, ajuste fonte, cor e contorno e baixe em PNG ou JPG. Sem cadastro.",

  intro:
    "Um gerador de memes transforma qualquer imagem em meme em segundos. O Gerador de memes do oMyImage coloca as clássicas legendas em negrito e com contorno, em cima e embaixo das suas fotos ou modelos, com controle total de fonte, tamanho e cores e uma prévia ao vivo enquanto você digita. Legendas longas quebram de linha sozinhas. Exporte em PNG, JPG ou WEBP — tudo no seu navegador, sem enviar nada.",

  sections: [
    {
      heading: "Por que o meme tem essa cara",
      id: "convention",
      body: [
        "Letras maiúsculas brancas e grossas com contorno preto não são tanto uma escolha estética, e sim um problema de engenharia resolvido. Um texto por cima de uma foto precisa continuar legível não importa o que esteja embaixo, e nenhuma cor sozinha consegue isso — o branco some contra um céu claro, o preto some numa sombra.",
        "O contorno resolve garantindo uma borda no tom oposto onde quer que a letra caia. A Impact, ou qualquer fonte sem serifa pesada e condensada, faz a outra metade: as letras são estreitas o bastante para uma frase inteira caber na largura da imagem e grossas o bastante para aguentar uma compressão pesada.",
        "O resultado é reconhecível na hora, o que por si só é útil. O formato avisa o que a imagem é antes de alguém ler uma palavra.",
      ],
    },
    {
      heading: "Texto de cima, texto de baixo, e o porquê",
      id: "structure",
      body: [
        "A estrutura em duas linhas é preparação e punchline, e funciona porque o olho lê a imagem entre as duas. O texto de cima apresenta a situação, a foto dá o contexto e a linha de baixo fecha a piada — essa pequena pausa faz um trabalho cômico de verdade.",
        "Por isso enfiar tudo numa linha só costuma não funcionar, e por isso textos muito longos falham: quando a pessoa chega ao fim, já parou de olhar para a imagem. Linhas curtas, de preferência com menos de umas oito palavras cada, mantêm o ritmo.",
        "O formato alternativo — uma faixa branca acima ou abaixo da foto — combina com legendas mais longas e comentários, e deixa a foto livre. Ele é lido como legenda, e não como meme, o que às vezes é o tom certo.",
      ],
    },
    {
      heading: "Configurações de exportação que aguentam o compartilhamento",
      id: "export",
      body: [
        "Uns 800 pixels de largura é o ponto ideal na prática. Memes são vistos no celular, e toda plataforma recodifica o que você envia — WhatsApp, Instagram, X, grupos do Facebook —, então exportar com 4000 pixels não ganha nada e é jogado fora pelo primeiro serviço que tocar na imagem.",
        "Vale entender essa recodificação, porque ela explica a decadência típica de um meme muito compartilhado. Cada plataforma comprime a imagem de novo, os defeitos se acumulam uns sobre os outros e, depois de passar por grupos suficientes, a imagem fica visivelmente estragada. Não dá para evitar, mas começar de uma imagem limpa e com tamanho sensato atrasa bastante esse processo.",
        "Exporte em JPG com qualidade alta para memes com foto, ou em PNG se a imagem for um gráfico simples ou um print — as bordas do texto ficam mais nítidas.",
      ],
    },
    {
      heading: "Tudo fica no seu aparelho",
      id: "privacy",
      body: [
        "A imagem é montada num canvas dentro do seu navegador, então nada é enviado. Isso importa porque muitos memes são feitos com material privado — o print de um grupo do WhatsApp, a foto de um colega, algo do álbum da família —, que as pessoas prefeririam não entregar a um servidor só para colocar duas linhas de texto.",
        "Também significa que a ferramenta continua funcionando sem internet depois que a página carregou, e que não há fila, limite de uso nem conta.",
      ],
    },
  ],

  howToTitle: "Como fazer um meme",
  steps: [
    { title: "Envie", description: "Selecione uma imagem ou um modelo de meme, ou arraste e solte na área de trabalho." },
    { title: "Escreva as legendas", description: "Digite o texto de cima e o de baixo e ajuste fonte, tamanho, cor e contorno com a prévia ao vivo." },
    { title: "Exporte", description: "Clique em Exportar meme para baixar em PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "text_fields", title: "Texto clássico de meme", description: "Legendas em negrito no estilo Impact com contorno preto, maiúsculas automáticas e quebra de linha automática para textos longos." },
    { icon: "palette", title: "Estilo completo", description: "Mude a fonte, o tamanho, a cor do texto e a cor e espessura do contorno para combinar com qualquer estilo de meme." },
    { icon: "lock", title: "Privado e instantâneo", description: "Seu meme é montado inteiramente no seu navegador — a imagem nunca é enviada para lugar nenhum." },
  ],

  faqs: [
    { q: "Posso usar a minha própria imagem?", a: "Sim. Envie qualquer JPG, PNG, WEBP ou GIF e coloque as legendas — não existe uma lista fixa de modelos." },
    { q: "Texto longo quebra de linha?", a: "Sim. As legendas quebram automaticamente em várias linhas para sempre caberem na largura da imagem." },
    { q: "Em que formato posso exportar?", a: "PNG (sem perdas), JPG (menor) ou WEBP." },
    { q: "É grátis?", a: "Totalmente grátis, sem marca d'água e sem cadastro." },
    { q: "Minhas imagens ficam privadas?", a: "Sim. Tudo é montado localmente no seu navegador; nada é enviado." },
    { q: "Por que o texto de meme é sempre branco com contorno preto?", a: "Porque é a única combinação que continua legível em qualquer imagem. Só branco some num céu claro; só preto some na sombra. O contorno garante contraste contra o que estiver atrás, e é por isso que a convenção sobreviveu sem mudanças por vinte anos." },
    { q: "Qual fonte devo usar?", a: "A Impact é a clássica, e é clássica por um motivo — condensada, pesada e legível em tamanhos pequenos, então uma linha longa ainda cabe na largura da imagem. Qualquer fonte sem serifa negrita e condensada faz o mesmo trabalho se a Impact não estiver disponível." },
    { q: "O texto vai dentro da imagem ou em cima dela?", a: "Dentro é o formato padrão e viaja melhor, porque o meme é uma imagem só, sem nada para ser cortado. Texto numa faixa acima e abaixo combina com legendas mais longas e deixa a foto livre, o que importa quando a própria imagem é a piada." },
    { q: "Em que tamanho devo exportar?", a: "Uns 800 pixels de largura já bastam. Memes são vistos no celular e recomprimidos por toda plataforma por onde passam, então um arquivo muito grande não ganha nada e só demora mais para enviar." },
    { q: "Por que meu meme fica pior depois de postar?", a: "Porque as plataformas recodificam todo envio, e cada novo compartilhamento comprime de novo. Esse estrago acumulado é exatamente o que dá aos memes muito compartilhados aquela cara desbotada e quadriculada. Começar de uma imagem limpa e de tamanho razoável atrasa a decadência." },
    { q: "Posso usar qualquer imagem?", a: "Tecnicamente, sim. Lembre que fotos têm dono, e que um meme com a foto ou a imagem de alguém pode levantar questões de direito autoral e de direito de imagem quando é usado comercialmente. Para uso pessoal e nas redes isso raramente é um problema prático." },
    { q: "Dá para fazer meme pelo celular?", a: "Sim. A ferramenta funciona no navegador do celular: envie a foto da galeria, escreva as legendas e baixe o meme pronto para mandar no WhatsApp ou postar." },
  ],

  security:
    "Suas imagens continuam privadas. Os memes são montados inteiramente no seu navegador com canvas HTML — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.9", count: "421" },

  ui: {
    // MemeTool.tsx — default captions, drawn INTO the image
    "TOP TEXT": "TEXTO DE CIMA",
    "BOTTOM TEXT": "TEXTO DE BAIXO",
    // module-scope FONTS
    "Impact (classic)": "Impact (clássica)",
    "Anton / Sans": "Anton / Sem serifa",
    "Serif": "Serifada",
    // MemeTool.tsx
    "Couldn't read that image.": "Não foi possível ler essa imagem.",
    "Please select an image file.": "Selecione um arquivo de imagem.",
    "Meme exported — download started.": "Meme exportado — o download começou.",
    "Export failed.": "Falha ao exportar.",
    "or drop a JPG, PNG, WEBP or GIF here": "ou solte um JPG, PNG, WEBP ou GIF aqui",
    "Meme settings": "Configurações do meme",
    "Meme Settings": "Configurações do meme",
    "Export": "Exportar",
    "Exporting…": "Exportando…",
    "Long captions wrap automatically. Everything runs in your browser.":
      "Legendas longas quebram de linha sozinhas. Tudo roda no seu navegador.",
    "Export meme": "Exportar meme",
    "Caption": "Legenda",
    "Top text": "Texto de cima",
    "Bottom text": "Texto de baixo",
    "Font": "Fonte",
    "Size": "Tamanho",
    "UPPERCASE": "MAIÚSCULAS",
    "Style": "Estilo",
    "Text color": "Cor do texto",
    "Outline color": "Cor do contorno",
    "Outline thickness": "Espessura do contorno",
    "PNG (lossless)": "PNG (sem perdas)",
    "JPG (smaller)": "JPG (menor)",
  },
};

export default content;
