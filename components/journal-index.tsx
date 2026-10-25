"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, type Category } from "@/lib/articles";

export type JournalPreview = {
  slug: string;
  category: Category;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
};

export function JournalIndex({ articles }: { articles: JournalPreview[] }) {
  const [active, setActive] = useState<"All" | Category>("All");

  const visible = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((article) => article.category === active);
  }, [active, articles]);

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-ink/10 pb-4" role="toolbar" aria-label="Filter journal entries">
        {(["All", ...categories] as const).map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={`min-h-11 text-left text-sm tracking-[0.04em] ${
                selected ? "text-ink underline decoration-navy decoration-2 underline-offset-8" : "text-muted hover:text-ink"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="border-b border-ink/10 py-12 text-lg text-muted">
          No launch entries in {active} yet.
        </p>
      ) : (
        <ul>
          {visible.map((article) => (
            <li key={article.slug} className="border-b border-ink/10">
              <Link
                href={`/journal/${article.slug}`}
                className="group grid gap-4 py-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 sm:py-10"
              >
                <p className="text-[0.72rem] tracking-[0.16em] text-navy uppercase">
                  {article.category}
                </p>
                <div>
                  <h2 className="max-w-3xl text-2xl leading-tight font-semibold tracking-[-0.03em] text-ink group-hover:text-navy sm:text-[2rem]">
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-ink/75">
                    {article.description}
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    {article.author} · {article.date} · {article.readTime}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
