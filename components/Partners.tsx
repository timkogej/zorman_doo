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

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Partners() {
  return (
    <section id="sistemi" className="py-24 bg-white">
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

        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              whileHover={{ borderColor: "#c0c0c0" }}
              className="group flex flex-col items-center justify-center bg-[#f5f5f5] border border-[#e0e0e0] px-8 py-6 rounded-sm cursor-default transition-all duration-200"
            >
              <span
                className="text-[#555555] group-hover:text-[#333333] font-semibold transition-colors duration-200"
                style={{ fontSize: "18px" }}
              >
                {partner.name}
              </span>
              {partner.sub && (
                <span className="text-[#aaaaaa] text-[10px] tracking-[0.15em] mt-1">
                  {partner.sub}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
