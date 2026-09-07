import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  sections: readonly LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <div id="top" className="legal-page">
      <SiteHeader />

      <main className="legal-main">

        <div className="legal-layout">
          <p className="legal-updated">
            Last updated <time>{updated}</time>
          </p>
          <article className="legal-document">
            {sections.map((section, index) => (
              <section className="legal-section" id={section.id} key={section.id}>
                <div className="legal-section__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="legal-section__content">
                  <h2>{section.title}</h2>
                  {section.content}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
