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
        <strong>Not attorney-reviewed.</strong> These Terms describe how Flipped
        works today. They are not a substitute for legal advice.
      </aside>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">1. Who We Are</h2>
        <p>
          Flipped (&quot;Flipped,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) is owned and operated by Stonebrook Digital LLC
          (&quot;Stonebrook&quot;), a New York limited liability company based in
          Brooklyn, New York. These Terms of Service (&quot;Terms&quot;) govern
          your access to and use of the Flipped mobile application (the
          &quot;App&quot;) and any related services (collectively, the
          &quot;Services&quot;).
        </p>
        <p>
          By creating an account, verifying your identity, depositing funds, or
          otherwise using the Services, you agree to these Terms. If you do not
          agree, do not use the Services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">2. Eligibility</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You must be <strong>at least 18 years old</strong> and able to form a
            binding contract.
          </li>
          <li>
            You must be located in the United States when using the Services.
          </li>
          <li>
            <strong>
              The Services are not available to residents of, or users located
              in, Washington State.
            </strong>{" "}
            We may use IP-based geolocation and other signals to enforce this
            restriction. Circumventing it (including via VPN or proxy) is a
            violation of these Terms and may result in suspension, termination,
            and forfeiture of Credits.
          </li>
          <li>
            You may hold <strong>only one account</strong>. Creating multiple
            accounts to evade limits, promotions, or restrictions is prohibited
            and may result in suspension of all related accounts and forfeiture
            of Credits.
          </li>
          <li>
            By using the Services, you represent that you meet all eligibility
            requirements.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          3. What Flipped Is (and Isn&apos;t)
        </h2>
        <p>
          Flipped is a <strong>goods-commerce platform</strong> for purchasing
          real, physical trading cards. When you pay to Flip, you are buying the
          right to receive one card from a disclosed inventory pool at a fixed
          price shown in the App. Approximate odds for each outcome band are
          shown in the App before you Flip and are based on the live pool at that
          time. This is comparable to buying a sealed or blind-box collectible.
        </p>
        <p>Flipped does not offer:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Cash withdrawals or cash-out of Credits</li>
          <li>
            Wagering, betting, or staking where you risk money for a chance at
            more money
          </li>
          <li>
            Outcomes influenced by anything other than the disclosed live
            inventory pool
          </li>
        </ul>
        <p>
          In-app value is issued only as <strong>Credits</strong>, described in
          Section 5. Displayed card values are internal Flipped fair-market
          estimates used for vault conversion and shipping economics — not
          guarantees of third-party resale prices.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#1a1a1a]">4. Accounts</h2>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.1 Guest Access
          </h3>
          <p>
            You may browse certain features without a full account
            (&quot;Guest&quot; access), including boards and odds. Guest sessions
            use a temporary identifier and are not linked to a phone number or
            verified identity.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.2 Full Accounts
          </h3>
          <p>
            To deposit funds or Flip, you must link a valid phone number via SMS
            verification. That is separate from the identity verification in
            Section 6, which is required only before physical shipment.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.3 Account Security
          </h3>
          <p>
            You are responsible for activity under your account. Notify us
            immediately at{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>{" "}
            if you suspect unauthorized use.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            4.4 Account Deletion
          </h3>
          <p>
            You may delete your account from the Account screen in the App
            (Delete account), or by emailing{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="underline underline-offset-2 hover:text-[#1a1a1a]"
            >
              hello@stonebrooknyc.com
            </a>
            . The App will block deletion until you clear:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cards still in your vault</li>
            <li>Pending shipments</li>
            <li>Any active Flip session in progress</li>
          </ul>
          <p>Upon successful deletion:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Personal information is deleted or anonymized, except records we
              must keep for legal, tax, payment, or fraud-prevention purposes.
            </li>
            <li>
              Any remaining Credit balance is forfeited unless applicable law
              requires otherwise. The App asks you to confirm this before
              deletion if a balance remains.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">5. Credits</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Credits (shown as CR) are a prepaid in-app balance used to buy Flips.
            They are displayed at a{" "}
            <strong>
              1:1 nominal correspondence to U.S. dollars for convenience only
            </strong>
            . Credits are not currency, bank deposits, securities, or stored-value
            instruments redeemable for cash.
          </li>
          <li>
            Credits are acquired by depositing through our payment processor
            (currently Braintree / PayPal).
          </li>
          <li>
            <strong>
              Credits cannot be withdrawn, cashed out, transferred to another
              user, or redeemed for cash under any circumstances.
            </strong>
          </li>
          <li>
            We may reverse, adjust, expire, or revoke Credits obtained through
            fraud, error, chargeback, or violation of these Terms.
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
              not required to complete identity verification to deposit, Flip, or
              hold Credits.
            </strong>
          </li>
          <li>
            You <strong>must complete identity verification</strong> before
            requesting physical shipment of any card.
          </li>
          <li>
            Verification is performed by Persona. By verifying, you also agree to
            Persona&apos;s applicable terms and privacy practices.
          </li>
          <li>
            If verification fails, we may place the shipment under manual review
            or require additional documentation. We may suspend the account or
            withhold shipment if we cannot reasonably verify identity or
            eligibility.
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
            Each Flip costs the CR price shown for the board you select and draws
            one card from that board&apos;s live inventory pool. Approximate odds
            shown before you Flip reflect current pool composition and may change
            as cards are drawn or pools rotate. Once a Flip is completed, the
            purchase is final except as required by law or as we expressly offer
            in-product (for example, vault conversion).
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            7.2 The Vault
          </h3>
          <p>After a Flip, you may:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Ship</strong> the physical card (subject to Section 6 and
              shipping fees), or
            </li>
            <li>
              <strong>Vault</strong> it for up to <strong>7 days</strong>.
            </li>
          </ul>
          <p>
            If you take no action within the 7-day vault window, the card
            automatically converts to Credits at its{" "}
            <strong>Flip Value</strong>: the card&apos;s then-current Flipped
            fair-market estimate (from our pricing data provider, generally 90%
            of the referenced market price, floored to cents). That conversion is
            disclosed when the card enters the vault and is final once applied.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            7.3 Shipping
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Shipping fees are tiered by the total Flip Value of the cards in
              the shipment and are shown before you pay. Fees are charged through
              our payment processor (not deducted from Credits).
            </li>
            <li>
              Current fee tiers (subject to change; the App shows the amount due
              at checkout): under $5 total Flip Value → $9.99; $5–$15 → $7.99;
              $15+ → $5.99.
            </li>
            <li>
              You must provide an accurate shipping address. We are not
              responsible for loss caused by an address you entered incorrectly.
            </li>
            <li>
              We ship within the United States only. We may refuse shipments that
              appear fraudulent, go to unsupported locations, or violate law.
            </li>
            <li>
              Any sales tax or similar charges required by law may be collected
              at checkout as disclosed in the App.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-medium text-[#1a1a1a]">
            7.4 Refunds and Chargebacks
          </h3>
          <p>
            Because each Flip yields a unique physical collectible from live
            inventory, sales are generally final. We may issue refunds or Credits
            at our discretion for clear fulfillment errors or as required by law.
            Unwarranted chargebacks may result in account suspension and
            forfeiture of Credits.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          8. Prohibited Conduct
        </h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Use the Services if you are under 18, or while located in Washington
            State
          </li>
          <li>Create more than one account</li>
          <li>
            Use bots, scripts, or automated tools to interact with the Services
          </li>
          <li>
            Manipulate, reverse-engineer, or exploit Flip probability or
            inventory systems
          </li>
          <li>Provide false information during identity verification</li>
          <li>
            Abuse payments, including friendly fraud or unjustified chargebacks
          </li>
          <li>Use the Services for any unlawful purpose</li>
        </ul>
        <p>
          Violation may result in suspension or termination and forfeiture of
          Credits, at our sole discretion.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">9. Payments</h2>
        <p>
          Deposits and shipping fees are processed by Braintree / PayPal. By
          paying, you also agree to the processor&apos;s applicable terms. We do
          not store your full payment card number.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          10. Intellectual Property
        </h2>
        <p>
          Flipped branding, software, UI, and content we create are owned by
          Stonebrook or its licensors. Trading card names, artwork, logos, and
          trademarks belong to their respective owners. Flipped is not affiliated
          with or endorsed by those rights holders unless we expressly say so.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">11. Disclaimers</h2>
        <p className="uppercase">
          The Services are provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, express or implied, including
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not guarantee uninterrupted, error-free, or
          secure operation.
        </p>
        <p>
          Market and Flip Value estimates may be wrong or change. We do not
          guarantee any secondary-market price for a card you receive.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          12. Limitation of Liability
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
        <h2 className="text-lg font-medium text-[#1a1a1a]">13. Indemnity</h2>
        <p>
          You will defend and indemnify Stonebrook Digital LLC and its
          affiliates against claims arising from your misuse of the Services,
          violation of these Terms, or violation of law, except to the extent
          caused by our willful misconduct.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          14. Governing Law and Disputes
        </h2>
        <p>
          These Terms are governed by the laws of the State of New York, without
          regard to conflict-of-law rules. Except where applicable consumer law
          requires otherwise, disputes will be resolved exclusively in the state
          or federal courts located in Kings County, New York, and you consent to
          personal jurisdiction there.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">
          15. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. The &quot;Last
          updated&quot; date above will change when we do. Material changes will
          be communicated in the App or by email where appropriate. Continued use
          after changes take effect constitutes acceptance, except where law
          requires a new affirmative consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-[#1a1a1a]">16. Contact</h2>
        <p>Questions about these Terms:</p>
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
        <h2 className="text-lg font-medium text-[#1a1a1a]">17. Termination</h2>
        <p>
          We may suspend or terminate access at any time, with or without cause,
          including for violation of these Terms. Sections on Credits
          forfeiture, intellectual property, disclaimers, limitation of
          liability, indemnity, and disputes survive termination.
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
