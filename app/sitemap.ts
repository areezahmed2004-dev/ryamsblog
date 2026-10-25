import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date("2025-08-03");

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/journal`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/sources`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    ...articles.map((article) => ({
      url: `${siteUrl}/journal/${article.slug}`,
      lastModified: new Date(article.dateISO),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
