import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
  title: "Amble: Make movement feel good",
  description:
    "Your steps, walks, and workouts become a daily rhythm worth showing up for with Amble.",
  applicationName: "Amble",
  keywords: ["movement", "walking", "wellness", "habits", "iPhone", "Apple Watch"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Amble: Make movement feel good",
    description:
      "A gentle everyday movement companion that makes showing up feel worth it.",
    siteName: "Amble",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amble: Make movement feel good",
    description:
      "A gentle everyday movement companion that makes showing up feel worth it.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
