"use client";

import Link from "next/link";
import { ArrowUpRight, Stars } from "lucide-react";

export default function Hero() {
    return (
        < section className="min-h-screen bg-primary pt-[120px] pb-20 px-6" >
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                <div className="lg:col-span-8 bg-primary rounded-[48px] p-10 lg:p-16 flex flex-col justify-between min-h-[500px] lg:min-h-[650px] relative overflow-hidden group shadow-2xl">

                    <div className="relative z-10">
                        <h1 className="text-white font-heading text-[36px] sm:text-[45px] md:text-[60px] lg:text-[75px] font-bold leading-[1.1] max-w-[800px]">
                            Driven by an Insatiable Hunger for <br />
                            <span className="text-accent italic font-medium">Brutally Efficient Code.</span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 relative z-10">

                        <div className="flex items-start gap-4 max-w-[300px]">
                            <p className="text-white/80 text-[20px] leading-relaxed font-sans">
                                We bridge raw data with seamless interactions, delivering speed, stability, and scale.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/6285156057722?text=Hello%20Avarice%20Tech,%20I'm%20interested%20in%20discussing%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative flex w-fit self-start items-center justify-between gap-4 md:gap-8 bg-[#ffffff] pl-5 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full overflow-hidden cursor-pointer shadow-lg" >
                            <div className="relative z-10 h-6 overflow-hidden">
                                <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover/btn:-translate-y-6">
                                    <span className="h-6 flex items-center text-primary font-bold text-[13px] md:text-[15px] uppercase tracking-wider">
                                        Book a Call
                                    </span>
                                    <span className="h-6 flex items-center text-white font-bold text-[13px] md:text-[15px] uppercase tracking-wider">
                                        Lets Talk
                                    </span>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center justify-center w-[36px] h-[36px] md:w-[45px] md:h-[45px] bg-accent rounded-full transition-transform duration-300">
                                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>

                            <div className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 w-[36px] h-[36px] md:w-[45px] md:h-[45px] bg-accent rounded-full scale-100 group-hover/btn:scale-[16] transition-transform duration-500 ease-in-out z-0 origin-center"></div>
                        </a>
                    </div>

                    <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
                </div>

                <div className="lg:col-span-4 bg-[#1D5894] rounded-[48px] overflow-hidden relative shadow-2xl min-h-[400px] lg:min-h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/showcase.mp4" type="video/mp4" />

                        Browser Anda tidak mendukung tag video.
                    </video>

                </div>

            </div>
        </section >
    );
}