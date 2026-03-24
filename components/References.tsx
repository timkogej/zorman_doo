"use client";

import { motion } from "framer-motion";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";

export default function References() {
  return (
    <section id="reference" className="bg-white">
      {/* Section header */}
      <div className="pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-accent text-xs tracking-[0.3em] font-semibold">02</span>
              <h2 className="text-3xl lg:text-4xl font-light text-[#0a0a0a] tracking-tight">
                Reference
              </h2>
            </div>
            <div className="mt-4 w-12 h-px bg-accent" />
          </motion.div>
        </div>
      </div>

      {/* Immersive scroll gallery */}
      <ImmersiveScrollGallery />
    </section>
  );
}
