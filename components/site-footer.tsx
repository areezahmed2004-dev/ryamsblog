import Link from "next/link";
import { authorName, disclaimer, nav, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ivory">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_auto] md:items-start">
          <div className="max-w-md">
            <p className="text-lg font-semibold tracking-[-0.03em]">{siteName}</p>
            <p className="mt-2 text-sm tracking-[0.12em] text-muted uppercase">
              By {authorName}
            </p>
            <p className="mt-5 text-base leading-7 text-ink/80">
              A student-athlete journal about setbacks, preparation, recovery,
              resilience, and what comes next.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink hover:text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-8">
          <p className="max-w-3xl text-sm leading-6 text-muted">{disclaimer}</p>
          <p className="mt-6 text-sm text-ink">© 2026 {authorName}</p>
        </div>
      </div>
    </footer>
  );
}
