"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "ETICS sistemi — EPS, XPS, kamena volna, bakelita, pluta",
  "Uradni partnerji Weber, Baumit, JUB in Demit",
  "Certificirana ekipa 12-ih specializiranih delavcev",
  "Brezplačen ogled in svetovanje po meri",
];

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="o-nas"
      className="py-24 lg:py-32 bg-[#f5f5f5] border-t border-[#e0e0e0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-accent text-xs tracking-[0.3em] font-semibold">
                03
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-[#0a0a0a] tracking-tight">
                O podjetju
              </h2>
            </div>
            <div className="w-12 h-px bg-accent mb-8" />
            <p className="text-[#555555] text-base leading-relaxed mb-8">
              Z našim delovanjem na področju zaključnih gradbenih del smo
              pridobili več kot <span className="text-[#0a0a0a]">25 let</span>{" "}
              delovnih izkušenj. Gradbene projekte uspešno zaključujemo z ekipo{" "}
              <span className="text-[#0a0a0a]">dvanajstih zaposlenih</span>, ki so
              strokovno usposobljeni na različnih gradbenih področjih.
            </p>
            <p className="text-[#777777] text-sm leading-relaxed">
              Delujemo na področju celotne Gorenjske in okolice. Vsak projekt
              obravnavamo individualno — od prvega ogleda do predaje ključev.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-3 p-4 bg-white border border-[#e0e0e0] rounded-sm"
              >
                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                <span className="text-[#555555] text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
