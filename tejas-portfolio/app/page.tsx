"use client";

import { useState } from "react";

import About from "@/components/About";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFinePointer] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia("(pointer: fine)").matches
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer) return;

    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-x-hidden bg-[#020403] text-white selection:bg-emerald-300 selection:text-black"
    >
      <Background />

      {isFinePointer && (
        <div
          className="pointer-events-none fixed z-30 h-[32rem] w-[32rem] rounded-full blur-3xl transition-transform duration-100 ease-out"
          style={{
            transform: `translate3d(${mousePosition.x - 256}px, ${mousePosition.y - 256}px, 0)`,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(45,212,191,0.09) 35%, transparent 70%)",
          }}
        />
      )}

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
