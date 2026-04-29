import type { Metadata } from "next";
import { seoKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Traditional Sri Lankan Wedding Cultural Experience",
  description:
    "Discover the Kala Mandila Sri Lankan wedding experience for tourists with traditional Kandyan dressing, Poruwa ceremony, performances, and professional photography.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Traditional Sri Lankan Wedding Experience | Kala Mandila",
    description:
      "Explore a Sri Lanka cultural experience built around traditional wedding attire, Poruwa ceremony, dancing, and photography.",
    url: "/experience",
    siteName: "Kala Mandila",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Traditional Sri Lankan wedding cultural experience for tourists",
      },
    ],
    locale: "en_LK",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traditional Sri Lankan Wedding Experience | Kala Mandila",
    description:
      "A Sri Lanka cultural experience with Kandyan dressing, Poruwa ceremony, performances, and photography.",
    images: ["/hero-bg.png"],
  },
};

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
