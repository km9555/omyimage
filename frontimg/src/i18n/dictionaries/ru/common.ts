/**
 * Russian SHARED chrome — strings rendered by components that appear on every
 * route (header, menus, footer, cookie banner, the tool workspace, result
 * screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.ru.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared: anything under `components/` or `lib/` can render on any route, so
 * its keys live here even if only one tool uses the component today
 * (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `npm run i18n:keys ru` report rather than retyping (typographic apostrophes
 * and dashes are the classic way a key silently never matches).
 *
 * Register and script (conversion.md §10, Russian):
 *   • Formal «вы», lowercase. Capitalised «Вы» is letter-writing register and
 *     reads stiff in an interface; Yandex, VK and Tinkoff all use lowercase.
 *   • Imperative plural: сожмите, обрежьте, выберите.
 *   • Format and product names stay LATIN — JPG, PNG, WEBP, HEIC, SVG, GIF,
 *     PDF, ZIP, EXIF, DPI, Google Drive, Dropbox. Their Cyrillic spellings live
 *     in dictionaries/ru/aliases.ts so the search box finds both.
 *   • «фото» is the head noun for tool-facing copy — measured, not assumed:
 *     "сжать фото" outruns "сжать изображение" roughly five to one. Use
 *     «изображение» for the technical object in UI chrome, where it is the
 *     precise word.
 *   • Russian HAS case, so ALL-CAPS emphasis can stay as emphasis — unlike
 *     Hindi, uppercase toggles keep their labels.
 *   • Latin digits, «ёлочки» for quotes in prose, ё written out in content.
 *
 * PLURALS. Russian needs three forms and picks between them on n % 10 and
 * n % 100 — 21 takes the singular, 11 does not. `t()` resolves them by probing
 * a `|one` / `|few` suffix (see i18n/t.ts); the unsuffixed key is the `many`
 * form, which is also what 0 takes. `npm run i18n:plurals` is the gate.
 * A count that takes no agreement — a parenthetical total, an index, a
 * percentage — is marked `// i18n-plural-invariant` rather than given three
 * identical rows.
 *
 * Vocabulary pinned here and in dictionaries/ru/tools.ts: файл, изображение,
 * фото, скачать (download), удалить (remove/delete), пароль, экран,
 * повернуть (rotate), настройки, вы.
 */
export const ruCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "Главная",
  "Breadcrumb": "Навигационная цепочка",
  "More tools": "Другие инструменты",
  "{tool} features": "Возможности: {tool}",
  "Security & privacy": "Безопасность и приватность",
  "Frequently asked questions": "Частые вопросы",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "Инструменты",
  "Soon": "Скоро",
  "Coming soon": "Скоро",
  "40 free tools — no sign-up required": "40 бесплатных инструментов — без регистрации",
  "Browse all tools": "Все инструменты",
  "Browse tools": "Смотреть инструменты",
  "All tools": "Все инструменты",
  "Blog": "Блог",
  "Pricing": "Цены",
  "Language": "Язык",
  "Select language": "Выберите язык",
  "More": "Ещё",
  "Open menu": "Открыть меню",
  "Close menu": "Закрыть меню",
  "Site menu": "Меню сайта",
  "Credits": "Кредиты",
  "credits": "кредитов",
  "Unlimited credits": "Безлимитные кредиты",
  "{used} of {limit} premium runs used today": "Сегодня использовано {used} из {limit} премиум-запусков",
  "Search tools…": "Поиск инструментов…",
  "Search tools": "Поиск инструментов",
  "Clear search": "Очистить поиск",
  "No tools match “{query}”.": "По запросу «{query}» ничего не найдено.",
  "Switch to light mode": "Включить светлую тему",
  "Switch to dark mode": "Включить тёмную тему",
  "Light mode": "Светлая тема",
  "Dark mode": "Тёмная тема",
  "Help": "Справка",
  "Optimize Image": "Оптимизация изображений",
  "Edit Image": "Редактирование",
  "Create": "Создание",
  "Image AI": "ИИ для изображений",
  "Privacy & Info": "Приватность и данные",
  "Convert Format": "Смена формата",
  "Convert To & From": "Конвертация в любой формат",
  "Camera & Modern Formats": "Камера и новые форматы",
  "Compress Image": "Сжать фото",
  "Resize Image": "Изменить размер фото",
  "Crop Image": "Обрезать фото",
  "Rotate Image": "Повернуть фото",
  "Convert to JPG": "Конвертировать в JPG",
  "PNG to JPG": "PNG в JPG",
  "WEBP to PNG": "WEBP в PNG",
  "HEIC to JPG": "HEIC в JPG",
  "Image to PDF": "Фото в PDF",
  "Watermark Image": "Водяной знак на фото",
  "Image Editor": "Редактор фото",
  "Meme Generator": "Генератор мемов",
  "Remove Background": "Удалить фон",
  "Upscale Image": "Улучшить качество фото",
  "Optimize": "Оптимизация",
  "Convert": "Конвертация",
  "Edit & AI": "Редактор и ИИ",
  "Contact": "Контакты",
  "Privacy Policy": "Политика конфиденциальности",
  "Terms of Service": "Условия использования",
  "Refund Policy": "Политика возврата",
  "Cookie Policy": "Политика cookie",
  "Open-Source Licenses": "Лицензии открытого кода",
  "Free online image tools — fast, private, and no sign-up required.":
    "Бесплатные онлайн-инструменты для изображений — быстро, приватно и без регистрации.",
  "View Pricing →": "Смотреть цены →",
  "Need PDF tools? oMyPDF →": "Нужны инструменты для PDF? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. Все права защищены.",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "Войти",
  "Account": "Аккаунт",
  "Account menu": "Меню аккаунта",
  "Signed in as": "Вы вошли как",
  "Dashboard": "Панель",
  "My Account": "Мой аккаунт",
  "Sign out": "Выйти",
  "Show password": "Показать пароль",
  "Hide password": "Скрыть пароль",
  "Unlimited AI runs": "Безлимитные запуски ИИ",
  "{n} AI runs per day": "{n} запусков ИИ в день",
  "{n} AI runs per day|one": "{n} запуск ИИ в день",
  "{n} AI runs per day|few": "{n} запуска ИИ в день",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "Согласие на cookie",
  "We value your privacy": "Мы уважаем вашу приватность",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "oMyImage использует необходимые cookie для работы сайта, а аналитические — только с вашего согласия. Ваши изображения к этому никак не причастны.",
  "Accept All": "Принять все",
  "Reject All": "Отклонить все",
  "Customize": "Настроить",
  "Save preferences": "Сохранить настройки",
  "Back": "Назад",
  "Always on": "Всегда включены",
  "Cookie Settings": "Настройки cookie",
  "Necessary cookies": "Необходимые cookie",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "Нужны для базовой работы сайта: безопасности, запоминания темы и сохранения вашего выбора по cookie.",
  "Analytics cookies": "Аналитические cookie",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "Помогают понять, как посетители пользуются oMyImage, чтобы улучшать скорость и решать, какие инструменты делать дальше.",
  "Advertising cookies": "Рекламные cookie",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "Нужны для показа релевантной рекламы и оценки её эффективности. Сегодня на oMyImage рекламы нет — эта настройка хранится на случай, если что-то изменится.",
  "Functional cookies": "Функциональные cookie",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "Включают дополнительные возможности: сохранённые настройки и более персональный вид сайта.",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "Выберите изображения",
  "Select an image": "Выберите изображение",
  "Take photo": "Сделать фото",
  "Processed in your browser — your images never leave your device.":
    "Обрабатывается в вашем браузере — изображения не покидают устройство.",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "Обрабатывается на нашем сервере по зашифрованному соединению — файлы удаляются сразу после.",
  "or import from": "или загрузить из",
  "Connecting…": "Подключение…",
  "Add from {service}": "Добавить из {service}",
  "Import from {service}": "Загрузить из {service}",
  "Imported 1 file from Google Drive.": "Загружен 1 файл из Google Drive.",
  "Imported {n} files from Google Drive.": "Загружено {n} файлов из Google Drive.",
  "Imported {n} files from Google Drive.|one": "Загружен {n} файл из Google Drive.",
  "Imported {n} files from Google Drive.|few": "Загружено {n} файла из Google Drive.",
  "Imported 1 file from Dropbox.": "Загружен 1 файл из Dropbox.",
  "Imported {n} files from Dropbox.": "Загружено {n} файлов из Dropbox.",
  "Imported {n} files from Dropbox.|one": "Загружен {n} файл из Dropbox.",
  "Imported {n} files from Dropbox.|few": "Загружено {n} файла из Dropbox.",
  "Google Drive import failed.": "Не удалось загрузить из Google Drive.",
  "Dropbox import failed.": "Не удалось загрузить из Dropbox.",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "Выбранные файлы ({n})", // i18n-plural-invariant
  "Clear": "Очистить",
  "Add more files": "Добавить файлы",
  "Move earlier": "Переместить раньше",
  "Move later": "Переместить позже",
  "File view": "Вид файлов",
  "Grid view": "Сеткой",
  "List view": "Списком",
  "1 image": "1 изображение",
  "{n} images": "{n} изображений",
  "{n} images|one": "{n} изображение",
  "{n} images|few": "{n} изображения",
  "1 file": "1 файл",
  "{n} files": "{n} файлов",
  "{n} files|one": "{n} файл",
  "{n} files|few": "{n} файла",
  "Settings": "Настройки",
  "Close": "Закрыть",
  "Working…": "Обработка…",
  "{label} value": "Значение: {label}",
  "Options": "Параметры",
  "Clear image": "Убрать изображение",
  "Clear files": "Убрать файлы",
  "Change image": "Заменить изображение",
  "Remove": "Удалить",
  "Download": "Скачать",
  "Download {name}": "Скачать {name}",
  "Download ({size})": "Скачать ({size})",
  "Download all (ZIP)": "Скачать всё (ZIP)",
  "Result": "Результат",
  "Original": "Оригинал",
  "Process": "Обработать",
  "Processing…": "Обработка…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "Этот инструмент работает на сервере, поэтому большие изображения могут занять несколько секунд.",
  "Please select an image.": "Выберите изображение.",
  "Done — your image is ready.": "Готово — изображение можно скачать.",
  "Processing failed.": "Не удалось обработать.",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "Фон",
  "Background (replaces transparency)": "Фон (заменяет прозрачность)",
  "Auto — match the image's own edges": "Авто — подобрать по краям изображения",
  "Auto": "Авто",
  "Transparent": "Прозрачный",
  "Custom": "Свой",
  "Custom color": "Свой цвет",
  "Custom background color": "Свой цвет фона",
  "White": "Белый",
  "Black": "Чёрный",
  "Gray": "Серый",
  "Charcoal": "Графитовый",
  "Clay": "Терракотовый",
  "Red": "Красный",
  "Green": "Зелёный",
  "Blue": "Синий",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "Конвертация идёт в вашем браузере — файлы остаются на устройстве (очень большие изображения и снимки с высоким разрешением обрабатываются на нашем сервере).",
  "Please select {format} files.": "Выберите файлы {format}.",
  "Please select image files.": "Выберите файлы изображений.",
  "Converted 1 image to {format}.": "1 изображение конвертировано в {format}.",
  "Converted {n} images to {format}.": "{n} изображений конвертировано в {format}.",
  "Converted {n} images to {format}.|one": "{n} изображение конвертировано в {format}.",
  "Converted {n} images to {format}.|few": "{n} изображения конвертировано в {format}.",
  "Conversion failed.": "Не удалось конвертировать.",
  "Conversion settings": "Настройки конвертации",
  "Conversion Settings": "Настройки конвертации",
  "Converting…": "Конвертация…",
  "Total: {before} → {after}": "Всего: {before} → {after}",
  "1 file ready": "1 файл готов",
  "{n} files ready — downloads as a ZIP": "{n} файлов готово — скачаются одним ZIP",
  "{n} files ready — downloads as a ZIP|one": "{n} файл готов — скачается одним ZIP",
  "{n} files ready — downloads as a ZIP|few": "{n} файла готовы — скачаются одним ZIP",
  "Convert to {format}": "Конвертировать в {format}",
  "Convert {n} to {format}": "Конвертировать {n} в {format}", // i18n-plural-invariant
  "Output:": "Результат:",
  "Quality": "Качество",
  "Auto-rotate by EXIF orientation": "Автоповорот по EXIF",
  "Strip metadata": "Удалить метаданные",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "Убрать из готового изображения EXIF, цветовой профиль, данные камеры и геометку, чтобы уменьшить размер.",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "Обрезать и повернуть изображение",
  "Crop & rotate": "Обрезка и поворот",
  "Cancel": "Отмена",
  "Apply": "Применить",
  "Free": "Свободно",
  "Rotate left": "Повернуть влево",
  "Rotate right": "Повернуть вправо",
  "Select whole image": "Выделить всё изображение",
  "Reset": "Сбросить",
  "Output": "Результат",
  "Couldn't read this image.": "Не удалось прочитать это изображение.",
  "Compare original with result": "Сравнить с оригиналом",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "Область обрезки. Тяните внутри, чтобы переместить, за маркер — чтобы изменить размер, стрелками — по одному пикселю.",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "Объединённое изображение — тяните, чтобы переместить, за углы — чтобы изменить размер, за верхний маркер — чтобы повернуть",
  "Redaction area. Drag to paint over what you want hidden.":
    "Область скрытия. Проведите по тому, что хотите закрыть.",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "Область скрытия. Тяните, чтобы нарисовать область, щёлкните, чтобы выбрать, тяните за маркеры, чтобы изменить размер, Delete — удалить, стрелки — сдвинуть.",
  "Select your effect": "Выберите эффект",
  "Previous effects": "Предыдущие эффекты",
  "More effects": "Другие эффекты",
  "No blur": "Без размытия",
  "Gaussian": "Гауссово",
  "Colour": "Заливка",
  "Motion": "Смазывание",
  "Radial": "Радиальное",
  "Pixelate": "Пикселизация",
  "Glass": "Стекло",
  "Bloom": "Свечение",
  "Trippy waves": "Волны",
  "Halftone": "Растр",
  "Particle": "Частицы",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "Обработка завершена!",
  "Your image is ready for download": "Изображение готово к скачиванию",
  "Process more images": "Обработать ещё",
  "Your image": "Ваше изображение",
  "Your images ({n})": "Ваши изображения ({n})", // i18n-plural-invariant
  "Preparing ZIP…": "Готовим ZIP…",
  "Download all (.zip)": "Скачать всё (.zip)",
  "Download all ({n})": "Скачать всё ({n})", // i18n-plural-invariant
  "Continue with this file": "Продолжить с этим файлом",
  "Share or save this tool": "Поделиться инструментом или сохранить его",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "Скопируйте ссылку, поделитесь в соцсетях или добавьте страницу в закладки, чтобы вернуться.",
  "Copied": "Скопировано",
  "Copy link": "Скопировать ссылку",
  "Couldn't copy the link.": "Не удалось скопировать ссылку.",
  "Share": "Поделиться",
  "Share:": "Поделиться:",
  "(Ctrl + D to bookmark)": "(Ctrl + D — в закладки)",
  "Share on X": "Поделиться в X",
  "Share on Facebook": "Поделиться в Facebook",
  "Share on LinkedIn": "Поделиться в LinkedIn",
  "Share on WhatsApp": "Поделиться в WhatsApp",
  "Share on Telegram": "Поделиться в Telegram",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "Только что воспользовался инструментом «{tool}» на oMyImage — бесплатно, быстро, без регистрации.",
  "Free image tools on oMyImage.": "Бесплатные инструменты для изображений на oMyImage.",
  "Enjoyed the result?": "Понравился результат?",
  "Share your experience on Trustpilot — it helps a lot.":
    "Расскажите о своём опыте на Trustpilot — это очень помогает.",
  "Leave a review": "Оставить отзыв",

  // ── Toasts (sonner's own accessible names — ThemedToaster) ──────────────
  "Notifications": "Уведомления",
  "Close toast": "Закрыть уведомление",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "Премиум-инструмент",
  "Premium tool — Free plan includes a limited number per day":
    "Премиум-инструмент — на плане Free доступно ограниченное число запусков в день",
  "Runs on our server — {allowance}": "Работает на нашем сервере — {allowance}",
  "Added to Favorites": "Добавлено в избранное",
  "Removed from Favorites": "Убрано из избранного",
  "Add {tool} to favorites": "Добавить «{tool}» в избранное",
  "Remove {tool} from favorites": "Убрать «{tool}» из избранного",

  // ── Legal shell ─────────────────────────────────────────────────────────
  "Continue with Google": "Продолжить с Google",
  "or|divider": "или",
  "Legal|section": "Правовая информация",
  "Last updated:": "Обновлено:",
  "Contents": "Содержание",
  "On this page": "На этой странице",
  "Back to top": "Наверх",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "Не удалось скачать «{name}» из Dropbox.",
  "Could not download “{name}” from Google Drive.": "Не удалось скачать «{name}» из Google Drive.",
  "The Dropbox chooser failed to start.": "Не удалось запустить выбор файлов Dropbox.",
  "Unsupported image format: {name}": "Формат не поддерживается: {name}",
  "No frames found in this GIF.": "В этом GIF не найдено кадров.",
  "Canvas is not supported in this browser.": "Этот браузер не поддерживает canvas.",
  "Canvas not supported.": "Canvas не поддерживается.",
  "Could not export the image.": "Не удалось сохранить изображение.",
  "Add at least one frame.": "Добавьте хотя бы один кадр.",
  "Add at least one image.": "Добавьте хотя бы одно изображение.",
  "Server error ({status}).": "Ошибка сервера ({status}).",
  "Couldn't reach the processing server for this large file.":
    "Не удалось связаться с сервером обработки для такого большого файла.",
  "Couldn't reach the processing server.": "Не удалось связаться с сервером обработки.",
  "No image selected.": "Изображение не выбрано.",
  "The server did not start the job. Please try again.":
    "Сервер не начал обработку. Попробуйте ещё раз.",
  "Timed out waiting for the server to finish.": "Сервер не ответил вовремя.",
  "Upload an image.": "Загрузите изображение.",
  "This file is too large.": "Этот файл слишком большой.",
  "Too many processing requests. Please wait a moment.":
    "Слишком много запросов на обработку. Подождите немного.",
  "Too many requests. Please slow down and try again shortly.":
    "Слишком много запросов. Сбавьте темп и попробуйте чуть позже.",
  "Too many requests. Please slow down.": "Слишком много запросов. Сбавьте темп.",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "Для вашей сети исчерпан часовой лимит обработки. Попробуйте позже или войдите в аккаунт, чтобы получить больше.",
  "File not found or expired.": "Файл не найден или срок его хранения истёк.",
  "This OCR job was not found or has expired.":
    "Эта задача распознавания не найдена или срок её хранения истёк.",
  "That URL can't be reached — use a public http(s) address.":
    "Не удалось открыть этот адрес — укажите публичную ссылку http(s).",
  "Provide a width and/or height.": "Укажите ширину и/или высоту.",

  // ── Punctuation ─────────────────────────────────────────────────────────
  // Russian ends a sentence the same way English does, so both terminators are
  // deliberately identical to the key — stated rather than left to the
  // fallback, so `i18n:keys ru` stays at zero. Hindi maps these to the danda.
  ". |sentence-end": ". ", // i18n-same
  ".|sentence-end": ".", // i18n-same
};
