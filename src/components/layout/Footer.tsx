import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Experience", href: "/#experience" },
        { name: "Story", href: "/#story" },
        { name: "Contact", href: "/#contact" },
    ];

    const socialLinks = [
        { icon: Instagram, href: "#", name: "Instagram" },
        { icon: Facebook, href: "#", name: "Facebook" },
        { icon: Mail, href: "mailto:hello@kalamandila.com", name: "Email" },
    ];

    return (
        <footer className="bg-monochrome-950 text-white pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
                        <a href="#home" className="inline-block group transition-transform duration-500 hover:scale-105">
                            <img
                                src="/logo.png"
                                alt="Kala Mandila Logo"
                                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                            />
                        </a>
                        <div className="space-y-4 max-w-sm">
                            <h2 className="text-3xl font-serif tracking-tighter">
                                KALA <span className="text-accent">MANDILA</span>
                            </h2>
                            <p className="text-base text-monochrome-400 font-sans leading-relaxed font-extralight">
                                Preserving and celebrating the timeless beauty of Sri Lankan wedding traditions for the discerning modern traveler.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 border border-white/10 rounded-custom flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} className="transition-transform duration-500 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-2 space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Discover</h3>
                        <ul className="space-y-4 text-sm text-monochrome-400 font-sans font-light">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Connect</h3>
                        <ul className="space-y-4 text-sm text-monochrome-400 font-sans font-light">
                            <li className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin size={14} className="text-accent mt-1" />
                                <span className="max-w-[200px]">No 27/1, jayanthi road, dadalla, galle, sri lanka</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail size={14} className="text-accent" />
                                hello@kalamandila.com
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone size={14} className="text-accent" />
                                <a href="https://wa.me/94769413002" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                    076 941 3002
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="md:col-span-3 space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Inquiry</h3>
                        <p className="text-sm text-monochrome-400 font-sans font-light leading-relaxed">
                            Ready to start your journey with us?
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-black rounded-custom hover:bg-accent transition-all duration-500 group"
                        >
                            Send Inquiry
                            <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] text-monochrome-600 font-black">
                    <p>© 2026 KALA MANDILA. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-custom blur-[150px] -mr-64 -mb-64 pointer-events-none" />
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -ml-32 -mt-32 pointer-events-none" />
        </footer>
    );
};

export default Footer;
