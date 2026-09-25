import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/remover-exif.
 *
 * Head term "remover EXIF" / "remover metadados da foto" — the technical term
 * is what people type here; "tirar localização da foto", "remover GPS da
 * imagem" and "limpar dados da foto" live in aliases.ts and carry the intent
 * that actually brings Brazilians to this page (selling on marketplaces with
 * photos taken at home).
 */
const content: ToolPageContent = {
  toolId: "remove-exif",
  locale: "pt",
  name: "Remover EXIF da imagem",
  tagline:
    "Remova os dados EXIF e os metadados — inclusive a localização GPS — das suas imagens antes de compartilhar. Em lote, grátis, rápido e 100% privado no seu navegador.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "Remover EXIF e metadados da foto online grátis — tirar GPS | oMyImage",
  metaDescription:
    "Remova EXIF e metadados de fotos online e grátis: apague localização GPS, modelo da câmera e data antes de compartilhar. Em lote e tudo no seu navegador.",

  intro:
    "Remover o EXIF protege a sua privacidade antes de compartilhar uma foto. A ferramenta Remover EXIF do oMyImage apaga os metadados escondidos nas suas imagens — localização GPS, modelo da câmera e da lente, software e datas — recodificando os arquivos direto no seu navegador. Limpe uma imagem ou um lote inteiro e baixe na hora. Nada é enviado, então suas fotos e os dados delas continuam privados.",

  sections: [
    {
      heading: "O que as suas fotos estão carregando",
      id: "what",
      body: [
        "Toda foto tirada por um celular ou por uma câmera chega com um bloco de metadados junto. O padrão EXIF cobre os campos técnicos — velocidade do obturador, abertura, ISO, distância focal, modelo da câmera —, que são úteis e inofensivos. O que vem ao lado deles é a parte que merece atenção.",
        "As coordenadas de GPS são o ponto sério. Se a localização estava ligada, o arquivo registra onde a foto foi tirada com precisão de poucos metros, junto com a data e a hora exatas. Uma foto tirada na sua sala carrega o endereço da sua casa de um jeito que qualquer software lê na hora.",
        "E tem mais: números de série que ligam fotos diferentes à mesma câmera, campos de autor e direitos autorais que algumas câmeras preenchem sozinhas, histórico de edição de certos programas e, em alguns aparelhos, uma miniatura da imagem original — que de vez em quando sobrevive a um recorte e mostra justamente o que você cortou.",
      ],
    },
    {
      heading: "Onde o risco realmente está",
      id: "risk",
      body: [
        "As grandes redes sociais removem os metadados no envio, então uma foto publicada num feed público costuma estar limpa. Isso cria uma falsa sensação de segurança, porque os lugares onde as fotos mais vazam localização são justamente os que ninguém lembra.",
        "Mensagens diretas e apps de conversa muitas vezes encaminham o arquivo original. O mesmo vale para anexos de e-mail, links de armazenamento na nuvem, uploads em fóruns, anúncios em marketplaces, imagens mandadas para uma gráfica e qualquer coisa hospedada no seu próprio site. Vender um móvel na OLX com fotos tiradas dentro de casa é o caso clássico: o anúncio é anônimo e o arquivo não é.",
        "O outro caminho esquecido é o profissional. Fotos entregues a um cliente, a um jornalista, a uma seguradora ou a um processo judicial carregam o que carregam, e quem recebe consegue ler, com ou sem a sua intenção.",
      ],
    },
    {
      heading: "A orientação continua certa",
      id: "orientation",
      body: [
        "Um campo do EXIF faz um trabalho de verdade: a tag de orientação. O sensor do celular é fixo, então, quando você gira o aparelho, a imagem é gravada deitada e uma tag registra para que lado ela deve ser exibida.",
        "Muitos removedores de metadados jogam essa instrução fora junto com o resto, e uma foto que aparecia certa em todo lugar de repente aparece deitada. Nada corrompeu — os pixels sempre estiveram deitados, e o bilhete que explicava isso foi removido.",
        "Esta ferramenta evita isso: a orientação da tag é aplicada aos pixels primeiro, e só depois os metadados são descartados. O resultado fica guardado do jeito certo e não precisa de instrução nenhuma, então aparece em pé em qualquer lugar.",
      ],
    },
    {
      heading: "Como a remoção funciona aqui",
      id: "how",
      body: [
        "A imagem é decodificada num canvas e recodificada a partir desses pixels. O canvas não tem nenhum conceito de metadado, então nada passa para o outro lado — a saída contém a figura e mais nada. Isso é completo por construção, e não por manter uma lista de campos a apagar.",
        "Tudo acontece dentro do seu navegador, o que importa muito dado o objetivo. Enviar uma foto para um servidor só para remover a localização dela anularia o exercício; aqui o arquivo nunca sai do seu aparelho, e não existe cópia nenhuma em lugar nenhum guardando as coordenadas que você queria apagar.",
        "Lotes são tratados do mesmo jeito e voltam em um único ZIP, que é o caso normal quando se prepara um conjunto de fotos de anúncio ou se limpa uma pasta antes de compartilhar.",
      ],
    },
  ],

  howToTitle: "Como remover os dados EXIF de uma imagem",
  steps: [
    { title: "Envie", description: "Selecione uma ou várias imagens, ou arraste e solte na área de trabalho." },
    { title: "Escolha a saída", description: "Mantenha o formato original ou converta, e ajuste a qualidade para JPG e WEBP." },
    { title: "Limpe e baixe", description: "Clique em Remover metadados e baixar — uma imagem vem direto, várias chegam juntas em um ZIP." },
  ],

  features: [
    { icon: "shield", title: "Apaga GPS e dados da câmera", description: "Remove EXIF, localização GPS, câmera, lente e datas recodificando completamente os pixels." },
    { icon: "burst_mode", title: "Limpeza em lote", description: "Limpe um lote inteiro de imagens JPG, PNG ou WEBP de uma vez e baixe tudo em um ZIP." },
    { icon: "lock", title: "100% privado", description: "Tudo roda no seu navegador — suas imagens nunca são enviadas a um servidor." },
  ],

  faqs: [
    { q: "Quais metadados são removidos?", a: "Todos os dados EXIF, IPTC e XMP gravados, incluindo localização GPS, modelo da câmera e da lente e data da captura — a saída fica só com os pixels." },
    { q: "Isso reduz a qualidade da imagem?", a: "A imagem é recodificada, então ajuste a qualidade para 100% se quiser um resultado praticamente idêntico. O padrão de 95% é um equilíbrio seguro." },
    { q: "Posso limpar várias imagens de uma vez?", a: "Sim. Adicione quantas quiser — uma imagem é baixada direto e várias chegam juntas em um ZIP." },
    { q: "É grátis e privado?", a: "Sim. Sem cadastro e sem marca d'água, e todas as imagens são processadas localmente no seu navegador." },
    { q: "O que exatamente fica guardado no EXIF?", a: "Muito mais do que a maioria imagina: coordenadas de GPS com precisão de poucos metros, a data e a hora exatas, o modelo e o número de série da câmera ou do celular, lente e configurações de exposição e, em alguns aparelhos, o nome do dono, o campo de direitos autorais e uma miniatura da imagem original." },
    { q: "As redes sociais removem o EXIF automaticamente?", a: "As grandes geralmente removem no envio, mas não conte com isso. Mensagens diretas, links de nuvem, anexos de e-mail, fóruns, anúncios em marketplaces e sites pessoais costumam repassar o arquivo intacto — e são exatamente os lugares onde as pessoas compartilham fotos de coisas que estão no endereço delas." },
    { q: "Remover o EXIF muda a aparência da foto?", a: "Não na orientação. A tag de orientação é aplicada aos pixels primeiro e os metadados são descartados depois, então uma foto que aparecia em pé continua em pé. A única outra mudança é a nova codificação, que o ajuste de qualidade controla." },
    { q: "Isso remove marca d'água escondida ou código de rastreamento?", a: "Não. Ele limpa os campos de metadados padrão. Marcas esteganográficas gravadas nos próprios pixels são outra coisa e sobrevivem à remoção de metadados — na verdade sobreviveriam à maioria das edições." },
    { q: "Dá para recuperar os metadados depois?", a: "Do arquivo limpo, não. Guarde o original se a data ou o local da captura importarem para você — para organizar uma biblioteca de fotos, para documentação de seguro ou simplesmente para lembrar onde a foto foi tirada." },
    { q: "Como conferir antes o que a minha foto contém?", a: "Use a ferramenta Ver metadados da imagem. Ela lê todas as tags que o arquivo carrega, inclusive as coordenadas de GPS num mapa, inteiramente no seu navegador. Olhar antes de limpar quase sempre vale o passo a mais." },
    { q: "Preciso remover o EXIF para vender na OLX ou no Marketplace?", a: "É recomendável. O anúncio não mostra o seu endereço, mas uma foto tirada dentro de casa com a localização ligada mostra — e quem baixar a imagem consegue ler isso. Limpe as fotos aqui antes de publicar." },
  ],

  security:
    "Suas imagens continuam privadas. A remoção dos metadados acontece inteiramente no seu navegador — nada é enviado a um servidor. Sem armazenamento e sem rastrear seus arquivos.",

  rating: { value: "4.9", count: "377" },

  ui: {
    // RemoveExifTool.tsx — module-scope FORMATS
    "Same as original": "Igual ao original",
    // RemoveExifTool.tsx
    "Please select image files.": "Selecione arquivos de imagem.",
    "Removed metadata from 1 image.": "Metadados removidos de 1 imagem.",
    "Removed metadata from {n} images.": "Metadados removidos de {n} imagens.",
    "Couldn't process the images.": "Não foi possível processar as imagens.",
    "or drop JPG, PNG or WEBP images here": "ou solte imagens JPG, PNG ou WEBP aqui",
    "metadata removed": "metadados removidos",
    "Clear files": "Limpar arquivos",
    "Metadata settings": "Configurações de metadados",
    "Clean": "Limpar",
    "Cleaning…": "Limpando…",
    "Output Settings": "Configurações de saída",
    "Strips EXIF, GPS location and camera data by re-encoding the pixels — all in your browser.":
      "Remove EXIF, localização GPS e dados da câmera recodificando os pixels — tudo no seu navegador.",
    "Remove metadata from {n}": "Remover metadados de {n}",
    "Remove metadata & download": "Remover metadados e baixar",
    "Format": "Formato",
    "JPG background": "Fundo do JPG",
  },
};

export default content;
