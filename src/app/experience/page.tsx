"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryForm from "@/components/sections/InquiryForm";
import SEOJsonLd from "@/components/SEOJsonLd";
import { experienceJsonLd } from "@/lib/seo";
import { Check, ArrowRight, Camera, Music, Flower2, Heart, MapPin, Sparkles } from "lucide-react";

export default function ExperiencePage() {
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

    const highlights = [
        {
            icon: Sparkles,
            title: "Authentic Dressing",
            desc: "Traditional Kandyan style bride & groom dressing with authentic jewelry and attire."
        },
        {
            icon: Flower2,
            title: "Poruwa Ceremony",
            desc: "A beautifully decorated floral Poruwa setting for the traditional ritual."
        },
        {
            icon: Music,
            title: "Live Performances",
            desc: "Traditional Sri Lankan dancers and drummers to create an authentic atmosphere."
        },
        {
            icon: Camera,
            title: "Professional Shoot",
            desc: "Full session with high-end cultural photography at a scenic location."
        }
    ];

    const journeySteps = [
        {
            title: "The Transformation",
            desc: "Our expert team guides you through the intricate process of traditional Kandyan dressing, ensuring every detail of the attire and jewelry is perfect.",
            image: "https://www.ishashairandbeauty.com.au/wp-content/uploads/2017/07/blog-1jpg.jpg"
        },
        {
            title: "The Welcome",
            desc: "You are welcomed into a meticulously designed cultural setting that mirrors the grandeur of a real Sri Lankan royal wedding.",
            image: "https://i.ytimg.com/vi/K2IRqqvRbMA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmaCYTBuE-0MGeIgVPtvvzxthVzQ"
        },
        {
            title: "The Ceremony",
            desc: "Experience the sacred Poruwa ceremony, accompanied by the rhythmic beats of traditional drummers and the grace of heritage dancers.",
            image: "https://kissmeyoufool.com.au/wp-content/uploads/2020/10/Civil-ceremony-after-poruwa-ceremony-C.jpg"
        },
        {
            title: "The Immortalization",
            desc: "Your journey concludes with a professional photoshoot in a stunning outdoor or heritage location, capturing memories that last a lifetime.",
            image: "https://img.freepik.com/premium-photo/wedding-photographer-takes-pictures-bride-groom-nature-wedding-couple-photo-shoot-photographer-action_114963-3818.jpg?semt=ais_hybrid&w=740&q=80"
        }
    ];

    return (
        <main className="relative bg-white overflow-hidden">
            <SEOJsonLd data={experienceJsonLd} />
            <Navbar onBookNow={() => setIsInquiryModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://cdn-5ff447a4c1ac19100810d94f.closte.com/wp-content/uploads/2021/11/wedding-sri-lanka-poruwa-kapuwa-mysrilankatravel-1-1024x678.jpg"
                        alt="Kala Mandila Experience"
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex flex-col items-center gap-4"
                    >
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-secondary">
                            Signature Cultural Journey
                        </span>
                        <div className="w-20 h-[1px] bg-secondary/50" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter leading-tight"
                    >
                        The Kala Mandila <br />
                        <span className="text-secondary">Experience</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-12 text-monochrome-100 leading-relaxed"
                    >
                        A Complete Traditional Sri Lankan Wedding Experience. 
                        Become part of a timeless tradition — not just observe it.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        onClick={() => setIsInquiryModalOpen(true)}
                        className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-secondary transition-all duration-500 shadow-2xl"
                    >
                        Inquire Now
                    </motion.button>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white to-white/0" />
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-black mb-10 leading-tight tracking-tight">
                            Step into the elegance, color, and tradition of a <span className="text-accent italic">Sri Lankan wedding</span>.
                        </h2>
                        <div className="w-24 h-[2px] bg-secondary/30 mx-auto mb-10" />
                        <p className="text-xl text-monochrome-600 font-sans font-light leading-relaxed">
                            Designed especially for travelers, this package allows you to become part of a timeless tradition. Our signature all-in-one cultural experience offers an immersive journey into the heartbeat of Sri Lankan heritage.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="py-24 px-6 bg-monochrome-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black block mb-4">What You Will Experience</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-black tracking-tighter">The Cultural Package</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="p-10 bg-white border border-monochrome-100 hover:border-accent/30 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                            >
                                <div className="w-14 h-14 bg-monochrome-50 text-accent flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                    <item.icon size={28} strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-sm text-monochrome-500 font-sans font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent rounded-full blur-[200px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black block mb-4">Step by Step</span>
                        <h2 className="text-4xl md:text-7xl font-serif tracking-tighter">The Experience Journey</h2>
                    </div>

                    <div className="space-y-20">
                        {journeySteps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                            >
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-block text-6xl md:text-8xl font-serif text-white/5 font-black mb-4">0{idx + 1}</div>
                                    <h3 className="text-3xl md:text-4xl font-serif mb-6 text-accent">{step.title}</h3>
                                    <p className="text-lg text-monochrome-400 font-sans font-extralight leading-relaxed max-w-xl mx-auto md:mx-0">
                                        {step.desc}
                                    </p>
                                </div>
                                <div className="flex-1 w-full aspect-video relative overflow-hidden group">
                                     <img 
                                        src={step.image} 
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                     />
                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                                     <div className="absolute inset-0 border border-white/20 scale-95 group-hover:scale-100 transition-transform duration-700 m-8" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 text-center"
                    >
                        <button
                            onClick={() => setIsInquiryModalOpen(true)}
                            className="group px-16 py-6 bg-accent text-black text-xs uppercase tracking-[0.5em] font-black hover:bg-white transition-all duration-500 relative overflow-hidden"
                        >
                            <span className="relative z-10">Start Your Transformation</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Inquiry Modal */}
            <InquiryForm isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />

            <Footer />

            <style jsx global>{`
                @keyframes slow-zoom {
                    0% { transform: scale(1.05); }
                    100% { transform: scale(1.15); }
                }
                .animate-slow-zoom {
                    animation: slow-zoom 20s infinite alternate ease-in-out;
                }
            `}</style>
        </main>
    );
}
