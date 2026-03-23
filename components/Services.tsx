"use client";

import { motion } from "framer-motion";
import { Grid3X3, Palette, Layers } from "lucide-react";

const services = [
  {
    icon: Grid3X3,
    title: "Kontaktne fasade",
    desc: "ETICS sistemi za novogradnje in prenove. Popolna toplotna izolacija z estetsko dovršenostjo.",
  },
  {
    icon: Palette,
    title: "Barvne študije",
    desc: "Profesionalna vizualizacija barv za vašo fasado. Pomoč pri izbiri idealne barvne sheme.",
  },
  {
    icon: Layers,
    title: "Fasadni sistemi",
    desc: "Celotni sistemi Weber, Baumit, JUB, Demit. EPS, XPS, kamena volna, bakelita.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="storitve" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-4">
            <span className="text-accent text-xs tracking-[0.3em] font-semibold">01</span>
            <h2 className="text-3xl lg:text-4xl font-light text-[#0a0a0a] tracking-tight">
              Naše storitve
            </h2>
          </div>
          <div className="mt-4 w-12 h-px bg-accent" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-[#f5f5f5] border border-[#e0e0e0] hover:border-[#c0c0c0] p-8 rounded-sm transition-colors duration-300 cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 border border-accent/40 flex items-center justify-center mb-6 group-hover:border-accent/70 transition-colors duration-300">
                <service.icon className="text-accent" size={20} />
              </div>

              <h3 className="text-[#0a0a0a] font-medium text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
