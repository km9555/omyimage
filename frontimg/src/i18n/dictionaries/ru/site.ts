/**
 * Russian site-level copy — the brand tagline and the description used for the
 * `/ru` layout defaults, the Russian home page and its Open Graph card.
 *
 * Written for the SERP snippet, not as a translation of the English one. The
 * English tagline ("Effortless Power for Image Workflows") is a brand line with
 * no Russian search volume.
 *
 * Head term chosen from data, not taste: «сжать фото» outruns «сжать
 * изображение» about five to one and «сжать картинку» by fifty to one, so the
 * home copy leads with **фото**. «Изображение» stays available for the precise
 * technical sense, but it is not the word that gets typed.
 *
 * «Бесплатно» up front for the same reason «मुफ़्त» leads the Hindi line and  (i18n-charset-ok: quotes another locale on purpose)
 * «grátis» the Portuguese: on a Russian SERP full of freemium editors, free is
 * the word that decides the click. «Без регистрации» closes on the second
 * objection.
 *
 * The intro names the four highest-volume jobs in the order Russian demand
 * actually ranks them — улучшить качество, удалить фон, сжать, обрезать —
 * rather than the order the English page uses.
 */

export const ruSite = {
  tagline: "Бесплатные онлайн-инструменты для фото",
  description:
    "Бесплатные онлайн-инструменты для фото: улучшить качество, удалить фон, сжать, обрезать, изменить размер, сменить формат и поставить водяной знак. Файлы обрабатываются прямо в браузере — ничего не нужно устанавливать и не нужна регистрация.",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "Бесплатные онлайн-инструменты для фото",
  homeIntro:
    "Улучшите качество снимка, удалите фон, сожмите и обрежьте фото, смените формат — всё прямо в браузере, без установки программ и без регистрации.",
} as const;
