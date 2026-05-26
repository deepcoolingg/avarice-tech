"use client";

import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

export default function MachineLearningPage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden font-sans">
      <Navbar />

      <section className="px-6 md:px-16 pt-48 pb-32 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="uppercase tracking-[0.3em] text-sm text-white/60 mb-6 block font-bold">
              Data Architecture
            </span>
            <h1 className="text-5xl md:text-[80px] lg:text-[100px] font-black leading-[1] tracking-tight mb-8 break-words">
              Clarity, <br />
              <span className=" text-white/80">Engineered.</span>
            </h1>
            <p className="text-2xl text-white/90 font-medium mb-6 max-w-2xl">
              We transform raw numbers into undeniable business leverage.
            </p>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl">
              Data is a liability if you can not read it. We build enterprise grade data architectures that extract, warehouse, and visualize your most critical metrics, turning operational chaos into absolute strategic clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full aspect-[1/1] rounded-[30px] overflow-hidden relative border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-[#060d24]">
              <Image 
                src="/services/data/data.jpg" 
                alt="Data" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(2,6,23,0.9)] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 bg-white/[0.02] border-y border-white/5 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 break-words">Core Capabilities</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Architecting scalable data pipelines and visual intelligence to dictate high stakes business execution.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                title: "Business Intelligence Dashboards",
                desc: "Stop staring at static spreadsheets. We engineer highly intuitive, real time visual dashboards that allow your stakeholders to monitor KPIs, track performance, and make split second decisions with absolute confidence.",
                videoSrc: "/services/data/bi.mp4" 
              },
              {
                title: "Data Warehousing & Architecture",
                desc: "Centralize your truth. We build ironclad relational databases and automated ETL (Extract, Transform, Load) pipelines to consolidate your scattered data sources into one secure, high speed fortress.",
                videoSrc: "/services/data/warehouse.mp4" 
              },
              {
                title: "Advanced Data Analytics",
                desc: "Decode the momentum. Raw data only tells you what happened in the past. We engineer analytical models that decode the 'why' and dictate the 'next'. By uncovering hidden patterns, operational bottlenecks, and momentum shifts, we transform your historical database into an aggressive blueprint for strategic dominance.",
                videoSrc: "/services/data/layer.mp4" 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                <div className="w-full aspect-square rounded-[32px] overflow-hidden border border-white/10 relative bg-[#060d24]">
                  <video 
                    src={item.videoSrc} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase tracking-wide">{item.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 break-words">Where We Do</h2>
            <p className="text-xl text-white/60 font-medium max-w-md">
              Strategic visibility. Because raw numbers are a liability until they dictate your next move.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              {
                title: "Financial & Market Momentum",
                desc: "Real-time tracking of revenue streams, burn rates, and profit margins to optimize financial agility."
              },
              {
                title: "User Behavior Analytics",
                desc: "Decrypting how users interact with your digital products to engineer higher retention and conversion rates."
              },
              {
                title: "Operational Auditing",
                desc: "Visualizing internal workflows and supply chain metrics to ruthlessly eliminate inefficiencies."
              }
            ].map((item, idx, arr) => (
              <div key={idx} className="flex flex-col items-center lg:items-start gap-4">
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>

                {idx < arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center w-full lg:justify-start my-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-white text-[#020617] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <Plus className="w-6 h-6 stroke-[3]" />
                    </div>
                  </motion.div>
                )}

              </div>
            ))}
          </div>
          
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 bg-gradient-to-b from-[#020617] via-[#060d24] to-[#020617] border-y border-white/5 relative">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex items-center gap-5 mb-24 md:mb-32"
          >
            <h2 className="uppercase tracking-[0.2em] text-lg md:text-xl font-medium text-white">
              The Methodology
            </h2>
          </motion.div>

          <div className="flex flex-col gap-20 md:gap-32">
            {[
              {
                num: "01",
                title: "Extract & Centralize",
                desc: "We don't guess. We start by hunting down your fragmented data across multiple platforms and funneling it into a single, highly optimized central database.",
              },
              {
                num: "02",
                title: "Cleanse & Structure",
                desc: "Brutal data hygiene. We execute rigorous cleansing protocols to eliminate duplicates, resolve formatting errors, and ensure the data is mathematically pure.",
              },
              {
                num: "03",
                title: "Visualize & Act",
                desc: "We translate the structured data into aggressive, industrial grade interfaces. No vanity metrics. Just the exact numbers you need to dominate.",
              },
            ].map((step, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="lg:col-span-5 flex items-baseline gap-4 md:gap-6"
                >
                  <span className="text-xl md:text-2xl font-medium text-white/50 shrink-0">
                    {step.num}
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-6xl uppercase font-bold tracking-tight text-white leading-none break-words">
                    {step.title}
                  </h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7"
                >
                  <p className="text-xl md:text-3xl text-white/80 leading-[1.6]">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-40 max-w-[1200px] mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 blur-[200px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.3em] text-sm text-white/60 mb-8 block font-semibold">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-10 break-words">
            Numbers. <br/> Do not Lie.
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-16 max-w-4xl mx-auto">
            A dashboard is useless if the data is flawed. We engineer pipelines from ground zero. Absolute accuracy. Zero compromise. Just the brutal truth.
          </p>

          <a
            href="https://wa.me/6285156057722?text=Hello%20Avarice%20Tech,%20I'm%20interested%20in%20discussing%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
            className="group relative flex items-center justify-between gap-6 bg-white pl-8 pr-2.5 py-2.5 rounded-full overflow-hidden cursor-pointer shadow-sm"
          >
            <span className="relative z-10 text-[18px] text-[#020617] font-bold transition-colors duration-300 group-hover:text-white">
              Hire Us!
            </span>
            <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-accent rounded-full transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-accent rounded-full scale-100 group-hover:scale-[16] transition-transform duration-500 ease-in-out z-0 origin-center"></div>
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}