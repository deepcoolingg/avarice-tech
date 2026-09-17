"use client";

import Link from "next/link";
import Image from "next/image";
import {Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-6 overflow-hidden relative border-t border-white/5 font-sans">
            <div className="max-w-375 mx-auto px-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center -ml-4 md:ml-0">
                            <Image
                                src="/avarice.png"
                                alt="Avarice Tech Logo"
                                width={150}
                                height={150}
                                loading="lazy"
                                className="object-contain w-20 h-20 md:w-auto md:h-auto"
                            />
                            <span className="font-heading font-bold text-[22px] md:text-[30px] tracking-wide whitespace-nowrap">AVARICE TECH</span>
                        </div>

                        <div className="text-white/60 text-[16px] space-y-4 leading-relaxed max-w-sm pt-2">
                            <p>Jakarta, Indonesia</p>

                            <div className="flex items-center gap-3 group">
                                <Mail size={18} className="text-white/40 group-hover:text-accent transition-colors" />
                                <a href="mailto:contact.avaricetech@gmail.com" className="text-white/80 hover:text-accent transition-colors">
                                    contact.avaricetech@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <Phone size={18} className="text-white/40 group-hover:text-accent transition-colors" />
                                <a
                                    href="https://wa.me/6285156057722"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-accent transition-colors"
                                >
                                    +62 851-5605-7722 (WhatsApp)
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">                        
                        <div className="md:col-start-2">
                            <h4 className="text-[16px] font-heading tracking-[0.2em] text-white/40 mb-6">Menu</h4>
                            <ul className="space-y-4 text-[20px] text-white/70">
                                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
                                <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[16px] font-heading tracking-[0.2em] text-white/40 mb-6">Services</h4>
                            <ul className="space-y-4 text-[20px] text-white/70">
                                <li><Link href="/services/design" className="hover:text-accent transition-colors">Design</Link></li>
                                <li><Link href="/services/development" className="hover:text-accent transition-colors">Development</Link></li>
                                <li><Link href="/services/data" className="hover:text-accent transition-colors">Data</Link></li>
                                <li><Link href="/services/machine-learning" className="hover:text-accent transition-colors">Machine Learning</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <p className="text-[14px] text-white/40 max-w-md leading-relaxed">
                        From intelligence architectures to full stack execution. We engineer digital interfaces that scale.
                    </p>
                    <div className="flex gap-8 text-[12px] tracking-wider text-white/60">
                        <p>© 2026 Avarice Tech All rights reserved</p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden select-none pointer-events-none mt-10 -mb-16">
                    <h1 className="text-[12vw] sm:text-[10vw] font-heading font-extrabold text-white/3 leading-none tracking-tighter text-center uppercase whitespace-nowrap">
                        AVARICE TECH
                    </h1>
                </div>

            </div>
        </footer>
    );
}