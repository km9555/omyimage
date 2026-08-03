import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "oMyImage refund policy — how refunds work for paid plans, the request window, and what is and isn't refundable.",
  alternates: { canonical: "/refunds" },
};

const toc = [
  { id: "status", title: "1. Current status" },
  { id: "free", title: "2. The free service" },
  { id: "window", title: "3. Refund window" },
  { id: "eligible", title: "4. What qualifies" },
  { id: "noteligible", title: "5. What does not" },
  { id: "request", title: "6. How to request" },
  { id: "processing", title: "7. Processing & timing" },
  { id: "cancellation", title: "8. Cancellation vs refund" },
  { id: "chargebacks", title: "9. Chargebacks" },
  { id: "consumer", title: "10. Statutory rights" },
  { id: "changes", title: "11. Changes" },
  { id: "contact", title: "12. Contact" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      title="Refund Policy"
      subtitle={`How refunds work for paid ${SITE.name} plans.`}
      updated="3 August 2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Current status">
        <LegalCallout>
          <strong>There are no paid plans yet.</strong> Every tool on {SITE.name} is currently free,
          so there is nothing to be charged for and nothing to refund. This policy is published in
          advance so the terms are clear before any paid plan launches.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. The free service">
        <LegalP>
          The free tier is free. It carries no charge, no trial that converts into a paid plan, and
          no stored payment method. You will never be billed for using the free tools.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Refund window">
        <LegalP>
          Once paid plans launch, you may request a full refund of your most recent payment within{" "}
          <strong>7 days</strong> of that charge, subject to the conditions below.
        </LegalP>
        <LegalP>
          Because plans are billed in advance for a fixed period, refunds apply to the payment you
          are disputing rather than to a partial period.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. What qualifies for a refund">
        <LegalUl>
          <li>You were charged twice for the same billing period.</li>
          <li>You were charged after cancelling, for a period beginning after the cancellation.</li>
          <li>
            A paid feature did not work as described and we were unable to resolve it for you within
            a reasonable time after you reported it.
          </li>
          <li>
            You subscribed by mistake and have made no substantial use of the paid features, within
            the 7-day window.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. What does not qualify">
        <LegalUl>
          <li>Requests made more than 7 days after the charge.</li>
          <li>
            Substantial use of the paid allowance during the billing period — paid plans are digital
            services delivered immediately on payment.
          </li>
          <li>
            Dissatisfaction with output quality where the tool performed as described. The free tier
            exists so you can evaluate quality before paying.
          </li>
          <li>
            Problems caused by your device, browser, network or by source files that are corrupt or
            in an unsupported format.
          </li>
          <li>
            Downtime or interruption outside our reasonable control, or scheduled maintenance.
          </li>
          <li>
            Accounts suspended or terminated for breach of our{" "}
            <Link href="/terms" className="text-secondary hover:underline">
              Terms of Service
            </Link>
            .
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. How to request a refund">
        <LegalP>
          Contact us through our{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>{" "}
          with the email address used for the purchase, the approximate date and amount of the
          charge, and a short description of the problem. Please contact us before opening a dispute
          with your bank — we can almost always resolve it faster directly.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Processing & timing">
        <LegalP>
          We aim to review refund requests within 3 business days. Approved refunds are issued to the
          original payment method through our payment processor. Once issued, the funds typically
          appear within 5–10 business days, depending on your bank or card issuer — that final step
          is outside our control.
        </LegalP>
        <LegalP>
          Refunds are made in the original currency of the transaction. We are not responsible for
          exchange-rate differences or fees applied by your bank.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Cancellation vs refund">
        <LegalP>
          Cancelling a subscription stops future renewals; it does not automatically refund the
          period already paid for. When you cancel, you keep access to paid features until the end of
          the period you have already paid for, after which the account reverts to the free tier.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Chargebacks">
        <LegalP>
          Please contact us before initiating a chargeback. Chargebacks are costly to resolve and
          typically slower than a direct refund. We reserve the right to suspend access to paid
          features while a chargeback is open, and to decline future paid service to accounts with
          fraudulent disputes.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Statutory rights">
        <LegalP>
          Nothing in this policy limits any non-waivable rights you have under the consumer law that
          applies to you. Where local law grants a stronger right of withdrawal or refund than this
          policy, that law prevails.
        </LegalP>
        <LegalP>
          If you are a consumer in the European Union or the United Kingdom, you may have a statutory
          right to withdraw from a digital services contract within 14 days. Where you ask us to
          begin providing the service immediately, that right may end once provision has begun, to
          the extent permitted by law.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes">
        <LegalP>
          We may update this policy as the service evolves. The version in force is the one published
          at the time of your purchase, and the &quot;last updated&quot; date above always reflects
          the current version.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <LegalP>
          For any billing or refund question, reach us through our{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>
          . See also our{" "}
          <Link href="/terms" className="text-secondary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/pricing" className="text-secondary hover:underline">
            pricing
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
