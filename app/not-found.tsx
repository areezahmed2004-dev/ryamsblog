import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[760px] px-5 py-24 sm:px-8">
      <p className="text-[0.72rem] tracking-[0.2em] text-navy uppercase">404</p>
      <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl">
        This page is not part of the journal.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-8 text-ink/80">
        The link may be out of date. The writing that is here lives in the journal
        and in Ryam&apos;s story.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/journal"
          className="inline-flex h-12 items-center justify-center bg-navy px-6 text-sm font-medium text-ivory hover:bg-ink"
        >
          Read the Journal
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center border border-ink/25 px-6 text-sm font-medium text-ink hover:border-ink"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
