"use client";

import React, { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

// Below the fold sections - Dynamic Imports
const Experience = dynamic(() => import("@/components/sections/Experience"));
const WeddingStory = dynamic(() => import("@/components/sections/WeddingStory"));
const WhyChoose = dynamic(() => import("@/components/sections/WhyChoose"));
const MarqueeSection = dynamic(() => import("@/components/sections/MarqueeSection"));
const InquiryForm = dynamic(() => import("@/components/sections/InquiryForm"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const CTA = dynamic(() => import("@/components/sections/CTA"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const SEOJsonLd = dynamic(() => import("@/components/SEOJsonLd"));

import { homeJsonLd } from "@/lib/seo";

export default function Home() {
  const { scrollY } = useScroll();

  // Dynamically hide footer at the top of the page to prevent overlap with Hero
  // Reveal starts after scrolling past the Hero and part of the About section
  const footerOpacity = useTransform(scrollY, [600, 1000], [0, 1]);
  const footerZIndex = useTransform(scrollY, [600, 1000], [-10, 5]);

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <main className="relative bg-monochrome-950">
      <SEOJsonLd data={homeJsonLd} />
      <Navbar onBookNow={() => setIsInquiryModalOpen(true)} />

      {/* Hero Section (Sticky Reveal) */}
      <Hero onBookNow={() => setIsInquiryModalOpen(true)} />

      {/* Main Content */}
      <div className="relative z-10 bg-white shadow-[0_-32px_64px_-16px_rgba(0,0,0,0.1)]">
        <About />
        <Experience />
        <WeddingStory />
        <WhyChoose />
        <MarqueeSection />
        <InquiryForm />
        <FAQ />
        <CTA onBookNow={() => setIsInquiryModalOpen(true)} />
      </div>

      {/* Inquiry Modal */}
      <InquiryForm isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />

      {/* Footer Reveal Spacer (Outside bg-white) */}
      <div className="h-[1000px] md:h-[600px] pointer-events-none" />

      {/* Fixed Footer (Revealed from behind) */}
      <motion.div
        style={{ opacity: footerOpacity, zIndex: footerZIndex }}
        className="fixed bottom-0 left-0 w-full"
      >
        <Footer />
      </motion.div>
    </main>
  );
}
