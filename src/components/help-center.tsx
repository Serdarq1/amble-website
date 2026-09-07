"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  faqs,
  guideCategories,
  guides,
  type FaqItem,
  type GuideItem,
} from "@/lib/help-content";

function searchableText(item: FaqItem | GuideItem) {
  if ("sections" in item) {
    return [
      item.title,
      item.summary,
      item.category,
      ...item.sections.flatMap((section) => [
        section.title,
        section.body,
        ...(section.steps ?? []),
      ]),
    ].join(" ");
  }

  return [item.title, item.summary, ...item.content].join(" ");
}

function matchesQuery(item: FaqItem | GuideItem, query: string) {
  const terms = query.split(/\s+/).filter(Boolean);
  const haystack = searchableText(item).toLocaleLowerCase();
  return terms.every((term) => haystack.includes(term));
}

function FaqDisclosure({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerId = `faq-answer-${item.id}`;

  return (
    <article className={`help-disclosure help-faq${isOpen ? " is-open" : ""}`} id={`faq-${item.id}`}>
      <button
        className="help-faq__button"
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="help-disclosure__copy">
          <strong>{item.title}</strong>
          <span>{item.summary}</span>
        </span>
        <span className="help-disclosure__icon" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="help-faq__answer-shell"
        id={answerId}
        aria-hidden={!isOpen}
      >
        <div>
          <div className="help-disclosure__answer">
            {item.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function GuideCard({ item }: { item: GuideItem }) {
  return (
    <Link className="help-guide-card" href={`/help/guides/${item.id}`}>
      <span className="help-disclosure__copy">
        <strong>{item.title}</strong>
        <span>{item.summary}</span>
      </span>
      <span className="help-disclosure__time">{item.readTime}</span>
      <span className="help-guide-card__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export function HelpCenter() {
  const [search, setSearch] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const query = search.trim().toLocaleLowerCase();

  const filteredFaqs = useMemo(
    () => (query ? faqs.filter((item) => matchesQuery(item, query)) : faqs),
    [query],
  );
  const filteredGuides = useMemo(
    () => (query ? guides.filter((item) => matchesQuery(item, query)) : guides),
    [query],
  );
  const resultCount = filteredFaqs.length + filteredGuides.length;

  function clearSearch() {
    setSearch("");
  }

  return (
    <div className="help-center">
      <div className="help-search">
        <label htmlFor="help-search-input">Search Amble help</label>
        <div className="help-search__field">
          <span className="help-search__icon" aria-hidden="true" />
          <input
            id="help-search-input"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try Apple Watch, subscription, or privacy"
            autoComplete="off"
          />
          {search ? (
            <button type="button" onClick={clearSearch} aria-label="Clear search">
              Clear
            </button>
          ) : null}
        </div>
        <p className="help-search__status" aria-live="polite">
          {query
            ? `${resultCount} ${resultCount === 1 ? "result" : "results"} for “${search.trim()}”`
            : "Search across frequently asked questions and practical guides."}
        </p>

        {query && resultCount ? (
          <div className="help-search-results" aria-label="Search results">
            {filteredFaqs.map((item) => (
              <a
                key={item.id}
                href={`#faq-${item.id}`}
                onClick={() => setOpenFaqId(item.id)}
              >
                <span>FAQ</span>
                <strong>{item.title}</strong>
                <span aria-hidden="true">↓</span>
              </a>
            ))}
            {filteredGuides.map((item) => (
              <Link key={item.id} href={`/help/guides/${item.id}`}>
                <span>Guide</span>
                <strong>{item.title}</strong>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      {resultCount ? (
        <>
          {filteredFaqs.length ? (
            <section className="help-section" id="faq" aria-labelledby="faq-title">
              <div className="help-section__heading">
                <h2 id="faq-title">Frequently asked questions</h2>
              </div>
              <div className="help-disclosure-list">
                {filteredFaqs.map((item) => (
                  <FaqDisclosure
                    key={item.id}
                    item={item}
                    isOpen={openFaqId === item.id}
                    onToggle={() => setOpenFaqId(openFaqId === item.id ? null : item.id)}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {filteredGuides.length ? (
            <section className="help-section" aria-labelledby="guides-title">
              <div className="help-section__heading">
                <h2 id="guides-title">Guides and articles</h2>
              </div>

              <div className="help-guide-groups">
                {guideCategories.map((category) => {
                  const items = filteredGuides.filter((item) => item.category === category);
                  const categoryId = `guide-${category.toLocaleLowerCase().replaceAll(" ", "-")}`;

                  if (!items.length) return null;

                  return (
                    <section className="help-guide-group" key={category} aria-labelledby={categoryId}>
                      <h3 id={categoryId}>{category}</h3>
                      <div className="help-guide-list">
                        {items.map((item) => (
                          <GuideCard key={item.id} item={item} />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="help-empty" aria-labelledby="help-empty-title">
          <span aria-hidden="true">?</span>
          <h2 id="help-empty-title">No answer found yet</h2>
          <p>Try a shorter search, or send us your question and we will help.</p>
          <button type="button" onClick={clearSearch}>
            Clear search
          </button>
        </section>
      )}

      <section className="help-contact" aria-labelledby="help-contact-title">
        <div>
          <p className="help-contact__eyebrow">Still need help?</p>
          <h2 id="help-contact-title">Talk to a real person.</h2>
          <p>Tell us what happened and we will get back to you as soon as we can.</p>
        </div>
        <a href="mailto:info@appamble.com?subject=Amble%20support">Contact support</a>
      </section>
    </div>
  );
}
