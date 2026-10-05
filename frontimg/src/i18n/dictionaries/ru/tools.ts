/**
 * Russian tool names + short descriptions, keyed by tool **id**, plus the four
 * category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the Russian build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see conversion.md §10) ──────────────
 * Formal lowercase **вы**, imperative plural (**сожмите**, **обрежьте**). A
 * description that is a full sentence ends in a full stop; a fragment does not.
 *
 * **«Фото», not «изображение», in the NAME.** This is measured: «сжать фото»
 * has roughly five times the volume of «сжать изображение» and fifty times
 * «сжать картинку». The name is what a searcher scans for in a menu and in a
 * SERP title, so it carries the word they typed. «Изображение» is kept for the
 * technical object inside descriptions, where precision reads better than
 * repetition — and it also stops forty cards all beginning with the same word.
 *
 * **Verbs are native Russian** — сжать, обрезать, удалить, повернуть,
 * улучшить, размыть. The one accepted loanword family is конвертировать /
 * конвертер, and only for format pairs, which is how Russians actually search
 * («конвертировать heic в jpg», 320/mo).
 *
 * Format and product names stay Latin: JPG, PNG, WEBP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR. Their Cyrillic spellings live in
 * aliases.ts so the search box finds «джипег» as well as JPG.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
}

export const ruTools: Record<string, LocalizedTool> = {
  // ── Оптимизация ────────────────────────────────────────────────────────
  "compress-image": {
    name: "Сжать фото",
    shortDescription: "Уменьшите вес JPG, PNG и WEBP — качество выбираете вы.",
  },
  "resize-image": {
    name: "Изменить размер фото",
    shortDescription: "Задайте размер в пикселях или процентах, пропорции сохранятся.",
  },
  "crop-image": {
    name: "Обрезать фото",
    shortDescription: "Кадрируйте под 1:1, 16:9, 3:4 или любой свой размер.",
  },
  "rotate-image": {
    name: "Повернуть фото",
    shortDescription: "Поверните на 90°, выровняйте горизонт или отразите зеркально.",
  },

  // ── Конвертация ────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "Конвертировать в JPG",
    shortDescription: "PNG, WEBP, GIF, BMP и AVIF — в обычный JPG.",
  },
  "png-to-jpg": {
    name: "PNG в JPG",
    shortDescription: "Сделайте файл легче и добавьте фон вместо прозрачности.",
  },
  "jpg-to-png": {
    name: "JPG в PNG",
    shortDescription: "Формат без потерь для дальнейшего редактирования.",
  },
  "webp-to-png": {
    name: "WEBP в PNG",
    shortDescription: "Откройте WEBP там, где его не поддерживают, — с прозрачностью.",
  },
  "heic-to-png": {
    name: "HEIC в PNG",
    shortDescription: "Снимки с iPhone — в PNG без потери качества.",
  },
  "image-to-text": {
    name: "Текст с картинки",
    shortDescription: "Распознайте текст на фото, скане или скриншоте и скопируйте его.",
  },
  "webp-to-jpg": {
    name: "WEBP в JPG",
    shortDescription: "Универсальный формат для отправки и печати.",
  },
  "jpg-to-webp": {
    name: "JPG в WEBP",
    shortDescription: "Меньше вес при том же качестве — для сайта.",
  },
  "png-to-webp": {
    name: "PNG в WEBP",
    shortDescription: "Прозрачность сохраняется, файл становится заметно легче.",
  },
  "jfif-to-jpg": {
    name: "JFIF в JPG",
    shortDescription: "Переименование не помогает — сделайте настоящий JPG.",
  },
  "gif-to-png": {
    name: "GIF в PNG",
    shortDescription: "Первый кадр GIF — в PNG с прозрачностью.",
  },
  "gif-to-jpg": {
    name: "GIF в JPG",
    shortDescription: "Кадр из GIF — в лёгкий JPG.",
  },
  "bmp-to-jpg": {
    name: "BMP в JPG",
    shortDescription: "Тяжёлые BMP со сканера — в компактный JPG.",
  },
  "avif-to-jpg": {
    name: "AVIF в JPG",
    shortDescription: "Новый формат — в тот, который открывает любая программа.",
  },
  "avif-to-png": {
    name: "AVIF в PNG",
    shortDescription: "AVIF в PNG без потерь и с прозрачностью.",
  },
  "heic-to-jpg": {
    name: "HEIC в JPG",
    shortDescription: "Фото с iPhone, которые не открывает Windows, — в обычный JPG.",
  },
  "image-to-pdf": {
    name: "Фото в PDF",
    shortDescription: "Соберите снимки в один PDF — порядок и размер страницы ваши.",
  },
  "image-to-base64": {
    name: "Фото в Base64",
    shortDescription: "Готовая data-строка для CSS, HTML или письма.",
  },
  "base64-to-image": {
    name: "Base64 в фото",
    shortDescription: "Вставьте строку Base64 и скачайте готовый файл.",
  },
  "gif-to-images": {
    name: "GIF на кадры",
    shortDescription: "Разберите GIF на отдельные картинки — все сразу в ZIP.",
  },

  // ── Редактирование и создание ──────────────────────────────────────────
  "image-editor": {
    name: "Редактор фото",
    shortDescription: "Обрежьте, поверните, настройте цвет и добавьте текст.",
  },
  "watermark-image": {
    name: "Водяной знак на фото",
    shortDescription: "Поставьте подпись или логотип — на одно фото или на все сразу.",
  },
  "meme-generator": {
    name: "Генератор мемов",
    shortDescription: "Верхняя и нижняя надпись в классическом стиле — за пару секунд.",
  },
  "html-to-image": {
    name: "HTML в изображение",
    shortDescription: "Снимок страницы по ссылке или из вашего HTML.",
  },
  "blur-face": {
    name: "Размыть лицо на фото",
    shortDescription: "Скройте лица, номера машин и документы — распознавание автоматическое.",
  },
  "grayscale-image": {
    name: "Чёрно-белое фото",
    shortDescription: "Переведите снимок в оттенки серого одним нажатием.",
  },
  "blur-image": {
    name: "Размыть фото",
    shortDescription: "Размойте весь кадр или только выбранные участки.",
  },
  "add-border": {
    name: "Рамка на фото",
    shortDescription: "Добавьте поля или рамку — цвет и толщина настраиваются.",
  },
  "circle-crop": {
    name: "Круглое фото",
    shortDescription: "Вырежьте круг для аватара — с прозрачным фоном.",
  },
  "merge-images": {
    name: "Объединить фото",
    shortDescription: "Соедините снимки по горизонтали, вертикали или сеткой.",
  },
  "image-color-picker": {
    name: "Цвета с фото",
    shortDescription: "Определите цвет в точке и соберите палитру — HEX и RGB.",
  },
  "image-metadata": {
    name: "Метаданные фото",
    shortDescription: "Посмотрите EXIF, камеру, дату и геометку снимка.",
  },
  "remove-exif": {
    name: "Удалить EXIF",
    shortDescription: "Сотрите геометку и данные камеры перед публикацией.",
  },
  "gif-maker": {
    name: "Создать GIF",
    shortDescription: "Соберите анимацию из своих фото — скорость и порядок ваши.",
  },

  // ── ИИ ─────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "Удалить фон",
    shortDescription: "Уберите фон с фото автоматически — останется только объект.",
  },
  "upscale-image": {
    name: "Улучшить качество фото",
    shortDescription: "Увеличьте снимок и поднимите резкость — без мыла и артефактов.",
  },

  // ── Варианты: сжатие до заданного веса (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "Уменьшить вес фото в КБ",
    shortDescription: "Уложите фото в любой лимит в КБ или МБ.",
  },
  "compress-image-to-20kb": {
    name: "Сжать фото до 20 КБ",
    shortDescription: "Фото и подпись меньше 20 КБ для анкет.",
  },
  "compress-image-to-50kb": {
    name: "Сжать фото до 50 КБ",
    shortDescription: "Частый лимит для фото в анкетах.",
  },
  "compress-image-to-100kb": {
    name: "Сжать фото до 100 КБ",
    shortDescription: "Чёткие фото и сканы меньше 100 КБ.",
  },
  "compress-image-to-200kb": {
    name: "Сжать фото до 200 КБ",
    shortDescription: "Фото и сканы документов меньше 200 КБ.",
  },
  "compress-image-to-1mb": {
    name: "Сжать фото до 1 МБ",
    shortDescription: "Фото с телефона меньше 1 МБ, обычно в полном размере.",
  },
  "compress-image-to-10kb": {
    name: "Сжать фото до 10 КБ",
    shortDescription: "Подписи и маленькие фото меньше 10 КБ.",
  },
  "compress-image-to-30kb": {
    name: "Сжать фото до 30 КБ",
    shortDescription: "Фото для анкет меньше 30 КБ, лицо остаётся чётким.",
  },
  "compress-image-to-300kb": {
    name: "Сжать фото до 300 КБ",
    shortDescription: "Фото и сканы меньше 300 КБ, текст читается.",
  },
  "compress-image-to-500kb": {
    name: "Сжать фото до 500 КБ",
    shortDescription: "Фото, сканы и скриншоты меньше 500 КБ.",
  },
  "compress-image-to-2mb": {
    name: "Сжать фото до 2 МБ",
    shortDescription: "Большие фото с телефона меньше 2 МБ.",
  },
  "compress-image-to-15kb": {
    name: "Сжать фото до 15 КБ",
    shortDescription: "Подписи и маленькие фото меньше 15 КБ.",
  },
  "compress-image-to-40kb": {
    name: "Сжать фото до 40 КБ",
    shortDescription: "Фото для анкет меньше 40 КБ, лицо чёткое.",
  },
  "compress-image-to-150kb": {
    name: "Сжать фото до 150 КБ",
    shortDescription: "Фото и рукописные страницы меньше 150 КБ.",
  },
  "increase-image-size-in-kb": {
    name: "Увеличить размер фото в КБ",
    shortDescription: "Сделайте фото не меньше 10, 20 или 50 КБ.",
  },
  "signature-resizer": {
    name: "Изменить размер подписи",
    shortDescription: "Очистить, обрезать и уменьшить подпись.",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG в PDF до 100 КБ",
    shortDescription: "Одностраничный PDF до 100 КБ для строгих форм.",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG в PDF до 200 КБ",
    shortDescription: "Справки и сканы в одном PDF до 200 КБ.",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG в PDF до 300 КБ",
    shortDescription: "Многостраничные документы в PDF до 300 КБ.",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG в PDF до 500 КБ",
    shortDescription: "Длинные документы в одном PDF до 500 КБ.",
  },

  // ── Варианты: HD, отражение, фон (expansion.md) ──
  "image-to-hd": {
    name: "Фото в HD",
    shortDescription: "Сделайте маленькое или нечёткое фото HD.",
  },
  "unblur-image": {
    name: "Убрать размытие с фото",
    shortDescription: "ИИ делает чётче слегка размытые фото.",
  },
  "flip-image": {
    name: "Отразить фото",
    shortDescription: "Зеркальное отражение по горизонтали или вертикали.",
  },
  "change-background-color": {
    name: "Поменять цвет фона",
    shortDescription: "Белый, синий или красный фон для любого фото.",
  },
  "blur-background": {
    name: "Размыть фон",
    shortDescription: "Эффект портрета за человеком или предметом.",
  },
  "passport-photo-maker": {
    name: "Фото на документы",
    shortDescription: "Фото на паспорт, визу и документы, с листом для печати.",
  },
  "3x4-photo": {
    name: "Фото 3x4 на документы",
    shortDescription: "Фото 3 × 4 см: кадрирование и лист для печати.",
  },
  "2x2-photo": {
    name: "Фото 2x2 на визу США",
    shortDescription: "Фото 2 × 2 дюйма для визы и паспорта США.",
  },
};

/**
 * Category labels. `title` is the full heading, `navLabel` the short pill /
 * breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const ruCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "Оптимизация и сжатие", navLabel: "Оптимизация" },
  convert: { title: "Конвертация изображений", navLabel: "Конвертация" },
  edit: { title: "Редактирование и создание", navLabel: "Редактор" },
  ai: { title: "Инструменты с ИИ", navLabel: "ИИ для фото" },
};
