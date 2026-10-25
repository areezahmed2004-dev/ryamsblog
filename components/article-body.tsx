import Link from "next/link";
import type { ArticleBlock } from "@/lib/articles";

function SourceLink({ href, children }: { href: string; children: string }) {
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy">
      {children}
    </Link>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="max-w-[42rem] font-serif text-[1.2rem] leading-[1.7] text-ink sm:text-[1.28rem]">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="mt-6 first:mt-0">
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="mt-12 font-sans text-[1.65rem] leading-tight font-semibold tracking-[-0.03em] text-ink"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ol
              key={index}
              className={`mt-8 space-y-5 ${block.ordered ? "" : "list-none"}`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={item} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-2">
                  <span className="pt-1 font-sans text-sm tracking-[0.08em] text-navy">
                    {block.ordered ? String(itemIndex + 1).padStart(2, "0") : "–"}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "callout") {
          return (
            <aside key={index} className="mt-12 border-l-2 border-navy py-1 pl-5 sm:pl-6">
              <p className="font-sans text-[0.72rem] tracking-[0.18em] text-navy uppercase">
                {block.kicker}
              </p>
              <p className="mt-3 font-serif text-[1.55rem] leading-snug text-ink sm:text-[1.75rem]">
                {block.text}
              </p>
            </aside>
          );
        }

        return (
          <section key={index} className="mt-14 border-t border-ink/10 pt-8 font-sans">
            <h2 className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">Sources</h2>
            {block.intro ? (
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/80">{block.intro}</p>
            ) : null}
            <ul className="mt-6 space-y-5">
              {block.items.map((item) => (
                <li key={item.href}>
                  <SourceLink href={item.href}>{item.label}</SourceLink>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
