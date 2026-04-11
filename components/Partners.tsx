"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Weber", sub: null },
  { name: "Baumit", sub: null },
  { name: "JUB", sub: null },
  { name: "Demit", sub: null },
  { name: "RÖFIX", sub: null },
  { name: "Caparol", sub: null },
];

// Duplicate for seamless loop
const duplicatedPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section id="sistemi" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#aaaaaa] text-xs tracking-[0.35em] uppercase mb-2">
            Zaupajo nam
          </p>
          <p className="text-[#bbbbbb] text-xs tracking-[0.25em] uppercase">
            Uradni partnerji in certificirani izvajalci
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll strip */}
      <div
        className="w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "partners-scroll 22s linear infinite",
          }}
        >
          {duplicatedPartners.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center bg-[#f5f5f5] border border-[#e0e0e0] px-10 py-6 rounded-sm cursor-default transition-all duration-200 hover:border-[#c0c0c0] hover:scale-[1.04]"
              style={{ minWidth: "160px" }}
            >
              <span
                className="text-[#555555] hover:text-[#333333] font-semibold transition-colors duration-200"
                style={{ fontSize: "18px" }}
              >
                {partner.name}
              </span>
              {partner.sub && (
                <span className="text-[#aaaaaa] text-[10px] tracking-[0.15em] mt-1">
                  {partner.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
