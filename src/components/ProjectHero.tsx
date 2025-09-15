"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ProjectHeroProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
}

export default function ProjectHero({ title, description, tech, image, github }: ProjectHeroProps) {
  const [refLeft, inViewLeft] = useInView({ triggerOnce: false });
  const [refRight, inViewRight] = useInView({ triggerOnce: false });

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-32">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Deskripsi kiri */}
        <motion.div
          ref={refLeft}
          initial={{ opacity: 0, x: -50 }}
          animate={inViewLeft ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            🔗 View Source Code on GitHub
          </a>
        </motion.div>

        {/* Gambar kanan */}
        <motion.div
          ref={refRight}
          initial={{ opacity: 0, x: 50 }}
          animate={inViewRight ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src={image}
            alt={`${title} preview`}
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-contain max-h-[400px] w-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
