import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/girar-imagem.
 *
 * Head term "girar imagem" — Brazilian. iLoveIMG /pt uses the European
 * "rodar-imagem", which is exactly the vocabulary slip conversion.md §5 pins
 * against; "rodar imagem", "virar foto" and "espelhar imagem" live in
 * aliases.ts. "foto de lado" / "foto deitada" is how Brazilians describe the
 * EXIF problem, so the copy uses it.
 */
const content: ToolPageContent = {
  toolId: "rotate-image",
  locale: "pt",
  name: "Girar imagem",
  tagline:
    "Gire e espelhe imagens JPG, PNG, WEBP e GIF online — de 90° em 90° ou em qualquer ângulo, com prévia ao vivo e em lote. Grátis, rápido e 100% privado no seu navegador.",
  category: { id: "optimize", label: "Otimizar" },

  metaTitle: "Girar imagem online grátis — rotacionar e espelhar fotos | oMyImage",
  metaDescription:
    "Gire imagens online e grátis: rotacione 90°, 180° ou qualquer ângulo, espelhe e endireite fotos de lado. JPG, PNG, WEBP e GIF, em lote, no navegador e sem cadastro.",

  intro:
    "Girar imagem resolve na hora aquela foto que aparece de lado ou um gráfico que precisa de um ângulo exato. A ferramenta Girar imagem do oMyImage gira de 90° em 90°, espelha ou aplica qualquer ângulo personalizado com prévia ao vivo — uma imagem ou um lote inteiro de uma vez. Escolha o formato de saída e o fundo, e baixe. Tudo acontece no seu navegador, então suas imagens continuam privadas.",

  sections: [
    {
      heading: "Por que a foto aparece de lado: a orientação EXIF",
      id: "exif",
      body: [
        "O motivo mais comum de uma foto aparecer girada não é que ela foi tirada errado — é que a câmera salvou de lado de propósito. O sensor do celular tem uma orientação fixa, então quando você vira o aparelho o sensor não vira junto. Em vez de reescrever os pixels, a câmera grava uma etiqueta EXIF de orientação dizendo como a imagem deve ser girada antes de ser exibida.",
        "Isso funciona perfeitamente até a imagem encontrar um programa que ignora essa etiqueta. Sistemas de site antigos, alguns formulários de envio, certos programas de e-mail e muito software feito sob medida leem os pixels crus e mostram a foto deitada. O mais frustrante é que ela aparece certa na galeria do celular e no computador, então o problema só surge depois de publicar.",
        "Girar com esta ferramenta grava a orientação nos próprios pixels e limpa a etiqueta, o que acaba com a ambiguidade. Todo visualizador passa a mostrar a mesma coisa, porque não sobra nada para interpretar.",
      ],
    },
    {
      heading: "Giros em ângulo reto não custam nada",
      id: "lossless",
      body: [
        "Girar uma imagem em 90, 180 ou 270 graus leva cada pixel para uma posição nova sem mudar o valor dele. Não há interpolação, então não há amolecimento nem perda de qualidade — a imagem girada fica exatamente tão nítida quanto a original. O mesmo vale para espelhar na horizontal e na vertical.",
        "Ângulos quebrados são diferentes. Girar 3 graus faz a maioria dos pixels de saída cair entre os pixels de entrada, então os valores precisam ser interpolados a partir dos vizinhos. O efeito é bem pequeno em correções leves, mas existe, e se acumula se você girar o mesmo arquivo várias vezes. Endireite uma vez, a partir do original, em vez de ir ajustando de grau em grau em várias sessões.",
      ],
    },
    {
      heading: "Endireitando um horizonte torto",
      id: "straighten",
      body: [
        "Um horizonte inclinado é aquele defeito que o olho percebe sem saber dizer o que é, e normalmente está só um ou dois graus fora. Correções pequenas fazem uma diferença enorme em como a foto parece cuidada.",
        "Como girar em ângulo inclina o retângulo dentro do quadro, os cantos deixam de encostar nas bordas e sobram espaços triangulares. Eles são preenchidos com a cor de fundo que você escolher. Na prática, a maioria das pessoas recorta um pouco depois para tirá-los, o que custa um pedaço do quadro — então, se você sabe que a foto ficou torta, vale deixar uma folga em volta do assunto na hora de fotografar.",
      ],
    },
    {
      heading: "Girando um lote",
      id: "batch",
      body: [
        "Documentos escaneados que entraram de cabeça para baixo no alimentador, uma sequência de fotos tiradas com o celular deitado, um conjunto de fotos de produto que precisam do mesmo quarto de volta — esses são os casos normais para aplicar o mesmo giro em vários arquivos de uma vez.",
        "O giro e o espelhamento que você escolher valem igualmente para todos os arquivos do lote. Quando cada imagem precisa de uma correção diferente, separe-as primeiro pela direção — as que estão viradas para a esquerda num lote, as viradas para a direita em outro — e processe cada grupo de uma vez. Tudo roda no seu navegador e volta em um único ZIP.",
      ],
    },
  ],

  howToTitle: "Como girar uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Gire ou espelhe", description: "Use os botões de 90°, espelhe na horizontal ou na vertical, ou defina qualquer ângulo no controle deslizante." },
    { title: "Gire e baixe", description: "Escolha o formato de saída e clique em Girar — uma imagem é baixada direto; várias chegam em um ZIP." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Girar e espelhar", description: "Gire para a esquerda ou para a direita de 90° em 90°, espelhe na horizontal ou na vertical, ou escolha qualquer ângulo de 0 a 359°." },
    { icon: "burst_mode", title: "Giro em lote", description: "Aplique o mesmo giro a várias imagens de uma vez e baixe todas em um único ZIP." },
    { icon: "palette", title: "Formato e fundo", description: "Exporte em JPG, PNG ou WEBP e escolha um fundo transparente, branco, preto ou personalizado para os cantos em ângulo." },
  ],

  faqs: [
    { q: "Posso girar em um ângulo personalizado?", a: "Sim. Use os botões de 90° para giros rápidos, ou o controle de ângulo para definir qualquer valor de 0 a 359 graus." },
    { q: "Para que serve a opção de fundo?", a: "Quando você gira em um ângulo que não é múltiplo de 90°, os cantos ficam vazios. O fundo preenche esses cantos — transparente (PNG/WEBP), branco, preto ou uma cor personalizada." },
    { q: "Posso girar muitas imagens de uma vez?", a: "Sim. Adicione quantas quiser; o mesmo giro e espelhamento valem para todas, e vários arquivos são baixados juntos em um ZIP." },
    { q: "Girar diminui a qualidade?", a: "Giros de 90° e 180° são sem perdas. Em outros ângulos, ou ao exportar em JPG, você pode definir a qualidade. PNG e WEBP continuam nítidos." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro nem marca d'água, e cada imagem é girada no seu próprio navegador." },
    { q: "Por que minhas fotos aparecem de lado em alguns aparelhos e em outros não?", a: "Porque a câmera guardou a foto na orientação do sensor e adicionou uma etiqueta EXIF dizendo em que posição ela deve ser mostrada. Programas que leem a etiqueta mostram certo; os que ignoram mostram a imagem crua, deitada. Girar aqui grava a orientação correta nos pixels, então todos os visualizadores concordam." },
    { q: "E se cada foto precisar de um giro diferente?", a: "Um mesmo giro vale para todas as fotos do lote — não existe um modo automático foto a foto. Agrupe as fotos pelo lado para onde estão viradas, por exemplo todas as que precisam de um quarto de volta no sentido horário, e processe cada grupo separadamente." },
    { q: "Dá para girar em um ângulo qualquer?", a: "Sim. Endireitar um horizonte torto normalmente precisa de só um ou dois graus. Saiba que qualquer ângulo que não seja múltiplo de 90° deixa espaços triangulares nos cantos, preenchidos com a cor de fundo escolhida — a maioria das pessoas recorta um pouco depois para tirá-los." },
    { q: "Espelhar muda a qualidade da imagem?", a: "Não. Espelhar na horizontal e na vertical, assim como girar 90° e 180°, só reorganiza os pixels que já existem — nada é reamostrado, então o resultado tem exatamente a mesma qualidade do original." },
    { q: "Posso girar uma pasta inteira de uma vez?", a: "Sim. Adicione todos os arquivos da pasta e aplique o mesmo giro a todos; eles voltam em um único ZIP. Se precisarem de giros diferentes, separe-os em grupos antes." },
    { q: "Como desvirar uma foto tirada no celular?", a: "Envie a foto, clique uma vez no botão de +90° (ou -90°, dependendo do lado) e confira na prévia. Se ela estiver de cabeça para baixo, são dois cliques. Depois é só baixar — a nova orientação fica gravada nos pixels." },
  ],

  security:
    "Suas imagens continuam privadas. O giro acontece inteiro no seu navegador com canvas HTML — nada é enviado a um servidor. Nada fica armazenado e nenhum arquivo é rastreado.",

  rating: { value: "4.9", count: "596" },

  ui: {
    // RotateTool.tsx
    "Rotated 1 image.": "1 imagem girada.",
    "Rotated {n} images.": "{n} imagens giradas.",
    "Rotation failed.": "Falha ao girar.",
    "or drop JPG, PNG, WEBP or GIF images here": "ou solte imagens JPG, PNG, WEBP ou GIF aqui",
    "Rotated in your browser — your images never leave your device.":
      "Girado no seu navegador — suas imagens nunca saem do seu dispositivo.",
    "Rotate & flip": "Girar e espelhar",
    "Rotate": "Girar",
    "Rotating…": "Girando…",
    "Rotation preview": "Prévia do giro",
    "Preview of": "Prévia de",
    "— the same transform applies to all {n} images.": "— o mesmo giro vale para as {n} imagens.",
    "Transform Settings": "Configurações de giro",
    "90° steps straighten; the angle slider gives a custom tilt.":
      "Os passos de 90° endireitam; o controle de ângulo dá uma inclinação personalizada.",
    "Rotate {n} images": "Girar {n} imagens",
    "Rotate & download": "Girar e baixar",
    "Transform": "Transformar",
    "Flip horizontal": "Espelhar na horizontal",
    "Flip vertical": "Espelhar na vertical",
    "Flip H": "Espelhar H",
    "Flip V": "Espelhar V",
    "Angle": "Ângulo",
    "Format": "Formato",
    "Background (for angled corners)": "Fundo (para os cantos em ângulo)",
    // FORMATS (module scope, §4.2)
    "Same as original": "Igual ao original",
  },
};

export default content;
