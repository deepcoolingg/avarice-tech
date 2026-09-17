"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100,
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const particleColors = [
      "rgba(255, 255, 255, 0.8)", 
      "rgba(96, 165, 250, 0.8)",  
      "rgba(59, 130, 246, 0.8)",  
      "rgba(148, 163, 184, 0.6)", 
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        if (mouse.x != null && mouse.y != null) {
           const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;

            this.x -= forceDirectionX * force * 3;
            this.y -= forceDirectionY * force * 3;
          }
        }

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas!.width * canvas!.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-[#020617] cursor-default"
    />
  );
};

export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white min-h-screen overflow-hidden font-sans">
      <Navbar />

      <section className="px-6 md:px-16 pt-48 pb-20 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} 
            className="lg:col-span-7"
          >
            <h1 className="text-5xl md:text-[100px] font-black leading-[1] tracking-tight flex flex-col break-words">
              <span>Driven by</span>
              <span className="italic text-accent font-semibold pt-2">
                Perfection.
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} 
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="uppercase tracking-[0.3em] text-sm text-white/35 mb-6 block font-semibold">
              The Origin
            </span>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              Avarice Tech was born out of a shared frustration with bloated, slow-moving digital agencies. We are a concentrated tech collective focused strictly on what matters: writing clean code, designing immersive spaces, and making data work for you.
            </p>
          </motion.div>

        </div>
      </section>
      
      <section className="px-6 md:px-16 pb-32 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full h-[50vh] md:h-[80vh] rounded-[40px] overflow-hidden relative shadow-[0_0_80px_rgba(59,130,246,0.1)] border border-white/5 bg-[#020617]"
        >
          <div className="absolute inset-0 bg-[#020617]/20 z-10 pointer-events-none" />
          <video 
            src="/core.MP4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="none"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.3em] text-sm text-white/35 mb-8 block font-semibold">
              The Vision
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.3] md:leading-[1.2] italic text-white/90">
                {'"To forge enterprise grade digital systems where raw data, intelligent architecture, and striking design converge to drive absolute market dominance."'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[600px] rounded-[40px] overflow-hidden border border-white/10 relative"
          >
            <ParticleCanvas />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(2,6,23,0.8)] pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tight break-words">Our Mission</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {[
            {
              title: "Architect the Future",
              desc: "Build robust, high performance web infrastructures that scale seamlessly.",
            },
            {
              title: "Empower through Data",
              desc: "Transform complex data streams into clear, actionable business intelligence.",
            },
            {
              title: "Craft with Purpose",
              desc: "Design intuitive, brutally effective user interfaces that captivate audiences and accelerate business growth.",
            },
          ].map((mission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border-t border-blue-500/30 pt-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">{mission.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed">{mission.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-32 bg-gradient-to-b from-[#020617] via-[#060d24] to-[#020617] border-y border-white/5">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 break-words">Why Choose Us</h2>
            <p className="text-xl text-accent font-medium max-w-md">
              The advantages of partnering with a specialized tech collective.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              {
                title: "A Concentrated Strike Team",
                desc: "We replaced bloated agency structures with a highly specialized unit. This guarantees rapid iteration, complete transparency, and uncompromising quality for your projects.",
              },
              {
                title: "Engineered for Growth",
                desc: "Aesthetics catch the eye, but data wins the market. We fuse stunning visual design with deep analytical engineering to accelerate your business forward.",
              },
              {
                title: "Enterprise-Ready Architecture",
                desc: "Your digital presence should be a fortress. We deploy industrial-grade tech stacks to ensure maximum stability, lightning-fast speeds, and ironclad security.",
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

      <section className="px-6 md:px-16 py-32 max-w-[1600px] mx-auto relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tight text-center break-words">Our Core Principles</h2>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-32 relative z-10">
          {[
            {
              num: "01",
              title: "Function First",
              desc: "We believe that a product must work flawlessly before it looks good. But once the architecture is solid, we design it to be visually unforgettable.",
            },
            {
              num: "02",
              title: "Agile",
              desc: "Speed without compromising quality. We adapt quickly to market changes and client needs, ensuring continuous and reliable delivery.",
            },
            {
              num: "03",
              title: "Transparency",
              desc: "We don't cut corners. We write clean, maintainable code and maintain complete transparency with our clients throughout the entire lifecycle.",
            },
          ].map((principle, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-start"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="lg:col-span-5 flex items-baseline gap-4 md:gap-6"
              >
                <span className="text-xl md:text-2xl font-medium text-white/80 shrink-0">
                  {principle.num}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-6xl uppercase font-medium tracking-tight text-white leading-none break-words">
                  {principle.title}
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 + 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <p className="text-xl md:text-3xl text-white/90 leading-[1.6]">
                  {principle.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}