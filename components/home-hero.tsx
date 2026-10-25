"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Tile = {
  id: string;
  src: string;
  alt: string;
  className: string;
  imgClass: string;
  preload?: boolean;
  sizes: string;
  depth: number;
  enter: string;
  dx: string;
  dy: string;
  ds: string;
  dur: string;
  ease: string;
  delay: string;
  radius?: string;
};

const tiles: Tile[] = [
  {
    id: "vertical",
    src: "/images/hero-collage/06-hero-basketball-vertical.jpg",
    alt: "Ryam Ahmed elevates for a layup in a white Colts jersey during a high school basketball game.",
    className:
      "hidden md:block md:right-0 md:bottom-0 md:z-[2] md:h-[36%] md:w-[48%] lg:top-[12%] lg:bottom-auto lg:left-0 lg:z-[4] lg:h-[50%] lg:w-[24%] lg:right-auto",
    imgClass: "object-[center_18%] md:object-[center_42%] lg:object-[center_22%]",
    sizes: "(min-width: 1024px) 16vw, 40vw",
    depth: 0.55,
    enter: "80ms",
    dx: "-4px",
    dy: "8px",
    ds: "1.018",
    dur: "24s",
    ease: "ease-in-out",
    delay: "-6s",
    radius: "lg:rounded-[14px]",
  },
  {
    id: "wide",
    src: "/images/hero-collage/01-hero-basketball-wide.jpg",
    alt: "Ryam Ahmed jumps for a shot in a white Colts uniform as a defender contests the ball.",
    className:
      "inset-x-0 top-0 z-[2] h-[52%] md:right-auto md:h-[57%] md:w-[60%] lg:top-0 lg:left-[21%] lg:z-[3] lg:h-[56%] lg:w-[48%]",
    imgClass: "object-[40%_30%] md:object-[46%_28%] lg:object-[48%_30%]",
    preload: true,
    sizes: "(min-width: 1024px) 34vw, (min-width: 768px) 48vw, 100vw",
    depth: 1,
    enter: "0ms",
    dx: "7px",
    dy: "-5px",
    ds: "1.022",
    dur: "20s",
    ease: "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
    delay: "-1s",
    radius: "lg:rounded-[16px]",
  },
  {
    id: "captain",
    src: "/images/hero-collage/02-hero-soccer-captain.jpg",
    alt: "Ryam Ahmed in a white number 2 soccer jersey and captain’s armband, photographed under stadium lights.",
    className:
      "bottom-0 left-0 z-[3] h-[44%] w-[48%] md:bottom-auto md:left-auto md:right-0 md:top-0 md:h-[57%] md:w-[36%] lg:top-[3%] lg:h-[61%] lg:w-[33%]",
    imgClass: "object-[64%_14%] md:object-[60%_16%]",
    sizes: "(min-width: 1024px) 20vw, 46vw",
    depth: 0.7,
    enter: "120ms",
    dx: "-6px",
    dy: "7px",
    ds: "1.02",
    dur: "26s",
    ease: "ease-in-out",
    delay: "-8s",
  },
  {
    id: "action",
    src: "/images/hero-collage/03-hero-soccer-action.jpg",
    alt: "Ryam Ahmed shields the ball in a white number 2 jersey while a defender challenges him during a night soccer match.",
    className:
      "right-0 bottom-0 z-[3] h-[44%] w-[48%] md:left-0 md:h-[36%] md:w-[48%] md:right-auto lg:bottom-[1%] lg:h-[38%] lg:w-[46%]",
    imgClass: "object-[center_46%]",
    sizes: "(min-width: 1024px) 28vw, 48vw",
    depth: 0.85,
    enter: "180ms",
    dx: "5px",
    dy: "6px",
    ds: "1.016",
    dur: "18s",
    ease: "cubic-bezier(0.37, 0, 0.63, 1)",
    delay: "-4s",
  },
  {
    id: "bw",
    src: "/images/hero-collage/04-hero-basketball-bw.jpg",
    alt: "Black-and-white photo of Ryam Ahmed rising for a layup between defenders.",
    className: "bottom-[7%] left-[38%] z-[5] hidden h-[30%] w-[22%] lg:block",
    imgClass: "object-[40%_42%]",
    sizes: "14vw",
    depth: 1.15,
    enter: "240ms",
    dx: "-5px",
    dy: "-7px",
    ds: "1.02",
    dur: "28s",
    ease: "ease-in-out",
    delay: "-11s",
    radius: "lg:rounded-[10px]",
  },
  {
    id: "ahmed",
    src: "/images/hero-collage/05-hero-soccer-ahmed.jpg",
    alt: "Ryam Ahmed, seen from behind in a dark jersey that reads Ahmed, holding a soccer ball.",
    className: "right-0 bottom-0 z-[4] hidden h-[33%] w-[30%] lg:block",
    imgClass: "object-[56%_40%]",
    sizes: "18vw",
    depth: 0.42,
    enter: "300ms",
    dx: "6px",
    dy: "-4px",
    ds: "1.018",
    dur: "23s",
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    delay: "-9s",
  },
];

export function HomeHero() {
  const stageRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let reduced = reduce.matches;
    let pointerX = 0;
    let pointerY = 0;
    let scroll = 0;
    let frame = 0;

    const apply = () => {
      const layers = stage.querySelectorAll<HTMLElement>("[data-depth]");
      const desktop = window.innerWidth >= 1024;
      const tablet = window.innerWidth >= 768;
      layers.forEach((node) => {
        if (reduced || !tablet) {
          node.style.transform = "";
          return;
        }
        const depth = Number(node.dataset.depth || 0);
        const pointer = fine.matches && desktop;
        const x = pointer ? pointerX * depth * 10 : 0;
        const y = scroll * depth * (desktop ? 26 : 14) + (pointer ? pointerY * depth * 8 : 0);
        node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      });

      const copy = copyRef.current;
      if (!copy) return;
      if (reduced) {
        copy.style.transform = "";
        copy.style.opacity = "";
        return;
      }
      copy.style.transform = `translate3d(0, ${(-scroll * 12).toFixed(2)}px, 0)`;
      copy.style.opacity = String(Math.max(0.82, 1 - scroll * 0.16));
    };

    const onScroll = () => {
      const rect = stage.getBoundingClientRect();
      scroll = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.85)));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };

    const onMove = (event: MouseEvent) => {
      if (reduced || !fine.matches || window.innerWidth < 1024) return;
      const rect = stage.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      pointerX = 0;
      pointerY = 0;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };

    const onReduce = () => {
      reduced = reduce.matches;
      apply();
    };

    reduce.addEventListener("change", onReduce);
    window.addEventListener("scroll", onScroll, { passive: true });
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      reduce.removeEventListener("change", onReduce);
      window.removeEventListener("scroll", onScroll);
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={stageRef} className="overflow-x-clip border-b border-ink/10">
      <div className="grid lg:min-h-[760px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div
          ref={copyRef}
          className="hero-enter flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-16 xl:py-20 xl:pl-16"
          style={{ ["--enter" as string]: "0ms" }}
        >
          <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">
            Ryam Ahmed • Student-athlete
          </p>
          <h1 className="mt-5 max-w-[11em] text-[2.65rem] leading-[0.98] font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-[3.35rem] xl:text-[4.15rem]">
            Built through setbacks. Driven by what comes next.
          </h1>
          <p className="mt-6 max-w-xl font-serif text-xl leading-snug text-ink sm:text-[1.45rem]">
            A student-athlete journal about injuries, recovery, resilience, and
            the lessons I wish I had learned earlier.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/80 sm:text-[1.05rem]">
            Basketball, soccer, braces, injuries, and recovery have all shaped
            the way I think about being an athlete. I created My Athletic
            Journey to turn the questions and setbacks I experienced into
            something useful for the next person.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/journal"
              className="inline-flex h-12 items-center justify-center bg-navy px-6 text-sm font-medium tracking-[0.04em] text-ivory hover:bg-ink"
            >
              Explore the Journal
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center border border-ink/25 px-6 text-sm font-medium tracking-[0.04em] text-ink hover:border-ink"
            >
              My Story
            </Link>
          </div>
        </div>

        <div className="relative mx-5 mb-12 h-[380px] sm:mx-8 sm:h-[440px] md:mx-8 md:h-[580px] lg:mx-6 lg:mb-0 lg:h-[740px] xl:mr-10 xl:h-[800px]">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className={`hero-enter absolute ${tile.className}`}
              style={{ ["--enter" as string]: tile.enter }}
            >
              <div data-depth={tile.depth} className="h-full w-full">
                <div
                  className="hero-drift"
                  style={{
                    ["--dx" as string]: tile.dx,
                    ["--dy" as string]: tile.dy,
                    ["--ds" as string]: tile.ds,
                    ["--dur" as string]: tile.dur,
                    ["--ease" as string]: tile.ease,
                    ["--delay" as string]: tile.delay,
                  }}
                >
                  <div className={`hero-frame ${tile.radius ?? ""}`}>
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      preload={tile.preload}
                      quality={tile.preload ? 75 : 70}
                      sizes={tile.sizes}
                      className={`object-cover scale-[1.08] ${tile.imgClass}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
