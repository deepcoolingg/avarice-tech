"use client";
import Image from "next/image";

const TECH_LOGOS = [
    { src: "/logo/next.png" },
    { src: "/logo/react.png" },
    { src: "/logo/tailwind.png" },
    { src: "/logo/go.png" },
    { src: "/logo/node.png" },
    { src: "/logo/express.png" },
    { src: "/logo/postgre.png" },
    { src: "/logo/mongo.png" },
    { src: "/logo/mysql.png" },
    { src: "/logo/python.png" },
    { src: "/logo/django.png" },
    { src: "/logo/java.png" },
    { src: "/logo/c++.png" },
    { src: "/logo/c.png" },
    { src: "/logo/flutter.png" },
    { src: "/logo/kotlin.png" },
    { src: "/logo/laravel.png" },
    { src: "/logo/pandas.png" },
    { src: "/logo/numpy.png" },
    { src: "/logo/jupyter.png" },
    { src: "/logo/powerbi.png" },
    { src: "/logo/n8n.png" },
];

export default function TechMarquee() {
    return (
        <section className="bg-primary py-12 overflow-hidden relative border-y border-white/5">

            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16 px-8">
                        {TECH_LOGOS.map((tech, index) => (
                            <div key={`${i}-${index}`} className="flex items-center gap-4 group cursor-pointer">

                                <div className="relative w-10 h-10 md:w-12 md:h-12 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                                    <Image
                                        src={tech.src}
                                        alt="logo"
                                        fill
                                        sizes="(max-width: 768px) 40px, 48px"
                                        className="object-contain"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </section>
    );
}