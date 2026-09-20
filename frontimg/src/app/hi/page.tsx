import { HomeShell } from "@/components/HomeShell";
import { hiHome } from "@/i18n/dictionaries/hi/pages/home";
import { hiSite } from "@/i18n/dictionaries/hi/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";

/**
 * /hi — the Hindi home page. Same body as `/` (HomeShell); title and
 * description are written for the Indian SERP (dictionaries/hi/site.ts).
 */
const TITLE = "मुफ़्त ऑनलाइन इमेज टूल — फोटो कंप्रेस, रीसाइज़ और कन्वर्ट करें | oMyImage";

export const metadata = pageMetadata({
  englishPath: "/",
  locale: "hi",
  title: TITLE,
  description: hiSite.description,
});

export default function Page() {
  return <HomeShell locale="hi" dict={hiHome} description={hiSite.description} />;
}
