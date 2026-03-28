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
        <section id="why-choose" className="section-spacing bg-monochrome-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Left & Middle Column: Why Choose Features */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4 mb-16 text-center lg:text-left"
                        >
                            <span className="text-accent text-[10px] uppercase tracking-[0.4em] underline underline-offset-8 decoration-accent/30 block mb-6">
                                Experience Sri Lankan Traditions
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight tracking-tight">
                                Why Choose 
                                <span className="text-accent"> Kala Mandila?</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {whyChooseNodes.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="h-full bg-white p-8 rounded-2xl shadow-sm border border-monochrome-100 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-accent/10 flex items-center justify-center rounded-xl text-accent mb-6 transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                                        <item.icon size={26} className="transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-serif tracking-tight">{item.title}</h3>
                                        <p className="text-base text-monochrome-500 leading-relaxed font-sans font-extralight">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Perfect For Sidebar */}
                    <div className="lg:col-span-1 bg-monochrome-950 p-10 md:p-14 text-white rounded-2xl relative overflow-hidden shadow-2xl">
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-serif mb-10 text-primary tracking-tight"
                        >
                            Perfect For
                        </motion.h3>
                        <ul className="space-y-6 relative z-10">
                            {perfectFor.map((text, idx) => (
                                <motion.li
                                    key={text}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4 text-base md:text-lg font-sans font-extralight group cursor-default"
                                >
                                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                                    <span className="text-monochrome-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        
                        {/* Decorative Background Glows */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-[80px] -mr-24 -mt-24 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-[60px] -ml-16 -mb-16 pointer-events-none" />
                        
                        {/* Ornament Overlay */}
                        <img 
                            src="/sri-lankan-ornament-overlay.png" 
                            alt="" 
                            className="absolute -bottom-32 -right-12 w-150 h-150 object-contain opacity-15 pointer-events-none select-none grayscale -scale-x-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
