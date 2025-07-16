"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const next = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection("left");
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div className="grid md:grid-cols-2 gap-24 items-center py-24">
      {/* Kiri: Deskripsi dan Thumbnail */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col"
      >
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            {images[active].caption}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="text-gray-500 hover:text-blue-500"
            aria-label="Previous"
          >
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

          <button
            onClick={next}
            className="text-gray-500 hover:text-blue-500"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </motion.div>

      {/* Kanan: Gambar besar dengan animasi saat muncul dan saat pindah */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center min-h-[400px] relative"
      >
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <motion.div
            key={images[active].src}
            custom={direction}
            variants={variants}
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