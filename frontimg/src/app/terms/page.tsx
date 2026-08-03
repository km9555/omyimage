import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of oMyImage — acceptable use, file handling, disclaimers, limitation of liability and governing law.",
  alternates: { canonical: "/terms" },
};

const toc = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "service", title: "2. Description of Service" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "acceptable", title: "4. Acceptable Use" },
  { id: "content", title: "5. Your Content" },
  { id: "files", title: "6. File Handling & Deletion" },
  { id: "availability", title: "7. Availability & Changes" },
  { id: "warranties", title: "8. Disclaimer of Warranties" },
  { id: "liability", title: "9. Limitation of Liability" },
  { id: "indemnity", title: "10. Indemnification" },
  { id: "ip", title: "11. Intellectual Property" },
  { id: "thirdparty", title: "12. Third-Party Software & Links" },
  { id: "billing", title: "13. Paid Plans & Billing" },
  { id: "termination", title: "14. Termination" },
  { id: "governing", title: "15. Governing Law" },
  { id: "misc", title: "16. Miscellaneous" },
  { id: "contact", title: "17. Contact" },
];

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      subtitle={`The agreement between you and ${SITE.name} when you use this website and its tools.`}
      updated="3 August 2026"
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Acceptance of Terms">
        <LegalP>
          By accessing or using {SITE.name} (the &quot;Service&quot;), you agree to be bound by these
          Terms of Service (the &quot;Terms&quot;). If you do not agree to these Terms, you must not
          use the Service.
        </LegalP>
        <LegalP>
          These Terms apply to every visitor, whether or not you hold an account, and whether or not
          you pay for anything.
        </LegalP>
      </LegalSection>

      <LegalSection id="service" title="2. Description of Service">
        <LegalP>
          The Service provides online image utilities — compressing, resizing, cropping, converting,
          editing and related operations. Most tools run entirely within your browser. Some tools
          require processing on our servers, as described in section 6 and in our{" "}
          <Link href="/privacy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>
          .
        </LegalP>
        <LegalP>
          The Service is offered on an &quot;as is&quot; and &quot;as available&quot; basis. We may
          add, change, suspend or remove any tool or feature at any time.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Eligibility">
        <LegalP>
          You must be legally capable of entering into a binding agreement in your jurisdiction to
          use the Service. If you use the Service on behalf of an organisation, you represent that
          you are authorised to bind that organisation to these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable" title="4. Acceptable Use">
        <LegalP>You agree that you will not use the Service to:</LegalP>
        <LegalUl>
          <li>
            upload, process or distribute any material that is unlawful, or that you do not have the
            right to use — including material that infringes copyright, trade marks, privacy or
            publicity rights;
          </li>
          <li>
            process child sexual abuse material, non-consensual intimate imagery, or any content
            depicting or promoting violence, terrorism or unlawful activity;
          </li>
          <li>
            create or manipulate images intended to deceive, defraud, impersonate a real person, or
            fabricate identity or official documents;
          </li>
          <li>
            attempt to gain unauthorised access to the Service, its servers or related systems, or to
            probe, scan or test their vulnerability;
          </li>
          <li>
            interfere with or disrupt the Service, including by automated scraping, denial-of-service
            attempts, or circumventing rate limits, file-size limits or usage quotas;
          </li>
          <li>
            resell, sublicense or commercially redistribute the Service itself, or use it to build a
            competing service; or
          </li>
          <li>use the Service in any way that violates any applicable law or regulation.</li>
        </LegalUl>
        <LegalCallout>
          You are solely responsible for the content you process and for ensuring you have the legal
          right to do so. We may block, rate-limit or refuse access to anyone we reasonably believe
          is breaching these Terms, without notice and without liability.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="content" title="5. Your Content">
        <LegalP>
          You retain all ownership of the images and files you process (&quot;Your Content&quot;). We
          claim no ownership over them.
        </LegalP>
        <LegalP>
          For the tools that process on our servers, you grant us a limited, temporary, worldwide,
          royalty-free licence to store, transmit and process Your Content <strong>solely</strong> to
          perform the operation you requested and return the result to you. That licence ends when
          the file is deleted. We do not use Your Content to train models, and we do not sell, share
          or publish it.
        </LegalP>
        <LegalP>
          You represent and warrant that you own Your Content or have all rights and permissions
          necessary to process it through the Service.
        </LegalP>
      </LegalSection>

      <LegalSection id="files" title="6. File Handling & Deletion">
        <LegalP>
          Most tools process files entirely in your browser; those files are never transmitted to us.
          Files are uploaded to our servers only when the file exceeds the browser processing
          threshold, when you use an AI tool, or when you use HEIC conversion, which must run
          server-side for licensing reasons.
        </LegalP>
        <LegalP>
          Uploaded files and their results are stored transiently and deleted automatically within
          approximately one hour. Download links are unguessable but unauthenticated — anyone with
          the link can retrieve that file until it expires, so treat links as confidential.
        </LegalP>
        <LegalP>
          You are responsible for keeping your own copies. We are not a storage or backup service and
          we do not guarantee that any processed file will remain retrievable.
        </LegalP>
      </LegalSection>

      <LegalSection id="availability" title="7. Availability & Changes">
        <LegalP>
          We do not guarantee that the Service will be uninterrupted, timely, secure or error-free.
          The Service may be unavailable for maintenance, upgrades, or reasons beyond our control.
        </LegalP>
        <LegalP>
          Server-dependent tools require their underlying software to be installed and operational;
          where it is not, the tool will report that it is unavailable rather than producing a
          result. We may modify or discontinue any part of the Service at any time without notice.
        </LegalP>
      </LegalSection>

      <LegalSection id="warranties" title="8. Disclaimer of Warranties">
        <LegalP>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTIES
          OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY. TO THE MAXIMUM EXTENT PERMITTED BY
          APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
        </LegalP>
        <LegalP>
          WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, THAT OUTPUT WILL BE
          ACCURATE OR OF ANY PARTICULAR QUALITY, OR THAT ANY DEFECT WILL BE CORRECTED. YOU USE THE
          SERVICE AT YOUR OWN RISK, AND YOU ARE RESPONSIBLE FOR VERIFYING RESULTS AND RETAINING
          ORIGINALS BEFORE RELYING ON ANY PROCESSED FILE.
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitation of Liability">
        <LegalP>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {SITE.name}, ITS
          OPERATOR, OWNERS, CONTRIBUTORS OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
          REVENUE, GOODWILL, DATA, IMAGES OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATING TO
          YOUR USE OF OR INABILITY TO USE THE SERVICE — WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE,
          STRICT LIABILITY OR ANY OTHER THEORY, AND EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </LegalP>
        <LegalP>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY FOR ALL
          CLAIMS RELATING TO THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU ACTUALLY
          PAID US FOR THE SERVICE IN THE THREE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM,
          OR (B) USD 50.
        </LegalP>
        <LegalP>
          Some jurisdictions do not allow the exclusion or limitation of certain warranties or
          liabilities. Where that is the case, the exclusions and limitations above apply only to the
          fullest extent permitted, and nothing in these Terms limits liability for fraud, or for
          death or personal injury caused by negligence, where such limitation is prohibited by law.
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" title="10. Indemnification">
        <LegalP>
          You agree to indemnify, defend and hold harmless {SITE.name}, its operator, owners and
          contributors from and against any claims, demands, damages, losses, liabilities, costs and
          expenses (including reasonable legal fees) arising out of or relating to: (a) Your Content;
          (b) your use or misuse of the Service; (c) your breach of these Terms; or (d) your
          violation of any law or of the rights of any third party.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="11. Intellectual Property">
        <LegalP>
          The Service — including its name, branding, design, interface and original code — is owned
          by its operator and protected by intellectual property laws. These Terms grant you a
          limited, personal, non-exclusive, non-transferable, revocable licence to use the Service
          for its intended purpose. No other rights are granted.
        </LegalP>
        <LegalP>
          You may use the output you generate from your own images for any lawful purpose, including
          commercially.
        </LegalP>
      </LegalSection>

      <LegalSection id="thirdparty" title="12. Third-Party Software & Links">
        <LegalP>
          The Service is built on open-source components, each licensed by its respective authors.
          Attributions and full licence texts are available in our{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            third-party notices
          </a>
          . Those components are provided by their authors without warranty.
        </LegalP>
        <LegalP>
          The Service may link to third-party websites. We do not control them, do not endorse them,
          and accept no responsibility for their content, practices or availability.
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" title="13. Paid Plans & Billing">
        <LegalP>
          The Service is currently free to use and no paid plans are active. The following applies if
          and when paid plans launch.
        </LegalP>
        <LegalUl>
          <li>Prices are shown before purchase and may change with notice for future billing periods.</li>
          <li>
            Subscriptions renew automatically for the same period until cancelled. You may cancel at
            any time, effective at the end of the current period.
          </li>
          <li>
            Payments would be handled by a third-party payment processor; we would not receive or
            store your full card details.
          </li>
          <li>
            You are responsible for any taxes, and for keeping your billing details accurate.
          </li>
          <li>
            We may suspend access to paid features if payment fails or is reversed.
          </li>
        </LegalUl>
        <LegalP>
          Refunds are governed by our{" "}
          <Link href="/refunds" className="text-secondary hover:underline">
            Refund Policy
          </Link>
          , which forms part of these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" title="14. Termination">
        <LegalP>
          We may suspend or terminate your access to the Service at any time, with or without notice,
          if we reasonably believe you have breached these Terms or that your use poses a risk to the
          Service or to others. You may stop using the Service at any time.
        </LegalP>
        <LegalP>
          Sections that by their nature should survive termination — including sections 5, 8, 9, 10,
          11, 15 and 16 — survive.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing" title="15. Governing Law and Dispute Resolution">
        <LegalP>
          These Terms are governed by and construed in accordance with applicable law, without regard
          to conflict of law principles. Any dispute arising from or relating to these Terms or the
          Service shall be resolved in the courts of competent jurisdiction.
        </LegalP>
        <LegalP>
          If you are a consumer resident in the European Union or the United Kingdom, you may also
          have the benefit of any mandatory provisions of the law of the country in which you reside.
          Nothing in these Terms affects your rights as a consumer to rely on such mandatory
          provisions.
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="16. Miscellaneous">
        <LegalSubsection title="Entire agreement">
          <LegalP>
            These Terms, together with the Privacy Policy and Refund Policy, are the entire agreement
            between you and us regarding the Service.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Severability">
          <LegalP>
            If any provision is held unenforceable, it will be modified to the minimum extent
            necessary, and the remaining provisions remain in full force.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="No waiver">
          <LegalP>
            Our failure to enforce any provision is not a waiver of our right to do so later.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Assignment">
          <LegalP>
            You may not assign these Terms without our consent. We may assign them in connection with
            a merger, acquisition or sale of assets.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Changes to these Terms">
          <LegalP>
            We may update these Terms from time to time. The &quot;last updated&quot; date above
            reflects the current version, and continued use after a change constitutes acceptance.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="contact" title="17. Contact">
        <LegalP>
          Questions about these Terms can be sent through the options on our{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
