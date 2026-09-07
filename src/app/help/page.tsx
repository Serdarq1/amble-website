import type { Metadata } from "next";
import { HelpCenter } from "@/components/help-center";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Help & FAQ | Amble",
  description:
    "Answers and practical guides for using Amble on iPhone and Apple Watch.",
};

export default function HelpPage() {
  return (
    <div className="help-page">
      <SiteHeader />
      <main className="help-main">
        <section className="help-hero" aria-labelledby="help-title">
          <h1 id="help-title">How can we help?</h1>
          <p className="help-hero__lede">
            Find clear answers and friendly guides for getting the most out of
            Amble.
          </p>
        </section>

        <HelpCenter />
      </main>
      <SiteFooter />
    </div>
  );
}
