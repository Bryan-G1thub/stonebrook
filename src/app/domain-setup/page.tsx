import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Setup Guide | Stonebrook",
  description:
    "Step-by-step instructions for pointing your existing domain to your new Stonebrook website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DomainSetupPage() {
  return (
    <div className="min-h-screen bg-white text-[#333]">
      <header className="border-b border-gray-100 px-6 py-8 md:px-12">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-xl tracking-[0.2em] text-[#0A1628] italic md:text-2xl"
            style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
          >
            STONEBROOK
          </p>
        </div>
      </header>

      <main className="px-6 py-12 md:px-12 md:py-16">
        <article className="mx-auto max-w-3xl">
          <h1
            className="mb-6 text-4xl font-light tracking-tight text-[#0A1628] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair-display), 'Playfair Display', serif" }}
          >
            Point Your Domain to Your New Website
          </h1>

          <p className="mb-12 text-lg leading-relaxed font-light text-gray-700">
            This guide is for you if you already own a domain name (through Bluehost,
            GoDaddy, Namecheap, or another provider) and want your new website to
            appear when people visit it. You will update a couple of DNS settings at
            your current registrar. You do not need to transfer your domain or move
            it to us.
          </p>

          <ol className="space-y-12">
            <li>
              <h2 className="mb-4 text-2xl font-light text-[#0A1628]">
                Step 1: Find your DNS settings
              </h2>
              <div className="space-y-4 text-lg leading-relaxed font-light text-gray-700">
                <p>
                  Log in to the website where you registered or manage your domain.
                  This is usually the same place you bought the domain — for example,
                  Bluehost, GoDaddy, or Namecheap.
                </p>
                <p>
                  Look for a section labeled something like &ldquo;DNS,&rdquo;
                  &ldquo;DNS Management,&rdquo; or &ldquo;DNS Records.&rdquo; Every
                  provider names it slightly differently, but it is always in your
                  account settings for that domain.
                </p>
              </div>
            </li>

            <li>
              <h2 className="mb-4 text-2xl font-light text-[#0A1628]">
                Step 2: Update the A record and CNAME
              </h2>
              <div className="space-y-4 text-lg leading-relaxed font-light text-gray-700">
                <p>
                  You will update two records so your domain points to the website we
                  built for you. We will send you the exact values to enter — they are
                  unique to your project.
                </p>
                <p>
                  <strong className="font-normal text-[#0A1628]">
                    Root domain (A record):
                  </strong>{" "}
                  This makes{" "}
                  <span className="text-[#0A1628]">yourbusiness.com</span> load your
                  new site. Set the A record to:
                </p>
                <p className="rounded-xl border border-gray-200 bg-[#f9f9f9] px-4 py-3 font-mono text-base text-[#0A1628]">
                  [A record value — provided by Stonebrook]
                </p>
                <p>
                  <strong className="font-normal text-[#0A1628]">
                    www subdomain (CNAME record):
                  </strong>{" "}
                  This makes{" "}
                  <span className="text-[#0A1628]">www.yourbusiness.com</span> load
                  your new site too. Set the CNAME for{" "}
                  <span className="font-mono text-base">www</span> to:
                </p>
                <p className="rounded-xl border border-gray-200 bg-[#f9f9f9] px-4 py-3 font-mono text-base text-[#0A1628]">
                  [CNAME value — provided by Stonebrook]
                </p>
                <p>
                  If a record with the same name already exists, edit it rather than
                  adding a duplicate. Save your changes when you are done.
                </p>
              </div>
            </li>

            <li>
              <h2 className="mb-4 text-2xl font-light text-[#0A1628]">
                Step 3: Leave your email records alone
              </h2>
              <div
                className="rounded-2xl border-2 border-amber-300 bg-amber-50 px-6 py-5"
                role="note"
              >
                <p className="mb-2 text-lg font-normal text-amber-950">
                  Important — do not change your email settings
                </p>
                <p className="text-lg leading-relaxed font-light text-amber-950/90">
                  If you use email on this domain (for example,{" "}
                  <span className="font-mono text-base">info@yourbusiness.com</span>
                  ), only edit the A record and CNAME described above. Do not change
                  your nameservers, and do not touch any MX records. Changing
                  nameservers to point everything at a new host will break your
                  existing email.
                </p>
              </div>
            </li>

            <li>
              <h2 className="mb-4 text-2xl font-light text-[#0A1628]">
                Step 4: Allow time for changes to take effect
              </h2>
              <p className="text-lg leading-relaxed font-light text-gray-700">
                DNS changes are not instant. They can take anywhere from a few
                minutes to 24–48 hours to fully spread across the internet. During
                that window, your website or email might behave inconsistently. That
                is normal — it should settle once propagation is complete.
              </p>
            </li>
          </ol>

          <p className="mt-12 border-t border-gray-100 pt-10 text-lg leading-relaxed font-light text-gray-700">
            If anything looks unfamiliar or you are not sure what to enter, reach out
            to us before making changes. We are happy to walk you through it. Email{" "}
            <a
              href="mailto:hello@stonebrooknyc.com"
              className="text-[#3a8fb7] underline decoration-[#3a8fb7]/30 underline-offset-2 transition-colors hover:text-[#2a6f8f]"
            >
              hello@stonebrooknyc.com
            </a>{" "}
            and we will help.
          </p>
        </article>
      </main>
    </div>
  );
}
