import type { Dict } from "@/i18n/t";

/**
 * Russian strings for the DATA-DRIVEN converter pages (conversion.md §6.4).
 *
 * These are the sentences `lib/converters/copy.ts` builds from — steps,
 * features, boilerplate FAQs, the security note — plus ConverterPage's own
 * chrome. The per-pair prose lives in `src/content/converters/<slug>.ru.ts`.
 *
 * A CONDITIONAL TAIL IS A WHOLE KEY, never a fragment. copy.ts picks between
 * two complete sentences depending on whether a pair offloads big files to the
 * server, so both variants appear here in full. Splitting them would force
 * Russian into English clause order.
 *
 * Placeholders `{from} {to} {offload} {mb} {name}` travel unchanged; `{from}`
 * and `{to}` are format names and stay Latin (JPG, WEBP, AVIF).
 *
 * CASE AGREEMENT — the {offload} fragment. It is interpolated into three
 * sentences, and Russian nouns inflect, so the fragment can only carry ONE
 * case while the sentences may want different ones. Two of the three use it as
 * a grammatical subject ("{offload} обрабатываются…", "Исключение — {offload}"),
 * which needs the nominative; the third originally read "кроме {offload}",
 * which needs the genitive. Rather than give up on one of them, the fragment is
 * NOMINATIVE and the third sentence was reworded to want the nominative too.
 *
 * This is the seam to watch in every Russian string built from parts: English
 * fragments compose freely because English barely inflects, and Russian does
 * not. Rendered output is the only way to catch it — the key list looks fine.
 *
 * Register: formal lowercase «вы», imperative plural — the same as the rest of
 * the locale. «Конвертировать» is the accepted loanword here and only here;
 * format conversion is the one place a native verb would read as a textbook.
 */
export const ruConverters: Dict = {
  // ── copy.ts: the offload fragment, interpolated into several sentences ──
  "very large or very high-resolution images":
    "очень большие изображения и снимки с высоким разрешением",

  // ── copy.ts: buildSteps ─────────────────────────────────────────────────
  "Add your {from} files": "Добавьте файлы {from}",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "Перетащите изображения {from} в окно или нажмите, чтобы выбрать. Добавляйте сколько угодно — они встанут в общую очередь.",
  "Choose your quality": "Выберите качество",
  "Drag the quality slider to trade file size against detail.":
    "Ползунок качества задаёт баланс между размером файла и детализацией.",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "Поскольку в {to} нет прозрачности, здесь же выбирается цвет, которым зальются прозрачные участки.",
  "The default suits most images — raise it for detailed photographs.":
    "Значение по умолчанию подходит большинству изображений — для детализированных фотографий поднимите его.",
  "Check the settings": "Проверьте настройки",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "Результат в {to} сохраняется без потерь и с прозрачностью, поэтому настраивать нечего. Автоповорот читает ориентацию из EXIF, чтобы вертикальные снимки не легли набок.",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "Результат в {to} сохраняется без потерь, поэтому настраивать нечего. Автоповорот читает ориентацию из EXIF, чтобы вертикальные снимки не легли набок.",
  "Convert and download": "Конвертируйте и скачайте",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "Нажмите «Конвертировать». Один файл сразу скачается как {to}; несколько придут вместе одним ZIP.",

  // ── copy.ts: buildFeatures ──────────────────────────────────────────────
  "Batch {from} → {to}": "Пачкой: {from} → {to}",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "Конвертируйте целую папку за один проход. Несколько файлов возвращаются одним ZIP, так что не придётся скачивать их по одному.",
  "Transparency survives": "Прозрачность сохраняется",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "Прозрачные участки {from} остаются прозрачными и в {to} — никакого белого прямоугольника за изображением.",
  "You pick the background": "Фон выбираете вы",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "{to} не хранит прозрачность, поэтому всё прозрачное приходится чем-то залить. Цвет выбираете вы, а не получаете белый по умолчанию.",
  "Quality you control": "Качество под вашим контролем",
  "Lossless output": "Результат без потерь",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "Ползунок качества вместо жёсткой заготовки — где провести границу между размером и детализацией, решаете вы.",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "{to} не теряет данных — на выходе то же изображение, пиксель в пиксель.",
  "No software to install": "Ничего не нужно устанавливать",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "Ничего не нужно скачивать и не нужно заводить аккаунт. Файлы передаются по HTTPS, конвертируются и затем удаляются с сервера.",
  "Private by default": "Приватно по умолчанию",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "Конвертация идёт прямо во вкладке вашего браузера. Файлы {from} никуда не загружаются. Исключение — {offload}.",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "Конвертация идёт прямо во вкладке вашего браузера. Файлы {from} никуда не загружаются.",

  // ── copy.ts: buildBoilerplateFaqs ───────────────────────────────────────
  "What happens to my files?": "Что происходит с моими файлами?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Для этой конвертации нужен сервер: браузер не умеет декодировать {from} самостоятельно. Файлы передаются по зашифрованному соединению HTTPS, конвертируются и затем удаляются — ни для чего другого они не используются.",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Для этой конвертации нужен сервер: браузер не умеет кодировать {to} самостоятельно. Файлы передаются по зашифрованному соединению HTTPS, конвертируются и затем удаляются — ни для чего другого они не используются.",
  "Are my images uploaded anywhere?": "Загружаются ли мои изображения куда-либо?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "Нет. Конвертация {from} в {to} целиком выполняется во вкладке браузера, поэтому данные изображения не покидают ваш компьютер. Единственное исключение — изображения, которые вкладка не может отрисовать: либо тяжелее {mb} МБ, либо со слишком большим числом мегапикселей для её canvas, чего снимок современного телефона достигает всего при нескольких МБ. Такие файлы отправляются по HTTPS на наш сервер и удаляются после конвертации, и инструмент об этом сообщает.",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "Нет. Конвертация {from} в {to} целиком выполняется во вкладке браузера, поэтому данные изображения не покидают ваш компьютер.",
  "How many {from} files can I convert at once?":
    "Сколько файлов {from} можно конвертировать за раз?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "Жёсткого ограничения нет. Добавьте большую пачку — файлы обработаются один за другим и вернутся одним ZIP. Очень большие пачки просто займут больше времени; вкладка при этом остаётся отзывчивой.",
  "Is there a watermark, sign-up or payment?": "Есть ли водяной знак, регистрация или оплата?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "Ни того, ни другого, ни третьего. Аккаунт не нужен, водяного знака на результате нет, платить не за что. Готовый файл — это ровно то изображение, которое вы конвертировали.",
  "Does this work on a phone?": "Работает ли это на телефоне?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "Да. Конвертер работает в мобильных браузерах на iOS и Android — изображения можно выбрать прямо из галереи, а результат попадёт в обычную папку загрузок.",

  // ── copy.ts: buildSecurity / buildPrivacyNote ───────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "Конвертация {from} в {to} — одна из немногих, которые нельзя выполнить в браузере, поэтому файл отправляется на обработку к нам на сервер. Передача шифруется по HTTPS, файл конвертируется сразу же и затем удаляется. Ничего не сохраняется, не индексируется и не используется для обучения моделей.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "Ваши изображения остаются на вашем устройстве. Конвертация {from} в {to} происходит целиком внутри браузера: нет ни этапа загрузки, ни копии на сервере, ни записи о том, что вы конвертировали. Единственное исключение — {offload}: они превышают то, что способна обработать вкладка браузера, поэтому передаются по HTTPS, конвертируются и удаляются.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "Ваши изображения остаются на вашем устройстве. Конвертация {from} в {to} происходит целиком внутри браузера: нет ни этапа загрузки, ни копии на сервере, ни записи о том, что вы конвертировали.",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "Конвертация на нашем сервере по зашифрованному соединению — файлы удаляются сразу после.",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "Конвертация в вашем браузере — файлы остаются на устройстве ({offload} обрабатываются на нашем сервере).",
  "Converted in your browser — your images never leave your device.":
    "Конвертация в вашем браузере — изображения не покидают ваше устройство.",

  // ── ConverterPage chrome ────────────────────────────────────────────────
  "Why convert {from} to {to}?": "Зачем конвертировать {from} в {to}?",
  "{from} and {to}, briefly": "Коротко о {from} и {to}",
  "How to convert {from} to {to}": "Как конвертировать {from} в {to}",
  "Going the other way?": "Нужно в обратную сторону?",
  "Convert {name}": "Конвертировать: {name}",
  "or drop {from} images here": "или перетащите сюда изображения {from}",
};
