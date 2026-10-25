"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authorName, nav, siteName } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-[1.05rem] font-semibold tracking-[-0.03em] text-ink sm:text-lg">
            {siteName}
          </span>
          <span className="mt-0.5 hidden text-[0.7rem] tracking-[0.14em] text-muted uppercase sm:block">
            By {authorName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-[0.04em] ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 items-center px-1 text-sm tracking-[0.08em] text-ink uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-ink/10 bg-ivory lg:hidden"
        >
          <ul className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-ink/10">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-14 items-center text-2xl tracking-[-0.03em] text-ink"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
