"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // pastikan kamu sudah install lucide-react

interface Props {
  images: string[];
  alt: string;
}

export default function ProjectImageSlider({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative">
      {/* Gambar utama */}
      <div className="mb-6 w-full flex justify-center">
        <Image
          src={images[active]}
          alt={`${alt} Screenshot ${active + 1}`}
          width={800}
          height={500}
          className="rounded-lg shadow-lg object-contain max-h-[400px] w-auto"
        />
      </div>

      {/* Thumbnail dan panah */}
      <div className="flex items-center justify-center gap-4 relative">
        {/* Panah kiri */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`border-2 ${
                active === i
                  ? "border-blue-500"
                  : "border-transparent"
              } rounded-md transition`}
            >
              <Image
                src={img}
                alt={`${alt} Thumbnail ${i + 1}`}
                width={100}
                height={60}
                className="rounded-md object-cover w-[100px] h-[60px]"
              />
            </button>
          ))}
        </div>

        {/* Panah kanan */}
        <button
          onClick={next}
          aria-label="Next image"
          className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
