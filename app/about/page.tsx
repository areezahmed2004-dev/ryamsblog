import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "Ryam Ahmed on basketball, soccer, braces, a freshman mouth injury, and why he started My Athletic Journey.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "My Story | My Athletic Journey",
    description:
      "The experiences behind My Athletic Journey, from contact sports and braces to a growing interest in dentistry.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <article>
      <header className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.82fr)] lg:items-end lg:gap-16 lg:px-10 lg:py-20">
        <div>
          <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">
            Ryam Ahmed • Student-athlete
          </p>
          <h1 className="mt-4 max-w-[14ch] text-4xl leading-[1.02] font-semibold tracking-[-0.04em] sm:text-6xl">
            The experiences behind My Athletic Journey.
          </h1>
        </div>
        <p className="max-w-md font-serif text-2xl leading-snug text-ink lg:pb-2">
          I am Ryam Ahmed, a high school student-athlete who has spent years
          competing in basketball and soccer.
        </p>
      </header>

      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start lg:gap-16 lg:px-10">
        <figure className="lg:sticky lg:top-28">
          <div className="relative aspect-[3/4] max-h-[760px] w-full overflow-hidden bg-stone">
            <Image
              src="/images/about-soccer.jpg"
              alt="Ryam Ahmed in a white number 2 soccer jersey and captain’s armband, photographed from behind under stadium lights."
              fill
              preload
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[58%_18%]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Soccer, under the lights. The armband is from serving as a varsity captain.
          </figcaption>
        </figure>

        <div className="max-w-[40rem] pb-8 font-serif text-[1.2rem] leading-[1.7] text-ink sm:text-[1.28rem]">
          <p>
            For a long stretch of that time, I was also in braces. Cut lips and
            wires digging into my cheeks became part of the season. Cold sores
            did too. I knew contact sports could hurt. I did not know how
            different a hit would feel with brackets and wires against the
            inside of my mouth, or what I was supposed to do when something
            went wrong.
          </p>
          <p className="mt-6">
            The moment that changed how I thought about it happened during my
            freshman basketball season. I collided with another player and took
            a direct hit to the mouth. My wires broke. My mouth bled. A severe
            cold sore outbreak followed, and my wires could not be reattached
            until my mouth healed. I remember the pain. I remember, just as
            clearly, the feeling that I was improvising.
          </p>
          <p className="mt-6">
            I had questions before that game — what to wear, what to pack, what
            counted as an emergency — and I still had them afterward. Practical
            guidance for an athlete in that spot was hard to find.
          </p>
        </div>
      </div>

      <blockquote className="mt-8 border-y border-ink/10">
        <p className="mx-auto w-full max-w-[1180px] px-5 py-14 font-serif text-3xl leading-[1.2] tracking-[-0.03em] text-ink sm:px-8 sm:text-5xl sm:leading-[1.15] lg:px-10 lg:py-20">
          “I could not prevent every setback. I could make the next athlete a
          little more prepared for one.”
        </p>
      </blockquote>

      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] lg:items-end lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-[40rem] font-serif text-[1.2rem] leading-[1.7] sm:text-[1.28rem]">
          <p>
            Later I went back to my orthodontist&apos;s office as a volunteer.
            Another patient asked whether braces could be removed during sports
            season. I recognized the question immediately. It was close to the
            uncertainty I had carried through my own season, and it made
            something clear: these questions were not unique to me.
          </p>
          <p className="mt-6">
            I hear similar ones from teammates. Serving as a varsity soccer
            captain put me next to athletes who want to know how to prepare
            before the whistle, not only how to react once they are hurt.
          </p>
          <p className="mt-6">
            Sports involve contact and risk. I cannot prevent every setback,
            and I am not a medical professional. What I can do is write down
            what I learned about preparation, recovery, and the questions worth
            asking, so the next athlete has somewhere to start.
          </p>
          <p className="mt-6">
            Dentistry is where I hope this journey eventually leads. For now,
            this site is one small way to turn difficult experiences into
            something useful for someone else.
          </p>
          <p className="mt-10 font-sans text-base tracking-[0.04em] text-ink">
            — Ryam Ahmed
          </p>
        </div>

        <figure>
          <div className="relative aspect-[3/2] overflow-hidden bg-stone">
            <Image
              src="/images/author-soccer-ahmed.jpg"
              alt="Ryam Ahmed, seen from behind in a dark jersey that reads Ahmed and number 2, holding a soccer ball under stadium lights."
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover object-[70%_40%]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Before a match. The questions started on the court and the field.
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
