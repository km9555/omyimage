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
  { id: "google-drive", title: "7. Google Drive import" },
  { id: "future", title: "8. Planned features" },
  { id: "rights", title: "9. Your rights" },
  { id: "children", title: "10. Children" },
  { id: "security", title: "11. Security" },
  { id: "changes", title: "12. Changes" },
  { id: "contact", title: "13. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="What happens to your images and your data when you use oMyImage."
      updated="19 August 2026"
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
          We use <strong>Google Analytics 4</strong>, and only with your consent. Until you accept
          analytics cookies the script is never requested — it is not loaded and then switched off,
          it is simply absent, so no analytics cookie is created for a visitor who declined or who
          never answered the banner. What it collects is aggregate: which tools are used, which pages
          error, roughly where visitors come from. We do not use it to identify you and we do not
          connect it to anything you process.
        </LegalP>
        <LegalP>
          <strong>We run no advertising and no cross-site tracking.</strong> There is no session
          recording, no advertising pixel and no ad network on oMyImage. You can change or withdraw
          your analytics consent at any time through <strong>Cookie Settings</strong> in the footer —
          see our{" "}
          <Link href="/cookies" className="text-secondary hover:underline">
            Cookie Policy
          </Link>{" "}
          for the detail.
        </LegalP>
      </LegalSection>

      <LegalSection id="storage" title="5. Browser storage">
        <LegalP>
          oMyImage sets no cookies of its own. We use your browser&apos;s local storage for a few
          functional preferences, which stay on your device and are never sent to us:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> — whether you chose light or dark mode.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> and <code>omyimage_cookie_prefs</code> — your answer
            to the cookie banner.
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
          Cookies set by third parties — Cloudflare, and Google Analytics once you allow it — are
          listed in our{" "}
          <Link href="/cookies" className="text-secondary hover:underline">
            Cookie Policy
          </Link>
          .
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
            ["Google Analytics", "Aggregate usage measurement, loaded only if you accept analytics cookies", "policies.google.com/privacy"],
            ["Google Drive (optional)", "Imports only the files you pick, and only when you use it — see section 7", "policies.google.com/privacy"],
          ]}
        />
        <LegalP>
          Because the icon font is requested from Google&apos;s CDN, Google receives your IP address
          and user-agent when a page loads, as it would for any site using that font. Our two text
          typefaces are served from our own domain and involve no third party.
        </LegalP>
      </LegalSection>

      {/*
        Google Drive / OAuth disclosure.

        Required by Google's OAuth app verification, which checks the privacy
        policy for a description of what Google user data is accessed, why, and
        how it is handled — plus the Limited Use sentence, which is prescribed
        wording and should not be paraphrased. Keep the scope named here in sync
        with lib/google-drive.ts (currently drive.file only); adding a scope
        means updating this section and re-submitting for verification.
      */}
      <LegalSection id="google-drive" title="7. Google Drive import">
        <LegalP>
          Connecting Google is optional. Every tool on oMyImage works without it, and nothing on the
          site asks you to sign in. The connection exists for a single feature: importing an image
          you already keep in Google Drive, instead of uploading it from your device.
        </LegalP>

        <LegalSubsection title="What we ask for, and what it allows">
          <LegalP>
            When you choose &quot;Import from Google Drive&quot;, we request one narrow permission:{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. That scope grants access only
            to the specific files you select in Google&apos;s own file picker. It does not let us
            list, browse, search or open anything else in your Drive, and it gives us no view of
            your folders, your file names or your storage as a whole.
          </LegalP>
          <LegalP>
            The permission is also one-directional in practice: we read the file you picked. We do
            not create, rename, modify, move or delete anything in your Drive.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="What happens to the file and the token">
          <LegalUl>
            <li>
              The access token Google issues is held in your browser&apos;s memory for that visit
              only. It is never transmitted to our servers, never written to disk, and disappears
              when you close the tab.
            </li>
            <li>
              The file you pick is downloaded from Google straight into your browser. It does not
              pass through our servers on the way in.
            </li>
            <li>
              From that point the file is treated exactly like one you dragged in from your desktop
              — processed in your browser, or uploaded to our server only if you chose a tool that
              says it uploads, under the same retention rules described in sections 2 and 3.
            </li>
            <li>
              We do not keep a copy of your Google files, do not index them, and do not retain any
              record of what you imported.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          oMyImage&apos;s use and transfer of information received from Google APIs to any other app
          will adhere to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. In particular, we do not use Google user data
          for advertising, we do not sell or transfer it, and we do not use it to train
          generalised or artificial-intelligence models.
        </LegalCallout>

        <LegalP>
          You can withdraw this access whenever you like, without affecting the rest of the site,
          from your{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google Account permissions page
          </a>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="8. Planned features">
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
        </LegalUl>
        <LegalP>
          When any of these goes live, this policy will be updated and the &quot;last updated&quot;
          date at the top will change before the feature is switched on.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="9. Your rights">
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

      <LegalSection id="children" title="10. Children">
        <LegalP>
          oMyImage is a general-purpose utility and is not directed at children. We do not knowingly
          collect personal data from children. Since using the tools requires no account and no
          personal information, there is normally nothing to collect.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="11. Security">
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

      <LegalSection id="changes" title="12. Changes">
        <LegalP>
          We may update this policy as the service evolves. The &quot;last updated&quot; date at the
          top of this page always reflects the current version. Material changes will be reflected
          here before they take effect.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact">
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
