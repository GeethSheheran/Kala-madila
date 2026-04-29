import type { Metadata } from "next";
import { Urbanist, Playfair_Display } from "next/font/google";
import { homeDescription, seoKeywords, siteUrl } from "@/lib/seo";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sri Lankan Wedding Experience for Tourists | Kala Mandila",
    template: "%s | Kala Mandila",
  },
  description: homeDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sri Lankan Wedding Experience | Kala Mandila",
    description:
      "Step into a traditional Sri Lankan wedding and capture unforgettable cultural memories.",
    url: "/",
    siteName: "Kala Mandila",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Sri Lankan wedding experience for tourists with traditional bride and groom dressing",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lankan Wedding Experience | Kala Mandila",
    description: homeDescription,
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanist.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
