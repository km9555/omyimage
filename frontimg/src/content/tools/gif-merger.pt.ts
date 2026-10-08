import type { ToolPageContent } from "@/content/tools/types";

/** Portuguese copy for /pt/juntar-gif. */
const content: ToolPageContent = {
  toolId: "gif-merger",
  locale: "pt",
  name: "Juntar GIFs",
  tagline:
    "Junte vários GIFs animados em um só: coloque-os em ordem e eles tocam um depois do outro, cada quadro com a sua duração. Grátis, no navegador.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Juntar GIFs Online Grátis — Unir Vários GIFs em Um | oMyImage",
  metaDescription:
    "Junte GIFs animados online e grátis: coloque vários GIFs em ordem e una-os num GIF que toca um depois do outro. No navegador, sem upload.",

  intro:
    "Às vezes um GIF só não basta: uma reação precisa da continuação, um tutorial vem em três trechos curtos, ou um antes e depois funciona melhor como uma animação só. O Juntar GIFs do oMyImage une tudo. Adicione dois ou mais GIFs, coloque na ordem que quiser, escolha como GIFs de tamanhos diferentes devem se encaixar e junte. O resultado toca cada GIF na sua vez, mantém a duração de cada quadro e repete como uma animação única.",

  sections: [
    {
      heading: "Ordem e tempo",
      id: "order",
      body: [
        "Os GIFs tocam do topo da lista para baixo. Use as setas ao lado de cada GIF para subir ou descer, o x para remover e Adicionar GIFs para incluir mais. A lista mostra o tamanho, o número de quadros e a duração de cada GIF, para você planejar a sequência.",
        "Cada quadro mantém a sua duração, então cada parte toca na velocidade original, com as pausas. O GIF final repete como um todo: depois que o último GIF termina, o primeiro começa de novo.",
      ],
    },
    {
      heading: "GIFs de tamanhos diferentes",
      id: "sizes",
      body: [
        "Um GIF tem um tamanho só para todos os quadros, então o GIF unido também precisa de um. Escolha o tamanho do primeiro GIF, do maior ou do menor. GIFs que já têm esse tamanho são copiados pixel a pixel; os outros são escalados para caber.",
        "Encaixar mantém cada quadro inteiro e acrescenta bordas onde os formatos são diferentes — transparentes ou da cor que você escolher. Preencher e cortar escala cada quadro para cobrir toda a saída e corta o que sobra, então não há bordas, mas as pontas dos GIFs de formato diferente se perdem.",
      ],
    },
    {
      heading: "Cores e tamanho do arquivo",
      id: "colours",
      body: [
        "Um GIF só pode usar 256 cores por vez. Quando os GIFs que você junta usam poucas cores em comum e têm o mesmo tamanho, essas cores são mantidas exatamente. Caso contrário, uma paleta de 256 cores é escolhida a partir de todos eles; GIFs com cores muito diferentes, como um desenho e um trecho de vídeo, podem perder um pouco de detalhe de cor.",
        "O arquivo final fica mais ou menos do tamanho da soma dos GIFs. Se ficar grande demais para onde vai, passe-o depois pelo Comprimir GIF ou pelo Redimensionar GIF.",
      ],
    },
    {
      heading: "Ideias",
      id: "ideas",
      body: [
        "Transforme três gravações de tela curtas num tutorial passo a passo. Encadeie um GIF de pergunta e a resposta engraçada. Coloque um antes e um depois na mesma animação. Junte de novo, numa ordem nova, as partes de um GIF longo que você dividiu com o Cortar GIF. Faça uma sequência com os melhores momentos de vários GIFs de reação.",
        "A ferramenta junta GIFs no tempo, um depois do outro. Para aparar cada parte antes, use o Cortar GIF; para mudar o ritmo de uma parte, use o Alterar velocidade do GIF antes de juntar.",
      ],
    },
    {
      heading: "Loops e bumerangues",
      id: "loops",
      body: [
        "O GIF unido repete sem parar como uma animação só, mesmo que uma das partes estivesse configurada para tocar uma vez. Isso permite um truque simples: junte um GIF com uma cópia invertida dele mesmo, feita no Inverter GIF, e ele toca para a frente e depois para trás. Juntar o mesmo GIF duas vezes dobra a duração sem mudar a velocidade — útil quando um site exige uma duração mínima.",
      ],
    },
    {
      heading: "Privacidade",
      id: "privacy",
      body: [
        "Cada GIF é lido e o GIF unido é gravado inteiramente no seu navegador. Nada é enviado, e nada fica guardado depois que você fecha a página.",
      ],
    },
  ],

  howToTitle: "Como juntar GIFs",
  steps: [
    { title: "Adicione os GIFs", description: "Selecione dois ou mais GIFs animados do computador ou do celular." },
    { title: "Defina a ordem", description: "Suba ou desça os GIFs e escolha o tamanho e como os outros tamanhos se encaixam." },
    { title: "Junte e baixe", description: "Clique em Juntar GIFs, veja o resultado e baixe." },
  ],

  features: [
    { icon: "layers", title: "Um depois do outro", description: "Cada GIF toca na sua vez, cada quadro com a sua duração." },
    { icon: "swap_vert", title: "Qualquer ordem", description: "Reordene, adicione ou remova GIFs antes de juntar." },
    { icon: "lock", title: "Sem upload", description: "Juntados inteiramente no seu navegador." },
  ],

  faqs: [
    { q: "Como juntar vários GIFs em um?", a: "Adicione dois ou mais GIFs, coloque em ordem e clique em Juntar GIFs. Eles tocam um depois do outro no resultado." },
    { q: "Dá para mudar a ordem?", a: "Sim. Use as setas para cima e para baixo ao lado de cada GIF." },
    { q: "Os GIFs mantêm a velocidade?", a: "Sim. Cada quadro mantém a duração original." },
    { q: "E se os GIFs tiverem tamanhos diferentes?", a: "Escolha o tamanho final e depois Encaixar, para manter os quadros inteiros com bordas, ou Preencher e cortar, para evitar bordas." },
    { q: "As bordas podem ser transparentes?", a: "Sim, por padrão. Você também pode escolher uma cor." },
    { q: "As cores mudam?", a: "Não quando os GIFs têm poucas cores em comum. GIFs muito diferentes dividem uma paleta de 256 cores, o que pode suavizar um pouco as cores." },
    { q: "De que tamanho fica o GIF unido?", a: "Mais ou menos a soma dos tamanhos dos GIFs. O Comprimir GIF pode reduzi-lo depois." },
    { q: "Dá para pôr GIFs lado a lado?", a: "Não — esta ferramenta junta GIFs no tempo, um depois do outro." },
    { q: "Quantos GIFs posso juntar?", a: "Quantos a memória do seu aparelho permitir; algumas dezenas de GIFs curtos não são problema." },
    { q: "Meus GIFs são enviados para algum lugar?", a: "Não. Tudo acontece no seu navegador." },
    { q: "Funciona no celular?", a: "Sim, no navegador do celular." },
    { q: "É grátis?", a: "Sim. Sem conta, sem marca d'água e sem limite." },
    { q: "O GIF unido repete?", a: "Sim. Ele repete sem parar como uma animação só." },
  ],

  security:
    "Seus GIFs são juntados inteiramente no navegador. Nada é enviado, guardado ou rastreado.",

  ui: {
    // GifMergerTool.tsx
    "Select GIFs": "Selecionar GIFs",
    "or drop two or more GIFs here": "ou solte dois ou mais GIFs aqui",
    "Please select GIF files.": "Selecione arquivos GIF.",
    "Could not read this image.": "Não foi possível ler esta imagem.",
    "Add GIFs": "Adicionar GIFs",
    "Clear all": "Limpar tudo",
    "Move up": "Subir",
    "Move down": "Descer",
    "Add at least two GIFs to merge them.": "Adicione pelo menos dois GIFs para juntar.",
    "Merge settings": "Configurações da junção",
    "Merge GIFs": "Juntar GIFs",
    "Download GIF": "Baixar GIF",
    "Saving…": "Salvando…",
    "Working… {p}%": "Processando… {p}%",
    "Output: {w} × {h} px": "Saída: {w} × {h} px",
    "Size": "Tamanho",
    "First GIF": "Primeiro GIF",
    "Largest": "Maior",
    "Smallest": "Menor",
    "GIFs of another size": "GIFs de outro tamanho",
    "Fit inside": "Encaixar",
    "Fill and crop": "Preencher e cortar",
    "The whole frame stays visible, with borders where the shapes differ.": "O quadro inteiro fica visível, com bordas onde os formatos são diferentes.",
    "The frame fills the output; edges that stick out are cropped.": "O quadro preenche a saída; as pontas que sobram são cortadas.",
    "Transparent background": "Fundo transparente",
    "Background colour": "Cor do fundo",
    "The GIFs play in the order of the list, each frame with its own timing.": "Os GIFs tocam na ordem da lista, cada quadro com a sua duração.",
    "Your files are processed in your browser and never uploaded.": "Seus arquivos são processados no navegador e nunca são enviados.",
    "{n} frames": "{n} quadros",
    "{s} s": "{s} s", // i18n-same
  },
};

export default content;
