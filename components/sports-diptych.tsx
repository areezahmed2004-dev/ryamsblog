"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const panels = [
  {
    src: "/images/hero-collage/06-hero-basketball-vertical.jpg",
    alt: "Ryam Ahmed finishes at the rim in a white Colts jersey during a high school basketball game.",
    label: "Basketball",
    position: "object-[center_18%]",
    direction: -1,
  },
  {
    src: "/images/hero-collage/03-hero-soccer-action.jpg",
    alt: "Ryam Ahmed, wearing number 2, challenges for the ball during a night soccer match.",
    label: "Soccer",
    position: "object-[center_42%]",
    direction: 1,
  },
] as const;

export function SportsDiptych() {
  const sectionRef = useRef<HTMLElement>(null);
  const layers = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const apply = () => {
      const rect = section.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const shift = (clamped - 0.5) * 32;
      const allow = !reduce.matches && window.innerWidth >= 768;

      layers.current.forEach((node, index) => {
        if (!node) return;
        if (!allow) {
          node.style.transform = "";
          return;
        }
        const direction = panels[index]?.direction ?? 1;
        node.style.transform = `translate3d(0, ${(shift * direction).toFixed(2)}px, 0)`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };

    const onChange = () => apply();
    reduce.addEventListener("change", onChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      reduce.removeEventListener("change", onChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-ivory" aria-label="Basketball and soccer">
      <div className="grid md:grid-cols-2">
        {panels.map((panel, index) => (
          <figure key={panel.label} className="relative min-h-[240px] sm:min-h-[300px] md:min-h-[520px] lg:min-h-[600px]">
            <div className="absolute inset-0 overflow-hidden">
              <div
                ref={(node) => {
                  layers.current[index] = node;
                }}
                className="absolute inset-x-0 -top-6 -bottom-6"
              >
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={72}
                  className={`object-cover ${panel.position}`}
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/55 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-[0.72rem] tracking-[0.2em] text-ivory uppercase sm:left-8">
                {panel.label}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
      <p className="mx-auto max-w-2xl px-5 py-8 text-center font-serif text-lg leading-snug text-ink sm:px-8 sm:text-xl md:py-10">
        Different games. Many of the same lessons about preparation, injury, and resilience.
      </p>
    </section>
  );
}
