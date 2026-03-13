import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import WeddingStory from "@/components/sections/WeddingStory";
import WhyChoose from "@/components/sections/WhyChoose";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      {/* Spacer to allow Hero visibility initially */}
      <div className="h-screen pointer-events-none" />

      {/* Content that scrolls over the Hero */}
      <div className="relative z-10 bg-white">
        <About />
        <Experience />
        <WeddingStory />
        <WhyChoose />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
