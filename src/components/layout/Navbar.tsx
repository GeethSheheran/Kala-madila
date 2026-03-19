"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Story", href: "#story" },
        { name: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Hanger Menu Icon Component (Animated Lines)
    const HangerIcon = ({ isOpen, colorClass }: { isOpen: boolean; colorClass: string }) => (
        <div className="flex flex-col items-center justify-center space-y-1.5 w-8 h-8 group overflow-hidden">
            <motion.div
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 7.5 : 0,
                    width: isOpen ? "100%" : "80%"
                }}
                className={cn("h-[1.5px] transition-all duration-300 ease-out origin-center", colorClass)}
            />
            <motion.div
                animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? 20 : 0
                }}
                className={cn("h-[1.5px] w-full transition-all duration-300 opacity-60 group-hover:opacity-100", colorClass)}
            />
            <motion.div
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -7.5 : 0,
                    width: isOpen ? "100%" : "60%"
                }}
                className={cn("h-[1.5px] transition-all duration-300 ease-out origin-center", colorClass)}
            />
        </div>
    );

    const navTextColor = isMenuOpen ? "text-black" : "text-white";
    const navIconColor = isMenuOpen ? "bg-black" : "bg-white";

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12",
                isScrolled ? "py-4 bg-black/20 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Side: Logo */}
                <div className="flex items-center justify-start flex-1 md:flex-none">
                    <a href="#home" className="flex items-center gap-2 group">
                        <img
                            src="/logo.png"
                            alt="Kala Mandila Logo"
                            className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500"
                        />
                    </a>
                </div>

                {/* Center: Desktop Hanger Menu Toggle (Hidden on mobile) */}
                <div className="hidden md:flex items-center justify-center flex-1">
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col items-center group transition-all duration-500 hover:scale-110"
                        aria-label="Toggle Menu"
                    >
                        <HangerIcon isOpen={isMenuOpen} colorClass={navIconColor} />
                    </button>
                </div>

                {/* Right Side: Book Now Button (Desktop) & Hamburger (Mobile) */}
                <div className="flex items-center justify-end flex-1 md:flex-none gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "hidden md:block px-10 py-4 text-[9px] uppercase tracking-[0.2em] rounded-custom transition-all duration-500 shadow-2xl",
                            isScrolled || isMenuOpen
                                ? "bg-black text-white hover:bg-accent hover:text-black"
                                : "bg-white text-black hover:bg-accent hover:text-black"
                        )}
                    >
                        Book Now
                    </motion.button>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="flex flex-col items-center group transition-all duration-500 hover:scale-110"
                            aria-label="Toggle Menu"
                        >
                            <HangerIcon isOpen={isMenuOpen} colorClass={navIconColor} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide-down Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 top-0 left-0 w-full bg-white z-[-1] overflow-hidden flex flex-col items-center justify-center"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center">
                            <ul className="w-full space-y-4 md:space-y-6 text-center">
                                {navLinks.map((link, idx) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                        className="flex items-center justify-center gap-4 group"
                                    >
                                        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/20 font-sans group-hover:text-black/60 transition-colors duration-500 mt-2 md:mt-4">
                                            0{idx + 1}
                                        </span>
                                        <a
                                            href={link.href}
                                            onClick={closeMenu}
                                            className="relative block text-4xl md:text-7xl font-serif text-black hover:text-secondary transition-all duration-500 tracking-tight"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full" />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Mobile Book Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="md:hidden mt-20 px-12 py-5 bg-black text-white text-xs uppercase tracking-[0.3em] font-black rounded-custom"
                            >
                                Book the Experience
                            </motion.button>
                        </div>

                        {/* Footer Info in Menu */}
                        <div className="absolute bottom-12 w-full px-12 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.3em] font-sans text-black/40">
                            <div className="flex gap-8 mb-4 md:mb-0">
                                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                                <a href="#" className="hover:text-accent transition-colors">Pinterest</a>
                            </div>
                            <div>© 2026 Kala Mandila — Tradition Revived</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
