/**
 * Portuguese (Brazilian) SHARED chrome — strings rendered by components that
 * appear on every route (header, menus, footer, cookie banner, the tool
 * workspace, result screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.pt.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared: anything under `components/` or `lib/` can render on any route, so
 * its keys live here even if only one tool uses the component today
 * (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `npm run i18n:keys pt` report rather than retyping (typographic apostrophes
 * and dashes are the classic way a key silently never matches).
 *
 * Vocabulary is pinned in dictionaries/pt/tools.ts: arquivo, baixar, excluir,
 * senha, tela, girar, você. "Download" as a button is "Baixar"; as a noun in a
 * sentence, "download" is fine Brazilian usage.
 */
export const ptCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "Início",
  "Breadcrumb": "Trilha de navegação",
  "More tools": "Mais ferramentas",
  "{tool} features": "Recursos da ferramenta {tool}",
  "Security & privacy": "Segurança e privacidade",
  "Frequently asked questions": "Perguntas frequentes",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "Ferramentas",
  "Soon": "Em breve",
  "Coming soon": "Em breve",
  "40 free tools — no sign-up required": "40 ferramentas grátis — sem cadastro",
  "Browse all tools": "Ver todas as ferramentas",
  "Browse tools": "Explorar ferramentas",
  "All tools": "Todas as ferramentas",
  "Blog": "Blog", // i18n-same
  "Pricing": "Preços",
  "Language": "Idioma",
  "Select language": "Selecionar idioma",
  "More": "Mais",
  "Open menu": "Abrir menu",
  "Close menu": "Fechar menu",
  "Site menu": "Menu do site",
  "Credits": "Créditos",
  "credits": "créditos",
  "Unlimited credits": "Créditos ilimitados",
  "{used} of {limit} premium runs used today": "{used} de {limit} usos premium hoje",
  "Search tools…": "Buscar ferramentas…",
  "Search tools": "Buscar ferramentas",
  "Clear search": "Limpar busca",
  "No tools match “{query}”.": "Nenhuma ferramenta encontrada para “{query}”.",
  "Switch to light mode": "Mudar para o modo claro",
  "Switch to dark mode": "Mudar para o modo escuro",
  "Light mode": "Modo claro",
  "Dark mode": "Modo escuro",
  "Help": "Ajuda",

  // Nav mega-menu / drawer sections (lib/nav-sections.ts — module scope, §4.2)
  "Optimize Image": "Otimizar imagem",
  "Edit Image": "Editar imagem",
  "Create": "Criar",
  "Image AI": "IA de imagem",
  "Privacy & Info": "Privacidade e dados",
  "Convert Format": "Converter formato",
  "Convert To & From": "Converter de e para",
  "Camera & Modern Formats": "Câmera e formatos modernos",

  // Navbar quick links + footer columns (module scope, §4.2)
  "Compress Image": "Comprimir imagem",
  "Resize Image": "Redimensionar imagem",
  "Crop Image": "Recortar imagem",
  "Rotate Image": "Girar imagem",
  "Convert to JPG": "Converter para JPG",
  "PNG to JPG": "PNG para JPG",
  "WEBP to PNG": "WEBP para PNG",
  "HEIC to JPG": "HEIC para JPG",
  "Image to PDF": "Imagem para PDF",
  "Watermark Image": "Marca d'água em imagem",
  "Image Editor": "Editor de fotos",
  "Meme Generator": "Gerador de memes",
  "Remove Background": "Remover fundo",
  "Upscale Image": "Melhorar qualidade da imagem",
  "Optimize": "Otimizar",
  "Convert": "Converter",
  "Edit & AI": "Editar e IA",
  "Contact": "Contato",
  "Privacy Policy": "Política de privacidade",
  "Terms of Service": "Termos de serviço",
  "Refund Policy": "Política de reembolso",
  "Cookie Policy": "Política de cookies",
  "Open-Source Licenses": "Licenças de código aberto",
  "Free online image tools — fast, private, and no sign-up required.":
    "Ferramentas de imagem online grátis — rápidas, privadas e sem cadastro.",
  "View Pricing →": "Ver preços →",
  "Need PDF tools? oMyPDF →": "Precisa de ferramentas PDF? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. Todos os direitos reservados.",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "Entrar",
  "Account": "Conta",
  "Account menu": "Menu da conta",
  "Signed in as": "Conectado como",
  "Dashboard": "Painel",
  "My Account": "Minha conta",
  "Sign out": "Sair",
  "Show password": "Mostrar senha",
  "Hide password": "Ocultar senha",
  "Unlimited AI runs": "Usos de IA ilimitados",
  "{n} AI runs per day": "{n} usos de IA por dia",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "Consentimento de cookies",
  "We value your privacy": "Sua privacidade importa",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "O oMyImage usa cookies necessários para o site funcionar e cookies de análise opcionais somente com o seu consentimento. Suas imagens nunca entram nisso.",
  "Accept All": "Aceitar todos",
  "Reject All": "Recusar todos",
  "Customize": "Personalizar",
  "Save preferences": "Salvar preferências",
  "Back": "Voltar",
  "Always on": "Sempre ativo",
  "Cookie Settings": "Configurações de cookies",
  // CATEGORIES in CookieBanner.tsx (module scope, §4.2)
  "Necessary cookies": "Cookies necessários",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "Necessários para recursos essenciais do site, como segurança, lembrar o seu tema e guardar a sua escolha de cookies.",
  "Analytics cookies": "Cookies de análise",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "Ajudam a entender como os visitantes usam o oMyImage, para melhorarmos o desempenho e decidirmos quais ferramentas criar.",
  "Advertising cookies": "Cookies de publicidade",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "Usados para exibir anúncios relevantes e medir o desempenho da publicidade. O oMyImage não exibe anúncios hoje — a escolha fica guardada caso isso mude.",
  "Functional cookies": "Cookies funcionais",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "Ativam recursos extras, como preferências salvas e uma experiência mais personalizada.",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "Selecionar imagens",
  "Select an image": "Selecionar uma imagem",
  "Take photo": "Tirar foto",
  "Processed in your browser — your images never leave your device.":
    "Processado no seu navegador — suas imagens nunca saem do seu dispositivo.",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "Processado no nosso servidor por uma conexão criptografada — os arquivos são excluídos logo em seguida.",
  "or import from": "ou importe do",
  "Connecting…": "Conectando…",
  "Add from {service}": "Adicionar do {service}",
  "Import from {service}": "Importar do {service}",
  "Imported 1 file from Google Drive.": "1 arquivo importado do Google Drive.",
  "Imported {n} files from Google Drive.": "{n} arquivos importados do Google Drive.",
  "Imported 1 file from Dropbox.": "1 arquivo importado do Dropbox.",
  "Imported {n} files from Dropbox.": "{n} arquivos importados do Dropbox.",
  "Google Drive import failed.": "Falha ao importar do Google Drive.",
  "Dropbox import failed.": "Falha ao importar do Dropbox.",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "Arquivos selecionados ({n})",
  "Clear": "Limpar",
  "Add more files": "Adicionar mais arquivos",
  "Move earlier": "Mover para antes",
  "Move later": "Mover para depois",
  "File view": "Visualização dos arquivos",
  "Grid view": "Grade",
  "List view": "Lista",
  "1 image": "1 imagem",
  "{n} images": "{n} imagens",
  "1 file": "1 arquivo",
  "{n} files": "{n} arquivos",
  "Settings": "Configurações",
  "Close": "Fechar",
  "Working…": "Processando…",
  "{label} value": "Valor de {label}",
  "Options": "Opções",
  "Clear image": "Remover imagem",
  "Clear files": "Remover arquivos",
  "Change image": "Trocar imagem",
  "Remove": "Remover",
  "Download": "Baixar",
  "Download {name}": "Baixar {name}",
  "Download ({size})": "Baixar ({size})",
  "Download all (ZIP)": "Baixar tudo (ZIP)",
  "Result": "Resultado",
  "Original": "Original", // i18n-same
  "Process": "Processar",
  "Processing…": "Processando…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "Esta ferramenta roda no servidor, então imagens grandes podem levar alguns segundos.",
  "Please select an image.": "Selecione uma imagem.",
  "Done — your image is ready.": "Pronto — sua imagem está pronta.",
  "Processing failed.": "Falha no processamento.",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "Fundo",
  "Background (replaces transparency)": "Fundo (substitui a transparência)",
  "Auto — match the image's own edges": "Automático — igual às bordas da própria imagem",
  "Auto": "Automático",
  "Transparent": "Transparente",
  "Custom": "Personalizada",
  "Custom color": "Cor personalizada",
  "Custom background color": "Cor de fundo personalizada",
  "White": "Branco",
  "Black": "Preto",
  "Gray": "Cinza",
  "Charcoal": "Grafite",
  "Clay": "Terracota",
  "Red": "Vermelho",
  "Green": "Verde",
  "Blue": "Azul",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "Convertido no seu navegador — os arquivos ficam no seu dispositivo (imagens muito grandes ou de altíssima resolução são processadas no nosso servidor).",
  "Please select {format} files.": "Selecione arquivos {format}.",
  "Please select image files.": "Selecione arquivos de imagem.",
  "Converted 1 image to {format}.": "1 imagem convertida para {format}.",
  "Converted {n} images to {format}.": "{n} imagens convertidas para {format}.",
  "Conversion failed.": "Falha na conversão.",
  "Conversion settings": "Configurações de conversão",
  "Conversion Settings": "Configurações de conversão",
  "Converting…": "Convertendo…",
  "Total: {before} → {after}": "Total: {before} → {after}",
  "1 file ready": "1 arquivo pronto",
  "{n} files ready — downloads as a ZIP": "{n} arquivos prontos — baixados em um ZIP",
  "Convert to {format}": "Converter para {format}",
  "Convert {n} to {format}": "Converter {n} para {format}",
  "Output:": "Saída:",
  "Quality": "Qualidade",
  "Auto-rotate by EXIF orientation": "Girar automaticamente pela orientação EXIF",
  "Strip metadata": "Remover metadados",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "Remove EXIF, perfil de cor, dados da câmera e de localização da imagem convertida para reduzir o tamanho.",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "Recortar e girar imagem",
  "Crop & rotate": "Recortar e girar",
  "Cancel": "Cancelar",
  "Apply": "Aplicar",
  "Free": "Livre",
  "Rotate left": "Girar para a esquerda",
  "Rotate right": "Girar para a direita",
  "Select whole image": "Selecionar a imagem inteira",
  "Reset": "Redefinir",
  "Output": "Saída",
  "Couldn't read this image.": "Não foi possível ler esta imagem.",
  "Compare original with result": "Comparar original com o resultado",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "Área de recorte. Arraste por dentro para mover, arraste uma alça para redimensionar, use as setas para ajustar.",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "Imagem combinada — arraste para mover, use os cantos para redimensionar e a alça de cima para girar",
  "Redaction area. Drag to paint over what you want hidden.":
    "Área de ocultação. Arraste para pintar por cima do que você quer esconder.",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "Área de ocultação. Arraste para desenhar uma região, clique em uma para selecioná-la, arraste as alças para redimensionar, Delete para remover, setas para ajustar.",
  "Select your effect": "Escolha o efeito",
  "Previous effects": "Efeitos anteriores",
  "More effects": "Mais efeitos",
  // EFFECT_SPECS labels (lib/image/effects.ts — module scope, §4.2)
  "No blur": "Sem desfoque",
  "Gaussian": "Gaussiano",
  "Colour": "Cor sólida",
  "Motion": "Movimento",
  "Radial": "Radial", // i18n-same
  "Pixelate": "Pixelizar",
  "Glass": "Vidro",
  "Bloom": "Brilho",
  "Trippy waves": "Ondas psicodélicas",
  "Halftone": "Retícula",
  "Particle": "Partículas",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "Processamento concluído!",
  "Your image is ready for download": "Sua imagem está pronta para baixar",
  "Process more images": "Processar mais imagens",
  "Your image": "Sua imagem",
  "Your images ({n})": "Suas imagens ({n})",
  "Preparing ZIP…": "Preparando o ZIP…",
  "Download all (.zip)": "Baixar tudo (.zip)",
  "Download all ({n})": "Baixar tudo ({n})",
  "Continue with this file": "Continuar com este arquivo",
  "Share or save this tool": "Compartilhe ou salve esta ferramenta",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "Copie o link, compartilhe nas redes sociais ou adicione a página aos favoritos para encontrá-la depois.",
  "Copied": "Copiado",
  "Copy link": "Copiar link",
  "Couldn't copy the link.": "Não foi possível copiar o link.",
  "Share": "Compartilhar",
  "Share:": "Compartilhar:",
  "(Ctrl + D to bookmark)": "(Ctrl + D para favoritar)",
  "Share on X": "Compartilhar no X",
  "Share on Facebook": "Compartilhar no Facebook",
  "Share on LinkedIn": "Compartilhar no LinkedIn",
  "Share on WhatsApp": "Compartilhar no WhatsApp",
  "Share on Telegram": "Compartilhar no Telegram",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "Acabei de usar a ferramenta {tool} no oMyImage — grátis, rápida e sem cadastro.",
  "Free image tools on oMyImage.": "Ferramentas de imagem grátis no oMyImage.",
  "Enjoyed the result?": "Gostou do resultado?",
  "Share your experience on Trustpilot — it helps a lot.":
    "Conte sua experiência no Trustpilot — isso ajuda muito.",
  "Leave a review": "Deixar uma avaliação",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "Ferramenta premium",
  "Premium tool — Free plan includes a limited number per day":
    "Ferramenta premium — o plano Free inclui um número limitado de usos por dia",
  "Runs on our server — {allowance}": "Roda no nosso servidor — {allowance}",
  "Added to Favorites": "Adicionada aos favoritos",
  "Removed from Favorites": "Removida dos favoritos",
  "Add {tool} to favorites": "Adicionar {tool} aos favoritos",
  "Remove {tool} from favorites": "Remover {tool} dos favoritos",

  // ── Legal shell ─────────────────────────────────────────────────────────
  "Legal": "Jurídico",
  "Last updated:": "Última atualização:",
  "Contents": "Conteúdo",
  "On this page": "Nesta página",
  "Back to top": "Voltar ao topo",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "Não foi possível baixar “{name}” do Dropbox.",
  "Could not download “{name}” from Google Drive.": "Não foi possível baixar “{name}” do Google Drive.",
  "The Dropbox chooser failed to start.": "O seletor do Dropbox não abriu.",
  "Unsupported image format: {name}": "Formato de imagem não suportado: {name}",
  "No frames found in this GIF.": "Nenhum quadro encontrado neste GIF.",
  "Canvas is not supported in this browser.": "Este navegador não suporta canvas.",
  "Canvas not supported.": "Canvas não suportado.",
  "Could not export the image.": "Não foi possível exportar a imagem.",
  "Add at least one frame.": "Adicione pelo menos um quadro.",
  "Add at least one image.": "Adicione pelo menos uma imagem.",
  "Server error ({status}).": "Erro no servidor ({status}).",
  "Couldn't reach the processing server for this large file.":
    "Não foi possível conectar ao servidor de processamento para este arquivo grande.",
  "Couldn't reach the processing server.": "Não foi possível conectar ao servidor de processamento.",
  "The server did not start the job. Please try again.": "O servidor não iniciou a tarefa. Tente novamente.",
  "Timed out waiting for the server to finish.": "Tempo esgotado esperando o servidor terminar.",
  // …and the backend's own user-facing sentences (backend/src/routes/image).
  "Upload an image.": "Envie uma imagem.",
  "This file is too large.": "Este arquivo é grande demais.",
  "Too many processing requests. Please wait a moment.":
    "Muitas solicitações de processamento. Aguarde um momento.",
  "Too many requests. Please slow down and try again shortly.":
    "Muitas solicitações. Aguarde um pouco e tente de novo.",
  "Too many requests. Please slow down.": "Muitas solicitações. Vá com calma.",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "Você atingiu o limite de processamento por hora da sua rede. Tente mais tarde ou entre na sua conta para ter limites maiores.",
  "File not found or expired.": "Arquivo não encontrado ou expirado.",
  "This OCR job was not found or has expired.": "Esta tarefa de OCR não foi encontrada ou expirou.",
  "That URL can't be reached — use a public http(s) address.":
    "Não foi possível acessar essa URL — use um endereço http(s) público.",
  "Provide a width and/or height.": "Informe a largura e/ou a altura.",
};
