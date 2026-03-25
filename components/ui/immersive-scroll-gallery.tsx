"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

interface Picture {
  src: string;
  scale: MotionValue<number> | null;
}

interface ImmersiveScrollGalleryProps {
  images?: Omit<Picture, "scale">[];
  className?: string;
  quote?: string;
}

const DEFAULT_IMAGES = [
  { src: "/zorman4.jpg", scale: null },
  { src: "/zorman1.jpg", scale: null },
  { src: "/zorman3.jpg", scale: null },
  { src: "/zorman2.jpg", scale: null },
  { src: "/zorman5.jpg", scale: null },
  { src: "/zorman6.jpg", scale: null },
  { src: "/zorman7.jpg", scale: null },
];

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]",
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
  "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

const DEFAULT_QUOTE =
  "Od zasebnih domov do poslovnih prostorov — vsak projekt izvedemo z enako mero natančnosti in skrbjo za kakovost.";

const ImmersiveScrollGallery: React.FC<ImmersiveScrollGalleryProps> = ({
  images = DEFAULT_IMAGES,
  className = "",
  quote = DEFAULT_QUOTE,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Ko slike izginejo jih odstranimo iz DOM-a — ne morejo več vizualno prikazati
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Odstrani slike iz DOM-a ko progress preseže mejo (samo mobile)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) {
      setShowImages(latest < 0.48);
    }
  });

  // Desktop scales — capped pri 0.55
  const scale4 = useTransform(scrollYProgress, [0, 0.55], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 0.55], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 0.55], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 0.55], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 0.55], [1, 9]);

  // Mobile scales — capped pri 0.45 (zoom se ustavi ko slike izginejo)
  const mScale2  = useTransform(scrollYProgress, [0, 0.45], [1, 2]);
  const mScale25 = useTransform(scrollYProgress, [0, 0.45], [1, 2.5]);
  const mScale3  = useTransform(scrollYProgress, [0, 0.45], [1, 3]);

  // Desktop: slike → 0.55, besedilo 0.62–0.78
  const dOpacityImages  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const dOpacityContent = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);
  const dScaleContent   = useTransform(scrollYProgress, [0.62, 0.78], [0.85, 1]);

  // Mobile: slike → 0.45, besedilo 0.55–0.70 (samo opacity, brez scale — ni odkritih robov)
  const mOpacityImages  = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const mOpacityContent = useTransform(scrollYProgress, [0.55, 0.70], [0, 1]);

  const desktopScales  = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];
  const mobileScales   = [mScale2, mScale25, mScale3, mScale25, mScale3, mScale2, mScale25];

  const scales        = isMobile ? mobileScales  : desktopScales;
  const opacityImages = isMobile ? mOpacityImages : dOpacityImages;

  const pictures = images.map((img, index) => ({
    ...img,
    scale: scales[index % 7],
  }));

  return (
    // Mobile: h-[200vh] (enako desktop) — besedilo se prikaže dovolj zgodaj
    <div ref={container} className={`relative bg-white h-[200vh] ${className}`}>
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-white">

        {/* Slike — na mobilnem jih umaknemo iz DOM-a ko izginejo */}
        {(!isMobile || showImages) && pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale, opacity: opacityImages }}
            className="absolute flex items-center justify-center w-full h-full top-0"
          >
            <div className={`relative ${IMAGE_STYLES[index % IMAGE_STYLES.length]}`}>
              <img
                src={src}
                alt={`Referenca ${index + 1}`}
                className="object-cover w-full h-full"
                loading="eager"
                decoding="async"
                style={index === 2 ? { objectPosition: "25% center" } : undefined}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        ))}

        {/* Besedilo — mobile: samo opacity (brez scale, da bg-white vedno pokrije celoten zaslon) */}
        {isMobile ? (
          <motion.div
            style={{ opacity: mOpacityContent }}
            className="absolute inset-0 flex items-center justify-center px-8 bg-white"
          >
            <p className="text-[#0a0a0a]/90 text-xl font-light text-center leading-relaxed tracking-tight max-w-2xl">
              {quote}
            </p>
          </motion.div>
        ) : (
          <motion.div
            style={{ opacity: dOpacityContent, scale: dScaleContent }}
            className="absolute inset-0 flex items-center justify-center px-8 bg-white"
          >
            <p className="text-[#0a0a0a]/90 text-xl md:text-3xl lg:text-4xl font-light text-center leading-relaxed tracking-tight max-w-3xl">
              {quote}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
