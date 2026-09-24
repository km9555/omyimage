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
import { SITE } from "@/lib/site";

/**
 * Russian privacy policy — a written twin of /privacy carrying exactly the
 * same section ids. `#google-drive` in particular is linked from the cookie
 * policy in all four languages.
 *
 * Section 7 exists to satisfy Google's OAuth verification, which audits the
 * privacy policy against the scope requested in lib/google-drive.ts. Three
 * things there are deliberately NOT translated:
 *   • the scope URI, which is an identifier;
 *   • the name of the Google API Services User Data Policy, kept in English;
 *     and
 *   • the words "Limited Use", kept beside the Russian rendering — that
 *     sentence is prescribed by Google, and a loose paraphrase in any language
 *     is what fails a review.
 * Keep this section in sync with the English one whenever the scope changes.
 *
 * §10 names Russia's data-protection authority (Роскомнадзор, under 152-ФЗ)
 * the way the pt twin names Brazil's ANPD and the hi twin names India's DPB —
 * by role, as the place a reader complains, and without any claim about what
 * it currently enforces or about our own compliance posture.
 *
 * §6 names Contabo as the server host WITHOUT naming a country, exactly as the
 * English page does. Russia's data-localisation rules make jurisdiction a live
 * question for a Russian reader, which is precisely why this page must not
 * invent an answer: stating a location nobody verified would be worse than
 * carrying the English page's level of detail across unchanged.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/privacy",
  locale: "ru",
  title: "Политика конфиденциальности | oMyImage",
  description:
    "Что oMyImage делает с вашими изображениями и данными. Большинство инструментов работает в браузере; файлы, обработанные на сервере, удаляются в течение часа.",
});

const toc = [
  { id: "summary", title: "Кратко" },
  { id: "images", title: "1. Ваши изображения" },
  { id: "browser", title: "2. Обработка в браузере и на сервере" },
  { id: "retention", title: "3. Сроки хранения и удаление" },
  { id: "collect", title: "4. Какие данные мы собираем" },
  { id: "storage", title: "5. Хранилище браузера" },
  { id: "subprocessors", title: "6. Сторонние сервисы" },
  { id: "google-drive", title: "7. Загрузка из Google Drive" },
  { id: "dropbox", title: "8. Загрузка из Dropbox" },
  { id: "future", title: "9. Планируемые возможности" },
  { id: "rights", title: "10. Ваши права" },
  { id: "children", title: "11. Дети" },
  { id: "security", title: "12. Безопасность" },
  { id: "changes", title: "13. Изменения" },
  { id: "contact", title: "14. Контакты" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="ru"
      title="Политика конфиденциальности"
      subtitle="Что происходит с вашими изображениями и вашими данными при использовании oMyImage."
      updated="9 сентября 2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Кратко">
        <LegalCallout>
          Большинство инструментов oMyImage работает <strong>полностью внутри вашего браузера</strong>{" "}
          — изображения никуда не загружаются. Нескольким инструментам нужен наш сервер; такие файлы
          обрабатываются, возвращаются и удаляются примерно в течение часа. Аккаунт не требуется,
          рекламы нет, никакой слежки мы не ведём.
        </LegalCallout>
        <LegalP>
          Эта политика объясняет всё подробно. Она описывает, что сервис делает сегодня, и прямо
          отмечает то, что пока только планируется.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Ваши изображения">
        <LegalP>
          Ваши изображения принадлежат вам. Мы не претендуем на права ни на что из обработанного, не
          используем ваши изображения для обучения моделей, не продаём их, не передаём, не публикуем
          и не используем повторно ни для каких целей.
        </LegalP>
        <LegalP>
          Покидает ли изображение ваше устройство вообще — зависит от того, каким инструментом вы
          пользуетесь; об этом следующий раздел.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Обработка в браузере и на сервере">
        <LegalSubsection title="Обрабатывается в браузере (без загрузки)">
          <LegalP>
            Большинство инструментов использует собственный движок canvas вашего браузера.
            Изображение читается с вашего устройства в память, обрабатывается локально и
            сохраняется вами же. Нам не передаётся ничего, и эти инструменты продолжают работать,
            даже если наш сервер недоступен.
          </LegalP>
          <LegalP>
            Это касается обрезки, изменения размера, поворота, сжатия, конвертации, водяных знаков,
            мемов, редактора «всё в одном», размытия, рамок, круглой обрезки, объединения,
            инструментов для GIF и цвета, просмотра метаданных и сборки PDF — для файлов до
            15&nbsp;МБ.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Обрабатывается на нашем сервере (с загрузкой)">
          <LegalP>Изображение загружается на наш сервер в трёх случаях:</LegalP>
          <LegalUl>
            <li>
              <strong>Файлы больше 15&nbsp;МБ</strong> — на таком размере обработка в браузере
              становится ненадёжной, поэтому работа автоматически передаётся серверу.
            </li>
            <li>
              <strong>Инструменты с ИИ</strong> — «Удалить фон» и «Улучшить качество фото» используют
              модели, слишком тяжёлые для браузера.
            </li>
            <li>
              <strong>HEIC в JPG, при любом размере.</strong> Здесь дело в лицензии, а не в
              технике: единственные открытые декодеры HEIC нельзя распространять через браузер по
              условиям их лицензии, поэтому конвертация выполняется на нашем сервере.
            </li>
          </LegalUl>
          <LegalP>
            Каждый из этих инструментов сообщает о загрузке на своей странице. Если инструмент об
            этом не пишет — значит, он ничего не загружает.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Сроки хранения и удаление">
        <LegalP>
          Изображения, обработанные в вашем браузере, к нам вообще не попадают, поэтому и хранить
          нам нечего.
        </LegalP>
        <LegalP>
          Для изображений, обработанных на сервере, загруженный файл хранится ровно столько, сколько
          занимает обработка, и затем удаляется. Результат недолго доступен по закрытой ссылке для
          скачивания и удаляется автоматически примерно в течение часа. Резервных копий ваших файлов
          мы не делаем и в архив их не помещаем.
        </LegalP>
        <LegalCallout>
          Ссылки для скачивания невозможно подобрать, но они не защищены паролем. Относитесь к
          ссылке как к секрету: любой, у кого она есть, может скачать файл, пока она не истекла.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. Какие данные мы собираем">
        <LegalP>
          Мы не спрашиваем ваше имя, адрес электронной почты и никакие другие личные данные для
          работы с инструментами. На этом сайте нет ни аккаунтов, ни рассылки, ни формы обратной
          связи.
        </LegalP>
        <LegalP>
          Как и любой веб-сервис, наш сервер и наши хостинг-провайдеры автоматически обрабатывают
          базовые технические данные, необходимые для отдачи сайта: IP-адрес, строку браузера,
          запрошенный URL и время запроса. Это нужно, чтобы обслужить запрос, ограничить частоту
          обращений и выявить злоупотребления. Профилей мы из этого не строим и ни с чем другим не
          объединяем.
        </LegalP>
        <LegalP>
          Мы используем <strong>Google Analytics 4</strong> — и только с вашего согласия. Пока вы не
          примете аналитические cookie, скрипт даже не запрашивается: он не загружается и не
          выключается потом, его просто нет, поэтому у посетителя, который отказался или не ответил
          на баннер, аналитические cookie не создаются. Собирается обобщённая информация: какими
          инструментами пользуются, на каких страницах возникают ошибки, примерно откуда приходят
          посетители. Для идентификации вас лично это не используется, и мы не связываем эти данные
          с тем, что вы обрабатывали.
        </LegalP>
        <LegalP>
          <strong>Мы не показываем рекламу и не ведём межсайтовую слежку.</strong> На oMyImage нет
          ни записи сессий, ни рекламных пикселей, ни рекламных сетей. Изменить или отозвать
          согласие на аналитику можно в любой момент через <strong>Настройки cookie</strong> внизу
          страницы — подробности в{" "}
          <Link href={localeHref("/cookies", "ru")} className="text-secondary hover:underline">
            Политике в отношении cookie
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="storage" title="5. Хранилище браузера">
        <LegalP>
          oMyImage не устанавливает собственных cookie. Мы используем локальное хранилище браузера
          для нескольких функциональных настроек, которые остаются на вашем устройстве и никогда не
          отправляются нам:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> — выбрали вы светлую тему или тёмную.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> и <code>omyimage_cookie_prefs</code> — ваш ответ на
            баннер cookie.
          </li>
          <li>
            <code>omyimage:favorites</code> и недавно использованные инструменты — чтобы ярлыки
            сохранялись.
          </li>
          <li>
            <code>omyimage:currency</code> — валюта, выбранная вами на странице цен.
          </li>
          <li>
            <code>omyimage:premium-usage</code> — локальный счётчик сегодняшних запусков
            премиум-инструментов.
          </li>
        </LegalUl>
        <LegalP>
          Очистка данных сайта в браузере удаляет их все. Ничто из перечисленного вас не
          идентифицирует. Cookie, устанавливаемые третьими сторонами — Cloudflare и, после вашего
          согласия, Google Analytics, — перечислены в{" "}
          <Link href={localeHref("/cookies", "ru")} className="text-secondary hover:underline">
            Политике в отношении cookie
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Сторонние сервисы">
        <LegalP>
          Третьих сторон мы держим по минимуму. В работе oMyImage участвуют только эти:
        </LegalP>
        <LegalTable
          headers={["Сервис", "Назначение", "Политика конфиденциальности"]}
          rows={[
            ["Cloudflare", "Хостинг сайта, CDN и защита от DDoS", "cloudflare.com/privacypolicy"],
            ["Contabo", "Серверный хостинг для инструментов, работающих на нашем сервере", "contabo.com/en/legal/privacy-policy"],
            ["Google Fonts", "Отдаёт шрифт иконок, используемый в интерфейсе", "policies.google.com/privacy"],
            ["Google Analytics", "Обобщённая статистика использования; загружается только при согласии на аналитические cookie", "policies.google.com/privacy"],
            ["Google Drive (по желанию)", "Загружает только выбранные вами файлы и только когда вы этим пользуетесь — см. раздел 7", "policies.google.com/privacy"],
            ["Dropbox (по желанию)", "Загружает только выбранные вами файлы и только когда вы этим пользуетесь — см. раздел 8", "dropbox.com/privacy"],
          ]}
        />
        <LegalP>
          Поскольку шрифт иконок запрашивается с CDN Google, при загрузке страницы Google получает
          ваш IP-адрес и строку браузера — так же, как на любом сайте, использующем этот шрифт. Два
          наших текстовых шрифта отдаются с нашего собственного домена и третьих сторон не
          затрагивают.
        </LegalP>
      </LegalSection>

      {/*
        Google Drive / OAuth disclosure. Required by Google's OAuth app
        verification, which checks the privacy policy for a description of what
        Google user data is accessed, why, and how it is handled — plus the
        Limited Use sentence, which is prescribed wording and must not be
        paraphrased. Keep the scope named here in sync with lib/google-drive.ts.
      */}
      <LegalSection id="google-drive" title="7. Загрузка из Google Drive">
        <LegalP>
          Подключение Google необязательно. Все инструменты oMyImage работают без него, и нигде на
          сайте вас не просят войти в аккаунт. Подключение существует ради одной возможности:
          загрузить изображение, которое уже лежит у вас на Google Drive, вместо того чтобы
          отправлять его с устройства.
        </LegalP>

        <LegalSubsection title="Что мы запрашиваем и что это даёт">
          <LegalP>
            При выборе «Загрузить из Google Drive» мы запрашиваем одно узкое разрешение:{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. Оно даёт
            доступ только к тем файлам, которые вы сами выбрали в файловом окне Google. Оно не
            позволяет нам просматривать, искать или открывать что-либо ещё на вашем Drive и не даёт
            никакого представления о ваших папках, именах файлов или хранилище в целом.
          </LegalP>
          <LegalP>
            На практике разрешение односторонее: мы читаем выбранный вами файл. Мы ничего не
            создаём, не переименовываем, не изменяем, не перемещаем и не удаляем на вашем Drive.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Что происходит с файлом и токеном">
          <LegalUl>
            <li>
              Токен доступа, выданный Google, хранится в памяти вашего браузера только в течение
              этого визита. Он никогда не передаётся на наши серверы, не записывается на диск и
              исчезает при закрытии вкладки.
            </li>
            <li>
              Выбранный файл скачивается из Google прямо в ваш браузер. По пути он не проходит
              через наши серверы.
            </li>
            <li>
              Дальше файл обрабатывается ровно так же, как перетащенный с рабочего стола: в
              браузере — или на нашем сервере, если вы выбрали инструмент, который об этом
              предупреждает, с теми же сроками хранения, что описаны в разделах 2 и 3.
            </li>
            <li>
              Копий ваших файлов с Google мы не храним, не индексируем их и не ведём записей о том,
              что вы загружали.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          Использование и передача компанией oMyImage информации, полученной из API Google, любым
          другим приложениям осуществляется в соответствии с{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , включая требования ограниченного использования (Limited Use). В частности, мы не
          используем данные пользователей Google для рекламы, не продаём и не передаём их и не
          применяем для обучения обобщённых моделей и моделей искусственного интеллекта.
        </LegalCallout>

        <LegalP>
          Отозвать этот доступ можно в любой момент, не затрагивая остальную часть сайта, на{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            странице разрешений вашего аккаунта Google
          </a>
          .
        </LegalP>
      </LegalSection>

      {/*
        Dropbox disclosure. Deliberately shorter than section 7: Dropbox has no
        equivalent OAuth review, and the Chooser asks for far less — no account
        is linked and no token is ever issued. Keep in sync with lib/dropbox.ts.
      */}
      <LegalSection id="dropbox" title="8. Загрузка из Dropbox">
        <LegalP>
          Подключение Dropbox необязательно и работает так же, как Google Drive: оно нужно только
          для того, чтобы выбрать изображение, которое уже лежит у вас в Dropbox, вместо отправки с
          устройства. Все инструменты oMyImage работают без него, и нигде на сайте вас не просят
          войти в аккаунт.
        </LegalP>

        <LegalP>
          При выборе «Dropbox» открывается собственное окно выбора файлов Dropbox. Просмотр и выбор
          происходят целиком внутри этого окна, принадлежащего Dropbox, — мы не видим ни ваших
          папок, ни имён файлов, ни того, что вы не выбрали.
        </LegalP>

        <LegalUl>
          <li>
            Аккаунт не привязывается и токен доступа не выдаётся. В отличие от загрузки из Google
            Drive, здесь нечего разрешать и нечего потом отзывать.
          </li>
          <li>
            Dropbox возвращает временную ссылку для скачивания каждого выбранного файла,
            действующую несколько часов. Браузер использует её сразу и тут же забывает; ссылка
            никогда не отправляется на наши серверы и не записывается на диск.
          </li>
          <li>
            Файл скачивается из Dropbox прямо в ваш браузер. По пути он не проходит через наши
            серверы.
          </li>
          <li>
            Дальше файл обрабатывается ровно так же, как перетащенный с рабочего стола: в
            браузере — или на нашем сервере, если вы выбрали инструмент, который об этом
            предупреждает, с теми же сроками хранения, что описаны в разделах 2 и 3.
          </li>
          <li>
            Копий ваших файлов из Dropbox мы не храним, не индексируем их и не ведём записей о том,
            что вы загружали.
          </li>
        </LegalUl>

        <LegalP>
          Для Dropbox это выглядит как визит в Dropbox, и к происходящему внутри этого окна
          применяется его собственная политика конфиденциальности. Код Dropbox загружается только
          тогда, когда вы тянетесь к кнопке, поэтому посетители, которые этой возможностью не
          пользуются, с Dropbox вообще не соприкасаются.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="9. Планируемые возможности">
        <LegalP>
          Некоторые возможности запланированы, но пока не работают. Мы описываем их заранее, чтобы
          политика оставалась честной к моменту их появления и чтобы вы знали, чего ожидать.{" "}
          <strong>Ничего из перечисленного сегодня не действует.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Аккаунты.</strong> Если мы введём вход в аккаунт, мы будем собирать адрес
            электронной почты и надёжно хешированный пароль — исключительно для вашей аутентификации
            и для привязки плана. Аккаунт и его данные можно будет удалить.
          </li>
          <li>
            <strong>Платные планы.</strong> Если мы введём платные планы, оплату будет обрабатывать
            сторонний платёжный провайдер. Данные карты будут уходить напрямую к нему и никогда не
            попадут на наши серверы и не будут там храниться. Мы получим только идентификатор
            операции и её статус.
          </li>
        </LegalUl>
        <LegalP>
          Когда что-либо из этого заработает, политика будет обновлена, и дата «обновлено» вверху
          изменится до того, как возможность будет включена.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="10. Ваши права">
        <LegalP>
          В зависимости от того, где вы живёте, у вас могут быть права на доступ к личным данным о
          вас, их исправление, перенос или удаление, а также право возражать против отдельных видов
          обработки. Поскольку мы не ведём аккаунтов и не храним ваши изображения, на практике у нас
          обычно нет ничего о вас, что можно было бы найти.
        </LegalP>
        <LegalP>
          Если вы считаете, что у нас есть относящиеся к вам данные, напишите нам через{" "}
          <Link href={localeHref("/contact", "ru")} className="text-secondary hover:underline">
            страницу контактов
          </Link>
          , и мы ответим в разумный срок. Вы также вправе обратиться с жалобой в надзорный орган по
          защите персональных данных вашей страны — в России это Роскомнадзор, действующий в рамках
          Федерального закона № 152-ФЗ «О персональных данных».
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="11. Дети">
        <LegalP>
          oMyImage — это утилита общего назначения, не адресованная детям. Мы сознательно не
          собираем персональные данные детей. Поскольку для работы с инструментами не нужны ни
          аккаунт, ни личные сведения, собирать обычно попросту нечего.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="12. Безопасность">
        <LegalP>
          Сайт отдаётся по HTTPS. Загрузки на наш сервер шифруются при передаче, обрабатываются
          изолированно и удаляются по описанному выше графику. Мы применяем ограничения частоты
          запросов и размера загружаемых файлов, чтобы защитить сервис.
        </LegalP>
        <LegalP>
          Ни один онлайн-сервис не может обещать идеальной безопасности. Пожалуйста, не загружайте
          материалы, утечка которых была бы для вас неприемлема, — и помните, что для большинства
          инструментов самый безопасный вариант уже выбран по умолчанию, потому что файл вообще не
          покидает ваше устройство.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="13. Изменения">
        <LegalP>
          Мы можем обновлять эту политику по мере развития сервиса. Дата «обновлено» вверху страницы
          всегда соответствует текущей версии. Существенные изменения появятся здесь до того, как
          вступят в силу.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="14. Контакты">
        <LegalP>
          Вопросы об этой политике и о том, как обрабатываются ваши данные, можно задать через{" "}
          <Link href={localeHref("/contact", "ru")} className="text-secondary hover:underline">
            страницу контактов
          </Link>
          . Смотрите также{" "}
          <Link href={localeHref("/terms", "ru")} className="text-secondary hover:underline">
            Условия использования
          </Link>
          , которые регулируют ваше использование {SITE.name}.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
