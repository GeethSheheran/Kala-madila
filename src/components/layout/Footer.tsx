import React from "react";

const Footer = () => {
    return (
        <footer className="bg-monochrome-950 text-white pt-32 pb-16 px-6 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20 relative z-10">
                <div className="space-y-10 max-w-sm">
                    <h2 className="text-4xl font-serif tracking-tighter font-black">
                        KALA<span className="text-accent italic ml-1">MANDILA</span>
                    </h2>
                    <p className="text-lg text-monochrome-400 font-sans leading-relaxed font-extralight">
                        Preserving and celebrating the timeless beauty of Sri Lankan wedding traditions for the discerning modern traveler.
                    </p>
                    <div className="flex gap-6">
                        {/* Social placeholders with premium style */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-10 h-10 border border-white/10 rounded-custom flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                                <div className="w-1.5 h-1.5 bg-current rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
                    <div className="space-y-8">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Discover</h3>
                        <ul className="space-y-4 text-sm text-monochrome-400 font-sans font-light">
                            <li><a href="#about" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                            <li><a href="#experience" className="hover:text-white transition-colors duration-300">The Experience</a></li>
                            <li><a href="#story" className="hover:text-white transition-colors duration-300">Cultural Heritage</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Company</h3>
                        <ul className="space-y-4 text-sm text-monochrome-400 font-sans font-light">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent">Connect</h3>
                        <ul className="space-y-4 text-sm text-monochrome-400 font-sans font-light">
                            <li>Colombo, Sri Lanka</li>
                            <li>hello@kalamandila.com</li>
                            <li>+94 11 234 5678</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] text-monochrome-600 font-black relative z-10">
                <p>© 2026 KALA MANDILA. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                    <p className="hover:text-accent transition-colors cursor-pointer">INSTAGRAM</p>
                    <p className="hover:text-accent transition-colors cursor-pointer">FACEBOOK</p>
                    <p className="hover:text-accent transition-colors cursor-pointer">VIMEO</p>
                </div>
            </div>

            {/* Abstract background elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-custom blur-[150px] -mr-64 -mb-64 pointer-events-none" />
        </footer>
    );
};

export default Footer;
