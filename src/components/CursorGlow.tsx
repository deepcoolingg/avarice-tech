"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        z-[999]
        w-[400px]
        h-[400px]
        rounded-full
        bg-blue-500/10
        blur-[120px]
        transition-transform
        duration-300
      "
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      }}
    />
  );
}