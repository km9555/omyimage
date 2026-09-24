import type { Metadata } from "next";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";

/**
 * Russian refund policy — same structure and same section ids as /refunds,
 * with only the prose translated. The ids are TOC anchors and a contract
 * across locales: never rename one on a single side.
 *
 * The consumer-law paragraph keeps the EU/UK withdrawal right exactly as the
 * English page states it and adds NOTHING about Russian consumer law. §10
 * already says a stronger local right prevails, and inventing a specific claim
 * about the ЗоЗПП that no lawyer has reviewed would be a worse error than the
 * omission. Same reasoning as the pt and hi twins — this is the third time the
 * question has come up and the answer has not changed.
 *
 * Money amounts, business-day counts and the 7-day window are facts, not
 * phrasing: they are carried across unchanged.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "ru",
  title: "Политика возврата | oMyImage",
  description:
    "Политика возврата oMyImage — как устроен возврат средств на платных планах, в какой срок можно обратиться и в каких случаях возврат возможен, а в каких нет.",
});

const toc = [
  { id: "status", title: "1. Текущее положение" },
  { id: "free", title: "2. Бесплатный сервис" },
  { id: "window", title: "3. Срок обращения" },
  { id: "eligible", title: "4. Когда возврат возможен" },
  { id: "noteligible", title: "5. Когда возврат невозможен" },
  { id: "request", title: "6. Как запросить возврат" },
  { id: "processing", title: "7. Рассмотрение и сроки" },
  { id: "cancellation", title: "8. Отмена подписки и возврат" },
  { id: "chargebacks", title: "9. Оспаривание платежа" },
  { id: "consumer", title: "10. Права потребителя" },
  { id: "changes", title: "11. Изменения" },
  { id: "contact", title: "12. Контакты" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="ru"
      title="Политика возврата"
      subtitle={`Как устроен возврат средств на платных планах ${SITE.name}.`}
      updated="3 августа 2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Текущее положение">
        <LegalCallout>
          <strong>Платных планов пока нет.</strong> Все инструменты {SITE.name} сейчас бесплатны,
          поэтому не за что списывать деньги и нечего возвращать. Эта политика публикуется заранее,
          чтобы условия были ясны до запуска платных планов.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. Бесплатный сервис">
        <LegalP>
          Бесплатный тариф бесплатен. Здесь нет ни платы, ни пробного периода, который превращается
          в платный план, ни сохранённых способов оплаты. За пользование бесплатными инструментами с
          вас никогда не спишут денег.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Срок обращения">
        <LegalP>
          После запуска платных планов вы сможете запросить полный возврат последнего платежа в
          течение <strong>7 дней</strong> с момента списания, с учётом условий ниже.
        </LegalP>
        <LegalP>
          Поскольку планы оплачиваются вперёд за фиксированный период, возврат относится к
          оспариваемому платежу целиком, а не к части периода.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. Когда возврат возможен">
        <LegalUl>
          <li>С вас дважды списали оплату за один и тот же период.</li>
          <li>С вас списали оплату после отмены подписки — за период, начавшийся после отмены.</li>
          <li>
            Платная возможность работала не так, как описано, и мы не смогли решить вопрос за
            разумное время после вашего обращения.
          </li>
          <li>
            Вы оформили подписку по ошибке и не пользовались платными возможностями сколько-нибудь
            существенно — в пределах 7 дней.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. Когда возврат невозможен">
        <LegalUl>
          <li>Обращение позже чем через 7 дней после списания.</li>
          <li>
            Существенное использование платного лимита в оплаченном периоде — платные планы
            представляют собой цифровые услуги, предоставляемые сразу после оплаты.
          </li>
          <li>
            Недовольство качеством результата, если инструмент отработал так, как описано.
            Бесплатный тариф для того и существует, чтобы оценить качество до оплаты.
          </li>
          <li>
            Проблемы, вызванные вашим устройством, браузером, сетью или исходными файлами, которые
            повреждены либо имеют неподдерживаемый формат.
          </li>
          <li>
            Перебои в работе вне нашего разумного контроля, а также плановые технические работы.
          </li>
          <li>
            Аккаунты, приостановленные или закрытые за нарушение{" "}
            <Link href={localeHref("/terms", "ru")} className="text-secondary hover:underline">
              Условий использования
            </Link>
            .
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. Как запросить возврат">
        <LegalP>
          Напишите нам через{" "}
          <Link href={localeHref("/contact", "ru")} className="text-secondary hover:underline">
            страницу контактов
          </Link>
          , указав адрес электронной почты, с которого была оформлена покупка, примерную дату и
          сумму списания и коротко описав проблему. Пожалуйста, обратитесь к нам до того, как
          открывать спор в банке, — напрямую вопрос почти всегда решается быстрее.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Рассмотрение и сроки">
        <LegalP>
          Мы стремимся рассматривать обращения о возврате в течение 3 рабочих дней. Одобренные
          возвраты выполняются тем же способом оплаты через нашего платёжного провайдера. После
          отправки средства обычно поступают в течение 5–10 рабочих дней в зависимости от вашего
          банка или эмитента карты — этот последний шаг от нас не зависит.
        </LegalP>
        <LegalP>
          Возврат производится в валюте исходной операции. Мы не отвечаем за разницу курсов и
          комиссии, удержанные вашим банком.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Отмена подписки и возврат">
        <LegalP>
          Отмена подписки прекращает будущие списания, но сама по себе не возвращает деньги за уже
          оплаченный период. После отмены доступ к платным возможностям сохраняется до конца
          оплаченного периода, а затем аккаунт переходит на бесплатный тариф.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Оспаривание платежа">
        <LegalP>
          Пожалуйста, свяжитесь с нами до того, как оспаривать платёж через банк. Оспаривание
          обходится дорого и обычно занимает больше времени, чем прямой возврат. Мы оставляем за
          собой право приостановить доступ к платным возможностям на время рассмотрения спора и
          отказать в дальнейшем платном обслуживании аккаунтам с недобросовестными спорами.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Права потребителя">
        <LegalP>
          Ничто в этой политике не ограничивает ваши неотчуждаемые права по применимому к вам
          законодательству о защите прав потребителей. Если местный закон даёт более сильное право
          на отказ от услуги или возврат средств, чем эта политика, действует закон.
        </LegalP>
        <LegalP>
          Если вы потребитель в Европейском союзе или Великобритании, у вас может быть законное
          право отказаться от договора об оказании цифровых услуг в течение 14 дней. Если вы просите
          начать оказание услуги немедленно, это право может прекратиться с началом оказания — в той
          мере, в какой это допускает закон.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Изменения">
        <LegalP>
          Мы можем обновлять эту политику по мере развития сервиса. Действует та версия, которая
          была опубликована на момент вашей покупки, а дата «обновлено» выше всегда соответствует
          текущей версии.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Контакты">
        <LegalP>
          По любым вопросам об оплате и возврате напишите нам через{" "}
          <Link href={localeHref("/contact", "ru")} className="text-secondary hover:underline">
            страницу контактов
          </Link>
          . Смотрите также{" "}
          <Link href={localeHref("/terms", "ru")} className="text-secondary hover:underline">
            Условия использования
          </Link>{" "}
          и{" "}
          <Link href={localeHref("/pricing", "ru")} className="text-secondary hover:underline">
            цены
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
