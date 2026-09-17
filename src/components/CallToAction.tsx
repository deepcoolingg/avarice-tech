"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                >
                    <source src="/dna.mp4" type="video/mp4" />
                </video>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-heading text-[42px] sm:text-[52px] md:text-[62px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white mb-6">
                        Want to learn about<br />
                        new product?
                    </h2>

                    <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[500px] mx-auto mb-10">
                        Register to receive email alerts for DNA<br />
                        Consulting press releases
                    </p>

                    {/* Contact Us Button */}
                    <a
                        href="https://wa.me/6285156057722?text=Hello%20Avarice%20Tech,%20I'm%20interested%20in%20discussing%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-between gap-6 bg-white pl-8 pr-2.5 py-2.5 rounded-full overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <span className="relative z-10 text-[16px] md:text-[18px] text-primary font-bold uppercase tracking-wider transition-colors duration-300 group-hover/btn:text-white">
                            Contact Us
                        </span>

                        <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-accent rounded-full transition-transform duration-300">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>

                        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-accent rounded-full scale-100 group-hover/btn:scale-[16] transition-transform duration-500 ease-in-out z-0 origin-center"></div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}