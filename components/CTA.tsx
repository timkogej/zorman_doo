"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <section
      id="kontakt"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f0f5f2, #ffffff)",
      }}
    >
      <div
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(126,203,161,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Brezplačno svetovanje
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-[#0a0a0a] tracking-tight mb-6 leading-tight">
            Začnite z{" "}
            <span className="text-accent font-semibold">brezplačnim</span>{" "}
            pogovorom
          </h2>
          <p className="text-[#555555] text-base max-w-xl mx-auto leading-relaxed mb-12">
            Povejte nam o svojem objektu — pridemo na ogled in pripravimo ponudbo po vaši meri.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <motion.a
            href="tel:041648314"
            variants={cardVariants}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-4 bg-white border border-[#e0e0e0] hover:border-[#c0c0c0] p-5 rounded-sm cursor-pointer transition-all duration-200"
          >
            <div className="w-10 h-10 border border-accent/40 flex items-center justify-center group-hover:border-accent/70 transition-colors duration-200 shrink-0">
              <Phone className="text-accent" size={16} />
            </div>
            <div className="text-left">
              <p className="text-[#777777] text-[10px] tracking-[0.15em] uppercase mb-1">
                Telefon
              </p>
              <p className="text-[#0a0a0a] text-sm font-medium">041 648 314</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:info@fasaderstvo-zorman.si"
            variants={cardVariants}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-4 bg-white border border-[#e0e0e0] hover:border-[#c0c0c0] p-5 rounded-sm cursor-pointer transition-all duration-200"
          >
            <div className="w-10 h-10 border border-accent/40 flex items-center justify-center group-hover:border-accent/70 transition-colors duration-200 shrink-0">
              <Mail className="text-accent" size={16} />
            </div>
            <div className="text-left">
              <p className="text-[#777777] text-[10px] tracking-[0.15em] uppercase mb-1">
                Email
              </p>
              <p className="text-[#0a0a0a] text-sm font-medium break-all">
                info@fasaderstvo-zorman.si
              </p>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="tel:041648314"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-[#0a0a0a] text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-accent-dark transition-all duration-200 hover:scale-[1.02]"
          >
            <Phone size={14} />
            POKLIČITE NAS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
