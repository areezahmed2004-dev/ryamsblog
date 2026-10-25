import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultSocialImage, getSiteUrl, siteName } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const description =
  "Ryam Ahmed's student-athlete journal about injuries, recovery, preparation, resilience, basketball, soccer, and lessons learned through sport.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "My Athletic Journey | Ryam Ahmed",
    template: "%s | My Athletic Journey",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Ryam Ahmed" }],
  creator: "Ryam Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: "My Athletic Journey | Ryam Ahmed",
    description,
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Athletic Journey | Ryam Ahmed",
    description,
    images: [defaultSocialImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
