"use client";

import React from "react";
import { motion } from "framer-motion";

const WeddingStory = () => {
    return (
        <section id="story" className="section-spacing bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-accent text-[10px] uppercase tracking-[0.5em] underline underline-offset-8 decoration-accent/30">
                                The Traditional Wedding Story
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-serif leading-[1.05] tracking-tight"
                        >
                            Timeless Elegance <br />
                            <span className="text-accent">Royal Heritage.</span>
                        </motion.h2>

                        <div className="space-y-8 max-w-xl">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl text-monochrome-400 font-sans leading-relaxed font-extralight"
                            >
                                Sri Lankan weddings are among the most beautiful cultural ceremonies in Asia. Rich in symbolism, color, and tradition, these ceremonies celebrate unity, family, and heritage.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-xl text-monochrome-400 font-sans leading-relaxed font-extralight"
                            >
                                The traditional Kandyan wedding attire (Mul Gedara), elaborate jewelry, and ceremonial elements have been passed down through generations, representing the island’s royal history.
                            </motion.p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="relative z-10 overflow-hidden"
                        >
                            <img
                                src="/about-3.jpg"
                                alt="Kandyan Jewelry"
                                className="w-full aspect-square object-cover scale-x-[-1] rounded-sm grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 shadow-[0_40px_80px_-20px_rgba(226,239,112,0.1)]"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-1000" />
                        </motion.div>
                        <div className="absolute inset-0 bg-accent/5 -m-8 -z-0 blur-[100px] opacity-30 group-hover:opacity-60 transition-all duration-1000" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingStory;
