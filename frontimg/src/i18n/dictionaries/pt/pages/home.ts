/**
 * Portuguese home page — HomeShell, HomeLauncher and ToolDirectory, which
 * render only on `/pt`. Loaded with that route through HomeShell's
 * <I18nScope>, so this prose is not bundled on every page (common.ts is).
 *
 * The H1 keeps "oMyImage" verbatim (Google's OAuth review matches it against
 * the consent screen) and pairs it with the Brazilian head term instead of a
 * translation of the English brand line — see dictionaries/pt/site.ts.
 * "drive.file" is an OAuth scope identifier and is never translated.
 */
export const ptHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser": "Ferramentas grátis — a maioria roda no seu navegador",
  "Effortless Power for Image Workflows.": "Ferramentas de imagem online grátis.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "O oMyImage reúne ferramentas de imagem online grátis — comprima, redimensione, recorte, converta, coloque marca d'água e edite fotos.",
  "Step 1 · Upload your images": "Passo 1 · Envie suas imagens",
  "Add images": "Adicionar imagens",
  "Drag & drop images or click to browse": "Arraste e solte as imagens ou clique para escolher",
  "+ More": "+ Outros",
  "Remove {name}": "Remover {name}",
  "Step 2 · Choose an action": "Passo 2 · Escolha o que fazer",
  "Upload an image first": "Envie uma imagem primeiro",
  "Search an action, e.g. compress or resize": "Busque uma ação, ex.: comprimir ou redimensionar",
  "We can't process this file type yet.": "Ainda não processamos esse tipo de arquivo.",
  "No matching action.": "Nenhuma ação encontrada.",
  "Continue": "Continuar",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "Privado por padrão",
  "Most tools run in your browser, so your images never leave your device.":
    "A maioria das ferramentas roda no seu navegador, então suas imagens não saem do seu dispositivo.",
  "{n} free image tools": "{n} ferramentas de imagem grátis",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "Comprima, redimensione, converta, edite e crie GIFs. Sem cadastro.",
  "Google Drive import is optional": "Importar do Google Drive é opcional",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "O oMyImage lê só os arquivos que você escolher e não guarda nada nos nossos servidores.",
  "How we use Google data": "Como usamos os dados do Google",
  "Favorites": "Favoritos",
  "No tools in {category} yet.": "Ainda não há ferramentas em {category}.",
  "Browse all image format converters": "Ver todos os conversores de formato de imagem",
  "All tools": "Todas as ferramentas",
  "Tool categories": "Categorias de ferramentas",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Como funciona",
  "Upload": "Envie",
  "Drop in your images or pick them from your device.":
    "Arraste suas imagens ou escolha do seu dispositivo.",
  "Transform": "Transforme",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "Escolha uma ferramenta e ajuste as opções. O trabalho é feito no seu navegador, ou nos nossos servidores nas tarefas mais pesadas.",
  "Download|step": "Baixe",
  "Save the result to your device, ready to use.":
    "Salve o resultado no seu dispositivo, pronto para usar.",
  "About oMyImage": "Sobre o oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "é um kit de ferramentas de imagem online e grátis para o dia a dia. Ele reúne em um só lugar tudo para comprimir, redimensionar, recortar, girar, converter, colocar marca d'água, editar e animar imagens: {n} ferramentas, cada uma em uma página própria que faz bem uma única coisa.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "A maioria das ferramentas roda inteira no seu navegador: a imagem é processada no seu próprio dispositivo e nunca é enviada a lugar nenhum. Arquivos maiores e as ferramentas de IA mais pesadas são processados nos nossos servidores e excluídos logo depois que o trabalho termina. O oMyImage é grátis e não exige cadastro.",
  "What you can do with oMyImage": "O que você pode fazer com o oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Comprimir imagens JPG, PNG e WEBP sem perda visível de qualidade",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Redimensionar, recortar, girar e adicionar bordas, uma imagem ou várias de uma vez",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Converter entre JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC e PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Editar fotos: marca d'água, preto e branco, desfoque, memes e um editor completo",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "Criar e editar GIFs: a partir de imagens ou vídeo, comprimir, redimensionar, cortar, legendar e converter para MP4 ou WebP",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "Extrair texto com OCR, ver ou apagar metadados EXIF, pegar cores",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Ferramentas de IA: remover fundos, melhorar a qualidade de imagens, desfocar rostos para proteger a privacidade",
  "How oMyImage uses your Google account": "Como o oMyImage usa a sua conta do Google",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Conectar o Google é opcional — todas as ferramentas do oMyImage funcionam sem ele. O Google é usado para duas coisas: entrar com o Google, se você decidir criar uma conta, e",
  "Import from Google Drive": "Importar do Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", que permite escolher uma imagem já guardada no seu Drive em vez de enviá-la do seu dispositivo.",
  "When you use Drive import, oMyImage requests the":
    "Quando você importa do Google Drive, o oMyImage solicita a permissão",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "— um escopo que dá ao aplicativo acesso somente aos arquivos que você escolher no seletor de arquivos do próprio Google — ele não consegue ver, navegar nem pesquisar o resto do seu Drive. O arquivo escolhido é baixado no seu navegador para a ferramenta que você está usando, e só isso: o oMyImage não altera nem exclui nada no seu Drive, não guarda seus arquivos do Google nos nossos servidores, não usa dados de usuários do Google para treinar modelos de IA e nunca os vende nem compartilha com terceiros.",
  "You can revoke access at any time from your": "Você pode revogar o acesso a qualquer momento na",
  "Google Account permissions page": "página de permissões da sua Conta do Google",
  "Contact us": "Fale conosco",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "Tamanhos e predefinições",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "Atalhos para as ferramentas acima, cada um ajustado para uma tarefa: uma foto com exatamente 50 KB, uma thumbnail do YouTube, uma foto para documento.",
  "Exact file size": "Tamanho exato de arquivo",
  "Hit the exact size a form or upload asks for":
    "Chegue ao tamanho exato que um formulário ou site pede",
  "PDF under a size limit": "PDF até um tamanho limite",
  "Scans and photos as a PDF that fits an upload cap":
    "Digitalizações e fotos em um PDF que cabe no limite de envio",
  "Country-standard photo sizes, ready to print":
    "Tamanhos de foto padrão de cada país, prontos para imprimir",
  "Social and print sizes": "Tamanhos para redes sociais e impressão",
  "Thumbnails, covers and print dimensions, ready to go":
    "Thumbnails, capas e medidas de impressão, já prontas",
  "AI presets": "Predefinições com IA",
  "Sharpen photos or swap the background in one click":
    "Deixe a foto mais nítida ou troque o fundo em um clique",
  "Quick edits": "Edições rápidas",
  "Flip, split and other one-step jobs": "Espelhar, dividir e outras tarefas de um passo",
  "KB": "KB", // i18n-same — the unit is written KB in Portuguese
  "MB": "MB", // i18n-same
};
