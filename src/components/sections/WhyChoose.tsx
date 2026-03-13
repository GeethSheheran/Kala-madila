"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Camera, Heart } from "lucide-react";

const whyChooseNodes = [
    { icon: Heart, title: "Authentic Experience", desc: "Inspired by genuine Sri Lankan traditions." },
    { icon: Star, title: "Perfect for Couples", desc: "Ideal for honeymoons and anniversaries." },
    { icon: Camera, title: "Professional Photos", desc: "Cinematic memories captured by experts." },
    { icon: Check, title: "Unique Travel Memory", desc: "Become part of Sri Lanka's story." },
];

const perfectFor = [
    "Couples traveling to Sri Lanka",
    "Honeymoon travelers",
    "Cultural experience seekers",
    "Content creators",
    "Travelers looking for unique memories",
];

const WhyChoose = () => {
    return (
        <section id="why-choose" className="py-24 md:py-48 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-stretch">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-[1px] bg-accent" />
                            <h2 className="text-4xl md:text-6xl font-serif text-black tracking-tight">
                                Why <span className="italic text-secondary">Kala Mandila</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
                            {whyChooseNodes.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="space-y-5"
                                >
                                    <div className="w-14 h-14 bg-monochrome-50 flex items-center justify-center rounded-custom text-secondary border border-monochrome-100 group">
                                        <item.icon size={26} className="group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-serif tracking-tight">{item.title}</h3>
                                    <p className="text-base text-monochrome-600 leading-relaxed font-sans font-extralight">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-monochrome-950 p-16 md:p-24 text-white relative rounded-sm overflow-hidden flex flex-col justify-center">
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-serif mb-12 text-primary tracking-tight"
                        >
                            Perfect For
                        </motion.h3>
                        <ul className="space-y-8 relative z-10">
                            {perfectFor.map((text, idx) => (
                                <motion.li
                                    key={text}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="flex items-center gap-6 text-xl font-sans font-extralight group cursor-default"
                                >
                                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-500" />
                                    <span className="group-hover:translate-x-2 transition-transform duration-500">{text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        {/* Abstract background glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48 transition-opacity duration-1000" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -ml-32 -mb-32 opacity-30" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
