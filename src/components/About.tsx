"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 dark:border-blue-400">
            <Image
              src="/images/profile.jpg"
              alt="Afif Fakhri"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I&apos;m a passionate web and mobile developer with a strong focus on
            building fast, responsive, and accessible user interfaces. I
            specialize in front-end development using modern frameworks like
            <strong> Next.js </strong> and <strong> React </strong>, and I enjoy
            transforming ideas into impactful digital experiences. In mobile
            development, I focus on building Android applications using
            <strong> Kotlin </strong> and <strong> Jetpack Compose </strong>,
            delivering clean architecture and intuitive user experiences. I&apos;m
            always eager to learn new technologies, explore creative solutions,
            and contribute to meaningful projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
}