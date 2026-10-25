import type { Metadata } from "next";
import { JournalIndex } from "@/components/journal-index";
import { getJournalArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Personal experience, preparation, athlete health, injury, recovery, and the questions Ryam Ahmed learned to ask.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal | My Athletic Journey",
    description:
      "What sports taught Ryam Ahmed when things did not go according to plan.",
    url: "/journal",
  },
};

export default function JournalPage() {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <header className="max-w-3xl pb-12">
        <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">Journal</p>
        <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
          What sports taught me when things did not go according to plan.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
          Personal experience, preparation, athlete health, injury, recovery,
          and the questions I learned to ask along the way.
        </p>
      </header>
      <JournalIndex
        articles={getJournalArticles().map((article) => ({
          slug: article.slug,
          category: article.category,
          title: article.title,
          description: article.description,
          author: article.author,
          date: article.date,
          readTime: article.readTime,
        }))}
      />
    </div>
  );
}
