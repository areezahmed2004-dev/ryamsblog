export const siteName = "My Athletic Journey";
export const authorName = "Ryam Ahmed";

export const disclaimer =
  "My Athletic Journey shares the personal experience of a student-athlete. Ryam Ahmed is not a medical professional. Information on this website is educational and should not replace advice, diagnosis, or treatment from a qualified dentist, orthodontist, physician, or other healthcare professional.";

export const urgentNote =
  "Serious bleeding, severe pain, major trauma, or a knocked-out tooth may require prompt professional care.";

export const nav = [
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "My Story" },
  { href: "/sources", label: "Sources" },
] as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

export const defaultSocialImage = {
  url: "/images/hero-basketball.jpg",
  alt: "Ryam Ahmed jumps for a shot in a white Colts uniform during a high school basketball game.",
  width: 2048,
  height: 1365,
};
