"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const experiences = [
    {
        title: "Traditional Setups",
        description: "Elegant poruwa arrangements designed to frame your special moments.",
        image: "/poruwa.png",
    },
    {
        title: "Authentic Attire",
        description: "Handcrafted Kandyan wedding garments representing centuries of royal history.",
        image: "/attire.png",
    },
    {
        title: "Iconic Locations",
        description: "Access to some of Sri Lanka's most beautiful and sacred cultural backdrops.",
        image: "/anuradhapura1.png",
    },
    {
        title: "Professional Shoot",
        description: "Experienced photographers capturing your journey in high-end cinematic style.",
        image: "/263A1138.JPG",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section-spacing py-24 bg-monochrome-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4 mb-6"
                    >
                        <span className="text-black text-[10px] uppercase tracking-[0.5em]">
                            A Journey Into Tradition
                        </span>
                        <div className="w-16 h-[1px] bg-secondary/30" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-3xl md:text-5xl font-serif text-black leading-tight tracking-tight"
                    >
                        Your Kala Mandila <span className="text-accent">Experience</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.2)] transition-all duration-700 rounded-custom">
                                <Image
                                    src={exp.image}
                                    alt={exp.title}
                                    fill
                                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700" />
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-700 m-4" />
                            </div>
                            <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors duration-300 tracking-tight text-center md:text-left">
                                {exp.title}
                            </h3>
                            <p className="text-sm text-monochrome-600 font-sans leading-relaxed font-light text-center md:text-left">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <Link
                        href="/experience"
                        className="group relative px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-accent transition-all duration-500 flex items-center gap-4 overflow-hidden"
                    >
                        <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1">Discover Full Experience</span>
                        <div className="relative z-10 w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-500" />
                        
                        {/* Decorative background shimmers */}
                        <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
