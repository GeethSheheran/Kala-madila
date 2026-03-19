"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onBookNow }: { onBookNow?: () => void }) => {
    return (
        <section id="home" className="sticky top-0 z-[1] w-full h-screen flex items-center md:items-end justify-center md:justify-start overflow-hidden">
            {/* Background with Parallax effect */}
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <iframe
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] md:w-[250%] md:h-[250%] lg:w-[150%] lg:h-[150%] object-cover min-w-full min-h-full"
                    src="https://www.youtube.com/embed/8Ywk_Cal0Qo?autoplay=1&mute=1&loop=1&playlist=8Ywk_Cal0Qo&controls=0&showinfo=0&modestbranding=1&rel=0&start=3"
                    title="Hero Video Background"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center md:text-left px-6 md:px-24 py-20 md:py-32 max-w-5xl text-white flex flex-col items-center md:items-start">
                {/* <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-sans"
                >
                    Kala Mandila Presents
                </motion.span> */}

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-3xl md:text-6xl font-serif mb-2 leading-tight tracking-tight"
                >
                    Step Into a Traditional <br />
                    <span className="italic">Sri Lankan Wedding</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-md md:text-lg font-sans mb-10 max-w-2xl mx-auto text-white/90 font-light leading-relaxed"
                >
                    Experience the beauty of Sri Lanka’s timeless wedding traditions. Authentic attire, cultural ceremonies, and cinematic memories.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8"
                >
                    <button 
                        onClick={onBookNow}
                        className="w-full md:w-auto px-12 h-16 bg-white text-black font-sans uppercase text-[10px] tracking-[0.3em] rounded-custom hover:opacity-90 transition-all transform hover:scale-105 duration-500 shadow-2xl hover:shadow-primary/40 flex items-center justify-center whitespace-nowrap"
                    >
                        Book the experience
                    </button>
                    <button className="w-full md:w-auto px-12 h-16 text-white border border-white/40 font-sans uppercase text-[10px] tracking-[0.3em] hover:text-secondary hover:border-secondary transition-all duration-300 rounded-custom flex items-center justify-center whitespace-nowrap">
                        Discover the culture
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest font-sans">Scroll</span>
                <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-accent absolute top-0 left-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
