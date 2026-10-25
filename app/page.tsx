import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { SportsDiptych } from "@/components/sports-diptych";
import { getArticle } from "@/lib/articles";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const lead = getArticle("after-a-hit-to-the-mouth");
const supporting = [
  getArticle("playing-sports-with-braces"),
  getArticle("mouthguards-and-braces"),
].filter((article) => article !== undefined);

const pillars = [
  {
    label: "Experience",
    title: "What actually happened.",
    text: "Personal stories from basketball, soccer, braces, injuries, and recovery.",
  },
  {
    label: "Preparation",
    title: "What I wish I knew earlier.",
    text: "Questions to ask, ways to prepare, and lessons learned from setbacks.",
  },
  {
    label: "Perspective",
    title: "Turning experience into something useful.",
    text: "Connecting athletics, health, resilience, and my growing interest in dentistry.",
  },
];

const motif = ["Experience", "Injury", "Learning", "Preparation", "What comes next"];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="border-b border-ink/10 bg-paper" aria-label="What this journal covers">
        <div className="mx-auto grid w-full max-w-[1180px] md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.label}
              className={`px-5 py-12 sm:px-8 lg:px-10 lg:py-16 ${
                index < pillars.length - 1 ? "border-b border-ink/10 md:border-r md:border-b-0" : ""
              }`}
            >
              <p className="text-[0.72rem] tracking-[0.18em] text-navy uppercase">
                {pillar.label}
              </p>
              <h2 className="mt-4 text-[1.7rem] leading-tight font-semibold tracking-[-0.03em]">
                {pillar.title}
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 py-7 sm:px-8">
        {motif.map((step, index) => (
          <span key={step} className="flex items-center gap-4">
            <span className="text-[0.68rem] tracking-[0.16em] text-muted uppercase">{step}</span>
            {index < motif.length - 1 ? (
              <span aria-hidden="true" className="hidden h-px w-8 bg-ink/20 sm:block" />
            ) : null}
          </span>
        ))}
      </div>

      <SportsDiptych />

      <section className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl">
            Lessons from playing through it.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">
            The things I learned from injuries, braces, preparation, and the
            moments when sports did not go according to plan.
          </p>
        </div>

        {lead ? (
          <div className="mt-12 grid items-stretch gap-10 border-t border-ink/15 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-16 lg:pt-12">
            <article className="grid gap-8 sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1.1fr)] sm:items-end">
              <div className="relative aspect-[3/4] max-h-[460px] overflow-hidden bg-stone sm:max-h-none">
                <Image
                  src="/images/hero-collage/04-hero-basketball-bw.jpg"
                  alt="Black-and-white photo of Ryam Ahmed elevating between defenders in a high school basketball game."
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 100vw"
                  className="object-cover object-[42%_36%]"
                />
              </div>
              <div>
                <p className="text-[0.72rem] tracking-[0.18em] text-navy uppercase">{lead.category}</p>
                <h3 className="mt-4 text-3xl leading-[1.08] font-semibold tracking-[-0.035em] sm:text-[2.45rem]">
                  <Link href={`/journal/${lead.slug}`} className="hover:text-navy">
                    {lead.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base leading-7 text-ink/80">{lead.description}</p>
                <p className="mt-4 text-sm text-muted">
                  {lead.date} · {lead.readTime}
                </p>
              </div>
            </article>

            <div className="flex flex-col justify-end border-t border-ink/15 lg:border-t-0 lg:border-l lg:pl-12">
              {supporting.map((article, index) => (
                <article
                  key={article.slug}
                  className={index === 0 ? "border-b border-ink/15 py-8 lg:pt-0" : "py-8"}
                >
                  <p className="text-[0.72rem] tracking-[0.18em] text-navy uppercase">
                    {article.category}
                  </p>
                  <h3 className="mt-3 text-[1.55rem] leading-tight font-semibold tracking-[-0.03em]">
                    <Link href={`/journal/${article.slug}`} className="hover:text-navy">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink/80">{article.description}</p>
                  <p className="mt-3 text-sm text-muted">
                    {article.date} · {article.readTime}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <Link
          href="/journal"
          className="mt-4 inline-flex min-h-11 items-center text-sm tracking-[0.04em] text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
        >
          View all journal entries →
        </Link>
      </section>

      <section className="border-y border-ink/10 bg-stone">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="relative aspect-[16/11] max-h-[520px] lg:aspect-auto lg:max-h-none lg:min-h-[640px]">
            <Image
              src="/images/story-soccer-contact.jpg"
              alt="Ryam Ahmed, in a white number 2 jersey and captain’s armband, shields the ball while a defender challenges him during a night soccer match."
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-[center_42%]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">
              Why I built this
            </p>
            <h2 className="mt-4 max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl">
              I kept hearing the same questions I once had.
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-7 text-ink/85 sm:text-[1.05rem]">
              <p>
                The hardest part of my injuries was not always the pain.
                Sometimes it was not knowing what I was supposed to do next.
              </p>
              <p>
                After one of my worst basketball injuries, my wires broke, my
                mouth bled, and the cold sores that followed delayed my
                orthodontic treatment. Later, when I volunteered at my
                orthodontist&apos;s office, I heard other patients asking some of
                the same questions I had asked.
              </p>
              <p>I heard them from teammates too.</p>
              <p>
                I cannot solve every injury or provide medical advice. But I can
                share what I learned, point people toward reliable information,
                and make the next athlete feel a little more prepared.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex h-12 w-fit items-center justify-center bg-navy px-6 text-sm font-medium tracking-[0.04em] text-ivory hover:bg-ink"
            >
              Read Ryam&apos;s Story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <p className="text-[0.72rem] tracking-[0.2em] text-muted uppercase">
          Basketball · Soccer · Injury · Recovery
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl">
          The injury is only part of the story.
        </h2>
        <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-[1.85rem]">
          Sports taught me that recovery is not just about returning to the
          field or court. It is also about understanding what happened, asking
          better questions, preparing differently, and carrying those lessons
          forward.
        </p>
      </section>

      <section className="border-y border-ink/10 bg-sand">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">
              Looking forward
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
              From athlete to future healthcare professional.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/85">
              Experiences like these are part of why I hope to pursue dentistry
              in the future. They showed me how much a person&apos;s health can
              affect the way they eat, speak, compete, and feel — and how
              valuable it is when someone can explain what is happening clearly.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center text-sm tracking-[0.04em] text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
            >
              More about my journey →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <h2 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl">
            Learn from the setback. Be better prepared for what comes next.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory">
            My Athletic Journey is one athlete&apos;s attempt to turn difficult
            experiences into useful ones.
          </p>
          <Link
            href="/journal"
            className="mt-8 inline-flex h-12 items-center justify-center bg-ivory px-6 text-sm font-medium tracking-[0.04em] text-navy hover:bg-paper"
          >
            Read the Journal
          </Link>
        </div>
      </section>
    </>
  );
}
