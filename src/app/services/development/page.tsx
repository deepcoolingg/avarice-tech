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
              Development & Engineering
            </span>
            <h1 className="text-5xl md:text-[80px] lg:text-[100px] font-black leading-[1] tracking-tight mb-8 break-words">
              Infrastructure, <br />
              <span className=" text-white/80">Engineered.</span>
            </h1>
            <p className="text-2xl text-white/90 font-medium mb-6 max-w-2xl">
              We don’t build websites. We engineer scalable digital fortresses.
            </p>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl">
              A beautiful interface means nothing if the system collapses under traffic. We build high performance, full stack applications designed for brutal scalability, ironclad security, and lightning fast execution.
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
                src="/services/dev/device.jpg"
                alt="Tech Device"
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
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Architecting high performance digital ecosystems to dictate high stakes business execution.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                title: "Advanced Frontend Interfaces",
                desc: "Zero-latency experiences. We don't just write HTML. We engineer hyper optimized, interactive user interfaces that deliver instant load times and brutal aesthetic precision.",
                videoSrc: "/services/dev/flower.mp4"
              },
              {
                title: "Industrial Grade Backends",
                desc: "Built for heavy lifting. We develop lightning fast microservices and secure APIs engineered to handle massive traffic spikes and complex operations without breaking a sweat.",
                videoSrc: "/services/dev/engine.mp4"
              },
              {
                title: "Ironclad Architecture",
                desc: "Scalability is not an afterthought. We design robust relational database architectures and seamless full stack integrations that guarantee absolute data integrity and zero downtime.",
                videoSrc: "/services/dev/cube.mp4"
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
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 break-words">Where We Strike</h2>
            <p className="text-xl text-white/60 font-medium max-w-md">
              High-stakes execution. Because a lagging system is a lost client.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              {
                title: "Enterprise Web Applications",
                desc: "Developing complex, data heavy platforms and internal management portals that require uncompromised speed, security, and stability."
              },
              {
                title: "High Traffic Transaction Engines",
                desc: "Building scalable digital infrastructure designed to process massive user volumes and transactions during peak market momentum without crashing."
              },
              {
                title: "API & Microservices Consolidation",
                desc: "Replacing bloated, legacy spaghetti code with streamlined, high speed microservices that communicate flawlessly across your entire business ecosystem."
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
                title: "Architect & Blueprint",
                desc: "We map out the entire system infrastructure and database schema before writing a single line of code. No guesswork. No structural flaws.",
              },
              {
                num: "02",
                title: "Engineer & Optimize",
                desc: "We write clean, aggressive code. Every single component is rigorously tested for latency, security vulnerabilities, and processing efficiency.",
              },
              {
                num: "03",
                title: "Deploy & Scale",
                desc: "We launch your system into robust production environments built for scale, ensuring flawless performance under maximum stress.",
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
            Architecture <br /> Over Aesthetic.
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-16 max-w-4xl mx-auto">
            Most agencies hide bloated code behind flashy designs. We engineer pure, high performance architecture. No shortcuts, just brutal execution.
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