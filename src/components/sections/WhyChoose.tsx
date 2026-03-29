"use client";

import React from "react";
import { motion } from "framer-motion";

// nodes as the original
const whyChooseNodes = [
    { icon: '/gifs/authentic.gif', title: "Authentic Experience", desc: "Inspired by genuine Sri Lankan traditions." },
    { icon: '/gifs/love.gif', title: "Perfect for Couples", desc: "Ideal for honeymoons and anniversaries." },
    { icon: '/gifs/photo.gif', title: "Professional Photos", desc: "Cinematic memories captured by experts." },
    { icon: '/gifs/travel.gif', title: "Unique Travel Memory", desc: "Become part of Sri Lanka's story." },
];

const perfectFor = [
    "Couples traveling to Sri Lanka",
    "Honeymoon travelers",
    "Cultural experience seekers",
    "Content creators",
    "Travelers looking for unique memories",
];

const WhyChoose = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % perfectFor.length);
        }, 2200); // Shift every ~2.2 seconds

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section id="why-choose" className="section-spacing bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Left & Middle Column: Features */}
                    <div className="lg:col-span-2">
                        {/* Title Section */}
                        <div className="flex flex-col space-y-4 mb-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center lg:justify-start gap-4"
                            >
                                <div className="w-12 h-[1px] bg-accent" />
                                <span className="text-black text-[10px] uppercase tracking-[0.4em] text-center lg:text-left">
                                    Experience Sri Lankan Traditions
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-5xl font-serif leading-[1.1] text-black tracking-tight text-center lg:text-left"
                            >
                                Why Choose <span className="text-accent">Kala Mandila?</span>
                            </motion.h2>
                        </div>

                        {/* Elegant 2x2 Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {whyChooseNodes.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="group flex flex-col gap-5"
                                >
                                    <div className="flex items-center gap-5 border-b border-monochrome-200/60 pb-5 group-hover:border-accent transition-colors duration-500">
                                        <div className="flex-shrink-0 text-monochrome-300 group-hover:scale-110 transition-transform duration-500">
                                            <img src={item.icon} alt={item.title} className="w-[48px] h-[48px] object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-serif text-monochrome-800 group-hover:text-accent transition-colors duration-500 tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-base text-monochrome-600 font-sans leading-relaxed transition-colors duration-500">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Perfect For Sidebar */}
                    <div className="lg:col-span-1 h-full">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-10 md:p-14 border border-monochrome-200/60 shadow-sm relative overflow-hidden h-full flex flex-col justify-center rounded-sm group"
                        >
                            {/* Full Background Photograph with White Overlay */}
                            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                                <img 
                                    src="/attire1.png" 
                                    alt="Attire" 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Premium White Overlay */}
                                <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] transition-colors duration-700 group-hover:bg-white/75" />
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-serif mb-12 text-black tracking-tight flex items-center gap-4 relative z-10">
                                Perfect For
                                <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                            </h3>
                            <ul 
                                className="space-y-6 relative z-10"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {perfectFor.map((text, idx) => {
                                    const isActive = activeIndex === idx;
                                    return (
                                        <motion.li
                                            key={text}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                            className="flex items-center gap-5 text-base md:text-lg font-sans text-monochrome-700 cursor-default"
                                            onMouseEnter={() => setActiveIndex(idx)}
                                        >
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? 'border-accent bg-accent/10' : 'border-monochrome-200 bg-monochrome-50/50'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-75 ${isActive ? 'bg-accent shadow-[0_0_8px_rgba(186,159,71,0.5)] scale-110' : 'bg-monochrome-300'}`} />
                                            </div>
                                            <span className={`transition-all duration-300 ${isActive ? 'text-black font-normal translate-x-1' : 'font-extralight translate-x-0'}`}>
                                                {text}
                                            </span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
