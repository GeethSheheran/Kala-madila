"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = ({ onBookNow }: { onBookNow?: () => void }) => {
    return (
        <section id="contact" className="relative py-32 md:py-60 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6 mb-12"
                >
                    <span className="text-[10px] uppercase tracking-[0.5em]  text-accent">
                        Begin Your Cultural Journey
                    </span>
                    <div className="w-20 h-[1px] bg-accent" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-serif mb-12 text-black leading-[1.05] tracking-tight"
                >
                    Create Your Sri Lankan <br />
                    <span className="italic text-accent">Wedding Experience</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-xl md:text-2xl text-monochrome-600 mb-20 font-sans font-extralight max-w-4xl mx-auto leading-relaxed"
                >
                    Step into a timeless tradition and create unforgettable memories during your journey in Sri Lanka.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <button 
                        onClick={onBookNow}
                        className="px-20 py-8 bg-black text-white hover:bg-accent hover:text-black transition-all duration-700 rounded-custom text-xs uppercase tracking-[0.4em]  shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_45px_90px_-20px_rgba(226,239,112,0.4)] transform hover:scale-105 active:scale-95"
                    >
                        Book Your Experience Today
                    </button>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-accent/5 rounded-full blur-[150px] -z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square border border-monochrome-50 rounded-full -z-0 pointer-events-none" />
        </section>
    );
};

export default CTA;
