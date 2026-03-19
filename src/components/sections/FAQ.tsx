"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 6-12 months in advance for weddings, especially during peak seasons (December-April). For smaller sessions or elopements, 3-4 months is usually sufficient."
    },
    {
        question: "Do you travel for destination weddings?",
        answer: "Absolutely! While we are based in Sri Lanka, we love capturing stories around the world. Travel and accommodation fees apply for locations outside of our primary service areas."
    },
    {
        question: "What is included in the photography packages?",
        answer: "Our standard packages include high-resolution edited digital images, an online gallery for sharing, and a pre-wedding consultation. Premium packages also include physical albums and cinematic films."
    },
    {
        question: "How long until I receive my photos?",
        answer: "You'll receive a 'sneak peek' within 1 week of your event. The full gallery is typically delivered within 6-8 weeks, depending on the season and the complexity of the post-production."
    },
    {
        question: "Can we customize our package?",
        answer: "Yes, we believe every story is unique. We offer a base package that can be tailored with add-ons such as extra hours, additional photographers, or custom-designed heirlooms."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
    return (
        <div className="border-b border-monochrome-100 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <h3 className={cn(
                    "text-xl md:text-2xl font-serif transition-colors duration-500",
                    isOpen ? "text-accent" : "text-black group-hover:text-accent"
                )}>
                    {question}
                </h3>
                <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border border-monochrome-200 flex items-center justify-center transition-all duration-500",
                    isOpen ? "bg-accent border-accent text-white rotate-180" : "text-monochrome-400 group-hover:border-accent group-hover:text-accent"
                )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-base md:text-lg text-monochrome-600 font-sans font-extralight leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 md:py-24 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight">
                        Common <span className="italic text-accent">Questions</span>
                    </h2>
                    <p className="text-monochrome-600 font-sans font-extralight uppercase tracking-widest text-[10px]">
                        Everything you need to know before booking
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                >
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </motion.div>

                {/* Bottom CTA for more questions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    {/* <p className="text-monochrome-400 font-sans text-sm italic">
                        Still have questions? <a href="#contact" className="text-accent underline hover:text-secondary-foreground transition-colors">Reach out to us</a> directly.
                    </p> */}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
