import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <article className="space-y-8 text-[15px] leading-relaxed text-[#333]">
      <header className="space-y-3">
        <h1 className="text-2xl font-medium tracking-tight text-[#1a1a1a] sm:text-3xl">
          Terms of Service — Flipped
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
          Flipped (&quot;Flipped,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) is owned and operated by Stonebrook Digital LLC
          (&quot;Stonebrook&quot;), a company based in Brooklyn, New York. These
          Terms of Service (&quot;Terms&quot;) govern your access to and use of
          the Flipped mobile application (the &quot;App&quot;) and any related
          services (collectively, the &quot;Services&quot;).
        </p>
        <p>
          By creating an account, verifying your identity, or otherwise using the
          Services, you agree to be bound by these Terms. If you do not agree, do
          not use the Services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">2. Eligibility</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You must be <strong>at least 18 years old</strong> to use the
            Services.
          </li>
          <li>You must be a legal resident of the United States.</li>
          <li>
            <strong>
              The Services are not available to residents of Washington State.
            </strong>{" "}
            We use IP-based geolocation to enforce this restriction; attempting
            to circumvent it (e.g., via VPN) is a violation of these Terms and
            may result in account suspension.
          </li>
          <li>
            You may hold <strong>only one account</strong>. Creating multiple
            accounts to circumvent limits, promotions, or restrictions is
            prohibited and may result in suspension of all associated accounts
            and forfeiture of credit balances, at our discretion.
          </li>
          <li>
            By using the Services, you represent that you meet all of the above
            requirements.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          3. What Flipped Is (and Isn&apos;t)
        </h2>
        <p>
          Flipped is a <strong>goods-commerce platform</strong>, not a gambling
          or gaming platform. When you pay to &quot;flip,&quot; you are
          purchasing the right to receive one item from a defined, disclosed pool
          of trading card inventory at a fixed price, with odds of each outcome
          disclosed in the App prior to purchase. This is comparable to
          purchasing a sealed or blind-box collectible product, a well-established
          category of retail commerce.
        </p>
        <p>Flipped does not offer:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Cash withdrawals of any kind</li>
          <li>
            Games of skill or games where outcomes are influenced by anything
            other than the disclosed probability pool
          </li>
          <li>
            Any product framed, marketed, or intended as a wagering or betting
            product
          </li>
        </ul>
        <p>
          All value earned through the Services is issued and redeemable solely
          in the form of <strong>Credits</strong>, as described in Section 5.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#1a1a1a]">4. Accounts</h2>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.1 Guest Access
          </h3>
          <p>
            You may use certain features of the App without creating a full
            account (&quot;Guest&quot; access), including browsing available
            boards and odds. Guest sessions are tied to a temporary identifier
            and are not linked to a phone number or verified identity.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.2 Full Accounts
          </h3>
          <p>
            To make a purchase (a &quot;Flip&quot;), you must link a valid phone
            number to your account via SMS verification. This is a basic identity
            requirement and is separate from the identity verification described
            in Section 6.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.3 Account Security
          </h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and for all activity that occurs under it. Notify us
            immediately of any unauthorized use.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.4 Account Deletion
          </h3>
          <p>
            You may delete your account at any time from the Account screen in
            the App (Delete account), or by emailing{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>
            . Upon deletion:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Your personal information will be deleted or anonymized, except
              where we are required to retain records for legal, tax, or
              fraud-prevention purposes.
            </li>
            <li>
              Any remaining Credit balance will be forfeited unless applicable
              law requires otherwise.
            </li>
            <li>
              You must resolve vault items and pending shipments before
              deletion can complete. The App will block deletion and explain
              what still needs to be cleared.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">5. Credits</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Credits are the sole unit of value used within the Services. Credits
            are displayed at a{" "}
            <strong>
              1:1 nominal correspondence to U.S. dollars for user convenience
              only
            </strong>{" "}
            and do not constitute currency, a deposit, a security, or a
            stored-value instrument redeemable for cash.
          </li>
          <li>
            Credits may be acquired by making a deposit through our supported
            payment processor.
          </li>
          <li>
            <strong>
              Credits cannot be withdrawn, cashed out, transferred to another
              user, or redeemed for cash under any circumstances.
            </strong>
          </li>
          <li>
            Credits may be used to purchase Flips, pay shipping fees, or for
            other purposes we may enable within the App.
          </li>
          <li>
            We reserve the right to expire, adjust, or revoke Credits obtained
            through fraud, error, or violation of these Terms.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          6. Identity Verification (KYC)
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You are{" "}
            <strong>
              not required to complete identity verification to make a purchase
              or accumulate Credits.
            </strong>
          </li>
          <li>
            You <strong>are required to complete identity verification</strong>{" "}
            before you may request physical shipment of any item won through the
            Services.
          </li>
          <li>
            Identity verification is performed by our third-party provider,
            Persona. By completing verification, you agree to Persona&apos;s
            applicable terms and privacy practices.
          </li>
          <li>
            If you fail verification, your shipment request may be placed under
            manual review. If you do not pass manual review, we may require
            additional documentation before releasing any shipment.
          </li>
          <li>
            We reserve the right to suspend your account or withhold shipment if
            we cannot reasonably verify your identity or eligibility.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          7. Flips, Vault, and Shipping
        </h2>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">7.1 Flips</h3>
          <p>
            Each Flip draws one item from a disclosed, weighted pool tied to the
            board you select. Odds for each outcome are displayed before purchase
            and reflect the current composition of that pool.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            7.2 The Vault
          </h3>
          <p>After a Flip, you may choose to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Ship</strong> the physical item to you (subject to Section
              6 and applicable shipping fees), or
            </li>
            <li>
              <strong>Vault</strong> the item, holding it virtually for a period
              of <strong>30 days</strong>.
            </li>
          </ul>
          <p>
            If you take no action within the 30-day vault window, the item will
            automatically convert to Credits at its{" "}
            <strong>Flip Value</strong> — defined as the item&apos;s then-current
            market price (sourced via our pricing data provider) multiplied by
            90%. This automatic conversion is disclosed to you at the time an
            item enters the vault.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            7.3 Shipping
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Shipping fees are tiered based on the value of the bundle being
              shipped and are disclosed before you confirm a shipment request.
            </li>
            <li>
              You are responsible for providing an accurate shipping address. We
              are not responsible for items lost due to an incorrect address
              provided by you.
            </li>
            <li>
              Applicable sales tax will be assessed at the time of shipment and
              deducted from your Credit balance.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          8. Prohibited Conduct
        </h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Use the Services if you are located in Washington State or are under
            18
          </li>
          <li>Create more than one account</li>
          <li>
            Use automated tools, bots, or scripts to interact with the Services
          </li>
          <li>
            Attempt to manipulate, reverse-engineer, or exploit the probability
            systems underlying Flips
          </li>
          <li>Provide false information during identity verification</li>
          <li>Use the Services for any unlawful purpose</li>
        </ul>
        <p>
          Violation of this section may result in suspension or termination of
          your account and forfeiture of Credits, at our sole discretion.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">9. Payments</h2>
        <p>
          Deposits are processed through our third-party payment processor(s),
          including Braintree/PayPal. By making a deposit, you agree to the
          applicable terms of our payment processor. We do not store your full
          payment card details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">10. Disclaimers</h2>
        <p className="uppercase">
          The Services are provided &quot;as is&quot; without warranties of any
          kind, express or implied. We do not guarantee that the Services will be
          uninterrupted, error-free, or secure.
        </p>
        <p>
          Pricing data (including Flip Value calculations) is sourced from
          third-party market data providers and may fluctuate or contain
          inaccuracies. We do not guarantee the accuracy of any displayed market
          value.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          11. Limitation of Liability
        </h2>
        <p className="uppercase">
          To the maximum extent permitted by law, Stonebrook Digital LLC and its
          affiliates shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of the
          Services. Our total liability for any claim shall not exceed the amount
          you paid to us in the 12 months preceding the claim.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          12. Governing Law and Disputes
        </h2>
        <p>
          These Terms are governed by the laws of the State of New York, without
          regard to conflict-of-law rules. Any dispute arising out of or relating
          to these Terms or the Services will be resolved exclusively in the
          state or federal courts located in Kings County, New York, and you
          consent to personal jurisdiction in those courts.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          13. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. Material changes will be
          communicated via the App or by email. Continued use of the Services
          after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">14. Contact</h2>
        <p>Questions about these Terms can be directed to:</p>
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

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">15. Termination</h2>
        <p>
          We may suspend or terminate your access to the Services at any time,
          with or without cause, including for violation of these Terms. Sections
          relating to Credits forfeiture, limitation of liability, and dispute
          resolution survive termination.
        </p>
        <p className="pt-2 text-sm text-[#888]">
          See also our{" "}
          <Link
            href="/flipped/privacy-policy"
            className="underline underline-offset-2 hover:text-[#1a1a1a]"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
