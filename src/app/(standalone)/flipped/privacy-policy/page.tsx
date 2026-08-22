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
        <strong>Not attorney-reviewed.</strong> This Privacy Policy describes how
        Flipped handles data today. It is not a substitute for legal advice.
      </aside>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">1. Who We Are</h2>
        <p>
          This Privacy Policy explains how Stonebrook Digital LLC
          (&quot;Stonebrook,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), operator of the Flipped mobile application (the
          &quot;App&quot;), collects, uses, and shares information when you use
          Flipped and related services (the &quot;Services&quot;).
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
              <strong>Phone number</strong> — when you upgrade from a guest
              session to a full account via SMS verification (Firebase Auth).
            </li>
            <li>
              <strong>Identity verification data</strong> — when you request
              physical shipment, Persona may collect a government-issued ID,
              liveness/selfie image, and related identity data on our behalf.
            </li>
            <li>
              <strong>Shipping address</strong> — when you request delivery of a
              card.
            </li>
            <li>
              <strong>Payment information</strong> — collected and processed by
              Braintree / PayPal for deposits and shipping fees. We do not store
              your full card number.
            </li>
            <li>
              <strong>Support communications</strong> — messages, tickets, and
              attachments you send to support or help chat.
            </li>
            <li>
              <strong>Legal consent</strong> — records that you accepted these
              Terms and this Privacy Policy (and optional marketing preferences,
              if offered).
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            2.2 Information Collected Automatically
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Device and usage data</strong> — device type, OS, app
              version, crash logs, and interaction data needed to run and improve
              the App.
            </li>
            <li>
              <strong>Approximate location (IP-based)</strong> — used to enforce
              geographic eligibility (including the Washington State restriction).
              We do not collect precise GPS location for this purpose.
            </li>
            <li>
              <strong>Anonymous session identifiers</strong> — temporary IDs for
              Guest sessions before personal information is collected.
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
              Card pricing / market data from our pricing provider (Scrydex /
              related market feeds). This is catalog pricing data, not a profile
              about you.
            </li>
            <li>Payment and deposit confirmations from Braintree / PayPal.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          3. How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Create and maintain your account and Credit balance</li>
          <li>Process Flips, vault activity, deposits, and shipments</li>
          <li>Verify identity before releasing a physical shipment</li>
          <li>
            Enforce eligibility (18+, U.S. use, Washington State exclusion)
          </li>
          <li>Prevent fraud, abuse, chargebacks, and duplicate accounts</li>
          <li>Provide customer support</li>
          <li>Comply with legal, tax, and recordkeeping obligations</li>
          <li>Operate, secure, and improve the App</li>
        </ul>
        <p>
          We do <strong>not</strong> use your information for interest-based
          advertising, and we do not sell your personal information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          4. How We Share Your Information
        </h2>
        <p>We share information only as needed to run the Services:</p>
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
                  Identity verification before shipment
                </td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Braintree / PayPal</td>
                <td className="py-2.5">Deposits and shipping fee charges</td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Pricing data provider (Scrydex)</td>
                <td className="py-2.5">
                  Card market pricing (does not receive your personal profile)
                </td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Shipping carriers</td>
                <td className="py-2.5">
                  Delivery of physical cards you request
                </td>
              </tr>
              <tr className="border-b border-[#eee]">
                <td className="py-2.5 pr-4">Firebase / Google Cloud</td>
                <td className="py-2.5">
                  Auth, database, hosting, and app infrastructure
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Law enforcement / regulators</td>
                <td className="py-2.5">
                  When required by law, subpoena, or valid legal process
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not share identity-verification data with anyone other than
          Persona and, where legally required, regulators or law enforcement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          5. Data Retention
        </h2>
        <p>
          We keep account and transaction data while your account is active and
          as long as needed for legal, tax, payment-dispute, and fraud-prevention
          purposes. After you delete your account, we delete or anonymize personal
          data we no longer need, but we may retain limited records (for example
          payment, KYC, and fraud logs) where the law or processors require it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          6. Your Choices and Rights
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account deletion</strong>: Use Delete account on the Account
            screen, or email{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>
            . Deletion is blocked until vault items, pending shipments, and active
            Flip sessions are cleared. Remaining Credits are forfeited on
            deletion (you confirm this in the App if a balance remains). See also
            Section 4.4 of our{" "}
            <Link
              href="/flipped/tos"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              Terms of Service
            </Link>
            .
          </li>
          <li>
            <strong>Access / correction</strong>: Email us to request a copy of
            personal information we hold about you, or to correct inaccurate
            information.
          </li>
          <li>
            <strong>California privacy rights (CCPA/CPRA)</strong>: If you are a
            California resident, you may request that we disclose what personal
            information we collect and how we use it, delete personal information
            (subject to legal exceptions), and opt out of the &quot;sale&quot; or
            &quot;sharing&quot; of personal information. We do not sell or share
            personal information as those terms are defined under California law.
            Email{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>{" "}
            to exercise these rights. We will not discriminate against you for
            doing so.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          7. Children&apos;s Privacy
        </h2>
        <p>
          The Services are for users 18+. We do not knowingly collect personal
          information from anyone under 18. If we learn that we have, we will
          delete it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          8. Data Security
        </h2>
        <p>
          We use commercially reasonable technical and organizational measures,
          including access controls and encrypted transmission of sensitive data.
          No system is completely secure.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          9. International Users
        </h2>
        <p>
          The Services are intended for use from the United States only
          (excluding Washington State). If you access them from elsewhere, your
          information will be processed in the United States.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          10. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy. The &quot;Last updated&quot; date
          will change when we do. Material changes will be communicated in the
          App or by email where appropriate. Continued use after changes take
          effect constitutes acceptance, except where law requires new consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">11. Contact Us</h2>
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
