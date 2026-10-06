import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/foto-de-perfil-whatsapp (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "whatsapp-dp-resizer",
  locale: "pt",
  name: "Foto de Perfil do WhatsApp",
  tagline:
    "Coloque a foto inteira no perfil do WhatsApp sem cortar — encaixada num quadrado com uma cor de fundo — ou corte para preencher. 500 × 500 px, grátis, no navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Foto de Perfil do WhatsApp sem Cortar — Foto Inteira, Grátis | oMyImage",
  metaDescription:
    "Coloque a foto inteira no perfil do WhatsApp: encaixe a imagem num quadrado sem cortar, com fundo da cor que quiser, ou corte para preencher. 500 × 500 px, grátis.",

  intro:
    "O WhatsApp só aceita fotos de perfil quadradas, então quando você escolhe uma foto larga de grupo ou uma foto de corpo inteiro ele obriga a cortar a maior parte. Esta ferramenta resolve ao contrário: ela encaixa a foto inteira dentro de um quadrado e preenche o espaço vazio com uma cor, para o WhatsApp não ter mais nada a cortar. Adicione a foto, escolha a Cor da margem e baixe uma imagem de 500 × 500 que entra inteira.",

  sections: [
    {
      heading: "Foto de perfil inteira, sem cortar",
      id: "no-crop",
      body: [
        "A ferramenta abre com Preencher com margem selecionado. A foto é reduzida até caber inteira no quadrado, e as faixas acima e abaixo — ou nas laterais — recebem a cor de preenchimento, branca por padrão. Quando aparece a caixa de corte do WhatsApp, ela já cobre a imagem toda, então é só tocar em Concluir sem perder ninguém na beirada da foto.",
        "Escolha uma cor que combine com a foto: branco ou preto são neutros, e uma cor tirada da própria foto muitas vezes fica mais natural que os dois. Troque para Recortar para preencher quando preferir um close que ocupe o círculo inteiro.",
      ],
    },
    {
      heading: "O círculo esconde os cantos",
      id: "circle",
      body: [
        "O WhatsApp mostra as fotos de perfil em círculo, tanto na lista de conversas quanto no perfil, então os cantos do quadrado nunca aparecem. Rostos e textos perto dos cantos são cortados; mantenha o importante no meio.",
        "Com uma foto completada, o círculo corta quase só o preenchimento, e é por isso que esse método funciona tão bem. Já uma foto de grupo muito larga vai aparecer pequena dentro do círculo — se os rostos ficarem minúsculos, recorte um pouco a foto antes, para as pessoas ocuparem mais espaço.",
      ],
    },
    {
      heading: "Que tamanho usar",
      id: "size",
      body: [
        "O WhatsApp não publica um tamanho oficial para a foto de perfil; ele recomprime o que você envia. 500 × 500 pixels é um tamanho muito usado que fica nítido no celular sem ser pesado à toa, e 192 × 192 costuma ser citado como o menor aceitável. Para um quadrado maior, mude largura e altura abaixo da predefinição, por exemplo para 1080 × 1080; os dois números precisam ser iguais para continuar quadrado.",
        "O mesmo tamanho serve para a foto de perfil do WhatsApp Business, em que um logotipo costuma ficar melhor completado com espaço branco em volta, para o círculo não cortar as letras.",
      ],
    },
    {
      heading: "Colocando como foto de perfil",
      id: "set",
      body: [
        "Salve a imagem baixada no celular, abra o WhatsApp, vá em Configurações e toque na sua foto, depois em Editar ou no ícone da câmera, e escolha a imagem na galeria. Como ela já é quadrada, a etapa de corte não muda nada. No computador, baixe lá e escolha pelo WhatsApp Web ou pelo aplicativo do mesmo jeito.",
      ],
    },
    {
      heading: "Fotos para grupos e status",
      id: "groups",
      body: [
        "Os ícones de grupo também são círculos, então o mesmo truque de completar mantém uma foto da turma inteira ou um logotipo intactos como imagem do grupo. Para um status, que é uma imagem alta de tela cheia, use a predefinição Status do WhatsApp (1080 × 1920) na lista de predefinições.",
      ],
    },
  ],

  howToTitle: "Como colocar a foto inteira no perfil do WhatsApp",
  steps: [
    { title: "Adicione a foto", description: "Selecione um JPG, PNG, WEBP, GIF ou BMP — de qualquer formato." },
    { title: "Escolha a cor de preenchimento", description: "Preencher com margem já vem ligado; escolha branco, preto ou qualquer cor para o espaço vazio." },
    { title: "Baixe e coloque", description: "Baixe a imagem quadrada e use como foto de perfil — sem precisar cortar." },
  ],

  features: [
    { icon: "crop_square", title: "Sem cortar", description: "A foto inteira cabe no quadrado, então o WhatsApp não tem o que cortar." },
    { icon: "palette", title: "Qualquer cor de fundo", description: "Preencha o espaço vazio com branco, preto ou uma cor que combine com a foto." },
    { icon: "lock", title: "Privado", description: "Sua foto é redimensionada no seu aparelho e nunca é enviada." },
  ],

  faqs: [
    { q: "Como colocar a foto inteira no perfil do WhatsApp sem cortar?", a: "Adicione aqui com Preencher com margem selecionado. A foto inteira é encaixada num quadrado com uma cor de fundo, então a etapa de corte do WhatsApp mantém tudo." },
    { q: "Qual o tamanho certo da foto de perfil do WhatsApp?", a: "O WhatsApp não tem tamanho oficial. 500 × 500 pixels é uma escolha comum e nítida; 192 × 192 costuma ser citado como mínimo." },
    { q: "Por que o WhatsApp corta minha foto?", a: "Ele só aceita imagens quadradas e as mostra em círculo. Uma foto larga ou alta precisa ser cortada, a não ser que você a complete até virar quadrado antes." },
    { q: "Posso escolher a cor do fundo?", a: "Pode. Branco é o padrão; escolha preto ou qualquer cor em Cor da margem." },
    { q: "Funciona para o WhatsApp Business?", a: "Funciona. A foto de perfil do Business também é um círculo; logotipos ficam melhores com espaço branco em volta." },
    { q: "Dá para fazer o ícone de um grupo?", a: "Dá. Ícones de grupo são círculos, então completar mantém visível a foto do grupo inteiro ou o logotipo." },
    { q: "O WhatsApp vai diminuir a qualidade?", a: "O WhatsApp comprime as fotos de perfil por conta própria. Partir de um quadrado nítido de 500 × 500 ou maior dá o melhor resultado depois disso." },
    { q: "Minha foto é enviada para algum lugar?", a: "Não. Ela é redimensionada no seu navegador; só você a coloca no WhatsApp." },
  ],

  security:
    "Sua foto é redimensionada inteiramente no seu navegador. Imagens muito grandes podem ser processadas no nosso servidor e apagadas na hora; nada fica guardado.",
};

export default content;
