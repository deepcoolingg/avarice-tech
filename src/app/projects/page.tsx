"use client";

import Link from "next/link";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Edit2,
  ShieldCheck,
  Zap,
  Gem,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "FIGTRIES",
    desc: "Advanced analytics and AI-driven platform focused on transforming scattered business data into structured insights, intelligent dashboards, and scalable decision systems.",
    services: "Frontend • Motion • UI Design",
    href: "https://figtries.com",
    image1: "/projects/figtries.png",
    image2: "/projects/figtries2.png",
  },

  {
    title: "BISMARK",
    desc: "Modern corporate digital experience crafted with premium UI systems, scalable architecture, and strong branding strategy to elevate business presence in the digital era.",
    services: "Branding • Website • Development",
    href: "https://bismark.co.id",
    image1: "/projects/bismark.png",
    image2: "/projects/bismark2.png",
  },

  {
    title: "PARTISTIC",
    desc: "Immersive creative studio experience combining motion design, visual storytelling, interaction systems, and futuristic digital aesthetics for modern brands.",
    services: "UI/UX • Motion • Experience",
    href: "https://partistic.com",
    image1: "/projects/parti.png",
    image2: "/projects/parti2.png",
  },
];

const features = [
  {
    title: "User Focused",
    desc: "Designed with intuitive interactions and real user experience.",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },

  {
    title: "High Quality",
    desc: "Pixel-perfect interface with premium visual aesthetics.",
    icon: <Gem className="w-6 h-6 text-blue-500" />,
  },

  {
    title: "Performance",
    desc: "Fast, smooth, and optimized across every device.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
  },

  {
    title: "Reliable",
    desc: "Scalable solutions built for long-term digital growth.",
    icon: (
      <ShieldCheck className="w-6 h-6 text-blue-500" />
    ),
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 md:px-16 pt-36 pb-28 border-b border-white/10 overflow-hidden">
        {/* BG GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px] rounded-full" />

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="uppercase tracking-[0.35em] text-sm text-white/35">
                Our Project Build
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1] tracking-tight break-words">
              We Build Digital
              <br />

              <span className="italic text-accent font-semibold">
                Experiences
              </span>
            </h1>

            <p className="mt-10 text-white/65 text-lg leading-relaxed max-w-xl">
              We craft modern websites and scalable
              digital platforms focused on
              interaction, performance, and premium
              user experience for forward-thinking
              brands.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="relative group"
                >
                  <div className="absolute top-7 left-14 w-full h-[1px] bg-white/10" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:scale-110 transition duration-500">
                    {item.icon}
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold text-xl md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="text-white/45 mt-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT MOCKUP */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: 6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex items-center justify-center min-h-[450px] md:min-h-[720px] w-full"
          >
            <div className="relative w-full h-full flex items-center justify-center transform scale-[0.55] sm:scale-[0.7] lg:scale-100 mt-[-50px] md:mt-0">
            {/* BLUE GLOW */}
            <div className="absolute w-[620px] h-[620px] bg-blue-600/20 blur-[160px] rounded-full" />

            {/* DESKTOP */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-5, -3, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative w-[580px] h-[420px] rounded-[40px] overflow-hidden border border-blue-400/20 bg-[#0f172a] shadow-[0_0_120px_rgba(59,130,246,0.25)]"
              >
              <Image
                src="https://i.pinimg.com/1200x/ca/89/12/ca8912fb998143654316ed16bd4e081d.jpg"
                alt="Website Mockup"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/10 via-[#020617]/20 to-[#020617]/70" />

              <div className="absolute inset-5 rounded-[30px] border border-white/10" />

              <div className="absolute bottom-10 left-10">
                <p className="text-white/40 tracking-[0.35em] text-sm uppercase mb-3">
                  Premium Interface
                </p>
              </div>
            </motion.div>
            </div>

            {/* MOBILE */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [-14, -10, -14],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="absolute z-30 left-6 bottom-12 w-[170px] h-[340px] rounded-[40px] overflow-hidden border border-blue-300/30 bg-[#0f172a] shadow-[0_0_80px_rgba(59,130,246,0.25)]"
            >
              <Image
                src="https://i.pinimg.com/1200x/6e/ed/b4/6eedb4be08132f2b1323040356723922.jpg"
                alt="Mobile Mockup"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full" />

              <div className="absolute bottom-8 left-6">
                <p className="tracking-[0.3em] text-white/40 text-[10px] uppercase">
                  Mobile View
                </p>
              </div>
            </motion.div>

            {/* DASHBOARD */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [8, 5, 8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-0 bottom-4 z-10 w-[260px] h-[240px] rounded-[36px] overflow-hidden border border-blue-300/20 bg-[#111827] shadow-[0_0_70px_rgba(59,130,246,0.2)]"
            >
              <Image
                src="https://i.pinimg.com/736x/a2/a7/dd/a2a7dd7abbc9f05f2ac677c59d50c2db.jpg"
                alt="Dashboard Mockup"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-6 left-6">
                <p className="tracking-[0.3em] text-white/40 uppercase text-sm">
                  Dashboard
                </p>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="px-6 md:px-16 py-32 space-y-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 180,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            className={`grid lg:grid-cols-2 gap-16 md:gap-24 items-center ${
              index % 2 !== 0
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? -100
                    : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: false,
                amount: 0.35,
              }}
            >
              <span className="uppercase tracking-[0.3em] text-sm text-white/35">
                Featured Project • 2026
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mt-5 leading-[1.1] break-words">
                {project.title}
              </h2>

              <p className="text-white/65 text-xl leading-relaxed mt-10 max-w-xl">
                {project.desc}
              </p>

              <div className="mt-14">
                <span className="uppercase tracking-[0.3em] text-sm text-white/35">
                  Services
                </span>

                <p className="text-xl md:text-2xl font-semibold mt-3 md:mt-5">
                  {project.services}
                </p>
              </div>

              <div className="mt-12 w-fit">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-6 bg-white pl-8 pr-2.5 py-2.5 rounded-full overflow-hidden cursor-pointer shadow-sm"
                >
                  <span className="relative z-10 text-[18px] text-[#020617] font-semibold transition-colors duration-300 group-hover:text-white">
                    View Project
                  </span>

                  <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-accent rounded-full transition-transform duration-300">
                    <Edit2 className="w-4 h-4 text-white" />
                  </div>

                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-accent rounded-full scale-100 group-hover:scale-[16] transition-transform duration-500 ease-in-out z-0 origin-center"></div>
                </a>
              </div>
            </motion.div>

            {/* MOCKUP */}
            <motion.div
              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? 120
                    : -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="relative min-h-[400px] md:min-h-[650px] flex items-center justify-center mt-10 md:mt-0"
            >
              <div className="relative flex items-center justify-center transform scale-[0.6] sm:scale-75 lg:scale-100">
              {/* GLOW */}
              <div className="absolute w-[500px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full" />

              {/* MAIN */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[500px] h-[340px] rounded-[40px] overflow-hidden border border-white/10 bg-[#111827] rotate-[-4deg] shadow-[0_0_120px_rgba(59,130,246,0.2)]">
                <Image
                  src={project.image1} // <-- Ganti dari projects jadi project
                  alt={`${project.title} Preview 1`} // Tambahin alt biar warning ESLint hilang
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute bottom-8 left-8">
                  <p className="tracking-[0.3em] uppercase text-white/40 text-sm">
                    Website Preview
                  </p>
                </div>
              </div>
              </div>

              {/* MOBILE */}
              <div className="absolute left-0 bottom-8 w-[150px] h-[300px] rounded-[36px] overflow-hidden border border-white/10 bg-[#111827] rotate-[-12deg] shadow-[0_0_80px_rgba(59,130,246,0.2)]">
                <Image
                  src={project.image2} // <-- Ganti dari projects jadi project
                  alt={`${project.title} Preview 2`}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-full" />
              </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative overflow-hidden rounded-[40px] md:rounded-[50px] border border-white/10 bg-gradient-to-r from-[#020617] to-[#071132] px-6 md:px-20 py-16 md:py-24">
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600/20 blur-[140px]" />

            <div className="relative z-10">
              <span className="uppercase tracking-[0.35em] text-sm text-white/35">
                Let’s Build
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mt-6 leading-[1.1] md:leading-[0.9] break-words">
                Something
                <br />

                <span className="italic text-accent font-semibold">
                  Great
                </span>
              </h2>

              <div className="mt-14">
                <a
                  href="https://wa.me/6285156057722?text=Hello%20Avarice%20Tech,%20I'm%20interested%20in%20discussing%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-6 bg-white pl-8 pr-2.5 py-2.5 rounded-full overflow-hidden w-fit"
                >
                  <span className="relative z-10 text-[18px] text-[#020617] font-semibold group-hover:text-white transition duration-300">
                    Start Project
                  </span>

                  <div className="relative z-10 flex items-center justify-center w-[42px] h-[42px] bg-accent rounded-full">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-accent rounded-full scale-100 group-hover:scale-[16] transition duration-500 z-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}