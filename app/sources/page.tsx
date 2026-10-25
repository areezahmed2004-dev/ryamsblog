import type { Metadata } from "next";
import { Disclaimer } from "@/components/disclaimer";
import { sources } from "@/lib/sources";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "The organizations Ryam Ahmed uses when a journal entry includes health or orthodontic information.",
  alternates: { canonical: "/sources" },
  openGraph: {
    title: "Sources | My Athletic Journey",
    description:
      "Experience first. Facts checked against reputable dental, orthodontic, and medical sources.",
    url: "/sources",
  },
};

export default function SourcesPage() {
  return (
    <div className="mx-auto w-full max-w-[860px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
      <header>
        <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">Sources</p>
        <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
          Experience first. Facts checked.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
          I write from my own experience, but personal experience is not the
          same thing as medical expertise. When a journal entry includes health
          or orthodontic information, I use reputable sources and encourage
          readers to speak with qualified professionals about their own
          situation.
        </p>
      </header>

      <ul className="mt-12 border-t border-ink/10">
        {sources.map((source) => (
          <li key={source.href} className="border-b border-ink/10 py-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy"
              >
                {source.name}
              </a>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-ink/80">
              {source.description}
            </p>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-sm text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
            >
              {source.href.replace("https://", "")}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Disclaimer urgent />
      </div>
    </div>
  );
}
