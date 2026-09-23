import { ContactBody } from "@/app/contact/ContactBody";
import { hiContact } from "@/i18n/dictionaries/hi/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "hi",
  title: "संपर्क — oMyImage टीम से बात करें",
  description:
    "oMyImage टीम से बात करें: सहायता, गड़बड़ी की शिकायत, प्राइवेसी से जुड़े सवाल और कारोबारी बातें। हम दो कामकाजी दिनों में जवाब देते हैं।",
});

export default function Page() {
  return <ContactBody locale="hi" dict={hiContact} />;
}
