"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 md:py-48 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    {/* Imagery side */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10 w-4/5 ml-auto"
                        >
                            <img
                                src="/about-1.png"
                                alt="Kala Mandila Tradition"
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                            className="absolute -bottom-16 -left-8 w-3/5 z-20 border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]"
                        >
                            <img
                                src="/about-2.png"
                                alt="Traditional Photoshoot"
                                className="w-full h-auto"
                            />
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-custom -z-0 pointer-events-none" />
                    </div>

                    {/* Text side */}
                    <div className="flex flex-col space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-accent" />
                            <span className="text-black text-[10px] uppercase tracking-[0.4em] font-bold">
                                Where Culture Becomes Your Story
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-3xl md:text-5xl font-serif leading-[1.1] text-black tracking-tight"
                        >
                            Experience Sri Lanka <br />
                            in a <span className="italic text-primary">Meaningful Way</span>
                        </motion.h2>

                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg text-monochrome-600 font-sans leading-relaxed font-light"
                            >
                                Kala Mandila is a cultural experience destination created for travelers who want to explore the beauty of Sri Lankan traditions. Our signature experience allows visitors to step into the role of a traditional Sri Lankan bride or groom, wearing authentic Kandyan wedding attire.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-lg text-monochrome-600 font-sans leading-relaxed font-light"
                            >
                                Surrounded by beautiful outdoor locations and guided by experienced professionals, each experience is designed to feel authentic, joyful, and unforgettable. At Kala Mandila, we believe culture is not only something to observe — it is something to live.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="pt-8"
                        >
                            {/* <button className="flex items-center gap-6 group">
                                <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-black group-hover:text-accent transition-colors">Read Our Full Story</span>
                                <div className="w-16 h-[1px] bg-black group-hover:bg-accent group-hover:w-24 transition-all duration-500" />
                            </button> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
