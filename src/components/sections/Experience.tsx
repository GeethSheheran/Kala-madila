"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Authentic Attire",
        description: "Handcrafted Kandyan wedding garments representing centuries of royal history.",
        image: "/img01.png",
    },
    {
        title: "Traditional Styling",
        description: "Professional assistance to ensure every detail of your transformation is perfect.",
        image: "/exp-makeup.png",
    },
    {
        title: "Iconic Locations",
        description: "Access to some of Sri Lanka's most beautiful and sacred cultural backdrops.",
        image: "/exp-location.png",
    },
    {
        title: "Professional Shoot",
        description: "Experienced photographers capturing your journey in high-end cinematic style.",
        image: "/exp-shoot.png",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-48 bg-monochrome-50">
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
                        Your Kala Mandila <span className="italic text-accent">Experience</span>
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
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
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
            </div>
        </section>
    );
};

export default Experience;
