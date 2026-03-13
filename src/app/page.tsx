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
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <WeddingStory />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  );
}
