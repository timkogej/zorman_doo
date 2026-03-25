"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Let izkušenj" },
  { value: "500+", label: "Projektov" },
  { value: "8", label: "Strokovnjakov" },
  { value: "6", label: "Certifikati" },
];

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Stats() {
  return (
    <section className="py-14 bg-white border-y border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#e0e0e0]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left lg:px-12 first:lg:pl-0 last:lg:pr-0"
            >
              <span
                className="text-accent font-light leading-none mb-2"
                style={{ fontSize: "42px" }}
              >
                {stat.value}
              </span>
              <span className="text-[#777777] text-xs uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
