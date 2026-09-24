import type { Dict } from "@/i18n/t";

/**
 * Russian strings for /ru/pricing (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names,
 * the way Spotify's Premium is Premium in Russia. Everything around them is
 * translated. The currency itself is decided by the server from the visitor's
 * region, not by this page, so no price appears here.
 *
 * "Why are prices different in my country?" is translated faithfully, India
 * included. The sentence is a factual description of how the pricing works,
 * and for a Russian reader the operative half is the second one: their price
 * is derived from the US prices at a periodically refreshed rate. Inventing a
 * Russia-specific claim here would be a claim this repo cannot verify — the
 * price book lives on the backend.
 *
 * "All 30 tools" is translated faithfully as thirty even though the site now
 * ships forty; the number is wrong in the ENGLISH source, which is also the
 * translation key, so it has to be corrected across all four locales at once.
 */
export const ruPricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "Сегодня все инструменты бесплатны — регистрация не нужна",
  "Simple, honest pricing.": "Простые и честные цены.",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "Начните бесплатно и оставайтесь на бесплатном для повседневной работы. Платные планы готовятся для тех, кому нужны файлы побольше и больше запусков ИИ.",

  // Controls
  "Monthly": "Помесячно",
  "Yearly": "На год",
  // {n} modifies the per cent sign, not «экономия», so nothing agrees with it.
  "Save {n}%": "Экономия {n}%", // i18n-plural-invariant
  "Prices are shown in the currency of your region.": "Цены показаны в валюте вашего региона.",
  "Prices in {currency}": "Цены в {currency}",
  "Loading prices…": "Загружаем цены…",
  "Yearly prices are shown per month, billed annually.":
    "Годовые цены показаны из расчёта за месяц, оплата — сразу за год.",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "Чаще всего выбирают",
  "Coming soon": "Скоро",
  "Everything you need for everyday images.": "Всё, что нужно для повседневных изображений.",
  "For regular users who want more headroom.": "Для тех, кто работает регулярно и хочет больше запаса.",
  "Unlimited AI, the largest files, priority speed.": "Безлимитный ИИ, самые большие файлы, приоритет в очереди.",
  "Start using the tools": "Начать пользоваться",
  "All 30 tools, no account needed": "Все 30 инструментов, без регистрации",
  "Unlimited in-browser processing, no daily cap": "Безлимитная обработка в браузере, без дневного лимита",
  "Server processing for files up to 100 MB": "Обработка на сервере для файлов до 100 МБ",
  "10 AI runs / day": "10 запусков ИИ в день",
  "Batch up to 20 files": "До 20 файлов за раз",
  "Results download straight to your device": "Результаты скачиваются сразу к вам на устройство",
  "Everything in Free": "Всё из Free",
  "Server processing for files up to 200 MB": "Обработка на сервере для файлов до 200 МБ",
  "100 AI runs / day": "100 запусков ИИ в день",
  "Batch up to 100 files": "До 100 файлов за раз",
  "Priority server processing": "Приоритетная обработка на сервере",
  "24-hour download links": "Ссылки на скачивание на 24 часа",
  "Everything in Plus": "Всё из Plus",
  "Server processing for files up to 300 MB": "Обработка на сервере для файлов до 300 МБ",
  "Unlimited AI runs": "Безлимитные запуски ИИ",
  "Unlimited batch size": "Сколько угодно файлов за раз",
  "Top-priority processing queue": "Наивысший приоритет в очереди обработки",
  "7-day download links": "Ссылки на скачивание на 7 дней",
  "/ month": "/ мес.",
  "Free forever": "Бесплатно навсегда",
  "Billed annually — {total} / year": "Оплата за год — {total} в год",
  "Billed monthly": "Оплата помесячно",
  "Paid plans aren't available yet": "Платные планы пока недоступны",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "Платные планы пока нельзя купить — цены выше это то, что мы намерены брать, когда они появятся. А пока всё на",
  "is free to use in the meantime.": "бесплатно.",

  // Trust tiles
  "Private by default": "Приватно по умолчанию",
  "Most tools run entirely in your browser — your images never leave your device.":
    "Большинство инструментов работает целиком в вашем браузере — изображения не покидают устройство.",
  "No account needed": "Регистрация не нужна",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "Открыли инструмент и работаете. Регистрация для oMyImage не требовалась никогда.",
  "Deleted automatically": "Удаляется автоматически",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "На Free не сохраняется вообще ничего — результаты скачиваются прямо к вам. Там, где план даёт ссылки на скачивание, срок их жизни и есть срок хранения, и ничего никогда не используется повторно.",

  // FAQ
  "Questions": "Вопросы",
  "Do I need an account to use oMyImage?": "Нужен ли аккаунт, чтобы пользоваться oMyImage?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "Нет. Каждый инструмент работает прямо сейчас без аккаунта и без регистрации. Аккаунт имеет смысл только для платных планов, а они ещё не запущены.",
  "Is the free tier really free?": "Бесплатный план действительно бесплатный?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "Да. Нет ни пробного периода, который незаметно превращается в платный, ни сохранённого способа оплаты. Бесплатные инструменты просто бесплатны.",
  "When can I buy Plus or Pro?": "Когда можно будет купить Plus или Pro?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "Пока нет: приём оплаты не запущен, и поэтому кнопки отключены, а не изображают приём платежа. Показанные цены — то, что мы намерены брать, когда планы появятся.",
  "Why are prices different in my country?": "Почему в моей стране другие цены?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "Валюта определяется страной, из которой вы заходите, поэтому выбирать ничего не нужно. В Индии и ещё нескольких странах цены осознанно занижены, а не пересчитаны; во всех остальных они выводятся из наших цен в долларах по курсу, который мы обновляем время от времени, — не по курсу текущего дня.",
  "What counts as an AI run?": "Что считается запуском ИИ?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "Инструменты с ИИ, работающие на сервере, — удаление фона и улучшение качества. Считаем мы только их, потому что только они стоят нам реальных денег за каждое использование. Всё, что работает в вашем браузере, безлимитно на любом плане и таким и останется.",
  "Why do the paid plans only raise the file size a little?": "Почему платные планы поднимают размер файла лишь немного?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "Потому что это почти никому не нужно. Большинство изображений обрабатывается целиком в вашем браузере, где мы вообще не устанавливаем ограничения по размеру: единственный потолок — сколько способно нарисовать ваше устройство. Наш сервер нужен для файлов, которые для этого слишком велики или слишком высокого разрешения, а 100 МБ и так покрывают подавляющее большинство. Мы лучше назовём цифру, которую действительно вытянем, чем красивый гигабайт в заголовке.",
  "What decides whether an image is processed in my browser or on your server?":
    "Что решает, где обрабатывается изображение — в браузере или на вашем сервере?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "Чаще всего разрешение, а не вес файла. Браузер может нарисовать холст лишь до определённого числа пикселей, а современный снимок с 48-мегапиксельной камеры превышает этот предел, оставаясь при этом всего в несколько мегабайт. Когда так происходит, мы обрабатываем изображение на своём сервере и сразу после удаляем. Каждый инструмент сообщает, каким путём пошёл.",
  "Are my images kept?": "Сохраняются ли мои изображения?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "Большинство инструментов вообще ничего не загружает. У тех, что загружают, результаты удаляются автоматически примерно в течение часа. Подробности — в политике конфиденциальности.",

  // Closing CTA
  "Start now — no card, no account.": "Начните прямо сейчас — без карты и без аккаунта.",
  "All 30 tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "Все 30 инструментов сегодня бесплатны. Платные планы добавят запаса, а не поставят шлагбаум.",
  "Browse all tools": "Все инструменты",
};
