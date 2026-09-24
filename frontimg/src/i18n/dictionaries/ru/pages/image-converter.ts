import type { Dict } from "@/i18n/t";

/**
 * Russian strings for /ru/image-converter (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own
 * chrome and its FAQ. The hub therefore has to ship AFTER the converter
 * batches, which it does: pairs landed in batches 5 and 6.
 *
 * «Конвертировать из {format}» rather than «{format} → …»: {format} is always
 * a Latin name that does not inflect, so «из JPG» and «в PNG» are both safe.
 */
export const ruImageConverter: Dict = {
  // {n} is the live converter count — 40 today, so `many`, but it grows. At 41
  // it takes `one` and at 43 `few`, hence all three forms rather than an
  // invariant marker.
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} конвертеров форматов, и каждый сделан под конкретную пару, а не под общий выпадающий список. Выберите ниже формат своего файла. Всё бесплатно, работает пачкой и считается в вашем браузере — кроме случаев, когда сам формат этого не позволяет.",
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.|one":
    "{n} конвертер форматов, и каждый сделан под конкретную пару, а не под общий выпадающий список. Выберите ниже формат своего файла. Всё бесплатно, работает пачкой и считается в вашем браузере — кроме случаев, когда сам формат этого не позволяет.",
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.|few":
    "{n} конвертера форматов, и каждый сделан под конкретную пару, а не под общий выпадающий список. Выберите ниже формат своего файла. Всё бесплатно, работает пачкой и считается в вашем браузере — кроме случаев, когда сам формат этого не позволяет.",
  "Convert from {format}": "Конвертировать из {format}",
  "to {format}": "в {format}",
  "Frequently asked questions": "Частые вопросы",

  "Which image format should I convert to?": "В какой формат конвертировать?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "JPG — для фотографий, которые должны открываться везде. PNG — когда нужна прозрачность или файл без потерь, с которым предстоит работать дальше. WebP — когда файл идёт на веб-страницу и нужен самый лёгкий вариант, всё ещё умеющий прозрачность. AVIF ещё легче, но открыть его способно заметно меньше программ.",
  "Do these converters upload my images?": "Загружают ли эти конвертеры мои изображения?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "Почти все работают целиком внутри вашего браузера, поэтому изображение не покидает устройство. Исключения — форматы, которые браузер сам не умеет ни читать, ни записывать (главный из них HEIC), и их страницы говорят об этом прямо.",
  "Can I convert several files at once?": "Можно ли конвертировать несколько файлов сразу?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "Да. Любой конвертер здесь принимает пачку: добавьте сколько угодно файлов, и они вернутся одним ZIP, а не отдельными скачиваниями.",
  "Is there a file size limit?": "Есть ли ограничение на размер файла?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "Жёсткого ограничения нет. Очень большие изображения и снимки с очень высоким разрешением у большинства конвертеров уходят на наш сервер, потому что вкладка браузера не может нарисовать холст больше определённого размера: снимок с 48-мегапиксельной камеры упирается в этот потолок, даже если весит всего несколько мегабайт. Исключение — BMP: он всегда конвертируется прямо у вас.",
  "Do I lose quality when converting?": "Теряется ли качество при конвертации?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "Зависит от того, во что. PNG сохраняет без потерь, поэтому на этом шаге не теряется ничего. JPG, WebP и AVIF сжимают с потерями и кодируют изображение заново, хотя при разумном качестве разницу не видно. Многократные переходы между форматами с потерями урон накапливают, поэтому конвертируйте один раз и из лучшего оригинала, который у вас есть.",
};
