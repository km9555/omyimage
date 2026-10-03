import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";

/**
 * Russian cookie policy — the same structure and the same section ids as
 * /cookies, with only the prose translated. The ids are the TOC anchors and a
 * contract across locales: never rename one on a single side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5): the prose
 * is dense with inline <code> and <strong>, and a dictionary of sentence
 * fragments would either lose that markup or force Russian into English word
 * order. oMyPDF reached the same conclusion for its four locales.
 *
 * Storage keys, cookie names and domains stay in Latin — the reader has to
 * match them against what their own browser shows. Browser MENU paths are
 * given in Russian, because Russian-language Chrome, Firefox and Edge are the
 * norm in this market and their menus really do read «Настройки → Конфиденциальность»
 * — unlike Hindi, where the browser UI is usually English and the hi twin
 * therefore keeps the English label in brackets.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "ru",
    title: "Политика в отношении cookie | oMyImage",
    description:
      "Что oMyImage сохраняет в вашем браузере, зачем и как этим управлять. По умолчанию только необходимое — аналитика не включается, пока вы не разрешите.",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. Что такое cookie" },
  { id: "consent", title: "2. Ваше согласие" },
  { id: "types", title: "3. Что мы сохраняем" },
  { id: "third", title: "4. Cookie третьих сторон" },
  { id: "control", title: "5. Как управлять cookie" },
  { id: "changes", title: "6. Изменения в этой политике" },
  { id: "contact", title: "7. Контакты" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="ru"
      title="Политика в отношении cookie"
      subtitle="Что oMyImage сохраняет в вашем браузере, зачем это сохраняется и как изменить своё решение."
      updated="19 августа 2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. Что такое cookie">
        <LegalCallout>
          oMyImage не устанавливает собственных cookie. Он сохраняет несколько записей в{" "}
          <strong>локальном хранилище</strong>, которые никогда не покидают ваше устройство, и —
          только если вы разрешите — аналитические cookie Google. Ваши изображения ко всему этому не
          имеют никакого отношения.
        </LegalCallout>
        <LegalP>
          Cookie — это небольшие текстовые файлы, которые сайт сохраняет на вашем устройстве при
          посещении. Обычно они нужны, чтобы сайт работал, запоминал ваши настройки и показывал
          владельцам, как им пользуются. Cookie бывают «сеансовыми» — они исчезают при закрытии
          браузера — и «постоянными», которые хранятся заданный срок или пока вы их не удалите.
        </LegalP>
        <LegalP>
          К близким технологиям относятся веб-хранилища (<code>localStorage</code> и{" "}
          <code>sessionStorage</code>) и отслеживающие пиксели. В этой политике слово «cookie»
          используется для всего перечисленного, потому что вопрос по сути один: что остаётся на
          вашем устройстве и кто может это прочитать.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Ваше согласие">
        <LegalP>
          При первом посещении внизу страницы появляется баннер согласия. Пока вы не ответите,
          ничего необязательного не загружается. У вас три варианта:
        </LegalP>
        <LegalUl>
          <li>
            <strong>Принять все</strong> — необходимое хранилище и аналитика. Загружается Google
            Analytics, и мы видим в обобщённом виде, какими инструментами пользуются.
          </li>
          <li>
            <strong>Отклонить все</strong> — только необходимое хранилище. Google Analytics не
            загружается вовсе, и с вашего визита не собирается никаких аналитических данных.
          </li>
          <li>
            <strong>Настроить</strong> — по категориям. Необходимое хранилище отключить нельзя: без
            него сайт не сможет запомнить ни вашу тему, ни, собственно, сам этот выбор.
          </li>
        </LegalUl>
        <LegalP>
          Ваш ответ сохраняется на вашем устройстве в <code>omyimage_cookie_consent</code> и{" "}
          <code>omyimage_cookie_prefs</code>. Изменить его можно в любой момент по ссылке{" "}
          <strong>Настройки cookie</strong> внизу любой страницы. Поскольку скрипт аналитики можно
          подключить или убрать только при новой загрузке страницы, изменение именно этой настройки
          перезагружает страницу.
        </LegalP>
        <LegalP>
          Мы не используем рекламные и межсайтовые отслеживающие cookie и не передаём ваши данные
          рекламным сетям.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. Что мы сохраняем">
        <LegalSubsection title="Необходимое — всегда включено">
          <LegalP>
            Это записи в <code>localStorage</code>, а не cookie: их пишет сам сайт, сам их читает, и
            они никогда не отправляются ни нам, ни кому-либо ещё. Отключить их нельзя, потому что
            именно благодаря им интерфейс хоть что-то запоминает. При очистке данных сайта в
            браузере они удаляются все сразу.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> — выбрали вы светлую тему или тёмную.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> и <code>omyimage_cookie_prefs</code> — ваш ответ
              на баннер согласия, чтобы не спрашивать снова на каждой странице.
            </li>
            <li>
              <code>omyimage:favorites</code> и недавно использованные инструменты — чтобы ваши
              ярлыки оставались на месте.
            </li>
            <li>
              <code>omyimage:currency</code> — выбранная вами валюта на странице цен.
            </li>
            <li>
              <code>omyimage:premium-usage</code> — локальный счётчик сегодняшних запусков премиум-инструментов.
            </li>
          </LegalUl>
          <LegalP>
            Cloudflare, который отдаёт и защищает сайт, тоже может устанавливать строго необходимые
            cookie для ограничения частоты запросов и распознавания ботов. Они перечислены в разделе
            4.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Аналитика — только с вашего согласия">
          <LegalP>
            Если вы принимаете аналитику, мы загружаем Google Analytics 4, чтобы понимать в
            обобщённом виде, как используется сайт: какие инструменты популярны, на каких страницах
            возникают ошибки, откуда приходит больше или меньше посетителей. На этом основании мы
            решаем, что делать дальше и что чинить. Для идентификации вас лично это не используется
            никогда, и мы не пытаемся связать эти данные с тем, что вы обрабатывали.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> — различают отдельных пользователей и сеансы. Срок
              — 2 года.
            </li>
            <li>
              <code>_gid</code> — различает пользователей в пределах суток. Срок — 24 часа.
            </li>
          </LegalUl>
          <LegalP>
            Если вы отклоняете аналитику или вообще не отвечаете на баннер, скрипт Google Analytics
            даже не запрашивается — эти cookie не создаются и не игнорируются, они просто не
            появляются.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Реклама — мы её не используем">
          <LegalP>
            Мы <strong>не</strong> используем рекламные и отслеживающие cookie. На oMyImage нет
            рекламы, и поведение при просмотре не передаётся рекламным сетям. Раздел про рекламу в
            баннере согласия существует на случай, если это когда-нибудь изменится, — чтобы ваш
            выбор уже был записан; сегодня он ничем не управляет.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Cookie третьих сторон">
        <LegalP>
          Внутри oMyImage сохранять что-либо в вашем браузере могут только эти третьи стороны.
          Каждая действует по своей политике:
        </LegalP>
        <LegalTable
          headers={["Сервис", "Назначение", "Политика конфиденциальности"]}
          rows={[
            [
              "Cloudflare",
              "Строго необходимые cookie для безопасности и скорости (ограничение частоты запросов, распознавание ботов)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Аналитические cookie, которые устанавливаются только после вашего согласия на аналитику",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Отдаёт шрифт иконок. Cookie не устанавливает, но Google получает ваш IP-адрес — как и на любом сайте, использующем этот шрифт",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (по желанию)",
              "Только если вы пользуетесь загрузкой из Drive. Токен доступа хранится в памяти в течение визита и никуда не записывается",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (по желанию)",
              "Только если вы пользуетесь загрузкой из Dropbox. Окно выбора файлов открывается на стороне Dropbox; аккаунт не привязывается и токен не выдаётся",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          Загрузка из облаков подробно описана в разделах 7 и 8{" "}
          <Link href={`${localeHref("/privacy", "ru")}#google-drive`} className="text-secondary hover:underline">
            Политики конфиденциальности
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. Как управлять cookie">
        <LegalSubsection title="На oMyImage">
          <LegalP>
            Воспользуйтесь ссылкой <strong>Настройки cookie</strong> внизу любой страницы. Она
            открывает баннер согласия с вашими текущими настройками, поэтому можно изменить одну
            категорию, не сбрасывая остальные.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="В браузере">
          <LegalP>
            Любой современный браузер позволяет просматривать, блокировать и удалять cookie и данные
            сайтов. Если заблокировать всё, удалятся и необходимые записи выше — сайт забудет вашу
            тему и снова спросит про cookie:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> Настройки → Конфиденциальность и безопасность → Сторонние
              файлы cookie
            </li>
            <li>
              <strong>Firefox:</strong> Настройки → Приватность и защита → Куки и данные сайтов
            </li>
            <li>
              <strong>Safari:</strong> Настройки → Конфиденциальность → Управление данными сайтов
            </li>
            <li>
              <strong>Edge:</strong> Настройки → Файлы cookie и разрешения сайтов → Управление
              файлами cookie и их удаление
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Отказ от Google Analytics на всех сайтах">
          <LegalP>
            Чтобы отказаться от Google Analytics не только здесь, а везде, установите{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              блокировщик Google Analytics для браузера
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Изменения в этой политике">
        <LegalP>
          Мы можем обновлять эту политику по мере развития сервиса. Дата «обновлено» вверху страницы
          всегда соответствует текущей версии, а существенные изменения появятся здесь до того, как
          вступят в силу.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Контакты">
        <LegalP>
          Вопросы о cookie и об этой политике можно задать через{" "}
          <Link href={localeHref("/contact", "ru")} className="text-secondary hover:underline">
            страницу контактов
          </Link>
          . Смотрите также{" "}
          <Link href={localeHref("/privacy", "ru")} className="text-secondary hover:underline">
            Политику конфиденциальности
          </Link>{" "}
          и{" "}
          <Link href={localeHref("/terms", "ru")} className="text-secondary hover:underline">
            Условия использования
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
