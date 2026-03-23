"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const opacityImages = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityContent = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scaleContent = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const pictures = images.map((img, index) => ({
    ...img,
    scale: scales[index % 7],
  }));

  return (
    <div ref={container} className={`relative h-[200vh] bg-white ${className}`}>
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
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
                style={index === 2 ? { objectPosition: "25% center" } : undefined}
              />
              {/* Dark overlay to match site's dark aesthetic */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        ))}

        {/* Reveal text */}
        <motion.div
          style={{ opacity: opacityContent, scale: scaleContent }}
          className="w-full h-full flex items-center justify-center max-w-3xl mx-auto px-8 relative"
        >
          <p
            className="text-[#0a0a0a]/90 text-xl md:text-3xl lg:text-4xl font-light text-center leading-relaxed tracking-tight"
          >
            {quote}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
