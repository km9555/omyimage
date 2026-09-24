import type { ToolPageContent } from "@/content/tools/types";

/**
 * Russian copy for /ru/html-to-image. 64 ui keys, the second-heaviest block.
 *
 * Audience note: this is the one developer-facing tool in the set where the
 * reader is building something rather than fixing a file. So CSS, HTML,
 * Chromium, Puppeteer, prefers-color-scheme and the selector examples stay
 * Latin — they are code, and a Russian developer reads them that way. The
 * prose around them is native.
 *
 * Like heic-to-jpg and image-to-text, this tool runs on the server, and the
 * page says so plainly rather than claiming a privacy property it lacks.
 */
const content: ToolPageContent = {
  toolId: "html-to-image",
  locale: "ru",
  name: "HTML в изображение",
  tagline:
    "Превратите адрес страницы или свой HTML в картинку: выбор окна просмотра, формата и захвата всей страницы. Работает на headless Chromium с открытым кодом.",
  category: { id: "edit", label: "Редактор" },

  metaTitle: "HTML в изображение онлайн бесплатно — скриншот страницы по URL | oMyImage",
  metaDescription:
    "Превратите веб-страницу или свой HTML в изображение онлайн бесплатно: любой размер окна, PNG или JPG, захват всей страницы. Рендер на headless Chromium.",

  intro:
    "Превратите веб-страницу или кусок разметки в чёткую картинку. Инструмент отрисовывает адрес или ваш собственный HTML в headless Chromium и отдаёт PNG или JPG ровно того размера, который вы задали, — удобно для миниатюр, превью и карточек для соцсетей. Отрисовка идёт на нашем сервере с помощью Puppeteer с открытым кодом.",

  sections: [
    {
      heading: "Как разметка становится картинкой",
      id: "what",
      body: [
        "Браузер без окна загружает ваш HTML или адрес, раскладывает страницу ровно так же, как это сделал бы обычный браузер — применяя CSS, выполняя скрипты, подгружая веб-шрифты, — и снимает результат картинкой. По сути это скриншот, сделанный браузером, у которого нет окна.",
        "Различие существенное. Это не приблизительная догадка о том, как страница могла бы выглядеть: это тот же самый движок отрисовки, дающий ту же самую вёрстку. Поэтому сложный CSS, flexbox, grid и веб-шрифты выходят правильно там, где более простые конвертеры HTML в картинку их коверкают.",
        "На выходе обычный PNG или JPG, поэтому результат отправляется куда угодно, куда отправляется изображение: в карточку для соцсети, в документ, в презентацию или в письмо.",
      ],
    },
    {
      heading: "Карточки для соцсетей",
      id: "og-images",
      body: [
        "Самое частое боевое применение — генерация изображений Open Graph, той самой картинки, которая появляется, когда ссылкой делятся в соцсети или в мессенджере. Рисовать такие вручную для каждой статьи не масштабируется; собрать шаблон в HTML и отрисовать в картинку — вполне.",
        "Стандартный размер — 1200×630 пикселей, и его разумно обрабатывают практически все площадки. Соберите карточку HTML-шаблоном, расставив заголовок, автора и оформление через CSS, и отрисовывайте по одной картинке на статью.",
        "Два практических замечания: держите важное подальше от краёв, потому что часть площадок обрезает карточку под своё соотношение сторон, и берите крупный шрифт. Эти карточки часто видят шириной пары сотен пикселей в ленте, поэтому всё мельче примерно 32 пикселей в исходнике прочитать будет нельзя.",
      ],
    },
    {
      heading: "Почему снимок может отличаться от того, что видите вы",
      id: "differences",
      body: [
        "Отрисовщик — это чистый браузер. У него нет расширений, нет блокировщика рекламы, нет залогиненной сессии и нет доступа к шрифтам, установленным на вашей машине. Страница, которая у вас выглядит так, здесь может отрисоваться иначе — и обычно эта разница полезна: вы видите то, что видит анонимный посетитель, пришедший впервые.",
        "Самая частая причина пропавшего содержимого — отложенная загрузка. Изображения и блоки, настроенные подгружаться при прокрутке, могут не успеть появиться до снимка, а данные, приходящие медленным запросом к API, могут не успеть вовсе.",
        "Анимации и переходы замирают там, где их застали. Если элемент проявляется плавно, снимок может поймать его на полпути — хороший повод отключить анимации в отрисовываемом CSS или сразу проектировать шаблон статичной вёрсткой.",
      ],
    },
    {
      heading: "Этот инструмент работает на сервере",
      id: "server",
      body: [
        "Почти всё на этом сайте считается во вкладке вашего браузера. Отрисовка веб-страницы так не может: для неё нужен полноценный движок браузера — ровно то, чем ваш браузер и является, но не то, чем страница может управлять применительно к произвольному чужому содержимому изнутри вкладки.",
        "Поэтому адрес или HTML, который вы дали, отправляется на наш сервер по зашифрованному соединению, отрисовывается там в браузере без окна, и картинка возвращается вам. После этого ничего не сохраняется.",
        "Отдельно про закрытое содержимое: раз адрес запрашивает наш сервер, а не вы, всё, что находится за логином или во внутренней сети, недоступно. Это ограничение — и одновременно причина, по которой инструмент не может случайно снять то, чего снимать не следовало.",
      ],
    },
  ],

  howToTitle: "Как превратить HTML в изображение",
  steps: [
    { title: "Укажите адрес или HTML", description: "Вставьте адрес веб-страницы либо переключитесь в режим HTML и вставьте свою разметку." },
    { title: "Задайте размер и формат", description: "Выберите ширину и высоту окна просмотра, формат на выходе и нужно ли снимать страницу целиком." },
    { title: "Отрисуйте и скачайте", description: "Нажмите «Отрисовать в картинку» и скачайте снимок в PNG или JPG." },
  ],

  features: [
    { icon: "link", title: "Адрес или свой HTML", description: "Снимите любую общедоступную веб-страницу или отрисуйте в картинку собственный кусок HTML и CSS." },
    { icon: "aspect_ratio", title: "Своё окно просмотра", description: "Задайте точные ширину и высоту и при желании снимите всю прокручиваемую страницу целиком." },
    { icon: "verified_user", title: "Открытый движок", description: "Отрисовка идёт на headless Chromium через Puppeteer — свободный, с открытым кодом и пригодный для коммерческого использования." },
  ],

  faqs: [
    { q: "Можно ли снять любой сайт?", a: "Любой общедоступный адрес. Страницы, блокирующие ботов или требующие входа, могут отрисоваться не полностью." },
    { q: "Можно ли отрисовать собственный HTML?", a: "Да. Переключитесь в режим HTML и вставьте разметку со встроенным CSS, чтобы отрисовать её точно." },
    { q: "В каких форматах можно сохранить?", a: "PNG (без потерь) или JPG. Ещё можно снять всю прокручиваемую страницу целиком." },
    { q: "Какой движок используется?", a: "Headless Chromium через библиотеку Puppeteer с открытым кодом, работающую на нашем сервере." },
    { q: "Это бесплатно?", a: "Да — бесплатно, без водяных знаков и без регистрации." },
    { q: "Для чего это вообще нужно?", a: "Для генерации карточек-превью в соцсетях, снимка страницы для документации или архива, единообразных скриншотов для списка изменений, предпросмотра шаблона письма картинкой и превращения написанного вами HTML в изображение, которым можно поделиться там, где HTML не отрисуется." },
    { q: "Почему результат не совпадает с моим браузером в точности?", a: "Потому что отрисовка идёт в чистом браузере без окна: без расширений, без залогиненной сессии и без локальных шрифтов сверх стандартного набора. Содержимое за логином покажется в том виде, в каком его видит незалогиненный посетитель, а страница, опирающаяся на шрифт, установленный только у вас, откатится на что-то другое." },
    { q: "Можно ли снять страницу, требующую входа?", a: "Нет. У отрисовщика нет доступа к вашим cookie и сессии, поэтому он видит то же, что и анонимный посетитель. Для страниц за логином практичнее сделать скриншот прямо в браузере." },
    { q: "Почему часть содержимого не попала в снимок?", a: "Обычно из-за отложенной загрузки. Изображения и блоки, подгружающиеся только при прокрутке, могли не успеть появиться до снимка. Содержимое, приходящее медленным запросом к API, теряется по той же причине, а анимации замирают на том кадре, до которого дошли." },
    { q: "В каком размере отрисовывать?", a: "1200×630 — стандарт для карточек-превью, работающий на большинстве площадок. Ширина 1280 или 1440 подходит для скриншотов в документацию. Захват всей страницы уместен для архивирования, хотя очень длинные страницы дают очень высокие изображения." },
    { q: "Работает ли он в браузере, как остальные инструменты?", a: "Нет — этому нужен настоящий движок браузера, доставить который на ваше устройство нельзя. HTML или адрес отправляется на наш сервер, отрисовывается там, и готовая картинка возвращается вам. После этого ничего не хранится." },
  ],

  security:
    "Отрисовка выполняется на нашем сервере на headless Chromium с открытым кодом. Результат хранится лишь недолго за приватной ссылкой на скачивание и удаляется автоматически в течение часа. Мы никогда не передаём и не используем повторно ваше содержимое.",

  rating: { value: "4.7", count: "356" },

  ui: {
    // HtmlToImageTool.tsx — module-scope VIEWPORTS and FORMATS
    "Desktop — 1920 × 1080": "Компьютер — 1920 × 1080",
    "Laptop — 1440 × 900": "Ноутбук — 1440 × 900",
    "Standard — 1280 × 720": "Стандартный — 1280 × 720",
    "Tablet — 768 × 1024": "Планшет — 768 × 1024",
    "Mobile — 390 × 844": "Телефон — 390 × 844",
    "Custom size…": "Свой размер…",
    "PNG — lossless, supports transparency": "PNG — без потерь, с прозрачностью",
    "JPG — smallest for photos": "JPG — самый лёгкий для фотографий",
    "WEBP — small + transparency": "WEBP — лёгкий и с прозрачностью",
    // HtmlToImageTool.tsx
    // The numeral follows the noun, so nothing agrees with it.
    "Page {n}": "Страница {n}", // i18n-plural-invariant
    "Please choose .html files.": "Выберите файлы .html.",
    "Added 1 page.": "Добавлена 1 страница.",
    "Added {n} pages.": "Добавлено {n} страниц.",
    "Added {n} pages.|one": "Добавлена {n} страница.",
    "Added {n} pages.|few": "Добавлено {n} страницы.",
    "Enter a valid URL (https://…).": "Введите корректный адрес (https://…).",
    "Add some HTML to at least one page.": "Впишите HTML хотя бы на одну страницу.",
    "Width and height must be at least 100px.": "Ширина и высота должны быть не меньше 100px.",
    "Rendered 1 image.": "Отрисовано 1 изображение.",
    "Rendered {n} images.": "Отрисовано {n} изображений.",
    "Rendered {n} images.|one": "Отрисовано {n} изображение.",
    "Rendered {n} images.|few": "Отрисовано {n} изображения.",
    "Rendering failed.": "Не удалось отрисовать.",
    "Web page URL": "Адрес веб-страницы",
    "Any public http(s) address. Private and local addresses are rejected by the server.":
      "Любой общедоступный адрес http(s). Внутренние и локальные адреса сервер отклоняет.",
    "1 page": "1 страница",
    "{n} pages": "{n} страниц",
    "{n} pages|one": "{n} страница",
    "{n} pages|few": "{n} страницы",
    "Import .html": "Импортировать .html",
    "Add page": "Добавить страницу",
    // Colon, not a bare object: {name} is the page name, which defaults to the
    // TRANSLATED «Страница N». «Удалить Страница 1» is ungrammatical — the
    // verb wants the accusative and the interpolated fragment is nominative.
    // A colon sidesteps it for any name the user might type too.
    "Remove {name}": "Удалить: {name}",
    "Page name": "Имя страницы",
    "Used as the downloaded file name for this page's image.":
      "Используется как имя скачиваемого файла для изображения этой страницы.",
    "<!doctype html> …": "<!doctype html> …", // i18n-same
    "{n} characters · a full document or a fragment both work.":
      "{n} символов · подойдёт и целый документ, и фрагмент.",
    "{n} characters · a full document or a fragment both work.|one":
      "{n} символ · подойдёт и целый документ, и фрагмент.",
    "{n} characters · a full document or a fragment both work.|few":
      "{n} символа · подойдёт и целый документ, и фрагмент.",
    // {done} and {total} are positions, and «из {total}» does not inflect.
    "Rendering {done} of {total}…": "Отрисовываем {done} из {total}…", // i18n-plural-invariant
    "Your rendered image will appear here.": "Готовое изображение появится здесь.",
    "Capturing at": "Снимаем в размере",
    "Clear": "Очистить",
    "Download {name}": "Скачать: {name}",
    "Capture Settings": "Настройки съёмки",
    "Rendering uses headless Chromium on our servers.":
      "Отрисовка идёт на headless Chromium на наших серверах.",
    "Rendering…": "Отрисовываем…",
    "Render {n} pages": "Отрисовать {n} страниц",
    "Render {n} pages|one": "Отрисовать {n} страницу",
    "Render {n} pages|few": "Отрисовать {n} страницы",
    "Render to image": "Отрисовать в картинку",
    "Viewport": "Окно просмотра",
    "Screen size": "Размер экрана",
    "The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths.":
      "Окно браузера, в котором раскладывается страница. Адаптивные сайты на этих ширинах покажут планшетную или мобильную вёрстку.",
    "Width (px)": "Ширина (px)",
    "Height (px)": "Высота (px)",
    "Orientation": "Ориентация",
    "Swaps the width and height of the chosen screen size.":
      "Меняет местами ширину и высоту выбранного размера экрана.",
    "Portrait": "Вертикальная",
    "Landscape": "Горизонтальная",
    "Resolution": "Разрешение",
    "2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file.":
      "2× отрисовывает вдвое больше пикселей ради резкости на плотных экранах — вёрстка та же, файл больше.",
    "Capture full page": "Снять страницу целиком",
    "Scrolls to the bottom and stitches the whole document instead of just the visible window.":
      "Прокручивает до низа и сшивает весь документ, а не только видимое окно.",
    "Capture one element (optional)": "Снять один элемент (необязательно)",
    "A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page.":
      "Селектор CSS, например #pricing или .hero. Снимается только этот элемент, и это отменяет съёмку всей страницы.",
    "Output": "Результат",
    "Format": "Формат",
    "Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots.":
      "Выше — больше деталей и тяжелее файл. Для скриншотов оптимум в районе 80–90.",
    "Lower quality": "Снизить качество",
    "Higher quality": "Повысить качество",
    "Smaller file": "Файл легче",
    "Skips the page background so the image keeps an alpha channel.":
      "Пропускает фон страницы, поэтому у изображения сохраняется альфа-канал.",
    "JPG has no alpha channel — switch to PNG or WEBP for transparency.":
      "У JPG нет альфа-канала — для прозрачности переключитесь на PNG или WEBP.",
    "Transparent background": "Прозрачный фон",
    "Padding (px)": "Внутренний отступ (px)",
    "Breathing room added around the page content before the shot is taken.":
      "Немного воздуха вокруг содержимого страницы, добавляемого перед съёмкой.",
    "Advanced": "Дополнительно",
    "Wait before capture (ms)": "Подождать перед съёмкой (ms)",
    "Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000.":
      "Дополнительное время после загрузки страницы — пригодится для анимаций, шрифтов и отложенно подгружаемых изображений. Максимум 10000.",
    "Emulate dark mode": "Имитировать тёмную тему",
    "Reports prefers-color-scheme: dark, so sites with a dark theme render it.":
      "Сообщает prefers-color-scheme: dark, поэтому сайты с тёмной темой отрисуются в ней.",
    "Hide cookie banners": "Скрыть баннеры cookie",
    "Hides the common consent overlays that would otherwise cover the shot.":
      "Прячет распространённые окна согласия, которые иначе закроют собой снимок.",
    "Only applies when capturing a URL.": "Действует только при съёмке по адресу.",
    "Custom CSS (optional)": "Свой CSS (необязательно)",
    "Injected last, so it overrides the page's own styles. Applies to every page in the batch.":
      "Подставляется последним, поэтому перебивает собственные стили страницы. Действует на все страницы в пачке.",
    /* Backend sentences this tool can surface (routes/image/html-to-image).
       UNVERIFIED, exactly as in the pt and hi modules: the backend is not in
       this repo and was not reachable from the dev server, so these follow the
       wordings the other server-backed tools use. A sentence that does not
       match falls back to English rather than breaking. */
    "Provide a url or html.": "Укажите адрес или HTML.",
    "Only http and https URLs are allowed.": "Допускаются только адреса http и https.",
    "That host is not allowed.": "Этот адрес не разрешён.",
    "HTML rendering isn't enabled on this server (Chromium not installed).":
      "Отрисовка HTML не подключена на этом сервере (Chromium не установлен).",
  },
};

export default content;
