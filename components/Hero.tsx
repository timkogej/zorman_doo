"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, isMobile ? 0.5 : 0.8], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/zorman-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Bottom fade to white */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(255,255,255,0.9),transparent)] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-16 sm:pt-20 lg:pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-6 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
            25+ let izkušenj
          </span>
          <span className="w-6 h-px bg-accent" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-light text-[#0a0a0a] leading-[1.1] tracking-tight mb-6"
        >
          Strokovnjaki za{" "}
          <br className="hidden sm:block" />
          <span className="font-semibold text-accent">kontaktne fasade</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#444444] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kakovostna izvedba fasadnih sistemov z vrhunskimi materiali Weber,
          Baumit, JUB in Demit.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#kontakt")}
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-[#0a0a0a] text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-accent-dark transition-all duration-200 hover:scale-[1.02]"
          >
            BREZPLAČNA PONUDBA
          </button>
          <button
            onClick={() => handleScroll("#reference")}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#0a0a0a]/30 text-[#0a0a0a] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:border-[#0a0a0a]/60 hover:bg-[#0a0a0a]/5 transition-all duration-200"
          >
            REFERENCE →
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll("#storitve")}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#888888]" />
        </motion.div>
        <div className="w-px h-12 bg-gradient-to-b from-[#888888] to-transparent" />
      </motion.div>
    </section>
  );
}
