import type { Dict } from "@/i18n/t";

/**
 * Portuguese strings for /pt/precos (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names,
 * the way Spotify's Premium is Premium in Brazil. Everything around them is
 * translated. The currency itself is decided by the server from the visitor's
 * region, not by this page, so no price appears here.
 */
export const ptPricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "Todas as ferramentas são grátis hoje — sem precisar de conta",
  "Simple, honest pricing.": "Preços simples e honestos.",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "Comece grátis e continue grátis no uso do dia a dia. Os planos pagos estão a caminho para quem precisa de arquivos maiores e mais usos de IA.",

  // Controls
  "Monthly": "Mensal",
  "Yearly": "Anual",
  "Save {n}%": "Economize {n}%",
  "Prices are shown in the currency of your region.": "Os preços são exibidos na moeda da sua região.",
  "Prices in {currency}": "Preços em {currency}",
  "Loading prices…": "Carregando os preços…",
  "Yearly prices are shown per month, billed annually.":
    "Os preços anuais são mostrados por mês, com cobrança anual.",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "Mais popular",
  "Coming soon": "Em breve",
  "Everything you need for everyday images.": "Tudo o que você precisa para as imagens do dia a dia.",
  "For regular users who want more headroom.": "Para quem usa com frequência e quer mais folga.",
  "Unlimited AI, the largest files, priority speed.": "IA ilimitada, os maiores arquivos e prioridade na fila.",
  "Start using the tools": "Comece a usar as ferramentas",
  "All 30 tools, no account needed": "As 30 ferramentas, sem precisar de conta",
  "Unlimited in-browser processing, no daily cap": "Processamento ilimitado no navegador, sem limite diário",
  "Server processing for files up to 100 MB": "Processamento no servidor para arquivos de até 100 MB",
  "10 AI runs / day": "10 usos de IA por dia",
  "Batch up to 20 files": "Lotes de até 20 arquivos",
  "Results download straight to your device": "Os resultados são baixados direto para o seu aparelho",
  "Everything in Free": "Tudo do Free",
  "Server processing for files up to 200 MB": "Processamento no servidor para arquivos de até 200 MB",
  "100 AI runs / day": "100 usos de IA por dia",
  "Batch up to 100 files": "Lotes de até 100 arquivos",
  "Priority server processing": "Prioridade no processamento do servidor",
  "24-hour download links": "Links de download por 24 horas",
  "Everything in Plus": "Tudo do Plus",
  "Server processing for files up to 300 MB": "Processamento no servidor para arquivos de até 300 MB",
  "Unlimited AI runs": "Usos de IA ilimitados",
  "Unlimited batch size": "Lotes de tamanho ilimitado",
  "Top-priority processing queue": "Prioridade máxima na fila de processamento",
  "7-day download links": "Links de download por 7 dias",
  "/ month": "/ mês",
  "Free forever": "Grátis para sempre",
  "Billed annually — {total} / year": "Cobrança anual — {total} por ano",
  "Billed monthly": "Cobrança mensal",
  "Paid plans aren't available yet": "Os planos pagos ainda não estão disponíveis",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "Os planos pagos ainda não estão à venda — os preços acima são o que pretendemos cobrar no lançamento. Tudo no",
  "is free to use in the meantime.": "é grátis para usar enquanto isso.",

  // Trust tiles
  "Private by default": "Privado por padrão",
  "Most tools run entirely in your browser — your images never leave your device.":
    "A maioria das ferramentas roda inteiramente no seu navegador — suas imagens nunca saem do seu aparelho.",
  "No account needed": "Sem precisar de conta",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "Abra uma ferramenta e use. Nunca foi preciso se cadastrar para usar o oMyImage.",
  "Deleted automatically": "Excluído automaticamente",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "No Free nada é armazenado — os resultados são baixados direto para você. Nos planos com link de download, esse prazo é o tempo de retenção, e nada é reutilizado.",

  // FAQ
  "Questions": "Perguntas",
  "Do I need an account to use oMyImage?": "Preciso de conta para usar o oMyImage?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "Não. Todas as ferramentas funcionam agora, sem conta e sem cadastro. A conta só vai importar nos planos pagos, que ainda não estão no ar.",
  "Is the free tier really free?": "O plano gratuito é grátis mesmo?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "É. Não existe teste que vira plano pago nem forma de pagamento guardada. As ferramentas gratuitas são simplesmente gratuitas.",
  "When can I buy Plus or Pro?": "Quando vou poder comprar o Plus ou o Pro?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "Ainda não — a cobrança não está no ar, e é por isso que esses botões estão desativados em vez de fingir que aceitam pagamento. Os preços mostrados são o que pretendemos cobrar no lançamento.",
  "Why are prices different in my country?": "Por que os preços são diferentes no meu país?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "A moeda acompanha o país de onde você está navegando, então não há nada para escolher. A Índia e alguns outros mercados têm preços deliberadamente mais baixos, em vez de convertidos; o resto é derivado dos nossos preços em dólar por uma taxa que atualizamos de tempos em tempos, e não pelo câmbio do dia.",
  "What counts as an AI run?": "O que conta como um uso de IA?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "As ferramentas de IA que rodam no servidor — Remover fundo e Melhorar qualidade da imagem. São as únicas coisas que medimos, porque são as únicas que nos custam dinheiro de verdade a cada uso. Tudo o que roda no seu navegador é ilimitado em todos os planos, e sempre será.",
  "Why do the paid plans only raise the file size a little?": "Por que os planos pagos aumentam tão pouco o tamanho do arquivo?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "Porque quase nada precisa disso. A maioria das imagens é processada inteiramente no seu navegador, onde não impomos limite de tamanho nenhum — o teto é o que o seu próprio aparelho consegue desenhar. Nosso servidor é para os arquivos grandes ou de resolução alta demais para isso, e 100 MB já cobre a esmagadora maioria. Preferimos prometer um número que entregamos de verdade a uma manchete com um gigabyte.",
  "What decides whether an image is processed in my browser or on your server?":
    "O que decide se a imagem é processada no meu navegador ou no servidor de vocês?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "A resolução, principalmente — não o tamanho do arquivo. Um navegador só consegue desenhar um canvas até certo número de pixels, e a foto de um celular moderno de 48 megapixels pode passar disso tendo só alguns megabytes. Quando isso acontece, processamos a imagem no nosso servidor e a excluímos logo depois. Cada ferramenta avisa qual caminho foi usado.",
  "Are my images kept?": "Minhas imagens ficam guardadas?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "A maioria das ferramentas nunca envia nada. Nas que enviam, os resultados são excluídos automaticamente em mais ou menos uma hora. Veja a Política de Privacidade para os detalhes.",

  // Closing CTA
  "Start now — no card, no account.": "Comece agora — sem cartão e sem conta.",
  "All 30 tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "As 30 ferramentas são grátis hoje. Os planos pagos vão dar mais folga, não criar barreira.",
  "Browse all tools": "Ver todas as ferramentas",
};
