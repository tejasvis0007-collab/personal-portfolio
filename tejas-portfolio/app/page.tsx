"use client";

import { useState } from "react";

import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-x-hidden bg-black text-white"
    >
      {/* Animated Aurora Background */}
      <Background />

      {/* Mouse Spotlight */}
      <div
        className="pointer-events-none fixed z-30 h-[500px] w-[500px] rounded-full blur-3xl transition-all duration-75"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          background:
            "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Glass Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}