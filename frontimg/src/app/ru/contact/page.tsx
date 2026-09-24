import { ContactBody } from "@/app/contact/ContactBody";
import { ruContact } from "@/i18n/dictionaries/ru/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "ru",
  title: "Контакты — связаться с командой oMyImage",
  description:
    "Свяжитесь с командой oMyImage: поддержка, сообщения об ошибках, вопросы приватности и сотрудничество. Отвечаем в течение двух рабочих дней.",
});

export default function Page() {
  return <ContactBody locale="ru" dict={ruContact} />;
}
