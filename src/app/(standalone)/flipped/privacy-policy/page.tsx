import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="space-y-8 text-[15px] leading-relaxed text-[#333]">
      <header className="space-y-3">
        <h1 className="text-2xl font-medium tracking-tight text-[#1a1a1a] sm:text-3xl">
          Privacy Policy — Flipped
        </h1>
        <p className="text-sm text-[#888]">Last updated: August 22, 2026</p>
      </header>

      <aside className="rounded border border-[#e8c96a] bg-[#fff8e1] px-4 py-3 text-sm text-[#5c4a00]">
        <strong>DRAFT.</strong> This document was written to support development
        and App Store submission. It has not been reviewed by an attorney.
      </aside>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">1. Who We Are</h2>
        <p>
          This Privacy Policy explains how Stonebrook Digital LLC
          (&quot;Stonebrook,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), the operator of the Flipped mobile application (the
          &quot;App&quot;), collects, uses, and shares your information.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          2. Information We Collect
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            2.1 Information You Provide
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Phone number</strong> — collected when you link a phone
              number to upgrade from a guest session to a full account.
            </li>
            <li>
              <strong>Identity verification data</strong> — when you request
              shipment of a physical item, we collect the information required by
              our identity verification provider, Persona, which may include a
              government-issued ID, a liveness/selfie image, and associated
              identity data.
            </li>
            <li>
              <strong>Shipping address</strong> — collected when you request
              physical delivery of an item.
            </li>
            <li>
              <strong>Payment information</strong> — collected and processed by
              our payment processor(s) (Braintree/PayPal). We do not store your
              full card number.
            </li>
            <li>
              <strong>Support communications</strong> — information you provide
              when contacting support, including chat messages, tickets, and any
              attachments you share.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            2.2 Information Collected Automatically
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Device and usage data</strong> — device type, operating
              system, app version, crash logs, and general usage/interaction
              data.
            </li>
            <li>
              <strong>Approximate location (IP-based)</strong> — used solely to
              enforce geographic eligibility restrictions (see Section 3). We do
              not collect precise GPS location.
            </li>
            <li>
              <strong>Anonymous session identifiers</strong> — Guest sessions are
              assigned a temporary identifier before any personal information is
              collected.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            2.3 Information from Third Parties
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Identity verification results from Persona.</li>
            <li>
              Card pricing/market value data from our pricing data provider
              (Scrydex), which does not include information about you personally.
            </li>
            <li>Transaction confirmations from our payment processor.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          3. How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Operate and maintain your account and Credit balance</li>
          <li>Process Flips, shipments, and vault activity</li>
          <li>Verify your identity before releasing a physical shipment</li>
          <li>
            Enforce eligibility restrictions, including age (18+) and geographic
            restrictions (Washington State residents are not eligible to use the
            Services)
          </li>
          <li>Prevent fraud, abuse, and duplicate account creation</li>
          <li>Provide customer support</li>
          <li>Comply with legal, tax, and regulatory obligations</li>
          <li>Improve and maintain the App</li>
        </ul>
        <p>
          We do <strong>not</strong> use your information for interest-based
          advertising, and we do not sell your personal information to third
          parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          4. How We Share Your Information
        </h2>
        <p>
          We share information only as necessary to operate the Services:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#ddd]">
                <th className="py-2 pr-4 font-medium text-[#1a1a1a]">
                  Recipient
                </th>
                <th className="py-2 font-medium text-[#1a1a1a]">Purpose</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Persona</td>
                <td className="py-2.5">
                  Identity verification prior to shipment
                </td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Braintree / PayPal</td>
                <td className="py-2.5">Payment processing</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Scrydex</td>
                <td className="py-2.5">
                  Card pricing data (does not receive your personal data)
                </td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Shipping carriers</td>
                <td className="py-2.5">
                  Delivery of physical items you&apos;ve requested
                </td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Firebase / Google Cloud</td>
                <td className="py-2.5">
                  Underlying infrastructure for account, data storage, and app
                  functionality
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Law enforcement or regulators</td>
                <td className="py-2.5">
                  Where required by law, subpoena, or valid legal process
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not share your identity verification data with any party other
          than Persona and, where legally required, regulators or law
          enforcement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          5. Data Retention
        </h2>
        <p>
          We retain your information for as long as your account is active and as
          needed to comply with legal, tax, and fraud-prevention obligations.
          Identity verification records are retained in accordance with
          applicable recordkeeping requirements even after account deletion,
          where required by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          6. Your Choices and Rights
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account deletion</strong>: You may delete your account and
            associated personal information at any time from the Account screen
            in the App, or by emailing{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>
            , subject to the retention exceptions described in Section 5 and
            Section 4.4 of our{" "}
            <Link
              href="/flipped/tos"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              Terms of Service
            </Link>
            . Deletion may be blocked until vault items and pending shipments
            are resolved; remaining Credits are forfeited on deletion.
          </li>
          <li>
            <strong>Access/correction</strong>: You may contact us to request a
            copy of the personal information we hold about you or to correct
            inaccurate information.
          </li>
          <li>
            <strong>California privacy rights (CCPA/CPRA)</strong>: If you are a
            California resident, you may have the right to request that we
            disclose what personal information we collect and how we use it,
            delete personal information (subject to legal exceptions), and opt
            out of the &quot;sale&quot; or &quot;sharing&quot; of personal
            information. We do not sell or share personal information as those
            terms are defined under California law. To exercise these rights,
            email{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>
            . We will not discriminate against you for exercising your privacy
            rights.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:hello@stonebrooknyc.com"
            className="underline underline-offset-2 hover:text-[#1a1a1a]"
          >
            hello@stonebrooknyc.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          7. Children&apos;s Privacy
        </h2>
        <p>
          The Services are not directed to, and are not intended for use by,
          anyone under 18. We do not knowingly collect information from anyone
          under 18. If we become aware that we have collected information from a
          user under 18, we will delete it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          8. Data Security
        </h2>
        <p>
          We use commercially reasonable technical and organizational measures to
          protect your information, including access controls on our backend
          systems and encrypted transmission of sensitive data. No system is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          9. International Users
        </h2>
        <p>
          The Services are intended for use by residents of the United States
          only (excluding Washington State). If you access the Services from
          outside the United States, your information will be transferred to and
          processed in the United States.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be communicated via the App or by email. Continued use of the
          Services after changes take effect constitutes acceptance of the
          updated policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">11. Contact Us</h2>
        <p>
          Questions about this Privacy Policy can be directed to:
        </p>
        <p>
          Stonebrook Digital LLC
          <br />
          Brooklyn, New York
          <br />
          <a
            href="mailto:hello@stonebrooknyc.com"
            className="underline underline-offset-2 hover:text-[#1a1a1a]"
          >
            hello@stonebrooknyc.com
          </a>
        </p>
      </section>
    </article>
  );
}
