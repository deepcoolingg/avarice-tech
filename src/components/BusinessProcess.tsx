"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Map, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Discovery",
    desc: "Understand goals, users, and business needs.",
    icon: Search,
  },
  {
    no: "02",
    title: "Strategy",
    desc: "Create roadmap, structure, and digital workflow.",
    icon: Map,
  },
  {
    no: "03",
    title: "Design",
    desc: "Design premium and user focused interfaces.",
    icon: Palette,
  },
  {
    no: "04",
    title: "Development",
    desc: "Build responsive, scalable, and fast websites.",
    icon: Code2,
  },
  {
    no: "05",
    title: "Launch",
    desc: "Deploy, optimize, and improve continuously.",
    icon: Rocket,
  },
];

const defaultPositions = [
  { x: -430, y: -160 },
  { x: 0, y: -230 },
  { x: 430, y: -160 },
  { x: -230, y: 190 },
  { x: 230, y: 190 },
];

const mobilePositions = [
  { x: 0, y: -260 },
  { x: 0, y: -130 },
  { x: 0, y: 0 },
  { x: 0, y: 130 },
  { x: 0, y: 260 },
];

export default function BussinessProcess() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const positions = isMobile ? mobilePositions : defaultPositions;

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-32 text-white md:px-16 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-primary" />

      {!isMobile && (
        <motion.div
          animate={{
            scale: open ? 1.2 : 0.8,
            opacity: open ? 0.25 : 0.45,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-[#2140ff]/20 blur-[130px]"
        />
      )}

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-accent drop-shadow-[0_0_18px_rgba(33,64,255,0.9)]">
            Business Process
          </p>

          <h2 className="text-5xl font-bold leading-[0.95] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] md:text-7xl lg:text-8xl">
            Scroll Into The <br />
            <span className="text-accent italic font-medium">
              Workflow.
            </span>
          </h2>
        </motion.div>

        {isMobile ? (
          <div className="mx-auto flex w-full max-w-md flex-col gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-full"
                >
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl shadow-[0_0_45px_rgba(33,64,255,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2140ff]/70 hover:shadow-[0_0_60px_rgba(33,64,255,0.35)]">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-bold text-white/35">{step.no}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2140ff]/40 bg-[#2140ff]/10">
                        <Icon className="h-6 w-6 text-[#2140ff] drop-shadow-[0_0_12px_rgba(33,64,255,1)]" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold uppercase text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative mx-auto h-[620px] max-w-[1200px]"
          >
            <motion.div
              animate={{
                scale: open ? 0.75 : 1,
                opacity: open ? 0.25 : 1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2140ff]/50 bg-accent shadow-[0_0_90px_rgba(33,64,255,0.9)]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2140ff]/35"
            />

            <motion.p
              animate={{ opacity: open ? 0 : 1, y: open ? 20 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-[62%] z-20 -translate-x-1/2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/45"
            >
             Reveal The Process
            </motion.p>

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.no}
                  initial={false}
                  animate={{
                    x: open ? defaultPositions[index].x : 0,
                    y: open ? defaultPositions[index].y : 0,
                    scale: open ? 1 : 0.35,
                    opacity: open ? 1 : 0,
                    rotate: open ? 0 : -8,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-1/2 z-10 w-[260px] -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl shadow-[0_0_45px_rgba(33,64,255,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2140ff]/70 hover:shadow-[0_0_60px_rgba(33,64,255,0.35)]">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-bold text-white/35">{step.no}</span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2140ff]/40 bg-[#2140ff]/10">
                        <Icon className="h-6 w-6 text-[#2140ff] drop-shadow-[0_0_12px_rgba(33,64,255,1)]" />
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold uppercase text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/55">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}