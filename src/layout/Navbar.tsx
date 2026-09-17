"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronDown,
    Edit2,
    PenTool,
    Code2,
    Database,
    Cpu,
    Menu,
    X
} from "lucide-react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY && window.scrollY > 80) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out bg-primary text-white font-heading ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-[100px] flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/avarice.png"
                        alt="Avarice Tech Logo"
                        width={120}
                        height={120}
                        className="object-contain w-14 h-14 md:w-auto md:h-auto"
                        priority
                        quality={90}
                    />
                    <span className="text-[18px] md:text-[24px] font-semibold tracking-wide whitespace-nowrap">AVARICE TECH</span>
                </Link>

                <div className="hidden md:flex items-center gap-14 text-[20px] tracking-wide">

                    <Link href="/about" className="group/navlink relative h-6 overflow-hidden block">
                        <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover/navlink:-translate-y-6">
                            <span className="h-6 flex items-center">About</span>
                            <span className="h-6 flex items-center text-accent">About</span>
                        </div>
                    </Link>

                    <div className="relative group h-[100px] flex items-center">
                        <button className="relative h-6 overflow-hidden block cursor-pointer">
                            <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
                                <span className="h-6 flex items-center gap-1.5">
                                    Services
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                                </span>
                                <span className="h-6 flex items-center gap-1.5 text-accent">
                                    Services
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                                </span>
                            </div>
                        </button>

                        <div className="absolute top-[85px] left-1/2 -translate-x-1/2 pt-4 w-[1100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 font-sans">
                            <div className="bg-white rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-10 grid grid-cols-4 gap-6 border border-gray-100">

                                <Link href="/services/design" className="flex items-center gap-5 p-5 hover:bg-background text-primary rounded-2xl transition-all duration-300 group/item">
                                    <div className="p-3 bg-blue-50 text-primary rounded-xl group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                        <PenTool className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-[17px]">Design</span>
                                </Link>

                                <Link href="/services/development" className="flex items-center gap-5 p-5 hover:bg-background text-primary rounded-2xl transition-all duration-300 group/item">
                                    <div className="p-3 bg-blue-50 text-primary rounded-xl group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-[17px]">Development</span>
                                </Link>

                                <Link href="/services/data" className="flex items-center gap-5 p-5 hover:bg-background text-primary rounded-2xl transition-all duration-300 group/item">
                                    <div className="p-3 bg-blue-50 text-primary rounded-xl group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-[17px] text-center block">Data</span>
                                </Link>

                                <Link href="/services/machine-learning" className="flex items-center gap-5 p-5 hover:bg-background text-primary rounded-2xl transition-all duration-300 group/item">
                                    <div className="p-3 bg-blue-50 text-primary rounded-xl group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold text-[17px]">Machine Learning</span>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <Link href="/projects" className="group/navlink relative h-6 overflow-hidden block">
                        <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover/navlink:-translate-y-6">
                            <span className="h-6 flex items-center">Projects</span>
                            <span className="h-6 flex items-center text-accent">Projects</span>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/6285156057722?text=Hello%20Avarice%20Tech,%20I'm%20interested%20in%20discussing%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative hidden sm:flex items-center justify-between gap-6 bg-white pl-8 pr-2.5 py-2.5 rounded-full overflow-hidden cursor-pointer shadow-sm"
                    >
                    <span className="relative z-10 text-[18px] text-primary font-semibold transition-colors duration-300 group-hover:text-white">
                        Contact Us
                    </span>

                    <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-accent rounded-full transition-transform duration-300">
                        <Edit2 className="w-4 h-4 text-white" />
                    </div>

                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-accent rounded-full scale-100 group-hover:scale-[16] transition-transform duration-500 ease-in-out z-0 origin-center"></div>
                </a>

                <button 
                    className="md:hidden flex items-center justify-center text-white" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
                </div>

            </div>
            
            {/* Mobile Menu */}
            <div className={`absolute top-[100px] left-0 w-full bg-primary/95 backdrop-blur-md md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] border-b border-white/10" : "max-h-0"}`}>
                <div className="flex flex-col p-6 gap-6 text-[18px]">
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <div className="flex flex-col gap-4">
                        <span className="text-white/50 text-[14px] uppercase tracking-wider">Services</span>
                        <Link href="/services/design" className="pl-4" onClick={() => setIsMobileMenuOpen(false)}>Design</Link>
                        <Link href="/services/development" className="pl-4" onClick={() => setIsMobileMenuOpen(false)}>Development</Link>
                        <Link href="/services/data" className="pl-4" onClick={() => setIsMobileMenuOpen(false)}>Data</Link>
                        <Link href="/services/machine-learning" className="pl-4" onClick={() => setIsMobileMenuOpen(false)}>Machine Learning</Link>
                    </div>
                    <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <a href="https://wa.me/6285156057722?text=Hello%20Avarice%20Tech,%20I'm%20interested%20in%20discussing%20a%20project" className="text-accent mt-2 font-semibold">Contact Us</a>
                </div>
            </div>
        </nav>
    );
}