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
  "Most tools run right in your browser, so files never leave your device. No signup.":
    "A maioria das ferramentas roda no seu navegador, então os arquivos não saem do seu dispositivo. Sem cadastro.",
  "Step 1 · Upload your images": "Passo 1 · Envie suas imagens",
  "Add images": "Adicionar imagens",
  "Drag & drop images or click to browse": "Arraste e solte as imagens ou clique para escolher",
  "+ More": "+ Outros",
  "Remove {name}": "Remover {name}",
  "Step 2 · Choose an action": "Passo 2 · Escolha o que fazer",
  "Upload an image first": "Envie uma imagem primeiro",
  "What do you want to do? — e.g. compress, resize": "O que você quer fazer? — ex.: comprimir, redimensionar",
  "We can't process this file type yet.": "Ainda não processamos esse tipo de arquivo.",
  "No matching action.": "Nenhuma ação encontrada.",
  "Continue": "Continuar",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "is a free online image toolkit — over thirty tools to compress, resize, crop, convert, watermark and edit images, most running entirely in your browser so your files never leave your device. Importing from Google Drive is optional, reads only the files you pick, and never stores them on our servers.":
    "é um conjunto de ferramentas de imagem online e grátis — mais de trinta ferramentas para comprimir, redimensionar, recortar, converter, colocar marca d'água e editar imagens, a maioria rodando inteira no seu navegador, então seus arquivos não saem do seu dispositivo. Importar do Google Drive é opcional, lê só os arquivos que você escolher e nunca os guarda nos nossos servidores.",
  "What is oMyImage?": "O que é o oMyImage?",
  "How we use Google data": "Como usamos os dados do Google",
  "Favorites": "Favoritos",
  "No tools in {category} yet.": "Ainda não há ferramentas em {category}.",
  "Browse all image format converters": "Ver todos os conversores de formato de imagem",
  // CATEGORY_PILLS (lib/tool-categories.ts — module scope, §4.2). "Optimize",
  // "Convert" and "Image AI" are already in common.ts.
  "All": "Todas",
  "Edit & Create": "Editar e criar",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Como funciona",
  "Upload": "Envie",
  "Drag & drop your images securely into our processing engine.":
    "Arraste e solte suas imagens com segurança no nosso processador.",
  "Transform": "Transforme",
  "Pick a tool and let your browser — or our servers — do the heavy lifting.":
    "Escolha uma ferramenta e deixe o seu navegador — ou os nossos servidores — fazer o trabalho pesado.",
  "Download|step": "Baixe",
  "Get your optimized images back, ready for your workflow.":
    "Receba suas imagens otimizadas de volta, prontas para usar.",
  "About oMyImage": "Sobre o oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark and edit images — over thirty tools, each one a dedicated page that does one job well.":
    "é um kit de ferramentas de imagem online e grátis para o dia a dia. Ele reúne em um só lugar tudo para comprimir, redimensionar, recortar, girar, converter, colocar marca d'água e editar imagens — mais de trinta ferramentas, cada uma em uma página própria que faz bem uma única coisa.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files, and the AI tools that need real hardware, are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "A maioria das ferramentas roda inteira no seu navegador: a imagem é processada no seu próprio dispositivo e nunca é enviada a lugar nenhum. Arquivos maiores, e as ferramentas de IA que precisam de hardware de verdade, são processados nos nossos servidores e excluídos logo depois que o trabalho termina. O oMyImage é grátis e não exige cadastro.",
  "What you can do with oMyImage": "O que você pode fazer com o oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Comprimir imagens JPG, PNG e WEBP sem perda visível de qualidade",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Redimensionar, recortar, girar e adicionar bordas, uma imagem ou várias de uma vez",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Converter entre JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC e PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Editar fotos: marca d'água, preto e branco, desfoque, memes e um editor completo",
  "Extract text with OCR, read or strip EXIF metadata, pick colours":
    "Extrair texto com OCR, ver ou apagar metadados EXIF, pegar cores",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Ferramentas de IA: remover fundos, melhorar a qualidade de imagens, desfocar rostos para proteger a privacidade",
  "How oMyImage uses your Google account": "Como o oMyImage usa a sua conta do Google",
  "Connecting Google is optional — every tool on oMyImage works without it. It exists for one feature:":
    "Conectar o Google é opcional — todas as ferramentas do oMyImage funcionam sem ele. A conexão existe para um único recurso:",
  "Import from Google Drive": "Importar do Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", que permite escolher uma imagem já guardada no seu Drive em vez de enviá-la do seu dispositivo.",
  "When you use it, oMyImage requests the": "Quando você usa esse recurso, o oMyImage solicita a permissão",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "— um escopo que dá ao aplicativo acesso somente aos arquivos que você escolher no seletor de arquivos do próprio Google — ele não consegue ver, navegar nem pesquisar o resto do seu Drive. O arquivo escolhido é baixado no seu navegador para a ferramenta que você está usando, e só isso: o oMyImage não altera nem exclui nada no seu Drive, não guarda seus arquivos do Google nos nossos servidores, não usa dados de usuários do Google para treinar modelos de IA e nunca os vende nem compartilha com terceiros.",
  "You can revoke access at any time from your": "Você pode revogar o acesso a qualquer momento na",
  "Google Account permissions page": "página de permissões da sua Conta do Google",
  "Contact us": "Fale conosco",
};
