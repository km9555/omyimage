/**
 * Russian home page — HomeShell, HomeLauncher and ToolDirectory, which render
 * only on `/ru`. Loaded with that route through HomeShell's <I18nScope>, so
 * this prose is not bundled on every page (common.ts is).
 *
 * The H1 keeps "oMyImage" verbatim (Google's OAuth review matches it against
 * the consent screen) and pairs it with the Russian head term rather than a
 * translation of the English brand line — see dictionaries/ru/site.ts.
 * "drive.file" is an OAuth scope identifier and is never translated.
 *
 * The hero and the "Что можно делать" list both lead with **фото**, the word
 * Russians actually type (сжать фото beats сжать изображение ~5:1). The list
 * also opens on улучшить качество, because that is the single highest-volume
 * job in this market by roughly ten times — not compression, which leads the
 * English, Portuguese and Hindi pages.
 */
export const ruHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser":
    "Бесплатные инструменты — большинство работает прямо в браузере",
  "Effortless Power for Image Workflows.": "Бесплатные онлайн-инструменты для фото.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "oMyImage — это бесплатный набор онлайн-инструментов для фото: сжать, изменить размер, обрезать, сменить формат, поставить водяной знак и отредактировать.",
  "Step 1 · Upload your images": "Шаг 1 · Загрузите фото",
  "Add images": "Добавить фото",
  "Drag & drop images or click to browse": "Перетащите файлы сюда или нажмите, чтобы выбрать",
  "+ More": "+ Ещё",
  "Remove {name}": "Убрать {name}",
  "Step 2 · Choose an action": "Шаг 2 · Выберите действие",
  "Upload an image first": "Сначала загрузите фото",
  "Search an action, e.g. compress or resize":
    "Найдите действие, например «сжать» или «изменить размер»",
  "We can't process this file type yet.": "Мы пока не умеем обрабатывать такой тип файлов.",
  "No matching action.": "Подходящее действие не найдено.",
  "Continue": "Продолжить",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "Приватно по умолчанию",
  "Most tools run in your browser, so your images never leave your device.":
    "Большинство инструментов работает в браузере, поэтому фото не покидают ваше устройство.",
  "{n} free image tools": "{n} бесплатных инструментов для фото",
  "{n} free image tools|one": "{n} бесплатный инструмент для фото",
  "{n} free image tools|few": "{n} бесплатных инструмента для фото",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "Сжать, изменить размер, сменить формат, отредактировать, сделать GIF. Без регистрации.",
  "Google Drive import is optional": "Загрузка из Google Drive — по желанию",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "oMyImage читает только выбранные вами файлы и ничего не сохраняет на своих серверах.",
  "How we use Google data": "Как мы используем данные Google",
  "Favorites": "Избранное",
  "No tools in {category} yet.": "В разделе «{category}» пока нет инструментов.",
  "Browse all image format converters": "Все конвертеры форматов",
  "All tools": "Все инструменты",
  "Tool categories": "Категории инструментов",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Как это работает",
  "Upload": "Загрузите",
  "Drop in your images or pick them from your device.":
    "Перетащите фото или выберите их на устройстве.",
  "Transform": "Обработайте",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "Выберите инструмент и настройте параметры. Обработка идёт в браузере, а самые тяжёлые задачи — на наших серверах.",
  "Download|step": "Скачайте",
  "Save the result to your device, ready to use.":
    "Сохраните результат на устройство — он сразу готов к работе.",
  "About oMyImage": "Об oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "— это бесплатный набор онлайн-инструментов для повседневной работы с изображениями. Одно место, где можно сжать, изменить размер, обрезать, повернуть, сменить формат, поставить водяной знак, отредактировать и анимировать: {n} инструментов, и у каждого своя страница, которая хорошо делает одно дело.",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.|one":
    "— это бесплатный набор онлайн-инструментов для повседневной работы с изображениями. Одно место, где можно сжать, изменить размер, обрезать, повернуть, сменить формат, поставить водяной знак, отредактировать и анимировать: {n} инструмент, и у каждого своя страница, которая хорошо делает одно дело.",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.|few":
    "— это бесплатный набор онлайн-инструментов для повседневной работы с изображениями. Одно место, где можно сжать, изменить размер, обрезать, повернуть, сменить формат, поставить водяной знак, отредактировать и анимировать: {n} инструмента, и у каждого своя страница, которая хорошо делает одно дело.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "Большинство инструментов работает целиком внутри браузера: изображение обрабатывается на вашем устройстве и никуда не загружается. Крупные файлы и самые тяжёлые инструменты с ИИ обрабатываются на наших серверах и удаляются вскоре после завершения задачи. oMyImage бесплатен, и аккаунт для него не нужен.",
  "What you can do with oMyImage": "Что можно делать в oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Сжимать JPG, PNG и WEBP без заметной потери качества",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Менять размер, обрезать, поворачивать и добавлять рамки — по одному файлу или пачкой",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Конвертировать между JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC и PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Редактировать фото: водяной знак, чёрно-белое, размытие, мемы и полноценный редактор",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "Создавать и редактировать GIF: из фото или видео, со сжатием, изменением размера, обрезкой, подписями и конвертацией в MP4 или WebP",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "Распознавать текст, смотреть или стирать EXIF, определять цвета",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Инструменты с ИИ: улучшить качество снимка, удалить фон, размыть лица",
  "How oMyImage uses your Google account": "Как oMyImage использует ваш аккаунт Google",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Подключение Google необязательно — все инструменты oMyImage работают и без него. Google нужен для двух вещей: для входа в аккаунт, если вы решите его создать, и для функции",
  "Import from Google Drive": "Загрузка из Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    " — она позволяет выбрать изображение, которое уже лежит у вас на Drive, вместо того чтобы загружать его с устройства.",
  // HomeShell renders `A{" "}<code>drive.file</code>{" "}B`, so B must not open
  // on punctuation: the original ". Оно…" printed «drive.file . Оно даёт» —
  // a space before the full stop. A spaced em dash is correct Russian
  // punctuation here, and the same answer Portuguese uses.
  "When you use Drive import, oMyImage requests the":
    "Когда вы загружаете файлы из Google Drive, oMyImage запрашивает разрешение",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "— оно даёт приложению доступ только к тем файлам, которые вы сами выбрали в файловом окне Google, — остальную часть Drive оно не видит, не просматривает и не ищет по ней. Выбранный файл скачивается в ваш браузер для того инструмента, которым вы пользуетесь, и на этом всё: oMyImage ничего не меняет и не удаляет на вашем Drive, не хранит ваши файлы Google на своих серверах, не обучает на данных пользователей Google модели ИИ и никогда не продаёт и не передаёт их третьим лицам.",
  "You can revoke access at any time from your": "Отозвать доступ можно в любой момент —",
  "Google Account permissions page": "на странице разрешений вашего аккаунта Google",
  "Contact us": "Связаться с нами",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "Размеры и пресеты",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "Ярлыки к инструментам выше, каждый настроен под одну задачу: фото ровно на 50 КБ, превью для YouTube, фото на документы.",
  "Exact file size": "Точный размер файла",
  "Hit the exact size a form or upload asks for":
    "Ровно тот размер, который требует форма или сайт",
  "PDF under a size limit": "PDF с ограничением размера",
  "Scans and photos as a PDF that fits an upload cap":
    "Сканы и фото в PDF, который пройдёт по лимиту загрузки",
  "Country-standard photo sizes, ready to print":
    "Стандартные размеры разных стран, готовые к печати",
  "Social and print sizes": "Размеры для соцсетей и печати",
  "Thumbnails, covers and print dimensions, ready to go":
    "Превью, обложки и размеры для печати — уже настроены",
  "AI presets": "Пресеты с ИИ",
  "Sharpen photos or swap the background in one click": "Чёткое фото или новый фон в один клик",
  "Quick edits": "Быстрые правки",
  "Flip, split and other one-step jobs": "Отразить, разрезать и другие задачи в один шаг",
  "KB": "КБ",
  "MB": "МБ",
};
