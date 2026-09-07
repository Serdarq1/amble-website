import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getGuide, guides } from "@/lib/help-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/help/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) return {};

  return {
    title: `${guide.title} | Amble Help`,
    description: guide.summary,
  };
}

export default async function GuidePage({ params }: PageProps<"/help/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) notFound();

  return (
    <div className="help-article-page">
      <SiteHeader />
      <main className="help-article">
        <Link className="help-article__back" href="/help">
          <span aria-hidden="true">←</span> Back to help
        </Link>

        <header className="help-article__header">
          <div className="help-article__meta">
            <span>{guide.category}</span>
            <span>{guide.readTime} read</span>
          </div>
          <h1>{guide.title}</h1>
          <p>{guide.summary}</p>
        </header>

        <article className="help-article__body">
          {guide.sections.map((section, index) => (
            <section key={section.title}>
              <div className="help-article__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.steps ? (
                  <ol>
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </section>
          ))}
        </article>

        <aside className="help-article__contact">
          <div>
            <strong>Still stuck?</strong>
            <p>Send us a note and include what you tried.</p>
          </div>
          <a href={`mailto:info@appamble.com?subject=${encodeURIComponent(`Help with ${guide.title}`)}`}>
            Contact support
          </a>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
