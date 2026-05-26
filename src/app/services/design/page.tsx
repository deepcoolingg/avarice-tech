"use client";

import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Plus,
} from "lucide-react";

import Link from "next/link";

export default function DesignPage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden font-sans">
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-16 pt-48 pb-32 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7"
          >
            <span className="uppercase tracking-[0.3em] text-sm text-white/60 mb-6 block font-bold">
              Creative Digital Services
            </span>

            <h1 className="text-5xl md:text-[80px] lg:text-[100px] font-black leading-[1] tracking-tight mb-8 break-words">
              Creative,
              <br />
              <span className="text-white/80">
                Engineered.
              </span>
            </h1>

            <p className="text-2xl text-white/90 font-medium mb-6 max-w-2xl">
              Modern design solutions crafted for
              brands, businesses, and digital
              experiences.
            </p>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl">
              We create visual systems that combine
              aesthetics, usability, motion, and
              technology to help businesses stand
              out in the digital era.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full aspect-[1/1] rounded-[30px] overflow-hidden relative border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-[#060d24]">
              <Image
                src="https://i.pinimg.com/originals/5f/7a/9f/5f7a9f087de59533bcebf4650a28b76d.gif"
                alt="Creative Design"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(2,6,23,0.9)] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 py-32 bg-white/[0.02] border-y border-white/5 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 break-words">
              Core Services
            </h2>

            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Creative tools and modern workflows
              designed to build impactful digital
              experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                title: "Graphic Design",
                desc: "Create impactful visual identities for digital and print media using industry standard creative tools.",
                image:
                  "https://i.pinimg.com/originals/d6/e1/27/d6e12796914cde798323225515bd7868.gif",
              },

              {
                title: "UI/UX Design",
                desc: "Designing seamless website and mobile experiences focused on usability and interaction.",
                image:
                  "https://i.pinimg.com/originals/13/64/f3/1364f301d7181e2acc516f702c4ce274.gif",
              },

              {
                title: "3D Design & Motion",
                desc: "Building immersive visuals, animation, and modern 3D experiences for digital products.",
                image:
                  "https://i.pinimg.com/originals/bc/1c/4e/bc1c4eb282f3f00e950ab1b9945bd41e.gif",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.2,
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                {/* IMAGE */}
                <div className="w-full aspect-square rounded-[32px] overflow-hidden border border-white/10 relative bg-[#060d24] group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-1000"
                  />

                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-6 md:px-16 py-32 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-6 break-words">Creative Workflow</h2>
            <p className="text-xl text-white/60 font-medium max-w-md">
              From concept to execution, every
              project is designed with strategy,
              usability, and aesthetics in mind.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              {
                title: "Research & Strategy",
                desc: "Understanding user behavior, business goals, and market trends before designing.",
              },

              {
                title: "Design & Prototype",
                desc: "Crafting interfaces, visual identities, and interactive prototypes for modern experiences.",
              },

              {
                title: "Execution & Delivery",
                desc: "Transforming concepts into scalable digital products ready for production.",
              },
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

      {/* PROCESS */}
      <section className="px-6 md:px-16 py-32 bg-gradient-to-b from-[#020617] via-[#060d24] to-[#020617] border-y border-white/5 relative">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="flex items-center gap-5 mb-24 md:mb-32"
          >
            <h2 className="uppercase tracking-[0.2em] text-lg md:text-xl font-medium text-white">
              Our Process
            </h2>
          </motion.div>

          <div className="flex flex-col gap-20 md:gap-32">
            {[
              {
                num: "01",
                title: "Ideation",
                desc: "Every project begins with strong concepts, visual direction, and strategic planning.",
              },

              {
                num: "02",
                title: "Design Execution",
                desc: "We craft immersive visuals and digital experiences using modern creative tools.",
              },

              {
                num: "03",
                title: "Optimization",
                desc: "Refining every detail to ensure performance, scalability, and usability.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: idx * 0.15,
                  }}
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
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: idx * 0.15 + 0.2,
                  }}
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

      {/* CTA */}
      <section className="px-6 md:px-16 py-40 max-w-[1200px] mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 blur-[200px] rounded-full pointer-events-none" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.3em] text-sm text-white/60 mb-8 block font-semibold">
            Lets Collaborate
          </span>

          <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-10 break-words">
            Design Beyond
            <br />
            Expectations.
          </h2>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-16 max-w-4xl mx-auto">
            We combine creativity, motion,
            interaction, and technology to build
            modern digital experiences that leave a
            lasting impression.
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