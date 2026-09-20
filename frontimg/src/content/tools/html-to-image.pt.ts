import type { ToolPageContent } from "@/content/tools/types";

/**
 * Portuguese (Brazilian) copy for /pt/html-para-imagem.
 *
 * Head term "HTML para imagem" — the x-para-y pattern of the converter family;
 * "converter HTML em imagem", "print de site", "screenshot de página" and
 * "transformar site em imagem" live in aliases.ts. Brazilians say "print"
 * for a screen capture, so the body uses it where it reads naturally.
 *
 * Server-backed tool: the backend sentences it can surface live in the ui
 * block, the same as remove-background and upscale (conversion.md §6.2).
 */
const content: ToolPageContent = {
  toolId: "html-to-image",
  locale: "pt",
  name: "HTML para imagem",
  tagline:
    "Converta o endereço de uma página ou o seu próprio HTML em imagem online — escolha o tamanho da tela, o formato e a captura da página inteira. Com o Chromium headless de código aberto.",
  category: { id: "edit", label: "Editar e criar" },

  metaTitle: "HTML para imagem online grátis — print de site em PNG | oMyImage",
  metaDescription:
    "Converta HTML ou o endereço de um site em imagem online e grátis: escolha tamanho de tela, formato e captura da página inteira, e baixe em PNG ou JPG.",

  intro:
    "Converter HTML para imagem transforma uma página da web, ou um pedaço de código que você escreveu, numa imagem nítida. A ferramenta HTML para imagem do oMyImage renderiza um endereço ou o seu próprio HTML com o Chromium headless e devolve um PNG, JPG ou WEBP no tamanho exato que você escolher — útil para miniaturas, prévias e cards de redes sociais. A renderização roda no nosso servidor com o Puppeteer, de código aberto.",

  sections: [
    {
      heading: "Transformando código em imagem",
      id: "what",
      body: [
        "Um navegador sem janela carrega o seu HTML ou endereço, monta a página exatamente como um navegador normal faria — aplicando CSS, rodando scripts, baixando fontes da web — e depois captura o resultado como imagem. É um print tirado por um navegador que não tem janela.",
        "Essa diferença importa. Isto não é uma aproximação de como a página poderia ficar; é o mesmo motor de renderização produzindo o mesmo layout, e é por isso que CSS complexo, flexbox, grid e fontes da web saem certos, enquanto conversores de HTML para imagem mais simples distorcem tudo.",
        "A saída é um PNG, JPG ou WEBP comum, então ela pode ir a qualquer lugar em que uma imagem cabe — um card de rede social, um documento, uma apresentação ou um e-mail.",
      ],
    },
    {
      heading: "Cards de prévia para redes sociais",
      id: "og-images",
      body: [
        "O uso mais comum em produção é gerar imagens Open Graph — aquela figura que aparece quando um link é compartilhado numa rede social ou num app de conversa. Desenhar isso à mão para cada artigo não escala; montar um modelo em HTML e renderizar para imagem, sim.",
        "1200×630 pixels é o tamanho padrão e é tratado bem por praticamente todas as plataformas. Monte o card como um modelo HTML, com o título, o autor e a arte posicionados por CSS, e renderize uma imagem por artigo.",
        "Dois pontos práticos: mantenha o conteúdo importante bem longe das bordas, porque algumas plataformas cortam para a proporção delas, e use tipos grandes. Esses cards costumam ser vistos com uns duzentos pixels de largura num feed, então qualquer coisa abaixo de uns 32 pixels no original fica ilegível.",
      ],
    },
    {
      heading: "Por que a captura pode diferir da sua tela",
      id: "differences",
      body: [
        "O renderizador é um navegador limpo. Ele não tem extensões, não tem bloqueador de anúncios, não está logado em nada e não acessa as fontes instaladas na sua máquina. Uma página que parece de um jeito para você pode legitimamente sair diferente aqui — e normalmente a diferença é informativa: você está vendo o que um visitante anônimo de primeira viagem vê.",
        "O carregamento sob demanda é a causa mais comum de conteúdo faltando. Imagens e seções configuradas para carregar quando entram na tela podem não ter sido acionadas antes da captura, e dados que chegam de uma API lenta podem perder o momento por completo.",
        "Animações e transições ficam congeladas onde estavam. Se um elemento surge com um efeito de aparecer, a captura pode pegá-lo no meio do caminho — um bom motivo para desligar as animações no CSS que você renderiza, ou para desenhar o modelo como um layout estático desde o início. O campo de espera antes da captura existe justamente para isso.",
      ],
    },
    {
      heading: "Esta ferramenta roda no nosso servidor",
      id: "server",
      body: [
        "Quase tudo neste site funciona dentro da aba do seu navegador. Renderizar uma página da web não dá, porque exige um motor de navegador completo — que é exatamente o que o seu navegador já é, mas não algo que uma página possa comandar sobre conteúdo de terceiros de dentro de uma aba.",
        "Então o endereço ou o HTML que você fornece é enviado ao nosso servidor por uma conexão criptografada, renderizado lá num navegador sem janela, e a imagem volta para você. Nada é guardado depois.",
        "Vale saber, para conteúdo privado: como o endereço é acessado pelo nosso servidor, e não por você, qualquer coisa atrás de um login ou numa rede interna não é alcançável. Isso é uma limitação e também um motivo pelo qual esta ferramenta não consegue capturar por acidente algo que não deveria.",
      ],
    },
  ],

  howToTitle: "Como converter HTML em imagem",
  steps: [
    { title: "Informe o endereço ou o HTML", description: "Cole o endereço de uma página, ou mude para o modo HTML e cole o seu próprio código." },
    { title: "Escolha tamanho e formato", description: "Defina a largura e a altura da tela, o formato de saída e se quer capturar a página inteira." },
    { title: "Renderize e baixe", description: "Clique em Renderizar imagem e baixe o resultado em PNG, JPG ou WEBP." },
  ],

  features: [
    { icon: "link", title: "Endereço ou HTML puro", description: "Tire um print de qualquer página pública, ou renderize um trecho do seu próprio HTML e CSS como imagem." },
    { icon: "aspect_ratio", title: "Tela personalizada", description: "Defina a largura e a altura exatas e, se quiser, capture a página inteira com rolagem." },
    { icon: "verified_user", title: "Motor de código aberto", description: "Renderizado com Chromium headless via Puppeteer — gratuito, de código aberto e liberado para uso comercial." },
  ],

  faqs: [
    { q: "Posso tirar print de qualquer site?", a: "De qualquer endereço público. Páginas que bloqueiam robôs ou exigem login podem não renderizar por completo." },
    { q: "Posso renderizar o meu próprio HTML?", a: "Pode. Mude para o modo HTML e cole o código com CSS embutido para renderizar exatamente como você escreveu." },
    { q: "Em que formatos posso exportar?", a: "PNG (sem perdas), JPG ou WEBP. Você também pode capturar a altura inteira da página com rolagem." },
    { q: "Qual motor é usado?", a: "Chromium headless com a biblioteca de código aberto Puppeteer, rodando no nosso servidor." },
    { q: "É grátis?", a: "É — grátis, sem marca d'água e sem cadastro." },
    { q: "Para que isso serve na prática?", a: "Gerar cards de prévia para redes sociais, capturar uma página para documentação ou arquivo, produzir prints uniformes para um changelog, ver um modelo de e-mail como imagem e transformar um HTML que você escreveu numa figura que pode ser compartilhada onde HTML não é exibido." },
    { q: "Por que o resultado não é igual ao do meu navegador?", a: "Porque ele renderiza num navegador limpo, sem extensões, sem sessão logada e sem fontes locais além das padrão. Conteúdo atrás de login aparece como o visitante deslogado vê, e uma página que depende de uma fonte instalada só na sua máquina cai numa fonte substituta." },
    { q: "Dá para capturar uma página que exige login?", a: "Não. O renderizador não tem acesso aos seus cookies nem à sua sessão, então ele vê o que um visitante anônimo veria. Para páginas autenticadas, um print do próprio navegador é o caminho prático." },
    { q: "Por que falta conteúdo na captura?", a: "Normalmente por carregamento sob demanda. Imagens e seções que só carregam ao entrar na tela podem não ter aparecido antes da captura. Conteúdo que chega por uma API lenta pode ser perdido pelo mesmo motivo, e as animações ficam congeladas no quadro em que estavam. Aumente a espera antes da captura para dar tempo à página." },
    { q: "Em que tamanho devo renderizar?", a: "1200×630 é o padrão para cards de prévia e funciona na maioria das plataformas. 1280 ou 1440 de largura serve para prints de documentação. A captura da página inteira é a escolha certa para arquivar, mas páginas muito longas geram imagens muito altas." },
    { q: "Roda no meu navegador como as outras ferramentas?", a: "Não — esta precisa de um motor de navegador de verdade para montar a página, e isso não tem como ser entregue ao seu aparelho. O HTML ou o endereço é enviado ao nosso servidor, renderizado, e a imagem volta para você. Nada é guardado depois." },
    { q: "Dá para tirar print de uma página inteira, com rolagem?", a: "Dá. Marque \"Capturar a página inteira\" e o navegador rola até o fim e junta tudo numa imagem só. Se você quiser apenas um pedaço, use o campo de seletor CSS para capturar um elemento específico." },
  ],

  security:
    "A renderização roda no nosso servidor com o Chromium headless de código aberto. O resultado fica guardado só por pouco tempo, atrás de um link de download privado, e é excluído automaticamente em até uma hora. Nunca compartilhamos nem reutilizamos o seu conteúdo.",

  rating: { value: "4.7", count: "356" },

  ui: {
    // HtmlToImageTool.tsx — module-scope VIEWPORTS and FORMATS
    "Desktop — 1920 × 1080": "Computador — 1920 × 1080",
    "Laptop — 1440 × 900": "Notebook — 1440 × 900",
    "Standard — 1280 × 720": "Padrão — 1280 × 720",
    "Tablet — 768 × 1024": "Tablet — 768 × 1024", // i18n-same
    "Mobile — 390 × 844": "Celular — 390 × 844",
    "Custom size…": "Tamanho personalizado…",
    "PNG — lossless, supports transparency": "PNG — sem perdas, aceita transparência",
    "JPG — smallest for photos": "JPG — o menor para fotos",
    "WEBP — small + transparency": "WEBP — pequeno e com transparência",
    // HtmlToImageTool.tsx
    "Page {n}": "Página {n}",
    "Please choose .html files.": "Escolha arquivos .html.",
    "Added 1 page.": "1 página adicionada.",
    "Added {n} pages.": "{n} páginas adicionadas.",
    "Enter a valid URL (https://…).": "Digite um endereço válido (https://…).",
    "Add some HTML to at least one page.": "Escreva algum HTML em pelo menos uma página.",
    "Width and height must be at least 100px.": "A largura e a altura precisam ter pelo menos 100px.",
    "Rendered 1 image.": "1 imagem renderizada.",
    "Rendered {n} images.": "{n} imagens renderizadas.",
    "Rendering failed.": "Não foi possível renderizar.",
    "Web page URL": "Endereço da página",
    "Any public http(s) address. Private and local addresses are rejected by the server.":
      "Qualquer endereço http(s) público. Endereços privados e locais são recusados pelo servidor.",
    "1 page": "1 página",
    "{n} pages": "{n} páginas",
    "Import .html": "Importar .html",
    "Add page": "Adicionar página",
    "Remove {name}": "Remover {name}",
    "Page name": "Nome da página",
    "Used as the downloaded file name for this page's image.":
      "Usado como nome do arquivo baixado da imagem desta página.",
    "<!doctype html> …": "<!doctype html> …", // i18n-same
    "{n} characters · a full document or a fragment both work.":
      "{n} caracteres · funciona tanto com um documento inteiro quanto com um trecho.",
    "Rendering {done} of {total}…": "Renderizando {done} de {total}…",
    "Your rendered image will appear here.": "Sua imagem renderizada vai aparecer aqui.",
    "Capturing at": "Capturando em",
    "Clear": "Limpar",
    "Download {name}": "Baixar {name}",
    "Capture Settings": "Configurações de captura",
    "Rendering uses headless Chromium on our servers.":
      "A renderização usa o Chromium headless nos nossos servidores.",
    "Rendering…": "Renderizando…",
    "Render {n} pages": "Renderizar {n} páginas",
    "Render to image": "Renderizar imagem",
    "Viewport": "Tela",
    "Screen size": "Tamanho da tela",
    "The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths.":
      "A janela do navegador em que a página é montada. Sites responsivos mostram o layout de tablet ou de celular nessas larguras.",
    "Width (px)": "Largura (px)",
    "Height (px)": "Altura (px)",
    "Orientation": "Orientação",
    "Swaps the width and height of the chosen screen size.":
      "Troca a largura pela altura do tamanho de tela escolhido.",
    "Portrait": "Retrato",
    "Landscape": "Paisagem",
    "Resolution": "Resolução",
    "2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file.":
      "2× renderiza o dobro de pixels para um resultado nítido em telas retina — o mesmo layout, um arquivo maior.",
    "Capture full page": "Capturar a página inteira",
    "Scrolls to the bottom and stitches the whole document instead of just the visible window.":
      "Rola até o fim e junta o documento inteiro, em vez de só a parte visível.",
    "Capture one element (optional)": "Capturar um elemento (opcional)",
    "A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page.":
      "Um seletor CSS, por exemplo #pricing ou .hero. Só esse elemento é capturado, e isso tem prioridade sobre a página inteira.",
    "Output": "Saída",
    "Format": "Formato",
    "Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots.":
      "Mais alto guarda mais detalhe e gera um arquivo maior. De 80 a 90 é o ponto ideal para prints.",
    "Lower quality": "Diminuir a qualidade",
    "Higher quality": "Aumentar a qualidade",
    "Smaller file": "Arquivo menor",
    "Skips the page background so the image keeps an alpha channel.":
      "Ignora o fundo da página, então a imagem mantém o canal alfa.",
    "JPG has no alpha channel — switch to PNG or WEBP for transparency.":
      "O JPG não tem canal alfa — mude para PNG ou WEBP para ter transparência.",
    "Transparent background": "Fundo transparente",
    "Padding (px)": "Margem interna (px)",
    "Breathing room added around the page content before the shot is taken.":
      "Um respiro acrescentado em volta do conteúdo da página antes da captura.",
    "Advanced": "Avançado",
    "Wait before capture (ms)": "Esperar antes de capturar (ms)",
    "Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000.":
      "Tempo extra depois que a página carrega — útil para animações, fontes ou imagens que carregam sob demanda. Máximo de 10000.",
    "Emulate dark mode": "Simular modo escuro",
    "Reports prefers-color-scheme: dark, so sites with a dark theme render it.":
      "Informa prefers-color-scheme: dark, então sites com tema escuro aparecem nele.",
    "Hide cookie banners": "Ocultar avisos de cookies",
    "Hides the common consent overlays that would otherwise cover the shot.":
      "Esconde os avisos de consentimento mais comuns, que cobririam a captura.",
    "Only applies when capturing a URL.": "Só vale quando a captura é de um endereço.",
    "Custom CSS (optional)": "CSS personalizado (opcional)",
    "Injected last, so it overrides the page's own styles. Applies to every page in the batch.":
      "Injetado por último, então tem prioridade sobre os estilos da própria página. Vale para todas as páginas do lote.",
    /* Backend sentences this tool can surface (routes/image/html-to-image).
       UNVERIFIED: the backend is not in this repo and was not reachable from
       the dev server, so these are the wordings the other server-backed tools
       use. Any sentence that does not match falls back to English rather than
       breaking — check them against the server and correct them there. */
    "Provide a url or html.": "Informe um endereço ou um HTML.",
    "Only http and https URLs are allowed.": "Só são aceitos endereços http e https.",
    "That host is not allowed.": "Esse endereço não é permitido.",
    "HTML rendering isn't enabled on this server (Chromium not installed).":
      "A renderização de HTML não está disponível neste servidor no momento.",
  },
};

export default content;
