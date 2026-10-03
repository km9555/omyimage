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
  "Most tools run right in your browser, so files never leave your device. No signup.":
    "Большинство инструментов работает прямо в браузере, поэтому файлы не покидают ваше устройство. Регистрация не нужна.",
  "Step 1 · Upload your images": "Шаг 1 · Загрузите фото",
  "Add images": "Добавить фото",
  "Drag & drop images or click to browse": "Перетащите файлы сюда или нажмите, чтобы выбрать",
  "+ More": "+ Ещё",
  "Remove {name}": "Убрать {name}",
  "Step 2 · Choose an action": "Шаг 2 · Выберите действие",
  "Upload an image first": "Сначала загрузите фото",
  "What do you want to do? — e.g. compress, resize":
    "Что нужно сделать? — например, сжать, изменить размер",
  "We can't process this file type yet.": "Мы пока не умеем обрабатывать такой тип файлов.",
  "No matching action.": "Подходящее действие не найдено.",
  "Continue": "Продолжить",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "is a free online image toolkit — over thirty tools to compress, resize, crop, convert, watermark and edit images, most running entirely in your browser so your files never leave your device. Importing from Google Drive is optional, reads only the files you pick, and never stores them on our servers.":
    "— это бесплатный набор онлайн-инструментов: больше тридцати инструментов, чтобы сжать, изменить размер, обрезать, сменить формат, поставить водяной знак и отредактировать изображения. Большинство работает полностью в браузере, поэтому файлы не покидают ваше устройство. Загрузка из Google Drive необязательна, читает только выбранные вами файлы и никогда не сохраняет их на наших серверах.",
  "What is oMyImage?": "Что такое oMyImage?",
  "How we use Google data": "Как мы используем данные Google",
  "Favorites": "Избранное",
  "No tools in {category} yet.": "В разделе «{category}» пока нет инструментов.",
  "Browse all image format converters": "Все конвертеры форматов",
  // CATEGORY_PILLS (lib/tool-categories.ts — module scope, §4.2). "Optimize",
  // "Convert" and "Image AI" are already in common.ts.
  "All": "Все",
  "Edit & Create": "Редактор и создание",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Как это работает",
  "Upload": "Загрузите",
  "Drag & drop your images securely into our processing engine.":
    "Перетащите фото — они попадут в обработку по защищённому соединению.",
  "Transform": "Обработайте",
  "Pick a tool and let your browser — or our servers — do the heavy lifting.":
    "Выберите инструмент, а тяжёлую работу возьмёт на себя ваш браузер — или наши серверы.",
  "Download|step": "Скачайте",
  "Get your optimized images back, ready for your workflow.":
    "Заберите готовые файлы — можно сразу пускать в дело.",
  "About oMyImage": "Об oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark and edit images — over thirty tools, each one a dedicated page that does one job well.":
    "— это бесплатный набор онлайн-инструментов для повседневной работы с изображениями. Одно место, где можно сжать, изменить размер, обрезать, повернуть, сменить формат, поставить водяной знак и отредактировать: больше тридцати инструментов, и у каждого своя страница, которая хорошо делает одно дело.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files, and the AI tools that need real hardware, are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "Большинство инструментов работает целиком внутри браузера: изображение обрабатывается на вашем устройстве и никуда не загружается. Крупные файлы и инструменты с ИИ, которым нужно настоящее железо, обрабатываются на наших серверах и удаляются вскоре после завершения задачи. oMyImage бесплатен, и аккаунт для него не нужен.",
  "What you can do with oMyImage": "Что можно делать в oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Сжимать JPG, PNG и WEBP без заметной потери качества",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Менять размер, обрезать, поворачивать и добавлять рамки — по одному файлу или пачкой",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Конвертировать между JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC и PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Редактировать фото: водяной знак, чёрно-белое, размытие, мемы и полноценный редактор",
  "Extract text with OCR, read or strip EXIF metadata, pick colours":
    "Распознавать текст, смотреть или стирать EXIF, определять цвета",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Инструменты с ИИ: улучшить качество снимка, удалить фон, размыть лица",
  "How oMyImage uses your Google account": "Как oMyImage использует ваш аккаунт Google",
  "Connecting Google is optional — every tool on oMyImage works without it. It exists for one feature:":
    "Подключение Google необязательно — все инструменты oMyImage работают и без него. Оно нужно ровно для одной возможности:",
  "Import from Google Drive": "Загрузка из Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    " — она позволяет выбрать изображение, которое уже лежит у вас на Drive, вместо того чтобы загружать его с устройства.",
  // HomeShell renders `A{" "}<code>drive.file</code>{" "}B`, so B must not open
  // on punctuation: the original ". Оно…" printed «drive.file . Оно даёт» —
  // a space before the full stop. A spaced em dash is correct Russian
  // punctuation here, and the same answer Portuguese uses.
  "When you use it, oMyImage requests the": "При её использовании oMyImage запрашивает разрешение",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "— оно даёт приложению доступ только к тем файлам, которые вы сами выбрали в файловом окне Google, — остальную часть Drive оно не видит, не просматривает и не ищет по ней. Выбранный файл скачивается в ваш браузер для того инструмента, которым вы пользуетесь, и на этом всё: oMyImage ничего не меняет и не удаляет на вашем Drive, не хранит ваши файлы Google на своих серверах, не обучает на данных пользователей Google модели ИИ и никогда не продаёт и не передаёт их третьим лицам.",
  "You can revoke access at any time from your": "Отозвать доступ можно в любой момент —",
  "Google Account permissions page": "на странице разрешений вашего аккаунта Google",
  "Contact us": "Связаться с нами",
};
