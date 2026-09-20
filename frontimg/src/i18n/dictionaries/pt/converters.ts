import type { Dict } from "@/i18n/t";

/**
 * Portuguese (Brazilian) strings for the data-driven converter pages.
 *
 * These are the GENERATED sentences — the how-to steps, the feature tiles, the
 * boilerplate FAQs, the privacy note and ConverterPage's own chrome. The prose
 * that makes each pair its own page lives in `src/content/converters/`.
 *
 * Loaded by `lib/converters/i18n.ts`, which hands it to `getT()` for the
 * server markup and down through an `<I18nScope>` so ConvertTool sees it too.
 * A sentence with a conditional tail has one key per variant, because the tail
 * does not sit in the same place in Portuguese (conversion.md §6.4).
 */
export const ptConverters: Dict = {
  // ── copy.ts: shared fragments ──────────────────────────────────────────
  "very large or very high-resolution images": "imagens muito grandes ou de resolução muito alta",

  // ── copy.ts: buildSteps ────────────────────────────────────────────────
  "Add your {from} files": "Adicione seus arquivos {from}",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "Arraste imagens {from} para a área de envio ou clique para escolher. Adicione quantas quiser — todas entram na mesma fila.",
  "Choose your quality": "Escolha a qualidade",
  "Drag the quality slider to trade file size against detail.":
    "Arraste o controle de qualidade para equilibrar tamanho do arquivo e detalhe.",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "Como o {to} não tem transparência, você também escolhe a cor que preenche as áreas transparentes.",
  "The default suits most images — raise it for detailed photographs.":
    "O padrão serve para a maioria das imagens — aumente para fotos cheias de detalhe.",
  "Check the settings": "Confira as opções",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "A saída em {to} é sem perdas e mantém a transparência, então não há nada para configurar. A rotação automática lê a orientação do EXIF para as fotos em pé continuarem em pé.",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "A saída em {to} é sem perdas, então não há nada para configurar. A rotação automática lê a orientação do EXIF para as fotos em pé continuarem em pé.",
  "Convert and download": "Converta e baixe",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "Clique em Converter. Um arquivo é baixado em {to} na hora; vários chegam juntos em um ZIP.",

  // ── copy.ts: buildFeatures ─────────────────────────────────────────────
  "Batch {from} → {to}": "{from} → {to} em lote",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "Converta uma pasta inteira de uma vez. Vários arquivos voltam em um único ZIP, então não tem aquela maratona de baixar um por um.",
  "Transparency survives": "A transparência sobrevive",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "As áreas transparentes do seu {from} continuam transparentes no {to} — sem aquela caixa branca atrás da imagem.",
  "You pick the background": "Você escolhe o fundo",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "O {to} não guarda transparência, então tudo o que é transparente precisa ser preenchido. Escolha a cor em vez de receber branco.",
  "Quality you control": "Qualidade sob seu controle",
  "Lossless output": "Saída sem perdas",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "Um controle de qualidade em vez de um valor fixo, então quem decide onde fica a linha entre tamanho e detalhe é você.",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "O {to} é sem perdas — a imagem convertida é, pixel a pixel, a que entrou.",
  "No software to install": "Nada para instalar",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "Nada para baixar e nenhuma conta para criar. Os arquivos são enviados por HTTPS, convertidos e excluídos do servidor em seguida.",
  "Private by default": "Privado por padrão",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "A conversão roda dentro da aba do seu navegador. Seus arquivos {from} nunca são enviados, a não ser que algum esteja entre as {offload}.",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "A conversão roda dentro da aba do seu navegador. Seus arquivos {from} nunca são enviados.",

  // ── copy.ts: buildBoilerplateFaqs ──────────────────────────────────────
  "What happens to my files?": "O que acontece com os meus arquivos?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Esta conversão precisa de um servidor, porque os navegadores não conseguem decodificar {from} sozinhos. Os arquivos viajam por uma conexão HTTPS criptografada, são convertidos e depois excluídos — eles nunca são usados para mais nada.",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Esta conversão precisa de um servidor, porque os navegadores não conseguem gerar {to} sozinhos. Os arquivos viajam por uma conexão HTTPS criptografada, são convertidos e depois excluídos — eles nunca são usados para mais nada.",
  "Are my images uploaded anywhere?": "Minhas imagens são enviadas para algum lugar?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "Não. A conversão de {from} para {to} roda inteiramente dentro da aba do seu navegador, então os dados da imagem nunca saem do seu computador. A única exceção são imagens grandes demais para uma aba desenhar — acima de {mb} MB, ou com mais megapixels do que o canvas aguenta, o que a foto de um celular moderno alcança com poucos MB. Essas são enviadas por HTTPS ao nosso servidor e excluídas depois da conversão, e a ferramenta avisa quando isso acontece.",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "Não. A conversão de {from} para {to} roda inteiramente dentro da aba do seu navegador, então os dados da imagem nunca saem do seu computador.",
  "How many {from} files can I convert at once?": "Quantos arquivos {from} posso converter de uma vez?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "Não há limite fixo. Adicione um lote grande e eles são processados um depois do outro, e entregues em um único ZIP. Lotes muito grandes só demoram mais — a aba continua respondendo o tempo todo.",
  "Is there a watermark, sign-up or payment?": "Tem marca d'água, cadastro ou cobrança?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "Nenhum dos três. Não tem conta, não tem marca d'água na saída e não tem cobrança. O arquivo convertido é exatamente a imagem que você converteu.",
  "Does this work on a phone?": "Funciona no celular?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "Funciona. O conversor roda nos navegadores de celular no iOS e no Android — dá para escolher as imagens direto da galeria, e o download cai na sua pasta de downloads de sempre.",

  // ── copy.ts: buildSecurity and buildPrivacyNote ────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "A conversão de {from} para {to} é uma das poucas que não rodam no navegador, então o seu arquivo é enviado ao nosso servidor para ser processado. A transferência é criptografada com HTTPS, o arquivo é convertido na hora e é excluído em seguida. Nada é guardado, indexado ou usado para treinamento.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "Suas imagens ficam no seu aparelho. A conversão de {from} para {to} acontece inteiramente dentro do seu navegador — não há etapa de envio, cópia em servidor nem registro do que você converteu. A única exceção são {offload}: elas passam do que uma aba consegue processar, então são enviadas por HTTPS, convertidas e excluídas.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "Suas imagens ficam no seu aparelho. A conversão de {from} para {to} acontece inteiramente dentro do seu navegador — não há etapa de envio, cópia em servidor nem registro do que você converteu.",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "Convertido no nosso servidor por uma conexão criptografada — os arquivos são excluídos logo em seguida.",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "Convertido no seu navegador — os arquivos ficam no seu aparelho ({offload} são processadas no nosso servidor).",
  "Converted in your browser — your images never leave your device.":
    "Convertido no seu navegador — suas imagens nunca saem do seu aparelho.",

  // ── ConverterPage chrome ───────────────────────────────────────────────
  "Why convert {from} to {to}?": "Por que converter {from} para {to}?",
  "{from} and {to}, briefly": "{from} e {to}, em poucas palavras",
  "How to convert {from} to {to}": "Como converter {from} para {to}",
  "Going the other way?": "Precisa do caminho inverso?",
  "Convert {name}": "Converter {name}",
  "or drop {from} images here": "ou solte imagens {from} aqui",
};
