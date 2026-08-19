import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What oMyImage stores in your browser, why, and how to control it. Necessary storage only by default — analytics stays off until you allow it.",
  alternates: { canonical: absoluteUrl("/cookies") },
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. What are cookies" },
  { id: "consent", title: "2. Your consent" },
  { id: "types", title: "3. What we store" },
  { id: "third", title: "4. Third-party cookies" },
  { id: "control", title: "5. How to control cookies" },
  { id: "changes", title: "6. Changes to this policy" },
  { id: "contact", title: "7. Contact" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      subtitle="What oMyImage stores in your browser, why it is stored, and how to change your mind."
      updated="19 August 2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. What are cookies">
        <LegalCallout>
          oMyImage sets no cookies of its own. What it stores is a handful of{" "}
          <strong>local storage</strong> entries that never leave your device, plus — only if you
          allow it — analytics cookies from Google. Your images are never involved in any of this.
        </LegalCallout>
        <LegalP>
          Cookies are small text files a website stores on your device when you visit it. They are
          widely used to make sites work, to remember your preferences, and to tell site owners how
          their site is being used. A cookie can be a &ldquo;session&rdquo; cookie, deleted when you
          close your browser, or a &ldquo;persistent&rdquo; one that stays for a set period or until
          you delete it.
        </LegalP>
        <LegalP>
          Closely related technologies include web storage (<code>localStorage</code> and{" "}
          <code>sessionStorage</code>) and pixel tags. This policy uses &ldquo;cookies&rdquo; to
          cover all of them, because the practical question — what is kept on your device and who
          can read it — is the same.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Your consent">
        <LegalP>
          On your first visit a consent banner appears at the bottom of the page. Nothing optional is
          loaded before you answer it. You have three choices:
        </LegalP>
        <LegalUl>
          <li>
            <strong>Accept All</strong> — necessary storage plus analytics. Google Analytics loads
            and we can see, in aggregate, which tools people use.
          </li>
          <li>
            <strong>Reject All</strong> — necessary storage only. Google Analytics is never loaded
            and no analytics data is collected from your visit.
          </li>
          <li>
            <strong>Customize</strong> — choose category by category. Necessary storage cannot be
            switched off, because without it the site cannot remember your theme or, indeed, this
            very choice.
          </li>
        </LegalUl>
        <LegalP>
          Your answer is stored on your device under{" "}
          <code>omyimage_cookie_consent</code> and <code>omyimage_cookie_prefs</code>. You can change
          it at any time using the <strong>Cookie Settings</strong> link in the footer of any page.
          Because analytics scripts can only be added or removed on a fresh page load, changing that
          particular setting reloads the page.
        </LegalP>
        <LegalP>
          We do not use advertising or cross-site tracking cookies, and we do not share your data
          with advertising networks.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. What we store">
        <LegalSubsection title="Necessary — always active">
          <LegalP>
            These are <code>localStorage</code> entries, not cookies: they are written by the site,
            read only by the site, and never transmitted to us or anyone else. They cannot be turned
            off, because they are what makes the interface remember anything at all. Clearing your
            browser&apos;s site data removes every one of them.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> — whether you chose light or dark mode.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> and <code>omyimage_cookie_prefs</code> — your
              answer to the consent banner, so you are not asked on every page.
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
            Cloudflare, which serves and protects the site, may also set its own strictly necessary
            cookies for rate limiting and bot detection. These are covered in section 4.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Analytics — only with your consent">
          <LegalP>
            If you accept analytics, we load Google Analytics 4 to understand how the site is used in
            aggregate: which tools are popular, which pages error, roughly where visitors come from.
            We use this to decide what to build and fix. It is never used to identify you, and we do
            not attempt to link it to anything you process.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> — distinguish unique users and sessions. Expire
              after 2 years.
            </li>
            <li>
              <code>_gid</code> — distinguishes users within a 24-hour window. Expires after 24
              hours.
            </li>
          </LegalUl>
          <LegalP>
            If you reject analytics, or simply never answer the banner, the Google Analytics script
            is not requested at all — these cookies are never created in the first place, rather than
            being created and then ignored.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Advertising — not used">
          <LegalP>
            We do <strong>not</strong> use advertising or tracking cookies. oMyImage runs no ads and
            shares no browsing behaviour with ad networks. The advertising toggle exists in the
            consent banner so that your preference is already recorded if that ever changes; today it
            controls nothing.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Third-party cookies">
        <LegalP>
          These are the only third parties that can set anything in your browser on oMyImage. Each is
          governed by its own policy:
        </LegalP>
        <LegalTable
          rows={[
            [
              "Cloudflare",
              "Strictly necessary security and performance cookies (rate limiting, bot detection)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Analytics cookies, set only after you accept analytics",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Serves the icon font. Sets no cookies, but Google receives your IP address as it would for any site using the font",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (optional)",
              "Only if you use Drive import. The access token is held in memory for that visit and never stored",
              "policies.google.com/privacy",
            ],
          ]}
        />
        <LegalP>
          The Google Drive integration is described in full in section 7 of our{" "}
          <Link href="/privacy#google-drive" className="text-secondary hover:underline">
            Privacy Policy
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. How to control cookies">
        <LegalSubsection title="On oMyImage">
          <LegalP>
            Use the <strong>Cookie Settings</strong> link in the footer of any page. It reopens the
            consent banner with your current choices loaded, so you can change one category without
            resetting the rest.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="In your browser">
          <LegalP>
            Every major browser lets you view, block and delete cookies and site data. Blocking
            everything will also clear the necessary entries above, which means the site will forget
            your theme and ask about cookies again:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> Settings → Privacy and security → Third-party cookies
            </li>
            <li>
              <strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Settings → Privacy → Manage Website Data
            </li>
            <li>
              <strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete
              cookies
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Opting out of Google Analytics everywhere">
          <LegalP>
            To opt out of Google Analytics on every site, not just this one, install the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Changes to this policy">
        <LegalP>
          We may update this policy as the service changes. The &ldquo;last updated&rdquo; date at the
          top of this page always reflects the current version, and material changes will be
          reflected here before they take effect.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact">
        <LegalP>
          Questions about cookies or this policy can be sent through the options on our{" "}
          <Link href="/contact" className="text-secondary hover:underline">
            contact page
          </Link>
          . Please also see our{" "}
          <Link href="/privacy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-secondary hover:underline">
            Terms of Service
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
