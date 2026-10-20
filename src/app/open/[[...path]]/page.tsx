import Image from "next/image";
import { AppStoreBadge } from "@/components/app-store-badge";

// Email buttons link to appamble.com/open/... With Amble installed, iOS opens
// the app directly and this page never shows. It's only for a computer, or an
// iPhone without Amble.
export const metadata = {
  title: "Open Amble",
  robots: { index: false },
};

export default function OpenInApp() {
  return (
    <div className="not-found-page">
      <main className="not-found-main">
        <Image
          className="not-found-mascot"
          src="/brand/lumi-waving.png"
          alt="Lumi, Amble's heart mascot, waving"
          width={1400}
          height={1400}
          priority
          sizes="(max-width: 700px) 250px, 330px"
        />
        <h1>Open Amble on your iPhone</h1>
        <p>This link opens the Amble app. Tap it on the iPhone where Amble is installed, or get Amble below.</p>
        <AppStoreBadge />
      </main>
    </div>
  );
}
