"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    // Skip splash for returning visitors (session-based)
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setRemove(true);
      document.body.style.overflow = "auto";
      return;
    }
    sessionStorage.setItem('hasVisited', 'true');

    document.body.style.overflow = "hidden";

    const hideTimer = setTimeout(() => setHide(true), 800);

    const removeTimer = setTimeout(() => {
      setRemove(true);
      document.body.style.overflow = "auto";
    }, 1200);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (remove) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden bg-primary flex items-center justify-center transition-all duration-1000 ease-in-out ${
        hide ? "opacity-0 scale-110 blur-xl" : "opacity-100 scale-100 blur-0"
      }`}
    >
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />

      <div className="relative flex flex-col items-center">
        <div className="relative mb-8 animate-float">
          <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full" />

          <Image
            src="/avarice.png"
            alt="AVARICETECH"
            width={120}
            height={120}
            priority
            quality={90}
            className="relative object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          />
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-semibold uppercase mb-4 animate-fade-up">
          AVARICE TECH
        </h1>

        <p className="text-white/40 tracking-[0.3em] text-xs uppercase mb-10 animate-fade-up">
          Crafting Digital Excellence
        </p>

        <div className="relative w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent animate-loading-line" />
        </div>
      </div>
    </div>
  );
}