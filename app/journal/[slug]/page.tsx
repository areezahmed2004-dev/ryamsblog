import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { Disclaimer } from "@/components/disclaimer";
import { articles, getAdjacentArticles, getArticle } from "@/lib/articles";
import { defaultSocialImage } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Journal" };

  const image = article.image
    ? {
        url: article.image.src,
        alt: article.image.alt,
        width: article.image.width,
        height: article.image.height,
      }
    : defaultSocialImage;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      title: `${article.title} | My Athletic Journey`,
      description: article.description,
      url: `/journal/${article.slug}`,
      publishedTime: article.dateISO,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { previous, next } = getAdjacentArticles(article.slug);

  return (
    <article className="mx-auto w-full max-w-[1100px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <header className="max-w-[48rem]">
        <p className="text-[0.72rem] tracking-[0.18em] text-navy uppercase">
          <Link href="/journal" className="hover:text-ink">
            Journal
          </Link>
          <span aria-hidden="true"> · </span>
          {article.category}
        </p>
        <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-ink">
          {article.description}
        </p>
        <p className="mt-6 text-sm text-muted">
          {article.author} · {article.date} · {article.readTime}
        </p>
      </header>

      {article.image ? (
        <figure className="mt-10">
          <div className="relative aspect-[3/4] max-h-[720px] overflow-hidden bg-stone sm:aspect-[4/5] lg:aspect-[16/11] lg:max-h-[640px]">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              preload
              sizes="(min-width: 1100px) 1060px, 100vw"
              className="object-cover object-[42%_32%]"
            />
          </div>
        </figure>
      ) : null}

      <div className="mt-12">
        <ArticleBody blocks={article.blocks} />
      </div>

      <div className="mt-14 max-w-[42rem]">
        <Disclaimer urgent />
      </div>

      <nav
        aria-label="More journal entries"
        className="mt-14 grid border-t border-ink/10 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/journal/${previous.slug}`}
            className="border-b border-ink/10 py-8 pr-6 hover:text-navy sm:border-r sm:border-b-0"
          >
            <span className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              Previous
            </span>
            <span className="mt-3 block text-xl leading-snug font-semibold tracking-[-0.03em]">
              {previous.title}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={`/journal/${next.slug}`}
            className="py-8 sm:pl-8 sm:text-right hover:text-navy"
          >
            <span className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              Next
            </span>
            <span className="mt-3 block text-xl leading-snug font-semibold tracking-[-0.03em]">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
