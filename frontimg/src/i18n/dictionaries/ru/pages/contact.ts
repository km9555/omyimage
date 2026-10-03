import type { Dict } from "@/i18n/t";

/**
 * Russian strings for /ru/contact (ContactBody).
 *
 * The support address itself is never translated, and neither are the legal
 * page names in the footer — those are links whose labels come from this file
 * so they read as the Russian pages they point at.
 *
 * The tool count is no longer written out anywhere: the English source now
 * interpolates `{n}` from LIVE_TOOL_COUNT, so the number cannot drift from the
 * registry again. Russian needs all three integer forms for it — see below.
 */
export const ruContact: Dict = {
  "Contact": "Контакты",
  "Get in touch": "Напишите нам",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "Мы читаем всё, что приходит, и обычно отвечаем в течение двух рабочих дней. Вполне возможно, что ответ уже есть ниже.",

  // Channels
  "Support & bug reports": "Поддержка и сообщения об ошибках",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "Что-то не работает или инструмент выдал странный результат? Напишите, какой это был инструмент, какой у вас браузер и чего вы ожидали, — обычно этого достаточно, чтобы мы воспроизвели проблему.",
  "Privacy & legal": "Приватность и юридические вопросы",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "Вопросы о том, как мы обращаемся с вашими данными, требования об удалении материалов и всё, что касается наших условий.",
  "Business & partnerships": "Сотрудничество",
  "Bulk use, integrations, or anything commercial.": "Использование в больших объёмах, интеграции и любые коммерческие вопросы.",

  // No-form note
  "Why there's no contact form:": "Почему здесь нет формы обратной связи:",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "форма означала бы сбор и хранение ваших данных на наших серверах. Почта оставляет это между вами и нами — на {site} о вас не хранится вообще ничего.",

  // FAQ
  "Before you write": "Прежде чем писать",
  "Is oMyImage free?": "oMyImage бесплатный?",
  // {n} is the live tool count — 40 today, so `many`, but it grows. At 41 it
  // takes `one` and at 42 `few`, so all three forms are spelled out: «Все 41
  // инструмент доступен», «Все 42 инструмента доступны».
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "Да. Все {n} инструментов доступны бесплатно и без регистрации. Платные планы задуманы для файлов побольше и большего числа запусков ИИ, но сегодня ничего платного здесь нет.",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.|one":
    "Да. Все {n} инструмент доступен бесплатно и без регистрации. Платные планы задуманы для файлов побольше и большего числа запусков ИИ, но сегодня ничего платного здесь нет.",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.|few":
    "Да. Все {n} инструмента доступны бесплатно и без регистрации. Платные планы задуманы для файлов побольше и большего числа запусков ИИ, но сегодня ничего платного здесь нет.",
  "Are my images uploaded?": "Загружаются ли мои изображения?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "У большинства инструментов — нет: они работают целиком в вашем браузере, и файл не покидает устройство. Загрузка происходит только для изображений, слишком больших для вкладки браузера, для инструментов с ИИ и для конвертации HEIC. Каждый из них говорит об этом на своей странице.",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "Почему конвертация HEIC загружает мой снимок, а остальные инструменты нет?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "Для чтения HEIC нужна библиотека, которую мы не вправе доставить в браузер по её лицензии, поэтому именно эта конвертация вынуждена работать на нашем сервере. Файл удаляется примерно в течение часа.",
  "How long do you keep processed files?": "Сколько вы храните обработанные файлы?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "Результаты, обработанные на сервере, удаляются автоматически примерно в течение часа. Резервных копий мы не храним и ваши изображения никогда не используем повторно.",
  "A tool says it isn't enabled on this server.": "Инструмент пишет, что не подключён на этом сервере.",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "Так сообщают инструменты с ИИ или конвертация HEIC, когда их движок не установлен на сервере. Это состояние развёртывания, а не проблема с вашим файлом.",
  "Can I use the output commercially?": "Можно ли использовать результат в коммерческих целях?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "Да. Ваши изображения остаются вашими, и всё, что вы здесь получаете, можно использовать в любых законных целях.",

  // Footer links
  "Privacy Policy": "Политика конфиденциальности",
  "Terms of Service": "Условия использования",
  "Refund Policy": "Политика возврата",
  "Pricing": "Цены",
};
