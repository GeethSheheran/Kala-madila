"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Calendar, MessageSquare, X, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

interface InquiryFormProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const InquiryForm = ({ isOpen, onClose }: InquiryFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        eventType: "Wedding",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "Kala Mandila made our honeymoon in Kandy unforgettable. Wearing the traditional Nilame attire was a dream.",
            author: "Sarah & David",
            stars: 5
        },
        {
            quote: "The attention to detail and respect for tradition is unmatched. A truly cinematic experience.",
            author: "Elena R.",
            stars: 5
        },
        {
            quote: "A magical experience! The team at Kala Mandila are true artists who respect their heritage.",
            author: "David W.",
            stars: 5
        },
        {
            quote: "Best cultural photography in Sri Lanka. Period.",
            author: "Chris & Maya",
            stars: 5
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const formContent = (
        <div className={cn("max-w-7xl py-24 mx-auto", !isOpen && "px-6", isOpen && "max-w-4xl pt-12 pb-20")}>
            <div className={cn("grid grid-cols-1 gap-20 items-start", !isOpen && "lg:grid-cols-2")}>
                {/* Left Side: Content (Hidden in Modal) */}
                {!isOpen && (
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl md:text-5xl font-serif text-black tracking-tight leading-tight">
                                Start Your <span className="text-accent">Journey</span> With Us
                            </h2>
                            <p className="text-lg text-monochrome-600 font-sans font-extralight max-w-md leading-relaxed">
                                Ready to capture your Sri Lankan story? Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </motion.div>

                        <div className="space-y-6 pt-8">
                            {[
                                { icon: Mail, label: "Email", value: "hello@kalamandila.com" },
                                { icon: Phone, label: "Phone", value: "+94 77 123 4567" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 bg-white border border-monochrome-200 flex items-center justify-center rounded-custom text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans">{item.label}</p>
                                        <p className="text-sm font-sans font-medium text-black">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonials Slider */}
                        <div className="pt-12 border-t border-monochrome-100/50">
                            <div className="relative h-[200px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTestimonial}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <div className="bg-white/50 p-6 rounded-2xl border border-monochrome-100 hover:shadow-md transition-all duration-300 group">
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                                                    <Star key={i} size={12} className="fill-accent text-accent" />
                                                ))}
                                            </div>
                                            <p className="text-sm font-serif italic text-black leading-relaxed mb-4">
                                                "{testimonials[activeTestimonial].quote}"
                                            </p>
                                            <p className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans">
                                                — {testimonials[activeTestimonial].author}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            
                           
                        </div>
                    </div>
                )}

                {/* Right Side: Form (Full width in Modal) */}
                <motion.div
                    initial={isOpen ? { opacity: 0, y: 100 } : { opacity: 0, y: 30 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : undefined}
                    whileInView={!isOpen ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    className={cn(
                        "bg-white p-8 md:p-12 shadow-2xl relative",
                        isOpen && "rounded-custom"
                    )}
                >
                    {isOpen && (
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-monochrome-400 hover:text-black transition-colors"
                        >
                            <X size={24} />
                        </button>
                    )}

                    {isOpen && (
                        <div className="mb-12 text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-serif text-black tracking-tight leading-tight">
                                Start Your <span className="text-accent">Journey</span>
                            </h2>
                            <p className="text-sm text-monochrome-600 font-sans font-extralight">
                                Capture your Sri Lankan story with Kala Mandila.
                            </p>
                        </div>
                    )}

                    {isSubmitted ? (
                        <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                            <div className="w-20 h-20 bg-accent/10 text-accent flex items-center justify-center rounded-full">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-serif">Message Sent!</h3>
                            <p className="text-monochrome-600 font-sans font-extralight">
                                Thank you for reaching out. We'll be in touch soon.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-accent underline uppercase text-xs tracking-widest font-bold"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans block ml-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-monochrome-300" size={16} />
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-4 bg-monochrome-50 border border-monochrome-100 focus:border-accent outline-none transition-colors font-sans text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans block ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-monochrome-300" size={16} />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full pl-12 pr-4 py-4 bg-monochrome-50 border border-monochrome-100 focus:border-accent outline-none transition-colors font-sans text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans block ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-monochrome-300" size={16} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+94 77 123 4567"
                                            className="w-full pl-12 pr-4 py-4 bg-monochrome-50 border border-monochrome-100 focus:border-accent outline-none transition-colors font-sans text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans block ml-1">Event Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-monochrome-300" size={16} />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-monochrome-50 border border-monochrome-100 focus:border-accent outline-none transition-colors font-sans text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-monochrome-400 font-sans block ml-1">Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-6 text-monochrome-300" size={16} />
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your event..."
                                        className="w-full pl-12 pr-4 py-4 bg-monochrome-50 border border-monochrome-100 focus:border-accent outline-none transition-colors font-sans text-sm resize-none"
                                    />
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full py-5 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-accent transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? "Sending..." : "Send Inquiry"}
                                {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    )}

                    {/* Decoration */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/5 -z-10 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 -z-10 blur-3xl" />
                </motion.div>
            </div>
        </div>
    );

    if (isOpen !== undefined) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-end justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-auto"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-h-[90vh] overflow-y-auto px-6"
                        >
                            {formContent}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        );
    }

    return (
        <section id="contact" className="section-spacing bg-monochrome-50 overflow-hidden">
            {formContent}
        </section>
    );
};

export default InquiryForm;
