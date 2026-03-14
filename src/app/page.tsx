"use client";

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import WeddingStory from "@/components/sections/WeddingStory";
import WhyChoose from "@/components/sections/WhyChoose";
import CTA from "@/components/sections/CTA";

export default function Home() {
  const { scrollY } = useScroll();

  // Dynamically hide footer at the top of the page to prevent overlap with Hero
  // Reveal starts after scrolling past the Hero and part of the About section
  const footerOpacity = useTransform(scrollY, [600, 1000], [0, 1]);
  const footerZIndex = useTransform(scrollY, [600, 1000], [-10, 5]);

  return (
    <main className="relative bg-monochrome-950">
      <Navbar />

      {/* Hero Section (Sticky Reveal) */}
      <Hero />

      {/* Main Content (Scrolls over Hero) */}
      <div className="relative z-10 bg-white shadow-[0_-32px_64px_-16px_rgba(0,0,0,0.1)]">
        <About />
        <Experience />
        <WeddingStory />
        <WhyChoose />
        <CTA />
      </div>

      {/* Footer Reveal Spacer (Outside bg-white) */}
      <div className="h-[600px] pointer-events-none" />

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
