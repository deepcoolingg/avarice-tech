"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

// Debounce helper — cegah resize handler nembak terus-menerus
function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  return useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
}

export default function BussinessProcess() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);
  const debouncedCheckMobile = useDebouncedCallback(checkMobile, 150);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", debouncedCheckMobile);
    return () => window.removeEventListener("resize", debouncedCheckMobile);
  }, [checkMobile, debouncedCheckMobile]);

  const positions = isMobile ? mobilePositions : defaultPositions;

  // Toggle bisa dipicu hover ATAU klik/keyboard — jadi aksesibel untuk
  // pengguna keyboard, touch, dan mouse presisi rendah.
  const toggleOpen = () => setOpen((prev) => !prev);
  const handleKeyToggle = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-32 text-white md:px-16 lg:px-24"
      aria-label="Business process workflow"
    >
      <div className="pointer-events-none absolute inset-0 bg-primary" />

      {!isMobile && (
        <motion.div
          animate={{
            scale: open ? 1.2 : 0.8,
            opacity: open ? 0.1 : 0.2,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-white/5 blur-[130px]"
        />
      )}

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
            Business Process
          </p>

          <h2 className="text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-8xl">
            Scroll Into The <br />
            <span className="text-blue-900 italic font-medium">
              Workflow.
            </span>
          </h2>
        </motion.div>

        {isMobile ? (
          <ol className="mx-auto flex w-full max-w-md flex-col gap-6 relative z-10 list-none">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.no}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative w-full"
                >
                  {/* Garis timeline vertikal penghubung antar step di mobile */}
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[38px] top-[72px] h-[calc(100%+12px)] w-px bg-gradient-to-b from-white/20 to-transparent"
                    />
                  )}
                  <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl shadow-lg transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:bg-white/[0.05]">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-bold text-white/35" aria-hidden="true">
                        {step.no}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/10">
                        <Icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold uppercase text-white">
                      <span className="sr-only">Step {step.no}: </span>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/55">
                      {step.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        ) : (
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative mx-auto h-[620px] max-w-[1200px]"
          >
            {/* Trigger yang bisa diakses keyboard/klik, bukan cuma hover */}
            <button
              type="button"
              onClick={toggleOpen}
              onKeyDown={handleKeyToggle}
              onFocus={() => setOpen(true)}
              aria-expanded={open}
              aria-label={open ? "Sembunyikan alur proses" : "Tampilkan alur proses"}
              className="absolute left-1/2 top-1/2 z-30 h-44 w-44 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            />

            <motion.div
              animate={{
                scale: open ? 0.75 : 1,
                opacity: open ? 0.25 : 1,
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 shadow-[0_0_60px_rgba(255,255,255,0.15)]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
            />

            {/* Garis penghubung SVG dari pusat ke tiap card saat terbuka */}
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 overflow-visible"
              width="1"
              height="1"
              aria-hidden="true"
            >
              {steps.map((step, index) => (
                <motion.line
                  key={step.no}
                  x1={0}
                  y1={0}
                  animate={{
                    x2: open ? defaultPositions[index].x : 0,
                    y2: open ? defaultPositions[index].y : 0,
                    opacity: open ? 0.25 : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth={activeIndex === index ? 2 : 1}
                  strokeDasharray="4 4"
                />
              ))}
            </svg>

            <motion.p
              animate={{ opacity: open ? 0 : 1, y: open ? 20 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute left-1/2 top-[62%] z-20 -translate-x-1/2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/45"
            >
              Reveal The Process
            </motion.p>

            <ol className="list-none">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.li
                    key={step.no}
                    initial={false}
                    animate={{
                      x: open ? defaultPositions[index].x : 0,
                      y: open ? defaultPositions[index].y : 0,
                      scale: open ? (isActive ? 1.06 : 1) : 0.35,
                      opacity: open ? 1 : 0,
                      rotate: open ? 0 : -8,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(index)}
                    onBlur={() => setActiveIndex(null)}
                    tabIndex={open ? 0 : -1}
                    className="absolute left-1/2 top-1/2 z-10 w-[260px] -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <div
                      className={`rounded-[32px] border p-6 backdrop-blur-xl shadow-lg transition-all duration-700 ease-out hover:-translate-y-2 ${
                        isActive
                          ? "border-white/30 bg-white/[0.06] shadow-xl -translate-y-2"
                          : "border-white/10 bg-white/[0.035]"
                      }`}
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <span className="font-bold text-white/35" aria-hidden="true">
                          {step.no}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/10">
                          <Icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <h3 className="mb-3 text-xl font-bold uppercase text-white">
                        <span className="sr-only">Step {step.no}: </span>
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-white/55">
                        {step.desc}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}