import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How oMyImage handles your images and data. Most tools run entirely in your browser; server-processed files are deleted within an hour. No tracking, no ads, no account required.",
  alternates: { canonical: "/privacy" },
};

const toc = [
  { id: "summary", title: "Summary" },
  { id: "images", title: "1. Your images" },
  { id: "browser", title: "2. Browser vs server processing" },
  { id: "retention", title: "3. Retention & deletion" },
  { id: "collect", title: "4. What we collect" },
  { id: "storage", title: "5. Browser storage" },
  { id: "subprocessors", title: "6. Third-party services" },
  { id: "future", title: "7. Planned features" },
  { id: "rights", title: "8. Your rights" },
  { id: "children", title: "9. Children" },
  { id: "security", title: "10. Security" },
  { id: "changes", title: "11. Changes" },
  { id: "contact", title: "12. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="What happens to your images and your data when you use oMyImage."
      updated="3 August 2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Summary">
        <LegalCallout>
          Most oMyImage tools run <strong>entirely inside your browser</strong> — your images are
          never uploaded. A few tools need our server; those files are processed, returned, and
          deleted within about an hour. We do not require an account, we do not show ads, and we do
          not run analytics or tracking of any kind.
        </LegalCallout>
        <LegalP>
          This policy explains that in detail. It describes what the service does today, and flags
          clearly where something is planned rather than live.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Your images">
        <LegalP>
          Your images are yours. We do not claim ownership of anything you process, we do not use
          your images to train models, and we do not sell, share, publish or reuse them for any
          purpose.
        </LegalP>
        <LegalP>
          Whether an image leaves your device at all depends on which tool you use — see the next
          section.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Browser vs server processing">
        <LegalSubsection title="Processed in your browser (no upload)">
          <LegalP>
            The majority of tools use your browser&apos;s own canvas engine. The image is read from
            your device into memory, processed locally, and saved back by you. Nothing is
            transmitted to us, and these tools continue to work even if our server is offline.
          </LegalP>
          <LegalP>
            This covers crop, resize, rotate, compress, convert, watermark, meme, the all-in-one
            editor, blur, borders, circle crop, merge, GIF tools, colour tools, metadata viewing and
            image-to-PDF, for files up to 15&nbsp;MB.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Processed on our server (uploaded)">
          <LegalP>Your image is uploaded to our server in three situations:</LegalP>
          <LegalUl>
            <li>
              <strong>Files larger than 15&nbsp;MB</strong> — browser processing becomes unreliable
              at that size, so the work is handed to our server automatically.
            </li>
            <li>
              <strong>The AI tools</strong> — Remove Background and Upscale Image run models that are
              far too heavy for a browser.
            </li>
            <li>
              <strong>HEIC to JPG, at any size.</strong> This one is a licensing constraint rather
              than a technical one: the only open-source HEIC decoders cannot be distributed to
              browsers under their licence, so the conversion has to happen on our server.
            </li>
          </LegalUl>
          <LegalP>
            Each of those tools states on its own page that it uploads. If a tool does not say so, it
            does not upload.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Retention & deletion">
        <LegalP>
          Images processed in your browser are never received by us, so there is nothing for us to
          retain.
        </LegalP>
        <LegalP>
          For server-processed images, the uploaded file is held only for as long as the conversion
          takes and is then discarded. The result is stored briefly behind a private download link
          and automatically deleted within approximately one hour. We do not keep backups of your
          files, and we do not archive them.
        </LegalP>
        <LegalCallout>
          Download links are unguessable but not authenticated. Treat a link as a secret — anyone
          holding it can fetch that file until it expires.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. What we collect">
        <LegalP>
          We do not ask for your name, email address or any other personal detail to use the tools.
          There is no account, no newsletter and no contact form on this site.
        </LegalP>
        <LegalP>
          Like any web service, our server and our hosting providers automatically process basic
          technical data as part of delivering the site — IP address, browser user-agent, requested
          URL and timestamp. This is used to serve the request, apply rate limits, and detect abuse.
          We do not build profiles from it and we do not combine it with anything else.
        </LegalP>
        <LegalP>
          <strong>We run no analytics, no advertising and no tracking scripts.</strong> There is no
          Google Analytics, no session recording, no advertising pixel and no cross-site tracking on
          oMyImage.
        </LegalP>
      </LegalSection>

      <LegalSection id="storage" title="5. Browser storage">
        <LegalP>
          We set no tracking cookies. We do use your browser&apos;s local storage for a few
          functional preferences, which stay on your device and are never sent to us:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> — whether you chose light or dark mode.
          </li>
          <li>
            <code>omyimage:favorites</code> and recently-used tools — so your shortcuts persist.
          </li>
          <li>
            <code>omyimage:currency</code> — the currency you selected on the pricing page.
          </li>
          <li>
            <code>omyimage:premium-usage</code> — a local count of premium tool runs used today.
          </li>
        </LegalUl>
        <LegalP>
          Clearing your browser&apos;s site data removes all of them. Nothing here identifies you.
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Third-party services">
        <LegalP>
          We keep third parties to a minimum. These are the only ones involved in running oMyImage:
        </LegalP>
        <LegalTable
          rows={[
            ["Cloudflare", "Website hosting, CDN and DDoS protection", "cloudflare.com/privacypolicy"],
            ["Contabo", "Server hosting for the tools that process on our server", "contabo.com/en/legal/privacy-policy"],
            ["Google Fonts", "Serves the icon font used across the interface", "policies.google.com/privacy"],
          ]}
        />
        <LegalP>
          Because the icon font is requested from Google&apos;s CDN, Google receives your IP address
          and user-agent when a page loads, as it would for any site using that font. Our two text
          typefaces are served from our own domain and involve no third party.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="7. Planned features">
        <LegalP>
          Some features are planned but not yet live. We are describing them here in advance so this
          policy stays honest as they arrive, and so you know what to expect. <strong>None of the
          following is active today.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Accounts.</strong> If we introduce sign-in, we would collect an email address and
            a securely hashed password, solely to authenticate you and to associate any plan you
            hold. You would be able to delete your account and its data.
          </li>
          <li>
            <strong>Paid plans.</strong> If we introduce paid plans, payment would be handled by a
            third-party payment processor. Card details would go to that processor directly and would
            never reach or be stored on our servers. We would receive only a transaction reference
            and its status.
          </li>
          <li>
            <strong>Analytics.</strong> If we introduce analytics, we would use it only to understand
            aggregate usage — which tools are popular, where errors occur. Where the law requires
            consent, we would ask for it first via a cookie banner, and the site would keep working
            if you declined.
          </li>
        </LegalUl>
        <LegalP>
          When any of these goes live, this policy will be updated and the &quot;last updated&quot;
          date at the top will change before the feature is switched on.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="8. Your rights">
        <LegalP>
          Depending on where you live, you may have rights to access, correct, export or erase
          personal data held about you, and to object to certain processing. Because we do not
          operate accounts and do not retain your images, in practice we usually hold nothing about
          you that could be retrieved.
        </LegalP>
        <LegalP>
          If you believe we hold data relating to you, contact us using the details on our{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>{" "}
          and we will respond within a reasonable period. You may also complain to your local data
          protection authority.
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="9. Children">
        <LegalP>
          oMyImage is a general-purpose utility and is not directed at children. We do not knowingly
          collect personal data from children. Since using the tools requires no account and no
          personal information, there is normally nothing to collect.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="10. Security">
        <LegalP>
          The site is served over HTTPS. Uploads to our server are encrypted in transit, processed in
          isolation, and deleted on the schedule described above. We apply rate limits and upload
          size limits to protect the service.
        </LegalP>
        <LegalP>
          No online service can promise perfect security. Please do not upload material you cannot
          afford to have exposed in the unlikely event of a breach — and remember that for most tools
          the safest option is already the default, because the file never leaves your device.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes">
        <LegalP>
          We may update this policy as the service evolves. The &quot;last updated&quot; date at the
          top of this page always reflects the current version. Material changes will be reflected
          here before they take effect.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <LegalP>
          Questions about this policy, or about how your data is handled, can be sent through the
          options on our{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>
          . Please also see our{" "}
          <Link href="/terms" className="text-secondary hover:underline">
            Terms of Service
          </Link>
          , which govern your use of {SITE.name}.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
