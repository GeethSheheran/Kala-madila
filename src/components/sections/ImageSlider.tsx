"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const rowOneImages = [
    "/images/263A1136.webp", "/images/263A1138.webp", "/images/263A1139.webp", "/images/263A1148.webp",
    "/images/263A1150.webp", "/images/263A1154.webp", "/images/263A1155.webp", "/images/263A1165.webp",
];

const rowTwoImages = [
    "/images/263A1171.webp", "/images/263A1172.webp", "/images/263A1173.webp", "/images/263A1184.webp",
    "/images/263A1185.webp", "/images/263A1186.webp", "/images/263A1187.webp", "/images/263A1188.webp",
];

const MarqueeRow = ({ images, direction = "left", speed = 40 }: { images: string[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden group">
            <motion.div
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex gap-4 md:gap-8 flex-none py-4"
            >
                {[...images, ...images].map((src, idx) => (
                    <div
                        key={idx}
                        className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-monochrome-100"
                    >
                        <img
                            src={src}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const ImageSlider = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[100vw]">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <span className="text-accent text-[10px] uppercase tracking-[0.4em] block mb-4">
                        Visual Journey
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
                        Moments of <span className="italic text-accent">Kala Mandila</span>
                    </h2>
                </div>

                {/* Rows Area */}
                <div className="space-y-4 md:space-y-8">
                    <MarqueeRow images={rowOneImages} direction="left" speed={60} />
                    <MarqueeRow images={rowTwoImages} direction="right" speed={55} />
                </div>

                {/* Button Area */}
                <div className="mt-16 text-center px-6">
                    <Link href="/gallery">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white text-[10px] md:text-xs uppercase tracking-[0.3em] font-black rounded-custom shadow-xl hover:bg-accent hover:text-black transition-all duration-500 group"
                        >
                            Explore Full Gallery
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
