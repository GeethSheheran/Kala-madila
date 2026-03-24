"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const galleryImages = [
    "/images/263A1136.webp", "/images/263A1138.webp", "/images/263A1139.webp", "/images/263A1148.webp",
    "/images/263A1150.webp", "/images/263A1154.webp", "/images/263A1155.webp", "/images/263A1165.webp",
    "/images/263A1171.webp", "/images/263A1172.webp", "/images/263A1173.webp", "/images/263A1184.webp",
    "/images/263A1185.webp", "/images/263A1186.webp", "/images/263A1187.webp", "/images/263A1188.webp",
    "/images/263A1189.webp", "/images/263A1190.webp", "/images/263A1191.webp", "/images/263A1193.webp",
    "/images/263A1194.webp", "/images/263A1198.webp", "/images/263A1199.webp", "/images/263A1200.webp",
    "/images/263A1201.webp", "/images/263A1206.webp", "/images/263A1207.webp", "/images/263A1214.webp",
    "/images/263A1215.webp", "/images/263A1221.webp", "/images/263A1222.webp", "/images/263A1223.webp",
    "/images/263A2500.webp", "/images/263A2501.webp", "/images/263A2502.webp", "/images/263A2503.webp",
    "/images/263A2504.webp", "/images/263A2505.webp", "/images/263A2506.webp", "/images/263A2507.webp",
];

const GalleryPage = () => {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href="/">
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-xs uppercase tracking-widest text-monochrome-400 hover:text-black transition-colors mb-12 group"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
                            Back to Experience
                        </motion.button>
                    </Link>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none">
                            Our <span className="italic text-accent">Gallery</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-monochrome-500 font-sans font-extralight leading-relaxed">
                            A curated collection of moments captured at Kala Mandila. Each image tells a story of tradition, love, and the vibrant culture of Sri Lanka.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((src, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                                className="relative group overflow-hidden rounded-2xl bg-monochrome-50"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${idx + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default GalleryPage;
