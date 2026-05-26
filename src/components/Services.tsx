"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Code2, Database, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES_DATA = [
  {
    id: "01",
    title: "DESIGN",
    description:
      "We create modern and user-focused digital experiences through UI/UX, branding, and visual design that help businesses stand out.",
    media: "/services/design.jpeg", 
    path: "/services/design", 
  },
  {
    id: "02",
    title: "DEVELOPMENT",
    description:
      "Building responsive, scalable, and high-performance websites tailored to your business goals and user needs.",
    media: "/services/development.jpeg",
    path: "/services/development", 
  },
  {
    id: "03",
    title: "DATA",
    description:
      "Transforming raw data into meaningful insights through dashboards, analytics, and data visualization solutions.",
    media: "/services/data.jpeg",
    path: "/services/data", 
  },
  {
    id: "04",
    title: "AUTOMATION",
    description:
      "Helping businesses automate repetitive workflows and improve efficiency using smart digital automation systems.",
    media: "/services/automation.jpeg",
    path: "/services/machine-learning", 
  },
];

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#020617] relative border-y border-white/5 pb-20">
      
      <div className="px-6 md:px-16 pt-32 pb-16 max-w-[1600px] mx-auto">
        <h2 className="text-white text-[40px] sm:text-[50px] md:text-[80px] font-black leading-[1.1] tracking-tighter">
          What We Can Do <br className="hidden md:block" /> For You
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col md:flex-row relative items-start">
        
        <div className="w-full md:w-1/2 flex flex-col pb-[30vh]">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
              className="min-h-[60vh] flex flex-col justify-center pr-0 md:pr-16"
            >
              <motion.div
                animate={{ opacity: activeIndex === index ? 1 : 0.2 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 items-start"
              >
                <div className="flex items-center gap-4 text-accent">
                  <span className="font-bold tracking-widest text-xl">
                    {service.id}
                  </span>
                </div>
                <h3 className="text-[32px] sm:text-4xl md:text-6xl font-black tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  {service.description}
                </p>

                <div className="w-full aspect-[4/3] relative rounded-3xl overflow-hidden mt-6 md:hidden">
                  <Image
                    src={service.media}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <Link
                  href={service.path}
                  style={{ pointerEvents: activeIndex === index ? "auto" : "none" }}
                  className="mt-6 w-fit group relative flex items-center justify-between gap-6 bg-white pl-8 pr-2.5 py-2.5 rounded-full overflow-hidden cursor-pointer shadow-sm"
                >
                  <span className="relative z-10 text-[18px] text-primary font-bold transition-colors duration-300 group-hover:text-white">
                    Explore
                  </span>
                  <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-accent rounded-full transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-accent rounded-full scale-100 group-hover:scale-[16] transition-transform duration-500 ease-in-out z-0 origin-center"></div>
                </Link>

              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex w-1/2 sticky top-0 h-screen items-center justify-center">
          <div className="w-full aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden bg-[#060d24] border border-white/10 relative shadow-[0_0_80px_rgba(59,130,246,0.1)]">
            
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={service.media}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
            
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(2,6,23,0.8)] pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}