import { HomeShell } from "@/components/HomeShell";
import { ruHome } from "@/i18n/dictionaries/ru/pages/home";
import { ruSite } from "@/i18n/dictionaries/ru/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /ru — the Russian home page. Same body as `/` (HomeShell); title and
 * description are written for the Russian SERP (dictionaries/ru/site.ts).
 *
 * The title leads with «улучшить качество» rather than compression, because
 * that is the highest-volume job in this market by roughly ten to one — the
 * opposite of the order the English, Portuguese and Hindi home titles use.
 */
const TITLE =
  "Бесплатные онлайн-инструменты для фото — улучшить качество, сжать, обрезать | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "ru",
  title: TITLE,
  description: ruSite.description,
});

export default function Page() {
  return <HomeShell locale="ru" dict={ruHome} description={ruSite.description} />;
}
