"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const marqueeImages = [
    "/nuwara1.png",
    "/nuwara2.png",
    "/nuwara3.png",
    "/nuwara4.png",
    "/poruwa.png",
    "/sigiriya1.png",
    "/anuradhapura1.png",
    "/anuradhapura2.png",
    "/anuradhapura3.png",
    "/anuradhapura4.png",
    "/attire.png",
    "/attire1.png",
    "/attire2.png",
    "/bride.png",
    "/bride1.png",
    "/bride2.png",
    "/263A1138.JPG",
    "/263A1193.JPG",
    "/263A1236.JPG",
    "/263A1265.JPG",
    "/263A1269.JPG",
];

// Grid slot configurations
const gridSlots = [
    { id: 0, class: "lg:col-span-1 lg:row-span-2" }, // Left Tall
    { id: 1, class: "lg:col-span-2 lg:row-span-1" }, // Wide Top Right
    { id: 2, class: "lg:col-span-1 lg:row-span-1" }, // Center Square
    { id: 3, class: "lg:col-span-1 lg:row-span-2" }, // Right Tall
    { id: 4, class: "lg:col-span-1 lg:row-span-1" }, // Bot Left Square
    { id: 5, class: "lg:col-span-1 lg:row-span-1" }, // Bot Center Square
];

const MarqueeSection = () => {
    // Current images in each of the 6 slots
    const [visibleIndices, setVisibleIndices] = React.useState([0, 1, 2, 3, 4, 5]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            // Pick a random slot to update
            const slotToUpdate = Math.floor(Math.random() * 6);
            
            // Pick a new index that isn't currently visible
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * marqueeImages.length);
            } while (visibleIndices.includes(nextIndex));

            setVisibleIndices(prev => {
                const next = [...prev];
                next[slotToUpdate] = nextIndex;
                return next;
            });
        }, 3500); // Change one image every 3.5 seconds for a dynamic feel

        return () => clearInterval(interval);
    }, [visibleIndices]);

    // Duplicate images for marquee
    const doubledImages = [...marqueeImages, ...marqueeImages];

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center lg:items-start gap-4 mb-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-accent/30" />
                        <span className="text-black text-[10px] uppercase tracking-[0.4em]">
                            The Gallery
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-black tracking-tight text-center lg:text-left">
                        Capturing <span className="text-accent">Timeless</span> Stories.
                    </h2>
                </motion.div>
            </div>

            {/* Mobile/Tablet View: Marquee (Unchanged for small screens) */}
            <div className="lg:hidden relative flex whitespace-nowrap">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {doubledImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-64 aspect-[4/5] overflow-hidden rounded-sm group relative"
                        >
                            <img
                                src={src}
                                alt={`Marquee Mobile ${idx}`}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Desktop View: Dynamic 6-Slot Grid */}
            <div className="hidden lg:block max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-3 grid-rows-3 gap-6 h-[900px]">
                    {gridSlots.map((slot, i) => (
                        <div
                            key={slot.id}
                            className={`${slot.class} overflow-hidden rounded-sm group relative cursor-pointer bg-monochrome-50`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={visibleIndices[i]}
                                    src={marqueeImages[visibleIndices[i]]}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="w-full h-full object-cover rounded-sm absolute inset-0"
                                />
                            </AnimatePresence>
                            
                            {/* Static Overlays (Always visible on slot) */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700 pointer-events-none z-10" />
                            <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none z-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeSection;
