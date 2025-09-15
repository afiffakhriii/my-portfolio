/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  images: {
    src: string;
    caption: string;
  }[];
  alt: string;
}

export default function ProjectGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const [refLeft, inViewLeft] = useInView({ triggerOnce: false });
  const [refRight, inViewRight] = useInView({ triggerOnce: false });

  const next = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection("left");
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const imageVariants:any = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  const leftColumnVariants :any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightColumnVariants:any = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Kiri: Deskripsi dan Thumbnail */}
      <motion.div
        ref={refLeft}
        variants={leftColumnVariants}
        initial="hidden"
        animate={inViewLeft ? "visible" : "hidden"}
      >
        <p className="mb-6 text-gray-600 dark:text-gray-300">{images[active].caption}</p>
        <div className="flex items-center gap-4">
          <button onClick={prev} className="text-gray-500 hover:text-blue-500" aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? "right" : "left");
                  setActive(i);
                }}
                className={`border-2 rounded-md transition ${
                  active === i ? "border-blue-500" : "border-transparent"
                }`}
              >
                <Image
                  src={img.src}
                  alt={`${alt} Thumbnail ${i + 1}`}
                  width={120}
                  height={90}
                  className="object-cover w-[120px] h-[90px] rounded-md"
                />
              </button>
            ))}
          </div>
          <button onClick={next} className="text-gray-500 hover:text-blue-500" aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>
      </motion.div>

      {/* Kanan: Gambar besar */}
      <motion.div
        ref={refRight}
        variants={rightColumnVariants}
        initial="hidden"
        animate={inViewRight ? "visible" : "hidden"}
        className="relative flex justify-center items-center min-h-[300px]"
      >
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <motion.div
            key={images[active].src}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute"
          >
            <Image
              src={images[active].src}
              alt={`${alt} Image ${active + 1}`}
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-contain max-h-[400px] w-auto"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
