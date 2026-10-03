import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/colocar-marca-dagua.
 *
 * Head term "colocar marca d'água em foto" — Watermarkly ("Colocar marca
 * d'água em fotos online grátis"), TechTudo's how-to, Fotor, Canva and Img2Go
 * all title on it; iLoveIMG uses "marcar imagem", which nobody types. The slug
 * drops the apostrophe (ASCII only): `colocar-marca-dagua`. "marca dagua",
 * "logo na foto" and "assinatura na foto" live in aliases.ts.
 *
 * The default watermark text is the brand "© oMyImage" in every language
 * (WatermarkTool.tsx) — not copy. The nine named positions, FONTS and FORMATS
 * are module scope, maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "watermark-image",
  locale: "pt",
  name: "Colocar marca d'água em foto",
  seoName: "Marca d'água",
  tagline:
    "Coloque marca d'água de texto ou logo nas suas imagens online — com controle de posição, opacidade e rotação, prévia ao vivo e em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Colocar marca d'água em foto online grátis — texto ou logo | oMyImage",
  metaDescription:
    "Coloque marca d'água em fotos online e grátis: texto ou logo, com posição, opacidade e rotação ajustáveis e prévia ao vivo. Em lote, no navegador e sem cadastro.",

  intro:
    "Colocar marca d'água em foto é o jeito mais simples de proteger seu trabalho e assinar suas imagens. A ferramenta de marca d'água do oMyImage permite adicionar um texto — com a fonte, a cor e o contorno que você escolher — ou sobrepor o seu próprio logo, e posicionar tudo com precisão, com prévia ao vivo, opacidade e rotação. Coloque marca d'água em uma imagem ou em um lote inteiro de uma vez. Tudo roda no seu navegador, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "O que uma marca d'água realmente faz",
      id: "purpose",
      body: [
        "Uma marca d'água faz três trabalhos, e vale ter claro qual deles você precisa. Ela desencoraja o uso casual, porque a maioria das pessoas que salvaria sem pensar uma imagem sem marca não se dá ao trabalho com uma marcada. Ela dá o crédito, para que, quando a imagem circular, seu nome vá junto. E ela marca provas, deixando você mostrar a foto a um cliente enquanto a versão sem licença fica sem graça de usar.",
        "O que ela não faz é impedir o roubo. Qualquer pessoa com um programa de edição e um pouco de paciência consegue remover uma marca d'água, e o preenchimento com IA baixou muito essa barreira. Tratar a marca d'água como proteção contra cópia leva a marcas tão pesadas que estragam a foto e mesmo assim não param quem está determinado.",
        "O objetivo realista é criar atrito e garantir o crédito. Pensando assim, as escolhas de design ficam muito mais fáceis.",
      ],
    },
    {
      heading: "Posição e o problema do recorte",
      id: "placement",
      body: [
        "Uma marca no canto é discreta e tem aparência profissional, e por isso é o padrão para trabalhos finalizados. A fraqueza é óbvia: um canto é cortado com facilidade, e a imagem sobrevive ao recorte sem problema nenhum.",
        "Repetir a marca pelo quadro, ou passá-la na diagonal pelo centro, resolve isso com um custo. Agora remover significa retocar por cima do assunto em vez de recortar em volta, o que dá trabalho de verdade. Mas a foto fica mais difícil de olhar, então isso é para provas, prévias e portfólio, e não para o trabalho entregue.",
        "Um meio-termo que muitos fotógrafos usam: colocar uma única marca de forma que ela encoste no assunto, em vez de ficar num fundo vazio. É muito menos invasivo do que repetir a marca, e bem mais difícil de remover de forma limpa do que uma marca no canto.",
      ],
    },
    {
      heading: "Opacidade, tamanho e contraste",
      id: "design",
      body: [
        "Uma opacidade entre 30% e 50% é a faixa em que a marca d'água aparece sem dominar a foto. A armadilha é testar em uma imagem e aplicar em cem: uma marca branca a 35% aparece bem numa foto escura e praticamente some num céu claro. Se o seu lote é variado, confira a imagem mais clara e a mais escura antes de confirmar.",
        "O tamanho importa menos do que as pessoas pensam. Uma marca ocupando uns 10% a 20% da largura do quadro é legível no celular sem gritar. Marcas muito pequenas são fáceis de recortar e de não ver; marcas muito grandes deixam de ser marca d'água e viram cartaz.",
        "Para logos, use um PNG transparente. Um logo salvo em JPG leva junto um retângulo branco, que parece um erro em qualquer imagem que não seja branca atrás da marca.",
      ],
    },
    {
      heading: "Guarde uma cópia sem marca",
      id: "workflow",
      body: [
        "Colocar marca d'água é destrutivo — a marca vira parte dos pixels e não sai depois. Sempre trabalhe em uma cópia e guarde o original limpo, porque na hora em que você precisar licenciar a imagem, imprimir ou entregar a um cliente, a versão com marca não serve para nada.",
        "A ordem sensata é editar, depois redimensionar para o destino, e colocar a marca d'água por último. Colocar a marca antes de redimensionar faz ela ser reduzida junto com todo o resto e muitas vezes ficar ilegível na imagem menor.",
        "Aqui tudo roda no seu navegador, então o original sem marca nunca sai do seu dispositivo — o que importa, já que normalmente você está colocando marca d'água justamente porque não quer a imagem circulando livremente.",
      ],
    },
  ],

  howToTitle: "Como colocar marca d'água em uma foto",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Crie a marca d'água", description: "Digite um texto ou envie um logo e ajuste posição, tamanho, opacidade e rotação com a prévia ao vivo." },
    { title: "Aplique e baixe", description: "Clique em Aplicar marca d'água — uma imagem é baixada direto; várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "title", title: "Texto ou logo", description: "Carimbe um texto personalizado — com fonte, cor e contorno — ou sobreponha o seu próprio logo em PNG transparente." },
    { icon: "grid_view", title: "Controle total da posição", description: "Escolha qualquer uma das nove posições, ajuste o tamanho, a opacidade e a rotação, e veja tudo atualizar ao vivo antes de exportar." },
    { icon: "lock", title: "Privado e em lote", description: "Aplique a mesma marca d'água a um lote inteiro de uma vez, tudo no seu navegador — as imagens nunca são enviadas." },
  ],

  faqs: [
    { q: "Posso colocar o meu logo como marca d'água?", a: "Sim. Mude para \"Logo\", envie um PNG (transparente funciona melhor) e ajuste o tamanho, a posição e a opacidade." },
    { q: "Posso colocar marca d'água em muitas imagens de uma vez?", a: "Sim. A mesma marca d'água é aplicada a todas as imagens que você adicionar, e elas são baixadas juntas em um ZIP." },
    { q: "A marca d'água vai ficar legível em qualquer imagem?", a: "Ative o contorno do texto para ter legibilidade em fundos carregados, e ajuste a opacidade e a cor como preferir." },
    { q: "Minhas imagens originais são alteradas?", a: "Não. Os originais continuam intactos; a ferramenta gera cópias novas com marca d'água no seu navegador." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro, sem marca d'água nossa, e cada imagem é processada no seu próprio navegador." },
    { q: "Onde colocar a marca d'água?", a: "Uma única marca no canto é a menos invasiva e a mais fácil de recortar. Uma marca repetida ou na diagonal pelo meio é muito mais difícil de remover, mas compete com a foto. Escolha de acordo com o risco: prévias de portfólio e provas justificam a versão invasiva; o trabalho entregue ao cliente normalmente não." },
    { q: "Qual opacidade funciona melhor?", a: "Entre 30% e 50% para a maioria das imagens. Baixa o bastante para a foto continuar legível, alta o bastante para sobreviver a um print. Abaixo de uns 20% a marca pode sumir por completo numa área clara ou carregada, o que acaba com o propósito." },
    { q: "Dá para remover uma marca d'água?", a: "Uma pessoa determinada, com um programa de edição, consegue remover ou reduzir quase qualquer marca d'água, e o preenchimento com IA facilitou isso. A marca d'água desencoraja a cópia casual e afirma a autoria; não é proteção contra cópia. Marcas que encostam no assunto são bem mais difíceis de remover do que as que ficam num fundo vazio." },
    { q: "Uso texto ou logo?", a: "Texto é mais rápido e fica nítido em qualquer tamanho — um nome, um @ ou um site muitas vezes basta. Um logo traz reconhecimento de marca e parece mais acabado. Se usar logo, um PNG transparente é essencial; um logo em JPG leva junto o próprio retângulo branco." },
    { q: "A marca d'água prejudica a qualidade da imagem?", a: "A marca é desenhada sobre a imagem, então nada é degradado além disso. Se você exportar em JPG, a recodificação custa um pouco de qualidade, como sempre; exporte em PNG para evitar. De qualquer forma, guarde um original sem marca — a marca não sai da sua cópia depois." },
    { q: "Posso colocar a mesma marca d'água em um lote inteiro?", a: "Sim, e é o caso normal. Defina o texto ou logo, a posição e a opacidade uma vez e aplique em todos os arquivos; eles voltam em um único ZIP. A posição é relativa, então imagens na vertical e na horizontal misturadas recebem a marca no canto certo." },
    { q: "Como colocar meu @ do Instagram nas fotos?", a: "Escolha \"Texto\", digite o seu @, ative o contorno para ele aparecer em qualquer fundo e coloque em um canto com opacidade entre 40% e 60%. Aplique no lote inteiro e todas as fotos saem com a mesma assinatura." },
  ],

  security:
    "Suas imagens continuam privadas. A marca d'água é aplicada inteira no seu navegador com canvas HTML — nada é enviado a um servidor. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.8", count: "564" },

  ui: {
    // WatermarkTool.tsx
    "Couldn't read that logo image.": "Não foi possível ler essa imagem de logo.",
    "Upload a logo image first.": "Envie uma imagem de logo primeiro.",
    "Watermarked 1 image.": "Marca d'água aplicada em 1 imagem.",
    "Watermarked {n} images.": "Marca d'água aplicada em {n} imagens.",
    "Watermarking failed.": "Falha ao aplicar a marca d'água.",
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "done": "pronta",
    "Live preview of": "Prévia ao vivo de",
    "— the same watermark applies to all {n} images.": "— a mesma marca d'água vale para as {n} imagens.",
    "Clear images": "Remover imagens",
    "Files": "Arquivos",
    "Watermark settings": "Configurações da marca d'água",
    "Watermark Settings": "Configurações da marca d'água",
    "Applying…": "Aplicando…",
    "Watermark {n} images": "Aplicar em {n} imagens",
    "Watermark & download": "Aplicar marca d'água e baixar",
    "Text": "Texto",
    "Logo": "Logo", // i18n-same
    "Watermark text": "Texto da marca d'água",
    "Font": "Fonte",
    "Size": "Tamanho",
    "Bold": "Negrito",
    "Text color": "Cor do texto",
    "Outline (for legibility)": "Contorno (para dar leitura)",
    "Outline color": "Cor do contorno",
    "Change logo": "Trocar logo",
    "Upload logo (PNG)": "Enviar logo (PNG)",
    "Logo size": "Tamanho do logo",
    "Opacity": "Opacidade",
    "Rotation": "Rotação",
    "Position": "Posição",
    "JPG background": "Fundo do JPG",
    // POSITION_LABELS / FONTS / FORMATS (module scope, §4.2)
    "Top left": "Superior esquerda",
    "Top center": "Superior central",
    "Top right": "Superior direita",
    "Middle left": "Meio à esquerda",
    "Center": "Centro",
    "Middle right": "Meio à direita",
    "Bottom left": "Inferior esquerda",
    "Bottom center": "Inferior central",
    "Bottom right": "Inferior direita",
    "Sans (Inter)": "Sem serifa (Inter)",
    "Serif (Georgia)": "Com serifa (Georgia)",
    "Impact": "Impact", // i18n-same
    "Monospace": "Monoespaçada",
    "Same as original": "Igual ao original",
  },
};

export default content;
