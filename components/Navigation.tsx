"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Storitve", href: "#storitve" },
  { label: "Reference", href: "#reference" },
  { label: "Sistemi", href: "#sistemi" },
  { label: "O nas", href: "#o-nas" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <span className="text-[#0a0a0a] font-semibold text-sm tracking-widest uppercase leading-tight">
                ZORMAN D.O.O. MOJSTRANA
              </span>
              <span className="text-[#888888] text-[10px] tracking-[0.2em] uppercase leading-tight">
                Izdelava fasad
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#555555] hover:text-[#0a0a0a] text-sm tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#kontakt")}
              className="hidden md:inline-flex items-center px-5 py-2 bg-accent text-[#0a0a0a] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-accent-dark transition-colors duration-200"
            >
              KONTAKT
            </button>
            <button
              className="md:hidden text-[#0a0a0a] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#e0e0e0] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#555555] hover:text-[#0a0a0a] text-sm tracking-wider uppercase py-2 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="mt-2 px-5 py-3 bg-accent text-[#0a0a0a] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-accent-dark transition-colors text-center"
              >
                KONTAKT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
